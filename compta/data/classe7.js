// data/classe7.js
// CLASSE 7 : COMPTES DE PRODUITS
const classe7Data = [
    // === 71 PRODUITS D'EXPLOITATION ===
    {
        classe: 7, numero: '7111', nom_fr: 'Ventes de marchandises au Maroc', nom_da: 'مبيعات السلع في المغرب',
        explication_da: 'الإيرادات من بيع السلع داخل المغرب (اللي كنا شريناها واجدة باش نبيعوها).',
        exemple_fr: 'Vente marchandises à crédit Client "ABC" 15K HT, TVA 20%.',
        exemple_da: 'بعنا سلعة كريدي للكليان ABC ب 15 ألف HT، تيفيا 20%.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
            <tr><td>3421</td><td>Clients (ABC)</td><td class="debit-col">18,000.00</td><td></td></tr>
            <tr><td>7111</td><td>Ventes de marchandises</td><td></td><td class="credit-col">15,000.00</td></tr>
            <tr><td>4455</td><td>Etat, TVA Facturée</td><td></td><td class="credit-col">3,000.00</td></tr></tbody></table>
            <p class="journal-explanation"><strong>الشرح:</strong> الدين على الزبون زاد (Debit)، وإيراد المبيعات والتيفيا المحصلة للدولة زادوا (Credit).</p>`
    },
    { classe: 7, numero: '7113', nom_fr: 'Ventes de marchandises à l\'étranger', nom_da: 'مبيعات السلع للخارج (تصدير)', explication_da: 'إيرادات من بيع السلع لكليان خارج المغرب (عادة بدون TVA).', journal_da: '<p><em>[Debit Client (etranger) / Credit 7113 (HT)]</em></p>'},
    { classe: 7, numero: '7118', nom_fr: 'Ventes de marchandises des exercices antérieurs', nom_da: 'مبيعات سلع تخص سنوات سابقة', explication_da: 'إيراد بيع سلعة من سنوات فاتت لم يسجل في وقته.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 7, numero: '7119', nom_fr: 'Rabais, remises et ristournes accordés par l\'entreprise (sur March.)', nom_da: 'التخفيضات الممنوحة من الشركة (على السلع)',
        explication_da: 'التخفيضات لي كتعطي الشركة للكليان ديالها على مبيعات السلع (تنقص من قيمة المبيعات).',
        exemple_fr: 'Emission d\'un avoir au client "ABC" pour remise de 1000 DH HT sur vente précédente.',
        exemple_da: 'صاوبنا فاتورة تخفيض (أفوار) للكليان ABC بتخفيض 1000 درهم HT على بيعة سابقة.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
            <tr><td>7119</td><td>RRR accordés sur ventes March.</td><td class="debit-col">1,000.00</td><td></td></tr>
            <tr><td>4455</td><td>Etat, TVA Facturée (Annulation part.)</td><td class="debit-col">200.00</td><td></td></tr>
            <tr><td>3421</td><td>Clients (ABC)</td><td></td><td class="credit-col">1,200.00</td></tr></tbody></table>
            <p class="journal-explanation"><strong>الشرح:</strong> تسجيل قيمة التخفيض كأنها مصروف ينقص الإيراد (Debit 7119). وإلغاء جزء من التيفيا لي كنا فاكتورينا (Debit 4455). و الدين ديال الكليان كاينقص (Credit 3421).</p>`
    },
    { classe: 7, numero: '7121', nom_fr: 'Ventes de biens produits au Maroc', nom_da: 'مبيعات المنتجات المصنعة في المغرب', explication_da: 'إيرادات من بيع المنتجات لي صنعتهم الشركة لزبناء داخل المغرب.', journal_da: '<p><em>[Debit Client/Trésorerie / Credit 7121 + TVA (4455)]</em></p>'},
    { classe: 7, numero: '7122', nom_fr: 'Ventes de biens produits à l\'étranger', nom_da: 'مبيعات المنتجات المصنعة للخارج', explication_da: 'إيرادات تصدير المنتجات المصنعة.', journal_da: '<p><em>[Debit Client (etranger) / Credit 7122 (HT)]</em></p>'},
    {
        classe: 7, numero: '7124', nom_fr: 'Ventes de services produits au Maroc', nom_da: 'مبيعات الخدمات المقدمة في المغرب',
        explication_da: 'إيرادات من الخدمات لي قدمتها الشركة داخل المغرب (استشارة، صيانة...).',
        exemple_fr:'Facturation prestation de conseil à InfoTech: 8K HT, TVA 20%.', exemple_da:'فاتورة استشارة ل InfoTech ب 8 آلاف HT.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
            <tr><td>3421</td><td>Clients (InfoTech)</td><td class="debit-col">9,600.00</td><td></td></tr>
            <tr><td>71243</td><td>Prestations de services</td><td></td><td class="credit-col">8,000.00</td></tr>
            <tr><td>4455</td><td>Etat, TVA Facturée</td><td></td><td class="credit-col">1,600.00</td></tr></tbody></table>
            <p class="journal-explanation"><strong>الشرح:</strong> تسجيل الدين على الزبون (Debit) والإيراد من الخدمة والتيفيا (Credit).</p>`
    },
    { classe: 7, numero: '7125', nom_fr: 'Ventes de services produits à l\'étranger', nom_da: 'مبيعات الخدمات المقدمة للخارج', explication_da: 'إيرادات تصدير الخدمات.', journal_da: '<p><em>[Debit Client (etranger) / Credit 7125 (HT)]</em></p>'},
    { classe: 7, numero: '7126', nom_fr: 'Redevances pour brevets, marques, droits...', nom_da: 'أتاوات عن براءات الاختراع، العلامات، الحقوق...', explication_da: 'إيرادات مقابل السماح للغير باستعمال ملكية فكرية ديال الشركة.', journal_da: '<p><em>[Debit Trésorerie/Client / Credit 7126 + TVA]</em></p>'},
    { classe: 7, numero: '7127', nom_fr: 'Ventes de produits accessoires', nom_da: 'مبيعات المنتجات والخدمات الثانوية', explication_da: 'إيرادات من أنشطة ماشي هي الرئيسية ولكن مرتبطة بيها (بيع مخلفات، تأجير...).', journal_da: '<p><em>[Debit Trésorerie/Client / Credit 7127x + TVA]</em></p>'},
    { classe: 7, numero: '7128', nom_fr: 'Ventes de biens et services produits des exercices antérieurs', nom_da: 'مبيعات منتجات وخدمات سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7129', nom_fr: 'RRR accordés par l\'entreprise (sur Biens et Services produits)', nom_da: 'التخفيضات الممنوحة (على منتجات وخدمات الشركة)', explication_da: 'تخفيضات على المنتجات المصنعة أو الخدمات المقدمة.', journal_da: '<p><em>[نفس مبدأ 7119. Debit 7129 / Debit TVA / Credit Client]</em></p>'},
    { classe: 7, numero: '7131', nom_fr: 'Variation des stocks de produits en cours', nom_da: 'التغير في مخزون المنتجات قيد التصنيع', explication_da: 'مع الجرد المتقطع، كيضبط تكلفة الإنتاج. إذا الستوك فاللخر كبر من اللول، الحساب مدين (يزيد الإنتاج).', journal_da: '<p><em>[مقابل حساب 313x. زيادة الستوك: Debit 313x / Credit 7131. نقصان الستوك: Debit 7131 / Credit 313x]</em></p>'},
    { classe: 7, numero: '7132', nom_fr: 'Variation des stocks de biens produits', nom_da: 'التغير في مخزون المنتجات الجاهزة', explication_da: 'مع الجرد المتقطع، كيضبط تكلفة المبيعات. إذا الستوك فاللخر كبر، الحساب مدين (يخفض التكلفة).', journal_da: '<p><em>[مقابل حساب 315x أو 314x. زيادة الستوك: Debit 31xx / Credit 7132. نقصان الستوك: Debit 7132 / Credit 31xx]</em></p>'},
    { classe: 7, numero: '7134', nom_fr: 'Variation des stocks de services en cours', nom_da: 'التغير في مخزون الخدمات قيد الإنجاز', explication_da: 'كيضبط تكلفة الخدمات المقدمة مع الجرد المتقطع.', journal_da: '<p><em>[نفس مبدأ 7131 مقابل حساب 3134]</em></p>'},
    { classe: 7, numero: '7141', nom_fr: 'Immobilisation en non valeurs produite', nom_da: 'أصل غير مادي منتج (مصاريف)', explication_da: 'تفعيل مصاريف لتصبح أصل غير مادي (مثل رسملة مصاريف البحث).', journal_da: '<p><em>[Debit Immobilisation (21xx/2210) / Credit 7141]</em></p>'},
    { classe: 7, numero: '7142', nom_fr: 'Immobilisations incorporelles produites', nom_da: 'أصول غير ملموسة منتجة', explication_da: 'تسجيل تكلفة تطوير أصل غير ملموس (برنامج...) أنتجته الشركة لنفسها.', journal_da: '<p><em>[Debit Immobilisation (22xx) / Credit 7142]</em></p>'},
    { classe: 7, numero: '7143', nom_fr: 'Immobilisations corporelles produites', nom_da: 'أصول ملموسة منتجة', explication_da: 'تسجيل تكلفة إنتاج أصل مادي (آلة، مبنى...) للشركة من طرف الشركة نفسها.', journal_da: '<p><em>[Debit Immobilisation (23xx) / Credit 7143]</em></p>'},
    { classe: 7, numero: '7148', nom_fr: 'Immobilisations produites des exercices antérieurs', nom_da: 'أصول منتجة تخص سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7161', nom_fr: 'Subventions d\'exploitation reçues de l\'exercice', nom_da: 'إعانات الاستغلال المستلمة خلال السنة', explication_da: 'مساعدات مالية غير مرتبطة باستثمار معين (لتغطية جزء من مصاريف الاستغلال).', journal_da: '<p><em>[Debit Trésorerie/Etat-débiteur (3451) / Credit 7161]</em></p>'},
    { classe: 7, numero: '7168', nom_fr: 'Subventions d\'exploitation reçues des exercices antérieurs', nom_da: 'إعانات استغلال سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7181', nom_fr: 'Jetons de présence reçus', nom_da: 'بدلات الحضور المقبوضة', explication_da: 'تعويضات يحصل عليها ممثل الشركة لحضوره اجتماعات في شركات أخرى.', journal_da: '<p><em>[Debit Trésorerie / Credit 7181]</em></p>'},
    { classe: 7, numero: '7182', nom_fr: 'Revenus des immeubles non affectés à l\'exploitation', nom_da: 'إيرادات العقارات غير المخصصة للاستغلال', explication_da: 'مداخيل كراء عقارات تملكها الشركة ولكنها لا تستعملها في نشاطها.', journal_da: '<p><em>[Debit Trésorerie/Client / Credit 7182 + TVA]</em></p>'},
    { classe: 7, numero: '7185', nom_fr: 'Profits sur opérations faites en commun', nom_da: 'أرباح على عمليات مشتركة', explication_da: 'حصة الشركة من ربح مشروع مشترك (شركة محاصة).', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7186', nom_fr: 'Transfert de pertes sur opérations faites en commun', nom_da: 'تحويل خسائر على عمليات مشتركة', explication_da: 'عندما يتحمل الشريك الآخر خسارة المشروع المشترك.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7188', nom_fr: 'Autres produits d\'exploitation des exercices antérieurs', nom_da: 'إيرادات استغلال أخرى لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7191', nom_fr: 'Reprises sur amortissements (non valeurs)', nom_da: 'استرجاعات على استهلاكات (الأصول غير المادية)', explication_da: 'إلغاء جزء من استهلاك سابق لمصاريف التأسيس...', journal_da: '<p><em>[Debit 281x / Credit 7191]</em></p>'},
    { classe: 7, numero: '7192', nom_fr: 'Reprises sur amortissements (immob. incorporelles)', nom_da: 'استرجاعات على استهلاكات (الأصول غير الملموسة)', journal_da: '<p><em>[Debit 282x / Credit 7192]</em></p>'},
    { classe: 7, numero: '7193', nom_fr: 'Reprises sur amortissements (immob. corporelles)', nom_da: 'استرجاعات على استهلاكات (الأصول الملموسة)', journal_da: '<p><em>[Debit 283x / Credit 7193]</em></p>'},
    { classe: 7, numero: '7194', nom_fr: 'Reprises sur provisions pour dépréciation des immobilisations', nom_da: 'استرجاعات على مؤونات انخفاض قيمة الأصول الثابتة', explication_da: 'إلغاء أو تخفيض مؤونة سابقة لانخفاض قيمة أصل ثابت لأن سببها زال أو نقص.', journal_da: '<p><em>[Debit 29xx / Credit 7194]</em></p>'},
    {
        classe: 7, numero: '7195', nom_fr: 'Reprises sur provisions pour risques et charges (Exploitation)', nom_da: 'استرجاعات على مؤونات المخاطر والأعباء (الاستغلال)',
        explication_da: 'إلغاء أو تخفيض مؤونة سابقة لخطر أو عبء استغلال (نزاع، ضمان...) لم يعد قائما أو تبين أنه أقل قيمة.',
        journal_da: '<p><em>[Debit Provision (15xx/450x) / Credit 7195]</em></p>'
    },
    { classe: 7, numero: '7196', nom_fr: 'Reprises sur provisions pour dépréciation de l\'actif circulant', nom_da: 'استرجاعات على مؤونات انخفاض قيمة الأصول المتداولة', explication_da: 'إلغاء أو تخفيض مؤونة انخفاض قيمة المخزون أو الزبناء...', journal_da: '<p><em>[Debit Provision (39xx) / Credit 7196. انظر مثال 6182]</em></p>'},
    { classe: 7, numero: '7197', nom_fr: 'Transferts des charges d\'exploitation', nom_da: 'تحويل أعباء الاستغلال', explication_da: 'عندما يتم تحميل جزء من مصاريف الاستغلال (أجور، إيجار...) على تكلفة إنتاج أصل ثابت للشركة.', journal_da: '<p><em>[Debit Compte Immobilisation en cours (239x) / Credit 7197]</em></p>'},
    { classe: 7, numero: '7198', nom_fr: 'Reprises sur amort. et provisions des exercices antérieurs (Exploitation)', nom_da: 'استرجاعات على استهلاكات ومؤونات سنوات سابقة (استغلال)', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},

    // === 73 PRODUITS FINANCIERS ===
    { classe: 7, numero: '7321', nom_fr: 'Revenus des titres de participation', nom_da: 'إيرادات سندات المساهمة', explication_da: 'الأرباح الموزعة (Dividendes) من الشركات اللي كنشاركو فيها بشكل كبير.', journal_da: '<p><em>[Debit Banque (5141) أو Titres de participations (si réinvesti) / Credit 7321]</em></p>'},
    { classe: 7, numero: '7325', nom_fr: 'Revenus des titres immobilisés', nom_da: 'إيرادات السندات المثبتة الأخرى', explication_da: 'فوائد أو أرباح موزعة من سندات أو أسهم مملوكة لأكثر من سنة (غير مشاركة).', journal_da: '<p><em>[Debit Banque (5141) / Credit 7325]</em></p>'},
    { classe: 7, numero: '7328', nom_fr: 'Produits des titres... des exercices antérieurs', nom_da: 'إيرادات السندات المثبتة لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7331', nom_fr: 'Gains de change propres à l\'exercice', nom_da: 'أرباح الصرف الفعلية الخاصة بالسنة', explication_da: 'الربح الناتج عن فرق سعر الصرف عند تحويل عملة أجنبية.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7338', nom_fr: 'Gains de change des exercices antérieurs', nom_da: 'أرباح الصرف سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    {
        classe: 7, numero: '7381', nom_fr: 'Intérêts et produits assimilés', nom_da: 'الفوائد والإيرادات المالية المماثلة',
        explication_da: 'الفوائد لي كنربحو من الفلوس فالبانكة، أو على القروض لي عاطيين لناس، أو تأخير الكليان فالخلاص.',
        exemple_fr:'Intérêts créditeurs reçus de la banque: 500 DH.', exemple_da:'فائدة من البنك على الحساب ديالنا: 500 درهم.',
        journal_da: `<strong>التسجيل:...</strong><table class="journal-table"><tbody>
            <tr><td>5141</td><td>Banques</td><td class="debit-col">500.00</td><td></td></tr>
            <tr><td>7381</td><td>Intérêts et produits assimilés</td><td></td><td class="credit-col">500.00</td></tr></tbody></table>
            <p class="journal-explanation"><strong>الشرح:</strong> زيادة البنك (Debit) وتسجيل الفائدة كإيراد مالي (Credit).</p>`
    },
    { classe: 7, numero: '7383', nom_fr: 'Revenus des créances rattachées à des participations', nom_da: 'إيرادات الديون المرتبطة بالمساهمات', explication_da: 'فوائد على قروض منحناها لشركات نشارك فيها.', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7384', nom_fr: 'Revenus des titres et valeurs de placement (TVP)', nom_da: 'إيرادات قيم وسندات التوظيف', explication_da: 'الأرباح الموزعة أو الفوائد المحصلة من الأسهم والسندات المشتراة للمضاربة.', journal_da: '<p><em>[Debit Banque (5141) / Credit 7384]</em></p>'},
    { classe: 7, numero: '7385', nom_fr: 'Produits nets sur cessions de titres et valeurs de placement (TVP)', nom_da: 'الإيرادات الصافية على بيع قيم وسندات التوظيف', explication_da: 'الربح الناتج عن بيع TVP بسعر أعلى من تكلفتها.', journal_da: '<p><em>[Debit Trésorerie / Credit TVP (350x) + Credit 7385]</em></p>'},
    { classe: 7, numero: '7386', nom_fr: 'Escomptes obtenus', nom_da: 'الخصومات المكتسبة (خصم تعجيل الدفع)', explication_da: 'التخفيض الذي تحصل عليه الشركة من المورد مقابل الدفع المبكر (يعتبر إيراد مالي).', journal_da: '<p><em>[عند الدفع للمورد بمبلغ أقل: Debit Fournisseur (4411) / Credit Trésorerie + Credit 7386]</em></p>'},
    { classe: 7, numero: '7388', nom_fr: 'Intérêts et autres produits financiers des exercices antérieurs', nom_da: 'فوائد وإيرادات مالية أخرى لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7391', nom_fr: 'Reprises sur amort. primes remboursement obligations', nom_da: 'استرجاع على استهلاك علاوات سداد السندات', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7392', nom_fr: 'Reprises sur provisions pour dépréciation des immob. financ.', nom_da: 'استرجاع مؤونات انخفاض قيمة الأصول المالية', explication_da: 'إلغاء مؤونة سابقة على أصل مالي زال سببها.', journal_da: '<p><em>[Debit Provision (294x/295x) / Credit 7392]</em></p>'},
    { classe: 7, numero: '7393', nom_fr: 'Reprises sur provisions pour risques et charges financ.', nom_da: 'استرجاع مؤونات للمخاطر والأعباء المالية', explication_da: 'إلغاء مؤونة سابقة لخسارة صرف أو غرامة مالية.', journal_da: '<p><em>[Debit Provision (1516/4506...) / Credit 7393]</em></p>'},
    { classe: 7, numero: '7394', nom_fr: 'Reprise sur provisions pour dépréciation des TVP', nom_da: 'استرجاع مؤونة انخفاض قيمة TVP', explication_da: 'إلغاء مؤونة سابقة على TVP لأن قيمتها ارتفعت أو تم بيعها.', journal_da: '<p><em>[Debit Provision (3950) / Credit 7394]</em></p>'},
    { classe: 7, numero: '7396', nom_fr: 'Reprises sur provisions pour dépréciation des comptes de trésorerie', nom_da: 'استرجاع مؤونة انخفاض قيمة حسابات الخزينة', explication_da: 'إلغاء مؤونة سابقة لخطر عدم تحصيل شيك (مثلا إذا تم تحصيله أخيرا).', journal_da: '<p><em>[Debit Provision (5900) / Credit 7396]</em></p>'},
    { classe: 7, numero: '7397', nom_fr: 'Transfert de charges financières', nom_da: 'تحويل الأعباء المالية', explication_da: 'عند تحميل فوائد القروض على تكلفة إنتاج أصل ثابت.', journal_da: '<p><em>[Debit Immobilisation en cours (239x) / Credit 7397]</em></p>'},
    { classe: 7, numero: '7398', nom_fr: 'Reprises sur dotations financières des exercices antérieurs', nom_da: 'استرجاع على مخصصات مالية لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},

    // === 75 PRODUITS NON COURANTS ===
    { classe: 7, numero: '7512', nom_fr: 'Produits cessions immob. incorporelles', nom_da: 'إيرادات بيع الأصول غير الملموسة', explication_da: 'ثمن بيع أصل غير ملموس (علامة، براءة...).', journal_da: '<p><em>[Debit Trésorerie/Créance (3481) / Credit 7512 (+TVA si applicable) - جزء من قيد البيع الكامل]</em></p>'},
    { classe: 7, numero: '7513', nom_fr: 'Produits cessions immob. corporelles', nom_da: 'إيرادات بيع الأصول الملموسة', explication_da: 'ثمن بيع أصل ملموس (آلة، سيارة...).', journal_da: '<p><em>[Debit Trésorerie/Créance (3481) / Credit 7513 + TVA - جزء من قيد البيع الكامل]</em></p>'},
    { classe: 7, numero: '7514', nom_fr: 'Produits cessions immob. financières', nom_da: 'إيرادات بيع الأصول المالية (المثبتة)', explication_da: 'ثمن بيع سندات مشاركة أو قروض طويلة الأجل.', journal_da: '<p><em>[Debit Trésorerie/Créance (3481) / Credit 7514 - جزء من قيد البيع الكامل]</em></p>'},
    { classe: 7, numero: '7518', nom_fr: 'Produits cessions immob. des exercices antérieurs', nom_da: 'إيرادات بيع أصول لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7561', nom_fr: 'Subventions d\'équilibre reçues de l\'exercice', nom_da: 'إعانات التوازن المستلمة للسنة', explication_da: 'مساعدات من الدولة لتغطية جزء من خسارة الشركة.', journal_da: '<p><em>[Debit Trésorerie/Etat débiteur / Credit 7561]</em></p>'},
    { classe: 7, numero: '7568', nom_fr: 'Subventions d\'équilibre reçues des exercices antérieurs', nom_da: 'إعانات توازن سنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7577', nom_fr: 'Reprises sur subventions d\'investissement', nom_da: 'استرجاعات على إعانات الاستثمار (تحويل للنتيجة)', explication_da: 'الجزء السنوي من إعانة الاستثمار الذي يضاف للإيرادات.', journal_da: '<p><em>[Debit Subvention (1311/1319) / Credit 7577]</em></p>'},
    { classe: 7, numero: '7581', nom_fr: 'Pénalités et dédits reçus', nom_da: 'غرامات وتراجعات مقبوضة', explication_da: 'تعويضات وغرامات تحصل عليها الشركة من الغير بسبب إخلال بالعقود.', journal_da: '<p><em>[Debit Trésorerie / Credit 7581]</em></p>'},
    { classe: 7, numero: '7582', nom_fr: 'Dégrèvement d\'impôts (autres qu\'impôts sur résultat)', nom_da: 'تخفيضات ضريبية (غير ضريبة الأرباح)', explication_da: 'مبالغ تستردها الشركة من ضرائب تم دفعها سابقا (TVA، باتانتا...).', journal_da: '<p><em>[Debit Etat débiteur/Trésorerie / Credit 7582]</em></p>'},
    { classe: 7, numero: '7585', nom_fr: 'Rentrées sur créances soldées', nom_da: 'مقبوضات على ديون تم شطبها', explication_da: 'استلام مبلغ من دين كنا اعتبرناه معدوما في السابق.', journal_da: '<p><em>[Debit Trésorerie / Credit 7585]</em></p>'},
    { classe: 7, numero: '7586', nom_fr: 'Dons, libéralités et lots reçus', nom_da: 'الهبات والتبرعات والجوائز المستلمة', explication_da: 'مبالغ أو أصول يتم الحصول عليها كهبة أو جائزة غير جارية.', journal_da: '<p><em>[Debit Trésorerie/Immobilisation / Credit 7586]</em></p>'},
    { classe: 7, numero: '7588', nom_fr: 'Autres produits non courants des exercices antérieurs', nom_da: 'إيرادات غير جارية أخرى لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},
    { classe: 7, numero: '7591', nom_fr: 'Reprises non courantes sur Amort. Exceptionnels', nom_da: 'استرجاعات غير جارية على الاستهلاكات الاستثنائية', explication_da: 'إلغاء استهلاك استثنائي سابق.', journal_da: '<p><em>[Debit 28xx / Credit 7591]</em></p>'},
    { classe: 7, numero: '7594', nom_fr: 'Reprises non courantes sur Provisions Réglementées', nom_da: 'استرجاعات غير جارية على المؤونات المنظمة', explication_da: 'إلغاء مؤونة منظمة لم يعد لها داعي.', journal_da: '<p><em>[Debit 135x / Credit 7594]</em></p>'},
    { classe: 7, numero: '7595', nom_fr: 'Reprises non courantes sur Prov. Risques et Charges', nom_da: 'استرجاعات غير جارية على مؤونات المخاطر والأعباء', explication_da: 'إلغاء مؤونة غير جارية.', journal_da: '<p><em>[Debit 15xx/450x / Credit 7595]</em></p>'},
    { classe: 7, numero: '7596', nom_fr: 'Reprises non courantes sur Prov. Dépréciation', nom_da: 'استرجاعات غير جارية على مؤونات انخفاض القيمة', explication_da: 'إلغاء مؤونة غير جارية لانخفاض قيمة أصل.', journal_da: '<p><em>[Debit 29xx/39xx/59xx / Credit 7596]</em></p>'},
    { classe: 7, numero: '7597', nom_fr: 'Transferts de charges non courantes', nom_da: 'تحويل الأعباء غير الجارية', explication_da: 'تحميل تكلفة عبء غير جاري على أصل تم إنتاجه داخليا.', journal_da: '<p><em>[Debit Immobilisation produite / Credit 7597]</em></p>'},
    { classe: 7, numero: '7598', nom_fr: 'Reprises non courantes des exercices antérieurs', nom_da: 'استرجاعات غير جارية لسنوات سابقة', journal_da: '<p><em>[الشرح والتسجيل في طور الإعداد...]</em></p>'},

]; // نهاية بيانات الفئة 