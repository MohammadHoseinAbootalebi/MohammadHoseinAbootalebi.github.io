//##############################################################################################################################################################
//##############################################################################################################################################################
//##############################################################################################################################################################
//##############################################################################################################################################################
//################################################# © All Rights reserved BY Muhammad Husain Aboutalebi © ######################################################
//##############################################################################################################################################################
//##############################################################################################################################################################
//##############################################################################################################################################################
//##############################################################################################################################################################

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Base each book row functionlaity ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// --------------------- ↓ Static Informations for Individual Skills Page ↓ ---------------------

// Documentation
// This dictionary contains all bold font text contents
var BoldFirstHeireachyFont = {
    // English
    'English': {
        'DownloadMyResumeButtonTopNavigationBar': 'Download My Resume',
        'HomeButtonLinkTopNavigationBar': 'Home',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "UI & UX Designer",
            "Flutter Developer": "Flutter Developer",
            "Full Stack Developer": "Full Stack Developer",
            "Android Developer": "Android Developer",
            "AI Engineer": "AI Engineer",
            "Industrial Designer": "Industrial Designer",
            "Self-Driving Automobile Engineer": "Self-Driving Automobile Engineer",
            "Mechanical Engineer": "Mechanical Engineer",
        },
        'RequestForPDFForVerification': "Please request the PDF of this book for verification.",
        "BackToGoTheBooksRows": "Back",
        'fontFamily': "'Lilita One', serif",
    },
    // German
    'Deutsch': {
        'DownloadMyResumeButtonTopNavigationBar': 'Laden Sie meinen Lebenslauf herunter',
        'HomeButtonLinkTopNavigationBar': 'Heim',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "UI & UX Designer",
            "Flutter Developer": "Flutter-Entwickler",
            "Full Stack Developer": "Full-Stack-Entwickler",
            "Android Developer": "Android-Entwickler",
            "AI Engineer": "KI-Ingenieur",
            "Industrial Designer": "Industriedesigner",
            "Self-Driving Automobile Engineer": "Ingenieur für selbstfahrende Automobile",
            "Mechanical Engineer": "Maschinenbauingenieur",
        },
        'RequestForPDFForVerification': "Bitte fordern Sie zur Überprüfung das PDF dieses Buches an.",
        "BackToGoTheBooksRows": "Zurück",
        'fontFamily': "'Lilita One', serif",
    },
    // Chinese
    '中国人': {
        'DownloadMyResumeButtonTopNavigationBar': '下载我的简历',
        'HomeButtonLinkTopNavigationBar': '家',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "UI 和 UX 设计师",
            "Flutter Developer": "Flutter 开发人员",
            "Full Stack Developer": "全栈开发人员",
            "Android Developer": "Android 开发者",
            "AI Engineer": "AI工程师",
            "Industrial Designer": "工业设计师",
            "Self-Driving Automobile Engineer": "自动驾驶汽车工程师",
            "Mechanical Engineer": "机械工程师",
        },
        'RequestForPDFForVerification': "请索取该书的 PDF 以供验证。",
        "BackToGoTheBooksRows": "后退",
        'fontFamily': "'Ma Shan Zheng', serif",
    },
    // Russian
    'Русский': {
        'DownloadMyResumeButtonTopNavigationBar': 'Скачать мое резюме',
        'HomeButtonLinkTopNavigationBar': 'Дом',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "UI и UX дизайнер",
            "Flutter Developer": "Разработчик Flutter",
            "Full Stack Developer": "Полный стек разработчик",
            "Android Developer": "Android-разработчик",
            "AI Engineer": "Инженер по искусственному интеллекту",
            "Industrial Designer": "Промышленный дизайнер",
            "Self-Driving Automobile Engineer": "Инженер по беспилотным автомобилям",
            "Mechanical Engineer": "Инженер-механик",
        },
        'RequestForPDFForVerification': "Пожалуйста, запросите PDF-файл этой книги для проверки.",
        "BackToGoTheBooksRows": "Назад",
        'fontFamily': "'Lilita One', serif",
    },
    // French
    'Français': {
        'DownloadMyResumeButtonTopNavigationBar': 'Télécharger mon CV',
        'HomeButtonLinkTopNavigationBar': 'Maison',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "Concepteur UI et UX",
            "Flutter Developer": "Développeur Flutter",
            "Full Stack Developer": "Développeur Full Stack",
            "Android Developer": "Développeur Android",
            "AI Engineer": "Ingénieur IA",
            "Industrial Designer": "Designer industriel",
            "Self-Driving Automobile Engineer": "Ingénieur automobile autonome",
            "Mechanical Engineer": "Ingénieur mécanique",
        },
        'RequestForPDFForVerification': "Veuillez demander le PDF de ce livre pour vérification.",
        "BackToGoTheBooksRows": "Dos",
        'fontFamily': "'Lilita One', serif",
    },
    // Japanese
    '日本語': {
        'DownloadMyResumeButtonTopNavigationBar': '履歴書をダウンロード',
        'HomeButtonLinkTopNavigationBar': '家',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "UI & UX デザイナー",
            "Flutter Developer": "フラッター開発者",
            "Full Stack Developer": "フルスタック開発者",
            "Android Developer": "Android 開発者",
            "AI Engineer": "AIエンジニア",
            "Industrial Designer": "工業デザイナー",
            "Self-Driving Automobile Engineer": "自動運転自動車エンジニア",
            "Mechanical Engineer": "機械工学士",
        },
        'RequestForPDFForVerification': "確認のため、この本の PDF をリクエストしてください。",
        "BackToGoTheBooksRows": "戻る",
        'fontFamily': "'Dela Gothic One', serif",
    },
    // Korean
    '한국인': {
        'DownloadMyResumeButtonTopNavigationBar': '내 이력서 다운로드',
        'HomeButtonLinkTopNavigationBar': '집',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "UI & UX 디자이너",
            "Flutter Developer": "Flutter 개발자",
            "Full Stack Developer": "풀스택 개발자",
            "Android Developer": "안드로이드 개발자",
            "AI Engineer": "AI 엔지니어",
            "Industrial Designer": "산업 디자이너",
            "Self-Driving Automobile Engineer": "자율주행 자동차 엔지니어",
            "Mechanical Engineer": "기계 엔지니어",
        },
        'RequestForPDFForVerification': "확인을 위해 이 책의 PDF를 요청하세요.",
        "BackToGoTheBooksRows": "뒤쪽에",
        'fontFamily': "'Black Han Sans'",
    },
    // Spanish
    'Español': {
        'DownloadMyResumeButtonTopNavigationBar': 'Descargar mi currículum',
        'HomeButtonLinkTopNavigationBar': 'Hogar',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "Diseñador de interfaz de usuario y UX",
            "Flutter Developer": "Desarrollador Flutter",
            "Full Stack Developer": "Desarrollador de pila completa",
            "Android Developer": "Desarrollador de Android",
            "AI Engineer": "Ingeniero de inteligencia artificial",
            "Industrial Designer": "Diseñador industrial",
            "Self-Driving Automobile Engineer": "Ingeniero de automóviles autónomos",
            "Mechanical Engineer": "Ingeniero mecanico",
        },
        'RequestForPDFForVerification': "Solicite el PDF de este libro para su verificación.",
        "BackToGoTheBooksRows": "Atrás",
        'fontFamily': "'Lilita One', serif",
    },
    // Hindi
    'हिंदी': {
        'DownloadMyResumeButtonTopNavigationBar': 'मेरा बायोडाटा डाउनलोड करें',
        'HomeButtonLinkTopNavigationBar': 'घर',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "यूआई और यूएक्स डिजाइनर",
            "Flutter Developer": "फ़्लटर डेवलपर",
            "Full Stack Developer": "पूरी स्टैक बनानेवाला",
            "Android Developer": "एंड्रॉइड डेवलपर",
            "AI Engineer": "एआई इंजीनियर",
            "Industrial Designer": "इंडस्ट्रियल डिजाइनर",
            "Self-Driving Automobile Engineer": "स्व-चालित ऑटोमोबाइल इंजीनियर",
            "Mechanical Engineer": "यांत्रिक इंजीनियर",
        },
        'RequestForPDFForVerification': "कृपया सत्यापन के लिए इस पुस्तक की पीडीएफ़ का अनुरोध करें।",
        "BackToGoTheBooksRows": "पीछे",
        'fontFamily': "'Lilita One', serif",
    },
    // Portuguese
    'Português': {
        'DownloadMyResumeButtonTopNavigationBar': 'Baixe meu currículo',
        'HomeButtonLinkTopNavigationBar': 'Lar',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "Designer de UI e UX",
            "Flutter Developer": "Desenvolvedor Flutter",
            "Full Stack Developer": "Desenvolvedor Full Stack",
            "Android Developer": "Desenvolvedor Android",
            "AI Engineer": "Engenheiro de IA",
            "Industrial Designer": "Designer industrial",
            "Self-Driving Automobile Engineer": "Engenheiro de automóveis autônomo",
            "Mechanical Engineer": "Engenheiro mecânico",
        },
        'RequestForPDFForVerification': "Solicite o PDF deste livro para verificação.",
        "BackToGoTheBooksRows": "Costas",
        'fontFamily': "'Lilita One', serif",
    },
    // Bengali
    'বাংলা': {
        'DownloadMyResumeButtonTopNavigationBar': 'আমার জীবনবৃত্তান্ত ডাউনলোড করুন',
        'HomeButtonLinkTopNavigationBar': 'বাড়ি',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "UI এবং UX ডিজাইনার",
            "Flutter Developer": "ফ্লটার ডেভেলপার",
            "Full Stack Developer": "সম্পূর্ণ স্ট্যাক ডেভেলপার",
            "Android Developer": "অ্যান্ড্রয়েড ডেভেলপার",
            "AI Engineer": "এআই ইঞ্জিনিয়ার",
            "Industrial Designer": "ইন্ডাস্ট্রিয়াল ডিজাইনার",
            "Self-Driving Automobile Engineer": "স্ব-ড্রাইভিং অটোমোবাইল ইঞ্জিনিয়ার",
            "Mechanical Engineer": "যন্ত্র কৌশলী",
        },
        'RequestForPDFForVerification': "অনুগ্রহ করে যাচাইয়ের জন্য এই বইটির PDF অনুরোধ করুন।",
        "BackToGoTheBooksRows": "পেছনে",
        'fontFamily': "'Galada', serif",
    },
    // Arabic
    'عَرَبِيّ': {
        'DownloadMyResumeButtonTopNavigationBar': 'تحميل سيرتي الذاتية',
        'HomeButtonLinkTopNavigationBar': 'بيت',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "مصمم واجهة المستخدم وتجربة المستخدم",
            "Flutter Developer": "مطور الرفرفة",
            "Full Stack Developer": "مطور مكدس كامل",
            "Android Developer": "الروبوت المطور",
            "AI Engineer": "مهندس الذكاء الاصطناعي",
            "Industrial Designer": "المصمم الصناعي",
            "Self-Driving Automobile Engineer": "مهندس سيارات ذاتية القيادة",
            "Mechanical Engineer": "مهندس ميكانيكي",
        },
        'RequestForPDFForVerification': "يرجى طلب ملف PDF لهذا الكتاب للتحقق منه.",
        "BackToGoTheBooksRows": "خلف",
        'fontFamily': "'Lalezar', serif",
    },
    // Persian
    'فارسی': {
        'DownloadMyResumeButtonTopNavigationBar': 'دانلود رزومه من',
        'HomeButtonLinkTopNavigationBar': 'صفحه اصلی',
        'FirstViewIntroductionHeadingWhichSkillIsSelected': {
            "UI & UX Designer": "طراح رابطه و تجربه کاربری",
            "Flutter Developer": "توسعه دهنده فلاتر",
            "Full Stack Developer": "توسعه دهنده فول استک",
            "Android Developer": "توسعه دهنده اندروید",
            "AI Engineer": "مهندس هوش مصنوعی",
            "Industrial Designer": "طراح صنعتی",
            "Self-Driving Automobile Engineer": "مهندس خودروی خودران",
            "Mechanical Engineer": "مهندس مکانیک",
        },
        'RequestForPDFForVerification': "لطفاً فایل PDF این کتاب را برای راستی آزمایی، درخواست کنید.",
        "BackToGoTheBooksRows": "بازگشت",
        'fontFamily': "'Lalezar', serif",
    },
    'FirstViewSkillImageCardImage': {
        "UI & UX Designer": "../assets/img/Book Covers/FirstViewCardSkillsImages/UI - UX Designer.jpg",
        "Flutter Developer": "../assets/img/Book Covers/FirstViewCardSkillsImages/Flutter Card.jpg",
        "Full Stack Developer": "../assets/img/Book Covers/FirstViewCardSkillsImages/Full Stack Developer.jpg",
        "Android Developer": "../assets/img/Book Covers/FirstViewCardSkillsImages/Android Developer.jpg",
        "AI Engineer": "../assets/img/Book Covers/FirstViewCardSkillsImages/AI Engineer.jpeg",
        "Industrial Designer": "../assets/img/Book Covers/FirstViewCardSkillsImages/Industrial Designer.jpg",
        "Self-Driving Automobile Engineer": "../assets/img/Book Covers/FirstViewCardSkillsImages/SDC Engineer.jpeg",
        "Mechanical Engineer": "../assets/img/Book Covers/FirstViewCardSkillsImages/Mechanical Engineer Simulation.png",
    },
};

// Documentation
// This dictionary will be used for translating the chapter descriptions
var solidworks_basic_tools_SDC_publication = {
    "BookName": "SOLIDWORKS 2020 Basic Tools",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "SOLIDWORKS 2020 User Interface",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces the user interface, highlighting the CommandManager for streamlined access to features, customizable toolbars, and various view ports for modeling. It explains the importance of reference planes and the common origin for 3D sketches, along with selection methods like box selection for efficient entity selection. Additionally, it covers the use of mouse gestures as customizable shortcuts to enhance user workflow and productivity within the software.",
                // German
                "Deutsch": "In diesem Kapitel wird die Benutzeroberfläche vorgestellt. Dabei wird der CommandManager für einen optimierten Zugriff auf Funktionen, anpassbare Symbolleisten und verschiedene Ansichtsfenster für die Modellierung hervorgehoben. Es erklärt die Bedeutung von Referenzebenen und des gemeinsamen Ursprungs für 3D-Skizzen sowie Auswahlmethoden wie die Boxauswahl für eine effiziente Objektauswahl. Darüber hinaus wird die Verwendung von Mausgesten als anpassbare Tastenkombinationen behandelt, um den Arbeitsablauf und die Produktivität des Benutzers innerhalb der Software zu verbessern.",
                // Chinese
                "中国人": "本章介绍了用户界面，重点介绍了 CommandManager，它简化了对功能的访问、可自定义的工具栏和用于建模的各种视图端口。它解释了参考平面和 3D 草图的共同原点的重要性，以及诸如框选择之类的选择方法，以实现高效的实体选择。此外，它还介绍了如何使用鼠标手势作为可自定义的快捷方式来增强软件中的用户工作流程和工作效率。",
                // Russian
                "Русский": "В этой главе представлен пользовательский интерфейс, с акцентом на CommandManager для упрощенного доступа к функциям, настраиваемые панели инструментов и различные видовые порты для моделирования. В ней объясняется важность опорных плоскостей и общего начала для 3D-эскизов, а также методы выбора, такие как выбор рамки для эффективного выбора сущности. Кроме того, в ней рассматривается использование жестов мыши в качестве настраиваемых сочетаний клавиш для улучшения рабочего процесса пользователя и производительности в программном обеспечении.",
                // French
                "Français": "Ce chapitre présente l'interface utilisateur, en mettant en avant le CommandManager pour un accès simplifié aux fonctionnalités, les barres d'outils personnalisables et les différentes fenêtres d'affichage pour la modélisation. Il explique l'importance des plans de référence et de l'origine commune des esquisses 3D, ainsi que les méthodes de sélection telles que la sélection par boîte pour une sélection efficace des entités. En outre, il aborde l'utilisation des mouvements de la souris comme raccourcis personnalisables pour améliorer le flux de travail et la productivité de l'utilisateur au sein du logiciel.",
                // Japanese
                "日本語": "この章では、ユーザー インターフェースについて紹介し、機能への効率的なアクセスを実現する CommandManager、カスタマイズ可能なツールバー、モデリング用のさまざまなビュー ポートについて説明します。また、3D スケッチの参照面と共通原点の重要性、および効率的なエンティティ選択を実現するボックス選択などの選択方法についても説明します。さらに、ソフトウェア内でのユーザー ワークフローと生産性を向上させるカスタマイズ可能なショートカットとしてのマウス ジェスチャの使用についても説明します。",
                // Korean
                "한국인": "이 장에서는 사용자 인터페이스를 소개하고, 피처에 대한 간소화된 액세스, 사용자 정의 가능한 도구 모음 및 모델링을 위한 다양한 뷰 포트를 위한 CommandManager를 강조합니다. 참조 평면과 3D 스케치의 공통 원점의 중요성과 효율적인 엔티티 선택을 위한 상자 선택과 같은 선택 방법을 설명합니다. 또한, 소프트웨어 내에서 사용자 워크플로와 생산성을 향상시키기 위한 사용자 정의 가능한 단축키로 마우스 제스처를 사용하는 방법을 다룹니다.",
                // Spanish
                "Español": "En este capítulo se presenta la interfaz de usuario, destacando el CommandManager para un acceso simplificado a las funciones, las barras de herramientas personalizables y varios puertos de visualización para el modelado. Se explica la importancia de los planos de referencia y el origen común de los bocetos 3D, junto con los métodos de selección como la selección de cuadros para una selección eficiente de entidades. Además, se cubre el uso de gestos del mouse como accesos directos personalizables para mejorar el flujo de trabajo y la productividad del usuario dentro del software.",
                // Hindi
                "हिंदी": "यह अध्याय उपयोगकर्ता इंटरफ़ेस का परिचय देता है, जिसमें सुविधाओं तक सरल पहुँच के लिए कमांडमैनेजर, अनुकूलन योग्य टूलबार और मॉडलिंग के लिए विभिन्न व्यू पोर्ट पर प्रकाश डाला गया है। यह संदर्भ विमानों के महत्व और 3D रेखाचित्रों के लिए सामान्य मूल के साथ-साथ कुशल इकाई चयन के लिए बॉक्स चयन जैसी चयन विधियों की व्याख्या करता है। इसके अतिरिक्त, यह सॉफ़्टवेयर के भीतर उपयोगकर्ता वर्कफ़्लो और उत्पादकता को बढ़ाने के लिए अनुकूलन योग्य शॉर्टकट के रूप में माउस जेस्चर के उपयोग को शामिल करता है।",
                // Portuguese
                "Português": "Este capítulo apresenta a interface do utilizador, destacando o CommandManager para um acesso simplificado a funcionalidades, barras de ferramentas personalizáveis ​​e diversas portas de visualização para modelação. Explica a importância dos planos de referência e a origem comum dos esboços 3D, juntamente com os métodos de seleção, como a seleção de caixa, para uma seleção eficiente de entidades. Além disso, abrange a utilização de gestos do rato como atalhos personalizáveis ​​para melhorar o fluxo de trabalho do utilizador e a produtividade no software.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ব্যবহারকারী ইন্টারফেসের সাথে পরিচয় করিয়ে দেয়, বৈশিষ্ট্যগুলিতে সুগমিত অ্যাক্সেসের জন্য কমান্ড ম্যানেজারকে হাইলাইট করে, কাস্টমাইজযোগ্য টুলবার এবং মডেলিংয়ের জন্য বিভিন্ন ভিউ পোর্ট। এটি রেফারেন্স প্লেনের গুরুত্ব এবং 3D স্কেচের জন্য সাধারণ উত্স ব্যাখ্যা করে, পাশাপাশি দক্ষ সত্তা নির্বাচনের জন্য বাক্স নির্বাচনের মতো নির্বাচন পদ্ধতিগুলিও ব্যাখ্যা করে৷ উপরন্তু, এটি সফ্টওয়্যারের মধ্যে ব্যবহারকারীর কর্মপ্রবাহ এবং উত্পাদনশীলতা বাড়াতে কাস্টমাইজযোগ্য শর্টকাট হিসাবে মাউস অঙ্গভঙ্গির ব্যবহারকে কভার করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل واجهة المستخدم، ويسلط الضوء على CommandManager لتسهيل الوصول إلى الميزات وأشرطة الأدوات القابلة للتخصيص ومنافذ العرض المتنوعة للنمذجة. ويشرح أهمية المستويات المرجعية والأصل المشترك للرسومات ثلاثية الأبعاد، إلى جانب طرق التحديد مثل تحديد المربع لتحديد الكيان بكفاءة. بالإضافة إلى ذلك، يغطي استخدام إيماءات الماوس كاختصارات قابلة للتخصيص لتحسين سير عمل المستخدم والإنتاجية داخل البرنامج.",
                // Persian
                "فارسی": "این فصل رابط کاربری را معرفی می‌کند و CommandManager را برای دسترسی ساده به ویژگی‌ها، نوار ابزارهای قابل تنظیم و درگاه‌های نمایش مختلف برای مدل‌سازی برجسته می‌کند. اهمیت صفحات مرجع و منشاء مشترک برای طرح های سه بعدی، همراه با روش های انتخاب مانند انتخاب جعبه برای انتخاب موجودیت کارآمد را توضیح می دهد. علاوه بر این، استفاده از حرکات ماوس را به عنوان میانبرهای قابل تنظیم برای افزایش گردش کار کاربر و بهره وری در نرم افزار پوشش می دهد.",
            },
        },
        // 2
        {
            "ChapterName": "System Options",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter outlines the essential settings that users should configure after installation to establish default parameters for all documents. It covers various aspects such as input dimension values, display controls for drawings and assemblies, performance settings for large assemblies, and backup file management. Additionally, it highlights the importance of modifying these settings to ensure compatibility with applications and company standards, as they are saved in the system registry and affect both current and future documents.",
                // German
                "Deutsch": "In diesem Kapitel werden die wesentlichen Einstellungen beschrieben, die Benutzer nach der Installation konfigurieren sollten, um Standardparameter für alle Dokumente festzulegen. Es behandelt verschiedene Aspekte wie Eingabemaßwerte, Anzeigesteuerungen für Zeichnungen und Baugruppen, Leistungseinstellungen für große Baugruppen und die Verwaltung von Sicherungsdateien. Darüber hinaus wird betont, wie wichtig es ist, diese Einstellungen zu ändern, um die Kompatibilität mit Anwendungen und Unternehmensstandards sicherzustellen, da sie in der Systemregistrierung gespeichert werden und sich sowohl auf aktuelle als auch auf zukünftige Dokumente auswirken.",
                // Chinese
                "中国人": "本章概述了用户在安装后应配置的基本设置，以便为所有文档建立默认参数。它涵盖了输入尺寸值、图纸和装配体的显示控制、大型装配体的性能设置以及备份文件管理等各个方面。此外，它还强调了修改这些设置以确保与应用程序和公司标准的兼容性的重要性，因为它们保存在系统注册表中，并且会影响当前和未来的文档。",
                // Russian
                "Русский": "В этой главе описываются основные параметры, которые пользователи должны настроить после установки, чтобы задать параметры по умолчанию для всех документов. Она охватывает различные аспекты, такие как входные значения размеров, элементы управления отображением для чертежей и сборок, параметры производительности для больших сборок и управление файлами резервного копирования. Кроме того, она подчеркивает важность изменения этих параметров для обеспечения совместимости с приложениями и стандартами компании, поскольку они сохраняются в системном реестре и влияют как на текущие, так и на будущие документы.",
                // French
                "Français": "Ce chapitre décrit les paramètres essentiels que les utilisateurs doivent configurer après l'installation pour établir des paramètres par défaut pour tous les documents. Il couvre divers aspects tels que les valeurs de dimension d'entrée, les contrôles d'affichage pour les dessins et les assemblages, les paramètres de performances pour les assemblages volumineux et la gestion des fichiers de sauvegarde. En outre, il souligne l'importance de modifier ces paramètres pour garantir la compatibilité avec les applications et les normes de l'entreprise, car ils sont enregistrés dans le registre système et affectent les documents actuels et futurs.",
                // Japanese
                "日本語": "この章では、すべてのドキュメントのデフォルト パラメータを設定するために、インストール後にユーザーが構成する必要がある重要な設定について説明します。入力寸法値、図面とアセンブリの表示コントロール、大規模アセンブリのパフォーマンス設定、バックアップ ファイル管理など、さまざまな側面について説明します。また、これらの設定はシステム レジストリに保存され、現在のドキュメントと将来のドキュメントの両方に影響するため、アプリケーションと会社の標準との互換性を確保するためにこれらの設定を変更することの重要性についても説明します。",
                // Korean
                "한국인": "이 장에서는 사용자가 설치 후 모든 문서에 대한 기본 매개변수를 설정하기 위해 구성해야 하는 필수 설정을 설명합니다. 여기에는 입력 치수 값, 도면 및 어셈블리의 디스플레이 컨트롤, 대형 어셈블리의 성능 설정, 백업 파일 관리와 같은 다양한 측면이 포함됩니다. 또한 이러한 설정은 시스템 레지스트리에 저장되고 현재 및 미래 문서에 영향을 미치므로 애플리케이션 및 회사 표준과의 호환성을 보장하기 위해 이러한 설정을 수정하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "En este capítulo se describen los ajustes esenciales que los usuarios deben configurar después de la instalación para establecer parámetros predeterminados para todos los documentos. Se tratan diversos aspectos, como los valores de dimensión de entrada, los controles de visualización para dibujos y conjuntos, los ajustes de rendimiento para conjuntos de gran tamaño y la gestión de archivos de copia de seguridad. Además, se destaca la importancia de modificar estos ajustes para garantizar la compatibilidad con las aplicaciones y los estándares de la empresa, ya que se guardan en el registro del sistema y afectan tanto a los documentos actuales como a los futuros.",
                // Hindi
                "हिंदी": "यह अध्याय उन आवश्यक सेटिंग्स को रेखांकित करता है जिन्हें उपयोगकर्ताओं को सभी दस्तावेज़ों के लिए डिफ़ॉल्ट पैरामीटर स्थापित करने के लिए इंस्टॉलेशन के बाद कॉन्फ़िगर करना चाहिए। इसमें इनपुट आयाम मान, ड्रॉइंग और असेंबली के लिए डिस्प्ले कंट्रोल, बड़ी असेंबली के लिए प्रदर्शन सेटिंग्स और बैकअप फ़ाइल प्रबंधन जैसे विभिन्न पहलुओं को शामिल किया गया है। इसके अतिरिक्त, यह अनुप्रयोगों और कंपनी मानकों के साथ संगतता सुनिश्चित करने के लिए इन सेटिंग्स को संशोधित करने के महत्व पर प्रकाश डालता है, क्योंकि वे सिस्टम रजिस्ट्री में सहेजे जाते हैं और वर्तमान और भविष्य के दोनों दस्तावेज़ों को प्रभावित करते हैं।",
                // Portuguese
                "Português": "Este capítulo descreve as definições essenciais que os utilizadores devem definir após a instalação para estabelecer os parâmetros padrão para todos os documentos. Abrange vários aspetos, tais como valores de dimensão de entrada, controlos de visualização para desenhos e montagens, definições de desempenho para montagens grandes e gestão de ficheiros de cópia de segurança. Além disso, destaca a importância de modificar estas definições para garantir a compatibilidade com as aplicações e normas da empresa, uma vez que ficam guardadas no registo do sistema e afetam os documentos atuais e futuros.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি সমস্ত নথির জন্য ডিফল্ট পরামিতি স্থাপন করতে ইনস্টলেশনের পরে ব্যবহারকারীদের কনফিগার করা আবশ্যক সেটিংসের রূপরেখা দেয়। এটি বিভিন্ন দিক কভার করে যেমন ইনপুট মাত্রা মান, অঙ্কন এবং সমাবেশগুলির জন্য প্রদর্শন নিয়ন্ত্রণ, বড় সমাবেশগুলির জন্য কর্মক্ষমতা সেটিংস এবং ব্যাকআপ ফাইল পরিচালনা। উপরন্তু, এটি অ্যাপ্লিকেশন এবং কোম্পানির মানগুলির সাথে সামঞ্জস্যতা নিশ্চিত করার জন্য এই সেটিংস পরিবর্তন করার গুরুত্বকে হাইলাইট করে, কারণ সেগুলি সিস্টেম রেজিস্ট্রিতে সংরক্ষিত হয় এবং বর্তমান এবং ভবিষ্যতের উভয় নথিকে প্রভাবিত করে৷",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل الإعدادات الأساسية التي يجب على المستخدمين تكوينها بعد التثبيت لتعيين معلمات افتراضية لجميع المستندات. ويغطي جوانب مختلفة مثل قيم أبعاد الإدخال، وعناصر التحكم في العرض للرسومات والتجميعات، وإعدادات الأداء للتجميعات الكبيرة، وإدارة ملفات النسخ الاحتياطي. بالإضافة إلى ذلك، يسلط الضوء على أهمية تعديل هذه الإعدادات لضمان التوافق مع التطبيقات ومعايير الشركة، حيث يتم حفظها في سجل النظام وتؤثر على المستندات الحالية والمستقبلية.",
                // Persian
                "فارسی": "این فصل تنظیمات ضروری را که کاربران باید پس از نصب برای ایجاد پارامترهای پیش‌فرض برای همه اسناد پیکربندی کنند، تشریح می‌کند. جنبه های مختلفی مانند مقادیر ابعاد ورودی، کنترل های نمایش برای نقشه ها و مجموعه ها، تنظیمات عملکرد برای مجموعه های بزرگ و مدیریت فایل های پشتیبان را پوشش می دهد. علاوه بر این، اهمیت تغییر این تنظیمات برای اطمینان از سازگاری با برنامه ها و استانداردهای شرکت را برجسته می کند، زیرا آنها در رجیستری سیستم ذخیره می شوند و بر اسناد فعلی و آینده تأثیر می گذارند.",
            },
        },
        // 3
        {
            "ChapterName": "Document Templates",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter covers the essential features and settings of SOLIDWORKS 2020 document templates, focusing on the customization of document properties such as drafting standards, dimensions, annotations, and units. It emphasizes the importance of establishing consistent drafting standards, including options for various standards like ANSI and ISO, and allows users to adjust image quality for performance. Additionally, it highlights the ability to save customized settings as part templates for efficient reuse in future projects, ensuring a streamlined workflow in design documentation.",
                // German
                "Deutsch": "In diesem Kapitel werden die wesentlichen Funktionen und Einstellungen der Dokumentvorlagen von SOLIDWORKS 2020 behandelt. Dabei liegt der Schwerpunkt auf der Anpassung von Dokumenteigenschaften wie Zeichnungsnormen, Bemaßungen, Anmerkungen und Einheiten. Es betont die Bedeutung der Festlegung einheitlicher Zeichnungsnormen, einschließlich Optionen für verschiedene Normen wie ANSI und ISO, und ermöglicht Benutzern, die Bildqualität an die Leistung anzupassen. Darüber hinaus wird die Möglichkeit hervorgehoben, benutzerdefinierte Einstellungen als Teilevorlagen für die effiziente Wiederverwendung in zukünftigen Projekten zu speichern und so einen optimierten Workflow in der Konstruktionsdokumentation sicherzustellen.",
                // Chinese
                "中国人": "本章介绍 SOLIDWORKS 2020 文档模板的基本功能和设置，重点介绍文档属性（例如绘图标准、尺寸、注释和单位）的自定义。它强调了建立一致绘图标准的重要性，包括 ANSI 和 ISO 等各种标准的选项，并允许用户调整图像质量以提高性能。此外，它还强调了将自定义设置保存为零件模板以便在未来项目中有效重复使用的能力，从而确保设计文档中的工作流程简化。",
                // Russian
                "Русский": "В этой главе рассматриваются основные функции и настройки шаблонов документов SOLIDWORKS 2020, с упором на настройку свойств документа, таких как стандарты черчения, размеры, аннотации и единицы измерения. В ней подчеркивается важность установления согласованных стандартов черчения, включая параметры для различных стандартов, таких как ANSI и ISO, и пользователи могут настраивать качество изображения для повышения производительности. Кроме того, в ней подчеркивается возможность сохранения настроенных параметров в качестве шаблонов деталей для эффективного повторного использования в будущих проектах, что обеспечивает оптимизированный рабочий процесс в проектной документации.",
                // French
                "Français": "Ce chapitre présente les fonctionnalités et paramètres essentiels des modèles de documents SOLIDWORKS 2020, en mettant l'accent sur la personnalisation des propriétés des documents, telles que les normes de dessin, les cotes, les annotations et les unités. Il souligne l'importance d'établir des normes de dessin cohérentes, notamment des options pour diverses normes telles que ANSI et ISO, et permet aux utilisateurs d'ajuster la qualité de l'image pour les performances. En outre, il met en évidence la possibilité d'enregistrer des paramètres personnalisés sous forme de modèles de pièces pour une réutilisation efficace dans les projets futurs, garantissant ainsi un flux de travail rationalisé dans la documentation de conception.",
                // Japanese
                "日本語": "この章では、製図規格、寸法、注釈、単位などのドキュメント プロパティのカスタマイズに焦点を当て、SOLIDWORKS 2020 ドキュメント テンプレートの重要な機能と設定について説明します。ANSI や ISO などのさまざまな規格のオプションを含む一貫した製図規格を確立することの重要性を強調し、ユーザーがパフォーマンスに合わせて画像品質を調整できるようにします。さらに、カスタマイズされた設定を部品テンプレートとして保存して将来のプロジェクトで効率的に再利用し、設計ドキュメントのワークフローを合理化する機能についても説明します。",
                // Korean
                "한국인": "이 장에서는 SOLIDWORKS 2020 문서 템플릿의 필수 기능과 설정을 다루며, 제도 표준, 치수, 주석, 단위와 같은 문서 속성의 사용자 정의에 초점을 맞춥니다. ANSI 및 ISO와 같은 다양한 표준에 대한 옵션을 포함하여 일관된 제도 표준을 수립하는 것의 중요성을 강조하고, 사용자가 성능을 위해 이미지 품질을 조정할 수 있도록 합니다. 또한, 향후 프로젝트에서 효율적으로 재사용할 수 있도록 사용자 정의 설정을 부품 템플릿으로 저장하는 기능을 강조하여 설계 문서에서 간소화된 워크플로를 보장합니다.",
                // Spanish
                "Español": "Este capítulo cubre las características y configuraciones esenciales de las plantillas de documentos de SOLIDWORKS 2020, centrándose en la personalización de las propiedades del documento, como estándares de dibujo, dimensiones, anotaciones y unidades. Destaca la importancia de establecer estándares de dibujo consistentes, incluidas las opciones para varios estándares como ANSI e ISO, y permite a los usuarios ajustar la calidad de la imagen para mejorar el rendimiento. Además, destaca la capacidad de guardar configuraciones personalizadas como plantillas de piezas para una reutilización eficiente en proyectos futuros, lo que garantiza un flujo de trabajo optimizado en la documentación de diseño.",
                // Hindi
                "हिंदी": "यह अध्याय SOLIDWORKS 2020 दस्तावेज़ टेम्पलेट्स की आवश्यक विशेषताओं और सेटिंग्स को कवर करता है, जो दस्तावेज़ गुणों जैसे कि प्रारूपण मानकों, आयामों, एनोटेशन और इकाइयों के अनुकूलन पर ध्यान केंद्रित करता है। यह ANSI और ISO जैसे विभिन्न मानकों के विकल्पों सहित सुसंगत प्रारूपण मानकों को स्थापित करने के महत्व पर जोर देता है, और उपयोगकर्ताओं को प्रदर्शन के लिए छवि गुणवत्ता को समायोजित करने की अनुमति देता है। इसके अतिरिक्त, यह भविष्य की परियोजनाओं में कुशल पुन: उपयोग के लिए अनुकूलित सेटिंग्स को भाग टेम्पलेट्स के रूप में सहेजने की क्षमता पर प्रकाश डालता है, जिससे डिज़ाइन दस्तावेज़ीकरण में एक सुव्यवस्थित वर्कफ़्लो सुनिश्चित होता है।",
                // Portuguese
                "Português": "Este capítulo aborda as características e configurações essenciais dos modelos de documentos do SOLIDWORKS 2020, com foco na personalização das propriedades do documento, como padrões de desenho, dimensões, anotações e unidades. Realça a importância de estabelecer padrões de desenho consistentes, incluindo opções para vários padrões como ANSI e ISO, e permite aos utilizadores ajustar a qualidade da imagem em função do desempenho. Além disso, destaca a capacidade de guardar configurações personalizadas como modelos de peças para uma reutilização eficiente em projetos futuros, garantindo um fluxo de trabalho simplificado na documentação do projeto.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে SOLIDWORKS 2020 ডকুমেন্ট টেমপ্লেটের প্রয়োজনীয় বৈশিষ্ট্য এবং সেটিংস কভার করে, ডকুমেন্টের বৈশিষ্ট্য যেমন খসড়ার মান, মাত্রা, টীকা এবং ইউনিটের কাস্টমাইজেশনের উপর ফোকাস করে। এটি এএনএসআই এবং আইএসও-এর মতো বিভিন্ন মানদণ্ডের বিকল্পগুলি সহ সামঞ্জস্যপূর্ণ খসড়া মান প্রতিষ্ঠার গুরুত্বের উপর জোর দেয় এবং ব্যবহারকারীদের পারফরম্যান্সের জন্য চিত্রের গুণমান সামঞ্জস্য করতে দেয়। উপরন্তু, এটি ভবিষ্যতের প্রকল্পগুলিতে দক্ষ পুনঃব্যবহারের জন্য অংশ টেমপ্লেট হিসাবে কাস্টমাইজড সেটিংস সংরক্ষণ করার ক্ষমতা হাইলাইট করে, ডিজাইন ডকুমেন্টেশনে একটি সুবিন্যস্ত কর্মপ্রবাহ নিশ্চিত করে।",
                // Arabic
                "عَرَبِيّ": "يغطي هذا الفصل الميزات والإعدادات الأساسية لقوالب مستندات SOLIDWORKS 2020، مع التركيز على تخصيص خصائص المستندات مثل معايير الصياغة والأبعاد والتعليقات التوضيحية والوحدات. ويؤكد على أهمية وضع معايير صياغة متسقة، بما في ذلك خيارات لمعايير مختلفة مثل ANSI وISO، ويسمح للمستخدمين بضبط جودة الصورة لتحسين الأداء. بالإضافة إلى ذلك، يسلط الضوء على القدرة على حفظ الإعدادات المخصصة كقوالب جزئية لإعادة الاستخدام بكفاءة في المشاريع المستقبلية، مما يضمن سير عمل مبسط في وثائق التصميم.",
                // Persian
                "فارسی": "این فصل ویژگی‌ها و تنظیمات اساسی الگوهای سند SOLIDWORKS 2020 را پوشش می‌دهد و بر سفارشی‌سازی ویژگی‌های سند مانند استانداردهای پیش‌نویس، ابعاد، حاشیه‌نویسی و واحدها تمرکز دارد. این بر اهمیت ایجاد استانداردهای پیش نویس سازگار، از جمله گزینه هایی برای استانداردهای مختلف مانند ANSI و ISO تأکید می کند و به کاربران اجازه می دهد تا کیفیت تصویر را برای عملکرد تنظیم کنند. علاوه بر این، توانایی ذخیره تنظیمات سفارشی شده را به عنوان الگوهای بخشی برای استفاده مجدد کارآمد در پروژه‌های آینده برجسته می‌کند و از یک گردش کار ساده در اسناد طراحی اطمینان می‌دهد.",
            },
        },
        // 4
        {
            "ChapterName": "Basic Solid Modeling - Extrude Options",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on Basic Solid Modeling in SOLIDWORKS 2020 focuses on teaching users how to effectively sketch on planes and planar surfaces, utilize sketch tools to create geometry, and apply geometric relations and dimensions to define sketches. It outlines a step-by-step process for selecting sketch planes, activating the sketch toolbar, and exploring various extrude options such as Blind, Up To Next, and others. Additionally, it emphasizes the importance of achieving a fully defined sketch for successful modeling and encourages users to review self-test questionnaires to reinforce their understanding before progressing.",
                // German
                "Deutsch": "Das Kapitel „Grundlegende Volumenmodellierung“ in SOLIDWORKS 2020 konzentriert sich darauf, den Benutzern beizubringen, wie sie effektiv auf Ebenen und planaren Oberflächen skizzieren, Skizzierwerkzeuge zum Erstellen von Geometrie verwenden und geometrische Beziehungen und Abmessungen anwenden, um Skizzen zu definieren. Es beschreibt einen schrittweisen Prozess zum Auswählen von Skizzierebenen, Aktivieren der Skizziersymbolleiste und Erkunden verschiedener Extrusionsoptionen wie Blind, Bis zum Nächsten und andere. Darüber hinaus wird betont, wie wichtig es ist, eine vollständig definierte Skizze für eine erfolgreiche Modellierung zu erstellen, und die Benutzer werden ermutigt, Selbsttestfragebögen durchzugehen, um ihr Verständnis zu festigen, bevor sie fortfahren.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 中有关基本实体建模的章节重点介绍如何有效地在平面和平面表面上绘制草图、利用草图工具创建几何图形以及应用几何关系和尺寸来定义草图。它概述了选择草图平面、激活草图工具栏以及探索各种拉伸选项（例如盲拉伸、上一步到下一步等）的分步过程。此外，它还强调了实现完全定义的草图对于成功建模的重要性，并鼓励用户在继续之前查看自测问卷以加强他们的理解。",
                // Russian
                "Русский": "Глава «Базовое твердотельное моделирование в SOLIDWORKS 2020» посвящена обучению пользователей эффективному рисованию на плоскостях и плоских поверхностях, использованию инструментов эскиза для создания геометрии и применению геометрических отношений и размеров для определения эскизов. В ней описывается пошаговый процесс выбора плоскостей эскиза, активации панели инструментов эскиза и изучения различных параметров выдавливания, таких как Blind, Up To Next и других. Кроме того, в ней подчеркивается важность получения полностью определенного эскиза для успешного моделирования и пользователям рекомендуется просматривать анкеты для самопроверки, чтобы закрепить свои знания перед продолжением.",
                // French
                "Français": "Le chapitre sur la modélisation solide de base dans SOLIDWORKS 2020 vise à enseigner aux utilisateurs comment esquisser efficacement sur des plans et des surfaces planes, utiliser les outils d'esquisse pour créer une géométrie et appliquer des relations et des cotes géométriques pour définir des esquisses. Il décrit un processus étape par étape pour sélectionner des plans d'esquisse, activer la barre d'outils d'esquisse et explorer diverses options d'extrusion telles que Blind, Up To Next et d'autres. En outre, il souligne l'importance d'obtenir une esquisse entièrement définie pour une modélisation réussie et encourage les utilisateurs à consulter des questionnaires d'auto-test pour renforcer leur compréhension avant de progresser.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 の基本的なソリッド モデリングに関する章では、平面や平らなサーフェスに効果的にスケッチする方法、スケッチ ツールを使用してジオメトリを作成する方法、ジオメトリの関係と寸法を適用してスケッチを定義する方法をユーザーに教えることに重点を置いています。スケッチ平面の選択、スケッチ ツールバーのアクティブ化、ブラインド、次へなどさまざまな押し出しオプションの検討に関する手順を概説します。さらに、モデリングを成功させるには完全に定義されたスケッチを達成することが重要であることを強調し、先に進む前に、理解を深めるためにセルフ テスト アンケートを確認することをユーザーに推奨します。",
                // Korean
                "한국인": "SOLIDWORKS 2020의 기본 솔리드 모델링에 대한 장은 사용자에게 평면 및 평면 표면에 효과적으로 스케치하는 방법, 스케치 도구를 사용하여 지오메트리를 만드는 방법, 지오메트리 관계 및 치수를 적용하여 스케치를 정의하는 방법을 가르치는 데 중점을 둡니다. 스케치 평면을 선택하고, 스케치 도구 모음을 활성화하고, 블라인드, 다음 단계 등과 같은 다양한 돌출 옵션을 탐색하는 단계별 프로세스를 설명합니다. 또한 성공적인 모델링을 위해 완전히 정의된 스케치를 달성하는 것의 중요성을 강조하고 사용자가 진행하기 전에 자체 테스트 설문지를 검토하여 이해도를 강화하도록 권장합니다.",
                // Spanish
                "Español": "El capítulo sobre modelado básico de sólidos en SOLIDWORKS 2020 se centra en enseñar a los usuarios a realizar bocetos de manera eficaz en planos y superficies planas, utilizar herramientas de boceto para crear geometría y aplicar relaciones geométricas y dimensiones para definir bocetos. Describe un proceso paso a paso para seleccionar planos de boceto, activar la barra de herramientas de boceto y explorar varias opciones de extrusión, como Ciego, Hasta el siguiente y otras. Además, enfatiza la importancia de lograr un boceto completamente definido para un modelado exitoso y alienta a los usuarios a revisar los cuestionarios de autoevaluación para reforzar su comprensión antes de continuar.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 में बेसिक सॉलिड मॉडलिंग पर अध्याय उपयोगकर्ताओं को यह सिखाने पर केंद्रित है कि कैसे प्लेन और प्लेनर सतहों पर प्रभावी ढंग से स्केच बनाया जाए, ज्यामिति बनाने के लिए स्केच टूल का उपयोग किया जाए और स्केच को परिभाषित करने के लिए ज्यामितीय संबंध और आयाम लागू किए जाएं। यह स्केच प्लेन का चयन करने, स्केच टूलबार को सक्रिय करने और ब्लाइंड, अप टू नेक्स्ट और अन्य जैसे विभिन्न एक्सट्रूड विकल्पों की खोज करने के लिए एक चरण-दर-चरण प्रक्रिया की रूपरेखा तैयार करता है। इसके अतिरिक्त, यह सफल मॉडलिंग के लिए पूरी तरह से परिभाषित स्केच प्राप्त करने के महत्व पर जोर देता है और उपयोगकर्ताओं को आगे बढ़ने से पहले अपनी समझ को मजबूत करने के लिए स्व-परीक्षण प्रश्नावली की समीक्षा करने के लिए प्रोत्साहित करता है।",
                // Portuguese
                "Português": "O capítulo sobre modelação básica de sólidos no SOLIDWORKS 2020 centra-se em ensinar os utilizadores a esboçar eficientemente planos e superfícies planas, utilizar ferramentas de esboço para criar geometria e aplicar relações geométricas e dimensões para definir esboços. Descreve um processo passo a passo para selecionar planos de esboço, ativar a barra de ferramentas de esboço e explorar diversas opções de extrusão, como Cego, Até ao próximo e outras. Além disso, enfatiza a importância de alcançar um esboço totalmente definido para uma modelação bem-sucedida e incentiva os utilizadores a rever questionários de autoteste para reforçar a sua compreensão antes de prosseguir.",
                // Bengali
                "বাংলা": "SOLIDWORKS 2020-এ বেসিক সলিড মডেলিং-এর অধ্যায় ব্যবহারকারীদের কীভাবে কার্যকরভাবে প্লেন এবং প্ল্যানার পৃষ্ঠে স্কেচ করতে হয়, জ্যামিতি তৈরি করতে স্কেচ টুল ব্যবহার করতে হয় এবং স্কেচগুলিকে সংজ্ঞায়িত করতে জ্যামিতিক সম্পর্ক এবং মাত্রা প্রয়োগ করতে হয় তা শেখানোর উপর দৃষ্টি নিবদ্ধ করে। এটি স্কেচ প্লেন নির্বাচন, স্কেচ টুলবার সক্রিয় করা এবং বিভিন্ন এক্সট্রুড বিকল্প যেমন ব্লাইন্ড, আপ টু নেক্সট এবং অন্যান্য অন্বেষণ করার জন্য একটি ধাপে ধাপে প্রক্রিয়ার রূপরেখা দেয়। উপরন্তু, এটি সফল মডেলিংয়ের জন্য একটি সম্পূর্ণ সংজ্ঞায়িত স্কেচ অর্জনের গুরুত্বের উপর জোর দেয় এবং ব্যবহারকারীদের অগ্রগতির আগে তাদের বোঝার জোরদার করার জন্য স্ব-পরীক্ষার প্রশ্নাবলী পর্যালোচনা করতে উত্সাহিত করে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الخاص بالنمذجة الصلبة الأساسية في SOLIDWORKS 2020 على تعليم المستخدمين كيفية رسم مخططات فعالة على المستويات والأسطح المستوية، واستخدام أدوات الرسم لإنشاء الهندسة، وتطبيق العلاقات والأبعاد الهندسية لتحديد الرسومات. كما يوضح عملية خطوة بخطوة لاختيار مستويات الرسم، وتنشيط شريط أدوات الرسم، واستكشاف خيارات البثق المختلفة مثل Blind وUp To Next وغيرها. بالإضافة إلى ذلك، يؤكد على أهمية تحقيق رسم محدد بالكامل للنمذجة الناجحة ويشجع المستخدمين على مراجعة استبيانات الاختبار الذاتي لتعزيز فهمهم قبل التقدم.",
                // Persian
                "فارسی": "فصل مدل‌سازی پایه جامدات در SOLIDWORKS 2020 بر آموزش به کاربران نحوه ترسیم مؤثر بر روی سطوح و سطوح مسطح، استفاده از ابزارهای طراحی برای ایجاد هندسه، و اعمال روابط و ابعاد هندسی برای تعریف طرح‌ها تمرکز دارد. این یک فرآیند گام به گام برای انتخاب صفحات طرح، فعال کردن نوار ابزار طرح، و بررسی گزینه‌های مختلف اکسترود مانند Blind، Up To Next و موارد دیگر را تشریح می‌کند. علاوه بر این، بر اهمیت دستیابی به یک طرح کاملاً تعریف‌شده برای مدل‌سازی موفق تأکید می‌کند و کاربران را تشویق می‌کند تا پرسشنامه‌های خودآزمایی را بررسی کنند تا درک خود را قبل از پیشرفت تقویت کنند.",
            },
        },
        // 5
        {
            "ChapterName": "Basic Solid Modeling - Extrude and Revolve",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter of SOLIDWORKS 2020, users are introduced to fundamental modeling techniques, including sketching on planar surfaces, adding dimensions, and applying geometric relations. The chapter covers essential features such as Extruded Boss/Base, Extruded Cut, revolved features, fillets, and chamfers, which are crucial for creating solid models. Additionally, the components designed in this chapter will be utilized in subsequent assembly lessons to demonstrate assembly creation, interference checking, and dynamic motion visualization, with an emphasis on reviewing self-test questionnaires to ensure comprehension before progressing.",
                // German
                "Deutsch": "In diesem Kapitel von SOLIDWORKS 2020 werden Benutzer in grundlegende Modellierungstechniken eingeführt, darunter das Skizzieren auf ebenen Flächen, das Hinzufügen von Bemaßungen und das Anwenden geometrischer Beziehungen. Das Kapitel behandelt wichtige Funktionen wie extrudierte Vorsprünge/Basen, extrudierte Schnitte, gedrehte Funktionen, Rundungen und Fasen, die für die Erstellung von Volumenmodellen entscheidend sind. Darüber hinaus werden die in diesem Kapitel entworfenen Komponenten in nachfolgenden Baugruppenlektionen verwendet, um die Erstellung von Baugruppen, die Kollisionsprüfung und die dynamische Bewegungsvisualisierung zu demonstrieren. Dabei liegt der Schwerpunkt auf der Überprüfung von Selbsttestfragebögen, um das Verständnis sicherzustellen, bevor fortgefahren wird.",
                // Chinese
                "中国人": "在 SOLIDWORKS 2020 的这一章中，用户将了解基本的建模技术，包括在平面上绘制草图、添加尺寸和应用几何关系。本章介绍了创建实体模型所必需的基本特征，例如挤压凸台/底座、挤压切口、旋转特征、圆角和倒角。此外，本章中设计的组件将在后续的装配课程中用于演示装配创建、干涉检查和动态运动可视化，重点是复习自测问卷，以确保在继续学习之前理解。",
                // Russian
                "Русский": "В этой главе SOLIDWORKS 2020 пользователи знакомятся с фундаментальными методами моделирования, включая эскизирование на плоских поверхностях, добавление размеров и применение геометрических отношений. В главе рассматриваются основные элементы, такие как вытянутая бобышка/основание, вытянутый вырез, вращающиеся элементы, скругления и фаски, которые имеют решающее значение для создания твердотельных моделей. Кроме того, компоненты, разработанные в этой главе, будут использоваться в последующих уроках по сборке для демонстрации создания сборки, проверки интерференции и визуализации динамического движения, с акцентом на просмотр анкет для самопроверки, чтобы обеспечить понимание перед продолжением.",
                // French
                "Français": "Dans ce chapitre de SOLIDWORKS 2020, les utilisateurs sont initiés aux techniques de modélisation fondamentales, notamment l'esquisse sur des surfaces planes, l'ajout de cotes et l'application de relations géométriques. Le chapitre couvre les fonctions essentielles telles que le bossage/la base extrudés, la découpe extrudée, les fonctions de révolution, les congés et les chanfreins, qui sont essentiels à la création de modèles solides. De plus, les composants conçus dans ce chapitre seront utilisés dans les leçons d'assemblage suivantes pour démontrer la création d'assemblages, la vérification des interférences et la visualisation des mouvements dynamiques, en mettant l'accent sur la révision des questionnaires d'auto-test pour garantir la compréhension avant de progresser.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 のこの章では、平面サーフェスへのスケッチ、寸法の追加、幾何学的関係の適用など、基本的なモデリング手法について紹介します。この章では、押し出しボス/ベース、押し出しカット、回転フィーチャー、フィレット、面取りなど、ソリッド モデルの作成に不可欠な基本フィーチャーについて説明します。さらに、この章で設計したコンポーネントは、以降のアセンブリ レッスンでアセンブリの作成、干渉チェック、動的モーションの視覚化のデモンストレーションに使用され、先に進む前にセルフテスト アンケートを確認して理解を確認することに重点が置かれます。",
                // Korean
                "한국인": "SOLIDWORKS 2020의 이 장에서 사용자는 평면 표면에 스케치, 치수 추가, 기하학적 관계 적용을 포함한 기본 모델링 기술을 소개합니다. 이 장에서는 솔리드 모델을 만드는 데 중요한 Extruded Boss/Base, Extruded Cut, 회전 피처, 필렛, 모따기와 같은 필수 기능을 다룹니다. 또한 이 장에서 설계한 구성 요소는 후속 어셈블리 수업에서 어셈블리 생성, 간섭 검사, 동적 모션 시각화를 시연하는 데 사용되며, 진행하기 전에 이해도를 확인하기 위해 셀프 테스트 설문지를 검토하는 데 중점을 둡니다.",
                // Spanish
                "Español": "En este capítulo de SOLIDWORKS 2020, se presentan a los usuarios las técnicas de modelado fundamentales, que incluyen la creación de bocetos en superficies planas, la adición de dimensiones y la aplicación de relaciones geométricas. El capítulo cubre características esenciales como saliente/base extruido, corte extruido, características de revolución, redondeos y chaflanes, que son cruciales para crear modelos sólidos. Además, los componentes diseñados en este capítulo se utilizarán en lecciones de ensamblaje posteriores para demostrar la creación de ensamblajes, la verificación de interferencias y la visualización de movimiento dinámico, con énfasis en la revisión de cuestionarios de autoevaluación para garantizar la comprensión antes de avanzar.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 के इस अध्याय में, उपयोगकर्ताओं को मूलभूत मॉडलिंग तकनीकों से परिचित कराया जाता है, जिसमें समतल सतहों पर रेखाचित्र बनाना, आयाम जोड़ना और ज्यामितीय संबंध लागू करना शामिल है। अध्याय में एक्सट्रूडेड बॉस/बेस, एक्सट्रूडेड कट, रिवॉल्व्ड फीचर्स, फिलेट्स और चैम्फर्स जैसी आवश्यक विशेषताओं को शामिल किया गया है, जो ठोस मॉडल बनाने के लिए महत्वपूर्ण हैं। इसके अतिरिक्त, इस अध्याय में डिज़ाइन किए गए घटकों का उपयोग असेंबली निर्माण, हस्तक्षेप जाँच और गतिशील गति विज़ुअलाइज़ेशन को प्रदर्शित करने के लिए बाद के असेंबली पाठों में किया जाएगा, जिसमें आगे बढ़ने से पहले समझ सुनिश्चित करने के लिए स्व-परीक्षण प्रश्नावली की समीक्षा करने पर जोर दिया जाएगा।",
                // Portuguese
                "Português": "Neste capítulo do SOLIDWORKS 2020, os utilizadores são apresentados às técnicas fundamentais de modelação, incluindo esboços em superfícies planas, adição de dimensões e aplicação de relações geométricas. O capítulo aborda características essenciais como o Ressalto/Base Extrudida, o Corte Extrudido, as características revolvidas, os filetes e os chanfros, que são cruciais para a criação de modelos sólidos. Além disso, os componentes concebidos neste capítulo serão utilizados nas lições de montagem subsequentes para demonstrar a criação de montagens, a verificação de interferências e a visualização dinâmica de movimento, com ênfase na revisão dos questionários de autoteste para garantir a compreensão antes de prosseguir.",
                // Bengali
                "বাংলা": "SOLIDWORKS 2020-এর এই অধ্যায়ে, ব্যবহারকারীদেরকে মৌলিক মডেলিং কৌশলগুলির সাথে পরিচয় করিয়ে দেওয়া হয়েছে, যার মধ্যে সমতল পৃষ্ঠের স্কেচ করা, মাত্রা যোগ করা এবং জ্যামিতিক সম্পর্ক প্রয়োগ করা। অধ্যায়টিতে এক্সট্রুডেড বস/বেস, এক্সট্রুড কাট, ঘূর্ণিত বৈশিষ্ট্য, ফিললেট এবং চ্যামফারের মতো প্রয়োজনীয় বৈশিষ্ট্যগুলি কভার করা হয়েছে, যা কঠিন মডেল তৈরির জন্য অত্যন্ত গুরুত্বপূর্ণ। অতিরিক্তভাবে, এই অধ্যায়ে পরিকল্পিত উপাদানগুলি পরবর্তী সমাবেশ পাঠে ব্যবহার করা হবে সমাবেশ তৈরি, হস্তক্ষেপ পরীক্ষা, এবং গতিশীল গতি ভিজ্যুয়ালাইজেশন প্রদর্শনের জন্য, যাতে অগ্রগতির আগে বোধগম্যতা নিশ্চিত করার জন্য স্ব-পরীক্ষার প্রশ্নাবলী পর্যালোচনার উপর জোর দেওয়া হয়।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل من SOLIDWORKS 2020، يتم تعريف المستخدمين بتقنيات النمذجة الأساسية، بما في ذلك الرسم على الأسطح المستوية، وإضافة الأبعاد، وتطبيق العلاقات الهندسية. يغطي الفصل ميزات أساسية مثل النتوء/القاعدة المبثوقة، والقطع المبثوق، والميزات الدوارة، والخطوط العريضة، والحواف المشطوفة، والتي تعد ضرورية لإنشاء نماذج صلبة. بالإضافة إلى ذلك، سيتم استخدام المكونات المصممة في هذا الفصل في دروس التجميع اللاحقة لإظهار إنشاء التجميع، والتحقق من التداخل، وتصور الحركة الديناميكية، مع التركيز على مراجعة استبيانات الاختبار الذاتي لضمان الفهم قبل التقدم.",
                // Persian
                "فارسی": "در این فصل از SOLIDWORKS 2020، کاربران با تکنیک‌های مدل‌سازی اساسی از جمله طراحی روی سطوح مسطح، افزودن ابعاد و اعمال روابط هندسی آشنا می‌شوند. این فصل ویژگی‌های اساسی مانند Boss/Base Extruded، Extruded Cut، ویژگی‌های چرخشی، فیله‌ها و پخ‌ها را پوشش می‌دهد که برای ایجاد مدل‌های جامد بسیار مهم هستند. علاوه بر این، مؤلفه‌های طراحی‌شده در این فصل در درس‌های مونتاژ بعدی برای نشان دادن ایجاد مجموعه، بررسی تداخل، و تجسم حرکت پویا، با تأکید بر بررسی پرسش‌نامه‌های خودآزمایی برای اطمینان از درک مطلب قبل از پیشرفت، مورد استفاده قرار خواهند گرفت.",
            },
        },
        // 6
        {
            "ChapterName": "Revolve Parts",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter covers the process of creating revolved features by rotating sketch profiles around a centerline, emphasizing the need for a single continuous closed contour. It explains the concept of derived sketches, which are dependent copies of the original sketch that automatically update with changes to the parent sketch, and outlines practical exercises for applying these tools, such as designing a ball joint arm and a flat head screwdriver. Additionally, it highlights the importance of understanding sketch requirements and the functionality of derived sketches in enhancing design efficiency.",
                // German
                "Deutsch": "In diesem Kapitel wird der Prozess der Erstellung von Drehelementen durch Drehen von Skizzenprofilen um eine Mittellinie behandelt. Dabei wird die Notwendigkeit einer einzelnen, durchgehenden, geschlossenen Kontur betont. Es erklärt das Konzept abgeleiteter Skizzen, bei denen es sich um abhängige Kopien der Originalskizze handelt, die bei Änderungen an der übergeordneten Skizze automatisch aktualisiert werden. Außerdem werden praktische Übungen zur Anwendung dieser Werkzeuge beschrieben, z. B. das Entwerfen eines Kugelgelenkarms und eines Schlitzschraubendrehers. Darüber hinaus wird betont, wie wichtig es ist, die Skizzenanforderungen und die Funktionalität abgeleiteter Skizzen zur Verbesserung der Designeffizienz zu verstehen.",
                // Chinese
                "中国人": "本章介绍了通过围绕中心线旋转草图轮廓来创建旋转特征的过程，强调了对单个连续闭合轮廓的需求。它解释了派生草图的概念，派生草图是原始草图的从属副本，会随着父草图的更改而自动更新，并概述了应用这些工具的实践练习，例如设计球头臂和平头螺丝刀。此外，它还强调了了解草图要求和派生草图的功能对于提高设计效率的重要性。",
                // Russian
                "Русский": "В этой главе рассматривается процесс создания вращающихся элементов путем вращения профилей эскиза вокруг центральной линии, подчеркивая необходимость единого непрерывного замкнутого контура. В ней объясняется концепция производных эскизов, которые являются зависимыми копиями исходного эскиза, которые автоматически обновляются при изменении родительского эскиза, и излагаются практические упражнения по применению этих инструментов, такие как проектирование шарового шарнира и плоской отвертки. Кроме того, в ней подчеркивается важность понимания требований к эскизу и функциональности производных эскизов для повышения эффективности проектирования.",
                // French
                "Français": "Ce chapitre décrit le processus de création de fonctions de révolution en faisant pivoter des profils d'esquisse autour d'une ligne centrale, en insistant sur la nécessité d'un contour unique et fermé continu. Il explique le concept d'esquisses dérivées, qui sont des copies dépendantes de l'esquisse d'origine qui se mettent automatiquement à jour avec les modifications apportées à l'esquisse parente, et décrit des exercices pratiques pour appliquer ces outils, tels que la conception d'un bras à rotule et d'un tournevis à tête plate. En outre, il souligne l'importance de comprendre les exigences des esquisses et la fonctionnalité des esquisses dérivées pour améliorer l'efficacité de la conception.",
                // Japanese
                "日本語": "この章では、スケッチ プロファイルを中心線を中心に回転させて回転フィーチャを作成するプロセスについて説明します。ここでは、単一の連続した閉じた輪郭線の必要性を強調します。派生スケッチの概念について説明します。派生スケッチは、元のスケッチの従属コピーであり、親スケッチの変更に応じて自動的に更新されます。また、ボール ジョイント アームやマイナス ドライバーの設計など、これらのツールを適用するための実践的な演習の概要を示します。さらに、設計効率を高めるために、スケッチの要件と派生スケッチの機能を理解することの重要性についても説明します。",
                // Korean
                "한국인": "이 장에서는 중심선을 중심으로 스케치 프로파일을 회전하여 회전 피처를 만드는 프로세스를 다루며, 단일 연속 폐쇄 윤곽의 필요성을 강조합니다. 부모 스케치의 변경 사항에 따라 자동으로 업데이트되는 원본 스케치의 종속 사본인 파생 스케치의 개념을 설명하고, 볼 조인트 암과 플랫 헤드 스크루드라이버를 설계하는 것과 같이 이러한 도구를 적용하기 위한 실제 연습을 설명합니다. 또한 설계 효율성을 향상시키는 데 있어 스케치 요구 사항과 파생 스케치의 기능을 이해하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo cubre el proceso de creación de características de revolución mediante la rotación de perfiles de bocetos alrededor de una línea central, enfatizando la necesidad de un único contorno cerrado continuo. Explica el concepto de bocetos derivados, que son copias dependientes del boceto original que se actualizan automáticamente con los cambios en el boceto principal, y describe ejercicios prácticos para aplicar estas herramientas, como el diseño de un brazo con rótula y un destornillador de cabeza plana. Además, destaca la importancia de comprender los requisitos de los bocetos y la funcionalidad de los bocetos derivados para mejorar la eficiencia del diseño.",
                // Hindi
                "हिंदी": "यह अध्याय एक केंद्र रेखा के चारों ओर स्केच प्रोफाइल को घुमाकर घुमावदार विशेषताएं बनाने की प्रक्रिया को कवर करता है, जिसमें एकल निरंतर बंद समोच्च की आवश्यकता पर जोर दिया गया है। यह व्युत्पन्न रेखाचित्रों की अवधारणा को समझाता है, जो मूल रेखाचित्र की आश्रित प्रतियाँ हैं जो मूल रेखाचित्र में परिवर्तनों के साथ स्वचालित रूप से अपडेट होती हैं, और इन उपकरणों को लागू करने के लिए व्यावहारिक अभ्यासों की रूपरेखा तैयार करती हैं, जैसे कि बॉल जॉइंट आर्म और फ्लैट हेड स्क्रूड्राइवर को डिज़ाइन करना। इसके अतिरिक्त, यह डिज़ाइन दक्षता को बढ़ाने में स्केच आवश्यकताओं और व्युत्पन्न रेखाचित्रों की कार्यक्षमता को समझने के महत्व पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo aborda o processo de criação de características de revolução através da rotação de perfis de esboço em torno de uma linha central, enfatizando a necessidade de um único contorno fechado e contínuo. Explica o conceito de esboços derivados, que são cópias dependentes do esboço original que são automaticamente atualizados com alterações no esboço principal, e descreve exercícios práticos para aplicar estas ferramentas, como o design de um braço de junta esférica e uma chave de fendas. Além disso, destaca a importância de compreender os requisitos do esboço e a funcionalidade dos esboços derivados para melhorar a eficiência do projeto.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি একটি কেন্দ্ররেখার চারপাশে স্কেচ প্রোফাইলগুলি ঘোরানোর মাধ্যমে ঘূর্ণায়মান বৈশিষ্ট্যগুলি তৈরি করার প্রক্রিয়াটি কভার করে, একটি একক অবিচ্ছিন্ন বন্ধ কনট্যুরের প্রয়োজনীয়তার উপর জোর দেয়। এটি উদ্ভূত স্কেচের ধারণা ব্যাখ্যা করে, যা মূল স্কেচের নির্ভরশীল অনুলিপি যা স্বয়ংক্রিয়ভাবে প্যারেন্ট স্কেচে পরিবর্তনের সাথে আপডেট হয় এবং এই সরঞ্জামগুলি প্রয়োগ করার জন্য ব্যবহারিক অনুশীলনের রূপরেখা দেয়, যেমন একটি বল জয়েন্ট আর্ম এবং একটি ফ্ল্যাট হেড স্ক্রু ড্রাইভার ডিজাইন করা। উপরন্তু, এটি স্কেচের প্রয়োজনীয়তা বোঝার গুরুত্ব এবং ডিজাইনের দক্ষতা বৃদ্ধিতে উদ্ভূত স্কেচের কার্যকারিতা তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل عملية إنشاء ميزات دوارة من خلال تدوير ملفات تعريف الرسم التخطيطي حول خط الوسط، مع التأكيد على الحاجة إلى محيط مغلق مستمر واحد. ويشرح مفهوم الرسومات التخطيطية المشتقة، وهي نسخ تابعة للرسم التخطيطي الأصلي يتم تحديثها تلقائيًا بالتغييرات التي تطرأ على الرسم التخطيطي الأصلي، ويوضح التمارين العملية لتطبيق هذه الأدوات، مثل تصميم ذراع مفصل كروي ومفك براغي مسطح الرأس. بالإضافة إلى ذلك، يسلط الضوء على أهمية فهم متطلبات الرسم التخطيطي ووظائف الرسومات التخطيطية المشتقة في تعزيز كفاءة التصميم.",
                // Persian
                "فارسی": "این فصل فرآیند ایجاد ویژگی‌های چرخشی را با چرخش پروفیل‌های طرح حول یک خط مرکزی پوشش می‌دهد و بر نیاز به یک کانتور بسته پیوسته تأکید می‌کند. مفهوم طرح‌های مشتق شده را توضیح می‌دهد، که کپی‌های وابسته از طرح اصلی هستند که به طور خودکار با تغییرات در طرح اصلی به‌روزرسانی می‌شوند، و تمرین‌های عملی برای استفاده از این ابزارها، مانند طراحی یک بازوی مفصل توپی و یک پیچ گوشتی سر صاف را تشریح می‌کند. علاوه بر این، اهمیت درک الزامات طرح و عملکرد طرح های مشتق شده در افزایش کارایی طراحی را برجسته می کند.",
            },
        },
        // 7
        {
            "ChapterName": "Rib & Shell Features",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on Rib & Shell Features in SOLIDWORKS 2020 explains how to create and manipulate rib and shell features to enhance part design. A rib is an extruded feature that adds material between contours, allowing for draft angles, while the shell feature hollows out a solid model, leaving selected faces open and supporting multiple wall thicknesses. The chapter emphasizes the importance of applying fillets before shelling and provides guidance on using mirror features for symmetry in designs.",
                // German
                "Deutsch": "Das Kapitel zu Rippen- und Schalenfunktionen in SOLIDWORKS 2020 erläutert, wie Sie Rippen- und Schalenfunktionen erstellen und bearbeiten, um das Teiledesign zu verbessern. Eine Rippe ist eine extrudierte Funktion, die Material zwischen Konturen hinzufügt und so Entformungsschrägen ermöglicht, während die Schalenfunktion ein Volumenmodell aushöhlt, ausgewählte Flächen offen lässt und mehrere Wandstärken unterstützt. Das Kapitel betont die Bedeutung des Anwendens von Rundungen vor dem Schalen und bietet Anleitungen zur Verwendung von Spiegelfunktionen für symmetrische Designs.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 中的“筋和壳特征”一章介绍了如何创建和操作筋和壳特征以增强零件设计。筋是一种挤压特征，可在轮廓之间添加材料，从而允许拔模角度，而壳特征会挖空实体模型，使选定的面保持开放并支持多种壁厚。本章强调了在剥壳前应用圆角的重要性，并提供了在设计中使用镜像特征实现对称性的指导。",
                // Russian
                "Русский": "Глава о ребрах и оболочках в SOLIDWORKS 2020 объясняет, как создавать и манипулировать ребрами и оболочками для улучшения конструкции детали. Ребро — это выдавленный элемент, который добавляет материал между контурами, допуская углы уклона, в то время как элемент оболочки выдалбливает твердотельную модель, оставляя выбранные грани открытыми и поддерживая несколько толщин стенок. В главе подчеркивается важность применения скруглений перед оболочкой и даются рекомендации по использованию зеркальных элементов для симметрии в конструкциях.",
                // French
                "Français": "Le chapitre sur les fonctions de nervure et de coque dans SOLIDWORKS 2020 explique comment créer et manipuler des fonctions de nervure et de coque pour améliorer la conception des pièces. Une nervure est une fonction extrudée qui ajoute de la matière entre les contours, ce qui permet des angles de dépouille, tandis que la fonction de coque creuse un modèle solide, laissant les faces sélectionnées ouvertes et prenant en charge plusieurs épaisseurs de paroi. Le chapitre souligne l'importance d'appliquer des congés avant le découpage en coque et fournit des conseils sur l'utilisation des fonctions de miroir pour la symétrie dans les conceptions.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 のリブとシェル フィーチャーに関する章では、リブとシェル フィーチャーを作成および操作して部品設計を強化する方法について説明します。リブは、輪郭の間に材料を追加してドラフト角度を可能にする押し出しフィーチャーです。一方、シェル フィーチャーは、ソリッド モデルをくり抜いて、選択した面を開いたままにして、複数の壁厚をサポートします。この章では、シェル化の前にフィレットを適用することの重要性を強調し、設計で対称性を実現するためにミラー フィーチャーを使用する方法についてのガイダンスを提供します。",
                // Korean
                "한국인": "SOLIDWORKS 2020의 리브 및 셸 피처에 대한 챕터에서는 리브 및 셸 피처를 생성하고 조작하여 파트 설계를 개선하는 방법을 설명합니다. 리브는 윤곽 사이에 재료를 추가하여 드래프트 각도를 허용하는 압출 피처인 반면, 셸 피처는 솔리드 모델을 비워 선택한 면을 열어두고 여러 벽 두께를 지원합니다. 이 챕터에서는 셸링 전에 필렛을 적용하는 것의 중요성을 강조하고 설계에서 대칭을 위해 미러 피처를 사용하는 방법에 대한 지침을 제공합니다.",
                // Spanish
                "Español": "El capítulo sobre las características de costilla y vaciado en SOLIDWORKS 2020 explica cómo crear y manipular características de costilla y vaciado para mejorar el diseño de la pieza. Una costilla es una característica extruida que agrega material entre los contornos, lo que permite ángulos de desmoldeo, mientras que la característica de vaciado ahueca un modelo sólido, dejando abiertas las caras seleccionadas y admitiendo múltiples espesores de pared. El capítulo enfatiza la importancia de aplicar redondeos antes del vaciado y proporciona orientación sobre el uso de características de espejo para lograr simetría en los diseños.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 में रिब और शेल फ़ीचर पर अध्याय बताता है कि पार्ट डिज़ाइन को बेहतर बनाने के लिए रिब और शेल फ़ीचर कैसे बनाएँ और उनमें हेरफेर करें। रिब एक एक्सट्रूडेड फ़ीचर है जो कंटूर के बीच मटेरियल जोड़ता है, जिससे ड्राफ्ट एंगल की अनुमति मिलती है, जबकि शेल फ़ीचर एक सॉलिड मॉडल को खोखला कर देता है, जिससे चयनित चेहरे खुले रह जाते हैं और कई दीवार मोटाई का समर्थन करते हैं। अध्याय शेलिंग से पहले फ़िलेट लगाने के महत्व पर ज़ोर देता है और डिज़ाइन में समरूपता के लिए मिरर फ़ीचर का उपयोग करने पर मार्गदर्शन प्रदान करता है।",
                // Portuguese
                "Português": "O capítulo sobre as características de nervura e casca no SOLIDWORKS 2020 explica como criar e manipular as características de nervura e casca para melhorar o design da peça. Uma nervura é uma característica de extrusão que adiciona material entre contornos, permitindo ângulos de inclinação, enquanto a característica de casca escava um modelo sólido, deixando as faces selecionadas abertas e suportando múltiplas espessuras de parede. O capítulo enfatiza a importância da aplicação de filetes antes do descascamento e fornece orientações sobre a utilização de recursos de espelho para simetria em projetos.",
                // Bengali
                "বাংলা": "সলিডওয়ার্কস 2020-এর রিব এবং শেল বৈশিষ্ট্যগুলির অধ্যায়টি ব্যাখ্যা করে যে কীভাবে অংশের নকশা উন্নত করতে পাঁজর এবং শেল বৈশিষ্ট্যগুলি তৈরি এবং পরিচালনা করা যায়। একটি পাঁজর হল একটি বহির্মুখী বৈশিষ্ট্য যা কনট্যুরগুলির মধ্যে উপাদান যোগ করে, খসড়া কোণগুলির জন্য অনুমতি দেয়, যখন শেল বৈশিষ্ট্যটি একটি কঠিন মডেলকে ফাঁপা করে, নির্বাচিত মুখগুলিকে খোলা রেখে এবং একাধিক প্রাচীর বেধকে সমর্থন করে। অধ্যায়টি শেলিংয়ের আগে ফিললেট প্রয়োগের গুরুত্বের উপর জোর দেয় এবং ডিজাইনে প্রতিসাম্যের জন্য আয়নার বৈশিষ্ট্যগুলি ব্যবহার করার বিষয়ে নির্দেশিকা প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يوضح الفصل الخاص بخصائص الضلع والقشرة في SOLIDWORKS 2020 كيفية إنشاء ومعالجة خصائص الضلع والقشرة لتحسين تصميم الأجزاء. الضلع هو خاصية مبثوقة تضيف مادة بين الخطوط، مما يسمح بزوايا المسودة، بينما تعمل خاصية القشرة على تجويف نموذج صلب، مما يترك وجوهًا محددة مفتوحة ويدعم سماكات جدران متعددة. يؤكد الفصل على أهمية تطبيق الشرائح قبل التغليف ويقدم إرشادات حول استخدام خصائص المرآة للتناظر في التصميمات.",
                // Persian
                "فارسی": "فصل ویژگی‌های ریب و پوسته در SOLIDWORKS 2020 نحوه ایجاد و دستکاری ویژگی‌های دنده و پوسته برای بهبود طراحی قطعه را توضیح می‌دهد. دنده یک ویژگی اکسترود شده است که موادی را بین خطوط اضافه می کند و اجازه می دهد تا زوایای کشش ایجاد شود، در حالی که ویژگی پوسته یک مدل جامد را توخالی می کند و چهره های انتخاب شده را باز می کند و ضخامت دیوارهای متعدد را پشتیبانی می کند. این فصل بر اهمیت استفاده از فیله ها قبل از پوسته ریزی تاکید می کند و راهنمایی در مورد استفاده از ویژگی های آینه برای تقارن در طرح ها ارائه می دهد.",
            },
        },
        // 8
        {
            "ChapterName": "Patterns",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on SOLIDWORKS 2020 Basic Tools - Patterns covers the creation and manipulation of various pattern types, including Linear, Circular, and Curve Driven Patterns. It details the necessary references for each pattern type, such as direction, spacing, and features, while emphasizing the automatic updates of instances when original features are modified. Additionally, the chapter provides guidance on sketching techniques, dimensioning, and using tools like the Trim tool to refine designs, ultimately enhancing the user's ability to efficiently create complex geometries in SOLIDWORKS.",
                // German
                "Deutsch": "Das Kapitel „Grundlegende Werkzeuge – Muster“ von SOLIDWORKS 2020 behandelt die Erstellung und Bearbeitung verschiedener Mustertypen, darunter lineare, kreisförmige und kurvengesteuerte Muster. Es beschreibt detailliert die erforderlichen Referenzen für jeden Mustertyp, wie z. B. Richtung, Abstand und Funktionen, und betont gleichzeitig die automatischen Aktualisierungen von Instanzen, wenn ursprüngliche Funktionen geändert werden. Darüber hinaus enthält das Kapitel Anleitungen zu Skizziertechniken, Bemaßungen und zur Verwendung von Werkzeugen wie dem Trimmwerkzeug zum Verfeinern von Designs, wodurch letztendlich die Fähigkeit des Benutzers verbessert wird, komplexe Geometrien in SOLIDWORKS effizient zu erstellen.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 基本工具 - 图案一章涵盖了各种图案类型的创建和操作，包括线性、圆形和曲线驱动图案。它详细介绍了每种图案类型的必要参考，例如方向、间距和特征，同时强调了在修改原始特征时实例的自动更新。此外，本章还提供了有关草图绘制技术、尺寸标注以及使用“修剪”工具等工具来优化设计的指导，最终增强了用户在 SOLIDWORKS 中高效创建复杂几何图形的能力。",
                // Russian
                "Русский": "Глава SOLIDWORKS 2020 Basic Tools - Patterns охватывает создание и обработку различных типов шаблонов, включая линейные, круговые и криволинейные шаблоны. В ней подробно описываются необходимые ссылки для каждого типа шаблона, такие как направление, интервал и элементы, при этом особое внимание уделяется автоматическим обновлениям экземпляров при изменении исходных элементов. Кроме того, в главе даются рекомендации по методам создания эскизов, нанесению размеров и использованию таких инструментов, как инструмент Trim, для уточнения проектов, что в конечном итоге повышает способность пользователя эффективно создавать сложные геометрии в SOLIDWORKS.",
                // French
                "Français": "Le chapitre sur les outils de base SOLIDWORKS 2020 - Motifs couvre la création et la manipulation de divers types de motifs, notamment les motifs linéaires, circulaires et pilotés par courbe. Il détaille les références nécessaires pour chaque type de motif, telles que la direction, l'espacement et les fonctions, tout en mettant l'accent sur les mises à jour automatiques des instances lorsque les fonctions d'origine sont modifiées. En outre, le chapitre fournit des conseils sur les techniques d'esquisse, le dimensionnement et l'utilisation d'outils tels que l'outil Ajuster pour affiner les conceptions, améliorant ainsi la capacité de l'utilisateur à créer efficacement des géométries complexes dans SOLIDWORKS.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 の基本ツール - パターンの章では、直線、円形、曲線駆動パターンなど、さまざまなパターン タイプの作成と操作について説明します。方向、間隔、フィーチャなど、各パターン タイプに必要な参照を詳しく説明するとともに、元のフィーチャが変更された場合のインスタンスの自動更新を強調します。さらに、この章では、スケッチ テクニック、寸法記入、トリム ツールなどのツールを使用してデザインを改良する方法について説明し、最終的にユーザーが SOLIDWORKS で複雑なジオメトリを効率的に作成する能力を高めます。",
                // Korean
                "한국인": "SOLIDWORKS 2020 기본 도구 - 패턴에 대한 장은 선형, 원형 ​​및 곡선 구동 패턴을 포함한 다양한 패턴 유형의 생성 및 조작을 다룹니다. 방향, 간격 및 피처와 같은 각 패턴 유형에 필요한 참조를 자세히 설명하는 동시에 원래 피처가 수정될 때 인스턴스의 자동 업데이트를 강조합니다. 또한 이 장에서는 스케치 기술, 치수 지정 및 트림 도구와 같은 도구를 사용하여 설계를 개선하는 방법에 대한 지침을 제공하여 궁극적으로 사용자가 SOLIDWORKS에서 복잡한 지오메트리를 효율적으로 만드는 능력을 향상시킵니다.",
                // Spanish
                "Español": "El capítulo sobre Herramientas básicas de SOLIDWORKS 2020: Patrones cubre la creación y manipulación de varios tipos de patrones, incluidos los patrones lineales, circulares y controlados por curvas. Detalla las referencias necesarias para cada tipo de patrón, como la dirección, el espaciado y las características, al tiempo que enfatiza las actualizaciones automáticas de instancias cuando se modifican las características originales. Además, el capítulo proporciona orientación sobre técnicas de boceto, acotación y uso de herramientas como la herramienta Recortar para refinar diseños, lo que en última instancia mejora la capacidad del usuario para crear geometrías complejas de manera eficiente en SOLIDWORKS.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 बेसिक टूल्स - पैटर्न पर अध्याय रैखिक, वृत्ताकार और वक्र संचालित पैटर्न सहित विभिन्न पैटर्न प्रकारों के निर्माण और हेरफेर को कवर करता है। यह प्रत्येक पैटर्न प्रकार के लिए आवश्यक संदर्भों का विवरण देता है, जैसे दिशा, रिक्ति और विशेषताएँ, जबकि मूल विशेषताओं को संशोधित किए जाने पर उदाहरणों के स्वचालित अपडेट पर जोर देता है। इसके अतिरिक्त, अध्याय स्केचिंग तकनीकों, आयाम निर्धारण और डिज़ाइन को परिष्कृत करने के लिए ट्रिम टूल जैसे उपकरणों का उपयोग करने पर मार्गदर्शन प्रदान करता है, जो अंततः SOLIDWORKS में जटिल ज्यामिति को कुशलतापूर्वक बनाने की उपयोगकर्ता की क्षमता को बढ़ाता है।",
                // Portuguese
                "Português": "O capítulo Ferramentas básicas do SOLIDWORKS 2020 - Padrões aborda a criação e manipulação de vários tipos de padrões, incluindo padrões lineares, circulares e controlados por curvas. Detalha as referências necessárias para cada tipo de padrão, como a direção, o espaçamento e as características, ao mesmo tempo que enfatiza as atualizações automáticas das instâncias quando as características originais são modificadas. Além disso, o capítulo fornece orientações sobre técnicas de esboço, dimensionamento e utilização de ferramentas como a ferramenta Trim para refinar projetos, melhorando, em última análise, a capacidade do utilizador de criar geometrias complexas de forma eficiente no SOLIDWORKS.",
                // Bengali
                "বাংলা": "SOLIDWORKS 2020 বেসিক টুলস - প্যাটার্নের অধ্যায় লিনিয়ার, সার্কুলার এবং কার্ভ চালিত প্যাটার্ন সহ বিভিন্ন ধরনের প্যাটার্ন তৈরি এবং ম্যানিপুলেশন কভার করে। এটি প্রতিটি প্যাটার্ন প্রকারের জন্য প্রয়োজনীয় রেফারেন্সের বিশদ বিবরণ দেয়, যেমন দিকনির্দেশ, ব্যবধান এবং বৈশিষ্ট্য, যখন মূল বৈশিষ্ট্যগুলি পরিবর্তন করা হয় তখন দৃষ্টান্তগুলির স্বয়ংক্রিয় আপডেটের উপর জোর দেয়। অতিরিক্তভাবে, অধ্যায়টি স্কেচিং কৌশল, মাত্রা নির্ধারণ এবং ডিজাইনগুলিকে পরিমার্জিত করার জন্য ট্রিম টুলের মতো সরঞ্জামগুলি ব্যবহার করার বিষয়ে নির্দেশিকা প্রদান করে, শেষ পর্যন্ত সলিডওয়ার্কসে জটিল জ্যামিতি তৈরি করার জন্য ব্যবহারকারীর দক্ষতা বৃদ্ধি করে৷",
                // Arabic
                "عَرَبِيّ": "يغطي الفصل الخاص بأدوات SOLIDWORKS 2020 الأساسية - الأنماط إنشاء أنواع مختلفة من الأنماط والتلاعب بها، بما في ذلك الأنماط الخطية والدائرية والمنحنية. ويوضح بالتفصيل المراجع الضرورية لكل نوع من الأنماط، مثل الاتجاه والتباعد والميزات، مع التأكيد على التحديثات التلقائية للحالات عند تعديل الميزات الأصلية. بالإضافة إلى ذلك، يوفر الفصل إرشادات حول تقنيات الرسم، وتحديد الأبعاد، واستخدام أدوات مثل أداة Trim لتحسين التصميمات، مما يعزز في النهاية قدرة المستخدم على إنشاء أشكال هندسية معقدة بكفاءة في SOLIDWORKS.",
                // Persian
                "فارسی": "فصل SOLIDWORKS 2020 Basic Tools - Patterns ایجاد و دستکاری انواع الگوهای مختلف از جمله الگوهای خطی، دایره ای و منحنی را پوشش می دهد. ارجاعات لازم برای هر نوع الگو، مانند جهت، فاصله، و ویژگی‌ها را شرح می‌دهد، در حالی که بر به‌روزرسانی خودکار نمونه‌هایی که ویژگی‌های اصلی اصلاح می‌شوند، تأکید می‌کند. علاوه بر این، این فصل راهنمایی هایی در مورد تکنیک های ترسیم، ابعاد و استفاده از ابزارهایی مانند ابزار Trim برای اصلاح طرح ها ارائه می دهد که در نهایت توانایی کاربر را برای ایجاد کارآمد هندسه های پیچیده در SOLIDWORKS افزایش می دهد.",
            },
        },
        // 9
        {
            "ChapterName": "Part Configurations",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on Part Configurations in SOLIDWORKS 2020 focuses on utilizing various commands to effectively manage and create part configurations within the software. It covers essential skills such as sketching on different planes, creating extruded features, applying the Hole Wizard, and using linear patterns, while emphasizing the importance of configurations for developing families of parts and assemblies. Additionally, the chapter includes practical exercises that guide users through creating new configurations, implementing vary-sketch options, and understanding the visual differences between configurations, ultimately preparing them for further applications in engineering drawings.",
                // German
                "Deutsch": "Das Kapitel zu Teilekonfigurationen in SOLIDWORKS 2020 konzentriert sich auf die Verwendung verschiedener Befehle, um Teilekonfigurationen innerhalb der Software effektiv zu verwalten und zu erstellen. Es behandelt grundlegende Fähigkeiten wie das Skizzieren auf verschiedenen Ebenen, das Erstellen extrudierter Features, das Anwenden des Bohrungsassistenten und die Verwendung linearer Muster und betont gleichzeitig die Bedeutung von Konfigurationen für die Entwicklung von Teile- und Baugruppenfamilien. Darüber hinaus enthält das Kapitel praktische Übungen, die den Benutzer durch das Erstellen neuer Konfigurationen, das Implementieren von Optionen zum Variieren von Skizzen und das Verstehen der visuellen Unterschiede zwischen Konfigurationen führen und ihn letztendlich auf weitere Anwendungen in technischen Zeichnungen vorbereiten.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 中的“零件配置”一章重点介绍如何使用各种命令在软件中有效地管理和创建零件配置。它涵盖了基本技能，例如在不同平面上绘制草图、创建拉伸特征、应用异型孔向导和使用线性图案，同时强调了配置对于开发零件和装配体系列的重要性。此外，本章还包括实践练习，指导用户创建新配置、实施变化草图选项以及了解配置之间的视觉差异，最终为它们在工程图中的进一步应用做好准备。",
                // Russian
                "Русский": "Глава о конфигурациях деталей в SOLIDWORKS 2020 фокусируется на использовании различных команд для эффективного управления и создания конфигураций деталей в программном обеспечении. Она охватывает основные навыки, такие как создание эскизов на разных плоскостях, создание вытянутых элементов, применение Hole Wizard и использование линейных шаблонов, подчеркивая при этом важность конфигураций для разработки семейств деталей и сборок. Кроме того, глава включает практические упражнения, которые помогают пользователям создавать новые конфигурации, реализовывать параметры различных эскизов и понимать визуальные различия между конфигурациями, в конечном итоге подготавливая их к дальнейшему применению в инженерных чертежах.",
                // French
                "Français": "Le chapitre sur les configurations de pièces dans SOLIDWORKS 2020 se concentre sur l'utilisation de diverses commandes pour gérer et créer efficacement des configurations de pièces dans le logiciel. Il couvre des compétences essentielles telles que l'esquisse sur différents plans, la création de fonctions extrudées, l'application de l'assistant de perçage et l'utilisation de motifs linéaires, tout en soulignant l'importance des configurations pour le développement de familles de pièces et d'assemblages. En outre, le chapitre comprend des exercices pratiques qui guident les utilisateurs dans la création de nouvelles configurations, la mise en œuvre d'options d'esquisse variable et la compréhension des différences visuelles entre les configurations, les préparant ainsi à d'autres applications dans les dessins techniques.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 の部品構成に関する章では、さまざまなコマンドを利用してソフトウェア内で部品構成を効果的に管理および作成することに焦点を当てています。さまざまな平面でのスケッチ、押し出しフィーチャーの作成、穴ウィザードの適用、直線パターンの使用などの基本的なスキルを取り上げ、部品およびアセンブリのファミリを開発するための構成の重要性を強調しています。さらに、この章には、新しい構成の作成、さまざまなスケッチ オプションの実装、構成間の視覚的な違いの理解など、ユーザーをガイドする実践的な演習が含まれており、最終的にはエンジニアリング図面でのさらなる応用に備えることができます。",
                // Korean
                "한국인": "SOLIDWORKS 2020의 부품 구성에 대한 장은 다양한 명령을 사용하여 소프트웨어 내에서 부품 구성을 효과적으로 관리하고 만드는 데 중점을 둡니다. 다양한 평면에서 스케치, 압출 피처 생성, 홀 마법사 적용, 선형 패턴 사용과 같은 필수 기술을 다루면서 부품 및 어셈블리 패밀리를 개발하는 데 있어 구성의 중요성을 강조합니다. 또한 이 장에는 사용자가 새 구성을 만들고, 다양한 스케치 옵션을 구현하고, 구성 간의 시각적 차이점을 이해하도록 안내하는 실습 연습이 포함되어 궁극적으로 엔지니어링 도면에서 추가 응용 프로그램을 준비합니다.",
                // Spanish
                "Español": "El capítulo sobre configuraciones de piezas en SOLIDWORKS 2020 se centra en el uso de varios comandos para gestionar y crear configuraciones de piezas de forma eficaz dentro del software. Abarca habilidades esenciales como la creación de bocetos en diferentes planos, la creación de características extruidas, la aplicación del Asistente para agujeros y el uso de patrones lineales, al tiempo que destaca la importancia de las configuraciones para desarrollar familias de piezas y ensamblajes. Además, el capítulo incluye ejercicios prácticos que guían a los usuarios en la creación de nuevas configuraciones, la implementación de opciones de variación de bocetos y la comprensión de las diferencias visuales entre configuraciones, lo que en última instancia los prepara para futuras aplicaciones en dibujos de ingeniería.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 में पार्ट कॉन्फ़िगरेशन पर अध्याय सॉफ्टवेयर के भीतर पार्ट कॉन्फ़िगरेशन को प्रभावी ढंग से प्रबंधित करने और बनाने के लिए विभिन्न कमांड का उपयोग करने पर केंद्रित है। इसमें विभिन्न विमानों पर स्केचिंग, एक्सट्रूडेड फीचर्स बनाना, होल विज़ार्ड को लागू करना और रैखिक पैटर्न का उपयोग करने जैसे आवश्यक कौशल शामिल हैं, जबकि भागों और असेंबली के परिवारों को विकसित करने के लिए कॉन्फ़िगरेशन के महत्व पर जोर दिया गया है। इसके अतिरिक्त, अध्याय में व्यावहारिक अभ्यास शामिल हैं जो उपयोगकर्ताओं को नए कॉन्फ़िगरेशन बनाने, अलग-अलग स्केच विकल्पों को लागू करने और कॉन्फ़िगरेशन के बीच दृश्य अंतर को समझने के माध्यम से मार्गदर्शन करते हैं, अंततः उन्हें इंजीनियरिंग ड्राइंग में आगे के अनुप्रयोगों के लिए तैयार करते हैं।",
                // Portuguese
                "Português": "O capítulo sobre configurações de peças no SOLIDWORKS 2020 centra-se na utilização de vários comandos para gerir e criar configurações de peças de forma eficiente no software. Abrange competências essenciais, como o esboço em diferentes planos, a criação de recursos de extrusão, a aplicação do Hole Wizard e a utilização de padrões lineares, ao mesmo tempo que enfatiza a importância das configurações para o desenvolvimento de famílias de peças e montagens. Além disso, o capítulo inclui exercícios práticos que orientam os utilizadores na criação de novas configurações, na implementação de opções de esboços variados e na compreensão das diferenças visuais entre as configurações, preparando-os, em última análise, para futuras aplicações em desenhos de engenharia .",
                // Bengali
                "বাংলা": "সলিডওয়ার্কস 2020-এর পার্ট কনফিগারেশনের অধ্যায়টি সফ্টওয়্যারের মধ্যে কার্যকরভাবে পরিচালনা এবং অংশ কনফিগারেশন তৈরি করতে বিভিন্ন কমান্ড ব্যবহার করার উপর দৃষ্টি নিবদ্ধ করে। এটি বিভিন্ন প্লেনে স্কেচ করা, এক্সট্রুড বৈশিষ্ট্য তৈরি করা, হোল উইজার্ড প্রয়োগ করা এবং রৈখিক নিদর্শন ব্যবহার করার মতো প্রয়োজনীয় দক্ষতাগুলিকে কভার করে, যখন অংশ এবং সমাবেশগুলির পরিবারগুলির বিকাশের জন্য কনফিগারেশনের গুরুত্বের উপর জোর দেয়। অতিরিক্তভাবে, অধ্যায়ে ব্যবহারিক অনুশীলনগুলি অন্তর্ভুক্ত রয়েছে যা ব্যবহারকারীদের নতুন কনফিগারেশন তৈরি করার মাধ্যমে, বিভিন্ন স্কেচ বিকল্পগুলি বাস্তবায়নের মাধ্যমে এবং কনফিগারেশনের মধ্যে ভিজ্যুয়াল পার্থক্যগুলি বোঝার মাধ্যমে, শেষ পর্যন্ত প্রকৌশল অঙ্কনে আরও অ্যাপ্লিকেশনের জন্য তাদের প্রস্তুত করে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الخاص بتكوينات الأجزاء في SOLIDWORKS 2020 على استخدام أوامر مختلفة لإدارة وإنشاء تكوينات الأجزاء بشكل فعال داخل البرنامج. ويغطي المهارات الأساسية مثل الرسم على مستويات مختلفة، وإنشاء ميزات بارزة، وتطبيق معالج الثقوب، واستخدام الأنماط الخطية، مع التأكيد على أهمية التكوينات لتطوير عائلات الأجزاء والتجميعات. بالإضافة إلى ذلك، يتضمن الفصل تمارين عملية توجه المستخدمين من خلال إنشاء تكوينات جديدة، وتنفيذ خيارات الرسم المتنوع، وفهم الاختلافات المرئية بين التكوينات، وإعدادهم في النهاية لمزيد من التطبيقات في الرسومات الهندسية.",
                // Persian
                "فارسی": "فصل پیکربندی قطعات در SOLIDWORKS 2020 بر استفاده از دستورات مختلف برای مدیریت موثر و ایجاد پیکربندی قطعات در نرم افزار تمرکز دارد. این مهارت‌های ضروری مانند طراحی روی سطوح مختلف، ایجاد ویژگی‌های اکسترود شده، اعمال جادوگر سوراخ و استفاده از الگوهای خطی را پوشش می‌دهد، در حالی که بر اهمیت پیکربندی‌ها برای توسعه خانواده‌های قطعات و مجموعه‌ها تاکید می‌کند. علاوه بر این، این فصل شامل تمرین‌های عملی است که کاربران را از طریق ایجاد پیکربندی‌های جدید، پیاده‌سازی گزینه‌های طرح‌های مختلف، و درک تفاوت‌های بصری بین پیکربندی‌ها راهنمایی می‌کند و در نهایت آنها را برای کاربردهای بیشتر در نقشه‌های مهندسی آماده می‌کند.",
            },
        },
        // 10
        {
            "ChapterName": "Modeling Threads",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on SOLIDWORKS 2020 Basic Tools for Modeling Threads provides a comprehensive guide on creating both internal and external threads through various techniques, including sketching, revolving, and using sweep features. It emphasizes the importance of fully defining sketches with dimensions and relations, as well as utilizing the new thread feature for customizable parameters. Additionally, the chapter covers essential operations such as extruded cuts, mirroring bodies, and saving completed parts, ensuring users can effectively model threaded components in their designs.",
                // German
                "Deutsch": "Das Kapitel „Grundlegende Werkzeuge für die Gewindemodellierung in SOLIDWORKS 2020“ bietet eine umfassende Anleitung zum Erstellen von Innen- und Außengewinden mithilfe verschiedener Techniken, darunter Skizzieren, Drehen und Verwenden von Sweep-Funktionen. Es betont die Bedeutung einer vollständigen Definition von Skizzen mit Bemaßungen und Beziehungen sowie der Verwendung der neuen Gewindefunktion für anpassbare Parameter. Darüber hinaus behandelt das Kapitel wichtige Vorgänge wie extrudierte Schnitte, Spiegeln von Körpern und Speichern fertiger Teile, um sicherzustellen, dass Benutzer Gewindekomponenten in ihren Konstruktionen effektiv modellieren können.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 螺纹建模基本工具一章提供了全面的指南，介绍如何通过各种技术（包括绘制草图、旋转和使用扫掠特征）创建内螺纹和外螺纹。它强调了使用尺寸和关系完整定义草图以及利用新螺纹特征自定义参数的重要性。此外，本章还介绍了基本操作，例如挤压切割、镜像实体和保存完成的零件，确保用户可以在其设计中有效地对螺纹组件进行建模。",
                // Russian
                "Русский": "Глава о базовых инструментах SOLIDWORKS 2020 для моделирования резьбы содержит всеобъемлющее руководство по созданию как внутренней, так и внешней резьбы с помощью различных методов, включая эскизирование, вращение и использование элементов протяжки. В ней подчеркивается важность полного определения эскизов с размерами и отношениями, а также использования новой функции резьбы для настраиваемых параметров. Кроме того, в главе рассматриваются основные операции, такие как выдавленные разрезы, зеркальное отображение тел и сохранение готовых деталей, что позволяет пользователям эффективно моделировать резьбовые компоненты в своих проектах.",
                // French
                "Français": "Le chapitre sur les outils de base de SOLIDWORKS 2020 pour la modélisation des filetages fournit un guide complet sur la création de filetages internes et externes à l'aide de diverses techniques, notamment l'esquisse, la révolution et l'utilisation de fonctions de balayage. Il souligne l'importance de définir entièrement les esquisses avec des cotes et des relations, ainsi que d'utiliser la nouvelle fonction de filetage pour les paramètres personnalisables. En outre, le chapitre couvre les opérations essentielles telles que les coupes extrudées, la mise en miroir des corps et l'enregistrement des pièces terminées, garantissant ainsi aux utilisateurs la possibilité de modéliser efficacement les composants filetés dans leurs conceptions.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 のねじモデリングの基本ツールに関する章では、スケッチ、回転、スイープ フィーチャーの使用など、さまざまな手法で内ねじと外ねじの両方を作成するための包括的なガイドを提供します。寸法と拘束関係を使用してスケッチを完全に定義することの重要性と、カスタマイズ可能なパラメーターに新しいねじフィーチャーを使用することの重要性を強調しています。さらに、この章では、押し出しカット、ボディのミラーリング、完成したパーツの保存などの重要な操作について説明し、ユーザーが設計でねじ付きコンポーネントを効果的にモデリングできるようにします。",
                // Korean
                "한국인": "SOLIDWORKS 2020 기본 나사산 모델링 도구에 대한 장은 스케치, 회전 및 스윕 피처 사용을 포함한 다양한 기술을 통해 내부 및 외부 나사산을 만드는 방법에 대한 포괄적인 가이드를 제공합니다. 치수 및 관계로 스케치를 완전히 정의하고 사용자 정의 가능한 매개변수에 대한 새로운 나사산 기능을 활용하는 것의 중요성을 강조합니다. 또한 이 장에서는 돌출 컷, 바디 미러링 및 완성된 부품 저장과 같은 필수 작업을 다루어 사용자가 설계에서 나사산 구성 요소를 효과적으로 모델링할 수 있도록 합니다.",
                // Spanish
                "Español": "El capítulo sobre las herramientas básicas de SOLIDWORKS 2020 para modelar roscas proporciona una guía completa sobre la creación de roscas internas y externas mediante diversas técnicas, que incluyen bocetos, giros y el uso de funciones de barrido. Destaca la importancia de definir completamente los bocetos con dimensiones y relaciones, así como de utilizar la nueva función de rosca para parámetros personalizables. Además, el capítulo cubre operaciones esenciales como cortes extruidos, cuerpos reflejados y guardado de piezas completadas, lo que garantiza que los usuarios puedan modelar de manera eficaz los componentes roscados en sus diseños.",
                // Hindi
                "हिंदी": "मॉडलिंग थ्रेड्स के लिए SOLIDWORKS 2020 बेसिक टूल्स पर अध्याय स्केचिंग, रिवॉल्विंग और स्वीप सुविधाओं का उपयोग करने सहित विभिन्न तकनीकों के माध्यम से आंतरिक और बाहरी दोनों थ्रेड बनाने पर एक व्यापक मार्गदर्शिका प्रदान करता है। यह आयामों और संबंधों के साथ स्केच को पूरी तरह से परिभाषित करने के महत्व पर जोर देता है, साथ ही अनुकूलन योग्य मापदंडों के लिए नई थ्रेड सुविधा का उपयोग करता है। इसके अतिरिक्त, अध्याय में एक्सट्रूडेड कट्स, मिररिंग बॉडीज और पूर्ण भागों को सहेजने जैसे आवश्यक संचालन शामिल हैं, यह सुनिश्चित करते हुए कि उपयोगकर्ता अपने डिजाइनों में थ्रेडेड घटकों को प्रभावी ढंग से मॉडल कर सकते हैं।",
                // Portuguese
                "Português": "O capítulo Ferramentas básicas para a modelação de roscas do SOLIDWORKS 2020 fornece um guia completo sobre como criar roscas interiores e exteriores através de diversas técnicas, incluindo esboço, revolução e utilização de recursos de varrimento. Realça a importância de definir completamente os esboços com dimensões e relações, bem como utilizar a nova funcionalidade de rosca para parâmetros personalizáveis. Além disso, o capítulo aborda operações essenciais, como cortes extrudidos, espelhamento de corpos e salvamento de peças concluídas, garantindo que os utilizadores podem modelar eficazmente os componentes roscados nos seus projetos.",
                // Bengali
                "বাংলা": "মডেলিং থ্রেডের জন্য SOLIDWORKS 2020 বেসিক টুলস-এর অধ্যায়টি স্কেচিং, ঘূর্ণায়মান এবং সুইপ বৈশিষ্ট্যগুলি ব্যবহার সহ বিভিন্ন কৌশলের মাধ্যমে অভ্যন্তরীণ এবং বাহ্যিক উভয় থ্রেড তৈরি করার বিষয়ে একটি বিস্তৃত নির্দেশিকা প্রদান করে। এটি মাত্রা এবং সম্পর্কের সাথে স্কেচগুলিকে সম্পূর্ণরূপে সংজ্ঞায়িত করার পাশাপাশি কাস্টমাইজযোগ্য প্যারামিটারের জন্য নতুন থ্রেড বৈশিষ্ট্যটি ব্যবহার করার গুরুত্বের উপর জোর দেয়। উপরন্তু, অধ্যায়টি প্রয়োজনীয় ক্রিয়াকলাপগুলিকে কভার করে যেমন এক্সট্রুড কাট, মিররিং বডি, এবং সম্পূর্ণ অংশগুলি সংরক্ষণ করে, ব্যবহারকারীরা তাদের ডিজাইনে কার্যকরভাবে থ্রেডেড উপাদানগুলিকে মডেল করতে পারে তা নিশ্চিত করে।",
                // Arabic
                "عَرَبِيّ": "يوفر الفصل الخاص بأدوات SOLIDWORKS 2020 الأساسية لنمذجة الخيوط دليلاً شاملاً حول إنشاء خيوط داخلية وخارجية من خلال تقنيات مختلفة، بما في ذلك الرسم والتدوير واستخدام ميزات المسح. ويؤكد على أهمية تحديد الرسومات بالكامل بالأبعاد والعلاقات، فضلاً عن الاستفادة من ميزة الخيوط الجديدة للمعلمات القابلة للتخصيص. بالإضافة إلى ذلك، يغطي الفصل العمليات الأساسية مثل القطع المبثوقة، وعكس الأجسام، وحفظ الأجزاء المكتملة، مما يضمن للمستخدمين إمكانية نمذجة المكونات الملولبة بشكل فعال في تصميماتهم.",
                // Persian
                "فارسی": "فصل SOLIDWORKS 2020 Basic Tools for Modeling Threads راهنمای جامعی در مورد ایجاد رشته‌های داخلی و خارجی از طریق تکنیک‌های مختلف از جمله ترسیم، چرخش و استفاده از ویژگی‌های جارویی ارائه می‌کند. این بر اهمیت تعریف کامل طرح ها با ابعاد و روابط، و همچنین استفاده از ویژگی نخ جدید برای پارامترهای قابل تنظیم تاکید می کند. علاوه بر این، این فصل عملیات‌های ضروری مانند برش‌های اکسترود شده، بدنه‌های آینه‌ای و ذخیره قطعات تکمیل‌شده را پوشش می‌دهد و اطمینان می‌دهد که کاربران می‌توانند به طور موثر اجزای رزوه‌دار را در طرح‌های خود مدل‌سازی کنند.",
            },
        },
        // 11
        {
            "ChapterName": "Bottom Up Assembly",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on Bottom Up Assembly in SOLIDWORKS 2020 covers the process of creating and constraining components individually before inserting them into an assembly. It explains the use of standard mates to establish relationships between parts, allowing for movement and rotation by leaving one degree of freedom open. Additionally, it introduces the concept of multi-mates for constraining multiple components simultaneously and emphasizes the importance of understanding assembly methods, mate functionalities, and the organization of components within the assembly environment.",
                // German
                "Deutsch": "Das Kapitel „Bottom-Up-Baugruppe“ in SOLIDWORKS 2020 behandelt den Prozess des Erstellens und Einschränkens einzelner Komponenten, bevor diese in eine Baugruppe eingefügt werden. Es erklärt die Verwendung von Standardverknüpfungen zum Herstellen von Beziehungen zwischen Teilen und ermöglicht Bewegung und Drehung, indem ein Freiheitsgrad offen gelassen wird. Darüber hinaus führt es das Konzept der Mehrfachverknüpfungen zum gleichzeitigen Einschränken mehrerer Komponenten ein und betont, wie wichtig es ist, Baugruppenmethoden, Verknüpfungsfunktionen und die Organisation von Komponenten innerhalb der Baugruppenumgebung zu verstehen.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 中的“自下而上装配”一章介绍了在将零部件插入装配体之前单独创建和约束零部件的过程。它解释了如何使用标准配合来建立零件之间的关系，通过保留一个自由度来实现移动和旋转。此外，它还介绍了用于同时约束多个零部件的多重配合概念，并强调了了解装配方法、配合功能以及装配环境中零部件组织的重要性。",
                // Russian
                "Русский": "Глава о Bottom Up Assembly в SOLIDWORKS 2020 охватывает процесс создания и ограничения компонентов по отдельности перед их вставкой в ​​сборку. В ней объясняется использование стандартных сопряжений для установления взаимосвязей между деталями, что позволяет осуществлять перемещение и вращение, оставляя одну степень свободы открытой. Кроме того, в ней вводится концепция мульти-сопряжений для ограничения нескольких компонентов одновременно и подчеркивается важность понимания методов сборки, функциональности сопряжений и организации компонентов в среде сборки.",
                // French
                "Français": "Le chapitre sur l'assemblage de bas en haut dans SOLIDWORKS 2020 couvre le processus de création et de contrainte des composants individuellement avant de les insérer dans un assemblage. Il explique l'utilisation de contraintes standard pour établir des relations entre les pièces, permettant le mouvement et la rotation en laissant un degré de liberté ouvert. En outre, il présente le concept de contraintes multiples pour contraindre plusieurs composants simultanément et souligne l'importance de comprendre les méthodes d'assemblage, les fonctionnalités de contrainte et l'organisation des composants dans l'environnement d'assemblage.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 のボトムアップ アセンブリの章では、コンポーネントをアセンブリに挿入する前に、コンポーネントを個別に作成して拘束するプロセスについて説明します。標準合致を使用してパーツ間の関係を確立し、1 つの自由度を開いたままにして移動と回転を可能にする方法について説明します。さらに、複数のコンポーネントを同時に拘束するためのマルチ合致の概念を紹介し、アセンブリ方法、合致機能、およびアセンブリ環境内でのコンポーネントの構成を理解することの重要性を強調します。",
                // Korean
                "한국인": "SOLIDWORKS 2020의 Bottom Up Assembly에 대한 장은 어셈블리에 삽입하기 전에 개별적으로 구성 요소를 만들고 구속하는 프로세스를 다룹니다. 표준 메이트를 사용하여 파트 간의 관계를 설정하고, 한 자유도를 열어두고 이동 및 회전을 허용하는 방법을 설명합니다. 또한 여러 구성 요소를 동시에 구속하기 위한 멀티 메이트 개념을 소개하고 어셈블리 방법, 메이트 기능 및 어셈블리 환경 내에서 구성 요소의 구성을 이해하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "El capítulo sobre ensamblaje ascendente en SOLIDWORKS 2020 cubre el proceso de creación y restricción de componentes individualmente antes de insertarlos en un ensamblaje. Explica el uso de relaciones de posición estándar para establecer relaciones entre piezas, lo que permite el movimiento y la rotación dejando abierto un grado de libertad. Además, presenta el concepto de relaciones de posición múltiples para restringir varios componentes simultáneamente y enfatiza la importancia de comprender los métodos de ensamblaje, las funcionalidades de las relaciones de posición y la organización de los componentes dentro del entorno de ensamblaje.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 में बॉटम अप असेंबली पर अध्याय में घटकों को असेंबली में डालने से पहले उन्हें व्यक्तिगत रूप से बनाने और उन्हें सीमित करने की प्रक्रिया को शामिल किया गया है। यह भागों के बीच संबंध स्थापित करने के लिए मानक मेट के उपयोग की व्याख्या करता है, जिससे एक डिग्री की स्वतंत्रता को खुला छोड़कर गति और घुमाव की अनुमति मिलती है। इसके अतिरिक्त, यह एक साथ कई घटकों को सीमित करने के लिए मल्टी-मेट की अवधारणा का परिचय देता है और असेंबली विधियों, मेट कार्यात्मकताओं और असेंबली वातावरण के भीतर घटकों के संगठन को समझने के महत्व पर जोर देता है।",
                // Portuguese
                "Português": "O capítulo Montagem de baixo para cima no SOLIDWORKS 2020 aborda o processo de criação e restrição de componentes individualmente antes de os inserir numa montagem. Explica a utilização de posicionamentos padrão para estabelecer relações entre peças, permitindo o movimento e a rotação, deixando um grau de liberdade aberto. Além disso, introduz o conceito de posicionamentos múltiplos para restringir vários componentes em simultâneo e enfatiza a importância de compreender os métodos de montagem, as funcionalidades dos posicionamentos e a organização dos componentes no ambiente de montagem.",
                // Bengali
                "বাংলা": "SOLIDWORKS 2020-এ বটম আপ অ্যাসেম্বলির অধ্যায় একটি অ্যাসেম্বলিতে ঢোকানোর আগে পৃথকভাবে উপাদানগুলি তৈরি এবং সীমাবদ্ধ করার প্রক্রিয়াকে কভার করে। এটি অংশগুলির মধ্যে সম্পর্ক স্থাপনের জন্য স্ট্যান্ডার্ড সঙ্গীর ব্যবহার ব্যাখ্যা করে, এক ডিগ্রি স্বাধীনতা খোলা রেখে চলাচল এবং ঘূর্ণনের অনুমতি দেয়। উপরন্তু, এটি একযোগে একাধিক উপাদানকে সীমাবদ্ধ করার জন্য মাল্টি-মেটের ধারণা প্রবর্তন করে এবং সমাবেশ পদ্ধতি, সঙ্গীর কার্যকারিতা এবং সমাবেশ পরিবেশের মধ্যে উপাদানগুলির সংগঠন বোঝার গুরুত্বের উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يغطي الفصل الخاص بالتجميع من الأسفل إلى الأعلى في SOLIDWORKS 2020 عملية إنشاء وتقييد المكونات بشكل فردي قبل إدخالها في التجميع. ويشرح استخدام الزملاء القياسيين لإنشاء علاقات بين الأجزاء، مما يسمح بالحركة والدوران من خلال ترك درجة واحدة من الحرية مفتوحة. بالإضافة إلى ذلك، يقدم مفهوم الزملاء المتعددين لتقييد مكونات متعددة في وقت واحد ويؤكد على أهمية فهم أساليب التجميع ووظائف الزملاء وتنظيم المكونات داخل بيئة التجميع.",
                // Persian
                "فارسی": "فصل مونتاژ پایین به بالا در SOLIDWORKS 2020 فرآیند ایجاد و محدود کردن اجزا را به صورت جداگانه قبل از قرار دادن آنها در یک مجموعه پوشش می دهد. استفاده از جفت های استاندارد برای برقراری روابط بین قطعات را توضیح می دهد که با باز گذاشتن یک درجه آزادی امکان حرکت و چرخش را فراهم می کند. علاوه بر این، مفهوم چند میت را برای محدود کردن چندین مؤلفه به طور همزمان معرفی می‌کند و بر اهمیت درک روش‌های مونتاژ، قابلیت‌های mate و سازماندهی اجزا در محیط اسمبلی تأکید می‌کند.",
            },
        },
        // 12
        {
            "ChapterName": "Using Advanced Mates",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on using advanced mates in SOLIDWORKS 2020 covers the process of assembling components through various mating techniques, including Smart-Mates for efficient mate creation, Rack and Pinion Mates for enabling movement, and Mechanical Mates like Limit and Cam mates for precise control. It emphasizes the importance of inserting components correctly, applying both standard and advanced mates, and testing assembly motions to ensure functionality, particularly through the manipulation of parts like the Snap-On Cap and Main Gear. Additionally, it highlights the necessity of saving work regularly and comparing it with pre-built assemblies to ensure accuracy and completeness in the assembly process.",
                // German
                "Deutsch": "Das Kapitel zur Verwendung erweiterter Verknüpfungen in SOLIDWORKS 2020 behandelt den Prozess der Montage von Komponenten mithilfe verschiedener Verknüpfungstechniken, darunter Smart-Mates zur effizienten Erstellung von Verknüpfungen, Zahnstangen- und Ritzel-Verknüpfungen zur Ermöglichung von Bewegungen und mechanische Verknüpfungen wie Begrenzungs- und Nocken-Verknüpfungen zur präzisen Steuerung. Es betont die Bedeutung des korrekten Einfügens von Komponenten, der Anwendung sowohl standardmäßiger als auch erweiterter Verknüpfungen und des Testens von Montagebewegungen, um die Funktionalität sicherzustellen, insbesondere durch die Manipulation von Teilen wie der Snap-On-Kappe und dem Hauptzahnrad. Darüber hinaus wird die Notwendigkeit hervorgehoben, die Arbeit regelmäßig zu speichern und mit vorgefertigten Baugruppen zu vergleichen, um Genauigkeit und Vollständigkeit im Montageprozess sicherzustellen.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 中有关使用高级配合的章节介绍了通过各种配合技术组装零部件的过程，包括用于高效配合创建的智能配合、用于实现移动的齿条和小齿轮配合以及用于精确控制的机械配合（如限位配合和凸轮配合）。它强调了正确插入零部件、应用标准配合和高级配合以及测试装配运动以确保功能的重要性，特别是通过操纵 Snap-On Cap 和主齿轮等零件。此外，它还强调了定期保存工作并将其与预构建的装配体进行比较的必要性，以确保装配过程的准确性和完整性。",
                // Russian
                "Русский": "Глава об использовании расширенных сопряжений в SOLIDWORKS 2020 охватывает процесс сборки компонентов с помощью различных методов сопряжения, включая Smart-Mates для эффективного создания сопряжений, Rack and Pinion Mates для обеспечения движения и Mechanical Mates, такие как Limit и Cam mates для точного управления. В ней подчеркивается важность правильной вставки компонентов, применения как стандартных, так и расширенных сопряжений и тестирования движений сборки для обеспечения функциональности, в частности, посредством манипуляций с такими деталями, как Snap-On Cap и Main Gear. Кроме того, в ней подчеркивается необходимость регулярного сохранения работы и ее сравнения с предварительно созданными сборками для обеспечения точности и полноты процесса сборки.",
                // French
                "Français": "Le chapitre sur l'utilisation des contraintes avancées dans SOLIDWORKS 2020 couvre le processus d'assemblage de composants via diverses techniques de couplage, notamment les contraintes intelligentes pour une création de contraintes efficace, les contraintes à crémaillère et pignon pour permettre le mouvement et les contraintes mécaniques telles que les contraintes de limite et de came pour un contrôle précis. Il souligne l'importance d'insérer correctement les composants, d'appliquer des contraintes standard et avancées et de tester les mouvements d'assemblage pour garantir la fonctionnalité, en particulier via la manipulation de pièces telles que le capuchon encliquetable et l'engrenage principal. En outre, il souligne la nécessité d'enregistrer régulièrement le travail et de le comparer aux assemblages prédéfinis pour garantir l'exactitude et l'exhaustivité du processus d'assemblage.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 の高度な合致の使用に関する章では、効率的な合致作成のためのスマート合致、動きを可能にするラックとピニオン合致、正確な制御のためのリミット合致やカム合致などのメカニカル合致など、さまざまな合致テクニックを使用してコンポーネントを組み立てるプロセスについて説明します。コンポーネントを正しく挿入すること、標準合致と高度な合致の両方を適用すること、特にスナップオン キャップやメイン ギアなどの部品の操作を通じてアセンブリ動作をテストして機能性を確認することの重要性を強調しています。さらに、アセンブリ プロセスの正確性と完全性を確保するために、作業を定期的に保存して事前に構築されたアセンブリと比較する必要性を強調しています。",
                // Korean
                "한국인": "SOLIDWORKS 2020에서 고급 메이트를 사용하는 챕터에서는 효율적인 메이트 생성을 위한 Smart-Mates, 이동을 가능하게 하는 Rack and Pinion Mates, 정밀한 제어를 위한 Limit 및 Cam 메이트와 같은 Mechanical Mates를 포함한 다양한 메이트 기술을 통해 구성 요소를 조립하는 프로세스를 다룹니다. 구성 요소를 올바르게 삽입하고, 표준 메이트와 고급 메이트를 모두 적용하고, 특히 Snap-On Cap 및 Main Gear와 같은 부품 조작을 통해 기능을 보장하기 위해 조립 동작을 테스트하는 것의 중요성을 강조합니다. 또한 조립 프로세스에서 정확성과 완전성을 보장하기 위해 정기적으로 작업을 저장하고 사전 빌드된 조립품과 비교해야 할 필요성을 강조합니다.",
                // Spanish
                "Español": "El capítulo sobre el uso de relaciones de posición avanzadas en SOLIDWORKS 2020 cubre el proceso de ensamblaje de componentes a través de varias técnicas de relaciones de posición, incluidas las relaciones de posición inteligentes para la creación eficiente de relaciones de posición, relaciones de posición de piñón y cremallera para permitir el movimiento y relaciones de posición mecánicas como relaciones de posición de límite y de leva para un control preciso. Destaca la importancia de insertar los componentes correctamente, aplicar relaciones de posición estándar y avanzadas y probar los movimientos del ensamblaje para garantizar la funcionalidad, en particular a través de la manipulación de piezas como la tapa a presión y el engranaje principal. Además, destaca la necesidad de guardar el trabajo regularmente y compararlo con ensamblajes prefabricados para garantizar la precisión y la integridad en el proceso de ensamblaje.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 में उन्नत मेट्स का उपयोग करने पर अध्याय विभिन्न मेटिंग तकनीकों के माध्यम से घटकों को इकट्ठा करने की प्रक्रिया को कवर करता है, जिसमें कुशल मेट निर्माण के लिए स्मार्ट-मेट्स, मूवमेंट को सक्षम करने के लिए रैक और पिनियन मेट्स और सटीक नियंत्रण के लिए लिमिट और कैम मेट्स जैसे मैकेनिकल मेट्स शामिल हैं। यह घटकों को सही ढंग से सम्मिलित करने, मानक और उन्नत दोनों मेट को लागू करने और कार्यक्षमता सुनिश्चित करने के लिए असेंबली गति का परीक्षण करने के महत्व पर जोर देता है, विशेष रूप से स्नैप-ऑन कैप और मेन गियर जैसे भागों के हेरफेर के माध्यम से। इसके अतिरिक्त, यह असेंबली प्रक्रिया में सटीकता और पूर्णता सुनिश्चित करने के लिए नियमित रूप से काम को बचाने और पहले से निर्मित असेंबली के साथ इसकी तुलना करने की आवश्यकता पर प्रकाश डालता है।",
                // Portuguese
                "Português": "O capítulo sobre a utilização de posicionamentos avançados no SOLIDWORKS 2020 aborda o processo de montagem de componentes através de diversas técnicas de posicionamento, incluindo posicionamentos inteligentes para a criação eficiente de posicionamentos, posicionamentos de cremalheira e pinhão para permitir o movimento e posicionamentos mecânicos como posicionamentos Limit e Cam para um controlo preciso. Realça a importância de inserir componentes corretamente, aplicar posicionamentos padrão e avançados e testar movimentos de montagem para garantir a funcionalidade, principalmente através da manipulação de peças como a tampa de encaixe e a engrenagem principal. Além disso, destaca a necessidade de guardar o trabalho regularmente e compará-lo com as montagens pré-construídas para garantir a precisão e a integridade no processo de montagem.",
                // Bengali
                "বাংলা": "SOLIDWORKS 2020-এ উন্নত সঙ্গীদের ব্যবহারের অধ্যায়টি বিভিন্ন সঙ্গম কৌশলের মাধ্যমে উপাদান একত্রিত করার প্রক্রিয়াকে কভার করে, যার মধ্যে রয়েছে দক্ষ সঙ্গী তৈরির জন্য স্মার্ট-মেটস, চলাফেরা সক্ষম করার জন্য র্যাক এবং পিনিয়ন মেটস এবং সুনির্দিষ্ট নিয়ন্ত্রণের জন্য লিমিট এবং ক্যামের মতো মেকানিক্যাল মেটস। এটি সঠিকভাবে উপাদান সন্নিবেশ করার গুরুত্ব, স্ট্যান্ডার্ড এবং অ্যাডভান্সড সঙ্গী উভয়ই প্রয়োগ করা এবং কার্যকারিতা নিশ্চিত করতে সমাবেশ গতি পরীক্ষা করার গুরুত্ব দেয়, বিশেষ করে স্ন্যাপ-অন ক্যাপ এবং মেইন গিয়ারের মতো অংশগুলির হেরফের মাধ্যমে। উপরন্তু, এটি নিয়মিতভাবে কাজ সংরক্ষণের প্রয়োজনীয়তা তুলে ধরে এবং সমাবেশ প্রক্রিয়ার নির্ভুলতা এবং সম্পূর্ণতা নিশ্চিত করার জন্য পূর্ব-নির্মিত সমাবেশগুলির সাথে তুলনা করে।",
                // Arabic
                "عَرَبِيّ": "يغطي الفصل الخاص باستخدام أدوات الربط المتقدمة في SOLIDWORKS 2020 عملية تجميع المكونات من خلال تقنيات الربط المختلفة، بما في ذلك أدوات الربط الذكية لإنشاء أدوات الربط بكفاءة، وأدوات الربط ذات الحامل والترس لتمكين الحركة، وأدوات الربط الميكانيكية مثل أدوات الربط المحدودة وأدوات الربط ذات الحد الأقصى للتحكم الدقيق. ويؤكد على أهمية إدخال المكونات بشكل صحيح، وتطبيق أدوات الربط القياسية والمتقدمة، واختبار حركات التجميع لضمان الأداء الوظيفي، وخاصة من خلال التعامل مع الأجزاء مثل الغطاء القابل للتركيب والترس الرئيسي. بالإضافة إلى ذلك، يسلط الضوء على ضرورة حفظ العمل بانتظام ومقارنته بالتجمعات المبنية مسبقًا لضمان الدقة والاكتمال في عملية التجميع.",
                // Persian
                "فارسی": "فصل استفاده از جفت‌های پیشرفته در SOLIDWORKS 2020، فرآیند مونتاژ قطعات را از طریق تکنیک‌های مختلف جفت‌گیری، از جمله Smart-Mates برای ایجاد جفت موثر، Rack and Pinion Mates برای فعال کردن حرکت، و Mates مکانیکی مانند Limit و Cammates برای کنترل دقیق، پوشش می‌دهد. این بر اهمیت قرار دادن صحیح اجزاء، استفاده از جفت های استاندارد و پیشرفته، و تست حرکات مونتاژ برای اطمینان از عملکرد، به ویژه از طریق دستکاری قطعاتی مانند Snap-On Cap و Main Gear تاکید می کند. علاوه بر این، لزوم صرفه جویی در کار را به طور منظم و مقایسه آن با مجموعه های از پیش ساخته شده برای اطمینان از دقت و کامل بودن فرآیند مونتاژ برجسته می کند.",
            },
        },
        // 13
        {
            "ChapterName": "Layout Assembly",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on Layout Assembly in SOLIDWORKS 2020 focuses on the efficient design of assemblies using layout sketches, allowing for the creation and modification of components before part creation. It introduces the concept of blocks, which are formed by grouping sketch entities, dimensions, and callouts into a single unit for easier manipulation and reuse across different assembly documents. The chapter emphasizes the flexibility of switching between top-down and bottom-up design methods, enabling quick updates to the assembly structure, and highlights the ability to visualize assembly motions and convert blocks into 3D solid parts, enhancing the conceptual design process.",
                // German
                "Deutsch": "Das Kapitel „Layoutbaugruppe“ in SOLIDWORKS 2020 konzentriert sich auf die effiziente Konstruktion von Baugruppen mithilfe von Layoutskizzen, sodass Komponenten vor der Teileerstellung erstellt und geändert werden können. Es führt das Konzept von Blöcken ein, die durch die Gruppierung von Skizzenelementen, Abmessungen und Beschriftungen in einer einzigen Einheit gebildet werden, um die Bearbeitung und Wiederverwendung in verschiedenen Baugruppendokumenten zu erleichtern. Das Kapitel betont die Flexibilität beim Wechsel zwischen Top-down- und Bottom-up-Konstruktionsmethoden, wodurch schnelle Aktualisierungen der Baugruppenstruktur ermöglicht werden, und hebt die Möglichkeit hervor, Baugruppenbewegungen zu visualisieren und Blöcke in 3D-Vollteile umzuwandeln, wodurch der konzeptionelle Konstruktionsprozess verbessert wird.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 中的“布局装配”一章重点介绍如何使用布局草图高效地设计装配体，从而可以在创建零件之前创建和修改组件。它引入了块的概念，块是通过将草图实体、尺寸和标注分组为一个单元而形成的，以便于在不同的装配文档之间进行操作和重用。本章强调了在自上而下和自下而上的设计方法之间切换的灵活性，从而可以快速更新装配结构，并强调了可视化装配运动和将块转换为 3D 实体零件的能力，从而增强了概念设计过程。",
                // Russian
                "Русский": "Глава Layout Assembly в SOLIDWORKS 2020 фокусируется на эффективном проектировании сборок с использованием эскизов компоновки, что позволяет создавать и изменять компоненты до создания деталей. В ней представлена ​​концепция блоков, которые формируются путем группировки объектов эскиза, размеров и выносок в единый блок для более легкой манипуляции и повторного использования в различных документах сборки. В главе подчеркивается гибкость переключения между методами проектирования сверху вниз и снизу вверх, что позволяет быстро обновлять структуру сборки, а также подчеркивается возможность визуализации движений сборки и преобразования блоков в трехмерные твердые детали, что улучшает процесс концептуального проектирования.",
                // French
                "Français": "Le chapitre sur l'assemblage de schémas dans SOLIDWORKS 2020 se concentre sur la conception efficace d'assemblages à l'aide d'esquisses de schémas, permettant la création et la modification de composants avant la création de pièces. Il introduit le concept de blocs, qui sont formés en regroupant des entités d'esquisse, des cotes et des légendes en une seule unité pour une manipulation et une réutilisation plus faciles dans différents documents d'assemblage. Le chapitre met l'accent sur la flexibilité du basculement entre les méthodes de conception descendante et ascendante, permettant des mises à jour rapides de la structure d'assemblage, et met en évidence la possibilité de visualiser les mouvements d'assemblage et de convertir des blocs en pièces solides 3D, améliorant ainsi le processus de conception conceptuelle.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 のレイアウト アセンブリに関する章では、レイアウト スケッチを使用したアセンブリの効率的な設計に焦点を当て、部品作成前にコンポーネントを作成および変更できるようにします。また、ブロックの概念を紹介します。ブロックは、スケッチ エンティティ、寸法、および吹き出しを 1 つのユニットにグループ化することで形成され、さまざまなアセンブリ ドキュメント間での操作と再利用が容易になります。この章では、トップダウンとボトムアップの設計方法を切り替える柔軟性を強調し、アセンブリ構造をすばやく更新できるようにします。また、アセンブリの動きを視覚化してブロックを 3D ソリッド パーツに変換する機能を強調し、概念設計プロセスを強化します。",
                // Korean
                "한국인": "SOLIDWORKS 2020의 레이아웃 어셈블리에 대한 장은 레이아웃 스케치를 사용하여 어셈블리를 효율적으로 설계하는 데 중점을 두고, 파트를 생성하기 전에 컴포넌트를 생성하고 수정할 수 있도록 합니다. 블록의 개념을 소개하는데, 블록은 스케치 엔티티, 치수 및 콜아웃을 단일 단위로 그룹화하여 다양한 어셈블리 문서에서 더 쉽게 조작하고 재사용할 수 있도록 합니다. 이 장에서는 상향식 및 하향식 설계 방법 간을 전환하는 유연성을 강조하여 어셈블리 구조를 빠르게 업데이트할 수 있도록 하고, 어셈블리 동작을 시각화하고 블록을 3D 솔리드 파트로 변환하여 개념 설계 프로세스를 향상시키는 기능을 강조합니다.",
                // Spanish
                "Español": "El capítulo sobre ensamblajes de diseño en SOLIDWORKS 2020 se centra en el diseño eficiente de ensamblajes mediante bocetos de diseño, lo que permite la creación y modificación de componentes antes de la creación de piezas. Presenta el concepto de bloques, que se forman agrupando entidades de boceto, dimensiones y llamadas en una sola unidad para facilitar su manipulación y reutilización en diferentes documentos de ensamblaje. El capítulo enfatiza la flexibilidad de cambiar entre métodos de diseño de arriba hacia abajo y de abajo hacia arriba, lo que permite actualizaciones rápidas de la estructura del ensamblaje, y destaca la capacidad de visualizar los movimientos del ensamblaje y convertir bloques en piezas sólidas 3D, lo que mejora el proceso de diseño conceptual.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 में लेआउट असेंबली पर अध्याय लेआउट स्केच का उपयोग करके असेंबली के कुशल डिज़ाइन पर ध्यान केंद्रित करता है, जिससे भाग निर्माण से पहले घटकों के निर्माण और संशोधन की अनुमति मिलती है। यह ब्लॉक की अवधारणा का परिचय देता है, जो स्केच इकाइयों, आयामों और कॉलआउट को एक इकाई में समूहीकृत करके अलग-अलग असेंबली दस्तावेज़ों में आसान हेरफेर और पुन: उपयोग के लिए बनाए जाते हैं। अध्याय टॉप-डाउन और बॉटम-अप डिज़ाइन विधियों के बीच स्विच करने की लचीलेपन पर जोर देता है, जिससे असेंबली संरचना में त्वरित अपडेट सक्षम होते हैं, और असेंबली गति को विज़ुअलाइज़ करने और ब्लॉक को 3D सॉलिड पार्ट्स में बदलने की क्षमता पर प्रकाश डाला जाता है, जिससे वैचारिक डिज़ाइन प्रक्रिया में वृद्धि होती है।",
                // Portuguese
                "Português": "O capítulo sobre a montagem de layouts no SOLIDWORKS 2020 centra-se no design eficiente de montagens utilizando esboços de layouts, permitindo a criação e modificação de componentes antes da criação da peça. Introduz o conceito de blocos, que são formados pelo agrupamento de entidades de esboço, dimensões e chamadas numa única unidade para facilitar a manipulação e reutilização em diferentes documentos de montagem. O capítulo enfatiza a flexibilidade de alternar entre métodos de projeto de cima para baixo e de baixo para cima, permitindo atualizações rápidas na estrutura da montagem, e destaca a capacidade de visualizar movimentos de montagem e converter blocos em peças sólidas 3D, melhorando o processo de projeto conceptual.",
                // Bengali
                "বাংলা": "সলিডওয়ার্কস 2020-এ লেআউট অ্যাসেম্বলির অধ্যায়টি লেআউট স্কেচ ব্যবহার করে অ্যাসেম্বলিগুলির দক্ষ নকশার উপর ফোকাস করে, যা অংশ তৈরির আগে উপাদানগুলি তৈরি এবং পরিবর্তন করার অনুমতি দেয়। এটি ব্লকের ধারণা প্রবর্তন করে, যা স্কেচ সত্তা, মাত্রা এবং কলআউটগুলিকে একটি একক ইউনিটে গোষ্ঠীবদ্ধ করে তৈরি করা হয় যাতে সহজে হেরফের করা যায় এবং বিভিন্ন সমাবেশ নথিতে পুনরায় ব্যবহার করা হয়। অধ্যায়টি টপ-ডাউন এবং বটম-আপ ডিজাইন পদ্ধতির মধ্যে স্যুইচ করার নমনীয়তার উপর জোর দেয়, অ্যাসেম্বলি স্ট্রাকচারে দ্রুত আপডেটগুলি সক্ষম করে, এবং অ্যাসেম্বলি মোশনগুলি কল্পনা করার এবং ব্লকগুলিকে 3D কঠিন অংশে রূপান্তর করার ক্ষমতা হাইলাইট করে, ধারণাগত নকশা প্রক্রিয়াকে উন্নত করে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الخاص بتجميع التخطيط في SOLIDWORKS 2020 على التصميم الفعّال للتجميعات باستخدام رسومات التخطيط، مما يسمح بإنشاء وتعديل المكونات قبل إنشاء الأجزاء. كما يقدم مفهوم الكتل، التي يتم تشكيلها من خلال تجميع كيانات الرسم والأبعاد والتعليقات التوضيحية في وحدة واحدة لتسهيل التلاعب بها وإعادة استخدامها عبر مستندات التجميع المختلفة. ويؤكد الفصل على مرونة التبديل بين طرق التصميم من أعلى إلى أسفل ومن أسفل إلى أعلى، مما يتيح التحديثات السريعة لهيكل التجميع، ويسلط الضوء على القدرة على تصور حركات التجميع وتحويل الكتل إلى أجزاء صلبة ثلاثية الأبعاد، مما يعزز عملية التصميم المفاهيمي.",
                // Persian
                "فارسی": "فصل مونتاژ چیدمان در SOLIDWORKS 2020 بر طراحی کارآمد مجموعه ها با استفاده از طرح های طرح بندی تمرکز دارد که امکان ایجاد و اصلاح اجزا را قبل از ایجاد قطعه فراهم می کند. این مفهوم بلوک‌ها را معرفی می‌کند که با گروه‌بندی موجودیت‌های طرح، ابعاد و فراخوان‌ها در یک واحد واحد برای دستکاری و استفاده مجدد آسان‌تر در اسناد مختلف مونتاژ شکل می‌گیرند. این فصل بر انعطاف‌پذیری جابجایی بین روش‌های طراحی از بالا به پایین و پایین به بالا تأکید می‌کند، به‌روزرسانی‌های سریع ساختار مونتاژ را امکان‌پذیر می‌کند، و توانایی تجسم حرکات مونتاژ و تبدیل بلوک‌ها به قطعات جامد سه‌بعدی را برجسته می‌کند، و فرآیند طراحی مفهومی را بهبود می‌بخشد.",
            },
        },
        // 14
        {
            "ChapterName": "PhotoView360 Basics",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on PhotoView 360 Basics in SOLIDWORKS 2020 covers the essential tools and techniques for creating realistic renderings of 3D models. It explains how to enable the PhotoView 360 add-in, apply appearances and scenes, adjust lighting settings, and utilize ambient occlusion to enhance the visual quality of renderings. Additionally, it details the process of setting the render region, selecting image sizes, and saving the final output in JPEG format, providing a comprehensive guide for users to achieve professional-looking results in their designs.",
                // German
                "Deutsch": "Das Kapitel zu den Grundlagen von PhotoView 360 in SOLIDWORKS 2020 behandelt die wesentlichen Werkzeuge und Techniken zum Erstellen realistischer Renderings von 3D-Modellen. Es erklärt, wie Sie das PhotoView 360-Add-In aktivieren, Erscheinungsbilder und Szenen anwenden, Beleuchtungseinstellungen anpassen und Umgebungsverdeckung nutzen, um die visuelle Qualität von Renderings zu verbessern. Darüber hinaus wird der Prozess zum Festlegen des Renderbereichs, Auswählen von Bildgrößen und Speichern der endgültigen Ausgabe im JPEG-Format detailliert beschrieben. Damit erhalten Benutzer eine umfassende Anleitung, um professionell aussehende Ergebnisse in ihren Designs zu erzielen.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 中的 PhotoView 360 基础知识一章介绍了创建 3D 模型逼真渲染的基本工具和技术。它解释了如何启用 PhotoView 360 插件、应用外观和场景、调整照明设置以及利用环境光遮蔽来增强渲染的视觉质量。此外，它详细介绍了设置渲染区域、选择图像大小以及以 JPEG 格式保存最终输出的过程，为用户提供全面的指南，以便在设计中获得专业效果。",
                // Russian
                "Русский": "Глава «Основы PhotoView 360» в SOLIDWORKS 2020 охватывает основные инструменты и методы создания реалистичных рендеров 3D-моделей. В ней объясняется, как включить надстройку PhotoView 360, применять внешний вид и сцены, настраивать параметры освещения и использовать окклюзию окружающего пространства для улучшения визуального качества рендеринга. Кроме того, в ней подробно описывается процесс настройки области рендеринга, выбора размеров изображения и сохранения конечного вывода в формате JPEG, что дает пользователям полное руководство по достижению профессионально выглядящих результатов в своих проектах.",
                // French
                "Français": "Le chapitre sur les principes de base de PhotoView 360 dans SOLIDWORKS 2020 couvre les outils et techniques essentiels pour créer des rendus réalistes de modèles 3D. Il explique comment activer le module complémentaire PhotoView 360, appliquer des apparences et des scènes, ajuster les paramètres d'éclairage et utiliser l'occlusion ambiante pour améliorer la qualité visuelle des rendus. En outre, il détaille le processus de définition de la zone de rendu, de sélection des tailles d'image et d'enregistrement de la sortie finale au format JPEG, fournissant ainsi un guide complet permettant aux utilisateurs d'obtenir des résultats professionnels dans leurs conceptions.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 の PhotoView 360 の基礎に関する章では、3D モデルのリアルなレンダリングを作成するための重要なツールとテクニックについて説明します。PhotoView 360 アドインを有効にする方法、外観とシーンを適用する方法、照明設定を調整する方法、アンビエント オクルージョンを利用してレンダリングの視覚的品質を高める方法について説明します。さらに、レンダリング領域の設定、画像サイズの選択、最終出力を JPEG 形式で保存するプロセスについても詳しく説明し、ユーザーが設計でプロフェッショナルな結果を実現するための包括的なガイドを提供します。",
                // Korean
                "한국인": "SOLIDWORKS 2020의 PhotoView 360 Basics에 대한 장은 3D 모델의 사실적인 렌더링을 만드는 데 필수적인 도구와 기술을 다룹니다. PhotoView 360 애드인을 활성화하고, 모양과 장면을 적용하고, 조명 설정을 조정하고, 주변 폐색을 활용하여 렌더링의 시각적 품질을 향상시키는 방법을 설명합니다. 또한 렌더링 영역을 설정하고, 이미지 크기를 선택하고, 최종 출력을 JPEG 형식으로 저장하는 프로세스를 자세히 설명하여 사용자가 디자인에서 전문적인 결과를 얻을 수 있는 포괄적인 가이드를 제공합니다.",
                // Spanish
                "Español": "El capítulo sobre los conceptos básicos de PhotoView 360 en SOLIDWORKS 2020 cubre las herramientas y técnicas esenciales para crear representaciones realistas de modelos 3D. Explica cómo habilitar el complemento PhotoView 360, aplicar apariencias y escenas, ajustar la configuración de iluminación y utilizar la oclusión ambiental para mejorar la calidad visual de las representaciones. Además, detalla el proceso de configuración de la región de renderizado, selección de tamaños de imagen y guardado del resultado final en formato JPEG, lo que proporciona una guía completa para que los usuarios logren resultados de aspecto profesional en sus diseños.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 में PhotoView 360 मूल बातें पर अध्याय 3D मॉडल के यथार्थवादी रेंडरिंग बनाने के लिए आवश्यक उपकरणों और तकनीकों को शामिल करता है। यह बताता है कि PhotoView 360 ऐड-इन को कैसे सक्षम किया जाए, दिखावट और दृश्य लागू करें, प्रकाश व्यवस्था को समायोजित करें और रेंडरिंग की दृश्य गुणवत्ता को बढ़ाने के लिए परिवेश अवरोध का उपयोग करें। इसके अतिरिक्त, यह रेंडर क्षेत्र को सेट करने, छवि के आकार का चयन करने और अंतिम आउटपुट को JPEG प्रारूप में सहेजने की प्रक्रिया का विवरण देता है, जो उपयोगकर्ताओं को उनके डिज़ाइन में पेशेवर दिखने वाले परिणाम प्राप्त करने के लिए एक व्यापक मार्गदर्शिका प्रदान करता है।",
                // Portuguese
                "Português": "O capítulo Noções básicas do PhotoView 360 no SOLIDWORKS 2020 aborda as ferramentas e técnicas essenciais para criar renderizações realistas de modelos 3D. Explica como ativar o complemento PhotoView 360, aplicar aspetos e cenas, ajustar as definições de iluminação e utilizar a oclusão de ambiente para melhorar a qualidade visual das renderizações. Além disso, detalha o processo de configuração da região de renderização, a seleção de tamanhos de imagem e a gravação da saída final em formato JPEG, fornecendo um guia completo para os utilizadores obterem resultados com aspeto profissional nos seus designs.",
                // Bengali
                "বাংলা": "সলিডওয়ার্কস 2020-এর ফটোভিউ 360 বেসিক-এর অধ্যায়ে 3D মডেলের বাস্তবসম্মত রেন্ডারিং তৈরি করার জন্য প্রয়োজনীয় সরঞ্জাম এবং কৌশলগুলি কভার করা হয়েছে। এটি ব্যাখ্যা করে যে কীভাবে ফটোভিউ 360 অ্যাড-ইন সক্ষম করা যায়, উপস্থিতি এবং দৃশ্যগুলি প্রয়োগ করা যায়, আলোর সেটিংস সামঞ্জস্য করা যায় এবং রেন্ডারিংয়ের ভিজ্যুয়াল গুণমান উন্নত করতে পরিবেষ্টিত অবরোধকে ব্যবহার করা যায়। অতিরিক্তভাবে, এটি রেন্ডার অঞ্চল সেট করার প্রক্রিয়া, চিত্রের আকার নির্বাচন এবং JPEG ফর্ম্যাটে চূড়ান্ত আউটপুট সংরক্ষণ করার প্রক্রিয়ার বিবরণ দেয়, ব্যবহারকারীদের তাদের ডিজাইনে পেশাদার চেহারার ফলাফল অর্জনের জন্য একটি বিস্তৃত নির্দেশিকা প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يغطي الفصل الخاص بأساسيات PhotoView 360 في SOLIDWORKS 2020 الأدوات والتقنيات الأساسية لإنشاء عروض تقديمية واقعية للنماذج ثلاثية الأبعاد. ويشرح كيفية تمكين الوظيفة الإضافية PhotoView 360، وتطبيق المظاهر والمشاهد، وضبط إعدادات الإضاءة، والاستفادة من التمويه المحيط لتحسين الجودة المرئية للعروض التقديمية. بالإضافة إلى ذلك، يوضح بالتفصيل عملية ضبط منطقة العرض، وتحديد أحجام الصور، وحفظ الناتج النهائي بتنسيق JPEG، مما يوفر دليلاً شاملاً للمستخدمين لتحقيق نتائج ذات مظهر احترافي في تصميماتهم.",
                // Persian
                "فارسی": "فصل PhotoView 360 Basics در SOLIDWORKS 2020 ابزارها و تکنیک های ضروری برای ایجاد رندرهای واقعی از مدل های سه بعدی را پوشش می دهد. نحوه فعال کردن افزونه PhotoView 360، اعمال ظواهر و صحنه‌ها، تنظیم تنظیمات نور و استفاده از انسداد محیط برای افزایش کیفیت بصری رندرها را توضیح می‌دهد. علاوه بر این، جزئیات فرآیند تنظیم منطقه رندر، انتخاب اندازه‌های تصویر و ذخیره خروجی نهایی در فرمت JPEG را ارائه می‌کند و راهنمای جامعی برای کاربران برای دستیابی به نتایج حرفه‌ای در طراحی‌های خود ارائه می‌دهد.",
            },
        },
        // 15
        {
            "ChapterName": "Drawing Preparations",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter provides guidance on preparing and customizing drawing templates in SOLIDWORKS, focusing on setting document properties such as drafting standards, units, and fonts. It explains the distinction between the Sheet layer, used for creating drawing views and annotations, and the Sheet Format layer, which contains essential information like title blocks and BOM anchors. Additionally, it covers the process of toggling between layers, saving customized settings in a .drwdot file, and familiarizing users with the drawing tools and options available in the software.",
                // German
                "Deutsch": "Dieses Kapitel enthält Anleitungen zum Vorbereiten und Anpassen von Zeichnungsvorlagen in SOLIDWORKS und konzentriert sich auf das Festlegen von Dokumenteigenschaften wie Zeichnungsnormen, Einheiten und Schriftarten. Es erklärt den Unterschied zwischen der Blattebene, die zum Erstellen von Zeichnungsansichten und Anmerkungen verwendet wird, und der Blattformatebene, die wichtige Informationen wie Titelblöcke und Stücklistenanker enthält. Darüber hinaus wird das Umschalten zwischen Ebenen, das Speichern benutzerdefinierter Einstellungen in einer DRWDOT-Datei und die Einarbeitung der Benutzer in die in der Software verfügbaren Zeichenwerkzeuge und -optionen behandelt.",
                // Chinese
                "中国人": "本章提供有关在 SOLIDWORKS 中准备和自定义工程图模板的指导，重点介绍如何设置文档属性，例如绘图标准、单位和字体。它解释了用于创建工程图视图和注释的图纸层与包含标题栏和 BOM 锚点等基本信息的图纸格式层之间的区别。此外，它还介绍了在图层之间切换的过程、在 .drwdot 文件中保存自定义设置以及让用户熟悉软件中可用的工程图工具和选项。",
                // Russian
                "Русский": "В этой главе даются рекомендации по подготовке и настройке шаблонов чертежей в SOLIDWORKS, с упором на настройку свойств документа, таких как стандарты черчения, единицы измерения и шрифты. В ней объясняется различие между слоем Sheet, используемым для создания видов чертежей и аннотаций, и слоем Sheet Format, который содержит важную информацию, такую ​​как блоки заголовков и привязки спецификаций. Кроме того, в ней рассматривается процесс переключения между слоями, сохранение настроенных параметров в файле .drwdot и ознакомление пользователей с инструментами и параметрами чертежей, доступными в программном обеспечении.",
                // French
                "Français": "Ce chapitre fournit des conseils sur la préparation et la personnalisation des modèles de dessin dans SOLIDWORKS, en mettant l'accent sur la définition des propriétés du document, telles que les normes de dessin, les unités et les polices. Il explique la distinction entre le calque Feuille, utilisé pour créer des vues de dessin et des annotations, et le calque Format de feuille, qui contient des informations essentielles telles que les cartouches et les ancrages de nomenclature. En outre, il aborde le processus de basculement entre les calques, l'enregistrement des paramètres personnalisés dans un fichier .drwdot et la familiarisation des utilisateurs avec les outils et options de dessin disponibles dans le logiciel.",
                // Japanese
                "日本語": "この章では、製図規格、単位、フォントなどのドキュメント プロパティの設定に焦点を当て、SOLIDWORKS で図面テンプレートを準備およびカスタマイズする方法について説明します。図面ビューと注釈の作成に使用するシート レイヤーと、タイトル ブロックや BOM アンカーなどの重要な情報が含まれるシート フォーマット レイヤーの違いについて説明します。さらに、レイヤー間の切り替え、カスタマイズされた設定を .drwdot ファイルに保存するプロセス、ソフトウェアで使用できる描画ツールとオプションをユーザーに理解させる方法についても説明します。",
                // Korean
                "한국인": "이 장에서는 SOLIDWORKS에서 도면 템플릿을 준비하고 사용자 정의하는 방법에 대한 지침을 제공하며, 제도 표준, 단위, 글꼴과 같은 문서 속성을 설정하는 데 중점을 둡니다. 도면 뷰와 주석을 만드는 데 사용되는 시트 레이어와 제목 블록 및 BOM 앵커와 같은 필수 정보가 포함된 시트 형식 레이어의 차이점을 설명합니다. 또한 레이어 간 전환, 사용자 정의 설정을 .drwdot 파일에 저장, 사용자에게 소프트웨어에서 사용할 수 있는 도면 도구 및 옵션에 익숙해지는 프로세스를 다룹니다.",
                // Spanish
                "Español": "Este capítulo proporciona orientación sobre la preparación y personalización de plantillas de dibujo en SOLIDWORKS, centrándose en la configuración de propiedades de documento como estándares de dibujo, unidades y fuentes. Explica la distinción entre la capa Hoja, que se utiliza para crear vistas de dibujo y anotaciones, y la capa Formato de hoja, que contiene información esencial como bloques de título y anclajes de lista de materiales. Además, cubre el proceso de alternar entre capas, guardar configuraciones personalizadas en un archivo .drwdot y familiarizar a los usuarios con las herramientas y opciones de dibujo disponibles en el software.",
                // Hindi
                "हिंदी": "यह अध्याय SOLIDWORKS में ड्राइंग टेम्प्लेट तैयार करने और उन्हें कस्टमाइज़ करने के बारे में मार्गदर्शन प्रदान करता है, जिसमें ड्राफ्टिंग मानक, इकाइयाँ और फ़ॉन्ट जैसे दस्तावेज़ गुण सेट करने पर ध्यान केंद्रित किया जाता है। यह शीट लेयर के बीच अंतर को स्पष्ट करता है, जिसका उपयोग ड्राइंग दृश्य और एनोटेशन बनाने के लिए किया जाता है, और शीट फ़ॉर्मेट लेयर, जिसमें शीर्षक ब्लॉक और BOM एंकर जैसी आवश्यक जानकारी होती है। इसके अतिरिक्त, यह परतों के बीच टॉगल करने, .drwdot फ़ाइल में कस्टमाइज़ की गई सेटिंग्स को सहेजने और सॉफ़्टवेयर में उपलब्ध ड्राइंग टूल और विकल्पों से उपयोगकर्ताओं को परिचित कराने की प्रक्रिया को कवर करता है।",
                // Portuguese
                "Português": "Este capítulo fornece orientações sobre como preparar e personalizar modelos de desenho no SOLIDWORKS, com foco na configuração das propriedades do documento, como padrões de desenho, unidades e tipos de letra. Explica a distinção entre a camada Folha, utilizada para criar vistas de desenho e anotações, e a camada Formato da Folha, que contém informações essenciais como blocos de título e âncoras de lista de materiais. Além disso, abrange o processo de alternância entre camadas, guardando as definições personalizadas num ficheiro . drwdot e familiarizando os utilizadores com as ferramentas e opções de desenho disponíveis no software.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি SOLIDWORKS-এ অঙ্কন টেমপ্লেট প্রস্তুত এবং কাস্টমাইজ করার বিষয়ে নির্দেশিকা প্রদান করে, ডকুমেন্টের বৈশিষ্ট্য যেমন খসড়া মান, ইউনিট এবং ফন্ট সেট করার উপর ফোকাস করে। এটি অঙ্কন দৃশ্য এবং টীকা তৈরি করতে ব্যবহৃত শীট স্তর এবং শিট বিন্যাস স্তরের মধ্যে পার্থক্য ব্যাখ্যা করে, যাতে শিরোনাম ব্লক এবং BOM অ্যাঙ্করগুলির মতো প্রয়োজনীয় তথ্য রয়েছে। উপরন্তু, এটি স্তরগুলির মধ্যে টগল করার প্রক্রিয়া, একটি .drwdot ফাইলে কাস্টমাইজ করা সেটিংস সংরক্ষণ এবং সফ্টওয়্যারে উপলব্ধ অঙ্কন সরঞ্জাম এবং বিকল্পগুলির সাথে ব্যবহারকারীদের পরিচিত করার প্রক্রিয়াকে কভার করে৷",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل إرشادات حول إعداد قوالب الرسم وتخصيصها في SOLIDWORKS، مع التركيز على ضبط خصائص المستند مثل معايير الرسم والوحدات والخطوط. ويوضح التمييز بين طبقة الورقة، المستخدمة لإنشاء وجهات عرض الرسم والتعليقات التوضيحية، وطبقة تنسيق الورقة، التي تحتوي على معلومات أساسية مثل كتل العنوان ومراسي قائمة المواد. بالإضافة إلى ذلك، يغطي عملية التبديل بين الطبقات، وحفظ الإعدادات المخصصة في ملف .drwdot، وتعريف المستخدمين بأدوات الرسم والخيارات المتاحة في البرنامج.",
                // Persian
                "فارسی": "این فصل راهنمایی در مورد تهیه و سفارشی کردن الگوهای طراحی در SOLIDWORKS، با تمرکز بر تنظیم ویژگی های سند مانند استانداردهای پیش نویس، واحدها و فونت ها ارائه می دهد. این تمایز بین لایه Sheet که برای ایجاد نماهای طراحی و حاشیه نویسی استفاده می شود و لایه فرمت برگه که حاوی اطلاعات ضروری مانند بلوک های عنوان و لنگرهای BOM است را توضیح می دهد. علاوه بر این، فرآیند جابه‌جایی بین لایه‌ها، ذخیره تنظیمات سفارشی‌شده در فایل drwdot و آشنا کردن کاربران با ابزارها و گزینه‌های طراحی موجود در نرم‌افزار را پوشش می‌دهد.",
            },
        },
        // 16
        {
            "ChapterName": "Assembly Drawings",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on SOLIDWORKS 2020 Basic Tools for Assembly Drawings covers the creation and management of assembly drawings, emphasizing the use of standard views such as Front, Top, and Isometric. It details the process of generating a Bill of Materials (B.O.M.) that includes essential information like part numbers, descriptions, and quantities, while also explaining how to use automatic balloon annotations to link components to the B.O.M. Additionally, it highlights the ability to modify drawing views, add annotations for clarity, and utilize alternate position views to showcase different configurations of the assembly.",
                // German
                "Deutsch": "Das Kapitel „Grundlegende Werkzeuge für Baugruppenzeichnungen in SOLIDWORKS 2020“ behandelt die Erstellung und Verwaltung von Baugruppenzeichnungen und betont die Verwendung von Standardansichten wie Vorder-, Draufsicht und isometrische Ansicht. Es beschreibt detailliert den Prozess der Erstellung einer Stückliste, die wichtige Informationen wie Teilenummern, Beschreibungen und Mengen enthält, und erklärt gleichzeitig, wie man automatische Sprechblasenanmerkungen verwendet, um Komponenten mit der Stückliste zu verknüpfen. Darüber hinaus wird die Möglichkeit hervorgehoben, Zeichnungsansichten zu ändern, Anmerkungen zur Verdeutlichung hinzuzufügen und alternative Positionsansichten zu verwenden, um verschiedene Konfigurationen der Baugruppe darzustellen.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 装配图基本工具一章涵盖了装配图的创建和管理，强调了标准视图（例如正面视图、俯视图和等轴测视图）的使用。它详细介绍了生成物料清单 (BOM) 的过程，其中包括零件编号、描述和数量等基本信息，同时还解释了如何使用自动气球注释将组件链接到 BOM。此外，它还强调了修改工程图视图、添加注释以提高清晰度以及利用备用位置视图展示装配体的不同配置的能力。",
                // Russian
                "Русский": "Глава о базовых инструментах SOLIDWORKS 2020 для чертежей сборок охватывает создание и управление чертежами сборок, подчеркивая использование стандартных видов, таких как вид спереди, вид сверху и изометрический вид. В ней подробно описывается процесс создания спецификации материалов (B.O.M.), которая включает в себя важную информацию, такую ​​как номера деталей, описания и количества, а также объясняется, как использовать автоматические аннотации выносок для привязки компонентов к спецификации. Кроме того, в ней подчеркивается возможность изменять виды чертежей, добавлять аннотации для ясности и использовать альтернативные виды положения для демонстрации различных конфигураций сборки.",
                // French
                "Français": "Le chapitre sur les outils de base SOLIDWORKS 2020 pour les dessins d'assemblage couvre la création et la gestion des dessins d'assemblage, en mettant l'accent sur l'utilisation de vues standard telles que les vues de face, de dessus et isométriques. Il détaille le processus de génération d'une nomenclature (B.O.M.) qui comprend des informations essentielles telles que les numéros de pièces, les descriptions et les quantités, tout en expliquant comment utiliser les annotations automatiques de bulles pour lier les composants à la nomenclature. En outre, il met en évidence la possibilité de modifier les vues de dessin, d'ajouter des annotations pour plus de clarté et d'utiliser des vues de position alternatives pour présenter différentes configurations de l'assemblage.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 アセンブリ図面の基本ツールに関する章では、アセンブリ図面の作成と管理について説明し、正面図、平面図、アイソメ図などの標準ビューの使用に重点を置いています。部品番号、説明、数量などの重要な情報を含む部品表 (B.O.M.) を生成するプロセスを詳しく説明するとともに、自動バルーン注釈を使用してコンポーネントを B.O.M. にリンクする方法についても説明します。さらに、図面ビューを変更したり、わかりやすくするために注釈を追加したり、代替位置ビューを使用してアセンブリのさまざまな構成を紹介したりする機能についても説明します。",
                // Korean
                "한국인": "SOLIDWORKS 2020 조립 도면 기본 도구에 대한 장은 조립 도면의 생성 및 관리를 다루며, 정면, 상단 및 등각 투영과 같은 표준 뷰의 사용을 강조합니다. 부품 번호, 설명 및 수량과 같은 필수 정보를 포함하는 B.O.M.을 생성하는 프로세스를 자세히 설명하는 동시에 자동 풍선 주석을 사용하여 구성 요소를 B.O.M.에 연결하는 방법을 설명합니다. 또한 도면 뷰를 수정하고, 명확성을 위해 주석을 추가하고, 대체 위치 뷰를 사용하여 조립의 다양한 구성을 보여주는 기능을 강조합니다.",
                // Spanish
                "Español": "El capítulo sobre las herramientas básicas de SOLIDWORKS 2020 para dibujos de ensamblajes cubre la creación y administración de dibujos de ensamblajes, haciendo énfasis en el uso de vistas estándar como Frontal, Superior e Isométrica. Detalla el proceso de generación de una lista de materiales (B.O.M.) que incluye información esencial como números de piezas, descripciones y cantidades, al mismo tiempo que explica cómo usar anotaciones automáticas de globo para vincular componentes a la lista de materiales. Además, destaca la capacidad de modificar vistas de dibujo, agregar anotaciones para mayor claridad y utilizar vistas de posición alternativas para mostrar diferentes configuraciones del ensamblaje.",
                // Hindi
                "हिंदी": "असेंबली ड्रॉइंग के लिए SOLIDWORKS 2020 बेसिक टूल्स पर अध्याय असेंबली ड्रॉइंग के निर्माण और प्रबंधन को कवर करता है, जिसमें फ्रंट, टॉप और आइसोमेट्रिक जैसे मानक दृश्यों के उपयोग पर जोर दिया गया है। यह बिल ऑफ मटेरियल (B.O.M.) बनाने की प्रक्रिया का विवरण देता है जिसमें भाग संख्या, विवरण और मात्रा जैसी आवश्यक जानकारी शामिल होती है, साथ ही यह भी बताया जाता है कि घटकों को B.O.M. से जोड़ने के लिए स्वचालित बैलून एनोटेशन का उपयोग कैसे किया जाए। इसके अतिरिक्त, यह ड्राइंग दृश्यों को संशोधित करने, स्पष्टता के लिए एनोटेशन जोड़ने और असेंबली के विभिन्न कॉन्फ़िगरेशन को प्रदर्शित करने के लिए वैकल्पिक स्थिति दृश्यों का उपयोग करने की क्षमता पर प्रकाश डालता है।",
                // Portuguese
                "Português": "O capítulo Ferramentas básicas do SOLIDWORKS 2020 para desenhos de montagem aborda a criação e gestão de desenhos de montagem, enfatizando a utilização de vistas padrão, como a Frontal, a Superior e a Isométrica. Detalha o processo de geração de uma lista de materiais (B.O.M.) que inclui informações essenciais como números de peças, descrições e quantidades, ao mesmo tempo que explica como utilizar anotações automáticas em balão para ligar componentes à B.O.M. Além disso, destaca a capacidade de modificar vistas de desenho, adicionar anotações para maior clareza e utilizar vistas de posições alternativas para mostrar diferentes configurações da montagem.",
                // Bengali
                "বাংলা": "SOLIDWORKS 2020 বেসিক টুলস ফর অ্যাসেম্বলি ড্রয়িং-এর অধ্যায় অ্যাসেম্বলি ড্রয়িং তৈরি এবং পরিচালনাকে কভার করে, যা সামনে, টপ এবং আইসোমেট্রিকের মতো স্ট্যান্ডার্ড ভিউ ব্যবহার করার ওপর জোর দেয়। এটি একটি বিল অফ মেটেরিয়ালস (B.O.M.) তৈরি করার প্রক্রিয়ার বিবরণ দেয় যাতে অংশ সংখ্যা, বিবরণ এবং পরিমাণের মতো প্রয়োজনীয় তথ্য অন্তর্ভুক্ত থাকে, পাশাপাশি B.O.M-এর সাথে উপাদানগুলিকে লিঙ্ক করতে স্বয়ংক্রিয় বেলুন টীকাগুলি কীভাবে ব্যবহার করতে হয় তাও ব্যাখ্যা করে। অতিরিক্তভাবে, এটি অঙ্কন দৃশ্যগুলিকে সংশোধন করার, স্বচ্ছতার জন্য টীকা যোগ করার এবং সমাবেশের বিভিন্ন কনফিগারেশনগুলি প্রদর্শন করতে বিকল্প অবস্থানের দৃশ্যগুলি ব্যবহার করার ক্ষমতা হাইলাইট করে।",
                // Arabic
                "عَرَبِيّ": "يغطي الفصل الخاص بأدوات SOLIDWORKS 2020 الأساسية لرسومات التجميع إنشاء وإدارة رسومات التجميع، مع التركيز على استخدام وجهات النظر القياسية مثل Front وUp وIsometric. كما يوضح بالتفصيل عملية إنشاء قائمة المواد (B.O.M.) التي تتضمن معلومات أساسية مثل أرقام الأجزاء والأوصاف والكميات، مع شرح كيفية استخدام التعليقات التوضيحية التلقائية لربط المكونات بقائمة المواد. بالإضافة إلى ذلك، يسلط الضوء على القدرة على تعديل وجهات نظر الرسومات وإضافة التعليقات التوضيحية من أجل الوضوح والاستفادة من وجهات نظر المواضع البديلة لعرض تكوينات مختلفة للتجميع.",
                // Persian
                "فارسی": "فصل SOLIDWORKS 2020 Basic Tools for Assembly Drawings ایجاد و مدیریت نقشه های مونتاژ را پوشش می دهد و بر استفاده از نماهای استاندارد مانند جلو، بالا و ایزومتریک تأکید دارد. این جزئیات روند تولید یک لایحه مواد (B.O.M.) را که شامل اطلاعات ضروری مانند شماره قطعات، توضیحات و مقادیر است، توضیح می دهد، در حالی که نحوه استفاده از حاشیه نویسی خودکار بالون برای پیوند دادن اجزا به B.O.M را نیز توضیح می دهد. علاوه بر این، توانایی تغییر نماهای طراحی، اضافه کردن حاشیه نویسی برای وضوح، و استفاده از نماهای موقعیت جایگزین برای نمایش پیکربندی های مختلف مجموعه را برجسته می کند.",
            },
        },
        // 17
        {
            "ChapterName": "Drawing Views",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter covers the creation and management of various drawing views in SOLIDWORKS, including standard views, section views, detail views, and broken-out sections. It emphasizes the importance of linking dimensions and annotations to maintain consistency between the model and drawing views, allowing for automatic updates. Additionally, it discusses the editing of the sheet format, the use of the view palette for easy access to views, and the addition of crosshatching and geometric tolerances to enhance the clarity and precision of engineering drawings.",
                // German
                "Deutsch": "In diesem Kapitel wird die Erstellung und Verwaltung verschiedener Zeichenansichten in SOLIDWORKS behandelt, darunter Standardansichten, Schnittansichten, Detailansichten und Ausbruchsansichten. Es betont die Bedeutung der Verknüpfung von Bemaßungen und Anmerkungen, um die Konsistenz zwischen den Modell- und Zeichenansichten aufrechtzuerhalten und automatische Aktualisierungen zu ermöglichen. Darüber hinaus wird die Bearbeitung des Blattformats, die Verwendung der Ansichtspalette für den einfachen Zugriff auf Ansichten und das Hinzufügen von Schraffuren und geometrischen Toleranzen zur Verbesserung der Klarheit und Präzision von technischen Zeichnungen erläutert.",
                // Chinese
                "中国人": "本章介绍了如何在 SOLIDWORKS 中创建和管理各种工程图视图，包括标准视图、剖面视图、详细视图和分解剖面。它强调了链接尺寸和注释的重要性，以保持模型和工程图视图之间的一致性，从而实现自动更新。此外，它还讨论了图纸格式的编辑、视图调色板的使用，以及交叉影线和几何公差的添加，以提高工程图的清晰度和精度。",
                // Russian
                "Русский": "В этой главе рассматривается создание и управление различными видами чертежей в SOLIDWORKS, включая стандартные виды, виды сечений, подробные виды и вырванные сечения. В ней подчеркивается важность связывания размеров и аннотаций для поддержания согласованности между моделью и видами чертежей, что позволяет выполнять автоматические обновления. Кроме того, в ней обсуждается редактирование формата листа, использование палитры видов для легкого доступа к видам и добавление штриховки и геометрических допусков для повышения ясности и точности инженерных чертежей.",
                // French
                "Français": "Ce chapitre décrit la création et la gestion de différentes vues de mise en plan dans SOLIDWORKS, notamment les vues standard, les vues en coupe, les vues de détail et les coupes éclatées. Il souligne l'importance de lier les cotes et les annotations pour maintenir la cohérence entre le modèle et les vues de mise en plan, ce qui permet des mises à jour automatiques. En outre, il aborde la modification du format de feuille, l'utilisation de la palette de vues pour un accès facile aux vues et l'ajout de hachures et de tolérances géométriques pour améliorer la clarté et la précision des dessins techniques.",
                // Japanese
                "日本語": "この章では、標準ビュー、断面図、詳細図、部分断面など、SOLIDWORKS でのさまざまな図面ビューの作成と管理について説明します。寸法と注釈をリンクしてモデルと図面ビューの一貫性を維持し、自動更新を可能にすることの重要性を強調します。さらに、シート フォーマットの編集、ビューに簡単にアクセスするためのビュー パレットの使用、およびエンジニアリング図面の明瞭性と精度を高めるためのクロスハッチングと幾何公差の追加についても説明します。",
                // Korean
                "한국인": "이 장에서는 표준 뷰, 단면도, 상세도 및 분할 단면을 포함하여 SOLIDWORKS에서 다양한 도면 뷰를 만들고 관리하는 방법을 다룹니다. 모델과 도면 뷰 간의 일관성을 유지하고 자동 업데이트를 허용하기 위해 치수와 주석을 연결하는 것의 중요성을 강조합니다. 또한 시트 형식 편집, 뷰에 쉽게 액세스할 수 있도록 뷰 팔레트 사용, 엔지니어링 도면의 명확성과 정밀도를 향상시키기 위한 교차 해칭 및 기하 공차 추가에 대해 설명합니다.",
                // Spanish
                "Español": "Este capítulo cubre la creación y administración de varias vistas de dibujo en SOLIDWORKS, incluidas las vistas estándar, las vistas de sección, las vistas de detalle y las secciones divididas. Destaca la importancia de vincular cotas y anotaciones para mantener la coherencia entre las vistas del modelo y del dibujo, lo que permite actualizaciones automáticas. Además, analiza la edición del formato de hoja, el uso de la paleta de vistas para acceder fácilmente a las vistas y la adición de sombreado cruzado y tolerancias geométricas para mejorar la claridad y precisión de los dibujos de ingeniería.",
                // Hindi
                "हिंदी": "यह अध्याय SOLIDWORKS में विभिन्न ड्राइंग दृश्यों के निर्माण और प्रबंधन को कवर करता है, जिसमें मानक दृश्य, अनुभाग दृश्य, विवरण दृश्य और टूटे हुए अनुभाग शामिल हैं। यह मॉडल और ड्राइंग दृश्यों के बीच स्थिरता बनाए रखने के लिए आयामों और एनोटेशन को जोड़ने के महत्व पर जोर देता है, जिससे स्वचालित अपडेट की अनुमति मिलती है। इसके अतिरिक्त, यह शीट प्रारूप के संपादन, दृश्यों तक आसान पहुँच के लिए दृश्य पैलेट के उपयोग और इंजीनियरिंग ड्राइंग की स्पष्टता और सटीकता को बढ़ाने के लिए क्रॉसहैचिंग और ज्यामितीय सहनशीलता को जोड़ने पर चर्चा करता है।",
                // Portuguese
                "Português": "Este capítulo aborda a criação e gestão de diversas vistas de desenho no SOLIDWORKS, incluindo vistas padrão, vistas de corte, vistas detalhadas e secções quebradas. Realça a importância de ligar dimensões e anotações para manter a coerência entre as vistas do modelo e do desenho, permitindo atualizações automáticas. Além disso, aborda a edição do formato da folha, a utilização da paleta de vistas para facilitar o acesso às vistas e a adição de hachuras e tolerâncias geométricas para melhorar a clareza e a precisão dos desenhos de engenharia.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি SOLIDWORKS-এ স্ট্যান্ডার্ড ভিউ, সেকশন ভিউ, ডিটেইল ভিউ এবং ব্রেক-আউট সেকশন সহ বিভিন্ন ড্রয়িং ভিউ তৈরি এবং ম্যানেজমেন্ট কভার করে। এটি মডেল এবং অঙ্কন দৃশ্যের মধ্যে সামঞ্জস্য বজায় রাখতে মাত্রা এবং টীকা লিঙ্ক করার গুরুত্বের উপর জোর দেয়, স্বয়ংক্রিয় আপডেটের জন্য অনুমতি দেয়। উপরন্তু, এটি শীট বিন্যাসের সম্পাদনা, দৃশ্যগুলিতে সহজে অ্যাক্সেসের জন্য ভিউ প্যালেটের ব্যবহার এবং প্রকৌশলী অঙ্কনের স্পষ্টতা এবং নির্ভুলতা বাড়ানোর জন্য ক্রসহ্যাচিং এবং জ্যামিতিক সহনশীলতা যুক্ত করার বিষয়ে আলোচনা করে।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل إنشاء وإدارة العديد من وجهات النظر للرسم في SOLIDWORKS، بما في ذلك وجهات النظر القياسية ووجهات النظر المقطعية ووجهات النظر التفصيلية والأقسام المنفصلة. ويؤكد على أهمية ربط الأبعاد والتعليقات التوضيحية للحفاظ على الاتساق بين وجهات نظر النموذج والرسم، مما يسمح بالتحديثات التلقائية. بالإضافة إلى ذلك، يناقش تحرير تنسيق الورقة، واستخدام لوحة العرض لسهولة الوصول إلى وجهات النظر، وإضافة التظليل المتقاطع والتسامحات الهندسية لتعزيز وضوح ودقة الرسومات الهندسية.",
                // Persian
                "فارسی": "این فصل ایجاد و مدیریت نماهای طراحی مختلف در SOLIDWORKS، از جمله نماهای استاندارد، نمای بخش، نماهای جزئیات و بخش های شکسته را پوشش می دهد. بر اهمیت پیوند ابعاد و حاشیه نویسی برای حفظ سازگاری بین نماهای مدل و طراحی تاکید می کند و امکان به روز رسانی خودکار را فراهم می کند. علاوه بر این، ویرایش فرمت برگه، استفاده از پالت نمایش برای دسترسی آسان به نماها، و افزودن تلرانس های متقاطع و هندسی برای افزایش وضوح و دقت نقشه های مهندسی را مورد بحث قرار می دهد.",
            },
        },
        // 18
        {
            "ChapterName": "Detailing - Machined Block Details",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter of SOLIDWORKS 2020 Basic Tools - Detailing focuses on the process of detailing drawing views by incorporating dimensions, tolerances, surface finishes, and notes to ensure clarity and compliance with standards. It highlights the importance of maintaining associations between model and drawing dimensions using Model Items, and explains the significance of different dimension colors to indicate their types. The chapter also covers the use of tools such as Hole-Callout and Geometric Tolerance, while emphasizing adherence to dimensioning standards and the addition of necessary annotations for accurate representation of the design.",
                // German
                "Deutsch": "Dieses Kapitel von SOLIDWORKS 2020 Basic Tools – Detaillierung konzentriert sich auf den Prozess der Detaillierung von Zeichnungsansichten durch Einbeziehung von Bemaßungen, Toleranzen, Oberflächenbeschaffenheiten und Anmerkungen, um Klarheit und Einhaltung von Standards sicherzustellen. Es hebt die Bedeutung der Aufrechterhaltung von Verknüpfungen zwischen Modell- und Zeichnungsbemaßungen mithilfe von Modellelementen hervor und erklärt die Bedeutung verschiedener Bemaßungsfarben zur Kennzeichnung ihrer Typen. Das Kapitel behandelt auch die Verwendung von Tools wie „Lochbeschriftung“ und „Geometrische Toleranz“, wobei die Einhaltung von Bemaßungsstandards und das Hinzufügen der erforderlichen Anmerkungen für eine genaue Darstellung des Entwurfs hervorgehoben werden.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 基础工具 - 详图的这一章重点介绍了通过合并尺寸、公差、表面光洁度和注释来详细绘制工程图视图的过程，以确保清晰度和符合标准。它强调了使用模型项目保持模型和工程图尺寸之间关联的重要性，并解释了不同尺寸颜色指示其类型的意义。本章还介绍了孔标注和几何公差等工具的使用，同时强调遵守尺寸标注标准并添加必要的注释以准确表示设计。",
                // Russian
                "Русский": "В этой главе SOLIDWORKS 2020 Basic Tools - Detailing основное внимание уделяется процессу детализации видов чертежей путем включения размеров, допусков, отделки поверхности и примечаний для обеспечения ясности и соответствия стандартам. В ней подчеркивается важность поддержания связей между размерами модели и чертежа с использованием элементов модели и объясняется значение различных цветов размеров для обозначения их типов. В главе также рассматривается использование таких инструментов, как Hole-Callout и Geometric Tolerance, при этом подчеркивается соблюдение стандартов размеров и добавление необходимых аннотаций для точного представления проекта.",
                // French
                "Français": "Ce chapitre de SOLIDWORKS 2020 Basic Tools - Detailing se concentre sur le processus de détaillage des vues de dessin en incorporant des cotes, des tolérances, des finitions de surface et des notes pour garantir la clarté et la conformité aux normes. Il souligne l'importance de conserver les associations entre les cotes du modèle et celles du dessin à l'aide des éléments de modèle et explique l'importance des différentes couleurs de cote pour indiquer leurs types. Le chapitre couvre également l'utilisation d'outils tels que Hole-Callout et Geometric Tolerance, tout en mettant l'accent sur le respect des normes de cotation et l'ajout des annotations nécessaires pour une représentation précise de la conception.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 基本ツール - 詳細作成のこの章では、寸法、公差、表面仕上げ、注記を組み込んで図面ビューを詳細化し、明確さと標準への準拠を確保するプロセスに焦点を当てています。モデル アイテムを使用してモデルと図面寸法の関連性を維持することの重要性を強調し、寸法の種類を示すさまざまな寸法色の重要性について説明します。この章では、穴吹き出しや幾何公差などのツールの使用についても取り上げ、寸法標準の遵守と、設計を正確に表現するために必要な注釈の追加を強調しています。",
                // Korean
                "한국인": "SOLIDWORKS 2020 기본 도구 - 디테일링의 이 장에서는 치수, 공차, 표면 마감 및 메모를 통합하여 도면 뷰를 디테일링하는 프로세스에 중점을 두고 명확성과 표준 준수를 보장합니다. 모델 항목을 사용하여 모델과 도면 치수 간의 연관성을 유지하는 것의 중요성을 강조하고, 유형을 나타내는 다양한 치수 색상의 중요성을 설명합니다. 또한 이 장에서는 Hole-Callout 및 Geometric Tolerance와 같은 도구의 사용에 대해 다루며, 치수 표준 준수와 설계의 정확한 표현을 위한 필요한 주석 추가를 강조합니다.",
                // Spanish
                "Español": "Este capítulo de Herramientas básicas de SOLIDWORKS 2020: detalles se centra en el proceso de detalle de vistas de dibujo mediante la incorporación de dimensiones, tolerancias, acabados de superficie y notas para garantizar la claridad y el cumplimiento de los estándares. Destaca la importancia de mantener asociaciones entre las dimensiones del modelo y del dibujo mediante elementos del modelo y explica la importancia de los diferentes colores de dimensión para indicar sus tipos. El capítulo también cubre el uso de herramientas como Llamada de orificio y Tolerancia geométrica, al tiempo que enfatiza el cumplimiento de los estándares de dimensionamiento y la adición de las anotaciones necesarias para una representación precisa del diseño.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 बेसिक टूल्स - डिटेलिंग का यह अध्याय स्पष्टता और मानकों के अनुपालन को सुनिश्चित करने के लिए आयाम, सहनशीलता, सतह की फिनिश और नोट्स को शामिल करके ड्राइंग दृश्यों को विस्तृत करने की प्रक्रिया पर केंद्रित है। यह मॉडल आइटम का उपयोग करके मॉडल और ड्राइंग आयामों के बीच संबंधों को बनाए रखने के महत्व पर प्रकाश डालता है, और उनके प्रकारों को इंगित करने के लिए विभिन्न आयाम रंगों के महत्व को समझाता है। अध्याय में होल-कॉलआउट और जियोमेट्रिक टॉलरेंस जैसे उपकरणों के उपयोग को भी शामिल किया गया है, जबकि आयाम मानकों के पालन और डिजाइन के सटीक प्रतिनिधित्व के लिए आवश्यक एनोटेशन को जोड़ने पर जोर दिया गया है।",
                // Portuguese
                "Português": "Este capítulo de Ferramentas básicas do SOLIDWORKS 2020 - Detalhamento centra-se no processo de detalhamento de vistas de desenhos, incorporando dimensões, tolerâncias, acabamentos de superfície e notas para garantir a clareza e a conformidade com as normas. Realça a importância de manter associações entre as dimensões do modelo e do desenho utilizando Itens de Modelo e explica a importância das diferentes cores das dimensões para indicar os seus tipos. O capítulo aborda também a utilização de ferramentas como o Hole-Callout e a Geometric Tolerance, ao mesmo tempo que enfatiza a adesão aos padrões de dimensionamento e a adição de anotações necessárias para uma representação precisa do projeto.",
                // Bengali
                "বাংলা": "SOLIDWORKS 2020 বেসিক টুলস-এর এই অধ্যায় - বিশদ বিবরণ মান, সহনশীলতা, পৃষ্ঠের সমাপ্তি এবং মানগুলির সাথে স্বচ্ছতা এবং সম্মতি নিশ্চিত করতে নোটগুলিকে অন্তর্ভুক্ত করে অঙ্কন দৃশ্যের বিশদ বিবরণের প্রক্রিয়ার উপর ফোকাস করে। এটি মডেল আইটেম ব্যবহার করে মডেল এবং অঙ্কন মাত্রার মধ্যে সম্পর্ক বজায় রাখার গুরুত্ব তুলে ধরে, এবং তাদের ধরন নির্দেশ করতে বিভিন্ন মাত্রার রঙের তাৎপর্য ব্যাখ্যা করে। অধ্যায়টি হোল-কলআউট এবং জ্যামিতিক সহনশীলতার মতো সরঞ্জামগুলির ব্যবহারকেও কভার করে, যেখানে মাত্রার মানগুলি মেনে চলার উপর জোর দেওয়া হয় এবং নকশার সঠিক উপস্থাপনের জন্য প্রয়োজনীয় টীকা যোগ করা হয়।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل من SOLIDWORKS 2020 Basic Tools - Detailing على عملية تفصيل مناظر الرسم من خلال دمج الأبعاد والتسامحات والتشطيبات السطحية والملاحظات لضمان الوضوح والامتثال للمعايير. ويسلط الضوء على أهمية الحفاظ على الارتباطات بين أبعاد النموذج والرسم باستخدام عناصر النموذج، ويشرح أهمية ألوان الأبعاد المختلفة للإشارة إلى أنواعها. ويغطي الفصل أيضًا استخدام أدوات مثل Hole-Callout وGeometric Tolerance، مع التأكيد على الالتزام بمعايير تحديد الأبعاد وإضافة التعليقات التوضيحية اللازمة لتمثيل التصميم بدقة.",
                // Persian
                "فارسی": "این فصل از SOLIDWORKS 2020 Basic Tools - Detailing بر فرآیند جزئیات نماهای طراحی با ترکیب ابعاد، تلورانس ها، پوشش های سطحی و یادداشت ها برای اطمینان از وضوح و انطباق با استانداردها تمرکز می کند. اهمیت حفظ ارتباط بین ابعاد مدل و طراحی با استفاده از آیتم های مدل را برجسته می کند و اهمیت رنگ های ابعاد مختلف را برای نشان دادن انواع آنها توضیح می دهد. این فصل همچنین استفاده از ابزارهایی مانند Hole-Callout و Geometric Tolerance را پوشش می‌دهد، در حالی که بر پایبندی به استانداردهای ابعاد و افزودن حاشیه‌نویسی‌های لازم برای نمایش دقیق طرح تأکید می‌کند.",
            },
        },
        // 19
        {
            "ChapterName": "Sheet Metal Drawings",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on SOLIDWORKS 2020 Basic Tools for Sheet Metal Drawings covers the essential features for creating and managing drawings of sheet metal parts. It explains how to utilize the flat pattern view, create standard and projected views, and add dimensions and annotations effectively. Additionally, it highlights the 3D drawing view mode for selecting obscured edges and the use of eDrawings for sharing designs with markup options, enhancing collaboration and clarity in the design process.",
                // German
                "Deutsch": "Das Kapitel „Grundlegende Werkzeuge für Blechzeichnungen in SOLIDWORKS 2020“ behandelt die wesentlichen Funktionen zum Erstellen und Verwalten von Zeichnungen von Blechteilen. Es erklärt, wie Sie die Abwicklungsansicht nutzen, Standard- und projizierte Ansichten erstellen und Bemaßungen und Anmerkungen effektiv hinzufügen. Darüber hinaus wird der 3D-Zeichnungsansichtsmodus zum Auswählen verdeckter Kanten und die Verwendung von eDrawings zum Teilen von Designs mit Markierungsoptionen hervorgehoben, was die Zusammenarbeit und Klarheit im Designprozess verbessert.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 钣金工程图基本工具一章介绍了创建和管理钣金零件工程图的基本功能。它解释了如何利用平面图视图、创建标准和投影视图以及有效地添加尺寸和注释。此外，它还重点介绍了用于选择遮挡边缘的 3D 工程图视图模式以及使用 eDrawings 共享带有标记选项的设计，从而增强了设计过程中的协作和清晰度。",
                // Russian
                "Русский": "Глава SOLIDWORKS 2020 Basic Tools for Sheet Metal Drawings охватывает основные функции для создания и управления чертежами деталей из листового металла. В ней объясняется, как использовать вид плоской модели, создавать стандартные и проекционные виды, а также эффективно добавлять размеры и аннотации. Кроме того, в ней освещается режим просмотра 3D-чертежа для выбора скрытых кромок и использование eDrawings для обмена проектами с параметрами разметки, что улучшает совместную работу и ясность в процессе проектирования.",
                // French
                "Français": "Le chapitre sur les outils de base de SOLIDWORKS 2020 pour les dessins de tôlerie couvre les fonctionnalités essentielles pour la création et la gestion des dessins de pièces de tôlerie. Il explique comment utiliser la vue de modèle plat, créer des vues standard et projetées et ajouter des cotes et des annotations de manière efficace. En outre, il met en évidence le mode de vue de dessin 3D pour sélectionner les bords masqués et l'utilisation d'eDrawings pour partager des conceptions avec des options de balisage, améliorant ainsi la collaboration et la clarté du processus de conception.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 板金図面の基本ツールに関する章では、板金部品の図面を作成および管理するための重要な機能について説明します。フラット パターン ビューの利用方法、標準ビューと投影ビューの作成方法、寸法と注釈の効果的な追加方法について説明します。さらに、隠れたエッジを選択するための 3D 図面ビュー モードと、マークアップ オプションを使用して設計を共有し、設計プロセスにおけるコラボレーションと明確さを向上させる eDrawings の使用についても説明します。",
                // Korean
                "한국인": "SOLIDWORKS 2020 판금 도면을 위한 기본 도구에 대한 장은 판금 파트의 도면을 만들고 관리하는 데 필수적인 기능을 다룹니다. 플랫 패턴 뷰를 활용하고, 표준 및 투영 뷰를 만들고, 치수와 주석을 효과적으로 추가하는 방법을 설명합니다. 또한, 가려진 모서리를 선택하기 위한 3D 도면 뷰 모드와 마크업 옵션과 함께 설계를 공유하고 설계 프로세스에서 협업과 명확성을 향상시키기 위한 eDrawings의 사용을 강조합니다.",
                // Spanish
                "Español": "El capítulo sobre las herramientas básicas de SOLIDWORKS 2020 para dibujos de chapa metálica cubre las características esenciales para crear y administrar dibujos de piezas de chapa metálica. Explica cómo utilizar la vista de patrón plano, crear vistas estándar y proyectadas, y agregar dimensiones y anotaciones de manera efectiva. Además, destaca el modo de vista de dibujo 3D para seleccionar bordes ocultos y el uso de eDrawings para compartir diseños con opciones de marcado, lo que mejora la colaboración y la claridad en el proceso de diseño.",
                // Hindi
                "हिंदी": "शीट मेटल ड्रॉइंग के लिए SOLIDWORKS 2020 बेसिक टूल्स पर अध्याय शीट मेटल भागों के ड्रॉइंग बनाने और प्रबंधित करने के लिए आवश्यक विशेषताओं को शामिल करता है। यह बताता है कि फ्लैट पैटर्न दृश्य का उपयोग कैसे करें, मानक और प्रक्षेपित दृश्य बनाएं, और प्रभावी ढंग से आयाम और एनोटेशन जोड़ें। इसके अतिरिक्त, यह अस्पष्ट किनारों का चयन करने के लिए 3D ड्राइंग व्यू मोड और मार्कअप विकल्पों के साथ डिज़ाइन साझा करने के लिए eDrawings के उपयोग को हाइलाइट करता है, जिससे डिज़ाइन प्रक्रिया में सहयोग और स्पष्टता बढ़ती है।",
                // Portuguese
                "Português": "O capítulo Ferramentas básicas do SOLIDWORKS 2020 para desenhos de chapa metálica aborda as características essenciais para criar e gerir desenhos de peças de chapa metálica. Explica como utilizar a vista de planificação, criar vistas padrão e projetadas e adicionar cotas e anotações de forma eficaz. Além disso, destaca o modo de visualização de desenho 3D para selecionar margens obscuras e a utilização do eDrawings para partilhar projetos com opções de marcação, melhorando a colaboração e a clareza no processo de design.",
                // Bengali
                "বাংলা": "সলিডওয়ার্কস 2020 শিট মেটাল ড্রয়িংয়ের জন্য বেসিক টুলস-এর অধ্যায়ে শীট মেটাল পার্টসগুলির অঙ্কন তৈরি এবং পরিচালনা করার জন্য প্রয়োজনীয় বৈশিষ্ট্যগুলিকে কভার করে। এটি ব্যাখ্যা করে কিভাবে ফ্ল্যাট প্যাটার্ন ভিউ ব্যবহার করতে হয়, স্ট্যান্ডার্ড এবং প্রজেক্টেড ভিউ তৈরি করতে হয় এবং কার্যকরভাবে মাত্রা এবং টীকা যোগ করতে হয়। অতিরিক্তভাবে, এটি অস্পষ্ট প্রান্তগুলি নির্বাচন করার জন্য 3D অঙ্কন দৃশ্য মোড এবং মার্কআপ বিকল্পগুলির সাথে ডিজাইনগুলি ভাগ করার জন্য ইড্রয়িংগুলির ব্যবহার, নকশা প্রক্রিয়াতে সহযোগিতা এবং স্বচ্ছতা বৃদ্ধি করে হাইলাইট করে৷",
                // Arabic
                "عَرَبِيّ": "يغطي الفصل الخاص بأدوات SOLIDWORKS 2020 الأساسية لرسومات الصفائح المعدنية الميزات الأساسية لإنشاء وإدارة رسومات أجزاء الصفائح المعدنية. ويشرح كيفية الاستفادة من عرض النمط المسطح وإنشاء مناظر قياسية ومتوقعة وإضافة الأبعاد والتعليقات التوضيحية بشكل فعال. بالإضافة إلى ذلك، يسلط الضوء على وضع عرض الرسم ثلاثي الأبعاد لتحديد الحواف غير الواضحة واستخدام eDrawings لمشاركة التصميمات مع خيارات الترميز، وتعزيز التعاون والوضوح في عملية التصميم.",
                // Persian
                "فارسی": "فصل SOLIDWORKS 2020 Basic Tools for Sheet Metal Drawings ویژگی های ضروری برای ایجاد و مدیریت نقشه های قطعات ورق فلزی را پوشش می دهد. نحوه استفاده از نمای الگوی مسطح، ایجاد نماهای استاندارد و پیش بینی شده و افزودن ابعاد و حاشیه نویسی به طور موثر را توضیح می دهد. علاوه بر این، حالت نمای طراحی سه بعدی را برای انتخاب لبه‌های مبهم و استفاده از طرح‌های الکترونیکی برای اشتراک‌گذاری طرح‌ها با گزینه‌های نشانه‌گذاری، افزایش همکاری و وضوح در فرآیند طراحی برجسته می‌کند.",
            },
        },
        // 20
        {
            "ChapterName": "Configurations",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on Configurations in SOLIDWORKS 2020 explains how to create and manage multiple variations of parts and assemblies within a single document, allowing for efficient design modifications. It details the use of configurations to adjust dimensions, suppress features, and manage assembly components, as well as how to display these variations in drawing views. The chapter provides step-by-step instructions for creating configurations, modifying parameters, and saving work, emphasizing the convenience of managing families of parts and assemblies.",
                // German
                "Deutsch": "Das Kapitel zu Konfigurationen in SOLIDWORKS 2020 erläutert, wie Sie mehrere Varianten von Teilen und Baugruppen in einem einzigen Dokument erstellen und verwalten, was effiziente Konstruktionsänderungen ermöglicht. Es beschreibt ausführlich die Verwendung von Konfigurationen zum Anpassen von Abmessungen, Unterdrücken von Features und Verwalten von Baugruppenkomponenten sowie die Anzeige dieser Varianten in Zeichnungsansichten. Das Kapitel enthält schrittweise Anweisungen zum Erstellen von Konfigurationen, Ändern von Parametern und Speichern von Arbeit und betont die Benutzerfreundlichkeit der Verwaltung von Teile- und Baugruppenfamilien.",
                // Chinese
                "中国人": "SOLIDWORKS 2020 中的“配置”一章介绍了如何在单个文档中创建和管理零件和装配体的多个变体，从而实现高效的设计修改。它详细介绍了如何使用配置来调整尺寸、抑制特征和管理装配体组件，以及如何在工程图视图中显示这些变体。本章提供了创建配置、修改参数和保存工作的分步说明，强调了管理零件和装配体系列的便利性。",
                // Russian
                "Русский": "Глава о конфигурациях в SOLIDWORKS 2020 объясняет, как создавать и управлять несколькими вариациями деталей и сборок в одном документе, что позволяет эффективно вносить изменения в конструкцию. В ней подробно описывается использование конфигураций для корректировки размеров, подавления элементов и управления компонентами сборки, а также как отображать эти вариации в чертежных видах. В главе приводятся пошаговые инструкции по созданию конфигураций, изменению параметров и сохранению работы, подчеркивая удобство управления семействами деталей и сборок.",
                // French
                "Français": "Le chapitre sur les configurations dans SOLIDWORKS 2020 explique comment créer et gérer plusieurs variantes de pièces et d'assemblages au sein d'un même document, ce qui permet des modifications de conception efficaces. Il détaille l'utilisation des configurations pour ajuster les cotes, supprimer les fonctions et gérer les composants d'assemblage, ainsi que la manière d'afficher ces variantes dans les vues de mise en plan. Le chapitre fournit des instructions étape par étape pour créer des configurations, modifier des paramètres et enregistrer le travail, en mettant l'accent sur la commodité de la gestion des familles de pièces et d'assemblages.",
                // Japanese
                "日本語": "SOLIDWORKS 2020 のコンフィギュレーションに関する章では、1 つのドキュメント内で複数のバリエーションのパーツとアセンブリを作成および管理し、効率的な設計変更を可能にする方法について説明します。コンフィギュレーションを使用して寸法を調整し、フィーチャを抑制し、アセンブリ コンポーネントを管理する方法と、図面ビューでこれらのバリエーションを表示する方法について詳しく説明します。この章では、コンフィギュレーションの作成、パラメータの変更、作業の保存に関する手順を段階的に説明し、パーツとアセンブリのファミリを管理する利便性を強調しています。",
                // Korean
                "한국인": "SOLIDWORKS 2020의 구성에 대한 장은 단일 문서 내에서 여러 파트와 어셈블리 변형을 만들고 관리하는 방법을 설명하여 효율적인 설계 수정을 가능하게 합니다. 치수를 조정하고, 피처를 억제하고, 어셈블리 구성 요소를 관리하는 데 구성을 사용하는 방법과 이러한 변형을 도면 뷰에 표시하는 방법을 자세히 설명합니다. 이 장에서는 구성을 만들고, 매개변수를 수정하고, 작업을 저장하는 단계별 지침을 제공하며, 파트와 어셈블리 패밀리를 관리하는 편의성을 강조합니다.",
                // Spanish
                "Español": "El capítulo sobre Configuraciones en SOLIDWORKS 2020 explica cómo crear y administrar múltiples variaciones de piezas y ensamblajes dentro de un solo documento, lo que permite realizar modificaciones de diseño eficientes. Detalla el uso de configuraciones para ajustar dimensiones, suprimir operaciones y administrar componentes de ensamblaje, así como también cómo mostrar estas variaciones en vistas de dibujo. El capítulo proporciona instrucciones paso a paso para crear configuraciones, modificar parámetros y guardar trabajo, haciendo hincapié en la conveniencia de administrar familias de piezas y ensamblajes.",
                // Hindi
                "हिंदी": "SOLIDWORKS 2020 में कॉन्फ़िगरेशन पर अध्याय बताता है कि एक ही दस्तावेज़ में भागों और असेंबली के कई रूपों को कैसे बनाया और प्रबंधित किया जाए, जिससे कुशल डिज़ाइन संशोधनों की अनुमति मिलती है। यह आयामों को समायोजित करने, सुविधाओं को दबाने और असेंबली घटकों को प्रबंधित करने के लिए कॉन्फ़िगरेशन के उपयोग के साथ-साथ ड्राइंग दृश्यों में इन रूपों को प्रदर्शित करने के तरीके के बारे में विस्तार से बताता है। अध्याय कॉन्फ़िगरेशन बनाने, मापदंडों को संशोधित करने और काम को सहेजने के लिए चरण-दर-चरण निर्देश प्रदान करता है, भागों और असेंबली के परिवारों के प्रबंधन की सुविधा पर जोर देता है।",
                // Portuguese
                "Português": "O capítulo Configurações no SOLIDWORKS 2020 explica como criar e gerir diversas variações de peças e montagens num único documento, permitindo modificações eficientes no projeto. Detalha a utilização de definições para ajustar dimensões, suprimir características e gerir componentes de montagem, bem como exibir essas variações nas vistas de desenho. O capítulo fornece instruções passo a passo para criar definições, modificar parâmetros e guardar trabalho, enfatizando a conveniência de gerir famílias de peças e montagens.",
                // Bengali
                "বাংলা": "SOLIDWORKS 2020-এ কনফিগারেশনের অধ্যায়টি ব্যাখ্যা করে যে কীভাবে একটি একক নথির মধ্যে অংশ এবং সমাবেশগুলির একাধিক বৈচিত্র তৈরি এবং পরিচালনা করতে হয়, দক্ষ নকশা পরিবর্তনের অনুমতি দেয়। এটি মাত্রাগুলি সামঞ্জস্য করতে, বৈশিষ্ট্যগুলিকে দমন করতে এবং সমাবেশের উপাদানগুলি পরিচালনা করতে কনফিগারেশনের ব্যবহারের বিবরণ দেয়, পাশাপাশি অঙ্কন দৃশ্যগুলিতে এই বৈচিত্রগুলি কীভাবে প্রদর্শন করা যায়। অধ্যায়টি কনফিগারেশন তৈরি, পরামিতি পরিবর্তন এবং কাজ সংরক্ষণ করার জন্য ধাপে ধাপে নির্দেশাবলী প্রদান করে, অংশ এবং সমাবেশগুলির পরিবার পরিচালনার সুবিধার উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يوضح الفصل الخاص بالتكوينات في SOLIDWORKS 2020 كيفية إنشاء وإدارة أشكال متعددة من الأجزاء والتجمعات داخل مستند واحد، مما يسمح بإجراء تعديلات تصميمية فعّالة. كما يوضح استخدام التكوينات لضبط الأبعاد، وإلغاء الميزات، وإدارة مكونات التجميع، بالإضافة إلى كيفية عرض هذه الاختلافات في عروض الرسم. يوفر الفصل تعليمات خطوة بخطوة لإنشاء التكوينات، وتعديل المعلمات، وتوفير العمل، مع التأكيد على راحة إدارة مجموعات الأجزاء والتجمعات.",
                // Persian
                "فارسی": "فصل پیکربندی‌ها در SOLIDWORKS 2020 نحوه ایجاد و مدیریت انواع مختلف قطعات و مجموعه‌ها در یک سند را توضیح می‌دهد که امکان اصلاحات طراحی کارآمد را فراهم می‌کند. جزئیات استفاده از پیکربندی‌ها برای تنظیم ابعاد، حذف ویژگی‌ها، و مدیریت اجزای مونتاژ، و همچنین نحوه نمایش این تغییرات در نماهای طراحی. این فصل دستورالعمل های گام به گام را برای ایجاد تنظیمات، اصلاح پارامترها و صرفه جویی در کار، با تاکید بر راحتی مدیریت خانواده قطعات و مجموعه ها ارائه می دهد.",
            },
        },
        // 21
        {
            "ChapterName": "Design Tables",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter Design Tables covers the functionality and application of design tables in managing part, assembly, and drawing parameters. It emphasizes the importance of key parameters such as part number, comments, and display states, while detailing the process of creating design tables, including copying documents, inserting tables, and transferring dimensions to Excel for calculations. Additionally, it highlights the integration of design tables with assembly components, allowing for efficient control of properties and configurations, culminating in practical exercises for creating and customizing design tables and drawings.",
                // German
                "Deutsch": "Das Kapitel Konstruktionstabellen behandelt die Funktionalität und Anwendung von Konstruktionstabellen bei der Verwaltung von Teile-, Baugruppen- und Zeichnungsparametern. Es betont die Bedeutung von Schlüsselparametern wie Teilenummer, Kommentaren und Anzeigezuständen und beschreibt detailliert den Prozess der Erstellung von Konstruktionstabellen, einschließlich des Kopierens von Dokumenten, Einfügens von Tabellen und Übertragens von Abmessungen in Excel für Berechnungen. Darüber hinaus wird die Integration von Konstruktionstabellen mit Baugruppenkomponenten hervorgehoben, wodurch eine effiziente Kontrolle von Eigenschaften und Konfigurationen ermöglicht wird. Abschließend werden praktische Übungen zum Erstellen und Anpassen von Konstruktionstabellen und Zeichnungen gegeben.",
                // Chinese
                "中国人": "设计表一章介绍了设计表在管理零件、装配体和绘图参数中的功能和应用。它强调了零件编号、注释和显示状态等关键参数的重要性，同时详细介绍了创建设计表的过程，包括复制文档、插入表格以及将尺寸传输到 Excel 进行计算。此外，它还强调了设计表与装配体组件的集成，从而可以高效控制属性和配置，最后介绍了创建和自定义设计表和绘图的实践练习。",
                // Russian
                "Русский": "Глава Таблицы проектирования охватывает функциональность и применение таблиц проектирования в управлении параметрами деталей, сборок и чертежей. В ней подчеркивается важность ключевых параметров, таких как номер детали, комментарии и состояния отображения, а также подробно описывается процесс создания таблиц проектирования, включая копирование документов, вставку таблиц и передачу размеров в Excel для расчетов. Кроме того, в ней подчеркивается интеграция таблиц проектирования с компонентами сборки, что позволяет эффективно управлять свойствами и конфигурациями, что завершается практическими упражнениями по созданию и настройке таблиц проектирования и чертежей.",
                // French
                "Français": "Le chapitre Tables de conception couvre la fonctionnalité et l'application des tables de conception dans la gestion des paramètres de pièces, d'assemblages et de dessins. Il met l'accent sur l'importance des paramètres clés tels que le numéro de pièce, les commentaires et les états d'affichage, tout en détaillant le processus de création de tables de conception, y compris la copie de documents, l'insertion de tables et le transfert des dimensions vers Excel pour les calculs. En outre, il met en évidence l'intégration des tables de conception avec les composants d'assemblage, permettant un contrôle efficace des propriétés et des configurations, aboutissant à des exercices pratiques de création et de personnalisation de tables et de dessins de conception.",
                // Japanese
                "日本語": "「設計テーブル」の章では、部品、アセンブリ、および図面パラメータの管理における設計テーブルの機能と適用について説明します。部品番号、コメント、表示状態などの主要なパラメータの重要性を強調しながら、ドキュメントのコピー、テーブルの挿入、計算用の Excel への寸法の転送など、設計テーブルの作成プロセスを詳しく説明します。さらに、設計テーブルとアセンブリ コンポーネントの統合を強調し、プロパティと構成を効率的に制御できるようにして、設計テーブルと図面の作成とカスタマイズの実践的な演習を行います。",
                // Korean
                "한국인": "Design Tables 챕터에서는 파트, 어셈블리, 도면 매개변수를 관리하는 데 있어서 설계 테이블의 기능과 응용 프로그램을 다룹니다. 파트 번호, 주석, 디스플레이 상태와 같은 주요 매개변수의 중요성을 강조하는 동시에 문서 복사, 테이블 삽입, 계산을 위해 치수를 Excel로 전송하는 것을 포함하여 설계 테이블을 만드는 프로세스를 자세히 설명합니다. 또한 설계 테이블과 어셈블리 구성 요소를 통합하여 속성과 구성을 효율적으로 제어하는 ​​방법을 강조하고 설계 테이블과 도면을 만들고 사용자 정의하기 위한 실제 연습으로 마무리합니다.",
                // Spanish
                "Español": "El capítulo Tablas de diseño cubre la funcionalidad y aplicación de las tablas de diseño en la gestión de parámetros de piezas, conjuntos y dibujos. Destaca la importancia de parámetros clave como el número de pieza, los comentarios y los estados de visualización, al tiempo que detalla el proceso de creación de tablas de diseño, incluida la copia de documentos, la inserción de tablas y la transferencia de dimensiones a Excel para realizar cálculos. Además, destaca la integración de las tablas de diseño con los componentes de conjunto, lo que permite un control eficiente de las propiedades y configuraciones, y culmina con ejercicios prácticos para crear y personalizar tablas de diseño y dibujos.",
                // Hindi
                "हिंदी": "डिज़ाइन टेबल्स अध्याय भाग, असेंबली और ड्राइंग मापदंडों के प्रबंधन में डिज़ाइन टेबल की कार्यक्षमता और अनुप्रयोग को कवर करता है। यह भाग संख्या, टिप्पणियाँ और डिस्प्ले स्थिति जैसे प्रमुख मापदंडों के महत्व पर जोर देता है, जबकि दस्तावेज़ों की प्रतिलिपि बनाने, तालिकाओं को सम्मिलित करने और गणनाओं के लिए आयामों को एक्सेल में स्थानांतरित करने सहित डिज़ाइन टेबल बनाने की प्रक्रिया का विवरण देता है। इसके अतिरिक्त, यह असेंबली घटकों के साथ डिज़ाइन टेबल के एकीकरण पर प्रकाश डालता है, जिससे गुणों और विन्यासों के कुशल नियंत्रण की अनुमति मिलती है, जो डिज़ाइन टेबल और ड्राइंग बनाने और उन्हें अनुकूलित करने के लिए व्यावहारिक अभ्यासों में परिणत होता है।",
                // Portuguese
                "Português": "O capítulo Tabelas de projeto aborda a funcionalidade e a aplicação das tabelas de projeto na gestão de parâmetros de peças, montagens e desenhos. Realça a importância dos principais parâmetros, como o número de peça, os comentários e os estados de visualização, ao mesmo tempo que detalha o processo de criação de tabelas de projeto, incluindo a cópia de documentos, a inserção de tabelas e a transferência de dimensões para Excel para cálculos. Adicionalmente, destaca a integração de tabelas de projeto com componentes de montagem, permitindo um controlo eficiente das propriedades e configurações, culminando em exercícios práticos de criação e personalização de tabelas e desenhos de projeto.",
                // Bengali
                "বাংলা": "অধ্যায় ডিজাইন টেবিল অংশ, সমাবেশ, এবং অঙ্কন পরামিতি পরিচালনার ক্ষেত্রে নকশা টেবিলের কার্যকারিতা এবং প্রয়োগকে কভার করে। এটি নথিগুলি অনুলিপি করা, টেবিল সন্নিবেশ করা এবং গণনার জন্য এক্সেলে মাত্রা স্থানান্তর সহ ডিজাইন টেবিল তৈরির প্রক্রিয়ার বিশদ বিবরণ দেওয়ার সময় অংশ নম্বর, মন্তব্য এবং প্রদর্শনের অবস্থার মতো মূল প্যারামিটারগুলির গুরুত্বের উপর জোর দেয়। অতিরিক্তভাবে, এটি অ্যাসেম্বলি উপাদানগুলির সাথে ডিজাইন টেবিলের একীকরণকে হাইলাইট করে, যা বৈশিষ্ট্য এবং কনফিগারেশনগুলির দক্ষ নিয়ন্ত্রণের জন্য অনুমতি দেয়, ডিজাইন টেবিল এবং অঙ্কনগুলি তৈরি এবং কাস্টমাইজ করার জন্য ব্যবহারিক অনুশীলনে পরিণত হয়।",
                // Arabic
                "عَرَبِيّ": "يغطي الفصل 'جداول التصميم' وظائف جداول التصميم وتطبيقها في إدارة معلمات الأجزاء والتجميع والرسم. ويؤكد على أهمية المعلمات الرئيسية مثل رقم الجزء والتعليقات وحالات العرض، مع تفصيل عملية إنشاء جداول التصميم، بما في ذلك نسخ المستندات وإدراج الجداول ونقل الأبعاد إلى Excel للحسابات. بالإضافة إلى ذلك، يسلط الضوء على تكامل جداول التصميم مع مكونات التجميع، مما يسمح بالتحكم الفعّال في الخصائص والتكوينات، ويتوج ذلك بتمارين عملية لإنشاء وتخصيص جداول التصميم والرسومات.",
                // Persian
                "فارسی": "فصل طراحی جداول عملکرد و کاربرد جداول طراحی را در مدیریت پارامترهای قطعه، مونتاژ و ترسیم پوشش می دهد. بر اهمیت پارامترهای کلیدی مانند شماره قطعه، نظرات و حالت های نمایش تاکید می کند، در حالی که جزئیات فرآیند ایجاد جداول طراحی، از جمله کپی کردن اسناد، درج جداول، و انتقال ابعاد به اکسل برای محاسبات را بیان می کند. علاوه بر این، ادغام جداول طراحی با اجزای مونتاژ را برجسته می‌کند، که امکان کنترل کارآمد ویژگی‌ها و پیکربندی‌ها را فراهم می‌آورد که در تمرین‌های عملی برای ایجاد و سفارشی‌سازی جداول و نقشه‌های طراحی به اوج خود می‌رسد.",
            },
        },

    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "SOLIDWORKS 2020 Basic Tools is the first book in a three-part series that introduces new users to the SOLIDWORKS interface, tools, and basic modeling techniques. It provides you with a strong understanding of SOLIDWORKS and covers the creation of parts, assemblies, and drawings. Every lesson and exercise in this book was created based on real-world projects, and each project has been broken down and developed into easy and comprehensible steps.",
            // German
            "Deutsch": "SOLIDWORKS 2020 Basic Tools ist das erste Buch einer dreiteiligen Reihe, die neuen Benutzern die SOLIDWORKS-Benutzeroberfläche, -Tools und grundlegenden Modellierungstechniken vorstellt. Es vermittelt Ihnen ein fundiertes Verständnis von SOLIDWORKS und behandelt die Erstellung von Teilen, Baugruppen und Zeichnungen. Jede Lektion und Übung in diesem Buch wurde auf der Grundlage realer Projekte erstellt, und jedes Projekt wurde in einfache und verständliche Schritte unterteilt und entwickelt.",
            // Chinese
            "中国人": "SOLIDWORKS 2020 基础工具是三部分系列的第一本书，向新用户介绍 SOLIDWORKS 界面、工具和基本建模技术。它让您深入了解 SOLIDWORKS，并涵盖零件、装配体和工程图的创建。本书中的每个课程和练习都是基于真实项目创建的，每个项目都已分解并发展为简单易懂的步骤。",
            // Russian
            "Русский": "SOLIDWORKS 2020 Basic Tools — это первая книга из серии, состоящей из трех частей, которая знакомит новых пользователей с интерфейсом SOLIDWORKS, инструментами и основными методами моделирования. Он дает вам глубокое понимание SOLIDWORKS и охватывает создание деталей, сборок и чертежей. Каждый урок и упражнение в этой книге были созданы на основе реальных проектов, каждый проект был разбит на простые и понятные шаги.",
            // French
            "Français": "SOLIDWORKS 2020 Basic Tools est le premier livre d'une série en trois parties qui présente aux nouveaux utilisateurs l'interface, les outils et les techniques de modélisation de base de SOLIDWORKS. Il vous offre une solide compréhension de SOLIDWORKS et couvre la création de pièces, d'assemblages et de dessins. Chaque leçon et exercice de ce livre a été créé sur la base de projets du monde réel, et chaque projet a été décomposé et développé en étapes simples et compréhensibles.",
            // Japanese
            "日本語": "SOLIDWORKS 2020 基本ツールは、新規ユーザーに SOLIDWORKS インターフェース、ツール、基本的なモデリング手法を紹介する 3 部構成のシリーズの最初の書籍です。SOLIDWORKS を深く理解できるようになり、部品、アセンブリ、図面の作成方法もカバーします。この本のすべてのレッスンと演習は実際のプロジェクトに基づいて作成されており、各プロジェクトは簡単でわかりやすい手順に細分化されて開発されています。",
            // Korean
            "한국인": "SOLIDWORKS 2020 기본 도구는 새로운 사용자에게 SOLIDWORKS 인터페이스, 도구 및 기본 모델링 기술을 소개하는 3부작 시리즈 중 첫 번째 책입니다. SOLIDWORKS에 대한 깊은 이해를 제공하고 파트, 어셈블리 및 도면 작성을 다룹니다. 이 책의 모든 강의와 연습은 실제 프로젝트를 기반으로 작성되었으며, 각 프로젝트는 쉽고 이해하기 쉬운 단계로 나누어 개발되었습니다.",
            // Spanish
            "Español": "SOLIDWORKS 2020 Basic Tools es el primer libro de una serie de tres partes que presenta a los nuevos usuarios la interfaz, las herramientas y las técnicas básicas de modelado de SOLIDWORKS. Le proporciona una sólida comprensión de SOLIDWORKS y cubre la creación de piezas, ensamblajes y dibujos. Cada lección y ejercicio de este libro se creó en base a proyectos del mundo real, y cada proyecto se ha desglosado y desarrollado en pasos sencillos y comprensibles.",
            // Hindi
            "हिंदी": "SOLIDWORKS 2020 बेसिक टूल्स तीन-भाग वाली श्रृंखला की पहली पुस्तक है जो नए उपयोगकर्ताओं को SOLIDWORKS इंटरफ़ेस, टूल और बुनियादी मॉडलिंग तकनीकों से परिचित कराती है। यह आपको SOLIDWORKS की एक मजबूत समझ प्रदान करता है और भागों, असेंबली और रेखाचित्रों के निर्माण को कवर करता है। इस पुस्तक में प्रत्येक पाठ और अभ्यास वास्तविक दुनिया की परियोजनाओं के आधार पर बनाया गया था, और प्रत्येक परियोजना को आसान और समझने योग्य चरणों में विभाजित और विकसित किया गया है।",
            // Portuguese
            "Português": "Ferramentas básicas do SOLIDWORKS 2020 é o primeiro livro de uma série de três partes que apresenta aos novos usuários a interface, as ferramentas e as técnicas básicas de modelagem do SOLIDWORKS. Ele fornece um forte conhecimento do SOLIDWORKS e abrange a criação de peças, montagens e desenhos. Cada lição e exercício deste livro foram criados com base em projetos do mundo real, e cada projeto foi dividido e desenvolvido em etapas fáceis e compreensíveis.",
            // Bengali
            "বাংলা": "SOLIDWORKS 2020 Basic Tools হল একটি তিন-অংশের সিরিজের প্রথম বই যা SOLIDWORKS ইন্টারফেস, টুলস এবং মৌলিক মডেলিং কৌশলগুলির সাথে নতুন ব্যবহারকারীদের পরিচয় করিয়ে দেয়। এটি আপনাকে সলিডওয়ার্কস সম্পর্কে একটি দৃঢ় উপলব্ধি প্রদান করে এবং অংশ, সমাবেশ এবং অঙ্কন তৈরি করে। এই বইয়ের প্রতিটি পাঠ এবং অনুশীলন বাস্তব-বিশ্বের প্রকল্পগুলির উপর ভিত্তি করে তৈরি করা হয়েছে এবং প্রতিটি প্রকল্পকে ভেঙে ফেলা হয়েছে এবং সহজ এবং বোধগম্য পদক্ষেপগুলিতে বিকাশ করা হয়েছে।",
            // Arabic
            "عَرَبِيّ": "SOLIDWORKS 2020 Basic Tools هو الكتاب الأول في سلسلة من ثلاثة أجزاء تقدم للمستخدمين الجدد واجهة SOLIDWORKS وأدواتها وتقنيات النمذجة الأساسية. يوفر لك فهمًا قويًا لـ SOLIDWORKS ويغطي إنشاء الأجزاء والتجميعات والرسومات. تم إنشاء كل درس وتمرين في هذا الكتاب بناءً على مشاريع واقعية، وتم تقسيم كل مشروع وتطويره إلى خطوات سهلة ومفهومة.",
            // Persian
            "فارسی": "SOLIDWORKS 2020 Basic Tools اولین کتاب از مجموعه سه قسمتی است که کاربران جدید را با رابط کاربری SOLIDWORKS، ابزارها و تکنیک های مدل سازی اولیه آشنا می کند. درک قوی از SOLIDWORKS برای شما فراهم می کند و ایجاد قطعات، مجموعه ها و نقشه ها را پوشش می دهد. هر درس و تمرین در این کتاب بر اساس پروژه های دنیای واقعی ایجاد شده است و هر پروژه به مراحل آسان و قابل درک تبدیل شده است.",
        },
        // Paragraph 2
        {
            // English
            "English": "By reading this book, you will gain several advantages, such as learning how to use SOLIDWORKS in a step-by-step, tutorial approach with real-world examples. You will also learn how to create various types of models, such as solid, surface, sheet metal, and assembly models, and how to apply different features, such as extrude, revolve, fillet, mirror, pattern, and more. You will also learn how to prepare your models for drawing, detailing, and rendering, and how to use the SOLIDWORKS tools for analysis, animation, and simulation.",
            // German
            "Deutsch": "Durch die Lektüre dieses Buches erhalten Sie mehrere Vorteile, z. B. lernen Sie Schritt für Schritt, wie Sie SOLIDWORKS anhand von Beispielen aus der Praxis verwenden. Sie lernen auch, wie Sie verschiedene Modelltypen erstellen, z. B. Volumen-, Oberflächen-, Blech- und Baugruppenmodelle, und wie Sie verschiedene Funktionen anwenden, z. B. Extrudieren, Drehen, Abrunden, Spiegeln, Mustern und mehr. Sie lernen auch, wie Sie Ihre Modelle für das Zeichnen, Detaillieren und Rendern vorbereiten und wie Sie die SOLIDWORKS-Tools für Analyse, Animation und Simulation verwenden.",
            // Chinese
            "中国人": "通过阅读本书，您将获得多种好处，例如学习如何通过循序渐进的教程方法使用 SOLIDWORKS，并结合实际示例。您还将学习如何创建各种类型的模型，例如实体、曲面、钣金和装配模型，以及如何应用不同的功能，例如拉伸、旋转、圆角、镜像、图案等。您还将学习如何准备模型以进行绘图、详图和渲染，以及如何使用 SOLIDWORKS 工具进行分析、动画和模拟。",
            // Russian
            "Русский": "Прочитав эту книгу, вы получите ряд преимуществ, например, научитесь использовать SOLIDWORKS с помощью пошагового учебного пособия с примерами из реальной жизни. Вы также узнаете, как создавать различные типы моделей, такие как твердотельные, поверхностные, модели из листового металла и сборки, а также как применять различные функции, такие как выдавливание, вращение, скругление, зеркальное отображение, узор и многое другое. Вы также узнаете, как подготовить модели к рисованию, детализации и рендерингу, а также как использовать инструменты SOLIDWORKS для анализа, анимации и моделирования.",
            // French
            "Français": "En lisant ce livre, vous bénéficierez de plusieurs avantages, tels que l'apprentissage de l'utilisation de SOLIDWORKS dans le cadre d'une approche didactique étape par étape avec des exemples concrets. Vous apprendrez également à créer différents types de modèles, tels que des modèles de solides, de surfaces, de tôlerie et d'assemblage, et à appliquer différentes fonctionnalités, telles que l'extrusion, la révolution, le congé, la symétrie, le motif, etc. Vous apprendrez également à préparer vos modèles pour le dessin, les détails et le rendu, et à utiliser les outils SOLIDWORKS pour l'analyse, l'animation et la simulation.",
            // Japanese
            "日本語": "この本を読むことで、実際の例を使ってステップバイステップのチュートリアル形式で SOLIDWORKS の使い方を学べるなど、さまざまなメリットが得られます。また、ソリッド、サーフェス、板金、アセンブリ モデルなどのさまざまなモデルを作成する方法や、押し出し、回転、フィレット、ミラー、パターンなどのさまざまな機能を適用する方法も学習します。さらに、描画、詳細化、レンダリング用にモデルを準備する方法や、解析、アニメーション、シミュレーションに SOLIDWORKS ツールを使用する方法も学習します。",
            // Korean
            "한국인": "이 책을 읽으면 실제 사례를 통해 단계별 튜토리얼 방식으로 SOLIDWORKS를 사용하는 방법을 배우는 등 여러 가지 이점을 얻을 수 있습니다. 또한 솔리드, 곡면, 판금 및 어셈블리 모델과 같은 다양한 유형의 모델을 생성하는 방법과 돌출, 회전, 필렛, 대칭복사, 패턴 등과 같은 다양한 기능을 적용하는 방법을 배웁니다. 또한 도면, 상세화 및 렌더링을 위해 모델을 준비하는 방법과 분석, 애니메이션 및 시뮬레이션을 위해 SOLIDWORKS 도구를 사용하는 방법을 배우게 됩니다.",
            // Spanish
            "Español": "Al leer este libro, obtendrá varias ventajas, como aprender a utilizar SOLIDWORKS mediante un enfoque tutorial paso a paso con ejemplos del mundo real. También aprenderá a crear varios tipos de modelos, como modelos sólidos, de superficie, de chapa y de ensamblaje, y a aplicar diferentes funciones, como extrusión, revolución, empalme, simetría, patrón y más. También aprenderá a preparar sus modelos para dibujar, detallar y renderizar, y a utilizar las herramientas de SOLIDWORKS para análisis, animación y simulación.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़कर, आपको कई लाभ प्राप्त होंगे, जैसे कि वास्तविक दुनिया के उदाहरणों के साथ चरण-दर-चरण, ट्यूटोरियल दृष्टिकोण में SOLIDWORKS का उपयोग करना सीखना। आप यह भी सीखेंगे कि विभिन्न प्रकार के मॉडल कैसे बनाएं, जैसे कि ठोस, सतह, शीट मेटल और असेंबली मॉडल, और विभिन्न विशेषताओं को कैसे लागू करें, जैसे कि एक्सट्रूड, रिवॉल्व, फिलेट, मिरर, पैटर्न, और बहुत कुछ। आप यह भी सीखेंगे कि अपने मॉडल को ड्राइंग, डिटेलिंग और रेंडरिंग के लिए कैसे तैयार करें, और विश्लेषण, एनीमेशन और सिमुलेशन के लिए SOLIDWORKS टूल का उपयोग कैसे करें।",
            // Portuguese
            "Português": "Ao ler este livro, você obterá diversas vantagens, como aprender a usar o SOLIDWORKS em uma abordagem tutorial passo a passo com exemplos do mundo real. Você também aprenderá como criar vários tipos de modelos, como modelos sólidos, de superfície, de chapa metálica e de montagem, e como aplicar diferentes recursos, como extrusão, revolução, filete, espelho, padrão e muito mais. Você também aprenderá como preparar seus modelos para desenho, detalhamento e renderização e como usar as ferramentas do SOLIDWORKS para análise, animação e simulação.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার মাধ্যমে, আপনি বেশ কিছু সুবিধা পাবেন, যেমন বাস্তব-বিশ্বের উদাহরণ সহ ধাপে ধাপে SOLIDWORKS ব্যবহার করতে শেখা। আপনি আরও শিখবেন কীভাবে বিভিন্ন ধরণের মডেল তৈরি করতে হয়, যেমন কঠিন, পৃষ্ঠ, শীট মেটাল এবং অ্যাসেম্বলি মডেল এবং কীভাবে বিভিন্ন বৈশিষ্ট্য যেমন এক্সট্রুড, রিভল, ফিলেট, মিরর, প্যাটার্ন এবং আরও অনেক কিছু প্রয়োগ করতে হয়। আপনি কীভাবে আপনার মডেলগুলি অঙ্কন, বিশদ বিবরণ এবং রেন্ডারিংয়ের জন্য প্রস্তুত করবেন এবং বিশ্লেষণ, অ্যানিমেশন এবং সিমুলেশনের জন্য সলিডওয়ার্কস সরঞ্জামগুলি কীভাবে ব্যবহার করবেন তাও শিখবেন।",
            // Arabic
            "عَرَبِيّ": "من خلال قراءة هذا الكتاب، سوف تكتسب العديد من المزايا، مثل تعلم كيفية استخدام SOLIDWORKS بطريقة تعليمية خطوة بخطوة مع أمثلة من العالم الحقيقي. ستتعلم أيضًا كيفية إنشاء أنواع مختلفة من النماذج، مثل النماذج الصلبة والسطحية والصفائح المعدنية ونماذج التجميع، وكيفية تطبيق ميزات مختلفة، مثل البثق والتدوير والشرائح والمرآة والنمط والمزيد. سوف تتعلم أيضًا كيفية إعداد النماذج الخاصة بك للرسم والتفصيل والعرض، وكيفية استخدام أدوات SOLIDWORKS للتحليل والرسوم المتحركة والمحاكاة.",
            // Persian
            "فارسی": "با مطالعه این کتاب، چندین مزیت از جمله یادگیری نحوه استفاده از SOLIDWORKS به صورت گام به گام و آموزشی با مثال های واقعی به دست خواهید آورد. همچنین یاد خواهید گرفت که چگونه انواع مدل‌ها مانند مدل‌های جامد، سطحی، ورق فلزی و مدل‌های مونتاژی ایجاد کنید و چگونه ویژگی‌های مختلف مانند اکسترود، چرخش، فیله، آینه، الگو و غیره را اعمال کنید. همچنین یاد خواهید گرفت که چگونه مدل های خود را برای ترسیم، جزئیات و رندر آماده کنید و چگونه از ابزار SOLIDWORKS برای تجزیه و تحلیل، انیمیشن و شبیه سازی استفاده کنید.",
        },
        // Paragraph 3
        {
            // English
            "English": "After reading this book, the reader will have a solid foundation of SOLIDWORKS knowledge and skills that he/she can apply to his/her own projects and designs. He/She will also be ready to move on to the next level of SOLIDWORKS learning, as the book is part of a three-book series that covers intermediate and advanced topics. This book is a great resource for anyone who wants to start learning SOLIDWORKS or improve their existing skills.",
            // German
            "Deutsch": "Nach der Lektüre dieses Buches verfügt der Leser über eine solide Grundlage an SOLIDWORKS-Wissen und -Fähigkeiten, die er/sie in seinen/ihren eigenen Projekten und Konstruktionen anwenden kann. Er/sie wird auch bereit sein, zur nächsten Stufe des SOLIDWORKS-Lernens überzugehen, da das Buch Teil einer dreiteiligen Buchreihe ist, die fortgeschrittene und fortgeschrittene Themen abdeckt. Dieses Buch ist eine großartige Ressource für jeden, der mit dem Erlernen von SOLIDWORKS beginnen oder seine vorhandenen Fähigkeiten verbessern möchte.",
            // Chinese
            "中国人": "读完本书后，读者将拥有扎实的 SOLIDWORKS 知识和技能基础，可以将其应用于自己的项目和设计。他/她还将准备好进入 SOLIDWORKS 学习的下一个阶段，因为本书是涵盖中级和高级主题的三本系列丛书的一部分。对于任何想要开始学习 SOLIDWORKS 或提高现有技能的人来说，这本书都是很好的资源。",
            // Russian
            "Русский": "Прочитав эту книгу, читатель получит прочную основу знаний и навыков SOLIDWORKS, которые он/она сможет применить в своих собственных проектах и ​​проектах. Он/она также будет готов перейти на следующий уровень изучения SOLIDWORKS, поскольку книга является частью серии из трех книг, охватывающей темы среднего и продвинутого уровня. Эта книга — отличный ресурс для всех, кто хочет начать изучать SOLIDWORKS или улучшить свои существующие навыки.",
            // French
            "Français": "Après avoir lu ce livre, le lecteur disposera d'une base solide de connaissances et de compétences SOLIDWORKS qu'il pourra appliquer à ses propres projets et conceptions. Il/elle sera également prêt à passer au niveau suivant d'apprentissage de SOLIDWORKS, car le livre fait partie d'une série de trois livres qui couvrent des sujets intermédiaires et avancés. Ce livre est une excellente ressource pour tous ceux qui souhaitent commencer à apprendre SOLIDWORKS ou améliorer leurs compétences existantes.",
            // Japanese
            "日本語": "この本を読んだ後、読者は SOLIDWORKS の知識とスキルの確固たる基礎を身につけ、自分のプロジェクトや設計に応用できるようになります。また、この本は中級および上級のトピックを網羅する 3 冊のシリーズの一部であるため、読者は SOLIDWORKS 学習の次のレベルに進む準備も整います。この本は、SOLIDWORKS の学習を始めたい方や、既存のスキルを向上させたい方にとって素晴らしいリソースです。",
            // Korean
            "한국인": "이 책을 읽고 나면 독자는 자신의 프로젝트와 설계에 적용할 수 있는 SOLIDWORKS 지식과 기술에 대한 탄탄한 기초를 갖게 될 것입니다. 또한 이 책은 중급 및 고급 주제를 다루는 3권으로 구성된 시리즈의 일부이므로 학생은 SOLIDWORKS 학습의 다음 단계로 넘어갈 준비가 되어 있습니다. 이 책은 SOLIDWORKS 학습을 시작하거나 기존 기술을 향상시키려는 모든 사람에게 훌륭한 리소스입니다.",
            // Spanish
            "Español": "Después de leer este libro, el lector tendrá una base sólida de conocimientos y habilidades de SOLIDWORKS que podrá aplicar a sus propios proyectos y diseños. También estará listo para pasar al siguiente nivel de aprendizaje de SOLIDWORKS, ya que el libro forma parte de una serie de tres libros que cubre temas intermedios y avanzados. Este libro es un gran recurso para cualquiera que quiera empezar a aprender SOLIDWORKS o mejorar sus habilidades existentes.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़ने के बाद, पाठक के पास SOLIDWORKS ज्ञान और कौशल का एक ठोस आधार होगा जिसे वह अपनी परियोजनाओं और डिज़ाइनों पर लागू कर सकता है। वह SOLIDWORKS सीखने के अगले स्तर पर जाने के लिए भी तैयार होगा, क्योंकि यह पुस्तक तीन-पुस्तक श्रृंखला का हिस्सा है जो मध्यवर्ती और उन्नत विषयों को कवर करती है। यह पुस्तक उन लोगों के लिए एक बेहतरीन संसाधन है जो SOLIDWORKS सीखना शुरू करना चाहते हैं या अपने मौजूदा कौशल में सुधार करना चाहते हैं।",
            // Portuguese
            "Português": "Depois de ler este livro, o leitor terá uma base sólida de conhecimentos e habilidades do SOLIDWORKS que poderá aplicar em seus próprios projetos e projetos. Ele/ela também estará pronto para passar para o próximo nível de aprendizado do SOLIDWORKS, já que o livro faz parte de uma série de três livros que cobre tópicos intermediários e avançados. Este livro é um ótimo recurso para quem deseja começar a aprender o SOLIDWORKS ou aprimorar suas habilidades existentes.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার পরে, পাঠকের সলিডওয়ার্কস জ্ঞান এবং দক্ষতার একটি শক্ত ভিত্তি থাকবে যা সে তার নিজের প্রকল্প এবং ডিজাইনগুলিতে প্রয়োগ করতে পারে। তিনি/তিনি সলিডওয়ার্কস শেখার পরবর্তী স্তরে যাওয়ার জন্যও প্রস্তুত থাকবেন, কারণ বইটি একটি তিন-বই সিরিজের অংশ যা মধ্যবর্তী এবং উন্নত বিষয়গুলি কভার করে। যারা সলিডওয়ার্কস শিখতে বা তাদের বিদ্যমান দক্ষতা উন্নত করতে চান তাদের জন্য এই বইটি একটি দুর্দান্ত সম্পদ।",
            // Arabic
            "عَرَبِيّ": "بعد قراءة هذا الكتاب، سيكون لدى القارئ أساس متين من المعرفة والمهارات في SOLIDWORKS التي يمكنه تطبيقها على مشاريعه وتصميماته الخاصة. سيكون أيضًا جاهزًا للانتقال إلى المستوى التالي من تعلم SOLIDWORKS، حيث أن الكتاب جزء من سلسلة من ثلاثة كتب تغطي موضوعات متوسطة ومتقدمة. يعد هذا الكتاب مصدرًا رائعًا لأي شخص يريد البدء في تعلم SOLIDWORKS أو تحسين مهاراته الحالية.",
            // Persian
            "فارسی": "پس از خواندن این کتاب، خواننده پایه محکمی از دانش و مهارت های SOLIDWORKS خواهد داشت که می تواند در پروژه ها و طرح های خود اعمال کند. او همچنین برای رفتن به سطح بعدی یادگیری SOLIDWORKS آماده خواهد بود، زیرا این کتاب بخشی از یک مجموعه سه کتاب است که موضوعات متوسط ​​و پیشرفته را پوشش می دهد. این کتاب یک منبع عالی برای هر کسی است که می خواهد شروع به یادگیری SOLIDWORKS کند یا مهارت های موجود خود را بهبود بخشد.",
        },
    ],
};

// Documentation
// Second font family heirachy
var secondFontFamilyHeirachy = {
    // English
    "English": "'Roboto Condensed', sans-serif",
    // German
    "Deutsch": "'Roboto Condensed', sans-serif",
    // Chinese
    "中国人": "'Ma Shan Zheng', serif",
    // Russian
    "Русский": "'Roboto Condensed', sans-serif",
    // French
    "Français": "'Roboto Condensed', sans-serif",
    // Japanese
    "日本語": "'Hina Mincho', serif",
    // Korean
    "한국인": "'Gowun Batang', serif",
    // Spanish
    "Español": "'Roboto Condensed', sans-serif",
    // Hindi
    "हिंदी": "'Roboto Condensed', sans-serif",
    // Portuguese
    "Português": "'Roboto Condensed', sans-serif",
    // Bengali
    "বাংলা": "'Noto Serif Bengali', serif",
    // Arabic
    "عَرَبِيّ": "Amiri, serif",
    // Persian
    "فارسی": "'B Nazanin'",
};

// --------------------- ↑ Static Informations for Individual Skills Page ↑ ---------------------

// ---------------------------------------- ↓ Functions ↓ ----------------------------------------

// Documentation
// This function will be used to make the page responsive
function BaseResponsiveAdaptiveFunctionality() {
    if (window.innerWidth >= 1300) {

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "3vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "3vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "1vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "50px";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingBottom = "3vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "1.5vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "10vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "1.5vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "15px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "30px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "30px";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.paddingBottom = '10vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = (window.innerWidth * 0.02) + 'px';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 1300) && (window.innerWidth >= 1200)) {

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "10vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "4vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "1vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "40px";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "1.5vw";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
            item.style.textAlign = "end";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingBottom = "3vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "1.5vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "10vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "1.5vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "15px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "30px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "30px";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 90vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 1200) && (window.innerWidth >= 1100)) {

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "13vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "5vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "1vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "40px";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "1.5vw";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingBottom = "3vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "1.5vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "10vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "1.5vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "15px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "30px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "30px";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Section Information
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 90vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 1100) && (window.innerWidth >= 1000)) {

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "12vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "6vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "5vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "2vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "40px";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "1.5vw";
            item.style.paddingLeft = "4vw";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.5vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingBottom = "3vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "1.5vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "12vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "1.5vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "15px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "20px";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 90vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 1000) && (window.innerWidth >= 900)) {

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "12vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "5vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "2vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "30px";
        // - > - > Image width
        document.getElementById("book-image-cover-detail-cover").style.width = "40vw";
        // - > - > Image height
        document.getElementById("book-image-cover-detail-cover").style.height = "auto";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "1.7vw";
            item.style.paddingLeft = "4vw";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.7vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.7vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.7vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.7vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingBottom = "3vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "1.7vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "12vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "1.7vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "15px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "20px";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 90vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 900) && (window.innerWidth >= 800)) {

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "13vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "5vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "2vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "30px";
        // - > - > Image width
        document.getElementById("book-image-cover-detail-cover").style.width = "40vw";
        // - > - > Image height
        document.getElementById("book-image-cover-detail-cover").style.height = "auto";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "1.7vw";
            item.style.paddingLeft = "4vw";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.7vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.7vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.7vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "1.7vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingBottom = "3vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "1.7vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "12vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "1.7vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "15px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "20px";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 90vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 800) && (window.innerWidth >= 700)) {

        // Top Navigation Bar
        // > Class Name
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
        // - > Home Button
        document.getElementById('navigation-top-bar-home-link-to-go-to-the-home-page').style.marginLeft = "-15vw";
        // - > language Drop Down
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.marginLeft = "-15vw";
        document.getElementById('languagesssss-drop-down-menu-items').style.width = "5vw";
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.height = "6vw";
        // - > Skill Drop Down
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.marginLeft = "-15vw";
        document.getElementById('skillssss-drop-down-opened-to-style').style.width = "50vw";
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.height = "6vw";
        // - > Download the resume
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginLeft = "-15vw";
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginBottom = "2vw";
        // - > Contact me Button
        document.getElementById('contact-me-nav-bar').style.marginLeft = "-15vw";
        document.getElementById('contact-me-nav-bar').style.marginBottom = "1.5vw";

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "8vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "2vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "30px";
        // - > - > Image width
        document.getElementById("book-image-cover-detail-cover").style.width = "40vw";
        // - > - > Image height
        document.getElementById("book-image-cover-detail-cover").style.height = "auto";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "2vw";
            item.style.paddingLeft = "0px";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "2vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "2vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "2vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "2vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingTop = "3vw";
                item.style.paddingBottom = "3vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "2vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "12vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "2vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "20px";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 90vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 700) && (window.innerWidth >= 600)) {

        // Top Navigation Bar
        // > Class Name
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
        // - > Home Button
        document.getElementById('navigation-top-bar-home-link-to-go-to-the-home-page').style.marginLeft = "-15vw";
        // - > language Drop Down
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.marginLeft = "-15vw";
        document.getElementById('languagesssss-drop-down-menu-items').style.width = "5vw";
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.height = "8vw";
        // - > Skill Drop Down
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.marginLeft = "-15vw";
        document.getElementById('skillssss-drop-down-opened-to-style').style.width = "50vw";
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.height = "8vw";
        // - > Download the resume
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginLeft = "-15vw";
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginBottom = "2vw";
        // - > Contact me Button
        document.getElementById('contact-me-nav-bar').style.marginLeft = "-15vw";
        document.getElementById('contact-me-nav-bar').style.marginBottom = "1.5vw";

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "5vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "2vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "25px";
        // - > - > Image width
        document.getElementById("book-image-cover-detail-cover").style.width = "45vw";
        // - > - > Image height
        document.getElementById("book-image-cover-detail-cover").style.height = "auto";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "2.5vw";
            item.style.paddingLeft = "0px";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "2.5vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "2.5vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "2.5vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "2.5vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingTop = "3vw";
                item.style.paddingBottom = "3vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "2.5vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "15vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "2.5vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.marginLeft = "-3vw";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 90vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 600) && (window.innerWidth >= 500)) {

        // Top Navigation Bar
        // > Class Name
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
        // - > Home Button
        document.getElementById('navigation-top-bar-home-link-to-go-to-the-home-page').style.marginLeft = "-15vw";
        // - > language Drop Down
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.marginLeft = "-15vw";
        document.getElementById('languagesssss-drop-down-menu-items').style.width = "5vw";
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.height = "8vw";
        // - > Skill Drop Down
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.marginLeft = "-15vw";
        document.getElementById('skillssss-drop-down-opened-to-style').style.width = "50vw";
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.height = "8vw";
        // - > Download the resume
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginLeft = "-15vw";
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginBottom = "2vw";
        // - > Contact me Button
        document.getElementById('contact-me-nav-bar').style.marginLeft = "-15vw";
        document.getElementById('contact-me-nav-bar').style.marginBottom = "1.5vw";

        // First View
        // - > Top Location Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "6vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "5vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "2vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "28px";
        // - > - > Image width
        document.getElementById("book-image-cover-detail-cover").style.width = "60vw";
        // - > - > Image height
        document.getElementById("book-image-cover-detail-cover").style.height = "auto";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "3.3vw";
            item.style.paddingLeft = "0px";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "3.3vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "3.3vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "3.3vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "3.3vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";
            item.style.paddingLeft = "5vw";
            item.style.paddingRight = "5vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingTop = "3vw";
                item.style.paddingBottom = "3vw";
                item.style.paddingLeft = "9vw";
                item.style.paddingRight = "0vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "3.3vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "20vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "3.3vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.marginLeft = "-3vw";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 140vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '4vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '5vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 500) && (window.innerWidth >= 400)) {

        // Top Navigation Bar
        // > Class Name
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
        // - > Home Button
        document.getElementById('navigation-top-bar-home-link-to-go-to-the-home-page').style.marginLeft = "-20vw";
        // - > language Drop Down
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.marginLeft = "-20vw";
        document.getElementById('languagesssss-drop-down-menu-items').style.width = "5vw";
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.height = "10vw";
        // - > Skill Drop Down
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.marginLeft = "-20vw";
        document.getElementById('skillssss-drop-down-opened-to-style').style.width = "50vw";
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.height = "10vw";
        // - > Download the resume
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginLeft = "-20vw";
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginBottom = "2vw";
        // - > Contact me Button
        document.getElementById('contact-me-nav-bar').style.marginLeft = "-20vw";
        document.getElementById('contact-me-nav-bar').style.marginBottom = "1.5vw";

        // First View
        // - > Top Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.height = "auto";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "5vw";
        document.getElementById("Books-top-navigation-just-for-containingg").style.fontSize = "4vw";
        document.getElementById("right-arrow-book-navigation-bar-icon").style.fontSize = "4vw";
        document.getElementById("link-button-to-go-the-individual-skill-page-top-indicatotor").style.fontSize = "4vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "3vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "28px";
        // - > - > Image width
        document.getElementById("book-image-cover-detail-cover").style.width = "60vw";
        // - > - > Image height
        document.getElementById("book-image-cover-detail-cover").style.height = "auto";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "3.3vw";
            item.style.paddingLeft = "0px";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "3.3vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "3.3vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "3.3vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "3.3vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "1vw";
            item.style.paddingBottom = "1vw";
            item.style.paddingLeft = "5vw";
            item.style.paddingRight = "5vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingTop = "3vw";
                item.style.paddingBottom = "3vw";
                item.style.paddingLeft = "9vw";
                item.style.paddingRight = "0vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "3.3vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "30vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "3.3vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.marginLeft = "-3vw";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 140vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '5vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '6vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 400) && (window.innerWidth >= 300)) {

        // Top Navigation Bar
        // > Class Name
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
        // - > Home Button
        document.getElementById('navigation-top-bar-home-link-to-go-to-the-home-page').style.marginLeft = "-20vw";
        // - > language Drop Down
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.marginLeft = "-20vw";
        document.getElementById('languagesssss-drop-down-menu-items').style.width = "5vw";
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.height = "13vw";
        // - > Skill Drop Down
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.marginLeft = "-20vw";
        document.getElementById('skillssss-drop-down-opened-to-style').style.width = "70vw";
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.height = "13vw";
        // - > Download the resume
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginLeft = "-20vw";
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginBottom = "3vw";
        // - > Contact me Button
        document.getElementById('contact-me-nav-bar').style.marginLeft = "-20vw";
        document.getElementById('contact-me-nav-bar').style.marginBottom = "1.5vw";

        // First View
        // - > Top Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.height = "auto";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "5vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "3vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "28px";
        // - > - > Image width
        document.getElementById("book-image-cover-detail-cover").style.width = "60vw";
        // - > - > Image height
        document.getElementById("book-image-cover-detail-cover").style.height = "auto";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "4vw";
            item.style.paddingLeft = "0px";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "30vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "4vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "4vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "4vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "4vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "5vw";
            item.style.paddingBottom = "5vw";
            item.style.paddingLeft = "5vw";
            item.style.paddingRight = "5vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingTop = "3vw";
                item.style.paddingBottom = "3vw";
                item.style.paddingLeft = "9vw";
                item.style.paddingRight = "0vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "4vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "30vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "4vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "20px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.marginLeft = "-3vw";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 140vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '5vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '6vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 300) && (window.innerWidth >= 200)) {

        // Top Navigation Bar
        // - > Navigation Width
        document.getElementById('top-navigation-bar-individual-bar').style.width = "100%";
        // > Class Name
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
        // - > Home Button
        document.getElementById('navigation-top-bar-home-link-to-go-to-the-home-page').style.marginLeft = "-40vw";
        // - > language Drop Down
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.marginLeft = "-40vw";
        document.getElementById('languagesssss-drop-down-menu-items').style.width = "5vw";
        document.getElementById('Main-Intro-language-individual-skills-drop-down-change-languages').style.height = "20vw";
        // - > Skill Drop Down
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.marginLeft = "-40vw";
        document.getElementById('skillssss-drop-down-opened-to-style').style.width = "87vw";
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.height = "20vw";
        // - > Download the resume
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginLeft = "-40vw";
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.marginBottom = "3vw";
        // - > Contact me Button
        document.getElementById('contact-me-nav-bar').style.marginLeft = "-40vw";

        // First View
        // - > Top Indicator
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.height = "auto";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingTop = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingBottom = "8vw";
        document.getElementById('top-indicatotor-div-to-show-which-skill-is-selected').style.paddingLeft = "5vw";
        document.querySelectorAll("#right-arrow-book-navigation-bar-icon").forEach(
            (item, index) => {
                item.style.fontSize = "5vw";
            }
        );

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // Image container
        // - > - > Height
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.height = "auto";
        // - > - > Padding top
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingTop = "1vw";
        // - > - > Padding bottom 
        document.getElementById("book-image-cover-div-element-container-of-book-cover").style.paddingBottom = "3vw";

        // Image of Book
        // - > - > Border radius
        document.getElementById("book-image-cover-detail-cover").style.borderRadius = "15px";
        // - > - > Image width
        document.getElementById("book-image-cover-detail-cover").style.width = "60vw";
        // - > - > Image height
        document.getElementById("book-image-cover-detail-cover").style.height = "auto";
        // - > - > Box Shadow
        document.getElementById("book-image-cover-detail-cover").style.boxShadow = "rgba(0, 0, 0, 0.15) 0px 0px 30px 20px"; // Color - X direction - Y direction - Blur - Spread

        // Description Tags
        document.querySelectorAll("#information-tag").forEach(item => {
            // - > - > Font Size
            item.style.fontSize = "5vw";
            item.style.paddingLeft = "0px";
        });
        // - > Left Columns
        document.querySelectorAll("#left-column-tags-to-find").forEach((item, index) => {
            item.style.width = "70vw";
        });
        // - > - > Chapter titles
        document.querySelectorAll("#Chapter-information-short-subjects").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "5vw";
        });
        // - > - > Chapter descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "5vw";
        });
        // - > - > Description section
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "5vw";
        });
        // - > - > Short description sections earlier
        document.querySelectorAll("#short-description-and-some-numbers").forEach(item => {
            // - > - > - > - > Font size
            item.style.fontSize = "5vw";
        });

        // All Div elements used for rows
        document.querySelectorAll("#div-row-section-each-text-container").forEach((item, index) => {
            // - > - > Height
            item.style.height = "auto";
            // - > - > Paddings
            item.style.paddingTop = "5vw";
            item.style.paddingBottom = "5vw";
            item.style.paddingLeft = "5vw";
            item.style.paddingRight = "5vw";

            // Add more padding bottom for back button
            if (index == document.querySelectorAll("#div-row-section-each-text-container").length - 1) {
                item.style.paddingTop = "3vw";
                item.style.paddingBottom = "3vw";
                item.style.paddingLeft = "9vw";
                item.style.paddingRight = "0vw";
            }
        });

        // Please request text
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontSize = "5vw";

        // Back button link
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.width = "45vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontSize = "5vw";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.borderRadius = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingTop = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingBottom = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingLeft = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.paddingRight = "10px";
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.marginLeft = "-3vw";

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        // Contact Information Section
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 140vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '5vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '6vw';
            item.style.width = '75vw';
        });

    } else {

    }

    // Adding the indicator link
    document.getElementById("Going-to-the-books-row-table").href = "../../../BookList.html?direction=" + encodeURIComponent(neededProperties.Currrent_Skill_Selected) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
    // Back button link
    document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents-linkkkkkkkks").href = "../../../BookList.html?direction=" + encodeURIComponent(neededProperties.Currrent_Skill_Selected) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
    // Adding the indicator link
    document.getElementById("link-button-to-go-the-individual-skill-page-top-indicatotor").href = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(neededProperties.Currrent_Skill_Selected) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
}

// Documentation
// This Function is used to get URL parameters
function getQueryParam(param) {
    var searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
}

// Documentation
// This function is used to toggle the show drop down
function toggleDropdown(nameOfEleemnt) {
    var content = document.getElementById(nameOfEleemnt);
    content.classList.toggle("show");
}

// Documentation
// This function is used to close the drop down
function closeDropdownOnClickOutside(event, elementNamedropDown, DropDownToggleName) {
    var dropdown = document.getElementById(elementNamedropDown);
    var dropdownToggle = document.getElementById(DropDownToggleName);

    // If the clicked target is not the dropdown or its children
    if (!dropdown.contains(event.target) && event.target !== dropdownToggle) {
        dropdown.classList.remove('show');
    }
}

// Documentation
// This function is used to stylize the current selected item in drop down in that
function stylingCurrentSelectedOptionInDropDown(dropDownNameID, toCompareArugument) {
    var dropdownItems = document.querySelectorAll('#' + dropDownNameID + ' .dropdown-item');

    dropdownItems.forEach(function (item) {
        if (item.textContent == toCompareArugument) {
            item.style = "font-family: Roboto, sans-serif;font-size: 80%;font-weight: bold;color: rgb(252,163,17);";
        } else {
            item.style = "font-family: Roboto, sans-serif;font-size: 80%;";
        }
    });
}

// ---------------------------------------- ↑ Functions ↑ ----------------------------------------

// ---------------------------------------- ↓ Needed Properties ↓ ----------------------------------------

var neededProperties = {
    Currrent_Language_Selected: "",
    Currrent_Skill_Selected: "",

    // ---------------------------------------- ↓ Language Set and Get ↓ ----------------------------------------

    get CurrentLanguageSelectedMethod() {
        return this.Currrent_Language_Selected;
    },

    set CurrentLanguageSelectedMethod(newLanguage) {

        // Saving the current language
        this.Currrent_Language_Selected = newLanguage;

        // Download My Resume Link
        document.getElementById("download-my-resume-pdf-id-tag-button-link").textContent = BoldFirstHeireachyFont[newLanguage]["DownloadMyResumeButtonTopNavigationBar"];
        document.getElementById("download-my-resume-pdf-id-tag-button-link").style.fontFamily = BoldFirstHeireachyFont[newLanguage]["fontFamily"];
            
        // Skill Drop Down Text To show Selected
        // Get the dropdown toggle button by its ID
        var dropdownToggle = document.getElementById('ForToggling');

        // Update the dropdown toggle button text with the clicked item's text
        dropdownToggle.textContent = newLanguage;

        // Stylize the current language show link
        dropdownToggle.style.fontFamily = BoldFirstHeireachyFont[newLanguage]["fontFamily"];

        stylingCurrentSelectedOptionInDropDown('languagesssss-drop-down-menu-items', newLanguage);

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // - > Changing the web page title
        document.title = "MHA - " + solidworks_basic_tools_SDC_publication["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = solidworks_basic_tools_SDC_publication["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
            item.style.fontFamily = secondFontFamilyHeirachy[newLanguage];

            if ((newLanguage == "فارسی") || (newLanguage == "عَرَبِيّ")) {
                item.style.textAlign = "start";
                item.dir = "rtl";
                item.align = "end";
            } else {
                item.style.textAlign = "start";
                item.dir = "ltr";
                item.align = "start";
            }

        });

        // - > Short descriptions
        document.querySelectorAll("#Chapter-information-short-description-paragraph-end-discription").forEach((item, index) => {

            item.textContent = solidworks_basic_tools_SDC_publication["TotalDescriptionAboutTheBook"][index][newLanguage];
            item.style.fontFamily = secondFontFamilyHeirachy[newLanguage];

            if ((newLanguage == "فارسی") || (newLanguage == "عَرَبِيّ")) {
                item.style.textAlign = "start";
                item.dir = "rtl";
                item.align = "end";
            } else {
                item.style.textAlign = "start";
                item.dir = "ltr";
                item.align = "start";
            }

        });

        // Request for pdf translation
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").textContent = BoldFirstHeireachyFont[newLanguage]["RequestForPDFForVerification"];
        document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.fontFamily = BoldFirstHeireachyFont[newLanguage]["fontFamily"];

        if ((newLanguage == "فارسی") || (newLanguage == "عَرَبِيّ")) {
            document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.textAlign = "start";
            document.getElementById("please-request-the-pdf-of-this-book-for-verification").dir = "rtl";
            document.getElementById("please-request-the-pdf-of-this-book-for-verification").align = "end";
        } else {
            document.getElementById("please-request-the-pdf-of-this-book-for-verification").style.textAlign = "start";
            document.getElementById("please-request-the-pdf-of-this-book-for-verification").dir = "ltr";
            document.getElementById("please-request-the-pdf-of-this-book-for-verification").align = "start";
        }

        // Back button
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").innerHTML = '<i class="icon ion-arrow-left-b" style="padding-right: 7px;"></i>' + "&nbsp;" + BoldFirstHeireachyFont[newLanguage]["BackToGoTheBooksRows"];
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontFamily = BoldFirstHeireachyFont[newLanguage]["fontFamily"];

        // Adding the all necessary links to the skill drop down menu items
        document.querySelectorAll("#skill-name-drop-down-menu-item").forEach((item, index) => {
            item.href = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
        });

        // ---------------------------------------- ↑ Don't Make Me Think ↑ ----------------------------------------

        BaseResponsiveAdaptiveFunctionality();
    },

    // ---------------------------------------- ↑ Language Set and Get ↑ ----------------------------------------


    // ---------------------------------------- ↓ Skill Set and Get ↓ ----------------------------------------

    get CurrentSkillSelectedMethod() {
        return this.Currrent_Skill_Selected;
    },

    set CurrentSkillSelectedMethod(newSkill) {

        // Saving the current Skill
        this.Currrent_Skill_Selected = newSkill;

        // Current Skill Book Parent Indicator
        document.getElementById("link-button-to-go-the-individual-skill-page-top-indicatotor").textContent = newSkill;

        // Skill Drop Down Text To show Selected
        // Get the dropdown toggle button by its ID
        var dropdownToggle = document.getElementById('DropDownValueShowingSkills');

        // Update the dropdown toggle button text with the clicked item's text
        dropdownToggle.textContent = newSkill;

        stylingCurrentSelectedOptionInDropDown('skillssss-drop-down-opened-to-style', newSkill);

    },

    // ---------------------------------------- ↑ Skill Set and Get ↑ ----------------------------------------
}

// ---------------------------------------- ↑ Needed Properties ↑ ----------------------------------------

// --------------------- ↓ Getting the current or passed lanauge ↓ ---------------------

// Get the 'language' parameter from the URL
var lanauge_show = getQueryParam('language');
// Get the 'header' parameter from the URL
var headerText = getQueryParam('direction');

// If the lanauge_show is not null, update the header element
if (lanauge_show) {
    if (headerText) {
        neededProperties.CurrentLanguageSelectedMethod = decodeURIComponent(lanauge_show);
        neededProperties.CurrentSkillSelectedMethod = decodeURIComponent(headerText);
    }
}

// --------------------- ↑ Getting the current or passed lanauge ↑ ---------------------

// ---------------------------------------- ↓ DOM Content Loading ↓ ----------------------------------------

// Documentation
// This Content Loader is used to change the fixed or flow of drop down and some stuff like that
document.addEventListener("DOMContentLoaded", function () {
    // Loading The Nav Bar
    if (window.innerWidth < 768) {
        // Navigation Bar
        // - > Opacity of Toggle
        // document.getElementById('navcol-1').style.opacity = "1";
        // - > Making the Nab Bar Sticky
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
        // Navigation Bar
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.zIndex = "1";
    } else {
        // Navigation Bar
        // - > Opacity of Toggle
        document.getElementById('navcol-1').style.opacity = "1";
        // - > Making the Nab Bar Sticky
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md fixed-top bg-body shadow-lg py-3";
    }

    // Calling the Responsive Function
    BaseResponsiveAdaptiveFunctionality();

    // Adding the all necessary links to the skill drop down menu items
    document.querySelectorAll("#skill-name-drop-down-menu-item").forEach((item, index) => {
        var link = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
        item.setAttribute("href", link);
    });
});

// Documentation
// This section is for when the page is resized
window.addEventListener('resize', function () {
    // Calling the Responsive Function
    BaseResponsiveAdaptiveFunctionality();

    this.location.reload();
});
BaseResponsiveAdaptiveFunctionality();

// Documentation
// This section is used to handle the skill click action behavior - Skill Drop Down Change
document.getElementById('DropDownValueShowingSkills').addEventListener('click', function () {
    // Get the dropdown toggle button by its ID
    var dropdownToggle = document.getElementById('DropDownValueShowingSkills');

    // Get the dropdown menu container
    var dropdownMenu = dropdownToggle.nextElementSibling;

    // Get all the dropdown items within the dropdown menu
    var dropdownItems = dropdownMenu.getElementsByClassName('dropdown-item');

    // Convert HTMLCollection to an array to use forEach
    Array.from(dropdownItems).forEach(function (item) {
        // Add click event listener to each dropdown item
        item.addEventListener('click', function (event) {
            // Prevent the default anchor click behavior
            event.preventDefault();

            // Close the dropdown menu by removing 'show' class from the 'dropdown-menu' and 'dropdown'
            var dropdownElement = this.closest('.dropdown');
            if (dropdownElement) {
                var dropdownMenu = dropdownElement.querySelector('.dropdown-menu');
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                    dropdownElement.classList.remove('show');
                }
            }

            // Update the dropdown toggle button text with the clicked item's text
            dropdownToggle.textContent = this.textContent;
            neededProperties.CurrentSkillSelectedMethod = this.textContent;

            window.location.href = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);;
        });
    });
});

// Documentation
// This section is used to handle the clicking behavior of language drop down
document.getElementById('ForToggling').addEventListener("click", function () {
    // Listen to changing the language of the page
    var dropdownToggle = document.getElementById('ForToggling'); // Get the dropdown toggle button by its ID

    // Get the dropdown menu container
    var dropdownMenu = dropdownToggle.nextElementSibling;

    // Get all the dropdown items within the dropdown menu
    var dropdownItems = dropdownMenu.getElementsByClassName('dropdown-item');

    // Convert HTMLCollection to an array to use forEach
    Array.from(dropdownItems).forEach(function (item) {
        // Add click event listener to each dropdown item
        item.addEventListener('click', function (event) {
            // Prevent the default anchor click behavior
            event.preventDefault();

            // Close the dropdown menu by removing 'show' class from the 'dropdown-menu' and 'dropdown'
            var dropdownElement = this.closest('.dropdown');
            if (dropdownElement) {
                var dropdownMenu = dropdownElement.querySelector('.dropdown-menu');
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                    dropdownElement.classList.remove('show');
                }
            }

            // Update the dropdown toggle button text with the clicked item's text
            var languageIcon = document.createElement('i');
            languageIcon.className = "material-icons d-xxl-flex justify-content-xxl-center align-items-xxl-center";
            languageIcon.textContent = 'language';
            document.getElementById("ForToggling").appendChild(languageIcon);
            var wrapper = document.createElement('span');
            wrapper.className = "d-flex d-xxl-flex align-items-center align-items-xxl-center";
            wrapper.appendChild(languageIcon);
            var textContent = document.createTextNode(this.textContent);
            wrapper.appendChild(textContent);
            dropdownToggle.innerHTML = '';
            dropdownToggle.appendChild(wrapper);
            dropdownToggle.style.fontFamily = BoldFirstHeireachyFont[this.textContent]['fontFamily'];
            neededProperties.CurrentLanguageSelectedMethod = this.textContent;

            document.addEventListener('click', function () {
                closeDropdownOnClickOutside(event, 'Main-Intro-language-individual-skills-drop-down-change-languages', 'ForToggling');
            });

            stylingCurrentSelectedOptionInDropDown('languagesssss-drop-down-menu-items', neededProperties.Currrent_Language_Selected);
        });
    });
});

// ---------------------------------------- ↑ DOM Content Loading ↑ ----------------------------------------

// --------------------- ↓ Togging the Drop Down to Being Smooth ↓ ---------------------

// Add event listener to your dropdown button
document.getElementById("ForToggling").addEventListener("click", function () {
    toggleDropdown("Main-Intro-language-individual-skills-drop-down-change-languages");
});
document.addEventListener('click', function () {
    closeDropdownOnClickOutside(event, 'Main-Intro-language-individual-skills-drop-down-change-languages', 'ForToggling');
});

document.getElementById("DropDownValueShowingSkills").addEventListener("click", function () {
    toggleDropdown("Skills-Drop-Down-top-nav-bar");
});
document.addEventListener('click', function () {
    closeDropdownOnClickOutside(event, 'Skills-Drop-Down-top-nav-bar', 'DropDownValueShowingSkills');
});

// --------------------- ↑ Togging the Drop Down to Being Smooth ↑ ---------------------

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Base each book row functionlaity ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

//##############################################################################################################################################################
//##############################################################################################################################################################
//##############################################################################################################################################################
//##############################################################################################################################################################
//################################################# © All Rights reserved BY Muhammad Husain Aboutalebi © ######################################################
//##############################################################################################################################################################
//##############################################################################################################################################################
//##############################################################################################################################################################
//##############################################################################################################################################################