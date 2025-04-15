// data/classe3.js
// CLASSE 3 : COMPTES D'ACTIF CIRCULANT (HORS TRESORERIE)
// (تم التأكد من وجود شرح بالدارجة لكل حساب)
const classe3Data = [
    // === 31 STOCKS === (المخزونات)
    {
        classe: 3, numero: '3111', nom_fr: 'Marchandises (groupe A)', nom_da: 'السلع (مخزون - مجموعة أ)',
        explication_da: 'القيمة ديال السلع اللي شراتهم الشركة باش تبيعهم كيما هوما، ومزال عندها فالمخزن (الستوك). مجموعة أ أو ب فقط للتصنيف الداخلي.',
        journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit 6114/Credit 3111. إثبات SF: Debit 3111/Credit 6114. الجرد الدائم: يسجل كل دخول وخروج.]</em></p>'
    },
    { classe: 3, numero: '3112', nom_fr: 'Marchandises (groupe B)', nom_da: 'السلع (مخزون - مجموعة ب)', explication_da: 'نفس 3111 لمجموعة أخرى من السلع.', journal_da: '<p><em>[نفس منطق 3111.]</em></p>'},
    { classe: 3, numero: '3116', nom_fr: 'Marchandises en cours de route', nom_da: 'سلع قيد الطريق (مزال ما وصلات)', explication_da: 'السلع اللي تشرات والخلاص داز ولكن السلعة باقا جاية فالطريق، كنحسبوها مع الستوك ديالنا.', journal_da: '<p><em>[تثبت عند الجرد إذا كانت ملكية الشركة انتقلت.]</em></p>'},
    { classe: 3, numero: '3118', nom_fr: 'Autres marchandises', nom_da: 'سلع أخرى (مخزون)', explication_da: 'سلع أخرى معدة للبيع لا تندرج ضمن أ وب.', journal_da: '<p><em>[نفس منطق 3111.]</em></p>'},
    {
        classe: 3, numero: '3121', nom_fr: 'Matières premières', nom_da: 'المواد الأولية (مخزون)',
        explication_da: 'القيمة ديال المواد الخام اللي كتشريها الشركة الصناعية باش تصنع بيها المنتوج ديالها ومازال متستعملاتش.',
        journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit 61241/Credit 3121. إثبات SF: Debit 3121/Credit 61241.]</em></p>'
    },
    { classe: 3, numero: '3122', nom_fr: 'Matières et fournitures consommables', nom_da: 'المواد واللوازم المستهلكة (مخزون)', explication_da: 'الستوك ديال المواد الثانوية اللي كتساعد فالإنتاج أو فالإدارة ومكتدخلش مباشرة فالمنتوج النهائي (بحال الزيوت، مواد التنظيف، لوازم المكتب...).', journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit 61242/Credit 3122. إثبات SF: Debit 3122/Credit 61242.]</em></p>'},
    { classe: 3, numero: '3123', nom_fr: 'Emballages', nom_da: 'العبوات ومواد التغليف (مخزون)', explication_da: 'الستوك ديال مواد التغليف اللي مازال متستعملات (كرطون، قراعي، بلاستيك...).', journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit 61243/Credit 3123. إثبات SF: Debit 3123/Credit 61243.]</em></p>'},
    { classe: 3, numero: '3126', nom_fr: 'Matières et fournitures consommables en cours de route', nom_da: 'مواد ولوازم مستهلكة قيد الطريق', explication_da: 'مواد ولوازم شريناهم ومازال فالطريق عند تاريخ الجرد.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3128', nom_fr: 'Autres matières et fournitures consommables', nom_da: 'مواد ولوازم مستهلكة أخرى (مخزون)', explication_da: 'تصنيف آخر للمواد المستهلكة.', journal_da: '<p><em>[نفس منطق 3122.]</em></p>'},
    {
        classe: 3, numero: '3131', nom_fr: 'Biens en cours', nom_da: 'المنتجات قيد التصنيع (مخزون)',
        explication_da: 'القيمة (تكلفة المواد واليد العاملة...) ديال المنتوجات لي بدأ التصنيع ديالهم ولكن مازال ما كملوش ومولاوش منتوج نهائي.',
        journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit Variation stock produits (7131)/Credit 3131. إثبات SF: Debit 3131/Credit 7131.]</em></p>'
    },
    { classe: 3, numero: '3134', nom_fr: 'Services en cours', nom_da: 'الخدمات قيد الإنجاز (مخزون تكاليف)', explication_da: 'التكاليف اللي تصرفات على خدمة (مشروع، دراسة...) مازال مقدماتش للكليان أو متفوتراتش فآخر السنة.', journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit Variation stock services (7134)/Credit 3134. إثبات SF: Debit 3134/Credit 7134.]</em></p>'},
    { classe: 3, numero: '3141', nom_fr: 'Produits intermédiaires', nom_da: 'المنتجات الوسيطة (مخزون)', explication_da: 'منتجات صاوباتهم الشركة وماشي هما المنتوج النهائي، ممكن تبيعهم هاكاك أو تعاود تستعملهم فمرحلة تصنيع أخرى.', journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit Variation stock biens (7132)/Credit 3141. إثبات SF: Debit 3141/Credit 7132.]</em></p>'},
    { classe: 3, numero: '3145', nom_fr: 'Produits résiduels (ou matières de récupération)', nom_da: 'المنتجات المتبقية/المخلفات (مخزون)', explication_da: 'الستوك ديال المخلفات ديال الإنتاج لي باقا عندها قيمة وممكن تتباع (خردة، بقايا قماش...).', journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit Variation stock biens (7132)/Credit 3145. إثبات SF: Debit 3145/Credit 7132.]</em></p>'},
    {
        classe: 3, numero: '3151', nom_fr: 'Produits finis (groupe A)', nom_da: 'المنتجات النهائية الجاهزة (مخزون - مجموعة أ)',
        explication_da: 'القيمة ديال المنتوجات لي صاوبتها الشركة وكملات، واجدة باش تتباع ومخزنة عندها.',
        journal_da: '<p><em>[الجرد المتقطع: إلغاء SI: Debit Variation stock biens (7132)/Credit 3151. إثبات SF: Debit 3151/Credit 7132.]</em></p>'
    },
    { classe: 3, numero: '3152', nom_fr: 'Produits finis (groupe B)', nom_da: 'المنتجات النهائية الجاهزة (مخزون - مجموعة ب)', explication_da: 'نفس 3151 لمجموعة أخرى من المنتجات.', journal_da: '<p><em>[نفس منطق 3151.]</em></p>'},
    { classe: 3, numero: '3156', nom_fr: 'Produits finis en cours de route', nom_da: 'منتجات نهائية قيد الطريق (عند الزبون)', explication_da: 'حالة خاصة: منتجات تباعت ومحسوبة ضمن المبيعات ولكن التسليم النهائي مازال متدارش، تستعمل عند الضرورة.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3158', nom_fr: 'Autres produits finis', nom_da: 'منتجات نهائية أخرى (مخزون)', explication_da: 'تصنيف إضافي للمنتجات النهائية.', journal_da: '<p><em>[نفس منطق 3151.]</em></p>'},

    // === 34 CREANCES DE L'ACTIF CIRCULANT === (المستحقات على الغير)
    {
        classe: 3, numero: '3411', nom_fr: 'Fournisseurs - avances et acomptes versés...', nom_da: 'الموردون - تسبيقات وتسبقات مدفوعة...',
        explication_da: 'الفلوس لي عطينا تسبيق للفورنيسور على سلعة أو خدمة مازال ماوصلات.',
        journal_da: '<p><em>[عند الدفع: Debit 3411 (+TVA récupérable si applicable) / Credit Trésorerie. عند استلام الفاتورة: Credit 3411 لتصفية التسبيق.]</em></p>'
    },
    { classe: 3, numero: '3413', nom_fr: 'Fournisseurs - créances pour emballages...', nom_da: 'الموردون - مستحقات على عبوات للإرجاع', explication_da: 'الفلوس لي كتسال الشركة للفورنيسور كضمان على عبوات (قراعي، صنادق...) لي غادا ترجع ليه.', journal_da: '<p><em>[انظر الشرح تحت نفس الرقم في الرد السابق.]</em></p>'},
    { classe: 3, numero: '3417', nom_fr: 'Rabais, remises et ristournes à obtenir...', nom_da: 'تخفيضات منتظرة من الموردين...', explication_da: 'قيمة التخفيض اللي كنتسناوه من الفورنيسور ولكن مازال ما وصلش الأفوار (فاتورة التخفيض).', journal_da: '<p><em>[انظر الشرح تحت نفس الرقم في الرد السابق.]</em></p>'},
    { classe: 3, numero: '3418', nom_fr: 'Autres fournisseurs débiteurs', nom_da: 'موردون آخرون مدينون', explication_da: 'أي حالة أخرى كتكون الشركة كتسال فيها فلوس للموردين ديالها (دفعة زايدة مثلا).', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 3, numero: '3421', nom_fr: 'Clients', nom_da: 'الزبناء (الكليان) - العاديون',
        explication_da: 'الفلوس اللي كتسال الشركة للكليان اللي شراو سلعة أو خدمة ومخلصوهاش كلها أو جزء منها.',
        journal_da: '<p><em>[انظر المثال المفصل تحت نفس الرقم في الردود السابقة.]</em></p>'
    },
    { classe: 3, numero: '3423', nom_fr: 'Clients - retenues de garantie', nom_da: 'الزبناء - اقتطاعات الضمان (محجوزة)', explication_da: 'جزء من الفلوس اللي الكليان شادها كضمان، وما غايطلقها حتى تدوز مدة معينة أو تكمل الخدمة بشكل جيد.', journal_da: '<p><em>[عند الفوترة: جزء ف 3421 وجزء ف 3423 ف Debit.]</em></p>'},
    { classe: 3, numero: '3424', nom_fr: 'Clients douteux ou litigieux', nom_da: 'زبناء مشكوك في تحصيلهم أو في نزاع', explication_da: 'ملي كيبان أن شي كليان عندو صعوبة كبيرة فالخلاص أو كاين نزاع معاه، كنحولوه لهاد الحساب باش نتبعوه ونديرو ليه مؤونة (احتياط).', journal_da: '<p><em>[التحويل: Debit 3424 / Credit 3421. التكوين: Debit Dotation (61964) / Credit Provision (3942).]</em></p>'},
    { classe: 3, numero: '3425', nom_fr: 'Clients - effets à recevoir', nom_da: 'الزبناء - أوراق تجارية (كمبيالات) للقبض', explication_da: 'الكمبيالات اللي شداتهم الشركة من الكليان كضمانة للخلاص، وباقي ماوصلش التاريخ ديالهم.', journal_da: '<p><em>[عند القبول: Debit 3425 / Credit 3421.]</em></p>'},
    { classe: 3, numero: '3427', nom_fr: 'Clients - factures à établir...', nom_da: 'الزبناء - فواتير قيد الإصدار...', explication_da: 'سلعة تسلمات للكليان أو خدمة كملات ولكن الفاتورة مازال متصاوبات عند إقفال السنة. كنتبتو الإيراد.', journal_da: '<p><em>[عند الإقفال: Debit 3427 / Credit Ventes (71xx) + TVA (4455)]</em></p>'},
    {
        classe: 3, numero: '3431', nom_fr: 'Avances et acomptes au personnel', nom_da: 'تسبيقات وتسبقات للموظفين',
        explication_da: 'الفلوس اللي كتسبق الشركة للخدامة ديالها على الصالير اللي جاي.',
        journal_da: '<p><em>[عند إعطاء التسبيق: Debit 3431 / Credit Trésorerie. عند اقتطاعه من الراتب: Credit 3431 كجزء من قيد الرواتب.]</em></p>'
    },
    { classe: 3, numero: '3438', nom_fr: 'Personnel - autres débiteurs', nom_da: 'الموظفون - مدينون آخرون', explication_da: 'أي سبب آخر كتخلي الشركة تسال فلوس للموظفين (سلفة شخصية قصيرة الأجل مثلا).', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3451', nom_fr: 'Subventions à recevoir', nom_da: 'إعانات (غير استثمار) في انتظار القبض', explication_da: 'إعانة استغلال وافقوا عليها لينا ولكن الفلوس مازال ما دخلات للكونط.', journal_da: '<p><em>[Debit 3451 / Credit Subvention d\'exploitation (716).]</em></p>'},
    { classe: 3, numero: '3453', nom_fr: 'Acomptes sur impôts sur les résultats', nom_da: 'تسبيقات مدفوعة على الضريبة على الأرباح (IS)', explication_da: 'الدفوعات اللي كتدفع الشركة خلال العام كتسبيق على الضريبة السنوية (IS).', journal_da: '<p><em>[عند الدفع: Debit 3453 / Credit Trésorerie.]</em></p>'},
    { classe: 3, numero: '34551', nom_fr: 'Etat, TVA récupérable sur immobilisations', nom_da: 'الدولة، تيفيا قابلة للاسترجاع على الأصول الثابتة', explication_da: 'التيفيا اللي خلصاتها الشركة ملي شرات أصل ثابت، وعندها الحق تنقصها من التيفيا اللي خصها تخلص.', journal_da: '<p><em>[انظر أمثلة شراء الأصول الثابتة في الفئة 2.]</em></p>'},
    { classe: 3, numero: '34552', nom_fr: 'Etat, TVA récupérable sur charges', nom_da: 'الدولة، تيفيا قابلة للاسترجاع على المصاريف (المشتريات والخدمات)', explication_da: 'التيفيا اللي خلصاتها الشركة ملي شرات سلع أو مواد أو خدمات... وعندها الحق تنقصها.', journal_da: '<p><em>[انظر أمثلة شراء السلع والخدمات في الفئة 6.]</em></p>'},
    { classe: 3, numero: '3456', nom_fr: 'Etat - crédit de TVA', nom_da: 'الدولة - رصيد دائن من التيفيا', explication_da: 'ملي كنديرو التصريح ديال التيفيا، وكيكون المجموع ديال التيفيا اللي خلصنا (القابلة للاسترجاع) كبر من التيفيا اللي دخلنا (على المبيعات)، كيتخلق لينا كريدي ديال التيفيا كنقدرو نستعملوه فالشهر لي موراه أو نطلبو استردادو.', journal_da: '<p><em>[انظر الشرح تحت نفس الرقم في الرد السابق.]</em></p>'},
    { classe: 3, numero: '3458', nom_fr: 'Etat - autres comptes débiteurs', nom_da: 'الدولة - حسابات أخرى مدينة (فلوس كنسالوها للدولة)', explication_da: 'أي فلوس أخرى كنسالوها للدولة ماعدا التيفيا أو الضريبة على الربح.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3461', nom_fr: 'Associés - comptes d\'apport en société', nom_da: 'الشركاء - حسابات المساهمة العينية قيد التنفيذ', explication_da: 'حساب انتقالي لعمليات المساهمة.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3462', nom_fr: 'Actionnaires - capital souscrit et appelé non versé', nom_da: 'المساهمون - رأس مال مطلوب وغير مدفوع', explication_da: 'الجزء من راس المال لي طلبت الشركة من المساهمين يخلصوه ولكن باقي ما وصلش للشركة.', journal_da: '<p><em>[انظر الشرح تحت 1119.]</em></p>'},
    { classe: 3, numero: '3463', nom_fr: 'Comptes courants des associés débiteurs', nom_da: 'الحسابات الجارية للشركاء (مدينة)', explication_da: 'الفلوس لي سلفات الشركة للشركاء ديالها باش يردوهم على مدة قصيرة (< سنة).', journal_da: '<p><em>[Debit 3463 / Credit Trésorerie]</em></p>'},
    { classe: 3, numero: '3467', nom_fr: 'Créances rattachées aux comptes d\'associés', nom_da: 'ديون أخرى مرتبطة بحسابات الشركاء (مستحقة للشركة)', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3468', nom_fr: 'Autres comptes d\'associés débiteurs', nom_da: 'حسابات شركاء أخرى مدينة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3481', nom_fr: 'Créances sur cessions d\'immobilisations', nom_da: 'مستحقات على بيع أصول ثابتة (< سنة)', explication_da: 'الفلوس لي كنسالو لشي حد شرا من عندنا شي أصل ثابت وغادي يخلصنا ف قل من عام.', journal_da: '<p><em>[Debit 3481 / Credit Produit de Cession (751x) (+TVA)]</em></p>'},
    { classe: 3, numero: '3482', nom_fr: 'Créances sur cessions d\'éléments d\'actif circulant', nom_da: 'مستحقات على بيع عناصر الأصول المتداولة', explication_da: 'الفلوس اللي كنسالو لشي حد شرا من عندنا قيم التوظيف (TVP) مثلا.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3487', nom_fr: 'Créances rattachées aux autres débiteurs', nom_da: 'مستحقات مرتبطة بمدينين آخرين', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3488', nom_fr: 'Divers débiteurs', nom_da: 'مدينون متنوعون', explication_da: 'الفلوس لي كنسالو لناس خرين ما كيدخلو فحتى حساب قبل.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3491', nom_fr: 'Charges constatées d\'avance (CCA)', nom_da: 'المصاريف المقيدة أو المثبتة سلفا', explication_da: 'المصروف لي خلصناه هاد العام ولكن جزء منو أو كلو كيخص العام الجاي (بحال لاسيرونس أو الكرا السنوي). داك الجزء كيتسجل هنا فأصول مؤقتة.', journal_da: '<p><em>[انظر المثال المفصل تحت نفس الرقم في الرد السابق.]</em></p>'},
    { classe: 3, numero: '3493', nom_fr: 'Intérêts courus et non échus à percevoir', nom_da: 'الفوائد المستحقة وغير مستحقة القبض', explication_da: 'الفائدة لي ربحاتها الشركة على قرض منحاتو مثلا، تحسبات ليها ولكن باقي ما وصلش الوقت باش تشدها.', journal_da: '<p><em>[Debit 3493 / Credit Intérêts perçus (7381)]</em></p>'},
    { classe: 3, numero: '3495', nom_fr: 'Comptes de répartition périodique des charges', nom_da: 'حسابات التوزيع الدوري للمصاريف (أصول)', explication_da: 'حساب تقني كيستعمل مؤقتا فأثناء توزيع مصاريف مشتركة (نادرا ما يستخدم مباشرة).', journal_da: '<p><em>[حساب تقني يتبع لطرق تحليل التكاليف.]</em></p>'},
    { classe: 3, numero: '3497', nom_fr: 'Comptes transitoires ou d\'attente - débiteurs', nom_da: 'حسابات انتقالية أو انتظار - مدينة', explication_da: 'حساب بحال السلة، كنحطو فيه مؤقتا شي عملية مدينة (فلوس دخلات أو حق لينا) معرفناش بالضبط لأي حساب نوجهوها، حتى نلقاو ليها التسوية الصحيحة.', journal_da: '<p><em>[يجب تصفيته بسرعة عند معرفة التوجيه الصحيح.]</em></p>'},

    // === 35 TITRES ET VALEURS DE PLACEMENT (TVP) === (سندات وقيم التوظيف قصيرة الأجل)
    {
        classe: 3, numero: '3501', nom_fr: 'Actions, partie libérée (TVP)', nom_da: 'الأسهم المدفوعة (بغرض التوظيف القصير الأمد)',
        explication_da: 'الأسهم ديال شركات أخرى لي شريناهم بهدف نعاودو نبيعوهم فمدة قصيرة (< سنة) ونربحو منهم، والجزء المطلوب من الثمن ديالهم تخلص.',
        journal_da: '<p><em>[عند الشراء: Debit 3501 (+ frais 61471) / Credit Banque.]</em></p>'
    },
    { classe: 3, numero: '3502', nom_fr: 'Actions, partie non libérée (TVP)', nom_da: 'الأسهم غير المدفوعة (بغرض التوظيف)', explication_da: 'نفس أسهم التوظيف ولكن الثمن ديالهم باقي متخلصش كامل.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 3, numero: '3504', nom_fr: 'Obligations (TVP)', nom_da: 'السندات (كسندات توظيف)', explication_da: 'سندات دين (وصولات خزينة مثلا) لي شريناهم باش ناخدو منهم فائدة قصيرة الأجل أو نعاودو فيهم البيع بسرعة.', journal_da: '<p><em>[عند الشراء: Debit 3504 (+ frais) / Credit Banque.]</em></p>'},
    { classe: 3, numero: '3506', nom_fr: 'Bons de caisse et bons de trésor (TVP)', nom_da: 'وصولات الصندوق ووصولات الخزينة (توظيف)', explication_da: 'أوراق مالية كتصدرها البنوك أو الدولة لمدة قصيرة كنوع من التوظيف الآمن.', journal_da: '<p><em>[عند الشراء: Debit 3506 (+ frais) / Credit Banque.]</em></p>'},
    { classe: 3, numero: '3508', nom_fr: 'Autres titres et valeurs de placement similaires', nom_da: 'سندات وقيم توظيف أخرى مماثلة', explication_da: 'أي نوع آخر من الأوراق المالية المشتراة بغرض المضاربة والبيع القريب.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},

    // === 37 ECART DE CONVERSION - ACTIF (Eléments circulants) === (فروق الصرف - أصول متداولة)
    { classe: 3, numero: '3701', nom_fr: 'Diminution des créances circulantes', nom_da: 'نقصان المستحقات المتداولة (فرق صرف - ربح كامن)', explication_da: 'ملي كنكونو كنسالو للكليان بعملة أجنبية (< سنة) وسعر ديك العملة طلع ف صالحنا، كيتخلق ربح محتمل كيتسجل هنا مؤقتا فالأصول.', journal_da: '<p><em>[عند التقييم: Debit 3701 / Credit Gains latents (7335).]</em></p>'},
    { classe: 3, numero: '3702', nom_fr: 'Augmentation des dettes circulantes', nom_da: 'زيادة الديون المتداولة (فرق صرف - خسارة كامنة)', explication_da: 'ملي يكون علينا دين لفورنيسور بعملة أجنبية (< سنة) وسعر ديك العملة هبط ماشي ف صالحنا (يعني الدين بالدرهم زاد)، كتتخلق خسارة محتملة كتسجل هنا مؤقتا فالأصول.', journal_da: '<p><em>[عند التقييم: Debit Pertes latentes (6335) / Credit 3702.]</em></p>'},

    // === 39 PROVISIONS POUR DEPRECIATION DES COMPTES DE L'ACTIF CIRCULANT === (مؤونات انخفاض القيمة)
    {
        classe: 3, numero: '3911', nom_fr: 'Prov. dépréciation marchandises', nom_da: 'مؤونة انخفاض قيمة مخزون السلع',
        explication_da: 'احتياط كديرو الشركة ملي كيبان أن قيمة الستوك ديال السلع لي عندها فالمخزن نقصات مقارنة بثمن الشراء (مثلا بسبب تقادم الموضة، تلف جزء، أو نزول الأسعار فالسوق).',
        journal_da: '<p><em>[تكوين المؤونة: Debit Dotation EP Actif Circ. (61961) / Credit 3911.]</em></p>'
    },
    { classe: 3, numero: '3912', nom_fr: 'Prov. dépréciation matières et fournitures', nom_da: 'مؤونة انخفاض قيمة المواد واللوازم', explication_da: 'احتياط لنقصان قيمة ستوك المواد الأولية أو اللوازم.', journal_da: '<p><em>[التكوين: Debit 61961 / Credit 3912.]</em></p>'},
    { classe: 3, numero: '3913', nom_fr: 'Prov. dépréciation produits en cours', nom_da: 'مؤونة انخفاض قيمة المنتجات قيد التصنيع', explication_da: 'احتياط لنقصان القيمة ديال الإنتاج لي مزال مكملش.', journal_da: '<p><em>[التكوين: Debit 61961 / Credit 3913.]</em></p>'},
    { classe: 3, numero: '3914', nom_fr: 'Prov. dépréciation produits intermédiaires', nom_da: 'مؤونة انخفاض قيمة المنتجات الوسيطة', explication_da: 'احتياط لنقصان قيمة ستوك المنتجات نصف المصنعة.', journal_da: '<p><em>[التكوين: Debit 61961 / Credit 3914.]</em></p>'},
    { classe: 3, numero: '3915', nom_fr: 'Prov. dépréciation produits finis', nom_da: 'مؤونة انخفاض قيمة المنتجات النهائية', explication_da: 'احتياط لنقصان القيمة ديال ستوك المنتجات الجاهزة لي تباعت بسعر أقل من تكلفتها مثلا.', journal_da: '<p><em>[التكوين: Debit 61961 / Credit 3915.]</em></p>'},
    { classe: 3, numero: '3941', nom_fr: 'Prov. dépréciation - fournisseurs débiteurs...', nom_da: 'مؤونة انخفاض قيمة مستحقات الموردين...', explication_da: 'احتياط إذا كان شك أننا منقدروش نرجعو تسبيق من عند مورد.', journal_da: '<p><em>[التكوين: Debit 61964 / Credit 3941.]</em></p>'},
    {
        classe: 3, numero: '3942', nom_fr: 'Prov. dépréciation clients et comptes rattachés', nom_da: 'مؤونة انخفاض قيمة مستحقات الزبناء',
        explication_da: 'هي أهم مؤونة فالأصول المتداولة. كدار ملي كيكون شك كبير بلي واحد الكليان مغاديش يخلص جزء من الفلوس لي كنسالوه أو كلها.',
        journal_da: '<p><em>[التكوين: Debit Dotation EP Actif Circ. (61964) / Credit 3942. تسترجع المؤونة بـ Debit 3942 / Credit Reprise (7196) إذا خلص الكليان أو زال الخطر.]</em></p>'
    },
    { classe: 3, numero: '3943', nom_fr: 'Prov. dépréciation personnel - débiteur', nom_da: 'مؤونة انخفاض قيمة ديون الموظفين', explication_da: 'احتياط لخطر عدم استرجاع سلفة من موظف.', journal_da: '<p><em>[التكوين: Debit 61964 / Credit 3943.]</em></p>'},
    { classe: 3, numero: '3946', nom_fr: 'Prov. dépréciation comptes associés débiteurs', nom_da: 'مؤونة انخفاض قيمة حسابات الشركاء المدينة', explication_da: 'احتياط لخطر عدم استرجاع سلفة قصيرة الأجل من شريك.', journal_da: '<p><em>[التكوين: Debit 61964 / Credit 3946.]</em></p>'},
    { classe: 3, numero: '3948', nom_fr: 'Prov. dépréciation autres débiteurs', nom_da: 'مؤونة انخفاض قيمة المدينين الآخرين', explication_da: 'احتياط لخطر عدم استرداد ديون متنوعة قصيرة الأجل.', journal_da: '<p><em>[التكوين: Debit 61964 / Credit 3948.]</em></p>'},
    { classe: 3, numero: '3950', nom_fr: 'Prov. dépréciation titres et valeurs de placement', nom_da: 'مؤونة انخفاض قيمة سندات وقيم التوظيف (TVP)', explication_da: 'احتياط فاش كتنزل القيمة السوقية ديال الأسهم أو السندات لي شاريين للمضارقة على ثمن الشرا ديالهم.', journal_da: '<p><em>[التكوين: Debit Dotation fin. Prov. dépréc. TVP (6394) / Credit 3950.]</em></p>'},

]; // نهاية بيانات الفئة 3 المحدثة مع شرح للكل