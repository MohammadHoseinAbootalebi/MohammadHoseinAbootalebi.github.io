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
var head_first_git = {
    "BookName": "Head First Git",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Beginning Git: Get Going with Git",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter introduces Git as a powerful version control system essential for managing software projects, allowing developers to track changes, collaborate effectively, and maintain a history of their work. It explains the process of creating a Git repository, staging files with , and committing changes with , emphasizing the importance of snapshots for saving progress and reverting to previous states if needed. The chapter also highlights the significance of understanding file states and using commands like to monitor the project's status as it grows.",
                // German
                "Deutsch": "In diesem Kapitel wird Git als leistungsstarkes Versionskontrollsystem vorgestellt, das für die Verwaltung von Softwareprojekten unverzichtbar ist. Entwickler können damit Änderungen verfolgen, effektiv zusammenarbeiten und einen Verlauf ihrer Arbeit pflegen. Es erklärt den Prozess der Erstellung eines Git-Repositorys, der Bereitstellung von Dateien mit und der Übermittlung von Änderungen mit und betont die Bedeutung von Snapshots zum Speichern des Fortschritts und zum Wiederherstellen vorheriger Zustände, falls erforderlich. Das Kapitel betont auch die Bedeutung des Verständnisses von Dateizuständen und der Verwendung von Befehlen wie zum Überwachen des Status des Projekts während seines Wachstums.",
                // Chinese
                "中国人": "本章介绍了 Git，它是管理软件项目必不可少的强大版本控制系统，允许开发人员跟踪更改、有效协作并维护其工作历史记录。它解释了创建 Git 存储库、使用暂存文件和使用提交更改的过程，强调了快照对于保存进度和在需要时恢复到先前状态的重要性。本章还强调了了解文件状态和使用诸如此类的命令来监控项目发展过程中的状态的重要性。",
                // Russian
                "Русский": "В этой главе представлен Git как мощная система контроля версий, необходимая для управления программными проектами, позволяющая разработчикам отслеживать изменения, эффективно сотрудничать и вести историю своей работы. В ней объясняется процесс создания репозитория Git, размещения файлов с помощью и фиксации изменений с помощью , подчеркивая важность снимков для сохранения прогресса и возврата к предыдущим состояниям при необходимости. В главе также подчеркивается важность понимания состояний файлов и использования таких команд, как мониторинг статуса проекта по мере его роста.",
                // French
                "Français": "Ce chapitre présente Git comme un puissant système de contrôle de version essentiel à la gestion de projets logiciels, permettant aux développeurs de suivre les modifications, de collaborer efficacement et de conserver un historique de leur travail. Il explique le processus de création d'un référentiel Git, de préparation des fichiers avec , et de validation des modifications avec , en soulignant l'importance des instantanés pour enregistrer la progression et revenir aux états précédents si nécessaire. Le chapitre souligne également l'importance de comprendre les états des fichiers et d'utiliser des commandes comme pour surveiller l'état du projet à mesure qu'il se développe.",
                // Japanese
                "日本語": "この章では、ソフトウェア プロジェクトの管理に不可欠な強力なバージョン管理システムとして Git を紹介します。これにより、開発者は変更を追跡し、効果的に共同作業を行い、作業履歴を維持できます。Git リポジトリの作成、 を使用したファイルのステージング、 を使用した変更のコミットのプロセスについて説明し、進行状況を保存して必要に応じて以前の状態に戻すためのスナップショットの重要性を強調します。また、この章では、ファイルの状態を理解し、 などのコマンドを使用してプロジェクトの拡大に​​伴うステータスを監視することの重要性についても強調します。",
                // Korean
                "한국인": "이 장에서는 소프트웨어 프로젝트를 관리하는 데 필수적인 강력한 버전 제어 시스템인 Git을 소개하고, 개발자가 변경 사항을 추적하고, 효과적으로 협업하고, 작업 내역을 유지할 수 있도록 합니다. Git 저장소를 만들고, 를 사용하여 파일을 스테이징하고, 를 사용하여 변경 사항을 커밋하는 프로세스를 설명하며, 진행 상황을 저장하고 필요한 경우 이전 상태로 되돌리기 위한 스냅샷의 중요성을 강조합니다. 또한 이 장에서는 파일 상태를 이해하고 프로젝트가 성장함에 따라 프로젝트 상태를 모니터링하는 것과 같은 명령을 사용하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "En este capítulo se presenta Git como un potente sistema de control de versiones esencial para gestionar proyectos de software, que permite a los desarrolladores realizar un seguimiento de los cambios, colaborar de forma eficaz y mantener un historial de su trabajo. Se explica el proceso de creación de un repositorio Git, el almacenamiento provisional de archivos con y la confirmación de cambios con , haciendo hincapié en la importancia de las instantáneas para guardar el progreso y volver a estados anteriores si es necesario. El capítulo también destaca la importancia de comprender los estados de los archivos y utilizar comandos como para supervisar el estado del proyecto a medida que crece.",
                // Hindi
                "हिंदी": "यह अध्याय Git को एक शक्तिशाली संस्करण नियंत्रण प्रणाली के रूप में पेश करता है जो सॉफ्टवेयर परियोजनाओं के प्रबंधन के लिए आवश्यक है, जिससे डेवलपर्स परिवर्तनों को ट्रैक कर सकते हैं, प्रभावी ढंग से सहयोग कर सकते हैं और अपने काम का इतिहास बनाए रख सकते हैं। यह Git रिपॉजिटरी बनाने, , के साथ फ़ाइलों को स्टेज करने और , के साथ परिवर्तनों को कमिट करने की प्रक्रिया को समझाता है, प्रगति को सहेजने और ज़रूरत पड़ने पर पिछली स्थिति में वापस जाने के लिए स्नैपशॉट के महत्व पर ज़ोर देता है। अध्याय फ़ाइल स्थितियों को समझने और प्रोजेक्ट की स्थिति की निगरानी करने के लिए जैसे कमांड का उपयोग करने के महत्व पर भी प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo apresenta o Git como um poderoso sistema de controlo de versões, essencial para a gestão de projetos de software, permitindo aos programadores acompanhar as alterações, colaborar eficazmente e manter um histórico do seu trabalho. Explica o processo de criação de um repositório Git, preparação de ficheiros com e confirmação de alterações com , enfatizando a importância dos instantâneos para guardar o progresso e reverter para estados anteriores, se necessário. O capítulo destaca ainda a importância de compreender os estados dos ficheiros e utilizar comandos como monitorizar o estado do projeto à medida que este cresce.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি সফ্টওয়্যার প্রকল্পগুলি পরিচালনার জন্য প্রয়োজনীয় একটি শক্তিশালী সংস্করণ নিয়ন্ত্রণ ব্যবস্থা হিসাবে গিটকে পরিচয় করিয়ে দেয়, যা বিকাশকারীদের পরিবর্তনগুলি ট্র্যাক করতে, কার্যকরভাবে সহযোগিতা করতে এবং তাদের কাজের ইতিহাস বজায় রাখতে দেয়। এটি একটি গিট রিপোজিটরি তৈরি করার প্রক্রিয়া ব্যাখ্যা করে, এর সাথে ফাইলগুলিকে স্টেজিং করে এবং এর সাথে পরিবর্তন করে, অগ্রগতি সংরক্ষণের জন্য স্ন্যাপশটগুলির গুরুত্বের উপর জোর দেয় এবং প্রয়োজনে পূর্ববর্তী অবস্থায় ফিরে আসে। অধ্যায়টি ফাইলের অবস্থা বোঝার তাৎপর্যও তুলে ধরে এবং প্রকল্পের স্থিতি বৃদ্ধির সাথে সাথে তা নিরীক্ষণ করার মতো কমান্ড ব্যবহার করে।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل تعريفًا بـ Git باعتباره نظامًا قويًا للتحكم في الإصدارات ضروريًا لإدارة مشاريع البرمجيات، مما يسمح للمطورين بتتبع التغييرات والتعاون بشكل فعال والحفاظ على تاريخ عملهم. ويشرح عملية إنشاء مستودع Git، وإعداد الملفات باستخدام ، وتأكيد التغييرات باستخدام ، مع التأكيد على أهمية اللقطات لحفظ التقدم والعودة إلى الحالات السابقة إذا لزم الأمر. ويسلط الفصل الضوء أيضًا على أهمية فهم حالات الملفات واستخدام الأوامر مثل مراقبة حالة المشروع أثناء نموه.",
                // Persian
                "فارسی": "این فصل Git را به‌عنوان یک سیستم کنترل نسخه قدرتمند برای مدیریت پروژه‌های نرم‌افزاری معرفی می‌کند که به توسعه‌دهندگان اجازه می‌دهد تغییرات را ردیابی کنند، به طور مؤثر همکاری کنند و تاریخچه کار خود را حفظ کنند. این فرآیند ایجاد یک مخزن Git، مرحله بندی فایل ها با، و انجام تغییرات با، با تاکید بر اهمیت عکس های فوری برای ذخیره پیشرفت و بازگشت به حالت های قبلی در صورت نیاز را توضیح می دهد. این فصل همچنین اهمیت درک وضعیت فایل و استفاده از دستوراتی مانند نظارت بر وضعیت پروژه را در حین رشد برجسته می کند.",
            },
        },
        // 2
        {
            "ChapterName": "Branching Out: Multiple Trains of Thought",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter discusses the concept of branching in Git, emphasizing its ability to facilitate parallel development on multiple tasks without interference. It explains that branches are pointers to commits, allowing developers to work independently on features or bug fixes while maintaining a clear commit history. The chapter also highlights the importance of merging branches to integrate changes, the potential for merge conflicts, and the need to manage branches effectively to keep the repository organized.",
                // German
                "Deutsch": "In diesem Kapitel wird das Konzept der Verzweigung in Git erörtert und die Fähigkeit betont, die parallele Entwicklung mehrerer Aufgaben ohne Störungen zu ermöglichen. Es wird erklärt, dass Verzweigungen Zeiger auf Commits sind, sodass Entwickler unabhängig an Funktionen oder Fehlerbehebungen arbeiten können und gleichzeitig einen klaren Commit-Verlauf beibehalten. Das Kapitel betont auch die Bedeutung der Zusammenführung von Verzweigungen zur Integration von Änderungen, das Potenzial für Zusammenführungskonflikte und die Notwendigkeit, Verzweigungen effektiv zu verwalten, um das Repository organisiert zu halten.",
                // Chinese
                "中国人": "本章讨论了 Git 中的分支概念，强调了其促进多个任务并行开发而不相互干扰的能力。它解释了分支是指向提交的指针，允许开发人员独立处理功能或错误修复，同时保持清晰的提交历史记录。本章还强调了合并分支以整合更改的重要性、合并冲突的可能性以及有效管理分支以保持存储库井然有序的必要性。",
                // Russian
                "Русский": "В этой главе обсуждается концепция ветвления в Git, подчеркивая ее способность облегчать параллельную разработку нескольких задач без помех. В ней объясняется, что ветви являются указателями на коммиты, позволяя разработчикам независимо работать над функциями или исправлениями ошибок, сохраняя при этом четкую историю коммитов. В главе также подчеркивается важность слияния ветвей для интеграции изменений, потенциальные конфликты слияния и необходимость эффективного управления ветвями для поддержания организованности репозитория.",
                // French
                "Français": "Ce chapitre aborde le concept de ramification dans Git, en soulignant sa capacité à faciliter le développement parallèle de plusieurs tâches sans interférence. Il explique que les branches sont des pointeurs vers des commits, permettant aux développeurs de travailler de manière indépendante sur des fonctionnalités ou des corrections de bogues tout en conservant un historique de commit clair. Le chapitre souligne également l'importance de la fusion des branches pour intégrer les modifications, le risque de conflits de fusion et la nécessité de gérer efficacement les branches pour maintenir le référentiel organisé.",
                // Japanese
                "日本語": "この章では、Git のブランチの概念について説明し、複数のタスクを干渉なく並行して開発できるようにする機能を強調します。ブランチはコミットへのポインターであり、開発者が明確なコミット履歴を維持しながら、機能やバグ修正に独立して取り組むことができることを説明します。また、この章では、変更を統合するためにブランチをマージすることの重要性、マージ競合の可能性、リポジトリを整理するためにブランチを効果的に管理する必要性についても強調します。",
                // Korean
                "한국인": "이 장에서는 Git의 브랜칭 개념을 논의하며, 간섭 없이 여러 작업에 대한 병렬 개발을 용이하게 하는 기능을 강조합니다. 브랜치는 커밋에 대한 포인터이며, 개발자가 명확한 커밋 기록을 유지하면서 기능이나 버그 수정을 독립적으로 작업할 수 있도록 해줍니다. 또한 이 장에서는 변경 사항을 통합하기 위해 브랜치를 병합하는 것의 중요성, 병합 충돌 가능성, 저장소를 정리하기 위해 브랜치를 효과적으로 관리해야 할 필요성을 강조합니다.",
                // Spanish
                "Español": "En este capítulo se analiza el concepto de ramificación en Git, haciendo hincapié en su capacidad para facilitar el desarrollo paralelo de múltiples tareas sin interferencias. Se explica que las ramas son indicadores de confirmaciones, lo que permite a los desarrolladores trabajar de forma independiente en funciones o correcciones de errores, manteniendo al mismo tiempo un historial de confirmaciones claro. El capítulo también destaca la importancia de fusionar ramas para integrar cambios, la posibilidad de que se produzcan conflictos de fusión y la necesidad de gestionar las ramas de forma eficaz para mantener el repositorio organizado.",
                // Hindi
                "हिंदी": "यह अध्याय Git में ब्रांचिंग की अवधारणा पर चर्चा करता है, जिसमें बिना किसी व्यवधान के कई कार्यों पर समानांतर विकास को सुविधाजनक बनाने की इसकी क्षमता पर जोर दिया गया है। यह बताता है कि शाखाएँ कमिट्स के लिए पॉइंटर्स हैं, जो डेवलपर्स को स्पष्ट कमिट इतिहास बनाए रखते हुए सुविधाओं या बग फिक्स पर स्वतंत्र रूप से काम करने की अनुमति देती हैं। अध्याय परिवर्तनों को एकीकृत करने के लिए शाखाओं को मर्ज करने के महत्व, मर्ज संघर्षों की संभावना और रिपॉजिटरी को व्यवस्थित रखने के लिए शाखाओं को प्रभावी ढंग से प्रबंधित करने की आवश्यकता पर भी प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo discute o conceito de ramificação no Git, enfatizando a sua capacidade de facilitar o desenvolvimento paralelo em múltiplas tarefas sem interferência. Explica que as branches são indicadores para commits, permitindo que os programadores trabalhem de forma independente em funcionalidades ou correções de bugs, mantendo um histórico de commits claro. O capítulo destaca também a importância da fusão de ramos para integrar alterações, o potencial para conflitos de fusão e a necessidade de gerir ramos de forma eficaz para manter o repositório organizado.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি গিট-এ শাখার ধারণা নিয়ে আলোচনা করে, হস্তক্ষেপ ছাড়াই একাধিক কাজের সমান্তরাল বিকাশের সুবিধার ক্ষমতার উপর জোর দেয়। এটি ব্যাখ্যা করে যে শাখাগুলি কমিটের জন্য নির্দেশক, যা বিকাশকারীদের একটি স্পষ্ট প্রতিশ্রুতি ইতিহাস বজায় রেখে বৈশিষ্ট্য বা বাগ ফিক্সগুলিতে স্বাধীনভাবে কাজ করার অনুমতি দেয়। অধ্যায়টি পরিবর্তনগুলিকে সংহত করার জন্য শাখাগুলিকে একীভূত করার গুরুত্ব, একত্রীকরণের দ্বন্দ্বের সম্ভাবনা এবং সংগ্রহস্থলকে সংগঠিত রাখার জন্য কার্যকরভাবে শাখাগুলি পরিচালনা করার প্রয়োজনীয়তা তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يناقش هذا الفصل مفهوم التفرع في Git، مع التركيز على قدرته على تسهيل التطوير المتوازي لمهام متعددة دون تدخل. ويوضح أن الفروع هي مؤشرات للالتزامات، مما يسمح للمطورين بالعمل بشكل مستقل على الميزات أو إصلاح الأخطاء مع الحفاظ على سجل التزام واضح. ويسلط الفصل الضوء أيضًا على أهمية دمج الفروع لدمج التغييرات، وإمكانية حدوث تعارضات في الدمج، والحاجة إلى إدارة الفروع بشكل فعال للحفاظ على تنظيم المستودع.",
                // Persian
                "فارسی": "این فصل مفهوم انشعاب در Git را مورد بحث قرار می دهد و بر توانایی آن برای تسهیل توسعه موازی در چندین کار بدون تداخل تأکید می کند. توضیح می‌دهد که شاخه‌ها اشاره‌گرهایی به commit هستند و به توسعه‌دهندگان این امکان را می‌دهند که به طور مستقل روی ویژگی‌ها یا رفع اشکال کار کنند و در عین حال یک تاریخچه commit واضح را حفظ کنند. این فصل همچنین بر اهمیت ادغام شعب برای ادغام تغییرات، پتانسیل تضادهای ادغام، و نیاز به مدیریت موثر شعب برای سازماندهی مخزن تاکید می کند.",
            },
        },
        // 3
        {
            "ChapterName": "Looking Around: Investigating Your Git Repository",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on exploring and visualizing your Git repository, emphasizing the importance of commit history and the use of the command to track changes. It introduces the command for comparing changes between the working directory, index, and different branches or commits. The chapter also highlights the need to understand the output format and legends to effectively analyze the differences in your repository's history.",
                // German
                "Deutsch": "In diesem Kapitel geht es darum, Ihr Git-Repository zu erkunden und zu visualisieren. Dabei wird die Bedeutung des Commit-Verlaufs und die Verwendung des Befehls zum Nachverfolgen von Änderungen hervorgehoben. Es stellt den Befehl zum Vergleichen von Änderungen zwischen dem Arbeitsverzeichnis, dem Index und verschiedenen Zweigen oder Commits vor. Das Kapitel betont auch die Notwendigkeit, das Ausgabeformat und die Legenden zu verstehen, um die Unterschiede im Verlauf Ihres Repositorys effektiv analysieren zu können.",
                // Chinese
                "中国人": "本章重点介绍如何探索和可视化您的 Git 存储库，强调提交历史记录的重要性以及使用命令来跟踪更改。它介绍了用于比较工作目录、索引和不同分支或提交之间的更改的命令。本章还强调了了解输出格式和图例的必要性，以便有效地分析存储库历史记录中的差异。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется исследованию и визуализации вашего репозитория Git, подчеркивая важность истории коммитов и использования команды для отслеживания изменений. В ней представлена ​​команда для сравнения изменений между рабочим каталогом, индексом и различными ветвями или коммитами. В главе также подчеркивается необходимость понимания выходного формата и легенд для эффективного анализа различий в истории вашего репозитория.",
                // French
                "Français": "Ce chapitre se concentre sur l'exploration et la visualisation de votre dépôt Git, en soulignant l'importance de l'historique des commits et l'utilisation de la commande pour suivre les modifications. Il présente la commande permettant de comparer les modifications entre le répertoire de travail, l'index et les différentes branches ou commits. Le chapitre souligne également la nécessité de comprendre le format de sortie et les légendes pour analyser efficacement les différences dans l'historique de votre dépôt.",
                // Japanese
                "日本語": "この章では、Git リポジトリの調査と視覚化に焦点を当て、コミット履歴の重要性と変更を追跡するためのコマンドの使用を強調します。作業ディレクトリ、インデックス、および異なるブランチまたはコミット間の変更を比較するためのコマンドを紹介します。また、この章では、リポジトリの履歴の違いを効果的に分析するために、出力形式と凡例を理解する必要性についても強調します。",
                // Korean
                "한국인": "이 장에서는 Git 저장소를 탐색하고 시각화하는 데 중점을 두고 커밋 기록의 중요성과 변경 사항을 추적하는 명령의 사용을 강조합니다. 작업 디렉토리, 인덱스 및 다른 브랜치 또는 커밋 간의 변경 사항을 비교하는 명령을 소개합니다. 또한 저장소 기록의 차이점을 효과적으로 분석하기 위해 출력 형식과 범례를 이해해야 할 필요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo se centra en explorar y visualizar su repositorio Git, haciendo hincapié en la importancia del historial de confirmaciones y el uso del comando para realizar un seguimiento de los cambios. Presenta el comando para comparar los cambios entre el directorio de trabajo, el índice y las diferentes ramas o confirmaciones. El capítulo también destaca la necesidad de comprender el formato de salida y las leyendas para analizar de manera eficaz las diferencias en el historial de su repositorio.",
                // Hindi
                "हिंदी": "यह अध्याय आपके Git रिपॉजिटरी को एक्सप्लोर करने और विज़ुअलाइज़ करने पर केंद्रित है, जिसमें कमिट इतिहास के महत्व और परिवर्तनों को ट्रैक करने के लिए कमांड के उपयोग पर ज़ोर दिया गया है। यह वर्किंग डायरेक्टरी, इंडेक्स और विभिन्न शाखाओं या कमिट के बीच परिवर्तनों की तुलना करने के लिए कमांड का परिचय देता है। अध्याय आपके रिपॉजिटरी के इतिहास में अंतरों का प्रभावी ढंग से विश्लेषण करने के लिए आउटपुट फ़ॉर्मेट और लेजेंड को समझने की आवश्यकता पर भी प्रकाश डालता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na exploração e visualização do seu repositório Git, enfatizando a importância do histórico de commits e a utilização do comando para rastrear alterações. Apresenta o comando para comparar alterações entre o diretório de trabalho, o índice e diferentes branches ou commits. O capítulo destaca também a necessidade de compreender o formato de saída e as legendas para analisar eficazmente as diferenças no histórico do seu repositório.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি আপনার গিট রিপোজিটরি অন্বেষণ এবং ভিজ্যুয়ালাইজ করার উপর ফোকাস করে, কমিট ইতিহাসের গুরুত্ব এবং পরিবর্তনগুলি ট্র্যাক করতে কমান্ডের ব্যবহারের উপর জোর দেয়। এটি কার্যকরী ডিরেক্টরি, সূচক এবং বিভিন্ন শাখা বা কমিটের মধ্যে পরিবর্তনের তুলনা করার জন্য কমান্ড প্রবর্তন করে। অধ্যায়টি আপনার সংগ্রহস্থলের ইতিহাসের পার্থক্যগুলিকে কার্যকরভাবে বিশ্লেষণ করার জন্য আউটপুট বিন্যাস এবং কিংবদন্তিগুলি বোঝার প্রয়োজনীয়তাও তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على استكشاف وتصور مستودع Git الخاص بك، مع التأكيد على أهمية سجل الالتزامات واستخدام الأمر لتتبع التغييرات. ويقدم الأمر لمقارنة التغييرات بين دليل العمل والفهرس والفروع أو الالتزامات المختلفة. ويسلط الفصل الضوء أيضًا على الحاجة إلى فهم تنسيق الإخراج والأساطير لتحليل الاختلافات في سجل المستودع الخاص بك بشكل فعال.",
                // Persian
                "فارسی": "این فصل بر کاوش و تجسم مخزن Git شما تمرکز دارد و بر اهمیت تاریخچه ارتکاب و استفاده از دستور برای ردیابی تغییرات تاکید می کند. دستوری را برای مقایسه تغییرات بین دایرکتوری کاری، ایندکس و شاخه ها یا commit های مختلف معرفی می کند. این فصل همچنین نیاز به درک فرمت خروجی و افسانه ها را برای تجزیه و تحلیل موثر تفاوت ها در تاریخچه مخزن شما برجسته می کند.",
            },
        },
        // 4
        {
            "ChapterName": "Undoing: Fixing Your Mistakes",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on the concept of undoing mistakes in Git, highlighting the various commands available for reverting changes. It explains how can be used in different modes to manage changes in the working directory and index, while allows users to negate changes without altering commit history. The chapter also discusses the significance of HEAD in tracking the current commit and provides insights into branch management, including renaming branches and editing commit messages, emphasizing the flexibility and power of version control systems in correcting errors.",
                // German
                "Deutsch": "Dieses Kapitel konzentriert sich auf das Konzept des Rückgängigmachens von Fehlern in Git und hebt die verschiedenen verfügbaren Befehle zum Rückgängigmachen von Änderungen hervor. Es erklärt, wie es in verschiedenen Modi verwendet werden kann, um Änderungen im Arbeitsverzeichnis und Index zu verwalten, während es Benutzern ermöglicht, Änderungen rückgängig zu machen, ohne den Commit-Verlauf zu ändern. Das Kapitel erörtert auch die Bedeutung von HEAD bei der Verfolgung des aktuellen Commits und bietet Einblicke in die Zweigverwaltung, einschließlich der Umbenennung von Zweigen und der Bearbeitung von Commit-Nachrichten, wobei die Flexibilität und Leistungsfähigkeit von Versionskontrollsystemen bei der Korrektur von Fehlern hervorgehoben wird.",
                // Chinese
                "中国人": "本章重点介绍 Git 中撤销错误的概念，重点介绍可用于恢复更改的各种命令。它解释了如何在不同模式下使用它来管理工作目录和索引中的更改，同时允许用户在不更改提交历史记录的情况下否定更改。本章还讨论了 HEAD 在跟踪当前提交方面的重要性，并提供了对分支管理的见解，包括重命名分支和编辑提交消息，强调版本控制系统在纠正错误方面的灵活性和强大功能。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется концепции отмены ошибок в Git, подчеркивая различные команды, доступные для отмены изменений. В ней объясняется, как можно использовать в разных режимах для управления изменениями в рабочем каталоге и индексе, при этом позволяя пользователям отменять изменения, не изменяя историю коммитов. В главе также обсуждается значение HEAD в отслеживании текущего коммита и даются сведения об управлении ветвями, включая переименование ветвей и редактирование сообщений коммитов, подчеркивая гибкость и мощь систем контроля версий в исправлении ошибок.",
                // French
                "Français": "Ce chapitre se concentre sur le concept d'annulation des erreurs dans Git, en mettant en évidence les différentes commandes disponibles pour annuler les modifications. Il explique comment peut être utilisé dans différents modes pour gérer les modifications dans le répertoire de travail et l'index, tout en permettant aux utilisateurs d'annuler les modifications sans modifier l'historique des validations. Le chapitre aborde également l'importance de HEAD dans le suivi de la validation en cours et fournit des informations sur la gestion des branches, notamment le changement de nom des branches et la modification des messages de validation, en soulignant la flexibilité et la puissance des systèmes de contrôle de version dans la correction des erreurs.",
                // Japanese
                "日本語": "この章では、Git でミスを元に戻すという概念に焦点を当て、変更を元に戻すために使用できるさまざまなコマンドについて説明します。 をさまざまなモードで使用して作業ディレクトリとインデックスの変更を管理する方法と、コミット履歴を変更せずに変更を無効にできる方法について説明します。 また、この章では、現在のコミットを追跡する際の HEAD の重要性についても説明し、ブランチ名の変更やコミット メッセージの編集などのブランチ管理に関する洞察を提供し、エラーを修正する際のバージョン管理システムの柔軟性とパワーを強調します。",
                // Korean
                "한국인": "이 장에서는 Git에서 실수를 취소하는 개념에 초점을 맞추고, 변경 사항을 되돌리는 데 사용할 수 있는 다양한 명령을 강조합니다. 작업 디렉토리와 인덱스에서 변경 사항을 관리하는 데 다양한 모드로 사용할 수 있는 방법을 설명하면서, 사용자가 커밋 기록을 변경하지 않고도 변경 사항을 무효화할 수 있도록 합니다. 또한 이 장에서는 현재 커밋을 추적하는 데 있어 HEAD의 중요성에 대해 논의하고, 브랜치 이름 변경 및 커밋 메시지 편집을 포함한 브랜치 관리에 대한 통찰력을 제공하며, 오류를 수정하는 데 있어 버전 제어 시스템의 유연성과 힘을 강조합니다.",
                // Spanish
                "Español": "Este capítulo se centra en el concepto de deshacer errores en Git, destacando los distintos comandos disponibles para revertir los cambios. Explica cómo se pueden utilizar en diferentes modos para gestionar los cambios en el directorio de trabajo y el índice, al tiempo que permite a los usuarios negar los cambios sin alterar el historial de confirmaciones. El capítulo también analiza la importancia de HEAD en el seguimiento de la confirmación actual y proporciona información sobre la gestión de ramas, incluido el cambio de nombre de las ramas y la edición de los mensajes de confirmación, haciendo hincapié en la flexibilidad y el poder de los sistemas de control de versiones para corregir errores.",
                // Hindi
                "हिंदी": "यह अध्याय Git में गलतियों को पूर्ववत करने की अवधारणा पर केंद्रित है, जिसमें परिवर्तनों को पूर्ववत करने के लिए उपलब्ध विभिन्न कमांड पर प्रकाश डाला गया है। यह बताता है कि वर्किंग डायरेक्टरी और इंडेक्स में परिवर्तनों को प्रबंधित करने के लिए विभिन्न मोड में इसका उपयोग कैसे किया जा सकता है, जबकि उपयोगकर्ताओं को कमिट इतिहास में बदलाव किए बिना परिवर्तनों को नकारने की अनुमति देता है। अध्याय वर्तमान कमिट को ट्रैक करने में HEAD के महत्व पर भी चर्चा करता है और ब्रांच प्रबंधन में अंतर्दृष्टि प्रदान करता है, जिसमें शाखाओं का नाम बदलना और कमिट संदेशों को संपादित करना शामिल है, त्रुटियों को ठीक करने में संस्करण नियंत्रण प्रणालियों की लचीलापन और शक्ति पर जोर दिया गया है।",
                // Portuguese
                "Português": "Este capítulo centra-se no conceito de desfazer erros no Git, destacando os vários comandos disponíveis para reverter alterações. Explica como pode ser utilizado em diferentes modos para gerir alterações no diretório de trabalho e no índice, ao mesmo tempo que permite aos utilizadores negar alterações sem alterar o histórico de commits. O capítulo também discute a importância do HEAD no rastreio do commit atual e fornece informações sobre a gestão de filiais, incluindo a renomeação de filiais e a edição de mensagens de commit, enfatizando a flexibilidade e o poder dos sistemas de controlo de versões na correção de erros.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি গিট-এ ভুলগুলি পূর্বাবস্থায় ফিরিয়ে আনার ধারণার উপর দৃষ্টি নিবদ্ধ করে, পরিবর্তনগুলি ফিরিয়ে আনার জন্য উপলব্ধ বিভিন্ন কমান্ড হাইলাইট করে। এটি ব্যাখ্যা করে কিভাবে বিভিন্ন মোডে কাজ করা ডিরেক্টরি এবং সূচকে পরিবর্তনগুলি পরিচালনা করতে ব্যবহার করা যেতে পারে, যখন ব্যবহারকারীদের প্রতিশ্রুতি ইতিহাস পরিবর্তন না করে পরিবর্তনগুলিকে অস্বীকার করতে দেয়। অধ্যায়টি বর্তমান প্রতিশ্রুতি ট্র্যাক করার ক্ষেত্রে HEAD-এর তাৎপর্য নিয়েও আলোচনা করে এবং শাখা ব্যবস্থাপনার অন্তর্দৃষ্টি প্রদান করে, যার মধ্যে শাখার নাম পরিবর্তন করা এবং প্রতিশ্রুতি বার্তা সম্পাদনা করা, ত্রুটি সংশোধনে সংস্করণ নিয়ন্ত্রণ ব্যবস্থার নমনীয়তা এবং শক্তির উপর জোর দেওয়া।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على مفهوم التراجع عن الأخطاء في Git، مع تسليط الضوء على الأوامر المختلفة المتاحة لعكس التغييرات. ويشرح كيف يمكن استخدامها في أوضاع مختلفة لإدارة التغييرات في دليل العمل والفهرس، بينما يسمح للمستخدمين بإلغاء التغييرات دون تغيير تاريخ الالتزام. ويناقش الفصل أيضًا أهمية HEAD في تتبع الالتزام الحالي ويوفر رؤى حول إدارة الفروع، بما في ذلك إعادة تسمية الفروع وتحرير رسائل الالتزام، مع التأكيد على مرونة وقوة أنظمة التحكم في الإصدار في تصحيح الأخطاء.",
                // Persian
                "فارسی": "این فصل بر مفهوم خنثی سازی اشتباهات در Git تمرکز دارد و دستورات مختلف موجود برای برگرداندن تغییرات را برجسته می کند. توضیح می‌دهد که چگونه می‌توان در حالت‌های مختلف برای مدیریت تغییرات در فهرست کاری و فهرست استفاده کرد، در حالی که به کاربران اجازه می‌دهد تا تغییرات را بدون تغییر تاریخچه ارتکاب رد کنند. این فصل همچنین اهمیت HEAD را در ردیابی تعهد جاری مورد بحث قرار می‌دهد و بینش‌هایی در مورد مدیریت شعب ارائه می‌دهد، از جمله تغییر نام شاخه‌ها و ویرایش پیام‌های commit، با تاکید بر انعطاف‌پذیری و قدرت سیستم‌های کنترل نسخه در تصحیح خطاها.",
            },
        },
        // 5
        {
            "ChapterName": "Collaborating with Git - Part I: Remote Work",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on collaborating with Git, emphasizing the importance of forking and cloning repositories to create personal copies for modification. It explains the process of pushing local commits to a remote repository, making them public, and highlights the distinction between private and public commits. The chapter also addresses handling merge conflicts, the role of pull requests in code review, and the need for synchronization between local and remote branches, setting the stage for more complex collaboration in future chapters.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Zusammenarbeit mit Git. Dabei wird die Bedeutung des Forkens und Klonens von Repositories betont, um persönliche Kopien für Änderungen zu erstellen. Es erklärt den Vorgang, lokale Commits in ein Remote-Repository zu pushen und sie öffentlich zu machen, und hebt den Unterschied zwischen privaten und öffentlichen Commits hervor. Das Kapitel befasst sich auch mit dem Umgang mit Merge-Konflikten, der Rolle von Pull Requests bei der Codeüberprüfung und der Notwendigkeit der Synchronisierung zwischen lokalen und Remote-Zweigen und bereitet so die Grundlage für eine komplexere Zusammenarbeit in späteren Kapiteln.",
                // Chinese
                "中国人": "本章重点介绍如何使用 Git 进行协作，强调了分叉和克隆存储库以创建个人副本进行修改的重要性。它解释了将本地提交推送到远程存储库、将其公开的过程，并强调了私有提交和公共提交之间的区别。本章还讨论了如何处理合并冲突、拉取请求在代码审查中的作用以及本地和远程分支之间同步的必要性，为未来章节中更复杂的协作奠定了基础。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется сотрудничеству с Git, подчеркивая важность разветвления и клонирования репозиториев для создания личных копий для модификации. В ней объясняется процесс отправки локальных коммитов в удаленный репозиторий, делая их публичными, и подчеркивается различие между частными и публичными коммитами. В главе также рассматривается обработка конфликтов слияния, роль запросов на извлечение в обзоре кода и необходимость синхронизации между локальными и удаленными ветками, что закладывает основу для более сложного сотрудничества в будущих главах.",
                // French
                "Français": "Ce chapitre se concentre sur la collaboration avec Git, en soulignant l'importance de dupliquer et de cloner des dépôts pour créer des copies personnelles à modifier. Il explique le processus de transfert de commits locaux vers un dépôt distant, de leur publication publique, et met en évidence la distinction entre les commits privés et publics. Le chapitre aborde également la gestion des conflits de fusion, le rôle des requêtes d'extraction dans la révision du code et la nécessité d'une synchronisation entre les branches locales et distantes, ouvrant la voie à une collaboration plus complexe dans les chapitres suivants.",
                // Japanese
                "日本語": "この章では、Git を使用したコラボレーションに焦点を当て、変更用の個人用コピーを作成するためにリポジトリをフォークおよびクローンすることの重要性を強調しています。ローカル コミットをリモート リポジトリにプッシュして公開するプロセスについて説明し、プライベート コミットとパブリック コミットの違いを強調しています。また、この章では、マージ競合の処理、コード レビューにおけるプル リクエストの役割、ローカル ブランチとリモート ブランチ間の同期の必要性についても取り上げ、今後の章でより複雑なコラボレーションを行うための土台を整えています。",
                // Korean
                "한국인": "이 장에서는 Git과의 협업에 초점을 맞추고, 수정을 위한 개인 사본을 만들기 위해 저장소를 포킹하고 복제하는 것의 중요성을 강조합니다. 로컬 커밋을 원격 저장소에 푸시하고 공개하는 프로세스를 설명하고, 비공개 커밋과 공개 커밋의 차이점을 강조합니다. 또한 이 장에서는 병합 충돌 처리, 코드 검토에서 풀 리퀘스트의 역할, 로컬 및 원격 브랜치 간의 동기화 필요성에 대해 다루며, 향후 장에서 더 복잡한 협업을 위한 토대를 마련합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la colaboración con Git, haciendo hincapié en la importancia de bifurcar y clonar repositorios para crear copias personales para su modificación. Explica el proceso de enviar confirmaciones locales a un repositorio remoto, haciéndolos públicos, y destaca la distinción entre confirmaciones privadas y públicas. El capítulo también aborda el manejo de conflictos de fusión, el papel de las solicitudes de incorporación de cambios en la revisión de código y la necesidad de sincronización entre ramas locales y remotas, lo que prepara el terreno para una colaboración más compleja en capítulos futuros.",
                // Hindi
                "हिंदी": "यह अध्याय Git के साथ सहयोग करने पर केंद्रित है, संशोधन के लिए व्यक्तिगत प्रतियाँ बनाने के लिए रिपॉजिटरी को फ़ॉर्किंग और क्लोन करने के महत्व पर ज़ोर देता है। यह स्थानीय कमिट को रिमोट रिपॉजिटरी में पुश करने, उन्हें सार्वजनिक बनाने की प्रक्रिया को समझाता है, और निजी और सार्वजनिक कमिट के बीच अंतर को उजागर करता है। अध्याय मर्ज संघर्षों को संभालने, कोड समीक्षा में पुल अनुरोधों की भूमिका और स्थानीय और दूरस्थ शाखाओं के बीच समन्वय की आवश्यकता को भी संबोधित करता है, जो भविष्य के अध्यायों में अधिक जटिल सहयोग के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "Este capítulo centra-se na colaboração com o Git, enfatizando a importância de bifurcar e clonar repositórios para criar cópias pessoais para modificação. Explica o processo de envio de commits locais para um repositório remoto, tornando-os públicos, e destaca a distinção entre commits privados e públicos. O capítulo aborda também o tratamento de conflitos de fusão, a função dos pull requests na revisão de código e a necessidade de sincronização entre filiais locais e remotas, preparando o terreno para uma colaboração mais complexa em capítulos futuros.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি গিট-এর সাথে সহযোগিতা করার উপর দৃষ্টি নিবদ্ধ করে, পরিবর্তনের জন্য ব্যক্তিগত কপি তৈরি করতে কাঁটাচামচ এবং ক্লোনিং সংগ্রহস্থলের গুরুত্বের উপর জোর দেয়। এটি স্থানীয় প্রতিশ্রুতিগুলিকে দূরবর্তী সংগ্রহস্থলে ঠেলে দেওয়ার প্রক্রিয়া ব্যাখ্যা করে, সেগুলিকে সর্বজনীন করে তোলে এবং ব্যক্তিগত এবং পাবলিক কমিটের মধ্যে পার্থক্য তুলে ধরে। অধ্যায়টি একত্রীকরণের দ্বন্দ্ব পরিচালনা, কোড পর্যালোচনায় পুল অনুরোধের ভূমিকা এবং স্থানীয় এবং দূরবর্তী শাখাগুলির মধ্যে সমন্বয়ের প্রয়োজনীয়তাকেও সম্বোধন করে, ভবিষ্যতের অধ্যায়ে আরও জটিল সহযোগিতার মঞ্চ তৈরি করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على التعاون مع Git، مع التأكيد على أهمية تقسيم واستنساخ المستودعات لإنشاء نسخ شخصية للتعديل. ويشرح عملية دفع الالتزامات المحلية إلى مستودع بعيد، وجعلها عامة، ويسلط الضوء على التمييز بين الالتزامات الخاصة والعامة. ويتناول الفصل أيضًا التعامل مع تعارضات الدمج، ودور طلبات السحب في مراجعة التعليمات البرمجية، والحاجة إلى المزامنة بين الفروع المحلية والبعيدة، مما يمهد الطريق لمزيد من التعاون المعقد في الفصول المستقبلية.",
                // Persian
                "فارسی": "این فصل بر همکاری با Git تمرکز می‌کند و بر اهمیت فورک کردن و شبیه‌سازی مخازن برای ایجاد نسخه‌های شخصی برای اصلاح تأکید می‌کند. این فرآیند انتقال تعهدات محلی به یک مخزن راه دور، عمومی کردن آنها را توضیح می‌دهد و تمایز بین تعهدات خصوصی و عمومی را برجسته می‌کند. این فصل همچنین به رسیدگی به تضادهای ادغام، نقش درخواست های کشش در بررسی کد و نیاز به همگام سازی بین شاخه های محلی و راه دور می پردازد و زمینه را برای همکاری های پیچیده تر در فصل های آینده فراهم می کند.",
            },
        },
        // 6
        {
            "ChapterName": "Collaborating with Git - Part II: Go, Team, Go!",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on collaboration using Git, emphasizing the importance of remote tracking branches and the benefits of working in parallel with a partner. It encourages readers to clone a repository and create feature branches based on the latest commits from the integration branch, allowing for efficient teamwork without merge conflicts. The chapter illustrates the collaborative process through a scenario involving two contributors, Addison and Sangita, who manage their work simultaneously while integrating changes when ready.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Zusammenarbeit mit Git. Dabei wird die Bedeutung der Remote-Verfolgung von Zweigen und die Vorteile der parallelen Arbeit mit einem Partner hervorgehoben. Es ermutigt die Leser, ein Repository zu klonen und Feature-Zweige basierend auf den neuesten Commits des Integrationszweigs zu erstellen, was eine effiziente Teamarbeit ohne Zusammenführungskonflikte ermöglicht. Das Kapitel veranschaulicht den kollaborativen Prozess anhand eines Szenarios mit zwei Mitwirkenden, Addison und Sangita, die ihre Arbeit gleichzeitig verwalten und Änderungen integrieren, wenn sie fertig sind.",
                // Chinese
                "中国人": "本章重点介绍如何使用 Git 进行协作，强调远程跟踪分支的重要性以及与合作伙伴并行工作的好处。它鼓励读者克隆存储库并根据集成分支的最新提交创建功能分支，从而实现高效的团队合作而不会发生合并冲突。本章通过涉及两个贡献者 Addison 和 Sangita 的场景说明了协作过程，他们同时管理工作并在准备就绪时集成更改。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется совместной работе с использованием Git, подчеркивая важность удаленного отслеживания веток и преимущества параллельной работы с партнером. Она призывает читателей клонировать репозиторий и создавать ветки функций на основе последних коммитов из ветки интеграции, что позволяет эффективно работать в команде без конфликтов слияния. В главе иллюстрируется совместный процесс с помощью сценария с участием двух участников, Эддисона и Сангиты, которые одновременно управляют своей работой, интегрируя изменения по мере готовности.",
                // French
                "Français": "Ce chapitre se concentre sur la collaboration à l'aide de Git, en soulignant l'importance du suivi à distance des branches et les avantages du travail en parallèle avec un partenaire. Il encourage les lecteurs à cloner un référentiel et à créer des branches de fonctionnalités basées sur les derniers commits de la branche d'intégration, ce qui permet un travail d'équipe efficace sans conflits de fusion. Le chapitre illustre le processus collaboratif à travers un scénario impliquant deux contributeurs, Addison et Sangita, qui gèrent leur travail simultanément tout en intégrant les modifications lorsqu'elles sont prêtes.",
                // Japanese
                "日本語": "この章では、Git を使用したコラボレーションに焦点を当て、リモート トラッキング ブランチの重要性とパートナーと並行して作業する利点を強調しています。リポジトリをクローンし、統合ブランチからの最新のコミットに基づいて機能ブランチを作成することを推奨します。これにより、マージの競合のない効率的なチームワークが可能になります。この章では、2 人の貢献者、Addison と Sangita が同時に作業を管理しながら、準備ができたら変更を統合するというシナリオを通じて、コラボレーション プロセスを説明します。",
                // Korean
                "한국인": "이 장에서는 Git을 사용한 협업에 초점을 맞추고 원격 추적 브랜치의 중요성과 파트너와 병렬로 작업하는 것의 이점을 강조합니다. 독자들이 리포지토리를 복제하고 통합 브랜치의 최신 커밋을 기반으로 기능 브랜치를 만들어 병합 충돌 없이 효율적인 팀워크를 이루도록 권장합니다. 이 장에서는 Addison과 Sangita라는 두 기여자가 준비가 되면 변경 사항을 통합하는 동시에 작업을 관리하는 시나리오를 통해 협업 프로세스를 설명합니다.",
                // Spanish
                "Español": "Este capítulo se centra en la colaboración mediante Git, haciendo hincapié en la importancia del seguimiento remoto de las ramas y los beneficios de trabajar en paralelo con un socio. Anima a los lectores a clonar un repositorio y crear ramas de características basadas en las últimas confirmaciones de la rama de integración, lo que permite un trabajo en equipo eficiente sin conflictos de fusión. El capítulo ilustra el proceso colaborativo a través de un escenario que involucra a dos colaboradores, Addison y Sangita, que gestionan su trabajo simultáneamente mientras integran los cambios cuando están listos.",
                // Hindi
                "हिंदी": "यह अध्याय Git का उपयोग करके सहयोग पर केंद्रित है, दूरस्थ ट्रैकिंग शाखाओं के महत्व और भागीदार के साथ समानांतर में काम करने के लाभों पर जोर देता है। यह पाठकों को एक रिपॉजिटरी को क्लोन करने और एकीकरण शाखा से नवीनतम प्रतिबद्धताओं के आधार पर फीचर शाखाएँ बनाने के लिए प्रोत्साहित करता है, जिससे मर्ज संघर्षों के बिना कुशल टीमवर्क की अनुमति मिलती है। यह अध्याय दो योगदानकर्ताओं, एडिसन और संगीता को शामिल करते हुए एक परिदृश्य के माध्यम से सहयोगी प्रक्रिया को दर्शाता है, जो तैयार होने पर परिवर्तनों को एकीकृत करते हुए एक साथ अपने काम का प्रबंधन करते हैं।",
                // Portuguese
                "Português": "Este capítulo centra-se na colaboração utilizando o Git, enfatizando a importância do rastreio remoto de filiais e os benefícios de trabalhar em paralelo com um parceiro. Incentiva os leitores a clonar um repositório e a criar ramificações de recursos com base nos commits mais recentes da ramificação de integração, permitindo um trabalho de equipa eficiente sem conflitos de fusão. O capítulo ilustra o processo colaborativo através de um cenário que envolve dois colaboradores, Addison e Sangita, que gerem o seu trabalho em simultâneo enquanto integram as mudanças quando estão prontos.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি গিট ব্যবহার করে সহযোগিতার উপর ফোকাস করে, দূরবর্তী ট্র্যাকিং শাখার গুরুত্ব এবং অংশীদারের সাথে সমান্তরালভাবে কাজ করার সুবিধাগুলির উপর জোর দেয়। এটি পাঠকদের একটি সংগ্রহস্থল ক্লোন করতে এবং ইন্টিগ্রেশন শাখার সর্বশেষ প্রতিশ্রুতির উপর ভিত্তি করে বৈশিষ্ট্য শাখা তৈরি করতে উত্সাহিত করে, যা মার্জ দ্বন্দ্ব ছাড়াই দক্ষ টিমওয়ার্কের অনুমতি দেয়। অধ্যায়টি দুটি অবদানকারী, অ্যাডিসন এবং সঙ্গীতাকে জড়িত একটি দৃশ্যের মাধ্যমে সহযোগিতামূলক প্রক্রিয়াকে চিত্রিত করে, যারা প্রস্তুত থাকাকালীন পরিবর্তনগুলিকে একীভূত করার সময় একই সাথে তাদের কাজ পরিচালনা করে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على التعاون باستخدام Git، مع التأكيد على أهمية فروع التتبع عن بعد وفوائد العمل بالتوازي مع شريك. ويشجع القراء على استنساخ مستودع وإنشاء فروع مميزة بناءً على أحدث التغييرات من فرع التكامل، مما يسمح بالعمل الجماعي الفعّال دون تعارضات الدمج. ويوضح الفصل العملية التعاونية من خلال سيناريو يتضمن مساهمين، أديسون وسانجيتا، يديران عملهما في وقت واحد أثناء دمج التغييرات عندما تكون جاهزة.",
                // Persian
                "فارسی": "این فصل بر روی همکاری با استفاده از Git تمرکز دارد و بر اهمیت شاخه های ردیابی از راه دور و مزایای کار موازی با یک شریک تاکید می کند. این خوانندگان را تشویق می‌کند تا یک مخزن را شبیه‌سازی کنند و شاخه‌های ویژگی را بر اساس آخرین تعهدات شاخه ادغام ایجاد کنند، که امکان کار گروهی کارآمد را بدون تضاد ادغام فراهم می‌کند. این فصل روند مشارکتی را از طریق سناریویی شامل دو مشارکت کننده، آدیسون و سانگیتا، نشان می دهد که کار خود را به طور همزمان مدیریت می کنند و در صورت آماده بودن تغییرات را یکپارچه می کنند.",
            },
        },
        // 7
        {
            "ChapterName": "Searching Git Repositories: Git a Grep",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on the search capabilities of Git, enabling users to find specific text within files and track changes in commit history. It introduces commands like to identify who made changes to a file and when, as well as for searching through tracked files. The chapter also covers the use of flags such as in to locate commits that modified specific lines of text, and emphasizes the importance of working on branches to maintain commit integrity while navigating through the repository's history.",
                // German
                "Deutsch": "In diesem Kapitel geht es um die Suchfunktionen von Git, mit denen Benutzer bestimmten Text in Dateien finden und Änderungen im Commit-Verlauf verfolgen können. Es werden Befehle vorgestellt, mit denen festgestellt werden kann, wer wann Änderungen an einer Datei vorgenommen hat, sowie Befehle zum Durchsuchen verfolgter Dateien. Das Kapitel behandelt auch die Verwendung von Flags wie „in“, um Commits zu finden, die bestimmte Textzeilen geändert haben, und betont, wie wichtig es ist, an Zweigen zu arbeiten, um die Commit-Integrität bei der Navigation durch den Verlauf des Repositorys aufrechtzuerhalten.",
                // Chinese
                "中国人": "本章重点介绍 Git 的搜索功能，使用户能够在文件中查找特定文本并跟踪提交历史记录中的更改。它介绍了一些命令，例如识别谁在何时对文件进行了更改，以及搜索跟踪的文件。本章还介绍了如何使用 in 等标志来定位修改了特定文本行的提交，并强调了在浏览存储库历史记录时处理分支以保持提交完整性的重要性。",
                // Russian
                "Русский": "В этой главе рассматриваются возможности поиска Git, позволяющие пользователям находить определенный текст в файлах и отслеживать изменения в истории коммитов. В ней представлены такие команды, как определение того, кто и когда внес изменения в файл, а также поиск по отслеживаемым файлам. В главе также рассматривается использование флагов, таких как in, для поиска коммитов, которые изменили определенные строки текста, и подчеркивается важность работы с ветками для поддержания целостности коммитов при навигации по истории репозитория.",
                // French
                "Français": "Ce chapitre se concentre sur les capacités de recherche de Git, permettant aux utilisateurs de trouver du texte spécifique dans des fichiers et de suivre les modifications dans l'historique des commits. Il présente des commandes permettant d'identifier qui a apporté des modifications à un fichier et quand, ainsi que de rechercher dans les fichiers suivis. Le chapitre couvre également l'utilisation d'indicateurs tels que in pour localiser les commits qui ont modifié des lignes de texte spécifiques, et souligne l'importance de travailler sur les branches pour maintenir l'intégrité des commits tout en naviguant dans l'historique du référentiel.",
                // Japanese
                "日本語": "この章では、Git の検索機能に焦点を当て、ユーザーがファイル内の特定のテキストを検索したり、コミット履歴の変更を追跡したりできるようにします。また、追跡されたファイルを検索するためのコマンドや、誰がいつファイルを変更したかを識別するコマンドなどを紹介します。また、この章では、特定のテキスト行を変更したコミットを見つけるための in などのフラグの使用についても説明し、リポジトリの履歴をナビゲートしながらコミットの整合性を維持するためにブランチで作業することの重要性を強調します。",
                // Korean
                "한국인": "이 장에서는 Git의 검색 기능에 초점을 맞춰 사용자가 파일 내에서 특정 텍스트를 찾고 커밋 기록에서 변경 사항을 추적할 수 있도록 합니다. 누가 언제 파일을 변경했는지 식별하는 명령과 추적된 파일을 검색하는 명령을 소개합니다. 또한 in과 같은 플래그를 사용하여 특정 텍스트 줄을 수정한 커밋을 찾는 방법을 다루고, 저장소 기록을 탐색하는 동안 커밋 무결성을 유지하기 위해 브랜치에서 작업하는 것의 중요성을 강조합니다.",
                // Spanish
                "Español": "Este capítulo se centra en las capacidades de búsqueda de Git, que permiten a los usuarios encontrar texto específico dentro de los archivos y realizar un seguimiento de los cambios en el historial de confirmaciones. Presenta comandos como para identificar quién realizó cambios en un archivo y cuándo, así como para buscar en los archivos rastreados. El capítulo también cubre el uso de indicadores como in para localizar confirmaciones que modificaron líneas de texto específicas y enfatiza la importancia de trabajar en las ramas para mantener la integridad de las confirmaciones mientras se navega por el historial del repositorio.",
                // Hindi
                "हिंदी": "यह अध्याय Git की खोज क्षमताओं पर केंद्रित है, जो उपयोगकर्ताओं को फ़ाइलों के भीतर विशिष्ट पाठ खोजने और कमिट इतिहास में परिवर्तनों को ट्रैक करने में सक्षम बनाता है। यह उन कमांड का परिचय देता है जैसे कि यह पहचानना कि किसने और कब फ़ाइल में परिवर्तन किए, साथ ही ट्रैक की गई फ़ाइलों के माध्यम से खोज करना। अध्याय में फ्लैग के उपयोग को भी शामिल किया गया है जैसे कि टेक्स्ट की विशिष्ट पंक्तियों को संशोधित करने वाले कमिट का पता लगाना, और रिपॉजिटरी के इतिहास के माध्यम से नेविगेट करते समय कमिट अखंडता को बनाए रखने के लिए शाखाओं पर काम करने के महत्व पर जोर दिया गया है।",
                // Portuguese
                "Português": "Este capítulo centra-se nas capacidades de pesquisa do Git, permitindo aos utilizadores encontrar textos específicos em ficheiros e acompanhar as alterações no histórico de commits. Apresenta comandos como identificar quem fez alterações num ficheiro e quando, bem como pesquisar ficheiros rastreados. O capítulo aborda também a utilização de sinalizadores como in para localizar commits que modificaram linhas específicas de texto e enfatiza a importância de trabalhar em branches para manter a integridade do commit enquanto se navega pelo histórico do repositório.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি গিট-এর অনুসন্ধান ক্ষমতার উপর ফোকাস করে, ব্যবহারকারীদের ফাইলগুলির মধ্যে নির্দিষ্ট পাঠ্য খুঁজে পেতে এবং কমিট ইতিহাসে পরিবর্তনগুলি ট্র্যাক করতে সক্ষম করে। এটি কমান্ডগুলি প্রবর্তন করে যেমন একটি ফাইলে কে এবং কখন পরিবর্তন করেছে, সেইসাথে ট্র্যাক করা ফাইলগুলির মাধ্যমে অনুসন্ধান করার জন্য। অধ্যায়টি পতাকাগুলির ব্যবহারকেও কভার করে যেমন কমিটগুলি সনাক্ত করতে যা পাঠ্যের নির্দিষ্ট লাইনগুলিকে পরিবর্তিত করে, এবং সংগ্রহস্থলের ইতিহাসে নেভিগেট করার সময় অঙ্গীকারের অখণ্ডতা বজায় রাখার জন্য শাখাগুলিতে কাজ করার গুরুত্বের উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على إمكانيات البحث في Git، مما يتيح للمستخدمين العثور على نص معين داخل الملفات وتتبع التغييرات في سجل التغييرات. ويقدم أوامر مثل تحديد من أجرى تغييرات على ملف ومتى، بالإضافة إلى البحث عبر الملفات المتعقبة. ويغطي الفصل أيضًا استخدام العلامات مثل in لتحديد التغييرات التي عدلت أسطرًا معينة من النص، ويؤكد على أهمية العمل على الفروع للحفاظ على سلامة التغييرات أثناء التنقل عبر سجل المستودع.",
                // Persian
                "فارسی": "این فصل بر قابلیت‌های جستجوی Git تمرکز دارد و کاربران را قادر می‌سازد متن خاصی را در فایل‌ها پیدا کنند و تغییرات در تاریخچه commit را دنبال کنند. دستوراتی مانند تشخیص اینکه چه کسی و چه زمانی در یک فایل تغییراتی ایجاد کرده است و همچنین برای جستجو در میان فایل های ردیابی شده معرفی می کند. این فصل همچنین استفاده از پرچم‌هایی را پوشش می‌دهد، مثلاً برای تعیین محل تعهداتی که خطوط خاصی از متن را تغییر می‌دهند، و بر اهمیت کار بر روی شاخه‌ها برای حفظ یکپارچگی commit در حین پیمایش در تاریخچه مخزن تأکید می‌کند.",
            },
        },
        // 8
        {
            "ChapterName": "Making your life Easier with Git: #ProTips",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "This chapter focuses on enhancing the Git experience through configuration and best practices. It emphasizes the importance of customizing Git settings, creating command aliases for efficiency, and using to manage untracked files. The chapter also highlights the significance of writing meaningful commit messages and adopting clear branch naming conventions, while suggesting the use of graphical user interfaces to complement command-line operations for a more user-friendly workflow.",
                // German
                "Deutsch": "In diesem Kapitel geht es darum, das Git-Erlebnis durch Konfiguration und bewährte Methoden zu verbessern. Es betont, wie wichtig es ist, Git-Einstellungen anzupassen, Befehlsaliase für mehr Effizienz zu erstellen und nicht verfolgte Dateien zu verwalten. Das Kapitel betont auch, wie wichtig es ist, aussagekräftige Commit-Nachrichten zu schreiben und klare Konventionen für die Benennung von Zweigen zu übernehmen. Gleichzeitig wird die Verwendung grafischer Benutzeroberflächen als Ergänzung zu Befehlszeilenoperationen für einen benutzerfreundlicheren Workflow vorgeschlagen.",
                // Chinese
                "中国人": "本章重点介绍如何通过配置和最佳实践来增强 Git 体验。它强调了自定义 Git 设置、创建命令别名以提高效率以及使用来管理未跟踪文件的重要性。本章还强调了编写有意义的提交消息和采用清晰的分支命名约定的重要性，同时建议使用图形用户界面来补充命令行操作，以实现更用户友好的工作流程。",
                // Russian
                "Русский": "В этой главе основное внимание уделяется улучшению опыта Git посредством конфигурации и лучших практик. В ней подчеркивается важность настройки параметров Git, создания псевдонимов команд для эффективности и использования для управления неотслеживаемыми файлами. В главе также подчеркивается важность написания осмысленных сообщений о коммитах и ​​принятия четких соглашений об именовании ветвей, а также предлагается использовать графические пользовательские интерфейсы для дополнения операций командной строки для более удобного рабочего процесса.",
                // French
                "Français": "Ce chapitre se concentre sur l'amélioration de l'expérience Git grâce à la configuration et aux meilleures pratiques. Il souligne l'importance de la personnalisation des paramètres Git, de la création d'alias de commande pour plus d'efficacité et de l'utilisation pour gérer les fichiers non suivis. Le chapitre souligne également l'importance de rédiger des messages de validation significatifs et d'adopter des conventions de dénomination de branche claires, tout en suggérant l'utilisation d'interfaces utilisateur graphiques pour compléter les opérations de ligne de commande pour un flux de travail plus convivial.",
                // Japanese
                "日本語": "この章では、設定とベスト プラクティスを通じて Git エクスペリエンスを強化することに焦点を当てています。Git 設定のカスタマイズ、効率化のためのコマンド エイリアスの作成、追跡されていないファイルの管理に使用することの重要性を強調しています。また、意味のあるコミット メッセージを記述することと明確なブランチ命名規則を採用することの重要性を強調し、よりユーザー フレンドリなワークフローを実現するために、コマンドライン操作を補完するグラフィカル ユーザー インターフェイスの使用を提案しています。",
                // Korean
                "한국인": "이 장에서는 구성 및 모범 사례를 통해 Git 경험을 향상시키는 데 중점을 둡니다. Git 설정을 사용자 지정하고, 효율성을 위해 명령 별칭을 만들고, 추적되지 않은 파일을 관리하는 데 사용하는 것의 중요성을 강조합니다. 또한 이 장에서는 의미 있는 커밋 메시지를 작성하고 명확한 브랜치 명명 규칙을 채택하는 것의 중요성을 강조하는 동시에, 보다 사용자 친화적인 워크플로를 위해 명령줄 작업을 보완하기 위해 그래픽 사용자 인터페이스를 사용할 것을 제안합니다.",
                // Spanish
                "Español": "Este capítulo se centra en mejorar la experiencia de Git a través de la configuración y las mejores prácticas. Destaca la importancia de personalizar la configuración de Git, crear alias de comandos para lograr eficiencia y utilizarlos para administrar archivos no rastreados. El capítulo también destaca la importancia de escribir mensajes de confirmación significativos y adoptar convenciones claras de nombres de ramas, al tiempo que sugiere el uso de interfaces gráficas de usuario para complementar las operaciones de línea de comandos para un flujo de trabajo más fácil de usar.",
                // Hindi
                "हिंदी": "यह अध्याय कॉन्फ़िगरेशन और सर्वोत्तम प्रथाओं के माध्यम से Git अनुभव को बेहतर बनाने पर केंद्रित है। यह Git सेटिंग्स को कस्टमाइज़ करने, दक्षता के लिए कमांड उपनाम बनाने और अनट्रैक की गई फ़ाइलों को प्रबंधित करने के लिए उपयोग करने के महत्व पर जोर देता है। अध्याय सार्थक कमिट संदेश लिखने और स्पष्ट शाखा नामकरण परंपराओं को अपनाने के महत्व पर भी प्रकाश डालता है, जबकि अधिक उपयोगकर्ता-अनुकूल वर्कफ़्लो के लिए कमांड-लाइन संचालन को पूरक करने के लिए ग्राफ़िकल यूज़र इंटरफ़ेस के उपयोग का सुझाव देता है।",
                // Portuguese
                "Português": "Este capítulo centra-se em melhorar a experiência do Git através de configuração e práticas recomendadas. Realça a importância de personalizar as definições do Git, criar aliases de comando para maior eficiência e usá-lo para gerir ficheiros não rastreados. O capítulo também destaca a importância de escrever mensagens de commit significativas e adotar convenções claras de nomenclatura de ramos, ao mesmo tempo que sugere a utilização de interfaces gráficas de utilizador para complementar as operações de linha de comando para um fluxo de trabalho mais amigável.",
                // Bengali
                "বাংলা": "এই অধ্যায়টি কনফিগারেশন এবং সর্বোত্তম অনুশীলনের মাধ্যমে গিট অভিজ্ঞতা বাড়ানোর উপর দৃষ্টি নিবদ্ধ করে। এটি গিট সেটিংস কাস্টমাইজ করার, দক্ষতার জন্য কমান্ড উপনাম তৈরি করা এবং আনট্র্যাক করা ফাইলগুলি পরিচালনা করার জন্য ব্যবহার করার গুরুত্বের উপর জোর দেয়। অধ্যায়টি আরও ব্যবহারকারী-বান্ধব কর্মপ্রবাহের জন্য কমান্ড-লাইন ক্রিয়াকলাপগুলিকে পরিপূরক করতে গ্রাফিকাল ইউজার ইন্টারফেস ব্যবহারের পরামর্শ দেওয়ার সাথে সাথে অর্থপূর্ণ প্রতিশ্রুতি বার্তা লেখার এবং স্পষ্ট শাখার নামকরণের নিয়মগুলি গ্রহণ করার তাত্পর্যও তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز هذا الفصل على تحسين تجربة Git من خلال التكوين وأفضل الممارسات. ويؤكد على أهمية تخصيص إعدادات Git وإنشاء أسماء مستعارة للأوامر لتحقيق الكفاءة واستخدامها لإدارة الملفات غير المتعقبة. ويسلط الفصل الضوء أيضًا على أهمية كتابة رسائل التزام ذات مغزى وتبني اتفاقيات تسمية الفروع الواضحة، مع اقتراح استخدام واجهات المستخدم الرسومية لاستكمال عمليات سطر الأوامر لتحقيق سير عمل أكثر سهولة في الاستخدام.",
                // Persian
                "فارسی": "این فصل بر تقویت تجربه Git از طریق پیکربندی و بهترین شیوه ها تمرکز دارد. این بر اهمیت سفارشی کردن تنظیمات Git، ایجاد نام مستعار دستور برای کارایی و استفاده برای مدیریت فایل‌های ردیابی نشده تأکید می‌کند. این فصل همچنین اهمیت نوشتن پیام‌های commit معنی‌دار و اتخاذ قراردادهای نام‌گذاری شاخه واضح را برجسته می‌کند، در حالی که استفاده از رابط‌های کاربر گرافیکی برای تکمیل عملیات خط فرمان برای گردش کار کاربرپسندتر را پیشنهاد می‌کند.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "“Head First Git” by Raju Gandhi is a comprehensive guide designed to help readers understand Git from the inside out. The book is part of the well-known “Head First” series, which is celebrated for its visually rich format and engaging, conversational style that aligns with how the brain learns best. By reading this book, learners will move beyond merely following ‘recipes’ or commands found online, to truly grasping the underlying mechanics of Git. This deeper understanding enables them to navigate tight spots and complex situations with confidence.",
            // German
            "Deutsch": "„Head First Git“ von Raju Gandhi ist ein umfassender Leitfaden, der den Lesern helfen soll, Git von Grund auf zu verstehen. Das Buch ist Teil der bekannten „Head First“-Reihe, die für ihr visuell ansprechendes Format und ihren ansprechenden, gesprächigen Stil bekannt ist, der sich an der Art und Weise orientiert, wie das Gehirn am besten lernt. Durch die Lektüre dieses Buches werden Lernende nicht nur „Rezepte“ oder Befehle befolgen, die sie online finden, sondern die zugrunde liegende Mechanik von Git wirklich verstehen. Dieses tiefere Verständnis ermöglicht es ihnen, schwierige Situationen und komplexe Situationen souverän zu meistern.",
            // Chinese
            "中国人": "Raju Gandhi 的《Head First Git》是一本全面的指南，旨在帮助读者从内到外了解 Git。这本书是著名的“Head First”系列的一部分，该系列以其丰富的视觉格式和引人入胜的对话风格而闻名，与大脑的最佳学习方式相一致。通过阅读这本书，学习者将不再仅仅遵循在线找到的“食谱”或命令，而是真正掌握 Git 的底层机制。这种更深入的理解使他们能够自信地应对困境和复杂情况。",
            // Russian
            "Русский": "«Head First Git» Раджу Ганди — это подробное руководство, призванное помочь читателям понять Git изнутри. Книга входит в известную серию «Head First», которая славится своим визуально богатым форматом и увлекательным разговорным стилем, который соответствует тому, как мозг лучше всего учится. Прочитав эту книгу, учащиеся перейдут от простого следования «рецептам» или командам, найденным в Интернете, к настоящему пониманию основной механики Git. Это более глубокое понимание позволяет им уверенно ориентироваться в трудных ситуациях и сложных ситуациях.",
            // French
            "Français": "« Head First Git » de Raju Gandhi est un guide complet conçu pour aider les lecteurs à comprendre Git de l'intérieur. Le livre fait partie de la célèbre série « Head First », célèbre pour son format visuellement riche et son style de conversation engageant qui correspond à la façon dont le cerveau apprend le mieux. En lisant ce livre, les apprenants ne se contenteront pas de suivre des « recettes » ou des commandes trouvées en ligne, mais comprendront véritablement les mécanismes sous-jacents de Git. Cette compréhension plus approfondie leur permet de naviguer en toute confiance dans des situations difficiles et complexes.",
            // Japanese
            "日本語": "Raju Gandhi 著の「Head First Git」は、読者が Git を隅々まで理解できるように設計された総合ガイドです。この本は、視覚的に豊かな形式と、脳の学習に最適な魅力的な会話スタイルで定評のある「Head First」シリーズの一部です。この本を読むことで、学習者は単にオンラインで見つかった「レシピ」やコマンドに従うだけでなく、Git の基本的な仕組みを真に理解できるようになります。この深い理解により、困難な状況や複雑な状況にも自信を持って対処できるようになります。",
            // Korean
            "한국인": "Raju Gandhi가 쓴 “Head First Git”은 독자가 Git을 내부적으로 이해할 수 있도록 고안된 포괄적인 가이드입니다. 이 책은 시각적으로 풍부한 형식과 뇌가 가장 잘 학습하는 방식에 부합하는 매력적인 대화 스타일로 유명한 “Head First” 시리즈의 일부입니다. 이 책을 읽으면 학습자는 단순히 온라인에서 찾을 수 있는 '레시피'나 명령을 따르는 것 이상으로 Git의 기본 메커니즘을 진정으로 이해할 수 있습니다. 이러한 깊은 이해를 통해 그들은 어려운 지점과 복잡한 상황을 자신있게 탐색할 수 있습니다.",
            // Spanish
            "Español": "“Head First Git” de Raju Gandhi es una guía completa diseñada para ayudar a los lectores a comprender Git desde adentro hacia afuera. El libro es parte de la conocida serie “Head First”, que se celebra por su formato visualmente rico y su estilo conversacional atractivo que se alinea con la forma en que el cerebro aprende mejor. Al leer este libro, los estudiantes irán más allá de simplemente seguir “recetas” o comandos encontrados en línea, para comprender verdaderamente la mecánica subyacente de Git. Esta comprensión más profunda les permite navegar por momentos difíciles y situaciones complejas con confianza.",
            // Hindi
            "हिंदी": "राजू गांधी द्वारा लिखित “हेड फर्स्ट गिट” एक व्यापक गाइड है जिसे पाठकों को गिट को अंदर से बाहर तक समझने में मदद करने के लिए डिज़ाइन किया गया है। यह पुस्तक प्रसिद्ध “हेड फर्स्ट” श्रृंखला का हिस्सा है, जिसे इसके विज़ुअल समृद्ध प्रारूप और आकर्षक, संवादात्मक शैली के लिए जाना जाता है जो मस्तिष्क के सीखने के तरीके से सबसे अच्छी तरह मेल खाती है। इस पुस्तक को पढ़कर, शिक्षार्थी केवल ऑनलाइन पाए जाने वाले ‘नुस्खे’ या आदेशों का पालन करने से आगे बढ़कर, गिट के अंतर्निहित यांत्रिकी को वास्तव में समझ पाएंगे। यह गहरी समझ उन्हें मुश्किल परिस्थितियों और जटिल परिस्थितियों को आत्मविश्वास के साथ नेविगेट करने में सक्षम बनाती है।",
            // Portuguese
            "Português": "“Head First Git” de Raju Gandhi é um guia completo projetado para ajudar os leitores a entender o Git de dentro para fora. O livro faz parte da conhecida série “Head First”, que é celebrada por seu formato visualmente rico e estilo conversacional envolvente que se alinha com a forma como o cérebro aprende melhor. Ao ler este livro, os alunos irão além de apenas seguir “receitas” ou comandos encontrados online, para realmente compreenderem a mecânica subjacente do Git. Essa compreensão mais profunda lhes permite navegar em situações difíceis e complexas com confiança.",
            // Bengali
            "বাংলা": "রাজু গান্ধীর “হেড ফার্স্ট গিট” হল একটি বিস্তৃত নির্দেশিকা যা পাঠকদের গিটকে ভেতর থেকে বুঝতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। বইটি সুপরিচিত “হেড ফার্স্ট” সিরিজের অংশ, যা এর দৃশ্যত সমৃদ্ধ বিন্যাস এবং আকর্ষক, কথোপকথন শৈলীর জন্য পালিত হয় যা মস্তিষ্ক কীভাবে সবচেয়ে ভাল শেখে তার সাথে সারিবদ্ধ করে। এই বইটি পড়ার মাধ্যমে, শিক্ষার্থীরা গিটের অন্তর্নিহিত মেকানিক্সকে সত্যিকার অর্থে উপলব্ধি করতে, অনলাইনে পাওয়া ‘রেসিপি’ বা কমান্ডগুলি অনুসরণ করার বাইরে চলে যাবে। এই গভীর উপলব্ধি তাদের আঁটসাঁট দাগ এবং জটিল পরিস্থিতিতে আত্মবিশ্বাসের সাথে নেভিগেট করতে সক্ষম করে।",
            // Arabic
            "عَرَبِيّ": "“Head First Git” بقلم Raju Gandhi هو دليل شامل مصمم لمساعدة القراء على فهم Git من الداخل إلى الخارج. يعد الكتاب جزءًا من سلسلة “Head First” الشهيرة، والتي يتم الاحتفال بها لشكلها الغني بصريًا وأسلوب المحادثة الجذاب الذي يتماشى مع كيفية تعلم الدماغ بشكل أفضل. من خلال قراءة هذا الكتاب، سينتقل المتعلمون إلى ما هو أبعد من مجرد اتباع “الوصفات” أو الأوامر الموجودة عبر الإنترنت، إلى فهم الآليات الأساسية لـ Git حقًا. وهذا الفهم الأعمق يمكّنهم من التنقل في النقاط الصعبة والمواقف المعقدة بثقة.",
            // Persian
            "فارسی": "“Head First Git” توسط راجو گاندی یک راهنمای جامع است که برای کمک به خوانندگان برای درک Git از درون به بیرون طراحی شده است. این کتاب بخشی از مجموعه معروف “Head First” است که به دلیل قالب بصری غنی و سبک مکالمه جذاب و جذاب که با نحوه یادگیری مغز به بهترین شکل مطابقت دارد، تحسین شده است. با خواندن این کتاب، فراگیران فراتر از پیروی از «دستورالعمل‌ها» یا دستورات موجود در اینترنت می‌روند تا مکانیک زیربنایی Git را درک کنند. این درک عمیق‌تر آنها را قادر می‌سازد تا نقاط تنگ و موقعیت‌های پیچیده را با اعتماد به نفس طی کنند.",
        },
        // Paragraph 2
        {
            // English
            "English": "Readers of “Head First Git” will gain a mastery of Git’s fundamental concepts, such as branches, merges, commit messages, search, and utilities. The book emphasizes not just the ‘how’ but also the ‘why’ behind Git’s operations, providing a more intuitive understanding of the tool. Additionally, it covers best practices for collaborative work, allowing readers to unlock the full potential of Git in team settings. The hands-on approach, with numerous exercises, ensures that readers don’t just passively consume information but actively engage with the material.",
            // German
            "Deutsch": "Leser von „Head First Git“ erlernen die grundlegenden Konzepte von Git, wie z. B. Branches, Merges, Commit-Nachrichten, Suche und Dienstprogramme. Das Buch betont nicht nur das „Wie“, sondern auch das „Warum“ hinter den Vorgängen von Git und vermittelt so ein intuitiveres Verständnis des Tools. Darüber hinaus behandelt es Best Practices für die Zusammenarbeit, sodass Leser das volle Potenzial von Git in Teamumgebungen ausschöpfen können. Der praktische Ansatz mit zahlreichen Übungen stellt sicher, dass Leser Informationen nicht nur passiv aufnehmen, sondern sich aktiv mit dem Material auseinandersetzen.",
            // Chinese
            "中国人": "《Head First Git》的读者将掌握 Git 的基本概念，例如分支、合并、提交消息、搜索和实用程序。本书不仅强调 Git 操作背后的“如何”而且强调“为什么”，从而更直观地了解该工具。此外，它还涵盖了协作工作的最佳实践，使读者能够在团队环境中充分发挥 Git 的潜力。实践方法和大量练习确保读者不仅仅是被动地获取信息，而是积极地参与材料。",
            // Russian
            "Русский": "Читатели «Head First Git» познакомятся с фундаментальными концепциями Git, такими как ветвления, слияния, сообщения фиксации, поиск и утилиты. В книге подчеркивается не только «как», но и «почему», лежащая в основе операций Git, обеспечивая более интуитивное понимание этого инструмента. Кроме того, в нем рассматриваются лучшие практики совместной работы, что позволяет читателям раскрыть весь потенциал Git в командной работе. Практический подход с многочисленными упражнениями гарантирует, что читатели не просто пассивно потребляют информацию, а активно взаимодействуют с материалом.",
            // French
            "Français": "Les lecteurs de « Head First Git » acquerront une maîtrise des concepts fondamentaux de Git, tels que les branches, les fusions, les messages de validation, la recherche et les utilitaires. Le livre met l’accent non seulement sur le « comment », mais également sur le « pourquoi » des opérations de Git, offrant ainsi une compréhension plus intuitive de l’outil. De plus, il couvre les meilleures pratiques en matière de travail collaboratif, permettant aux lecteurs de libérer tout le potentiel de Git en équipe. L’approche pratique, avec de nombreux exercices, garantit que les lecteurs ne se contentent pas de consommer passivement les informations mais s’engagent activement dans le matériel.",
            // Japanese
            "日本語": "「Head First Git」の読者は、ブランチ、マージ、コミット メッセージ、検索、ユーティリティなどの Git の基本概念を習得できます。本書では、Git の操作の「方法」だけでなく「理由」にも重点を置いており、ツールをより直感的に理解できます。さらに、共同作業のベスト プラクティスも取り上げており、チーム設定で Git の潜在能力を最大限に引き出すことができます。多数の演習を含む実践的なアプローチにより、読者は受動的に情報を消費するのではなく、資料に積極的に関与できます。",
            // Korean
            "한국인": "“Head First Git”의 독자는 분기, 병합, 커밋 메시지, 검색 및 유틸리티와 같은 Git의 기본 개념을 숙지하게 됩니다. 이 책은 Git의 운영 이면에 있는 '어떻게'뿐만 아니라 '이유'도 강조하여 도구에 대한 보다 직관적인 이해를 제공합니다. 또한 공동 작업에 대한 모범 사례를 다루므로 독자는 팀 설정에서 Git의 잠재력을 최대한 활용할 수 있습니다. 수많은 연습을 통한 실습 접근 방식을 통해 독자는 정보를 수동적으로 소비할 뿐만 아니라 자료에 적극적으로 참여할 수 있습니다.",
            // Spanish
            "Español": "Los lectores de “Head First Git” dominarán los conceptos fundamentales de Git, como ramas, fusiones, mensajes de confirmación, búsqueda y utilidades. El libro enfatiza no sólo el “cómo” sino también el “por qué” detrás de las operaciones de Git, proporcionando una comprensión más intuitiva de la herramienta. Además, cubre las mejores prácticas para el trabajo colaborativo, lo que permite a los lectores desbloquear todo el potencial de Git en entornos de equipo. El enfoque práctico, con numerosos ejercicios, garantiza que los lectores no solo consuman información pasivamente sino que interactúen activamente con el material.",
            // Hindi
            "हिंदी": "“हेड फर्स्ट गिट” के पाठकों को गिट की मूलभूत अवधारणाओं, जैसे कि शाखाएँ, मर्ज, कमिट संदेश, खोज और उपयोगिताओं में महारत हासिल होगी। पुस्तक न केवल ‘कैसे’ बल्कि गिट के संचालन के पीछे ‘क्यों’ पर भी जोर देती है, जिससे टूल की अधिक सहज समझ मिलती है। इसके अतिरिक्त, यह सहयोगी कार्य के लिए सर्वोत्तम प्रथाओं को शामिल करता है, जिससे पाठकों को टीम सेटिंग में गिट की पूरी क्षमता को अनलॉक करने की अनुमति मिलती है। कई अभ्यासों के साथ व्यावहारिक दृष्टिकोण यह सुनिश्चित करता है कि पाठक केवल निष्क्रिय रूप से जानकारी का उपभोग न करें बल्कि सामग्री के साथ सक्रिय रूप से जुड़ें।",
            // Portuguese
            "Português": "Os leitores de “Head First Git” ganharão domínio dos conceitos fundamentais do Git, como ramificações, mesclagens, mensagens de commit, pesquisa e utilitários. O livro enfatiza não apenas o “como”, mas também o “porquê” por trás das operações do Git, proporcionando uma compreensão mais intuitiva da ferramenta. Além disso, aborda as melhores práticas para trabalho colaborativo, permitindo aos leitores desbloquear todo o potencial do Git em ambientes de equipe. A abordagem prática, com vários exercícios, garante que os leitores não apenas consumam informações passivamente, mas também se envolvam ativamente com o material.",
            // Bengali
            "বাংলা": "“হেড ফার্স্ট গিট”-এর পাঠকরা গিট-এর মৌলিক ধারণা যেমন শাখা, একত্রীকরণ, কমিট মেসেজ, অনুসন্ধান এবং ইউটিলিটিগুলির উপর দক্ষতা অর্জন করবে। বইটি শুধু 'কীভাবে' নয় বরং Git-এর ক্রিয়াকলাপগুলির পিছনে 'কেন'-কেও জোর দেয়, সরঞ্জামটির আরও স্বজ্ঞাত বোঝার ব্যবস্থা করে। উপরন্তু, এটি সহযোগী কাজের জন্য সর্বোত্তম অনুশীলনগুলিকে কভার করে, পাঠকদের দল সেটিংসে গিট-এর সম্পূর্ণ সম্ভাবনা আনলক করতে দেয়। হ্যান্ডস-অন পদ্ধতি, অসংখ্য অনুশীলনের সাথে, নিশ্চিত করে যে পাঠকরা কেবল নিষ্ক্রিয়ভাবে তথ্য গ্রহণ করে না বরং সক্রিয়ভাবে উপাদানের সাথে জড়িত থাকে।",
            // Arabic
            "عَرَبِيّ": "سوف يكتسب قراء “Head First Git” إتقانًا لمفاهيم Git الأساسية، مثل الفروع والدمج ورسائل الالتزام والبحث والأدوات المساعدة. لا يركز الكتاب على ”كيف“ فحسب، بل أيضًا على ”لماذا“ وراء عمليات Git، مما يوفر فهمًا أكثر سهولة للأداة. بالإضافة إلى ذلك، فإنه يغطي أفضل الممارسات للعمل التعاوني، مما يسمح للقراء بإطلاق العنان للإمكانات الكاملة لـ Git في إعدادات الفريق. يضمن النهج العملي، مع العديد من التمارين، أن القراء لا يستهلكون المعلومات بشكل سلبي فحسب، بل يتفاعلون بشكل نشط مع المادة.",
            // Persian
            "فارسی": "خوانندگان «Head First Git» بر مفاهیم اساسی Git مانند شاخه‌ها، ادغام‌ها، commit پیام‌ها، جستجو و برنامه‌های کاربردی تسلط خواهند داشت. این کتاب نه تنها بر 'چگونه' بلکه بر 'چرا' پشت عملیات Git نیز تأکید می کند و درک شهودی تری از ابزار ارائه می دهد. علاوه بر این، بهترین شیوه‌های کار مشترک را پوشش می‌دهد و به خوانندگان اجازه می‌دهد تا پتانسیل کامل Git را در تنظیمات تیم باز کنند. رویکرد عملی، با تمرین‌های متعدد، تضمین می‌کند که خوانندگان نه تنها اطلاعات را منفعلانه مصرف نمی‌کنند، بلکه فعالانه با مطالب درگیر می‌شوند.",
        },
        // Paragraph 3
        {
            // English
            "English": "The advantages of reading “Head First Git” are manifold. Firstly, the book’s unique teaching methodology makes learning about Git an enjoyable and effective experience. The use of stories, analogies, and visual aids helps in retaining complex information. Secondly, the practical exercises included in the book offer real-world applicability, ensuring that readers can apply their knowledge immediately. Lastly, the book’s approach to explaining the ‘why’ behind the ‘how’ equips readers with a problem-solving mindset, making them more adept at overcoming challenges they may encounter while using Git.",
            // German
            "Deutsch": "Die Vorteile der Lektüre von „Head First Git“ sind vielfältig. Erstens macht die einzigartige Lehrmethode des Buches das Lernen über Git zu einer unterhaltsamen und effektiven Erfahrung. Die Verwendung von Geschichten, Analogien und visuellen Hilfsmitteln hilft dabei, komplexe Informationen zu behalten. Zweitens bieten die im Buch enthaltenen praktischen Übungen praktische Anwendbarkeit und stellen sicher, dass die Leser ihr Wissen sofort anwenden können. Schließlich vermittelt der Ansatz des Buches, das „Warum“ hinter dem „Wie“ zu erklären, den Lesern eine Problemlösungsmentalität, sodass sie die Herausforderungen, denen sie bei der Verwendung von Git begegnen können, besser bewältigen können.",
            // Chinese
            "中国人": "阅读《Head First Git》的好处是多方面的。首先，本书独特的教学方法使学习 Git 成为一种愉快而有效的体验。故事、类比和视觉辅助的使用有助于保留复杂的信息。其次，本书包含的实践练习提供了现实世界的适用性，确保读者可以立即应用他们的知识。最后，本书解释“如何”背后的“为什么”的方法使读者具备解决问题​​的心态，使他们更善于克服使用 Git 时可能遇到的挑战。",
            // Russian
            "Русский": "Преимущества чтения «Head First Git» многочисленны. Во-первых, уникальная методика преподавания книги делает изучение Git приятным и эффективным занятием. Использование историй, аналогий и наглядных пособий помогает запомнить сложную информацию. Во-вторых, практические упражнения, включенные в книгу, предлагают применимость в реальной жизни, гарантируя, что читатели смогут немедленно применить свои знания. Наконец, подход книги к объяснению «почему» за «как» дает читателям мышление, позволяющее решать проблемы, делая их более умелыми в преодолении проблем, с которыми они могут столкнуться при использовании Git.",
            // French
            "Français": "Les avantages de lire « Head First Git » sont multiples. Premièrement, la méthodologie pédagogique unique du livre fait de l’apprentissage de Git une expérience agréable et efficace. L'utilisation d'histoires, d'analogies et d'aides visuelles aide à conserver des informations complexes. Deuxièmement, les exercices pratiques inclus dans le livre sont applicables dans le monde réel, garantissant que les lecteurs peuvent appliquer leurs connaissances immédiatement. Enfin, l’approche du livre consistant à expliquer le « pourquoi » derrière le « comment » donne aux lecteurs un état d’esprit de résolution de problèmes, les rendant plus aptes à surmonter les défis qu’ils peuvent rencontrer lors de l’utilisation de Git.",
            // Japanese
            "日本語": "「Head First Git」を読むことの利点は多岐にわたります。まず、この本のユニークな教授法によって、Git の学習が楽しく効果的なものになります。ストーリー、アナロジー、視覚的な補助の使用により、複雑な情報を記憶しやすくなります。次に、この本に含まれる実践的な演習は現実世界での応用性を提供し、読者が知識をすぐに応用できるようにします。最後に、この本は「方法」の背後にある「理由」を説明するアプローチを採用しているため、読者は問題解決の考え方を身に付け、Git の使用中に遭遇する可能性のある課題をより上手に克服できるようになります。",
            // Korean
            "한국인": "“Head First Git”을 읽는 것의 장점은 다양합니다. 첫째, 이 책의 독특한 교육 방법론은 Git에 대한 학습을 ​​즐겁고 효과적인 경험으로 만듭니다. 이야기, 비유, 시각적 자료를 사용하면 복잡한 정보를 유지하는 데 도움이 됩니다. 둘째, 책에 포함된 실습은 실제 적용 가능성을 제공하므로 독자가 지식을 즉시 적용할 수 있습니다. 마지막으로, '어떻게' 뒤에 있는 '이유'를 설명하는 이 책의 접근 방식은 독자가 문제 해결 사고방식을 갖도록 하여 Git을 사용하는 동안 직면할 수 있는 문제를 극복하는 데 더 능숙하게 만듭니다.",
            // Spanish
            "Español": "Las ventajas de leer “Head First Git” son múltiples. En primer lugar, la metodología de enseñanza única del libro hace que aprender sobre Git sea una experiencia agradable y eficaz. El uso de historias, analogías y ayudas visuales ayuda a retener información compleja. En segundo lugar, los ejercicios prácticos incluidos en el libro ofrecen aplicabilidad en el mundo real, lo que garantiza que los lectores puedan aplicar sus conocimientos de inmediato. Por último, el enfoque del libro para explicar el “por qué” detrás del “cómo” dota a los lectores de una mentalidad de resolución de problemas, haciéndolos más hábiles para superar los desafíos que pueden encontrar al usar Git.",
            // Hindi
            "हिंदी": "“हेड फर्स्ट गिट” पढ़ने के कई फायदे हैं। सबसे पहले, पुस्तक की अनूठी शिक्षण पद्धति गिट के बारे में सीखना एक सुखद और प्रभावी अनुभव बनाती है। कहानियों, उपमाओं और दृश्य सहायता का उपयोग जटिल जानकारी को बनाए रखने में मदद करता है। दूसरे, पुस्तक में शामिल व्यावहारिक अभ्यास वास्तविक दुनिया की प्रयोज्यता प्रदान करते हैं, यह सुनिश्चित करते हुए कि पाठक अपने ज्ञान को तुरंत लागू कर सकते हैं। अंत में, ‘कैसे’ के पीछे ‘क्यों’ को समझाने के लिए पुस्तक का दृष्टिकोण पाठकों को समस्या-समाधान मानसिकता से लैस करता है, जिससे वे गिट का उपयोग करते समय आने वाली चुनौतियों पर काबू पाने में अधिक कुशल बन जाते हैं।",
            // Portuguese
            "Português": "As vantagens de ler “Head First Git” são múltiplas. Em primeiro lugar, a metodologia de ensino exclusiva do livro torna o aprendizado sobre Git uma experiência agradável e eficaz. O uso de histórias, analogias e recursos visuais ajuda a reter informações complexas. Em segundo lugar, os exercícios práticos incluídos no livro oferecem aplicabilidade no mundo real, garantindo que os leitores possam aplicar os seus conhecimentos imediatamente. Por último, a abordagem do livro para explicar o “porquê” por trás do “como” equipa os leitores com uma mentalidade de resolução de problemas, tornando-os mais aptos a superar os desafios que podem encontrar ao usar o Git.",
            // Bengali
            "বাংলা": "“হেড ফার্স্ট গিট” পড়ার সুবিধা বহুগুণ। প্রথমত, বইটির অনন্য শিক্ষণ পদ্ধতি গিট সম্পর্কে শেখাকে একটি উপভোগ্য এবং কার্যকর অভিজ্ঞতা করে তোলে। গল্প, উপমা এবং ভিজ্যুয়াল এইডস ব্যবহার জটিল তথ্য ধরে রাখতে সাহায্য করে। দ্বিতীয়ত, বইটিতে অন্তর্ভুক্ত ব্যবহারিক অনুশীলনগুলি বাস্তব-বিশ্বের প্রযোজ্যতা প্রদান করে, যাতে পাঠকরা অবিলম্বে তাদের জ্ঞান প্রয়োগ করতে পারে তা নিশ্চিত করে। অবশেষে, 'কীভাবে' এর পিছনে 'কেন' ব্যাখ্যা করার জন্য বইটির পদ্ধতি পাঠকদের একটি সমস্যা-সমাধানের মানসিকতার সাথে সজ্জিত করে, তাদের গিট ব্যবহার করার সময় তারা যে চ্যালেঞ্জগুলির সম্মুখীন হতে পারে তা কাটিয়ে উঠতে তাদের আরও দক্ষ করে তোলে।",
            // Arabic
            "عَرَبِيّ": "مزايا قراءة “Head First Git” متعددة. أولاً، منهجية التدريس الفريدة للكتاب تجعل تعلم Git تجربة ممتعة وفعالة. يساعد استخدام القصص والقياسات والوسائل البصرية في الاحتفاظ بالمعلومات المعقدة. ثانيًا، توفر التمارين العملية المضمنة في الكتاب قابلية التطبيق في العالم الحقيقي، مما يضمن أن يتمكن القراء من تطبيق معرفتهم على الفور. وأخيرًا، فإن منهج الكتاب في شرح 'السبب' وراء 'الكيفية' يزود القراء بعقلية حل المشكلات، مما يجعلهم أكثر مهارة في التغلب على التحديات التي قد يواجهونها أثناء استخدام Git.",
            // Persian
            "فارسی": "مزایای خواندن “Head First Git” بسیار زیاد است. اولاً، روش تدریس منحصر به فرد کتاب، یادگیری در مورد Git را به تجربه ای لذت بخش و مؤثر تبدیل می کند. استفاده از داستان ها، تشبیه ها و وسایل کمک بصری به حفظ اطلاعات پیچیده کمک می کند. ثانیاً، تمرین‌های عملی موجود در کتاب قابلیت کاربرد در دنیای واقعی را ارائه می‌دهند و اطمینان می‌دهند که خوانندگان می‌توانند فوراً دانش خود را به کار گیرند. در نهایت، رویکرد کتاب برای توضیح «چرا» پشت «چگونه»، خوانندگان را با طرز فکر حل مسئله مجهز می‌کند و آنها را در غلبه بر چالش‌هایی که ممکن است در حین استفاده از Git با آن‌ها مواجه شوند، ماهرتر می‌کند.",
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
        document.title = "MHA - " + head_first_git["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = head_first_git["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = head_first_git["TotalDescriptionAboutTheBook"][index][newLanguage];
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