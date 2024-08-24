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
var flutter_complete_guide_maximiluam = {
    "CourseName": "Flutter Complete Reference",
    "ThreeShortDescriptions": {
        // First Paragraph
        "Paragraph-1": {
            // English
            "English": "Flutter & Dart - The Complete Guide, created by instructor Maximilian Schwarzmüller, is a comprehensive online course designed to help students master the Flutter framework and Dart programming language. With over 30 hours of video content, this course covers everything from the basics of Flutter and Dart to advanced topics such as state management, networking, and UI design. Whether you're new to mobile app development or looking to enhance your skills, this course provides a step-by-step guide to building real-world apps using Flutter and Dart.",
            // German
            "Deutsch": "Flutter & Dart – The Complete Guide, erstellt von Dozent Maximilian Schwarzmüller, ist ein umfassender Onlinekurs, der Schülern dabei helfen soll, das Flutter-Framework und die Programmiersprache Dart zu beherrschen. Mit über 30 Stunden Videoinhalt deckt dieser Kurs alles ab, von den Grundlagen von Flutter und Dart bis hin zu fortgeschrittenen Themen wie Zustandsverwaltung, Vernetzung und UI-Design. Egal, ob Sie neu in der Entwicklung mobiler Apps sind oder Ihre Fähigkeiten verbessern möchten, dieser Kurs bietet eine Schritt-für-Schritt-Anleitung zum Erstellen realer Apps mit Flutter und Dart.",
            // Chinese
            "中国人": "Flutter & Dart - 完整指南由讲师 Maximilian Schwarzmüller 创建，是一门全面的在线课程，旨在帮助学生掌握 Flutter 框架和 Dart 编程语言。本课程拥有超过 30 小时的视频内容，涵盖了从 Flutter 和 Dart 的基础知识到状态管理、网络和 UI 设计等高级主题的所有内容。无论您是移动应用开发新手还是希望提高技能，本课程都提供了使用 Flutter 和 Dart 构建真实应用的分步指南。",
            // Russian
            "Русский": "Flutter & Dart - The Complete Guide, созданный инструктором Максимилианом Шварцмюллером, представляет собой комплексный онлайн-курс, призванный помочь студентам освоить фреймворк Flutter и язык программирования Dart. Этот курс, включающий более 30 часов видеоконтента, охватывает все: от основ Flutter и Dart до продвинутых тем, таких как управление состоянием, сетевое взаимодействие и дизайн пользовательского интерфейса. Независимо от того, новичок ли вы в разработке мобильных приложений или хотите улучшить свои навыки, этот курс предоставляет пошаговое руководство по созданию реальных приложений с использованием Flutter и Dart.",
            // French
            "Français": "Flutter & Dart - The Complete Guide, créé par l'instructeur Maximilian Schwarzmüller, est un cours en ligne complet conçu pour aider les étudiants à maîtriser le framework Flutter et le langage de programmation Dart. Avec plus de 30 heures de contenu vidéo, ce cours couvre tout, des bases de Flutter et Dart aux sujets avancés tels que la gestion d'état, la mise en réseau et la conception d'interface utilisateur. Que vous soyez novice en matière de développement d'applications mobiles ou que vous cherchiez à améliorer vos compétences, ce cours fournit un guide étape par étape pour créer des applications concrètes à l'aide de Flutter et Dart.",
            // Japanese
            "日本語": "Flutter & Dart - 完全ガイドは、講師の Maximilian Schwarzmüller が作成した、学生が Flutter フレームワークと Dart プログラミング言語を習得できるように設計された包括的なオンライン コースです。30 時間を超えるビデオ コンテンツを含むこのコースでは、Flutter と Dart の基礎から、状態管理、ネットワーク、UI デザインなどの高度なトピックまで、あらゆる内容が網羅されています。モバイル アプリ開発の初心者でも、スキルの向上を目指している方でも、このコースでは、Flutter と Dart を使用して実際のアプリを構築するためのステップ バイ ステップ ガイドを受講できます。",
            // Korean
            "한국인": "강사 Maximilian Schwarzmüller가 만든 Flutter & Dart - The Complete Guide는 학생들이 Flutter 프레임워크와 Dart 프로그래밍 언어를 마스터하는 데 도움이 되도록 설계된 포괄적인 온라인 과정입니다. 30시간 이상의 비디오 콘텐츠가 있는 이 과정은 Flutter와 Dart의 기본부터 상태 관리, 네트워킹, UI 디자인과 같은 고급 주제까지 모든 것을 다룹니다. 모바일 앱 개발을 처음 접하든 기술을 향상시키고 싶든 이 과정은 Flutter와 Dart를 사용하여 실제 앱을 빌드하는 단계별 가이드를 제공합니다.",
            // Spanish
            "Español": "Flutter & Dart - The Complete Guide, creado por el instructor Maximilian Schwarzmüller, es un curso integral en línea diseñado para ayudar a los estudiantes a dominar el marco Flutter y el lenguaje de programación Dart. Con más de 30 horas de contenido en video, este curso cubre todo, desde los conceptos básicos de Flutter y Dart hasta temas avanzados como administración de estados, redes y diseño de interfaz de usuario. Ya sea que sea nuevo en el desarrollo de aplicaciones móviles o que busque mejorar sus habilidades, este curso proporciona una guía paso a paso para crear aplicaciones del mundo real utilizando Flutter y Dart.",
            // Hindi
            "हिंदी": "फ़्लटर और डार्ट - प्रशिक्षक मैक्सिमिलियन श्वार्जमुलर द्वारा बनाया गया संपूर्ण गाइड, फ़्लटर फ़्रेमवर्क और डार्ट प्रोग्रामिंग भाषा में महारत हासिल करने में छात्रों की मदद करने के लिए डिज़ाइन किया गया एक व्यापक ऑनलाइन कोर्स है। 30 घंटे से ज़्यादा वीडियो कंटेंट के साथ, यह कोर्स फ़्लटर और डार्ट की बुनियादी बातों से लेकर स्टेट मैनेजमेंट, नेटवर्किंग और UI डिज़ाइन जैसे उन्नत विषयों तक सब कुछ कवर करता है। चाहे आप मोबाइल ऐप डेवलपमेंट में नए हों या अपने कौशल को बढ़ाना चाहते हों, यह कोर्स फ़्लटर और डार्ट का उपयोग करके वास्तविक दुनिया के ऐप बनाने के लिए चरण-दर-चरण मार्गदर्शन प्रदान करता है।",
            // Portuguese
            "Português": "Flutter & Dart - The Complete Guide, criado pelo instrutor Maximilian Schwarzmüller, é um curso online abrangente, desenvolvido para ajudar os alunos a dominar a estrutura Flutter e a linguagem de programação Dart. Com mais de 30 horas de conteúdo de vídeo, este curso cobre tudo, desde os conceitos básicos de Flutter e Dart até tópicos avançados, como gestão de estado, redes e design de UI. Quer seja novo no desenvolvimento de aplicações móveis ou esteja à procura de melhorar as suas competências, este curso fornece um guia passo a passo para criar aplicações do mundo real utilizando Flutter e Dart.",
            // Bengali
            "বাংলা": "Flutter & Dart - প্রশিক্ষক Maximilian Schwarzmüller দ্বারা তৈরি সম্পূর্ণ নির্দেশিকা হল একটি ব্যাপক অনলাইন কোর্স যা ছাত্রদের ফ্লাটার ফ্রেমওয়ার্ক এবং ডার্ট প্রোগ্রামিং ভাষা আয়ত্ত করতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। 30 ঘন্টার বেশি ভিডিও সামগ্রী সহ, এই কোর্সটি Flutter এবং Dart-এর মৌলিক বিষয়গুলি থেকে শুরু করে রাষ্ট্রীয় ব্যবস্থাপনা, নেটওয়ার্কিং এবং UI ডিজাইনের মতো উন্নত বিষয়গুলিকে কভার করে৷ আপনি মোবাইল অ্যাপ ডেভেলপমেন্টে নতুন হন বা আপনার দক্ষতা বাড়াতে চান, এই কোর্সটি ফ্লাটার এবং ডার্ট ব্যবহার করে বাস্তব-বিশ্বের অ্যাপ তৈরি করার জন্য ধাপে ধাপে নির্দেশিকা প্রদান করে।",
            // Arabic
            "عَرَبِيّ": "Flutter & Dart - The Complete Guide، الذي أنشأه المدرب Maximilian Schwarzmüller، هو دورة تدريبية شاملة عبر الإنترنت مصممة لمساعدة الطلاب على إتقان إطار عمل Flutter ولغة برمجة Dart. مع أكثر من 30 ساعة من محتوى الفيديو، تغطي هذه الدورة كل شيء من أساسيات Flutter وDart إلى الموضوعات المتقدمة مثل إدارة الحالة والشبكات وتصميم واجهة المستخدم. سواء كنت جديدًا في تطوير تطبيقات الأجهزة المحمولة أو تتطلع إلى تحسين مهاراتك، توفر هذه الدورة دليلًا خطوة بخطوة لبناء تطبيقات العالم الحقيقي باستخدام Flutter وDart.",
            // Persian
            "فارسی": "Flutter & Dart - The Complete Guide که توسط مربی Maximilian Schwarzmüller ایجاد شده است، یک دوره آنلاین جامع است که برای کمک به دانش آموزان در تسلط بر چارچوب فلاتر و زبان برنامه نویسی دارت طراحی شده است. این دوره با بیش از 30 ساعت محتوای ویدیویی، همه چیز را از مبانی فلاتر و دارت گرفته تا موضوعات پیشرفته مانند مدیریت حالت، شبکه و طراحی UI را پوشش می دهد. چه در توسعه اپلیکیشن موبایل تازه کار باشید و چه به دنبال ارتقای مهارت های خود باشید، این دوره راهنمای گام به گام ساخت اپلیکیشن های دنیای واقعی با استفاده از فلاتر و دارت را ارائه می دهد.",
        },
        // Second Paragraph
        "Paragraph-2": {
            // English
            "English": "Throughout the course, Maximilian Schwarzmüller breaks down complex concepts into easy-to-understand explanations and provides hands-on coding exercises to reinforce learning. Students will learn how to create responsive UIs, manage app state effectively, and integrate APIs for data retrieval in their Flutter applications. In addition, the course covers best practices for testing, debugging, and deploying Flutter apps to various platforms, including Android and iOS, making it a valuable resource for aspiring mobile app developers.",
            // German
            "Deutsch": "Während des gesamten Kurses zerlegt Maximilian Schwarzmüller komplexe Konzepte in leicht verständliche Erklärungen und bietet praktische Programmierübungen zur Vertiefung des Gelernten. Die Teilnehmer lernen, wie sie responsive Benutzeroberflächen erstellen, den App-Status effektiv verwalten und APIs zum Datenabruf in ihre Flutter-Anwendungen integrieren. Darüber hinaus behandelt der Kurs Best Practices zum Testen, Debuggen und Bereitstellen von Flutter-Apps auf verschiedenen Plattformen, darunter Android und iOS, und ist damit eine wertvolle Ressource für angehende Entwickler mobiler Apps.",
            // Chinese
            "中国人": "在整个课程中，Maximilian Schwarzmüller 将复杂的概念分解为易于理解的解释，并提供动手编码练习来强化学习。学生将学习如何创建响应式 UI、有效管理应用状态以及在 Flutter 应用程序中集成用于数据检索的 API。此外，该课程还涵盖了测试、调试和将 Flutter 应用部署到各种平台（包括 Android 和 iOS）的最佳实践，使其成为有抱负的移动应用开发者的宝贵资源。",
            // Russian
            "Русский": "На протяжении всего курса Максимилиан Шварцмюллер разбивает сложные концепции на простые для понимания объяснения и дает практические упражнения по кодированию для закрепления знаний. Студенты научатся создавать адаптивные пользовательские интерфейсы, эффективно управлять состоянием приложения и интегрировать API для извлечения данных в свои приложения Flutter. Кроме того, курс охватывает лучшие практики тестирования, отладки и развертывания приложений Flutter на различных платформах, включая Android и iOS, что делает его ценным ресурсом для начинающих разработчиков мобильных приложений.",
            // French
            "Français": "Tout au long du cours, Maximilian Schwarzmüller décompose des concepts complexes en explications faciles à comprendre et propose des exercices de codage pratiques pour renforcer l'apprentissage. Les étudiants apprendront à créer des interfaces utilisateur réactives, à gérer efficacement l'état des applications et à intégrer des API pour la récupération de données dans leurs applications Flutter. En outre, le cours couvre les meilleures pratiques pour tester, déboguer et déployer des applications Flutter sur diverses plates-formes, notamment Android et iOS, ce qui en fait une ressource précieuse pour les développeurs d'applications mobiles en herbe.",
            // Japanese
            "日本語": "コース全体を通して、Maximilian Schwarzmüller は複雑な概念を分かりやすく説明し、学習を強化するための実践的なコーディング演習を提供します。受講者は、レスポンシブな UI の作成方法、アプリの状態を効果的に管理する方法、Flutter アプリケーションでデータ取得用の API を統合する方法を学びます。さらに、このコースでは、Android や iOS などのさまざまなプラットフォームで Flutter アプリをテスト、デバッグ、デプロイするためのベスト プラクティスも取り上げており、モバイル アプリ開発者を目指す人にとって貴重なリソースとなっています。",
            // Korean
            "한국인": "과정 전반에 걸쳐 Maximilian Schwarzmüller는 복잡한 개념을 이해하기 쉬운 설명으로 나누고 학습을 강화하기 위해 실습 코딩 연습을 제공합니다. 학생들은 반응형 UI를 만들고, 앱 상태를 효과적으로 관리하고, Flutter 애플리케이션에서 데이터 검색을 위한 API를 통합하는 방법을 배웁니다. 또한 이 과정에서는 Android 및 iOS를 포함한 다양한 플랫폼에 Flutter 앱을 테스트, 디버깅 및 배포하기 위한 모범 사례를 다루므로 야심 찬 모바일 앱 개발자에게 귀중한 리소스가 됩니다.",
            // Spanish
            "Español": "A lo largo del curso, Maximilian Schwarzmüller desglosa conceptos complejos en explicaciones fáciles de entender y ofrece ejercicios prácticos de codificación para reforzar el aprendizaje. Los estudiantes aprenderán a crear interfaces de usuario responsivas, administrar el estado de la aplicación de manera eficaz e integrar API para la recuperación de datos en sus aplicaciones Flutter. Además, el curso cubre las mejores prácticas para probar, depurar e implementar aplicaciones Flutter en varias plataformas, incluidas Android e iOS, lo que lo convierte en un recurso valioso para los aspirantes a desarrolladores de aplicaciones móviles.",
            // Hindi
            "हिंदी": "पूरे कोर्स के दौरान, मैक्सिमिलियन श्वार्ज़मुलर जटिल अवधारणाओं को आसानी से समझने योग्य व्याख्याओं में तोड़ते हैं और सीखने को सुदृढ़ करने के लिए व्यावहारिक कोडिंग अभ्यास प्रदान करते हैं। छात्र सीखेंगे कि उत्तरदायी UI कैसे बनाएं, ऐप स्थिति को प्रभावी ढंग से प्रबंधित करें और अपने फ़्लटर एप्लिकेशन में डेटा पुनर्प्राप्ति के लिए API को कैसे एकीकृत करें। इसके अलावा, पाठ्यक्रम में एंड्रॉइड और आईओएस सहित विभिन्न प्लेटफ़ॉर्म पर फ़्लटर ऐप के परीक्षण, डिबगिंग और परिनियोजन के लिए सर्वोत्तम अभ्यास शामिल हैं, जो इसे महत्वाकांक्षी मोबाइल ऐप डेवलपर्स के लिए एक मूल्यवान संसाधन बनाता है।",
            // Portuguese
            "Português": "Ao longo do curso, Maximilian Schwarzmüller divide conceitos complexos em explicações fáceis de compreender e fornece exercícios práticos de codificação para reforçar a aprendizagem. Os alunos aprenderão como criar UIs responsivas, gerir o estado da aplicação de forma eficaz e integrar APIs para recuperação de dados nas suas aplicações Flutter. Além disso, o curso aborda as melhores práticas para o teste, depuração e implementação de aplicações Flutter em diversas plataformas, incluindo Android e iOS, tornando-o um recurso valioso para aspirantes a programadores de aplicações móveis.",
            // Bengali
            "বাংলা": "পুরো কোর্স জুড়ে, ম্যাক্সিমিলিয়ান শোয়ার্জমুলার জটিল ধারণাগুলিকে সহজে বোঝার ব্যাখ্যাগুলিতে ভেঙে দেন এবং শেখার জোরদার করার জন্য হাতে-কলমে কোডিং অনুশীলন প্রদান করেন। শিক্ষার্থীরা শিখবে কীভাবে প্রতিক্রিয়াশীল UI তৈরি করতে হয়, অ্যাপের অবস্থা কার্যকরভাবে পরিচালনা করতে হয় এবং তাদের Flutter অ্যাপ্লিকেশনগুলিতে ডেটা পুনরুদ্ধারের জন্য APIগুলিকে সংহত করতে হয়। এছাড়াও, কোর্সটি Android এবং iOS সহ বিভিন্ন প্ল্যাটফর্মে Flutter অ্যাপগুলি পরীক্ষা, ডিবাগিং এবং স্থাপনের জন্য সর্বোত্তম অনুশীলনগুলিকে কভার করে, এটি উচ্চাকাঙ্ক্ষী মোবাইল অ্যাপ বিকাশকারীদের জন্য একটি মূল্যবান সংস্থান করে তোলে৷",
            // Arabic
            "عَرَبِيّ": "خلال الدورة، يقوم Maximilian Schwarzmüller بتقسيم المفاهيم المعقدة إلى تفسيرات سهلة الفهم ويقدم تمارين ترميز عملية لتعزيز التعلم. سيتعلم الطلاب كيفية إنشاء واجهات مستخدم متجاوبة وإدارة حالة التطبيق بشكل فعال ودمج واجهات برمجة التطبيقات لاسترجاع البيانات في تطبيقات Flutter الخاصة بهم. بالإضافة إلى ذلك، تغطي الدورة أفضل الممارسات لاختبار تطبيقات Flutter وتصحيح أخطائها ونشرها على منصات مختلفة، بما في ذلك Android وiOS، مما يجعلها موردًا قيمًا لمطوري تطبيقات الأجهزة المحمولة الطموحين.",
            // Persian
            "فارسی": "در طول دوره، Maximilian Schwarzmüller مفاهیم پیچیده را به توضیحاتی قابل فهم تقسیم می کند و تمرینات کدگذاری عملی را برای تقویت یادگیری ارائه می دهد. دانش‌آموزان یاد خواهند گرفت که چگونه رابط‌های کاربری پاسخگو ایجاد کنند، وضعیت برنامه را به طور موثر مدیریت کنند و APIها را برای بازیابی داده‌ها در برنامه‌های Flutter خود یکپارچه کنند. علاوه بر این، این دوره بهترین روش‌ها را برای آزمایش، اشکال‌زدایی و استقرار برنامه‌های Flutter در پلتفرم‌های مختلف از جمله اندروید و iOS پوشش می‌دهد و آن را به منبعی ارزشمند برای توسعه‌دهندگان مشتاق برنامه‌های موبایل تبدیل می‌کند.",
        },
        // Third Paragraph
        "Paragraph-3": {
            // English
            "English": "By the end of Flutter & Dart - The Complete Guide, students will have the skills and confidence to build their own cross-platform mobile applications using Flutter and Dart. With a practical approach and real-world examples, this course equips learners with the tools they need to succeed in the fast-growing field of mobile app development. Whether you're looking to create your first Flutter app or expand your knowledge of Dart programming, this course is a valuable resource for anyone interested in learning how to build modern, high-quality mobile applications.",
            // German
            "Deutsch": "Am Ende von Flutter & Dart – The Complete Guide verfügen die Teilnehmer über die Fähigkeiten und das Selbstvertrauen, ihre eigenen plattformübergreifenden mobilen Anwendungen mit Flutter und Dart zu erstellen. Mit einem praktischen Ansatz und Beispielen aus der Praxis stattet dieser Kurs die Teilnehmer mit den Tools aus, die sie benötigen, um im schnell wachsenden Bereich der Entwicklung mobiler Apps erfolgreich zu sein. Egal, ob Sie Ihre erste Flutter-App erstellen oder Ihre Kenntnisse der Dart-Programmierung erweitern möchten, dieser Kurs ist eine wertvolle Ressource für alle, die lernen möchten, wie man moderne, hochwertige mobile Anwendungen erstellt.",
            // Chinese
            "中国人": "在完成 Flutter 和 Dart - 完整指南后，学生将具备使用 Flutter 和 Dart 构建自己的跨平台移动应用程序的技能和信心。本课程采用实用方法和真实示例，为学习者提供在快速发展的移动应用开发领域取得成功所需的工具。无论您是想创建第一个 Flutter 应用还是扩展 Dart 编程知识，本课程对于任何有兴趣学习如何构建现代、高质量移动应用程序的人来说都是宝贵的资源。",
            // Russian
            "Русский": "К концу Flutter & Dart - The Complete Guide студенты будут иметь навыки и уверенность для создания собственных кроссплатформенных мобильных приложений с использованием Flutter и Dart. Благодаря практическому подходу и реальным примерам этот курс снабжает учащихся инструментами, необходимыми для успеха в быстрорастущей области разработки мобильных приложений. Независимо от того, хотите ли вы создать свое первое приложение Flutter или расширить свои знания в программировании Dart, этот курс является ценным ресурсом для всех, кто заинтересован в изучении того, как создавать современные высококачественные мобильные приложения.",
            // French
            "Français": "À la fin de Flutter & Dart - The Complete Guide, les étudiants auront les compétences et la confiance nécessaires pour créer leurs propres applications mobiles multiplateformes à l'aide de Flutter et de Dart. Avec une approche pratique et des exemples concrets, ce cours fournit aux apprenants les outils dont ils ont besoin pour réussir dans le domaine en pleine croissance du développement d'applications mobiles. Que vous cherchiez à créer votre première application Flutter ou à approfondir vos connaissances en programmation Dart, ce cours est une ressource précieuse pour toute personne souhaitant apprendre à créer des applications mobiles modernes et de haute qualité.",
            // Japanese
            "日本語": "Flutter & Dart - 完全ガイドを修了すると、受講者は Flutter と Dart を使用して独自のクロスプラットフォーム モバイル アプリケーションを構築するためのスキルと自信を身に付けます。実践的なアプローチと実際の例を取り入れたこのコースでは、急成長しているモバイル アプリ開発の分野で成功するために必要なツールを学習者に提供します。初めての Flutter アプリを作成する場合でも、Dart プログラミングの知識を広げる場合でも、このコースは、最新の高品質のモバイル アプリケーションの構築方法を学びたい人にとって貴重なリソースとなります。",
            // Korean
            "한국인": "Flutter & Dart - The Complete Guide를 마치면 학생들은 Flutter와 Dart를 사용하여 자체 크로스 플랫폼 모바일 애플리케이션을 빌드할 수 있는 기술과 자신감을 갖게 됩니다. 실용적인 접근 방식과 실제 사례를 통해 이 과정은 학습자에게 빠르게 성장하는 모바일 앱 개발 분야에서 성공하는 데 필요한 도구를 제공합니다. 첫 번째 Flutter 앱을 만들거나 Dart 프로그래밍에 대한 지식을 확장하려는 경우 이 과정은 현대적이고 고품질의 모바일 애플리케이션을 빌드하는 방법을 배우는 데 관심이 있는 모든 사람에게 귀중한 리소스입니다.",
            // Spanish
            "Español": "Al finalizar Flutter & Dart - The Complete Guide, los estudiantes tendrán las habilidades y la confianza para crear sus propias aplicaciones móviles multiplataforma utilizando Flutter y Dart. Con un enfoque práctico y ejemplos del mundo real, este curso proporciona a los estudiantes las herramientas que necesitan para tener éxito en el campo de rápido crecimiento del desarrollo de aplicaciones móviles. Ya sea que desee crear su primera aplicación Flutter o ampliar su conocimiento de programación Dart, este curso es un recurso valioso para cualquier persona interesada en aprender a crear aplicaciones móviles modernas y de alta calidad.",
            // Hindi
            "हिंदी": "फ़्लटर और डार्ट - द कम्प्लीट गाइड के अंत तक, छात्रों के पास फ़्लटर और डार्ट का उपयोग करके अपने स्वयं के क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने का कौशल और आत्मविश्वास होगा। व्यावहारिक दृष्टिकोण और वास्तविक दुनिया के उदाहरणों के साथ, यह पाठ्यक्रम शिक्षार्थियों को मोबाइल ऐप विकास के तेज़ी से बढ़ते क्षेत्र में सफल होने के लिए आवश्यक उपकरणों से लैस करता है। चाहे आप अपना पहला फ़्लटर ऐप बनाना चाहते हों या डार्ट प्रोग्रामिंग के अपने ज्ञान का विस्तार करना चाहते हों, यह कोर्स आधुनिक, उच्च-गुणवत्ता वाले मोबाइल एप्लिकेशन बनाने के तरीके सीखने में रुचि रखने वाले किसी भी व्यक्ति के लिए एक मूल्यवान संसाधन है।",
            // Portuguese
            "Português": "No final de Flutter & Dart – The Complete Guide, os alunos terão as competências e a confiança necessárias para criar as suas próprias aplicações móveis multiplataforma utilizando Flutter e Dart. Com uma abordagem prática e exemplos do mundo real, este curso equipa os alunos com as ferramentas necessárias para terem sucesso no campo de rápido crescimento do desenvolvimento de aplicações móveis. Quer pretenda criar a sua primeira aplicação Flutter ou expandir o seu conhecimento de programação Dart, este curso é um recurso valioso para todos os interessados ​​em aprender a criar aplicações móveis modernas e de alta qualidade.",
            // Bengali
            "বাংলা": "Flutter & Dart - The Complete Guide-এর শেষ নাগাদ, ছাত্রদের Flutter এবং Dart ব্যবহার করে তাদের নিজস্ব ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরি করার দক্ষতা এবং আত্মবিশ্বাস থাকবে। একটি ব্যবহারিক পদ্ধতি এবং বাস্তব-বিশ্বের উদাহরণ সহ, এই কোর্সটি শিক্ষার্থীদের মোবাইল অ্যাপ বিকাশের দ্রুত বর্ধনশীল ক্ষেত্রে সফল হওয়ার জন্য প্রয়োজনীয় সরঞ্জামগুলির সাথে সজ্জিত করে৷ আপনি আপনার প্রথম ফ্লাটার অ্যাপ তৈরি করতে চাইছেন বা ডার্ট প্রোগ্রামিং সম্পর্কে আপনার জ্ঞানকে প্রসারিত করতে চাইছেন না কেন, আধুনিক, উচ্চ-মানের মোবাইল অ্যাপ্লিকেশনগুলি কীভাবে তৈরি করতে হয় তা শিখতে আগ্রহী যে কারও জন্য এই কোর্সটি একটি মূল্যবান সম্পদ।",
            // Arabic
            "عَرَبِيّ": "بحلول نهاية دورة Flutter & Dart - The Complete Guide، سيكتسب الطلاب المهارات والثقة اللازمة لبناء تطبيقات جوال متعددة المنصات باستخدام Flutter وDart. من خلال نهج عملي وأمثلة واقعية، تزود هذه الدورة المتعلمين بالأدوات التي يحتاجون إليها للنجاح في مجال تطوير تطبيقات الجوال سريع النمو. سواء كنت تتطلع إلى إنشاء تطبيق Flutter الأول الخاص بك أو توسيع معرفتك ببرمجة Dart، فإن هذه الدورة تعد موردًا قيمًا لأي شخص مهتم بتعلم كيفية بناء تطبيقات جوال حديثة وعالية الجودة.",
            // Persian
            "فارسی": "تا پایان Flutter & Dart - The Complete Guide، دانش‌آموزان مهارت‌ها و اعتماد به نفس لازم را خواهند داشت تا اپلیکیشن‌های موبایل خود را با استفاده از فلاتر و دارت بسازند. این دوره با رویکردی عملی و مثال‌های واقعی، فراگیران را با ابزارهایی که برای موفقیت در زمینه رشد سریع توسعه اپلیکیشن موبایل نیاز دارند، مجهز می‌کند. چه به دنبال ایجاد اولین برنامه فلاتر خود باشید یا دانش خود را در مورد برنامه نویسی دارت گسترش دهید، این دوره یک منبع ارزشمند برای هر کسی است که علاقه مند به یادگیری نحوه ساخت برنامه های موبایل مدرن و با کیفیت است.",
        },
    },
    "InstructorDescriptions": {
        // Paragraph 1
        "Paragraph-1": {
            // English
            "English": "Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.<br> <br> Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!<br> <br> I also build full-stack applications and acquired expert DevOps and cloud computing knowledge - proven by the many AWS certifications I hold (incl. the top-level Solutions Architect Professional certification).<br> <br> As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills.",
            // German
            "Deutsch": "Seit ich mit 12 angefangen habe, habe ich nie aufgeh&ouml;rt, neue Programmierkenntnisse und Sprachen zu lernen. Schon fr&uuml;h habe ich angefangen, Websites f&uuml;r Freunde und auch einfach zum Spa&szlig; zu erstellen. Neben der Webentwicklung habe ich auch Python und andere nicht-webspezifische Sprachen ausprobiert. Diese Leidenschaft hat seitdem angehalten und zu meiner Entscheidung gef&uuml;hrt, als freiberuflicher Webentwickler und Berater zu arbeiten. Der Erfolg und der Spa&szlig;, die ich an diesem Job habe, sind immens und halten diese Leidenschaft wirklich am Leben.<br> <br> Ich habe mit der Webentwicklung im Backend begonnen (PHP mit Laravel, NodeJS, Python) und bin immer mehr zum Frontend-Entwickler geworden, der in vielen Projekten moderne Frameworks wie React, Angular oder VueJS verwendet. Heute liebe ich beide Welten!<br> <br> Ich habe auch Full-Stack-Anwendungen erstellt und mir Expertenwissen in DevOps und Cloud Computing angeeignet &ndash; was durch die vielen AWS-Zertifizierungen, die ich besitze (einschlie&szlig;lich der Zertifizierung &#8222;Solutions Architect Professional&ldquo; auf h&ouml;chstem Niveau), belegt wird.<br> <br> Als autodidaktischer Entwickler hatte ich die M&ouml;glichkeit, meinen Horizont zu erweitern, indem ich Betriebswirtschaft studierte, wo ich einen Master-Abschluss habe. Dadurch konnte ich sowohl in einer gro&szlig;en Strategieberatung als auch in einer Bank arbeiten. W&auml;hrend ich merkte, dass mir die Entwicklung mehr Spa&szlig; macht als diese Bereiche, hat die Zeit in diesem Sektor meine Gesamterfahrung und meine F&auml;higkeiten erheblich verbessert.",
            // Chinese
            "中国人": "&#20174; 12 &#23681;&#24320;&#22987;&#65292;&#25105;&#23601;&#20174;&#26410;&#20572;&#27490;&#23398;&#20064;&#26032;&#30340;&#32534;&#31243;&#25216;&#33021;&#21644;&#35821;&#35328;&#12290;&#19968;&#24320;&#22987;&#65292;&#25105;&#24320;&#22987;&#20026;&#26379;&#21451;&#21019;&#24314;&#32593;&#31449;&#65292;&#20063;&#21482;&#26159;&#20026;&#20102;&#22909;&#29609;&#12290;&#38500;&#20102; Web &#24320;&#21457;&#65292;&#25105;&#36824;&#25506;&#32034;&#20102; Python &#21644;&#20854;&#20182;&#38750; Web &#19987;&#29992;&#35821;&#35328;&#12290;&#36825;&#31181;&#28909;&#24773;&#19968;&#30452;&#25345;&#32493;&#65292;&#24182;&#20419;&#20351;&#25105;&#20915;&#23450;&#25104;&#20026;&#19968;&#21517;&#33258;&#30001; Web &#24320;&#21457;&#20154;&#21592;&#21644;&#39038;&#38382;&#12290;&#25105;&#22312;&#36825;&#20221;&#24037;&#20316;&#20013;&#33719;&#24471;&#30340;&#25104;&#21151;&#21644;&#20048;&#36259;&#26159;&#24040;&#22823;&#30340;&#65292;&#30495;&#27491;&#35753;&#25105;&#30340;&#28909;&#24773;&#20445;&#25345;&#26106;&#30427;&#12290;<br> <br> &#20174;&#21518;&#31471;&#30340; Web &#24320;&#21457;&#24320;&#22987;&#65288;&#20351;&#29992; Laravel&#12289;NodeJS&#12289;Python &#30340; PHP&#65289;&#65292;&#25105;&#20063;&#36234;&#26469;&#36234;&#22810;&#22320;&#25104;&#20026;&#21069;&#31471;&#24320;&#21457;&#20154;&#21592;&#65292;&#22312;&#35768;&#22810;&#39033;&#30446;&#20013;&#20351;&#29992; React&#12289;Angular &#25110; VueJS &#31561;&#29616;&#20195;&#26694;&#26550;&#12290;&#25105;&#29616;&#22312;&#21916;&#27426;&#36825;&#20004;&#20010;&#19990;&#30028;&#65281;<br> <br> &#25105;&#36824;&#26500;&#24314;&#20102;&#20840;&#26632;&#24212;&#29992;&#31243;&#24207;&#24182;&#33719;&#24471;&#20102;&#19987;&#23478;&#32423; DevOps &#21644;&#20113;&#35745;&#31639;&#30693;&#35782; - &#25105;&#25317;&#26377;&#30340;&#35768;&#22810; AWS &#35748;&#35777;&#65288;&#21253;&#25324;&#39030;&#32423;&#35299;&#20915;&#26041;&#26696;&#26550;&#26500;&#24072;&#19987;&#19994;&#35748;&#35777;&#65289;&#35777;&#26126;&#20102;&#36825;&#19968;&#28857;&#12290;<br> <br> &#20316;&#20026;&#19968;&#21517;&#33258;&#23398;&#25104;&#25165;&#30340;&#24320;&#21457;&#20154;&#21592;&#65292;&#25105;&#26377;&#26426;&#20250;&#36890;&#36807;&#23398;&#20064;&#24037;&#21830;&#31649;&#29702;&#26469;&#25299;&#23485;&#25105;&#30340;&#35270;&#37326;&#65292;&#25105;&#25317;&#26377;&#30805;&#22763;&#23398;&#20301;&#12290;&#36825;&#20351;&#25105;&#33021;&#22815;&#22312;&#19968;&#23478;&#22823;&#22411;&#25112;&#30053;&#21672;&#35810;&#20844;&#21496;&#21644;&#19968;&#23478;&#38134;&#34892;&#24037;&#20316;&#12290;&#22312;&#23398;&#20064;&#30340;&#36807;&#31243;&#20013;&#65292;&#25105;&#21457;&#29616;&#25105;&#26356;&#21916;&#27426;&#36825;&#20123;&#39046;&#22495;&#30340;&#21457;&#23637;&#65292;&#22312;&#36825;&#20010;&#39046;&#22495;&#24230;&#36807;&#30340;&#26102;&#38388;&#26497;&#22823;&#22320;&#25552;&#39640;&#20102;&#25105;&#30340;&#25972;&#20307;&#32463;&#39564;&#21644;&#25216;&#33021;&#12290;",
            // Russian
            "Русский": "&#1053;&#1072;&#1095;&#1080;&#1085;&#1072;&#1103; &#1089; 12 &#1083;&#1077;&#1090; &#1103; &#1085;&#1077; &#1087;&#1077;&#1088;&#1077;&#1089;&#1090;&#1072;&#1074;&#1072;&#1083; &#1080;&#1079;&#1091;&#1095;&#1072;&#1090;&#1100; &#1085;&#1086;&#1074;&#1099;&#1077; &#1085;&#1072;&#1074;&#1099;&#1082;&#1080; &#1080; &#1103;&#1079;&#1099;&#1082;&#1080; &#1087;&#1088;&#1086;&#1075;&#1088;&#1072;&#1084;&#1084;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1103;. &#1071; &#1085;&#1072;&#1095;&#1072;&#1083; &#1089;&#1086;&#1079;&#1076;&#1072;&#1074;&#1072;&#1090;&#1100; &#1089;&#1072;&#1081;&#1090;&#1099; &#1076;&#1083;&#1103; &#1076;&#1088;&#1091;&#1079;&#1077;&#1081; &#1080; &#1087;&#1088;&#1086;&#1089;&#1090;&#1086; &#1088;&#1072;&#1076;&#1080; &#1088;&#1072;&#1079;&#1074;&#1083;&#1077;&#1095;&#1077;&#1085;&#1080;&#1103;. &#1055;&#1086;&#1084;&#1080;&#1084;&#1086; &#1074;&#1077;&#1073;-&#1088;&#1072;&#1079;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1080; &#1103; &#1090;&#1072;&#1082;&#1078;&#1077; &#1080;&#1079;&#1091;&#1095;&#1072;&#1083; Python &#1080; &#1076;&#1088;&#1091;&#1075;&#1080;&#1077; &#1103;&#1079;&#1099;&#1082;&#1080;, &#1085;&#1077; &#1087;&#1088;&#1077;&#1076;&#1085;&#1072;&#1079;&#1085;&#1072;&#1095;&#1077;&#1085;&#1085;&#1099;&#1077; &#1090;&#1086;&#1083;&#1100;&#1082;&#1086; &#1076;&#1083;&#1103; &#1074;&#1077;&#1073;-&#1088;&#1072;&#1079;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1080;. &#1069;&#1090;&#1072; &#1089;&#1090;&#1088;&#1072;&#1089;&#1090;&#1100; &#1089;&#1086;&#1093;&#1088;&#1072;&#1085;&#1080;&#1083;&#1072;&#1089;&#1100; &#1080; &#1087;&#1088;&#1080;&#1074;&#1077;&#1083;&#1072; &#1084;&#1077;&#1085;&#1103; &#1082; &#1088;&#1077;&#1096;&#1077;&#1085;&#1080;&#1102; &#1088;&#1072;&#1073;&#1086;&#1090;&#1072;&#1090;&#1100; &#1074;&#1085;&#1077;&#1096;&#1090;&#1072;&#1090;&#1085;&#1099;&#1084; &#1074;&#1077;&#1073;-&#1088;&#1072;&#1079;&#1088;&#1072;&#1073;&#1086;&#1090;&#1095;&#1080;&#1082;&#1086;&#1084; &#1080; &#1082;&#1086;&#1085;&#1089;&#1091;&#1083;&#1100;&#1090;&#1072;&#1085;&#1090;&#1086;&#1084;. &#1059;&#1089;&#1087;&#1077;&#1093; &#1080; &#1091;&#1076;&#1086;&#1074;&#1086;&#1083;&#1100;&#1089;&#1090;&#1074;&#1080;&#1077;, &#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1103; &#1087;&#1086;&#1083;&#1091;&#1095;&#1072;&#1102; &#1086;&#1090; &#1101;&#1090;&#1086;&#1081; &#1088;&#1072;&#1073;&#1086;&#1090;&#1099;, &#1086;&#1075;&#1088;&#1086;&#1084;&#1085;&#1099; &#1080; &#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1087;&#1086;&#1076;&#1076;&#1077;&#1088;&#1078;&#1080;&#1074;&#1072;&#1102;&#1090; &#1101;&#1090;&#1091; &#1089;&#1090;&#1088;&#1072;&#1089;&#1090;&#1100;.<br> <br> &#1053;&#1072;&#1095;&#1072;&#1074; &#1074;&#1077;&#1073;-&#1088;&#1072;&#1079;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1091; &#1085;&#1072; &#1073;&#1101;&#1082;&#1077;&#1085;&#1076;&#1077; (PHP &#1089; Laravel, NodeJS, Python), &#1103; &#1090;&#1072;&#1082;&#1078;&#1077; &#1074;&#1089;&#1077; &#1073;&#1086;&#1083;&#1100;&#1096;&#1077; &#1080; &#1073;&#1086;&#1083;&#1100;&#1096;&#1077; &#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1080;&#1083;&#1089;&#1103; &#1092;&#1088;&#1086;&#1085;&#1090;&#1077;&#1085;&#1076;-&#1088;&#1072;&#1079;&#1088;&#1072;&#1073;&#1086;&#1090;&#1095;&#1080;&#1082;&#1086;&#1084;, &#1080;&#1089;&#1087;&#1086;&#1083;&#1100;&#1079;&#1091;&#1103; &#1089;&#1086;&#1074;&#1088;&#1077;&#1084;&#1077;&#1085;&#1085;&#1099;&#1077; &#1092;&#1088;&#1077;&#1081;&#1084;&#1074;&#1086;&#1088;&#1082;&#1080;, &#1090;&#1072;&#1082;&#1080;&#1077; &#1082;&#1072;&#1082; React, Angular &#1080;&#1083;&#1080; VueJS, &#1074;&#1086; &#1084;&#1085;&#1086;&#1075;&#1080;&#1093; &#1087;&#1088;&#1086;&#1077;&#1082;&#1090;&#1072;&#1093;. &#1057;&#1077;&#1081;&#1095;&#1072;&#1089; &#1084;&#1085;&#1077; &#1085;&#1088;&#1072;&#1074;&#1103;&#1090;&#1089;&#1103; &#1086;&#1073;&#1072; &#1084;&#1080;&#1088;&#1072;!<br> <br> &#1071; &#1090;&#1072;&#1082;&#1078;&#1077; &#1089;&#1086;&#1079;&#1076;&#1072;&#1102; &#1087;&#1086;&#1083;&#1085;&#1086;&#1092;&#1091;&#1085;&#1082;&#1094;&#1080;&#1086;&#1085;&#1072;&#1083;&#1100;&#1085;&#1099;&#1077; &#1087;&#1088;&#1080;&#1083;&#1086;&#1078;&#1077;&#1085;&#1080;&#1103; &#1080; &#1087;&#1088;&#1080;&#1086;&#1073;&#1088;&#1077;&#1083; &#1101;&#1082;&#1089;&#1087;&#1077;&#1088;&#1090;&#1085;&#1099;&#1077; &#1079;&#1085;&#1072;&#1085;&#1080;&#1103; DevOps &#1080; &#1086;&#1073;&#1083;&#1072;&#1095;&#1085;&#1099;&#1093; &#1074;&#1099;&#1095;&#1080;&#1089;&#1083;&#1077;&#1085;&#1080;&#1081;, &#1095;&#1090;&#1086; &#1087;&#1086;&#1076;&#1090;&#1074;&#1077;&#1088;&#1078;&#1076;&#1077;&#1085;&#1086; &#1084;&#1085;&#1086;&#1075;&#1086;&#1095;&#1080;&#1089;&#1083;&#1077;&#1085;&#1085;&#1099;&#1084;&#1080; &#1089;&#1077;&#1088;&#1090;&#1080;&#1092;&#1080;&#1082;&#1072;&#1090;&#1072;&#1084;&#1080; AWS, &#1082;&#1086;&#1090;&#1086;&#1088;&#1099;&#1077; &#1091; &#1084;&#1077;&#1085;&#1103; &#1077;&#1089;&#1090;&#1100; (&#1074;&#1082;&#1083;&#1102;&#1095;&#1072;&#1103; &#1089;&#1077;&#1088;&#1090;&#1080;&#1092;&#1080;&#1082;&#1072;&#1090; Solutions Architect Professional &#1074;&#1099;&#1089;&#1096;&#1077;&#1075;&#1086; &#1091;&#1088;&#1086;&#1074;&#1085;&#1103;).<br> <br> &#1050;&#1072;&#1082; &#1088;&#1072;&#1079;&#1088;&#1072;&#1073;&#1086;&#1090;&#1095;&#1080;&#1082;-&#1089;&#1072;&#1084;&#1086;&#1091;&#1095;&#1082;&#1072;, &#1103; &#1080;&#1084;&#1077;&#1083; &#1074;&#1086;&#1079;&#1084;&#1086;&#1078;&#1085;&#1086;&#1089;&#1090;&#1100; &#1088;&#1072;&#1089;&#1096;&#1080;&#1088;&#1080;&#1090;&#1100; &#1089;&#1074;&#1086;&#1081; &#1082;&#1088;&#1091;&#1075;&#1086;&#1079;&#1086;&#1088;, &#1080;&#1079;&#1091;&#1095;&#1072;&#1103; &#1076;&#1077;&#1083;&#1086;&#1074;&#1086;&#1077; &#1072;&#1076;&#1084;&#1080;&#1085;&#1080;&#1089;&#1090;&#1088;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077;, &#1075;&#1076;&#1077; &#1103; &#1080;&#1084;&#1077;&#1102; &#1089;&#1090;&#1077;&#1087;&#1077;&#1085;&#1100; &#1084;&#1072;&#1075;&#1080;&#1089;&#1090;&#1088;&#1072;. &#1069;&#1090;&#1086; &#1087;&#1086;&#1079;&#1074;&#1086;&#1083;&#1080;&#1083;&#1086; &#1084;&#1085;&#1077; &#1088;&#1072;&#1073;&#1086;&#1090;&#1072;&#1090;&#1100; &#1074; &#1082;&#1088;&#1091;&#1087;&#1085;&#1086;&#1081; &#1089;&#1090;&#1088;&#1072;&#1090;&#1077;&#1075;&#1080;&#1095;&#1077;&#1089;&#1082;&#1086;&#1081; &#1082;&#1086;&#1085;&#1089;&#1072;&#1083;&#1090;&#1080;&#1085;&#1075;&#1086;&#1074;&#1086;&#1081; &#1082;&#1086;&#1084;&#1087;&#1072;&#1085;&#1080;&#1080;, &#1072; &#1090;&#1072;&#1082;&#1078;&#1077; &#1074; &#1073;&#1072;&#1085;&#1082;&#1077;. &#1059;&#1079;&#1085;&#1072;&#1074;, &#1095;&#1090;&#1086; &#1084;&#1085;&#1077; &#1073;&#1086;&#1083;&#1100;&#1096;&#1077; &#1085;&#1088;&#1072;&#1074;&#1080;&#1090;&#1089;&#1103; &#1088;&#1072;&#1079;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1072;, &#1095;&#1077;&#1084; &#1101;&#1090;&#1080; &#1086;&#1073;&#1083;&#1072;&#1089;&#1090;&#1080;, &#1074;&#1088;&#1077;&#1084;&#1103;, &#1087;&#1088;&#1086;&#1074;&#1077;&#1076;&#1077;&#1085;&#1085;&#1086;&#1077; &#1074; &#1101;&#1090;&#1086;&#1084; &#1089;&#1077;&#1082;&#1090;&#1086;&#1088;&#1077;, &#1079;&#1085;&#1072;&#1095;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1091;&#1083;&#1091;&#1095;&#1096;&#1080;&#1083;&#1086; &#1084;&#1086;&#1081; &#1086;&#1073;&#1097;&#1080;&#1081; &#1086;&#1087;&#1099;&#1090; &#1080; &#1085;&#1072;&#1074;&#1099;&#1082;&#1080;.",
            // French
            "Français": "&Agrave; l'&acirc;ge de 12 ans, je n'ai jamais cess&eacute; d'apprendre de nouvelles comp&eacute;tences en programmation et de nouveaux langages. Tr&egrave;s t&ocirc;t, j'ai commenc&eacute; &agrave; cr&eacute;er des sites Web pour des amis et juste pour le plaisir. Outre le d&eacute;veloppement Web, j'ai &eacute;galement explor&eacute; Python et d'autres langages non exclusivement Web. Cette passion a depuis perdur&eacute; et m'a conduit &agrave; d&eacute;cider de travailler en tant que d&eacute;veloppeur et consultant Web ind&eacute;pendant. Le succ&egrave;s et le plaisir que j'ai dans ce travail sont immenses et maintiennent vraiment cette passion en vie.<br> <br> Apr&egrave;s avoir commenc&eacute; le d&eacute;veloppement Web en backend (PHP avec Laravel, NodeJS, Python), je suis &eacute;galement devenu de plus en plus un d&eacute;veloppeur frontend utilisant des frameworks modernes comme React, Angular ou VueJS dans de nombreux projets. J'aime les deux mondes aujourd'hui !<br> <br> Je cr&eacute;e &eacute;galement des applications full-stack et j'ai acquis des connaissances approfondies en DevOps et en cloud computing - prouv&eacute;es par les nombreuses certifications AWS que je d&eacute;tiens (y compris la certification Solutions Architect Professional de haut niveau).<br> <br> En tant que d&eacute;veloppeur autodidacte, j'ai eu la chance d'&eacute;largir mon horizon en &eacute;tudiant l'administration des affaires o&ugrave; je suis titulaire d'un master. Cela m'a permis de travailler dans un grand cabinet de conseil en strat&eacute;gie ainsi que dans une banque. Tout en apprenant que j'appr&eacute;cie davantage le d&eacute;veloppement que ces domaines, le temps pass&eacute; dans ce secteur a grandement am&eacute;lior&eacute; mon exp&eacute;rience et mes comp&eacute;tences globales.",
            // Japanese
            "日本語": "12 &#27507;&#12398;&#12392;&#12365;&#12363;&#12425;&#12289;&#31169;&#12399;&#26032;&#12375;&#12356;&#12503;&#12525;&#12464;&#12521;&#12511;&#12531;&#12464; &#12473;&#12461;&#12523;&#12420;&#35328;&#35486;&#12398;&#23398;&#32722;&#12434;&#27770;&#12375;&#12390;&#12420;&#12417;&#12414;&#12379;&#12435;&#12391;&#12375;&#12383;&#12290;&#24188;&#12356;&#12371;&#12429;&#12363;&#12425;&#12289;&#21451;&#20154;&#12420;&#36259;&#21619;&#12391; Web &#12469;&#12452;&#12488;&#12434;&#20316;&#12426;&#22987;&#12417;&#12414;&#12375;&#12383;&#12290;Web &#38283;&#30330;&#12398;&#12411;&#12363;&#12395;&#12289;Python &#12420;&#12381;&#12398;&#20182;&#12398; Web &#23554;&#29992;&#12391;&#12399;&#12394;&#12356;&#35328;&#35486;&#12418;&#30740;&#31350;&#12375;&#12414;&#12375;&#12383;&#12290;&#12371;&#12398;&#24773;&#29105;&#12399;&#12381;&#12398;&#24460;&#12418;&#32154;&#12365;&#12289;&#12501;&#12522;&#12540;&#12521;&#12531;&#12473;&#12398; Web &#38283;&#30330;&#32773;&#12362;&#12424;&#12403;&#12467;&#12531;&#12469;&#12523;&#12479;&#12531;&#12488;&#12392;&#12375;&#12390;&#20685;&#12367;&#12371;&#12392;&#12434;&#27770;&#24847;&#12375;&#12414;&#12375;&#12383;&#12290;&#12371;&#12398;&#20181;&#20107;&#12391;&#24471;&#12383;&#25104;&#21151;&#12392;&#27005;&#12375;&#12373;&#12399;&#35336;&#12426;&#30693;&#12428;&#12378;&#12289;&#24773;&#29105;&#12434;&#29123;&#12360;&#31435;&#12383;&#12379;&#32154;&#12369;&#12390;&#12356;&#12414;&#12377;&#12290;<br> <br> &#12496;&#12483;&#12463;&#12456;&#12531;&#12489; (Laravel&#12289;NodeJS&#12289;Python &#12434;&#20351;&#29992;&#12375;&#12383; PHP) &#12391; Web &#38283;&#30330;&#12434;&#22987;&#12417;&#12383;&#31169;&#12399;&#12289;React&#12289;Angular&#12289;VueJS &#12394;&#12393;&#12398;&#26368;&#26032;&#12398;&#12501;&#12524;&#12540;&#12512;&#12527;&#12540;&#12463;&#12434;&#22810;&#12367;&#12398;&#12503;&#12525;&#12472;&#12455;&#12463;&#12488;&#12391;&#20351;&#29992;&#12375;&#12390;&#12289;&#12501;&#12525;&#12531;&#12488;&#12456;&#12531;&#12489;&#38283;&#30330;&#32773;&#12392;&#12375;&#12390;&#12418;&#12414;&#12377;&#12414;&#12377;&#27963;&#36493;&#12377;&#12427;&#12424;&#12358;&#12395;&#12394;&#12426;&#12414;&#12375;&#12383;&#12290;&#20170;&#12391;&#12399;&#20001;&#26041;&#12398;&#19990;&#30028;&#12364;&#22823;&#22909;&#12365;&#12391;&#12377;!<br> <br> &#12414;&#12383;&#12289;&#12501;&#12523;&#12473;&#12479;&#12483;&#12463; &#12450;&#12503;&#12522;&#12465;&#12540;&#12471;&#12519;&#12531;&#12434;&#27083;&#31689;&#12375;&#12289;DevOps &#12392;&#12463;&#12521;&#12454;&#12489; &#12467;&#12531;&#12500;&#12517;&#12540;&#12486;&#12451;&#12531;&#12464;&#12398;&#23554;&#38272;&#30693;&#35672;&#12434;&#32722;&#24471;&#12375;&#12414;&#12375;&#12383;&#12290;&#12371;&#12428;&#12399;&#12289;&#31169;&#12364;&#20445;&#25345;&#12375;&#12390;&#12356;&#12427;&#22810;&#12367;&#12398; AWS &#35469;&#23450; (&#12488;&#12483;&#12503;&#12524;&#12505;&#12523;&#12398;&#12477;&#12522;&#12517;&#12540;&#12471;&#12519;&#12531; &#12450;&#12540;&#12461;&#12486;&#12463;&#12488; &#12503;&#12525;&#12501;&#12455;&#12483;&#12471;&#12519;&#12490;&#12523;&#35469;&#23450;&#12434;&#21547;&#12416;) &#12395;&#12424;&#12387;&#12390;&#35388;&#26126;&#12373;&#12428;&#12390;&#12356;&#12414;&#12377;&#12290;<br> <br> &#29420;&#23398;&#12391;&#38283;&#30330;&#32773;&#12392;&#12375;&#12390;&#23398;&#12435;&#12384;&#31169;&#12399;&#12289;&#12499;&#12472;&#12493;&#12473;&#31649;&#29702;&#23398;&#12434;&#23398;&#12435;&#12391;&#35222;&#37326;&#12434;&#24195;&#12370;&#12427;&#27231;&#20250;&#12434;&#24471;&#12390;&#12289;&#20462;&#22763;&#21495;&#12434;&#21462;&#24471;&#12375;&#12414;&#12375;&#12383;&#12290;&#12381;&#12398;&#12362;&#12363;&#12370;&#12391;&#12289;&#31169;&#12399;&#22823;&#25163;&#25126;&#30053;&#12467;&#12531;&#12469;&#12523;&#12479;&#12531;&#12488;&#20250;&#31038;&#12420;&#37504;&#34892;&#12391;&#20685;&#12367;&#12371;&#12392;&#12364;&#12391;&#12365;&#12414;&#12375;&#12383;&#12290;&#12371;&#12428;&#12425;&#12398;&#20998;&#37326;&#12424;&#12426;&#12418;&#38283;&#30330;&#12398;&#26041;&#12364;&#22909;&#12365;&#12384;&#12392;&#12356;&#12358;&#12371;&#12392;&#12434;&#23398;&#12403;&#12394;&#12364;&#12425;&#12289;&#12371;&#12398;&#20998;&#37326;&#12391;&#36942;&#12372;&#12375;&#12383;&#26178;&#38291;&#12399;&#31169;&#12398;&#20840;&#20307;&#30340;&#12394;&#32076;&#39443;&#12392;&#12473;&#12461;&#12523;&#12434;&#22823;&#12365;&#12367;&#21521;&#19978;&#12373;&#12379;&#12414;&#12375;&#12383;&#12290;",
            // Korean
            "한국인": "12&#49464;&#50640; &#49884;&#51089;&#54620; &#51060;&#54980;&#47196; &#49352;&#47196;&#50868; &#54532;&#47196;&#44536;&#47000;&#48141; &#44592;&#49696;&#44284; &#50616;&#50612;&#47484; &#48176;&#50864;&#45716; &#44163;&#51012; &#47688;&#52628;&#51648; &#50506;&#50520;&#49845;&#45768;&#45796;. &#51068;&#52237;&#48512;&#53552; &#52828;&#44396;&#46308;&#44284; &#51116;&#48120;&#49340;&#50500; &#50937;&#49324;&#51060;&#53944;&#47484; &#47564;&#46308;&#44592; &#49884;&#51089;&#54664;&#49845;&#45768;&#45796;. &#50937; &#44060;&#48156; &#50808;&#50640;&#46020; Python&#44284; &#45796;&#47480; &#48708;&#50937; &#51204;&#50857; &#50616;&#50612;&#46020; &#53456;&#44396;&#54664;&#49845;&#45768;&#45796;. &#51060; &#50676;&#51221;&#51008; &#44536; &#51060;&#54980;&#47196; &#51648;&#49549;&#46104;&#50632;&#44256; &#54532;&#47532;&#47004;&#49436; &#50937; &#44060;&#48156;&#51088;&#51060;&#51088; &#52968;&#49444;&#53556;&#53944;&#47196; &#51068;&#54616;&#44592;&#47196; &#44208;&#49900;&#54616;&#44172; &#46104;&#50632;&#49845;&#45768;&#45796;. &#51060; &#51649;&#50629;&#50640;&#49436; &#51228;&#44032; &#50619;&#51008; &#49457;&#44277;&#44284; &#51116;&#48120;&#45716; &#50628;&#52397;&#45208;&#44256; &#44536; &#50676;&#51221;&#51012; &#44228;&#49549; &#48520;&#53440;&#50724;&#47476;&#44172; &#54633;&#45768;&#45796;.<br> <br> &#48177;&#50644;&#46300;(Laravel, NodeJS, Python&#51012; &#49324;&#50857;&#54620; PHP)&#50640;&#49436; &#50937; &#44060;&#48156;&#51012; &#49884;&#51089;&#54616;&#47732;&#49436; React, Angular &#46608;&#45716; VueJS&#50752; &#44057;&#51008; &#52572;&#49888; &#54532;&#47112;&#51076;&#50892;&#53356;&#47484; &#47566;&#51008; &#54532;&#47196;&#51229;&#53944;&#50640; &#49324;&#50857;&#54616;&#45716; &#54532;&#47088;&#53944;&#50644;&#46300; &#44060;&#48156;&#51088;&#44032; &#46104;&#50632;&#49845;&#45768;&#45796;. &#50836;&#51608;&#51008; &#46160; &#49464;&#44228;&#47484; &#47784;&#46160; &#51339;&#50500;&#54633;&#45768;&#45796;!<br> <br> &#46608;&#54620; &#54400;&#49828;&#53469; &#50528;&#54540;&#47532;&#52992;&#51060;&#49496;&#51012; &#44396;&#52629;&#54616;&#44256; &#51204;&#47928;&#51201;&#51064; DevOps &#48143; &#53364;&#46972;&#50864;&#46300; &#52980;&#54504;&#54021; &#51648;&#49885;&#51012; &#49845;&#46301;&#54664;&#49845;&#45768;&#45796;. &#51060;&#45716; &#51228;&#44032; &#48372;&#50976;&#54620; &#50668;&#47084; AWS &#51064;&#51613;(&#52572;&#49345;&#50948; &#49556;&#47336;&#49496; &#50500;&#53412;&#53581;&#53944; &#51204;&#47928;&#44032; &#51064;&#51613; &#54252;&#54632;)&#51012; &#53685;&#54644; &#51077;&#51613;&#46104;&#50632;&#49845;&#45768;&#45796;.<br> <br> &#46021;&#54617;&#51004;&#47196; &#44060;&#48156;&#51088;&#44032; &#46104;&#47732;&#49436; &#44221;&#50689;&#54617;&#51012; &#44277;&#48512;&#54616;&#50668; &#49884;&#50556;&#47484; &#45331;&#55184; &#49688; &#51080;&#45716; &#44592;&#54924;&#44032; &#49373;&#44220;&#44256; &#49437;&#49324; &#54617;&#50948;&#47484; &#52712;&#46301;&#54664;&#49845;&#45768;&#45796;. &#44536; &#45909;&#48516;&#50640; &#51200;&#45716; &#51452;&#50836; &#51204;&#47029; &#52968;&#49444;&#54021; &#54924;&#49324;&#50752; &#51008;&#54665;&#50640;&#49436; &#51068;&#54624; &#49688; &#51080;&#50632;&#49845;&#45768;&#45796;. &#51200;&#45716; &#51060;&#47088; &#48516;&#50556;&#48372;&#45796; &#44060;&#48156;&#51012; &#45908; &#51339;&#50500;&#54620;&#45796;&#45716; &#44163;&#51012; &#50508;&#44172; &#46104;&#50632;&#44256;, &#51060; &#48516;&#50556;&#50640;&#49436; &#48372;&#45240; &#49884;&#44036;&#51008; &#51228; &#51204;&#48152;&#51201;&#51064; &#44221;&#54744;&#44284; &#44592;&#49696;&#51012; &#53356;&#44172; &#54693;&#49345;&#49884;&#53040;&#49845;&#45768;&#45796;.",
            // Spanish
            "Español": "A los 12 a&ntilde;os nunca dej&eacute; de aprender nuevas habilidades y lenguajes de programaci&oacute;n. Empec&eacute; a crear sitios web para amigos y tambi&eacute;n por diversi&oacute;n. Adem&aacute;s del desarrollo web, tambi&eacute;n explor&eacute; Python y otros lenguajes que no son solo para la web. Esta pasi&oacute;n ha perdurado desde entonces y me llev&oacute; a decidir trabajar como desarrollador web y consultor independiente. El &eacute;xito y la diversi&oacute;n que tengo en este trabajo son inmensos y realmente mantienen viva esa pasi&oacute;n.<br> <br> Comenc&eacute; con el desarrollo web en el backend (PHP con Laravel, NodeJS, Python) y tambi&eacute;n me convert&iacute; cada vez m&aacute;s en un desarrollador frontend usando marcos modernos como React, Angular o VueJS en muchos proyectos. &iexcl;Hoy en d&iacute;a amo ambos mundos!<br> <br> Tambi&eacute;n constru&iacute; aplicaciones full-stack y adquir&iacute; conocimientos expertos en DevOps y computaci&oacute;n en la nube, comprobados por las muchas certificaciones de AWS que tengo (incluida la certificaci&oacute;n profesional de arquitecto de soluciones de nivel superior).<br> <br> Como desarrollador autodidacta, tuve la oportunidad de ampliar mis horizontes estudiando Administraci&oacute;n de Empresas, donde tengo una maestr&iacute;a. Eso me permiti&oacute; trabajar en una importante consultor&iacute;a estrat&eacute;gica y en un banco. Adem&aacute;s de aprender que disfruto m&aacute;s del desarrollo que de estos campos, el tiempo que pas&eacute; en este sector mejor&oacute; enormemente mi experiencia y mis habilidades generales.",
            // Hindi
            "हिंदी": "12 &#2360;&#2366;&#2354; &#2325;&#2368; &#2313;&#2350;&#2381;&#2352; &#2360;&#2375; &#2361;&#2368; &#2350;&#2376;&#2306;&#2344;&#2375; &#2344;&#2319; &#2346;&#2381;&#2352;&#2379;&#2327;&#2381;&#2352;&#2366;&#2350;&#2367;&#2306;&#2327; &#2325;&#2380;&#2358;&#2354; &#2324;&#2352; &#2349;&#2366;&#2359;&#2366;&#2319;&#2305; &#2360;&#2368;&#2326;&#2344;&#2366; &#2325;&#2349;&#2368; &#2348;&#2306;&#2342; &#2344;&#2361;&#2368;&#2306; &#2325;&#2367;&#2351;&#2366;&#2404; &#2350;&#2376;&#2306;&#2344;&#2375; &#2342;&#2379;&#2360;&#2381;&#2340;&#2379;&#2306; &#2325;&#2375; &#2354;&#2367;&#2319; &#2324;&#2352; &#2360;&#2367;&#2352;&#2381;&#2347;&#2364; &#2350;&#2344;&#2379;&#2352;&#2306;&#2332;&#2344; &#2325;&#2375; &#2354;&#2367;&#2319; &#2349;&#2368; &#2357;&#2375;&#2348;&#2360;&#2366;&#2311;&#2335; &#2348;&#2344;&#2366;&#2344;&#2366; &#2358;&#2369;&#2352;&#2370; &#2325;&#2352; &#2342;&#2367;&#2351;&#2366;&#2404; &#2357;&#2375;&#2348; &#2337;&#2375;&#2357;&#2354;&#2346;&#2350;&#2375;&#2306;&#2335; &#2325;&#2375; &#2309;&#2354;&#2366;&#2357;&#2366; &#2350;&#2376;&#2306;&#2344;&#2375; &#2346;&#2366;&#2351;&#2341;&#2344; &#2324;&#2352; &#2342;&#2370;&#2360;&#2352;&#2368; &#2344;&#2377;&#2344;-&#2357;&#2375;&#2348;-&#2323;&#2344;&#2354;&#2368; &#2349;&#2366;&#2359;&#2366;&#2323;&#2306; &#2325;&#2379; &#2349;&#2368; &#2319;&#2325;&#2381;&#2360;&#2346;&#2381;&#2354;&#2379;&#2352; &#2325;&#2367;&#2351;&#2366;&#2404; &#2351;&#2361; &#2332;&#2369;&#2344;&#2370;&#2344; &#2340;&#2348; &#2360;&#2375; &#2348;&#2344;&#2366; &#2361;&#2369;&#2310; &#2361;&#2376; &#2324;&#2352; &#2319;&#2325; &#2347;&#2381;&#2352;&#2368;&#2354;&#2366;&#2306;&#2360; &#2357;&#2375;&#2348; &#2337;&#2375;&#2357;&#2354;&#2346;&#2352; &#2324;&#2352; &#2325;&#2306;&#2360;&#2354;&#2381;&#2335;&#2375;&#2306;&#2335; &#2325;&#2375; &#2352;&#2370;&#2346; &#2350;&#2375;&#2306; &#2325;&#2366;&#2350; &#2325;&#2352;&#2344;&#2375; &#2325;&#2375; &#2350;&#2375;&#2352;&#2375; &#2347;&#2364;&#2376;&#2360;&#2354;&#2375; &#2325;&#2368; &#2357;&#2332;&#2361; &#2348;&#2344;&#2366;&#2404; &#2311;&#2360; &#2325;&#2366;&#2350; &#2350;&#2375;&#2306; &#2350;&#2369;&#2333;&#2375; &#2332;&#2379; &#2360;&#2347;&#2364;&#2354;&#2340;&#2366; &#2324;&#2352; &#2350;&#2332;&#2364;&#2366; &#2350;&#2367;&#2354;&#2366; &#2361;&#2376;, &#2357;&#2361; &#2357;&#2366;&#2325;&#2312; &#2348;&#2361;&#2369;&#2340; &#2332;&#2364;&#2381;&#2351;&#2366;&#2342;&#2366; &#2361;&#2376; &#2324;&#2352; &#2351;&#2361; &#2332;&#2369;&#2344;&#2370;&#2344; &#2361;&#2350;&#2375;&#2358;&#2366; &#2332;&#2364;&#2367;&#2306;&#2342;&#2366; &#2352;&#2361;&#2340;&#2366; &#2361;&#2376;&#2404;<br> <br> &#2348;&#2376;&#2325;&#2319;&#2306;&#2337; &#2346;&#2352; &#2357;&#2375;&#2348; &#2337;&#2375;&#2357;&#2354;&#2346;&#2350;&#2375;&#2306;&#2335; &#2358;&#2369;&#2352;&#2370; &#2325;&#2352;&#2344;&#2375; &#2325;&#2375; &#2348;&#2366;&#2342; (&#2354;&#2366;&#2352;&#2357;&#2375;&#2354;, &#2344;&#2379;&#2337;&#2332;&#2375;&#2319;&#2360;, &#2346;&#2366;&#2351;&#2341;&#2344; &#2325;&#2375; &#2360;&#2366;&#2341; PHP) &#2350;&#2376;&#2306; &#2348;&#2361;&#2369;&#2340; &#2360;&#2375; &#2346;&#2381;&#2352;&#2379;&#2332;&#2375;&#2325;&#2381;&#2335; &#2350;&#2375;&#2306; &#2352;&#2367;&#2319;&#2325;&#2381;&#2335;, &#2319;&#2306;&#2327;&#2369;&#2354;&#2352; &#2351;&#2366; &#2357;&#2381;&#2351;&#2370;&#2332;&#2375;&#2319;&#2360; &#2332;&#2376;&#2360;&#2375; &#2310;&#2343;&#2369;&#2344;&#2367;&#2325; &#2347;&#2381;&#2352;&#2375;&#2350;&#2357;&#2352;&#2381;&#2325; &#2325;&#2366; &#2311;&#2360;&#2381;&#2340;&#2375;&#2350;&#2366;&#2354; &#2325;&#2352;&#2340;&#2375; &#2361;&#2369;&#2319; &#2319;&#2325; &#2347;&#2381;&#2352;&#2306;&#2335;&#2319;&#2306;&#2337; &#2337;&#2375;&#2357;&#2354;&#2346;&#2352; &#2349;&#2368; &#2348;&#2344; &#2327;&#2351;&#2366;&#2404; &#2310;&#2332;&#2325;&#2354; &#2350;&#2369;&#2333;&#2375; &#2342;&#2379;&#2344;&#2379;&#2306; &#2361;&#2368; &#2342;&#2369;&#2344;&#2367;&#2351;&#2366;&#2319;&#2305; &#2346;&#2360;&#2306;&#2342; &#2361;&#2376;&#2306;!<br> <br> &#2350;&#2376;&#2306; &#2347;&#2364;&#2369;&#2354;-&#2360;&#2381;&#2335;&#2376;&#2325; &#2319;&#2346;&#2381;&#2354;&#2367;&#2325;&#2375;&#2358;&#2344; &#2349;&#2368; &#2348;&#2344;&#2366;&#2340;&#2366; &#2361;&#2370;&#2305; &#2324;&#2352; &#2357;&#2367;&#2358;&#2375;&#2359;&#2332;&#2381;&#2334; DevOps &#2324;&#2352; &#2325;&#2381;&#2354;&#2366;&#2313;&#2337; &#2325;&#2306;&#2346;&#2381;&#2351;&#2370;&#2335;&#2367;&#2306;&#2327; &#2332;&#2381;&#2334;&#2366;&#2344; &#2361;&#2366;&#2360;&#2367;&#2354; &#2325;&#2352;&#2340;&#2366; &#2361;&#2370;&#2305; - &#2332;&#2379; &#2350;&#2375;&#2352;&#2375; &#2346;&#2366;&#2360; &#2350;&#2380;&#2332;&#2370;&#2342; &#2325;&#2312; AWS &#2360;&#2352;&#2381;&#2335;&#2367;&#2347;&#2364;&#2367;&#2325;&#2375;&#2358;&#2344; (&#2335;&#2377;&#2346;-&#2354;&#2375;&#2357;&#2354; &#2360;&#2377;&#2354;&#2381;&#2351;&#2370;&#2358;&#2344; &#2310;&#2352;&#2381;&#2325;&#2367;&#2335;&#2375;&#2325;&#2381;&#2335; &#2346;&#2381;&#2352;&#2379;&#2347;&#2375;&#2358;&#2344;&#2354; &#2360;&#2352;&#2381;&#2335;&#2367;&#2347;&#2364;&#2367;&#2325;&#2375;&#2358;&#2344; &#2360;&#2361;&#2367;&#2340;) &#2360;&#2375; &#2360;&#2366;&#2348;&#2367;&#2340; &#2361;&#2379;&#2340;&#2366; &#2361;&#2376;&#2404;<br> <br> &#2319;&#2325; &#2360;&#2381;&#2357;-&#2358;&#2367;&#2325;&#2381;&#2359;&#2367;&#2340; &#2337;&#2375;&#2357;&#2354;&#2346;&#2352; &#2325;&#2375; &#2352;&#2370;&#2346; &#2350;&#2375;&#2306; &#2350;&#2369;&#2333;&#2375; &#2348;&#2367;&#2332;&#2344;&#2375;&#2360; &#2319;&#2337;&#2350;&#2367;&#2344;&#2367;&#2360;&#2381;&#2335;&#2381;&#2352;&#2375;&#2358;&#2344; &#2325;&#2368; &#2346;&#2338;&#2364;&#2366;&#2312; &#2325;&#2352;&#2325;&#2375; &#2309;&#2346;&#2344;&#2375; &#2325;&#2381;&#2359;&#2367;&#2340;&#2367;&#2332; &#2325;&#2379; &#2357;&#2381;&#2351;&#2366;&#2346;&#2325; &#2348;&#2344;&#2366;&#2344;&#2375; &#2325;&#2366; &#2350;&#2380;&#2325;&#2366; &#2350;&#2367;&#2354;&#2366;, &#2332;&#2361;&#2366;&#2305; &#2350;&#2375;&#2352;&#2375; &#2346;&#2366;&#2360; &#2350;&#2366;&#2360;&#2381;&#2335;&#2352; &#2337;&#2367;&#2327;&#2381;&#2352;&#2368; &#2361;&#2376;&#2404; &#2311;&#2360;&#2360;&#2375; &#2350;&#2369;&#2333;&#2375; &#2319;&#2325; &#2346;&#2381;&#2352;&#2350;&#2369;&#2326; &#2352;&#2339;&#2344;&#2368;&#2340;&#2367; &#2346;&#2352;&#2366;&#2350;&#2352;&#2381;&#2358; &#2325;&#2306;&#2346;&#2344;&#2368; &#2325;&#2375; &#2360;&#2366;&#2341;-&#2360;&#2366;&#2341; &#2319;&#2325; &#2348;&#2376;&#2306;&#2325; &#2350;&#2375;&#2306; &#2349;&#2368; &#2325;&#2366;&#2350; &#2325;&#2352;&#2344;&#2375; &#2325;&#2366; &#2350;&#2380;&#2325;&#2366; &#2350;&#2367;&#2354;&#2366;&#2404; &#2351;&#2361; &#2360;&#2368;&#2326;&#2340;&#2375; &#2361;&#2369;&#2319; &#2325;&#2367; &#2350;&#2369;&#2333;&#2375; &#2311;&#2344; &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352;&#2379;&#2306; &#2360;&#2375; &#2332;&#2364;&#2381;&#2351;&#2366;&#2342;&#2366; &#2357;&#2367;&#2325;&#2366;&#2360; &#2346;&#2360;&#2306;&#2342; &#2361;&#2376;, &#2311;&#2360; &#2325;&#2381;&#2359;&#2375;&#2340;&#2381;&#2352; &#2350;&#2375;&#2306; &#2348;&#2367;&#2340;&#2366;&#2319; &#2360;&#2350;&#2351; &#2344;&#2375; &#2350;&#2375;&#2352;&#2375; &#2360;&#2350;&#2327;&#2381;&#2352; &#2309;&#2344;&#2369;&#2349;&#2357; &#2324;&#2352; &#2325;&#2380;&#2358;&#2354; &#2350;&#2375;&#2306; &#2325;&#2366;&#2347;&#2364;&#2368; &#2360;&#2369;&#2343;&#2366;&#2352; &#2325;&#2367;&#2351;&#2366;&#2404;",
            // Portuguese
            "Português": "Come&ccedil;ando aos 12 anos, nunca deixei de aprender novas compet&ecirc;ncias e linguagens de programa&ccedil;&atilde;o. Cedo comecei a criar sites para amigos e tamb&eacute;m apenas para divers&atilde;o. Para al&eacute;m do desenvolvimento web, tamb&eacute;m explorei o Python e outras linguagens n&atilde;o exclusivas da web. Esta paix&atilde;o perdurou desde ent&atilde;o e levou-me &agrave; decis&atilde;o de trabalhar como web developer freelancer e consultor. O sucesso e a divers&atilde;o que tenho neste trabalho s&atilde;o imensos e mant&ecirc;m realmente viva esta paix&atilde;o.<br> <br> Iniciando o desenvolvimento web no backend (PHP com Laravel, NodeJS, Python) tamb&eacute;m me tornei cada vez mais um frontend developer utilizando frameworks modernas como React, Angular ou VueJS em v&aacute;rios projetos. Adoro os dois mundos hoje em dia!<br> <br> Tamb&eacute;m desenvolvo aplica&ccedil;&otilde;es full-stack e adquiri conhecimentos especializados em DevOps e computa&ccedil;&atilde;o em nuvem - comprovados pelas muitas certifica&ccedil;&otilde;es AWS que possuo (incluindo a certifica&ccedil;&atilde;o de n&iacute;vel superior Solutions Architect Professional).<br> <br> Como developer autodidata tive a oportunidade de alargar os meus horizontes estudando Gest&atilde;o de Empresas onde possuo mestrado. Permitiu-me trabalhar numa grande consultoria estrat&eacute;gica e tamb&eacute;m num banco. Ao aprender que gosto mais do desenvolvimento do que destas &aacute;reas, o tempo neste setor melhorou muito a minha experi&ecirc;ncia e compet&ecirc;ncias gerais.",
            // Bengali
            "বাংলা": "12 &#2476;&#2459;&#2480; &#2476;&#2479;&#2492;&#2488;&#2503; &#2486;&#2497;&#2480;&#2497; &#2453;&#2480;&#2503; &#2438;&#2478;&#2495; &#2453;&#2454;&#2472;&#2439; &#2472;&#2468;&#2497;&#2472; &#2474;&#2509;&#2480;&#2507;&#2455;&#2509;&#2480;&#2494;&#2478;&#2495;&#2434; &#2470;&#2453;&#2509;&#2487;&#2468;&#2494; &#2447;&#2476;&#2434; &#2477;&#2494;&#2487;&#2494; &#2486;&#2503;&#2454;&#2494; &#2476;&#2472;&#2509;&#2471; &#2453;&#2480;&#2495;&#2472;&#2495;&#2404; &#2474;&#2509;&#2480;&#2469;&#2478; &#2470;&#2495;&#2453;&#2503; &#2438;&#2478;&#2495; &#2476;&#2472;&#2509;&#2471;&#2497;&#2470;&#2503;&#2480; &#2460;&#2472;&#2509;&#2479; &#2447;&#2476;&#2434; &#2486;&#2497;&#2471;&#2497; &#2478;&#2460;&#2494; &#2453;&#2480;&#2494;&#2480; &#2460;&#2472;&#2509;&#2479; &#2451;&#2479;&#2492;&#2503;&#2476;&#2488;&#2494;&#2439;&#2463; &#2468;&#2504;&#2480;&#2495; &#2453;&#2480;&#2468;&#2503; &#2486;&#2497;&#2480;&#2497; &#2453;&#2480;&#2495;&#2404; &#2451;&#2479;&#2492;&#2503;&#2476; &#2465;&#2503;&#2477;&#2503;&#2482;&#2474;&#2478;&#2503;&#2472;&#2509;&#2463;&#2503;&#2480; &#2474;&#2494;&#2486;&#2494;&#2474;&#2494;&#2486;&#2495; &#2438;&#2478;&#2495; &#2474;&#2494;&#2439;&#2469;&#2472; &#2447;&#2476;&#2434; &#2437;&#2472;&#2509;&#2479;&#2494;&#2472;&#2509;&#2479; &#2472;&#2472;-&#2451;&#2479;&#2492;&#2503;&#2476;-&#2486;&#2497;&#2471;&#2497; &#2477;&#2494;&#2487;&#2494;&#2455;&#2497;&#2482;&#2495;&#2451; &#2437;&#2472;&#2509;&#2476;&#2503;&#2487;&#2467; &#2453;&#2480;&#2503;&#2459;&#2495;&#2404; &#2447;&#2439; &#2438;&#2476;&#2503;&#2455; &#2468;&#2454;&#2472; &#2469;&#2503;&#2453;&#2503; &#2488;&#2509;&#2469;&#2494;&#2479;&#2492;&#2496; &#2489;&#2479;&#2492;&#2503;&#2459;&#2503; &#2447;&#2476;&#2434; &#2447;&#2453;&#2460;&#2472; &#2475;&#2509;&#2480;&#2495;&#2482;&#2509;&#2479;&#2494;&#2472;&#2509;&#2488; &#2451;&#2479;&#2492;&#2503;&#2476; &#2465;&#2503;&#2477;&#2503;&#2482;&#2474;&#2494;&#2480; &#2447;&#2476;&#2434; &#2474;&#2480;&#2494;&#2478;&#2480;&#2509;&#2486;&#2470;&#2494;&#2468;&#2494; &#2489;&#2495;&#2488;&#2494;&#2476;&#2503; &#2453;&#2494;&#2460; &#2453;&#2480;&#2494;&#2480; &#2438;&#2478;&#2494;&#2480; &#2488;&#2495;&#2470;&#2509;&#2471;&#2494;&#2472;&#2509;&#2468;&#2503;&#2480; &#2470;&#2495;&#2453;&#2503; &#2472;&#2495;&#2479;&#2492;&#2503; &#2455;&#2503;&#2459;&#2503;&#2404; &#2447;&#2439; &#2453;&#2494;&#2460;&#2463;&#2495;&#2468;&#2503; &#2438;&#2478;&#2494;&#2480; &#2479;&#2503; &#2488;&#2494;&#2475;&#2482;&#2509;&#2479; &#2447;&#2476;&#2434; &#2478;&#2460;&#2494; &#2438;&#2459;&#2503; &#2468;&#2494; &#2474;&#2509;&#2480;&#2458;&#2497;&#2480; &#2447;&#2476;&#2434; &#2488;&#2468;&#2509;&#2479;&#2495;&#2439; &#2488;&#2503;&#2439; &#2438;&#2476;&#2503;&#2455;&#2463;&#2495;&#2453;&#2503; &#2460;&#2509;&#2476;&#2482;&#2472;&#2509;&#2468;&#2477;&#2494;&#2476;&#2503; &#2460;&#2496;&#2476;&#2495;&#2468; &#2480;&#2494;&#2454;&#2503;&#2404;<br> <br> &#2476;&#2509;&#2479;&#2494;&#2453;&#2447;&#2472;&#2509;&#2465;&#2503; &#2451;&#2479;&#2492;&#2503;&#2476; &#2465;&#2503;&#2477;&#2503;&#2482;&#2474;&#2478;&#2503;&#2472;&#2509;&#2463; &#2486;&#2497;&#2480;&#2497; &#2453;&#2480;&#2494; (Laravel, NodeJS, Python-&#2447;&#2480; &#2488;&#2494;&#2469;&#2503; PHP) &#2438;&#2478;&#2495; &#2437;&#2472;&#2503;&#2453; &#2474;&#2509;&#2480;&#2460;&#2503;&#2453;&#2509;&#2463;&#2503; React, Angular &#2476;&#2494; VueJS &#2447;&#2480; &#8203;&#8203;&#2478;&#2468; &#2438;&#2471;&#2497;&#2472;&#2495;&#2453; &#2475;&#2509;&#2480;&#2503;&#2478;&#2451;&#2479;&#2492;&#2494;&#2480;&#2509;&#2453; &#2476;&#2509;&#2479;&#2476;&#2489;&#2494;&#2480; &#2453;&#2480;&#2503; &#2475;&#2509;&#2480;&#2472;&#2509;&#2463;&#2447;&#2472;&#2509;&#2465; &#2465;&#2503;&#2477;&#2503;&#2482;&#2474;&#2494;&#2480; &#2489;&#2479;&#2492;&#2503; &#2441;&#2464;&#2495;&#2404; &#2438;&#2478;&#2495; &#2438;&#2460;&#2453;&#2494;&#2482; &#2441;&#2477;&#2479;&#2492; &#2474;&#2499;&#2469;&#2495;&#2476;&#2496; &#2477;&#2494;&#2482;&#2507;&#2476;&#2494;&#2488;&#2495;!<br> <br> &#2447;&#2459;&#2494;&#2465;&#2492;&#2494;&#2451; &#2438;&#2478;&#2495; &#2475;&#2497;&#2482;-&#2488;&#2509;&#2463;&#2509;&#2479;&#2494;&#2453; &#2437;&#2509;&#2479;&#2494;&#2474;&#2509;&#2482;&#2495;&#2453;&#2503;&#2486;&#2472; &#2468;&#2504;&#2480;&#2495; &#2453;&#2480;&#2495; &#2447;&#2476;&#2434; &#2476;&#2495;&#2486;&#2503;&#2487;&#2460;&#2509;&#2462; DevOps &#2447;&#2476;&#2434; &#2453;&#2509;&#2482;&#2494;&#2441;&#2465; &#2453;&#2478;&#2509;&#2474;&#2495;&#2441;&#2463;&#2495;&#2434; &#2460;&#2509;&#2462;&#2494;&#2472; &#2437;&#2480;&#2509;&#2460;&#2472; &#2453;&#2480;&#2495; - &#2438;&#2478;&#2494;&#2480; &#2471;&#2494;&#2480;&#2467; &#2453;&#2480;&#2494; &#2437;&#2472;&#2503;&#2453; AWS &#2488;&#2494;&#2480;&#2509;&#2463;&#2495;&#2475;&#2495;&#2453;&#2503;&#2486;&#2472; &#2470;&#2509;&#2476;&#2494;&#2480;&#2494; &#2474;&#2509;&#2480;&#2478;&#2494;&#2467;&#2495;&#2468; (&#2488;&#2489; &#2486;&#2496;&#2480;&#2509;&#2487;-&#2488;&#2509;&#2468;&#2480;&#2503;&#2480; &#2488;&#2482;&#2495;&#2441;&#2486;&#2472; &#2438;&#2480;&#2509;&#2453;&#2495;&#2463;&#2503;&#2453;&#2509;&#2463; &#2474;&#2509;&#2480;&#2475;&#2503;&#2486;&#2472;&#2494;&#2482; &#2488;&#2494;&#2480;&#2509;&#2463;&#2495;&#2475;&#2495;&#2453;&#2503;&#2486;&#2472;)&#2404;<br> <br> &#2447;&#2453;&#2460;&#2472; &#2488;&#2509;&#2476;-&#2486;&#2495;&#2453;&#2509;&#2487;&#2495;&#2468; &#2476;&#2495;&#2453;&#2494;&#2486;&#2453;&#2494;&#2480;&#2496; &#2489;&#2495;&#2488;&#2494;&#2476;&#2503; &#2438;&#2478;&#2495; &#2476;&#2509;&#2479;&#2476;&#2488;&#2494;&#2479;&#2492; &#2474;&#2509;&#2480;&#2486;&#2494;&#2488;&#2472; &#2437;&#2471;&#2509;&#2479;&#2479;&#2492;&#2472; &#2453;&#2480;&#2494;&#2480; &#2478;&#2494;&#2471;&#2509;&#2479;&#2478;&#2503; &#2438;&#2478;&#2494;&#2480; &#2470;&#2495;&#2455;&#2472;&#2509;&#2468;&#2453;&#2503; &#2474;&#2509;&#2480;&#2488;&#2494;&#2480;&#2495;&#2468; &#2453;&#2480;&#2494;&#2480; &#2488;&#2497;&#2479;&#2507;&#2455; &#2474;&#2503;&#2479;&#2492;&#2503;&#2459;&#2495; &#2479;&#2503;&#2454;&#2494;&#2472;&#2503; &#2438;&#2478;&#2495; &#2488;&#2509;&#2472;&#2494;&#2468;&#2453;&#2507;&#2468;&#2509;&#2468;&#2480; &#2465;&#2495;&#2455;&#2509;&#2480;&#2495; &#2437;&#2480;&#2509;&#2460;&#2472; &#2453;&#2480;&#2503;&#2459;&#2495;&#2404; &#2447;&#2463;&#2495; &#2438;&#2478;&#2494;&#2453;&#2503; &#2447;&#2453;&#2463;&#2495; &#2474;&#2509;&#2480;&#2471;&#2494;&#2472; &#2453;&#2508;&#2486;&#2482; &#2474;&#2480;&#2494;&#2478;&#2480;&#2509;&#2486;&#2470;&#2494;&#2468;&#2494;&#2480; &#2474;&#2494;&#2486;&#2494;&#2474;&#2494;&#2486;&#2495; &#2447;&#2453;&#2463;&#2495; &#2476;&#2509;&#2479;&#2494;&#2434;&#2453;&#2503; &#2453;&#2494;&#2460; &#2453;&#2480;&#2468;&#2503; &#2488;&#2453;&#2509;&#2487;&#2478; &#2453;&#2480;&#2503;&#2459;&#2503;&#2404; &#2486;&#2503;&#2454;&#2494;&#2480; &#2488;&#2478;&#2479;&#2492;, &#2438;&#2478;&#2495; &#2447;&#2439; &#2453;&#2509;&#2487;&#2503;&#2468;&#2509;&#2480;&#2455;&#2497;&#2482;&#2495;&#2480; &#2458;&#2503;&#2479;&#2492;&#2503; &#2441;&#2472;&#2509;&#2472;&#2479;&#2492;&#2472;&#2453;&#2503; &#2476;&#2503;&#2486;&#2495; &#2441;&#2474;&#2477;&#2507;&#2455; &#2453;&#2480;&#2495;, &#2447;&#2439; &#2488;&#2503;&#2453;&#2509;&#2463;&#2480;&#2503; &#2488;&#2478;&#2479;&#2492;&#2463;&#2495; &#2438;&#2478;&#2494;&#2480; &#2488;&#2494;&#2478;&#2455;&#2509;&#2480;&#2495;&#2453; &#2437;&#2477;&#2495;&#2460;&#2509;&#2462;&#2468;&#2494; &#2447;&#2476;&#2434; &#2470;&#2453;&#2509;&#2487;&#2468;&#2494;&#2480; &#2476;&#2509;&#2479;&#2494;&#2474;&#2453; &#2441;&#2472;&#2509;&#2472;&#2468;&#2495; &#2453;&#2480;&#2503;&#2459;&#2503;&#2404;",
            // Arabic
            "عَرَبِيّ": "&#1576;&#1583;&#1571;&#1578; &#1601;&#1610; &#1587;&#1606; &#1575;&#1604;&#1579;&#1575;&#1606;&#1610;&#1577; &#1593;&#1588;&#1585;&#1577; &#1608;&#1604;&#1605; &#1571;&#1578;&#1608;&#1602;&#1601; &#1571;&#1576;&#1583;&#1611;&#1575; &#1593;&#1606; &#1578;&#1593;&#1604;&#1605; &#1605;&#1607;&#1575;&#1585;&#1575;&#1578; &#1608;&#1604;&#1594;&#1575;&#1578; &#1576;&#1585;&#1605;&#1580;&#1577; &#1580;&#1583;&#1610;&#1583;&#1577;. &#1576;&#1583;&#1571;&#1578; &#1605;&#1576;&#1603;&#1585;&#1611;&#1575; &#1601;&#1610; &#1573;&#1606;&#1588;&#1575;&#1569; &#1605;&#1608;&#1575;&#1602;&#1593; &#1608;&#1610;&#1576; &#1604;&#1604;&#1571;&#1589;&#1583;&#1602;&#1575;&#1569; &#1608;&#1604;&#1604;&#1605;&#1578;&#1593;&#1577; &#1571;&#1610;&#1590;&#1611;&#1575;. &#1576;&#1575;&#1604;&#1573;&#1590;&#1575;&#1601;&#1577; &#1573;&#1604;&#1609; &#1578;&#1591;&#1608;&#1610;&#1585; &#1575;&#1604;&#1608;&#1610;&#1576;&#1548; &#1575;&#1587;&#1578;&#1603;&#1588;&#1601;&#1578; &#1571;&#1610;&#1590;&#1611;&#1575; Python &#1608;&#1604;&#1594;&#1575;&#1578; &#1571;&#1582;&#1585;&#1609; &#1594;&#1610;&#1585; &#1605;&#1582;&#1589;&#1589;&#1577; &#1604;&#1604;&#1608;&#1610;&#1576;. &#1575;&#1587;&#1578;&#1605;&#1585; &#1607;&#1584;&#1575; &#1575;&#1604;&#1588;&#1594;&#1601; &#1605;&#1606;&#1584; &#1584;&#1604;&#1603; &#1575;&#1604;&#1581;&#1610;&#1606; &#1608;&#1571;&#1583;&#1609; &#1573;&#1604;&#1609; &#1602;&#1585;&#1575;&#1585;&#1610; &#1576;&#1575;&#1604;&#1593;&#1605;&#1604; &#1603;&#1605;&#1591;&#1608;&#1585; &#1608;&#1610;&#1576; &#1608;&#1605;&#1587;&#1578;&#1588;&#1575;&#1585; &#1605;&#1587;&#1578;&#1602;&#1604;. &#1575;&#1604;&#1606;&#1580;&#1575;&#1581; &#1608;&#1575;&#1604;&#1605;&#1578;&#1593;&#1577; &#1575;&#1604;&#1578;&#1610; &#1571;&#1578;&#1605;&#1578;&#1593; &#1576;&#1607;&#1575; &#1601;&#1610; &#1607;&#1584;&#1607; &#1575;&#1604;&#1608;&#1592;&#1610;&#1601;&#1577; &#1607;&#1575;&#1574;&#1604;&#1577; &#1608;&#1578;&#1576;&#1602;&#1610; &#1607;&#1584;&#1575; &#1575;&#1604;&#1588;&#1594;&#1601; &#1581;&#1610;&#1611;&#1575; &#1581;&#1602;&#1611;&#1575;.<br> <br> &#1576;&#1583;&#1571;&#1578; &#1578;&#1591;&#1608;&#1610;&#1585; &#1575;&#1604;&#1608;&#1610;&#1576; &#1601;&#1610; &#1575;&#1604;&#1582;&#1604;&#1601;&#1610;&#1577; (PHP &#1605;&#1593; Laravel &#1608;NodeJS &#1608;Python) &#1608;&#1571;&#1589;&#1576;&#1581;&#1578; &#1571;&#1610;&#1590;&#1611;&#1575; &#1605;&#1591;&#1608;&#1585; &#1608;&#1575;&#1580;&#1607;&#1577; &#1571;&#1605;&#1575;&#1605;&#1610;&#1577; &#1571;&#1603;&#1579;&#1585; &#1601;&#1571;&#1603;&#1579;&#1585; &#1576;&#1575;&#1587;&#1578;&#1582;&#1583;&#1575;&#1605; &#1575;&#1604;&#1571;&#1591;&#1585; &#1575;&#1604;&#1581;&#1583;&#1610;&#1579;&#1577; &#1605;&#1579;&#1604; React &#1571;&#1608; Angular &#1571;&#1608; VueJS &#1601;&#1610; &#1575;&#1604;&#1603;&#1579;&#1610;&#1585; &#1605;&#1606; &#1575;&#1604;&#1605;&#1588;&#1575;&#1585;&#1610;&#1593;. &#1571;&#1581;&#1576; &#1603;&#1604;&#1575; &#1575;&#1604;&#1593;&#1575;&#1604;&#1605;&#1610;&#1606; &#1601;&#1610; &#1575;&#1604;&#1608;&#1602;&#1578; &#1575;&#1604;&#1581;&#1575;&#1590;&#1585;!<br> <br> &#1571;&#1602;&#1608;&#1605; &#1571;&#1610;&#1590;&#1611;&#1575; &#1576;&#1576;&#1606;&#1575;&#1569; &#1578;&#1591;&#1576;&#1610;&#1602;&#1575;&#1578; &#1603;&#1575;&#1605;&#1604;&#1577; &#1608;&#1575;&#1603;&#1578;&#1587;&#1576;&#1578; &#1605;&#1593;&#1585;&#1601;&#1577; &#1582;&#1576;&#1610;&#1585;&#1577; &#1601;&#1610; DevOps &#1608;&#1575;&#1604;&#1581;&#1608;&#1587;&#1576;&#1577; &#1575;&#1604;&#1587;&#1581;&#1575;&#1576;&#1610;&#1577; - &#1608;&#1607;&#1608; &#1605;&#1575; &#1571;&#1579;&#1576;&#1578;&#1578;&#1607; &#1575;&#1604;&#1593;&#1583;&#1610;&#1583; &#1605;&#1606; &#1588;&#1607;&#1575;&#1583;&#1575;&#1578; AWS &#1575;&#1604;&#1578;&#1610; &#1571;&#1581;&#1605;&#1604;&#1607;&#1575; (&#1576;&#1605;&#1575; &#1601;&#1610; &#1584;&#1604;&#1603; &#1588;&#1607;&#1575;&#1583;&#1577; Solutions Architect Professional &#1605;&#1606; &#1575;&#1604;&#1605;&#1587;&#1578;&#1608;&#1609; &#1575;&#1604;&#1571;&#1593;&#1604;&#1609;).<br> <br> &#1576;&#1589;&#1601;&#1578;&#1610; &#1605;&#1591;&#1608;&#1585;&#1611;&#1575; &#1593;&#1604;&#1605;&#1578; &#1606;&#1601;&#1587;&#1610; &#1576;&#1606;&#1601;&#1587;&#1610;&#1548; &#1571;&#1578;&#1610;&#1581;&#1578; &#1604;&#1610; &#1575;&#1604;&#1601;&#1585;&#1589;&#1577; &#1604;&#1578;&#1608;&#1587;&#1610;&#1593; &#1570;&#1601;&#1575;&#1602;&#1610; &#1605;&#1606; &#1582;&#1604;&#1575;&#1604; &#1583;&#1585;&#1575;&#1587;&#1577; &#1573;&#1583;&#1575;&#1585;&#1577; &#1575;&#1604;&#1571;&#1593;&#1605;&#1575;&#1604; &#1581;&#1610;&#1579; &#1571;&#1581;&#1605;&#1604; &#1583;&#1585;&#1580;&#1577; &#1575;&#1604;&#1605;&#1575;&#1580;&#1587;&#1578;&#1610;&#1585;. &#1604;&#1602;&#1583; &#1605;&#1603;&#1606;&#1606;&#1610; &#1584;&#1604;&#1603; &#1605;&#1606; &#1575;&#1604;&#1593;&#1605;&#1604; &#1601;&#1610; &#1588;&#1585;&#1603;&#1577; &#1575;&#1587;&#1578;&#1588;&#1575;&#1585;&#1575;&#1578; &#1575;&#1587;&#1578;&#1585;&#1575;&#1578;&#1610;&#1580;&#1610;&#1577; &#1603;&#1576;&#1585;&#1609; &#1576;&#1575;&#1604;&#1573;&#1590;&#1575;&#1601;&#1577; &#1573;&#1604;&#1609; &#1575;&#1604;&#1593;&#1605;&#1604; &#1601;&#1610; &#1571;&#1581;&#1583; &#1575;&#1604;&#1576;&#1606;&#1608;&#1603;. &#1608;&#1576;&#1610;&#1606;&#1605;&#1575; &#1603;&#1606;&#1578; &#1571;&#1578;&#1593;&#1604;&#1605; &#1571;&#1606;&#1606;&#1610; &#1571;&#1587;&#1578;&#1605;&#1578;&#1593; &#1576;&#1575;&#1604;&#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1603;&#1579;&#1585; &#1605;&#1606; &#1607;&#1584;&#1607; &#1575;&#1604;&#1605;&#1580;&#1575;&#1604;&#1575;&#1578;&#1548; &#1601;&#1602;&#1583; &#1571;&#1583;&#1609; &#1575;&#1604;&#1608;&#1602;&#1578; &#1575;&#1604;&#1584;&#1610; &#1571;&#1605;&#1590;&#1610;&#1578;&#1607; &#1601;&#1610; &#1607;&#1584;&#1575; &#1575;&#1604;&#1602;&#1591;&#1575;&#1593; &#1573;&#1604;&#1609; &#1578;&#1581;&#1587;&#1610;&#1606; &#1582;&#1576;&#1585;&#1578;&#1610; &#1608;&#1605;&#1607;&#1575;&#1585;&#1575;&#1578;&#1610; &#1576;&#1588;&#1603;&#1604; &#1593;&#1575;&#1605;.",
            // Persian
            "فارسی": "&#1575;&#1586; &#1587;&#1606; 12 &#1587;&#1575;&#1604;&#1711;&#1740; &#1588;&#1585;&#1608;&#1593; &#1576;&#1607; &#1740;&#1575;&#1583;&#1711;&#1740;&#1585;&#1740; &#1586;&#1576;&#1575;&#1606;&#8204;&#1607;&#1575; &#1608; &#1605;&#1607;&#1575;&#1585;&#1578;&#8204;&#1607;&#1575;&#1740; &#1576;&#1585;&#1606;&#1575;&#1605;&#1607;&#8204;&#1606;&#1608;&#1740;&#1587;&#1740; &#1606;&#1705;&#1585;&#1583;&#1605;. &#1575;&#1608;&#1575;&#1740;&#1604; &#1588;&#1585;&#1608;&#1593; &#1705;&#1585;&#1583;&#1605; &#1576;&#1607; &#1575;&#1740;&#1580;&#1575;&#1583; &#1608;&#1576; &#1587;&#1575;&#1740;&#1578; &#1576;&#1585;&#1575;&#1740; &#1583;&#1608;&#1587;&#1578;&#1575;&#1606; &#1608; &#1601;&#1602;&#1591; &#1576;&#1585;&#1575;&#1740; &#1587;&#1585;&#1711;&#1585;&#1605;&#1740;. &#1593;&#1604;&#1575;&#1608;&#1607; &#1576;&#1585; &#1578;&#1608;&#1587;&#1593;&#1607; &#1608;&#1576;&#1548; &#1662;&#1575;&#1740;&#1578;&#1608;&#1606; &#1608; &#1587;&#1575;&#1740;&#1585; &#1586;&#1576;&#1575;&#1606;&#8204;&#1607;&#1575;&#1740; &#1594;&#1740;&#1585; &#1601;&#1602;&#1591; &#1608;&#1576; &#1585;&#1575; &#1606;&#1740;&#1586; &#1576;&#1585;&#1585;&#1587;&#1740; &#1705;&#1585;&#1583;&#1605;. &#1575;&#1740;&#1606; &#1575;&#1588;&#1578;&#1740;&#1575;&#1602; &#1575;&#1586; &#1570;&#1606; &#1586;&#1605;&#1575;&#1606; &#1575;&#1583;&#1575;&#1605;&#1607; &#1740;&#1575;&#1601;&#1578; &#1608; &#1576;&#1607; &#1578;&#1589;&#1605;&#1740;&#1605; &#1605;&#1606; &#1576;&#1585;&#1575;&#1740; &#1705;&#1575;&#1585; &#1576;&#1607; &#1593;&#1606;&#1608;&#1575;&#1606; &#1740;&#1705; &#1578;&#1608;&#1587;&#1593;&#1607; &#1583;&#1607;&#1606;&#1583;&#1607; &#1608; &#1605;&#1588;&#1575;&#1608;&#1585; &#1608;&#1576; &#1570;&#1586;&#1575;&#1583; &#1605;&#1606;&#1580;&#1585; &#1588;&#1583;. &#1605;&#1608;&#1601;&#1602;&#1740;&#1578; &#1608; &#1587;&#1585;&#1711;&#1585;&#1605;&#1740; &#1605;&#1606; &#1583;&#1585; &#1575;&#1740;&#1606; &#1588;&#1594;&#1604; &#1576;&#1587;&#1740;&#1575;&#1585; &#1586;&#1740;&#1575;&#1583; &#1575;&#1587;&#1578; &#1608; &#1608;&#1575;&#1602;&#1593;&#1575;&#1611; &#1575;&#1740;&#1606; &#1575;&#1588;&#1578;&#1740;&#1575;&#1602; &#1585;&#1575; &#1586;&#1606;&#1583;&#1607; &#1606;&#1711;&#1607; &#1605;&#1740; &#1583;&#1575;&#1585;&#1583;.<br> <br> &#1588;&#1585;&#1608;&#1593; &#1578;&#1608;&#1587;&#1593;&#1607; &#1608;&#1576; &#1583;&#1585; &#1576;&#1705;&#8204;&#1575;&#1606;&#1583; (PHP &#1576;&#1575; Laravel&#1548; NodeJS&#1548; Python) &#1605;&#1606; &#1607;&#1605;&#1670;&#1606;&#1740;&#1606; &#1576;&#1575; &#1575;&#1587;&#1578;&#1601;&#1575;&#1583;&#1607; &#1575;&#1586; &#1670;&#1575;&#1585;&#1670;&#1608;&#1576;&#8204;&#1607;&#1575;&#1740; &#1605;&#1583;&#1585;&#1606; &#1605;&#1575;&#1606;&#1606;&#1583; React&#1548; Angular &#1740;&#1575; VueJS &#1583;&#1585; &#1576;&#1587;&#1740;&#1575;&#1585;&#1740; &#1575;&#1586; &#1662;&#1585;&#1608;&#1688;&#1607;&#8204;&#1607;&#1575;&#1548; &#1576;&#1740;&#1588;&#1578;&#1585; &#1608; &#1576;&#1740;&#1588;&#1578;&#1585; &#1576;&#1607; &#1740;&#1705; &#1578;&#1608;&#1587;&#1593;&#1607;&#8204;&#1583;&#1607;&#1606;&#1583;&#1607; frontend &#1578;&#1576;&#1583;&#1740;&#1604; &#1588;&#1583;&#1605;. &#1605;&#1606; &#1575;&#1740;&#1606; &#1585;&#1608;&#1586;&#1607;&#1575; &#1607;&#1585; &#1583;&#1608; &#1583;&#1606;&#1740;&#1575; &#1585;&#1575; &#1583;&#1608;&#1587;&#1578; &#1583;&#1575;&#1585;&#1605;!<br> <br> &#1605;&#1606; &#1607;&#1605;&#1670;&#1606;&#1740;&#1606; &#1576;&#1585;&#1606;&#1575;&#1605;&#1607; &#1607;&#1575;&#1740; &#1578;&#1605;&#1575;&#1605; &#1662;&#1588;&#1578;&#1607; &#1605;&#1740; &#1587;&#1575;&#1586;&#1605; &#1608; &#1583;&#1575;&#1606;&#1588; DevOps &#1608; &#1605;&#1581;&#1575;&#1587;&#1576;&#1575;&#1578; &#1575;&#1576;&#1585;&#1740; &#1605;&#1578;&#1582;&#1589;&#1589; &#1585;&#1575; &#1576;&#1607; &#1583;&#1587;&#1578; &#1570;&#1608;&#1585;&#1583;&#1607; &#1575;&#1605; - &#1705;&#1607; &#1578;&#1608;&#1587;&#1591; &#1576;&#1587;&#1740;&#1575;&#1585;&#1740; &#1575;&#1586; &#1711;&#1608;&#1575;&#1607;&#1740;&#1606;&#1575;&#1605;&#1607; &#1607;&#1575;&#1740; AWS &#1705;&#1607; &#1583;&#1575;&#1585;&#1605; (&#1575;&#1586; &#1580;&#1605;&#1604;&#1607; &#1711;&#1608;&#1575;&#1607;&#1740;&#1606;&#1575;&#1605;&#1607; Solutions Architect Professional &#1583;&#1585; &#1587;&#1591;&#1581; &#1576;&#1575;&#1604;&#1575;) &#1575;&#1579;&#1576;&#1575;&#1578; &#1588;&#1583;&#1607; &#1575;&#1587;&#1578;.<br> <br> &#1576;&#1607;&#8204;&#1593;&#1606;&#1608;&#1575;&#1606; &#1740;&#1705; &#1578;&#1608;&#1587;&#1593;&#1607;&#8204;&#1583;&#1607;&#1606;&#1583;&#1607; &#1582;&#1608;&#1583;&#1570;&#1605;&#1608;&#1582;&#1578;&#1607; &#1575;&#1740;&#1606; &#1588;&#1575;&#1606;&#1587; &#1585;&#1575; &#1583;&#1575;&#1588;&#1578;&#1605; &#1705;&#1607; &#1575;&#1601;&#1602; &#1582;&#1608;&#1583; &#1585;&#1575; &#1576;&#1575; &#1578;&#1581;&#1589;&#1740;&#1604; &#1583;&#1585; &#1605;&#1583;&#1740;&#1585;&#1740;&#1578; &#1576;&#1575;&#1586;&#1585;&#1711;&#1575;&#1606;&#1740; &#1705;&#1607; &#1583;&#1585; &#1570;&#1606; &#1605;&#1583;&#1585;&#1705; &#1705;&#1575;&#1585;&#1588;&#1606;&#1575;&#1587;&#1740; &#1575;&#1585;&#1588;&#1583; &#1583;&#1575;&#1585;&#1605;&#1548; &#1711;&#1587;&#1578;&#1585;&#1588; &#1583;&#1607;&#1605;. &#1575;&#1740;&#1606; &#1576;&#1607; &#1605;&#1606; &#1575;&#1605;&#1705;&#1575;&#1606; &#1583;&#1575;&#1583; &#1583;&#1585; &#1740;&#1705; &#1605;&#1588;&#1575;&#1608;&#1585; &#1575;&#1587;&#1578;&#1585;&#1575;&#1578;&#1688;&#1740; &#1576;&#1586;&#1585;&#1711; &#1608; &#1607;&#1605;&#1670;&#1606;&#1740;&#1606; &#1740;&#1705; &#1576;&#1575;&#1606;&#1705; &#1705;&#1575;&#1585; &#1705;&#1606;&#1605;. &#1583;&#1585; &#1581;&#1575;&#1604;&#1740; &#1705;&#1607; &#1740;&#1575;&#1583; &#1711;&#1585;&#1601;&#1578;&#1605; &#1705;&#1607; &#1575;&#1586; &#1578;&#1608;&#1587;&#1593;&#1607; &#1576;&#1740;&#1588;&#1578;&#1585; &#1575;&#1586; &#1575;&#1740;&#1606; &#1586;&#1605;&#1740;&#1606;&#1607; &#1607;&#1575; &#1604;&#1584;&#1578; &#1605;&#1740; &#1576;&#1585;&#1605;&#1548; &#1586;&#1605;&#1575;&#1606; &#1583;&#1585; &#1575;&#1740;&#1606; &#1576;&#1582;&#1588; &#1578;&#1580;&#1585;&#1576;&#1607; &#1608; &#1605;&#1607;&#1575;&#1585;&#1578; &#1607;&#1575;&#1740; &#1705;&#1604;&#1740; &#1605;&#1606; &#1585;&#1575; &#1576;&#1587;&#1740;&#1575;&#1585; &#1576;&#1607;&#1576;&#1608;&#1583; &#1576;&#1582;&#1588;&#1740;&#1583;.",
        },
        // Paragraph 2
        "Paragraph-2": {
            // English
            "English": "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses and more than 2,000,000 students on Udemy is the best proof for that.<br> <br> Whether working as development instructor or teaching Business Administration I always received great feedback. The most rewarding experience is to see how people find new, better jobs, build awesome web applications, acquire amazing projects or simply enjoy their hobby with the help of my content.<br> <br> Together with Manuel Lorenz, I founded Academind to offer the best possible learning experience to our more than 2,000,000 students.",
            // German
            "Deutsch": "Als autodidaktischer Profi kenne ich die harten Seiten und die schwierigen Themen beim Erlernen neuer oder beim Verbessern bereits bekannter Sprachen. Dieser Hintergrund und diese Erfahrung erm&ouml;glichen es mir, mich auf die wichtigsten Schl&uuml;sselkonzepte und Themen zu konzentrieren. Meine Erfolgsbilanz mit vielen 5-Sterne-Kursen und mehr als 2.000.000 Studenten auf Udemy ist der beste Beweis daf&uuml;r.<br> <br> Ob ich als Entwicklungstrainer arbeite oder Betriebswirtschaft unterrichte, ich habe immer gro&szlig;artiges Feedback erhalten. Die lohnendste Erfahrung ist zu sehen, wie Menschen mithilfe meiner Inhalte neue, bessere Jobs finden, gro&szlig;artige Webanwendungen erstellen, tolle Projekte erwerben oder einfach ihrem Hobby nachgehen.<br> <br> Zusammen mit Manuel Lorenz habe ich Academind gegr&uuml;ndet, um unseren mehr als 2.000.000 Studenten die bestm&ouml;gliche Lernerfahrung zu bieten.",
            // Chinese
            "中国人": "&#20316;&#20026;&#19968;&#21517;&#33258;&#23398;&#25104;&#25165;&#30340;&#19987;&#19994;&#20154;&#22763;&#65292;&#25105;&#38750;&#24120;&#20102;&#35299;&#23398;&#20064;&#26032;&#35821;&#35328;&#25110;&#25913;&#36827;&#24050;&#30693;&#35821;&#35328;&#26102;&#36935;&#21040;&#30340;&#22256;&#38590;&#21644;&#38590;&#28857;&#12290;&#36825;&#31181;&#32972;&#26223;&#21644;&#32463;&#39564;&#20351;&#25105;&#33021;&#22815;&#19987;&#27880;&#20110;&#26368;&#30456;&#20851;&#30340;&#20851;&#38190;&#27010;&#24565;&#21644;&#20027;&#39064;&#12290;&#25105;&#26366;&#22312; Udemy &#19978;&#24320;&#35774;&#36807;&#35768;&#22810; 5 &#26143;&#32423;&#35838;&#31243;&#65292;&#24182;&#21560;&#24341;&#20102;&#36229;&#36807; 2,000,000 &#21517;&#23398;&#29983;&#65292;&#36825;&#20415;&#26159;&#26368;&#22909;&#30340;&#35777;&#26126;&#12290;<br> <br> &#26080;&#35770;&#26159;&#25285;&#20219;&#24320;&#21457;&#35762;&#24072;&#36824;&#26159;&#25945;&#25480;&#24037;&#21830;&#31649;&#29702;&#35838;&#31243;&#65292;&#25105;&#24635;&#26159;&#25910;&#21040;&#24456;&#22909;&#30340;&#21453;&#39304;&#12290;&#26368;&#26377;&#24847;&#20041;&#30340;&#32463;&#21382;&#26159;&#30475;&#21040;&#20154;&#20204;&#22914;&#20309;&#20511;&#21161;&#25105;&#30340;&#20869;&#23481;&#25214;&#21040;&#26032;&#30340;&#12289;&#26356;&#22909;&#30340;&#24037;&#20316;&#12289;&#26500;&#24314;&#20986;&#33394;&#30340; Web &#24212;&#29992;&#31243;&#24207;&#12289;&#33719;&#24471;&#20196;&#20154;&#24778;&#21497;&#30340;&#39033;&#30446;&#25110;&#21482;&#26159;&#20139;&#21463;&#20182;&#20204;&#30340;&#29233;&#22909;&#12290;<br> <br> &#25105;&#19982; Manuel Lorenz &#20849;&#21516;&#21019;&#31435;&#20102; Academind&#65292;&#20026;&#25105;&#20204;&#30340; 2,000,000 &#22810;&#21517;&#23398;&#29983;&#25552;&#20379;&#26368;&#20339;&#30340;&#23398;&#20064;&#20307;&#39564;&#12290;",
            // Russian
            "Русский": "&#1050;&#1072;&#1082; &#1087;&#1088;&#1086;&#1092;&#1077;&#1089;&#1089;&#1080;&#1086;&#1085;&#1072;&#1083;-&#1089;&#1072;&#1084;&#1086;&#1091;&#1095;&#1082;&#1072;, &#1103; &#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1086; &#1079;&#1085;&#1072;&#1102; &#1089;&#1083;&#1086;&#1078;&#1085;&#1099;&#1077; &#1095;&#1072;&#1089;&#1090;&#1080; &#1080; &#1090;&#1077;&#1084;&#1099; &#1087;&#1088;&#1080; &#1080;&#1079;&#1091;&#1095;&#1077;&#1085;&#1080;&#1080; &#1085;&#1086;&#1074;&#1099;&#1093; &#1080;&#1083;&#1080; &#1091;&#1083;&#1091;&#1095;&#1096;&#1077;&#1085;&#1080;&#1080; &#1091;&#1078;&#1077; &#1080;&#1079;&#1074;&#1077;&#1089;&#1090;&#1085;&#1099;&#1093; &#1103;&#1079;&#1099;&#1082;&#1086;&#1074;. &#1069;&#1090;&#1086;&#1090; &#1086;&#1087;&#1099;&#1090; &#1080; &#1079;&#1085;&#1072;&#1085;&#1080;&#1103; &#1087;&#1086;&#1079;&#1074;&#1086;&#1083;&#1103;&#1102;&#1090; &#1084;&#1085;&#1077; &#1089;&#1086;&#1089;&#1088;&#1077;&#1076;&#1086;&#1090;&#1086;&#1095;&#1080;&#1090;&#1100;&#1089;&#1103; &#1085;&#1072; &#1089;&#1072;&#1084;&#1099;&#1093; &#1074;&#1072;&#1078;&#1085;&#1099;&#1093; &#1082;&#1083;&#1102;&#1095;&#1077;&#1074;&#1099;&#1093; &#1082;&#1086;&#1085;&#1094;&#1077;&#1087;&#1094;&#1080;&#1103;&#1093; &#1080; &#1090;&#1077;&#1084;&#1072;&#1093;. &#1052;&#1086;&#1081; &#1087;&#1086;&#1089;&#1083;&#1091;&#1078;&#1085;&#1086;&#1081; &#1089;&#1087;&#1080;&#1089;&#1086;&#1082; &#1080;&#1079; &#1084;&#1085;&#1086;&#1075;&#1080;&#1093; &#1082;&#1091;&#1088;&#1089;&#1086;&#1074; &#1089; &#1088;&#1077;&#1081;&#1090;&#1080;&#1085;&#1075;&#1086;&#1084; 5 &#1079;&#1074;&#1077;&#1079;&#1076; &#1080; &#1073;&#1086;&#1083;&#1077;&#1077; 2 000 000 &#1089;&#1090;&#1091;&#1076;&#1077;&#1085;&#1090;&#1086;&#1074; &#1085;&#1072; Udemy &#1103;&#1074;&#1083;&#1103;&#1077;&#1090;&#1089;&#1103; &#1083;&#1091;&#1095;&#1096;&#1080;&#1084; &#1076;&#1086;&#1082;&#1072;&#1079;&#1072;&#1090;&#1077;&#1083;&#1100;&#1089;&#1090;&#1074;&#1086;&#1084; &#1101;&#1090;&#1086;&#1075;&#1086;.<br> <br> &#1056;&#1072;&#1073;&#1086;&#1090;&#1072;&#1103; &#1080;&#1085;&#1089;&#1090;&#1088;&#1091;&#1082;&#1090;&#1086;&#1088;&#1086;&#1084; &#1087;&#1086; &#1088;&#1072;&#1079;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1077; &#1080;&#1083;&#1080; &#1087;&#1088;&#1077;&#1087;&#1086;&#1076;&#1072;&#1074;&#1072;&#1103; &#1076;&#1077;&#1083;&#1086;&#1074;&#1086;&#1077; &#1072;&#1076;&#1084;&#1080;&#1085;&#1080;&#1089;&#1090;&#1088;&#1080;&#1088;&#1086;&#1074;&#1072;&#1085;&#1080;&#1077;, &#1103; &#1074;&#1089;&#1077;&#1075;&#1076;&#1072; &#1087;&#1086;&#1083;&#1091;&#1095;&#1072;&#1083; &#1086;&#1090;&#1083;&#1080;&#1095;&#1085;&#1099;&#1077; &#1086;&#1090;&#1079;&#1099;&#1074;&#1099;. &#1057;&#1072;&#1084;&#1099;&#1081; &#1087;&#1086;&#1083;&#1077;&#1079;&#1085;&#1099;&#1081; &#1086;&#1087;&#1099;&#1090; &mdash; &#1074;&#1080;&#1076;&#1077;&#1090;&#1100;, &#1082;&#1072;&#1082; &#1083;&#1102;&#1076;&#1080; &#1085;&#1072;&#1093;&#1086;&#1076;&#1103;&#1090; &#1085;&#1086;&#1074;&#1091;&#1102;, &#1083;&#1091;&#1095;&#1096;&#1091;&#1102; &#1088;&#1072;&#1073;&#1086;&#1090;&#1091;, &#1089;&#1086;&#1079;&#1076;&#1072;&#1102;&#1090; &#1087;&#1086;&#1090;&#1088;&#1103;&#1089;&#1072;&#1102;&#1097;&#1080;&#1077; &#1074;&#1077;&#1073;-&#1087;&#1088;&#1080;&#1083;&#1086;&#1078;&#1077;&#1085;&#1080;&#1103;, &#1087;&#1088;&#1080;&#1086;&#1073;&#1088;&#1077;&#1090;&#1072;&#1102;&#1090; &#1087;&#1086;&#1090;&#1088;&#1103;&#1089;&#1072;&#1102;&#1097;&#1080;&#1077; &#1087;&#1088;&#1086;&#1077;&#1082;&#1090;&#1099; &#1080;&#1083;&#1080; &#1087;&#1088;&#1086;&#1089;&#1090;&#1086; &#1085;&#1072;&#1089;&#1083;&#1072;&#1078;&#1076;&#1072;&#1102;&#1090;&#1089;&#1103; &#1089;&#1074;&#1086;&#1080;&#1084; &#1093;&#1086;&#1073;&#1073;&#1080; &#1089; &#1087;&#1086;&#1084;&#1086;&#1097;&#1100;&#1102; &#1084;&#1086;&#1077;&#1075;&#1086; &#1082;&#1086;&#1085;&#1090;&#1077;&#1085;&#1090;&#1072;.<br> <br> &#1042;&#1084;&#1077;&#1089;&#1090;&#1077; &#1089; &#1052;&#1072;&#1085;&#1091;&#1101;&#1083;&#1077;&#1084; &#1051;&#1086;&#1088;&#1077;&#1085;&#1094;&#1086;&#1084; &#1103; &#1086;&#1089;&#1085;&#1086;&#1074;&#1072;&#1083; Academind, &#1095;&#1090;&#1086;&#1073;&#1099; &#1087;&#1088;&#1077;&#1076;&#1083;&#1086;&#1078;&#1080;&#1090;&#1100; &#1085;&#1072;&#1080;&#1083;&#1091;&#1095;&#1096;&#1080;&#1081; &#1074;&#1086;&#1079;&#1084;&#1086;&#1078;&#1085;&#1099;&#1081; &#1086;&#1087;&#1099;&#1090; &#1086;&#1073;&#1091;&#1095;&#1077;&#1085;&#1080;&#1103; &#1076;&#1083;&#1103; &#1085;&#1072;&#1096;&#1080;&#1093; &#1073;&#1086;&#1083;&#1077;&#1077; &#1095;&#1077;&#1084; 2 000 000 &#1089;&#1090;&#1091;&#1076;&#1077;&#1085;&#1090;&#1086;&#1074;.",
            // French
            "Français": "En tant que professionnel autodidacte, je connais parfaitement les parties difficiles et les sujets difficiles lors de l'apprentissage de nouvelles langues ou de l'am&eacute;lioration de langues d&eacute;j&agrave; connues. Ce parcours et cette exp&eacute;rience me permettent de me concentrer sur les concepts et sujets cl&eacute;s les plus pertinents. Mon historique de nombreux cours not&eacute;s 5 &eacute;toiles et de plus de 2 000 000 d'&eacute;tudiants sur Udemy en est la meilleure preuve.<br> <br> Que je travaille comme instructeur en d&eacute;veloppement ou que j'enseigne l'administration des affaires, j'ai toujours re&ccedil;u de tr&egrave;s bons retours. L'exp&eacute;rience la plus enrichissante est de voir comment les gens trouvent de nouveaux et meilleurs emplois, cr&eacute;ent des applications Web g&eacute;niales, acqui&egrave;rent des projets incroyables ou profitent simplement de leur passe-temps avec l'aide de mon contenu.<br> <br> Avec Manuel Lorenz, j'ai fond&eacute; Academind pour offrir la meilleure exp&eacute;rience d'apprentissage possible &agrave; nos plus de 2 000 000 d'&eacute;tudiants.",
            // Japanese
            "日本語": "&#29420;&#23398;&#12398;&#12503;&#12525;&#12392;&#12375;&#12390;&#12289;&#31169;&#12399;&#26032;&#12375;&#12356;&#35328;&#35486;&#12434;&#23398;&#12435;&#12384;&#12426;&#12289;&#12377;&#12391;&#12395;&#30693;&#12387;&#12390;&#12356;&#12427;&#35328;&#35486;&#12434;&#19978;&#36948;&#12373;&#12379;&#12383;&#12426;&#12377;&#12427;&#12392;&#12365;&#12395;&#12289;&#38627;&#12375;&#12356;&#37096;&#20998;&#12420;&#38627;&#12375;&#12356;&#12488;&#12500;&#12483;&#12463;&#12434;&#26412;&#24403;&#12395;&#30693;&#12387;&#12390;&#12356;&#12414;&#12377;&#12290;&#12371;&#12398;&#12496;&#12483;&#12463;&#12464;&#12521;&#12454;&#12531;&#12489;&#12392;&#32076;&#39443;&#12395;&#12424;&#12426;&#12289;&#26368;&#12418;&#38306;&#36899;&#24615;&#12398;&#39640;&#12356;&#20027;&#35201;&#12394;&#27010;&#24565;&#12392;&#12488;&#12500;&#12483;&#12463;&#12395;&#38598;&#20013;&#12377;&#12427;&#12371;&#12392;&#12364;&#12391;&#12365;&#12414;&#12377;&#12290;Udemy &#12391;&#12398; 5 &#12388;&#26143;&#35413;&#20385;&#12398;&#12467;&#12540;&#12473;&#12420; 2,000,000 &#20154;&#12434;&#36229;&#12360;&#12427;&#21463;&#35611;&#29983;&#12398;&#23455;&#32318;&#12364;&#12289;&#12381;&#12398;&#26368;&#33391;&#12398;&#35388;&#25312;&#12391;&#12377;&#12290;<br> <br> &#38283;&#30330;&#12452;&#12531;&#12473;&#12488;&#12521;&#12463;&#12479;&#12540;&#12392;&#12375;&#12390;&#20685;&#12367;&#12392;&#12365;&#12418;&#12289;&#32076;&#21942;&#23398;&#12434;&#25945;&#12360;&#12427;&#12392;&#12365;&#12418;&#12289;&#31169;&#12399;&#24120;&#12395;&#32032;&#26228;&#12425;&#12375;&#12356;&#12501;&#12451;&#12540;&#12489;&#12496;&#12483;&#12463;&#12434;&#21463;&#12369;&#12390;&#12356;&#12414;&#12377;&#12290;&#26368;&#12418;&#12420;&#12426;&#12364;&#12356;&#12398;&#12354;&#12427;&#32076;&#39443;&#12399;&#12289;&#20154;&#12293;&#12364;&#31169;&#12398;&#12467;&#12531;&#12486;&#12531;&#12484;&#12398;&#21161;&#12369;&#12434;&#20511;&#12426;&#12390;&#12289;&#26032;&#12375;&#12356;&#12289;&#12424;&#12426;&#33391;&#12356;&#20181;&#20107;&#12434;&#35211;&#12388;&#12369;&#12383;&#12426;&#12289;&#32032;&#26228;&#12425;&#12375;&#12356; Web &#12450;&#12503;&#12522;&#12465;&#12540;&#12471;&#12519;&#12531;&#12434;&#27083;&#31689;&#12375;&#12383;&#12426;&#12289;&#32032;&#26228;&#12425;&#12375;&#12356;&#12503;&#12525;&#12472;&#12455;&#12463;&#12488;&#12434;&#29554;&#24471;&#12375;&#12383;&#12426;&#12289;&#21336;&#12395;&#36259;&#21619;&#12434;&#27005;&#12375;&#12435;&#12384;&#12426;&#12377;&#12427;&#12398;&#12434;&#35211;&#12427;&#12371;&#12392;&#12391;&#12377;&#12290;<br> <br> Manuel Lorenz &#12392;&#19968;&#32210;&#12395;&#12289;2,000,000 &#20154;&#12434;&#36229;&#12360;&#12427;&#21463;&#35611;&#29983;&#12395;&#21487;&#33021;&#12394;&#38480;&#12426;&#26368;&#39640;&#12398;&#23398;&#32722;&#20307;&#39443;&#12434;&#25552;&#20379;&#12377;&#12427;&#12383;&#12417;&#12395;&#12289;Academind &#12434;&#35373;&#31435;&#12375;&#12414;&#12375;&#12383;&#12290;",
            // Korean
            "한국인": "&#46021;&#54617; &#51204;&#47928;&#44032;&#47196;&#49436; &#51200;&#45716; &#49352;&#47196;&#50868; &#50616;&#50612;&#47484; &#48176;&#50864;&#44144;&#45208; &#51060;&#48120; &#50508;&#47140;&#51652; &#50616;&#50612;&#47484; &#44060;&#49440;&#54624; &#46412; &#50612;&#47140;&#50868; &#48512;&#48516;&#44284; &#50612;&#47140;&#50868; &#51452;&#51228;&#47484; &#51221;&#47568; &#51096; &#50508;&#44256; &#51080;&#49845;&#45768;&#45796;. &#51060;&#47084;&#54620; &#48176;&#44221;&#44284; &#44221;&#54744; &#45909;&#48516;&#50640; &#44032;&#51109; &#44288;&#47144;&#49457; &#51080;&#45716; &#54645;&#49900; &#44060;&#45392;&#44284; &#51452;&#51228;&#50640; &#51665;&#51473;&#54624; &#49688; &#51080;&#49845;&#45768;&#45796;. Udemy&#50640;&#49436; 5&#49457;&#44553; &#53076;&#49828;&#50752; 2,000,000&#47749; &#51060;&#49345;&#51032; &#54617;&#49373;&#51012; &#48372;&#50976;&#54620; &#51200;&#51032; &#49892;&#51201;&#51060; &#51060;&#47484; &#51613;&#47749;&#54633;&#45768;&#45796;.<br> <br> &#44060;&#48156; &#44053;&#49324;&#47196; &#51068;&#54616;&#46304; &#44221;&#50689;&#54617;&#51012; &#44032;&#47476;&#52824;&#46304; &#54637;&#49345; &#51339;&#51008; &#54588;&#46300;&#48177;&#51012; &#48155;&#50520;&#49845;&#45768;&#45796;. &#44032;&#51109; &#48372;&#46988; &#51080;&#45716; &#44221;&#54744;&#51008; &#49324;&#46988;&#46308;&#51060; &#50612;&#46523;&#44172; &#49352;&#47213;&#44256; &#45908; &#45208;&#51008; &#51649;&#51109;&#51012; &#52286;&#44256;, &#47691;&#51652; &#50937; &#50528;&#54540;&#47532;&#52992;&#51060;&#49496;&#51012; &#44396;&#52629;&#54616;&#44256;, &#45440;&#46972;&#50868; &#54532;&#47196;&#51229;&#53944;&#47484; &#54925;&#46301;&#54616;&#44144;&#45208; &#45800;&#49692;&#55176; &#51228; &#53080;&#53584;&#52768;&#51032; &#46020;&#50880;&#51004;&#47196; &#52712;&#48120;&#47484; &#51600;&#44592;&#45716;&#51648; &#48372;&#45716; &#44163;&#51077;&#45768;&#45796;.<br> <br> Manuel Lorenz&#50752; &#54632;&#44760; &#51200;&#45716; 2,000,000&#47749; &#51060;&#49345;&#51032; &#54617;&#49373;&#46308;&#50640;&#44172; &#52572;&#49345;&#51032; &#54617;&#49845; &#44221;&#54744;&#51012; &#51228;&#44277;&#54616;&#44592; &#50948;&#54644; Academind&#47484; &#49444;&#47549;&#54664;&#49845;&#45768;&#45796;.",
            // Spanish
            "Español": "Como profesional autodidacta, conozco muy bien las partes dif&iacute;ciles y los temas dif&iacute;ciles a la hora de aprender un lenguaje nuevo o mejorar uno que ya conozco. Esta formaci&oacute;n y experiencia me permiten centrarme en los conceptos y temas clave m&aacute;s relevantes. Mi historial de muchos cursos con calificaci&oacute;n de 5 estrellas y m&aacute;s de 2.000.000 de estudiantes en Udemy es la mejor prueba de ello.<br> <br> Ya sea trabajando como instructor de desarrollo o ense&ntilde;ando Administraci&oacute;n de Empresas, siempre recib&iacute; excelentes comentarios. La experiencia m&aacute;s gratificante es ver c&oacute;mo las personas encuentran nuevos y mejores trabajos, crean aplicaciones web incre&iacute;bles, adquieren proyectos asombrosos o simplemente disfrutan de su pasatiempo con la ayuda de mi contenido.<br> <br> Junto con Manuel Lorenz, fund&eacute; Academind para ofrecer la mejor experiencia de aprendizaje posible a nuestros m&aacute;s de 2.000.000 de estudiantes.",
            // Hindi
            "हिंदी": "&#2319;&#2325; &#2360;&#2381;&#2357;-&#2358;&#2367;&#2325;&#2381;&#2359;&#2367;&#2340; &#2346;&#2375;&#2358;&#2375;&#2357;&#2352; &#2325;&#2375; &#2352;&#2370;&#2346; &#2350;&#2375;&#2306; &#2350;&#2376;&#2306; &#2344;&#2312; &#2349;&#2366;&#2359;&#2366;&#2319;&#2305; &#2360;&#2368;&#2326;&#2340;&#2375; &#2360;&#2350;&#2351; &#2351;&#2366; &#2346;&#2361;&#2354;&#2375; &#2360;&#2375; &#2332;&#2381;&#2334;&#2366;&#2340; &#2349;&#2366;&#2359;&#2366;&#2323;&#2306; &#2350;&#2375;&#2306; &#2360;&#2369;&#2343;&#2366;&#2352; &#2325;&#2352;&#2340;&#2375; &#2360;&#2350;&#2351; &#2357;&#2366;&#2360;&#2381;&#2340;&#2357; &#2350;&#2375;&#2306; &#2325;&#2336;&#2367;&#2344; &#2349;&#2366;&#2327;&#2379;&#2306; &#2324;&#2352; &#2325;&#2336;&#2367;&#2344; &#2357;&#2367;&#2359;&#2351;&#2379;&#2306; &#2325;&#2379; &#2332;&#2366;&#2344;&#2340;&#2366; &#2361;&#2370;&#2305;&#2404; &#2351;&#2361; &#2346;&#2371;&#2359;&#2381;&#2336;&#2349;&#2370;&#2350;&#2367; &#2324;&#2352; &#2309;&#2344;&#2369;&#2349;&#2357; &#2350;&#2369;&#2333;&#2375; &#2360;&#2348;&#2360;&#2375; &#2346;&#2381;&#2352;&#2366;&#2360;&#2306;&#2327;&#2367;&#2325; &#2350;&#2369;&#2326;&#2381;&#2351; &#2309;&#2357;&#2343;&#2366;&#2352;&#2339;&#2366;&#2323;&#2306; &#2324;&#2352; &#2357;&#2367;&#2359;&#2351;&#2379;&#2306; &#2346;&#2352; &#2343;&#2381;&#2351;&#2366;&#2344; &#2325;&#2375;&#2306;&#2342;&#2381;&#2352;&#2367;&#2340; &#2325;&#2352;&#2344;&#2375; &#2350;&#2375;&#2306; &#2360;&#2325;&#2381;&#2359;&#2350; &#2348;&#2344;&#2366;&#2340;&#2366; &#2361;&#2376;&#2404; Udemy &#2346;&#2352; &#2325;&#2312; 5-&#2360;&#2381;&#2335;&#2366;&#2352; &#2352;&#2375;&#2335;&#2375;&#2337; &#2346;&#2366;&#2336;&#2381;&#2351;&#2325;&#2381;&#2352;&#2350;&#2379;&#2306; &#2324;&#2352; 2,000,000 &#2360;&#2375; &#2309;&#2343;&#2367;&#2325; &#2331;&#2366;&#2340;&#2381;&#2352;&#2379;&#2306; &#2325;&#2366; &#2350;&#2375;&#2352;&#2366; &#2335;&#2381;&#2352;&#2376;&#2325; &#2352;&#2367;&#2325;&#2377;&#2352;&#2381;&#2337; &#2311;&#2360;&#2325;&#2366; &#2360;&#2348;&#2360;&#2375; &#2309;&#2330;&#2381;&#2331;&#2366; &#2360;&#2348;&#2370;&#2340; &#2361;&#2376;&#2404;<br> <br> &#2330;&#2366;&#2361;&#2375; &#2350;&#2376;&#2306; &#2357;&#2367;&#2325;&#2366;&#2360; &#2346;&#2381;&#2352;&#2358;&#2367;&#2325;&#2381;&#2359;&#2325; &#2325;&#2375; &#2352;&#2370;&#2346; &#2350;&#2375;&#2306; &#2325;&#2366;&#2350; &#2325;&#2352; &#2352;&#2361;&#2366; &#2361;&#2370;&#2305; &#2351;&#2366; &#2357;&#2381;&#2351;&#2357;&#2360;&#2366;&#2351; &#2346;&#2381;&#2352;&#2358;&#2366;&#2360;&#2344; &#2346;&#2338;&#2364;&#2366; &#2352;&#2361;&#2366; &#2361;&#2370;&#2305;, &#2350;&#2369;&#2333;&#2375; &#2361;&#2350;&#2375;&#2358;&#2366; &#2358;&#2366;&#2344;&#2342;&#2366;&#2352; &#2346;&#2381;&#2352;&#2340;&#2367;&#2325;&#2381;&#2352;&#2367;&#2351;&#2366; &#2350;&#2367;&#2354;&#2368; &#2361;&#2376;&#2404; &#2360;&#2348;&#2360;&#2375; &#2346;&#2369;&#2352;&#2360;&#2381;&#2325;&#2371;&#2340; &#2309;&#2344;&#2369;&#2349;&#2357; &#2351;&#2361; &#2342;&#2375;&#2326;&#2344;&#2366; &#2361;&#2376; &#2325;&#2367; &#2354;&#2379;&#2327; &#2350;&#2375;&#2352;&#2368; &#2360;&#2366;&#2350;&#2327;&#2381;&#2352;&#2368; &#2325;&#2368; &#2350;&#2342;&#2342; &#2360;&#2375; &#2325;&#2376;&#2360;&#2375; &#2344;&#2312;, &#2348;&#2375;&#2361;&#2340;&#2352; &#2344;&#2380;&#2325;&#2352;&#2367;&#2351;&#2366;&#2305; &#2346;&#2366;&#2340;&#2375; &#2361;&#2376;&#2306;, &#2358;&#2366;&#2344;&#2342;&#2366;&#2352; &#2357;&#2375;&#2348; &#2319;&#2346;&#2381;&#2354;&#2367;&#2325;&#2375;&#2358;&#2344; &#2348;&#2344;&#2366;&#2340;&#2375; &#2361;&#2376;&#2306;, &#2309;&#2342;&#2381;&#2349;&#2369;&#2340; &#2346;&#2352;&#2367;&#2351;&#2379;&#2332;&#2344;&#2366;&#2319;&#2305; &#2361;&#2366;&#2360;&#2367;&#2354; &#2325;&#2352;&#2340;&#2375; &#2361;&#2376;&#2306; &#2351;&#2366; &#2348;&#2360; &#2309;&#2346;&#2344;&#2375; &#2358;&#2380;&#2325; &#2325;&#2366; &#2310;&#2344;&#2306;&#2342; &#2354;&#2375;&#2340;&#2375; &#2361;&#2376;&#2306;&#2404;<br> <br> &#2350;&#2376;&#2344;&#2369;&#2309;&#2354; &#2354;&#2379;&#2352;&#2375;&#2306;&#2332; &#2325;&#2375; &#2360;&#2366;&#2341; &#2350;&#2367;&#2354;&#2325;&#2352;, &#2350;&#2376;&#2306;&#2344;&#2375; &#2309;&#2346;&#2344;&#2375; 2,000,000 &#2360;&#2375; &#2309;&#2343;&#2367;&#2325; &#2331;&#2366;&#2340;&#2381;&#2352;&#2379;&#2306; &#2325;&#2379; &#2360;&#2352;&#2381;&#2357;&#2379;&#2340;&#2381;&#2340;&#2350; &#2360;&#2306;&#2349;&#2357; &#2360;&#2368;&#2326;&#2344;&#2375; &#2325;&#2366; &#2309;&#2344;&#2369;&#2349;&#2357; &#2346;&#2381;&#2352;&#2342;&#2366;&#2344; &#2325;&#2352;&#2344;&#2375; &#2325;&#2375; &#2354;&#2367;&#2319; &#2319;&#2325;&#2375;&#2337;&#2350;&#2366;&#2311;&#2306;&#2337; &#2325;&#2368; &#2360;&#2381;&#2341;&#2366;&#2346;&#2344;&#2366; &#2325;&#2368;&#2404;",
            // Portuguese
            "Português": "Como profissional autodidata, conhe&ccedil;o realmente as partes dif&iacute;ceis e os temas dif&iacute;ceis quando se aprende novas l&iacute;nguas ou se melhora em l&iacute;nguas j&aacute; conhecidas. Esta forma&ccedil;&atilde;o e experi&ecirc;ncia permitem-me focar nos principais conceitos e t&oacute;picos mais relevantes. O meu hist&oacute;rico de muitos cursos classificados com 5 estrelas e mais de 2.000.000 de alunos na Udemy &eacute; a melhor prova disso.<br> <br> Seja a trabalhar como instrutor de desenvolvimento ou a ensinar Gest&atilde;o de Empresas, sempre recebi &oacute;timos feedbacks. A experi&ecirc;ncia mais gratificante &eacute; ver como as pessoas encontram novos e melhores empregos, criam aplica&ccedil;&otilde;es web fant&aacute;sticas, adquirem projetos fant&aacute;sticos ou simplesmente aproveitam os seus passatempos com a ajuda do meu conte&uacute;do.<br> <br> Juntamente com Manuel Lorenz, fundei a Academind para oferecer a melhor experi&ecirc;ncia de aprendizagem poss&iacute;vel aos nossos mais de 2.000.000 de alunos.",
            // Bengali
            "বাংলা": "&#2447;&#2453;&#2460;&#2472; &#2488;&#2509;&#2476;-&#2486;&#2495;&#2453;&#2509;&#2487;&#2495;&#2468; &#2474;&#2503;&#2486;&#2494;&#2470;&#2494;&#2480; &#2489;&#2495;&#2488;&#2494;&#2476;&#2503; &#2438;&#2478;&#2495; &#2488;&#2468;&#2509;&#2479;&#2495;&#2439; &#2453;&#2464;&#2495;&#2472; &#2437;&#2434;&#2486; &#2447;&#2476;&#2434; &#2453;&#2464;&#2495;&#2472; &#2476;&#2495;&#2487;&#2479;&#2492;&#2455;&#2497;&#2482;&#2495; &#2460;&#2494;&#2472;&#2495; &#2479;&#2454;&#2472; &#2472;&#2468;&#2497;&#2472; &#2486;&#2503;&#2454;&#2494;&#2480; &#2476;&#2494; &#2439;&#2468;&#2495;&#2478;&#2471;&#2509;&#2479;&#2503; &#2474;&#2480;&#2495;&#2458;&#2495;&#2468; &#2477;&#2494;&#2487;&#2494;&#2455;&#2497;&#2482;&#2495;&#2468;&#2503; &#2441;&#2472;&#2509;&#2472;&#2468;&#2495; &#2453;&#2480;&#2494;&#2480; &#2488;&#2478;&#2479;&#2492;&#2404; &#2447;&#2439; &#2474;&#2463;&#2477;&#2498;&#2478;&#2495; &#2447;&#2476;&#2434; &#2437;&#2477;&#2495;&#2460;&#2509;&#2462;&#2468;&#2494; &#2438;&#2478;&#2494;&#2453;&#2503; &#2488;&#2476;&#2458;&#2503;&#2479;&#2492;&#2503; &#2474;&#2509;&#2480;&#2494;&#2488;&#2457;&#2509;&#2455;&#2495;&#2453; &#2478;&#2498;&#2482; &#2471;&#2494;&#2480;&#2467;&#2494; &#2447;&#2476;&#2434; &#2476;&#2495;&#2487;&#2479;&#2492;&#2455;&#2497;&#2482;&#2495;&#2468;&#2503; &#2475;&#2507;&#2453;&#2494;&#2488; &#2453;&#2480;&#2468;&#2503; &#2488;&#2453;&#2509;&#2487;&#2478; &#2453;&#2480;&#2503;&#2404; Udemy-&#2447; &#2437;&#2472;&#2503;&#2453; 5-&#2488;&#2509;&#2463;&#2494;&#2480; &#2480;&#2503;&#2463;&#2503;&#2465; &#2453;&#2507;&#2480;&#2509;&#2488; &#2447;&#2476;&#2434; 2,000,000-&#2447;&#2480; &#2476;&#2503;&#2486;&#2495; &#2486;&#2495;&#2453;&#2509;&#2487;&#2494;&#2480;&#2509;&#2469;&#2496;&#2480; &#2438;&#2478;&#2494;&#2480; &#2463;&#2509;&#2480;&#2509;&#2479;&#2494;&#2453; &#2480;&#2503;&#2453;&#2480;&#2509;&#2465; &#2468;&#2494;&#2480; &#2460;&#2472;&#2509;&#2479; &#2488;&#2503;&#2480;&#2494; &#2474;&#2509;&#2480;&#2478;&#2494;&#2467;&#2404;<br> <br> &#2441;&#2472;&#2509;&#2472;&#2479;&#2492;&#2472; &#2474;&#2509;&#2480;&#2486;&#2495;&#2453;&#2509;&#2487;&#2453; &#2489;&#2495;&#2488;&#2494;&#2476;&#2503; &#2453;&#2494;&#2460; &#2453;&#2480;&#2494; &#2489;&#2507;&#2453; &#2476;&#2494; &#2476;&#2509;&#2479;&#2476;&#2488;&#2494;&#2479;&#2492; &#2474;&#2509;&#2480;&#2486;&#2494;&#2488;&#2472; &#2486;&#2503;&#2454;&#2494;&#2472;&#2507; &#2489;&#2507;&#2453; &#2472;&#2494; &#2453;&#2503;&#2472; &#2438;&#2478;&#2495; &#2488;&#2480;&#2509;&#2476;&#2470;&#2494; &#2470;&#2497;&#2480;&#2509;&#2470;&#2494;&#2472;&#2509;&#2468; &#2474;&#2509;&#2480;&#2468;&#2495;&#2453;&#2509;&#2480;&#2495;&#2479;&#2492;&#2494; &#2474;&#2503;&#2479;&#2492;&#2503;&#2459;&#2495;&#2404; &#2438;&#2478;&#2494;&#2480; &#2476;&#2495;&#2487;&#2479;&#2492;&#2476;&#2488;&#2509;&#2468;&#2497;&#2480; &#2488;&#2494;&#2489;&#2494;&#2479;&#2509;&#2479;&#2503; &#2482;&#2507;&#2453;&#2503;&#2480;&#2494; &#2453;&#2496;&#2477;&#2494;&#2476;&#2503; &#2472;&#2468;&#2497;&#2472;, &#2438;&#2480;&#2451; &#2477;&#2494;&#2482; &#2458;&#2494;&#2453;&#2480;&#2495; &#2454;&#2497;&#2433;&#2460;&#2503; &#2474;&#2494;&#2479;&#2492;, &#2470;&#2497;&#2480;&#2509;&#2470;&#2494;&#2472;&#2509;&#2468; &#2451;&#2479;&#2492;&#2503;&#2476; &#2437;&#2509;&#2479;&#2494;&#2474;&#2509;&#2482;&#2495;&#2453;&#2503;&#2486;&#2472; &#2468;&#2504;&#2480;&#2495; &#2453;&#2480;&#2503;, &#2438;&#2486;&#2509;&#2458;&#2480;&#2509;&#2479;&#2460;&#2472;&#2453; &#2474;&#2509;&#2480;&#2453;&#2482;&#2509;&#2474;&#2455;&#2497;&#2482;&#2495; &#2437;&#2480;&#2509;&#2460;&#2472; &#2453;&#2480;&#2503; &#2476;&#2494; &#2453;&#2503;&#2476;&#2482; &#2468;&#2494;&#2470;&#2503;&#2480; &#2486;&#2454; &#2441;&#2474;&#2477;&#2507;&#2455; &#2453;&#2480;&#2503; &#2468;&#2494; &#2470;&#2503;&#2454;&#2494; &#2488;&#2476;&#2458;&#2503;&#2479;&#2492;&#2503; &#2475;&#2482;&#2474;&#2509;&#2480;&#2488;&#2498; &#2437;&#2477;&#2495;&#2460;&#2509;&#2462;&#2468;&#2494;&#2404;<br> <br> &#2478;&#2509;&#2479;&#2494;&#2472;&#2497;&#2479;&#2492;&#2503;&#2482; &#2482;&#2480;&#2503;&#2462;&#2509;&#2460;&#2503;&#2480; &#2488;&#2494;&#2469;&#2503; &#2447;&#2453;&#2468;&#2509;&#2480;&#2503;, &#2438;&#2478;&#2495; &#2438;&#2478;&#2494;&#2470;&#2503;&#2480; 2,000,000-&#2447;&#2480;&#2451; &#2476;&#2503;&#2486;&#2495; &#2486;&#2495;&#2453;&#2509;&#2487;&#2494;&#2480;&#2509;&#2469;&#2496;&#2453;&#2503; &#2486;&#2503;&#2454;&#2494;&#2480; &#2488;&#2480;&#2509;&#2476;&#2507;&#2468;&#2509;&#2468;&#2478; &#2437;&#2477;&#2495;&#2460;&#2509;&#2462;&#2468;&#2494; &#2470;&#2503;&#2451;&#2479;&#2492;&#2494;&#2480; &#2460;&#2472;&#2509;&#2479; Academind &#2474;&#2509;&#2480;&#2468;&#2495;&#2487;&#2509;&#2464;&#2494; &#2453;&#2480;&#2503;&#2459;&#2495;&#2404;",
            // Arabic
            "عَرَبِيّ": "&#1576;&#1589;&#1601;&#1578;&#1610; &#1605;&#1581;&#1578;&#1585;&#1601;&#1611;&#1575; &#1593;&#1604;&#1605;&#1578; &#1606;&#1601;&#1587;&#1610; &#1576;&#1606;&#1601;&#1587;&#1610;&#1548; &#1601;&#1571;&#1606;&#1575; &#1571;&#1593;&#1585;&#1601; &#1581;&#1602;&#1611;&#1575; &#1575;&#1604;&#1571;&#1580;&#1586;&#1575;&#1569; &#1575;&#1604;&#1589;&#1593;&#1576;&#1577; &#1608;&#1575;&#1604;&#1605;&#1608;&#1590;&#1608;&#1593;&#1575;&#1578; &#1575;&#1604;&#1589;&#1593;&#1576;&#1577; &#1593;&#1606;&#1583; &#1578;&#1593;&#1604;&#1605; &#1604;&#1594;&#1575;&#1578; &#1580;&#1583;&#1610;&#1583;&#1577; &#1571;&#1608; &#1578;&#1581;&#1587;&#1610;&#1606;&#1607;&#1575;. &#1578;&#1605;&#1603;&#1606;&#1606;&#1610; &#1607;&#1584;&#1607; &#1575;&#1604;&#1582;&#1604;&#1601;&#1610;&#1577; &#1608;&#1575;&#1604;&#1582;&#1576;&#1585;&#1577; &#1605;&#1606; &#1575;&#1604;&#1578;&#1585;&#1603;&#1610;&#1586; &#1593;&#1604;&#1609; &#1575;&#1604;&#1605;&#1601;&#1575;&#1607;&#1610;&#1605; &#1608;&#1575;&#1604;&#1605;&#1608;&#1590;&#1608;&#1593;&#1575;&#1578; &#1575;&#1604;&#1585;&#1574;&#1610;&#1587;&#1610;&#1577; &#1575;&#1604;&#1571;&#1603;&#1579;&#1585; &#1589;&#1604;&#1577;. &#1573;&#1606; &#1587;&#1580;&#1604;&#1610; &#1575;&#1604;&#1581;&#1575;&#1601;&#1604; &#1576;&#1575;&#1604;&#1593;&#1583;&#1610;&#1583; &#1605;&#1606; &#1575;&#1604;&#1583;&#1608;&#1585;&#1575;&#1578; &#1575;&#1604;&#1578;&#1610; &#1581;&#1589;&#1604;&#1578; &#1593;&#1604;&#1609; &#1578;&#1589;&#1606;&#1610;&#1601; 5 &#1606;&#1580;&#1608;&#1605; &#1608;&#1571;&#1603;&#1579;&#1585; &#1605;&#1606; 2000000 &#1591;&#1575;&#1604;&#1576; &#1593;&#1604;&#1609; Udemy &#1607;&#1608; &#1571;&#1601;&#1590;&#1604; &#1583;&#1604;&#1610;&#1604; &#1593;&#1604;&#1609; &#1584;&#1604;&#1603;.<br> <br> &#1587;&#1608;&#1575;&#1569; &#1603;&#1606;&#1578; &#1571;&#1593;&#1605;&#1604; &#1603;&#1605;&#1583;&#1585;&#1587; &#1578;&#1591;&#1608;&#1610;&#1585; &#1571;&#1608; &#1571;&#1583;&#1585;&#1587; &#1573;&#1583;&#1575;&#1585;&#1577; &#1575;&#1604;&#1571;&#1593;&#1605;&#1575;&#1604;&#1548; &#1601;&#1602;&#1583; &#1578;&#1604;&#1602;&#1610;&#1578; &#1583;&#1575;&#1574;&#1605;&#1611;&#1575; &#1578;&#1593;&#1604;&#1610;&#1602;&#1575;&#1578; &#1585;&#1575;&#1574;&#1593;&#1577;. &#1573;&#1606; &#1575;&#1604;&#1578;&#1580;&#1585;&#1576;&#1577; &#1575;&#1604;&#1571;&#1603;&#1579;&#1585; &#1605;&#1603;&#1575;&#1601;&#1571;&#1577; &#1607;&#1610; &#1585;&#1572;&#1610;&#1577; &#1603;&#1610;&#1601; &#1610;&#1580;&#1583; &#1575;&#1604;&#1571;&#1588;&#1582;&#1575;&#1589; &#1608;&#1592;&#1575;&#1574;&#1601; &#1580;&#1583;&#1610;&#1583;&#1577; &#1608;&#1571;&#1601;&#1590;&#1604;&#1548; &#1571;&#1608; &#1610;&#1576;&#1606;&#1608;&#1606; &#1578;&#1591;&#1576;&#1610;&#1602;&#1575;&#1578; &#1608;&#1610;&#1576; &#1585;&#1575;&#1574;&#1593;&#1577;&#1548; &#1571;&#1608; &#1610;&#1581;&#1589;&#1604;&#1608;&#1606; &#1593;&#1604;&#1609; &#1605;&#1588;&#1575;&#1585;&#1610;&#1593; &#1605;&#1584;&#1607;&#1604;&#1577; &#1571;&#1608; &#1610;&#1587;&#1578;&#1605;&#1578;&#1593;&#1608;&#1606; &#1576;&#1576;&#1587;&#1575;&#1591;&#1577; &#1576;&#1607;&#1608;&#1575;&#1610;&#1578;&#1607;&#1605; &#1576;&#1605;&#1587;&#1575;&#1593;&#1583;&#1577; &#1575;&#1604;&#1605;&#1581;&#1578;&#1608;&#1609; &#1575;&#1604;&#1582;&#1575;&#1589; &#1576;&#1610;.<br> <br> &#1576;&#1575;&#1604;&#1578;&#1593;&#1575;&#1608;&#1606; &#1605;&#1593; &#1605;&#1575;&#1606;&#1608;&#1610;&#1604; &#1604;&#1608;&#1585;&#1610;&#1606;&#1586;&#1548; &#1571;&#1587;&#1587;&#1578; Academind &#1604;&#1578;&#1602;&#1583;&#1610;&#1605; &#1571;&#1601;&#1590;&#1604; &#1578;&#1580;&#1585;&#1576;&#1577; &#1578;&#1593;&#1604;&#1610;&#1605;&#1610;&#1577; &#1605;&#1605;&#1603;&#1606;&#1577; &#1604;&#1571;&#1603;&#1579;&#1585; &#1605;&#1606; 2000000 &#1591;&#1575;&#1604;&#1576;.",
            // Persian
            "فارسی": "&#1576;&#1607; &#1593;&#1606;&#1608;&#1575;&#1606; &#1740;&#1705; &#1581;&#1585;&#1601;&#1607; &#1575;&#1740; &#1582;&#1608;&#1583;&#1570;&#1605;&#1608;&#1582;&#1578;&#1607;&#1548; &#1605;&#1606; &#1608;&#1575;&#1602;&#1593;&#1575;&#1611; &#1602;&#1587;&#1605;&#1578; &#1607;&#1575;&#1740; &#1587;&#1582;&#1578; &#1608; &#1605;&#1608;&#1590;&#1608;&#1593;&#1575;&#1578; &#1583;&#1588;&#1608;&#1575;&#1585; &#1585;&#1575; &#1607;&#1606;&#1711;&#1575;&#1605; &#1740;&#1575;&#1583;&#1711;&#1740;&#1585;&#1740; &#1580;&#1583;&#1740;&#1583; &#1740;&#1575; &#1576;&#1607;&#1576;&#1608;&#1583; &#1586;&#1576;&#1575;&#1606; &#1607;&#1575;&#1740; &#1588;&#1606;&#1575;&#1582;&#1578;&#1607; &#1588;&#1583;&#1607; &#1575;&#1586; &#1602;&#1576;&#1604; &#1605;&#1740; &#1583;&#1575;&#1606;&#1605;. &#1575;&#1740;&#1606; &#1662;&#1740;&#1588;&#1740;&#1606;&#1607; &#1608; &#1578;&#1580;&#1585;&#1576;&#1607; &#1605;&#1606; &#1585;&#1575; &#1602;&#1575;&#1583;&#1585; &#1605;&#1740; &#1587;&#1575;&#1586;&#1583; &#1578;&#1575; &#1576;&#1585; &#1605;&#1585;&#1578;&#1576;&#1591; &#1578;&#1585;&#1740;&#1606; &#1605;&#1601;&#1575;&#1607;&#1740;&#1605; &#1608; &#1605;&#1608;&#1590;&#1608;&#1593;&#1575;&#1578; &#1705;&#1604;&#1740;&#1583;&#1740; &#1578;&#1605;&#1585;&#1705;&#1586; &#1705;&#1606;&#1605;. &#1587;&#1575;&#1576;&#1602;&#1607; &#1605;&#1606; &#1583;&#1585; &#1576;&#1587;&#1740;&#1575;&#1585;&#1740; &#1575;&#1586; &#1583;&#1608;&#1585;&#1607; &#1607;&#1575;&#1740; &#1583;&#1575;&#1585;&#1575;&#1740; &#1585;&#1578;&#1576;&#1607; 5 &#1587;&#1578;&#1575;&#1585;&#1607; &#1608; &#1576;&#1740;&#1588; &#1575;&#1586; 2,000,000 &#1583;&#1575;&#1606;&#1588; &#1570;&#1605;&#1608;&#1586; &#1583;&#1585; Udemy &#1576;&#1607;&#1578;&#1585;&#1740;&#1606; &#1583;&#1604;&#1740;&#1604; &#1576;&#1585;&#1575;&#1740; &#1575;&#1740;&#1606; &#1575;&#1605;&#1585; &#1575;&#1587;&#1578;.<br> <br> &#1670;&#1607; &#1576;&#1607; &#1593;&#1606;&#1608;&#1575;&#1606; &#1605;&#1585;&#1576;&#1740; &#1578;&#1608;&#1587;&#1593;&#1607; &#1705;&#1575;&#1585; &#1705;&#1606;&#1605; &#1608; &#1670;&#1607; &#1578;&#1583;&#1585;&#1740;&#1587; &#1605;&#1583;&#1740;&#1585;&#1740;&#1578; &#1576;&#1575;&#1586;&#1585;&#1711;&#1575;&#1606;&#1740;&#1548; &#1605;&#1606; &#1607;&#1605;&#1740;&#1588;&#1607; &#1576;&#1575;&#1586;&#1582;&#1608;&#1585;&#1583; &#1582;&#1608;&#1576;&#1740; &#1583;&#1585;&#1740;&#1575;&#1601;&#1578; &#1605;&#1740; &#1705;&#1585;&#1583;&#1605;. &#1604;&#1584;&#1578; &#1576;&#1582;&#1588; &#1578;&#1585;&#1740;&#1606; &#1578;&#1580;&#1585;&#1576;&#1607; &#1575;&#1740;&#1606; &#1575;&#1587;&#1578; &#1705;&#1607; &#1576;&#1576;&#1740;&#1606;&#1740;&#1583; &#1605;&#1585;&#1583;&#1605; &#1670;&#1711;&#1608;&#1606;&#1607; &#1605;&#1588;&#1575;&#1594;&#1604; &#1580;&#1583;&#1740;&#1583; &#1608; &#1576;&#1607;&#1578;&#1585;&#1740; &#1662;&#1740;&#1583;&#1575; &#1605;&#1740; &#1705;&#1606;&#1606;&#1583;&#1548; &#1576;&#1585;&#1606;&#1575;&#1605;&#1607; &#1607;&#1575;&#1740; &#1608;&#1576; &#1593;&#1575;&#1604;&#1740; &#1605;&#1740; &#1587;&#1575;&#1586;&#1606;&#1583;&#1548; &#1662;&#1585;&#1608;&#1688;&#1607; &#1607;&#1575;&#1740; &#1588;&#1711;&#1601;&#1578; &#1575;&#1606;&#1711;&#1740;&#1586;&#1740; &#1576;&#1607; &#1583;&#1587;&#1578; &#1605;&#1740; &#1570;&#1608;&#1585;&#1606;&#1583; &#1740;&#1575; &#1576;&#1607; &#1587;&#1575;&#1583;&#1711;&#1740; &#1575;&#1586; &#1587;&#1585;&#1711;&#1585;&#1605;&#1740; &#1582;&#1608;&#1583; &#1576;&#1575; &#1705;&#1605;&#1705; &#1605;&#1581;&#1578;&#1608;&#1575;&#1740; &#1605;&#1606; &#1604;&#1584;&#1578; &#1605;&#1740; &#1576;&#1585;&#1606;&#1583;.<br> <br> &#1605;&#1606; &#1607;&#1605;&#1585;&#1575;&#1607; &#1576;&#1575; &#1605;&#1575;&#1606;&#1608;&#1574;&#1604; &#1604;&#1608;&#1585;&#1606;&#1586;&#1548; Academind &#1585;&#1575; &#1578;&#1571;&#1587;&#1740;&#1587; &#1705;&#1585;&#1583;&#1605; &#1578;&#1575; &#1576;&#1607;&#1578;&#1585;&#1740;&#1606; &#1578;&#1580;&#1585;&#1576;&#1607; &#1740;&#1575;&#1583;&#1711;&#1740;&#1585;&#1740; &#1605;&#1605;&#1705;&#1606; &#1585;&#1575; &#1576;&#1607; &#1576;&#1740;&#1588; &#1575;&#1586; 2,000,000 &#1583;&#1575;&#1606;&#1588; &#1570;&#1605;&#1608;&#1586;&#1605;&#1575;&#1606; &#1575;&#1585;&#1575;&#1574;&#1607; &#1583;&#1607;&#1605;.",
        },
    },
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

// Documentation
// This function will be used for translations
function translatingContents(language) {

    document.querySelectorAll(".paragraph-short-descriptions").forEach((item, index) => {
        if ((language == "فارسی") || (language == "عَرَبِيّ")) {
            item.style.direction = "rtl";
        } else {
            item.style.direction = "ltr";
        }
    });

    // Short Description
    // - > Paragraphs
    for (var index = 1; index <=3; ++index) {
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].textContent = flutter_complete_guide_maximiluam["ThreeShortDescriptions"]["Paragraph-" + index.toString()][language];
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].style.fontFamily = secondFontFamilyHeirachy[language];
    }

    // Instructor Descriptions
    for (var index = 1; index <= 2; ++index) {
        document.getElementsByClassName("short-description-and-some-numbers-text-content-" + (index).toString())[0].innerHTML = flutter_complete_guide_maximiluam["InstructorDescriptions"]["Paragraph-" + index.toString()][language];
        document.getElementsByClassName("short-description-and-some-numbers-text-content-" + (index).toString())[0].style.fontFamily = secondFontFamilyHeirachy[language];
    }

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

        // ---------------------------------------- ↓ Flutter Complete Course - Maximilian Schwarzmüller ↓ ----------------------------------------

        // - > Changing the web page title
        document.title = "MHA - " + flutter_complete_guide_maximiluam["CourseName"];

        // Back button
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").innerHTML = '<i class="icon ion-arrow-left-b" style="padding-right: 7px;"></i>' + "&nbsp;" + BoldFirstHeireachyFont[newLanguage]["BackToGoTheBooksRows"];
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontFamily = BoldFirstHeireachyFont[newLanguage]["fontFamily"];

        // Adding the all necessary links to the skill drop down menu items
        document.querySelectorAll("#skill-name-drop-down-menu-item").forEach((item, index) => {
            item.href = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
        });

        // Translating
        translatingContents(newLanguage);

        // ---------------------------------------- ↑ Flutter Complete Course - Maximilian Schwarzmüller ↑ ----------------------------------------
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

    // Adding the all necessary links to the skill drop down menu items
    document.querySelectorAll("#skill-name-drop-down-menu-item").forEach((item, index) => {
        var link = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
        item.setAttribute("href", link);
    });
});

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