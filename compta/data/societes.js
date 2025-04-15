// data/societes.js
// بيانات أنواع الشركات والأشكال الفردية الشائعة في المغرب مع تفاصيل ضريبية واجتماعية إضافية

const societesData = [
    { // المقاول الذاتي
        key: 'autoentrepreneur',
        nom_fr: 'Auto-entrepreneur',
        nom_da: 'المقاول الذاتي',
        description_generale: `
            <p>هو نظام خاص ومبسط <strong>للأشخاص الطبيعيين</strong> فقط، يسمح بممارسة أنشطة صناعية، تجارية، حرفية أو خدماتية (محددة بالقانون) بشكل فردي مع الاستفادة من نظام ضريبي واجتماعي جد مبسط.</p>
            <p>لا يعتبر شركة ولا يتمتع بشخصية معنوية مستقلة. يجب عدم تجاوز سقف معين لرقم المعاملات السنوي للبقاء ضمن هذا النظام.</p>
        `,
        caracteristiques: [
            { prop: 'Nature Juridique', val_fr: 'Personne Physique (Statut spécifique)', val_da: 'شخص طبيعي بنظام خاص' },
            { prop: 'Activités Autorisées', val_fr: 'Indus./Comm./Artis. ou Services (Liste limitée)', val_da: 'صناعية/تجارية/حرفية أو خدمات (ضمن قائمة محدودة)' },
            { prop: 'Plafond CA Annuel (Exemple 2023)', val_fr: '500 KDH (Services) / 200 KDH (Autres)', val_da: '500 ألف للخدمات / 200 ألف للأنشطة الأخرى (يجب التأكد من السقف الحالي)' },
            { prop: 'Impôt sur le Revenu (IGR)', val_fr: 'Libératoire: 0.5% ou 1% sur CA encaissé', val_da: 'إبرائي: 0.5% أو 1% على رقم المعاملات المحصل' },
            { prop: 'Taxe Professionnelle', val_fr: 'Exonération 5 ans', val_da: 'إعفاء من الباتانتا لـ 5 سنوات' },
            { prop: 'TVA', val_fr: 'Hors champ (Franchise)', val_da: 'معفي من TVA' },
            { prop: 'CNSS', val_fr: 'Régime spécifique CNAM AE (cotisation basée sur CA)', val_da: 'نظام CNAM خاص (الاشتراك حسب CA المصرح به)' },
            { prop: 'Comptabilité', val_fr: 'Registre Recettes obligatoire', val_da: 'دفتر للمداخيل إلزامي' },
            { prop: 'Responsabilité', val_fr: 'Indéfinie (sur patrimoine personnel)', val_da: 'غير محدودة (تمس الأموال الشخصية)' },
            { prop: 'Employés', val_fr: 'Interdit d\'embaucher', val_da: 'لا يمكن تشغيل موظفين بهذا النظام' }
        ],
        procedures_creation: `
            <h4>إجراءات التسجيل كمقاول ذاتي:</h4>
            <ul>
                <li>التسجيل عبر الإنترنت في السجل الوطني للمقاول الذاتي (rn.ae.gov.ma).</li>
                <li>الحصول على بطاقة المقاول الذاتي.</li>
                <li>لا حاجة لـ RC أو Statuts أو Capital.</li>
            </ul>
        `,
        aspects_fiscaux: `
            <h4>التصريحات والضرائب للمقاول الذاتي:</h4>
            <ul>
                <li><strong>تصريح ربع سنوي:</strong> تصريح برقم المعاملات المحصل خلال الربع سنة ودفع الـ IGR المقابل له (0.5% أو 1%).</li>
                <li><strong>CNSS:</strong> دفع الاشتراكات ربع سنوياً إذا كان منخرطاً.</li>
                <li>لا توجد تصريحات سنوية معقدة (Liasse Fiscale، إيداع قوائم...).</li>
            </ul>
            <p><strong>هام:</strong> الخروج من النظام يصبح إلزامياً إذا تم تجاوز سقف رقم المعاملات لعامين متتاليين، أو يمكن الخروج منه اختيارياً للانتقال إلى نظام شركة.</p>
        `
    },
    { // SARL AU
        key: 'sarl_au',
        nom_fr: 'Société à Responsabilité Limitée à Associé Unique (SARL AU)',
        nom_da: 'الشركة ذات المسؤولية المحدودة بشريك واحد',
        description_generale: `
            <p>هي شركة تجارية حقيقية (Personne Morale) لكن يملكها <strong>شخص واحد فقط</strong> طبيعي أو معنوي (Associé Unique). هي الشكل الأنسب لمن يريد تأسيس شركة والاستفادة من المسؤولية المحدودة ولكن ليس لديه شركاء.</p>
            <p>تخضع تقريباً لنفس قواعد SARL العادية فيما يخص التأسيس والتسيير والضرائب، مع تبسيطات قليلة.</p>
        `,
        caracteristiques: [
             { prop: 'Nature Juridique', val_fr: 'Personne Morale (Société)', val_da: 'شركة ذات شخصية معنوية' },
            { prop: 'Associés', val_fr: 'Un seul associé (personne physique ou morale)', val_da: 'شريك واحد فقط (فرد أو شركة أخرى)' },
             { prop: 'Libération Capital', val_fr: 'Min ¼ constit, reste 5 ans max (si >100 KDH)', val_da: 'ربع فاللول، الباقي على 5 سنين (خاصة إذا كان الرأس مال كبير)' },
            { prop: 'Capital minimum', val_fr: 'Pas de minimum légal', val_da: 'لا يوجد حد أدنى' },
            { prop: 'Responsabilité', val_fr: 'Limitée aux apports', val_da: 'محدودة بمقدار مساهمة الشريك الوحيد' },
            { prop: 'Droits sociaux', val_fr: 'Parts sociales (détenues par l\'associé unique)', val_da: 'حصص اجتماعية (مملوكة للشريك الوحيد)' },
             { prop: 'Dirigeant', val_fr: 'Gérant (l\'associé unique ou un tiers)', val_da: 'مسير (غالبا هو الشريك الوحيد، أو شخص آخر)' },
            { prop: 'Prise de décisions', val_fr: 'Décisions de l\'associé unique (formalisées)', val_da: 'قرارات يتخذها الشريك الوحيد (تتطلب توثيقا كتابيا)' },
             { prop: 'Impôt', val_fr: 'IS obligatoire', val_da: 'الضريبة على الشركات (IS) إلزامية' },
             { prop: 'Comptabilité', val_fr: 'Comptabilité commerciale complète', val_da: 'محاسبة تجارية كاملة إلزامية' }
        ],
        procedures_creation: `
            <h4>إجراءات التأسيس لـ SARL AU:</h4>
            <ul>
                <li>تتبع نفس خطوات SARL العادية (شهادة سلبية، Statuts لكن بصيغة الشريك الوحيد، تسجيل، إيداع RC، ضرائب، CNSS، إعلانات...).</li>
                 <li>النظام الأساسي يوضح أن الشركة بشريك وحيد.</li>
            </ul>
        `,
        aspects_fiscaux: `
            <h4>النظام الضريبي والاجتماعي والمحاسبي لـ SARL AU</h4>
             <ul>
                <li><strong>الضريبة:</strong> تخضع <strong>إلزامياً</strong> لـ<strong>الضريبة على الشركات (IS)</strong> بنفس النسب المطبقة على SARL العادية (نسب تصاعدية حسب شطر الربح). ملزمة بدفع <strong>التسبيقات (Acomptes provisionnels)</strong> كل 3 أشهر ودفع الرصيد السنوي.</li>
                 <li><strong>TVA:</strong> تخضع لـ TVA بنفس قواعد الشركات الأخرى (إذا كان النشاط خاضعًا وتجاوز رقم المعاملات الحد)، وتقدم إقرارات ودفعات <strong>شهرية أو ربع سنوية</strong>.</li>
                <li><strong>الضريبة المهنية (Patente):</strong> تخضع لها سنوياً (مع إمكانية إعفاء مؤقت للشركات الجديدة). ورسوم جماعية أخرى.</li>
                 <li><strong>IGR Source:</strong> إذا كان الشريك الوحيد يتقاضى أجراً كمسير، أو إذا شغّلت الشركة موظفين، فهي ملزمة باقتطاع وتوريد <strong>IGR على الأجور</strong> شهرياً.</li>
                <li><strong>CNSS:</strong>
                    <ul>
                        <li><strong>الشركة (المشغل):</strong> يجب انخراط الشركة والحصول على رقمها الخاص.</li>
                         <li><strong>المسير (الشريك الوحيد):</strong> إذا كان يتقاضى <strong>أجراً</strong> من الشركة، فانخراطه <strong>إلزامي</strong> في نظام الأجراء لدى CNSS (مع اشتراكات AMO إجبارية). إذا لم يكن يتقاضى أجراً رسمياً وكان شريكاً أغلبية، يمكنه اختيار الانخراط في نظام العمال غير الأجراء (TNS) للاستفادة من AMO أو عدم الانخراط.</li>
                        <li><strong>العمال:</strong> تسجيلهم في CNSS إجباري مع التصريح الشهري بالأجور ودفع الاشتراكات (حصة الأجير + حصة المشغل).</li>
                     </ul>
                </li>
                <li><strong>المحاسبة المطلوبة:</strong> <strong>إلزامية مسك محاسبة تجارية كاملة</strong> (دفتر يومية، دفتر أستاذ، دفتر جرد...) وفقًا للمعايير المحاسبية المغربية (CGNC) وإعداد <strong>القوائم المالية السنوية (Bilan, CPC, ETIC)</strong>.</li>
                 <li><strong>التصريحات والدفعات الدورية للمحاسب:</strong>
                    <ul>
                         <li>تصريح ودفع TVA (شهري أو ربع سنوي).</li>
                         <li>تصريح ودفع IGR على الأجور (شهري).</li>
                         <li>تصريح ودفع اشتراكات CNSS وغيرها من الصناديق (شهري).</li>
                         <li>دفع التسبيقات الأربعة للضريبة على الشركات (IS Acomptes).</li>
                     </ul>
                </li>
                <li><strong>أعمال المحاسب السنوية الرئيسية:</strong>
                    <ul>
                        <li>أعمال الجرد نهاية السنة (Inventaire physique, évaluation...).</li>
                         <li>تسجيل قيود التسوية نهاية السنة (Amortissements, Provisions, Régularisations...).</li>
                         <li>إعداد ميزان المراجعة بعد الجرد (Balance après inventaire).</li>
                         <li>إعداد القوائم المالية النهائية (Bilan, CPC, ETIC).</li>
                        <li>حساب الضريبة على الشركات (IS) النهائية للسنة.</li>
                        <li>إعداد وتجهيز الحصيلة الضريبية (Liasse fiscale) للإيداع.</li>
                        <li>إعداد التصريح السنوي بالأجور (Etat 9421).</li>
                         <li>المساعدة في إعداد تقارير التسيير ومحاضر القرارات للشريك الوحيد.</li>
                         <li>المساهمة في إيداع الحسابات السنوية بالمحكمة التجارية.</li>
                     </ul>
                 </li>
            </ul>
        `
    },
    { // SARL (العادية)
        key: 'sarl',
        nom_fr: 'Société à Responsabilité Limitée (SARL)',
        nom_da: 'الشركة ذات المسؤولية المحدودة (بشركاء)',
        description_generale: `
            <p>هي شركة تجارية يؤسسها شريكان أو أكثر، وتكون مسؤولية كل شريك محدودة في حدود حصته في رأس المال.</p>
             <p>تعتبر الخيار الأكثر شيوعاً للشركات الصغيرة والمتوسطة بالمغرب لمرونتها ومسؤوليتها المحدودة.</p>
        `,
        caracteristiques: [
             { prop: 'Associés', val_fr: '2 ou plus', val_da: 'شريكين أو أكثر' },
             { prop: 'Libération Capital', val_fr: 'Min ¼ constit, reste 5 ans max', val_da: 'على الأقل الربع عند التأسيس، والباقي في مدة أقصاها 5 سنوات' },
            { prop: 'Capital minimum', val_fr: 'Pas de minimum légal', val_da: 'لا يوجد حد أدنى قانوني' },
            { prop: 'Responsabilité', val_fr: 'Limitée aux apports', val_da: 'محدودة بقيمة المساهمات فقط' },
            { prop: 'Droits sociaux', val_fr: 'Parts sociales (cession réglementée)', val_da: 'حصص اجتماعية (تفويتها منظم)' },
             { prop: 'Dirigeant', val_fr: 'Gérant(s) (associé ou non)', val_da: 'مسير واحد أو أكثر' },
             { prop: 'Prise de décisions', val_fr: 'Assemblée Générale des associés', val_da: 'قرارات تتخذها الجمعية العامة للشركاء' },
             { prop: 'Impôt', val_fr: 'IS obligatoire', val_da: 'الضريبة على الشركات (IS) إلزامية' },
             { prop: 'Comptabilité', val_fr: 'Comptabilité commerciale complète', val_da: 'محاسبة تجارية كاملة إلزامية' },
             { prop: 'CNSS', val_fr: 'Obligatoire pour salariés et gérant rémunéré', val_da: 'إلزامي للعمال والمسير المأجور' }
        ],
        procedures_creation: `
            <h4>إجراءات التأسيس لـ SARL (بشركاء):</h4>
            <ul><li>نفس خطوات SARL AU مع تكييف النظام الأساسي ليشمل كل الشركاء وحصصهم وقواعد اتخاذ القرار (مثل نسبة الأغلبية المطلوبة للقرارات).</li></ul>
        `,
        aspects_fiscaux: `
            <h4>الضرائب والتصريحات لـ SARL (بشركاء):</h4>
            <ul><li><strong>نفس الالتزامات الضريبية والاجتماعية والمحاسبية السنوية والدورية تماماً مثل SARL AU</strong>، مع ضرورة الاهتمام بإعداد وتوثيق محاضر الجمعيات العامة العادية (للمصادقة على الحسابات) والاستثنائية (لتغييرات كبرى) للشركاء.</li></ul>
        `
    },
    { // SA
        key: 'sa',
        nom_fr: 'Société Anonyme (SA)',
        nom_da: 'شركة المساهمة',
        description_generale: `<p>هي شركة الأموال بامتياز، تُؤسس غالباً للمشاريع الكبيرة والاستثمارات الضخمة، حيث يمكنها جمع رؤوس أموال كبيرة من عدد كبير من المساهمين. أسهمها قابلة للتداول بسهولة، وقد تكون مدرجة في البورصة.</p><p>تتطلب إجراءات تأسيس وتسيير أكثر تعقيداً من SARL ووجود هيئات رقابية (مثل مراقب الحسابات).</p>`,
        caracteristiques: [
             { prop: 'Libération Capital (Numéraire)', val_fr: 'Min ¼ constit, reste 3 ans max', val_da: 'ربع رأس المال النقدي عند التأسيس، والباقي خلال 3 سنوات كحد أقصى' },
            { prop: 'Statuts associés', val_fr: 'Actionnaires (Non commerçants)', val_da: 'مساهمون، لا يكتسبون صفة التاجر' },
            { prop: 'Responsabilité', val_fr: 'Limitée à l\'apport (action)', val_da: 'محدودة بقيمة الأسهم التي يملكونها' },
            { prop: 'Dirigeant', val_fr: 'Conseil d\'Administration (avec PDG ou P + DG) OU Conseil de Surveillance et Directoire (avec DG)', val_da: 'تسيير عبر مجلس إدارة ورئيسه/مدير عام أو عبر مجلس إدارة جماعية ومجلس رقابة (أكثر تعقيدًا)' },
            { prop: 'Capital minimum', val_fr: '300 000 DH (ou 3 M DH si Appel Public à l\'Epargne)', val_da: '300 ألف درهم (أو 3 مليون درهم إذا دعت الجمهور للاكتتاب أو كانت مدرجة بالبورصة)' },
            { prop: 'Droits sociaux', val_fr: 'Actions', val_da: 'أسهم قابلة للتداول بحرية (ما لم ينص النظام الأساسي على قيود معينة)' },
            { prop: 'Nombre associés', val_fr: 'Min 5 Actionnaires', val_da: '5 مساهمين على الأقل' },
            { prop: 'Valeur nominale', val_fr: 'Min 50 DH (ou 10 DH si la société est cotée)', val_da: 'السهم الواحد يجب أن لا يقل عن 50 درهم (أو 10 دراهم للشركات المدرجة)' }
        ],
        procedures_creation: `
            <h4>إجراءات التأسيس لـ SA:</h4>
            <ul><li>إجراءات تأسيس معقدة تتطلب نظام أساسي دقيق، غالباً يتم عبر موثق.</li><li>إلزامية تعيين مراقب حسابات واحد أو أكثر (CAC) منذ التأسيس.</li><li>تجميد ربع رأس المال النقدي على الأقل.</li><li>عقد جمعية عامة تأسيسية وإجراءات تسجيل ونشر قانوني مفصلة.</li></ul>`,
        aspects_fiscaux: `
            <h4>النظام الضريبي والاجتماعي والمحاسبي لـ SA</h4>
             <ul><li><strong>الضريبة:</strong> خاضعة لـ <strong>IS إلزامياً</strong>.</li><li><strong>TVA, Patente, IGR Source:</strong> نفس التزامات SARL.</li><li><strong>CNSS:</strong> إلزامي للعمال. أعضاء مجلس الإدارة والمسيرون يتم التعامل مع وضعهم حسب طبيعة عملهم وأجورهم.</li><li><strong>المحاسبة:</strong> كاملة وإلزامية مع وجود رقابة دائمة من مراقب الحسابات (CAC).</li><li><strong>التصريحات:</strong> نفس التصريحات الدورية والسنوية للـ IS و TVA و CNSS، بالإضافة إلى متطلبات خاصة بالحكامة وإصدار تقارير للمساهمين والعموم (خاصة إذا كانت APE).</li><li><strong>أعمال المحاسب/المراقب:</strong> بالإضافة لمهام المحاسبة العامة، هناك دور كبير للمراقب في التأكد من صحة الحسابات وتقديم تقرير للجمعية العامة، ومهام المحاسب تشمل المساعدة في إعداد التقارير المالية المفصلة المطلوبة.</li></ul>`
    },
    { // SNC
        key: 'snc', nom_fr: 'Société en Nom Collectif (SNC)', nom_da: 'شركة التضامن',
        description_generale: `<p>شركة أشخاص بمسؤولية مطلقة وتضامنية بين جميع الشركاء (كلهم يكتسبون صفة التاجر).</p><p>تأسيسها بسيط لكن مخاطرها عالية على الشركاء.</p>`,
        caracteristiques: [ { prop: 'Libération Capital', val_fr: 'Librement fixée', val_da: 'حسب الاتفاق بالنظام' }, { prop: 'Associés', val_fr: 'Min 2 (Tous Commerçants)', val_da: '2 على الأقل، كلهم تجار' }, { prop: 'Responsabilité', val_fr: 'Indéfinie et solidaire', val_da: 'مطلقة وتضامنية وشخصية' }, { prop: 'Dirigeant', val_fr: 'Gérant(s)', val_da: 'مسير واحد أو أكثر' }, { prop: 'Capital minimum', val_fr: 'Aucun', val_da: 'لا يوجد' }, { prop: 'Droits sociaux', val_fr: 'Parts sociales (cession unanime)', val_da: 'حصص (تفويتها بإجماع الشركاء)' }, { prop: 'Valeur nominale', val_fr: 'Libre', val_da: 'حرة' } ],
        procedures_creation: `<h4>الإجراءات:</h4><ul><li>شهادة سلبية، نظام أساسي مكتوب ومسجل، تسجيل في RC والضرائب والـ CNSS إذا وجد أجراء.</li></ul>`,
        aspects_fiscaux: `
             <h4>النظام الضريبي والاجتماعي والمحاسبي لـ SNC</h4>
             <ul><li><strong>الضريبة:</strong> النظام الافتراضي <strong>شفاف (IGR)</strong>، حيث يُنسب الربح أو الخسارة لكل شريك حسب حصته، ويصرح به الشريك في إقراره الضريبي الشخصي (IGR) ضمن فئة الدخول المهنية (RNR/RNS). يمكن للشركة اختيار <strong>IS</strong> بشكل نهائي (irrévocable).</li><li><strong>TVA و Patente:</strong> تخضع لهما الشركة كالمعتاد.</li><li><strong>IGR Source و CNSS:</strong> تلتزم بها تجاه العمال إذا وجدوا. الشركاء أنفسهم (بما أنهم تجار) يمكنهم الانخراط اختياريا في نظام TNS لـ CNSS.</li><li><strong>المحاسبة:</strong> إلزامية لمسك محاسبة تجارية لتحديد النتيجة وتوزيعها. تكون كاملة إذا اختارت IS، وقد تكون أبسط إذا بقيت على IGR.</li><li><strong>التصريحات للمحاسب:</strong>
                <ul><li><strong>إذا IGR:</strong> حساب النتيجة السنوية وتحديد حصة كل شريك، تزويد الشركاء بما يلزم لإقراراتهم الشخصية، التصريح السنوي لـ 9421 إذا كان هناك عمال.</li>
                <li><strong>إذا IS:</strong> نفس تصريحات SARL/SA (Liasse fiscale, Solde IS...).</li></ul>
            </li></ul>`
    },
    { // SCS
        key: 'scs', nom_fr: 'Société en Commandite Simple (SCS)', nom_da: 'شركة التوصية البسيطة',
        description_generale: `<p>مزيج بين شركاء متضامنين (مسؤولية مطلقة، تجار) وشركاء موصين (مسؤولية محدودة، غير تجار).</p>`,
        caracteristiques: [ { prop: 'Associés', val_fr: 'Min 2 (1 com.+1 caire)', val_da: '1 متضامن، 1 موصي على الأقل' }, { prop: 'Responsabilité', val_fr: 'Com.: indéf. / Caire: limitée', val_da: 'متضامن: مطلقة / موصي: محدودة' }, { prop: 'Dirigeant', val_fr: 'Gérant(s) (Commandité)', val_da: 'مسير متضامن' }, { prop: 'Capital minimum', val_fr: 'Aucun', val_da: 'لا يوجد' }, { prop: 'Droits sociaux', val_fr: 'Parts sociales', val_da: 'حصص اجتماعية' } ],
        procedures_creation: `<h4>الإجراءات:</h4><ul><li>مثل SNC، مع تحديد نوع كل شريك بوضوح.</li></ul>`,
        aspects_fiscaux: `
            <h4>النظام الضريبي والاجتماعي والمحاسبي لـ SCS</h4>
             <ul><li><strong>الضريبة:</strong> <strong>شفاف (IGR)</strong> افتراضيًا، أو خيار <strong>IS</strong> نهائي.</li><li><strong>TVA, Patente, IGR Source:</strong> كالمعتاد.</li><li><strong>CNSS:</strong> إلزامي للعمال. المتضامن يمكنه الانخراط كـ TNS. الموصي يعامل حسب وضعه (هل هو أجير في مكان آخر...).</li><li><strong>المحاسبة:</strong> تجارية (كاملة إذا اختارت IS).</li><li><strong>التصريحات:</strong> مثل SNC حسب نظام الضريبة المختار.</li></ul>`
    },
    { // SCA
        key: 'sca', nom_fr: 'Société en Commandite par Actions (SCA)', nom_da: 'شركة التوصية بالأسهم',
        description_generale: `<p>نادر الاستخدام. مثل SCS ولكن حصص الموصين عبارة عن أسهم. تتطلب رأس مال كبير وإجراءات معقدة.</p>`,
        caracteristiques: [ { prop: 'Associés', val_fr: 'Min 4 (1 com., 3 action.)', val_da: '1 متضامن، 3 مساهمين على الأقل' }, { prop: 'Responsabilité', val_fr: 'Com.: indéf. / Act.: limitée', val_da: 'متضامن: مطلقة / مساهم: محدودة' }, { prop: 'Dirigeant', val_fr: 'Gérant(s) (Commandité)', val_da: 'مسير متضامن' }, { prop: 'Capital minimum', val_fr: '300 KDH (3 M si APE)', val_da: 'نفس SA' }, { prop: 'Droits sociaux', val_fr: 'Actions (+ parts possibles)', val_da: 'أسهم (وقد تكون حصص للمتضامنين)' }, { prop: 'Valeur nominale', val_fr: 'Min 50 DH (10 si cotée)', val_da: 'نفس SA' } ],
        procedures_creation: `<h4>الإجراءات:</h4><ul><li>مثل SA مع وجود مجلس رقابة من المساهمين لمراقبة المسيرين المتضامنين، ووجود مراقب حسابات إلزامي.</li></ul>`,
        aspects_fiscaux: `
            <h4>النظام الضريبي والاجتماعي والمحاسبي لـ SCA</h4>
            <ul><li><strong>الضريبة: IS إلزامي.</strong></li><li><strong>TVA, Patente, IGR Source:</strong> نفس الالتزامات.</li><li><strong>CNSS:</strong> إلزامي للعمال. تطبيق خاص للمسير المتضامن والمساهمين (حسب دورهم الفعلي).</li><li><strong>المحاسبة:</strong> كاملة + CAC إلزامي.</li><li><strong>التصريحات:</strong> نفس التزامات SA تقريباً.</li></ul>`
    },
    { // SAS
        key: 'sas', nom_fr: 'Société par Actions Simplifiée (SAS)', nom_da: 'الشركة ذات الأسهم المبسطة',
        description_generale: `<p>تجمع مرونة شركات الأشخاص وهيكل شركة المساهمة، مع مسؤولية محدودة وحرية كبيرة في تنظيم التسيير عبر النظام الأساسي. تتطلب رأس مال أدنى معين.</p>`,
        caracteristiques: [ { prop: 'Associés', val_fr: 'Min 2 actionnaires', val_da: '2 مساهمين على الأقل' }, { prop: 'Libération Capital', val_fr: 'Intégralement à la constitution', val_da: 'الدفع الكامل للنقدي عند التأسيس' }, { prop: 'Capital minimum', val_fr: '300 000 DH', val_da: '300 ألف درهم' }, { prop: 'Responsabilité', val_fr: 'Limitée aux actions', val_da: 'محدودة بالأسهم' }, { prop: 'Dirigeant', val_fr: 'Président (obligatoire) +/- DG...', val_da: 'رئيس إلزامي + مدير عام اختياري...' }, { prop: 'Droits sociaux', val_fr: 'Actions', val_da: 'أسهم' }, { prop: 'Valeur nominale', val_fr: 'Min 50 DH', val_da: '50 درهم للسهم' } ],
        procedures_creation: `<h4>الإجراءات:</h4><ul><li>تشبه SA مع التركيز على تفصيل النظام الأساسي لتنظيم العلاقة بين الشركاء والسلطات.</li><li>قد تحتاج لـ CAC حسب حجمها.</li></ul>`,
        aspects_fiscaux: `
             <h4>النظام الضريبي والاجتماعي والمحاسبي لـ SAS</h4>
             <ul><li><strong>الضريبة: IS إلزامي.</strong></li><li><strong>TVA, Patente, IGR Source:</strong> نفس الالتزامات.</li><li><strong>CNSS:</strong> إلزامي للعمال. الرئيس (Président) يعتبر مثل أجير من ناحية CNSS إذا تقاضى أجراً.</li><li><strong>المحاسبة:</strong> كاملة وإلزامية (+ CAC إذا تجاوزت الحدود القانونية).</li><li><strong>التصريحات:</strong> نفس التزامات SA بشكل عام.</li></ul>`
    },
    { // GIE
        key: 'giew', nom_fr: 'Groupement d\'Intérêt Économique (GIE)', nom_da: 'تجمع ذو نفع اقتصادي',
        description_generale: `<p>آلية تعاون مرنة بين شركات قائمة (أو أفراد) بهدف تسهيل أو تطوير نشاط اقتصادي معين مشترك (شراء مجمع، تصدير مشترك...). لا يهدف للربح لنفسه.</p>`,
        caracteristiques: [ { prop: 'Capital', val_fr: 'Pas exigé', val_da: 'غير مطلوب' }, { prop: 'Membres', val_fr: 'Min 2 (Personnes physiques ou morales)', val_da: '2 على الأقل (شركات أو أفراد)' }, { prop: 'Responsabilité', val_fr: 'Indéfinie et solidaire (sauf clause)', val_da: 'مطلقة وتضامنية للأعضاء (إلا بوجود بند مخالف)' }, { prop: 'Objet', val_fr: 'Faciliter l\'activité des membres', val_da: 'تسهيل نشاط الأعضاء' } ],
        procedures_creation: `<h4>الإجراءات:</h4><ul><li>تأسيس عبر عقد بين الأعضاء يسجل في RC.</li></ul>`,
        aspects_fiscaux: `
            <h4>النظام الضريبي والاجتماعي والمحاسبي لـ GIE</h4>
             <ul><li><strong>الضريبة: شفاف ضريبياً.</strong> كل عضو يصرح بنصيبه من نتيجة التجمع (إذا وجدت).</li><li><strong>TVA:</strong> يخضع إذا مارس نشاطاً خاضعاً باسمه.</li><li><strong>CNSS:</strong> فقط إذا شغّل عمالاً باسمه مباشرة.</li><li><strong>المحاسبة:</strong> محاسبة لتتبع عمليات التجمع وتوزيع نتائجه.</li><li><strong>التصريحات:</strong> حسب الأنشطة (TVA...). يقدم كشوفات توزيع النتائج للأعضاء.</li></ul>`
    },
];