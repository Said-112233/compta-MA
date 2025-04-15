// script.js (Version with Search functionality for Plan Comptable)

// --- Access Data ---
const allClasseData = {
    1: typeof classe1Data !== 'undefined' ? classe1Data : [],
    2: typeof classe2Data !== 'undefined' ? classe2Data : [],
    3: typeof classe3Data !== 'undefined' ? classe3Data : [],
    4: typeof classe4Data !== 'undefined' ? classe4Data : [],
    5: typeof classe5Data !== 'undefined' ? classe5Data : [],
    6: typeof classe6Data !== 'undefined' ? classe6Data : [],
    7: typeof classe7Data !== 'undefined' ? classe7Data : [],
};
const allExplanationsData = typeof explanationsData !== 'undefined' ? explanationsData : {};
const allSocietesData = typeof societesData !== 'undefined' ? societesData : [];

// --- HTML Elements ---
const modePlanBtn = document.getElementById('mode-plan-comptable-btn');
const modeShuruhatBtn = document.getElementById('mode-shuruhat-btn');
const modeSocietesBtn = document.getElementById('mode-societes-btn');
const planNavContainer = document.getElementById('plan-comptable-nav');
const shuruhatNavContainer = document.getElementById('shuruhat-nav');
const societesNavContainer = document.getElementById('societes-nav');
const classSelectorButtons = planNavContainer ? planNavContainer.querySelectorAll('.class-selector button') : [];
const conceptSelectorButtons = shuruhatNavContainer ? shuruhatNavContainer.querySelectorAll('.concept-selector button') : [];
const societeTypeSelectorButtons = societesNavContainer ? societesNavContainer.querySelectorAll('.societe-type-selector button') : [];
const accountDetailsContainer = document.getElementById('account-details');
const initialPromptElement = document.getElementById('initial-prompt');
const initialMsgTextDA = "الرجاء اختيار وضع العرض (دليل الحسابات، مفاهيم ووثائق، أنواع الشركات) من الأعلى، ثم اختر الموضوع المطلوب.";

// Variable to store the currently selected classe for search
let currentClasseForSearch = null;

// --- Mode Switching Function ---
function switchMode(mode) {
    [modePlanBtn, modeShuruhatBtn, modeSocietesBtn].forEach(btn => btn.classList.remove('active-mode-btn'));
    [planNavContainer, shuruhatNavContainer, societesNavContainer].forEach(nav => nav.classList.remove('active-mode-nav'));
    setActiveInternalButton(null, classSelectorButtons);
    setActiveInternalButton(null, conceptSelectorButtons);
    setActiveInternalButton(null, societeTypeSelectorButtons);
    currentClasseForSearch = null; // Reset current class when switching modes

    const promptTextDA = {
        plan: 'اختر صنف الحساب.',
        shuruhat: 'اختر الموضوع.',
        societes: 'اختر نوع الشركة.'
    };
    accountDetailsContainer.innerHTML = `<p id="initial-prompt">${promptTextDA[mode] || initialMsgTextDA}</p>`;

    if (mode === 'plan') {
        modePlanBtn.classList.add('active-mode-btn');
        planNavContainer.classList.add('active-mode-nav');
    } else if (mode === 'shuruhat') {
        modeShuruhatBtn.classList.add('active-mode-btn');
        shuruhatNavContainer.classList.add('active-mode-nav');
    } else if (mode === 'societes') {
        modeSocietesBtn.classList.add('active-mode-btn');
        societesNavContainer.classList.add('active-mode-nav');
    }
}

// --- Helper function to create HTML for a single account item ---
function createAccountItemHTML(account) {
    let journalContent = account.journal_da || '';
    let journalExplanation = '';
    if (journalContent.includes('<strong>الشرح:</strong>')) { try { const m = journalContent.match(/<strong>الشرح:<\/strong>(.*?)($|<\/p>|<\/div>)/is); if (m && m[1]) journalExplanation = `<p class="journal-explanation"><strong>الشرح:</strong>${m[1].trim()}</p>`; } catch (e) { console.error("Error parsing explanation:", e);}}
    else if(journalContent.includes('الشرح المحاسبي:')){ try { if(journalContent.includes('<p><em>')){ journalExplanation = `<p class="journal-explanation">${journalContent.split('<p><em>')[1].split('</em></p>')[0]}</p>`; /* Attempt to remove the explanation part from the original string if needed */ journalContent = journalContent.split('<p><em>الشرح المحاسبي:')[0].trim();} } catch(e){ console.error("Error parsing explication (em):", e);}}
    if (journalExplanation && journalContent.trim().endsWith(journalExplanation.replace('<p class="journal-explanation">','').replace('</p>','').trim())){ journalContent = journalContent.substring(0, journalContent.lastIndexOf(journalExplanation.replace('<p class="journal-explanation">','').replace('</p>','').trim())).trim(); }
     else if (journalExplanation) { try { const r = /<p class="journal-explanation">.*?<\/p>/is; journalContent = journalContent.replace(r,'').trim(); } catch(e){console.error("Error removing explication:", e);} }

    // Make sure journalContent still has content or a placeholder
    if (journalContent === '' && journalExplanation === '' && account.journal_da) { journalContent = account.journal_da } // Restore original if removing expl went wrong
    const journalHTML = journalContent || '<p><em>...</em></p>'; // Default if empty

    return `
        <div class="account-item">
            <h3>${account.numero || ''} - ${account.nom_fr || ''} <span>(${account.nom_da || ''})</span></h3>
            <strong>الشرح بالدارجة:</strong><p>${account.explication_da || '...'}</p>
            ${account.exemple_fr ? `<strong>مثال تطبيقي بالفرنسية:</strong><p class="ltr">${account.exemple_fr}</p>` : ''}
            ${account.exemple_da ? `<strong>ترجمة المثال بالدارجة:</strong><p>${account.exemple_da}</p>` : ''}
            <div class="journal-section">
                <strong>التسجيل في الجورنال (Journal):</strong>
                ${journalHTML}
                ${journalExplanation}
            </div>
        </div>`;
}

// --- Helper function to render a list of accounts ---
function renderAccountList(accountsToRender, container) {
    container.innerHTML = ''; // Clear previous results
    if (accountsToRender.length === 0) {
        container.innerHTML = '<p class="no-results">لا توجد حسابات تطابق بحثك.</p>';
        return;
    }
    accountsToRender.forEach(account => {
        // Append HTML directly without creating a temporary div element first
        container.innerHTML += createAccountItemHTML(account);
    });
}

// --- Search Function ---
function filterAndDisplayAccounts(searchTerm) {
    if (currentClasseForSearch === null) return; // No class selected

    const classeData = allClasseData[currentClasseForSearch] || [];
    const accountListContainer = document.getElementById('account-list-container'); // Get the container for results
    if (!accountListContainer) return; // Should exist if displayAccounts ran correctly

    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    if (!lowerCaseSearchTerm) {
        // If search is empty, show all accounts for the current class
        renderAccountList(classeData, accountListContainer);
        return;
    }

    const filtered = classeData.filter(account => {
        const numMatch = account.numero && account.numero.toString().includes(lowerCaseSearchTerm);
        const frMatch = account.nom_fr && account.nom_fr.toLowerCase().includes(lowerCaseSearchTerm);
        const daMatch = account.nom_da && account.nom_da.toLowerCase().includes(lowerCaseSearchTerm);
        return numMatch || frMatch || daMatch;
    });

    renderAccountList(filtered, accountListContainer);
}


// --- Display Functions (Using data as is - FR/DA mix) ---
function displayAccounts(classeNumber) {
    currentClasseForSearch = classeNumber; // Store the selected class for search

    if (classeNumber === null || isNaN(classeNumber) || !allClasseData[classeNumber]) {
        accountDetailsContainer.innerHTML = `<p>الصنف ${classeNumber} غير موجود.</p>`;
        return;
    }

    const filteredAccounts = allClasseData[classeNumber];
    accountDetailsContainer.innerHTML = ''; // Clear container

    const classeTitleButton = document.querySelector(`button[data-classe="${classeNumber}"]`);
    let classeTitleNode = classeTitleButton ? classeTitleButton.cloneNode(true) : document.createElement('span');
    const innerTransSpan = classeTitleNode.querySelector ? classeTitleNode.querySelector('.button-translation') : null;
    if (innerTransSpan) innerTransSpan.remove();
    const titleTextContent = classeTitleNode.textContent?.trim() || `Classe ${classeNumber}`;

    // Add Title
    const titleElement = document.createElement('h2');
    titleElement.textContent = `الحسابات التابعة لـ: ${titleTextContent}`;
    titleElement.className = 'content-title';
    accountDetailsContainer.appendChild(titleElement);

    // Add Search Bar HTML
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="search" id="account-search-input" placeholder="🔎 بحث برقم أو اسم الحساب...">
    `;
    accountDetailsContainer.appendChild(searchContainer);

    // Add container for account list results
    const accountListContainer = document.createElement('div');
    accountListContainer.id = 'account-list-container';
    accountDetailsContainer.appendChild(accountListContainer);

    // Initial display of all accounts for the selected class
    if (!filteredAccounts || filteredAccounts.length === 0) {
        accountListContainer.innerHTML = `<p class="no-results">لا توجد حسابات للصنف ${classeNumber}.</p>`;
    } else {
        renderAccountList(filteredAccounts, accountListContainer);
    }

    // Attach event listener to the newly created search input
    const searchInput = document.getElementById('account-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            filterAndDisplayAccounts(event.target.value);
        });
    }
}

function displayExplanation(conceptKey) {
    currentClasseForSearch = null; // Clear class context
    if (!conceptKey) return;
    const explanation = allExplanationsData[conceptKey];
    accountDetailsContainer.innerHTML = '';
    if (!explanation) {
        accountDetailsContainer.innerHTML = `<p>الشرح غير متوفر لـ ${conceptKey}.</p>`;
        return;
    }
    const explanationContainer = document.createElement('div');
    explanationContainer.classList.add('explanation-container-display');
    const title = explanation.title || conceptKey;
    const content = explanation.content || 'المحتوى غير متوفر حاليا.';
    explanationContainer.innerHTML = `<h2 class="content-title">${title}</h2> <div class="explanation-content">${content}</div>`;
    accountDetailsContainer.appendChild(explanationContainer);
}

function displaySocieteDetails(societeKey) {
    currentClasseForSearch = null; // Clear class context
    if (!societeKey) return;
    const societe = allSocietesData.find(s => s.key === societeKey);
    accountDetailsContainer.innerHTML = '';
    if (!societe) {
        accountDetailsContainer.innerHTML = `<p>التفاصيل غير متوفرة لـ ${societeKey}.</p>`;
        return;
    }
    const societeContainer = document.createElement('div');
    societeContainer.classList.add('societe-details-container');
    societeContainer.innerHTML += `<h2 class="content-title societe-title">${societe.nom_fr || societeKey}</h2>`;
    societeContainer.innerHTML += `<div class="societe-header"><h3>${societe.nom_da || ''}</h3><div class="societe-description">${societe.description_generale || ''}</div></div>`;
    if (societe.caracteristiques && societe.caracteristiques.length > 0) {
        let tableHTML = `<div class="societe-section"><h4>الخصائص الرئيسية:</h4><table class="company-comparison-table societe-details-table"><thead><tr><th>الخاصية</th><th>التفاصيل</th></tr></thead><tbody>`;
        societe.caracteristiques.forEach(carac => {
            tableHTML += `<tr><th>${carac.prop || ''}</th><td> ${carac.val_fr ? `<span class="details-value-fr">${carac.val_fr}</span>` : ''} ${carac.val_da ? `<span class="darija-explanation">${carac.val_da}</span>` : ''} </td></tr>`;
        });
        tableHTML += '</tbody></table></div>';
        societeContainer.innerHTML += tableHTML;
    }
    if (societe.procedures_creation) { societeContainer.innerHTML += `<div class="societe-section">${societe.procedures_creation}</div>`; }
    if (societe.aspects_fiscaux) { societeContainer.innerHTML += `<div class="societe-section">${societe.aspects_fiscaux}</div>`; }
    accountDetailsContainer.appendChild(societeContainer);
}

// --- وظيفة تحديث الأزرار الداخلية النشطة ---
function setActiveInternalButton(clickedButton, buttonGroup) {
    if (!buttonGroup) return;
    buttonGroup.forEach(btn => btn.classList.remove('active'));
    if (clickedButton && clickedButton.tagName === 'BUTTON') {
        clickedButton.classList.add('active');
    }
}

// --- ربط الأحداث (باستخدام forEach لكل مجموعة) ---
if (modePlanBtn) modePlanBtn.addEventListener('click', () => switchMode('plan'));
if (modeShuruhatBtn) modeShuruhatBtn.addEventListener('click', () => switchMode('shuruhat'));
if (modeSocietesBtn) modeSocietesBtn.addEventListener('click', () => switchMode('societes'));

// Attach listeners to Plan Comptable Class buttons
if (classSelectorButtons) {
    classSelectorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetButton = e.target.closest('button');
            if (!targetButton) return;
            // If not already in 'plan' mode, switch to it
            if (!planNavContainer || !planNavContainer.classList.contains('active-mode-nav')) {
                switchMode('plan');
            }
            const classe = parseInt(targetButton.getAttribute('data-classe'));
            if (!isNaN(classe)) {
                setActiveInternalButton(targetButton, classSelectorButtons);
                displayAccounts(classe); // This will now also add the search bar
            }
        });
    });
}

// Attach listeners to Shuruhat Concept buttons
if (conceptSelectorButtons) {
    conceptSelectorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetButton = e.target.closest('button');
            if (!targetButton) return;
            if (!shuruhatNavContainer || !shuruhatNavContainer.classList.contains('active-mode-nav')) {
                 switchMode('shuruhat');
            }
            const concept = targetButton.getAttribute('data-concept');
            if (concept) {
                setActiveInternalButton(targetButton, conceptSelectorButtons);
                displayExplanation(concept);
            }
        });
    });
}

// Attach listeners to Societes Type buttons
if (societeTypeSelectorButtons) {
    societeTypeSelectorButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetButton = e.target.closest('button');
            if (!targetButton) return;
             if (!societesNavContainer || !societesNavContainer.classList.contains('active-mode-nav')) {
                 switchMode('societes');
             }
            const societeKey = targetButton.getAttribute('data-societe');
            if (societeKey) {
                setActiveInternalButton(targetButton, societeTypeSelectorButtons);
                displaySocieteDetails(societeKey);
            }
        });
    });
}


// --- تشغيل التطبيق ---
function initializeApp() {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    switchMode('plan'); // Start with Plan Comptable mode
    const initialP = document.getElementById('initial-prompt');
    if (initialP) initialP.textContent = initialMsgTextDA; // Set initial DA message

     // Pre-select the first class button and display its accounts automatically? Optional.
    // If you want to automatically show Classe 1 on load:
    // const firstClasseBtn = planNavContainer?.querySelector('button[data-classe="1"]');
    // if(firstClasseBtn) {
    //    setActiveInternalButton(firstClasseBtn, classSelectorButtons);
    //    displayAccounts(1);
    // }
}

initializeApp(); // Call the initialization function