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
var complete_django_course = {
    "CourseName": "Complete Django Course",
    "ThreeShortDescriptions": {
        // First Paragraph
        "Paragraph-1": {
            // English
            "English": "Dennis Ivy's Complete Django Course offers a comprehensive and engaging introduction to the powerful Python web framework. Whether you're a beginner or have some programming experience, Ivy's clear explanations and hands-on approach make learning Django a rewarding journey. The course covers essential topics such as project setup, models, views, templates, and databases, providing a solid foundation for building dynamic web applications.",
            // German
            "Deutsch": "Dennis Ivys kompletter Django-Kurs bietet eine umfassende und spannende Einführung in das leistungsstarke Python-Webframework. Egal, ob Sie Anfänger sind oder bereits Programmiererfahrung haben, Ivys klare Erklärungen und sein praktischer Ansatz machen das Erlernen von Django zu einer lohnenden Reise. Der Kurs behandelt wichtige Themen wie Projekteinrichtung, Modelle, Ansichten, Vorlagen und Datenbanken und bietet eine solide Grundlage für die Erstellung dynamischer Webanwendungen.",
            // Chinese
            "中国人": "Dennis Ivy 的完整 Django 课程全面而有趣地介绍了强大的 Python Web 框架。无论您是初学者还是有一定编程经验，Ivy 清晰的讲解和实践方法都会让学习 Django 成为一次有益的旅程。该课程涵盖了项目设置、模型、视图、模板和数据库等基本主题，为构建动态 Web 应用程序奠定了坚实的基础。",
            // Russian
            "Русский": "Полный курс Django Денниса Айви предлагает всестороннее и увлекательное введение в мощный веб-фреймворк Python. Независимо от того, новичок вы или имеете некоторый опыт программирования, понятные объяснения и практический подход Айви делают изучение Django полезным путешествием. Курс охватывает такие важные темы, как настройка проекта, модели, представления, шаблоны и базы данных, обеспечивая прочную основу для создания динамических веб-приложений.",
            // French
            "Français": "Le cours complet Django de Dennis Ivy propose une introduction complète et attrayante au puissant framework Web Python. Que vous soyez débutant ou que vous ayez une certaine expérience en programmation, les explications claires et l'approche pratique d'Ivy font de l'apprentissage de Django un parcours enrichissant. Le cours couvre des sujets essentiels tels que la configuration de projet, les modèles, les vues, les modèles et les bases de données, offrant une base solide pour la création d'applications Web dynamiques.",
            // Japanese
            "日本語": "Dennis Ivy の Complete Django コースでは、強力な Python Web フレームワークを包括的かつ魅力的に紹介します。初心者でも、プログラミング経験者でも、Ivy のわかりやすい説明と実践的なアプローチにより、Django の学習はやりがいのある旅になります。このコースでは、プロジェクトのセットアップ、モデル、ビュー、テンプレート、データベースなどの重要なトピックを取り上げ、動的な Web アプリケーションを構築するための強固な基盤を提供します。",
            // Korean
            "한국인": "데니스 아이비의 Django Complete Course는 강력한 Python 웹 프레임워크에 대한 포괄적이고 매력적인 소개를 제공합니다. 초보자이든 프로그래밍 경험이 있든 아이비의 명확한 설명과 실습적 접근 방식은 Django를 배우는 것을 보람 있는 여정으로 만듭니다. 이 과정은 프로젝트 설정, 모델, 뷰, 템플릿, 데이터베이스와 같은 필수 주제를 다루며 동적 웹 애플리케이션을 구축하기 위한 견고한 기반을 제공합니다.",
            // Spanish
            "Español": "El curso completo de Django de Dennis Ivy ofrece una introducción completa y atractiva al potente marco web Python. Tanto si eres principiante como si tienes algo de experiencia en programación, las explicaciones claras y el enfoque práctico de Ivy hacen que aprender Django sea una experiencia gratificante. El curso cubre temas esenciales como la configuración de proyectos, modelos, vistas, plantillas y bases de datos, lo que proporciona una base sólida para crear aplicaciones web dinámicas.",
            // Hindi
            "हिंदी": "डेनिस आइवी का संपूर्ण Django कोर्स शक्तिशाली पायथन वेब फ्रेमवर्क के लिए एक व्यापक और आकर्षक परिचय प्रदान करता है। चाहे आप शुरुआती हों या आपको प्रोग्रामिंग का कुछ अनुभव हो, आइवी की स्पष्ट व्याख्याएँ और व्यावहारिक दृष्टिकोण Django को सीखना एक पुरस्कृत यात्रा बनाते हैं। पाठ्यक्रम में प्रोजेक्ट सेटअप, मॉडल, दृश्य, टेम्प्लेट और डेटाबेस जैसे आवश्यक विषयों को शामिल किया गया है, जो गतिशील वेब एप्लिकेशन बनाने के लिए एक ठोस आधार प्रदान करता है।",
            // Portuguese
            "Português": "O curso completo de Django de Dennis Ivy oferece uma introdução abrangente e envolvente à poderosa framework web Python. Quer seja principiante ou tenha alguma experiência em programação, as explicações claras e a abordagem prática de Ivy tornam a aprendizagem do Django numa viagem gratificante. O curso abrange tópicos essenciais como a configuração de projetos, modelos, visualizações, modelos e bases de dados, fornecendo uma base sólida para a construção de aplicações web dinâmicas.",
            // Bengali
            "বাংলা": "ডেনিস আইভির সম্পূর্ণ জ্যাঙ্গো কোর্স শক্তিশালী পাইথন ওয়েব ফ্রেমওয়ার্কের একটি ব্যাপক এবং আকর্ষক ভূমিকা প্রদান করে। আপনি একজন শিক্ষানবিস হোন বা কিছু প্রোগ্রামিং অভিজ্ঞতা থাকুক না কেন, আইভির স্পষ্ট ব্যাখ্যা এবং হাতে-কলমে পদ্ধতি জ্যাঙ্গো শেখাকে একটি ফলপ্রসূ যাত্রা করে তোলে। এই কোর্সে প্রজেক্ট সেটআপ, মডেল, ভিউ, টেমপ্লেট এবং ডাটাবেসের মতো প্রয়োজনীয় বিষয়গুলিকে কভার করে, যা গতিশীল ওয়েব অ্যাপ্লিকেশন তৈরির জন্য একটি শক্ত ভিত্তি প্রদান করে।",
            // Arabic
            "عَرَبِيّ": "تقدم دورة Django الكاملة التي يقدمها دينيس آيفي مقدمة شاملة وجذابة لإطار عمل الويب القوي Python. سواء كنت مبتدئًا أو لديك بعض الخبرة في البرمجة، فإن تفسيرات آيفي الواضحة ونهجه العملي يجعلان تعلم Django رحلة مجزية. تغطي الدورة مواضيع أساسية مثل إعداد المشروع والنماذج والعروض والقوالب وقواعد البيانات، مما يوفر أساسًا قويًا لبناء تطبيقات الويب الديناميكية.",
            // Persian
            "فارسی": "دوره کامل جنگو دنیس آیوی مقدمه ای جامع و جذاب برای چارچوب وب قدرتمند پایتون ارائه می دهد. چه مبتدی باشید و چه تجربه برنامه نویسی داشته باشید، توضیحات واضح و رویکرد عملی آیوی، یادگیری جنگو را به یک سفر مفید تبدیل می کند. این دوره موضوعات ضروری مانند راه اندازی پروژه، مدل ها، نماها، قالب ها و پایگاه های داده را پوشش می دهد و پایه ای محکم برای ساخت برنامه های کاربردی وب پویا فراهم می کند.",
        },
        // Second Paragraph
        "Paragraph-2": {
            // English
            "English": "One of the standout features of this course is its focus on real-world applications. Ivy guides learners through the process of creating a fully functional social media platform, demonstrating how Django can be used to build complex and interactive websites. This practical approach not only reinforces the concepts learned but also inspires students to explore their own creative projects.",
            // German
            "Deutsch": "Eines der herausragenden Merkmale dieses Kurses ist sein Fokus auf reale Anwendungen. Ivy führt die Lernenden durch den Prozess der Erstellung einer voll funktionsfähigen Social-Media-Plattform und zeigt, wie mit Django komplexe und interaktive Websites erstellt werden können. Dieser praktische Ansatz festigt nicht nur die erlernten Konzepte, sondern inspiriert die Schüler auch dazu, ihre eigenen kreativen Projekte zu erkunden.",
            // Chinese
            "中国人": "本课程的一大特色是注重实际应用。Ivy 指导学习者完成创建功能齐全的社交媒体平台的过程，展示如何使用 Django 构建复杂且交互式的网站。这种实用的方法不仅可以巩固所学的概念，还可以激励学生探索自己的创意项目。",
            // Russian
            "Русский": "Одной из выдающихся особенностей этого курса является его фокус на реальных приложениях. Айви проводит учащихся через процесс создания полностью функциональной платформы социальных сетей, демонстрируя, как Django может использоваться для создания сложных и интерактивных веб-сайтов. Этот практический подход не только закрепляет изученные концепции, но и вдохновляет учащихся на исследование собственных творческих проектов.",
            // French
            "Français": "L'une des caractéristiques marquantes de ce cours est l'accent mis sur les applications concrètes. Ivy guide les apprenants tout au long du processus de création d'une plateforme de médias sociaux entièrement fonctionnelle, en leur montrant comment Django peut être utilisé pour créer des sites Web complexes et interactifs. Cette approche pratique renforce non seulement les concepts appris, mais incite également les étudiants à explorer leurs propres projets créatifs.",
            // Japanese
            "日本語": "このコースの際立った特徴の 1 つは、実際のアプリケーションに重点を置いていることです。Ivy は、学習者を完全な機能を備えたソーシャル メディア プラットフォームの作成プロセスに導き、Django を使用して複雑でインタラクティブな Web サイトを構築する方法を示します。この実践的なアプローチは、学習した概念を強化するだけでなく、学生が独自のクリエイティブ プロジェクトを探求する意欲を刺激します。",
            // Korean
            "한국인": "이 과정의 두드러진 특징 중 하나는 실제 세계 응용 프로그램에 초점을 맞춘다는 것입니다. Ivy는 학습자에게 완벽하게 기능하는 소셜 미디어 플랫폼을 만드는 과정을 안내하여 Django를 사용하여 복잡하고 상호 작용적인 웹사이트를 구축하는 방법을 보여줍니다. 이러한 실용적인 접근 방식은 학습한 개념을 강화할 뿐만 아니라 학생들이 자신의 창의적인 프로젝트를 탐구하도록 영감을 줍니다.",
            // Spanish
            "Español": "Una de las características más destacadas de este curso es su enfoque en aplicaciones del mundo real. Ivy guía a los estudiantes a través del proceso de creación de una plataforma de redes sociales completamente funcional, demostrando cómo se puede utilizar Django para crear sitios web complejos e interactivos. Este enfoque práctico no solo refuerza los conceptos aprendidos, sino que también inspira a los estudiantes a explorar sus propios proyectos creativos.",
            // Hindi
            "हिंदी": "इस कोर्स की एक खास विशेषता यह है कि इसका फोकस वास्तविक दुनिया के अनुप्रयोगों पर है। आइवी पूरी तरह कार्यात्मक सोशल मीडिया प्लेटफॉर्म बनाने की प्रक्रिया के माध्यम से शिक्षार्थियों का मार्गदर्शन करता है, यह दर्शाता है कि जटिल और इंटरैक्टिव वेबसाइट बनाने के लिए Django का उपयोग कैसे किया जा सकता है। यह व्यावहारिक दृष्टिकोण न केवल सीखी गई अवधारणाओं को पुष्ट करता है बल्कि छात्रों को अपनी खुद की रचनात्मक परियोजनाओं का पता लगाने के लिए भी प्रेरित करता है।",
            // Portuguese
            "Português": "Uma das características de destaque deste curso é o foco nas aplicações do mundo real. Ivy orienta os alunos no processo de criação de uma plataforma de redes sociais totalmente funcional, demonstrando como o Django pode ser utilizado para construir sites complexos e interativos. Esta abordagem prática não só reforça os conceitos aprendidos, como também inspira os alunos a explorar os seus próprios projetos criativos.",
            // Bengali
            "বাংলা": "এই কোর্সের স্ট্যান্ডআউট বৈশিষ্ট্যগুলির মধ্যে একটি হল বাস্তব-বিশ্বের অ্যাপ্লিকেশনগুলিতে এর ফোকাস। Ivy একটি সম্পূর্ণ কার্যকরী সোশ্যাল মিডিয়া প্ল্যাটফর্ম তৈরি করার প্রক্রিয়ার মাধ্যমে শিক্ষার্থীদের গাইড করে, কীভাবে জ্যাঙ্গোকে জটিল এবং ইন্টারেক্টিভ ওয়েবসাইট তৈরি করতে ব্যবহার করা যেতে পারে তা প্রদর্শন করে। এই ব্যবহারিক পদ্ধতিটি শুধুমাত্র শেখা ধারণাগুলিকে শক্তিশালী করে না বরং শিক্ষার্থীদের তাদের নিজস্ব সৃজনশীল প্রকল্পগুলি অন্বেষণ করতে অনুপ্রাণিত করে।",
            // Arabic
            "عَرَبِيّ": "من بين السمات البارزة لهذه الدورة التدريبية التركيز على التطبيقات في العالم الحقيقي. حيث ترشد آيفي المتعلمين خلال عملية إنشاء منصة وسائط اجتماعية وظيفية بالكامل، وتوضح كيف يمكن استخدام Django لبناء مواقع ويب معقدة وتفاعلية. ولا يعمل هذا النهج العملي على تعزيز المفاهيم التي تعلموها فحسب، بل يلهم الطلاب أيضًا لاستكشاف مشاريعهم الإبداعية الخاصة.",
            // Persian
            "فارسی": "یکی از ویژگی های برجسته این دوره، تمرکز آن بر برنامه های کاربردی در دنیای واقعی است. Ivy فراگیران را از طریق فرآیند ایجاد یک پلتفرم رسانه اجتماعی کاملاً کاربردی راهنمایی می کند و نشان می دهد که چگونه می توان از جنگو برای ساخت وب سایت های پیچیده و تعاملی استفاده کرد. این رویکرد عملی نه تنها مفاهیم آموخته شده را تقویت می کند، بلکه دانش آموزان را برای کشف پروژه های خلاقانه خود ترغیب می کند.",
        },
        // Third Paragraph
        "Paragraph-3": {
            // English
            "English": "In addition to the core curriculum, the course includes valuable supplementary materials, such as downloadable code examples and project templates. These resources allow learners to practice and experiment with Django concepts at their own pace. Furthermore, Ivy's commitment to providing ongoing support and updates ensures that students have access to the latest information and best practices in the Django ecosystem.",
            // German
            "Deutsch": "Zusätzlich zum Kernlehrplan enthält der Kurs wertvolle Zusatzmaterialien wie herunterladbare Codebeispiele und Projektvorlagen. Diese Ressourcen ermöglichen es den Lernenden, Django-Konzepte in ihrem eigenen Tempo zu üben und damit zu experimentieren. Darüber hinaus stellt Ivys Engagement für kontinuierliche Unterstützung und Updates sicher, dass die Studierenden Zugriff auf die neuesten Informationen und Best Practices im Django-Ökosystem haben.",
            // Chinese
            "中国人": "除了核心课程外，该课程还包括有价值的补充材料，例如可下载的代码示例和项目模板。这些资源允许学习者按照自己的节奏练习和试验 Django 概念。此外，Ivy 致力于提供持续的支持和更新，确保学生能够获得 Django 生态系统中的最新信息和最佳实践。",
            // Russian
            "Русский": "В дополнение к основной программе курс включает ценные дополнительные материалы, такие как загружаемые примеры кода и шаблоны проектов. Эти ресурсы позволяют учащимся практиковаться и экспериментировать с концепциями Django в своем собственном темпе. Кроме того, приверженность Ivy предоставлению постоянной поддержки и обновлений гарантирует, что учащиеся будут иметь доступ к последней информации и лучшим практикам в экосистеме Django.",
            // French
            "Français": "En plus du programme de base, le cours comprend des ressources complémentaires utiles, telles que des exemples de code téléchargeables et des modèles de projets. Ces ressources permettent aux apprenants de pratiquer et d'expérimenter les concepts de Django à leur propre rythme. De plus, l'engagement d'Ivy à fournir un soutien et des mises à jour continus garantit aux étudiants l'accès aux dernières informations et aux meilleures pratiques de l'écosystème Django.",
            // Japanese
            "日本語": "コースには、コアカリキュラムに加えて、ダウンロード可能なコード例やプロジェクト テンプレートなどの貴重な補足資料が含まれています。これらのリソースにより、学習者は自分のペースで Django の概念を実践し、実験することができます。さらに、Ivy は継続的なサポートと更新を提供するという約束をしているため、学生は Django エコシステムの最新情報とベスト プラクティスにアクセスできます。",
            // Korean
            "한국인": "핵심 커리큘럼 외에도 이 과정에는 다운로드 가능한 코드 예제 및 프로젝트 템플릿과 같은 귀중한 보충 자료가 포함되어 있습니다. 이러한 리소스를 통해 학습자는 자신의 속도에 맞춰 Django 개념을 연습하고 실험할 수 있습니다. 또한 Ivy는 지속적인 지원과 업데이트를 제공함으로써 학생들이 Django 생태계의 최신 정보와 모범 사례에 액세스할 수 있도록 보장합니다.",
            // Spanish
            "Español": "Además del plan de estudios básico, el curso incluye valiosos materiales complementarios, como ejemplos de código descargables y plantillas de proyectos. Estos recursos permiten a los alumnos practicar y experimentar con los conceptos de Django a su propio ritmo. Además, el compromiso de Ivy de brindar soporte y actualizaciones constantes garantiza que los estudiantes tengan acceso a la información más reciente y las mejores prácticas en el ecosistema de Django.",
            // Hindi
            "हिंदी": "मुख्य पाठ्यक्रम के अलावा, पाठ्यक्रम में मूल्यवान पूरक सामग्री शामिल है, जैसे डाउनलोड करने योग्य कोड उदाहरण और प्रोजेक्ट टेम्पलेट। ये संसाधन शिक्षार्थियों को अपनी गति से Django अवधारणाओं का अभ्यास और प्रयोग करने की अनुमति देते हैं। इसके अलावा, निरंतर समर्थन और अपडेट प्रदान करने के लिए आइवी की प्रतिबद्धता यह सुनिश्चित करती है कि छात्रों को Django पारिस्थितिकी तंत्र में नवीनतम जानकारी और सर्वोत्तम प्रथाओं तक पहुँच प्राप्त हो।",
            // Portuguese
            "Português": "Além do currículo básico, o curso inclui materiais complementares valiosos, como exemplos de código para download e modelos de projetos. Estas características permitem que os alunos pratiquem e experimentem os conceitos do Django ao seu próprio ritmo. Além disso, o compromisso da Ivy em fornecer apoio e atualizações contínuas garante que os alunos têm acesso às informações mais recentes e às melhores práticas no ecossistema Django.",
            // Bengali
            "বাংলা": "মূল পাঠ্যক্রমের পাশাপাশি, কোর্সে মূল্যবান সম্পূরক উপকরণ রয়েছে, যেমন ডাউনলোডযোগ্য কোড উদাহরণ এবং প্রকল্প টেমপ্লেট। এই সংস্থানগুলি শিক্ষার্থীদের তাদের নিজস্ব গতিতে জ্যাঙ্গো ধারণাগুলি অনুশীলন এবং পরীক্ষা করার অনুমতি দেয়। তদুপরি, চলমান সহায়তা এবং আপডেটগুলি প্রদানের জন্য আইভির প্রতিশ্রুতি নিশ্চিত করে যে ছাত্রদের জ্যাঙ্গো ইকোসিস্টেমের সর্বশেষ তথ্য এবং সর্বোত্তম অনুশীলনগুলিতে অ্যাক্সেস রয়েছে।",
            // Arabic
            "عَرَبِيّ": "بالإضافة إلى المنهج الأساسي، تتضمن الدورة مواد تكميلية قيمة، مثل أمثلة التعليمات البرمجية القابلة للتنزيل وقوالب المشروع. تتيح هذه الموارد للمتعلمين ممارسة مفاهيم Django وتجربتها بالسرعة التي تناسبهم. علاوة على ذلك، يضمن التزام Ivy بتقديم الدعم المستمر والتحديثات حصول الطلاب على أحدث المعلومات وأفضل الممارسات في نظام Django البيئي.",
            // Persian
            "فارسی": "علاوه بر برنامه درسی اصلی، این دوره شامل مواد تکمیلی ارزشمندی مانند نمونه های کد قابل دانلود و قالب های پروژه است. این منابع به زبان آموزان اجازه می دهد تا مفاهیم جنگو را با سرعت خود تمرین و آزمایش کنند. علاوه بر این، تعهد آیوی به ارائه پشتیبانی و به روز رسانی مداوم تضمین می کند که دانش آموزان به آخرین اطلاعات و بهترین شیوه ها در اکوسیستم جنگو دسترسی دارند.",
        },
    },
    "InstructorDescriptions": {
        // Paragraph 1
        "Paragraph-1": {
            // English
            "English": "At age 25 Dennis was a lead developer at a forensics laboratory in charge of managing a small team of developers. With an untraditional start to his career, Dennis entered the industry as a full stack developer when he came up with a new idea to learn how to code and then build his idea for a new lab management software which he later sold to the company for over $41,000. After two years as a lead developer and combined 7 years of freelancing, Dennis started his YouTube channel (Dennis Ivy) to teach others everything he learned as a self taught developer and has courses on Udemy and his own platform. With a primary focus on Python, Django, JavaScript, React and Postgres, Dennis teaches his students from the very basics all the way to building out complex applications while combining several different technologies. With over 100,000 YouTube subscribers and 7 million combined views, students from all over the world have benefited from his teaching style and efforts.",
            // German
            "Deutsch": "Mit 25 Jahren war Dennis leitender Entwickler in einem forensischen Labor und für die Leitung eines kleinen Entwicklerteams verantwortlich. Mit einem unkonventionellen Start in seine Karriere stieg Dennis als Full-Stack-Entwickler in die Branche ein, als er auf die neue Idee kam, das Programmieren zu lernen und dann seine Idee für eine neue Labormanagementsoftware umzusetzen, die er später für über 41.000 Dollar an das Unternehmen verkaufte. Nach zwei Jahren als leitender Entwickler und insgesamt 7 Jahren als Freiberufler startete Dennis seinen YouTube-Kanal (Dennis Ivy), um anderen alles beizubringen, was er als autodidaktischer Entwickler gelernt hatte, und bietet Kurse auf Udemy und seiner eigenen Plattform an. Mit einem Schwerpunkt auf Python, Django, JavaScript, React und Postgres bringt Dennis seinen Schülern von den Grundlagen bis hin zum Erstellen komplexer Anwendungen bei und kombiniert dabei mehrere verschiedene Technologien. Mit über 100.000 YouTube-Abonnenten und insgesamt 7 Millionen Aufrufen haben Schüler aus der ganzen Welt von seinem Unterrichtsstil und seinen Bemühungen profitiert.",
            // Chinese
            "中国人": "25 岁时，丹尼斯成为一家法医实验室的首席开发人员，负责管理一个小型开发团队。丹尼斯的职业生涯起步并不传统，他以全栈开发人员的身份进入该行业，当时他有了一个新想法，即学习如何编码，然后将其想法转化为一种新的实验室管理软件，后来他以超过 41,000 美元的价格卖给了该公司。在担任首席开发人员两年并从事了 7 年自由职业之后，丹尼斯创建了自己的 YouTube 频道 (Dennis Ivy)，向他人传授他作为自学成才的开发人员所学到的一切，并在 Udemy 和他自己的平台上开设课程。丹尼斯主要关注 Python、Django、JavaScript、React 和 Postgres，他从最基础的课程一直教他的学生，直到构建复杂的应用程序，同时结合了几种不同的技术。他的 YouTube 拥有超过 100,000 名订阅者和 700 万次总观看次数，来自世界各地的学生都受益于他的教学风格和努力。",
            // Russian
            "Русский": "В возрасте 25 лет Деннис был ведущим разработчиком в судебно-медицинской лаборатории, отвечая за управление небольшой командой разработчиков. С нетрадиционным началом своей карьеры Деннис вошел в отрасль как разработчик полного цикла, когда у него возникла новая идея научиться кодировать, а затем реализовать свою идею для нового программного обеспечения для управления лабораторией, которое он позже продал компании более чем за 41 000 долларов. После двух лет в качестве ведущего разработчика и 7 лет фриланса Деннис запустил свой канал на YouTube (Dennis Ivy), чтобы научить других всему, чему он научился как разработчик-самоучка, и имеет курсы на Udemy и на своей собственной платформе. Сосредоточившись в первую очередь на Python, Django, JavaScript, React и Postgres, Деннис обучает своих студентов с самых основ вплоть до создания сложных приложений, объединяя несколько различных технологий. Имея более 100 000 подписчиков на YouTube и 7 миллионов общих просмотров, студенты со всего мира извлекли пользу из его стиля преподавания и усилий.",
            // French
            "Français": "À 25 ans, Dennis était développeur principal dans un laboratoire de criminalistique, chargé de gérer une petite équipe de développeurs. Avec un début de carrière peu traditionnel, Dennis est entré dans l'industrie en tant que développeur full stack lorsqu'il a eu une nouvelle idée pour apprendre à coder, puis a développé son idée pour un nouveau logiciel de gestion de laboratoire qu'il a ensuite vendu à l'entreprise pour plus de 41 000 $. Après deux ans en tant que développeur principal et 7 ans combinés de travail indépendant, Dennis a lancé sa chaîne YouTube (Dennis Ivy) pour enseigner aux autres tout ce qu'il avait appris en tant que développeur autodidacte et propose des cours sur Udemy et sa propre plateforme. En se concentrant principalement sur Python, Django, JavaScript, React et Postgres, Dennis enseigne à ses étudiants depuis les bases jusqu'à la création d'applications complexes tout en combinant plusieurs technologies différentes. Avec plus de 100 000 abonnés YouTube et 7 millions de vues combinées, des étudiants du monde entier ont bénéficié de son style d'enseignement et de ses efforts.",
            // Japanese
            "日本語": "25歳のとき、デニスは法医学研究所の主任開発者として、少人数の開発者チームの管理を担当していました。デニスは型破りなキャリアのスタートを切り、フルスタック開発者として業界に入りました。そのきっかけは、コーディングを学ぶという新しいアイデアを思いつき、新しいラボ管理ソフトウェアのアイデアを構築し、後にそのソフトウェアを会社に41,000ドル以上で売却したことでした。主任開発者として2年間、フリーランスとして合わせて7年間働いた後、デニスは独学で開発者として学んだことをすべて他の人に教えるためにYouTubeチャンネル（Dennis Ivy）を立ち上げ、Udemyと自身のプラットフォームでコースを提供しています。Python、Django、JavaScript、React、Postgresを主に扱い、デニスは基礎から複雑なアプリケーションの構築まで、さまざまなテクノロジーを組み合わせながら学生に教えています。YouTubeの登録者数は10万人を超え、合計700万回の視聴回数を誇るデニスの指導スタイルと努力は、世界中の学生に恩恵をもたらしています。",
            // Korean
            "한국인": "25세의 데니스는 법의학 연구소에서 수석 개발자로 일하며 소규모 개발자 팀을 관리했습니다. 데니스는 비전통적인 커리어를 시작하며 풀 스택 개발자로 업계에 입문했습니다. 그는 코딩하는 법을 배우고 새로운 실험실 관리 소프트웨어에 대한 아이디어를 구축하는 새로운 아이디어를 생각해 냈고 나중에 회사에 41,000달러 이상에 매각했습니다. 수석 개발자로 2년을 보내고 프리랜서로 7년을 보낸 데니스는 YouTube 채널(Dennis Ivy)을 시작하여 독학으로 개발자로서 배운 모든 것을 다른 사람들에게 가르치고 Udemy와 자신의 플랫폼에서 코스를 운영하고 있습니다. Python, Django, JavaScript, React, Postgres에 중점을 두고 데니스는 학생들에게 매우 기본적인 것부터 여러 가지 기술을 결합하면서 복잡한 애플리케이션을 구축하는 것까지 가르칩니다. 10만 명이 넘는 YouTube 구독자와 700만 건의 조회수를 기록한 전 세계 학생들이 그의 교육 스타일과 노력으로 혜택을 받았습니다.",
            // Spanish
            "Español": "A los 25 años, Dennis era desarrollador principal en un laboratorio forense a cargo de la gestión de un pequeño equipo de desarrolladores. Con un comienzo poco tradicional en su carrera, Dennis entró en la industria como desarrollador full stack cuando se le ocurrió una nueva idea para aprender a codificar y luego desarrollar su idea para un nuevo software de gestión de laboratorio que luego vendió a la empresa por más de $41,000. Después de dos años como desarrollador principal y 7 años combinados de trabajo independiente, Dennis comenzó su canal de YouTube (Dennis Ivy) para enseñar a otros todo lo que aprendió como desarrollador autodidacta y tiene cursos en Udemy y su propia plataforma. Con un enfoque principal en Python, Django, JavaScript, React y Postgres, Dennis enseña a sus estudiantes desde los conceptos básicos hasta la creación de aplicaciones complejas mientras combina varias tecnologías diferentes. Con más de 100,000 suscriptores de YouTube y 7 millones de vistas combinadas, estudiantes de todo el mundo se han beneficiado de su estilo de enseñanza y sus esfuerzos.",
            // Hindi
            "हिंदी": "25 साल की उम्र में डेनिस एक फोरेंसिक प्रयोगशाला में एक प्रमुख डेवलपर था, जो डेवलपर्स की एक छोटी टीम के प्रबंधन का प्रभारी था। अपने करियर की एक अपरंपरागत शुरुआत के साथ, डेनिस ने एक पूर्ण स्टैक डेवलपर के रूप में उद्योग में प्रवेश किया, जब वह कोडिंग सीखने और फिर एक नए लैब प्रबंधन सॉफ़्टवेयर के लिए अपने विचार को बनाने के लिए एक नए विचार के साथ आया, जिसे बाद में उसने कंपनी को $41,000 से अधिक में बेच दिया। दो साल तक प्रमुख डेवलपर के रूप में और संयुक्त 7 साल तक फ्रीलांसिंग करने के बाद, डेनिस ने अपना YouTube चैनल (डेनिस आइवी) शुरू किया ताकि वह दूसरों को वह सब कुछ सिखा सके जो उसने एक स्व-शिक्षित डेवलपर के रूप में सीखा था और उसके पास Udemy और अपने स्वयं के प्लेटफ़ॉर्म पर पाठ्यक्रम हैं। पायथन, Django, JavaScript, React और Postgres पर प्राथमिक ध्यान देने के साथ, डेनिस अपने छात्रों को कई अलग-अलग तकनीकों को मिलाकर जटिल एप्लिकेशन बनाने के लिए बहुत ही बुनियादी बातों से सिखाता है। 100,000 से अधिक YouTube सब्सक्राइबर और 7 मिलियन से अधिक संयुक्त व्यू के साथ, दुनिया भर के छात्रों को उनकी शिक्षण शैली और प्रयासों से लाभ हुआ है।",
            // Portuguese
            "Português": "Aos 25 anos, Dennis era um programador líder num laboratório forense encarregado de gerir uma pequena equipa de programadores. Com um início de carreira pouco tradicional, Dennis entrou na indústria como full stack developer quando teve uma nova ideia para aprender a codificar e depois construir a sua ideia para um novo software de gestão de laboratório que mais tarde vendeu à empresa por mais de 41.000 dólares . Após dois anos como developer principal e 7 anos como freelancer, Dennis iniciou o seu canal de YouTube (Dennis Ivy) para ensinar aos outros tudo o que aprendeu como developer autodidata e tem cursos na Udemy e na sua própria plataforma. Com um foco principal em Python, Django, JavaScript, React e Postgres, Dennis ensina os seus alunos desde o básico até à construção de aplicações complexas, combinando várias tecnologias diferentes. Com mais de 100.000 subscritores no YouTube e 7 milhões de visualizações combinadas, estudantes de todo o mundo têm beneficiado do seu estilo e esforços de ensino.",
            // Bengali
            "বাংলা": "25 বছর বয়সে ডেনিস ডেভেলপারদের একটি ছোট দল পরিচালনার দায়িত্বে একটি ফরেনসিক পরীক্ষাগারে একজন প্রধান বিকাশকারী ছিলেন। তার কর্মজীবনে একটি অপ্রচলিত সূচনা করে, ডেনিস একটি সম্পূর্ণ স্ট্যাক ডেভেলপার হিসাবে শিল্পে প্রবেশ করেন যখন তিনি কোড করতে শিখতে এবং তারপরে একটি নতুন ল্যাব ম্যানেজমেন্ট সফ্টওয়্যারের জন্য তার ধারণা তৈরি করার জন্য একটি নতুন ধারণা নিয়ে এসেছিলেন যা পরে তিনি কোম্পানির কাছে বেশি দামে বিক্রি করেছিলেন। $41,000 লিড ডেভেলপার হিসেবে দুই বছর এবং 7 বছরের ফ্রিল্যান্সিং করার পর, ডেনিস তার ইউটিউব চ্যানেল (ডেনিস আইভি) শুরু করেন যাতে তিনি একজন স্ব-শিক্ষিত বিকাশকারী হিসাবে যা শিখেছেন তা অন্যদের শেখানোর জন্য এবং Udemy এবং তার নিজস্ব প্ল্যাটফর্মে কোর্স রয়েছে। পাইথন, জ্যাঙ্গো, জাভাস্ক্রিপ্ট, রিঅ্যাক্ট এবং পোস্টগ্রেসের উপর প্রাথমিক ফোকাস দিয়ে, ডেনিস তার ছাত্রদেরকে বিভিন্ন ধরনের প্রযুক্তির সমন্বয়ে জটিল অ্যাপ্লিকেশন তৈরি করার জন্য একেবারে প্রাথমিক বিষয় থেকে শেখায়। 100,000 ইউটিউব সাবস্ক্রাইবার এবং 7 মিলিয়ন সম্মিলিত ভিউ সহ, সারা বিশ্ব থেকে ছাত্ররা তার শিক্ষণ শৈলী এবং প্রচেষ্টা থেকে উপকৃত হয়েছে৷",
            // Arabic
            "عَرَبِيّ": "في سن الخامسة والعشرين، كان دينيس مطورًا رئيسيًا في مختبر الطب الشرعي مسؤولاً عن إدارة فريق صغير من المطورين. مع بداية غير تقليدية لمسيرته المهنية، دخل دينيس الصناعة كمطور كامل عندما توصل إلى فكرة جديدة لتعلم كيفية الترميز ثم بناء فكرته لبرنامج إدارة مختبر جديد والذي باعه لاحقًا للشركة بأكثر من 41000 دولار. بعد عامين كمطور رئيسي و 7 سنوات مجتمعة من العمل الحر، بدأ دينيس قناته على YouTube (Dennis Ivy) لتعليم الآخرين كل ما تعلمه كمطور علم نفسه بنفسه ولديه دورات على Udemy ومنصته الخاصة. مع التركيز الأساسي على Python و Django و JavaScript و React و Postgres، يعلم دينيس طلابه من الأساسيات للغاية وصولاً إلى بناء تطبيقات معقدة مع الجمع بين العديد من التقنيات المختلفة. مع أكثر من 100000 مشترك على YouTube و 7 ملايين مشاهدة مجمعة، استفاد الطلاب من جميع أنحاء العالم من أسلوبه وجهوده في التدريس.",
            // Persian
            "فارسی": "در 25 سالگی دنیس یک توسعه دهنده اصلی در آزمایشگاه پزشکی قانونی بود که مسئول مدیریت یک تیم کوچک از توسعه دهندگان بود. دنیس با شروعی غیر سنتی در حرفه‌اش، به عنوان یک توسعه‌دهنده فول استک وارد صنعت شد، زمانی که ایده جدیدی برای یادگیری نحوه کدنویسی و سپس ساختن ایده‌اش برای یک نرم‌افزار مدیریت آزمایشگاه جدید که بعداً به قیمت بیش از حد به شرکت فروخت، به ذهنش رسید. 41000 دلار پس از دو سال به عنوان یک توسعه‌دهنده اصلی و ترکیبی از ۷ سال کار آزاد، دنیس کانال یوتیوب خود (دنیس آیوی) را راه‌اندازی کرد تا همه چیزهایی را که به عنوان یک توسعه‌دهنده خود آموخته آموخته است به دیگران آموزش دهد و دوره‌هایی در Udemy و پلتفرم خودش دارد. دنیس با تمرکز اولیه روی Python، Django، JavaScript، React و Postgres به دانش‌آموزان خود از اصول اولیه تا ساخت برنامه‌های پیچیده و در عین حال ترکیب چندین فناوری مختلف آموزش می‌دهد. با بیش از 100000 مشترک یوتیوب و 7 میلیون بازدید ترکیبی، دانش آموزان از سراسر جهان از شیوه تدریس و تلاش های او بهره برده اند.",
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
// This function will be used to make the page responsive
function ResponsiveAdaptive() {
    if (window.innerWidth >= 1300) {

        // Contact Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = (window.innerWidth * 0.02) + 'px';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 1300) && (window.innerWidth >= 1200)) {

        // Contact Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 1200) && (window.innerWidth >= 1100)) {


        // Contact Section Information
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 1100) && (window.innerWidth >= 1000)) {

        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('#fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 1000) && (window.innerWidth >= 900)) {

        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 900) && (window.innerWidth >= 800)) {

        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 800) && (window.innerWidth >= 700)) {

        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 700) && (window.innerWidth >= 600)) {

        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 100vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '2vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '3vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 600) && (window.innerWidth >= 500)) {

        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 140vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '4vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '5vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 500) && (window.innerWidth >= 400)) {

        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 140vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '5vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '6vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 400) && (window.innerWidth >= 300)) {

        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 140vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '5vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '6vw';
            item.style.width = '75vw';
        });

    } else if ((window.innerWidth < 300) && (window.innerWidth >= 200)) {


        // Contact Information Section
        // Fourth View
        // - > Background
        document.getElementById('all-rights-reserved-copy-right-symbol').style.background = "url('../../../../assets/img/End Main Page - BC.svg') -2vw bottom / 140vw no-repeat, linear-gradient(black, #000000)";
        // - > Reserved rights
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.fontSize = '5vw';
        document.getElementById('all-rights-reserved-copy-right-symbol-paragraph-muhammad-husain-aboutalebi-all-right-reserved').style.width = '75vw';
        // - > Contact information buttons
        document.querySelectorAll('.fourth-view-talk-to-me-button-contact-informations').forEach(function (item) {
            item.style.fontSize = '6vw';
            item.style.width = '75vw';
        });

    } else {

    }
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
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].textContent = complete_django_course["ThreeShortDescriptions"]["Paragraph-" + index.toString()][language];
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].style.fontFamily = secondFontFamilyHeirachy[language];
    }

    // Instructor Descriptions
    for (var index = 1; index <= 1; ++index) {
        document.getElementsByClassName("short-description-and-some-numbers-text-content-" + (index).toString())[0].innerHTML = complete_django_course["InstructorDescriptions"]["Paragraph-" + index.toString()][language];
        document.getElementsByClassName("short-description-and-some-numbers-text-content-" + (index).toString())[0].style.fontFamily = secondFontFamilyHeirachy[language];
    }

}

// Documentation
// This function will be used to change the link of top indicator
function linkChanger(language, skill) {
    // Top Indicator Link - Courses
    document.getElementById("Going-to-the-books-row-table").href = "../../../CourseList.html?direction=" + encodeURIComponent(skill) + "&language=" + encodeURIComponent(language);
    // Skill Origin
    document.getElementById("link-button-to-go-the-individual-skill-page-top-indicatotor").href = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(skill) + "&language=" + encodeURIComponent(language);
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
        document.title = "MHA - " + complete_django_course["CourseName"];

        // Back button
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").innerHTML = '<i class="icon ion-arrow-left-b" style="padding-right: 7px;"></i>' + "&nbsp;" + BoldFirstHeireachyFont[newLanguage]["BackToGoTheBooksRows"];
        document.getElementById("Back-button-to-go-to-the-books-row-list-table-of-contents").style.fontFamily = BoldFirstHeireachyFont[newLanguage]["fontFamily"];

        // Adding the all necessary links to the skill drop down menu items
        document.querySelectorAll("#skill-name-drop-down-menu-item").forEach((item, index) => {
            item.href = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
        });

        // Translating
        translatingContents(newLanguage);

        // Top Indicator Link
        linkChanger(newLanguage, neededProperties.Currrent_Skill_Selected);

        // Old Responsive function
        ResponsiveAdaptive();

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

        // Top Indicator Link
        linkChanger(neededProperties.Currrent_Language_Selected, newSkill);

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
        // document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
        // Navigation Bar
        document.getElementById('Skills-Drop-Down-top-nav-bar').style.zIndex = "1";
    } else {
        // Navigation Bar
        // - > Opacity of Toggle
        document.getElementById('navcol-1').style.opacity = "1";
        // - > Making the Nab Bar Sticky
        // document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md fixed-top bg-body shadow-lg py-3";
    }

    // Adding the all necessary links to the skill drop down menu items
    document.querySelectorAll("#skill-name-drop-down-menu-item").forEach((item, index) => {
        var link = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
        item.setAttribute("href", link);
    });

    // Old Responsive function
    ResponsiveAdaptive();
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