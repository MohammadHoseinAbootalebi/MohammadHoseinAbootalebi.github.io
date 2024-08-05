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
var deep_learning_from_scratch = {
    "BookName": "Deep Learning from Scratch",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Foundation",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter lays the groundwork for understanding neural networks by introducing essential concepts such as functions, derivatives, and the chain rule, which are crucial for computing outputs from complex nested functions. It emphasizes the importance of viewing these concepts from three perspectives—mathematical equations, code implementation, and visual diagrams—to gain a comprehensive understanding. The chapter also highlights the role of matrix operations in deep learning and prepares readers for the practical application of these foundational ideas in building and training neural networks in later chapters.",
                // German
                "Deutsch": "Dieses Kapitel legt die Grundlagen zum Verständnis neuronaler Netzwerke, indem es grundlegende Konzepte wie Funktionen, Ableitungen und die Kettenregel vorstellt, die für die Berechnung von Ausgaben komplexer verschachtelter Funktionen entscheidend sind. Es betont, wie wichtig es ist, diese Konzepte aus drei Perspektiven zu betrachten – mathematische Gleichungen, Codeimplementierung und visuelle Diagramme – um ein umfassendes Verständnis zu erlangen. Das Kapitel beleuchtet auch die Rolle von Matrixoperationen beim Deep Learning und bereitet die Leser auf die praktische Anwendung dieser grundlegenden Ideen beim Aufbau und Training neuronaler Netzwerke in späteren Kapiteln vor.",
                // Chinese
                "中国人": "本章通过介绍函数、导数和链式法则等基本概念为理解神经网络奠定了基础，这些概念对于计算复杂嵌套函数的输出至关重要。它强调了从三个角度（数学方程、代码实现和可视化图表）看待这些概念的重要性，以获得全面的理解。本章还强调了矩阵运算在深度学习中的作用，并为读者在后面的章节中将这些基础思想在构建和训练神经网络中实际应用做好准备。",
                // Russian
                "Русский": "В этой главе закладывается основа для понимания нейронных сетей путем введения таких важных понятий, как функции, производные и цепное правило, которые имеют решающее значение для вычисления выходных данных сложных вложенных функций. В ней подчеркивается важность рассмотрения этих концепций с трех точек зрения — математических уравнений, реализации кода и визуальных диаграмм — для получения всестороннего понимания. В главе также подчеркивается роль матричных операций в глубоком обучении и готовится читатель к практическому применению этих основополагающих идей при построении и обучении нейронных сетей в последующих главах.",
                // French
                "Français": "Ce chapitre pose les bases de la compréhension des réseaux neuronaux en introduisant des concepts essentiels tels que les fonctions, les dérivées et la règle de la chaîne, qui sont essentiels pour calculer les résultats de fonctions imbriquées complexes. Il souligne l'importance d'examiner ces concepts sous trois angles (équations mathématiques, implémentation de code et diagrammes visuels) pour acquérir une compréhension globale. Le chapitre met également en évidence le rôle des opérations matricielles dans l'apprentissage profond et prépare les lecteurs à l'application pratique de ces idées fondamentales dans la construction et la formation de réseaux neuronaux dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、関数、導関数、連鎖律などの、複雑にネストされた関数からの出力を計算するために不可欠な基本概念を紹介し、ニューラル ネットワークを理解するための基礎を築きます。包括的な理解を得るには、これらの概念を数式、コード実装、視覚的な図の 3 つの観点から見ることが重要であることを強調します。また、この章では、ディープラーニングにおける行列演算の役割にも焦点を当て、後の章でニューラル ネットワークの構築とトレーニングにこれらの基本的な考え方を実際に適用できるように読者を準備します。",
                // Korean
                "한국인": "이 장에서는 함수, 미분, 체인 규칙과 같은 필수 개념을 소개함으로써 신경망을 이해하기 위한 기초를 마련합니다. 이러한 개념은 복잡한 중첩 함수의 출력을 계산하는 데 필수적입니다. 이 장은 이러한 개념을 수학 방정식, 코드 구현, 시각적 다이어그램의 세 가지 관점에서 보는 것의 중요성을 강조하여 포괄적으로 이해합니다. 이 장에서는 또한 딥 러닝에서 행렬 연산의 역할을 강조하고 독자들에게 이후 장에서 신경망을 구축하고 훈련하는 데 이러한 기본 아이디어를 실제로 적용할 수 있도록 준비시킵니다.",
                // Spanish
                "Español": "Este capítulo sienta las bases para comprender las redes neuronales al presentar conceptos esenciales como funciones, derivadas y la regla de la cadena, que son cruciales para calcular los resultados de funciones anidadas complejas. Destaca la importancia de ver estos conceptos desde tres perspectivas (ecuaciones matemáticas, implementación de código y diagramas visuales) para obtener una comprensión integral. El capítulo también destaca el papel de las operaciones matriciales en el aprendizaje profundo y prepara a los lectores para la aplicación práctica de estas ideas fundamentales en la construcción y el entrenamiento de redes neuronales en capítulos posteriores.",
                // Hindi
                "हिंदी": "यह अध्याय फ़ंक्शन, डेरिवेटिव और चेन रूल जैसी आवश्यक अवधारणाओं को पेश करके न्यूरल नेटवर्क को समझने के लिए आधार तैयार करता है, जो जटिल नेस्टेड फ़ंक्शन से आउटपुट की गणना करने के लिए महत्वपूर्ण हैं। यह इन अवधारणाओं को तीन दृष्टिकोणों से देखने के महत्व पर जोर देता है - गणितीय समीकरण, कोड कार्यान्वयन और दृश्य आरेख - एक व्यापक समझ हासिल करने के लिए। अध्याय डीप लर्निंग में मैट्रिक्स ऑपरेशन की भूमिका पर भी प्रकाश डालता है और पाठकों को बाद के अध्यायों में न्यूरल नेटवर्क के निर्माण और प्रशिक्षण में इन मूलभूत विचारों के व्यावहारिक अनुप्रयोग के लिए तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo estabelece as bases para a compreensão das redes neuronais, introduzindo conceitos essenciais como funções, derivadas e regra da cadeia, que são cruciais para calcular resultados de funções aninhadas complexas. Realça a importância de visualizar estes conceitos a partir de três perspetivas – equações matemáticas, implementação de código e diagramas visuais – para obter uma compreensão abrangente. O capítulo destaca também o papel das operações matriciais na aprendizagem profunda e prepara os leitores para a aplicação prática destas ideias fundamentais na construção e treino de redes neuronais em capítulos posteriores.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি ফাংশন, ডেরিভেটিভস এবং চেইন নিয়মের মতো প্রয়োজনীয় ধারণাগুলি প্রবর্তন করে নিউরাল নেটওয়ার্কগুলি বোঝার জন্য ভিত্তি তৈরি করে, যা জটিল নেস্টেড ফাংশনগুলি থেকে আউটপুট গণনার জন্য অত্যন্ত গুরুত্বপূর্ণ। এটি এই ধারণাগুলিকে তিনটি দৃষ্টিকোণ থেকে দেখার গুরুত্বের ওপর জোর দেয়—গাণিতিক সমীকরণ, কোড বাস্তবায়ন এবং ভিজ্যুয়াল ডায়াগ্রাম—একটি ব্যাপক বোঝার জন্য। অধ্যায়টি গভীর শিক্ষায় ম্যাট্রিক্স ক্রিয়াকলাপের ভূমিকাকেও তুলে ধরে এবং পরবর্তী অধ্যায়গুলিতে নিউরাল নেটওয়ার্ক তৈরি এবং প্রশিক্ষণে এই মৌলিক ধারণাগুলির ব্যবহারিক প্রয়োগের জন্য পাঠকদের প্রস্তুত করে।",
                // Arabic
                "عَرَبِيّ": "يضع هذا الفصل الأساس لفهم الشبكات العصبية من خلال تقديم مفاهيم أساسية مثل الوظائف والمشتقات وقاعدة السلسلة، والتي تعد حاسمة لحساب المخرجات من الوظائف المتداخلة المعقدة. ويؤكد على أهمية النظر إلى هذه المفاهيم من ثلاثة مناظير - المعادلات الرياضية وتنفيذ التعليمات البرمجية والرسوم البيانية المرئية - للحصول على فهم شامل. يسلط الفصل الضوء أيضًا على دور عمليات المصفوفة في التعلم العميق ويجهز القراء للتطبيق العملي لهذه الأفكار الأساسية في بناء وتدريب الشبكات العصبية في الفصول اللاحقة.",
                // Persian
                "فارسی": "این فصل با معرفی مفاهیم اساسی مانند توابع، مشتقات و قانون زنجیره، که برای محاسبه خروجی از توابع پیچیده تو در تو ضروری هستند، زمینه را برای درک شبکه های عصبی فراهم می کند. این بر اهمیت مشاهده این مفاهیم از سه منظر - معادلات ریاضی، اجرای کد و نمودارهای بصری - برای به دست آوردن یک درک جامع تأکید می کند. این فصل همچنین نقش عملیات ماتریس را در یادگیری عمیق برجسته می کند و خوانندگان را برای کاربرد عملی این ایده های اساسی در ساخت و آموزش شبکه های عصبی در فصل های بعدی آماده می کند.",
            },
        },
        // 2
        {
            "ChapterName": "Fundamentals",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter delves into the fundamentals of deep learning by exploring nested, continuous, differentiable functions and their representation as computational graphs, which facilitate the calculation of derivatives using the chain rule. It focuses on supervised learning, particularly in modeling relationships between measurable characteristics, such as those of houses, and their values, while emphasizing the significance of feature engineering. The chapter also introduces linear regression and neural networks, illustrating how these models can learn complex, nonlinear relationships through a structured training process involving forward and backward passes to optimize parameters based on computed gradients.",
                // German
                "Deutsch": "Dieses Kapitel befasst sich mit den Grundlagen des Deep Learning, indem es verschachtelte, kontinuierliche, differenzierbare Funktionen und ihre Darstellung als Rechengraphen untersucht, die die Berechnung von Ableitungen mithilfe der Kettenregel erleichtern. Es konzentriert sich auf überwachtes Lernen, insbesondere bei der Modellierung von Beziehungen zwischen messbaren Merkmalen wie denen von Häusern und ihren Werten, und betont gleichzeitig die Bedeutung des Feature Engineering. Das Kapitel führt auch lineare Regression und neuronale Netzwerke ein und zeigt, wie diese Modelle komplexe, nichtlineare Beziehungen durch einen strukturierten Trainingsprozess erlernen können, der Vorwärts- und Rückwärtsdurchläufe umfasst, um Parameter basierend auf berechneten Gradienten zu optimieren.",
                // Chinese
                "中国人": "本章通过探索嵌套的、连续的、可微分的函数及其作为计算图的表示来深入研究深度学习的基础知识，这有助于使用链式法则计算导数。它侧重于监督学习，特别是在建模可测量特征（例如房屋特征）与其价值之间的关系时，同时强调特征工程的重要性。本章还介绍了线性回归和神经网络，说明了这些模型如何通过涉及前向和后向传递的结构化训练过程来学习复杂的非线性关系，以根据计算的梯度优化参数。",
                // Russian
                "Русский": "В этой главе рассматриваются основы глубокого обучения путем изучения вложенных, непрерывных, дифференцируемых функций и их представления в виде вычислительных графов, которые облегчают вычисление производных с использованием цепного правила. Основное внимание уделяется контролируемому обучению, в частности, моделированию взаимосвязей между измеримыми характеристиками, такими как характеристики домов, и их значениями, при этом подчеркивается важность проектирования признаков. В главе также вводятся линейная регрессия и нейронные сети, иллюстрирующие, как эти модели могут изучать сложные нелинейные взаимосвязи посредством структурированного процесса обучения, включающего прямые и обратные проходы для оптимизации параметров на основе вычисленных градиентов.",
                // French
                "Français": "Ce chapitre aborde les fondamentaux de l'apprentissage profond en explorant les fonctions imbriquées, continues et différentiables et leur représentation sous forme de graphes informatiques, qui facilitent le calcul des dérivées à l'aide de la règle de la chaîne. Il se concentre sur l'apprentissage supervisé, en particulier dans la modélisation des relations entre les caractéristiques mesurables, telles que celles des maisons, et leurs valeurs, tout en soulignant l'importance de l'ingénierie des caractéristiques. Le chapitre présente également la régression linéaire et les réseaux neuronaux, illustrant comment ces modèles peuvent apprendre des relations complexes et non linéaires grâce à un processus d'apprentissage structuré impliquant des passes avant et arrière pour optimiser les paramètres en fonction des gradients calculés.",
                // Japanese
                "日本語": "この章では、ネストされた連続微分可能関数と、連鎖律を使用した導関数の計算を容易にする計算グラフとしてのその表現を探求することで、ディープラーニングの基礎を詳しく解説します。特に、家屋などの測定可能な特性とその値の関係をモデル化する教師あり学習に焦点を当て、特徴エンジニアリングの重要性を強調します。また、この章では線形回帰とニューラル ネットワークを紹介し、計算された勾配に基づいてパラメータを最適化するために、順方向パスと逆方向パスを含む構造化トレーニング プロセスを通じて、これらのモデルが複雑で非線形な関係を学習する方法を説明します。",
                // Korean
                "한국인": "이 장에서는 중첩, 연속, 미분 가능 함수와 이를 계산 그래프로 표현하는 방법을 탐구하여 딥 러닝의 기본을 탐구합니다. 이를 통해 체인 규칙을 사용하여 미분을 계산할 수 있습니다. 특히 주택과 같은 측정 가능한 특성과 가치 간의 관계를 모델링하는 데 있어 지도 학습에 초점을 맞추면서 피처 엔지니어링의 중요성을 강조합니다. 또한 선형 회귀와 신경망을 소개하여 이러한 모델이 계산된 그래디언트를 기반으로 매개변수를 최적화하기 위해 전방 및 후방 패스를 포함하는 구조화된 학습 프로세스를 통해 복잡한 비선형 관계를 학습하는 방법을 설명합니다.",
                // Spanish
                "Español": "Este capítulo profundiza en los fundamentos del aprendizaje profundo mediante la exploración de funciones anidadas, continuas y diferenciables y su representación como gráficos computacionales, que facilitan el cálculo de derivadas mediante la regla de la cadena. Se centra en el aprendizaje supervisado, en particular en el modelado de relaciones entre características mensurables, como las de las casas, y sus valores, al tiempo que enfatiza la importancia de la ingeniería de características. El capítulo también presenta la regresión lineal y las redes neuronales, ilustrando cómo estos modelos pueden aprender relaciones complejas y no lineales a través de un proceso de entrenamiento estructurado que implica pases hacia adelante y hacia atrás para optimizar los parámetros en función de los gradientes calculados.",
                // Hindi
                "हिंदी": "यह अध्याय नेस्टेड, निरंतर, विभेदक कार्यों और कम्प्यूटेशनल ग्राफ़ के रूप में उनके प्रतिनिधित्व की खोज करके डीप लर्निंग के मूल सिद्धांतों में गहराई से उतरता है, जो चेन नियम का उपयोग करके डेरिवेटिव की गणना की सुविधा प्रदान करता है। यह सुपरवाइज्ड लर्निंग पर ध्यान केंद्रित करता है, विशेष रूप से मापनीय विशेषताओं, जैसे कि घरों और उनके मूल्यों के बीच संबंधों को मॉडलिंग करने में, जबकि फीचर इंजीनियरिंग के महत्व पर जोर देता है। अध्याय रैखिक प्रतिगमन और तंत्रिका नेटवर्क का भी परिचय देता है, यह दर्शाता है कि कैसे ये मॉडल गणना किए गए ग्रेडिएंट के आधार पर मापदंडों को अनुकूलित करने के लिए आगे और पीछे के पास को शामिल करते हुए एक संरचित प्रशिक्षण प्रक्रिया के माध्यम से जटिल, गैर-रैखिक संबंधों को सीख सकते हैं।",
                // Portuguese
                "Português": "Este capítulo investiga os fundamentos da aprendizagem profunda, explorando funções aninhadas, contínuas e diferenciáveis ​​e a sua representação como gráficos computacionais, que facilitam o cálculo de derivadas utilizando a regra da cadeia. Foca-se na aprendizagem supervisionada, particularmente na modelação de relações entre características mensuráveis, como as das casas, e os seus valores, ao mesmo tempo que enfatiza a importância da engenharia de recursos. O capítulo apresenta também a regressão linear e as redes neuronais, ilustrando como estes modelos podem aprender relações complexas e não lineares através de um processo de treino estruturado que envolve passagens para a frente e para trás para otimizar parâmetros com base em gradientes calculados.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি নেস্টেড, ক্রমাগত, পার্থক্যযোগ্য ফাংশনগুলি এবং গণনামূলক গ্রাফ হিসাবে তাদের উপস্থাপনা অন্বেষণ করে গভীর শিক্ষার মৌলিক বিষয়গুলি নিয়ে আলোচনা করে, যা চেইন নিয়ম ব্যবহার করে ডেরিভেটিভের গণনাকে সহজতর করে। এটি তত্ত্বাবধানে শিক্ষার উপর ফোকাস করে, বিশেষ করে পরিমাপযোগ্য বৈশিষ্ট্যগুলির মধ্যে মডেলিং সম্পর্কের ক্ষেত্রে, যেমন ঘরগুলির এবং তাদের মানগুলির মধ্যে, যখন বৈশিষ্ট্য প্রকৌশলের তাত্পর্যকে জোর দেয়। অধ্যায়টি রৈখিক রিগ্রেশন এবং নিউরাল নেটওয়ার্কগুলিকেও প্রবর্তন করে, কীভাবে এই মডেলগুলি কম্পিউটেড গ্রেডিয়েন্টের উপর ভিত্তি করে পরামিতিগুলিকে অপ্টিমাইজ করার জন্য ফরোয়ার্ড এবং পশ্চাদগামী পাস জড়িত একটি কাঠামোগত প্রশিক্ষণ প্রক্রিয়ার মাধ্যমে জটিল, অরৈখিক সম্পর্ক শিখতে পারে।",
                // Arabic
                "عَرَبِيّ": "يتناول هذا الفصل أساسيات التعلم العميق من خلال استكشاف الدوال المتداخلة والمتصلة والقابلة للتفاضل وتمثيلها كرسوم بيانية حسابية، مما يسهل حساب المشتقات باستخدام قاعدة السلسلة. ويركز على التعلم الخاضع للإشراف، وخاصة في نمذجة العلاقات بين الخصائص القابلة للقياس، مثل خصائص المنازل، وقيمها، مع التأكيد على أهمية هندسة الميزات. كما يقدم الفصل الانحدار الخطي والشبكات العصبية، موضحًا كيف يمكن لهذه النماذج تعلم العلاقات المعقدة وغير الخطية من خلال عملية تدريب منظمة تتضمن تمريرات للأمام والخلف لتحسين المعلمات بناءً على التدرجات المحسوبة.",
                // Persian
                "فارسی": "این فصل با کاوش توابع تودرتو، پیوسته و قابل تمایز و نمایش آنها به عنوان نمودارهای محاسباتی، که محاسبه مشتقات را با استفاده از قانون زنجیره تسهیل می کند، به اصول یادگیری عمیق می پردازد. بر یادگیری تحت نظارت، به ویژه در مدل‌سازی روابط بین ویژگی‌های قابل اندازه‌گیری، مانند ویژگی‌های خانه‌ها، و ارزش‌های آنها تمرکز دارد، در حالی که بر اهمیت مهندسی ویژگی تأکید می‌کند. این فصل همچنین رگرسیون خطی و شبکه‌های عصبی را معرفی می‌کند و نشان می‌دهد که چگونه این مدل‌ها می‌توانند روابط پیچیده و غیرخطی را از طریق یک فرآیند آموزشی ساختاریافته شامل پاس‌های رو به جلو و عقب برای بهینه‌سازی پارامترها بر اساس گرادیان‌های محاسبه‌شده بیاموزند.",
            },
        },
        // 3
        {
            "ChapterName": "Deep Learning from Scratch",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on the foundational concepts of neural networks, explaining how they are constructed from mathematical operations represented as Python classes. It details the process of training these models through forward and backward passes, calculating loss, and updating parameters using gradients derived from the chain rule. The chapter emphasizes the importance of layers, which consist of a series of linear and nonlinear operations, and illustrates how building deeper models with multiple hidden layers can enhance performance, setting the stage for more complex deep learning techniques in subsequent chapters.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die grundlegenden Konzepte neuronaler Netzwerke und um deren Aufbau aus mathematischen Operationen, die als Python-Klassen dargestellt werden. Es beschreibt detailliert den Prozess des Trainierens dieser Modelle durch Vorwärts- und Rückwärtsdurchläufe, das Berechnen von Verlusten und das Aktualisieren von Parametern mithilfe von Gradienten, die aus der Kettenregel abgeleitet werden. Das Kapitel betont die Bedeutung von Schichten, die aus einer Reihe linearer und nichtlinearer Operationen bestehen, und veranschaulicht, wie der Aufbau tieferer Modelle mit mehreren verborgenen Schichten die Leistung verbessern kann, wodurch die Grundlage für komplexere Deep-Learning-Techniken in den folgenden Kapiteln geschaffen wird.",
                // Chinese
                "中国人": "本章重点介绍神经网络的基本概念，解释如何通过以 Python 类表示的数学运算构建神经网络。它详细介绍了通过正向和反向传递训练这些模型、计算损失以及使用从链式法则得出的梯度更新参数的过程。本章强调了由一系列线性和非线性运算组成的层的重要性，并说明了如何构建具有多个隐藏层的更深层模型来提高性能，为后续章节中更复杂的深度学习技术奠定了基础。",
                // Russian
                "Русский": "В этой главе рассматриваются основные концепции нейронных сетей, объясняется, как они строятся из математических операций, представленных в виде классов Python. В ней подробно описывается процесс обучения этих моделей с помощью прямых и обратных проходов, вычисления потерь и обновления параметров с использованием градиентов, полученных из цепного правила. В главе подчеркивается важность слоев, которые состоят из ряда линейных и нелинейных операций, и иллюстрируется, как построение более глубоких моделей с несколькими скрытыми слоями может повысить производительность, подготавливая почву для более сложных методов глубокого обучения в последующих главах.",
                // French
                "Français": "Ce chapitre se concentre sur les concepts fondamentaux des réseaux neuronaux, expliquant comment ils sont construits à partir d'opérations mathématiques représentées sous forme de classes Python. Il détaille le processus d'entraînement de ces modèles via des passes avant et arrière, le calcul des pertes et la mise à jour des paramètres à l'aide de gradients dérivés de la règle de la chaîne. Le chapitre souligne l'importance des couches, qui consistent en une série d'opérations linéaires et non linéaires, et illustre comment la création de modèles plus profonds avec plusieurs couches cachées peut améliorer les performances, ouvrant la voie à des techniques d'apprentissage en profondeur plus complexes dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、ニューラル ネットワークの基本概念に焦点を当て、Python クラスとして表される数学演算からニューラル ネットワークがどのように構築されるかを説明します。また、順方向パスと逆方向パスによるこれらのモデルのトレーニング、損失の計算、連鎖律から得られる勾配を使用したパラメータの更新のプロセスについて詳しく説明します。この章では、一連の線形および非線形演算で構成されるレイヤーの重要性を強調し、複数の隠しレイヤーを持つより深いモデルを構築することでパフォーマンスを向上させる方法を示し、後続の章でより複雑なディープラーニング手法の基礎を築きます。",
                // Korean
                "한국인": "이 장에서는 신경망의 기본 개념에 초점을 맞추고, 파이썬 클래스로 표현된 수학적 연산에서 신경망이 어떻게 구성되는지 설명합니다. 이 장에서는 전방 및 후방 패스를 통해 이러한 모델을 학습하고, 손실을 계산하고, 체인 규칙에서 파생된 그래디언트를 사용하여 매개변수를 업데이트하는 프로세스를 자세히 설명합니다. 이 장에서는 일련의 선형 및 비선형 연산으로 구성된 계층의 중요성을 강조하고, 여러 개의 숨겨진 계층으로 더 깊은 모델을 구축하는 것이 어떻게 성능을 향상시킬 수 있는지 보여 주며, 후속 장에서 더 복잡한 딥 러닝 기술을 위한 무대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo se centra en los conceptos básicos de las redes neuronales y explica cómo se construyen a partir de operaciones matemáticas representadas como clases de Python. Detalla el proceso de entrenamiento de estos modelos mediante pases hacia adelante y hacia atrás, el cálculo de pérdidas y la actualización de parámetros mediante gradientes derivados de la regla de la cadena. El capítulo enfatiza la importancia de las capas, que consisten en una serie de operaciones lineales y no lineales, e ilustra cómo la creación de modelos más profundos con múltiples capas ocultas puede mejorar el rendimiento, lo que prepara el terreno para técnicas de aprendizaje profundo más complejas en los capítulos posteriores.",
                // Hindi
                "हिंदी": "यह अध्याय तंत्रिका नेटवर्क की मूलभूत अवधारणाओं पर ध्यान केंद्रित करता है, यह समझाते हुए कि उन्हें पायथन कक्षाओं के रूप में दर्शाए गए गणितीय संचालन से कैसे बनाया जाता है। यह इन मॉडलों को आगे और पीछे के पास के माध्यम से प्रशिक्षित करने, हानि की गणना करने और चेन नियम से प्राप्त ग्रेडिएंट का उपयोग करके मापदंडों को अपडेट करने की प्रक्रिया का विवरण देता है। अध्याय परतों के महत्व पर जोर देता है, जिसमें रैखिक और गैर-रैखिक संचालन की एक श्रृंखला शामिल है, और यह दर्शाता है कि कई छिपी परतों के साथ गहरे मॉडल का निर्माण कैसे प्रदर्शन को बढ़ा सकता है, जो बाद के अध्यायों में अधिक जटिल गहन शिक्षण तकनीकों के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se nos conceitos fundamentais das redes neuronais, explicando como são construídas a partir de operações matemáticas representadas como classes Python. Detalha o processo de treino destes modelos através de passagens para a frente e para trás, cálculo de perdas e atualização de parâmetros usando gradientes derivados da regra da cadeia. O capítulo enfatiza a importância das camadas, que consistem numa série de operações lineares e não lineares, e ilustra como a construção de modelos mais profundos com múltiplas camadas ocultas pode melhorar o desempenho, preparando o terreno para técnicas de aprendizagem profunda mais complexas nos capítulos subsequentes.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি নিউরাল নেটওয়ার্কগুলির ভিত্তিগত ধারণাগুলির উপর আলোকপাত করে, ব্যাখ্যা করে যে কীভাবে এগুলি পাইথন ক্লাস হিসাবে উপস্থাপিত গাণিতিক ক্রিয়াকলাপগুলি থেকে তৈরি করা হয়। এটি শৃঙ্খল নিয়ম থেকে প্রাপ্ত গ্রেডিয়েন্টগুলি ব্যবহার করে এই মডেলগুলিকে এগিয়ে এবং পিছনের পাস, ক্ষতি গণনা এবং পরামিতি আপডেট করার মাধ্যমে প্রশিক্ষণের প্রক্রিয়ার বিবরণ দেয়। অধ্যায়টি স্তরগুলির গুরুত্বের উপর জোর দেয়, যা রৈখিক এবং অরৈখিক ক্রিয়াকলাপগুলির একটি সিরিজ নিয়ে গঠিত, এবং ব্যাখ্যা করে যে কীভাবে একাধিক লুকানো স্তরগুলির সাথে গভীর মডেলগুলি তৈরি করা কর্মক্ষমতা বাড়াতে পারে, পরবর্তী অধ্যায়গুলিতে আরও জটিল গভীর শিক্ষার কৌশলগুলির জন্য মঞ্চ স্থাপন করে৷",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على المفاهيم الأساسية للشبكات العصبية، موضحًا كيف يتم بناؤها من العمليات الرياضية الممثلة كفئات بايثون. كما يوضح بالتفصيل عملية تدريب هذه النماذج من خلال التمريرات الأمامية والخلفية، وحساب الخسارة، وتحديث المعلمات باستخدام التدرجات المستمدة من قاعدة السلسلة. ويؤكد الفصل على أهمية الطبقات، التي تتكون من سلسلة من العمليات الخطية وغير الخطية، ويوضح كيف يمكن لبناء نماذج أعمق مع طبقات مخفية متعددة أن يعزز الأداء، مما يمهد الطريق لتقنيات التعلم العميق الأكثر تعقيدًا في الفصول اللاحقة.",
                // Persian
                "فارسی": "این فصل بر مفاهیم اساسی شبکه های عصبی تمرکز دارد و توضیح می دهد که چگونه آنها از عملیات ریاضی که به عنوان کلاس های پایتون نمایش داده می شوند ساخته می شوند. جزئیات فرآیند آموزش این مدل‌ها از طریق پاس‌های رو به جلو و عقب، محاسبه تلفات و به‌روزرسانی پارامترها با استفاده از گرادیان‌های به دست آمده از قانون زنجیره‌ای. این فصل بر اهمیت لایه‌ها که شامل یک سری عملیات خطی و غیرخطی است تأکید می‌کند و نشان می‌دهد که چگونه ساخت مدل‌های عمیق‌تر با لایه‌های مخفی متعدد می‌تواند عملکرد را افزایش دهد و زمینه را برای تکنیک‌های یادگیری عمیق پیچیده‌تر در فصل‌های بعدی فراهم کند.",
            },
        },
        // 4
        {
            "ChapterName": "Extensions",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on enhancing the training of neural networks by introducing essential techniques that improve their ability to find optimal solutions. It discusses the importance of minimizing loss functions, particularly the softmax cross entropy loss for classification tasks, and highlights the benefits of using activation functions like Tanh for better gradient flow. The chapter also covers momentum for weight updates, learning rate decay for gradual convergence, proper weight initialization to maintain variance, and dropout as a method to prevent overfitting, ultimately demonstrating how these strategies can lead to more effective deep learning models.",
                // German
                "Deutsch": "In diesem Kapitel geht es darum, das Training neuronaler Netzwerke zu verbessern, indem grundlegende Techniken vorgestellt werden, die ihre Fähigkeit verbessern, optimale Lösungen zu finden. Es erörtert die Bedeutung der Minimierung von Verlustfunktionen, insbesondere des Softmax-Kreuzentropieverlusts für Klassifizierungsaufgaben, und hebt die Vorteile der Verwendung von Aktivierungsfunktionen wie Tanh für einen besseren Gradientenfluss hervor. Das Kapitel behandelt auch Impulse für Gewichtsaktualisierungen, Lernratenabfall für allmähliche Konvergenz, richtige Gewichtsinitialisierung zur Beibehaltung der Varianz und Dropout als Methode zur Vermeidung von Überanpassung und zeigt letztendlich, wie diese Strategien zu effektiveren Deep-Learning-Modellen führen können.",
                // Chinese
                "中国人": "本章重点介绍提高神经网络寻找最优解能力的基本技术，从而增强神经网络的训练。本章讨论了最小化损失函数（尤其是分类任务中的 softmax 交叉熵损失）的重要性，并强调了使用 Tanh 等激活函数实现更好的梯度流的好处。本章还介绍了权重更新的动量、逐步收敛的学习率衰减、保持方差的适当权重初始化以及防止过度拟合的 dropout 方法，最终展示了这些策略如何产生更有效的深度学习模型。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется улучшению обучения нейронных сетей путем введения основных методов, которые улучшают их способность находить оптимальные решения. В ней обсуждается важность минимизации функций потерь, в частности, потери перекрестной энтропии softmax для задач классификации, и подчеркиваются преимущества использования функций активации, таких как Tanh, для лучшего градиентного потока. В главе также рассматривается импульс для обновлений веса, снижение скорости обучения для постепенной сходимости, правильная инициализация веса для поддержания дисперсии и отсев как метод предотвращения переобучения, в конечном итоге демонстрируя, как эти стратегии могут привести к более эффективным моделям глубокого обучения.",
                // French
                "Français": "Ce chapitre se concentre sur l'amélioration de la formation des réseaux neuronaux en introduisant des techniques essentielles qui améliorent leur capacité à trouver des solutions optimales. Il aborde l'importance de minimiser les fonctions de perte, en particulier la perte d'entropie croisée softmax pour les tâches de classification, et souligne les avantages de l'utilisation de fonctions d'activation comme Tanh pour un meilleur flux de gradient. Le chapitre couvre également l'élan pour les mises à jour de poids, la décroissance du taux d'apprentissage pour une convergence progressive, l'initialisation appropriée du poids pour maintenir la variance et le décrochage comme méthode pour éviter le surajustement, démontrant finalement comment ces stratégies peuvent conduire à des modèles d'apprentissage profond plus efficaces.",
                // Japanese
                "日本語": "この章では、ニューラル ネットワークのトレーニングを強化するために、最適解を見つける能力を向上させる重要なテクニックを紹介します。損失関数、特に分類タスクのソフトマックス クロス エントロピー損失を最小化することの重要性について説明し、Tanh などの活性化関数を使用して勾配フローを改善する利点を強調します。また、この章では、重み更新のモメンタム、段階的な収束のための学習率の減衰、分散を維持するための適切な重みの初期化、およびオーバーフィッティングを防ぐ方法としてのドロップアウトについても説明し、最終的にこれらの戦略がより効果的なディープラーニング モデルにつながる方法を示します。",
                // Korean
                "한국인": "이 장에서는 최적의 솔루션을 찾는 능력을 향상시키는 필수 기술을 도입하여 신경망의 학습을 향상시키는 데 중점을 둡니다. 손실 함수, 특히 분류 작업을 위한 소프트맥스 교차 엔트로피 손실을 최소화하는 것의 중요성에 대해 논의하고, 더 나은 그래디언트 흐름을 위해 Tanh와 같은 활성화 함수를 사용하는 이점을 강조합니다. 이 장에서는 또한 가중치 업데이트를 위한 모멘텀, 점진적 수렴을 위한 학습률 감소, 분산을 유지하기 위한 적절한 가중치 초기화, 과적합을 방지하는 방법으로서의 드롭아웃을 다루며, 궁극적으로 이러한 전략이 어떻게 더 효과적인 딥 러닝 모델로 이어질 수 있는지 보여줍니다.",
                // Spanish
                "Español": "Este capítulo se centra en mejorar el entrenamiento de redes neuronales mediante la introducción de técnicas esenciales que mejoran su capacidad para encontrar soluciones óptimas. Analiza la importancia de minimizar las funciones de pérdida, en particular la pérdida de entropía cruzada softmax para tareas de clasificación, y destaca los beneficios de utilizar funciones de activación como Tanh para un mejor flujo de gradiente. El capítulo también cubre el momento para las actualizaciones de peso, la disminución de la tasa de aprendizaje para la convergencia gradual, la inicialización adecuada del peso para mantener la varianza y la deserción como método para evitar el sobreajuste, demostrando en última instancia cómo estas estrategias pueden conducir a modelos de aprendizaje profundo más efectivos.",
                // Hindi
                "हिंदी": "यह अध्याय आवश्यक तकनीकों को पेश करके तंत्रिका नेटवर्क के प्रशिक्षण को बढ़ाने पर ध्यान केंद्रित करता है जो इष्टतम समाधान खोजने की उनकी क्षमता में सुधार करते हैं। यह वर्गीकरण कार्यों के लिए हानि कार्यों, विशेष रूप से सॉफ्टमैक्स क्रॉस एन्ट्रॉपी हानि को कम करने के महत्व पर चर्चा करता है, और बेहतर ग्रेडिएंट प्रवाह के लिए टैन जैसे सक्रियण कार्यों का उपयोग करने के लाभों पर प्रकाश डालता है। अध्याय में वेट अपडेट के लिए गति, क्रमिक अभिसरण के लिए सीखने की दर में कमी, भिन्नता को बनाए रखने के लिए उचित वजन आरंभीकरण और ओवरफिटिंग को रोकने के लिए एक विधि के रूप में ड्रॉपआउट को भी शामिल किया गया है, जो अंततः यह दर्शाता है कि कैसे ये रणनीतियाँ अधिक प्रभावी डीप लर्निंग मॉडल की ओर ले जा सकती हैं।",
                // Portuguese
                "Português": "Este capítulo centra-se em melhorar o treino de redes neuronais, introduzindo técnicas essenciais que melhoram a sua capacidade de encontrar soluções ideais. Discute a importância de minimizar as funções de perda, particularmente a perda de entropia cruzada softmax para tarefas de classificação, e destaca os benefícios da utilização de funções de ativação como o Tanh para um melhor fluxo de gradiente. O capítulo aborda também o impulso para atualizações de peso, queda da taxa de aprendizagem para convergência gradual, inicialização adequada de peso para manter a variância e abandono como método para evitar o overfitting, demonstrando em última análise como estas estratégias podem levar a modelos de aprendizagem profunda mais eficazes.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি অত্যাবশ্যকীয় কৌশলগুলি প্রবর্তন করে নিউরাল নেটওয়ার্কগুলির প্রশিক্ষণ বাড়ানোর উপর দৃষ্টি নিবদ্ধ করে যা তাদের সর্বোত্তম সমাধান খুঁজে পাওয়ার ক্ষমতাকে উন্নত করে। এটি লস ফাংশন ন্যূনতম করার গুরুত্ব নিয়ে আলোচনা করে, বিশেষ করে শ্রেণীবিভাগের কাজগুলির জন্য সফটম্যাক্স ক্রস এনট্রপি লস, এবং আরও ভাল গ্রেডিয়েন্ট প্রবাহের জন্য তানহের মতো অ্যাক্টিভেশন ফাংশন ব্যবহার করার সুবিধাগুলি হাইলাইট করে। অধ্যায়টি ওজন আপডেটের জন্য গতি, ধীরে ধীরে একত্রিত হওয়ার জন্য শেখার হারের ক্ষয়, ভিন্নতা বজায় রাখার জন্য সঠিক ওজন প্রাথমিককরণ, এবং অতিরিক্ত ফিটিং প্রতিরোধ করার একটি পদ্ধতি হিসাবে ড্রপআউট, শেষ পর্যন্ত এই কৌশলগুলি আরও কার্যকর গভীর শিক্ষার মডেলের দিকে নিয়ে যেতে পারে তা প্রদর্শন করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تعزيز تدريب الشبكات العصبية من خلال تقديم تقنيات أساسية تعمل على تحسين قدرتها على إيجاد الحلول المثلى. ويناقش أهمية تقليل وظائف الخسارة، وخاصة خسارة الإنتروبيا المتقاطعة لـ Softmax لمهام التصنيف، ويسلط الضوء على فوائد استخدام وظائف التنشيط مثل Tanh لتحسين تدفق التدرج. ويغطي الفصل أيضًا الزخم لتحديثات الوزن، وتدهور معدل التعلم للتقارب التدريجي، وتهيئة الوزن المناسبة للحفاظ على التباين، والتسرب كطريقة لمنع الإفراط في التجهيز، مما يوضح في النهاية كيف يمكن لهذه الاستراتيجيات أن تؤدي إلى نماذج تعلم عميق أكثر فعالية.",
                // Persian
                "فارسی": "این فصل بر تقویت آموزش شبکه‌های عصبی با معرفی تکنیک‌های ضروری تمرکز دارد که توانایی آنها را برای یافتن راه‌حل‌های بهینه بهبود می‌بخشد. اهمیت به حداقل رساندن توابع از دست دادن، به ویژه از دست دادن آنتروپی متقاطع softmax برای وظایف طبقه بندی را مورد بحث قرار می دهد و مزایای استفاده از توابع فعال سازی مانند Tanh را برای جریان گرادیان بهتر برجسته می کند. این فصل همچنین شتاب برای به روز رسانی وزن، کاهش نرخ یادگیری برای همگرایی تدریجی، مقداردهی اولیه وزن مناسب برای حفظ واریانس، و حذف به عنوان روشی برای جلوگیری از برازش بیش از حد را پوشش می دهد، که در نهایت نشان می دهد که چگونه این استراتژی ها می توانند به مدل های یادگیری عمیق موثرتری منجر شوند.",
            },
        },
        // 5
        {
            "ChapterName": "Convolutional Neural Networks",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on Convolutional Neural Networks (CNNs), which are specifically designed for image data and differ from traditional fully connected neural networks. The chapter explains how CNNs operate by learning local pixel features through convolution operations, which involve sliding filters over images to create feature maps that detect visual patterns. It also covers the implementation of multichannel convolutions to handle multiple input channels, the role of pooling layers in reducing computational load while acknowledging the trade-off of losing some information, and provides detailed coding examples for understanding the convolution process from scratch.",
                // German
                "Deutsch": "In diesem Kapitel geht es um Convolutional Neural Networks (CNNs), die speziell für Bilddaten entwickelt wurden und sich von herkömmlichen, vollständig verbundenen neuronalen Netzwerken unterscheiden. Das Kapitel erklärt, wie CNNs funktionieren, indem sie lokale Pixelmerkmale durch Faltungsoperationen erlernen, bei denen Filter über Bilder geschoben werden, um Merkmalskarten zu erstellen, die visuelle Muster erkennen. Es behandelt auch die Implementierung von Mehrkanal-Faltungen zur Verarbeitung mehrerer Eingangskanäle, die Rolle von Pooling-Schichten bei der Reduzierung der Rechenlast unter Berücksichtigung des Kompromisses, einige Informationen zu verlieren, und bietet detaillierte Codierungsbeispiele, um den Faltungsprozess von Grund auf zu verstehen.",
                // Chinese
                "中国人": "本章重点介绍卷积神经网络 (CNN)，它专门用于处理图像数据，与传统的全连接神经网络不同。本章介绍了 CNN 如何通过卷积运算学习局部像素特征，这涉及在图像上滑动滤波器以创建检测视觉模式的特征图。本章还介绍了多通道卷积的实现以处理多个输入通道，池化层在减少计算负载（同时承认会丢失一些信息）方面的作用，并提供了详细的编码示例，以便从头开始理解卷积过程。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется сверточным нейронным сетям (CNN), которые специально разработаны для данных изображений и отличаются от традиционных полностью связанных нейронных сетей. В главе объясняется, как работают CNN, изучая локальные пиксельные признаки с помощью операций свертки, которые включают скользящие фильтры по изображениям для создания карт признаков, которые обнаруживают визуальные закономерности. В ней также рассматривается реализация многоканальных сверток для обработки нескольких входных каналов, роль слоев пула в снижении вычислительной нагрузки при признании компромисса в виде потери некоторой информации, а также приводятся подробные примеры кодирования для понимания процесса свертки с нуля.",
                // French
                "Français": "Ce chapitre se concentre sur les réseaux neuronaux convolutionnels (CNN), qui sont spécifiquement conçus pour les données d'image et diffèrent des réseaux neuronaux entièrement connectés traditionnels. Le chapitre explique comment les CNN fonctionnent en apprenant les caractéristiques des pixels locaux via des opérations de convolution, qui impliquent de faire glisser des filtres sur des images pour créer des cartes de caractéristiques qui détectent des motifs visuels. Il couvre également la mise en œuvre de convolutions multicanaux pour gérer plusieurs canaux d'entrée, le rôle des couches de regroupement dans la réduction de la charge de calcul tout en reconnaissant le compromis de la perte de certaines informations, et fournit des exemples de codage détaillés pour comprendre le processus de convolution à partir de zéro.",
                // Japanese
                "日本語": "この章では、画像データ専用に設計され、従来の完全接続ニューラル ネットワークとは異なる畳み込みニューラル ネットワーク (CNN) に焦点を当てます。この章では、画像にフィルターをスライドさせて視覚パターンを検出する特徴マップを作成する畳み込み操作を通じてローカル ピクセルの特徴を学習することで CNN がどのように動作するかを説明します。また、複数の入力チャネルを処理するためのマルチチャネル畳み込みの実装、一部の情報を失うというトレードオフを認識しながら計算負荷を軽減するプーリング層の役割についても説明し、畳み込みプロセスを最初から理解するための詳細なコード例を示します。",
                // Korean
                "한국인": "이 장에서는 이미지 데이터를 위해 특별히 설계되었으며 기존의 완전 연결 신경망과 다른 합성곱 신경망(CNN)에 초점을 맞춥니다. 이 장에서는 CNN이 합성곱 연산을 통해 로컬 픽셀 피처를 학습하여 작동하는 방식을 설명합니다. 합성곱 연산에는 이미지 위로 필터를 밀어 시각적 패턴을 감지하는 피처 맵을 만드는 것이 포함됩니다. 또한 여러 입력 채널을 처리하기 위한 다중 채널 합성곱의 구현, 일부 정보를 잃는 것의 상쇄 효과를 인정하면서 계산 부하를 줄이는 데 있어서 풀링 레이어의 역할, 합성곱 프로세스를 처음부터 이해하기 위한 자세한 코딩 예제를 제공합니다.",
                // Spanish
                "Español": "Este capítulo se centra en las redes neuronales convolucionales (CNN), que están diseñadas específicamente para datos de imágenes y se diferencian de las redes neuronales totalmente conectadas tradicionales. El capítulo explica cómo funcionan las CNN mediante el aprendizaje de las características de los píxeles locales a través de operaciones de convolución, que implican el deslizamiento de filtros sobre las imágenes para crear mapas de características que detectan patrones visuales. También cubre la implementación de convoluciones multicanal para manejar múltiples canales de entrada, el papel de las capas de agrupamiento para reducir la carga computacional al tiempo que se reconoce la desventaja de perder cierta información, y proporciona ejemplos de codificación detallados para comprender el proceso de convolución desde cero.",
                // Hindi
                "हिंदी": "यह अध्याय कन्वोल्यूशनल न्यूरल नेटवर्क (CNN) पर केंद्रित है, जो विशेष रूप से छवि डेटा के लिए डिज़ाइन किए गए हैं और पारंपरिक पूरी तरह से जुड़े न्यूरल नेटवर्क से अलग हैं। अध्याय बताता है कि CNN कन्वोल्यूशन ऑपरेशन के माध्यम से स्थानीय पिक्सेल सुविधाओं को सीखकर कैसे काम करते हैं, जिसमें विज़ुअल पैटर्न का पता लगाने वाले फ़ीचर मैप बनाने के लिए छवियों पर स्लाइडिंग फ़िल्टर शामिल हैं। यह कई इनपुट चैनलों को संभालने के लिए मल्टीचैनल कन्वोल्यूशन के कार्यान्वयन को भी कवर करता है, कुछ जानकारी खोने के व्यापार-बंद को स्वीकार करते हुए कम्प्यूटेशनल लोड को कम करने में पूलिंग परतों की भूमिका, और स्क्रैच से कन्वोल्यूशन प्रक्रिया को समझने के लिए विस्तृत कोडिंग उदाहरण प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se nas redes neuronais convolucionais (CNNs), que são concebidas especificamente para dados de imagem e diferem das redes neuronais tradicionais totalmente conectadas. O capítulo explica como as CNN operam aprendendo as características dos pixéis locais através de operações de convolução, que envolvem o deslizamento de filtros sobre imagens para criar mapas de características que detetam padrões visuais. Abrange também a implementação de convoluções multicanal para lidar com vários canais de entrada, o papel do agrupamento de camadas na redução da carga computacional, ao mesmo tempo que reconhece a compensação de perder alguma informação, e fornece exemplos de codificação detalhados para compreender o processo de convolução a partir do zero.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি কনভোলিউশনাল নিউরাল নেটওয়ার্ক (সিএনএন) এর উপর দৃষ্টি নিবদ্ধ করে, যেগুলি বিশেষভাবে ইমেজ ডেটার জন্য ডিজাইন করা হয়েছে এবং প্রথাগত সম্পূর্ণভাবে সংযুক্ত নিউরাল নেটওয়ার্ক থেকে আলাদা। অধ্যায়টি ব্যাখ্যা করে যে কীভাবে সিএনএনগুলি কনভল্যুশন অপারেশনের মাধ্যমে স্থানীয় পিক্সেল বৈশিষ্ট্যগুলি শিখে কাজ করে, যার মধ্যে চিত্রগুলির উপর ফিল্টারগুলি স্লাইডিং ফিচার ম্যাপ তৈরি করে যা ভিজ্যুয়াল প্যাটার্ন সনাক্ত করে। এটি একাধিক ইনপুট চ্যানেলগুলি পরিচালনা করার জন্য মাল্টিচ্যানেল কনভোলিউশনের বাস্তবায়ন, কিছু তথ্য হারানোর ট্রেড-অফ স্বীকার করার সময় গণনামূলক লোড কমাতে পুলিং লেয়ারের ভূমিকাকেও কভার করে এবং স্ক্র্যাচ থেকে কনভোলিউশন প্রক্রিয়া বোঝার জন্য বিস্তারিত কোডিং উদাহরণ প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على الشبكات العصبية التلافيفية (CNNs)، والتي تم تصميمها خصيصًا لبيانات الصور وتختلف عن الشبكات العصبية التقليدية المتصلة بالكامل. يشرح الفصل كيف تعمل CNNs من خلال تعلم ميزات البكسل المحلية من خلال عمليات الالتفاف، والتي تتضمن تحريك المرشحات فوق الصور لإنشاء خرائط ميزات تكشف عن الأنماط المرئية. كما يغطي تنفيذ الالتفافات متعددة القنوات للتعامل مع قنوات الإدخال المتعددة، ودور طبقات التجميع في تقليل الحمل الحسابي مع الاعتراف بالتضحية بفقدان بعض المعلومات، ويوفر أمثلة ترميز مفصلة لفهم عملية الالتفاف من الصفر.",
                // Persian
                "فارسی": "این فصل بر روی شبکه‌های عصبی کانولوشنال (CNN) تمرکز دارد که به طور خاص برای داده‌های تصویری طراحی شده‌اند و با شبکه‌های عصبی کاملا متصل سنتی متفاوت هستند. این فصل توضیح می‌دهد که CNN‌ها چگونه با یادگیری ویژگی‌های پیکسل محلی از طریق عملیات کانولوشن، که شامل لغزش فیلترها بر روی تصاویر برای ایجاد نقشه‌های ویژگی است که الگوهای بصری را تشخیص می‌دهند، عمل می‌کنند. همچنین اجرای کانولوشن‌های چند کانالی برای مدیریت کانال‌های ورودی متعدد، نقش لایه‌های ادغام در کاهش بار محاسباتی و در عین حال تأیید مبادله با از دست دادن برخی اطلاعات را پوشش می‌دهد، و مثال‌های کدگذاری دقیقی را برای درک فرآیند کانولوشن از ابتدا ارائه می‌کند.",
            },
        },
        // 6
        {
            "ChapterName": "Recurrent Neural Networks",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces Recurrent Neural Networks (RNNs), which are specialized neural network architectures designed to process sequential data, such as time series or language. Unlike traditional feed-forward networks that treat inputs as independent observations, RNNs maintain hidden states that allow them to capture temporal dependencies by passing representations from previous time steps into the current computation. The chapter discusses the structure of RNNs, the necessity of automatic differentiation for gradient calculations, and highlights advanced variants like GRUs and LSTMs that improve performance by managing long-term dependencies through gating mechanisms.",
                // German
                "Deutsch": "In diesem Kapitel werden Recurrent Neural Networks (RNNs) vorgestellt. Dabei handelt es sich um spezialisierte neuronale Netzwerkarchitekturen, die für die Verarbeitung sequentieller Daten wie Zeitreihen oder Sprache entwickelt wurden. Im Gegensatz zu herkömmlichen Feedforward-Netzwerken, die Eingaben als unabhängige Beobachtungen behandeln, behalten RNNs verborgene Zustände bei, die es ihnen ermöglichen, zeitliche Abhängigkeiten zu erfassen, indem sie Darstellungen aus vorherigen Zeitschritten in die aktuelle Berechnung übernehmen. Das Kapitel behandelt die Struktur von RNNs, die Notwendigkeit automatischer Differenzierung für Gradientenberechnungen und hebt fortgeschrittene Varianten wie GRUs und LSTMs hervor, die die Leistung verbessern, indem sie langfristige Abhängigkeiten durch Gating-Mechanismen verwalten.",
                // Chinese
                "中国人": "本章介绍了循环神经网络 (RNN)，这是一种专门用于处理顺序数据（例如时间序列或语言）的神经网络架构。与将输入视为独立观察的传统前馈网络不同，RNN 保持隐藏状态，通过将先前时间步骤的表示传递到当前计算中，RNN 可以捕获时间依赖关系。本章讨论了 RNN 的结构、梯度计算自动微分的必要性，并重点介绍了 GRU 和 LSTM 等高级变体，它们通过门控机制管理长期依赖关系，从而提高性能。",
                // Russian
                "Русский": "В этой главе рассматриваются рекуррентные нейронные сети (RNN), которые являются специализированными архитектурами нейронных сетей, предназначенными для обработки последовательных данных, таких как временные ряды или язык. В отличие от традиционных сетей прямого распространения, которые рассматривают входные данные как независимые наблюдения, RNN поддерживают скрытые состояния, которые позволяют им фиксировать временные зависимости, передавая представления из предыдущих временных шагов в текущие вычисления. В главе обсуждается структура RNN, необходимость автоматической дифференциации для градиентных вычислений и освещаются продвинутые варианты, такие как GRU и LSTM, которые повышают производительность за счет управления долгосрочными зависимостями с помощью механизмов стробирования.",
                // French
                "Français": "Ce chapitre présente les réseaux neuronaux récurrents (RNN), qui sont des architectures de réseaux neuronaux spécialisées conçues pour traiter des données séquentielles, telles que des séries chronologiques ou des langages. Contrairement aux réseaux traditionnels à propagation directe qui traitent les entrées comme des observations indépendantes, les RNN conservent des états cachés qui leur permettent de capturer les dépendances temporelles en transmettant des représentations des étapes temporelles précédentes au calcul en cours. Le chapitre aborde la structure des RNN, la nécessité d'une différenciation automatique pour les calculs de gradient et met en évidence des variantes avancées comme les GRU et les LSTM qui améliorent les performances en gérant les dépendances à long terme via des mécanismes de contrôle.",
                // Japanese
                "日本語": "この章では、時系列や言語などの連続データを処理するために設計された特殊なニューラル ネットワーク アーキテクチャであるリカレント ニューラル ネットワーク (RNN) を紹介します。入力を独立した観測として扱う従来のフィードフォワード ネットワークとは異なり、RNN は、以前のタイム ステップの表現を現在の計算に渡すことで時間的な依存関係をキャプチャできる隠し状態を維持します。この章では、RNN の構造、勾配計算のための自動微分化の必要性について説明し、ゲーティング メカニズムを通じて長期的な依存関係を管理することでパフォーマンスを向上させる GRU や LSTM などの高度なバリアントに焦点を当てます。",
                // Korean
                "한국인": "이 장에서는 시계열이나 언어와 같은 순차적 데이터를 처리하도록 설계된 특수 신경망 아키텍처인 순환 신경망(RNN)을 소개합니다. 입력을 독립적인 관찰로 처리하는 기존의 피드포워드 네트워크와 달리 RNN은 이전 시간 단계의 표현을 현재 계산으로 전달하여 시간적 종속성을 포착할 수 있는 숨겨진 상태를 유지합니다. 이 장에서는 RNN의 구조, 그래디언트 계산을 위한 자동 미분의 필요성에 대해 논의하고, 게이팅 메커니즘을 통해 장기 종속성을 관리하여 성능을 개선하는 GRU 및 LSTM과 같은 고급 변형을 강조합니다.",
                // Spanish
                "Español": "En este capítulo se presentan las redes neuronales recurrentes (RNN), que son arquitecturas de redes neuronales especializadas diseñadas para procesar datos secuenciales, como series temporales o lenguaje. A diferencia de las redes tradicionales de propagación hacia adelante que tratan las entradas como observaciones independientes, las RNN mantienen estados ocultos que les permiten capturar dependencias temporales al pasar representaciones de pasos de tiempo anteriores al cálculo actual. En el capítulo se analiza la estructura de las RNN, la necesidad de diferenciación automática para los cálculos de gradientes y se destacan variantes avanzadas como las GRU y las LSTM que mejoran el rendimiento al gestionar dependencias a largo plazo a través de mecanismos de control.",
                // Hindi
                "हिंदी": "यह अध्याय आवर्ती तंत्रिका नेटवर्क (RNN) का परिचय देता है, जो विशिष्ट तंत्रिका नेटवर्क आर्किटेक्चर हैं जिन्हें अनुक्रमिक डेटा, जैसे कि समय श्रृंखला या भाषा को संसाधित करने के लिए डिज़ाइन किया गया है। पारंपरिक फीड-फ़ॉरवर्ड नेटवर्क के विपरीत जो इनपुट को स्वतंत्र अवलोकन के रूप में मानते हैं, RNN छिपी हुई अवस्थाओं को बनाए रखते हैं जो उन्हें पिछले समय चरणों से वर्तमान गणना में प्रतिनिधित्व पारित करके अस्थायी निर्भरता को पकड़ने की अनुमति देते हैं। अध्याय RNN की संरचना, ग्रेडिएंट गणनाओं के लिए स्वचालित विभेदन की आवश्यकता पर चर्चा करता है, और GRU और LSTM जैसे उन्नत वेरिएंट पर प्रकाश डालता है जो गेटिंग तंत्र के माध्यम से दीर्घकालिक निर्भरताओं को प्रबंधित करके प्रदर्शन में सुधार करते हैं।",
                // Portuguese
                "Português": "Este capítulo apresenta as Redes Neurais Recorrentes (RNNs), que são arquiteturas de redes neuronais especializadas concebidas para processar dados sequenciais, como séries temporais ou linguagem. Ao contrário das redes feed-forward tradicionais que tratam as entradas como observações independentes, as RNN mantêm estados escondidos que lhes permitem capturar dependências temporais, passando representações de passos de tempo anteriores para a computação atual. O capítulo discute a estrutura dos RNNs, a necessidade de diferenciação automática para cálculos de gradientes e destaca variantes avançadas como GRUs e LSTMs que melhoram o desempenho através da gestão de dependências de longo prazo através de mecanismos de controlo.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি রিকারেন্ট নিউরাল নেটওয়ার্ক (RNNs) প্রবর্তন করে, যা বিশেষায়িত নিউরাল নেটওয়ার্ক আর্কিটেকচার যা ক্রমিক ডেটা প্রক্রিয়া করার জন্য ডিজাইন করা হয়েছে, যেমন সময় সিরিজ বা ভাষা। প্রথাগত ফিড-ফরোয়ার্ড নেটওয়ার্কগুলির বিপরীতে যেগুলি ইনপুটগুলিকে স্বাধীন পর্যবেক্ষণ হিসাবে বিবেচনা করে, RNNগুলি লুকানো অবস্থাগুলি বজায় রাখে যা তাদের বর্তমান গণনার পূর্ববর্তী সময়ের পদক্ষেপগুলি থেকে উপস্থাপনা পাস করে অস্থায়ী নির্ভরতা ক্যাপচার করতে দেয়। অধ্যায়টি RNN-এর গঠন, গ্রেডিয়েন্ট গণনার জন্য স্বয়ংক্রিয় পার্থক্যের প্রয়োজনীয়তা নিয়ে আলোচনা করে এবং GRUs এবং LSTM-এর মতো উন্নত রূপগুলিকে হাইলাইট করে যা গেটিং প্রক্রিয়ার মাধ্যমে দীর্ঘমেয়াদী নির্ভরতা পরিচালনা করে কর্মক্ষমতা উন্নত করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل الشبكات العصبية المتكررة (RNNs)، وهي عبارة عن هياكل شبكات عصبية متخصصة مصممة لمعالجة البيانات المتسلسلة، مثل السلاسل الزمنية أو اللغة. وعلى عكس شبكات التغذية الأمامية التقليدية التي تعامل المدخلات كملاحظات مستقلة، تحافظ الشبكات العصبية المتكررة على حالات مخفية تسمح لها بالتقاط التبعيات الزمنية من خلال تمرير التمثيلات من خطوات الوقت السابقة إلى الحساب الحالي. يناقش الفصل بنية الشبكات العصبية المتكررة، وضرورة التمايز التلقائي لحسابات التدرج، ويسلط الضوء على المتغيرات المتقدمة مثل GRUs وLSTMs التي تعمل على تحسين الأداء من خلال إدارة التبعيات طويلة الأجل من خلال آليات البوابات.",
                // Persian
                "فارسی": "این فصل شبکه‌های عصبی بازگشتی (RNN) را معرفی می‌کند که معماری شبکه‌های عصبی تخصصی هستند که برای پردازش داده‌های متوالی، مانند سری‌های زمانی یا زبان طراحی شده‌اند. برخلاف شبکه‌های پیش‌خور سنتی که ورودی‌ها را به‌عنوان مشاهدات مستقل در نظر می‌گیرند، RNN‌ها حالت‌های پنهانی را حفظ می‌کنند که به آن‌ها اجازه می‌دهد وابستگی‌های زمانی را با ارسال نمایش‌هایی از مراحل زمانی قبلی به محاسبات فعلی دریافت کنند. این فصل ساختار RNN ها، لزوم تمایز خودکار برای محاسبات گرادیان را مورد بحث قرار می دهد و انواع پیشرفته مانند GRU و LSTM را برجسته می کند که با مدیریت وابستگی های بلندمدت از طریق مکانیسم های دروازه، عملکرد را بهبود می بخشد.",
            },
        },
        // 7
        {
            "ChapterName": "PyTorch",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces PyTorch as a high-performance neural network framework, emphasizing its automatic differentiation capabilities through Tensors. It covers the essential components of building neural networks, including Models, Layers, Optimizers, and Loss functions, while demonstrating how to implement architectures like fully connected networks, convolutional networks, and recurrent networks. The chapter also touches on unsupervised learning with autoencoders and the concept of representation learning, concluding with a brief mention of generative adversarial networks (GANs) and their ability to learn complex data distributions.",
                // German
                "Deutsch": "In diesem Kapitel wird PyTorch als leistungsstarkes Framework für neuronale Netzwerke vorgestellt, wobei die automatischen Differenzierungsfunktionen durch Tensoren hervorgehoben werden. Es behandelt die wesentlichen Komponenten zum Erstellen neuronaler Netzwerke, einschließlich Modelle, Schichten, Optimierer und Verlustfunktionen, und zeigt, wie Architekturen wie vollständig verbundene Netzwerke, Faltungsnetzwerke und rekurrierende Netzwerke implementiert werden. Das Kapitel geht auch auf unüberwachtes Lernen mit Autoencodern und das Konzept des Repräsentationslernens ein und schließt mit einer kurzen Erwähnung generativer kontradiktorischer Netzwerke (GANs) und ihrer Fähigkeit, komplexe Datenverteilungen zu erlernen.",
                // Chinese
                "中国人": "本章介绍了 PyTorch 作为高性能神经网络框架，强调了其通过张量实现的自动微分功能。它涵盖了构建神经网络的基本组件，包括模型、层、优化器和损失函数，同时演示了如何实现全连接网络、卷积网络和循环网络等架构。本章还涉及使用自动编码器的无监督学习和表示学习的概念，最后简要介绍了生成对抗网络 (GAN) 及其学习复杂数据分布的能力。",
                // Russian
                "Русский": "В этой главе представлен PyTorch как высокопроизводительный фреймворк нейронных сетей, подчеркивающий его возможности автоматического дифференцирования с помощью тензоров. В ней рассматриваются основные компоненты построения нейронных сетей, включая модели, слои, оптимизаторы и функции потерь, а также демонстрируется, как реализовать такие архитектуры, как полностью связанные сети, сверточные сети и рекуррентные сети. В главе также затрагивается неконтролируемое обучение с помощью автокодировщиков и концепция обучения представлений, в заключение кратко упоминаются генеративно-состязательные сети (GAN) и их способность изучать сложные распределения данных.",
                // French
                "Français": "Ce chapitre présente PyTorch comme un framework de réseau neuronal hautes performances, en mettant l'accent sur ses capacités de différenciation automatique via les tenseurs. Il couvre les composants essentiels de la construction de réseaux neuronaux, notamment les modèles, les couches, les optimiseurs et les fonctions de perte, tout en montrant comment mettre en œuvre des architectures telles que les réseaux entièrement connectés, les réseaux convolutionnels et les réseaux récurrents. Le chapitre aborde également l'apprentissage non supervisé avec des autoencodeurs et le concept d'apprentissage de représentation, se terminant par une brève mention des réseaux antagonistes génératifs (GAN) et de leur capacité à apprendre des distributions de données complexes.",
                // Japanese
                "日本語": "この章では、高性能ニューラル ネットワーク フレームワークとしての PyTorch を紹介し、テンソルによる自動微分化機能に重点を置いています。モデル、レイヤー、オプティマイザー、損失関数など、ニューラル ネットワークの構築に不可欠なコンポーネントについて説明しながら、完全接続ネットワーク、畳み込みネットワーク、再帰ネットワークなどのアーキテクチャを実装する方法を示します。また、この章では、オートエンコーダを使用した教師なし学習と表現学習の概念についても触れ、最後に生成的敵対ネットワーク (GAN) と複雑なデータ分布を学習するその能力について簡単に説明します。",
                // Korean
                "한국인": "이 장에서는 PyTorch를 고성능 신경망 프레임워크로 소개하고, 텐서를 통한 자동 미분 기능을 강조합니다. 모델, 계층, 최적화 도구, 손실 함수를 포함하여 신경망을 구축하는 데 필수적인 구성 요소를 다루는 동시에 완전 연결 네트워크, 합성곱 네트워크, 순환 네트워크와 같은 아키텍처를 구현하는 방법을 보여줍니다. 이 장에서는 또한 자동 인코더를 사용한 비지도 학습과 표현 학습 개념에 대해 다루고, 생성적 적대 신경망(GAN)과 복잡한 데이터 분포를 학습하는 능력에 대해 간략히 언급하면서 마무리합니다.",
                // Spanish
                "Español": "Este capítulo presenta PyTorch como un marco de trabajo de redes neuronales de alto rendimiento, haciendo hincapié en sus capacidades de diferenciación automática a través de tensores. Abarca los componentes esenciales de la construcción de redes neuronales, incluidos modelos, capas, optimizadores y funciones de pérdida, al tiempo que demuestra cómo implementar arquitecturas como redes completamente conectadas, redes convolucionales y redes recurrentes. El capítulo también aborda el aprendizaje no supervisado con autocodificadores y el concepto de aprendizaje de representación, y concluye con una breve mención de las redes generativas antagónicas (GAN) y su capacidad para aprender distribuciones de datos complejas.",
                // Hindi
                "हिंदी": "यह अध्याय PyTorch को एक उच्च-प्रदर्शन न्यूरल नेटवर्क फ्रेमवर्क के रूप में पेश करता है, जो टेंसर के माध्यम से इसकी स्वचालित विभेदन क्षमताओं पर जोर देता है। यह मॉडल, लेयर्स, ऑप्टिमाइज़र और लॉस फ़ंक्शन सहित न्यूरल नेटवर्क बनाने के आवश्यक घटकों को कवर करता है, जबकि पूरी तरह से जुड़े नेटवर्क, कन्वोल्यूशनल नेटवर्क और आवर्तक नेटवर्क जैसे आर्किटेक्चर को लागू करने का तरीका प्रदर्शित करता है। यह अध्याय ऑटोएनकोडर के साथ अनसुपरवाइज्ड लर्निंग और रिप्रेजेंटेशन लर्निंग की अवधारणा को भी छूता है, जो जेनरेटिव एडवर्सरियल नेटवर्क (GAN) और जटिल डेटा वितरण सीखने की उनकी क्षमता के संक्षिप्त उल्लेख के साथ समाप्त होता है।",
                // Portuguese
                "Português": "Este capítulo apresenta o PyTorch como uma estrutura de rede neural de alto desempenho, enfatizando as suas capacidades de diferenciação automática através de Tensores. Abrange os componentes essenciais da construção de redes neuronais, incluindo modelos, camadas, otimizadores e funções de perda, ao mesmo tempo que demonstra como implementar arquiteturas como redes totalmente conectadas, redes convolucionais e redes recorrentes. O capítulo aborda também a aprendizagem não supervisionada com autoencoders e o conceito de aprendizagem de representação, concluindo com uma breve menção às redes adversárias generativas (GANs) e à sua capacidade de aprender distribuições complexas de dados.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি PyTorch কে একটি উচ্চ-পারফরম্যান্স নিউরাল নেটওয়ার্ক ফ্রেমওয়ার্ক হিসাবে পরিচয় করিয়ে দেয়, Tensors এর মাধ্যমে এর স্বয়ংক্রিয় পার্থক্য ক্ষমতার উপর জোর দেয়। এটি মডেল, লেয়ার, অপ্টিমাইজার এবং লস ফাংশন সহ নিউরাল নেটওয়ার্ক তৈরির প্রয়োজনীয় উপাদানগুলিকে কভার করে, যেখানে সম্পূর্ণভাবে সংযুক্ত নেটওয়ার্ক, কনভোলিউশনাল নেটওয়ার্ক এবং পুনরাবৃত্ত নেটওয়ার্কগুলির মতো আর্কিটেকচারগুলি কীভাবে প্রয়োগ করা যায় তা প্রদর্শন করে৷ অধ্যায়টি অটোএনকোডারগুলির সাথে তত্ত্বাবধানহীন শিক্ষা এবং উপস্থাপনা শেখার ধারণাকেও স্পর্শ করে, জেনারেটিভ অ্যাডভারসারিয়াল নেটওয়ার্ক (GAN) এবং জটিল ডেটা বিতরণ শেখার তাদের ক্ষমতার একটি সংক্ষিপ্ত উল্লেখ দিয়ে শেষ হয়।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل PyTorch كإطار عمل للشبكات العصبية عالية الأداء، مع التركيز على قدراته على التمييز التلقائي من خلال Tensors. ويغطي المكونات الأساسية لبناء الشبكات العصبية، بما في ذلك النماذج والطبقات والمحسنات ووظائف الخسارة، مع توضيح كيفية تنفيذ بنيات مثل الشبكات المتصلة بالكامل والشبكات التلافيفية والشبكات المتكررة. ويتطرق الفصل أيضًا إلى التعلم غير الخاضع للإشراف باستخدام أجهزة الترميز التلقائي ومفهوم التعلم التمثيلي، ويختتم بذكر موجز للشبكات التنافسية التوليدية (GANs) وقدرتها على تعلم توزيعات البيانات المعقدة.",
                // Persian
                "فارسی": "این فصل PyTorch را به عنوان یک چارچوب شبکه عصبی با کارایی بالا معرفی می‌کند و بر قابلیت‌های تمایز خودکار آن از طریق Tensor تأکید می‌کند. این مؤلفه‌های ضروری ساخت شبکه‌های عصبی، از جمله مدل‌ها، لایه‌ها، بهینه‌سازها و توابع Loss را پوشش می‌دهد و در عین حال نحوه پیاده‌سازی معماری‌هایی مانند شبکه‌های کاملاً متصل، شبکه‌های کانولوشن و شبکه‌های تکراری را نشان می‌دهد. این فصل همچنین به یادگیری بدون نظارت با رمزگذارهای خودکار و مفهوم یادگیری بازنمایی می‌پردازد و با ذکر مختصری از شبکه‌های متخاصم مولد (GANs) و توانایی آن‌ها در یادگیری توزیع‌های پیچیده داده خاتمه می‌یابد.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "“Deep Learning from Scratch” by Seth Weidman is a book that serves as a bridge between the theoretical underpinnings of deep learning and its practical applications. It is designed to take readers on a journey from the foundational concepts of neural networks to the construction and understanding of deep learning models. The book is praised for its clarity and the way it demystifies complex ideas, making them accessible to readers with a basic understanding of Python.",
            // German
            "Deutsch": "„Deep Learning from Scratch“ von Seth Weidman ist ein Buch, das als Brücke zwischen den theoretischen Grundlagen des Deep Learning und seinen praktischen Anwendungen dient. Es ist so konzipiert, dass es die Leser auf eine Reise von den grundlegenden Konzepten neuronaler Netzwerke bis hin zur Konstruktion und dem Verständnis von Deep-Learning-Modellen mitnimmt. Das Buch wird für seine Klarheit und die Art und Weise gelobt, wie es komplexe Ideen entmystifiziert und sie für Leser mit Grundkenntnissen in Python zugänglich macht.",
            // Chinese
            "中国人": "Seth Weidman 撰写的《从头开始深度学习》是一本在深度学习的理论基础和实际应用之间架起桥梁的书。它旨在带领读者从神经网络的基础概念到深度学习模型的构建和理解。这本书因其清晰的语言和揭开复杂思想神秘面纱的方式而受到称赞，使对 Python 有基本了解的读者也能理解。",
            // Russian
            "Русский": "«Глубокое обучение с нуля» Сета Вайдмана — это книга, которая служит мостом между теоретическими основами глубокого обучения и его практическим применением. Он предназначен для того, чтобы провести читателей от основополагающих концепций нейронных сетей к построению и пониманию моделей глубокого обучения.Книгу хвалят за ее ясность и то, как она демистифицирует сложные идеи, делая их доступными для читателей с базовым пониманием Python.",
            // French
            "Français": "« Deep Learning from Scratch » de Seth Weidman est un livre qui sert de pont entre les fondements théoriques de l'apprentissage profond et ses applications pratiques. Il est conçu pour faire voyager les lecteurs depuis les concepts fondamentaux des réseaux de neurones jusqu'à la construction et la compréhension de modèles d'apprentissage profond.Le livre est loué pour sa clarté et la façon dont il démystifie les idées complexes, les rendant accessibles aux lecteurs ayant une compréhension de base de Python.",
            // Japanese
            "日本語": "Seth Weidman 著の「Deep Learning from Scratch」は、ディープラーニングの理論的基礎と実際の応用をつなぐ架け橋となる本です。ニューラル ネットワークの基本概念からディープラーニング モデルの構築と理解まで、読者を旅させるように設計されています。この本は、その明快さと複雑なアイデアをわかりやすく説明し、Python の基礎知識を持つ読者にも理解しやすいようにしている点が高く評価されています。",
            // Korean
            "한국인": "Seth Weidman이 쓴 “Deep Learning from Scratch”는 딥 러닝의 이론적 토대와 실제 적용을 연결하는 다리 역할을 하는 책입니다. 이 책은 독자들이 신경망의 기본 개념부터 딥 러닝 모델의 구성과 이해까지의 여정을 안내하도록 설계되었습니다.이 책은 파이썬에 대한 기본적인 이해를 바탕으로 독자들이 쉽게 접근할 수 있도록 명확성과 복잡한 아이디어를 쉽게 설명하는 방식으로 호평을 받고 있습니다.",
            // Spanish
            "Español": "“Deep Learning from Scratch” de Seth Weidman es un libro que sirve como puente entre los fundamentos teóricos del aprendizaje profundo y sus aplicaciones prácticas. Está diseñado para llevar a los lectores en un viaje desde los conceptos fundamentales de las redes neuronales hasta la construcción y comprensión de modelos de aprendizaje profundo.El libro es elogiado por su claridad y la forma en que desmitifica ideas complejas, haciéndolas accesibles a lectores con un conocimiento básico de Python.",
            // Hindi
            "हिंदी": "सेठ वीडमैन द्वारा लिखित “डीप लर्निंग फ्रॉम स्क्रैच” एक ऐसी किताब है जो डीप लर्निंग के सैद्धांतिक आधार और इसके व्यावहारिक अनुप्रयोगों के बीच एक पुल का काम करती है। इसे पाठकों को तंत्रिका नेटवर्क की मूलभूत अवधारणाओं से लेकर डीप लर्निंग मॉडल के निर्माण और समझ तक की यात्रा पर ले जाने के लिए डिज़ाइन किया गया है। इस पुस्तक की प्रशंसा इसकी स्पष्टता और जटिल विचारों को स्पष्ट करने के तरीके के लिए की जाती है, जिससे वे पायथन की बुनियादी समझ वाले पाठकों के लिए सुलभ हो जाते हैं।",
            // Portuguese
            "Português": "“Deep Learning from Scratch” de Seth Weidman é um livro que serve como uma ponte entre os fundamentos teóricos do aprendizado profundo e suas aplicações práticas. Ele foi projetado para levar os leitores em uma jornada desde os conceitos fundamentais das redes neurais até a construção e compreensão de modelos de aprendizagem profunda.O livro é elogiado por sua clareza e pela forma como desmistifica ideias complexas, tornando-as acessíveis a leitores com conhecimento básico de Python.",
            // Bengali
            "বাংলা": "সেথ ওয়েডম্যানের “ডিপ লার্নিং ফ্রম স্ক্র্যাচ” হল একটি বই যা গভীর শিক্ষার তাত্ত্বিক ভিত্তি এবং এর ব্যবহারিক প্রয়োগের মধ্যে একটি সেতু হিসেবে কাজ করে। এটি পাঠকদের নিউরাল নেটওয়ার্কের মৌলিক ধারণা থেকে গভীর শিক্ষার মডেলের নির্মাণ এবং বোঝার যাত্রায় নিয়ে যাওয়ার জন্য ডিজাইন করা হয়েছে।বইটি এর স্বচ্ছতার জন্য প্রশংসিত হয়েছে এবং এটি যেভাবে জটিল ধারণাগুলিকে অস্পষ্ট করে তোলে, সেগুলি পাঠকদের কাছে পাইথনের প্রাথমিক বোঝার সাথে অ্যাক্সেসযোগ্য করে তোলে৷",
            // Arabic
            "عَرَبِيّ": "“التعلم العميق من الصفر” بقلم سيث ويدمان هو كتاب بمثابة جسر بين الأسس النظرية للتعلم العميق وتطبيقاته العملية. إنه مصمم ليأخذ القراء في رحلة من المفاهيم الأساسية للشبكات العصبية إلى بناء وفهم نماذج التعلم العميق.تمت الإشادة بالكتاب لوضوحه وطريقة إزالة الغموض عن الأفكار المعقدة، مما يجعلها في متناول القراء الذين لديهم فهم أساسي لبايثون.",
            // Persian
            "فارسی": "«یادگیری عمیق از ابتدا» نوشته ست ویدمن کتابی است که به عنوان پلی بین زیربنای نظری یادگیری عمیق و کاربردهای عملی آن عمل می کند. این طراحی شده است تا خوانندگان را به سفری از مفاهیم اساسی شبکه های عصبی تا ساخت و درک مدل های یادگیری عمیق ببرد.این کتاب به دلیل وضوح و روشی که ایده‌های پیچیده را رمزگشایی می‌کند، مورد ستایش قرار می‌گیرد و آن‌ها را برای خوانندگان با درک اولیه پایتون قابل دسترس می‌کند.",
        },
        // Paragraph 2
        {
            // English
            "English": "The book’s primary advantage is its structured approach that combines theory, diagrams, code, and mathematics to provide a holistic understanding of deep learning. Readers benefit from extremely clear mental models, accompanied by working code examples and mathematical explanations, which facilitate a comprehensive grasp of neural networks. This approach ensures that readers not only learn how to implement multilayer neural networks from scratch but also understand the conceptual, computational, and mathematical aspects of what they are doing.",
            // German
            "Deutsch": "Der Hauptvorteil des Buchs ist sein strukturierter Ansatz, der Theorie, Diagramme, Code und Mathematik kombiniert, um ein ganzheitliches Verständnis von Deep Learning zu vermitteln. Die Leser profitieren von äußerst klaren mentalen Modellen, begleitet von funktionierenden Codebeispielen und mathematischen Erklärungen, die ein umfassendes Verständnis neuronaler Netzwerke ermöglichen. Dieser Ansatz stellt sicher, dass die Leser nicht nur lernen, wie man mehrschichtige neuronale Netzwerke von Grund auf implementiert, sondern auch die konzeptionellen, rechnerischen und mathematischen Aspekte ihrer Arbeit verstehen.",
            // Chinese
            "中国人": "本书的主要优势在于其结构化方法，将理论、图表、代码和数学结合在一起，提供对深度学习的整体理解。读者受益于极其清晰的思维模型，并辅以实用的代码示例和数学解释，从而全面掌握神经网络。这种方法确保读者不仅可以学习如何从头开始实现多层神经网络，还可以了解他们所做工作的概念、计算和数学方面。",
            // Russian
            "Русский": "Основным преимуществом книги является ее структурированный подход, который сочетает в себе теорию, диаграммы, код и математику, чтобы обеспечить целостное понимание глубокого обучения. Читатели получают пользу от чрезвычайно ясных мысленных моделей, сопровождаемых примерами рабочего кода и математическими объяснениями, которые способствуют всестороннему пониманию работы нейронных сетей.Такой подход гарантирует, что читатели не только узнают, как реализовать многослойные нейронные сети с нуля, но и поймут концептуальные, вычислительные и математические аспекты того, что они делают.",
            // French
            "Français": "Le principal avantage du livre réside dans son approche structurée qui combine théorie, diagrammes, code et mathématiques pour fournir une compréhension holistique de l’apprentissage profond. Les lecteurs bénéficient de modèles mentaux extrêmement clairs, accompagnés d'exemples de code fonctionnels et d'explications mathématiques, qui facilitent une compréhension globale des réseaux de neurones.Cette approche garantit que les lecteurs apprennent non seulement à implémenter des réseaux de neurones multicouches à partir de zéro, mais qu'ils comprennent également les aspects conceptuels, informatiques et mathématiques de ce qu'ils font.",
            // Japanese
            "日本語": "この本の主な利点は、理論、図、コード、数学を組み合わせて、ディープラーニングの総合的な理解を提供する構造化されたアプローチです。読者は、実用的なコード例と数学的説明を伴う非常に明確なメンタルモデルの恩恵を受け、ニューラルネットワークを包括的に理解することができます。このアプローチにより、読者は多層ニューラルネットワークをゼロから実装する方法を学ぶだけでなく、自分が行っていることの概念的、計算的、数学的側面も理解できるようになります。",
            // Korean
            "한국인": "이 책의 가장 큰 장점은 이론, 다이어그램, 코드, 수학을 결합하여 딥 러닝에 대한 전체적인 이해를 제공하는 구조화된 접근 방식입니다. 독자는 신경망에 대한 포괄적인 이해를 촉진하는 작업 코드 예제 및 수학적 설명과 함께 매우 명확한 정신 모델의 이점을 누릴 수 있습니다.이 접근 방식을 통해 독자는 다층 신경망을 처음부터 구현하는 방법을 배울 수 있을 뿐만 아니라 자신이 수행하는 작업의 개념적, 계산적, 수학적 측면도 이해할 수 있습니다.",
            // Spanish
            "Español": "La principal ventaja del libro es su enfoque estructurado que combina teoría, diagramas, código y matemáticas para proporcionar una comprensión holística del aprendizaje profundo. Los lectores se benefician de modelos mentales extremadamente claros, acompañados de ejemplos de códigos de trabajo y explicaciones matemáticas, que facilitan una comprensión integral de las redes neuronales.Este enfoque garantiza que los lectores no sólo aprendan cómo implementar redes neuronales multicapa desde cero, sino que también comprendan los aspectos conceptuales, computacionales y matemáticos de lo que están haciendo.",
            // Hindi
            "हिंदी": "पुस्तक का मुख्य लाभ इसका संरचित दृष्टिकोण है जो गहन शिक्षण की समग्र समझ प्रदान करने के लिए सिद्धांत, आरेख, कोड और गणित को जोड़ता है। पाठकों को अत्यंत स्पष्ट मानसिक मॉडल से लाभ मिलता है, साथ ही कार्यशील कोड उदाहरण और गणितीय स्पष्टीकरण भी मिलते हैं, जो तंत्रिका नेटवर्क की व्यापक समझ को सुविधाजनक बनाते हैं। यह दृष्टिकोण सुनिश्चित करता है कि पाठक न केवल स्क्रैच से मल्टीलेयर न्यूरल नेटवर्क को लागू करना सीखें बल्कि वे जो कर रहे हैं उसके वैचारिक, कम्प्यूटेशनल और गणितीय पहलुओं को भी समझें।",
            // Portuguese
            "Português": "A principal vantagem do livro é sua abordagem estruturada que combina teoria, diagramas, código e matemática para fornecer uma compreensão holística do aprendizado profundo. Os leitores se beneficiam de modelos mentais extremamente claros, acompanhados de exemplos de códigos funcionais e explicações matemáticas, que facilitam uma compreensão abrangente das redes neurais.Essa abordagem garante que os leitores não apenas aprendam como implementar redes neurais multicamadas do zero, mas também entendam os aspectos conceituais, computacionais e matemáticos do que estão fazendo.",
            // Bengali
            "বাংলা": "বইটির প্রাথমিক সুবিধা হল এর কাঠামোগত পদ্ধতি যা তত্ত্ব, ডায়াগ্রাম, কোড এবং গণিতকে একত্রিত করে গভীর শিক্ষার সামগ্রিক উপলব্ধি প্রদান করে। পাঠকরা অত্যন্ত পরিষ্কার মানসিক মডেল থেকে উপকৃত হন, কাজের কোডের উদাহরণ এবং গাণিতিক ব্যাখ্যা সহ, যা নিউরাল নেটওয়ার্কগুলির একটি বিস্তৃত উপলব্ধি সহজতর করে।এই পদ্ধতিটি নিশ্চিত করে যে পাঠকরা কেবলমাত্র মাল্টিলেয়ার নিউরাল নেটওয়ার্কগুলি কীভাবে স্ক্র্যাচ থেকে প্রয়োগ করতে হয় তা শিখে না বরং তারা যা করছে তার ধারণাগত, গণনামূলক এবং গাণিতিক দিকগুলিও বুঝতে পারে।",
            // Arabic
            "عَرَبِيّ": "الميزة الأساسية للكتاب هي منهجه المنظم الذي يجمع بين النظرية والرسوم البيانية والتعليمات البرمجية والرياضيات لتوفير فهم شامل للتعلم العميق. يستفيد القراء من النماذج العقلية الواضحة للغاية، مصحوبة بأمثلة كود العمل والتفسيرات الرياضية، والتي تسهل الفهم الشامل للشبكات العصبية.يضمن هذا النهج ألا يتعلم القراء كيفية تنفيذ الشبكات العصبية متعددة الطبقات من الصفر فحسب، بل يضمن أيضًا فهم الجوانب المفاهيمية والحسابية والرياضية لما يفعلونه.",
            // Persian
            "فارسی": "مزیت اصلی این کتاب رویکرد ساختاری آن است که تئوری، نمودارها، کدها و ریاضیات را برای ارائه درک جامعی از یادگیری عمیق ترکیب می‌کند. خوانندگان از مدل‌های ذهنی بسیار واضح، همراه با نمونه‌های کد کار و توضیحات ریاضی بهره می‌برند، که درک جامع شبکه‌های عصبی را تسهیل می‌کند.این رویکرد تضمین می‌کند که خوانندگان نه تنها نحوه پیاده‌سازی شبکه‌های عصبی چندلایه را از ابتدا یاد می‌گیرند، بلکه جنبه‌های مفهومی، محاسباتی و ریاضی کاری که انجام می‌دهند را نیز درک می‌کنند.",
        },
        // Paragraph 3
        {
            // English
            "English": "By reading “Deep Learning from Scratch” readers will gain the confidence to build their own neural networks and use frameworks like PyTorch with a solid understanding of each step. The book’s content is laid out in a non-intimidating manner, with the author explaining complex terms simply and with helpful visualizations. This makes the book an excellent resource for those who wish to delve into the depths of deep learning, providing a strong foundation that makes learning complex related topics easier.",
            // German
            "Deutsch": "Durch die Lektüre von „Deep Learning from Scratch“ gewinnen die Leser das Selbstvertrauen, ihre eigenen neuronalen Netzwerke aufzubauen und Frameworks wie PyTorch zu verwenden, wobei sie jeden Schritt gut verstehen. Der Inhalt des Buchs ist auf eine nicht einschüchternde Art und Weise aufgebaut, wobei der Autor komplexe Begriffe einfach und mit hilfreichen Visualisierungen erklärt. Dies macht das Buch zu einer hervorragenden Ressource für alle, die sich in die Tiefen des Deep Learning vertiefen möchten, und bietet eine solide Grundlage, die das Erlernen komplexer verwandter Themen erleichtert.",
            // Chinese
            "中国人": "通过阅读《从头开始深度学习》，读者将有信心构建自己的神经网络并使用 PyTorch 等框架，并对每个步骤有扎实的理解。本书的内容布局并不令人生畏，作者用简单易懂的方式解释了复杂的术语，并附有有用的可视化效果。这使得本书成为那些希望深入研究深度学习的人的绝佳资源，为学习复杂的相关主题奠定了坚实的基础。",
            // Russian
            "Русский": "Прочитав «Глубокое обучение с нуля», читатели обретут уверенность в создании собственных нейронных сетей и использовании таких фреймворков, как PyTorch, с четким пониманием каждого шага. Содержание книги изложено в непугающей манере: автор просто объясняет сложные термины с помощью полезных визуализаций.Это делает книгу отличным ресурсом для тех, кто хочет углубиться в глубины глубокого обучения, обеспечивая прочную основу, облегчающую изучение сложных смежных тем.",
            // French
            "Français": "En lisant « Deep Learning from Scratch », les lecteurs acquerront la confiance nécessaire pour construire leurs propres réseaux de neurones et utiliser des frameworks comme PyTorch avec une solide compréhension de chaque étape. Le contenu du livre est présenté de manière non intimidante, l’auteur expliquant simplement les termes complexes et avec des visualisations utiles.Cela fait de ce livre une excellente ressource pour ceux qui souhaitent approfondir l’apprentissage profond, fournissant une base solide qui facilite l’apprentissage de sujets connexes complexes.",
            // Japanese
            "日本語": "「ゼロから学ぶディープラーニング」を読むことで、読者は各ステップをしっかりと理解した上で、独自のニューラルネットワークを構築し、PyTorch などのフレームワークを使用する自信が得られます。本書の内容は、著者が複雑な用語をわかりやすく、わかりやすい視覚化で説明しており、威圧感を与えない構成になっています。そのため、本書はディープラーニングの深みを探求したい人にとって優れたリソースとなり、複雑な関連トピックの学習を容易にする強力な基盤を提供します。",
            // Korean
            "한국인": "“처음부터 딥 러닝”을 읽으면 독자는 각 단계를 확실하게 이해하면서 자신만의 신경망을 구축하고 PyTorch와 같은 프레임워크를 사용할 수 있다는 자신감을 얻게 될 것입니다. 책의 내용은 저자가 복잡한 용어를 간단하고 유용한 시각화로 설명하는 등 위협적이지 않은 방식으로 구성되어 있습니다.따라서 이 책은 딥 러닝의 깊이를 탐구하려는 사람들에게 훌륭한 리소스가 되며 복잡한 관련 주제를 더 쉽게 학습할 수 있는 강력한 기반을 제공합니다.",
            // Spanish
            "Español": "Al leer “Aprendizaje profundo desde cero”, los lectores obtendrán la confianza para construir sus propias redes neuronales y utilizar marcos como PyTorch con una sólida comprensión de cada paso. El contenido del libro está presentado de una manera no intimidante, y el autor explica términos complejos de forma sencilla y con visualizaciones útiles.Esto hace que el libro sea un recurso excelente para aquellos que desean profundizar en las profundidades del aprendizaje profundo, proporcionando una base sólida que facilita el aprendizaje de temas complejos relacionados.",
            // Hindi
            "हिंदी": "“डीप लर्निंग फ्रॉम स्क्रैच” को पढ़कर पाठकों को अपने स्वयं के न्यूरल नेटवर्क बनाने और प्रत्येक चरण की ठोस समझ के साथ PyTorch जैसे फ्रेमवर्क का उपयोग करने का आत्मविश्वास मिलेगा। पुस्तक की सामग्री को गैर-डराने वाले तरीके से प्रस्तुत किया गया है, जिसमें लेखक जटिल शब्दों को सरलता से और सहायक विज़ुअलाइज़ेशन के साथ समझाता है। यह पुस्तक उन लोगों के लिए एक उत्कृष्ट संसाधन बनाती है जो गहन शिक्षण की गहराई में उतरना चाहते हैं, एक मजबूत आधार प्रदान करते हैं जो जटिल संबंधित विषयों को सीखना आसान बनाता है।",
            // Portuguese
            "Português": "Ao ler “Deep Learning from Scratch”, os leitores ganharão confiança para construir suas próprias redes neurais e usar estruturas como PyTorch com um conhecimento sólido de cada etapa. O conteúdo do livro é apresentado de maneira não intimidante, com o autor explicando termos complexos de forma simples e com visualizações úteis.Isso torna o livro um excelente recurso para aqueles que desejam se aprofundar no aprendizado profundo, fornecendo uma base sólida que facilita o aprendizado de tópicos relacionados complexos.",
            // Bengali
            "বাংলা": "“ডিপ লার্নিং ফ্রম স্ক্র্যাচ” পড়ার মাধ্যমে পাঠকরা তাদের নিজস্ব নিউরাল নেটওয়ার্ক তৈরি করতে এবং প্রতিটি ধাপের দৃঢ় বোঝার সাথে PyTorch-এর মতো ফ্রেমওয়ার্ক ব্যবহার করার আত্মবিশ্বাস অর্জন করবে। বইটির বিষয়বস্তু অ-ভীতিকর পদ্ধতিতে সাজানো হয়েছে, লেখক জটিল পদগুলি সহজভাবে এবং সহায়ক ভিজ্যুয়ালাইজেশনের সাথে ব্যাখ্যা করেছেন।এটি বইটিকে তাদের জন্য একটি চমৎকার সম্পদ করে তোলে যারা গভীর শিক্ষার গভীরতায় যেতে চায়, একটি শক্তিশালী ভিত্তি প্রদান করে যা জটিল সম্পর্কিত বিষয়গুলি শেখা সহজ করে তোলে।",
            // Arabic
            "عَرَبِيّ": "من خلال قراءة 'التعلم العميق من الصفر'، سيكتسب القراء الثقة لبناء شبكاتهم العصبية الخاصة واستخدام أطر عمل مثل PyTorch مع فهم قوي لكل خطوة. تم وضع محتوى الكتاب بطريقة غير مخيفة، حيث يشرح المؤلف المصطلحات المعقدة ببساطة وبتصورات مفيدة.وهذا يجعل الكتاب مصدرًا ممتازًا لأولئك الذين يرغبون في التعمق في أعماق التعلم العميق، حيث يوفر أساسًا قويًا يجعل تعلم الموضوعات المعقدة ذات الصلة أسهل.",
            // Persian
            "فارسی": "با خواندن 'یادگیری عمیق از ابتدا' خوانندگان اعتماد به نفس ایجاد شبکه های عصبی خود و استفاده از چارچوب هایی مانند PyTorch را با درک کامل از هر مرحله به دست می آورند. محتوای کتاب به شیوه‌ای غیر ترسناک تنظیم شده است و نویسنده اصطلاحات پیچیده را به سادگی و با تجسم‌های مفید توضیح می‌دهد.این کتاب را به منبعی عالی برای کسانی تبدیل می‌کند که می‌خواهند در اعماق یادگیری عمیق کاوش کنند و پایه‌ای قوی فراهم کند که یادگیری موضوعات پیچیده مرتبط را آسان‌تر می‌کند.",
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
        document.title = "MHA - " + deep_learning_from_scratch["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = deep_learning_from_scratch["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = deep_learning_from_scratch["TotalDescriptionAboutTheBook"][index][newLanguage];
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