// data/classe6.js
// CLASSE 6 : COMPTES DE CHARGES
const classe6Data = [
    // === 61 CHARGES D'EXPLOITATION ===
    {
        classe: 6, numero: '6111', nom_fr: 'Achats revendus de marchandises "groupe A"', nom_da: 'شراء السلع المعاد بيعها (مجموعة أ)',
        explication_da: 'تكلفة شراء السلع اللي كنشريوها باش نعاودو نبيعوها كيفما هي (بدون تغيير). التقسيم لمجموعات A أو B كيكون غالبا لغرض التحليل الداخلي.',
        exemple_fr: 'Achat de 50 T-shirts à 70 DH HT l\'unité. TVA 20%. Payé par chèque.',
        exemple_da: 'شرينا 50 تيشيرت بـ 70 درهم للواحد HT. التيفيا 20%. تخلص بشيك. التكلفة HT = 3500 درهم.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
            <tr><td>6111</td><td>Achats de marchandises</td><td class="debit-col">3,500.00</td><td></td></tr>
            <tr><td>34552</td><td>Etat, TVA récup. ch.</td><td class="debit-col">700.00</td><td></td></tr>
            <tr><td>5141</td><td>Banques</td><td></td><td class="credit-col">4,200.00</td></tr></tbody></table>
            <p class="journal-explanation"><strong>الشرح:</strong> تسجيل المصروف (الشراء HT) و TVA ف Debit، ونقصان البانكة ف Credit.</p>`
    },
    { classe: 6, numero: '6112', nom_fr: 'Achats revendus de marchandises "groupe B"', nom_da: 'شراء السلع المعاد بيعها (مجموعة ب)', explication_da: 'نفس 6111 ولكن لمجموعة أخرى من السلع.', journal_da: '<p><em>[مبدأ تسجيل مشابه ل 6111]</em></p>'},
    {
        classe: 6, numero: '6114', nom_fr: 'Variation de stocks de marchandises', nom_da: 'التغير في مخزون السلع',
        explication_da: 'كيستعمل مع طريقة الجرد المتقطع (Inventaire Intermittent) باش نضبطو تكلفة السلع لي تباعت فعلا. إيلا الستوك زاد، هاد الحساب كيكون دائن (كيُنقص المصروف)، وإيلا الستوك نقص، كيكون مدين (كيزيد المصروف).',
        exemple_fr: 'Stock Initial: 50K, Stock Final: 65K. => Variation = 15K (Créditeur)',
        exemple_da: 'ستوك البداية 50 ألف، ستوك النهاية 65 ألف => التغير= 15 ألف (رصيد دائن، أي نقص للمصروف)',
        journal_da: `<strong>التسجيل (نهاية السنة):...</strong>
        <p><em>إلغاء ستوك البداية:</em></p> <table class="journal-table"><tbody><tr><td>6114</td><td>Variation Stocks March.</td><td class="debit-col">50,000.00</td><td></td></tr><tr><td>311x</td><td>Marchandises (Stock)</td><td></td><td class="credit-col">50,000.00</td></tr></tbody></table>
        <p><em>تسجيل ستوك النهاية:</em></p> <table class="journal-table"><tbody><tr><td>311x</td><td>Marchandises (Stock)</td><td class="debit-col">65,000.00</td><td></td></tr><tr><td>6114</td><td>Variation Stocks March.</td><td></td><td class="credit-col">65,000.00</td></tr></tbody></table>
        <p class="journal-explanation"><strong>الشرح:</strong> في النهاية، رصيد 6114 يكون دائناً بـ 15000، يعني هذا يقلل من تكلفة شراء السلع المباعة في حساب النتائج.</p>`
    },
    { classe: 6, numero: '6118', nom_fr: 'Achats revendus de marchandises des exercices antérieurs', nom_da: 'شراء سلع معاد بيعها تخص سنوات سابقة', explication_da: 'تسجيل شراء سلع يتعلق بسنة مالية سابقة وتم اكتشافه هذه السنة.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 6, numero: '6119', nom_fr: 'Rabais, remises et ristournes obtenus sur achats de March.', nom_da: 'تخفيضات وتنزيلات محصلة على شراء السلع (RRR)',
        explication_da: 'التخفيضات اللي كناخدوها من عند الموردين ديال السلع (كتنقص من قيمة الشراء).',
        exemple_fr: 'Avoir reçu du fournisseur "Durand" pour remise de 500 DH HT sur facture précédente.',
        exemple_da: 'وصلنا "أفوار" (فاتورة تخفيض) من المورد "دوراند" بقيمة تخفيض 500 درهم HT على فاتورة سابقة.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
            <tr><td>4411</td><td>Fournisseurs (Durand)</td><td class="debit-col">600.00</td><td></td></tr>
            <tr><td>6119</td><td>RRR obtenus sur achats March.</td><td></td><td class="credit-col">500.00</td></tr>
            <tr><td>34552</td><td>Etat, TVA récup. ch. (Annulation part)</td><td></td><td class="credit-col">100.00</td></tr></tbody></table>
            <p class="journal-explanation"><strong>الشرح:</strong> الدين ديال الفورنيسور نقص (Debit). قيمة التخفيض تسجلات فجهة الدائن فحساب RRR (باش تنقص المصروف الأصلي ديال الشراء). والتيفيا لي كنا سجلناها زيادة تلغات على قد التخفيض (Credit).</p>`
    },
    { classe: 6, numero: '6121', nom_fr: 'Achats consommés de matières premières (A+B)', nom_da: 'شراء المواد الأولية المستهلكة', explication_da: 'تكلفة شراء المواد الخام اللي غادي تدخل فالتصنيع.', journal_da: '<p><em>[Debit 6121 (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6122', nom_fr: 'Achats consommés de matières et fournitures consommables', nom_da: 'شراء المواد واللوازم المستهلكة', explication_da: 'تكلفة شراء اللوازم الثانوية (صيانة، وقود، مكتب، تغليف...).', journal_da: '<p><em>[Debit 6122x (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6123', nom_fr: 'Achats d\'emballages', nom_da: 'شراء العبوات (التغليف)', explication_da: 'تكلفة شراء مواد التغليف (كرتون، بلاستيك...).', journal_da: '<p><em>[Debit 6123x (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6124', nom_fr: 'Variation des stocks de matières et fournitures', nom_da: 'التغير في مخزون المواد واللوازم', explication_da: 'كيستعمل مع الجرد المتقطع باش نضبطو تكلفة المواد واللوازم اللي تستهلكات فعلا.', journal_da: '<p><em>[نفس مبدأ 6114، ولكن يطبق على 312x]</em></p>'},
    {
        classe: 6, numero: '6125', nom_fr: 'Achats non stockés de matières et fournitures', nom_da: 'شراء مواد ولوازم غير مخزنة',
        explication_da: 'تكلفة شراء حاجات مكتخزنش وكتستهلك دغيا (ماء، ضو، مواد تنظيف، لوازم مكتب صغيرة...).',
        exemple_fr: 'Achat fournitures de bureau non stockables 300 DH HT, TVA 20%, espèces.',
        exemple_da: 'شرينا لوازم مكتب صغيرة ب 300 HT، تيفيا 20% (60). خلصنا كاش.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
        <tr><td>61257</td><td>Achats fournitures bureau non stockées</td><td class="debit-col">300.00</td><td></td></tr>
        <tr><td>34552</td><td>Etat, TVA récup. ch.</td><td class="debit-col">60.00</td><td></td></tr>
        <tr><td>5161</td><td>Caisse</td><td></td><td class="credit-col">360.00</td></tr></tbody></table>
        <p class="journal-explanation"><strong>الشرح:</strong> المصروف وتيفييه ف Debit، ونقصان لاكيس ف Credit.</p>`
    },
    { classe: 6, numero: '6126', nom_fr: 'Achats de travaux, études et prestations de service', nom_da: 'شراء الأشغال، الدراسات وتقديم الخدمات', explication_da: 'تكلفة خدمات قدموها لينا ناس خرين (شركات خارجية)، بحال إصلاحات كبيرة، دراسات قانونية، استشارات...', journal_da: '<p><em>[Debit 6126x (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6128', nom_fr: 'Achats de MF des exercices antérieurs', nom_da: 'شراء مواد ولوازم تخص سنوات سابقة', explication_da: 'تسجيل فاتورة شراء مواد أو لوازم وصلت متأخرة وتخص سنة مالية مقفلة.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6129', nom_fr: 'RRR obtenus sur achats consommés de MF', nom_da: 'تخفيضات محصلة على شراء مواد ولوازم مستهلكة', explication_da: 'التخفيضات لي كنحصلو عليها من موردي المواد واللوازم.', journal_da: '<p><em>[نفس مبدأ 6119 ولكن يخص المواد/اللوازم. Debit Fournisseur / Credit 6129 + TVA]</em></p>'},
    { classe: 6, numero: '6131', nom_fr: 'Locations et charges locatives', nom_da: 'الكراء والمصاريف المتعلقة به', explication_da: 'مصروف كراء المقرات، المعدات، السيارات + المصاريف المشتركة ديال الكرا (السانديك...).', journal_da: '<p><em>[Debit 6131 (+TVA si applicable) / Credit Trésorerie/Fournisseur. انظر المثال المفصل السابق.]</em></p>'},
    {
        classe: 6, numero: '6132', nom_fr: 'Redevances de crédit-bail', nom_da: 'أقساط الكراء التمويلي (ليزينغ)',
        explication_da: 'المبلغ اللي كنخلصوه كل شهر (أو مدة) للشركة ديال ليزينغ مقابل استعمال معدات أو سيارات. ماشي شرا، ولكن ممكن نوليو المالكين فاللخر.',
        journal_da: '<p><em>[تسجيل معقد يتضمن جزء كراء وجزء تسديد أصل. تبسيطا: Debit 6132 / Debit TVA / Credit Banque]</em></p>'
    },
    { classe: 6, numero: '6133', nom_fr: 'Entretien et réparations', nom_da: 'الصيانة والإصلاحات', explication_da: 'مصاريف الحفاظ على الأصول الثابتة خدامة مزيان (صيانة، إصلاح عطب...).', journal_da: '<p><em>[Debit 6133 (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '61335', nom_fr: 'Maintenance', nom_da: 'الصيانة (الوقائية غالبا)', explication_da: 'مصروف عقود الصيانة الدورية لضمان عمل الأجهزة والمعدات.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6134', nom_fr: 'Primes d\'assurances', nom_da: 'أقساط التأمين', explication_da: 'مصروف تأمين الشركة على المخاطر (حريق، مسؤولية مدنية، سيارات...).', journal_da: '<p><em>[Debit 6134 (+Taxes si applicable) / Credit Trésorerie/Courtier]</em></p>'},
    { classe: 6, numero: '6135', nom_fr: 'Rémunérations du personnel extérieur à l\'entreprise', nom_da: 'أجور المستخدمين الخارجيين عن الشركة', explication_da: 'مصروف الخدامة المؤقتين (Interim) أو اللي خدامين بشكل مستقل.', journal_da: '<p><em>[Debit 6135 (+TVA si applicable) / Credit Fournisseur (agence interim) / Prestataire]</em></p>'},
    { classe: 6, numero: '6136', nom_fr: 'Rémunérations d\'intermédiaires et honoraires', nom_da: 'أتعاب الوسطاء والمستشارين', explication_da: 'مصروف أتعاب المحامي، الخبير المحاسب، المهندس، الوسطاء التجاريين...', journal_da: '<p><em>[Debit 6136 (+TVA) / Credit Fournisseur (Prestataire)]</em></p>'},
    { classe: 6, numero: '6137', nom_fr: 'Redevances pour brevets, marques, droits...', nom_da: 'أتاوات عن براءات الاختراع، العلامات، الحقوق...', explication_da: 'مصروف مقابل استعمال ملكية فكرية ديال الغير.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6141', nom_fr: 'Etudes, recherches et documentation', nom_da: 'الدراسات، الأبحاث والتوثيق', explication_da: 'مصروف شراء دراسات، أو الاشتراك في مجلات مهنية.', journal_da: '<p><em>[Debit 6141 (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6142', nom_fr: 'Transports', nom_da: 'مصاريف النقل (الغير)', explication_da: 'تكلفة نقل السلع أو الأشخاص من طرف شركات النقل.', journal_da: '<p><em>[Debit 6142x (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6143', nom_fr: 'Déplacements, missions et réceptions', nom_da: 'التنقلات، المهمات والاستقبالات', explication_da: 'مصاريف السفر، الفنادق، الأكل، وتنظيم استقبالات للزبناء أو الشركاء.', journal_da: '<p><em>[Debit 6143x (+TVA si applicable) / Credit Trésorerie/Cartes bancaires...]</em></p>'},
    { classe: 6, numero: '6144', nom_fr: 'Publicité, publications et relations publiques', nom_da: 'الإشهار، المنشورات والعلاقات العامة', explication_da: 'مصاريف الإعلانات، تصميم مطبوعات، تنظيم أحداث للعلاقات العامة...', journal_da: '<p><em>[Debit 6144x (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6145', nom_fr: 'Frais postaux et frais de télécommunications', nom_da: 'مصاريف البريد والاتصالات', explication_da: 'مصروف التنابر (البريد)، الهاتف، والإنترنت.', journal_da: '<p><em>[Debit 6145x (+TVA) / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6146', nom_fr: 'Cotisations et dons', nom_da: 'الاشتراكات والتبرعات', explication_da: 'مصروف اشتراكات الجمعيات المهنية والتبرعات المسموح بها.', journal_da: '<p><em>[Debit 6146x / Credit Trésorerie]</em></p>'},
    { classe: 6, numero: '6147', nom_fr: 'Services bancaires', nom_da: 'الخدمات البنكية', explication_da: 'مصاريف وعمولات البنك على العمليات (غير الفوائد على القروض).', journal_da: '<p><em>[Debit 6147 (+TVA) / Credit Banque (5141)]</em></p>'},
    { classe: 6, numero: '6148', nom_fr: 'Autres charges externes des exercices antérieurs', nom_da: 'مصاريف خارجية أخرى تخص سنوات سابقة', explication_da: 'مصاريف خدمات خارجية لم تسجل في وقتها.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6149', nom_fr: 'RRR obtenus sur autres charges externes', nom_da: 'تخفيضات محصلة على مصاريف خارجية أخرى', explication_da: 'تخفيضات على فواتير الخدمات الخارجية (غير المشتريات).', journal_da: '<p><em>[Debit Fournisseur/Prestataire / Credit 6149 + TVA]</em></p>'},
    { classe: 6, numero: '6161', nom_fr: 'Impôts et taxes directs', nom_da: 'الضرائب والرسوم المباشرة', explication_da: 'الضريبة المهنية (Patente)، ضريبة النظافة، ضريبة الأراضي غير المبنية...', journal_da: '<p><em>[Debit 6161x / Credit Etat - créditeur (445x) ou Trésorerie si payé]</em></p>'},
    { classe: 6, numero: '6165', nom_fr: 'Impôts et taxes indirects', nom_da: 'الضرائب والرسوم غير المباشرة', explication_da: 'ضرائب لا ترتبط مباشرة بالدخل (لم تعد شائعة جدا بهذا الاسم).', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6167', nom_fr: 'Impôts, taxes et droits assimilés', nom_da: 'ضرائب ورسوم وحقوق مماثلة', explication_da: 'حقوق التسجيل، الطوابع المالية (التمبر)...', journal_da: '<p><em>[Debit 6167x / Credit Trésorerie]</em></p>'},
    { classe: 6, numero: '6168', nom_fr: 'Impôts et taxes des exercices antérieurs', nom_da: 'ضرائب ورسوم سنوات سابقة', explication_da: 'ضرائب ورسوم لم تسجل في سنتها المالية.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 6, numero: '6171', nom_fr: 'Rémunérations du personnel', nom_da: 'أجور الموظفين (المبلغ الإجمالي الخام)',
        explication_da: 'المبلغ الإجمالي للأجور قبل أي اقتطاع.',
        journal_da: '<p><em>[هذا هو المبلغ الذي يدخل ف Debit في قيد الرواتب. انظر المثال تحت 4432.]</em></p>'
    },
    { classe: 6, numero: '61711', nom_fr: 'Appointements et salaires', nom_da: 'الأجور والمرتبات الأساسية', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '61712', nom_fr: 'Primes et gratifications', nom_da: 'المكافآت والعلاوات', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '61713', nom_fr: 'Indemnités et avantages divers', nom_da: 'التعويضات والمزايا المتنوعة (نقل، سلة...)', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '61715', nom_fr: 'Rémunérations des administrateurs, gérants...', nom_da: 'أجور المسيرين والمدراء...', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 6, numero: '6174', nom_fr: 'Charges sociales', nom_da: 'المصاريف الاجتماعية (حصّة المشغل/الشركة)',
        explication_da: 'الجزء ديال الاشتراكات الاجتماعية (CNSS, AMO, Retraite...) اللي كتخلصو الشركة من عندها زيادة على اقتطاع الموظف.',
        journal_da: '<p><em>[التسجيل غالبا يكون: Debit 6174x / Credit Organismes sociaux (444x).]</em></p>'
    },
    { classe: 6, numero: '6176', nom_fr: 'Charges sociales diverses', nom_da: 'مصاريف اجتماعية متنوعة', explication_da: 'تكاليف أخرى مرتبطة بالموظفين (تكوين، طب العمل...).', journal_da: '<p><em>[Debit 6176x / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6177', nom_fr: 'Rémunération de l\'exploitant', nom_da: 'أجرة المستغل (المقاول الفردي)', explication_da: 'الأجر الذي يأخذه المقاول الفردي من نشاطه.', journal_da: '<p><em>[Debit 6177x / Credit Compte de l\'exploitant (11175) أو Trésorerie]</em></p>'},
    { classe: 6, numero: '6178', nom_fr: 'Charges du personnel des exercices antérieurs', nom_da: 'مصاريف الموظفين سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6181', nom_fr: 'Jetons de présence', nom_da: 'بدلات الحضور (لمجلس الإدارة)', explication_da: 'مكافآت لأعضاء مجلس الإدارة مقابل حضور الاجتماعات.', journal_da: '<p><em>[Debit 6181 / Credit Associés-dividendes à payer (4465) أو Trésorerie]</em></p>'},
    {
        classe: 6, numero: '6182', nom_fr: 'Pertes sur créances irrécouvrables', nom_da: 'خسائر على الديون المعدومة',
        explication_da: 'ملي كنتيقنو بلي كليان معندو باش يخلصنا ومغاديش ناخدو فلوسنا منو.',
        journal_da: '<p><em>[انظر المثال المفصل السابق تحت هذا الحساب.]</em></p>'
    },
    { classe: 6, numero: '6185', nom_fr: 'Pertes sur opérations faites en commun', nom_da: 'خسائر على عمليات مشتركة', explication_da: 'حصة الشركة من الخسارة في مشروع مشترك (شركة محاصة).', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6186', nom_fr: 'Transfert de profits sur opérations faites en commun', nom_da: 'تحويل أرباح على عمليات مشتركة', explication_da: 'تحويل جزء من ربح المشروع المشترك للشريك.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6188', nom_fr: 'Autres charges d\'exploitation des exercices antérieurs', nom_da: 'مصاريف استغلال أخرى لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6191', nom_fr: 'D.E.A. immob. en non valeur (Dotation Exploitation Amort.)', nom_da: 'مخصص استهلاك أصول غير مادية', explication_da: 'الاستهلاك السنوي لمصاريف التأسيس وما شابهها.', journal_da: '<p><em>[Debit 6191x / Credit 281x]</em></p>'},
    { classe: 6, numero: '6192', nom_fr: 'D.E.A. immob. incorporelles', nom_da: 'مخصص استهلاك أصول غير ملموسة', explication_da: 'الاستهلاك السنوي لبراءات الاختراع، البرامج...', journal_da: '<p><em>[Debit 6192x / Credit 282x]</em></p>'},
    { classe: 6, numero: '6193', nom_fr: 'D.E.A. immob. corporelles', nom_da: 'مخصص استهلاك أصول ملموسة', explication_da: 'الاستهلاك السنوي للمباني، المعدات، السيارات...', journal_da: '<p><em>[Debit 6193x / Credit 283x. انظر مثال 2834]</em></p>'},
    { classe: 6, numero: '6194', nom_fr: 'D.E.P. immob. (Dotation Exploitation Prov. dépréciation)', nom_da: 'مخصص مؤونة انخفاض قيمة الأصول الثابتة', explication_da: 'تكوين مؤونة لانخفاض قيمة أصل ثابت.', journal_da: '<p><em>[Debit 6194x / Credit 29xx]</em></p>'},
    { classe: 6, numero: '6195', nom_fr: 'D.E.P. pour risques et charges', nom_da: 'مخصص مؤونة للمخاطر والأعباء (الاستغلال)', explication_da: 'تكوين مؤونة لمخاطر الاستغلال (ضمان، نزاع، إصلاح...).', journal_da: '<p><em>[Debit 61955/61957 / Credit 15xx/450x]</em></p>'},
    { classe: 6, numero: '6196', nom_fr: 'D.E.P. de l\'actif circulant', nom_da: 'مخصص مؤونة انخفاض قيمة الأصول المتداولة', explication_da: 'تكوين مؤونة لانخفاض قيمة المخزون أو ديون الزبناء...', journal_da: '<p><em>[Debit 6196x / Credit 39xx]</em></p>'},
    { classe: 6, numero: '6198', nom_fr: 'Dotations d\'exploitation des exercices antérieurs', nom_da: 'مخصصات استغلال لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},

    // === 63 CHARGES FINANCIERES ===
    { classe: 6, numero: '6311', nom_fr: 'Intérêts des emprunts et dettes', nom_da: 'فوائد القروض والديون', explication_da: 'مصروف الفائدة على القروض البنكية والسندات وأي ديون أخرى بفائدة.', journal_da: '<p><em>[Debit 6311x / Credit Banque أو Dettes à payer]</em></p>'},
    { classe: 6, numero: '6318', nom_fr: 'Charges d\'intérêts des exercices antérieurs', nom_da: 'فوائد سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6331', nom_fr: 'Pertes de change propres à l\'exercice', nom_da: 'خسائر الصرف الفعلية الخاصة بالسنة', explication_da: 'الخسارة الناتجة عن فرق سعر الصرف عند تحويل عملة أجنبية (بيع أو شراء).', journal_da: '<p><em>[تسجل عند تحقيق الخسارة فعليا.]</em></p>'},
    { classe: 6, numero: '6338', nom_fr: 'Pertes de change des exercices antérieurs', nom_da: 'خسائر الصرف سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6382', nom_fr: 'Pertes sur créances liées à des participations', nom_da: 'خسائر على ديون مرتبطة بمساهمات', explication_da: 'دين لشركة نشارك فيها ولم نتمكن من تحصيله.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6385', nom_fr: 'Charges nettes sur cession de titres et valeurs de placement (TVP)', nom_da: 'المصاريف الصافية على بيع قيم وسندات التوظيف', explication_da: 'الخسارة الناتجة عن بيع TVP (أسهم مضاربة...) بسعر أقل من تكلفتها.', journal_da: '<p><em>[Debit Trésorerie + 6385 / Credit TVP (350x)]</em></p>'},
    { classe: 6, numero: '6386', nom_fr: 'Escomptes accordés', nom_da: 'الخصومات الممنوحة (خصم تعجيل الدفع)', explication_da: 'تخفيض تمنحه الشركة للزبون إذا دفع قبل الموعد (يعتبر عبء مالي).', journal_da: '<p><em>[عند تحصيل مبلغ أقل بسبب الخصم: Debit Trésorerie + 6386 / Credit Client (3421)]</em></p>'},
    { classe: 6, numero: '6388', nom_fr: 'Autres charges financières des exercices antérieurs', nom_da: 'أعباء مالية أخرى لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6391', nom_fr: 'Dotations aux amortissements des primes de remboursement des obligations', nom_da: 'مخصص استهلاك علاوات سداد السندات', journal_da: '<p><em>[Debit 6391 / Credit 2813]</em></p>'},
    { classe: 6, numero: '6392', nom_fr: 'D.E.P. immob. financ. (Dotation Prov. dépréc.)', nom_da: 'مخصص مؤونة انخفاض قيمة الأصول المالية', explication_da: 'لتكوين مؤونة انخفاض قيمة سندات المساهمة، القروض الطويلة...', journal_da: '<p><em>[Debit 6392 / Credit 294x / 295x]</em></p>'},
    { classe: 6, numero: '6393', nom_fr: 'D.E.P. risques et charges financ.', nom_da: 'مخصص مؤونة للمخاطر والأعباء المالية', explication_da: 'لتكوين مؤونة لخسائر الصرف أو غرامات مالية...', journal_da: '<p><em>[Debit 6393 / Credit 1516 / 4506...]</em></p>'},
    { classe: 6, numero: '6394', nom_fr: 'D.E.P. titres et valeurs de placement (TVP)', nom_da: 'مخصص مؤونة انخفاض قيم وسندات التوظيف', explication_da: 'لتكوين مؤونة لانخفاض قيمة الأسهم والسندات المشتراة للمضاربة.', journal_da: '<p><em>[Debit 6394 / Credit 3950]</em></p>'},
    { classe: 6, numero: '6396', nom_fr: 'D.E.P. comptes de trésorerie', nom_da: 'مخصص مؤونة انخفاض قيمة حسابات الخزينة', explication_da: 'لتكوين مؤونة لخطر عدم تحصيل شيك.', journal_da: '<p><em>[Debit 6396 / Credit 5900]</em></p>'},
    { classe: 6, numero: '6398', nom_fr: 'Dotations financières des exercices antérieurs', nom_da: 'مخصصات مالية لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},

    // === 65 CHARGES NON COURANTES ===
    { classe: 6, numero: '6512', nom_fr: 'VNA immob. incorporelles cédées (Valeur Nette Amort.)', nom_da: 'القيمة الصافية المحاسبية للأصول غير الملموسة المباعة', explication_da: 'تسجيل القيمة المتبقية (تكلفة-استهلاك متراكم) للأصل غير الملموس الذي تم بيعه.', journal_da: '<p><em>[Debit 6512 / Credit Compte d\'immobilisation (22xx) - كجزء من قيد البيع]</em></p>'},
    { classe: 6, numero: '6513', nom_fr: 'VNA immob. corporelles cédées', nom_da: 'قيمة صافية محاسبية أصول ملموسة مباعة', explication_da: 'تسجيل القيمة المتبقية للأصل الملموس المباع.', journal_da: '<p><em>[Debit 6513 / Credit Compte d\'immobilisation (23xx) - كجزء من قيد البيع]</em></p>'},
    { classe: 6, numero: '6514', nom_fr: 'VNA immob. financières cédées', nom_da: 'قيمة صافية محاسبية أصول مالية مباعة', explication_da: 'تسجيل القيمة المتبقية للسندات المثبتة المباعة.', journal_da: '<p><em>[Debit 6514 / Credit Compte d\'immobilisation (24xx/25xx) - كجزء من قيد البيع]</em></p>'},
    { classe: 6, numero: '6518', nom_fr: 'VNA des immob. cédées des exercices antérieurs', nom_da: 'قيمة صافية أصول مباعة تخص سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6561', nom_fr: 'Subventions accordées de l\'exercice', nom_da: 'الإعانات الممنوحة خلال السنة', explication_da: 'مساعدات تمنحها الشركة لجهات أخرى (غير تبرع).', journal_da: '<p><em>[Debit 6561 / Credit Trésorerie]</em></p>'},
    { classe: 6, numero: '6581', nom_fr: 'Pénalités sur marchés et dédits', nom_da: 'غرامات وعقوبات على الصفقات والتراجعات', explication_da: 'غرامات تدفعها الشركة بسبب إخلال بالعقود.', journal_da: '<p><em>[Debit 6581 / Credit Trésorerie/Fournisseur]</em></p>'},
    { classe: 6, numero: '6582', nom_fr: 'Rappels d\'impôts (autres qu\'impôts sur résultats)', nom_da: 'مراجعات ضريبية (غير ضريبة الأرباح)', explication_da: 'مبالغ إضافية تطلبها إدارة الضرائب عن ضرائب سابقة (TVA، باتانتا...).', journal_da: '<p><em>[Debit 6582 / Credit Etat - créditeur (445x)]</em></p>'},
    { classe: 6, numero: '6583', nom_fr: 'Pénalités et amendes fiscales ou pénales', nom_da: 'غرامات وعقوبات ضريبية أو جزائية', explication_da: 'الغرامات المفروضة من طرف إدارة الضرائب أو المحاكم.', journal_da: '<p><em>[Debit 6583 / Credit Etat - créditeur / Trésorerie]</em></p>'},
    { classe: 6, numero: '6585', nom_fr: 'Créances devenues irrécouvrables (non exploitation)', nom_da: 'ديون أصبحت معدومة (غير استغلالية)', explication_da: 'خسارة دين لا يتعلق بالنشاط العادي للشركة (مثل قرض لمستثمر لم يسدد).', journal_da: '<p><em>[Debit 6585 / Credit Compte de créance (24xx?)]</em></p>'},
    { classe: 6, numero: '6586', nom_fr: 'Dons, libéralités et lots', nom_da: 'الهبات والتبرعات والجوائز (كتكاليف غير جارية)', explication_da: 'عندما لا تعتبر تبرعات أو هدايا عادية ضمن الاستغلال.', journal_da: '<p><em>[Debit 6586x / Credit Trésorerie]</em></p>'},
    { classe: 6, numero: '6588', nom_fr: 'Autres charges non courantes des exercices antérieurs', nom_da: 'أعباء غير جارية أخرى لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 6, numero: '6591', nom_fr: 'Dotations aux Amortissements Exceptionnels', nom_da: 'مخصصات للاستهلاكات الاستثنائية للأصول', explication_da: 'استهلاك سريع لأصل ثابت نتيجة حدث استثنائي.', journal_da: '<p><em>[Debit 6591x / Credit 28xx]</em></p>'},
    { classe: 6, numero: '6594', nom_fr: 'Dotations Non Courantes aux Provisions Réglementées', nom_da: 'مخصصات غير جارية للمؤونات المنظمة', explication_da: 'تكوين مؤونة منظمة في سياق غير جاري.', journal_da: '<p><em>[Debit 6594x / Credit 135x]</em></p>'},
    { classe: 6, numero: '6595', nom_fr: 'Dotations Non Courantes aux Prov. Risques et Charges', nom_da: 'مخصصات غير جارية لمؤونات المخاطر والأعباء', explication_da: 'تكوين مؤونة لمخاطر أو أعباء ناتجة عن حدث غير جاري.', journal_da: '<p><em>[Debit 6595x / Credit 15xx/450x]</em></p>'},
    { classe: 6, numero: '6596', nom_fr: 'Dotations Non Courantes aux Prov. Dépréciation', nom_da: 'مخصصات غير جارية لمؤونات انخفاض القيمة', explication_da: 'تكوين مؤونة لانخفاض قيمة أصل بسبب حدث غير جاري.', journal_da: '<p><em>[Debit 6596x / Credit 29xx / 39xx / 59xx]</em></p>'},
    { classe: 6, numero: '6598', nom_fr: 'Dotations non courantes des exercices antérieurs', nom_da: 'مخصصات غير جارية لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},

    // === 67 IMPOTS SUR LES RESULTATS ===
    { classe: 6, numero: '6701', nom_fr: 'Impôts sur les bénéfices', nom_da: 'الضرائب على الأرباح (IS)', explication_da: 'الضريبة على أرباح الشركات (Impôt sur les Sociétés).', journal_da: '<p><em>[Debit 6701 / Credit Etat - IS à payer (4453)]</em></p>'},
    { classe: 6, numero: '6705', nom_fr: 'Imposition minimale annuelle des sociétés (IMA)', nom_da: 'الحد الأدنى للضريبة السنوية (الضريبة الدنيا)', explication_da: 'الضريبة الدنيا المستحقة حتى لو كانت الشركة خاسرة (Cotisation Minimale).', journal_da: '<p><em>[Debit 6705 / Credit Etat - IS à payer (4453)]</em></p>'},
    { classe: 6, numero: '6708', nom_fr: 'Rappels et dégrèvements d\'impôts sur les résultats', nom_da: 'مراجعات وتخفيضات ضرائب على النتائج', explication_da: 'تسجيل مبالغ إضافية أو تخفيضات تخص الضريبة على الأرباح لسنوات سابقة.', journal_da: '<p><em>[للمبلغ الإضافي: Debit 6708 / Credit 4453. للتخفيض: Debit 4453 / Credit 6708]</em></p>'},

]; // نهاية بيانات الفئة 6