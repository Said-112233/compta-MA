// data/classe5.js
// CLASSE 5 : COMPTES DE TRESORERIE
const classe5Data = [
    // === 51 TRESORERIE - ACTIF ===
    {
        classe: 5, numero: '5111', nom_fr: 'Chèques à encaisser ou à l\'encaissement', nom_da: 'الشيكات للتحصيل أو قيد التحصيل',
        explication_da: 'الشيكات لي شداتهم الشركة ومزال متفيرساوش فالبانكة، أو دفعتهم لكن البانكة مازال ماقيداتش الفلوس فالحساب.',
        journal_da: '<p><em>[عند استلام شيك: Debit 51111/ Credit Client (3421). عند إيداع الشيك: Debit 51112/ Credit 51111. عند التحصيل: Debit 5141 / Credit 51112.]</em></p>'
    },
    { classe: 5, numero: '51111', nom_fr: 'Chèques en portefeuille', nom_da: 'الشيكات في المحفظة (مزال عند الشركة)', explication_da: 'الشيكات اللي وصلات الشركة من الكليان وباقيين عندها (فالمكتب مثلا).', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 5, numero: '51112', nom_fr: 'Chèques à l\'encaissement', nom_da: 'الشيكات قيد التحصيل (تدفعو للبانكة)', explication_da: 'الشيكات اللي دفعتهم الشركة للبنكة باش تدخل فلوسهم للحساب.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 5, numero: '5113', nom_fr: 'Effets à encaisser ou à l\'encaissement', nom_da: 'الكمبيالات للتحصيل أو قيد التحصيل',
        explication_da: 'الأوراق التجارية (الكمبيالات) لي في يد الشركة وكتسنا توصل الوقيتة ديالها باش تاخد فلوسها، أو دفعتها للبنكة باش تحصلها نيابة عنها.',
        journal_da: '<p><em>[عند استلام الكمبيالة: Debit 3425. عند اقتراب الاستحقاق أو الإرسال للتحصيل: Debit 5113 / Credit 3425. عند التحصيل: Debit 5141 / Credit 5113.]</em></p>'
    },
    { classe: 5, numero: '51131', nom_fr: 'Effets échus à encaisser', nom_da: 'الكمبيالات المستحقة للتحصيل (فات وقتها)', explication_da: 'كمبيالات وصل تاريخ الدفع ديالها والشركة مازال ماخدات فلوسها.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 5, numero: '51132', nom_fr: 'Effets à l\'encaissement', nom_da: 'الكمبيالات قيد التحصيل (عند البانكة)', explication_da: 'كمبيالات دفعاتهم الشركة للبانكة باش تحصلهم.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 5, numero: '5115', nom_fr: 'Virement de fonds', nom_da: 'تحويل الأموال (حساب وسيط)',
        explication_da: 'حساب مؤقت كيستعملوه فاش كنبغيو ندوزو فلوس من بنكة لبنكة، أو من لاكيس للبانكة، أو العكس، باش نتبعو العملية وميوقعش خلط.',
        exemple_fr:'Virement 10.000 DH de Caisse vers Banque.', exemple_da:'دوزنا 10.000 درهم من لاكيس للبانكة.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
        <tr><td>5115</td><td>Virement de fonds</td><td class="debit-col">10,000.00</td><td></td></tr>
        <tr><td>5161</td><td>Caisse</td><td></td><td class="credit-col">10,000.00</td></tr>
        <tr><td colspan="4"><em>(في تاريخ دخول الفلوس للبانكة)</em></td></tr>
        <tr><td>5141</td><td>Banques</td><td class="debit-col">10,000.00</td><td></td></tr>
        <tr><td>5115</td><td>Virement de fonds</td><td></td><td class="credit-col">10,000.00</td></tr>
        </tbody></table><p class="journal-explanation"><strong>الشرح:</strong> أولا كنخرجو الفلوس من المصدر (Credit 5161) ل حساب وسيط (Debit 5115). من بعد كندخلو الفلوس لوجهتها (Debit 5141) وكنصفيو الحساب الوسيط (Credit 5115).</p>`
    },
    { classe: 5, numero: '5118', nom_fr: 'Autres valeurs à encaisser', nom_da: 'قيم أخرى للتحصيل', explication_da: 'أوراق أخرى كتمثل فلوس غادا تدخل للشركة ولكن ماشي شيك أو كمبيالة (مثل كوبون الفائدة...).', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 5, numero: '5141', nom_fr: 'Banques (solde débiteur)', nom_da: 'البنوك (رصيد مدين - موجب)',
        explication_da: 'كيمثل مجموع الفلوس اللي كاينين فالحسابات البنكية ديال الشركة (ملي كيكون الرصيد ف صالح الشركة).',
        exemple_fr:'Réception paiement client par virement 24K.', exemple_da:'وصلنا خلاص كليان ب 24 ألف بالتحويل.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
            <tr><td>5141</td><td>Banques</td><td class="debit-col">24,000.00</td><td></td></tr>
            <tr><td>3421</td><td>Clients</td><td></td><td class="credit-col">24,000.00</td></tr></tbody></table>
            <p class="journal-explanation"><strong>الشرح:</strong> البانكة زادت (Debit) والدين اللي كنا كنسالو للكليان نقص (Credit).</p>`
    },
    { classe: 5, numero: '5143', nom_fr: 'Trésorerie Générale (TGR)', nom_da: 'الخزينة العامة للمملكة', explication_da: 'حساب الشركة لدى الخزينة العامة للمملكة.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 5, numero: '5146', nom_fr: 'Chèques postaux', nom_da: 'الشيكات البريدية (بريد بنك)', explication_da: 'حساب الشركة ف بريد بنك.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 5, numero: '5148', nom_fr: 'Autres établissements financiers et assimilés (soldes débiteurs)', nom_da: 'مؤسسات مالية أخرى وما شابهها (أرصدة مدينة)', explication_da: 'حسابات مدينة لدى مؤسسات مالية غير بنكية (شركات التمويل...).', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 5, numero: '5161', nom_fr: 'Caisse', nom_da: 'الصندوق (لاكيس)',
        explication_da: 'كيمثل الفلوس الكاش السائلة اللي كاينين فعليا فالمقر ديال الشركة (المكتب، المحل...).',
        exemple_fr:'Paiement timbres 150 DH en espèces.', exemple_da:'خلاص التنابر ب 150 درهم كاش.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
            <tr><td>61671</td><td>Droits enregistrement timbre</td><td class="debit-col">150.00</td><td></td></tr>
            <tr><td>5161</td><td>Caisse</td><td></td><td class="credit-col">150.00</td></tr></tbody></table>
            <p class="journal-explanation"><strong>الشرح:</strong> المصروف زاد (Debit)، والصندوق نقص (Credit).</p>`
    },
    { classe: 5, numero: '51611', nom_fr: 'Caisse Centrale', nom_da: 'الصندوق المركزي', explication_da: 'الصندوق الرئيسي فالشركة.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 5, numero: '51613', nom_fr: 'Caisse (succursale ou agence A)', nom_da: 'صندوق (الفرع أ)', explication_da: 'الصندوق الخاص بفرع أو وكالة معينة.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 5, numero: '5165', nom_fr: 'Régies d\'avances et accréditifs', nom_da: 'وكالات التسبيقات والاعتمادات', explication_da: 'الفلوس اللي كتعطى لشي موظف (وكيل مصاريف) باش يخلص منها مصاريف صغيرة ويجيب المبررات ديالها (Justificatifs).', journal_da: '<p><em>[عند إعطاء الفلوس: Debit 5165 / Credit Caisse(5161). عند تبرير المصاريف: Debit Charges(6xxx) / Credit 5165.]</em></p>'},

    // === 55 TRESORERIE - PASSIF ===
    {
        classe: 5, numero: '5520', nom_fr: 'Crédits d\'escompte', nom_da: 'قروض الخصم (على الكمبيالات)',
        explication_da: 'الفلوس لي عطاتنا البانكة على كمبيالات الكليان لي عطيناها ليهم قبل تاريخ الدفع ديالهم (بحال إلا بعناهم ليها ناقصين شوية). كيولي دين على الشركة للبنكة، فإذا مرجعش الكليان، خاص الشركة ترد الفلوس.',
        journal_da: '<p><em>[عند خصم الكمبيالة: Debit Banque(5141) + Charges intérêts(6311) + Services bancaires(6147) / Credit 5520]</em></p>'
    },
    {
        classe: 5, numero: '5530', nom_fr: 'Crédits de trésorerie', nom_da: 'قروض الخزينة (تسهيلات الصندوق)',
        explication_da: 'هو الدين اللي كايترتب على الشركة فاش كتسحب من البانكة أكتر من داكشي لي عندها فالحساب (السحب على المكشوف أو Découvert)، أو قروض قصيرة جداً لتغطية الحاجة المؤقتة للفلوس.',
        journal_da: '<p><em>[لا يسجل مباشرة، لكن هو اللي كيخلي رصيد 5141 يولي دائن. يتم إظهاره تحت 5541 فالبيلان.]</em></p>'
    },
    {
        classe: 5, numero: '5541', nom_fr: 'Banques (solde créditeur)', nom_da: 'البنوك (رصيد دائن - سحب على المكشوف)',
        explication_da: 'ملي كيكون الرصيد الفعلي ديال الحساب البنكي للشركة سالب (ناقص فلوس). كيمثل دين قصير الأجل تجاه البنك.',
        journal_da: '<p><em>[هذا الحساب لا يستعمل في القيود اليومية غالبا، لكنه يظهر الرصيد الدائن الفعلي لحساب 5141 في جهة الخصوم (Passif) ضمن الخزينة-خصوم.]</em></p>'
    },
    { classe: 5, numero: '5548', nom_fr: 'Autres établissements financiers et assimilés (soldes créditeurs)', nom_da: 'مؤسسات مالية أخرى وما شابهها (أرصدة دائنة)', explication_da: 'ديون قصيرة الأجل لمؤسسات تمويل أخرى.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},

    // === 59 PROVISIONS POUR DEPRECIATION DES COMPTES DE TRESORERIE ===
     // (المبدأ العام: Debit 6396 / Credit 5900)
     {
        classe: 5, numero: '5900', nom_fr: 'Provisions pour dépréciation des comptes de trésorerie', nom_da: 'مؤونات لانخفاض قيمة حسابات الخزينة',
        explication_da: 'كتدار فاش كيكون شك كبير بلي شي شيك مردود مغاديش يتخلص، أو أن القيمة ديال سندات التوظيف (TVP) نقصات بشكل كبير مقارنة بسعر الشراء ديالها. الهدف هو الاعتراف بالخسارة المحتملة مسبقاً.',
        journal_da: '<p><em>[مثلا لتغطية خطر عدم تحصيل شيك مردود: Debit 6396 / Credit 5900. عند التأكد من عدم التحصيل أو تحصيله جزئيا: يتم استعمال الخسارة والمؤونة.]</em></p>'
    },

]; // نهاية بيانات الفئة 5