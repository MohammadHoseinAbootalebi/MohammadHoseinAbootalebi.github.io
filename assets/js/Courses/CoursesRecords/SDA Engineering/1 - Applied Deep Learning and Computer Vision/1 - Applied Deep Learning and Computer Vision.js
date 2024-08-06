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
var applied_deep_learning_SDCs = {
    "BookName": "Applied Deep Learning and Computer Vision for SDCs",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "The Foundation of Self-Driving Cars",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter explores the evolution and current state of self-driving car (SDC) technology, highlighting its historical development, advancements in computational power, and the core components necessary for autonomy, such as computer vision and sensor fusion. It discusses the benefits of SDCs, including increased road safety and reduced environmental impact, while also addressing challenges like programming for safety, potential job losses, and privacy concerns. The chapter concludes by outlining the various levels of autonomy, from manual control to full automation, setting the stage for a deeper exploration of deep learning in the subsequent chapter.",
                // German
                "Deutsch": "In diesem Kapitel werden die Entwicklung und der aktuelle Stand der Technologie für selbstfahrende Autos (SDC) untersucht. Dabei werden die historische Entwicklung, Fortschritte bei der Rechenleistung und die für die Autonomie erforderlichen Kernkomponenten wie Computer Vision und Sensorfusion beleuchtet. Es werden die Vorteile von SDCs erörtert, darunter eine erhöhte Verkehrssicherheit und geringere Umweltbelastung, aber auch Herausforderungen wie Sicherheitsprogrammierung, potenzielle Arbeitsplatzverluste und Datenschutzbedenken behandelt. Das Kapitel schließt mit einer Übersicht über die verschiedenen Autonomiestufen, von der manuellen Steuerung bis zur Vollautomatisierung, und bereitet so den Boden für eine eingehendere Untersuchung des Deep Learning im darauffolgenden Kapitel.",
                // Chinese
                "中国人": "本章探讨了自动驾驶汽车 (SDC) 技术的演变和现状，重点介绍了其历史发展、计算能力的进步以及自动驾驶所需的核心组件，例如计算机视觉和传感器融合。它讨论了 SDC 的好处，包括提高道路安全性和减少环境影响，同时还解决了安全编程、潜在失业和隐私问题等挑战。本章最后概述了从手动控制到全自动的各种自动驾驶级别，为后续章节对深度学习的更深入探索奠定了基础。",
                // Russian
                "Русский": "В этой главе рассматривается эволюция и современное состояние технологии беспилотных автомобилей (SDC), освещается ее историческое развитие, достижения в вычислительной мощности и основные компоненты, необходимые для автономности, такие как компьютерное зрение и слияние датчиков. В ней обсуждаются преимущества SDC, включая повышение безопасности дорожного движения и снижение воздействия на окружающую среду, а также рассматриваются такие проблемы, как программирование для обеспечения безопасности, потенциальная потеря рабочих мест и проблемы конфиденциальности. Глава завершается описанием различных уровней автономности, от ручного управления до полной автоматизации, что создает основу для более глубокого изучения глубокого обучения в следующей главе.",
                // French
                "Français": "Ce chapitre explore l'évolution et l'état actuel de la technologie des voitures autonomes (SDC), en soulignant son développement historique, les avancées en matière de puissance de calcul et les composants de base nécessaires à l'autonomie, tels que la vision par ordinateur et la fusion de capteurs. Il aborde les avantages des SDC, notamment l'amélioration de la sécurité routière et la réduction de l'impact environnemental, tout en abordant des défis tels que la programmation pour la sécurité, les pertes d'emploi potentielles et les problèmes de confidentialité. Le chapitre se termine en décrivant les différents niveaux d'autonomie, du contrôle manuel à l'automatisation complète, ouvrant la voie à une exploration plus approfondie de l'apprentissage profond dans le chapitre suivant.",
                // Japanese
                "日本語": "この章では、自動運転車 (SDC) 技術の進化と現状について考察し、その歴史的発展、計算能力の進歩、コンピューター ビジョンやセンサー フュージョンなどの自律性に必要なコア コンポーネントに焦点を当てます。道路の安全性の向上や環境への影響の軽減など、SDC の利点について説明するとともに、安全性のためのプログラミング、潜在的な雇用喪失、プライバシーの懸念などの課題についても取り上げます。この章の最後には、手動制御から完全自動化まで、さまざまなレベルの自律性について概説し、次の章でディープラーニングをさらに深く探求するための土台を築きます。",
                // Korean
                "한국인": "이 장에서는 자율주행차(SDC) 기술의 진화와 현재 상태를 살펴보고, 역사적 발전, 연산 능력의 발전, 컴퓨터 비전 및 센서 융합과 같은 자율성에 필요한 핵심 구성 요소를 강조합니다. 도로 안전 증가와 환경 영향 감소를 포함한 SDC의 이점에 대해 논의하는 동시에 안전을 위한 프로그래밍, 잠재적인 일자리 손실, 개인 정보 보호 문제와 같은 과제도 다룹니다. 이 장은 수동 제어에서 완전 자동화에 이르기까지 다양한 수준의 자율성을 설명하면서 마무리하며, 후속 장에서 심층 학습을 더 깊이 탐구할 수 있는 토대를 마련합니다.",
                // Spanish
                "Español": "En este capítulo se analiza la evolución y el estado actual de la tecnología de los vehículos autónomos (SDC, por sus siglas en inglés), destacando su desarrollo histórico, los avances en potencia computacional y los componentes básicos necesarios para la autonomía, como la visión artificial y la fusión de sensores. Se analizan los beneficios de los SDC, como una mayor seguridad vial y un menor impacto ambiental, y se abordan también desafíos como la programación para la seguridad, las posibles pérdidas de empleo y las preocupaciones sobre la privacidad. El capítulo concluye describiendo los distintos niveles de autonomía, desde el control manual hasta la automatización total, lo que prepara el terreno para una exploración más profunda del aprendizaje profundo en el capítulo siguiente.",
                // Hindi
                "हिंदी": "यह अध्याय स्व-चालित कार (SDC) तकनीक के विकास और वर्तमान स्थिति की पड़ताल करता है, इसके ऐतिहासिक विकास, कम्प्यूटेशनल शक्ति में प्रगति और स्वायत्तता के लिए आवश्यक मुख्य घटकों, जैसे कि कंप्यूटर विज़न और सेंसर फ़्यूज़न पर प्रकाश डालता है। यह SDC के लाभों पर चर्चा करता है, जिसमें सड़क सुरक्षा में वृद्धि और पर्यावरणीय प्रभाव में कमी शामिल है, साथ ही सुरक्षा के लिए प्रोग्रामिंग, संभावित नौकरी छूटने और गोपनीयता संबंधी चिंताओं जैसी चुनौतियों का भी समाधान करता है। अध्याय मैन्युअल नियंत्रण से लेकर पूर्ण स्वचालन तक स्वायत्तता के विभिन्न स्तरों को रेखांकित करके समाप्त होता है, जो अगले अध्याय में गहन शिक्षण की गहन खोज के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo explora a evolução e o estado atual da tecnologia dos carros autónomos (SDC), destacando o seu desenvolvimento histórico, os avanços no poder computacional e os principais componentes necessários para a autonomia, como a visão computacional e a fusão de sensores. Discute os benefícios dos CDS, incluindo o aumento da segurança rodoviária e a redução do impacto ambiental, ao mesmo tempo que aborda desafios como a programação para a segurança, potenciais perdas de emprego e preocupações com a privacidade. O capítulo termina descrevendo os vários níveis de autonomia, desde o controlo manual até à automatização total, preparando o terreno para uma exploração mais profunda da aprendizagem profunda no capítulo subsequente.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি স্ব-ড্রাইভিং কার (SDC) প্রযুক্তির বিবর্তন এবং বর্তমান অবস্থার অন্বেষণ করে, এর ঐতিহাসিক বিকাশ, গণনা ক্ষমতার অগ্রগতি এবং স্বায়ত্তশাসনের জন্য প্রয়োজনীয় মূল উপাদানগুলি, যেমন কম্পিউটার দৃষ্টি এবং সেন্সর ফিউশনকে তুলে ধরে। এটি সড়ক নিরাপত্তা বৃদ্ধি এবং পরিবেশগত প্রভাব হ্রাস সহ SDC-এর সুবিধাগুলি নিয়ে আলোচনা করে, পাশাপাশি নিরাপত্তার জন্য প্রোগ্রামিং, সম্ভাব্য চাকরির ক্ষতি এবং গোপনীয়তার উদ্বেগগুলির মতো চ্যালেঞ্জগুলিকেও মোকাবেলা করে৷ অধ্যায়টি স্বায়ত্তশাসনের বিভিন্ন স্তরের রূপরেখা তুলে ধরে, ম্যানুয়াল নিয়ন্ত্রণ থেকে সম্পূর্ণ অটোমেশন পর্যন্ত, পরবর্তী অধ্যায়ে গভীর শিক্ষার গভীর অন্বেষণের মঞ্চ তৈরি করে।",
                // Arabic
                "عَرَبِيّ": "يستكشف هذا الفصل تطور وحالة تكنولوجيا السيارات ذاتية القيادة الحالية، مسلطًا الضوء على تطورها التاريخي، والتقدم المحرز في القوة الحاسوبية، والمكونات الأساسية اللازمة للاستقلالية، مثل الرؤية الحاسوبية ودمج المستشعرات. ويناقش فوائد السيارات ذاتية القيادة، بما في ذلك زيادة السلامة على الطرق وتقليل التأثير البيئي، مع معالجة التحديات مثل البرمجة من أجل السلامة، وفقدان الوظائف المحتمل، ومخاوف الخصوصية. ويختتم الفصل بتحديد المستويات المختلفة للاستقلالية، من التحكم اليدوي إلى الأتمتة الكاملة، مما يمهد الطريق لاستكشاف أعمق للتعلم العميق في الفصل التالي.",
                // Persian
                "فارسی": "این فصل تکامل و وضعیت فعلی فناوری خودروهای خودران (SDC) را بررسی می‌کند، پیشرفت تاریخی آن، پیشرفت‌ها در قدرت محاسباتی، و اجزای اصلی لازم برای استقلال، مانند بینایی کامپیوتر و ترکیب حسگرها را برجسته می‌کند. در مورد مزایای SDCها، از جمله افزایش ایمنی جاده‌ها و کاهش اثرات زیست‌محیطی بحث می‌کند، در حالی که چالش‌هایی مانند برنامه‌ریزی برای ایمنی، از دست دادن شغل بالقوه و نگرانی‌های مربوط به حریم خصوصی را نیز مورد توجه قرار می‌دهد. این فصل با تشریح سطوح مختلف استقلال، از کنترل دستی گرفته تا اتوماسیون کامل، به پایان می‌رسد و زمینه را برای کاوش عمیق‌تر یادگیری عمیق در فصل بعدی فراهم می‌کند.",
            },
        },
        // 2
        {
            "ChapterName": "Dive Deep into Deep Neural Networks",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, we explored the conversion of biological neurons into artificial neurons, understanding the workings of Artificial Neural Networks (ANNs), and the significance of hyperparameters. We discussed the structure of neurons, including dendrites and axons, and how they function together to process signals, as well as the role of activation functions and cost functions in neural networks. Additionally, we provided an overview of deep learning APIs like TensorFlow and Keras, laying the groundwork for implementing deep learning models, particularly in the context of autonomous vehicles.",
                // German
                "Deutsch": "In diesem Kapitel haben wir die Umwandlung biologischer Neuronen in künstliche Neuronen untersucht, die Funktionsweise künstlicher neuronaler Netze (KNN) verstanden und die Bedeutung von Hyperparametern untersucht. Wir haben die Struktur von Neuronen, einschließlich Dendriten und Axonen, und ihre gemeinsame Funktion bei der Signalverarbeitung besprochen sowie die Rolle von Aktivierungsfunktionen und Kostenfunktionen in neuronalen Netzen. Darüber hinaus haben wir einen Überblick über Deep-Learning-APIs wie TensorFlow und Keras gegeben und damit die Grundlage für die Implementierung von Deep-Learning-Modellen gelegt, insbesondere im Zusammenhang mit autonomen Fahrzeugen.",
                // Chinese
                "中国人": "在本章中，我们探讨了生物神经元向人工神经元的转化，了解了人工神经网络 (ANN) 的工作原理以及超参数的重要性。我们讨论了神经元的结构，包括树突和轴突，以及它们如何协同处理信号，以及激活函数和成本函数在神经网络中的作用。此外，我们还概述了 TensorFlow 和 Keras 等深度学习 API，为实现深度学习模型奠定了基础，特别是在自动驾驶汽车领域。",
                // Russian
                "Русский": "В этой главе мы изучили преобразование биологических нейронов в искусственные нейроны, разобрались в работе искусственных нейронных сетей (ИНС) и значении гиперпараметров. Мы обсудили структуру нейронов, включая дендриты и аксоны, и то, как они функционируют вместе для обработки сигналов, а также роль функций активации и функций стоимости в нейронных сетях. Кроме того, мы представили обзор API глубокого обучения, таких как TensorFlow и Keras, заложив основу для внедрения моделей глубокого обучения, особенно в контексте автономных транспортных средств.",
                // French
                "Français": "Dans ce chapitre, nous avons exploré la conversion de neurones biologiques en neurones artificiels, la compréhension du fonctionnement des réseaux de neurones artificiels (RNA) et l'importance des hyperparamètres. Nous avons discuté de la structure des neurones, notamment des dendrites et des axones, et de la manière dont ils fonctionnent ensemble pour traiter les signaux, ainsi que du rôle des fonctions d'activation et des fonctions de coût dans les réseaux de neurones. De plus, nous avons fourni un aperçu des API d'apprentissage profond comme TensorFlow et Keras, jetant les bases de la mise en œuvre de modèles d'apprentissage profond, en particulier dans le contexte des véhicules autonomes.",
                // Japanese
                "日本語": "この章では、生物ニューロンの人工ニューロンへの変換、人工ニューラル ネットワーク (ANN) の仕組み、ハイパーパラメータの重要性について説明しました。樹状突起や軸索などのニューロンの構造、それらが連携して信号を処理する仕組み、ニューラル ネットワークにおける活性化関数とコスト関数の役割について説明しました。さらに、TensorFlow や Keras などのディープラーニング API の概要を示し、特に自動運転車のコンテキストでディープラーニング モデルを実装するための基礎を築きました。",
                // Korean
                "한국인": "이 장에서는 생물학적 뉴런을 인공 뉴런으로 변환하는 방법, 인공 신경망(ANN)의 작동 원리, 하이퍼파라미터의 중요성을 살펴보았습니다. 수상돌기와 축삭을 포함한 뉴런의 구조와 이들이 신호를 처리하기 위해 어떻게 함께 기능하는지, 그리고 신경망에서 활성화 함수와 비용 함수의 역할에 대해 논의했습니다. 또한 TensorFlow와 Keras와 같은 딥 러닝 API에 대한 개요를 제공하여 특히 자율 주행차의 맥락에서 딥 러닝 모델을 구현하기 위한 토대를 마련했습니다.",
                // Spanish
                "Español": "En este capítulo, exploramos la conversión de neuronas biológicas en neuronas artificiales, entendiendo el funcionamiento de las redes neuronales artificiales (RNA) y la importancia de los hiperparámetros. Analizamos la estructura de las neuronas, incluidas las dendritas y los axones, y cómo funcionan juntas para procesar señales, así como el papel de las funciones de activación y las funciones de costo en las redes neuronales. Además, proporcionamos una descripción general de las API de aprendizaje profundo como TensorFlow y Keras, sentando las bases para la implementación de modelos de aprendizaje profundo, particularmente en el contexto de los vehículos autónomos.",
                // Hindi
                "हिंदी": "इस अध्याय में, हमने जैविक न्यूरॉन्स को कृत्रिम न्यूरॉन्स में बदलने, कृत्रिम तंत्रिका नेटवर्क (एएनएन) के कामकाज को समझने और हाइपरपैरामीटर के महत्व पर चर्चा की। हमने न्यूरॉन्स की संरचना पर चर्चा की, जिसमें डेंड्राइट्स और एक्सॉन शामिल हैं, और वे सिग्नल को संसाधित करने के लिए एक साथ कैसे काम करते हैं, साथ ही तंत्रिका नेटवर्क में सक्रियण कार्यों और लागत कार्यों की भूमिका पर भी चर्चा की। इसके अतिरिक्त, हमने TensorFlow और Keras जैसे डीप लर्निंग API का अवलोकन प्रदान किया, जो विशेष रूप से स्वायत्त वाहनों के संदर्भ में डीप लर्निंग मॉडल को लागू करने के लिए आधार तैयार करता है।",
                // Portuguese
                "Português": "Neste capítulo, exploramos a conversão de neurónios biológicos em neurónios artificiais, compreendendo o funcionamento das Redes Neurais Artificiais (RNAs) e a importância dos hiperparâmetros. Discutimos a estrutura dos neurónios, incluindo os dendritos e os axónios, e como funcionam em conjunto para processar sinais, bem como o papel das funções de ativação e das funções de custo nas redes neuronais. Além disso, fornecemos uma visão geral das APIs de aprendizagem profunda, como o TensorFlow e o Keras, estabelecendo as bases para a implementação de modelos de aprendizagem profunda, especialmente no contexto de veículos autónomos.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, আমরা জৈবিক নিউরনকে কৃত্রিম নিউরনে রূপান্তর, কৃত্রিম নিউরাল নেটওয়ার্ক (ANNs) এর কার্যকারিতা বোঝা এবং হাইপারপ্যারামিটারের তাৎপর্য অন্বেষণ করেছি। আমরা ডেনড্রাইট এবং অ্যাক্সন সহ নিউরনের গঠন এবং কীভাবে তারা সংকেত প্রক্রিয়াকরণের জন্য একসাথে কাজ করে, সেইসাথে নিউরাল নেটওয়ার্কগুলিতে অ্যাক্টিভেশন ফাংশন এবং খরচ ফাংশনগুলির ভূমিকা নিয়ে আলোচনা করেছি। অতিরিক্তভাবে, আমরা টেনসরফ্লো এবং কেরাসের মতো গভীর শিক্ষার এপিআইগুলির একটি ওভারভিউ প্রদান করেছি, বিশেষ করে স্বায়ত্তশাসিত যানবাহনের প্রেক্ষাপটে গভীর শিক্ষার মডেলগুলি বাস্তবায়নের ভিত্তি স্থাপন করে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، استكشفنا تحويل الخلايا العصبية البيولوجية إلى خلايا عصبية اصطناعية، وفهم عمل الشبكات العصبية الاصطناعية، وأهمية المعلمات الفائقة. ناقشنا بنية الخلايا العصبية، بما في ذلك التشعبات العصبية والمحاور، وكيف تعمل معًا لمعالجة الإشارات، بالإضافة إلى دور وظائف التنشيط ووظائف التكلفة في الشبكات العصبية. بالإضافة إلى ذلك، قدمنا ​​نظرة عامة على واجهات برمجة تطبيقات التعلم العميق مثل TensorFlow وKeras، مما وضع الأساس لتنفيذ نماذج التعلم العميق، وخاصة في سياق المركبات ذاتية القيادة.",
                // Persian
                "فارسی": "در این فصل، ما تبدیل نورون‌های بیولوژیکی به نورون‌های مصنوعی، درک عملکرد شبکه‌های عصبی مصنوعی (ANN) و اهمیت فراپارامترها را بررسی کردیم. ما در مورد ساختار نورون‌ها، از جمله دندریت‌ها و آکسون‌ها، و نحوه عملکرد آنها با هم برای پردازش سیگنال‌ها، و همچنین نقش توابع فعال‌سازی و توابع هزینه در شبکه‌های عصبی بحث کردیم. علاوه بر این، ما یک نمای کلی از APIهای یادگیری عمیق مانند TensorFlow و Keras ارائه کردیم که زمینه را برای پیاده سازی مدل های یادگیری عمیق، به ویژه در زمینه وسایل نقلیه خودران فراهم می کند.",
            },
        },
        // 3
        {
            "ChapterName": "Implementing a Deep Learning Model Using Keras",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the fundamentals of Keras are introduced, highlighting its advantages such as simplicity, flexibility, and support for various programming languages and hardware. The chapter details the process of building a deep learning model step by step, including data importation, normalization, model construction using the Sequential API, compilation, training, and evaluation. It emphasizes the importance of callbacks for early stopping to prevent overfitting and sets the stage for the next chapter, which will explore computer vision techniques.",
                // German
                "Deutsch": "In diesem Kapitel werden die Grundlagen von Keras vorgestellt und seine Vorteile wie Einfachheit, Flexibilität und Unterstützung verschiedener Programmiersprachen und Hardware hervorgehoben. Das Kapitel beschreibt Schritt für Schritt den Prozess des Aufbaus eines Deep-Learning-Modells, einschließlich Datenimport, Normalisierung, Modellkonstruktion mithilfe der Sequential API, Kompilierung, Training und Auswertung. Es betont die Bedeutung von Callbacks für ein frühzeitiges Stoppen, um Überanpassung zu vermeiden, und bereitet den Boden für das nächste Kapitel, in dem Computer-Vision-Techniken untersucht werden.",
                // Chinese
                "中国人": "本章介绍了 Keras 的基础知识，重点介绍了其优点，例如简单性、灵活性以及对各种编程语言和硬件的支持。本章详细介绍了逐步构建深度学习模型的过程，包括数据导入、规范化、使用 Sequential API 构建模型、编译、训练和评估。它强调了回调对于早期停止以防止过度拟合的重要性，并为下一章奠定了基础，下一章将探索计算机视觉技术。",
                // Russian
                "Русский": "В этой главе вводятся основы Keras, подчеркиваются его преимущества, такие как простота, гибкость и поддержка различных языков программирования и оборудования. В главе подробно описывается процесс построения модели глубокого обучения шаг за шагом, включая импорт данных, нормализацию, построение модели с использованием последовательного API, компиляцию, обучение и оценку. В ней подчеркивается важность обратных вызовов для ранней остановки, чтобы предотвратить переобучение, и закладывается основа для следующей главы, в которой будут рассмотрены методы компьютерного зрения.",
                // French
                "Français": "Dans ce chapitre, les principes fondamentaux de Keras sont présentés, soulignant ses avantages tels que la simplicité, la flexibilité et la prise en charge de divers langages de programmation et matériels. Le chapitre détaille le processus de construction d'un modèle d'apprentissage profond étape par étape, y compris l'importation de données, la normalisation, la construction de modèles à l'aide de l'API séquentielle, la compilation, la formation et l'évaluation. Il souligne l'importance des rappels pour l'arrêt précoce afin d'éviter le surapprentissage et prépare le terrain pour le chapitre suivant, qui explorera les techniques de vision par ordinateur.",
                // Japanese
                "日本語": "Dans ce chapitre, les principes fondamentaux de Keras sont présentés, soulignant ses avantages tels que la simplicité, la flexibilité et la prise en charge de divers langages de programmation et matériels. Le chapitre détaille le processus de construction d'un modèle d'apprentissage profond étape par étape, y compris l'importation de données, la normalisation, la construction de modèles à l'aide de l'API séquentielle, la compilation, la formation et l'évaluation. Il souligne l'importance des rappels pour l'arrêt précoce afin d'éviter le surapprentissage et prépare le terrain pour le chapitre suivant, qui explorera les techniques de vision par ordinateur.",
                // Korean
                "한국인": "이 장에서는 Keras의 기본 사항을 소개하고 단순성, 유연성, 다양한 프로그래밍 언어 및 하드웨어 지원과 같은 장점을 강조합니다. 이 장에서는 데이터 가져오기, 정규화, Sequential API를 사용한 모델 구축, 컴파일, 학습 및 평가를 포함하여 딥 러닝 모델을 단계별로 구축하는 프로세스를 자세히 설명합니다. 과적합을 방지하기 위한 조기 중단을 위한 콜백의 중요성을 강조하고 컴퓨터 비전 기술을 탐구할 다음 장의 토대를 마련합니다.",
                // Spanish
                "Español": "En este capítulo, se presentan los fundamentos de Keras, destacando sus ventajas como la simplicidad, la flexibilidad y la compatibilidad con varios lenguajes de programación y hardware. El capítulo detalla el proceso de creación de un modelo de aprendizaje profundo paso a paso, incluida la importación de datos, la normalización, la construcción del modelo mediante la API secuencial, la compilación, el entrenamiento y la evaluación. Destaca la importancia de las devoluciones de llamadas para la detención temprana con el fin de evitar el sobreajuste y prepara el terreno para el siguiente capítulo, que explorará las técnicas de visión artificial.",
                // Hindi
                "हिंदी": "इस अध्याय में, केरास के मूल सिद्धांतों का परिचय दिया गया है, जिसमें सरलता, लचीलापन और विभिन्न प्रोग्रामिंग भाषाओं और हार्डवेयर के लिए समर्थन जैसे इसके लाभों पर प्रकाश डाला गया है। अध्याय में डेटा आयात, सामान्यीकरण, अनुक्रमिक एपीआई का उपयोग करके मॉडल निर्माण, संकलन, प्रशिक्षण और मूल्यांकन सहित चरण दर चरण एक डीप लर्निंग मॉडल बनाने की प्रक्रिया का विवरण दिया गया है। यह ओवरफिटिंग को रोकने के लिए प्रारंभिक रोक के लिए कॉलबैक के महत्व पर जोर देता है और अगले अध्याय के लिए मंच तैयार करता है, जो कंप्यूटर विज़न तकनीकों का पता लगाएगा।",
                // Portuguese
                "Português": "Neste capítulo são apresentados os fundamentos do Keras, destacando as suas vantagens como a simplicidade, flexibilidade e suporte para várias linguagens de programação e hardware. O capítulo detalha o processo de construção de um modelo de aprendizagem profunda passo a passo, incluindo a importação de dados, normalização, construção de modelos utilizando API sequencial, compilação, formação e avaliação. Realça a importância dos callbacks para paragem antecipada para evitar o overfitting e prepara o terreno para o próximo capítulo, que explorará as técnicas de visão computacional.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, কেরাসের মৌলিক বিষয়গুলি উপস্থাপন করা হয়েছে, এর সুবিধাগুলি যেমন সরলতা, নমনীয়তা এবং বিভিন্ন প্রোগ্রামিং ভাষা এবং হার্ডওয়্যারের জন্য সমর্থন তুলে ধরে। অধ্যায়টি ধাপে ধাপে একটি গভীর শিক্ষার মডেল তৈরির প্রক্রিয়ার বিবরণ দেয়, যার মধ্যে ডেটা আমদানি, স্বাভাবিককরণ, অনুক্রমিক API ব্যবহার করে মডেল নির্মাণ, সংকলন, প্রশিক্ষণ এবং মূল্যায়ন অন্তর্ভুক্ত রয়েছে। এটি ওভারফিটিং প্রতিরোধের জন্য তাড়াতাড়ি বন্ধ করার জন্য কলব্যাকের গুরুত্বের উপর জোর দেয় এবং পরবর্তী অধ্যায়ের জন্য পর্যায় সেট করে, যা কম্পিউটার দৃষ্টি কৌশলগুলি অন্বেষণ করবে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتم تقديم أساسيات Keras، مع تسليط الضوء على مزاياها مثل البساطة والمرونة ودعم لغات البرمجة المختلفة والأجهزة. يوضح الفصل بالتفصيل عملية بناء نموذج التعلم العميق خطوة بخطوة، بما في ذلك استيراد البيانات والتطبيع وبناء النموذج باستخدام واجهة برمجة التطبيقات المتسلسلة والتجميع والتدريب والتقييم. ويؤكد على أهمية عمليات الاسترجاع للتوقف المبكر لمنع الإفراط في التجهيز ويهيئ المسرح للفصل التالي، والذي سيستكشف تقنيات الرؤية الحاسوبية.",
                // Persian
                "فارسی": "در این فصل، اصول Keras معرفی شده و مزایای آن مانند سادگی، انعطاف پذیری و پشتیبانی از زبان های برنامه نویسی و سخت افزارهای مختلف برجسته می شود. این فصل به جزئیات فرآیند ساخت یک مدل یادگیری عمیق گام به گام، از جمله وارد کردن داده ها، عادی سازی، ساخت مدل با استفاده از API متوالی، کامپایل، آموزش و ارزیابی می پردازد. این بر اهمیت تماس‌های برگشتی برای توقف زودهنگام برای جلوگیری از تطبیق بیش از حد تأکید می‌کند و زمینه را برای فصل بعدی که تکنیک‌های بینایی رایانه را بررسی می‌کند، آماده می‌کند.",
            },
        },
        // 4
        {
            "ChapterName": "Computer Vision for Self-Driving Cars",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on the fundamentals of computer vision essential for self-driving cars, emphasizing the importance of cameras as primary sensors that provide detailed visual information. It covers key concepts such as image representation, challenges in computer vision like varying viewpoints and lighting conditions, and various image processing techniques including edge detection, convolution, and color space transformations (RGB and HSV). The chapter also discusses image transformations, including affine and projective transformations, and introduces the Hough transform for effective feature extraction and line detection, setting the stage for applying these techniques in future chapters to detect road markings.",
                // German
                "Deutsch": "Dieses Kapitel konzentriert sich auf die Grundlagen der Computervision, die für selbstfahrende Autos unerlässlich sind, und betont die Bedeutung von Kameras als primäre Sensoren, die detaillierte visuelle Informationen liefern. Es behandelt wichtige Konzepte wie Bilddarstellung, Herausforderungen der Computervision wie unterschiedliche Blickwinkel und Lichtverhältnisse sowie verschiedene Bildverarbeitungstechniken, darunter Kantenerkennung, Faltung und Farbraumtransformationen (RGB und HSV). Das Kapitel behandelt auch Bildtransformationen, darunter affine und projektive Transformationen, und führt die Hough-Transformation für eine effektive Merkmalsextraktion und Linienerkennung ein. Damit wird die Grundlage für die Anwendung dieser Techniken in späteren Kapiteln zur Erkennung von Straßenmarkierungen geschaffen.",
                // Chinese
                "中国人": "本章重点介绍自动驾驶汽车必不可少的计算机视觉基础知识，强调摄像头作为提供详细视觉信息的主要传感器的重要性。它涵盖了图像表示等关键概念、计算机视觉中的挑战（如不同的视点和光照条件）以及各种图像处理技术，包括边缘检测、卷积和颜色空间变换（RGB 和 HSV）。本章还讨论了图像变换，包括仿射变换和射影变换，并介绍了用于有效特征提取和线检测的霍夫变换，为在未来章节中应用这些技术检测道路标记奠定了基础。",
                // Russian
                "Русский": "В этой главе рассматриваются основы компьютерного зрения, необходимые для беспилотных автомобилей, подчеркивая важность камер как основных датчиков, которые предоставляют подробную визуальную информацию. В ней рассматриваются такие ключевые концепции, как представление изображения, проблемы компьютерного зрения, такие как различные точки обзора и условия освещения, а также различные методы обработки изображений, включая обнаружение краев, свертку и преобразования цветового пространства (RGB и HSV). В главе также обсуждаются преобразования изображений, включая аффинные и проективные преобразования, и вводится преобразование Хафа для эффективного извлечения признаков и обнаружения линий, что создает основу для применения этих методов в будущих главах для обнаружения дорожной разметки.",
                // French
                "Français": "Ce chapitre se concentre sur les fondamentaux de la vision par ordinateur essentiels aux voitures autonomes, en soulignant l'importance des caméras en tant que capteurs primaires qui fournissent des informations visuelles détaillées. Il couvre des concepts clés tels que la représentation d'images, les défis de la vision par ordinateur comme les différents points de vue et conditions d'éclairage, et diverses techniques de traitement d'images, notamment la détection des contours, la convolution et les transformations de l'espace colorimétrique (RVB et HSV). Le chapitre aborde également les transformations d'images, notamment les transformations affines et projectives, et présente la transformée de Hough pour une extraction efficace des caractéristiques et une détection des lignes, ouvrant la voie à l'application de ces techniques dans les prochains chapitres pour détecter les marquages ​​routiers.",
                // Japanese
                "日本語": "この章では、自動運転車に不可欠なコンピューター ビジョンの基礎に焦点を当て、詳細な視覚情報を提供する主要なセンサーとしてのカメラの重要性を強調します。画像表現、さまざまな視点や照明条件などのコンピューター ビジョンの課題、エッジ検出、畳み込み、色空間変換 (RGB および HSV) などのさまざまな画像処理手法などの主要な概念について説明します。また、アフィン変換や射影変換などの画像変換についても説明し、効果的な特徴抽出と線検出のためのハフ変換を紹介して、今後の章でこれらの手法を道路標示の検出に適用するための基礎を築きます。",
                // Korean
                "한국인": "이 장에서는 자율주행차에 필수적인 컴퓨터 비전의 기본에 초점을 맞추고, 자세한 시각 정보를 제공하는 기본 센서로서 카메라의 중요성을 강조합니다. 이미지 표현, 다양한 관점 및 조명 조건과 같은 컴퓨터 비전의 과제, 에지 감지, 합성곱 및 색상 공간 변환(RGB 및 HSV)을 포함한 다양한 이미지 처리 기술과 같은 핵심 개념을 다룹니다. 이 장에서는 또한 아핀 및 사영 변환을 포함한 이미지 변환을 논의하고, 효과적인 특징 추출 및 선 감지를 위한 호프 변환을 소개하여 향후 장에서 이러한 기술을 적용하여 도로 표시를 감지하기 위한 토대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo se centra en los fundamentos de la visión artificial, esencial para los coches autónomos, y hace hincapié en la importancia de las cámaras como sensores primarios que proporcionan información visual detallada. Abarca conceptos clave como la representación de imágenes, los retos de la visión artificial, como la variación de los puntos de vista y las condiciones de iluminación, y diversas técnicas de procesamiento de imágenes, como la detección de bordes, la convolución y las transformaciones del espacio de color (RGB y HSV). El capítulo también analiza las transformaciones de imágenes, incluidas las transformaciones afines y proyectivas, y presenta la transformada de Hough para la extracción de características y la detección de líneas eficaces, sentando las bases para aplicar estas técnicas en capítulos futuros para detectar las marcas viales.",
                // Hindi
                "हिंदी": "यह अध्याय स्व-चालित कारों के लिए आवश्यक कंप्यूटर विज़न के मूल सिद्धांतों पर केंद्रित है, जो विस्तृत दृश्य जानकारी प्रदान करने वाले प्राथमिक सेंसर के रूप में कैमरों के महत्व पर जोर देता है। इसमें छवि प्रतिनिधित्व, कंप्यूटर विज़न में चुनौतियों जैसे अलग-अलग दृष्टिकोण और प्रकाश की स्थिति, और एज डिटेक्शन, कन्वोल्यूशन और कलर स्पेस ट्रांसफ़ॉर्मेशन (RGB और HSV) सहित विभिन्न छवि प्रसंस्करण तकनीकों जैसी प्रमुख अवधारणाओं को शामिल किया गया है। अध्याय में एफ़िन और प्रोजेक्टिव ट्रांसफ़ॉर्मेशन सहित छवि परिवर्तनों पर भी चर्चा की गई है, और प्रभावी फ़ीचर निष्कर्षण और लाइन डिटेक्शन के लिए हफ़ ट्रांसफ़ॉर्म का परिचय दिया गया है, जो सड़क चिह्नों का पता लगाने के लिए भविष्य के अध्यायों में इन तकनीकों को लागू करने के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se nos fundamentos da visão computacional essenciais para os automóveis autónomos, enfatizando a importância das câmaras como sensores primários que fornecem informações visuais detalhadas. Abrange conceitos-chave, como a representação de imagens, desafios em visão computacional, como vários pontos de vista e condições de iluminação, e várias técnicas de processamento de imagem, incluindo deteção de bordos, convolução e transformações de espaço de cor (RGB e HSV) . O capítulo discute também as transformações de imagem, incluindo transformações afins e projetivas, e apresenta a transformada de Hough para a extração eficaz de características e deteção de linhas, preparando o terreno para a aplicação destas técnicas em capítulos futuros para detetar marcações rodoviárias.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি স্ব-ড্রাইভিং গাড়ির জন্য প্রয়োজনীয় কম্পিউটার ভিশনের মৌলিক বিষয়গুলির উপর আলোকপাত করে, প্রাথমিক সেন্সর হিসাবে ক্যামেরার গুরুত্বের উপর জোর দেয় যা বিস্তারিত ভিজ্যুয়াল তথ্য প্রদান করে। এটি মূল ধারণাগুলি কভার করে যেমন চিত্র উপস্থাপনা, কম্পিউটার দৃষ্টিতে চ্যালেঞ্জ যেমন বিভিন্ন দৃষ্টিভঙ্গি এবং আলোর অবস্থা, এবং প্রান্ত সনাক্তকরণ, কনভোল্যুশন এবং রঙের স্থান পরিবর্তন (RGB এবং HSV) সহ বিভিন্ন চিত্র প্রক্রিয়াকরণ কৌশল। অধ্যায়টি ইমেজ ট্রান্সফর্মেশন নিয়েও আলোচনা করে, যার মধ্যে অ্যাফাইন এবং প্রজেক্টিভ ট্রান্সফর্মেশন রয়েছে এবং কার্যকর বৈশিষ্ট্য নিষ্কাশন এবং লাইন সনাক্তকরণের জন্য হাফ ট্রান্সফর্মের প্রবর্তন করা হয়েছে, রাস্তার চিহ্ন সনাক্ত করার জন্য ভবিষ্যতের অধ্যায়গুলিতে এই কৌশলগুলি প্রয়োগ করার পর্যায় সেট করা হয়েছে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على أساسيات الرؤية الحاسوبية الضرورية للسيارات ذاتية القيادة، مع التأكيد على أهمية الكاميرات كأجهزة استشعار أساسية توفر معلومات بصرية مفصلة. ويغطي المفاهيم الأساسية مثل تمثيل الصور، والتحديات في الرؤية الحاسوبية مثل وجهات النظر المتنوعة وظروف الإضاءة، وتقنيات معالجة الصور المختلفة بما في ذلك اكتشاف الحواف والالتواء وتحويلات مساحة اللون (RGB وHSV). يناقش الفصل أيضًا تحويلات الصور، بما في ذلك التحويلات التآلفية والإسقاطية، ويقدم تحويل هوف لاستخراج الميزات الفعالة واكتشاف الخطوط، مما يمهد الطريق لتطبيق هذه التقنيات في الفصول المستقبلية للكشف عن علامات الطريق.",
                // Persian
                "فارسی": "این فصل بر روی اصول بینایی کامپیوتری ضروری برای خودروهای خودران تمرکز دارد و بر اهمیت دوربین ها به عنوان حسگرهای اولیه که اطلاعات بصری دقیقی را ارائه می دهند، تاکید می کند. مفاهیم کلیدی مانند نمایش تصویر، چالش‌های بینایی کامپیوتری مانند دیدگاه‌ها و شرایط نوری متفاوت، و تکنیک‌های مختلف پردازش تصویر از جمله تشخیص لبه، پیچیدگی و تبدیل فضای رنگی (RGB و HSV) را پوشش می‌دهد. این فصل همچنین در مورد تبدیل‌های تصویر، از جمله تبدیل‌های affine و projective بحث می‌کند، و تبدیل Hough را برای استخراج ویژگی موثر و تشخیص خط معرفی می‌کند، و زمینه را برای به کارگیری این تکنیک‌ها در فصل‌های آینده برای تشخیص خط‌کشی جاده فراهم می‌کند.",
            },
        },
        // 5
        {
            "ChapterName": "Finding Road Markings Using OpenCV",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter details the development of a lane line-marking detection algorithm using OpenCV, essential for self-driving cars. It covers the process of loading and preprocessing images, including grayscale conversion and Gaussian smoothing, followed by Canny edge detection and region-of-interest masking. The Hough transform is employed to identify lane lines, which are then optimized by averaging their slopes and intercepts, with the methodology applicable to both images and videos. The chapter sets the stage for future exploration of deep learning techniques in image data processing.",
                // German
                "Deutsch": "In diesem Kapitel wird die Entwicklung eines Algorithmus zur Fahrbahnmarkierungserkennung mit OpenCV beschrieben, der für selbstfahrende Autos unverzichtbar ist. Es behandelt den Prozess des Ladens und Vorverarbeitens von Bildern, einschließlich Graustufenkonvertierung und Gaußscher Glättung, gefolgt von Canny-Kantenerkennung und Maskierung von Regionen von Interesse. Die Hough-Transformation wird verwendet, um Fahrbahnmarkierungen zu identifizieren, die dann durch Mittelung ihrer Steigungen und Schnittpunkte optimiert werden, wobei die Methodik sowohl auf Bilder als auch auf Videos anwendbar ist. Das Kapitel bereitet den Boden für die zukünftige Erforschung von Deep-Learning-Techniken in der Bilddatenverarbeitung.",
                // Chinese
                "中国人": "本章详细介绍了使用 OpenCV 开发车道线标记检测算法，这对于自动驾驶汽车至关重要。它涵盖了加载和预处理图像的过程，包括灰度转换和高斯平滑，然后是 Canny 边缘检测和感兴趣区域掩蔽。使用霍夫变换来识别车道线，然后通过平均其斜率和截距来优化车道线，该方法适用于图像和视频。本章为未来探索图像数据处理中的深度学习技术奠定了基础。",
                // Russian
                "Русский": "В этой главе подробно описывается разработка алгоритма обнаружения разметки полос с использованием OpenCV, необходимого для беспилотных автомобилей. В ней рассматривается процесс загрузки и предварительной обработки изображений, включая преобразование в оттенки серого и сглаживание по Гауссу, за которым следует обнаружение границ Кэнни и маскирование интересующей области. Преобразование Хафа используется для определения линий полос, которые затем оптимизируются путем усреднения их наклонов и точек пересечения, с методологией, применимой как к изображениям, так и к видео. Глава закладывает основу для будущего исследования методов глубокого обучения в обработке данных изображений.",
                // French
                "Français": "Ce chapitre détaille le développement d'un algorithme de détection de marquage de voie à l'aide d'OpenCV, essentiel pour les voitures autonomes. Il couvre le processus de chargement et de prétraitement des images, y compris la conversion en niveaux de gris et le lissage gaussien, suivi de la détection des contours de Canny et du masquage des régions d'intérêt. La transformée de Hough est utilisée pour identifier les lignes de voie, qui sont ensuite optimisées en faisant la moyenne de leurs pentes et de leurs interceptions, avec la méthodologie applicable aux images et aux vidéos. Le chapitre ouvre la voie à une exploration future des techniques d'apprentissage profond dans le traitement des données d'image.",
                // Japanese
                "日本語": "この章では、自動運転車に不可欠な OpenCV を使用した車線マーキング検出アルゴリズムの開発について詳しく説明します。グレースケール変換、ガウス平滑化、Canny エッジ検出、関心領域マスキングなどの画像の読み込みと前処理のプロセスについて説明します。車線を識別するためにハフ変換が使用され、その後、画像とビデオの両方に適用できる方法論を使用して、車線の傾きと切片を平均化することで最適化されます。この章は、画像データ処理におけるディープラーニング技術の将来の探求の基礎となります。",
                // Korean
                "한국인": "이 장에서는 자율 주행 자동차에 필수적인 OpenCV를 사용한 차선 표시 감지 알고리즘의 개발에 대해 자세히 설명합니다. 그레이스케일 변환 및 가우시안 스무딩을 포함한 이미지 로딩 및 사전 처리 프로세스와 Canny 에지 감지 및 관심 영역 마스킹을 다룹니다. Hough 변환은 차선 선을 식별하는 데 사용되며, 그런 다음 기울기와 절편을 평균화하여 최적화합니다. 이 방법론은 이미지와 비디오 모두에 적용할 수 있습니다. 이 장에서는 이미지 데이터 처리에서 딥 러닝 기술에 대한 향후 탐색을 위한 토대를 마련합니다.",
                // Spanish
                "Español": "En este capítulo se detalla el desarrollo de un algoritmo de detección de líneas de carril mediante OpenCV, esencial para los vehículos autónomos. Se abarca el proceso de carga y preprocesamiento de imágenes, incluida la conversión a escala de grises y el suavizado gaussiano, seguido de la detección de bordes de Canny y el enmascaramiento de la región de interés. Se emplea la transformada de Hough para identificar líneas de carril, que luego se optimizan promediando sus pendientes e intersecciones, con la metodología aplicable tanto a imágenes como a vídeos. El capítulo sienta las bases para la exploración futura de técnicas de aprendizaje profundo en el procesamiento de datos de imágenes.",
                // Hindi
                "हिंदी": "यह अध्याय OpenCV का उपयोग करके लेन लाइन-मार्किंग डिटेक्शन एल्गोरिदम के विकास का विवरण देता है, जो स्व-चालित कारों के लिए आवश्यक है। इसमें ग्रेस्केल रूपांतरण और गॉसियन स्मूथिंग सहित छवियों को लोड करने और प्रीप्रोसेस करने की प्रक्रिया शामिल है, इसके बाद कैनी एज डिटेक्शन और रीजन-ऑफ-इंटरेस्ट मास्किंग शामिल है। हफ़ ट्रांसफ़ॉर्म का उपयोग लेन लाइनों की पहचान करने के लिए किया जाता है, जिन्हें फिर छवियों और वीडियो दोनों पर लागू कार्यप्रणाली के साथ उनके ढलानों और अवरोधों का औसत निकालकर अनुकूलित किया जाता है। यह अध्याय छवि डेटा प्रसंस्करण में गहन शिक्षण तकनीकों के भविष्य के अन्वेषण के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo detalha o desenvolvimento de um algoritmo de deteção de marcação de faixa utilizando o OpenCV, essencial para carros autónomos. Abrange o processo de carregamento e pré-processamento de imagens, incluindo a conversão de escala de cinzentos e a suavização gaussiana, seguida pela deteção de bordos Canny e mascaramento da região de interesse. A transformada de Hough é empregue para identificar linhas de pista, que são depois otimizadas pela média das suas inclinações e interceções, com metodologia aplicável tanto a imagens como a vídeos. O capítulo prepara o terreno para a exploração futura de técnicas de aprendizagem profunda no processamento de dados de imagem.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি OpenCV ব্যবহার করে একটি লেন লাইন-মার্কিং সনাক্তকরণ অ্যালগরিদমের বিকাশের বিশদ বিবরণ দেয়, স্ব-চালিত গাড়ির জন্য অপরিহার্য। এটি গ্রেস্কেল রূপান্তর এবং গাউসিয়ান স্মুথিং সহ, ক্যানি প্রান্ত সনাক্তকরণ এবং অঞ্চল-অফ-আগ্রহের মাস্কিং সহ চিত্রগুলি লোড এবং প্রিপ্রসেস করার প্রক্রিয়াকে কভার করে। হাফ ট্রান্সফর্মকে লেন লাইন সনাক্ত করতে নিযুক্ত করা হয়, যেগুলি চিত্র এবং ভিডিও উভয় ক্ষেত্রেই প্রযোজ্য পদ্ধতির সাথে তাদের ঢাল এবং বাধার গড় করে অপ্টিমাইজ করা হয়। অধ্যায়টি ইমেজ ডেটা প্রক্রিয়াকরণে গভীর শিক্ষার কৌশলগুলির ভবিষ্যতের অন্বেষণের জন্য পর্যায় সেট করে।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل بالتفصيل تطوير خوارزمية اكتشاف خطوط المسارات باستخدام OpenCV، وهو أمر ضروري للسيارات ذاتية القيادة. ويغطي عملية تحميل الصور ومعالجتها مسبقًا، بما في ذلك تحويل التدرج الرمادي والتنعيم الغاوسي، متبوعًا باكتشاف حافة كاني وإخفاء منطقة الاهتمام. يتم استخدام تحويل هوف لتحديد خطوط المسارات، والتي يتم تحسينها بعد ذلك من خلال حساب متوسط ​​منحدراتها وتقاطعاتها، مع المنهجية المطبقة على كل من الصور ومقاطع الفيديو. يمهد الفصل الطريق لاستكشاف تقنيات التعلم العميق في معالجة بيانات الصور في المستقبل.",
                // Persian
                "فارسی": "در این فصل توسعه یک الگوریتم تشخیص خط خط با استفاده از OpenCV، که برای خودروهای خودران ضروری است، توضیح داده شده است. این فرآیند بارگیری و پیش پردازش تصاویر، از جمله تبدیل مقیاس خاکستری و هموارسازی گاوسی، و به دنبال آن تشخیص لبه Canny و پوشش منطقه مورد علاقه را پوشش می دهد. تبدیل Hough برای شناسایی خطوط خطوط استفاده می‌شود، که سپس با میانگین‌گیری شیب‌ها و وقفه‌های آن‌ها، با روش‌شناسی قابل اجرا هم برای تصاویر و هم برای فیلم‌ها، بهینه می‌شوند. این فصل زمینه را برای اکتشاف آینده تکنیک های یادگیری عمیق در پردازش داده های تصویر فراهم می کند.",
            },
        },
        // 6
        {
            "ChapterName": "Improving the Image Classifier with CNN",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter delves into the significance of Convolutional Neural Networks (CNNs) in image classification, particularly for self-driving cars. It explains how CNNs utilize convolution layers to efficiently extract features from images, reducing the complexity and training time compared to traditional neural networks. Key concepts covered include the architecture of CNNs, the role of various layers (input, convolution, ReLU, pooling, and fully connected), and the importance of performance metrics such as accuracy, precision, recall, and F1 score, culminating in the implementation of a CNN model for handwritten digit recognition.",
                // German
                "Deutsch": "Dieses Kapitel befasst sich mit der Bedeutung von Convolutional Neural Networks (CNNs) bei der Bildklassifizierung, insbesondere für selbstfahrende Autos. Es erklärt, wie CNNs Faltungsschichten nutzen, um effizient Merkmale aus Bildern zu extrahieren, wodurch die Komplexität und Trainingszeit im Vergleich zu herkömmlichen neuronalen Netzwerken reduziert werden. Zu den behandelten Schlüsselkonzepten gehören die Architektur von CNNs, die Rolle der verschiedenen Schichten (Eingabe, Faltung, ReLU, Pooling und vollständige Verbindung) und die Bedeutung von Leistungsmetriken wie Genauigkeit, Präzision, Rückruf und F1-Score, was in der Implementierung eines CNN-Modells zur Erkennung handschriftlicher Ziffern gipfelt.",
                // Chinese
                "中国人": "本章深入探讨了卷积神经网络 (CNN) 在图像分类中的重要性，尤其是对于自动驾驶汽车而言。它解释了 CNN 如何利用卷积层高效地从图像中提取特征，与传统神经网络相比，它降低了复杂性并缩短了训练时间。本章涵盖的关键概念包括 CNN 的架构、各层（输入、卷积、ReLU、池化和全连接）的作用，以及准确率、精确率、召回率和 F1 分数等性能指标的重要性，最后介绍了用于手写数字识别的 CNN 模型的实现。",
                // Russian
                "Русский": "В этой главе рассматривается значение сверточных нейронных сетей (CNN) в классификации изображений, особенно для беспилотных автомобилей. В ней объясняется, как CNN используют слои свертки для эффективного извлечения признаков из изображений, что снижает сложность и время обучения по сравнению с традиционными нейронными сетями. Основные рассматриваемые концепции включают архитектуру CNN, роль различных слоев (вход, свертка, ReLU, объединение и полная связность) и важность показателей производительности, таких как точность, достоверность, отзыв и оценка F1, что приводит к реализации модели CNN для распознавания рукописных цифр.",
                // French
                "Français": "Ce chapitre aborde l'importance des réseaux de neurones convolutionnels (CNN) dans la classification d'images, en particulier pour les voitures autonomes. Il explique comment les CNN utilisent des couches de convolution pour extraire efficacement des caractéristiques des images, réduisant ainsi la complexité et le temps de formation par rapport aux réseaux de neurones traditionnels. Les principaux concepts abordés comprennent l'architecture des CNN, le rôle des différentes couches (entrée, convolution, ReLU, pooling et entièrement connectée) et l'importance des mesures de performance telles que l'exactitude, la précision, le rappel et le score F1, aboutissant à la mise en œuvre d'un modèle CNN pour la reconnaissance des chiffres manuscrits.",
                // Japanese
                "日本語": "この章では、画像分類、特に自動運転車における畳み込みニューラル ネットワーク (CNN) の重要性について詳しく説明します。CNN が畳み込み層を利用して画像から特徴を効率的に抽出し、従来のニューラル ネットワークに比べて複雑さとトレーニング時間を削減する方法について説明します。主要な概念には、CNN のアーキテクチャ、さまざまな層 (入力、畳み込み、ReLU、プーリング、完全接続) の役割、精度、精度、再現率、F1 スコアなどのパフォーマンス メトリックの重要性などがあり、最後に手書き数字認識用の CNN モデルの実装について説明します。",
                // Korean
                "한국인": "이 장에서는 특히 자율주행차에 대한 이미지 분류에서 합성곱 신경망(CNN)의 중요성에 대해 깊이 파고듭니다. CNN이 합성곱 계층을 사용하여 이미지에서 효율적으로 특징을 추출하고 기존 신경망에 비해 복잡성과 학습 시간을 줄이는 방법을 설명합니다. 다루는 핵심 개념에는 CNN의 아키텍처, 다양한 계층(입력, 합성곱, ReLU, 풀링 및 완전 연결)의 역할, 정확도, 정밀도, 재현율 및 F1 점수와 같은 성능 지표의 중요성이 포함되며, 마지막으로 손으로 쓴 숫자 인식을 위한 CNN 모델을 구현합니다.",
                // Spanish
                "Español": "Este capítulo profundiza en la importancia de las redes neuronales convolucionales (CNN) en la clasificación de imágenes, en particular para los automóviles autónomos. Explica cómo las CNN utilizan capas de convolución para extraer características de las imágenes de manera eficiente, lo que reduce la complejidad y el tiempo de entrenamiento en comparación con las redes neuronales tradicionales. Los conceptos clave que se cubren incluyen la arquitectura de las CNN, el papel de las distintas capas (entrada, convolución, ReLU, agrupación y totalmente conectada) y la importancia de las métricas de rendimiento, como la exactitud, la precisión, la recuperación y la puntuación F1, que culminan en la implementación de un modelo de CNN para el reconocimiento de dígitos escritos a mano.",
                // Hindi
                "हिंदी": "यह अध्याय छवि वर्गीकरण में कन्वोल्यूशनल न्यूरल नेटवर्क (CNN) के महत्व पर गहराई से चर्चा करता है, विशेष रूप से स्व-चालित कारों के लिए। यह बताता है कि CNN छवियों से विशेषताओं को कुशलतापूर्वक निकालने के लिए कन्वोल्यूशन परतों का उपयोग कैसे करते हैं, जिससे पारंपरिक न्यूरल नेटवर्क की तुलना में जटिलता और प्रशिक्षण समय कम हो जाता है। शामिल की गई प्रमुख अवधारणाओं में CNN की वास्तुकला, विभिन्न परतों (इनपुट, कन्वोल्यूशन, ReLU, पूलिंग और पूरी तरह से कनेक्टेड) ​​की भूमिका और सटीकता, परिशुद्धता, रिकॉल और F1 स्कोर जैसे प्रदर्शन मेट्रिक्स का महत्व शामिल है, जो हस्तलिखित अंक पहचान के लिए CNN मॉडल के कार्यान्वयन में परिणत होता है।",
                // Portuguese
                "Português": "Este capítulo investiga a importância das Redes Neurais Convolucionais (CNNs) na classificação de imagens, especialmente para carros autónomos. Explica como as CNNs utilizam camadas de convolução para extrair recursos de imagens de forma eficiente, reduzindo a complexidade e o tempo de treino em comparação com as redes neuronais tradicionais. Os principais conceitos abordados incluem a arquitetura das CNNs, o papel de múltiplas camadas (entrada, convolução, ReLU, pooling e totalmente conectado) e a importância das métricas de desempenho, como a exatidão, precisão, recall e pontuação F1, culminando na implementação de um modelo CNN para reconhecimento de dígitos manuscritos.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ইমেজ শ্রেণীবিভাগে কনভোল্যুশনাল নিউরাল নেটওয়ার্ক (CNNs) এর তাৎপর্য নিয়ে আলোচনা করে, বিশেষ করে স্ব-চালিত গাড়ির জন্য। এটি ব্যাখ্যা করে যে কীভাবে সিএনএনগুলি প্রথাগত নিউরাল নেটওয়ার্কগুলির তুলনায় জটিলতা এবং প্রশিক্ষণের সময় কমিয়ে চিত্রগুলি থেকে দক্ষতার সাথে বৈশিষ্ট্যগুলি বের করতে কনভল্যুশন স্তরগুলি ব্যবহার করে। আচ্ছাদিত মূল ধারণাগুলির মধ্যে রয়েছে CNN-এর স্থাপত্য, বিভিন্ন স্তরের ভূমিকা (ইনপুট, কনভোলিউশন, ReLU, পুলিং, এবং সম্পূর্ণভাবে সংযুক্ত), এবং কার্যকারিতা মেট্রিক্সের গুরুত্ব যেমন নির্ভুলতা, নির্ভুলতা, প্রত্যাহার এবং F1 স্কোর, যা বাস্তবায়নে চূড়ান্ত হয়। হাতে লেখা অঙ্কের স্বীকৃতির জন্য একটি CNN মডেলের।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل أهمية الشبكات العصبية التلافيفية (CNNs) في تصنيف الصور، وخاصة للسيارات ذاتية القيادة. ويشرح كيف تستخدم الشبكات العصبية التلافيفية طبقات الالتفاف لاستخراج الميزات بكفاءة من الصور، مما يقلل من التعقيد ووقت التدريب مقارنة بالشبكات العصبية التقليدية. وتشمل المفاهيم الرئيسية التي يغطيها الفصل بنية الشبكات العصبية التلافيفية، ودور الطبقات المختلفة (الإدخال، والالتفاف، وReLU، والتجميع، والاتصال الكامل)، وأهمية مقاييس الأداء مثل الدقة، والدقة، والتذكير، ودرجة F1، والتي بلغت ذروتها في تنفيذ نموذج CNN للتعرف على الأرقام المكتوبة بخط اليد.",
                // Persian
                "فارسی": "این فصل به اهمیت شبکه‌های عصبی کانولوشن (CNN) در طبقه‌بندی تصاویر، به‌ویژه برای خودروهای خودران می‌پردازد. این توضیح می دهد که چگونه CNN ها از لایه های کانولوشن برای استخراج موثر ویژگی ها از تصاویر، کاهش پیچیدگی و زمان آموزش در مقایسه با شبکه های عصبی سنتی استفاده می کنند. مفاهیم کلیدی تحت پوشش شامل معماری CNN، نقش لایه‌های مختلف (ورودی، کانولوشن، ReLU، ادغام و اتصال کامل) و اهمیت معیارهای عملکرد مانند دقت، دقت، یادآوری و امتیاز F1 است که در اجرا به اوج می‌رسد. یک مدل CNN برای تشخیص رقم دست نویس.",
            },
        },
        // 7
        {
            "ChapterName": "Road Sign Detection Using Deep Learning",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter discusses the implementation of traffic sign detection using deep learning, specifically targeting the development of autonomous driving cars. The chapter details the use of the German traffic signs dataset, which includes over 50,000 images across 43 classes, and outlines the process of data preparation, model training, and achieving a classification accuracy of 95%. It emphasizes the significance of accurately detecting traffic signs to enhance road safety and sets the stage for further exploration of semantic segmentation in subsequent chapters.",
                // German
                "Deutsch": "In diesem Kapitel wird die Implementierung der Verkehrszeichenerkennung mithilfe von Deep Learning erörtert, insbesondere im Hinblick auf die Entwicklung autonom fahrender Autos. Das Kapitel beschreibt ausführlich die Verwendung des deutschen Verkehrszeichendatensatzes, der über 50.000 Bilder in 43 Klassen enthält, und beschreibt den Prozess der Datenaufbereitung, des Modelltrainings und des Erreichens einer Klassifizierungsgenauigkeit von 95 %. Es betont die Bedeutung der genauen Erkennung von Verkehrszeichen zur Verbesserung der Verkehrssicherheit und bereitet den Boden für die weitere Erforschung der semantischen Segmentierung in den folgenden Kapiteln.",
                // Chinese
                "中国人": "本章讨论了使用深度学习实现交通标志检测的方法，特别是针对自动驾驶汽车的开发。本章详细介绍了德国交通标志数据集的使用，该数据集包含 43 个类别的 50,000 多幅图像，并概述了数据准备、模型训练和实现 95% 分类准确率的过程。它强调了准确检测交通标志对提高道路安全的重要性，并为后续章节进一步探索语义分割奠定了基础。",
                // Russian
                "Русский": "В этой главе обсуждается реализация обнаружения дорожных знаков с использованием глубокого обучения, специально нацеленная на разработку беспилотных автомобилей. В главе подробно рассматривается использование набора данных немецких дорожных знаков, который включает более 50 000 изображений по 43 классам, и описывается процесс подготовки данных, обучения модели и достижения точности классификации 95%. В ней подчеркивается важность точного обнаружения дорожных знаков для повышения безопасности дорожного движения и закладывается основа для дальнейшего изучения семантической сегментации в последующих главах.",
                // French
                "Français": "Ce chapitre traite de la mise en œuvre de la détection des panneaux de signalisation à l'aide de l'apprentissage profond, en ciblant spécifiquement le développement de voitures à conduite autonome. Le chapitre détaille l'utilisation de l'ensemble de données des panneaux de signalisation allemands, qui comprend plus de 50 000 images réparties en 43 classes, et décrit le processus de préparation des données, de formation du modèle et d'obtention d'une précision de classification de 95 %. Il souligne l'importance de détecter avec précision les panneaux de signalisation pour améliorer la sécurité routière et ouvre la voie à une exploration plus approfondie de la segmentation sémantique dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、特に自動運転車の開発をターゲットに、ディープラーニングを使用した交通標識検出の実装について説明します。この章では、43 クラスにわたる 50,000 枚を超える画像を含むドイツの交通標識データセットの使用について詳しく説明し、データの準備、モデルのトレーニング、および 95% の分類精度の達成のプロセスの概要を示します。道路の安全性を高めるために交通標識を正確に検出することの重要性を強調し、後続の章でセマンティック セグメンテーションをさらに探求するための土台を築きます。",
                // Korean
                "한국인": "이 장에서는 자율 주행 자동차 개발을 특별히 목표로 하는 딥 러닝을 사용한 교통 표지판 감지 구현에 대해 논의합니다. 이 장에서는 43개 클래스에 걸쳐 50,000개 이상의 이미지가 포함된 독일 교통 표지판 데이터 세트의 사용에 대해 자세히 설명하고 데이터 준비, 모델 학습 및 95%의 분류 정확도 달성 프로세스를 설명합니다. 도로 안전을 강화하기 위해 교통 표지판을 정확하게 감지하는 것의 중요성을 강조하고 후속 장에서 의미론적 분할을 추가로 탐색할 수 있는 토대를 마련합니다.",
                // Spanish
                "Español": "En este capítulo se analiza la implementación de la detección de señales de tráfico mediante aprendizaje profundo, especialmente en el desarrollo de vehículos autónomos. El capítulo detalla el uso del conjunto de datos de señales de tráfico de Alemania, que incluye más de 50 000 imágenes en 43 clases, y describe el proceso de preparación de datos, entrenamiento de modelos y obtención de una precisión de clasificación del 95 %. Se hace hincapié en la importancia de detectar con precisión las señales de tráfico para mejorar la seguridad vial y se prepara el terreno para una mayor exploración de la segmentación semántica en los capítulos siguientes.",
                // Hindi
                "हिंदी": "इस अध्याय में डीप लर्निंग का उपयोग करके ट्रैफ़िक साइन डिटेक्शन के कार्यान्वयन पर चर्चा की गई है, विशेष रूप से स्वायत्त ड्राइविंग कारों के विकास को लक्षित करते हुए। अध्याय में जर्मन ट्रैफ़िक साइन डेटासेट के उपयोग का विवरण दिया गया है, जिसमें 43 वर्गों में 50,000 से अधिक छवियाँ शामिल हैं, और डेटा तैयार करने, मॉडल प्रशिक्षण और 95% की वर्गीकरण सटीकता प्राप्त करने की प्रक्रिया की रूपरेखा तैयार की गई है। यह सड़क सुरक्षा को बढ़ाने के लिए ट्रैफ़िक संकेतों का सटीक रूप से पता लगाने के महत्व पर जोर देता है और बाद के अध्यायों में सिमेंटिक सेगमेंटेशन के आगे के अन्वेषण के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo discute a implementação da deteção de sinais de trânsito utilizando aprendizagem profunda, visando especificamente o desenvolvimento de automóveis com condução autónoma. O capítulo detalha a utilização do conjunto de dados de sinais de trânsito alemães, que inclui mais de 50.000 imagens em 43 classes, e descreve o processo de preparação de dados, treino de modelos e obtenção de uma precisão de classificação de 95%. Realça a importância da deteção precisa dos sinais de trânsito para aumentar a segurança rodoviária e prepara o terreno para uma exploração mais aprofundada da segmentação semântica nos capítulos subsequentes.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে গভীর শিক্ষা ব্যবহার করে ট্র্যাফিক সাইন সনাক্তকরণের বাস্তবায়ন নিয়ে আলোচনা করা হয়েছে, বিশেষ করে স্বায়ত্তশাসিত ড্রাইভিং গাড়ির বিকাশকে লক্ষ্য করে। অধ্যায়টি জার্মান ট্র্যাফিক সাইন ডেটাসেটের ব্যবহারের বিশদ বিবরণ দেয়, যার মধ্যে 43টি ক্লাস জুড়ে 50,000টিরও বেশি চিত্র রয়েছে এবং ডেটা প্রস্তুতি, মডেল প্রশিক্ষণ এবং 95% এর শ্রেণীবিভাগ নির্ভুলতা অর্জনের প্রক্রিয়ার রূপরেখা রয়েছে৷ এটি রাস্তার নিরাপত্তা বাড়ানোর জন্য সঠিকভাবে ট্র্যাফিক লক্ষণ সনাক্ত করার তাত্পর্যের উপর জোর দেয় এবং পরবর্তী অধ্যায়ে শব্দার্থিক বিভাজনের আরও অন্বেষণের জন্য মঞ্চ সেট করে।",
                // Arabic
                "عَرَبِيّ": "يناقش هذا الفصل تنفيذ اكتشاف إشارات المرور باستخدام التعلم العميق، ويستهدف بشكل خاص تطوير السيارات ذاتية القيادة. ويوضح الفصل بالتفصيل استخدام مجموعة بيانات إشارات المرور الألمانية، والتي تتضمن أكثر من 50000 صورة عبر 43 فئة، ويوضح عملية إعداد البيانات وتدريب النموذج وتحقيق دقة تصنيف بنسبة 95٪. ويؤكد على أهمية الكشف الدقيق عن إشارات المرور لتعزيز السلامة على الطرق ويهيئ المسرح لمزيد من الاستكشاف للتجزئة الدلالية في الفصول اللاحقة.",
                // Persian
                "فارسی": "این فصل پیاده سازی تشخیص علائم راهنمایی و رانندگی با استفاده از یادگیری عمیق را مورد بحث قرار می دهد، به طور خاص توسعه اتومبیل های رانندگی خودران را هدف قرار می دهد. این فصل به جزئیات استفاده از مجموعه داده علائم راهنمایی و رانندگی آلمانی می‌پردازد که شامل بیش از 50000 تصویر در 43 کلاس است و روند آماده‌سازی داده‌ها، آموزش مدل‌ها و دستیابی به دقت طبقه‌بندی 95 درصد را تشریح می‌کند. این بر اهمیت تشخیص دقیق علائم راهنمایی و رانندگی برای افزایش ایمنی جاده تاکید می کند و زمینه را برای کاوش بیشتر در بخش بندی معنایی در فصل های بعدی فراهم می کند.",
            },
        },
        // 8
        {
            "ChapterName": "The Principles and Foundations of Semantic Segmentation",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter emphasizes the significance of semantic segmentation in self-driving cars (SDCs) by detailing how it assigns class labels to individual pixels in images, thereby enhancing object recognition and scene understanding. It provides an overview of several prominent deep learning architectures, including U-Net, SegNet, PSPNet, DeepLabv3+, and E-Net, highlighting their unique features and applications in real-time automated systems. The chapter sets the stage for implementing semantic segmentation using E-Net to detect various objects in images and videos, showcasing the advancements in computer vision and deep learning that facilitate improved driving experiences.",
                // German
                "Deutsch": "Dieses Kapitel betont die Bedeutung der semantischen Segmentierung in selbstfahrenden Autos (SDCs), indem detailliert beschrieben wird, wie sie einzelnen Pixeln in Bildern Klassenbezeichnungen zuweist und so die Objekterkennung und das Szenenverständnis verbessert. Es bietet einen Überblick über mehrere bekannte Deep-Learning-Architekturen, darunter U-Net, SegNet, PSPNet, DeepLabv3+ und E-Net, und hebt ihre einzigartigen Funktionen und Anwendungen in automatisierten Echtzeitsystemen hervor. Das Kapitel bereitet den Weg für die Implementierung der semantischen Segmentierung mit E-Net zur Erkennung verschiedener Objekte in Bildern und Videos und zeigt die Fortschritte in Computer Vision und Deep Learning, die ein verbessertes Fahrerlebnis ermöglichen.",
                // Chinese
                "中国人": "本章通过详细介绍语义分割如何将类别标签分配给图像中的各个像素，从而增强对象识别和场景理解，强调了语义分割在自动驾驶汽车 (SDC) 中的重要性。它概述了几种著名的深度学习架构，包括 U-Net、SegNet、PSPNet、DeepLabv3+ 和 E-Net，重点介绍了它们在实时自动化系统中的独特功能和应用。本章为使用 E-Net 实现语义分割以检测图像和视频中的各种对象奠定了基础，展示了计算机视觉和深度学习方面的进步，这些进步有助于改善驾驶体验。",
                // Russian
                "Русский": "В этой главе подчеркивается важность семантической сегментации в беспилотных автомобилях (SDC), путем подробного описания того, как она назначает метки классов отдельным пикселям на изображениях, тем самым улучшая распознавание объектов и понимание сцен. В ней представлен обзор нескольких известных архитектур глубокого обучения, включая U-Net, SegNet, PSPNet, DeepLabv3+ и E-Net, с выделением их уникальных особенностей и приложений в автоматизированных системах реального времени. В главе закладывается основа для внедрения семантической сегментации с использованием E-Net для обнаружения различных объектов на изображениях и видео, демонстрируя достижения в области компьютерного зрения и глубокого обучения, которые способствуют улучшению опыта вождения.",
                // French
                "Français": "Ce chapitre met l'accent sur l'importance de la segmentation sémantique dans les voitures autonomes (SDC) en détaillant la manière dont elle attribue des étiquettes de classe aux pixels individuels des images, améliorant ainsi la reconnaissance des objets et la compréhension des scènes. Il fournit un aperçu de plusieurs architectures d'apprentissage profond de premier plan, notamment U-Net, SegNet, PSPNet, DeepLabv3+ et E-Net, en soulignant leurs caractéristiques et applications uniques dans les systèmes automatisés en temps réel. Le chapitre prépare le terrain pour la mise en œuvre de la segmentation sémantique à l'aide d'E-Net pour détecter divers objets dans les images et les vidéos, en présentant les avancées en matière de vision par ordinateur et d'apprentissage profond qui facilitent l'amélioration des expériences de conduite.",
                // Japanese
                "日本語": "この章では、画像内の個々のピクセルにクラス ラベルを割り当て、物体認識とシーン理解を強化する方法について詳しく説明することで、自動運転車 (SDC) におけるセマンティック セグメンテーションの重要性を強調します。U-Net、SegNet、PSPNet、DeepLabv3+、E-Net など、いくつかの有名なディープラーニング アーキテクチャの概要を示し、リアルタイム自動化システムにおけるそれらの独自の機能とアプリケーションに焦点を当てます。この章では、E-Net を使用して画像やビデオ内のさまざまな物体を検出するセマンティック セグメンテーションを実装するための準備を整え、運転体験の向上を促進するコンピューター ビジョンとディープラーニングの進歩を紹介します。",
                // Korean
                "한국인": "이 장에서는 이미지의 개별 픽셀에 클래스 레이블을 할당하여 객체 인식과 장면 이해를 향상시키는 방법을 자세히 설명하여 자율주행차(SDC)에서 의미론적 분할의 중요성을 강조합니다. U-Net, SegNet, PSPNet, DeepLabv3+, E-Net을 포함한 여러 가지 뛰어난 딥 러닝 아키텍처에 대한 개요를 제공하며, 실시간 자동화 시스템에서의 고유한 기능과 응용 프로그램을 강조합니다. 이 장에서는 E-Net을 사용하여 이미지와 비디오에서 다양한 객체를 감지하는 의미론적 분할을 구현하기 위한 토대를 마련하고, 향상된 운전 경험을 용이하게 하는 컴퓨터 비전과 딥 러닝의 발전을 보여줍니다.",
                // Spanish
                "Español": "En este capítulo se destaca la importancia de la segmentación semántica en los vehículos autónomos (SDC, por sus siglas en inglés) al detallar cómo asigna etiquetas de clase a píxeles individuales en imágenes, mejorando así el reconocimiento de objetos y la comprensión de la escena. Se proporciona una descripción general de varias arquitecturas de aprendizaje profundo destacadas, incluidas U-Net, SegNet, PSPNet, DeepLabv3+ y E-Net, y se destacan sus características y aplicaciones únicas en sistemas automatizados en tiempo real. El capítulo sienta las bases para implementar la segmentación semántica utilizando E-Net para detectar varios objetos en imágenes y videos, y muestra los avances en visión artificial y aprendizaje profundo que facilitan experiencias de conducción mejoradas.",
                // Hindi
                "हिंदी": "यह अध्याय स्व-चालित कारों (एसडीसी) में सिमेंटिक सेगमेंटेशन के महत्व पर जोर देता है, जिसमें विस्तार से बताया गया है कि यह छवियों में अलग-अलग पिक्सेल को क्लास लेबल कैसे प्रदान करता है, जिससे ऑब्जेक्ट पहचान और दृश्य समझ में सुधार होता है। यह यू-नेट, सेगनेट, पीएसपीनेट, डीपलैबवी3+ और ई-नेट सहित कई प्रमुख डीप लर्निंग आर्किटेक्चर का अवलोकन प्रदान करता है, जो वास्तविक समय के स्वचालित सिस्टम में उनकी अनूठी विशेषताओं और अनुप्रयोगों पर प्रकाश डालता है। यह अध्याय छवियों और वीडियो में विभिन्न वस्तुओं का पता लगाने के लिए ई-नेट का उपयोग करके सिमेंटिक सेगमेंटेशन को लागू करने के लिए मंच तैयार करता है, कंप्यूटर विज़न और डीप लर्निंग में प्रगति को प्रदर्शित करता है जो बेहतर ड्राइविंग अनुभव की सुविधा प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo enfatiza a importância da segmentação semântica em carros autónomos (SDCs), detalhando como atribui rótulos de classe a pixéis individuais nas imagens, melhorando assim o reconhecimento de objetos e a compreensão da cena. Fornece uma visão geral de várias arquiteturas proeminentes de aprendizagem profunda, incluindo U-Net, SegNet, PSPNet, DeepLabv3+ e E-Net, destacando as suas características e aplicações únicas em sistemas automatizados em tempo real. O capítulo prepara o terreno para a implementação da segmentação semântica utilizando E-Net para detetar múltiplos objetos em imagens e vídeos, mostrando os avanços na visão computacional e na aprendizagem profunda que facilitam melhores experiências de condução.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি সেল্ফ-ড্রাইভিং কার (SDCs) তে শব্দার্থিক বিভাজনের তাত্পর্যের উপর জোর দেয় যে এটি কীভাবে চিত্রগুলিতে পৃথক পিক্সেলগুলিতে শ্রেণি লেবেল বরাদ্দ করে, যার ফলে বস্তুর স্বীকৃতি এবং দৃশ্য বোঝার উন্নতি হয়। এটি U-Net, SegNet, PSPNet, DeepLabv3+, এবং E-Net সহ বেশ কয়েকটি বিশিষ্ট গভীর শিক্ষার আর্কিটেকচারের একটি ওভারভিউ প্রদান করে, রিয়েল-টাইম স্বয়ংক্রিয় সিস্টেমে তাদের অনন্য বৈশিষ্ট্য এবং অ্যাপ্লিকেশনগুলিকে হাইলাইট করে। অধ্যায়টি ই-নেট ব্যবহার করে ইমেজ এবং ভিডিওতে বিভিন্ন বস্তু শনাক্ত করতে, কম্পিউটারের দৃষ্টিভঙ্গির অগ্রগতি প্রদর্শন করে এবং উন্নত ড্রাইভিং অভিজ্ঞতা সহজতর করে এমন গভীর শিক্ষার জন্য ই-নেট ব্যবহার করে শব্দার্থিক বিভাজন বাস্তবায়নের পর্যায় সেট করে।",
                // Arabic
                "عَرَبِيّ": "يؤكد هذا الفصل على أهمية التجزئة الدلالية في السيارات ذاتية القيادة (SDCs) من خلال تفصيل كيفية تعيين تسميات الفئة للبكسلات الفردية في الصور، وبالتالي تعزيز التعرف على الكائنات وفهم المشهد. كما يقدم نظرة عامة على العديد من هياكل التعلم العميق البارزة، بما في ذلك U-Net وSegNet وPSPNet وDeepLabv3+ وE-Net، مع تسليط الضوء على ميزاتها الفريدة وتطبيقاتها في الأنظمة الآلية في الوقت الفعلي. يمهد الفصل الطريق لتنفيذ التجزئة الدلالية باستخدام E-Net للكشف عن كائنات مختلفة في الصور ومقاطع الفيديو، مع عرض التطورات في مجال الرؤية الحاسوبية والتعلم العميق التي تسهل تحسين تجارب القيادة.",
                // Persian
                "فارسی": "این فصل بر اهمیت تقسیم‌بندی معنایی در اتومبیل‌های خودران (SDC) با بیان جزئیات نحوه تخصیص برچسب‌های کلاس به پیکسل‌های جداگانه در تصاویر تأکید می‌کند و در نتیجه تشخیص شی و درک صحنه را افزایش می‌دهد. این یک نمای کلی از چندین معماری برجسته یادگیری عمیق، از جمله U-Net، SegNet، PSPNet، DeepLabv3+، و E-Net را ارائه می‌کند و ویژگی‌ها و برنامه‌های منحصربه‌فرد آنها را در سیستم‌های خودکار بلادرنگ برجسته می‌کند. این فصل زمینه را برای اجرای بخش‌بندی معنایی با استفاده از E-Net برای شناسایی اشیاء مختلف در تصاویر و ویدیوها تنظیم می‌کند، و پیشرفت‌هایی را در بینایی کامپیوتر و یادگیری عمیق نشان می‌دهد که تجارب رانندگی بهبود یافته را تسهیل می‌کند.",
            },
        },
        // 9
        {
            "ChapterName": "Implementing Semantic Segmentation",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter on implementing semantic segmentation, the focus is on utilizing deep learning and the ENet architecture to classify each pixel in images and videos into relevant categories, such as vehicles and pedestrians. The process involves importing necessary libraries, reading and processing input images, constructing blobs for model inference, and visualizing the segmentation results. The chapter demonstrates the effectiveness of ENet in real-time applications, particularly for self-driving cars, and sets the stage for further exploration of behavioral cloning in the next chapter.",
                // German
                "Deutsch": "In diesem Kapitel zur Implementierung der semantischen Segmentierung liegt der Schwerpunkt auf der Nutzung von Deep Learning und der ENet-Architektur, um jedes Pixel in Bildern und Videos in relevante Kategorien wie Fahrzeuge und Fußgänger zu klassifizieren. Der Prozess umfasst das Importieren der erforderlichen Bibliotheken, das Lesen und Verarbeiten von Eingabebildern, das Erstellen von Blobs für die Modellinferenz und das Visualisieren der Segmentierungsergebnisse. Das Kapitel demonstriert die Wirksamkeit von ENet in Echtzeitanwendungen, insbesondere für selbstfahrende Autos, und bereitet den Boden für die weitere Erforschung des Verhaltensklonens im nächsten Kapitel.",
                // Chinese
                "中国人": "本章介绍如何实现语义分割，重点是利用深度学习和 ENet 架构将图像和视频中的每个像素分类为相关类别，例如车辆和行人。该过程包括导入必要的库、读取和处理输入图像、构建用于模型推理的 blob 以及可视化分割结果。本章展示了 ENet 在实时应用中的有效性，尤其是对于自动驾驶汽车，并为下一章进一步探索行为克隆奠定了基础。",
                // Russian
                "Русский": "В этой главе о реализации семантической сегментации основное внимание уделяется использованию глубокого обучения и архитектуры ENet для классификации каждого пикселя в изображениях и видео по соответствующим категориям, таким как транспортные средства и пешеходы. Процесс включает импорт необходимых библиотек, чтение и обработку входных изображений, построение BLOB-объектов для вывода модели и визуализацию результатов сегментации. В главе демонстрируется эффективность ENet в приложениях реального времени, в частности для беспилотных автомобилей, и закладывается основа для дальнейшего изучения поведенческого клонирования в следующей главе.",
                // French
                "Français": "Dans ce chapitre consacré à la mise en œuvre de la segmentation sémantique, l'accent est mis sur l'utilisation de l'apprentissage profond et de l'architecture ENet pour classer chaque pixel des images et des vidéos dans des catégories pertinentes, telles que les véhicules et les piétons. Le processus implique l'importation des bibliothèques nécessaires, la lecture et le traitement des images d'entrée, la construction de blobs pour l'inférence du modèle et la visualisation des résultats de la segmentation. Le chapitre démontre l'efficacité d'ENet dans les applications en temps réel, en particulier pour les voitures autonomes, et ouvre la voie à une exploration plus approfondie du clonage comportemental dans le chapitre suivant.",
                // Japanese
                "日本語": "セマンティック セグメンテーションの実装に関するこの章では、ディープラーニングと ENet アーキテクチャを利用して、画像やビデオの各ピクセルを車両や歩行者などの関連カテゴリに分類することに焦点を当てています。このプロセスには、必要なライブラリのインポート、入力画像の読み取りと処理、モデル推論用のブロブの構築、セグメンテーション結果の視覚化が含まれます。この章では、特に自動運転車向けのリアルタイム アプリケーションにおける ENet の有効性を示し、次の章で行動クローニングをさらに探求するための土台を築きます。",
                // Korean
                "한국인": "의미론적 분할을 구현하는 이 장에서 초점은 딥 러닝과 ENet 아키텍처를 활용하여 이미지와 비디오의 각 픽셀을 차량과 보행자와 같은 관련 범주로 분류하는 것입니다. 이 프로세스에는 필요한 라이브러리 가져오기, 입력 이미지 읽기 및 처리, 모델 추론을 위한 블롭 구성, 분할 결과 시각화가 포함됩니다. 이 장에서는 실시간 애플리케이션, 특히 자율 주행 자동차에서 ENet의 효과를 보여주고 다음 장에서 행동 복제에 대한 추가 탐색을 위한 토대를 마련합니다.",
                // Spanish
                "Español": "En este capítulo sobre la implementación de la segmentación semántica, el enfoque se centra en el uso del aprendizaje profundo y la arquitectura ENet para clasificar cada píxel de imágenes y vídeos en categorías relevantes, como vehículos y peatones. El proceso implica la importación de las bibliotecas necesarias, la lectura y el procesamiento de las imágenes de entrada, la construcción de blobs para la inferencia del modelo y la visualización de los resultados de la segmentación. El capítulo demuestra la eficacia de ENet en aplicaciones en tiempo real, en particular para los coches autónomos, y prepara el terreno para una mayor exploración de la clonación conductual en el próximo capítulo.",
                // Hindi
                "हिंदी": "सिमेंटिक सेगमेंटेशन को लागू करने के इस अध्याय में, छवियों और वीडियो में प्रत्येक पिक्सेल को वाहनों और पैदल यात्रियों जैसी प्रासंगिक श्रेणियों में वर्गीकृत करने के लिए डीप लर्निंग और ENet आर्किटेक्चर का उपयोग करने पर ध्यान केंद्रित किया गया है। इस प्रक्रिया में आवश्यक लाइब्रेरीज़ को आयात करना, इनपुट छवियों को पढ़ना और संसाधित करना, मॉडल अनुमान के लिए ब्लॉब्स का निर्माण करना और सेगमेंटेशन परिणामों को विज़ुअलाइज़ करना शामिल है। यह अध्याय वास्तविक समय के अनुप्रयोगों में ENet की प्रभावशीलता को प्रदर्शित करता है, विशेष रूप से स्व-चालित कारों के लिए, और अगले अध्याय में व्यवहारिक क्लोनिंग के आगे के अन्वेषण के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Neste capítulo sobre a implementação da segmentação semântica, o foco está na utilização da aprendizagem profunda e da arquitetura ENet para classificar cada pixel em imagens e vídeos em categorias relevantes, como veículos e peões. O processo envolve a importação das bibliotecas necessárias, a leitura e processamento das imagens de entrada, a construção de blobs para inferência do modelo e a visualização dos resultados da segmentação. O capítulo demonstra a eficácia do ENet em aplicações de tempo real, especialmente para carros autónomos, e prepara o terreno para uma exploração mais aprofundada da clonagem comportamental no próximo capítulo.",
                // Bengali
                "বাংলা": "শব্দার্থিক বিভাজন বাস্তবায়নের এই অধ্যায়ে, চিত্র এবং ভিডিওতে প্রতিটি পিক্সেলকে প্রাসঙ্গিক বিভাগে যেমন যানবাহন এবং পথচারীদের শ্রেণীবদ্ধ করতে গভীর শিক্ষা এবং ENet আর্কিটেকচার ব্যবহার করার উপর ফোকাস করা হয়েছে। প্রক্রিয়াটির মধ্যে প্রয়োজনীয় লাইব্রেরি আমদানি করা, ইনপুট চিত্রগুলি পড়া এবং প্রক্রিয়াকরণ করা, মডেল অনুমানের জন্য ব্লব তৈরি করা এবং বিভাজন ফলাফলগুলি কল্পনা করা জড়িত। অধ্যায়টি রিয়েল-টাইম অ্যাপ্লিকেশানগুলিতে ENet-এর কার্যকারিতা প্রদর্শন করে, বিশেষ করে স্ব-চালিত গাড়িগুলির জন্য, এবং পরবর্তী অধ্যায়ে আচরণগত ক্লোনিংয়ের আরও অন্বেষণের জন্য পর্যায় সেট করে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل الذي يتناول تنفيذ التجزئة الدلالية، ينصب التركيز على الاستفادة من التعلم العميق وهندسة ENet لتصنيف كل بكسل في الصور ومقاطع الفيديو إلى فئات ذات صلة، مثل المركبات والمشاة. وتتضمن العملية استيراد المكتبات الضرورية، وقراءة ومعالجة الصور المدخلة، وإنشاء كتل لاستنتاج النموذج، وتصور نتائج التجزئة. ويوضح الفصل فعالية ENet في التطبيقات في الوقت الفعلي، وخاصة للسيارات ذاتية القيادة، ويهيئ المسرح لمزيد من الاستكشاف للاستنساخ السلوكي في الفصل التالي.",
                // Persian
                "فارسی": "در این فصل در پیاده‌سازی بخش‌بندی معنایی، تمرکز بر استفاده از یادگیری عمیق و معماری ENet برای طبقه‌بندی هر پیکسل در تصاویر و ویدیوها به دسته‌های مرتبط، مانند وسایل نقلیه و عابران پیاده است. این فرآیند شامل وارد کردن کتابخانه‌های لازم، خواندن و پردازش تصاویر ورودی، ساختن حباب‌ها برای استنتاج مدل، و تجسم نتایج تقسیم‌بندی است. این فصل اثربخشی ENet را در برنامه‌های بلادرنگ، به‌ویژه برای خودروهای خودران نشان می‌دهد و زمینه را برای کاوش بیشتر در مورد شبیه‌سازی رفتاری در فصل بعدی فراهم می‌کند.",
            },
        },
        // 10
        {
            "ChapterName": "Behavioral Cloning Using Deep Learning",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the focus is on utilizing neural networks for regression to enable behavioral cloning, particularly in the context of self-driving cars. The chapter begins by explaining the principles of linear regression and its application in predicting continuous values, followed by the process of collecting data through a driving simulator. It details the preparation of this data, the architecture of the neural network using Keras, and the training process, which involves minimizing the mean squared error to improve the model's ability to predict steering angles based on visual input, ultimately aiming to create a functional autonomous driving system.",
                // German
                "Deutsch": "In diesem Kapitel liegt der Schwerpunkt auf der Nutzung neuronaler Netze für die Regression, um Verhaltensklonen zu ermöglichen, insbesondere im Zusammenhang mit selbstfahrenden Autos. Das Kapitel beginnt mit der Erläuterung der Prinzipien der linearen Regression und ihrer Anwendung bei der Vorhersage kontinuierlicher Werte, gefolgt vom Prozess der Datenerfassung durch einen Fahrsimulator. Es beschreibt detailliert die Vorbereitung dieser Daten, die Architektur des neuronalen Netzes mit Keras und den Trainingsprozess, bei dem der mittlere quadratische Fehler minimiert wird, um die Fähigkeit des Modells zu verbessern, Lenkwinkel auf der Grundlage visueller Eingaben vorherzusagen, mit dem letztendlichen Ziel, ein funktionsfähiges autonomes Fahrsystem zu schaffen.",
                // Chinese
                "中国人": "本章重点介绍如何利用神经网络进行回归，实现行为克隆，尤其是在自动驾驶汽车领域。本章首先介绍线性回归的原理及其在预测连续值中的应用，然后介绍通过驾驶模拟器收集数据的过程。本章详细介绍了这些数据的准备、使用 Keras 的神经网络架构以及训练过程，其中包括最小化均方误差以提高模型根据视觉输入预测转向角度的能力，最终旨在创建一个功能齐全的自动驾驶系统。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется использованию нейронных сетей для регрессии, чтобы обеспечить поведенческое клонирование, особенно в контексте беспилотных автомобилей. Глава начинается с объяснения принципов линейной регрессии и ее применения для прогнозирования непрерывных значений, за которыми следует процесс сбора данных с помощью симулятора вождения. В ней подробно описывается подготовка этих данных, архитектура нейронной сети с использованием Keras и процесс обучения, который включает минимизацию среднеквадратической ошибки для улучшения способности модели прогнозировать углы поворота рулевого колеса на основе визуального ввода, в конечном итоге направленного на создание функциональной автономной системы вождения.",
                // French
                "Français": "Dans ce chapitre, l'accent est mis sur l'utilisation des réseaux neuronaux pour la régression afin de permettre le clonage comportemental, en particulier dans le contexte des voitures autonomes. Le chapitre commence par expliquer les principes de la régression linéaire et son application à la prédiction de valeurs continues, suivi du processus de collecte de données via un simulateur de conduite. Il détaille la préparation de ces données, l'architecture du réseau neuronal utilisant Keras et le processus de formation, qui consiste à minimiser l'erreur quadratique moyenne pour améliorer la capacité du modèle à prédire les angles de braquage en fonction des entrées visuelles, dans le but ultime de créer un système de conduite autonome fonctionnel.",
                // Japanese
                "日本語": "この章では、特に自動運転車の状況において、行動のクローニングを可能にするためにニューラル ネットワークを回帰に利用することに焦点を当てています。この章では、まず線形回帰の原理と連続値の予測への応用について説明し、次に運転シミュレーターによるデータ収集のプロセスについて説明します。このデータの準備、Keras を使用したニューラル ネットワークのアーキテクチャ、および視覚入力に基づいてステアリング角度を予測するモデルの能力を向上させるために平均二乗誤差を最小化するトレーニング プロセスについて詳しく説明します。最終的には、機能的な自動運転システムの作成を目指します。",
                // Korean
                "한국인": "이 장에서는 특히 자율 주행 자동차의 맥락에서 행동 복제를 가능하게 하는 회귀에 신경망을 활용하는 데 중점을 둡니다. 이 장은 선형 회귀의 원리와 연속 값을 예측하는 데 사용하는 방법을 설명하는 것으로 시작한 다음, 주행 시뮬레이터를 통해 데이터를 수집하는 프로세스가 이어집니다. 이 데이터의 준비, Keras를 사용한 신경망의 아키텍처, 그리고 시각적 입력을 기반으로 조향 각도를 예측하는 모델의 능력을 향상시키기 위해 평균 제곱 오차를 최소화하는 학습 프로세스를 자세히 설명하며, 궁극적으로 기능적 자율 주행 시스템을 만드는 것을 목표로 합니다.",
                // Spanish
                "Español": "En este capítulo, el enfoque se centra en el uso de redes neuronales para la regresión con el fin de permitir la clonación de comportamientos, en particular en el contexto de los automóviles autónomos. El capítulo comienza explicando los principios de la regresión lineal y su aplicación en la predicción de valores continuos, seguido del proceso de recopilación de datos a través de un simulador de conducción. Se detalla la preparación de estos datos, la arquitectura de la red neuronal utilizando Keras y el proceso de entrenamiento, que implica minimizar el error cuadrático medio para mejorar la capacidad del modelo de predecir ángulos de dirección en función de la información visual, con el objetivo final de crear un sistema de conducción autónoma funcional.",
                // Hindi
                "हिंदी": "इस अध्याय में, व्यवहारिक क्लोनिंग को सक्षम करने के लिए प्रतिगमन के लिए तंत्रिका नेटवर्क का उपयोग करने पर ध्यान केंद्रित किया गया है, विशेष रूप से स्व-चालित कारों के संदर्भ में। अध्याय रैखिक प्रतिगमन के सिद्धांतों और निरंतर मूल्यों की भविष्यवाणी करने में इसके अनुप्रयोग की व्याख्या करके शुरू होता है, इसके बाद ड्राइविंग सिम्युलेटर के माध्यम से डेटा एकत्र करने की प्रक्रिया होती है। यह इस डेटा की तैयारी, केरास का उपयोग करके तंत्रिका नेटवर्क की वास्तुकला और प्रशिक्षण प्रक्रिया का विवरण देता है, जिसमें दृश्य इनपुट के आधार पर स्टीयरिंग कोणों की भविष्यवाणी करने की मॉडल की क्षमता में सुधार करने के लिए माध्य वर्ग त्रुटि को कम करना शामिल है, जिसका उद्देश्य अंततः एक कार्यात्मक स्वायत्त ड्राइविंग सिस्टम बनाना है।",
                // Portuguese
                "Português": "Neste capítulo, o foco está na utilização de redes neuronais para regressão, de forma a permitir a clonagem comportamental, particularmente no contexto de carros autónomos. O capítulo começa por explicar os princípios da regressão linear e a sua aplicação na previsão de valores contínuos, seguindo-se o processo de recolha de dados através de um simulador de condução. Detalha a preparação destes dados, a arquitetura da rede neural utilizando Keras e o processo de treino, que envolve a minimização do erro quadrático médio para melhorar a capacidade do modelo de prever ângulos de direção com base na entrada visual, com o objetivo final de criar um sistema autónomo funcional.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, আচরণগত ক্লোনিং সক্ষম করার জন্য রিগ্রেশনের জন্য নিউরাল নেটওয়ার্ক ব্যবহার করার উপর ফোকাস করা হয়েছে, বিশেষ করে স্ব-চালিত গাড়ির প্রসঙ্গে। অধ্যায়টি রৈখিক রিগ্রেশনের নীতিগুলি ব্যাখ্যা করে এবং ক্রমাগত মানগুলির পূর্বাভাস দেওয়ার ক্ষেত্রে এর প্রয়োগের মাধ্যমে শুরু হয়, তারপরে একটি ড্রাইভিং সিমুলেটরের মাধ্যমে ডেটা সংগ্রহের প্রক্রিয়াটি অনুসরণ করা হয়। এটি এই ডেটার প্রস্তুতি, কেরাস ব্যবহার করে নিউরাল নেটওয়ার্কের স্থাপত্য, এবং প্রশিক্ষণ প্রক্রিয়ার বিশদ বিবরণ দেয়, যার মধ্যে অন্তর্গত বর্গক্ষেত্র ত্রুটি কমিয়ে আনার জন্য মডেলের চাক্ষুষ ইনপুটের উপর ভিত্তি করে স্টিয়ারিং অ্যাঙ্গেলের ভবিষ্যদ্বাণী করার ক্ষমতা উন্নত করা, শেষ পর্যন্ত একটি কার্যকরী স্বায়ত্তশাসিত তৈরি করার লক্ষ্য। ড্রাইভিং সিস্টেম।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على استخدام الشبكات العصبية للانحدار لتمكين الاستنساخ السلوكي، وخاصة في سياق السيارات ذاتية القيادة. يبدأ الفصل بشرح مبادئ الانحدار الخطي وتطبيقه في التنبؤ بالقيم المستمرة، متبوعًا بعملية جمع البيانات من خلال جهاز محاكاة القيادة. ويوضح بالتفصيل إعداد هذه البيانات، وهندسة الشبكة العصبية باستخدام Keras، وعملية التدريب، والتي تنطوي على تقليل متوسط ​​الخطأ التربيعي لتحسين قدرة النموذج على التنبؤ بزوايا التوجيه بناءً على المدخلات المرئية، بهدف إنشاء نظام قيادة ذاتي وظيفي في نهاية المطاف.",
                // Persian
                "فارسی": "در این فصل، تمرکز بر استفاده از شبکه های عصبی برای رگرسیون برای فعال کردن شبیه سازی رفتاری، به ویژه در زمینه خودروهای خودران است. این فصل با توضیح اصول رگرسیون خطی و کاربرد آن در پیش‌بینی مقادیر پیوسته و سپس فرآیند جمع‌آوری داده‌ها از طریق شبیه‌ساز رانندگی آغاز می‌شود. جزئیات آماده‌سازی این داده‌ها، معماری شبکه عصبی با استفاده از Keras، و فرآیند آموزش، که شامل به حداقل رساندن میانگین مربعات خطا برای بهبود توانایی مدل برای پیش‌بینی زوایای فرمان بر اساس ورودی بصری است، و در نهایت با هدف ایجاد یک مستقل عملکردی. سیستم رانندگی",
            },
        },
        // 11
        {
            "ChapterName": "Vehicle Detection Using OpenCV and Deep Learning",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, we explored the significance of object detection in autonomous vehicles, utilizing the YOLO (You Only Look Once) model for efficient and accurate vehicle detection. YOLO's architecture, inspired by GoogLeNet, employs a single neural network to analyze the entire image, enabling rapid predictions by treating detection as a regression problem. The chapter covered YOLO's unique features, loss function, and implementation, culminating in practical applications for detecting objects in both images and videos.",
                // German
                "Deutsch": "In diesem Kapitel haben wir die Bedeutung der Objekterkennung in autonomen Fahrzeugen untersucht und dabei das YOLO-Modell (You Only Look Once) zur effizienten und genauen Fahrzeugerkennung verwendet. Die von GoogLeNet inspirierte Architektur von YOLO verwendet ein einzelnes neuronales Netzwerk zur Analyse des gesamten Bildes und ermöglicht schnelle Vorhersagen, indem die Erkennung als Regressionsproblem behandelt wird. Das Kapitel behandelte die einzigartigen Funktionen, die Verlustfunktion und die Implementierung von YOLO und gipfelte in praktischen Anwendungen zur Erkennung von Objekten in Bildern und Videos.",
                // Chinese
                "中国人": "在本章中，我们探讨了物体检测在自动驾驶汽车中的重要性，并利用 YOLO（You Only Look Once）模型实现高效准确的车辆检测。YOLO 的架构受到 GoogLeNet 的启发，采用单个神经网络来分析整个图像，通过将检测视为回归问题来实现快速预测。本章介绍了 YOLO 的独特功能、损失函数和实现，并最终介绍了在图像和视频中检测物体的实际应用。",
                // Russian
                "Русский": "В этой главе мы рассмотрели значение обнаружения объектов в автономных транспортных средствах, используя модель YOLO (You Only Look Once) для эффективного и точного обнаружения транспортных средств. Архитектура YOLO, вдохновленная GoogLeNet, использует одну нейронную сеть для анализа всего изображения, что позволяет делать быстрые прогнозы, рассматривая обнаружение как проблему регрессии. В главе были рассмотрены уникальные возможности YOLO, функция потерь и реализация, достигающие кульминации в практических приложениях для обнаружения объектов как на изображениях, так и на видео.",
                // French
                "Français": "Dans ce chapitre, nous avons exploré l'importance de la détection d'objets dans les véhicules autonomes, en utilisant le modèle YOLO (You Only Look Once) pour une détection efficace et précise des véhicules. L'architecture de YOLO, inspirée de GoogLeNet, utilise un seul réseau neuronal pour analyser l'image entière, permettant des prédictions rapides en traitant la détection comme un problème de régression. Le chapitre a couvert les fonctionnalités uniques de YOLO, sa fonction de perte et son implémentation, aboutissant à des applications pratiques pour la détection d'objets dans les images et les vidéos.",
                // Japanese
                "日本語": "この章では、YOLO (You Only Look Once) モデルを利用して効率的かつ正確な車両検出を実現し、自動運転車における物体検出の重要性について考察しました。GoogLeNet にヒントを得た YOLO のアーキテクチャは、単一のニューラル ネットワークを使用して画像全体を分析し、検出を回帰問題として扱うことで迅速な予測を可能にします。この章では、YOLO の独自の機能、損失関数、実装について説明し、画像とビデオの両方で物体を検出するための実用的なアプリケーションに至りました。",
                // Korean
                "한국인": "이 장에서는 자율주행차에서 객체 감지의 중요성을 살펴보았고, 효율적이고 정확한 차량 감지를 위해 YOLO(You Only Look Once) 모델을 활용했습니다. GoogLeNet에서 영감을 받은 YOLO의 아키텍처는 단일 신경망을 사용하여 전체 이미지를 분석하고 감지를 회귀 문제로 처리하여 빠른 예측을 가능하게 합니다. 이 장에서는 YOLO의 고유한 기능, 손실 함수 및 구현을 다루었고, 이미지와 비디오에서 객체를 감지하는 실용적인 응용 프로그램으로 마무리했습니다.",
                // Spanish
                "Español": "En este capítulo, exploramos la importancia de la detección de objetos en vehículos autónomos, utilizando el modelo YOLO (You Only Look Once) para una detección de vehículos eficiente y precisa. La arquitectura de YOLO, inspirada en GoogLeNet, emplea una única red neuronal para analizar la imagen completa, lo que permite realizar predicciones rápidas al tratar la detección como un problema de regresión. El capítulo abordó las características únicas de YOLO, la función de pérdida y la implementación, y culminó con aplicaciones prácticas para detectar objetos tanto en imágenes como en videos.",
                // Hindi
                "हिंदी": "इस अध्याय में, हमने स्वचालित वाहनों में ऑब्जेक्ट डिटेक्शन के महत्व का पता लगाया, कुशल और सटीक वाहन पहचान के लिए YOLO (यू ओनली लुक वन्स) मॉडल का उपयोग किया। GoogleNet से प्रेरित YOLO की वास्तुकला, संपूर्ण छवि का विश्लेषण करने के लिए एकल न्यूरल नेटवर्क का उपयोग करती है, जिससे पहचान को प्रतिगमन समस्या के रूप में मानकर तेजी से पूर्वानुमान लगाना संभव हो जाता है। अध्याय में YOLO की अनूठी विशेषताओं, हानि फ़ंक्शन और कार्यान्वयन को शामिल किया गया है, जो छवियों और वीडियो दोनों में वस्तुओं का पता लगाने के लिए व्यावहारिक अनुप्रयोगों में परिणत होता है।",
                // Portuguese
                "Português": "Neste capítulo, exploramos a importância da deteção de objetos em veículos autónomos, utilizando o modelo YOLO (You Only Look Once) para uma deteção eficiente e precisa de veículos. A arquitetura do YOLO, inspirada no GoogLeNet, emprega uma única rede neural para analisar a imagem completa, permitindo previsões rápidas quando se trata a deteção como um problema de regressão. O capítulo abordou as características únicas, a função de perda e a implementação do YOLO, culminando em aplicações práticas para a deteção de objetos em imagens e vídeos.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, আমরা দক্ষ এবং সঠিক যানবাহন সনাক্তকরণের জন্য YOLO (You Only Look One) মডেল ব্যবহার করে স্বায়ত্তশাসিত যানবাহনে বস্তু সনাক্তকরণের তাৎপর্য অন্বেষণ করেছি। YOLO এর আর্কিটেকচার, GoogLeNet দ্বারা অনুপ্রাণিত, সমগ্র চিত্র বিশ্লেষণ করার জন্য একটি একক নিউরাল নেটওয়ার্ক নিযুক্ত করে, সনাক্তকরণকে একটি রিগ্রেশন সমস্যা হিসাবে বিবেচনা করে দ্রুত ভবিষ্যদ্বাণী সক্ষম করে। অধ্যায়টি YOLO-এর অনন্য বৈশিষ্ট্য, ক্ষতির কার্যকারিতা, এবং বাস্তবায়নকে কভার করেছে, যা চিত্র এবং ভিডিও উভয় ক্ষেত্রেই বস্তু সনাক্তকরণের জন্য ব্যবহারিক অ্যাপ্লিকেশনে পরিণত হয়েছে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، استكشفنا أهمية اكتشاف الأجسام في المركبات ذاتية القيادة، باستخدام نموذج YOLO (You Only Look Once) للكشف الفعّال والدقيق عن المركبات. يستخدم تصميم YOLO، المستوحى من GoogLeNet، شبكة عصبية واحدة لتحليل الصورة بالكامل، مما يتيح التنبؤات السريعة من خلال التعامل مع الكشف كمشكلة انحدار. غطى الفصل ميزات YOLO الفريدة ودالة الخسارة والتنفيذ، مما أدى إلى تطبيقات عملية لاكتشاف الأجسام في كل من الصور ومقاطع الفيديو.",
                // Persian
                "فارسی": "در این فصل، با استفاده از مدل YOLO (شما فقط یک بار نگاه می کنید) برای تشخیص کارآمد و دقیق خودرو، اهمیت تشخیص اشیا را در وسایل نقلیه خودران بررسی کردیم. معماری YOLO، با الهام از GoogLeNet، از یک شبکه عصبی واحد برای تجزیه و تحلیل کل تصویر استفاده می‌کند و با در نظر گرفتن تشخیص به عنوان یک مشکل رگرسیون، امکان پیش‌بینی سریع را فراهم می‌کند. این فصل ویژگی‌های منحصربه‌فرد YOLO، عملکرد از دست دادن و پیاده‌سازی را پوشش می‌دهد که به کاربردهای عملی برای تشخیص اشیا در تصاویر و ویدیوها ختم شد.",
            },
        },
        // 12
        {
            "ChapterName": "Next Steps",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, we explored sensor fusion as a critical step in the development of self-driving cars (SDCs), emphasizing the integration of data from various sensors like cameras, RADAR, and LIDAR to enhance environmental understanding. We reviewed the five major steps toward realizing SDCs, including computer vision, localization, path planning, and control, while also discussing the importance of deep learning techniques and algorithms such as the Kalman filter. The chapter highlighted practical applications, including traffic sign detection and object detection, showcasing the advancements in AI and deep learning that are pivotal for the future of autonomous vehicles.",
                // German
                "Deutsch": "In diesem Kapitel haben wir die Sensorfusion als entscheidenden Schritt bei der Entwicklung selbstfahrender Autos (SDCs) untersucht und dabei die Integration von Daten verschiedener Sensoren wie Kameras, Radar und Lidar zur Verbesserung des Umweltverständnisses hervorgehoben. Wir haben die fünf wichtigsten Schritte zur Realisierung von SDCs überprüft, darunter Computer Vision, Lokalisierung, Pfadplanung und Steuerung, und gleichzeitig die Bedeutung von Deep-Learning-Techniken und -Algorithmen wie dem Kalman-Filter erörtert. Das Kapitel hat praktische Anwendungen hervorgehoben, darunter Verkehrszeichenerkennung und Objekterkennung, und die Fortschritte in KI und Deep Learning aufgezeigt, die für die Zukunft autonomer Fahrzeuge von entscheidender Bedeutung sind.",
                // Chinese
                "中国人": "在本章中，我们探讨了传感器融合是自动驾驶汽车 (SDC) 开发的关键步骤，强调了集成来自摄像头、雷达和激光雷达等各种传感器的数据以增强对环境的理解。我们回顾了实现 SDC 的五个主要步骤，包括计算机视觉、定位、路径规划和控制，同时还讨论了深度学习技术和卡尔曼滤波器等算法的重要性。本章重点介绍了实际应用，包括交通标志检测和物体检测，展示了对自动驾驶汽车未来至关重要的人工智能和深度学习方面的进步。",
                // Russian
                "Русский": "В этой главе мы рассмотрели слияние датчиков как критически важный шаг в разработке беспилотных автомобилей (SDC), подчеркивая интеграцию данных с различных датчиков, таких как камеры, радары и лидары, для улучшения понимания окружающей среды. Мы рассмотрели пять основных шагов на пути к реализации SDC, включая компьютерное зрение, локализацию, планирование пути и управление, а также обсудили важность методов и алгоритмов глубокого обучения, таких как фильтр Калмана. В главе были освещены практические приложения, включая обнаружение дорожных знаков и обнаружение объектов, демонстрируя достижения в области ИИ и глубокого обучения, которые имеют решающее значение для будущего беспилотных автомобилей.",
                // French
                "Français": "Dans ce chapitre, nous avons exploré la fusion de capteurs comme une étape cruciale dans le développement des voitures autonomes (SDC), en mettant l'accent sur l'intégration de données provenant de divers capteurs tels que les caméras, le RADAR et le LIDAR pour améliorer la compréhension de l'environnement. Nous avons passé en revue les cinq principales étapes de la réalisation des SDC, notamment la vision par ordinateur, la localisation, la planification de trajectoire et le contrôle, tout en discutant de l'importance des techniques et des algorithmes d'apprentissage profond tels que le filtre de Kalman. Le chapitre a mis en évidence des applications pratiques, notamment la détection des panneaux de signalisation et la détection d'objets, mettant en valeur les avancées de l'IA et de l'apprentissage profond qui sont essentielles pour l'avenir des véhicules autonomes.",
                // Japanese
                "日本語": "この章では、自動運転車 (SDC) の開発における重要なステップとしてセンサー フュージョンを検討し、カメラ、レーダー、ライダーなどのさまざまなセンサーからのデータを統合して環境の理解を強化することを強調しました。コンピューター ビジョン、位置特定、経路計画、制御など、SDC を実現するための 5 つの主要なステップを確認するとともに、カルマン フィルターなどのディープラーニング技術とアルゴリズムの重要性についても説明しました。この章では、交通標識の検出や物体検出などの実用的なアプリケーションに焦点を当て、自律走行車の将来にとって極めて重要な AI とディープラーニングの進歩を紹介しました。",
                // Korean
                "한국인": "이 장에서는 자율 주행 자동차(SDC) 개발의 중요한 단계인 센서 융합을 살펴보았으며, 카메라, RADAR, LIDAR와 같은 다양한 센서의 데이터를 통합하여 환경에 대한 이해를 높이는 것을 강조했습니다. 컴퓨터 비전, 로컬라이제이션, 경로 계획, 제어를 포함하여 SDC를 실현하기 위한 5가지 주요 단계를 검토했으며, 칼만 필터와 같은 딥 러닝 기술과 알고리즘의 중요성도 논의했습니다. 이 장에서는 교통 표지판 감지 및 객체 감지를 포함한 실용적인 응용 프로그램을 강조하여 자율 주행차의 미래에 중요한 AI와 딥 러닝의 발전을 보여주었습니다.",
                // Spanish
                "Español": "En este capítulo, exploramos la fusión de sensores como un paso fundamental en el desarrollo de los vehículos autónomos (SDCs), haciendo hincapié en la integración de datos de varios sensores como cámaras, radares y lidar para mejorar la comprensión del entorno. Revisamos los cinco pasos principales para la realización de los SDCs, incluida la visión artificial, la localización, la planificación de rutas y el control, al tiempo que analizamos la importancia de las técnicas y algoritmos de aprendizaje profundo, como el filtro de Kalman. El capítulo destacó las aplicaciones prácticas, incluida la detección de señales de tráfico y la detección de objetos, y mostró los avances en IA y aprendizaje profundo que son fundamentales para el futuro de los vehículos autónomos.",
                // Hindi
                "हिंदी": "इस अध्याय में, हमने स्व-चालित कारों (SDC) के विकास में एक महत्वपूर्ण कदम के रूप में सेंसर फ्यूजन की खोज की, जिसमें पर्यावरण की समझ को बढ़ाने के लिए कैमरे, राडार और LIDAR जैसे विभिन्न सेंसर से डेटा के एकीकरण पर जोर दिया गया। हमने SDC को साकार करने की दिशा में पाँच प्रमुख चरणों की समीक्षा की, जिसमें कंप्यूटर विज़न, स्थानीयकरण, पथ नियोजन और नियंत्रण शामिल हैं, साथ ही कलमन फ़िल्टर जैसी गहन शिक्षण तकनीकों और एल्गोरिदम के महत्व पर भी चर्चा की। अध्याय में ट्रैफ़िक साइन डिटेक्शन और ऑब्जेक्ट डिटेक्शन सहित व्यावहारिक अनुप्रयोगों पर प्रकाश डाला गया, जिसमें AI और डीप लर्निंग में प्रगति को प्रदर्शित किया गया जो स्वायत्त वाहनों के भविष्य के लिए महत्वपूर्ण हैं।",
                // Portuguese
                "Português": "Neste capítulo, exploramos a fusão de sensores como uma etapa crítica no desenvolvimento de carros autónomos (SDCs), enfatizando a integração de dados de vários sensores como câmaras, RADAR e LIDAR para melhorar a compreensão ambiental. Revemos as cinco etapas principais para a realização de SDCs, incluindo visão computacional, localização, planeamento de caminhos e controlo, ao mesmo tempo que discutimos a importância de técnicas e algoritmos de aprendizagem profunda, como o filtro de Kalman. O capítulo destacou as aplicações práticas, incluindo a deteção de sinais de trânsito e a deteção de objetos, apresentando os avanços na IA e na aprendizagem profunda que são fundamentais para o futuro dos veículos autónomos.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, আমরা সেলফ-ড্রাইভিং কার (SDCs) উন্নয়নে একটি গুরুত্বপূর্ণ পদক্ষেপ হিসাবে সেন্সর ফিউশন অন্বেষণ করেছি, পরিবেশগত বোঝাপড়া বাড়ানোর জন্য ক্যামেরা, RADAR এবং LIDAR এর মতো বিভিন্ন সেন্সর থেকে ডেটা একীকরণের উপর জোর দিয়েছি। আমরা কম্পিউটার দৃষ্টি, স্থানীয়করণ, পথ পরিকল্পনা এবং নিয়ন্ত্রণ সহ এসডিসি উপলব্ধির দিকে পাঁচটি প্রধান পদক্ষেপ পর্যালোচনা করেছি, পাশাপাশি কালমান ফিল্টারের মতো গভীর শিক্ষার কৌশল এবং অ্যালগরিদমের গুরুত্ব নিয়েও আলোচনা করেছি। অধ্যায়টি ট্রাফিক সাইন সনাক্তকরণ এবং বস্তু সনাক্তকরণ সহ ব্যবহারিক অ্যাপ্লিকেশনগুলিকে হাইলাইট করেছে, যা স্বায়ত্তশাসিত যানবাহনের ভবিষ্যতের জন্য গুরুত্বপূর্ণ এআই এবং গভীর শিক্ষার অগ্রগতি প্রদর্শন করে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، استكشفنا دمج المستشعرات كخطوة حاسمة في تطوير السيارات ذاتية القيادة (SDCs)، مع التركيز على دمج البيانات من أجهزة استشعار مختلفة مثل الكاميرات والرادار والليدار لتعزيز الفهم البيئي. لقد راجعنا الخطوات الخمس الرئيسية نحو تحقيق SDCs، بما في ذلك الرؤية الحاسوبية، والتحديد الجغرافي، وتخطيط المسار، والتحكم، بينما ناقشنا أيضًا أهمية تقنيات التعلم العميق والخوارزميات مثل مرشح كالمان. سلط الفصل الضوء على التطبيقات العملية، بما في ذلك اكتشاف إشارات المرور واكتشاف الأشياء، وعرض التطورات في الذكاء الاصطناعي والتعلم العميق التي تشكل أهمية لمستقبل المركبات ذاتية القيادة.",
                // Persian
                "فارسی": "در این فصل، ما ترکیب حسگرها را به عنوان گامی حیاتی در توسعه خودروهای خودران (SDCs) بررسی کردیم و بر ادغام داده‌های حسگرهای مختلف مانند دوربین‌ها، رادار و LIDAR برای افزایش درک محیطی تأکید کردیم. ما پنج گام اصلی به سوی تحقق SDCها، از جمله بینایی کامپیوتر، محلی‌سازی، برنامه‌ریزی مسیر و کنترل را مرور کردیم، در حالی که در مورد اهمیت تکنیک‌ها و الگوریتم‌های یادگیری عمیق مانند فیلتر کالمن نیز بحث کردیم. این فصل کاربردهای عملی، از جمله تشخیص علائم راهنمایی و رانندگی و تشخیص اشیا، نشان دادن پیشرفت‌های هوش مصنوعی و یادگیری عمیق را که برای آینده وسایل نقلیه خودران حیاتی هستند، برجسته کرد.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "Applied Deep Learning and Computer Vision for Self-Driving Cars is a comprehensive guide that covers the theory and practice of developing autonomous vehicles using the latest techniques in artificial intelligence. The book provides a thorough overview of the main concepts and challenges of self-driving cars, such as perception, planning, control, and safety. It also introduces the reader to the most popular frameworks and tools for building and testing self-driving car applications, such as TensorFlow and OpenCV.",
            // German
            "Deutsch": "„Applied Deep Learning and Computer Vision for Self-Driving Cars“ ist ein umfassender Leitfaden, der die Theorie und Praxis der Entwicklung autonomer Fahrzeuge unter Verwendung der neuesten Techniken der künstlichen Intelligenz abdeckt. Das Buch bietet einen umfassenden Überblick über die wichtigsten Konzepte und Herausforderungen selbstfahrender Autos, wie Wahrnehmung, Planung, Steuerung und Sicherheit. Es führt den Leser auch in die beliebtesten Frameworks und Tools zum Erstellen und Testen von Anwendungen für selbstfahrende Autos ein, wie TensorFlow und OpenCV.",
            // Chinese
            "中国人": "《自动驾驶汽车的深度学习和计算机视觉应用》是一本全面的指南，涵盖了使用最新人工智能技术开发自动驾驶汽车的理论和实践。本书全面概述了自动驾驶汽车的主要概念和挑战，例如感知、规划、控制和安全。它还向读者介绍了用于构建和测试自动驾驶汽车应用程序的最流行的框架和工具，例如 TensorFlow 和 OpenCV。",
            // Russian
            "Русский": "«Прикладное глубокое обучение и компьютерное зрение для беспилотных автомобилей» — это комплексное руководство, охватывающее теорию и практику разработки автономных транспортных средств с использованием новейших технологий искусственного интеллекта. В книге представлен подробный обзор основных концепций и проблем беспилотных автомобилей, таких как восприятие, планирование, контроль и безопасность. Он также знакомит читателя с наиболее популярными платформами и инструментами для создания и тестирования приложений для беспилотных автомобилей, такими как TensorFlow и OpenCV.",
            // French
            "Français": "Applied Deep Learning and Computer Vision for Self-Driving Cars est un guide complet qui couvre la théorie et la pratique du développement de véhicules autonomes en utilisant les dernières techniques d'intelligence artificielle. Le livre donne un aperçu complet des principaux concepts et défis des voitures autonomes, tels que la perception, la planification, le contrôle et la sécurité. Il présente également au lecteur les frameworks et outils les plus populaires pour créer et tester des applications de voiture autonome, tels que TensorFlow et OpenCV.",
            // Japanese
            "日本語": "『自動運転車のための応用ディープラーニングとコンピュータービジョン』は、人工知能の最新技術を使用して自律走行車を開発するための理論と実践を網羅した総合ガイドです。この本では、認識、計画、制御、安全性など、自動運転車の主要な概念と課題について徹底的に概説しています。また、TensorFlow や OpenCV など、自動運転車アプリケーションの構築とテストに最もよく使用されるフレームワークとツールについても紹介しています。",
            // Korean
            "한국인": "자율주행차를 위한 응용 딥러닝 및 컴퓨터 비전은 인공지능의 최신 기술을 사용하여 자율주행차를 개발하는 이론과 실제를 다루는 포괄적인 가이드입니다. 이 책은 인식, 계획, 제어, 안전 등 자율주행차의 주요 개념과 과제에 대한 철저한 개요를 제공합니다. 또한 TensorFlow 및 OpenCV와 같이 자율 주행 자동차 애플리케이션을 구축하고 테스트하는 데 가장 널리 사용되는 프레임워크와 도구를 소개합니다.",
            // Spanish
            "Español": "Applied Deep Learning and Computer Vision for Self-Driving Cars es una guía completa que cubre la teoría y la práctica del desarrollo de vehículos autónomos utilizando las últimas técnicas en inteligencia artificial. El libro proporciona una descripción detallada de los principales conceptos y desafíos de los vehículos autónomos, como la percepción, la planificación, el control y la seguridad. También presenta al lector los marcos y herramientas más populares para crear y probar aplicaciones de vehículos autónomos, como TensorFlow y OpenCV.",
            // Hindi
            "हिंदी": "सेल्फ-ड्राइविंग कारों के लिए एप्लाइड डीप लर्निंग और कंप्यूटर विज़न एक व्यापक गाइड है जो आर्टिफिशियल इंटेलिजेंस में नवीनतम तकनीकों का उपयोग करके स्वायत्त वाहनों को विकसित करने के सिद्धांत और अभ्यास को कवर करती है। यह पुस्तक सेल्फ-ड्राइविंग कारों की मुख्य अवधारणाओं और चुनौतियों, जैसे कि धारणा, योजना, नियंत्रण और सुरक्षा का विस्तृत अवलोकन प्रदान करती है। यह पाठक को सेल्फ-ड्राइविंग कार अनुप्रयोगों के निर्माण और परीक्षण के लिए सबसे लोकप्रिय फ्रेमवर्क और टूल से भी परिचित कराती है, जैसे कि TensorFlow और OpenCV।",
            // Portuguese
            "Português": "Applied Deep Learning and Computer Vision for Self-Driving Cars é um guia abrangente que cobre a teoria e a prática do desenvolvimento de veículos autônomos usando as mais recentes técnicas de inteligência artificial. O livro fornece uma visão geral completa dos principais conceitos e desafios dos carros autônomos, como percepção, planejamento, controle e segurança. Ele também apresenta ao leitor as estruturas e ferramentas mais populares para criar e testar aplicativos para carros autônomos, como TensorFlow e OpenCV.",
            // Bengali
            "বাংলা": "অ্যাপ্লায়েড ডিপ লার্নিং এবং স্ব-ড্রাইভিং গাড়ির জন্য কম্পিউটার দৃষ্টি একটি ব্যাপক নির্দেশিকা যা কৃত্রিম বুদ্ধিমত্তার সর্বশেষ কৌশলগুলি ব্যবহার করে স্বায়ত্তশাসিত যানবাহন বিকাশের তত্ত্ব এবং অনুশীলনকে কভার করে। বইটি স্ব-চালিত গাড়ির প্রধান ধারণা এবং চ্যালেঞ্জগুলির একটি পুঙ্খানুপুঙ্খ ওভারভিউ প্রদান করে, যেমন উপলব্ধি, পরিকল্পনা, নিয়ন্ত্রণ এবং নিরাপত্তা। এটি পাঠককে টেনসরফ্লো এবং ওপেনসিভি-র মতো স্ব-ড্রাইভিং গাড়ি অ্যাপ্লিকেশন তৈরি এবং পরীক্ষা করার জন্য সবচেয়ে জনপ্রিয় কাঠামো এবং সরঞ্জামগুলির সাথে পরিচয় করিয়ে দেয়।",
            // Arabic
            "عَرَبِيّ": "التعلم العميق التطبيقي والرؤية الحاسوبية للسيارات ذاتية القيادة هو دليل شامل يغطي نظرية وممارسة تطوير المركبات ذاتية القيادة باستخدام أحدث التقنيات في الذكاء الاصطناعي. يقدم الكتاب لمحة شاملة عن المفاهيم والتحديات الرئيسية للسيارات ذاتية القيادة، مثل الإدراك والتخطيط والتحكم والسلامة. كما أنه يقدم للقارئ الأطر والأدوات الأكثر شعبية لبناء واختبار تطبيقات السيارات ذاتية القيادة، مثل TensorFlow وOpenCV.",
            // Persian
            "فارسی": "یادگیری عمیق کاربردی و دید کامپیوتری برای خودروهای خودران راهنمای جامعی است که تئوری و عمل توسعه وسایل نقلیه خودران با استفاده از آخرین تکنیک‌های هوش مصنوعی را پوشش می‌دهد. این کتاب مروری کامل بر مفاهیم و چالش‌های اصلی خودروهای خودران مانند ادراک، برنامه‌ریزی، کنترل و ایمنی ارائه می‌کند. همچنین خواننده را با محبوب ترین چارچوب ها و ابزارها برای ساخت و آزمایش برنامه های کاربردی خودروهای خودران مانند TensorFlow و OpenCV آشنا می کند.",
        },
        // Paragraph 2
        {
            // English
            "English": "By reading this book, the user will achieve several advantages. First, the user will gain a solid understanding of the fundamentals of deep learning and computer vision, and how they can be applied to solve real-world problems in self-driving cars. Second, the user will learn how to design, implement, and evaluate various deep learning models and algorithms for tasks such as object detection, semantic segmentation, lane detection, and vehicle control. Third, the user will acquire practical skills and experience in working with self-driving car simulators and datasets, and deploying their solutions on real hardware.",
            // German
            "Deutsch": "Durch die Lektüre dieses Buches erhält der Benutzer mehrere Vorteile. Erstens erhält der Benutzer ein solides Verständnis der Grundlagen von Deep Learning und Computer Vision und wie diese angewendet werden können, um reale Probleme bei selbstfahrenden Autos zu lösen. Zweitens lernt der Benutzer, wie man verschiedene Deep-Learning-Modelle und -Algorithmen für Aufgaben wie Objekterkennung, semantische Segmentierung, Spurerkennung und Fahrzeugsteuerung entwirft, implementiert und bewertet. Drittens erwirbt der Benutzer praktische Fähigkeiten und Erfahrungen im Umgang mit Simulatoren und Datensätzen für selbstfahrende Autos und im Einsatz seiner Lösungen auf echter Hardware.",
            // Chinese
            "中国人": "通过阅读本书，用户将获得几个好处。首先，用户将深入了解深度学习和计算机视觉的基础知识，以及如何应用它们来解决自动驾驶汽车中的实际问题。其次，用户将学习如何设计、实施和评估各种深度学习模型和算法，以完成诸如对象检测、语义分割、车道检测和车辆控制等任务。第三，用户将获得使用自动驾驶汽车模拟器和数据集并在真实硬件上部署其解决方案的实践技能和经验。",
            // Russian
            "Русский": "Прочитав эту книгу, пользователь получит ряд преимуществ. Во-первых, пользователь получит четкое представление об основах глубокого обучения и компьютерного зрения, а также о том, как их можно применять для решения реальных проблем в беспилотных автомобилях. Во-вторых, пользователь научится проектировать, реализовывать и оценивать различные модели и алгоритмы глубокого обучения для таких задач, как обнаружение объектов, семантическая сегментация, обнаружение полосы движения и управление транспортными средствами. В-третьих, пользователь приобретет практические навыки и опыт работы с симуляторами беспилотных автомобилей и наборами данных, а также развертывания их решений на реальном оборудовании.",
            // French
            "Français": "En lisant ce livre, l'utilisateur bénéficiera de plusieurs avantages. Tout d’abord, l’utilisateur acquerra une solide compréhension des principes fondamentaux de l’apprentissage profond et de la vision par ordinateur, ainsi que de la manière dont ils peuvent être appliqués pour résoudre des problèmes réels liés aux voitures autonomes. Deuxièmement, l'utilisateur apprendra à concevoir, mettre en œuvre et évaluer divers modèles et algorithmes d'apprentissage profond pour des tâches telles que la détection d'objets, la segmentation sémantique, la détection de voie et le contrôle des véhicules. Troisièmement, l'utilisateur acquerra des compétences pratiques et une expérience en travaillant avec des simulateurs et des ensembles de données de voitures autonomes, et en déployant ses solutions sur du matériel réel.",
            // Japanese
            "日本語": "この本を読むことで、ユーザーはいくつかのメリットを得ることができます。まず、ディープラーニングとコンピュータービジョンの基礎と、それらを自動運転車の実際の問題の解決にどのように適用できるかをしっかりと理解できます。次に、オブジェクト検出、セマンティックセグメンテーション、車線検出、車両制御などのタスク用のさまざまなディープラーニングモデルとアルゴリズムを設計、実装、評価する方法を学びます。最後に、自動運転車のシミュレーターとデータセットを操作し、実際のハードウェアにソリューションを展開するための実践的なスキルと経験を身に付けます。",
            // Korean
            "한국인": "이 책을 읽으면 사용자는 여러 가지 이점을 얻을 수 있습니다. 첫째, 사용자는 딥 러닝과 컴퓨터 비전의 기본 원리와 이를 자율 주행 자동차의 실제 문제 해결에 어떻게 적용할 수 있는지에 대한 확실한 이해를 얻게 됩니다. 둘째, 사용자는 객체 감지, 의미론적 분할, 차선 감지 및 차량 제어와 같은 작업을 위한 다양한 딥 러닝 모델 및 알고리즘을 설계, 구현 및 평가하는 방법을 배웁니다. 셋째, 사용자는 자율 주행 자동차 시뮬레이터 및 데이터 세트를 사용하고 실제 하드웨어에 솔루션을 배포하는 데 있어 실용적인 기술과 경험을 습득하게 됩니다.",
            // Spanish
            "Español": "Al leer este libro, el usuario obtendrá varias ventajas. En primer lugar, el usuario obtendrá una sólida comprensión de los fundamentos del aprendizaje profundo y la visión por computadora, y cómo se pueden aplicar para resolver problemas del mundo real en vehículos autónomos. En segundo lugar, el usuario aprenderá a diseñar, implementar y evaluar varios modelos y algoritmos de aprendizaje profundo para tareas como la detección de objetos, la segmentación semántica, la detección de carriles y el control de vehículos. En tercer lugar, el usuario adquirirá habilidades prácticas y experiencia para trabajar con simuladores y conjuntos de datos de vehículos autónomos y para implementar sus soluciones en hardware real.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़कर, उपयोगकर्ता को कई लाभ प्राप्त होंगे। सबसे पहले, उपयोगकर्ता को डीप लर्निंग और कंप्यूटर विज़न के मूल सिद्धांतों की ठोस समझ प्राप्त होगी, और उन्हें स्व-चालित कारों में वास्तविक दुनिया की समस्याओं को हल करने के लिए कैसे लागू किया जा सकता है। दूसरा, उपयोगकर्ता ऑब्जेक्ट डिटेक्शन, सिमेंटिक सेगमेंटेशन, लेन डिटेक्शन और वाहन नियंत्रण जैसे कार्यों के लिए विभिन्न डीप लर्निंग मॉडल और एल्गोरिदम को डिज़ाइन, कार्यान्वित और मूल्यांकन करना सीखेगा। तीसरा, उपयोगकर्ता स्व-चालित कार सिमुलेटर और डेटासेट के साथ काम करने और वास्तविक हार्डवेयर पर उनके समाधान को तैनात करने में व्यावहारिक कौशल और अनुभव प्राप्त करेगा।",
            // Portuguese
            "Português": "Ao ler este livro, o usuário obterá diversas vantagens. Primeiro, o usuário obterá uma compreensão sólida dos fundamentos do aprendizado profundo e da visão computacional, e como eles podem ser aplicados para resolver problemas do mundo real em carros autônomos. Em segundo lugar, o usuário aprenderá como projetar, implementar e avaliar vários modelos e algoritmos de aprendizagem profunda para tarefas como detecção de objetos, segmentação semântica, detecção de faixas e controle de veículos. Terceiro, o usuário adquirirá habilidades práticas e experiência no trabalho com simuladores e conjuntos de dados de carros autônomos e na implantação de suas soluções em hardware real.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার মাধ্যমে, ব্যবহারকারী বিভিন্ন সুবিধা অর্জন করবে। প্রথমত, ব্যবহারকারী গভীর শিক্ষা এবং কম্পিউটার দৃষ্টিভঙ্গির মৌলিক বিষয়গুলির একটি দৃঢ় বোধগম্যতা অর্জন করবে এবং সেগুলি কীভাবে স্ব-ড্রাইভিং গাড়িগুলিতে বাস্তব-বিশ্বের সমস্যাগুলি সমাধান করতে প্রয়োগ করা যেতে পারে। দ্বিতীয়ত, ব্যবহারকারী শিখবে কিভাবে অবজেক্ট ডিটেকশন, সিমেন্টিক সেগমেন্টেশন, লেন ডিটেকশন এবং গাড়ি নিয়ন্ত্রণের মতো কাজের জন্য বিভিন্ন ডিপ লার্নিং মডেল এবং অ্যালগরিদম ডিজাইন, বাস্তবায়ন এবং মূল্যায়ন করা যায়। তৃতীয়ত, ব্যবহারকারী স্ব-ড্রাইভিং কার সিমুলেটর এবং ডেটাসেটগুলির সাথে কাজ করার এবং বাস্তব হার্ডওয়্যারে তাদের সমাধানগুলি স্থাপন করার ক্ষেত্রে ব্যবহারিক দক্ষতা এবং অভিজ্ঞতা অর্জন করবে।",
            // Arabic
            "عَرَبِيّ": "من خلال قراءة هذا الكتاب، سيحقق المستخدم العديد من المزايا. أولاً، سيكتسب المستخدم فهمًا قويًا لأساسيات التعلم العميق ورؤية الكمبيوتر، وكيف يمكن تطبيقها لحل مشكلات العالم الحقيقي في السيارات ذاتية القيادة. ثانيًا، سيتعلم المستخدم كيفية تصميم وتنفيذ وتقييم نماذج وخوارزميات التعلم العميق المختلفة لمهام مثل اكتشاف الكائنات والتجزئة الدلالية واكتشاف المسار والتحكم في السيارة. ثالثًا، سيكتسب المستخدم مهارات عملية وخبرة في العمل مع محاكيات السيارات ذاتية القيادة ومجموعات البيانات، ونشر حلولها على أجهزة حقيقية.",
            // Persian
            "فارسی": "کاربر با مطالعه این کتاب به چندین مزیت دست خواهد یافت. ابتدا، کاربر به درک کاملی از اصول یادگیری عمیق و بینایی کامپیوتری و چگونگی استفاده از آنها برای حل مشکلات دنیای واقعی در خودروهای خودران دست خواهد یافت. دوم، کاربر یاد خواهد گرفت که چگونه مدل ها و الگوریتم های یادگیری عمیق مختلف را برای کارهایی مانند تشخیص اشیا، تقسیم بندی معنایی، تشخیص خط و کنترل وسیله نقلیه طراحی، پیاده سازی و ارزیابی کند. سوم، کاربر مهارت ها و تجربه عملی را در کار با شبیه سازها و مجموعه داده های ماشین خودران و استقرار راه حل های آنها بر روی سخت افزار واقعی به دست می آورد.",
        },
        // Paragraph 3
        {
            // English
            "English": "The user will also gain many benefits from reading this book. The user will be able to appreciate the current state-of-the-art and future trends in self-driving car research and development. The user will be able to explore the ethical, social, and legal implications of self-driving cars, and how they can contribute to a safer and more efficient transportation system. The user will be able to apply their knowledge and skills to other domains and applications that involve deep learning and computer vision, such as robotics, healthcare, and security. The user will be able to join the growing community of self-driving car enthusiasts and professionals, and participate in various competitions and projects.",
            // German
            "Deutsch": "Auch der Benutzer wird durch die Lektüre dieses Buches viele Vorteile erhalten. Er wird den aktuellen Stand der Technik und zukünftige Trends in der Forschung und Entwicklung selbstfahrender Autos kennenlernen. Er wird die ethischen, sozialen und rechtlichen Auswirkungen selbstfahrender Autos erkunden und erfahren, wie sie zu einem sichereren und effizienteren Transportsystem beitragen können. Er wird sein Wissen und seine Fähigkeiten auf andere Bereiche und Anwendungen anwenden können, die Deep Learning und Computer Vision beinhalten, wie etwa Robotik, Gesundheitswesen und Sicherheit. Er wird der wachsenden Community von Enthusiasten und Fachleuten selbstfahrender Autos beitreten und an verschiedenen Wettbewerben und Projekten teilnehmen können.",
            // Chinese
            "中国人": "用户阅读本书也会受益匪浅。用户将能够了解自动驾驶汽车研究和开发的当前最新水平和未来趋势。用户将能够探索自动驾驶汽车的道德、社会和法律影响，以及它们如何为更安全、更高效的交通系统做出贡献。用户将能够将他们的知识和技能应用于涉及深度学习和计算机视觉的其他领域和应用，例如机器人、医疗保健和安全。用户将能够加入不断壮大的自动驾驶汽车爱好者和专业人士社区，并参与各种比赛和项目。",
            // Russian
            "Русский": "Пользователь также получит много преимуществ от чтения этой книги. Пользователь сможет оценить современное состояние и будущие тенденции в исследованиях и разработках беспилотных автомобилей. Пользователь сможет изучить этические, социальные и юридические последствия беспилотных автомобилей, а также то, как они могут способствовать созданию более безопасной и эффективной транспортной системы. Пользователь сможет применить свои знания и навыки в других областях и приложениях, связанных с глубоким обучением и компьютерным зрением, таких как робототехника, здравоохранение и безопасность. Пользователь сможет присоединиться к растущему сообществу любителей и профессионалов беспилотных автомобилей, а также участвовать в различных конкурсах и проектах.",
            // French
            "Français": "L'utilisateur bénéficiera également de nombreux avantages en lisant ce livre. L'utilisateur pourra apprécier l'état de l'art actuel et les tendances futures en matière de recherche et de développement de voitures autonomes. L'utilisateur pourra explorer les implications éthiques, sociales et juridiques des voitures autonomes et comment elles peuvent contribuer à un système de transport plus sûr et plus efficace. L'utilisateur pourra appliquer ses connaissances et compétences à d'autres domaines et applications impliquant l'apprentissage profond et la vision par ordinateur, tels que la robotique, les soins de santé et la sécurité. L'utilisateur pourra rejoindre la communauté grandissante des passionnés et des professionnels de la voiture autonome, et participer à divers concours et projets.",
            // Japanese
            "日本語": "ユーザーは、この本を読むことで多くのメリットも得られます。ユーザーは、自動運転車の研究開発における現在の最先端技術と将来の動向を理解できるようになります。ユーザーは、自動運転車の倫理的、社会的、法的影響と、自動運転車がより安全で効率的な輸送システムにどのように貢献できるかを探求できるようになります。ユーザーは、ロボット工学、ヘルスケア、セキュリティなど、ディープラーニングとコンピュータービジョンを含む他の分野やアプリケーションに知識とスキルを適用できるようになります。ユーザーは、成長を続ける自動運転車の愛好家や専門家のコミュニティに参加し、さまざまなコンテストやプロジェクトに参加できるようになります。",
            // Korean
            "한국인": "사용자도 이 책을 읽으면 많은 이점을 얻을 수 있습니다. 사용자는 자율주행차 연구개발의 현재 최첨단 기술과 미래 동향을 감상할 수 있습니다. 사용자는 자율주행차의 윤리적, 사회적, 법적 의미를 탐색하고 자율주행차가 보다 안전하고 효율적인 교통 시스템에 어떻게 기여할 수 있는지 알아볼 수 있습니다. 사용자는 로봇 공학, 의료, 보안 등 딥 러닝 및 컴퓨터 비전과 관련된 다른 도메인 및 애플리케이션에 자신의 지식과 기술을 적용할 수 있습니다. 사용자는 성장하는 자율주행차 애호가 및 전문가 커뮤니티에 합류하고 다양한 대회와 프로젝트에 참여할 수 있습니다.",
            // Spanish
            "Español": "El usuario también obtendrá muchos beneficios al leer este libro. El usuario podrá apreciar el estado actual de la técnica y las tendencias futuras en la investigación y el desarrollo de vehículos autónomos. El usuario podrá explorar las implicaciones éticas, sociales y legales de los vehículos autónomos y cómo pueden contribuir a un sistema de transporte más seguro y eficiente. El usuario podrá aplicar sus conocimientos y habilidades a otros dominios y aplicaciones que involucran aprendizaje profundo y visión por computadora, como robótica, atención médica y seguridad. El usuario podrá unirse a la creciente comunidad de entusiastas y profesionales de los vehículos autónomos y participar en diversos concursos y proyectos.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़ने से उपयोगकर्ता को कई लाभ भी होंगे। उपयोगकर्ता स्व-चालित कार अनुसंधान और विकास में वर्तमान अत्याधुनिक और भविष्य के रुझानों की सराहना करने में सक्षम होगा। उपयोगकर्ता स्व-चालित कारों के नैतिक, सामाजिक और कानूनी निहितार्थों का पता लगाने में सक्षम होगा, और वे कैसे एक सुरक्षित और अधिक कुशल परिवहन प्रणाली में योगदान कर सकते हैं। उपयोगकर्ता अपने ज्ञान और कौशल को अन्य डोमेन और अनुप्रयोगों में लागू करने में सक्षम होगा जिसमें रोबोटिक्स, स्वास्थ्य सेवा और सुरक्षा जैसे गहन शिक्षण और कंप्यूटर विज़न शामिल हैं। उपयोगकर्ता स्व-चालित कार उत्साही और पेशेवरों के बढ़ते समुदाय में शामिल हो सकेगा, और विभिन्न प्रतियोगिताओं और परियोजनाओं में भाग ले सकेगा।",
            // Portuguese
            "Português": "O usuário também obterá muitos benefícios com a leitura deste livro. O usuário poderá apreciar o estado da arte atual e as tendências futuras em pesquisa e desenvolvimento de carros autônomos. O usuário poderá explorar as implicações éticas, sociais e legais dos carros autônomos e como eles podem contribuir para um sistema de transporte mais seguro e eficiente. O usuário poderá aplicar seus conhecimentos e habilidades a outros domínios e aplicações que envolvem aprendizagem profunda e visão computacional, como robótica, saúde e segurança. O usuário poderá ingressar na crescente comunidade de entusiastas e profissionais de carros autônomos e participar de diversas competições e projetos.",
            // Bengali
            "বাংলা": "এই বইটি পড়ে ব্যবহারকারী অনেক সুবিধাও পাবেন। ব্যবহারকারী স্ব-ড্রাইভিং গাড়ি গবেষণা এবং উন্নয়নে বর্তমান অত্যাধুনিক এবং ভবিষ্যতের প্রবণতাগুলির প্রশংসা করতে সক্ষম হবে। ব্যবহারকারী স্ব-ড্রাইভিং গাড়িগুলির নৈতিক, সামাজিক এবং আইনি প্রভাবগুলি এবং কীভাবে তারা একটি নিরাপদ এবং আরও দক্ষ পরিবহন ব্যবস্থায় অবদান রাখতে পারে তা অন্বেষণ করতে সক্ষম হবে। ব্যবহারকারী তাদের জ্ঞান এবং দক্ষতা অন্যান্য ডোমেন এবং অ্যাপ্লিকেশনগুলিতে প্রয়োগ করতে সক্ষম হবে যা গভীর শিক্ষা এবং কম্পিউটার দৃষ্টি জড়িত, যেমন রোবোটিক্স, স্বাস্থ্যসেবা এবং নিরাপত্তা। ব্যবহারকারী স্ব-ড্রাইভিং কার উত্সাহী এবং পেশাদারদের ক্রমবর্ধমান সম্প্রদায়ের সাথে যোগ দিতে এবং বিভিন্ন প্রতিযোগিতা এবং প্রকল্পে অংশগ্রহণ করতে সক্ষম হবে।",
            // Arabic
            "عَرَبِيّ": "وسيحصل المستخدم أيضًا على العديد من الفوائد من قراءة هذا الكتاب. سيكون المستخدم قادرًا على تقدير أحدث الاتجاهات الحالية والمستقبلية في أبحاث وتطوير السيارات ذاتية القيادة. سيكون المستخدم قادرًا على استكشاف الآثار الأخلاقية والاجتماعية والقانونية للسيارات ذاتية القيادة، وكيف يمكن أن تساهم في نظام نقل أكثر أمانًا وكفاءة. سيكون المستخدم قادرًا على تطبيق معرفته ومهاراته على المجالات والتطبيقات الأخرى التي تتضمن التعلم العميق ورؤية الكمبيوتر، مثل الروبوتات والرعاية الصحية والأمن. وسيتمكن المستخدم من الانضمام إلى المجتمع المتنامي من عشاق ومحترفي السيارات ذاتية القيادة، والمشاركة في المسابقات والمشاريع المختلفة.",
            // Persian
            "فارسی": "کاربر نیز از خواندن این کتاب مزایای بسیاری را به دست خواهد آورد. کاربر می‌تواند از پیشرفت‌های فعلی و روندهای آینده در تحقیق و توسعه خودروهای خودران قدردانی کند. کاربر می‌تواند پیامدهای اخلاقی، اجتماعی و قانونی خودروهای خودران و اینکه چگونه می‌توانند به سیستم حمل‌ونقل ایمن‌تر و کارآمدتر کمک کنند را کشف کند. کاربر می‌تواند دانش و مهارت‌های خود را در حوزه‌ها و برنامه‌های کاربردی دیگری که شامل یادگیری عمیق و بینایی رایانه‌ای هستند، مانند رباتیک، مراقبت‌های بهداشتی و امنیت، به کار گیرد. کاربر می تواند به جامعه رو به رشد علاقه مندان و متخصصان خودروهای خودران بپیوندد و در مسابقات و پروژه های مختلف شرکت کند.",
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
        document.title = "MHA - " + applied_deep_learning_SDCs["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = applied_deep_learning_SDCs["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = applied_deep_learning_SDCs["TotalDescriptionAboutTheBook"][index][newLanguage];
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