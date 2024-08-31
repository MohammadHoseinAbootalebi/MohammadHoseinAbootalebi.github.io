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
var django_for_every_body = {
    "CourseName": "Django for Everybody",
    "ThreeShortDescriptions": {
        // First Paragraph
        "Paragraph-1": {
            // English
            "English": "Django for Everybody is a popular online course created and taught by Dr. Charles Russell Severance, commonly known as Dr. Chuck, through the University of Michigan on the Coursera platform. The course is designed to cater to individuals of all levels of expertise, from beginners to experienced programmers, who are interested in learning how to develop web applications using Django, a widely-used web framework built on Python. Dr. Chuck's teaching approach is highly engaging and accessible, making even complex concepts easy to grasp for learners with varying backgrounds in programming. By the end of the course, participants will have a solid understanding of Django and be able to create interactive, database-driven web applications.",
            // German
            "Deutsch": "„Django für alle“ ist ein beliebter Onlinekurs, der von Dr. Charles Russell Severance, besser bekannt als Dr. Chuck, an der University of Michigan auf der Coursera-Plattform entwickelt und unterrichtet wird. Der Kurs richtet sich an Personen aller Erfahrungsstufen, vom Anfänger bis zum erfahrenen Programmierer, die lernen möchten, wie man Webanwendungen mit Django entwickelt, einem weit verbreiteten Webframework auf Basis von Python. Dr. Chucks Lehransatz ist sehr ansprechend und zugänglich, sodass selbst komplexe Konzepte für Lernende mit unterschiedlichem Programmierhintergrund leicht verständlich sind. Am Ende des Kurses verfügen die Teilnehmer über ein solides Verständnis von Django und können interaktive, datenbankgesteuerte Webanwendungen erstellen.",
            // Chinese
            "中国人": "Django for Everybody 是一门流行的在线课程，由 Charles Russell Severance 博士（通常被称为 Chuck 博士）通过密歇根大学 Coursera 平台创建和教授。该课程旨在满足从初学者到经验丰富的程序员等各个专业水平的个人的需求，他们有兴趣学习如何使用 Django（一种基于 Python 构建的广泛使用的 Web 框架）开发 Web 应用程序。Chuck 博士的教学方法极具吸引力且易于理解，即使是复杂的概念，对于具有不同编程背景的学习者来说也很容易掌握。在课程结束时，参与者将对 Django 有扎实的理解，并能够创建交互式的、数据库驱动的 Web 应用程序。",
            // Russian
            "Русский": "Django for Everybody — популярный онлайн-курс, созданный и преподаваемый доктором Чарльзом Расселом Северансом, широко известным как доктор Чак, в Мичиганском университете на платформе Coursera. Курс рассчитан на людей с любым уровнем подготовки, от новичков до опытных программистов, желающих научиться разрабатывать веб-приложения с использованием Django, широко используемого веб-фреймворка, созданного на основе Python. Подход доктора Чака к обучению очень интересен и доступен, что делает даже сложные концепции простыми для понимания для учащихся с различным опытом программирования. К концу курса участники будут иметь прочное понимание Django и смогут создавать интерактивные веб-приложения, управляемые базами данных.",
            // French
            "Français": "Django for Everybody est un cours en ligne populaire créé et enseigné par le Dr Charles Russell Severance, communément appelé Dr Chuck, par l'intermédiaire de l'Université du Michigan sur la plateforme Coursera. Le cours est conçu pour répondre aux besoins des personnes de tous niveaux d'expertise, des débutants aux programmeurs expérimentés, qui souhaitent apprendre à développer des applications Web à l'aide de Django, un framework Web largement utilisé basé sur Python. L'approche pédagogique du Dr Chuck est très engageante et accessible, ce qui rend même les concepts complexes faciles à comprendre pour les apprenants ayant des antécédents variés en programmation. À la fin du cours, les participants auront une solide compréhension de Django et seront capables de créer des applications Web interactives basées sur des bases de données.",
            // Japanese
            "日本語": "Django for Everybody は、ミシガン大学の Coursera プラットフォームで、通称 Dr. Chuck として知られる Charles Russell Severance 博士が作成し、指導する人気のオンライン コースです。このコースは、Python で構築された広く使用されている Web フレームワークである Django を使用して Web アプリケーションを開発する方法を学習したい初心者から経験豊富なプログラマーまで、あらゆるレベルの専門知識を持つ個人に対応できるように設計されています。Dr. Chuck の指導方法は非常に魅力的でわかりやすく、プログラミングのさまざまなバックグラウンドを持つ学習者でも複雑な概念を簡単に理解できます。コースの終了までに、参加者は Django をしっかりと理解し、インタラクティブなデータベース駆動型 Web アプリケーションを作成できるようになります。",
            // Korean
            "한국인": "Django for Everybody는 Dr. Charles Russell Severance, 흔히 Dr. Chuck으로 알려진 사람이 Coursera 플랫폼에서 Michigan 대학을 통해 만들고 가르치는 인기 있는 온라인 과정입니다. 이 과정은 Python을 기반으로 하는 널리 사용되는 웹 프레임워크인 Django를 사용하여 웹 애플리케이션을 개발하는 방법을 배우고자 하는 초보자부터 숙련된 프로그래머까지 모든 수준의 전문성을 가진 개인을 대상으로 설계되었습니다. Dr. Chuck의 교육 방식은 매우 매력적이고 접근하기 쉬워 프로그래밍에 대한 배경이 다양한 학습자가 복잡한 개념도 쉽게 이해할 수 있습니다. 과정을 마치면 참가자는 Django에 대한 확실한 이해를 얻고 대화형 데이터베이스 기반 웹 애플리케이션을 만들 수 있게 됩니다.",
            // Spanish
            "Español": "Django para todos es un popular curso en línea creado y dictado por el Dr. Charles Russell Severance, más conocido como Dr. Chuck, a través de la Universidad de Michigan en la plataforma Coursera. El curso está diseñado para personas de todos los niveles de experiencia, desde principiantes hasta programadores experimentados, que estén interesados ​​en aprender a desarrollar aplicaciones web utilizando Django, un marco web ampliamente utilizado creado en Python. El enfoque de enseñanza del Dr. Chuck es muy atractivo y accesible, lo que hace que incluso los conceptos complejos sean fáciles de comprender para los estudiantes con diferentes antecedentes en programación. Al final del curso, los participantes tendrán una sólida comprensión de Django y podrán crear aplicaciones web interactivas basadas en bases de datos.",
            // Hindi
            "हिंदी": "Django for Everyone एक लोकप्रिय ऑनलाइन कोर्स है जिसे डॉ. चार्ल्स रसेल सेवरेंस ने बनाया और पढ़ाया है, जिन्हें आमतौर पर डॉ. चक के नाम से जाना जाता है, उन्होंने मिशिगन विश्वविद्यालय के माध्यम से कोर्सेरा प्लेटफ़ॉर्म पर पढ़ाया है। यह कोर्स सभी स्तरों की विशेषज्ञता वाले व्यक्तियों को ध्यान में रखकर बनाया गया है, शुरुआती से लेकर अनुभवी प्रोग्रामर तक, जो Django का उपयोग करके वेब एप्लिकेशन विकसित करना सीखने में रुचि रखते हैं, जो कि Python पर निर्मित एक व्यापक रूप से उपयोग किया जाने वाला वेब फ्रेमवर्क है। डॉ. चक का शिक्षण दृष्टिकोण अत्यधिक आकर्षक और सुलभ है, जो प्रोग्रामिंग में अलग-अलग पृष्ठभूमि वाले शिक्षार्थियों के लिए जटिल अवधारणाओं को भी समझना आसान बनाता है। कोर्स के अंत तक, प्रतिभागियों को Django की ठोस समझ हो जाएगी और वे इंटरैक्टिव, डेटाबेस-संचालित वेब एप्लिकेशन बनाने में सक्षम होंगे।",
            // Portuguese
            "Português": "Django for Everybody é um curso online popular criado e ministrado pelo Dr. Charles Russell Severance, vulgarmente conhecido como Dr. Chuck, pela Universidade de Michigan na plataforma Coursera. O curso foi desenvolvido para atender indivíduos de todos os níveis de especialização, desde iniciantes a programadores experientes, que estejam interessados ​​em aprender a desenvolver aplicações web utilizando Django, um framework web amplamente utilizado construído em Python. A abordagem de ensino do Dr. Chuck é altamente envolvente e acessível, tornando até mesmo conceitos complexos fáceis de compreender para estudantes com experiências variadas em programação. No final do curso, os participantes terão um conhecimento sólido de Django e serão capazes de criar aplicações web interativas e baseadas em base de dados.",
            // Bengali
            "বাংলা": "জ্যাঙ্গো ফর এভরিবডি একটি জনপ্রিয় অনলাইন কোর্স যা কোর্সেরা প্ল্যাটফর্মে মিশিগান বিশ্ববিদ্যালয়ের মাধ্যমে ড. চার্লস রাসেল সেভারেন্স, সাধারণত ড. চাক নামে পরিচিত, দ্বারা তৈরি এবং শেখানো হয়। কোর্সটি ডিজাইন করা হয়েছে সকল স্তরের দক্ষতার ব্যক্তিদের, নতুনদের থেকে অভিজ্ঞ প্রোগ্রামারদের জন্য, যারা পাইথনে নির্মিত একটি বহুল-ব্যবহৃত ওয়েব ফ্রেমওয়ার্ক জ্যাঙ্গো ব্যবহার করে কীভাবে ওয়েব অ্যাপ্লিকেশন তৈরি করতে হয় তা শিখতে আগ্রহী। ডঃ চাকের শিক্ষার পদ্ধতি অত্যন্ত আকর্ষক এবং অ্যাক্সেসযোগ্য, এমনকি জটিল ধারণাগুলিকে প্রোগ্রামিং-এর বিভিন্ন ব্যাকগ্রাউন্ড সহ শিক্ষার্থীদের জন্য উপলব্ধি করা সহজ করে তোলে। কোর্সের শেষ নাগাদ, অংশগ্রহণকারীদের জ্যাঙ্গো সম্পর্কে একটি দৃঢ় ধারণা থাকবে এবং তারা ইন্টারেক্টিভ, ডাটাবেস-চালিত ওয়েব অ্যাপ্লিকেশন তৈরি করতে সক্ষম হবে।",
            // Arabic
            "عَرَبِيّ": "Django for Everybody هي دورة تدريبية شهيرة عبر الإنترنت أنشأها وقام بتدريسها الدكتور تشارلز راسل سيفيرانس، المعروف باسم الدكتور تشاك، من خلال جامعة ميشيغان على منصة كورسيرا. تم تصميم الدورة التدريبية لتلبية احتياجات الأفراد من جميع مستويات الخبرة، من المبتدئين إلى المبرمجين ذوي الخبرة، المهتمين بتعلم كيفية تطوير تطبيقات الويب باستخدام Django، وهو إطار عمل ويب واسع الاستخدام مبني على Python. إن أسلوب التدريس للدكتور تشاك جذاب للغاية وسهل الفهم، مما يجعل حتى المفاهيم المعقدة سهلة الفهم للمتعلمين من خلفيات مختلفة في البرمجة. بحلول نهاية الدورة التدريبية، سيكون لدى المشاركين فهم قوي لـ Django وسيكونون قادرين على إنشاء تطبيقات ويب تفاعلية تعتمد على قواعد البيانات.",
            // Persian
            "فارسی": "جنگو برای همه یک دوره آنلاین محبوب است که توسط دکتر چارلز راسل سورنس، که معمولاً به نام دکتر چاک شناخته می شود، از طریق دانشگاه میشیگان در پلتفرم Coursera ایجاد و تدریس می شود. این دوره برای پاسخگویی به افراد در تمام سطوح تخصص، از مبتدی تا برنامه نویس باتجربه، که علاقه مند به یادگیری نحوه توسعه برنامه های کاربردی وب با استفاده از جنگو، یک چارچوب وب پرکاربرد ساخته شده بر روی پایتون هستند، طراحی شده است. رویکرد تدریس دکتر چاک بسیار جذاب و قابل دسترس است، و درک مفاهیم پیچیده را برای زبان آموزان با پیشینه های مختلف در برنامه نویسی آسان می کند. در پایان دوره، شرکت کنندگان درک کاملی از جنگو خواهند داشت و قادر به ایجاد برنامه های کاربردی وب تعاملی مبتنی بر پایگاه داده خواهند بود.",
        },
        // Second Paragraph
        "Paragraph-2": {
            // English
            "English": "Throughout the Django for Everybody course, Dr. Chuck covers a comprehensive range of topics, including setting up a Django development environment, creating database models, designing user interfaces with views and templates, implementing user authentication, and deploying Django applications to web servers. The lectures are accompanied by practical exercises, quizzes, and assignments that provide hands-on experience with Django development. Additionally, Dr. Chuck emphasizes real-world applications of Django, enabling students to build practical projects that demonstrate their mastery of Django's core features and functionalities.",
            // German
            "Deutsch": "Im Kurs „Django für alle“ behandelt Dr. Chuck ein umfassendes Themenspektrum, darunter das Einrichten einer Django-Entwicklungsumgebung, das Erstellen von Datenbankmodellen, das Entwerfen von Benutzeroberflächen mit Ansichten und Vorlagen, das Implementieren der Benutzerauthentifizierung und das Bereitstellen von Django-Anwendungen auf Webservern. Die Vorlesungen werden von praktischen Übungen, Tests und Aufgaben begleitet, die praktische Erfahrung mit der Django-Entwicklung vermitteln. Darüber hinaus legt Dr. Chuck Wert auf reale Anwendungen von Django, sodass die Studenten praktische Projekte erstellen können, die ihre Beherrschung der Kernfunktionen und -funktionen von Django demonstrieren.",
            // Chinese
            "中国人": "在整个 Django for Everybody 课程中，Chuck 博士涵盖了广泛的主题，包括设置 Django 开发环境、创建数据库模型、使用视图和模板设计用户界面、实施用户身份验证以及将 Django 应用程序部署到 Web 服务器。讲座配有实践练习、测验和作业，提供 Django 开发的实践经验。此外，Chuck 博士强调 Django 的实际应用，使学生能够构建实际项目，展示他们对 Django 核心特性和功能的掌握。",
            // Russian
            "Русский": "На протяжении всего курса Django for Everybody доктор Чак охватывает широкий спектр тем, включая настройку среды разработки Django, создание моделей баз данных, проектирование пользовательских интерфейсов с представлениями и шаблонами, реализацию аутентификации пользователей и развертывание приложений Django на веб-серверах. Лекции сопровождаются практическими упражнениями, тестами и заданиями, которые дают практический опыт разработки Django. Кроме того, доктор Чак делает акцент на реальных приложениях Django, позволяя студентам создавать практические проекты, демонстрирующие их мастерство в основных функциях и возможностях Django.",
            // French
            "Français": "Tout au long du cours Django for Everybody, le Dr Chuck couvre un large éventail de sujets, notamment la configuration d'un environnement de développement Django, la création de modèles de base de données, la conception d'interfaces utilisateur avec des vues et des modèles, la mise en œuvre de l'authentification des utilisateurs et le déploiement d'applications Django sur des serveurs Web. Les cours sont accompagnés d'exercices pratiques, de questionnaires et de devoirs qui offrent une expérience concrète du développement Django. De plus, le Dr Chuck met l'accent sur les applications concrètes de Django, permettant aux étudiants de créer des projets pratiques qui démontrent leur maîtrise des principales fonctionnalités de Django.",
            // Japanese
            "日本語": "Django for Everybody コース全体を通じて、Django 開発環境の設定、データベース モデルの作成、ビューとテンプレートを使用したユーザー インターフェイスの設計、ユーザー認証の実装、Django アプリケーションの Web サーバーへの展開など、幅広いトピックを Chuck 博士が取り上げます。講義には、Django 開発の実践的な経験を提供する実践的な演習、クイズ、課題が伴います。さらに、Django の実際のアプリケーションに重点を置き、学生が Django のコア機能の習得を示す実用的なプロジェクトを構築できるようにします。",
            // Korean
            "한국인": "Django for Everybody 과정 전반에 걸쳐 Chuck 박사는 Django 개발 환경 설정, 데이터베이스 모델 생성, 뷰와 템플릿을 사용한 사용자 인터페이스 설계, 사용자 인증 구현, Django 애플리케이션 웹 서버 배포를 포함한 포괄적인 주제를 다룹니다. 강의에는 Django 개발에 대한 실무 경험을 제공하는 실습 연습, 퀴즈 및 과제가 함께 제공됩니다. 또한 Chuck 박사는 Django의 실제 적용을 강조하여 학생들이 Django의 핵심 기능과 기능에 대한 숙달을 입증하는 실무 프로젝트를 구축할 수 있도록 합니다.",
            // Spanish
            "Español": "A lo largo del curso Django para todos, el Dr. Chuck cubre una amplia gama de temas, que incluyen la configuración de un entorno de desarrollo de Django, la creación de modelos de bases de datos, el diseño de interfaces de usuario con vistas y plantillas, la implementación de la autenticación de usuarios y la implementación de aplicaciones de Django en servidores web. Las clases están acompañadas de ejercicios prácticos, exámenes y tareas que brindan experiencia práctica con el desarrollo de Django. Además, el Dr. Chuck enfatiza las aplicaciones del mundo real de Django, lo que permite a los estudiantes crear proyectos prácticos que demuestren su dominio de las características y funcionalidades principales de Django.",
            // Hindi
            "हिंदी": "Django for Everyone पाठ्यक्रम के दौरान, डॉ. चक ने Django विकास वातावरण की स्थापना, डेटाबेस मॉडल बनाना, व्यू और टेम्प्लेट के साथ उपयोगकर्ता इंटरफ़ेस डिज़ाइन करना, उपयोगकर्ता प्रमाणीकरण लागू करना और वेब सर्वर पर Django एप्लिकेशन तैनात करना सहित विषयों की एक विस्तृत श्रृंखला को कवर किया। व्याख्यानों के साथ व्यावहारिक अभ्यास, प्रश्नोत्तरी और असाइनमेंट होते हैं जो Django विकास के साथ व्यावहारिक अनुभव प्रदान करते हैं। इसके अतिरिक्त, डॉ. चक Django के वास्तविक दुनिया के अनुप्रयोगों पर जोर देते हैं, जिससे छात्र व्यावहारिक प्रोजेक्ट बनाने में सक्षम होते हैं जो Django की मुख्य विशेषताओं और कार्यात्मकताओं में उनकी महारत को प्रदर्शित करते हैं।",
            // Portuguese
            "Português": "Ao longo do curso Django para Todos, o Dr. Chuck cobre uma vasta gama de tópicos, incluindo a configuração de um ambiente de desenvolvimento Django, a criação de modelos de base de dados, o design de interfaces de utilizador com visualizações e modelos, a implementação de autenticação de utilizador e implementação de aplicações Django em servidores web. As palestras são acompanhadas de exercícios práticos, questionários e tarefas que proporcionam experiência prática com o desenvolvimento em Django. Além disso, o Dr. Chuck enfatiza as aplicações reais do Django, permitindo aos alunos construir projetos práticos que demonstrem o seu domínio das principais características e funcionalidades do Django.",
            // Bengali
            "বাংলা": "জ্যাঙ্গো ফর এভরিবডি কোর্স জুড়ে, ডাঃ চাক একটি জ্যাঙ্গো ডেভেলপমেন্ট এনভায়রনমেন্ট সেট আপ করা, ডাটাবেস মডেল তৈরি করা, ভিউ এবং টেমপ্লেট সহ ইউজার ইন্টারফেস ডিজাইন করা, ইউজার অথেন্টিকেশন বাস্তবায়ন করা এবং ওয়েব সার্ভারে জ্যাঙ্গো অ্যাপ্লিকেশান স্থাপন করা সহ বিষয়গুলির একটি বিস্তৃত পরিসর কভার করেছেন। বক্তৃতাগুলির সাথে ব্যবহারিক অনুশীলন, কুইজ এবং অ্যাসাইনমেন্ট রয়েছে যা জ্যাঙ্গো বিকাশের সাথে অভিজ্ঞতা প্রদান করে। অতিরিক্তভাবে, ডাঃ চাক জ্যাঙ্গোর বাস্তব-বিশ্বের অ্যাপ্লিকেশনের উপর জোর দেন, যা শিক্ষার্থীদের এমন বাস্তব প্রকল্প তৈরি করতে সক্ষম করে যা জ্যাঙ্গোর মূল বৈশিষ্ট্য এবং কার্যকারিতাগুলির উপর তাদের দক্ষতা প্রদর্শন করে।",
            // Arabic
            "عَرَبِيّ": "يغطي الدكتور تشاك خلال دورة Django for Everybody مجموعة شاملة من المواضيع، بما في ذلك إعداد بيئة تطوير Django، وإنشاء نماذج قواعد البيانات، وتصميم واجهات المستخدم مع العروض والقوالب، وتنفيذ مصادقة المستخدم، ونشر تطبيقات Django على خوادم الويب. وتصاحب المحاضرات تمارين عملية واختبارات وواجبات توفر خبرة عملية في تطوير Django. بالإضافة إلى ذلك، يؤكد الدكتور تشاك على التطبيقات الواقعية لـ Django، مما يمكن الطلاب من بناء مشاريع عملية توضح إتقانهم للميزات والوظائف الأساسية لـ Django.",
            // Persian
            "فارسی": "در طول دوره جنگو برای همه، دکتر چاک طیف گسترده ای از موضوعات را پوشش می دهد، از جمله راه اندازی یک محیط توسعه جنگو، ایجاد مدل های پایگاه داده، طراحی رابط های کاربری با نماها و قالب ها، پیاده سازی احراز هویت کاربر، و استقرار برنامه های جنگو در سرورهای وب. این سخنرانی‌ها با تمرین‌های عملی، آزمون‌ها و تکالیفی همراه است که تجربه عملی را با توسعه جنگو فراهم می‌کند. علاوه بر این، دکتر چاک بر کاربردهای دنیای واقعی جنگو تأکید می‌کند و دانش‌آموزان را قادر می‌سازد تا پروژه‌های عملی بسازند که تسلط خود را بر ویژگی‌ها و عملکردهای اصلی جنگو نشان دهد.",
        },
        // Third Paragraph
        "Paragraph-3": {
            // English
            "English": "One of the key highlights of Django for Everybody is Dr. Chuck's extensive experience in the field of web development and his passion for teaching. As a renowned educator and technologist, Dr. Chuck brings a wealth of knowledge and practical insights to the course, making it an invaluable resource for anyone looking to enhance their skills in Django development. Whether you are a beginner seeking to enter the world of web programming or a seasoned professional looking to expand your expertise, Django for Everybody offers a comprehensive and engaging learning experience that can empower you to create dynamic and responsive web applications using Django.",
            // German
            "Deutsch": "Eines der wichtigsten Highlights von „Django für alle“ ist Dr. Chucks umfangreiche Erfahrung im Bereich der Webentwicklung und seine Leidenschaft für das Unterrichten. Als renommierter Pädagoge und Techniker bringt Dr. Chuck eine Fülle von Wissen und praktischen Erkenntnissen in den Kurs ein, was ihn zu einer unschätzbaren Ressource für alle macht, die ihre Fähigkeiten in der Django-Entwicklung verbessern möchten. Egal, ob Sie ein Anfänger sind, der in die Welt der Webprogrammierung einsteigen möchte, oder ein erfahrener Profi, der sein Fachwissen erweitern möchte, „Django für alle“ bietet eine umfassende und spannende Lernerfahrung, die Sie in die Lage versetzt, dynamische und reaktionsschnelle Webanwendungen mit Django zu erstellen.",
            // Chinese
            "中国人": "Django for Everybody 的一大亮点是 Chuck 博士在 Web 开发领域的丰富经验和对教学的热情。作为知名教育家和技术专家，Chuck 博士为该课程带来了丰富的知识和实用见解，使其成为任何希望提高 Django 开发技能的人的宝贵资源。无论您是想要进入 Web 编程世界的初学者，还是想要扩展专业知识的经验丰富的专业人士，Django for Everybody 都提供全面而引人入胜的学习体验，使您能够使用 Django 创建动态且响应迅速的 Web 应用程序。",
            // Russian
            "Русский": "Одной из главных особенностей Django for Everybody является обширный опыт доктора Чака в области веб-разработки и его страсть к преподаванию. Как известный педагог и технолог, доктор Чак привносит в курс богатство знаний и практических идей, делая его бесценным ресурсом для тех, кто хочет улучшить свои навыки в разработке Django. Независимо от того, являетесь ли вы новичком, желающим войти в мир веб-программирования, или опытным профессионалом, желающим расширить свои знания, Django for Everybody предлагает всеобъемлющий и увлекательный опыт обучения, который может дать вам возможность создавать динамичные и адаптивные веб-приложения с использованием Django.",
            // French
            "Français": "L'un des points forts de Django for Everybody est la vaste expérience du Dr Chuck dans le domaine du développement Web et sa passion pour l'enseignement. En tant qu'éducateur et technologue renommé, le Dr Chuck apporte une richesse de connaissances et d'idées pratiques au cours, ce qui en fait une ressource inestimable pour quiconque cherche à améliorer ses compétences en développement Django. Que vous soyez un débutant cherchant à entrer dans le monde de la programmation Web ou un professionnel chevronné cherchant à élargir son expertise, Django for Everybody offre une expérience d'apprentissage complète et engageante qui peut vous permettre de créer des applications Web dynamiques et réactives à l'aide de Django.",
            // Japanese
            "日本語": "Django for Everybody の重要な特徴の 1 つは、Web 開発分野における Chuck 博士の豊富な経験と、教育に対する情熱です。著名な教育者であり技術者でもある Chuck 博士は、豊富な知識と実践的な洞察をこのコースに持ち込み、Django 開発のスキルを向上させたいと考えている人にとって貴重なリソースとなっています。Web プログラミングの世界に足を踏み入れようとしている初心者でも、専門知識を広げたいと考えている熟練したプロフェッショナルでも、Django for Everybody は、Django を使用して動的で応答性の高い Web アプリケーションを作成できるようになる包括的で魅力的な学習体験を提供します。",
            // Korean
            "한국인": "Django for Everybody의 주요 하이라이트 중 하나는 웹 개발 분야에서의 Chuck 박사의 광범위한 경험과 교육에 대한 열정입니다. 유명한 교육자이자 기술자인 Chuck 박사는 이 과정에 풍부한 지식과 실질적인 통찰력을 제공하여 Django 개발 기술을 향상시키고자 하는 모든 사람에게 귀중한 리소스가 됩니다. 웹 프로그래밍 세계에 진입하려는 초보자이든 전문 지식을 확장하려는 노련한 전문가이든 Django for Everybody는 Django를 사용하여 동적이고 반응성 있는 웹 애플리케이션을 만들 수 있는 포괄적이고 매력적인 학습 경험을 제공합니다.",
            // Spanish
            "Español": "Uno de los aspectos más destacados de Django for Everybody es la amplia experiencia del Dr. Chuck en el campo del desarrollo web y su pasión por la enseñanza. Como reconocido educador y tecnólogo, el Dr. Chuck aporta una gran cantidad de conocimientos y perspectivas prácticas al curso, lo que lo convierte en un recurso invaluable para cualquier persona que desee mejorar sus habilidades en el desarrollo de Django. Ya sea que sea un principiante que busca ingresar al mundo de la programación web o un profesional experimentado que busca expandir su experiencia, Django for Everybody ofrece una experiencia de aprendizaje integral y atractiva que puede capacitarlo para crear aplicaciones web dinámicas y responsivas utilizando Django.",
            // Hindi
            "हिंदी": "Django for Everyone की एक मुख्य विशेषता यह है कि डॉ. चक का वेब डेवलपमेंट के क्षेत्र में व्यापक अनुभव और शिक्षण के प्रति उनका जुनून है। एक प्रसिद्ध शिक्षक और प्रौद्योगिकीविद् के रूप में, डॉ. चक इस कोर्स में ज्ञान और व्यावहारिक अंतर्दृष्टि का खजाना लेकर आते हैं, जो इसे Django डेवलपमेंट में अपने कौशल को बढ़ाने की चाह रखने वाले किसी भी व्यक्ति के लिए एक अमूल्य संसाधन बनाता है। चाहे आप वेब प्रोग्रामिंग की दुनिया में प्रवेश करने वाले शुरुआती हों या अपनी विशेषज्ञता का विस्तार करने के इच्छुक अनुभवी पेशेवर हों, Django for Everyone एक व्यापक और आकर्षक शिक्षण अनुभव प्रदान करता है जो आपको Django का उपयोग करके गतिशील और उत्तरदायी वेब एप्लिकेशन बनाने में सक्षम बना सकता है।",
            // Portuguese
            "Português": "Um dos principais destaques do Django for Everybody é a vasta experiência do Dr. Chuck na área do desenvolvimento web e a sua paixão pelo ensino. Como educador e tecnólogo de renome, o Dr. Chuck traz uma riqueza de conhecimentos e insights práticos para o curso, tornando-o um recurso inestimável para quem procura melhorar as suas capacidades no desenvolvimento do Django. Quer seja um principiante que procura entrar no mundo da programação web ou um profissional experiente que procura expandir os seus conhecimentos, o Django for Everybody oferece uma experiência de aprendizagem abrangente e envolvente que o pode capacitar para criar aplicações web dinâmicas e responsivas utilizando Django.",
            // Bengali
            "বাংলা": "জ্যাঙ্গো ফর এভরিবডির অন্যতম প্রধান আকর্ষণ হল ওয়েব ডেভেলপমেন্টের ক্ষেত্রে ডঃ চাকের ব্যাপক অভিজ্ঞতা এবং শিক্ষাদানের প্রতি তার আবেগ। একজন প্রখ্যাত শিক্ষাবিদ এবং প্রযুক্তিবিদ হিসাবে, ড. চাক কোর্সটিতে প্রচুর জ্ঞান এবং বাস্তব অন্তর্দৃষ্টি নিয়ে এসেছেন, যা জ্যাঙ্গো বিকাশে তাদের দক্ষতা বাড়াতে চাইছেন এমন প্রত্যেকের জন্য এটিকে একটি অমূল্য সম্পদ করে তুলেছে। আপনি ওয়েব প্রোগ্রামিং-এর জগতে প্রবেশ করতে চাওয়া একজন শিক্ষানবিস বা একজন অভিজ্ঞ পেশাদার যা আপনার দক্ষতা বাড়াতে চাইছেন না কেন, জ্যাঙ্গো ফর এভরিবডি একটি ব্যাপক এবং আকর্ষক শেখার অভিজ্ঞতা অফার করে যা আপনাকে জ্যাঙ্গো ব্যবহার করে গতিশীল এবং প্রতিক্রিয়াশীল ওয়েব অ্যাপ্লিকেশন তৈরি করতে সক্ষম করে।",
            // Arabic
            "عَرَبِيّ": "من أهم مميزات دورة Django for Everybody هي الخبرة الواسعة التي يتمتع بها الدكتور تشاك في مجال تطوير الويب وشغفه بالتدريس. بصفته معلمًا وخبيرًا في التكنولوجيا، يجلب الدكتور تشاك ثروة من المعرفة والرؤى العملية إلى الدورة، مما يجعلها موردًا لا يقدر بثمن لأي شخص يتطلع إلى تعزيز مهاراته في تطوير Django. سواء كنت مبتدئًا تسعى إلى دخول عالم برمجة الويب أو محترفًا متمرسًا يتطلع إلى توسيع خبرته، فإن دورة Django for Everybody تقدم تجربة تعليمية شاملة وجذابة يمكنها تمكينك من إنشاء تطبيقات ويب ديناميكية ومستجيبة باستخدام Django.",
            // Persian
            "فارسی": "یکی از مهمترین نکات برجسته جنگو برای همه، تجربه گسترده دکتر چاک در زمینه توسعه وب و اشتیاق او به تدریس است. دکتر چاک به‌عنوان یک مربی و فن‌شناس مشهور، دانش و بینش‌های عملی فراوانی را در این دوره به ارمغان می‌آورد و آن را به منبعی ارزشمند برای هر کسی که به دنبال افزایش مهارت‌های خود در توسعه جنگو است تبدیل می‌کند. چه مبتدی باشید که به دنبال ورود به دنیای برنامه نویسی وب هستید و چه یک حرفه ای باتجربه که به دنبال گسترش تخصص خود هستید، جنگو برای همه یک تجربه یادگیری جامع و جذاب را ارائه می دهد که می تواند به شما قدرت ایجاد برنامه های وب پویا و پاسخگو با استفاده از جنگو را بدهد.",
        },
    },
    "InstructorDescriptions": {
        // Paragraph 1
        "Paragraph-1": {
            // English
            "English": "Charles Severance (a.k.a. Dr. Chuck) is a Clinical Professor at the University of Michigan School of Information, where he teaches various technology-oriented courses including programming, database design, and Web development. Chuck has written a number of books including Using Google App Engine, and Python for Everybody. His research field is in the building of learning management systems such as Sakai, Moodle, Blackboard, ANGEL, and others. He was the chief architect for the Sakai Project, a learning management system used at about 300 schools worldwide and wrote the book Sakai: Free as in Freedom, that describes his experiences as one of the leaders of the project. In the mid-1990s he was the host of Internet:TCI, a national television talk show about the Internet that ran for several years on the TCI cable system. He was long-time a columnist for the IEEE Computer Magazine writing a monthly column called Computing Conversations that features video interviews with famous technology leaders and innovators.",
            // German
            "Deutsch": "Charles Severance (alias Dr. Chuck) ist klinischer Professor an der University of Michigan School of Information, wo er verschiedene technologieorientierte Kurse unterrichtet, darunter Programmierung, Datenbankdesign und Webentwicklung. Chuck hat mehrere Bücher geschrieben, darunter Using Google App Engine und Python for Everybody. Sein Forschungsgebiet ist der Aufbau von Lernmanagementsystemen wie Sakai, Moodle, Blackboard, ANGEL und anderen. Er war der Chefarchitekt des Sakai-Projekts, eines Lernmanagementsystems, das an etwa 300 Schulen weltweit eingesetzt wird, und schrieb das Buch Sakai: Free as in Freedom, in dem er seine Erfahrungen als einer der Leiter des Projekts beschreibt. Mitte der 1990er Jahre war er Moderator von Internet:TCI, einer landesweiten Fernseh-Talkshow über das Internet, die mehrere Jahre lang im TCI-Kabelsystem lief. Er war lange Zeit Kolumnist für das IEEE Computer Magazine und schrieb eine monatliche Kolumne namens Computing Conversations, die Videointerviews mit berühmten Technologieführern und Innovatoren enthält.",
            // Chinese
            "中国人": "Charles Severance（又名 Chuck 博士）是密歇根大学信息学院的临床教授，他在那里教授各种技术导向课程，包括编程、数据库设计和 Web 开发。Chuck 撰写了许多书籍，包括《使用 Google App Engine》和《Python for Everybody》。他的研究领域是学习管理系统的构建，例如 Sakai、Moodle、Blackboard、ANGEL 等。他是 Sakai 项目的首席架构师，该项目是全球约 300 所学校使用的学习管理系统，他撰写了《Sakai：自由即自由》一书，描述了他作为该项目领导者之一的经历。20 世纪 90 年代中期，他是 Internet:TCI 的主持人，这是一档关于互联网的全国电视脱口秀节目，在 TCI 有线系统上播出了数年。他长期担任 IEEE 计算机杂志的专栏作家，每月撰写一个名为“计算对话”的专栏，其中包含对著名技术领导者和创新者的视频采访。",
            // Russian
            "Русский": "Чарльз Северанс (также известный как доктор Чак) — клинический профессор в Школе информации Мичиганского университета, где он преподает различные курсы, ориентированные на технологии, включая программирование, проектирование баз данных и веб-разработку. Чак написал ряд книг, включая «Использование Google App Engine» и «Python for Everybody». Областью его исследований является создание систем управления обучением, таких как Sakai, Moodle, Blackboard, ANGEL и других. Он был главным архитектором проекта Sakai, системы управления обучением, используемой примерно в 300 школах по всему миру, и написал книгу Sakai: Free as in Freedom, в которой описывается его опыт как одного из лидеров проекта. В середине 1990-х годов он был ведущим Internet:TCI, национального телевизионного ток-шоу об Интернете, которое в течение нескольких лет транслировалось по кабельной системе TCI. Он долгое время был обозревателем журнала IEEE Computer Magazine, писал ежемесячную колонку под названием Computing Conversations, в которой публиковались видеоинтервью с известными лидерами и новаторами в области технологий.",
            // French
            "Français": "Charles Severance (alias Dr. Chuck) est professeur clinicien à l'École d'information de l'Université du Michigan, où il enseigne divers cours axés sur la technologie, notamment la programmation, la conception de bases de données et le développement Web. Chuck a écrit un certain nombre de livres, notamment Using Google App Engine et Python for Everybody. Son domaine de recherche porte sur la création de systèmes de gestion de l'apprentissage tels que Sakai, Moodle, Blackboard, ANGEL et d'autres. Il a été l'architecte en chef du projet Sakai, un système de gestion de l'apprentissage utilisé dans environ 300 écoles à travers le monde et a écrit le livre Sakai: Free as in Freedom, qui décrit ses expériences en tant que l'un des dirigeants du projet. Au milieu des années 1990, il était l'animateur d'Internet:TCI, une émission de télévision nationale sur Internet diffusée pendant plusieurs années sur le système câblé TCI. Il a longtemps été chroniqueur pour le magazine IEEE Computer, écrivant une chronique mensuelle intitulée Computing Conversations qui présente des entretiens vidéo avec des leaders et des innovateurs technologiques célèbres.",
            // Japanese
            "日本語": "チャールズ・セヴァランス（別名チャック博士）は、ミシガン大学情報学部の臨床教授で、プログラミング、データベース設計、Web 開発など、さまざまな技術指向のコースを教えています。チャックは、「Using Google App Engine」や「Python for Everybody」など、多数の書籍を執筆しています。彼の研究分野は、Sakai、Moodle、Blackboard、ANGEL などの学習管理システムの構築です。彼は、世界中の約 300 の学校で使用されている学習管理システムである Sakai プロジェクトの主任設計者であり、プロジェクトのリーダーの 1 人としての経験を記した「Sakai: Free as in Freedom」という書籍を執筆しました。1990 年代半ばには、TCI ケーブル システムで数年間放送された、インターネットに関する全国テレビ トーク ショー「Internet:TCI」の司会者でした。彼は長年、IEEE Computer Magazine のコラムニストを務め、有名な技術リーダーや革新者へのビデオ インタビューを特集した「Computing Conversations」という月刊コラムを執筆していました。",
            // Korean
            "한국인": "Charles Severance(일명 Dr. Chuck)는 University of Michigan School of Information에서 임상 교수로 재직 중이며, 프로그래밍, 데이터베이스 설계, 웹 개발을 포함한 다양한 기술 중심 과정을 가르칩니다. Chuck은 Using Google App Engine, Python for Everybody를 포함한 여러 권의 책을 썼습니다. 그의 연구 분야는 Sakai, Moodle, Blackboard, ANGEL 등과 같은 학습 관리 시스템을 구축하는 것입니다. 그는 전 세계 약 300개 학교에서 사용되는 학습 관리 시스템인 Sakai Project의 수석 설계자였으며, 프로젝트 리더 중 한 명으로서의 경험을 설명하는 Sakai: Free as in Freedom이라는 책을 썼습니다. 1990년대 중반에 그는 TCI 케이블 시스템에서 수년간 방영된 인터넷에 대한 전국 TV 토크쇼인 Internet:TCI의 진행자였습니다. 그는 오랫동안 IEEE Computer Magazine의 칼럼니스트로 활동하며 유명한 기술 리더와 혁신가와의 비디오 인터뷰를 특징으로 하는 Computing Conversations이라는 월간 칼럼을 썼습니다.",
            // Spanish
            "Español": "Charles Severance (también conocido como Dr. Chuck) es profesor clínico en la Escuela de Información de la Universidad de Michigan, donde enseña varios cursos orientados a la tecnología, que incluyen programación, diseño de bases de datos y desarrollo web. Chuck ha escrito varios libros, entre ellos Using Google App Engine y Python for Everybody. Su campo de investigación es la construcción de sistemas de gestión del aprendizaje como Sakai, Moodle, Blackboard, ANGEL y otros. Fue el arquitecto jefe del Proyecto Sakai, un sistema de gestión del aprendizaje utilizado en unas 300 escuelas de todo el mundo y escribió el libro Sakai: Free as in Freedom, que describe sus experiencias como uno de los líderes del proyecto. A mediados de la década de 1990 fue el presentador de Internet:TCI, un programa de entrevistas de televisión nacional sobre Internet que se emitió durante varios años en el sistema de cable TCI. Fue columnista durante mucho tiempo de la revista IEEE Computer Magazine y escribió una columna mensual llamada Computing Conversations que presenta entrevistas en video con famosos líderes e innovadores tecnológicos.",
            // Hindi
            "हिंदी": "चार्ल्स सेवरेंस (जिसे डॉ. चक के नाम से भी जाना जाता है) मिशिगन विश्वविद्यालय के सूचना विद्यालय में एक क्लीनिकल प्रोफेसर हैं, जहाँ वे प्रोग्रामिंग, डेटाबेस डिज़ाइन और वेब डेवलपमेंट सहित विभिन्न प्रौद्योगिकी-उन्मुख पाठ्यक्रम पढ़ाते हैं। चक ने कई किताबें लिखी हैं, जिनमें Google App Engine का उपयोग करना और Python for Everyone शामिल हैं। उनका शोध क्षेत्र सकाई, मूडल, ब्लैकबोर्ड, ANGEL और अन्य जैसे शिक्षण प्रबंधन प्रणालियों के निर्माण में है। वे सकाई परियोजना के मुख्य वास्तुकार थे, जो दुनिया भर के लगभग 300 स्कूलों में इस्तेमाल की जाने वाली एक शिक्षण प्रबंधन प्रणाली है और उन्होंने सकाई: फ़्री एज़ इन फ़्रीडम नामक पुस्तक लिखी है, जिसमें परियोजना के नेताओं में से एक के रूप में उनके अनुभवों का वर्णन किया गया है। 1990 के दशक के मध्य में वे इंटरनेट: टीसीआई के होस्ट थे, जो इंटरनेट के बारे में एक राष्ट्रीय टेलीविज़न टॉक शो था जो टीसीआई केबल सिस्टम पर कई वर्षों तक चला। वे लंबे समय तक IEEE कंप्यूटर मैगज़ीन के स्तंभकार थे और कंप्यूटिंग वार्तालाप नामक एक मासिक स्तंभ लिखते थे जिसमें प्रसिद्ध प्रौद्योगिकी नेताओं और नवप्रवर्तकों के साथ वीडियो साक्षात्कार शामिल होते थे।",
            // Portuguese
            "Português": "Charles Severance (também conhecido por Dr. Chuck) é professor clínico na Escola de Informação da Universidade de Michigan, onde leciona vários cursos orientados para a tecnologia, incluindo programação, design de bases de dados e desenvolvimento Web. Chuck escreveu vários livros, incluindo Using Google App Engine e Python for Everybody. A sua área de investigação é a construção de sistemas de gestão da aprendizagem como o Sakai, Moodle, Blackboard, ANGEL, entre outros. Foi o arquiteto-chefe do Projeto Sakai, um sistema de gestão da aprendizagem utilizado em cerca de 300 escolas em todo o mundo e escreveu o livro Sakai: Free as in Freedom, que descreve as suas experiências como um dos líderes do projeto. Em meados da década de 1990, foi o apresentador do Internet:TCI, um talk show televisivo nacional sobre a Internet que funcionou durante vários anos no sistema de cabo TCI. Foi colunista de longa data da IEEE Computer Magazine, escrevendo uma coluna mensal chamada Computing Conversations, que apresenta entrevistas em vídeo com líderes e inovadores famosos da área da tecnologia.",
            // Bengali
            "বাংলা": "চার্লস সেভারেন্স (ওরফে ড. চক) মিশিগান স্কুল অফ ইনফরমেশনের একজন ক্লিনিকাল অধ্যাপক, যেখানে তিনি প্রোগ্রামিং, ডাটাবেস ডিজাইন এবং ওয়েব ডেভেলপমেন্ট সহ বিভিন্ন প্রযুক্তি-ভিত্তিক কোর্স শেখান। চাক ইউজিং গুগল অ্যাপ ইঞ্জিন এবং পাইথন ফর এভরিবডি সহ বেশ কিছু বই লিখেছেন। তার গবেষণার ক্ষেত্র হল সাকাই, মুডল, ব্ল্যাকবোর্ড, এঞ্জেল এবং অন্যান্যদের মতো শেখার ব্যবস্থাপনা সিস্টেম তৈরি করা। তিনি সাকাই প্রকল্পের প্রধান স্থপতি ছিলেন, বিশ্বব্যাপী প্রায় 300টি স্কুলে ব্যবহৃত একটি শিক্ষা ব্যবস্থাপনা পদ্ধতি এবং বইটি লিখেছেন Sakai: Free as in Freedom, যেটি প্রকল্পের নেতাদের একজন হিসাবে তার অভিজ্ঞতা বর্ণনা করে। 1990-এর দশকের মাঝামাঝি সময়ে তিনি ইন্টারনেট:টিসিআই-এর হোস্ট ছিলেন, ইন্টারনেট সম্পর্কে একটি জাতীয় টেলিভিশন টক শো যা টিসিআই কেবল সিস্টেমে বেশ কয়েক বছর ধরে চলেছিল। তিনি দীর্ঘকাল IEEE কম্পিউটার ম্যাগাজিনের একজন কলামিস্ট ছিলেন যা কম্পিউটিং কথোপকথন নামে একটি মাসিক কলাম লিখতেন যা বিখ্যাত প্রযুক্তি নেতাদের এবং উদ্ভাবকদের সাথে ভিডিও সাক্ষাৎকারের বৈশিষ্ট্যযুক্ত।",
            // Arabic
            "عَرَبِيّ": "تشارلز سيفرانس (المعروف أيضًا باسم الدكتور تشاك) هو أستاذ سريري في كلية المعلومات بجامعة ميشيغان، حيث يدرس دورات مختلفة موجهة نحو التكنولوجيا بما في ذلك البرمجة وتصميم قواعد البيانات وتطوير الويب. كتب تشاك عددًا من الكتب بما في ذلك استخدام محرك تطبيقات جوجل، وبايثون للجميع. مجال بحثه في بناء أنظمة إدارة التعلم مثل ساكاي ومودل وبلاك بورد وأنجل وغيرها. كان كبير المهندسين المعماريين لمشروع ساكاي، وهو نظام إدارة التعلم المستخدم في حوالي 300 مدرسة حول العالم وكتب كتاب ساكاي: حر كما في الحرية، الذي يصف تجاربه كواحد من قادة المشروع. في منتصف التسعينيات، كان مضيفًا لبرنامج Internet:TCI، وهو برنامج حواري تلفزيوني وطني حول الإنترنت تم عرضه لعدة سنوات على نظام الكابل TCI. كان كاتب عمود لفترة طويلة في مجلة IEEE Computer Magazine حيث كان يكتب عمودًا شهريًا يسمى Computing Conversations والذي يتضمن مقابلات فيديو مع قادة ومبتكرين مشهورين في مجال التكنولوجيا.",
            // Persian
            "فارسی": "چارلز سورنس (با نام مستعار دکتر چاک) یک استاد بالینی در دانشکده اطلاعات دانشگاه میشیگان است که در آن دوره های مختلف فناوری گرا از جمله برنامه نویسی، طراحی پایگاه داده و توسعه وب را تدریس می کند. چاک تعدادی کتاب از جمله Using Google App Engine و Python for Everybody نوشته است. زمینه تحقیقاتی او در ساخت سیستم های مدیریت یادگیری مانند ساکای، مودل، تخته سیاه، ANGEL و غیره است. او معمار اصلی پروژه Sakai بود، یک سیستم مدیریت یادگیری که در حدود 300 مدرسه در سراسر جهان مورد استفاده قرار می‌گیرد و کتاب Sakai: Free as in Freedom را نوشت که تجربیات او را به عنوان یکی از رهبران این پروژه توصیف می‌کند. در اواسط دهه 1990 او مجری برنامه Internet:TCI بود، یک برنامه گفتگوی تلویزیونی ملی در مورد اینترنت که چندین سال بر روی سیستم کابلی TCI اجرا می شد. او مدت‌ها ستون‌نویس مجله کامپیوتر IEEE بود و ستونی ماهانه به نام مکالمات محاسباتی می‌نوشت که شامل مصاحبه‌های ویدئویی با رهبران و مبتکران مشهور فناوری است.",
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
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].textContent = django_for_every_body["ThreeShortDescriptions"]["Paragraph-" + index.toString()][language];
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].style.fontFamily = secondFontFamilyHeirachy[language];
    }

    // Instructor Descriptions
    for (var index = 1; index <= 1; ++index) {
        document.getElementsByClassName("short-description-and-some-numbers-text-content-" + (index).toString())[0].innerHTML = django_for_every_body["InstructorDescriptions"]["Paragraph-" + index.toString()][language];
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
        document.title = "MHA - " + building_e_commerence_website["CourseName"];

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