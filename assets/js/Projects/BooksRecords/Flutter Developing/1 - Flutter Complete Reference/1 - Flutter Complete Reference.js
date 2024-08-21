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
var flutter_complete_reference = {
    "BookName": "Flutter Complete Reference",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Welcome",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter of the book introduces Dart and Flutter, highlighting Dart as a client-optimized, garbage-collected, OOP language for creating fast apps on any platform. It discusses the flexibility of Dart across different environments and its package system available on pub.dev. The chapter also delves into Flutter as an UI toolkit for building natively compiled applications for mobile, desktop, and web with a single codebase, emphasizing its unique rendering capabilities and the reasons behind choosing Dart as its language. Additionally, it mentions key figures in the Flutter/Dart community who have contributed significantly to the development and maintenance of related libraries and frameworks.",
                // German
                "Deutsch": "Dieses Kapitel des Buches stellt Dart und Flutter vor und hebt Dart als clientoptimierte, Garbage-Collected-OOP-Sprache zum Erstellen schneller Apps auf jeder Plattform hervor. Es erörtert die Flexibilität von Dart in verschiedenen Umgebungen und sein auf pub.dev verfügbares Paketsystem. Das Kapitel befasst sich auch mit Flutter als UI-Toolkit zum Erstellen nativ kompilierter Anwendungen für Mobilgeräte, Desktops und das Web mit einer einzigen Codebasis und betont seine einzigartigen Rendering-Funktionen und die Gründe für die Wahl von Dart als Sprache. Darüber hinaus werden Schlüsselfiguren der Flutter/Dart-Community erwähnt, die maßgeblich zur Entwicklung und Wartung verwandter Bibliotheken und Frameworks beigetragen haben.",
                // Chinese
                "中国人": "本书的这一章介绍了 Dart 和 Flutter，重点介绍了 Dart 是一种针对客户端优化、具有垃圾收集功能的 OOP 语言，可用于在任何平台上创建快速应用程序。它讨论了 Dart 在不同环境中的灵活性以及它在 pub.dev 上提供的软件包系统。本章还深入探讨了 Flutter 作为 UI 工具包，用于使用单一代码库为移动、桌面和 Web 构建本机编译的应用程序，强调了其独特的渲染功能以及选择 Dart 作为其语言的原因。此外，它还提到了 Flutter/Dart 社区中为相关库和框架的开发和维护做出重大贡献的关键人物。",
                // Russian
                "Русский": "В этой главе книги представлены Dart и Flutter, в которых Dart рассматривается как оптимизированный для клиента ООП-язык со сборкой мусора для создания быстрых приложений на любой платформе. В нем обсуждается гибкость Dart в различных средах и его система пакетов, доступная на pub.dev. В главе также рассматривается Flutter как набор инструментов пользовательского интерфейса для создания скомпилированных в собственном коде приложений для мобильных устройств, настольных компьютеров и Интернета с единой кодовой базой, подчеркиваются его уникальные возможности рендеринга и причины выбора Dart в качестве языка. Кроме того, в нем упоминаются ключевые фигуры сообщества Flutter/Dart, которые внесли значительный вклад в разработку и поддержку соответствующих библиотек и фреймворков.",
                // French
                "Français": "Ce chapitre du livre présente Dart et Flutter, mettant en avant Dart en tant que langage POO optimisé pour le client et collecté pour la création d'applications rapides sur n'importe quelle plate-forme. Il discute de la flexibilité de Dart dans différents environnements et de son système de packages disponible sur pub.dev. Le chapitre aborde également Flutter en tant que boîte à outils d'interface utilisateur permettant de créer des applications compilées nativement pour les mobiles, les ordinateurs de bureau et le Web avec une seule base de code, en soulignant ses capacités de rendu uniques et les raisons qui ont motivé le choix de Dart comme langage. De plus, il mentionne des personnalités clés de la communauté Flutter/Dart qui ont contribué de manière significative au développement et à la maintenance de bibliothèques et de frameworks associés.",
                // Japanese
                "日本語": "この章では Dart と Flutter を紹介し、あらゆるプラットフォームで高速なアプリを作成するための、クライアントに最適化され、ガベージ コレクションされた OOP 言語としての Dart に焦点を当てています。さまざまな環境にわたる Dart の柔軟性と、pub.dev で利用できるパッケージ システムについて説明します。また、この章では、モバイル、デスクトップ、Web 用のネイティブ コンパイル アプリケーションを単一のコードベースで構築するための UI ツールキットとしての Flutter についても詳しく説明し、その独自のレンダリング機能と、言語として Dart を選択した理由を強調しています。さらに、関連するライブラリとフレームワークの開発と保守に大きく貢献した Flutter/Dart コミュニティの主要人物についても触れています。",
                // Korean
                "한국인": "책의 이 장에서는 Dart와 Flutter를 소개하며 모든 플랫폼에서 빠른 앱을 만들기 위한 클라이언트 최적화, 가비지 수집 OOP 언어인 Dart를 강조합니다. 다양한 환경에 걸친 Dart의 유연성과 pub.dev에서 사용할 수 있는 패키지 시스템에 대해 논의합니다. 또한 이 장에서는 단일 코드베이스로 모바일, 데스크톱 및 웹용으로 기본적으로 컴파일된 애플리케이션을 구축하기 위한 UI 툴킷인 Flutter에 대해 자세히 알아보고 Flutter의 고유한 렌더링 기능과 Dart를 언어로 선택한 이유를 강조합니다. 또한 관련 라이브러리 및 프레임워크의 개발 및 유지 관리에 크게 기여한 Flutter/Dart 커뮤니티의 주요 인물을 언급합니다.",
                // Spanish
                "Español": "Este capítulo del libro presenta Dart y Flutter, destacando a Dart como un lenguaje OOP optimizado para el cliente y con recolección de basura para crear aplicaciones rápidas en cualquier plataforma. Analiza la flexibilidad de Dart en diferentes entornos y su sistema de paquetes disponible en pub.dev. El capítulo también profundiza en Flutter como un conjunto de herramientas de interfaz de usuario para crear aplicaciones compiladas de forma nativa para dispositivos móviles, de escritorio y web con una única base de código, enfatizando sus capacidades de representación únicas y las razones detrás de elegir Dart como su lenguaje. Además, menciona figuras clave de la comunidad Flutter/Dart que han contribuido significativamente al desarrollo y mantenimiento de bibliotecas y marcos relacionados.",
                // Hindi
                "हिंदी": "पुस्तक का यह अध्याय डार्ट और फ़्लटर का परिचय देता है, डार्ट को किसी भी प्लेटफ़ॉर्म पर तेज़ ऐप बनाने के लिए क्लाइंट-अनुकूलित, कचरा-संग्रहित, OOP भाषा के रूप में उजागर करता है। यह विभिन्न वातावरणों में डार्ट की लचीलेपन और pub.dev पर उपलब्ध इसके पैकेज सिस्टम पर चर्चा करता है। यह अध्याय फ़्लटर को एक UI टूलकिट के रूप में भी बताता है, जो मोबाइल, डेस्कटॉप और वेब के लिए एकल कोडबेस के साथ मूल रूप से संकलित एप्लिकेशन बनाने के लिए है, इसकी अनूठी रेंडरिंग क्षमताओं और डार्ट को अपनी भाषा के रूप में चुनने के पीछे के कारणों पर ज़ोर देता है। इसके अतिरिक्त, यह फ़्लटर/डार्ट समुदाय के प्रमुख व्यक्तियों का उल्लेख करता है जिन्होंने संबंधित पुस्तकालयों और फ़्रेमवर्क के विकास और रखरखाव में महत्वपूर्ण योगदान दिया है।",
                // Portuguese
                "Português": "Este capítulo do livro apresenta o Dart e o Flutter, destacando o Dart como uma linguagem OOP otimizada para o cliente e com recolha de lixo para criar aplicações rápidas em qualquer plataforma. Discute a flexibilidade do Dart em diferentes ambientes e o seu sistema de pacotes disponível em pub.dev. O capítulo também aprofunda o Flutter como um kit de ferramentas de UI para construir aplicações compiladas nativamente para dispositivos móveis, desktop e web com uma única base de código, enfatizando as suas capacidades únicas de renderização e as razões por detrás da escolha do Dart como linguagem . Além disso, menciona figuras-chave da comunidade Flutter/Dart que contribuíram significativamente para o desenvolvimento e manutenção de bibliotecas e estruturas relacionadas.",
                // Bengali
                "বাংলা": "বইটির এই অধ্যায়টি ডার্ট এবং ফ্লটারের পরিচয় দেয়, যেকোন প্ল্যাটফর্মে দ্রুত অ্যাপ তৈরি করার জন্য ডার্টকে একটি ক্লায়েন্ট-অপ্টিমাইজ করা, আবর্জনা-সংগৃহীত, OOP ভাষা হিসাবে হাইলাইট করে। এটি বিভিন্ন পরিবেশে ডার্টের নমনীয়তা এবং pub.dev এ উপলব্ধ এর প্যাকেজ সিস্টেম নিয়ে আলোচনা করে। অধ্যায়টি মোবাইল, ডেস্কটপ এবং ওয়েবের জন্য একটি একক কোডবেস সহ স্থানীয়ভাবে সংকলিত অ্যাপ্লিকেশনগুলি তৈরি করার জন্য একটি UI টুলকিট হিসাবে ফ্লাটার সম্পর্কেও আলোচনা করে, এর অনন্য রেন্ডারিং ক্ষমতা এবং ডার্টকে এর ভাষা হিসাবে বেছে নেওয়ার কারণগুলির উপর জোর দেয়। উপরন্তু, এটি ফ্লাটার/ডার্ট সম্প্রদায়ের গুরুত্বপূর্ণ ব্যক্তিদের উল্লেখ করে যারা সম্পর্কিত লাইব্রেরি এবং কাঠামোর উন্নয়ন এবং রক্ষণাবেক্ষণে উল্লেখযোগ্যভাবে অবদান রেখেছে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل من الكتاب Dart وFlutter، ويسلط الضوء على Dart كلغة OOP محسنة للعميل ومجمعة للقمامة لإنشاء تطبيقات سريعة على أي نظام أساسي. ويناقش مرونة Dart عبر بيئات مختلفة ونظام الحزم الخاص بها المتوفر على pub.dev. يتعمق الفصل أيضًا في Flutter كمجموعة أدوات لواجهة المستخدم لبناء تطبيقات مجمعة محليًا للجوال وسطح المكتب والويب بقاعدة تعليمات برمجية واحدة، مع التركيز على قدرات العرض الفريدة والأسباب وراء اختيار Dart كلغتها. بالإضافة إلى ذلك، فإنه يذكر الشخصيات الرئيسية في مجتمع Flutter/Dart الذين ساهموا بشكل كبير في تطوير وصيانة المكتبات والأطر ذات الصلة.",
                // Persian
                "فارسی": "این فصل از کتاب دارت و فلاتر را معرفی می‌کند و دارت را به‌عنوان یک زبان OOP بهینه‌شده برای مشتری و جمع‌آوری زباله برای ایجاد برنامه‌های سریع در هر پلتفرمی برجسته می‌کند. در مورد انعطاف Dart در محیط های مختلف و سیستم بسته آن که در pub.dev موجود است بحث می کند. این فصل همچنین به Flutter به عنوان یک ابزار UI برای ساخت برنامه‌های کامپایل‌شده بومی برای موبایل، دسک‌تاپ و وب با یک پایگاه کد می‌پردازد و بر قابلیت‌های رندر منحصربه‌فرد آن و دلایل انتخاب دارت به‌عنوان زبان آن تأکید می‌کند. به‌علاوه، از چهره‌های کلیدی در جامعه فلاتر/دارت نام می‌برد که سهم قابل توجهی در توسعه و نگهداری کتابخانه‌ها و چارچوب‌های مرتبط داشته‌اند.",
            },
        },
        // 2
        {
            "ChapterName": "Variables and data types",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter of Dart programming, the focus is on variables and data types. It covers the use of for type inference, for immutability, and for flexibility. The chapter explains the different types of numbers in Dart, and introduces enumerated types. It also delves into operators like arithmetic, relational, type test, logical, and bitwise operators. Overall, the chapter provides a comprehensive overview of variables, data types, and operators in Dart programming.",
                // German
                "Deutsch": "In diesem Kapitel der Dart-Programmierung liegt der Schwerpunkt auf Variablen und Datentypen. Es behandelt die Verwendung von für Typinferenz, für Unveränderlichkeit und für Flexibilität. Das Kapitel erklärt die verschiedenen Zahlentypen in Dart und führt aufgezählte Typen ein. Es befasst sich auch mit Operatoren wie arithmetischen, relationalen, Typtest-, logischen und bitweisen Operatoren. Insgesamt bietet das Kapitel einen umfassenden Überblick über Variablen, Datentypen und Operatoren in der Dart-Programmierung.",
                // Chinese
                "中国人": "在 Dart 编程的这一章中，重点介绍变量和数据类型。它涵盖了类型推断、不变性和灵活性的用法。本章解释了 Dart 中的不同类型的数字，并介绍了枚举类型。它还深入研究了算术、关系、类型测试、逻辑和位运算符等运算符。总体而言，本章全面概述了 Dart 编程中的变量、数据类型和运算符。",
                // Russian
                "Русский": "В этой главе программирования на Dart основное внимание уделяется переменным и типам данных. Он охватывает использование для вывода типа, неизменяемости и гибкости. В главе объясняются различные типы чисел в Dart и знакомятся с перечисляемыми типами. Он также углубляется в такие операторы, как арифметические, реляционные, тестовые, логические и побитовые операторы. В целом, в главе представлен полный обзор переменных, типов данных и операторов в программировании на Dart.",
                // French
                "Français": "Dans ce chapitre de programmation Dart, l'accent est mis sur les variables et les types de données. Il couvre l'utilisation de pour l'inférence de type, pour l'immuabilité et pour la flexibilité. Le chapitre explique les différents types de nombres dans Dart et présente les types énumérés. Il se penche également sur les opérateurs tels que les opérateurs arithmétiques, relationnels, de test de type, logiques et au niveau du bit. Dans l'ensemble, le chapitre fournit un aperçu complet des variables, des types de données et des opérateurs dans la programmation Dart.",
                // Japanese
                "日本語": "Dart プログラミングのこの章では、変数とデータ型に焦点を当てています。型推論、不変性、柔軟性のための の使用について説明します。この章では、Dart のさまざまな数値型について説明し、列挙型を紹介します。また、算術演算子、関係演算子、型テスト演算子、論理演算子、ビット演算子などの演算子についても詳しく説明します。全体として、この章では Dart プログラミングの変数、データ型、演算子の包括的な概要を提供します。",
                // Korean
                "한국인": "Dart 프로그래밍의 이 장에서는 변수와 데이터 유형에 중점을 둡니다. 유형 추론, 불변성 및 유연성을 위한 사용을 다룹니다. 이 장에서는 Dart의 다양한 숫자 유형을 설명하고 열거 유형을 소개합니다. 또한 산술, 관계형, 유형 테스트, 논리 및 비트 연산자와 같은 연산자를 자세히 살펴봅니다. 전반적으로 이 장에서는 Dart 프로그래밍의 변수, 데이터 유형 및 연산자에 대한 포괄적인 개요를 제공합니다.",
                // Spanish
                "Español": "En este capítulo de programación de Dart, la atención se centra en las variables y los tipos de datos. Cubre el uso de para inferencia de tipos, para inmutabilidad y para flexibilidad. El capítulo explica los diferentes tipos de números en Dart e introduce los tipos enumerados. También profundiza en operadores como aritméticos, relacionales, de prueba de tipo, lógicos y bit a bit. En general, el capítulo proporciona una descripción general completa de las variables, tipos de datos y operadores en la programación de Dart.",
                // Hindi
                "हिंदी": "डार्ट प्रोग्रामिंग के इस अध्याय में, चर और डेटा प्रकारों पर ध्यान केंद्रित किया गया है। यह प्रकार अनुमान, अपरिवर्तनीयता और लचीलेपन के लिए उपयोग को कवर करता है। अध्याय डार्ट में संख्याओं के विभिन्न प्रकारों की व्याख्या करता है, और गणना किए गए प्रकारों का परिचय देता है। यह अंकगणित, संबंधपरक, प्रकार परीक्षण, तार्किक और बिटवाइज़ ऑपरेटरों जैसे ऑपरेटरों पर भी गहराई से चर्चा करता है। कुल मिलाकर, अध्याय डार्ट प्रोग्रामिंग में चर, डेटा प्रकारों और ऑपरेटरों का एक व्यापक अवलोकन प्रदान करता है।",
                // Portuguese
                "Português": "Neste capítulo da programação Dart, o foco está nas variáveis ​​e nos tipos de dados. Abrange o uso de para inferência de tipos, para imutabilidade e para flexibilidade. O capítulo explica os diferentes tipos de números no Dart e apresenta os tipos enumerados. Também se aprofunda em operadores como operadores aritméticos, relacionais, de teste de tipo, lógicos e bit a bit. No geral, o capítulo fornece uma visão geral abrangente das variáveis, tipos de dados e operadores na programação Dart.",
                // Bengali
                "বাংলা": "ডার্ট প্রোগ্রামিংয়ের এই অধ্যায়ে, ভেরিয়েবল এবং ডেটা প্রকারের উপর ফোকাস করা হয়। এটি টাইপের অনুমানের জন্য, অপরিবর্তনীয়তার জন্য এবং নমনীয়তার জন্য ব্যবহারকে কভার করে। অধ্যায়টি ডার্টে বিভিন্ন ধরণের সংখ্যা ব্যাখ্যা করে এবং গণনাকৃত প্রকারের পরিচয় দেয়। এটি পাটিগণিত, রিলেশনাল, টাইপ টেস্ট, লজিক্যাল এবং বিটওয়াইজ অপারেটরগুলির মতো অপারেটরগুলির মধ্যেও তলিয়ে যায়। সামগ্রিকভাবে, অধ্যায়টি ডার্ট প্রোগ্রামিং-এ ভেরিয়েবল, ডেটা টাইপ এবং অপারেটরগুলির একটি ব্যাপক ওভারভিউ প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل من برمجة Dart، يتم التركيز على المتغيرات وأنواع البيانات. ويغطي استخدام الاستدلال على النوع والثبات والمرونة. يشرح الفصل الأنواع المختلفة من الأرقام في Dart، ويقدم الأنواع التي تم تعدادها. كما أنه يتعمق في العوامل مثل العوامل الحسابية والعلائقية واختبار النوع والعوامل المنطقية ومعامل البت. بشكل عام، يقدم الفصل نظرة شاملة للمتغيرات وأنواع البيانات والمشغلين في برمجة Dart.",
                // Persian
                "فارسی": "در این فصل از برنامه نویسی دارت، تمرکز بر متغیرها و انواع داده ها است. استفاده از استنتاج نوع، تغییرناپذیری و انعطاف پذیری را پوشش می دهد. این فصل انواع مختلف اعداد را در دارت توضیح می دهد و انواع برشمرده شده را معرفی می کند. همچنین به عملگرهایی مانند عملگرهای حسابی، رابطه ای، نوع تست، منطقی و عملگرهای بیتی می پردازد. به طور کلی، این فصل یک مرور کلی از متغیرها، انواع داده ها و عملگرها در برنامه نویسی دارت ارائه می دهد.",
            },
        },
        // 3
        {
            "ChapterName": "Control flow and functions",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter on Control Flow and Functions in Dart covers essential programming concepts such as if statements, conditional expressions, good practices for readability, switch statements, loops, assertions, functions, optional parameters, nested functions, and typedefs. It emphasizes the importance of clear code structure, efficient condition handling, and the use of shorthand syntax for concise expressions. The chapter provides practical examples and recommendations to enhance code readability and maintainability, making it a comprehensive guide for mastering control flow and function implementation in Dart programming.",
                // German
                "Deutsch": "Dieses Kapitel über Kontrollfluss und Funktionen in Dart behandelt wichtige Programmierkonzepte wie if-Anweisungen, bedingte Ausdrücke, bewährte Methoden zur Lesbarkeit, Switch-Anweisungen, Schleifen, Behauptungen, Funktionen, optionale Parameter, verschachtelte Funktionen und Typdefinitionen. Es betont die Bedeutung einer klaren Codestruktur, einer effizienten Bedingungsbehandlung und der Verwendung einer Kurzsyntax für prägnante Ausdrücke. Das Kapitel enthält praktische Beispiele und Empfehlungen zur Verbesserung der Lesbarkeit und Wartbarkeit des Codes und ist somit ein umfassender Leitfaden zur Beherrschung des Kontrollflusses und der Funktionsimplementierung in der Dart-Programmierung.",
                // Chinese
                "中国人": "本章“Dart 中的控制流和函数”涵盖了基本的编程概念，例如 if 语句、条件表达式、可读性良好实践、switch 语句、循环、断言、函数、可选参数、嵌套函数和 typedef。它强调了清晰的代码结构、高效的条件处理以及使用简写语法来表达简洁表达式的重要性。本章提供了实际的示例和建议，以提高代码的可读性和可维护性，使其成为掌握 Dart 编程中的控制流和函数实现的全面指南。",
                // Russian
                "Русский": "В этой главе, посвященной потоку управления и функциям в Dart, рассматриваются основные концепции программирования, такие как операторы if, условные выражения, передовые методы повышения читаемости, операторы переключения, циклы, утверждения, функции, необязательные параметры, вложенные функции и определения типов. Он подчеркивает важность четкой структуры кода, эффективной обработки условий и использования сокращенного синтаксиса для кратких выражений. В главе представлены практические примеры и рекомендации по повышению читаемости и удобства сопровождения кода, что делает ее всеобъемлющим руководством по освоению потока управления и реализации функций в программировании на Dart.",
                // French
                "Français": "Ce chapitre sur le flux de contrôle et les fonctions dans Dart couvre les concepts de programmation essentiels tels que les instructions if, les expressions conditionnelles, les bonnes pratiques de lisibilité, les instructions switch, les boucles, les assertions, les fonctions, les paramètres facultatifs, les fonctions imbriquées et les typedefs. Il souligne l’importance d’une structure de code claire, d’une gestion efficace des conditions et de l’utilisation d’une syntaxe abrégée pour des expressions concises. Le chapitre fournit des exemples pratiques et des recommandations pour améliorer la lisibilité et la maintenabilité du code, ce qui en fait un guide complet pour maîtriser le flux de contrôle et la mise en œuvre des fonctions dans la programmation Dart.",
                // Japanese
                "日本語": "Dart の制御フローと関数に関するこの章では、if 文、条件式、読みやすさのためのベストプラクティス、switch 文、ループ、アサーション、関数、オプションパラメータ、ネストされた関数、typedef などの基本的なプログラミング概念について説明します。明確なコード構造、効率的な条件処理、簡潔な式のための省略構文の使用の重要性を強調しています。この章では、コードの読みやすさと保守性を高めるための実用的な例と推奨事項を示しており、Dart プログラミングにおける制御フローと関数の実装を習得するための包括的なガイドとなっています。",
                // Korean
                "한국인": "Dart의 제어 흐름 및 함수에 관한 이 장에서는 if 문, 조건식, 가독성을 위한 모범 사례, 스위치 문, 루프, 어설션, 함수, 선택적 매개 변수, 중첩 함수 및 typedef와 같은 필수 프로그래밍 개념을 다룹니다. 명확한 코드 구조, 효율적인 조건 처리, 간결한 표현을 위한 단축 구문 사용의 중요성을 강조합니다. 이 장에서는 코드 가독성과 유지 관리성을 향상시키기 위한 실용적인 예제와 권장 사항을 제공하여 Dart 프로그래밍의 제어 흐름과 기능 구현을 마스터하기 위한 포괄적인 가이드가 됩니다.",
                // Spanish
                "Español": "Este capítulo sobre flujo de control y funciones en Dart cubre conceptos de programación esenciales, como declaraciones if, expresiones condicionales, buenas prácticas de legibilidad, declaraciones de cambio, bucles, aserciones, funciones, parámetros opcionales, funciones anidadas y definiciones de tipos. Enfatiza la importancia de una estructura de código clara, un manejo eficiente de las condiciones y el uso de sintaxis abreviada para expresiones concisas. El capítulo proporciona ejemplos prácticos y recomendaciones para mejorar la legibilidad y el mantenimiento del código, lo que lo convierte en una guía completa para dominar el flujo de control y la implementación de funciones en la programación de Dart.",
                // Hindi
                "हिंदी": "डार्ट में कंट्रोल फ़्लो और फ़ंक्शन पर यह अध्याय आवश्यक प्रोग्रामिंग अवधारणाओं जैसे कि if स्टेटमेंट, कंडीशनल एक्सप्रेशन, पठनीयता के लिए अच्छे अभ्यास, स्विच स्टेटमेंट, लूप, अभिकथन, फ़ंक्शन, वैकल्पिक पैरामीटर, नेस्टेड फ़ंक्शन और टाइपडेफ़ को कवर करता है। यह स्पष्ट कोड संरचना, कुशल कंडीशन हैंडलिंग और संक्षिप्त अभिव्यक्तियों के लिए शॉर्टहैंड सिंटैक्स के उपयोग के महत्व पर जोर देता है। यह अध्याय कोड पठनीयता और रखरखाव को बढ़ाने के लिए व्यावहारिक उदाहरण और सिफारिशें प्रदान करता है, जिससे यह डार्ट प्रोग्रामिंग में नियंत्रण प्रवाह और फ़ंक्शन कार्यान्वयन में महारत हासिल करने के लिए एक व्यापक मार्गदर्शिका बन जाती है।",
                // Portuguese
                "Português": "Este capítulo sobre o fluxo de controlo e funções no Dart aborda conceitos essenciais de programação, como instruções if, expressões condicionais, boas práticas para legibilidade, instruções switch, ciclos, asserções, funções, parâmetros opcionais, funções aninhadas e typedefs. Realça a importância de uma estrutura de código clara, do tratamento eficiente das condições e do uso de sintaxe abreviada para expressões concisas. O capítulo fornece exemplos práticos e recomendações para melhorar a legibilidade e a manutenção do código, tornando-o um guia abrangente para dominar o fluxo de controlo e a implementação de funções na programação Dart.",
                // Bengali
                "বাংলা": "কন্ট্রোল ফ্লো অ্যান্ড ফাংশন ইন ডার্টের এই অধ্যায়টি প্রয়োজনীয় প্রোগ্রামিং ধারণাগুলিকে কভার করে যেমন যদি স্টেটমেন্ট, কন্ডিশনাল এক্সপ্রেশন, পঠনযোগ্যতার জন্য ভাল অনুশীলন, সুইচ স্টেটমেন্ট, লুপ, দাবী, ফাংশন, ঐচ্ছিক প্যারামিটার, নেস্টেড ফাংশন এবং টাইপডেফ। এটি স্পষ্ট কোড গঠন, দক্ষ কন্ডিশন হ্যান্ডলিং, এবং সংক্ষিপ্ত অভিব্যক্তির জন্য শর্টহ্যান্ড সিনট্যাক্সের গুরুত্বের উপর জোর দেয়। অধ্যায়টি কোড পঠনযোগ্যতা এবং রক্ষণাবেক্ষণযোগ্যতা বাড়ানোর জন্য ব্যবহারিক উদাহরণ এবং সুপারিশ প্রদান করে, এটি ডার্ট প্রোগ্রামিং-এ নিয়ন্ত্রণ প্রবাহ এবং ফাংশন বাস্তবায়নের দক্ষতা অর্জনের জন্য একটি ব্যাপক নির্দেশিকা তৈরি করে।",
                // Arabic
                "عَرَبِيّ": "يغطي هذا الفصل حول التحكم في التدفق والوظائف في Dart مفاهيم البرمجة الأساسية مثل عبارات if، والتعبيرات الشرطية، والممارسات الجيدة لسهولة القراءة، وعبارات التبديل، والحلقات، والتأكيدات، والوظائف، والمعلمات الاختيارية، والوظائف المتداخلة، وtypedefs. ويؤكد على أهمية بنية التعليمات البرمجية الواضحة، والتعامل الفعال مع الحالة، واستخدام بناء الجملة المختصرة للتعبيرات الموجزة. يقدم الفصل أمثلة عملية وتوصيات لتعزيز إمكانية قراءة التعليمات البرمجية وقابلية صيانتها، مما يجعله دليلاً شاملاً لإتقان تدفق التحكم وتنفيذ الوظائف في برمجة Dart.",
                // Persian
                "فارسی": "این فصل در مورد جریان کنترل و توابع در دارت مفاهیم اساسی برنامه نویسی مانند دستورات if، عبارات شرطی، شیوه های خوب برای خوانایی، عبارات سوئیچ، حلقه ها، ادعاها، توابع، پارامترهای اختیاری، توابع تو در تو، و typedefs را پوشش می دهد. این بر اهمیت ساختار کد واضح، مدیریت کارآمد شرایط و استفاده از نحو مختصر برای عبارات مختصر تأکید دارد. این فصل مثال‌های عملی و توصیه‌هایی را برای افزایش خوانایی و قابلیت نگهداری کد ارائه می‌کند و آن را به راهنمای جامعی برای تسلط بر جریان کنترل و اجرای عملکرد در برنامه‌نویسی دارت تبدیل می‌کند.",
            },
        },
        // 4
        {
            "ChapterName": "Classes",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter discusses essential concepts related to classes in Dart programming. It covers best practices such as maintaining concise getters and setters for code readability, avoiding the use of the new keyword for object instantiation, and utilizing cascade notation for efficient object initialization. The chapter also emphasizes the importance of libraries for code organization and visibility, along with guidelines for constructors and operator overloading. Additionally, it highlights the significance of getters and setters in controlling access to class variables to prevent data corruption and the use of the method for creating deep copies of objects.",
                // German
                "Deutsch": "In diesem Kapitel werden wesentliche Konzepte im Zusammenhang mit Klassen in der Dart-Programmierung erörtert. Es behandelt bewährte Vorgehensweisen wie die Beibehaltung prägnanter Getter und Setter zur besseren Lesbarkeit des Codes, die Vermeidung der Verwendung des neuen Schlüsselworts zur Objektinstanziierung und die Verwendung der Kaskadennotation zur effizienten Objektinitialisierung. Das Kapitel betont auch die Bedeutung von Bibliotheken für die Organisation und Sichtbarkeit des Codes sowie Richtlinien für Konstruktoren und Operatorüberladung. Darüber hinaus wird die Bedeutung von Gettern und Settern bei der Steuerung des Zugriffs auf Klassenvariablen hervorgehoben, um Datenbeschädigungen zu verhindern, sowie die Verwendung der Methode zum Erstellen tiefer Kopien von Objekten.",
                // Chinese
                "中国人": "本章讨论了 Dart 编程中与类相关的基本概念。它涵盖了最佳实践，例如维护简洁的 getter 和 setter 以提高代码可读性、避免使用 new 关键字进行对象实例化以及利用级联表示法实现高效的对象初始化。本章还强调了库对于代码组织和可见性的重要性，以及构造函数和运算符重载的指南。此外，它还强调了 getter 和 setter 在控制对类变量的访问以防止数据损坏以及使用方法创建对象的深层副本方面的重要性。",
                // Russian
                "Русский": "В этой главе обсуждаются основные концепции, связанные с классами в программировании на Dart. В нем рассматриваются лучшие практики, такие как сохранение кратких методов получения и установки для удобства чтения кода, отказ от использования ключевого слова new для создания экземпляров объектов и использование каскадной нотации для эффективной инициализации объектов. В главе также подчеркивается важность библиотек для организации и наглядности кода, а также приводятся рекомендации по перегрузке конструкторов и операторов. Кроме того, подчеркивается значение геттеров и сеттеров в контроле доступа к переменным класса для предотвращения повреждения данных и использования метода создания глубоких копий объектов.",
                // French
                "Français": "Ce chapitre aborde les concepts essentiels liés aux classes de programmation Dart. Il couvre les meilleures pratiques telles que le maintien de getters et setters concis pour la lisibilité du code, l'évitement de l'utilisation du nouveau mot-clé pour l'instanciation d'objet et l'utilisation de la notation en cascade pour une initialisation efficace des objets. Le chapitre souligne également l'importance des bibliothèques pour l'organisation et la visibilité du code, ainsi que des lignes directrices pour les constructeurs et la surcharge des opérateurs. De plus, il met en évidence l'importance des getters et des setters dans le contrôle de l'accès aux variables de classe afin d'éviter la corruption des données et l'utilisation de la méthode de création de copies complètes d'objets.",
                // Japanese
                "日本語": "この章では、Dart プログラミングにおけるクラスに関連する重要な概念について説明します。コードの可読性を高めるために簡潔なゲッターとセッターを維持すること、オブジェクトのインスタンス化に new キーワードを使用しないこと、効率的なオブジェクト初期化のためにカスケード表記法を利用することなどのベスト プラクティスについて説明します。また、この章では、コードの編成と可視性のためのライブラリの重要性、およびコンストラクタと演算子のオーバーロードに関するガイドラインについても強調します。さらに、クラス変数へのアクセスを制御してデータの破損を防ぐためのゲッターとセッターの重要性、およびオブジェクトのディープ コピーを作成するためのメソッドの使用についても強調します。",
                // Korean
                "한국인": "이 장에서는 Dart 프로그래밍의 클래스와 관련된 필수 개념을 논의합니다. 코드 가독성을 위해 간결한 getter 및 setter 유지, 개체 인스턴스화에 새 키워드 사용 방지, 효율적인 개체 초기화를 위한 계단식 표기법 활용과 같은 모범 사례를 다룹니다. 또한 이 장에서는 생성자 및 연산자 오버로딩에 대한 지침과 함께 코드 구성 및 가시성을 위한 라이브러리의 중요성을 강조합니다. 또한 데이터 손상을 방지하기 위해 클래스 변수에 대한 액세스를 제어하고 객체의 전체 복사본을 생성하는 방법을 사용하는 데 있어서 getter 및 setter의 중요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo analiza conceptos esenciales relacionados con las clases de programación Dart. Cubre las mejores prácticas, como mantener captadores y definidores concisos para la legibilidad del código, evitar el uso de la nueva palabra clave para la creación de instancias de objetos y utilizar notación en cascada para una inicialización eficiente de objetos. El capítulo también enfatiza la importancia de las bibliotecas para la organización y visibilidad del código, junto con pautas para la sobrecarga de constructores y operadores. Además, destaca la importancia de los captadores y definidores para controlar el acceso a las variables de clase para evitar la corrupción de datos y el uso del método para crear copias profundas de objetos.",
                // Hindi
                "हिंदी": "यह अध्याय डार्ट प्रोग्रामिंग में कक्षाओं से संबंधित आवश्यक अवधारणाओं पर चर्चा करता है। इसमें कोड पठनीयता के लिए संक्षिप्त गेटर्स और सेटर्स को बनाए रखने, ऑब्जेक्ट इंस्टेंटिएशन के लिए नए कीवर्ड के उपयोग से बचने और कुशल ऑब्जेक्ट इनिशियलाइज़ेशन के लिए कैस्केड नोटेशन का उपयोग करने जैसी सर्वोत्तम प्रथाओं को शामिल किया गया है। यह अध्याय कोड संगठन और दृश्यता के लिए लाइब्रेरी के महत्व पर भी जोर देता है, साथ ही कंस्ट्रक्टर और ऑपरेटर ओवरलोडिंग के लिए दिशा-निर्देश भी देता है। इसके अतिरिक्त, यह डेटा भ्रष्टाचार को रोकने के लिए क्लास वैरिएबल तक पहुँच को नियंत्रित करने और ऑब्जेक्ट की डीप कॉपी बनाने के लिए विधि के उपयोग में गेटर्स और सेटर्स के महत्व पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo discute conceitos essenciais relacionados com as aulas de programação Dart. Abrange as melhores práticas, como manter getters e setters concisos para facilitar a leitura do código, evitar o uso da palavra-chave new para instanciação de objetos e utilizar notação em cascata para uma inicialização eficiente de objetos. O capítulo também enfatiza a importância das bibliotecas para a organização e visibilidade do código, juntamente com as orientações para os construtores e a sobrecarga dos operadores. Além disso, destaca a importância dos getters e setters no controlo do acesso às variáveis ​​de classe para evitar a corrupção de dados e a utilização do método para criar cópias profundas de objetos.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে ডার্ট প্রোগ্রামিং এর ক্লাস সম্পর্কিত প্রয়োজনীয় ধারণা নিয়ে আলোচনা করা হয়েছে। এটি কোড পঠনযোগ্যতার জন্য সংক্ষিপ্ত গেটার এবং সেটার্স বজায় রাখা, অবজেক্ট ইনস্ট্যান্টেশনের জন্য নতুন কীওয়ার্ডের ব্যবহার এড়ানো এবং দক্ষ অবজেক্ট ইনিশিয়ালাইজেশনের জন্য ক্যাসকেড নোটেশন ব্যবহার করার মতো সেরা অনুশীলনগুলিকে কভার করে। অধ্যায়টি কন্সট্রাক্টর এবং অপারেটর ওভারলোডিংয়ের নির্দেশিকা সহ কোড সংগঠন এবং দৃশ্যমানতার জন্য লাইব্রেরির গুরুত্বের উপর জোর দেয়। উপরন্তু, এটি ডেটা দুর্নীতি প্রতিরোধ করতে এবং অবজেক্টের গভীর অনুলিপি তৈরি করার পদ্ধতির ব্যবহার রোধ করতে ক্লাস ভেরিয়েবলগুলিতে অ্যাক্সেস নিয়ন্ত্রণে গেটার এবং সেটারের তাত্পর্য তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يناقش هذا الفصل المفاهيم الأساسية المتعلقة بالفصول الدراسية في برمجة Dart. ويغطي أفضل الممارسات مثل الحفاظ على الحروف المختصرة والمحددات لسهولة قراءة التعليمات البرمجية، وتجنب استخدام الكلمة الأساسية الجديدة لإنشاء مثيل للكائن، واستخدام التدوين المتتالي لتهيئة الكائن بكفاءة. يؤكد الفصل أيضًا على أهمية المكتبات لتنظيم التعليمات البرمجية ورؤيتها، بالإضافة إلى إرشادات للمنشئين والتحميل الزائد للمشغل. بالإضافة إلى ذلك، فإنه يسلط الضوء على أهمية الحروف والمحددات في التحكم في الوصول إلى متغيرات الفئة لمنع تلف البيانات واستخدام الأسلوب لإنشاء نسخ عميقة من الكائنات.",
                // Persian
                "فارسی": "این فصل مفاهیم اساسی مربوط به کلاس های برنامه نویسی دارت را مورد بحث قرار می دهد. بهترین روش‌ها مانند حفظ گیرنده‌ها و تنظیم‌کننده‌های مختصر برای خوانایی کد، اجتناب از استفاده از کلمه کلیدی جدید برای نمونه‌سازی شی، و استفاده از نشانه‌گذاری آبشاری برای اولیه‌سازی کارآمد شی را پوشش می‌دهد. این فصل همچنین بر اهمیت کتابخانه‌ها برای سازماندهی کد و قابل مشاهده بودن، همراه با دستورالعمل‌هایی برای سازندگان و بارگذاری بیش از حد اپراتورها تأکید می‌کند. به‌علاوه، اهمیت دریافت‌کننده‌ها و تنظیم‌کننده‌ها را در کنترل دسترسی به متغیرهای کلاس برای جلوگیری از خرابی داده‌ها و استفاده از روش برای ایجاد کپی‌های عمیق از اشیاء برجسته می‌کند.",
            },
        },
        // 5
        {
            "ChapterName": "Inheritance and Exceptions",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this Chapter, the focus is on inheritance, exceptions, and advanced concepts in Dart programming. It covers the use of extends for typical OOP inheritance, implements for defining APIs, and mixins for code reuse. Abstract classes are recommended for interfaces to avoid unnecessary empty bodies. The chapter also delves into exception handling, emphasizing the try-catch block and the importance of handling exceptions appropriately. Additionally, extension methods are introduced for adding functionalities to existing classes without altering their structure. Overall, the chapter provides insights into best practices for inheritance, exceptions, and object-oriented programming in Dart.",
                // German
                "Deutsch": "In diesem Kapitel liegt der Schwerpunkt auf Vererbung, Ausnahmen und fortgeschrittenen Konzepten der Dart-Programmierung. Es behandelt die Verwendung von Erweiterungen für typische OOP-Vererbung, Implementierungen zum Definieren von APIs und Mixins für die Wiederverwendung von Code. Abstrakte Klassen werden für Schnittstellen empfohlen, um unnötige leere Körper zu vermeiden. Das Kapitel befasst sich auch mit der Ausnahmebehandlung und betont den Try-Catch-Block und die Bedeutung der angemessenen Behandlung von Ausnahmen. Darüber hinaus werden Erweiterungsmethoden eingeführt, um vorhandenen Klassen Funktionen hinzuzufügen, ohne deren Struktur zu ändern. Insgesamt bietet das Kapitel Einblicke in Best Practices für Vererbung, Ausnahmen und objektorientierte Programmierung in Dart.",
                // Chinese
                "中国人": "本章重点介绍 Dart 编程中的继承、异常和高级概念。它涵盖了使用 extends 进行典型的 OOP 继承、使用 implements 进行定义 API 以及使用 mixin 进行代码重用。建议使用抽象类作为接口，以避免不必要的空体。本章还深入探讨了异常处理，强调了 try-catch 块和适当处理异常的重要性。此外，还介绍了扩展方法，用于在不改变现有类结构的情况下为其添加功能。总体而言，本章深入介绍了 Dart 中继承、异常和面向对象编程的最佳实践。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется наследованию, исключениям и расширенным концепциям программирования на Dart. Он охватывает использование расширений для типичного наследования ООП, реализации для определения API и примесей для повторного использования кода. Для интерфейсов рекомендуется использовать абстрактные классы, чтобы избежать ненужных пустых тел. В главе также подробно рассматривается обработка исключений, в которой особое внимание уделяется блоку try-catch и важности правильной обработки исключений. Кроме того, представлены методы расширения для добавления функциональных возможностей к существующим классам без изменения их структуры. В целом, в главе представлены лучшие практики наследования, исключений и объектно-ориентированного программирования в Dart.",
                // French
                "Français": "Dans ce chapitre, l'accent est mis sur l'héritage, les exceptions et les concepts avancés de la programmation Dart. Il couvre l'utilisation d'extensions pour l'héritage POO typique, les implémentations pour la définition des API et les mixins pour la réutilisation du code. Les classes abstraites sont recommandées pour les interfaces afin d'éviter les corps vides inutiles. Le chapitre aborde également la gestion des exceptions, en mettant l'accent sur le bloc try-catch et l'importance de gérer les exceptions de manière appropriée. De plus, des méthodes d'extension sont introduites pour ajouter des fonctionnalités aux classes existantes sans modifier leur structure. Dans l'ensemble, le chapitre fournit un aperçu des meilleures pratiques en matière d'héritage, d'exceptions et de programmation orientée objet dans Dart.",
                // Japanese
                "日本語": "この章では、継承、例外、および Dart プログラミングの高度な概念に焦点を当てています。一般的な OOP 継承のための extends の使用、API を定義するための implements、およびコード再利用のための mixin について説明します。不要な空の本体を回避するために、インターフェイスには抽象クラスが推奨されます。この章では例外処理についても詳しく説明し、try-catch ブロックと例外を適切に処理することの重要性を強調しています。さらに、既存のクラスの構造を変更せずに機能を追加するための拡張メソッドも紹介します。全体として、この章では Dart での継承、例外、およびオブジェクト指向プログラミングのベスト プラクティスについての洞察を提供します。",
                // Korean
                "한국인": "이 장에서는 Dart 프로그래밍의 상속, 예외 및 고급 개념에 중점을 둡니다. 일반적인 OOP 상속을 위한 확장 사용, API 정의를 위한 구현 및 코드 재사용을 위한 믹스인을 다룹니다. 불필요한 빈 본문을 피하기 위해 인터페이스에는 추상 클래스를 사용하는 것이 좋습니다. 또한 이 장에서는 예외 처리에 대해 자세히 알아보고 try-catch 블록과 예외를 적절하게 처리하는 것의 중요성을 강조합니다. 또한 구조를 변경하지 않고 기존 클래스에 기능을 추가하기 위한 확장 메서드가 도입되었습니다. 전반적으로 이 장에서는 Dart의 상속, 예외 및 객체 지향 프로그래밍에 대한 모범 사례에 대한 통찰력을 제공합니다.",
                // Spanish
                "Español": "En este capítulo, la atención se centra en la herencia, las excepciones y los conceptos avanzados en la programación de Dart. Cubre el uso de extensiones para la herencia típica de programación orientada a objetos, implementos para definir API y mixins para la reutilización de código. Se recomiendan clases abstractas para interfaces para evitar cuerpos vacíos innecesarios. El capítulo también profundiza en el manejo de excepciones, enfatizando el bloque try-catch y la importancia de manejar las excepciones apropiadamente. Además, se introducen métodos de extensión para agregar funcionalidades a clases existentes sin alterar su estructura. En general, el capítulo proporciona información sobre las mejores prácticas para herencia, excepciones y programación orientada a objetos en Dart.",
                // Hindi
                "हिंदी": "इस अध्याय में, डार्ट प्रोग्रामिंग में विरासत, अपवाद और उन्नत अवधारणाओं पर ध्यान केंद्रित किया गया है। यह विशिष्ट OOP विरासत के लिए एक्सटेंड्स के उपयोग, API को परिभाषित करने के लिए कार्यान्वयन और कोड पुन: उपयोग के लिए मिक्सिन को कवर करता है। अनावश्यक खाली निकायों से बचने के लिए इंटरफ़ेस के लिए सार वर्गों की सिफारिश की जाती है। अध्याय अपवाद हैंडलिंग पर भी गहराई से चर्चा करता है, ट्राई-कैच ब्लॉक और अपवादों को उचित तरीके से संभालने के महत्व पर जोर देता है। इसके अतिरिक्त, मौजूदा कक्षाओं में उनकी संरचना में बदलाव किए बिना कार्यक्षमताओं को जोड़ने के लिए एक्सटेंशन विधियों को पेश किया गया है। कुल मिलाकर, अध्याय डार्ट में विरासत, अपवाद और ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग के लिए सर्वोत्तम प्रथाओं में अंतर्दृष्टि प्रदान करता है।",
                // Portuguese
                "Português": "Neste capítulo, o foco está na herança, exceções e conceitos avançados em programação Dart. Abrange a utilização de extensões para herança OOP típica, implementos para definição de APIs e mixins para reutilização de código. As classes abstratas são recomendadas para interfaces para evitar corpos vazios desnecessários. O capítulo aprofunda também o tratamento das exceções, enfatizando o bloco try-catch e a importância de tratar as exceções de forma adequada. Além disso, são introduzidos métodos de extensão para adicionar funcionalidades às classes existentes sem alterar a sua estrutura. No geral, o capítulo fornece informações sobre as melhores práticas para herança, exceções e programação orientada a objetos no Dart.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, ফোকাস উত্তরাধিকার, ব্যতিক্রম, এবং ডার্ট প্রোগ্রামিং এ উন্নত ধারণার উপর। এটি সাধারণ OOP উত্তরাধিকারের জন্য প্রসারিত ব্যবহার, APIs সংজ্ঞায়িত করার জন্য ইমপ্লিমেন্ট এবং কোড পুনঃব্যবহারের জন্য মিক্সিনের ব্যবহার কভার করে। অপ্রয়োজনীয় খালি বডি এড়াতে ইন্টারফেসের জন্য বিমূর্ত ক্লাসের সুপারিশ করা হয়। অধ্যায়টি ব্যতিক্রম হ্যান্ডলিং সম্পর্কেও আলোচনা করে, ট্রাই-ক্যাচ ব্লক এবং ব্যতিক্রমগুলি যথাযথভাবে পরিচালনা করার গুরুত্বের উপর জোর দেয়। অতিরিক্তভাবে, তাদের কাঠামো পরিবর্তন না করে বিদ্যমান ক্লাসে কার্যকারিতা যোগ করার জন্য এক্সটেনশন পদ্ধতি চালু করা হয়। সামগ্রিকভাবে, অধ্যায়টি ডার্টে উত্তরাধিকার, ব্যতিক্রম এবং অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের জন্য সর্বোত্তম অনুশীলনের অন্তর্দৃষ্টি প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "ينصب التركيز في هذا الفصل على الوراثة والاستثناءات والمفاهيم المتقدمة في برمجة Dart. ويغطي استخدام الامتدادات لميراث OOP النموذجي، وتطبيقات تعريف واجهات برمجة التطبيقات، والخلطات لإعادة استخدام التعليمات البرمجية. يوصى باستخدام الفئات المجردة للواجهات لتجنب الأجسام الفارغة غير الضرورية. يتعمق الفصل أيضًا في معالجة الاستثناءات، مع التركيز على كتلة محاولة الالتقاط وأهمية التعامل مع الاستثناءات بشكل مناسب. بالإضافة إلى ذلك، تم تقديم طرق التمديد لإضافة وظائف إلى الفئات الموجودة دون تغيير بنيتها. بشكل عام، يقدم الفصل نظرة ثاقبة حول أفضل الممارسات المتعلقة بالميراث والاستثناءات والبرمجة الموجهة للكائنات في Dart.",
                // Persian
                "فارسی": "در این فصل، تمرکز بر وراثت، استثناها و مفاهیم پیشرفته در برنامه نویسی دارت است. این شامل استفاده از گسترش برای وراثت OOP معمولی، پیاده‌سازی برای تعریف APIها و میکس‌ها برای استفاده مجدد از کد می‌شود. کلاس‌های انتزاعی برای رابط‌ها توصیه می‌شوند تا از بدنه‌های خالی غیرضروری جلوگیری کنند. این فصل همچنین به مدیریت استثنا می پردازد و بر بلوک try-catch و اهمیت رسیدگی به استثناها به طور مناسب تأکید می کند. علاوه بر این، روش‌های توسعه برای افزودن قابلیت‌ها به کلاس‌های موجود بدون تغییر ساختار آنها معرفی شده‌اند. به طور کلی، این فصل بینش هایی در مورد بهترین شیوه ها برای وراثت، استثناها و برنامه نویسی شی گرا در دارت ارائه می دهد.",
            },
        },
        // 6
        {
            "ChapterName": "Generics and Collections",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on Generics and Collections in Dart emphasizes the importance of parameterized programming for type safety and code reusability. It introduces generic types like List and Set for efficient data handling, with methods such as add(), remove(), and spread operator for arrays. Good practices include using literal initialization, avoiding unnecessary casts, and overriding equality operators for proper comparisons. Transform methods like where(), map(), reduce(), and fold() are highlighted for streamlined data processing in collections, promoting efficient and type-safe coding practices in Dart programming.",
                // German
                "Deutsch": "Das Kapitel über Generika und Sammlungen in Dart betont die Bedeutung der parametrisierten Programmierung für Typsicherheit und Wiederverwendbarkeit von Code. Es führt generische Typen wie List und Set für eine effiziente Datenverarbeitung ein, mit Methoden wie add(), remove() und dem Spread-Operator für Arrays. Zu den bewährten Vorgehensweisen gehören die Verwendung der wörtlichen Initialisierung, das Vermeiden unnötiger Casts und das Überschreiben von Gleichheitsoperatoren für ordnungsgemäße Vergleiche. Transform-Methoden wie where(), map(), reduce() und fold() werden für eine optimierte Datenverarbeitung in Sammlungen hervorgehoben und fördern effiziente und typsichere Codierungspraktiken in der Dart-Programmierung.",
                // Chinese
                "中国人": "Dart 中的泛型和集合章节强调了参数化编程对于类型安全性和代码可重用性的重要性。它介绍了 List 和 Set 等泛型类型，以实现高效的数据处理，以及 add()、remove() 和数组扩展运算符等方法。良好做法包括使用文字初始化、避免不必要的强制类型转换以及重写相等运算符以进行正确的比较。重点介绍了 where()、map()、reduce() 和 fold() 等转换方法，以简化集合中的数据处理，促进 Dart 编程中高效且类型安全的编码实践。",
                // Russian
                "Русский": "В главе «Обобщенные шаблоны и коллекции в Dart» подчеркивается важность параметризованного программирования для обеспечения безопасности типов и возможности повторного использования кода. В нем представлены общие типы, такие как List и Set, для эффективной обработки данных, а также такие методы, как add(), Remove() и оператор расширения для массивов. Хорошие практики включают в себя использование буквальной инициализации, отказ от ненужного приведения и переопределение операторов равенства для правильного сравнения. Методы преобразования, такие какwhere(),map(),reduce() иfold(), выделены для упрощения обработки данных в коллекциях, что способствует эффективному и типобезопасному кодированию в Dart-программировании.",
                // French
                "Français": "Le chapitre sur les génériques et les collections dans Dart souligne l'importance de la programmation paramétrée pour la sécurité des types et la réutilisabilité du code. Il introduit des types génériques tels que List et Set pour une gestion efficace des données, avec des méthodes telles que add(), remove() et l'opérateur spread pour les tableaux. Les bonnes pratiques incluent l'utilisation de l'initialisation littérale, l'évitement des conversions inutiles et le remplacement des opérateurs d'égalité pour des comparaisons appropriées. Les méthodes de transformation telles que Where(), Map(), Reduction() et Fold() sont mises en avant pour rationaliser le traitement des données dans les collections, promouvant ainsi des pratiques de codage efficaces et sûres dans la programmation Dart.",
                // Japanese
                "日本語": "Dart のジェネリックとコレクションに関する章では、型の安全性とコードの再利用性のために、パラメータ化されたプログラミングの重要性を強調しています。効率的なデータ処理のために、List や Set などのジェネリック型と、配列の add()、remove()、スプレッド演算子などのメソッドを紹介します。リテラル初期化の使用、不要なキャストの回避、適切な比較のための等価演算子のオーバーライドなどの優れたプラクティスがあります。where()、map()、reduce()、fold() などの変換メソッドは、コレクション内のデータ処理を合理化するために強調されており、Dart プログラミングにおける効率的で型安全なコーディング プラクティスを促進します。",
                // Korean
                "한국인": "Dart의 제네릭 및 컬렉션에 관한 장에서는 유형 안전성과 코드 재사용성을 위한 매개변수화된 프로그래밍의 중요성을 강조합니다. 효율적인 데이터 처리를 위해 List 및 Set과 같은 일반 유형을 도입하고 add(), 제거() 및 배열용 스프레드 연산자와 같은 메소드를 사용합니다. 모범 사례에는 리터럴 초기화 사용, 불필요한 캐스트 방지, 적절한 비교를 위한 같음 연산자 재정의 등이 포함됩니다. where(), map(), Reduce() 및fold()와 같은 변환 메소드는 컬렉션의 간소화된 데이터 처리를 위해 강조되어 Dart 프로그래밍에서 효율적이고 유형이 안전한 코딩 방법을 촉진합니다.",
                // Spanish
                "Español": "El capítulo sobre Genéricos y Colecciones en Dart enfatiza la importancia de la programación parametrizada para la seguridad de tipos y la reutilización del código. Introduce tipos genéricos como List y Set para un manejo eficiente de datos, con métodos como add(), remove() y operador de extensión para matrices. Las buenas prácticas incluyen el uso de inicialización literal, evitar conversiones innecesarias y anular operadores de igualdad para realizar comparaciones adecuadas. Los métodos de transformación como where(), map(), reduce() y fold() se destacan para optimizar el procesamiento de datos en las colecciones, promoviendo prácticas de codificación eficientes y con seguridad de tipos en la programación de Dart.",
                // Hindi
                "हिंदी": "डार्ट में जेनरिक और संग्रह पर अध्याय प्रकार सुरक्षा और कोड पुन: प्रयोज्यता के लिए पैरामीटरयुक्त प्रोग्रामिंग के महत्व पर जोर देता है। यह कुशल डेटा हैंडलिंग के लिए लिस्ट और सेट जैसे जेनेरिक प्रकारों का परिचय देता है, जिसमें add(), remove(), और सरणियों के लिए स्प्रेड ऑपरेटर जैसी विधियाँ शामिल हैं। अच्छे अभ्यासों में शाब्दिक आरंभीकरण का उपयोग करना, अनावश्यक कास्ट से बचना और उचित तुलना के लिए समानता ऑपरेटरों को ओवरराइड करना शामिल है। संग्रह में सुव्यवस्थित डेटा प्रोसेसिंग के लिए where(), map(), reduce(), और fold() जैसे ट्रांसफ़ॉर्म विधियों को हाइलाइट किया गया है, जो डार्ट प्रोग्रामिंग में कुशल और प्रकार-सुरक्षित कोडिंग प्रथाओं को बढ़ावा देता है।",
                // Portuguese
                "Português": "O capítulo sobre Genéricos e Colecções no Dart enfatiza a importância da programação parametrizada para a segurança de tipos e reutilização de código. Apresenta tipos genéricos como List e Set para uma manipulação eficiente de dados, com métodos como add(), remove() e operador spread para arrays. As boas práticas incluem o uso de inicialização literal, evitando conversões desnecessárias e substituindo operadores de igualdade para comparações adequadas. Os métodos de transformação como where(), map(), reduce() e fold() são destacados para o processamento simplificado de dados em coleções, promovendo práticas de codificação eficientes e de tipo seguro na programação Dart.",
                // Bengali
                "বাংলা": "ডার্টে জেনেরিকস এবং কালেকশনের অধ্যায় টাইপ নিরাপত্তা এবং কোড পুনঃব্যবহারযোগ্যতার জন্য প্যারামিটারাইজড প্রোগ্রামিংয়ের গুরুত্বের উপর জোর দেয়। এটি অ্যারের জন্য অ্যাড(), রিমুভ(), এবং স্প্রেড অপারেটরের মতো পদ্ধতি সহ দক্ষ ডেটা পরিচালনার জন্য তালিকা এবং সেটের মতো জেনেরিক প্রকারের পরিচয় দেয়। ভাল অভ্যাসগুলির মধ্যে রয়েছে আক্ষরিক প্রারম্ভিকতা ব্যবহার করা, অপ্রয়োজনীয় কাস্ট এড়ানো এবং যথাযথ তুলনার জন্য সমতা অপারেটরদের অগ্রাহ্য করা। ডার্ট প্রোগ্রামিং-এ দক্ষ এবং টাইপ-নিরাপদ কোডিং অনুশীলনের প্রচার, সংগ্রহে সুবিন্যস্ত ডেটা প্রক্রিয়াকরণের জন্য where(), map(), reduce(), এবং fold() এর মত রূপান্তর পদ্ধতিগুলি হাইলাইট করা হয়েছে।",
                // Arabic
                "عَرَبِيّ": "يؤكد الفصل الخاص بالأدوية العامة والمجموعات في Dart على أهمية البرمجة ذات المعلمات لسلامة النوع وإمكانية إعادة استخدام التعليمات البرمجية. يقدم أنواعًا عامة مثل List وSet لمعالجة البيانات بكفاءة، باستخدام أساليب مثل add() وremove() وعامل الانتشار للمصفوفات. تتضمن الممارسات الجيدة استخدام التهيئة الحرفية، وتجنب عمليات التحويل غير الضرورية، وتجاوز عوامل المساواة لإجراء مقارنات مناسبة. يتم تمييز طرق التحويل مثل Where() وmap() وreduce() وfold() لمعالجة البيانات المبسطة في المجموعات، وتعزيز ممارسات الترميز الفعالة والآمنة للنوع في برمجة Dart.",
                // Persian
                "فارسی": "فصل Generics و Collections در Dart بر اهمیت برنامه ریزی پارامتری برای ایمنی نوع و قابلیت استفاده مجدد کد تأکید می کند. انواع عمومی مانند List و Set را برای مدیریت کارآمد داده ها با روش هایی مانند add()، remove() و spread operator برای آرایه ها معرفی می کند. شیوه های خوب شامل استفاده از مقداردهی اولیه تحت اللفظی، اجتناب از ریخته گری های غیر ضروری، و نادیده گرفتن عملگرهای برابری برای مقایسه های مناسب است. روش‌های تبدیل مانند Where()، map()، reduce() و fold() برای پردازش ساده داده‌ها در مجموعه‌ها برجسته می‌شوند و شیوه‌های کدگذاری کارآمد و ایمن در برنامه‌نویسی دارت را ترویج می‌کنند.",
            },
        },
        // 7
        {
            "ChapterName": "Asynchronous programming",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter, delves into the realm of asynchronous programming in Dart, emphasizing the use of Futures and Streams for non-blocking operations. It introduces async/await as a more concise alternative to then() callbacks, enhancing code readability. The concept of isolates is explored for parallel computation, highlighting the absence of shared memory in Dart isolates. Additionally, StreamController is presented as a valuable tool for managing streams efficiently in Flutter applications. The chapter underscores the significance of asynchronous programming for maintaining app responsiveness and offers best practices such as favoring async/await over raw futures for improved code clarity.",
                // German
                "Deutsch": "Dieses Kapitel befasst sich mit dem Bereich der asynchronen Programmierung in Dart und betont die Verwendung von Futures und Streams für nicht blockierende Vorgänge. Es führt async/await als prägnantere Alternative zu then()-Rückrufen ein und verbessert so die Lesbarkeit des Codes. Das Konzept der Isolates wird für parallele Berechnungen untersucht und das Fehlen von gemeinsam genutztem Speicher in Dart-Isolates hervorgehoben. Darüber hinaus wird StreamController als wertvolles Tool zur effizienten Verwaltung von Streams in Flutter-Anwendungen vorgestellt. Das Kapitel unterstreicht die Bedeutung der asynchronen Programmierung für die Aufrechterhaltung der Reaktionsfähigkeit von Apps und bietet Best Practices wie die Bevorzugung von async/await gegenüber Raw Futures für eine verbesserte Codeübersichtlichkeit.",
                // Chinese
                "中国人": "本章深入探讨了 Dart 中的异步编程领域，强调了使用 Futures 和 Streams 进行非阻塞操作。它引入了 async/await 作为 then() 回调的更简洁替代方案，从而增强了代码的可读性。探索了隔离的概念以进行并行计算，强调了 Dart 隔离中没有共享内存。此外，StreamController 被介绍为在 Flutter 应用程序中有效管理流的宝贵工具。本章强调了异步编程对于保持应用程序响应能力的重要性，并提供了最佳实践，例如优先使用 async/await 而不是原始 Futures 以提高代码清晰度。",
                // Russian
                "Русский": "Эта глава углубляется в область асинхронного программирования в Dart, уделяя особое внимание использованию Futures и Streams для неблокирующих операций. Он представляет async/await как более краткую альтернативу обратным вызовам then(), улучшая читаемость кода. Концепция изолятов исследуется для параллельных вычислений, подчеркивая отсутствие общей памяти в изолятах Dart. Кроме того, StreamController представлен как ценный инструмент для эффективного управления потоками в приложениях Flutter. В этой главе подчеркивается важность асинхронного программирования для обеспечения оперативности приложений и предлагаются лучшие практики, такие как предпочтение async/await перед необработанными фьючерсами для повышения ясности кода.",
                // French
                "Français": "Ce chapitre explore le domaine de la programmation asynchrone dans Dart, en mettant l'accent sur l'utilisation de Futures et Streams pour les opérations non bloquantes. Il introduit async/await comme une alternative plus concise aux rappels then(), améliorant ainsi la lisibilité du code. Le concept d'isolats est exploré pour le calcul parallèle, mettant en évidence l'absence de mémoire partagée dans les isolats Dart. De plus, StreamController est présenté comme un outil précieux pour gérer efficacement les flux dans les applications Flutter. Le chapitre souligne l'importance de la programmation asynchrone pour maintenir la réactivité des applications et propose de bonnes pratiques telles que privilégier l'asynchrone/l'attente par rapport aux futurs bruts pour une meilleure clarté du code.",
                // Japanese
                "日本語": "この章では、Dart の非同期プログラミングの領域を掘り下げ、非ブロッキング操作のための Future と Stream の使用に重点を置いています。then() コールバックのより簡潔な代替手段として async/await を導入し、コードの可読性を高めます。並列計算のための isolate の概念を探求し、Dart isolate には共有メモリがないことを強調します。さらに、StreamController は、Flutter アプリケーションでストリームを効率的に管理するための貴重なツールとして紹介されています。この章では、アプリの応答性を維持するための非同期プログラミングの重要性を強調し、コードの明瞭性を向上させるために raw future よりも async/await を優先するなどのベスト プラクティスを紹介します。",
                // Korean
                "한국인": "이 장에서는 비차단 작업을 위한 Future와 Stream의 사용을 강조하면서 Dart의 비동기 프로그래밍 영역을 자세히 살펴봅니다. then() 콜백에 대한 보다 간결한 대안으로 async/await를 도입하여 코드 가독성을 높였습니다. 병렬 계산을 위해 격리의 개념을 탐구하여 Dart 격리에서 공유 메모리가 없음을 강조합니다. 또한 StreamController는 Flutter 애플리케이션에서 스트림을 효율적으로 관리하기 위한 귀중한 도구로 제공됩니다. 이 장에서는 앱 응답성을 유지하기 위한 비동기 프로그래밍의 중요성을 강조하고 향상된 코드 명확성을 위해 원시 future보다 async/await를 선호하는 등의 모범 사례를 제공합니다.",
                // Spanish
                "Español": "Este capítulo profundiza en el ámbito de la programación asincrónica en Dart, enfatizando el uso de Futures y Streams para operaciones sin bloqueo. Introduce async/await como una alternativa más concisa a las devoluciones de llamada then(), mejorando la legibilidad del código. Se explora el concepto de aislados para el cálculo paralelo, destacando la ausencia de memoria compartida en los aislados de Dart. Además, StreamController se presenta como una herramienta valiosa para gestionar transmisiones de manera eficiente en aplicaciones Flutter. El capítulo subraya la importancia de la programación asincrónica para mantener la capacidad de respuesta de la aplicación y ofrece mejores prácticas, como favorecer async/await sobre futuros sin procesar para mejorar la claridad del código.",
                // Hindi
                "हिंदी": "यह अध्याय, डार्ट में एसिंक्रोनस प्रोग्रामिंग के क्षेत्र में गहराई से जाता है, नॉन-ब्लॉकिंग ऑपरेशन के लिए फ्यूचर्स और स्ट्रीम्स के उपयोग पर जोर देता है। यह then() कॉलबैक के लिए अधिक संक्षिप्त विकल्प के रूप में async/await को पेश करता है, जो कोड पठनीयता को बढ़ाता है। समानांतर गणना के लिए आइसोलेट्स की अवधारणा का पता लगाया जाता है, जो डार्ट आइसोलेट्स में साझा मेमोरी की अनुपस्थिति को उजागर करता है। इसके अतिरिक्त, स्ट्रीमकंट्रोलर को फ़्लटर अनुप्रयोगों में स्ट्रीम को कुशलतापूर्वक प्रबंधित करने के लिए एक मूल्यवान उपकरण के रूप में प्रस्तुत किया जाता है। यह अध्याय ऐप की प्रतिक्रियाशीलता बनाए रखने के लिए एसिंक्रोनस प्रोग्रामिंग के महत्व को रेखांकित करता है और बेहतर कोड स्पष्टता के लिए रॉ फ्यूचर्स पर async/await को तरजीह देने जैसे सर्वोत्तम अभ्यास प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo aprofunda o domínio da programação assíncrona no Dart, enfatizando a utilização de Futures e Streams para operações sem bloqueio. Apresenta o async/await como uma alternativa mais concisa aos callbacks then(), melhorando a legibilidade do código. O conceito de isolados é explorado para computação paralela, destacando-se a ausência de memória partilhada nos isolados Dart. Além disso, o StreamController é apresentado como uma ferramenta valiosa para gerir fluxos de forma eficiente em aplicações Flutter. O capítulo sublinha a importância da programação assíncrona para manter a capacidade de resposta da aplicação e oferece práticas recomendadas, como favorecer o async/await em vez de futuros brutos para melhorar a clareza do código.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি, ডার্ট-এ অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং-এর ক্ষেত্র নিয়ে আলোচনা করে, নন-ব্লকিং ক্রিয়াকলাপগুলির জন্য ফিউচার এবং স্ট্রিমগুলির ব্যবহারের উপর জোর দেয়। এটি কোড পঠনযোগ্যতা বৃদ্ধি করে তারপর() কলব্যাকের আরও সংক্ষিপ্ত বিকল্প হিসাবে async/await প্রবর্তন করে। আইসোলেটের ধারণাটি সমান্তরাল গণনার জন্য অন্বেষণ করা হয়, ডার্ট আইসোলেটে ভাগ করা মেমরির অনুপস্থিতিকে হাইলাইট করে। উপরন্তু, স্ট্রিমকন্ট্রোলারকে ফ্লাটার অ্যাপ্লিকেশনগুলিতে দক্ষতার সাথে স্ট্রিমগুলি পরিচালনা করার জন্য একটি মূল্যবান হাতিয়ার হিসাবে উপস্থাপন করা হয়েছে। অধ্যায়টি অ্যাপের প্রতিক্রিয়াশীলতা বজায় রাখার জন্য অ্যাসিঙ্ক্রোনাস প্রোগ্রামিংয়ের তাত্পর্যকে আন্ডারস্কোর করে এবং উন্নত কোড স্বচ্ছতার জন্য অসিঙ্ক/অপেক্ষা করার মতো সেরা অনুশীলনগুলি অফার করে।",
                // Arabic
                "عَرَبِيّ": "يتعمق هذا الفصل في عالم البرمجة غير المتزامنة في Dart، مع التركيز على استخدام العقود الآجلة والتدفقات للعمليات غير المحظورة. يقدم async/await كبديل أكثر إيجازًا لردود الاتصالthen()، مما يعزز إمكانية قراءة التعليمات البرمجية. يتم استكشاف مفهوم العزلات للحساب المتوازي، وتسليط الضوء على غياب الذاكرة المشتركة في عزلات دارت. بالإضافة إلى ذلك، يتم تقديم StreamController كأداة قيمة لإدارة التدفقات بكفاءة في تطبيقات Flutter. يؤكد الفصل على أهمية البرمجة غير المتزامنة للحفاظ على استجابة التطبيق ويقدم أفضل الممارسات مثل تفضيل المزامنة/الانتظار على العقود الآجلة الأولية لتحسين وضوح التعليمات البرمجية.",
                // Persian
                "فارسی": "این فصل به قلمرو برنامه‌نویسی ناهمزمان در دارت می‌پردازد و بر استفاده از Futures و Streams برای عملیات غیرمسدود تأکید می‌کند. این برنامه async/await را به عنوان یک جایگزین مختصرتر برای callbacks های then() معرفی می کند و خوانایی کد را افزایش می دهد. مفهوم ایزوله برای محاسبات موازی مورد بررسی قرار می گیرد و عدم وجود حافظه مشترک در ایزوله های دارت را برجسته می کند. علاوه بر این، StreamController به عنوان یک ابزار ارزشمند برای مدیریت کارآمد جریان ها در برنامه های Flutter ارائه شده است. این فصل بر اهمیت برنامه‌نویسی ناهمزمان برای حفظ پاسخگویی برنامه تأکید می‌کند و بهترین روش‌ها مانند ترجیح async/wait را نسبت به آینده‌های خام برای وضوح بهتر کد ارائه می‌دهد.",
            },
        },
        // 8
        {
            "ChapterName": "Coding principles with Dart",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter delves into coding principles with Dart, focusing on SOLID principles like SRP, OCP, LSP, ISP, and DIP. It emphasizes the importance of depending on abstractions rather than implementations for flexible and maintainable code. The discussion includes examples illustrating the application of these principles in Dart programming, highlighting the benefits of structuring code to adhere to these principles. Additionally, it touches on the concept of dependency injection and the advantages it offers in terms of decoupling components and improving code maintainability.",
                // German
                "Deutsch": "Das Kapitel befasst sich eingehend mit den Codierprinzipien von Dart und konzentriert sich dabei auf SOLID-Prinzipien wie SRP, OCP, LSP, ISP und DIP. Es betont, wie wichtig es ist, sich für flexiblen und wartbaren Code auf Abstraktionen statt auf Implementierungen zu verlassen. Die Diskussion umfasst Beispiele, die die Anwendung dieser Prinzipien in der Dart-Programmierung veranschaulichen und die Vorteile einer Strukturierung des Codes zur Einhaltung dieser Prinzipien hervorheben. Darüber hinaus wird auf das Konzept der Abhängigkeitsinjektion und die Vorteile eingegangen, die es hinsichtlich der Entkopplung von Komponenten und der Verbesserung der Wartbarkeit des Codes bietet.",
                // Chinese
                "中国人": "本章深入探讨了 Dart 的编码原则，重点关注 SRP、OCP、LSP、ISP 和 DIP 等 SOLID 原则。它强调了依赖抽象而不是实现来获得灵活且可维护的代码的重要性。讨论包括说明这些原则在 Dart 编程中的应用的示例，强调了构建代码以遵守这些原则的好处。此外，它还涉及依赖注入的概念及其在解耦组件和提高代码可维护性方面提供的优势。",
                // Russian
                "Русский": "В главе подробно рассматриваются принципы кодирования с помощью Dart, уделяя особое внимание принципам SOLID, таким как SRP, OCP, LSP, ISP и DIP. Он подчеркивает важность зависимости от абстракций, а не от реализации гибкого и удобного в сопровождении кода. В обсуждение включены примеры, иллюстрирующие применение этих принципов в программировании на Dart, подчеркивающие преимущества структурирования кода для соблюдения этих принципов. Кроме того, он затрагивает концепцию внедрения зависимостей и преимущества, которые она предлагает с точки зрения разделения компонентов и улучшения удобства сопровождения кода.",
                // French
                "Français": "Le chapitre aborde les principes de codage avec Dart, en se concentrant sur les principes SOLID tels que SRP, OCP, LSP, ISP et DIP. Il souligne l’importance de dépendre des abstractions plutôt que des implémentations pour un code flexible et maintenable. La discussion comprend des exemples illustrant l'application de ces principes dans la programmation Dart, soulignant les avantages de structurer le code pour adhérer à ces principes. De plus, il aborde le concept d'injection de dépendances et les avantages qu'elle offre en termes de découplage des composants et d'amélioration de la maintenabilité du code.",
                // Japanese
                "日本語": "この章では、SRP、OCP、LSP、ISP、DIP などの SOLID 原則に焦点を当て、Dart でのコーディング原則について詳しく説明します。柔軟で保守可能なコードのために、実装ではなく抽象化に依存することの重要性を強調します。この説明には、これらの原則を Dart プログラミングに適用する例が含まれており、これらの原則に準拠するようにコードを構造化する利点が強調されています。さらに、依存性注入の概念と、コンポーネントの分離とコードの保守性の向上に関して依存性注入がもたらす利点についても触れています。",
                // Korean
                "한국인": "이 장에서는 SRP, OCP, LSP, ISP 및 DIP와 같은 SOLID 원칙에 중점을 두고 Dart의 코딩 원칙을 탐구합니다. 유연하고 유지 관리 가능한 코드를 구현하기보다는 추상화에 의존하는 것이 중요하다는 점을 강조합니다. 토론에는 Dart 프로그래밍에서 이러한 원칙을 적용하는 방법을 설명하는 예제가 포함되어 있으며 이러한 원칙을 준수하도록 코드를 구성하는 것의 이점을 강조합니다. 또한 종속성 주입의 개념과 구성 요소 분리 및 코드 유지 관리 향상 측면에서 제공되는 이점에 대해 설명합니다.",
                // Spanish
                "Español": "El capítulo profundiza en los principios de codificación con Dart, centrándose en principios SOLID como SRP, OCP, LSP, ISP y DIP. Enfatiza la importancia de depender de abstracciones en lugar de implementaciones para obtener un código flexible y mantenible. La discusión incluye ejemplos que ilustran la aplicación de estos principios en la programación de Dart, destacando los beneficios de estructurar el código para adherirse a estos principios. Además, aborda el concepto de inyección de dependencia y las ventajas que ofrece en términos de desacoplar componentes y mejorar la mantenibilidad del código.",
                // Hindi
                "हिंदी": "यह अध्याय डार्ट के साथ कोडिंग सिद्धांतों पर गहराई से चर्चा करता है, जिसमें SRP, OCP, LSP, ISP और DIP जैसे SOLID सिद्धांतों पर ध्यान केंद्रित किया गया है। यह लचीले और रखरखाव योग्य कोड के लिए कार्यान्वयन के बजाय अमूर्तता पर निर्भर होने के महत्व पर जोर देता है। चर्चा में डार्ट प्रोग्रामिंग में इन सिद्धांतों के अनुप्रयोग को दर्शाने वाले उदाहरण शामिल हैं, जो इन सिद्धांतों का पालन करने के लिए कोड को संरचित करने के लाभों पर प्रकाश डालते हैं। इसके अतिरिक्त, यह निर्भरता इंजेक्शन की अवधारणा और घटकों को अलग करने और कोड रखरखाव में सुधार के संदर्भ में इसके द्वारा प्रदान किए जाने वाले लाभों को छूता है।",
                // Portuguese
                "Português": "O capítulo aprofunda os princípios de codificação com Dart, com foco nos princípios SOLID como SRP, OCP, LSP, ISP e DIP. Realça a importância de depender de abstrações em vez de implementações para obter código flexível e de fácil manutenção. A discussão inclui exemplos que ilustram a aplicação destes princípios na programação Dart, destacando os benefícios da estruturação do código para aderir a estes princípios. Além disso, aborda o conceito de injeção de dependências e as vantagens que oferece em termos de desacoplamento de componentes e melhoria da capacidade de manutenção do código.",
                // Bengali
                "বাংলা": "অধ্যায়টি SRP, OCP, LSP, ISP, এবং DIP-এর মতো সলিড নীতিগুলির উপর ফোকাস করে, ডার্টের সাথে কোডিং নীতিগুলি নিয়ে আলোচনা করে৷ এটি নমনীয় এবং রক্ষণাবেক্ষণযোগ্য কোডের জন্য বাস্তবায়নের পরিবর্তে বিমূর্তকরণের উপর নির্ভর করার গুরুত্বের উপর জোর দেয়। আলোচনায় ডার্ট প্রোগ্রামিং-এ এই নীতিগুলির প্রয়োগের উদাহরণ, এই নীতিগুলি মেনে চলার জন্য স্ট্রাকচারিং কোডের সুবিধাগুলি তুলে ধরার উদাহরণ রয়েছে৷ অতিরিক্তভাবে, এটি নির্ভরতা ইনজেকশনের ধারণাকে স্পর্শ করে এবং উপাদানগুলি ডিকপলিং এবং কোড রক্ষণাবেক্ষণের উন্নতির ক্ষেত্রে এটি যে সুবিধাগুলি অফার করে।",
                // Arabic
                "عَرَبِيّ": "يتعمق الفصل في مبادئ البرمجة باستخدام Dart، مع التركيز على مبادئ SOLID مثل SRP وOCP وLSP وISP وDIP. ويؤكد على أهمية الاعتماد على التجريدات بدلاً من التطبيقات من أجل تعليمات برمجية مرنة وقابلة للصيانة. تتضمن المناقشة أمثلة توضح تطبيق هذه المبادئ في برمجة Dart، مع تسليط الضوء على فوائد هيكلة التعليمات البرمجية للالتزام بهذه المبادئ. بالإضافة إلى ذلك، فإنه يتطرق إلى مفهوم حقن التبعية والمزايا التي يقدمها من حيث فصل المكونات وتحسين إمكانية صيانة التعليمات البرمجية.",
                // Persian
                "فارسی": "این فصل به اصول کدنویسی با Dart می پردازد و بر اصول SOLID مانند SRP، OCP، LSP، ISP و DIP تمرکز می کند. این بر اهمیت وابستگی به انتزاعات به جای پیاده سازی برای کد انعطاف پذیر و قابل نگهداری تأکید می کند. این بحث شامل مثال‌هایی است که کاربرد این اصول را در برنامه‌نویسی دارت نشان می‌دهد و مزایای ساختاردهی کد برای پایبندی به این اصول را برجسته می‌کند. علاوه بر این، مفهوم تزریق وابستگی و مزایایی را که از نظر جداسازی اجزا و بهبود قابلیت نگهداری کد ارائه می دهد، لمس می کند.",
            },
        },
        // 9
        {
            "ChapterName": "Basics of Flutter",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter covers essential concepts such as the structure of Flutter layers, efficient widget updates, font handling with the package, the distinction between and , the importance of keys for widget identification, and development tips like using constants, linter rules, and hot reload for streamlined app development. Understanding these fundamentals is crucial for building effective and optimized Flutter applications.",
                // German
                "Deutsch": "Dieses Kapitel behandelt wichtige Konzepte wie die Struktur von Flutter-Ebenen, effiziente Widget-Updates, die Handhabung von Schriftarten mit dem Paket, den Unterschied zwischen und , die Bedeutung von Schlüsseln für die Widget-Identifizierung und Entwicklungstipps wie die Verwendung von Konstanten, Linter-Regeln und Hot Reload für eine optimierte App-Entwicklung. Das Verständnis dieser Grundlagen ist entscheidend für die Erstellung effektiver und optimierter Flutter-Anwendungen.",
                // Chinese
                "中国人": "本章涵盖了基本概念，例如 Flutter 层的结构、高效的小部件更新、使用软件包的字体处理、和 之间的区别、键对于小部件识别的重要性，以及开发技巧，例如使用常量、linter 规则和热重载来简化应用程序开发。了解这些基础知识对于构建有效且优化的 Flutter 应用程序至关重要。",
                // Russian
                "Русский": "В этой главе рассматриваются основные понятия, такие как структура слоев Flutter, эффективные обновления виджетов, обработка шрифтов в пакете, различие между и , важность ключей для идентификации виджетов, а также советы по разработке, такие как использование констант, правил линтера и горячая перезагрузка для оптимизированная разработка приложений. Понимание этих основ имеет решающее значение для создания эффективных и оптимизированных приложений Flutter.",
                // French
                "Français": "Ce chapitre couvre des concepts essentiels tels que la structure des couches Flutter, les mises à jour efficaces des widgets, la gestion des polices avec le package, la distinction entre et , l'importance des clés pour l'identification des widgets et des conseils de développement tels que l'utilisation de constantes, de règles linter et de rechargement à chaud pour développement d'applications rationalisé. Comprendre ces principes fondamentaux est crucial pour créer des applications Flutter efficaces et optimisées.",
                // Japanese
                "日本語": "この章では、Flutter レイヤーの構造、効率的なウィジェットの更新、パッケージでのフォント処理、との違い、ウィジェット識別のためのキーの重要性、定数、リンター ルール、ホット リロードの使用など、効率的なアプリ開発のための開発のヒントなど、重要な概念について説明します。これらの基礎を理解することは、効果的で最適化された Flutter アプリケーションを構築するために不可欠です。",
                // Korean
                "한국인": "이 장에서는 Flutter 레이어의 구조, 효율적인 위젯 업데이트, 패키지를 사용한 글꼴 처리, 및 의 구별, 위젯 식별을 위한 키의 중요성, 상수, 린터 규칙 및 핫 리로드 사용과 같은 개발 팁과 같은 필수 개념을 다룹니다. 간소화된 앱 개발. 효과적이고 최적화된 Flutter 애플리케이션을 구축하려면 이러한 기본 사항을 이해하는 것이 중요합니다.",
                // Spanish
                "Español": "Este capítulo cubre conceptos esenciales como la estructura de las capas de Flutter, actualizaciones eficientes de widgets, manejo de fuentes con el paquete, la distinción entre y, la importancia de las claves para la identificación de widgets y consejos de desarrollo como el uso de constantes, reglas de linter y recarga en caliente para desarrollo de aplicaciones optimizado. Comprender estos fundamentos es crucial para crear aplicaciones Flutter efectivas y optimizadas.",
                // Hindi
                "हिंदी": "इस अध्याय में फ़्लटर परतों की संरचना, कुशल विजेट अपडेट, पैकेज के साथ फ़ॉन्ट हैंडलिंग, और के बीच अंतर, विजेट पहचान के लिए कुंजियों का महत्व और सुव्यवस्थित ऐप विकास के लिए स्थिरांक, लिंटर नियम और हॉट रीलोड का उपयोग करने जैसी विकास युक्तियाँ जैसी आवश्यक अवधारणाएँ शामिल हैं। प्रभावी और अनुकूलित फ़्लटर एप्लिकेशन बनाने के लिए इन मूलभूत बातों को समझना महत्वपूर्ण है।",
                // Portuguese
                "Português": "Este capítulo aborda conceitos essenciais como a estrutura das camadas Flutter, atualizações eficientes de widgets, manipulação de fontes com o pacote, a distinção entre e , a importância das chaves para a identificação de widgets e dicas de desenvolvimento como a utilização de constantes, regras de linter e recarga a quente para o desenvolvimento simplificado de aplicações. Compreender estes fundamentos é crucial para construir aplicações Flutter eficazes e otimizadas.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি প্রয়োজনীয় ধারণাগুলি কভার করে যেমন ফ্লটার স্তরগুলির গঠন, দক্ষ উইজেট আপডেট, প্যাকেজের সাথে ফন্ট পরিচালনা, এবং এর মধ্যে পার্থক্য, উইজেট সনাক্তকরণের জন্য কীগুলির গুরুত্ব এবং ধ্রুবক, লিন্টার নিয়ম এবং হট রিলোড ব্যবহার করার মতো বিকাশের টিপস। স্ট্রিমলাইনড অ্যাপ ডেভেলপমেন্ট। কার্যকরী এবং অপ্টিমাইজ করা ফ্লাটার অ্যাপ্লিকেশন তৈরির জন্য এই মৌলিক বিষয়গুলি বোঝা অত্যন্ত গুরুত্বপূর্ণ৷",
                // Arabic
                "عَرَبِيّ": "يغطي هذا الفصل المفاهيم الأساسية مثل بنية طبقات Flutter، وتحديثات عنصر واجهة المستخدم الفعالة، والتعامل مع الخطوط مع الحزمة، والتمييز بين و، وأهمية المفاتيح لتحديد عنصر واجهة المستخدم، ونصائح التطوير مثل استخدام الثوابت، وقواعد linter، وإعادة التحميل السريع لـ تطوير التطبيقات المبسطة. يعد فهم هذه الأساسيات أمرًا بالغ الأهمية لبناء تطبيقات Flutter الفعالة والمحسنة.",
                // Persian
                "فارسی": "این فصل مفاهیم اساسی مانند ساختار لایه‌های Flutter، به‌روزرسانی‌های کارآمد ویجت، مدیریت فونت با بسته، تمایز بین و، اهمیت کلیدها برای شناسایی ویجت، و نکات توسعه مانند استفاده از ثابت‌ها، قوانین linter، و بارگذاری مجدد داغ را پوشش می‌دهد. توسعه برنامه کارآمد درک این اصول برای ایجاد برنامه های کاربردی فلاتر موثر و بهینه بسیار مهم است.",
            },
        },
        // 10
        {
            "ChapterName": "Building UIs in Flutter",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter of the Flutter Complete Reference focuses on building UIs in Flutter, emphasizing the importance of responsive design and utilizing Material Design for Android and Cupertino for iOS. It discusses the use of widgets like Scaffold, CupertinoPageScaffold, and CupertinoTabScaffold to create visually appealing interfaces. The chapter highlights the significance of themes in maintaining consistent UI appearance throughout the app by using ThemeData and CupertinoThemeData. It also addresses scrolling and constraints issues with ListViews and Columns, providing solutions like Expanded and shrinkWrap. Overall, the chapter provides insights into creating dynamic and user-friendly UIs in Flutter.",
                // German
                "Deutsch": "Dieses Kapitel der Flutter Complete Reference konzentriert sich auf das Erstellen von Benutzeroberflächen in Flutter, betont die Bedeutung von Responsive Design und verwendet Material Design für Android und Cupertino für iOS. Es bespricht die Verwendung von Widgets wie Scaffold, CupertinoPageScaffold und CupertinoTabScaffold zum Erstellen optisch ansprechender Benutzeroberflächen. Das Kapitel hebt die Bedeutung von Designs hervor, um mithilfe von ThemeData und CupertinoThemeData ein einheitliches Erscheinungsbild der Benutzeroberfläche in der gesamten App beizubehalten. Es behandelt auch Scroll- und Einschränkungsprobleme mit ListViews und Columns und bietet Lösungen wie Expanded und shrinkWrap. Insgesamt bietet das Kapitel Einblicke in das Erstellen dynamischer und benutzerfreundlicher Benutzeroberflächen in Flutter.",
                // Chinese
                "中国人": "Flutter 完整参考的这一章重点介绍如何在 Flutter 中构建 UI，强调响应式设计的重要性，并利用 Android 的 Material Design 和 iOS 的 Cupertino。它讨论了如何使用 Scaffold、CupertinoPageScaffold 和 CupertinoTabScaffold 等小部件来创建视觉上吸引人的界面。本章强调了主题对于使用 ThemeData 和 CupertinoThemeData 在整个应用程序中保持一致的 UI 外观的重要性。它还解决了 ListViews 和 Columns 的滚动和约束问题，提供了 Expanded 和 shrinkWrap 等解决方案。总的来说，本章提供了在 Flutter 中创建动态且用户友好的 UI 的见解。",
                // Russian
                "Русский": "В этой главе «Полного справочника по Flutter» основное внимание уделяется созданию пользовательских интерфейсов во Flutter, подчеркиванию важности адаптивного дизайна и использованию Material Design для Android и Cupertino для iOS. В нем обсуждается использование виджетов, таких как Scaffold, CupertinoPageScaffold и CupertinoTabScaffold, для создания визуально привлекательных интерфейсов. В главе подчеркивается важность тем для поддержания единообразного внешнего вида пользовательского интерфейса во всем приложении с помощью ThemeData и CupertinoThemeData. Он также решает проблемы прокрутки и ограничений с помощью ListViews и Columns, предоставляя такие решения, как Expanded и ShrinkWrap. В целом, в главе дается представление о создании динамических и удобных пользовательских интерфейсов во Flutter.",
                // French
                "Français": "Ce chapitre de Flutter Complete Reference se concentre sur la création d'interfaces utilisateur dans Flutter, en soulignant l'importance du design réactif et en utilisant Material Design pour Android et Cupertino pour iOS. Il traite de l'utilisation de widgets tels que Scaffold, CupertinoPageScaffold et CupertinoTabScaffold pour créer des interfaces visuellement attrayantes. Le chapitre met en évidence l'importance des thèmes pour maintenir une apparence cohérente de l'interface utilisateur dans toute l'application en utilisant ThemeData et CupertinoThemeData. Il résout également les problèmes de défilement et de contraintes avec les ListViews et les colonnes, en fournissant des solutions telles que Expanded et ShrinkWrap. Dans l'ensemble, le chapitre fournit des informations sur la création d'interfaces utilisateur dynamiques et conviviales dans Flutter.",
                // Japanese
                "日本語": "Flutter Complete Reference のこの章では、Flutter での UI の構築に焦点を当て、レスポンシブ デザインの重要性を強調し、Android および iOS の Cupertino のマテリアル デザインを活用します。視覚的に魅力的なインターフェースを作成するために、Scaffold、CupertinoPageScaffold、CupertinoTabScaffold などのウィジェットを使用する方法について説明します。この章では、ThemeData と CupertinoThemeData を使用して、アプリ全体で一貫した UI の外観を維持する上でのテーマの重要性を強調します。また、ListView と列のスクロールと制約の問題にも対処し、Expanded や shrinkWrap などのソリューションを提供します。全体として、この章では、Flutter で動的でユーザー フレンドリーな UI を作成するための洞察を提供します。",
                // Korean
                "한국인": "Flutter 전체 참조의 이 장에서는 Flutter에서 UI를 구축하는 데 중점을 두고 반응형 디자인의 중요성을 강조하며 Android용 머티리얼 디자인과 iOS용 Cupertino를 활용합니다. 시각적으로 매력적인 인터페이스를 만들기 위해 Scaffold, CupertinoPageScaffold 및 CupertinoTabScaffold와 같은 위젯을 사용하는 방법에 대해 설명합니다. 이 장에서는 ThemeData 및 CupertinoThemeData를 사용하여 앱 전체에서 일관된 UI 모양을 유지하는 데 있어서 테마의 중요성을 강조합니다. 또한 ListView 및 열의 스크롤 및 제약 조건 문제를 해결하여 Expanded 및 ShrinkWrap과 같은 솔루션을 제공합니다. 전반적으로 이 장에서는 Flutter에서 동적이고 사용자 친화적인 UI를 만드는 방법에 대한 통찰력을 제공합니다.",
                // Spanish
                "Español": "Este capítulo de Flutter Complete Reference se centra en la creación de interfaces de usuario en Flutter, enfatizando la importancia del diseño responsivo y utilizando Material Design para Android y Cupertino para iOS. Analiza el uso de widgets como Scaffold, CupertinoPageScaffold y CupertinoTabScaffold para crear interfaces visualmente atractivas. El capítulo destaca la importancia de los temas para mantener una apariencia consistente de la interfaz de usuario en toda la aplicación mediante el uso de ThemeData y CupertinoThemeData. También aborda problemas de desplazamiento y restricciones con ListViews y Columns, proporcionando soluciones como Expanded y ShrinkWrap. En general, el capítulo proporciona información sobre cómo crear UI dinámicas y fáciles de usar en Flutter.",
                // Hindi
                "हिंदी": "फ़्लटर कम्प्लीट रेफरेंस का यह अध्याय फ़्लटर में UI बनाने पर केंद्रित है, जिसमें उत्तरदायी डिज़ाइन के महत्व पर ज़ोर दिया गया है और Android के लिए मटीरियल डिज़ाइन और iOS के लिए क्यूपर्टिनो का उपयोग किया गया है। यह विज़ुअली आकर्षक इंटरफ़ेस बनाने के लिए स्कैफ़ोल्ड, क्यूपर्टिनोपेजस्कैफ़ोल्ड और क्यूपर्टिनोटैबस्कैफ़ोल्ड जैसे विजेट के उपयोग पर चर्चा करता है। यह अध्याय थीमडेटा और क्यूपर्टिनोथीमडेटा का उपयोग करके पूरे ऐप में एक समान UI उपस्थिति बनाए रखने में थीम के महत्व पर प्रकाश डालता है। यह लिस्टव्यू और कॉलम के साथ स्क्रॉलिंग और बाधाओं के मुद्दों को भी संबोधित करता है, विस्तारित और श्रिंकरैप जैसे समाधान प्रदान करता है। कुल मिलाकर, यह अध्याय फ़्लटर में गतिशील और उपयोगकर्ता के अनुकूल UI बनाने में अंतर्दृष्टि प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo da Flutter Full Reference centra-se na construção de UIs no Flutter, enfatizando a importância do design responsivo e da utilização do Material Design para Android e Cupertino para iOS. Discute a utilização de widgets como o Scaffold, CupertinoPageScaffold e CupertinoTabScaffold para criar interfaces visualmente atraentes. O capítulo destaca a importância dos temas na manutenção da aparência consistente da IU em toda a aplicação utilizando o ThemeData e o CupertinoThemeData. Aborda também problemas de rolagem e restrições com ListViews e Columns, fornecendo soluções como Expanded e ShrinkWrap. No geral, o capítulo fornece informações sobre a criação de UIs dinâmicas e fáceis de utilizar no Flutter.",
                // Bengali
                "বাংলা": "ফ্লাটার কমপ্লিট রেফারেন্সের এই অধ্যায়টি ফ্লটারে UI তৈরির উপর দৃষ্টি নিবদ্ধ করে, প্রতিক্রিয়াশীল ডিজাইনের গুরুত্বের উপর জোর দেয় এবং Android এর জন্য মেটেরিয়াল ডিজাইন এবং iOS এর জন্য Cupertino ব্যবহার করে। এটি দৃশ্যমান আকর্ষণীয় ইন্টারফেস তৈরি করতে স্ক্যাফোল্ড, কিউপারটিনোপেজস্ক্যাফোল্ড এবং কিউপারটিনোট্যাবস্ক্যাফোল্ডের মতো উইজেটগুলির ব্যবহার নিয়ে আলোচনা করে। অধ্যায়টি ThemeData এবং CupertinoThemeData ব্যবহার করে অ্যাপ জুড়ে সামঞ্জস্যপূর্ণ UI উপস্থিতি বজায় রাখার ক্ষেত্রে থিমের তাৎপর্য তুলে ধরে। এটি লিস্টভিউ এবং কলামগুলির সাথে স্ক্রোলিং এবং সীমাবদ্ধতার সমস্যাগুলিকেও সম্বোধন করে, প্রসারিত এবং সঙ্কুচিত র‍্যাপের মতো সমাধান প্রদান করে। সামগ্রিকভাবে, অধ্যায়টি ফ্লটারে গতিশীল এবং ব্যবহারকারী-বান্ধব UI তৈরির অন্তর্দৃষ্টি প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل من Flutter Complete Reference على بناء واجهات المستخدم في Flutter، مع التركيز على أهمية التصميم سريع الاستجابة واستخدام التصميم متعدد الأبعاد لنظامي التشغيل Android وCupertino لنظام التشغيل iOS. ويناقش استخدام عناصر واجهة المستخدم مثل Scaffold وCupertinoPageScaffold وCupertinoTabScaffold لإنشاء واجهات جذابة بصريًا. يسلط الفصل الضوء على أهمية السمات في الحفاظ على مظهر واجهة المستخدم المتسق في جميع أنحاء التطبيق باستخدام ThemeData وCupertinoThemeData. كما أنه يعالج مشكلات التمرير والقيود في ListViews وColumns، ويوفر حلولاً مثل Expanded وShrinkWrap. بشكل عام، يقدم الفصل رؤى حول إنشاء واجهات مستخدم ديناميكية وسهلة الاستخدام في Flutter.",
                // Persian
                "فارسی": "این فصل از مرجع کامل Flutter بر ایجاد رابط‌های کاربری در Flutter تمرکز دارد و بر اهمیت طراحی واکنش‌گرا و استفاده از طراحی متریال برای اندروید و کوپرتینو برای iOS تأکید می‌کند. استفاده از ویجت‌هایی مانند Scaffold، CupertinoPageScaffold و CupertinoTabScaffold برای ایجاد رابط‌های بصری جذاب را مورد بحث قرار می‌دهد. این فصل با استفاده از ThemeData و CupertinoThemeData اهمیت تم ها را در حفظ ظاهر رابط کاربری ثابت در سراسر برنامه برجسته می کند. همچنین مشکلات اسکرول و محدودیت ها را با ListViews و Columns برطرف می کند و راه حل هایی مانند Expanded و ShrinkWrap را ارائه می دهد. به طور کلی، این فصل بینش هایی را در مورد ایجاد رابط های کاربری پویا و کاربر پسند در Flutter ارائه می دهد.",
            },
        },
        // 11
        {
            "ChapterName": "State Management",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter discusses state management in Flutter, emphasizing the importance of using Bloc for separating UI and business logic efficiently. It highlights the benefits of Provider for state management and recommends avoiding setState in favor of InheritedWidget or other state management solutions like bloc, Redux, or MobX. The chapter also covers best practices for widget state management, including the use of persisting state for widget updates. Overall, it provides insights on optimizing state management in Flutter applications for improved performance and code organization.",
                // German
                "Deutsch": "Das Kapitel befasst sich mit der Zustandsverwaltung in Flutter und betont die Bedeutung der Verwendung von Bloc für die effiziente Trennung von Benutzeroberfläche und Geschäftslogik. Es hebt die Vorteile von Provider für die Zustandsverwaltung hervor und empfiehlt, setState zugunsten von InheritedWidget oder anderen Zustandsverwaltungslösungen wie bloc, Redux oder MobX zu vermeiden. Das Kapitel behandelt auch Best Practices für die Widget-Zustandsverwaltung, einschließlich der Verwendung von persistentem Zustand für Widget-Updates. Insgesamt bietet es Einblicke in die Optimierung der Zustandsverwaltung in Flutter-Anwendungen für verbesserte Leistung und Codeorganisation.",
                // Chinese
                "中国人": "本章讨论了 Flutter 中的状态管理，强调了使用 Bloc 有效分离 UI 和业务逻辑的重要性。它强调了 Provider 对状态管理的好处，并建议避免使用 setState，而应使用 InheritedWidget 或其他状态管理解决方案，如 bloc、Redux 或 MobX。本章还介绍了小部件状态管理的最佳实践，包括使用持久状态进行小部件更新。总的来说，它提供了关于优化 Flutter 应用程序中的状态管理以提高性能和代码组织的见解。",
                // Russian
                "Русский": "В главе обсуждается управление состоянием во Flutter, подчеркивая важность использования Bloc для эффективного разделения пользовательского интерфейса и бизнес-логики. В нем подчеркиваются преимущества Provider для управления состоянием и рекомендуется избегать setState в пользу InheritedWidget или других решений для управления состоянием, таких как bloc, Redux или MobX. В главе также рассматриваются лучшие практики управления состоянием виджетов, включая использование постоянного состояния для обновлений виджетов. В целом, он дает представление об оптимизации управления состоянием в приложениях Flutter для повышения производительности и организации кода.",
                // French
                "Français": "Le chapitre traite de la gestion de l'état dans Flutter, en soulignant l'importance d'utiliser Bloc pour séparer efficacement l'interface utilisateur et la logique métier. Il met en évidence les avantages de Provider pour la gestion de l'état et recommande d'éviter setState au profit de InheritedWidget ou d'autres solutions de gestion d'état comme bloc, Redux ou MobX. Le chapitre couvre également les meilleures pratiques pour la gestion de l'état des widgets, y compris l'utilisation de l'état persistant pour les mises à jour des widgets. Dans l'ensemble, il fournit des informations sur l'optimisation de la gestion de l'état dans les applications Flutter pour améliorer les performances et l'organisation du code.",
                // Japanese
                "日本語": "この章では、Flutter での状態管理について説明し、UI とビジネス ロジックを効率的に分離するために Bloc を使用することの重要性を強調しています。状態管理における Provider の利点を強調し、setState を避けて InheritedWidget または bloc、Redux、MobX などの他の状態管理ソリューションを使用することを推奨しています。この章では、ウィジェットの更新に永続的な状態を使用するなど、ウィジェットの状態管理のベスト プラクティスについても説明します。全体として、Flutter アプリケーションで状態管理を最適化してパフォーマンスとコード構成を改善するための洞察を提供します。",
                // Korean
                "한국인": "이 장에서는 Flutter의 상태 관리에 대해 논의하고 UI와 비즈니스 로직을 효율적으로 분리하기 위해 Bloc을 사용하는 것의 중요성을 강조합니다. 상태 관리를 위한 Provider의 이점을 강조하고 InheritedWidget이나 bloc, Redux 또는 MobX와 같은 기타 상태 관리 솔루션을 선호하여 setState를 피하도록 권장합니다. 또한 이 장에서는 위젯 업데이트를 위한 지속 상태 사용을 포함하여 위젯 상태 관리에 대한 모범 사례를 다룹니다. 전반적으로 성능 및 코드 구성 개선을 위해 Flutter 애플리케이션의 상태 관리 최적화에 대한 통찰력을 제공합니다.",
                // Spanish
                "Español": "El capítulo analiza la gestión del estado en Flutter y enfatiza la importancia de usar Bloc para separar la interfaz de usuario y la lógica empresarial de manera eficiente. Destaca los beneficios de Provider para la gestión estatal y recomienda evitar setState en favor de InheritedWidget u otras soluciones de gestión estatal como block, Redux o MobX. El capítulo también cubre las mejores prácticas para la gestión del estado de los widgets, incluido el uso de estados persistentes para las actualizaciones de los widgets. En general, proporciona información sobre cómo optimizar la gestión del estado en aplicaciones Flutter para mejorar el rendimiento y la organización del código.",
                // Hindi
                "हिंदी": "अध्याय फ़्लटर में स्टेट मैनेजमेंट पर चर्चा करता है, UI और व्यावसायिक तर्क को कुशलतापूर्वक अलग करने के लिए ब्लॉक का उपयोग करने के महत्व पर जोर देता है। यह स्टेट मैनेजमेंट के लिए प्रदाता के लाभों पर प्रकाश डालता है और इनहेरिटेडविजेट या ब्लॉक, रेडक्स या मोबएक्स जैसे अन्य स्टेट मैनेजमेंट समाधानों के पक्ष में सेटस्टेट से बचने की सलाह देता है। अध्याय विजेट स्टेट मैनेजमेंट के लिए सर्वोत्तम प्रथाओं को भी शामिल करता है, जिसमें विजेट अपडेट के लिए स्थायी स्टेट का उपयोग शामिल है। कुल मिलाकर, यह बेहतर प्रदर्शन और कोड संगठन के लिए फ़्लटर अनुप्रयोगों में स्टेट मैनेजमेंट को अनुकूलित करने पर अंतर्दृष्टि प्रदान करता है।",
                // Portuguese
                "Português": "O capítulo discute a gestão de estado no Flutter, enfatizando a importância de utilizar o Bloc para separar a UI e a lógica de negócio de forma eficiente. Destaca os benefícios do Provider para a gestão de estado e recomenda evitar o setState em favor do InheritedWidget ou outras soluções de gestão de estado, como o bloc, Redux ou MobX. O capítulo aborda também as práticas recomendadas para a gestão do estado de widgets, incluindo a utilização de estado persistente para atualizações de widgets. No geral, fornece informações sobre como otimizar a gestão de estado nas aplicações Flutter para melhorar o desempenho e a organização do código.",
                // Bengali
                "বাংলা": "অধ্যায়টি ফ্লটারে রাষ্ট্র পরিচালনার বিষয়ে আলোচনা করে, UI এবং ব্যবসায়িক যুক্তিকে দক্ষতার সাথে আলাদা করার জন্য ব্লক ব্যবহার করার গুরুত্বের উপর জোর দেয়। এটি রাষ্ট্র পরিচালনার জন্য প্রদানকারীর সুবিধাগুলিকে হাইলাইট করে এবং InheritedWidget বা ব্লক, Redux, বা MobX এর মতো অন্যান্য রাষ্ট্রীয় ব্যবস্থাপনা সমাধানের পক্ষে সেটস্টেট এড়ানোর সুপারিশ করে। অধ্যায়টি উইজেট স্টেট ম্যানেজমেন্টের জন্য সর্বোত্তম অনুশীলনগুলিও কভার করে, উইজেট আপডেটের জন্য স্থায়ী অবস্থার ব্যবহার সহ। সামগ্রিকভাবে, এটি উন্নত কর্মক্ষমতা এবং কোড সংগঠনের জন্য Flutter অ্যাপ্লিকেশনগুলিতে রাষ্ট্র পরিচালনার অপ্টিমাইজ করার অন্তর্দৃষ্টি প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يناقش الفصل إدارة الحالة في Flutter، مع التركيز على أهمية استخدام Bloc لفصل واجهة المستخدم ومنطق الأعمال بكفاءة. وهو يسلط الضوء على فوائد Provider لإدارة الحالة ويوصي بتجنب setState لصالح InheritedWidget أو حلول إدارة الحالة الأخرى مثل bloc أو Redux أو MobX. يغطي الفصل أيضًا أفضل الممارسات لإدارة حالة عنصر واجهة المستخدم، بما في ذلك استخدام الحالة المستمرة لتحديثات عنصر واجهة المستخدم. وبشكل عام، فإنه يوفر رؤى حول تحسين إدارة الحالة في تطبيقات Flutter لتحسين الأداء وتنظيم التعليمات البرمجية.",
                // Persian
                "فارسی": "این فصل مدیریت حالت را در Flutter مورد بحث قرار می دهد و بر اهمیت استفاده از Bloc برای جداسازی کارآمد UI و منطق تجاری تأکید می کند. مزایای Provider برای مدیریت ایالت را برجسته می کند و توصیه می کند از setState به نفع InheritedWidget یا سایر راه حل های مدیریت ایالت مانند block، Redux، یا MobX اجتناب کنید. این فصل همچنین بهترین شیوه‌ها را برای مدیریت وضعیت ویجت، از جمله استفاده از حالت ماندگار برای به‌روزرسانی ویجت، پوشش می‌دهد. به طور کلی، بینش هایی در مورد بهینه سازی مدیریت حالت در برنامه های Flutter برای بهبود عملکرد و سازماندهی کد ارائه می دهد.",
            },
        },
        // 12
        {
            "ChapterName": "Routes and navigation",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the focus is on efficient routes and navigation in Flutter. It emphasizes using Navigator.of(context)?.pushNamed() as the default choice for navigation, avoiding the costly use of global keys, and utilizing GlobalKey() only when necessary. Data sharing between routes is simplified by relying on Provider for efficient data management. The chapter also introduces alternative routing packages like Flutter modular for advanced routing needs, highlighting the importance of separating UI and logic for a well-structured app architecture.",
                // German
                "Deutsch": "In diesem Kapitel liegt der Schwerpunkt auf effizienten Routen und Navigation in Flutter. Es betont die Verwendung von Navigator.of(context)?.pushNamed() als Standardauswahl für die Navigation, die Vermeidung der kostspieligen Verwendung globaler Schlüssel und die Verwendung von GlobalKey() nur bei Bedarf. Der Datenaustausch zwischen Routen wird vereinfacht, indem Provider für eine effiziente Datenverwaltung verwendet wird. Das Kapitel stellt auch alternative Routing-Pakete wie Flutter Modular für erweiterte Routing-Anforderungen vor und unterstreicht die Bedeutung der Trennung von Benutzeroberfläche und Logik für eine gut strukturierte App-Architektur.",
                // Chinese
                "中国人": "本章重点介绍 Flutter 中的高效路由和导航。它强调使用 Navigator.of(context)?.pushNamed() 作为导航的默认选择，避免使用代价高昂的全局键，并仅在必要时使用 GlobalKey()。通过依赖 Provider 实现高效的数据管理，简化了路由之间的数据共享。本章还介绍了用于高级路由需求的替代路由包（如 Flutter modules），强调了分离 UI 和逻辑对于结构良好的应用架构的重要性。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется эффективным маршрутам и навигации во Flutter. В нем подчеркивается использование Navigator.of(context)?.pushNamed() в качестве выбора по умолчанию для навигации, избегание дорогостоящего использования глобальных ключей и использование GlobalKey() только при необходимости. Обмен данными между маршрутами упрощается благодаря использованию поставщика для эффективного управления данными. В главе также представлены альтернативные пакеты маршрутизации, такие как модульный Flutter для расширенных потребностей маршрутизации, подчеркивая важность разделения пользовательского интерфейса и логики для хорошо структурированной архитектуры приложения.",
                // French
                "Français": "Dans ce chapitre, l'accent est mis sur les itinéraires et la navigation efficaces dans Flutter. Il met l'accent sur l'utilisation de Navigator.of(context)?.pushNamed() comme choix par défaut pour la navigation, évitant ainsi l'utilisation coûteuse de clés globales et utilisant GlobalKey() uniquement lorsque cela est nécessaire. Le partage de données entre les itinéraires est simplifié en s'appuyant sur le fournisseur pour une gestion efficace des données. Le chapitre présente également des packages de routage alternatifs tels que Flutter modulaire pour les besoins de routage avancés, soulignant l'importance de séparer l'interface utilisateur et la logique pour une architecture d'application bien structurée.",
                // Japanese
                "日本語": "この章では、Flutter での効率的なルートとナビゲーションに焦点を当てています。ナビゲーションのデフォルトの選択肢として Navigator.of(context)?.pushNamed() を使用すること、コストのかかるグローバル キーの使用を回避し、必要な場合にのみ GlobalKey() を使用することを強調しています。ルート間のデータ共有は、効率的なデータ管理のためにプロバイダーに依存することで簡素化されます。この章では、高度なルーティングのニーズに対応する Flutter モジュラーなどの代替ルーティング パッケージも紹介し、適切に構造化されたアプリ アーキテクチャのために UI とロジックを分離することの重要性を強調しています。",
                // Korean
                "한국인": "이 장에서는 Flutter의 효율적인 경로와 탐색에 중점을 둡니다. 탐색을 위한 기본 선택으로 Navigator.of(context)?.pushNamed()를 사용하고 비용이 많이 드는 전역 키 사용을 피하며 필요한 경우에만 GlobalKey()를 활용하는 것을 강조합니다. 효율적인 데이터 관리를 위해 Provider를 사용하면 경로 간 데이터 공유가 단순화됩니다. 또한 이 장에서는 고급 라우팅 요구 사항을 위한 Flutter 모듈식과 같은 대체 라우팅 패키지를 소개하고 잘 구조화된 앱 아키텍처를 위해 UI와 로직을 분리하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "En este capítulo, la atención se centra en las rutas y la navegación eficientes en Flutter. Enfatiza el uso de Navigator.of(context)?.pushNamed() como opción predeterminada para la navegación, evitando el costoso uso de claves globales y utilizando GlobalKey() solo cuando sea necesario. El intercambio de datos entre rutas se simplifica al confiar en el Proveedor para una gestión eficiente de los datos. El capítulo también presenta paquetes de enrutamiento alternativos como Flutter modular para necesidades de enrutamiento avanzadas, destacando la importancia de separar la interfaz de usuario y la lógica para una arquitectura de aplicación bien estructurada.",
                // Hindi
                "हिंदी": "इस अध्याय में, फ़्लटर में कुशल रूट और नेविगेशन पर ध्यान केंद्रित किया गया है। यह नेविगेशन के लिए डिफ़ॉल्ट विकल्प के रूप में Navigator.of(context)?.pushNamed() का उपयोग करने, वैश्विक कुंजियों के महंगे उपयोग से बचने और केवल आवश्यक होने पर GlobalKey() का उपयोग करने पर जोर देता है। कुशल डेटा प्रबंधन के लिए प्रदाता पर भरोसा करके मार्गों के बीच डेटा साझा करना सरल है। अध्याय उन्नत रूटिंग आवश्यकताओं के लिए फ़्लटर मॉड्यूलर जैसे वैकल्पिक रूटिंग पैकेज भी पेश करता है, जो एक अच्छी तरह से संरचित ऐप आर्किटेक्चर के लिए UI और लॉजिक को अलग करने के महत्व पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Neste capítulo, o foco está em rotas e navegação eficientes no Flutter. Realça a utilização de Navigator.of(context)?.pushNamed() como opção padrão para a navegação, evitando o uso dispendioso de chaves globais e utilizando GlobalKey() apenas quando necessário. A partilha de dados entre rotas é simplificada ao contar com o Fornecedor para uma gestão eficiente dos dados. O capítulo apresenta também pacotes de encaminhamento alternativos, como o Flutter modular, para necessidades avançadas de encaminhamento, destacando a importância de separar a UI e a lógica para uma arquitetura de aplicação bem estruturada.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, ফোকাস ফ্লটারে দক্ষ রুট এবং নেভিগেশনের উপর। এটি নেভিগেশনের জন্য ডিফল্ট পছন্দ হিসাবে Navigator.of(context)?.pushNamed() ব্যবহার করার উপর জোর দেয়, গ্লোবাল কীগুলির ব্যয়বহুল ব্যবহার এড়িয়ে যায় এবং শুধুমাত্র প্রয়োজনে GlobalKey() ব্যবহার করে। দক্ষ ডাটা ম্যানেজমেন্টের জন্য প্রোভাইডারের উপর নির্ভর করে রুটের মধ্যে ডেটা শেয়ারিং সহজ করা হয়। অধ্যায়টি উন্নত রাউটিং প্রয়োজনের জন্য ফ্লটার মডুলারের মতো বিকল্প রাউটিং প্যাকেজগুলিও প্রবর্তন করে, একটি সুগঠিত অ্যাপ আর্কিটেকচারের জন্য UI এবং যুক্তিকে আলাদা করার গুরুত্ব তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتم التركيز على المسارات والملاحة الفعالة في Flutter. ويؤكد على استخدام Navigator.of(context)?.pushNamed() كخيار افتراضي للتنقل، وتجنب الاستخدام المكلف للمفاتيح العامة، واستخدام GlobalKey() فقط عند الضرورة. يتم تبسيط مشاركة البيانات بين المسارات من خلال الاعتماد على الموفر لإدارة البيانات بكفاءة. يقدم الفصل أيضًا حزم توجيه بديلة مثل Flutter modular لاحتياجات التوجيه المتقدمة، مع تسليط الضوء على أهمية فصل واجهة المستخدم والمنطق من أجل بنية تطبيق جيدة التنظيم.",
                // Persian
                "فارسی": "در این فصل، تمرکز بر مسیرهای کارآمد و ناوبری در فلاتر است. بر استفاده از Navigator.of(context)?.pushNamed() به عنوان انتخاب پیش‌فرض برای پیمایش، اجتناب از استفاده پرهزینه از کلیدهای سراسری، و استفاده از GlobalKey() فقط در مواقع ضروری تاکید می‌کند. به اشتراک گذاری داده بین مسیرها با تکیه بر ارائه دهنده برای مدیریت کارآمد داده ها ساده می شود. این فصل همچنین بسته‌های مسیریابی جایگزین مانند Flutter مدولار را برای نیازهای مسیریابی پیشرفته معرفی می‌کند، و اهمیت جداسازی رابط کاربری و منطق را برای معماری برنامه‌ای با ساختار مناسب نشان می‌دهد.",
            },
        },
        // 13
        {
            "ChapterName": "Localization and internationalization",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter discusses localization and internationalization in Flutter, highlighting two main approaches: manual and using intl. The manual approach involves creating an class with a database for translations and generating a localization delegate. On the other hand, using requires creating the class with ARB files for translations and generating a localization delegate. Considerations include choosing the appropriate approach based on the number of languages and features needed. Implementation involves setting up the localization delegate in MaterialApp/CupertinoApp and using extension methods for easy string localization.",
                // German
                "Deutsch": "In diesem Kapitel werden Lokalisierung und Internationalisierung in Flutter behandelt. Dabei werden zwei Hauptansätze hervorgehoben: manuell und mit intl. Der manuelle Ansatz umfasst das Erstellen einer Klasse mit einer Datenbank für Übersetzungen und das Generieren eines Lokalisierungsdelegaten. Bei Verwendung hingegen muss die Klasse mit ARB-Dateien für Übersetzungen erstellt und ein Lokalisierungsdelegate generiert werden. Zu den Überlegungen gehört die Auswahl des geeigneten Ansatzes basierend auf der Anzahl der benötigten Sprachen und Funktionen. Die Implementierung umfasst das Einrichten des Lokalisierungsdelegaten in MaterialApp/CupertinoApp und die Verwendung von Erweiterungsmethoden für eine einfache Zeichenfolgenlokalisierung.",
                // Chinese
                "中国人": "本章讨论了 Flutter 中的本地化和国际化，重点介绍了两种主要方法：手动和使用 intl。手动方法包括创建一个带有数据库的类用于翻译并生成本地化委托。另一方面，使用需要创建带有 ARB 文件的类用于翻译并生成本地化委托。考虑因素包括根据所需的语言和功能数量选择适当的方法。实施包括在 MaterialApp/CupertinoApp 中设置本地化委托并使用扩展方法轻松实现字符串本地化。",
                // Russian
                "Русский": "В главе обсуждается локализация и интернационализация во Flutter, выделяются два основных подхода: вручную и с использованием intl. Ручной подход предполагает создание класса с базой данных для переводов и генерацию делегата локализации. С другой стороны, использование требует создания класса с файлами ARB для переводов и создания делегата локализации. Соображения включают выбор подходящего подхода на основе количества языков и необходимых функций. Реализация включает настройку делегата локализации в MaterialApp/CupertinoApp и использование методов расширения для упрощения локализации строк.",
                // French
                "Français": "Le chapitre traite de la localisation et de l'internationalisation dans Flutter, en mettant en évidence deux approches principales : manuelle et utilisant intl. L'approche manuelle consiste à créer une classe avec une base de données pour les traductions et à générer un délégué de localisation. D'un autre côté, l'utilisation nécessite de créer la classe avec des fichiers ARB pour les traductions et de générer un délégué de localisation. Les considérations incluent le choix de l’approche appropriée en fonction du nombre de langues et de fonctionnalités nécessaires. La mise en œuvre implique la configuration du délégué de localisation dans MaterialApp/CupertinoApp et l'utilisation de méthodes d'extension pour une localisation facile des chaînes.",
                // Japanese
                "日本語": "この章では、Flutter のローカリゼーションと国際化について説明し、手動と intl の使用という 2 つの主なアプローチに焦点を当てています。手動のアプローチでは、翻訳用のデータベースを含むクラスを作成し、ローカリゼーション デリゲートを生成します。一方、使用では、翻訳用の ARB ファイルを含むクラスを作成し、ローカリゼーション デリゲートを生成します。考慮すべき点としては、必要な言語と機能の数に基づいて適切なアプローチを選択することなどがあります。実装には、MaterialApp/CupertinoApp でローカリゼーション デリゲートを設定し、拡張メソッドを使用して簡単に文字列をローカリゼーションすることが含まれます。",
                // Korean
                "한국인": "이 장에서는 Flutter의 현지화 및 국제화에 대해 논의하며 수동 및 intl 사용이라는 두 가지 주요 접근 방식을 강조합니다. 수동 접근 방식에는 번역용 데이터베이스가 포함된 클래스를 생성하고 현지화 대리자를 생성하는 작업이 포함됩니다. 반면에 를 사용하려면 번역을 위한 ARB 파일로 클래스를 만들고 현지화 대리자를 생성해야 합니다. 고려해야 할 사항에는 필요한 언어 및 기능 수에 따라 적절한 접근 방식을 선택하는 것이 포함됩니다. 구현에는 MaterialApp/CupertinoApp에서 현지화 대리자를 설정하고 쉬운 문자열 현지화를 위한 확장 메서드를 사용하는 작업이 포함됩니다.",
                // Spanish
                "Español": "El capítulo analiza la localización y la internacionalización en Flutter, destacando dos enfoques principales: manual y usando intl. El enfoque manual implica crear una clase con una base de datos para traducciones y generar un delegado de localización. Por otro lado, su uso requiere crear la clase con archivos ARB para traducciones y generar un delegado de localización. Las consideraciones incluyen elegir el enfoque adecuado según la cantidad de idiomas y funciones necesarias. La implementación implica configurar el delegado de localización en MaterialApp/CupertinoApp y usar métodos de extensión para una fácil localización de cadenas.",
                // Hindi
                "हिंदी": "अध्याय फ़्लटर में स्थानीयकरण और अंतर्राष्ट्रीयकरण पर चर्चा करता है, जिसमें दो मुख्य दृष्टिकोणों पर प्रकाश डाला गया है: मैनुअल और intl का उपयोग करना। मैनुअल दृष्टिकोण में अनुवाद के लिए डेटाबेस के साथ एक क्लास बनाना और एक स्थानीयकरण प्रतिनिधि उत्पन्न करना शामिल है। दूसरी ओर, अनुवाद के लिए ARB फ़ाइलों के साथ क्लास बनाने और एक स्थानीयकरण प्रतिनिधि उत्पन्न करने की आवश्यकता होती है। विचार करने में आवश्यक भाषाओं और सुविधाओं की संख्या के आधार पर उपयुक्त दृष्टिकोण चुनना शामिल है। कार्यान्वयन में मटेरियलऐप/क्यूपर्टिनोऐप में स्थानीयकरण प्रतिनिधि को स्थापित करना और आसान स्ट्रिंग स्थानीयकरण के लिए एक्सटेंशन विधियों का उपयोग करना शामिल है।",
                // Portuguese
                "Português": "O capítulo discute a localização e a internacionalização no Flutter, destacando duas abordagens principais: manual e utilizando intl. A abordagem manual envolve a criação de uma classe com uma base de dados para traduções e a geração de um delegado de localização. Por outro lado, a utilização requer a criação da classe com ficheiros ARB para traduções e a geração de um delegado de localização. As considerações incluem a escolha da abordagem adequada com base no número de idiomas e recursos necessários. A implementação envolve a configuração do delegado de localização em MaterialApp/CupertinoApp e a utilização de métodos de extensão para uma fácil localização de strings.",
                // Bengali
                "বাংলা": "অধ্যায়টি ফ্লটারে স্থানীয়করণ এবং আন্তর্জাতিকীকরণ নিয়ে আলোচনা করে, দুটি প্রধান পদ্ধতির উপর আলোকপাত করে: ম্যানুয়াল এবং intl ব্যবহার করে। ম্যানুয়াল পদ্ধতিতে অনুবাদের জন্য একটি ডাটাবেস সহ একটি ক্লাস তৈরি করা এবং একটি স্থানীয়করণ প্রতিনিধি তৈরি করা জড়িত। অন্যদিকে, ব্যবহার করার জন্য অনুবাদের জন্য ARB ফাইল সহ ক্লাস তৈরি করা এবং একটি স্থানীয়করণ প্রতিনিধি তৈরি করা প্রয়োজন। বিবেচনার মধ্যে রয়েছে প্রয়োজনীয় ভাষা এবং বৈশিষ্ট্যের সংখ্যার উপর ভিত্তি করে উপযুক্ত পদ্ধতি নির্বাচন করা। বাস্তবায়নে MaterialApp/CupertinoApp-এ স্থানীয়করণ প্রতিনিধি সেট আপ করা এবং সহজ স্ট্রিং স্থানীয়করণের জন্য এক্সটেনশন পদ্ধতি ব্যবহার করা জড়িত।",
                // Arabic
                "عَرَبِيّ": "يناقش الفصل التوطين والتدويل في Flutter، مع تسليط الضوء على نهجين رئيسيين: اليدوي واستخدام intl. يتضمن النهج اليدوي إنشاء فصل دراسي بقاعدة بيانات للترجمات وإنشاء مندوب الترجمة. من ناحية أخرى، يتطلب الاستخدام إنشاء الفصل بملفات ARB للترجمات وإنشاء مندوب الترجمة. تتضمن الاعتبارات اختيار النهج المناسب بناءً على عدد اللغات والميزات المطلوبة. يتضمن التنفيذ إعداد مندوب الترجمة في MaterialApp/CupertinoApp واستخدام طرق الامتداد لتسهيل ترجمة السلسلة.",
                // Persian
                "فارسی": "این فصل به بحث بومی‌سازی و بین‌المللی‌سازی در فلاتر می‌پردازد و دو رویکرد اصلی را برجسته می‌کند: دستی و استفاده از بین‌المللی. رویکرد دستی شامل ایجاد یک کلاس با پایگاه داده برای ترجمه ها و ایجاد یک نماینده محلی سازی است. از طرف دیگر، استفاده از آن مستلزم ایجاد کلاس با فایل‌های ARB برای ترجمه و ایجاد یک نماینده محلی‌سازی است. ملاحظات شامل انتخاب رویکرد مناسب بر اساس تعداد زبان ها و ویژگی های مورد نیاز است. پیاده‌سازی شامل تنظیم نماینده محلی‌سازی در MaterialApp/CupertinoApp و استفاده از روش‌های توسعه برای محلی‌سازی آسان رشته است.",
            },
        },
        // 14
        {
            "ChapterName": "Animation",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter on animations in Flutter explores various ways to create dynamic and engaging animations in mobile applications. It covers the use of implicit animations like AnimatedContainer, as well as custom animations. It introduced some techniques to enhance animation effects, and the importance of maintaining focus during route transitions with Hero animations is highlighted. Additionally, custom route transitions can be implemented, providing developers with a comprehensive toolkit to bring their apps to life with captivating animations.",
                // German
                "Deutsch": "Das Kapitel über Animationen in Flutter untersucht verschiedene Möglichkeiten, dynamische und ansprechende Animationen in mobilen Anwendungen zu erstellen. Es behandelt die Verwendung impliziter Animationen wie AnimatedContainer sowie benutzerdefinierter Animationen. Es werden einige Techniken zur Verbesserung von Animationseffekten vorgestellt und die Bedeutung der Beibehaltung des Fokus während Routenübergängen mit Hero-Animationen hervorgehoben. Darüber hinaus können benutzerdefinierte Routenübergänge implementiert werden, wodurch Entwickler ein umfassendes Toolkit erhalten, um ihre Apps mit fesselnden Animationen zum Leben zu erwecken.",
                // Chinese
                "中国人": "Flutter 动画章节探讨了在移动应用中创建动态且引人入胜的动画的各种方法。它涵盖了隐式动画（如 AnimatedContainer）以及自定义动画的使用。它介绍了一些增强动画效果的技术，并强调了使用 Hero 动画在路由转换期间保持焦点的重要性。此外，还可以实现自定义路由转换，为开发人员提供全面的工具包，让他们的应用通过引人入胜的动画栩栩如生。",
                // Russian
                "Русский": "В главе об анимации во Flutter рассматриваются различные способы создания динамичной и привлекательной анимации в мобильных приложениях. Он охватывает использование неявных анимаций, таких как AnimatedContainer, а также пользовательских анимаций. В нем представлены некоторые методы улучшения анимационных эффектов, а также подчеркивается важность сохранения фокуса во время перехода маршрутов с помощью анимации героев. Кроме того, можно реализовать пользовательские переходы маршрутов, предоставляя разработчикам комплексный набор инструментов для оживления своих приложений с помощью захватывающей анимации.",
                // French
                "Français": "Le chapitre sur les animations dans Flutter explore différentes façons de créer des animations dynamiques et attrayantes dans les applications mobiles. Il couvre l'utilisation d'animations implicites comme AnimatedContainer, ainsi que des animations personnalisées. Il a introduit quelques techniques pour améliorer les effets d'animation, et l'importance de maintenir la concentration lors des transitions d'itinéraire avec les animations de héros est soulignée. De plus, des transitions d'itinéraire personnalisées peuvent être mises en œuvre, fournissant ainsi aux développeurs une boîte à outils complète pour donner vie à leurs applications avec des animations captivantes.",
                // Japanese
                "日本語": "Flutter のアニメーションに関する章では、モバイル アプリケーションで動的で魅力的なアニメーションを作成するためのさまざまな方法について説明します。AnimatedContainer などの暗黙的なアニメーションやカスタム アニメーションの使用について説明します。アニメーション効果を高めるいくつかのテクニックを紹介し、Hero アニメーションを使用してルート遷移中にフォーカスを維持することの重要性を強調します。さらに、カスタム ルート遷移を実装できるため、開発者は魅力的なアニメーションでアプリに命を吹き込むための包括的なツールキットを利用できます。",
                // Korean
                "한국인": "Flutter의 애니메이션에 관한 장에서는 모바일 애플리케이션에서 역동적이고 매력적인 애니메이션을 만드는 다양한 방법을 탐구합니다. AnimatedContainer와 같은 암시적 애니메이션과 사용자 정의 애니메이션의 사용을 다룹니다. 애니메이션 효과를 향상시키는 몇 가지 기술을 도입했으며, 영웅 애니메이션으로 경로 전환 중에 초점을 유지하는 것의 중요성이 강조되었습니다. 또한, 맞춤형 경로 전환을 구현하여 개발자에게 매력적인 애니메이션으로 앱에 생기를 불어넣을 수 있는 포괄적인 툴킷을 제공할 수 있습니다.",
                // Spanish
                "Español": "El capítulo sobre animaciones en Flutter explora varias formas de crear animaciones dinámicas y atractivas en aplicaciones móviles. Cubre el uso de animaciones implícitas como AnimatedContainer, así como animaciones personalizadas. Introdujo algunas técnicas para mejorar los efectos de animación y se destaca la importancia de mantener el enfoque durante las transiciones de ruta con animaciones de Hero. Además, se pueden implementar transiciones de rutas personalizadas, lo que proporciona a los desarrolladores un completo conjunto de herramientas para dar vida a sus aplicaciones con animaciones cautivadoras.",
                // Hindi
                "हिंदी": "फ़्लटर में एनिमेशन पर अध्याय मोबाइल एप्लिकेशन में गतिशील और आकर्षक एनिमेशन बनाने के विभिन्न तरीकों की खोज करता है। इसमें एनिमेटेड कंटेनर जैसे निहित एनिमेशन के उपयोग के साथ-साथ कस्टम एनिमेशन का उपयोग शामिल है। इसने एनिमेशन प्रभावों को बढ़ाने के लिए कुछ तकनीकों को पेश किया, और हीरो एनिमेशन के साथ रूट ट्रांज़िशन के दौरान फ़ोकस बनाए रखने के महत्व पर प्रकाश डाला। इसके अतिरिक्त, कस्टम रूट ट्रांज़िशन को लागू किया जा सकता है, जिससे डेवलपर्स को अपने ऐप्स को आकर्षक एनिमेशन के साथ जीवंत करने के लिए एक व्यापक टूलकिट मिल सकता है।",
                // Portuguese
                "Português": "O capítulo sobre animações no Flutter explora várias formas de criar animações dinâmicas e envolventes em aplicações móveis. Abrange a utilização de animações implícitas como AnimatedContainer, bem como animações personalizadas. Introduziu algumas técnicas para melhorar os efeitos de animação, e é realçada a importância de manter o foco durante as transições de rota com animações de heróis. Além disso, podem ser implementadas transições de rotas personalizadas, fornecendo aos programadores um kit de ferramentas abrangente para dar vida às suas aplicações com animações cativantes.",
                // Bengali
                "বাংলা": "Flutter-এ অ্যানিমেশনের অধ্যায় মোবাইল অ্যাপ্লিকেশনগুলিতে গতিশীল এবং আকর্ষক অ্যানিমেশন তৈরি করার বিভিন্ন উপায় অন্বেষণ করে। এটি অ্যানিমেটেড কন্টেইনারের মতো অন্তর্নিহিত অ্যানিমেশনগুলির পাশাপাশি কাস্টম অ্যানিমেশনগুলির ব্যবহার কভার করে। এটি অ্যানিমেশন প্রভাব বাড়ানোর জন্য কিছু কৌশল প্রবর্তন করেছে এবং হিরো অ্যানিমেশনের সাথে রুট ট্রানজিশনের সময় ফোকাস বজায় রাখার গুরুত্ব তুলে ধরা হয়েছে। উপরন্তু, কাস্টম রুট ট্রানজিশন প্রয়োগ করা যেতে পারে, যা ডেভেলপারদের একটি বিস্তৃত টুলকিট প্রদান করে তাদের অ্যাপগুলিকে চিত্তাকর্ষক অ্যানিমেশনের সাথে জীবন্ত করে তুলতে।",
                // Arabic
                "عَرَبِيّ": "يستكشف الفصل الخاص بالرسوم المتحركة في Flutter طرقًا مختلفة لإنشاء رسوم متحركة ديناميكية وجذابة في تطبيقات الهاتف المحمول. ويغطي استخدام الرسوم المتحركة الضمنية مثل AnimatedContainer، بالإضافة إلى الرسوم المتحركة المخصصة. لقد قدمت بعض التقنيات لتحسين تأثيرات الرسوم المتحركة، وتم تسليط الضوء على أهمية الحفاظ على التركيز أثناء انتقالات المسار باستخدام الرسوم المتحركة البطل. بالإضافة إلى ذلك، يمكن تنفيذ انتقالات المسار المخصصة، مما يوفر للمطورين مجموعة أدوات شاملة لإضفاء الحيوية على تطبيقاتهم من خلال الرسوم المتحركة الجذابة.",
                // Persian
                "فارسی": "فصل انیمیشن‌ها در Flutter راه‌های مختلفی برای ایجاد انیمیشن‌های پویا و جذاب در برنامه‌های موبایل را بررسی می‌کند. استفاده از انیمیشن های ضمنی مانند AnimatedContainer و همچنین انیمیشن های سفارشی را پوشش می دهد. برخی از تکنیک‌ها را برای تقویت جلوه‌های انیمیشن معرفی کرد و اهمیت حفظ تمرکز در طول انتقال مسیر با انیمیشن‌های Hero برجسته شده است. علاوه بر این، انتقال مسیرهای سفارشی را می توان پیاده سازی کرد و به توسعه دهندگان یک جعبه ابزار جامع برای زنده کردن برنامه های خود با انیمیشن های جذاب ارائه می دهد.",
            },
        },
        // 15
        {
            "ChapterName": "Working with JSON and other formats",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on working with JSON and other data formats like XML in Flutter. It explains how to parse JSON objects, lists, and nested objects effortlessly using code generation tools. The document also covers parsing XML data and building XML strings using packages like xml and XmlDocument. Additionally, it highlights the benefits of using code generation for parsing complex objects to reduce manual effort and improve code maintenance.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Arbeit mit JSON und anderen Datenformaten wie XML in Flutter. Es erklärt, wie man JSON-Objekte, Listen und verschachtelte Objekte mühelos mithilfe von Codegenerierungstools analysiert. Das Dokument behandelt auch die Analyse von XML-Daten und die Erstellung von XML-Zeichenfolgen mithilfe von Paketen wie xml und XmlDocument. Darüber hinaus werden die Vorteile der Verwendung der Codegenerierung zur Analyse komplexer Objekte hervorgehoben, um den manuellen Aufwand zu reduzieren und die Codewartung zu verbessern.",
                // Chinese
                "中国人": "本章重点介绍如何在 Flutter 中使用 JSON 和其他数据格式（如 XML）。它解释了如何使用代码生成工具轻松解析 JSON 对象、列表和嵌套对象。该文档还介绍了如何使用 xml 和 XmlDocument 等包解析 XML 数据和构建 XML 字符串。此外，它还强调了使用代码生成解析复杂对象的好处，以减少手动工作量并改善代码维护。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется работе с JSON и другими форматами данных, такими как XML, во Flutter. В нем объясняется, как легко анализировать объекты, списки и вложенные объекты JSON с помощью инструментов генерации кода. В документе также рассматривается анализ данных XML и построение строк XML с использованием таких пакетов, как xml и XmlDocument. Кроме того, в нем подчеркиваются преимущества использования генерации кода для анализа сложных объектов, позволяющие сократить ручные усилия и улучшить обслуживание кода.",
                // French
                "Français": "Ce chapitre se concentre sur l'utilisation de JSON et d'autres formats de données comme XML dans Flutter. Il explique comment analyser facilement des objets JSON, des listes et des objets imbriqués à l'aide d'outils de génération de code. Le document couvre également l'analyse des données XML et la création de chaînes XML à l'aide de packages tels que XML et XmlDocument. De plus, il met en évidence les avantages de l'utilisation de la génération de code pour analyser des objets complexes afin de réduire l'effort manuel et d'améliorer la maintenance du code.",
                // Japanese
                "日本語": "この章では、Flutter で JSON や XML などの他のデータ形式を扱うことに焦点を当てています。コード生成ツールを使用して、JSON オブジェクト、リスト、ネストされたオブジェクトを簡単に解析する方法について説明します。また、このドキュメントでは、xml や XmlDocument などのパッケージを使用して XML データを解析し、XML 文字列を構築する方法についても説明します。さらに、複雑なオブジェクトを解析するためにコード生成を使用することで、手作業の労力が減り、コードのメンテナンスが改善される利点についても説明します。",
                // Korean
                "한국인": "이 장에서는 Flutter에서 JSON 및 XML과 같은 기타 데이터 형식을 사용하여 작업하는 데 중점을 둡니다. 코드 생성 도구를 사용하여 JSON 개체, 목록 및 중첩 개체를 쉽게 구문 분석하는 방법을 설명합니다. 또한 이 문서에서는 XML 데이터를 구문 분석하고 xml 및 XmlDocument와 같은 패키지를 사용하여 XML 문자열을 작성하는 방법도 다루고 있습니다. 또한 복잡한 개체를 구문 분석하기 위해 코드 생성을 사용하여 수동 작업을 줄이고 코드 유지 관리를 개선하는 이점을 강조합니다.",
                // Spanish
                "Español": "Este capítulo se centra en trabajar con JSON y otros formatos de datos como XML en Flutter. Explica cómo analizar objetos JSON, listas y objetos anidados sin esfuerzo utilizando herramientas de generación de código. El documento también cubre el análisis de datos XML y la creación de cadenas XML utilizando paquetes como xml y XmlDocument. Además, destaca los beneficios de utilizar la generación de código para analizar objetos complejos para reducir el esfuerzo manual y mejorar el mantenimiento del código.",
                // Hindi
                "हिंदी": "यह अध्याय फ़्लटर में JSON और XML जैसे अन्य डेटा फ़ॉर्मेट के साथ काम करने पर केंद्रित है। यह बताता है कि कोड जनरेशन टूल का उपयोग करके JSON ऑब्जेक्ट, सूचियाँ और नेस्टेड ऑब्जेक्ट को आसानी से कैसे पार्स किया जाए। दस्तावेज़ में XML डेटा को पार्स करना और xml और XmlDocument जैसे पैकेज का उपयोग करके XML स्ट्रिंग बनाना भी शामिल है। इसके अतिरिक्त, यह जटिल ऑब्जेक्ट को पार्स करने के लिए कोड जनरेशन का उपयोग करने के लाभों पर प्रकाश डालता है ताकि मैन्युअल प्रयास को कम किया जा सके और कोड रखरखाव में सुधार किया जा सके।",
                // Portuguese
                "Português": "Este capítulo centra-se no trabalho com JSON e outros formatos de dados como XML no Flutter. Explica como analisar objetos JSON, listas e objetos aninhados sem esforço, utilizando ferramentas de geração de código. O documento aborda também a análise de dados XML e a construção de strings XML utilizando pacotes como xml e XmlDocument. Além disso, destaca os benefícios da utilização da geração de código para analisar objetos complexos para reduzir o esforço manual e melhorar a manutenção do código.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি JSON এবং Flutter-এ XML-এর মতো অন্যান্য ডেটা ফর্ম্যাটের সাথে কাজ করার উপর ফোকাস করে। এটি ব্যাখ্যা করে কিভাবে JSON অবজেক্ট, তালিকা এবং নেস্টেড অবজেক্টগুলিকে অনায়াসে কোড জেনারেশন টুল ব্যবহার করে পার্স করা যায়। ডকুমেন্টটি এক্সএমএল ডেটা পার্সিং এবং এক্সএমএল এবং এক্সএমএল ডকুমেন্টের মতো প্যাকেজগুলি ব্যবহার করে এক্সএমএল স্ট্রিং তৈরি করাও কভার করে। উপরন্তু, এটি ম্যানুয়াল প্রচেষ্টা কমাতে এবং কোড রক্ষণাবেক্ষণ উন্নত করতে জটিল বস্তু পার্স করার জন্য কোড জেনারেশন ব্যবহার করার সুবিধাগুলি হাইলাইট করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على العمل مع JSON وتنسيقات البيانات الأخرى مثل XML في Flutter. يشرح كيفية تحليل كائنات JSON والقوائم والكائنات المتداخلة بسهولة باستخدام أدوات إنشاء التعليمات البرمجية. يغطي المستند أيضًا تحليل بيانات XML وإنشاء سلاسل XML باستخدام حزم مثل xml وXmlDocument. بالإضافة إلى ذلك، فإنه يسلط الضوء على فوائد استخدام إنشاء التعليمات البرمجية لتحليل الكائنات المعقدة لتقليل الجهد اليدوي وتحسين صيانة التعليمات البرمجية.",
                // Persian
                "فارسی": "این فصل بر کار با JSON و سایر فرمت های داده مانند XML در Flutter تمرکز دارد. این توضیح می دهد که چگونه اشیاء، لیست ها و اشیاء تودرتو JSON را با استفاده از ابزارهای تولید کد بدون دردسر تجزیه کنید. این سند همچنین تجزیه داده های XML و ساخت رشته های XML را با استفاده از بسته هایی مانند xml و XmlDocument پوشش می دهد. علاوه بر این، مزایای استفاده از تولید کد برای تجزیه اشیاء پیچیده را برای کاهش تلاش دستی و بهبود نگهداری کد برجسته می‌کند.",
            },
        },
        // 16
        {
            "ChapterName": "Testing and profiling apps",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter discusses the importance of testing and profiling apps for ensuring software quality and performance optimization. It emphasizes the significance of writing tests using testing frameworks to prevent errors from recurring in the future. Additionally, it highlights the benefits of profiling apps to identify and address performance issues.",
                // German
                "Deutsch": "In diesem Kapitel wird die Bedeutung des Testens und Profilierens von Apps zur Sicherstellung der Softwarequalität und Leistungsoptimierung erläutert. Es betont die Bedeutung des Schreibens von Tests mithilfe von Testframeworks, um künftige Fehler zu vermeiden. Darüber hinaus werden die Vorteile des Profilierens von Apps zur Identifizierung und Behebung von Leistungsproblemen hervorgehoben.",
                // Chinese
                "中国人": "本章讨论了测试和分析应用程序对于确保软件质量和性能优化的重要性。它强调了使用测​​试框架编写测试以防止将来再次发生错误的重要性。此外，它还强调了分析应用程序以识别和解决性能问题的好处。",
                // Russian
                "Русский": "В этой главе обсуждается важность тестирования и профилирования приложений для обеспечения качества программного обеспечения и оптимизации производительности. В нем подчеркивается важность написания тестов с использованием сред тестирования для предотвращения повторения ошибок в будущем. Кроме того, в нем подчеркиваются преимущества профилирования приложений для выявления и устранения проблем с производительностью.",
                // French
                "Français": "Ce chapitre traite de l'importance des tests et du profilage des applications pour garantir la qualité des logiciels et l'optimisation des performances. Il souligne l’importance d’écrire des tests à l’aide de frameworks de test pour éviter que des erreurs ne se reproduisent à l’avenir. De plus, il met en évidence les avantages des applications de profilage pour identifier et résoudre les problèmes de performances.",
                // Japanese
                "日本語": "この章では、ソフトウェアの品質とパフォーマンスの最適化を確保するために、アプリのテストとプロファイリングを行うことの重要性について説明します。また、将来的にエラーが再発しないようにするために、テスト フレームワークを使用してテストを記述することの重要性を強調します。さらに、パフォーマンスの問題を特定して対処するためにアプリをプロファイリングすることの利点についても説明します。",
                // Korean
                "한국인": "이 장에서는 소프트웨어 품질과 성능 최적화를 보장하기 위한 앱 테스트 및 프로파일링의 중요성에 대해 설명합니다. 향후 오류가 반복되는 것을 방지하기 위해 테스트 프레임워크를 사용하여 테스트를 작성하는 것의 중요성을 강조합니다. 또한 성능 문제를 식별하고 해결하기 위한 앱 프로파일링의 이점을 강조합니다.",
                // Spanish
                "Español": "Este capítulo analiza la importancia de probar y crear perfiles de aplicaciones para garantizar la calidad del software y la optimización del rendimiento. Enfatiza la importancia de escribir pruebas utilizando marcos de prueba para evitar que se repitan errores en el futuro. Además, destaca los beneficios de crear perfiles de aplicaciones para identificar y abordar problemas de rendimiento.",
                // Hindi
                "हिंदी": "यह अध्याय सॉफ़्टवेयर की गुणवत्ता और प्रदर्शन अनुकूलन सुनिश्चित करने के लिए ऐप्स के परीक्षण और प्रोफाइलिंग के महत्व पर चर्चा करता है। यह भविष्य में त्रुटियों की पुनरावृत्ति को रोकने के लिए परीक्षण ढाँचों का उपयोग करके परीक्षण लिखने के महत्व पर जोर देता है। इसके अतिरिक्त, यह प्रदर्शन समस्याओं की पहचान करने और उन्हें संबोधित करने के लिए ऐप्स की प्रोफाइलिंग के लाभों पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo discute a importância de testar e criar perfis de aplicações para garantir a qualidade do software e a otimização do desempenho. Realça a importância de escrever testes utilizando estruturas de teste para evitar a recorrência de erros no futuro. Além disso, destaca os benefícios da criação de perfis de aplicações para identificar e resolver problemas de desempenho.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে সফ্টওয়্যার গুণমান এবং কর্মক্ষমতা অপ্টিমাইজেশান নিশ্চিত করার জন্য পরীক্ষা এবং প্রোফাইলিং অ্যাপের গুরুত্ব নিয়ে আলোচনা করা হয়েছে। এটি ভবিষ্যতের পুনরাবৃত্তি থেকে ত্রুটিগুলি প্রতিরোধ করার জন্য পরীক্ষার কাঠামো ব্যবহার করে পরীক্ষা লেখার তাত্পর্যের উপর জোর দেয়। উপরন্তু, এটি পারফরম্যান্স সমস্যাগুলি সনাক্ত করতে এবং মোকাবেলা করার জন্য প্রোফাইলিং অ্যাপগুলির সুবিধাগুলি হাইলাইট করে৷",
                // Arabic
                "عَرَبِيّ": "يناقش هذا الفصل أهمية اختبار التطبيقات وتحليلها لضمان جودة البرامج وتحسين الأداء. ويؤكد على أهمية كتابة الاختبارات باستخدام أطر الاختبار لمنع تكرار الأخطاء في المستقبل. بالإضافة إلى ذلك، فإنه يسلط الضوء على فوائد تطبيقات ملفات التعريف لتحديد مشكلات الأداء ومعالجتها.",
                // Persian
                "فارسی": "این فصل اهمیت آزمایش و پروفایل کردن برنامه ها را برای اطمینان از کیفیت نرم افزار و بهینه سازی عملکرد مورد بحث قرار می دهد. این بر اهمیت نوشتن تست ها با استفاده از چارچوب های تست برای جلوگیری از تکرار خطاها در آینده تأکید می کند. علاوه بر این، مزایای برنامه های پروفایل برای شناسایی و رسیدگی به مشکلات عملکرد را برجسته می کند.",
            },
        },
        // 17
        {
            "ChapterName": "Networking",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter explains how to make HTTP requests in Flutter, covering GET and POST requests, handling responses, and best practices. It introduces the HTTPRequest class for making requests, the FutureBuilder widget for handling asynchronous operations, and recommends using the dio package for more complex networking tasks like file uploads and downloads.",
                // German
                "Deutsch": "In diesem Kapitel wird erläutert, wie Sie HTTP-Anfragen in Flutter stellen. Dabei werden GET- und POST-Anfragen, die Handhabung von Antworten und bewährte Methoden behandelt. Es stellt die HTTPRequest-Klasse zum Stellen von Anfragen und das FutureBuilder-Widget zur Handhabung asynchroner Vorgänge vor. Außerdem wird die Verwendung des dio-Pakets für komplexere Netzwerkaufgaben wie Datei-Uploads und -Downloads empfohlen.",
                // Chinese
                "中国人": "本章介绍如何在 Flutter 中发出 HTTP 请求，涵盖 GET 和 POST 请求、处理响应和最佳实践。它介绍了用于发出请求的 HTTPRequest 类、用于处理异步操作的 FutureBuilder 小部件，并建议使用 dio 包执行更复杂的网络任务，例如文件上传和下载。",
                // Russian
                "Русский": "В этой главе объясняется, как выполнять HTTP-запросы во Flutter, включая запросы GET и POST, обработку ответов и лучшие практики. В нем представлен класс HTTPRequest для выполнения запросов, виджет FutureBuilder для обработки асинхронных операций и рекомендуется использовать пакет dio для более сложных сетевых задач, таких как загрузка и скачивание файлов.",
                // French
                "Français": "Ce chapitre explique comment effectuer des requêtes HTTP dans Flutter, couvrant les requêtes GET et POST, la gestion des réponses et les meilleures pratiques. Il présente la classe HTTPRequest pour effectuer des requêtes, le widget FutureBuilder pour gérer les opérations asynchrones et recommande d'utiliser le package dio pour des tâches réseau plus complexes telles que les téléchargements et les téléchargements de fichiers.",
                // Japanese
                "日本語": "この章では、Flutter で HTTP リクエストを行う方法について、GET リクエストと POST リクエスト、レスポンスの処理、ベスト プラクティスなどについて説明します。リクエストを行うための HTTPRequest クラス、非同期操作を処理するための FutureBuilder ウィジェットを紹介し、ファイルのアップロードやダウンロードなどのより複雑なネットワーク タスクには dio パッケージを使用することを推奨します。",
                // Korean
                "한국인": "이 장에서는 GET 및 POST 요청, 응답 처리 및 모범 사례를 다루면서 Flutter에서 HTTP 요청을 만드는 방법을 설명합니다. 요청을 위한 HTTPRequest 클래스, 비동기 작업을 처리하기 위한 FutureBuilder 위젯을 소개하고 파일 업로드 및 다운로드와 같은 보다 복잡한 네트워킹 작업에는 dio 패키지를 사용할 것을 권장합니다.",
                // Spanish
                "Español": "Este capítulo explica cómo realizar solicitudes HTTP en Flutter, cubriendo solicitudes GET y POST, manejo de respuestas y mejores prácticas. Presenta la clase HTTPRequest para realizar solicitudes, el widget FutureBuilder para manejar operaciones asincrónicas y recomienda usar el paquete dio para tareas de red más complejas, como cargas y descargas de archivos.",
                // Hindi
                "हिंदी": "यह अध्याय फ़्लटर में HTTP अनुरोध बनाने का तरीका बताता है, जिसमें GET और POST अनुरोध, प्रतिक्रियाओं को संभालना और सर्वोत्तम अभ्यास शामिल हैं। यह अनुरोध करने के लिए HTTPRequest क्लास, एसिंक्रोनस संचालन को संभालने के लिए FutureBuilder विजेट का परिचय देता है, और फ़ाइल अपलोड और डाउनलोड जैसे अधिक जटिल नेटवर्किंग कार्यों के लिए dio पैकेज का उपयोग करने की सलाह देता है।",
                // Portuguese
                "Português": "Este capítulo explica como fazer pedidos HTTP no Flutter, abordando os pedidos GET e POST, o tratamento de respostas e as melhores práticas. Apresenta a classe HTTPRequest para fazer pedidos, o widget FutureBuilder para lidar com operações assíncronas e recomenda a utilização do pacote dio para tarefas de rede mais complexas, como uploads e downloads de ficheiros.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ব্যাখ্যা করে যে কীভাবে ফ্লটারে HTTP অনুরোধ করা যায়, GET এবং POST অনুরোধগুলি কভার করা, প্রতিক্রিয়াগুলি পরিচালনা করা এবং সেরা অনুশীলনগুলি। এটি অনুরোধ করার জন্য HTTPRequest ক্লাস, অ্যাসিঙ্ক্রোনাস অপারেশন পরিচালনার জন্য FutureBuilder উইজেট এবং ফাইল আপলোড এবং ডাউনলোডের মতো আরও জটিল নেটওয়ার্কিং কাজের জন্য ডিও প্যাকেজ ব্যবহার করার সুপারিশ করে।",
                // Arabic
                "عَرَبِيّ": "يشرح هذا الفصل كيفية إنشاء طلبات HTTP في Flutter، ويغطي طلبات GET وPOST، والتعامل مع الاستجابات، وأفضل الممارسات. يقدم فئة HTTPRequest لتقديم الطلبات، وعنصر واجهة المستخدم FutureBuilder للتعامل مع العمليات غير المتزامنة، ويوصي باستخدام حزمة dio لمهام الشبكات الأكثر تعقيدًا مثل تحميل الملفات وتنزيلها.",
                // Persian
                "فارسی": "این فصل نحوه ایجاد درخواست‌های HTTP در Flutter را توضیح می‌دهد، درخواست‌های GET و POST، رسیدگی به پاسخ‌ها و بهترین شیوه‌ها را پوشش می‌دهد. کلاس HTTPRequest را برای درخواست‌ها، ویجت FutureBuilder برای مدیریت عملیات ناهمزمان معرفی می‌کند و استفاده از بسته dio را برای کارهای پیچیده‌تر شبکه مانند بارگذاری و دانلود فایل توصیه می‌کند.",
            },
        },
        // 18
        {
            "ChapterName": "Assets, images, and multimedia",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter explains how to manage assets, images, and multimedia in Flutter. It covers declaring assets in the pubspec.yaml file, loading assets using AssetBundle, handling different image sizes for various device pixel ratios, and the benefits of using SVG images for scalability and quality.",
                // German
                "Deutsch": "In diesem Kapitel wird erläutert, wie Sie Assets, Bilder und Multimedia in Flutter verwalten. Es behandelt das Deklarieren von Assets in der Datei pubspec.yaml, das Laden von Assets mit AssetBundle, den Umgang mit unterschiedlichen Bildgrößen für verschiedene Gerätepixelverhältnisse und die Vorteile der Verwendung von SVG-Bildern für Skalierbarkeit und Qualität.",
                // Chinese
                "中国人": "本章介绍如何在 Flutter 中管理资产、图像和多媒体。它涵盖了如何在 pubspec.yaml 文件中声明资产、使用 AssetBundle 加载资产、处理不同设备像素比的不同图像大小，以及使用 SVG 图像对可扩展性和质量的好处。",
                // Russian
                "Русский": "В главе объясняется, как управлять ресурсами, изображениями и мультимедиа во Flutter. В нем рассматривается объявление ресурсов в файле pubspec.yaml, загрузка ресурсов с помощью AssetBundle, обработка изображений разных размеров для различных соотношений пикселей устройства, а также преимущества использования изображений SVG для масштабируемости и качества.",
                // French
                "Français": "Le chapitre explique comment gérer les actifs, les images et le multimédia dans Flutter. Il couvre la déclaration des actifs dans le fichier pubspec.yaml, le chargement des actifs à l'aide d'AssetBundle, la gestion de différentes tailles d'image pour différents ratios de pixels de périphérique et les avantages de l'utilisation d'images SVG pour l'évolutivité et la qualité.",
                // Japanese
                "日本語": "この章では、Flutter でアセット、画像、マルチメディアを管理する方法について説明します。pubspec.yaml ファイルでのアセットの宣言、AssetBundle を使用したアセットの読み込み、さまざまなデバイスのピクセル比に応じたさまざまな画像サイズの処理、スケーラビリティと品質のために SVG 画像を使用する利点について説明します。",
                // Korean
                "한국인": "이 장에서는 Flutter에서 자산, 이미지, 멀티미디어를 관리하는 방법을 설명합니다. pubspec.yaml 파일에서 자산 선언, AssetBundle을 사용한 자산 로드, 다양한 장치 픽셀 비율에 대한 다양한 이미지 크기 처리, 확장성과 품질을 위한 SVG 이미지 사용의 이점을 다룹니다.",
                // Spanish
                "Español": "El capítulo explica cómo administrar activos, imágenes y multimedia en Flutter. Cubre la declaración de activos en el archivo pubspec.yaml, la carga de activos usando AssetBundle, el manejo de diferentes tamaños de imagen para varias proporciones de píxeles del dispositivo y los beneficios de usar imágenes SVG para escalabilidad y calidad.",
                // Hindi
                "हिंदी": "अध्याय में बताया गया है कि फ़्लटर में एसेट्स, इमेज और मल्टीमीडिया को कैसे मैनेज किया जाए। इसमें pubspec.yaml फ़ाइल में एसेट्स घोषित करना, AssetBundle का उपयोग करके एसेट्स लोड करना, विभिन्न डिवाइस पिक्सेल अनुपातों के लिए अलग-अलग इमेज साइज़ को संभालना और स्केलेबिलिटी और गुणवत्ता के लिए SVG इमेज का उपयोग करने के लाभ शामिल हैं।",
                // Portuguese
                "Português": "O capítulo explica como gerir ativos, imagens e multimédia no Flutter. Abrange a declaração de ativos no ficheiro pubspec.yaml, o carregamento de ativos utilizando o AssetBundle, o tratamento de diferentes tamanhos de imagem para várias proporções de pixéis de dispositivos e os benefícios da utilização de imagens SVG para escalabilidade e qualidade.",
                // Bengali
                "বাংলা": "অধ্যায় ব্যাখ্যা করে কিভাবে ফ্লটারে সম্পদ, ছবি এবং মাল্টিমিডিয়া পরিচালনা করতে হয়। এটি pubspec.yaml ফাইলে সম্পদ ঘোষণা করা, AssetBundle ব্যবহার করে সম্পদ লোড করা, বিভিন্ন ডিভাইস পিক্সেল অনুপাতের জন্য বিভিন্ন চিত্রের আকার পরিচালনা করা এবং স্কেলেবিলিটি এবং গুণমানের জন্য SVG ছবি ব্যবহারের সুবিধাগুলি কভার করে৷",
                // Arabic
                "عَرَبِيّ": "يشرح الفصل كيفية إدارة الأصول والصور والوسائط المتعددة في Flutter. ويغطي الإعلان عن الأصول في ملف pubspec.yaml، وتحميل الأصول باستخدام AssetBundle، والتعامل مع أحجام الصور المختلفة لنسب بكسلات الأجهزة المختلفة، وفوائد استخدام صور SVG لقابلية التوسع والجودة.",
                // Persian
                "فارسی": "این فصل نحوه مدیریت دارایی ها، تصاویر و چند رسانه ای در فلاتر را توضیح می دهد. این شامل اعلام دارایی ها در فایل pubspec.yaml، بارگیری دارایی ها با استفاده از AssetBundle، مدیریت اندازه های مختلف تصویر برای نسبت های مختلف پیکسل دستگاه، و مزایای استفاده از تصاویر SVG برای مقیاس پذیری و کیفیت است.",
            },
        },
        // 19
        {
            "ChapterName": "Forms and gestures",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter explains how to create and manage forms in Flutter, including layout adjustments, validation, and data acquisition. It covers using GlobalKey<FormState> for form validation, LayoutBuilder for responsive design, and TextEditingController for handling text input. It also discusses handling keyboard overflow and constraining input length.",
                // German
                "Deutsch": "In diesem Kapitel wird erläutert, wie Sie Formulare in Flutter erstellen und verwalten, einschließlich Layoutanpassungen, Validierung und Datenerfassung. Es behandelt die Verwendung von GlobalKey<FormState> zur Formularvalidierung, LayoutBuilder für responsives Design und TextEditingController zur Verarbeitung von Texteingaben. Außerdem wird der Umgang mit Tastaturüberlauf und die Beschränkung der Eingabelänge erläutert.",
                // Chinese
                "中国人": "本章讲解了如何在 Flutter 中创建和管理表单，包括布局调整、验证和数据获取。它介绍了如何使用 GlobalKey<FormState> 进行表单验证、使用 LayoutBuilder 进行响应式设计以及使用 TextEditingController 处理文本输入。它还讨论了如何处理键盘溢出和限制输入长度。",
                // Russian
                "Русский": "В главе объясняется, как создавать формы и управлять ими во Flutter, включая настройку макета, проверку и сбор данных. В нем рассматривается использование GlobalKey<FormState> для проверки формы, LayoutBuilder для адаптивного дизайна и TextEditingController для обработки ввода текста. Также обсуждается обработка переполнения клавиатуры и ограничение длины ввода.",
                // French
                "Français": "Le chapitre explique comment créer et gérer des formulaires dans Flutter, y compris les ajustements de mise en page, la validation et l'acquisition de données. Il couvre l'utilisation de GlobalKey<FormState> pour la validation de formulaire, de LayoutBuilder pour une conception réactive et de TextEditingController pour la gestion de la saisie de texte. Il aborde également la gestion du débordement du clavier et la limitation de la longueur de saisie.",
                // Japanese
                "日本語": "この章では、レイアウト調整、検証、データ取得など、Flutter でフォームを作成および管理する方法について説明します。フォーム検証用の GlobalKey<FormState>、レスポンシブ デザイン用の LayoutBuilder、テキスト入力の処理用の TextEditingController の使用について説明します。また、キーボード オーバーフローの処理と入力長の制限についても説明します。",
                // Korean
                "한국인": "이 장에서는 레이아웃 조정, 유효성 검사, 데이터 수집을 포함하여 Flutter에서 양식을 만들고 관리하는 방법을 설명합니다. 양식 유효성 검사를 위한 GlobalKey<FormState>, 반응형 디자인을 위한 LayoutBuilder, 텍스트 입력 처리를 위한 TextEditingController 사용을 다룹니다. 또한 키보드 오버플로 처리 및 입력 길이 제한에 대해서도 설명합니다.",
                // Spanish
                "Español": "El capítulo explica cómo crear y administrar formularios en Flutter, incluidos ajustes de diseño, validación y adquisición de datos. Cubre el uso de GlobalKey<FormState> para la validación de formularios, LayoutBuilder para diseño responsivo y TextEditingController para manejar la entrada de texto. También analiza el manejo del desbordamiento del teclado y la limitación de la longitud de entrada.",
                // Hindi
                "हिंदी": "अध्याय में फ़्लटर में फ़ॉर्म बनाने और प्रबंधित करने का तरीका बताया गया है, जिसमें लेआउट समायोजन, सत्यापन और डेटा अधिग्रहण शामिल है। इसमें फ़ॉर्म सत्यापन के लिए GlobalKey<FormState>, रिस्पॉन्सिव डिज़ाइन के लिए LayoutBuilder और टेक्स्ट इनपुट को संभालने के लिए TextEditingController का उपयोग करना शामिल है। इसमें कीबोर्ड ओवरफ़्लो को संभालने और इनपुट लंबाई को सीमित करने पर भी चर्चा की गई है।",
                // Portuguese
                "Português": "O capítulo explica como criar e gerir formulários no Flutter, incluindo ajustes de layout, validação e aquisição de dados. Abrange a utilização de GlobalKey<FormState> para validação de formulários, LayoutBuilder para design responsivo e TextEditingController para lidar com a entrada de texto. Também discute como lidar com o estouro do teclado e restringir o comprimento da entrada.",
                // Bengali
                "বাংলা": "লেআউট সামঞ্জস্য, বৈধতা এবং ডেটা অধিগ্রহণ সহ ফ্লটারে কীভাবে ফর্মগুলি তৈরি এবং পরিচালনা করতে হয় সে অধ্যায়টি ব্যাখ্যা করে। এটি ফর্মের বৈধতার জন্য GlobalKey<FormState>, প্রতিক্রিয়াশীল ডিজাইনের জন্য LayoutBuilder এবং টেক্সট ইনপুট পরিচালনার জন্য TextEditingController ব্যবহার করে। এটি কীবোর্ড ওভারফ্লো পরিচালনা এবং ইনপুট দৈর্ঘ্য সীমাবদ্ধ করার বিষয়েও আলোচনা করে।",
                // Arabic
                "عَرَبِيّ": "يشرح الفصل كيفية إنشاء النماذج وإدارتها في Flutter، بما في ذلك تعديلات التخطيط والتحقق من الصحة والحصول على البيانات. ويغطي استخدام GlobalKey<FormState> للتحقق من صحة النموذج، وLayoutBuilder للتصميم سريع الاستجابة، وTextEditingController للتعامل مع إدخال النص. ويناقش أيضًا التعامل مع تجاوز سعة لوحة المفاتيح وتقييد طول الإدخال.",
                // Persian
                "فارسی": "این فصل نحوه ایجاد و مدیریت فرم‌ها در Flutter را توضیح می‌دهد، از جمله تنظیمات طرح‌بندی، اعتبارسنجی و جمع‌آوری داده‌ها. استفاده از GlobalKey<FormState> برای اعتبارسنجی فرم، LayoutBuilder برای طراحی پاسخگو و TextEditingController برای مدیریت ورودی متن را پوشش می دهد. همچنین در مورد رسیدگی به سرریز صفحه کلید و محدود کردن طول ورودی بحث می کند.",
            },
        },
        // 20
        {
            "ChapterName": "Interacting with the device",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter provides a guide on interacting with device features in Flutter, including taking photos, working with sensors, and geolocation. It explains how to use the camera package to take pictures, initialize the CameraController, and display a live preview using FutureBuilder. It also covers sensor data handling and geolocation setup.",
                // German
                "Deutsch": "Das Kapitel bietet eine Anleitung zur Interaktion mit Gerätefunktionen in Flutter, einschließlich der Aufnahme von Fotos, der Arbeit mit Sensoren und der Geolokalisierung. Es wird erklärt, wie Sie mit dem Kamerapaket Bilder aufnehmen, den CameraController initialisieren und mit FutureBuilder eine Live-Vorschau anzeigen. Es behandelt auch die Handhabung von Sensordaten und die Einrichtung der Geolokalisierung.",
                // Chinese
                "中国人": "本章提供了有关如何在 Flutter 中与设备功能交互的指南，包括拍照、使用传感器和地理定位。它解释了如何使用相机包拍照、初始化 CameraController 以及使用 FutureBuilder 显示实时预览。它还介绍了传感器数据处理和地理定位设置。",
                // Russian
                "Русский": "В главе представлено руководство по взаимодействию с функциями устройства во Flutter, включая съемку фотографий, работу с датчиками и геолокацию. В нем объясняется, как использовать пакет камеры для съемки, инициализации CameraController и отображения предварительного просмотра в реальном времени с помощью FutureBuilder. Он также охватывает обработку данных датчиков и настройку геолокации.",
                // French
                "Français": "Le chapitre fournit un guide sur l'interaction avec les fonctionnalités de l'appareil dans Flutter, notamment la prise de photos, l'utilisation des capteurs et la géolocalisation. Il explique comment utiliser le package Camera pour prendre des photos, initialiser CameraController et afficher un aperçu en direct à l'aide de FutureBuilder. Il couvre également la gestion des données des capteurs et la configuration de la géolocalisation.",
                // Japanese
                "日本語": "この章では、写真撮影、センサーの操作、地理位置情報など、Flutter でデバイス機能を操作する方法についてのガイドを提供します。カメラ パッケージを使用して写真を撮影し、CameraController を初期化し、FutureBuilder を使用してライブ プレビューを表示する方法について説明します。また、センサー データの処理と地理位置情報の設定についても説明します。",
                // Korean
                "한국인": "이 장에서는 사진 촬영, 센서 작업, 위치정보 등 Flutter의 기기 기능과 상호작용하는 방법에 대한 가이드를 제공합니다. 카메라 패키지를 사용하여 사진을 찍고, CameraController를 초기화하고, FutureBuilder를 사용하여 실시간 미리보기를 표시하는 방법을 설명합니다. 또한 센서 데이터 처리 및 지리적 위치 설정도 다룹니다.",
                // Spanish
                "Español": "El capítulo proporciona una guía sobre cómo interactuar con las funciones del dispositivo en Flutter, incluida la toma de fotografías, el trabajo con sensores y la geolocalización. Explica cómo usar el paquete de la cámara para tomar fotografías, inicializar CameraController y mostrar una vista previa en vivo usando FutureBuilder. También cubre el manejo de datos de sensores y la configuración de geolocalización.",
                // Hindi
                "हिंदी": "यह अध्याय फ़्लटर में डिवाइस सुविधाओं के साथ बातचीत करने के बारे में एक गाइड प्रदान करता है, जिसमें फ़ोटो लेना, सेंसर के साथ काम करना और जियोलोकेशन शामिल है। यह बताता है कि फ़ोटो लेने, कैमराकंट्रोलर को इनिशियलाइज़ करने और FutureBuilder का उपयोग करके लाइव पूर्वावलोकन प्रदर्शित करने के लिए कैमरा पैकेज का उपयोग कैसे करें। यह सेंसर डेटा हैंडलिंग और जियोलोकेशन सेटअप को भी कवर करता है।",
                // Portuguese
                "Português": "O capítulo fornece um guia sobre como interagir com as funcionalidades do dispositivo no Flutter, incluindo tirar fotografias, trabalhar com sensores e geolocalização. Explica como utilizar o pacote da câmara para tirar fotografias, inicializar o CameraController e exibir uma visualização ao vivo utilizando o FutureBuilder. Também cobre o manuseamento de dados do sensor e a configuração de geolocalização.",
                // Bengali
                "বাংলা": "অধ্যায়টি ফটো তোলা, সেন্সরগুলির সাথে কাজ করা এবং ভূ-অবস্থান সহ ফ্লটারে ডিভাইসের বৈশিষ্ট্যগুলির সাথে ইন্টারঅ্যাক্ট করার জন্য একটি নির্দেশিকা প্রদান করে৷ এটি ব্যাখ্যা করে কিভাবে ছবি তোলার জন্য ক্যামেরা প্যাকেজ ব্যবহার করতে হয়, CameraController শুরু করতে হয় এবং FutureBuilder ব্যবহার করে একটি লাইভ প্রিভিউ প্রদর্শন করতে হয়। এটি সেন্সর ডেটা হ্যান্ডলিং এবং জিওলোকেশন সেটআপও কভার করে।",
                // Arabic
                "عَرَبِيّ": "يقدم الفصل دليلاً حول التفاعل مع ميزات الجهاز في Flutter، بما في ذلك التقاط الصور، والعمل مع أجهزة الاستشعار، وتحديد الموقع الجغرافي. وهو يشرح كيفية استخدام حزمة الكاميرا لالتقاط الصور، وتهيئة CameraController، وعرض معاينة مباشرة باستخدام FutureBuilder. ويغطي أيضًا معالجة بيانات الاستشعار وإعداد الموقع الجغرافي.",
                // Persian
                "فارسی": "این فصل راهنمای تعامل با ویژگی‌های دستگاه در Flutter، از جمله عکس‌برداری، کار با حسگرها و موقعیت جغرافیایی را ارائه می‌کند. نحوه استفاده از بسته دوربین برای گرفتن عکس، مقداردهی اولیه CameraController و نمایش پیش نمایش زنده با استفاده از FutureBuilder را توضیح می دهد. همچنین مدیریت داده های حسگر و تنظیم موقعیت جغرافیایی را پوشش می دهد.",
            },
        },
        // 21
        {
            "ChapterName": "Widgets showcase",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter showcases a variety of widgets including Material, Cupertino, and community widgets. It introduces Flutter Hooks for more efficient state management in stateful widgets. The chapter also discusses the use of StateNotifier as an alternative to ChangeNotifier for state management. Additionally, it covers the implementation of various widgets like Drawer, BottomNavigationBar, TabBar, Stepper, DataTable, CupertinoDatePicker, CupertinoActionSheet, and CupertinoSegmentedControl, providing insights into their functionalities and usage in Flutter app development.",
                // German
                "Deutsch": "In diesem Kapitel werden verschiedene Widgets vorgestellt, darunter Material-, Cupertino- und Community-Widgets. Es stellt Flutter Hooks für eine effizientere Statusverwaltung in statusbehafteten Widgets vor. Das Kapitel erörtert auch die Verwendung von StateNotifier als Alternative zu ChangeNotifier für die Statusverwaltung. Darüber hinaus behandelt es die Implementierung verschiedener Widgets wie Drawer, BottomNavigationBar, TabBar, Stepper, DataTable, CupertinoDatePicker, CupertinoActionSheet und CupertinoSegmentedControl und bietet Einblicke in ihre Funktionen und Verwendung bei der Entwicklung von Flutter-Apps.",
                // Chinese
                "中国人": "本章展示了各种小部件，包括 Material、Cupertino 和社区小部件。它介绍了 Flutter Hooks，以便在有状态小部件中更有效地管理状态。本章还讨论了使用 StateNotifier 作为 ChangeNotifier 的替代方案进行状态管理。此外，它还介绍了各种小部件的实现，例如 Drawer、BottomNavigationBar、TabBar、Stepper、DataTable、CupertinoDatePicker、CupertinoActionSheet 和 CupertinoSegmentedControl，深入了解了它们在 Flutter 应用开发中的功能和用法。",
                // Russian
                "Русский": "В этой главе представлены различные виджеты, включая виджеты Material, Cupertino и виджеты сообщества. Он представляет Flutter Hooks для более эффективного управления состоянием в виджетах с состоянием. В главе также обсуждается использование StateNotifier в качестве альтернативы ChangeNotifier для управления состоянием. Кроме того, он охватывает реализацию различных виджетов, таких как Drawer, BottomNavigationBar, TabBar, Stepper, DataTable, CupertinoDatePicker, CupertinoActionSheet и CupertinoSegmentedControl, предоставляя представление об их функциях и использовании при разработке приложений Flutter.",
                // French
                "Français": "Ce chapitre présente une variété de widgets, notamment les widgets Material, Cupertino et communautaire. Il introduit Flutter Hooks pour une gestion plus efficace de l'état dans les widgets avec état. Le chapitre traite également de l'utilisation de StateNotifier comme alternative à ChangeNotifier pour la gestion des états. De plus, il couvre la mise en œuvre de divers widgets tels que Drawer, BottomNavigationBar, TabBar, Stepper, DataTable, CupertinoDatePicker, CupertinoActionSheet et CupertinoSegmentedControl, fournissant un aperçu de leurs fonctionnalités et de leur utilisation dans le développement d'applications Flutter.",
                // Japanese
                "日本語": "この章では、Material、Cupertino、コミュニティ ウィジェットなど、さまざまなウィジェットを紹介します。ステートフル ウィジェットでより効率的な状態管理を行うための Flutter Hooks を紹介します。また、状態管理に ChangeNotifier の代わりに StateNotifier を使用する方法についても説明します。さらに、Drawer、BottomNavigationBar、TabBar、Stepper、DataTable、CupertinoDatePicker、CupertinoActionSheet、CupertinoSegmentedControl などのさまざまなウィジェットの実装についても説明し、Flutter アプリ開発におけるそれらの機能と使用方法について詳しく説明します。",
                // Korean
                "한국인": "이 장에서는 Material, Cupertino, 커뮤니티 위젯을 포함한 다양한 위젯을 소개합니다. 상태 저장 위젯에서 보다 효율적인 상태 관리를 위해 Flutter Hooks를 도입했습니다. 또한 이 장에서는 상태 관리를 위해 ChangeNotifier 대신 StateNotifier를 사용하는 방법에 대해 설명합니다. 또한 Drawer, BottomNavigationBar, TabBar, Stepper, DataTable, CupertinoDatePicker, CupertinoActionSheet 및 CupertinoSegmentedControl과 같은 다양한 위젯의 구현을 다루며 Flutter 앱 개발에서 해당 위젯의 기능과 사용법에 대한 통찰력을 제공합니다.",
                // Spanish
                "Español": "Este capítulo muestra una variedad de widgets que incluyen Material, Cupertino y widgets comunitarios. Introduce Flutter Hooks para una gestión del estado más eficiente en widgets con estado. El capítulo también analiza el uso de StateNotifier como alternativa a ChangeNotifier para la gestión del estado. Además, cubre la implementación de varios widgets como Drawer, BottomNavigationBar, TabBar, Stepper, DataTable, CupertinoDatePicker, CupertinoActionSheet y CupertinoSegmentedControl, brindando información sobre sus funcionalidades y uso en el desarrollo de aplicaciones Flutter.",
                // Hindi
                "हिंदी": "यह अध्याय मटेरियल, क्यूपर्टिनो और समुदाय विजेट सहित कई प्रकार के विजेट प्रदर्शित करता है। यह स्टेटफुल विजेट में अधिक कुशल स्टेट मैनेजमेंट के लिए फ़्लटर हुक्स का परिचय देता है। अध्याय स्टेट मैनेजमेंट के लिए चेंजनोटिफ़ायर के विकल्प के रूप में स्टेटनोटिफ़ायर के उपयोग पर भी चर्चा करता है। इसके अतिरिक्त, यह ड्रॉअर, बॉटमनेविगेशनबार, टैबबार, स्टेपर, डेटाटेबल, क्यूपर्टिनोडेटपिकर, क्यूपर्टिनोएक्शनशीट और क्यूपर्टिनोसेगमेंटेडकंट्रोल जैसे विभिन्न विजेट के कार्यान्वयन को कवर करता है, जो फ़्लटर ऐप डेवलपमेंट में उनकी कार्यक्षमता और उपयोग के बारे में जानकारी प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo apresenta uma variedade de widgets, incluindo widgets de Material, Cupertino e comunidade. Apresenta Flutter Hooks para uma gestão de estado mais eficiente em widgets com estado. O capítulo discute também a utilização do StateNotifier como alternativa ao ChangeNotifier para a gestão de estado. Além disso, cobre a implementação de vários widgets como Drawer, BottomNavigationBar, TabBar, Stepper, DataTable, CupertinoDatePicker, CupertinoActionSheet e CupertinoSegmentedControl, fornecendo insights sobre as suas funcionalidades e utilização no desenvolvimento de aplicações Flutter.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ম্যাটেরিয়াল, কিউপারটিনো এবং কমিউনিটি উইজেট সহ বিভিন্ন উইজেট প্রদর্শন করে। এটি রাষ্ট্রীয় উইজেটগুলিতে আরও দক্ষ রাষ্ট্র পরিচালনার জন্য ফ্লাটার হুক প্রবর্তন করে। অধ্যায়ে রাষ্ট্র পরিচালনার জন্য ChangeNotifier-এর বিকল্প হিসেবে StateNotifier-এর ব্যবহার নিয়েও আলোচনা করা হয়েছে। উপরন্তু, এটি বিভিন্ন উইজেট যেমন ড্রয়ার, বটম নেভিগেশনবার, ট্যাববার, স্টেপার, ডেটা টেবল, কিউপারটিনোডেটপিকার, কিউপারটিনোঅ্যাকশনশিট এবং কিউপারটিনো সেগমেন্টেড কন্ট্রোলের বাস্তবায়ন কভার করে, ফ্লটার অ্যাপ ডেভেলপমেন্টে তাদের কার্যকারিতা এবং ব্যবহার সম্পর্কে অন্তর্দৃষ্টি প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يعرض هذا الفصل مجموعة متنوعة من عناصر واجهة المستخدم بما في ذلك عناصر واجهة المستخدم الخاصة بالمواد وكوبرتينو والمجتمع. يقدم Flutter Hooks لإدارة الحالة بشكل أكثر كفاءة في عناصر واجهة المستخدم ذات الحالة. يناقش الفصل أيضًا استخدام StateNotifier كبديل لـ ChangeNotifier لإدارة الحالة. بالإضافة إلى ذلك، فهو يغطي تنفيذ عناصر واجهة المستخدم المختلفة مثل Drawer وBottomNavigationBar وTabBar وStepper وDataTable وCupertinoDatePicker وCupertinoActionSheet وCupertinoSegmentedControl، مما يوفر رؤى حول وظائفها واستخدامها في تطوير تطبيق Flutter.",
                // Persian
                "فارسی": "این فصل انواع ویجت‌ها از جمله مواد، کوپرتینو و ابزارک‌های جامعه را به نمایش می‌گذارد. Flutter Hooks را برای مدیریت کارآمدتر حالت در ویجت های حالت دار معرفی می کند. این فصل همچنین استفاده از StateNotifier را به عنوان جایگزینی برای ChangeNotifier برای مدیریت حالت مورد بحث قرار می دهد. علاوه بر این، اجرای ویجت‌های مختلف مانند Drawer، BottomNavigationBar، TabBar، Stepper، DataTable، CupertinoDatePicker، CupertinoActionSheet و CupertinoSegmentedControl را پوشش می‌دهد و بینش‌هایی در مورد عملکردها و کاربرد آنها در توسعه برنامه Flutter ارائه می‌کند.",
            },
        },
        // 22
        {
            "ChapterName": "Using Firebase with Flutter",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on integrating Firebase with Flutter, specifically utilizing Firebase AdMob for ad banners in Flutter apps. It explains setting up Firebase with Flutter, utilizing Firestore for real-time updates, implementing authentication strategies, and configuring Firebase for Android and iOS platforms. The chapter also delves into using Firestore for safe read/update operations with transactions, sending push notifications through Flutter, and leveraging Firestore's robust backend services for app development.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Integration von Firebase mit Flutter, insbesondere um die Nutzung von Firebase AdMob für Werbebanner in Flutter-Apps. Es erklärt die Einrichtung von Firebase mit Flutter, die Nutzung von Firestore für Echtzeit-Updates, die Implementierung von Authentifizierungsstrategien und die Konfiguration von Firebase für Android- und iOS-Plattformen. Das Kapitel befasst sich auch mit der Nutzung von Firestore für sichere Lese-/Aktualisierungsvorgänge mit Transaktionen, dem Senden von Push-Benachrichtigungen über Flutter und der Nutzung der robusten Backend-Dienste von Firestore für die App-Entwicklung.",
                // Chinese
                "中国人": "本章重点介绍如何将 Firebase 与 Flutter 集成，特别是如何在 Flutter 应用中使用 Firebase AdMob 来投放广告横幅。本章介绍了如何使用 Flutter 设置 Firebase、如何使用 Firestore 进行实时更新、实施身份验证策略以及为 Android 和 iOS 平台配置 Firebase。本章还深入介绍了如何使用 Firestore 通过事务进行安全的读取/更新操作、通过 Flutter 发送推送通知以及利用 Firestore 强大的后端服务进行应用开发。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется интеграции Firebase с Flutter, в частности использованию Firebase AdMob для рекламных баннеров в приложениях Flutter. В нем объясняется настройка Firebase с Flutter, использование Firestore для обновлений в реальном времени, реализация стратегий аутентификации и настройка Firebase для платформ Android и iOS. В главе также рассматривается использование Firestore для безопасных операций чтения/обновления транзакций, отправки push-уведомлений через Flutter и использования надежных серверных служб Firestore для разработки приложений.",
                // French
                "Français": "Ce chapitre se concentre sur l'intégration de Firebase avec Flutter, en particulier sur l'utilisation de Firebase AdMob pour les bannières publicitaires dans les applications Flutter. Il explique la configuration de Firebase avec Flutter, l'utilisation de Firestore pour les mises à jour en temps réel, la mise en œuvre de stratégies d'authentification et la configuration de Firebase pour les plates-formes Android et iOS. Le chapitre aborde également l'utilisation de Firestore pour des opérations de lecture/mise à jour sécurisées avec des transactions, l'envoi de notifications push via Flutter et l'exploitation des services backend robustes de Firestore pour le développement d'applications.",
                // Japanese
                "日本語": "この章では、Firebase と Flutter の統合、特に Flutter アプリの広告バナーに Firebase AdMob を利用することに焦点を当てています。Flutter での Firebase の設定、リアルタイム更新のための Firestore の利用、認証戦略の実装、Android および iOS プラットフォーム向けの Firebase の構成について説明します。また、この章では、トランザクションでの安全な読み取り/更新操作のための Firestore の使用、Flutter を介したプッシュ通知の送信、アプリ開発のための Firestore の堅牢なバックエンド サービスの活用についても詳しく説明します。",
                // Korean
                "한국인": "이 장에서는 Firebase를 Flutter와 통합하는 방법, 특히 Flutter 앱의 광고 배너에 Firebase AdMob을 활용하는 방법에 중점을 둡니다. Flutter로 Firebase를 설정하고, 실시간 업데이트를 위해 Firestore를 활용하고, 인증 전략을 구현하고, Android 및 iOS 플랫폼용으로 Firebase를 구성하는 방법을 설명합니다. 또한 이 장에서는 트랜잭션을 통한 안전한 읽기/업데이트 작업을 위해 Firestore를 사용하고, Flutter를 통해 푸시 알림을 보내고, 앱 개발을 위해 Firestore의 강력한 백엔드 서비스를 활용하는 방법을 살펴봅니다.",
                // Spanish
                "Español": "Este capítulo se centra en la integración de Firebase con Flutter, específicamente en el uso de Firebase AdMob para banners publicitarios en aplicaciones de Flutter. Explica cómo configurar Firebase con Flutter, utilizar Firestore para actualizaciones en tiempo real, implementar estrategias de autenticación y configurar Firebase para plataformas Android e iOS. El capítulo también profundiza en el uso de Firestore para operaciones seguras de lectura/actualización con transacciones, el envío de notificaciones automáticas a través de Flutter y el aprovechamiento de los sólidos servicios backend de Firestore para el desarrollo de aplicaciones.",
                // Hindi
                "हिंदी": "यह अध्याय फ़्लटर के साथ फ़ायरबेस को एकीकृत करने पर केंद्रित है, विशेष रूप से फ़्लटर ऐप में विज्ञापन बैनर के लिए फ़ायरबेस AdMob का उपयोग करना। यह फ़्लटर के साथ फ़ायरबेस को सेट अप करने, रीयल-टाइम अपडेट के लिए फ़ायरस्टोर का उपयोग करने, प्रमाणीकरण रणनीतियों को लागू करने और Android और iOS प्लेटफ़ॉर्म के लिए फ़ायरबेस को कॉन्फ़िगर करने के बारे में बताता है। यह अध्याय लेन-देन के साथ सुरक्षित पढ़ने/अपडेट संचालन के लिए फ़ायरस्टोर का उपयोग करने, फ़्लटर के माध्यम से पुश सूचनाएँ भेजने और ऐप विकास के लिए फ़ायरस्टोर की मज़बूत बैकएंड सेवाओं का लाभ उठाने के बारे में भी बताता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na integração do Firebase com o Flutter, utilizando especificamente o Firebase AdMob para banners de anúncios em aplicações Flutter. Explica a configuração do Firebase com Flutter, a utilização do Firestore para atualizações em tempo real, a implementação de estratégias de autenticação e a configuração do Firebase para as plataformas Android e iOS. O capítulo aborda ainda a utilização do Firestore para operações de leitura/atualização seguras com transações, o envio de notificações push através do Flutter e o aproveitamento dos robustos serviços de back-end do Firestore para o desenvolvimento de aplicações.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি Flutter-এর সাথে Firebase সংহত করার উপর ফোকাস করে, বিশেষ করে Flutter অ্যাপে বিজ্ঞাপন ব্যানারের জন্য Firebase AdMob ব্যবহার করে। এটি ফ্লটারের সাথে ফায়ারবেস সেট আপ করা, রিয়েল-টাইম আপডেটের জন্য ফায়ারস্টোর ব্যবহার করা, প্রমাণীকরণ কৌশল প্রয়োগ করা এবং Android এবং iOS প্ল্যাটফর্মের জন্য Firebase কনফিগার করা ব্যাখ্যা করে। অধ্যায়টি লেনদেনের সাথে নিরাপদ পঠন/আপডেট ক্রিয়াকলাপের জন্য ফায়ারস্টোর ব্যবহার করে, ফ্লটারের মাধ্যমে পুশ বিজ্ঞপ্তি পাঠানো এবং অ্যাপ ডেভেলপমেন্টের জন্য ফায়ারস্টোরের শক্তিশালী ব্যাকএন্ড পরিষেবাগুলিকে কাজে লাগানোর বিষয়েও আলোচনা করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على دمج Firebase مع Flutter، وتحديدًا استخدام Firebase AdMob لإعلانات البانر الإعلانية في تطبيقات Flutter. وهو يشرح إعداد Firebase باستخدام Flutter، واستخدام Firestore للتحديثات في الوقت الفعلي، وتنفيذ إستراتيجيات المصادقة، وتكوين Firebase لمنصات Android وiOS. يتطرق الفصل أيضًا إلى استخدام Firestore لعمليات القراءة/التحديث الآمنة للمعاملات، وإرسال إشعارات الدفع من خلال Flutter، والاستفادة من خدمات الواجهة الخلفية القوية لـ Firestore لتطوير التطبيقات.",
                // Persian
                "فارسی": "این فصل بر ادغام Firebase با Flutter، به طور خاص استفاده از Firebase AdMob برای بنرهای تبلیغاتی در برنامه‌های Flutter تمرکز دارد. راه‌اندازی Firebase با Flutter، استفاده از Firestore برای به‌روزرسانی‌های هم‌زمان، پیاده‌سازی استراتژی‌های احراز هویت، و پیکربندی Firebase برای پلتفرم‌های Android و iOS را توضیح می‌دهد. این فصل همچنین به استفاده از Firestore برای عملیات خواندن/به‌روزرسانی ایمن همراه با تراکنش‌ها، ارسال اعلان‌های فشار از طریق Flutter، و استفاده از خدمات پشتیبانی قوی Firestore برای توسعه برنامه می‌پردازد.",
            },
        },
        // 23
        {
            "ChapterName": "Publishing packages and apps",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on the process of publishing packages and apps in Dart, emphasizing the importance of documenting code effectively using triple slashes. It outlines the steps involved in creating, documenting, reviewing, and publishing packages on pub.dev, providing guidance on maintaining code documentation parallel to the code itself. Additionally, it touches on Continuous Integration and Continuous Delivery (CI/CD) processes, the significance of splash screens for iOS and Android apps, and the use of GitHub Actions for setting up CI/CD workflows in Dart and Flutter projects.",
                // German
                "Deutsch": "In diesem Kapitel geht es um den Prozess der Veröffentlichung von Paketen und Apps in Dart und betont, wie wichtig es ist, Code mithilfe von drei Schrägstrichen effektiv zu dokumentieren. Es beschreibt die Schritte zum Erstellen, Dokumentieren, Überprüfen und Veröffentlichen von Paketen auf pub.dev und bietet Anleitungen zum Verwalten der Codedokumentation parallel zum Code selbst. Darüber hinaus werden Continuous Integration- und Continuous Delivery-Prozesse (CI/CD), die Bedeutung von Begrüßungsbildschirmen für iOS- und Android-Apps und die Verwendung von GitHub Actions zum Einrichten von CI/CD-Workflows in Dart- und Flutter-Projekten behandelt.",
                // Chinese
                "中国人": "本章重点介绍在 Dart 中发布软件包和应用程序的过程，强调使用三斜杠有效记录代码的重要性。它概述了在 pub.dev 上创建、记录、审查和发布软件包所涉及的步骤，并提供了与代码本身并行维护代码文档的指导。此外，它还涉及持续集成和持续交付 (CI/CD) 流程、启动画面对 iOS 和 Android 应用程序的重要性，以及使用 GitHub Actions 在 Dart 和 Flutter 项目中设置 CI/CD 工作流程。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется процессу публикации пакетов и приложений в Dart, при этом подчеркивается важность эффективного документирования кода с использованием тройной косой черты. В нем описываются шаги, необходимые для создания, документирования, проверки и публикации пакетов на pub.dev, а также предоставляются рекомендации по ведению документации по коду параллельно с самим кодом. Кроме того, он затрагивает процессы непрерывной интеграции и непрерывной доставки (CI/CD), значение заставок для приложений iOS и Android, а также использование действий GitHub для настройки рабочих процессов CI/CD в проектах Dart и Flutter.",
                // French
                "Français": "Ce chapitre se concentre sur le processus de publication de packages et d'applications dans Dart, en soulignant l'importance de documenter efficacement le code à l'aide de triples barres obliques. Il décrit les étapes impliquées dans la création, la documentation, la révision et la publication de packages sur pub.dev, fournissant des conseils sur la maintenance de la documentation du code parallèle au code lui-même. De plus, il aborde les processus d'intégration continue et de livraison continue (CI/CD), l'importance des écrans de démarrage pour les applications iOS et Android et l'utilisation des actions GitHub pour configurer les flux de travail CI/CD dans les projets Dart et Flutter.",
                // Japanese
                "日本語": "この章では、Dart でパッケージとアプリを公開するプロセスに焦点を当て、3 つのスラッシュを使用してコードを効果的にドキュメント化することの重要性を強調します。pub.dev でパッケージを作成、ドキュメント化、レビュー、公開する手順の概要を説明し、コード自体と並行してコード ドキュメントを維持するためのガイダンスを提供します。さらに、継続的インテグレーションと継続的デリバリー (CI/CD) プロセス、iOS および Android アプリのスプラッシュ スクリーンの重要性、Dart および Flutter プロジェクトで CI/CD ワークフローを設定するための GitHub Actions の使用についても触れます。",
                // Korean
                "한국인": "이 장에서는 Dart에서 패키지와 앱을 게시하는 프로세스에 중점을 두고 삼중 슬래시를 사용하여 코드를 효과적으로 문서화하는 것의 중요성을 강조합니다. pub.dev에서 패키지 생성, 문서화, 검토 및 게시와 관련된 단계를 간략하게 설명하고 코드 자체와 병행하여 코드 문서를 유지 관리하는 방법에 대한 지침을 제공합니다. 또한 CI/CD(지속적 통합 및 지속적 전달) 프로세스, iOS 및 Android 앱용 스플래시 화면의 중요성, Dart 및 Flutter 프로젝트에서 CI/CD 워크플로 설정을 위한 GitHub Actions 사용에 대해 다룹니다.",
                // Spanish
                "Español": "Este capítulo se centra en el proceso de publicación de paquetes y aplicaciones en Dart, enfatizando la importancia de documentar el código de manera efectiva mediante barras triples. Describe los pasos involucrados en la creación, documentación, revisión y publicación de paquetes en pub.dev, brindando orientación sobre cómo mantener la documentación del código paralela al código mismo. Además, aborda los procesos de integración continua y entrega continua (CI/CD), la importancia de las pantallas de presentación para aplicaciones de iOS y Android, y el uso de acciones de GitHub para configurar flujos de trabajo de CI/CD en proyectos de Dart y Flutter.",
                // Hindi
                "हिंदी": "यह अध्याय डार्ट में पैकेज और ऐप प्रकाशित करने की प्रक्रिया पर ध्यान केंद्रित करता है, ट्रिपल स्लैश का उपयोग करके प्रभावी ढंग से कोड का दस्तावेज़ीकरण करने के महत्व पर जोर देता है। यह pub.dev पर पैकेज बनाने, उनका दस्तावेज़ीकरण करने, समीक्षा करने और प्रकाशित करने में शामिल चरणों की रूपरेखा तैयार करता है, कोड के समानांतर कोड दस्तावेज़ीकरण बनाए रखने पर मार्गदर्शन प्रदान करता है। इसके अतिरिक्त, यह निरंतर एकीकरण और निरंतर वितरण (CI/CD) प्रक्रियाओं, iOS और Android ऐप के लिए स्प्लैश स्क्रीन के महत्व और डार्ट और फ़्लटर प्रोजेक्ट में CI/CD वर्कफ़्लो सेट करने के लिए GitHub क्रियाओं के उपयोग को छूता है।",
                // Portuguese
                "Português": "Este capítulo foca o processo de publicação de pacotes e aplicações no Dart, enfatizando a importância de documentar o código de forma eficaz, utilizando barras triplas. Descreve as etapas envolvidas na criação, documentação, revisão e publicação de pacotes no pub.dev, fornecendo orientações sobre como manter a documentação do código paralela ao próprio código. Além disso, aborda os processos de integração contínua e entrega contínua (CI/CD), a importância dos ecrãs iniciais para aplicações iOS e Android e a utilização de ações do GitHub para configurar fluxos de trabalho de CI/CD em projetos Dart e Flutter.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ডার্টে প্যাকেজ এবং অ্যাপ প্রকাশ করার প্রক্রিয়ার উপর ফোকাস করে, কার্যকরভাবে ট্রিপল স্ল্যাশ ব্যবহার করে ডকুমেন্টিং কোডের গুরুত্বের উপর জোর দেয়। এটি pub.dev-এ প্যাকেজগুলি তৈরি, নথিভুক্তকরণ, পর্যালোচনা এবং প্রকাশের সাথে জড়িত পদক্ষেপগুলির রূপরেখা দেয়, কোডের সমান্তরাল কোড ডকুমেন্টেশন বজায় রাখার বিষয়ে নির্দেশিকা প্রদান করে। উপরন্তু, এটি কন্টিনিউয়াস ইন্টিগ্রেশন এবং কন্টিনিউয়াস ডেলিভারি (CI/CD) প্রক্রিয়া, iOS এবং Android অ্যাপের জন্য স্প্ল্যাশ স্ক্রীনের তাৎপর্য এবং ডার্ট এবং ফ্লাটার প্রোজেক্টে CI/CD ওয়ার্কফ্লো সেট আপ করার জন্য গিটহাব অ্যাকশনের ব্যবহারকে স্পর্শ করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على عملية نشر الحزم والتطبيقات في Dart، مع التركيز على أهمية توثيق التعليمات البرمجية بشكل فعال باستخدام الخطوط المائلة الثلاثية. وهو يوضح الخطوات المتبعة في إنشاء الحزم وتوثيقها ومراجعتها ونشرها على pub.dev، مع توفير إرشادات حول الحفاظ على وثائق التعليمات البرمجية بالتوازي مع التعليمات البرمجية نفسها. بالإضافة إلى ذلك، فإنه يتطرق إلى عمليات التكامل المستمر والتسليم المستمر (CI/CD)، وأهمية شاشات البداية لتطبيقات iOS وAndroid، واستخدام إجراءات GitHub لإعداد سير عمل CI/CD في مشاريع Dart وFlutter.",
                // Persian
                "فارسی": "این فصل بر فرآیند انتشار بسته‌ها و برنامه‌ها در دارت تمرکز دارد و بر اهمیت مستندسازی کد به‌طور مؤثر با استفاده از اسلش‌های سه‌گانه تأکید می‌کند. این به تشریح مراحل مربوط به ایجاد، مستندسازی، بازبینی و انتشار بسته‌ها در pub.dev می‌پردازد و راهنمایی‌هایی را برای نگهداری اسناد کد به موازات خود کد ارائه می‌دهد. علاوه بر این، فرآیندهای یکپارچه سازی مداوم و تحویل مداوم (CI/CD)، اهمیت صفحه نمایش برای برنامه های iOS و Android، و استفاده از GitHub Actions برای تنظیم گردش های کاری CI/CD در پروژه های Dart و Flutter را مورد بررسی قرار می دهد.",
            },
        },
        // 24
        {
            "ChapterName": "Complete Flutter project example",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter provides a comprehensive example of a complete Flutter project focusing on user authentication and login functionality using Firebase. The chapter covers essential aspects such as folder structure organization, state management with blocs, model classes, localization implementation, building UI components, and testing strategies. It emphasizes the importance of writing tests early in the development cycle and offers insights on structuring test folders for better code organization. The chapter showcases the use of repositories, authentication blocs, and widgets to create a seamless user experience while adhering to best practices for code structure and testing efficiency.",
                // German
                "Deutsch": "Dieses Kapitel bietet ein umfassendes Beispiel für ein vollständiges Flutter-Projekt mit Schwerpunkt auf Benutzerauthentifizierung und Anmeldefunktionalität mit Firebase. Das Kapitel behandelt wichtige Aspekte wie die Organisation der Ordnerstruktur, Statusverwaltung mit Blöcken, Modellklassen, Lokalisierungsimplementierung, Erstellen von UI-Komponenten und Teststrategien. Es betont die Bedeutung des Schreibens von Tests zu Beginn des Entwicklungszyklus und bietet Einblicke in die Strukturierung von Testordnern für eine bessere Codeorganisation. Das Kapitel zeigt die Verwendung von Repositories, Authentifizierungsblöcken und Widgets, um ein nahtloses Benutzererlebnis zu schaffen und gleichzeitig Best Practices für Codestruktur und Testeffizienz einzuhalten.",
                // Chinese
                "中国人": "本章提供了一个完整的 Flutter 项目示例，重点介绍使用 Firebase 的用户身份验证和登录功能。本章涵盖了文件夹结构组织、使用 blocs 进行状态管理、模型类、本地化实现、构建 UI 组件和测试策略等重要方面。它强调了在开发周期早期编写测试的重要性，并提供了有关构建测试文件夹以更好地组织代码的见解。本章展示了如何使用存储库、身份验证 blocs 和小部件来创建无缝的用户体验，同时遵循代码结构和测试效率的最佳实践。",
                // Russian
                "Русский": "В этой главе представлен подробный пример полного проекта Flutter, ориентированного на аутентификацию пользователей и функции входа в систему с использованием Firebase. В главе рассматриваются такие важные аспекты, как организация структуры папок, управление состоянием с помощью блоков, классы моделей, реализация локализации, создание компонентов пользовательского интерфейса и стратегии тестирования. Он подчеркивает важность написания тестов на ранних этапах цикла разработки и предлагает идеи по структурированию папок тестов для лучшей организации кода. В главе демонстрируется использование репозиториев, блоков аутентификации и виджетов для обеспечения бесперебойного взаимодействия с пользователем при соблюдении лучших практик в отношении структуры кода и эффективности тестирования.",
                // French
                "Français": "Ce chapitre fournit un exemple complet d'un projet Flutter complet axé sur l'authentification des utilisateurs et la fonctionnalité de connexion à l'aide de Firebase. Le chapitre couvre des aspects essentiels tels que l'organisation de la structure des dossiers, la gestion de l'état avec des blocs, les classes de modèles, la mise en œuvre de la localisation, la création de composants d'interface utilisateur et les stratégies de test. Il souligne l'importance d'écrire des tests dès le début du cycle de développement et offre des informations sur la structuration des dossiers de tests pour une meilleure organisation du code. Le chapitre présente l'utilisation de référentiels, de blocs d'authentification et de widgets pour créer une expérience utilisateur transparente tout en adhérant aux meilleures pratiques en matière de structure de code et d'efficacité des tests.",
                // Japanese
                "日本語": "この章では、Firebase を使用したユーザー認証とログイン機能に焦点を当てた完全な Flutter プロジェクトの包括的な例を示します。この章では、フォルダー構造の編成、ブロックによる状態管理、モデル クラス、ローカリゼーションの実装、UI コンポーネントの構築、テスト戦略などの重要な側面について説明します。開発サイクルの早い段階でテストを記述することの重要性を強調し、コード編成を改善するためのテスト フォルダーの構造化に関する洞察を提供します。この章では、コード構造とテスト効率のベスト プラクティスに準拠しながら、リポジトリ、認証ブロック、ウィジェットを使用してシームレスなユーザー エクスペリエンスを作成する方法を紹介します。",
                // Korean
                "한국인": "이 장에서는 Firebase를 사용한 사용자 인증 및 로그인 기능에 초점을 맞춘 전체 Flutter 프로젝트의 포괄적인 예를 제공합니다. 이 장에서는 폴더 구조 구성, 블록을 사용한 상태 관리, 모델 클래스, 지역화 구현, UI 구성 요소 구축 및 테스트 전략과 같은 필수 측면을 다룹니다. 개발 주기 초기에 테스트 작성의 중요성을 강조하고 더 나은 코드 구성을 위한 테스트 폴더 구조화에 대한 통찰력을 제공합니다. 이 장에서는 리포지토리, 인증 블록 및 위젯을 사용하여 코드 구조 및 테스트 효율성에 대한 모범 사례를 준수하면서 원활한 사용자 경험을 만드는 방법을 보여줍니다.",
                // Spanish
                "Español": "Este capítulo proporciona un ejemplo completo de un proyecto completo de Flutter que se centra en la autenticación de usuarios y la funcionalidad de inicio de sesión mediante Firebase. El capítulo cubre aspectos esenciales como la organización de la estructura de carpetas, la gestión del estado con bloques, las clases de modelos, la implementación de la localización, la creación de componentes de la interfaz de usuario y las estrategias de prueba. Enfatiza la importancia de escribir pruebas en las primeras etapas del ciclo de desarrollo y ofrece información sobre cómo estructurar las carpetas de pruebas para una mejor organización del código. El capítulo muestra el uso de repositorios, bloques de autenticación y widgets para crear una experiencia de usuario perfecta y al mismo tiempo cumplir con las mejores prácticas para la estructura del código y la eficiencia de las pruebas.",
                // Hindi
                "हिंदी": "यह अध्याय फायरबेस का उपयोग करके उपयोगकर्ता प्रमाणीकरण और लॉगिन कार्यक्षमता पर ध्यान केंद्रित करने वाले एक पूर्ण फ़्लटर प्रोजेक्ट का एक व्यापक उदाहरण प्रदान करता है। अध्याय फ़ोल्डर संरचना संगठन, ब्लॉक के साथ राज्य प्रबंधन, मॉडल कक्षाएं, स्थानीयकरण कार्यान्वयन, UI घटकों का निर्माण और परीक्षण रणनीतियों जैसे आवश्यक पहलुओं को शामिल करता है। यह विकास चक्र में प्रारंभिक परीक्षण लिखने के महत्व पर जोर देता है और बेहतर कोड संगठन के लिए परीक्षण फ़ोल्डरों की संरचना पर अंतर्दृष्टि प्रदान करता है। अध्याय कोड संरचना और परीक्षण दक्षता के लिए सर्वोत्तम प्रथाओं का पालन करते हुए एक सहज उपयोगकर्ता अनुभव बनाने के लिए रिपॉजिटरी, प्रमाणीकरण ब्लॉक और विजेट के उपयोग को प्रदर्शित करता है।",
                // Portuguese
                "Português": "Este capítulo fornece um exemplo abrangente de um projeto Flutter completo com foco na autenticação de utilizadores e na funcionalidade de login utilizando o Firebase. O capítulo aborda aspetos essenciais como a organização da estrutura de pastas, a gestão de estado com blocos, as classes de modelo, a implementação de localização, a construção de componentes de UI e as estratégias de teste. Realça a importância de escrever testes no início do ciclo de desenvolvimento e oferece insights sobre a estruturação de pastas de testes para uma melhor organização do código. O capítulo mostra a utilização de repositórios, blocos de autenticação e widgets para criar uma experiência de utilizador perfeita, ao mesmo tempo que segue as melhores práticas para a estrutura de código e eficiência de teste.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ফায়ারবেস ব্যবহার করে ব্যবহারকারীর প্রমাণীকরণ এবং লগইন কার্যকারিতার উপর ফোকাস করে একটি সম্পূর্ণ ফ্লাটার প্রকল্পের একটি বিস্তৃত উদাহরণ প্রদান করে। অধ্যায়টি ফোল্ডার গঠন সংগঠন, ব্লকের সাথে রাষ্ট্র পরিচালনা, মডেল ক্লাস, স্থানীয়করণ বাস্তবায়ন, UI উপাদান নির্মাণ এবং পরীক্ষার কৌশলগুলির মতো প্রয়োজনীয় দিকগুলি কভার করে। এটি উন্নয়ন চক্রের প্রথম দিকে পরীক্ষা লেখার গুরুত্বের উপর জোর দেয় এবং আরও ভাল কোড সংগঠনের জন্য টেস্ট ফোল্ডার গঠনের অন্তর্দৃষ্টি প্রদান করে। অধ্যায়টি কোড স্ট্রাকচার এবং টেস্টিং দক্ষতার জন্য সর্বোত্তম অনুশীলনগুলি মেনে চলার সময় একটি বিরামহীন ব্যবহারকারীর অভিজ্ঞতা তৈরি করতে সংগ্রহস্থল, প্রমাণীকরণ ব্লক এবং উইজেটগুলির ব্যবহার প্রদর্শন করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل مثالاً شاملاً لمشروع Flutter الكامل الذي يركز على مصادقة المستخدم ووظيفة تسجيل الدخول باستخدام Firebase. يغطي الفصل الجوانب الأساسية مثل تنظيم هيكل المجلد، وإدارة الحالة مع الكتل، وفئات النماذج، وتنفيذ الترجمة، وبناء مكونات واجهة المستخدم، واستراتيجيات الاختبار. ويؤكد على أهمية كتابة الاختبارات في وقت مبكر من دورة التطوير ويقدم رؤى حول هيكلة مجلدات الاختبار لتنظيم التعليمات البرمجية بشكل أفضل. يعرض الفصل استخدام المستودعات وكتل المصادقة والأدوات لإنشاء تجربة مستخدم سلسة مع الالتزام بأفضل الممارسات لبنية التعليمات البرمجية وكفاءة الاختبار.",
                // Persian
                "فارسی": "این فصل یک مثال جامع از یک پروژه Flutter کامل با تمرکز بر احراز هویت کاربر و عملکرد ورود به سیستم با استفاده از Firebase ارائه می دهد. این فصل جنبه‌های ضروری مانند سازماندهی ساختار پوشه، مدیریت حالت با بلوک‌ها، کلاس‌های مدل، پیاده‌سازی محلی‌سازی، ساخت اجزای رابط کاربری و استراتژی‌های آزمایش را پوشش می‌دهد. این بر اهمیت نوشتن تست‌ها در اوایل چرخه توسعه تاکید می‌کند و بینش‌هایی در مورد ساختار پوشه‌های تست برای سازماندهی بهتر کد ارائه می‌دهد. این فصل استفاده از مخازن، بلوک‌های احراز هویت، و ویجت‌ها را برای ایجاد یک تجربه کاربری یکپارچه در حالی که به بهترین شیوه‌ها برای ساختار کد و کارایی آزمایش پایبند است، نشان می‌دهد.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "Flutter Complete Reference 2.0 is a comprehensive and practical book that covers all aspects of Dart and Flutter development. It is written by Alberto Miola, a professional Flutter developer and instructor. The book is suitable for beginners and experienced developers alike, as it provides clear explanations, examples, and tips for each topic.",
            // German
            "Deutsch": "Flutter Complete Reference 2.0 ist ein umfassendes und praktisches Buch, das alle Aspekte der Dart- und Flutter-Entwicklung abdeckt. Es wurde von Alberto Miola geschrieben, einem professionellen Flutter-Entwickler und -Lehrer. Das Buch ist sowohl für Anfänger als auch für erfahrene Entwickler geeignet, da es klare Erklärungen, Beispiele und Tipps zu jedem Thema bietet.",
            // Chinese
            "中国人": "Flutter Complete Reference 2.0 是一本全面实用的书，涵盖了 Dart 和 Flutter 开发的各个方面。它由专业的 Flutter 开发人员和讲师 Alberto Miola 撰写。这本书适合初学者和经验丰富的开发人员，因为它为每个主题提供了清晰的解释、示例和提示。",
            // Russian
            "Русский": "Flutter Complete Reference 2.0 — это всеобъемлющая и практическая книга, охватывающая все аспекты разработки Dart и Flutter. Он написан Альберто Миолой, профессиональным разработчиком и инструктором Flutter. Книга подойдет как новичкам, так и опытным разработчикам, поскольку содержит понятные объяснения, примеры и советы по каждой теме.",
            // French
            "Français": "Flutter Complete Reference 2.0 est un livre complet et pratique qui couvre tous les aspects du développement de Dart et Flutter. Il est écrit par Alberto Miola, développeur et instructeur professionnel Flutter. Le livre convient aussi bien aux développeurs débutants qu'aux développeurs expérimentés, car il fournit des explications claires, des exemples et des conseils pour chaque sujet.",
            // Japanese
            "日本語": "Flutter Complete Reference 2.0 は、Dart および Flutter 開発のあらゆる側面を網羅した包括的かつ実用的な書籍です。プロの Flutter 開発者兼インストラクターである Alberto Miola によって執筆されています。各トピックについて明確な説明、例、ヒントを提供しているため、初心者にも経験豊富な開発者にも適した書籍です。",
            // Korean
            "한국인": "Flutter Complete Reference 2.0은 Dart 및 Flutter 개발의 모든 측면을 다루는 포괄적이고 실용적인 책입니다. Flutter 전문 개발자이자 강사인 Alberto Miola가 작성했습니다. 이 책은 각 주제에 대한 명확한 설명, 예제, 팁을 제공하므로 초보자와 숙련된 개발자 모두에게 적합합니다.",
            // Spanish
            "Español": "Flutter Complete Reference 2.0 es un libro completo y práctico que cubre todos los aspectos del desarrollo de Dart y Flutter. Está escrito por Alberto Miola, un desarrollador e instructor profesional de Flutter. El libro es adecuado tanto para principiantes como para desarrolladores experimentados, ya que proporciona explicaciones claras, ejemplos y consejos para cada tema.",
            // Hindi
            "हिंदी": "फ़्लटर कम्प्लीट रेफरेंस 2.0 एक व्यापक और व्यावहारिक पुस्तक है जो डार्ट और फ़्लटर विकास के सभी पहलुओं को कवर करती है। यह अल्बर्टो मिओला द्वारा लिखी गई है, जो एक पेशेवर फ़्लटर डेवलपर और प्रशिक्षक हैं। यह पुस्तक शुरुआती और अनुभवी डेवलपर्स दोनों के लिए उपयुक्त है, क्योंकि यह प्रत्येक विषय के लिए स्पष्ट स्पष्टीकरण, उदाहरण और सुझाव प्रदान करती है।",
            // Portuguese
            "Português": "Flutter Complete Reference 2.0 é um livro abrangente e prático que cobre todos os aspectos do desenvolvimento do Dart e do Flutter. Foi escrito por Alberto Miola, desenvolvedor e instrutor profissional de Flutter. O livro é adequado tanto para iniciantes quanto para desenvolvedores experientes, pois fornece explicações claras, exemplos e dicas para cada tópico.",
            // Bengali
            "বাংলা": "ফ্লাটার কমপ্লিট রেফারেন্স 2.0 হল একটি ব্যাপক এবং ব্যবহারিক বই যা ডার্ট এবং ফ্লাটার ডেভেলপমেন্টের সমস্ত দিক কভার করে। এটি আলবার্তো মিওলা লিখেছেন, একজন পেশাদার ফ্লাটার বিকাশকারী এবং প্রশিক্ষক৷ বইটি নতুনদের এবং অভিজ্ঞ বিকাশকারীদের জন্য একইভাবে উপযুক্ত, কারণ এটি প্রতিটি বিষয়ের জন্য স্পষ্ট ব্যাখ্যা, উদাহরণ এবং টিপস প্রদান করে।",
            // Arabic
            "عَرَبِيّ": "Flutter Complete Reference 2.0 هو كتاب شامل وعملي يغطي جميع جوانب تطوير Dart وFlutter. تمت كتابته بواسطة ألبرتو ميولا، وهو مطور ومدرب Flutter محترف. الكتاب مناسب للمبتدئين والمطورين ذوي الخبرة على حد سواء، حيث يقدم شروحات وأمثلة ونصائح واضحة لكل موضوع.",
            // Persian
            "فارسی": "Flutter Complete Reference 2.0 یک کتاب جامع و کاربردی است که تمام جنبه های توسعه دارت و فلاتر را پوشش می دهد. این توسط Alberto Miola، توسعه دهنده و مربی حرفه ای Flutter نوشته شده است. این کتاب برای مبتدیان و توسعه دهندگان با تجربه به طور یکسان مناسب است، زیرا توضیحات، مثال ها و نکات روشنی را برای هر موضوع ارائه می دهد.",
        },
        // Paragraph 2
        {
            // English
            "English": "By reading this book, you will learn how to use Flutter to create beautiful, fast, and native apps for any device. You will also master the Dart language and its features, such as generics, collections, async, streams, and isolates. You will explore the Flutter framework and its widgets, state management solutions, animations, navigation, localization, accessibility, and more. You will also learn how to test, deploy, and monetize your Flutter apps, as well as how to interact with platforms, servers, and low-level HTML.",
            // German
            "Deutsch": "In diesem Buch lernen Sie, wie Sie mit Flutter schöne, schnelle und native Apps für jedes Gerät erstellen. Sie beherrschen auch die Sprache Dart und ihre Funktionen wie Generika, Sammlungen, Asynchronität, Streams und Isolate. Sie erkunden das Flutter-Framework und seine Widgets, Lösungen zur Zustandsverwaltung, Animationen, Navigation, Lokalisierung, Zugänglichkeit und mehr. Sie lernen auch, wie Sie Ihre Flutter-Apps testen, bereitstellen und monetarisieren sowie wie Sie mit Plattformen, Servern und Low-Level-HTML interagieren.",
            // Chinese
            "中国人": "通过阅读本书，您将学习如何使用 Flutter 为任何设备创建美观、快速且原生的应用。您还将掌握 Dart 语言及其功能，例如泛型、集合、异步、流和隔离。您将探索 Flutter 框架及其小部件、状态管理解决方案、动画、导航、本地化、可访问性等。您还将学习如何测试、部署和货币化您的 Flutter 应用，以及如何与平台、服务器和低级 HTML 交互。",
            // Russian
            "Русский": "Прочитав эту книгу, вы узнаете, как использовать Flutter для создания красивых, быстрых и нативных приложений для любого устройства. Вы также освоите язык Dart и его функции, такие как дженерики, коллекции, асинхронность, потоки и изоляты. Вы изучите инфраструктуру Flutter и ее виджеты, решения для управления состоянием, анимацию, навигацию, локализацию, специальные возможности и многое другое. Вы также узнаете, как тестировать, развертывать и монетизировать свои приложения Flutter, а также как взаимодействовать с платформами, серверами и низкоуровневым HTML.",
            // French
            "Français": "En lisant ce livre, vous apprendrez à utiliser Flutter pour créer des applications belles, rapides et natives pour n'importe quel appareil. Vous maîtriserez également le langage Dart et ses fonctionnalités, telles que les génériques, les collections, l'async, les flux et les isolats. Vous explorerez le framework Flutter et ses widgets, ses solutions de gestion d'état, ses animations, sa navigation, sa localisation, son accessibilité, etc. Vous apprendrez également comment tester, déployer et monétiser vos applications Flutter, ainsi que comment interagir avec les plates-formes, les serveurs et le HTML de bas niveau.",
            // Japanese
            "日本語": "この本を読むことで、Flutter を使用して、あらゆるデバイス向けの美しく高速なネイティブ アプリを作成する方法を学ぶことができます。また、ジェネリック、コレクション、非同期、ストリーム、分離などの Dart 言語とその機能を習得できます。Flutter フレームワークとそのウィジェット、状態管理ソリューション、アニメーション、ナビゲーション、ローカリゼーション、アクセシビリティなどについて学習します。さらに、Flutter アプリをテスト、展開、収益化する方法、およびプラットフォーム、サーバー、低レベル HTML を操作する方法についても学習します。",
            // Korean
            "한국인": "이 책을 읽으면 Flutter를 사용하여 모든 기기에서 사용할 수 있는 아름답고 빠른 기본 앱을 만드는 방법을 배우게 됩니다. 또한 Dart 언어와 제네릭, 컬렉션, 비동기, 스트림 및 격리와 같은 기능을 익히게 됩니다. Flutter 프레임워크와 해당 위젯, 상태 관리 솔루션, 애니메이션, 탐색, 현지화, 접근성 등을 살펴보겠습니다. 또한 Flutter 앱을 테스트, 배포 및 수익화하는 방법은 물론 플랫폼, 서버 및 하위 수준 HTML과 상호 작용하는 방법도 배우게 됩니다.",
            // Spanish
            "Español": "Al leer este libro, aprenderá cómo usar Flutter para crear aplicaciones hermosas, rápidas y nativas para cualquier dispositivo. También dominará el lenguaje Dart y sus características, como genéricos, colecciones, asíncronos, transmisiones y aislamientos. Explorará el marco Flutter y sus widgets, soluciones de administración de estado, animaciones, navegación, localización, accesibilidad y más. También aprenderá cómo probar, implementar y monetizar sus aplicaciones Flutter, así como también cómo interactuar con plataformas, servidores y HTML de bajo nivel.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़कर, आप सीखेंगे कि किसी भी डिवाइस के लिए सुंदर, तेज़ और मूल ऐप बनाने के लिए फ़्लटर का उपयोग कैसे करें। आप डार्ट भाषा और इसकी विशेषताओं, जैसे कि जेनरिक, संग्रह, एसिंक्रोनस, स्ट्रीम और आइसोलेट्स में भी महारत हासिल करेंगे। आप फ़्लटर फ्रेमवर्क और इसके विजेट, स्टेट मैनेजमेंट सॉल्यूशन, एनिमेशन, नेविगेशन, लोकलाइज़ेशन, एक्सेसिबिलिटी और बहुत कुछ का पता लगाएंगे। आप यह भी सीखेंगे कि अपने फ़्लटर ऐप का परीक्षण, परिनियोजन और मुद्रीकरण कैसे करें, साथ ही प्लेटफ़ॉर्म, सर्वर और निम्न-स्तरीय HTML के साथ कैसे इंटरैक्ट करें।",
            // Portuguese
            "Português": "Ao ler este livro, você aprenderá como usar o Flutter para criar aplicativos bonitos, rápidos e nativos para qualquer dispositivo. Você também dominará a linguagem Dart e seus recursos, como genéricos, coleções, assíncronos, fluxos e isolados. Você explorará a estrutura Flutter e seus widgets, soluções de gerenciamento de estado, animações, navegação, localização, acessibilidade e muito mais. Você também aprenderá como testar, implantar e monetizar seus aplicativos Flutter, bem como interagir com plataformas, servidores e HTML de baixo nível.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার মাধ্যমে, আপনি শিখবেন কিভাবে যেকোন ডিভাইসের জন্য সুন্দর, দ্রুত এবং নেটিভ অ্যাপ তৈরি করতে Flutter ব্যবহার করতে হয়। এছাড়াও আপনি ডার্ট ভাষা এবং এর বৈশিষ্ট্যগুলি যেমন জেনেরিক, সংগ্রহ, অ্যাসিঙ্ক, স্ট্রিম এবং আইসোলেটগুলি আয়ত্ত করতে পারবেন। আপনি ফ্লটার ফ্রেমওয়ার্ক এবং এর উইজেট, স্টেট ম্যানেজমেন্ট সলিউশন, অ্যানিমেশন, নেভিগেশন, স্থানীয়করণ, অ্যাক্সেসযোগ্যতা এবং আরও অনেক কিছু অন্বেষণ করবেন। আপনি কীভাবে আপনার ফ্লাটার অ্যাপগুলি পরীক্ষা, স্থাপন এবং নগদীকরণ করবেন, সেইসাথে প্ল্যাটফর্ম, সার্ভার এবং নিম্ন-স্তরের HTML এর সাথে কীভাবে ইন্টারঅ্যাক্ট করবেন তাও শিখবেন।",
            // Arabic
            "عَرَبِيّ": "من خلال قراءة هذا الكتاب، ستتعلم كيفية استخدام Flutter لإنشاء تطبيقات جميلة وسريعة ومبتكرة لأي جهاز. ستتقن أيضًا لغة Dart وميزاتها، مثل الأدوية العامة والمجموعات وغير المتزامنة والتدفقات والعزلات. سوف تستكشف إطار عمل Flutter وعناصر واجهة المستخدم الخاصة به وحلول إدارة الحالة والرسوم المتحركة والتنقل والترجمة وإمكانية الوصول والمزيد. ستتعلم أيضًا كيفية اختبار تطبيقات Flutter ونشرها وتحقيق الدخل منها، بالإضافة إلى كيفية التفاعل مع الأنظمة الأساسية والخوادم ولغة HTML ذات المستوى المنخفض.",
            // Persian
            "فارسی": "با خواندن این کتاب، یاد خواهید گرفت که چگونه از فلاتر برای ایجاد اپلیکیشن های زیبا، سریع و بومی برای هر دستگاهی استفاده کنید. شما همچنین به زبان دارت و ویژگی‌های آن مانند ژنریک، مجموعه‌ها، همگام‌سازی، جریان‌ها و ایزوله‌ها تسلط خواهید داشت. شما چارچوب Flutter و ویجت‌های آن، راه‌حل‌های مدیریت حالت، انیمیشن‌ها، ناوبری، محلی‌سازی، دسترسی و موارد دیگر را بررسی خواهید کرد. همچنین یاد خواهید گرفت که چگونه برنامه های Flutter خود را آزمایش، استقرار و کسب درآمد کنید و همچنین نحوه تعامل با پلتفرم ها، سرورها و HTML سطح پایین را خواهید آموخت.",
        },
        // Paragraph 3
        {
            // English
            "English": "This book will help you gain a solid understanding of Flutter and its best practices. You will also discover the benefits of using Flutter, such as faster development, native performance, hot reload and hot restart, and a vibrant community. Whether you are new to Flutter or have some experience with it, this book will help you master the skills and knowledge you need to become a successful Flutter developer.",
            // German
            "Deutsch": "Dieses Buch vermittelt Ihnen ein solides Verständnis von Flutter und seinen Best Practices. Sie werden auch die Vorteile von Flutter entdecken, wie schnellere Entwicklung, native Leistung, Hot Reload und Hot Restart sowie eine lebendige Community. Egal, ob Sie neu bei Flutter sind oder bereits Erfahrung damit haben, dieses Buch hilft Ihnen dabei, die Fähigkeiten und Kenntnisse zu erlernen, die Sie benötigen, um ein erfolgreicher Flutter-Entwickler zu werden.",
            // Chinese
            "中国人": "本书将帮助您深入了解 Flutter 及其最佳实践。您还将发现使用 Flutter 的好处，例如更快的开发、原生性能、热重载和热重启以及充满活力的社区。无论您是 Flutter 新手还是有一定使用经验，本书都将帮助您掌握成为成功的 Flutter 开发人员所需的技能和知识。",
            // Russian
            "Русский": "Эта книга поможет вам получить четкое представление о Flutter и его лучших практиках. Вы также откроете для себя преимущества использования Flutter, такие как более быстрая разработка, собственная производительность, горячая перезагрузка и горячий перезапуск, а также активное сообщество. Независимо от того, являетесь ли вы новичком во Flutter или имеете некоторый опыт работы с ним, эта книга поможет вам овладеть навыками и знаниями, необходимыми для того, чтобы стать успешным разработчиком Flutter.",
            // French
            "Français": "Ce livre vous aidera à acquérir une solide compréhension de Flutter et de ses meilleures pratiques. Vous découvrirez également les avantages de l'utilisation de Flutter, tels qu'un développement plus rapide, des performances natives, un rechargement et un redémarrage à chaud, ainsi qu'une communauté dynamique. Que vous soyez nouveau sur Flutter ou que vous en ayez une certaine expérience, ce livre vous aidera à maîtriser les compétences et les connaissances dont vous avez besoin pour devenir un développeur Flutter à succès.",
            // Japanese
            "日本語": "この本は、Flutter とそのベスト プラクティスをしっかりと理解するのに役立ちます。また、開発の高速化、ネイティブ パフォーマンス、ホット リロードとホット リスタート、活気のあるコミュニティなど、Flutter を使用する利点も発見できます。Flutter を初めて使用する場合でも、ある程度の経験がある場合でも、この本は、成功する Flutter 開発者になるために必要なスキルと知識を習得するのに役立ちます。",
            // Korean
            "한국인": "이 책은 Flutter와 Flutter의 모범 사례를 확실하게 이해하는 데 도움이 될 것입니다. 또한 더 빠른 개발, 기본 성능, 핫 리로드 및 핫 리스타트, 활발한 커뮤니티 등 Flutter 사용의 이점을 발견하게 될 것입니다. Flutter를 처음 접하는 사람이든 경험이 있는 사람이든 이 책은 성공적인 Flutter 개발자가 되기 위해 필요한 기술과 지식을 익히는 데 도움이 될 것입니다.",
            // Spanish
            "Español": "Este libro lo ayudará a obtener una comprensión sólida de Flutter y sus mejores prácticas. También descubrirá los beneficios de usar Flutter, como un desarrollo más rápido, rendimiento nativo, recarga y reinicio en caliente y una comunidad vibrante. Ya sea que sea nuevo en Flutter o tenga algo de experiencia con él, este libro lo ayudará a dominar las habilidades y el conocimiento que necesita para convertirse en un desarrollador exitoso de Flutter.",
            // Hindi
            "हिंदी": "यह पुस्तक आपको फ़्लटर और इसके सर्वोत्तम अभ्यासों की ठोस समझ हासिल करने में मदद करेगी। आप फ़्लटर का उपयोग करने के लाभों की भी खोज करेंगे, जैसे तेज़ विकास, मूल प्रदर्शन, हॉट रीलोड और हॉट रीस्टार्ट, और एक जीवंत समुदाय। चाहे आप फ़्लटर के लिए नए हों या इसके साथ कुछ अनुभव रखते हों, यह पुस्तक आपको फ़्लटर डेवलपर बनने के लिए आवश्यक कौशल और ज्ञान में महारत हासिल करने में मदद करेगी।",
            // Portuguese
            "Português": "Este livro o ajudará a obter uma compreensão sólida do Flutter e de suas práticas recomendadas. Você também descobrirá os benefícios de usar o Flutter, como desenvolvimento mais rápido, desempenho nativo, recarga e reinicialização a quente e uma comunidade vibrante. Quer você seja novo no Flutter ou tenha alguma experiência com ele, este livro o ajudará a dominar as habilidades e o conhecimento necessários para se tornar um desenvolvedor Flutter de sucesso.",
            // Bengali
            "বাংলা": "এই বইটি আপনাকে ফ্লটার এবং এর সর্বোত্তম অনুশীলন সম্পর্কে একটি দৃঢ় উপলব্ধি অর্জন করতে সহায়তা করবে। আপনি ফ্লটার ব্যবহারের সুবিধাগুলিও আবিষ্কার করবেন, যেমন দ্রুত বিকাশ, নেটিভ পারফরম্যান্স, হট রিলোড এবং হট রিস্টার্ট এবং একটি প্রাণবন্ত সম্প্রদায়। আপনি ফ্লটারে নতুন হোন বা এর সাথে কিছু অভিজ্ঞতা থাকুক না কেন, এই বইটি আপনাকে একজন সফল ফ্লটার ডেভেলপার হওয়ার জন্য আপনার প্রয়োজনীয় দক্ষতা এবং জ্ঞান আয়ত্ত করতে সাহায্য করবে।",
            // Arabic
            "عَرَبِيّ": "سيساعدك هذا الكتاب على اكتساب فهم قوي لـ Flutter وأفضل ممارساتها. ستكتشف أيضًا فوائد استخدام Flutter، مثل التطوير الأسرع والأداء الأصلي وإعادة التحميل السريع وإعادة التشغيل السريع ومجتمع نابض بالحياة. سواء كنت جديدًا في استخدام Flutter أو لديك بعض الخبرة فيه، سيساعدك هذا الكتاب على إتقان المهارات والمعرفة التي تحتاجها لتصبح مطور Flutter ناجحًا.",
            // Persian
            "فارسی": "این کتاب به شما کمک می کند تا درک کاملی از فلاتر و بهترین شیوه های آن به دست آورید. همچنین مزایای استفاده از Flutter مانند توسعه سریعتر، عملکرد بومی، بارگذاری مجدد داغ و راه اندازی مجدد داغ و یک جامعه پر جنب و جوش را خواهید دید. چه در فلاتر تازه کار باشید و چه تجربه ای در این زمینه داشته باشید، این کتاب به شما کمک می کند تا مهارت ها و دانش لازم برای تبدیل شدن به یک توسعه دهنده موفق فلاتر را به دست آورید.",
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
        document.title = "MHA - " + flutter_complete_reference["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = flutter_complete_reference["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = flutter_complete_reference["TotalDescriptionAboutTheBook"][index][newLanguage];
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