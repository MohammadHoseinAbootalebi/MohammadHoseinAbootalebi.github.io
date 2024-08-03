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
var flutter_apprentice = {
    "BookName": "Flutter Apprentice",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Getting Started",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces Flutter as a versatile toolkit for building cross-platform apps using Dart. It guides readers through setting up the development environment, understanding Flutter architecture layers, and utilizing Flutter Doctor for managing dependencies. The chapter emphasizes the ease of app development with Flutter's hot reload feature and highlights its suitability for both new and experienced developers. It encourages further exploration of official documentation and community resources for comprehensive learning.",
                // German
                "Deutsch": "In diesem Kapitel wird Flutter als vielseitiges Toolkit zum Erstellen plattformübergreifender Apps mit Dart vorgestellt. Es führt die Leser durch die Einrichtung der Entwicklungsumgebung, das Verständnis der Flutter-Architekturebenen und die Verwendung von Flutter Doctor zur Verwaltung von Abhängigkeiten. Das Kapitel betont die einfache App-Entwicklung mit Flutters Hot-Reload-Funktion und hebt ihre Eignung sowohl für neue als auch für erfahrene Entwickler hervor. Es ermutigt zur weiteren Erkundung der offiziellen Dokumentation und der Community-Ressourcen für umfassendes Lernen.",
                // Chinese
                "中国人": "本章介绍了 Flutter，它是使用 Dart 构建跨平台应用的多功能工具包。它指导读者设置开发环境、了解 Flutter 架构层以及使用 Flutter Doctor 管理依赖项。本章强调了 Flutter 的热重载功能使应用开发变得轻松，并强调了它对新手和有经验的开发人员的适用性。它鼓励进一步探索官方文档和社区资源，以进行全面学习。",
                // Russian
                "Русский": "В этой главе Flutter представлен как универсальный набор инструментов для создания кроссплатформенных приложений с использованием Dart. Он помогает читателям настроить среду разработки, понять уровни архитектуры Flutter и использовать Flutter Doctor для управления зависимостями. В главе подчеркивается простота разработки приложений с помощью функции горячей перезагрузки Flutter и подчеркивается ее пригодность как для новых, так и для опытных разработчиков. Он поощряет дальнейшее изучение официальной документации и ресурсов сообщества для всестороннего обучения.",
                // French
                "Français": "Ce chapitre présente Flutter en tant que boîte à outils polyvalente permettant de créer des applications multiplateformes à l'aide de Dart. Il guide les lecteurs dans la configuration de l'environnement de développement, la compréhension des couches d'architecture Flutter et l'utilisation de Flutter Doctor pour gérer les dépendances. Le chapitre met l'accent sur la facilité de développement d'applications avec la fonctionnalité de rechargement à chaud de Flutter et souligne son adéquation aux développeurs nouveaux et expérimentés. Il encourage une exploration plus approfondie de la documentation officielle et des ressources communautaires pour un apprentissage complet.",
                // Japanese
                "日本語": "この章では、Dart を使用してクロスプラットフォーム アプリを構築するための多目的ツールキットとして Flutter を紹介します。開発環境の設定、Flutter アーキテクチャ レイヤーの理解、依存関係の管理に Flutter Doctor を活用する方法について読者に説明します。この章では、Flutter のホット リロード機能によるアプリ開発の容易さを強調し、初心者と経験豊富な開発者の両方に適していることを強調します。包括的な学習のために、公式ドキュメントとコミュニティ リソースをさらに調査することをお勧めします。",
                // Korean
                "한국인": "이 장에서는 Dart를 사용하여 크로스 플랫폼 앱을 구축하기 위한 다목적 툴킷인 Flutter를 소개합니다. 개발 환경 설정, Flutter 아키텍처 계층 이해, 종속성 관리를 위한 Flutter Doctor 활용 과정을 독자에게 안내합니다. 이 장에서는 Flutter의 핫 리로드 기능을 통한 앱 개발의 용이성을 강조하고 신규 개발자와 숙련된 개발자 모두에게 적합하다는 점을 강조합니다. 포괄적인 학습을 위해 공식 문서와 커뮤니티 리소스를 추가로 탐색할 것을 권장합니다.",
                // Spanish
                "Español": "Este capítulo presenta Flutter como un conjunto de herramientas versátil para crear aplicaciones multiplataforma utilizando Dart. Guía a los lectores a través de la configuración del entorno de desarrollo, la comprensión de las capas de la arquitectura de Flutter y el uso de Flutter Doctor para administrar las dependencias. El capítulo enfatiza la facilidad de desarrollo de aplicaciones con la función de recarga en caliente de Flutter y destaca su idoneidad tanto para desarrolladores nuevos como experimentados. Fomenta una mayor exploración de la documentación oficial y los recursos comunitarios para un aprendizaje integral.",
                // Hindi
                "हिंदी": "यह अध्याय डार्ट का उपयोग करके क्रॉस-प्लेटफ़ॉर्म ऐप बनाने के लिए फ़्लटर को एक बहुमुखी टूलकिट के रूप में पेश करता है। यह पाठकों को विकास वातावरण स्थापित करने, फ़्लटर आर्किटेक्चर परतों को समझने और निर्भरताओं के प्रबंधन के लिए फ़्लटर डॉक्टर का उपयोग करने के माध्यम से मार्गदर्शन करता है। अध्याय फ़्लटर की हॉट रीलोड सुविधा के साथ ऐप डेवलपमेंट की आसानी पर जोर देता है और नए और अनुभवी दोनों डेवलपर्स के लिए इसकी उपयुक्तता पर प्रकाश डालता है। यह व्यापक सीखने के लिए आधिकारिक दस्तावेज़ीकरण और सामुदायिक संसाधनों की और खोज को प्रोत्साहित करता है।",
                // Portuguese
                "Português": "Este capítulo apresenta o Flutter como um kit de ferramentas versátil para a criação de aplicações multiplataforma utilizando o Dart. Orienta os leitores na configuração do ambiente de desenvolvimento, na compreensão das camadas da arquitetura Flutter e na utilização do Flutter Doctor para gerir dependências. O capítulo enfatiza a facilidade de desenvolvimento de aplicações com a funcionalidade hot reload do Flutter e destaca a sua adequação para programadores novos e experientes. Incentiva uma maior exploração da documentação oficial e dos recursos comunitários para uma aprendizagem abrangente.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ডার্ট ব্যবহার করে ক্রস-প্ল্যাটফর্ম অ্যাপ তৈরি করার জন্য একটি বহুমুখী টুলকিট হিসেবে ফ্লটারের পরিচয় দেয়। এটি পাঠকদের ডেভেলপমেন্ট এনভায়রনমেন্ট স্থাপন, ফ্লাটার আর্কিটেকচার লেয়ার বোঝা এবং নির্ভরতা পরিচালনার জন্য ফ্লাটার ডক্টর ব্যবহারের মাধ্যমে গাইড করে। অধ্যায়টি ফ্লটারের হট রিলোড বৈশিষ্ট্যের সাথে অ্যাপ বিকাশের সহজতার উপর জোর দেয় এবং নতুন এবং অভিজ্ঞ উভয় বিকাশকারীদের জন্য এর উপযুক্ততা হাইলাইট করে। এটি ব্যাপক শিক্ষার জন্য অফিসিয়াল ডকুমেন্টেশন এবং সম্প্রদায়ের সংস্থানগুলির আরও অন্বেষণকে উত্সাহিত করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل Flutter كمجموعة أدوات متعددة الاستخدامات لإنشاء تطبيقات عبر الأنظمة الأساسية باستخدام Dart. إنه يرشد القراء من خلال إعداد بيئة التطوير، وفهم طبقات بنية Flutter، واستخدام Flutter Doctor لإدارة التبعيات. يؤكد هذا الفصل على سهولة تطوير التطبيق من خلال ميزة إعادة التحميل السريع الخاصة بـ Flutter ويسلط الضوء على مدى ملاءمتها للمطورين الجدد وذوي الخبرة. ويشجع على مواصلة استكشاف الوثائق الرسمية وموارد المجتمع من أجل التعلم الشامل.",
                // Persian
                "فارسی": "این فصل Flutter را به عنوان یک ابزار همه کاره برای ساخت برنامه های چند پلتفرمی با استفاده از Dart معرفی می کند. خوانندگان را از طریق راه اندازی محیط توسعه، درک لایه های معماری Flutter و استفاده از Flutter Doctor برای مدیریت وابستگی ها راهنمایی می کند. این فصل بر سهولت توسعه برنامه با ویژگی بارگذاری مجدد داغ Flutter تأکید می کند و مناسب بودن آن را برای توسعه دهندگان جدید و با تجربه برجسته می کند. کاوش بیشتر در اسناد رسمی و منابع جامعه برای یادگیری جامع را تشویق می کند.",
            },
        },
        // 2
        {
            "ChapterName": "Hello, Flutter",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, readers are guided through the process of building a basic Flutter app from scratch. The chapter introduces popular widgets such as ListView and Slider, and culminates in the creation of a lightweight recipe app that features a hard-coded list of recipes. Additionally, it provides instructions on setting up a new Flutter project using the flutter command in the terminal.",
                // German
                "Deutsch": "In diesem Kapitel werden die Leser durch den Prozess der Erstellung einer einfachen Flutter-App von Grund auf geführt. Das Kapitel stellt beliebte Widgets wie ListView und Slider vor und gipfelt in der Erstellung einer leichten Rezept-App mit einer fest codierten Liste von Rezepten. Darüber hinaus enthält es Anweisungen zum Einrichten eines neuen Flutter-Projekts mit dem Flutter-Befehl im Terminal.",
                // Chinese
                "中国人": "本章将指导读者从头开始构建基本的 Flutter 应用。本章介绍了 ListView 和 Slider 等常用小部件，并最终创建了一个轻量级的食谱应用，该应用具有硬编码的食谱列表。此外，它还提供了使用终端中的 flutter 命令设置新 Flutter 项目的说明。",
                // Russian
                "Русский": "В этой главе читатели знакомятся с процессом создания базового приложения Flutter с нуля. В главе представлены популярные виджеты, такие как ListView и Slider, а кульминацией является создание легкого приложения с рецептами, которое содержит жестко запрограммированный список рецептов. Кроме того, он предоставляет инструкции по настройке нового проекта Flutter с помощью команды flutter в терминале.",
                // French
                "Français": "Dans ce chapitre, les lecteurs sont guidés tout au long du processus de création d'une application Flutter de base à partir de zéro. Le chapitre présente des widgets populaires tels que ListView et Slider, et aboutit à la création d'une application de recettes légère qui propose une liste de recettes codées en dur. De plus, il fournit des instructions sur la configuration d'un nouveau projet Flutter à l'aide de la commande flutter dans le terminal.",
                // Japanese
                "日本語": "この章では、基本的な Flutter アプリをゼロから構築するプロセスを順を追って説明します。この章では、ListView や Slider などの人気のウィジェットを紹介し、最後に、ハードコードされたレシピ リストを備えた軽量レシピ アプリの作成方法を説明します。さらに、ターミナルで flutter コマンドを使用して新しい Flutter プロジェクトを設定する手順も説明します。",
                // Korean
                "한국인": "이 장에서는 독자에게 기본 Flutter 앱을 처음부터 구축하는 과정을 안내합니다. 이 장에서는 ListView 및 Slider와 같은 인기 있는 위젯을 소개하고 하드 코딩된 레시피 목록을 제공하는 경량 레시피 앱을 만드는 것으로 마무리됩니다. 또한 터미널에서 flutter 명령을 사용하여 새 Flutter 프로젝트를 설정하는 방법에 대한 지침을 제공합니다.",
                // Spanish
                "Español": "En este capítulo, se guía a los lectores a través del proceso de creación de una aplicación Flutter básica desde cero. El capítulo presenta widgets populares como ListView y Slider, y culmina con la creación de una aplicación de recetas liviana que presenta una lista codificada de recetas. Además, proporciona instrucciones sobre cómo configurar un nuevo proyecto de Flutter usando el comando flutter en la terminal.",
                // Hindi
                "हिंदी": "इस अध्याय में, पाठकों को स्क्रैच से एक बुनियादी फ़्लटर ऐप बनाने की प्रक्रिया के माध्यम से निर्देशित किया जाता है। अध्याय ListView और Slider जैसे लोकप्रिय विजेट का परिचय देता है, और एक हल्के रेसिपी ऐप के निर्माण में परिणत होता है जिसमें व्यंजनों की एक हार्ड-कोडेड सूची होती है। इसके अतिरिक्त, यह टर्मिनल में फ़्लटर कमांड का उपयोग करके एक नया फ़्लटर प्रोजेक्ट सेट करने के निर्देश प्रदान करता है।",
                // Portuguese
                "Português": "Neste capítulo, os leitores são guiados pelo processo de construção de uma aplicação Flutter básica a partir do zero. O capítulo apresenta widgets populares, como o ListView e o Slider, e culmina na criação de uma aplicação de receitas leve que apresenta uma lista de receitas codificada. Além disso, fornece instruções sobre como configurar um novo projeto Flutter utilizando o comando flutter no terminal.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, পাঠকদের স্ক্র্যাচ থেকে একটি মৌলিক ফ্লাটার অ্যাপ তৈরির প্রক্রিয়ার মাধ্যমে নির্দেশিত করা হয়েছে। অধ্যায়টি লিস্টভিউ এবং স্লাইডারের মতো জনপ্রিয় উইজেটগুলির সাথে পরিচয় করিয়ে দেয় এবং একটি হালকা ওজনের রেসিপি অ্যাপ তৈরি করে যা রেসিপিগুলির একটি হার্ড-কোডেড তালিকা বৈশিষ্ট্যযুক্ত। উপরন্তু, এটি টার্মিনালে ফ্লাটার কমান্ড ব্যবহার করে একটি নতুন ফ্লাটার প্রজেক্ট সেট আপ করার নির্দেশনা প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتم إرشاد القراء خلال عملية إنشاء تطبيق Flutter الأساسي من البداية. يقدم الفصل أدوات شائعة مثل ListView وSlider، ويتوج بإنشاء تطبيق وصفات خفيف الوزن يحتوي على قائمة مرمزة من الوصفات. بالإضافة إلى ذلك، فإنه يوفر تعليمات حول إعداد مشروع Flutter جديد باستخدام أمر Flutter في الوحدة الطرفية.",
                // Persian
                "فارسی": "در این فصل، خوانندگان از طریق فرآیند ساخت یک برنامه اصلی Flutter از ابتدا راهنمایی می‌شوند. این فصل ویجت‌های محبوبی مانند ListView و Slider را معرفی می‌کند و با ایجاد یک برنامه دستور غذای سبک وزن که دارای فهرستی از دستور العمل‌ها است، به اوج می‌رسد. علاوه بر این، دستورالعمل‌هایی در مورد راه‌اندازی یک پروژه Flutter جدید با استفاده از دستور flutter در ترمینال ارائه می‌کند.",
            },
        },
        // 3
        {
            "ChapterName": "Basic Widgets",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the focus is on basic widgets in Flutter, which are essential for structuring an app. The chapter categorizes these widgets into three main types: those used for structure, information display, and positioning. It provides a practical guide for building an app called Fooderlich, specifically through the creation of various recipe cards. Additionally, readers are encouraged to download the project from the book's materials repository, resolve any dependency issues, and run the starter project to observe a basic layout that includes an app bar and text.",
                // German
                "Deutsch": "In diesem Kapitel liegt der Schwerpunkt auf grundlegenden Widgets in Flutter, die für die Strukturierung einer App unerlässlich sind. Das Kapitel kategorisiert diese Widgets in drei Haupttypen: solche, die für die Struktur, die Informationsanzeige und die Positionierung verwendet werden. Es bietet eine praktische Anleitung zum Erstellen einer App namens Fooderlich, insbesondere durch die Erstellung verschiedener Rezeptkarten. Darüber hinaus werden die Leser aufgefordert, das Projekt aus dem Materialrepository des Buches herunterzuladen, alle Abhängigkeitsprobleme zu lösen und das Starterprojekt auszuführen, um ein grundlegendes Layout zu beobachten, das eine App-Leiste und Text enthält.",
                // Chinese
                "中国人": "本章重点介绍 Flutter 中的基本小部件，这些小部件对于构建应用程序至关重要。本章将这些小部件分为三种主要类型：用于结构、信息显示和定位的小部件。它提供了构建名为 Fooderlich 的应用程序的实用指南，具体是通过创建各种食谱卡。此外，鼓励读者从本书的材料库下载该项目，解决任何依赖关系问题，并运行入门项目以观察包含应用栏和文本的基本布局。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется базовым виджетам Flutter, которые необходимы для структурирования приложения. В главе эти виджеты разделены на три основных типа: те, которые используются для структуры, отображения информации и позиционирования. Он представляет собой практическое руководство по созданию приложения под названием Fooderlich, в частности путем создания различных карточек с рецептами. Кроме того, читателям предлагается загрузить проект из репозитория материалов книги, решить любые проблемы с зависимостями и запустить стартовый проект, чтобы увидеть базовый макет, включающий панель приложения и текст.",
                // French
                "Français": "Dans ce chapitre, l'accent est mis sur les widgets de base de Flutter, qui sont essentiels pour structurer une application. Le chapitre classe ces widgets en trois types principaux : ceux utilisés pour la structure, l'affichage des informations et le positionnement. Il fournit un guide pratique pour créer une application appelée Fooderlich, notamment à travers la création de diverses fiches de recettes. De plus, les lecteurs sont encouragés à télécharger le projet à partir du référentiel de matériaux du livre, à résoudre tout problème de dépendance et à exécuter le projet de démarrage pour observer une présentation de base comprenant une barre d'application et du texte.",
                // Japanese
                "日本語": "この章では、アプリの構造化に不可欠な Flutter の基本的なウィジェットに焦点を当てています。この章では、これらのウィジェットを、構造、情報表示、配置に使用される 3 つの主なタイプに分類しています。この章では、さまざまなレシピ カードの作成を通じて、Fooderlich というアプリを構築するための実用的なガイドを提供します。さらに、読者は、本の資料リポジトリからプロジェクトをダウンロードし、依存関係の問題を解決し、スターター プロジェクトを実行して、アプリ バーとテキストを含む基本的なレイアウトを確認することをお勧めします。",
                // Korean
                "한국인": "이 장에서는 앱 구조화에 필수적인 Flutter의 기본 위젯에 중점을 둡니다. 이 장에서는 이러한 위젯을 구조, 정보 표시 및 위치 지정에 사용되는 세 가지 주요 유형으로 분류합니다. 특히 다양한 레시피 카드 생성을 통해 Fooderlich라는 앱을 구축하기 위한 실용적인 가이드를 제공합니다. 또한 독자는 책의 자료 저장소에서 프로젝트를 다운로드하고, 종속성 문제를 해결하고, 시작 프로젝트를 실행하여 앱 바와 텍스트가 포함된 기본 레이아웃을 관찰하는 것이 좋습니다.",
                // Spanish
                "Español": "En este capítulo, la atención se centra en los widgets básicos de Flutter, que son esenciales para estructurar una aplicación. El capítulo clasifica estos widgets en tres tipos principales: los utilizados para estructura, visualización de información y posicionamiento. Proporciona una guía práctica para crear una aplicación llamada Fooderlich, específicamente mediante la creación de varias tarjetas de recetas. Además, se anima a los lectores a descargar el proyecto desde el repositorio de materiales del libro, resolver cualquier problema de dependencia y ejecutar el proyecto inicial para observar un diseño básico que incluye una barra de aplicación y texto.",
                // Hindi
                "हिंदी": "इस अध्याय में, फ़्लटर में बुनियादी विजेट पर ध्यान केंद्रित किया गया है, जो ऐप की संरचना के लिए आवश्यक हैं। अध्याय इन विजेट को तीन मुख्य प्रकारों में वर्गीकृत करता है: संरचना, सूचना प्रदर्शन और स्थिति निर्धारण के लिए उपयोग किए जाने वाले। यह फ़ूडरलिच नामक ऐप बनाने के लिए एक व्यावहारिक मार्गदर्शिका प्रदान करता है, विशेष रूप से विभिन्न रेसिपी कार्ड के निर्माण के माध्यम से। इसके अतिरिक्त, पाठकों को पुस्तक के सामग्री भंडार से प्रोजेक्ट डाउनलोड करने, किसी भी निर्भरता के मुद्दों को हल करने और एक बुनियादी लेआउट को देखने के लिए स्टार्टर प्रोजेक्ट चलाने के लिए प्रोत्साहित किया जाता है जिसमें ऐप बार और टेक्स्ट शामिल है।",
                // Portuguese
                "Português": "Neste capítulo, o foco está nos widgets básicos do Flutter, essenciais para estruturar uma aplicação. O capítulo categoriza estes widgets em três tipos principais: os utilizados para estrutura, exibição de informação e posicionamento. Fornece um guia prático para a construção de uma aplicação chamada Fooderlich, especificamente através da criação de diversos cartões de receitas. Além disso, os leitores são encorajados a descarregar o projeto do repositório de materiais do livro, a resolver quaisquer problemas de dependência e a executar o projeto inicial para observar um layout básico que inclui uma barra de aplicações e texto.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, ফোকাস ফ্লটারের মৌলিক উইজেটগুলির উপর, যা একটি অ্যাপ গঠনের জন্য অপরিহার্য। অধ্যায়টি এই উইজেটগুলিকে তিনটি প্রধান প্রকারে শ্রেণীবদ্ধ করে: যেগুলি গঠন, তথ্য প্রদর্শন এবং অবস্থানের জন্য ব্যবহৃত হয়। এটি ফুডারলিচ নামে একটি অ্যাপ তৈরির জন্য একটি ব্যবহারিক নির্দেশিকা প্রদান করে, বিশেষ করে বিভিন্ন রেসিপি কার্ড তৈরির মাধ্যমে। অতিরিক্তভাবে, পাঠকদের বইয়ের উপকরণ ভান্ডার থেকে প্রকল্পটি ডাউনলোড করতে, যেকোন নির্ভরতা সমস্যা সমাধান করতে এবং একটি অ্যাপ বার এবং পাঠ্য অন্তর্ভুক্ত একটি মৌলিক বিন্যাস পর্যবেক্ষণ করতে স্টার্টার প্রকল্প চালানোর জন্য উত্সাহিত করা হয়।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتم التركيز على الأدوات الأساسية في Flutter، والتي تعتبر ضرورية لبناء التطبيق. يصنف هذا الفصل هذه الأدوات إلى ثلاثة أنواع رئيسية: تلك المستخدمة للهيكل وعرض المعلومات وتحديد المواقع. فهو يوفر دليلاً عمليًا لبناء تطبيق يسمى Fooderlich، وتحديدًا من خلال إنشاء بطاقات وصفات متنوعة. بالإضافة إلى ذلك، يتم تشجيع القراء على تنزيل المشروع من مستودع مواد الكتاب، وحل أي مشكلات تتعلق بالتبعية، وتشغيل المشروع المبدئي لمراقبة التخطيط الأساسي الذي يتضمن شريط التطبيق والنص.",
                // Persian
                "فارسی": "در این فصل، تمرکز بر ویجت‌های اساسی در Flutter است که برای ساختار یک برنامه ضروری هستند. این فصل این ویجت ها را به سه نوع اصلی دسته بندی می کند: آنهایی که برای ساختار، نمایش اطلاعات و موقعیت یابی استفاده می شوند. این یک راهنمای عملی برای ساخت برنامه ای به نام Fooderlich، به ویژه از طریق ایجاد کارت های دستور العمل مختلف، ارائه می دهد. علاوه بر این، خوانندگان تشویق می شوند که پروژه را از مخزن مواد کتاب دانلود کنند، هر گونه مشکل وابستگی را حل کنند، و پروژه شروع را برای مشاهده یک طرح اولیه که شامل نوار برنامه و متن است، اجرا کنند.",
            },
        },
        // 4
        {
            "ChapterName": "Understanding Widgets",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the focus is on understanding widgets in Flutter. Widgets are the fundamental building blocks of the user interface, akin to Legos, allowing for the creation of dynamic UI layouts. The chapter delves into widget theory, exploring different types of widgets, widget rendering, and the widget lifecycle. It emphasizes the importance of maintaining widget structure for performance optimization, utilizing tools like the Flutter Inspector for debugging and experimenting with widget trees. The chapter also introduces Stateful Widgets for managing dynamic UI states and highlights the use of Inherited Widgets to access state information from parent elements in the widget hierarchy.",
                // German
                "Deutsch": "In diesem Kapitel liegt der Schwerpunkt auf dem Verständnis von Widgets in Flutter. Widgets sind die grundlegenden Bausteine ​​der Benutzeroberfläche, ähnlich wie Legosteine, die die Erstellung dynamischer UI-Layouts ermöglichen. Das Kapitel befasst sich mit der Widget-Theorie und untersucht verschiedene Widget-Typen, Widget-Rendering und den Widget-Lebenszyklus. Es betont die Bedeutung der Aufrechterhaltung der Widget-Struktur zur Leistungsoptimierung und verwendet Tools wie den Flutter Inspector zum Debuggen und Experimentieren mit Widget-Bäumen. Das Kapitel stellt auch Stateful Widgets zur Verwaltung dynamischer UI-Zustände vor und hebt die Verwendung von Inherited Widgets hervor, um auf Statusinformationen von übergeordneten Elementen in der Widget-Hierarchie zuzugreifen.",
                // Chinese
                "中国人": "本章重点介绍 Flutter 中的 widget。Widget 是用户界面的基本构建块，类似于乐高积木，可用于创建动态 UI 布局。本章深入探讨了 widget 理论，探索了不同类型的 widget、widget 渲染和 widget 生命周期。它强调了维护 widget 结构对于性能优化的重要性，并利用 Flutter Inspector 等工具来调试和试验 widget 树。本章还介绍了用于管理动态 UI 状态的 Stateful Widget，并重点介绍了如何使用 Inherited Widget 从 widget 层次结构中的父元素访问状态信息。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется пониманию виджетов во Flutter. Виджеты — это фундаментальные строительные блоки пользовательского интерфейса, подобные LEGO, позволяющие создавать динамические макеты пользовательского интерфейса. Глава углубляется в теорию виджетов, изучает различные типы виджетов, рендеринг виджетов и жизненный цикл виджетов. Он подчеркивает важность поддержания структуры виджетов для оптимизации производительности, использования таких инструментов, как Flutter Inspector, для отладки и экспериментирования с деревьями виджетов. В главе также представлены виджеты с отслеживанием состояния для управления динамическими состояниями пользовательского интерфейса и освещается использование унаследованных виджетов для доступа к информации о состоянии из родительских элементов в иерархии виджетов.",
                // French
                "Français": "Dans ce chapitre, l'accent est mis sur la compréhension des widgets dans Flutter. Les widgets sont les éléments fondamentaux de l'interface utilisateur, semblables aux Legos, permettant la création de mises en page d'interface utilisateur dynamiques. Le chapitre approfondit la théorie des widgets, explorant différents types de widgets, le rendu des widgets et le cycle de vie des widgets. Il souligne l'importance de maintenir la structure des widgets pour l'optimisation des performances, en utilisant des outils tels que Flutter Inspector pour le débogage et l'expérimentation des arborescences de widgets. Le chapitre présente également les widgets avec état pour gérer les états dynamiques de l'interface utilisateur et met en évidence l'utilisation des widgets hérités pour accéder aux informations d'état des éléments parents dans la hiérarchie des widgets.",
                // Japanese
                "日本語": "この章では、Flutter のウィジェットについて理解することに焦点を当てます。ウィジェットは、レゴに似たユーザー インターフェースの基本的な構成要素であり、動的な UI レイアウトの作成を可能にします。この章では、ウィジェット理論を詳しく調べ、さまざまな種類のウィジェット、ウィジェットのレンダリング、ウィジェットのライフサイクルについて説明します。パフォーマンスの最適化のためにウィジェット構造を維持することの重要性を強調し、Flutter Inspector などのツールを使用してウィジェット ツリーをデバッグおよび実験します。この章では、動的な UI 状態を管理するためのステートフル ウィジェットも紹介し、ウィジェット階層の親要素から状態情報にアクセスするための継承ウィジェットの使用に焦点を当てます。",
                // Korean
                "한국인": "이 장에서는 Flutter의 위젯을 이해하는 데 중점을 둡니다. 위젯은 레고와 유사한 사용자 인터페이스의 기본 구성 요소로, 동적 UI 레이아웃을 생성할 수 있습니다. 이 장에서는 다양한 유형의 위젯, 위젯 렌더링 및 위젯 수명주기를 탐색하면서 위젯 이론을 자세히 살펴봅니다. 위젯 트리 디버깅 및 실험을 위해 Flutter Inspector와 같은 도구를 활용하여 성능 최적화를 위해 위젯 구조를 유지하는 것의 중요성을 강조합니다. 또한 이 장에서는 동적 UI 상태를 관리하기 위한 상태 저장 위젯을 소개하고 위젯 계층 구조의 상위 요소에서 상태 정보에 액세스하기 위해 상속된 위젯을 사용하는 방법을 강조합니다.",
                // Spanish
                "Español": "En este capítulo, la atención se centra en comprender los widgets en Flutter. Los widgets son los componentes fundamentales de la interfaz de usuario, similares a los Legos, y permiten la creación de diseños de interfaz de usuario dinámicos. El capítulo profundiza en la teoría de los widgets, explorando diferentes tipos de widgets, su representación y su ciclo de vida. Enfatiza la importancia de mantener la estructura de los widgets para optimizar el rendimiento, utilizando herramientas como Flutter Inspector para depurar y experimentar con árboles de widgets. El capítulo también presenta los widgets con estado para administrar estados dinámicos de la interfaz de usuario y destaca el uso de widgets heredados para acceder a la información de estado de los elementos principales en la jerarquía de widgets.",
                // Hindi
                "हिंदी": "इस अध्याय में, फ़्लटर में विजेट को समझने पर ध्यान केंद्रित किया गया है। विजेट उपयोगकर्ता इंटरफ़ेस के मूलभूत निर्माण खंड हैं, जो लेगोस के समान हैं, जो गतिशील UI लेआउट के निर्माण की अनुमति देते हैं। अध्याय विजेट सिद्धांत में गहराई से जाता है, विभिन्न प्रकार के विजेट, विजेट रेंडरिंग और विजेट जीवनचक्र की खोज करता है। यह प्रदर्शन अनुकूलन के लिए विजेट संरचना को बनाए रखने, डिबगिंग के लिए फ़्लटर इंस्पेक्टर जैसे उपकरणों का उपयोग करने और विजेट पेड़ों के साथ प्रयोग करने के महत्व पर जोर देता है। अध्याय गतिशील UI स्थितियों के प्रबंधन के लिए स्टेटफुल विजेट का भी परिचय देता है और विजेट पदानुक्रम में पैरेंट तत्वों से स्थिति की जानकारी तक पहुँचने के लिए इनहेरिटेड विजेट के उपयोग पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Neste capítulo, o foco está na compreensão dos widgets no Flutter. Os widgets são os blocos de construção fundamentais da interface do utilizador, semelhantes aos Legos, permitindo a criação de layouts de UI dinâmicos. O capítulo aprofunda a teoria dos widgets, explorando diferentes tipos de widgets, a sua renderização e o ciclo de vida dos widgets. Realça a importância de manter a estrutura do widget para a otimização do desempenho, utilizando ferramentas como o Flutter Inspector para a depuração e experimentação com árvores de widgets. O capítulo apresenta também Stateful Widgets para gerir estados de UI dinâmicos e destaca a utilização de Inherited Widgets para aceder a informações de estado dos elementos pais na hierarquia de widgets.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, ফোকাস ফ্লটারে উইজেট বোঝার উপর। উইজেটগুলি হল ইউজার ইন্টারফেসের মৌলিক বিল্ডিং ব্লক, লেগোসের মতো, যা গতিশীল UI লেআউট তৈরির অনুমতি দেয়। অধ্যায়টি উইজেট তত্ত্ব নিয়ে আলোচনা করে, বিভিন্ন ধরনের উইজেট, উইজেট রেন্ডারিং এবং উইজেট জীবনচক্রের অন্বেষণ করে। এটি পারফরম্যান্স অপ্টিমাইজেশানের জন্য উইজেট কাঠামো বজায় রাখার গুরুত্বের উপর জোর দেয়, ডিবাগিং এবং উইজেট ট্রিগুলির সাথে পরীক্ষা করার জন্য ফ্লাটার ইন্সপেক্টরের মতো সরঞ্জামগুলি ব্যবহার করে৷ অধ্যায়টি গতিশীল UI রাজ্যগুলি পরিচালনার জন্য স্টেটফুল উইজেটগুলিও প্রবর্তন করে এবং উইজেট অনুক্রমের মূল উপাদানগুলি থেকে রাজ্যের তথ্য অ্যাক্সেস করতে উত্তরাধিকারসূত্রে পাওয়া উইজেটগুলির ব্যবহারকে হাইলাইট করে৷",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتم التركيز على فهم الأدوات في Flutter. تعد الأدوات هي اللبنات الأساسية لواجهة المستخدم، على غرار Legos، مما يسمح بإنشاء تخطيطات ديناميكية لواجهة المستخدم. يتعمق الفصل في نظرية عناصر واجهة المستخدم، ويستكشف أنواعًا مختلفة من عناصر واجهة المستخدم، وعرض عناصر واجهة المستخدم، ودورة حياة عنصر واجهة المستخدم. ويؤكد على أهمية الحفاظ على بنية عنصر واجهة المستخدم لتحسين الأداء، وذلك باستخدام أدوات مثل Flutter Inspector لتصحيح الأخطاء وتجريب أشجار عناصر واجهة المستخدم. يقدم الفصل أيضًا عناصر واجهة المستخدم ذات الحالة لإدارة حالات واجهة المستخدم الديناميكية ويسلط الضوء على استخدام عناصر واجهة المستخدم الموروثة للوصول إلى معلومات الحالة من العناصر الأصلية في التسلسل الهرمي لعناصر واجهة المستخدم.",
                // Persian
                "فارسی": "در این فصل، تمرکز بر درک ویجت ها در فلاتر است. ویجت‌ها بلوک‌های اساسی رابط کاربری هستند، شبیه به لگوها، که امکان ایجاد طرح‌بندی‌های پویا UI را فراهم می‌کنند. این فصل به تئوری ویجت می پردازد، انواع مختلف ویجت ها، رندر ویجت و چرخه عمر ویجت را بررسی می کند. این بر اهمیت حفظ ساختار ویجت برای بهینه سازی عملکرد، استفاده از ابزارهایی مانند Flutter Inspector برای اشکال زدایی و آزمایش درختان ویجت تاکید می کند. این فصل همچنین ویجت‌های Stateful را برای مدیریت حالت‌های پویا UI معرفی می‌کند و استفاده از ویجت‌های ارثی را برای دسترسی به اطلاعات وضعیت از عناصر والد در سلسله مراتب ویجت برجسته می‌کند.",
            },
        },
        // 5
        {
            "ChapterName": "Scrollable Widgets",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter delves into Scrollable Widgets, focusing on ListView, GridView, and nested scroll views. The chapter provides a comprehensive guide on building scrollable content, including setting up ListView, creating Explore and Recipes screens, and implementing custom widgets. Key concepts covered include scroll direction, primary property, physics, FutureBuilder usage, and scroll control. Practical examples and resources are provided to aid in further exploration of Flutter development, making it a valuable resource for mastering scrollable UI elements in Flutter apps.",
                // German
                "Deutsch": "Dieses Kapitel befasst sich mit scrollbaren Widgets und konzentriert sich dabei auf ListView, GridView und verschachtelte Scroll-Ansichten. Das Kapitel bietet eine umfassende Anleitung zum Erstellen scrollbarer Inhalte, einschließlich der Einrichtung von ListView, der Erstellung von Explore- und Recipes-Bildschirmen und der Implementierung benutzerdefinierter Widgets. Zu den behandelten Schlüsselkonzepten gehören Scrollrichtung, primäre Eigenschaft, Physik, FutureBuilder-Verwendung und Scroll-Steuerung. Es werden praktische Beispiele und Ressourcen bereitgestellt, um die weitere Erforschung der Flutter-Entwicklung zu unterstützen, was es zu einer wertvollen Ressource für die Beherrschung scrollbarer UI-Elemente in Flutter-Apps macht.",
                // Chinese
                "中国人": "本章深入探讨了可滚动小部件，重点介绍了 ListView、GridView 和嵌套滚动视图。本章提供了有关构建可滚动内容的全面指南，包括设置 ListView、创建“探索”和“食谱”屏幕以及实现自定义小部件。涵盖的关键概念包括滚动方向、主要属性、物理、FutureBuilder 用法和滚动控制。提供了实际示例和资源以帮助进一步探索 Flutter 开发，使其成为掌握 Flutter 应用中可滚动 UI 元素的宝贵资源。",
                // Russian
                "Русский": "В этой главе мы углубимся в прокручиваемые виджеты, уделив особое внимание ListView, GridView и вложенным представлениям прокрутки. В этой главе представлено подробное руководство по созданию прокручиваемого контента, включая настройку ListView, создание экранов «Обзор» и «Рецепты», а также реализацию пользовательских виджетов. Ключевые концепции, которые рассматриваются, включают направление прокрутки, основное свойство, физику, использование FutureBuilder и управление прокруткой. Практические примеры и ресурсы предоставляются для помощи в дальнейшем изучении разработки Flutter, что делает его ценным ресурсом для освоения прокручиваемых элементов пользовательского интерфейса в приложениях Flutter.",
                // French
                "Français": "Ce chapitre se penche sur les widgets défilants, en se concentrant sur ListView, GridView et les vues de défilement imbriquées. Le chapitre fournit un guide complet sur la création de contenu déroulant, y compris la configuration de ListView, la création d'écrans Explorer et Recettes et la mise en œuvre de widgets personnalisés. Les concepts clés abordés incluent la direction de défilement, la propriété principale, la physique, l'utilisation de FutureBuilder et le contrôle de défilement. Des exemples pratiques et des ressources sont fournis pour faciliter une exploration plus approfondie du développement Flutter, ce qui en fait une ressource précieuse pour maîtriser les éléments d'interface utilisateur défilants dans les applications Flutter.",
                // Japanese
                "日本語": "この章では、スクロール可能なウィジェットについて詳しく説明します。特に、ListView、GridView、ネストされたスクロール ビューに焦点を当てます。この章では、ListView の設定、Explore 画面と Recipes 画面の作成、カスタム ウィジェットの実装など、スクロール可能なコンテンツの作成に関する包括的なガイドを提供します。主な概念には、スクロール方向、プライマリ プロパティ、物理特性、FutureBuilder の使用法、スクロール コントロールなどがあります。Flutter 開発をさらに探求するのに役立つ実用的な例とリソースが提供されており、Flutter アプリでスクロール可能な UI 要素を習得するための貴重なリソースになります。",
                // Korean
                "한국인": "이 장에서는 ListView, GridView 및 중첩 스크롤 보기에 중점을 두고 스크롤 가능한 위젯을 자세히 살펴봅니다. 이 장에서는 ListView 설정, 탐색 및 레시피 화면 생성, 사용자 정의 위젯 구현을 포함하여 스크롤 가능한 콘텐츠 구축에 대한 포괄적인 가이드를 제공합니다. 다루는 주요 개념에는 스크롤 방향, 기본 속성, 물리학, FutureBuilder 사용 및 스크롤 제어가 포함됩니다. Flutter 개발에 대한 추가 탐색을 돕기 위해 실제 예제와 리소스가 제공되므로 Flutter 앱에서 스크롤 가능한 UI 요소를 마스터하는 데 유용한 리소스가 됩니다.",
                // Spanish
                "Español": "Este capítulo profundiza en los widgets desplazables, centrándose en ListView, GridView y vistas de desplazamiento anidadas. El capítulo proporciona una guía completa sobre cómo crear contenido desplazable, incluida la configuración de ListView, la creación de pantallas Explorar y Recetas y la implementación de widgets personalizados. Los conceptos clave cubiertos incluyen dirección de desplazamiento, propiedad primaria, física, uso de FutureBuilder y control de desplazamiento. Se proporcionan ejemplos y recursos prácticos para ayudar en una mayor exploración del desarrollo de Flutter, lo que lo convierte en un recurso valioso para dominar los elementos de la interfaz de usuario desplazables en las aplicaciones de Flutter.",
                // Hindi
                "हिंदी": "यह अध्याय स्क्रॉल करने योग्य विजेट्स पर विस्तार से चर्चा करता है, जिसमें ListView, GridView और नेस्टेड स्क्रॉल व्यू पर ध्यान केंद्रित किया गया है। यह अध्याय स्क्रॉल करने योग्य सामग्री बनाने पर एक व्यापक मार्गदर्शिका प्रदान करता है, जिसमें ListView सेट करना, एक्सप्लोर और रेसिपी स्क्रीन बनाना और कस्टम विजेट लागू करना शामिल है। कवर की गई प्रमुख अवधारणाओं में स्क्रॉल दिशा, प्राथमिक गुण, भौतिकी, FutureBuilder उपयोग और स्क्रॉल नियंत्रण शामिल हैं। फ़्लटर विकास के आगे के अन्वेषण में सहायता के लिए व्यावहारिक उदाहरण और संसाधन प्रदान किए गए हैं, जो इसे फ़्लटर ऐप में स्क्रॉल करने योग्य UI तत्वों में महारत हासिल करने के लिए एक मूल्यवान संसाधन बनाता है।",
                // Portuguese
                "Português": "Este capítulo aprofunda os widgets de rolagem, com foco em ListView, GridView e visualizações de rolagem aninhadas. O capítulo fornece um guia abrangente sobre a construção de conteúdo rolável, incluindo a configuração do ListView, a criação de ecrãs Explorar e Receitas e a implementação de widgets personalizados. Os principais conceitos abordados incluem a direção de rolagem, a propriedade primária, a física, a utilização do FutureBuilder e o controlo de rolagem. São fornecidos exemplos práticos e recursos para auxiliar na exploração adicional do desenvolvimento do Flutter, tornando-o um recurso valioso para dominar elementos de UI roláveis ​​nas aplicações Flutter.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি লিস্টভিউ, গ্রিডভিউ এবং নেস্টেড স্ক্রোল ভিউগুলিতে ফোকাস করে স্ক্রোলযোগ্য উইজেটগুলির মধ্যে বিস্তারিত করে। অধ্যায়টি লিস্টভিউ সেট আপ করা, এক্সপ্লোর এবং রেসিপি স্ক্রীন তৈরি করা এবং কাস্টম উইজেটগুলি বাস্তবায়ন সহ স্ক্রোলযোগ্য সামগ্রী তৈরি করার জন্য একটি বিস্তৃত নির্দেশিকা প্রদান করে। আচ্ছাদিত মূল ধারণাগুলির মধ্যে রয়েছে স্ক্রোল দিক, প্রাথমিক সম্পত্তি, পদার্থবিদ্যা, ফিউচার বিল্ডার ব্যবহার এবং স্ক্রোল নিয়ন্ত্রণ। Flutter ডেভেলপমেন্টের আরও অন্বেষণে সাহায্য করার জন্য ব্যবহারিক উদাহরণ এবং সংস্থানগুলি প্রদান করা হয়, এটিকে ফ্লটার অ্যাপগুলিতে স্ক্রোলযোগ্য UI উপাদানগুলি আয়ত্ত করার জন্য একটি মূল্যবান সংস্থান করে তোলে।",
                // Arabic
                "عَرَبِيّ": "يتعمق هذا الفصل في الأدوات القابلة للتمرير، مع التركيز على ListView وGridView وطرق عرض التمرير المتداخلة. يقدم الفصل دليلاً شاملاً حول إنشاء محتوى قابل للتمرير، بما في ذلك إعداد ListView وإنشاء شاشات الاستكشاف والوصفات وتنفيذ عناصر واجهة المستخدم المخصصة. تشمل المفاهيم الأساسية التي يتم تناولها اتجاه التمرير، والملكية الأساسية، والفيزياء، واستخدام FutureBuilder، والتحكم في التمرير. يتم توفير أمثلة وموارد عملية للمساعدة في مواصلة استكشاف تطوير Flutter، مما يجعلها موردًا قيمًا لإتقان عناصر واجهة المستخدم القابلة للتمرير في تطبيقات Flutter.",
                // Persian
                "فارسی": "این فصل به ابزارک‌های قابل پیمایش می‌پردازد و بر ListView، GridView و نماهای پیمایش تودرتو تمرکز می‌کند. این فصل یک راهنمای جامع در مورد ساخت محتوای قابل پیمایش، از جمله راه‌اندازی ListView، ایجاد صفحه‌های Explore و Recipes و پیاده‌سازی ویجت‌های سفارشی ارائه می‌کند. مفاهیم کلیدی پوشش داده شده عبارتند از جهت اسکرول، ویژگی اصلی، فیزیک، استفاده از FutureBuilder و کنترل اسکرول. مثال‌ها و منابع عملی برای کمک به کاوش بیشتر در توسعه Flutter ارائه شده است، و آن را به منبعی ارزشمند برای تسلط بر عناصر UI قابل پیمایش در برنامه‌های Flutter تبدیل می‌کند.",
            },
        },
        // 6
        {
            "ChapterName": "Interactive Widgets",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, interactive widgets are explored to enhance user engagement and input collection in app development. The chapter covers creating gesture-based widgets, time and date pickers, input and selection widgets, and dismissable widgets. The focus is on building the 'To Buy' tab in the Fooderlich app, allowing users to create, modify, and check off grocery list items. The chapter also introduces the Provider package for state management and emphasizes preserving state across different tabs for a seamless user experience.",
                // German
                "Deutsch": "In diesem Kapitel werden interaktive Widgets untersucht, um die Benutzereinbindung und die Eingabeerfassung bei der App-Entwicklung zu verbessern. Das Kapitel behandelt das Erstellen gestenbasierter Widgets, Zeit- und Datumsauswahlen, Eingabe- und Auswahl-Widgets und ausblendbare Widgets. Der Schwerpunkt liegt auf dem Erstellen der Registerkarte „Zum Kaufen“ in der Fooderlich-App, mit der Benutzer Einkaufslistenelemente erstellen, ändern und abhaken können. Das Kapitel stellt auch das Provider-Paket für die Statusverwaltung vor und betont die Beibehaltung des Status über verschiedene Registerkarten hinweg für ein nahtloses Benutzererlebnis.",
                // Chinese
                "中国人": "本章探讨了交互式小部件，以增强应用开发中的用户参与度和输入收集。本章介绍了如何创建基于手势的小部件、时间和日期选择器、输入和选择小部件以及可关闭的小部件。重点是构建 Fooderlich 应用中“待购买”选项卡，让用户可以创建、修改和勾选购物清单项目。本章还介绍了用于状态管理的 Provider 包，并强调了在不同选项卡之间保存状态以实现无缝的用户体验。",
                // Russian
                "Русский": "В этой главе рассматриваются интерактивные виджеты для повышения вовлеченности пользователей и сбора входных данных при разработке приложений. В главе рассматривается создание виджетов на основе жестов, средств выбора времени и даты, виджетов ввода и выбора, а также виджетов, которые можно закрыть. Основное внимание уделяется созданию вкладки «Купить» в приложении Fooderlich, позволяющей пользователям создавать, изменять и отмечать элементы списка покупок. В главе также представлен пакет Provider для управления состоянием и подчеркнуто сохранение состояния на разных вкладках для обеспечения беспрепятственного взаимодействия с пользователем.",
                // French
                "Français": "Dans ce chapitre, les widgets interactifs sont explorés pour améliorer l'engagement des utilisateurs et la collecte de commentaires dans le développement d'applications. Le chapitre couvre la création de widgets basés sur les gestes, de sélecteurs d'heure et de date, de widgets de saisie et de sélection et de widgets pouvant être ignorés. L'accent est mis sur la création de l'onglet « Acheter » dans l'application Fooderlich, permettant aux utilisateurs de créer, modifier et cocher les éléments de la liste d'épicerie. Le chapitre présente également le package Provider pour la gestion de l'état et met l'accent sur la préservation de l'état dans différents onglets pour une expérience utilisateur transparente.",
                // Japanese
                "日本語": "この章では、アプリ開発におけるユーザーエンゲージメントと入力収集を強化するためのインタラクティブなウィジェットについて説明します。この章では、ジェスチャーベースのウィジェット、時間と日付の選択、入力および選択ウィジェット、および閉じられるウィジェットの作成について説明します。焦点は、Fooderlich アプリの「To Buy」タブの構築にあります。このタブでは、ユーザーが食料品リストの項目を作成、変更、およびチェックできます。この章では、状態管理用の Provider パッケージも紹介し、シームレスなユーザーエクスペリエンスを実現するために、さまざまなタブ間で状態を維持することに重点を置いています。",
                // Korean
                "한국인": "이 장에서는 앱 개발 시 사용자 참여와 입력 수집을 향상시키기 위해 대화형 위젯을 살펴봅니다. 이 장에서는 동작 기반 위젯, 시간 및 날짜 선택기, 입력 및 선택 위젯, 해제 가능한 위젯을 만드는 방법을 다룹니다. Fooderlich 앱의 '구매' 탭을 구축하여 사용자가 식료품 목록 항목을 생성, 수정 및 확인할 수 있도록 하는 데 중점을 두고 있습니다. 또한 이 장에서는 상태 관리를 위한 공급자 패키지를 소개하고 원활한 사용자 경험을 위해 여러 탭에서 상태를 유지하는 것을 강조합니다.",
                // Spanish
                "Español": "En este capítulo, se exploran los widgets interactivos para mejorar la participación del usuario y la recopilación de entradas en el desarrollo de aplicaciones. El capítulo cubre la creación de widgets basados ​​en gestos, selectores de fecha y hora, widgets de entrada y selección, y widgets descartables. La atención se centra en crear la pestaña 'Comprar' en la aplicación Fooderlich, lo que permite a los usuarios crear, modificar y marcar elementos de la lista de compras. El capítulo también presenta el paquete Proveedor para la gestión del estado y enfatiza la preservación del estado en diferentes pestañas para una experiencia de usuario perfecta.",
                // Hindi
                "हिंदी": "इस अध्याय में, ऐप विकास में उपयोगकर्ता जुड़ाव और इनपुट संग्रह को बढ़ाने के लिए इंटरैक्टिव विजेट का पता लगाया गया है। अध्याय में जेस्चर-आधारित विजेट, समय और दिनांक पिकर, इनपुट और चयन विजेट और खारिज करने योग्य विजेट बनाना शामिल है। फ़ूडरलिच ऐप में 'टू बाय' टैब बनाने पर ध्यान केंद्रित किया गया है, जिससे उपयोगकर्ता किराने की सूची आइटम बना सकते हैं, संशोधित कर सकते हैं और चेक कर सकते हैं। अध्याय में स्टेट मैनेजमेंट के लिए प्रदाता पैकेज भी पेश किया गया है और एक सहज उपयोगकर्ता अनुभव के लिए विभिन्न टैब में स्टेट को संरक्षित करने पर जोर दिया गया है।",
                // Portuguese
                "Português": "Neste capítulo, os widgets interativos são explorados para melhorar o envolvimento do utilizador e a recolha de informações no desenvolvimento de aplicações. O capítulo aborda a criação de widgets baseados em gestos, seletores de hora e data, widgets de entrada e seleção e widgets dispensáveis. O foco está na construção do separador ‘Comprar’ na aplicação Fooderlich, permitindo aos utilizadores criar, modificar e marcar itens da lista de compras. O capítulo apresenta também o pacote Provider para a gestão de estado e enfatiza a preservação do estado em diferentes separadores para uma experiência de utilizador perfeita.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, অ্যাপ ডেভেলপমেন্টে ব্যবহারকারীর ব্যস্ততা এবং ইনপুট সংগ্রহ বাড়াতে ইন্টারেক্টিভ উইজেটগুলি অন্বেষণ করা হয়েছে। অধ্যায়টি অঙ্গভঙ্গি-ভিত্তিক উইজেট, সময় এবং তারিখ বাছাইকারী, ইনপুট এবং নির্বাচন উইজেট এবং বাতিলযোগ্য উইজেটগুলি তৈরি করে। ফোকাস হচ্ছে ফুডারলিচ অ্যাপে 'টু বাই' ট্যাব তৈরি করা, যা ব্যবহারকারীদের মুদির তালিকার আইটেমগুলি তৈরি, সংশোধন এবং চেক করার অনুমতি দেয়। অধ্যায়টি রাষ্ট্র পরিচালনার জন্য প্রদানকারী প্যাকেজও প্রবর্তন করে এবং একটি নির্বিঘ্ন ব্যবহারকারীর অভিজ্ঞতার জন্য বিভিন্ন ট্যাব জুড়ে রাষ্ট্র সংরক্ষণের উপর জোর দেয়।",
                // Arabic
                'عَرَبِيّ': "في هذا الفصل، يتم استكشاف الأدوات التفاعلية لتعزيز مشاركة المستخدم وجمع المدخلات في تطوير التطبيق. يغطي الفصل إنشاء عناصر واجهة مستخدم تعتمد على الإيماءات، ومنتقيات الوقت والتاريخ، وعناصر واجهة المستخدم للإدخال والاختيار، والأدوات القابلة للرفض. ينصب التركيز على إنشاء علامة التبويب 'للشراء' في تطبيق Fooderlich، مما يسمح للمستخدمين بإنشاء عناصر قائمة البقالة وتعديلها والتحقق منها. يقدم الفصل أيضًا حزمة الموفر لإدارة الحالة ويؤكد على الحفاظ على الحالة عبر علامات التبويب المختلفة للحصول على تجربة مستخدم سلسة.",
                // Persian
                "فارسی": "در این فصل، ویجت‌های تعاملی برای افزایش تعامل کاربر و مجموعه ورودی در توسعه برنامه بررسی می‌شوند. این فصل ایجاد ویجت‌های مبتنی بر اشاره، انتخاب‌کننده‌های زمان و تاریخ، ویجت‌های ورودی و انتخاب، و ویجت‌های قابل رد را پوشش می‌دهد. تمرکز بر روی ساخت برگه «خرید» در برنامه Fooderlich است، که به کاربران امکان می‌دهد اقلام فهرست مواد غذایی را ایجاد، اصلاح و بررسی کنند. این فصل همچنین بسته ارائه‌دهنده را برای مدیریت حالت معرفی می‌کند و بر حفظ حالت در برگه‌های مختلف برای تجربه کاربری یکپارچه تأکید می‌کند.",
            },
        },
        // 7
        {
            "ChapterName": "Routes & Navigation",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter delves into navigation concepts in Flutter, comparing the imperative style of Navigator 1.0 with the declarative approach of the Router API. The chapter introduces GoRouter as a wrapper around the Router API, simplifying navigation management. It covers handling routes, error pages, and redirection, showcasing a UI flow from login to webview screens. The key takeaway emphasizes the transition from imperative to declarative navigation for better control and organization in app development.",
                // German
                "Deutsch": "Dieses Kapitel befasst sich mit Navigationskonzepten in Flutter und vergleicht den imperativen Stil von Navigator 1.0 mit dem deklarativen Ansatz der Router-API. Das Kapitel stellt GoRouter als Wrapper für die Router-API vor und vereinfacht die Navigationsverwaltung. Es behandelt die Handhabung von Routen, Fehlerseiten und Umleitungen und zeigt einen UI-Flow von der Anmeldung bis zu Webview-Bildschirmen. Die wichtigste Erkenntnis betont den Übergang von imperativer zu deklarativer Navigation für eine bessere Kontrolle und Organisation bei der App-Entwicklung.",
                // Chinese
                "中国人": "本章深入探讨了 Flutter 中的导航概念，将 Navigator 1.0 的命令式风格与 Router API 的声明式方法进行了比较。本章介绍了 GoRouter 作为 Router API 的包装器，简化了导航管理。它涵盖了处理路由、错误页面和重定向，展示了从登录到 Web 视图屏幕的 UI 流程。关键要点强调了从命令式导航到声明式导航的过渡，以便在应用开发中更好地控制和组织。",
                // Russian
                "Русский": "В этой главе рассматриваются концепции навигации во Flutter, сравнивая императивный стиль Navigator 1.0 с декларативным подходом Router API. В этой главе GoRouter рассматривается как оболочка API Router API, упрощающая управление навигацией. Он охватывает обработку маршрутов, страниц ошибок и перенаправление, демонстрируя поток пользовательского интерфейса от входа в систему до экранов веб-просмотра. Ключевой вывод подчеркивает переход от императивной к декларативной навигации для лучшего контроля и организации разработки приложений.",
                // French
                "Français": "Ce chapitre aborde les concepts de navigation dans Flutter, en comparant le style impératif de Navigator 1.0 avec l'approche déclarative de l'API Router. Le chapitre présente GoRouter en tant que wrapper autour de l'API du routeur, simplifiant la gestion de la navigation. Il couvre la gestion des itinéraires, des pages d'erreur et de la redirection, présentant un flux d'interface utilisateur depuis la connexion jusqu'aux écrans d'affichage Web. Le point clé à retenir met l’accent sur la transition de la navigation impérative à la navigation déclarative pour un meilleur contrôle et une meilleure organisation du développement d’applications.",
                // Japanese
                "日本語": "この章では、Flutter のナビゲーションの概念について詳しく説明し、Navigator 1.0 の命令型スタイルと Router API の宣言型アプローチを比較します。この章では、Router API のラッパーとして GoRouter を紹介し、ナビゲーション管理を簡素化します。ルート、エラー ページ、リダイレクトの処理について説明し、ログインから Web ビュー画面までの UI フローを紹介します。重要なポイントは、アプリ開発における制御と組織化を向上させるために、命令型ナビゲーションから宣言型ナビゲーションへの移行を強調することです。",
                // Korean
                "한국인": "이 장에서는 Navigator 1.0의 명령형 스타일과 Router API의 선언적 접근 방식을 비교하면서 Flutter의 탐색 개념을 자세히 살펴봅니다. 이 장에서는 탐색 관리를 단순화하는 Router API 주변의 래퍼로 GoRouter를 소개합니다. 경로 처리, 오류 페이지 및 리디렉션을 다루며 로그인에서 WebView 화면까지의 UI 흐름을 보여줍니다. 핵심 내용은 앱 개발에서 더 나은 제어 및 구성을 위해 명령형 탐색에서 선언형 탐색으로의 전환을 강조합니다.",
                // Spanish
                "Español": "Este capítulo profundiza en los conceptos de navegación en Flutter, comparando el estilo imperativo de Navigator 1.0 con el enfoque declarativo de la API del enrutador. El capítulo presenta GoRouter como un contenedor de la API del enrutador, simplificando la gestión de la navegación. Cubre el manejo de rutas, páginas de error y redireccionamiento, mostrando un flujo de interfaz de usuario desde el inicio de sesión hasta las pantallas de vista web. La conclusión clave enfatiza la transición de la navegación imperativa a la declarativa para un mejor control y organización en el desarrollo de aplicaciones.",
                // Hindi
                "हिंदी": "यह अध्याय फ़्लटर में नेविगेशन अवधारणाओं पर गहराई से चर्चा करता है, नेविगेटर 1.0 की अनिवार्य शैली की तुलना राउटर एपीआई के घोषणात्मक दृष्टिकोण से करता है। अध्याय राउटर एपीआई के चारों ओर एक आवरण के रूप में गोराउटर का परिचय देता है, नेविगेशन प्रबंधन को सरल बनाता है। यह रूट, त्रुटि पृष्ठ और पुनर्निर्देशन को संभालना शामिल करता है, लॉगिन से वेबव्यू स्क्रीन तक यूआई प्रवाह को प्रदर्शित करता है। मुख्य बात ऐप विकास में बेहतर नियंत्रण और संगठन के लिए अनिवार्य से घोषणात्मक नेविगेशन में संक्रमण पर जोर देती है।",
                // Portuguese
                "Português": "Este capítulo aprofunda os conceitos de navegação no Flutter, comparando o estilo imperativo do Navigator 1.0 com a abordagem declarativa da API do Router. O capítulo apresenta o GoRouter como um wrapper da API do router, simplificando a gestão da navegação. Abrange o tratamento de rotas, páginas de erro e redireccionamento, mostrando um fluxo de UI desde o login até aos ecrãs de visualização na web. A principal conclusão enfatiza a transição da navegação imperativa para a declarativa para um melhor controlo e organização no desenvolvimento de aplicações.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ফ্লটার-এ নেভিগেশন ধারণাগুলি নিয়ে আলোচনা করে, রাউটার API-এর ঘোষণামূলক পদ্ধতির সাথে ন্যাভিগেটর 1.0-এর অপরিহার্য শৈলীর তুলনা করে। অধ্যায়টি GoRouter কে রাউটার API এর চারপাশে একটি মোড়ক হিসাবে পরিচয় করিয়ে দেয়, যা নেভিগেশন পরিচালনাকে সহজ করে। এটি হ্যান্ডলিং রুট, ত্রুটি পৃষ্ঠা এবং পুনঃনির্দেশ কভার করে, লগইন থেকে ওয়েবভিউ স্ক্রীনে একটি UI প্রবাহ প্রদর্শন করে। অ্যাপ ডেভেলপমেন্টে আরও ভালো নিয়ন্ত্রণ এবং সংগঠনের জন্য গুরুত্বপূর্ণ থেকে ঘোষণামূলক নেভিগেশনে রূপান্তরের ওপর গুরুত্ব দেওয়া হয়েছে।",
                // Arabic
                "عَرَبِيّ": "يتعمق هذا الفصل في مفاهيم التنقل في Flutter، ويقارن الأسلوب الحتمي لـ Navigator 1.0 مع النهج التعريفي لـ Router API. يقدم هذا الفصل GoRouter باعتباره غلافًا حول واجهة برمجة تطبيقات جهاز التوجيه، مما يبسط إدارة التنقل. ويغطي التعامل مع المسارات وصفحات الخطأ وإعادة التوجيه، ويعرض تدفق واجهة المستخدم من تسجيل الدخول إلى شاشات عرض الويب. تؤكد الوجبات الرئيسية على الانتقال من التنقل الحتمي إلى التنقل التعريفي لتحسين التحكم والتنظيم في تطوير التطبيقات.",
                // Persian
                "فارسی": "این فصل به مفاهیم ناوبری در Flutter می پردازد و سبک ضروری Navigator 1.0 را با رویکرد اعلامی Router API مقایسه می کند. این فصل GoRouter را به عنوان یک پوشش در اطراف Router API معرفی می کند که مدیریت ناوبری را ساده می کند. مسیرهای مدیریت، صفحات خطا و تغییر مسیر را پوشش می‌دهد و یک جریان رابط کاربری از ورود به صفحه نمایش وب‌نما را نشان می‌دهد. نکته کلیدی بر انتقال از ناوبری ضروری به ناوبری اعلامی برای کنترل و سازماندهی بهتر در توسعه برنامه تاکید دارد.",
            },
        },
        // 8
        {
            "ChapterName": "Deep Links & Web URLs",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter emphasizes the significance of deep linking for user engagement and marketing in mobile applications. It discusses the use of URI schemes and web URLs for redirecting users to specific parts of the app. The chapter delves into the implementation of deep links on iOS, Android, and web platforms, highlighting the role of RouteInformationProvider, RouteInformationParser, and GoRouter in managing deep linking effectively. Overall, the chapter provides insights on how to leverage deep linking to enhance user experience and drive user engagement in Flutter applications.",
                // German
                "Deutsch": "In diesem Kapitel wird die Bedeutung von Deep Linking für die Benutzereinbindung und das Marketing in mobilen Anwendungen betont. Es erörtert die Verwendung von URI-Schemata und Web-URLs zur Weiterleitung von Benutzern zu bestimmten Teilen der App. Das Kapitel befasst sich eingehend mit der Implementierung von Deep Links auf iOS-, Android- und Webplattformen und hebt die Rolle von RouteInformationProvider, RouteInformationParser und GoRouter bei der effektiven Verwaltung von Deep Linking hervor. Insgesamt bietet das Kapitel Einblicke, wie Deep Linking genutzt werden kann, um die Benutzererfahrung zu verbessern und die Benutzereinbindung in Flutter-Anwendungen zu fördern.",
                // Chinese
                "中国人": "本章强调了深度链接对于移动应用程序中的用户参与和营销的重要性。它讨论了使用 URI 方案和 Web URL 将用户重定向到应用程序的特定部分。本章深入探讨了 iOS、Android 和 Web 平台上深度链接的实现，重点介绍了 RouteInformationProvider、RouteInformationParser 和 GoRouter 在有效管理深度链接方面的作用。总体而言，本章提供了有关如何利用深度链接来增强用户体验并推动 Flutter 应用程序中用户参与度的见解。",
                // Russian
                "Русский": "В этой главе подчеркивается важность глубоких ссылок для вовлечения пользователей и маркетинга в мобильных приложениях. В нем обсуждается использование схем URI и веб-URL-адресов для перенаправления пользователей в определенные части приложения. В главе подробно рассматривается реализация глубоких ссылок на iOS, Android и веб-платформах, подчеркивая роль RouteInformationProvider, RouteInformationParser и GoRouter в эффективном управлении глубокими ссылками. В целом, в главе представлено понимание того, как использовать глубокие ссылки для улучшения пользовательского опыта и повышения вовлеченности пользователей в приложениях Flutter.",
                // French
                "Français": "Ce chapitre souligne l'importance des liens profonds pour l'engagement des utilisateurs et le marketing dans les applications mobiles. Il traite de l'utilisation de schémas d'URI et d'URL Web pour rediriger les utilisateurs vers des parties spécifiques de l'application. Le chapitre examine la mise en œuvre de liens profonds sur les plateformes iOS, Android et Web, en soulignant le rôle de RouteInformationProvider, RouteInformationParser et GoRouter dans la gestion efficace des liens profonds. Dans l'ensemble, le chapitre fournit des informations sur la manière d'exploiter les liens profonds pour améliorer l'expérience utilisateur et stimuler l'engagement des utilisateurs dans les applications Flutter.",
                // Japanese
                "日本語": "この章では、モバイル アプリケーションにおけるユーザー エンゲージメントとマーケティングにおけるディープ リンクの重要性を強調しています。アプリの特定の部分にユーザーをリダイレクトするための URI スキームと Web URL の使用について説明します。この章では、iOS、Android、Web プラットフォームでのディープ リンクの実装について詳しく説明し、ディープ リンクを効果的に管理するための RouteInformationProvider、RouteInformationParser、GoRouter の役割に焦点を当てています。全体として、この章では、ディープ リンクを活用して Flutter アプリケーションでのユーザー エクスペリエンスを向上させ、ユーザー エンゲージメントを促進する方法についての洞察を提供します。",
                // Korean
                "한국인": "이 장에서는 모바일 애플리케이션의 사용자 참여 및 마케팅을 위한 딥링킹의 중요성을 강조합니다. 사용자를 앱의 특정 부분으로 리디렉션하기 위한 URI 체계와 웹 URL의 사용에 대해 설명합니다. 이 장에서는 iOS, Android 및 웹 플랫폼에서의 딥 링크 구현을 자세히 살펴보고 딥 링크를 효과적으로 관리하는 데 있어 RouteInformationProvider, RouteInformationParser 및 GoRouter의 역할을 강조합니다. 전반적으로 이 장에서는 딥 링크를 활용하여 Flutter 애플리케이션에서 사용자 경험을 향상하고 사용자 참여를 유도하는 방법에 대한 통찰력을 제공합니다.",
                // Spanish
                "Español": "Este capítulo enfatiza la importancia de los enlaces profundos para la participación del usuario y el marketing en aplicaciones móviles. Analiza el uso de esquemas de URI y URL web para redirigir a los usuarios a partes específicas de la aplicación. El capítulo profundiza en la implementación de enlaces profundos en iOS, Android y plataformas web, destacando el papel de RouteInformationProvider, RouteInformationParser y GoRouter en la gestión eficaz de enlaces profundos. En general, el capítulo proporciona información sobre cómo aprovechar los enlaces profundos para mejorar la experiencia del usuario e impulsar la participación del usuario en las aplicaciones Flutter.",
                // Hindi
                "हिंदी": "यह अध्याय मोबाइल एप्लिकेशन में उपयोगकर्ता जुड़ाव और मार्केटिंग के लिए डीप लिंकिंग के महत्व पर जोर देता है। यह ऐप के विशिष्ट भागों पर उपयोगकर्ताओं को पुनर्निर्देशित करने के लिए URI योजनाओं और वेब URL के उपयोग पर चर्चा करता है। यह अध्याय iOS, Android और वेब प्लेटफ़ॉर्म पर डीप लिंक के कार्यान्वयन पर गहराई से चर्चा करता है, डीप लिंकिंग को प्रभावी ढंग से प्रबंधित करने में RouteInformationProvider, RouteInformationParser और GoRouter की भूमिका पर प्रकाश डालता है। कुल मिलाकर, यह अध्याय उपयोगकर्ता अनुभव को बढ़ाने और फ़्लटर एप्लिकेशन में उपयोगकर्ता जुड़ाव को बढ़ाने के लिए डीप लिंकिंग का लाभ उठाने के तरीके के बारे में जानकारी प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo enfatiza a importância do deep linking para o envolvimento do utilizador e o marketing em aplicações móveis. Discute o uso de esquemas URI e URLs da web para redirecionar os utilizadores para partes específicas da aplicação. O capítulo aprofunda a implementação de links diretos em plataformas iOS, Android e web, destacando a função do RouteInformationProvider, RouteInformationParser e GoRouter na gestão eficaz de links diretos. No geral, o capítulo fornece informações sobre como aproveitar os links diretos para melhorar a experiência do utilizador e impulsionar o envolvimento do utilizador nas aplicações Flutter.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি মোবাইল অ্যাপ্লিকেশনগুলিতে ব্যবহারকারীর ব্যস্ততা এবং বিপণনের জন্য গভীর সংযোগের তাত্পর্যের উপর জোর দেয়। এটি ব্যবহারকারীদের অ্যাপের নির্দিষ্ট অংশে পুনঃনির্দেশিত করার জন্য URI স্কিম এবং ওয়েব URL-এর ব্যবহার নিয়ে আলোচনা করে। অধ্যায়টি আইওএস, অ্যান্ড্রয়েড এবং ওয়েব প্ল্যাটফর্মগুলিতে গভীর লিঙ্কগুলির বাস্তবায়নের বিষয়ে আলোচনা করে, কার্যকরভাবে ডিপ লিঙ্কিং পরিচালনায় RouteInformationProvider, RouteInformationParser এবং GoRouter-এর ভূমিকা হাইলাইট করে৷ সামগ্রিকভাবে, অধ্যায়টি ব্যবহারকারীর অভিজ্ঞতা বাড়াতে এবং ফ্লাটার অ্যাপ্লিকেশনগুলিতে ব্যবহারকারীর ব্যস্ততা বাড়াতে কীভাবে গভীর সংযোগের সুবিধা নেওয়া যায় সে সম্পর্কে অন্তর্দৃষ্টি প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يؤكد هذا الفصل على أهمية الارتباط العميق لمشاركة المستخدم والتسويق في تطبيقات الهاتف المحمول. ويناقش استخدام مخططات URI وعناوين URL على الويب لإعادة توجيه المستخدمين إلى أجزاء معينة من التطبيق. يتعمق الفصل في تنفيذ الروابط العميقة على أنظمة iOS وAndroid ومنصات الويب، مع تسليط الضوء على دور RouteInformationProvider وRouteInformationParser وGoRouter في إدارة الارتباطات العميقة بشكل فعال. بشكل عام، يقدم الفصل رؤى حول كيفية الاستفادة من الارتباط العميق لتحسين تجربة المستخدم وزيادة مشاركة المستخدم في تطبيقات Flutter.",
                // Persian
                "فارسی": "این فصل بر اهمیت پیوند عمیق برای تعامل و بازاریابی کاربر در برنامه های کاربردی تلفن همراه تأکید می کند. در مورد استفاده از طرح های URI و URL های وب برای هدایت کاربران به بخش های خاصی از برنامه بحث می کند. این فصل به اجرای پیوندهای عمیق در iOS، Android و پلتفرم‌های وب می‌پردازد و نقش RouteInformationProvider، RouteInformationParser و GoRouter را در مدیریت مؤثر پیوندهای عمیق برجسته می‌کند. به طور کلی، این فصل بینش هایی در مورد چگونگی استفاده از پیوند عمیق برای افزایش تجربه کاربر و ایجاد تعامل کاربر در برنامه های Flutter ارائه می دهد.",
            },
        },
        // 9
        {
            "ChapterName": "Handling Shared Preferences",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Learn how to utilize the shared_preferences plugin in Flutter to save essential data like selected tabs and cached search items efficiently. The chapter guides you through building an app with three tabs for Recipes, Bookmarks, and Groceries, demonstrating how to save and retrieve objects using shared preferences. By understanding the basics of shared preferences and asynchronous operations, you can enhance user experience by persisting simple data types securely while preparing for more advanced data handling techniques in future chapters.",
                // German
                "Deutsch": "Erfahren Sie, wie Sie das Plugin shared_preferences in Flutter nutzen, um wichtige Daten wie ausgewählte Tabs und zwischengespeicherte Suchelemente effizient zu speichern. Das Kapitel führt Sie durch die Erstellung einer App mit drei Tabs für Rezepte, Lesezeichen und Lebensmittel und zeigt, wie Sie Objekte mithilfe gemeinsamer Einstellungen speichern und abrufen. Wenn Sie die Grundlagen gemeinsamer Einstellungen und asynchroner Vorgänge verstehen, können Sie die Benutzererfahrung verbessern, indem Sie einfache Datentypen sicher speichern und sich gleichzeitig auf fortgeschrittenere Datenverarbeitungstechniken in späteren Kapiteln vorbereiten.",
                // Chinese
                "中国人": "了解如何利用 Flutter 中的 shared_preferences 插件高效保存重要数据（例如选定的选项卡和缓存的搜索项）。本章将指导您构建一个包含三个选项卡（食谱、书签和杂货）的应用，并演示如何使用共享首选项保存和检索对象。通过了解共享首选项和异步操作的基础知识，您可以通过安全地持久保存简单数据类型来增强用户体验，同时为未来章节中更高级的数据处理技术做好准备。",
                // Russian
                "Русский": "Узнайте, как использовать плагинshared_preferences во Flutter для эффективного сохранения важных данных, таких как выбранные вкладки и кэшированные элементы поиска. В этой главе вы узнаете, как создать приложение с тремя вкладками «Рецепты», «Закладки» и «Продукты», демонстрируя, как сохранять и извлекать объекты с использованием общих настроек. Понимая основы общих предпочтений и асинхронных операций, вы можете улучшить взаимодействие с пользователем, безопасно сохраняя простые типы данных, одновременно готовясь к более сложным методам обработки данных в будущих главах.",
                // French
                "Français": "Découvrez comment utiliser le plugin shared_preferences dans Flutter pour enregistrer efficacement les données essentielles telles que les onglets sélectionnés et les éléments de recherche mis en cache. Le chapitre vous guide dans la création d'une application avec trois onglets pour les recettes, les signets et l'épicerie, vous montrant comment enregistrer et récupérer des objets à l'aide des préférences partagées. En comprenant les bases des préférences partagées et des opérations asynchrones, vous pouvez améliorer l'expérience utilisateur en conservant des types de données simples en toute sécurité tout en vous préparant à des techniques de traitement de données plus avancées dans les prochains chapitres.",
                // Japanese
                "日本語": "Flutter の shared_preferences プラグインを利用して、選択したタブやキャッシュされた検索項目などの重要なデータを効率的に保存する方法を学びます。この章では、レシピ、ブックマーク、食料品の 3 つのタブを備えたアプリの構築方法を説明し、共有設定を使用してオブジェクトを保存および取得する方法を示します。共有設定と非同期操作の基本を理解することで、単純なデータ型を安全に保持しながら、今後の章で説明するより高度なデータ処理手法に備え、ユーザー エクスペリエンスを向上させることができます。",
                // Korean
                "한국인": "선택한 탭 및 캐시된 검색 항목과 같은 필수 데이터를 효율적으로 저장하기 위해 Flutter에서 shared_preferences 플러그인을 활용하는 방법을 알아보세요. 이 장에서는 레시피, 책갈피 및 식료품에 대한 세 가지 탭이 있는 앱을 구축하는 과정을 안내하고 공유 기본 설정을 사용하여 객체를 저장하고 검색하는 방법을 보여줍니다. 공유 기본 설정과 비동기 작업의 기본 사항을 이해하면 간단한 데이터 유형을 안전하게 유지하면서 다음 장에서 다룰 고급 데이터 처리 기술을 준비하여 사용자 경험을 향상할 수 있습니다.",
                // Spanish
                "Español": "Aprenda a utilizar el complemento share_preferences en Flutter para guardar datos esenciales como pestañas seleccionadas y elementos de búsqueda en caché de manera eficiente. El capítulo lo guía en la creación de una aplicación con tres pestañas para Recetas, Marcadores y Comestibles, y le muestra cómo guardar y recuperar objetos usando preferencias compartidas. Al comprender los conceptos básicos de las preferencias compartidas y las operaciones asincrónicas, puede mejorar la experiencia del usuario al conservar tipos de datos simples de forma segura mientras se prepara para técnicas de manejo de datos más avanzadas en capítulos futuros.",
                // Hindi
                "हिंदी": "जानें कि फ़्लटर में shared_preferences प्लगइन का उपयोग कैसे करें ताकि चयनित टैब और कैश्ड खोज आइटम जैसे आवश्यक डेटा को कुशलतापूर्वक सहेजा जा सके। यह अध्याय आपको रेसिपी, बुकमार्क और किराने के सामान के लिए तीन टैब के साथ एक ऐप बनाने के बारे में मार्गदर्शन करता है, यह दर्शाता है कि साझा प्राथमिकताओं का उपयोग करके ऑब्जेक्ट को कैसे सहेजना और पुनर्प्राप्त करना है। साझा प्राथमिकताओं और अतुल्यकालिक संचालन की मूल बातें समझकर, आप भविष्य के अध्यायों में अधिक उन्नत डेटा हैंडलिंग तकनीकों की तैयारी करते हुए सरल डेटा प्रकारों को सुरक्षित रूप से बनाए रखकर उपयोगकर्ता अनुभव को बढ़ा सकते हैं।",
                // Portuguese
                "Português": "Aprenda a utilizar o plugin shared_preferences no Flutter para guardar dados essenciais, como separadores selecionados e itens de pesquisa em cache, de forma eficiente. O capítulo orienta-o na construção de uma aplicação com três separadores para Receitas, Marcadores e Compras, demonstrando como guardar e recuperar objetos utilizando preferências partilhadas. Ao compreender os conceitos básicos de preferências partilhadas e operações assíncronas, pode melhorar a experiência do utilizador ao persistir tipos de dados simples em segurança, enquanto se prepara para técnicas mais avançadas de manipulação de dados em capítulos futuros.",
                // Bengali
                "বাংলা": "নির্বাচিত ট্যাব এবং ক্যাশে করা অনুসন্ধান আইটেমগুলির মতো প্রয়োজনীয় ডেটাগুলিকে দক্ষতার সাথে সংরক্ষণ করতে ফ্লটারে শেয়ার্ড_প্রেফারেন্স প্লাগইনটি কীভাবে ব্যবহার করবেন তা শিখুন। অধ্যায়টি রেসিপি, বুকমার্ক এবং মুদির জন্য তিনটি ট্যাব সহ একটি অ্যাপ তৈরি করার মাধ্যমে আপনাকে নির্দেশিত করে, প্রদর্শন করে যে কীভাবে ভাগ করা পছন্দগুলি ব্যবহার করে বস্তুগুলি সংরক্ষণ এবং পুনরুদ্ধার করা যায়। ভাগ করা পছন্দ এবং অ্যাসিঙ্ক্রোনাস ক্রিয়াকলাপের মূল বিষয়গুলি বোঝার মাধ্যমে, আপনি ভবিষ্যতের অধ্যায়ে আরও উন্নত ডেটা পরিচালনার কৌশলগুলির জন্য প্রস্তুত করার সময় নিরাপদে সাধারণ ডেটা প্রকারগুলি বজায় রেখে ব্যবহারকারীর অভিজ্ঞতা বাড়াতে পারেন।",
                // Arabic
                "عَرَبِيّ": "تعرف على كيفية استخدام المكوّن الإضافي Shared_preferences في Flutter لحفظ البيانات الأساسية مثل علامات التبويب المحددة وعناصر البحث المخزنة مؤقتًا بكفاءة. يرشدك الفصل خلال إنشاء تطبيق يحتوي على ثلاث علامات تبويب للوصفات والإشارات المرجعية والبقالة، مما يوضح كيفية حفظ الكائنات واستردادها باستخدام التفضيلات المشتركة. من خلال فهم أساسيات التفضيلات المشتركة والعمليات غير المتزامنة، يمكنك تحسين تجربة المستخدم من خلال الحفاظ على أنواع البيانات البسيطة بشكل آمن أثناء التحضير لتقنيات معالجة البيانات الأكثر تقدمًا في الفصول المستقبلية.",
                // Persian
                "فارسی": "نحوه استفاده از افزونه shared_preferences در Flutter را بیاموزید تا داده های ضروری مانند برگه های انتخاب شده و موارد جستجوی ذخیره شده در حافظه پنهان را به طور موثر ذخیره کنید. این فصل شما را از طریق ساختن یک برنامه با سه برگه برای دستور غذاها، نشانک‌ها و مواد غذایی راهنمایی می‌کند و نحوه ذخیره و بازیابی اشیاء را با استفاده از اولویت‌های مشترک نشان می‌دهد. با درک اصول اولیه ترجیحات مشترک و عملیات ناهمزمان، می‌توانید تجربه کاربر را با تداوم انواع داده‌های ساده به طور ایمن بهبود بخشید و در عین حال برای تکنیک‌های پیشرفته‌تر مدیریت داده در فصل‌های آینده آماده شوید.",
            },
        },
        // 10
        {
            "ChapterName": "Serialization With JSON",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter delves into the serialization of JSON data into model classes in Flutter using packages like json_serializable and json_annotation. The chapter emphasizes the importance of automated code generation for handling complex model classes and maintaining code consistency. It guides readers on marking classes with annotations, generating helper classes for JSON conversion, and integrating model classes into existing projects. By the end of the chapter, readers gain insights into the benefits of automated JSON serialization, simplifying the process of parsing JSON data in Flutter applications.",
                // German
                "Deutsch": "Dieses Kapitel befasst sich mit der Serialisierung von JSON-Daten in Modellklassen in Flutter unter Verwendung von Paketen wie json_serializable und json_annotation. Das Kapitel betont die Bedeutung der automatischen Codegenerierung für die Handhabung komplexer Modellklassen und die Aufrechterhaltung der Codekonsistenz. Es führt die Leser in die Markierung von Klassen mit Anmerkungen, die Generierung von Hilfsklassen für die JSON-Konvertierung und die Integration von Modellklassen in vorhandene Projekte ein. Am Ende des Kapitels erhalten die Leser Einblicke in die Vorteile der automatischen JSON-Serialisierung, die das Parsen von JSON-Daten in Flutter-Anwendungen vereinfacht.",
                // Chinese
                "中国人": "本章深入探讨了如何使用 json_serializable 和 json_annotation 等包将 JSON 数据序列化为 Flutter 中的模型类。本章强调了自动代码生成对于处理复杂模型类和维护代码一致性的重要性。它指导读者使用注释标记类、生成用于 JSON 转换的辅助类以及将模型类集成到现有项目中。在本章结束时，读者将深入了解自动 JSON 序列化的好处，从而简化 Flutter 应用程序中解析 JSON 数据的过程。",
                // Russian
                "Русский": "В этой главе рассматривается сериализация данных JSON в классы моделей во Flutter с использованием таких пакетов, как json_serializable и json_annotation. В главе подчеркивается важность автоматической генерации кода для обработки сложных классов моделей и обеспечения согласованности кода. Он помогает читателям маркировать классы аннотациями, создавать вспомогательные классы для преобразования JSON и интегрировать классы моделей в существующие проекты. К концу главы читатели получат представление о преимуществах автоматической сериализации JSON, упрощающей процесс анализа данных JSON в приложениях Flutter.",
                // French
                "Français": "Ce chapitre aborde la sérialisation des données JSON dans des classes de modèles dans Flutter à l'aide de packages tels que json_serializing et json_annotation. Le chapitre souligne l'importance de la génération automatisée de code pour gérer les classes de modèles complexes et maintenir la cohérence du code. Il guide les lecteurs sur le marquage des classes avec des annotations, la génération de classes d'assistance pour la conversion JSON et l'intégration de classes de modèles dans des projets existants. À la fin du chapitre, les lecteurs découvrent les avantages de la sérialisation JSON automatisée, simplifiant le processus d'analyse des données JSON dans les applications Flutter.",
                // Japanese
                "日本語": "この章では、json_serializable や json_annotation などのパッケージを使用して、Flutter で JSON データをモデル クラスにシリアル化する方法を詳しく説明します。この章では、複雑なモデル クラスを処理し、コードの一貫性を維持するための自動コード生成の重要性を強調しています。クラスに注釈を付ける方法、JSON 変換用のヘルパー クラスを生成する方法、モデル クラスを既存のプロジェクトに統合する方法を説明します。章の終わりまでに、読者は自動 JSON シリアル化の利点を理解し、Flutter アプリケーションで JSON データを解析するプロセスを簡素化できます。",
                // Korean
                "한국인": "이 장에서는 json_serialized 및 json_annotation과 같은 패키지를 사용하여 Flutter에서 JSON 데이터를 모델 클래스로 직렬화하는 방법을 살펴봅니다. 이 장에서는 복잡한 모델 클래스를 처리하고 코드 일관성을 유지하기 위한 자동화된 코드 생성의 중요성을 강조합니다. 주석으로 클래스를 표시하고, JSON 변환을 위한 도우미 클래스를 생성하고, 모델 클래스를 기존 프로젝트에 통합하는 방법을 독자에게 안내합니다. 이 장의 마지막 부분에서 독자는 자동화된 JSON 직렬화의 이점에 대한 통찰력을 얻고 Flutter 애플리케이션에서 JSON 데이터를 구문 분석하는 프로세스를 단순화합니다.",
                // Spanish
                "Español": "Este capítulo profundiza en la serialización de datos JSON en clases de modelo en Flutter utilizando paquetes como json_serializable y json_annotation. El capítulo enfatiza la importancia de la generación automatizada de código para manejar clases de modelos complejos y mantener la coherencia del código. Guía a los lectores sobre cómo marcar clases con anotaciones, generar clases auxiliares para la conversión JSON e integrar clases modelo en proyectos existentes. Al final del capítulo, los lectores obtendrán información sobre los beneficios de la serialización JSON automatizada, simplificando el proceso de análisis de datos JSON en aplicaciones Flutter.",
                // Hindi
                "हिंदी": "यह अध्याय json_serializable और json_annotation जैसे पैकेजों का उपयोग करके फ़्लटर में मॉडल क्लास में JSON डेटा के क्रमांकन पर गहन चर्चा करता है। अध्याय जटिल मॉडल क्लास को संभालने और कोड की स्थिरता बनाए रखने के लिए स्वचालित कोड जनरेशन के महत्व पर जोर देता है। यह पाठकों को एनोटेशन के साथ क्लास को चिह्नित करने, JSON रूपांतरण के लिए सहायक क्लास बनाने और मौजूदा प्रोजेक्ट में मॉडल क्लास को एकीकृत करने के बारे में मार्गदर्शन करता है। अध्याय के अंत तक, पाठकों को स्वचालित JSON क्रमांकन के लाभों के बारे में जानकारी मिलती है, जो फ़्लटर अनुप्रयोगों में JSON डेटा को पार्स करने की प्रक्रिया को सरल बनाता है।",
                // Portuguese
                "Português": "Este capítulo aprofunda a serialização de dados JSON em classes de modelo no Flutter utilizando pacotes como json_serializable e json_annotation. O capítulo enfatiza a importância da geração automatizada de código para lidar com classes de modelos complexos e manter a consistência do código. Orienta os leitores na marcação de classes com anotações, na geração de classes auxiliares para conversão JSON e na integração de classes de modelos em projetos existentes. No final do capítulo, os leitores obterão informações sobre os benefícios da serialização JSON automatizada, simplificando o processo de análise de dados JSON em aplicações Flutter.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি json_serializable এবং json_annotation-এর মতো প্যাকেজগুলি ব্যবহার করে Flutter-এ মডেল ক্লাসে JSON ডেটার সিরিয়ালাইজেশনের বিষয়ে আলোচনা করে। অধ্যায়টি জটিল মডেল ক্লাস পরিচালনা এবং কোডের ধারাবাহিকতা বজায় রাখার জন্য স্বয়ংক্রিয় কোড তৈরির গুরুত্বের উপর জোর দেয়। এটি পাঠকদেরকে টীকা দিয়ে ক্লাস চিহ্নিত করা, JSON রূপান্তরের জন্য হেল্পার ক্লাস তৈরি করা এবং বিদ্যমান প্রজেক্টে মডেল ক্লাস একীভূত করার বিষয়ে গাইড করে। অধ্যায়ের শেষের দিকে, পাঠকরা স্বয়ংক্রিয় JSON সিরিয়ালাইজেশনের সুবিধাগুলির অন্তর্দৃষ্টি লাভ করে, যা Flutter অ্যাপ্লিকেশনগুলিতে JSON ডেটা পার্স করার প্রক্রিয়াটিকে সহজ করে।",
                // Arabic
                "عَرَبِيّ": "يتعمق هذا الفصل في تسلسل بيانات JSON في فئات النماذج في Flutter باستخدام حزم مثل json_serializable وjson_annotation. يؤكد هذا الفصل على أهمية إنشاء التعليمات البرمجية تلقائيًا للتعامل مع فئات النماذج المعقدة والحفاظ على اتساق التعليمات البرمجية. إنه يرشد القراء حول وضع علامات على الفئات باستخدام التعليقات التوضيحية، وإنشاء فئات مساعدة لتحويل JSON، ودمج فئات النماذج في المشاريع الحالية. بحلول نهاية الفصل، يكتسب القراء نظرة ثاقبة حول فوائد تسلسل JSON الآلي، مما يبسط عملية تحليل بيانات JSON في تطبيقات Flutter.",
                // Persian
                "فارسی": "این فصل با استفاده از بسته‌هایی مانند json_serializable و json_annotation به سریال‌سازی داده‌های JSON در کلاس‌های مدل در Flutter می‌پردازد. این فصل بر اهمیت تولید کد خودکار برای مدیریت کلاس‌های مدل پیچیده و حفظ سازگاری کد تأکید می‌کند. خوانندگان را در علامت گذاری کلاس ها با حاشیه نویسی، ایجاد کلاس های کمکی برای تبدیل JSON و ادغام کلاس های مدل در پروژه های موجود راهنمایی می کند. در پایان فصل، خوانندگان بینشی در مورد مزایای سریال‌سازی خودکار JSON به دست می‌آورند و فرآیند تجزیه داده‌های JSON را در برنامه‌های Flutter ساده می‌کنند.",
            },
        },
        // 11
        {
            "ChapterName": "Networking in Flutter",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, you delve into networking in Flutter by learning to sign up for the Edamam Recipe API, retrieve JSON data, and utilize the HTTP package for network requests and JSON parsing. You create a Dart class to manage API connections, fetch recipe data, and build a user interface with recipe cards and a recipe list. Asynchronous data loading is handled using FutureBuilder and GridView widgets, while exploring key concepts such as HTTP package methods, json.decode, FutureBuilder, and GridView. The chapter concludes by introducing the Chopper package for streamlined internet data handling, providing a comprehensive understanding of networking in Flutter.",
                // German
                "Deutsch": "In diesem Kapitel vertiefen Sie sich in die Vernetzung in Flutter, indem Sie lernen, sich für die Edamam Recipe API anzumelden, JSON-Daten abzurufen und das HTTP-Paket für Netzwerkanforderungen und JSON-Parsing zu verwenden. Sie erstellen eine Dart-Klasse, um API-Verbindungen zu verwalten, Rezeptdaten abzurufen und eine Benutzeroberfläche mit Rezeptkarten und einer Rezeptliste zu erstellen. Das asynchrone Laden von Daten wird mithilfe von FutureBuilder- und GridView-Widgets abgewickelt, während Sie wichtige Konzepte wie HTTP-Paketmethoden, json.decode, FutureBuilder und GridView erkunden. Das Kapitel schließt mit der Einführung des Chopper-Pakets für eine optimierte Internetdatenverarbeitung und vermittelt ein umfassendes Verständnis der Vernetzung in Flutter.",
                // Chinese
                "中国人": "在本章中，您将学习如何注册 Edamam Recipe API、检索 JSON 数据以及利用 HTTP 包进行网络请求和 JSON 解析，从而深入了解 Flutter 中的网络。您将创建一个 Dart 类来管理 API 连接、获取食谱数据以及构建带有食谱卡和食谱列表的用户界面。使用 FutureBuilder 和 GridView 小部件处理异步数据加载，同时探索 HTTP 包方法、json.decode、FutureBuilder 和 GridView 等关键概念。本章最后介绍了用于简化互联网数据处理的 Chopper 包，从而全面了解 Flutter 中的网络。",
                // Russian
                "Русский": "В этой главе вы углубитесь в работу сети во Flutter, научившись подписаться на API-интерфейс Edamam Recipe, получить данные JSON и использовать пакет HTTP для сетевых запросов и анализа JSON. Вы создаете класс Dart для управления соединениями API, получения данных рецептов и создания пользовательского интерфейса с карточками рецептов и списком рецептов. Асинхронная загрузка данных осуществляется с помощью виджетов FutureBuilder и GridView, при этом изучаются такие ключевые концепции, как методы пакета HTTP, json.decode, FutureBuilder и GridView. Глава завершается описанием пакета Chopper для упрощенной обработки данных в Интернете, дающего полное представление о сетевых технологиях во Flutter.",
                // French
                "Français": "Dans ce chapitre, vous approfondissez la mise en réseau dans Flutter en apprenant à vous inscrire à l'API Edamam Recipe, à récupérer les données JSON et à utiliser le package HTTP pour les requêtes réseau et l'analyse JSON. Vous créez une classe Dart pour gérer les connexions API, récupérer les données de recettes et créer une interface utilisateur avec des fiches de recettes et une liste de recettes. Le chargement des données asynchrones est géré à l'aide des widgets FutureBuilder et GridView, tout en explorant des concepts clés tels que les méthodes de package HTTP, json.decode, FutureBuilder et GridView. Le chapitre se termine en présentant le package Chopper pour une gestion rationalisée des données Internet, fournissant une compréhension complète de la mise en réseau dans Flutter.",
                // Japanese
                "日本語": "この章では、Edamam Recipe API にサインアップし、JSON データを取得し、ネットワーク リクエストと JSON 解析に HTTP パッケージを利用する方法を学び、Flutter のネットワークについて詳しく説明します。API 接続を管理し、レシピ データを取得し、レシピ カードとレシピ リストを含むユーザー インターフェイスを構築するための Dart クラスを作成します。非同期データの読み込みは、HTTP パッケージ メソッド、json.decode、FutureBuilder、GridView などの主要な概念を調べながら、FutureBuilder と GridView ウィジェットを使用して処理されます。この章の最後には、合理化されたインターネット データ処理のための Chopper パッケージを紹介し、Flutter のネットワークを包括的に理解できるようにします。",
                // Korean
                "한국인": "이 장에서는 Edamam Recipe API에 가입하고, JSON 데이터를 검색하고, 네트워크 요청 및 JSON 구문 분석을 위해 HTTP 패키지를 활용하는 방법을 배우면서 Flutter의 네트워킹을 탐구합니다. API 연결을 관리하고, 레시피 데이터를 가져오고, 레시피 카드와 레시피 목록을 사용하여 사용자 인터페이스를 구축하기 위해 Dart 클래스를 만듭니다. HTTP 패키지 메소드, json.decode, FutureBuilder 및 GridView와 같은 주요 개념을 탐색하면서 비동기 데이터 로딩은 FutureBuilder 및 GridView 위젯을 사용하여 처리됩니다. 이 장은 간소화된 인터넷 데이터 처리를 위한 Chopper 패키지를 소개하여 Flutter의 네트워킹에 대한 포괄적인 이해를 제공하는 것으로 마무리됩니다.",
                // Spanish
                "Español": "En este capítulo, profundizará en las redes en Flutter aprendiendo a registrarse en la API de recetas de Edamam, recuperar datos JSON y utilizar el paquete HTTP para solicitudes de red y análisis JSON. Crea una clase Dart para administrar conexiones API, obtener datos de recetas y crear una interfaz de usuario con tarjetas de recetas y una lista de recetas. La carga de datos asincrónica se maneja mediante los widgets FutureBuilder y GridView, mientras se exploran conceptos clave como métodos de paquetes HTTP, json.decode, FutureBuilder y GridView. El capítulo concluye presentando el paquete Chopper para el manejo optimizado de datos de Internet, proporcionando una comprensión integral de las redes en Flutter.",
                // Hindi
                "हिंदी": "इस अध्याय में, आप एडामम रेसिपी एपीआई के लिए साइन अप करना, JSON डेटा प्राप्त करना और नेटवर्क अनुरोधों और JSON पार्सिंग के लिए HTTP पैकेज का उपयोग करना सीखकर फ़्लटर में नेटवर्किंग के बारे में गहराई से जानेंगे। आप API कनेक्शन प्रबंधित करने, रेसिपी डेटा प्राप्त करने और रेसिपी कार्ड और रेसिपी सूची के साथ एक उपयोगकर्ता इंटरफ़ेस बनाने के लिए एक डार्ट क्लास बनाते हैं। HTTP पैकेज विधियों, json.decode, FutureBuilder और GridView जैसी प्रमुख अवधारणाओं की खोज करते हुए, FutureBuilder और GridView विजेट का उपयोग करके एसिंक्रोनस डेटा लोडिंग को संभाला जाता है। अध्याय सुव्यवस्थित इंटरनेट डेटा हैंडलिंग के लिए चॉपर पैकेज को पेश करके समाप्त होता है, जो फ़्लटर में नेटवर्किंग की व्यापक समझ प्रदान करता है।",
                // Portuguese
                "Português": "Neste capítulo, aprofunda a rede no Flutter aprendendo a subscrever a API Edamam Recipe, a recuperar dados JSON e a utilizar o pacote HTTP para pedidos de rede e análise JSON. Cria uma classe Dart para gerir ligações de API, pesquisar dados de receitas e construir uma interface de utilizador com cartões de receitas e uma lista de receitas. O carregamento assíncrono de dados é feito utilizando os widgets FutureBuilder e GridView, enquanto explora conceitos-chave como os métodos de pacote HTTP, json.decode, FutureBuilder e GridView. O capítulo termina apresentando o pacote Chopper para a manipulação simplificada de dados da Internet, fornecendo uma compreensão abrangente das redes no Flutter.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, আপনি এডামাম রেসিপি API-এর জন্য সাইন আপ করতে, JSON ডেটা পুনরুদ্ধার করতে এবং নেটওয়ার্ক অনুরোধ এবং JSON পার্সিংয়ের জন্য HTTP প্যাকেজ ব্যবহার করতে শিখে ফ্লটারে নেটওয়ার্কিং-এ গভীরভাবে আগ্রহী হন। আপনি API সংযোগগুলি পরিচালনা করতে, রেসিপি ডেটা আনতে এবং রেসিপি কার্ড এবং একটি রেসিপি তালিকা সহ একটি ব্যবহারকারী ইন্টারফেস তৈরি করতে একটি ডার্ট ক্লাস তৈরি করেন। HTTP প্যাকেজ পদ্ধতি, json.decode, FutureBuilder, এবং GridView-এর মতো মূল ধারণাগুলি অন্বেষণ করার সময় অ্যাসিঙ্ক্রোনাস ডেটা লোডিং ফিউচারবিল্ডার এবং গ্রিডভিউ উইজেটগুলি ব্যবহার করে পরিচালনা করা হয়। ফ্লাটারে নেটওয়ার্কিং সম্বন্ধে ব্যাপক বোঝাপড়া প্রদান করে, সুবিন্যস্ত ইন্টারনেট ডেটা পরিচালনার জন্য চপার প্যাকেজ প্রবর্তনের মাধ্যমে অধ্যায়টি শেষ হয়।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، ستتعمق في الشبكات في Flutter من خلال تعلم كيفية الاشتراك في Edamam Recipe API، واسترداد بيانات JSON، واستخدام حزمة HTTP لطلبات الشبكة وتحليل JSON. يمكنك إنشاء فئة Dart لإدارة اتصالات API وجلب بيانات الوصفات وإنشاء واجهة مستخدم باستخدام بطاقات الوصفات وقائمة الوصفات. تتم معالجة تحميل البيانات غير المتزامنة باستخدام عناصر واجهة المستخدم FutureBuilder وGridView، أثناء استكشاف المفاهيم الأساسية مثل أساليب حزمة HTTP، وjson.decode، وFutureBuilder، وGridView. ويختتم الفصل بتقديم حزمة Chopper لتبسيط التعامل مع بيانات الإنترنت، وتوفير فهم شامل للشبكات في Flutter.",
                // Persian
                "فارسی": "در این فصل، با یادگیری ثبت نام برای Edamam Recipe API، بازیابی داده‌های JSON و استفاده از بسته HTTP برای درخواست‌های شبکه و تجزیه JSON، وارد شبکه‌سازی در Flutter می‌شوید. شما یک کلاس Dart ایجاد می کنید تا اتصالات API را مدیریت کنید، داده های دستور غذا را واکشی کنید، و یک رابط کاربری با کارت های دستور غذا و لیست دستور پخت بسازید. بارگیری داده‌های ناهمزمان با استفاده از ویجت‌های FutureBuilder و GridView انجام می‌شود، در حالی که مفاهیم کلیدی مانند روش‌های بسته HTTP، json.decode، FutureBuilder و GridView مورد بررسی قرار می‌گیرد. این فصل با معرفی بسته Chopper برای مدیریت ساده داده‌های اینترنتی به پایان می‌رسد و درک جامعی از شبکه در Flutter ارائه می‌دهد.",
            },
        },
        // 12
        {
            "ChapterName": "Using a Network Library",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces the Chopper package in Flutter for efficient networking, offering simplified code development and organization. It covers setting up Chopper and logging packages, creating generic response classes for server responses, defining API calls, and utilizing converters and interceptors for request and response manipulation. The chapter emphasizes the importance of logging for monitoring requests and responses. Overall, Chopper streamlines network calls, enhances code modularity, and facilitates logging for improved network communication in Flutter applications.",
                // German
                "Deutsch": "In diesem Kapitel wird das Chopper-Paket in Flutter für effizientes Networking vorgestellt, das eine vereinfachte Code-Entwicklung und -Organisation bietet. Es behandelt das Einrichten von Chopper- und Protokollierungspaketen, das Erstellen generischer Antwortklassen für Serverantworten, das Definieren von API-Aufrufen und die Verwendung von Konvertern und Interceptors zur Anforderungs- und Antwortmanipulation. Das Kapitel betont die Bedeutung der Protokollierung für die Überwachung von Anforderungen und Antworten. Insgesamt rationalisiert Chopper Netzwerkaufrufe, verbessert die Codemodularität und erleichtert die Protokollierung für eine verbesserte Netzwerkkommunikation in Flutter-Anwendungen.",
                // Chinese
                "中国人": "本章介绍了 Flutter 中用于高效联网的 Chopper 包，简化了代码开发和组织。它涵盖了设置 Chopper 和日志包、为服务器响应创建通用响应类、定义 API 调用以及利用转换器和拦截器进行请求和响应操作。本章强调了日志记录对于监控请求和响应的重要性。总体而言，Chopper 简化了网络调用、增强了代码模块化并促进了日志记录，从而改善了 Flutter 应用程序中的网络通信。",
                // Russian
                "Русский": "В этой главе представлен пакет Chopper во Flutter для эффективной работы в сети, предлагающий упрощенную разработку и организацию кода. Он охватывает настройку Chopper и пакетов журналирования, создание общих классов ответов для ответов сервера, определение вызовов API и использование преобразователей и перехватчиков для манипулирования запросами и ответами. В этой главе подчеркивается важность ведения журнала для мониторинга запросов и ответов. В целом, Chopper оптимизирует сетевые вызовы, повышает модульность кода и упрощает ведение журналов для улучшения сетевой связи в приложениях Flutter.",
                // French
                "Français": "Ce chapitre présente le package Chopper dans Flutter pour une mise en réseau efficace, offrant un développement et une organisation de code simplifiés. Il couvre la configuration de Chopper et des packages de journalisation, la création de classes de réponse génériques pour les réponses du serveur, la définition des appels d'API et l'utilisation de convertisseurs et d'intercepteurs pour la manipulation des requêtes et des réponses. Le chapitre souligne l’importance de la journalisation pour surveiller les demandes et les réponses. Dans l'ensemble, Chopper rationalise les appels réseau, améliore la modularité du code et facilite la journalisation pour une meilleure communication réseau dans les applications Flutter.",
                // Japanese
                "日本語": "この章では、効率的なネットワークを実現し、コードの開発と整理を簡素化する Flutter の Chopper パッケージを紹介します。Chopper とログ パッケージの設定、サーバー応答用の汎用応答クラスの作成、API 呼び出しの定義、要求と応答の操作のためのコンバーターとインターセプターの利用について説明します。この章では、要求と応答を監視するためのログの重要性を強調します。全体として、Chopper はネットワーク呼び出しを合理化し、コードのモジュール性を高め、ログを容易にして、Flutter アプリケーションでのネットワーク通信を改善します。",
                // Korean
                "한국인": "이 장에서는 효율적인 네트워킹을 위해 Flutter의 Chopper 패키지를 소개하고 단순화된 코드 개발 및 구성을 제공합니다. Chopper 및 로깅 패키지 설정, 서버 응답을 위한 일반 응답 클래스 생성, API 호출 정의, 요청 및 응답 조작을 위한 변환기 및 인터셉터 활용 등을 다룹니다. 이 장에서는 요청 및 응답을 모니터링하기 위한 로깅의 중요성을 강조합니다. 전반적으로 Chopper는 네트워크 호출을 간소화하고 코드 모듈성을 향상하며 Flutter 애플리케이션의 향상된 네트워크 통신을 위해 로깅을 용이하게 합니다.",
                // Spanish
                "Español": "Este capítulo presenta el paquete Chopper en Flutter para redes eficientes, que ofrece desarrollo y organización de código simplificados. Cubre la configuración de Chopper y paquetes de registro, la creación de clases de respuesta genéricas para las respuestas del servidor, la definición de llamadas API y la utilización de convertidores e interceptores para la manipulación de solicitudes y respuestas. El capítulo enfatiza la importancia del registro para monitorear solicitudes y respuestas. En general, Chopper agiliza las llamadas de red, mejora la modularidad del código y facilita el registro para mejorar la comunicación de red en las aplicaciones Flutter.",
                // Hindi
                "हिंदी": "यह अध्याय कुशल नेटवर्किंग के लिए फ़्लटर में चॉपर पैकेज का परिचय देता है, जो सरलीकृत कोड विकास और संगठन प्रदान करता है। इसमें चॉपर और लॉगिंग पैकेज सेट अप करना, सर्वर प्रतिक्रियाओं के लिए सामान्य प्रतिक्रिया वर्ग बनाना, API कॉल परिभाषित करना और अनुरोध और प्रतिक्रिया हेरफेर के लिए कन्वर्टर्स और इंटरसेप्टर का उपयोग करना शामिल है। अध्याय अनुरोधों और प्रतिक्रियाओं की निगरानी के लिए लॉगिंग के महत्व पर जोर देता है। कुल मिलाकर, चॉपर नेटवर्क कॉल को सुव्यवस्थित करता है, कोड मॉड्यूलरिटी को बढ़ाता है, और फ़्लटर अनुप्रयोगों में बेहतर नेटवर्क संचार के लिए लॉगिंग की सुविधा देता है।",
                // Portuguese
                "Português": "Este capítulo apresenta o pacote Chopper no Flutter para uma rede eficiente, oferecendo um desenvolvimento e organização de código simplificados. Abrange a configuração do Chopper e dos pacotes de registo, a criação de classes de resposta genéricas para as respostas do servidor, a definição de chamadas de API e a utilização de conversores e intercetores para a manipulação de pedidos e respostas. O capítulo enfatiza a importância do registo para monitorizar os pedidos e as respostas. No geral, o Chopper agiliza as chamadas de rede, melhora a modularidade do código e facilita o registo para melhorar a comunicação de rede nas aplicações Flutter.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি দক্ষ নেটওয়ার্কিংয়ের জন্য ফ্লটারে চপার প্যাকেজ প্রবর্তন করে, সরলীকৃত কোড ডেভেলপমেন্ট এবং সংস্থার প্রস্তাব দেয়। এটি চপার এবং লগিং প্যাকেজ সেট আপ, সার্ভার প্রতিক্রিয়ার জন্য জেনেরিক প্রতিক্রিয়া ক্লাস তৈরি, API কলগুলি সংজ্ঞায়িত করা এবং অনুরোধ এবং প্রতিক্রিয়া ম্যানিপুলেশনের জন্য রূপান্তরকারী এবং ইন্টারসেপ্টর ব্যবহার করে। অধ্যায়টি নিরীক্ষণের অনুরোধ এবং প্রতিক্রিয়াগুলির জন্য লগিংয়ের গুরুত্বের উপর জোর দেয়। সামগ্রিকভাবে, চপার নেটওয়ার্ক কলগুলিকে স্ট্রীমলাইন করে, কোড মডুলারিটি বাড়ায় এবং ফ্লাটার অ্যাপ্লিকেশনগুলিতে উন্নত নেটওয়ার্ক যোগাযোগের জন্য লগিং সহজ করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل حزمة Chopper في Flutter للتواصل الفعال، مما يوفر تطويرًا وتنظيمًا مبسطًا للتعليمات البرمجية. ويغطي إعداد Chopper وحزم التسجيل، وإنشاء فئات استجابة عامة لاستجابات الخادم، وتحديد مكالمات API، واستخدام المحولات والمعترضات لمعالجة الطلب والاستجابة. ويؤكد الفصل على أهمية التسجيل لمراقبة الطلبات والاستجابات. بشكل عام، تعمل Chopper على تبسيط مكالمات الشبكة، وتعزيز نمطية التعليمات البرمجية، وتسهيل التسجيل لتحسين اتصالات الشبكة في تطبيقات Flutter.",
                // Persian
                "فارسی": "این فصل بسته Chopper در Flutter را برای شبکه‌سازی کارآمد معرفی می‌کند که توسعه کد و سازماندهی ساده‌شده را ارائه می‌دهد. راه‌اندازی Chopper و بسته‌های ثبت‌نام، ایجاد کلاس‌های پاسخ عمومی برای پاسخ‌های سرور، تعریف فراخوان‌های API، و استفاده از مبدل‌ها و رهگیرها برای دستکاری درخواست و پاسخ را پوشش می‌دهد. این فصل بر اهمیت ورود به سیستم برای نظارت بر درخواست‌ها و پاسخ‌ها تاکید می‌کند. به طور کلی، Chopper تماس های شبکه را ساده می کند، ماژولار بودن کد را بهبود می بخشد و ثبت گزارش را برای بهبود ارتباطات شبکه در برنامه های Flutter تسهیل می کند.",
            },
        },
        // 13
        {
            "ChapterName": "Managing State",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter delves into the significance of state management in Flutter apps, highlighting the necessity of organizing code into manageable pieces to enhance maintainability and scalability. It introduces the Provider package as a key tool for state management and discusses the implementation of repositories and mock services for efficient data handling and testing. The chapter also touches on alternative state management libraries like Redux, BLoC, MobX, and Riverpod, providing a comprehensive overview of different approaches to managing app state. Additionally, it emphasizes the importance of clean architecture principles and communication between layers for effective state management in Flutter development.",
                // German
                "Deutsch": "Das Kapitel befasst sich mit der Bedeutung der Zustandsverwaltung in Flutter-Apps und betont die Notwendigkeit, Code in überschaubare Teile zu unterteilen, um die Wartbarkeit und Skalierbarkeit zu verbessern. Es stellt das Provider-Paket als Schlüsseltool für die Zustandsverwaltung vor und erörtert die Implementierung von Repositories und Mock-Diensten für eine effiziente Datenverarbeitung und -prüfung. Das Kapitel geht auch auf alternative Zustandsverwaltungsbibliotheken wie Redux, BLoC, MobX und Riverpod ein und bietet einen umfassenden Überblick über verschiedene Ansätze zur Verwaltung des App-Zustands. Darüber hinaus betont es die Bedeutung sauberer Architekturprinzipien und der Kommunikation zwischen Schichten für eine effektive Zustandsverwaltung in der Flutter-Entwicklung.",
                // Chinese
                "中国人": "本章深入探讨了 Flutter 应用中状态管理的重要性，强调了将代码组织成可管理部分以提高可维护性和可扩展性的必要性。它介绍了 Provider 包作为状态管理的关键工具，并讨论了存储库和模拟服务的实现，以实现高效的数据处理和测试。本章还涉及 Redux、BLoC、MobX 和 Riverpod 等替代状态管理库，全面概述了管理应用状态的不同方法。此外，它还强调了干净的架构原则和层间通信对于 Flutter 开发中有效状态管理的重要性。",
                // Russian
                "Русский": "В главе подробно рассматривается значение управления состоянием в приложениях Flutter, подчеркивая необходимость организации кода в управляемые части для повышения удобства сопровождения и масштабируемости. В нем представлен пакет Provider как ключевой инструмент управления состоянием и обсуждается реализация репозиториев и макетных сервисов для эффективной обработки и тестирования данных. В главе также затрагиваются альтернативные библиотеки управления состоянием, такие как Redux, BLoC, MobX и Riverpod, и предоставляется всеобъемлющий обзор различных подходов к управлению состоянием приложения. Кроме того, он подчеркивает важность принципов чистой архитектуры и связи между уровнями для эффективного управления состоянием при разработке Flutter.",
                // French
                "Français": "Le chapitre approfondit l'importance de la gestion de l'état dans les applications Flutter, soulignant la nécessité d'organiser le code en éléments gérables pour améliorer la maintenabilité et l'évolutivité. Il présente le package Provider en tant qu'outil clé pour la gestion de l'état et discute de la mise en œuvre de référentiels et de services fictifs pour une gestion et des tests efficaces des données. Le chapitre aborde également des bibliothèques alternatives de gestion d'état telles que Redux, BLoC, MobX et Riverpod, fournissant un aperçu complet des différentes approches de gestion de l'état des applications. De plus, il souligne l'importance des principes d'architecture propre et de la communication entre les couches pour une gestion efficace de l'état dans le développement de Flutter.",
                // Japanese
                "日本語": "この章では、Flutter アプリにおける状態管理の重要性について詳しく説明し、保守性とスケーラビリティを高めるためにコードを管理しやすい部分に編成する必要性を強調しています。状態管理の主要ツールとして Provider パッケージを紹介し、効率的なデータ処理とテストのためのリポジトリとモック サービスの実装について説明します。また、Redux、BLoC、MobX、Riverpod などの代替状態管理ライブラリについても触れ、アプリの状態を管理するためのさまざまなアプローチを包括的に概説しています。さらに、Flutter 開発における効果的な状態管理には、クリーンなアーキテクチャの原則とレイヤー間の通信が重要であることを強調しています。",
                // Korean
                "한국인": "이 장에서는 Flutter 앱에서 상태 관리의 중요성을 자세히 살펴보고, 유지 관리성과 확장성을 향상시키기 위해 코드를 관리 가능한 부분으로 구성해야 하는 필요성을 강조합니다. 상태 관리를 위한 핵심 도구인 Provider 패키지를 소개하고 효율적인 데이터 처리 및 테스트를 위한 리포지토리 및 모의 서비스 구현에 대해 논의합니다. 또한 이 장에서는 Redux, BLoC, MobX 및 Riverpod와 같은 대체 상태 관리 라이브러리를 다루며 앱 상태 관리에 대한 다양한 접근 방식에 대한 포괄적인 개요를 제공합니다. 또한 Flutter 개발에서 효과적인 상태 관리를 위해 깔끔한 아키텍처 원칙과 계층 간 통신의 중요성을 강조합니다.",
                // Spanish
                "Español": "El capítulo profundiza en la importancia de la gestión del estado en las aplicaciones Flutter, destacando la necesidad de organizar el código en piezas manejables para mejorar la mantenibilidad y la escalabilidad. Presenta el paquete Proveedor como una herramienta clave para la gestión estatal y analiza la implementación de repositorios y servicios simulados para el manejo y prueba eficiente de datos. El capítulo también aborda bibliotecas de administración de estado alternativas como Redux, BLoC, MobX y Riverpod, brindando una descripción general completa de diferentes enfoques para administrar el estado de las aplicaciones. Además, enfatiza la importancia de los principios de arquitectura limpia y la comunicación entre capas para una gestión estatal eficaz en el desarrollo de Flutter.",
                // Hindi
                "हिंदी": "अध्याय फ़्लटर ऐप में स्टेट मैनेजमेंट के महत्व पर विस्तार से चर्चा करता है, रखरखाव और मापनीयता को बढ़ाने के लिए कोड को प्रबंधनीय टुकड़ों में व्यवस्थित करने की आवश्यकता पर प्रकाश डालता है। यह प्रदाता पैकेज को स्टेट मैनेजमेंट के लिए एक महत्वपूर्ण उपकरण के रूप में पेश करता है और कुशल डेटा हैंडलिंग और परीक्षण के लिए रिपॉजिटरी और मॉक सेवाओं के कार्यान्वयन पर चर्चा करता है। अध्याय Redux, BLoC, MobX और Riverpod जैसी वैकल्पिक स्टेट मैनेजमेंट लाइब्रेरीज़ पर भी चर्चा करता है, जो ऐप स्टेट को मैनेज करने के विभिन्न तरीकों का व्यापक अवलोकन प्रदान करता है। इसके अतिरिक्त, यह फ़्लटर डेवलपमेंट में प्रभावी स्टेट मैनेजमेंट के लिए क्लीन आर्किटेक्चर सिद्धांतों और परतों के बीच संचार के महत्व पर ज़ोर देता है।",
                // Portuguese
                "Português": "O capítulo investiga a importância da gestão de estado nas aplicações Flutter, destacando a necessidade de organizar o código em partes geríveis para melhorar a capacidade de manutenção e a escalabilidade. Apresenta o pacote Provider como uma ferramenta fundamental para a gestão de estado e discute a implementação de repositórios e serviços simulados para uma manipulação e testes eficientes de dados. O capítulo aborda também bibliotecas alternativas de gestão de estado, como Redux, BLoC, MobX e Riverpod, fornecendo uma visão geral abrangente de diferentes abordagens para gerir o estado da aplicação. Além disso, enfatiza a importância dos princípios de arquitetura limpa e da comunicação entre camadas para uma gestão eficaz do estado no desenvolvimento do Flutter.",
                // Bengali
                "বাংলা": "অধ্যায়টি ফ্লাটার অ্যাপে রাষ্ট্র পরিচালনার তাৎপর্য নিয়ে আলোচনা করে, রক্ষণাবেক্ষণযোগ্যতা এবং মাপযোগ্যতা বাড়ানোর জন্য কোডকে পরিচালনাযোগ্য অংশে সংগঠিত করার প্রয়োজনীয়তা তুলে ধরে। এটি রাষ্ট্র পরিচালনার জন্য একটি মূল হাতিয়ার হিসাবে প্রদানকারী প্যাকেজ প্রবর্তন করে এবং দক্ষ ডেটা পরিচালনা এবং পরীক্ষার জন্য সংগ্রহস্থল এবং মক পরিষেবাগুলির বাস্তবায়ন নিয়ে আলোচনা করে। অধ্যায়টি Redux, BLoC, MobX, এবং Riverpod-এর মতো বিকল্প রাষ্ট্র পরিচালনার লাইব্রেরিগুলিকেও স্পর্শ করে, যা অ্যাপ রাজ্য পরিচালনার বিভিন্ন পদ্ধতির একটি ব্যাপক ওভারভিউ প্রদান করে। উপরন্তু, এটি ফ্লাটার বিকাশে কার্যকর রাষ্ট্র পরিচালনার জন্য পরিষ্কার স্থাপত্য নীতি এবং স্তরগুলির মধ্যে যোগাযোগের গুরুত্বের উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يتعمق الفصل في أهمية إدارة الحالة في تطبيقات Flutter، ويسلط الضوء على ضرورة تنظيم التعليمات البرمجية في أجزاء يمكن التحكم فيها لتعزيز قابلية الصيانة وقابلية التوسع. ويقدم حزمة الموفر كأداة رئيسية لإدارة الحالة ويناقش تنفيذ المستودعات والخدمات الوهمية لمعالجة البيانات واختبارها بكفاءة. يتطرق الفصل أيضًا إلى مكتبات إدارة الحالة البديلة مثل Redux وBLoC وMobX وRiverpod، مما يوفر نظرة عامة شاملة على الأساليب المختلفة لإدارة حالة التطبيق. بالإضافة إلى ذلك، فهو يؤكد على أهمية مبادئ البنية النظيفة والتواصل بين الطبقات لإدارة الحالة الفعالة في تطوير Flutter.",
                // Persian
                "فارسی": "این فصل به اهمیت مدیریت حالت در برنامه‌های Flutter می‌پردازد و ضرورت سازمان‌دهی کد به قطعات قابل مدیریت برای افزایش قابلیت نگهداری و مقیاس‌پذیری را برجسته می‌کند. این بسته ارائه دهنده را به عنوان یک ابزار کلیدی برای مدیریت دولتی معرفی می کند و در مورد پیاده سازی مخازن و سرویس های ساختگی برای مدیریت و آزمایش کارآمد داده ها بحث می کند. این فصل همچنین به کتابخانه‌های مدیریت دولتی جایگزین مانند Redux، BLoC، MobX، و Riverpod می‌پردازد و یک مرور کلی از رویکردهای مختلف برای مدیریت وضعیت برنامه ارائه می‌دهد. علاوه بر این، بر اهمیت اصول معماری پاک و ارتباط بین لایه‌ها برای مدیریت مؤثر حالت در توسعه فلاتر تأکید می‌کند.",
            },
        },
        // 14
        {
            "ChapterName": "Working With Streams",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Dart streams in Flutter are likened to data flowing down a creek, sending events for listeners to grab. This chapter delves into using streams to update a recipe project for bookmarks and ingredients, emphasizing the use of StreamController and sink to create and manage streams. Key points include the asynchronous nature of streams, the importance of StreamBuilder for UI updates, and the implementation of an interface to switch between different services. Overall, the chapter highlights the power of streams in controlling data flow and updating user interfaces dynamically.",
                // German
                "Deutsch": "Dart-Streams in Flutter sind mit Daten vergleichbar, die einen Bach hinunterfließen und Ereignisse senden, die von Listenern abgerufen werden können. In diesem Kapitel wird die Verwendung von Streams zum Aktualisieren eines Rezeptprojekts für Lesezeichen und Zutaten erläutert. Dabei wird die Verwendung von StreamController und Sink zum Erstellen und Verwalten von Streams hervorgehoben. Zu den wichtigsten Punkten gehören die asynchrone Natur von Streams, die Bedeutung von StreamBuilder für UI-Updates und die Implementierung einer Schnittstelle zum Wechseln zwischen verschiedenen Diensten. Insgesamt hebt das Kapitel die Leistungsfähigkeit von Streams bei der Steuerung des Datenflusses und der dynamischen Aktualisierung von Benutzeroberflächen hervor.",
                // Chinese
                "中国人": "Flutter 中的 Dart 流就像顺着小溪流淌的数据，发送事件供侦听器抓取。本章深入研究了如何使用流来更新食谱项目中的书签和配料，强调了使用 StreamController 和接收器来创建和管理流。重点包括流的异步性质、StreamBuilder 对 UI 更新的重要性以及实现在不同服务之间切换的接口。总体而言，本章重点介绍了流在控制数据流和动态更新用户界面方面的强大功能。",
                // Russian
                "Русский": "Потоки Dart во Flutter сравниваются с данными, текущими по ручью, отправляющими события для слушателей. В этой главе подробно рассматривается использование потоков для обновления проекта рецептов для закладок и ингредиентов, при этом особое внимание уделяется использованию StreamController и приемника для создания потоков и управления ими. Ключевые моменты включают асинхронный характер потоков, важность StreamBuilder для обновлений пользовательского интерфейса и реализацию интерфейса для переключения между различными сервисами. В целом, в этой главе подчеркивается эффективность потоков в управлении потоками данных и динамическом обновлении пользовательских интерфейсов.",
                // French
                "Français": "Les flux Dart dans Flutter sont assimilés à des données circulant dans un ruisseau, envoyant des événements que les auditeurs peuvent saisir. Ce chapitre aborde l'utilisation des flux pour mettre à jour un projet de recette pour les signets et les ingrédients, en mettant l'accent sur l'utilisation de StreamController et du récepteur pour créer et gérer des flux. Les points clés incluent la nature asynchrone des flux, l'importance de StreamBuilder pour les mises à jour de l'interface utilisateur et la mise en œuvre d'une interface pour basculer entre différents services. Dans l'ensemble, le chapitre met en évidence la puissance des flux dans le contrôle des flux de données et la mise à jour dynamique des interfaces utilisateur.",
                // Japanese
                "日本語": "Flutter の Dart ストリームは、小川を流れるデータに例えられ、リスナーが取得するためのイベントを送信します。この章では、ストリームを使用してブックマークと材料のレシピ プロジェクトを更新する方法について詳しく説明し、StreamController と sink を使用してストリームを作成および管理することに重点を置いています。重要なポイントには、ストリームの非同期性、UI 更新における StreamBuilder の重要性、および異なるサービスを切り替えるためのインターフェイスの実装が含まれます。全体として、この章では、データ フローを制御し、ユーザー インターフェイスを動的に更新するストリームの威力を強調しています。",
                // Korean
                "한국인": "Flutter의 Dart 스트림은 개울을 따라 흐르는 데이터에 비유되어 청취자가 잡을 수 있는 이벤트를 보냅니다. 이 장에서는 스트림을 사용하여 북마크 및 구성 요소에 대한 레시피 프로젝트를 업데이트하는 방법을 살펴보고 StreamController 및 싱크를 사용하여 스트림을 생성하고 관리하는 방법을 강조합니다. 요점에는 스트림의 비동기적 특성, UI 업데이트를 위한 StreamBuilder의 중요성, 다양한 서비스 간 전환을 위한 인터페이스 구현이 포함됩니다. 전반적으로 이 장에서는 데이터 흐름을 제어하고 사용자 인터페이스를 동적으로 업데이트하는 스트림의 힘을 강조합니다.",
                // Spanish
                "Español": "Las corrientes de dardos en Flutter se comparan con datos que fluyen por un arroyo y envían eventos para que los oyentes los capten. Este capítulo profundiza en el uso de transmisiones para actualizar un proyecto de receta para marcadores e ingredientes, enfatizando el uso de StreamController y receptor para crear y administrar transmisiones. Los puntos clave incluyen la naturaleza asincrónica de las transmisiones, la importancia de StreamBuilder para las actualizaciones de la interfaz de usuario y la implementación de una interfaz para cambiar entre diferentes servicios. En general, el capítulo destaca el poder de los flujos para controlar el flujo de datos y actualizar dinámicamente las interfaces de usuario.",
                // Hindi
                "हिंदी": "फ़्लटर में डार्ट स्ट्रीम की तुलना एक नाले में बहते डेटा से की जाती है, जो श्रोताओं को पकड़ने के लिए इवेंट भेजता है। यह अध्याय बुकमार्क और सामग्री के लिए रेसिपी प्रोजेक्ट को अपडेट करने के लिए स्ट्रीम का उपयोग करने पर गहराई से चर्चा करता है, स्ट्रीम बनाने और प्रबंधित करने के लिए स्ट्रीमकंट्रोलर और सिंक के उपयोग पर जोर देता है। मुख्य बिंदुओं में स्ट्रीम की अतुल्यकालिक प्रकृति, UI अपडेट के लिए स्ट्रीमबिल्डर का महत्व और विभिन्न सेवाओं के बीच स्विच करने के लिए एक इंटरफ़ेस का कार्यान्वयन शामिल है। कुल मिलाकर, अध्याय डेटा प्रवाह को नियंत्रित करने और उपयोगकर्ता इंटरफ़ेस को गतिशील रूप से अपडेट करने में स्ट्रीम की शक्ति पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Os fluxos de Dart no Flutter são comparados a dados que fluem através de um riacho, enviando eventos para os ouvintes capturarem. Este capítulo aprofunda a utilização de streams para atualizar um projeto de receita para marcadores e ingredientes, enfatizando a utilização de StreamController e sink para criar e gerir streams. Os pontos principais incluem a natureza assíncrona dos streams, a importância do StreamBuilder para atualizações da UI e a implementação de uma interface para alternar entre diferentes serviços. No geral, o capítulo destaca o poder dos fluxos no controlo do fluxo de dados e na atualização dinâmica das interfaces do utilizador.",
                // Bengali
                "বাংলা": "ফ্লটারে ডার্ট স্ট্রীমগুলিকে একটি খাঁড়ির নীচে প্রবাহিত ডেটার সাথে তুলনা করা হয়, যা শ্রোতাদের দখল করার জন্য ইভেন্ট পাঠায়। এই অধ্যায়টি বুকমার্ক এবং উপাদানগুলির জন্য একটি রেসিপি প্রকল্প আপডেট করার জন্য স্ট্রিমগুলি ব্যবহার করার বিষয়ে আলোচনা করে, স্ট্রিমগুলি তৈরি এবং পরিচালনা করতে স্ট্রিমকন্ট্রোলার এবং সিঙ্ক ব্যবহারের উপর জোর দেয়৷ মূল পয়েন্টগুলির মধ্যে রয়েছে স্ট্রীমের অ্যাসিঙ্ক্রোনাস প্রকৃতি, UI আপডেটের জন্য StreamBuilder এর গুরুত্ব এবং বিভিন্ন পরিষেবার মধ্যে স্যুইচ করার জন্য একটি ইন্টারফেসের বাস্তবায়ন। সামগ্রিকভাবে, অধ্যায়টি ডেটা প্রবাহ নিয়ন্ত্রণে এবং গতিশীলভাবে ব্যবহারকারীর ইন্টারফেস আপডেট করার ক্ষেত্রে স্ট্রিমের শক্তিকে হাইলাইট করে।",
                // Arabic
                "عَرَبِيّ": "يتم تشبيه تدفقات Dart في Flutter بالبيانات المتدفقة أسفل الجدول، مما يرسل الأحداث للمستمعين للاستيلاء عليها. يتعمق هذا الفصل في استخدام التدفقات لتحديث مشروع وصفة للإشارات المرجعية والمكونات، مع التركيز على استخدام StreamController والمخزن لإنشاء التدفقات وإدارتها. تشمل النقاط الرئيسية الطبيعة غير المتزامنة للتدفقات، وأهمية StreamBuilder لتحديثات واجهة المستخدم، وتنفيذ واجهة للتبديل بين الخدمات المختلفة. بشكل عام، يسلط الفصل الضوء على قوة التدفقات في التحكم في تدفق البيانات وتحديث واجهات المستخدم ديناميكيًا.",
                // Persian
                "فارسی": "جریان‌های دارت در فلاتر به داده‌هایی تشبیه می‌شوند که از یک نهر جاری می‌شوند و رویدادهایی را برای شنوندگان ارسال می‌کنند تا آن‌ها را بگیرند. این فصل به استفاده از جریان‌ها برای به‌روزرسانی یک پروژه دستور العمل برای نشانک‌ها و مواد تشکیل دهنده، با تأکید بر استفاده از StreamController و سینک برای ایجاد و مدیریت استریم‌ها می‌پردازد. نکات کلیدی عبارتند از ماهیت ناهمزمان استریم ها، اهمیت StreamBuilder برای به روز رسانی رابط کاربری، و اجرای یک رابط برای جابجایی بین سرویس های مختلف. به طور کلی، این فصل قدرت جریان‌ها را در کنترل جریان داده و به‌روزرسانی پویا رابط‌های کاربر برجسته می‌کند.",
            },
        },
        // 15
        {
            "ChapterName": "Saving Data With SQLite",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter focuses on persisting data using SQLite in Flutter. It introduces the use of the sqflite plugin and Moor library for database operations. The process involves creating tables, defining DAO classes, and implementing methods for data manipulation. The chapter emphasizes the importance of persisting data for app continuity and introduces reactive stream capabilities through the sqlbrite library. By leveraging SQLite databases, developers can insert, fetch, update, and remove structured data efficiently. The Moor library simplifies database operations by providing a Room-like approach for managing data persistence in Flutter applications.",
                // German
                "Deutsch": "Das Kapitel konzentriert sich auf die persistente Speicherung von Daten mit SQLite in Flutter. Es führt in die Verwendung des sqflite-Plugins und der Moor-Bibliothek für Datenbankoperationen ein. Der Prozess umfasst das Erstellen von Tabellen, das Definieren von DAO-Klassen und das Implementieren von Methoden zur Datenmanipulation. Das Kapitel betont die Bedeutung der persistenten Speicherung von Daten für die App-Kontinuität und führt reaktive Stream-Funktionen durch die sqlbrite-Bibliothek ein. Durch die Nutzung von SQLite-Datenbanken können Entwickler strukturierte Daten effizient einfügen, abrufen, aktualisieren und entfernen. Die Moor-Bibliothek vereinfacht Datenbankoperationen, indem sie einen Room-ähnlichen Ansatz zur Verwaltung der Datenpersistenz in Flutter-Anwendungen bietet.",
                // Chinese
                "中国人": "本章重点介绍如何在 Flutter 中使用 SQLite 持久化数据。它介绍了如何使用 sqflite 插件和 Moor 库进行数据库操作。该过程包括创建表、定义 DAO 类以及实现数据操作方法。本章强调了持久化数据对于应用程序连续性的重要性，并通过 sqlbrite 库介绍了反应流功能。通过利用 SQLite 数据库，开发人员可以高效地插入、获取、更新和删除结构化数据。Moor 库通过提供类似 Room 的方法来管理 Flutter 应用程序中的数据持久性，从而简化了数据库操作。",
                // Russian
                "Русский": "В главе основное внимание уделяется сохранению данных с использованием SQLite во Flutter. В нем рассказывается об использовании плагина sqflite и библиотеки Moor для операций с базой данных. Этот процесс включает в себя создание таблиц, определение классов DAO и реализацию методов манипулирования данными. В главе подчеркивается важность сохранения данных для непрерывности работы приложения и представлены возможности реактивного потока через библиотеку sqlbrite. Используя базы данных SQLite, разработчики могут эффективно вставлять, извлекать, обновлять и удалять структурированные данные. Библиотека Moor упрощает операции с базой данных, предоставляя подход Room-подобный для управления сохранением данных в приложениях Flutter.",
                // French
                "Français": "Le chapitre se concentre sur la persistance des données à l'aide de SQLite dans Flutter. Il introduit l'utilisation du plugin sqflite et de la bibliothèque Moor pour les opérations de base de données. Le processus implique la création de tables, la définition de classes DAO et la mise en œuvre de méthodes de manipulation des données. Le chapitre souligne l'importance de la persistance des données pour la continuité des applications et présente des fonctionnalités de flux réactif via la bibliothèque SQLbrite. En tirant parti des bases de données SQLite, les développeurs peuvent insérer, récupérer, mettre à jour et supprimer efficacement des données structurées. La bibliothèque Moor simplifie les opérations de base de données en fournissant une approche de type Room pour gérer la persistance des données dans les applications Flutter.",
                // Japanese
                "日本語": "この章では、Flutter で SQLite を使用してデータを永続化することに焦点を当てています。データベース操作のための sqflite プラグインと Moor ライブラリの使用を紹介します。プロセスには、テーブルの作成、DAO クラスの定義、およびデータ操作のメソッドの実装が含まれます。この章では、アプリの継続性のためにデータを永続化することの重要性を強調し、sqlbrite ライブラリによるリアクティブ ストリーム機能を紹介します。SQLite データベースを活用することで、開発者は構造化データを効率的に挿入、取得、更新、および削除できます。Moor ライブラリは、Flutter アプリケーションでデータの永続化を管理するための Room のようなアプローチを提供することで、データベース操作を簡素化します。",
                // Korean
                "한국인": "이 장에서는 Flutter에서 SQLite를 사용하여 데이터를 유지하는 데 중점을 둡니다. 데이터베이스 작업을 위해 sqflite 플러그인과 Moor 라이브러리를 사용하는 방법을 소개합니다. 이 프로세스에는 테이블 생성, DAO 클래스 정의, 데이터 조작 방법 구현이 포함됩니다. 이 장에서는 앱 연속성을 위한 데이터 지속의 중요성을 강조하고 sqlbrite 라이브러리를 통해 반응형 스트림 기능을 소개합니다. 개발자는 SQLite 데이터베이스를 활용하여 구조화된 데이터를 효율적으로 삽입, 가져오기, 업데이트 및 제거할 수 있습니다. Moor 라이브러리는 Flutter 애플리케이션에서 데이터 지속성을 관리하기 위한 Room과 유사한 접근 방식을 제공하여 데이터베이스 작업을 단순화합니다.",
                // Spanish
                "Español": "El capítulo se centra en la persistencia de datos usando SQLite en Flutter. Introduce el uso del complemento sqflite y la biblioteca Moor para operaciones de bases de datos. El proceso implica crear tablas, definir clases DAO e implementar métodos para la manipulación de datos. El capítulo enfatiza la importancia de conservar los datos para la continuidad de la aplicación e introduce capacidades de flujo reactivo a través de la biblioteca sqlbrite. Al aprovechar las bases de datos SQLite, los desarrolladores pueden insertar, recuperar, actualizar y eliminar datos estructurados de manera eficiente. La biblioteca Moor simplifica las operaciones de la base de datos al proporcionar un enfoque similar a Room para gestionar la persistencia de datos en aplicaciones Flutter.",
                // Hindi
                "हिंदी": "अध्याय फ़्लटर में SQLite का उपयोग करके डेटा को बनाए रखने पर केंद्रित है। यह डेटाबेस संचालन के लिए sqflite प्लगइन और Moor लाइब्रेरी के उपयोग का परिचय देता है। इस प्रक्रिया में टेबल बनाना, DAO क्लास परिभाषित करना और डेटा हेरफेर के लिए विधियों को लागू करना शामिल है। अध्याय ऐप निरंतरता के लिए डेटा को बनाए रखने के महत्व पर जोर देता है और sqlbrite लाइब्रेरी के माध्यम से प्रतिक्रियाशील स्ट्रीम क्षमताओं का परिचय देता है। SQLite डेटाबेस का लाभ उठाकर, डेवलपर्स कुशलतापूर्वक संरचित डेटा डाल सकते हैं, प्राप्त कर सकते हैं, अपडेट कर सकते हैं और हटा सकते हैं। मूर लाइब्रेरी फ़्लटर अनुप्रयोगों में डेटा दृढ़ता को प्रबंधित करने के लिए रूम-जैसा दृष्टिकोण प्रदान करके डेटाबेस संचालन को सरल बनाती है।",
                // Portuguese
                "Português": "O capítulo centra-se na persistência de dados utilizando SQLite no Flutter. Apresenta a utilização do plugin sqflite e da biblioteca Moor para operações de base de dados. O processo envolve a criação de tabelas, a definição de classes DAO e a implementação de métodos para a manipulação de dados. O capítulo enfatiza a importância da persistência de dados para a continuidade da aplicação e apresenta as capacidades de fluxo reativo através da biblioteca sqlbrite. Ao tirar partido das bases de dados SQLite, os programadores podem inserir, procurar, atualizar e remover dados estruturados com eficiência. A biblioteca Moor simplifica as operações de base de dados, fornecendo uma abordagem semelhante à Room para gerir a persistência de dados em aplicações Flutter.",
                // Bengali
                "বাংলা": "অধ্যায়টি ফ্লাটারে SQLite ব্যবহার করে স্থায়ী ডেটার উপর ফোকাস করে। এটি ডাটাবেস অপারেশনের জন্য sqflite প্লাগইন এবং মুর লাইব্রেরির ব্যবহার প্রবর্তন করে। এই প্রক্রিয়ার মধ্যে রয়েছে টেবিল তৈরি করা, DAO ক্লাস সংজ্ঞায়িত করা এবং ডেটা ম্যানিপুলেশনের জন্য পদ্ধতি প্রয়োগ করা। অধ্যায়টি অ্যাপের ধারাবাহিকতার জন্য ডেটা টিকে থাকার গুরুত্বের উপর জোর দেয় এবং sqlbrite লাইব্রেরির মাধ্যমে প্রতিক্রিয়াশীল স্ট্রীম ক্ষমতার পরিচয় দেয়। SQLite ডেটাবেস ব্যবহার করে, বিকাশকারীরা দক্ষতার সাথে কাঠামোগত ডেটা সন্নিবেশ, আনয়ন, আপডেট এবং সরাতে পারে। মুর লাইব্রেরি ফ্লটার অ্যাপ্লিকেশনগুলিতে ডেটা স্থিরতা পরিচালনার জন্য একটি রুম-সদৃশ পদ্ধতির প্রদান করে ডাটাবেস ক্রিয়াকলাপকে সহজ করে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل على البيانات المستمرة باستخدام SQLite في Flutter. يقدم استخدام البرنامج المساعد sqflite ومكتبة Moor لعمليات قاعدة البيانات. تتضمن العملية إنشاء الجداول وتحديد فئات DAO وتنفيذ أساليب معالجة البيانات. يؤكد الفصل على أهمية استمرار البيانات لاستمرارية التطبيق ويقدم إمكانات الدفق التفاعلي من خلال مكتبة sqlbrite. من خلال الاستفادة من قواعد بيانات SQLite، يمكن للمطورين إدراج البيانات المنظمة وجلبها وتحديثها وإزالتها بكفاءة. تعمل مكتبة Moor على تبسيط عمليات قاعدة البيانات من خلال توفير نهج يشبه الغرفة لإدارة استمرارية البيانات في تطبيقات Flutter.",
                // Persian
                "فارسی": "این فصل بر روی داده های ماندگار با استفاده از SQLite در Flutter تمرکز دارد. استفاده از پلاگین sqflite و کتابخانه Moor را برای عملیات پایگاه داده معرفی می کند. این فرآیند شامل ایجاد جداول، تعریف کلاس‌های DAO و پیاده‌سازی روش‌هایی برای دستکاری داده‌ها است. این فصل بر اهمیت ماندگاری داده ها برای تداوم برنامه تاکید می کند و قابلیت های جریان واکنشی را از طریق کتابخانه sqlbrite معرفی می کند. با استفاده از پایگاه‌های داده SQLite، توسعه‌دهندگان می‌توانند داده‌های ساخت‌یافته را به طور موثر وارد، واکشی، به‌روزرسانی و حذف کنند. کتابخانه Moor عملیات پایگاه داده را با ارائه یک رویکرد اتاق مانند برای مدیریت ماندگاری داده در برنامه های Flutter ساده می کند.",
            },
        },
        // 16
        {
            "ChapterName": "Platform-Specific App Assets",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on customizing platform-specific app assets in Flutter projects. It covers setting app icons and launch screens for both Android and iOS platforms, emphasizing the importance of tailoring these elements to suit each platform's requirements. The chapter provides detailed instructions on optimizing app icons in Xcode for iOS, personalizing icons for Android, and enhancing launch screen aesthetics with labels and constraints. Overall, the chapter highlights the significance of fine-tuning app assets to create a visually appealing and cohesive user experience across different platforms.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Anpassung plattformspezifischer App-Assets in Flutter-Projekten. Es behandelt das Festlegen von App-Symbolen und Startbildschirmen für Android- und iOS-Plattformen und betont, wie wichtig es ist, diese Elemente an die Anforderungen jeder Plattform anzupassen. Das Kapitel enthält detaillierte Anweisungen zum Optimieren von App-Symbolen in Xcode für iOS, zum Personalisieren von Symbolen für Android und zum Verbessern der Ästhetik des Startbildschirms mit Beschriftungen und Einschränkungen. Insgesamt unterstreicht das Kapitel die Bedeutung der Feinabstimmung von App-Assets, um ein optisch ansprechendes und einheitliches Benutzererlebnis auf verschiedenen Plattformen zu schaffen.",
                // Chinese
                "中国人": "本章重点介绍如何在 Flutter 项目中自定义特定于平台的应用资产。它涵盖了为 Android 和 iOS 平台设置应用图标和启动屏幕，强调了根据每个平台的要求定制这些元素的重要性。本章详细介绍了如何在 Xcode 中优化 iOS 版应用图标、为 Android 版个性化图标以及使用标签和约束增强启动屏幕的美观性。总体而言，本章强调了微调应用资产以在不同平台上创建具有视觉吸引力和凝聚力的用户体验的重要性。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется настройке ресурсов приложений для конкретной платформы в проектах Flutter. В нем рассматривается настройка значков приложений и экранов запуска для платформ Android и iOS, подчеркивая важность адаптации этих элементов к требованиям каждой платформы. В главе представлены подробные инструкции по оптимизации значков приложений в Xcode для iOS, персонализации значков для Android и улучшению эстетики экрана запуска с помощью меток и ограничений. В целом, в главе подчеркивается важность тонкой настройки ресурсов приложений для создания визуально привлекательного и связного пользовательского опыта на разных платформах.",
                // French
                "Français": "Ce chapitre se concentre sur la personnalisation des ressources d'application spécifiques à la plate-forme dans les projets Flutter. Il couvre la configuration des icônes d'application et des écrans de lancement pour les plates-formes Android et iOS, en soulignant l'importance d'adapter ces éléments aux exigences de chaque plate-forme. Le chapitre fournit des instructions détaillées sur l'optimisation des icônes d'application dans Xcode pour iOS, la personnalisation des icônes pour Android et l'amélioration de l'esthétique de l'écran de lancement avec des étiquettes et des contraintes. Dans l’ensemble, le chapitre souligne l’importance d’affiner les actifs des applications pour créer une expérience utilisateur visuellement attrayante et cohérente sur différentes plates-formes.",
                // Japanese
                "日本語": "この章では、Flutter プロジェクトでプラットフォーム固有のアプリ アセットをカスタマイズすることに焦点を当てています。Android と iOS の両方のプラットフォームのアプリ アイコンと起動画面の設定について説明し、これらの要素を各プラットフォームの要件に合わせて調整することの重要性を強調しています。この章では、iOS 用 Xcode でのアプリ アイコンの最適化、Android 用アイコンのカスタマイズ、ラベルと制約による起動画面の美観の向上について詳細な手順を説明します。全体として、この章では、さまざまなプラットフォームで視覚的に魅力的で一貫性のあるユーザー エクスペリエンスを実現するために、アプリ アセットを微調整することの重要性を強調しています。",
                // Korean
                "한국인": "이 장에서는 Flutter 프로젝트에서 플랫폼별 앱 자산을 사용자 정의하는 데 중점을 둡니다. Android 및 iOS 플랫폼 모두에 대한 앱 아이콘 및 실행 화면 설정을 다루며 각 플랫폼의 요구 사항에 맞게 이러한 요소를 조정하는 것의 중요성을 강조합니다. 이 장에서는 iOS용 Xcode에서 앱 아이콘을 최적화하고, Android용 아이콘을 개인화하고, 레이블과 제약 조건을 사용하여 시작 화면 미학을 향상시키는 방법에 대한 자세한 지침을 제공합니다. 전반적으로 이 장에서는 다양한 플랫폼에서 시각적으로 매력적이고 응집력 있는 사용자 경험을 만들기 위해 앱 자산을 미세 조정하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la personalización de activos de aplicaciones específicos de la plataforma en proyectos de Flutter. Cubre la configuración de íconos de aplicaciones y pantallas de inicio para plataformas Android e iOS, enfatizando la importancia de adaptar estos elementos para satisfacer los requisitos de cada plataforma. El capítulo proporciona instrucciones detalladas sobre cómo optimizar los íconos de aplicaciones en Xcode para iOS, personalizar íconos para Android y mejorar la estética de la pantalla de inicio con etiquetas y restricciones. En general, el capítulo destaca la importancia de ajustar los activos de las aplicaciones para crear una experiencia de usuario visualmente atractiva y cohesiva en diferentes plataformas.",
                // Hindi
                "हिंदी": "यह अध्याय फ़्लटर प्रोजेक्ट में प्लेटफ़ॉर्म-विशिष्ट ऐप एसेट्स को कस्टमाइज़ करने पर केंद्रित है। इसमें एंड्रॉइड और iOS दोनों प्लेटफ़ॉर्म के लिए ऐप आइकन और लॉन्च स्क्रीन सेट करना शामिल है, प्रत्येक प्लेटफ़ॉर्म की आवश्यकताओं के अनुरूप इन तत्वों को तैयार करने के महत्व पर ज़ोर दिया गया है। यह अध्याय iOS के लिए Xcode में ऐप आइकन को ऑप्टिमाइज़ करने, Android के लिए आइकन को निजीकृत करने और लेबल और बाधाओं के साथ लॉन्च स्क्रीन के सौंदर्यशास्त्र को बढ़ाने के बारे में विस्तृत निर्देश प्रदान करता है। कुल मिलाकर, यह अध्याय विभिन्न प्लेटफ़ॉर्म पर एक आकर्षक और सुसंगत उपयोगकर्ता अनुभव बनाने के लिए ऐप एसेट्स को ठीक करने के महत्व पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na personalização de ativos de aplicações específicos da plataforma em projetos Flutter. Aborda a configuração de ícones de aplicações e ecrãs de arranque para as plataformas Android e iOS, enfatizando a importância de adaptar estes elementos para atender aos requisitos de cada plataforma. O capítulo fornece instruções detalhadas sobre como otimizar os ícones das aplicações no Xcode para iOS, personalizar os ícones para Android e melhorar a estética do ecrã inicial com etiquetas e restrições. No geral, o capítulo destaca a importância do ajuste fino dos ativos da aplicação para criar uma experiência de utilizador visualmente apelativa e coesa em diferentes plataformas.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ফ্লাটার প্রকল্পগুলিতে প্ল্যাটফর্ম-নির্দিষ্ট অ্যাপ সম্পদগুলি কাস্টমাইজ করার উপর দৃষ্টি নিবদ্ধ করে। এটি অ্যান্ড্রয়েড এবং আইওএস উভয় প্ল্যাটফর্মের জন্য অ্যাপের আইকন এবং লঞ্চ স্ক্রিনগুলিকে কভার করে, প্রতিটি প্ল্যাটফর্মের প্রয়োজনীয়তা অনুসারে এই উপাদানগুলিকে সেলাই করার গুরুত্বের উপর জোর দেয়। অধ্যায়টি iOS-এর জন্য Xcode-এ অ্যাপ আইকন অপ্টিমাইজ করা, অ্যান্ড্রয়েডের জন্য আইকন ব্যক্তিগতকরণ, এবং লেবেল এবং সীমাবদ্ধতা সহ লঞ্চ স্ক্রিন নান্দনিকতা উন্নত করার বিষয়ে বিস্তারিত নির্দেশনা প্রদান করে। সামগ্রিকভাবে, অধ্যায়টি বিভিন্ন প্ল্যাটফর্ম জুড়ে একটি দৃশ্যমান আকর্ষণীয় এবং সমন্বিত ব্যবহারকারীর অভিজ্ঞতা তৈরি করতে ফাইন-টিউনিং অ্যাপ সম্পদের তাত্পর্য তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تخصيص أصول التطبيق الخاصة بالنظام الأساسي في مشاريع Flutter. ويغطي إعداد أيقونات التطبيقات وشاشات التشغيل لكل من منصات Android وiOS، مع التركيز على أهمية تخصيص هذه العناصر لتناسب متطلبات كل منصة. يقدم الفصل تعليمات مفصلة حول تحسين أيقونات التطبيقات في Xcode لنظام iOS، وتخصيص الأيقونات لنظام Android، وتحسين جماليات شاشة التشغيل باستخدام التصنيفات والقيود. بشكل عام، يسلط الفصل الضوء على أهمية الضبط الدقيق لأصول التطبيق لإنشاء تجربة مستخدم جذابة ومتماسكة عبر منصات مختلفة.",
                // Persian
                "فارسی": "این فصل بر سفارشی‌سازی دارایی‌های اپلیکیشن مخصوص پلتفرم در پروژه‌های Flutter تمرکز دارد. این برنامه تنظیم نمادهای برنامه و صفحه های راه اندازی را برای هر دو سیستم عامل اندروید و iOS پوشش می دهد و بر اهمیت تنظیم این عناصر برای مطابقت با نیازهای هر پلتفرم تأکید می کند. این فصل دستورالعمل‌های دقیقی در مورد بهینه‌سازی نمادهای برنامه در Xcode برای iOS، شخصی‌سازی نمادها برای اندروید و بهبود زیبایی‌شناسی صفحه نمایش با برچسب‌ها و محدودیت‌ها ارائه می‌دهد. به طور کلی، این فصل اهمیت تنظیم دقیق دارایی های برنامه را برای ایجاد یک تجربه کاربری بصری جذاب و منسجم در پلتفرم های مختلف برجسته می کند.",
            },
        },
        // 17
        {
            "ChapterName": "Build & Release an Android App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Learn how to prepare and release your Android app on the Google Play Store in this chapter. The process involves creating a signed release build, updating the manifest file, and setting up the necessary configurations. You will also generate a signing key for app security, upload the app bundle to the Play Store, provide app details and assets, and invite testers for internal testing. By following these steps, you can successfully launch your app for distribution and testing on Android devices.",
                // German
                "Deutsch": "In diesem Kapitel erfahren Sie, wie Sie Ihre Android-App im Google Play Store vorbereiten und veröffentlichen. Der Vorgang umfasst das Erstellen eines signierten Release-Builds, das Aktualisieren der Manifestdatei und das Einrichten der erforderlichen Konfigurationen. Sie generieren außerdem einen Signaturschlüssel für die App-Sicherheit, laden das App-Paket in den Play Store hoch, geben App-Details und -Assets an und laden Tester zum internen Testen ein. Wenn Sie diese Schritte befolgen, können Sie Ihre App erfolgreich zur Verteilung und zum Testen auf Android-Geräten starten.",
                // Chinese
                "中国人": "本章将介绍如何准备和发布您的 Android 应用到 Google Play 商店。此过程包括创建签名的发布版本、更新清单文件以及设置必要的配置。您还将生成用于应用安全的签名密钥、将应用包上传到 Play 商店、提供应用详细信息和资产，并邀请测试人员进行内部测试。通过执行这些步骤，您可以成功启动您的应用，以便在 Android 设备上进行分发和测试。",
                // Russian
                "Русский": "В этой главе вы узнаете, как подготовить и выпустить свое приложение для Android в магазине Google Play. Этот процесс включает в себя создание подписанной сборки выпуска, обновление файла манифеста и настройку необходимых конфигураций. Вы также создадите ключ подписи для обеспечения безопасности приложения, загрузите пакет приложения в Play Store, предоставите сведения и ресурсы приложения и пригласите тестировщиков для внутреннего тестирования. Выполнив эти шаги, вы сможете успешно запустить свое приложение для распространения и тестирования на устройствах Android.",
                // French
                "Français": "Découvrez comment préparer et publier votre application Android sur le Google Play Store dans ce chapitre. Le processus implique la création d’une version signée, la mise à jour du fichier manifeste et la configuration des configurations nécessaires. Vous générerez également une clé de signature pour la sécurité de l'application, téléchargerez l'ensemble d'applications sur le Play Store, fournirez les détails et les ressources de l'application et inviterez des testeurs à des tests internes. En suivant ces étapes, vous pouvez lancer avec succès votre application pour la distribution et les tests sur les appareils Android.",
                // Japanese
                "日本語": "この章では、Google Play ストアで Android アプリを準備してリリースする方法を学びます。このプロセスには、署名済みリリース ビルドの作成、マニフェスト ファイルの更新、必要な構成のセットアップが含まれます。また、アプリのセキュリティ用の署名キーを生成し、Play ストアにアプリ バンドルをアップロードし、アプリの詳細とアセットを提供し、内部テストのためにテスターを招待します。これらの手順に従うことで、Android デバイスでの配布とテスト用にアプリを正常に起動できます。",
                // Korean
                "한국인": "이 장에서는 Android 앱을 준비하고 Google Play 스토어에 출시하는 방법을 알아봅니다. 이 프로세스에는 서명된 릴리스 빌드 생성, 매니페스트 파일 업데이트 및 필요한 구성 설정이 포함됩니다. 또한 앱 보안을 위한 서명 키를 생성하고, 앱 번들을 Play 스토어에 업로드하고, 앱 세부정보와 자산을 제공하고, 내부 테스트를 위해 테스터를 초대합니다. 다음 단계를 따르면 Android 기기에서 배포 및 테스트를 위해 앱을 성공적으로 시작할 수 있습니다.",
                // Spanish
                "Español": "Aprenda cómo preparar y lanzar su aplicación de Android en Google Play Store en este capítulo. El proceso implica crear una versión de lanzamiento firmada, actualizar el archivo de manifiesto y establecer las configuraciones necesarias. También generará una clave de firma para la seguridad de la aplicación, cargará el paquete de la aplicación en Play Store, proporcionará detalles y activos de la aplicación e invitará a evaluadores para pruebas internas. Si sigue estos pasos, podrá iniciar con éxito su aplicación para distribuirla y probarla en dispositivos Android.",
                // Hindi
                "हिंदी": "इस अध्याय में जानें कि Google Play Store पर अपना Android ऐप कैसे तैयार करें और रिलीज़ करें। इस प्रक्रिया में एक हस्ताक्षरित रिलीज़ बिल्ड बनाना, मैनिफ़ेस्ट फ़ाइल को अपडेट करना और आवश्यक कॉन्फ़िगरेशन सेट करना शामिल है। आप ऐप सुरक्षा के लिए एक साइनिंग कुंजी भी जेनरेट करेंगे, ऐप बंडल को Play Store पर अपलोड करेंगे, ऐप विवरण और एसेट प्रदान करेंगे और आंतरिक परीक्षण के लिए परीक्षकों को आमंत्रित करेंगे। इन चरणों का पालन करके, आप Android डिवाइस पर वितरण और परीक्षण के लिए अपने ऐप को सफलतापूर्वक लॉन्च कर सकते हैं।",
                // Portuguese
                "Português": "Saiba como preparar e lançar a sua aplicação Android na Google Play Store neste capítulo. O processo envolve a criação de uma versão assinada, a atualização do ficheiro de manifesto e a definição das definições necessárias. Também irá gerar uma chave de assinatura para segurança da aplicação, carregar o pacote de aplicações para a Play Store, fornecer detalhes e características da aplicação e convidar testadores para testes internos. Seguindo estes passos, pode lançar a sua aplicação com sucesso para distribuição e teste em dispositivos Android.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে গুগল প্লে স্টোরে কীভাবে আপনার অ্যান্ড্রয়েড অ্যাপ প্রস্তুত ও প্রকাশ করবেন তা শিখুন। প্রক্রিয়াটিতে একটি স্বাক্ষরিত রিলিজ বিল্ড তৈরি করা, ম্যানিফেস্ট ফাইল আপডেট করা এবং প্রয়োজনীয় কনফিগারেশন সেট আপ করা জড়িত। এছাড়াও আপনি অ্যাপ নিরাপত্তার জন্য একটি সাইনিং কী তৈরি করবেন, প্লে স্টোরে অ্যাপ বান্ডেল আপলোড করবেন, অ্যাপের বিশদ বিবরণ এবং সম্পদ প্রদান করবেন এবং অভ্যন্তরীণ পরীক্ষার জন্য পরীক্ষকদের আমন্ত্রণ জানাবেন। এই পদক্ষেপগুলি অনুসরণ করে, আপনি Android ডিভাইসে বিতরণ এবং পরীক্ষার জন্য সফলভাবে আপনার অ্যাপ চালু করতে পারেন।",
                // Arabic
                "عَرَبِيّ": "تعرف على كيفية إعداد تطبيق Android الخاص بك وإصداره على متجر Google Play في هذا الفصل. تتضمن العملية إنشاء إصدار موقّع، وتحديث ملف البيان، وإعداد التكوينات اللازمة. ستقوم أيضًا بإنشاء مفتاح توقيع لأمان التطبيق، وتحميل حزمة التطبيق إلى متجر Play، وتوفير تفاصيل التطبيق وأصوله، ودعوة المختبرين للاختبار الداخلي. باتباع هذه الخطوات، يمكنك تشغيل تطبيقك بنجاح للتوزيع والاختبار على أجهزة Android.",
                // Persian
                "فارسی": "در این فصل با نحوه آماده سازی و انتشار برنامه اندروید خود در فروشگاه Google Play آشنا شوید. این فرآیند شامل ایجاد یک نسخه امضا شده، به‌روزرسانی فایل مانیفست و تنظیم تنظیمات لازم است. همچنین یک کلید امضا برای امنیت برنامه ایجاد می‌کنید، بسته برنامه را در فروشگاه Play آپلود می‌کنید، جزئیات و دارایی‌های برنامه را ارائه می‌کنید و آزمایش‌کنندگان را برای آزمایش داخلی دعوت می‌کنید. با دنبال کردن این مراحل، می توانید با موفقیت برنامه خود را برای توزیع و آزمایش در دستگاه های اندرویدی راه اندازی کنید.",
            },
        },
        // 18
        {
            "ChapterName": "Build & Release an iOS App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, you will learn how to distribute your Flutter app's iOS version using Xcode and TestFlight. Unlike Android, iOS apps cannot be sideloaded and must go through App Store Connect for distribution. You need a Mac with Xcode and a valid Apple Developer Program account. Key steps include configuring the Apple Developer Portal, setting up App Store Connect, archiving the project in Xcode, and using TestFlight for testing. Additionally, you'll need to create an app identifier, configure app signing, and submit the app for review on the App Store. Following best practices and resources for further learning are also provided.",
                // German
                "Deutsch": "In diesem Kapitel erfahren Sie, wie Sie die iOS-Version Ihrer Flutter-App mit Xcode und TestFlight verteilen. Im Gegensatz zu Android können iOS-Apps nicht sideloaded werden und müssen für die Verteilung über App Store Connect laufen. Sie benötigen einen Mac mit Xcode und ein gültiges Apple Developer Program-Konto. Zu den wichtigsten Schritten gehören die Konfiguration des Apple Developer Portals, die Einrichtung von App Store Connect, das Archivieren des Projekts in Xcode und die Verwendung von TestFlight zum Testen. Darüber hinaus müssen Sie eine App-ID erstellen, die App-Signierung konfigurieren und die App zur Überprüfung im App Store einreichen. Es werden auch Best Practices und Ressourcen zum weiteren Lernen bereitgestellt.",
                // Chinese
                "中国人": "在本章中，您将学习如何使用 Xcode 和 TestFlight 分发 Flutter 应用的 iOS 版本。与 Android 不同，iOS 应用无法侧载，必须通过 App Store Connect 进行分发。您需要一台装有 Xcode 的 Mac 和一个有效的 Apple Developer Program 帐户。关键步骤包括配置 Apple Developer Portal、设置 App Store Connect、在 Xcode 中存档项目以及使用 TestFlight 进行测试。此外，您还需要创建应用标识符、配置应用签名并提交应用以供 App Store 审核。还提供了以下最佳实践和进一步学习的资源。",
                // Russian
                "Русский": "В этой главе вы узнаете, как распространять версию вашего приложения Flutter для iOS с помощью Xcode и TestFlight. В отличие от Android, приложения iOS не могут быть загружены неопубликовано и должны распространяться через App Store Connect. Вам понадобится Mac с Xcode и действующая учетная запись программы Apple Developer Program. Ключевые шаги включают настройку портала разработчиков Apple, настройку App Store Connect, архивирование проекта в Xcode и использование TestFlight для тестирования. Кроме того, вам потребуется создать идентификатор приложения, настроить подпись приложения и отправить приложение на рассмотрение в App Store. Также предоставляются следующие лучшие практики и ресурсы для дальнейшего обучения.",
                // French
                "Français": "Dans ce chapitre, vous apprendrez comment distribuer la version iOS de votre application Flutter à l'aide de Xcode et TestFlight. Contrairement à Android, les applications iOS ne peuvent pas être téléchargées et doivent passer par App Store Connect pour être distribuées. Vous avez besoin d'un Mac avec Xcode et d'un compte valide du programme pour développeurs Apple. Les étapes clés incluent la configuration du portail des développeurs Apple, la configuration de l'App Store Connect, l'archivage du projet dans Xcode et l'utilisation de TestFlight pour les tests. De plus, vous devrez créer un identifiant d'application, configurer la signature d'application et soumettre l'application pour examen sur l'App Store. Les meilleures pratiques suivantes et des ressources pour un apprentissage ultérieur sont également fournies.",
                // Japanese
                "日本語": "この章では、Xcode と TestFlight を使用して Flutter アプリの iOS バージョンを配布する方法を学びます。Android とは異なり、iOS アプリはサイドロードできず、配布するには App Store Connect を経由する必要があります。Xcode がインストールされた Mac と有効な Apple Developer Program アカウントが必要です。主な手順には、Apple Developer Portal の構成、App Store Connect のセットアップ、Xcode でのプロジェクトのアーカイブ、TestFlight を使用したテストなどがあります。さらに、アプリ識別子を作成し、アプリ署名を構成し、App Store でアプリをレビューに提出する必要があります。さらに学習するためのベスト プラクティスとリソースも提供されています。",
                // Korean
                "한국인": "이 장에서는 Xcode 및 TestFlight를 사용하여 Flutter 앱의 iOS 버전을 배포하는 방법을 알아봅니다. Android와 달리 iOS 앱은 사이드로드할 수 없으며 배포하려면 App Store Connect를 거쳐야 합니다. Xcode가 설치된 Mac과 유효한 Apple 개발자 프로그램 계정이 필요합니다. 주요 단계에는 Apple 개발자 포털 구성, App Store Connect 설정, Xcode에서 프로젝트 보관 및 테스트를 위한 TestFlight 사용이 포함됩니다. 또한 앱 식별자를 만들고, 앱 서명을 구성하고, App Store에서 검토를 위해 앱을 제출해야 합니다. 추가 학습을 위한 다음 모범 사례와 리소스도 제공됩니다.",
                // Spanish
                "Español": "En este capítulo, aprenderá cómo distribuir la versión iOS de su aplicación Flutter usando Xcode y TestFlight. A diferencia de Android, las aplicaciones de iOS no se pueden descargar y deben pasar por App Store Connect para su distribución. Necesita una Mac con Xcode y una cuenta válida del Programa de desarrolladores de Apple. Los pasos clave incluyen configurar el Portal de desarrolladores de Apple, configurar App Store Connect, archivar el proyecto en Xcode y usar TestFlight para realizar pruebas. Además, deberá crear un identificador de aplicación, configurar la firma de la aplicación y enviar la aplicación para su revisión en la App Store. También se proporcionan las siguientes mejores prácticas y recursos para un mayor aprendizaje.",
                // Hindi
                "हिंदी": "इस अध्याय में, आप सीखेंगे कि Xcode और TestFlight का उपयोग करके अपने फ़्लटर ऐप के iOS संस्करण को कैसे वितरित किया जाए। Android के विपरीत, iOS ऐप को साइडलोड नहीं किया जा सकता है और वितरण के लिए App Store Connect से गुजरना पड़ता है। आपको Xcode वाला Mac और एक वैध Apple डेवलपर प्रोग्राम खाता चाहिए। मुख्य चरणों में Apple डेवलपर पोर्टल को कॉन्फ़िगर करना, App Store Connect को सेट करना, Xcode में प्रोजेक्ट को संग्रहित करना और परीक्षण के लिए TestFlight का उपयोग करना शामिल है। इसके अतिरिक्त, आपको ऐप पहचानकर्ता बनाना होगा, ऐप साइनिंग को कॉन्फ़िगर करना होगा और ऐप को App Store पर समीक्षा के लिए सबमिट करना होगा। आगे सीखने के लिए निम्नलिखित सर्वोत्तम अभ्यास और संसाधन भी प्रदान किए गए हैं।",
                // Portuguese
                "Português": "Neste capítulo, aprenderá a distribuir a versão iOS da sua aplicação Flutter utilizando o Xcode e o TestFlight. Ao contrário do Android, as aplicações iOS não podem ser transferidas e devem passar pelo App Store Connect para distribuição. Necessita de um Mac com Xcode e de uma conta válida do Apple Developer Program. Os principais passos incluem configurar o Apple Developer Portal, configurar o App Store Connect, arquivar o projeto no Xcode e utilizar o TestFlight para teste. Além disso, terá de criar um identificador de aplicação, configurar a assinatura da aplicação e enviar a aplicação para revisão na App Store. São também fornecidas as melhores práticas e recursos para aprendizagem adicional.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, আপনি Xcode এবং TestFlight ব্যবহার করে আপনার Flutter অ্যাপের iOS সংস্করণ কীভাবে বিতরণ করবেন তা শিখবেন। অ্যান্ড্রয়েডের বিপরীতে, iOS অ্যাপ্লিকেশানগুলি সাইডলোড করা যাবে না এবং বিতরণের জন্য অ্যাপ স্টোর সংযোগের মাধ্যমে যেতে হবে। আপনার এক্সকোড সহ একটি ম্যাক এবং একটি বৈধ অ্যাপল বিকাশকারী প্রোগ্রাম অ্যাকাউন্ট প্রয়োজন৷ মূল পদক্ষেপগুলির মধ্যে রয়েছে অ্যাপল ডেভেলপার পোর্টাল কনফিগার করা, অ্যাপ স্টোর কানেক্ট সেট আপ করা, এক্সকোডে প্রোজেক্টটি আর্কাইভ করা এবং পরীক্ষার জন্য TestFlight ব্যবহার করা। উপরন্তু, আপনাকে একটি অ্যাপ শনাক্তকারী তৈরি করতে হবে, অ্যাপ সাইনিং কনফিগার করতে হবে এবং অ্যাপ স্টোরে পর্যালোচনার জন্য অ্যাপটি জমা দিতে হবে। আরও শেখার জন্য সর্বোত্তম অনুশীলন এবং সংস্থানগুলি অনুসরণ করা হয়।",
                // Arabic
                "عَرَبِيّ": "ستتعلم في هذا الفصل كيفية توزيع إصدار iOS الخاص بتطبيق Flutter باستخدام Xcode وTestFlight. على عكس Android، لا يمكن تحميل تطبيقات iOS بشكل جانبي ويجب أن تمر عبر App Store Connect للتوزيع. أنت بحاجة إلى جهاز Mac مزود بـ Xcode وحساب برنامج Apple Developer صالح. تتضمن الخطوات الأساسية تكوين Apple Developer Portal، وإعداد App Store Connect، وأرشفة المشروع في Xcode، واستخدام TestFlight للاختبار. بالإضافة إلى ذلك، ستحتاج إلى إنشاء معرف تطبيق، وتكوين توقيع التطبيق، وإرسال التطبيق للمراجعة على App Store. يتم أيضًا توفير أفضل الممارسات والموارد لمزيد من التعلم.",
                // Persian
                "فارسی": "در این فصل، نحوه توزیع نسخه iOS برنامه Flutter خود را با استفاده از Xcode و TestFlight خواهید آموخت. برخلاف اندروید، برنامه‌های iOS را نمی‌توان جانبی بارگذاری کرد و برای توزیع باید از App Store Connect استفاده کنند. شما به یک مک با Xcode و یک حساب معتبر برنامه توسعه دهنده اپل نیاز دارید. مراحل کلیدی شامل پیکربندی پورتال توسعه‌دهنده اپل، راه‌اندازی App Store Connect، بایگانی پروژه در Xcode و استفاده از TestFlight برای آزمایش است. علاوه بر این، باید یک شناسه برنامه ایجاد کنید، امضای برنامه را پیکربندی کنید و برنامه را برای بررسی در اپ استور ارسال کنید. پیروی از بهترین شیوه ها و منابع برای یادگیری بیشتر نیز ارائه شده است.",
            },
        },
        // 19
        {
            "ChapterName": "Firebase Cloud Firestore",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Firebase Cloud Firestore simplifies database management for Flutter apps by providing a scalable cloud storage solution. By integrating Firebase functionalities like authentication and data access objects (DAO), developers can streamline app development and enhance user experience. The chapter covers setting up a Firebase project, connecting to Cloud Firestore, querying data, and implementing real-time updates. Through practical examples like creating an instant messaging app called RayChat, developers learn how to leverage Firebase features efficiently and effectively in their Flutter applications.",
                // German
                "Deutsch": "Firebase Cloud Firestore vereinfacht die Datenbankverwaltung für Flutter-Apps, indem es eine skalierbare Cloud-Speicherlösung bietet. Durch die Integration von Firebase-Funktionen wie Authentifizierung und Datenzugriffsobjekten (DAO) können Entwickler die App-Entwicklung optimieren und das Benutzererlebnis verbessern. Das Kapitel behandelt das Einrichten eines Firebase-Projekts, die Verbindung zu Cloud Firestore, das Abfragen von Daten und das Implementieren von Echtzeit-Updates. Anhand praktischer Beispiele wie der Erstellung einer Instant-Messaging-App namens RayChat lernen Entwickler, wie sie Firebase-Funktionen effizient und effektiv in ihren Flutter-Anwendungen nutzen können.",
                // Chinese
                "中国人": "Firebase Cloud Firestore 通过提供可扩展的云存储解决方案简化了 Flutter 应用的数据库管理。通过集成身份验证和数据访问对象 (DAO) 等 Firebase 功能，开发人员可以简化应用开发并增强用户体验。本章介绍了如何设置 Firebase 项目、连接到 Cloud Firestore、查询数据以及实现实时更新。通过创建名为 RayChat 的即时通讯应用等实际示例，开发人员可以学习如何在 Flutter 应用中高效、有效地利用 Firebase 功能。",
                // Russian
                "Русский": "Firebase Cloud Firestore упрощает управление базами данных для приложений Flutter, предоставляя масштабируемое решение для облачного хранилища. Интегрируя такие функции Firebase, как объекты аутентификации и доступа к данным (DAO), разработчики могут оптимизировать разработку приложений и улучшить взаимодействие с пользователем. В главе рассказывается о настройке проекта Firebase, подключении к Cloud Firestore, запросе данных и внедрении обновлений в реальном времени. На практических примерах, таких как создание приложения для обмена мгновенными сообщениями под названием RayChat, разработчики узнают, как эффективно и действенно использовать функции Firebase в своих приложениях Flutter.",
                // French
                "Français": "Firebase Cloud Firestore simplifie la gestion des bases de données pour les applications Flutter en fournissant une solution de stockage cloud évolutive. En intégrant des fonctionnalités Firebase telles que les objets d'authentification et d'accès aux données (DAO), les développeurs peuvent rationaliser le développement d'applications et améliorer l'expérience utilisateur. Le chapitre couvre la configuration d'un projet Firebase, la connexion à Cloud Firestore, l'interrogation des données et la mise en œuvre de mises à jour en temps réel. Grâce à des exemples pratiques tels que la création d'une application de messagerie instantanée appelée RayChat, les développeurs apprennent à exploiter les fonctionnalités de Firebase de manière efficace et efficiente dans leurs applications Flutter.",
                // Japanese
                "日本語": "Firebase Cloud Firestore は、スケーラブルなクラウド ストレージ ソリューションを提供することで、Flutter アプリのデータベース管理を簡素化します。認証やデータ アクセス オブジェクト (DAO) などの Firebase 機能を統合することで、開発者はアプリ開発を効率化し、ユーザー エクスペリエンスを向上できます。この章では、Firebase プロジェクトの設定、Cloud Firestore への接続、データのクエリ、リアルタイム更新の実装について説明します。RayChat というインスタント メッセージング アプリの作成などの実用的な例を通じて、開発者は Flutter アプリケーションで Firebase 機能を効率的かつ効果的に活用する方法を学びます。",
                // Korean
                "한국인": "Firebase Cloud Firestore는 확장 가능한 클라우드 스토리지 솔루션을 제공하여 Flutter 앱의 데이터베이스 관리를 단순화합니다. 개발자는 인증 및 데이터 액세스 객체(DAO)와 같은 Firebase 기능을 통합하여 앱 개발을 간소화하고 사용자 경험을 향상할 수 있습니다. 이 장에서는 Firebase 프로젝트 설정, Cloud Firestore 연결, 데이터 쿼리, 실시간 업데이트 구현을 다룹니다. RayChat이라는 인스턴트 메시징 앱 만들기와 같은 실제 사례를 통해 개발자는 Flutter 애플리케이션에서 Firebase 기능을 효율적이고 효과적으로 활용하는 방법을 배웁니다.",
                // Spanish
                "Español": "Firebase Cloud Firestore simplifica la administración de bases de datos para aplicaciones Flutter al proporcionar una solución de almacenamiento en la nube escalable. Al integrar funcionalidades de Firebase como autenticación y objetos de acceso a datos (DAO), los desarrolladores pueden optimizar el desarrollo de aplicaciones y mejorar la experiencia del usuario. El capítulo cubre la configuración de un proyecto de Firebase, la conexión a Cloud Firestore, la consulta de datos y la implementación de actualizaciones en tiempo real. A través de ejemplos prácticos, como la creación de una aplicación de mensajería instantánea llamada RayChat, los desarrolladores aprenden cómo aprovechar las funciones de Firebase de manera eficiente y efectiva en sus aplicaciones Flutter.",
                // Hindi
                "हिंदी": "फायरबेस क्लाउड फायरस्टोर एक स्केलेबल क्लाउड स्टोरेज समाधान प्रदान करके फ़्लटर ऐप्स के लिए डेटाबेस प्रबंधन को सरल बनाता है। प्रमाणीकरण और डेटा एक्सेस ऑब्जेक्ट्स (DAO) जैसी फायरबेस कार्यक्षमताओं को एकीकृत करके, डेवलपर्स ऐप विकास को सुव्यवस्थित कर सकते हैं और उपयोगकर्ता अनुभव को बढ़ा सकते हैं। अध्याय में फायरबेस प्रोजेक्ट सेट करना, क्लाउड फायरस्टोर से कनेक्ट करना, डेटा क्वेरी करना और रीयल-टाइम अपडेट लागू करना शामिल है। RayChat नामक एक इंस्टेंट मैसेजिंग ऐप बनाने जैसे व्यावहारिक उदाहरणों के माध्यम से, डेवलपर्स सीखते हैं कि अपने फ़्लटर एप्लिकेशन में फायरबेस सुविधाओं का कुशलतापूर्वक और प्रभावी ढंग से लाभ कैसे उठाया जाए।",
                // Portuguese
                "Português": "Firebase Cloud Firestore simplifica a gestão de bases de dados para aplicações Flutter, fornecendo uma solução de armazenamento em nuvem escalável. Ao integrar funcionalidades do Firebase, como a autenticação e os objetos de acesso a dados (DAO), os programadores podem agilizar o desenvolvimento de aplicações e melhorar a experiência do utilizador. O capítulo aborda a configuração de um projeto Firebase, a ligação ao Cloud Firestore, a consulta de dados e a implementação de atualizações em tempo real. Através de exemplos práticos, como a criação de uma aplicação de mensagens instantâneas chamada RayChat, os programadores aprendem como aproveitar as capacidades do Firebase de forma eficiente e eficaz nas suas aplicações Flutter.",
                // Bengali
                "বাংলা": "ফায়ারবেস ক্লাউড ফায়ারস্টোর একটি মাপযোগ্য ক্লাউড স্টোরেজ সমাধান প্রদান করে ফ্লাটার অ্যাপের জন্য ডাটাবেস ব্যবস্থাপনাকে সহজ করে। প্রমাণীকরণ এবং ডেটা অ্যাক্সেস অবজেক্ট (DAO) এর মতো ফায়ারবেস কার্যকারিতাগুলিকে একীভূত করে, বিকাশকারীরা অ্যাপ বিকাশকে স্ট্রিমলাইন করতে এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে পারে। অধ্যায়ে একটি ফায়ারবেস প্রজেক্ট সেট আপ করা, ক্লাউড ফায়ারস্টোরের সাথে সংযোগ করা, ডেটা অনুসন্ধান করা এবং রিয়েল-টাইম আপডেটগুলি বাস্তবায়ন করা রয়েছে। RayChat নামক একটি তাত্ক্ষণিক বার্তাপ্রেরণ অ্যাপ তৈরি করার মতো বাস্তব উদাহরণের মাধ্যমে, বিকাশকারীরা তাদের ফ্লাটার অ্যাপ্লিকেশনগুলিতে কীভাবে দক্ষতার সাথে এবং কার্যকরভাবে ফায়ারবেস বৈশিষ্ট্যগুলি ব্যবহার করতে হয় তা শিখে।",
                // Arabic
                "عَرَبِيّ": "يعمل Firebase Cloud Firestore على تبسيط إدارة قاعدة البيانات لتطبيقات Flutter من خلال توفير حل تخزين سحابي قابل للتطوير. من خلال دمج وظائف Firebase مثل المصادقة وكائنات الوصول إلى البيانات (DAO)، يمكن للمطورين تبسيط عملية تطوير التطبيقات وتحسين تجربة المستخدم. يغطي الفصل إعداد مشروع Firebase، والاتصال بـ Cloud Firestore، والاستعلام عن البيانات، وتنفيذ التحديثات في الوقت الفعلي. من خلال الأمثلة العملية مثل إنشاء تطبيق مراسلة فورية يسمى RayChat، يتعلم المطورون كيفية الاستفادة من ميزات Firebase بكفاءة وفعالية في تطبيقات Flutter الخاصة بهم.",
                // Persian
                "فارسی": "Firebase Cloud Firestore با ارائه یک راه حل ذخیره سازی ابری مقیاس پذیر، مدیریت پایگاه داده را برای برنامه های Flutter ساده می کند. با یکپارچه‌سازی قابلیت‌های Firebase مانند احراز هویت و اشیاء دسترسی به داده (DAO)، توسعه‌دهندگان می‌توانند توسعه برنامه را ساده کرده و تجربه کاربر را بهبود بخشند. این فصل راه‌اندازی یک پروژه Firebase، اتصال به Cloud Firestore، جستجوی داده‌ها و اجرای به‌روزرسانی‌های بلادرنگ را پوشش می‌دهد. از طریق مثال‌های عملی مانند ایجاد یک برنامه پیام‌رسانی فوری به نام RayChat، توسعه‌دهندگان یاد می‌گیرند که چگونه از ویژگی‌های Firebase به طور مؤثر و مؤثر در برنامه‌های Flutter خود استفاده کنند.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "Flutter Apprentice is a comprehensive guide for anyone looking to learn and master Flutter, a popular open-source framework for building mobile applications. The book covers everything from the basics of setting up a Flutter project to more advanced topics such as state management and working with external APIs. Readers will gain a solid understanding of Flutter architecture and best practices, making them well-equipped to develop high-quality, cross-platform mobile apps.",
            // German
            "Deutsch": "Flutter Apprentice ist ein umfassender Leitfaden für alle, die Flutter, ein beliebtes Open-Source-Framework zum Erstellen mobiler Anwendungen, erlernen und beherrschen möchten. Das Buch behandelt alles von den Grundlagen der Einrichtung eines Flutter-Projekts bis hin zu fortgeschritteneren Themen wie Statusverwaltung und Arbeiten mit externen APIs. Die Leser erhalten ein solides Verständnis der Flutter-Architektur und der Best Practices und sind damit bestens gerüstet, um hochwertige, plattformübergreifende mobile Apps zu entwickeln.",
            // Chinese
            "中国人": "Flutter Apprentice 是一本全面的指南，适合任何想要学习和掌握 Flutter 的人，Flutter 是一个用于构建移动应用程序的流行开源框架。本书涵盖了从设置 Flutter 项目的基础知识到更高级的主题（例如状态管理和使用外部 API）的所有内容。读者将对 Flutter 架构和最佳实践有深入的了解，从而能够开发高质量的跨平台移动应用程序。",
            // Russian
            "Русский": "Flutter Apprentice — это полное руководство для тех, кто хочет изучить и освоить Flutter, популярный фреймворк с открытым исходным кодом для создания мобильных приложений. Книга охватывает все: от основ настройки проекта Flutter до более сложных тем, таких как управление состоянием и работа с внешними API. Читатели получат четкое представление об архитектуре Flutter и передовых методах, что позволит им разрабатывать высококачественные кроссплатформенные мобильные приложения.",
            // French
            "Français": "Flutter Apprentice est un guide complet pour tous ceux qui cherchent à apprendre et à maîtriser Flutter, un framework open source populaire pour la création d'applications mobiles. Le livre couvre tout, des bases de la configuration d'un projet Flutter à des sujets plus avancés tels que la gestion d'état et l'utilisation d'API externes. Les lecteurs acquerront une solide compréhension de l'architecture Flutter et des meilleures pratiques, ce qui les rendra bien équipés pour développer des applications mobiles multiplateformes de haute qualité.",
            // Japanese
            "日本語": "Flutter Apprentice は、モバイル アプリケーションを構築するための人気のオープン ソース フレームワークである Flutter を学習して習得したい方のための総合ガイドです。この本では、Flutter プロジェクトの設定の基本から、状態管理や外部 API の操作などのより高度なトピックまで、あらゆる内容を取り上げています。読者は Flutter のアーキテクチャとベスト プラクティスをしっかりと理解し、高品質のクロスプラットフォーム モバイル アプリを開発する準備を整えることができます。",
            // Korean
            "한국인": "Flutter Apprentice는 모바일 애플리케이션을 구축하기 위한 인기 있는 오픈소스 프레임워크인 Flutter를 배우고 마스터하려는 모든 사람을 위한 포괄적인 가이드입니다. 이 책은 Flutter 프로젝트 설정의 기본 사항부터 상태 관리 및 외부 API 작업과 같은 고급 주제에 이르기까지 모든 것을 다룹니다. 독자는 Flutter 아키텍처와 모범 사례에 대한 확실한 이해를 얻어 고품질의 크로스 플랫폼 모바일 앱을 개발할 수 있는 역량을 갖추게 됩니다.",
            // Spanish
            "Español": "Flutter Apprentice es una guía completa para cualquiera que quiera aprender y dominar Flutter, un popular marco de código abierto para crear aplicaciones móviles. El libro cubre todo, desde los conceptos básicos de la configuración de un proyecto Flutter hasta temas más avanzados, como la gestión de estados y el trabajo con API externas. Los lectores obtendrán una sólida comprensión de la arquitectura y las mejores prácticas de Flutter, lo que los preparará para desarrollar aplicaciones móviles multiplataforma de alta calidad.",
            // Hindi
            "हिंदी": "फ़्लटर अप्रेंटिस उन सभी लोगों के लिए एक व्यापक मार्गदर्शिका है जो फ़्लटर सीखना और उसमें महारत हासिल करना चाहते हैं, जो मोबाइल एप्लिकेशन बनाने के लिए एक लोकप्रिय ओपन-सोर्स फ्रेमवर्क है। पुस्तक फ़्लटर प्रोजेक्ट सेट करने की मूल बातों से लेकर स्टेट मैनेजमेंट और बाहरी API के साथ काम करने जैसे अधिक उन्नत विषयों तक सब कुछ कवर करती है। पाठकों को फ़्लटर आर्किटेक्चर और सर्वोत्तम प्रथाओं की एक ठोस समझ प्राप्त होगी, जिससे वे उच्च-गुणवत्ता वाले, क्रॉस-प्लेटफ़ॉर्म मोबाइल ऐप विकसित करने के लिए अच्छी तरह से सुसज्जित होंगे।",
            // Portuguese
            "Português": "Flutter Apprentice é um guia completo para quem quer aprender e dominar o Flutter, uma popular estrutura de código aberto para a construção de aplicações móveis. O livro cobre tudo, desde os conceitos básicos da configuração de um projeto Flutter até tópicos mais avançados, como a gestão de estado e o trabalho com APIs externas. Os leitores obterão uma compreensão sólida da arquitetura e das melhores práticas do Flutter, tornando-os bem equipados para desenvolver aplicações móveis multiplataforma de alta qualidade.",
            // Bengali
            "বাংলা": "ফ্লাটার অ্যাপ্রেন্টিস হল একটি ব্যাপক নির্দেশিকা যার জন্য ফ্লটার শিখতে এবং আয়ত্ত করতে চাওয়া, মোবাইল অ্যাপ্লিকেশন তৈরির জন্য একটি জনপ্রিয় ওপেন-সোর্স ফ্রেমওয়ার্ক৷ বইটিতে একটি ফ্লাটার প্রজেক্ট সেট আপ করার মৌলিক বিষয় থেকে শুরু করে আরও উন্নত বিষয় যেমন স্টেট ম্যানেজমেন্ট এবং এক্সটার্নাল এপিআই-এর সাথে কাজ করা সবকিছুই রয়েছে। পাঠকরা ফ্লাটার আর্কিটেকচার এবং সর্বোত্তম অনুশীলন সম্পর্কে একটি দৃঢ় উপলব্ধি অর্জন করবে, যা তাদের উচ্চ-মানের, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপগুলি বিকাশের জন্য সুসজ্জিত করবে।",
            // Arabic
            "عَرَبِيّ": "يعد كتاب Flutter Apprentice دليلاً شاملاً لأي شخص يتطلع إلى تعلم وإتقان Flutter، وهو إطار عمل مفتوح المصدر شائع لبناء تطبيقات الأجهزة المحمولة. يغطي الكتاب كل شيء من أساسيات إعداد مشروع Flutter إلى مواضيع أكثر تقدمًا مثل إدارة الحالة والعمل مع واجهات برمجة التطبيقات الخارجية. سيكتسب القراء فهمًا قويًا لهندسة Flutter وأفضل الممارسات، مما يجعلهم مجهزين جيدًا لتطوير تطبيقات الأجهزة المحمولة عالية الجودة ومتعددة الأنظمة الأساسية.",
            // Persian
            "فارسی": "Flutter Apprentice یک راهنمای جامع برای هر کسی است که به دنبال یادگیری و تسلط بر Flutter است، یک چارچوب منبع باز محبوب برای ساخت برنامه های تلفن همراه. این کتاب همه چیز را از اصول اولیه راه اندازی یک پروژه فلاتر گرفته تا موضوعات پیشرفته تر مانند مدیریت وضعیت و کار با API های خارجی را پوشش می دهد. خوانندگان درک کاملی از معماری Flutter و بهترین شیوه‌ها به دست خواهند آورد و آنها را برای توسعه برنامه‌های موبایلی با کیفیت بالا و چند پلتفرمی مجهز می‌کند.",
        },
        // Paragraph 2
        {
            // English
            "English": "One of the key advantages of Flutter Apprentice is its hands-on approach to learning. The book includes numerous coding exercises and projects that allow readers to practice their skills and build real-world applications. By working through these exercises, readers will gain practical experience with Flutter development and be able to apply their knowledge to their own projects.",
            // German
            "Deutsch": "Einer der Hauptvorteile von Flutter Apprentice ist sein praktischer Lernansatz. Das Buch enthält zahlreiche Programmierübungen und -projekte, mit denen die Leser ihre Fähigkeiten üben und reale Anwendungen erstellen können. Durch das Durcharbeiten dieser Übungen sammeln die Leser praktische Erfahrungen mit der Flutter-Entwicklung und können ihr Wissen auf ihre eigenen Projekte anwenden.",
            // Chinese
            "中国人": "Flutter Apprentice 的主要优势之一是其实践学习方法。本书包含大量编码练习和项目，可让读者练习技能并构建真实世界的应用程序。通过完成这些练习，读者将获得 Flutter 开发的实践经验，并能够将他们的知识应用到自己的项目中。",
            // Russian
            "Русский": "Одним из ключевых преимуществ Flutter Apprentice является практический подход к обучению. Книга включает в себя множество упражнений и проектов по кодированию, которые позволяют читателям практиковать свои навыки и создавать реальные приложения. Выполняя эти упражнения, читатели получат практический опыт разработки Flutter и смогут применить свои знания в собственных проектах.",
            // French
            "Français": "L'un des principaux avantages de Flutter Apprentice est son approche pratique de l'apprentissage. Le livre comprend de nombreux exercices de codage et projets qui permettent aux lecteurs de mettre en pratique leurs compétences et de créer des applications concrètes. En effectuant ces exercices, les lecteurs acquerront une expérience pratique du développement Flutter et pourront appliquer leurs connaissances à leurs propres projets.",
            // Japanese
            "日本語": "Flutter Apprentice の主な利点の 1 つは、実践的な学習アプローチです。この本には、読者がスキルを練習して実際のアプリケーションを構築できる多数のコーディング演習とプロジェクトが含まれています。これらの演習に取り組むことで、読者は Flutter 開発の実践的な経験を積み、自分のプロジェクトに知識を適用できるようになります。",
            // Korean
            "한국인": "Flutter Apprentice의 주요 장점 중 하나는 학습에 대한 실습적 접근 방식입니다. 이 책에는 독자가 기술을 연습하고 실제 애플리케이션을 구축할 수 있는 수많은 코딩 연습과 프로젝트가 포함되어 있습니다. 이러한 연습을 통해 독자는 Flutter 개발에 대한 실질적인 경험을 얻고 자신의 프로젝트에 지식을 적용할 수 있습니다.",
            // Spanish
            "Español": "Una de las principales ventajas de Flutter Apprentice es su enfoque práctico del aprendizaje. El libro incluye numerosos ejercicios y proyectos de codificación que permiten a los lectores practicar sus habilidades y crear aplicaciones del mundo real. Al trabajar con estos ejercicios, los lectores obtendrán experiencia práctica con el desarrollo de Flutter y podrán aplicar sus conocimientos a sus propios proyectos.",
            // Hindi
            "हिंदी": "फ़्लटर अप्रेंटिस के प्रमुख लाभों में से एक सीखने के लिए इसका व्यावहारिक दृष्टिकोण है। पुस्तक में कई कोडिंग अभ्यास और परियोजनाएँ शामिल हैं जो पाठकों को अपने कौशल का अभ्यास करने और वास्तविक दुनिया के एप्लिकेशन बनाने की अनुमति देती हैं। इन अभ्यासों के माध्यम से काम करके, पाठकों को फ़्लटर विकास के साथ व्यावहारिक अनुभव प्राप्त होगा और वे अपने ज्ञान को अपनी परियोजनाओं में लागू करने में सक्षम होंगे।",
            // Portuguese
            "Português": "Uma das principais vantagens do Flutter Apprentice é a sua abordagem prática à aprendizagem. O livro inclui vários exercícios e projetos de codificação que permitem aos leitores praticar as suas competências e criar aplicações do mundo real. Ao realizar estes exercícios, os leitores ganharão experiência prática com o desenvolvimento do Flutter e serão capazes de aplicar os seus conhecimentos nos seus próprios projetos.",
            // Bengali
            "বাংলা": "ফ্লটার অ্যাপ্রেন্টিসের অন্যতম প্রধান সুবিধা হল শেখার ক্ষেত্রে এর হাতে-কলমে পদ্ধতি। বইটিতে অসংখ্য কোডিং অনুশীলন এবং প্রকল্প রয়েছে যা পাঠকদের তাদের দক্ষতা অনুশীলন করতে এবং বাস্তব-বিশ্বের অ্যাপ্লিকেশন তৈরি করতে দেয়। এই অনুশীলনের মাধ্যমে কাজ করার মাধ্যমে, পাঠকরা ফ্লটার বিকাশের সাথে বাস্তব অভিজ্ঞতা অর্জন করবে এবং তাদের নিজস্ব প্রকল্পে তাদের জ্ঞান প্রয়োগ করতে সক্ষম হবে।",
            // Arabic
            "عَرَبِيّ": "تتمثل إحدى المزايا الرئيسية لكتاب Flutter Apprentice في نهجه العملي للتعلم. يتضمن الكتاب العديد من تمارين الترميز والمشاريع التي تسمح للقراء بممارسة مهاراتهم وبناء تطبيقات في العالم الحقيقي. من خلال العمل من خلال هذه التمارين، سيكتسب القراء خبرة عملية في تطوير Flutter وسيكونون قادرين على تطبيق معرفتهم على مشاريعهم الخاصة.",
            // Persian
            "فارسی": "یکی از مزایای کلیدی Flutter Apprentice رویکرد عملی آن به یادگیری است. این کتاب شامل تمرین‌ها و پروژه‌های کدنویسی متعددی است که به خوانندگان اجازه می‌دهد مهارت‌های خود را تمرین کنند و برنامه‌های کاربردی دنیای واقعی بسازند. با کار بر روی این تمرین ها، خوانندگان تجربه عملی با توسعه Flutter به دست می آورند و می توانند دانش خود را در پروژه های خود به کار ببرند.",
        },
        // Paragraph 3
        {
            // English
            "English": "In addition to its practical approach, Flutter Apprentice offers a wealth of tips, tricks, and best practices that help readers avoid common pitfalls and improve their code quality. The book also covers important topics such as testing, debugging, and performance optimization, ensuring that readers have a well-rounded understanding of Flutter development. Whether you're a complete beginner or an experienced developer looking to expand your skills, Flutter Apprentice is a valuable resource for mastering Flutter and building powerful mobile applications.",
            // German
            "Deutsch": "Neben seinem praktischen Ansatz bietet Flutter Apprentice eine Fülle von Tipps, Tricks und Best Practices, die den Lesern helfen, häufige Fehler zu vermeiden und ihre Codequalität zu verbessern. Das Buch behandelt auch wichtige Themen wie Testen, Debuggen und Leistungsoptimierung und stellt sicher, dass die Leser ein umfassendes Verständnis der Flutter-Entwicklung haben. Egal, ob Sie ein absoluter Anfänger oder ein erfahrener Entwickler sind, der seine Fähigkeiten erweitern möchte: Flutter Apprentice ist eine wertvolle Ressource zum Erlernen von Flutter und zum Erstellen leistungsstarker mobiler Anwendungen.",
            // Chinese
            "中国人": "除了实用的方法外，Flutter Apprentice 还提供了大量的技巧、窍门和最佳实践，可帮助读者避免常见的陷阱并提高代码质量。本书还涵盖了测试、调试和性能优化等重要主题，确保读者对 Flutter 开发有全面的了解。无论您是完全的初学者，还是希望扩展技能的经验丰富的开发人员，Flutter Apprentice 都是掌握 Flutter 和构建强大的移动应用程序的宝贵资源。",
            // Russian
            "Русский": "Помимо практического подхода, Flutter Apprentice предлагает множество советов, приемов и передовых методов, которые помогут читателям избегать распространенных ошибок и улучшать качество кода. В книге также рассматриваются такие важные темы, как тестирование, отладка и оптимизация производительности, что гарантирует читателям всестороннее понимание разработки Flutter. Независимо от того, являетесь ли вы полным новичком или опытным разработчиком, желающим расширить свои навыки, Flutter Apprentice — это ценный ресурс для освоения Flutter и создания мощных мобильных приложений.",
            // French
            "Français": "En plus de son approche pratique, Flutter Apprentice offre une multitude de conseils, d'astuces et de bonnes pratiques qui aident les lecteurs à éviter les pièges courants et à améliorer la qualité de leur code. Le livre couvre également des sujets importants tels que les tests, le débogage et l'optimisation des performances, garantissant aux lecteurs une compréhension complète du développement Flutter. Que vous soyez un débutant complet ou un développeur expérimenté cherchant à élargir vos compétences, Flutter Apprentice est une ressource précieuse pour maîtriser Flutter et créer des applications mobiles puissantes.",
            // Japanese
            "日本語": "Flutter Apprentice は、実践的なアプローチに加えて、よくある落とし穴を回避してコードの品質を向上させるのに役立つ豊富なヒント、コツ、ベスト プラクティスを提供します。また、テスト、デバッグ、パフォーマンスの最適化などの重要なトピックも取り上げており、読者が Flutter 開発について総合的に理解できるようにします。まったくの初心者でも、スキルを伸ばしたい経験豊富な開発者でも、Flutter Apprentice は Flutter を習得し、強力なモバイル アプリケーションを構築するための貴重なリソースです。",
            // Korean
            "한국인": "Flutter Apprentice는 실용적인 접근 방식 외에도 독자가 일반적인 함정을 피하고 코드 품질을 개선하는 데 도움이 되는 다양한 팁, 트릭 및 모범 사례를 제공합니다. 이 책은 또한 테스트, 디버깅 및 성능 최적화와 같은 중요한 주제를 다루어 독자가 Flutter 개발에 대한 포괄적인 이해를 갖도록 합니다. 완전한 초보자이든 기술을 확장하고자 하는 숙련된 개발자이든 Flutter Apprentice는 Flutter를 완벽하게 익히고 강력한 모바일 애플리케이션을 구축하는 데 귀중한 리소스입니다.",
            // Spanish
            "Español": "Además de su enfoque práctico, Flutter Apprentice ofrece una gran cantidad de consejos, trucos y mejores prácticas que ayudan a los lectores a evitar errores comunes y mejorar la calidad de su código. El libro también cubre temas importantes como las pruebas, la depuración y la optimización del rendimiento, lo que garantiza que los lectores tengan una comprensión completa del desarrollo de Flutter. Ya sea que sea un principiante absoluto o un desarrollador experimentado que busca expandir sus habilidades, Flutter Apprentice es un recurso valioso para dominar Flutter y crear aplicaciones móviles potentes.",
            // Hindi
            "हिंदी": "अपने व्यावहारिक दृष्टिकोण के अलावा, फ़्लटर अप्रेंटिस कई टिप्स, ट्रिक्स और सर्वोत्तम प्रथाओं की पेशकश करता है जो पाठकों को आम नुकसानों से बचने और उनके कोड की गुणवत्ता में सुधार करने में मदद करते हैं। पुस्तक में परीक्षण, डिबगिंग और प्रदर्शन अनुकूलन जैसे महत्वपूर्ण विषयों को भी शामिल किया गया है, यह सुनिश्चित करते हुए कि पाठकों को फ़्लटर विकास की अच्छी समझ है। चाहे आप एक पूर्णतया नौसिखिया हों या एक अनुभवी डेवलपर हों जो अपने कौशल का विस्तार करना चाहते हों, फ़्लटर अप्रेंटिस फ़्लटर में निपुणता प्राप्त करने और शक्तिशाली मोबाइल एप्लिकेशन बनाने के लिए एक मूल्यवान संसाधन है।",
            // Portuguese
            "Português": "Para além da sua abordagem prática, Flutter Apprentice oferece diversas dicas, truques e boas práticas que ajudam os leitores a evitar armadilhas comuns e a melhorar a qualidade do código. O livro também aborda tópicos importantes como testes, depuração e otimização de desempenho, garantindo que os leitores têm uma compreensão completa do desenvolvimento do Flutter. Quer seja um principiante ou um programador experiente à procura de expandir as suas competências, o Flutter Apprentice é um recurso valioso para dominar o Flutter e criar aplicações móveis poderosas.",
            // Bengali
            "বাংলা": "এর ব্যবহারিক পদ্ধতির পাশাপাশি, ফ্লাটার অ্যাপ্রেন্টিস প্রচুর টিপস, কৌশল এবং সর্বোত্তম অনুশীলনের অফার করে যা পাঠকদের সাধারণ সমস্যাগুলি এড়াতে এবং তাদের কোডের মান উন্নত করতে সহায়তা করে। বইটিতে পরীক্ষা, ডিবাগিং এবং কর্মক্ষমতা অপ্টিমাইজেশানের মতো গুরুত্বপূর্ণ বিষয়গুলিও রয়েছে, যাতে পাঠকদের ফ্লটার ডেভেলপমেন্ট সম্পর্কে একটি ভালভাবে বোঝার বিষয়টি নিশ্চিত করা হয়। আপনি একজন সম্পূর্ণ শিক্ষানবিস বা একজন অভিজ্ঞ ডেভেলপার যা আপনার দক্ষতা বাড়াতে চাইছেন না কেন, Flutter Apprentice হল Flutter আয়ত্ত করার এবং শক্তিশালী মোবাইল অ্যাপ্লিকেশন তৈরি করার জন্য একটি মূল্যবান সম্পদ।",
            // Arabic
            "عَرَبِيّ": "بالإضافة إلى نهجه العملي، يقدم كتاب Flutter Apprentice مجموعة كبيرة من النصائح والحيل وأفضل الممارسات التي تساعد القراء على تجنب الأخطاء الشائعة وتحسين جودة التعليمات البرمجية الخاصة بهم. يغطي الكتاب أيضًا مواضيع مهمة مثل الاختبار وتصحيح الأخطاء وتحسين الأداء، مما يضمن أن يكون لدى القراء فهم شامل لتطوير Flutter. سواء كنت مبتدئًا تمامًا أو مطورًا متمرسًا يتطلع إلى توسيع مهاراتك، فإن Flutter Apprentice يعد موردًا قيمًا لإتقان Flutter وإنشاء تطبيقات جوال قوية.",
            // Persian
            "فارسی": "علاوه بر رویکرد عملی خود، Flutter Apprentice تعداد زیادی از نکات، ترفندها و بهترین روش‌ها را ارائه می‌کند که به خوانندگان کمک می‌کند از دام‌های رایج اجتناب کنند و کیفیت کد خود را بهبود بخشند. این کتاب همچنین موضوعات مهمی مانند تست، اشکال‌زدایی و بهینه‌سازی عملکرد را پوشش می‌دهد و اطمینان می‌دهد که خوانندگان درک کاملی از توسعه Flutter دارند. چه یک مبتدی کامل باشید و چه یک توسعه دهنده با تجربه که به دنبال گسترش مهارت های خود هستید، Flutter Apprentice یک منبع ارزشمند برای تسلط بر Flutter و ساخت اپلیکیشن های قدرتمند موبایل است.",
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
        document.title = "MHA - " + flutter_apprentice["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = flutter_apprentice["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = flutter_apprentice["TotalDescriptionAboutTheBook"][index][newLanguage];
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