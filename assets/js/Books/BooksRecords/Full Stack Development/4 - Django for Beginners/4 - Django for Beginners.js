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
var django_for_beginners = {
    "BookName": "Django for Beginners",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Initial Set Up",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on setting up a development environment for Django projects on Windows and macOS, emphasizing the use of the Command Line Interface (CLI) for installation and configuration tasks. It guides users through installing Python, creating virtual environments for project isolation, and installing Django, while also introducing Git for version control and configuring user settings. By the end of the chapter, users will have created their first Django project and be equipped with the necessary tools and knowledge to efficiently develop and manage future Django applications.",
                // German
                "Deutsch": "In diesem Kapitel geht es darum, eine Entwicklungsumgebung für Django-Projekte unter Windows und macOS einzurichten. Dabei wird die Verwendung der Befehlszeilenschnittstelle (CLI) für Installations- und Konfigurationsaufgaben betont. Es führt Benutzer durch die Installation von Python, das Erstellen virtueller Umgebungen zur Projektisolierung und die Installation von Django und stellt gleichzeitig Git zur Versionskontrolle und zum Konfigurieren von Benutzereinstellungen vor. Am Ende des Kapitels haben Benutzer ihr erstes Django-Projekt erstellt und verfügen über die erforderlichen Tools und Kenntnisse, um zukünftige Django-Anwendungen effizient zu entwickeln und zu verwalten.",
                // Chinese
                "中国人": "本章重点介绍如何在 Windows 和 macOS 上为 Django 项目设置开发环境，强调使用命令行界面 (CLI) 执行安装和配置任务。它指导用户安装 Python、创建用于项目隔离的虚拟环境以及安装 Django，同时还介绍 Git 用于版本控制和配置用户设置。到本章结束时，用户将创建他们的第一个 Django 项目，并掌握高效开发和管理未来 Django 应用程序所需的工具和知识。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется настройке среды разработки для проектов Django на Windows и macOS, подчеркивая использование интерфейса командной строки (CLI) для задач установки и настройки. Она проводит пользователей через установку Python, создание виртуальных сред для изоляции проектов и установку Django, а также знакомит с Git для управления версиями и настройки пользовательских параметров. К концу главы пользователи создадут свой первый проект Django и будут оснащены необходимыми инструментами и знаниями для эффективной разработки и управления будущими приложениями Django.",
                // French
                "Français": "Ce chapitre se concentre sur la configuration d'un environnement de développement pour les projets Django sur Windows et macOS, en mettant l'accent sur l'utilisation de l'interface de ligne de commande (CLI) pour les tâches d'installation et de configuration. Il guide les utilisateurs dans l'installation de Python, la création d'environnements virtuels pour l'isolation des projets et l'installation de Django, tout en présentant Git pour le contrôle des versions et la configuration des paramètres utilisateur. À la fin du chapitre, les utilisateurs auront créé leur premier projet Django et seront équipés des outils et des connaissances nécessaires pour développer et gérer efficacement les futures applications Django.",
                // Japanese
                "日本語": "この章では、Windows および macOS での Django プロジェクトの開発環境の設定に焦点を当て、インストールおよび構成タスクでのコマンド ライン インターフェイス (CLI) の使用に重点を置いています。Python のインストール、プロジェクト分離のための仮想環境の作成、Django のインストールについてユーザーをガイドするとともに、バージョン管理とユーザー設定の構成のための Git も紹介します。この章の終わりまでに、ユーザーは最初の Django プロジェクトを作成し、将来の Django アプリケーションを効率的に開発および管理するために必要なツールと知識を身に付けることができます。",
                // Korean
                "한국인": "이 장에서는 Windows 및 macOS에서 Django 프로젝트를 위한 개발 환경을 설정하는 데 중점을 두고, 설치 및 구성 작업에 명령줄 인터페이스(CLI)를 사용하는 것을 강조합니다. Python 설치, 프로젝트 격리를 위한 가상 환경 생성, Django 설치 과정을 안내하는 동시에 버전 제어를 위한 Git 소개 및 사용자 설정 구성도 안내합니다. 이 장을 마치면 사용자는 첫 번째 Django 프로젝트를 만들고 향후 Django 애플리케이션을 효율적으로 개발하고 관리하는 데 필요한 도구와 지식을 갖추게 됩니다.",
                // Spanish
                "Español": "Este capítulo se centra en la configuración de un entorno de desarrollo para proyectos de Django en Windows y macOS, haciendo hincapié en el uso de la interfaz de línea de comandos (CLI) para tareas de instalación y configuración. Guía a los usuarios a través de la instalación de Python, la creación de entornos virtuales para el aislamiento de proyectos y la instalación de Django, a la vez que presenta Git para el control de versiones y la configuración de los ajustes del usuario. Al final del capítulo, los usuarios habrán creado su primer proyecto de Django y estarán equipados con las herramientas y los conocimientos necesarios para desarrollar y gestionar de forma eficiente futuras aplicaciones de Django.",
                // Hindi
                "हिंदी": "यह अध्याय विंडोज और मैकओएस पर Django प्रोजेक्ट के लिए एक विकास वातावरण स्थापित करने पर केंद्रित है, जो इंस्टॉलेशन और कॉन्फ़िगरेशन कार्यों के लिए कमांड लाइन इंटरफ़ेस (CLI) के उपयोग पर जोर देता है। यह उपयोगकर्ताओं को पायथन स्थापित करने, प्रोजेक्ट आइसोलेशन के लिए वर्चुअल वातावरण बनाने और Django स्थापित करने के माध्यम से मार्गदर्शन करता है, जबकि संस्करण नियंत्रण और उपयोगकर्ता सेटिंग्स को कॉन्फ़िगर करने के लिए Git भी पेश करता है। अध्याय के अंत तक, उपयोगकर्ता अपना पहला Django प्रोजेक्ट बना लेंगे और भविष्य के Django अनुप्रयोगों को कुशलतापूर्वक विकसित और प्रबंधित करने के लिए आवश्यक उपकरणों और ज्ञान से लैस होंगे।",
                // Portuguese
                "Português": "Este capítulo centra-se na configuração de um ambiente de desenvolvimento para projetos Django em Windows e macOS, enfatizando a utilização da Interface de Linha de Comandos (CLI) para tarefas de instalação e configuração. Orienta os utilizadores na instalação do Python, na criação de ambientes virtuais para isolamento do projeto e na instalação do Django, ao mesmo tempo que apresenta o Git para controlo de versões e definição das definições do utilizador. No final do capítulo, os utilizadores terão criado o seu primeiro projeto Django e estarão equipados com as ferramentas e conhecimentos necessários para desenvolver e gerir eficientemente futuras aplicações Django.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি উইন্ডোজ এবং ম্যাকওএস-এ জ্যাঙ্গো প্রকল্পগুলির জন্য একটি উন্নয়ন পরিবেশ স্থাপনের উপর দৃষ্টি নিবদ্ধ করে, ইনস্টলেশন এবং কনফিগারেশন কাজের জন্য কমান্ড লাইন ইন্টারফেস (সিএলআই) ব্যবহারের উপর জোর দেয়। এটি ব্যবহারকারীদের পাইথন ইনস্টল করার মাধ্যমে, প্রকল্প বিচ্ছিন্নতার জন্য ভার্চুয়াল পরিবেশ তৈরি করে এবং জ্যাঙ্গো ইনস্টল করার মাধ্যমে গাইড করে, পাশাপাশি সংস্করণ নিয়ন্ত্রণের জন্য গিট প্রবর্তন করে এবং ব্যবহারকারী সেটিংস কনফিগার করে। অধ্যায়ের শেষ নাগাদ, ব্যবহারকারীরা তাদের প্রথম জ্যাঙ্গো প্রকল্প তৈরি করবে এবং ভবিষ্যতের জ্যাঙ্গো অ্যাপ্লিকেশনগুলিকে দক্ষতার সাথে বিকাশ ও পরিচালনা করতে প্রয়োজনীয় সরঞ্জাম এবং জ্ঞান দিয়ে সজ্জিত হবে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على إعداد بيئة تطوير لمشاريع Django على أنظمة Windows وmacOS، مع التركيز على استخدام واجهة سطر الأوامر (CLI) لمهام التثبيت والتكوين. كما يرشد المستخدمين خلال تثبيت Python وإنشاء بيئات افتراضية لعزل المشروع وتثبيت Django، مع تقديم Git للتحكم في الإصدارات وتكوين إعدادات المستخدم. وبحلول نهاية الفصل، سيكون المستخدمون قد أنشأوا مشروع Django الأول الخاص بهم وسيُزوَّدون بالأدوات والمعرفة اللازمة لتطوير وإدارة تطبيقات Django المستقبلية بكفاءة.",
                // Persian
                "فارسی": "این فصل بر راه‌اندازی یک محیط توسعه برای پروژه‌های جنگو در ویندوز و macOS تمرکز دارد و بر استفاده از رابط خط فرمان (CLI) برای کارهای نصب و پیکربندی تأکید دارد. این برنامه کاربران را از طریق نصب پایتون، ایجاد محیط های مجازی برای جداسازی پروژه و نصب جنگو راهنمایی می کند، در حالی که Git را برای کنترل نسخه و پیکربندی تنظیمات کاربر نیز معرفی می کند. در پایان فصل، کاربران اولین پروژه جنگو خود را ایجاد کرده و به ابزارها و دانش لازم برای توسعه و مدیریت کارآمد برنامه های جنگو مجهز خواهند شد.",
            },
        },
        // 2
        {
            "ChapterName": "Hello World App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the reader learns to create a simple 'Hello, World' Django application by setting up a virtual environment, installing Django, and establishing the project structure using . The chapter explains the HTTP request/response cycle and introduces Django's Model-View-Template (MVT) architecture, guiding the reader through creating a new app, configuring URLs, and implementing a basic view. Additionally, it covers using Git for version control, including initializing a repository, committing changes, and pushing code to GitHub, while emphasizing best practices like managing a file and creating a for dependencies.",
                // German
                "Deutsch": "In diesem Kapitel lernt der Leser, eine einfache „Hallo Welt“-Django-Anwendung zu erstellen, indem er eine virtuelle Umgebung einrichtet, Django installiert und die Projektstruktur mithilfe von erstellt. Das Kapitel erklärt den HTTP-Anforderungs-/Antwortzyklus und stellt die Model-View-Template-Architektur (MVT) von Django vor. Der Leser wird durch die Erstellung einer neuen App, die Konfiguration von URLs und die Implementierung einer einfachen Ansicht geführt. Darüber hinaus wird die Verwendung von Git zur Versionskontrolle behandelt, einschließlich der Initialisierung eines Repositorys, des Übernehmens von Änderungen und des Pushens von Code auf GitHub, wobei bewährte Methoden wie die Verwaltung einer Datei und das Erstellen eines Abhängigkeitsverzeichnisses hervorgehoben werden.",
                // Chinese
                "中国人": "在本章中，读者将学习如何通过设置虚拟环境、安装 Django 和使用 建立项目结构来创建一个简单的“Hello, World”Django 应用程序。本章解释了 HTTP 请求/响应周期并介绍了 Django 的模型-视图-模板 (MVT) 架构，指导读者创建新应用程序、配置 URL 和实现基本视图。此外，它还介绍了如何使用 Git 进行版本控制，包括初始化存储库、提交更改和将代码推送到 GitHub，同时强调了管理文件和创建依赖项等最佳实践。",
                // Russian
                "Русский": "В этой главе читатель узнает, как создать простое приложение Django «Hello, World», настроив виртуальную среду, установив Django и задав структуру проекта с помощью . В главе объясняется цикл HTTP-запроса/ответа и представлена ​​архитектура Django Model-View-Template (MVT), которая помогает читателю создать новое приложение, настроить URL-адреса и реализовать базовое представление. Кроме того, в ней рассматривается использование Git для управления версиями, включая инициализацию репозитория, фиксацию изменений и отправку кода на GitHub, при этом особое внимание уделяется таким передовым практикам, как управление файлом и создание для зависимостей.",
                // French
                "Français": "Dans ce chapitre, le lecteur apprend à créer une application Django « Hello, World » simple en configurant un environnement virtuel, en installant Django et en établissant la structure du projet à l'aide de . Le chapitre explique le cycle de requête/réponse HTTP et présente l'architecture Modèle-Vue-Modèle (MVT) de Django, guidant le lecteur dans la création d'une nouvelle application, la configuration des URL et l'implémentation d'une vue de base. De plus, il couvre l'utilisation de Git pour le contrôle de version, y compris l'initialisation d'un référentiel, la validation des modifications et l'envoi de code vers GitHub, tout en mettant l'accent sur les meilleures pratiques telles que la gestion d'un fichier et la création d'un pour les dépendances.",
                // Japanese
                "日本語": "この章では、仮想環境の設定、Django のインストール、を使用してプロジェクト構造を確立することで、シンプルな「Hello, World」Django アプリケーションを作成する方法を学びます。この章では、HTTP 要求/応答サイクルについて説明し、Django のモデル ビュー テンプレート (MVT) アーキテクチャを紹介し、新しいアプリの作成、URL の構成、基本的なビューの実装について説明します。さらに、リポジトリの初期化、変更のコミット、GitHub へのコードのプッシュなど、バージョン管理に Git を使用する方法についても取り上げ、ファイルの管理や依存関係用の の作成などのベスト プラクティスを強調します。",
                // Korean
                "한국인": "이 장에서는 독자가 가상 ​​환경을 설정하고, Django를 설치하고, .를 사용하여 프로젝트 구조를 설정하여 간단한 'Hello, World' Django 애플리케이션을 만드는 방법을 배웁니다. 이 장에서는 HTTP 요청/응답 주기를 설명하고 Django의 모델-뷰-템플릿(MVT) 아키텍처를 소개하며, 독자가 새 앱을 만들고, URL을 구성하고, 기본 뷰를 구현하도록 안내합니다. 또한 저장소 초기화, 변경 사항 커밋, GitHub에 코드 푸시를 포함하여 버전 제어를 위한 Git 사용 방법을 다루며, 파일 관리 및 종속성을 위한 .",
                // Spanish
                "Español": "En este capítulo, el lector aprende a crear una aplicación Django sencilla del tipo 'Hola, mundo' configurando un entorno virtual, instalando Django y estableciendo la estructura del proyecto mediante . El capítulo explica el ciclo de solicitud/respuesta HTTP y presenta la arquitectura Modelo-Vista-Plantilla (MVT) de Django, guiando al lector en la creación de una nueva aplicación, la configuración de URL y la implementación de una vista básica. Además, cubre el uso de Git para el control de versiones, incluida la inicialización de un repositorio, la confirmación de cambios y el envío de código a GitHub, al tiempo que enfatiza las mejores prácticas como la gestión de un archivo y la creación de un archivo para dependencias.",
                // Hindi
                "हिंदी": "इस अध्याय में, पाठक वर्चुअल वातावरण सेट करके, Django को इंस्टॉल करके और प्रोजेक्ट संरचना का उपयोग करके एक सरल 'हैलो, वर्ल्ड' Django एप्लिकेशन बनाना सीखता है। अध्याय HTTP अनुरोध/प्रतिक्रिया चक्र की व्याख्या करता है और Django के मॉडल-व्यू-टेम्पलेट (MVT) आर्किटेक्चर का परिचय देता है, पाठक को एक नया ऐप बनाने, URL कॉन्फ़िगर करने और एक बुनियादी दृश्य को लागू करने के माध्यम से मार्गदर्शन करता है। इसके अतिरिक्त, यह संस्करण नियंत्रण के लिए Git का उपयोग करना शामिल करता है, जिसमें एक रिपॉजिटरी को आरंभ करना, परिवर्तन करना और GitHub पर कोड को पुश करना शामिल है, जबकि फ़ाइल को प्रबंधित करने और निर्भरता के लिए एक फ़ाइल बनाने जैसी सर्वोत्तम प्रथाओं पर जोर दिया गया है।",
                // Portuguese
                "Português": "Neste capítulo, o leitor aprende a criar uma aplicação Django simples ‘Hello, World’ configurando um ambiente virtual, instalando o Django e estabelecendo a estrutura do projeto utilizando . O capítulo explica o ciclo de pedido/resposta HTTP e apresenta a arquitetura Model-View-Template (MVT) do Django, orientando o leitor na criação de uma nova aplicação, na configuração de URLs e na implementação de uma vista básica. Além disso, aborda a utilização do Git para o controlo de versões, incluindo a inicialização de um repositório, a confirmação de alterações e o envio de código para o GitHub, ao mesmo tempo que enfatiza as melhores práticas, como gerir um ficheiro e criar um para as dependências.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, পাঠক ভার্চুয়াল এনভায়রনমেন্ট সেট আপ করে, জ্যাঙ্গো ইন্সটল করে এবং ব্যবহার করে প্রজেক্ট স্ট্রাকচার স্থাপন করে একটি সাধারণ 'হ্যালো, ওয়ার্ল্ড' জ্যাঙ্গো অ্যাপ্লিকেশন তৈরি করতে শিখবে। অধ্যায়টি HTTP অনুরোধ/প্রতিক্রিয়া চক্রের ব্যাখ্যা করে এবং জ্যাঙ্গোর মডেল-ভিউ-টেমপ্লেট (MVT) আর্কিটেকচারের সাথে পরিচয় করিয়ে দেয়, পাঠককে একটি নতুন অ্যাপ তৈরি, URL কনফিগার করা এবং একটি মৌলিক ভিউ বাস্তবায়নের মাধ্যমে গাইড করে। উপরন্তু, এটি সংস্করণ নিয়ন্ত্রণের জন্য গিট ব্যবহার করে, যার মধ্যে একটি সংগ্রহস্থল শুরু করা, পরিবর্তন করা এবং GitHub-এ কোড পুশ করা সহ, একটি ফাইল পরিচালনা করা এবং নির্ভরতার জন্য একটি তৈরি করার মতো সর্বোত্তম অনুশীলনের উপর জোর দেওয়া।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتعلم القارئ كيفية إنشاء تطبيق Django بسيط 'Hello, World' من خلال إعداد بيئة افتراضية، وتثبيت Django، وإنشاء بنية المشروع باستخدام . يشرح الفصل دورة الطلب/الاستجابة HTTP ويقدم بنية نموذج-عرض-قالب Django (MVT)، ويرشد القارئ خلال إنشاء تطبيق جديد، وتكوين عناوين URL، وتنفيذ عرض أساسي. بالإضافة إلى ذلك، يغطي استخدام Git للتحكم في الإصدار، بما في ذلك تهيئة مستودع، وتأكيد التغييرات، ودفع التعليمات البرمجية إلى GitHub، مع التأكيد على أفضل الممارسات مثل إدارة ملف وإنشاء تبعيات.",
                // Persian
                "فارسی": "در این فصل، خواننده یاد می‌گیرد که با راه‌اندازی یک محیط مجازی، نصب جنگو، و ایجاد ساختار پروژه با استفاده از . این فصل چرخه درخواست/پاسخ HTTP را توضیح می‌دهد و معماری Model-View-Template (MVT) جنگو را معرفی می‌کند و خواننده را از طریق ایجاد یک برنامه جدید، پیکربندی URL‌ها و پیاده‌سازی یک نمای اولیه راهنمایی می‌کند. علاوه بر این، استفاده از Git برای کنترل نسخه، از جمله تنظیم اولیه مخزن، انجام تغییرات، و فشار دادن کد به GitHub را پوشش می دهد، در حالی که بر بهترین شیوه ها مانند مدیریت یک فایل و ایجاد وابستگی ها تأکید می کند.",
            },
        },
        // 3
        {
            "ChapterName": "Pages App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the focus is on building and deploying a Django Pages app featuring a homepage and an about page, utilizing templates to streamline HTML generation and enhance code organization. The chapter introduces class-based views for better extensibility, emphasizes the importance of automated testing for ensuring functionality, and guides readers through the deployment process on Heroku. By the end, readers learn to create a structured project with reusable components, implement URL routing, and manage code with Git, setting the stage for future database-backed projects.",
                // German
                "Deutsch": "In diesem Kapitel liegt der Schwerpunkt auf dem Erstellen und Bereitstellen einer Django Pages-App mit einer Homepage und einer Infoseite, wobei Vorlagen verwendet werden, um die HTML-Generierung zu optimieren und die Code-Organisation zu verbessern. Das Kapitel führt klassenbasierte Ansichten für eine bessere Erweiterbarkeit ein, betont die Bedeutung automatisierter Tests zur Gewährleistung der Funktionalität und führt die Leser durch den Bereitstellungsprozess auf Heroku. Am Ende lernen die Leser, ein strukturiertes Projekt mit wiederverwendbaren Komponenten zu erstellen, URL-Routing zu implementieren und Code mit Git zu verwalten, wodurch die Grundlage für zukünftige datenbankgestützte Projekte geschaffen wird.",
                // Chinese
                "中国人": "本章重点介绍如何构建和部署包含主页和关于页面的 Django Pages 应用，利用模板简化 HTML 生成并增强代码组织。本章介绍了基于类的视图以提高可扩展性，强调了自动化测试对于确保功能的重要性，并指导读者完成 Heroku 上的部署过程。最后，读者将学习如何创建具有可重用组件的结构化项目、实现 URL 路由以及使用 Git 管理代码，为未来基于数据库的项目奠定基础。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется созданию и развертыванию приложения Django Pages с домашней страницей и страницей «О нас», использованию шаблонов для упрощения генерации HTML и улучшения организации кода. Глава знакомит с представлениями на основе классов для лучшей расширяемости, подчеркивает важность автоматизированного тестирования для обеспечения функциональности и проводит читателей через процесс развертывания на Heroku. К концу читатели учатся создавать структурированный проект с повторно используемыми компонентами, реализовывать маршрутизацию URL и управлять кодом с помощью Git, подготавливая почву для будущих проектов, поддерживаемых базой данных.",
                // French
                "Français": "Dans ce chapitre, l'accent est mis sur la création et le déploiement d'une application Django Pages comprenant une page d'accueil et une page à propos, en utilisant des modèles pour rationaliser la génération HTML et améliorer l'organisation du code. Le chapitre présente les vues basées sur les classes pour une meilleure extensibilité, souligne l'importance des tests automatisés pour garantir la fonctionnalité et guide les lecteurs tout au long du processus de déploiement sur Heroku. À la fin, les lecteurs apprennent à créer un projet structuré avec des composants réutilisables, à implémenter le routage d'URL et à gérer le code avec Git, préparant ainsi le terrain pour les futurs projets basés sur une base de données.",
                // Japanese
                "日本語": "この章では、テンプレートを利用して HTML 生成を効率化し、コード編成を強化しながら、ホームページと About ページを備えた Django Pages アプリの構築とデプロイに焦点を当てます。この章では、拡張性を高めるためのクラスベースのビューを紹介し、機能性を保証するための自動テストの重要性を強調し、Heroku でのデプロイ プロセスをガイドします。最後に、読者は再利用可能なコンポーネントを使用して構造化されたプロジェクトを作成し、URL ルーティングを実装し、Git でコードを管理する方法を習得し、将来のデータベース ベースのプロジェクトの準備を整えます。",
                // Korean
                "한국인": "이 장에서는 홈페이지와 정보 페이지를 특징으로 하는 Django Pages 앱을 빌드하고 배포하는 데 중점을 두고, 템플릿을 활용하여 HTML 생성을 간소화하고 코드 구성을 향상시킵니다. 이 장에서는 더 나은 확장성을 위한 클래스 기반 뷰를 소개하고, 기능을 보장하기 위한 자동화된 테스트의 중요성을 강조하며, 독자들에게 Heroku에서의 배포 프로세스를 안내합니다. 마지막에 독자들은 재사용 가능한 구성 요소로 구조화된 프로젝트를 만들고, URL 라우팅을 구현하고, Git으로 코드를 관리하는 방법을 배우며, 미래의 데이터베이스 지원 프로젝트를 위한 무대를 마련합니다.",
                // Spanish
                "Español": "En este capítulo, el enfoque está puesto en la creación e implementación de una aplicación Django Pages que incluye una página de inicio y una página de información, utilizando plantillas para optimizar la generación de HTML y mejorar la organización del código. El capítulo presenta vistas basadas en clases para una mejor extensibilidad, enfatiza la importancia de las pruebas automatizadas para garantizar la funcionalidad y guía a los lectores a través del proceso de implementación en Heroku. Al final, los lectores aprenden a crear un proyecto estructurado con componentes reutilizables, implementar el enrutamiento de URL y administrar el código con Git, lo que prepara el terreno para futuros proyectos respaldados por bases de datos.",
                // Hindi
                "हिंदी": "इस अध्याय में, होमपेज और अबाउट पेज की विशेषता वाले Django Pages ऐप के निर्माण और परिनियोजन पर ध्यान केंद्रित किया गया है, HTML निर्माण को सुव्यवस्थित करने और कोड संगठन को बेहतर बनाने के लिए टेम्प्लेट का उपयोग किया गया है। अध्याय बेहतर विस्तारशीलता के लिए वर्ग-आधारित दृश्य प्रस्तुत करता है, कार्यक्षमता सुनिश्चित करने के लिए स्वचालित परीक्षण के महत्व पर जोर देता है, और Heroku पर परिनियोजन प्रक्रिया के माध्यम से पाठकों का मार्गदर्शन करता है। अंत में, पाठक पुन: प्रयोज्य घटकों के साथ एक संरचित परियोजना बनाना, URL रूटिंग को लागू करना और Git के साथ कोड प्रबंधित करना सीखते हैं, जो भविष्य के डेटाबेस-समर्थित प्रोजेक्ट के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Neste capítulo, o foco está na construção e implementação de uma aplicação Django Pages com uma página inicial e uma página sobre, utilizando modelos para agilizar a geração de HTML e melhorar a organização do código. O capítulo apresenta visualizações baseadas em classes para uma melhor extensibilidade, enfatiza a importância dos testes automatizados para garantir a funcionalidade e orienta os leitores através do processo de implementação no Heroku. No final, os leitores aprendem a criar um projeto estruturado com componentes reutilizáveis, a implementar o encaminhamento de URL e a gerir código com Git, preparando o terreno para futuros projetos baseados em base de dados.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, ফোকাস একটি হোমপেজ এবং একটি সম্পর্কে পৃষ্ঠা সমন্বিত একটি জ্যাঙ্গো পেজ অ্যাপ তৈরি এবং স্থাপন করা, এইচটিএমএল জেনারেশনকে স্ট্রীমলাইন করতে এবং কোড সংগঠন উন্নত করতে টেমপ্লেট ব্যবহার করা। অধ্যায়টি আরও ভালো সম্প্রসারণযোগ্যতার জন্য শ্রেণী-ভিত্তিক দৃষ্টিভঙ্গির পরিচয় দেয়, কার্যকারিতা নিশ্চিত করার জন্য স্বয়ংক্রিয় পরীক্ষার গুরুত্বের উপর জোর দেয় এবং Heroku-এ স্থাপনা প্রক্রিয়ার মাধ্যমে পাঠকদের গাইড করে। শেষ পর্যন্ত, পাঠকরা পুনঃব্যবহারযোগ্য উপাদানগুলির সাথে একটি কাঠামোগত প্রকল্প তৈরি করতে, ইউআরএল রাউটিং প্রয়োগ করতে এবং গিট দিয়ে কোড পরিচালনা করতে শিখে, ভবিষ্যতের ডাটাবেস-সমর্থিত প্রকল্পগুলির জন্য পর্যায় সেট করে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يركز الكتاب على بناء ونشر تطبيق Django Pages الذي يتميز بصفحة رئيسية وصفحة حول، والاستفادة من القوالب لتبسيط إنشاء HTML وتعزيز تنظيم التعليمات البرمجية. يقدم الفصل وجهات نظر قائمة على الفئات لتحسين إمكانية التوسع، ويؤكد على أهمية الاختبار الآلي لضمان الوظائف، ويرشد القراء خلال عملية النشر على Heroku. في النهاية، يتعلم القراء كيفية إنشاء مشروع منظم بمكونات قابلة لإعادة الاستخدام، وتنفيذ توجيه URL، وإدارة التعليمات البرمجية باستخدام Git، مما يمهد الطريق للمشاريع المستقبلية المدعومة بقاعدة البيانات.",
                // Persian
                "فارسی": "در این فصل، تمرکز بر ساخت و استقرار یک برنامه Django Pages است که دارای یک صفحه اصلی و یک صفحه درباره، با استفاده از الگوها برای ساده‌سازی تولید HTML و بهبود سازماندهی کد است. این فصل نماهای مبتنی بر کلاس را برای توسعه بهتر معرفی می‌کند، بر اهمیت تست خودکار برای اطمینان از عملکرد تأکید می‌کند و خوانندگان را از طریق فرآیند استقرار در Heroku راهنمایی می‌کند. در پایان، خوانندگان یاد می‌گیرند که یک پروژه ساختاریافته با اجزای قابل استفاده مجدد ایجاد کنند، مسیریابی URL را پیاده‌سازی کنند و کد را با Git مدیریت کنند و زمینه را برای پروژه‌های آینده با پشتیبانی پایگاه داده فراهم کنند.",
            },
        },
        // 4
        {
            "ChapterName": "Message Board App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, we develop a basic Message Board application using Django, which introduces database management through the Django ORM, allowing for seamless interaction with various database backends. We create a Post model to store message content, utilize Django's admin interface for managing posts, and implement views, templates, and URLs to display posts on the homepage. Additionally, we write tests using TestCase for our application, ensuring functionality before deploying the app on Heroku, while also learning to configure the project for production environments.",
                // German
                "Deutsch": "In diesem Kapitel entwickeln wir eine grundlegende Message Board-Anwendung mit Django, die die Datenbankverwaltung über das Django ORM einführt und eine nahtlose Interaktion mit verschiedenen Datenbank-Backends ermöglicht. Wir erstellen ein Post-Modell zum Speichern von Nachrichteninhalten, verwenden die Administratoroberfläche von Django zum Verwalten von Posts und implementieren Ansichten, Vorlagen und URLs zum Anzeigen von Posts auf der Homepage. Darüber hinaus schreiben wir Tests mit TestCase für unsere Anwendung, stellen die Funktionalität sicher, bevor wir die App auf Heroku bereitstellen, und lernen gleichzeitig, das Projekt für Produktionsumgebungen zu konfigurieren.",
                // Chinese
                "中国人": "在本章中，我们将使用 Django 开发一个基本的留言板应用程序，该应用程序通过 Django ORM 引入数据库管理，从而实现与各种数据库后端的无缝交互。我们创建一个 Post 模型来存储消息内容，利用 Django 的管理界面来管理帖子，并实现视图、模板和 URL 以在主页上显示帖子。此外，我们使用 TestCase 为我们的应用程序编写测试，确保在 Heroku 上部署应用程序之前的功能，同时还学习如何为生产环境配置项目。",
                // Russian
                "Русский": "В этой главе мы разрабатываем базовое приложение Message Board с использованием Django, которое представляет управление базой данных через Django ORM, что позволяет бесперебойно взаимодействовать с различными бэкендами баз данных. Мы создаем модель Post для хранения содержимого сообщений, используем интерфейс администратора Django для управления сообщениями и реализуем представления, шаблоны и URL-адреса для отображения сообщений на домашней странице. Кроме того, мы пишем тесты с использованием TestCase для нашего приложения, гарантируя функциональность перед развертыванием приложения на Heroku, а также учимся настраивать проект для производственных сред.",
                // French
                "Français": "Dans ce chapitre, nous développons une application Message Board de base à l'aide de Django, qui introduit la gestion de base de données via l'ORM Django, permettant une interaction transparente avec divers backends de base de données. Nous créons un modèle Post pour stocker le contenu des messages, utilisons l'interface d'administration de Django pour gérer les publications et implémentons des vues, des modèles et des URL pour afficher les publications sur la page d'accueil. De plus, nous écrivons des tests à l'aide de TestCase pour notre application, garantissant la fonctionnalité avant de déployer l'application sur Heroku, tout en apprenant à configurer le projet pour les environnements de production.",
                // Japanese
                "日本語": "この章では、Django を使用して基本的なメッセージ ボード アプリケーションを開発します。これにより、Django ORM によるデータベース管理が導入され、さまざまなデータベース バックエンドとのシームレスなやり取りが可能になります。メッセージ コンテンツを保存するための Post モデルを作成し、投稿の管理に Django の管理インターフェイスを活用し、ホームページに投稿を表示するためのビュー、テンプレート、および URL を実装します。さらに、TestCase を使用してアプリケーションのテストを作成し、Heroku にアプリケーションをデプロイする前に機能を確認するとともに、実稼働環境用にプロジェクトを構成する方法も学習します。",
                // Korean
                "한국인": "이 장에서는 Django를 사용하여 기본 메시지 보드 애플리케이션을 개발합니다. 여기서는 Django ORM을 통한 데이터베이스 관리를 소개하고 다양한 데이터베이스 백엔드와 원활하게 상호 작용할 수 있습니다. 메시지 내용을 저장하기 위한 게시물 모델을 만들고, 게시물을 관리하기 위해 Django의 관리자 인터페이스를 활용하고, 홈페이지에 게시물을 표시하기 위한 뷰, 템플릿 및 URL을 구현합니다. 또한, Heroku에 앱을 배포하기 전에 기능을 확인하기 위해 애플리케이션에 대한 TestCase를 사용하여 테스트를 작성하고, 프로덕션 환경에 대한 프로젝트를 구성하는 방법도 배웁니다.",
                // Spanish
                "Español": "En este capítulo, desarrollamos una aplicación básica de foro de mensajes con Django, que introduce la gestión de bases de datos a través del ORM de Django, lo que permite una interacción fluida con varios backends de bases de datos. Creamos un modelo de publicaciones para almacenar el contenido de los mensajes, utilizamos la interfaz de administración de Django para gestionar las publicaciones e implementamos vistas, plantillas y URL para mostrar las publicaciones en la página de inicio. Además, escribimos pruebas con TestCase para nuestra aplicación, lo que garantiza la funcionalidad antes de implementar la aplicación en Heroku, al mismo tiempo que aprendemos a configurar el proyecto para entornos de producción.",
                // Hindi
                "हिंदी": "इस अध्याय में, हम Django का उपयोग करके एक बुनियादी संदेश बोर्ड एप्लिकेशन विकसित करते हैं, जो Django ORM के माध्यम से डेटाबेस प्रबंधन का परिचय देता है, जिससे विभिन्न डेटाबेस बैकएंड के साथ सहज बातचीत की अनुमति मिलती है। हम संदेश सामग्री को संग्रहीत करने के लिए एक पोस्ट मॉडल बनाते हैं, पोस्ट प्रबंधित करने के लिए Django के व्यवस्थापक इंटरफ़ेस का उपयोग करते हैं, और होमपेज पर पोस्ट प्रदर्शित करने के लिए दृश्य, टेम्पलेट और URL लागू करते हैं। इसके अतिरिक्त, हम अपने एप्लिकेशन के लिए TestCase का उपयोग करके परीक्षण लिखते हैं, Heroku पर ऐप को तैनात करने से पहले कार्यक्षमता सुनिश्चित करते हैं, जबकि उत्पादन वातावरण के लिए प्रोजेक्ट को कॉन्फ़िगर करना भी सीखते हैं।",
                // Portuguese
                "Português": "Neste capítulo, desenvolvemos uma aplicação básica de Message Board utilizando Django, que introduz a gestão de base de dados através do Django ORM, permitindo uma interação perfeita com vários backends de base de dados. Criámos um modelo Post para armazenar o conteúdo das mensagens, utilizámos a interface administrativa do Django para gerir publicações e implementámos visualizações, modelos e URLs para exibir publicações na página inicial. Além disso, escrevemos testes utilizando o TestCase para a nossa aplicação, garantindo a funcionalidade antes de implementar a aplicação no Heroku, ao mesmo tempo que aprendemos a configurar o projeto para ambientes de produção.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, আমরা জ্যাঙ্গো ব্যবহার করে একটি মৌলিক মেসেজ বোর্ড অ্যাপ্লিকেশন তৈরি করেছি, যা জ্যাঙ্গো ওআরএম-এর মাধ্যমে ডাটাবেস ম্যানেজমেন্ট প্রবর্তন করে, যা বিভিন্ন ডাটাবেস ব্যাকএন্ডের সাথে নির্বিঘ্ন মিথস্ক্রিয়া করার অনুমতি দেয়। আমরা বার্তা সামগ্রী সংরক্ষণ করার জন্য একটি পোস্ট মডেল তৈরি করি, পোস্ট পরিচালনার জন্য জ্যাঙ্গোর অ্যাডমিন ইন্টারফেস ব্যবহার করি এবং হোমপেজে পোস্টগুলি প্রদর্শনের জন্য ভিউ, টেমপ্লেট এবং URL প্রয়োগ করি। উপরন্তু, আমরা আমাদের অ্যাপ্লিকেশনের জন্য TestCase ব্যবহার করে পরীক্ষা লিখি, Heroku-এ অ্যাপটি স্থাপন করার আগে কার্যকারিতা নিশ্চিত করে, উৎপাদন পরিবেশের জন্য প্রকল্পটি কনফিগার করতে শেখার সাথে সাথে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، نقوم بتطوير تطبيق لوحة الرسائل الأساسي باستخدام Django، والذي يقدم إدارة قاعدة البيانات من خلال Django ORM، مما يسمح بالتفاعل السلس مع مختلف واجهات قاعدة البيانات الخلفية. نقوم بإنشاء نموذج Post لتخزين محتوى الرسالة، والاستفادة من واجهة إدارة Django لإدارة المنشورات، وتنفيذ العروض والقوالب وعناوين URL لعرض المنشورات على الصفحة الرئيسية. بالإضافة إلى ذلك، نقوم بكتابة الاختبارات باستخدام TestCase لتطبيقنا، وضمان الوظائف قبل نشر التطبيق على Heroku، بينما نتعلم أيضًا كيفية تكوين المشروع لبيئات الإنتاج.",
                // Persian
                "فارسی": "در این فصل، ما یک برنامه اصلی تخته پیام را با استفاده از جنگو توسعه می‌دهیم که مدیریت پایگاه داده را از طریق ORM جنگو معرفی می‌کند و امکان تعامل یکپارچه با پشتیبان‌های مختلف پایگاه داده را فراهم می‌کند. ما یک مدل پست برای ذخیره محتوای پیام ایجاد می کنیم، از رابط مدیریت جنگو برای مدیریت پست ها استفاده می کنیم و نماها، قالب ها و URL ها را برای نمایش پست ها در صفحه اصلی پیاده سازی می کنیم. علاوه بر این، ما تست هایی را با استفاده از TestCase برای برنامه خود می نویسیم، از عملکرد قبل از استقرار برنامه در Heroku اطمینان حاصل می کنیم، در حالی که پیکربندی پروژه برای محیط های تولید را نیز یاد می گیریم.",
            },
        },
        // 5
        {
            "ChapterName": "Blog App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter of the Blog App guide details the process of building a basic blog application using Django. It covers the creation of a model with attributes like title, author, and body, and demonstrates how to implement views and templates for displaying a list of blog posts and individual post details using Django's generic class-based views. The chapter also includes instructions for styling the application with CSS, managing static files, and utilizing the Django admin interface for content management, culminating in a Git commit to save the progress.",
                // German
                "Deutsch": "In diesem Kapitel des Blog-App-Handbuchs wird der Prozess zum Erstellen einer einfachen Blog-Anwendung mit Django ausführlich beschrieben. Es behandelt die Erstellung eines Modells mit Attributen wie Titel, Autor und Text und zeigt, wie Ansichten und Vorlagen zum Anzeigen einer Liste von Blog-Posts und einzelner Post-Details mithilfe der generischen klassenbasierten Ansichten von Django implementiert werden. Das Kapitel enthält außerdem Anweisungen zum Stylen der Anwendung mit CSS, zum Verwalten statischer Dateien und zum Verwenden der Django-Administratoroberfläche für die Inhaltsverwaltung. Abschließend wird ein Git-Commit zum Speichern des Fortschritts ausgeführt.",
                // Chinese
                "中国人": "博客应用指南的这一章详细介绍了使用 Django 构建基本博客应用程序的过程。它涵盖了如何创建具有标题、作者和正文等属性的模型，并演示了如何使用 Django 的基于类的通用视图实现视图和模板以显示博客文章列表和单个文章详细信息。本章还包括使用 CSS 设置应用程序样式、管理静态文件以及使用 Django 管理界面进行内容管理的说明，最后使用 Git 提交来保存进度。",
                // Russian
                "Русский": "В этой главе руководства Blog App подробно описывается процесс создания базового приложения блога с использованием Django. В ней рассматривается создание модели с такими атрибутами, как заголовок, автор и тело, а также демонстрируется, как реализовать представления и шаблоны для отображения списка сообщений блога и отдельных сведений о сообщении с использованием общих представлений Django на основе классов. В главе также содержатся инструкции по стилизации приложения с помощью CSS, управлению статическими файлами и использованию интерфейса администратора Django для управления контентом, завершающиеся коммитом Git для сохранения прогресса.",
                // French
                "Français": "Ce chapitre du guide de l'application Blog détaille le processus de création d'une application de blog de base à l'aide de Django. Il couvre la création d'un modèle avec des attributs tels que le titre, l'auteur et le corps, et montre comment implémenter des vues et des modèles pour afficher une liste d'articles de blog et les détails de chaque article à l'aide des vues génériques basées sur les classes de Django. Le chapitre comprend également des instructions pour styliser l'application avec CSS, gérer les fichiers statiques et utiliser l'interface d'administration Django pour la gestion du contenu, aboutissant à un commit Git pour enregistrer la progression.",
                // Japanese
                "日本語": "ブログ アプリ ガイドのこの章では、Django を使用して基本的なブログ アプリケーションを構築するプロセスについて詳しく説明します。タイトル、作成者、本文などの属性を持つモデルの作成について説明し、Django の汎用クラス ベースのビューを使用してブログ投稿のリストと個々の投稿の詳細を表示するためのビューとテンプレートを実装する方法を示します。また、この章には、CSS を使用してアプリケーションをスタイル設定する方法、静的ファイルを管理する方法、コンテンツ管理に Django 管理インターフェイスを使用する方法、最後に Git コミットを実行して進行状況を保存する方法も含まれています。",
                // Korean
                "한국인": "이 블로그 앱 가이드의 챕터에서는 Django를 사용하여 기본 블로그 애플리케이션을 빌드하는 과정을 자세히 설명합니다. 제목, 작성자, 본문과 같은 속성을 가진 모델을 만드는 방법을 다루고, Django의 일반 클래스 기반 뷰를 사용하여 블로그 게시물 목록과 개별 게시물 세부 정보를 표시하기 위한 뷰와 템플릿을 구현하는 방법을 보여줍니다. 이 챕터에는 CSS로 애플리케이션 스타일링, 정적 파일 관리, 콘텐츠 관리를 위한 Django 관리자 인터페이스 활용에 대한 지침도 포함되어 있으며, Git 커밋으로 마무리하여 진행 상황을 저장합니다.",
                // Spanish
                "Español": "Este capítulo de la guía de la aplicación Blog App detalla el proceso de creación de una aplicación de blog básica con Django. Abarca la creación de un modelo con atributos como título, autor y cuerpo, y demuestra cómo implementar vistas y plantillas para mostrar una lista de publicaciones de blog y detalles de publicaciones individuales utilizando las vistas genéricas basadas en clases de Django. El capítulo también incluye instrucciones para diseñar la aplicación con CSS, administrar archivos estáticos y utilizar la interfaz de administración de Django para la gestión de contenido, culminando con una confirmación de Git para guardar el progreso.",
                // Hindi
                "हिंदी": "ब्लॉग ऐप गाइड का यह अध्याय Django का उपयोग करके एक बुनियादी ब्लॉग एप्लिकेशन बनाने की प्रक्रिया का विवरण देता है। इसमें शीर्षक, लेखक और मुख्य भाग जैसी विशेषताओं के साथ एक मॉडल का निर्माण शामिल है, और यह प्रदर्शित करता है कि Django के सामान्य वर्ग-आधारित दृश्यों का उपयोग करके ब्लॉग पोस्ट और व्यक्तिगत पोस्ट विवरण की सूची प्रदर्शित करने के लिए दृश्य और टेम्पलेट्स को कैसे लागू किया जाए। अध्याय में CSS के साथ एप्लिकेशन को स्टाइल करने, स्थिर फ़ाइलों को प्रबंधित करने और सामग्री प्रबंधन के लिए Django व्यवस्थापक इंटरफ़ेस का उपयोग करने के निर्देश भी शामिल हैं, जो प्रगति को सहेजने के लिए Git कमिट में परिणत होता है।",
                // Portuguese
                "Português": "Este capítulo do guia da aplicação de blogue detalha o processo de construção de uma aplicação de blogue básica utilizando Django. Abrange a criação de um modelo com atributos como título, autor e corpo, e demonstra como implementar visualizações e modelos para exibir uma lista de publicações de blogues e detalhes de publicações individuais utilizando visualizações genéricas baseadas em classes do Django. O capítulo inclui ainda instruções para estilizar a aplicação com CSS, gerir ficheiros estáticos e utilizar a interface administrativa do Django para a gestão de conteúdos, culminando num commit do Git para guardar o progresso.",
                // Bengali
                "বাংলা": "ব্লগ অ্যাপ গাইডের এই অধ্যায়ে জ্যাঙ্গো ব্যবহার করে একটি মৌলিক ব্লগ অ্যাপ্লিকেশন তৈরির প্রক্রিয়ার বিবরণ দেওয়া হয়েছে। এটি শিরোনাম, লেখক এবং বডির মতো বৈশিষ্ট্য সহ একটি মডেল তৈরিকে কভার করে এবং জ্যাঙ্গোর জেনেরিক ক্লাস-ভিত্তিক ভিউ ব্যবহার করে ব্লগ পোস্টের তালিকা এবং পৃথক পোস্টের বিবরণ প্রদর্শনের জন্য ভিউ এবং টেমপ্লেটগুলি কীভাবে প্রয়োগ করতে হয় তা প্রদর্শন করে৷ অধ্যায়ে CSS এর সাথে অ্যাপ্লিকেশন স্টাইল করার নির্দেশাবলী, স্ট্যাটিক ফাইলগুলি পরিচালনা এবং বিষয়বস্তু পরিচালনার জন্য জ্যাঙ্গো অ্যাডমিন ইন্টারফেস ব্যবহার করার জন্য নির্দেশাবলী অন্তর্ভুক্ত রয়েছে, যা অগ্রগতি সংরক্ষণ করার জন্য একটি গিট প্রতিশ্রুতিতে পরিণত হয়।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل من دليل تطبيق المدونة بالتفصيل عملية إنشاء تطبيق مدونة أساسي باستخدام Django. ويغطي إنشاء نموذج بخصائص مثل العنوان والمؤلف والنص، ويوضح كيفية تنفيذ العروض والقوالب لعرض قائمة منشورات المدونة وتفاصيل المنشورات الفردية باستخدام عروض Django العامة القائمة على الفئات. ويتضمن الفصل أيضًا تعليمات لتصميم التطبيق باستخدام CSS وإدارة الملفات الثابتة واستخدام واجهة إدارة Django لإدارة المحتوى، وينتهي الأمر بتأكيد Git لحفظ التقدم.",
                // Persian
                "فارسی": "این فصل از راهنمای برنامه بلاگ به جزئیات فرآیند ساخت یک برنامه وبلاگ پایه با استفاده از جنگو می پردازد. ایجاد یک مدل با ویژگی‌هایی مانند عنوان، نویسنده و بدنه را پوشش می‌دهد و نحوه پیاده‌سازی نماها و قالب‌ها را برای نمایش فهرستی از پست‌های وبلاگ و جزئیات پست‌های فردی با استفاده از نماهای کلاس‌محور کلی جنگو نشان می‌دهد. این فصل همچنین شامل دستورالعمل‌هایی برای استایل‌سازی برنامه با CSS، مدیریت فایل‌های استاتیک، و استفاده از رابط مدیریت جنگو برای مدیریت محتوا است که در نهایت منجر به یک تعهد Git برای ذخیره پیشرفت می‌شود.",
            },
        },
        // 6
        {
            "ChapterName": "Forms",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on enhancing the Blog application by implementing forms for creating, editing, and deleting blog posts using Django's generic views. It covers the creation of templates for each action, ensuring security with CSRF tokens, and specifies the necessary fields for each form. The chapter concludes with the implementation of tests to verify the functionality of the CRUD operations, while noting that future chapters will address user account management to improve access control.",
                // German
                "Deutsch": "In diesem Kapitel geht es darum, die Blog-Anwendung zu verbessern, indem Formulare zum Erstellen, Bearbeiten und Löschen von Blog-Posts mithilfe der generischen Ansichten von Django implementiert werden. Es behandelt die Erstellung von Vorlagen für jede Aktion, die Gewährleistung der Sicherheit mit CSRF-Tokens und die Angabe der erforderlichen Felder für jedes Formular. Das Kapitel schließt mit der Implementierung von Tests zur Überprüfung der Funktionalität der CRUD-Operationen ab. Dabei wird darauf hingewiesen, dass in zukünftigen Kapiteln die Verwaltung von Benutzerkonten zur Verbesserung der Zugriffskontrolle behandelt wird.",
                // Chinese
                "中国人": "本章重点介绍如何使用 Django 的通用视图实现创建、编辑和删除博客文章的表单来增强 Blog 应用程序。它涵盖了为每个操作创建模板、使用 CSRF 令牌确保安全性以及为每个表单指定必要的字段。本章最后介绍了测试的实现，以验证 CRUD 操作的功能，同时指出，未来的章节将介绍用户帐户管理以改进访问控制。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется улучшению приложения Blog путем внедрения форм для создания, редактирования и удаления сообщений блога с использованием общих представлений Django. В ней рассматривается создание шаблонов для каждого действия, обеспечение безопасности с помощью токенов CSRF и указание необходимых полей для каждой формы. Глава завершается реализацией тестов для проверки функциональности операций CRUD, при этом отмечается, что в будущих главах будет рассмотрено управление учетными записями пользователей для улучшения контроля доступа.",
                // French
                "Français": "Ce chapitre se concentre sur l'amélioration de l'application Blog en implémentant des formulaires pour créer, modifier et supprimer des articles de blog à l'aide des vues génériques de Django. Il couvre la création de modèles pour chaque action, garantit la sécurité avec des jetons CSRF et spécifie les champs nécessaires pour chaque formulaire. Le chapitre se termine par la mise en œuvre de tests pour vérifier la fonctionnalité des opérations CRUD, tout en notant que les prochains chapitres aborderont la gestion des comptes utilisateurs pour améliorer le contrôle d'accès.",
                // Japanese
                "日本語": "この章では、Django の汎用ビューを使用してブログ投稿を作成、編集、削除するためのフォームを実装することで、ブログ アプリケーションを強化することに焦点を当てています。各アクションのテンプレートの作成、CSRF トークンによるセキュリティの確保、各フォームに必要なフィールドの指定について説明します。この章の最後には、CRUD 操作の機能性を検証するためのテストの実装について説明します。また、今後の章では、アクセス制御を向上させるためにユーザー アカウント管理について取り上げます。",
                // Korean
                "한국인": "이 장에서는 Django의 일반 뷰를 사용하여 블로그 게시물을 만들고, 편집하고, 삭제하기 위한 양식을 구현하여 블로그 애플리케이션을 개선하는 데 중점을 둡니다. 각 작업에 대한 템플릿을 만들고, CSRF 토큰으로 보안을 보장하고, 각 양식에 필요한 필드를 지정합니다. 이 장은 CRUD 작업의 기능을 검증하기 위한 테스트를 구현하는 것으로 마무리하며, 이후 장에서는 액세스 제어를 개선하기 위한 사용자 계정 관리를 다룰 것이라고 언급합니다.",
                // Spanish
                "Español": "Este capítulo se centra en mejorar la aplicación Blog mediante la implementación de formularios para crear, editar y eliminar publicaciones de blog utilizando las vistas genéricas de Django. Abarca la creación de plantillas para cada acción, garantizando la seguridad con tokens CSRF y especificando los campos necesarios para cada formulario. El capítulo concluye con la implementación de pruebas para verificar la funcionalidad de las operaciones CRUD, al tiempo que se señala que en los próximos capítulos se abordará la gestión de cuentas de usuario para mejorar el control de acceso.",
                // Hindi
                "हिंदी": "यह अध्याय Django के सामान्य दृश्यों का उपयोग करके ब्लॉग पोस्ट बनाने, संपादित करने और हटाने के लिए फ़ॉर्म लागू करके ब्लॉग एप्लिकेशन को बेहतर बनाने पर केंद्रित है। इसमें प्रत्येक क्रिया के लिए टेम्प्लेट बनाना, CSRF टोकन के साथ सुरक्षा सुनिश्चित करना और प्रत्येक फ़ॉर्म के लिए आवश्यक फ़ील्ड निर्दिष्ट करना शामिल है। अध्याय CRUD संचालन की कार्यक्षमता को सत्यापित करने के लिए परीक्षणों के कार्यान्वयन के साथ समाप्त होता है, जबकि यह ध्यान में रखते हुए कि भविष्य के अध्याय एक्सेस नियंत्रण को बेहतर बनाने के लिए उपयोगकर्ता खाता प्रबंधन को संबोधित करेंगे।",
                // Portuguese
                "Português": "Este capítulo centra-se na melhoria da aplicação Blog implementando formulários para criar, editar e eliminar publicações de blogues utilizando as visualizações genéricas do Django. Abrange a criação de templates para cada ação, garantindo a segurança com tokens CSRF, e especifica os campos necessários para cada formulário. O capítulo termina com a implementação de testes para verificar a funcionalidade das operações CRUD, referindo que os capítulos futuros abordarão a gestão de contas de utilizadores para melhorar o controlo de acesso.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি জ্যাঙ্গোর জেনেরিক দৃষ্টিভঙ্গি ব্যবহার করে ব্লগ পোস্ট তৈরি, সম্পাদনা এবং মুছে ফেলার ফর্মগুলি বাস্তবায়নের মাধ্যমে ব্লগ অ্যাপ্লিকেশনটিকে উন্নত করার উপর দৃষ্টি নিবদ্ধ করে৷ এটি প্রতিটি কর্মের জন্য টেমপ্লেট তৈরি করে, CSRF টোকেনগুলির সাথে নিরাপত্তা নিশ্চিত করে এবং প্রতিটি ফর্মের জন্য প্রয়োজনীয় ক্ষেত্রগুলি নির্দিষ্ট করে৷ অধ্যায়টি CRUD ক্রিয়াকলাপের কার্যকারিতা যাচাই করার জন্য পরীক্ষাগুলি বাস্তবায়নের সাথে সমাপ্ত হয়েছে, যেখানে ভবিষ্যতে অধ্যায়গুলি অ্যাক্সেস নিয়ন্ত্রণের উন্নতির জন্য ব্যবহারকারীর অ্যাকাউন্ট পরিচালনাকে সম্বোধন করবে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تحسين تطبيق المدونة من خلال تنفيذ نماذج لإنشاء وتحرير وحذف منشورات المدونة باستخدام وجهات نظر Django العامة. ويغطي إنشاء قوالب لكل إجراء، وضمان الأمان باستخدام رموز CSRF، وتحديد الحقول اللازمة لكل نموذج. ويختتم الفصل بتنفيذ الاختبارات للتحقق من وظائف عمليات CRUD، مع ملاحظة أن الفصول المستقبلية ستتناول إدارة حسابات المستخدم لتحسين التحكم في الوصول.",
                // Persian
                "فارسی": "این فصل بر تقویت برنامه بلاگ با پیاده سازی فرم هایی برای ایجاد، ویرایش و حذف پست های وبلاگ با استفاده از نماهای عمومی جنگو تمرکز دارد. ایجاد الگوها برای هر عمل را پوشش می دهد، امنیت را با توکن های CSRF تضمین می کند و فیلدهای لازم را برای هر فرم مشخص می کند. این فصل با اجرای آزمایش‌هایی برای تأیید عملکرد عملیات CRUD به پایان می‌رسد، در حالی که خاطرنشان می‌کند که فصل‌های آینده به مدیریت حساب کاربر برای بهبود کنترل دسترسی خواهند پرداخت.",
            },
        },
        // 7
        {
            "ChapterName": "User Accounts",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter covers the implementation of user authentication in a Django blog application, utilizing Django's built-in auth system to create login, logout, and signup functionalities. It details the creation of user registration forms, the configuration of static files for production, and the deployment of the application on Heroku, emphasizing the transition from SQLite to a server-based database for better persistence. The chapter concludes by setting the stage for the next project, a Newspaper site that will incorporate advanced user registration, enhanced styling, and improved security measures.",
                // German
                "Deutsch": "Dieses Kapitel behandelt die Implementierung der Benutzerauthentifizierung in einer Django-Blog-Anwendung, wobei das in Django integrierte Authentifizierungssystem zum Erstellen von Anmelde-, Abmelde- und Registrierungsfunktionen verwendet wird. Es beschreibt detailliert die Erstellung von Benutzerregistrierungsformularen, die Konfiguration statischer Dateien für die Produktion und die Bereitstellung der Anwendung auf Heroku, wobei der Übergang von SQLite zu einer serverbasierten Datenbank für eine bessere Persistenz hervorgehoben wird. Das Kapitel schließt mit der Vorbereitung des nächsten Projekts, einer Zeitungssite, die erweiterte Benutzerregistrierung, verbessertes Design und verbesserte Sicherheitsmaßnahmen umfasst.",
                // Chinese
                "中国人": "本章介绍了如何在 Django 博客应用程序中实现用户身份验证，利用 Django 的内置身份验证系统创建登录、注销和注册功能。它详细介绍了用户注册表单的创建、生产静态文件的配置以及在 Heroku 上部署应用程序，强调了从 SQLite 过渡到基于服务器的数据库以获得更好的持久性。本章最后为下一个项目奠定了基础，这是一个报纸网站，将包含高级用户注册、增强的样式和改进的安全措施。",
                // Russian
                "Русский": "В этой главе рассматривается реализация аутентификации пользователя в приложении блога Django с использованием встроенной системы аутентификации Django для создания функций входа, выхода и регистрации. В ней подробно описывается создание форм регистрации пользователя, настройка статических файлов для производства и развертывание приложения на Heroku, с акцентом на переходе с SQLite на серверную базу данных для лучшей устойчивости. Глава завершается подготовкой к следующему проекту — сайту Newspaper, который будет включать расширенную регистрацию пользователя, улучшенный стиль и улучшенные меры безопасности.",
                // French
                "Français": "Ce chapitre couvre la mise en œuvre de l'authentification des utilisateurs dans une application de blog Django, en utilisant le système d'authentification intégré de Django pour créer des fonctionnalités de connexion, de déconnexion et d'inscription. Il détaille la création de formulaires d'inscription des utilisateurs, la configuration de fichiers statiques pour la production et le déploiement de l'application sur Heroku, en mettant l'accent sur la transition de SQLite vers une base de données basée sur un serveur pour une meilleure persistance. Le chapitre se termine en préparant le terrain pour le prochain projet, un site de journal qui intégrera l'enregistrement avancé des utilisateurs, un style amélioré et des mesures de sécurité améliorées.",
                // Japanese
                "日本語": "この章では、Django ブログ アプリケーションでのユーザー認証の実装について説明します。Django の組み込み認証システムを利用して、ログイン、ログアウト、サインアップ機能を作成します。ユーザー登録フォームの作成、本番環境用の静的ファイルの構成、Heroku へのアプリケーションのデプロイについて詳しく説明し、永続性を高めるために SQLite からサーバーベースのデータベースへの移行に重点を置きます。この章の最後には、高度なユーザー登録、強化されたスタイル、改善されたセキュリティ対策を組み込んだ新聞サイトという次のプロジェクトの準備を整えます。",
                // Korean
                "한국인": "이 장에서는 Django의 내장 인증 시스템을 사용하여 로그인, 로그아웃, 가입 기능을 만드는 Django 블로그 애플리케이션에서 사용자 인증을 구현하는 방법을 다룹니다. 사용자 등록 양식 생성, 프로덕션을 위한 정적 파일 구성, Heroku에 애플리케이션 배포에 대해 자세히 설명하며, 더 나은 지속성을 위해 SQLite에서 서버 기반 데이터베이스로 전환하는 것을 강조합니다. 이 장은 고급 사용자 등록, 향상된 스타일, 향상된 보안 조치를 통합할 신문 사이트인 다음 프로젝트의 무대를 설정하면서 마무리합니다.",
                // Spanish
                "Español": "Este capítulo cubre la implementación de la autenticación de usuarios en una aplicación de blog de Django, utilizando el sistema de autenticación integrado de Django para crear funcionalidades de inicio de sesión, cierre de sesión y registro. Detalla la creación de formularios de registro de usuarios, la configuración de archivos estáticos para producción y la implementación de la aplicación en Heroku, haciendo énfasis en la transición de SQLite a una base de datos basada en servidor para una mejor persistencia. El capítulo concluye preparando el escenario para el próximo proyecto, un sitio de periódico que incorporará un registro de usuarios avanzado, un estilo mejorado y medidas de seguridad mejoradas.",
                // Hindi
                "हिंदी": "यह अध्याय Django ब्लॉग एप्लिकेशन में उपयोगकर्ता प्रमाणीकरण के कार्यान्वयन को कवर करता है, लॉगिन, लॉगआउट और साइनअप कार्यक्षमताओं को बनाने के लिए Django की अंतर्निहित प्रमाणीकरण प्रणाली का उपयोग करता है। यह उपयोगकर्ता पंजीकरण फ़ॉर्म के निर्माण, उत्पादन के लिए स्थिर फ़ाइलों के कॉन्फ़िगरेशन और Heroku पर एप्लिकेशन की तैनाती का विवरण देता है, बेहतर स्थायित्व के लिए SQLite से सर्वर-आधारित डेटाबेस में संक्रमण पर जोर देता है। अध्याय अगले प्रोजेक्ट के लिए मंच तैयार करके समाप्त होता है, एक न्यूज़पेपर साइट जो उन्नत उपयोगकर्ता पंजीकरण, उन्नत स्टाइलिंग और बेहतर सुरक्षा उपायों को शामिल करेगी।",
                // Portuguese
                "Português": "Este capítulo aborda a implementação da autenticação de utilizadores numa aplicação de blogues Django, utilizando o sistema de autenticação integrado do Django para criar funcionalidades de login, logout e subscrição. Detalha a criação de formulários de registo de utilizadores, a configuração de ficheiros estáticos para produção e a implementação da aplicação no Heroku, enfatizando a transição do SQLite para uma base de dados baseada em servidor para uma melhor persistência. O capítulo termina preparando o terreno para o próximo projeto, um site de jornal que incorporará um registo avançado de utilizadores, um estilo melhorado e medidas de segurança melhoradas.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি একটি জ্যাঙ্গো ব্লগ অ্যাপ্লিকেশনে ব্যবহারকারীর প্রমাণীকরণের বাস্তবায়নকে কভার করে, লগইন, লগআউট এবং সাইনআপ কার্যকারিতা তৈরি করতে জ্যাঙ্গোর অন্তর্নির্মিত প্রমাণীকরণ সিস্টেম ব্যবহার করে। এটি ব্যবহারকারীর নিবন্ধন ফর্ম তৈরি, উত্পাদনের জন্য স্ট্যাটিক ফাইলগুলির কনফিগারেশন এবং Heroku-এ অ্যাপ্লিকেশন স্থাপনের বিশদ বিবরণ দেয়, SQLite থেকে সার্ভার-ভিত্তিক ডাটাবেসে রূপান্তরের উপর জোর দেয়। অধ্যায়টি পরবর্তী প্রকল্পের জন্য মঞ্চ নির্ধারণ করে শেষ হয়, একটি সংবাদপত্রের সাইট যা উন্নত ব্যবহারকারীর নিবন্ধন, উন্নত স্টাইলিং এবং উন্নত নিরাপত্তা ব্যবস্থা অন্তর্ভুক্ত করবে।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل تنفيذ مصادقة المستخدم في تطبيق مدونة Django، باستخدام نظام المصادقة المدمج في Django لإنشاء وظائف تسجيل الدخول وتسجيل الخروج والتسجيل. ويوضح بالتفصيل إنشاء نماذج تسجيل المستخدم، وتكوين الملفات الثابتة للإنتاج، ونشر التطبيق على Heroku، مع التركيز على الانتقال من SQLite إلى قاعدة بيانات تعتمد على الخادم من أجل ثبات أفضل. ويختتم الفصل بإعداد المسرح للمشروع التالي، وهو موقع صحيفة سيتضمن تسجيل مستخدم متقدم، وتصميمًا محسنًا، وتدابير أمان محسنة.",
                // Persian
                "فارسی": "این فصل اجرای احراز هویت کاربر را در یک برنامه وبلاگ جنگو، با استفاده از سیستم احراز هویت داخلی جنگو برای ایجاد قابلیت های ورود، خروج و ثبت نام پوشش می دهد. جزئیات ایجاد فرم‌های ثبت نام کاربر، پیکربندی فایل‌های استاتیک برای تولید، و استقرار برنامه در Heroku، با تاکید بر انتقال از SQLite به پایگاه داده مبتنی بر سرور برای تداوم بهتر. این فصل با ایجاد زمینه برای پروژه بعدی، یک سایت روزنامه که شامل ثبت نام کاربر پیشرفته، استایل پیشرفته و اقدامات امنیتی بهبود یافته است، به پایان می رسد.",
            },
        },
        // 8
        {
            "ChapterName": "Custom User Model",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on creating a custom user model in Django, emphasizing the importance of using a custom model for new projects to facilitate future modifications, such as adding fields like age. It recommends using for simplicity and outlines the necessary steps, including updating , creating the model, and developing custom forms for user management. The chapter concludes with instructions on updating the admin interface to handle the custom user model and preparing for the next chapter, which will cover configuring sign-up, log-in, and log-out pages.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Erstellung eines benutzerdefinierten Benutzermodells in Django. Dabei wird die Bedeutung der Verwendung eines benutzerdefinierten Modells für neue Projekte betont, um zukünftige Änderungen, wie z. B. das Hinzufügen von Feldern wie Alter, zu erleichtern. Der Einfachheit halber wird die Verwendung von empfohlen und die erforderlichen Schritte werden beschrieben, darunter die Aktualisierung, die Erstellung des Modells und die Entwicklung benutzerdefinierter Formulare für die Benutzerverwaltung. Das Kapitel schließt mit Anweisungen zur Aktualisierung der Administratoroberfläche zur Handhabung des benutzerdefinierten Benutzermodells und zur Vorbereitung auf das nächste Kapitel, in dem die Konfiguration der Seiten für Registrierung, Anmeldung und Abmeldung behandelt wird.",
                // Chinese
                "中国人": "本章重点介绍如何在 Django 中创建自定义用户模型，强调在新项目中使用自定义模型的重要性，以方便将来的修改，例如添加年龄等字段。为简单起见，它建议使用，并概述了必要的步骤，包括更新、创建模型和开发用于用户管理的自定义表单。本章最后介绍了如何更新管理界面以处理自定义用户模型，并为下一章做准备，下一章将介绍如何配置注册、登录和注销页面。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется созданию пользовательской модели в Django, подчеркивая важность использования пользовательской модели для новых проектов для упрощения будущих изменений, таких как добавление полей, таких как возраст. В ней рекомендуется использовать для простоты и описываются необходимые шаги, включая обновление , создание модели и разработку пользовательских форм для управления пользователями. Глава завершается инструкциями по обновлению интерфейса администратора для обработки пользовательской модели и подготовки к следующей главе, в которой будет рассмотрена настройка страниц регистрации, входа и выхода.",
                // French
                "Français": "Ce chapitre se concentre sur la création d'un modèle d'utilisateur personnalisé dans Django, en soulignant l'importance d'utiliser un modèle personnalisé pour les nouveaux projets afin de faciliter les modifications futures, telles que l'ajout de champs tels que l'âge. Il recommande d'utiliser pour plus de simplicité et décrit les étapes nécessaires, notamment la mise à jour, la création du modèle et le développement de formulaires personnalisés pour la gestion des utilisateurs. Le chapitre se termine par des instructions sur la mise à jour de l'interface d'administration pour gérer le modèle d'utilisateur personnalisé et la préparation du chapitre suivant, qui couvrira la configuration des pages d'inscription, de connexion et de déconnexion.",
                // Japanese
                "日本語": "この章では、Django でカスタム ユーザー モデルを作成することに焦点を当て、年齢などのフィールドの追加などの将来の変更を容易にするために、新しいプロジェクトでカスタム モデルを使用することの重要性を強調します。 をシンプルにするために使用することを推奨し、 の更新、モデルの作成、ユーザー管理用のカスタム フォームの開発など、必要な手順の概要を示します。 この章の最後には、カスタム ユーザー モデルを処理するために管理インターフェイスを更新し、サインアップ、ログイン、ログアウト ページの構成について説明する次の章の準備を行う手順を示します。",
                // Korean
                "한국인": "이 장에서는 Django에서 사용자 정의 사용자 모델을 만드는 데 중점을 두고, 나이와 같은 필드 추가와 같은 향후 수정을 용이하게 하기 위해 새 프로젝트에 사용자 정의 모델을 사용하는 것의 중요성을 강조합니다. 단순성을 위해 를 사용하는 것이 좋으며, 업데이트, 모델 생성, 사용자 관리를 위한 사용자 정의 양식 개발을 포함한 필요한 단계를 설명합니다. 이 장은 사용자 정의 사용자 모델을 처리하기 위한 관리자 인터페이스를 업데이트하고 가입, 로그인 및 로그아웃 페이지 구성을 다루는 다음 장을 준비하는 방법에 대한 지침으로 마무리합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la creación de un modelo de usuario personalizado en Django, haciendo hincapié en la importancia de utilizar un modelo personalizado para nuevos proyectos con el fin de facilitar futuras modificaciones, como la incorporación de campos como la edad. Se recomienda utilizar para simplificar y se describen los pasos necesarios, incluida la actualización, la creación del modelo y el desarrollo de formularios personalizados para la gestión de usuarios. El capítulo concluye con instrucciones sobre la actualización de la interfaz de administración para gestionar el modelo de usuario personalizado y la preparación para el siguiente capítulo, que cubrirá la configuración de las páginas de registro, inicio de sesión y cierre de sesión.",
                // Hindi
                "हिंदी": "यह अध्याय Django में एक कस्टम उपयोगकर्ता मॉडल बनाने पर केंद्रित है, जो भविष्य में संशोधनों को सुविधाजनक बनाने के लिए नई परियोजनाओं के लिए कस्टम मॉडल का उपयोग करने के महत्व पर जोर देता है, जैसे कि आयु जैसे फ़ील्ड जोड़ना। यह सरलता के लिए उपयोग करने की अनुशंसा करता है और आवश्यक चरणों की रूपरेखा तैयार करता है, जिसमें अपडेट करना, मॉडल बनाना और उपयोगकर्ता प्रबंधन के लिए कस्टम फ़ॉर्म विकसित करना शामिल है। अध्याय कस्टम उपयोगकर्ता मॉडल को संभालने के लिए व्यवस्थापक इंटरफ़ेस को अपडेट करने और अगले अध्याय की तैयारी करने के निर्देशों के साथ समाप्त होता है, जिसमें साइन-अप, लॉग-इन और लॉग-आउट पृष्ठों को कॉन्फ़िगर करना शामिल होगा।",
                // Portuguese
                "Português": "Este capítulo centra-se na criação de um modelo de utilizador personalizado no Django, enfatizando a importância de utilizar um modelo personalizado para novos projetos para facilitar futuras modificações, como a adição de campos como a idade. Recomenda a utilização para simplificar e descreve os passos necessários, incluindo a atualização, a criação do modelo e o desenvolvimento de formulários personalizados para a gestão de utilizadores. O capítulo termina com instruções sobre como atualizar a interface administrativa para lidar com o modelo de utilizador personalizado e preparar o próximo capítulo, que abordará a configuração das páginas de inscrição, login e logout.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি জ্যাঙ্গোতে একটি কাস্টম ব্যবহারকারী মডেল তৈরির উপর দৃষ্টি নিবদ্ধ করে, ভবিষ্যতের পরিবর্তনগুলি যেমন বয়সের মতো ক্ষেত্রগুলি যোগ করার জন্য নতুন প্রকল্পগুলির জন্য একটি কাস্টম মডেল ব্যবহার করার গুরুত্বের উপর জোর দেয়। এটি সরলতার জন্য ব্যবহার করার সুপারিশ করে এবং ব্যবহারকারী পরিচালনার জন্য আপডেট করা, মডেল তৈরি করা এবং কাস্টম ফর্মগুলি বিকাশ সহ প্রয়োজনীয় পদক্ষেপগুলির রূপরেখা দেয়৷ কাস্টম ব্যবহারকারী মডেল পরিচালনা করার জন্য অ্যাডমিন ইন্টারফেস আপডেট করা এবং পরবর্তী অধ্যায়ের জন্য প্রস্তুতির নির্দেশাবলী দিয়ে অধ্যায়টি শেষ হয়েছে, যা সাইন-আপ, লগ-ইন এবং লগ-আউট পৃষ্ঠাগুলি কনফিগার করবে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على إنشاء نموذج مستخدم مخصص في Django، مع التأكيد على أهمية استخدام نموذج مخصص للمشاريع الجديدة لتسهيل التعديلات المستقبلية، مثل إضافة حقول مثل العمر. ويوصي باستخدامه من أجل البساطة ويوضح الخطوات اللازمة، بما في ذلك تحديث النموذج وإنشاءه وتطوير نماذج مخصصة لإدارة المستخدمين. ويختتم الفصل بإرشادات حول تحديث واجهة المسؤول للتعامل مع نموذج المستخدم المخصص والاستعداد للفصل التالي، والذي سيغطي تكوين صفحات التسجيل وتسجيل الدخول وتسجيل الخروج.",
                // Persian
                "فارسی": "این فصل بر ایجاد یک مدل کاربر سفارشی در جنگو تمرکز دارد و بر اهمیت استفاده از یک مدل سفارشی برای پروژه‌های جدید برای تسهیل تغییرات آتی، مانند افزودن فیلدهایی مانند سن، تأکید می‌کند. برای سادگی استفاده از آن را توصیه می کند و مراحل لازم را از جمله به روز رسانی، ایجاد مدل، و توسعه فرم های سفارشی برای مدیریت کاربر را تشریح می کند. این فصل با دستورالعمل‌هایی در مورد به‌روزرسانی رابط مدیریت برای مدیریت مدل کاربر سفارشی و آماده‌سازی برای فصل بعدی، که پیکربندی صفحات ثبت نام، ورود به سیستم و خروج از سیستم را پوشش می‌دهد، به پایان می‌رسد.",
            },
        },
        // 9
        {
            "ChapterName": "User Authentication",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on implementing user authentication in a Django application, covering the creation of custom user models, registration templates, and the necessary views and URLs for sign up, log in, and log out functionalities. It details the configuration of settings for template directories and redirect URLs, as well as the addition of an email field to the signup form. The chapter concludes with testing the authentication flow to ensure everything functions correctly, resulting in a fully operational user authentication system for the Newspaper app.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Implementierung der Benutzerauthentifizierung in einer Django-Anwendung. Dabei werden die Erstellung benutzerdefinierter Benutzermodelle, Registrierungsvorlagen und die erforderlichen Ansichten und URLs für die Funktionen zum Registrieren, Anmelden und Abmelden behandelt. Es beschreibt detailliert die Konfiguration der Einstellungen für Vorlagenverzeichnisse und Umleitungs-URLs sowie das Hinzufügen eines E-Mail-Felds zum Anmeldeformular. Das Kapitel schließt mit dem Testen des Authentifizierungsablaufs, um sicherzustellen, dass alles ordnungsgemäß funktioniert, sodass ein voll funktionsfähiges Benutzerauthentifizierungssystem für die Zeitungs-App entsteht.",
                // Chinese
                "中国人": "本章重点介绍如何在 Django 应用程序中实现用户身份验证，涵盖自定义用户模型、注册模板以及注册、登录和注销功能所需的视图和 URL 的创建。它详细介绍了模板目录和重定向 URL 的设置配置，以及在注册表单中添加电子邮件字段。本章最后测试了身份验证流程，以确保一切正常运行，从而为报纸应用程序构建一个功能齐全的用户身份验证系统。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется реализации аутентификации пользователей в приложении Django, охватывая создание пользовательских моделей, шаблонов регистрации и необходимых представлений и URL-адресов для функций регистрации, входа и выхода. В ней подробно описывается конфигурация параметров для каталогов шаблонов и URL-адресов перенаправления, а также добавление поля электронной почты в форму регистрации. Глава завершается тестированием потока аутентификации, чтобы убедиться, что все работает правильно, в результате чего получается полностью работоспособная система аутентификации пользователей для приложения Newspaper.",
                // French
                "Français": "Ce chapitre se concentre sur la mise en œuvre de l'authentification des utilisateurs dans une application Django, en couvrant la création de modèles d'utilisateurs personnalisés, de modèles d'inscription et des vues et URL nécessaires aux fonctionnalités d'inscription, de connexion et de déconnexion. Il détaille la configuration des paramètres des répertoires de modèles et des URL de redirection, ainsi que l'ajout d'un champ de courrier électronique au formulaire d'inscription. Le chapitre se termine par le test du flux d'authentification pour s'assurer que tout fonctionne correctement, ce qui donne lieu à un système d'authentification des utilisateurs entièrement opérationnel pour l'application Newspaper.",
                // Japanese
                "日本語": "この章では、Django アプリケーションでのユーザー認証の実装に焦点を当て、カスタム ユーザー モデル、登録テンプレート、サインアップ、ログイン、ログアウト機能に必要なビューと URL の作成について説明します。テンプレート ディレクトリとリダイレクト URL の設定の構成、サインアップ フォームへの電子メール フィールドの追加についても詳しく説明します。最後に、認証フローをテストしてすべてが正しく機能することを確認し、Newspaper アプリのユーザー認証システムが完全に機能するようにします。",
                // Korean
                "한국인": "이 장에서는 Django 애플리케이션에서 사용자 인증을 구현하는 데 중점을 두고, 사용자 정의 사용자 모델, 등록 템플릿, 가입, 로그인, 로그아웃 기능에 필요한 뷰와 URL을 만듭니다. 템플릿 디렉토리 및 리디렉션 URL에 대한 설정 구성과 가입 양식에 이메일 필드를 추가하는 방법을 자세히 설명합니다. 이 장은 모든 것이 올바르게 작동하는지 확인하기 위해 인증 흐름을 테스트하는 것으로 마무리되며, 그 결과 Newspaper 앱에 대한 완전히 작동하는 사용자 인증 시스템이 완성됩니다.",
                // Spanish
                "Español": "Este capítulo se centra en la implementación de la autenticación de usuarios en una aplicación Django, y cubre la creación de modelos de usuarios personalizados, plantillas de registro y las vistas y URL necesarias para las funcionalidades de registro, inicio de sesión y cierre de sesión. Detalla la configuración de los ajustes para los directorios de plantillas y las URL de redireccionamiento, así como la incorporación de un campo de correo electrónico al formulario de registro. El capítulo concluye con la prueba del flujo de autenticación para garantizar que todo funcione correctamente, lo que da como resultado un sistema de autenticación de usuarios completamente operativo para la aplicación Newspaper.",
                // Hindi
                "हिंदी": "यह अध्याय Django एप्लिकेशन में उपयोगकर्ता प्रमाणीकरण को लागू करने पर केंद्रित है, जिसमें कस्टम उपयोगकर्ता मॉडल, पंजीकरण टेम्पलेट्स और साइन अप, लॉग इन और लॉग आउट कार्यक्षमताओं के लिए आवश्यक दृश्य और URL का निर्माण शामिल है। यह टेम्पलेट निर्देशिकाओं और रीडायरेक्ट URL के लिए सेटिंग्स के कॉन्फ़िगरेशन के साथ-साथ साइनअप फ़ॉर्म में एक ईमेल फ़ील्ड को जोड़ने का विवरण देता है। अध्याय प्रमाणीकरण प्रवाह का परीक्षण करने के साथ समाप्त होता है ताकि यह सुनिश्चित हो सके कि सब कुछ सही ढंग से काम करता है, जिसके परिणामस्वरूप न्यूज़पेपर ऐप के लिए पूरी तरह से चालू उपयोगकर्ता प्रमाणीकरण प्रणाली बन जाती है।",
                // Portuguese
                "Português": "Este capítulo centra-se na implementação da autenticação de utilizadores numa aplicação Django, cobrindo a criação de modelos de utilizador personalizados, modelos de registo e as visualizações e URLs necessários para as funcionalidades de subscrição, login e logout. Detalha a configuração dos diretórios de modelos e URLs de redireccionamento, bem como a adição de um campo de e-mail ao formulário de inscrição. O capítulo termina testando o fluxo de autenticação para garantir que tudo funciona corretamente, resultando num sistema de autenticação de utilizadores totalmente operacional para a aplicação Newspaper.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি একটি জ্যাঙ্গো অ্যাপ্লিকেশনে ব্যবহারকারীর প্রমাণীকরণ বাস্তবায়নের উপর দৃষ্টি নিবদ্ধ করে, কাস্টম ব্যবহারকারী মডেল, নিবন্ধন টেমপ্লেট, এবং সাইন আপ, লগ ইন এবং লগ আউট কার্যকারিতাগুলির জন্য প্রয়োজনীয় ভিউ এবং URL গুলিকে কভার করে৷ এটি টেমপ্লেট ডিরেক্টরি এবং পুনঃনির্দেশ URL-এর জন্য সেটিংসের কনফিগারেশনের বিবরণ দেয়, সেইসাথে সাইনআপ ফর্মে একটি ইমেল ক্ষেত্র যোগ করে। অধ্যায়টি সমস্ত কিছু সঠিকভাবে কাজ করছে তা নিশ্চিত করার জন্য প্রমাণীকরণ প্রবাহ পরীক্ষা করে শেষ হয়েছে, যার ফলে সংবাদপত্র অ্যাপের জন্য একটি সম্পূর্ণরূপে কার্যকরী ব্যবহারকারী প্রমাণীকরণ সিস্টেম রয়েছে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تنفيذ مصادقة المستخدم في تطبيق Django، ويغطي إنشاء نماذج مستخدم مخصصة وقوالب التسجيل والعروض وعناوين URL اللازمة لوظائف التسجيل وتسجيل الدخول وتسجيل الخروج. كما يوضح تكوين إعدادات أدلة القوالب وعناوين URL لإعادة التوجيه، بالإضافة إلى إضافة حقل بريد إلكتروني إلى نموذج التسجيل. ويختتم الفصل باختبار تدفق المصادقة للتأكد من أن كل شيء يعمل بشكل صحيح، مما يؤدي إلى نظام مصادقة مستخدم يعمل بكامل طاقته لتطبيق Newspaper.",
                // Persian
                "فارسی": "این فصل بر پیاده‌سازی احراز هویت کاربر در برنامه جنگو تمرکز دارد که شامل ایجاد مدل‌های کاربر سفارشی، الگوهای ثبت‌نام و نماها و URLهای لازم برای ثبت نام، ورود به سیستم و عملکردهای خروج از سیستم می‌شود. جزئیات پیکربندی تنظیمات دایرکتوری های الگو و تغییر مسیر URL ها و همچنین افزودن یک فیلد ایمیل به فرم ثبت نام. این فصل با آزمایش جریان احراز هویت به پایان می‌رسد تا اطمینان حاصل شود که همه چیز به درستی کار می‌کند و در نتیجه یک سیستم احراز هویت کاربر کاملاً عملیاتی برای برنامه روزنامه ایجاد می‌شود.",
            },
        },
        // 10
        {
            "ChapterName": "Bootstrap",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on integrating Bootstrap into a Django project to enhance the visual appeal and functionality of web pages. It discusses the implementation of a navigation bar that adapts based on user authentication status, the use of Bootstrap's CDN for easier setup, and the incorporation of django-crispy-forms to improve form styling. The chapter emphasizes the importance of organizing code through dedicated apps and provides guidance on customizing user authentication forms for a better user experience.",
                // German
                "Deutsch": "In diesem Kapitel geht es darum, Bootstrap in ein Django-Projekt zu integrieren, um die visuelle Attraktivität und Funktionalität von Webseiten zu verbessern. Es behandelt die Implementierung einer Navigationsleiste, die sich je nach Benutzerauthentifizierungsstatus anpasst, die Verwendung des CDN von Bootstrap zur einfacheren Einrichtung und die Einbindung von django-crispy-forms zur Verbesserung des Formular-Stylings. Das Kapitel betont die Bedeutung der Organisation von Code durch dedizierte Apps und bietet Anleitungen zum Anpassen von Benutzerauthentifizierungsformularen für ein besseres Benutzererlebnis.",
                // Chinese
                "中国人": "本章重点介绍如何将 Bootstrap 集成到 Django 项目中，以增强网页的视觉吸引力和功能。它讨论了如何实现根据用户身份验证状态进行调整的导航栏、如何使用 Bootstrap 的 CDN 进行更轻松的设置以及如何整合 django-crispy-forms 来改善表单样式。本章强调了通过专用应用程序组织代码的重要性，并提供了有关自定义用户身份验证表单以获得更好用户体验的指导。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется интеграции Bootstrap в проект Django для улучшения визуальной привлекательности и функциональности веб-страниц. В ней обсуждается реализация панели навигации, которая адаптируется в зависимости от статуса аутентификации пользователя, использование CDN Bootstrap для более простой настройки и включение django-crispy-forms для улучшения стиля форм. В главе подчеркивается важность организации кода с помощью специальных приложений и даются рекомендации по настройке форм аутентификации пользователя для лучшего пользовательского опыта.",
                // French
                "Français": "Ce chapitre se concentre sur l'intégration de Bootstrap dans un projet Django pour améliorer l'attrait visuel et la fonctionnalité des pages Web. Il aborde l'implémentation d'une barre de navigation qui s'adapte en fonction du statut d'authentification de l'utilisateur, l'utilisation du CDN de Bootstrap pour une configuration plus facile et l'intégration de django-crispy-forms pour améliorer le style des formulaires. Le chapitre souligne l'importance d'organiser le code via des applications dédiées et fournit des conseils sur la personnalisation des formulaires d'authentification des utilisateurs pour une meilleure expérience utilisateur.",
                // Japanese
                "日本語": "この章では、Web ページの見た目の魅力と機能性を高めるために Bootstrap を Django プロジェクトに統合することに焦点を当てています。ユーザー認証ステータスに基づいて適応するナビゲーション バーの実装、セットアップを容易にするための Bootstrap の CDN の使用、フォームのスタイルを改善するための django-crispy-forms の組み込みについて説明します。この章では、専用アプリを使用してコードを整理することの重要性を強調し、ユーザー エクスペリエンスを向上させるためにユーザー認証フォームをカスタマイズするためのガイダンスを提供します。",
                // Korean
                "한국인": "이 장에서는 Bootstrap을 Django 프로젝트에 통합하여 웹 페이지의 시각적 매력과 기능을 향상시키는 데 중점을 둡니다. 사용자 인증 상태에 따라 적응하는 탐색 모음 구현, 더 쉬운 설정을 위한 Bootstrap CDN 사용, 양식 스타일을 개선하기 위한 django-crispy-forms 통합에 대해 설명합니다. 이 장에서는 전용 앱을 통해 코드를 구성하는 것의 중요성을 강조하고 더 나은 사용자 경험을 위해 사용자 인증 양식을 사용자 지정하는 방법에 대한 지침을 제공합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la integración de Bootstrap en un proyecto de Django para mejorar el atractivo visual y la funcionalidad de las páginas web. Se analiza la implementación de una barra de navegación que se adapta en función del estado de autenticación del usuario, el uso de la CDN de Bootstrap para una configuración más sencilla y la incorporación de django-crispy-forms para mejorar el estilo de los formularios. El capítulo enfatiza la importancia de organizar el código a través de aplicaciones dedicadas y proporciona orientación sobre la personalización de los formularios de autenticación de usuarios para una mejor experiencia de usuario.",
                // Hindi
                "हिंदी": "यह अध्याय वेब पेजों की दृश्य अपील और कार्यक्षमता को बढ़ाने के लिए Django प्रोजेक्ट में बूटस्ट्रैप को एकीकृत करने पर केंद्रित है। यह एक नेविगेशन बार के कार्यान्वयन पर चर्चा करता है जो उपयोगकर्ता प्रमाणीकरण स्थिति के आधार पर अनुकूलित होता है, आसान सेटअप के लिए बूटस्ट्रैप के CDN का उपयोग, और फ़ॉर्म स्टाइलिंग को बेहतर बनाने के लिए django-crispy-forms को शामिल करता है। अध्याय समर्पित ऐप्स के माध्यम से कोड को व्यवस्थित करने के महत्व पर जोर देता है और बेहतर उपयोगकर्ता अनुभव के लिए उपयोगकर्ता प्रमाणीकरण फ़ॉर्म को अनुकूलित करने पर मार्गदर्शन प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na integração do Bootstrap num projeto Django para melhorar o apelo visual e a funcionalidade das páginas web. Discute a implementação de uma barra de navegação que se adapta com base no estado de autenticação do utilizador, a utilização do CDN do Bootstrap para facilitar a configuração e a incorporação do django-crispy-forms para melhorar o estilo do formulário. O capítulo enfatiza a importância de organizar o código através de aplicações dedicadas e fornece orientações sobre como personalizar os formulários de autenticação do utilizador para uma melhor experiência do utilizador.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ওয়েব পৃষ্ঠাগুলির ভিজ্যুয়াল আবেদন এবং কার্যকারিতা উন্নত করার জন্য একটি জ্যাঙ্গো প্রকল্পে বুটস্ট্র্যাপকে একীভূত করার উপর দৃষ্টি নিবদ্ধ করে৷ এটি একটি নেভিগেশন বারের বাস্তবায়ন নিয়ে আলোচনা করে যা ব্যবহারকারীর প্রমাণীকরণ স্থিতির উপর ভিত্তি করে অভিযোজিত হয়, সহজ সেটআপের জন্য বুটস্ট্র্যাপের সিডিএন ব্যবহার এবং ফর্ম স্টাইলিং উন্নত করতে জ্যাঙ্গো-ক্রিস্পি-ফর্মের অন্তর্ভুক্তি। অধ্যায়টি ডেডিকেটেড অ্যাপের মাধ্যমে কোড সংগঠিত করার গুরুত্বের উপর জোর দেয় এবং আরও ভাল ব্যবহারকারীর অভিজ্ঞতার জন্য ব্যবহারকারীর প্রমাণীকরণ ফর্মগুলি কাস্টমাইজ করার বিষয়ে নির্দেশিকা প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على دمج Bootstrap في مشروع Django لتحسين المظهر المرئي ووظائف صفحات الويب. ويناقش تنفيذ شريط التنقل الذي يتكيف بناءً على حالة مصادقة المستخدم، واستخدام CDN الخاص بـ Bootstrap لتسهيل الإعداد، ودمج django-crispy-forms لتحسين تصميم النماذج. ويؤكد الفصل على أهمية تنظيم التعليمات البرمجية من خلال تطبيقات مخصصة ويقدم إرشادات حول تخصيص نماذج مصادقة المستخدم للحصول على تجربة مستخدم أفضل.",
                // Persian
                "فارسی": "این فصل بر ادغام بوت استرپ در پروژه جنگو برای افزایش جذابیت بصری و عملکرد صفحات وب تمرکز دارد. در مورد پیاده‌سازی نوار ناوبری که بر اساس وضعیت احراز هویت کاربر، استفاده از CDN بوت استرپ برای راه‌اندازی آسان‌تر، و ترکیب فرم‌های جنگو-ترد برای بهبود استایل فرم تطبیق می‌یابد، بحث می‌کند. این فصل بر اهمیت سازمان‌دهی کد از طریق برنامه‌های اختصاصی تأکید می‌کند و راهنمایی در مورد سفارشی‌سازی فرم‌های احراز هویت کاربر برای تجربه کاربری بهتر ارائه می‌دهد.",
            },
        },
        // 11
        {
            "ChapterName": "Password Change and Reset",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on implementing password change and reset functionalities in a Django application. It details the creation of custom templates for password reset and change processes, including forms for user input and confirmation messages. The chapter also emphasizes the importance of email configuration for password resets, utilizing Django's console backend for testing and planning to integrate SendGrid for production email delivery.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Implementierung von Funktionen zum Ändern und Zurücksetzen von Passwörtern in einer Django-Anwendung. Es beschreibt ausführlich die Erstellung von benutzerdefinierten Vorlagen für Prozesse zum Zurücksetzen und Ändern von Passwörtern, einschließlich Formularen für Benutzereingaben und Bestätigungsnachrichten. Das Kapitel betont auch die Bedeutung der E-Mail-Konfiguration für das Zurücksetzen von Passwörtern und verwendet das Konsolen-Backend von Django zum Testen und Planen der Integration von SendGrid für die E-Mail-Zustellung in der Produktion.",
                // Chinese
                "中国人": "本章重点介绍如何在 Django 应用程序中实现密码更改和重置功能。它详细介绍了如何创建用于密码重置和更改流程的自定义模板，包括用于用户输入和确认消息的表单。本章还强调了电子邮件配置对于密码重置的重要性，利用 Django 的控制台后端进行测试，并计划集成 SendGrid 以进行生产电子邮件传递。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется реализации функций изменения и сброса пароля в приложении Django. В ней подробно описывается создание пользовательских шаблонов для процессов изменения и сброса пароля, включая формы для ввода данных пользователем и подтверждающих сообщений. В главе также подчеркивается важность конфигурации электронной почты для сброса пароля с использованием бэкэнда консоли Django для тестирования и планирования интеграции SendGrid для доставки электронной почты в производство.",
                // French
                "Français": "Ce chapitre se concentre sur l'implémentation des fonctionnalités de changement et de réinitialisation de mot de passe dans une application Django. Il détaille la création de modèles personnalisés pour les processus de réinitialisation et de modification de mot de passe, y compris les formulaires de saisie utilisateur et les messages de confirmation. Le chapitre souligne également l'importance de la configuration de la messagerie électronique pour les réinitialisations de mot de passe, en utilisant le backend de la console Django pour les tests et la planification de l'intégration de SendGrid pour la distribution de courriers électroniques en production.",
                // Japanese
                "日本語": "この章では、Django アプリケーションでパスワードの変更とリセットの機能を実装することに焦点を当てています。ユーザー入力や確認メッセージ用のフォームを含む、パスワードのリセットと変更のプロセス用のカスタム テンプレートの作成について詳しく説明します。また、この章では、パスワードのリセットのための電子メール構成の重要性を強調し、Django のコンソール バックエンドを使用してテストを行い、SendGrid を統合して本番環境の電子メール配信を計画します。",
                // Korean
                "한국인": "이 장에서는 Django 애플리케이션에서 비밀번호 변경 및 재설정 기능을 구현하는 데 중점을 둡니다. 사용자 입력 및 확인 메시지를 위한 양식을 포함하여 비밀번호 재설정 및 변경 프로세스를 위한 사용자 지정 템플릿을 만드는 방법을 자세히 설명합니다. 또한 이 장에서는 비밀번호 재설정을 위한 이메일 구성의 중요성을 강조하고, 테스트 및 계획을 위해 Django의 콘솔 백엔드를 활용하여 SendGrid를 프로덕션 이메일 전달에 통합합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la implementación de funciones de cambio y restablecimiento de contraseñas en una aplicación Django. Detalla la creación de plantillas personalizadas para procesos de cambio y restablecimiento de contraseñas, incluidos formularios para la entrada de datos del usuario y mensajes de confirmación. El capítulo también enfatiza la importancia de la configuración del correo electrónico para el restablecimiento de contraseñas, utilizando el backend de la consola de Django para realizar pruebas y planificar la integración de SendGrid para la entrega de correo electrónico en producción.",
                // Hindi
                "हिंदी": "यह अध्याय Django एप्लिकेशन में पासवर्ड परिवर्तन और रीसेट कार्यक्षमताओं को लागू करने पर केंद्रित है। यह पासवर्ड रीसेट और परिवर्तन प्रक्रियाओं के लिए कस्टम टेम्पलेट्स के निर्माण का विवरण देता है, जिसमें उपयोगकर्ता इनपुट और पुष्टिकरण संदेशों के लिए फ़ॉर्म शामिल हैं। यह अध्याय पासवर्ड रीसेट के लिए ईमेल कॉन्फ़िगरेशन के महत्व पर भी जोर देता है, उत्पादन ईमेल डिलीवरी के लिए सेंडग्रिड को एकीकृत करने के लिए परीक्षण और योजना के लिए Django के कंसोल बैकएंड का उपयोग करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na implementação de funcionalidades de alteração e redefinição de palavras-passe numa aplicação Django. Detalha a criação de modelos personalizados para processos de redefinição e alteração de palavras-passe, incluindo formulários para entrada do utilizador e mensagens de confirmação. O capítulo também enfatiza a importância da configuração de e-mail para redefinições de palavras-passe, utilizando o backend da consola Django para testar e planear a integração do SendGrid para a entrega de e-mail de produção.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি একটি জ্যাঙ্গো অ্যাপ্লিকেশনে পাসওয়ার্ড পরিবর্তন এবং রিসেট কার্যকারিতা বাস্তবায়নের উপর দৃষ্টি নিবদ্ধ করে। এটি ব্যবহারকারীর ইনপুট এবং নিশ্চিতকরণ বার্তাগুলির ফর্ম সহ পাসওয়ার্ড রিসেট এবং পরিবর্তন প্রক্রিয়াগুলির জন্য কাস্টম টেমপ্লেট তৈরির বিবরণ দেয়৷ অধ্যায়টি পাসওয়ার্ড রিসেট করার জন্য ইমেল কনফিগারেশনের গুরুত্বের উপর জোর দেয়, পরীক্ষার জন্য জ্যাঙ্গোর কনসোল ব্যাকএন্ড ব্যবহার করে এবং উৎপাদন ইমেল বিতরণের জন্য সেন্ডগ্রিডকে সংহত করার পরিকল্পনা করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تنفيذ وظائف تغيير كلمة المرور وإعادة تعيينها في تطبيق Django. ويوضح بالتفصيل إنشاء قوالب مخصصة لعمليات إعادة تعيين كلمة المرور وتغييرها، بما في ذلك نماذج لإدخال المستخدم ورسائل التأكيد. ويؤكد الفصل أيضًا على أهمية تكوين البريد الإلكتروني لإعادة تعيين كلمة المرور، والاستفادة من واجهة وحدة التحكم الخلفية في Django للاختبار والتخطيط لدمج SendGrid لتسليم البريد الإلكتروني للإنتاج.",
                // Persian
                "فارسی": "این فصل بر پیاده سازی قابلیت های تغییر رمز عبور و تنظیم مجدد در یک برنامه جنگو تمرکز دارد. جزئیات ایجاد الگوهای سفارشی برای بازنشانی رمز عبور و فرآیندهای تغییر، از جمله فرم‌هایی برای ورودی کاربر و پیام‌های تأیید. این فصل همچنین بر اهمیت پیکربندی ایمیل برای بازنشانی رمز عبور، استفاده از پشتیبان کنسول جنگو برای آزمایش و برنامه ریزی برای ادغام SendGrid برای تحویل ایمیل تولیدی تاکید می کند.",
            },
        },
        // 12
        {
            "ChapterName": "Email",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on integrating email functionality into a Django application using SendGrid as the email provider. It guides users through the process of setting up user authentication, configuring SMTP settings, and customizing email templates for actions like password resets. The chapter emphasizes the importance of personalizing email content and concludes by demonstrating a complete user authentication flow, enabling users to sign up, log in, and manage their passwords effectively.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Integration der E-Mail-Funktionalität in eine Django-Anwendung mit SendGrid als E-Mail-Anbieter. Es führt Benutzer durch den Prozess der Einrichtung der Benutzerauthentifizierung, der Konfiguration der SMTP-Einstellungen und der Anpassung von E-Mail-Vorlagen für Aktionen wie das Zurücksetzen von Passwörtern. Das Kapitel betont die Bedeutung der Personalisierung von E-Mail-Inhalten und schließt mit der Demonstration eines vollständigen Benutzerauthentifizierungsablaufs, der es Benutzern ermöglicht, sich anzumelden, einzuloggen und ihre Passwörter effektiv zu verwalten.",
                // Chinese
                "中国人": "本章重点介绍如何使用 SendGrid 作为电子邮件提供程序将电子邮件功能集成到 Django 应用程序中。它指导用户完成设置用户身份验证、配置 SMTP 设置以及自定义电子邮件模板以执行密码重置等操作的过程。本章强调了个性化电子邮件内容的重要性，并最后演示了完整的用户身份验证流程，使用户能够有效地注册、登录和管理密码。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется интеграции функциональности электронной почты в приложение Django с использованием SendGrid в качестве поставщика электронной почты. Она проводит пользователей через процесс настройки аутентификации пользователя, настройки параметров SMTP и настройки шаблонов электронной почты для таких действий, как сброс пароля. В главе подчеркивается важность персонализации содержимого электронной почты, а в заключение демонстрируется полный поток аутентификации пользователя, позволяющий пользователям регистрироваться, входить в систему и эффективно управлять своими паролями.",
                // French
                "Français": "Ce chapitre se concentre sur l'intégration de la fonctionnalité de messagerie électronique dans une application Django en utilisant SendGrid comme fournisseur de messagerie. Il guide les utilisateurs tout au long du processus de configuration de l'authentification utilisateur, de configuration des paramètres SMTP et de personnalisation des modèles de courrier électronique pour des actions telles que la réinitialisation des mots de passe. Le chapitre souligne l'importance de la personnalisation du contenu des courriers électroniques et se termine par la démonstration d'un flux d'authentification utilisateur complet, permettant aux utilisateurs de s'inscrire, de se connecter et de gérer efficacement leurs mots de passe.",
                // Japanese
                "日本語": "この章では、メール プロバイダーとして SendGrid を使用して、メール機能を Django アプリケーションに統合することに焦点を当てています。ユーザー認証の設定、SMTP 設定の構成、パスワード リセットなどのアクション用のメール テンプレートのカスタマイズのプロセスをガイドします。この章では、メール コンテンツをパーソナライズすることの重要性を強調し、最後に完全なユーザー認証フローを示して、ユーザーがサインアップ、ログイン、パスワードを効果的に管理できるようにします。",
                // Korean
                "한국인": "이 장에서는 SendGrid를 이메일 공급자로 사용하여 Django 애플리케이션에 이메일 기능을 통합하는 데 중점을 둡니다. 이 장은 사용자에게 사용자 인증 설정, SMTP 설정 구성, 비밀번호 재설정과 같은 작업에 대한 이메일 템플릿 사용자 지정 프로세스를 안내합니다. 이 장에서는 이메일 콘텐츠를 개인화하는 것의 중요성을 강조하고, 사용자가 가입, 로그인 및 비밀번호를 효과적으로 관리할 수 있도록 하는 전체 사용자 인증 흐름을 보여줌으로써 마무리합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la integración de la funcionalidad de correo electrónico en una aplicación Django que utiliza SendGrid como proveedor de correo electrónico. Guía a los usuarios a través del proceso de configuración de la autenticación de usuarios, la configuración de los parámetros SMTP y la personalización de las plantillas de correo electrónico para acciones como el restablecimiento de contraseñas. El capítulo enfatiza la importancia de personalizar el contenido del correo electrónico y concluye demostrando un flujo de autenticación de usuarios completo, que permite a los usuarios registrarse, iniciar sesión y administrar sus contraseñas de manera eficaz.",
                // Hindi
                "हिंदी": "यह अध्याय ईमेल प्रदाता के रूप में SendGrid का उपयोग करके Django एप्लिकेशन में ईमेल कार्यक्षमता को एकीकृत करने पर केंद्रित है। यह उपयोगकर्ता प्रमाणीकरण सेट करने, SMTP सेटिंग कॉन्फ़िगर करने और पासवर्ड रीसेट जैसी क्रियाओं के लिए ईमेल टेम्प्लेट को अनुकूलित करने की प्रक्रिया के माध्यम से उपयोगकर्ताओं का मार्गदर्शन करता है। अध्याय ईमेल सामग्री को वैयक्तिकृत करने के महत्व पर जोर देता है और एक पूर्ण उपयोगकर्ता प्रमाणीकरण प्रवाह का प्रदर्शन करके समाप्त होता है, जिससे उपयोगकर्ता साइन अप, लॉग इन और अपने पासवर्ड को प्रभावी ढंग से प्रबंधित कर सकते हैं।",
                // Portuguese
                "Português": "Este capítulo centra-se na integração da funcionalidade de correio eletrónico numa aplicação Django utilizando o SendGrid como fornecedor de correio eletrónico. Orienta os utilizadores no processo de configuração da autenticação do utilizador, definição das definições SMTP e personalização de modelos de e-mail para ações como redefinições de palavras-passe. O capítulo enfatiza a importância de personalizar o conteúdo do e-mail e conclui demonstrando um fluxo completo de autenticação do utilizador, permitindo que os utilizadores se inscrevam, iniciem sessão e gerenciem as suas palavras-passe de forma eficaz.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ইমেল প্রদানকারী হিসাবে সেন্ডগ্রিড ব্যবহার করে একটি জ্যাঙ্গো অ্যাপ্লিকেশনে ইমেল কার্যকারিতা একীভূত করার উপর দৃষ্টি নিবদ্ধ করে। এটি ব্যবহারকারীদেরকে ব্যবহারকারীর প্রমাণীকরণ সেট আপ করার, SMTP সেটিংস কনফিগার করার এবং পাসওয়ার্ড রিসেটের মতো ক্রিয়াকলাপের জন্য ইমেল টেমপ্লেট কাস্টমাইজ করার প্রক্রিয়ার মাধ্যমে গাইড করে। অধ্যায়টি ইমেল বিষয়বস্তু ব্যক্তিগতকরণের গুরুত্বের উপর জোর দেয় এবং একটি সম্পূর্ণ ব্যবহারকারীর প্রমাণীকরণ প্রবাহ প্রদর্শন করে, ব্যবহারকারীদের সাইন আপ করতে, লগ ইন করতে এবং কার্যকরভাবে তাদের পাসওয়ার্ড পরিচালনা করতে সক্ষম করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على دمج وظائف البريد الإلكتروني في تطبيق Django باستخدام SendGrid كمزود للبريد الإلكتروني. ويرشد المستخدمين خلال عملية إعداد مصادقة المستخدم، وتكوين إعدادات SMTP، وتخصيص قوالب البريد الإلكتروني لإجراءات مثل إعادة تعيين كلمة المرور. ويؤكد الفصل على أهمية تخصيص محتوى البريد الإلكتروني ويختتم بإظهار تدفق مصادقة المستخدم الكامل، مما يتيح للمستخدمين التسجيل وتسجيل الدخول وإدارة كلمات المرور الخاصة بهم بشكل فعال.",
                // Persian
                "فارسی": "این فصل بر ادغام عملکرد ایمیل در برنامه جنگو با استفاده از SendGrid به عنوان ارائه دهنده ایمیل تمرکز دارد. کاربران را از طریق فرآیند تنظیم احراز هویت کاربر، پیکربندی تنظیمات SMTP و سفارشی کردن قالب های ایمیل برای اقداماتی مانند بازنشانی رمز عبور راهنمایی می کند. این فصل بر اهمیت شخصی‌سازی محتوای ایمیل تأکید می‌کند و با نمایش یک جریان کامل احراز هویت کاربر، به کاربران امکان می‌دهد ثبت‌نام، وارد شوند و رمزهای عبور خود را به طور مؤثر مدیریت کنند، به پایان می‌رسد.",
            },
        },
        // 13
        {
            "ChapterName": "Newspaper App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter of the Newspaper App focuses on implementing CRUD functionality for articles using Django. It covers the creation of views and templates for listing, detailing, editing, and deleting articles, along with the necessary URL configurations. The chapter also introduces a create page for new articles and emphasizes the importance of maintaining database integrity by not permanently deleting entries, while highlighting the need for future enhancements in permissions and authorizations to secure the application.",
                // German
                "Deutsch": "In diesem Kapitel der Zeitungs-App geht es um die Implementierung der CRUD-Funktionalität für Artikel mit Django. Es behandelt die Erstellung von Ansichten und Vorlagen zum Auflisten, Detaillieren, Bearbeiten und Löschen von Artikeln sowie die erforderlichen URL-Konfigurationen. Das Kapitel führt auch eine Erstellungsseite für neue Artikel ein und betont, wie wichtig es ist, die Datenbankintegrität aufrechtzuerhalten, indem Einträge nicht dauerhaft gelöscht werden. Gleichzeitig wird die Notwendigkeit zukünftiger Verbesserungen bei Berechtigungen und Autorisierungen zur Sicherung der Anwendung hervorgehoben.",
                // Chinese
                "中国人": "报纸应用程序的这一章重点介绍如何使用 Django 实现文章的 CRUD 功能。它涵盖了创建用于列出、详细说明、编辑和删除文章的视图和模板，以及必要的 URL 配置。本章还介绍了新文章的创建页面，并强调了通过不永久删除条目来维护数据库完整性的重要性，同时强调了未来需要增强权限和授权以保护应用程序的安全。",
                // Russian
                "Русский": "В этой главе приложения Newspaper основное внимание уделяется реализации функциональности CRUD для статей с использованием Django. Она охватывает создание представлений и шаблонов для перечисления, детализации, редактирования и удаления статей, а также необходимые конфигурации URL. В главе также представлена ​​страница создания новых статей и подчеркивается важность поддержания целостности базы данных путем отказа от постоянного удаления записей, а также подчеркивается необходимость будущих улучшений разрешений и авторизаций для защиты приложения.",
                // French
                "Français": "Ce chapitre de l'application Newspaper se concentre sur l'implémentation de la fonctionnalité CRUD pour les articles à l'aide de Django. Il couvre la création de vues et de modèles pour répertorier, détailler, modifier et supprimer des articles, ainsi que les configurations d'URL nécessaires. Le chapitre présente également une page de création pour les nouveaux articles et souligne l'importance de maintenir l'intégrité de la base de données en ne supprimant pas définitivement les entrées, tout en soulignant la nécessité d'améliorations futures des autorisations et des permissions pour sécuriser l'application.",
                // Japanese
                "日本語": "新聞アプリのこの章では、Django を使用して記事の CRUD 機能を実装することに焦点を当てています。記事の一覧表示、詳細表示、編集、削除用のビューとテンプレートの作成、および必要な URL 構成について説明します。また、この章では、新しい記事の作成ページを紹介し、エントリを永久に削除しないことでデータベースの整合性を維持することの重要性を強調するとともに、アプリケーションを保護するために権限と承認を将来的に強化する必要があることを強調します。",
                // Korean
                "한국인": "이 신문 앱의 챕터는 Django를 사용하여 기사에 대한 CRUD 기능을 구현하는 데 중점을 둡니다. 기사 나열, 세부 정보, 편집 및 삭제를 위한 뷰와 템플릿 생성과 필요한 URL 구성을 다룹니다. 이 챕터에서는 또한 새 기사에 대한 생성 페이지를 소개하고 항목을 영구적으로 삭제하지 않음으로써 데이터베이스 무결성을 유지하는 것의 중요성을 강조하는 동시에 애플리케이션을 보호하기 위한 권한 및 권한 부여의 향후 개선 필요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo de la aplicación Newspaper se centra en la implementación de la funcionalidad CRUD para artículos utilizando Django. Abarca la creación de vistas y plantillas para listar, detallar, editar y eliminar artículos, junto con las configuraciones de URL necesarias. El capítulo también presenta una página de creación para nuevos artículos y enfatiza la importancia de mantener la integridad de la base de datos al no eliminar entradas de forma permanente, al tiempo que destaca la necesidad de futuras mejoras en los permisos y autorizaciones para proteger la aplicación.",
                // Hindi
                "हिंदी": "न्यूज़पेपर ऐप का यह अध्याय Django का उपयोग करके लेखों के लिए CRUD कार्यक्षमता को लागू करने पर केंद्रित है। इसमें आवश्यक URL कॉन्फ़िगरेशन के साथ-साथ लेखों को सूचीबद्ध करने, विवरण देने, संपादित करने और हटाने के लिए दृश्य और टेम्पलेट्स के निर्माण को शामिल किया गया है। अध्याय नए लेखों के लिए एक क्रिएट पेज भी पेश करता है और प्रविष्टियों को स्थायी रूप से न हटाकर डेटाबेस अखंडता को बनाए रखने के महत्व पर जोर देता है, जबकि एप्लिकेशन को सुरक्षित करने के लिए अनुमतियों और प्राधिकरणों में भविष्य के संवर्द्धन की आवश्यकता पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo da aplicação Newspaper centra-se na implementação da funcionalidade CRUD para artigos utilizando Django. Abrange a criação de visualizações e modelos para listar, detalhar, editar e eliminar artigos, juntamente com as definições de URL necessárias. O capítulo introduz também uma página de criação para novos artigos e enfatiza a importância de manter a integridade da base de dados, não eliminando as entradas permanentemente, ao mesmo tempo que destaca a necessidade de melhorias futuras nas permissões e autorizações para proteger a aplicação.",
                // Bengali
                "বাংলা": "নিউজপেপার অ্যাপের এই অধ্যায়টি জ্যাঙ্গো ব্যবহার করে নিবন্ধগুলির জন্য CRUD কার্যকারিতা বাস্তবায়নের উপর দৃষ্টি নিবদ্ধ করে। এটি প্রয়োজনীয় ইউআরএল কনফিগারেশন সহ নিবন্ধগুলি তালিকা, বিশদ বিবরণ, সম্পাদনা এবং মুছে ফেলার জন্য ভিউ এবং টেমপ্লেট তৈরি করে। অধ্যায়টি নতুন নিবন্ধগুলির জন্য একটি তৈরি পৃষ্ঠারও প্রবর্তন করে এবং স্থায়ীভাবে এন্ট্রি মুছে না দিয়ে ডাটাবেসের অখণ্ডতা বজায় রাখার গুরুত্বের উপর জোর দেয়, যেখানে অ্যাপ্লিকেশনটি সুরক্ষিত করার জন্য অনুমতি এবং অনুমোদনের ভবিষ্যতের উন্নতির প্রয়োজনীয়তা তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل من تطبيق الصحيفة على تنفيذ وظيفة CRUD للمقالات باستخدام Django. ويغطي إنشاء العروض والقوالب لإدراج المقالات وتفصيلها وتحريرها وحذفها، إلى جانب تكوينات URL الضرورية. كما يقدم الفصل صفحة إنشاء للمقالات الجديدة ويؤكد على أهمية الحفاظ على سلامة قاعدة البيانات من خلال عدم حذف الإدخالات بشكل دائم، مع تسليط الضوء على الحاجة إلى تحسينات مستقبلية في الأذونات والتراخيص لتأمين التطبيق.",
                // Persian
                "فارسی": "این فصل از برنامه روزنامه بر اجرای عملکرد CRUD برای مقالات با استفاده از جنگو تمرکز دارد. ایجاد نماها و الگوها برای فهرست کردن، جزئیات، ویرایش، و حذف مقالات، همراه با تنظیمات URL لازم را پوشش می دهد. این فصل همچنین یک صفحه ایجاد برای مقالات جدید معرفی می‌کند و بر اهمیت حفظ یکپارچگی پایگاه داده با حذف نشدن دائمی ورودی‌ها تأکید می‌کند، در حالی که نیاز به پیشرفت‌های آینده در مجوزها و مجوزها برای ایمن کردن برنامه را برجسته می‌کند.",
            },
        },
        // 14
        {
            "ChapterName": "Permissions and Authorization",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on implementing permissions and authorization in a newspaper website using Django. It distinguishes between authorization, which restricts access to certain features based on user roles, and authentication, which involves user registration and login. The chapter demonstrates how to use built-in Django mixins to ensure that only logged-in users can create, view, edit, or delete articles, and that only the authors of articles can modify their own content. Overall, it emphasizes the importance of securing user access and managing permissions effectively within the application.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Implementierung von Berechtigungen und Autorisierungen auf einer Zeitungswebsite mit Django. Dabei wird zwischen Autorisierung unterschieden, die den Zugriff auf bestimmte Funktionen basierend auf Benutzerrollen einschränkt, und Authentifizierung, die Benutzerregistrierung und -anmeldung umfasst. Das Kapitel zeigt, wie integrierte Django-Mixins verwendet werden, um sicherzustellen, dass nur angemeldete Benutzer Artikel erstellen, anzeigen, bearbeiten oder löschen können und dass nur die Autoren von Artikeln ihre eigenen Inhalte ändern können. Insgesamt wird betont, wie wichtig es ist, den Benutzerzugriff zu sichern und Berechtigungen innerhalb der Anwendung effektiv zu verwalten.",
                // Chinese
                "中国人": "本章重点介绍如何使用 Django 在报纸网站中实现权限和授权。它区分了授权（根据用户角色限制对某些功能的访问）和身份验证（涉及用户注册和登录）。本章演示了如何使用内置的 Django mixins 来确保只有登录的用户才能创建、查看、编辑或删除文章，并且只有文章的作者才能修改自己的内容。总的来说，它强调了在应用程序内保护用户访问和有效管理权限的重要性。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется реализации разрешений и авторизации на сайте газеты с использованием Django. В ней проводится различие между авторизацией, которая ограничивает доступ к определенным функциям на основе ролей пользователей, и аутентификацией, которая включает регистрацию и вход пользователя. В главе показано, как использовать встроенные миксины Django, чтобы гарантировать, что только вошедшие в систему пользователи могут создавать, просматривать, редактировать или удалять статьи, и что только авторы статей могут изменять свой собственный контент. В целом, в ней подчеркивается важность защиты доступа пользователей и эффективного управления разрешениями в приложении.",
                // French
                "Français": "Ce chapitre se concentre sur la mise en œuvre des autorisations et des permissions sur un site Web de journal à l'aide de Django. Il fait la distinction entre l'autorisation, qui restreint l'accès à certaines fonctionnalités en fonction des rôles des utilisateurs, et l'authentification, qui implique l'enregistrement et la connexion des utilisateurs. Le chapitre montre comment utiliser les mixins Django intégrés pour garantir que seuls les utilisateurs connectés peuvent créer, afficher, modifier ou supprimer des articles, et que seuls les auteurs des articles peuvent modifier leur propre contenu. Dans l'ensemble, il souligne l'importance de sécuriser l'accès des utilisateurs et de gérer efficacement les permissions au sein de l'application.",
                // Japanese
                "日本語": "この章では、Django を使用して新聞 Web サイトに権限と承認を実装することに焦点を当てています。ユーザーの役割に基づいて特定の機能へのアクセスを制限する承認と、ユーザー登録とログインを伴う認証を区別します。この章では、組み込みの Django ミックスインを使用して、ログインしたユーザーのみが記事を作成、表示、編集、または削除できるようにし、記事の作成者のみが自分のコンテンツを変更できるようにする方法を示します。全体として、アプリケーション内でユーザー アクセスを保護し、権限を効果的に管理することの重要性を強調しています。",
                // Korean
                "한국인": "이 장에서는 Django를 사용하여 신문 웹사이트에서 권한과 승인을 구현하는 데 중점을 둡니다. 사용자 역할에 따라 특정 기능에 대한 액세스를 제한하는 승인과 사용자 등록 및 로그인을 포함하는 인증을 구분합니다. 이 장에서는 기본 제공 Django 믹스인을 사용하여 로그인한 사용자만 기사를 만들고, 보고, 편집하거나 삭제할 수 있고 기사 작성자만 자신의 콘텐츠를 수정할 수 있도록 하는 방법을 보여줍니다. 전반적으로 애플리케이션 내에서 사용자 액세스를 보호하고 권한을 효과적으로 관리하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la implementación de permisos y autorizaciones en un sitio web de periódicos utilizando Django. Distingue entre autorización, que restringe el acceso a ciertas funciones en función de los roles de los usuarios, y autenticación, que implica el registro y el inicio de sesión del usuario. El capítulo demuestra cómo utilizar los mixins integrados de Django para garantizar que solo los usuarios que hayan iniciado sesión puedan crear, ver, editar o eliminar artículos, y que solo los autores de los artículos puedan modificar su propio contenido. En general, enfatiza la importancia de proteger el acceso de los usuarios y administrar los permisos de manera eficaz dentro de la aplicación.",
                // Hindi
                "हिंदी": "यह अध्याय Django का उपयोग करके समाचार पत्र की वेबसाइट में अनुमतियों और प्राधिकरण को लागू करने पर केंद्रित है। यह प्राधिकरण के बीच अंतर करता है, जो उपयोगकर्ता भूमिकाओं के आधार पर कुछ सुविधाओं तक पहुँच को प्रतिबंधित करता है, और प्रमाणीकरण, जिसमें उपयोगकर्ता पंजीकरण और लॉगिन शामिल है। यह अध्याय दर्शाता है कि अंतर्निहित Django मिक्सिन का उपयोग कैसे करें ताकि यह सुनिश्चित हो सके कि केवल लॉग-इन उपयोगकर्ता ही लेख बना सकते हैं, देख सकते हैं, संपादित कर सकते हैं या हटा सकते हैं, और केवल लेखों के लेखक ही अपनी सामग्री को संशोधित कर सकते हैं। कुल मिलाकर, यह उपयोगकर्ता की पहुँच को सुरक्षित करने और एप्लिकेशन के भीतर अनुमतियों को प्रभावी ढंग से प्रबंधित करने के महत्व पर जोर देता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na implementação de permissões e autorizações num site de jornal utilizando Django. Distingue entre a autorização, que restringe o acesso a determinados recursos com base nas funções do utilizador, e a autenticação, que envolve o registo e o login do utilizador. O capítulo demonstra como utilizar mixins integrados do Django para garantir que apenas os utilizadores com sessão iniciada podem criar, visualizar, editar ou eliminar artigos, e que apenas os autores dos artigos podem modificar o seu próprio conteúdo. No geral, enfatiza a importância de proteger o acesso do utilizador e gerir as permissões de forma eficaz dentro da aplicação.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি জ্যাঙ্গো ব্যবহার করে সংবাদপত্রের ওয়েবসাইটে অনুমতি এবং অনুমোদন বাস্তবায়নের উপর দৃষ্টি নিবদ্ধ করে। এটি অনুমোদনের মধ্যে পার্থক্য করে, যা ব্যবহারকারীর ভূমিকার উপর ভিত্তি করে নির্দিষ্ট বৈশিষ্ট্যগুলিতে অ্যাক্সেস সীমাবদ্ধ করে, এবং প্রমাণীকরণ, যার মধ্যে ব্যবহারকারীর নিবন্ধন এবং লগইন জড়িত। অধ্যায়টি প্রদর্শন করে যে কীভাবে বিল্ট-ইন জ্যাঙ্গো মিক্সিন ব্যবহার করতে হয় তা নিশ্চিত করতে যে শুধুমাত্র লগ-ইন করা ব্যবহারকারীরাই নিবন্ধ তৈরি করতে, দেখতে, সম্পাদনা করতে বা মুছে ফেলতে পারেন এবং শুধুমাত্র নিবন্ধের লেখকরাই তাদের নিজস্ব বিষয়বস্তু পরিবর্তন করতে পারেন। সামগ্রিকভাবে, এটি ব্যবহারকারীর অ্যাক্সেস সুরক্ষিত করার এবং অ্যাপ্লিকেশনের মধ্যে কার্যকরভাবে অনুমতিগুলি পরিচালনা করার গুরুত্বের উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تنفيذ الأذونات والتفويضات في موقع ويب صحيفة باستخدام Django. ويميز بين التفويض، الذي يقيد الوصول إلى ميزات معينة بناءً على أدوار المستخدم، والمصادقة، التي تتضمن تسجيل المستخدم وتسجيل الدخول. ويوضح الفصل كيفية استخدام مزيجات Django المضمنة لضمان أن المستخدمين المسجلين فقط يمكنهم إنشاء المقالات أو عرضها أو تحريرها أو حذفها، وأن مؤلفي المقالات فقط يمكنهم تعديل محتواهم الخاص. وبشكل عام، يؤكد على أهمية تأمين وصول المستخدم وإدارة الأذونات بشكل فعال داخل التطبيق.",
                // Persian
                "فارسی": "این فصل بر اجرای مجوزها و مجوزها در وب سایت روزنامه با استفاده از جنگو تمرکز دارد. بین مجوز، که دسترسی به ویژگی‌های خاص را بر اساس نقش‌های کاربر محدود می‌کند، و احراز هویت، که شامل ثبت نام و ورود کاربر است، تمایز قائل می‌شود. این فصل نحوه استفاده از میکس‌های داخلی جنگو را نشان می‌دهد تا اطمینان حاصل شود که فقط کاربرانی که وارد سیستم شده‌اند می‌توانند مقاله‌ها را ایجاد، مشاهده، ویرایش یا حذف کنند و فقط نویسندگان مقاله‌ها می‌توانند محتوای خود را تغییر دهند. به طور کلی، بر اهمیت امنیت دسترسی کاربر و مدیریت مؤثر مجوزها در برنامه تأکید می کند.",
            },
        },
        // 15
        {
            "ChapterName": "Comments",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on implementing a comments feature in a Django-based Newspaper app. It details the creation of a model linked to articles, the development of a for user input, and the necessary updates to views and templates to display comments. The chapter emphasizes the importance of handling both GET and POST requests for comments, ensuring proper context management, and concludes with the app's readiness for deployment, highlighting the need for improved security and performance in the deployment process.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Implementierung einer Kommentarfunktion in einer Django-basierten Zeitungs-App. Es beschreibt detailliert die Erstellung eines mit Artikeln verknüpften Modells, die Entwicklung einer Benutzereingabe und die erforderlichen Aktualisierungen von Ansichten und Vorlagen zur Anzeige von Kommentaren. Das Kapitel betont die Bedeutung der Verarbeitung von GET- und POST-Anfragen für Kommentare und die Gewährleistung einer ordnungsgemäßen Kontextverwaltung. Abschließend wird die Einsatzbereitschaft der App erläutert, wobei die Notwendigkeit verbesserter Sicherheit und Leistung im Bereitstellungsprozess hervorgehoben wird.",
                // Chinese
                "中国人": "本章重点介绍如何在基于 Django 的 Newspaper 应用中实现评论功能。它详细介绍了如何创建链接到文章的模型、如何开发用于用户输入的模型以及对视图和模板进行必要的更新以显示评论。本章强调了处理评论的 GET 和 POST 请求的重要性，确保正确的上下文管理，最后介绍了应用的部署准备情况，强调了在部署过程中需要提高安全性和性能。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется реализации функции комментариев в приложении Newspaper на основе Django. В ней подробно описывается создание модели, связанной со статьями, разработка для ввода данных пользователем и необходимые обновления представлений и шаблонов для отображения комментариев. В главе подчеркивается важность обработки как запросов GET, так и POST для комментариев, обеспечения надлежащего управления контекстом, и в заключение рассматривается готовность приложения к развертыванию, подчеркивая необходимость повышения безопасности и производительности в процессе развертывания.",
                // French
                "Français": "Ce chapitre se concentre sur l'implémentation d'une fonctionnalité de commentaires dans une application Newspaper basée sur Django. Il détaille la création d'un modèle lié aux articles, le développement d'un modèle pour la saisie utilisateur et les mises à jour nécessaires des vues et des modèles pour afficher les commentaires. Le chapitre souligne l'importance de gérer les requêtes GET et POST pour les commentaires, d'assurer une gestion appropriée du contexte et se termine par la préparation de l'application au déploiement, soulignant la nécessité d'améliorer la sécurité et les performances dans le processus de déploiement.",
                // Japanese
                "日本語": "この章では、Django ベースの Newspaper アプリにコメント機能を実装することに焦点を当てています。記事にリンクされたモデルの作成、ユーザー入力用の の開発、コメントを表示するためのビューとテンプレートの必要な更新について詳しく説明します。この章では、コメントの GET リクエストと POST リクエストの両方を処理し、適切なコンテキスト管理を確保することの重要性を強調し、最後にアプリの展開準備について説明して、展開プロセスにおけるセキュリティとパフォーマンスの向上の必要性を強調します。",
                // Korean
                "한국인": "이 장에서는 Django 기반 신문 앱에서 댓글 기능을 구현하는 데 중점을 둡니다. 기사에 연결된 모델 생성, 사용자 입력을 위한 개발, 댓글을 표시하기 위한 뷰와 템플릿에 대한 필요한 업데이트에 대해 자세히 설명합니다. 이 장에서는 댓글에 대한 GET 및 POST 요청을 모두 처리하고 적절한 컨텍스트 관리를 보장하는 것의 중요성을 강조하고 배포 프로세스에서 보안과 성능을 개선해야 할 필요성을 강조하면서 앱의 배포 준비 상태로 마무리합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la implementación de una función de comentarios en una aplicación de periódico basada en Django. Detalla la creación de un modelo vinculado a los artículos, el desarrollo de una base de datos para la entrada de los usuarios y las actualizaciones necesarias de las vistas y las plantillas para mostrar los comentarios. El capítulo enfatiza la importancia de manejar las solicitudes GET y POST para los comentarios, asegurando una gestión adecuada del contexto, y concluye con la preparación de la aplicación para la implementación, destacando la necesidad de mejorar la seguridad y el rendimiento en el proceso de implementación.",
                // Hindi
                "हिंदी": "यह अध्याय Django-आधारित न्यूज़पेपर ऐप में टिप्पणी सुविधा को लागू करने पर केंद्रित है। इसमें लेखों से जुड़े मॉडल के निर्माण, उपयोगकर्ता इनपुट के लिए एक मॉडल के विकास और टिप्पणियों को प्रदर्शित करने के लिए दृश्यों और टेम्पलेट्स के लिए आवश्यक अपडेट का विवरण दिया गया है। अध्याय टिप्पणियों के लिए GET और POST दोनों अनुरोधों को संभालने, उचित संदर्भ प्रबंधन सुनिश्चित करने के महत्व पर जोर देता है, और तैनाती के लिए ऐप की तत्परता के साथ समाप्त होता है, तैनाती प्रक्रिया में बेहतर सुरक्षा और प्रदर्शन की आवश्यकता पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na implementação de uma funcionalidade de comentários numa aplicação de jornal baseada em Django. Detalha a criação de um modelo ligado a artigos, o desenvolvimento de um modelo para a entrada do utilizador e as atualizações necessárias nas visualizações e modelos para a exibição de comentários. O capítulo enfatiza a importância de lidar com pedidos de comentários GET e POST, garantindo a gestão adequada do contexto, e conclui com a prontidão da aplicação para a implementação, destacando a necessidade de maior segurança e desempenho no processo de implementação.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি জ্যাঙ্গো-ভিত্তিক সংবাদপত্র অ্যাপে একটি মন্তব্য বৈশিষ্ট্য বাস্তবায়নের উপর দৃষ্টি নিবদ্ধ করে। এটি নিবন্ধগুলির সাথে লিঙ্কযুক্ত একটি মডেল তৈরি, ব্যবহারকারীর ইনপুটের জন্য একটি বিকাশ এবং মন্তব্যগুলি প্রদর্শনের জন্য ভিউ এবং টেমপ্লেটগুলির প্রয়োজনীয় আপডেটের বিবরণ দেয়৷ অধ্যায়টি মন্তব্যের জন্য GET এবং POST উভয় অনুরোধগুলি পরিচালনা করার গুরুত্বের উপর জোর দেয়, সঠিক প্রসঙ্গ ব্যবস্থাপনা নিশ্চিত করে, এবং মোতায়েন প্রক্রিয়ায় উন্নত নিরাপত্তা এবং কর্মক্ষমতার প্রয়োজনীয়তা তুলে ধরে, স্থাপনার জন্য অ্যাপের প্রস্তুতির সাথে শেষ হয়।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تنفيذ ميزة التعليقات في تطبيق Newspaper المستند إلى Django. ويوضح بالتفصيل إنشاء نموذج مرتبط بالمقالات، وتطوير نموذج لإدخال المستخدم، والتحديثات اللازمة للعروض والقوالب لعرض التعليقات. ويؤكد الفصل على أهمية التعامل مع طلبات GET وPOST للتعليقات، وضمان إدارة السياق بشكل صحيح، ويختتم بجاهزية التطبيق للنشر، مع تسليط الضوء على الحاجة إلى تحسين الأمان والأداء في عملية النشر.",
                // Persian
                "فارسی": "این فصل بر اجرای یک ویژگی نظرات در یک برنامه روزنامه مبتنی بر جنگو تمرکز دارد. جزئیات ایجاد یک مدل مرتبط با مقالات، توسعه یک ورودی برای کاربر، و به‌روزرسانی‌های لازم برای نمایش‌ها و الگوها برای نمایش نظرات. این فصل بر اهمیت رسیدگی به درخواست‌های GET و POST برای نظرات، اطمینان از مدیریت زمینه مناسب، و با آمادگی برنامه برای استقرار به پایان می‌رسد و نیاز به بهبود امنیت و عملکرد در فرآیند استقرار را برجسته می‌کند.",
            },
        },
        // 16
        {
            "ChapterName": "Deployment",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on the deployment of Django applications, highlighting the essential differences between local development and production environments. It emphasizes the importance of security and performance, outlining a comprehensive deployment checklist that includes installing Gunicorn, creating necessary configuration files, and managing environment variables for sensitive information. The chapter also guides users through deploying their application on Heroku, including setting up a PostgreSQL database, while encouraging best practices such as using Git for version control and following Django's deployment checklist to ensure a secure and efficient deployment process.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Bereitstellung von Django-Anwendungen und die wesentlichen Unterschiede zwischen lokalen Entwicklungs- und Produktionsumgebungen. Es betont die Bedeutung von Sicherheit und Leistung und enthält eine umfassende Checkliste zur Bereitstellung, die die Installation von Gunicorn, das Erstellen der erforderlichen Konfigurationsdateien und die Verwaltung von Umgebungsvariablen für vertrauliche Informationen umfasst. Das Kapitel führt Benutzer auch durch die Bereitstellung ihrer Anwendung auf Heroku, einschließlich der Einrichtung einer PostgreSQL-Datenbank, und empfiehlt bewährte Methoden wie die Verwendung von Git zur Versionskontrolle und das Befolgen der Bereitstellungscheckliste von Django, um einen sicheren und effizienten Bereitstellungsprozess zu gewährleisten.",
                // Chinese
                "中国人": "本章重点介绍 Django 应用程序的部署，重点介绍本地开发环境和生产环境之间的本质区别。它强调了安全性和性能的重要性，概述了全面的部署清单，包括安装 Gunicorn、创建必要的配置文件以及管理敏感信息的环境变量。本章还指导用户在 Heroku 上部署其应用程序，包括设置 PostgreSQL 数据库，同时鼓励最佳实践，例如使用 Git 进行版本控制并遵循 Django 的部署清单以确保安全高效的部署过程。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется развертыванию приложений Django, подчеркивая существенные различия между локальной средой разработки и производственной средой. В ней подчеркивается важность безопасности и производительности, излагается всеобъемлющий контрольный список развертывания, включающий установку Gunicorn, создание необходимых файлов конфигурации и управление переменными среды для конфиденциальной информации. В главе также даются инструкции пользователям по развертыванию их приложений на Heroku, включая настройку базы данных PostgreSQL, а также поощряются такие передовые практики, как использование Git для контроля версий и следование контрольному списку развертывания Django, чтобы обеспечить безопасный и эффективный процесс развертывания.",
                // French
                "Français": "Ce chapitre se concentre sur le déploiement des applications Django, en soulignant les différences essentielles entre les environnements de développement et de production locaux. Il met l'accent sur l'importance de la sécurité et des performances, en décrivant une liste de contrôle de déploiement complète qui comprend l'installation de Gunicorn, la création des fichiers de configuration nécessaires et la gestion des variables d'environnement pour les informations sensibles. Le chapitre guide également les utilisateurs dans le déploiement de leur application sur Heroku, y compris la configuration d'une base de données PostgreSQL, tout en encourageant les bonnes pratiques telles que l'utilisation de Git pour le contrôle des versions et le suivi de la liste de contrôle de déploiement de Django pour garantir un processus de déploiement sécurisé et efficace.",
                // Japanese
                "日本語": "この章では、Django アプリケーションのデプロイメントに焦点を当て、ローカル開発環境と本番環境の重要な違いを強調します。セキュリティとパフォーマンスの重要性を強調し、Gunicorn のインストール、必要な構成ファイルの作成、機密情報の環境変数の管理を含む包括的なデプロイメント チェックリストの概要を示します。また、この章では、PostgreSQL データベースの設定など、Heroku へのアプリケーションのデプロイ手順をユーザーに案内するとともに、バージョン管理に Git を使用する、Django のデプロイメント チェックリストに従うなどのベスト プラクティスを推奨し、安全で効率的なデプロイメント プロセスを実現します。",
                // Korean
                "한국인": "이 장에서는 Django 애플리케이션 배포에 초점을 맞추고 로컬 개발 및 프로덕션 환경 간의 필수적인 차이점을 강조합니다. 보안 및 성능의 중요성을 강조하고 Gunicorn 설치, 필요한 구성 파일 생성, 민감한 정보에 대한 환경 변수 관리를 포함한 포괄적인 배포 체크리스트를 설명합니다. 또한 이 장에서는 사용자가 Heroku에 애플리케이션을 배포하는 방법을 안내하고 PostgreSQL 데이터베이스를 설정하는 한편, 버전 제어를 위해 Git을 사용하고 Django의 배포 체크리스트를 따라 안전하고 효율적인 배포 프로세스를 보장하는 것과 같은 모범 사례를 장려합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la implementación de aplicaciones Django, destacando las diferencias esenciales entre los entornos de desarrollo local y de producción. Destaca la importancia de la seguridad y el rendimiento, y describe una lista de verificación de implementación completa que incluye la instalación de Gunicorn, la creación de los archivos de configuración necesarios y la gestión de las variables de entorno para la información confidencial. El capítulo también guía a los usuarios en la implementación de su aplicación en Heroku, incluida la configuración de una base de datos PostgreSQL, al tiempo que fomenta las mejores prácticas, como el uso de Git para el control de versiones y el seguimiento de la lista de verificación de implementación de Django para garantizar un proceso de implementación seguro y eficiente.",
                // Hindi
                "हिंदी": "यह अध्याय Django अनुप्रयोगों की तैनाती पर ध्यान केंद्रित करता है, स्थानीय विकास और उत्पादन वातावरण के बीच आवश्यक अंतरों पर प्रकाश डालता है। यह सुरक्षा और प्रदर्शन के महत्व पर जोर देता है, एक व्यापक परिनियोजन चेकलिस्ट की रूपरेखा तैयार करता है जिसमें Gunicorn को स्थापित करना, आवश्यक कॉन्फ़िगरेशन फ़ाइलें बनाना और संवेदनशील जानकारी के लिए पर्यावरण चर का प्रबंधन करना शामिल है। यह अध्याय उपयोगकर्ताओं को Heroku पर अपने एप्लिकेशन को तैनात करने के लिए मार्गदर्शन भी करता है, जिसमें PostgreSQL डेटाबेस सेट करना शामिल है, जबकि संस्करण नियंत्रण के लिए Git का उपयोग करने और एक सुरक्षित और कुशल परिनियोजन प्रक्रिया सुनिश्चित करने के लिए Django की परिनियोजन चेकलिस्ट का पालन करने जैसे सर्वोत्तम अभ्यासों को प्रोत्साहित करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na implementação de aplicações Django, destacando as diferenças essenciais entre o desenvolvimento local e os ambientes de produção. Realça a importância da segurança e do desempenho, delineando uma lista de verificação de implementação abrangente que inclui a instalação do Gunicorn, a criação dos ficheiros de configuração necessários e a gestão de variáveis ​​de ambiente para informações confidenciais. O capítulo também orienta os utilizadores na implementação da sua aplicação no Heroku, incluindo a configuração de uma base de dados PostgreSQL, ao mesmo tempo que incentiva as melhores práticas, como utilizar o Git para controlo de versão e seguir a lista de verificação de implementação do Django para garantir um processo de implementação seguro e eficiente.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি জ্যাঙ্গো অ্যাপ্লিকেশন স্থাপনের উপর দৃষ্টি নিবদ্ধ করে, স্থানীয় উন্নয়ন এবং উৎপাদন পরিবেশের মধ্যে অপরিহার্য পার্থক্য তুলে ধরে। এটি নিরাপত্তা এবং কর্মক্ষমতার গুরুত্বের উপর জোর দেয়, একটি ব্যাপক স্থাপনার চেকলিস্টের রূপরেখা দেয় যার মধ্যে রয়েছে গুনিকর্ন ইনস্টল করা, প্রয়োজনীয় কনফিগারেশন ফাইল তৈরি করা এবং সংবেদনশীল তথ্যের জন্য পরিবেশের ভেরিয়েবল পরিচালনা করা। অধ্যায়টি ব্যবহারকারীদেরকে Heroku-এ তাদের অ্যাপ্লিকেশন মোতায়েনের মাধ্যমে গাইড করে, যার মধ্যে একটি PostgreSQL ডাটাবেস সেট আপ করা সহ, সংস্করণ নিয়ন্ত্রণের জন্য Git ব্যবহার করা এবং নিরাপদ এবং দক্ষ স্থাপনার প্রক্রিয়া নিশ্চিত করতে Django-এর স্থাপনার চেকলিস্ট অনুসরণ করার মতো সর্বোত্তম অনুশীলনগুলিকে উত্সাহিত করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على نشر تطبيقات Django، مع تسليط الضوء على الاختلافات الأساسية بين بيئات التطوير والإنتاج المحلية. ويؤكد على أهمية الأمان والأداء، ويوضح قائمة مراجعة شاملة للنشر تتضمن تثبيت Gunicorn وإنشاء ملفات التكوين الضرورية وإدارة متغيرات البيئة للمعلومات الحساسة. كما يرشد الفصل المستخدمين خلال نشر تطبيقاتهم على Heroku، بما في ذلك إعداد قاعدة بيانات PostgreSQL، مع تشجيع أفضل الممارسات مثل استخدام Git للتحكم في الإصدارات واتباع قائمة مراجعة نشر Django لضمان عملية نشر آمنة وفعالة.",
                // Persian
                "فارسی": "این فصل بر روی استقرار برنامه های کاربردی جنگو تمرکز دارد و تفاوت های اساسی بین توسعه محلی و محیط های تولید را برجسته می کند. این بر اهمیت امنیت و عملکرد تاکید می کند و یک چک لیست استقرار جامع را ارائه می دهد که شامل نصب Gunicorn، ایجاد فایل های پیکربندی لازم و مدیریت متغیرهای محیط برای اطلاعات حساس است. این فصل همچنین کاربران را از طریق استقرار برنامه خود در Heroku، از جمله راه‌اندازی پایگاه داده PostgreSQL، راهنمایی می‌کند، در حالی که بهترین روش‌ها مانند استفاده از Git برای کنترل نسخه و پیروی از چک لیست استقرار جنگو را برای اطمینان از فرآیند استقرار ایمن و کارآمد تشویق می‌کند.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "Django for Beginners is a book that teaches web development with Python and Django, a popular and powerful web framework. The book covers the core concepts and best practices of Django, such as models, views, templates, urls, forms, authentication, testing, and deployment. The book also guides the reader through building five progressively more complex web applications, including a message board, a blog, and a newspaper site.",
            // German
            "Deutsch": "„Django für Anfänger“ ist ein Buch, das Webentwicklung mit Python und Django lehrt, einem beliebten und leistungsstarken Web-Framework. Das Buch behandelt die Kernkonzepte und Best Practices von Django, wie Modelle, Ansichten, Vorlagen, URLs, Formulare, Authentifizierung, Tests und Bereitstellung. Das Buch führt den Leser auch durch die Erstellung von fünf zunehmend komplexeren Webanwendungen, darunter ein Message Board, ein Blog und eine Zeitungsseite.",
            // Chinese
            "中国人": "《Django for Beginners》是一本教你如何使用 Python 和 Django（一种流行且强大的 Web 框架）进行 Web 开发的书。本书涵盖了 Django 的核心概念和最佳实践，例如模型、视图、模板、URL、表单、身份验证、测试和部署。本书还指导读者构建五个逐渐复杂的 Web 应用程序，包括留言板、博客和报纸网站。",
            // Russian
            "Русский": "«Джанго для начинающих» — это книга, в которой обучают веб-разработке с использованием Python и Django, популярного и мощного веб-фреймворка. В книге рассматриваются основные концепции и лучшие практики Django, такие как модели, представления, шаблоны, URL-адреса, формы, аутентификация, тестирование и развертывание. Книга также помогает читателю создать пять все более сложных веб-приложений, включая доску объявлений, блог и газетный сайт.",
            // French
            "Français": "Django for Beginners est un livre qui enseigne le développement Web avec Python et Django, un framework Web populaire et puissant. Le livre couvre les concepts de base et les meilleures pratiques de Django, tels que les modèles, les vues, les modèles, les URL, les formulaires, l'authentification, les tests et le déploiement. Le livre guide également le lecteur dans la création de cinq applications Web de plus en plus complexes, notamment un forum de discussion, un blog et un site de journal.",
            // Japanese
            "日本語": "Django for Beginners は、人気があり強力な Web フレームワークである Django と Python を使用した Web 開発を教える本です。この本では、モデル、ビュー、テンプレート、URL、フォーム、認証、テスト、デプロイメントなど、Django のコア概念とベスト プラクティスを取り上げています。また、メッセージ ボード、ブログ、新聞サイトなど、徐々に複雑化する 5 つの Web アプリケーションの構築方法についても説明しています。",
            // Korean
            "한국인": "초보자를 위한 Django는 Python과 인기 있고 강력한 웹 프레임워크인 Django를 사용하여 웹 개발을 가르치는 책입니다. 이 책은 모델, 뷰, 템플릿, URL, 양식, 인증, 테스트 및 배포와 같은 Django의 핵심 개념과 모범 사례를 다루고 있습니다. 또한 이 책은 메시지 보드, 블로그, 신문 사이트를 포함하여 점점 더 복잡해지는 5개의 웹 애플리케이션을 구축하는 과정을 독자에게 안내합니다.",
            // Spanish
            "Español": "Django para principiantes es un libro que enseña desarrollo web con Python y Django, un marco web potente y popular. El libro cubre los conceptos centrales y las mejores prácticas de Django, como modelos, vistas, plantillas, URL, formularios, autenticación, pruebas e implementación. El libro también guía al lector a través de la creación de cinco aplicaciones web progresivamente más complejas, incluido un tablero de mensajes, un blog y un sitio de periódico.",
            // Hindi
            "हिंदी": "Django for Beginners एक ऐसी किताब है जो Python और Django के साथ वेब डेवलपमेंट सिखाती है, जो एक लोकप्रिय और शक्तिशाली वेब फ्रेमवर्क है। यह किताब Django की मुख्य अवधारणाओं और सर्वोत्तम प्रथाओं को कवर करती है, जैसे मॉडल, व्यू, टेम्प्लेट, यूआरएल, फॉर्म, प्रमाणीकरण, परीक्षण और परिनियोजन। यह किताब पाठक को संदेश बोर्ड, ब्लॉग और समाचार पत्र साइट सहित पाँच उत्तरोत्तर अधिक जटिल वेब एप्लिकेशन बनाने के माध्यम से भी मार्गदर्शन करती है।",
            // Portuguese
            "Português": "Django para Iniciantes é um livro que ensina desenvolvimento web com Python e Django, um framework web popular e poderoso. O livro cobre os principais conceitos e práticas recomendadas do Django, como modelos, visualizações, modelos, URLs, formulários, autenticação, teste e implantação. O livro também orienta o leitor na construção de cinco aplicações web cada vez mais complexas, incluindo um quadro de mensagens, um blog e um site de jornal.",
            // Bengali
            "বাংলা": "Django for Beginners হল একটি বই যা Python এবং Django এর সাথে ওয়েব ডেভেলপমেন্ট শেখায়, একটি জনপ্রিয় এবং শক্তিশালী ওয়েব ফ্রেমওয়ার্ক। বইটিতে জ্যাঙ্গোর মূল ধারণা এবং সর্বোত্তম অনুশীলন যেমন মডেল, ভিউ, টেমপ্লেট, ইউআরএল, ফর্ম, প্রমাণীকরণ, পরীক্ষা এবং স্থাপনা রয়েছে। বইটি একটি বার্তা বোর্ড, একটি ব্লগ এবং একটি সংবাদপত্রের সাইট সহ আরও পাঁচটি ক্রমান্বয়ে জটিল ওয়েব অ্যাপ্লিকেশন তৈরির মাধ্যমে পাঠককে গাইড করে৷",
            // Arabic
            "عَرَبِيّ": "Django للمبتدئين هو كتاب يعلمك تطوير الويب باستخدام Python وDjango، وهو إطار ويب مشهور وقوي. يغطي الكتاب المفاهيم الأساسية وأفضل ممارسات Django، مثل النماذج وطرق العرض والقوالب وعناوين URL والنماذج والمصادقة والاختبار والنشر. يرشد الكتاب أيضًا القارئ من خلال بناء خمسة تطبيقات ويب أكثر تعقيدًا بشكل تدريجي، بما في ذلك لوحة الرسائل، والمدونة، وموقع الصحيفة.",
            // Persian
            "فارسی": "Django for Beginners کتابی است که توسعه وب را با پایتون و جنگو، یک چارچوب وب محبوب و قدرتمند، آموزش می‌دهد. این کتاب مفاهیم اصلی و بهترین شیوه‌های جنگو، مانند مدل‌ها، نماها، قالب‌ها، آدرس‌های اینترنتی، فرم‌ها، احراز هویت، آزمایش و استقرار را پوشش می‌دهد. این کتاب همچنین خواننده را از طریق ساخت پنج برنامه کاربردی وب به تدریج پیچیده تر، از جمله یک تابلوی پیام، یک وبلاگ، و یک سایت روزنامه راهنمایی می کند.",
        },
        // Paragraph 2
        {
            // English
            "English": "The advantages of reading this book are that the reader will learn how to create dynamic and interactive websites with Django, using a clear and step-by-step approach. The reader will also learn how to use Django's built-in features and third-party packages to enhance the functionality and security of their web applications. The reader will also gain practical experience and confidence in developing and deploying web applications with Django.",
            // German
            "Deutsch": "Die Vorteile dieses Buches liegen darin, dass der Leser lernt, wie man mit Django dynamische und interaktive Websites erstellt, und zwar mit einem klaren und schrittweisen Ansatz. Der Leser lernt auch, wie man die integrierten Funktionen und Pakete von Drittanbietern von Django nutzt, um die Funktionalität und Sicherheit seiner Webanwendungen zu verbessern. Der Leser gewinnt außerdem praktische Erfahrung und Selbstvertrauen bei der Entwicklung und Bereitstellung von Webanwendungen mit Django.",
            // Chinese
            "中国人": "阅读本书的好处在于，读者将学习如何使用 Django 以清晰、循序渐进的方式创建动态和交互式网站。读者还将学习如何使用 Django 的内置功能和第三方包来增强其 Web 应用程序的功能和安全性。读者还将获得使用 Django 开发和部署 Web 应用程序的实践经验和信心。",
            // Russian
            "Русский": "Преимущества чтения этой книги заключаются в том, что читатель узнает, как создавать динамические и интерактивные веб-сайты с помощью Django, используя ясный и пошаговый подход. Читатель также узнает, как использовать встроенные функции Django и сторонние пакеты для повышения функциональности и безопасности своих веб-приложений. Читатель также получит практический опыт и уверенность в разработке и развертывании веб-приложений с помощью Django.",
            // French
            "Français": "Les avantages de la lecture de ce livre sont que le lecteur apprendra à créer des sites Web dynamiques et interactifs avec Django, en utilisant une approche claire et étape par étape. Le lecteur apprendra également comment utiliser les fonctionnalités intégrées de Django et les packages tiers pour améliorer les fonctionnalités et la sécurité de leurs applications Web. Le lecteur acquerra également une expérience pratique et une confiance dans le développement et le déploiement d'applications Web avec Django.",
            // Japanese
            "日本語": "この本を読むことの利点は、読者が明確で段階的なアプローチを使用して、Django で動的でインタラクティブな Web サイトを作成する方法を学べることです。また、読者は Django の組み込み機能とサードパーティ パッケージを使用して Web アプリケーションの機能とセキュリティを強化する方法も学べます。さらに、読者は Django を使用した Web アプリケーションの開発と展開に関する実践的な経験と自信も得られます。",
            // Korean
            "한국인": "이 책을 읽으면 독자가 명확하고 단계별 접근 방식을 사용하여 Django를 사용하여 역동적이고 대화형 웹사이트를 만드는 방법을 배울 수 있다는 장점이 있습니다. 독자는 또한 Django의 내장 기능과 타사 패키지를 사용하여 웹 애플리케이션의 기능과 보안을 강화하는 방법을 배우게 됩니다. 독자는 또한 Django를 사용하여 웹 애플리케이션을 개발하고 배포하는 데 대한 실질적인 경험과 자신감을 얻게 될 것입니다.",
            // Spanish
            "Español": "Las ventajas de leer este libro son que el lector aprenderá cómo crear sitios web dinámicos e interactivos con Django, utilizando un enfoque claro y paso a paso. El lector también aprenderá cómo utilizar las funciones integradas de Django y los paquetes de terceros para mejorar la funcionalidad y seguridad de sus aplicaciones web. El lector también obtendrá experiencia práctica y confianza en el desarrollo e implementación de aplicaciones web con Django.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़ने के लाभ यह हैं कि पाठक सीखेंगे कि Django के साथ गतिशील और इंटरैक्टिव वेबसाइट कैसे बनाई जाती है, एक स्पष्ट और चरण-दर-चरण दृष्टिकोण का उपयोग करके। पाठक यह भी सीखेंगे कि Django की अंतर्निहित सुविधाओं और तृतीय-पक्ष पैकेजों का उपयोग करके अपने वेब अनुप्रयोगों की कार्यक्षमता और सुरक्षा को कैसे बढ़ाया जाए। पाठक को Django के साथ वेब अनुप्रयोगों को विकसित करने और तैनात करने में व्यावहारिक अनुभव और आत्मविश्वास भी मिलेगा।",
            // Portuguese
            "Português": "As vantagens de ler este livro é que o leitor aprenderá como criar sites dinâmicos e interativos com Django, utilizando uma abordagem clara e passo a passo. O leitor também aprenderá como usar os recursos integrados do Django e pacotes de terceiros para aprimorar a funcionalidade e a segurança de suas aplicações web. O leitor também ganhará experiência prática e confiança no desenvolvimento e implantação de aplicações web com Django.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার সুবিধা হল যে পাঠক শিখবে কিভাবে Django এর সাথে গতিশীল এবং ইন্টারেক্টিভ ওয়েবসাইট তৈরি করতে হয়, একটি পরিষ্কার এবং ধাপে ধাপে পদ্ধতি ব্যবহার করে। পাঠক তাদের ওয়েব অ্যাপ্লিকেশনগুলির কার্যকারিতা এবং নিরাপত্তা বাড়াতে জ্যাঙ্গোর অন্তর্নির্মিত বৈশিষ্ট্য এবং তৃতীয় পক্ষের প্যাকেজগুলি কীভাবে ব্যবহার করবেন তাও শিখবেন। পাঠক জ্যাঙ্গোর সাথে ওয়েব অ্যাপ্লিকেশনগুলি বিকাশ এবং স্থাপনে ব্যবহারিক অভিজ্ঞতা এবং আস্থা অর্জন করবে।",
            // Arabic
            "عَرَبِيّ": "تتمثل مزايا قراءة هذا الكتاب في أن القارئ سيتعلم كيفية إنشاء مواقع ويب ديناميكية وتفاعلية باستخدام Django، باستخدام منهج واضح وتدريجي. سوف يتعلم القارئ أيضًا كيفية استخدام ميزات Django المضمنة وحزم الجهات الخارجية لتعزيز وظائف وأمان تطبيقات الويب الخاصة به. سوف يكتسب القارئ أيضًا خبرة عملية وثقة في تطوير ونشر تطبيقات الويب باستخدام Django.",
            // Persian
            "فارسی": "از مزایای خواندن این کتاب این است که خواننده یاد می گیرد که چگونه با استفاده از یک رویکرد واضح و گام به گام، وب سایت های پویا و تعاملی با جنگو ایجاد کند. خواننده همچنین می‌آموزد که چگونه از ویژگی‌های داخلی جنگو و بسته‌های شخص ثالث برای افزایش عملکرد و امنیت برنامه‌های وب خود استفاده کند. خواننده همچنین تجربه عملی و اعتماد به نفس در توسعه و استقرار برنامه های کاربردی وب با جنگو به دست خواهد آورد.",
        },
        // Paragraph 3
        {
            // English
            "English": "The reader will gain many skills and knowledge after reading this book, such as: 1. How to set up a development environment and install Django, 2. How to use Django's ORM to interact with databases, 3. How to create and customize Django's views and templates, 4. How to handle user input and validation with Django's forms, 5. How to implement user authentication and authorization with Django's auth system, 6. How to write tests for Django applications and use test-driven development, 7. How to deploy Django applications to various platforms, such as Heroku, 8. How to use Django's admin interface and shell, 9. How to use Django's REST framework to create APIs, 10. How to use Bootstrap to style Django applications.",
            // German
            "Deutsch": "Der Leser wird nach der Lektüre dieses Buches viele Fähigkeiten und Kenntnisse erwerben, wie zum Beispiel: 1. Wie man eine Entwicklungsumgebung einrichtet und Django installiert, 2. Wie man Djangos ORM verwendet, um mit Datenbanken zu interagieren, 3. Wie man Djangos Ansichten und Vorlagen erstellt und anpasst, 4. Wie man Benutzereingaben und Validierung mit Djangos Formularen handhabt, 5. Wie man Benutzerauthentifizierung und -autorisierung mit Djangos Authentifizierungssystem implementiert, 6. Wie man Tests für Django-Anwendungen schreibt und testgetriebene Entwicklung verwendet, 7. Wie man Django-Anwendungen auf verschiedenen Plattformen bereitstellt, wie zum Beispiel Heroku, 8. Wie man Djangos Admin-Schnittstelle und Shell verwendet, 9. Wie man Djangos REST-Framework verwendet, um APIs zu erstellen, 10. Wie man Bootstrap verwendet, um Django-Anwendungen zu gestalten.",
            // Chinese
            "中国人": "阅读本书后，读者将获得很多技能和知识，比如：1. 如何设置开发环境并安装 Django，2. 如何使用 Django 的 ORM 与数据库交互，3. 如何创建和自定义 Django 的视图和模板，4. 如何使用 Django 的表单处理用户输入和验证，5. 如何使用 Django 的身份验证系统实现用户身份验证和授权，6. 如何为 Django 应用程序编写测试并使用测试驱动开发，7. 如何将 Django 应用程序部署到各种平台，例如 Heroku，8. 如何使用 Django 的管理界面和 shell，9. 如何使用 Django 的 REST 框架创建 API，10. 如何使用 Bootstrap 来设计 Django 应用程序的样式。",
            // Russian
            "Русский": "После прочтения этой книги читатель приобретет множество навыков и знаний, таких как: 1. Как настроить среду разработки и установить Django, 2. Как использовать ORM Django для взаимодействия с базами данных, 3. Как создавать и настраивать представления Django. и шаблоны, 4. Как обрабатывать пользовательский ввод и проверку с помощью форм Django, 5. Как реализовать аутентификацию и авторизацию пользователей с помощью системы аутентификации Django, 6. Как писать тесты для приложений Django и использовать разработку через тестирование, 7. Как развертывать приложения Django на различных платформах, таких как Heroku, 8. Как использовать интерфейс администратора и оболочку Django, 9. Как использовать среду REST Django для создания API, 10. Как использовать Bootstrap для стилизации приложений Django.",
            // French
            "Français": "Le lecteur acquerra de nombreuses compétences et connaissances après la lecture de ce livre, telles que : 1. Comment configurer un environnement de développement et installer Django, 2. Comment utiliser l'ORM de Django pour interagir avec les bases de données, 3. Comment créer et personnaliser les vues de Django. et modèles, 4. Comment gérer la saisie et la validation des utilisateurs avec les formulaires de Django, 5. Comment implémenter l'authentification et l'autorisation des utilisateurs avec le système d'authentification de Django, 6. Comment écrire des tests pour les applications Django et utiliser le développement piloté par les tests, 7. Comment déployer des applications Django sur diverses plates-formes, telles que Heroku, 8. Comment utiliser l'interface d'administration et le shell de Django, 9. Comment utiliser le framework REST de Django pour créer des API, 10. Comment utiliser Bootstrap pour styliser les applications Django.",
            // Japanese
            "日本語": "この本を読んだ後、読者は次のような多くのスキルと知識を身に付けることができます。1. 開発環境をセットアップして Django をインストールする方法、2. Django の ORM を使用してデータベースを操作する方法、3. Django のビューとテンプレートを作成してカスタマイズする方法、4. Django のフォームでユーザー入力と検証を処理する方法、5. Django の認証システムを使用してユーザー認証と承認を実装する方法、6. Django アプリケーションのテストを作成し、テスト駆動開発を使用する方法、7. Heroku などのさまざまなプラットフォームに Django アプリケーションをデプロイする方法、8. Django の管理インターフェイスとシェルを使用する方法、9. Django の REST フレームワークを使用して API を作成する方法、10. Bootstrap を使用して Django アプリケーションをスタイル設定する方法。",
            // Korean
            "한국인": "독자는 이 책을 읽고 나면 다음과 같은 많은 기술과 지식을 얻게 될 것입니다. 1. 개발 환경을 설정하고 Django를 설치하는 방법, 2. Django의 ORM을 사용하여 데이터베이스와 상호 작용하는 방법, 3. Django의 뷰를 만들고 사용자 정의하는 방법 및 템플릿, 4. Django의 양식으로 사용자 입력 및 유효성 검사를 처리하는 방법, 5. Django의 인증 시스템으로 사용자 인증 및 권한 부여를 구현하는 방법, 6. Django 애플리케이션에 대한 테스트를 작성하고 테스트 중심 개발을 사용하는 방법, 7. 방법 Django 애플리케이션을 Heroku와 같은 다양한 플랫폼에 배포하는 방법, 8. Django의 관리 인터페이스 및 셸을 사용하는 방법, 9. Django의 REST 프레임워크를 사용하여 API를 만드는 방법, 10. Bootstrap을 사용하여 Django 애플리케이션 스타일을 지정하는 방법.",
            // Spanish
            "Español": "El lector obtendrá muchas habilidades y conocimientos después de leer este libro, tales como: 1. Cómo configurar un entorno de desarrollo e instalar Django, 2. Cómo usar el ORM de Django para interactuar con bases de datos, 3. Cómo crear y personalizar las vistas de Django. y plantillas, 4. Cómo manejar la entrada y validación del usuario con los formularios de Django, 5. Cómo implementar la autenticación y autorización del usuario con el sistema de autenticación de Django, 6. Cómo escribir pruebas para aplicaciones de Django y utilizar el desarrollo basado en pruebas, 7. Cómo implementar aplicaciones Django en varias plataformas, como Heroku, 8. Cómo usar la interfaz de administración y el shell de Django, 9. Cómo usar el marco REST de Django para crear API, 10. Cómo usar Bootstrap para diseñar aplicaciones Django.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़ने के बाद पाठक को कई कौशल और ज्ञान प्राप्त होंगे, जैसे: 1. विकास का वातावरण कैसे सेट करें और Django को कैसे स्थापित करें, 2. डेटाबेस के साथ बातचीत करने के लिए Django के ORM का उपयोग कैसे करें, 3. Django के दृश्य और टेम्पलेट्स कैसे बनाएं और अनुकूलित करें, 4. Django के फ़ॉर्म के साथ उपयोगकर्ता इनपुट और सत्यापन को कैसे संभालें, 5. Django के प्रमाणीकरण प्रणाली के साथ उपयोगकर्ता प्रमाणीकरण और प्राधिकरण कैसे लागू करें, 6. Django अनुप्रयोगों के लिए परीक्षण कैसे लिखें और परीक्षण-संचालित विकास का उपयोग करें, 7. Django अनुप्रयोगों को विभिन्न प्लेटफार्मों पर कैसे तैनात करें, जैसे Heroku, 8. Django के व्यवस्थापक इंटरफ़ेस और शेल का उपयोग कैसे करें, 9. API बनाने के लिए Django के REST फ्रेमवर्क का उपयोग कैसे करें, 10. Django अनुप्रयोगों को स्टाइल करने के लिए बूटस्ट्रैप का उपयोग कैसे करें।",
            // Portuguese
            "Português": "O leitor ganhará muitas habilidades e conhecimentos após a leitura deste livro, tais como: 1. Como configurar um ambiente de desenvolvimento e instalar o Django, 2. Como usar o ORM do Django para interagir com bancos de dados, 3. Como criar e personalizar as visualizações do Django e modelos, 4. Como lidar com a entrada e validação do usuário com os formulários do Django, 5. Como implementar autenticação e autorização do usuário com o sistema de autenticação do Django, 6. Como escrever testes para aplicativos Django e usar desenvolvimento orientado a testes, 7. Como implantar aplicativos Django em várias plataformas, como Heroku, 8. Como usar a interface de administração e shell do Django, 9. Como usar a estrutura REST do Django para criar APIs, 10. Como usar Bootstrap para estilizar aplicativos Django.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার পরে পাঠক অনেক দক্ষতা এবং জ্ঞান অর্জন করবে, যেমন: 1. কীভাবে একটি উন্নয়ন পরিবেশ সেট আপ করতে হয় এবং জ্যাঙ্গো ইনস্টল করতে হয়, 2. ডাটাবেসের সাথে যোগাযোগ করতে জ্যাঙ্গোর ওআরএম কীভাবে ব্যবহার করতে হয়, 3. কীভাবে জ্যাঙ্গোর ভিউ তৈরি এবং কাস্টমাইজ করতে হয় এবং টেমপ্লেটগুলি, 4. জ্যাঙ্গোর ফর্মগুলির সাথে কীভাবে ব্যবহারকারীর ইনপুট এবং বৈধতা পরিচালনা করবেন, 5. কীভাবে জ্যাঙ্গোর প্রমাণীকরণ সিস্টেমের সাথে ব্যবহারকারীর প্রমাণীকরণ এবং অনুমোদন কার্যকর করবেন, 6. কীভাবে জ্যাঙ্গো অ্যাপ্লিকেশনগুলির জন্য পরীক্ষা লিখবেন এবং পরীক্ষা-চালিত বিকাশ ব্যবহার করবেন, 7. কীভাবে করবেন জ্যাঙ্গো অ্যাপ্লিকেশনগুলিকে বিভিন্ন প্ল্যাটফর্মে স্থাপন করুন, যেমন হেরোকু, 8. কীভাবে জ্যাঙ্গোর অ্যাডমিন ইন্টারফেস এবং শেল ব্যবহার করবেন, 9. API তৈরি করতে জ্যাঙ্গোর REST ফ্রেমওয়ার্ক কীভাবে ব্যবহার করবেন, 10. জ্যাঙ্গো অ্যাপ্লিকেশনগুলিকে স্টাইল করতে বুটস্ট্র্যাপ কীভাবে ব্যবহার করবেন।",
            // Arabic
            "عَرَبِيّ": "سوف يكتسب القارئ العديد من المهارات والمعرفة بعد قراءة هذا الكتاب، مثل: ١. كيفية إعداد بيئة تطوير وتثبيت Django، ٢. كيفية استخدام ORM الخاص بـ Django للتفاعل مع قواعد البيانات، ٣. كيفية إنشاء وتخصيص عروض Django والقوالب، ٤. كيفية التعامل مع إدخال المستخدم والتحقق من صحته باستخدام نماذج جانغو، ٥. كيفية تنفيذ مصادقة المستخدم والترخيص باستخدام نظام مصادقة جانغو، ٦. كيفية كتابة اختبارات لتطبيقات جانغو واستخدام التطوير القائم على الاختبار، ٧. كيفية نشر تطبيقات Django على منصات مختلفة، مثل Heroku، ٨. كيفية استخدام واجهة إدارة Django وshell، ٩. كيفية استخدام إطار عمل REST الخاص بـ Django لإنشاء واجهات برمجة التطبيقات، ١٠. كيفية استخدام Bootstrap لتصميم تطبيقات Django.",
            // Persian
            "فارسی": "خواننده پس از مطالعه این کتاب مهارت ها و دانش های زیادی را به دست خواهد آورد، مانند: ١. نحوه راه اندازی یک محیط توسعه و نصب جنگو، ٢. نحوه استفاده از ORM جنگو برای تعامل با پایگاه های داده، ٣. نحوه ایجاد و شخصی سازی نماهای جنگو. و الگوها، ٤. نحوه مدیریت ورودی و اعتبارسنجی کاربر با فرم‌های جنگو، ٥. نحوه اجرای احراز هویت و مجوز کاربر با سیستم احراز هویت جنگو، ٦. نحوه نوشتن تست‌ها برای برنامه‌های جنگو و استفاده از توسعه مبتنی بر تست، ٧. نحوه اجرای استقرار برنامه های جنگو در پلتفرم های مختلف، مانند Heroku، ٨. نحوه استفاده از رابط مدیریت و پوسته جنگو، ٩. نحوه استفاده از چارچوب REST جنگو برای ایجاد API، ١٠. نحوه استفاده از Bootstrap برای استایل دادن به برنامه های جنگو.",
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
        document.title = "MHA - " + django_for_beginners["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = django_for_beginners["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = django_for_beginners["TotalDescriptionAboutTheBook"][index][newLanguage];
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