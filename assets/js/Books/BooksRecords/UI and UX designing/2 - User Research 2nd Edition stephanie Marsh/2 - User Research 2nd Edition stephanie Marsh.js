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
var user_research = {
    "BookName": "User Research",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Introduction: why is user research so important ?",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "As this chapter name says, in this chapter the book will talk about some introduction staff like 'Why is user research?', 'Who is this book for?', 'Why do user research?', 'What will you learn in this book?' and a brief description of each chapter.",
                // German
                "Deutsch": "Wie der Name dieses Kapitels schon sagt, werden in diesem Kapitel einige einführende Themen behandelt, wie etwa „Warum gibt es Benutzerforschung?“, „Für wen ist dieses Buch?“, „Warum betreiben Sie Benutzerforschung?“, „Was werden Sie in diesem Buch lernen?“ und es gibt eine kurze Beschreibung jedes Kapitels.",
                // Chinese
                "中国人": "正如章节名称所示，本书在本章中会讨论一些介绍性的内容，例如“为什么要进行用户研究？”，“这本书适合谁阅读？”，“为什么要进行用户研究？”，“你将在本书中学到什么？”，并对每个章节进行简要描述。",
                // Russian
                "Русский": "Как следует из названия главы, в этой главе в книге будут обсуждаться некоторые вводные темы, такие как «Зачем проводятся исследования пользователей?», «Для кого предназначена эта книга?», «Зачем проводить исследования пользователей?», «Что вы узнаете в этой главе». книга?' и краткое описание каждой главы.",
                // French
                "Français": "Comme le nom de ce chapitre l'indique, dans ce chapitre, le livre parlera de certaines introductions telles que « Pourquoi la recherche sur les utilisateurs ? », « À qui s'adresse ce livre ? », « Pourquoi faire de la recherche sur les utilisateurs ? », « Qu'allez-vous apprendre dans ce livre ? livre?' et une brève description de chaque chapitre.",
                // Japanese
                "日本語": "この章の名前が示すように、この章では、「なぜユーザーリサーチを行うのか」、「この本は誰を対象にしているのか」、「なぜユーザーリサーチを行うのか」、「この本で何を学ぶのか」などの入門的な内容と、各章の簡単な説明について説明します。",
                // Korean
                "한국인": "이 장 이름에서 알 수 있듯이, 이 장에서는 '왜 사용자 연구를 하는가?', '이 책은 누구를 위한 책인가?', '왜 사용자 연구를 하는가?', '이 책에서 무엇을 배울 것인가?'와 같은 소개 직원에 대해 이야기할 것입니다. 책?' 그리고 각 장에 대한 간략한 설명.",
                // Spanish
                "Español": "Como lo indica el nombre de este capítulo, en este capítulo el libro hablará sobre algunas introducciones como '¿Por qué se realiza la investigación de usuarios?', '¿Para quién es este libro?', '¿Por qué se realiza la investigación de usuarios?', '¿Qué aprenderás en este ¿libro?' y una breve descripción de cada capítulo.",
                // Hindi
                "हिंदी": "जैसा कि इस अध्याय के नाम से पता चलता है, इस अध्याय में पुस्तक कुछ परिचयात्मक विषयों के बारे में बात करेगी जैसे 'उपयोगकर्ता अनुसंधान क्यों है?', 'यह पुस्तक किसके लिए है?', 'उपयोगकर्ता अनुसंधान क्यों करें?', 'आप इस पुस्तक में क्या सीखेंगे?' और प्रत्येक अध्याय का संक्षिप्त विवरण।",
                // Portuguese
                "Português": "Como o nome deste capítulo diz, neste capítulo o livro falará sobre algumas introduções como 'Por que é a pesquisa do usuário?', 'Para quem é este livro?', 'Por que a pesquisa do usuário?', 'O que você aprenderá neste livro?' e uma breve descrição de cada capítulo.",
                // Bengali
                "বাংলা": "এই অধ্যায়ের নাম অনুসারে, এই অধ্যায়ে বইটি কিছু পরিচিতি কর্মীদের সম্পর্কে কথা বলবে যেমন 'ব্যবহারকারী গবেষণা কেন?', 'এই বইটি কার জন্য?', 'কেন ব্যবহারকারী গবেষণা করবেন?', 'এতে আপনি কী শিখবেন? বই?' এবং প্রতিটি অধ্যায়ের একটি সংক্ষিপ্ত বিবরণ।",
                // Arabic
                "عَرَبِيّ": "كما يشير اسم هذا الفصل، سيتحدث الكتاب في هذا الفصل عن بعض عناصر المقدمة مثل 'لماذا يتم البحث عن المستخدمين؟'، 'لمن هذا الكتاب؟'، 'لماذا يتم البحث عن المستخدمين؟'، 'ماذا ستتعلم في هذا الكتاب؟' كتاب؟' ووصف مختصر لكل فصل.",
                // Persian
                "فارسی": "همانطور که از نام این فصل می‌گوید، در این فصل کتاب در مورد برخی از کارکنان مقدماتی مانند 'چرا تحقیق کاربر است؟'، 'این کتاب برای چه کسی است؟'، 'چرا کاربر تحقیق می‌کنید؟'، 'در این مورد چه خواهید آموخت؟' صحبت خواهد کرد. کتاب؟' و شرح مختصری از هر فصل.",
            },
        },
        // 2
        {
            "ChapterName": "Planning your user research",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Planning your user research' is about 'When is the right time to do user research?', 'Be clear what your research is about' and then 'planning for our user research'. It mentioned some notes like scheduling, planning for the location of the research, option of remote research, the importance of pilot testing, inviting people to observe research sessions, recruiting people to do the research, planning for analysis and sharing of work, and planning for user research when working agile or lean.",
                // German
                "Deutsch": "Im Kapitel „Planen Ihrer Benutzerforschung“ geht es um „Wann ist der richtige Zeitpunkt für Benutzerforschung?“, „Seien Sie sich im Klaren, worum es bei Ihrer Forschung geht“ und dann um „Planung unserer Benutzerforschung“. Es enthält einige Hinweise wie Zeitplanung, Planung des Forschungsstandorts, Möglichkeit der Fernforschung, Bedeutung von Pilottests, Einladung von Personen zur Beobachtung von Forschungssitzungen, Rekrutierung von Personen zur Durchführung der Forschung, Planung der Analyse und Arbeitsteilung sowie Planung der Benutzerforschung bei agilem oder schlankem Arbeiten.",
                // Chinese
                "中国人": "“规划您的用户研究”一章是关于“什么时候是进行用户研究的最佳时机？”，“明确您的研究内容”以及“规划我们的用户研究”。它提到了一些注意事项，例如时间安排、规划研究地点、远程研究选项、试点测试的重要性、邀请人们观察研究会议、招募人员进行研究、规划分析和工作共享以及在敏捷或精益工作时规划用户研究。",
                // Russian
                "Русский": "Глава «Планирование исследования пользователей» посвящена вопросам «Когда лучше всего проводить исследование пользователей?», «Четко определите суть вашего исследования», а затем «Планированию исследования пользователей». В нем упоминались некоторые примечания, такие как планирование, планирование места проведения исследования, возможность дистанционного исследования, важность пилотного тестирования, приглашение людей наблюдать за исследовательскими сессиями, набор людей для проведения исследования, планирование анализа и распределения работы, а также планирование. для исследования пользователей при гибкой или экономичной работе.",
                // French
                "Français": "Le chapitre « Planifier votre recherche d'utilisateurs » traite de « Quel est le bon moment pour effectuer une recherche d'utilisateurs ? », « Soyez clair sur le sujet de votre recherche », puis « Planifiez notre recherche d'utilisateurs ». Il mentionnait certaines remarques telles que le calendrier, la planification du lieu de la recherche, l'option de recherche à distance, l'importance des tests pilotes, l'invitation de personnes à observer des séances de recherche, le recrutement de personnes pour effectuer la recherche, la planification de l'analyse et du partage du travail, et la planification. pour la recherche d'utilisateurs lorsque vous travaillez en Agile ou Lean.",
                // Japanese
                "日本語": "「ユーザー リサーチの計画」の章では、「ユーザー リサーチを行うのに適切な時期はいつなのか」、「リサーチの内容を明確にする」、そして「ユーザー リサーチの計画」について説明しています。スケジュール、リサーチの場所の計画、リモート リサーチのオプション、パイロット テストの重要性、リサーチ セッションの観察者の招待、リサーチを行う人の募集、分析の計画と作業の共有、アジャイルまたはリーンで作業する場合のユーザー リサーチの計画など、いくつかの注意事項が述べられています。",
                // Korean
                "한국인": "'사용자 연구 계획' 장에서는 '사용자 연구를 수행하기에 적절한 시기는 언제인가?', '연구 내용을 명확히 하세요', 그리고 '사용자 연구 계획'에 대해 설명합니다. 일정, 연구 위치 계획, 원격 연구 옵션, 파일럿 테스트의 중요성, 연구 세션을 관찰하도록 사람들 초대, 연구를 수행할 사람들 모집, 작업 분석 및 공유 계획, 계획과 같은 몇 가지 참고 사항이 언급되었습니다. 민첩하게 또는 린하게 작업할 때 사용자 조사를 위해.",
                // Spanish
                "Español": "El capítulo 'Planificación de su investigación de usuarios' trata sobre '¿Cuándo es el momento adecuado para realizar una investigación de usuarios?', 'Deje claro de qué se trata su investigación' y luego 'planificación de nuestra investigación de usuarios'. Mencionó algunas notas como programación, planificación de la ubicación de la investigación, opción de investigación remota, la importancia de las pruebas piloto, invitar a personas a observar sesiones de investigación, reclutar personas para realizar la investigación, planificar el análisis y compartir el trabajo, y planificar para la investigación de usuarios cuando se trabaja de forma ágil o eficiente.",
                // Hindi
                "हिंदी": "'अपने उपयोगकर्ता शोध की योजना बनाना' अध्याय 'उपयोगकर्ता शोध करने का सही समय कब है?', 'अपने शोध के बारे में स्पष्ट रहें' और फिर 'हमारे उपयोगकर्ता शोध के लिए योजना बनाना' के बारे में है। इसमें शेड्यूलिंग, शोध के स्थान की योजना, दूरस्थ शोध का विकल्प, पायलट परीक्षण का महत्व, शोध सत्रों का निरीक्षण करने के लिए लोगों को आमंत्रित करना, शोध करने के लिए लोगों की भर्ती करना, विश्लेषण और काम को साझा करने की योजना बनाना, और एजाइल या लीन काम करते समय उपयोगकर्ता शोध की योजना बनाना जैसे कुछ नोट्स का उल्लेख किया गया है।",
                // Portuguese
                "Português": "O capítulo 'Planejando sua pesquisa de usuário' é sobre 'Quando é o momento certo para fazer pesquisa de usuário?', 'Seja claro sobre o que se trata sua pesquisa' e depois 'planejando nossa pesquisa de usuário'. Mencionou algumas notas como agendamento, planejamento do local da pesquisa, opção de pesquisa remota, importância do teste piloto, convite de pessoas para observar sessões de pesquisa, recrutamento de pessoas para fazer a pesquisa, planejamento para análise e compartilhamento de trabalho e planejamento para pesquisas de usuários ao trabalhar de forma ágil ou enxuta.",
                // Bengali
                "বাংলা": "'আপনার ব্যবহারকারীর গবেষণার পরিকল্পনা করা' অধ্যায়টি 'ব্যবহারকারীর গবেষণা করার সঠিক সময় কখন?', 'আপনার গবেষণা কী বিষয়ে তা পরিষ্কার করুন' এবং তারপরে 'আমাদের ব্যবহারকারীর গবেষণার জন্য পরিকল্পনা করা'। এটি কিছু নোট উল্লেখ করেছে যেমন সময়সূচী, গবেষণার অবস্থানের জন্য পরিকল্পনা, দূরবর্তী গবেষণার বিকল্প, পাইলট পরীক্ষার গুরুত্ব, গবেষণা অধিবেশন পর্যবেক্ষণ করার জন্য লোকেদের আমন্ত্রণ জানানো, গবেষণা করার জন্য লোক নিয়োগ করা, বিশ্লেষণের পরিকল্পনা এবং কাজের ভাগাভাগি এবং পরিকল্পনা। চটপটে বা চর্বিহীন কাজ করার সময় ব্যবহারকারী গবেষণার জন্য।",
                // Arabic
                "عَرَبِيّ": "يدور الفصل 'التخطيط لأبحاث المستخدم' حول 'متى يكون الوقت المناسب لإجراء بحث المستخدم؟'، و'كن واضحًا حول موضوع بحثك'، ثم 'التخطيط لأبحاث المستخدم لدينا'. وذكرت بعض الملاحظات مثل الجدولة، والتخطيط لموقع البحث، وخيار البحث عن بعد، وأهمية الاختبار التجريبي، ودعوة الناس لمراقبة جلسات البحث، وتجنيد الأشخاص للقيام بالبحث، والتخطيط للتحليل ومشاركة العمل، والتخطيط لأبحاث المستخدم عند العمل رشيقة أو العجاف.",
                // Persian
                "فارسی": "فصل 'برنامه ریزی برای تحقیقات کاربر خود' درباره 'زمان مناسب برای انجام تحقیقات کاربر چه زمانی است؟'، 'روشن باشید که تحقیق شما در مورد چیست' و سپس 'برنامه ریزی برای تحقیقات کاربر ما'. نکاتی از جمله زمان‌بندی، برنامه‌ریزی برای مکان تحقیق، گزینه تحقیق از راه دور، اهمیت آزمایش آزمایشی، دعوت از افراد برای مشاهده جلسات پژوهشی، جذب افراد برای انجام پژوهش، برنامه‌ریزی برای تجزیه و تحلیل و اشتراک کار و برنامه‌ریزی ذکر شده است. برای تحقیق کاربر هنگام کار چابک یا لاغر.",
            },
        },
        // 3
        {
            "ChapterName": "Best practice in user research: who, what, why and how",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Best practice in user research' is mainly about 'Who should be involved in your research', 'How do you get the right participants?' and its notes, 'Incentivizing people to take part' and its case studies, 'Understanding the importance of observation' and a case study about the difference between behavior and opinion, 'Asking the right kind of questions' and its rules and side notes, and 'Accessibility and inclusion' and explaining the automated accessibility testing, manual accessibility testing, 'Getting specialists to audit your work', 'Usability testing with assistive technologies', and 'Inclusion'.",
                // German
                "Deutsch": "Im Kapitel „Best Practice in der Benutzerforschung“ geht es hauptsächlich um die Themen „Wer sollte an Ihrer Forschung beteiligt sein?“, „Wie gewinnen Sie die richtigen Teilnehmer?“ und die dazugehörigen Anmerkungen, „Menschen zur Teilnahme motivieren“ und die dazugehörigen Fallstudien, „Die Bedeutung der Beobachtung verstehen“ und eine Fallstudie über den Unterschied zwischen Verhalten und Meinung, „Die richtigen Fragen stellen“ und die dazugehörigen Regeln und Randnotizen sowie „Zugänglichkeit und Inklusion“ und die Erläuterung der automatisierten Zugänglichkeitstests, der manuellen Zugänglichkeitstests, „Ihre Arbeit von Spezialisten prüfen lassen“, „Usability-Tests mit unterstützenden Technologien“ und „Inklusion“.",
                // Chinese
                "中国人": "“用户研究的最佳实践”一章主要涉及“谁应该参与您的研究”，“如何获得合适的参与者？”及其注释，“激励人们参与”及其案例研究，“理解观察的重要性”和关于行为和观点之间差异的案例研究，“提出正确的问题”及其规则和附注，“可访问性和包容性”并解释自动可访问性测试，手动可访问性测试，“让专家审核您的工作”，“使用辅助技术进行可用性测试”和“包容性”。",
                // Russian
                "Русский": "Глава «Лучшая практика исследования пользователей» в основном посвящена темам «Кто должен участвовать в вашем исследовании», «Как привлечь нужных участников?» и его примечания «Стимулирование людей к участию», а также тематические исследования «Понимание важности наблюдения» и тематическое исследование о разнице между поведением и мнением, «Задавать правильные вопросы», а также его правила и примечания, и «Доступность и инклюзивность», а также объяснение автоматического тестирования доступности, ручного тестирования доступности, «Привлечение специалистов для проверки вашей работы», «Тестирование юзабилити с помощью ассистивных технологий» и «Инклюзивность».",
                // French
                "Français": "Le chapitre « Meilleures pratiques en matière de recherche sur les utilisateurs » porte principalement sur « Qui devrait être impliqué dans votre recherche », « Comment recruter les bons participants ? » et ses notes, « Inciter les gens à participer » et ses études de cas, « Comprendre l'importance de l'observation » et une étude de cas sur la différence entre comportement et opinion, « Poser le bon type de questions » et ses règles et notes complémentaires, et « Accessibilité et inclusion » et expliquant les tests d'accessibilité automatisés, les tests d'accessibilité manuels, « Faire appel à des spécialistes pour auditer votre travail », « Tests d'utilisabilité avec des technologies d'assistance » et « Inclusion ».",
                // Japanese
                "日本語": "「ユーザー調査のベスト プラクティス」の章では、主に「調査に誰が関与すべきか」、「適切な参加者をどのように集めるか」とその注釈、「参加を促す方法」とそのケース スタディ、「観察の重要性を理解する」と行動と意見の違いに関するケース スタディ、「適切な種類の質問をする」とそのルールと補足、「アクセシビリティとインクルージョン」と自動アクセシビリティ テスト、手動アクセシビリティ テストの説明、「専門家に作業を監査してもらう」、「支援技術を使用したユーザビリティ テスト」、および「インクルージョン」について説明します。",
                // Korean
                "한국인": "'사용자 연구의 모범 사례' 장은 주로 '연구에 누가 참여해야 하는가', '올바른 참가자를 어떻게 확보하는가?'에 관한 것입니다. 그리고 그 노트 '사람들의 참여에 대한 인센티브'와 사례 연구 '관찰의 중요성 이해', 행동과 의견의 차이에 대한 사례 연구, '올바른 종류의 질문하기'와 규칙 및 참고 사항, '접근성과 포용성'을 설명하고 자동화된 접근성 테스트, 수동 접근성 테스트, '전문가의 작업 감사', '보조 기술을 사용한 사용성 테스트', '포용성'에 대해 설명합니다.",
                // Spanish
                "Español": "El capítulo 'Mejores prácticas en la investigación de usuarios' trata principalmente sobre '¿Quién debería participar en su investigación?', '¿Cómo conseguir los participantes adecuados?' y sus notas, 'Incentivar a las personas a participar' y sus estudios de caso, 'Comprender la importancia de la observación' y un estudio de caso sobre la diferencia entre comportamiento y opinión, 'Hacer el tipo correcto de preguntas' y sus reglas y notas al margen, y 'Accesibilidad e inclusión' y explicando las pruebas de accesibilidad automatizadas, las pruebas de accesibilidad manuales, 'Conseguir que especialistas auditen su trabajo', 'Pruebas de usabilidad con tecnologías de asistencia' e 'Inclusión'.",
                // Hindi
                "हिंदी": "'उपयोगकर्ता अनुसंधान में सर्वोत्तम अभ्यास' अध्याय मुख्य रूप से 'आपके अनुसंधान में कौन शामिल होना चाहिए', 'आप सही प्रतिभागियों को कैसे प्राप्त करते हैं?' और इसके नोट्स, 'लोगों को भाग लेने के लिए प्रोत्साहित करना' और इसके केस अध्ययन, 'अवलोकन के महत्व को समझना' और व्यवहार और राय के बीच अंतर के बारे में एक केस अध्ययन, 'सही प्रकार के प्रश्न पूछना' और इसके नियम और साइड नोट्स, और 'पहुंच और समावेशन' और स्वचालित पहुंच परीक्षण, मैनुअल पहुंच परीक्षण, 'विशेषज्ञों से अपने काम का ऑडिट करवाना', 'सहायक प्रौद्योगिकियों के साथ प्रयोज्यता परीक्षण' और 'समावेश' के बारे में है।",
                // Portuguese
                "Português": "O capítulo 'Melhores práticas em pesquisa de usuários' é principalmente sobre 'Quem deve estar envolvido em sua pesquisa', 'Como você consegue os participantes certos?' e as suas notas, «Incentivar as pessoas a participar» e os seus estudos de caso, «Compreender a importância da observação» e um estudo de caso sobre a diferença entre comportamento e opinião, «Fazer o tipo certo de perguntas» e as suas regras e notas laterais, e 'Acessibilidade e inclusão' e explicando os testes automatizados de acessibilidade, testes manuais de acessibilidade, 'Conseguir especialistas para auditar seu trabalho', 'Testes de usabilidade com tecnologias assistivas' e 'Inclusão'.",
                // Bengali
                "বাংলা": "'ব্যবহারকারী গবেষণায় সর্বোত্তম অনুশীলন' অধ্যায়টি মূলত 'আপনার গবেষণায় কাদের জড়িত হওয়া উচিত', 'আপনি কীভাবে সঠিক অংশগ্রহণকারীদের পাবেন?' এবং এর নোট, 'জনগণকে অংশ নিতে উৎসাহিত করা' এবং এর কেস স্টাডি, 'পর্যবেক্ষণের গুরুত্ব বোঝা' এবং আচরণ এবং মতামতের মধ্যে পার্থক্য সম্পর্কে একটি কেস স্টাডি, 'সঠিক ধরণের প্রশ্ন জিজ্ঞাসা করা' এবং এর নিয়ম এবং পার্শ্ব নোট, এবং 'অ্যাক্সেসিবিলিটি এবং ইনক্লুশন' এবং স্বয়ংক্রিয় অ্যাক্সেসিবিলিটি টেস্টিং, ম্যানুয়াল অ্যাক্সেসিবিলিটি টেস্টিং, 'আপনার কাজের অডিট করার জন্য বিশেষজ্ঞদের নেওয়া', 'সহকারী প্রযুক্তির সাথে ব্যবহারযোগ্যতা পরীক্ষা', এবং 'অন্তর্ভুক্তি' ব্যাখ্যা করা।",
                // Arabic
                "عَرَبِيّ": "يدور الفصل 'أفضل الممارسات في أبحاث المستخدمين' بشكل أساسي حول 'من يجب أن يشارك في بحثك'، و'كيف يمكنك الحصول على المشاركين المناسبين؟' وملاحظاتها 'تحفيز الناس على المشاركة' ودراسات الحالة الخاصة بها، 'فهم أهمية الملاحظة' ودراسة حالة حول الفرق بين السلوك والرأي، 'طرح النوع الصحيح من الأسئلة' وقواعدها وملاحظاتها الجانبية، و'إمكانية الوصول والشمول' وشرح اختبار إمكانية الوصول الآلي، واختبار إمكانية الوصول اليدوي، و'الحصول على متخصصين لتدقيق عملك'، و'اختبار قابلية الاستخدام باستخدام التقنيات المساعدة'، و'الشمول'.",
                // Persian
                "فارسی": "فصل 'بهترین عملکرد در تحقیقات کاربر' عمدتاً درباره 'چه کسی باید در تحقیق شما مشارکت داشته باشد'، 'چگونه شرکت کنندگان مناسب را بدست آورید؟' است. و یادداشت های آن، 'تشویق مردم برای مشارکت' و مطالعات موردی آن، 'درک اهمیت مشاهده' و مطالعه موردی در مورد تفاوت بین رفتار و عقیده، 'پرسیدن نوع صحیح سوالات' و قوانین و نکات جانبی آن، و «دسترس‌پذیری و گنجاندن» و توضیح تست‌های دسترسی خودکار، آزمایش دسترسی دستی، «به‌کارگیری متخصصان برای ممیزی کار شما»، «تست قابلیت استفاده با فناوری‌های کمکی» و «شامل».",
            },
        },
        // 4
        {
            "ChapterName": "Getting the legal and ethical stuff right",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Getting the legal and ethical stuff right' is about why you should not skip this chapter, 'What is data protection?', 'What is personal data?', 'What is a data processor?', 'What is a data controller?', 'Practical things to do', 'Informed consent', and information which the user should be informed like 'Who is doing the research.', 'The purpose of the research.', 'What data you’re collecting.', 'What will happen during the research.', 'How long their data will be kept.', 'That the session is being recorded.', 'Ethics in user research', and 'Protecting people’s privacy when you are sharing research results'.",
                // German
                "Deutsch": "Im Kapitel „Die rechtlichen und ethischen Aspekte richtig verstehen“ geht es darum, warum Sie dieses Kapitel nicht überspringen sollten: „Was ist Datenschutz?“, „Was sind personenbezogene Daten?“, „Was ist ein Datenverarbeiter?“, „Was ist ein Datenverantwortlicher?“, „Praktische Vorgehensweise“, „Informierte Einwilligung“ und Informationen, über die der Benutzer informiert werden sollte, z. B. „Wer führt die Forschung durch?“, „Der Zweck der Forschung“, „Welche Daten Sie sammeln“, „Was passiert während der Forschung?“, „Wie lange werden die Daten aufbewahrt?“, „Dass die Sitzung aufgezeichnet wird“, „Ethik in der Benutzerforschung“ und „Schutz der Privatsphäre von Personen beim Teilen von Forschungsergebnissen“.",
                // Chinese
                "中国人": "“正确理解法律和道德问题”一章介绍了为什么不应该跳过本章，“什么是数据保护？”，“什么是个人数据？”，“什么是数据处理者？”，“什么是数据控制者？”，“实际要做的事情”，“知情同意”，以及应该告知用户的信息，如“谁在做研究”，“研究的目的”，“你收集什么数据”，“研究期间会发生什么”，“他们的数据将被保存多长时间”，“会话正在被记录”，“用户研究中的道德问题”和“在分享研究结果时保护人们的隐私”。",
                // Russian
                "Русский": "В главе «Правильные юридические и этические вопросы» рассказывается о том, почему не следует пропускать эту главу: «Что такое защита данных?», «Что такое персональные данные?», «Что такое обработчик данных?», «Что такое контролер данных?», «Практические действия», «Информированное согласие» и информация, которую следует сообщить пользователю, например «Кто проводит исследование», «Цель исследования», «Какие данные вы предоставляете?» сбор.», «Что произойдет во время исследования», «Как долго будут храниться их данные», «Что сеанс записывается», «Этика исследования пользователей» и «Защита конфиденциальности людей, когда вы обмен результатами исследований».",
                // French
                "Français": "Le chapitre « Bien comprendre les aspects juridiques et éthiques » explique pourquoi vous ne devriez pas sauter ce chapitre, « Qu'est-ce que la protection des données ? », « Qu'est-ce que les données personnelles ? », « Qu'est-ce qu'un sous-traitant ? », « Qu'est-ce qu'un sous-traitant ? responsable du traitement des données ?', 'Choses pratiques à faire', 'Consentement éclairé' et informations dont l'utilisateur doit être informé comme 'Qui effectue la recherche.', 'Le but de la recherche.', 'Quelles données vous êtes collecte. », « Que se passera-t-il pendant la recherche. », « Combien de temps leurs données seront conservées. », « Que la session est enregistrée. », « Éthique dans la recherche sur les utilisateurs » et « Protéger la vie privée des personnes lorsque vous êtes partager les résultats de la recherche ».",
                // Japanese
                "日本語": "「法的および倫理的な問題を正しく理解する」の章では、この章を飛ばしてはいけない理由、「データ保護とは何か」、「個人データとは何か」、「データ処理者とは何か」、「データ管理者とは何か」、「実践すべきこと」、「インフォームドコンセント」、および「誰が調査を行っているのか」、「調査の目的」、「収集するデータは何なのか」、「調査中に何が起こるのか」、「ユーザーのデータがどれくらいの期間保持されるのか」、「セッションが記録されていること」、「ユーザー調査における倫理」、「調査結果を共有する際のプライバシーの保護」など、ユーザーに通知する必要がある情報について説明しています。",
                // Korean
                "한국인": "'법적, 윤리적 사항 올바르게 하기' 장에서는 '데이터 보호란 무엇입니까?', '개인 데이터란 무엇입니까?', '데이터 처리자란 무엇입니까?', '데이터 처리자는 무엇입니까?', '데이터 보호란 무엇입니까?', '데이터 보호란 무엇입니까?' 이 장을 건너뛰어서는 안 되는 이유에 대해 설명합니다. 데이터 관리자는?', '실천적으로 해야 할 일', '사전 동의' 및 '연구를 수행하는 사람', '연구의 목적', '어떤 데이터인지' 등 사용자에게 알려야 하는 정보입니다. 수집.', '연구 중에 어떤 일이 일어날 것인가.', '데이터가 얼마나 오래 보관될 것인가.', '세션이 녹화되고 있다는 것.', '사용자 연구의 윤리', '개인정보 보호 연구결과를 공유한다'.",
                // Spanish
                "Español": "El capítulo 'Acertar con los aspectos legales y éticos' trata sobre por qué no debería saltarse este capítulo: '¿Qué es la protección de datos?', '¿Qué son los datos personales?', '¿Qué es un procesador de datos?', '¿Qué es un ¿responsable del tratamiento de datos?', 'Cosas prácticas que hacer', 'Consentimiento informado', e información que el usuario debe ser informado como 'Quién está haciendo la investigación', 'El propósito de la investigación', '¿Qué datos estás recopilando.', 'Qué pasará durante la investigación.', 'Durante cuánto tiempo se conservarán sus datos.', 'Que se está grabando la sesión.', 'Ética en la investigación de usuarios', y 'Proteger la privacidad de las personas cuando se está compartir los resultados de la investigación'.",
                // Hindi
                "हिंदी": "'कानूनी और नैतिक चीजों को सही तरीके से समझना' अध्याय इस बारे में है कि आपको इस अध्याय को क्यों नहीं छोड़ना चाहिए, 'डेटा सुरक्षा क्या है?', 'व्यक्तिगत डेटा क्या है?', 'डेटा प्रोसेसर क्या है?', 'डेटा नियंत्रक क्या है?', 'व्यावहारिक चीजें करने के लिए', 'सूचित सहमति', और जानकारी जो उपयोगकर्ता को बताई जानी चाहिए जैसे 'शोध कौन कर रहा है।', 'शोध का उद्देश्य।', 'आप कौन सा डेटा एकत्र कर रहे हैं।', 'शोध के दौरान क्या होगा।', 'उनका डेटा कब तक रखा जाएगा।', 'सत्र रिकॉर्ड किया जा रहा है।', 'उपयोगकर्ता शोध में नैतिकता', और 'शोध परिणाम साझा करते समय लोगों की गोपनीयता की रक्षा करना'।",
                // Portuguese
                "Português": "O capítulo 'Acertar as questões legais e éticas' explica por que você não deve pular este capítulo, 'O que é proteção de dados?', 'O que são dados pessoais?', 'O que é um processador de dados?', 'O que é um controlador de dados?', 'Coisas práticas a fazer', 'Consentimento informado' e informações que o usuário deve ser informado, como 'Quem está fazendo a pesquisa.', 'O objetivo da pesquisa.', 'Quais dados você está? coletando.', 'O que acontecerá durante a pesquisa.', 'Por quanto tempo seus dados serão mantidos.', 'Que a sessão está sendo gravada.', 'Ética na pesquisa do usuário' e 'Protegendo a privacidade das pessoas quando você estiver partilha de resultados de investigação».",
                // Bengali
                "বাংলা": "'আইনি এবং নৈতিক বিষয়গুলি সঠিকভাবে পাওয়া' অধ্যায়টি আপনার এই অধ্যায়টি কেন এড়িয়ে যাওয়া উচিত নয়, 'ডেটা সুরক্ষা কী?', 'ব্যক্তিগত ডেটা কী?', 'ডেটা প্রসেসর কী?', 'একটি কী?' ডেটা কন্ট্রোলার?', 'ব্যবহারিক জিনিসগুলি করতে হবে', 'অবহিত সম্মতি', এবং তথ্য যা ব্যবহারকারীকে জানানো উচিত যেমন 'কে গবেষণা করছে।', 'গবেষণার উদ্দেশ্য।', 'আপনি কোন ডেটা করছেন সংগ্রহ করা।', 'গবেষণার সময় কী ঘটবে।', 'তাদের ডেটা কতক্ষণ রাখা হবে।', 'সেশনটি রেকর্ড করা হচ্ছে।', 'ব্যবহারকারীর গবেষণায় নৈতিকতা', এবং 'আপনি যখন আছেন তখন মানুষের গোপনীয়তা রক্ষা করা গবেষণার ফলাফল শেয়ার করা'।",
                // Arabic
                "عَرَبِيّ": "يدور الفصل 'تصحيح الأمور القانونية والأخلاقية' حول سبب عدم تخطي هذا الفصل، 'ما هي حماية البيانات؟'، 'ما هي البيانات الشخصية؟'، 'ما هو معالج البيانات؟'، 'ما هو 'مراقب البيانات؟'، 'الأشياء العملية التي يجب القيام بها'، 'الموافقة المستنيرة'، والمعلومات التي يجب إعلام المستخدم بها مثل 'من يقوم بالبحث'. التجميع.'، 'ماذا سيحدث أثناء البحث.'، 'كم من الوقت سيتم الاحتفاظ ببياناتهم.'، 'أن الجلسة قيد التسجيل.'، 'الأخلاقيات في بحث المستخدم'، و'حماية خصوصية الأشخاص عندما تكون مشاركة نتائج الأبحاث'.",
                // Persian
                "فارسی": "فصل «دریافت مطالب قانونی و اخلاقی درست» درباره این است که چرا نباید از این فصل، «محافظت از داده‌ها چیست؟»، «داده‌های شخصی چیست؟»، «پردازنده داده چیست؟»، «محافظت از داده‌ها چیست؟» کنترل کننده داده؟، «کارهای عملی برای انجام»، «رضایت آگاهانه»، و اطلاعاتی که کاربر باید از آنها مطلع شود، مانند «چه کسی تحقیق را انجام می دهد.»، «هدف تحقیق».، «چه داده هایی دارید. جمع آوری.»، «در طول تحقیق چه اتفاقی خواهد افتاد.»، «اطلاعات آنها چه مدت نگهداری می شود.»، «این جلسه در حال ضبط است.»، «اخلاق در تحقیقات کاربر»، و «حفاظت از حریم خصوصی افراد در زمانی که شما هستید. به اشتراک گذاری نتایج تحقیقات.",
            },
        },
        // 5
        {
            "ChapterName": "Setting up for success",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter talks about ReOps which stands for Research Operations that handles all research staff about the product. Then, It is talked about Data Management and its related topics like Naming conventions, Example of shared drive folder and file names, Helping your colleagues keep track, and Participant data management. After that, the next topic is Communicating with participants, Admin, and Tools and infrastructure.",
                // German
                "Deutsch": "In diesem Kapitel geht es um ReOps, was für Research Operations steht und alle Forschungsmitarbeiter mit dem Produkt betraut. Anschließend geht es um Datenmanagement und damit verbundene Themen wie Namenskonventionen, Beispiele für Ordner- und Dateinamen auf freigegebenen Laufwerken, wie Sie Ihren Kollegen den Überblick behalten und Teilnehmerdatenmanagement helfen. Danach geht es um die Kommunikation mit Teilnehmern, Admin sowie Tools und Infrastruktur.",
                // Chinese
                "中国人": "本章讨论了 ReOps，即研究运营，负责处理有关产品的所有研究人员。然后，讨论了数据管理及其相关主题，如命名约定、共享驱动器文件夹和文件名的示例、帮助您的同事跟踪以及参与者数据管理。之后，下一个主题是与参与者、管理员以及工具和基础设施进行沟通。",
                // Russian
                "Русский": "В этой главе рассказывается о ReOps, что означает исследовательские операции, которые касаются продукта всем исследовательским персоналом. Затем речь идет об управлении данными и связанных с ним темах, таких как соглашения об именах, пример имен папок и файлов на общем диске, помощь вашим коллегам в отслеживании и управление данными участников. После этого следующая тема — «Общение с участниками, администратором, инструментами и инфраструктурой».",
                // French
                "Français": "Ce chapitre parle de ReOps qui signifie Research Operations qui gère tout le personnel de recherche sur le produit. Ensuite, il est question de la gestion des données et de ses sujets connexes tels que les conventions de dénomination, les exemples de noms de dossiers et de fichiers du lecteur partagé, l'aide à vos collègues pour le suivi et la gestion des données des participants. Après cela, le sujet suivant est la communication avec les participants, l'administrateur, ainsi que les outils et l'infrastructure.",
                // Japanese
                "日本語": "この章では、製品に関するすべての研究スタッフを管理するReOps（リサーチオペレーション）について説明します。次に、命名規則、共有ドライブのフォルダとファイル名の例、同僚の追跡支援、参加者データの管理など、データ管理とそれに関連するトピックについて説明します。その後、参加者とのコミュニケーション、管理者、ツールとインフラストラクチャについて説明します。",
                // Korean
                "한국인": "이 장에서는 제품에 대한 모든 연구원을 처리하는 Research Operations(연구 운영)를 의미하는 ReOps에 대해 설명합니다. 그런 다음 데이터 관리 및 명명 규칙, 공유 드라이브 폴더 및 파일 이름의 예, 동료의 추적 지원, 참가자 데이터 관리와 같은 관련 주제에 대해 설명합니다. 그 후 다음 주제는 참가자, 관리자, 도구 및 인프라와의 통신입니다.",
                // Spanish
                "Español": "Este capítulo habla de ReOps, que significa Operaciones de investigación, que se encarga de todo el personal de investigación sobre el producto. Luego, se habla sobre la gestión de datos y sus temas relacionados, como convenciones de nomenclatura, ejemplos de nombres de archivos y carpetas de unidades compartidas, cómo ayudar a sus colegas a realizar un seguimiento y la gestión de datos de los participantes. Después de eso, el siguiente tema es Comunicación con los participantes, el administrador y las herramientas e infraestructura.",
                // Hindi
                "हिंदी": "यह अध्याय ReOps के बारे में बात करता है जिसका मतलब है रिसर्च ऑपरेशन जो उत्पाद के बारे में सभी शोध कर्मचारियों को संभालता है। फिर, इसमें डेटा प्रबंधन और इसके संबंधित विषयों जैसे नामकरण सम्मेलनों, साझा ड्राइव फ़ोल्डर और फ़ाइल नामों का उदाहरण, अपने सहकर्मियों को ट्रैक रखने में मदद करना और प्रतिभागी डेटा प्रबंधन के बारे में बात की गई है। उसके बाद, अगला विषय प्रतिभागियों, व्यवस्थापक और उपकरण और बुनियादी ढांचे के साथ संवाद करना है।",
                // Portuguese
                "Português": "Este capítulo fala sobre ReOps, que significa Operações de Pesquisa, que trata de toda a equipe de pesquisa sobre o produto. Em seguida, é falado sobre gerenciamento de dados e seus tópicos relacionados, como convenções de nomenclatura, exemplo de pasta de unidade compartilhada e nomes de arquivos, ajudando seus colegas a manter o controle e gerenciamento de dados dos participantes. Depois disso, o próximo tópico é Comunicação com participantes, Administrador e Ferramentas e infraestrutura.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ReOps সম্পর্কে কথা বলে যা গবেষণা অপারেশনগুলির জন্য দাঁড়িয়েছে যা পণ্য সম্পর্কে সমস্ত গবেষণা কর্মীদের পরিচালনা করে। তারপরে, এটি ডেটা ম্যানেজমেন্ট এবং এর সাথে সম্পর্কিত বিষয়গুলি যেমন নামকরণের প্রথা, শেয়ার্ড ড্রাইভ ফোল্ডার এবং ফাইলের নামগুলির উদাহরণ, আপনার সহকর্মীদের ট্র্যাক রাখতে সাহায্য করা এবং অংশগ্রহণকারী ডেটা পরিচালনা সম্পর্কে কথা বলা হয়। এর পরে, পরবর্তী বিষয় হল অংশগ্রহণকারীদের সাথে যোগাযোগ করা, অ্যাডমিন, এবং টুলস এবং অবকাঠামো।",
                // Arabic
                "عَرَبِيّ": "يتحدث هذا الفصل عن ReOps والتي تعني عمليات البحث التي تتعامل مع جميع موظفي البحث حول المنتج. بعد ذلك، يتم الحديث عن إدارة البيانات والموضوعات ذات الصلة بها مثل اصطلاحات التسمية، ومثال على مجلدات محرك الأقراص المشتركة وأسماء الملفات، ومساعدة زملائك على التتبع، وإدارة بيانات المشاركين. بعد ذلك، الموضوع التالي هو التواصل مع المشاركين والمسؤول والأدوات والبنية التحتية.",
                // Persian
                "فارسی": "این فصل در مورد ReOps صحبت می کند که مخفف عبارت Research Operations است که تمام کارکنان تحقیقاتی را در مورد محصول مدیریت می کند. سپس، در مورد مدیریت داده ها و موضوعات مرتبط با آن مانند قراردادهای نامگذاری، نمونه ای از پوشه ها و نام فایل ها درایو مشترک، کمک به همکاران خود در پیگیری و مدیریت داده های شرکت کننده صحبت می شود. بعد از آن موضوع بعدی ارتباط با شرکت کنندگان، ادمین و ابزار و زیرساخت است.",
            },
        },
        // 6
        {
            "ChapterName": "Managing user research logistics: agencies, facilities and contracts",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Managing user research logistics' mainly talks about Logistics, Safety first, Appearance and perception when doing face-to-face research, Be aware of cultural differences, Doing user research with children, Hiring agencies, choosing facilities, signing contracts, and From Very small budget to Large budget.",
                // German
                "Deutsch": "Im Kapitel „Logistik für Benutzerforschung verwalten“ geht es hauptsächlich um Logistik, Sicherheit geht vor, Auftreten und Wahrnehmung bei der persönlichen Forschung, kulturelle Unterschiede beachten, Benutzerforschung mit Kindern durchführen, Agenturen beauftragen, Einrichtungen auswählen, Verträge unterzeichnen und vom sehr kleinen bis zum großen Budget.",
                // Chinese
                "中国人": "“管理用户研究物流”一章主要讨论物流、安全第一、进行面对面研究时的外观和感知、注意文化差异、与儿童一起进行用户研究、聘请机构、选择设施、签订合同以及从非常小的预算到大预算。",
                // Russian
                "Русский": "В главе «Управление логистикой исследований пользователей» в основном говорится о логистике, безопасности прежде всего, внешнем виде и восприятии при проведении личных исследований, учете культурных различий, проведении исследований пользователей с детьми, найме агентств, выборе помещений, подписании контрактов и От очень маленького бюджета до большого бюджета.",
                // French
                "Français": "Le chapitre « Gérer la logistique de la recherche sur les utilisateurs » parle principalement de la logistique, de la sécurité d'abord, de l'apparence et de la perception lors des recherches en face à face, d'être conscient des différences culturelles, de faire des recherches sur les utilisateurs avec des enfants, d'embaucher des agences, de choisir des installations, de signer des contrats et Du Très petit budget au Gros budget.",
                // Japanese
                "日本語": "「ユーザー調査ロジスティクスの管理」の章では、主にロジスティクス、安全第一、対面調査を行う際の外見と認識、文化の違いに注意すること、子供を対象にしたユーザー調査の実施、代理店の雇用、施設の選択、契約の締結、非常に小さな予算から大きな予算までについて説明します。",
                // Korean
                "한국인": "'사용자 연구 물류 관리' 장에서는 주로 물류, 안전 제일, 대면 조사 시 외모와 인식, 문화적 차이에 대한 인식, 어린이를 대상으로 한 사용자 연구 수행, 대행사 고용, 시설 선택, 계약 체결 및 아주 작은 예산부터 큰 예산까지.",
                // Spanish
                "Español": "El capítulo 'Gestión de la logística de investigación de usuarios' habla principalmente sobre logística, seguridad primero, apariencia y percepción al realizar una investigación cara a cara, ser consciente de las diferencias culturales, realizar investigaciones de usuarios con niños, contratar agencias, elegir instalaciones, firmar contratos y Desde presupuesto muy pequeño hasta presupuesto grande.",
                // Hindi
                "हिंदी": "'ব্যবহারকারী গবেষণা লজিস্টিক পরিচালনা' অধ্যায়টি মূলত লজিস্টিক, নিরাপত্তা প্রথম, মুখোমুখি গবেষণা করার সময় উপস্থিতি এবং উপলব্ধি, সাংস্কৃতিক পার্থক্য সম্পর্কে সচেতন হওয়া, শিশুদের সাথে ব্যবহারকারীর গবেষণা করা, নিয়োগকারী সংস্থা, সুবিধা নির্বাচন করা, চুক্তি স্বাক্ষর করা এবং খুব ছোট বাজেট থেকে বড় বাজেটে।",
                // Portuguese
                "Português": "O capítulo 'Gerenciando a logística de pesquisa de usuários' fala principalmente sobre Logística, Segurança em primeiro lugar, Aparência e percepção ao fazer pesquisas presenciais, Estar ciente das diferenças culturais, Fazer pesquisas de usuários com crianças, Contratar agências, escolher instalações, assinar contratos, e Do orçamento muito pequeno ao orçamento grande.",
                // Bengali
                "বাংলা": "'ব্যবহারকারী গবেষণা লজিস্টিক পরিচালনা' অধ্যায়টি মূলত লজিস্টিক, নিরাপত্তা প্রথম, মুখোমুখি গবেষণা করার সময় উপস্থিতি এবং উপলব্ধি, সাংস্কৃতিক পার্থক্য সম্পর্কে সচেতন হওয়া, শিশুদের সাথে ব্যবহারকারীর গবেষণা করা, নিয়োগকারী সংস্থা, সুবিধা নির্বাচন করা, চুক্তি স্বাক্ষর করা এবং খুব ছোট বাজেট থেকে বড় বাজেটে।",
                // Arabic
                "عَرَبِيّ": "يتحدث فصل 'إدارة لوجستيات بحث المستخدم' بشكل أساسي عن الخدمات اللوجستية، والسلامة أولاً، والمظهر والإدراك عند إجراء بحث وجهًا لوجه، وكن على دراية بالاختلافات الثقافية، وإجراء بحث المستخدم مع الأطفال، وتوظيف الوكالات، واختيار المرافق، وتوقيع العقود، و من ميزانية صغيرة جدًا إلى ميزانية كبيرة.",
                // Persian
                "فارسی": "فصل 'مدیریت تدارکات تحقیقات کاربر' عمدتاً در مورد لجستیک، ابتدا ایمنی، ظاهر و ادراک هنگام انجام تحقیقات حضوری، آگاهی از تفاوت‌های فرهنگی، انجام تحقیقات کاربر با کودکان، آژانس‌های استخدام، انتخاب امکانات، امضای قرارداد، و از بودجه بسیار کم تا بودجه بزرگ.",
            },
        },
        // 7
        {
            "ChapterName": "Usability testing: observing people doing things",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Usability testing' simply talks about how to observe people doing things. In this chapter, the reader will learn about 'What is usability testing?', 'The fundamentals of moderated usability testing', 'What moderated usability testing is good for', 'What moderated usability testing is not good for', 'Effort required to do this kind of research', a case study about moderated usability testing, 'When to use moderated usability testing', 'How to do moderated usability testing', 'Creating a protocol or a script', 'What should a protocol contain?', 'Tools for moderated usability testing', and the same stuff related to 'The fundamentals of unmoderated usability testing'.",
                // German
                "Deutsch": "Im Kapitel „Usability-Tests“ geht es einfach darum, wie man Menschen bei der Arbeit beobachtet. In diesem Kapitel erfährt der Leser, was Usability-Tests sind, die Grundlagen moderierter Usability-Tests, wofür moderierte Usability-Tests gut sind, wofür moderierte Usability-Tests nicht gut sind, welchen Aufwand diese Art von Forschung erfordert, eine Fallstudie zu moderierten Usability-Tests, wann moderierte Usability-Tests verwendet werden, wie moderierte Usability-Tests durchgeführt werden, ein Protokoll oder Skript erstellt wird, was ein Protokoll enthalten sollte, Tools für moderierte Usability-Tests und dasselbe wie in „Die Grundlagen unmoderierter Usability-Tests“.",
                // Chinese
                "中国人": "“可用性测试”一章只是谈论如何观察人们做事。在本章中，读者将了解“什么是可用性测试？”，“有主持可用性测试的基本原理”，“有主持可用性测试的优点”，“有主持可用性测试的缺点”，“进行此类研究所需的努力”，有关有主持可用性测试的案例研究，“何时使用有主持可用性测试”，“如何进行有主持可用性测试”，“创建协议或脚本”，“协议应包含什么？”，“有主持可用性测试的工具”，以及与“无主持可用性测试的基本原理”相关的相同内容。",
                // Russian
                "Русский": "В главе «Юзабилити-тестирование» просто рассказывается о том, как наблюдать за тем, как люди что-то делают. В этой главе читатель узнает о том, «Что такое юзабилити-тестирование?», «Основы модерируемого юзабилити-тестирования», «Чем модерируемое юзабилити-тестирование полезно», «Чем модерируемое юзабилити-тестирование не годится», «Требуемые усилия». проводить такого рода исследования», тематическое исследование модерируемого юзабилити-тестирования, «Когда использовать модерируемое юзабилити-тестирование», «Как проводить модерируемое юзабилити-тестирование», «Создание протокола или сценария», «Что должен содержать протокол?» ', «Инструменты для модерируемого юзабилити-тестирования» и то же самое, связанное с «Основами немодерируемого юзабилити-тестирования».",
                // French
                "Français": "Le chapitre « Tests d'utilisabilité » explique simplement comment observer les gens faire les choses. Dans ce chapitre, le lecteur découvrira « Qu'est-ce que les tests d'utilisabilité ? », « Les principes fondamentaux des tests d'utilisabilité modérés », « À quoi servent les tests d'utilisabilité modérés », « À quoi servent les tests d'utilisabilité modérés », « Effort requis » faire ce genre de recherche », une étude de cas sur les tests d'utilisabilité modérés, « Quand utiliser les tests d'utilisabilité modérés », « Comment faire des tests d'utilisabilité modérés », « Créer un protocole ou un script », « Que doit contenir un protocole ? », « Outils pour les tests d'utilisabilité modérés », et les mêmes éléments liés à « Les principes fondamentaux des tests d'utilisabilité non modérés ».",
                // Japanese
                "日本語": "「ユーザビリティ テスト」の章では、人々の行動を観察する方法について簡単に説明します。この章では、「ユーザビリティ テストとは何か」、「モデレートされたユーザビリティ テストの基礎」、「モデレートされたユーザビリティ テストの適した用途」、「モデレートされたユーザビリティ テストの適していない用途」、「この種の調査に必要な労力」、モデレートされたユーザビリティ テストに関するケース スタディ、「モデレートされたユーザビリティ テストを使用するタイミング」、「モデレートされたユーザビリティ テストの実施方法」、「プロトコルまたはスクリプトの作成」、「プロトコルには何を含めるべきか」、「モデレートされたユーザビリティ テストのツール」、および「モデレートされていないユーザビリティ テストの基礎」に関連する内容について学習します。",
                // Korean
                "한국인": "'사용성 테스트' 장에서는 사람들이 일을 하는 것을 관찰하는 방법에 대해 간단히 설명합니다. 이 장에서 독자는 '사용성 테스팅이란 무엇인가?', '중간 사용성 테스팅의 기본', '중간 사용성 테스팅이 좋은 점', '중간 사용성 테스팅이 좋지 않은 점', '필요한 노력'에 대해 배울 것입니다. 이런 종류의 연구를 수행하기', 조정된 사용성 테스트에 대한 사례 연구, '조정된 사용성 테스트를 사용해야 하는 경우', '조정된 사용성 테스트를 수행하는 방법', '프로토콜 또는 스크립트 작성', '프로토콜에는 무엇을 포함해야 합니까? ', '조정된 유용성 테스트를 위한 도구' 및 '조정되지 않은 유용성 테스트의 기본'과 관련된 동일한 내용입니다.",
                // Spanish
                "Español": "El capítulo 'Pruebas de usabilidad' simplemente habla de cómo observar a las personas haciendo cosas. En este capítulo, el lector aprenderá sobre '¿Qué son las pruebas de usabilidad?', 'Los fundamentos de las pruebas de usabilidad moderadas', 'Para qué son buenas las pruebas de usabilidad moderadas', 'Para qué no son buenas las pruebas de usabilidad moderadas', 'Esfuerzo requerido'. para hacer este tipo de investigación', un estudio de caso sobre pruebas de usabilidad moderadas, 'Cuándo usar pruebas de usabilidad moderadas', 'Cómo hacer pruebas de usabilidad moderadas', 'Creación de un protocolo o un script', '¿Qué debe contener un protocolo? ', 'Herramientas para pruebas de usabilidad moderadas' y lo mismo relacionado con 'Los fundamentos de las pruebas de usabilidad no moderadas'.",
                // Hindi
                "हिंदी": "'उपयोगिता परीक्षण' अध्याय में केवल इस बारे में बात की गई है कि लोगों को काम करते हुए कैसे देखा जाए। इस अध्याय में, पाठक 'उपयोगिता परीक्षण क्या है?', 'संयमित प्रयोज्यता परीक्षण के मूल सिद्धांत', 'संयमित प्रयोज्यता परीक्षण किसके लिए अच्छा है', 'संयमित प्रयोज्यता परीक्षण किसके लिए अच्छा नहीं है', 'इस तरह के शोध करने के लिए आवश्यक प्रयास', संयमित प्रयोज्यता परीक्षण के बारे में एक केस स्टडी, 'संयमित प्रयोज्यता परीक्षण का उपयोग कब करें', 'संयमित प्रयोज्यता परीक्षण कैसे करें', 'प्रोटोकॉल या स्क्रिप्ट बनाना', 'प्रोटोकॉल में क्या होना चाहिए?', 'संयमित प्रयोज्यता परीक्षण के लिए उपकरण', और 'असंयमित प्रयोज्यता परीक्षण के मूल सिद्धांत' से संबंधित समान सामग्री के बारे में जानेंगे।",
                // Portuguese
                "Português": "O capítulo 'Testes de usabilidade' simplesmente fala sobre como observar as pessoas fazendo coisas. Neste capítulo, o leitor aprenderá sobre 'O que é teste de usabilidade?', 'Os fundamentos do teste de usabilidade moderado', 'Para que serve o teste de usabilidade moderado', 'Para que serve o teste de usabilidade moderado', 'Esforço necessário para fazer este tipo de pesquisa', um estudo de caso sobre testes de usabilidade moderados, 'Quando usar testes de usabilidade moderados', 'Como fazer testes de usabilidade moderados', 'Criando um protocolo ou script', 'O que um protocolo deve conter? ', 'Ferramentas para testes de usabilidade moderados' e o mesmo material relacionado a 'Os fundamentos dos testes de usabilidade não moderados'.",
                // Bengali
                "বাংলা": "'ব্যবহারযোগ্যতা পরীক্ষা' অধ্যায়টি সহজভাবে লোকেদের কাজগুলি কীভাবে পর্যবেক্ষণ করতে হয় সে সম্পর্কে কথা বলে। এই অধ্যায়ে, পাঠক 'ব্যবহারযোগ্যতা পরীক্ষা কী?', 'পরিমিত ব্যবহারযোগ্যতা পরীক্ষার মৌলিক বিষয়গুলি', 'মডারেটেড ব্যবহারযোগ্যতা পরীক্ষা কীসের জন্য ভাল', 'কিসের জন্য পরিমিত ব্যবহারযোগ্যতা পরীক্ষা ভাল নয়', 'প্রচেষ্টা প্রয়োজন' সম্পর্কে শিখবেন। এই ধরনের গবেষণা করতে', পরিমিত ব্যবহারযোগ্যতা পরীক্ষা সম্পর্কে একটি কেস স্টাডি, 'কখন পরিমিত ব্যবহারযোগ্যতা পরীক্ষা ব্যবহার করবেন', 'কীভাবে পরিমিত ব্যবহারযোগ্যতা পরীক্ষা করবেন', 'একটি প্রোটোকল বা একটি স্ক্রিপ্ট তৈরি করা হচ্ছে', 'প্রটোকলের মধ্যে কী থাকা উচিত? ', 'মডারেটেড ব্যবহারযোগ্যতা পরীক্ষার জন্য সরঞ্জাম', এবং 'অনিয়ন্ত্রিত ব্যবহারযোগ্যতা পরীক্ষার মৌলিক বিষয়গুলি' সম্পর্কিত একই জিনিস।",
                // Arabic
                "عَرَبِيّ": "يتحدث فصل 'اختبار قابلية الاستخدام' ببساطة عن كيفية مراقبة الأشخاص وهم يفعلون الأشياء. في هذا الفصل، سيتعرف القارئ على 'ما هو اختبار قابلية الاستخدام؟'، 'أساسيات اختبار قابلية الاستخدام الخاضع للإشراف'، 'ما هو اختبار قابلية الاستخدام الخاضع للإشراف الجيد'، 'ما هو اختبار قابلية الاستخدام الخاضع للإشراف ليس جيدًا'، 'الجهد المطلوب' للقيام بهذا النوع من الأبحاث'، دراسة حالة حول اختبار قابلية الاستخدام الخاضع للإشراف، 'متى يتم استخدام اختبار قابلية الاستخدام الخاضع للإشراف'، 'كيفية إجراء اختبار قابلية الاستخدام الخاضع للإشراف'، 'إنشاء بروتوكول أو برنامج نصي'، 'ما الذي يجب أن يحتوي عليه البروتوكول؟' '،' أدوات اختبار قابلية الاستخدام الخاضع للإشراف '، ونفس الأشياء المتعلقة بـ 'أساسيات اختبار قابلية الاستخدام غير الخاضع للإشراف'.",
                // Persian
                "فارسی": "فصل 'آزمایش قابلیت استفاده' به سادگی در مورد چگونگی مشاهده افراد در حال انجام کارها صحبت می کند. در این فصل، خواننده در مورد 'تست قابلیت استفاده چیست؟'، 'اصول تست قابلیت استفاده تعدیل شده'، 'تست قابلیت استفاده تعدیل شده برای چه چیزی خوب است'، 'تست قابلیت استفاده تعدیل شده برای چه چیزی خوب نیست'، 'تلاش لازم است' آشنا خواهد شد. برای انجام این نوع تحقیقات، یک مطالعه موردی در مورد تست قابلیت استفاده تعدیل شده، «چه زمانی از تست قابلیت استفاده تعدیل شده استفاده کنیم»، «چگونه تست قابلیت استفاده تعدیل شده را انجام دهیم»، «ایجاد یک پروتکل یا یک اسکریپت»، «یک پروتکل باید شامل چه مواردی باشد؟ '، 'ابزارهایی برای تست قابلیت استفاده تعدیل شده'، و موارد مشابه مربوط به 'اصول تست قابلیت استفاده تعدیل نشده'.",
            },
        },
        // 8
        {
            "ChapterName": "Content testing: what do people think your content means ?",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, it is mainly talked about the 'What do people think your content means?'. The topics are 'What is good content?', 'What content testing is good for', 'What content testing is not good for', 'Effort required to do this kind of research', 'When to use content testing', 'How to test the effectiveness of content', 'Comprehension testing', 'Cloze testing', 'A/B (comparative) testing', and 'Guerrilla content testing'.",
                // German
                "Deutsch": "In diesem Kapitel geht es hauptsächlich um die Frage „Was glauben die Leute, was Ihr Inhalt bedeutet?“. Die Themen sind „Was ist guter Inhalt?“, „Wofür Inhaltstests gut sind?“, „Wofür Inhaltstests nicht gut sind?“, „Aufwand für diese Art von Recherche“, „Wann Inhaltstests eingesetzt werden“, „Wie testet man die Wirksamkeit von Inhalten?“, „Verständnistests“, „Cloze-Tests“, „A/B-Tests (Vergleichstests)“ und „Guerilla-Inhaltstests“.",
                // Chinese
                "中国人": "本章主要讨论‘人们认为您的内容意味着什么？’。主题包括‘什么是好的内容？’，‘内容测试有什么用’，‘内容测试有什么用’，‘进行此类研究所需的努力’，‘何时使用内容测试’，‘如何测试内容的有效性’，‘理解力测试’，‘完形填空测试’，‘A/B（比较）测试’和‘游击内容测试’。",
                // Russian
                "Русский": "В этой главе в основном говорится о том, «Что люди думают о вашем контенте?». Темы: «Что такое хороший контент?», «Для чего полезно тестирование контента», «Для чего тестирование контента не подходит», «Усилия, необходимые для проведения такого рода исследований», «Когда использовать тестирование контента», « Как проверить эффективность контента», «Тестирование понимания», «Тестирование Cloze», «A/B (сравнительное) тестирование» и «Партизанское тестирование контента».",
                // French
                "Français": "Dans ce chapitre, il est principalement question de « Que pensent les gens de votre contenu ? ». Les sujets sont « Qu'est-ce qu'un bon contenu ? », « À quoi servent les tests de contenu », « À quoi servent les tests de contenu », « Effort requis pour effectuer ce type de recherche », « Quand utiliser les tests de contenu », « Comment tester l'efficacité du contenu », « Tests de compréhension », « Tests Cloze », « Tests A/B (comparatifs) » et « Tests de contenu Guerrilla ».",
                // Japanese
                "日本語": "この章では、主に「あなたのコンテンツが何を意味していると人々は考えているか」について説明します。トピックは、「良いコンテンツとは何か」、「コンテンツ テストが適しているもの」、「コンテンツ テストが適していないもの」、「この種の調査を行うために必要な労力」、「コンテンツ テストを使用するタイミング」、「コンテンツの有効性をテストする方法」、「理解度テスト」、「クローズ テスト」、「A/B (比較) テスト」、「ゲリラ コンテンツ テスト」です。",
                // Korean
                "한국인": "이번 장에서는 '사람들이 당신의 콘텐츠가 무엇을 의미한다고 생각하는가?'에 대해 주로 이야기합니다. 주제는 '좋은 콘텐츠란 무엇인가?', '어떤 콘텐츠 테스팅이 좋은가', '어떤 콘텐츠 테스팅이 좋지 않은가', '이런 연구를 하려면 노력이 필요하다', '콘텐츠 테스팅을 언제 사용해야 하는가', ' 콘텐츠의 유효성을 테스트하는 방법', '이해 테스트', 'Cloze 테스트', 'A/B(비교) 테스트', '게릴라 콘텐츠 테스트'.",
                // Spanish
                "Español": "En este capítulo, se habla principalmente de '¿Qué cree la gente que significa tu contenido?'. Los temas son '¿Qué es un buen contenido?', 'Para qué son buenas las pruebas de contenido', 'Para qué no son buenas las pruebas de contenido', 'Esfuerzo necesario para realizar este tipo de investigación', 'Cuándo utilizar las pruebas de contenido', ' Cómo probar la efectividad del contenido', 'Pruebas de comprensión', 'Pruebas de cierre', 'Pruebas A/B (comparativas)' y 'Pruebas de contenido de guerrilla'.",
                // Hindi
                "हिंदी": "इस अध्याय में मुख्य रूप से इस बारे में बात की गई है कि 'लोग आपके कंटेंट का क्या मतलब समझते हैं?'। विषय हैं 'अच्छा कंटेंट क्या है?', 'कंटेंट टेस्टिंग किसके लिए अच्छा है', 'कंटेंट टेस्टिंग किसके लिए अच्छा नहीं है', 'इस तरह के शोध करने के लिए आवश्यक प्रयास', 'कंटेंट टेस्टिंग का उपयोग कब करें', 'कंटेंट की प्रभावशीलता का परीक्षण कैसे करें', 'समझ परीक्षण', 'क्लोज परीक्षण', 'ए/बी (तुलनात्मक) परीक्षण' और 'गुरिल्ला कंटेंट परीक्षण'।",
                // Portuguese
                "Português": "Neste capítulo, fala-se principalmente sobre 'O que as pessoas acham que o seu conteúdo significa?'. Os tópicos são 'O que é um bom conteúdo?', 'Para que serve o teste de conteúdo', 'Para que o teste de conteúdo não é bom', 'Esforço necessário para fazer este tipo de pesquisa', 'Quando usar o teste de conteúdo', ' Como testar a eficácia do conteúdo', 'Teste de compreensão', 'Teste Cloze', 'Teste A/B (comparativo)' e 'Teste de conteúdo de guerrilha'.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, এটি প্রধানত 'লোকেরা আপনার বিষয়বস্তু মানে কি মনে করে?' সম্পর্কে কথা বলা হয়েছে. বিষয়গুলি হল 'ভাল বিষয়বস্তু কী?', 'কোন বিষয়বস্তুর পরীক্ষা করা ভাল', 'কোন বিষয়বস্তুর পরীক্ষা ভাল নয়', 'এই ধরনের গবেষণা করার জন্য প্রচেষ্টা প্রয়োজন', 'কন্টেন্ট টেস্টিং কখন ব্যবহার করতে হবে', ' কিভাবে বিষয়বস্তুর কার্যকারিতা পরীক্ষা করা যায়', 'বোধগম্য পরীক্ষা', 'ক্লোজ টেস্টিং', 'A/B (তুলনামূলক) পরীক্ষা', এবং 'গেরিলা বিষয়বস্তু পরীক্ষা'।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتم الحديث بشكل أساسي عن 'ماذا يعتقد الناس أن المحتوى الخاص بك يعني؟'. المواضيع هي 'ما هو المحتوى الجيد؟'، 'ما هو المحتوى المناسب لاختبار المحتوى'، 'ما هو اختبار المحتوى غير الجيد'، 'الجهد المطلوب للقيام بهذا النوع من البحث'، 'متى يتم استخدام اختبار المحتوى'، '' كيفية اختبار فعالية المحتوى، و'اختبار الفهم'، و'اختبار الغلق'، و'اختبار أ/ب (المقارن)، و'اختبار محتوى حرب العصابات'.",
                // Persian
                "فارسی": "در این فصل، عمدتاً در مورد 'مردم فکر می کنند محتوای شما به چه معناست؟' صحبت می شود. عناوین عبارتند از «محتوای خوب چیست؟»، «تست محتوا برای چه چیزی خوب است»، «تست محتوا برای چه چیزی خوب نیست»، «تلاش لازم برای انجام این نوع تحقیق»، «زمان استفاده از تست محتوا»، « نحوه آزمایش اثربخشی محتوا، «تست درک مطلب»، «تست کلوز»، «تست A/B (مقایسه‌ای)» و «تست محتوای چریکی».",
            },
        },
        // 9
        {
            "ChapterName": "Card sorting: understanding how people group and relate things",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Card sorting is a method used to understand how people think about and associate things, grouping items that are related to each other. This chapter mainly topics are 'What card sorting is good for', 'What card sorting is not good for', 'When to use card sorting', 'When to do hybrid testing', 'When to do iterative card sorting', 'Effort required to do this kind of research', 'How to do card sorting', and 'Tools for card sorting'.",
                // German
                "Deutsch": "Card Sorting ist eine Methode, mit der man verstehen kann, wie Menschen über Dinge denken und sie assoziieren, indem man Dinge gruppiert, die miteinander in Zusammenhang stehen. Die Hauptthemen dieses Kapitels sind „Wofür Card Sorting gut ist“, „Wofür Card Sorting nicht gut ist“, „Wann Card Sorting verwendet werden sollte“, „Wann Hybridtests durchgeführt werden sollten“, „Wann iteratives Card Sorting durchgeführt werden sollte“, „Aufwand für diese Art von Forschung“, „Wie Card Sorting durchgeführt wird“ und „Tools für Card Sorting“.",
                // Chinese
                "中国人": "卡片分类是一种用于了解人们如何思考和联想事物的方法，将相互关联的项目分组。本章主要讨论“卡片分类有什么用”、“卡片分类有什么用”、“何时使用卡片分类”、“何时进行混合测试”、“何时进行迭代卡片分类”、“进行此类研究所需的努力”、“如何进行卡片分类”和“卡片分类的工具”。",
                // Russian
                "Русский": "Сортировка карточек — это метод, используемый для понимания того, как люди думают и связывают вещи, группируя предметы, связанные друг с другом. Главные темы этой главы: «Для чего подходит сортировка карточек», «Для чего сортировка карточек не годится», «Когда использовать сортировку карточек», «Когда проводить гибридное тестирование», «Когда проводить итеративную сортировку карточек», Усилия, необходимые для проведения такого рода исследования», «Как сортировать карточки» и «Инструменты для сортировки карточек».",
                // French
                "Français": "Le tri des cartes est une méthode utilisée pour comprendre comment les gens pensent et associent les choses, en regroupant les éléments liés les uns aux autres. Ce chapitre traite principalement des sujets suivants : « À quoi sert le tri des cartes », « À quoi sert le tri des cartes ? », « Quand utiliser le tri des cartes », « Quand effectuer des tests hybrides », « Quand effectuer un tri itératif des cartes », « Effort requis pour effectuer ce type de recherche », « Comment effectuer le tri des cartes » et « Outils de tri des cartes ».",
                // Japanese
                "日本語": "カード ソートは、人々が物事についてどのように考え、関連付けているかを理解するために使用する手法で、互いに関連する項目をグループ化します。この章の主なトピックは、「カード ソートが適している用途」、「カード ソートが適していない用途」、「カード ソートを使用するタイミング」、「ハイブリッド テストを実行するタイミング」、「反復カード ソートを実行するタイミング」、「この種の調査に必要な労力」、「カード ソートの実行方法」、「カード ソートのツール」です。",
                // Korean
                "한국인": "카드 정렬은 사람들이 사물에 대해 어떻게 생각하고 연관시키는지 이해하고, 서로 관련된 항목을 그룹화하는 데 사용되는 방법입니다. 이 장에서는 주로 '어떤 카드 정렬이 좋은지', '어떤 카드 정렬이 좋지 않은지', '카드 정렬을 사용해야 하는 경우', '하이브리드 테스트를 수행하는 경우', '반복 카드 정렬을 수행하는 경우', ' 이런 연구를 하기 위해서는 노력이 필요하다', '카드 분류 방법', '카드 분류 도구' 등이 있다.",
                // Spanish
                "Español": "La clasificación de tarjetas es un método utilizado para comprender cómo las personas piensan y asocian las cosas, agrupando elementos que están relacionados entre sí. Los temas principales de este capítulo son 'Para qué es buena la clasificación de tarjetas', 'Para qué no es buena la clasificación de tarjetas', 'Cuándo utilizar la clasificación de tarjetas', 'Cuándo realizar pruebas híbridas', 'Cuándo realizar la clasificación de tarjetas iterativa', Esfuerzo necesario para realizar este tipo de investigación', 'Cómo clasificar tarjetas' y 'Herramientas para clasificar tarjetas'.",
                // Hindi
                "हिंदी": "कार्ड सॉर्टिंग एक ऐसी विधि है जिसका उपयोग यह समझने के लिए किया जाता है कि लोग किस तरह से चीजों के बारे में सोचते हैं और उन्हें जोड़ते हैं, एक दूसरे से संबंधित वस्तुओं को समूहीकृत करते हैं। इस अध्याय के मुख्य विषय हैं 'कार्ड सॉर्टिंग किसके लिए अच्छी है', 'कार्ड सॉर्टिंग किसके लिए अच्छी नहीं है', 'कार्ड सॉर्टिंग का उपयोग कब करें', 'हाइब्रिड परीक्षण कब करें', 'पुनरावृत्त कार्ड सॉर्टिंग कब करें', 'इस तरह के शोध को करने के लिए आवश्यक प्रयास', 'कार्ड सॉर्टिंग कैसे करें', और 'कार्ड सॉर्टिंग के लिए उपकरण'।",
                // Portuguese
                "Português": "Card sorting é um método usado para entender como as pessoas pensam e associam as coisas, agrupando itens que estão relacionados entre si. Os principais tópicos deste capítulo são 'Para que a classificação de cartões é boa', 'Para que a classificação de cartões não é boa', 'Quando usar a classificação de cartões', 'Quando fazer testes híbridos', 'Quando fazer a classificação iterativa de cartões', ' Esforço necessário para fazer este tipo de pesquisa', 'Como fazer a classificação de cartões' e 'Ferramentas para classificação de cartões'.",
                // Bengali
                "বাংলা": "কার্ড বাছাই করা একটি পদ্ধতি যা বোঝার জন্য ব্যবহৃত হয় যে লোকেরা কীভাবে জিনিসগুলি সম্পর্কে চিন্তা করে এবং যুক্ত করে, একে অপরের সাথে সম্পর্কিত আইটেমগুলিকে গোষ্ঠীবদ্ধ করে। এই অধ্যায়ে প্রধানত বিষয়গুলি হল 'কিসের জন্য কার্ড বাছাই করা ভাল', 'কীসের জন্য কার্ড সাজানো ভাল নয়', 'কখন কার্ড বাছাই ব্যবহার করতে হবে', 'হাইব্রিড টেস্টিং কখন করতে হবে', 'কখন পুনরাবৃত্তিমূলক কার্ড বাছাই করতে হবে', ' এই ধরনের গবেষণা করার জন্য প্রচেষ্টা প্রয়োজন, 'কার্ড সাজানোর পদ্ধতি', এবং 'কার্ড সাজানোর সরঞ্জাম'।",
                // Arabic
                "عَرَبِيّ": "فرز البطاقات هو أسلوب يستخدم لفهم كيفية تفكير الأشخاص في الأشياء وربطها، وتجميع العناصر المرتبطة ببعضها البعض. موضوعات هذا الفصل بشكل أساسي هي 'ما هو فرز البطاقات المناسب'، 'ما هو فرز البطاقات غير الجيد'، 'متى يتم استخدام فرز البطاقات'، 'متى يتم إجراء اختبار مختلط'، 'متى يتم فرز البطاقات التكراري'، '' الجهد المطلوب للقيام بهذا النوع من البحث، و'كيفية فرز البطاقات'، و'أدوات فرز البطاقات'.",
                // Persian
                "فارسی": "مرتب‌سازی کارت روشی است که برای درک اینکه مردم چگونه در مورد چیزها فکر می‌کنند و آنها را مرتبط می‌کنند، گروه‌بندی اقلام مرتبط با یکدیگر استفاده می‌شود. این فصل عمدتاً عناوین «مرتب‌سازی کارت برای چه چیزهایی خوب است»، «مرتب‌سازی کارت برای چه مواردی خوب نیست»، «زمان استفاده از مرتب‌سازی کارت»، «زمان انجام آزمایش ترکیبی»، «زمان انجام مرتب‌سازی کارت تکراری»، برای انجام این نوع تحقیق، «چگونه مرتب‌سازی کارت» و «ابزار مرتب‌سازی کارت» انجام شود، تلاش لازم است.",
            },
        },
        // 10
        {
            "ChapterName": "Surveys: how to gauge a widespread user response",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Surveys' mainly talks about the surveys and how to gauge a widespread user response. the talked topics are 'What are surveys?', 'What surveys are good for', 'What surveys are not good for', 'When to do a survey', 'Effort required to do this kind of research', 'How to do surveys', and 'Survey tools'.",
                // German
                "Deutsch": "Im Kapitel „Umfragen“ geht es hauptsächlich um Umfragen und darum, wie sich eine breite Benutzerreaktion messen lässt. Die besprochenen Themen sind „Was sind Umfragen?“, „Wofür sind Umfragen gut?“, „Wofür sind Umfragen nicht gut?“, „Wann sollte man eine Umfrage durchführen?“, „Welcher Aufwand ist für diese Art von Untersuchung erforderlich?“, „Wie führt man Umfragen durch?“ und „Umfrage-Tools“.",
                // Chinese
                "中国人": "“调查”一章主要讨论调查以及如何衡量广泛的用户反应。讨论的主题包括“什么是调查？”，“调查有什么用”，“调查有什么用”，“何时进行调查”，“进行此类研究所需的努力”，“如何进行调查”和“调查工具”。",
                // Russian
                "Русский": "В главе «Опросы» в основном говорится об опросах и о том, как оценить широкую реакцию пользователей. обсуждаемые темы: «Что такое опросы?», «Для чего опросы хороши», «Для чего опросы не подходят», «Когда проводить опрос», «Усилия, необходимые для проведения такого рода исследований», «Как проводить опросы» и «Инструменты опросов».",
                // French
                "Français": "Le chapitre « Enquêtes » parle principalement des enquêtes et de la manière d'évaluer une réponse généralisée des utilisateurs. les sujets abordés sont « Que sont les enquêtes ? », « À quoi servent les enquêtes », « À quoi servent les enquêtes ? », « Quand faire une enquête », « Effort requis pour faire ce type de recherche », « Comment faire des enquêtes » et « Outils d'enquête ».",
                // Japanese
                "日本語": "「調査」の章では、主に調査と、幅広いユーザーの反応を測定する方法について説明します。取り上げるトピックは、「調査とは何か」、「調査が適しているもの」、「調査が適していないもの」、「調査を実施するタイミング」、「この種の調査を行うために必要な労力」、「調査の実施方法」、「調査ツール」です。",
                // Korean
                "한국인": "'설문조사' 장에서는 주로 설문조사와 광범위한 사용자 반응을 측정하는 방법에 대해 설명합니다. 화제의 주제는 '설문조사란 무엇인가?', '어떤 설문조사가 좋은가', '어떤 설문조사가 좋지 않은가', '설문조사는 언제 해야 하는가', '이런 연구를 하려면 어떤 노력이 필요한가', '어떻게 해야 하는가' 등이다. 설문조사를 하세요', '설문조사 도구'를 선택하세요.",
                // Spanish
                "Español": "El capítulo 'Encuestas' habla principalmente sobre las encuestas y cómo medir una respuesta generalizada de los usuarios. los temas tratados son '¿Qué son las encuestas?', '¿Para qué son buenas las encuestas', 'Para qué no son buenas las encuestas', 'Cuándo hacer una encuesta', 'Esfuerzo requerido para hacer este tipo de investigación', 'Cómo hacer encuestas' y 'Herramientas de encuestas'.",
                // Hindi
                "हिंदी": "'सर्वेक्षण' अध्याय मुख्य रूप से सर्वेक्षणों के बारे में और व्यापक उपयोगकर्ता प्रतिक्रिया को मापने के तरीके के बारे में चर्चा करता है। चर्चा किए गए विषय हैं 'सर्वेक्षण क्या हैं?', 'किस काम के लिए सर्वेक्षण अच्छे हैं', 'किस काम के लिए सर्वेक्षण अच्छे नहीं हैं', 'सर्वेक्षण कब करें', 'इस तरह के शोध करने के लिए आवश्यक प्रयास', 'सर्वेक्षण कैसे करें', और 'सर्वेक्षण उपकरण'।",
                // Portuguese
                "Português": "O capítulo 'Pesquisas' fala principalmente sobre as pesquisas e como avaliar uma resposta generalizada do usuário. os tópicos abordados são 'O que são pesquisas?', 'Para que servem as pesquisas', 'Para que servem as pesquisas', 'Quando fazer uma pesquisa', 'Esforço necessário para fazer este tipo de pesquisa', 'Como fazer fazer pesquisas' e 'Ferramentas de pesquisa'.",
                // Bengali
                "বাংলা": "'জরিপ' অধ্যায়টি প্রধানত সমীক্ষা এবং ব্যবহারকারীর ব্যাপক প্রতিক্রিয়া কীভাবে পরিমাপ করা যায় সে সম্পর্কে আলোচনা করে। আলোচিত বিষয়গুলি হল 'জরিপগুলি কী?', 'কোন সমীক্ষার জন্য ভাল', 'কোন সমীক্ষার জন্য ভাল নয়', 'কখন একটি সমীক্ষা করতে হবে', 'এই ধরনের গবেষণা করার জন্য প্রচেষ্টা প্রয়োজন', 'কীভাবে করতে হবে' সার্ভে করুন', এবং 'জরিপ সরঞ্জাম'।",
                // Arabic
                "عَرَبِيّ": "يتحدث فصل 'الاستطلاعات' بشكل أساسي عن الاستطلاعات وكيفية قياس استجابة المستخدم واسعة النطاق. المواضيع التي تم تناولها هي 'ما هي الاستطلاعات؟'، 'ما هي الاستطلاعات الجيدة'، 'ما هي الاستطلاعات غير الجيدة'، 'متى يجب إجراء المسح'، 'الجهد المطلوب للقيام بهذا النوع من البحث'، 'كيفية إجراء المسح' إجراء المسوحات، و'أدوات المسح'.",
                // Persian
                "فارسی": "فصل 'نظرسنجی ها' عمدتاً در مورد نظرسنجی ها و چگونگی سنجش پاسخ گسترده کاربران صحبت می کند. موضوعات مورد بحث عبارتند از «نظرسنجی چیست؟»، «نظرسنجی برای چه چیزی خوب است»، «نظرسنجی برای چه چیزی خوب نیست»، «چه زمانی باید نظرسنجی انجام داد»، «تلاش لازم برای انجام این نوع تحقیق»، «چگونه انجام نظرسنجی» و «ابزارهای نظرسنجی».",
            },
        },
        // 11
        {
            "ChapterName": "User interviews: understanding people's experience through talking to them",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'User interview' mainly talks about understanding people's experience through talking to them. The topics talked about are 'What are user interviews?', 'What user interviews are good for', 'What user interviews are not good for', 'When to do user interviews', 'Effort required to do this kind of research', 'How to do user interviews', and 'Interview tools'.",
                // German
                "Deutsch": "Im Kapitel „Benutzerinterview“ geht es hauptsächlich darum, die Erfahrungen von Menschen durch Gespräche zu verstehen. Die behandelten Themen sind „Was sind Benutzerinterviews?“, „Wofür sind Benutzerinterviews gut?“, „Wofür sind Benutzerinterviews nicht gut?“, „Wann sollten Benutzerinterviews durchgeführt werden?“, „Aufwand für diese Art von Forschung“, „Wie werden Benutzerinterviews durchgeführt?“ und „Interview-Tools“.",
                // Chinese
                "中国人": "“用户访谈”一章主要讨论通过与人们交谈来了解他们的体验。讨论的主题包括“什么是用户访谈？”，“用户访谈有什么好处？”，“用户访谈有什么坏处？”，“何时进行用户访谈？”，“进行此类研究所需的努力？”，“如何进行用户访谈”和“访谈工具”。",
                // Russian
                "Русский": "В главе «Интервью с пользователем» в основном говорится о понимании опыта людей посредством общения с ними. Обсуждаемые темы: «Что такое интервью с пользователями?», «Для чего нужны интервью с пользователями», «Для чего интервью с пользователями не подходят», «Когда проводить интервью с пользователями», «Усилия, необходимые для проведения такого рода исследований». , «Как проводить интервью с пользователями» и «Инструменты для проведения интервью».",
                // French
                "Français": "Le chapitre « Entretien avec les utilisateurs » parle principalement de comprendre l'expérience des gens en leur parlant. Les sujets abordés sont « Que sont les entretiens avec les utilisateurs ? », « À quoi servent les entretiens avec les utilisateurs », « À quoi servent les entretiens avec les utilisateurs », « Quand réaliser les entretiens avec les utilisateurs », « Effort requis pour faire ce type de recherche ». , « Comment réaliser des entretiens avec les utilisateurs » et « Outils d'entretien ».",
                // Japanese
                "日本語": "「ユーザー インタビュー」の章では、主に人々と話すことを通じて人々の経験を理解することについて説明しています。取り上げられているトピックは、「ユーザー インタビューとは何か」、「ユーザー インタビューが適している点」、「ユーザー インタビューが適していない点」、「ユーザー インタビューをいつ行うか」、「この種の調査を行うために必要な労力」、「ユーザー インタビューの実施方法」、「インタビュー ツール」です。",
                // Korean
                "한국인": "'사용자 인터뷰' 장에서는 주로 사람들과 대화를 통해 사람들의 경험을 이해하는 것에 대해 이야기합니다. '사용자 인터뷰란 무엇인가?', '어떤 사용자 인터뷰가 좋은가', '어떤 사용자 인터뷰가 좋지 않은가', '사용자 인터뷰는 언제 해야 하는가', '이런 연구를 하려면 어떤 노력이 필요한가' 등이 이야기를 나눴다. , '사용자 인터뷰 방법', '인터뷰 도구'.",
                // Spanish
                "Español": "El capítulo 'Entrevista con el usuario' habla principalmente de comprender la experiencia de las personas hablando con ellas. Los temas que se tratan son '¿Qué son las entrevistas con usuarios?', 'Para qué son buenas las entrevistas con usuarios', 'Para qué no son buenas las entrevistas con usuarios', 'Cuándo realizar entrevistas con usuarios', 'Esfuerzo necesario para realizar este tipo de investigación'. , 'Cómo realizar entrevistas a usuarios' y 'Herramientas de entrevista'.",
                // Hindi
                "हिंदी": "'यूजर इंटरव्यू' अध्याय में मुख्य रूप से लोगों से बातचीत करके उनके अनुभव को समझने के बारे में बताया गया है। जिन विषयों पर चर्चा की गई है, वे हैं 'यूजर इंटरव्यू क्या हैं?', 'यूजर इंटरव्यू किस लिए अच्छे हैं', 'यूजर इंटरव्यू किस लिए अच्छे नहीं हैं', 'यूजर इंटरव्यू कब करें', 'इस तरह के शोध करने के लिए आवश्यक प्रयास', 'यूजर इंटरव्यू कैसे करें' और 'इंटरव्यू टूल'।",
                // Portuguese
                "Português": "O capítulo 'Entrevista com o usuário' fala principalmente sobre a compreensão da experiência das pessoas conversando com elas. Os tópicos abordados são 'O que são entrevistas com usuários?', 'Para que servem as entrevistas com usuários', 'Para que servem as entrevistas com usuários', 'Quando fazer entrevistas com usuários', 'Esforço necessário para fazer este tipo de pesquisa' , 'Como fazer entrevistas com usuários' e 'Ferramentas de entrevista'.",
                // Bengali
                "বাংলা": "'ব্যবহারকারীর সাক্ষাৎকার' অধ্যায়টি মূলত তাদের সাথে কথা বলার মাধ্যমে মানুষের অভিজ্ঞতা বোঝার কথা বলে। যে বিষয়গুলি নিয়ে আলোচনা করা হয়েছে তা হল 'ব্যবহারকারীর সাক্ষাত্কার কী?', 'কোন ব্যবহারকারীর সাক্ষাত্কারের জন্য ভাল', 'ব্যবহারকারীর সাক্ষাৎকারগুলি কীসের জন্য ভাল নয়', 'ব্যবহারকারীর সাক্ষাত্কার কখন করতে হবে', 'এই ধরণের গবেষণা করার জন্য প্রচেষ্টা প্রয়োজন' , 'কিভাবে ইউজার ইন্টারভিউ করবেন', এবং 'ইন্টারভিউ টুলস'।",
                // Arabic
                "عَرَبِيّ": "يتحدث فصل 'مقابلة المستخدم' بشكل أساسي عن فهم تجربة الأشخاص من خلال التحدث إليهم. المواضيع التي تم تناولها هي 'ما هي مقابلات المستخدمين؟'، 'ما هي مقابلات المستخدمين المفيدة'، 'ما هي مقابلات المستخدمين غير الجيدة'، 'متى يتم إجراء مقابلات مع المستخدمين'، 'الجهد المطلوب للقيام بهذا النوع من البحث' و'كيفية إجراء المقابلات مع المستخدمين' و'أدوات المقابلة'.",
                // Persian
                "فارسی": "فصل 'مصاحبه کاربر' عمدتاً در مورد درک تجربه افراد از طریق صحبت با آنها صحبت می کند. موضوعاتی که در مورد آنها صحبت شد عبارتند از: 'مصاحبه با کاربر چیست؟'، 'مصاحبه با کاربر برای چه چیزی خوب است'، 'مصاحبه با کاربر برای چه چیزی خوب نیست'، 'زمان انجام مصاحبه با کاربر'، 'تلاش لازم برای انجام این نوع تحقیق' است. ، 'نحوه انجام مصاحبه با کاربر' و 'ابزارهای مصاحبه'.",
            },
        },
        // 12
        {
            "ChapterName": "Diary studies: how to capture user research data over time",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on Diary studies and how to capture user research data over time. The main topics are 'What are diary studies?', 'What diary studies are good for', 'What diary studies are not good for', 'When to do a diary study', 'Effort required to do this kind of research', 'How to do a diary study', and 'Diary study tools'.",
                // German
                "Deutsch": "In diesem Kapitel geht es um Tagebuchstudien und darum, wie man im Laufe der Zeit Daten aus der Benutzerforschung erfasst. Die Hauptthemen sind „Was sind Tagebuchstudien?“, „Wofür sind Tagebuchstudien gut?“, „Wofür sind Tagebuchstudien nicht gut?“, „Wann sollte man eine Tagebuchstudie durchführen?“, „Aufwand für diese Art von Forschung“, „Wie führt man eine Tagebuchstudie durch?“ und „Tools für Tagebuchstudien“.",
                // Chinese
                "中国人": "本章重点介绍日记研究以及如何随时间捕获用户研究数据。主要主题包括“什么是日记研究？”，“日记研究有什么用处”，“日记研究有什么用处”，“何时进行日记研究”，“进行此类研究所需的努力”，“如何进行日记研究”和“日记研究工具”。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется дневниковым исследованиям и тому, как собирать данные исследований пользователей с течением времени. Основные темы: «Что такое дневниковые исследования?», «Для чего полезны дневниковые исследования», «Для чего вредны дневниковые исследования», «Когда проводить дневниковое исследование», «Усилия, необходимые для проведения такого рода исследований». , «Как вести дневник» и «Инструменты для изучения дневника».",
                // French
                "Français": "Ce chapitre se concentre sur les études de journal et sur la façon de capturer les données de recherche des utilisateurs au fil du temps. Les principaux sujets sont « Que sont les études de journal ? », « À quoi servent les études de journal ? », « À quoi servent les études de journal ? », « Quand faire une étude de journal », « Effort requis pour faire ce type de recherche ». , « Comment réaliser une étude de journal » et « Outils d'étude de journal ».",
                // Japanese
                "日本語": "この章では、日記調査と、時間の経過に伴うユーザー調査データの収集方法に焦点を当てます。主なトピックは、「日記調査とは何か」、「日記調査が適している用途」、「日記調査が適していない用途」、「日記調査を実施するタイミング」、「この種の調査に必要な労力」、「日記調査の実施方法」、「日記調査ツール」です。",
                // Korean
                "한국인": "이 장에서는 일기 연구와 시간 경과에 따른 사용자 연구 데이터를 수집하는 방법에 중점을 둡니다. 주요 주제는 '일기공부란 무엇인가?', '일기공부는 무엇에 좋은가', '일기공부는 무엇에 적합하지 않은가', '일기공부는 언제 해야 하는가', '이런 연구를 하려면 필요한 노력'이다. , '일기 공부 방법', '일기 공부 도구' 등이 있습니다.",
                // Spanish
                "Español": "Este capítulo se centra en los estudios de diarios y en cómo capturar datos de investigación de usuarios a lo largo del tiempo. Los temas principales son '¿Qué son los estudios de diarios?', 'Para qué son buenos los estudios de diarios', 'Para qué no son buenos los estudios de diarios', 'Cuándo realizar un estudio de diarios', 'Esfuerzo necesario para realizar este tipo de investigación'. , 'Cómo hacer un estudio de diario' y 'Herramientas de estudio de diario'.",
                // Hindi
                "हिंदी": "यह अध्याय डायरी अध्ययन और समय के साथ उपयोगकर्ता अनुसंधान डेटा को कैप्चर करने के तरीके पर केंद्रित है। मुख्य विषय हैं 'डायरी अध्ययन क्या हैं?', 'डायरी अध्ययन किसके लिए अच्छे हैं', 'डायरी अध्ययन किसके लिए अच्छे नहीं हैं', 'डायरी अध्ययन कब करना चाहिए', 'इस तरह के शोध को करने के लिए आवश्यक प्रयास', 'डायरी अध्ययन कैसे करें', और 'डायरी अध्ययन उपकरण'।",
                // Portuguese
                "Português": "Este capítulo se concentra nos estudos do Diário e em como capturar dados de pesquisa do usuário ao longo do tempo. Os tópicos principais são 'O que são estudos de diário?', 'Para que servem os estudos de diário', 'Para que estudos de diário não são bons', 'Quando fazer um estudo de diário', 'Esforço necessário para fazer este tipo de pesquisa' , 'Como fazer um estudo diário' e 'Ferramentas de estudo diário'.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ডায়েরি অধ্যয়ন এবং সময়ের সাথে সাথে ব্যবহারকারীর গবেষণা ডেটা কীভাবে ক্যাপচার করা যায় তার উপর ফোকাস করে। প্রধান বিষয়গুলি হল 'ডায়েরি স্টাডিজ কী?', 'ডায়েরি স্টাডিজ কীসের জন্য ভাল', 'ডায়েরি স্টাডিজ কীসের জন্য ভাল নয়', 'কখন ডায়েরি স্টাডি করতে হবে', 'এই ধরনের গবেষণা করার জন্য প্রচেষ্টা প্রয়োজন' , 'কীভাবে একটি ডায়েরি স্টাডি করতে হয়', এবং 'ডায়েরি অধ্যয়নের সরঞ্জাম'।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على دراسات اليوميات وكيفية التقاط بيانات بحث المستخدم مع مرور الوقت. المواضيع الرئيسية هي 'ما هي دراسات المذكرات؟'، 'ما هي دراسات المذكرات المفيدة'، 'ما هي دراسات المذكرات غير الجيدة'، 'متى يجب إجراء دراسة المذكرات'، 'الجهد المطلوب للقيام بهذا النوع من البحث' و'كيفية إجراء دراسة اليوميات' و'أدوات دراسة اليوميات'.",
                // Persian
                "فارسی": "این فصل بر مطالعات دفترچه خاطرات و چگونگی جمع‌آوری داده‌های تحقیقاتی کاربر در طول زمان تمرکز دارد. موضوعات اصلی عبارتند از: «مطالعات خاطرات روزانه چیست؟»، «مطالعات روزانه برای چه چیزهایی خوب هستند»، «مطالعات روزانه برای چه چیزهایی خوب نیستند»، «چه زمانی باید مطالعه روزانه انجام داد»، «تلاش لازم برای انجام این نوع تحقیقات» ، 'چگونه یک مطالعه خاطرات انجام دهیم' و 'ابزارهای مطالعه خاطرات'.",
            },
        },
        // 13
        {
            "ChapterName": "Information architecture validation through tree testing: does the structure of your information work for your users ?",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Information architecture validation through tree testing' and checking 'Does the structure of your information work for your users?'. And main topics are 'What is information architecture?', 'What tree testing is good for', 'What tree testing is not good for', 'When to do tree testing', 'Effort required to do this kind of research', 'How to do a tree test', and 'Tree testing tools'.",
                // German
                "Deutsch": "Das Kapitel „Validierung der Informationsarchitektur durch Tree-Tests“ und die Überprüfung „Funktioniert die Struktur Ihrer Informationen für Ihre Benutzer?“. Die Hauptthemen sind „Was ist Informationsarchitektur?“, „Wofür Tree-Tests gut sind“, „Wofür Tree-Tests nicht gut sind“, „Wann Tree-Tests durchgeführt werden sollten“, „Aufwand für diese Art von Forschung“, „Wie man Tree-Tests durchführt“ und „Tree-Testing-Tools“.",
                // Chinese
                "中国人": "本章“通过树测试进行信息架构验证”和检查“您的信息结构是否适合您的用户？”。主要主题是“什么是信息架构？”，“树测试有什么好处”，“树测试有什么坏处”，“何时进行树测试”，“进行此类研究所需的努力”，“如何进行树测试”和“树测试工具”。",
                // Russian
                "Русский": "Глава «Проверка информационной архитектуры посредством тестирования дерева» и проверка «Подходит ли структура вашей информации для ваших пользователей?». Основные темы: «Что такое информационная архитектура?», «Для чего полезно тестирование деревьев», «Для чего тестирование деревьев не годится», «Когда проводить тестирование деревьев», «Усилия, необходимые для проведения такого рода исследований». «Как выполнить тест дерева» и «Инструменты тестирования дерева».",
                // French
                "Français": "Le chapitre 'Validation de l'architecture de l'information via des tests d'arborescence' et la vérification 'La structure de vos informations fonctionne-t-elle pour vos utilisateurs ?'. Et les principaux sujets sont « Qu'est-ce que l'architecture de l'information ? », « À quoi servent les tests d'arbres », « À quoi servent les tests d'arbres », « Quand faire des tests d'arbres », « Effort requis pour faire ce type de recherche », « Comment faire un test d'arbre » et « Outils de test d'arbre ».",
                // Japanese
                "日本語": "「ツリー テストによる情報アーキテクチャの検証」の章では、「情報の構造はユーザーにとって有効か?」をチェックします。主なトピックは、「情報アーキテクチャとは何か?」、「ツリー テストが適しているもの」、「ツリー テストが適していないもの」、「ツリー テストを実行するタイミング」、「この種の調査に必要な労力」、「ツリー テストの実行方法」、「ツリー テスト ツール」です。",
                // Korean
                "한국인": "'트리 테스트를 통한 정보 아키텍처 검증' 장과 '귀하의 정보 구조가 사용자에게 적합한가?'를 확인합니다. 그리고 주요 주제는 '정보 아키텍처란 무엇인가?', '트리 테스팅은 무엇에 좋은가', '트리 테스팅은 무엇이 좋지 않은가', '트리 테스팅은 언제 해야 하는가', '이런 연구를 하려면 어떤 노력이 필요한가' 등이다. '트리 테스트 방법', '트리 테스트 도구'.",
                // Spanish
                "Español": "El capítulo 'Validación de la arquitectura de la información mediante pruebas de árbol' y la comprobación '¿La estructura de su información funciona para sus usuarios?'. Y los temas principales son '¿Qué es la arquitectura de la información?', 'Para qué son buenas las pruebas de árboles', 'Para qué no son buenas las pruebas de árboles', 'Cuándo realizar pruebas de árboles', 'Esfuerzo necesario para realizar este tipo de investigación'. 'Cómo hacer una prueba de árbol' y 'Herramientas de prueba de árbol'.",
                // Hindi
                "हिंदी": "अध्याय 'वृक्ष परीक्षण के माध्यम से सूचना वास्तुकला सत्यापन' और जाँच 'क्या आपकी सूचना की संरचना आपके उपयोगकर्ताओं के लिए काम करती है?'। और मुख्य विषय हैं 'सूचना वास्तुकला क्या है?', 'वृक्ष परीक्षण किसके लिए अच्छा है', 'वृक्ष परीक्षण किसके लिए अच्छा नहीं है', 'वृक्ष परीक्षण कब करना चाहिए', 'इस तरह के शोध करने के लिए आवश्यक प्रयास', 'वृक्ष परीक्षण कैसे करें', और 'वृक्ष परीक्षण उपकरण'।",
                // Portuguese
                "Português": "O capítulo 'Validação da arquitetura da informação por meio de testes em árvore' e verificação 'A estrutura da sua informação funciona para seus usuários?'. E os tópicos principais são 'O que é arquitetura de informação?', 'Para que testes em árvores são bons', 'Para que testes em árvores não são bons', 'Quando fazer testes em árvores', 'Esforço necessário para fazer este tipo de pesquisa', 'Como fazer um teste de árvore' e 'Ferramentas de teste de árvore'.",
                // Bengali
                "বাংলা": "অধ্যায় 'বৃক্ষ পরীক্ষার মাধ্যমে তথ্য আর্কিটেকচার বৈধতা' এবং 'আপনার তথ্যের কাঠামো আপনার ব্যবহারকারীদের জন্য কাজ করে?'। এবং প্রধান বিষয়গুলি হল 'তথ্য স্থাপত্য কী?', 'কী গাছের পরীক্ষা ভাল', 'কোন গাছের পরীক্ষা ভাল নয়', 'গাছ পরীক্ষা কখন করতে হবে', 'এই ধরণের গবেষণা করার জন্য প্রচেষ্টা প্রয়োজন', 'কীভাবে একটি গাছ পরীক্ষা করতে হয়', এবং 'বৃক্ষ পরীক্ষার সরঞ্জাম'।",
                // Arabic
                "عَرَبِيّ": "الفصل 'التحقق من صحة بنية المعلومات من خلال اختبار الشجرة' والتحقق من 'هل تعمل بنية معلوماتك مع المستخدمين؟'. والموضوعات الرئيسية هي 'ما هي هندسة المعلومات؟'، 'ما هو اختبار الشجرة المناسب'، 'ما هو اختبار الشجرة غير الجيد'، 'متى يتم إجراء اختبار الشجرة'، 'الجهد المطلوب للقيام بهذا النوع من البحث'، 'كيفية إجراء اختبار الشجرة'، و'أدوات اختبار الشجرة'.",
                // Persian
                "فارسی": "فصل 'اعتبار سنجی معماری اطلاعات از طریق آزمایش درخت' و بررسی 'آیا ساختار اطلاعات شما برای کاربران شما کار می کند؟' و موضوعات اصلی عبارتند از «معماری اطلاعات چیست؟»، «آزمایش درخت برای چه چیزی خوب است»، «تست درختی برای چه چیزی خوب نیست»، «چه زمانی آزمایش درخت انجام شود»، «تلاش لازم برای انجام این نوع تحقیقات»، 'چگونه آزمایش درخت انجام دهیم' و 'ابزارهای تست درخت'.",
            },
        },
        // 14
        {
            "ChapterName": "Ethnography: observing how people behave in the real world",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Ethnography' mainly talks about observing how people behave in the real world. Sub topics which are explained are 'What is traditional ethnography?', 'What ethnography is good for', 'What ethnography is not good for', 'When to use ethnography', 'Effort required to do this kind of research', 'How to do ethnography', 'Extending your ethnographic reach with mobile devices', and 'Ethnography tools'.",
                // German
                "Deutsch": "Im Kapitel „Ethnographie“ geht es hauptsächlich darum, zu beobachten, wie sich Menschen in der realen Welt verhalten. Unterthemen, die erläutert werden, sind „Was ist traditionelle Ethnographie?“, „Wofür ist Ethnographie gut?“, „Wofür ist Ethnographie nicht gut?“, „Wann wird Ethnographie eingesetzt?“, „Aufwand für diese Art von Forschung“, „Wie betreibt man Ethnographie?“, „Erweitern Sie Ihre ethnographische Reichweite mit mobilen Geräten“ und „Ethnographische Werkzeuge“.",
                // Chinese
                "中国人": "“民族志”一章主要讨论观察人们在现实世界中的行为方式。其中解释的子主题包括“什么是传统民族志？”，“民族志有什么用处”，“民族志有什么用处”，“何时使用民族志”，“进行此类研究所需的努力”，“如何进行民族志”，“使用移动设备扩展您的民族志范围”和“民族志工具”。",
                // Russian
                "Русский": "В главе «Этнография» в основном говорится о наблюдении за поведением людей в реальном мире. Объясняются следующие подтемы: «Что такое традиционная этнография?», «Для чего хороша этнография», «Для чего этнография не годится», «Когда использовать этнографию», «Усилия, необходимые для проведения такого рода исследований», « Как заниматься этнографией», «Расширение этнографических возможностей с помощью мобильных устройств» и «Инструменты этнографии».",
                // French
                "Français": "Le chapitre « Ethnographie » parle principalement de l'observation du comportement des gens dans le monde réel. Les sous-thèmes expliqués sont « Qu'est-ce que l'ethnographie traditionnelle ? », « À quoi sert l'ethnographie », « À quoi sert l'ethnographie n'est-elle pas bonne », « Quand utiliser l'ethnographie », « Effort requis pour faire ce type de recherche », « Comment faire de l'ethnographie », « Étendre votre portée ethnographique avec des appareils mobiles » et « Outils d'ethnographie ».",
                // Japanese
                "日本語": "「民族誌」の章では、主に現実世界で人々がどのように行動するかを観察することについて説明しています。説明されているサブトピックは、「伝統的な民族誌とは何か」、「民族誌が適しているもの」、「民族誌が適していないもの」、「民族誌を使用するタイミング」、「この種の調査を行うために必要な労力」、「民族誌の実施方法」、「モバイルデバイスを使用して民族誌の範囲を拡大する」、「民族誌ツール」です。",
                // Korean
                "한국인": "'민족지학' 장에서는 주로 사람들이 현실 세계에서 어떻게 행동하는지 관찰하는 방법에 대해 설명합니다. 설명된 하위 주제는 '전통적 민족지학이란 무엇인가?', '민족지학은 무엇에 좋은가', '민족지는 무엇에 적합하지 않은가', '민족지학은 언제 사용해야 하는가', '이런 연구를 하려면 노력이 필요하다', ' 민족지학 수행 방법', '모바일 기기로 민족지학 범위 확장', '민족지학 도구'.",
                // Spanish
                "Español": "El capítulo 'Etnografía' habla principalmente de observar cómo se comportan las personas en el mundo real. Los subtemas que se explican son '¿Qué es la etnografía tradicional?', 'Para qué es buena la etnografía', 'Para qué no es buena la etnografía', 'Cuándo usar la etnografía', 'Esfuerzo requerido para realizar este tipo de investigación', ' Cómo hacer etnografía', 'Ampliando su alcance etnográfico con dispositivos móviles' y 'Herramientas de etnografía'.",
                // Hindi
                "हिंदी": "अध्याय 'नृवंशविज्ञान' मुख्य रूप से यह देखने के बारे में बात करता है कि लोग वास्तविक दुनिया में कैसे व्यवहार करते हैं। जिन उप-विषयों को समझाया गया है, वे हैं 'पारंपरिक नृवंशविज्ञान क्या है?', 'नृवंशविज्ञान किसके लिए अच्छा है', 'नृवंशविज्ञान किसके लिए अच्छा नहीं है', 'नृवंशविज्ञान का उपयोग कब करें', 'इस तरह के शोध करने के लिए आवश्यक प्रयास', 'नृवंशविज्ञान कैसे करें', 'मोबाइल उपकरणों के साथ अपनी नृवंशविज्ञान पहुंच का विस्तार करना', और 'नृवंशविज्ञान उपकरण'।",
                // Portuguese
                "Português": "O capítulo 'Etnografia' fala principalmente sobre a observação de como as pessoas se comportam no mundo real. Os subtópicos explicados são 'O que é etnografia tradicional?', 'Para que serve a etnografia', 'Para que serve a etnografia', 'Quando usar a etnografia', 'Esforço necessário para fazer este tipo de pesquisa', ' Como fazer etnografia', 'Ampliando seu alcance etnográfico com dispositivos móveis' e 'Ferramentas de etnografia'.",
                // Bengali
                "বাংলা": "'এথনোগ্রাফি' অধ্যায়টি মূলত বাস্তব জগতে মানুষ কীভাবে আচরণ করে তা পর্যবেক্ষণ করার কথা বলে। যে উপ-বিষয়গুলি ব্যাখ্যা করা হয়েছে তা হল 'প্রথাগত নৃতাত্ত্বিকতা কী?', 'কোন নৃতত্ত্বের জন্য ভাল', 'কোন নৃতত্ত্বের জন্য ভাল নয়', 'কখন নৃতত্ত্ব ব্যবহার করতে হবে', 'এই ধরণের গবেষণা করার জন্য প্রচেষ্টা প্রয়োজন', ' কীভাবে নৃতাত্ত্বিক কাজ করবেন', 'মোবাইল ডিভাইসের মাধ্যমে আপনার নৃতাত্ত্বিক প্রাপ্তি প্রসারিত করা', এবং 'এথনোগ্রাফি সরঞ্জাম'।",
                // Arabic
                "عَرَبِيّ": "يتحدث فصل 'الإثنوغرافيا' بشكل أساسي عن ملاحظة كيفية تصرف الناس في العالم الحقيقي. المواضيع الفرعية التي تم شرحها هي 'ما هي الإثنوغرافيا التقليدية؟'، 'ما هي الإثنوغرافيا الجيدة؟'، 'ما هي الإثنوغرافيا غير الجيدة'، 'متى تستخدم الإثنوغرافيا'، 'الجهد المطلوب للقيام بهذا النوع من البحث'، ' 'كيفية القيام بالإثنوغرافيا'، و'توسيع نطاق وصولك الإثنوغرافي باستخدام الأجهزة المحمولة'، و'أدوات الإثنوغرافيا'.",
                // Persian
                "فارسی": "فصل «اتنوگرافی» عمدتاً در مورد مشاهده نحوه رفتار مردم در دنیای واقعی صحبت می کند. عناوین فرعی که توضیح داده می شوند عبارتند از: «مردم نگاری سنتی چیست؟»، «مردم نگاری برای چه چیزی خوب است»، «مردم نگاری برای چه چیزی خوب نیست»، «زمان استفاده از مردم نگاری»، «تلاش لازم برای انجام این نوع پژوهش»، چگونه مردم نگاری انجام دهیم، «توسعه دسترسی مردم نگاری خود را با دستگاه های تلفن همراه»، و «ابزارهای مردم نگاری».",
            },
        },
        // 15
        {
            "ChapterName": "Contextual inquiry: interviewing people in their own environment",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 'Contextual inquiry' is dedicated to interviewing people in their own environment. It talks about 'What is contextual inquiry?', 'What contextual inquiry is good for', 'What contextual inquiry is not good for', 'When to use contextual inquiry' and a case study, 'Effort required to do this kind of research', 'How to do contextual inquiry', and 'Tools'. ",
                // German
                "Deutsch": "Das Kapitel „Kontextuelle Untersuchung“ ist der Befragung von Personen in ihrem eigenen Umfeld gewidmet. Es behandelt die Themen „Was ist kontextuelle Untersuchung?“, „Wofür ist kontextuelle Untersuchung gut?“, „Wofür ist kontextuelle Untersuchung nicht gut?“, „Wann sollte kontextuelle Untersuchung verwendet werden?“ und eine Fallstudie, „Aufwand für diese Art von Forschung“, „Wie wird kontextuelle Untersuchung durchgeführt?“ und „Tools“.",
                // Chinese
                "中国人": "“情境调查”一章专门用于在人们自己的环境中对他们进行采访。它讨论了“什么是情境调查？”，“情境调查有什么用处”，“情境调查有什么用处”，“何时使用情境调查”和案例研究，“进行这种研究所需的努力”，“如何进行情境调查”和“工具”。",
                // Russian
                "Русский": "Глава «Контекстное исследование» посвящена интервьюированию людей в их собственном окружении. В нем говорится о том, «Что такое контекстное исследование?», «Для чего полезно контекстное исследование», «Для чего контекстное исследование не годится», «Когда использовать контекстное исследование», а также приводится тематическое исследование «Усилия, необходимые для выполнения такого рода исследования». исследования», «Как проводить контекстуальные исследования» и «Инструменты».",
                // French
                "Français": "Le chapitre « Enquête contextuelle » est consacré aux entretiens avec des personnes dans leur propre environnement. Il parle de « Qu'est-ce que l'enquête contextuelle ? », « À quoi sert l'enquête contextuelle », « À quoi sert l'enquête contextuelle ? », « Quand utiliser l'enquête contextuelle » et une étude de cas, « Effort requis pour faire ce genre d'enquête ». recherche », « Comment mener une enquête contextuelle » et « Outils ».",
                // Japanese
                "日本語": "「文脈的調査」の章は、人々をそれぞれの環境でインタビューすることに焦点を当てています。この章では、「文脈的調査とは何か」、「文脈的調査が適しているもの」、「文脈的調査が適していないもの」、「文脈的調査をいつ使用するか」とケーススタディ、「この種の調査を行うために必要な労力」、「文脈的調査の実施方法」、「ツール」について説明します。",
                // Korean
                "한국인": "'상황별 탐구' 장은 자신의 환경에서 사람들을 인터뷰하는 데 전념합니다. '맥락 탐구란 무엇인가?', '맥락 탐구는 무엇에 좋은가', '맥락 탐구는 무엇이 좋지 않은가', '맥락 탐구는 언제 사용해야 하는가', 그리고 '이런 일을 하기 위해 필요한 노력'에 대해 사례 연구로 이야기하고 있다. 연구', '맥락적 탐구를 수행하는 방법', '도구'입니다.",
                // Spanish
                "Español": "El capítulo 'Investigación contextual' está dedicado a entrevistar a personas en su propio entorno. Habla sobre '¿Qué es la investigación contextual?', '¿Para qué es buena la investigación contextual?', '¿Para qué no es buena la investigación contextual?', 'Cuándo usar la investigación contextual' y un estudio de caso, 'Esfuerzo requerido para hacer este tipo de investigación'. investigación', 'Cómo realizar una investigación contextual' y 'Herramientas'.",
                // Hindi
                "हिंदी": "अध्याय 'संदर्भगत जांच' लोगों से उनके अपने परिवेश में साक्षात्कार करने के लिए समर्पित है। इसमें 'संदर्भगत जांच क्या है?', 'संदर्भगत जांच किसके लिए अच्छी है', 'संदर्भगत जांच किसके लिए अच्छी नहीं है', 'संदर्भगत जांच का उपयोग कब करें' और एक केस स्टडी, 'इस तरह के शोध को करने के लिए आवश्यक प्रयास', 'संदर्भगत जांच कैसे करें' और 'उपकरण' के बारे में बात की गई है।",
                // Portuguese
                "Português": "O capítulo 'Investigação contextual' é dedicado a entrevistar pessoas no seu próprio ambiente. Ele fala sobre 'O que é a investigação contextual?', 'Para que a investigação contextual é boa', 'Para que a investigação contextual não é boa', 'Quando usar a investigação contextual' e um estudo de caso, 'Esforço necessário para fazer este tipo de pesquisa', 'Como fazer investigação contextual' e 'Ferramentas'.",
                // Bengali
                "বাংলা": "অধ্যায় 'প্রসঙ্গিক অনুসন্ধান' তাদের নিজস্ব পরিবেশে লোকেদের সাক্ষাৎকারের জন্য নিবেদিত। এটি 'প্রসঙ্গগত তদন্ত কী?', 'প্রসঙ্গিক অনুসন্ধান কীসের জন্য ভাল', 'কোন প্রাসঙ্গিক অনুসন্ধানের জন্য ভাল নয়', 'কখন প্রাসঙ্গিক অনুসন্ধান ব্যবহার করতে হবে' এবং একটি কেস স্টাডি, 'এই ধরনের কাজ করার জন্য প্রচেষ্টার প্রয়োজন' সম্পর্কে কথা বলে। গবেষণা', 'কীভাবে প্রাসঙ্গিক অনুসন্ধান করতে হয়', এবং 'সরঞ্জাম'।",
                // Arabic
                "عَرَبِيّ": "الفصل 'الاستقصاء السياقي' مخصص لإجراء مقابلات مع الأشخاص في بيئتهم الخاصة. يتحدث عن 'ما هو الاستقصاء السياقي؟'، 'ما هو الاستقصاء السياقي المناسب؟'، 'ما الاستقصاء السياقي الذي لا يناسبه'، 'متى يتم استخدام الاستقصاء السياقي' ودراسة الحالة، 'الجهد المطلوب للقيام بهذا النوع من الاستقصاء'. البحث'، و'كيفية إجراء الاستقصاء السياقي'، و'الأدوات'.",
                // Persian
                "فارسی": "فصل «پژوهش زمینه‌ای» به مصاحبه با افراد در محیط خودشان اختصاص دارد. در مورد «پرسش زمینه‌ای چیست؟»، «پرسش زمینه‌ای برای چه چیزی خوب است»، «جستجوی زمینه‌ای برای چه چیزی خوب نیست»، «زمان استفاده از تحقیق زمینه‌ای» و یک مطالعه موردی، «تلاش لازم برای انجام این نوع کارها» صحبت می‌کند. تحقیق، «چگونگی انجام تحقیق زمینه ای» و «ابزار».",
            },
        },
        // 16
        {
            "ChapterName": "A/B testing: a technique to compare options",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In chapter 'A/B testing' teaches the A/B testing technique which is a good choice for comparing options. The related sub-topics are 'What is A/B testing?', 'What A/B testing is good for', 'What A/B testing is not good for', 'When to use A/B testing', 'Effort required to do this kind of research', 'How to do A/B testing', and 'Tools for A/B testing'.",
                // German
                "Deutsch": "Im Kapitel „A/B-Tests“ wird die A/B-Testtechnik gelehrt, die sich gut zum Vergleichen von Optionen eignet. Die zugehörigen Unterthemen sind „Was sind A/B-Tests?“, „Wofür sind A/B-Tests gut?“, „Wofür sind A/B-Tests nicht gut?“, „Wann werden A/B-Tests verwendet?“, „Aufwand für diese Art von Forschung“, „Wie werden A/B-Tests durchgeführt?“ und „Tools für A/B-Tests“.",
                // Chinese
                "中国人": "“A/B 测试”一章讲授了 A/B 测试技术，这是比较选项的不错选择。相关子主题包括“什么是 A/B 测试？”，“A/B 测试有什么用处”，“A/B 测试有什么用处”，“何时使用 A/B 测试”，“进行此类研究所需的努力”，“如何进行 A/B 测试”和“A/B 测试工具”。",
                // Russian
                "Русский": "В главе «A/B-тестирование» рассказывается о технике A/B-тестирования, которая является хорошим выбором для сравнения вариантов. Связанные подтемы: «Что такое A/B-тестирование?», «Для чего A/B-тестирование полезно», «Для чего A/B-тестирование не подходит», «Когда использовать A/B-тестирование», Усилия, необходимые для проведения такого рода исследований», «Как проводить A/B-тестирование» и «Инструменты для A/B-тестирования».",
                // French
                "Français": "Le chapitre « Tests A/B » enseigne la technique de test A/B qui constitue un bon choix pour comparer les options. Les sous-thèmes associés sont « Qu'est-ce que les tests A/B ? », « À quoi servent les tests A/B », « À quoi servent les tests A/B », « Quand utiliser les tests A/B », « Effort requis pour effectuer ce type de recherche », « Comment effectuer des tests A/B » et « Outils pour les tests A/B ».",
                // Japanese
                "日本語": "「A/B テスト」の章では、オプションを比較するのに適した A/B テスト手法について学習します。関連するサブトピックは、「A/B テストとは何か」、「A/B テストが適しているもの」、「A/B テストが適していないもの」、「A/B テストを使用するタイミング」、「この種の調査に必要な労力」、「A/B テストの実施方法」、「A/B テストのツール」です。",
                // Korean
                "한국인": "'A/B 테스트' 장에서는 옵션을 비교하는 데 적합한 A/B 테스트 기술을 가르칩니다. 관련 하위 주제로는 'A/B 테스팅이란 무엇인가?', 'A/B 테스팅이 좋은 점', 'A/B 테스팅이 좋지 않은 점', 'A/B 테스팅을 언제 사용해야 하는가', ' 이런 연구를 하기 위해서는 노력이 필요하다', 'A/B 테스트를 하는 방법', 'A/B 테스트를 위한 도구'.",
                // Spanish
                "Español": "En el capítulo 'Pruebas A/B' se enseña la técnica de prueba A/B, que es una buena opción para comparar opciones. Los subtemas relacionados son '¿Qué son las pruebas A/B?', 'Para qué son buenas las pruebas A/B', 'Para qué no son buenas las pruebas A/B', 'Cuándo usar las pruebas A/B', ' Esfuerzo necesario para realizar este tipo de investigación', 'Cómo realizar pruebas A/B' y 'Herramientas para pruebas A/B'.",
                // Hindi
                "हिंदी": "अध्याय 'ए/बी परीक्षण' में ए/बी परीक्षण तकनीक सिखाई जाती है जो विकल्पों की तुलना करने के लिए एक अच्छा विकल्प है। संबंधित उप-विषय हैं 'ए/बी परीक्षण क्या है?', 'ए/बी परीक्षण किसके लिए अच्छा है', 'ए/बी परीक्षण किसके लिए अच्छा नहीं है', 'ए/बी परीक्षण का उपयोग कब करें', 'इस तरह के शोध करने के लिए आवश्यक प्रयास', 'ए/बी परीक्षण कैसे करें', और 'ए/बी परीक्षण के लिए उपकरण'।",
                // Portuguese
                "Português": "No capítulo 'Teste A/B' ensina a técnica de teste A/B que é uma boa escolha para comparar opções. Os subtópicos relacionados são 'O que é o teste A/B?', 'Para que o teste A/B é bom', 'Para que o teste A/B não é bom', 'Quando usar o teste A/B', ' Esforço necessário para fazer este tipo de pesquisa', 'Como fazer testes A/B' e 'Ferramentas para testes A/B'.",
                // Bengali
                "বাংলা": "অধ্যায়ে 'A/B টেস্টিং' A/B পরীক্ষার কৌশল শেখায় যা বিকল্পগুলির তুলনা করার জন্য একটি ভাল পছন্দ। সম্পর্কিত উপ-বিষয়গুলি হল 'A/B টেস্টিং কী?', 'কীসের জন্য A/B পরীক্ষা ভাল', 'কীসের জন্য A/B পরীক্ষা ভাল নয়', 'A/B পরীক্ষা কখন ব্যবহার করবেন', ' এই ধরনের গবেষণা করার জন্য প্রয়োজনীয় প্রচেষ্টা', 'কীভাবে A/B টেস্টিং করতে হয়', এবং 'A/B পরীক্ষার জন্য টুলস'।",
                // Arabic
                "عَرَبِيّ": "في الفصل 'اختبار A/B' يتم تعليم تقنية اختبار A/B التي تعد خيارًا جيدًا لمقارنة الخيارات. المواضيع الفرعية ذات الصلة هي 'ما هو اختبار A/B؟'، 'ما هو اختبار A/B المناسب'، 'ما هو اختبار A/B غير الجيد'، 'متى يتم استخدام اختبار A/B'، ' الجهد المطلوب للقيام بهذا النوع من البحث، و'كيفية إجراء اختبار أ/ب'، و'أدوات اختبار أ/ب'.",
                // Persian
                "فارسی": "در فصل 'آزمایش A/B' تکنیک تست A/B را آموزش می‌دهد که انتخاب خوبی برای مقایسه گزینه‌ها است. موضوعات فرعی مرتبط عبارتند از: «تست A/B چیست؟»، «تست A/B برای چه چیزی خوب است»، «تست A/B برای چه چیزی خوب نیست»، «زمان استفاده از تست A/B»، « تلاش برای انجام این نوع تحقیقات، «چگونه تست A/B انجام دهیم» و «ابزار برای تست A/B» نیاز است.",
            },
        },
        // 17
        {
            "ChapterName": "Getting the best out of stakeholder workshops",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter, 'Getting the best out of stakeholder workshops', will explain the stakeholder workshop and tells what it is, what it is good for, what it is not good for, when it should be used, necessary efforts to do this kind of research, how to run a workshop, and tools which are necessary to do the face-to-face workshop.",
                // German
                "Deutsch": "In diesem Kapitel „Das Beste aus Stakeholder-Workshops herausholen“ werden Stakeholder-Workshops erläutert und beschrieben, was sie sind, wofür sie gut sind und wofür sie nicht gut sind, wann sie eingesetzt werden sollten, welcher Aufwand für diese Art von Forschung notwendig ist, wie ein Workshop durchgeführt wird und welche Tools für die Durchführung von Präsenzworkshops erforderlich sind.",
                // Chinese
                "中国人": "本章“充分利用利益相关者研讨会”将解释利益相关者研讨会，并说明它是什么、它有什么好处、它有什么坏处、什么时候应该使用、进行此类研究需要付出的努力、如何运行研讨会，以及进行面对面研讨会所需的工具。",
                // Russian
                "Русский": "В этой главе «Как получить максимальную отдачу от семинаров с заинтересованными сторонами» будут объяснены семинары с заинтересованными сторонами и рассказано, что это такое, для чего они хороши, для чего они не годятся, когда их следует использовать, какие усилия необходимо предпринять для проведения такого рода семинаров. исследование, как провести семинар и инструменты, необходимые для проведения очного семинара.",
                // French
                "Français": "Ce chapitre, « Tirer le meilleur parti des ateliers avec les parties prenantes », expliquera l'atelier des parties prenantes et indiquera ce que c'est, à quoi il sert, à quoi il ne sert pas, quand il doit être utilisé, les efforts nécessaires pour réaliser ce type d'atelier. recherche, comment animer un atelier et les outils nécessaires pour réaliser l'atelier en face à face.",
                // Japanese
                "日本語": "この章「ステークホルダー ワークショップを最大限に活用する」では、ステークホルダー ワークショップについて説明し、それが何であるか、何に適しているか、何に適しているわけではないか、いつ使用すべきか、この種の調査を行うために必要な取り組み、ワークショップの運営方法、対面ワークショップを行うために必要なツールについて説明します。",
                // Korean
                "한국인": "이번 장 '이해관계자 워크숍 최대한 활용하기'에서는 이해관계자 워크숍에 대해 설명하고 그것이 무엇이고, 무엇이 좋고, 무엇이 좋지 않은지, 언제 사용해야 하는지, 이러한 워크숍을 위해 필요한 노력을 알려줄 것입니다. 연구, 워크숍 운영 방법, 대면 워크숍을 수행하는 데 필요한 도구.",
                // Spanish
                "Español": "Este capítulo, 'Obtener lo mejor de los talleres de partes interesadas', explicará el taller de partes interesadas y dirá qué es, para qué es bueno, para qué no es bueno, cuándo se debe utilizar, los esfuerzos necesarios para realizar este tipo de talleres. investigación, cómo llevar a cabo un taller y herramientas necesarias para realizar el taller presencial.",
                // Hindi
                "हिंदी": "यह अध्याय, 'हितधारक कार्यशालाओं से सर्वोत्तम लाभ प्राप्त करना', हितधारक कार्यशाला के बारे में बताएगा और बताएगा कि यह क्या है, यह किसके लिए अच्छा है, यह किसके लिए अच्छा नहीं है, इसका उपयोग कब किया जाना चाहिए, इस प्रकार के अनुसंधान करने के लिए आवश्यक प्रयास, कार्यशाला कैसे चलायी जाए, तथा आमने-सामने की कार्यशाला करने के लिए आवश्यक उपकरण।",
                // Portuguese
                "Português": "Este capítulo, 'Tirando o melhor proveito dos workshops das partes interessadas', explicará o workshop das partes interessadas e dirá o que é, para que serve, para que não serve, quando deve ser usado, os esforços necessários para fazer este tipo de pesquisa, como realizar um workshop e ferramentas necessárias para realizar o workshop presencial.",
                // Bengali
                "বাংলা": "এই অধ্যায়, 'স্টেকহোল্ডার ওয়ার্কশপ থেকে সেরাটা পাওয়া', স্টেকহোল্ডার ওয়ার্কশপকে ব্যাখ্যা করবে এবং বলবে এটি কী, এটি কীসের জন্য ভাল, এটি কীসের জন্য ভাল নয়, কখন এটি ব্যবহার করা উচিত, এই ধরনের করার প্রয়োজনীয় প্রচেষ্টা গবেষণা, কিভাবে একটি ওয়ার্কশপ চালাতে হয়, এবং সামনাসামনি ওয়ার্কশপ করার জন্য প্রয়োজনীয় সরঞ্জামগুলি।",
                // Arabic
                "عَرَبِيّ": "هذا الفصل، 'الحصول على أفضل النتائج من ورش عمل أصحاب المصلحة'، سوف يشرح ورشة عمل أصحاب المصلحة ويخبرنا ما هي، وما هو جيد، وما هو غير جيد، ومتى يجب استخدامه، والجهود اللازمة للقيام بهذا النوع من البحث، وكيفية إدارة ورشة العمل، والأدوات اللازمة للقيام بورشة العمل وجهاً لوجه.",
                // Persian
                "فارسی": "این فصل، «بهره‌گیری از کارگاه‌های ذینفعان»، کارگاه ذینفعان را توضیح می‌دهد و می‌گوید که چیست، برای چه چیزی خوب است، برای چه چیزی خوب نیست، چه زمانی باید از آن استفاده کرد، تلاش‌های لازم برای انجام این نوع کارها. تحقیق، نحوه اجرای کارگاه و ابزارهای لازم برای انجام کارگاه حضوری.",
            },
        },
        // 18
        {
            "ChapterName": "Guerrilla research: running fast-paced research in the real world",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Guerrilla research' is mainly focused on running fast-paced research in the real world. The book talks about what it is, what it is good for, what it is not good for, when it should be used, the required efforts to do this kind of research, how it should be done, and the necessary tools which could be used to do this kind of research.",
                // German
                "Deutsch": "Das Kapitel „Guerillaforschung“ konzentriert sich hauptsächlich auf die Durchführung von schnellem Forschungsbetrieb in der realen Welt. Das Buch spricht darüber, was Guerillaforschung ist, wofür sie gut ist, wofür sie nicht gut ist, wann sie eingesetzt werden sollte, welchen Aufwand diese Art von Forschung erfordert, wie sie durchgeführt werden sollte und welche notwendigen Werkzeuge für diese Art von Forschung verwendet werden könnten.",
                // Chinese
                "中国人": "“游击研究”一章主要关注在现实世界中进行快节奏的研究。本书讨论了它是什么、它有什么好处、它有什么坏处、什么时候应该使用它、进行这种研究所需的努力、应该如何进行，以及进行这种研究可以使用的必要工具。",
                // Russian
                "Русский": "Глава «Партизанские исследования» в основном посвящена проведению быстрых исследований в реальном мире. В книге рассказывается о том, что это такое, для чего оно полезно и для чего оно не годится, когда его следует использовать, какие усилия необходимы для проведения такого рода исследований, как их следует проводить, а также необходимые инструменты, которые можно было бы использовать. раньше проводил подобные исследования.",
                // French
                "Français": "Le chapitre « Recherche sur la guérilla » se concentre principalement sur la conduite de recherches rapides dans le monde réel. Le livre parle de ce qu'il est, de ce à quoi il est bon, de ce à quoi il ne l'est pas, du moment où il doit être utilisé, des efforts requis pour effectuer ce type de recherche, de la manière dont cela doit être effectué et des outils nécessaires qui pourraient être utilisés. j'avais l'habitude de faire ce genre de recherche.",
                // Japanese
                "日本語": "「ゲリラ研究」の章は、主に現実世界での急速な研究の実施に焦点を当てています。本書では、ゲリラ研究とは何か、何に適しているか、何に適していないか、いつ使用すべきか、この種の研究を行うために必要な努力、どのように行うべきか、この種の研究を行うために使用できる必要なツールについて説明しています。",
                // Korean
                "한국인": "'게릴라 연구' 장은 주로 현실 세계에서 빠르게 진행되는 연구를 진행하는 데 초점을 맞추고 있습니다. 이 책은 그것이 무엇인지, 무엇이 좋은지, 무엇이 좋지 않은지, 언제 사용해야 하는지, 이런 종류의 연구를 수행하는 데 필요한 노력, 어떻게 수행해야 하는지, 그리고 이를 수행하는 데 필요한 도구에 대해 이야기합니다. 이런 종류의 연구를 하곤 했죠.",
                // Spanish
                "Español": "El capítulo 'Investigación de guerrilla' se centra principalmente en realizar investigaciones de ritmo rápido en el mundo real. El libro habla de qué es, para qué sirve, para qué no sirve, cuándo debe utilizarse, los esfuerzos necesarios para realizar este tipo de investigación, cómo debe realizarse y las herramientas necesarias que podrían utilizarse. solía hacer este tipo de investigación.",
                // Hindi
                "हिंदी": "'गुरिल्ला रिसर्च' अध्याय मुख्य रूप से वास्तविक दुनिया में तेज़ गति से शोध करने पर केंद्रित है। पुस्तक इस बारे में बात करती है कि यह क्या है, यह किस काम के लिए अच्छा है, यह किस काम के लिए अच्छा नहीं है, इसका उपयोग कब किया जाना चाहिए, इस तरह के शोध को करने के लिए आवश्यक प्रयास, इसे कैसे किया जाना चाहिए, और इस तरह के शोध को करने के लिए आवश्यक उपकरण क्या हैं।",
                // Portuguese
                "Português": "O capítulo 'Pesquisa de Guerrilha' concentra-se principalmente na realização de pesquisas em ritmo acelerado no mundo real. O livro fala sobre o que é, para que serve, para que não serve, quando deve ser usado, os esforços necessários para fazer esse tipo de pesquisa, como deve ser feito e as ferramentas necessárias que podem ser costumava fazer esse tipo de pesquisa.",
                // Bengali
                "বাংলা": "'গেরিলা গবেষণা' অধ্যায়টি মূলত বাস্তব জগতে দ্রুত গতির গবেষণা চালানোর উপর দৃষ্টি নিবদ্ধ করে। বইটি এটি কী, এটি কীসের জন্য ভাল, কীসের জন্য এটি ভাল নয়, কখন এটি ব্যবহার করা উচিত, এই ধরণের গবেষণা করার প্রয়োজনীয় প্রচেষ্টা, এটি কীভাবে করা উচিত এবং প্রয়োজনীয় সরঞ্জামগুলি যা হতে পারে সে সম্পর্কে কথা বলে। এই ধরনের গবেষণা করতে ব্যবহৃত.",
                // Arabic
                "عَرَبِيّ": "يركز فصل 'أبحاث حرب العصابات' بشكل أساسي على إجراء أبحاث سريعة الخطى في العالم الحقيقي. ويتحدث الكتاب عن ماهيته، وما يصلح وما لا يصلح، ومتى يجب استخدامه، والجهود المطلوبة للقيام بهذا النوع من البحث، وكيف ينبغي القيام به، والأدوات اللازمة التي يمكن استخدامها. تستخدم للقيام بهذا النوع من البحوث.",
                // Persian
                "فارسی": "فصل 'تحقیقات چریکی' عمدتاً بر اجرای تحقیقات سریع در دنیای واقعی متمرکز است. کتاب در مورد چیستی آن، چه چیزی خوب است، چه چیزی خوب نیست، چه زمانی باید از آن استفاده کرد، تلاش های لازم برای انجام این نوع تحقیق، نحوه انجام آن و ابزارهای لازم که می تواند انجام شود، صحبت می کند. برای انجام این نوع تحقیقات استفاده می شود.",
            },
        },
        // 19
        {
            "ChapterName": "How to combine user research methodologies",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter is a kind of recap chapter that is focused on how to combine all previously learned user research methodologies. It talks about where you should start and when you should advocate user research, common research scenarios, and combining methodologies.",
                // German
                "Deutsch": "Dieses Kapitel ist eine Art Zusammenfassungskapitel, das sich darauf konzentriert, wie Sie alle zuvor erlernten Methoden der Benutzerforschung kombinieren können. Es geht darum, wo Sie beginnen sollten und wann Sie sich für Benutzerforschung einsetzen sollten, um gängige Forschungsszenarien und die Kombination von Methoden.",
                // Chinese
                "中国人": "本章是一种回顾性的章节，重点介绍如何结合之前学到的所有用户研究方法。它讨论了您应该从哪里开始以及何时应该提倡用户研究、常见的研究场景以及结合方法。",
                // Russian
                "Русский": "Эта глава представляет собой своего рода обзорную главу, посвященную тому, как объединить все ранее изученные методологии исследования пользователей. В нем говорится о том, с чего вам следует начать и когда следует пропагандировать исследования пользователей, общие сценарии исследований и комбинирование методологий.",
                // French
                "Français": "Ce chapitre est une sorte de chapitre récapitulatif qui se concentre sur la façon de combiner toutes les méthodologies de recherche d'utilisateurs précédemment apprises. Il explique par où commencer et quand préconiser la recherche sur les utilisateurs, les scénarios de recherche courants et la combinaison de méthodologies.",
                // Japanese
                "日本語": "この章は、これまでに学習したすべてのユーザー リサーチ方法論を組み合わせる方法に焦点を当てた、一種の要約章です。ユーザー リサーチをどこから開始し、いつ推進すべきか、一般的なリサーチ シナリオ、および方法論の組み合わせについて説明します。",
                // Korean
                "한국인": "이 장은 이전에 배운 모든 사용자 조사 방법론을 결합하는 방법에 초점을 맞춘 일종의 요약 장입니다. 어디에서 시작해야 하는지, 언제 사용자 연구, 일반적인 연구 시나리오 및 방법론 결합을 옹호해야 하는지에 대해 설명합니다.",
                // Spanish
                "Español": "Este capítulo es una especie de capítulo de resumen que se centra en cómo combinar todas las metodologías de investigación de usuarios aprendidas previamente. Habla sobre dónde debe comenzar y cuándo debe promover la investigación de usuarios, escenarios de investigación comunes y combinación de metodologías.",
                // Hindi
                "हिंदी": "यह अध्याय एक तरह का पुनर्कथन अध्याय है जो इस बात पर केंद्रित है कि पहले से सीखी गई सभी उपयोगकर्ता शोध पद्धतियों को कैसे संयोजित किया जाए। यह इस बारे में बात करता है कि आपको कहां से शुरुआत करनी चाहिए और आपको उपयोगकर्ता शोध, सामान्य शोध परिदृश्यों और पद्धतियों को संयोजित करने की वकालत कब करनी चाहिए।",
                // Portuguese
                "Português": "Este capítulo é uma espécie de capítulo de recapitulação que se concentra em como combinar todas as metodologias de pesquisa de usuário aprendidas anteriormente. Ele fala sobre por onde você deve começar e quando deve defender a pesquisa de usuários, cenários de pesquisa comuns e combinação de metodologias.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি এক ধরনের রিক্যাপ অধ্যায় যা পূর্বে শেখা সমস্ত ব্যবহারকারীর গবেষণা পদ্ধতিগুলিকে একত্রিত করার উপর দৃষ্টি নিবদ্ধ করে। এটি আপনার কোথায় শুরু করা উচিত এবং কখন আপনার ব্যবহারকারীর গবেষণা, সাধারণ গবেষণার পরিস্থিতি এবং একত্রিত পদ্ধতির পরামর্শ দেওয়া উচিত সে সম্পর্কে কথা বলে।",
                // Arabic
                "عَرَبِيّ": "هذا الفصل هو نوع من الفصول الموجزة التي تركز على كيفية الجمع بين جميع منهجيات بحث المستخدم التي تم تعلمها مسبقًا. يتحدث عن المكان الذي يجب أن تبدأ فيه ومتى يجب عليك الدعوة إلى بحث المستخدم وسيناريوهات البحث الشائعة والجمع بين المنهجيات.",
                // Persian
                "فارسی": "این فصل نوعی فصل خلاصه است که بر نحوه ترکیب همه روش‌های تحقیق کاربر قبلاً آموخته شده متمرکز است. در مورد اینکه از کجا باید شروع کنید و چه زمانی باید از تحقیقات کاربر، سناریوهای تحقیقاتی رایج و ترکیب روش‌ها حمایت کنید صحبت می‌کند.",
            },
        },
        // 20
        {
            "ChapterName": "Content analysis: understanding your qualitative data",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter 'Content analysis' is highly focused on understanding your qualitative data. It talks about how you could code your qualitative data, how content analysis could be done, what advantages and disadvantages content analysis has, and the necessary tools for this type of analysis.",
                // German
                "Deutsch": "Das Kapitel „Inhaltsanalyse“ konzentriert sich stark auf das Verständnis Ihrer qualitativen Daten. Es geht darum, wie Sie Ihre qualitativen Daten kodieren können, wie eine Inhaltsanalyse durchgeführt werden kann, welche Vor- und Nachteile die Inhaltsanalyse hat und welche Werkzeuge für diese Art der Analyse erforderlich sind.",
                // Chinese
                "中国人": "“内容分析”一章主要关注于理解定性数据。它讨论了如何对定性数据进行编码、如何进行内容分析、内容分析有哪些优点和缺点以及此类分析所需的工具。",
                // Russian
                "Русский": "Глава «Контент-анализ» посвящена пониманию качественных данных. В нем говорится о том, как можно закодировать качественные данные, как можно провести контент-анализ, какие преимущества и недостатки имеет контент-анализ, а также необходимые инструменты для этого типа анализа.",
                // French
                "Français": "El capítulo 'Análisis de contenido' está muy centrado en comprender sus datos cualitativos. Habla de cómo podrías codificar tus datos cualitativos, cómo se podría hacer el análisis de contenido, qué ventajas y desventajas tiene el análisis de contenido y las herramientas necesarias para este tipo de análisis.",
                // Japanese
                "日本語": "「コンテンツ分析」の章では、質的データを理解することに重点を置いています。質的データをコード化する方法、コンテンツ分析を実行する方法、コンテンツ分析の利点と欠点、このタイプの分析に必要なツールについて説明します。",
                // Korean
                "한국인": "'콘텐츠 분석' 장에서는 정성적 데이터를 이해하는 데 중점을 둡니다. 정성적 데이터를 코딩하는 방법, 콘텐츠 분석을 수행하는 방법, 콘텐츠 분석의 장점과 단점, 이러한 유형의 분석에 필요한 도구에 대해 설명합니다.",
                // Spanish
                "Español": "El capítulo 'Análisis de contenido' está muy centrado en comprender sus datos cualitativos. Habla de cómo podrías codificar tus datos cualitativos, cómo se podría hacer el análisis de contenido, qué ventajas y desventajas tiene el análisis de contenido y las herramientas necesarias para este tipo de análisis.",
                // Hindi
                "हिंदी": "'सामग्री विश्लेषण' अध्याय आपके गुणात्मक डेटा को समझने पर अत्यधिक केंद्रित है। यह इस बारे में बात करता है कि आप अपने गुणात्मक डेटा को कैसे कोड कर सकते हैं, सामग्री विश्लेषण कैसे किया जा सकता है, सामग्री विश्लेषण के क्या फायदे और नुकसान हैं, और इस प्रकार के विश्लेषण के लिए आवश्यक उपकरण क्या हैं।",
                // Portuguese
                "Português": "O capítulo 'Análise de conteúdo' é altamente focado na compreensão de seus dados qualitativos. Ele fala sobre como você poderia codificar seus dados qualitativos, como a análise de conteúdo poderia ser feita, quais as vantagens e desvantagens da análise de conteúdo e as ferramentas necessárias para esse tipo de análise.",
                // Bengali
                "বাংলা": "অধ্যায় 'বিষয়বস্তু বিশ্লেষণ' আপনার গুণগত তথ্য বোঝার উপর অত্যন্ত মনোযোগী। আপনি কীভাবে আপনার গুণগত ডেটা কোড করতে পারেন, কীভাবে বিষয়বস্তু বিশ্লেষণ করা যেতে পারে, বিষয়বস্তু বিশ্লেষণের কী সুবিধা এবং অসুবিধা রয়েছে এবং এই ধরণের বিশ্লেষণের জন্য প্রয়োজনীয় সরঞ্জামগুলি সম্পর্কে এটি আলোচনা করে।",
                // Arabic
                "عَرَبِيّ": "يركز فصل 'تحليل المحتوى' بشكل كبير على فهم بياناتك النوعية. يتحدث عن كيفية ترميز بياناتك النوعية، وكيف يمكن إجراء تحليل المحتوى، وما هي مزايا وعيوب تحليل المحتوى، والأدوات اللازمة لهذا النوع من التحليل.",
                // Persian
                "فارسی": "فصل 'تحلیل محتوا' به شدت بر درک داده های کیفی شما متمرکز است. در مورد اینکه چگونه می توانید داده های کیفی خود را کدنویسی کنید، تجزیه و تحلیل محتوا چگونه می تواند انجام شود، چه مزایا و معایبی دارد تجزیه و تحلیل محتوا و ابزارهای لازم برای این نوع تجزیه و تحلیل صحبت می کند.",
            },
        },
        // 21
        {
            "ChapterName": "Identifying themes through affinity diagramming",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the author talks about how you can identify themes through affinity diagramming. It talks about how you could do affinity diagramming, and what advantages and disadvantages affinity diagramming has.",
                // German
                "Deutsch": "In diesem Kapitel spricht der Autor darüber, wie Sie Themen durch Affinitätsdiagramme identifizieren können. Es wird darüber gesprochen, wie Sie Affinitätsdiagramme erstellen können und welche Vor- und Nachteile Affinitätsdiagramme haben.",
                // Chinese
                "中国人": "在本章中，作者讨论了如何通过亲和图识别主题。它讨论了如何进行亲和图，以及亲和图有哪些优点和缺点。",
                // Russian
                "Русский": "В этой главе автор рассказывает о том, как можно идентифицировать темы с помощью диаграмм сходства. В нем рассказывается о том, как можно построить диаграмму сходства, а также какие преимущества и недостатки имеет построение диаграмм сходства.",
                // French
                "Français": "Dans ce chapitre, l'auteur explique comment identifier des thèmes grâce à des diagrammes d'affinité. Il explique comment créer des diagrammes d'affinité et quels sont les avantages et les inconvénients des diagrammes d'affinité.",
                // Japanese
                "日本語": "この章では、著者は親和図法を通じてテーマを特定する方法について説明します。親和図法をどのように実行できるか、また親和図法にはどのような利点と欠点があるかについて説明します。",
                // Korean
                "한국인": "이 장에서 저자는 어피니티 다이어그램을 통해 테마를 식별하는 방법에 대해 설명합니다. 어피니티 다이어그램을 수행하는 방법과 어피니티 다이어그램의 장점과 단점에 대해 설명합니다.",
                // Spanish
                "Español": "En este capítulo, el autor habla sobre cómo identificar temas mediante diagramas de afinidad. Habla sobre cómo se pueden hacer diagramas de afinidad y qué ventajas y desventajas tienen los diagramas de afinidad.",
                // Hindi
                "हिंदी": "इस अध्याय में, लेखक इस बारे में बात करता है कि आप आत्मीयता आरेखण के माध्यम से विषयों की पहचान कैसे कर सकते हैं। यह इस बारे में बात करता है कि आप आत्मीयता आरेखण कैसे कर सकते हैं, और आत्मीयता आरेखण के क्या फायदे और नुकसान हैं।",
                // Portuguese
                "Português": "Neste capítulo, o autor fala sobre como você pode identificar temas por meio de diagramas de afinidade. Ele fala sobre como você pode fazer a diagramação de afinidades e quais vantagens e desvantagens a diagramação de afinidades tem.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, লেখক কীভাবে আপনি অ্যাফিনিটি ডায়াগ্রামিংয়ের মাধ্যমে থিমগুলি সনাক্ত করতে পারেন সে সম্পর্কে কথা বলেছেন। আপনি কীভাবে অ্যাফিনিটি ডায়াগ্রামিং করতে পারেন এবং অ্যাফিনিটি ডায়াগ্রামিংয়ের কী কী সুবিধা এবং অসুবিধা রয়েছে সে সম্পর্কে এটি আলোচনা করে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتحدث المؤلف عن كيفية تحديد المواضيع من خلال مخططات التقارب. يتحدث عن كيفية عمل مخططات التقارب، وما هي مزايا وعيوب مخططات التقارب.",
                // Persian
                "فارسی": "در این فصل، نویسنده در مورد چگونگی شناسایی مضامین از طریق نمودارهای وابستگی صحبت می کند. در مورد اینکه چگونه می توانید نمودار میل ترکیبی را انجام دهید، و مزایا و معایب نمودار میل ترکیبی را بیان می کند.",
            },
        },
        // 22
        {
            "ChapterName": "Thematic analysis: going beyond initial analysis",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This short chapter talks about thematic analysis shortly and how you can go beyond initial analysis. It gives you a summary of this kind of analysis method, an example of how you can structure a thematic analysis, and it prepares the useful references to be used for further research.",
                // German
                "Deutsch": "In diesem kurzen Kapitel geht es kurz um die thematische Analyse und wie Sie über die anfängliche Analyse hinausgehen können. Es gibt Ihnen eine Zusammenfassung dieser Art von Analysemethode, ein Beispiel, wie Sie eine thematische Analyse strukturieren können, und es bereitet die nützlichen Referenzen vor, die für weitere Recherchen verwendet werden können.",
                // Chinese
                "中国人": "本章简短地介绍了主题分析以及如何超越初步分析。它总结了这种分析方法，并提供了一个如何构建主题分析的示例，还准备了可用于进一步研究的有用参考资料。",
                // Russian
                "Русский": "В этой короткой главе кратко рассказывается о тематическом анализе и о том, как можно выйти за рамки первоначального анализа. Он дает вам краткое изложение этого метода анализа, пример того, как можно структурировать тематический анализ, а также подготавливает полезные ссылки для использования в дальнейших исследованиях.",
                // French
                "Français": "Ce court chapitre parle brièvement de l’analyse thématique et de la manière dont vous pouvez aller au-delà de l’analyse initiale. Il vous donne une synthèse de ce type de méthode d'analyse, un exemple de la façon dont vous pouvez structurer une analyse thématique et prépare les références utiles à utiliser pour des recherches ultérieures.",
                // Japanese
                "日本語": "この短い章では、テーマ分析について簡単に説明し、初期分析を超える方法について説明します。この種類の分析方法の概要、テーマ分析を構成する方法の例を示し、さらに調査を行うために役立つ参考資料を用意します。",
                // Korean
                "한국인": "이 짧은 장에서는 주제별 분석에 대해 간단히 설명하고 초기 분석을 넘어서는 방법에 대해 설명합니다. 이는 이러한 종류의 분석 방법에 대한 요약, 주제별 분석을 구성하는 방법에 대한 예를 제공하고 추가 연구에 사용할 유용한 참고 자료를 준비합니다.",
                // Spanish
                "Español": "Este breve capítulo habla brevemente sobre el análisis temático y cómo puede ir más allá del análisis inicial. Le brinda un resumen de este tipo de método de análisis, un ejemplo de cómo se puede estructurar un análisis temático y prepara referencias útiles que se utilizarán en futuras investigaciones.",
                // Hindi
                "हिंदी": "यह छोटा सा अध्याय विषयगत विश्लेषण के बारे में संक्षेप में बात करता है और बताता है कि आप प्रारंभिक विश्लेषण से आगे कैसे जा सकते हैं। यह आपको इस तरह की विश्लेषण पद्धति का सारांश देता है, एक उदाहरण देता है कि आप विषयगत विश्लेषण कैसे संरचित कर सकते हैं, और यह आगे के शोध के लिए उपयोग किए जाने वाले उपयोगी संदर्भ तैयार करता है।",
                // Portuguese
                "Português": "Este breve capítulo fala brevemente sobre análise temática e como você pode ir além da análise inicial. Ele fornece um resumo desse tipo de método de análise, um exemplo de como você pode estruturar uma análise temática e prepara as referências úteis a serem usadas em pesquisas futuras.",
                // Bengali
                "বাংলা": "এই সংক্ষিপ্ত অধ্যায়টি থিম্যাটিক বিশ্লেষণ সম্পর্কে শীঘ্রই কথা বলে এবং কিভাবে আপনি প্রাথমিক বিশ্লেষণের বাইরে যেতে পারেন। এটি আপনাকে এই ধরণের বিশ্লেষণ পদ্ধতির একটি সারাংশ দেয়, আপনি কীভাবে একটি বিষয়ভিত্তিক বিশ্লেষণ গঠন করতে পারেন তার একটি উদাহরণ, এবং এটি আরও গবেষণার জন্য ব্যবহার করার জন্য দরকারী রেফারেন্স প্রস্তুত করে।",
                // Arabic
                "عَرَبِيّ": "يتحدث هذا الفصل القصير عن التحليل المواضيعي باختصار وكيف يمكنك تجاوز التحليل الأولي. فهو يوفر لك ملخصًا لهذا النوع من أساليب التحليل، ومثالًا لكيفية هيكلة التحليل الموضوعي، كما يقوم بإعداد المراجع المفيدة لاستخدامها في مزيد من البحث.",
                // Persian
                "فارسی": "این فصل کوتاه در مورد تجزیه و تحلیل موضوعی و چگونگی فراتر رفتن از تحلیل اولیه صحبت می کند. خلاصه ای از این نوع روش تحلیل را به شما ارائه می دهد، نمونه ای از اینکه چگونه می توانید یک تحلیل موضوعی را ساختار دهید، و منابع مفیدی را برای استفاده برای تحقیقات بیشتر آماده می کند.",
            },
        },
        // 23
        {
            "ChapterName": "Agile analysis",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter is highly focused on agile analysis. It gives you a summary of this method, face-to-face synchronous, the advantages and disadvantages of this method, and the rainbow spreadsheet method.",
                // German
                "Deutsch": "Dieses Kapitel konzentriert sich stark auf die agile Analyse. Es bietet Ihnen eine Zusammenfassung dieser Methode, Face-to-Face-Synchronisation, die Vor- und Nachteile dieser Methode und die Rainbow-Tabellenkalkulationsmethode.",
                // Chinese
                "中国人": "本章重点介绍敏捷分析。它为您提供了此方法的摘要、面对面同步、此方法的优点和缺点以及彩虹电子表格方法。",
                // Russian
                "Русский": "Эта глава посвящена гибкому анализу. В нем дается краткое изложение этого метода, очная синхронизация, преимущества и недостатки этого метода, а также метода радужных электронных таблиц.",
                // French
                "Français": "Ce chapitre est fortement axé sur l’analyse agile. Il vous donne une synthèse de cette méthode, en face-à-face synchrone, les avantages et inconvénients de cette méthode, ainsi que la méthode du tableur arc-en-ciel.",
                // Japanese
                "日本語": "この章では、アジャイル分析に重点を置いています。この方法、対面同期、この方法の長所と短所、レインボー スプレッドシート メソッドの概要を説明します。",
                // Korean
                "한국인": "이 장에서는 애자일 분석에 중점을 두고 있습니다. 이 방법, 대면 동기식, 이 방법의 장점과 단점, 레인보우 스프레드시트 방법에 대한 요약을 제공합니다.",
                // Spanish
                "Español": "Este capítulo está muy centrado en el análisis ágil. Le brinda un resumen de este método, sincrónico cara a cara, las ventajas y desventajas de este método y el método de hoja de cálculo arcoíris.",
                // Hindi
                "हिंदी": "यह अध्याय एजाइल विश्लेषण पर अत्यधिक केंद्रित है। यह आपको इस विधि, आमने-सामने सिंक्रोनस, इस विधि के फायदे और नुकसान, और रेनबो स्प्रेडशीट विधि का सारांश देता है।",
                // Portuguese
                "Português": "Este capítulo é altamente focado na análise ágil. Ele fornece um resumo desse método, síncrono presencial, as vantagens e desvantagens desse método e do método de planilha arco-íris.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি অত্যন্ত চটপটে বিশ্লেষণের উপর দৃষ্টি নিবদ্ধ করা হয়েছে। এটি আপনাকে এই পদ্ধতির একটি সারসংক্ষেপ দেয়, মুখোমুখি সিঙ্ক্রোনাস, এই পদ্ধতির সুবিধা এবং অসুবিধা এবং রেইনবো স্প্রেডশীট পদ্ধতি।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل بشكل كبير على التحليل الرشيق. ويقدم لك ملخصًا لهذه الطريقة، والتزامن وجهًا لوجه، ومزايا وعيوب هذه الطريقة، وطريقة جداول بيانات قوس قزح.",
                // Persian
                "فارسی": "این فصل به شدت بر تحلیل چابک متمرکز است. خلاصه ای از این روش، همزمان رو در رو، مزایا و معایب این روش و روش صفحه گسترده رنگین کمان را در اختیار شما قرار می دهد.",
            },
        },
        // 24
        {
            "ChapterName": "Analysing usability data and cataloguing issues and needs",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter's focus is on analyzing usability data and cataloging issues and needs. It talks about cataloging issues from qualitative data, a step-by-step guide to identify issues or needs, a step-by-step guide to analyze journeys, user needs backlog and writing user needs, advantages and disadvantages of cataloging issues and user needs, and cataloging issues from qualitative data.",
                // German
                "Deutsch": "Der Schwerpunkt dieses Kapitels liegt auf der Analyse von Usability-Daten und der Katalogisierung von Problemen und Bedürfnissen. Es geht um die Katalogisierung von Problemen anhand qualitativer Daten, eine Schritt-für-Schritt-Anleitung zur Identifizierung von Problemen oder Bedürfnissen, eine Schritt-für-Schritt-Anleitung zur Analyse von Journeys, zum Rückstand bei Benutzerbedürfnissen und zum Schreiben von Benutzerbedürfnissen, die Vor- und Nachteile der Katalogisierung von Problemen und Benutzerbedürfnissen sowie die Katalogisierung von Problemen anhand qualitativer Daten.",
                // Chinese
                "中国人": "本章重点介绍如何分析可用性数据以及对问题和需求进行分类。本章讨论了如何从定性数据中对问题进行分类、如何一步一步识别问题或需求、如何一步一步分析旅程、用户需求积压和编写用户需求、对问题和用户需求进行分类的优缺点以及如何从定性数据中对问题进行分类。",
                // Russian
                "Русский": "Основное внимание в этой главе уделяется анализу данных об удобстве использования и каталогизации проблем и потребностей. В нем рассказывается о каталогизации проблем на основе качественных данных, пошаговом руководстве по выявлению проблем или потребностей, пошаговом руководстве по анализу поездок, отставании в потребностях пользователей и описании потребностей пользователей, преимуществах и недостатках каталогизации проблем и потребностей пользователей. и каталогизация проблем на основе качественных данных.",
                // French
                "Français": "Ce chapitre se concentre sur l'analyse des données d'utilisabilité et sur le catalogage des problèmes et des besoins. Il parle des problèmes de catalogage à partir de données qualitatives, d'un guide étape par étape pour identifier les problèmes ou les besoins, d'un guide étape par étape pour analyser les parcours, de l'arriéré des besoins des utilisateurs et de la rédaction des besoins des utilisateurs, des avantages et des inconvénients des problèmes de catalogage et des besoins des utilisateurs. , et le catalogage des problèmes à partir de données qualitatives.",
                // Japanese
                "日本語": "この章では、ユーザビリティ データの分析と、問題とニーズのカタログ化に焦点を当てています。定性データからの問題のカタログ化、問題またはニーズを特定するためのステップ バイ ステップ ガイド、ジャーニーを分析するためのステップ バイ ステップ ガイド、ユーザー ニーズ バックログとユーザー ニーズの記述、問題とユーザー ニーズをカタログ化することの長所と短所、定性データからの問題のカタログ化について説明します。",
                // Korean
                "한국인": "이 장에서는 유용성 데이터를 분석하고 문제와 요구 사항을 분류하는 데 중점을 둡니다. 질적 데이터에서 문제를 분류하는 방법, 문제나 요구 사항을 식별하기 위한 단계별 가이드, 여정 분석을 위한 단계별 가이드, 사용자 요구 백로그 및 사용자 요구 사항 작성, 문제 목록 작성과 사용자 요구 사항의 장점과 단점에 대해 설명합니다. , 질적 데이터에서 문제를 분류합니다.",
                // Spanish
                "Español": "El objetivo de este capítulo es analizar los datos de usabilidad y catalogar los problemas y necesidades. Habla sobre problemas de catalogación a partir de datos cualitativos, una guía paso a paso para identificar problemas o necesidades, una guía paso a paso para analizar recorridos, acumulación de necesidades de los usuarios y redacción de las necesidades de los usuarios, ventajas y desventajas de los problemas de catalogación y necesidades de los usuarios. y catalogación de problemas a partir de datos cualitativos.",
                // Hindi
                "हिंदी": "এই অধ্যায়ের ফোকাস ব্যবহারযোগ্যতা তথ্য বিশ্লেষণ এবং সমস্যা এবং প্রয়োজন তালিকাভুক্ত করা হয়. এটি গুণগত ডেটা থেকে সমস্যাগুলি ক্যাটালগ করার বিষয়ে কথা বলে, সমস্যা বা প্রয়োজনগুলি সনাক্ত করার জন্য একটি ধাপে ধাপে নির্দেশিকা, যাত্রা বিশ্লেষণ করার জন্য একটি ধাপে ধাপে নির্দেশিকা, ব্যবহারকারীর প্রয়োজন ব্যাকলগ এবং ব্যবহারকারীর চাহিদা লেখা, ক্যাটালগিং সমস্যাগুলির সুবিধা এবং অসুবিধা এবং ব্যবহারকারীর চাহিদাগুলি , এবং গুণগত তথ্য থেকে সমস্যা তালিকাভুক্ত করা।",
                // Portuguese
                "Português": "O foco deste capítulo está na análise de dados de usabilidade e na catalogação de problemas e necessidades. Ele fala sobre catalogação de problemas a partir de dados qualitativos, um guia passo a passo para identificar problemas ou necessidades, um guia passo a passo para analisar jornadas, backlog de necessidades do usuário e escrever as necessidades do usuário, vantagens e desvantagens de catalogar problemas e necessidades do usuário e catalogar questões a partir de dados qualitativos.",
                // Bengali
                "বাংলা": "এই অধ্যায়ের ফোকাস ব্যবহারযোগ্যতা তথ্য বিশ্লেষণ এবং সমস্যা এবং প্রয়োজন তালিকাভুক্ত করা হয়. এটি গুণগত ডেটা থেকে সমস্যাগুলি ক্যাটালগ করার বিষয়ে কথা বলে, সমস্যা বা প্রয়োজনগুলি সনাক্ত করার জন্য একটি ধাপে ধাপে নির্দেশিকা, যাত্রা বিশ্লেষণ করার জন্য একটি ধাপে ধাপে নির্দেশিকা, ব্যবহারকারীর প্রয়োজন ব্যাকলগ এবং ব্যবহারকারীর চাহিদা লেখা, ক্যাটালগিং সমস্যাগুলির সুবিধা এবং অসুবিধা এবং ব্যবহারকারীর চাহিদাগুলি , এবং গুণগত তথ্য থেকে সমস্যা তালিকাভুক্ত করা।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تحليل بيانات سهولة الاستخدام وفهرسة المشكلات والاحتياجات. يتحدث عن قضايا الفهرسة من البيانات النوعية، دليل خطوة بخطوة لتحديد القضايا أو الاحتياجات، دليل خطوة بخطوة لتحليل الرحلات، تراكم احتياجات المستخدم وكتابة احتياجات المستخدم، مزايا وعيوب قضايا الفهرسة واحتياجات المستخدم ، وقضايا الفهرسة من البيانات النوعية.",
                // Persian
                "فارسی": "تمرکز این فصل بر تجزیه و تحلیل داده های قابلیت استفاده و فهرست نویسی مسائل و نیازها است. در مورد فهرست نویسی مسائل از داده های کیفی، راهنمای گام به گام برای شناسایی مسائل یا نیازها، راهنمای گام به گام برای تجزیه و تحلیل سفرها، نیازهای کاربران و نوشتن نیازهای کاربر، مزایا و معایب مسائل فهرست نویسی و نیازهای کاربر صحبت می کند. ، و فهرست نویسی مسائل از داده های کیفی.",
            },
        },
        // 25
        {
            "ChapterName": "Analysing data to create personas to communicate user characteristics and behaviour",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter's main topic is highly focused on analyzing data to create personas to communicate user characteristics and behavior. It talks about a summary of the creating personas method, what personas are, what things should be included in your personas, how you should present your personas, a more advanced method: using activity theory to create your personas, and answering this question of how many personas.",
                // German
                "Deutsch": "Das Hauptthema dieses Kapitels konzentriert sich stark auf die Analyse von Daten zur Erstellung von Personas, um Benutzereigenschaften und -verhalten zu kommunizieren. Es enthält eine Zusammenfassung der Methode zur Erstellung von Personas, erklärt, was Personas sind, welche Dinge in Ihren Personas enthalten sein sollten, wie Sie Ihre Personas präsentieren sollten, eine fortgeschrittenere Methode: die Verwendung der Aktivitätstheorie zur Erstellung Ihrer Personas und die Beantwortung der Frage, wie viele Personas es gibt.",
                // Chinese
                "中国人": "本章主要讨论如何通过分析数据来创建人物角色，以传达用户特征和行为。它讨论了创建人物角色的方法的总结、人物角色是什么、人物角色中应该包含哪些内容、如何呈现人物角色、更高级的方法：使用活动理论来创建人物角色，并回答了需要多少人物角色的问题。",
                // Russian
                "Русский": "Основная тема этой главы сосредоточена на анализе данных с целью создания персонажей для передачи характеристик и поведения пользователей. В нем говорится о кратком изложении метода создания персон, что такое персоны, какие вещи должны быть включены в ваши персоны, как вы должны представлять свои персоны, более продвинутый метод: использование теории деятельности для создания ваших персон и ответ на вопрос о том, как много личностей.",
                // French
                "Français": "Le sujet principal de ce chapitre est fortement axé sur l'analyse des données pour créer des personnages afin de communiquer les caractéristiques et le comportement des utilisateurs. Il présente un résumé de la méthode de création de personas, ce que sont les personas, quelles choses doivent être incluses dans vos personas, comment présenter vos personas, une méthode plus avancée : utiliser la théorie de l'activité pour créer vos personas, et répondre à cette question de savoir comment de nombreux personnages.",
                // Japanese
                "日本語": "この章の主なトピックは、ユーザーの特性と行動を伝えるペルソナを作成するためのデータ分析に重点を置いています。ペルソナ作成方法の概要、ペルソナとは何か、ペルソナに何を含めるべきか、ペルソナをどのように提示すべきか、より高度な方法、つまり活動理論を使用してペルソナを作成する方法、そしてペルソナの数に関する質問への回答について説明します。",
                // Korean
                "한국인": "이 장의 주요 주제는 데이터를 분석하여 사용자 특성과 행동을 전달하는 페르소나를 만드는 데 중점을 둡니다. 페르소나 생성 방법에 대한 요약, 페르소나가 무엇인지, 페르소나에 어떤 항목이 포함되어야 하는지, 페르소나를 어떻게 표현해야 하는지, 더 고급 방법인 활동 이론을 사용하여 페르소나를 생성하고, 이 질문에 답하는 방법에 대해 설명합니다. 많은 페르소나.",
                // Spanish
                "Español": "El tema principal de este capítulo está muy centrado en el análisis de datos para crear personas que comuniquen las características y el comportamiento del usuario. Habla de un resumen del método de creación de personas, qué son las personas, qué cosas deben incluirse en tus personas, cómo debes presentar tus personas, un método más avanzado: usar la teoría de la actividad para crear tus personas y responder a esta pregunta de cómo muchas personas.",
                // Hindi
                "हिंदी": "इस अध्याय का मुख्य विषय उपयोगकर्ता की विशेषताओं और व्यवहार को संप्रेषित करने के लिए व्यक्तित्व बनाने के लिए डेटा का विश्लेषण करने पर अत्यधिक केंद्रित है। यह व्यक्तित्व बनाने की विधि के सारांश के बारे में बात करता है, व्यक्तित्व क्या हैं, आपके व्यक्तित्व में कौन सी चीजें शामिल होनी चाहिए, आपको अपने व्यक्तित्व को कैसे प्रस्तुत करना चाहिए, एक अधिक उन्नत विधि: अपने व्यक्तित्व बनाने के लिए गतिविधि सिद्धांत का उपयोग करना, और इस सवाल का जवाब देना कि कितने व्यक्तित्व हैं।",
                // Portuguese
                "Português": "O tópico principal deste capítulo é altamente focado na análise de dados para criar personas para comunicar características e comportamento do usuário. Ele fala sobre um resumo do método de criação de personas, o que são personas, o que deve ser incluído em suas personas, como você deve apresentar suas personas, um método mais avançado: usar a teoria da atividade para criar suas personas, e responder essa pergunta de como muitas personas.",
                // Bengali
                "বাংলা": "এই অধ্যায়ের মূল বিষয়টি ব্যবহারকারীর বৈশিষ্ট্য এবং আচরণের সাথে যোগাযোগ করার জন্য ব্যক্তিত্ব তৈরি করতে ডেটা বিশ্লেষণের উপর অত্যন্ত নিবদ্ধ। এটি ব্যক্তিত্ব তৈরির পদ্ধতির সংক্ষিপ্তসার সম্পর্কে কথা বলে, ব্যক্তিত্বগুলি কী, আপনার ব্যক্তিত্বগুলিতে কী কী জিনিস অন্তর্ভুক্ত করা উচিত, আপনার ব্যক্তিত্বগুলি কীভাবে উপস্থাপন করা উচিত, একটি আরও উন্নত পদ্ধতি: আপনার ব্যক্তিত্ব তৈরি করতে কার্যকলাপ তত্ত্ব ব্যবহার করে এবং কীভাবে এই প্রশ্নের উত্তর দেওয়া হয় অনেক ব্যক্তিত্ব।",
                // Arabic
                "عَرَبِيّ": "يركز الموضوع الرئيسي لهذا الفصل بشكل كبير على تحليل البيانات لإنشاء شخصيات لتوصيل خصائص المستخدم وسلوكه. يتحدث عن ملخص لطريقة إنشاء الشخصيات، وما هي الشخصيات، وما هي الأشياء التي يجب تضمينها في شخصياتك، وكيف يجب أن تقدم شخصياتك، وطريقة أكثر تقدمًا: استخدام نظرية النشاط لإنشاء شخصياتك، والإجابة على هذا السؤال حول كيفية إنشاء الشخصيات. العديد من الشخصيات.",
                // Persian
                "فارسی": "موضوع اصلی این فصل به شدت بر تجزیه و تحلیل داده ها برای ایجاد شخصیت ها برای برقراری ارتباط با ویژگی ها و رفتار کاربر متمرکز است. این کتاب در مورد خلاصه‌ای از روش ایجاد پرسونا، چیستی پرسوناها، چه چیزهایی باید در پرسونای شما گنجانده شود، چگونه باید پرسوناهای خود را ارائه دهید، یک روش پیشرفته‌تر: استفاده از تئوری فعالیت برای ایجاد پرسونای خود و پاسخ به این سوال صحبت می‌کند. بسیاری از شخصیت ها",
            },
        },
        // 26
        {
            "ChapterName": "Analysing data to create mental models: visualizing how user think and identify opportunities",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter as its title says itself, it talks about analyzing data to create mental models and visualizing how user think and identify opportunities. It starts with a summary of this method and then it talks about how you should create your mental model in versions one and two way.",
                // German
                "Deutsch": "In diesem Kapitel geht es, wie der Titel schon sagt, um die Analyse von Daten zur Erstellung mentaler Modelle und die Visualisierung der Denkweise und der Erkennung von Chancen durch Benutzer. Es beginnt mit einer Zusammenfassung dieser Methode und erläutert dann, wie Sie Ihr mentales Modell in den Versionen eins und zwei erstellen sollten.",
                // Chinese
                "中国人": "正如其标题所示，本章讨论了如何分析数据以创建心理模型，以及可视化用户如何思考和识别机会。本章首先总结了这种方法，然后讨论了如何以第一和第二种方式创建心理模型。",
                // Russian
                "Русский": "В этой главе, как следует из названия, говорится об анализе данных для создания ментальных моделей и визуализации того, как пользователь думает, и выявляет возможности. Он начинается с краткого изложения этого метода, а затем рассказывается о том, как вам следует создать свою ментальную модель в первой и второй версиях.",
                // French
                "Français": "Ce chapitre, comme son titre l'indique lui-même, parle de l'analyse des données pour créer des modèles mentaux et de visualiser la façon dont l'utilisateur pense et identifie les opportunités. Il commence par un résumé de cette méthode, puis explique comment créer votre modèle mental dans les versions un et deux.",
                // Japanese
                "日本語": "この章では、タイトルの通り、データを分析してメンタル モデルを作成し、ユーザーがどのように考え、機会を特定するかを視覚化する方法について説明します。この方法の概要から始まり、次にバージョン 1 とバージョン 2 でメンタル モデルを作成する方法について説明します。",
                // Korean
                "한국인": "이 장은 제목에서 알 수 있듯이 데이터를 분석하여 정신 모델을 만들고 사용자가 어떻게 생각하고 기회를 식별하는지 시각화하는 방법에 대해 설명합니다. 이 방법의 요약으로 시작한 다음 버전 1과 두 가지 방법으로 멘탈 모델을 생성하는 방법에 대해 설명합니다.",
                // Spanish
                "Español": "Este capítulo, como su título lo dice, habla sobre el análisis de datos para crear modelos mentales y visualizar cómo piensa el usuario e identifica oportunidades. Comienza con un resumen de este método y luego habla sobre cómo debes crear tu modelo mental en las versiones de una y dos vías.",
                // Hindi
                "हिंदी": "जैसा कि इसके शीर्षक से ही पता चलता है, यह अध्याय मानसिक मॉडल बनाने के लिए डेटा का विश्लेषण करने और उपयोगकर्ता कैसे सोचते हैं और अवसरों की पहचान करते हैं, इसकी कल्पना करने के बारे में बात करता है। यह इस पद्धति के सारांश से शुरू होता है और फिर यह बताता है कि आपको अपने मानसिक मॉडल को संस्करण एक और दो में कैसे बनाना चाहिए।",
                // Portuguese
                "Português": "Este capítulo, como o próprio título diz, fala sobre a análise de dados para criar modelos mentais e visualizar como o usuário pensa e identifica oportunidades. Começa com um resumo deste método e depois fala sobre como você deve criar seu modelo mental nas versões um e dois sentidos.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি এর শিরোনাম হিসাবে নিজেই বলে, এটি মানসিক মডেল তৈরি করার জন্য ডেটা বিশ্লেষণ এবং ব্যবহারকারী কীভাবে চিন্তা করে এবং সুযোগগুলি সনাক্ত করে তা কল্পনা করে। এটি এই পদ্ধতির সংক্ষিপ্তসার দিয়ে শুরু হয় এবং তারপরে এটি এক এবং দুই উপায়ে আপনার মানসিক মডেল কীভাবে তৈরি করা উচিত সে সম্পর্কে কথা বলে।",
                // Arabic
                "عَرَبِيّ": "هذا الفصل، كما يقول عنوانه، يتحدث عن تحليل البيانات لإنشاء نماذج ذهنية وتصور كيفية تفكير المستخدم وتحديد الفرص. يبدأ بملخص لهذه الطريقة ثم يتحدث عن كيفية إنشاء نموذجك العقلي في الإصدارين الأول والثاني.",
                // Persian
                "فارسی": "این فصل همانطور که عنوانش خودش می گوید، در مورد تجزیه و تحلیل داده ها برای ایجاد مدل های ذهنی و تجسم نحوه تفکر کاربر و شناسایی فرصت ها صحبت می کند. با خلاصه ای از این روش شروع می شود و سپس در مورد نحوه ایجاد مدل ذهنی خود در نسخه های یک و دو صحبت می کند.",
            },
        },
        // 27
        {
            "ChapterName": "Turning findings into insights",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, you learn how to turn findings into insights simply. It talks about what actionable insights are, what atomic research is, and some examples of this kind of research.",
                // German
                "Deutsch": "In diesem Kapitel erfahren Sie, wie Sie Erkenntnisse einfach in Erkenntnisse umwandeln. Es wird erläutert, was umsetzbare Erkenntnisse sind, was atomare Forschung ist und einige Beispiele für diese Art der Forschung.",
                // Chinese
                "中国人": "在本章中，您将学习如何简单地将发现转化为见解。它讨论了什么是可操作的见解、什么是原子研究，以及此类研究的一些示例。",
                // Russian
                "Русский": "В этой главе вы узнаете, как просто превратить полученные результаты в идеи. В нем говорится о том, что такое действенные идеи, что такое атомные исследования, а также о некоторых примерах такого рода исследований.",
                // French
                "Français": "Dans ce chapitre, vous apprendrez comment transformer simplement les résultats en informations. Il explique ce que sont les connaissances exploitables, ce qu'est la recherche atomique et quelques exemples de ce type de recherche.",
                // Japanese
                "日本語": "この章では、発見事項を簡単に洞察に変える方法を学びます。実用的な洞察とは何か、原子研究とは何か、そしてこの種の研究のいくつかの例について説明します。",
                // Korean
                "한국인": "이 장에서는 결과를 간단하게 통찰력으로 전환하는 방법을 배웁니다. 실행 가능한 통찰력이 무엇인지, 원자 연구가 무엇인지, 그리고 이러한 종류의 연구에 대한 몇 가지 예에 대해 설명합니다.",
                // Spanish
                "Español": "En este capítulo, aprenderá cómo convertir los hallazgos en conocimientos de forma sencilla. Habla sobre qué son los conocimientos prácticos, qué es la investigación atómica y algunos ejemplos de este tipo de investigación.",
                // Hindi
                "हिंदी": "इस अध्याय में, आप सीखेंगे कि निष्कर्षों को सरलता से अंतर्दृष्टि में कैसे बदला जाए। इसमें बताया गया है कि कार्रवाई योग्य अंतर्दृष्टि क्या है, परमाणु अनुसंधान क्या है, और इस तरह के अनुसंधान के कुछ उदाहरण क्या हैं।",
                // Portuguese
                "Português": "Neste capítulo, você aprenderá como transformar descobertas em insights de maneira simples. Ele fala sobre o que são insights acionáveis, o que é pesquisa atômica e alguns exemplos desse tipo de pesquisa.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, আপনি কীভাবে অনুসন্ধানগুলিকে সহজভাবে অন্তর্দৃষ্টিতে পরিণত করবেন তা শিখবেন। এটি অ্যাকশনযোগ্য অন্তর্দৃষ্টি কী, পারমাণবিক গবেষণা কী এবং এই ধরণের গবেষণার কিছু উদাহরণ সম্পর্কে কথা বলে।",
                // Arabic
                "عَرَبِيّ": "ستتعلم في هذا الفصل كيفية تحويل النتائج إلى رؤى بكل بساطة. ويتحدث عن ماهية الرؤى القابلة للتنفيذ، وما هو البحث الذري، وبعض الأمثلة على هذا النوع من الأبحاث.",
                // Persian
                "فارسی": "در این فصل، یاد می گیرید که چگونه یافته ها را به سادگی به بینش تبدیل کنید. در مورد اینکه بینش های عملی چیست، تحقیق اتمی چیست و نمونه هایی از این نوع تحقیقات صحبت می کند.",
            },
        },
        // 28
        {
            "ChapterName": "Making recommendations: how to make your research findings actionable",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter briefly talks about how to make recommendations, how to make your research findings actionable, and what kind of things you can recommend.",
                // German
                "Deutsch": "In diesem Kapitel wird kurz erläutert, wie Sie Empfehlungen abgeben, wie Sie Ihre Forschungsergebnisse umsetzbar machen und welche Dinge Sie empfehlen können.",
                // Chinese
                "中国人": "本章简要讨论了如何提出建议、如何使您的研究结果可行以及您可以推荐什么样的事情。",
                // Russian
                "Русский": "В этой главе кратко рассказывается о том, как давать рекомендации, как сделать результаты вашего исследования действенными и что вы можете порекомендовать.",
                // French
                "Français": "Ce chapitre explique brièvement comment formuler des recommandations, comment rendre les résultats de votre recherche exploitables et quel genre de choses vous pouvez recommander.",
                // Japanese
                "日本語": "この章では、推奨事項を作成する方法、調査結果を実用的なものにする方法、およびどのようなことを推奨できるかについて簡単に説明します。",
                // Korean
                "한국인": "이 장에서는 권장 사항을 작성하는 방법, 연구 결과를 실행 가능하게 만드는 방법, 권장할 수 있는 항목의 종류에 대해 간략하게 설명합니다.",
                // Spanish
                "Español": "Este capítulo habla brevemente sobre cómo hacer recomendaciones, cómo hacer que los resultados de su investigación sean viables y qué tipo de cosas puede recomendar.",
                // Hindi
                "हिंदी": "यह अध्याय संक्षेप में इस बारे में चर्चा करता है कि सिफारिशें कैसे की जाएं, अपने शोध निष्कर्षों को कार्यान्वयन योग्य कैसे बनाया जाए, तथा आप किस प्रकार की चीजों की सिफारिश कर सकते हैं।",
                // Portuguese
                "Português": "Este capítulo fala brevemente sobre como fazer recomendações, como tornar as descobertas de sua pesquisa acionáveis ​​e que tipo de coisas você pode recomendar.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে সংক্ষিপ্তভাবে কিভাবে সুপারিশ করতে হয়, কিভাবে আপনার গবেষণার ফলাফলগুলিকে কার্যকর করা যায় এবং আপনি কি ধরনের জিনিস সুপারিশ করতে পারেন সে সম্পর্কে আলোচনা করে।",
                // Arabic
                "عَرَبِيّ": "يتحدث هذا الفصل بإيجاز عن كيفية تقديم التوصيات، وكيفية جعل نتائج بحثك قابلة للتنفيذ، ونوع الأشياء التي يمكنك التوصية بها.",
                // Persian
                "فارسی": "این فصل به طور خلاصه در مورد نحوه ارائه توصیه ها، نحوه عملی کردن یافته های تحقیقاتی و نوع چیزهایی که می توانید توصیه کنید صحبت می کند.",
            },
        },
        // 29
        {
            "ChapterName": "Creating executive summaries and detailed reports to present results",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter briefly talks about how to create executive summaries and detailed reports to present results. It gives a summary table about the method. It gives a total picture of report structure, executive summaries, participant details, how to read the report, and how to order your findings and recommendations.",
                // German
                "Deutsch": "In diesem Kapitel wird kurz erläutert, wie Sie Zusammenfassungen und ausführliche Berichte zur Präsentation von Ergebnissen erstellen. Es enthält eine Übersichtstabelle zur Methode. Es bietet einen Gesamtüberblick über die Berichtsstruktur, Zusammenfassungen, Teilnehmerdetails, wie der Bericht zu lesen ist und wie Sie Ihre Ergebnisse und Empfehlungen ordnen.",
                // Chinese
                "中国人": "本章简要介绍了如何创建执行摘要和详细报告来呈现结果。它提供了有关该方法的摘要表。它全面介绍了报告结构、执行摘要、参与者详细信息、如何阅读报告以及如何整理您的发现和建议。",
                // Russian
                "Русский": "В этой главе кратко рассказывается о том, как создавать краткие обзоры и подробные отчеты для представления результатов. Приведена сводная таблица метода. Он дает общее представление о структуре отчета, его резюме, сведениях об участниках, о том, как читать отчет и как упорядочить результаты и рекомендации.",
                // French
                "Français": "Ce chapitre explique brièvement comment créer des résumés et des rapports détaillés pour présenter les résultats. Il donne un tableau récapitulatif de la méthode. Il donne une image complète de la structure du rapport, des résumés, des détails sur les participants, comment lire le rapport et comment classer vos conclusions et recommandations.",
                // Japanese
                "日本語": "この章では、結果を提示するためのエグゼクティブ サマリーと詳細レポートの作成方法について簡単に説明します。この方法についての概要表を示します。レポートの構造、エグゼクティブ サマリー、参加者の詳細、レポートの読み方、調査結果と推奨事項の順序付け方法の全体像を示します。",
                // Korean
                "한국인": "이 장에서는 결과를 제시하기 위한 요약 및 세부 보고서를 작성하는 방법에 대해 간략하게 설명합니다. 방법에 대한 요약표를 제공합니다. 보고서 구조, 요약, 참가자 세부 정보, 보고서를 읽는 방법, 결과 및 권장 사항을 정렬하는 방법에 대한 전체 그림을 제공합니다.",
                // Spanish
                "Español": "Este capítulo habla brevemente sobre cómo crear resúmenes ejecutivos e informes detallados para presentar los resultados. Proporciona una tabla resumen sobre el método. Ofrece una imagen total de la estructura del informe, resúmenes ejecutivos, detalles de los participantes, cómo leer el informe y cómo ordenar sus hallazgos y recomendaciones.",
                // Hindi
                "हिंदी": "यह अध्याय संक्षेप में बताता है कि परिणाम प्रस्तुत करने के लिए कार्यकारी सारांश और विस्तृत रिपोर्ट कैसे बनाई जाती है। यह विधि के बारे में सारांश तालिका देता है। यह रिपोर्ट संरचना, कार्यकारी सारांश, प्रतिभागी विवरण, रिपोर्ट को कैसे पढ़ा जाए, और अपने निष्कर्षों और सिफारिशों को कैसे क्रमबद्ध किया जाए, इसकी पूरी तस्वीर देता है।",
                // Portuguese
                "Português": "Este capítulo fala brevemente sobre como criar resumos executivos e relatórios detalhados para apresentar resultados. Fornece uma tabela resumida sobre o método. Fornece uma visão geral da estrutura do relatório, resumos executivos, detalhes dos participantes, como ler o relatório e como ordenar suas conclusões e recomendações.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে সংক্ষিপ্তভাবে ফলাফল উপস্থাপনের জন্য কার্যনির্বাহী সারাংশ এবং বিশদ প্রতিবেদনগুলি কীভাবে তৈরি করা যায় সে সম্পর্কে কথা বলা হয়েছে। এটি পদ্ধতি সম্পর্কে একটি সংক্ষিপ্ত সারণী দেয়। এটি প্রতিবেদনের কাঠামো, কার্যনির্বাহী সারাংশ, অংশগ্রহণকারীদের বিশদ বিবরণ, কীভাবে প্রতিবেদনটি পড়তে হয় এবং কীভাবে আপনার অনুসন্ধান এবং সুপারিশগুলি অর্ডার করতে হয় তার একটি মোট চিত্র দেয়।",
                // Arabic
                "عَرَبِيّ": "يتحدث هذا الفصل بإيجاز عن كيفية إنشاء الملخصات التنفيذية والتقارير التفصيلية لعرض النتائج. ويعطي جدول ملخص حول الطريقة. فهو يعطي صورة كاملة عن هيكل التقرير، والملخصات التنفيذية، وتفاصيل المشاركين، وكيفية قراءة التقرير، وكيفية ترتيب النتائج والتوصيات.",
                // Persian
                "فارسی": "این فصل به طور خلاصه در مورد چگونگی ایجاد خلاصه های اجرایی و گزارش های دقیق برای ارائه نتایج صحبت می کند. یک جدول خلاصه در مورد روش ارائه می دهد. این یک تصویر کلی از ساختار گزارش، خلاصه های اجرایی، جزئیات شرکت کنندگان، نحوه خواندن گزارش و نحوه سفارش یافته ها و توصیه های خود را ارائه می دهد.",
            },
        },
        // 30
        {
            "ChapterName": "Using video playback to present your research results",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter mainly focuses on how to use video playback to present your research results. It gives you a summary of the method, how to edit your user research video, and what things should be included in your video.",
                // German
                "Deutsch": "In diesem Kapitel geht es hauptsächlich darum, wie Sie die Videowiedergabe zur Präsentation Ihrer Forschungsergebnisse nutzen können. Es gibt Ihnen einen Überblick über die Methode, wie Sie Ihr Benutzerforschungsvideo bearbeiten und welche Dinge in Ihrem Video enthalten sein sollten.",
                // Chinese
                "中国人": "本章主要讲解如何使用视频回放来展示你的研究成果。它为你总结了该方法，如何编辑你的用户研究视频，以及你的视频中应该包含哪些内容。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется тому, как использовать воспроизведение видео для представления результатов вашего исследования. В нем содержится краткое описание метода, того, как редактировать видео, посвященное исследованию пользователей, и какие элементы следует включить в ваше видео.",
                // French
                "Français": "Ce chapitre se concentre principalement sur la façon d'utiliser la lecture vidéo pour présenter les résultats de votre recherche. Il vous donne un résumé de la méthode, comment éditer votre vidéo de recherche d'utilisateurs et quels éléments doivent être inclus dans votre vidéo.",
                // Japanese
                "日本語": "この章では、主にビデオ再生を使用して調査結果を提示する方法に焦点を当てています。方法の概要、ユーザー調査ビデオの編集方法、ビデオに含めるべき内容について説明します。",
                // Korean
                "한국인": "이 장에서는 주로 비디오 재생을 사용하여 연구 결과를 제시하는 방법에 중점을 둡니다. 방법, 사용자 조사 영상 편집 방법, 영상에 어떤 내용을 포함해야 하는지 요약해 드립니다.",
                // Spanish
                "Español": "Este capítulo se centra principalmente en cómo utilizar la reproducción de vídeo para presentar los resultados de su investigación. Le brinda un resumen del método, cómo editar su video de investigación de usuarios y qué cosas deben incluirse en su video.",
                // Hindi
                "हिंदी": "यह अध्याय मुख्य रूप से इस बात पर केंद्रित है कि अपने शोध परिणामों को प्रस्तुत करने के लिए वीडियो प्लेबैक का उपयोग कैसे करें। यह आपको विधि का सारांश देता है, अपने उपयोगकर्ता शोध वीडियो को कैसे संपादित करें, और आपके वीडियो में क्या चीजें शामिल होनी चाहिए।",
                // Portuguese
                "Português": "Este capítulo se concentra principalmente em como usar a reprodução de vídeo para apresentar os resultados de sua pesquisa. Ele fornece um resumo do método, como editar seu vídeo de pesquisa de usuário e o que deve ser incluído em seu vídeo.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি মূলত কীভাবে আপনার গবেষণার ফলাফল উপস্থাপন করতে ভিডিও প্লেব্যাক ব্যবহার করতে হয় তার উপর ফোকাস করে। এটি আপনাকে পদ্ধতির একটি সারাংশ দেয়, কীভাবে আপনার ব্যবহারকারীর গবেষণা ভিডিও সম্পাদনা করতে হয় এবং আপনার ভিডিওতে কী কী জিনিস অন্তর্ভুক্ত করা উচিত।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل بشكل أساسي على كيفية استخدام تشغيل الفيديو لعرض نتائج بحثك. فهو يوفر لك ملخصًا للطريقة وكيفية تحرير فيديو بحث المستخدم الخاص بك والأشياء التي يجب تضمينها في الفيديو الخاص بك.",
                // Persian
                "فارسی": "این فصل عمدتاً بر نحوه استفاده از پخش ویدیو برای ارائه نتایج تحقیق خود تمرکز دارد. خلاصه ای از روش، نحوه ویرایش ویدیوی تحقیقاتی کاربر و مواردی که باید در ویدیوی شما گنجانده شود را به شما ارائه می دهد.",
            },
        },
        // 31
        {
            "ChapterName": "Using journey and experience maps to visualize user research data",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter mainly focuses on how to use journey and experience maps to visualize user research data, a summary of the method, how to create an experience map, map variations, and some method examples.",
                // German
                "Deutsch": "In diesem Kapitel geht es hauptsächlich um die Verwendung von Journey- und Experience-Maps zur Visualisierung von Benutzerforschungsdaten, eine Zusammenfassung der Methode, die Erstellung einer Experience-Map, Map-Variationen und einige Methodenbeispiele.",
                // Chinese
                "中国人": "本章主要讲述如何使用旅程地图和体验地图来可视化用户研究数据，方法总结，如何创建体验地图，地图变体以及一些方法示例。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется тому, как использовать карты путешествий и опыта для визуализации данных исследований пользователей, краткому изложению метода, созданию карты опыта, вариантам карт и некоторым примерам методов.",
                // French
                "Français": "Ce chapitre se concentre principalement sur la façon d'utiliser les cartes de parcours et d'expérience pour visualiser les données de recherche des utilisateurs, un résumé de la méthode, la façon de créer une carte d'expérience, les variantes de la carte et quelques exemples de méthodes.",
                // Japanese
                "日本語": "この章では、主に、ジャーニー マップとエクスペリエンス マップを使用してユーザー調査データを視覚化する方法、方法の概要、エクスペリエンス マップの作成方法、マップのバリエーション、およびいくつかの方法の例に焦点を当てています。",
                // Korean
                "한국인": "이 장에서는 주로 여정 및 경험 맵을 사용하여 사용자 연구 데이터를 시각화하는 방법, 방법 요약, 경험 맵을 만드는 방법, 지도 변형 및 몇 가지 방법 예제에 중점을 둡니다.",
                // Spanish
                "Español": "Este capítulo se centra principalmente en cómo utilizar mapas de viaje y experiencia para visualizar datos de investigación de usuarios, un resumen del método, cómo crear un mapa de experiencia, variaciones del mapa y algunos ejemplos de métodos.",
                // Hindi
                "हिंदी": "यह अध्याय मुख्य रूप से उपयोगकर्ता अनुसंधान डेटा को दृश्यमान करने के लिए यात्रा और अनुभव मानचित्रों का उपयोग करने के तरीके, विधि का सारांश, अनुभव मानचित्र बनाने के तरीके, मानचित्र विविधताएं और कुछ विधि उदाहरणों पर केंद्रित है।",
                // Portuguese
                "Português": "Este capítulo se concentra principalmente em como usar mapas de jornada e experiência para visualizar dados de pesquisa do usuário, um resumo do método, como criar um mapa de experiência, variações do mapa e alguns exemplos de métodos.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি মূলত ব্যবহারকারীর গবেষণার ডেটা, পদ্ধতির সারসংক্ষেপ, কীভাবে একটি অভিজ্ঞতার মানচিত্র তৈরি করতে হয়, মানচিত্রের বৈচিত্র্য এবং কিছু পদ্ধতির উদাহরণ কল্পনা করতে কীভাবে ভ্রমণ এবং অভিজ্ঞতার মানচিত্র ব্যবহার করতে হয় তার উপর ফোকাস করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل بشكل أساسي على كيفية استخدام خرائط الرحلة والخبرة لتصور بيانات بحث المستخدم، وملخص الطريقة، وكيفية إنشاء خريطة تجربة، وأشكال الخريطة المختلفة، وبعض أمثلة الطريقة.",
                // Persian
                "فارسی": "این فصل عمدتاً بر نحوه استفاده از نقشه‌های سفر و تجربه برای تجسم داده‌های تحقیقاتی کاربر، خلاصه‌ای از روش، نحوه ایجاد یک نقشه تجربه، تغییرات نقشه و برخی مثال‌های روش تمرکز دارد.",
            },
        },
        // 32
        {
            "ChapterName": "Using scenarios and storyboards to represent the user journey",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on how to use scenarios and storyboards to represent the user journey, a short method summary, how to create scenarios, how to create storyboards, and what useful pointers are.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Verwendung von Szenarien und Storyboards zur Darstellung der Benutzerreise, eine kurze Methodenübersicht, das Erstellen von Szenarien, das Erstellen von Storyboards und nützliche Hinweise.",
                // Chinese
                "中国人": "本章重点介绍如何使用场景和故事板来表示用户旅程、简短的方法摘要、如何创建场景、如何创建故事板以及有哪些有用的指针。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется тому, как использовать сценарии и раскадровки для представления пути пользователя, краткому описанию методов, тому, как создавать сценарии, как создавать раскадровки, а также полезным указаниям.",
                // French
                "Français": "Ce chapitre se concentre sur la façon d'utiliser des scénarios et des storyboards pour représenter le parcours utilisateur, un bref résumé de la méthode, comment créer des scénarios, comment créer des storyboards et quels sont les pointeurs utiles.",
                // Japanese
                "日本語": "この章では、シナリオとストーリーボードを使用してユーザー ジャーニーを表現する方法、方法の簡単な概要、シナリオの作成方法、ストーリーボードの作成方法、役立つポインターについて説明します。",
                // Korean
                "한국인": "이 장에서는 시나리오와 스토리보드를 사용하여 사용자 여정을 표현하는 방법, 간단한 방법 요약, 시나리오를 만드는 방법, 스토리보드를 만드는 방법 및 유용한 포인터가 무엇인지 중점적으로 설명합니다.",
                // Spanish
                "Español": "Este capítulo se centra en cómo utilizar escenarios y guiones gráficos para representar el recorrido del usuario, un breve resumen del método, cómo crear escenarios, cómo crear guiones gráficos y cuáles son los consejos útiles.",
                // Hindi
                "हिंदी": "यह अध्याय इस बात पर केंद्रित है कि उपयोगकर्ता की यात्रा को दर्शाने के लिए परिदृश्यों और स्टोरीबोर्ड का उपयोग कैसे करें, एक संक्षिप्त विधि सारांश, परिदृश्य कैसे बनाएं, स्टोरीबोर्ड कैसे बनाएं, और उपयोगी संकेत क्या हैं।",
                // Portuguese
                "Português": "Este capítulo se concentra em como usar cenários e storyboards para representar a jornada do usuário, um breve resumo do método, como criar cenários, como criar storyboards e quais são as dicas úteis.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ব্যবহারকারীর যাত্রা, একটি সংক্ষিপ্ত পদ্ধতির সারাংশ, কীভাবে পরিস্থিতি তৈরি করতে হয়, কীভাবে স্টোরিবোর্ড তৈরি করতে হয় এবং কী কী দরকারী পয়েন্টারগুলি উপস্থাপন করতে পরিস্থিতি এবং স্টোরিবোর্ড ব্যবহার করতে হয় তার উপর ফোকাস করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على كيفية استخدام السيناريوهات والقصص المصورة لتمثيل رحلة المستخدم، وملخص قصير للطريقة، وكيفية إنشاء السيناريوهات، وكيفية إنشاء القصص المصورة، وما هي المؤشرات المفيدة.",
                // Persian
                "فارسی": "این فصل بر نحوه استفاده از سناریوها و استوری‌بردها برای نشان دادن سفر کاربر، خلاصه روش کوتاه، نحوه ایجاد سناریو، نحوه ایجاد استوری‌برد و اشاره‌گرهای مفید تمرکز دارد.",
            },
        },
        // 33
        {
            "ChapterName": "Using infographics to translate numerical and statistical data",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on how to use infographics to translate numerical and statistical data, a short method summary, how to make effective infographics, how to make use of available tools, and some method examples.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Verwendung von Infografiken zur Darstellung numerischer und statistischer Daten, eine kurze Methodenzusammenfassung, die Erstellung wirkungsvoller Infografiken, die Verwendung verfügbarer Tools und einige Methodenbeispiele.",
                // Chinese
                "中国人": "本章重点介绍如何使用信息图表翻译数字和统计数据、简短的方法摘要、如何制作有效的信息图表、如何利用可用的工具以及一些方法示例。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется тому, как использовать инфографику для перевода числовых и статистических данных, краткому описанию методов, тому, как создавать эффективную инфографику, использованию доступных инструментов и некоторым примерам методов.",
                // French
                "Français": "Ce chapitre se concentre sur la façon d'utiliser les infographies pour traduire des données numériques et statistiques, un bref résumé de la méthode, comment créer des infographies efficaces, comment utiliser les outils disponibles et quelques exemples de méthodes.",
                // Japanese
                "日本語": "この章では、インフォグラフィックを使用して数値データや統計データを変換する方法、方法の簡単な概要、効果的なインフォグラフィックを作成する方法、利用可能なツールを活用する方法、およびいくつかの方法の例に焦点を当てます。",
                // Korean
                "한국인": "이 장에서는 수치 및 통계 데이터를 변환하기 위해 인포그래픽을 사용하는 방법, 간단한 방법 요약, 효과적인 인포그래픽을 만드는 방법, 사용 가능한 도구를 활용하는 방법 및 몇 가지 방법 예시에 중점을 둡니다.",
                // Spanish
                "Español": "Este capítulo se centra en cómo utilizar infografías para traducir datos numéricos y estadísticos, un breve resumen del método, cómo hacer infografías efectivas, cómo utilizar las herramientas disponibles y algunos ejemplos de métodos.",
                // Hindi
                "हिंदी": "यह अध्याय संख्यात्मक और सांख्यिकीय डेटा का अनुवाद करने के लिए इन्फोग्राफिक्स का उपयोग करने के तरीके, एक संक्षिप्त विधि सारांश, प्रभावी इन्फोग्राफिक्स बनाने के तरीके, उपलब्ध उपकरणों का उपयोग करने के तरीके और कुछ विधि उदाहरणों पर केंद्रित है।",
                // Portuguese
                "Português": "Este capítulo se concentra em como usar infográficos para traduzir dados numéricos e estatísticos, um breve resumo do método, como fazer infográficos eficazes, como usar as ferramentas disponíveis e alguns exemplos de métodos.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি সংখ্যাসূচক এবং পরিসংখ্যানগত ডেটা অনুবাদ করার জন্য কীভাবে ইনফোগ্রাফিক্স ব্যবহার করতে হয়, একটি সংক্ষিপ্ত পদ্ধতির সারাংশ, কীভাবে কার্যকর ইনফোগ্রাফিক্স তৈরি করা যায়, উপলব্ধ সরঞ্জামগুলি কীভাবে ব্যবহার করা যায় এবং কিছু পদ্ধতির উদাহরণের উপর আলোকপাত করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على كيفية استخدام الرسوم البيانية لترجمة البيانات الرقمية والإحصائية، وملخص قصير للطريقة، وكيفية عمل الرسوم البيانية الفعالة، وكيفية الاستفادة من الأدوات المتاحة، وبعض الأمثلة على الطرق.",
                // Persian
                "فارسی": "این فصل بر نحوه استفاده از اینفوگرافیک برای ترجمه داده های عددی و آماری، خلاصه روش کوتاه، نحوه ساخت اینفوگرافیک موثر، نحوه استفاده از ابزارهای موجود و چند مثال روش تمرکز دارد.",
            },
        },
        // 34
        {
            "ChapterName": "How to recommend changes to visual, interaction and information design",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on how to recommend changes to visual, interaction, and information design, a short method summary, and useful tools.",
                // German
                "Deutsch": "In diesem Kapitel liegt der Schwerpunkt auf der Empfehlung von Änderungen am visuellen Design sowie am Interaktions- und Informationsdesign und bietet eine kurze Methodenzusammenfassung sowie nützliche Tools.",
                // Chinese
                "中国人": "本章重点介绍如何建议对视觉、交互和信息设计的变更、简短的方法摘要和有用的工具。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется тому, как рекомендовать изменения в визуальном, интерактивном и информационном дизайне, а также краткому описанию методов и полезным инструментам.",
                // French
                "Français": "Ce chapitre se concentre sur la façon de recommander des modifications à la conception visuelle, d'interaction et d'information, un bref résumé de la méthode et des outils utiles.",
                // Japanese
                "日本語": "この章では、ビジュアル、インタラクション、情報デザインの変更を推奨する方法、方法の簡単な概要、便利なツールに焦点を当てます。",
                // Korean
                "한국인": "이 장에서는 시각적, 상호 작용 및 정보 디자인에 대한 변경 사항을 권장하는 방법, 간단한 방법 요약 및 유용한 도구에 중점을 둡니다.",
                // Spanish
                "Español": "Este capítulo se centra en cómo recomendar cambios en el diseño visual, de interacción y de información, un breve resumen del método y herramientas útiles.",
                // Hindi
                "हिंदी": "यह अध्याय दृश्य, अंतःक्रिया और सूचना डिजाइन में परिवर्तन की सिफारिश करने, संक्षिप्त विधि सारांश और उपयोगी उपकरणों पर केंद्रित है।",
                // Portuguese
                "Português": "Este capítulo se concentra em como recomendar mudanças no design visual, de interação e de informação, um breve resumo do método e ferramentas úteis.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি দৃষ্টি, মিথস্ক্রিয়া, এবং তথ্য নকশা, একটি সংক্ষিপ্ত পদ্ধতির সারাংশ এবং দরকারী সরঞ্জামগুলিতে পরিবর্তনগুলি কীভাবে সুপারিশ করতে হয় তার উপর ফোকাস করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على كيفية التوصية بالتغييرات في التصميم المرئي والتفاعلي وتصميم المعلومات، وملخص قصير للطريقة، وأدوات مفيدة.",
                // Persian
                "فارسی": "این فصل بر چگونگی توصیه تغییرات در طراحی بصری، تعامل و اطلاعات، خلاصه روش کوتاه و ابزارهای مفید تمرکز دارد.",
            },
        },
        // 35
        {
            "ChapterName": "Conclusion",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This section is the final overview and the book talks about conclusions.",
                // German
                "Deutsch": "Dieser Abschnitt bietet den abschließenden Überblick und das Buch enthält Schlussfolgerungen.",
                // Chinese
                "中国人": "本节是最后的概述，本书讨论的是结论。",
                // Russian
                "Русский": "Этот раздел представляет собой окончательный обзор, и в книге говорится о выводах.",
                // French
                "Français": "Cette section est l'aperçu final et le livre parle de conclusions.",
                // Japanese
                "日本語": "このセクションは最終の概要であり、本書では結論について説明しています。",
                // Korean
                "한국인": "이 섹션은 최종 개요이며 책에서는 결론에 대해 설명합니다.",
                // Spanish
                "Español": "Esta sección es la descripción general final y el libro habla de las conclusiones.",
                // Hindi
                "हिंदी": "यह खंड अंतिम अवलोकन है और पुस्तक निष्कर्षों के बारे में बात करती है।",
                // Portuguese
                "Português": "Esta seção é a visão geral final e o livro fala sobre conclusões.",
                // Bengali
                "বাংলা": "এই বিভাগটি চূড়ান্ত ওভারভিউ এবং বইটি উপসংহার সম্পর্কে কথা বলে।",
                // Arabic
                "عَرَبِيّ": "هذا القسم هو النظرة العامة النهائية ويتحدث الكتاب عن الاستنتاجات.",
                // Persian
                "فارسی": "این بخش مروری نهایی است و کتاب در مورد نتیجه گیری صحبت می کند.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "User Research is a practical guide that shows readers how to use the vast array of user research methods available to improve product and service design and enhance user experience. Written by Stephanie Marsh, one of the UK's leading user research professionals, the book covers all the key research methods, such as face-to-face user testing, card sorting, surveys, A/B testing and many more. The book also provides expert insight into the nuances, advantages and disadvantages of each method, as well as how to interpret, analyze and share the data once it has been obtained.",
            // German
            "Deutsch": "User Research ist ein praktischer Leitfaden, der den Lesern zeigt, wie sie die große Bandbreite an verfügbaren Methoden der Benutzerforschung nutzen können, um das Produkt- und Servicedesign zu verbessern und das Benutzererlebnis zu steigern. Das Buch wurde von Stephanie Marsh, einer der führenden britischen Experten für Benutzerforschung, geschrieben und behandelt alle wichtigen Forschungsmethoden, wie z. B. persönliche Benutzertests, Kartensortierung, Umfragen, A/B-Tests und viele mehr. Das Buch bietet außerdem Experteneinblicke in die Nuancen, Vor- und Nachteile jeder Methode sowie in die Interpretation, Analyse und Weitergabe der Daten, sobald sie erfasst wurden.",
            // Chinese
            "中国人": "《用户研究》是一本实用指南，向读者展示如何使用各种可用的用户研究方法来改进产品和服务设计并增强用户体验。本书由英国领先的用户研究专家之一斯蒂芬妮·马什 (Stephanie Marsh) 撰写，涵盖了所有主要研究方法，例如面对面用户测试、卡片分类、调查、A/B 测试等等。本书还提供了专家对每种方法的细微差别、优点和缺点的见解，以及如何在获得数据后解释、分析和共享数据。",
            // Russian
            "Русский": "Исследование пользователей — это практическое руководство, которое показывает читателям, как использовать широкий спектр доступных методов исследования пользователей для улучшения дизайна продуктов и услуг и улучшения пользовательского опыта. Книга, написанная Стефани Марш, одним из ведущих британских специалистов по исследованию пользователей, охватывает все ключевые методы исследования, такие как личное тестирование пользователей, сортировка карточек, опросы, A/B-тестирование и многое другое. В книге также дается экспертное представление о нюансах, преимуществах и недостатках каждого метода, а также о том, как интерпретировать, анализировать и обмениваться полученными данными.",
            // French
            "Français": "User Research est un guide pratique qui montre aux lecteurs comment utiliser la vaste gamme de méthodes de recherche sur les utilisateurs disponibles pour améliorer la conception des produits et des services et améliorer l'expérience utilisateur. Écrit par Stephanie Marsh, l'une des principales professionnelles de la recherche sur les utilisateurs au Royaume-Uni, le livre couvre toutes les méthodes de recherche clés, telles que les tests utilisateurs en face à face, le tri des cartes, les enquêtes, les tests A/B et bien d'autres. Le livre fournit également un aperçu expert des nuances, des avantages et des inconvénients de chaque méthode, ainsi que de la manière d'interpréter, d'analyser et de partager les données une fois obtenues.",
            // Japanese
            "日本語": "ユーザー リサーチは、製品やサービスの設計を改善し、ユーザー エクスペリエンスを強化するために利用できるさまざまなユーザー リサーチ方法の使用方法を読者に示す実用的なガイドです。英国を代表するユーザー リサーチ専門家の 1 人である Stephanie Marsh が執筆したこの本では、対面ユーザー テスト、カード ソート、アンケート、A/B テストなど、すべての主要なリサーチ方法が取り上げられています。また、各方法のニュアンス、利点、欠点、および取得したデータの解釈、分析、共有方法についても専門家の見解が示されています。",
            // Korean
            "한국인": "사용자 연구는 제품 및 서비스 디자인을 개선하고 사용자 경험을 향상시키는 데 사용할 수 있는 광범위한 사용자 연구 방법을 사용하는 방법을 독자에게 보여주는 실용적인 가이드입니다. 영국 최고의 사용자 연구 전문가 중 한 명인 Stephanie Marsh가 집필한 이 책은 대면 사용자 테스트, 카드 정렬, 설문 조사, A/B 테스트 등과 같은 모든 주요 연구 방법을 다루고 있습니다. 이 책은 또한 각 방법의 뉘앙스, 장점 및 단점은 물론 데이터를 얻은 후 해석, 분석 및 공유하는 방법에 대한 전문적인 통찰력을 제공합니다.",
            // Spanish
            "Español": "User Research es una guía práctica que muestra a los lectores cómo utilizar la amplia gama de métodos de investigación de usuarios disponibles para mejorar el diseño de productos y servicios y mejorar la experiencia del usuario. Escrito por Stephanie Marsh, una de las principales profesionales de investigación de usuarios del Reino Unido, el libro cubre todos los métodos de investigación clave, como pruebas de usuario cara a cara, clasificación de tarjetas, encuestas, pruebas A/B y muchos más. El libro también proporciona información experta sobre los matices, ventajas y desventajas de cada método, así como sobre cómo interpretar, analizar y compartir los datos una vez obtenidos.",
            // Hindi
            "हिंदी": "यूजर रिसर्च एक व्यावहारिक मार्गदर्शिका है जो पाठकों को उत्पाद और सेवा डिज़ाइन को बेहतर बनाने और उपयोगकर्ता अनुभव को बढ़ाने के लिए उपलब्ध उपयोगकर्ता अनुसंधान विधियों की विशाल सरणी का उपयोग करने का तरीका दिखाती है। यूके के प्रमुख उपयोगकर्ता अनुसंधान पेशेवरों में से एक, स्टेफ़नी मार्श द्वारा लिखित, पुस्तक में सभी प्रमुख शोध विधियों को शामिल किया गया है, जैसे कि आमने-सामने उपयोगकर्ता परीक्षण, कार्ड सॉर्टिंग, सर्वेक्षण, ए/बी परीक्षण और कई अन्य। पुस्तक प्रत्येक विधि की बारीकियों, लाभों और नुकसानों के बारे में विशेषज्ञ अंतर्दृष्टि भी प्रदान करती है, साथ ही यह भी बताती है कि डेटा प्राप्त होने के बाद उसकी व्याख्या, विश्लेषण और साझा कैसे करें।",
            // Portuguese
            "Português": "User Research é um guia prático que mostra aos leitores como usar a vasta gama de métodos de pesquisa de usuários disponíveis para melhorar o design de produtos e serviços e aprimorar a experiência do usuário. Escrito por Stephanie Marsh, uma das principais profissionais de pesquisa de usuários do Reino Unido, o livro cobre todos os principais métodos de pesquisa, como testes presenciais de usuários, classificação de cartões, pesquisas, testes A/B e muito mais. O livro também fornece informações especializadas sobre as nuances, vantagens e desvantagens de cada método, bem como como interpretar, analisar e compartilhar os dados depois de obtidos.",
            // Bengali
            "বাংলা": "ব্যবহারকারী গবেষণা একটি ব্যবহারিক নির্দেশিকা যা পাঠকদের দেখায় কিভাবে পণ্য এবং পরিষেবার নকশা উন্নত করতে এবং ব্যবহারকারীর অভিজ্ঞতা বাড়াতে উপলব্ধ ব্যবহারকারী গবেষণা পদ্ধতির বিশাল অ্যারে ব্যবহার করতে হয়। যুক্তরাজ্যের একজন নেতৃস্থানীয় ব্যবহারকারী গবেষণা পেশাদার স্টেফানি মার্শ লিখেছেন, বইটিতে সমস্ত মূল গবেষণা পদ্ধতি রয়েছে, যেমন মুখোমুখি ব্যবহারকারী পরীক্ষা, কার্ড বাছাই, জরিপ, A/B পরীক্ষা এবং আরও অনেক কিছু। বইটি প্রতিটি পদ্ধতির সূক্ষ্মতা, সুবিধা এবং অসুবিধাগুলির মধ্যে বিশেষজ্ঞ অন্তর্দৃষ্টি প্রদান করে, সেইসাথে কীভাবে ডেটা প্রাপ্ত হয়ে গেলে ব্যাখ্যা, বিশ্লেষণ এবং ভাগ করে নেওয়া যায়।",
            // Arabic
            "عَرَبِيّ": "User Research is a practical guide that shows readers how to use the vast array of user research methods available to improve product and service design and enhance user experience. Written by Stephanie Marsh, one of the UK's leading user research professionals, the book covers all the key research methods, such as face-to-face user testing, card sorting, surveys, A/B testing and many more. The book also provides expert insight into the nuances, advantages and disadvantages of each method, as well as how to interpret, analyze and share the data once it has been obtained.",
            // Persian
            "فارسی": "تحقیقات کاربر یک راهنمای عملی است که به خوانندگان نشان می دهد چگونه از طیف گسترده ای از روش های تحقیق کاربر در دسترس برای بهبود طراحی محصول و خدمات و بهبود تجربه کاربر استفاده کنند. این کتاب که توسط استفانی مارش، یکی از متخصصان پیشرو در تحقیقات کاربر در بریتانیا نوشته شده است، تمام روش‌های تحقیقاتی کلیدی، مانند تست چهره به چهره کاربر، مرتب‌سازی کارت، نظرسنجی، تست A/B و بسیاری موارد دیگر را پوشش می‌دهد. این کتاب همچنین بینش تخصصی در مورد تفاوت های ظریف، مزایا و معایب هر روش، و همچنین نحوه تفسیر، تجزیه و تحلیل و به اشتراک گذاری داده ها پس از به دست آوردن آن ارائه می دهد.",
        },
        // Paragraph 2
        {
            // English
            "English": "The second edition of User Research, published in February 2022, includes new content on ethical and legal considerations when doing user research, especially in light of the new data protection laws. It also introduces the basics of research operations, a field that focuses on the infrastructure and processes that support user research. Moreover, it offers more depth on analyzing research data, one of the most difficult and important parts of the research process.",
            // German
            "Deutsch": "Die zweite Ausgabe von User Research, die im Februar 2022 veröffentlicht wurde, enthält neue Inhalte zu ethischen und rechtlichen Überlegungen bei der Durchführung von Benutzerforschung, insbesondere im Hinblick auf die neuen Datenschutzgesetze. Sie führt auch in die Grundlagen der Forschungsarbeit ein, ein Bereich, der sich auf die Infrastruktur und Prozesse konzentriert, die die Benutzerforschung unterstützen. Darüber hinaus bietet sie tiefere Einblicke in die Analyse von Forschungsdaten, einem der schwierigsten und wichtigsten Teile des Forschungsprozesses.",
            // Chinese
            "中国人": "《用户研究》第二版于 2022 年 2 月出版，其中包含有关进行用户研究时的道德和法律考虑的新内容，尤其是考虑到新的数据保护法。它还介绍了研究运营的基础知识，该领域侧重于支持用户研究的基础设施和流程。此外，它更深入地分析了研究数据，这是研究过程中最困难和最重要的部分之一。",
            // Russian
            "Русский": "Второе издание User Research, опубликованное в феврале 2022 года, включает новый контент, посвященный этическим и юридическим соображениям при проведении исследований пользователей, особенно в свете новых законов о защите данных. Он также знакомит с основами исследовательской деятельности — области, в которой основное внимание уделяется инфраструктуре и процессам, поддерживающим исследования пользователей. Более того, он предлагает более глубокий анализ данных исследования, что является одной из самых сложных и важных частей исследовательского процесса.",
            // French
            "Français": "La deuxième édition de User Research, publiée en février 2022, comprend du nouveau contenu sur les considérations éthiques et juridiques lors de la recherche sur les utilisateurs, notamment à la lumière des nouvelles lois sur la protection des données. Il présente également les bases des opérations de recherche, un domaine qui se concentre sur l'infrastructure et les processus qui soutiennent la recherche des utilisateurs. De plus, il offre une analyse plus approfondie des données de recherche, l’une des parties les plus difficiles et les plus importantes du processus de recherche.",
            // Japanese
            "日本語": "2022 年 2 月に発行されたユーザー リサーチの第 2 版には、特に新しいデータ保護法に照らして、ユーザー リサーチを行う際の倫理的および法的考慮事項に関する新しいコンテンツが含まれています。また、ユーザー リサーチをサポートするインフラストラクチャとプロセスに重点を置いた分野であるリサーチ オペレーションの基礎も紹介しています。さらに、リサーチ プロセスの中で最も困難かつ重要な部分の 1 つであるリサーチ データの分析について、より深く掘り下げています。",
            // Korean
            "한국인": "2022년 2월에 출판된 사용자 연구 제2판에는 특히 새로운 데이터 보호법에 비추어 사용자 연구를 수행할 때 윤리적, 법적 고려 사항에 대한 새로운 콘텐츠가 포함되어 있습니다. 또한 사용자 연구를 지원하는 인프라와 프로세스에 초점을 맞춘 분야인 연구 운영의 기본 사항을 소개합니다. 또한 연구 과정에서 가장 어렵고 중요한 부분 중 하나인 연구 데이터 분석에 대해 더 깊이 있는 정보를 제공합니다.",
            // Spanish
            "Español": "La segunda edición de User Research, publicada en febrero de 2022, incluye nuevo contenido sobre consideraciones éticas y legales al realizar investigaciones de usuarios, especialmente a la luz de las nuevas leyes de protección de datos. También presenta los conceptos básicos de las operaciones de investigación, un campo que se centra en la infraestructura y los procesos que respaldan la investigación de los usuarios. Además, ofrece más profundidad en el análisis de datos de investigación, una de las partes más difíciles e importantes del proceso de investigación.",
            // Hindi
            "हिंदी": "फरवरी 2022 में प्रकाशित यूजर रिसर्च के दूसरे संस्करण में, विशेष रूप से नए डेटा सुरक्षा कानूनों के आलोक में, यूजर रिसर्च करते समय नैतिक और कानूनी विचारों पर नई सामग्री शामिल है। यह रिसर्च ऑपरेशन की मूल बातें भी पेश करता है, एक ऐसा क्षेत्र जो यूजर रिसर्च का समर्थन करने वाले बुनियादी ढांचे और प्रक्रियाओं पर ध्यान केंद्रित करता है। इसके अलावा, यह रिसर्च डेटा के विश्लेषण पर अधिक गहराई प्रदान करता है, जो रिसर्च प्रक्रिया के सबसे कठिन और महत्वपूर्ण हिस्सों में से एक है।",
            // Portuguese
            "Português": "A segunda edição da User Research, publicada em fevereiro de 2022, inclui novos conteúdos sobre considerações éticas e legais ao fazer pesquisas com usuários, especialmente à luz das novas leis de proteção de dados. Ele também apresenta os fundamentos das operações de pesquisa, um campo que se concentra na infraestrutura e nos processos que apoiam a pesquisa do usuário. Além disso, oferece mais profundidade na análise dos dados da pesquisa, uma das partes mais difíceis e importantes do processo de pesquisa.",
            // Bengali
            "বাংলা": "ইউজার রিসার্চের দ্বিতীয় সংস্করণ, ফেব্রুয়ারি 2022-এ প্রকাশিত, ব্যবহারকারী গবেষণা করার সময় নৈতিক এবং আইনি বিবেচনার উপর নতুন বিষয়বস্তু অন্তর্ভুক্ত করে, বিশেষ করে নতুন ডেটা সুরক্ষা আইনের আলোকে। এটি গবেষণা ক্রিয়াকলাপের মৌলিক বিষয়গুলিও প্রবর্তন করে, একটি ক্ষেত্র যা অবকাঠামো এবং প্রক্রিয়াগুলির উপর ফোকাস করে যা ব্যবহারকারীর গবেষণাকে সমর্থন করে। অধিকন্তু, এটি গবেষণা তথ্য বিশ্লেষণে আরও গভীরতা প্রদান করে, যা গবেষণা প্রক্রিয়ার অন্যতম কঠিন এবং গুরুত্বপূর্ণ অংশ।",
            // Arabic
            "عَرَبِيّ": "تتضمن النسخة الثانية من بحث المستخدم، المنشورة في فبراير ٢٠٢٢، محتوى جديدًا حول الاعتبارات الأخلاقية والقانونية عند إجراء بحث المستخدم، خاصة في ضوء قوانين حماية البيانات الجديدة. كما يقدم أساسيات عمليات البحث، وهو المجال الذي يركز على البنية التحتية والعمليات التي تدعم أبحاث المستخدم. علاوة على ذلك، فهو يوفر المزيد من التعمق في تحليل بيانات البحث، وهو أحد أصعب وأهم أجزاء عملية البحث.",
            // Persian
            "فارسی": "ویرایش دوم تحقیقات کاربر، منتشر شده در فوریه ٢٠٢٢، شامل محتوای جدیدی در مورد ملاحظات اخلاقی و قانونی هنگام انجام تحقیقات کاربر، به ویژه با توجه به قوانین جدید حفاظت از داده است. همچنین مبانی عملیات تحقیقاتی را معرفی می‌کند، زمینه‌ای که بر زیرساخت‌ها و فرآیندهایی تمرکز دارد که از تحقیقات کاربر پشتیبانی می‌کنند. علاوه بر این، عمق بیشتری را در تجزیه و تحلیل داده های تحقیق، یکی از دشوارترین و مهم ترین بخش های فرآیند تحقیق، ارائه می دهد.",
        },
        // Paragraph 3
        {
            // English
            "English": "User Research is a valuable resource for anyone who wants to learn how to conduct user research effectively and efficiently. It is suitable for beginners who want to get started with user research, as well as experienced practitioners who want to refresh their knowledge and skills. By reading this book, you will gain a comprehensive overview of how to be a great user researcher and how to design better products and services that meet the needs and expectations of your users.",
            // German
            "Deutsch": "User Research ist eine wertvolle Ressource für jeden, der lernen möchte, wie man effektiv und effizient Benutzerforschung betreibt. Es eignet sich sowohl für Anfänger, die in die Benutzerforschung einsteigen möchten, als auch für erfahrene Praktiker, die ihr Wissen und ihre Fähigkeiten auffrischen möchten. Durch die Lektüre dieses Buches erhalten Sie einen umfassenden Überblick darüber, wie Sie ein großartiger Benutzerforscher werden und bessere Produkte und Dienstleistungen entwickeln, die den Bedürfnissen und Erwartungen Ihrer Benutzer entsprechen.",
            // Chinese
            "中国人": "对于任何想要学习如何有效、高效地进行用户研究的人来说，《用户研究》都是一本宝贵的资源。它适合想要开始进行用户研究的初学者，也适合想要更新知识和技能的经验丰富的从业者。通过阅读这本书，你将全面了解如何成为一名优秀的用户研究员，以及如何设计出更好的产品和服务来满足用户的需求和期望。",
            // Russian
            "Русский": "Исследование пользователей — ценный ресурс для всех, кто хочет научиться эффективно и результативно проводить исследования пользователей. Он подходит как новичкам, желающим начать работу с исследованиями пользователей, так и опытным практикам, желающим освежить свои знания и навыки. Прочитав эту книгу, вы получите исчерпывающее представление о том, как стать отличным исследователем пользователей и как разрабатывать более качественные продукты и услуги, отвечающие потребностям и ожиданиям ваших пользователей.",
            // French
            "Français": "La recherche sur les utilisateurs est une ressource précieuse pour quiconque souhaite apprendre à mener des recherches sur les utilisateurs de manière efficace et efficiente. Il convient aux débutants qui souhaitent se lancer dans la recherche d'utilisateurs, ainsi qu'aux praticiens expérimentés qui souhaitent rafraîchir leurs connaissances et leurs compétences. En lisant ce livre, vous obtiendrez un aperçu complet de la façon d'être un excellent chercheur d'utilisateurs et de concevoir de meilleurs produits et services qui répondent aux besoins et aux attentes de vos utilisateurs.",
            // Japanese
            "日本語": "ユーザー リサーチは、ユーザー リサーチを効果的かつ効率的に実施する方法を学びたい人にとって貴重なリソースです。ユーザー リサーチを始めたい初心者にも、知識とスキルをリフレッシュしたい経験豊富な実践者にも適しています。この本を読むことで、優れたユーザー リサーチャーになる方法と、ユーザーのニーズと期待に応える優れた製品とサービスを設計する方法についての包括的な概要が得られます。",
            // Korean
            "한국인": "사용자 연구는 사용자 연구를 효과적이고 효율적으로 수행하는 방법을 배우고자 하는 모든 사람에게 귀중한 리소스입니다. 사용자 연구를 시작하려는 초보자는 물론, 지식과 기술을 새로 고치고 싶은 숙련된 실무자에게도 적합합니다. 이 책을 읽으면 훌륭한 사용자 연구원이 되는 방법과 사용자의 요구와 기대를 충족하는 더 나은 제품과 서비스를 설계하는 방법에 대한 포괄적인 개요를 얻을 수 있습니다.",
            // Spanish
            "Español": "La investigación de usuarios es un recurso valioso para cualquiera que quiera aprender cómo realizar investigaciones de usuarios de forma eficaz y eficiente. Es adecuado para principiantes que quieran iniciarse en la investigación de usuarios, así como para profesionales experimentados que quieran actualizar sus conocimientos y habilidades. Al leer este libro, obtendrá una descripción general completa de cómo ser un gran investigador de usuarios y cómo diseñar mejores productos y servicios que satisfagan las necesidades y expectativas de sus usuarios.",
            // Hindi
            "हिंदी": "उपयोगकर्ता अनुसंधान उन सभी लोगों के लिए एक मूल्यवान संसाधन है जो उपयोगकर्ता अनुसंधान को प्रभावी ढंग से और कुशलता से संचालित करना सीखना चाहते हैं। यह उन शुरुआती लोगों के लिए उपयुक्त है जो उपयोगकर्ता अनुसंधान के साथ शुरुआत करना चाहते हैं, साथ ही अनुभवी व्यवसायी जो अपने ज्ञान और कौशल को ताज़ा करना चाहते हैं। इस पुस्तक को पढ़कर, आपको एक महान उपयोगकर्ता शोधकर्ता बनने और अपने उपयोगकर्ताओं की ज़रूरतों और अपेक्षाओं को पूरा करने वाले बेहतर उत्पाद और सेवाएँ डिज़ाइन करने का एक व्यापक अवलोकन प्राप्त होगा।",
            // Portuguese
            "Português": "A pesquisa de usuários é um recurso valioso para quem deseja aprender como conduzir pesquisas de usuários de maneira eficaz e eficiente. É adequado para iniciantes que desejam começar a pesquisar usuários, bem como para profissionais experientes que desejam atualizar seus conhecimentos e habilidades. Ao ler este livro, você terá uma visão abrangente de como ser um excelente pesquisador de usuários e como projetar produtos e serviços melhores que atendam às necessidades e expectativas de seus usuários.",
            // Bengali
            "বাংলা": "ব্যবহারকারী গবেষণা কার্যকরভাবে এবং দক্ষতার সাথে কীভাবে ব্যবহারকারীর গবেষণা পরিচালনা করতে হয় তা শিখতে চায় এমন যেকোন ব্যক্তির জন্য একটি মূল্যবান সম্পদ। এটি নতুনদের জন্য উপযুক্ত যারা ব্যবহারকারী গবেষণা শুরু করতে চান, সেইসাথে অভিজ্ঞ অনুশীলনকারীদের জন্য যারা তাদের জ্ঞান এবং দক্ষতা রিফ্রেশ করতে চান। এই বইটি পড়ার মাধ্যমে, আপনি কীভাবে একজন দুর্দান্ত ব্যবহারকারী গবেষক হতে হবে এবং কীভাবে আপনার ব্যবহারকারীদের চাহিদা এবং প্রত্যাশা পূরণ করে এমন আরও ভাল পণ্য এবং পরিষেবাগুলি ডিজাইন করবেন তার একটি বিস্তৃত ওভারভিউ পাবেন৷",
            // Arabic
            "عَرَبِيّ": "يعد بحث المستخدم مصدرًا قيمًا لأي شخص يريد تعلم كيفية إجراء بحث المستخدم بفعالية وكفاءة. إنها مناسبة للمبتدئين الذين يرغبون في البدء في بحث المستخدم، وكذلك الممارسين ذوي الخبرة الذين يرغبون في تحديث معارفهم ومهاراتهم. من خلال قراءة هذا الكتاب، سوف تحصل على نظرة شاملة حول كيف تصبح باحثًا رائعًا في مجال المستخدمين وكيفية تصميم منتجات وخدمات أفضل تلبي احتياجات وتوقعات المستخدمين.",
            // Persian
            "فارسی": "تحقیقات کاربر منبع ارزشمندی برای هر کسی است که می خواهد بیاموزد که چگونه تحقیقات کاربر را به طور مؤثر و کارآمد انجام دهد. این برای مبتدیانی که می خواهند با تحقیقات کاربر شروع کنند، و همچنین برای پزشکان با تجربه که می خواهند دانش و مهارت های خود را تازه کنند، مناسب است. با خواندن این کتاب، دید کلی جامعی در مورد چگونگی تبدیل شدن به یک کاربر محقق عالی و نحوه طراحی محصولات و خدمات بهتری که نیازها و انتظارات کاربران خود را برآورده می کند، به دست خواهید آورد.",
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

        // ---------------------------------------- ↓ Don't Make Me Think ↓ ----------------------------------------

        // - > Changing the web page title
        document.title = "MHA - " + user_research["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = user_research["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = user_research["TotalDescriptionAboutTheBook"][index][newLanguage];
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