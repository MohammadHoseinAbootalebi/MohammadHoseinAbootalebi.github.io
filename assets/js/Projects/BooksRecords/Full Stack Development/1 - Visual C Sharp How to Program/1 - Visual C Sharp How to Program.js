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
var visual_c_sharp_how_to_program = {
    "BookName": "Visual C# How to Program",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Introduction to Computers, the Internet and Visual C#",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter introduces fundamental concepts of computers, including hardware, software, and data hierarchy, while exploring various programming languages and the history of Visual C#. It emphasizes the significance of object-oriented programming and cloud computing with Microsoft Azure, alongside the roles of Windows, .NET, and Visual Studio in the C# ecosystem. Additionally, it provides insights into modern programming techniques, such as event-driven and asynchronous programming, and offers practical experience through a Visual C# drawing application.",
                // German
                "Deutsch": "Das Kapitel führt in grundlegende Konzepte von Computern ein, darunter Hardware, Software und Datenhierarchie, und untersucht gleichzeitig verschiedene Programmiersprachen und die Geschichte von Visual C#. Es betont die Bedeutung der objektorientierten Programmierung und des Cloud-Computing mit Microsoft Azure sowie die Rollen von Windows, .NET und Visual Studio im C#-Ökosystem. Darüber hinaus bietet es Einblicke in moderne Programmiertechniken, wie ereignisgesteuerte und asynchrone Programmierung, und bietet praktische Erfahrung mit einer Visual C#-Zeichenanwendung.",
                // Chinese
                "中国人": "本章介绍了计算机的基本概念，包括硬件、软件和数据层次结构，同时探讨了各种编程语言和 Visual C# 的历史。它强调了面向对象编程和 Microsoft Azure 云计算的重要性，以及 Windows、.NET 和 Visual Studio 在 C# 生态系统中的作用。此外，它还深入了解了现代编程技术，例如事件驱动和异步编程，并通过 Visual C# 绘图应用程序提供了实践经验。",
                // Russian
                "Русский": "В главе представлены основные концепции компьютеров, включая аппаратное обеспечение, программное обеспечение и иерархию данных, а также изучаются различные языки программирования и история Visual C#. В ней подчеркивается важность объектно-ориентированного программирования и облачных вычислений с Microsoft Azure, а также роли Windows, .NET и Visual Studio в экосистеме C#. Кроме того, в ней даются сведения о современных методах программирования, таких как событийно-управляемое и асинхронное программирование, и предлагается практический опыт с помощью приложения для рисования Visual C#.",
                // French
                "Français": "Ce chapitre présente les concepts fondamentaux des ordinateurs, notamment le matériel, les logiciels et la hiérarchie des données, tout en explorant divers langages de programmation et l'histoire de Visual C#. Il met l'accent sur l'importance de la programmation orientée objet et du cloud computing avec Microsoft Azure, ainsi que sur les rôles de Windows, .NET et Visual Studio dans l'écosystème C#. En outre, il fournit un aperçu des techniques de programmation modernes, telles que la programmation pilotée par événements et asynchrone, et offre une expérience pratique via une application de dessin Visual C#.",
                // Japanese
                "日本語": "この章では、ハードウェア、ソフトウェア、データ階層などのコンピューターの基本的な概念を紹介しながら、さまざまなプログラミング言語と Visual C# の歴史について説明します。C# エコシステムにおける Windows、.NET、Visual Studio の役割とともに、Microsoft Azure を使用したオブジェクト指向プログラミングとクラウド コンピューティングの重要性を強調します。さらに、イベント ドリブン プログラミングや非同期プログラミングなどの最新のプログラミング手法についての洞察を提供し、Visual C# 描画アプリケーションを通じて実践的な経験を提供します。",
                // Korean
                "한국인": "이 장에서는 하드웨어, 소프트웨어, 데이터 계층을 포함한 컴퓨터의 기본 개념을 소개하는 동시에 다양한 프로그래밍 언어와 Visual C#의 역사를 살펴봅니다. C# 생태계에서 Windows, .NET, Visual Studio의 역할과 함께 Microsoft Azure를 통한 객체 지향 프로그래밍과 클라우드 컴퓨팅의 중요성을 강조합니다. 또한 이벤트 기반 및 비동기 프로그래밍과 같은 최신 프로그래밍 기술에 대한 통찰력을 제공하고 Visual C# 드로잉 애플리케이션을 통해 실제 경험을 제공합니다.",
                // Spanish
                "Español": "En este capítulo se presentan conceptos fundamentales de las computadoras, incluidos hardware, software y jerarquía de datos, y se exploran varios lenguajes de programación y la historia de Visual C#. Se hace hincapié en la importancia de la programación orientada a objetos y la computación en la nube con Microsoft Azure, junto con los roles de Windows, .NET y Visual Studio en el ecosistema de C#. Además, se brindan conocimientos sobre técnicas de programación modernas, como la programación asincrónica y basada en eventos, y se ofrece experiencia práctica a través de una aplicación de dibujo de Visual C#.",
                // Hindi
                "हिंदी": "यह अध्याय हार्डवेयर, सॉफ़्टवेयर और डेटा पदानुक्रम सहित कंप्यूटर की मूलभूत अवधारणाओं का परिचय देता है, साथ ही विभिन्न प्रोग्रामिंग भाषाओं और विज़ुअल C# के इतिहास की खोज करता है। यह C# पारिस्थितिकी तंत्र में Windows, .NET और Visual Studio की भूमिकाओं के साथ-साथ Microsoft Azure के साथ ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग और क्लाउड कंप्यूटिंग के महत्व पर जोर देता है। इसके अतिरिक्त, यह इवेंट-ड्रिवन और एसिंक्रोनस प्रोग्रामिंग जैसी आधुनिक प्रोग्रामिंग तकनीकों में अंतर्दृष्टि प्रदान करता है, और विज़ुअल C# ड्राइंग एप्लिकेशन के माध्यम से व्यावहारिक अनुभव प्रदान करता है।",
                // Portuguese
                "Português": "O capítulo apresenta conceitos fundamentais de computadores, incluindo hardware, software e hierarquia de dados, ao mesmo tempo que explora diversas linguagens de programação e a história do Visual C#. Realça a importância da programação orientada a objetos e da computação em nuvem com o Microsoft Azure, juntamente com as funções do Windows, .NET e Visual Studio no ecossistema C#. Além disso, fornece informações sobre técnicas de programação modernas, como a programação assíncrona e orientada a eventos, e oferece experiência prática através de uma aplicação de desenho Visual C#.",
                // Bengali
                "বাংলা": "অধ্যায়টি হার্ডওয়্যার, সফ্টওয়্যার এবং ডেটা শ্রেণিবিন্যাস সহ কম্পিউটারের মৌলিক ধারণাগুলি উপস্থাপন করে, যেখানে বিভিন্ন প্রোগ্রামিং ভাষা এবং ভিজ্যুয়াল C# এর ইতিহাস অন্বেষণ করা হয়। এটি C# ইকোসিস্টেমে Windows, .NET এবং ভিজ্যুয়াল স্টুডিওর ভূমিকার পাশাপাশি Microsoft Azure-এর সাথে অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং এবং ক্লাউড কম্পিউটিং-এর তাৎপর্যের উপর জোর দেয়। উপরন্তু, এটি আধুনিক প্রোগ্রামিং কৌশলগুলির অন্তর্দৃষ্টি প্রদান করে, যেমন ইভেন্ট-চালিত এবং অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং, এবং একটি ভিজ্যুয়াল C# অঙ্কন অ্যাপ্লিকেশনের মাধ্যমে বাস্তব অভিজ্ঞতা প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يقدم الفصل المفاهيم الأساسية لأجهزة الكمبيوتر، بما في ذلك الأجهزة والبرامج وتسلسل البيانات، مع استكشاف لغات البرمجة المختلفة وتاريخ Visual C#. ويؤكد على أهمية البرمجة الموجهة للكائنات والحوسبة السحابية مع Microsoft Azure، إلى جانب أدوار Windows و.NET وVisual Studio في النظام البيئي C#. بالإضافة إلى ذلك، يقدم رؤى حول تقنيات البرمجة الحديثة، مثل البرمجة القائمة على الأحداث والبرمجة غير المتزامنة، ويقدم خبرة عملية من خلال تطبيق رسم Visual C#.",
                // Persian
                "فارسی": "این فصل مفاهیم اساسی رایانه ها از جمله سخت افزار، نرم افزار و سلسله مراتب داده ها را معرفی می کند، در حالی که زبان های برنامه نویسی مختلف و تاریخچه ویژوال سی شارپ را بررسی می کند. این برنامه بر اهمیت برنامه نویسی شی گرا و محاسبات ابری با Microsoft Azure، در کنار نقش ویندوز، دات نت و ویژوال استودیو در اکوسیستم سی شارپ تاکید می کند. علاوه بر این، بینش هایی را در مورد تکنیک های برنامه نویسی مدرن، مانند برنامه نویسی رویداد محور و ناهمزمان ارائه می دهد، و تجربه عملی را از طریق یک برنامه طراحی Visual C# ارائه می دهد.",
            },
        },
        // 2
        {
            "ChapterName": "Introduction to Visual Studio and Visual Programming",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, key features of the Visual Studio Community 2015 IDE are introduced, emphasizing visual app development for creating graphical user interfaces (GUIs) without extensive coding. Users learn to create a Windows Forms application, navigate essential IDE components like Solution Explorer and Toolbox, and utilize the Properties window to customize controls such as Labels and PictureBoxes. The chapter sets the foundation for future programming by demonstrating how to design a simple app that displays text and images, while also preparing readers for conventional programming concepts to be explored in subsequent chapters.",
                // German
                "Deutsch": "In diesem Kapitel werden die wichtigsten Funktionen der Visual Studio Community 2015 IDE vorgestellt, wobei der Schwerpunkt auf der visuellen App-Entwicklung zum Erstellen grafischer Benutzeroberflächen (GUIs) ohne umfangreiche Codierung liegt. Benutzer lernen, eine Windows Forms-Anwendung zu erstellen, wichtige IDE-Komponenten wie Solution Explorer und Toolbox zu navigieren und das Eigenschaftenfenster zum Anpassen von Steuerelementen wie Labels und PictureBoxes zu verwenden. Das Kapitel legt den Grundstein für zukünftiges Programmieren, indem es zeigt, wie man eine einfache App entwirft, die Text und Bilder anzeigt, und bereitet die Leser gleichzeitig auf konventionelle Programmierkonzepte vor, die in den folgenden Kapiteln erkundet werden.",
                // Chinese
                "中国人": "本章介绍了 Visual Studio Community 2015 IDE 的主要功能，强调了可视化应用程序开发，无需大量编码即可创建图形用户界面 (GUI)。用户将学习如何创建 Windows 窗体应用程序、浏览基本 IDE 组件（如解决方案资源管理器和工具箱），以及利用属性窗口自定义控件（如标签和图片框）。本章通过演示如何设计显示文本和图像的简单应用程序为未来的编程奠定了基础，同时也为读者准备了后续章节中将要探讨的传统编程概念。",
                // Russian
                "Русский": "В этой главе представлены ключевые особенности Visual Studio Community 2015 IDE, подчеркивающие визуальную разработку приложений для создания графических пользовательских интерфейсов (GUI) без обширного кодирования. Пользователи учатся создавать приложения Windows Forms, перемещаться по основным компонентам IDE, таким как Solution Explorer и Toolbox, и использовать окно Properties для настройки элементов управления, таких как Labels и PictureBoxes. Глава закладывает основу для будущего программирования, демонстрируя, как разработать простое приложение, отображающее текст и изображения, а также подготавливая читателей к традиционным концепциям программирования, которые будут изучаться в последующих главах.",
                // French
                "Français": "Dans ce chapitre, nous présentons les principales fonctionnalités de l'IDE Visual Studio Community 2015, en mettant l'accent sur le développement d'applications visuelles pour la création d'interfaces utilisateur graphiques (GUI) sans codage approfondi. Les utilisateurs apprennent à créer une application Windows Forms, à parcourir les composants IDE essentiels tels que Solution Explorer et Toolbox, et à utiliser la fenêtre Propriétés pour personnaliser les contrôles tels que Labels et PictureBoxes. Le chapitre pose les bases de la programmation future en montrant comment concevoir une application simple qui affiche du texte et des images, tout en préparant les lecteurs aux concepts de programmation conventionnels qui seront explorés dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、Visual Studio Community 2015 IDE の主な機能を紹介し、大規模なコーディングなしでグラフィカル ユーザー インターフェイス (GUI) を作成するためのビジュアル アプリ開発に重点を置いています。ユーザーは、Windows フォーム アプリケーションの作成、ソリューション エクスプローラーやツールボックスなどの重要な IDE コンポーネントの操作、プロパティ ウィンドウを使用したラベルやピクチャ ボックスなどのコントロールのカスタマイズについて学習します。この章では、テキストと画像を表示する簡単なアプリの設計方法を示して将来のプログラミングの基礎を確立するとともに、以降の章で説明する従来のプログラミング概念についても読者に理解を深めてもらいます。",
                // Korean
                "한국인": "이 장에서는 Visual Studio Community 2015 IDE의 주요 기능을 소개하고, 광범위한 코딩 없이 그래픽 사용자 인터페이스(GUI)를 만드는 시각적 앱 개발을 강조합니다. 사용자는 Windows Forms 애플리케이션을 만들고, Solution Explorer 및 Toolbox와 같은 필수 IDE 구성 요소를 탐색하고, 속성 창을 사용하여 레이블 및 PictureBox와 같은 컨트롤을 사용자 지정하는 방법을 배웁니다. 이 장에서는 텍스트와 이미지를 표시하는 간단한 앱을 디자인하는 방법을 보여줌으로써 향후 프로그래밍의 기초를 마련하는 동시에 독자에게 후속 장에서 탐구할 기존 프로그래밍 개념에 대한 준비를 시킵니다.",
                // Spanish
                "Español": "En este capítulo se presentan las características clave del IDE de Visual Studio Community 2015, haciendo hincapié en el desarrollo de aplicaciones visuales para crear interfaces gráficas de usuario (GUI) sin codificación extensa. Los usuarios aprenden a crear una aplicación de Windows Forms, navegar por componentes esenciales del IDE como el Explorador de soluciones y el Cuadro de herramientas, y utilizar la ventana Propiedades para personalizar controles como Etiquetas y Cuadros de imagen. El capítulo establece las bases para la programación futura al demostrar cómo diseñar una aplicación simple que muestre texto e imágenes, al mismo tiempo que prepara a los lectores para los conceptos de programación convencionales que se explorarán en los capítulos posteriores.",
                // Hindi
                "हिंदी": "इस अध्याय में, Visual Studio Community 2015 IDE की मुख्य विशेषताओं का परिचय दिया गया है, जिसमें व्यापक कोडिंग के बिना ग्राफ़िकल यूज़र इंटरफ़ेस (GUI) बनाने के लिए विज़ुअल ऐप डेवलपमेंट पर ज़ोर दिया गया है। उपयोगकर्ता Windows फ़ॉर्म एप्लिकेशन बनाना, सॉल्यूशन एक्सप्लोरर और टूलबॉक्स जैसे आवश्यक IDE घटकों को नेविगेट करना और लेबल और पिक्चरबॉक्स जैसे नियंत्रणों को अनुकूलित करने के लिए गुण विंडो का उपयोग करना सीखते हैं। यह अध्याय भविष्य की प्रोग्रामिंग के लिए आधार तैयार करता है, जिसमें यह प्रदर्शित किया जाता है कि टेक्स्ट और इमेज प्रदर्शित करने वाला एक सरल ऐप कैसे डिज़ाइन किया जाए, साथ ही पाठकों को अगले अध्यायों में खोजी जाने वाली पारंपरिक प्रोग्रामिंग अवधारणाओं के लिए तैयार किया जाता है।",
                // Portuguese
                "Português": "Neste capítulo, são apresentadas as principais características do IDE do Visual Studio Community 2015, enfatizando o desenvolvimento de aplicações visuais para a criação de interfaces gráficas de utilizador (GUIs) sem codificação extensa. Os utilizadores aprendem a criar uma aplicação Windows Forms, a navegar em componentes IDE essenciais, como o Solution Explorer e o Toolbox, e a utilizar a janela Propriedades para personalizar controlos, como Labels e PictureBoxes. O capítulo estabelece as bases para a programação futura, demonstrando como conceber uma aplicação simples que exibe texto e imagens, ao mesmo tempo que prepara os leitores para conceitos de programação convencionais a explorar nos capítulos subsequentes.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, ভিজ্যুয়াল স্টুডিও কমিউনিটি 2015 IDE-এর মূল বৈশিষ্ট্যগুলি উপস্থাপন করা হয়েছে, বিস্তৃত কোডিং ছাড়াই গ্রাফিক্যাল ইউজার ইন্টারফেস (GUIs) তৈরির জন্য ভিজ্যুয়াল অ্যাপ ডেভেলপমেন্টের উপর জোর দেওয়া হয়েছে। ব্যবহারকারীরা একটি উইন্ডোজ ফর্ম অ্যাপ্লিকেশন তৈরি করতে, সলিউশন এক্সপ্লোরার এবং টুলবক্সের মতো প্রয়োজনীয় IDE উপাদানগুলি নেভিগেট করতে এবং লেবেল এবং পিকচারবক্সের মতো নিয়ন্ত্রণগুলি কাস্টমাইজ করতে বৈশিষ্ট্য উইন্ডো ব্যবহার করতে শেখে। অধ্যায়টি পাঠ্য এবং চিত্রগুলি প্রদর্শন করে এমন একটি সাধারণ অ্যাপ কীভাবে ডিজাইন করা যায় তা প্রদর্শন করে ভবিষ্যতের প্রোগ্রামিংয়ের ভিত্তি স্থাপন করে, পাশাপাশি পরবর্তী অধ্যায়ে অন্বেষণ করার জন্য প্রচলিত প্রোগ্রামিং ধারণাগুলির জন্য পাঠকদের প্রস্তুত করে।",
                // Arabic
                "عَرَبِيّ": "في هذا الفصل، يتم تقديم الميزات الرئيسية لبيئة التطوير المتكاملة Visual Studio Community 2015، مع التركيز على تطوير التطبيقات المرئية لإنشاء واجهات مستخدم رسومية (GUIs) دون الحاجة إلى ترميز مكثف. يتعلم المستخدمون كيفية إنشاء تطبيق Windows Forms، والتنقل بين مكونات بيئة التطوير المتكاملة الأساسية مثل Solution Explorer وToolbox، واستخدام نافذة Properties لتخصيص عناصر التحكم مثل Labels وPictureBoxes. يضع الفصل الأساس للبرمجة المستقبلية من خلال توضيح كيفية تصميم تطبيق بسيط يعرض النصوص والصور، مع إعداد القراء أيضًا لمفاهيم البرمجة التقليدية التي سيتم استكشافها في الفصول اللاحقة.",
                // Persian
                "فارسی": "در این فصل، ویژگی‌های کلیدی Visual Studio Community 2015 IDE معرفی شده‌اند که بر توسعه اپلیکیشن بصری برای ایجاد رابط‌های کاربری گرافیکی (GUI) بدون کدنویسی گسترده تأکید دارد. کاربران یاد می گیرند که یک برنامه Windows Forms ایجاد کنند، اجزای ضروری IDE مانند Solution Explorer و Toolbox را پیمایش کنند و از پنجره Properties برای سفارشی کردن کنترل هایی مانند Labels و PictureBoxها استفاده کنند. این فصل با نشان دادن نحوه طراحی یک برنامه ساده که متن و تصاویر را نمایش می دهد، پایه و اساس برنامه نویسی آینده را تنظیم می کند، در حالی که خوانندگان را برای مفاهیم برنامه نویسی مرسوم آماده می کند تا در فصل های بعدی بررسی شوند.",
            },
        },
        // 3
        {
            "ChapterName": "Introduction to C# App Programming",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces fundamental C# programming concepts, focusing on console applications that process and display information. Key topics include using the Console class for input and output, string interpolation for embedding variable values in strings, performing arithmetic operations, and making decisions with if statements and relational operators. The chapter emphasizes good programming practices, such as consistent indentation and understanding operator precedence, while preparing the reader for creating their own classes and objects in subsequent chapters.",
                // German
                "Deutsch": "Dieses Kapitel führt in die grundlegenden Konzepte der C#-Programmierung ein und konzentriert sich dabei auf Konsolenanwendungen, die Informationen verarbeiten und anzeigen. Zu den wichtigsten Themen gehören die Verwendung der Console-Klasse für Eingabe und Ausgabe, die String-Interpolation zum Einbetten variabler Werte in Strings, das Ausführen arithmetischer Operationen und das Treffen von Entscheidungen mit if-Anweisungen und relationalen Operatoren. Das Kapitel betont gute Programmierpraktiken, wie konsistente Einrückung und das Verständnis der Operatorrangfolge, und bereitet den Leser gleichzeitig auf das Erstellen eigener Klassen und Objekte in den folgenden Kapiteln vor.",
                // Chinese
                "中国人": "本章介绍了基本的 C# 编程概念，重点介绍处理和显示信息的控制台应用程序。关键主题包括使用 Console 类进行输入和输出、使用字符串插值将变量值嵌入字符串、执行算术运算以及使用 if 语句和关系运算符进行决策。本章强调良好的编程实践，例如一致的缩进和理解运算符优先级，同时让读者为在后续章节中创建自己的类和对象做好准备。",
                // Russian
                "Русский": "В этой главе представлены основные концепции программирования на C#, с упором на консольные приложения, обрабатывающие и отображающие информацию. Ключевые темы включают использование класса Console для ввода и вывода, интерполяцию строк для встраивания значений переменных в строки, выполнение арифметических операций и принятие решений с помощью операторов if и реляционных операторов. В главе особое внимание уделяется хорошим практикам программирования, таким как последовательные отступы и понимание приоритета операторов, а также подготовке читателя к созданию собственных классов и объектов в последующих главах.",
                // French
                "Français": "Ce chapitre présente les concepts fondamentaux de la programmation C#, en se concentrant sur les applications de console qui traitent et affichent des informations. Les principaux sujets abordés incluent l'utilisation de la classe Console pour l'entrée et la sortie, l'interpolation de chaîne pour l'incorporation de valeurs de variables dans des chaînes, l'exécution d'opérations arithmétiques et la prise de décisions avec des instructions if et des opérateurs relationnels. Le chapitre met l'accent sur les bonnes pratiques de programmation, telles que l'indentation cohérente et la compréhension de la priorité des opérateurs, tout en préparant le lecteur à créer ses propres classes et objets dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、情報を処理および表示するコンソール アプリケーションに焦点を当てて、基本的な C# プログラミングの概念を紹介します。主なトピックには、入出力用の Console クラスの使用、文字列に変数値を埋め込むための文字列補間、算術演算の実行、if ステートメントと関係演算子を使用した決定の実行などがあります。この章では、一貫したインデントや演算子の優先順位の理解など、適切なプログラミング プラクティスを強調しながら、読者が後続の章で独自のクラスやオブジェクトを作成できるように準備します。",
                // Korean
                "한국인": "이 장에서는 기본적인 C# 프로그래밍 개념을 소개하며, 정보를 처리하고 표시하는 콘솔 애플리케이션에 초점을 맞춥니다. 주요 주제로는 Console 클래스를 사용하여 입력 및 출력, 문자열에 변수 값을 포함하기 위한 문자열 보간, 산술 연산 수행, if 문과 관계 연산자를 사용하여 의사 결정 등이 있습니다. 이 장에서는 일관된 들여쓰기와 연산자 우선순위 이해와 같은 좋은 프로그래밍 관행을 강조하는 동시에 독자가 후속 장에서 자신의 클래스와 객체를 만들 수 있도록 준비시킵니다.",
                // Spanish
                "Español": "Este capítulo presenta conceptos fundamentales de programación en C#, centrándose en aplicaciones de consola que procesan y muestran información. Los temas clave incluyen el uso de la clase Console para entrada y salida, la interpolación de cadenas para incrustar valores de variables en cadenas, la realización de operaciones aritméticas y la toma de decisiones con instrucciones if y operadores relacionales. El capítulo enfatiza las buenas prácticas de programación, como la sangría consistente y la comprensión de la precedencia de los operadores, al tiempo que prepara al lector para crear sus propias clases y objetos en los capítulos posteriores.",
                // Hindi
                "हिंदी": "यह अध्याय मूलभूत C# प्रोग्रामिंग अवधारणाओं का परिचय देता है, जो सूचना को संसाधित और प्रदर्शित करने वाले कंसोल अनुप्रयोगों पर केंद्रित है। मुख्य विषयों में इनपुट और आउटपुट के लिए कंसोल क्लास का उपयोग करना, स्ट्रिंग में चर मानों को एम्बेड करने के लिए स्ट्रिंग इंटरपोलेशन, अंकगणितीय संचालन करना और if कथनों और रिलेशनल ऑपरेटरों के साथ निर्णय लेना शामिल है। अध्याय अच्छे प्रोग्रामिंग अभ्यासों पर जोर देता है, जैसे कि सुसंगत इंडेंटेशन और ऑपरेटर वरीयता को समझना, जबकि पाठक को बाद के अध्यायों में अपनी खुद की कक्षाएं और ऑब्जेक्ट बनाने के लिए तैयार करना।",
                // Portuguese
                "Português": "Este capítulo apresenta conceitos fundamentais de programação C#, com foco nas aplicações de consola que processam e exibem informação. Os principais tópicos incluem a utilização da classe Console para entrada e saída, interpolação de strings para incorporar valores de variáveis ​​em strings, execução de operações aritméticas e tomada de decisões com instruções if e operadores relacionais. O capítulo enfatiza as boas práticas de programação, como a indentação consistente e a compreensão da precedência dos operadores, ao mesmo tempo que prepara o leitor para criar as suas próprias classes e objetos nos capítulos subsequentes.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে মৌলিক C# প্রোগ্রামিং ধারণাগুলি প্রবর্তন করা হয়েছে, কনসোল অ্যাপ্লিকেশনগুলির উপর ফোকাস করে যা তথ্য প্রক্রিয়া করে এবং প্রদর্শন করে। মূল বিষয়গুলির মধ্যে ইনপুট এবং আউটপুটের জন্য কনসোল ক্লাস ব্যবহার করা, স্ট্রিংগুলিতে পরিবর্তনশীল মানগুলি এম্বেড করার জন্য স্ট্রিং ইন্টারপোলেশন, গাণিতিক ক্রিয়াকলাপ সম্পাদন করা এবং if স্টেটমেন্ট এবং রিলেশনাল অপারেটরগুলির সাথে সিদ্ধান্ত নেওয়া অন্তর্ভুক্ত। অধ্যায়টি ভাল প্রোগ্রামিং অনুশীলনের উপর জোর দেয়, যেমন ধারাবাহিক ইন্ডেন্টেশন এবং বোঝার অপারেটর অগ্রাধিকার, পাঠককে পরবর্তী অধ্যায়ে তাদের নিজস্ব ক্লাস এবং অবজেক্ট তৈরি করার জন্য প্রস্তুত করার সময়।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل مفاهيم برمجة C# الأساسية، مع التركيز على تطبيقات وحدة التحكم التي تعالج المعلومات وتعرضها. تتضمن الموضوعات الرئيسية استخدام فئة وحدة التحكم للإدخال والإخراج، واستيفاء السلسلة لتضمين قيم المتغيرات في السلاسل، وإجراء العمليات الحسابية، واتخاذ القرارات باستخدام عبارات if والمشغلات العلائقية. ويؤكد الفصل على ممارسات البرمجة الجيدة، مثل المسافة البادئة المتسقة وفهم أولوية المشغل، مع إعداد القارئ لإنشاء فئاته وكائناته الخاصة في الفصول اللاحقة.",
                // Persian
                "فارسی": "این فصل مفاهیم اساسی برنامه نویسی سی شارپ را با تمرکز بر برنامه های کنسولی که اطلاعات را پردازش و نمایش می دهند، معرفی می کند. موضوعات کلیدی شامل استفاده از کلاس Console برای ورودی و خروجی، درون یابی رشته ای برای جاسازی مقادیر متغیر در رشته ها، انجام عملیات حسابی، و تصمیم گیری با دستورات if و عملگرهای رابطه ای است. این فصل بر شیوه های برنامه نویسی خوب، مانند تورفتگی ثابت و درک اولویت عملگر تأکید می کند، در حالی که خواننده را برای ایجاد کلاس ها و اشیاء خود در فصل های بعدی آماده می کند.",
            },
        },
        // 4
        {
            "ChapterName": "Introduction to Classes, Objects, Methods and String",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces fundamental object-oriented programming concepts in C#, focusing on classes, objects, methods, instance variables, properties, and constructors. It demonstrates the creation of a simple bank-account class that manages an account's name and balance, providing methods for deposits and withdrawals while emphasizing the importance of encapsulation through private instance variables and public properties. Additionally, the chapter covers the use of UML class diagrams for visualizing class structures and highlights the significance of validation and code maintenance in software engineering practices.",
                // German
                "Deutsch": "Dieses Kapitel führt in die grundlegenden Konzepte der objektorientierten Programmierung in C# ein und konzentriert sich dabei auf Klassen, Objekte, Methoden, Instanzvariablen, Eigenschaften und Konstruktoren. Es zeigt die Erstellung einer einfachen Bankkontoklasse, die den Namen und den Kontostand eines Kontos verwaltet und Methoden für Ein- und Auszahlungen bereitstellt. Dabei wird die Bedeutung der Kapselung durch private Instanzvariablen und öffentliche Eigenschaften hervorgehoben. Darüber hinaus behandelt das Kapitel die Verwendung von UML-Klassendiagrammen zur Visualisierung von Klassenstrukturen und hebt die Bedeutung von Validierung und Codewartung in der Softwareentwicklungspraxis hervor.",
                // Chinese
                "中国人": "本章介绍 C# 中面向对象编程的基本概念，重点介绍类、对象、方法、实例变量、属性和构造函数。它演示了如何创建一个简单的银行账户类，该类管理账户的名称和余额，提供存款和取款方法，同时强调通过私有实例变量和公共属性进行封装的重要性。此外，本章还介绍了如何使用 UML 类图来可视化类结构，并强调了验证和代码维护在软件工程实践中的重要性。",
                // Russian
                "Русский": "В этой главе представлены основные концепции объектно-ориентированного программирования на языке C#, с упором на классы, объекты, методы, переменные экземпляра, свойства и конструкторы. В ней демонстрируется создание простого класса банковского счета, который управляет именем и балансом счета, предоставляя методы для депозитов и снятий, подчеркивая при этом важность инкапсуляции через частные переменные экземпляра и публичные свойства. Кроме того, в главе рассматривается использование диаграмм классов UML для визуализации структур классов и подчеркивается важность проверки и обслуживания кода в практике разработки программного обеспечения.",
                // French
                "Français": "Ce chapitre présente les concepts fondamentaux de la programmation orientée objet en C#, en se concentrant sur les classes, les objets, les méthodes, les variables d'instance, les propriétés et les constructeurs. Il montre la création d'une classe de compte bancaire simple qui gère le nom et le solde d'un compte, en fournissant des méthodes pour les dépôts et les retraits tout en soulignant l'importance de l'encapsulation via des variables d'instance privées et des propriétés publiques. De plus, le chapitre couvre l'utilisation des diagrammes de classes UML pour visualiser les structures de classe et souligne l'importance de la validation et de la maintenance du code dans les pratiques d'ingénierie logicielle.",
                // Japanese
                "日本語": "この章では、クラス、オブジェクト、メソッド、インスタンス変数、プロパティ、およびコンストラクタに焦点を当て、C# での基本的なオブジェクト指向プログラミングの概念を紹介します。口座名と残高を管理し、入金と出金のメソッドを提供する簡単な銀行口座クラスの作成方法を示しながら、プライベート インスタンス変数とパブリック プロパティによるカプセル化の重要性を強調します。さらに、この章では、クラス構造を視覚化するための UML クラス ダイアグラムの使用について説明し、ソフトウェア エンジニアリングの実践における検証とコード保守の重要性を強調します。",
                // Korean
                "한국인": "이 장에서는 클래스, 객체, 메서드, 인스턴스 변수, 속성 및 생성자에 초점을 맞춰 C#에서 기본적인 객체 지향 프로그래밍 개념을 소개합니다. 계좌 이름과 잔액을 관리하고, 입금 및 출금에 대한 메서드를 제공하는 간단한 은행 계좌 클래스를 만드는 방법을 보여주며, 개인 인스턴스 변수와 공개 속성을 통한 캡슐화의 중요성을 강조합니다. 또한 이 장에서는 클래스 구조를 시각화하기 위한 UML 클래스 다이어그램의 사용을 다루고 소프트웨어 엔지니어링 관행에서 검증 및 코드 유지 관리의 중요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo presenta conceptos fundamentales de programación orientada a objetos en C#, centrándose en clases, objetos, métodos, variables de instancia, propiedades y constructores. Demuestra la creación de una clase de cuenta bancaria simple que administra el nombre y el saldo de una cuenta, brindando métodos para depósitos y retiros y enfatizando la importancia de la encapsulación a través de variables de instancia privadas y propiedades públicas. Además, el capítulo cubre el uso de diagramas de clases UML para visualizar estructuras de clases y destaca la importancia de la validación y el mantenimiento del código en las prácticas de ingeniería de software.",
                // Hindi
                "हिंदी": "यह अध्याय C# में मूलभूत ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग अवधारणाओं का परिचय देता है, जो कक्षाओं, वस्तुओं, विधियों, उदाहरण चर, गुणों और रचनाकारों पर ध्यान केंद्रित करता है। यह एक सरल बैंक-खाता वर्ग के निर्माण को प्रदर्शित करता है जो खाते के नाम और शेष राशि का प्रबंधन करता है, जमा और निकासी के लिए विधियाँ प्रदान करता है जबकि निजी उदाहरण चर और सार्वजनिक गुणों के माध्यम से एनकैप्सुलेशन के महत्व पर जोर देता है। इसके अतिरिक्त, अध्याय वर्ग संरचनाओं को देखने के लिए UML वर्ग आरेखों के उपयोग को शामिल करता है और सॉफ्टवेयर इंजीनियरिंग प्रथाओं में सत्यापन और कोड रखरखाव के महत्व पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo apresenta conceitos fundamentais de programação orientada a objetos em C#, com foco em classes, objetos, métodos, variáveis ​​de instância, propriedades e construtores. Demonstra a criação de uma classe simples de conta bancária que gere o nome e o saldo de uma conta, fornecendo métodos para depósitos e levantamentos, ao mesmo tempo que enfatiza a importância do encapsulamento através de variáveis ​​de instância privadas e propriedades públicas. Além disso, o capítulo aborda a utilização de diagramas de classes UML para visualizar estruturas de classes e destaca a importância da validação e manutenção de código nas práticas de engenharia de software.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি C#-এ মৌলিক অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং ধারণাগুলি উপস্থাপন করে, ক্লাস, অবজেক্ট, পদ্ধতি, ইনস্ট্যান্স ভেরিয়েবল, বৈশিষ্ট্য এবং কনস্ট্রাক্টরগুলির উপর ফোকাস করে। এটি একটি সাধারণ ব্যাঙ্ক-অ্যাকাউন্ট শ্রেণী তৈরির প্রদর্শন করে যা একটি অ্যাকাউন্টের নাম এবং ব্যালেন্স পরিচালনা করে, ব্যক্তিগত উদাহরণ ভেরিয়েবল এবং পাবলিক প্রপার্টির মাধ্যমে এনক্যাপসুলেশনের গুরুত্বের উপর জোর দেওয়ার সময় আমানত এবং উত্তোলনের পদ্ধতি প্রদান করে। উপরন্তু, অধ্যায়টি ক্লাস স্ট্রাকচার ভিজ্যুয়ালাইজ করার জন্য UML ক্লাস ডায়াগ্রামের ব্যবহার কভার করে এবং সফ্টওয়্যার ইঞ্জিনিয়ারিং অনুশীলনে বৈধতা এবং কোড রক্ষণাবেক্ষণের তাত্পর্য হাইলাইট করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل مفاهيم أساسية في البرمجة الموجهة للكائنات بلغة C#، مع التركيز على الفئات والكائنات والطرق ومتغيرات المثيلات والخصائص والمنشئين. ويوضح إنشاء فئة حساب مصرفي بسيطة تدير اسم الحساب ورصيده، وتوفر طرقًا للإيداع والسحب مع التأكيد على أهمية التغليف من خلال متغيرات المثيلات الخاصة والخصائص العامة. بالإضافة إلى ذلك، يغطي الفصل استخدام مخططات فئة UML لتصور هياكل الفئات ويسلط الضوء على أهمية التحقق وصيانة التعليمات البرمجية في ممارسات هندسة البرمجيات.",
                // Persian
                "فارسی": "این فصل مفاهیم اساسی برنامه نویسی شی گرا در سی شارپ را با تمرکز بر کلاس ها، اشیاء، متدها، متغیرهای نمونه، ویژگی ها و سازنده ها معرفی می کند. این نشان‌دهنده ایجاد یک کلاس حساب بانکی ساده است که نام و موجودی حساب را مدیریت می‌کند، روش‌هایی را برای سپرده‌گذاری و برداشت ارائه می‌کند و در عین حال بر اهمیت کپسول‌سازی از طریق متغیرهای نمونه خصوصی و ویژگی‌های عمومی تاکید می‌کند. علاوه بر این، این فصل استفاده از نمودارهای کلاس UML را برای تجسم ساختارهای کلاس پوشش می دهد و اهمیت اعتبارسنجی و نگهداری کد را در شیوه های مهندسی نرم افزار برجسته می کند.",
            },
        },
        // 5
        {
            "ChapterName": "Algorithm Development and Control Statements: Part 1",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter covers fundamental problem-solving techniques essential for building classes and developing methods in C#. It emphasizes the importance of understanding the problem and employing structured programming principles, including the use of control statements such as sequence, selection (if and if...else), and iteration (while). The chapter also introduces key concepts like pseudocode development, operator precedence, and the significance of control-statement stacking and nesting in algorithm construction, ultimately laying the groundwork for effective programming practices.",
                // German
                "Deutsch": "In diesem Kapitel werden grundlegende Problemlösungstechniken behandelt, die für die Klassenerstellung und Methodenentwicklung in C# unerlässlich sind. Es betont, wie wichtig es ist, das Problem zu verstehen und Prinzipien der strukturierten Programmierung anzuwenden, einschließlich der Verwendung von Kontrollanweisungen wie Sequenz, Auswahl (if und if...else) und Iteration (while). Das Kapitel führt auch Schlüsselkonzepte wie die Entwicklung von Pseudocode, Operatorrangfolge und die Bedeutung der Stapelung und Verschachtelung von Kontrollanweisungen bei der Algorithmenerstellung ein und legt damit letztlich den Grundstein für effektive Programmierpraktiken.",
                // Chinese
                "中国人": "本章介绍了在 C# 中构建类和开发方法所必需的基本问题解决技术。它强调了理解问题和采用结构化编程原则的重要性，包括使用控制语句，例如序列、选择（if 和 if...else）和迭代（while）。本章还介绍了伪代码开发、运算符优先级等关键概念，以及控制语句堆叠和嵌套在算法构建中的重要性，最终为有效的编程实践奠定了基础。",
                // Russian
                "Русский": "В этой главе рассматриваются основные методы решения проблем, необходимые для построения классов и разработки методов в C#. В ней подчеркивается важность понимания проблемы и применения принципов структурного программирования, включая использование управляющих операторов, таких как последовательность, выбор (if и if...else) и итерация (while). В главе также вводятся ключевые концепции, такие как разработка псевдокода, приоритет операторов и значение стекирования и вложения управляющих операторов в построении алгоритма, что в конечном итоге закладывает основу для эффективных методов программирования.",
                // French
                "Français": "Ce chapitre couvre les techniques fondamentales de résolution de problèmes essentielles à la création de classes et au développement de méthodes en C#. Il souligne l'importance de comprendre le problème et d'utiliser des principes de programmation structurés, notamment l'utilisation d'instructions de contrôle telles que la séquence, la sélection (if et if...else) et l'itération (while). Le chapitre présente également des concepts clés tels que le développement de pseudo-code, la priorité des opérateurs et l'importance de l'empilement et de l'imbrication des instructions de contrôle dans la construction d'algorithmes, jetant ainsi les bases de pratiques de programmation efficaces.",
                // Japanese
                "日本語": "この章では、C# でクラスを構築し、メソッドを開発するために不可欠な基本的な問題解決手法について説明します。問題を理解し、シーケンス、選択 (if および if...else)、反復 (while) などの制御ステートメントの使用を含む構造化プログラミングの原則を採用することの重要性を強調します。また、疑似コードの開発、演算子の優先順位、アルゴリズム構築における制御ステートメントのスタックとネストの重要性などの主要な概念も紹介し、最終的には効果的なプログラミング プラクティスの基礎を築きます。",
                // Korean
                "한국인": "이 장에서는 C#에서 클래스를 빌드하고 메서드를 개발하는 데 필수적인 기본적인 문제 해결 기술을 다룹니다. 문제를 이해하고 시퀀스, 선택(if 및 if...else), 반복(while)과 같은 제어문 사용을 포함한 구조화된 프로그래밍 원칙을 사용하는 것의 중요성을 강조합니다. 또한 의사코드 개발, 연산자 우선순위, 알고리즘 구축에서 제어문 스태킹 및 중첩의 중요성과 같은 핵심 개념을 소개하여 궁극적으로 효과적인 프로그래밍 관행의 토대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo cubre las técnicas fundamentales de resolución de problemas esenciales para la creación de clases y el desarrollo de métodos en C#. Destaca la importancia de comprender el problema y emplear principios de programación estructurada, incluido el uso de instrucciones de control como secuencia, selección (if y if...else) e iteración (while). El capítulo también presenta conceptos clave como el desarrollo de pseudocódigo, la precedencia de operadores y la importancia del apilamiento y anidamiento de instrucciones de control en la construcción de algoritmos, sentando las bases para prácticas de programación efectivas.",
                // Hindi
                "हिंदी": "यह अध्याय C# में क्लास बनाने और विधियों को विकसित करने के लिए आवश्यक मूलभूत समस्या-समाधान तकनीकों को शामिल करता है। यह समस्या को समझने और संरचित प्रोग्रामिंग सिद्धांतों को नियोजित करने के महत्व पर जोर देता है, जिसमें अनुक्रम, चयन (यदि और यदि...अन्यथा), और पुनरावृत्ति (जबकि) जैसे नियंत्रण कथनों का उपयोग शामिल है। अध्याय स्यूडोकोड विकास, ऑपरेटर वरीयता और एल्गोरिदम निर्माण में नियंत्रण-कथन स्टैकिंग और नेस्टिंग के महत्व जैसी प्रमुख अवधारणाओं का भी परिचय देता है, जो अंततः प्रभावी प्रोग्रामिंग प्रथाओं के लिए आधार तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo aborda técnicas fundamentais de resolução de problemas essenciais para a construção de classes e o desenvolvimento de métodos em C#. Realça a importância de compreender o problema e empregar princípios de programação estruturados, incluindo a utilização de instruções de controlo como a sequência, a seleção (se e se...else) e a iteração (enquanto). O capítulo apresenta também conceitos-chave como o desenvolvimento de pseudocódigo, a precedência do operador e a importância do empilhamento e aninhamento de instruções de controlo na construção de algoritmos, estabelecendo, em última análise, as bases para práticas de programação eficazes.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে C#-এ ক্লাস তৈরি এবং পদ্ধতি বিকাশের জন্য প্রয়োজনীয় মৌলিক সমস্যা-সমাধান কৌশলগুলিকে কভার করে। এটি ক্রম, নির্বাচন (যদি এবং যদি... অন্যথা), এবং পুনরাবৃত্তি (যখন) এর মতো নিয়ন্ত্রণ বিবৃতিগুলির ব্যবহার সহ, সমস্যাটি বোঝার এবং কাঠামোগত প্রোগ্রামিং নীতিগুলি নিয়োগের গুরুত্বের উপর জোর দেয়। অধ্যায়টি সিউডোকোড বিকাশ, অপারেটর অগ্রাধিকার, এবং অ্যালগরিদম নির্মাণে নিয়ন্ত্রণ-বিবৃতি স্ট্যাকিং এবং নেস্টিংয়ের তাত্পর্যের মতো মূল ধারণাগুলিও উপস্থাপন করে, শেষ পর্যন্ত কার্যকর প্রোগ্রামিং অনুশীলনের ভিত্তি স্থাপন করে।",
                // Arabic
                "عَرَبِيّ": "يغطي هذا الفصل تقنيات حل المشكلات الأساسية الضرورية لبناء الفئات وتطوير الأساليب في C#. ويؤكد على أهمية فهم المشكلة واستخدام مبادئ البرمجة المنظمة، بما في ذلك استخدام عبارات التحكم مثل التسلسل والاختيار (إذا وإذا...إلا) والتكرار (بينما). كما يقدم الفصل مفاهيم أساسية مثل تطوير الكود الزائف، وأولوية المشغل، وأهمية تكديس عبارات التحكم وتداخلها في بناء الخوارزمية، مما يضع الأساس لممارسات البرمجة الفعالة.",
                // Persian
                "فارسی": "این فصل تکنیک های اساسی حل مسئله را پوشش می دهد که برای ساختن کلاس ها و توسعه روش ها در سی شارپ ضروری است. بر اهمیت درک مسئله و به کارگیری اصول برنامه نویسی ساختاریافته، از جمله استفاده از دستورات کنترلی مانند ترتیب، انتخاب (اگر و اگر...دیگر)، و تکرار (در حالی که) تاکید می کند. این فصل همچنین مفاهیم کلیدی مانند توسعه شبه کد، تقدم عملگر، و اهمیت چیدمان و تودرتوی دستورات کنترلی را در ساخت الگوریتم معرفی می‌کند، که در نهایت زمینه را برای شیوه‌های برنامه‌نویسی مؤثر فراهم می‌کند.",
            },
        },
        // 6
        {
            "ChapterName": "Control Statements: Part 2",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on C# control statements, including the for, do...while, and switch statements, emphasizing their role in structured programming. It explains how these control statements facilitate counter-controlled iteration and multiple selection, while also introducing the break and continue statements to manage flow control. Additionally, the chapter covers logical operators for forming complex conditions and highlights the importance of structured programming in creating understandable, testable, and maintainable applications.",
                // German
                "Deutsch": "In diesem Kapitel stehen C#-Steueranweisungen im Mittelpunkt, darunter die Anweisungen for, do...while und switch, und ihre Rolle in der strukturierten Programmierung wird hervorgehoben. Es wird erklärt, wie diese Steueranweisungen zählergesteuerte Iterationen und Mehrfachauswahlen ermöglichen, und es werden die Anweisungen break und continue zur Verwaltung der Flusssteuerung vorgestellt. Darüber hinaus behandelt das Kapitel logische Operatoren zur Bildung komplexer Bedingungen und hebt die Bedeutung der strukturierten Programmierung für die Erstellung verständlicher, testbarer und wartbarer Anwendungen hervor.",
                // Chinese
                "中国人": "本章重点介绍 C# 控制语句，包括 for、do...while 和 switch 语句，强调它们在结构化编程中的作用。它解释了这些控制语句如何促进计数器控制迭代和多项选择，同时还介绍了 break 和 continue 语句来管理流控制。此外，本章还介绍了用于形成复杂条件的逻辑运算符，并强调了结构化编程在创建可理解、可测试和可维护的应用程序中的重要性。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется операторам управления C#, включая операторы for, do...while и switch, подчеркивая их роль в структурном программировании. В ней объясняется, как эти операторы управления облегчают итерацию с контр-контролем и множественный выбор, а также вводятся операторы break и continue для управления потоком. Кроме того, в главе рассматриваются логические операторы для формирования сложных условий и подчеркивается важность структурного программирования для создания понятных, тестируемых и поддерживаемых приложений.",
                // French
                "Français": "Ce chapitre se concentre sur les instructions de contrôle C#, notamment les instructions for, do...while et switch, en mettant l'accent sur leur rôle dans la programmation structurée. Il explique comment ces instructions de contrôle facilitent l'itération contrôlée par compteur et la sélection multiple, tout en introduisant les instructions break et continue pour gérer le contrôle de flux. De plus, le chapitre couvre les opérateurs logiques pour former des conditions complexes et souligne l'importance de la programmation structurée pour créer des applications compréhensibles, testables et maintenables.",
                // Japanese
                "日本語": "この章では、C# の制御ステートメント (for、do...while、switch ステートメントなど) に焦点を当て、構造化プログラミングにおけるそれらの役割を強調します。これらの制御ステートメントがカウンタ制御の反復と複数選択を容易にする方法を説明し、フロー制御を管理するための break ステートメントと continue ステートメントも紹介します。さらに、この章では、複雑な条件を形成するための論理演算子について説明し、理解しやすく、テスト可能で、保守可能なアプリケーションを作成するための構造化プログラミングの重要性を強調します。",
                // Korean
                "한국인": "이 장에서는 for, do...while, switch 문을 포함한 C# 제어 문에 초점을 맞추고 구조화된 프로그래밍에서의 역할을 강조합니다. 이러한 제어 문이 카운터 제어 반복 및 다중 선택을 용이하게 하는 방법을 설명하는 동시에 흐름 제어를 관리하기 위한 break 및 continue 문을 소개합니다. 또한 이 장에서는 복잡한 조건을 형성하기 위한 논리 연산자를 다루고 이해하기 쉽고 테스트 가능하며 유지 관리 가능한 애플리케이션을 만드는 데 있어 구조화된 프로그래밍의 중요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo se centra en las sentencias de control de C#, incluidas las sentencias for, do...while y switch, y destaca su función en la programación estructurada. Explica cómo estas sentencias de control facilitan la iteración controlada por contadores y la selección múltiple, a la vez que presenta las sentencias break y continue para gestionar el control de flujo. Además, el capítulo cubre los operadores lógicos para formar condiciones complejas y destaca la importancia de la programación estructurada para crear aplicaciones comprensibles, comprobables y mantenibles.",
                // Hindi
                "हिंदी": "यह अध्याय C# नियंत्रण कथनों पर केंद्रित है, जिसमें for, do...while, और switch कथन शामिल हैं, जो संरचित प्रोग्रामिंग में उनकी भूमिका पर जोर देते हैं। यह बताता है कि कैसे ये नियंत्रण कथन काउंटर-नियंत्रित पुनरावृत्ति और एकाधिक चयन की सुविधा प्रदान करते हैं, जबकि प्रवाह नियंत्रण को प्रबंधित करने के लिए break और continue कथनों का परिचय भी देते हैं। इसके अतिरिक्त, अध्याय जटिल स्थितियों को बनाने के लिए तार्किक ऑपरेटरों को शामिल करता है और समझने योग्य, परीक्षण योग्य और रखरखाव योग्य अनुप्रयोग बनाने में संरचित प्रोग्रामिंग के महत्व पर प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo centra-se nas instruções de controlo C#, incluindo as instruções for, do...while e switch, enfatizando o seu papel na programação estruturada. Explica como estas instruções de controlo facilitam a iteração controlada por contador e a seleção múltipla, ao mesmo tempo que introduz as instruções break e continue para gerir o controlo de fluxo. Além disso, o capítulo aborda os operadores lógicos para formar condições complexas e destaca a importância da programação estruturada na criação de aplicações compreensíveis, testáveis ​​e de fácil manutenção.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি C# কন্ট্রোল স্টেটমেন্টের উপর ফোকাস করে, যার মধ্যে রয়েছে for, do...while, এবং switch স্টেটমেন্ট, যা স্ট্রাকচার্ড প্রোগ্রামিংয়ে তাদের ভূমিকার উপর জোর দেয়। এটি ব্যাখ্যা করে যে কীভাবে এই নিয়ন্ত্রণ বিবৃতিগুলি পাল্টা-নিয়ন্ত্রিত পুনরাবৃত্তি এবং একাধিক নির্বাচনের সুবিধা দেয়, পাশাপাশি প্রবাহ নিয়ন্ত্রণ পরিচালনা করার জন্য বিরতি এবং অবিরত বিবৃতি প্রবর্তন করে। উপরন্তু, অধ্যায়টি জটিল পরিস্থিতি তৈরির জন্য যৌক্তিক অপারেটরদের কভার করে এবং বোধগম্য, পরীক্ষাযোগ্য এবং রক্ষণাবেক্ষণযোগ্য অ্যাপ্লিকেশন তৈরিতে কাঠামোগত প্রোগ্রামিংয়ের গুরুত্ব তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على عبارات التحكم بلغة C#، بما في ذلك عبارات for وdo...while وswitch، مع التأكيد على دورها في البرمجة المنظمة. ويشرح كيف تسهل عبارات التحكم هذه التكرار المضاد والاختيار المتعدد، مع تقديم عبارات break وcontinue لإدارة التحكم في التدفق. بالإضافة إلى ذلك، يغطي الفصل المشغلات المنطقية لتشكيل شروط معقدة ويسلط الضوء على أهمية البرمجة المنظمة في إنشاء تطبيقات مفهومة وقابلة للاختبار وقابلة للصيانة.",
                // Persian
                "فارسی": "این فصل بر روی دستورات کنترلی سی شارپ، از جمله دستورات for، do...while، و switch تمرکز دارد و بر نقش آنها در برنامه نویسی ساخت یافته تاکید می کند. توضیح می‌دهد که چگونه این عبارات کنترل، تکرار کنترل‌شده و انتخاب چندگانه را تسهیل می‌کنند، در حالی که دستورات شکست و ادامه را برای مدیریت کنترل جریان معرفی می‌کنند. علاوه بر این، این فصل عملگرهای منطقی را برای شکل‌دهی شرایط پیچیده پوشش می‌دهد و اهمیت برنامه‌نویسی ساختاریافته را در ایجاد برنامه‌های کاربردی قابل درک، آزمایش‌پذیر و قابل نگهداری برجسته می‌کند.",
            },
        },
        // 7
        {
            "ChapterName": "Methods: A Deeper Look",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In this chapter, the focus is on understanding static and non-static methods, particularly within the context of the Math class in the .NET Framework, which provides various static methods for mathematical calculations. It covers the declaration of static variables, the significance of the static Main method, and the use of multiple parameters in methods. Additionally, the chapter discusses string concatenation, the declaration of constants, method overloading, optional and named parameters, and the scope of fields and local variables, while also introducing simulation techniques through random number generation.",
                // German
                "Deutsch": "In diesem Kapitel liegt der Schwerpunkt auf dem Verständnis statischer und nicht statischer Methoden, insbesondere im Kontext der Math-Klasse im .NET Framework, die verschiedene statische Methoden für mathematische Berechnungen bereitstellt. Es behandelt die Deklaration statischer Variablen, die Bedeutung der statischen Main-Methode und die Verwendung mehrerer Parameter in Methoden. Darüber hinaus behandelt das Kapitel die Zeichenfolgenverkettung, die Deklaration von Konstanten, Methodenüberladung, optionale und benannte Parameter sowie den Gültigkeitsbereich von Feldern und lokalen Variablen und führt Simulationstechniken durch Zufallszahlengenerierung ein.",
                // Chinese
                "中国人": "本章重点介绍静态和非静态方法，特别是在 .NET Framework 中的 Math 类上下文中，它提供了用于数学计算的各种静态方法。它涵盖了静态变量的声明、静态 Main 方法的意义以及方法中多个参数的使用。此外，本章还讨论了字符串连接、常量的声明、方法重载、可选和命名参数以及字段和局部变量的范围，同时还介绍了通过随机数生成进行的模拟技术。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется пониманию статических и нестатических методов, особенно в контексте класса Math в .NET Framework, который предоставляет различные статические методы для математических вычислений. Он охватывает объявление статических переменных, значение статического метода Main и использование нескольких параметров в методах. Кроме того, в главе обсуждается конкатенация строк, объявление констант, перегрузка методов, необязательные и именованные параметры, а также область действия полей и локальных переменных, а также введение в методы моделирования посредством генерации случайных чисел.",
                // French
                "Français": "Dans ce chapitre, l'accent est mis sur la compréhension des méthodes statiques et non statiques, en particulier dans le contexte de la classe Math du .NET Framework, qui fournit diverses méthodes statiques pour les calculs mathématiques. Il couvre la déclaration des variables statiques, l'importance de la méthode statique Main et l'utilisation de plusieurs paramètres dans les méthodes. En outre, le chapitre aborde la concaténation de chaînes, la déclaration de constantes, la surcharge de méthodes, les paramètres facultatifs et nommés, ainsi que la portée des champs et des variables locales, tout en introduisant les techniques de simulation via la génération de nombres aléatoires.",
                // Japanese
                "日本語": "この章では、特に数学計算用のさまざまな静的メソッドを提供する .NET Framework の Math クラスのコンテキスト内での静的メソッドと非静的メソッドの理解に焦点を当てています。静的変数の宣言、静的 Main メソッドの重要性、メソッドでの複数のパラメータの使用について説明します。さらに、この章では、文字列の連結、定数の宣言、メソッドのオーバーロード、オプション パラメータと名前付きパラメータ、フィールドとローカル変数のスコープについて説明し、乱数生成によるシミュレーション手法も紹介します。",
                // Korean
                "한국인": "이 장에서는 특히 수학 계산을 위한 다양한 정적 메서드를 제공하는 .NET Framework의 Math 클래스 컨텍스트 내에서 정적 및 비정적 메서드를 이해하는 데 중점을 둡니다. 정적 변수의 선언, 정적 Main 메서드의 중요성, 메서드에서 여러 매개변수를 사용하는 방법을 다룹니다. 또한 이 장에서는 문자열 연결, 상수 선언, 메서드 오버로딩, 선택적 및 명명된 매개변수, 필드 및 로컬 변수의 범위에 대해 논의하는 동시에 난수 생성을 통한 시뮬레이션 기술을 소개합니다.",
                // Spanish
                "Español": "En este capítulo, el enfoque se centra en la comprensión de los métodos estáticos y no estáticos, en particular en el contexto de la clase Math en .NET Framework, que proporciona varios métodos estáticos para cálculos matemáticos. Abarca la declaración de variables estáticas, la importancia del método estático Main y el uso de múltiples parámetros en los métodos. Además, el capítulo analiza la concatenación de cadenas, la declaración de constantes, la sobrecarga de métodos, los parámetros opcionales y con nombre, y el alcance de los campos y las variables locales, a la vez que presenta técnicas de simulación a través de la generación de números aleatorios.",
                // Hindi
                "हिंदी": "इस अध्याय में, स्थैतिक और गैर-स्थैतिक विधियों को समझने पर ध्यान केंद्रित किया गया है, विशेष रूप से .NET फ्रेमवर्क में मैथ क्लास के संदर्भ में, जो गणितीय गणनाओं के लिए विभिन्न स्थैतिक विधियाँ प्रदान करता है। इसमें स्थैतिक चर की घोषणा, स्थैतिक मुख्य विधि का महत्व और विधियों में कई मापदंडों के उपयोग को शामिल किया गया है। इसके अतिरिक्त, अध्याय स्ट्रिंग संयोजन, स्थिरांक की घोषणा, विधि ओवरलोडिंग, वैकल्पिक और नामित मापदंडों और फ़ील्ड और स्थानीय चर के दायरे पर चर्चा करता है, साथ ही यादृच्छिक संख्या पीढ़ी के माध्यम से सिमुलेशन तकनीकों का परिचय भी देता है।",
                // Portuguese
                "Português": "Neste capítulo, o foco está na compreensão de métodos estáticos e não estáticos, especialmente no contexto da classe Math no .NET Framework, que fornece vários métodos estáticos para cálculos matemáticos. Abrange a declaração de variáveis ​​estáticas, o significado do método principal estático e a utilização de vários parâmetros nos métodos. Além disso, o capítulo discute a concatenação de strings, a declaração de constantes, a sobrecarga de métodos, parâmetros opcionais e nomeados e o âmbito dos campos e variáveis ​​locais, ao mesmo tempo que introduz técnicas de simulação através da geração de números aleatórios.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে, বিশেষ করে .NET ফ্রেমওয়ার্কের গণিত ক্লাসের প্রেক্ষাপটে, যা গাণিতিক গণনার জন্য বিভিন্ন স্ট্যাটিক পদ্ধতি প্রদান করে, স্ট্যাটিক এবং নন-স্ট্যাটিক পদ্ধতি বোঝার উপর ফোকাস করা হয়েছে। এটি স্ট্যাটিক ভেরিয়েবলের ঘোষণা, স্ট্যাটিক প্রধান পদ্ধতির তাৎপর্য এবং পদ্ধতিতে একাধিক পরামিতি ব্যবহার করে। অতিরিক্তভাবে, অধ্যায়টি স্ট্রিং সংযোজন, ধ্রুবকের ঘোষণা, পদ্ধতি ওভারলোডিং, ঐচ্ছিক এবং নামযুক্ত প্যারামিটার এবং ক্ষেত্র এবং স্থানীয় ভেরিয়েবলের সুযোগ নিয়ে আলোচনা করে, পাশাপাশি র্যান্ডম সংখ্যা তৈরির মাধ্যমে সিমুলেশন কৌশলগুলিও প্রবর্তন করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على فهم الطرق الثابتة وغير الثابتة، وخاصة في سياق فئة Math في إطار عمل .NET، والتي توفر طرقًا ثابتة مختلفة للحسابات الرياضية. ويغطي الفصل إعلان المتغيرات الثابتة، وأهمية طريقة Main الثابتة، واستخدام معلمات متعددة في الطرق. بالإضافة إلى ذلك، يناقش الفصل ربط السلاسل، وإعلان الثوابت، وزيادة تحميل الطريقة، والمعلمات الاختيارية والمسماة، ونطاق الحقول والمتغيرات المحلية، مع تقديم تقنيات المحاكاة من خلال توليد الأرقام العشوائية.",
                // Persian
                "فارسی": "در این فصل، تمرکز بر درک روش های ایستا و غیر ایستا، به ویژه در زمینه کلاس ریاضی در دات نت فریم ورک است که روش های ثابت مختلفی را برای محاسبات ریاضی ارائه می دهد. این اعلان متغیرهای استاتیک، اهمیت روش Static Main و استفاده از پارامترهای متعدد در روش ها را پوشش می دهد. علاوه بر این، این فصل به الحاق رشته ها، اعلان ثابت ها، بارگذاری بیش از حد روش، پارامترهای اختیاری و نامگذاری شده، و دامنه فیلدها و متغیرهای محلی می پردازد، در حالی که تکنیک های شبیه سازی را از طریق تولید اعداد تصادفی معرفی می کند.",
            },
        },
        // 8
        {
            "ChapterName": "Arrays; Introduction to Exception Handling",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces data structures, focusing on arrays as fixed-length collections of related data items of the same type. It covers how to declare, create, and manipulate arrays, including the use of the foreach iteration statement for accessing data, and demonstrates exception handling for out-of-bounds access. Additionally, the chapter presents case studies, such as a GradeBook for managing student grades and a DeckOfCards for shuffling and dealing cards, while also introducing concepts like jagged arrays, variable-length argument lists, and command-line arguments, setting the stage for further exploration of dynamic data structures and LINQ in subsequent chapters.",
                // German
                "Deutsch": "In diesem Kapitel werden Datenstrukturen vorgestellt, wobei der Schwerpunkt auf Arrays als Sammlungen von verwandten Datenelementen desselben Typs mit fester Länge liegt. Es wird erläutert, wie Arrays deklariert, erstellt und bearbeitet werden, einschließlich der Verwendung der Iterationsanweisung foreach zum Zugriff auf Daten, und die Ausnahmebehandlung für Zugriffe außerhalb der Grenzen wird demonstriert. Darüber hinaus werden in diesem Kapitel Fallstudien vorgestellt, wie z. B. ein GradeBook zum Verwalten von Schülernoten und ein DeckOfCards zum Mischen und Austeilen von Karten. Außerdem werden Konzepte wie gezackte Arrays, Argumentlisten mit variabler Länge und Befehlszeilenargumente vorgestellt, wodurch die Grundlage für die weitere Erforschung dynamischer Datenstrukturen und LINQ in den folgenden Kapiteln geschaffen wird.",
                // Chinese
                "中国人": "本章介绍数据结构，重点介绍数组，即相同类型的相关数据项的固定长度集合。它介绍了如何声明、创建和操作数组，包括使用 foreach 迭代语句访问数据，并演示了越界访问的异常处理。此外，本章还介绍了案例研究，例如用于管理学生成绩的 GradeBook 和用于洗牌和发牌的 DeckOfCards，同时还介绍了交错数组、可变长度参数列表和命令行参数等概念，为后续章节中进一步探索动态数据结构和 LINQ 奠定了基础。",
                // Russian
                "Русский": "В этой главе рассматриваются структуры данных, с упором на массивы как коллекции фиксированной длины связанных элементов данных одного типа. В ней рассматривается, как объявлять, создавать и манипулировать массивами, включая использование оператора итерации foreach для доступа к данным, а также демонстрируется обработка исключений для доступа за пределами диапазона. Кроме того, в главе представлены тематические исследования, такие как GradeBook для управления оценками студентов и DeckOfCards для перетасовки и раздачи карт, а также вводятся такие концепции, как неровные массивы, списки аргументов переменной длины и аргументы командной строки, что подготавливает почву для дальнейшего изучения динамических структур данных и LINQ в последующих главах.",
                // French
                "Français": "Ce chapitre présente les structures de données, en se concentrant sur les tableaux en tant que collections de longueur fixe d'éléments de données connexes du même type. Il explique comment déclarer, créer et manipuler des tableaux, y compris l'utilisation de l'instruction d'itération foreach pour accéder aux données, et démontre la gestion des exceptions pour l'accès hors limites. En outre, le chapitre présente des études de cas, telles qu'un GradeBook pour gérer les notes des étudiants et un DeckOfCards pour mélanger et distribuer les cartes, tout en introduisant des concepts tels que les tableaux irréguliers, les listes d'arguments de longueur variable et les arguments de ligne de commande, ouvrant la voie à une exploration plus approfondie des structures de données dynamiques et de LINQ dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、同じ型の関連データ項目の固定長コレクションである配列に焦点を当てて、データ構造を紹介します。データにアクセスするための foreach 反復ステートメントの使用を含む、配列の宣言、作成、操作方法について説明し、範囲外のアクセスの例外処理を示します。さらに、この章では、生徒の成績を管理するための GradeBook や、カードをシャッフルして配るための DeckOfCards などのケース スタディを紹介するとともに、ギザギザの配列、可変長引数リスト、コマンド ライン引数などの概念を紹介し、後続の章で動的データ構造と LINQ をさらに詳しく調べるための土台を築きます。",
                // Korean
                "한국인": "이 장에서는 동일한 유형의 관련 데이터 항목의 고정 길이 컬렉션인 배열에 초점을 맞춰 데이터 구조를 소개합니다. 배열을 선언, 생성 및 조작하는 방법을 다루고, foreach 반복문을 사용하여 데이터에 액세스하는 방법을 다루며, 범위를 벗어난 액세스에 대한 예외 처리를 보여줍니다. 또한 이 장에서는 학생 성적을 관리하기 위한 GradeBook과 카드를 섞고 나누기 위한 DeckOfCards와 같은 사례 연구를 제시하는 동시에, 가변 길이 인수 목록, 명령줄 인수와 같은 개념을 소개하여 후속 장에서 동적 데이터 구조와 LINQ를 더 탐구할 수 있는 토대를 마련합니다.",
                // Spanish
                "Español": "En este capítulo se presentan las estructuras de datos, centrándose en las matrices como colecciones de longitud fija de elementos de datos relacionados del mismo tipo. Se explica cómo declarar, crear y manipular matrices, incluido el uso de la declaración de iteración foreach para acceder a los datos, y se demuestra el manejo de excepciones para el acceso fuera de los límites. Además, el capítulo presenta estudios de casos, como un GradeBook para administrar las calificaciones de los estudiantes y un DeckOfCards para barajar y repartir las cartas, al tiempo que se introducen conceptos como matrices escalonadas, listas de argumentos de longitud variable y argumentos de línea de comandos, lo que prepara el terreno para una mayor exploración de las estructuras de datos dinámicas y LINQ en los capítulos posteriores.",
                // Hindi
                "हिंदी": "यह अध्याय डेटा संरचनाओं का परिचय देता है, जो समान प्रकार के संबंधित डेटा आइटम के निश्चित-लंबाई संग्रह के रूप में सरणियों पर ध्यान केंद्रित करता है। यह बताता है कि सरणियों को कैसे घोषित, बनाया और हेरफेर किया जाए, जिसमें डेटा तक पहुँचने के लिए foreach पुनरावृत्ति कथन का उपयोग शामिल है, और आउट-ऑफ-बाउंड एक्सेस के लिए अपवाद हैंडलिंग का प्रदर्शन करता है। इसके अतिरिक्त, अध्याय केस स्टडी प्रस्तुत करता है, जैसे कि छात्र ग्रेड के प्रबंधन के लिए ग्रेडबुक और कार्ड को फेरबदल और निपटाने के लिए डेकऑफकार्ड्स, साथ ही दांतेदार सरणियाँ, चर-लंबाई तर्क सूचियाँ और कमांड-लाइन तर्क जैसी अवधारणाओं का परिचय देते हुए, बाद के अध्यायों में गतिशील डेटा संरचनाओं और LINQ के आगे अन्वेषण के लिए मंच तैयार किया गया है।",
                // Portuguese
                "Português": "Este capítulo apresenta as estruturas de dados, com foco nos arrays como coleções de comprimento fixo de itens de dados relacionados do mesmo tipo. Aborda como declarar, criar e manipular arrays, incluindo a utilização da instrução de iteração foreach para aceder aos dados, e demonstra o tratamento de exceções para acesso fora dos limites. Além disso, o capítulo apresenta estudos de caso, como um GradeBook para gerir as notas dos alunos e um DeckOfCards para baralhar e distribuir cartas, ao mesmo tempo que introduz conceitos como matrizes irregulares, listas de argumentos de comprimento variável e argumentos de linha de comando , preparando o terreno para a exploração futura de estruturas de dados dinâmicas e LINQ nos capítulos subsequentes.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি একই ধরণের সম্পর্কিত ডেটা আইটেমগুলির নির্দিষ্ট দৈর্ঘ্যের সংগ্রহ হিসাবে অ্যারেগুলিতে ফোকাস করে ডেটা কাঠামোর পরিচয় দেয়। এটি ডেটা অ্যাক্সেস করার জন্য foreach পুনরাবৃত্তি বিবৃতি ব্যবহার সহ অ্যারেগুলি কীভাবে ঘোষণা, তৈরি এবং ম্যানিপুলেট করতে হয় তা কভার করে এবং সীমার বাইরে অ্যাক্সেসের জন্য ব্যতিক্রম পরিচালনা প্রদর্শন করে। উপরন্তু, অধ্যায়টি কেস স্টাডি উপস্থাপন করে, যেমন স্টুডেন্ট গ্রেড ম্যানেজ করার জন্য একটি গ্রেডবুক এবং কার্ড এলোমেলো এবং ডিল করার জন্য একটি ডেকঅফকার্ড, পাশাপাশি জ্যাগড অ্যারে, পরিবর্তনশীল-দৈর্ঘ্যের আর্গুমেন্ট লিস্ট এবং কমান্ড-লাইন আর্গুমেন্টের মতো ধারণাগুলিও প্রবর্তন করে, যা আরও মঞ্চ তৈরি করে। পরবর্তী অধ্যায়ে ডায়নামিক ডেটা স্ট্রাকচার এবং LINQ অনুসন্ধান।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل مقدمة عن هياكل البيانات، مع التركيز على المصفوفات كمجموعات ذات طول ثابت من عناصر البيانات ذات الصلة من نفس النوع. ويغطي كيفية إعلان المصفوفات وإنشائها ومعالجتها، بما في ذلك استخدام عبارة التكرار foreach للوصول إلى البيانات، ويوضح معالجة الاستثناءات للوصول خارج الحدود. بالإضافة إلى ذلك، يقدم الفصل دراسات حالة، مثل GradeBook لإدارة درجات الطلاب وDeckOfCards لخلط وتوزيع البطاقات، مع تقديم مفاهيم مثل المصفوفات المتعرجة وقوائم الحجج ذات الطول المتغير وحجج سطر الأوامر، مما يمهد الطريق لمزيد من الاستكشاف لهياكل البيانات الديناميكية وLINQ في الفصول اللاحقة.",
                // Persian
                "فارسی": "این فصل ساختارهای داده را معرفی می‌کند، با تمرکز بر آرایه‌ها به عنوان مجموعه‌هایی با طول ثابت از اقلام داده مرتبط از همان نوع. نحوه اعلان، ایجاد و دستکاری آرایه‌ها، از جمله استفاده از دستور تکرار foreach برای دسترسی به داده‌ها را پوشش می‌دهد و مدیریت استثنا برای دسترسی خارج از محدوده را نشان می‌دهد. علاوه بر این، این فصل مطالعات موردی را ارائه می‌کند، مانند GradeBook برای مدیریت نمرات دانش‌آموز و DeckOfCards برای به هم زدن و پرداختن کارت‌ها، در حالی که مفاهیمی مانند آرایه‌های ناهموار، فهرست‌های آرگومان با طول متغیر، و آرگومان‌های خط فرمان را نیز معرفی می‌کند و زمینه را برای ادامه کار فراهم می‌کند. کاوش در ساختارهای داده پویا و LINQ در فصل های بعدی.",
            },
        },
        // 9
        {
            "ChapterName": "Introduction to LINQ and the List Collection",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces LINQ (Language Integrated Query) as a powerful tool for querying data, demonstrating how to filter and sort arrays and collections using clauses like where, orderby, and select. It highlights the advantages of the List collection over traditional arrays, including dynamic resizing and various methods for manipulating data, such as Add, Remove, and Insert. Additionally, the chapter covers advanced LINQ features like deferred execution and extension methods, emphasizing the efficiency and reliability of .NET collections for managing data in applications.",
                // German
                "Deutsch": "In diesem Kapitel wird LINQ (Language Integrated Query) als leistungsstarkes Tool zum Abfragen von Daten vorgestellt. Es zeigt, wie Arrays und Sammlungen mithilfe von Klauseln wie where, orderby und select gefiltert und sortiert werden. Es hebt die Vorteile der List-Sammlung gegenüber herkömmlichen Arrays hervor, darunter dynamische Größenanpassung und verschiedene Methoden zum Bearbeiten von Daten wie Add, Remove und Insert. Darüber hinaus behandelt das Kapitel erweiterte LINQ-Funktionen wie verzögerte Ausführung und Erweiterungsmethoden und betont die Effizienz und Zuverlässigkeit von .NET-Sammlungen für die Verwaltung von Daten in Anwendungen.",
                // Chinese
                "中国人": "本章介绍了 LINQ（语言集成查询）作为一种强大的数据查询工具，并演示了如何使用 where、orderby 和 select 等子句对数组和集合进行筛选和排序。它重点介绍了 List 集合相对于传统数组的优势，包括动态调整大小和各种数据操作方法，例如 Add、Remove 和 Insert。此外，本章还介绍了延迟执行和扩展方法等高级 LINQ 功能，强调了 .NET 集合在应用程序中管理数据的效率和可靠性。",
                // Russian
                "Русский": "В этой главе представлен LINQ (Language Integrated Query) как мощный инструмент для запроса данных, демонстрирующий, как фильтровать и сортировать массивы и коллекции с использованием таких предложений, как where, orderby и select. В ней подчеркиваются преимущества коллекции List по сравнению с традиционными массивами, включая динамическое изменение размера и различные методы манипулирования данными, такие как Add, Remove и Insert. Кроме того, в главе рассматриваются расширенные функции LINQ, такие как отложенное выполнение и методы расширения, подчеркивая эффективность и надежность коллекций .NET для управления данными в приложениях.",
                // French
                "Français": "Ce chapitre présente LINQ (Language Integrated Query) comme un outil puissant d'interrogation de données, en montrant comment filtrer et trier des tableaux et des collections à l'aide de clauses telles que where, orderby et select. Il met en évidence les avantages de la collection List par rapport aux tableaux traditionnels, notamment le redimensionnement dynamique et diverses méthodes de manipulation des données, telles que Add, Remove et Insert. En outre, le chapitre couvre les fonctionnalités avancées de LINQ telles que l'exécution différée et les méthodes d'extension, en mettant l'accent sur l'efficacité et la fiabilité des collections .NET pour la gestion des données dans les applications.",
                // Japanese
                "日本語": "この章では、データのクエリを実行するための強力なツールとして LINQ (Language Integrated Query) を紹介し、where、orderby、select などの句を使用して配列やコレクションをフィルター処理および並べ替える方法を説明します。動的なサイズ変更や、Add、Remove、Insert などのさまざまなデータ操作方法など、従来の配列と比較した List コレクションの利点について説明します。さらに、遅延実行や拡張メソッドなどの高度な LINQ 機能についても説明し、アプリケーションでデータを管理するための .NET コレクションの効率性と信頼性を強調します。",
                // Korean
                "한국인": "이 장에서는 데이터 쿼리를 위한 강력한 도구인 LINQ(Language Integrated Query)를 소개하고 where, orderby, select와 같은 절을 사용하여 배열과 컬렉션을 필터링하고 정렬하는 방법을 보여줍니다. 동적 크기 조정 및 Add, Remove, Insert와 같은 데이터 조작을 위한 다양한 방법을 포함하여 기존 배열에 비해 List 컬렉션의 장점을 강조합니다. 또한 이 장에서는 지연 실행 및 확장 메서드와 같은 고급 LINQ 기능을 다루며 애플리케이션에서 데이터를 관리하기 위한 .NET 컬렉션의 효율성과 안정성을 강조합니다.",
                // Spanish
                "Español": "En este capítulo se presenta LINQ (Language Integrated Query) como una herramienta potente para consultar datos, y se muestra cómo filtrar y ordenar matrices y colecciones mediante cláusulas como where, orderby y select. Se destacan las ventajas de la colección List sobre las matrices tradicionales, incluido el cambio de tamaño dinámico y varios métodos para manipular datos, como Add, Remove e Insert. Además, el capítulo cubre características avanzadas de LINQ como la ejecución diferida y los métodos de extensión, y se hace hincapié en la eficiencia y la confiabilidad de las colecciones .NET para administrar datos en aplicaciones.",
                // Hindi
                "हिंदी": "यह अध्याय डेटा क्वेरी करने के लिए एक शक्तिशाली उपकरण के रूप में LINQ (भाषा एकीकृत क्वेरी) का परिचय देता है, यह दर्शाता है कि where, orderby, और select जैसे क्लॉज़ का उपयोग करके सरणियों और संग्रहों को कैसे फ़िल्टर और सॉर्ट किया जाए। यह पारंपरिक सरणियों पर सूची संग्रह के लाभों पर प्रकाश डालता है, जिसमें गतिशील आकार बदलना और डेटा में हेरफेर करने के लिए विभिन्न विधियाँ, जैसे कि Add, Remove, और Insert शामिल हैं। इसके अतिरिक्त, अध्याय में विलंबित निष्पादन और विस्तार विधियों जैसी उन्नत LINQ सुविधाएँ शामिल हैं, जो अनुप्रयोगों में डेटा के प्रबंधन के लिए .NET संग्रहों की दक्षता और विश्वसनीयता पर जोर देती हैं।",
                // Portuguese
                "Português": "Este capítulo apresenta o LINQ (Language Integrated Query) como uma poderosa ferramenta para consultar dados, demonstrando como filtrar e classificar arrays e coleções utilizando cláusulas como where, orderby e select. Destaca as vantagens da coleção List em relação aos arrays tradicionais, incluindo o redimensionamento dinâmico e vários métodos para a manipulação de dados, como Adicionar, Remover e Inserir. Além disso, o capítulo aborda as funcionalidades avançadas do LINQ, como a execução adiada e os métodos de extensão, enfatizando a eficiência e a fiabilidade das coleções .NET para gerir dados em aplicações.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি LINQ (ভাষা সমন্বিত ক্যোয়ারী) তথ্য অনুসন্ধানের জন্য একটি শক্তিশালী হাতিয়ার হিসেবে পরিচয় করিয়ে দেয়, যেখানে, অর্ডারবাই এবং নির্বাচনের মতো ধারাগুলি ব্যবহার করে অ্যারে এবং সংগ্রহগুলি কীভাবে ফিল্টার এবং বাছাই করা যায় তা প্রদর্শন করে। এটি ঐতিহ্যগত অ্যারেগুলির উপর তালিকা সংগ্রহের সুবিধাগুলিকে হাইলাইট করে, যার মধ্যে গতিশীল আকার পরিবর্তন এবং ডেটা ম্যানিপুলেট করার বিভিন্ন পদ্ধতি, যেমন যোগ, সরান এবং সন্নিবেশ করা হয়। অতিরিক্তভাবে, অধ্যায়টি স্থগিত সম্পাদন এবং এক্সটেনশন পদ্ধতির মতো উন্নত LINQ বৈশিষ্ট্যগুলিকে কভার করে, অ্যাপ্লিকেশনগুলিতে ডেটা পরিচালনার জন্য .NET সংগ্রহের দক্ষতা এবং নির্ভরযোগ্যতার উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل LINQ (استعلام متكامل باللغة) كأداة قوية للاستعلام عن البيانات، ويوضح كيفية تصفية وفرز المصفوفات والمجموعات باستخدام جمل مثل where وorderby وselect. ويسلط الضوء على مزايا مجموعة List مقارنة بالمصفوفات التقليدية، بما في ذلك تغيير الحجم الديناميكي والطرق المختلفة لمعالجة البيانات، مثل Add وRemove وInsert. بالإضافة إلى ذلك، يغطي الفصل ميزات LINQ المتقدمة مثل التنفيذ المؤجل وطرق التمديد، مع التأكيد على كفاءة وموثوقية مجموعات .NET لإدارة البيانات في التطبيقات.",
                // Persian
                "فارسی": "این فصل LINQ (پرس و جوی یکپارچه زبان) را به عنوان ابزاری قدرتمند برای جست و جوی داده ها معرفی می کند و نحوه فیلتر کردن و مرتب سازی آرایه ها و مجموعه ها را با استفاده از بندهایی مانند Where، orderby و select نشان می دهد. مزیت های مجموعه List را نسبت به آرایه های سنتی، از جمله تغییر اندازه پویا و روش های مختلف برای دستکاری داده ها، مانند افزودن، حذف و درج، برجسته می کند. علاوه بر این، این فصل ویژگی‌های پیشرفته LINQ مانند روش‌های اجرای معوق و گسترش را پوشش می‌دهد، و بر کارایی و قابلیت اطمینان مجموعه‌های دات‌نت برای مدیریت داده‌ها در برنامه‌ها تأکید می‌کند.",
            },
        },
        // 10
        {
            "ChapterName": "Classes and Objects: A Deeper Look",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter delves into advanced class concepts in C#, focusing on building classes with composition, controlling member access, and creating constructors. It introduces operator overloading to define built-in operator behavior for custom classes, explains the use of fields and static members, and highlights C#'s garbage collection for memory management. Additionally, the chapter covers creating value types using , utilizing extension methods to enhance existing types, and demonstrates the implicit and explicit use of the reference within class methods.",
                // German
                "Deutsch": "Dieses Kapitel befasst sich mit fortgeschrittenen Klassenkonzepten in C# und konzentriert sich auf das Erstellen von Klassen mit Komposition, das Steuern des Memberzugriffs und das Erstellen von Konstruktoren. Es führt in die Operatorüberladung ein, um integriertes Operatorverhalten für benutzerdefinierte Klassen zu definieren, erklärt die Verwendung von Feldern und statischen Membern und hebt die Garbage Collection von C# für die Speicherverwaltung hervor. Darüber hinaus behandelt das Kapitel das Erstellen von Werttypen mit , die Verwendung von Erweiterungsmethoden zum Verbessern vorhandener Typen und demonstriert die implizite und explizite Verwendung der Referenz innerhalb von Klassenmethoden.",
                // Chinese
                "中国人": "本章深入探讨了 C# 中的高级类概念，重点介绍了使用组合构建类、控制成员访问和创建构造函数。它介绍了运算符重载以定义自定义类的内置运算符行为，解释了字段和静态成员的使用，并重点介绍了 C# 的垃圾收集内存管理。此外，本章还介绍了如何使用 创建值类型、利用扩展方法来增强现有类型，并演示了类方法中引用的隐式和显式使用。",
                // Russian
                "Русский": "В этой главе рассматриваются расширенные концепции классов в C#, с упором на создание классов с композицией, управление доступом к членам и создание конструкторов. В ней представлена ​​перегрузка операторов для определения встроенного поведения операторов для пользовательских классов, объясняется использование полей и статических членов, а также освещается сборка мусора C# для управления памятью. Кроме того, в главе рассматривается создание типов значений с помощью , использование методов расширения для улучшения существующих типов и демонстрируется неявное и явное использование ссылки в методах класса.",
                // French
                "Français": "Ce chapitre aborde les concepts de classe avancés en C#, en se concentrant sur la création de classes avec composition, le contrôle de l'accès aux membres et la création de constructeurs. Il présente la surcharge d'opérateur pour définir le comportement d'opérateur intégré pour les classes personnalisées, explique l'utilisation des champs et des membres statiques et met en évidence le garbage collection de C# pour la gestion de la mémoire. De plus, le chapitre couvre la création de types de valeur à l'aide de , l'utilisation de méthodes d'extension pour améliorer les types existants et démontre l'utilisation implicite et explicite de la référence dans les méthodes de classe.",
                // Japanese
                "日本語": "この章では、C# の高度なクラスの概念について詳しく説明し、合成によるクラスの構築、メンバー アクセスの制御、コンストラクターの作成に焦点を当てます。カスタム クラスの組み込み演算子の動作を定義する演算子オーバーロードを紹介し、フィールドと静的メンバーの使用方法を説明し、メモリ管理のための C# のガベージ コレクションに焦点を当てます。さらに、この章では、を使用した値型の作成、拡張メソッドを使用した既存の型の拡張、クラス メソッド内での参照の暗黙的および明示的な使用について説明します。",
                // Korean
                "한국인": "이 장에서는 C#의 고급 클래스 개념을 탐구하며, 구성을 사용한 클래스 구축, 멤버 액세스 제어, 생성자 생성에 중점을 둡니다. 사용자 지정 클래스에 대한 기본 제공 연산자 동작을 정의하기 위한 연산자 오버로딩을 소개하고, 필드와 정적 멤버의 사용을 설명하며, 메모리 관리를 위한 C#의 가비지 수집을 강조합니다. 또한 이 장에서는 를 사용하여 값 유형을 만들고, 확장 메서드를 사용하여 기존 유형을 향상시키고, 클래스 메서드 내에서 참조의 암시적 및 명시적 사용을 보여줍니다.",
                // Spanish
                "Español": "Este capítulo profundiza en los conceptos avanzados de clases en C#, centrándose en la creación de clases con composición, el control del acceso de miembros y la creación de constructores. Presenta la sobrecarga de operadores para definir el comportamiento de los operadores integrados para clases personalizadas, explica el uso de campos y miembros estáticos, y destaca la recolección de elementos no utilizados de C# para la gestión de memoria. Además, el capítulo cubre la creación de tipos de valor mediante , el uso de métodos de extensión para mejorar los tipos existentes y demuestra el uso implícito y explícito de la referencia dentro de los métodos de clase.",
                // Hindi
                "हिंदी": "यह अध्याय C# में उन्नत वर्ग अवधारणाओं पर गहन चर्चा करता है, जिसमें संयोजन के साथ वर्ग निर्माण, सदस्य पहुँच को नियंत्रित करना और कंस्ट्रक्टर बनाना शामिल है। यह कस्टम वर्गों के लिए अंतर्निहित ऑपरेटर व्यवहार को परिभाषित करने के लिए ऑपरेटर ओवरलोडिंग का परिचय देता है, फ़ील्ड और स्थिर सदस्यों के उपयोग की व्याख्या करता है, और मेमोरी प्रबंधन के लिए C# के कचरा संग्रहण पर प्रकाश डालता है। इसके अतिरिक्त, अध्याय का उपयोग करके मूल्य प्रकार बनाना, मौजूदा प्रकारों को बढ़ाने के लिए एक्सटेंशन विधियों का उपयोग करना, और वर्ग विधियों के भीतर संदर्भ के निहित और स्पष्ट उपयोग को प्रदर्शित करना शामिल है।",
                // Portuguese
                "Português": "Este capítulo aprofunda os conceitos avançados de classes em C#, concentrando-se na construção de classes com composição, no controlo do acesso aos membros e na criação de construtores. Introduz a sobrecarga do operador para definir o comportamento interno do operador para classes personalizadas, explica a utilização de campos e membros estáticos e destaca a recolha de lixo do C# para a gestão de memória. Além disso, o capítulo aborda a criação de tipos de valor utilizando métodos de extensão para melhorar os tipos existentes e demonstra a utilização implícita e explícita da referência nos métodos de classe.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি C#-এ উন্নত শ্রেণির ধারণাগুলি নিয়ে আলোচনা করে, কম্পোজিশন সহ ক্লাস তৈরি করা, সদস্য অ্যাক্সেস নিয়ন্ত্রণ করা এবং কনস্ট্রাক্টর তৈরির উপর দৃষ্টি নিবদ্ধ করা। এটি কাস্টম ক্লাসের জন্য অন্তর্নির্মিত অপারেটর আচরণ সংজ্ঞায়িত করতে অপারেটর ওভারলোডিং প্রবর্তন করে, ক্ষেত্র এবং স্ট্যাটিক সদস্যদের ব্যবহার ব্যাখ্যা করে এবং মেমরি পরিচালনার জন্য C# এর আবর্জনা সংগ্রহকে হাইলাইট করে। অতিরিক্তভাবে, অধ্যায়টি ব্যবহার করে মান প্রকার তৈরি করা, বিদ্যমান প্রকারগুলিকে উন্নত করার জন্য এক্সটেনশন পদ্ধতি ব্যবহার করা এবং শ্রেণী পদ্ধতির মধ্যে রেফারেন্সের অন্তর্নিহিত এবং সুস্পষ্ট ব্যবহার প্রদর্শন করে।",
                // Arabic
                "عَرَبِيّ": "يتعمق هذا الفصل في مفاهيم الفئات المتقدمة في لغة C#، مع التركيز على بناء الفئات باستخدام التكوين، والتحكم في وصول الأعضاء، وإنشاء المنشئين. كما يقدم شرحًا لكيفية تحميل المشغل لتحديد سلوك المشغل المدمج للفئات المخصصة، ويشرح استخدام الحقول والأعضاء الثابتة، ويسلط الضوء على جمع القمامة في لغة C# لإدارة الذاكرة. بالإضافة إلى ذلك، يغطي الفصل إنشاء أنواع القيمة باستخدام، والاستفادة من طرق التمديد لتحسين الأنواع الموجودة، ويوضح الاستخدام الضمني والصريح للمرجع داخل طرق الفئة.",
                // Persian
                "فارسی": "این فصل به مفاهیم کلاس های پیشرفته در سی شارپ می پردازد، با تمرکز بر ساخت کلاس ها با ترکیب، کنترل دسترسی اعضا و ایجاد سازنده. بارگذاری بیش از حد اپراتور را برای تعریف رفتار اپراتور داخلی برای کلاس‌های سفارشی معرفی می‌کند، استفاده از فیلدها و اعضای ثابت را توضیح می‌دهد و مجموعه زباله‌های سی شارپ را برای مدیریت حافظه برجسته می‌کند. علاوه بر این، این فصل ایجاد انواع ارزش با استفاده از، استفاده از روش‌های توسعه برای تقویت انواع موجود را پوشش می‌دهد و استفاده ضمنی و صریح از مرجع را در متدهای کلاس نشان می‌دهد.",
            },
        },
        // 11
        {
            "ChapterName": "Object-Oriented Programming: Inheritance",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on inheritance, a key feature of object-oriented programming that enables the creation of new classes by absorbing and enhancing members from existing classes, thereby promoting software reusability and efficiency in app development. It introduces the concepts of base and derived classes, the use of access modifiers like for member accessibility, and the importance of constructors in inheritance hierarchies. Additionally, the chapter discusses method overriding, the relationship between classes, and the foundational role of the class object, ultimately laying the groundwork for understanding polymorphism in the subsequent chapter.",
                // German
                "Deutsch": "In diesem Kapitel geht es um Vererbung, ein Schlüsselmerkmal der objektorientierten Programmierung, das die Erstellung neuer Klassen durch die Aufnahme und Erweiterung von Mitgliedern bestehender Klassen ermöglicht und so die Wiederverwendbarkeit und Effizienz von Software bei der App-Entwicklung fördert. Es führt in die Konzepte von Basis- und abgeleiteten Klassen ein, in die Verwendung von Zugriffsmodifikatoren wie für die Mitgliederzugänglichkeit und in die Bedeutung von Konstruktoren in Vererbungshierarchien. Darüber hinaus werden in diesem Kapitel das Überschreiben von Methoden, die Beziehung zwischen Klassen und die grundlegende Rolle des Klassenobjekts erörtert, wodurch letztlich die Grundlage für das Verständnis von Polymorphismus im folgenden Kapitel gelegt wird.",
                // Chinese
                "中国人": "本章重点介绍继承，这是面向对象编程的一个关键特性，它允许通过吸收和增强现有类的成员来创建新类，从而提高应用程序开发中的软件可重用性和效率。它介绍了基类和派生类的概念、访问修饰符（如成员可访问性）的使用，以及构造函数在继承层次结构中的重要性。此外，本章还讨论了方法重写、类之间的关系以及类对象的基础作用，最终为后续章节中理解多态性奠定了基础。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется наследованию, ключевой особенности объектно-ориентированного программирования, которая позволяет создавать новые классы путем поглощения и улучшения членов существующих классов, тем самым способствуя повторному использованию программного обеспечения и эффективности в разработке приложений. В ней вводятся концепции базовых и производных классов, использование модификаторов доступа, таких как доступность членов, и важность конструкторов в иерархиях наследования. Кроме того, в главе обсуждается переопределение методов, связь между классами и основополагающая роль объекта класса, в конечном итоге закладывая основу для понимания полиморфизма в следующей главе.",
                // French
                "Français": "Ce chapitre se concentre sur l'héritage, une fonctionnalité clé de la programmation orientée objet qui permet la création de nouvelles classes en absorbant et en améliorant les membres des classes existantes, favorisant ainsi la réutilisabilité et l'efficacité des logiciels dans le développement d'applications. Il présente les concepts de classes de base et dérivées, l'utilisation de modificateurs d'accès comme pour l'accessibilité des membres et l'importance des constructeurs dans les hiérarchies d'héritage. De plus, le chapitre aborde le remplacement des méthodes, la relation entre les classes et le rôle fondamental de l'objet de classe, jetant ainsi les bases de la compréhension du polymorphisme dans le chapitre suivant.",
                // Japanese
                "日本語": "この章では、オブジェクト指向プログラミングの重要な機能である継承に焦点を当てます。継承により、既存のクラスのメンバーを吸収して拡張することで新しいクラスを作成できるようになり、アプリケーション開発におけるソフトウェアの再利用性と効率性が促進されます。基本クラスと派生クラスの概念、メンバーのアクセシビリティのためのアクセス修飾子の使用、継承階層におけるコンストラクターの重要性について説明します。さらに、この章では、メソッドのオーバーライド、クラス間の関係、クラス オブジェクトの基本的役割について説明し、最終的には次の章でポリモーフィズムを理解するための基礎を築きます。",
                // Korean
                "한국인": "이 장에서는 객체 지향 프로그래밍의 핵심 기능인 상속에 초점을 맞춥니다. 상속은 기존 클래스의 멤버를 흡수하고 향상시켜 새로운 클래스를 만들 수 있게 함으로써 앱 개발에서 소프트웨어 재사용성과 효율성을 증진합니다. 기본 및 파생 클래스의 개념, 멤버 접근성을 위한 액세스 수정자 사용, 상속 계층에서 생성자의 중요성을 소개합니다. 또한 이 장에서는 메서드 오버라이딩, 클래스 간의 관계, 클래스 객체의 기본 역할에 대해 논의하여 궁극적으로 후속 장에서 다형성을 이해하기 위한 토대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la herencia, una característica clave de la programación orientada a objetos que permite la creación de nuevas clases mediante la absorción y mejora de miembros de clases existentes, promoviendo así la reutilización del software y la eficiencia en el desarrollo de aplicaciones. Presenta los conceptos de clases base y derivadas, el uso de modificadores de acceso como para la accesibilidad de miembros y la importancia de los constructores en las jerarquías de herencia. Además, el capítulo analiza la anulación de métodos, la relación entre clases y el papel fundamental del objeto de clase, sentando las bases para comprender el polimorfismo en el capítulo siguiente.",
                // Hindi
                "हिंदी": "यह अध्याय इनहेरिटेंस पर केंद्रित है, जो ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग की एक प्रमुख विशेषता है जो मौजूदा क्लास से सदस्यों को अवशोषित और बढ़ाकर नए क्लास बनाने में सक्षम बनाता है, जिससे ऐप डेवलपमेंट में सॉफ़्टवेयर की पुन: प्रयोज्यता और दक्षता को बढ़ावा मिलता है। यह बेस और व्युत्पन्न क्लास की अवधारणाओं, सदस्य पहुँच के लिए एक्सेस संशोधक के उपयोग और इनहेरिटेंस पदानुक्रम में कंस्ट्रक्टर के महत्व का परिचय देता है। इसके अतिरिक्त, अध्याय विधि ओवरराइडिंग, कक्षाओं के बीच संबंध और क्लास ऑब्जेक्ट की मूलभूत भूमिका पर चर्चा करता है, जो अंततः अगले अध्याय में बहुरूपता को समझने के लिए आधार तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na herança, uma característica chave da programação orientada a objetos que permite a criação de novas classes absorvendo e melhorando os membros das classes existentes, promovendo assim a reutilização de software e a eficiência no desenvolvimento de aplicações. Apresenta os conceitos de classes base e derivadas, a utilização de modificadores de acesso, como a acessibilidade dos membros, e a importância dos construtores nas hierarquias de herança. Além disso, o capítulo discute a substituição de métodos, a relação entre classes e o papel fundamental do objeto de classe, estabelecendo, em última análise, as bases para a compreensão do polimorfismo no capítulo subsequente.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি উত্তরাধিকারের উপর দৃষ্টি নিবদ্ধ করে, অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং এর একটি মূল বৈশিষ্ট্য যা বিদ্যমান ক্লাস থেকে সদস্যদের শোষণ এবং বৃদ্ধি করে নতুন ক্লাস তৈরি করতে সক্ষম করে, যার ফলে অ্যাপ ডেভেলপমেন্টে সফ্টওয়্যার পুনঃব্যবহারযোগ্যতা এবং দক্ষতার প্রচার করা হয়। এটি বেস এবং প্রাপ্ত ক্লাসের ধারণা, সদস্যদের অ্যাক্সেসযোগ্যতার জন্য অ্যাক্সেস মডিফায়ারের ব্যবহার এবং উত্তরাধিকার শ্রেণিবিন্যাসে কনস্ট্রাক্টরদের গুরুত্ব প্রবর্তন করে। অতিরিক্তভাবে, অধ্যায়টি পদ্ধতি ওভাররাইডিং, ক্লাসের মধ্যে সম্পর্ক এবং ক্লাস অবজেক্টের মৌলিক ভূমিকা নিয়ে আলোচনা করে, যা পরবর্তী অধ্যায়ে পলিমরফিজম বোঝার জন্য ভিত্তি স্থাপন করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على الميراث، وهي ميزة أساسية للبرمجة الموجهة للكائنات والتي تمكن من إنشاء فئات جديدة من خلال استيعاب وتعزيز الأعضاء من الفئات الموجودة، وبالتالي تعزيز إمكانية إعادة استخدام البرامج وكفاءتها في تطوير التطبيقات. كما يقدم مفاهيم الفئات الأساسية والمشتقة، واستخدام معرّفات الوصول مثل إمكانية وصول الأعضاء، وأهمية المنشئين في التسلسل الهرمي للوراثة. بالإضافة إلى ذلك، يناقش الفصل تجاوز الطريقة، والعلاقة بين الفئات، والدور الأساسي لكائن الفئة، مما يضع الأساس لفهم تعدد الأشكال في الفصل التالي.",
                // Persian
                "فارسی": "این فصل بر وراثت تمرکز می‌کند، یکی از ویژگی‌های کلیدی برنامه‌نویسی شی‌گرا که ایجاد کلاس‌های جدید را با جذب و تقویت اعضای کلاس‌های موجود امکان‌پذیر می‌سازد، در نتیجه قابلیت استفاده مجدد و کارایی نرم‌افزار را در توسعه برنامه ارتقا می‌دهد. مفاهیم کلاس های پایه و مشتق شده، استفاده از اصلاح کننده های دسترسی مانند دسترسی اعضا و اهمیت سازنده ها در سلسله مراتب ارثی را معرفی می کند. بعلاوه، این فصل در مورد غلبه بر روش، رابطه بین کلاس‌ها و نقش اساسی شی کلاس بحث می‌کند و در نهایت زمینه را برای درک چندشکلی در فصل بعدی فراهم می‌کند.",
            },
        },
        // 12
        {
            "ChapterName": "OOP: Polymorphism and Interfaces",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces polymorphism in object-oriented programming, emphasizing its role in creating extensible and maintainable systems by allowing objects of different derived classes to be treated as instances of a common base class. It explains the concept of abstract classes, which serve as incomplete base classes requiring derived classes to implement specific abstract methods, and discusses the use of interfaces to achieve polymorphic behavior among unrelated classes. The chapter highlights the importance of encapsulation, inheritance, and the ability to determine an object's type at runtime, ultimately providing a comprehensive understanding of essential object-oriented programming principles.",
                // German
                "Deutsch": "Dieses Kapitel führt in den Polymorphismus in der objektorientierten Programmierung ein und betont seine Rolle bei der Erstellung erweiterbarer und wartungsfreundlicher Systeme, indem Objekte verschiedener abgeleiteter Klassen als Instanzen einer gemeinsamen Basisklasse behandelt werden können. Es erklärt das Konzept abstrakter Klassen, die als unvollständige Basisklassen dienen, die abgeleitete Klassen zur Implementierung bestimmter abstrakter Methoden benötigen, und erörtert die Verwendung von Schnittstellen, um polymorphes Verhalten zwischen nicht verwandten Klassen zu erreichen. Das Kapitel betont die Bedeutung von Kapselung, Vererbung und der Möglichkeit, den Typ eines Objekts zur Laufzeit zu bestimmen, und vermittelt letztlich ein umfassendes Verständnis der wesentlichen Prinzipien der objektorientierten Programmierung.",
                // Chinese
                "中国人": "本章介绍了面向对象编程中的多态性，强调了多态性在创建可扩展和可维护系统中的作用，即允许将不同派生类的对象视为公共基类的实例。它解释了抽象类的概念，抽象类是一种不完整的基类，需要派生类实现特定的抽象方法，并讨论了使用接口在无关类之间实现多态行为。本章强调了封装、继承以及在运行时确定对象类型的能力的重要性，最终全面理解了面向对象编程的基本原则。",
                // Russian
                "Русский": "В этой главе представлен полиморфизм в объектно-ориентированном программировании, подчеркивающий его роль в создании расширяемых и поддерживаемых систем, позволяя рассматривать объекты различных производных классов как экземпляры общего базового класса. В ней объясняется концепция абстрактных классов, которые служат неполными базовыми классами, требующими от производных классов реализации определенных абстрактных методов, и обсуждается использование интерфейсов для достижения полиморфного поведения среди не связанных между собой классов. В главе подчеркивается важность инкапсуляции, наследования и возможности определения типа объекта во время выполнения, что в конечном итоге обеспечивает всестороннее понимание основных принципов объектно-ориентированного программирования.",
                // French
                "Français": "Ce chapitre présente le polymorphisme dans la programmation orientée objet, en insistant sur son rôle dans la création de systèmes extensibles et maintenables en permettant aux objets de différentes classes dérivées d'être traités comme des instances d'une classe de base commune. Il explique le concept de classes abstraites, qui servent de classes de base incomplètes nécessitant que les classes dérivées implémentent des méthodes abstraites spécifiques, et discute de l'utilisation d'interfaces pour obtenir un comportement polymorphe entre des classes non liées. Le chapitre souligne l'importance de l'encapsulation, de l'héritage et de la capacité à déterminer le type d'un objet au moment de l'exécution, offrant ainsi une compréhension complète des principes essentiels de la programmation orientée objet.",
                // Japanese
                "日本語": "この章では、オブジェクト指向プログラミングにおけるポリモーフィズムを紹介し、異なる派生クラスのオブジェクトを共通の基本クラスのインスタンスとして扱うことで、拡張可能で保守可能なシステムを作成する上でのポリモーフィズムの役割を強調します。また、派生クラスに特定の抽象メソッドを実装させる不完全な基本クラスとして機能する抽象クラスの概念を説明し、関連のないクラス間でポリモーフィックな動作を実現するためのインターフェイスの使用について説明します。この章では、カプセル化、継承、および実行時にオブジェクトのタイプを判別する機能の重要性を強調し、最終的にオブジェクト指向プログラミングの基本的な原則を包括的に理解できるようにします。",
                // Korean
                "한국인": "이 장에서는 객체 지향 프로그래밍의 다형성을 소개하고, 다양한 파생 클래스의 객체를 공통 기본 클래스의 인스턴스로 처리할 수 있도록 하여 확장 가능하고 유지 관리 가능한 시스템을 만드는 데 있어서 다형성이 하는 역할을 강조합니다. 파생 클래스가 특정 추상 메서드를 구현해야 하는 불완전한 기본 클래스 역할을 하는 추상 클래스의 개념을 설명하고, 관련 없는 클래스 간에 다형성 동작을 달성하기 위해 인터페이스를 사용하는 방법을 논의합니다. 이 장에서는 캡슐화, 상속 및 런타임에 객체의 유형을 결정하는 기능의 중요성을 강조하여 궁극적으로 필수적인 객체 지향 프로그래밍 원칙에 대한 포괄적인 이해를 제공합니다.",
                // Spanish
                "Español": "Este capítulo presenta el polimorfismo en la programación orientada a objetos, haciendo hincapié en su papel en la creación de sistemas extensibles y mantenibles al permitir que los objetos de diferentes clases derivadas se traten como instancias de una clase base común. Explica el concepto de clases abstractas, que sirven como clases base incompletas que requieren que las clases derivadas implementen métodos abstractos específicos, y analiza el uso de interfaces para lograr un comportamiento polimórfico entre clases no relacionadas. El capítulo destaca la importancia de la encapsulación, la herencia y la capacidad de determinar el tipo de un objeto en tiempo de ejecución, proporcionando en última instancia una comprensión integral de los principios esenciales de la programación orientada a objetos.",
                // Hindi
                "हिंदी": "यह अध्याय ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग में बहुरूपता का परिचय देता है, जो विभिन्न व्युत्पन्न वर्गों की वस्तुओं को एक सामान्य आधार वर्ग के उदाहरणों के रूप में मानने की अनुमति देकर विस्तारणीय और रखरखाव योग्य सिस्टम बनाने में इसकी भूमिका पर जोर देता है। यह अमूर्त वर्गों की अवधारणा को समझाता है, जो अपूर्ण आधार वर्गों के रूप में कार्य करते हैं, जिन्हें विशिष्ट अमूर्त विधियों को लागू करने के लिए व्युत्पन्न वर्गों की आवश्यकता होती है, और असंबंधित वर्गों के बीच बहुरूपी व्यवहार को प्राप्त करने के लिए इंटरफेस के उपयोग पर चर्चा करता है। अध्याय एनकैप्सुलेशन, इनहेरिटेंस और रनटाइम पर किसी ऑब्जेक्ट के प्रकार को निर्धारित करने की क्षमता के महत्व पर प्रकाश डालता है, जो अंततः आवश्यक ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग सिद्धांतों की व्यापक समझ प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo introduz o polimorfismo na programação orientada a objectos, enfatizando o seu papel na criação de sistemas extensíveis e de fácil manutenção, permitindo que objectos de diferentes classes derivadas sejam tratados como instâncias de uma classe base comum. Explica o conceito de classes abstratas, que servem como classes base incompletas, exigindo classes derivadas para implementar métodos abstratos específicos, e discute a utilização de interfaces para obter um comportamento polimórfico entre classes não relacionadas. O capítulo destaca a importância do encapsulamento, da herança e da capacidade de determinar o tipo de um objeto em tempo de execução, fornecendo, em última análise, uma compreensão abrangente dos princípios essenciais da programação orientada a objetos.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং-এ পলিমারফিজমের প্রবর্তন করে, বিভিন্ন প্রাপ্ত শ্রেণীর বস্তুকে একটি সাধারণ বেস ক্লাসের উদাহরণ হিসাবে বিবেচনা করার অনুমতি দিয়ে এক্সটেনসিবল এবং রক্ষণাবেক্ষণযোগ্য সিস্টেম তৈরিতে এর ভূমিকার উপর জোর দেয়। এটি বিমূর্ত ক্লাসের ধারণা ব্যাখ্যা করে, যা অসম্পূর্ণ বেস ক্লাস হিসেবে কাজ করে যার জন্য নির্দিষ্ট বিমূর্ত পদ্ধতি বাস্তবায়নের জন্য প্রাপ্ত ক্লাসের প্রয়োজন হয় এবং সম্পর্কহীন ক্লাসের মধ্যে বহুরূপী আচরণ অর্জনের জন্য ইন্টারফেসের ব্যবহার নিয়ে আলোচনা করে। অধ্যায়টি এনক্যাপসুলেশন, উত্তরাধিকার, এবং রানটাইমে একটি অবজেক্টের ধরন নির্ধারণ করার ক্ষমতার গুরুত্ব তুলে ধরে, শেষ পর্যন্ত অপরিহার্য অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং নীতিগুলির একটি বিস্তৃত বোঝা প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل تعريفًا لتعدد الأشكال في البرمجة الموجهة للكائنات، مع التركيز على دوره في إنشاء أنظمة قابلة للتوسع والصيانة من خلال السماح بمعاملة كائنات من فئات مشتقة مختلفة كحالات لفئة أساسية مشتركة. ويشرح مفهوم الفئات المجردة، التي تعمل كفئات أساسية غير مكتملة تتطلب فئات مشتقة لتنفيذ طرق مجردة محددة، ويناقش استخدام الواجهات لتحقيق سلوك متعدد الأشكال بين الفئات غير ذات الصلة. ويسلط الفصل الضوء على أهمية التغليف والوراثة والقدرة على تحديد نوع الكائن وقت التشغيل، مما يوفر في النهاية فهمًا شاملاً لمبادئ البرمجة الموجهة للكائنات الأساسية.",
                // Persian
                "فارسی": "این فصل چندشکلی را در برنامه‌نویسی شی گرا معرفی می‌کند و بر نقش آن در ایجاد سیستم‌های قابل توسعه و قابل نگهداری با اجازه دادن به اشیاء از کلاس‌های مشتق‌شده مختلف به عنوان نمونه‌هایی از یک کلاس پایه مشترک، تأکید می‌کند. مفهوم کلاس‌های انتزاعی را توضیح می‌دهد، که به عنوان کلاس‌های پایه ناقص عمل می‌کنند که به کلاس‌های مشتق شده برای پیاده‌سازی روش‌های انتزاعی خاص نیاز دارند، و استفاده از رابط‌ها برای دستیابی به رفتار چندشکلی در بین کلاس‌های غیرمرتبط را مورد بحث قرار می‌دهد. این فصل بر اهمیت کپسوله‌سازی، وراثت و توانایی تعیین نوع یک شی در زمان اجرا تاکید می‌کند و در نهایت درک جامعی از اصول برنامه‌نویسی شی گرا ارائه می‌کند.",
            },
        },
        // 13
        {
            "ChapterName": "Exception Handling: A Deeper Look",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on exception handling in C#, emphasizing its importance for creating robust and fault-tolerant applications. It covers the use of blocks to manage errors, demonstrating how to handle specific exceptions. The chapter also explores the .NET exception hierarchy, best practices for resource management, and the creation of user-defined exceptions, ultimately equipping developers with the tools to write clearer and more resilient code.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Ausnahmebehandlung in C# und betont deren Bedeutung für die Erstellung robuster und fehlertoleranter Anwendungen. Es behandelt die Verwendung von Blöcken zur Verwaltung von Fehlern und zeigt, wie bestimmte Ausnahmen behandelt werden. Das Kapitel untersucht auch die .NET-Ausnahmehierarchie, bewährte Methoden für die Ressourcenverwaltung und die Erstellung benutzerdefinierter Ausnahmen und gibt Entwicklern letztendlich die Tools an die Hand, mit denen sie klareren und widerstandsfähigeren Code schreiben können.",
                // Chinese
                "中国人": "本章重点介绍 C# 中的异常处理，强调其对于创建强大且容错的应用程序的重要性。它涵盖了如何使用块来管理错误，并演示了如何处理特定异常。本章还探讨了 .NET 异常层次结构、资源管理的最佳实践以及用户定义异常的创建，最终为开发人员提供编写更清晰、更具弹性的代码的工具。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется обработке исключений в C#, подчеркивая ее важность для создания надежных и отказоустойчивых приложений. В ней рассматривается использование блоков для управления ошибками, демонстрируется, как обрабатывать определенные исключения. В главе также рассматривается иерархия исключений .NET, лучшие практики управления ресурсами и создание определяемых пользователем исключений, в конечном итоге предоставляя разработчикам инструменты для написания более четкого и более отказоустойчивого кода.",
                // French
                "Français": "Ce chapitre se concentre sur la gestion des exceptions en C#, en soulignant son importance pour la création d'applications robustes et tolérantes aux pannes. Il couvre l'utilisation de blocs pour gérer les erreurs, en montrant comment gérer des exceptions spécifiques. Le chapitre explore également la hiérarchie des exceptions .NET, les meilleures pratiques pour la gestion des ressources et la création d'exceptions définies par l'utilisateur, fournissant ainsi aux développeurs les outils nécessaires pour écrire un code plus clair et plus résilient.",
                // Japanese
                "日本語": "この章では、C# での例外処理に焦点を当て、堅牢でフォールト トレラントなアプリケーションを作成する上での例外処理の重要性を強調します。ブロックを使用してエラーを管理する方法を説明し、特定の例外を処理する方法を示します。また、この章では、.NET 例外階層、リソース管理のベスト プラクティス、およびユーザー定義例外の作成についても説明し、開発者がより明確で回復力のあるコードを作成するためのツールを最終的に提供できるようにします。",
                // Korean
                "한국인": "이 장에서는 C#의 예외 처리에 초점을 맞추고, 견고하고 내결함성 있는 애플리케이션을 만드는 데 있어서의 중요성을 강조합니다. 블록을 사용하여 오류를 관리하는 방법을 다루고, 특정 예외를 처리하는 방법을 보여줍니다. 또한 .NET 예외 계층, 리소스 관리 모범 사례, 사용자 정의 예외 생성을 살펴보고, 궁극적으로 개발자에게 더 명확하고 복원력 있는 코드를 작성할 수 있는 도구를 제공합니다.",
                // Spanish
                "Español": "Este capítulo se centra en el manejo de excepciones en C#, haciendo hincapié en su importancia para crear aplicaciones robustas y tolerantes a errores. Abarca el uso de bloques para gestionar errores y demuestra cómo manejar excepciones específicas. El capítulo también explora la jerarquía de excepciones de .NET, las mejores prácticas para la gestión de recursos y la creación de excepciones definidas por el usuario, equipando en última instancia a los desarrolladores con las herramientas para escribir código más claro y resistente.",
                // Hindi
                "हिंदी": "यह अध्याय C# में अपवाद प्रबंधन पर केंद्रित है, जो मजबूत और दोष-सहिष्णु अनुप्रयोगों को बनाने के लिए इसके महत्व पर जोर देता है। यह त्रुटियों को प्रबंधित करने के लिए ब्लॉक के उपयोग को कवर करता है, यह दर्शाता है कि विशिष्ट अपवादों को कैसे संभालना है। अध्याय .NET अपवाद पदानुक्रम, संसाधन प्रबंधन के लिए सर्वोत्तम प्रथाओं और उपयोगकर्ता-परिभाषित अपवादों के निर्माण का भी पता लगाता है, अंततः डेवलपर्स को स्पष्ट और अधिक लचीला कोड लिखने के लिए उपकरणों से लैस करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se no tratamento de exceções em C#, enfatizando a sua importância para a criação de aplicações robustas e tolerantes a falhas. Aborda a utilização de blocos para gerir erros, demonstrando como lidar com exceções específicas. O capítulo explora também a hierarquia de exceções do . NET, as melhores práticas para a gestão de recursos e a criação de exceções definidas pelo utilizador, equipando os programadores com as ferramentas para escrever código mais claro e resiliente.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি C#-এ ব্যতিক্রম পরিচালনার উপর দৃষ্টি নিবদ্ধ করে, শক্তিশালী এবং দোষ-সহনশীল অ্যাপ্লিকেশন তৈরি করার জন্য এর গুরুত্বের উপর জোর দেয়। এটি ত্রুটিগুলি পরিচালনা করতে ব্লকের ব্যবহার কভার করে, নির্দিষ্ট ব্যতিক্রমগুলি কীভাবে পরিচালনা করতে হয় তা প্রদর্শন করে। অধ্যায়টি .NET ব্যতিক্রম শ্রেণিবিন্যাস, সম্পদ পরিচালনার জন্য সর্বোত্তম অনুশীলন, এবং ব্যবহারকারী-সংজ্ঞায়িত ব্যতিক্রমগুলি তৈরি করে, শেষ পর্যন্ত বিকাশকারীদেরকে আরও পরিষ্কার এবং আরও স্থিতিস্থাপক কোড লেখার সরঞ্জামগুলির সাথে সজ্জিত করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على معالجة الاستثناءات في لغة C#، مع التأكيد على أهميتها لإنشاء تطبيقات قوية ومتسامحة مع الأخطاء. ويغطي الفصل استخدام الكتل لإدارة الأخطاء، ويوضح كيفية التعامل مع استثناءات معينة. كما يستكشف الفصل أيضًا التسلسل الهرمي للاستثناءات في .NET، وأفضل الممارسات لإدارة الموارد، وإنشاء استثناءات محددة من قبل المستخدم، مما يزود المطورين في النهاية بالأدوات اللازمة لكتابة أكواد أكثر وضوحًا ومرونة.",
                // Persian
                "فارسی": "این فصل بر مدیریت استثنا در سی شارپ تمرکز دارد و بر اهمیت آن برای ایجاد برنامه‌های کاربردی مقاوم و مقاوم در برابر خطا تأکید می‌کند. استفاده از بلوک ها برای مدیریت خطاها را پوشش می دهد و نحوه رسیدگی به استثناهای خاص را نشان می دهد. این فصل همچنین به بررسی سلسله مراتب استثناهای دات نت، بهترین شیوه ها برای مدیریت منابع، و ایجاد استثناهای تعریف شده توسط کاربر می پردازد و در نهایت توسعه دهندگان را با ابزارهایی برای نوشتن کد واضح تر و انعطاف پذیرتر مجهز می کند.",
            },
        },
        // 14
        {
            "ChapterName": "Graphical User Interfaces with Windows Forms: Part 1",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter covers the fundamentals of creating graphical user interfaces (GUIs) using Windows Forms, focusing on common controls such as Labels, Buttons, TextBoxes, CheckBoxes, and RadioButtons. It emphasizes event handling, demonstrating how to create event handlers and utilize delegates to connect them to specific control events. Additionally, the chapter discusses the organization of controls using GroupBoxes and Panels, the use of ToolTips for helpful text, and the handling of mouse and keyboard events, setting the stage for more advanced GUI features in subsequent chapters.",
                // German
                "Deutsch": "In diesem Kapitel werden die Grundlagen der Erstellung grafischer Benutzeroberflächen (GUIs) mit Windows Forms behandelt, wobei der Schwerpunkt auf allgemeinen Steuerelementen wie Beschriftungen, Schaltflächen, Textfeldern, Kontrollkästchen und Optionsfeldern liegt. Der Schwerpunkt liegt auf der Ereignisbehandlung, und es wird gezeigt, wie Ereignishandler erstellt und Delegaten verwendet werden, um sie mit bestimmten Steuerelementereignissen zu verbinden. Darüber hinaus wird in diesem Kapitel die Organisation von Steuerelementen mithilfe von Gruppenfeldern und Bedienfeldern, die Verwendung von QuickInfos für hilfreichen Text und die Behandlung von Maus- und Tastaturereignissen erläutert. Dies bereitet die Grundlage für fortgeschrittenere GUI-Funktionen in den folgenden Kapiteln.",
                // Chinese
                "中国人": "本章介绍使用 Windows 窗体创建图形用户界面 (GUI) 的基础知识，重点介绍标签、按钮、文本框、复选框和单选按钮等常见控件。它强调事件处理，演示如何创建事件处理程序并利用委托将它们连接到特定的控件事件。此外，本章还讨论了使用组框和面板组织控件、使用工具提示显示有用文本以及处理鼠标和键盘事件，为后续章节中更高级的 GUI 功能奠定了基础。",
                // Russian
                "Русский": "В этой главе рассматриваются основы создания графических пользовательских интерфейсов (GUI) с использованием Windows Forms, с упором на общие элементы управления, такие как Labels, Buttons, TextBoxes, CheckBoxes и RadioButtons. В ней особое внимание уделяется обработке событий, демонстрируется, как создавать обработчики событий и использовать делегаты для их подключения к определенным событиям управления. Кроме того, в главе обсуждается организация элементов управления с использованием GroupBoxes и Panels, использование ToolTips для полезного текста и обработка событий мыши и клавиатуры, что подготавливает почву для более продвинутых функций GUI в последующих главах.",
                // French
                "Français": "Ce chapitre couvre les principes fondamentaux de la création d'interfaces utilisateur graphiques (GUI) à l'aide de Windows Forms, en se concentrant sur les contrôles courants tels que les étiquettes, les boutons, les zones de texte, les cases à cocher et les boutons radio. Il met l'accent sur la gestion des événements, en montrant comment créer des gestionnaires d'événements et utiliser des délégués pour les connecter à des événements de contrôle spécifiques. En outre, le chapitre aborde l'organisation des contrôles à l'aide de zones de groupe et de panneaux, l'utilisation d'info-bulles pour un texte utile et la gestion des événements de souris et de clavier, ouvrant la voie à des fonctionnalités d'interface utilisateur plus avancées dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、Windows フォームを使用してグラフィカル ユーザー インターフェイス (GUI) を作成するための基礎について、ラベル、ボタン、テキスト ボックス、チェック ボックス、ラジオ ボタンなどの一般的なコントロールに焦点を当てて説明します。イベント処理に重点を置き、イベント ハンドラーを作成し、デリゲートを使用して特定のコントロール イベントに接続する方法を示します。さらに、この章では、グループ ボックスとパネルを使用したコントロールの構成、役立つテキストのためのツールヒントの使用、マウス イベントとキーボード イベントの処理について説明し、以降の章で説明するより高度な GUI 機能の基礎を固めます。",
                // Korean
                "한국인": "이 장에서는 Windows Forms를 사용하여 그래픽 사용자 인터페이스(GUI)를 만드는 기본 사항을 다루며, 레이블, 단추, 텍스트 상자, 체크 상자, 라디오 단추와 같은 일반적인 컨트롤에 초점을 맞춥니다. 이벤트 처리를 강조하여 이벤트 핸들러를 만들고 대리자를 사용하여 특정 컨트롤 이벤트에 연결하는 방법을 보여줍니다. 또한 이 장에서는 그룹 상자와 패널을 사용하여 컨트롤을 구성하는 방법, 유용한 텍스트를 위한 도구 설명 사용, 마우스 및 키보드 이벤트 처리에 대해 논의하며, 후속 장에서 보다 고급 GUI 기능을 위한 토대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo cubre los aspectos básicos de la creación de interfaces gráficas de usuario (GUI) mediante formularios Windows Forms, centrándose en controles comunes como etiquetas, botones, cuadros de texto, casillas de verificación y botones de opción. Hace hincapié en el manejo de eventos, demostrando cómo crear controladores de eventos y utilizar delegados para conectarlos a eventos de control específicos. Además, el capítulo analiza la organización de controles mediante cuadros de grupo y paneles, el uso de información sobre herramientas para texto útil y el manejo de eventos de mouse y teclado, preparando el terreno para funciones de GUI más avanzadas en capítulos posteriores.",
                // Hindi
                "हिंदी": "यह अध्याय विंडोज़ फॉर्म का उपयोग करके ग्राफिकल यूजर इंटरफेस (GUI) बनाने के मूल सिद्धांतों को कवर करता है, जिसमें लेबल, बटन, टेक्स्टबॉक्स, चेकबॉक्स और रेडियोबटन जैसे सामान्य नियंत्रणों पर ध्यान केंद्रित किया गया है। यह इवेंट हैंडलिंग पर जोर देता है, यह दर्शाता है कि इवेंट हैंडलर कैसे बनाएं और उन्हें विशिष्ट नियंत्रण ईवेंट से कनेक्ट करने के लिए प्रतिनिधियों का उपयोग कैसे करें। इसके अतिरिक्त, अध्याय ग्रुपबॉक्स और पैनल का उपयोग करके नियंत्रणों के संगठन, सहायक पाठ के लिए टूलटिप्स के उपयोग और माउस और कीबोर्ड ईवेंट के संचालन पर चर्चा करता है, जो बाद के अध्यायों में अधिक उन्नत GUI सुविधाओं के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo aborda os conceitos básicos da criação de interfaces gráficas de utilizador (GUIs) utilizando Windows Forms, com foco em controlos comuns, como etiquetas, botões, caixas de texto, caixas de seleção e botões de opção. Enfatiza a manipulação de eventos, demonstrando como criar manipuladores de eventos e utilizar delegados para os ligar a eventos de controlo específicos. Além disso, o capítulo discute a organização de controlos utilizando GroupBoxes e Painéis, a utilização de dicas de ferramentas para textos úteis e o tratamento de eventos de rato e teclado, preparando o terreno para características de GUI mais avançadas nos capítulos subsequentes.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে লেবেল, বোতাম, টেক্সটবক্স, চেকবক্স এবং রেডিও বাটনের মতো সাধারণ নিয়ন্ত্রণগুলিতে ফোকাস করে, উইন্ডোজ ফর্মগুলি ব্যবহার করে গ্রাফিকাল ইউজার ইন্টারফেস (GUI) তৈরির মৌলিক বিষয়গুলি কভার করে৷ এটি ইভেন্ট পরিচালনার উপর জোর দেয়, প্রদর্শন করে কিভাবে ইভেন্ট হ্যান্ডলার তৈরি করা যায় এবং তাদের নির্দিষ্ট নিয়ন্ত্রণ ইভেন্টের সাথে সংযুক্ত করতে প্রতিনিধিদের ব্যবহার করে। অতিরিক্তভাবে, অধ্যায়টি গ্রুপবক্স এবং প্যানেল ব্যবহার করে নিয়ন্ত্রণের সংগঠন, সহায়ক পাঠ্যের জন্য টুলটিপস ব্যবহার এবং মাউস এবং কীবোর্ড ইভেন্টগুলি পরিচালনার বিষয়ে আলোচনা করে, পরবর্তী অধ্যায়ে আরও উন্নত GUI বৈশিষ্ট্যগুলির জন্য পর্যায় নির্ধারণ করে।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل أساسيات إنشاء واجهات المستخدم الرسومية (GUIs) باستخدام نماذج Windows، مع التركيز على عناصر التحكم الشائعة مثل العلامات والأزرار ومربعات النص ومربعات الاختيار وأزرار الراديو. ويركز على معالجة الأحداث، ويوضح كيفية إنشاء معالجات الأحداث واستخدام المندوبين لتوصيلهم بأحداث تحكم معينة. بالإضافة إلى ذلك، يناقش الفصل تنظيم عناصر التحكم باستخدام مربعات المجموعات والألواح، واستخدام تلميحات الأدوات للنص المفيد، ومعالجة أحداث الماوس ولوحة المفاتيح، مما يمهد الطريق لمزيد من ميزات واجهة المستخدم الرسومية المتقدمة في الفصول اللاحقة.",
                // Persian
                "فارسی": "این فصل اصول ایجاد رابط‌های کاربری گرافیکی (GUI) با استفاده از فرم‌های ویندوز را پوشش می‌دهد، با تمرکز بر کنترل‌های رایج مانند برچسب‌ها، دکمه‌ها، جعبه‌های نوشتاری، چک‌باکس‌ها و RadioButtons. این بر مدیریت رویداد تأکید می کند، نشان می دهد که چگونه می توان کنترل کننده رویداد ایجاد کرد و از نمایندگان برای اتصال آنها به رویدادهای کنترلی خاص استفاده کرد. علاوه بر این، این فصل درباره سازماندهی کنترل‌ها با استفاده از جعبه‌های گروه و پانل‌ها، استفاده از ToolTips برای متن مفید، و مدیریت رویدادهای ماوس و صفحه‌کلید بحث می‌کند و زمینه را برای ویژگی‌های پیشرفته‌تر رابط کاربری گرافیکی در فصل‌های بعدی فراهم می‌کند.",
            },
        },
        // 15
        {
            "ChapterName": "Graphical User Interfaces with Windows Forms: Part 2",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on advanced Windows Forms GUI development, covering the creation of user-friendly interfaces through menus, tabbed windows, and multiple document interfaces (MDI). It introduces various controls such as ListBox, CheckedListBox, ComboBox, TreeView, MonthCalendar, and DateTimePicker for effective data input and display. Additionally, the chapter emphasizes visual inheritance for maintaining consistency across forms and the ability to create custom controls, enhancing the overall sophistication of applications developed using Visual Studio's IDE.",
                // German
                "Deutsch": "Dieses Kapitel konzentriert sich auf die fortgeschrittene GUI-Entwicklung mit Windows Forms und behandelt die Erstellung benutzerfreundlicher Schnittstellen über Menüs, Fenster mit Registerkarten und Multiple Document Interfaces (MDI). Es stellt verschiedene Steuerelemente wie ListBox, CheckedListBox, ComboBox, TreeView, MonthCalendar und DateTimePicker für eine effektive Dateneingabe und -anzeige vor. Darüber hinaus betont das Kapitel die visuelle Vererbung zur Wahrung der Konsistenz zwischen Formularen und die Möglichkeit, benutzerdefinierte Steuerelemente zu erstellen, wodurch die allgemeine Komplexität von Anwendungen, die mit der IDE von Visual Studio entwickelt wurden, verbessert wird.",
                // Chinese
                "中国人": "本章重点介绍高级 Windows 窗体 GUI 开发，涵盖通过菜单、选项卡式窗口和多文档界面 (MDI) 创建用户友好界面。它介绍了各种控件，例如 ListBox、CheckedListBox、ComboBox、TreeView、MonthCalendar 和 DateTimePicker，用于有效输入和显示数据。此外，本章还强调了可视化继承以保持窗体之间的一致性以及创建自定义控件的能力，从而提高了使用 Visual Studio IDE 开发的应用程序的整体复杂性。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется расширенной разработке графического интерфейса Windows Forms, охватывающей создание удобных для пользователя интерфейсов с помощью меню, вкладок и многодокументных интерфейсов (MDI). В ней представлены различные элементы управления, такие как ListBox, CheckedListBox, ComboBox, TreeView, MonthCalendar и DateTimePicker для эффективного ввода и отображения данных. Кроме того, в главе подчеркивается визуальное наследование для поддержания согласованности между формами и возможность создания пользовательских элементов управления, что повышает общую сложность приложений, разработанных с использованием IDE Visual Studio.",
                // French
                "Français": "Ce chapitre se concentre sur le développement avancé d'interfaces graphiques Windows Forms, couvrant la création d'interfaces conviviales via des menus, des fenêtres à onglets et des interfaces multidocuments (MDI). Il présente divers contrôles tels que ListBox, CheckedListBox, ComboBox, TreeView, MonthCalendar et DateTimePicker pour une saisie et un affichage efficaces des données. En outre, le chapitre met l'accent sur l'héritage visuel pour maintenir la cohérence entre les formulaires et la possibilité de créer des contrôles personnalisés, améliorant ainsi la sophistication globale des applications développées à l'aide de l'IDE de Visual Studio.",
                // Japanese
                "日本語": "この章では、高度な Windows フォーム GUI 開発に焦点を当て、メニュー、タブ付きウィンドウ、およびマルチ ドキュメント インターフェイス (MDI) を使用したユーザー フレンドリなインターフェイスの作成について説明します。また、効果的なデータ入力と表示のために、ListBox、CheckedListBox、ComboBox、TreeView、MonthCalendar、DateTimePicker などのさまざまなコントロールを紹介します。さらに、この章では、フォーム間の一貫性を維持するためのビジュアル継承と、Visual Studio の IDE を使用して開発されたアプリケーションの全体的な洗練度を高めるカスタム コントロールの作成機能についても重点的に説明します。",
                // Korean
                "한국인": "이 장에서는 고급 Windows Forms GUI 개발에 초점을 맞추고 메뉴, 탭 창 및 다중 문서 인터페이스(MDI)를 통한 사용자 친화적인 인터페이스 생성을 다룹니다. ListBox, CheckedListBox, ComboBox, TreeView, MonthCalendar 및 DateTimePicker와 같은 다양한 컨트롤을 소개하여 효과적인 데이터 입력 및 표시를 제공합니다. 또한 이 장에서는 폼에서 일관성을 유지하기 위한 시각적 상속과 사용자 지정 컨트롤을 만드는 기능을 강조하여 Visual Studio의 IDE를 사용하여 개발된 애플리케이션의 전반적인 정교함을 향상시킵니다.",
                // Spanish
                "Español": "Este capítulo se centra en el desarrollo avanzado de GUI de Windows Forms y cubre la creación de interfaces fáciles de usar mediante menús, ventanas con pestañas e interfaces de múltiples documentos (MDI). Presenta varios controles como ListBox, CheckedListBox, ComboBox, TreeView, MonthCalendar y DateTimePicker para una entrada y visualización de datos efectiva. Además, el capítulo enfatiza la herencia visual para mantener la coherencia entre los formularios y la capacidad de crear controles personalizados, mejorando la sofisticación general de las aplicaciones desarrolladas con el IDE de Visual Studio.",
                // Hindi
                "हिंदी": "यह अध्याय उन्नत विंडोज फॉर्म्स GUI विकास पर केंद्रित है, जिसमें मेनू, टैब्ड विंडो और मल्टीपल डॉक्यूमेंट इंटरफेस (MDI) के माध्यम से उपयोगकर्ता-अनुकूल इंटरफेस के निर्माण को शामिल किया गया है। यह प्रभावी डेटा इनपुट और डिस्प्ले के लिए ListBox, CheckedListBox, ComboBox, TreeView, MonthlyCalendar और DateTimePicker जैसे विभिन्न नियंत्रणों का परिचय देता है। इसके अतिरिक्त, अध्याय फॉर्म में एकरूपता बनाए रखने और कस्टम नियंत्रण बनाने की क्षमता के लिए विज़ुअल इनहेरिटेंस पर जोर देता है, जिससे Visual Studio के IDE का उपयोग करके विकसित किए गए अनुप्रयोगों की समग्र परिष्कार में वृद्धि होती है।",
                // Portuguese
                "Português": "Este capítulo centra-se no desenvolvimento avançado de GUI do Windows Forms, abrangendo a criação de interfaces fáceis de utilizar através de menus, janelas com separadores e múltiplas interfaces de documentos (MDI). Apresenta vários controlos, como ListBox, CheckedListBox, ComboBox, TreeView, MonthCalendar e DateTimePicker para uma introdução e exibição de dados eficazes. Além disso, o capítulo enfatiza a herança visual para manter a consistência entre formulários e a capacidade de criar controlos personalizados, melhorando a sofisticação geral das aplicações desenvolvidas utilizando o IDE do Visual Studio.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি মেনু, ট্যাবড উইন্ডোজ এবং একাধিক ডকুমেন্ট ইন্টারফেস (MDI) এর মাধ্যমে ব্যবহারকারী-বান্ধব ইন্টারফেস তৈরিকে কভার করে, উন্নত Windows Forms GUI বিকাশের উপর আলোকপাত করে। এটি কার্যকর ডেটা ইনপুট এবং প্রদর্শনের জন্য ListBox, CheckedListBox, ComboBox, TreeView, MonthCalendar, এবং DateTimePicker এর মতো বিভিন্ন নিয়ন্ত্রণ প্রবর্তন করে। অতিরিক্তভাবে, অধ্যায়টি ফর্ম জুড়ে সামঞ্জস্য বজায় রাখার জন্য এবং কাস্টম নিয়ন্ত্রণ তৈরি করার ক্ষমতা, ভিজ্যুয়াল স্টুডিওর IDE ব্যবহার করে বিকশিত অ্যাপ্লিকেশনগুলির সামগ্রিক পরিশীলিততা বাড়ানোর জন্য চাক্ষুষ উত্তরাধিকারের উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تطوير واجهة المستخدم الرسومية المتقدمة لـ Windows Forms، ويغطي إنشاء واجهات سهلة الاستخدام من خلال القوائم والنوافذ ذات علامات التبويب وواجهات المستندات المتعددة (MDI). ويقدم عناصر تحكم مختلفة مثل ListBox وCheckedListBox وComboBox وTreeView وMonthCalendar وDateTimePicker لإدخال البيانات وعرضها بشكل فعال. بالإضافة إلى ذلك، يؤكد الفصل على الميراث البصري للحفاظ على الاتساق عبر النماذج والقدرة على إنشاء عناصر تحكم مخصصة، مما يعزز التطور العام للتطبيقات التي تم تطويرها باستخدام بيئة التطوير المتكاملة الخاصة بـ Visual Studio.",
                // Persian
                "فارسی": "این فصل بر توسعه پیشرفته رابط کاربری گرافیکی Windows Forms تمرکز دارد که ایجاد رابط‌های کاربرپسند از طریق منوها، پنجره‌های زبانه‌دار و چندین رابط سند (MDI) را پوشش می‌دهد. کنترل‌های مختلفی مانند ListBox، CheckedListBox، ComboBox، TreeView، MonthCalendar و DateTimePicker را برای ورودی و نمایش موثر داده‌ها معرفی می‌کند. علاوه بر این، این فصل بر وراثت بصری برای حفظ سازگاری بین فرم‌ها و توانایی ایجاد کنترل‌های سفارشی تأکید می‌کند و پیچیدگی کلی برنامه‌های توسعه‌یافته با استفاده از IDE ویژوال استودیو را افزایش می‌دهد.",
            },
        },
        // 16
        {
            "ChapterName": "Strings and Characters: A Deeper Look",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This Chapter focuses on the string- and character-processing capabilities of the .NET Framework Class Library, detailing how to create and manipulate both immutable objects and mutable objects. It covers fundamental operations such as determining string length, copying, searching, comparing, concatenating, and replacing characters, as well as character testing methods in . Additionally, the chapter introduces regular expressions for pattern matching in text, demonstrating their application in validating data formats and manipulating strings based on specified patterns.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Funktionen der .NET Framework-Klassenbibliothek zur Verarbeitung von Zeichenfolgen und Zeichen. Es wird detailliert beschrieben, wie sowohl unveränderliche als auch veränderliche Objekte erstellt und bearbeitet werden. Es behandelt grundlegende Vorgänge wie das Bestimmen der Zeichenfolgenlänge, das Kopieren, Suchen, Vergleichen, Verketten und Ersetzen von Zeichen sowie Zeichentestmethoden in . Darüber hinaus werden in diesem Kapitel reguläre Ausdrücke für die Musterübereinstimmung in Texten vorgestellt und ihre Anwendung bei der Validierung von Datenformaten und der Bearbeitung von Zeichenfolgen anhand bestimmter Muster demonstriert.",
                // Chinese
                "中国人": "本章重点介绍 .NET Framework 类库的字符串和字符处理功能，详细介绍如何创建和操作不可变对象和可变对象。它涵盖了基本操作，例如确定字符串长度、复制、搜索、比较、连接和替换字符，以及 中的字符测试方法。此外，本章还介绍了用于文本模式匹配的正则表达式，展示了它们在验证数据格式和根据指定模式操作字符串中的应用。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется возможностям обработки строк и символов библиотеки классов .NET Framework, подробно описывая, как создавать и управлять как неизменяемыми, так и изменяемыми объектами. Она охватывает такие фундаментальные операции, как определение длины строки, копирование, поиск, сравнение, конкатенация и замена символов, а также методы проверки символов в . Кроме того, в главе представлены регулярные выражения для сопоставления с шаблонами в тексте, демонстрирующие их применение при проверке форматов данных и управлении строками на основе указанных шаблонов.",
                // French
                "Français": "Ce chapitre se concentre sur les fonctionnalités de traitement de chaînes et de caractères de la bibliothèque de classes .NET Framework, en détaillant comment créer et manipuler des objets immuables et des objets mutables. Il couvre les opérations fondamentales telles que la détermination de la longueur de chaîne, la copie, la recherche, la comparaison, la concaténation et le remplacement de caractères, ainsi que les méthodes de test de caractères dans . En outre, le chapitre présente les expressions régulières pour la recherche de motifs dans le texte, en démontrant leur application à la validation des formats de données et à la manipulation de chaînes en fonction de motifs spécifiés.",
                // Japanese
                "日本語": "この章では、.NET Framework クラス ライブラリの文字列および文字処理機能に焦点を当て、不変オブジェクトと可変オブジェクトの両方の作成および操作方法について詳しく説明します。文字列の長さの決定、文字のコピー、検索、比較、連結、置換などの基本的な操作と、 での文字テスト メソッドについて説明します。さらに、この章では、テキストのパターン マッチング用の正規表現を紹介し、データ形式の検証や、指定されたパターンに基づく文字列の操作におけるその応用例を示します。",
                // Korean
                "한국인": "이 장에서는 .NET Framework 클래스 라이브러리의 문자열 및 문자 처리 기능에 초점을 맞추고, 불변 객체와 가변 객체를 만들고 조작하는 방법을 자세히 설명합니다. 문자열 길이 결정, 문자 복사, 검색, 비교, 연결 및 바꾸기와 같은 기본 작업과 .NET Framework의 문자 테스트 방법을 다룹니다. 또한 이 장에서는 텍스트의 패턴 매칭을 위한 정규 표현식을 소개하고, 데이터 형식의 유효성 검사 및 지정된 패턴에 따라 문자열을 조작하는 데 사용하는 방법을 보여줍니다.",
                // Spanish
                "Español": "Este capítulo se centra en las capacidades de procesamiento de cadenas y caracteres de la biblioteca de clases de .NET Framework, y detalla cómo crear y manipular objetos tanto inmutables como mutables. Abarca operaciones fundamentales como la determinación de la longitud de cadenas, la copia, la búsqueda, la comparación, la concatenación y la sustitución de caracteres, así como métodos de prueba de caracteres en . Además, el capítulo presenta expresiones regulares para la coincidencia de patrones en texto, demostrando su aplicación en la validación de formatos de datos y la manipulación de cadenas en función de patrones específicos.",
                // Hindi
                "हिंदी": "यह अध्याय .NET फ्रेमवर्क क्लास लाइब्रेरी की स्ट्रिंग और कैरेक्टर प्रोसेसिंग क्षमताओं पर केंद्रित है, जिसमें अपरिवर्तनीय ऑब्जेक्ट और परिवर्तनीय ऑब्जेक्ट दोनों को बनाने और उनमें हेरफेर करने का विवरण दिया गया है। इसमें स्ट्रिंग की लंबाई निर्धारित करने, कॉपी करने, खोजने, तुलना करने, संयोजित करने और कैरेक्टर बदलने जैसे बुनियादी ऑपरेशन शामिल हैं, साथ ही कैरेक्टर परीक्षण के तरीके भी शामिल हैं। इसके अतिरिक्त, अध्याय टेक्स्ट में पैटर्न मिलान के लिए नियमित अभिव्यक्तियों का परिचय देता है, डेटा प्रारूपों को मान्य करने और निर्दिष्ट पैटर्न के आधार पर स्ट्रिंग में हेरफेर करने में उनके अनुप्रयोग को प्रदर्शित करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se nas capacidades de processamento de cadeias e caracteres da Biblioteca de Classes do .NET Framework, detalhando como criar e manipular objetos imutáveis ​​e objetos mutáveis. Abrange operações fundamentais, como a determinação do comprimento da string, copiar, pesquisar, comparar, concatenar e substituir caracteres, bem como métodos de teste de caracteres em . Além disso, o capítulo apresenta expressões regulares para a correspondência de padrões em texto, demonstrando a sua aplicação na validação de formatos de dados e na manipulação de strings com base em padrões especificados.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি .NET ফ্রেমওয়ার্ক ক্লাস লাইব্রেরির স্ট্রিং- এবং ক্যারেক্টার-প্রসেসিং ক্ষমতার উপর ফোকাস করে, কিভাবে অপরিবর্তনীয় বস্তু এবং পরিবর্তনযোগ্য বস্তু উভয়ই তৈরি এবং পরিচালনা করতে হয়। এটি মৌলিক ক্রিয়াকলাপগুলিকে কভার করে যেমন স্ট্রিং দৈর্ঘ্য নির্ধারণ, অনুলিপি করা, অনুসন্ধান করা, তুলনা করা, সংযুক্ত করা এবং অক্ষর প্রতিস্থাপন করা, সেইসাথে অক্ষর পরীক্ষার পদ্ধতিগুলি। অতিরিক্তভাবে, অধ্যায়টি পাঠ্যে প্যাটার্ন ম্যাচিংয়ের জন্য নিয়মিত অভিব্যক্তির প্রবর্তন করে, ডেটা বিন্যাস যাচাইকরণে এবং নির্দিষ্ট প্যাটার্নের উপর ভিত্তি করে স্ট্রিংগুলিকে ম্যানিপুলেট করার ক্ষেত্রে তাদের প্রয়োগ প্রদর্শন করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على إمكانيات معالجة السلاسل والأحرف في مكتبة فئة .NET Framework، مع توضيح كيفية إنشاء ومعالجة كل من الكائنات الثابتة والقابلة للتغيير. ويغطي العمليات الأساسية مثل تحديد طول السلسلة، والنسخ، والبحث، والمقارنة، والربط، واستبدال الأحرف، بالإضافة إلى طرق اختبار الأحرف في . بالإضافة إلى ذلك، يقدم الفصل التعبيرات العادية لمطابقة الأنماط في النص، مع توضيح تطبيقها في التحقق من صحة تنسيقات البيانات ومعالجة السلاسل بناءً على أنماط محددة.",
                // Persian
                "فارسی": "این فصل بر قابلیت‌های پردازش رشته و کاراکتر کتابخانه کلاس فریم‌ورک دات‌نت تمرکز می‌کند و نحوه ایجاد و دستکاری اشیاء تغییرناپذیر و اشیاء قابل تغییر را شرح می‌دهد. این عملیات اساسی مانند تعیین طول رشته، کپی، جستجو، مقایسه، الحاق و جایگزینی کاراکترها و همچنین روش‌های تست کاراکتر در . علاوه بر این، این فصل عبارات منظم را برای تطبیق الگو در متن معرفی می‌کند، کاربرد آنها را در اعتبارسنجی قالب‌های داده و دستکاری رشته‌ها بر اساس الگوهای مشخص شده نشان می‌دهد.",
            },
        },
        // 17
        {
            "ChapterName": "Files and Streams",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This Chapter focuses on file processing in C#, emphasizing the creation, reading, writing, and updating of files to manage persistent data. It introduces various classes from the System.IO namespace, such as File, Directory, StreamReader, and StreamWriter, to manipulate files and directories, and discusses the importance of serialization for storing and retrieving entire objects. The chapter also highlights the use of LINQ for searching directories and sets the stage for upcoming discussions on algorithms and data structures in subsequent chapters.",
                // German
                "Deutsch": "Dieses Kapitel konzentriert sich auf die Dateiverarbeitung in C# und betont das Erstellen, Lesen, Schreiben und Aktualisieren von Dateien zur Verwaltung persistenter Daten. Es stellt verschiedene Klassen aus dem System.IO-Namespace vor, wie File, Directory, StreamReader und StreamWriter, um Dateien und Verzeichnisse zu bearbeiten, und erörtert die Bedeutung der Serialisierung zum Speichern und Abrufen ganzer Objekte. Das Kapitel beleuchtet auch die Verwendung von LINQ zum Durchsuchen von Verzeichnissen und bereitet den Boden für kommende Diskussionen über Algorithmen und Datenstrukturen in den folgenden Kapiteln.",
                // Chinese
                "中国人": "本章重点介绍 C# 中的文件处理，强调创建、读取、写入和更新文件以管理持久数据。它介绍了 System.IO 命名空间中的各种类，例如 File、Directory、StreamReader 和 StreamWriter，用于操作文件和目录，并讨论了序列化对于存储和检索整个对象的重要性。本章还重点介绍了使用 LINQ 搜索目录，并为后续章节中即将讨论的算法和数据结构奠定了基础。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется обработке файлов в C#, подчеркивая создание, чтение, запись и обновление файлов для управления постоянными данными. В ней представлены различные классы из пространства имен System.IO, такие как File, Directory, StreamReader и StreamWriter, для управления файлами и каталогами, а также обсуждается важность сериализации для хранения и извлечения целых объектов. В главе также освещается использование LINQ для поиска каталогов и закладывается основа для предстоящих обсуждений алгоритмов и структур данных в последующих главах.",
                // French
                "Français": "Ce chapitre se concentre sur le traitement de fichiers en C#, en mettant l'accent sur la création, la lecture, l'écriture et la mise à jour de fichiers pour gérer les données persistantes. Il présente diverses classes de l'espace de noms System.IO, telles que File, Directory, StreamReader et StreamWriter, pour manipuler des fichiers et des répertoires, et discute de l'importance de la sérialisation pour le stockage et la récupération d'objets entiers. Le chapitre met également en évidence l'utilisation de LINQ pour la recherche dans les répertoires et ouvre la voie aux discussions à venir sur les algorithmes et les structures de données dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、C# でのファイル処理に焦点を当て、永続的なデータを管理するためのファイルの作成、読み取り、書き込み、更新に重点を置いています。また、ファイルやディレクトリを操作するための、File、Directory、StreamReader、StreamWriter などの System.IO 名前空間のさまざまなクラスを紹介し、オブジェクト全体を保存および取得するためのシリアル化の重要性について説明します。また、この章では、ディレクトリの検索に LINQ を使用する方法も取り上げ、後続の章でアルゴリズムとデータ構造について説明するための土台を整えます。",
                // Korean
                "한국인": "이 장에서는 C#에서 파일 처리에 초점을 맞추고, 영구 데이터를 관리하기 위한 파일 생성, 읽기, 쓰기 및 업데이트를 강조합니다. File, Directory, StreamReader 및 StreamWriter와 같은 System.IO 네임스페이스의 다양한 클래스를 소개하여 파일과 디렉터리를 조작하고 전체 객체를 저장하고 검색하기 위한 직렬화의 중요성에 대해 설명합니다. 또한 이 장에서는 디렉터리 검색을 위한 LINQ 사용을 강조하고 후속 장에서 알고리즘 및 데이터 구조에 대한 논의를 위한 토대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo se centra en el procesamiento de archivos en C#, haciendo hincapié en la creación, lectura, escritura y actualización de archivos para gestionar datos persistentes. Presenta varias clases del espacio de nombres System.IO, como File, Directory, StreamReader y StreamWriter, para manipular archivos y directorios, y analiza la importancia de la serialización para almacenar y recuperar objetos completos. El capítulo también destaca el uso de LINQ para buscar directorios y prepara el terreno para futuras discusiones sobre algoritmos y estructuras de datos en capítulos posteriores.",
                // Hindi
                "हिंदी": "यह अध्याय C# में फ़ाइल प्रोसेसिंग पर केंद्रित है, जो स्थायी डेटा को प्रबंधित करने के लिए फ़ाइलों के निर्माण, पढ़ने, लिखने और अपडेट करने पर जोर देता है। यह फ़ाइलों और निर्देशिकाओं में हेरफेर करने के लिए System.IO नामस्थान से विभिन्न वर्गों, जैसे फ़ाइल, निर्देशिका, स्ट्रीम रीडर और स्ट्रीम राइटर का परिचय देता है, और संपूर्ण ऑब्जेक्ट को संग्रहीत करने और पुनर्प्राप्त करने के लिए क्रमांकन के महत्व पर चर्चा करता है। अध्याय निर्देशिकाओं की खोज के लिए LINQ के उपयोग पर भी प्रकाश डालता है और बाद के अध्यायों में एल्गोरिदम और डेटा संरचनाओं पर आगामी चर्चाओं के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se no processamento de ficheiros em C#, enfatizando a criação, leitura, escrita e atualização de ficheiros para gerir dados persistentes. Apresenta várias classes do namespace System.IO, como File, Directory, StreamReader e StreamWriter, para manipular ficheiros e diretórios, e discute a importância da serialização para armazenar e recuperar objetos inteiros. O capítulo também destaca a utilização do LINQ para pesquisar diretórios e prepara o terreno para futuras discussões sobre algoritmos e estruturas de dados nos capítulos subsequentes.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি C# এ ফাইল প্রসেসিং এর উপর ফোকাস করে, ক্রমাগত ডেটা পরিচালনা করার জন্য ফাইল তৈরি, পড়া, লেখা এবং আপডেট করার উপর জোর দেয়। এটি ফাইল এবং ডিরেক্টরিগুলিকে ম্যানিপুলেট করার জন্য System.IO নেমস্পেস থেকে বিভিন্ন ক্লাস প্রবর্তন করে, যেমন ফাইল, ডিরেক্টরি, স্ট্রিমরিডার এবং স্ট্রিম রাইটার, এবং সমগ্র বস্তুগুলি সংরক্ষণ এবং পুনরুদ্ধারের জন্য সিরিয়ালাইজেশনের গুরুত্ব নিয়ে আলোচনা করে। অধ্যায়টি ডিরেক্টরি অনুসন্ধানের জন্য LINQ-এর ব্যবহার হাইলাইট করে এবং পরবর্তী অধ্যায়ে অ্যালগরিদম এবং ডেটা স্ট্রাকচারের উপর আসন্ন আলোচনার জন্য মঞ্চ তৈরি করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على معالجة الملفات بلغة C#، مع التركيز على إنشاء الملفات وقراءتها وكتابتها وتحديثها لإدارة البيانات الدائمة. ويقدم فئات مختلفة من مساحة اسم System.IO، مثل File وDirectory وStreamReader وStreamWriter، للتعامل مع الملفات والدلائل، ويناقش أهمية التسلسل لتخزين واسترجاع الكائنات بالكامل. ويسلط الفصل الضوء أيضًا على استخدام LINQ للبحث في الدلائل ويهيئ المسرح للمناقشات القادمة حول الخوارزميات وهياكل البيانات في الفصول اللاحقة.",
                // Persian
                "فارسی": "این فصل بر پردازش فایل در سی شارپ تمرکز دارد و بر ایجاد، خواندن، نوشتن و به‌روزرسانی فایل‌ها برای مدیریت داده‌های پایدار تأکید دارد. کلاس های مختلفی از فضای نام System.IO مانند File، Directory، StreamReader و StreamWriter را برای دستکاری فایل ها و دایرکتوری ها معرفی می کند و اهمیت سریال سازی برای ذخیره و بازیابی کل اشیاء را مورد بحث قرار می دهد. این فصل همچنین استفاده از LINQ را برای جستجوی دایرکتوری ها برجسته می کند و زمینه را برای بحث های آینده در مورد الگوریتم ها و ساختارهای داده در فصل های بعدی فراهم می کند.",
            },
        },
        // 18
        {
            "ChapterName": "Searching and Sorting",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter covers searching and sorting algorithms, focusing on linear and binary search methods, as well as selection, insertion, and merge sort techniques. It explains how linear search can be applied to any dataset while binary search requires sorted data for efficiency. The chapter also introduces Big O notation to evaluate the performance of these algorithms, highlighting the differences in their time complexities, and sets the stage for exploring dynamic data structures in the next chapter.",
                // German
                "Deutsch": "Dieses Kapitel behandelt Such- und Sortieralgorithmen, wobei der Schwerpunkt auf linearen und binären Suchmethoden sowie Auswahl-, Einfügungs- und Mergesort-Techniken liegt. Es wird erklärt, wie die lineare Suche auf jeden Datensatz angewendet werden kann, während die binäre Suche aus Effizienzgründen sortierte Daten erfordert. Das Kapitel führt auch die Big-O-Notation ein, um die Leistung dieser Algorithmen zu bewerten, wobei die Unterschiede in ihrer Zeitkomplexität hervorgehoben werden, und bereitet die Grundlage für die Untersuchung dynamischer Datenstrukturen im nächsten Kapitel.",
                // Chinese
                "中国人": "本章介绍搜索和排序算法，重点介绍线性和二进制搜索方法以及选择、插入和合并排序技术。它解释了如何将线性搜索应用于任何数据集，而二进制搜索则需要已排序的数据才能提高效率。本章还介绍了 Big O 符号来评估这些算法的性能，强调了它们的时间复杂度差异，并为下一章探索动态数据结构奠定了基础。",
                // Russian
                "Русский": "В этой главе рассматриваются алгоритмы поиска и сортировки, с упором на линейные и бинарные методы поиска, а также методы сортировки выбором, вставкой и слиянием. В ней объясняется, как линейный поиск может быть применен к любому набору данных, в то время как бинарный поиск требует отсортированных данных для эффективности. В главе также вводится нотация Big O для оценки производительности этих алгоритмов, подчеркиваются различия в их временной сложности, и закладывается основа для изучения динамических структур данных в следующей главе.",
                // French
                "Français": "Ce chapitre couvre les algorithmes de recherche et de tri, en se concentrant sur les méthodes de recherche linéaire et binaire, ainsi que sur les techniques de tri par sélection, insertion et fusion. Il explique comment la recherche linéaire peut être appliquée à n'importe quel ensemble de données tandis que la recherche binaire nécessite des données triées pour être efficace. Le chapitre présente également la notation Big O pour évaluer les performances de ces algorithmes, en soulignant les différences dans leurs complexités temporelles, et prépare le terrain pour l'exploration des structures de données dynamiques dans le chapitre suivant.",
                // Japanese
                "日本語": "この章では、線形検索とバイナリ検索、選択、挿入、マージ ソート手法に焦点を当てた検索アルゴリズムとソート アルゴリズムについて説明します。線形検索は任意のデータセットに適用できる一方、バイナリ検索では効率化のためにソートされたデータが必要であることを説明します。また、この章では、これらのアルゴリズムのパフォーマンスを評価するための Big O 表記法を紹介し、時間計算量の違いを強調し、次の章で動的データ構造を探索するための土台を整えます。",
                // Korean
                "한국인": "이 장에서는 선형 및 이진 검색 방법과 선택, 삽입 및 병합 정렬 기술에 초점을 맞춘 검색 및 정렬 알고리즘을 다룹니다. 선형 검색이 모든 데이터 세트에 적용될 수 있는 반면 이진 검색은 효율성을 위해 정렬된 데이터가 필요한 방법을 설명합니다. 또한 이 장에서는 이러한 알고리즘의 성능을 평가하기 위한 Big O 표기법을 소개하고 시간 복잡도의 차이점을 강조하며 다음 장에서 동적 데이터 구조를 탐색하기 위한 토대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo cubre los algoritmos de búsqueda y ordenamiento, centrándose en los métodos de búsqueda lineal y binaria, así como en las técnicas de selección, inserción y ordenamiento por combinación. Explica cómo se puede aplicar la búsqueda lineal a cualquier conjunto de datos, mientras que la búsqueda binaria requiere datos ordenados para lograr eficiencia. El capítulo también presenta la notación Big O para evaluar el rendimiento de estos algoritmos, destacando las diferencias en sus complejidades temporales y sentando las bases para explorar las estructuras de datos dinámicas en el próximo capítulo.",
                // Hindi
                "हिंदी": "यह अध्याय खोज और सॉर्टिंग एल्गोरिदम को कवर करता है, जिसमें रैखिक और बाइनरी खोज विधियों के साथ-साथ चयन, सम्मिलन और मर्ज सॉर्ट तकनीकों पर ध्यान केंद्रित किया गया है। यह बताता है कि रैखिक खोज को किसी भी डेटासेट पर कैसे लागू किया जा सकता है जबकि बाइनरी खोज को दक्षता के लिए सॉर्ट किए गए डेटा की आवश्यकता होती है। अध्याय इन एल्गोरिदम के प्रदर्शन का मूल्यांकन करने के लिए बिग ओ नोटेशन का भी परिचय देता है, उनकी समय जटिलताओं में अंतर को उजागर करता है, और अगले अध्याय में गतिशील डेटा संरचनाओं की खोज के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo aborda os algoritmos de pesquisa e classificação, com foco nos métodos de pesquisa linear e binária, bem como as técnicas de seleção, inserção e classificação por fusão. Explica como a pesquisa linear pode ser aplicada a qualquer conjunto de dados, enquanto a pesquisa binária requer dados classificados para uma maior eficiência. O capítulo introduz também a notação Big O para avaliar o desempenho destes algoritmos, destacando as diferenças nas suas complexidades temporais, e prepara o terreno para explorar as estruturas de dados dinâmicas no próximo capítulo.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি অনুসন্ধান এবং বাছাই করার অ্যালগরিদমগুলিকে কভার করে, রৈখিক এবং বাইনারি অনুসন্ধান পদ্ধতিগুলির পাশাপাশি নির্বাচন, সন্নিবেশ এবং মার্জ সাজানোর কৌশলগুলির উপর ফোকাস করে৷ এটি ব্যাখ্যা করে যে কীভাবে লিনিয়ার সার্চ যেকোন ডেটাসেটে প্রয়োগ করা যেতে পারে যখন বাইনারি অনুসন্ধানের দক্ষতার জন্য সাজানো ডেটা প্রয়োজন। অধ্যায়টি এই অ্যালগরিদমগুলির কার্যকারিতা মূল্যায়ন করার জন্য বিগ ও স্বরলিপিও প্রবর্তন করে, তাদের সময়ের জটিলতার পার্থক্যগুলিকে হাইলাইট করে এবং পরবর্তী অধ্যায়ে গতিশীল ডেটা স্ট্রাকচার অন্বেষণের জন্য পর্যায় সেট করে।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل خوارزميات البحث والفرز، مع التركيز على طرق البحث الخطي والثنائي، بالإضافة إلى تقنيات الاختيار والإدراج والفرز بالدمج. ويشرح كيف يمكن تطبيق البحث الخطي على أي مجموعة بيانات بينما يتطلب البحث الثنائي بيانات مرتبة لتحقيق الكفاءة. كما يقدم الفصل أيضًا تدوين Big O لتقييم أداء هذه الخوارزميات، مع تسليط الضوء على الاختلافات في تعقيداتها الزمنية، ويهيئ المسرح لاستكشاف هياكل البيانات الديناميكية في الفصل التالي.",
                // Persian
                "فارسی": "این فصل الگوریتم‌های جستجو و مرتب‌سازی، تمرکز بر روش‌های جستجوی خطی و باینری، و همچنین تکنیک‌های انتخاب، درج و مرتب‌سازی را پوشش می‌دهد. این توضیح می دهد که چگونه جستجوی خطی می تواند برای هر مجموعه داده اعمال شود در حالی که جستجوی باینری برای کارایی به داده های مرتب شده نیاز دارد. این فصل همچنین نماد Big O را برای ارزیابی عملکرد این الگوریتم‌ها معرفی می‌کند، تفاوت‌ها در پیچیدگی‌های زمانی آنها را برجسته می‌کند و زمینه را برای کاوش ساختارهای داده پویا در فصل بعدی فراهم می‌کند.",
            },
        },
        // 19
        {
            "ChapterName": "Custom Linked Data Structures",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on dynamic data structures, including linked lists, stacks, queues, and binary trees, which can grow and shrink during execution. It explains the concepts of self-referential classes and the mechanisms of boxing and unboxing that allow simple-type values to be treated as objects. The chapter emphasizes the importance of these data structures in efficient data management and algorithm implementation, while also introducing the idea of creating reusable data structures through classes, inheritance, and composition, setting the stage for the upcoming discussion on generics.",
                // German
                "Deutsch": "In diesem Kapitel geht es um dynamische Datenstrukturen, darunter verknüpfte Listen, Stapel, Warteschlangen und binäre Bäume, die während der Ausführung wachsen und schrumpfen können. Es erklärt die Konzepte selbstreferenzieller Klassen und die Mechanismen des Boxens und Unboxens, die es ermöglichen, einfache Werte als Objekte zu behandeln. Das Kapitel betont die Bedeutung dieser Datenstrukturen für eine effiziente Datenverwaltung und Algorithmenimplementierung und führt gleichzeitig die Idee ein, wiederverwendbare Datenstrukturen durch Klassen, Vererbung und Zusammensetzung zu erstellen, und bereitet so den Boden für die folgende Diskussion über Generika.",
                // Chinese
                "中国人": "本章重点介绍动态数据结构，包括链接列表、堆栈、队列和二叉树，它们可以在执行过程中增长和缩小。它解释了自引用类的概念以及允许将简单类型值视为对象的装箱和拆箱机制。本章强调了这些数据结构在高效数据管理和算法实现中的重要性，同时还介绍了通过类、继承和组合创建可重用数据结构的想法，为即将讨论的泛型奠定了基础。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется динамическим структурам данных, включая связанные списки, стеки, очереди и двоичные деревья, которые могут увеличиваться и уменьшаться во время выполнения. В ней объясняются концепции самореферентных классов и механизмы упаковки и распаковки, которые позволяют обрабатывать значения простых типов как объекты. В главе подчеркивается важность этих структур данных для эффективного управления данными и реализации алгоритмов, а также вводится идея создания повторно используемых структур данных с помощью классов, наследования и композиции, что подготавливает почву для предстоящего обсуждения обобщений.",
                // French
                "Français": "Ce chapitre se concentre sur les structures de données dynamiques, notamment les listes chaînées, les piles, les files d'attente et les arbres binaires, qui peuvent croître et diminuer au cours de l'exécution. Il explique les concepts de classes autoréférentielles et les mécanismes de boxing et de unboxing qui permettent de traiter les valeurs de type simple comme des objets. Le chapitre souligne l'importance de ces structures de données dans la gestion efficace des données et la mise en œuvre des algorithmes, tout en introduisant l'idée de créer des structures de données réutilisables via des classes, l'héritage et la composition, préparant ainsi le terrain pour la discussion à venir sur les génériques.",
                // Japanese
                "日本語": "この章では、実行中に拡大したり縮小したりする可能性のある、リンク リスト、スタック、キュー、バイナリ ツリーなどの動的データ構造に焦点を当てます。自己参照クラスの概念と、単純型の値をオブジェクトとして扱うことができるボックス化とアンボックス化のメカニズムについて説明します。この章では、効率的なデータ管理とアルゴリズムの実装におけるこれらのデータ構造の重要性を強調するとともに、クラス、継承、および構成を通じて再利用可能なデータ構造を作成するという考え方を紹介し、ジェネリックに関する今後の議論の土台を築きます。",
                // Korean
                "한국인": "이 장에서는 연결 리스트, 스택, 큐, 이진 트리를 포함한 동적 데이터 구조에 초점을 맞춥니다. 이는 실행 중에 커지고 작아질 수 있습니다. 자기 참조 클래스의 개념과 단순 유형 값을 객체로 처리할 수 있는 박싱 및 언박싱 메커니즘을 설명합니다. 이 장에서는 효율적인 데이터 관리 및 알고리즘 구현에서 이러한 데이터 구조의 중요성을 강조하는 동시에 클래스, 상속 및 구성을 통해 재사용 가능한 데이터 구조를 만드는 아이디어를 소개하여 제네릭에 대한 다가올 논의를 위한 토대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo se centra en las estructuras de datos dinámicas, incluidas las listas enlazadas, las pilas, las colas y los árboles binarios, que pueden crecer y contraerse durante la ejecución. Explica los conceptos de clases autorreferenciales y los mecanismos de encajonamiento y desencajonamiento que permiten tratar los valores de tipos simples como objetos. El capítulo enfatiza la importancia de estas estructuras de datos en la administración eficiente de datos y la implementación de algoritmos, al mismo tiempo que introduce la idea de crear estructuras de datos reutilizables a través de clases, herencia y composición, lo que prepara el terreno para la próxima discusión sobre los genéricos.",
                // Hindi
                "हिंदी": "यह अध्याय गतिशील डेटा संरचनाओं पर केंद्रित है, जिसमें लिंक्ड लिस्ट, स्टैक, क्यू और बाइनरी ट्री शामिल हैं, जो निष्पादन के दौरान बढ़ और सिकुड़ सकते हैं। यह स्व-संदर्भित वर्गों की अवधारणाओं और बॉक्सिंग और अनबॉक्सिंग के तंत्रों की व्याख्या करता है जो सरल-प्रकार के मूल्यों को ऑब्जेक्ट के रूप में व्यवहार करने की अनुमति देते हैं। अध्याय कुशल डेटा प्रबंधन और एल्गोरिदम कार्यान्वयन में इन डेटा संरचनाओं के महत्व पर जोर देता है, साथ ही कक्षाओं, विरासत और संरचना के माध्यम से पुन: प्रयोज्य डेटा संरचनाओं को बनाने के विचार को भी पेश करता है, जो जेनेरिक पर आगामी चर्चा के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se nas estruturas de dados dinâmicas, incluindo listas ligadas, pilhas, filas e árvores binárias, que podem aumentar ou diminuir durante a execução. Explica os conceitos de classes autorreferenciais e os mecanismos de boxing e unboxing que permitem que valores de tipo simples sejam tratados como objetos. O capítulo enfatiza a importância destas estruturas de dados na gestão eficiente de dados e na implementação de algoritmos, ao mesmo tempo que introduz a ideia de criar estruturas de dados reutilizáveis ​​através de classes, herança e composição, preparando o terreno para a próxima discussão sobre os genéricos.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ডায়নামিক ডেটা স্ট্রাকচারের উপর ফোকাস করে, যার মধ্যে লিঙ্ক করা তালিকা, স্ট্যাক, সারি এবং বাইনারি ট্রি রয়েছে, যা কার্যকর করার সময় বৃদ্ধি এবং সঙ্কুচিত হতে পারে। এটি স্ব-রেফারেন্সিয়াল ক্লাসের ধারণা এবং বক্সিং এবং আনবক্সিংয়ের পদ্ধতিগুলি ব্যাখ্যা করে যা সাধারণ-টাইপ মানগুলিকে বস্তু হিসাবে বিবেচনা করার অনুমতি দেয়। অধ্যায়টি দক্ষ ডেটা ম্যানেজমেন্ট এবং অ্যালগরিদম বাস্তবায়নে এই ডেটা স্ট্রাকচারগুলির গুরুত্বের উপর জোর দেয়, পাশাপাশি ক্লাস, উত্তরাধিকার এবং রচনার মাধ্যমে পুনঃব্যবহারযোগ্য ডেটা স্ট্রাকচার তৈরি করার ধারণার প্রবর্তন করে, জেনেরিকের উপর আসন্ন আলোচনার জন্য মঞ্চ তৈরি করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على هياكل البيانات الديناميكية، بما في ذلك القوائم المرتبطة، والمكدسات، والطوابير، والأشجار الثنائية، والتي يمكن أن تنمو وتتقلص أثناء التنفيذ. ويشرح مفاهيم الفئات المرجعية الذاتية وآليات التعبئة والتغليف وإلغاء التعبئة التي تسمح بمعاملة قيم النوع البسيط ككائنات. ويؤكد الفصل على أهمية هياكل البيانات هذه في إدارة البيانات الفعّالة وتنفيذ الخوارزميات، مع تقديم فكرة إنشاء هياكل بيانات قابلة لإعادة الاستخدام من خلال الفئات، والوراثة، والتكوين، مما يمهد الطريق للمناقشة القادمة حول الكائنات العامة.",
                // Persian
                "فارسی": "این فصل بر روی ساختارهای داده پویا، از جمله لیست‌های پیوندی، پشته‌ها، صف‌ها و درخت‌های باینری تمرکز دارد که می‌توانند در طول اجرا رشد کرده و کوچک شوند. مفاهیم کلاس‌های خود ارجاعی و مکانیسم‌های جعبه‌گشایی و جعبه‌گشایی را توضیح می‌دهد که اجازه می‌دهد مقادیر ساده به‌عنوان اشیا در نظر گرفته شوند. این فصل بر اهمیت این ساختارهای داده در مدیریت کارآمد داده ها و پیاده سازی الگوریتم تاکید می کند، در حالی که ایده ایجاد ساختارهای داده قابل استفاده مجدد از طریق کلاس ها، وراثت و ترکیب را نیز معرفی می کند و زمینه را برای بحث آینده در مورد ژنریک فراهم می کند.",
            },
        },
        // 20
        {
            "ChapterName": "Generics",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This Chapter introduces generics, emphasizing their role in ensuring compile-time type safety and improving code reuse. It explains how generic methods and classes allow developers to create type-independent code that can handle multiple data types while enforcing type constraints to prevent mismatches. The chapter also covers the implementation of generic methods, the use of type constraints, and the ability to overload methods, ultimately demonstrating how generics enhance the efficiency and safety of programming in C#.",
                // German
                "Deutsch": "In diesem Kapitel werden Generika vorgestellt und ihre Rolle bei der Gewährleistung der Typsicherheit zur Kompilierzeit und der Verbesserung der Codewiederverwendung hervorgehoben. Es wird erklärt, wie Entwickler mit generischen Methoden und Klassen typunabhängigen Code erstellen können, der mehrere Datentypen verarbeiten kann, während gleichzeitig Typbeschränkungen erzwungen werden, um Fehlanpassungen zu vermeiden. Das Kapitel behandelt auch die Implementierung generischer Methoden, die Verwendung von Typbeschränkungen und die Möglichkeit, Methoden zu überladen, und zeigt letztendlich, wie Generika die Effizienz und Sicherheit der Programmierung in C# verbessern.",
                // Chinese
                "中国人": "本章介绍泛型，强调其在确保编译时类型安全和提高代码重用方面的作用。它解释了泛型方法和类如何允许开发人员创建类型独立的代码，这些代码可以处理多种数据类型，同时强制执行类型约束以防止不匹配。本章还介绍了泛型方法的实现、类型约束的使用以及重载方法的能力，最终展示了泛型如何提高 C# 编程的效率和安全性。",
                // Russian
                "Русский": "В этой главе рассматриваются обобщенные методы, подчеркивается их роль в обеспечении безопасности типов во время компиляции и улучшении повторного использования кода. В ней объясняется, как обобщенные методы и классы позволяют разработчикам создавать независимый от типа код, который может обрабатывать несколько типов данных, одновременно применяя ограничения типов для предотвращения несоответствий. В главе также рассматривается реализация обобщенных методов, использование ограничений типов и возможность перегрузки методов, в конечном итоге демонстрируя, как обобщенные методы повышают эффективность и безопасность программирования на языке C#.",
                // French
                "Français": "Ce chapitre présente les génériques, en insistant sur leur rôle dans la garantie de la sécurité des types au moment de la compilation et l'amélioration de la réutilisation du code. Il explique comment les méthodes et les classes génériques permettent aux développeurs de créer du code indépendant du type qui peut gérer plusieurs types de données tout en appliquant des contraintes de type pour éviter les incompatibilités. Le chapitre couvre également l'implémentation des méthodes génériques, l'utilisation des contraintes de type et la possibilité de surcharger les méthodes, démontrant finalement comment les génériques améliorent l'efficacité et la sécurité de la programmation en C#.",
                // Japanese
                "日本語": "この章では、ジェネリックを紹介し、コンパイル時の型安全性を確保し、コードの再利用性を向上させる役割を強調します。ジェネリック メソッドとクラスによって、開発者が複数のデータ型を処理できる型に依存しないコードを作成し、不一致を防ぐために型制約を適用する方法について説明します。また、ジェネリック メソッドの実装、型制約の使用、メソッドのオーバーロード機能についても説明し、ジェネリックが C# でのプログラミングの効率と安全性をどのように向上させるかを示します。",
                // Korean
                "한국인": "이 장에서는 제네릭을 소개하고, 컴파일 타임 유형 안전성을 보장하고 코드 재사용을 개선하는 데 있어서 제네릭의 역할을 강조합니다. 제네릭 메서드와 클래스를 통해 개발자가 여러 데이터 유형을 처리하면서도 불일치를 방지하기 위한 유형 제약 조건을 적용할 수 있는 유형 독립적인 코드를 만드는 방법을 설명합니다. 또한 제네릭 메서드의 구현, 유형 제약 조건의 사용, 메서드 오버로드 기능을 다루며, 궁극적으로 제네릭이 C#에서 프로그래밍의 효율성과 안전성을 어떻게 향상시키는지 보여줍니다.",
                // Spanish
                "Español": "En este capítulo se presentan los genéricos, haciendo hincapié en su función para garantizar la seguridad de los tipos en tiempo de compilación y mejorar la reutilización del código. Se explica cómo los métodos y las clases genéricos permiten a los desarrolladores crear código independiente del tipo que puede manejar múltiples tipos de datos y, al mismo tiempo, aplicar restricciones de tipos para evitar discrepancias. El capítulo también cubre la implementación de métodos genéricos, el uso de restricciones de tipos y la capacidad de sobrecargar métodos, demostrando en última instancia cómo los genéricos mejoran la eficiencia y la seguridad de la programación en C#.",
                // Hindi
                "हिंदी": "यह अध्याय जेनरिक का परिचय देता है, संकलन-समय प्रकार सुरक्षा सुनिश्चित करने और कोड पुन: उपयोग में सुधार करने में उनकी भूमिका पर जोर देता है। यह बताता है कि कैसे जेनेरिक विधियाँ और वर्ग डेवलपर्स को प्रकार-स्वतंत्र कोड बनाने की अनुमति देते हैं जो बेमेल को रोकने के लिए प्रकार की बाधाओं को लागू करते हुए कई डेटा प्रकारों को संभाल सकता है। अध्याय जेनेरिक विधियों के कार्यान्वयन, प्रकार की बाधाओं के उपयोग और विधियों को ओवरलोड करने की क्षमता को भी कवर करता है, अंततः यह प्रदर्शित करता है कि कैसे जेनरिक C# में प्रोग्रामिंग की दक्षता और सुरक्षा को बढ़ाता है।",
                // Portuguese
                "Português": "Este capítulo apresenta os genéricos, enfatizando o seu papel na garantia da segurança do tipo em tempo de compilação e na melhoria da reutilização de código. Explica como os métodos e classes genéricos permitem aos programadores criar códigos independentes de tipo que podem lidar com vários tipos de dados e, ao mesmo tempo, impor restrições de tipo para evitar incompatibilidades. O capítulo aborda ainda a implementação de métodos genéricos, a utilização de restrições de tipo e a capacidade de sobrecarregar métodos, demonstrando, em última análise, como os genéricos melhoram a eficiência e a segurança da programação em C#.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি জেনেরিকের পরিচয় দেয়, কম্পাইল-টাইম টাইপ নিরাপত্তা নিশ্চিত করতে এবং কোড পুনঃব্যবহারের উন্নতিতে তাদের ভূমিকার উপর জোর দেয়। এটি ব্যাখ্যা করে যে কীভাবে জেনেরিক পদ্ধতি এবং ক্লাসগুলি বিকাশকারীদের টাইপ-স্বাধীন কোড তৈরি করতে দেয় যা অমিল রোধ করতে টাইপ সীমাবদ্ধতা প্রয়োগ করার সময় একাধিক ডেটা টাইপ পরিচালনা করতে পারে। অধ্যায়টি জেনেরিক পদ্ধতির বাস্তবায়ন, টাইপ সীমাবদ্ধতার ব্যবহার এবং পদ্ধতি ওভারলোড করার ক্ষমতাকেও কভার করে, শেষ পর্যন্ত প্রদর্শন করে যে জেনেরিক কীভাবে C# এ প্রোগ্রামিংয়ের দক্ষতা এবং নিরাপত্তা বাড়ায়।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل تعريفًا بالأنواع العامة، مع التركيز على دورها في ضمان سلامة النوع في وقت التجميع وتحسين إعادة استخدام الكود. ويشرح كيف تسمح الأساليب والفئات العامة للمطورين بإنشاء كود مستقل عن النوع يمكنه التعامل مع أنواع بيانات متعددة مع فرض قيود النوع لمنع عدم التطابق. ويغطي الفصل أيضًا تنفيذ الأساليب العامة، واستخدام قيود النوع، والقدرة على تحميل الأساليب، مما يوضح في النهاية كيف تعمل الأنواع العامة على تعزيز كفاءة وسلامة البرمجة في C#.",
                // Persian
                "فارسی": "این فصل ژنریک ها را معرفی می کند و بر نقش آنها در تضمین ایمنی نوع زمان کامپایل و بهبود استفاده مجدد از کد تأکید می کند. توضیح می‌دهد که چگونه روش‌ها و کلاس‌های عمومی به توسعه‌دهندگان اجازه می‌دهند تا کدی مستقل از نوع ایجاد کنند که می‌تواند چندین نوع داده را مدیریت کند و در عین حال محدودیت‌های نوع را برای جلوگیری از عدم تطابق اعمال کند. این فصل همچنین پیاده‌سازی روش‌های عمومی، استفاده از محدودیت‌های نوع، و توانایی بارگذاری بیش از حد روش‌ها را پوشش می‌دهد و در نهایت نشان می‌دهد که چگونه ژنریک کارایی و ایمنی برنامه‌نویسی را در C# افزایش می‌دهد.",
            },
        },
        // 21
        {
            "ChapterName": "Generic Collections; Functional Programming with LINQ/PLINQ",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces the prepackaged collection classes in the .NET Framework, detailing their hierarchy, implementation, and the use of enumerators for iterating through collections. It covers various namespaces such as System.Collections for object-based collections and System.Collections.Generic for generic collections, including classes like List and Dictionary<K,V>. Additionally, it emphasizes the functional programming aspects of LINQ operations, which do not modify the original collections, and sets the stage for the next chapter on databases and the ADO.NET Entity Framework.",
                // German
                "Deutsch": "In diesem Kapitel werden die vorgefertigten Sammlungsklassen im .NET Framework vorgestellt und ihre Hierarchie, Implementierung und die Verwendung von Enumeratoren zum Durchlaufen von Sammlungen detailliert beschrieben. Es behandelt verschiedene Namespaces wie System.Collections für objektbasierte Sammlungen und System.Collections.Generic für generische Sammlungen, einschließlich Klassen wie List und Dictionary<K,V>. Darüber hinaus werden die funktionalen Programmieraspekte von LINQ-Operationen hervorgehoben, die die ursprünglichen Sammlungen nicht ändern, und es wird die Grundlage für das nächste Kapitel über Datenbanken und das ADO.NET Entity Framework geschaffen.",
                // Chinese
                "中国人": "本章介绍了 .NET Framework 中预先打包的集合类，详细介绍了它们的层次结构、实现以及使用枚举器遍历集合的方法。它涵盖了各种命名空间，例如用于基于对象的集合的 System.Collections 和用于泛型集合的 System.Collections.Generic，包括 List 和 Dictionary<K,V> 等类。此外，它还强调了 LINQ 操作的函数式编程方面，这些操作不会修改原始集合，并为下一章关于数据库和 ADO.NET 实体框架奠定了基础。",
                // Russian
                "Русский": "В этой главе представлены предварительно упакованные классы коллекций в .NET Framework, подробно описаны их иерархия, реализация и использование перечислителей для итерации по коллекциям. Она охватывает различные пространства имен, такие как System.Collections для объектно-ориентированных коллекций и System.Collections.Generic для универсальных коллекций, включая такие классы, как List и Dictionary<K,V>. Кроме того, она подчеркивает аспекты функционального программирования операций LINQ, которые не изменяют исходные коллекции, и закладывает основу для следующей главы о базах данных и ADO.NET Entity Framework.",
                // French
                "Français": "Ce chapitre présente les classes de collection pré-packagées dans .NET Framework, en détaillant leur hiérarchie, leur implémentation et l'utilisation d'énumérateurs pour parcourir les collections. Il couvre divers espaces de noms tels que System.Collections pour les collections basées sur des objets et System.Collections.Generic pour les collections génériques, y compris des classes comme List et Dictionary<K,V>. De plus, il met l'accent sur les aspects de programmation fonctionnelle des opérations LINQ, qui ne modifient pas les collections d'origine, et prépare le terrain pour le prochain chapitre sur les bases de données et ADO.NET Entity Framework.",
                // Japanese
                "日本語": "この章では、.NET Framework にあらかじめパッケージ化されたコレクション クラスを紹介し、その階層、実装、およびコレクションを反復処理するための列挙子の使用について詳しく説明します。オブジェクト ベースのコレクションの System.Collections や、List や Dictionary<K,V> などのクラスを含むジェネリック コレクションの System.Collections.Generic など、さまざまな名前空間について説明します。さらに、元のコレクションを変更しない LINQ 操作の関数型プログラミングの側面を強調し、データベースと ADO.NET Entity Framework に関する次の章の準備を整えます。",
                // Korean
                "한국인": "이 장에서는 .NET Framework의 미리 패키징된 컬렉션 클래스를 소개하고, 계층 구조, 구현 및 컬렉션을 반복하기 위한 열거자 사용에 대해 자세히 설명합니다. 여기에는 개체 기반 컬렉션의 경우 System.Collections, 제네릭 컬렉션의 경우 System.Collections.Generic과 같은 다양한 네임스페이스가 포함되며 여기에는 List 및 Dictionary<K,V>와 같은 클래스가 포함됩니다. 또한 원래 컬렉션을 수정하지 않는 LINQ 작업의 함수형 프로그래밍 측면을 강조하고 데이터베이스 및 ADO.NET Entity Framework에 대한 다음 장의 배경을 설정합니다.",
                // Spanish
                "Español": "En este capítulo se presentan las clases de colección preempaquetadas en .NET Framework, se detalla su jerarquía, implementación y el uso de enumeradores para iterar a través de las colecciones. Se cubren varios espacios de nombres como System.Collections para colecciones basadas en objetos y System.Collections.Generic para colecciones genéricas, incluidas clases como List y Dictionary<K,V>. Además, se enfatizan los aspectos de programación funcional de las operaciones LINQ, que no modifican las colecciones originales, y se prepara el terreno para el siguiente capítulo sobre bases de datos y ADO.NET Entity Framework.",
                // Hindi
                "हिंदी": "यह अध्याय .NET फ्रेमवर्क में प्रीपैकेज्ड कलेक्शन क्लासेस का परिचय देता है, उनके पदानुक्रम, कार्यान्वयन और संग्रहों के माध्यम से पुनरावृत्ति के लिए एन्यूमेरेटर्स के उपयोग का विवरण देता है। यह ऑब्जेक्ट-आधारित संग्रहों के लिए System.Collections और जेनेरिक संग्रहों के लिए System.Collections.Generic जैसे विभिन्न नामस्थानों को शामिल करता है, जिसमें List और Dictionary<K,V> जैसे वर्ग शामिल हैं। इसके अतिरिक्त, यह LINQ संचालन के कार्यात्मक प्रोग्रामिंग पहलुओं पर जोर देता है, जो मूल संग्रहों को संशोधित नहीं करते हैं, और डेटाबेस और ADO.NET Entity Framework पर अगले अध्याय के लिए मंच तैयार करते हैं।",
                // Portuguese
                "Português": "Este capítulo apresenta as classes de coleção predefinidas no .NET Framework, detalhando a sua hierarquia, implementação e a utilização de enumeradores para iterar através de coleções. Abrange vários namespaces, como System. Collections para coleções baseadas em objetos e System. Collections. Generic para coleções genéricas, incluindo classes como List e Dictionary<K,V>. Além disso, enfatiza os aspetos de programação funcional das operações LINQ, que não modificam as coleções originais, e prepara o terreno para o próximo capítulo sobre bases de dados e o ADO.NET Entity Framework.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি .NET ফ্রেমওয়ার্কে প্রি-প্যাকেজ করা সংগ্রহের ক্লাসের পরিচয় দেয়, তাদের শ্রেণীবিন্যাস, বাস্তবায়ন এবং সংগ্রহের মাধ্যমে পুনরাবৃত্তির জন্য গণনাকারীর ব্যবহার সম্পর্কে বিস্তারিত। এটি বিভিন্ন নেমস্পেস কভার করে যেমন System.Collections for object-based collections and System.Collections.Generic সাধারণ সংগ্রহের জন্য, যার মধ্যে List এবং Dictionary<K,V> এর মত ক্লাস রয়েছে। উপরন্তু, এটি LINQ অপারেশনগুলির কার্যকরী প্রোগ্রামিং দিকগুলির উপর জোর দেয়, যা মূল সংগ্রহগুলিকে সংশোধন করে না এবং ডাটাবেস এবং ADO.NET সত্তা ফ্রেমওয়ার্কের পরবর্তী অধ্যায়ের জন্য পর্যায় সেট করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل فئات المجموعات المعبأة مسبقًا في إطار عمل .NET، مع تفصيل التسلسل الهرمي لها وتنفيذها واستخدام المعدّدات للتكرار عبر المجموعات. ويغطي مساحات الأسماء المختلفة مثل System.Collections للمجموعات القائمة على الكائنات وSystem.Collections.Generic للمجموعات العامة، بما في ذلك الفئات مثل List وDictionary<K,V>. بالإضافة إلى ذلك، يؤكد على جوانب البرمجة الوظيفية لعمليات LINQ، والتي لا تعدل المجموعات الأصلية، ويضع الأساس للفصل التالي حول قواعد البيانات وإطار عمل ADO.NET Entity Framework.",
                // Persian
                "فارسی": "این فصل کلاس های مجموعه از پیش بسته بندی شده در چارچوب دات نت را معرفی می کند، سلسله مراتب، پیاده سازی و استفاده از شمارشگرها برای تکرار از طریق مجموعه ها را شرح می دهد. این فضاهای نام مختلفی مانند System.Collections برای مجموعه های مبتنی بر شی و System.Collections.Generic برای مجموعه های عمومی، از جمله کلاس هایی مانند List و Dictionary<K,V> را پوشش می دهد. علاوه بر این، بر جنبه‌های برنامه‌نویسی عملکردی عملیات LINQ تأکید می‌کند، که مجموعه‌های اصلی را تغییر نمی‌دهند، و زمینه را برای فصل بعدی در پایگاه‌های داده و چارچوب نهاد ADO.NET فراهم می‌کند.",
            },
        },
        // 22
        {
            "ChapterName": "Databases and LINQ",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces the relational database model and the ADO.NET Entity Framework, focusing on how to use LINQ to Entities and Visual Studio's tools for database interaction. It covers the structure of a simple Books database, including the relationships between tables, primary and foreign keys, and demonstrates how to retrieve, add, delete, and update data using the entity data model classes generated by the IDE. Additionally, it highlights the IDE's capabilities for connecting to databases and creating GUIs for data manipulation, setting the stage for future discussions on asynchronous programming in C#.",
                // German
                "Deutsch": "In diesem Kapitel werden das relationale Datenbankmodell und das ADO.NET Entity Framework vorgestellt. Dabei liegt der Schwerpunkt auf der Verwendung von LINQ to Entities und den Tools von Visual Studio zur Datenbankinteraktion. Es behandelt die Struktur einer einfachen Books-Datenbank, einschließlich der Beziehungen zwischen Tabellen, Primär- und Fremdschlüsseln, und zeigt, wie Daten mithilfe der von der IDE generierten Entity-Data-Model-Klassen abgerufen, hinzugefügt, gelöscht und aktualisiert werden. Darüber hinaus werden die Funktionen der IDE zum Herstellen einer Verbindung zu Datenbanken und zum Erstellen von GUIs zur Datenmanipulation hervorgehoben. Dies bereitet den Boden für spätere Diskussionen zur asynchronen Programmierung in C#.",
                // Chinese
                "中国人": "本章介绍了关系数据库模型和 ADO.NET 实体框架，重点介绍了如何使用 LINQ to Entities 和 Visual Studio 的工具进行数据库交互。它介绍了一个简单的 Books 数据库的结构，包括表之间的关系、主键和外键，并演示了如何使用 IDE 生成的实体数据模型类检索、添加、删除和更新数据。此外，它还重点介绍了 IDE 连接数据库和创建数据操作 GUI 的功能，为将来讨论 C# 中的异步编程奠定了基础。",
                // Russian
                "Русский": "В этой главе представлена ​​реляционная модель базы данных и ADO.NET Entity Framework, с упором на то, как использовать LINQ to Entities и инструменты Visual Studio для взаимодействия с базой данных. Она охватывает структуру простой базы данных Books, включая связи между таблицами, первичными и внешними ключами, и демонстрирует, как извлекать, добавлять, удалять и обновлять данные с помощью классов модели данных сущности, сгенерированных IDE. Кроме того, она освещает возможности IDE по подключению к базам данных и созданию графических интерфейсов для манипулирования данными, закладывая основу для будущих обсуждений асинхронного программирования на C#.",
                // French
                "Français": "Ce chapitre présente le modèle de base de données relationnelle et ADO.NET Entity Framework, en mettant l'accent sur l'utilisation de LINQ to Entities et des outils de Visual Studio pour l'interaction avec les bases de données. Il couvre la structure d'une base de données Books simple, y compris les relations entre les tables, les clés primaires et étrangères, et montre comment récupérer, ajouter, supprimer et mettre à jour des données à l'aide des classes de modèle de données d'entité générées par l'IDE. En outre, il met en évidence les capacités de l'IDE pour se connecter aux bases de données et créer des interfaces graphiques pour la manipulation des données, ouvrant la voie à de futures discussions sur la programmation asynchrone en C#.",
                // Japanese
                "日本語": "この章では、リレーショナル データベース モデルと ADO.NET Entity Framework について紹介し、LINQ to Entities と Visual Studio のデータベース操作ツールの使用方法に焦点を当てます。テーブル間の関係、主キーと外部キーを含む単純な Books データベースの構造について説明し、IDE によって生成されたエンティティ データ モデル クラスを使用してデータを取得、追加、削除、更新する方法を示します。さらに、データベースに接続し、データ操作用の GUI を作成する IDE の機能についても説明し、C# での非同期プログラミングに関する今後の議論の土台を築きます。",
                // Korean
                "한국인": "이 장에서는 관계형 데이터베이스 모델과 ADO.NET Entity Framework를 소개하며, LINQ to Entities와 Visual Studio의 데이터베이스 상호 작용 도구 사용 방법에 중점을 둡니다. 테이블, 기본 키 및 외래 키 간의 관계를 포함하여 간단한 Books 데이터베이스의 구조를 다루고 IDE에서 생성한 엔터티 데이터 모델 클래스를 사용하여 데이터를 검색, 추가, 삭제 및 업데이트하는 방법을 보여줍니다. 또한 데이터베이스에 연결하고 데이터 조작을 위한 GUI를 만드는 IDE의 기능을 강조하여 C#에서 비동기 프로그래밍에 대한 향후 논의를 위한 토대를 마련합니다.",
                // Spanish
                "Español": "En este capítulo se presenta el modelo de base de datos relacional y ADO.NET Entity Framework, centrándose en cómo utilizar LINQ to Entities y las herramientas de Visual Studio para la interacción con bases de datos. Se cubre la estructura de una base de datos Books simple, incluidas las relaciones entre tablas, claves primarias y externas, y se demuestra cómo recuperar, agregar, eliminar y actualizar datos utilizando las clases del modelo de datos de entidad generadas por el IDE. Además, se destacan las capacidades del IDE para conectarse a bases de datos y crear GUI para la manipulación de datos, lo que prepara el terreno para futuras discusiones sobre programación asincrónica en C#.",
                // Hindi
                "हिंदी": "यह अध्याय रिलेशनल डेटाबेस मॉडल और ADO.NET एंटिटी फ्रेमवर्क का परिचय देता है, जो डेटाबेस इंटरैक्शन के लिए LINQ to Entities और Visual Studio के टूल का उपयोग करने के तरीके पर ध्यान केंद्रित करता है। यह एक सरल Books डेटाबेस की संरचना को कवर करता है, जिसमें टेबल, प्राथमिक और विदेशी कुंजियों के बीच संबंध शामिल हैं, और यह दर्शाता है कि IDE द्वारा उत्पन्न एंटिटी डेटा मॉडल क्लास का उपयोग करके डेटा को कैसे पुनर्प्राप्त, जोड़ा, हटाया और अपडेट किया जाए। इसके अतिरिक्त, यह डेटाबेस से कनेक्ट करने और डेटा हेरफेर के लिए GUI बनाने के लिए IDE की क्षमताओं पर प्रकाश डालता है, जो C# में एसिंक्रोनस प्रोग्रामिंग पर भविष्य की चर्चाओं के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo apresenta o modelo de base de dados relacional e o ADO.NET Entity Framework, com foco na forma de utilizar o LINQ to Entities e as ferramentas do Visual Studio para a interação com a base de dados. Abrange a estrutura de uma base de dados de livros simples, incluindo as relações entre tabelas, chaves primárias e estrangeiras, e demonstra como recuperar, adicionar, eliminar e atualizar dados utilizando as classes de modelo de dados de entidades geradas pelo IDE. Além disso, destaca as capacidades do IDE para a ligação a bases de dados e a criação de GUIs para a manipulação de dados, preparando o terreno para futuras discussões sobre programação assíncrona em C#.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি রিলেশনাল ডাটাবেস মডেল এবং ADO.NET সত্তা ফ্রেমওয়ার্কের সাথে পরিচয় করিয়ে দেয়, ডাটাবেস ইন্টারঅ্যাকশনের জন্য কীভাবে LINQ থেকে সত্তা এবং ভিজ্যুয়াল স্টুডিওর টুল ব্যবহার করতে হয় তার উপর ফোকাস করে। এটি টেবিল, প্রাথমিক এবং বিদেশী কীগুলির মধ্যে সম্পর্ক সহ একটি সাধারণ বইয়ের ডাটাবেসের কাঠামো কভার করে এবং IDE দ্বারা উত্পন্ন সত্তা ডেটা মডেল ক্লাসগুলি ব্যবহার করে কীভাবে ডেটা পুনরুদ্ধার, যোগ, মুছতে এবং আপডেট করা যায় তা প্রদর্শন করে। অতিরিক্তভাবে, এটি ডেটাবেসের সাথে সংযোগ স্থাপন এবং ডেটা ম্যানিপুলেশনের জন্য GUI তৈরি করার জন্য IDE-এর ক্ষমতাগুলিকে হাইলাইট করে, C#-এ অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং-এর উপর ভবিষ্যতে আলোচনার জন্য মঞ্চ তৈরি করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل نموذج قاعدة البيانات العلائقية وإطار عمل ADO.NET Entity، مع التركيز على كيفية استخدام LINQ to Entities وأدوات Visual Studio للتفاعل مع قواعد البيانات. ويغطي بنية قاعدة بيانات Books البسيطة، بما في ذلك العلاقات بين الجداول والمفاتيح الأساسية والأجنبية، ويوضح كيفية استرداد البيانات وإضافتها وحذفها وتحديثها باستخدام فئات نموذج بيانات الكيان التي تم إنشاؤها بواسطة IDE. بالإضافة إلى ذلك، يسلط الضوء على قدرات IDE للاتصال بقواعد البيانات وإنشاء واجهات المستخدم الرسومية لمعالجة البيانات، مما يمهد الطريق للمناقشات المستقبلية حول البرمجة غير المتزامنة في C#.",
                // Persian
                "فارسی": "این فصل مدل پایگاه داده رابطه‌ای و چارچوب موجودیت ADO.NET را معرفی می‌کند و بر نحوه استفاده از LINQ برای نهادها و ابزارهای ویژوال استودیو برای تعامل با پایگاه داده تمرکز می‌کند. این ساختار یک پایگاه داده ساده Books شامل روابط بین جداول، کلیدهای اصلی و خارجی را پوشش می‌دهد و نحوه بازیابی، افزودن، حذف و به‌روزرسانی داده‌ها را با استفاده از کلاس‌های مدل داده موجودیت تولید شده توسط IDE نشان می‌دهد. علاوه بر این، قابلیت های IDE برای اتصال به پایگاه های داده و ایجاد رابط کاربری گرافیکی برای دستکاری داده ها را برجسته می کند و زمینه را برای بحث های آینده در مورد برنامه نویسی ناهمزمان در C# فراهم می کند.",
            },
        },
        // 23
        {
            "ChapterName": "Asynchronous Programming with async and await",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces asynchronous programming in C# using the modifier and operator, emphasizing their role in improving application performance and responsiveness, particularly in GUI applications. It explains how asynchronous tasks allow for concurrent execution, leveraging multicore processors to enhance efficiency, and demonstrates these concepts through practical examples, including compute-intensive calculations and web service calls with . The chapter also highlights the challenges of multithreading and the importance of managing multiple tasks effectively to avoid application freezes and maintain user experience.",
                // German
                "Deutsch": "Dieses Kapitel führt in die asynchrone Programmierung in C# unter Verwendung des Modifikators und des Operators ein und betont ihre Rolle bei der Verbesserung der Anwendungsleistung und Reaktionsfähigkeit, insbesondere bei GUI-Anwendungen. Es erklärt, wie asynchrone Aufgaben eine gleichzeitige Ausführung ermöglichen und Multicore-Prozessoren zur Verbesserung der Effizienz nutzen, und demonstriert diese Konzepte anhand praktischer Beispiele, darunter rechenintensive Berechnungen und Webdienstaufrufe mit . Das Kapitel beleuchtet auch die Herausforderungen des Multithreading und die Bedeutung der effektiven Verwaltung mehrerer Aufgaben, um Anwendungseinfrierungen zu vermeiden und die Benutzererfahrung aufrechtzuerhalten.",
                // Chinese
                "中国人": "本章介绍使用修饰符和运算符在 C# 中进行异步编程，强调它们在提高应用程序性能和响应能力（尤其是在 GUI 应用程序中）方面的作用。它解释了异步任务如何允许并发执行，如何利用多核处理器来提高效率，并通过实际示例（包括计算密集型计算和使用 的 Web 服务调用）演示这些概念。本章还重点介绍了多线程的挑战以及有效管理多个任务以避免应用程序冻结和保持用户体验的重要性。",
                // Russian
                "Русский": "В этой главе представлено асинхронное программирование на языке C# с использованием модификатора и оператора, подчеркивая их роль в улучшении производительности и отзывчивости приложений, особенно в приложениях с графическим интерфейсом. В ней объясняется, как асинхронные задачи позволяют выполняться параллельно, используя многоядерные процессоры для повышения эффективности, и эти концепции демонстрируются на практических примерах, включая ресурсоемкие вычисления и вызовы веб-сервисов с помощью . В главе также освещаются проблемы многопоточности и важность эффективного управления несколькими задачами для предотвращения зависаний приложений и поддержания пользовательского опыта.",
                // French
                "Français": "Ce chapitre présente la programmation asynchrone en C# à l'aide du modificateur et de l'opérateur, en insistant sur leur rôle dans l'amélioration des performances et de la réactivité des applications, en particulier dans les applications GUI. Il explique comment les tâches asynchrones permettent une exécution simultanée, en tirant parti des processeurs multicœurs pour améliorer l'efficacité, et démontre ces concepts à travers des exemples pratiques, notamment des calculs intensifs en calcul et des appels de services Web avec . Le chapitre met également en évidence les défis du multithreading et l'importance de gérer efficacement plusieurs tâches pour éviter les blocages d'applications et maintenir l'expérience utilisateur.",
                // Japanese
                "日本語": "この章では、C# での非同期プログラミングについて、修飾子と演算子を使用して紹介し、特に GUI アプリケーションにおけるアプリケーションのパフォーマンスと応答性の向上におけるそれらの役割を強調します。非同期タスクによって同時実行が可能になり、マルチコア プロセッサを活用して効率性を高める方法について説明し、コンピューティング集約型の計算や を使用した Web サービス呼び出しなどの実用的な例を通じてこれらの概念を示します。この章では、マルチスレッドの課題と、アプリケーションのフリーズを回避してユーザー エクスペリエンスを維持するために複数のタスクを効果的に管理することの重要性についても説明します。",
                // Korean
                "한국인": "이 장에서는 수정자와 연산자를 사용하여 C#에서 비동기 프로그래밍을 소개하고, 특히 GUI 애플리케이션에서 애플리케이션 성능과 응답성을 개선하는 데 있어서 이러한 비동기 프로그래밍의 역할을 강조합니다. 비동기 작업이 어떻게 동시 실행을 허용하고, 멀티코어 프로세서를 활용하여 효율성을 향상시키는지 설명하고, 컴퓨팅 집약적 계산 및 .을 사용한 웹 서비스 호출을 포함한 실제 사례를 통해 이러한 개념을 보여줍니다. 이 장에서는 또한 멀티스레딩의 과제와 애플리케이션 정지를 피하고 사용자 경험을 유지하기 위해 여러 작업을 효과적으로 관리하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo presenta la programación asincrónica en C# mediante el uso del modificador y el operador, y destaca su función para mejorar el rendimiento y la capacidad de respuesta de las aplicaciones, en particular en aplicaciones GUI. Explica cómo las tareas asincrónicas permiten la ejecución simultánea, aprovechando los procesadores multinúcleo para mejorar la eficiencia, y demuestra estos conceptos a través de ejemplos prácticos, incluidos cálculos de uso intensivo de recursos y llamadas a servicios web con . El capítulo también destaca los desafíos del subprocesamiento múltiple y la importancia de administrar varias tareas de manera eficaz para evitar que las aplicaciones se congelen y mantener la experiencia del usuario.",
                // Hindi
                "हिंदी": "यह अध्याय संशोधक और ऑपरेटर का उपयोग करके C# में एसिंक्रोनस प्रोग्रामिंग का परिचय देता है, विशेष रूप से GUI अनुप्रयोगों में, अनुप्रयोग प्रदर्शन और प्रतिक्रियाशीलता को बेहतर बनाने में उनकी भूमिका पर जोर देता है। यह बताता है कि कैसे एसिंक्रोनस कार्य समवर्ती निष्पादन की अनुमति देते हैं, दक्षता बढ़ाने के लिए मल्टीकोर प्रोसेसर का लाभ उठाते हैं, और व्यावहारिक उदाहरणों के माध्यम से इन अवधारणाओं को प्रदर्शित करते हैं, जिसमें कम्प्यूट-गहन गणनाएँ और वेब सेवा कॉल शामिल हैं। अध्याय मल्टीथ्रेडिंग की चुनौतियों और अनुप्रयोग फ़्रीज़ से बचने और उपयोगकर्ता अनुभव को बनाए रखने के लिए कई कार्यों को प्रभावी ढंग से प्रबंधित करने के महत्व पर भी प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo apresenta a programação assíncrona em C# utilizando o modificador e o operador, enfatizando o seu papel na melhoria do desempenho e da capacidade de resposta das aplicações, especialmente em aplicações GUI. Explica como as tarefas assíncronas permitem a execução simultânea, aproveitando os processadores multicore para aumentar a eficiência, e demonstra estes conceitos através de exemplos práticos, incluindo cálculos com uso intensivo de computação e chamadas de serviços Web com . O capítulo destaca também os desafios do multithreading e a importância de gerir múltiplas tarefas de forma eficaz para evitar congelamentos de aplicações e manter a experiência do utilizador.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি C#-এ অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং প্রবর্তন করে সংশোধক এবং অপারেটর ব্যবহার করে, বিশেষ করে GUI অ্যাপ্লিকেশনগুলিতে অ্যাপ্লিকেশন কর্মক্ষমতা এবং প্রতিক্রিয়াশীলতার উন্নতিতে তাদের ভূমিকার উপর জোর দেয়। এটি ব্যাখ্যা করে যে কীভাবে অ্যাসিঙ্ক্রোনাস টাস্কগুলি একযোগে কার্যকর করার অনুমতি দেয়, মাল্টিকোর প্রসেসরের কার্যকারিতা বাড়াতে ব্যবহার করে এবং এই ধারণাগুলিকে ব্যবহারিক উদাহরণের মাধ্যমে প্রদর্শন করে, যার মধ্যে কম্পিউট-ইনটেনসিভ ক্যালকুলেশন এবং এর সাথে ওয়েব পরিষেবা কল। অধ্যায়টি মাল্টিথ্রেডিংয়ের চ্যালেঞ্জগুলি এবং অ্যাপ্লিকেশন ফ্রিজ এড়াতে এবং ব্যবহারকারীর অভিজ্ঞতা বজায় রাখতে কার্যকরভাবে একাধিক কাজ পরিচালনার গুরুত্ব তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل مقدمة للبرمجة غير المتزامنة في لغة C# باستخدام المعدِّل والمشغل، مع التركيز على دورهما في تحسين أداء التطبيق واستجابته، وخاصة في تطبيقات واجهة المستخدم الرسومية. ويشرح كيف تسمح المهام غير المتزامنة بالتنفيذ المتزامن، والاستفادة من معالجات متعددة النواة لتعزيز الكفاءة، ويوضح هذه المفاهيم من خلال أمثلة عملية، بما في ذلك الحسابات التي تتطلب الكثير من الحوسبة ومكالمات خدمة الويب باستخدام . ويسلط الفصل الضوء أيضًا على تحديات تعدد العمليات وأهمية إدارة المهام المتعددة بشكل فعال لتجنب تجميد التطبيق والحفاظ على تجربة المستخدم.",
                // Persian
                "فارسی": "این فصل برنامه‌نویسی ناهمزمان در سی شارپ را با استفاده از اصلاح‌کننده و عملگر معرفی می‌کند و بر نقش آن‌ها در بهبود عملکرد و پاسخ‌دهی برنامه، به‌ویژه در برنامه‌های رابط کاربری گرافیکی تأکید می‌کند. توضیح می‌دهد که چگونه وظایف ناهمزمان امکان اجرای همزمان، استفاده از پردازنده‌های چند هسته‌ای برای افزایش کارایی را فراهم می‌کنند، و این مفاهیم را از طریق مثال‌های عملی، از جمله محاسبات فشرده و تماس‌های سرویس وب با . این فصل همچنین چالش‌های چند رشته‌ای و اهمیت مدیریت چندین کار را به طور موثر برای جلوگیری از مسدود شدن برنامه‌ها و حفظ تجربه کاربر برجسته می‌کند.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "“Visual C# How to Program” 6th edition by Paul and Harvey Deitel is a comprehensive guide that introduces readers to the world of desktop, mobile, and web app development using Microsoft’s Visual C# programming language. This edition is particularly notable for its integrated coverage of C# 6 and its clear, example-driven presentation of programming fundamentals. Readers will benefit from the Deitel’s signature “live-code approach,” which presents concepts in the context of complete working programs, followed by sample executions. This approach helps to solidify understanding and enables readers to see the practical application of the code they are learning.",
            // German
            "Deutsch": "„Visual C# How to Program“ 6. Auflage von Paul und Harvey Deitel ist ein umfassender Leitfaden, der Leser in die Welt der Entwicklung von Desktop-, Mobil- und Web-Apps mit der Programmiersprache Visual C# von Microsoft einführt. Diese Auflage ist besonders bemerkenswert für ihre integrierte Abdeckung von C# 6 und ihre klare, beispielbasierte Präsentation der Programmiergrundlagen. Leser profitieren von Deitels charakteristischem „Live-Code-Ansatz“, der Konzepte im Kontext vollständiger Arbeitsprogramme präsentiert, gefolgt von Beispielausführungen. Dieser Ansatz trägt dazu bei, das Verständnis zu festigen und ermöglicht es den Lesern, die praktische Anwendung des Codes zu sehen, den sie lernen.",
            // Chinese
            "中国人": "Paul 和 Harvey Deitel 编写的《Visual C# 编程指南》第 6 版是一本全面的指南，向读者介绍了使用 Microsoft Visual C# 编程语言进行桌面、移动和 Web 应用程序开发的世界。此版本尤其值得注意的是它全面介绍了 C# 6，并以示例为主导清晰地介绍了编程基础知识。读者将受益于 Deitel 的标志性“实时代码方法”，该方法在完整的工作程序环境中介绍概念，然后执行示例。这种方法有助于巩固理解，并使读者能够看到他们正在学习的代码的实际应用。",
            // Russian
            "Русский": "«Как программировать на Visual C#», 6-е издание Пола и Харви Дейтелов, представляет собой комплексное руководство, знакомящее читателей с миром разработки настольных, мобильных и веб-приложений с использованием языка программирования Microsoft Visual C#. Это издание особенно примечательно комплексным освещением C# 6 и четким, основанным на примерах представлением основ программирования. Читателям будет полезен фирменный «подход Дейтеля с живым кодом», который представляет концепции в контексте законченных рабочих программ с последующими примерами выполнения. Такой подход помогает укрепить понимание и позволяет читателям увидеть практическое применение изучаемого кода.",
            // French
            "Français": "« Visual C# How to Program » 6e édition de Paul et Harvey Deitel est un guide complet qui présente aux lecteurs le monde du développement d'applications de bureau, mobiles et Web à l'aide du langage de programmation Visual C# de Microsoft. Cette édition se distingue particulièrement par sa couverture intégrée de C# 6 et sa présentation claire et basée sur des exemples des principes fondamentaux de la programmation. Les lecteurs bénéficieront de « l’approche live-code », signature de Deitel, qui présente les concepts dans le contexte de programmes de travail complets, suivis d’exemples d’exécution. Cette approche contribue à consolider la compréhension et permet aux lecteurs de voir l’application pratique du code qu’ils apprennent.",
            // Japanese
            "日本語": "Paul および Harvey Deitel 著の「Visual C# プログラミング方法」第 6 版は、Microsoft の Visual C# プログラミング言語を使用したデスクトップ、モバイル、および Web アプリ開発の世界を読者に紹介する総合ガイドです。この版は、C# 6 を総合的にカバーし、プログラミングの基礎をわかりやすく例を交えて提示していることが特に注目に値します。読者は、Deitel の特徴である「ライブ コード アプローチ」の恩恵を受けるでしょう。このアプローチでは、概念を完全な動作プログラムのコンテキストで提示し、その後にサンプル実行が続きます。このアプローチは理解を強固にするのに役立ち、読者は学習しているコードの実際の適用方法を確認できます。",
            // Korean
            "한국인": "Paul Deitel과 Harvey Deitel이 쓴 “Visual C# 프로그래밍 방법” 6판은 Microsoft의 Visual C# 프로그래밍 언어를 사용하여 독자에게 데스크톱, 모바일 및 웹 앱 개발의 세계를 소개하는 포괄적인 가이드입니다. 이 버전은 C# 6에 대한 통합된 내용과 프로그래밍 기본 사항에 대한 명확하고 예제 중심의 프레젠테이션으로 특히 주목할 만합니다. 독자들은 완전한 작업 프로그램의 맥락에서 개념을 제시하고 이어서 샘플을 실행하는 Deitel의 대표적인 “라이브 코드 접근 방식”의 이점을 누릴 수 있습니다. 이 접근 방식은 이해를 확고히 하는 데 도움이 되며 독자가 학습 중인 코드의 실제 적용을 볼 수 있게 해줍니다.",
            // Spanish
            "Español": "“Visual C# How to Program”, sexta edición de Paul y Harvey Deitel es una guía completa que presenta a los lectores el mundo del desarrollo de aplicaciones de escritorio, móviles y web utilizando el lenguaje de programación Visual C# de Microsoft. Esta edición es particularmente notable por su cobertura integrada de C# 6 y su presentación clara, basada en ejemplos, de los fundamentos de la programación. Los lectores se beneficiarán del “enfoque de código en vivo” característico de Deitel, que presenta conceptos en el contexto de programas de trabajo completos, seguidos de ejecuciones de muestra. Este enfoque ayuda a solidificar la comprensión y permite a los lectores ver la aplicación práctica del código que están aprendiendo.",
            // Hindi
            "हिंदी": "पॉल और हार्वे डीटेल द्वारा लिखित “विजुअल C# हाउ टू प्रोग्राम” का छठा संस्करण एक व्यापक गाइड है जो पाठकों को Microsoft की Visual C# प्रोग्रामिंग भाषा का उपयोग करके डेस्कटॉप, मोबाइल और वेब ऐप डेवलपमेंट की दुनिया से परिचित कराता है। यह संस्करण C# 6 के अपने एकीकृत कवरेज और प्रोग्रामिंग की बुनियादी बातों की स्पष्ट, उदाहरण-संचालित प्रस्तुति के लिए विशेष रूप से उल्लेखनीय है। पाठकों को डीटेल के सिग्नेचर “लाइव-कोड दृष्टिकोण” से लाभ होगा, जो पूर्ण कार्यशील कार्यक्रमों के संदर्भ में अवधारणाओं को प्रस्तुत करता है, उसके बाद नमूना निष्पादन होता है। यह दृष्टिकोण समझ को मजबूत करने में मदद करता है और पाठकों को उनके द्वारा सीखे जा रहे कोड के व्यावहारिक अनुप्रयोग को देखने में सक्षम बनाता है।",
            // Portuguese
            "Português": "“Visual C# How to Program” 6ª edição de Paul e Harvey Deitel é um guia abrangente que apresenta aos leitores o mundo do desenvolvimento de aplicativos para desktop, dispositivos móveis e web usando a linguagem de programação Visual C# da Microsoft. Esta edição é particularmente notável por sua cobertura integrada do C# 6 e por sua apresentação clara e baseada em exemplos dos fundamentos da programação. Os leitores se beneficiarão da “abordagem de código ao vivo” exclusiva da Deitel, que apresenta conceitos no contexto de programas de trabalho completos, seguidos por exemplos de execuções. Essa abordagem ajuda a solidificar a compreensão e permite que os leitores vejam a aplicação prática do código que estão aprendendo.",
            // Bengali
            "বাংলা": "পল এবং হার্ভে ডিটেলের “ভিজ্যুয়াল সি# হাউ টু প্রোগ্রাম” 6 তম সংস্করণ হল একটি বিস্তৃত নির্দেশিকা যা মাইক্রোসফ্টের ভিজ্যুয়াল সি# প্রোগ্রামিং ভাষা ব্যবহার করে পাঠকদের ডেস্কটপ, মোবাইল এবং ওয়েব অ্যাপ ডেভেলপমেন্টের জগতে পরিচিত করে। এই সংস্করণটি C# 6 এর সমন্বিত কভারেজ এবং প্রোগ্রামিং মৌলিক বিষয়গুলির স্পষ্ট, উদাহরণ-চালিত উপস্থাপনার জন্য বিশেষভাবে উল্লেখযোগ্য। পাঠকরা Deitel-এর স্বাক্ষর “লাইভ-কোড পদ্ধতি” থেকে উপকৃত হবেন, যা সম্পূর্ণ কার্যকারী প্রোগ্রামের প্রেক্ষাপটে ধারণাগুলি উপস্থাপন করে, যার পরে নমুনা কার্যকর করা হয়। এই পদ্ধতিটি বোঝার দৃঢ় করতে সাহায্য করে এবং পাঠকদের তারা যে কোডটি শিখছে তার ব্যবহারিক প্রয়োগ দেখতে সক্ষম করে।",
            // Arabic
            "عَرَبِيّ": "“Visual C# How to Program” الإصدار السادس من تأليف Paul وHarvey Deitel هو دليل شامل يقدم للقراء عالم تطوير تطبيقات سطح المكتب والجوال وتطبيقات الويب باستخدام لغة البرمجة Visual C# من Microsoft. تتميز هذه الطبعة بشكل خاص بتغطيتها المتكاملة لـ C# 6 وعرضها الواضح والمبني على الأمثلة لأساسيات البرمجة. سيستفيد القراء من “نهج الكود المباشر” الخاص بشركة Deitel، والذي يقدم المفاهيم في سياق برامج العمل الكاملة، تليها نماذج من التنفيذ. يساعد هذا الأسلوب على ترسيخ الفهم ويمكّن القراء من رؤية التطبيق العملي للكود الذي يتعلمونه.",
            // Persian
            "فارسی": "“Visual C# How to Program” ویرایش ششم توسط Paul and Harvey Deitel یک راهنمای جامع است که خوانندگان را با دنیای توسعه دسکتاپ، موبایل و برنامه های وب با استفاده از زبان برنامه نویسی Visual C# مایکروسافت آشنا می کند. این نسخه به ویژه به دلیل پوشش یکپارچه C# 6 و ارائه واضح و مثال محور اصول برنامه نویسی قابل توجه است. خوانندگان از «رویکرد کد زنده» امضای Deitel بهره مند خواهند شد که مفاهیم را در چارچوب برنامه های کاری کامل و به دنبال آن اجراهای نمونه ارائه می کند. این رویکرد به تقویت درک کمک می کند و خوانندگان را قادر می سازد تا کاربرد عملی کدهایی را که یاد می گیرند ببینند.",
        },
        // Paragraph 2
        {
            // English
            "English": "One of the key advantages of this book is its rich coverage of essential programming concepts such as classes, objects, inheritance, polymorphism, and interfaces. The early introduction to LINQ and generic collections, as well as PLINQ (Parallel LINQ) for multicore performance, prepares readers for modern programming challenges. Additionally, the asynchronous programming with async and await is covered, which is crucial for writing responsive applications. By the end of the book, readers will have a strong foundation in C# and be equipped with the skills to build robust applications for a variety of platforms.",
            // German
            "Deutsch": "Einer der Hauptvorteile dieses Buches ist die umfassende Abdeckung wesentlicher Programmierkonzepte wie Klassen, Objekte, Vererbung, Polymorphismus und Schnittstellen. Die frühe Einführung in LINQ und generische Sammlungen sowie PLINQ (Parallel LINQ) für Multicore-Leistung bereitet die Leser auf moderne Programmierherausforderungen vor. Darüber hinaus wird die asynchrone Programmierung mit Async und Await behandelt, die für das Schreiben reaktionsfähiger Anwendungen von entscheidender Bedeutung ist. Am Ende des Buches verfügen die Leser über solide Grundlagen in C# und sind mit den Fähigkeiten ausgestattet, robuste Anwendungen für eine Vielzahl von Plattformen zu erstellen.",
            // Chinese
            "中国人": "本书的主要优势之一是它涵盖了类、对象、继承、多态性和接口等基本编程概念。本书对 LINQ 和泛型集合以及用于多核性能的 PLINQ（并行 LINQ）进行了早期介绍，帮助读者应对现代编程挑战。此外，本书还介绍了使用 async 和 await 的异步编程，这对于编写响应式应用程序至关重要。读完本书后，读者将拥有扎实的 C# 基础，并具备为各种平台构建强大应用程序的技能。",
            // Russian
            "Русский": "Одним из ключевых преимуществ этой книги является богатое освещение основных концепций программирования, таких как классы, объекты, наследование, полиморфизм и интерфейсы. Раннее знакомство с LINQ и универсальными коллекциями, а также с PLINQ (Parallel LINQ) для многоядерной производительности готовит читателей к современным задачам программирования. Кроме того, рассматривается асинхронное программирование с использованием async и await, что крайне важно для написания адаптивных приложений. К концу книги читатели получат прочные знания C# и навыки создания надежных приложений для различных платформ.",
            // French
            "Français": "L'un des principaux avantages de ce livre est sa riche couverture des concepts de programmation essentiels tels que les classes, les objets, l'héritage, le polymorphisme et les interfaces. L'introduction précoce à LINQ et aux collections génériques, ainsi qu'à PLINQ (Parallel LINQ) pour les performances multicœurs, prépare les lecteurs aux défis de programmation modernes. De plus, la programmation asynchrone avec async et wait est couverte, ce qui est crucial pour l'écriture d'applications réactives. À la fin du livre, les lecteurs auront de solides bases en C# et seront dotés des compétences nécessaires pour créer des applications robustes pour une variété de plates-formes.",
            // Japanese
            "日本語": "この本の主な利点の 1 つは、クラス、オブジェクト、継承、ポリモーフィズム、インターフェイスなどの基本的なプログラミング概念を豊富にカバーしていることです。LINQ とジェネリック コレクション、およびマルチコア パフォーマンスのための PLINQ (Parallel LINQ) を早期に紹介することで、読者は最新のプログラミングの課題に備えることができます。さらに、応答性の高いアプリケーションを作成するために不可欠な、async と await を使用した非同期プログラミングについても取り上げています。この本を読み終える頃には、読者は C# の強固な基礎を身に付け、さまざまなプラットフォーム向けの堅牢なアプリケーションを構築するスキルを身に付けているでしょう。",
            // Korean
            "한국인": "이 책의 주요 장점 중 하나는 클래스, 객체, 상속, 다형성 및 인터페이스와 같은 필수 프로그래밍 개념을 풍부하게 다루고 있다는 것입니다. LINQ 및 일반 컬렉션과 멀티코어 성능을 위한 PLINQ(Parallel LINQ)에 대한 초기 소개를 통해 독자는 최신 프로그래밍 과제에 대비할 수 있습니다. 또한 반응형 애플리케이션을 작성하는 데 중요한 async 및 Wait를 사용한 비동기 프로그래밍도 다룹니다. 책이 끝날 무렵 독자들은 C#에 대한 탄탄한 기초를 갖추고 다양한 플랫폼을 위한 강력한 애플리케이션을 구축할 수 있는 기술을 갖추게 될 것입니다.",
            // Spanish
            "Español": "Una de las ventajas clave de este libro es su rica cobertura de conceptos esenciales de programación como clases, objetos, herencia, polimorfismo e interfaces. La introducción temprana a LINQ y colecciones genéricas, así como a PLINQ (Parallel LINQ) para rendimiento multinúcleo, prepara a los lectores para los desafíos de programación modernos. Además, se cubre la programación asincrónica con async y await, que es crucial para escribir aplicaciones responsivas. Al final del libro, los lectores tendrán una base sólida en C# y estarán equipados con las habilidades para crear aplicaciones sólidas para una variedad de plataformas.",
            // Hindi
            "हिंदी": "इस पुस्तक का एक मुख्य लाभ यह है कि इसमें क्लास, ऑब्जेक्ट, इनहेरिटेंस, पॉलीमॉर्फिज्म और इंटरफेस जैसी आवश्यक प्रोग्रामिंग अवधारणाओं का विस्तृत विवरण दिया गया है। LINQ और जेनेरिक कलेक्शन के साथ-साथ मल्टीकोर परफॉरमेंस के लिए PLINQ (पैरेलल LINQ) का प्रारंभिक परिचय पाठकों को आधुनिक प्रोग्रामिंग चुनौतियों के लिए तैयार करता है। इसके अतिरिक्त, async और await के साथ एसिंक्रोनस प्रोग्रामिंग को कवर किया गया है, जो रिस्पॉन्सिव एप्लिकेशन लिखने के लिए महत्वपूर्ण है। पुस्तक के अंत तक, पाठकों के पास C# में एक मजबूत आधार होगा और वे विभिन्न प्लेटफ़ॉर्म के लिए मजबूत एप्लिकेशन बनाने के कौशल से लैस होंगे।",
            // Portuguese
            "Português": "Uma das principais vantagens deste livro é sua rica cobertura de conceitos essenciais de programação, como classes, objetos, herança, polimorfismo e interfaces. A introdução antecipada ao LINQ e às coleções genéricas, bem como ao PLINQ (Parallel LINQ) para desempenho multicore, prepara os leitores para os desafios modernos de programação. Além disso, é abordada a programação assíncrona com async e await, o que é crucial para escrever aplicativos responsivos. Ao final do livro, os leitores terão uma base sólida em C# e estarão equipados com as habilidades necessárias para criar aplicativos robustos para diversas plataformas.",
            // Bengali
            "বাংলা": "এই বইটির অন্যতম প্রধান সুবিধা হল ক্লাস, অবজেক্ট, উত্তরাধিকার, পলিমরফিজম এবং ইন্টারফেসের মতো প্রয়োজনীয় প্রোগ্রামিং ধারণাগুলির সমৃদ্ধ কভারেজ। LINQ এবং জেনেরিক সংগ্রহের প্রাথমিক পরিচিতি, সেইসাথে মাল্টিকোর পারফরম্যান্সের জন্য PLINQ (সমান্তরাল LINQ), পাঠকদের আধুনিক প্রোগ্রামিং চ্যালেঞ্জের জন্য প্রস্তুত করে। উপরন্তু, async এবং await সহ অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং কভার করা হয়েছে, যা প্রতিক্রিয়াশীল অ্যাপ্লিকেশন লেখার জন্য অত্যন্ত গুরুত্বপূর্ণ। বইয়ের শেষ নাগাদ, পাঠকদের C# এর একটি শক্তিশালী ভিত্তি থাকবে এবং তারা বিভিন্ন প্ল্যাটফর্মের জন্য শক্তিশালী অ্যাপ্লিকেশন তৈরি করার দক্ষতার সাথে সজ্জিত হবে।",
            // Arabic
            "عَرَبِيّ": "إحدى المزايا الرئيسية لهذا الكتاب هي تغطيته الغنية لمفاهيم البرمجة الأساسية مثل الفئات والكائنات والميراث وتعدد الأشكال والواجهات. إن المقدمة المبكرة لـ LINQ والمجموعات العامة، بالإضافة إلى PLINQ (Parallel LINQ) للأداء متعدد النواة، تعمل على إعداد القراء لمواجهة تحديات البرمجة الحديثة. بالإضافة إلى ذلك، تمت تغطية البرمجة غير المتزامنة مع المزامنة والانتظار، وهو أمر بالغ الأهمية لكتابة التطبيقات المستجيبة. بحلول نهاية الكتاب، سيكون لدى القراء أساس قوي في لغة C# وسيكونون مجهزين بالمهارات اللازمة لبناء تطبيقات قوية لمجموعة متنوعة من المنصات.",
            // Persian
            "فارسی": "یکی از مزایای کلیدی این کتاب، پوشش غنی آن از مفاهیم اساسی برنامه نویسی مانند کلاس ها، اشیاء، وراثت، چندشکلی و رابط ها است. معرفی اولیه LINQ و مجموعه های عمومی، و همچنین PLINQ (LINQ موازی) برای عملکرد چند هسته ای، خوانندگان را برای چالش های برنامه نویسی مدرن آماده می کند. علاوه بر این، برنامه‌نویسی ناهمزمان با async و await پوشش داده شده است که برای نوشتن برنامه‌های واکنش‌گرا بسیار مهم است. در پایان کتاب، خوانندگان پایه ای قوی در C# خواهند داشت و به مهارت هایی برای ساخت برنامه های کاربردی قوی برای پلتفرم های مختلف مجهز خواهند شد.",
        },
        // Paragraph 3
        {
            // English
            "English": "Moreover, the book is designed to be informative, engaging, challenging, and entertaining, making the learning process enjoyable. It is suitable for all basic-to-intermediate level courses in Visual C# programming. The broad range of example programs and exercises included in the book come from diverse fields such as computer science, business, education, and many other areas, ensuring that readers gain a well-rounded perspective on programming with C#. With this book, readers will not only learn the syntax of the C# language but also how to apply it effectively to solve real-world problems.",
            // German
            "Deutsch": "Darüber hinaus ist das Buch so konzipiert, dass es informativ, spannend, herausfordernd und unterhaltsam ist, sodass der Lernprozess Spaß macht. Es eignet sich für alle Kurse in Visual C#-Programmierung auf Grund- bis Mittelstufenniveau. Die große Auswahl an Beispielprogrammen und Übungen im Buch stammt aus unterschiedlichen Bereichen wie Informatik, Wirtschaft, Bildung und vielen anderen Bereichen und stellt sicher, dass die Leser eine umfassende Perspektive auf die Programmierung mit C# erhalten. Mit diesem Buch lernen die Leser nicht nur die Syntax der Sprache C#, sondern auch, wie sie diese effektiv anwenden können, um reale Probleme zu lösen.",
            // Chinese
            "中国人": "此外，本书内容丰富、引人入胜、富有挑战性和娱乐性，让学习过程变得愉快。它适用于 Visual C# 编程的所有基础到中级课程。本书包含的大量示例程序和练习来自计算机科学、商业、教育和许多其他领域等不同领域，确保读者对使用 C# 进行编程有一个全面的了解。通过本书，读者不仅可以学习 C# 语言的语法，还可以学习如何有效地应用它来解决实际问题。",
            // Russian
            "Русский": "Более того, книга призвана быть информативной, увлекательной, сложной и увлекательной, что делает процесс обучения приятным. Он подходит для всех курсов программирования Visual C# от базового до среднего уровня. Широкий спектр примеров программ и упражнений, включенных в книгу, взят из различных областей, таких как информатика, бизнес, образование и многие другие области, что гарантирует читателям всестороннее представление о программировании на C#. С помощью этой книги читатели не только изучат синтаксис языка C#, но и научатся эффективно его применять для решения реальных задач.",
            // French
            "Français": "De plus, le livre est conçu pour être informatif, engageant, stimulant et divertissant, rendant le processus d'apprentissage agréable. Il convient à tous les cours de programmation Visual C# de niveau basique à intermédiaire. Le large éventail d'exemples de programmes et d'exercices inclus dans le livre proviennent de divers domaines tels que l'informatique, les affaires, l'éducation et bien d'autres domaines, garantissant aux lecteurs une perspective complète sur la programmation avec C#. Avec ce livre, les lecteurs apprendront non seulement la syntaxe du langage C#, mais aussi comment l'appliquer efficacement pour résoudre des problèmes du monde réel.",
            // Japanese
            "日本語": "さらに、この本は、情報に富み、興味をそそり、やりがいがあり、楽しく、学習プロセスが楽しくなるように作られています。Visual C# プログラミングの初級から中級レベルのすべてのコースに適しています。この本に含まれる幅広いサンプル プログラムと演習は、コンピューター サイエンス、ビジネス、教育など、さまざまな分野から提供されており、読者が C# プログラミングについて幅広い視点を身に付けることができます。この本では、読者は C# 言語の構文だけでなく、それを効果的に適用して実際の問題を解決する方法も学習できます。",
            // Korean
            "한국인": "더욱이 이 책은 유익하고, 흥미롭고, 도전적이고, 재미있도록 구성되어 학습 과정을 즐겁게 만듭니다. Visual C# 프로그래밍의 모든 기초부터 중급 수준 과정에 적합합니다. 이 책에 포함된 광범위한 예제 프로그램과 연습 문제는 컴퓨터 과학, 비즈니스, 교육 및 기타 여러 분야와 같은 다양한 분야에서 제공되므로 독자는 C#을 사용한 프로그래밍에 대한 균형 잡힌 관점을 얻을 수 있습니다. 이 책을 통해 독자는 C# 언어의 구문뿐만 아니라 이를 효과적으로 적용하여 실제 문제를 해결하는 방법도 배울 수 있습니다.",
            // Spanish
            "Español": "Además, el libro está diseñado para ser informativo, atractivo, desafiante y entretenido, haciendo que el proceso de aprendizaje sea agradable. Es adecuado para todos los cursos de nivel básico a intermedio en programación en Visual C#. La amplia gama de programas de ejemplo y ejercicios incluidos en el libro provienen de diversos campos, como la informática, los negocios, la educación y muchas otras áreas, lo que garantiza que los lectores obtengan una perspectiva completa sobre la programación con C#. Con este libro, los lectores no sólo aprenderán la sintaxis del lenguaje C# sino también cómo aplicarlo de manera efectiva para resolver problemas del mundo real.",
            // Hindi
            "हिंदी": "इसके अलावा, पुस्तक को जानकारीपूर्ण, आकर्षक, चुनौतीपूर्ण और मनोरंजक बनाने के लिए डिज़ाइन किया गया है, जिससे सीखने की प्रक्रिया आनंददायक हो जाती है। यह Visual C# प्रोग्रामिंग में सभी बुनियादी से लेकर मध्यवर्ती स्तर के पाठ्यक्रमों के लिए उपयुक्त है। पुस्तक में शामिल उदाहरण कार्यक्रमों और अभ्यासों की विस्तृत श्रृंखला कंप्यूटर विज्ञान, व्यवसाय, शिक्षा और कई अन्य क्षेत्रों जैसे विविध क्षेत्रों से आती है, यह सुनिश्चित करते हुए कि पाठकों को C# के साथ प्रोग्रामिंग पर एक अच्छी तरह से गोल परिप्रेक्ष्य प्राप्त होता है। इस पुस्तक के साथ, पाठक न केवल C# भाषा के वाक्यविन्यास को सीखेंगे, बल्कि वास्तविक दुनिया की समस्याओं को हल करने के लिए इसे प्रभावी ढंग से लागू करना भी सीखेंगे।",
            // Portuguese
            "Português": "Além disso, o livro foi projetado para ser informativo, envolvente, desafiador e divertido, tornando o processo de aprendizagem agradável. É adequado para todos os cursos de nível básico a intermediário em programação Visual C#. A ampla gama de exemplos de programas e exercícios incluídos no livro vem de diversos campos, como ciência da computação, negócios, educação e muitas outras áreas, garantindo que os leitores obtenham uma perspectiva completa sobre programação com C#. Com este livro, os leitores aprenderão não apenas a sintaxe da linguagem C#, mas também como aplicá-la de maneira eficaz para resolver problemas do mundo real.",
            // Bengali
            "বাংলা": "অধিকন্তু, বইটি তথ্যপূর্ণ, আকর্ষক, চ্যালেঞ্জিং এবং বিনোদনমূলক, শেখার প্রক্রিয়াটিকে আনন্দদায়ক করার জন্য ডিজাইন করা হয়েছে। এটি ভিজ্যুয়াল C# প্রোগ্রামিং-এর সমস্ত মৌলিক থেকে মধ্যবর্তী স্তরের কোর্সের জন্য উপযুক্ত। বইটিতে অন্তর্ভুক্ত উদাহরণ প্রোগ্রাম এবং অনুশীলনের বিস্তৃত পরিসর বিভিন্ন ক্ষেত্র যেমন কম্পিউটার বিজ্ঞান, ব্যবসা, শিক্ষা এবং অন্যান্য অনেক ক্ষেত্র থেকে আসে, এটি নিশ্চিত করে যে পাঠকরা C# এর সাথে প্রোগ্রামিং সম্পর্কে একটি সুসংহত দৃষ্টিভঙ্গি অর্জন করে। এই বইটির মাধ্যমে, পাঠকরা শুধুমাত্র C# ভাষার সিনট্যাক্স শিখবে না বরং বাস্তব-বিশ্বের সমস্যা সমাধানের জন্য কীভাবে এটি কার্যকরভাবে প্রয়োগ করা যায় তাও শিখবে।",
            // Arabic
            "عَرَبِيّ": "علاوة على ذلك، تم تصميم الكتاب ليكون مفيدًا وجذابًا وصعبًا ومسليًا، مما يجعل عملية التعلم ممتعة. إنها مناسبة لجميع دورات المستوى الأساسي إلى المتوسط ​​في برمجة Visual C#. تأتي المجموعة الواسعة من أمثلة البرامج والتمارين المتضمنة في الكتاب من مجالات متنوعة مثل علوم الكمبيوتر والأعمال والتعليم والعديد من المجالات الأخرى، مما يضمن حصول القراء على منظور شامل حول البرمجة باستخدام C#. مع هذا الكتاب، لن يتعلم القراء بناء جملة لغة C# فحسب، بل سيتعلمون أيضًا كيفية تطبيقها بفعالية لحل مشكلات العالم الحقيقي.",
            // Persian
            "فارسی": "علاوه بر این، کتاب به گونه ای طراحی شده است که آموزنده، جذاب، چالش برانگیز و سرگرم کننده باشد و فرآیند یادگیری را لذت بخش کند. برای تمام دوره های پایه تا متوسط ​​برنامه نویسی ویژوال سی شارپ مناسب است. طیف وسیعی از برنامه‌ها و تمرین‌های نمونه موجود در این کتاب از زمینه‌های متنوعی مانند علوم کامپیوتر، تجارت، آموزش و بسیاری از زمینه‌های دیگر می‌آیند و اطمینان می‌دهند که خوانندگان دیدگاهی جامع در مورد برنامه‌نویسی با سی شارپ به دست می‌آورند. با این کتاب، خوانندگان نه تنها نحو زبان سی شارپ را یاد خواهند گرفت، بلکه نحوه به کارگیری موثر آن برای حل مشکلات دنیای واقعی را نیز یاد خواهند گرفت.",
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
        document.title = "MHA - " + visual_c_sharp_how_to_program["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = visual_c_sharp_how_to_program["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = visual_c_sharp_how_to_program["TotalDescriptionAboutTheBook"][index][newLanguage];
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