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
var django_for_professionals = {
    "BookName": "Django for APIs",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Initial Set Up",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 1 focuses on setting up a development environment for Django projects on Windows and macOS, emphasizing the importance of using the Command Line for efficient software installation and configuration. It guides users through installing Python, creating virtual environments, and setting up Django and Django REST Framework, while also introducing Git for version control. Additionally, the chapter recommends using Visual Studio Code as a text editor, along with essential extensions, and concludes with configuring Git user details to streamline future development tasks.",
                // German
                "Deutsch": "Kapitel 1 konzentriert sich auf das Einrichten einer Entwicklungsumgebung für Django-Projekte unter Windows und macOS und betont die Bedeutung der Verwendung der Befehlszeile für eine effiziente Softwareinstallation und -konfiguration. Es führt Benutzer durch die Installation von Python, das Erstellen virtueller Umgebungen und das Einrichten von Django und Django REST Framework und stellt gleichzeitig Git zur Versionskontrolle vor. Darüber hinaus empfiehlt das Kapitel die Verwendung von Visual Studio Code als Texteditor zusammen mit wichtigen Erweiterungen und schließt mit der Konfiguration von Git-Benutzerdetails ab, um zukünftige Entwicklungsaufgaben zu optimieren.",
                // Chinese
                "中国人": "第 1 章重点介绍如何在 Windows 和 macOS 上为 Django 项目设置开发环境，强调使用命令行进行高效软件安装和配置的重要性。它指导用户安装 Python、创建虚拟环境以及设置 Django 和 Django REST Framework，同时还介绍了 Git 用于版本控制。此外，本章建议使用 Visual Studio Code 作为文本编辑器以及必要的扩展，最后介绍如何配置 Git 用户详细信息以简化未来的开发任务。",
                // Russian
                "Русский": "Глава 1 посвящена настройке среды разработки для проектов Django на Windows и macOS, подчеркивая важность использования командной строки для эффективной установки и настройки программного обеспечения. Она проводит пользователей через установку Python, создание виртуальных сред и настройку Django и Django REST Framework, а также знакомит с Git для управления версиями. Кроме того, глава рекомендует использовать Visual Studio Code в качестве текстового редактора вместе с необходимыми расширениями и завершается настройкой данных пользователя Git для оптимизации будущих задач разработки.",
                // French
                "Français": "Le chapitre 1 se concentre sur la configuration d'un environnement de développement pour les projets Django sur Windows et macOS, en soulignant l'importance d'utiliser la ligne de commande pour une installation et une configuration efficaces des logiciels. Il guide les utilisateurs dans l'installation de Python, la création d'environnements virtuels et la configuration de Django et de Django REST Framework, tout en présentant Git pour le contrôle des versions. En outre, le chapitre recommande d'utiliser Visual Studio Code comme éditeur de texte, ainsi que les extensions essentielles, et se termine par la configuration des détails de l'utilisateur Git pour rationaliser les tâches de développement futures.",
                // Japanese
                "日本語": "第 1 章では、Windows および macOS での Django プロジェクトの開発環境の設定に焦点を当て、効率的なソフトウェアのインストールと構成のためにコマンド ラインを使用することの重要性を強調しています。Python のインストール、仮想環境の作成、Django と Django REST Framework の設定についてユーザーをガイドし、バージョン管理用の Git も紹介します。さらに、この章では、必須の拡張機能とともに Visual Studio Code をテキスト エディターとして使用することを推奨し、将来の開発タスクを効率化するために Git ユーザーの詳細を構成することで締めくくっています。",
                // Korean
                "한국인": "1장은 Windows 및 macOS에서 Django 프로젝트를 위한 개발 환경을 설정하는 데 중점을 두고, 효율적인 소프트웨어 설치 및 구성을 위해 명령줄을 사용하는 것의 중요성을 강조합니다. Python 설치, 가상 환경 생성, Django 및 Django REST Framework 설정을 안내하는 동시에 버전 제어를 위한 Git도 소개합니다. 또한 이 장에서는 Visual Studio Code를 텍스트 편집기로 사용하고 필수 확장 기능을 사용하는 것이 좋으며, 향후 개발 작업을 간소화하기 위해 Git 사용자 세부 정보를 구성하는 것으로 마무리합니다.",
                // Spanish
                "Español": "El capítulo 1 se centra en la configuración de un entorno de desarrollo para proyectos de Django en Windows y macOS, y hace hincapié en la importancia de utilizar la línea de comandos para una instalación y configuración de software eficiente. Guía a los usuarios a través de la instalación de Python, la creación de entornos virtuales y la configuración de Django y Django REST Framework, a la vez que presenta Git para el control de versiones. Además, el capítulo recomienda utilizar Visual Studio Code como editor de texto, junto con extensiones esenciales, y concluye con la configuración de los detalles de usuario de Git para agilizar las tareas de desarrollo futuras.",
                // Hindi
                "हिंदी": "अध्याय 1 विंडोज और मैकओएस पर Django प्रोजेक्ट के लिए एक विकास वातावरण स्थापित करने पर केंद्रित है, जो कुशल सॉफ़्टवेयर इंस्टॉलेशन और कॉन्फ़िगरेशन के लिए कमांड लाइन का उपयोग करने के महत्व पर जोर देता है। यह उपयोगकर्ताओं को पायथन स्थापित करने, वर्चुअल वातावरण बनाने और Django और Django REST फ्रेमवर्क को सेट करने के माध्यम से मार्गदर्शन करता है, जबकि संस्करण नियंत्रण के लिए Git का परिचय भी देता है। इसके अतिरिक्त, अध्याय आवश्यक एक्सटेंशन के साथ-साथ एक टेक्स्ट एडिटर के रूप में Visual Studio Code का उपयोग करने की सलाह देता है, और भविष्य के विकास कार्यों को सुव्यवस्थित करने के लिए Git उपयोगकर्ता विवरण को कॉन्फ़िगर करने के साथ समाप्त होता है।",
                // Portuguese
                "Português": "O Capítulo 1 centra-se na configuração de um ambiente de desenvolvimento para projetos Django em Windows e macOS, enfatizando a importância da utilização da Linha de Comandos para uma instalação e configuração eficientes de software. Orienta os utilizadores na instalação do Python, na criação de ambientes virtuais e na configuração do Django e do Django REST Framework, ao mesmo tempo que apresenta o Git para controlo de versões. Além disso, o capítulo recomenda a utilização do Visual Studio Code como editor de texto, juntamente com extensões essenciais, e conclui com a configuração dos detalhes do utilizador do Git para agilizar futuras tarefas de desenvolvimento.",
                // Bengali
                "বাংলা": "অধ্যায় 1 দক্ষ সফ্টওয়্যার ইনস্টলেশন এবং কনফিগারেশনের জন্য কমান্ড লাইন ব্যবহারের গুরুত্বের উপর জোর দিয়ে, উইন্ডোজ এবং ম্যাকওএস-এ জ্যাঙ্গো প্রকল্পগুলির জন্য একটি উন্নয়ন পরিবেশ স্থাপনের উপর দৃষ্টি নিবদ্ধ করে। এটি ব্যবহারকারীদের পাইথন ইনস্টল করার মাধ্যমে, ভার্চুয়াল পরিবেশ তৈরি করার এবং জ্যাঙ্গো এবং জ্যাঙ্গো REST ফ্রেমওয়ার্ক স্থাপনের মাধ্যমে গাইড করে, পাশাপাশি সংস্করণ নিয়ন্ত্রণের জন্য গিট প্রবর্তন করে। অতিরিক্তভাবে, অধ্যায়টি প্রয়োজনীয় এক্সটেনশন সহ একটি পাঠ্য সম্পাদক হিসাবে ভিজ্যুয়াল স্টুডিও কোড ব্যবহার করার সুপারিশ করে এবং ভবিষ্যতের বিকাশের কাজগুলিকে স্ট্রীমলাইন করার জন্য গিট ব্যবহারকারীর বিশদ কনফিগার করে শেষ করে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الأول على إعداد بيئة تطوير لمشاريع Django على أنظمة Windows وmacOS، مع التأكيد على أهمية استخدام سطر الأوامر لتثبيت البرامج وتكوينها بكفاءة. كما يرشد المستخدمين خلال تثبيت Python وإنشاء بيئات افتراضية وإعداد Django وإطار عمل Django REST، مع تقديم Git للتحكم في الإصدارات. بالإضافة إلى ذلك، يوصي الفصل باستخدام Visual Studio Code كمحرر نصوص، إلى جانب الامتدادات الأساسية، ويختتم بتكوين تفاصيل مستخدم Git لتبسيط مهام التطوير المستقبلية.",
                // Persian
                "فارسی": "فصل 1 بر راه اندازی یک محیط توسعه برای پروژه های جنگو در ویندوز و macOS تمرکز دارد و بر اهمیت استفاده از Command Line برای نصب و پیکربندی کارآمد نرم افزار تأکید می کند. کاربران را از طریق نصب پایتون، ایجاد محیط های مجازی، و راه اندازی چارچوب جنگو و جنگو REST راهنمایی می کند، در حالی که Git را برای کنترل نسخه نیز معرفی می کند. علاوه بر این، این فصل استفاده از کد ویژوال استودیو را به عنوان یک ویرایشگر متن، همراه با برنامه‌های افزودنی ضروری توصیه می‌کند و با پیکربندی جزئیات کاربر Git برای ساده‌سازی وظایف توسعه آینده به پایان می‌رسد.",
            },
        },
        // 2
        {
            "ChapterName": "Web APIs",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 2: Web APIs introduces the foundational concepts of web APIs, emphasizing the importance of HTTP as a stateless request-response protocol that facilitates communication between clients and servers. It covers key terminology such as endpoints, resources, HTTP verbs (POST, GET, PUT, DELETE), and status codes, which help manage interactions and data exchange over the web. The chapter also highlights the structure of URLs and the transition of state management from servers to clients in modern web applications, ultimately laying the groundwork for building APIs using frameworks like Django and Django REST Framework.",
                // German
                "Deutsch": "Kapitel 2: Web-APIs führt in die grundlegenden Konzepte von Web-APIs ein und betont die Bedeutung von HTTP als zustandsloses Anforderungs-Antwort-Protokoll, das die Kommunikation zwischen Clients und Servern erleichtert. Es behandelt wichtige Begriffe wie Endpunkte, Ressourcen, HTTP-Verben (POST, GET, PUT, DELETE) und Statuscodes, die bei der Verwaltung von Interaktionen und Datenaustausch über das Web helfen. Das Kapitel beleuchtet auch die Struktur von URLs und den Übergang der Statusverwaltung von Servern zu Clients in modernen Webanwendungen und legt damit letztendlich den Grundstein für die Erstellung von APIs mit Frameworks wie Django und Django REST Framework.",
                // Chinese
                "中国人": "第 2 章：Web API 介绍了 Web API 的基本概念，强调了 HTTP 作为无状态请求-响应协议的重要性，该协议促进了客户端和服务器之间的通信。它涵盖了端点、资源、HTTP 动词（POST、GET、PUT、DELETE）和状态代码等关键术语，这些术语有助于管理 Web 上的交互和数据交换。本章还重点介绍了现代 Web 应用程序中 URL 的结构以及从服务器到客户端的状态管理转换，最终为使用 Django 和 Django REST Framework 等框架构建 API 奠定了基础。",
                // Russian
                "Русский": "Глава 2: Веб-API знакомит с основополагающими концепциями веб-API, подчеркивая важность HTTP как протокола запроса-ответа без сохранения состояния, который облегчает связь между клиентами и серверами. Она охватывает ключевые термины, такие как конечные точки, ресурсы, HTTP-глаголы (POST, GET, PUT, DELETE) и коды состояния, которые помогают управлять взаимодействиями и обменом данными через Интернет. В главе также освещаются структура URL-адресов и переход управления состоянием от серверов к клиентам в современных веб-приложениях, в конечном итоге закладывая основу для создания API с использованием таких фреймворков, как Django и Django REST Framework.",
                // French
                "Français": "Chapitre 2 : API Web présente les concepts fondamentaux des API Web, en soulignant l'importance de HTTP en tant que protocole de requête-réponse sans état qui facilite la communication entre clients et serveurs. Il couvre la terminologie clé telle que les points de terminaison, les ressources, les verbes HTTP (POST, GET, PUT, DELETE) et les codes d'état, qui aident à gérer les interactions et l'échange de données sur le Web. Le chapitre met également en évidence la structure des URL et la transition de la gestion des états des serveurs vers les clients dans les applications Web modernes, jetant ainsi les bases de la création d'API à l'aide de frameworks tels que Django et Django REST Framework.",
                // Japanese
                "日本語": "第 2 章「Web API」では、Web API の基本概念を紹介し、クライアントとサーバー間の通信を容易にするステートレスな要求応答プロトコルとしての HTTP の重要性を強調しています。エンドポイント、リソース、HTTP 動詞 (POST、GET、PUT、DELETE)、ステータス コードなど、Web 上でのやり取りやデータ交換の管理に役立つ重要な用語を取り上げています。また、この章では、URL の構造と、最新の Web アプリケーションにおけるサーバーからクライアントへの状態管理の移行についても取り上げ、最終的には Django や Django REST Framework などのフレームワークを使用して API を構築するための基礎を築きます。",
                // Korean
                "한국인": "2장: 웹 API는 웹 API의 기본 개념을 소개하고, 클라이언트와 서버 간의 통신을 용이하게 하는 무상태 요청-응답 프로토콜로서 HTTP의 중요성을 강조합니다. 엔드포인트, 리소스, HTTP 동사(POST, GET, PUT, DELETE), 상태 코드와 같은 주요 용어를 다루며, 이는 웹에서 상호 작용과 데이터 교환을 관리하는 데 도움이 됩니다. 이 장에서는 또한 URL의 구조와 현대 웹 애플리케이션에서 서버에서 클라이언트로의 상태 관리 전환을 강조하여 궁극적으로 Django 및 Django REST Framework와 같은 프레임워크를 사용하여 API를 구축하기 위한 토대를 마련합니다.",
                // Spanish
                "Español": "Capítulo 2: API web: presenta los conceptos básicos de las API web, haciendo hincapié en la importancia de HTTP como un protocolo de solicitud-respuesta sin estado que facilita la comunicación entre clientes y servidores. Abarca la terminología clave, como puntos finales, recursos, verbos HTTP (POST, GET, PUT, DELETE) y códigos de estado, que ayudan a gestionar las interacciones y el intercambio de datos en la web. El capítulo también destaca la estructura de las URL y la transición de la gestión del estado de los servidores a los clientes en las aplicaciones web modernas, sentando las bases para la creación de API utilizando marcos como Django y Django REST Framework.",
                // Hindi
                "हिंदी": "अध्याय 2: वेब API वेब API की मूलभूत अवधारणाओं का परिचय देता है, HTTP के महत्व पर जोर देता है क्योंकि यह एक स्टेटलेस रिक्वेस्ट-रिस्पॉन्स प्रोटोकॉल है जो क्लाइंट और सर्वर के बीच संचार को सुविधाजनक बनाता है। इसमें एंडपॉइंट, संसाधन, HTTP क्रिया (POST, GET, PUT, DELETE) और स्टेटस कोड जैसी प्रमुख शब्दावली शामिल है, जो वेब पर इंटरैक्शन और डेटा एक्सचेंज को प्रबंधित करने में मदद करती है। अध्याय आधुनिक वेब अनुप्रयोगों में URL की संरचना और सर्वर से क्लाइंट तक स्टेट मैनेजमेंट के संक्रमण पर भी प्रकाश डालता है, जो अंततः Django और Django REST Framework जैसे फ्रेमवर्क का उपयोग करके API बनाने के लिए आधार तैयार करता है।",
                // Portuguese
                "Português": "O Capítulo 2: APIs Web apresenta os conceitos básicos das APIs Web, enfatizando a importância do HTTP como um protocolo de pedido-resposta sem estado que facilita a comunicação entre clientes e servidores. Abrange terminologia importante, como endpoints, recursos, verbos HTTP (POST, GET, PUT, DELETE) e códigos de estado, que ajudam a gerir as interações e a troca de dados através da web. O capítulo destaca também a estrutura de URLs e a transição da gestão de estado de servidores para clientes em aplicações web modernas, estabelecendo, em última análise, as bases para a construção de APIs utilizando frameworks como Django e Django REST Framework.",
                // Bengali
                "বাংলা": "অধ্যায় 2: ওয়েব API গুলি ওয়েব API-এর মৌলিক ধারণাগুলি প্রবর্তন করে, একটি রাষ্ট্রহীন অনুরোধ-প্রতিক্রিয়া প্রোটোকল হিসাবে HTTP-এর গুরুত্বের উপর জোর দেয় যা ক্লায়েন্ট এবং সার্ভারের মধ্যে যোগাযোগের সুবিধা দেয়। এটি মূল পরিভাষাগুলি কভার করে যেমন এন্ডপয়েন্ট, রিসোর্স, HTTP ক্রিয়া (POST, GET, PUT, DELETE), এবং স্ট্যাটাস কোড, যা ওয়েবে ইন্টারঅ্যাকশন এবং ডেটা বিনিময় পরিচালনা করতে সাহায্য করে। অধ্যায়টি ইউআরএলগুলির গঠন এবং আধুনিক ওয়েব অ্যাপ্লিকেশনগুলিতে সার্ভার থেকে ক্লায়েন্টে রাষ্ট্রীয় ব্যবস্থাপনার রূপান্তরকেও হাইলাইট করে, শেষ পর্যন্ত জ্যাঙ্গো এবং জ্যাঙ্গো REST ফ্রেমওয়ার্কের মতো ফ্রেমওয়ার্ক ব্যবহার করে API তৈরির ভিত্তি স্থাপন করে।",
                // Arabic
                "عَرَبِيّ": "الفصل 2: ​​يقدم Web APIs المفاهيم الأساسية لواجهات برمجة تطبيقات الويب، مع التأكيد على أهمية HTTP كبروتوكول طلب واستجابة بدون حالة يسهل الاتصال بين العملاء والخوادم. ويغطي المصطلحات الرئيسية مثل نقاط النهاية والموارد وأفعال HTTP (POST وGET وPUT وDELETE) وأكواد الحالة، والتي تساعد في إدارة التفاعلات وتبادل البيانات عبر الويب. يسلط الفصل الضوء أيضًا على بنية عناوين URL وانتقال إدارة الحالة من الخوادم إلى العملاء في تطبيقات الويب الحديثة، مما يضع الأساس في النهاية لبناء واجهات برمجة التطبيقات باستخدام أطر عمل مثل Django وDjango REST Framework.",
                // Persian
                "فارسی": "فصل 2: ​​APIهای وب مفاهیم اساسی وب APIها را معرفی می کند و بر اهمیت HTTP به عنوان یک پروتکل درخواست-پاسخ بدون حالت که ارتباط بین کلاینت ها و سرورها را تسهیل می کند، تأکید می کند. این اصطلاحات کلیدی مانند نقاط پایانی، منابع، افعال HTTP (POST، GET، PUT، DELETE) و کدهای وضعیت را پوشش می دهد که به مدیریت تعاملات و تبادل داده ها در وب کمک می کند. این فصل همچنین ساختار URLها و انتقال مدیریت حالت از سرورها به کلاینت‌ها را در برنامه‌های کاربردی وب مدرن برجسته می‌کند و در نهایت زمینه را برای ساخت API با استفاده از چارچوب‌هایی مانند جنگو و جنگو REST چارچوب می‌کند.",
            },
        },
        // 3
        {
            "ChapterName": "Library Website",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 3 focuses on setting up a traditional Django project for a library website, covering the creation of a new app, updating models, views, URLs, and templates. It details the implementation of a book listing feature using Django's template language and ListView, along with the creation of necessary files such as book_list.html and urls.py. Additionally, it emphasizes best practices like using a .gitignore file to exclude sensitive information and maintaining a requirements.txt file for package management.",
                // German
                "Deutsch": "Kapitel 3 konzentriert sich auf die Einrichtung eines traditionellen Django-Projekts für eine Bibliothekswebsite und behandelt die Erstellung einer neuen App sowie die Aktualisierung von Modellen, Ansichten, URLs und Vorlagen. Es beschreibt ausführlich die Implementierung einer Buchauflistungsfunktion mithilfe der Vorlagensprache und ListView von Django sowie die Erstellung der erforderlichen Dateien wie book_list.html und urls.py. Darüber hinaus werden Best Practices wie die Verwendung einer .gitignore-Datei zum Ausschließen vertraulicher Informationen und die Pflege einer Datei requirements.txt für die Paketverwaltung hervorgehoben.",
                // Chinese
                "中国人": "第 3 章重点介绍如何为图书馆网站设置传统的 Django 项目，涵盖新应用的创建、模型、视图、URL 和模板的更新。它详细介绍了如何使用 Django 的模板语言和 ListView 实现图书列表功能，以及如何创建必要的文件（例如 book_list.html 和 urls.py）。此外，它还强调了最佳实践，例如使用 .gitignore 文件排除敏感信息以及维护 requirements.txt 文件以进行包管理。",
                // Russian
                "Русский": "Глава 3 посвящена настройке традиционного проекта Django для веб-сайта библиотеки, охватывая создание нового приложения, обновление моделей, представлений, URL-адресов и шаблонов. В ней подробно описывается реализация функции листинга книг с использованием языка шаблонов Django и ListView, а также создание необходимых файлов, таких как book_list.html и urls.py. Кроме того, в ней подчеркиваются передовые практики, такие как использование файла .gitignore для исключения конфиденциальной информации и поддержка файла requirements.txt для управления пакетами.",
                // French
                "Français": "Le chapitre 3 se concentre sur la configuration d'un projet Django traditionnel pour un site Web de bibliothèque, couvrant la création d'une nouvelle application, la mise à jour des modèles, des vues, des URL et des modèles. Il détaille l'implémentation d'une fonctionnalité de liste de livres à l'aide du langage de modèles et de ListView de Django, ainsi que la création des fichiers nécessaires tels que book_list.html et urls.py. De plus, il met l'accent sur les meilleures pratiques telles que l'utilisation d'un fichier .gitignore pour exclure les informations sensibles et la maintenance d'un fichier requirements.txt pour la gestion des packages.",
                // Japanese
                "日本語": "第 3 章では、図書館の Web サイト用の従来の Django プロジェクトの設定に焦点を当て、新しいアプリの作成、モデル、ビュー、URL、テンプレートの更新について説明します。Django のテンプレート言語と ListView を使用して書籍リスト機能を実装する方法と、book_list.html や urls.py などの必要なファイルの作成について詳しく説明します。さらに、.gitignore ファイルを使用して機密情報を除外したり、パッケージ管理のために requirements.txt ファイルを維持したりするなどのベスト プラクティスを強調します。",
                // Korean
                "한국인": "3장은 도서관 웹사이트를 위한 전통적인 Django 프로젝트 설정에 초점을 맞추고, 새로운 앱 생성, 모델, 뷰, URL, 템플릿 업데이트를 다룹니다. Django의 템플릿 언어와 ListView를 사용하여 도서 목록 기능을 구현하는 방법과 book_list.html, urls.py와 같은 필수 파일을 만드는 방법을 자세히 설명합니다. 또한 .gitignore 파일을 사용하여 민감한 정보를 제외하는 방법과 패키지 관리를 위한 requirements.txt 파일을 유지하는 것과 같은 모범 사례를 강조합니다.",
                // Spanish
                "Español": "El capítulo 3 se centra en la configuración de un proyecto tradicional de Django para un sitio web de biblioteca, y abarca la creación de una nueva aplicación, la actualización de modelos, vistas, URL y plantillas. Detalla la implementación de una función de listado de libros utilizando el lenguaje de plantillas de Django y ListView, junto con la creación de archivos necesarios como book_list.html y urls.py. Además, hace hincapié en las mejores prácticas como el uso de un archivo .gitignore para excluir información confidencial y el mantenimiento de un archivo requirements.txt para la gestión de paquetes.",
                // Hindi
                "हिंदी": "अध्याय 3 लाइब्रेरी वेबसाइट के लिए पारंपरिक Django प्रोजेक्ट स्थापित करने पर केंद्रित है, जिसमें एक नया ऐप बनाना, मॉडल, दृश्य, URL और टेम्पलेट अपडेट करना शामिल है। यह Django की टेम्पलेट भाषा और ListView का उपयोग करके पुस्तक लिस्टिंग सुविधा के कार्यान्वयन के साथ-साथ book_list.html और urls.py जैसी आवश्यक फ़ाइलों के निर्माण का विवरण देता है। इसके अतिरिक्त, यह संवेदनशील जानकारी को बाहर करने के लिए .gitignore फ़ाइल का उपयोग करने और पैकेज प्रबंधन के लिए requirements.txt फ़ाइल बनाए रखने जैसी सर्वोत्तम प्रथाओं पर जोर देता है।",
                // Portuguese
                "Português": "O Capítulo 3 centra-se na configuração de um projeto Django tradicional para um site de biblioteca, abordando a criação de uma nova aplicação, a atualização de modelos, vistas, URLs e modelos. Detalha a implementação de uma funcionalidade de listagem de livros utilizando a linguagem de modelo do Django e ListView, juntamente com a criação dos ficheiros necessários, como book_list.html e urls.py. Além disso, enfatiza as melhores práticas, como a utilização de um ficheiro . gitignore para eliminar informações confidenciais e manter um ficheiro requirements.txt para a gestão de pacotes.",
                // Bengali
                "বাংলা": "অধ্যায় 3 একটি লাইব্রেরি ওয়েবসাইটের জন্য একটি ঐতিহ্যবাহী জ্যাঙ্গো প্রকল্প সেট আপ করার উপর ফোকাস করে, একটি নতুন অ্যাপ তৈরি করা, মডেল, ভিউ, URL এবং টেমপ্লেট আপডেট করা। এটি জ্যাঙ্গোর টেমপ্লেট ভাষা এবং লিস্টভিউ ব্যবহার করে একটি বই তালিকাকরণ বৈশিষ্ট্য বাস্তবায়নের বিবরণ দেয়, পাশাপাশি book_list.html এবং urls.py-এর মতো প্রয়োজনীয় ফাইল তৈরি করে। উপরন্তু, এটি সংবেদনশীল তথ্য বাদ দিতে একটি .gitignore ফাইল ব্যবহার করা এবং প্যাকেজ পরিচালনার জন্য একটি requirements.txt ফাইল বজায় রাখার মতো সেরা অনুশীলনের উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الثالث على إعداد مشروع Django تقليدي لموقع ويب للمكتبات، ويغطي إنشاء تطبيق جديد وتحديث النماذج والعروض وعناوين URL والقوالب. ويوضح بالتفصيل تنفيذ ميزة قائمة الكتب باستخدام لغة قالب Django وListView، إلى جانب إنشاء الملفات الضرورية مثل book_list.html وurls.py. بالإضافة إلى ذلك، يؤكد على أفضل الممارسات مثل استخدام ملف .gitignore لاستبعاد المعلومات الحساسة والحفاظ على ملف requirements.txt لإدارة الحزم.",
                // Persian
                "فارسی": "فصل 3 بر راه اندازی یک پروژه جنگو سنتی برای یک وب سایت کتابخانه تمرکز دارد که شامل ایجاد یک برنامه جدید، به روز رسانی مدل ها، نماها، URL ها و قالب ها می شود. جزئیات اجرای یک ویژگی فهرست کتاب با استفاده از زبان قالب جنگو و ListView، همراه با ایجاد فایل‌های ضروری مانند book_list.html و urls.py. به‌علاوه، بر بهترین شیوه‌ها مانند استفاده از فایل .gitignore برای حذف اطلاعات حساس و نگهداری فایل requires.txt برای مدیریت بسته تأکید می‌کند.",
            },
        },
        // 4
        {
            "ChapterName": "Library API",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 4 focuses on transforming a basic Django website into a web API using Django REST Framework. It covers the installation of the framework, the creation of a dedicated app for API logic, and the implementation of a to expose a read-only endpoint for listing all books in JSON format. The chapter also discusses the creation of a for data formatting, the use of the browsable API for testing, and outlines the steps for deploying the project to Heroku, including setting up static files and configuring the production server with Gunicorn.",
                // German
                "Deutsch": "Kapitel 4 konzentriert sich auf die Umwandlung einer einfachen Django-Website in eine Web-API mithilfe des Django REST Frameworks. Es behandelt die Installation des Frameworks, die Erstellung einer dedizierten App für die API-Logik und die Implementierung eines zur Bereitstellung eines schreibgeschützten Endpunkts zum Auflisten aller Bücher im JSON-Format. Das Kapitel behandelt auch die Erstellung eines zur Datenformatierung, die Verwendung der durchsuchbaren API zum Testen und beschreibt die Schritte zum Bereitstellen des Projekts auf Heroku, einschließlich der Einrichtung statischer Dateien und der Konfiguration des Produktionsservers mit Gunicorn.",
                // Chinese
                "中国人": "第 4 章重点介绍如何使用 Django REST Framework 将基本的 Django 网站转换为 Web API。它涵盖了框架的安装、为 API 逻辑创建专用应用程序以及实现以公开只读端点以列出 JSON 格式的所有书籍。本章还讨论了创建用于数据格式化的、使用可浏览 API 进行测试，并概述了将项目部署到 Heroku 的步骤，包括设置静态文件和使用 Gunicorn 配置生产服务器。",
                // Russian
                "Русский": "Глава 4 посвящена преобразованию базового веб-сайта Django в веб-API с использованием Django REST Framework. Она охватывает установку фреймворка, создание специального приложения для логики API и реализацию для предоставления конечной точки только для чтения для перечисления всех книг в формате JSON. В главе также обсуждается создание для форматирования данных, использование просматриваемого API для тестирования и описываются шаги по развертыванию проекта на Heroku, включая настройку статических файлов и настройку производственного сервера с помощью Gunicorn.",
                // French
                "Français": "Le chapitre 4 se concentre sur la transformation d'un site Web Django de base en une API Web à l'aide de Django REST Framework. Il couvre l'installation du framework, la création d'une application dédiée à la logique API et l'implémentation d'un pour exposer un point de terminaison en lecture seule permettant de répertorier tous les livres au format JSON. Le chapitre aborde également la création d'un pour le formatage des données, l'utilisation de l'API consultable pour les tests et décrit les étapes de déploiement du projet sur Heroku, y compris la configuration des fichiers statiques et la configuration du serveur de production avec Gunicorn.",
                // Japanese
                "日本語": "第 4 章では、Django REST フレームワークを使用して基本的な Django Web サイトを Web API に変換することに焦点を当てています。フレームワークのインストール、API ロジック専用のアプリの作成、JSON 形式ですべての書籍を一覧表示する読み取り専用エンドポイントを公開するための の実装について説明します。また、この章では、データ フォーマット用の の作成、テスト用の参照可能な API の使用についても説明し、静的ファイルの設定や Gunicorn を使用した運用サーバーの構成など、プロジェクトを Heroku にデプロイする手順の概要を説明します。",
                // Korean
                "한국인": "4장은 Django REST Framework를 사용하여 기본 Django 웹사이트를 웹 API로 변환하는 데 중점을 둡니다. 프레임워크 설치, API 로직을 위한 전용 앱 생성, JSON 형식으로 모든 책을 나열하는 읽기 전용 엔드포인트를 노출하는 a 구현을 다룹니다. 이 장에서는 또한 데이터 포맷팅을 위한 a 생성, 테스트를 위한 탐색 가능 API 사용, 정적 파일 설정 및 Gunicorn을 사용하여 프로덕션 서버 구성을 포함하여 Heroku에 프로젝트를 배포하는 단계를 설명합니다.",
                // Spanish
                "Español": "El capítulo 4 se centra en la transformación de un sitio web básico de Django en una API web mediante el marco Django REST. Abarca la instalación del marco, la creación de una aplicación dedicada a la lógica de la API y la implementación de un para exponer un punto final de solo lectura para enumerar todos los libros en formato JSON. El capítulo también analiza la creación de un para el formato de datos, el uso de la API navegable para realizar pruebas y describe los pasos para implementar el proyecto en Heroku, incluida la configuración de archivos estáticos y del servidor de producción con Gunicorn.",
                // Hindi
                "हिंदी": "अध्याय 4 में Django REST फ्रेमवर्क का उपयोग करके एक बुनियादी Django वेबसाइट को वेब API में बदलने पर ध्यान केंद्रित किया गया है। इसमें फ्रेमवर्क की स्थापना, API लॉजिक के लिए एक समर्पित ऐप का निर्माण और JSON प्रारूप में सभी पुस्तकों को सूचीबद्ध करने के लिए केवल-पढ़ने के लिए एंडपॉइंट को उजागर करने के लिए एक के कार्यान्वयन को शामिल किया गया है। अध्याय में डेटा फ़ॉर्मेटिंग के लिए एक के निर्माण, परीक्षण के लिए ब्राउज़ करने योग्य API के उपयोग पर भी चर्चा की गई है, और प्रोजेक्ट को Heroku पर तैनात करने के चरणों की रूपरेखा दी गई है, जिसमें स्टैटिक फ़ाइलों को सेट करना और Gunicorn के साथ प्रोडक्शन सर्वर को कॉन्फ़िगर करना शामिल है।",
                // Portuguese
                "Português": "O Capítulo 4 centra-se na transformação de um site Django básico numa API web utilizando o Django REST Framework. Abrange a instalação da estrutura, a criação de uma aplicação dedicada para a lógica da API e a implementação de um endpoint de leitura apenas para listar todos os livros no formato JSON. O capítulo aborda também a criação de uma formatação de dados, a utilização da API navegável para testes e descreve os passos para implementar o projeto no Heroku, incluindo a configuração de ficheiros estáticos e a configuração do servidor de produção com Gunicorn.",
                // Bengali
                "বাংলা": "অধ্যায় 4 জ্যাঙ্গো REST ফ্রেমওয়ার্ক ব্যবহার করে একটি মৌলিক জ্যাঙ্গো ওয়েবসাইটকে একটি ওয়েব API তে রূপান্তরিত করার উপর দৃষ্টি নিবদ্ধ করে। এটি ফ্রেমওয়ার্কের ইনস্টলেশন, API লজিকের জন্য একটি ডেডিকেটেড অ্যাপ তৈরি এবং JSON ফর্ম্যাটে সমস্ত বই তালিকাভুক্ত করার জন্য একটি শুধুমাত্র পঠনযোগ্য এন্ডপয়েন্ট উন্মুক্ত করার জন্য একটি বাস্তবায়নকে কভার করে। অধ্যায়টি ডেটা ফরম্যাটিং-এর জন্য একটি তৈরি, পরীক্ষার জন্য ব্রাউজযোগ্য API-এর ব্যবহার নিয়েও আলোচনা করে এবং হেরোকুতে প্রকল্পটি স্থাপনের পদক্ষেপের রূপরেখা দেয়, যার মধ্যে স্ট্যাটিক ফাইল সেট আপ করা এবং গুণিকর্নের সাথে প্রোডাকশন সার্ভার কনফিগার করা।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الرابع على تحويل موقع ويب Django أساسي إلى واجهة برمجة تطبيقات ويب باستخدام إطار عمل Django REST. ويغطي تثبيت الإطار وإنشاء تطبيق مخصص لمنطق واجهة برمجة التطبيقات وتنفيذ واجهة برمجة التطبيقات لعرض نقطة نهاية للقراءة فقط لإدراج جميع الكتب بتنسيق JSON. ويناقش الفصل أيضًا إنشاء واجهة برمجة تطبيقات لتنسيق البيانات واستخدام واجهة برمجة التطبيقات القابلة للتصفح للاختبار ويوضح الخطوات اللازمة لنشر المشروع على Heroku، بما في ذلك إعداد الملفات الثابتة وتكوين خادم الإنتاج باستخدام Gunicorn.",
                // Persian
                "فارسی": "فصل 4 بر تبدیل یک وب سایت اصلی جنگو به یک وب API با استفاده از چارچوب Django REST تمرکز دارد. این شامل نصب چارچوب، ایجاد یک برنامه اختصاصی برای منطق API، و اجرای یک نقطه پایانی فقط خواندنی برای فهرست کردن همه کتاب‌ها در قالب JSON است. این فصل همچنین درباره ایجاد یک برای قالب‌بندی داده، استفاده از API قابل مرور برای آزمایش، و مراحل استقرار پروژه در Heroku، از جمله راه‌اندازی فایل‌های استاتیک و پیکربندی سرور تولید با Gunicorn را توضیح می‌دهد.",
            },
        },
        // 5
        {
            "ChapterName": "Todo API",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In Chapter 5, we build and deploy a Todo API back-end using Django and Django REST Framework, creating endpoints for both all todos and individual todo items. The chapter covers the importance of Single Page Apps (SPAs) for mobile and web applications, highlights the advantages of separating front-end and back-end development, and introduces key concepts like CORS for security. We define a Todo model, implement serializers and views, and ensure proper configurations for deployment, emphasizing the ease of creating APIs with minimal code while preparing for future enhancements.",
                // German
                "Deutsch": "In Kapitel 5 erstellen und implementieren wir ein Todo-API-Backend mit Django und dem Django REST Framework und erstellen Endpunkte sowohl für alle To-dos als auch für einzelne To-do-Elemente. Das Kapitel behandelt die Bedeutung von Single Page Apps (SPAs) für mobile und Webanwendungen, hebt die Vorteile der Trennung von Frontend- und Backend-Entwicklung hervor und führt Schlüsselkonzepte wie CORS für die Sicherheit ein. Wir definieren ein Todo-Modell, implementieren Serialisierer und Ansichten und stellen die richtigen Konfigurationen für die Implementierung sicher. Dabei betonen wir die einfache Erstellung von APIs mit minimalem Code und bereiten uns gleichzeitig auf zukünftige Erweiterungen vor.",
                // Chinese
                "中国人": "在第 5 章中，我们使用 Django 和 Django REST Framework 构建和部署 Todo API 后端，为所有待办事项和单个待办事项创建端点。本章介绍了单页应用 (SPA) 对于移动和 Web 应用程序的重要性，强调了分离前端和后端开发的优势，并介绍了 CORS 等安全关键概念。我们定义了 Todo 模型，实现了序列化程序和视图，并确保了正确的部署配置，强调了使用最少的代码轻松创建 API，同时为未来的增强功能做好准备。",
                // Russian
                "Русский": "В главе 5 мы создаем и развертываем бэкенд Todo API с использованием Django и Django REST Framework, создавая конечные точки как для всех todo, так и для отдельных элементов todo. В главе рассматривается важность одностраничных приложений (SPA) для мобильных и веб-приложений, подчеркиваются преимущества разделения разработки front-end и back-end, а также вводятся такие ключевые концепции, как CORS для безопасности. Мы определяем модель Todo, реализуем сериализаторы и представления и обеспечиваем правильные конфигурации для развертывания, подчеркивая простоту создания API с минимальным кодом при подготовке к будущим улучшениям.",
                // French
                "Français": "Dans le chapitre 5, nous créons et déployons un back-end d'API Todo à l'aide de Django et de Django REST Framework, en créant des points de terminaison pour toutes les tâches et les éléments de tâche individuels. Le chapitre aborde l'importance des applications monopage (SPA) pour les applications mobiles et Web, met en évidence les avantages de la séparation du développement front-end et back-end, et introduit des concepts clés comme CORS pour la sécurité. Nous définissons un modèle Todo, implémentons des sérialiseurs et des vues, et garantissons des configurations appropriées pour le déploiement, en mettant l'accent sur la facilité de création d'API avec un minimum de code tout en préparant les améliorations futures.",
                // Japanese
                "日本語": "第 5 章では、Django と Django REST Framework を使用して Todo API バックエンドを構築およびデプロイし、すべての Todo と個々の Todo 項目の両方のエンドポイントを作成します。この章では、モバイル アプリケーションと Web アプリケーションにおけるシングル ページ アプリ (SPA) の重要性について説明し、フロントエンドとバックエンドの開発を分離することの利点を強調し、セキュリティのための CORS などの重要な概念を紹介します。Todo モデルを定義し、シリアライザーとビューを実装し、デプロイのための適切な構成を確保し、将来の機能強化に備えながら最小限のコードで API を簡単に作成できることを強調します。",
                // Korean
                "한국인": "5장에서는 Django와 Django REST Framework를 사용하여 Todo API 백엔드를 빌드하고 배포하여 모든 Todo와 개별 Todo 항목에 대한 엔드포인트를 만듭니다. 이 장에서는 모바일 및 웹 애플리케이션에 대한 단일 페이지 앱(SPA)의 중요성을 다루고 프런트엔드와 백엔드 개발을 분리하는 이점을 강조하며 보안을 위한 CORS와 같은 핵심 개념을 소개합니다. Todo 모델을 정의하고, 직렬화기와 뷰를 구현하고, 배포를 위한 적절한 구성을 보장하며, 향후 개선을 준비하는 동안 최소한의 코드로 API를 만드는 용이성을 강조합니다.",
                // Spanish
                "Español": "En el Capítulo 5, construimos e implementamos un back-end de API de tareas pendientes usando Django y Django REST Framework, creando puntos finales tanto para todas las tareas pendientes como para elementos individuales de las tareas pendientes. El capítulo cubre la importancia de las aplicaciones de página única (SPA) para aplicaciones móviles y web, destaca las ventajas de separar el desarrollo de front-end y back-end, y presenta conceptos clave como CORS para seguridad. Definimos un modelo de tareas pendientes, implementamos serializadores y vistas, y garantizamos configuraciones adecuadas para la implementación, enfatizando la facilidad de crear API con un código mínimo mientras nos preparamos para futuras mejoras.",
                // Hindi
                "हिंदी": "अध्याय 5 में, हम Django और Django REST फ्रेमवर्क का उपयोग करके एक Todo API बैक-एंड का निर्माण और परिनियोजन करते हैं, सभी टूडो और व्यक्तिगत टूडो आइटम दोनों के लिए एंडपॉइंट बनाते हैं। अध्याय मोबाइल और वेब अनुप्रयोगों के लिए सिंगल पेज ऐप्स (SPA) के महत्व को शामिल करता है, फ्रंट-एंड और बैक-एंड डेवलपमेंट को अलग करने के लाभों पर प्रकाश डालता है, और सुरक्षा के लिए CORS जैसी प्रमुख अवधारणाओं का परिचय देता है। हम एक Todo मॉडल को परिभाषित करते हैं, सीरियलाइज़र और दृश्य लागू करते हैं, और परिनियोजन के लिए उचित कॉन्फ़िगरेशन सुनिश्चित करते हैं, भविष्य के संवर्द्धन की तैयारी करते समय न्यूनतम कोड के साथ API बनाने की आसानी पर जोर देते हैं।",
                // Portuguese
                "Português": "No Capítulo 5, construímos e implementámos um back-end de API Todo utilizando Django e Django REST Framework, criando endpoints para todos os todos e itens de tarefas individuais. O capítulo aborda a importância das aplicações de página única (SPAs) para aplicações móveis e web, destaca as vantagens de separar o desenvolvimento front-end e back-end e apresenta conceitos-chave como o CORS para a segurança. Definimos um modelo Todo, implementamos serializadores e visualizações e garantimos configurações adequadas para a implementação, enfatizando a facilidade de criação de APIs com código mínimo enquanto nos preparamos para melhorias futuras.",
                // Bengali
                "বাংলা": "অধ্যায় 5-এ, আমরা Django এবং Django REST Framework ব্যবহার করে একটি Todo API ব্যাক-এন্ড তৈরি এবং স্থাপন করি, যা সমস্ত টোডো এবং পৃথক করণীয় আইটেম উভয়ের জন্য শেষ পয়েন্ট তৈরি করি। অধ্যায়টি মোবাইল এবং ওয়েব অ্যাপ্লিকেশনের জন্য সিঙ্গেল পেজ অ্যাপস (এসপিএ) এর গুরুত্বকে কভার করে, ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড ডেভেলপমেন্টকে আলাদা করার সুবিধাগুলিকে হাইলাইট করে এবং নিরাপত্তার জন্য CORS-এর মতো মূল ধারণাগুলি প্রবর্তন করে। আমরা একটি টোডো মডেল সংজ্ঞায়িত করি, সিরিয়ালাইজার এবং ভিউ প্রয়োগ করি এবং স্থাপনার জন্য যথাযথ কনফিগারেশন নিশ্চিত করি, ভবিষ্যতের উন্নতির জন্য প্রস্তুতির সময় ন্যূনতম কোড সহ API তৈরির সহজতার উপর জোর দিয়ে।",
                // Arabic
                "عَرَبِيّ": "في الفصل الخامس، نقوم ببناء ونشر واجهة برمجة تطبيقات Todo الخلفية باستخدام Django وإطار عمل Django REST، مما يؤدي إلى إنشاء نقاط نهاية لكل من المهام وعناصر المهام الفردية. ويغطي الفصل أهمية تطبيقات الصفحة الواحدة (SPAs) للتطبيقات المحمولة والويب، ويسلط الضوء على مزايا فصل تطوير الواجهة الأمامية والخلفية، ويقدم مفاهيم رئيسية مثل CORS للأمان. نقوم بتعريف نموذج Todo، وتنفيذ المسلسلات والعروض، وضمان التكوينات المناسبة للنشر، مع التأكيد على سهولة إنشاء واجهات برمجة التطبيقات بأقل قدر من التعليمات البرمجية أثناء الاستعداد للتحسينات المستقبلية.",
                // Persian
                "فارسی": "در فصل 5، ما یک Todo API back-end را با استفاده از Django و Django REST Framework ساخته و مستقر می کنیم، و نقاط پایانی را هم برای همه کارها و هم برای موارد تک تک انجام می دهیم. این فصل اهمیت اپلیکیشن‌های تک صفحه‌ای (SPA) برای برنامه‌های موبایل و وب را پوشش می‌دهد، مزایای جداسازی توسعه جلویی و بک‌اند را برجسته می‌کند، و مفاهیم کلیدی مانند CORS را برای امنیت معرفی می‌کند. ما یک مدل Todo را تعریف می‌کنیم، سریال‌سازها و نماها را پیاده‌سازی می‌کنیم، و از تنظیمات مناسب برای استقرار اطمینان می‌دهیم، با تاکید بر سهولت ایجاد API با حداقل کد در حالی که برای پیشرفت‌های آینده آماده می‌شویم.",
            },
        },
        // 6
        {
            "ChapterName": "Blog API",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 6 focuses on building a Blog API using Django REST Framework, emphasizing the creation of a dedicated posts app with a Post model that includes fields for title, body, author, and timestamps. The chapter guides readers through setting up the project, configuring the Django admin interface, and implementing serializers to control data exposure in the API. It also covers the use of generic views for CRUD operations, allowing for both read and write access to blog posts, and highlights the importance of managing user permissions for secure API access.",
                // German
                "Deutsch": "Kapitel 6 konzentriert sich auf die Erstellung einer Blog-API mithilfe des Django REST Frameworks und legt den Schwerpunkt auf die Erstellung einer dedizierten Posts-App mit einem Post-Modell, das Felder für Titel, Text, Autor und Zeitstempel enthält. Das Kapitel führt die Leser durch die Einrichtung des Projekts, die Konfiguration der Django-Administratoroberfläche und die Implementierung von Serialisierern zur Kontrolle der Datenfreigabe in der API. Es behandelt auch die Verwendung generischer Ansichten für CRUD-Operationen, die sowohl Lese- als auch Schreibzugriff auf Blog-Posts ermöglichen, und betont die Bedeutung der Verwaltung von Benutzerberechtigungen für einen sicheren API-Zugriff.",
                // Chinese
                "中国人": "第 6 章重点介绍如何使用 Django REST Framework 构建博客 API，重点介绍如何使用 Post 模型创建专用帖子应用程序，该模型包含标题、正文、作者和时间戳字段。本章指导读者设置项目、配置 Django 管理界面以及实现序列化程序以控制 API 中的数据暴露。它还介绍了通用视图用于 CRUD 操作的使用，允许对博客文章进行读写访问，并强调了管理用户权限以实现安全 API 访问的重要性。",
                // Russian
                "Русский": "Глава 6 посвящена построению API блога с использованием Django REST Framework, подчеркивая создание специального приложения для постов с моделью Post, которая включает поля для заголовка, тела, автора и временных меток. Глава знакомит читателей с настройкой проекта, настройкой интерфейса администратора Django и реализацией сериализаторов для управления раскрытием данных в API. Она также охватывает использование универсальных представлений для операций CRUD, позволяя как читать, так и записывать посты блога, и подчеркивает важность управления разрешениями пользователей для безопасного доступа к API.",
                // French
                "Français": "Le chapitre 6 se concentre sur la création d'une API de blog à l'aide de Django REST Framework, en mettant l'accent sur la création d'une application de publications dédiée avec un modèle de publication qui comprend des champs pour le titre, le corps, l'auteur et les horodatages. Le chapitre guide les lecteurs dans la configuration du projet, la configuration de l'interface d'administration Django et l'implémentation de sérialiseurs pour contrôler l'exposition des données dans l'API. Il couvre également l'utilisation de vues génériques pour les opérations CRUD, permettant un accès en lecture et en écriture aux articles de blog, et souligne l'importance de la gestion des autorisations des utilisateurs pour un accès API sécurisé.",
                // Japanese
                "日本語": "第 6 章では、Django REST フレームワークを使用してブログ API を構築することに焦点を当て、タイトル、本文、作成者、タイムスタンプのフィールドを含む Post モデルを使用して専用の投稿アプリを作成することに重点を置いています。この章では、プロジェクトのセットアップ、Django 管理インターフェイスの構成、API でのデータ公開を制御するシリアライザーの実装について説明します。また、ブログ投稿への読み取りアクセスと書き込みアクセスの両方を可能にする CRUD 操作の汎用ビューの使用についても説明し、安全な API アクセスのためにユーザー権限を管理することの重要性を強調します。",
                // Korean
                "한국인": "6장은 Django REST Framework를 사용하여 블로그 API를 빌드하는 데 중점을 두고, 제목, 본문, 작성자, 타임스탬프 필드를 포함하는 Post 모델이 있는 전용 게시물 앱을 만드는 것을 강조합니다. 이 장에서는 독자에게 프로젝트 설정, Django 관리자 인터페이스 구성, API에서 데이터 노출을 제어하기 위한 직렬화기 구현 방법을 안내합니다. 또한 CRUD 작업을 위한 일반 뷰의 사용을 다루어 블로그 게시물에 대한 읽기 및 쓰기 액세스를 허용하고, 안전한 API 액세스를 위해 사용자 권한을 관리하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "El capítulo 6 se centra en la creación de una API de blogs utilizando el marco REST de Django, y hace hincapié en la creación de una aplicación de publicaciones dedicada con un modelo de publicaciones que incluye campos para título, cuerpo, autor y marcas de tiempo. El capítulo guía a los lectores en la configuración del proyecto, la configuración de la interfaz de administración de Django y la implementación de serializadores para controlar la exposición de datos en la API. También cubre el uso de vistas genéricas para operaciones CRUD, lo que permite el acceso de lectura y escritura a las publicaciones del blog, y destaca la importancia de administrar los permisos de usuario para un acceso seguro a la API.",
                // Hindi
                "हिंदी": "अध्याय 6 Django REST फ्रेमवर्क का उपयोग करके एक ब्लॉग API बनाने पर ध्यान केंद्रित करता है, जिसमें एक पोस्ट मॉडल के साथ एक समर्पित पोस्ट ऐप के निर्माण पर जोर दिया गया है जिसमें शीर्षक, मुख्य भाग, लेखक और टाइमस्टैम्प के लिए फ़ील्ड शामिल हैं। अध्याय पाठकों को प्रोजेक्ट सेट अप करने, Django एडमिन इंटरफ़ेस को कॉन्फ़िगर करने और API में डेटा एक्सपोज़र को नियंत्रित करने के लिए सीरियलाइज़र को लागू करने के बारे में मार्गदर्शन करता है। यह CRUD संचालन के लिए जेनेरिक दृश्यों के उपयोग को भी कवर करता है, जो ब्लॉग पोस्ट को पढ़ने और लिखने दोनों की अनुमति देता है, और सुरक्षित API पहुँच के लिए उपयोगकर्ता अनुमतियों को प्रबंधित करने के महत्व पर प्रकाश डालता है।",
                // Portuguese
                "Português": "O Capítulo 6 centra-se na construção de uma API de Blog utilizando o Django REST Framework, enfatizando a criação de uma aplicação de posts dedicada com um modelo Post que inclui campos para o título, corpo, autor e carimbos de data/hora. O capítulo orienta os leitores na configuração do projeto, na configuração da interface administrativa do Django e na implementação de serializadores para controlar a exposição de dados na API. Aborda também a utilização de visualizações genéricas para operações CRUD, permitindo o acesso de leitura e escrita às publicações do blogue, e destaca a importância de gerir as permissões dos utilizadores para um acesso seguro à API.",
                // Bengali
                "বাংলা": "অধ্যায় 6 জ্যাঙ্গো REST ফ্রেমওয়ার্ক ব্যবহার করে একটি ব্লগ API তৈরির উপর ফোকাস করে, একটি পোস্ট মডেলের সাথে একটি ডেডিকেটেড পোস্ট অ্যাপ তৈরির উপর জোর দেয় যাতে শিরোনাম, বডি, লেখক এবং টাইমস্ট্যাম্পের জন্য ক্ষেত্র অন্তর্ভুক্ত থাকে। অধ্যায়টি প্রজেক্ট সেট আপ করার, জ্যাঙ্গো অ্যাডমিন ইন্টারফেস কনফিগার করার এবং API-এ ডেটা এক্সপোজার নিয়ন্ত্রণ করতে সিরিয়ালাইজার প্রয়োগ করার মাধ্যমে পাঠকদের গাইড করে। এটি CRUD ক্রিয়াকলাপের জন্য জেনেরিক ভিউ ব্যবহারকেও কভার করে, ব্লগ পোস্টগুলি পড়তে এবং লিখতে উভয়েরই অনুমতি দেয় এবং নিরাপদ API অ্যাক্সেসের জন্য ব্যবহারকারীর অনুমতিগুলি পরিচালনার গুরুত্ব তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل السادس على بناء واجهة برمجة تطبيقات للمدونة باستخدام إطار عمل Django REST، مع التركيز على إنشاء تطبيق منشورات مخصص بنموذج منشور يتضمن حقولاً للعنوان والنص والمؤلف والطوابع الزمنية. يرشد الفصل القراء خلال إعداد المشروع وتكوين واجهة إدارة Django وتنفيذ المسلسلات للتحكم في عرض البيانات في واجهة برمجة التطبيقات. كما يغطي استخدام وجهات النظر العامة لعمليات CRUD، مما يسمح بالوصول للقراءة والكتابة إلى منشورات المدونة، ويسلط الضوء على أهمية إدارة أذونات المستخدم للوصول الآمن إلى واجهة برمجة التطبيقات.",
                // Persian
                "فارسی": "فصل 6 بر ایجاد یک Blog API با استفاده از Django REST Framework تمرکز دارد و بر ایجاد یک برنامه پست اختصاصی با یک مدل Post که شامل فیلدهایی برای عنوان، متن، نویسنده و مُهرهای زمانی است، تأکید دارد. این فصل خوانندگان را از طریق راه‌اندازی پروژه، پیکربندی رابط مدیریت جنگو و اجرای سریال‌سازها برای کنترل قرار گرفتن در معرض داده در API راهنمایی می‌کند. همچنین استفاده از نماهای عمومی برای عملیات CRUD را پوشش می دهد و امکان دسترسی خواندن و نوشتن به پست های وبلاگ را فراهم می کند و اهمیت مدیریت مجوزهای کاربر برای دسترسی ایمن API را برجسته می کند.",
            },
        },
        // 7
        {
            "ChapterName": "Permissions",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 7 focuses on the critical importance of setting proper permissions in APIs to ensure security and restrict access to authenticated users. It discusses the implementation of Django REST Framework's built-in permissions, such as AllowAny and IsAuthenticated, while emphasizing the creation of custom permissions like , which allows only the authors of blog posts to edit or delete their content. The chapter concludes by highlighting the necessity of establishing a strict project-level permissions policy and customizing permissions for specific API endpoints to meet project requirements.",
                // German
                "Deutsch": "Kapitel 7 konzentriert sich auf die entscheidende Bedeutung der Festlegung geeigneter Berechtigungen in APIs, um die Sicherheit zu gewährleisten und den Zugriff auf authentifizierte Benutzer zu beschränken. Es bespricht die Implementierung der integrierten Berechtigungen des Django REST Frameworks, wie AllowAny und IsAuthenticated, und betont die Erstellung benutzerdefinierter Berechtigungen wie , die nur den Autoren von Blogbeiträgen das Bearbeiten oder Löschen ihrer Inhalte erlauben. Das Kapitel schließt mit der Betonung der Notwendigkeit, eine strikte Berechtigungsrichtlinie auf Projektebene festzulegen und Berechtigungen für bestimmte API-Endpunkte anzupassen, um die Projektanforderungen zu erfüllen.",
                // Chinese
                "中国人": "第 7 章重点介绍了在 API 中设置适当权限以确保安全性和限制对经过身份验证的用户的访问的重要性。它讨论了 Django REST Framework 内置权限（例如 AllowAny 和 IsAuthenticated）的实现，同时强调了创建自定义权限（例如），这只允许博客文章的作者编辑或删除其内容。本章最后强调了建立严格的项目级权限策略和自定义特定 API 端点权限以满足项目要求的必要性。",
                // Russian
                "Русский": "Глава 7 фокусируется на критической важности установки правильных разрешений в API для обеспечения безопасности и ограничения доступа для аутентифицированных пользователей. В ней обсуждается реализация встроенных разрешений Django REST Framework, таких как AllowAny и IsAuthenticated, при этом особое внимание уделяется созданию пользовательских разрешений, таких как , которые позволяют только авторам сообщений в блоге редактировать или удалять их содержимое. Глава завершается подчеркиванием необходимости установления строгой политики разрешений на уровне проекта и настройки разрешений для определенных конечных точек API для соответствия требованиям проекта.",
                // French
                "Français": "Le chapitre 7 met l'accent sur l'importance cruciale de définir des autorisations appropriées dans les API pour garantir la sécurité et restreindre l'accès aux utilisateurs authentifiés. Il aborde l'implémentation des autorisations intégrées de Django REST Framework, telles que AllowAny et IsAuthenticated, tout en mettant l'accent sur la création d'autorisations personnalisées telles que , qui permettent uniquement aux auteurs d'articles de blog de modifier ou de supprimer leur contenu. Le chapitre conclut en soulignant la nécessité d'établir une politique d'autorisations stricte au niveau du projet et de personnaliser les autorisations pour des points de terminaison d'API spécifiques afin de répondre aux exigences du projet.",
                // Japanese
                "日本語": "第 7 章では、セキュリティを確保し、認証されたユーザーのみにアクセスを制限するために、API に適切な権限を設定することの重要性に焦点を当てています。AllowAny や IsAuthenticated などの Django REST Framework の組み込み権限の実装について説明しながら、ブログ投稿の作成者のみがコンテンツを編集または削除できるようにする などのカスタム権限の作成を強調しています。この章の最後には、プロジェクト レベルの厳格な権限ポリシーを確立し、プロジェクトの要件を満たすために特定の API エンドポイントの権限をカスタマイズする必要性を強調しています。",
                // Korean
                "한국인": "7장은 보안을 보장하고 인증된 사용자에 대한 액세스를 제한하기 위해 API에서 적절한 권한을 설정하는 것의 중요성에 초점을 맞춥니다. AllowAny 및 IsAuthenticated와 같은 Django REST Framework의 기본 제공 권한 구현에 대해 논의하는 동시에 블로그 게시물 작성자만 콘텐츠를 편집하거나 삭제할 수 있도록 하는 와 같은 사용자 지정 권한 생성을 강조합니다. 이 장은 엄격한 프로젝트 수준 권한 정책을 수립하고 프로젝트 요구 사항을 충족하기 위해 특정 API 엔드포인트에 대한 권한을 사용자 지정해야 할 필요성을 강조하면서 마무리합니다.",
                // Spanish
                "Español": "El capítulo 7 se centra en la importancia crítica de establecer permisos adecuados en las API para garantizar la seguridad y restringir el acceso a los usuarios autenticados. Analiza la implementación de los permisos integrados de Django REST Framework, como AllowAny e IsAuthenticated, al tiempo que hace hincapié en la creación de permisos personalizados como , que permite que solo los autores de las publicaciones del blog editen o eliminen su contenido. El capítulo concluye destacando la necesidad de establecer una política estricta de permisos a nivel de proyecto y personalizar los permisos para puntos finales de API específicos para cumplir con los requisitos del proyecto.",
                // Hindi
                "हिंदी": "अध्याय 7 सुरक्षा सुनिश्चित करने और प्रमाणित उपयोगकर्ताओं तक पहुँच को प्रतिबंधित करने के लिए API में उचित अनुमतियाँ सेट करने के महत्वपूर्ण महत्व पर ध्यान केंद्रित करता है। यह Django REST फ्रेमवर्क की अंतर्निहित अनुमतियों, जैसे कि AllowAny और IsAuthenticated के कार्यान्वयन पर चर्चा करता है, जबकि कस्टम अनुमतियों के निर्माण पर जोर देता है, जो केवल ब्लॉग पोस्ट के लेखकों को उनकी सामग्री को संपादित या हटाने की अनुमति देता है। अध्याय एक सख्त परियोजना-स्तरीय अनुमति नीति स्थापित करने और परियोजना की आवश्यकताओं को पूरा करने के लिए विशिष्ट API एंडपॉइंट के लिए अनुमतियों को अनुकूलित करने की आवश्यकता पर प्रकाश डालते हुए समाप्त होता है।",
                // Portuguese
                "Português": "O Capítulo 7 centra-se na importância crítica de definir permissões adequadas nas APIs para garantir a segurança e restringir o acesso a utilizadores autenticados. Discute a implementação das permissões integradas do Django REST Framework, como AllowAny e IsAuthenticated, ao mesmo tempo que enfatiza a criação de permissões personalizadas como , que permite apenas aos autores de publicações de blogues editar ou eliminar o seu conteúdo. O capítulo conclui destacando a necessidade de estabelecer uma política rigorosa de permissões ao nível do projeto e personalizar as permissões para terminais API específicos para satisfazer os requisitos do projeto.",
                // Bengali
                "বাংলা": "অধ্যায় 7 নিরাপত্তা নিশ্চিত করতে এবং প্রমাণীকৃত ব্যবহারকারীদের অ্যাক্সেস সীমিত করতে API-এ যথাযথ অনুমতি সেট করার গুরুত্বপূর্ণ গুরুত্বের উপর দৃষ্টি নিবদ্ধ করে। এটি Django REST Framework-এর অন্তর্নির্মিত অনুমতিগুলির বাস্তবায়ন নিয়ে আলোচনা করে, যেমন AllowAny এবং IsAuthenticated, যেমন কাস্টম অনুমতি তৈরির উপর জোর দেয়, যা শুধুমাত্র ব্লগ পোস্টের লেখকদের তাদের বিষয়বস্তু সম্পাদনা বা মুছে ফেলার অনুমতি দেয়। অধ্যায়টি প্রকল্পের প্রয়োজনীয়তা পূরণের জন্য একটি কঠোর প্রকল্প-স্তরের অনুমতি নীতি প্রতিষ্ঠার প্রয়োজনীয়তা এবং নির্দিষ্ট API শেষ পয়েন্টগুলির জন্য অনুমতিগুলি কাস্টমাইজ করার প্রয়োজনীয়তা তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل السابع على الأهمية الحاسمة لتعيين الأذونات المناسبة في واجهات برمجة التطبيقات لضمان الأمان وتقييد الوصول للمستخدمين المعتمدين. ويناقش تنفيذ الأذونات المضمنة في إطار عمل Django REST، مثل AllowAny وIsAuthenticated، مع التأكيد على إنشاء أذونات مخصصة مثل، والتي تسمح فقط لمؤلفي منشورات المدونة بتحرير أو حذف محتواهم. ويختتم الفصل بتسليط الضوء على ضرورة إنشاء سياسة أذونات صارمة على مستوى المشروع وتخصيص الأذونات لنقاط نهاية واجهة برمجة التطبيقات المحددة لتلبية متطلبات المشروع.",
                // Persian
                "فارسی": "فصل 7 بر اهمیت حیاتی تنظیم مجوزهای مناسب در APIها برای اطمینان از امنیت و محدود کردن دسترسی به کاربران تأیید شده تمرکز دارد. این برنامه در مورد اجرای مجوزهای داخلی جنگو REST Framework، مانند AllowAny و IsAuthenticated بحث می‌کند، در حالی که بر ایجاد مجوزهای سفارشی مانند، که فقط به نویسندگان پست‌های وبلاگ اجازه می‌دهد محتوای خود را ویرایش یا حذف کنند، تأکید می‌کند. این فصل با تأکید بر ضرورت ایجاد یک خط مشی مجوزهای سختگیرانه در سطح پروژه و سفارشی کردن مجوزها برای نقاط پایانی API خاص برای برآورده کردن الزامات پروژه به پایان می رسد.",
            },
        },
        // 8
        {
            "ChapterName": "User Authentication",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 8 focuses on user authentication, detailing the processes of account registration, login, and logout within APIs, contrasting it with traditional session-based authentication used in monolithic Django websites. It explores various authentication methods, including Basic, Session, and Token Authentication, while emphasizing the advantages of Token Authentication for stateless interactions across multiple front-ends. The chapter advocates for using third-party packages like dj-rest-auth and django-allauth to simplify the implementation of user authentication, highlighting the complexities involved and the importance of leveraging established solutions to enhance security and efficiency.",
                // German
                "Deutsch": "Kapitel 8 konzentriert sich auf die Benutzerauthentifizierung und beschreibt detailliert die Prozesse der Kontoregistrierung, Anmeldung und Abmeldung innerhalb von APIs und vergleicht sie mit der traditionellen sitzungsbasierten Authentifizierung, die in monolithischen Django-Websites verwendet wird. Es untersucht verschiedene Authentifizierungsmethoden, darunter Basis-, Sitzungs- und Token-Authentifizierung, und betont gleichzeitig die Vorteile der Token-Authentifizierung für zustandslose Interaktionen über mehrere Frontends hinweg. Das Kapitel empfiehlt die Verwendung von Drittanbieterpaketen wie dj-rest-auth und django-allauth, um die Implementierung der Benutzerauthentifizierung zu vereinfachen, und hebt die damit verbundene Komplexität und die Bedeutung der Nutzung etablierter Lösungen zur Verbesserung von Sicherheit und Effizienz hervor.",
                // Chinese
                "中国人": "第 8 章重点介绍用户身份验证，详细介绍了 API 中的帐户注册、登录和注销过程，并将其与单片 Django 网站中使用的传统基于会话的身份验证进行了对比。它探讨了各种身份验证方法，包括基本身份验证、会话身份验证和令牌身份验证，同时强调了令牌身份验证对于跨多个前端的无状态交互的优势。本章提倡使用第三方软件包（如 dj-rest-auth 和 django-allauth）来简化用户身份验证的实现，强调了所涉及的复杂性以及利用现有解决方案来增强安全性和效率的重要性。",
                // Russian
                "Русский": "Глава 8 фокусируется на аутентификации пользователя, подробно описывая процессы регистрации учетной записи, входа и выхода из системы в API, противопоставляя ее традиционной аутентификации на основе сеанса, используемой в монолитных веб-сайтах Django. В ней рассматриваются различные методы аутентификации, включая базовую, сеансовую и токен-аутентификацию, при этом подчеркиваются преимущества токен-аутентификации для взаимодействий без сохранения состояния через несколько фронтендов. В главе рекомендуется использовать сторонние пакеты, такие как dj-rest-auth и django-allauth, для упрощения реализации аутентификации пользователя, подчеркивая связанные с этим сложности и важность использования существующих решений для повышения безопасности и эффективности.",
                // French
                "Français": "Le chapitre 8 se concentre sur l'authentification des utilisateurs, en détaillant les processus d'enregistrement de compte, de connexion et de déconnexion au sein des API, en les comparant à l'authentification traditionnelle basée sur la session utilisée dans les sites Web Django monolithiques. Il explore diverses méthodes d'authentification, notamment l'authentification de base, de session et par jeton, tout en soulignant les avantages de l'authentification par jeton pour les interactions sans état sur plusieurs front-ends. Le chapitre préconise l'utilisation de packages tiers tels que dj-rest-auth et django-allauth pour simplifier la mise en œuvre de l'authentification des utilisateurs, en soulignant les complexités impliquées et l'importance de tirer parti des solutions établies pour améliorer la sécurité et l'efficacité.",
                // Japanese
                "日本語": "第 8 章では、ユーザー認証に焦点を当て、API 内でのアカウント登録、ログイン、ログアウトのプロセスを詳しく説明し、モノリシックな Django Web サイトで使用される従来のセッションベースの認証と対比します。基本認証、セッション認証、トークン認証など、さまざまな認証方法を検討し、複数のフロントエンドにわたるステートレスなやり取りにおけるトークン認証の利点を強調します。この章では、dj-rest-auth や django-allauth などのサードパーティ パッケージを使用してユーザー認証の実装を簡素化することを推奨し、関連する複雑さと、セキュリティと効率性を高めるために確立されたソリューションを活用することの重要性を強調します。",
                // Korean
                "한국인": "8장은 사용자 인증에 초점을 맞추고, API 내에서 계정 등록, 로그인, 로그아웃 프로세스를 자세히 설명하며, 모놀리식 Django 웹사이트에서 사용되는 기존 세션 기반 인증과 대조합니다. 기본, 세션, 토큰 인증을 포함한 다양한 인증 방법을 살펴보는 동시에 여러 프런트엔드에서 상태 없는 상호 작용을 위한 토큰 인증의 장점을 강조합니다. 이 장에서는 dj-rest-auth 및 django-allauth와 같은 타사 패키지를 사용하여 사용자 인증 구현을 간소화하고, 관련된 복잡성과 보안 및 효율성을 향상시키기 위해 확립된 솔루션을 활용하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "El capítulo 8 se centra en la autenticación de usuarios, detallando los procesos de registro de cuentas, inicio de sesión y cierre de sesión dentro de las API, y contrastándolos con la autenticación tradicional basada en sesiones que se utiliza en los sitios web monolíticos de Django. Explora varios métodos de autenticación, incluidos la autenticación básica, de sesión y por token, y destaca las ventajas de la autenticación por token para interacciones sin estado en múltiples front-ends. El capítulo aboga por el uso de paquetes de terceros como dj-rest-auth y django-allauth para simplificar la implementación de la autenticación de usuarios, destacando las complejidades involucradas y la importancia de aprovechar las soluciones establecidas para mejorar la seguridad y la eficiencia.",
                // Hindi
                "हिंदी": "अध्याय 8 उपयोगकर्ता प्रमाणीकरण पर केंद्रित है, जिसमें API के भीतर खाता पंजीकरण, लॉगिन और लॉगआउट की प्रक्रियाओं का विवरण दिया गया है, इसे मोनोलिथिक Django वेबसाइटों में उपयोग किए जाने वाले पारंपरिक सत्र-आधारित प्रमाणीकरण के साथ तुलना की गई है। यह बेसिक, सत्र और टोकन प्रमाणीकरण सहित विभिन्न प्रमाणीकरण विधियों की खोज करता है, जबकि कई फ्रंट-एंड में स्टेटलेस इंटरैक्शन के लिए टोकन प्रमाणीकरण के लाभों पर जोर देता है। अध्याय उपयोगकर्ता प्रमाणीकरण के कार्यान्वयन को सरल बनाने के लिए dj-rest-auth और django-allauth जैसे तृतीय-पक्ष पैकेजों का उपयोग करने की वकालत करता है, इसमें शामिल जटिलताओं और सुरक्षा और दक्षता को बढ़ाने के लिए स्थापित समाधानों का लाभ उठाने के महत्व पर प्रकाश डालता है।",
                // Portuguese
                "Português": "O Capítulo 8 centra-se na autenticação do utilizador, detalhando os processos de registo de conta, login e logout dentro das APIs, contrastando-a com a autenticação tradicional baseada em sessões utilizada em sites Django monolíticos. Explora vários métodos de autenticação, incluindo autenticação básica, de sessão e de token, ao mesmo tempo que enfatiza as vantagens da autenticação de token para interações sem estado em vários front-ends. O capítulo defende a utilização de pacotes de terceiros como o dj-rest-auth e o django-allauth para simplificar a implementação da autenticação do utilizador, destacando as complexidades envolvidas e a importância de aproveitar soluções estabelecidas para aumentar a segurança e a eficiência.",
                // Bengali
                "বাংলা": "অধ্যায় 8 ব্যবহারকারীর প্রমাণীকরণের উপর ফোকাস করে, এপিআই-এর মধ্যে অ্যাকাউন্ট নিবন্ধন, লগইন এবং লগআউটের প্রক্রিয়াগুলি বিস্তারিত করে, এটি একচেটিয়া জ্যাঙ্গো ওয়েবসাইটগুলিতে ব্যবহৃত ঐতিহ্যগত সেশন-ভিত্তিক প্রমাণীকরণের সাথে বৈপরীত্য করে। এটি বেসিক, সেশন এবং টোকেন প্রমাণীকরণ সহ বিভিন্ন প্রমাণীকরণ পদ্ধতি অন্বেষণ করে, যখন একাধিক ফ্রন্ট-এন্ড জুড়ে স্টেটলেস ইন্টারঅ্যাকশনের জন্য টোকেন প্রমাণীকরণের সুবিধার উপর জোর দেয়। অধ্যায়টি ব্যবহারকারীর প্রমাণীকরণের বাস্তবায়নকে সহজ করার জন্য dj-rest-auth এবং django-allauth-এর মতো তৃতীয় পক্ষের প্যাকেজগুলি ব্যবহার করার জন্য সমর্থন করে, জড়িত জটিলতাগুলিকে হাইলাইট করে এবং সুরক্ষা এবং দক্ষতা বাড়ানোর জন্য প্রতিষ্ঠিত সমাধানগুলিকে কাজে লাগানোর গুরুত্ব তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الثامن على مصادقة المستخدم، ويوضح بالتفصيل عمليات تسجيل الحساب وتسجيل الدخول وتسجيل الخروج داخل واجهات برمجة التطبيقات، ويقارنها بالمصادقة التقليدية القائمة على الجلسة المستخدمة في مواقع Django الضخمة. ويستكشف طرق المصادقة المختلفة، بما في ذلك المصادقة الأساسية ومصادقة الجلسة ومصادقة الرمز، مع التأكيد على مزايا مصادقة الرمز للتفاعلات عديمة الجنسية عبر واجهات أمامية متعددة. ويدعو الفصل إلى استخدام حزم الجهات الخارجية مثل dj-rest-auth وdjango-allauth لتبسيط تنفيذ مصادقة المستخدم، مع تسليط الضوء على التعقيدات المتضمنة وأهمية الاستفادة من الحلول الراسخة لتعزيز الأمان والكفاءة.",
                // Persian
                "فارسی": "فصل 8 بر احراز هویت کاربر متمرکز است، جزئیات فرآیندهای ثبت حساب، ورود به سیستم، و خروج از APIها را در مقایسه با احراز هویت مبتنی بر جلسه سنتی مورد استفاده در وب‌سایت‌های جنگو یکپارچه قرار می‌دهد. این روش‌های احراز هویت مختلف، از جمله احراز هویت پایه، جلسه، و رمز را بررسی می‌کند، در حالی که بر مزیت‌های احراز هویت توکن برای تعاملات بدون حالت در چندین فرانت‌اند تأکید می‌کند. این فصل از استفاده از بسته های شخص ثالث مانند dj-rest-auth و django-allauth برای ساده سازی اجرای احراز هویت کاربر، برجسته کردن پیچیدگی های موجود و اهمیت استفاده از راه حل های ایجاد شده برای افزایش امنیت و کارایی حمایت می کند.",
            },
        },
        // 9
        {
            "ChapterName": "Viewsets and Routers",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 9 discusses the use of viewsets and routers in Django REST Framework to streamline API development by reducing the amount of code required. It explains how viewsets can consolidate multiple related views into a single class, while routers can automatically generate URLs, making it easier to manage complex APIs. The chapter also emphasizes the importance of setting appropriate permissions for user endpoints and provides guidance on implementing new API endpoints, highlighting the trade-offs between simplicity and readability when using these abstractions.",
                // German
                "Deutsch": "Kapitel 9 befasst sich mit der Verwendung von Viewsets und Routern im Django REST Framework, um die API-Entwicklung durch Reduzierung der erforderlichen Codemenge zu optimieren. Es wird erklärt, wie Viewsets mehrere verwandte Ansichten in einer einzigen Klasse zusammenfassen können, während Router automatisch URLs generieren können, wodurch die Verwaltung komplexer APIs einfacher wird. Das Kapitel betont auch die Bedeutung der Festlegung geeigneter Berechtigungen für Benutzerendpunkte und bietet Anleitungen zur Implementierung neuer API-Endpunkte, wobei die Kompromisse zwischen Einfachheit und Lesbarkeit bei der Verwendung dieser Abstraktionen hervorgehoben werden.",
                // Chinese
                "中国人": "第 9 章讨论了在 Django REST Framework 中使用视图集和路由器来简化 API 开发，从而减少所需的代码量。它解释了视图集如何将多个相关视图合并到一个类中，而路由器如何自动生成 URL，从而更轻松地管理复杂的 API。本章还强调了为用户端点设置适当权限的重要性，并提供了实施新 API 端点的指导，强调了使用这些抽象时简单性和可读性之间的权衡。",
                // Russian
                "Русский": "Глава 9 обсуждает использование наборов представлений и маршрутизаторов в Django REST Framework для упрощения разработки API за счет сокращения объема требуемого кода. В ней объясняется, как наборы представлений могут объединять несколько связанных представлений в один класс, в то время как маршрутизаторы могут автоматически генерировать URL-адреса, что упрощает управление сложными API. В главе также подчеркивается важность настройки соответствующих разрешений для конечных точек пользователя и даются рекомендации по внедрению новых конечных точек API, подчеркивая компромиссы между простотой и читаемостью при использовании этих абстракций.",
                // French
                "Français": "Le chapitre 9 aborde l'utilisation des ensembles de vues et des routeurs dans Django REST Framework pour rationaliser le développement d'API en réduisant la quantité de code requise. Il explique comment les ensembles de vues peuvent consolider plusieurs vues associées en une seule classe, tandis que les routeurs peuvent générer automatiquement des URL, ce qui facilite la gestion des API complexes. Le chapitre souligne également l'importance de définir des autorisations appropriées pour les points de terminaison utilisateur et fournit des conseils sur la mise en œuvre de nouveaux points de terminaison d'API, en soulignant les compromis entre simplicité et lisibilité lors de l'utilisation de ces abstractions.",
                // Japanese
                "日本語": "第 9 章では、Django REST フレームワークでビューセットとルーターを使用して、必要なコードの量を減らして API 開発を効率化する方法について説明します。ビューセットを使用して複数の関連ビューを 1 つのクラスに統合する方法と、ルーターを使用して URL を自動的に生成し、複雑な API の管理を容易にする方法について説明します。また、この章では、ユーザー エンドポイントに適切な権限を設定することの重要性を強調し、新しい API エンドポイントの実装に関するガイダンスを提供し、これらの抽象化を使用する場合のシンプルさと読みやすさのトレードオフを強調します。",
                // Korean
                "한국인": "9장에서는 Django REST Framework에서 뷰셋과 라우터를 사용하여 필요한 코드 양을 줄여 API 개발을 간소화하는 방법을 설명합니다. 뷰셋이 여러 관련 뷰를 단일 클래스로 통합하는 방법과 라우터가 자동으로 URL을 생성하여 복잡한 API를 더 쉽게 관리하는 방법을 설명합니다. 또한 이 장에서는 사용자 엔드포인트에 대한 적절한 권한을 설정하는 것의 중요성을 강조하고 새로운 API 엔드포인트를 구현하는 방법에 대한 지침을 제공하며 이러한 추상화를 사용할 때 단순성과 가독성 간의 균형을 강조합니다.",
                // Spanish
                "Español": "El capítulo 9 analiza el uso de conjuntos de vistas y enrutadores en Django REST Framework para optimizar el desarrollo de API al reducir la cantidad de código necesario. Explica cómo los conjuntos de vistas pueden consolidar múltiples vistas relacionadas en una sola clase, mientras que los enrutadores pueden generar URL automáticamente, lo que facilita la gestión de API complejas. El capítulo también enfatiza la importancia de configurar los permisos adecuados para los puntos finales de los usuarios y brinda orientación sobre la implementación de nuevos puntos finales de API, destacando las compensaciones entre la simplicidad y la legibilidad al usar estas abstracciones.",
                // Hindi
                "हिंदी": "अध्याय 9 में आवश्यक कोड की मात्रा को कम करके API विकास को सुव्यवस्थित करने के लिए Django REST फ्रेमवर्क में व्यूसेट और राउटर के उपयोग पर चर्चा की गई है। यह बताता है कि व्यूसेट कैसे कई संबंधित व्यू को एक ही क्लास में समेकित कर सकते हैं, जबकि राउटर स्वचालित रूप से URL उत्पन्न कर सकते हैं, जिससे जटिल API को प्रबंधित करना आसान हो जाता है। अध्याय उपयोगकर्ता एंडपॉइंट के लिए उचित अनुमतियाँ सेट करने के महत्व पर भी जोर देता है और नए API एंडपॉइंट को लागू करने के बारे में मार्गदर्शन प्रदान करता है, इन अमूर्तताओं का उपयोग करते समय सरलता और पठनीयता के बीच व्यापार-नापसंद को उजागर करता है।",
                // Portuguese
                "Português": "O Capítulo 9 discute a utilização de conjuntos de vistas e routers no Django REST Framework para agilizar o desenvolvimento de APIs, reduzindo a quantidade de código necessária. Explica como os conjuntos de visualizações podem consolidar várias visualizações relacionadas numa única classe, enquanto os routers podem gerar URLs automaticamente, facilitando a gestão de APIs complexas. O capítulo também enfatiza a importância de definir permissões apropriadas para os terminais do utilizador e fornece orientações sobre a implementação de novos terminais API, destacando os trade-offs entre simplicidade e legibilidade ao utilizar estas abstrações.",
                // Bengali
                "বাংলা": "অধ্যায় 9 জ্যাঙ্গো REST ফ্রেমওয়ার্কে ভিউসেট এবং রাউটারের ব্যবহার নিয়ে আলোচনা করে যাতে প্রয়োজনীয় কোডের পরিমাণ কমিয়ে API ডেভেলপমেন্ট স্ট্রীমলাইন করা যায়। এটি ব্যাখ্যা করে যে কীভাবে ভিউসেটগুলি একাধিক সম্পর্কিত ভিউকে একক শ্রেণীতে একত্রিত করতে পারে, যখন রাউটারগুলি স্বয়ংক্রিয়ভাবে ইউআরএল তৈরি করতে পারে, জটিল APIগুলি পরিচালনা করা সহজ করে তোলে। অধ্যায়টি ব্যবহারকারীর এন্ডপয়েন্টগুলির জন্য উপযুক্ত অনুমতি সেট করার গুরুত্বের উপরও জোর দেয় এবং নতুন API এন্ডপয়েন্টগুলি বাস্তবায়নের জন্য নির্দেশিকা প্রদান করে, এই বিমূর্ততাগুলি ব্যবহার করার সময় সরলতা এবং পঠনযোগ্যতার মধ্যে ট্রেড-অফগুলি হাইলাইট করে৷",
                // Arabic
                "عَرَبِيّ": "يناقش الفصل التاسع استخدام مجموعات المشاهدات والموجهات في إطار عمل Django REST لتبسيط تطوير واجهة برمجة التطبيقات من خلال تقليل كمية التعليمات البرمجية المطلوبة. ويشرح كيف يمكن لمجموعات المشاهدات دمج وجهات نظر متعددة ذات صلة في فئة واحدة، بينما يمكن للموجهات إنشاء عناوين URL تلقائيًا، مما يجعل إدارة واجهات برمجة التطبيقات المعقدة أسهل. ويؤكد الفصل أيضًا على أهمية تعيين الأذونات المناسبة لنقاط نهاية المستخدم ويوفر إرشادات حول تنفيذ نقاط نهاية واجهة برمجة التطبيقات الجديدة، مع تسليط الضوء على التنازلات بين البساطة وسهولة القراءة عند استخدام هذه التجريدات.",
                // Persian
                "فارسی": "فصل 9 استفاده از viewset ها و روترها در Django REST Framework برای ساده سازی توسعه API با کاهش مقدار کد مورد نیاز را مورد بحث قرار می دهد. توضیح می‌دهد که چگونه مجموعه‌های نمایش می‌توانند چندین نما مرتبط را در یک کلاس ادغام کنند، در حالی که روترها می‌توانند به طور خودکار URL تولید کنند و مدیریت APIهای پیچیده را آسان‌تر می‌کنند. این فصل همچنین بر اهمیت تنظیم مجوزهای مناسب برای نقاط پایانی کاربر تأکید می‌کند و راهنمایی‌هایی را برای پیاده‌سازی نقاط پایانی API جدید ارائه می‌دهد، و مبادلات بین سادگی و خوانایی را هنگام استفاده از این انتزاع‌ها برجسته می‌کند.",
            },
        },
        // 10
        {
            "ChapterName": "Schemas and Documentation",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 10 emphasizes the necessity of documenting APIs to ensure usability for developers who did not create them, particularly in team environments or public APIs. It introduces schemas as machine-readable documents that detail API endpoints and HTTP verbs, while highlighting the importance of human-readable documentation, which can be generated using tools like Redoc and SwaggerUI through the library in Django. The chapter outlines the steps for configuring and deploying these tools to create accurate, up-to-date documentation with minimal effort, ultimately enhancing the API's accessibility and usability.",
                // German
                "Deutsch": "Kapitel 10 betont die Notwendigkeit der Dokumentation von APIs, um die Nutzbarkeit für Entwickler sicherzustellen, die sie nicht erstellt haben, insbesondere in Teamumgebungen oder öffentlichen APIs. Es führt Schemata als maschinenlesbare Dokumente ein, die API-Endpunkte und HTTP-Verben detailliert beschreiben, und betont gleichzeitig die Bedeutung menschenlesbarer Dokumentation, die mit Tools wie Redoc und SwaggerUI über die Bibliothek in Django erstellt werden kann. Das Kapitel beschreibt die Schritte zum Konfigurieren und Bereitstellen dieser Tools, um mit minimalem Aufwand genaue, aktuelle Dokumentation zu erstellen und so letztendlich die Zugänglichkeit und Nutzbarkeit der API zu verbessern.",
                // Chinese
                "中国人": "第 10 章强调了记录 API 的必要性，以确保非开发人员（尤其是在团队环境或公共 API 中）也能使用。它介绍了模式作为机器可读的文档，其中详细介绍了 API 端点和 HTTP 动词，同时强调了人类可读文档的重要性，这些文档可以通过 Django 中的库使用 Redoc 和 SwaggerUI 等工具生成。本章概述了配置和部署这些工具的步骤，以便以最小的努力创建准确、最新的文档，最终提高 API 的可访问性和可用性。",
                // Russian
                "Русский": "Глава 10 подчеркивает необходимость документирования API для обеспечения удобства использования разработчиками, которые их не создавали, особенно в командных средах или публичных API. Она представляет схемы как машиночитаемые документы, которые подробно описывают конечные точки API и глаголы HTTP, одновременно подчеркивая важность человекочитаемой документации, которую можно создать с помощью таких инструментов, как Redoc и SwaggerUI через библиотеку в Django. В главе описываются шаги по настройке и развертыванию этих инструментов для создания точной, актуальной документации с минимальными усилиями, в конечном итоге повышая доступность и удобство использования API.",
                // French
                "Français": "Le chapitre 10 souligne la nécessité de documenter les API pour garantir leur facilité d'utilisation pour les développeurs qui ne les ont pas créées, en particulier dans les environnements d'équipe ou les API publiques. Il présente les schémas sous forme de documents lisibles par machine qui détaillent les points de terminaison des API et les verbes HTTP, tout en soulignant l'importance d'une documentation lisible par l'homme, qui peut être générée à l'aide d'outils tels que Redoc et SwaggerUI via la bibliothèque de Django. Le chapitre décrit les étapes de configuration et de déploiement de ces outils pour créer une documentation précise et à jour avec un minimum d'effort, améliorant ainsi l'accessibilité et la facilité d'utilisation de l'API.",
                // Japanese
                "日本語": "第 10 章では、特にチーム環境やパブリック API において、API を作成したわけではない開発者にとっての使いやすさを確保するために、API をドキュメント化する必要性を強調しています。API エンドポイントと HTTP 動詞の詳細を記述した機械可読ドキュメントとしてのスキーマを紹介するとともに、Django のライブラリを通じて Redoc や SwaggerUI などのツールを使用して生成できる、人間が読めるドキュメントの重要性を強調しています。この章では、最小限の労力で正確で最新のドキュメントを作成し、最終的に API のアクセシビリティと使いやすさを向上させるために、これらのツールを設定および展開する手順について説明します。",
                // Korean
                "한국인": "10장에서는 API를 만들지 않은 개발자, 특히 팀 환경이나 공개 API에서 API를 문서화하여 사용성을 보장할 필요성을 강조합니다. API 엔드포인트와 HTTP 동사를 자세히 설명하는 기계가 읽을 수 있는 문서인 스키마를 소개하는 한편, Django의 라이브러리를 통해 Redoc 및 SwaggerUI와 같은 도구를 사용하여 생성할 수 있는 사람이 읽을 수 있는 문서의 중요성을 강조합니다. 이 장에서는 이러한 도구를 구성하고 배포하여 최소한의 노력으로 정확하고 최신 문서를 만드는 단계를 설명하여 궁극적으로 API의 접근성과 사용성을 향상시킵니다.",
                // Spanish
                "Español": "El capítulo 10 enfatiza la necesidad de documentar las API para garantizar la usabilidad para los desarrolladores que no las crearon, particularmente en entornos de equipo o API públicas. Presenta los esquemas como documentos legibles por máquina que detallan los puntos finales de la API y los verbos HTTP, al tiempo que destaca la importancia de la documentación legible por humanos, que se puede generar utilizando herramientas como Redoc y SwaggerUI a través de la biblioteca de Django. El capítulo describe los pasos para configurar e implementar estas herramientas para crear documentación precisa y actualizada con un mínimo esfuerzo, mejorando en última instancia la accesibilidad y la usabilidad de la API.",
                // Hindi
                "हिंदी": "अध्याय 10 उन डेवलपर्स के लिए उपयोगिता सुनिश्चित करने के लिए API का दस्तावेज़ीकरण करने की आवश्यकता पर जोर देता है जिन्होंने उन्हें नहीं बनाया है, विशेष रूप से टीम वातावरण या सार्वजनिक API में। यह स्कीमा को मशीन-पठनीय दस्तावेज़ों के रूप में पेश करता है जो API एंडपॉइंट और HTTP क्रियाओं का विवरण देते हैं, जबकि मानव-पठनीय दस्तावेज़ीकरण के महत्व पर प्रकाश डालते हैं, जिसे Django में लाइब्रेरी के माध्यम से Redoc और SwaggerUI जैसे टूल का उपयोग करके तैयार किया जा सकता है। अध्याय इन उपकरणों को कॉन्फ़िगर करने और तैनात करने के चरणों को रेखांकित करता है ताकि न्यूनतम प्रयास के साथ सटीक, अद्यतित दस्तावेज़ीकरण बनाया जा सके, अंततः API की पहुँच और उपयोगिता को बढ़ाया जा सके।",
                // Portuguese
                "Português": "O Capítulo 10 enfatiza a necessidade de documentar APIs para garantir a usabilidade para os programadores que não as criaram, especialmente em ambientes de equipa ou APIs públicas. Apresenta esquemas como documentos legíveis por máquina que detalham os endpoints de API e os verbos HTTP, ao mesmo tempo que destaca a importância da documentação legível por humanos, que pode ser gerada utilizando ferramentas como o Redoc e o SwaggerUI através da biblioteca do Django. O capítulo descreve os passos para configurar e implementar estas ferramentas para criar documentação precisa e atualizada com o mínimo esforço, melhorando, em última análise, a acessibilidade e a usabilidade da API.",
                // Bengali
                "বাংলা": "অধ্যায় 10 এগুলি তৈরি করেনি, বিশেষ করে টিম এনভায়রনমেন্টে বা পাবলিক API-এ এমন ডেভেলপারদের জন্য ব্যবহারযোগ্যতা নিশ্চিত করতে API-গুলি নথিভুক্ত করার প্রয়োজনীয়তার উপর জোর দেয়৷ এটি মেশিন-পঠনযোগ্য নথি হিসাবে স্কিমাগুলিকে প্রবর্তন করে যা API এন্ডপয়েন্ট এবং HTTP ক্রিয়াগুলির বিশদ বিবরণ দেয়, মানব-পঠনযোগ্য ডকুমেন্টেশনের গুরুত্ব তুলে ধরে, যা জ্যাঙ্গোতে লাইব্রেরির মাধ্যমে Redoc এবং SwaggerUI-এর মতো সরঞ্জামগুলি ব্যবহার করে তৈরি করা যেতে পারে। অধ্যায়টি ন্যূনতম প্রচেষ্টার সাথে সঠিক, আপ-টু-ডেট ডকুমেন্টেশন তৈরি করার জন্য এই সরঞ্জামগুলিকে কনফিগার এবং স্থাপন করার পদক্ষেপগুলির রূপরেখা দেয়, শেষ পর্যন্ত API-এর অ্যাক্সেসযোগ্যতা এবং ব্যবহারযোগ্যতা বৃদ্ধি করে।",
                // Arabic
                "عَرَبِيّ": "يشدد الفصل العاشر على ضرورة توثيق واجهات برمجة التطبيقات لضمان قابلية الاستخدام للمطورين الذين لم ينشئوها، وخاصة في بيئات الفريق أو واجهات برمجة التطبيقات العامة. ويقدم المخططات كوثائق قابلة للقراءة آليًا توضح نقاط نهاية واجهة برمجة التطبيقات وأفعال HTTP، مع تسليط الضوء على أهمية الوثائق القابلة للقراءة من قبل البشر، والتي يمكن إنشاؤها باستخدام أدوات مثل Redoc وSwaggerUI من خلال المكتبة في Django. يحدد الفصل الخطوات اللازمة لتكوين ونشر هذه الأدوات لإنشاء وثائق دقيقة ومحدثة بأقل جهد، مما يعزز في النهاية إمكانية الوصول إلى واجهة برمجة التطبيقات وقابليتها للاستخدام.",
                // Persian
                "فارسی": "فصل 10 بر لزوم مستندسازی APIها برای اطمینان از قابلیت استفاده برای توسعه دهندگانی که آنها را ایجاد نکرده اند، به ویژه در محیط های تیمی یا API های عمومی تأکید می کند. این طرحواره‌ها را به‌عنوان اسناد قابل خواندن ماشین معرفی می‌کند که نقاط پایانی API و افعال HTTP را شرح می‌دهد، در حالی که اهمیت اسناد قابل خواندن توسط انسان را برجسته می‌کند، که می‌تواند با استفاده از ابزارهایی مانند Redoc و SwaggerUI از طریق کتابخانه در جنگو ایجاد شود. این فصل به تشریح مراحل پیکربندی و استقرار این ابزارها برای ایجاد مستندات دقیق و به‌روز با کمترین تلاش می‌پردازد و در نهایت دسترسی و قابلیت استفاده API را افزایش می‌دهد.",
            },
        },
        // 11
        {
            "ChapterName": "Production Deployment",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 11 focuses on the deployment of a web API project, highlighting the importance of using environment variables for secure configuration and toggling between local and production settings. It outlines essential steps such as setting to False, configuring , using PostgreSQL in production, and preparing the project for deployment with tools like and . The chapter emphasizes the need for a deployment checklist to ensure all necessary changes are committed to Git before deploying the project, particularly on platforms like Heroku.",
                // German
                "Deutsch": "Kapitel 11 konzentriert sich auf die Bereitstellung eines Web-API-Projekts und betont die Bedeutung der Verwendung von Umgebungsvariablen für eine sichere Konfiguration und das Umschalten zwischen lokalen und Produktionseinstellungen. Es beschreibt wesentliche Schritte wie das Setzen auf False, das Konfigurieren von , die Verwendung von PostgreSQL in der Produktion und die Vorbereitung des Projekts für die Bereitstellung mit Tools wie und . Das Kapitel betont die Notwendigkeit einer Bereitstellungscheckliste, um sicherzustellen, dass alle erforderlichen Änderungen vor der Bereitstellung des Projekts in Git übernommen werden, insbesondere auf Plattformen wie Heroku.",
                // Chinese
                "中国人": "第 11 章重点介绍 Web API 项目的部署，强调使用环境变量进行安全配置以及在本地和生产设置之间切换的重要性。它概述了基本步骤，例如设置为 False、配置、在生产中使用 PostgreSQL 以及使用和等工具准备项目以进行部署。本章强调需要一份部署清单，以确保在部署项目之前将所有必要的更改提交给 Git，尤其是在 Heroku 等平台上。",
                // Russian
                "Русский": "Глава 11 фокусируется на развертывании проекта веб-API, подчеркивая важность использования переменных среды для безопасной конфигурации и переключения между локальными и производственными настройками. В ней описываются основные шаги, такие как установка на False, настройка , использование PostgreSQL в производстве и подготовка проекта к развертыванию с помощью таких инструментов, как и . В главе подчеркивается необходимость контрольного списка развертывания для обеспечения того, чтобы все необходимые изменения были зафиксированы в Git перед развертыванием проекта, особенно на таких платформах, как Heroku.",
                // French
                "Français": "Le chapitre 11 se concentre sur le déploiement d'un projet d'API Web, en soulignant l'importance d'utiliser des variables d'environnement pour une configuration sécurisée et le basculement entre les paramètres locaux et de production. Il décrit les étapes essentielles telles que la définition sur False, la configuration de , l'utilisation de PostgreSQL en production et la préparation du projet pour le déploiement avec des outils comme et . Le chapitre souligne la nécessité d'une liste de contrôle de déploiement pour garantir que toutes les modifications nécessaires sont validées dans Git avant de déployer le projet, en particulier sur des plateformes comme Heroku.",
                // Japanese
                "日本語": "第 11 章では、Web API プロジェクトのデプロイメントに焦点を当て、安全な構成のために環境変数を使用することと、ローカル設定と本番設定を切り替えることの重要性を強調しています。 を False に設定する、 を構成する、本番環境で PostgreSQL を使用する、 や などのツールを使用してプロジェクトをデプロイメント用に準備するなどの重要な手順について説明します。この章では、特に Heroku などのプラットフォームでプロジェクトをデプロイする前に、必要なすべての変更が Git にコミットされていることを確認するためのデプロイメント チェックリストの必要性を強調しています。",
                // Korean
                "한국인": "11장은 웹 API 프로젝트의 배포에 초점을 맞추고, 보안 구성을 위한 환경 변수 사용과 로컬 및 프로덕션 설정 간 전환의 중요성을 강조합니다. False로 설정, 구성, 프로덕션에서 PostgreSQL 사용, 및 와 같은 도구를 사용하여 프로젝트를 배포할 준비와 같은 필수 단계를 설명합니다. 이 장에서는 특히 Heroku와 같은 플랫폼에서 프로젝트를 배포하기 전에 모든 필수 변경 사항이 Git에 커밋되었는지 확인하기 위한 배포 체크리스트의 필요성을 강조합니다.",
                // Spanish
                "Español": "El capítulo 11 se centra en la implementación de un proyecto de API web, destacando la importancia de usar variables de entorno para una configuración segura y alternar entre configuraciones locales y de producción. Describe los pasos esenciales, como establecer en False, configurar , usar PostgreSQL en producción y preparar el proyecto para la implementación con herramientas como y . El capítulo enfatiza la necesidad de una lista de verificación de implementación para garantizar que todos los cambios necesarios se confirmen en Git antes de implementar el proyecto, particularmente en plataformas como Heroku.",
                // Hindi
                "हिंदी": "अध्याय 11 एक वेब API प्रोजेक्ट की तैनाती पर केंद्रित है, जो सुरक्षित कॉन्फ़िगरेशन के लिए पर्यावरण चर का उपयोग करने और स्थानीय और उत्पादन सेटिंग्स के बीच टॉगल करने के महत्व पर प्रकाश डालता है। यह आवश्यक चरणों की रूपरेखा तैयार करता है जैसे कि False पर सेट करना, कॉन्फ़िगर करना, उत्पादन में PostgreSQL का उपयोग करना और और जैसे उपकरणों के साथ परियोजना को तैनाती के लिए तैयार करना। अध्याय एक तैनाती चेकलिस्ट की आवश्यकता पर जोर देता है ताकि यह सुनिश्चित किया जा सके कि परियोजना को तैनात करने से पहले सभी आवश्यक परिवर्तन Git में प्रतिबद्ध हैं, विशेष रूप से Heroku जैसे प्लेटफ़ॉर्म पर।",
                // Portuguese
                "Português": "O Capítulo 11 centra-se na implementação de um projeto de API web, destacando a importância da utilização de variáveis ​​de ambiente para uma configuração segura e alternância entre configurações locais e de produção. Descreve etapas essenciais, como definir como False, configurar o , utilizar o PostgreSQL na produção e preparar o projeto para a implementação com ferramentas como e . O capítulo enfatiza a necessidade de uma lista de verificação de implementação para garantir que todas as alterações necessárias são comprometidas com o Git antes da implementação do projeto, especialmente em plataformas como o Heroku.",
                // Bengali
                "বাংলা": "অধ্যায় 11 একটি ওয়েব API প্রকল্পের স্থাপনার উপর দৃষ্টি নিবদ্ধ করে, সুরক্ষিত কনফিগারেশনের জন্য পরিবেশের ভেরিয়েবল ব্যবহার করার গুরুত্ব তুলে ধরে এবং স্থানীয় এবং উৎপাদন সেটিংসের মধ্যে টগল করে। এটি অত্যাবশ্যকীয় পদক্ষেপগুলির রূপরেখা দেয় যেমন False-এ সেট করা, কনফিগার করা, উত্পাদনে PostgreSQL ব্যবহার করা, এবং এবং এর মতো সরঞ্জামগুলির সাথে স্থাপনার জন্য প্রকল্প প্রস্তুত করা। অধ্যায়টি একটি স্থাপনার চেকলিস্টের প্রয়োজনীয়তার উপর জোর দেয় যাতে প্রকল্পটি মোতায়েন করার আগে, বিশেষ করে হেরোকু-এর মতো প্ল্যাটফর্মগুলিতে সমস্ত প্রয়োজনীয় পরিবর্তনগুলি গিট-এ প্রতিশ্রুতিবদ্ধ হয়।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الحادي عشر على نشر مشروع واجهة برمجة التطبيقات على الويب، مع تسليط الضوء على أهمية استخدام متغيرات البيئة للتكوين الآمن والتبديل بين الإعدادات المحلية والإنتاجية. ويوضح الخطوات الأساسية مثل التعيين على False، وتكوين، واستخدام PostgreSQL في الإنتاج، وإعداد المشروع للنشر باستخدام أدوات مثل و. ويؤكد الفصل على الحاجة إلى قائمة مراجعة للنشر لضمان الالتزام بجميع التغييرات الضرورية على Git قبل نشر المشروع، وخاصة على منصات مثل Heroku.",
                // Persian
                "فارسی": "فصل 11 بر استقرار یک پروژه API وب تمرکز دارد و اهمیت استفاده از متغیرهای محیطی برای پیکربندی ایمن و جابجایی بین تنظیمات محلی و تولیدی را برجسته می‌کند. مراحل ضروری مانند تنظیم روی False، پیکربندی، استفاده از PostgreSQL در تولید، و آماده سازی پروژه برای استقرار با ابزارهایی مانند و . این فصل بر نیاز به چک لیست استقرار برای اطمینان از انجام تمام تغییرات لازم در Git قبل از استقرار پروژه، به ویژه در پلتفرم هایی مانند Heroku تاکید می کند.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "Django for APIs by William S. Vincent is a comprehensive guide for developers who want to build modern, scalable web APIs using Django and Django REST Framework (DRF). The book takes a hands-on approach, making it ideal for both intermediate and advanced developers looking to expand their skill set. It starts by introducing the fundamentals of APIs, covering essential concepts such as RESTful design principles, HTTP methods, and data serialization. As the book progresses, readers will dive deep into creating dynamic and secure API endpoints, learning how to efficiently handle data exchange between front-end applications and back-end services.",
            // German
            "Deutsch": "„Django für APIs“ von William S. Vincent ist ein umfassender Leitfaden für Entwickler, die moderne, skalierbare Web-APIs mit Django und Django REST Framework (DRF) erstellen möchten. Das Buch verfolgt einen praktischen Ansatz und ist daher ideal für fortgeschrittene und erfahrene Entwickler, die ihre Fähigkeiten erweitern möchten. Es beginnt mit einer Einführung in die Grundlagen von APIs und behandelt wichtige Konzepte wie RESTful-Designprinzipien, HTTP-Methoden und Datenserialisierung. Im weiteren Verlauf des Buches werden die Leser tiefer in die Erstellung dynamischer und sicherer API-Endpunkte eintauchen und lernen, wie sie den Datenaustausch zwischen Front-End-Anwendungen und Back-End-Diensten effizient handhaben können.",
            // Chinese
            "中国人": "William S. Vincent 撰写的《Django for APIs》是一本全面的指南，适用于想要使用 Django 和 Django REST Framework (DRF) 构建现代可扩展 Web API 的开发人员。本书采用实践方法，非常适合希望扩展技能的中级和高级开发人员。它首先介绍 API 的基础知识，涵盖 RESTful 设计原则、HTTP 方法和数据序列化等基本概念。随着本书的进展，读者将深入了解如何创建动态且安全的 API 端点，学习如何有效地处理前端应用程序和后端服务之间的数据交换。",
            // Russian
            "Русский": "Django for APIs Уильяма С. Винсента — это всеобъемлющее руководство для разработчиков, которые хотят создавать современные масштабируемые веб-API с использованием Django и Django REST Framework (DRF). В книге используется практический подход, что делает ее идеальной как для разработчиков среднего, так и для продвинутых, желающих расширить свои навыки. Она начинается с введения в основы API, охватывая такие важные концепции, как принципы проектирования RESTful, методы HTTP и сериализация данных. По мере чтения книги читатели углубятся в создание динамических и безопасных конечных точек API, узнав, как эффективно обрабатывать обмен данными между front-end приложениями и back-end службами.",
            // French
            "Français": "Django for APIs de William S. Vincent est un guide complet destiné aux développeurs qui souhaitent créer des API Web modernes et évolutives à l'aide de Django et de Django REST Framework (DRF). Le livre adopte une approche pratique, ce qui le rend idéal pour les développeurs intermédiaires et avancés qui cherchent à élargir leurs compétences. Il commence par présenter les principes fondamentaux des API, en couvrant les concepts essentiels tels que les principes de conception RESTful, les méthodes HTTP et la sérialisation des données. Au fur et à mesure de la progression du livre, les lecteurs se plongeront dans la création de points de terminaison d'API dynamiques et sécurisés, en apprenant à gérer efficacement l'échange de données entre les applications front-end et les services back-end.",
            // Japanese
            "日本語": "William S. Vincent 著の Django for APIs は、Django と Django REST Framework (DRF) を使用して、最新かつスケーラブルな Web API を構築したい開発者向けの総合ガイドです。本書は実践的なアプローチを採用しており、スキルセットの拡張を目指す中級および上級開発者の両方に最適です。本書は API の基礎を紹介することから始まり、RESTful 設計原則、HTTP メソッド、データのシリアル化などの重要な概念を取り上げています。本書を読み進めると、読者は動的で安全な API エンドポイントの作成について深く掘り下げ、フロントエンド アプリケーションとバックエンド サービス間のデータ交換を効率的に処理する方法を学習します。",
            // Korean
            "한국인": "William S. Vincent의 Django for APIs는 Django와 Django REST Framework(DRF)를 사용하여 현대적이고 확장 가능한 웹 API를 빌드하려는 개발자를 위한 포괄적인 가이드입니다. 이 책은 실습적인 접근 방식을 취하여 기술 세트를 확장하려는 중급 및 고급 개발자에게 이상적입니다. RESTful 디자인 원칙, HTTP 메서드 및 데이터 직렬화와 같은 필수 개념을 다루는 API의 기본 사항을 소개하는 것으로 시작합니다. 책이 진행됨에 따라 독자는 동적이고 안전한 API 엔드포인트를 만드는 방법을 깊이 파고들어 프런트엔드 애플리케이션과 백엔드 서비스 간의 데이터 교환을 효율적으로 처리하는 방법을 배웁니다.",
            // Spanish
            "Español": "Django for APIs de William S. Vincent es una guía completa para desarrolladores que desean crear API web modernas y escalables utilizando Django y Django REST Framework (DRF). El libro adopta un enfoque práctico, lo que lo hace ideal tanto para desarrolladores intermedios como avanzados que buscan ampliar su conjunto de habilidades. Comienza presentando los fundamentos de las API y cubre conceptos esenciales como los principios de diseño RESTful, los métodos HTTP y la serialización de datos. A medida que avanza el libro, los lectores se sumergirán en la creación de puntos finales de API dinámicos y seguros, y aprenderán a manejar de manera eficiente el intercambio de datos entre aplicaciones front-end y servicios back-end.",
            // Hindi
            "हिंदी": "विलियम एस. विंसेंट द्वारा लिखित Django for APIs उन डेवलपर्स के लिए एक व्यापक गाइड है जो Django और Django REST Framework (DRF) का उपयोग करके आधुनिक, स्केलेबल वेब API बनाना चाहते हैं। यह पुस्तक व्यावहारिक दृष्टिकोण अपनाती है, जो इसे अपने कौशल सेट का विस्तार करने की चाहत रखने वाले मध्यवर्ती और उन्नत दोनों डेवलपर्स के लिए आदर्श बनाती है। यह API के मूल सिद्धांतों को पेश करके शुरू होता है, जिसमें RESTful डिज़ाइन सिद्धांत, HTTP विधियाँ और डेटा क्रमांकन जैसी आवश्यक अवधारणाएँ शामिल हैं। जैसे-जैसे पुस्तक आगे बढ़ेगी, पाठक गतिशील और सुरक्षित API एंडपॉइंट बनाने में गहराई से उतरेंगे, सीखेंगे कि फ्रंट-एंड एप्लिकेशन और बैक-एंड सेवाओं के बीच डेटा एक्सचेंज को कुशलतापूर्वक कैसे संभालना है।",
            // Portuguese
            "Português": "Django para APIs de William S. Vincent é um guia abrangente para programadores que desejam construir APIs web modernas e escaláveis ​​utilizando Django e Django REST Framework (DRF). O livro tem uma abordagem prática, tornando-o ideal para programadores intermédios e avançados que procuram expandir o seu conjunto de competências. Começa por apresentar os fundamentos das APIs, abrangendo conceitos essenciais como os princípios de design RESTful, os métodos HTTP e a serialização de dados. À medida que o livro avança, os leitores irão aprofundar a criação de endpoints de API dinâmicos e seguros, aprendendo como lidar eficientemente com a troca de dados entre aplicações front-end e serviços back-end.",
            // Bengali
            "বাংলা": "উইলিয়াম এস. ভিনসেন্টের API-এর জন্য জ্যাঙ্গো হল ডেভেলপারদের জন্য একটি ব্যাপক নির্দেশিকা যারা জ্যাঙ্গো এবং জ্যাঙ্গো REST ফ্রেমওয়ার্ক (DRF) ব্যবহার করে আধুনিক, মাপযোগ্য ওয়েব API তৈরি করতে চান। বইটি একটি হ্যান্ডস-অন পদ্ধতি গ্রহণ করে, এটি মধ্যবর্তী এবং উন্নত উভয় বিকাশকারীদের জন্য আদর্শ করে তোলে যারা তাদের দক্ষতা সেট প্রসারিত করতে চায়। এটি শুরু হয় API-এর মৌলিক বিষয়গুলি প্রবর্তন করে, প্রয়োজনীয় ধারণাগুলি যেমন RESTful ডিজাইন নীতি, HTTP পদ্ধতি এবং ডেটা সিরিয়ালাইজেশনকে কভার করে। বইটি অগ্রসর হওয়ার সাথে সাথে, পাঠকরা গতিশীল এবং সুরক্ষিত API এন্ডপয়েন্ট তৈরি করতে গভীরভাবে ডুব দেবেন, শিখবেন কীভাবে ফ্রন্ট-এন্ড অ্যাপ্লিকেশন এবং ব্যাক-এন্ড পরিষেবার মধ্যে ডেটা আদান-প্রদান দক্ষতার সাথে পরিচালনা করতে হয়।",
            // Arabic
            "عَرَبِيّ": "يعد كتاب Django for APIs من تأليف ويليام إس فينسينت دليلاً شاملاً للمطورين الذين يرغبون في إنشاء واجهات برمجة تطبيقات ويب حديثة وقابلة للتطوير باستخدام Django وإطار عمل Django REST (DRF). يتبنى الكتاب نهجًا عمليًا، مما يجعله مثاليًا للمطورين المتوسطين والمتقدمين الذين يتطلعون إلى توسيع مجموعة مهاراتهم. يبدأ الكتاب بتقديم أساسيات واجهات برمجة التطبيقات، ويغطي المفاهيم الأساسية مثل مبادئ تصميم RESTful، وطرق HTTP، وتسلسل البيانات. ومع تقدم الكتاب، سيتعمق القراء في إنشاء نقاط نهاية API ديناميكية وآمنة، وتعلم كيفية التعامل بكفاءة مع تبادل البيانات بين تطبيقات الواجهة الأمامية والخدمات الخلفية.",
            // Persian
            "فارسی": "Django for APIs توسط William S. Vincent یک راهنمای جامع برای توسعه دهندگانی است که می خواهند API های وب مدرن و مقیاس پذیر را با استفاده از Django و Django REST Framework (DRF) بسازند. این کتاب یک رویکرد عملی دارد و آن را برای توسعه دهندگان متوسط ​​و پیشرفته که به دنبال گسترش مجموعه مهارت های خود هستند ایده آل می کند. این برنامه با معرفی اصول APIها شروع می شود و مفاهیم اساسی مانند اصول طراحی RESTful، روش های HTTP و سریال سازی داده ها را پوشش می دهد. با پیشرفت کتاب، خوانندگان عمیقاً در ایجاد نقاط پایانی API پویا و ایمن غوطه ور می شوند و یاد می گیرند که چگونه به طور مؤثر تبادل داده بین برنامه های کاربردی جلویی و سرویس های پشتیبان را مدیریت کنند.",
        },
        // Paragraph 2
        {
            // English
            "English": "The book also emphasizes the importance of authentication and permissions, key elements in building secure web APIs. Through clear explanations and examples, developers will learn how to implement token-based authentication, session-based authentication, and third-party OAuth services. The coverage of viewsets, routers, and query parameters ensures that readers can build flexible and reusable APIs that follow best practices. Additionally, the book highlights the importance of testing, guiding developers through the process of writing unit tests for their APIs, ensuring their reliability and stability as applications grow.",
            // German
            "Deutsch": "Das Buch betont auch die Bedeutung von Authentifizierung und Berechtigungen, Schlüsselelemente beim Erstellen sicherer Web-APIs. Durch klare Erklärungen und Beispiele lernen Entwickler, wie sie tokenbasierte Authentifizierung, sitzungsbasierte Authentifizierung und OAuth-Dienste von Drittanbietern implementieren. Die Abdeckung von Viewsets, Routern und Abfrageparametern stellt sicher, dass Leser flexible und wiederverwendbare APIs erstellen können, die Best Practices folgen. Darüber hinaus betont das Buch die Bedeutung von Tests und führt Entwickler durch den Prozess des Schreibens von Unit-Tests für ihre APIs, um deren Zuverlässigkeit und Stabilität bei wachsender Anwendung sicherzustellen.",
            // Chinese
            "中国人": "本书还强调了身份验证和权限的重要性，这是构建安全 Web API 的关键要素。通过清晰的解释和示例，开发人员将学习如何实现基于令牌的身份验证、基于会话的身份验证和第三方 OAuth 服务。视图集、路由器和查询参数的覆盖范围确保读者可以构建遵循最佳实践的灵活且可重复使用的 API。此外，本书还强调了测试的重要性，指导开发人员完成为其 API 编写单元测试的过程，确保应用程序在增长时的可靠性和稳定性。",
            // Russian
            "Русский": "В книге также подчеркивается важность аутентификации и разрешений, ключевых элементов в создании безопасных веб-API. С помощью понятных объяснений и примеров разработчики узнают, как реализовать аутентификацию на основе токенов, аутентификацию на основе сеансов и сторонние службы OAuth. Охват наборов представлений, маршрутизаторов и параметров запросов гарантирует, что читатели смогут создавать гибкие и повторно используемые API, которые следуют лучшим практикам. Кроме того, в книге подчеркивается важность тестирования, направляя разработчиков через процесс написания модульных тестов для их API, обеспечивая их надежность и стабильность по мере роста приложений.",
            // French
            "Français": "L'ouvrage met également l'accent sur l'importance de l'authentification et des autorisations, éléments clés dans la création d'API Web sécurisées. Grâce à des explications et des exemples clairs, les développeurs apprendront à mettre en œuvre l'authentification basée sur les jetons, l'authentification basée sur les sessions et les services OAuth tiers. La couverture des ensembles de vues, des routeurs et des paramètres de requête garantit que les lecteurs peuvent créer des API flexibles et réutilisables qui suivent les meilleures pratiques. En outre, l'ouvrage souligne l'importance des tests, en guidant les développeurs dans le processus d'écriture de tests unitaires pour leurs API, garantissant ainsi leur fiabilité et leur stabilité à mesure que les applications se développent.",
            // Japanese
            "日本語": "本書では、安全な Web API を構築する上で重要な要素である認証と権限の重要性についても強調しています。開発者は、わかりやすい説明と例を通して、トークンベースの認証、セッションベースの認証、サードパーティの OAuth サービスの実装方法を学ぶことができます。ビューセット、ルーター、クエリ パラメータを網羅しているため、ベスト プラクティスに従った柔軟で再利用可能な API を構築できます。さらに、本書ではテストの重要性を強調し、開発者が API の単体テストを作成するプロセスをガイドして、アプリケーションの拡張に合わせて信頼性と安定性を確保します。",
            // Korean
            "한국인": "이 책은 또한 안전한 웹 API를 구축하는 데 있어 핵심 요소인 인증 및 권한의 중요성을 강조합니다. 명확한 설명과 예를 통해 개발자는 토큰 기반 인증, 세션 기반 인증 및 타사 OAuth 서비스를 구현하는 방법을 배우게 됩니다. 뷰셋, 라우터 및 쿼리 매개변수에 대한 설명은 독자가 모범 사례를 따르는 유연하고 재사용 가능한 API를 구축할 수 있도록 보장합니다. 또한 이 책은 테스트의 중요성을 강조하여 개발자가 API에 대한 단위 테스트를 작성하는 과정을 안내하고 애플리케이션이 성장함에 따라 안정성과 신뢰성을 보장합니다.",
            // Spanish
            "Español": "El libro también enfatiza la importancia de la autenticación y los permisos, elementos clave para crear API web seguras. A través de explicaciones y ejemplos claros, los desarrolladores aprenderán a implementar la autenticación basada en tokens, la autenticación basada en sesiones y los servicios OAuth de terceros. La cobertura de conjuntos de vistas, enrutadores y parámetros de consulta garantiza que los lectores puedan crear API flexibles y reutilizables que sigan las mejores prácticas. Además, el libro destaca la importancia de las pruebas, guiando a los desarrolladores a través del proceso de escritura de pruebas unitarias para sus API, asegurando su confiabilidad y estabilidad a medida que las aplicaciones crecen.",
            // Hindi
            "हिंदी": "पुस्तक प्रमाणीकरण और अनुमतियों के महत्व पर भी जोर देती है, जो सुरक्षित वेब API बनाने में महत्वपूर्ण तत्व हैं। स्पष्ट स्पष्टीकरण और उदाहरणों के माध्यम से, डेवलपर्स सीखेंगे कि टोकन-आधारित प्रमाणीकरण, सत्र-आधारित प्रमाणीकरण और तृतीय-पक्ष OAuth सेवाओं को कैसे लागू किया जाए। व्यूसेट, राउटर और क्वेरी मापदंडों का कवरेज सुनिश्चित करता है कि पाठक लचीले और पुन: प्रयोज्य API बना सकते हैं जो सर्वोत्तम प्रथाओं का पालन करते हैं। इसके अतिरिक्त, पुस्तक परीक्षण के महत्व पर प्रकाश डालती है, डेवलपर्स को उनके API के लिए यूनिट टेस्ट लिखने की प्रक्रिया के माध्यम से मार्गदर्शन करती है, जिससे अनुप्रयोगों के बढ़ने के साथ उनकी विश्वसनीयता और स्थिरता सुनिश्चित होती है।",
            // Portuguese
            "Português": "O livro realça ainda a importância da autenticação e das permissões, elementos-chave na construção de APIs web seguras. Através de explicações e exemplos claros, os programadores aprenderão como implementar autenticação baseada em tokens, autenticação baseada em sessões e serviços OAuth de terceiros. A cobertura de conjuntos de visualizações, routers e parâmetros de consulta garante que os leitores podem construir APIs flexíveis e reutilizáveis ​​que sigam as melhores práticas. Além disso, o livro destaca a importância dos testes, orientando os programadores no processo de escrita de testes unitários para as suas APIs, garantindo a sua fiabilidade e estabilidade à medida que as aplicações crescem.",
            // Bengali
            "বাংলা": "বইটি প্রমাণীকরণ এবং অনুমতির গুরুত্বের উপরও জোর দেয়, সুরক্ষিত ওয়েব API তৈরির মূল উপাদান। স্পষ্ট ব্যাখ্যা এবং উদাহরণের মাধ্যমে, বিকাশকারীরা শিখবে কিভাবে টোকেন-ভিত্তিক প্রমাণীকরণ, সেশন-ভিত্তিক প্রমাণীকরণ, এবং তৃতীয় পক্ষের OAuth পরিষেবাগুলি বাস্তবায়ন করতে হয়। ভিউসেট, রাউটার এবং ক্যোয়ারী প্যারামিটারের কভারেজ নিশ্চিত করে যে পাঠকরা নমনীয় এবং পুনরায় ব্যবহারযোগ্য API তৈরি করতে পারে যা সর্বোত্তম অনুশীলন অনুসরণ করে। উপরন্তু, বইটি পরীক্ষার গুরুত্ব তুলে ধরে, ডেভেলপারদের তাদের API-এর জন্য ইউনিট পরীক্ষা লেখার প্রক্রিয়ার মাধ্যমে গাইড করে, অ্যাপ্লিকেশন বৃদ্ধির সাথে সাথে তাদের নির্ভরযোগ্যতা এবং স্থিতিশীলতা নিশ্চিত করে।",
            // Arabic
            "عَرَبِيّ": "كما يؤكد الكتاب على أهمية المصادقة والأذونات، وهي عناصر أساسية في بناء واجهات برمجة تطبيقات ويب آمنة. ومن خلال التفسيرات والأمثلة الواضحة، سيتعلم المطورون كيفية تنفيذ المصادقة القائمة على الرمز، والمصادقة القائمة على الجلسة، وخدمات OAuth التابعة لجهات خارجية. ويضمن تغطية مجموعات المشاهدات والموجهات ومعلمات الاستعلام أن يتمكن القراء من بناء واجهات برمجة تطبيقات مرنة وقابلة لإعادة الاستخدام تتبع أفضل الممارسات. بالإضافة إلى ذلك، يسلط الكتاب الضوء على أهمية الاختبار، وتوجيه المطورين خلال عملية كتابة اختبارات الوحدة لواجهات برمجة التطبيقات الخاصة بهم، وضمان موثوقيتها واستقرارها مع نمو التطبيقات.",
            // Persian
            "فارسی": "این کتاب همچنین بر اهمیت احراز هویت و مجوزها، عناصر کلیدی در ایجاد APIهای وب ایمن تأکید می کند. از طریق توضیحات و مثال‌های واضح، توسعه‌دهندگان یاد خواهند گرفت که چگونه احراز هویت مبتنی بر توکن، احراز هویت مبتنی بر جلسه و خدمات OAuth شخص ثالث را پیاده‌سازی کنند. پوشش مجموعه‌های نمایش، مسیریاب‌ها و پارامترهای پرس و جو تضمین می‌کند که خوانندگان می‌توانند APIهای انعطاف‌پذیر و قابل استفاده مجدد بسازند که بهترین شیوه‌ها را دنبال می‌کنند. علاوه بر این، این کتاب بر اهمیت آزمایش، هدایت توسعه‌دهندگان از طریق فرآیند نوشتن تست‌های واحد برای API‌هایشان، و اطمینان از قابلیت اطمینان و پایداری آن‌ها با رشد برنامه‌ها تاکید می‌کند.",
        },
        // Paragraph 3
        {
            // English
            "English": "What sets Django for APIs apart is its focus on real-world applications. Readers will work on practical projects, such as building a fully-functional blog API, learning to handle common API tasks like pagination, filtering, and versioning. These examples help solidify the concepts and demonstrate how Django and DRF can be used in professional environments. By the end of the book, developers will have the confidence and knowledge to build robust, production-ready APIs, suitable for powering modern web and mobile applications.",
            // German
            "Deutsch": "Was Django für APIs auszeichnet, ist sein Fokus auf reale Anwendungen. Die Leser arbeiten an praktischen Projekten, wie dem Erstellen einer voll funktionsfähigen Blog-API, und lernen, gängige API-Aufgaben wie Paginierung, Filterung und Versionierung zu handhaben. Diese Beispiele helfen dabei, die Konzepte zu festigen und zu zeigen, wie Django und DRF in professionellen Umgebungen eingesetzt werden können. Am Ende des Buches haben die Entwickler das Selbstvertrauen und das Wissen, um robuste, produktionsreife APIs zu erstellen, die für die Unterstützung moderner Web- und Mobilanwendungen geeignet sind.",
            // Chinese
            "中国人": "Django for APIs 的与众不同之处在于它专注于实际应用。读者将参与实际项目，例如构建功能齐全的博客 API，学习处理常见的 API 任务，如分页、过滤和版本控制。这些示例有助于巩固概念，并演示如何在专业环境中使用 Django 和 DRF。在本书结束时，开发人员将有信心和知识来构建强大的、可用于生产的 API，适合为现代 Web 和移动应用程序提供支持。",
            // Russian
            "Русский": "Django for APIs отличается своей ориентацией на реальные приложения. Читатели будут работать над практическими проектами, такими как создание полнофункционального API блога, изучая обработку общих задач API, таких как разбиение на страницы, фильтрация и управление версиями. Эти примеры помогают закрепить концепции и демонстрируют, как Django и DRF могут использоваться в профессиональных средах. К концу книги разработчики будут иметь уверенность и знания для создания надежных, готовых к производству API, подходящих для питания современных веб- и мобильных приложений.",
            // French
            "Français": "Ce qui distingue Django for APIs, c'est son approche centrée sur les applications du monde réel. Les lecteurs travailleront sur des projets pratiques, tels que la création d'une API de blog entièrement fonctionnelle, et apprendront à gérer les tâches API courantes telles que la pagination, le filtrage et le contrôle de version. Ces exemples aident à consolider les concepts et à démontrer comment Django et DRF peuvent être utilisés dans des environnements professionnels. À la fin du livre, les développeurs auront la confiance et les connaissances nécessaires pour créer des API robustes et prêtes pour la production, adaptées à l'alimentation d'applications Web et mobiles modernes.",
            // Japanese
            "日本語": "Django for API が他と一線を画しているのは、実際のアプリケーションに重点を置いていることです。読者は、完全に機能するブログ API の構築、ページネーション、フィルタリング、バージョン管理などの一般的な API タスクの処理方法の学習など、実践的なプロジェクトに取り組みます。これらの例は、概念を固め、Django と DRF をプロフェッショナルな環境でどのように使用できるかを示すのに役立ちます。この本を読み終える頃には、開発者は、最新の Web アプリケーションやモバイル アプリケーションを強化するのに適した、堅牢で本番環境に対応した API を構築するための自信と知識を身に付けているでしょう。",
            // Korean
            "한국인": "API를 위한 Django를 차별화하는 것은 실제 애플리케이션에 초점을 맞춘다는 것입니다. 독자는 완전한 기능을 갖춘 블로그 API를 구축하고, 페이지 매김, 필터링, 버전 관리와 같은 일반적인 API 작업을 처리하는 방법을 배우는 것과 같은 실제 프로젝트를 수행합니다. 이러한 예제는 개념을 굳건히 하고 Django와 DRF를 전문적인 환경에서 사용하는 방법을 보여줍니다. 이 책을 다 읽고 나면 개발자는 현대 웹 및 모바일 애플리케이션에 적합한 강력하고 프로덕션에 적합한 API를 구축할 수 있는 자신감과 지식을 갖게 됩니다.",
            // Spanish
            "Español": "Lo que distingue a Django para API es su enfoque en aplicaciones del mundo real. Los lectores trabajarán en proyectos prácticos, como la creación de una API de blog totalmente funcional, y aprenderán a manejar tareas comunes de API como paginación, filtrado y control de versiones. Estos ejemplos ayudan a consolidar los conceptos y demuestran cómo se pueden usar Django y DRF en entornos profesionales. Al final del libro, los desarrolladores tendrán la confianza y el conocimiento para crear API sólidas y listas para producción, adecuadas para impulsar aplicaciones web y móviles modernas.",
            // Hindi
            "हिंदी": "एपीआई के लिए Django को जो चीज अलग बनाती है, वह है वास्तविक दुनिया के अनुप्रयोगों पर इसका ध्यान। पाठक व्यावहारिक परियोजनाओं पर काम करेंगे, जैसे कि एक पूरी तरह से कार्यात्मक ब्लॉग एपीआई बनाना, पेजिनेशन, फ़िल्टरिंग और वर्जनिंग जैसे सामान्य एपीआई कार्यों को संभालना सीखना। ये उदाहरण अवधारणाओं को पुख्ता करने में मदद करते हैं और प्रदर्शित करते हैं कि पेशेवर वातावरण में Django और DRF का उपयोग कैसे किया जा सकता है। पुस्तक के अंत तक, डेवलपर्स के पास आधुनिक वेब और मोबाइल अनुप्रयोगों को सशक्त बनाने के लिए उपयुक्त मजबूत, उत्पादन-तैयार API बनाने का आत्मविश्वास और ज्ञान होगा।",
            // Portuguese
            "Português": "O que diferencia o Django para APIs é o seu foco em aplicações do mundo real. Os leitores trabalharão em projetos práticos, como a construção de uma API de blogue totalmente funcional, aprendendo a lidar com tarefas comuns da API, como paginação, filtragem e controlo de versão. Estes exemplos ajudam a solidificar os conceitos e demonstram como o Django e o DRF podem ser utilizados em ambientes profissionais. No final do livro, os programadores terão a confiança e o conhecimento necessários para criar APIs robustas e prontas para produção, adequadas para alimentar aplicações móveis e Web modernas.",
            // Bengali
            "বাংলা": "এপিআই-এর জন্য জ্যাঙ্গোকে যা আলাদা করে তা হল বাস্তব-বিশ্বের অ্যাপ্লিকেশনগুলিতে ফোকাস। পাঠকরা ব্যবহারিক প্রকল্পগুলিতে কাজ করবে, যেমন একটি সম্পূর্ণ-কার্যকরী ব্লগ API তৈরি করা, পৃষ্ঠাকরণ, ফিল্টারিং এবং সংস্করণ করার মতো সাধারণ API কাজগুলি পরিচালনা করতে শেখা। এই উদাহরণগুলি ধারণাগুলিকে দৃঢ় করতে সাহায্য করে এবং প্রদর্শন করে যে কীভাবে জ্যাঙ্গো এবং ডিআরএফ পেশাদার পরিবেশে ব্যবহার করা যেতে পারে। বইয়ের শেষ নাগাদ, ডেভেলপারদের কাছে শক্তিশালী, উৎপাদন-প্রস্তুত API, আধুনিক ওয়েব এবং মোবাইল অ্যাপ্লিকেশনগুলিকে পাওয়ার জন্য উপযুক্ত তৈরি করার আত্মবিশ্বাস এবং জ্ঞান থাকবে।",
            // Arabic
            "عَرَبِيّ": "ما يميز Django for APIs هو تركيزه على التطبيقات في العالم الحقيقي. سيعمل القراء على مشاريع عملية، مثل بناء واجهة برمجة تطبيقات للمدونات تعمل بكامل طاقتها، وتعلم كيفية التعامل مع مهام API الشائعة مثل الترقيم والتصفية وإصدارات الصفحات. تساعد هذه الأمثلة في ترسيخ المفاهيم وإظهار كيفية استخدام Django وDRF في البيئات المهنية. بحلول نهاية الكتاب، سيكون لدى المطورين الثقة والمعرفة لبناء واجهات برمجة تطبيقات قوية وجاهزة للإنتاج، ومناسبة لتشغيل تطبيقات الويب والجوال الحديثة.",
            // Persian
            "فارسی": "آنچه جنگو را برای API ها متمایز می کند تمرکز آن بر برنامه های کاربردی دنیای واقعی است. خوانندگان روی پروژه‌های عملی کار خواهند کرد، مانند ساختن یک API وبلاگ کاملاً کاربردی، یادگیری انجام وظایف رایج API مانند صفحه‌بندی، فیلتر کردن، و نسخه‌سازی. این مثال‌ها به تقویت مفاهیم کمک می‌کنند و نشان می‌دهند که جنگو و DRF چگونه می‌توانند در محیط‌های حرفه‌ای استفاده شوند. در پایان این کتاب، توسعه دهندگان اعتماد و دانش لازم برای ساختن API های قوی و آماده برای تولید، مناسب برای تقویت برنامه های کاربردی وب و موبایل مدرن را خواهند داشت.",
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
        document.title = "MHA - " + django_for_professionals["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = django_for_professionals["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = django_for_professionals["TotalDescriptionAboutTheBook"][index][newLanguage];
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