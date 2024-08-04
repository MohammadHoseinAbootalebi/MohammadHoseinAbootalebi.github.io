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
var learn_django_in_twenty_four_hours = {
    "BookName": "Learn Django in 24 Hours",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "HTML and CSS",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces HTML (Hyper Text Markup Language) and CSS (Cascading Style Sheets), explaining their roles in web development. HTML structures a web page using elements defined by open and close tags, organized into a for metadata and a for content, while the DOM (Document Object Model) represents the document's logical structure. CSS enhances the visual presentation of HTML documents, with three types: Internal, External, and Inline CSS, promoting cleaner code and efficient styling across multiple pages. The chapter emphasizes best practices for using tags, IDs, and CSS properties to create a well-structured and visually appealing web project.",
                // German
                "Deutsch": "In diesem Kapitel werden HTML (Hyper Text Markup Language) und CSS (Cascading Style Sheets) vorgestellt und ihre Rolle bei der Webentwicklung erläutert. HTML strukturiert eine Webseite mithilfe von Elementen, die durch öffnende und schließende Tags definiert sind und in einen für Metadaten und einen für Inhalt organisiert sind, während das DOM (Document Object Model) die logische Struktur des Dokuments darstellt. CSS verbessert die visuelle Darstellung von HTML-Dokumenten mit drei Typen: Internes, externes und Inline-CSS, wodurch saubererer Code und effizientes Styling über mehrere Seiten hinweg gefördert werden. Das Kapitel betont bewährte Methoden für die Verwendung von Tags, IDs und CSS-Eigenschaften, um ein gut strukturiertes und optisch ansprechendes Webprojekt zu erstellen.",
                // Chinese
                "中国人": "本章介绍 HTML（超文本标记语言）和 CSS（层叠样式表），解释它们在 Web 开发中的作用。HTML 使用由打开和关闭标记定义的元素构建网页，这些元素分为元数据和内容，而 DOM（文档对象模型）则表示文档的逻辑结构。CSS 增强了 HTML 文档的视觉呈现，具有三种类型：内部 CSS、外部 CSS 和内联 CSS，从而促进了代码更简洁、样式更高效的跨多个页面设计。本章重点介绍了使用标记、ID 和 CSS 属性来创建结构良好且外观美观的 Web 项目的最佳实践。",
                // Russian
                "Русский": "В этой главе рассматриваются HTML (язык гипертекстовой разметки) и CSS (каскадные таблицы стилей), а также объясняется их роль в веб-разработке. HTML структурирует веб-страницу с помощью элементов, определенных открытыми и закрытыми тегами, организованными в метаданные и содержимое, в то время как DOM (объектная модель документа) представляет логическую структуру документа. CSS улучшает визуальное представление HTML-документов с помощью трех типов: внутренний, внешний и встроенный CSS, что способствует более чистому коду и эффективному оформлению на нескольких страницах. В главе подчеркивается передовой опыт использования тегов, идентификаторов и свойств CSS для создания хорошо структурированного и визуально привлекательного веб-проекта.",
                // French
                "Français": "Ce chapitre présente le langage HTML (Hyper Text Markup Language) et les feuilles de style en cascade (Cascading Style Sheets), en expliquant leurs rôles dans le développement Web. Le langage HTML structure une page Web à l'aide d'éléments définis par des balises d'ouverture et de fermeture, organisées en un pour les métadonnées et un pour le contenu, tandis que le DOM (Document Object Model) représente la structure logique du document. Le CSS améliore la présentation visuelle des documents HTML, avec trois types : CSS interne, externe et en ligne, favorisant un code plus propre et un style efficace sur plusieurs pages. Le chapitre met l'accent sur les meilleures pratiques d'utilisation des balises, des identifiants et des propriétés CSS pour créer un projet Web bien structuré et visuellement attrayant.",
                // Japanese
                "日本語": "この章では、HTML (Hyper Text Markup Language) と CSS (Cascading Style Sheets) を紹介し、Web 開発におけるそれらの役割について説明します。HTML は、開始タグと終了タグで定義される要素を使用して Web ページを構成し、メタデータ用の とコンテンツ用の に編成されます。一方、DOM (Document Object Model) はドキュメントの論理構造を表します。CSS は、内部 CSS、外部 CSS、インライン CSS の 3 つのタイプを使用して HTML ドキュメントの視覚的な表現を強化し、複数のページにわたってよりクリーンなコードと効率的なスタイルを促進します。この章では、タグ、ID、および CSS プロパティを使用して、構造が適切で視覚的に魅力的な Web プロジェクトを作成するためのベスト プラクティスを強調します。",
                // Korean
                "한국인": "이 장에서는 HTML(Hyper Text Markup Language)과 CSS(Cascading Style Sheets)를 소개하고 웹 개발에서 두 가지의 역할을 설명합니다. HTML은 메타데이터와 콘텐츠로 구성된 여는 태그와 닫는 태그로 정의된 요소를 사용하여 웹 페이지를 구조화하는 반면, DOM(Document Object Model)은 문서의 논리적 구조를 나타냅니다. CSS는 내부, 외부 및 인라인 CSS의 세 가지 유형으로 HTML 문서의 시각적 표현을 향상시켜 여러 페이지에서 더 깔끔한 코드와 효율적인 스타일을 촉진합니다. 이 장에서는 태그, ID 및 CSS 속성을 사용하여 잘 구조화되고 시각적으로 매력적인 웹 프로젝트를 만드는 모범 사례를 강조합니다.",
                // Spanish
                "Español": "Este capítulo presenta HTML (lenguaje de marcado de hipertexto) y CSS (hojas de estilo en cascada), explicando sus funciones en el desarrollo web. HTML estructura una página web utilizando elementos definidos por etiquetas de apertura y cierre, organizados en un for de metadatos y un for de contenido, mientras que el DOM (modelo de objetos del documento) representa la estructura lógica del documento. CSS mejora la presentación visual de los documentos HTML, con tres tipos: CSS interno, externo y en línea, lo que promueve un código más limpio y un estilo eficiente en varias páginas. El capítulo enfatiza las mejores prácticas para usar etiquetas, identificadores y propiedades CSS para crear un proyecto web bien estructurado y visualmente atractivo.",
                // Hindi
                "हिंदी": "यह अध्याय HTML (हाइपर टेक्स्ट मार्कअप लैंग्वेज) और CSS (कैस्केडिंग स्टाइल शीट्स) का परिचय देता है, तथा वेब विकास में उनकी भूमिका को समझाता है। HTML ओपन और क्लोज टैग द्वारा परिभाषित तत्वों का उपयोग करके वेब पेज की संरचना करता है, जो मेटाडेटा के लिए और कंटेंट के लिए व्यवस्थित होते हैं, जबकि DOM (डॉक्यूमेंट ऑब्जेक्ट मॉडल) दस्तावेज़ की तार्किक संरचना का प्रतिनिधित्व करता है। CSS तीन प्रकारों के साथ HTML दस्तावेज़ों की दृश्य प्रस्तुति को बढ़ाता है: आंतरिक, बाहरी और इनलाइन CSS, जो कई पृष्ठों में क्लीनर कोड और कुशल स्टाइलिंग को बढ़ावा देता है। यह अध्याय एक अच्छी तरह से संरचित और दृश्यमान रूप से आकर्षक वेब प्रोजेक्ट बनाने के लिए टैग, आईडी और CSS गुणों का उपयोग करने के सर्वोत्तम तरीकों पर जोर देता है।",
                // Portuguese
                "Português": "Este capítulo apresenta o HTML (Hyper Text Markup Language) e o CSS (Cascading Style Sheets), explicando as suas funções no desenvolvimento web. O HTML estrutura uma página web utilizando elementos definidos por tags de abertura e fecho, organizados em for metadata e for content, enquanto o DOM (Document Object Model) representa a estrutura lógica do documento. O CSS melhora a apresentação visual de documentos HTML, com três tipos: CSS Interno, Externo e Inline, promovendo um código mais limpo e um estilo eficiente em várias páginas. O capítulo enfatiza as melhores práticas para a utilização de tags, IDs e propriedades CSS para criar um projeto web bem estruturado e visualmente apelativo.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে এইচটিএমএল (হাইপার টেক্সট মার্কআপ ল্যাঙ্গুয়েজ) এবং সিএসএস (ক্যাসকেডিং স্টাইল শীট) প্রবর্তন করা হয়েছে, ওয়েব ডেভেলপমেন্টে তাদের ভূমিকা ব্যাখ্যা করে। HTML ওপেন এবং ক্লোজ ট্যাগ দ্বারা সংজ্ঞায়িত উপাদানগুলি ব্যবহার করে একটি ওয়েব পৃষ্ঠা গঠন করে, মেটাডেটার জন্য এবং একটি বিষয়বস্তুর জন্য সংগঠিত হয়, যখন DOM (ডকুমেন্ট অবজেক্ট মডেল) নথির যৌক্তিক কাঠামোর প্রতিনিধিত্ব করে। CSS এইচটিএমএল ডকুমেন্টের ভিজ্যুয়াল প্রেজেন্টেশন বাড়ায়, তিন ধরনের: ইন্টারনাল, এক্সটার্নাল এবং ইনলাইন সিএসএস, ক্লিনার কোড প্রচার করে এবং একাধিক পৃষ্ঠা জুড়ে দক্ষ স্টাইলিং। অধ্যায়টি একটি সুগঠিত এবং দৃশ্যত আকর্ষণীয় ওয়েব প্রকল্প তৈরি করতে ট্যাগ, আইডি এবং CSS বৈশিষ্ট্যগুলি ব্যবহার করার জন্য সর্বোত্তম অনুশীলনের উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل مقدمة عن لغة ترميز النص التشعبي (HTML) وCSS (أوراق الأنماط المتتالية)، موضحًا أدوارهما في تطوير الويب. تقوم لغة HTML ببناء صفحة الويب باستخدام عناصر محددة بواسطة علامات الفتح والإغلاق، والتي يتم تنظيمها في نموذج لبيانات التعريف ونموذج للمحتوى، بينما يمثل نموذج كائن المستند (DOM) البنية المنطقية للمستند. تعمل CSS على تحسين العرض المرئي لمستندات HTML، بثلاثة أنواع: CSS داخلي وخارجي ومضمن، مما يعزز من وضوح الكود والتنسيق الفعّال عبر صفحات متعددة. يؤكد الفصل على أفضل الممارسات لاستخدام العلامات والمعرفات وخصائص CSS لإنشاء مشروع ويب منظم جيدًا وجذاب بصريًا.",
                // Persian
                "فارسی": "این فصل HTML (زبان نشانه گذاری هایپر متن) و CSS (برگ های سبک آبشاری) را معرفی می کند و نقش آنها را در توسعه وب توضیح می دهد. HTML یک صفحه وب را با استفاده از عناصر تعریف شده توسط تگ های باز و بسته، که به صورت a برای ابرداده و a برای محتوا سازماندهی شده اند، ساختار می دهد، در حالی که DOM (مدل شی سند) ساختار منطقی سند را نشان می دهد. CSS ارائه بصری اسناد HTML را با سه نوع CSS داخلی، خارجی و درون خطی بهبود می‌بخشد، کد پاک‌تر و یک ظاهر طراحی کارآمد را در چندین صفحه ارتقا می‌دهد. این فصل بر بهترین شیوه‌ها برای استفاده از برچسب‌ها، شناسه‌ها و ویژگی‌های CSS برای ایجاد یک پروژه وب با ساختار و بصری جذاب تأکید می‌کند.",
            },
        },
        // 2
        {
            "ChapterName": "Introduction to JavaScript",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces Javascript as an event-driven programming language primarily used to enhance web page behavior through functions triggered by user interactions, such as button clicks. It covers variable declaration methods, emphasizing the preference, and explains the use of the tag for data entry, highlighting methods for data submission. Additionally, the chapter discusses common Javascript events, and provides insights into handling user input and displaying messages using pre-built functions.",
                // German
                "Deutsch": "In diesem Kapitel wird Javascript als ereignisgesteuerte Programmiersprache vorgestellt, die in erster Linie dazu verwendet wird, das Verhalten von Webseiten durch Funktionen zu verbessern, die durch Benutzerinteraktionen, wie z. B. das Klicken auf Schaltflächen, ausgelöst werden. Es behandelt Methoden zur Variablendeklaration, wobei die Präferenz hervorgehoben wird, und erklärt die Verwendung des Tags zur Dateneingabe, wobei Methoden zur Datenübermittlung hervorgehoben werden. Darüber hinaus werden in diesem Kapitel gängige Javascript-Ereignisse erörtert und Einblicke in die Verarbeitung von Benutzereingaben und die Anzeige von Nachrichten mithilfe vorgefertigter Funktionen gegeben.",
                // Chinese
                "中国人": "本章介绍了 JavaScript，这是一种事件驱动的编程语言，主要用于通过用户交互（例如按钮点击）触发的函数来增强网页行为。它涵盖了变量声明方法，强调了首选项，并解释了标签用于数据输入的用途，重点介绍了数据提交的方法。此外，本章还讨论了常见的 JavaScript 事件，并提供了有关使用预构建函数处理用户输入和显示消息的见解。",
                // Russian
                "Русский": "В этой главе рассматривается Javascript как язык программирования, управляемый событиями, который в первую очередь используется для улучшения поведения веб-страницы с помощью функций, запускаемых взаимодействием пользователя, например, нажатием кнопок. В ней рассматриваются методы объявления переменных, подчеркиваются предпочтения, а также объясняется использование тега для ввода данных, выделяются методы отправки данных. Кроме того, в главе обсуждаются общие события Javascript и дается представление об обработке пользовательского ввода и отображении сообщений с использованием готовых функций.",
                // French
                "Français": "Ce chapitre présente Javascript comme un langage de programmation piloté par événements, principalement utilisé pour améliorer le comportement des pages Web grâce à des fonctions déclenchées par les interactions des utilisateurs, telles que les clics sur les boutons. Il couvre les méthodes de déclaration des variables, en mettant l'accent sur la préférence, et explique l'utilisation de la balise pour la saisie de données, en mettant en évidence les méthodes de soumission des données. De plus, le chapitre aborde les événements Javascript courants et fournit des informations sur la gestion des entrées utilisateur et l'affichage des messages à l'aide de fonctions prédéfinies.",
                // Japanese
                "日本語": "この章では、ボタンのクリックなどのユーザー操作によってトリガーされる関数を通じて Web ページの動作を強化するために主に使用されるイベント駆動型プログラミング言語としての JavaScript を紹介します。変数宣言方法について説明し、設定を強調し、データ入力用のタグの使用について説明し、データ送信方法を強調します。さらに、この章では一般的な JavaScript イベントについて説明し、ユーザー入力の処理と、あらかじめ構築された関数を使用したメッセージの表示に関する洞察を提供します。",
                // Korean
                "한국인": "이 장에서는 주로 버튼 클릭과 같은 사용자 상호작용에 의해 트리거되는 함수를 통해 웹 페이지 동작을 향상시키는 데 사용되는 이벤트 기반 프로그래밍 언어인 Javascript를 소개합니다. 변수 선언 방법을 다루고 선호도를 강조하며 데이터 입력을 위한 태그 사용을 설명하고 데이터 제출 방법을 강조합니다. 또한 이 장에서는 일반적인 Javascript 이벤트를 논의하고 미리 빌드된 함수를 사용하여 사용자 입력을 처리하고 메시지를 표시하는 방법에 대한 통찰력을 제공합니다.",
                // Spanish
                "Español": "Este capítulo presenta Javascript como un lenguaje de programación basado en eventos que se utiliza principalmente para mejorar el comportamiento de las páginas web a través de funciones activadas por interacciones del usuario, como clics en botones. Abarca los métodos de declaración de variables, haciendo hincapié en la preferencia, y explica el uso de la etiqueta para la entrada de datos, destacando los métodos para el envío de datos. Además, el capítulo analiza los eventos comunes de Javascript y proporciona información sobre el manejo de la entrada del usuario y la visualización de mensajes mediante funciones predefinidas.",
                // Hindi
                "हिंदी": "यह अध्याय जावास्क्रिप्ट को एक इवेंट-संचालित प्रोग्रामिंग भाषा के रूप में पेश करता है जिसका उपयोग मुख्य रूप से बटन क्लिक जैसे उपयोगकर्ता इंटरैक्शन द्वारा ट्रिगर किए गए फ़ंक्शन के माध्यम से वेब पेज व्यवहार को बढ़ाने के लिए किया जाता है। यह चर घोषणा विधियों को शामिल करता है, वरीयता पर जोर देता है, और डेटा प्रविष्टि के लिए टैग के उपयोग को समझाता है, डेटा सबमिशन के लिए विधियों को हाइलाइट करता है। इसके अतिरिक्त, अध्याय सामान्य जावास्क्रिप्ट घटनाओं पर चर्चा करता है, और उपयोगकर्ता इनपुट को संभालने और पूर्व-निर्मित फ़ंक्शन का उपयोग करके संदेशों को प्रदर्शित करने में अंतर्दृष्टि प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo apresenta o Javascript como uma linguagem de programação orientada a eventos, utilizada principalmente para melhorar o comportamento das páginas Web através de funções acionadas pelas interações do utilizador, como cliques em botões. Abrange os métodos de declaração de variáveis, enfatizando a preferência, e explica a utilização da etiqueta para a introdução de dados, destacando os métodos para o envio de dados. Além disso, o capítulo discute eventos Javascript comuns e fornece informações sobre como lidar com a entrada do utilizador e exibir mensagens utilizando funções pré-construídas.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি জাভাস্ক্রিপ্টকে একটি ইভেন্ট-চালিত প্রোগ্রামিং ভাষা হিসাবে পরিচয় করিয়ে দেয় যা প্রাথমিকভাবে ব্যবহারকারীর মিথস্ক্রিয়া দ্বারা ট্রিগার করা ফাংশনগুলির মাধ্যমে ওয়েব পৃষ্ঠার আচরণ উন্নত করতে ব্যবহৃত হয়, যেমন বোতাম ক্লিক। এটি পরিবর্তনশীল ঘোষণা পদ্ধতি কভার করে, পছন্দের উপর জোর দেয় এবং ডেটা এন্ট্রির জন্য ট্যাগের ব্যবহার ব্যাখ্যা করে, ডেটা জমা দেওয়ার পদ্ধতি হাইলাইট করে। অতিরিক্তভাবে, অধ্যায়টি সাধারণ জাভাস্ক্রিপ্ট ইভেন্টগুলি নিয়ে আলোচনা করে এবং ব্যবহারকারীর ইনপুট পরিচালনা এবং পূর্ব-নির্মিত ফাংশনগুলি ব্যবহার করে বার্তাগুলি প্রদর্শন করার অন্তর্দৃষ্টি প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل لغة Javascript كلغة برمجة تعتمد على الأحداث وتستخدم في المقام الأول لتحسين سلوك صفحات الويب من خلال الوظائف التي يتم تشغيلها من خلال تفاعلات المستخدم، مثل نقرات الأزرار. ويغطي طرق إعلان المتغيرات، مع التركيز على التفضيل، ويشرح استخدام العلامة لإدخال البيانات، مع تسليط الضوء على طرق إرسال البيانات. بالإضافة إلى ذلك، يناقش الفصل أحداث Javascript الشائعة، ويوفر رؤى حول التعامل مع إدخال المستخدم وعرض الرسائل باستخدام وظائف مُعدّة مسبقًا.",
                // Persian
                "فارسی": "این فصل جاوا اسکریپت را به‌عنوان یک زبان برنامه‌نویسی رویداد محور معرفی می‌کند که عمدتاً برای بهبود رفتار صفحه وب از طریق عملکردهایی که توسط تعاملات کاربر ایجاد می‌شوند، مانند کلیک دکمه‌ها، استفاده می‌شود. روش‌های اعلام متغیر را پوشش می‌دهد، بر اولویت تأکید می‌کند، و استفاده از برچسب را برای ورود داده‌ها توضیح می‌دهد، روش‌های ارسال داده را برجسته می‌کند. علاوه بر این، این فصل رویدادهای رایج جاوا اسکریپت را مورد بحث قرار می دهد و بینش هایی را در مورد مدیریت ورودی کاربر و نمایش پیام ها با استفاده از توابع از پیش ساخته شده ارائه می دهد.",
            },
        },
        // 3
        {
            "ChapterName": "How to Mobile Optimize a Website",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter emphasizes the necessity of making websites responsive to ensure they are readable and visually appealing on all devices. It outlines three key rules for mobile optimization: adding a responsive meta tag in the section, using percentage values for height and width instead of fixed dimensions, and implementing media queries to adjust styles based on device width. The chapter provides examples of media queries for both minimum and maximum widths of 600px and suggests using Chrome Developer Tools to simulate mobile views for effective testing.",
                // German
                "Deutsch": "In diesem Kapitel wird die Notwendigkeit betont, Websites responsiv zu gestalten, um sicherzustellen, dass sie auf allen Geräten lesbar und optisch ansprechend sind. Es werden drei wichtige Regeln für die mobile Optimierung beschrieben: Hinzufügen eines responsiven Meta-Tags im Abschnitt, Verwenden von Prozentwerten für Höhe und Breite anstelle von festen Abmessungen und Implementieren von Medienabfragen, um Stile basierend auf der Gerätebreite anzupassen. Das Kapitel enthält Beispiele für Medienabfragen für eine Mindest- und Maximalbreite von 600 Pixeln und schlägt die Verwendung von Chrome Developer Tools vor, um mobile Ansichten für effektive Tests zu simulieren.",
                // Chinese
                "中国人": "本章强调了使网站具有响应性以确保其在所有设备上都具有可读性和视觉吸引力的必要性。它概述了移动优化的三个关键规则：在部分中添加响应式元标记、使用百分比值代替固定尺寸的高度和宽度以及实施媒体查询以根据设备宽度调整样式。本章提供了最小和最大宽度为 600px 的媒体查询示例，并建议使用 Chrome 开发人员工具模拟移动视图以进行有效测试。",
                // Russian
                "Русский": "В этой главе подчеркивается необходимость создания адаптивных веб-сайтов, чтобы они были читабельными и визуально привлекательными на всех устройствах. В ней излагаются три ключевых правила мобильной оптимизации: добавление адаптивного метатега в раздел, использование процентных значений для высоты и ширины вместо фиксированных размеров и реализация медиазапросов для настройки стилей в зависимости от ширины устройства. В главе приводятся примеры медиазапросов для минимальной и максимальной ширины 600 пикселей и предлагается использовать Chrome Developer Tools для имитации мобильных представлений для эффективного тестирования.",
                // French
                "Français": "Ce chapitre met l'accent sur la nécessité de rendre les sites Web réactifs pour garantir leur lisibilité et leur attrait visuel sur tous les appareils. Il décrit trois règles clés pour l'optimisation mobile : l'ajout d'une balise méta réactive dans la section, l'utilisation de valeurs de pourcentage pour la hauteur et la largeur au lieu de dimensions fixes et l'implémentation de requêtes multimédias pour ajuster les styles en fonction de la largeur de l'appareil. Le chapitre fournit des exemples de requêtes multimédias pour des largeurs minimales et maximales de 600 px et suggère d'utiliser les outils de développement Chrome pour simuler les vues mobiles afin de réaliser des tests efficaces.",
                // Japanese
                "日本語": "この章では、ウェブサイトをレスポンシブにして、あらゆるデバイスで読みやすく、見た目も美しくする必要性を強調しています。モバイル最適化の 3 つの重要なルール、つまり、セクションにレスポンシブ メタ タグを追加すること、高さと幅に固定寸法ではなくパーセンテージ値を使用すること、メディア クエリを実装してデバイスの幅に基づいてスタイルを調整することについて説明します。この章では、最小幅と最大幅の両方で 600 ピクセルのメディア クエリの例を示し、Chrome デベロッパー ツールを使用してモバイル ビューをシミュレートし、効果的なテストを行うことを提案しています。",
                // Korean
                "한국인": "이 장에서는 모든 기기에서 읽기 쉽고 시각적으로 매력적인 웹사이트를 반응형으로 만드는 것의 필요성을 강조합니다. 모바일 최적화를 위한 세 가지 핵심 규칙을 설명합니다. 섹션에 반응형 메타 태그를 추가하고, 고정된 치수 대신 높이와 너비에 백분율 값을 사용하고, 미디어 쿼리를 구현하여 기기 너비에 따라 스타일을 조정합니다. 이 장에서는 최소 및 최대 너비 600px에 대한 미디어 쿼리의 예를 제공하고 효과적인 테스트를 위해 Chrome 개발자 도구를 사용하여 모바일 뷰를 시뮬레이션하는 것을 제안합니다.",
                // Spanish
                "Español": "En este capítulo se hace hincapié en la necesidad de que los sitios web sean responsivos para garantizar que sean legibles y visualmente atractivos en todos los dispositivos. Se describen tres reglas clave para la optimización móvil: agregar una etiqueta meta responsiva en la sección, usar valores porcentuales para la altura y el ancho en lugar de dimensiones fijas e implementar consultas de medios para ajustar los estilos en función del ancho del dispositivo. El capítulo proporciona ejemplos de consultas de medios para anchos mínimos y máximos de 600 px y sugiere usar las herramientas para desarrolladores de Chrome para simular vistas móviles para realizar pruebas efectivas.",
                // Hindi
                "हिंदी": "यह अध्याय वेबसाइटों को रिस्पॉन्सिव बनाने की आवश्यकता पर जोर देता है ताकि यह सुनिश्चित हो सके कि वे सभी डिवाइस पर पढ़ने योग्य और दिखने में आकर्षक हों। यह मोबाइल ऑप्टिमाइज़ेशन के लिए तीन मुख्य नियमों की रूपरेखा तैयार करता है: अनुभाग में रिस्पॉन्सिव मेटा टैग जोड़ना, निश्चित आयामों के बजाय ऊंचाई और चौड़ाई के लिए प्रतिशत मानों का उपयोग करना, और डिवाइस की चौड़ाई के आधार पर शैलियों को समायोजित करने के लिए मीडिया क्वेरीज़ को लागू करना। यह अध्याय 600px की न्यूनतम और अधिकतम चौड़ाई दोनों के लिए मीडिया क्वेरीज़ के उदाहरण प्रदान करता है और प्रभावी परीक्षण के लिए मोबाइल दृश्यों का अनुकरण करने के लिए Chrome डेवलपर टूल का उपयोग करने का सुझाव देता है।",
                // Portuguese
                "Português": "Este capítulo enfatiza a necessidade de tornar os sites responsivos para garantir que são legíveis e visualmente apelativos em todos os dispositivos. Descreve três regras principais para a otimização móvel: adicionar uma meta tag responsiva na secção, utilizar valores percentuais para altura e largura em vez de dimensões fixas e implementar media queries para ajustar estilos com base na largura do dispositivo. O capítulo fornece exemplos de consultas de media para larguras mínima e máxima de 600px e sugere a utilização das Ferramentas de Programador do Chrome para simular visualizações móveis para testes eficazes.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে ওয়েবসাইটগুলিকে প্রতিক্রিয়াশীল করে তোলার প্রয়োজনীয়তার উপর জোর দেওয়া হয়েছে যাতে তারা সমস্ত ডিভাইসে পঠনযোগ্য এবং দৃশ্যত আকর্ষণীয় হয়। এটি মোবাইল অপ্টিমাইজেশানের জন্য তিনটি মূল নিয়মের রূপরেখা দেয়: বিভাগে একটি প্রতিক্রিয়াশীল মেটা ট্যাগ যোগ করা, নির্দিষ্ট মাত্রার পরিবর্তে উচ্চতা এবং প্রস্থের জন্য শতাংশ মান ব্যবহার করা এবং ডিভাইসের প্রস্থের উপর ভিত্তি করে শৈলী সামঞ্জস্য করার জন্য মিডিয়া প্রশ্নগুলি বাস্তবায়ন করা। অধ্যায়টি ন্যূনতম এবং সর্বোচ্চ 600px উভয় প্রস্থের জন্য মিডিয়া প্রশ্নের উদাহরণ প্রদান করে এবং কার্যকর পরীক্ষার জন্য মোবাইল ভিউ অনুকরণ করতে Chrome ডেভেলপার টুল ব্যবহার করার পরামর্শ দেয়।",
                // Arabic
                "عَرَبِيّ": "يؤكد هذا الفصل على ضرورة جعل مواقع الويب متجاوبة لضمان إمكانية قراءتها وجاذبيتها البصرية على جميع الأجهزة. ويوضح ثلاث قواعد أساسية لتحسين الأجهزة المحمولة: إضافة علامة تعريفية متجاوبة في القسم، واستخدام قيم نسبية للارتفاع والعرض بدلاً من الأبعاد الثابتة، وتنفيذ استعلامات الوسائط لضبط الأنماط بناءً على عرض الجهاز. يقدم الفصل أمثلة على استعلامات الوسائط لكل من العرض الأدنى والأقصى 600 بكسل ويقترح استخدام أدوات مطوري Chrome لمحاكاة وجهات النظر المحمولة للاختبار الفعال.",
                // Persian
                "فارسی": "این فصل بر لزوم پاسخگو بودن وب سایت ها برای اطمینان از خوانایی و جذابیت بصری آنها در همه دستگاه ها تأکید می کند. این سه قانون کلیدی را برای بهینه‌سازی تلفن همراه بیان می‌کند: افزودن یک متا تگ پاسخگو در بخش، استفاده از مقادیر درصدی برای ارتفاع و عرض به جای ابعاد ثابت، و اجرای پرس‌وجوهای رسانه برای تنظیم سبک‌ها بر اساس عرض دستگاه. این فصل نمونه‌هایی از درخواست‌های رسانه را برای حداقل و حداکثر عرض 600 پیکسل ارائه می‌کند و پیشنهاد می‌کند از ابزارهای برنامه‌نویس Chrome برای شبیه‌سازی نماهای موبایل برای آزمایش مؤثر استفاده کنید.",
            },
        },
        // 4
        {
            "ChapterName": "Introduction to Python Programming",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces Python programming, highlighting its popularity and user-friendly syntax. It covers essential topics such as installation steps, variable declaration, data types (including strings, lists, tuples, and dictionaries), and control statements like if-else and loops (for, while). The chapter also discusses functions, object-oriented programming with classes, and emphasizes the importance of indentation in Python code structure, providing a foundation for further learning in Python and Django development.",
                // German
                "Deutsch": "Dieses Kapitel führt in die Python-Programmierung ein und hebt ihre Popularität und benutzerfreundliche Syntax hervor. Es behandelt wichtige Themen wie Installationsschritte, Variablendeklaration, Datentypen (einschließlich Zeichenfolgen, Listen, Tupel und Wörterbücher) und Kontrollanweisungen wie if-else und Schleifen (for, while). Das Kapitel behandelt auch Funktionen, objektorientierte Programmierung mit Klassen und betont die Bedeutung der Einrückung in der Python-Codestruktur, was eine Grundlage für das weitere Erlernen der Python- und Django-Entwicklung bietet.",
                // Chinese
                "中国人": "本章介绍 Python 编程，重点介绍其流行度和用户友好的语法。它涵盖了安装步骤、变量声明、数据类型（包括字符串、列表、元组和字典）以及 if-else 和循环（for、while）等控制语句等基本主题。本章还讨论了函数、使用类的面向对象编程，并强调了缩进在 Python 代码结构中的重要性，为进一步学习 Python 和 Django 开发奠定了基础。",
                // Russian
                "Русский": "В этой главе представлено программирование на Python, подчеркиваются его популярность и удобный синтаксис. В ней рассматриваются такие важные темы, как шаги установки, объявление переменных, типы данных (включая строки, списки, кортежи и словари) и управляющие операторы, такие как if-else и циклы (for, while). В главе также обсуждаются функции, объектно-ориентированное программирование с классами и подчеркивается важность отступов в структуре кода Python, что закладывает основу для дальнейшего изучения разработки на Python и Django.",
                // French
                "Français": "Ce chapitre présente la programmation Python, en soulignant sa popularité et sa syntaxe conviviale. Il couvre des sujets essentiels tels que les étapes d'installation, la déclaration de variables, les types de données (y compris les chaînes, les listes, les tuples et les dictionnaires) et les instructions de contrôle comme if-else et les boucles (for, while). Le chapitre aborde également les fonctions, la programmation orientée objet avec des classes et souligne l'importance de l'indentation dans la structure du code Python, fournissant ainsi une base pour un apprentissage ultérieur du développement Python et Django.",
                // Japanese
                "日本語": "この章では、Python プログラミングについて紹介し、その人気とユーザーフレンドリーな構文に焦点を当てます。インストール手順、変数宣言、データ型 (文字列、リスト、タプル、辞書を含む)、if-else やループ (for、while) などの制御ステートメントなどの重要なトピックを取り上げます。また、関数、クラスを使用したオブジェクト指向プログラミングについても説明し、Python コード構造におけるインデントの重要性を強調して、Python と Django 開発のさらなる学習の基礎を提供します。",
                // Korean
                "한국인": "이 장에서는 Python 프로그래밍을 소개하고 인기와 사용자 친화적인 구문을 강조합니다. 설치 단계, 변수 선언, 데이터 유형(문자열, 목록, 튜플 및 사전 포함) 및 if-else 및 루프(for, while)와 같은 제어 문과 같은 필수 주제를 다룹니다. 이 장에서는 또한 함수, 클래스를 사용한 객체 지향 프로그래밍에 대해 논의하고 Python 코드 구조에서 들여쓰기의 중요성을 강조하여 Python 및 Django 개발에 대한 추가 학습의 기초를 제공합니다.",
                // Spanish
                "Español": "Este capítulo presenta la programación en Python, destacando su popularidad y su sintaxis fácil de usar. Abarca temas esenciales como los pasos de instalación, la declaración de variables, los tipos de datos (incluidas cadenas, listas, tuplas y diccionarios) y las instrucciones de control como if-else y los bucles (for, while). El capítulo también analiza las funciones, la programación orientada a objetos con clases y enfatiza la importancia de la sangría en la estructura del código Python, proporcionando una base para un mayor aprendizaje en el desarrollo de Python y Django.",
                // Hindi
                "हिंदी": "यह अध्याय पायथन प्रोग्रामिंग का परिचय देता है, इसकी लोकप्रियता और उपयोगकर्ता के अनुकूल सिंटैक्स पर प्रकाश डालता है। इसमें इंस्टॉलेशन स्टेप्स, वैरिएबल डिक्लेरेशन, डेटा टाइप्स (स्ट्रिंग्स, लिस्ट्स, टपल और डिक्शनरी सहित) और if-else और लूप्स (for, while) जैसे कंट्रोल स्टेटमेंट जैसे आवश्यक विषयों को शामिल किया गया है। अध्याय में फंक्शन्स, क्लासेस के साथ ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग पर भी चर्चा की गई है और पायथन कोड संरचना में इंडेंटेशन के महत्व पर जोर दिया गया है, जो पायथन और Django डेवलपमेंट में आगे सीखने के लिए एक आधार प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo apresenta a programação Python, destacando a sua popularidade e sintaxe amigável. Abrange tópicos essenciais como etapas de instalação, declaração de variáveis, tipos de dados (incluindo strings, listas, tuplas e dicionários) e instruções de controlo como if-else e loops (for, while). O capítulo discute também as funções, a programação orientada a objetos com classes e enfatiza a importância da indentação na estrutura do código Python, fornecendo uma base para uma aprendizagem adicional no desenvolvimento em Python e Django.",
                // Bengali
                "বাংলা": "এই অধ্যায়ে পাইথন প্রোগ্রামিং এর জনপ্রিয়তা এবং ব্যবহারকারী-বান্ধব সিনট্যাক্স তুলে ধরা হয়েছে। এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন ইনস্টলেশন পদক্ষেপ, পরিবর্তনশীল ঘোষণা, ডেটা প্রকার (স্ট্রিং, তালিকা, টিপল এবং অভিধান সহ), এবং নিয়ন্ত্রণ বিবৃতি যেমন if-else এবং loops (for, while)। অধ্যায়টি ক্লাসের সাথে ফাংশন, অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং নিয়েও আলোচনা করে এবং পাইথন কোড স্ট্রাকচারে ইন্ডেন্টেশনের গুরুত্বের উপর জোর দেয়, যা পাইথন এবং জ্যাঙ্গো ডেভেলপমেন্টে আরও শেখার ভিত্তি প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل مقدمة عن برمجة بايثون، ويسلط الضوء على شعبيتها وقواعدها النحوية سهلة الاستخدام. ويغطي موضوعات أساسية مثل خطوات التثبيت، وإعلان المتغيرات، وأنواع البيانات (بما في ذلك السلاسل والقوائم والمجموعات والقواميس)، وعبارات التحكم مثل if-else والحلقات (for، while). ويناقش الفصل أيضًا الوظائف والبرمجة الموجهة للكائنات باستخدام الفئات، ويؤكد على أهمية المسافة البادئة في بنية كود بايثون، مما يوفر أساسًا لمزيد من التعلم في تطوير بايثون ودجانجو.",
                // Persian
                "فارسی": "این فصل برنامه نویسی پایتون را معرفی می کند و محبوبیت و نحو کاربر پسند آن را برجسته می کند. موضوعات ضروری مانند مراحل نصب، اعلان متغیر، انواع داده ها (شامل رشته ها، لیست ها، تاپل ها و دیکشنری ها) و دستورات کنترلی مانند if-else و حلقه ها (for, while) را پوشش می دهد. این فصل همچنین در مورد توابع، برنامه‌نویسی شی گرا با کلاس‌ها بحث می‌کند و بر اهمیت تورفتگی در ساختار کد پایتون تاکید می‌کند، که پایه‌ای برای یادگیری بیشتر در توسعه Python و Django فراهم می‌کند.",
            },
        },
        // 5
        {
            "ChapterName": "Django",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Thi chapter covers the essentials of using Django, a high-level Python web framework for web development. It outlines the installation process, including checking for pip and creating a new app within a project. The chapter explains the structure of Django applications, including models for database tables, views for handling requests, and URLs for routing, while also detailing how to create forms, manage static files, and implement email functionality. Overall, it provides a comprehensive guide to setting up and developing a functional web application using Django.",
                // German
                "Deutsch": "In diesem Kapitel werden die Grundlagen der Verwendung von Django behandelt, einem hochrangigen Python-Webframework für die Webentwicklung. Es beschreibt den Installationsprozess, einschließlich der Überprüfung auf Pip und der Erstellung einer neuen App innerhalb eines Projekts. Das Kapitel erläutert die Struktur von Django-Anwendungen, einschließlich Modelle für Datenbanktabellen, Ansichten zur Bearbeitung von Anfragen und URLs für das Routing, und beschreibt ausführlich, wie Formulare erstellt, statische Dateien verwaltet und E-Mail-Funktionen implementiert werden. Insgesamt bietet es eine umfassende Anleitung zum Einrichten und Entwickeln einer funktionalen Webanwendung mit Django.",
                // Chinese
                "中国人": "本章介绍了使用 Django（用于 Web 开发的高级 Python Web 框架）的基本知识。它概述了安装过程，包括检查 pip 和在项目中创建新应用程序。本章介绍了 Django 应用程序的结构，包括数据库表的模型、用于处理请求的视图和用于路由的 URL，同时还详细介绍了如何创建表单、管理静态文件和实现电子邮件功能。总的来说，它提供了使用 Django 设置和开发功能性 Web 应用程序的全面指南。",
                // Russian
                "Русский": "В этой главе рассматриваются основы использования Django, высокоуровневого веб-фреймворка Python для веб-разработки. В ней описывается процесс установки, включая проверку pip и создание нового приложения в проекте. В главе объясняется структура приложений Django, включая модели для таблиц базы данных, представления для обработки запросов и URL-адреса для маршрутизации, а также подробно описывается, как создавать формы, управлять статическими файлами и реализовывать функциональность электронной почты. В целом, она представляет собой всеобъемлющее руководство по настройке и разработке функционального веб-приложения с использованием Django.",
                // French
                "Français": "Ce chapitre couvre les éléments essentiels de l'utilisation de Django, un framework Web Python de haut niveau pour le développement Web. Il décrit le processus d'installation, y compris la vérification de pip et la création d'une nouvelle application au sein d'un projet. Le chapitre explique la structure des applications Django, y compris les modèles pour les tables de base de données, les vues pour la gestion des requêtes et les URL pour le routage, tout en détaillant comment créer des formulaires, gérer les fichiers statiques et implémenter la fonctionnalité de messagerie électronique. Dans l'ensemble, il fournit un guide complet pour la configuration et le développement d'une application Web fonctionnelle à l'aide de Django.",
                // Japanese
                "日本語": "この章では、Web 開発用の高レベル Python Web フレームワークである Django の使用の基本について説明します。pip の確認やプロジェクト内での新規アプリの作成など、インストール プロセスの概要を説明します。この章では、データベース テーブルのモデル、リクエストを処理するためのビュー、ルーティング用の URL など、Django アプリケーションの構造について説明するとともに、フォームの作成方法、静的ファイルの管理方法、電子メール機能の実装方法についても詳しく説明します。全体として、Django を使用して機能的な Web アプリケーションをセットアップおよび開発するための包括的なガイドを提供します。",
                // Korean
                "한국인": "이 장에서는 웹 개발을 위한 고급 Python 웹 프레임워크인 Django를 사용하는 데 필요한 기본 사항을 다룹니다. pip 확인 및 프로젝트 내에서 새 앱 생성을 포함한 설치 프로세스를 설명합니다. 이 장에서는 데이터베이스 테이블 모델, 요청 처리 뷰, 라우팅 URL을 포함한 Django 애플리케이션의 구조를 설명하면서 양식을 만들고 정적 파일을 관리하고 이메일 기능을 구현하는 방법도 자세히 설명합니다. 전반적으로 Django를 사용하여 기능적 웹 애플리케이션을 설정하고 개발하는 방법에 대한 포괄적인 가이드를 제공합니다.",
                // Spanish
                "Español": "Este capítulo cubre los aspectos básicos del uso de Django, un framework web Python de alto nivel para el desarrollo web. Describe el proceso de instalación, incluida la comprobación de pip y la creación de una nueva aplicación dentro de un proyecto. El capítulo explica la estructura de las aplicaciones de Django, incluidos los modelos para las tablas de bases de datos, las vistas para gestionar solicitudes y las URL para el enrutamiento, al tiempo que detalla cómo crear formularios, gestionar archivos estáticos e implementar la funcionalidad de correo electrónico. En general, proporciona una guía completa para configurar y desarrollar una aplicación web funcional utilizando Django.",
                // Hindi
                "हिंदी": "यह अध्याय Django का उपयोग करने की अनिवार्यताओं को कवर करता है, जो वेब विकास के लिए एक उच्च-स्तरीय पायथन वेब फ्रेमवर्क है। यह इंस्टॉलेशन प्रक्रिया को रेखांकित करता है, जिसमें पाइप की जांच करना और किसी प्रोजेक्ट के भीतर एक नया ऐप बनाना शामिल है। यह अध्याय Django अनुप्रयोगों की संरचना को समझाता है, जिसमें डेटाबेस तालिकाओं के लिए मॉडल, अनुरोधों को संभालने के लिए दृश्य और रूटिंग के लिए URL शामिल हैं, साथ ही यह भी बताया गया है कि फ़ॉर्म कैसे बनाएँ, स्थिर फ़ाइलों को कैसे प्रबंधित करें और ईमेल कार्यक्षमता को कैसे लागू करें। कुल मिलाकर, यह Django का उपयोग करके एक कार्यात्मक वेब एप्लिकेशन को स्थापित करने और विकसित करने के लिए एक व्यापक मार्गदर्शिका प्रदान करता है।",
                // Portuguese
                "Português": "Este capítulo aborda os fundamentos da utilização do Django, uma framework web Python de alto nível para o desenvolvimento web. Descreve o processo de instalação, incluindo a verificação de pips e a criação de uma nova aplicação dentro de um projeto. O capítulo explica a estrutura das aplicações Django, incluindo modelos para tabelas de base de dados, vistas para tratamento de pedidos e URLs para encaminhamento, bem como detalha como criar formulários, gerir ficheiros estáticos e implementar funcionalidades de e-mail. No geral, fornece um guia completo para configurar e desenvolver uma aplicação web funcional utilizando Django.",
                // Bengali
                "বাংলা": "থি অধ্যায় জ্যাঙ্গো ব্যবহার করার প্রয়োজনীয় বিষয়গুলি কভার করে, ওয়েব ডেভেলপমেন্টের জন্য একটি উচ্চ-স্তরের পাইথন ওয়েব ফ্রেমওয়ার্ক। এটি ইনস্টলেশন প্রক্রিয়ার রূপরেখা দেয়, যার মধ্যে পিপ পরীক্ষা করা এবং একটি প্রকল্পের মধ্যে একটি নতুন অ্যাপ তৈরি করা। অধ্যায়টি জ্যাঙ্গো অ্যাপ্লিকেশনগুলির গঠন ব্যাখ্যা করে, যার মধ্যে রয়েছে ডাটাবেস টেবিলের মডেল, অনুরোধগুলি পরিচালনার জন্য ভিউ এবং রাউটিং করার জন্য ইউআরএল, পাশাপাশি কীভাবে ফর্ম তৈরি করতে হয়, স্ট্যাটিক ফাইলগুলি পরিচালনা করতে হয় এবং ইমেল কার্যকারিতা প্রয়োগ করতে হয় তার বিশদ বিবরণ রয়েছে৷ সামগ্রিকভাবে, এটি জ্যাঙ্গো ব্যবহার করে একটি কার্যকরী ওয়েব অ্যাপ্লিকেশন সেট আপ এবং বিকাশ করার জন্য একটি ব্যাপক নির্দেশিকা প্রদান করে।",
                // Arabic
                "عَرَبِيّ": "يغطي هذا الفصل الأساسيات الخاصة باستخدام Django، وهو إطار عمل ويب عالي المستوى بلغة Python لتطوير الويب. ويوضح عملية التثبيت، بما في ذلك التحقق من pip وإنشاء تطبيق جديد داخل مشروع. ويشرح الفصل بنية تطبيقات Django، بما في ذلك نماذج لجداول قاعدة البيانات، والعروض للتعامل مع الطلبات، وعناوين URL للتوجيه، مع تفصيل كيفية إنشاء النماذج وإدارة الملفات الثابتة وتنفيذ وظائف البريد الإلكتروني. بشكل عام، يوفر دليلاً شاملاً لإعداد وتطوير تطبيق ويب وظيفي باستخدام Django.",
                // Persian
                "فارسی": "این فصل اصول استفاده از جنگو، یک چارچوب وب سطح بالا پایتون برای توسعه وب را پوشش می دهد. این فرآیند نصب شامل بررسی پیپ و ایجاد یک برنامه جدید در یک پروژه را تشریح می کند. این فصل ساختار برنامه‌های جنگو را توضیح می‌دهد، از جمله مدل‌هایی برای جداول پایگاه داده، نماهایی برای رسیدگی به درخواست‌ها، و آدرس‌های اینترنتی برای مسیریابی، در حالی که جزئیات نحوه ایجاد فرم‌ها، مدیریت فایل‌های استاتیک و پیاده‌سازی عملکرد ایمیل را نیز توضیح می‌دهد. به طور کلی، راهنمای جامعی برای راه اندازی و توسعه یک برنامه کاربردی وب با استفاده از جنگو ارائه می دهد.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "'Learn Django in 24 Hours' by S. Basu is a beginner-friendly guide that promises to equip readers with the knowledge to build web applications using HTML, CSS, JavaScript, Python, and the Django Web Framework. The book is structured to be a simple, concise, and easy guide, making it accessible to individuals who are new to web development or those looking to transition into using Django for their projects. It's designed to make the learning process enjoyable, informative, and interesting, with thorough examples and codes to support the concepts presented.",
            // German
            "Deutsch": "„Learn Django in 24 Hours“ von S. Basu ist ein anfängerfreundlicher Leitfaden, der den Lesern das Wissen vermittelt, um Webanwendungen mit HTML, CSS, JavaScript, Python und dem Django Web Framework zu erstellen. Das Buch ist als einfacher, prägnanter und leicht verständlicher Leitfaden aufgebaut und somit für Personen zugänglich, die neu in der Webentwicklung sind oder für diejenigen, die für ihre Projekte auf Django umsteigen möchten. Es ist so konzipiert, dass der Lernprozess unterhaltsam, informativ und interessant ist, mit ausführlichen Beispielen und Codes zur Unterstützung der vorgestellten Konzepte.",
            // Chinese
            "中国人": "S. Basu 撰写的《24 小时学会 Django》是一本适合初学者的指南，承诺让读者掌握使用 HTML、CSS、JavaScript、Python 和 Django Web 框架构建 Web 应用程序的知识。本书结构简洁、简明易懂，适合刚接触 Web 开发或希望过渡到使用 Django 进行项目开发的个人。它旨在让学习过程变得愉快、信息丰富且有趣，并提供详尽的示例和代码来支持所提出的概念。",
            // Russian
            "Русский": "«Изучите Django за 24 часа» С. Басу — это руководство для начинающих, которое обещает дать читателям знания по созданию веб-приложений с использованием HTML, CSS, JavaScript, Python и Django Web Framework. Книга построена так, чтобы представлять собой простое, краткое и легкое руководство, делающее ее доступной для людей, которые плохо знакомы с веб-разработкой или тех, кто хочет перейти на использование Django в своих проектах. Он разработан, чтобы сделать процесс обучения приятным, информативным и интересным, с подробными примерами и кодами, подтверждающими представленные концепции.",
            // French
            "Français": "« Apprenez Django en 24 heures » de S. Basu est un guide convivial pour les débutants qui promet de doter les lecteurs des connaissances nécessaires pour créer des applications Web en utilisant HTML, CSS, JavaScript, Python et Django Web Framework. Le livre est structuré pour être un guide simple, concis et facile, le rendant accessible aux personnes qui débutent dans le développement Web ou à celles qui cherchent à utiliser Django pour leurs projets. Il est conçu pour rendre le processus d'apprentissage agréable, informatif et intéressant, avec des exemples et des codes détaillés pour soutenir les concepts présentés.",
            // Japanese
            "日本語": "S. Basu 著の「Learn Django in 24 Hours」は、HTML、CSS、JavaScript、Python、Django Web Framework を使用して Web アプリケーションを構築するための知識を読者に提供することを約束する初心者向けのガイドです。この本は、Web 開発の初心者や、プロジェクトで Django の使用に移行しようとしている人にとって理解しやすい、シンプルで簡潔、かつわかりやすいガイドとして構成されています。提示された概念をサポートする詳細な例とコードを使用して、学習プロセスを楽しく、有益で興味深いものにするように設計されています。",
            // Korean
            "한국인": "S. Basu의 '24시간 안에 Django 배우기'는 HTML, CSS, JavaScript, Python 및 Django 웹 프레임워크를 사용하여 웹 애플리케이션을 구축하는 데 필요한 지식을 독자에게 제공하는 초보자 친화적인 가이드입니다. 이 책은 간단하고 간결하며 쉬운 가이드로 구성되어 웹 개발이 처음이거나 프로젝트에 Django를 사용하려는 사람들이 쉽게 접근할 수 있습니다. 제시된 개념을 뒷받침하는 철저한 예제와 코드를 통해 학습 과정을 즐겁고 유익하며 흥미롭게 만들도록 설계되었습니다.",
            // Spanish
            "Español": "'Aprenda Django en 24 horas' de S. Basu es una guía para principiantes que promete equipar a los lectores con el conocimiento para crear aplicaciones web utilizando HTML, CSS, JavaScript, Python y Django Web Framework. El libro está estructurado para ser una guía simple, concisa y fácil, haciéndolo accesible a personas que son nuevas en el desarrollo web o aquellos que buscan hacer la transición al uso de Django para sus proyectos. Está diseñado para hacer que el proceso de aprendizaje sea agradable, informativo e interesante, con ejemplos y códigos completos para respaldar los conceptos presentados.",
            // Hindi
            "हिंदी": "एस. बसु द्वारा लिखित '24 घंटे में Django सीखें' एक शुरुआती-अनुकूल मार्गदर्शिका है जो पाठकों को HTML, CSS, JavaScript, Python और Django वेब फ्रेमवर्क का उपयोग करके वेब एप्लिकेशन बनाने के ज्ञान से लैस करने का वादा करती है। पुस्तक को एक सरल, संक्षिप्त और आसान मार्गदर्शिका के रूप में संरचित किया गया है, जो इसे उन व्यक्तियों के लिए सुलभ बनाता है जो वेब विकास के लिए नए हैं या जो अपनी परियोजनाओं के लिए Django का उपयोग करना चाहते हैं। इसे सीखने की प्रक्रिया को सुखद, जानकारीपूर्ण और दिलचस्प बनाने के लिए डिज़ाइन किया गया है, जिसमें प्रस्तुत अवधारणाओं का समर्थन करने के लिए विस्तृत उदाहरण और कोड हैं।",
            // Portuguese
            "Português": "'Aprenda Django em 24 horas' de S. Basu é um guia para iniciantes que promete equipar os leitores com o conhecimento para construir aplicativos da web usando HTML, CSS, JavaScript, Python e Django Web Framework. O livro está estruturado para ser um guia simples, conciso e fácil, tornando-o acessível para indivíduos que são novos no desenvolvimento web ou para aqueles que desejam fazer a transição para o uso do Django em seus projetos. Ele foi projetado para tornar o processo de aprendizagem agradável, informativo e interessante, com exemplos e códigos completos para apoiar os conceitos apresentados.",
            // Bengali
            "বাংলা": "এস. বসুর '24 ঘন্টায় জ্যাঙ্গো শিখুন' হল একটি শিক্ষানবিস-বান্ধব গাইড যা পাঠকদের এইচটিএমএল, সিএসএস, জাভাস্ক্রিপ্ট, পাইথন এবং জ্যাঙ্গো ওয়েব ফ্রেমওয়ার্ক ব্যবহার করে ওয়েব অ্যাপ্লিকেশন তৈরি করার জ্ঞান দিয়ে সজ্জিত করার প্রতিশ্রুতি দেয়। বইটি একটি সহজ, সংক্ষিপ্ত এবং সহজ নির্দেশিকা হিসাবে গঠন করা হয়েছে, যা ওয়েব ডেভেলপমেন্টে নতুন বা যারা তাদের প্রজেক্টের জন্য জ্যাঙ্গো ব্যবহার করতে চান তাদের জন্য এটি অ্যাক্সেসযোগ্য করে তোলে। উপস্থাপিত ধারণাগুলিকে সমর্থন করার জন্য পুঙ্খানুপুঙ্খ উদাহরণ এবং কোড সহ শেখার প্রক্রিয়াটিকে উপভোগ্য, তথ্যপূর্ণ এবং আকর্ষণীয় করার জন্য এটি ডিজাইন করা হয়েছে।",
            // Arabic
            "عَرَبِيّ": "'تعلم Django في 24 ساعة' بقلم S. Basu هو دليل مناسب للمبتدئين يعد بتزويد القراء بالمعرفة اللازمة لبناء تطبيقات الويب باستخدام HTML وCSS وJavaScript وPython وDjango Web Framework. تم تصميم الكتاب ليكون دليلًا بسيطًا وموجزًا ​​وسهلاً، مما يجعله في متناول الأفراد الجدد في مجال تطوير الويب أو أولئك الذين يتطلعون إلى الانتقال إلى استخدام Django في مشاريعهم. لقد تم تصميمه لجعل عملية التعلم ممتعة وغنية بالمعلومات ومثيرة للاهتمام، مع أمثلة وأكواد شاملة لدعم المفاهيم المقدمة.",
            // Persian
            "فارسی": "'یادگیری جنگو در 24 ساعت' توسط S. Basu یک راهنمای مبتدی است که قول می دهد خوانندگان را با دانش ساخت برنامه های وب با استفاده از HTML، CSS، جاوا اسکریپت، پایتون، و چارچوب وب جنگو مجهز کند. این کتاب به گونه‌ای طراحی شده است که راهنمای ساده، مختصر و آسانی باشد، که آن را برای افرادی که تازه در توسعه وب هستند یا کسانی که به دنبال استفاده از جنگو برای پروژه‌های خود هستند قابل دسترسی است. این طراحی شده است تا فرآیند یادگیری را لذت بخش، آموزنده و جالب کند، با مثال ها و کدهای کامل برای پشتیبانی از مفاهیم ارائه شده.",
        },
        // Paragraph 2
        {
            // English
            "English": "One of the key advantages of reading 'Learn Django in 24 Hours' is its approach to teaching. The author, S. Basu, has laid out the content in a manner that allows for a quick yet comprehensive understanding of Django. This is particularly beneficial for readers who are short on time but want to gain a solid grasp of building web applications. The book's format is also conducive to learning, with its focus on practical examples that readers can follow along and implement themselves.",
            // German
            "Deutsch": "Einer der Hauptvorteile der Lektüre von „Learn Django in 24 Hours“ ist sein Lehransatz. Der Autor, S. Basu, hat den Inhalt so angelegt, dass ein schnelles und dennoch umfassendes Verständnis von Django möglich ist. Dies ist besonders für Leser von Vorteil, die wenig Zeit haben, aber ein solides Verständnis für die Erstellung von Webanwendungen erlangen möchten. Das Format des Buches fördert das Lernen ebenfalls, da es sich auf praktische Beispiele konzentriert, die die Leser nachvollziehen und selbst umsetzen können.",
            // Chinese
            "中国人": "阅读《24 小时学会 Django》的主要优势之一是其教学方法。作者 S. Basu 以一种允许快速而全面地了解 Django 的方式安排内容。这对于时间紧迫但想要扎实掌握构建 Web 应用程序的读者尤其有益。本书的格式也有利于学习，重点关注读者可以跟随并自己实现的实际示例。",
            // Russian
            "Русский": "Одним из ключевых преимуществ книги «Изучите Django за 24 часа» является ее подход к преподаванию. Автор, С. Басу, изложил содержание таким образом, чтобы обеспечить быстрое, но полное понимание Django. Это особенно полезно для читателей, у которых мало времени, но которые хотят получить четкое представление о создании веб-приложений. Формат книги также способствует обучению, поскольку в ней основное внимание уделяется практическим примерам, которым читатели могут следовать и применять самостоятельно.",
            // French
            "Français": "L'un des principaux avantages de la lecture de « Apprenez Django en 24 heures » est son approche pédagogique. L'auteur, S. Basu, a présenté le contenu de manière à permettre une compréhension rapide mais complète de Django. Ceci est particulièrement bénéfique pour les lecteurs qui manquent de temps mais souhaitent acquérir une solide maîtrise de la création d’applications Web. Le format du livre est également propice à l'apprentissage, en mettant l'accent sur des exemples pratiques que les lecteurs peuvent suivre et mettre en œuvre eux-mêmes.",
            // Japanese
            "日本語": "「24 時間で Django を学ぶ」を読むことの大きな利点の 1 つは、その指導方法です。著者の S. Basu は、Django を素早くかつ包括的に理解できるようにコンテンツを作成しました。これは、時間があまりないが Web アプリケーションの構築をしっかりと理解したい読者にとって特に有益です。この本の形式も学習に役立ち、読者が従って自分で実装できる実用的な例に重点を置いています。",
            // Korean
            "한국인": "'24시간 안에 Django 배우기'를 읽는 주요 이점 중 하나는 교육에 대한 접근 방식입니다. 저자 S. Basu는 Django를 빠르고 포괄적으로 이해할 수 있도록 내용을 구성했습니다. 이는 시간이 부족하지만 웹 애플리케이션 구축에 대한 확실한 이해를 원하는 독자에게 특히 유용합니다. 이 책의 형식은 독자가 직접 따라하고 구현할 수 있는 실제 사례에 중점을 두어 학습에도 도움이 됩니다.",
            // Spanish
            "Español": "Una de las ventajas clave de leer 'Aprende Django en 24 horas' es su enfoque de enseñanza. El autor, S. Basu, ha presentado el contenido de una manera que permite una comprensión rápida pero completa de Django. Esto es particularmente beneficioso para los lectores que tienen poco tiempo pero desean obtener una comprensión sólida de la creación de aplicaciones web. El formato del libro también favorece el aprendizaje, ya que se centra en ejemplos prácticos que los lectores pueden seguir e implementar por sí mismos.",
            // Hindi
            "हिंदी": "'24 घंटे में Django सीखें' पढ़ने का एक मुख्य लाभ यह है कि इसे पढ़ाना बहुत आसान है। लेखक एस. बसु ने इस पुस्तक की विषय-वस्तु को इस तरह से प्रस्तुत किया है कि Django को जल्दी से जल्दी और व्यापक रूप से समझा जा सके। यह उन पाठकों के लिए विशेष रूप से लाभदायक है जिनके पास समय की कमी है, लेकिन वे वेब एप्लिकेशन बनाने की ठोस समझ हासिल करना चाहते हैं। पुस्तक का प्रारूप भी सीखने के लिए अनुकूल है, जिसमें व्यावहारिक उदाहरणों पर ध्यान केंद्रित किया गया है, जिनका पाठक अनुसरण कर सकते हैं और उन्हें स्वयं लागू कर सकते हैं।",
            // Portuguese
            "Português": "Uma das principais vantagens de ler 'Aprenda Django em 24 horas' é a sua abordagem de ensino. O autor, S. Basu, expôs o conteúdo de uma maneira que permite uma compreensão rápida, porém abrangente, do Django. Isso é particularmente benéfico para leitores que têm pouco tempo, mas desejam obter uma compreensão sólida da construção de aplicativos da web. O formato do livro também favorece o aprendizado, com foco em exemplos práticos que os leitores podem acompanhar e implementar por conta própria.",
            // Bengali
            "বাংলা": "'24 ঘন্টার মধ্যে জ্যাঙ্গো শিখুন' পড়ার মূল সুবিধাগুলির মধ্যে একটি হল এটি শেখানোর পদ্ধতি। লেখক, এস. বসু, বিষয়বস্তুটি এমনভাবে সাজিয়েছেন যা জ্যাঙ্গো সম্পর্কে দ্রুত কিন্তু ব্যাপক বোঝার অনুমতি দেয়। এটি পাঠকদের জন্য বিশেষভাবে উপকারী যারা সময় কম কিন্তু ওয়েব অ্যাপ্লিকেশন তৈরির বিষয়ে একটি দৃঢ় উপলব্ধি অর্জন করতে চান। বইটির বিন্যাস শেখার জন্যও উপযোগী, ব্যবহারিক উদাহরণের উপর ফোকাস সহ যা পাঠকরা অনুসরণ করতে পারে এবং নিজেদের বাস্তবায়ন করতে পারে।",
            // Arabic
            "عَرَبِيّ": "إحدى المزايا الرئيسية لقراءة «تعلم جانغو في 24 ساعة» هي أسلوبها في التدريس. لقد وضع المؤلف، S. Basu، المحتوى بطريقة تسمح بفهم سريع وشامل لـ Django. يعد هذا مفيدًا بشكل خاص للقراء الذين ليس لديهم الوقت الكافي ولكنهم يريدون اكتساب فهم قوي لبناء تطبيقات الويب. كما أن شكل الكتاب يساعد أيضًا على التعلم، مع تركيزه على الأمثلة العملية التي يمكن للقراء متابعتها وتنفيذها بأنفسهم.",
            // Persian
            "فارسی": "یکی از مزایای کلیدی خواندن «یادگیری جنگو در 24 ساعت» رویکرد آن به آموزش است. نویسنده، S. Basu، محتوا را به گونه ای تنظیم کرده است که امکان درک سریع و در عین حال جامع جنگو را فراهم می کند. این به ویژه برای خوانندگانی مفید است که زمان کمی دارند اما می‌خواهند درک کاملی از ساخت برنامه‌های وب کسب کنند. قالب کتاب نیز با تمرکز بر مثال‌های عملی که خوانندگان می‌توانند آن‌ها را دنبال کرده و خودشان پیاده‌سازی کنند، برای یادگیری مفید است.",
        },
        // Paragraph 3
        {
            // English
            "English": "After reading this book, learners will gain the confidence to start their own Django projects from scratch. They will have a foundational understanding of web application development and the ability to use Django's features effectively. Additionally, the book's emphasis on a hands-on approach means that readers will not only learn theoretical aspects but also apply what they've learned in real-world scenarios, thereby solidifying their knowledge and skills.",
            // German
            "Deutsch": "Nach der Lektüre dieses Buches werden die Lernenden das Selbstvertrauen haben, ihre eigenen Django-Projekte von Grund auf zu starten. Sie werden ein grundlegendes Verständnis für die Entwicklung von Webanwendungen haben und in der Lage sein, die Funktionen von Django effektiv zu nutzen. Darüber hinaus bedeutet der Schwerpunkt des Buches auf einem praktischen Ansatz, dass die Leser nicht nur theoretische Aspekte lernen, sondern das Gelernte auch in realen Szenarien anwenden und so ihr Wissen und ihre Fähigkeiten festigen.",
            // Chinese
            "中国人": "读完本书后，学习者将有信心从头开始创建自己的 Django 项目。他们将对 Web 应用程序开发有基本的了解，并能够有效地使用 Django 的功能。此外，本书强调实践方法，这意味着读者不仅可以学习理论知识，还可以将所学知识应用于实际场景，从而巩固他们的知识和技能。",
            // Russian
            "Русский": "Прочитав эту книгу, учащиеся обретут уверенность в том, что смогут начать свои собственные проекты Django с нуля. У них будет базовое понимание разработки веб-приложений и способность эффективно использовать функции Django. Кроме того, упор в книге на практический подход означает, что читатели будут не только изучать теоретические аспекты, но и применять полученные знания в реальных сценариях, тем самым закрепляя свои знания и навыки.",
            // French
            "Français": "Après avoir lu ce livre, les apprenants gagneront en confiance pour démarrer leurs propres projets Django à partir de zéro. Ils auront une compréhension fondamentale du développement d’applications Web et la capacité d’utiliser efficacement les fonctionnalités de Django. De plus, l'accent mis par le livre sur une approche pratique signifie que les lecteurs apprendront non seulement les aspects théoriques, mais appliqueront également ce qu'ils ont appris dans des scénarios du monde réel, renforçant ainsi leurs connaissances et leurs compétences.",
            // Japanese
            "日本語": "この本を読んだ後、学習者は自信を得て、ゼロから独自の Django プロジェクトを開始できるようになります。Web アプリケーション開発の基礎を理解し、Django の機能を効果的に使用できるようになります。さらに、本書では実践的なアプローチを重視しているため、読者は理論的な側面を学ぶだけでなく、学んだことを実際のシナリオに適用して、知識とスキルを固めることができます。",
            // Korean
            "한국인": "이 책을 읽고 나면 학습자는 처음부터 자신만의 Django 프로젝트를 시작할 수 있다는 자신감을 얻게 될 것입니다. 그들은 웹 애플리케이션 개발에 대한 기초적인 이해와 Django의 기능을 효과적으로 사용할 수 있는 능력을 갖추게 됩니다. 또한 이 책에서 실습 접근 방식을 강조한다는 것은 독자가 이론적 측면을 배울 뿐만 아니라 배운 내용을 실제 시나리오에 적용하여 지식과 기술을 확고히 한다는 것을 의미합니다.",
            // Spanish
            "Español": "Después de leer este libro, los estudiantes ganarán la confianza para comenzar sus propios proyectos Django desde cero. Tendrán un conocimiento básico del desarrollo de aplicaciones web y la capacidad de utilizar las funciones de Django de forma eficaz. Además, el énfasis del libro en un enfoque práctico significa que los lectores no sólo aprenderán aspectos teóricos sino que también aplicarán lo que han aprendido en escenarios del mundo real, solidificando así sus conocimientos y habilidades.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़ने के बाद, शिक्षार्थियों को अपने Django प्रोजेक्ट को शुरू से शुरू करने का आत्मविश्वास मिलेगा। उन्हें वेब एप्लिकेशन डेवलपमेंट की मूलभूत समझ होगी और Django की विशेषताओं का प्रभावी ढंग से उपयोग करने की क्षमता होगी। इसके अतिरिक्त, पुस्तक में व्यावहारिक दृष्टिकोण पर जोर दिया गया है, जिसका अर्थ है कि पाठक न केवल सैद्धांतिक पहलुओं को सीखेंगे, बल्कि वास्तविक दुनिया के परिदृश्यों में जो उन्होंने सीखा है उसे लागू भी करेंगे, जिससे उनका ज्ञान और कौशल मजबूत होगा।",
            // Portuguese
            "Português": "Depois de ler este livro, os alunos ganharão confiança para iniciar seus próprios projetos Django do zero. Eles terão uma compreensão básica do desenvolvimento de aplicações web e a capacidade de usar os recursos do Django de forma eficaz. Além disso, a ênfase do livro em uma abordagem prática significa que os leitores não apenas aprenderão aspectos teóricos, mas também aplicarão o que aprenderam em cenários do mundo real, solidificando assim seus conhecimentos e habilidades.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার পর, শিক্ষার্থীরা স্ক্র্যাচ থেকে তাদের নিজস্ব জ্যাঙ্গো প্রকল্প শুরু করার আত্মবিশ্বাস অর্জন করবে। তাদের ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট এবং জ্যাঙ্গোর বৈশিষ্ট্যগুলি কার্যকরভাবে ব্যবহার করার ক্ষমতা সম্পর্কে একটি মৌলিক ধারণা থাকবে। অতিরিক্তভাবে, বইটির হাতে-কলমে জোর দেওয়ার অর্থ হল পাঠকরা কেবল তাত্ত্বিক দিকগুলিই শিখবে না বরং বাস্তব-বিশ্বের পরিস্থিতিতে তারা যা শিখেছে তা প্রয়োগ করবে, যার ফলে তাদের জ্ঞান এবং দক্ষতা দৃঢ় হবে।",
            // Arabic
            "عَرَبِيّ": "بعد قراءة هذا الكتاب، سيكتسب المتعلمون الثقة لبدء مشاريع جانغو الخاصة بهم من الصفر. سيكون لديهم فهم أساسي لتطوير تطبيقات الويب والقدرة على استخدام ميزات Django بشكل فعال. بالإضافة إلى ذلك، فإن تركيز الكتاب على النهج العملي يعني أن القراء لن يتعلموا الجوانب النظرية فحسب، بل سيطبقون أيضًا ما تعلموه في سيناريوهات العالم الحقيقي، وبالتالي تعزيز معارفهم ومهاراتهم.",
            // Persian
            "فارسی": "پس از خواندن این کتاب، زبان آموزان اعتماد به نفس پیدا می کنند تا پروژه های جنگو خود را از ابتدا شروع کنند. آنها درک اساسی از توسعه برنامه های کاربردی وب و توانایی استفاده موثر از ویژگی های جنگو خواهند داشت. علاوه بر این، تأکید کتاب بر رویکرد عملی به این معنی است که خوانندگان نه تنها جنبه‌های نظری را یاد می‌گیرند، بلکه آنچه را که آموخته‌اند در سناریوهای دنیای واقعی نیز به کار می‌گیرند و در نتیجه دانش و مهارت‌های خود را تقویت می‌کنند.",
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
        document.title = "MHA - " + learn_django_in_twenty_four_hours["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = learn_django_in_twenty_four_hours["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = learn_django_in_twenty_four_hours["TotalDescriptionAboutTheBook"][index][newLanguage];
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