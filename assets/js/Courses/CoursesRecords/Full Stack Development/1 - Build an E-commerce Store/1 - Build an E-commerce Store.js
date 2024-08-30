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
var building_e_commerence_website = {
    "CourseName": "Python Django: Build an E-commerce Store - 2024",
    "ThreeShortDescriptions": {
        // First Paragraph
        "Paragraph-1": {
            // English
            "English": "Python Django: Build an E-commerce Store by Arno Pretorius on Udemy is a comprehensive course designed to guide learners through the process of creating a fully functional e-commerce website using the Django framework. This course is ideal for both beginners and intermediate developers who are interested in enhancing their skills in web development and Python programming. Arno Pretorius, a seasoned software engineer, provides step-by-step instructions, ensuring that students grasp the fundamental concepts of Django while also learning how to implement real-world features like product listings, shopping carts, and checkout systems.",
            // German
            "Deutsch": "Python Django: Erstellen Sie einen E-Commerce-Shop von Arno Pretorius auf Udemy ist ein umfassender Kurs, der Lernende durch den Prozess der Erstellung einer voll funktionsfähigen E-Commerce-Website mithilfe des Django-Frameworks führt. Dieser Kurs ist ideal für Anfänger und fortgeschrittene Entwickler, die ihre Fähigkeiten in Webentwicklung und Python-Programmierung verbessern möchten. Arno Pretorius, ein erfahrener Softwareentwickler, bietet Schritt-für-Schritt-Anleitungen, um sicherzustellen, dass die Schüler die grundlegenden Konzepte von Django verstehen und gleichzeitig lernen, wie sie reale Funktionen wie Produktlisten, Einkaufswagen und Kassensysteme implementieren.",
            // Chinese
            "中国人": "Python Django：Arno Pretorius 在 Udemy 上开设的电子商务商店是一门综合课程，旨在指导学习者使用 Django 框架创建功能齐全的电子商务网站。本课程非常适合想要提高 Web 开发和 Python 编程技能的初学者和中级开发人员。经验丰富的软件工程师 Arno Pretorius 提供分步说明，确保学生掌握 Django 的基本概念，同时学习如何实现产品列表、购物车和结帐系统等实际功能。",
            // Russian
            "Русский": "Python Django: Build an E-commerce Store Арно Преториус на Udemy — это комплексный курс, разработанный для того, чтобы провести учащихся через процесс создания полнофункционального веб-сайта электронной коммерции с использованием фреймворка Django. Этот курс идеально подходит как для начинающих, так и для разработчиков среднего уровня, которые хотят улучшить свои навыки в веб-разработке и программировании на Python. Арно Преториус, опытный инженер-программист, предоставляет пошаговые инструкции, гарантируя, что студенты поймут основные концепции Django, а также научатся реализовывать реальные функции, такие как списки продуктов, корзины покупок и системы оформления заказов.",
            // French
            "Français": "Python Django : Créer une boutique en ligne par Arno Pretorius sur Udemy est un cours complet conçu pour guider les apprenants dans le processus de création d'un site Web de commerce électronique entièrement fonctionnel à l'aide du framework Django. Ce cours est idéal pour les développeurs débutants et intermédiaires qui souhaitent améliorer leurs compétences en développement Web et en programmation Python. Arno Pretorius, un ingénieur logiciel chevronné, fournit des instructions étape par étape, garantissant que les étudiants saisissent les concepts fondamentaux de Django tout en apprenant à mettre en œuvre des fonctionnalités concrètes telles que les listes de produits, les paniers d'achat et les systèmes de paiement.",
            // Japanese
            "日本語": "Udemy の Arno Pretorius による Python Django: E コマース ストアの構築は、Django フレームワークを使用して完全に機能する E コマース Web サイトを作成するプロセスを学習者に指導するように設計された包括的なコースです。このコースは、Web 開発と Python プログラミングのスキルを向上させたい初心者と中級開発者の両方に最適です。熟練したソフトウェア エンジニアである Arno Pretorius がステップ バイ ステップの手順を提供し、学生が Django の基本概念を理解できるようにしながら、製品リスト、ショッピング カート、チェックアウト システムなどの実際の機能を実装する方法も学習します。",
            // Korean
            "한국인": "Arno Pretorius가 Udemy에서 쓴 Python Django: Build an E-commerce Store는 학습자가 Django 프레임워크를 사용하여 완벽하게 기능하는 전자상거래 웹사이트를 만드는 과정을 안내하도록 설계된 포괄적인 과정입니다. 이 과정은 웹 개발과 Python 프로그래밍 기술을 향상시키고자 하는 초보자와 중급 개발자 모두에게 이상적입니다. 노련한 소프트웨어 엔지니어인 Arno Pretorius는 단계별 지침을 제공하여 학생들이 Django의 기본 개념을 파악하는 동시에 제품 목록, 쇼핑 카트, 체크아웃 시스템과 같은 실제 기능을 구현하는 방법을 배울 수 있도록 합니다.",
            // Spanish
            "Español": "Python Django: Build an E-commerce Store de Arno Pretorius en Udemy es un curso integral diseñado para guiar a los estudiantes a través del proceso de creación de un sitio web de comercio electrónico completamente funcional utilizando el marco de trabajo Django. Este curso es ideal tanto para principiantes como para desarrolladores intermedios que estén interesados ​​en mejorar sus habilidades en desarrollo web y programación Python. Arno Pretorius, un experimentado ingeniero de software, brinda instrucciones paso a paso, lo que garantiza que los estudiantes comprendan los conceptos fundamentales de Django y, al mismo tiempo, aprendan a implementar funciones del mundo real como listados de productos, carritos de compras y sistemas de pago.",
            // Hindi
            "हिंदी": "उडेमी पर अर्नो प्रीटोरियस द्वारा लिखित पायथन Django: एक ई-कॉमर्स स्टोर बनाएँ एक व्यापक पाठ्यक्रम है जिसे Django फ्रेमवर्क का उपयोग करके एक पूरी तरह कार्यात्मक ई-कॉमर्स वेबसाइट बनाने की प्रक्रिया के माध्यम से शिक्षार्थियों का मार्गदर्शन करने के लिए डिज़ाइन किया गया है। यह पाठ्यक्रम शुरुआती और मध्यवर्ती डेवलपर्स दोनों के लिए आदर्श है जो वेब डेवलपमेंट और पायथन प्रोग्रामिंग में अपने कौशल को बढ़ाने में रुचि रखते हैं। अर्नो प्रीटोरियस, एक अनुभवी सॉफ्टवेयर इंजीनियर, चरण-दर-चरण निर्देश प्रदान करता है, यह सुनिश्चित करते हुए कि छात्र Django की मूलभूत अवधारणाओं को समझें और साथ ही उत्पाद लिस्टिंग, शॉपिंग कार्ट और चेकआउट सिस्टम जैसी वास्तविक दुनिया की सुविधाओं को लागू करना सीखें।",
            // Portuguese
            "Português": "Python Django: Construa uma loja de comércio eletrónico de Arno Pretorius na Udemy é um curso abrangente desenvolvido para orientar os alunos no processo de criação de um site de comércio eletrónico totalmente funcional utilizando a estrutura Django. Este curso é ideal para programadores iniciantes e intermédios que estejam interessados ​​em melhorar as suas competências em desenvolvimento web e programação Python. Arno Pretorius, um engenheiro de software experiente, fornece instruções passo a passo, garantindo que os alunos compreendem os conceitos fundamentais do Django enquanto aprendem como implementar funcionalidades do mundo real, como listas de produtos, carrinhos de compras e sistemas de checkout.",
            // Bengali
            "বাংলা": "Python Django: Udemy-এ Arno Pretorius-এর দ্বারা একটি ই-কমার্স স্টোর তৈরি করা হল Django ফ্রেমওয়ার্ক ব্যবহার করে একটি সম্পূর্ণ কার্যকরী ই-কমার্স ওয়েবসাইট তৈরির প্রক্রিয়ার মাধ্যমে শিক্ষার্থীদের গাইড করার জন্য ডিজাইন করা একটি ব্যাপক কোর্স। এই কোর্সটি নতুন এবং মধ্যবর্তী বিকাশকারী উভয়ের জন্যই আদর্শ যারা ওয়েব ডেভেলপমেন্ট এবং পাইথন প্রোগ্রামিংয়ে তাদের দক্ষতা বাড়াতে আগ্রহী। আর্নো প্রিটোরিয়াস, একজন অভিজ্ঞ সফ্টওয়্যার প্রকৌশলী, ধাপে ধাপে নির্দেশনা প্রদান করে, যা নিশ্চিত করে যে শিক্ষার্থীরা জ্যাঙ্গোর মৌলিক ধারণাগুলি উপলব্ধি করতে পারে এবং সেইসঙ্গে পণ্য তালিকা, শপিং কার্ট এবং চেকআউট সিস্টেমের মতো বাস্তব-বিশ্বের বৈশিষ্ট্যগুলি কীভাবে প্রয়োগ করতে হয় তাও শেখে।",
            // Arabic
            "عَرَبِيّ": "Python Django: Build an E-commerce Store بواسطة Arno Pretorius على Udemy هي دورة شاملة مصممة لتوجيه المتعلمين خلال عملية إنشاء موقع ويب للتجارة الإلكترونية يعمل بكامل طاقته باستخدام إطار عمل Django. هذه الدورة مثالية للمبتدئين والمطورين المتوسطين المهتمين بتعزيز مهاراتهم في تطوير الويب وبرمجة Python. يقدم Arno Pretorius، وهو مهندس برمجيات متمرس، تعليمات خطوة بخطوة، مما يضمن أن الطلاب يدركون المفاهيم الأساسية لـ Django بينما يتعلمون أيضًا كيفية تنفيذ ميزات العالم الحقيقي مثل قوائم المنتجات وعربات التسوق وأنظمة الدفع.",
            // Persian
            "فارسی": "Python Django: Build an E-commerce Store توسط Arno Pretorius در Udemy یک دوره آموزشی جامع است که برای راهنمایی زبان آموزان در فرآیند ایجاد یک وب سایت تجارت الکترونیک کاملاً کاربردی با استفاده از چارچوب جنگو طراحی شده است. این دوره برای توسعه دهندگان مبتدی و متوسط ​​که علاقه مند به افزایش مهارت های خود در توسعه وب و برنامه نویسی پایتون هستند ایده آل است. آرنو پرتوریوس، یک مهندس نرم‌افزار باتجربه، دستورالعمل‌های گام به گام را ارائه می‌کند و تضمین می‌کند که دانش‌آموزان مفاهیم اساسی جنگو را درک می‌کنند و همچنین یاد می‌گیرند که چگونه ویژگی‌های دنیای واقعی مانند فهرست‌های محصولات، سبد خرید و سیستم‌های پرداخت را پیاده‌سازی کنند.",
        },
        // Second Paragraph
        "Paragraph-2": {
            // English
            "English": "Throughout the course, learners dive deep into the core functionalities of Django, including models, views, templates, and forms. Arno also covers essential aspects of building an e-commerce platform, such as managing user authentication, handling payments, and integrating third-party services. The course emphasizes hands-on practice, allowing students to follow along with the coding exercises and build their e-commerce store from scratch. By the end of the course, students will have a solid understanding of Django and will be able to create complex web applications with confidence.",
            // German
            "Deutsch": "Während des Kurses tauchen die Teilnehmer tief in die Kernfunktionen von Django ein, darunter Modelle, Ansichten, Vorlagen und Formulare. Arno behandelt auch wesentliche Aspekte beim Aufbau einer E-Commerce-Plattform, wie die Verwaltung der Benutzerauthentifizierung, die Abwicklung von Zahlungen und die Integration von Diensten Dritter. Der Kurs legt den Schwerpunkt auf praktische Übungen, sodass die Teilnehmer die Programmierübungen mitmachen und ihren E-Commerce-Shop von Grund auf aufbauen können. Am Ende des Kurses verfügen die Teilnehmer über ein solides Verständnis von Django und können komplexe Webanwendungen sicher erstellen.",
            // Chinese
            "中国人": "在整个课程中，学习者将深入了解 Django 的核心功能，包括模型、视图、模板和表单。Arno 还涵盖了构建电子商务平台的基本方面，例如管理用户身份验证、处理付款和集成第三方服务。该课程强调动手实践，让学生跟随编码练习并从头开始构建他们的电子商务商店。在课程结束时，学生将对 Django 有扎实的了解，并能够自信地创建复杂的 Web 应用程序。",
            // Russian
            "Русский": "На протяжении всего курса учащиеся глубоко погружаются в основные функции Django, включая модели, представления, шаблоны и формы. Арно также охватывает основные аспекты создания платформы электронной коммерции, такие как управление аутентификацией пользователей, обработка платежей и интеграция сторонних сервисов. Курс делает акцент на практической практике, позволяя учащимся следовать упражнениям по кодированию и создавать свой магазин электронной коммерции с нуля. К концу курса учащиеся будут иметь прочное понимание Django и смогут уверенно создавать сложные веб-приложения.",
            // French
            "Français": "Tout au long du cours, les apprenants se plongent dans les fonctionnalités de base de Django, notamment les modèles, les vues, les modèles et les formulaires. Arno couvre également les aspects essentiels de la création d'une plateforme de commerce électronique, tels que la gestion de l'authentification des utilisateurs, la gestion des paiements et l'intégration de services tiers. Le cours met l'accent sur la pratique, permettant aux étudiants de suivre les exercices de codage et de créer leur boutique de commerce électronique à partir de zéro. À la fin du cours, les étudiants auront une solide compréhension de Django et seront capables de créer des applications Web complexes en toute confiance.",
            // Japanese
            "日本語": "コース全体を通して、学習者はモデル、ビュー、テンプレート、フォームなど、Django のコア機能を深く理解します。また、Arno は、ユーザー認証の管理、支払いの処理、サードパーティ サービスの統合など、e コマース プラットフォームの構築に不可欠な側面についても説明します。このコースでは実践的な練習を重視しており、学習者はコーディング演習に沿って e コマース ストアをゼロから構築できます。コース終了時には、学習者は Django をしっかりと理解し、自信を持って複雑な Web アプリケーションを作成できるようになります。",
            // Korean
            "한국인": "과정 전반에 걸쳐 학습자는 모델, 뷰, 템플릿, 폼을 포함한 Django의 핵심 기능을 깊이 파고듭니다. Arno는 또한 사용자 인증 관리, 결제 처리, 타사 서비스 통합과 같은 전자상거래 플랫폼 구축의 필수적인 측면을 다룹니다. 이 과정은 실습을 강조하여 학생들이 코딩 연습을 따라가고 처음부터 전자상거래 매장을 구축할 수 있도록 합니다. 과정을 마치면 학생들은 Django에 대한 확실한 이해를 갖게 되고 자신 있게 복잡한 웹 애플리케이션을 만들 수 있게 됩니다.",
            // Spanish
            "Español": "A lo largo del curso, los alumnos profundizan en las funcionalidades básicas de Django, incluidos los modelos, las vistas, las plantillas y los formularios. Arno también cubre aspectos esenciales de la creación de una plataforma de comercio electrónico, como la gestión de la autenticación de usuarios, la gestión de pagos y la integración de servicios de terceros. El curso hace hincapié en la práctica, lo que permite a los estudiantes seguir los ejercicios de codificación y crear su tienda de comercio electrónico desde cero. Al final del curso, los estudiantes tendrán una sólida comprensión de Django y podrán crear aplicaciones web complejas con confianza.",
            // Hindi
            "हिंदी": "पूरे कोर्स के दौरान, शिक्षार्थी मॉडल, व्यू, टेम्प्लेट और फॉर्म सहित Django की मुख्य कार्यक्षमताओं में गहराई से उतरते हैं। अर्नो ई-कॉमर्स प्लेटफ़ॉर्म बनाने के आवश्यक पहलुओं को भी कवर करता है, जैसे कि उपयोगकर्ता प्रमाणीकरण का प्रबंधन करना, भुगतान संभालना और तृतीय-पक्ष सेवाओं को एकीकृत करना। पाठ्यक्रम व्यावहारिक अभ्यास पर जोर देता है, जिससे छात्रों को कोडिंग अभ्यासों का पालन करने और स्क्रैच से अपना ई-कॉमर्स स्टोर बनाने की अनुमति मिलती है। पाठ्यक्रम के अंत तक, छात्रों को Django की ठोस समझ होगी और वे आत्मविश्वास के साथ जटिल वेब एप्लिकेशन बनाने में सक्षम होंगे।",
            // Portuguese
            "Português": "Ao longo do curso, os alunos aprofundam as principais funcionalidades do Django, incluindo modelos, visualizações, modelos e formulários. O Arno também aborda aspetos essenciais da construção de uma plataforma de comércio eletrónico, como a gestão da autenticação de utilizadores, o tratamento de pagamentos e a integração de serviços de terceiros. O curso enfatiza a prática, permitindo aos alunos acompanhar os exercícios de codificação e construir a sua loja de comércio eletrónico a partir do zero. No final do curso, os alunos terão um conhecimento sólido de Django e serão capazes de criar aplicações web complexas com confiança.",
            // Bengali
            "বাংলা": "পুরো কোর্স জুড়ে, শিক্ষার্থীরা জ্যাঙ্গোর মূল কার্যকারিতা, মডেল, দৃশ্য, টেমপ্লেট এবং ফর্ম সহ গভীরভাবে ডুব দেয়। আরনো একটি ই-কমার্স প্ল্যাটফর্ম তৈরির প্রয়োজনীয় দিকগুলিও কভার করে, যেমন ব্যবহারকারীর প্রমাণীকরণ পরিচালনা, অর্থপ্রদান পরিচালনা এবং তৃতীয় পক্ষের পরিষেবাগুলিকে একীভূত করা। কোর্সটি হাতে-কলমে অনুশীলনের উপর জোর দেয়, যা শিক্ষার্থীদের কোডিং অনুশীলনের সাথে অনুসরণ করতে এবং স্ক্র্যাচ থেকে তাদের ই-কমার্স স্টোর তৈরি করতে দেয়। কোর্সের শেষে, শিক্ষার্থীরা জ্যাঙ্গো সম্পর্কে একটি দৃঢ় ধারণা পাবে এবং আত্মবিশ্বাসের সাথে জটিল ওয়েব অ্যাপ্লিকেশন তৈরি করতে সক্ষম হবে।",
            // Arabic
            "عَرَبِيّ": "خلال الدورة، يتعمق المتعلمون في الوظائف الأساسية لـ Django، بما في ذلك النماذج والعروض والقوالب والنماذج. كما يغطي أرنو أيضًا الجوانب الأساسية لبناء منصة للتجارة الإلكترونية، مثل إدارة مصادقة المستخدم ومعالجة المدفوعات ودمج خدمات الطرف الثالث. وتؤكد الدورة على الممارسة العملية، مما يسمح للطلاب بمتابعة تمارين الترميز وبناء متجر التجارة الإلكترونية الخاص بهم من الصفر. بحلول نهاية الدورة، سيكون لدى الطلاب فهم قوي لـ Django وسيكونون قادرين على إنشاء تطبيقات ويب معقدة بثقة.",
            // Persian
            "فارسی": "در طول دوره، زبان آموزان عمیقاً به عملکردهای اصلی جنگو، از جمله مدل ها، نماها، قالب ها و فرم ها می پردازند. آرنو همچنین جنبه‌های ضروری ساخت یک پلتفرم تجارت الکترونیک، مانند مدیریت احراز هویت کاربر، رسیدگی به پرداخت‌ها و یکپارچه‌سازی خدمات شخص ثالث را پوشش می‌دهد. این دوره بر تمرین عملی تأکید دارد و به دانش‌آموزان اجازه می‌دهد تا تمرین‌های کدنویسی را دنبال کنند و فروشگاه تجارت الکترونیک خود را از ابتدا بسازند. در پایان دوره، دانش‌آموزان درک کاملی از جنگو خواهند داشت و می‌توانند برنامه‌های پیچیده وب را با اطمینان ایجاد کنند.",
        },
        // Third Paragraph
        "Paragraph-3": {
            // English
            "English": "In addition to the technical skills, the course also touches on important topics like deploying Django projects to production, optimizing performance, and ensuring security. Arno Pretorius leverages his industry experience to provide valuable insights and best practices that are crucial for any developer aiming to succeed in the field of web development. Whether you're looking to start a new career in web development or enhance your existing skills, this course offers a thorough and practical approach to mastering Django and building dynamic e-commerce applications.",
            // German
            "Deutsch": "Neben den technischen Fähigkeiten werden im Kurs auch wichtige Themen wie die Bereitstellung von Django-Projekten für die Produktion, die Optimierung der Leistung und die Gewährleistung der Sicherheit behandelt. Arno Pretorius nutzt seine Branchenerfahrung, um wertvolle Einblicke und bewährte Methoden bereitzustellen, die für jeden Entwickler von entscheidender Bedeutung sind, der im Bereich der Webentwicklung erfolgreich sein möchte. Egal, ob Sie eine neue Karriere in der Webentwicklung starten oder Ihre vorhandenen Fähigkeiten verbessern möchten, dieser Kurs bietet einen gründlichen und praktischen Ansatz zur Beherrschung von Django und zum Erstellen dynamischer E-Commerce-Anwendungen.",
            // Chinese
            "中国人": "除了技术技能外，本课程还涉及重要主题，例如将 Django 项目部署到生产环境、优化性能和确保安全性。Arno Pretorius 利用他的行业经验提供宝贵的见解和最佳实践，这些见解和最佳实践对于任何想要在 Web 开发领域取得成功的开发人员来说都至关重要。无论您是想开始新的 Web 开发职业生涯还是增强现有技能，本课程都提供了一种全面而实用的方法来掌握 Django 并构建动态电子商务应用程序。",
            // Russian
            "Русский": "Помимо технических навыков, курс также затрагивает такие важные темы, как развертывание проектов Django в производстве, оптимизация производительности и обеспечение безопасности. Арно Преториус использует свой отраслевой опыт, чтобы предоставить ценные идеи и лучшие практики, которые имеют решающее значение для любого разработчика, стремящегося добиться успеха в области веб-разработки. Независимо от того, хотите ли вы начать новую карьеру в веб-разработке или улучшить свои существующие навыки, этот курс предлагает основательный и практический подход к освоению Django и созданию динамических приложений электронной коммерции.",
            // French
            "Français": "En plus des compétences techniques, le cours aborde également des sujets importants tels que le déploiement de projets Django en production, l'optimisation des performances et la garantie de la sécurité. Arno Pretorius s'appuie sur son expérience du secteur pour fournir des informations précieuses et des bonnes pratiques qui sont cruciales pour tout développeur souhaitant réussir dans le domaine du développement Web. Que vous cherchiez à démarrer une nouvelle carrière dans le développement Web ou à améliorer vos compétences existantes, ce cours offre une approche approfondie et pratique pour maîtriser Django et créer des applications de commerce électronique dynamiques.",
            // Japanese
            "日本語": "このコースでは、技術的なスキルに加えて、Django プロジェクトを本番環境にデプロイする、パフォーマンスを最適化する、セキュリティを確保するといった重要なトピックについても取り上げます。Arno Pretorius は、業界での経験を活かして、Web 開発の分野で成功を目指す開発者にとって重要な、貴重な洞察とベスト プラクティスを提供します。Web 開発で新しいキャリアを始めたい場合でも、既存のスキルを強化したい場合でも、このコースは、Django を習得し、動的な e コマース アプリケーションを構築するための徹底的かつ実践的なアプローチを提供します。",
            // Korean
            "한국인": "기술적 기술 외에도 이 과정은 Django 프로젝트를 프로덕션에 배포하고, 성능을 최적화하고, 보안을 보장하는 것과 같은 중요한 주제에 대해서도 다룹니다. Arno Pretorius는 업계 경험을 활용하여 웹 개발 분야에서 성공하려는 모든 개발자에게 중요한 귀중한 통찰력과 모범 사례를 제공합니다. 웹 개발 분야에서 새로운 경력을 시작하거나 기존 기술을 향상시키려는 경우 이 과정은 Django를 마스터하고 동적 전자 상거래 애플리케이션을 구축하는 데 철저하고 실용적인 접근 방식을 제공합니다.",
            // Spanish
            "Español": "Además de las habilidades técnicas, el curso también aborda temas importantes como la implementación de proyectos de Django en producción, la optimización del rendimiento y la garantía de la seguridad. Arno Pretorius aprovecha su experiencia en la industria para brindar información valiosa y las mejores prácticas que son cruciales para cualquier desarrollador que desee tener éxito en el campo del desarrollo web. Ya sea que desee comenzar una nueva carrera en el desarrollo web o mejorar sus habilidades existentes, este curso ofrece un enfoque exhaustivo y práctico para dominar Django y crear aplicaciones de comercio electrónico dinámicas.",
            // Hindi
            "हिंदी": "तकनीकी कौशल के अलावा, यह पाठ्यक्रम Django परियोजनाओं को उत्पादन में तैनात करने, प्रदर्शन को अनुकूलित करने और सुरक्षा सुनिश्चित करने जैसे महत्वपूर्ण विषयों को भी छूता है। अर्नो प्रीटोरियस अपने उद्योग के अनुभव का लाभ उठाकर मूल्यवान अंतर्दृष्टि और सर्वोत्तम अभ्यास प्रदान करते हैं जो वेब विकास के क्षेत्र में सफल होने के लक्ष्य वाले किसी भी डेवलपर के लिए महत्वपूर्ण हैं। चाहे आप वेब डेवलपमेंट में एक नया करियर शुरू करना चाहते हों या अपने मौजूदा कौशल को बढ़ाना चाहते हों, यह कोर्स Django में महारत हासिल करने और गतिशील ई-कॉमर्स एप्लिकेशन बनाने के लिए एक संपूर्ण और व्यावहारिक दृष्टिकोण प्रदान करता है।",
            // Portuguese
            "Português": "Para além das competências técnicas, o curso aborda também temas importantes como a implementação de projetos Django em produção, a otimização de desempenho e a garantia de segurança. Arno Pretorius aproveita a sua experiência no setor para fornecer insights valiosos e melhores práticas que são cruciais para qualquer programador que pretenda ter sucesso na área de desenvolvimento web. Quer esteja à procura de iniciar uma nova carreira em desenvolvimento web ou de melhorar as suas competências existentes, este curso oferece uma abordagem completa e prática para dominar o Django e construir aplicações dinâmicas de comércio eletrónico.",
            // Bengali
            "বাংলা": "প্রযুক্তিগত দক্ষতার পাশাপাশি, কোর্সটি জ্যাঙ্গো প্রকল্পগুলিকে উৎপাদনে মোতায়েন করা, কর্মক্ষমতা অপ্টিমাইজ করা এবং নিরাপত্তা নিশ্চিত করার মতো গুরুত্বপূর্ণ বিষয়গুলিকেও স্পর্শ করে৷ আর্নো প্রিটোরিয়াস মূল্যবান অন্তর্দৃষ্টি এবং সর্বোত্তম অনুশীলনগুলি প্রদান করতে তার শিল্পের অভিজ্ঞতা লাভ করে যা ওয়েব বিকাশের ক্ষেত্রে সফল হওয়ার লক্ষ্যে যে কোনও বিকাশকারীর জন্য অত্যন্ত গুরুত্বপূর্ণ। আপনি ওয়েব ডেভেলপমেন্টে একটি নতুন কর্মজীবন শুরু করতে চাইছেন বা আপনার বিদ্যমান দক্ষতা বাড়াতে চাইছেন না কেন, এই কোর্সটি জ্যাঙ্গোকে আয়ত্ত করতে এবং গতিশীল ই-কমার্স অ্যাপ্লিকেশন তৈরি করার জন্য একটি পুঙ্খানুপুঙ্খ এবং ব্যবহারিক পদ্ধতির প্রস্তাব দেয়।",
            // Arabic
            "عَرَبِيّ": "بالإضافة إلى المهارات الفنية، تتناول الدورة أيضًا مواضيع مهمة مثل نشر مشاريع Django في الإنتاج، وتحسين الأداء، وضمان الأمان. يستفيد أرنو بريتوريوس من خبرته في الصناعة لتقديم رؤى قيمة وأفضل الممارسات التي تعد بالغة الأهمية لأي مطور يهدف إلى النجاح في مجال تطوير الويب. سواء كنت تتطلع إلى بدء مهنة جديدة في تطوير الويب أو تحسين مهاراتك الحالية، تقدم هذه الدورة نهجًا شاملاً وعمليًا لإتقان Django وبناء تطبيقات التجارة الإلكترونية الديناميكية.",
            // Persian
            "فارسی": "علاوه بر مهارت های فنی، این دوره همچنین موضوعات مهمی مانند استقرار پروژه های جنگو در تولید، بهینه سازی عملکرد و تضمین امنیت را مورد بررسی قرار می دهد. آرنو پرتوریوس از تجربه صنعت خود استفاده می‌کند تا بینش‌های ارزشمند و بهترین شیوه‌ها را ارائه دهد که برای هر توسعه‌دهنده‌ای که هدفش موفقیت در زمینه توسعه وب است، حیاتی است. چه به دنبال شروع یک حرفه جدید در توسعه وب یا ارتقای مهارت های موجود خود باشید، این دوره یک رویکرد کامل و عملی برای تسلط بر جنگو و ساخت برنامه های کاربردی تجارت الکترونیک پویا ارائه می دهد.",
        },
    },
    "InstructorDescriptions": {
        // Paragraph 1
        "Paragraph-1": {
            // English
            "English": "Arno is a software developer and a solutions architect who has experience in creating and deploying Django-based applications to the AWS cloud. He has a strong interest in web development, cloud computing and devops. Apart from holding a BSc in Information Technology, he is also an AWS Certified Solutions Architect and Developer. During his spare time he enjoys reading, rowing, drawing and exploring new interests/hobbies.",
            // German
            "Deutsch": "Arno ist ein Softwareentwickler und Lösungsarchitekt mit Erfahrung in der Erstellung und Bereitstellung von Django-basierten Anwendungen in der AWS-Cloud. Er interessiert sich sehr für Webentwicklung, Cloud Computing und DevOps. Neben seinem Bachelor in Informationstechnologie ist er auch ein AWS Certified Solutions Architect und Developer. In seiner Freizeit liest, rudert, zeichnet und erkundet er gerne neue Interessen/Hobbys.",
            // Chinese
            "中国人": "Arno 是一名软件开发人员和解决方案架构师，在创建和部署基于 Django 的应用程序到 AWS 云方面拥有丰富的经验。他对 Web 开发、云计算和 DevOps 有着浓厚的兴趣。除了拥有信息技术学士学位外，他还是一名 AWS 认证解决方案架构师和开发人员。在业余时间，他喜欢阅读、划船、绘画和探索新的兴趣/爱好。",
            // Russian
            "Русский": "Арно — разработчик программного обеспечения и архитектор решений, имеющий опыт создания и развертывания приложений на базе Django в облаке AWS. Он проявляет большой интерес к веб-разработке, облачным вычислениям и DevOps. Помимо степени бакалавра в области информационных технологий, он также является сертифицированным архитектором и разработчиком решений AWS. В свободное время он любит читать, заниматься греблей, рисовать и изучать новые интересы/хобби.",
            // French
            "Français": "Arno est un développeur de logiciels et un architecte de solutions qui possède de l'expérience dans la création et le déploiement d'applications basées sur Django dans le cloud AWS. Il s'intéresse particulièrement au développement Web, au cloud computing et au DevOps. En plus d'être titulaire d'une licence en technologies de l'information, il est également architecte et développeur de solutions certifié AWS. Pendant son temps libre, il aime lire, ramer, dessiner et explorer de nouveaux intérêts/passe-temps.",
            // Japanese
            "日本語": "Arno はソフトウェア開発者であり、ソリューション アーキテクトでもあります。Django ベースのアプリケーションを作成して AWS クラウドにデプロイした経験があります。Web 開発、クラウド コンピューティング、DevOps に強い関心を持っています。情報技術の理学士号を取得しているほか、AWS 認定ソリューション アーキテクト兼開発者でもあります。余暇には、読書、ボート漕ぎ、絵を描くこと、新しい興味や趣味の探求を楽しんでいます。",
            // Korean
            "한국인": "Arno는 Django 기반 애플리케이션을 AWS 클라우드에 생성하고 배포한 경험이 있는 소프트웨어 개발자이자 솔루션 아키텍트입니다. 그는 웹 개발, 클라우드 컴퓨팅 및 DevOps에 큰 관심이 있습니다. 정보 기술 학사 학위 외에도 그는 AWS 인증 솔루션 아키텍트이자 개발자이기도 합니다. 여가 시간에는 독서, 노 젓기, 그림 그리기, 새로운 관심사/취미 탐구를 즐깁니다.",
            // Spanish
            "Español": "Arno es un desarrollador de software y arquitecto de soluciones que tiene experiencia en la creación e implementación de aplicaciones basadas en Django en la nube de AWS. Tiene un gran interés en el desarrollo web, la computación en la nube y DevOps. Además de tener una licenciatura en Tecnología de la información, también es arquitecto y desarrollador de soluciones certificado por AWS. Durante su tiempo libre disfruta de leer, remar, dibujar y explorar nuevos intereses y pasatiempos.",
            // Hindi
            "हिंदी": "अर्नो एक सॉफ्टवेयर डेवलपर और सॉल्यूशन आर्किटेक्ट हैं, जिन्हें Django-आधारित एप्लिकेशन बनाने और उन्हें AWS क्लाउड पर तैनात करने का अनुभव है। उन्हें वेब डेवलपमेंट, क्लाउड कंप्यूटिंग और डेवऑप्स में गहरी रुचि है। सूचना प्रौद्योगिकी में बीएससी करने के अलावा, वह एक AWS प्रमाणित सॉल्यूशन आर्किटेक्ट और डेवलपर भी हैं। अपने खाली समय में उन्हें पढ़ना, नौकायन करना, ड्राइंग करना और नई रुचियों/शौक की खोज करना पसंद है।",
            // Portuguese
            "Português": "Arno é um programador de software e arquiteto de soluções com experiência na criação e implementação de aplicações baseadas em Django na cloud AWS. Tem um grande interesse em desenvolvimento web, computação em nuvem e devops. Além de ser licenciado em Tecnologia da Informação, é também arquiteto e desenvolvedor de soluções certificados pela AWS. Nos seus tempos livres gosta de ler, remar, desenhar e explorar novos interesses/hobbys.",
            // Bengali
            "বাংলা": "Arno একজন সফটওয়্যার ডেভেলপার এবং একজন সমাধান আর্কিটেক্ট যার AWS ক্লাউডে জ্যাঙ্গো-ভিত্তিক অ্যাপ্লিকেশন তৈরি এবং স্থাপন করার অভিজ্ঞতা রয়েছে। ওয়েব ডেভেলপমেন্ট, ক্লাউড কম্পিউটিং এবং ডেভপস-এর প্রতি তার প্রবল আগ্রহ রয়েছে। তথ্য প্রযুক্তিতে বিএসসি করার পাশাপাশি তিনি একজন AWS সার্টিফাইড সলিউশন আর্কিটেক্ট এবং ডেভেলপার। তার অবসর সময়ে তিনি পড়া, রোয়িং, অঙ্কন এবং নতুন আগ্রহ/শখ অন্বেষণ উপভোগ করেন।",
            // Arabic
            "عَرَبِيّ": "أرنو هو مطور برامج ومهندس حلول يتمتع بخبرة في إنشاء ونشر التطبيقات المستندة إلى Django على سحابة AWS. لديه اهتمام قوي بتطوير الويب والحوسبة السحابية وعمليات التطوير. وبصرف النظر عن حصوله على درجة البكالوريوس في تكنولوجيا المعلومات، فهو أيضًا مهندس حلول ومطور معتمد من AWS. وفي وقت فراغه، يستمتع بالقراءة والتجديف والرسم واستكشاف اهتمامات/هوايات جديدة.",
            // Persian
            "فارسی": "Arno یک توسعه دهنده نرم افزار و یک معمار راه حل است که در ایجاد و استقرار برنامه های کاربردی مبتنی بر جنگو در ابر AWS تجربه دارد. او علاقه زیادی به توسعه وب، محاسبات ابری و توسعه دارد. او علاوه بر داشتن مدرک لیسانس در فناوری اطلاعات، معمار و توسعه دهنده راه حل های معتبر AWS نیز می باشد. در اوقات فراغت خود از خواندن، قایقرانی، نقاشی و کشف علایق/سرگرمی های جدید لذت می برد.",
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
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].textContent = building_e_commerence_website["ThreeShortDescriptions"]["Paragraph-" + index.toString()][language];
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].style.fontFamily = secondFontFamilyHeirachy[language];
    }

    // Instructor Descriptions
    for (var index = 1; index <= 1; ++index) {
        document.getElementsByClassName("short-description-and-some-numbers-text-content-" + (index).toString())[0].innerHTML = building_e_commerence_website["InstructorDescriptions"]["Paragraph-" + index.toString()][language];
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