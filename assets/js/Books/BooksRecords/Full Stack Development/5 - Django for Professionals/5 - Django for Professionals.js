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
var django_for_professionals = {
    "BookName": "Django for Professionals",
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Initial Set Up",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 1 provides a guide for setting up a development environment for Django projects on Windows and macOS. It covers the installation of essential tools such as Python 3.10, Git, and a text editor like Visual Studio Code, along with basic command line usage. The chapter emphasizes the importance of configuring these tools correctly to ensure a smooth development experience and prepares the reader for the next chapter on Docker.",
                // German
                "Deutsch": "Kapitel 1 enthält eine Anleitung zum Einrichten einer Entwicklungsumgebung für Django-Projekte unter Windows und macOS. Es behandelt die Installation wichtiger Tools wie Python 3.10, Git und eines Texteditors wie Visual Studio Code sowie die grundlegende Verwendung der Befehlszeile. Das Kapitel betont, wie wichtig es ist, diese Tools richtig zu konfigurieren, um ein reibungsloses Entwicklungserlebnis zu gewährleisten, und bereitet den Leser auf das nächste Kapitel über Docker vor.",
                // Chinese
                "中国人": "第 1 章提供了在 Windows 和 macOS 上为 Django 项目设置开发环境的指南。它涵盖了 Python 3.10、Git 和文本编辑器（如 Visual Studio Code）等基本工具的安装，以及基本的命令行用法。本章强调了正确配置这些工具以确保顺畅的开发体验的重要性，并为读者准备了下一章关于 Docker 的内容。",
                // Russian
                "Русский": "Глава 1 содержит руководство по настройке среды разработки для проектов Django на Windows и macOS. В ней рассматривается установка основных инструментов, таких как Python 3.10, Git и текстовый редактор, такой как Visual Studio Code, а также базовое использование командной строки. В главе подчеркивается важность правильной настройки этих инструментов для обеспечения бесперебойной разработки и подготовка читателя к следующей главе о Docker.",
                // French
                "Français": "Le chapitre 1 fournit un guide pour la configuration d'un environnement de développement pour les projets Django sur Windows et macOS. Il couvre l'installation d'outils essentiels tels que Python 3.10, Git et un éditeur de texte comme Visual Studio Code, ainsi que l'utilisation de base de la ligne de commande. Le chapitre souligne l'importance de configurer correctement ces outils pour garantir une expérience de développement fluide et prépare le lecteur au prochain chapitre sur Docker.",
                // Japanese
                "日本語": "第 1 章では、Windows および macOS で Django プロジェクトの開発環境を設定するためのガイドを提供します。Python 3.10、Git、Visual Studio Code などのテキスト エディターなどの必須ツールのインストールと、基本的なコマンド ラインの使用法について説明します。この章では、スムーズな開発エクスペリエンスを実現するためにこれらのツールを正しく構成することの重要性を強調し、読者が Docker に関する次の章に備えられるようにします。",
                // Korean
                "한국인": "1장에서는 Windows 및 macOS에서 Django 프로젝트를 위한 개발 환경을 설정하는 방법에 대한 가이드를 제공합니다. Python 3.10, Git, Visual Studio Code와 같은 텍스트 편집기와 같은 필수 도구의 설치와 기본 명령줄 사용법을 다룹니다. 이 장에서는 원활한 개발 경험을 보장하기 위해 이러한 도구를 올바르게 구성하는 것의 중요성을 강조하고 독자에게 Docker에 대한 다음 장을 준비시킵니다.",
                // Spanish
                "Español": "El capítulo 1 ofrece una guía para configurar un entorno de desarrollo para proyectos de Django en Windows y macOS. Abarca la instalación de herramientas esenciales como Python 3.10, Git y un editor de texto como Visual Studio Code, junto con el uso básico de la línea de comandos. El capítulo enfatiza la importancia de configurar estas herramientas correctamente para garantizar una experiencia de desarrollo fluida y prepara al lector para el siguiente capítulo sobre Docker.",
                // Hindi
                "हिंदी": "अध्याय 1 विंडोज और मैकओएस पर Django प्रोजेक्ट के लिए डेवलपमेंट एनवायरनमेंट सेट अप करने के लिए एक गाइड प्रदान करता है। इसमें बुनियादी कमांड लाइन उपयोग के साथ-साथ Python 3.10, Git और Visual Studio Code जैसे टेक्स्ट एडिटर जैसे आवश्यक टूल की स्थापना शामिल है। अध्याय एक सहज विकास अनुभव सुनिश्चित करने के लिए इन टूल को सही ढंग से कॉन्फ़िगर करने के महत्व पर जोर देता है और पाठक को Docker पर अगले अध्याय के लिए तैयार करता है।",
                // Portuguese
                "Português": "O Capítulo 1 fornece um guia para a configuração de um ambiente de desenvolvimento para projetos Django em Windows e macOS. Abrange a instalação de ferramentas essenciais como o Python 3.10, Git e um editor de texto como o Visual Studio Code, juntamente com a utilização básica da linha de comandos. O capítulo enfatiza a importância de configurar estas ferramentas corretamente para garantir uma experiência de desenvolvimento sem problemas e prepara o leitor para o próximo capítulo sobre o Docker.",
                // Bengali
                "বাংলা": "অধ্যায় 1 Windows এবং macOS-এ জ্যাঙ্গো প্রকল্পগুলির জন্য একটি উন্নয়ন পরিবেশ স্থাপনের জন্য একটি নির্দেশিকা প্রদান করে। এটি মৌলিক কমান্ড লাইন ব্যবহারের সাথে পাইথন 3.10, গিট এবং ভিজ্যুয়াল স্টুডিও কোডের মতো একটি পাঠ্য সম্পাদকের মতো প্রয়োজনীয় সরঞ্জামগুলির ইনস্টলেশন কভার করে। অধ্যায়টি একটি মসৃণ বিকাশের অভিজ্ঞতা নিশ্চিত করতে এই সরঞ্জামগুলিকে সঠিকভাবে কনফিগার করার গুরুত্বের উপর জোর দেয় এবং ডকারের পরবর্তী অধ্যায়ের জন্য পাঠককে প্রস্তুত করে।",
                // Arabic
                "عَرَبِيّ": "يقدم الفصل الأول دليلاً لإعداد بيئة تطوير لمشاريع Django على أنظمة Windows وmacOS. ويغطي تثبيت الأدوات الأساسية مثل Python 3.10 وGit ومحرر النصوص مثل Visual Studio Code، إلى جانب الاستخدام الأساسي لسطر الأوامر. ويؤكد الفصل على أهمية تكوين هذه الأدوات بشكل صحيح لضمان تجربة تطوير سلسة ويجهز القارئ للفصل التالي حول Docker.",
                // Persian
                "فارسی": "فصل 1 راهنمایی برای راه اندازی یک محیط توسعه برای پروژه های جنگو در ویندوز و macOS ارائه می دهد. این برنامه نصب ابزارهای ضروری مانند Python 3.10، Git و یک ویرایشگر متن مانند Visual Studio Code را به همراه استفاده اولیه از خط فرمان پوشش می دهد. این فصل بر اهمیت پیکربندی صحیح این ابزارها برای اطمینان از تجربه توسعه روان تاکید می کند و خواننده را برای فصل بعدی در Docker آماده می کند.",
            },
        },
        // 2
        {
            "ChapterName": "Docker Hello, World!",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 2 introduces Docker as a solution to the complexities of configuring local development environments, allowing developers to create consistent and reproducible setups across different operating systems. By utilizing Linux containers, Docker provides a lightweight and efficient alternative to traditional virtual machines, enabling quick deployment and management of applications. The chapter outlines the process of Dockerizing a Django project, including creating a Dockerfile and docker-compose.yml, which simplifies collaboration among team members and enhances the overall development workflow.",
                // German
                "Deutsch": "Kapitel 2 stellt Docker als Lösung für die Komplexität der Konfiguration lokaler Entwicklungsumgebungen vor und ermöglicht Entwicklern die Erstellung konsistenter und reproduzierbarer Setups über verschiedene Betriebssysteme hinweg. Durch die Verwendung von Linux-Containern bietet Docker eine leichte und effiziente Alternative zu herkömmlichen virtuellen Maschinen und ermöglicht eine schnelle Bereitstellung und Verwaltung von Anwendungen. Das Kapitel beschreibt den Prozess der Dockerisierung eines Django-Projekts, einschließlich der Erstellung eines Dockerfiles und docker-compose.yml, was die Zusammenarbeit zwischen Teammitgliedern vereinfacht und den gesamten Entwicklungsworkflow verbessert.",
                // Chinese
                "中国人": "第 2 章介绍了 Docker，它可解决配置本地开发环境的复杂性，使开发人员能够在不同的操作系统上创建一致且可重复的设置。通过利用 Linux 容器，Docker 提供了一种轻量级且高效的传统虚拟机替代方案，可快速部署和管理应用程序。本章概述了 Docker 化 Django 项目的过程，包括创建 Dockerfile 和 docker-compose.yml，这简化了团队成员之间的协作并增强了整体开发工作流程。",
                // Russian
                "Русский": "Глава 2 знакомит с Docker как с решением сложностей настройки локальных сред разработки, позволяя разработчикам создавать согласованные и воспроизводимые настройки в различных операционных системах. Используя контейнеры Linux, Docker предоставляет легкую и эффективную альтернативу традиционным виртуальным машинам, позволяя быстро развертывать и управлять приложениями. В главе описывается процесс Dockerization проекта Django, включая создание Dockerfile и docker-compose.yml, что упрощает совместную работу членов команды и улучшает общий рабочий процесс разработки.",
                // French
                "Français": "Le chapitre 2 présente Docker comme une solution aux complexités de la configuration des environnements de développement locaux, permettant aux développeurs de créer des configurations cohérentes et reproductibles sur différents systèmes d'exploitation. En utilisant des conteneurs Linux, Docker fournit une alternative légère et efficace aux machines virtuelles traditionnelles, permettant un déploiement et une gestion rapides des applications. Le chapitre décrit le processus de dockerisation d'un projet Django, y compris la création d'un Dockerfile et d'un docker-compose.yml, ce qui simplifie la collaboration entre les membres de l'équipe et améliore le flux de travail de développement global.",
                // Japanese
                "日本語": "第 2 章では、ローカル開発環境を構成する複雑さに対するソリューションとして Docker を紹介します。これにより、開発者はさまざまなオペレーティング システム間で一貫性があり、再現可能なセットアップを作成できます。Linux コンテナーを利用することで、Docker は従来の仮想マシンに代わる軽量で効率的な方法を提供し、アプリケーションの迅速な展開と管理を可能にします。この章では、チーム メンバー間のコラボレーションを簡素化し、全体的な開発ワークフローを強化する Dockerfile と docker-compose.yml の作成など、Django プロジェクトを Docker 化するプロセスについて説明します。",
                // Korean
                "한국인": "2장에서는 로컬 개발 환경 구성의 복잡성에 대한 솔루션으로 Docker를 소개하여 개발자가 다양한 운영 체제에서 일관되고 재현 가능한 설정을 만들 수 있도록 합니다. Docker는 Linux 컨테이너를 활용하여 기존 가상 머신에 대한 가볍고 효율적인 대안을 제공하여 애플리케이션을 빠르게 배포하고 관리할 수 있습니다. 이 장에서는 Dockerfile과 docker-compose.yml을 만드는 것을 포함하여 Django 프로젝트를 Docker화하는 프로세스를 설명하며, 이를 통해 팀원 간의 협업이 간소화되고 전반적인 개발 워크플로가 향상됩니다.",
                // Spanish
                "Español": "El capítulo 2 presenta Docker como una solución a las complejidades de la configuración de entornos de desarrollo locales, lo que permite a los desarrolladores crear configuraciones consistentes y reproducibles en diferentes sistemas operativos. Al utilizar contenedores Linux, Docker proporciona una alternativa liviana y eficiente a las máquinas virtuales tradicionales, lo que permite una implementación y administración rápidas de aplicaciones. El capítulo describe el proceso de Dockerización de un proyecto de Django, incluida la creación de un Dockerfile y docker-compose.yml, lo que simplifica la colaboración entre los miembros del equipo y mejora el flujo de trabajo de desarrollo general.",
                // Hindi
                "हिंदी": "अध्याय 2 स्थानीय विकास वातावरण को कॉन्फ़िगर करने की जटिलताओं के समाधान के रूप में Docker का परिचय देता है, जिससे डेवलपर्स को विभिन्न ऑपरेटिंग सिस्टम में सुसंगत और पुनरुत्पादनीय सेटअप बनाने की अनुमति मिलती है। लिनक्स कंटेनरों का उपयोग करके, Docker पारंपरिक वर्चुअल मशीनों के लिए एक हल्का और कुशल विकल्प प्रदान करता है, जिससे अनुप्रयोगों की त्वरित तैनाती और प्रबंधन संभव होता है। अध्याय एक Django प्रोजेक्ट को Dockerize करने की प्रक्रिया को रेखांकित करता है, जिसमें Dockerfile और docker-compose.yml बनाना शामिल है, जो टीम के सदस्यों के बीच सहयोग को सरल बनाता है और समग्र विकास वर्कफ़्लो को बढ़ाता है।",
                // Portuguese
                "Português": "O Capítulo 2 apresenta o Docker como uma solução para as complexidades da configuração de ambientes de desenvolvimento local, permitindo aos programadores criar configurações consistentes e reproduzíveis em diferentes sistemas operativos. Ao utilizar contentores Linux, o Docker oferece uma alternativa leve e eficiente às máquinas virtuais tradicionais, permitindo uma rápida implementação e gestão de aplicações. O capítulo descreve o processo de Dockerização de um projeto Django, incluindo a criação de um Dockerfile e docker-compose.yml, o que simplifica a colaboração entre os membros da equipa e melhora o fluxo de trabalho global de desenvolvimento.",
                // Bengali
                "বাংলা": "অধ্যায় 2 স্থানীয় ডেভেলপমেন্ট এনভায়রনমেন্ট কনফিগার করার জটিলতার সমাধান হিসাবে ডকারকে উপস্থাপন করে, যা ডেভেলপারদের বিভিন্ন অপারেটিং সিস্টেম জুড়ে সামঞ্জস্যপূর্ণ এবং পুনরুত্পাদনযোগ্য সেটআপ তৈরি করতে দেয়। লিনাক্স কন্টেইনারগুলি ব্যবহার করে, ডকার প্রথাগত ভার্চুয়াল মেশিনগুলির একটি হালকা এবং দক্ষ বিকল্প প্রদান করে, অ্যাপ্লিকেশনগুলির দ্রুত স্থাপনা এবং পরিচালনা সক্ষম করে। অধ্যায়টি একটি জ্যাঙ্গো প্রকল্পের ডকারাইজ করার প্রক্রিয়ার রূপরেখা দেয়, যার মধ্যে একটি Dockerfile এবং docker-compose.yml তৈরি করা হয়, যা দলের সদস্যদের মধ্যে সহযোগিতাকে সহজ করে এবং সামগ্রিক উন্নয়ন কর্মপ্রবাহকে উন্নত করে।",
                // Arabic
                "عَرَبِيّ": "يقدم الفصل الثاني Docker كحل لتعقيدات تكوين بيئات التطوير المحلية، مما يسمح للمطورين بإنشاء إعدادات متسقة وقابلة للتكرار عبر أنظمة تشغيل مختلفة. من خلال الاستفادة من حاويات Linux، يوفر Docker بديلاً خفيف الوزن وفعالًا للآلات الافتراضية التقليدية، مما يتيح النشر السريع وإدارة التطبيقات. يوضح الفصل عملية Dockerizing لمشروع Django، بما في ذلك إنشاء Dockerfile وdocker-compose.yml، مما يبسط التعاون بين أعضاء الفريق ويعزز سير عمل التطوير الإجمالي.",
                // Persian
                "فارسی": "فصل 2 Docker را به عنوان راه حلی برای پیچیدگی های پیکربندی محیط های توسعه محلی معرفی می کند که به توسعه دهندگان این امکان را می دهد تا تنظیمات سازگار و قابل تکرار را در سیستم عامل های مختلف ایجاد کنند. با استفاده از کانتینرهای لینوکس، داکر جایگزینی سبک و کارآمد برای ماشین‌های مجازی سنتی ارائه می‌کند که امکان استقرار و مدیریت سریع برنامه‌ها را فراهم می‌کند. این فصل به تشریح فرآیند Dockerizing یک پروژه جنگو می‌پردازد، از جمله ایجاد Dockerfile و docker-compose.yml، که همکاری بین اعضای تیم را ساده می‌کند و گردش کار توسعه کلی را افزایش می‌دهد.",
            },
        },
        // 3
        {
            "ChapterName": "PostgreSQL",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 3 focuses on integrating PostgreSQL with a Django project using Docker, highlighting the transition from SQLite to PostgreSQL for production readiness. It emphasizes the importance of using Docker as a virtual environment to manage application dependencies and database isolation, while also detailing the setup of a Dockerfile and docker-compose.yml for efficient container management. The chapter introduces the psycopg2-binary package for PostgreSQL database connectivity and underscores the significance of version control with Git to track project changes.",
                // German
                "Deutsch": "Kapitel 3 konzentriert sich auf die Integration von PostgreSQL in ein Django-Projekt mithilfe von Docker und beleuchtet den Übergang von SQLite zu PostgreSQL zur Produktionsreife. Es betont die Bedeutung der Verwendung von Docker als virtuelle Umgebung zur Verwaltung von Anwendungsabhängigkeiten und Datenbankisolierung und beschreibt gleichzeitig die Einrichtung eines Dockerfiles und docker-compose.yml für eine effiziente Containerverwaltung. Das Kapitel stellt das Paket psycopg2-binary für die PostgreSQL-Datenbankkonnektivität vor und unterstreicht die Bedeutung der Versionskontrolle mit Git zur Nachverfolgung von Projektänderungen.",
                // Chinese
                "中国人": "第 3 章重点介绍如何使用 Docker 将 PostgreSQL 与 Django 项目集成，重点介绍从 SQLite 过渡到 PostgreSQL 以实现生产就绪状态。它强调了使用 Docker 作为虚拟环境来管理应用程序依赖关系和数据库隔离的重要性，同时还详细介绍了 Dockerfile 和 docker-compose.yml 的设置以实现高效的容器管理。本章介绍了用于 PostgreSQL 数据库连接的 psycopg2-binary 包，并强调了使用 Git 进行版本控制以跟踪项目更改的重要性。",
                // Russian
                "Русский": "Глава 3 посвящена интеграции PostgreSQL с проектом Django с использованием Docker, подчеркивая переход с SQLite на PostgreSQL для готовности к производству. В ней подчеркивается важность использования Docker в качестве виртуальной среды для управления зависимостями приложений и изоляцией базы данных, а также подробно описывается настройка Dockerfile и docker-compose.yml для эффективного управления контейнерами. В главе представлен пакет psycopg2-binary для подключения к базе данных PostgreSQL и подчеркивается важность контроля версий с помощью Git для отслеживания изменений проекта.",
                // French
                "Français": "Le chapitre 3 se concentre sur l'intégration de PostgreSQL avec un projet Django à l'aide de Docker, en soulignant la transition de SQLite vers PostgreSQL pour la préparation à la production. Il souligne l'importance d'utiliser Docker comme environnement virtuel pour gérer les dépendances des applications et l'isolation des bases de données, tout en détaillant la configuration d'un Dockerfile et d'un docker-compose.yml pour une gestion efficace des conteneurs. Le chapitre présente le package psycopg2-binary pour la connectivité de la base de données PostgreSQL et souligne l'importance du contrôle de version avec Git pour suivre les modifications du projet.",
                // Japanese
                "日本語": "第 3 章では、Docker を使用して PostgreSQL を Django プロジェクトに統合することに焦点を当て、本番環境の準備として SQLite から PostgreSQL への移行について説明します。アプリケーションの依存関係とデータベースの分離を管理するために、仮想環境として Docker を使用することの重要性を強調するとともに、効率的なコンテナ管理のための Dockerfile と docker-compose.yml の設定についても詳しく説明します。この章では、PostgreSQL データベース接続用の psycopg2-binary パッケージを紹介し、プロジェクトの変更を追跡するための Git によるバージョン管理の重要性を強調します。",
                // Korean
                "한국인": "3장에서는 Docker를 사용하여 PostgreSQL을 Django 프로젝트와 통합하는 데 중점을 두고, 프로덕션 준비를 위해 SQLite에서 PostgreSQL로의 전환을 강조합니다. Docker를 가상 환경으로 사용하여 애플리케이션 종속성과 데이터베이스 격리를 관리하는 것의 중요성을 강조하는 동시에 효율적인 컨테이너 관리를 위한 Dockerfile과 docker-compose.yml의 설정에 대해 자세히 설명합니다. 이 장에서는 PostgreSQL 데이터베이스 연결을 위한 psycopg2-binary 패키지를 소개하고 프로젝트 변경 사항을 추적하기 위해 Git을 사용한 버전 제어의 중요성을 강조합니다.",
                // Spanish
                "Español": "El capítulo 3 se centra en la integración de PostgreSQL con un proyecto de Django mediante Docker, destacando la transición de SQLite a PostgreSQL para la preparación para la producción. Destaca la importancia de utilizar Docker como un entorno virtual para gestionar las dependencias de las aplicaciones y el aislamiento de las bases de datos, al tiempo que detalla la configuración de un Dockerfile y docker-compose.yml para una gestión eficiente de los contenedores. El capítulo presenta el paquete psycopg2-binary para la conectividad de bases de datos PostgreSQL y subraya la importancia del control de versiones con Git para realizar un seguimiento de los cambios del proyecto.",
                // Hindi
                "हिंदी": "अध्याय 3 Docker का उपयोग करके Django प्रोजेक्ट के साथ PostgreSQL को एकीकृत करने पर ध्यान केंद्रित करता है, जो उत्पादन तत्परता के लिए SQLite से PostgreSQL में संक्रमण पर प्रकाश डालता है। यह एप्लिकेशन निर्भरता और डेटाबेस अलगाव को प्रबंधित करने के लिए वर्चुअल वातावरण के रूप में Docker का उपयोग करने के महत्व पर जोर देता है, साथ ही कुशल कंटेनर प्रबंधन के लिए Dockerfile और docker-compose.yml के सेटअप का विवरण भी देता है। अध्याय PostgreSQL डेटाबेस कनेक्टिविटी के लिए psycopg2-बाइनरी पैकेज का परिचय देता है और प्रोजेक्ट परिवर्तनों को ट्रैक करने के लिए Git के साथ संस्करण नियंत्रण के महत्व को रेखांकित करता है।",
                // Portuguese
                "Português": "O Capítulo 3 centra-se na integração do PostgreSQL com um projeto Django utilizando Docker, destacando a transição do SQLite para o PostgreSQL para preparação para produção. Realça a importância de utilizar o Docker como um ambiente virtual para gerir dependências de aplicações e isolamento de bases de dados, ao mesmo tempo que detalha a configuração de um Dockerfile e docker-compose.yml para uma gestão eficiente de contentores. O capítulo apresenta o pacote psycopg2-binary para conectividade de base de dados PostgreSQL e sublinha a importância do controlo de versões com Git para rastrear alterações no projeto.",
                // Bengali
                "বাংলা": "অধ্যায় 3 ডকার ব্যবহার করে একটি জ্যাঙ্গো প্রকল্পের সাথে PostgreSQL একীভূত করার উপর দৃষ্টি নিবদ্ধ করে, উৎপাদন প্রস্তুতির জন্য SQLite থেকে PostgreSQL-এ রূপান্তরকে হাইলাইট করে। এটি অ্যাপ্লিকেশন নির্ভরতা এবং ডাটাবেস বিচ্ছিন্নতা পরিচালনা করার জন্য একটি ভার্চুয়াল পরিবেশ হিসাবে ডকার ব্যবহার করার গুরুত্বের উপর জোর দেয়, পাশাপাশি দক্ষ ধারক পরিচালনার জন্য একটি Dockerfile এবং docker-compose.yml এর সেটআপের বিশদ বিবরণ দেয়। অধ্যায়টি PostgreSQL ডাটাবেস সংযোগের জন্য psycopg2-বাইনারী প্যাকেজ প্রবর্তন করে এবং প্রকল্পের পরিবর্তনগুলি ট্র্যাক করার জন্য Git-এর সাথে সংস্করণ নিয়ন্ত্রণের তাত্পর্যকে আন্ডারস্কোর করে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الثالث على دمج PostgreSQL مع مشروع Django باستخدام Docker، مع تسليط الضوء على الانتقال من SQLite إلى PostgreSQL للاستعداد للإنتاج. ويؤكد على أهمية استخدام Docker كبيئة افتراضية لإدارة تبعيات التطبيق وعزل قاعدة البيانات، مع تفصيل إعداد Dockerfile وdocker-compose.yml لإدارة الحاويات بكفاءة. يقدم الفصل حزمة psycopg2-binary لاتصال قاعدة بيانات PostgreSQL ويؤكد على أهمية التحكم في الإصدار باستخدام Git لتتبع تغييرات المشروع.",
                // Persian
                "فارسی": "فصل 3 بر ادغام PostgreSQL با پروژه جنگو با استفاده از Docker تمرکز دارد و انتقال از SQLite به PostgreSQL را برای آمادگی تولید برجسته می کند. بر اهمیت استفاده از Docker به‌عنوان یک محیط مجازی برای مدیریت وابستگی‌های برنامه‌ها و جداسازی پایگاه داده تأکید می‌کند، در حالی که تنظیمات Dockerfile و docker-compose.yml را برای مدیریت کارآمد کانتینر نیز شرح می‌دهد. این فصل بسته باینری psycopg2 را برای اتصال پایگاه داده PostgreSQL معرفی می کند و بر اهمیت کنترل نسخه با Git برای ردیابی تغییرات پروژه تأکید می کند.",
            },
        },
        // 4
        {
            "ChapterName": "Bookstore Project",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In Chapter 4 of the Bookstore Project, the focus is on setting up the project with Docker and PostgreSQL, implementing a custom user model, and running tests. The chapter details the process of creating a Dockerfile and docker-compose.yml file, configuring the PostgreSQL database in Django settings, and establishing a custom user model using AbstractUser. Additionally, it emphasizes the importance of testing, provides commands for running tests and creating a superuser, and concludes with a successful setup of the project environment.",
                // German
                "Deutsch": "In Kapitel 4 des Bookstore-Projekts liegt der Schwerpunkt auf der Einrichtung des Projekts mit Docker und PostgreSQL, der Implementierung eines benutzerdefinierten Benutzermodells und der Durchführung von Tests. Das Kapitel beschreibt detailliert den Prozess der Erstellung einer Dockerfile- und docker-compose.yml-Datei, der Konfiguration der PostgreSQL-Datenbank in den Django-Einstellungen und der Einrichtung eines benutzerdefinierten Benutzermodells mit AbstractUser. Darüber hinaus wird die Bedeutung des Testens betont, Befehle zum Ausführen von Tests und Erstellen eines Superusers bereitgestellt und abschließend eine erfolgreiche Einrichtung der Projektumgebung beschrieben.",
                // Chinese
                "中国人": "在书店项目的第 4 章中，重点介绍了如何使用 Docker 和 PostgreSQL 设置项目、实现自定义用户模型以及运行测试。本章详细介绍了创建 Dockerfile 和 docker-compose.yml 文件、在 Django 设置中配置 PostgreSQL 数据库以及使用 AbstractUser 建立自定义用户模型的过程。此外，它还强调了测试的重要性，提供了运行测试和创建超级用户的命令，最后成功设置了项目环境。",
                // Russian
                "Русский": "В главе 4 проекта Bookstore основное внимание уделяется настройке проекта с Docker и PostgreSQL, реализации пользовательской модели и запуску тестов. В главе подробно описывается процесс создания файлов Dockerfile и docker-compose.yml, настройка базы данных PostgreSQL в настройках Django и создание пользовательской модели с помощью AbstractUser. Кроме того, в ней подчеркивается важность тестирования, приводятся команды для запуска тестов и создания суперпользователя, а также завершается успешной настройкой среды проекта.",
                // French
                "Français": "Dans le chapitre 4 du projet Bookstore, l'accent est mis sur la configuration du projet avec Docker et PostgreSQL, l'implémentation d'un modèle utilisateur personnalisé et l'exécution de tests. Le chapitre détaille le processus de création d'un fichier Dockerfile et docker-compose.yml, la configuration de la base de données PostgreSQL dans les paramètres Django et l'établissement d'un modèle utilisateur personnalisé à l'aide d'AbstractUser. De plus, il souligne l'importance des tests, fournit des commandes pour exécuter des tests et créer un superutilisateur, et se termine par une configuration réussie de l'environnement du projet.",
                // Japanese
                "日本語": "Bookstore Project の第 4 章では、Docker と PostgreSQL を使用したプロジェクトのセットアップ、カスタム ユーザー モデルの実装、テストの実行に重点が置かれています。この章では、Dockerfile と docker-compose.yml ファイルの作成、Django 設定での PostgreSQL データベースの構成、AbstractUser を使用したカスタム ユーザー モデルの確立のプロセスについて詳しく説明します。さらに、テストの重要性を強調し、テストの実行とスーパーユーザーの作成のためのコマンドを提供し、プロジェクト環境のセットアップを成功させることで締めくくっています。",
                // Korean
                "한국인": "Bookstore Project의 4장에서는 Docker와 PostgreSQL로 프로젝트를 설정하고, 사용자 정의 사용자 모델을 구현하고, 테스트를 실행하는 데 중점을 둡니다. 이 장에서는 Dockerfile과 docker-compose.yml 파일을 만들고, Django 설정에서 PostgreSQL 데이터베이스를 구성하고, AbstractUser를 사용하여 사용자 정의 사용자 모델을 설정하는 프로세스를 자세히 설명합니다. 또한 테스트의 중요성을 강조하고, 테스트를 실행하고 슈퍼유저를 만드는 명령을 제공하며, 프로젝트 환경을 성공적으로 설정하는 것으로 마무리합니다.",
                // Spanish
                "Español": "En el Capítulo 4 del Proyecto Bookstore, el enfoque está puesto en configurar el proyecto con Docker y PostgreSQL, implementar un modelo de usuario personalizado y ejecutar pruebas. El capítulo detalla el proceso de creación de un Dockerfile y un archivo docker-compose.yml, configurar la base de datos PostgreSQL en los ajustes de Django y establecer un modelo de usuario personalizado utilizando AbstractUser. Además, enfatiza la importancia de las pruebas, proporciona comandos para ejecutar pruebas y crear un superusuario, y concluye con una configuración exitosa del entorno del proyecto.",
                // Hindi
                "हिंदी": "बुकस्टोर प्रोजेक्ट के अध्याय 4 में, डॉकर और पोस्टग्रेएसक्यूएल के साथ प्रोजेक्ट को स्थापित करने, एक कस्टम उपयोगकर्ता मॉडल को लागू करने और परीक्षण चलाने पर ध्यान केंद्रित किया गया है। अध्याय में डॉकरफ़ाइल और डॉकर-कंपोज़.yml फ़ाइल बनाने, Django सेटिंग्स में PostgreSQL डेटाबेस को कॉन्फ़िगर करने और AbstractUser का उपयोग करके एक कस्टम उपयोगकर्ता मॉडल स्थापित करने की प्रक्रिया का विवरण दिया गया है। इसके अतिरिक्त, यह परीक्षण के महत्व पर जोर देता है, परीक्षण चलाने और सुपरयूज़र बनाने के लिए कमांड प्रदान करता है, और प्रोजेक्ट वातावरण के सफल सेटअप के साथ समाप्त होता है।",
                // Portuguese
                "Português": "No Capítulo 4 do Projeto Bookstore, o foco está na configuração do projeto com Docker e PostgreSQL, na implementação de um modelo de utilizador personalizado e na execução de testes. O capítulo detalha o processo de criação de um ficheiro Dockerfile e docker-compose. yml, configuração da base de dados PostgreSQL nas definições do Django e estabelecimento de um modelo de utilizador personalizado utilizando o AbstractUser. Além disso, enfatiza a importância dos testes, fornece comandos para executar testes e criar um superutilizador e conclui com uma configuração bem-sucedida do ambiente do projeto.",
                // Bengali
                "বাংলা": "বুকস্টোর প্রকল্পের অধ্যায় 4-এ, ডকার এবং পোস্টগ্রেএসকিউএল-এর সাথে প্রকল্পটি সেট আপ করা, একটি কাস্টম ব্যবহারকারী মডেল বাস্তবায়ন এবং পরীক্ষা চালানোর উপর ফোকাস করা হয়েছে। অধ্যায়টি একটি Dockerfile এবং docker-compose.yml ফাইল তৈরি করার প্রক্রিয়া, জ্যাঙ্গো সেটিংসে PostgreSQL ডাটাবেস কনফিগার করার এবং AbstractUser ব্যবহার করে একটি কাস্টম ব্যবহারকারী মডেল প্রতিষ্ঠা করার প্রক্রিয়ার বিবরণ দেয়। অতিরিক্তভাবে, এটি পরীক্ষার গুরুত্বের উপর জোর দেয়, পরীক্ষা চালানোর জন্য কমান্ড প্রদান করে এবং একটি সুপার ইউজার তৈরি করে এবং প্রকল্পের পরিবেশের একটি সফল সেটআপ দিয়ে শেষ হয়।",
                // Arabic
                "عَرَبِيّ": "في الفصل الرابع من مشروع Bookstore، يركز الفصل على إعداد المشروع باستخدام Docker وPostgreSQL، وتنفيذ نموذج مستخدم مخصص، وتشغيل الاختبارات. يوضح الفصل بالتفصيل عملية إنشاء ملف Dockerfile وdocker-compose.yml، وتكوين قاعدة بيانات PostgreSQL في إعدادات Django، وإنشاء نموذج مستخدم مخصص باستخدام AbstractUser. بالإضافة إلى ذلك، يؤكد على أهمية الاختبار، ويوفر أوامر لتشغيل الاختبارات وإنشاء مستخدم خارق، ويختتم بإعداد ناجح لبيئة المشروع.",
                // Persian
                "فارسی": "در فصل 4 پروژه کتابفروشی، تمرکز بر راه‌اندازی پروژه با Docker و PostgreSQL، پیاده‌سازی یک مدل کاربر سفارشی و اجرای آزمایش‌ها است. این فصل به جزئیات فرآیند ایجاد یک فایل Dockerfile و docker-compose.yml، پیکربندی پایگاه داده PostgreSQL در تنظیمات جنگو و ایجاد یک مدل کاربر سفارشی با استفاده از AbstractUser می‌پردازد. علاوه بر این، بر اهمیت آزمایش تأکید می‌کند، دستوراتی را برای اجرای آزمایش‌ها و ایجاد یک ابرکاربر ارائه می‌دهد و با راه‌اندازی موفق محیط پروژه به پایان می‌رسد.",
            },
        },
        // 5
        {
            "ChapterName": "Pages App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In Chapter 5 of the Django project, a static homepage was created within a dedicated app, involving the setup of base and homepage templates ( and ). The chapter covered the necessary configurations in and to handle routing and rendering of the homepage, while also highlighting the importance of rigorous testing through the implementation of unit tests using . The chapter concluded by emphasizing the significance of maintaining a tested codebase and introduced the upcoming focus on user registration features in the next chapter.",
                // German
                "Deutsch": "In Kapitel 5 des Django-Projekts wurde eine statische Homepage innerhalb einer dedizierten App erstellt, wobei Basis- und Homepage-Vorlagen ( und ) eingerichtet wurden. Das Kapitel behandelte die notwendigen Konfigurationen in und zur Handhabung des Routings und Renderings der Homepage und betonte gleichzeitig die Bedeutung strenger Tests durch die Implementierung von Unit-Tests mit . Das Kapitel schloss mit der Betonung der Bedeutung der Aufrechterhaltung einer getesteten Codebasis und stellte den bevorstehenden Fokus auf Benutzerregistrierungsfunktionen im nächsten Kapitel vor.",
                // Chinese
                "中国人": "在 Django 项目的第 5 章中，我们在专用应用中创建了一个静态主页，其中涉及基础模板和主页模板（和）的设置。本章介绍了和中处理主页路由和渲染所需的配置，同时还强调了通过使用实施单元测试进行严格测试的重要性。本章最后强调了维护经过测试的代码库的重要性，并介绍了下一章即将重点介绍的用户注册功能。",
                // Russian
                "Русский": "В главе 5 проекта Django была создана статическая домашняя страница в рамках выделенного приложения, включающего настройку базовых и домашних шаблонов ( и ). В главе были рассмотрены необходимые конфигурации в и для обработки маршрутизации и рендеринга домашней страницы, а также подчеркивалась важность тщательного тестирования посредством реализации модульных тестов с использованием . Глава завершилась подчеркиванием важности поддержания протестированной кодовой базы и введением предстоящего внимания к функциям регистрации пользователей в следующей главе.",
                // French
                "Français": "Dans le chapitre 5 du projet Django, une page d'accueil statique a été créée au sein d'une application dédiée, impliquant la configuration de modèles de base et de page d'accueil ( et ). Le chapitre a couvert les configurations nécessaires dans et pour gérer le routage et le rendu de la page d'accueil, tout en soulignant l'importance de tests rigoureux grâce à la mise en œuvre de tests unitaires à l'aide de . Le chapitre a conclu en soulignant l'importance de maintenir une base de code testée et a présenté l'accent à venir sur les fonctionnalités d'enregistrement des utilisateurs dans le chapitre suivant.",
                // Japanese
                "日本語": "Django プロジェクトの第 5 章では、ベース テンプレートとホームページ テンプレート (および) の設定を含む、専用アプリ内に静的ホームページが作成されました。この章では、ホームページのルーティングとレンダリングを処理するための と の必要な構成について説明し、 を使用した単体テストの実装による厳密なテストの重要性についても説明しました。この章の最後には、テスト済みのコードベースを維持することの重要性を強調し、次の章でユーザー登録機能に重点を置くことを紹介しました。",
                // Korean
                "한국인": "Django 프로젝트의 5장에서는 전용 앱 내에 정적 홈페이지를 만들었으며, 여기에는 기본 및 홈페이지 템플릿( 및 ) 설정이 포함되었습니다. 이 장에서는 홈페이지의 라우팅 및 렌더링을 처리하는 데 필요한 구성과 를 다루었으며, 를 사용하여 단위 테스트를 구현하여 엄격한 테스트의 중요성도 강조했습니다. 이 장은 테스트된 코드베이스를 유지하는 것의 중요성을 강조하며 결론을 내리고, 다음 장에서 사용자 등록 기능에 중점을 둘 것을 소개했습니다.",
                // Spanish
                "Español": "En el Capítulo 5 del proyecto Django, se creó una página de inicio estática dentro de una aplicación dedicada, lo que implicó la configuración de plantillas base y de página de inicio ( y ). El capítulo cubrió las configuraciones necesarias en y para manejar el enrutamiento y la representación de la página de inicio, al mismo tiempo que destacó la importancia de las pruebas rigurosas a través de la implementación de pruebas unitarias utilizando . El capítulo concluyó enfatizando la importancia de mantener una base de código probada y presentó el enfoque futuro en las funciones de registro de usuarios en el próximo capítulo.",
                // Hindi
                "हिंदी": "Django प्रोजेक्ट के अध्याय 5 में, एक समर्पित ऐप के भीतर एक स्थिर होमपेज बनाया गया था, जिसमें बेस और होमपेज टेम्पलेट्स ( और ) की स्थापना शामिल थी। अध्याय में होमपेज की रूटिंग और रेंडरिंग को संभालने के लिए और में आवश्यक कॉन्फ़िगरेशन को शामिल किया गया, साथ ही का उपयोग करके यूनिट परीक्षणों के कार्यान्वयन के माध्यम से कठोर परीक्षण के महत्व पर प्रकाश डाला गया। अध्याय का समापन एक परीक्षण किए गए कोडबेस को बनाए रखने के महत्व पर जोर देकर किया गया और अगले अध्याय में उपयोगकर्ता पंजीकरण सुविधाओं पर आगामी फोकस पेश किया गया।",
                // Portuguese
                "Português": "No Capítulo 5 do projeto Django, foi criada uma página inicial estática dentro de uma aplicação dedicada, envolvendo a configuração dos modelos base e da página inicial ( e ). O capítulo abordou as configurações necessárias para lidar com o encaminhamento e renderização da página inicial, ao mesmo tempo que destacou a importância de testes rigorosos através da implementação de testes unitários utilizando . O capítulo foi concluído enfatizando a importância de manter uma base de código testada e introduziu o próximo foco nas capacidades de registo de utilizadores no próximo capítulo.",
                // Bengali
                "বাংলা": "জ্যাঙ্গো প্রজেক্টের অধ্যায় 5-এ, একটি ডেডিকেটেড অ্যাপের মধ্যে একটি স্ট্যাটিক হোমপেজ তৈরি করা হয়েছে, যার মধ্যে বেস এবং হোমপেজ টেমপ্লেট (এবং) সেটআপ করা হয়েছে। অধ্যায়টি হোমপেজের রাউটিং এবং রেন্ডারিং পরিচালনা করার জন্য প্রয়োজনীয় কনফিগারেশনগুলিকে কভার করেছে, পাশাপাশি ইউনিট পরীক্ষার বাস্তবায়নের মাধ্যমে কঠোর পরীক্ষার গুরুত্ব তুলে ধরেছে। একটি পরীক্ষিত কোডবেস বজায় রাখার তাৎপর্যের উপর জোর দিয়ে অধ্যায়টি শেষ হয়েছে এবং পরবর্তী অধ্যায়ে ব্যবহারকারীর নিবন্ধন বৈশিষ্ট্যের উপর আসন্ন ফোকাস চালু করেছে।",
                // Arabic
                "عَرَبِيّ": "في الفصل الخامس من مشروع Django، تم إنشاء صفحة رئيسية ثابتة داخل تطبيق مخصص، بما في ذلك إعداد قوالب القاعدة والصفحة الرئيسية ( و ). غطى الفصل التكوينات اللازمة في و للتعامل مع التوجيه وتقديم الصفحة الرئيسية، مع تسليط الضوء أيضًا على أهمية الاختبار الدقيق من خلال تنفيذ اختبارات الوحدة باستخدام . واختتم الفصل بالتأكيد على أهمية الحفاظ على قاعدة بيانات تم اختبارها وقدم التركيز القادم على ميزات تسجيل المستخدم في الفصل التالي.",
                // Persian
                "فارسی": "در فصل 5 پروژه جنگو، یک صفحه اصلی ثابت در یک برنامه اختصاصی ایجاد شد که شامل تنظیم قالب های پایه و صفحه اصلی (و) می شود. این فصل پیکربندی‌های لازم را در مسیریابی و ارائه صفحه اصلی و همچنین بر اهمیت آزمایش دقیق از طریق اجرای آزمایش‌های واحد با استفاده از . این فصل با تأکید بر اهمیت حفظ یک پایگاه کد آزمایش شده به پایان رسید و تمرکز آتی بر روی ویژگی های ثبت کاربر در فصل بعدی معرفی شد.",
            },
        },
        // 6
        {
            "ChapterName": "User Registration",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 6 focuses on implementing user registration features in a Django-based Bookstore project, including login, logout, and signup functionalities. It utilizes Django's built-in auth app for the login and logout processes, while the signup process requires custom implementation through a . The chapter also covers setting up URLs, templates, and testing the signup functionality, ultimately leading to a functional user registration system that redirects users appropriately upon login and signup.",
                // German
                "Deutsch": "Kapitel 6 konzentriert sich auf die Implementierung von Benutzerregistrierungsfunktionen in einem Django-basierten Bookstore-Projekt, einschließlich Anmelde-, Abmelde- und Registrierungsfunktionen. Es verwendet die integrierte Authentifizierungs-App von Django für die Anmelde- und Abmeldeprozesse, während der Registrierungsprozess eine benutzerdefinierte Implementierung über ein erfordert. Das Kapitel behandelt auch das Einrichten von URLs, Vorlagen und das Testen der Registrierungsfunktion, was letztendlich zu einem funktionsfähigen Benutzerregistrierungssystem führt, das Benutzer bei der Anmeldung und Registrierung entsprechend umleitet.",
                // Chinese
                "中国人": "第 6 章重点介绍如何在基于 Django 的 Bookstore 项目中实现用户注册功能，包括登录、注销和注册功能。它利用 Django 的内置身份验证应用程序进行登录和注销过程，而注册过程则需要通过 进行自定义实现。本章还介绍了设置 URL、模板和测试注册功能，最终形成一个功能齐全的用户注册系统，该系统可在用户登录和注册时适当地重定向用户。",
                // Russian
                "Русский": "Глава 6 посвящена реализации функций регистрации пользователей в проекте Bookstore на основе Django, включая функции входа, выхода и регистрации. Для процессов входа и выхода используется встроенное приложение аутентификации Django, тогда как процесс регистрации требует индивидуальной реализации через . В главе также рассматривается настройка URL-адресов, шаблонов и тестирование функций регистрации, что в конечном итоге приводит к функциональной системе регистрации пользователей, которая перенаправляет пользователей соответствующим образом при входе и регистрации.",
                // French
                "Français": "Le chapitre 6 se concentre sur l'implémentation des fonctionnalités d'enregistrement des utilisateurs dans un projet Bookstore basé sur Django, notamment les fonctionnalités de connexion, de déconnexion et d'inscription. Il utilise l'application d'authentification intégrée de Django pour les processus de connexion et de déconnexion, tandis que le processus d'inscription nécessite une implémentation personnalisée via un . Le chapitre couvre également la configuration des URL, des modèles et le test de la fonctionnalité d'inscription, ce qui conduit finalement à un système d'enregistrement des utilisateurs fonctionnel qui redirige les utilisateurs de manière appropriée lors de la connexion et de l'inscription.",
                // Japanese
                "日本語": "第 6 章では、ログイン、ログアウト、サインアップ機能など、Django ベースの Bookstore プロジェクトでのユーザー登録機能の実装に焦点を当てています。ログインとログアウトのプロセスには Django の組み込み認証アプリを利用しますが、サインアップ プロセスには によるカスタム実装が必要です。この章では、URL とテンプレートの設定、サインアップ機能のテストについても説明し、最終的にはログインとサインアップ時にユーザーを適切にリダイレクトする機能的なユーザー登録システムの構築につなげます。",
                // Korean
                "한국인": "6장은 로그인, 로그아웃, 가입 기능을 포함한 Django 기반 Bookstore 프로젝트에서 사용자 등록 기능을 구현하는 데 중점을 둡니다. 로그인 및 로그아웃 프로세스에는 Django의 기본 제공 인증 앱을 활용하는 반면, 가입 프로세스에는 .을 통한 사용자 지정 구현이 필요합니다. 이 장에서는 URL, 템플릿 설정, 가입 기능 테스트도 다루며, 궁극적으로 로그인 및 가입 시 사용자를 적절하게 리디렉션하는 기능적 사용자 등록 시스템을 구축합니다.",
                // Spanish
                "Español": "El capítulo 6 se centra en la implementación de funciones de registro de usuarios en un proyecto de Bookstore basado en Django, incluidas las funcionalidades de inicio de sesión, cierre de sesión y registro. Utiliza la aplicación de autenticación integrada de Django para los procesos de inicio de sesión y cierre de sesión, mientras que el proceso de registro requiere una implementación personalizada a través de un . El capítulo también cubre la configuración de URL, plantillas y la prueba de la funcionalidad de registro, lo que finalmente conduce a un sistema de registro de usuarios funcional que redirige a los usuarios de manera adecuada al iniciar sesión y registrarse.",
                // Hindi
                "हिंदी": "अध्याय 6 में Django-आधारित बुकस्टोर परियोजना में उपयोगकर्ता पंजीकरण सुविधाओं को लागू करने पर ध्यान केंद्रित किया गया है, जिसमें लॉगिन, लॉगआउट और साइनअप कार्यक्षमताएं शामिल हैं। यह लॉगिन और लॉगआउट प्रक्रियाओं के लिए Django के अंतर्निहित प्रमाणीकरण ऐप का उपयोग करता है, जबकि साइनअप प्रक्रिया के लिए कस्टम कार्यान्वयन की आवश्यकता होती है। अध्याय में URL, टेम्प्लेट सेट अप करना और साइनअप कार्यक्षमता का परीक्षण करना भी शामिल है, जो अंततः एक कार्यात्मक उपयोगकर्ता पंजीकरण प्रणाली की ओर ले जाता है जो उपयोगकर्ताओं को लॉगिन और साइनअप पर उचित रूप से पुनर्निर्देशित करता है।",
                // Portuguese
                "Português": "O Capítulo 6 centra-se na implementação de funcionalidades de registo de utilizadores num projeto Bookstore baseado em Django, incluindo funcionalidades de login, logout e subscrição. Utiliza a aplicação de autenticação integrada do Django para os processos de login e logout, enquanto o processo de inscrição requer uma implementação personalizada através de um ficheiro . O capítulo aborda também a configuração de URLs, modelos e o teste da funcionalidade de inscrição, levando, em última análise, a um sistema funcional de registo de utilizadores que redireciona os utilizadores adequadamente no momento do login e da inscrição.",
                // Bengali
                "বাংলা": "অধ্যায় 6 একটি জ্যাঙ্গো-ভিত্তিক বুকস্টোর প্রকল্পে ব্যবহারকারীর নিবন্ধন বৈশিষ্ট্যগুলি বাস্তবায়নের উপর ফোকাস করে, লগইন, লগআউট এবং সাইনআপ কার্যকারিতা সহ। এটি লগইন এবং লগআউট প্রক্রিয়ার জন্য Django-এর অন্তর্নির্মিত প্রমাণীকরণ অ্যাপ ব্যবহার করে, যখন সাইনআপ প্রক্রিয়ার জন্য একটি এর মাধ্যমে কাস্টম বাস্তবায়ন প্রয়োজন। অধ্যায়টি ইউআরএল, টেমপ্লেট সেট আপ করা এবং সাইনআপ কার্যকারিতা পরীক্ষা করাও কভার করে, যা শেষ পর্যন্ত একটি কার্যকরী ব্যবহারকারী নিবন্ধন ব্যবস্থার দিকে নিয়ে যায় যা ব্যবহারকারীদের লগইন এবং সাইনআপের সময় যথাযথভাবে পুনঃনির্দেশ করে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل السادس على تنفيذ ميزات تسجيل المستخدم في مشروع Bookstore المستند إلى Django، بما في ذلك وظائف تسجيل الدخول وتسجيل الخروج والتسجيل. ويستخدم تطبيق المصادقة المدمج في Django لعمليات تسجيل الدخول وتسجيل الخروج، بينما تتطلب عملية التسجيل تنفيذًا مخصصًا من خلال . يغطي الفصل أيضًا إعداد عناوين URL والقوالب واختبار وظيفة التسجيل، مما يؤدي في النهاية إلى نظام تسجيل مستخدم وظيفي يعيد توجيه المستخدمين بشكل مناسب عند تسجيل الدخول والتسجيل.",
                // Persian
                "فارسی": "فصل 6 بر پیاده سازی ویژگی های ثبت نام کاربر در پروژه کتابفروشی مبتنی بر جنگو، از جمله عملکردهای ورود، خروج و ثبت نام تمرکز دارد. این برنامه از برنامه احراز هویت داخلی جنگو برای فرآیندهای ورود و خروج استفاده می کند، در حالی که فرآیند ثبت نام به پیاده سازی سفارشی از طریق یک . این فصل همچنین راه‌اندازی URLها، قالب‌ها و آزمایش عملکرد ثبت‌نام را پوشش می‌دهد، که در نهایت منجر به یک سیستم ثبت نام کاربر می‌شود که کاربران را به‌طور مناسب پس از ورود و ثبت‌نام هدایت می‌کند.",
            },
        },
        // 7
        {
            "ChapterName": "Static Assets",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 7 focuses on the implementation and management of static assets in a Django web application, emphasizing the importance of CSS, JavaScript, and images for enhancing user experience. It guides users through configuring static files in Django, integrating Bootstrap for responsive design, and cleaning up HTML templates for better organization. Additionally, the chapter covers testing newly created pages, such as the About page, and highlights the necessity of version control with Git to track changes made during development.",
                // German
                "Deutsch": "Kapitel 7 konzentriert sich auf die Implementierung und Verwaltung statischer Assets in einer Django-Webanwendung und betont die Bedeutung von CSS, JavaScript und Bildern zur Verbesserung der Benutzererfahrung. Es führt Benutzer durch die Konfiguration statischer Dateien in Django, die Integration von Bootstrap für responsives Design und die Bereinigung von HTML-Vorlagen für eine bessere Organisation. Darüber hinaus behandelt das Kapitel das Testen neu erstellter Seiten, wie z. B. der Info-Seite, und betont die Notwendigkeit der Versionskontrolle mit Git, um während der Entwicklung vorgenommene Änderungen zu verfolgen.",
                // Chinese
                "中国人": "第 7 章重点介绍 Django Web 应用程序中静态资产的实现和管理，强调 CSS、JavaScript 和图像对于增强用户体验的重要性。它指导用户在 Django 中配置静态文件、集成 Bootstrap 以实现响应式设计以及清理 HTML 模板以实现更好的组织。此外，本章还介绍了测试新创建的页面（例如“关于”页面），并强调了使用 Git 进行版本控制以跟踪开发过程中所做的更改的必要性。",
                // Russian
                "Русский": "Глава 7 фокусируется на внедрении и управлении статическими активами в веб-приложении Django, подчеркивая важность CSS, JavaScript и изображений для улучшения пользовательского опыта. Она проводит пользователей через настройку статических файлов в Django, интеграцию Bootstrap для адаптивного дизайна и очистку HTML-шаблонов для лучшей организации. Кроме того, глава охватывает тестирование новых созданных страниц, таких как страница «О нас», и подчеркивает необходимость контроля версий с помощью Git для отслеживания изменений, внесенных во время разработки.",
                // French
                "Français": "Le chapitre 7 se concentre sur l'implémentation et la gestion des ressources statiques dans une application Web Django, en soulignant l'importance de CSS, JavaScript et des images pour améliorer l'expérience utilisateur. Il guide les utilisateurs dans la configuration des fichiers statiques dans Django, l'intégration de Bootstrap pour une conception réactive et le nettoyage des modèles HTML pour une meilleure organisation. De plus, le chapitre couvre les tests des pages nouvellement créées, telles que la page À propos, et souligne la nécessité du contrôle de version avec Git pour suivre les modifications apportées pendant le développement.",
                // Japanese
                "日本語": "第 7 章では、Django Web アプリケーションでの静的アセットの実装と管理に焦点を当て、ユーザー エクスペリエンスを向上させるための CSS、JavaScript、および画像の重要性を強調しています。Django での静的ファイルの構成、レスポンシブ デザインのための Bootstrap の統合、整理を改善するために HTML テンプレートをクリーンアップする方法についてユーザーをガイドします。さらに、この章では、About ページなどの新しく作成されたページのテストについて説明し、開発中に行われた変更を追跡するために Git を使用したバージョン管理の必要性を強調しています。",
                // Korean
                "한국인": "7장은 Django 웹 애플리케이션에서 정적 자산의 구현 및 관리에 초점을 맞추고, 사용자 경험을 향상시키기 위한 CSS, JavaScript 및 이미지의 중요성을 강조합니다. Django에서 정적 파일을 구성하고, 반응형 디자인을 위해 Bootstrap을 통합하고, 더 나은 구성을 위해 HTML 템플릿을 정리하는 방법을 사용자에게 안내합니다. 또한 이 장에서는 About 페이지와 같은 새로 생성된 페이지를 테스트하는 방법을 다루고, 개발 중에 변경된 사항을 추적하기 위해 Git을 사용한 버전 제어의 필요성을 강조합니다.",
                // Spanish
                "Español": "El capítulo 7 se centra en la implementación y la gestión de activos estáticos en una aplicación web de Django, haciendo hincapié en la importancia de CSS, JavaScript e imágenes para mejorar la experiencia del usuario. Guía a los usuarios a través de la configuración de archivos estáticos en Django, la integración de Bootstrap para un diseño responsivo y la limpieza de plantillas HTML para una mejor organización. Además, el capítulo cubre la prueba de páginas recién creadas, como la página Acerca de, y destaca la necesidad del control de versiones con Git para realizar un seguimiento de los cambios realizados durante el desarrollo.",
                // Hindi
                "हिंदी": "अध्याय 7 Django वेब एप्लिकेशन में स्थिर संपत्तियों के कार्यान्वयन और प्रबंधन पर ध्यान केंद्रित करता है, जो उपयोगकर्ता अनुभव को बढ़ाने के लिए CSS, जावास्क्रिप्ट और छवियों के महत्व पर जोर देता है। यह Django में स्थिर फ़ाइलों को कॉन्फ़िगर करने, उत्तरदायी डिज़ाइन के लिए बूटस्ट्रैप को एकीकृत करने और बेहतर संगठन के लिए HTML टेम्प्लेट को साफ करने के माध्यम से उपयोगकर्ताओं का मार्गदर्शन करता है। इसके अतिरिक्त, अध्याय में नए बनाए गए पृष्ठों, जैसे कि About पेज का परीक्षण करना शामिल है, और विकास के दौरान किए गए परिवर्तनों को ट्रैक करने के लिए Git के साथ संस्करण नियंत्रण की आवश्यकता पर प्रकाश डाला गया है।",
                // Portuguese
                "Português": "O Capítulo 7 centra-se na implementação e gestão de ativos estáticos numa aplicação web Django, enfatizando a importância do CSS, JavaScript e imagens para melhorar a experiência do utilizador. Orienta os utilizadores na configuração de ficheiros estáticos no Django, integrando o Bootstrap para design responsivo e limpando modelos HTML para uma melhor organização. Além disso, o capítulo aborda o teste de páginas recém-criadas, como a página Acerca de, e destaca a necessidade de controlo de versão com Git para acompanhar as alterações feitas durante o desenvolvimento.",
                // Bengali
                "বাংলা": "অধ্যায় 7 একটি জ্যাঙ্গো ওয়েব অ্যাপ্লিকেশনে স্ট্যাটিক সম্পদের বাস্তবায়ন এবং পরিচালনার উপর ফোকাস করে, ব্যবহারকারীর অভিজ্ঞতা বাড়ানোর জন্য CSS, জাভাস্ক্রিপ্ট এবং চিত্রগুলির গুরুত্বের উপর জোর দেয়। এটি জ্যাঙ্গোতে স্ট্যাটিক ফাইল কনফিগার করার মাধ্যমে, প্রতিক্রিয়াশীল ডিজাইনের জন্য বুটস্ট্র্যাপকে একীভূত করার এবং আরও ভালো সংগঠনের জন্য HTML টেমপ্লেট পরিষ্কার করার মাধ্যমে ব্যবহারকারীদের গাইড করে। অতিরিক্তভাবে, অধ্যায়টি নতুন তৈরি করা পৃষ্ঠাগুলির পরীক্ষা কভার করে, যেমন সম্পর্কে পৃষ্ঠা, এবং বিকাশের সময় করা পরিবর্তনগুলি ট্র্যাক করার জন্য Git-এর সাথে সংস্করণ নিয়ন্ত্রণের প্রয়োজনীয়তা তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل السابع على تنفيذ وإدارة الأصول الثابتة في تطبيق ويب Django، مع التأكيد على أهمية CSS وJavaScript والصور لتحسين تجربة المستخدم. كما يرشد المستخدمين خلال تكوين الملفات الثابتة في Django، ودمج Bootstrap للتصميم المستجيب، وتنظيف قوالب HTML لتحسين التنظيم. بالإضافة إلى ذلك، يغطي الفصل اختبار الصفحات التي تم إنشاؤها حديثًا، مثل صفحة About، ويسلط الضوء على ضرورة التحكم في الإصدار باستخدام Git لتتبع التغييرات التي تم إجراؤها أثناء التطوير.",
                // Persian
                "فارسی": "فصل 7 بر پیاده سازی و مدیریت دارایی های ثابت در یک برنامه وب جنگو تمرکز دارد و بر اهمیت CSS، جاوا اسکریپت و تصاویر برای افزایش تجربه کاربر تاکید می کند. کاربران را از طریق پیکربندی فایل‌های استاتیک در جنگو، ادغام Bootstrap برای طراحی واکنش‌گرا و تمیز کردن قالب‌های HTML برای سازماندهی بهتر راهنمایی می‌کند. علاوه بر این، این فصل آزمایش صفحات جدید ایجاد شده، مانند صفحه درباره، را پوشش می دهد و لزوم کنترل نسخه با Git را برای ردیابی تغییرات ایجاد شده در طول توسعه برجسته می کند.",
            },
        },
        // 8
        {
            "ChapterName": "Advanced User Registration",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 8 focuses on advanced user registration in Django, highlighting the implementation of a standard user registration flow that can be extended to include social authentication using the django-allauth package. It discusses the customization of the authentication process, such as simplifying the sign-up requirements to just email and password, and the importance of security in user registration. Additionally, it covers updates to the admin interface, log in and log out processes, and the customization of templates to enhance user experience.",
                // German
                "Deutsch": "Kapitel 8 konzentriert sich auf die erweiterte Benutzerregistrierung in Django und beleuchtet die Implementierung eines standardmäßigen Benutzerregistrierungsablaufs, der mithilfe des Pakets django-allauth um die soziale Authentifizierung erweitert werden kann. Es behandelt die Anpassung des Authentifizierungsprozesses, beispielsweise die Vereinfachung der Anmeldeanforderungen auf nur E-Mail und Passwort, und die Bedeutung der Sicherheit bei der Benutzerregistrierung. Darüber hinaus werden Aktualisierungen der Administratoroberfläche, Anmelde- und Abmeldeprozesse sowie die Anpassung von Vorlagen zur Verbesserung der Benutzererfahrung behandelt.",
                // Chinese
                "中国人": "第 8 章重点介绍 Django 中的高级用户注册，重点介绍标准用户注册流程的实现，该流程可以使用 django-allauth 包进行扩展以包含社交身份验证。它讨论了身份验证过程的自定义，例如将注册要求简化为仅电子邮件和密码，以及用户注册中安全性的重要性。此外，它还介绍了管理界面的更新、登录和注销流程以及模板的自定义以增强用户体验。",
                // Russian
                "Русский": "Глава 8 посвящена расширенной регистрации пользователей в Django, подчеркивая реализацию стандартного потока регистрации пользователей, который может быть расширен для включения социальной аутентификации с помощью пакета django-allauth. В ней обсуждается настройка процесса аутентификации, например, упрощение требований к регистрации до простого адреса электронной почты и пароля, а также важность безопасности при регистрации пользователей. Кроме того, в ней рассматриваются обновления интерфейса администратора, процессы входа и выхода из системы, а также настройка шаблонов для улучшения пользовательского опыта.",
                // French
                "Français": "Le chapitre 8 se concentre sur l'enregistrement avancé des utilisateurs dans Django, en soulignant l'implémentation d'un flux d'enregistrement d'utilisateur standard qui peut être étendu pour inclure l'authentification sociale à l'aide du package django-allauth. Il aborde la personnalisation du processus d'authentification, comme la simplification des exigences d'inscription à l'e-mail et au mot de passe uniquement, et l'importance de la sécurité dans l'enregistrement des utilisateurs. En outre, il couvre les mises à jour de l'interface d'administration, les processus de connexion et de déconnexion, ainsi que la personnalisation des modèles pour améliorer l'expérience utilisateur.",
                // Japanese
                "日本語": "第 8 章では、Django での高度なユーザー登録に焦点を当て、django-allauth パッケージを使用してソーシャル認証を含めるように拡張できる標準ユーザー登録フローの実装について説明します。サインアップ要件を電子メールとパスワードだけに簡素化するなど、認証プロセスのカスタマイズと、ユーザー登録におけるセキュリティの重要性について説明します。さらに、管理インターフェイスの更新、ログインおよびログアウト プロセス、およびユーザー エクスペリエンスを向上させるテンプレートのカスタマイズについても説明します。",
                // Korean
                "한국인": "8장은 Django의 고급 사용자 등록에 초점을 맞추고, django-allauth 패키지를 사용하여 소셜 인증을 포함하도록 확장할 수 있는 표준 사용자 등록 흐름의 구현을 강조합니다. 이메일과 비밀번호로 가입 요구 사항을 단순화하는 것과 같은 인증 프로세스의 사용자 정의와 사용자 등록에서 보안의 중요성에 대해 설명합니다. 또한 관리자 인터페이스, 로그인 및 로그아웃 프로세스에 대한 업데이트와 사용자 경험을 향상시키기 위한 템플릿 사용자 정의에 대해 다룹니다.",
                // Spanish
                "Español": "El capítulo 8 se centra en el registro avanzado de usuarios en Django, destacando la implementación de un flujo de registro de usuarios estándar que se puede ampliar para incluir la autenticación social mediante el paquete django-allauth. Se analiza la personalización del proceso de autenticación, como la simplificación de los requisitos de registro a solo correo electrónico y contraseña, y la importancia de la seguridad en el registro de usuarios. Además, cubre las actualizaciones de la interfaz de administración, los procesos de inicio y cierre de sesión y la personalización de plantillas para mejorar la experiencia del usuario.",
                // Hindi
                "हिंदी": "अध्याय 8 Django में उन्नत उपयोगकर्ता पंजीकरण पर केंद्रित है, जो एक मानक उपयोगकर्ता पंजीकरण प्रवाह के कार्यान्वयन पर प्रकाश डालता है जिसे django-allauth पैकेज का उपयोग करके सामाजिक प्रमाणीकरण को शामिल करने के लिए बढ़ाया जा सकता है। यह प्रमाणीकरण प्रक्रिया के अनुकूलन पर चर्चा करता है, जैसे कि साइन-अप आवश्यकताओं को केवल ईमेल और पासवर्ड तक सरल बनाना, और उपयोगकर्ता पंजीकरण में सुरक्षा का महत्व। इसके अतिरिक्त, यह व्यवस्थापक इंटरफ़ेस, लॉग इन और लॉग आउट प्रक्रियाओं के अपडेट और उपयोगकर्ता अनुभव को बढ़ाने के लिए टेम्पलेट्स के अनुकूलन को कवर करता है।",
                // Portuguese
                "Português": "O Capítulo 8 centra-se no registo avançado de utilizadores no Django, destacando a implementação de um fluxo de registo de utilizadores padrão que pode ser estendido para incluir a autenticação social utilizando o pacote django-allauth. Discute a personalização do processo de autenticação, como a simplificação dos requisitos de inscrição para apenas e-mail e palavra-passe, e a importância da segurança no registo do utilizador. Além disso, abrange atualizações na interface administrativa, processos de login e logout e personalização de modelos para melhorar a experiência do utilizador.",
                // Bengali
                "বাংলা": "অধ্যায় 8 জ্যাঙ্গোতে উন্নত ব্যবহারকারী নিবন্ধনের উপর দৃষ্টি নিবদ্ধ করে, একটি স্ট্যান্ডার্ড ব্যবহারকারী নিবন্ধন প্রবাহের বাস্তবায়নকে হাইলাইট করে যা django-allauth প্যাকেজ ব্যবহার করে সামাজিক প্রমাণীকরণ অন্তর্ভুক্ত করার জন্য প্রসারিত করা যেতে পারে। এটি প্রমাণীকরণ প্রক্রিয়ার কাস্টমাইজেশন নিয়ে আলোচনা করে, যেমন সাইন-আপের প্রয়োজনীয়তাগুলিকে শুধুমাত্র ইমেল এবং পাসওয়ার্ডের জন্য সহজ করা এবং ব্যবহারকারীর নিবন্ধনের ক্ষেত্রে নিরাপত্তার গুরুত্ব। উপরন্তু, এটি অ্যাডমিন ইন্টারফেসের আপডেট, লগ ইন এবং লগ আউট প্রক্রিয়া এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে টেমপ্লেটগুলির কাস্টমাইজেশন কভার করে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الثامن على تسجيل المستخدم المتقدم في Django، ويسلط الضوء على تنفيذ تدفق تسجيل المستخدم القياسي الذي يمكن توسيعه ليشمل المصادقة الاجتماعية باستخدام حزمة django-allauth. ويناقش تخصيص عملية المصادقة، مثل تبسيط متطلبات التسجيل إلى البريد الإلكتروني وكلمة المرور فقط، وأهمية الأمان في تسجيل المستخدم. بالإضافة إلى ذلك، يغطي تحديثات واجهة المسؤول، وعمليات تسجيل الدخول والخروج، وتخصيص القوالب لتحسين تجربة المستخدم.",
                // Persian
                "فارسی": "فصل 8 بر ثبت نام پیشرفته کاربر در جنگو متمرکز است و اجرای یک جریان استاندارد ثبت نام کاربر را برجسته می کند که می تواند برای احراز هویت اجتماعی با استفاده از بسته django-allauth گسترش یابد. در مورد سفارشی‌سازی فرآیند احراز هویت، مانند ساده‌سازی الزامات ثبت‌نام فقط به ایمیل و رمز عبور، و اهمیت امنیت در ثبت نام کاربر بحث می‌کند. علاوه بر این، به‌روزرسانی‌های رابط مدیریت، فرآیندهای ورود و خروج، و سفارشی‌سازی قالب‌ها برای بهبود تجربه کاربر را پوشش می‌دهد.",
            },
        },
        // 9
        {
            "ChapterName": "Environment Variables",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 9 discusses the importance of environment variables in Django projects, highlighting their role in enhancing security and simplifying the transition between local and production environments. By storing sensitive information like database credentials and API keys outside the codebase, environment variables help prevent accidental exposure through version control systems like Git. The chapter emphasizes that adopting environment variables is a best practice aligned with the Twelve-Factor App Design methodology, setting the stage for further configuration in subsequent chapters.",
                // German
                "Deutsch": "Kapitel 9 erörtert die Bedeutung von Umgebungsvariablen in Django-Projekten und hebt ihre Rolle bei der Verbesserung der Sicherheit und der Vereinfachung des Übergangs zwischen lokalen und Produktionsumgebungen hervor. Indem vertrauliche Informationen wie Datenbankanmeldeinformationen und API-Schlüssel außerhalb der Codebasis gespeichert werden, helfen Umgebungsvariablen dabei, eine versehentliche Offenlegung durch Versionskontrollsysteme wie Git zu verhindern. Das Kapitel betont, dass die Einführung von Umgebungsvariablen eine bewährte Methode ist, die mit der Zwölf-Faktor-App-Design-Methodik übereinstimmt, und bereitet die Grundlage für weitere Konfigurationen in den folgenden Kapiteln.",
                // Chinese
                "中国人": "第 9 章讨论了环境变量在 Django 项目中的重要性，强调了它们在增强安全性和简化本地环境与生产环境之间的转换方面的作用。通过将数据库凭据和 API 密钥等敏感信息存储在代码库之外，环境变量有助于防止通过 Git 等版本控制系统意外泄露。本章强调，采用环境变量是符合十二要素应用设计方法的最佳实践，为后续章节中的进一步配置奠定了基础。",
                // Russian
                "Русский": "Глава 9 обсуждает важность переменных окружения в проектах Django, подчеркивая их роль в повышении безопасности и упрощении перехода между локальной и производственной средой. Сохраняя конфиденциальную информацию, такую ​​как учетные данные базы данных и ключи API, вне кодовой базы, переменные окружения помогают предотвратить случайное раскрытие через системы контроля версий, такие как Git. В главе подчеркивается, что принятие переменных окружения является наилучшей практикой, соответствующей методологии проектирования приложений Двенадцати Факторов, что закладывает основу для дальнейшей настройки в последующих главах.",
                // French
                "Français": "Le chapitre 9 aborde l'importance des variables d'environnement dans les projets Django, en soulignant leur rôle dans l'amélioration de la sécurité et la simplification de la transition entre les environnements locaux et de production. En stockant des informations sensibles telles que les informations d'identification de la base de données et les clés API en dehors de la base de code, les variables d'environnement aident à prévenir toute exposition accidentelle via des systèmes de contrôle de version comme Git. Le chapitre souligne que l'adoption de variables d'environnement est une bonne pratique alignée sur la méthodologie de conception d'applications à douze facteurs, ouvrant la voie à une configuration ultérieure dans les chapitres suivants.",
                // Japanese
                "日本語": "第 9 章では、Django プロジェクトにおける環境変数の重要性について説明し、セキュリティを強化し、ローカル環境と本番環境間の移行を簡素化する役割を強調しています。環境変数は、データベースの資格情報や API キーなどの機密情報をコードベースの外部に保存することで、Git などのバージョン管理システムによる偶発的な漏洩を防ぐのに役立ちます。この章では、環境変数の採用が Twelve-Factor App 設計方法論に沿ったベスト プラクティスであることを強調し、後続の章でさらに構成するための土台を整えています。",
                // Korean
                "한국인": "9장에서는 Django 프로젝트에서 환경 변수의 중요성을 논의하고, 보안을 강화하고 로컬 및 프로덕션 환경 간의 전환을 간소화하는 데 있어서 환경 변수의 역할을 강조합니다. 데이터베이스 자격 증명 및 API 키와 같은 민감한 정보를 코드베이스 외부에 저장함으로써 환경 변수는 Git과 같은 버전 제어 시스템을 통한 우발적 노출을 방지하는 데 도움이 됩니다. 이 장에서는 환경 변수 채택이 12가지 요소 앱 설계 방법론에 맞춰진 모범 사례임을 강조하여 후속 장에서 추가 구성을 위한 토대를 마련합니다.",
                // Spanish
                "Español": "El capítulo 9 analiza la importancia de las variables de entorno en los proyectos de Django, destacando su papel en la mejora de la seguridad y la simplificación de la transición entre los entornos locales y de producción. Al almacenar información confidencial, como credenciales de bases de datos y claves API, fuera del código base, las variables de entorno ayudan a evitar la exposición accidental a través de sistemas de control de versiones como Git. El capítulo enfatiza que la adopción de variables de entorno es una práctica recomendada alineada con la metodología de diseño de aplicaciones de doce factores, lo que prepara el terreno para una mayor configuración en los capítulos posteriores.",
                // Hindi
                "हिंदी": "अध्याय 9 में Django परियोजनाओं में पर्यावरण चर के महत्व पर चर्चा की गई है, जिसमें सुरक्षा बढ़ाने और स्थानीय और उत्पादन वातावरण के बीच संक्रमण को सरल बनाने में उनकी भूमिका पर प्रकाश डाला गया है। डेटाबेस क्रेडेंशियल और API कुंजियों जैसी संवेदनशील जानकारी को कोडबेस के बाहर संग्रहीत करके, पर्यावरण चर Git जैसी संस्करण नियंत्रण प्रणालियों के माध्यम से आकस्मिक जोखिम को रोकने में मदद करते हैं। अध्याय इस बात पर जोर देता है कि पर्यावरण चर को अपनाना बारह-कारक ऐप डिज़ाइन पद्धति के साथ संरेखित एक सर्वोत्तम अभ्यास है, जो बाद के अध्यायों में आगे के कॉन्फ़िगरेशन के लिए मंच तैयार करता है।",
                // Portuguese
                "Português": "O Capítulo 9 discute a importância das variáveis ​​de ambiente nos projetos Django, destacando o seu papel no aumento da segurança e na simplificação da transição entre ambientes locais e de produção. Ao armazenar informações confidenciais, como credenciais de base de dados e chaves de API, fora da base de código, as variáveis ​​de ambiente ajudam a evitar a exposição acidental através de sistemas de controlo de versão como o Git. O capítulo realça que a adoção de variáveis ​​de ambiente é uma prática recomendada alinhada com a metodologia Twelve-Factor App Design, preparando o terreno para configurações adicionais nos capítulos subsequentes.",
                // Bengali
                "বাংলা": "অধ্যায় 9 জ্যাঙ্গো প্রকল্পগুলিতে পরিবেশের পরিবর্তনশীলগুলির গুরুত্ব নিয়ে আলোচনা করে, নিরাপত্তা বাড়ানোর ক্ষেত্রে তাদের ভূমিকা তুলে ধরে এবং স্থানীয় এবং উত্পাদন পরিবেশের মধ্যে রূপান্তরকে সহজ করে তোলে। কোডবেসের বাইরে ডেটাবেস শংসাপত্র এবং API কীগুলির মতো সংবেদনশীল তথ্য সংরক্ষণ করে, এনভায়রনমেন্ট ভেরিয়েবলগুলি গিট-এর মতো সংস্করণ নিয়ন্ত্রণ ব্যবস্থার মাধ্যমে দুর্ঘটনাজনিত এক্সপোজার রোধ করতে সহায়তা করে। অধ্যায়টি জোর দেয় যে এনভায়রনমেন্ট ভেরিয়েবল গ্রহণ করা হল একটি সর্বোত্তম অনুশীলন যা দ্বাদশ-ফ্যাক্টর অ্যাপ ডিজাইন পদ্ধতির সাথে সংযুক্ত, পরবর্তী অধ্যায়ে আরও কনফিগারেশনের জন্য পর্যায় নির্ধারণ করে।",
                // Arabic
                "عَرَبِيّ": "يناقش الفصل التاسع أهمية متغيرات البيئة في مشاريع Django، ويسلط الضوء على دورها في تعزيز الأمان وتبسيط الانتقال بين البيئات المحلية والإنتاجية. من خلال تخزين المعلومات الحساسة مثل بيانات اعتماد قاعدة البيانات ومفاتيح واجهة برمجة التطبيقات خارج قاعدة التعليمات البرمجية، تساعد متغيرات البيئة في منع التعرض العرضي من خلال أنظمة التحكم في الإصدارات مثل Git. يؤكد الفصل على أن تبني متغيرات البيئة هو أفضل ممارسة تتماشى مع منهجية تصميم التطبيق المكونة من اثني عشر عاملًا، مما يمهد الطريق لمزيد من التكوين في الفصول اللاحقة.",
                // Persian
                "فارسی": "فصل 9 اهمیت متغیرهای محیطی در پروژه‌های جنگو را مورد بحث قرار می‌دهد و نقش آنها را در افزایش امنیت و ساده‌سازی انتقال بین محیط‌های محلی و تولیدی برجسته می‌کند. با ذخیره اطلاعات حساس مانند اعتبار پایگاه داده و کلیدهای API در خارج از پایگاه کد، متغیرهای محیطی به جلوگیری از قرار گرفتن در معرض تصادفی از طریق سیستم‌های کنترل نسخه مانند Git کمک می‌کنند. این فصل تاکید می‌کند که پذیرش متغیرهای محیطی بهترین روشی است که با روش طراحی اپلیکیشن دوازده عاملی هماهنگ است و زمینه را برای پیکربندی بیشتر در فصل‌های بعدی فراهم می‌کند.",
            },
        },
        // 10
        {
            "ChapterName": "Email",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 10 focuses on configuring email functionality in a Django project, including setting up password change and reset features. It guides users through signing up for a third-party email service, obtaining API keys, and updating the file to enable email sending. The chapter also covers customizing confirmation emails by overriding existing templates, updating sender details, and ensuring proper internationalization support, ultimately preparing the project for the next phase of building the Bookstore site.",
                // German
                "Deutsch": "Kapitel 10 konzentriert sich auf die Konfiguration der E-Mail-Funktionalität in einem Django-Projekt, einschließlich der Einrichtung von Funktionen zum Ändern und Zurücksetzen von Passwörtern. Es führt Benutzer durch die Anmeldung bei einem E-Mail-Dienst eines Drittanbieters, das Abrufen von API-Schlüsseln und das Aktualisieren der Datei, um das Senden von E-Mails zu ermöglichen. Das Kapitel behandelt auch das Anpassen von Bestätigungs-E-Mails durch Überschreiben vorhandener Vorlagen, Aktualisieren der Absenderdetails und Sicherstellen einer angemessenen Internationalisierungsunterstützung, um das Projekt letztendlich auf die nächste Phase des Aufbaus der Bookstore-Site vorzubereiten.",
                // Chinese
                "中国人": "第 10 章重点介绍如何在 Django 项目中配置电子邮件功能，包括设置密码更改和重置功能。它指导用户注册第三方电子邮件服务、获取 API 密钥以及更新文件以启用电子邮件发送。本章还介绍了通过覆盖现有模板来自定义确认电子邮件、更新发件人详细信息以及确保适当的国际化支持，最终为项目构建书店网站的下一阶段做好准备。",
                // Russian
                "Русский": "Глава 10 посвящена настройке функциональности электронной почты в проекте Django, включая настройку функций изменения и сброса пароля. Она проводит пользователей через регистрацию в стороннем почтовом сервисе, получение ключей API и обновление файла для включения отправки электронной почты. Глава также охватывает настройку подтверждающих писем путем переопределения существующих шаблонов, обновления данных отправителя и обеспечения надлежащей поддержки интернационализации, в конечном итоге подготавливая проект к следующему этапу создания сайта Bookstore.",
                // French
                "Français": "Le chapitre 10 se concentre sur la configuration des fonctionnalités de messagerie électronique dans un projet Django, notamment la configuration des fonctionnalités de modification et de réinitialisation du mot de passe. Il guide les utilisateurs dans l'inscription à un service de messagerie électronique tiers, l'obtention de clés API et la mise à jour du fichier pour permettre l'envoi d'e-mails. Le chapitre couvre également la personnalisation des e-mails de confirmation en remplaçant les modèles existants, en mettant à jour les détails de l'expéditeur et en garantissant une prise en charge appropriée de l'internationalisation, préparant ainsi le projet à la phase suivante de création du site Bookstore.",
                // Japanese
                "日本語": "第 10 章では、パスワードの変更とリセット機能の設定を含む、Django プロジェクトでの電子メール機能の構成に焦点を当てています。サードパーティの電子メール サービスへのサインアップ、API キーの取得、電子メールの送信を有効にするファイルの更新についてユーザーをガイドします。また、既存のテンプレートを上書きして確認メールをカスタマイズする方法、送信者の詳細を更新する方法、適切な国際化サポートを確保する方法についても説明し、最終的に Bookstore サイトを構築する次のフェーズに向けてプロジェクトを準備します。",
                // Korean
                "한국인": "10장은 Django 프로젝트에서 이메일 기능을 구성하는 데 중점을 두고, 여기에는 비밀번호 변경 및 재설정 기능 설정이 포함됩니다. 이 장에서는 사용자가 타사 이메일 서비스에 가입하고, API 키를 얻고, 이메일 전송을 활성화하기 위해 파일을 업데이트하는 방법을 안내합니다. 이 장에서는 또한 기존 템플릿을 재정의하여 확인 이메일을 사용자 지정하고, 발신자 세부 정보를 업데이트하고, 적절한 국제화 지원을 보장하여 궁극적으로 Bookstore 사이트를 구축하는 다음 단계를 위한 프로젝트를 준비하는 방법도 다룹니다.",
                // Spanish
                "Español": "El capítulo 10 se centra en la configuración de la funcionalidad de correo electrónico en un proyecto de Django, incluida la configuración de funciones de cambio y restablecimiento de contraseñas. Guía a los usuarios a registrarse en un servicio de correo electrónico de terceros, obtener claves API y actualizar el archivo para habilitar el envío de correos electrónicos. El capítulo también cubre la personalización de los correos electrónicos de confirmación anulando las plantillas existentes, actualizando los detalles del remitente y asegurando el soporte de internacionalización adecuado, preparando finalmente el proyecto para la siguiente fase de creación del sitio de Bookstore.",
                // Hindi
                "हिंदी": "अध्याय 10 Django प्रोजेक्ट में ईमेल कार्यक्षमता को कॉन्फ़िगर करने पर केंद्रित है, जिसमें पासवर्ड परिवर्तन और रीसेट सुविधाएँ सेट करना शामिल है। यह उपयोगकर्ताओं को तृतीय-पक्ष ईमेल सेवा के लिए साइन अप करने, API कुंजियाँ प्राप्त करने और ईमेल भेजने को सक्षम करने के लिए फ़ाइल को अपडेट करने के माध्यम से मार्गदर्शन करता है। अध्याय में मौजूदा टेम्प्लेट को ओवरराइड करके, प्रेषक विवरण को अपडेट करके और उचित अंतर्राष्ट्रीयकरण समर्थन सुनिश्चित करके पुष्टिकरण ईमेल को अनुकूलित करना भी शामिल है, जो अंततः बुकस्टोर साइट के निर्माण के अगले चरण के लिए परियोजना को तैयार करता है।",
                // Portuguese
                "Português": "O Capítulo 10 centra-se na configuração da funcionalidade de e-mail num projeto Django, incluindo a configuração das funcionalidades de alteração e redefinição de palavras-passe. Orienta os utilizadores na inscrição num serviço de e-mail de terceiros, na obtenção de chaves API e na atualização do ficheiro para permitir o envio de e-mail. O capítulo aborda também a personalização dos e-mails de confirmação, a substituição dos modelos existentes, a atualização dos dados do remetente e a garantia do apoio adequado à internacionalização, preparando, em última análise, o projeto para a próxima fase de construção do website da Livraria.",
                // Bengali
                "বাংলা": "অধ্যায় 10 একটি জ্যাঙ্গো প্রকল্পে ইমেল কার্যকারিতা কনফিগার করার উপর ফোকাস করে, যার মধ্যে পাসওয়ার্ড পরিবর্তন এবং রিসেট বৈশিষ্ট্যগুলি সেট আপ করা রয়েছে। এটি ব্যবহারকারীদের একটি তৃতীয় পক্ষের ইমেল পরিষেবার জন্য সাইন আপ করার, API কীগুলি প্রাপ্ত করার এবং ইমেল প্রেরণ সক্ষম করতে ফাইল আপডেট করার মাধ্যমে গাইড করে৷ অধ্যায়টি বিদ্যমান টেমপ্লেটগুলিকে ওভাররাইড করে, প্রেরকের বিশদ আপডেট করে, এবং যথাযথ আন্তর্জাতিকীকরণ সমর্থন নিশ্চিত করার মাধ্যমে নিশ্চিতকরণ ইমেলগুলি কাস্টমাইজ করাকেও কভার করে, শেষ পর্যন্ত বুকস্টোর সাইট তৈরির পরবর্তী পর্যায়ের জন্য প্রকল্পটি প্রস্তুত করে৷",
                // Arabic
                "عَرَبِيّ": "يركز الفصل العاشر على تكوين وظيفة البريد الإلكتروني في مشروع Django، بما في ذلك إعداد ميزات تغيير كلمة المرور وإعادة تعيينها. ويرشد المستخدمين خلال التسجيل في خدمة بريد إلكتروني تابعة لجهة خارجية، والحصول على مفاتيح API، وتحديث الملف لتمكين إرسال البريد الإلكتروني. ويغطي الفصل أيضًا تخصيص رسائل البريد الإلكتروني للتأكيد من خلال تجاوز القوالب الموجودة، وتحديث تفاصيل المرسل، وضمان دعم التدويل المناسب، وفي النهاية إعداد المشروع للمرحلة التالية من بناء موقع Bookstore.",
                // Persian
                "فارسی": "فصل 10 بر پیکربندی عملکرد ایمیل در پروژه جنگو، از جمله تنظیم ویژگی‌های تغییر رمز عبور و بازنشانی تمرکز دارد. کاربران را از طریق ثبت نام در یک سرویس ایمیل شخص ثالث، دریافت کلیدهای API و به روز رسانی فایل برای فعال کردن ارسال ایمیل راهنمایی می کند. این فصل همچنین سفارشی‌سازی ایمیل‌های تأیید را با نادیده گرفتن الگوهای موجود، به‌روزرسانی جزئیات فرستنده، و اطمینان از پشتیبانی بین‌المللی‌سازی مناسب، پوشش می‌دهد و در نهایت پروژه را برای مرحله بعدی ساخت سایت کتابفروشی آماده می‌کند.",
            },
        },
        // 11
        {
            "ChapterName": "Books App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "In Chapter 11 of the Books App, we established a Django application to manage and display books by creating a model with attributes like title, author, and price. We implemented ListView and DetailView to facilitate a book listing page and individual book detail pages, enhancing the URL structure with secure UUIDs. Additionally, we created templates for both views, conducted unit tests to verify functionality, and committed our changes to version control, setting the stage for future enhancements like foreign key relationships and a review system.",
                // German
                "Deutsch": "In Kapitel 11 der Bücher-App haben wir eine Django-Anwendung zum Verwalten und Anzeigen von Büchern erstellt, indem wir ein Modell mit Attributen wie Titel, Autor und Preis erstellt haben. Wir haben ListView und DetailView implementiert, um eine Buchlistenseite und einzelne Buchdetailseiten zu ermöglichen, und die URL-Struktur mit sicheren UUIDs verbessert. Darüber hinaus haben wir Vorlagen für beide Ansichten erstellt, Unit-Tests zur Überprüfung der Funktionalität durchgeführt und unsere Änderungen in die Versionskontrolle übertragen, um die Grundlage für zukünftige Verbesserungen wie Fremdschlüsselbeziehungen und ein Überprüfungssystem zu schaffen.",
                // Chinese
                "中国人": "在图书应用的第 11 章中，我们创建了一个 Django 应用来管理和显示图书，方法是创建一个具有书名、作者和价格等属性的模型。我们实现了 ListView 和 DetailView 来简化图书列表页面和单个图书详细信息页面，并使用安全的 UUID 增强 URL 结构。此外，我们为这两个视图创建了模板，进行了单元测试以验证功能，并将我们的更改提交给版本控制，为未来的增强功能（如外键关系和评论系统）奠定了基础。",
                // Russian
                "Русский": "В главе 11 приложения Books мы создали приложение Django для управления и отображения книг, создав модель с такими атрибутами, как название, автор и цена. Мы реализовали ListView и DetailView для упрощения страницы списка книг и отдельных страниц с подробностями книг, улучшив структуру URL с помощью безопасных UUID. Кроме того, мы создали шаблоны для обоих представлений, провели модульные тесты для проверки функциональности и зафиксировали наши изменения в системе контроля версий, подготовив почву для будущих улучшений, таких как связи внешнего ключа и система рецензирования.",
                // French
                "Français": "Dans le chapitre 11 de l'application Books, nous avons créé une application Django pour gérer et afficher des livres en créant un modèle avec des attributs tels que le titre, l'auteur et le prix. Nous avons implémenté ListView et DetailView pour faciliter une page de liste de livres et des pages de détails de livres individuels, en améliorant la structure de l'URL avec des UUID sécurisés. De plus, nous avons créé des modèles pour les deux vues, effectué des tests unitaires pour vérifier la fonctionnalité et validé nos modifications dans le contrôle de version, préparant le terrain pour de futures améliorations telles que les relations de clés étrangères et un système de révision.",
                // Japanese
                "日本語": "Books アプリの第 11 章では、タイトル、著者、価格などの属性を持つモデルを作成して、書籍を管理および表示する Django アプリケーションを構築しました。書籍の一覧ページと個々の書籍の詳細ページを容易にするために ListView と DetailView を実装し、安全な UUID で URL 構造を強化しました。さらに、両方のビューのテンプレートを作成し、機能性を検証するための単体テストを実施し、変更をバージョン管理にコミットして、外部キー関係やレビュー システムなどの将来の機能強化の準備を整えました。",
                // Korean
                "한국인": "Books App의 11장에서 제목, 저자, 가격과 같은 속성이 있는 모델을 만들어 책을 관리하고 표시하는 Django 애플리케이션을 구축했습니다. ListView와 DetailView를 구현하여 책 목록 페이지와 개별 책 세부 정보 페이지를 용이하게 하고, 보안 UUID로 URL 구조를 강화했습니다. 또한 두 뷰에 대한 템플릿을 만들고, 기능을 검증하기 위해 단위 테스트를 수행했으며, 버전 제어에 변경 사항을 커밋하여 외래 키 관계 및 검토 시스템과 같은 향후 개선 사항을 위한 토대를 마련했습니다.",
                // Spanish
                "Español": "En el Capítulo 11 de la aplicación Books, creamos una aplicación Django para administrar y mostrar libros mediante la creación de un modelo con atributos como título, autor y precio. Implementamos ListView y DetailView para facilitar una página de listado de libros y páginas de detalles de libros individuales, mejorando la estructura de URL con UUID seguros. Además, creamos plantillas para ambas vistas, realizamos pruebas unitarias para verificar la funcionalidad y confirmamos nuestros cambios en el control de versiones, lo que preparó el terreno para futuras mejoras, como relaciones de clave externa y un sistema de revisión.",
                // Hindi
                "हिंदी": "पुस्तक ऐप के अध्याय 11 में, हमने शीर्षक, लेखक और मूल्य जैसी विशेषताओं के साथ एक मॉडल बनाकर पुस्तकों को प्रबंधित करने और प्रदर्शित करने के लिए एक Django एप्लिकेशन स्थापित किया। हमने पुस्तक लिस्टिंग पृष्ठ और व्यक्तिगत पुस्तक विवरण पृष्ठों को सुविधाजनक बनाने के लिए ListView और DetailView को लागू किया, सुरक्षित UUIDs के साथ URL संरचना को बढ़ाया। इसके अतिरिक्त, हमने दोनों दृश्यों के लिए टेम्पलेट बनाए, कार्यक्षमता को सत्यापित करने के लिए यूनिट परीक्षण किए, और संस्करण नियंत्रण में हमारे परिवर्तनों को प्रतिबद्ध किया, जिससे विदेशी कुंजी संबंधों और समीक्षा प्रणाली जैसे भविष्य के संवर्द्धन के लिए मंच तैयार हुआ।",
                // Portuguese
                "Português": "No Capítulo 11 da aplicação Livros, estabelecemos uma aplicação Django para gerir e exibir livros criando um modelo com atributos como o título, o autor e o preço. Implementámos o ListView e o DetailView para facilitar uma página de listagem de livros e páginas de detalhes de livros individuais, melhorando a estrutura de URL com UUIDs seguros. Além disso, criámos modelos para ambas as visualizações, conduzimos testes unitários para verificar a funcionalidade e comprometemos as nossas alterações no controlo de versão, preparando o terreno para melhorias futuras, como relações de chave estrangeira e um sistema de revisão.",
                // Bengali
                "বাংলা": "বই অ্যাপের অধ্যায় 11-এ, আমরা শিরোনাম, লেখক এবং মূল্যের মতো বৈশিষ্ট্য সহ একটি মডেল তৈরি করে বই পরিচালনা ও প্রদর্শনের জন্য একটি জ্যাঙ্গো অ্যাপ্লিকেশন প্রতিষ্ঠা করেছি। আমরা একটি বই তালিকা পৃষ্ঠা এবং পৃথক বই বিস্তারিত পৃষ্ঠাগুলি সহজতর করার জন্য ListView এবং DetailView প্রয়োগ করেছি, সুরক্ষিত UUID-এর সাথে URL গঠন উন্নত করে৷ উপরন্তু, আমরা উভয় দৃষ্টিভঙ্গির জন্য টেমপ্লেট তৈরি করেছি, কার্যকারিতা যাচাই করার জন্য ইউনিট পরীক্ষা পরিচালনা করেছি এবং সংস্করণ নিয়ন্ত্রণে আমাদের পরিবর্তনগুলি প্রতিশ্রুতিবদ্ধ করেছি, বিদেশী কী সম্পর্ক এবং একটি পর্যালোচনা সিস্টেমের মতো ভবিষ্যতের উন্নতির জন্য পর্যায় নির্ধারণ করেছি।",
                // Arabic
                "عَرَبِيّ": "في الفصل الحادي عشر من تطبيق الكتب، قمنا بإنشاء تطبيق Django لإدارة وعرض الكتب من خلال إنشاء نموذج بخصائص مثل العنوان والمؤلف والسعر. قمنا بتنفيذ ListView وDetailView لتسهيل صفحة قائمة الكتب وصفحات تفاصيل الكتب الفردية، وتعزيز بنية عنوان URL باستخدام UUIDs آمنة. بالإضافة إلى ذلك، قمنا بإنشاء قوالب لكلا العرضين، وأجرينا اختبارات الوحدة للتحقق من الوظائف، وقمنا بإلزام التغييرات التي أجريناها بالتحكم في الإصدار، مما مهد الطريق لتحسينات مستقبلية مثل علاقات المفاتيح الخارجية ونظام المراجعة.",
                // Persian
                "فارسی": "در فصل 11 برنامه Books، ما یک برنامه جنگو برای مدیریت و نمایش کتاب ها با ایجاد مدلی با ویژگی هایی مانند عنوان، نویسنده و قیمت ایجاد کردیم. ما ListView و DetailView را پیاده سازی کردیم تا صفحه فهرست کتاب و صفحات جزییات کتاب را تسهیل کنیم و ساختار URL را با UUID های ایمن تقویت کنیم. علاوه بر این، ما الگوهایی را برای هر دو نما ایجاد کردیم، آزمایش‌های واحد را برای تأیید عملکرد انجام دادیم، و تغییرات خود را در کنترل نسخه انجام دادیم، و زمینه را برای پیشرفت‌های آینده مانند روابط کلید خارجی و سیستم بازبینی فراهم کردیم.",
            },
        },
        // 12
        {
            "ChapterName": "Reviews App",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 12 introduces a reviews app that allows users to leave reviews for their favorite books, focusing on the implementation of foreign key relationships, particularly a one-to-many relationship between books and reviews. The chapter provides code examples for creating a Review model, updating templates to display reviews on book detail pages, and adding tests to ensure functionality. It also discusses potential future enhancements, such as AJAX for submitting reviews and the option to separate the reviews into a dedicated app as the project grows.",
                // German
                "Deutsch": "Kapitel 12 stellt eine Rezensions-App vor, mit der Benutzer Rezensionen für ihre Lieblingsbücher hinterlassen können. Dabei liegt der Schwerpunkt auf der Implementierung von Fremdschlüsselbeziehungen, insbesondere einer Eins-zu-viele-Beziehung zwischen Büchern und Rezensionen. Das Kapitel enthält Codebeispiele zum Erstellen eines Rezensionsmodells, zum Aktualisieren von Vorlagen zum Anzeigen von Rezensionen auf Buchdetailseiten und zum Hinzufügen von Tests zur Sicherstellung der Funktionalität. Es werden auch mögliche zukünftige Verbesserungen besprochen, wie z. B. AJAX zum Senden von Rezensionen und die Möglichkeit, die Rezensionen bei Wachstum des Projekts in eine dedizierte App aufzuteilen.",
                // Chinese
                "中国人": "第 12 章介绍了一个评论应用，该应用允许用户为自己喜欢的书籍留下评论，重点介绍了外键关系的实现，特别是书籍和评论之间的一对多关系。本章提供了创建评论模型、更新模板以在书籍详细信息页面上显示评论以及添加测试以确保功能的代码示例。它还讨论了未来的潜在增强功能，例如用于提交评论的 AJAX 以及随着项目的发展将评论分离到专用应用程序中的选项。",
                // Russian
                "Русский": "Глава 12 знакомит с приложением для отзывов, которое позволяет пользователям оставлять отзывы на их любимые книги, уделяя особое внимание реализации внешних ключевых связей, в частности связи «один ко многим» между книгами и отзывами. В главе приводятся примеры кода для создания модели Review, обновления шаблонов для отображения отзывов на страницах с подробностями книг и добавления тестов для обеспечения функциональности. В ней также обсуждаются потенциальные будущие улучшения, такие как AJAX для отправки отзывов и возможность выделения отзывов в отдельное приложение по мере роста проекта.",
                // French
                "Français": "Le chapitre 12 présente une application d'avis qui permet aux utilisateurs de laisser des avis sur leurs livres préférés, en se concentrant sur la mise en œuvre de relations de clés étrangères, en particulier une relation un-à-plusieurs entre les livres et les avis. Le chapitre fournit des exemples de code pour la création d'un modèle d'avis, la mise à jour de modèles pour afficher les avis sur les pages de détails des livres et l'ajout de tests pour garantir la fonctionnalité. Il aborde également les améliorations futures potentielles, telles qu'AJAX pour la soumission d'avis et la possibilité de séparer les avis dans une application dédiée à mesure que le projet se développe.",
                // Japanese
                "日本語": "第 12 章では、ユーザーがお気に入りの本のレビューを残すことができるレビュー アプリを紹介します。特に、本とレビュー間の 1 対多の関係など、外部キー関係の実装に焦点を当てています。この章では、レビュー モデルの作成、本の詳細ページにレビューを表示するためのテンプレートの更新、機能を確認するためのテストの追加を行うためのコード例を示します。また、レビューを送信するための AJAX や、プロジェクトの拡大に​​合わせてレビューを専用アプリに分離するオプションなど、将来の潜在的な機能強化についても説明します。",
                // Korean
                "한국인": "12장에서는 사용자가 좋아하는 책에 대한 리뷰를 남길 수 있는 리뷰 앱을 소개하며, 특히 책과 리뷰 간의 일대다 관계인 외래 키 관계의 구현에 초점을 맞춥니다. 이 장에서는 리뷰 모델을 만들고, 책 세부 정보 페이지에 리뷰를 표시하기 위한 템플릿을 업데이트하고, 기능을 보장하기 위한 테스트를 추가하는 코드 예제를 제공합니다. 또한 리뷰 제출을 위한 AJAX와 프로젝트가 성장함에 따라 리뷰를 전용 앱으로 분리하는 옵션과 같은 잠재적인 향후 개선 사항에 대해서도 설명합니다.",
                // Spanish
                "Español": "El capítulo 12 presenta una aplicación de reseñas que permite a los usuarios dejar reseñas de sus libros favoritos, centrándose en la implementación de relaciones de clave externa, en particular una relación de uno a muchos entre libros y reseñas. El capítulo proporciona ejemplos de código para crear un modelo de reseñas, actualizar plantillas para mostrar reseñas en las páginas de detalles de los libros y agregar pruebas para garantizar la funcionalidad. También analiza posibles mejoras futuras, como AJAX para enviar reseñas y la opción de separar las reseñas en una aplicación dedicada a medida que el proyecto crece.",
                // Hindi
                "हिंदी": "अध्याय 12 में एक समीक्षा ऐप पेश किया गया है जो उपयोगकर्ताओं को अपनी पसंदीदा पुस्तकों के लिए समीक्षा छोड़ने की अनुमति देता है, जो विदेशी कुंजी संबंधों के कार्यान्वयन पर ध्यान केंद्रित करता है, विशेष रूप से पुस्तकों और समीक्षाओं के बीच एक-से-कई संबंध। अध्याय समीक्षा मॉडल बनाने, पुस्तक विवरण पृष्ठों पर समीक्षा प्रदर्शित करने के लिए टेम्पलेट्स को अपडेट करने और कार्यक्षमता सुनिश्चित करने के लिए परीक्षण जोड़ने के लिए कोड उदाहरण प्रदान करता है। यह संभावित भविष्य के संवर्द्धन पर भी चर्चा करता है, जैसे कि समीक्षा सबमिट करने के लिए AJAX और प्रोजेक्ट के बढ़ने पर समीक्षाओं को एक समर्पित ऐप में अलग करने का विकल्प।",
                // Portuguese
                "Português": "O Capítulo 12 apresenta uma aplicação de recensões que permite aos utilizadores deixarem recensões sobre os seus livros favoritos, com foco na implementação de relações de chave estrangeira, particularmente uma relação um-para-muitos entre livros e recensões. O capítulo fornece exemplos de código para criar um modelo de revisão, atualizar modelos para exibir revisões nas páginas de detalhes do livro e adicionar testes para garantir a funcionalidade. Também discute possíveis melhorias futuras, como o AJAX para o envio de avaliações e a opção de separar as avaliações numa aplicação dedicada à medida que o projeto cresce.",
                // Bengali
                "বাংলা": "অধ্যায় 12 একটি রিভিউ অ্যাপ প্রবর্তন করে যা ব্যবহারকারীদের তাদের প্রিয় বইয়ের জন্য রিভিউ দেওয়ার অনুমতি দেয়, বিদেশী মূল সম্পর্ক বাস্তবায়নের উপর ফোকাস করে, বিশেষ করে বই এবং পর্যালোচনার মধ্যে এক থেকে একাধিক সম্পর্ক। অধ্যায়টি একটি পর্যালোচনা মডেল তৈরি করার জন্য কোড উদাহরণ প্রদান করে, বইয়ের বিশদ পৃষ্ঠাগুলিতে পর্যালোচনাগুলি প্রদর্শন করার জন্য টেমপ্লেটগুলি আপডেট করা এবং কার্যকারিতা নিশ্চিত করার জন্য পরীক্ষাগুলি যোগ করে৷ এটি সম্ভাব্য ভবিষ্যতের উন্নতি নিয়েও আলোচনা করে, যেমন পর্যালোচনা জমা দেওয়ার জন্য AJAX এবং প্রকল্পের বৃদ্ধির সাথে সাথে একটি ডেডিকেটেড অ্যাপে পর্যালোচনাগুলিকে আলাদা করার বিকল্প।",
                // Arabic
                "عَرَبِيّ": "يقدم الفصل الثاني عشر تطبيقًا للمراجعات يتيح للمستخدمين ترك مراجعات لكتبهم المفضلة، مع التركيز على تنفيذ علاقات المفاتيح الخارجية، وخاصة العلاقة من واحد إلى كثير بين الكتب والمراجعات. يوفر الفصل أمثلة على التعليمات البرمجية لإنشاء نموذج مراجعة، وتحديث القوالب لعرض المراجعات على صفحات تفاصيل الكتاب، وإضافة اختبارات لضمان الوظائف. كما يناقش التحسينات المستقبلية المحتملة، مثل AJAX لإرسال المراجعات والخيار لفصل المراجعات في تطبيق مخصص مع نمو المشروع.",
                // Persian
                "فارسی": "فصل 12 یک برنامه بررسی را معرفی می‌کند که به کاربران اجازه می‌دهد برای کتاب‌های مورد علاقه‌شان نظر بگذارند، با تمرکز بر اجرای روابط کلیدی خارجی، به‌ویژه رابطه یک به چند بین کتاب‌ها و نظرات. این فصل نمونه‌های کدی را برای ایجاد یک مدل مرور، به‌روزرسانی الگوها برای نمایش نظرات در صفحات جزئیات کتاب و افزودن آزمایش‌هایی برای اطمینان از عملکرد ارائه می‌کند. همچنین پیشرفت‌های بالقوه آینده را مورد بحث قرار می‌دهد، مانند AJAX برای ارسال نظرات و گزینه جداسازی نظرات در یک برنامه اختصاصی با رشد پروژه.",
            },
        },
        // 13
        {
            "ChapterName": "File/Image Uploads",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 13 focuses on implementing file and image uploads in a Django project, emphasizing the distinction between static and media files. It covers the installation of the Pillow library for image processing, necessary configurations in , and the use of in the model to handle cover images. The chapter also highlights the importance of validating uploads for security, updating templates to display book covers, and suggests using the package for managing old files, while recommending further study on form validations and potential complexities in image handling.",
                // German
                "Deutsch": "Kapitel 13 konzentriert sich auf die Implementierung von Datei- und Bild-Uploads in einem Django-Projekt und betont die Unterscheidung zwischen statischen und Mediendateien. Es behandelt die Installation der Pillow-Bibliothek zur Bildverarbeitung, die erforderlichen Konfigurationen in und die Verwendung von im Modell zur Handhabung von Coverbildern. Das Kapitel betont auch die Bedeutung der Validierung von Uploads aus Sicherheitsgründen, die Aktualisierung von Vorlagen zur Anzeige von Buchcovern und schlägt die Verwendung des Pakets zur Verwaltung alter Dateien vor. Gleichzeitig wird empfohlen, sich eingehender mit Formularvalidierungen und möglichen Komplexitäten bei der Bildverarbeitung zu befassen.",
                // Chinese
                "中国人": "第 13 章重点介绍如何在 Django 项目中实现文件和图像上传，强调静态文件和媒体文件之间的区别。它涵盖了用于图像处理的 Pillow 库的安装、中的必要配置以及模型中用于处理封面图像的用法。本章还强调了验证上传对于安全性的重要性、更新模板以显示书籍封面，并建议使用该包来管理旧文件，同时建议进一步研究表单验证和图像处理中的潜在复杂性。",
                // Russian
                "Русский": "Глава 13 фокусируется на реализации загрузки файлов и изображений в проекте Django, подчеркивая различие между статическими и медиафайлами. Она охватывает установку библиотеки Pillow для обработки изображений, необходимые конфигурации в и использование в модели для обработки изображений обложек. Глава также подчеркивает важность проверки загрузок для безопасности, обновления шаблонов для отображения обложек книг и предлагает использовать пакет для управления старыми файлами, одновременно рекомендуя дальнейшее изучение проверок форм и потенциальных сложностей при обработке изображений.",
                // French
                "Français": "Le chapitre 13 se concentre sur l'implémentation des téléchargements de fichiers et d'images dans un projet Django, en insistant sur la distinction entre les fichiers statiques et les fichiers multimédias. Il couvre l'installation de la bibliothèque Pillow pour le traitement des images, les configurations nécessaires dans , et l'utilisation de dans le modèle pour gérer les images de couverture. Le chapitre souligne également l'importance de valider les téléchargements pour la sécurité, de mettre à jour les modèles pour afficher les couvertures de livres et suggère d'utiliser le package pour gérer les anciens fichiers, tout en recommandant une étude plus approfondie des validations de formulaire et des complexités potentielles dans la gestion des images.",
                // Japanese
                "日本語": "第 13 章では、Django プロジェクトでのファイルと画像のアップロードの実装に焦点を当て、静的ファイルとメディア ファイルの違いを強調しています。画像処理用の Pillow ライブラリのインストール、 での必要な構成、およびモデルでの表紙画像の処理に使用する について説明します。また、この章では、セキュリティのためにアップロードを検証することの重要性、本の表紙を表示するためのテンプレートの更新、古いファイルの管理に パッケージを使用することを提案するとともに、フォームの検証と画像処理の潜在的な複雑さについてさらに学習することを推奨しています。",
                // Korean
                "한국인": "13장은 Django 프로젝트에서 파일 및 이미지 업로드를 구현하는 데 중점을 두고 정적 파일과 미디어 파일의 구분을 강조합니다. 이미지 처리를 위한 Pillow 라이브러리 설치, 에서의 필수 구성, 모델에서 표지 이미지를 처리하기 위한 의 사용을 다룹니다. 또한 이 장에서는 보안을 위해 업로드를 검증하고, 책 표지를 표시하기 위한 템플릿을 업데이트하고, 오래된 파일을 관리하기 위해 패키지를 사용하는 것을 제안하는 한편, 양식 검증 및 이미지 처리의 잠재적인 복잡성에 대한 추가 연구를 권장합니다.",
                // Spanish
                "Español": "El capítulo 13 se centra en la implementación de cargas de archivos e imágenes en un proyecto de Django, haciendo hincapié en la distinción entre archivos estáticos y multimedia. Abarca la instalación de la biblioteca Pillow para el procesamiento de imágenes, las configuraciones necesarias en y el uso de en el modelo para manejar imágenes de portada. El capítulo también destaca la importancia de validar las cargas por motivos de seguridad, actualizar las plantillas para mostrar las portadas de los libros y sugiere usar el paquete para gestionar archivos antiguos, al tiempo que recomienda estudiar más a fondo las validaciones de formularios y las posibles complejidades en el manejo de imágenes.",
                // Hindi
                "हिंदी": "अध्याय 13 एक Django परियोजना में फ़ाइल और छवि अपलोड को लागू करने पर केंद्रित है, जो स्थिर और मीडिया फ़ाइलों के बीच अंतर पर जोर देता है। यह छवि प्रसंस्करण के लिए पिलो लाइब्रेरी की स्थापना, में आवश्यक कॉन्फ़िगरेशन और कवर छवियों को संभालने के लिए मॉडल में के उपयोग को कवर करता है। अध्याय सुरक्षा के लिए अपलोड को मान्य करने, पुस्तक कवर प्रदर्शित करने के लिए टेम्पलेट्स को अपडेट करने के महत्व पर भी प्रकाश डालता है, और पुरानी फ़ाइलों के प्रबंधन के लिए पैकेज का उपयोग करने का सुझाव देता है, जबकि फ़ॉर्म सत्यापन और छवि हैंडलिंग में संभावित जटिलताओं पर आगे के अध्ययन की सिफारिश करता है।",
                // Portuguese
                "Português": "O Capítulo 13 centra-se na implementação de carregamentos de ficheiros e imagens num projeto Django, enfatizando a distinção entre ficheiros estáticos e de media. Aborda a instalação da biblioteca Pillow para processamento de imagem, as configurações necessárias no , e a utilização no modelo para lidar com imagens de capa. O capítulo destaca ainda a importância de validar uploads para segurança, atualizar modelos para exibir capas de livros e sugere a utilização do pacote para gerir ficheiros antigos, ao mesmo tempo que recomenda estudos mais aprofundados sobre validações de formulários e potenciais complexidades no tratamento de imagens.",
                // Bengali
                "বাংলা": "অধ্যায় 13 একটি জ্যাঙ্গো প্রকল্পে ফাইল এবং ইমেজ আপলোড বাস্তবায়নের উপর ফোকাস করে, স্ট্যাটিক এবং মিডিয়া ফাইলের মধ্যে পার্থক্যের উপর জোর দেয়। এটি চিত্র প্রক্রিয়াকরণের জন্য পিলো লাইব্রেরির ইনস্টলেশন, তে প্রয়োজনীয় কনফিগারেশন এবং কভার চিত্রগুলি পরিচালনা করতে মডেলের ব্যবহারকে কভার করে। অধ্যায়টি নিরাপত্তার জন্য আপলোডগুলিকে যাচাই করার গুরুত্ব, বইয়ের কভারগুলি প্রদর্শনের জন্য টেমপ্লেট আপডেট করার গুরুত্ব তুলে ধরে এবং পুরানো ফাইলগুলি পরিচালনার জন্য প্যাকেজটি ব্যবহার করার পরামর্শ দেয়, যখন ফর্মের বৈধতা এবং চিত্র পরিচালনায় সম্ভাব্য জটিলতাগুলির উপর আরও অধ্যয়নের সুপারিশ করে৷",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الثالث عشر على تنفيذ عمليات تحميل الملفات والصور في مشروع Django، مع التأكيد على التمييز بين الملفات الثابتة وملفات الوسائط. ويغطي تثبيت مكتبة Pillow لمعالجة الصور، والتكوينات اللازمة في ، واستخدام في النموذج للتعامل مع صور الغلاف. ويسلط الفصل الضوء أيضًا على أهمية التحقق من صحة عمليات التحميل للأمان، وتحديث القوالب لعرض أغلفة الكتب، ويقترح استخدام الحزمة لإدارة الملفات القديمة، مع التوصية بمزيد من الدراسة حول عمليات التحقق من صحة النماذج والتعقيدات المحتملة في التعامل مع الصور.",
                // Persian
                "فارسی": "فصل 13 بر پیاده سازی آپلود فایل و تصویر در پروژه جنگو تمرکز دارد و بر تمایز بین فایل های استاتیک و رسانه ای تاکید دارد. این شامل نصب کتابخانه Pillow برای پردازش تصویر، تنظیمات لازم در و استفاده از در مدل برای پردازش تصاویر جلد می‌شود. این فصل همچنین بر اهمیت اعتبارسنجی آپلودها برای امنیت، به‌روزرسانی قالب‌ها برای نمایش جلد کتاب‌ها تاکید می‌کند و استفاده از بسته را برای مدیریت فایل‌های قدیمی پیشنهاد می‌کند، در حالی که مطالعه بیشتر در مورد اعتبارسنجی فرم‌ها و پیچیدگی‌های بالقوه در مدیریت تصویر را توصیه می‌کند.",
            },
        },
        // 14
        {
            "ChapterName": "Permissions",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 14 focuses on implementing permissions in a Django Bookstore project to restrict access to logged-in users and manage user permissions effectively. It introduces the use of to ensure only authenticated users can access book-related views, while also discussing the creation of custom permissions through the Meta class in models. Additionally, the chapter highlights the importance of using for enforcing specific permissions and emphasizes the need for a robust permissions structure before deploying the application to production.",
                // German
                "Deutsch": "Kapitel 14 konzentriert sich auf die Implementierung von Berechtigungen in einem Django Bookstore-Projekt, um den Zugriff auf angemeldete Benutzer zu beschränken und Benutzerberechtigungen effektiv zu verwalten. Es führt die Verwendung von ein, um sicherzustellen, dass nur authentifizierte Benutzer auf buchbezogene Ansichten zugreifen können, und bespricht gleichzeitig die Erstellung benutzerdefinierter Berechtigungen durch die Meta-Klasse in Modellen. Darüber hinaus hebt das Kapitel die Bedeutung der Verwendung von zur Durchsetzung bestimmter Berechtigungen hervor und betont die Notwendigkeit einer robusten Berechtigungsstruktur, bevor die Anwendung in der Produktion eingesetzt wird.",
                // Chinese
                "中国人": "第 14 章重点介绍如何在 Django Bookstore 项目中实现权限，以限制对登录用户的访问并有效地管理用户权限。它介绍了如何使用来确保只有经过身份验证的用户才能访问与书籍相关的视图，同时还讨论了通过模型中的 Meta 类创建自定义权限。此外，本章还强调了使用强制执行特定权限的重要性，并强调在将应用程序部署到生产环境之前需要建立强大的权限结构。",
                // Russian
                "Русский": "Глава 14 посвящена реализации разрешений в проекте Django Bookstore для ограничения доступа зарегистрированным пользователям и эффективного управления разрешениями пользователей. В ней представлено использование для обеспечения доступа к представлениям, связанным с книгами, только для аутентифицированных пользователей, а также обсуждается создание пользовательских разрешений с помощью класса Meta в моделях. Кроме того, в главе подчеркивается важность использования для обеспечения соблюдения определенных разрешений и подчеркивается необходимость надежной структуры разрешений перед развертыванием приложения в производстве.",
                // French
                "Français": "Le chapitre 14 se concentre sur l'implémentation des autorisations dans un projet Django Bookstore pour restreindre l'accès aux utilisateurs connectés et gérer efficacement les autorisations des utilisateurs. Il présente l'utilisation de pour garantir que seuls les utilisateurs authentifiés peuvent accéder aux vues liées aux livres, tout en abordant la création d'autorisations personnalisées via la classe Meta dans les modèles. En outre, le chapitre souligne l'importance de l'utilisation de pour appliquer des autorisations spécifiques et souligne la nécessité d'une structure d'autorisations robuste avant de déployer l'application en production.",
                // Japanese
                "日本語": "第 14 章では、Django Bookstore プロジェクトで権限を実装して、ログインしたユーザーへのアクセスを制限し、ユーザー権限を効果的に管理することに焦点を当てています。 の使用を紹介し、認証されたユーザーのみが書籍関連のビューにアクセスできるようにするとともに、モデルの Meta クラスを使用してカスタム権限を作成する方法についても説明します。さらに、この章では、特定の権限を適用するために を使用することの重要性を強調し、アプリケーションを本番環境にデプロイする前に堅牢な権限構造が必要であることを強調しています。",
                // Korean
                "한국인": "14장은 Django Bookstore 프로젝트에서 로그인한 사용자에게만 접근 권한을 제한하고 사용자 권한을 효과적으로 관리하기 위한 권한을 구현하는 데 중점을 둡니다. 인증된 사용자만 책 관련 뷰에 접근할 수 있도록 하는 의 사용을 소개하는 한편, 모델의 Meta 클래스를 통해 사용자 정의 권한을 만드는 방법도 논의합니다. 또한 이 장에서는 특정 권한을 적용하는 데 를 사용하는 것의 중요성을 강조하고 애플리케이션을 프로덕션에 배포하기 전에 강력한 권한 구조가 필요하다는 점을 강조합니다.",
                // Spanish
                "Español": "El capítulo 14 se centra en la implementación de permisos en un proyecto de Django Bookstore para restringir el acceso a los usuarios que han iniciado sesión y administrar los permisos de los usuarios de manera eficaz. Presenta el uso de para garantizar que solo los usuarios autenticados puedan acceder a las vistas relacionadas con los libros, al mismo tiempo que analiza la creación de permisos personalizados a través de la clase Meta en los modelos. Además, el capítulo destaca la importancia de usar para aplicar permisos específicos y enfatiza la necesidad de una estructura de permisos sólida antes de implementar la aplicación en producción.",
                // Hindi
                "हिंदी": "अध्याय 14 लॉग-इन उपयोगकर्ताओं तक पहुँच को प्रतिबंधित करने और उपयोगकर्ता अनुमतियों को प्रभावी ढंग से प्रबंधित करने के लिए Django बुकस्टोर प्रोजेक्ट में अनुमतियों को लागू करने पर केंद्रित है। यह केवल प्रमाणित उपयोगकर्ताओं को पुस्तक-संबंधित दृश्यों तक पहुँच सुनिश्चित करने के लिए के उपयोग का परिचय देता है, साथ ही मॉडल में मेटा क्लास के माध्यम से कस्टम अनुमतियों के निर्माण पर भी चर्चा करता है। इसके अतिरिक्त, अध्याय विशिष्ट अनुमतियों को लागू करने के लिए के उपयोग के महत्व पर प्रकाश डालता है और एप्लिकेशन को उत्पादन में तैनात करने से पहले एक मजबूत अनुमति संरचना की आवश्यकता पर जोर देता है।",
                // Portuguese
                "Português": "O Capítulo 14 centra-se na implementação de permissões num projeto Django Bookstore para restringir o acesso a utilizadores com sessão iniciada e gerir as permissões dos utilizadores de forma eficaz. Introduz o uso de para garantir que apenas os utilizadores autenticados podem aceder a visualizações relacionadas com livros, ao mesmo tempo que discute a criação de permissões personalizadas através da classe Meta em modelos. Além disso, o capítulo destaca a importância da utilização para impor permissões específicas e enfatiza a necessidade de uma estrutura de permissões robusta antes de implementar a aplicação em produção.",
                // Bengali
                "বাংলা": "অধ্যায় 14 লগ-ইন করা ব্যবহারকারীদের অ্যাক্সেস সীমাবদ্ধ করতে এবং কার্যকরভাবে ব্যবহারকারীর অনুমতিগুলি পরিচালনা করতে একটি জ্যাঙ্গো বুকস্টোর প্রকল্পে অনুমতি বাস্তবায়নের উপর দৃষ্টি নিবদ্ধ করে। এটি শুধুমাত্র প্রমাণীকৃত ব্যবহারকারীরা বই-সম্পর্কিত ভিউ অ্যাক্সেস করতে পারে তা নিশ্চিত করার জন্য এর ব্যবহার প্রবর্তন করে, পাশাপাশি মডেলগুলিতে মেটা ক্লাসের মাধ্যমে কাস্টম অনুমতি তৈরির বিষয়েও আলোচনা করে। অতিরিক্তভাবে, অধ্যায়টি সুনির্দিষ্ট অনুমতি প্রয়োগের জন্য ব্যবহারের গুরুত্ব তুলে ধরে এবং অ্যাপ্লিকেশনটিকে উত্পাদনে মোতায়েন করার আগে একটি শক্তিশালী অনুমতি কাঠামোর প্রয়োজনীয়তার উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الرابع عشر على تنفيذ الأذونات في مشروع مكتبة Django لتقييد الوصول للمستخدمين المسجلين وإدارة أذونات المستخدم بشكل فعال. ويقدم استخدام لضمان تمكين المستخدمين المعتمدين فقط من الوصول إلى وجهات النظر المتعلقة بالكتب، بينما يناقش أيضًا إنشاء أذونات مخصصة من خلال فئة Meta في النماذج. بالإضافة إلى ذلك، يسلط الفصل الضوء على أهمية استخدام لفرض أذونات محددة ويؤكد على الحاجة إلى بنية أذونات قوية قبل نشر التطبيق في الإنتاج.",
                // Persian
                "فارسی": "فصل 14 بر اجرای مجوزها در پروژه Django Bookstore برای محدود کردن دسترسی به کاربران وارد شده و مدیریت موثر مجوزهای کاربر تمرکز دارد. این استفاده را معرفی می کند تا اطمینان حاصل شود که فقط کاربران تأیید شده می توانند به نماهای مربوط به کتاب دسترسی داشته باشند، در حالی که در مورد ایجاد مجوزهای سفارشی از طریق کلاس متا در مدل ها نیز بحث می شود. علاوه بر این، این فصل اهمیت استفاده برای اجرای مجوزهای خاص را برجسته می کند و بر نیاز به ساختار مجوزهای قوی قبل از استقرار برنامه در تولید تأکید می کند.",
            },
        },
        // 15
        {
            "ChapterName": "Search",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 15 focuses on implementing a basic search functionality for a bookstore using Django, which includes creating a search results page, URL, view, and template. It explains how to handle user input through forms, utilizing GET and POST methods, and demonstrates filtering results with Django's QuerySet and Q objects for more complex queries. The chapter also discusses the importance of search in e-commerce, suggests enhancements for better search capabilities, and highlights the potential for future optimizations and third-party packages to improve the search experience.",
                // German
                "Deutsch": "Kapitel 15 konzentriert sich auf die Implementierung einer grundlegenden Suchfunktion für einen Buchladen mit Django, einschließlich der Erstellung einer Suchergebnisseite, einer URL, einer Ansicht und einer Vorlage. Es erklärt, wie Benutzereingaben über Formulare unter Verwendung von GET- und POST-Methoden verarbeitet werden, und demonstriert das Filtern von Ergebnissen mit Djangos QuerySet- und Q-Objekten für komplexere Abfragen. Das Kapitel erörtert auch die Bedeutung der Suche im E-Commerce, schlägt Verbesserungen für bessere Suchfunktionen vor und hebt das Potenzial für zukünftige Optimierungen und Pakete von Drittanbietern zur Verbesserung des Sucherlebnisses hervor.",
                // Chinese
                "中国人": "第 15 章重点介绍如何使用 Django 为书店实现基本的搜索功能，包括创建搜索结果页面、URL、视图和模板。它解释了如何通过表单处理用户输入、使用 GET 和 POST 方法，并演示了如何使用 Django 的 QuerySet 和 Q 对象过滤更复杂的查询结果。本章还讨论了搜索在电子商务中的重要性，提出了增强搜索功能的建议，并强调了未来优化和第三方软件包改善搜索体验的潜力。",
                // Russian
                "Русский": "Глава 15 фокусируется на реализации базовой функции поиска для книжного магазина с использованием Django, которая включает создание страницы результатов поиска, URL, представления и шаблона. В ней объясняется, как обрабатывать вводимые пользователем данные через формы, используя методы GET и POST, и демонстрируется фильтрация результатов с помощью объектов QuerySet и Q Django для более сложных запросов. В главе также обсуждается важность поиска в электронной коммерции, предлагаются улучшения для улучшения возможностей поиска и подчеркивается потенциал будущих оптимизаций и сторонних пакетов для улучшения поиска.",
                // French
                "Français": "Le chapitre 15 se concentre sur la mise en œuvre d'une fonctionnalité de recherche de base pour une librairie à l'aide de Django, qui comprend la création d'une page de résultats de recherche, d'une URL, d'une vue et d'un modèle. Il explique comment gérer les entrées utilisateur via des formulaires, en utilisant les méthodes GET et POST, et montre comment filtrer les résultats avec les objets QuerySet et Q de Django pour des requêtes plus complexes. Le chapitre aborde également l'importance de la recherche dans le commerce électronique, suggère des améliorations pour de meilleures capacités de recherche et met en évidence le potentiel des optimisations futures et des packages tiers pour améliorer l'expérience de recherche.",
                // Japanese
                "日本語": "第 15 章では、Django を使用して書店の基本的な検索機能を実装することに焦点を当てています。これには、検索結果ページ、URL、ビュー、テンプレートの作成が含まれます。GET メソッドと POST メソッドを使用してフォームからユーザー入力を処理する方法について説明し、より複雑なクエリに対して Django の QuerySet と Q オブジェクトを使用して結果をフィルタリングする方法を示します。また、この章では、e コマースにおける検索の重要性について説明し、検索機能を向上させるための機能強化を提案し、検索エクスペリエンスを向上させるための将来の最適化とサードパーティ パッケージの可能性を強調します。",
                // Korean
                "한국인": "15장은 Django를 사용하여 서점에 대한 기본 검색 기능을 구현하는 데 중점을 두고 있으며, 여기에는 검색 결과 페이지, URL, 뷰 및 템플릿을 만드는 것이 포함됩니다. GET 및 POST 메서드를 사용하여 양식을 통해 사용자 입력을 처리하는 방법을 설명하고, 더 복잡한 쿼리의 경우 Django의 QuerySet 및 Q 객체로 결과를 필터링하는 방법을 보여줍니다. 이 장에서는 또한 전자 상거래에서 검색의 중요성에 대해 논의하고, 더 나은 검색 기능을 위한 개선 사항을 제안하며, 검색 경험을 개선하기 위한 향후 최적화 및 타사 패키지의 잠재력을 강조합니다.",
                // Spanish
                "Español": "El capítulo 15 se centra en la implementación de una funcionalidad de búsqueda básica para una librería utilizando Django, que incluye la creación de una página de resultados de búsqueda, una URL, una vista y una plantilla. Explica cómo manejar la entrada del usuario a través de formularios, utilizando los métodos GET y POST, y demuestra cómo filtrar los resultados con los objetos QuerySet y Q de Django para consultas más complejas. El capítulo también analiza la importancia de la búsqueda en el comercio electrónico, sugiere mejoras para obtener mejores capacidades de búsqueda y destaca el potencial de futuras optimizaciones y paquetes de terceros para mejorar la experiencia de búsqueda.",
                // Hindi
                "हिंदी": "अध्याय 15 Django का उपयोग करके बुकस्टोर के लिए एक बुनियादी खोज कार्यक्षमता को लागू करने पर केंद्रित है, जिसमें एक खोज परिणाम पृष्ठ, URL, दृश्य और टेम्पलेट बनाना शामिल है। यह बताता है कि GET और POST विधियों का उपयोग करके फ़ॉर्म के माध्यम से उपयोगकर्ता इनपुट को कैसे संभालना है, और अधिक जटिल क्वेरी के लिए Django के QuerySet और Q ऑब्जेक्ट के साथ परिणामों को फ़िल्टर करना प्रदर्शित करता है। अध्याय ई-कॉमर्स में खोज के महत्व पर भी चर्चा करता है, बेहतर खोज क्षमताओं के लिए संवर्द्धन का सुझाव देता है, और खोज अनुभव को बेहतर बनाने के लिए भविष्य के अनुकूलन और तीसरे पक्ष के पैकेजों की क्षमता पर प्रकाश डालता है।",
                // Portuguese
                "Português": "O Capítulo 15 centra-se na implementação de uma funcionalidade básica de pesquisa para uma livraria utilizando Django, que inclui a criação de uma página de resultados de pesquisa, URL, vista e modelo. Explica como lidar com a entrada do utilizador através de formulários, utilizando os métodos GET e POST, e demonstra a filtragem de resultados com os objetos QuerySet e Q do Django para consultas mais complexas. O capítulo também discute a importância da investigação no comércio eletrónico, sugere melhorias para melhores capacidades de investigação e destaca o potencial para otimizações futuras e pacotes de terceiros para melhorar a experiência de investigação.",
                // Bengali
                "বাংলা": "অধ্যায় 15 জ্যাঙ্গো ব্যবহার করে একটি বইয়ের দোকানের জন্য একটি মৌলিক অনুসন্ধান কার্যকারিতা বাস্তবায়নের উপর ফোকাস করে, যার মধ্যে একটি অনুসন্ধান ফলাফল পৃষ্ঠা, URL, ভিউ এবং টেমপ্লেট তৈরি করা অন্তর্ভুক্ত। এটি GET এবং POST পদ্ধতি ব্যবহার করে ফর্মের মাধ্যমে ব্যবহারকারীর ইনপুট কীভাবে পরিচালনা করতে হয় তা ব্যাখ্যা করে এবং আরও জটিল প্রশ্নের জন্য জ্যাঙ্গোর কোয়েরিসেট এবং কিউ অবজেক্টের সাথে ফিল্টারিং ফলাফল প্রদর্শন করে। অধ্যায়টি ই-কমার্সে অনুসন্ধানের গুরুত্ব নিয়েও আলোচনা করে, আরও ভাল অনুসন্ধান ক্ষমতার জন্য বর্ধনের পরামর্শ দেয় এবং অনুসন্ধানের অভিজ্ঞতা উন্নত করার জন্য ভবিষ্যতের অপ্টিমাইজেশন এবং তৃতীয় পক্ষের প্যাকেজগুলির সম্ভাব্যতা তুলে ধরে।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الخامس عشر على تنفيذ وظيفة بحث أساسية لمتجر كتب باستخدام Django، والتي تتضمن إنشاء صفحة نتائج بحث وعنوان URL وعرض ونموذج. ويشرح كيفية التعامل مع إدخال المستخدم من خلال النماذج، باستخدام أساليب GET وPOST، ويوضح تصفية النتائج باستخدام QuerySet وQ من Django للاستعلامات الأكثر تعقيدًا. يناقش الفصل أيضًا أهمية البحث في التجارة الإلكترونية، ويقترح تحسينات لتحسين قدرات البحث، ويسلط الضوء على إمكانية إجراء تحسينات مستقبلية وحزم من جهات خارجية لتحسين تجربة البحث.",
                // Persian
                "فارسی": "فصل 15 بر اجرای یک قابلیت جستجوی اساسی برای یک کتابفروشی با استفاده از جنگو متمرکز است، که شامل ایجاد صفحه نتایج جستجو، URL، نمایش و الگو است. نحوه مدیریت ورودی کاربر از طریق فرم‌ها، با استفاده از روش‌های GET و POST را توضیح می‌دهد و نتایج فیلتر کردن را با اشیاء QuerySet و Q جنگو برای جست‌وجوهای پیچیده‌تر نشان می‌دهد. این فصل همچنین اهمیت جستجو در تجارت الکترونیک را مورد بحث قرار می‌دهد، پیشرفت‌هایی را برای قابلیت‌های جستجوی بهتر پیشنهاد می‌کند، و پتانسیل بهینه‌سازی‌های آینده و بسته‌های شخص ثالث را برای بهبود تجربه جستجو برجسته می‌کند.",
            },
        },
        // 16
        {
            "ChapterName": "Performance",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 16 focuses on optimizing web application performance, emphasizing the importance of addressing performance issues as traffic increases while cautioning against premature optimization. It highlights techniques such as reducing SQL queries using and , implementing caching strategies to minimize repeated calculations, and utilizing indexing to speed up database searches. The chapter also encourages the use of tools like for monitoring SQL queries and suggests optimizing front-end assets, including image compression and leveraging CDNs, to enhance overall site efficiency.",
                // German
                "Deutsch": "Kapitel 16 konzentriert sich auf die Optimierung der Leistung von Webanwendungen und betont, wie wichtig es ist, Leistungsprobleme bei zunehmendem Datenverkehr zu beheben, warnt aber vor vorzeitiger Optimierung. Es hebt Techniken hervor, wie die Reduzierung von SQL-Abfragen mithilfe von und , die Implementierung von Caching-Strategien zur Minimierung wiederholter Berechnungen und die Nutzung von Indizierung zur Beschleunigung von Datenbanksuchen. Das Kapitel empfiehlt außerdem die Verwendung von Tools wie zur Überwachung von SQL-Abfragen und schlägt die Optimierung von Front-End-Assets vor, einschließlich Bildkomprimierung und Nutzung von CDNs, um die Gesamteffizienz der Site zu verbessern.",
                // Chinese
                "中国人": "第 16 章重点介绍如何优化 Web 应用程序性能，强调在流量增加时解决性能问题的重要性，同时提醒不要过早进行优化。它重点介绍了一些技术，例如使用和减少 SQL 查询、实施缓存策略以最大限度地减少重复计算以及利用索引来加快数据库搜索速度。本章还鼓励使用诸如监控 SQL 查询的工具，并建议优化前端资产（包括图像压缩和利用 CDN）以提高网站的整体效率。",
                // Russian
                "Русский": "Глава 16 фокусируется на оптимизации производительности веб-приложений, подчеркивая важность решения проблем производительности по мере увеличения трафика, одновременно предостерегая от преждевременной оптимизации. В ней освещаются такие методы, как сокращение SQL-запросов с помощью и , реализация стратегий кэширования для минимизации повторных вычислений и использование индексации для ускорения поиска в базе данных. Глава также поощряет использование таких инструментов, как мониторинг SQL-запросов, и предлагает оптимизировать front-end-активы, включая сжатие изображений и использование CDN, для повышения общей эффективности сайта.",
                // French
                "Français": "Le chapitre 16 se concentre sur l'optimisation des performances des applications Web, en soulignant l'importance de résoudre les problèmes de performances à mesure que le trafic augmente, tout en mettant en garde contre une optimisation prématurée. Il met en évidence des techniques telles que la réduction des requêtes SQL à l'aide de et , la mise en œuvre de stratégies de mise en cache pour minimiser les calculs répétés et l'utilisation de l'indexation pour accélérer les recherches dans les bases de données. Le chapitre encourage également l'utilisation d'outils tels que pour surveiller les requêtes SQL et suggère d'optimiser les ressources frontales, notamment la compression d'images et l'exploitation des CDN, pour améliorer l'efficacité globale du site.",
                // Japanese
                "日本語": "第 16 章では、Web アプリケーションのパフォーマンスの最適化に焦点を当て、トラフィックの増加に伴うパフォーマンスの問題に対処することの重要性を強調するとともに、時期尚早な最適化に対する警告を発しています。 と を使用して SQL クエリを削減する、繰り返し計算を最小限に抑えるためのキャッシュ戦略を実装する、インデックスを利用してデータベース検索を高速化するなどの手法に焦点を当てています。 また、この章では、SQL クエリを監視するための などのツールの使用を推奨し、画像圧縮や CDN の活用など、フロントエンド アセットを最適化してサイト全体の効率を高めることを提案しています。",
                // Korean
                "한국인": "16장은 웹 애플리케이션 성능 최적화에 초점을 맞추고, 트래픽이 증가함에 따라 성능 문제를 해결하는 것의 중요성을 강조하면서 조기 최적화에 대한 경고를 합니다. 및 를 사용하여 SQL 쿼리를 줄이고, 반복 계산을 최소화하기 위한 캐싱 전략을 구현하고, 인덱싱을 사용하여 데이터베이스 검색 속도를 높이는 것과 같은 기술을 강조합니다. 또한 이 장에서는 SQL 쿼리를 모니터링하기 위한 와 같은 도구 사용을 권장하고, 이미지 압축 및 CDN 활용을 포함한 프런트엔드 자산을 최적화하여 전반적인 사이트 효율성을 개선할 것을 제안합니다.",
                // Spanish
                "Español": "El capítulo 16 se centra en optimizar el rendimiento de las aplicaciones web, destacando la importancia de abordar los problemas de rendimiento a medida que aumenta el tráfico y advirtiendo contra la optimización prematura. Destaca técnicas como la reducción de consultas SQL mediante y , la implementación de estrategias de almacenamiento en caché para minimizar los cálculos repetidos y el uso de la indexación para acelerar las búsquedas en bases de datos. El capítulo también fomenta el uso de herramientas como para supervisar las consultas SQL y sugiere optimizar los activos del front-end, incluida la compresión de imágenes y el aprovechamiento de las CDN, para mejorar la eficiencia general del sitio.",
                // Hindi
                "हिंदी": "अध्याय 16 वेब एप्लिकेशन प्रदर्शन को अनुकूलित करने पर केंद्रित है, ट्रैफ़िक बढ़ने पर प्रदर्शन संबंधी समस्याओं को संबोधित करने के महत्व पर जोर देते हुए समय से पहले अनुकूलन के खिलाफ चेतावनी देता है। यह और का उपयोग करके SQL क्वेरी को कम करने, दोहराए गए गणनाओं को कम करने के लिए कैशिंग रणनीतियों को लागू करने और डेटाबेस खोजों को गति देने के लिए अनुक्रमण का उपयोग करने जैसी तकनीकों पर प्रकाश डालता है। अध्याय SQL क्वेरी की निगरानी के लिए जैसे उपकरणों के उपयोग को भी प्रोत्साहित करता है और समग्र साइट दक्षता को बढ़ाने के लिए छवि संपीड़न और CDN का लाभ उठाने सहित फ्रंट-एंड परिसंपत्तियों को अनुकूलित करने का सुझाव देता है।",
                // Portuguese
                "Português": "O Capítulo 16 centra-se na otimização do desempenho das aplicações Web, enfatizando a importância de abordar os problemas de desempenho à medida que o tráfego aumenta, ao mesmo tempo que alerta contra a otimização prematura. Destaca técnicas como a redução de consultas SQL utilizando e, implementação de estratégias de cache para minimizar cálculos repetidos e utilização de indexação para acelerar pesquisas em bases de dados. O capítulo também incentiva a utilização de ferramentas como a monitorização de consultas SQL e sugere a otimização de ativos de front-end, incluindo a compressão de imagens e o aproveitamento de CDNs, para aumentar a eficiência global do website.",
                // Bengali
                "বাংলা": "অধ্যায় 16 ওয়েব অ্যাপ্লিকেশন কর্মক্ষমতা অপ্টিমাইজ করার উপর ফোকাস করে, অকাল অপ্টিমাইজেশানের বিরুদ্ধে সতর্ক করার সাথে সাথে ট্রাফিক বৃদ্ধির সাথে পারফরম্যান্সের সমস্যাগুলি মোকাবেলার গুরুত্বের উপর জোর দেয়। এটি কৌশলগুলিকে হাইলাইট করে যেমন এসকিউএল কোয়েরিগুলি ব্যবহার করে হ্রাস করা এবং , বারবার গণনাগুলি হ্রাস করার জন্য ক্যাশিং কৌশলগুলি প্রয়োগ করা এবং ডাটাবেস অনুসন্ধানের গতি বাড়ানোর জন্য ইন্ডেক্সিং ব্যবহার করা৷ অধ্যায়টি এসকিউএল কোয়েরি নিরীক্ষণের মতো সরঞ্জামগুলির ব্যবহারকে উত্সাহিত করে এবং সামগ্রিক সাইটের দক্ষতা বাড়ানোর জন্য ইমেজ কম্প্রেশন এবং সিডিএন ব্যবহার সহ ফ্রন্ট-এন্ড সম্পদগুলিকে অপ্টিমাইজ করার পরামর্শ দেয়।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل السادس عشر على تحسين أداء تطبيقات الويب، مع التأكيد على أهمية معالجة مشكلات الأداء مع زيادة حركة المرور مع التحذير من التحسين المبكر. ويسلط الضوء على تقنيات مثل تقليل استعلامات SQL باستخدام وتنفيذ استراتيجيات التخزين المؤقت لتقليل الحسابات المتكررة، والاستفادة من الفهرسة لتسريع عمليات البحث في قاعدة البيانات. كما يشجع الفصل استخدام أدوات مثل لمراقبة استعلامات SQL ويقترح تحسين أصول الواجهة الأمامية، بما في ذلك ضغط الصور والاستفادة من شبكات CDN، لتعزيز كفاءة الموقع بشكل عام.",
                // Persian
                "فارسی": "فصل 16 بر بهینه‌سازی عملکرد برنامه‌های کاربردی وب متمرکز است و بر اهمیت پرداختن به مسائل مربوط به عملکرد با افزایش ترافیک و در عین حال احتیاط در مورد بهینه‌سازی زودرس تأکید می‌کند. تکنیک هایی مانند کاهش پرس و جوهای SQL با استفاده از و، اجرای استراتژی های کش برای به حداقل رساندن محاسبات مکرر، و استفاده از نمایه سازی برای سرعت بخشیدن به جستجوهای پایگاه داده را برجسته می کند. این فصل همچنین استفاده از ابزارهایی مانند نظارت بر پرسش‌های SQL را تشویق می‌کند و بهینه‌سازی دارایی‌های جلویی، از جمله فشرده‌سازی تصویر و استفاده از CDN‌ها را برای افزایش کارایی کلی سایت پیشنهاد می‌کند.",
            },
        },
        // 17
        {
            "ChapterName": "Security",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 17 focuses on the importance of security in web development, particularly within the Django framework, which provides robust built-in protections against common vulnerabilities such as SQL injection, XSS, and CSRF. It emphasizes the significance of implementing security features correctly, utilizing environment variables for sensitive data, and regularly updating Django to maintain security. Additionally, the chapter discusses the risks posed by social engineering and phishing, the necessity of using a deployment checklist, and strategies for hardening admin access, ultimately highlighting that security is an ongoing effort requiring vigilance and best practices.",
                // German
                "Deutsch": "Kapitel 17 konzentriert sich auf die Bedeutung der Sicherheit in der Webentwicklung, insbesondere im Django-Framework, das robusten integrierten Schutz gegen gängige Schwachstellen wie SQL-Injection, XSS und CSRF bietet. Es betont die Bedeutung der korrekten Implementierung von Sicherheitsfunktionen, der Verwendung von Umgebungsvariablen für vertrauliche Daten und der regelmäßigen Aktualisierung von Django zur Wahrung der Sicherheit. Darüber hinaus werden in diesem Kapitel die Risiken von Social Engineering und Phishing, die Notwendigkeit der Verwendung einer Bereitstellungscheckliste und Strategien zur Absicherung des Administratorzugriffs erörtert. Dabei wird letztendlich hervorgehoben, dass Sicherheit ein fortlaufender Prozess ist, der Wachsamkeit und bewährte Methoden erfordert.",
                // Chinese
                "中国人": "第 17 章重点介绍了安全性在 Web 开发中的重要性，特别是在 Django 框架中，该框架提供了针对常见漏洞（例如 SQL 注入、XSS 和 CSRF）的强大内置保护。它强调了正确实现安全功能、利用环境变量来处理敏感数据以及定期更新 Django 以维护安全性的重要性。此外，本章还讨论了社会工程和网络钓鱼带来的风险、使用部署清单的必要性以及强化管理员访问权限的策略，最终强调安全性是一项需要警惕和最佳实践的持续工作。",
                // Russian
                "Русский": "Глава 17 фокусируется на важности безопасности в веб-разработке, особенно в рамках Django, который обеспечивает надежную встроенную защиту от распространенных уязвимостей, таких как SQL-инъекция, XSS и CSRF. В ней подчеркивается важность правильной реализации функций безопасности, использования переменных среды для конфиденциальных данных и регулярного обновления Django для поддержания безопасности. Кроме того, в главе обсуждаются риски, связанные с социальной инженерией и фишингом, необходимость использования контрольного списка развертывания и стратегии укрепления административного доступа, в конечном итоге подчеркивая, что безопасность — это постоянные усилия, требующие бдительности и передовой практики.",
                // French
                "Français": "Le chapitre 17 met l'accent sur l'importance de la sécurité dans le développement Web, en particulier dans le cadre de Django, qui fournit des protections intégrées robustes contre les vulnérabilités courantes telles que l'injection SQL, XSS et CSRF. Il souligne l'importance d'implémenter correctement les fonctionnalités de sécurité, d'utiliser des variables d'environnement pour les données sensibles et de mettre à jour régulièrement Django pour maintenir la sécurité. En outre, le chapitre aborde les risques posés par l'ingénierie sociale et le phishing, la nécessité d'utiliser une liste de contrôle de déploiement et les stratégies de renforcement de l'accès administrateur, soulignant finalement que la sécurité est un effort continu nécessitant vigilance et bonnes pratiques.",
                // Japanese
                "日本語": "第 17 章では、Web 開発におけるセキュリティの重要性、特に SQL インジェクション、XSS、CSRF などの一般的な脆弱性に対する強力な組み込み保護を提供する Django フレームワークにおけるセキュリティの重要性に焦点を当てています。セキュリティ機能を正しく実装すること、機密データに環境変数を使用すること、セキュリティを維持するために Django を定期的に更新することの重要性を強調しています。さらに、この章では、ソーシャル エンジニアリングとフィッシングによってもたらされるリスク、デプロイメント チェックリストを使用する必要性、管理者アクセスを強化するための戦略について説明し、セキュリティは警戒とベスト プラクティスを必要とする継続的な取り組みであることを強調しています。",
                // Korean
                "한국인": "17장은 웹 개발에서 보안의 중요성에 초점을 맞추고, 특히 SQL 주입, XSS, CSRF와 같은 일반적인 취약성에 대한 강력한 내장 보호 기능을 제공하는 Django 프레임워크 내에서 보안을 다룹니다. 보안 기능을 올바르게 구현하고, 민감한 데이터에 환경 변수를 활용하고, 보안을 유지하기 위해 Django를 정기적으로 업데이트하는 것의 중요성을 강조합니다. 또한 이 장에서는 소셜 엔지니어링과 피싱으로 인한 위험, 배포 체크리스트 사용의 필요성, 관리자 액세스 강화 전략에 대해 논의하며, 궁극적으로 보안은 경계와 모범 사례가 필요한 지속적인 노력임을 강조합니다.",
                // Spanish
                "Español": "El capítulo 17 se centra en la importancia de la seguridad en el desarrollo web, en particular dentro del marco de Django, que proporciona sólidas protecciones integradas contra vulnerabilidades comunes como la inyección SQL, XSS y CSRF. Destaca la importancia de implementar las características de seguridad correctamente, utilizar variables de entorno para datos confidenciales y actualizar Django regularmente para mantener la seguridad. Además, el capítulo analiza los riesgos que plantean la ingeniería social y el phishing, la necesidad de utilizar una lista de verificación de implementación y las estrategias para reforzar el acceso de administrador, destacando en última instancia que la seguridad es un esfuerzo continuo que requiere vigilancia y las mejores prácticas.",
                // Hindi
                "हिंदी": "अध्याय 17 वेब विकास में सुरक्षा के महत्व पर ध्यान केंद्रित करता है, विशेष रूप से Django ढांचे के भीतर, जो SQL इंजेक्शन, XSS और CSRF जैसी सामान्य कमजोरियों के खिलाफ मजबूत अंतर्निहित सुरक्षा प्रदान करता है। यह सुरक्षा सुविधाओं को सही ढंग से लागू करने, संवेदनशील डेटा के लिए पर्यावरण चर का उपयोग करने और सुरक्षा बनाए रखने के लिए Django को नियमित रूप से अपडेट करने के महत्व पर जोर देता है। इसके अतिरिक्त, अध्याय सामाजिक इंजीनियरिंग और फ़िशिंग द्वारा उत्पन्न जोखिमों, परिनियोजन चेकलिस्ट का उपयोग करने की आवश्यकता और व्यवस्थापक पहुँच को सख्त करने की रणनीतियों पर चर्चा करता है, अंततः इस बात पर प्रकाश डालता है कि सुरक्षा एक सतत प्रयास है जिसके लिए सतर्कता और सर्वोत्तम प्रथाओं की आवश्यकता होती है।",
                // Portuguese
                "Português": "O Capítulo 17 centra-se na importância da segurança no desenvolvimento web, particularmente dentro da estrutura Django, que fornece proteções integradas robustas contra vulnerabilidades comuns, como a injeção de SQL, XSS e CSRF. Realça a importância de implementar as funcionalidades de segurança corretamente, utilizando variáveis ​​de ambiente para dados sensíveis e atualizando regularmente o Django para manter a segurança. Além disso, o capítulo discute os riscos representados pela engenharia social e pelo phishing, a necessidade de utilizar uma lista de verificação de implementação e estratégias para reforçar o acesso administrativo, destacando, em última análise, que a segurança é um esforço contínuo que exige vigilância e melhores práticas.",
                // Bengali
                "বাংলা": "অধ্যায় 17 ওয়েব ডেভেলপমেন্টে নিরাপত্তার গুরুত্বের উপর ফোকাস করে, বিশেষ করে জ্যাঙ্গো ফ্রেমওয়ার্কের মধ্যে, যা SQL ইনজেকশন, XSS, এবং CSRF এর মতো সাধারণ দুর্বলতার বিরুদ্ধে শক্তিশালী অন্তর্নির্মিত সুরক্ষা প্রদান করে। এটি নিরাপত্তা বৈশিষ্ট্যগুলিকে সঠিকভাবে প্রয়োগ করার, সংবেদনশীল ডেটার জন্য পরিবেশের ভেরিয়েবল ব্যবহার করার এবং নিরাপত্তা বজায় রাখার জন্য নিয়মিতভাবে জ্যাঙ্গো আপডেট করার তাত্পর্যের উপর জোর দেয়। উপরন্তু, অধ্যায়টি সোশ্যাল ইঞ্জিনিয়ারিং এবং ফিশিং দ্বারা সৃষ্ট ঝুঁকি, একটি স্থাপনার চেকলিস্ট ব্যবহার করার প্রয়োজনীয়তা এবং অ্যাডমিন অ্যাক্সেসকে কঠোর করার কৌশলগুলি নিয়ে আলোচনা করে, শেষ পর্যন্ত হাইলাইট করে যে নিরাপত্তা একটি চলমান প্রচেষ্টা যার জন্য সতর্কতা এবং সর্বোত্তম অনুশীলনের প্রয়োজন।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل السابع عشر على أهمية الأمان في تطوير الويب، وخاصةً ضمن إطار عمل Django، الذي يوفر حماية قوية مدمجة ضد الثغرات الأمنية الشائعة مثل حقن SQL وXSS وCSRF. ويؤكد على أهمية تنفيذ ميزات الأمان بشكل صحيح، والاستفادة من متغيرات البيئة للبيانات الحساسة، وتحديث Django بانتظام للحفاظ على الأمان. بالإضافة إلى ذلك، يناقش الفصل المخاطر التي يفرضها الهندسة الاجتماعية والتصيد الاحتيالي، وضرورة استخدام قائمة التحقق من النشر، والاستراتيجيات لتعزيز وصول المسؤول، مع تسليط الضوء في النهاية على أن الأمان هو جهد مستمر يتطلب اليقظة وأفضل الممارسات.",
                // Persian
                "فارسی": "فصل 17 بر اهمیت امنیت در توسعه وب تمرکز دارد، به ویژه در چارچوب جنگو، که محافظت های داخلی قوی در برابر آسیب پذیری های رایج مانند تزریق SQL، XSS و CSRF ارائه می دهد. این برنامه بر اهمیت پیاده‌سازی صحیح ویژگی‌های امنیتی، استفاده از متغیرهای محیطی برای داده‌های حساس و به‌روزرسانی منظم جنگو برای حفظ امنیت تأکید می‌کند. علاوه بر این، این فصل خطرات ناشی از مهندسی اجتماعی و فیشینگ، لزوم استفاده از چک لیست استقرار، و استراتژی‌هایی برای سخت‌تر کردن دسترسی مدیریت را مورد بحث قرار می‌دهد و در نهایت تاکید می‌کند که امنیت یک تلاش مداوم است که نیازمند هوشیاری و بهترین شیوه‌ها است.",
            },
        },
        // 18
        {
            "ChapterName": "Deployment",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "Chapter 18 focuses on deploying a Django project to a public server, emphasizing the transition from local development to production. It discusses the choice between Platform-as-a-Service (PaaS) like Heroku and Infrastructure-as-a-Service (IaaS), highlighting the benefits of using Heroku for its user-friendly deployment process. The chapter covers essential configurations, such as creating a file for Docker deployment, using WhiteNoise for efficient static file management, and setting up the Heroku Command Line Interface (CLI) for deployment, while also addressing the handling of media files and the importance of a production-ready web server like Gunicorn.",
                // German
                "Deutsch": "Kapitel 18 konzentriert sich auf die Bereitstellung eines Django-Projekts auf einem öffentlichen Server und betont den Übergang von der lokalen Entwicklung zur Produktion. Es erörtert die Wahl zwischen Platform-as-a-Service (PaaS) wie Heroku und Infrastructure-as-a-Service (IaaS) und hebt die Vorteile der Verwendung von Heroku aufgrund seines benutzerfreundlichen Bereitstellungsprozesses hervor. Das Kapitel behandelt wichtige Konfigurationen, wie das Erstellen einer Datei für die Docker-Bereitstellung, die Verwendung von WhiteNoise für eine effiziente statische Dateiverwaltung und das Einrichten der Heroku-Befehlszeilenschnittstelle (CLI) für die Bereitstellung. Dabei wird auch auf die Handhabung von Mediendateien und die Bedeutung eines produktionsbereiten Webservers wie Gunicorn eingegangen.",
                // Chinese
                "中国人": "第 18 章重点介绍如何将 Django 项目部署到公共服务器，强调从本地开发到生产的过渡。它讨论了 Heroku 等平台即服务 (PaaS) 和基础设施即服务 (IaaS) 之间的选择，并强调了使用 Heroku 的用户友好型部署流程的好处。本章介绍了基本配置，例如为 Docker 部署创建文件、使用 WhiteNoise 进行高效的静态文件管理以及设置 Heroku 命令行界面 (CLI) 进行部署，同时还讨论了媒体文件的处理以及 Gunicorn 等可用于生产的 Web 服务器的重要性。",
                // Russian
                "Русский": "Глава 18 посвящена развертыванию проекта Django на публичном сервере, подчеркивая переход от локальной разработки к производству. В ней обсуждается выбор между Platform-as-a-Service (PaaS), например Heroku, и Infrastructure-as-a-Service (IaaS), подчеркивая преимущества использования Heroku для удобного процесса развертывания. В главе рассматриваются основные конфигурации, такие как создание файла для развертывания Docker, использование WhiteNoise для эффективного управления статическими файлами и настройка интерфейса командной строки Heroku (CLI) для развертывания, а также рассматривается обработка медиафайлов и важность готового к производству веб-сервера, например Gunicorn.",
                // French
                "Français": "Le chapitre 18 se concentre sur le déploiement d'un projet Django sur un serveur public, en mettant l'accent sur la transition du développement local vers la production. Il aborde le choix entre une plate-forme en tant que service (PaaS) comme Heroku et une infrastructure en tant que service (IaaS), en soulignant les avantages de l'utilisation d'Heroku pour son processus de déploiement convivial. Le chapitre couvre les configurations essentielles, telles que la création d'un fichier pour le déploiement de Docker, l'utilisation de WhiteNoise pour une gestion efficace des fichiers statiques et la configuration de l'interface de ligne de commande (CLI) Heroku pour le déploiement, tout en abordant également la gestion des fichiers multimédias et l'importance d'un serveur Web prêt pour la production comme Gunicorn.",
                // Japanese
                "日本語": "第 18 章では、Django プロジェクトをパブリック サーバーにデプロイすることに焦点を当て、ローカル開発から本番環境への移行を強調しています。Heroku などの Platform-as-a-Service (PaaS) と Infrastructure-as-a-Service (IaaS) の選択について説明し、ユーザー フレンドリなデプロイ プロセスを実現する Heroku を使用する利点を強調しています。この章では、Docker デプロイ用のファイルの作成、効率的な静的ファイル管理のための WhiteNoise の使用、デプロイ用の Heroku コマンド ライン インターフェイス (CLI) の設定などの重要な構成について説明し、メディア ファイルの処理や、Gunicorn などの本番環境対応の Web サーバーの重要性についても説明します。",
                // Korean
                "한국인": "18장은 Django 프로젝트를 퍼블릭 서버에 배포하는 데 중점을 두고 로컬 개발에서 프로덕션으로의 전환을 강조합니다. Heroku와 같은 Platform-as-a-Service(PaaS)와 Infrastructure-as-a-Service(IaaS) 중에서 선택하는 것에 대해 논의하며, 사용자 친화적인 배포 프로세스를 위해 Heroku를 사용하는 이점을 강조합니다. 이 장에서는 Docker 배포를 위한 파일 생성, 효율적인 정적 파일 관리를 위한 WhiteNoise 사용, 배포를 위한 Heroku 명령줄 인터페이스(CLI) 설정과 같은 필수 구성을 다루며, 미디어 파일 처리와 Gunicorn과 같은 프로덕션에 적합한 웹 서버의 중요성도 다룹니다.",
                // Spanish
                "Español": "El capítulo 18 se centra en la implementación de un proyecto de Django en un servidor público, haciendo hincapié en la transición del desarrollo local a la producción. Analiza la elección entre una plataforma como servicio (PaaS) como Heroku y una infraestructura como servicio (IaaS), destacando los beneficios de usar Heroku por su proceso de implementación fácil de usar. El capítulo cubre configuraciones esenciales, como la creación de un archivo para la implementación de Docker, el uso de WhiteNoise para la gestión eficiente de archivos estáticos y la configuración de la interfaz de línea de comandos (CLI) de Heroku para la implementación, al tiempo que aborda el manejo de archivos multimedia y la importancia de un servidor web listo para producción como Gunicorn.",
                // Hindi
                "हिंदी": "अध्याय 18 एक Django प्रोजेक्ट को सार्वजनिक सर्वर पर तैनात करने पर केंद्रित है, जो स्थानीय विकास से उत्पादन में संक्रमण पर जोर देता है। यह Heroku जैसे प्लेटफ़ॉर्म-एज़-ए-सर्विस (PaaS) और इंफ्रास्ट्रक्चर-एज़-ए-सर्विस (IaaS) के बीच चयन पर चर्चा करता है, जो उपयोगकर्ता के अनुकूल तैनाती प्रक्रिया के लिए Heroku का उपयोग करने के लाभों पर प्रकाश डालता है। अध्याय में आवश्यक कॉन्फ़िगरेशन शामिल हैं, जैसे कि Docker परिनियोजन के लिए फ़ाइल बनाना, कुशल स्थिर फ़ाइल प्रबंधन के लिए व्हाइटनॉइज़ का उपयोग करना और परिनियोजन के लिए Heroku कमांड लाइन इंटरफ़ेस (CLI) सेट करना, साथ ही मीडिया फ़ाइलों की हैंडलिंग और Gunicorn जैसे उत्पादन-तैयार वेब सर्वर के महत्व को संबोधित करना।",
                // Portuguese
                "Português": "O Capítulo 18 centra-se na implementação de um projeto Django num servidor público, enfatizando a transição do desenvolvimento local para a produção. Discute a escolha entre plataforma como serviço (PaaS), como o Heroku, e infraestrutura como serviço (IaaS), destacando os benefícios da utilização do Heroku pelo seu processo de implementação fácil de utilizar. O capítulo aborda configurações essenciais, como a criação de um ficheiro para a implementação do Docker, a utilização do WhiteNoise para uma gestão eficiente de ficheiros estáticos e a configuração da interface de linha de comandos (CLI) Heroku para a implementação, ao mesmo tempo que aborda o tratamento de ficheiros de media e a importância de um servidor web pronto para produção como o Gunicorn.",
                // Bengali
                "বাংলা": "অধ্যায় 18 একটি পাবলিক সার্ভারে একটি জ্যাঙ্গো প্রকল্প স্থাপনের উপর দৃষ্টি নিবদ্ধ করে, স্থানীয় উন্নয়ন থেকে উৎপাদনে রূপান্তরের উপর জোর দেয়। এটি Heroku এবং Infrastructure-as-a-service (IAAS) এর মত প্ল্যাটফর্ম-এ-সার্ভিস (PaaS) এর মধ্যে পছন্দ নিয়ে আলোচনা করে, Heroku এর ব্যবহারকারী-বান্ধব স্থাপনার প্রক্রিয়ার জন্য ব্যবহারের সুবিধাগুলি তুলে ধরে। অধ্যায়টি প্রয়োজনীয় কনফিগারেশনগুলিকে কভার করে, যেমন ডকার স্থাপনার জন্য একটি ফাইল তৈরি করা, দক্ষ স্ট্যাটিক ফাইল পরিচালনার জন্য হোয়াইটনোইস ব্যবহার করা এবং স্থাপনার জন্য হেরোকু কমান্ড লাইন ইন্টারফেস (সিএলআই) সেট আপ করা, পাশাপাশি মিডিয়া ফাইলগুলির হ্যান্ডলিং এবং এর গুরুত্বকে সম্বোধন করা। গুনিকর্নের মত উৎপাদন-প্রস্তুত ওয়েব সার্ভার।",
                // Arabic
                "عَرَبِيّ": "يركز الفصل الثامن عشر على نشر مشروع Django على خادم عام، مع التركيز على الانتقال من التطوير المحلي إلى الإنتاج. ويناقش الاختيار بين منصة كخدمة (PaaS) مثل Heroku والبنية الأساسية كخدمة (IaaS)، مع تسليط الضوء على فوائد استخدام Heroku لعملية النشر سهلة الاستخدام. ويغطي الفصل التكوينات الأساسية، مثل إنشاء ملف لنشر Docker، واستخدام WhiteNoise لإدارة الملفات الثابتة بكفاءة، وإعداد واجهة سطر أوامر Heroku (CLI) للنشر، مع معالجة التعامل مع ملفات الوسائط وأهمية خادم الويب الجاهز للإنتاج مثل Gunicorn.",
                // Persian
                "فارسی": "فصل 18 بر استقرار یک پروژه جنگو در یک سرور عمومی متمرکز است و بر انتقال از توسعه محلی به تولید تأکید دارد. این انتخاب بین Platform-as-a-A-Service (PaaS) مانند Heroku و Infrastructure-as-a-A-Service (IaaS) را مورد بحث قرار می دهد و مزایای استفاده از Heroku را برای فرآیند استقرار کاربر پسند آن برجسته می کند. این فصل پیکربندی‌های ضروری را پوشش می‌دهد، مانند ایجاد یک فایل برای استقرار Docker، استفاده از WhiteNoise برای مدیریت کارآمد فایل استاتیک، و راه‌اندازی رابط خط فرمان Heroku (CLI) برای استقرار، در حالی که به مدیریت فایل‌های رسانه‌ای و اهمیت یک وب سرور آماده تولید مانند Gunicorn.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "Django for Professionals by William S. Vincent is a comprehensive guide for developers looking to build and deploy production-level Django applications. Unlike beginner guides, this book assumes a foundational knowledge of Django and focuses on taking those skills to the next level. It covers essential topics such as advanced database modeling, creating reusable Django apps, and configuring environments for security and performance. The book emphasizes real-world development, helping readers understand how to structure Django projects in ways that are scalable, maintainable, and suitable for professional use.",
            // German
            "Deutsch": "„Django für Profis“ von William S. Vincent ist ein umfassender Leitfaden für Entwickler, die Django-Anwendungen auf Produktionsniveau erstellen und bereitstellen möchten. Im Gegensatz zu Anleitungen für Anfänger setzt dieses Buch grundlegende Kenntnisse in Django voraus und konzentriert sich darauf, diese Fähigkeiten auf die nächste Ebene zu bringen. Es behandelt wichtige Themen wie erweiterte Datenbankmodellierung, das Erstellen wiederverwendbarer Django-Apps und das Konfigurieren von Umgebungen für Sicherheit und Leistung. Das Buch legt den Schwerpunkt auf die Entwicklung in der realen Welt und hilft den Lesern zu verstehen, wie Django-Projekte so strukturiert werden können, dass sie skalierbar, wartungsfreundlich und für den professionellen Einsatz geeignet sind.",
            // Chinese
            "中国人": "William S. Vincent 撰写的《Django for Professionals》是一本全面的指南，适合希望构建和部署生产级 Django 应用程序的开发人员。与初学者指南不同，本书假设读者具备 Django 的基础知识，并着重于将这些技能提升到一个新的水平。它涵盖了高级数据库建模、创建可重复使用的 Django 应用程序以及配置环境以提高安全性和性能等基本主题。本书强调现实世界的开发，帮助读者了解如何以可扩展、可维护且适合专业用途的方式构建 Django 项目。",
            // Russian
            "Русский": "Django for Professionals Уильяма С. Винсента — это всеобъемлющее руководство для разработчиков, желающих создавать и развертывать приложения Django на уровне производства. В отличие от руководств для начинающих, эта книга предполагает наличие базовых знаний Django и фокусируется на том, чтобы вывести эти навыки на новый уровень. Она охватывает такие важные темы, как расширенное моделирование баз данных, создание повторно используемых приложений Django и настройка сред для обеспечения безопасности и производительности. В книге особое внимание уделяется разработке в реальном мире, помогая читателям понять, как структурировать проекты Django таким образом, чтобы они были масштабируемыми, поддерживаемыми и подходящими для профессионального использования.",
            // French
            "Français": "Django for Professionals de William S. Vincent est un guide complet destiné aux développeurs souhaitant créer et déployer des applications Django de niveau production. Contrairement aux guides pour débutants, ce livre suppose une connaissance fondamentale de Django et se concentre sur l'amélioration de ces compétences. Il couvre des sujets essentiels tels que la modélisation avancée des bases de données, la création d'applications Django réutilisables et la configuration d'environnements pour la sécurité et les performances. Le livre met l'accent sur le développement dans le monde réel, aidant les lecteurs à comprendre comment structurer les projets Django de manière évolutive, maintenable et adaptée à une utilisation professionnelle.",
            // Japanese
            "日本語": "William S. Vincent 著の Django for Professionals は、プロダクションレベルの Django アプリケーションを構築および展開しようとしている開発者向けの総合ガイドです。初心者向けガイドとは異なり、この本は Django の基礎知識を前提とし、それらのスキルを次のレベルに引き上げることに重点を置いています。高度なデータベース モデリング、再利用可能な Django アプリの作成、セキュリティとパフォーマンスのための環境の構成など、重要なトピックを取り上げています。この本は実際の開発に重点を置いており、スケーラブルで保守しやすく、プロフェッショナルな使用に適した方法で Django プロジェクトを構築する方法を読者が理解できるようにしています。",
            // Korean
            "한국인": "Django for Professionals(Django for Professionals)는 William S. Vincent가 쓴 프로덕션 레벨 Django 애플리케이션을 빌드하고 배포하려는 개발자를 위한 포괄적인 가이드입니다. 초보자 가이드와 달리 이 책은 Django에 대한 기본 지식을 전제로 하고 이러한 기술을 다음 단계로 끌어올리는 데 중점을 둡니다. 고급 데이터베이스 모델링, 재사용 가능한 Django 앱 만들기, 보안 및 성능을 위한 환경 구성과 같은 필수 주제를 다룹니다. 이 책은 실제 개발을 강조하여 독자가 확장 가능하고 유지 관리 가능하며 전문적인 사용에 적합한 방식으로 Django 프로젝트를 구성하는 방법을 이해하도록 돕습니다.",
            // Spanish
            "Español": "Django for Professionals de William S. Vincent es una guía completa para desarrolladores que buscan crear e implementar aplicaciones Django de nivel de producción. A diferencia de las guías para principiantes, este libro asume un conocimiento básico de Django y se centra en llevar esas habilidades al siguiente nivel. Abarca temas esenciales como el modelado avanzado de bases de datos, la creación de aplicaciones Django reutilizables y la configuración de entornos para la seguridad y el rendimiento. El libro hace hincapié en el desarrollo del mundo real, ayudando a los lectores a comprender cómo estructurar proyectos Django de formas que sean escalables, mantenibles y adecuadas para el uso profesional.",
            // Hindi
            "हिंदी": "विलियम एस. विंसेंट द्वारा लिखित Django for Professionals, उन डेवलपर्स के लिए एक व्यापक गाइड है जो प्रोडक्शन-लेवल Django एप्लिकेशन बनाना और तैनात करना चाहते हैं। शुरुआती गाइड के विपरीत, यह पुस्तक Django के मूलभूत ज्ञान को मानती है और उन कौशलों को अगले स्तर तक ले जाने पर ध्यान केंद्रित करती है। इसमें उन्नत डेटाबेस मॉडलिंग, पुन: प्रयोज्य Django ऐप बनाना और सुरक्षा और प्रदर्शन के लिए वातावरण को कॉन्फ़िगर करना जैसे आवश्यक विषय शामिल हैं। पुस्तक वास्तविक दुनिया के विकास पर जोर देती है, जिससे पाठकों को यह समझने में मदद मिलती है कि Django प्रोजेक्ट को किस तरह से संरचित किया जाए जो स्केलेबल, मेंटेन करने योग्य और पेशेवर उपयोग के लिए उपयुक्त हों।",
            // Portuguese
            "Português": "Django for Professionals, de William S. Vincent, é um guia abrangente para programadores que desejam construir e implementar aplicações Django ao nível da produção. Ao contrário dos guias para principiantes, este livro pressupõe um conhecimento básico do Django e concentra-se em levar estas competências para o próximo nível. Aborda tópicos essenciais como a modelação avançada de bases de dados, a criação de aplicações Django reutilizáveis ​​e a configuração de ambientes para segurança e desempenho. O livro enfatiza o desenvolvimento no mundo real, ajudando os leitores a compreender como estruturar projetos Django de forma escalável, sustentável e adequada para uso profissional.",
            // Bengali
            "বাংলা": "উইলিয়াম এস. ভিনসেন্ট দ্বারা পেশাদারদের জন্য জ্যাঙ্গো হল একটি বিস্তৃত নির্দেশিকা যা প্রযোজনা-স্তরের জ্যাঙ্গো অ্যাপ্লিকেশনগুলি তৈরি এবং স্থাপন করতে চাওয়া ডেভেলপারদের জন্য। শিক্ষানবিস গাইডের বিপরীতে, এই বইটি জ্যাঙ্গো সম্পর্কে একটি মৌলিক জ্ঞান গ্রহণ করে এবং সেই দক্ষতাগুলিকে পরবর্তী স্তরে নিয়ে যাওয়ার উপর ফোকাস করে৷ এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন উন্নত ডাটাবেস মডেলিং, পুনঃব্যবহারযোগ্য জ্যাঙ্গো অ্যাপ তৈরি করা এবং নিরাপত্তা ও কর্মক্ষমতার জন্য পরিবেশ কনফিগার করা। বইটি বাস্তব-বিশ্বের উন্নয়নের উপর জোর দেয়, পাঠকদের বুঝতে সাহায্য করে যে কীভাবে জ্যাঙ্গো প্রকল্পগুলিকে এমনভাবে গঠন করা যায় যা মাপযোগ্য, রক্ষণাবেক্ষণযোগ্য এবং পেশাদার ব্যবহারের জন্য উপযুক্ত।",
            // Arabic
            "عَرَبِيّ": "يعد كتاب Django for Professionals من تأليف ويليام إس فينسينت دليلاً شاملاً للمطورين الذين يتطلعون إلى بناء ونشر تطبيقات Django على مستوى الإنتاج. وعلى عكس أدلة المبتدئين، يفترض هذا الكتاب المعرفة الأساسية بـ Django ويركز على نقل هذه المهارات إلى المستوى التالي. ويغطي موضوعات أساسية مثل النمذجة المتقدمة لقواعد البيانات وإنشاء تطبيقات Django القابلة لإعادة الاستخدام وتكوين البيئات للأمان والأداء. ويؤكد الكتاب على التطوير في العالم الحقيقي، مما يساعد القراء على فهم كيفية هيكلة مشاريع Django بطرق قابلة للتطوير والصيانة ومناسبة للاستخدام المهني.",
            // Persian
            "فارسی": "Django for Professionals توسط William S. Vincent یک راهنمای جامع برای توسعه دهندگانی است که به دنبال ساخت و استقرار برنامه های Django در سطح تولید هستند. برخلاف راهنماهای مبتدی، این کتاب دانش پایه ای از جنگو را فرض می کند و بر ارتقای این مهارت ها به سطح بعدی تمرکز دارد. موضوعات ضروری مانند مدل‌سازی پیشرفته پایگاه داده، ایجاد برنامه‌های جنگو قابل استفاده مجدد، و پیکربندی محیط‌ها برای امنیت و عملکرد را پوشش می‌دهد. این کتاب بر توسعه دنیای واقعی تاکید دارد و به خوانندگان کمک می کند تا بفهمند چگونه پروژه های جنگو را به روش هایی که مقیاس پذیر، قابل نگهداری و مناسب برای استفاده حرفه ای هستند، ساختار دهند.",
        },
        // Paragraph 2
        {
            // English
            "English": "A significant portion of the book is dedicated to setting up a modern development workflow, which includes the use of Docker for containerization, Git for version control, and PostgreSQL as a robust database solution. The author walks readers through the steps of deploying Django applications to cloud platforms like Heroku and DigitalOcean, ensuring that projects can go live with ease. Key features like automated testing, continuous integration, and security best practices are discussed in depth, helping developers create applications that are not only functional but also resilient and secure.",
            // German
            "Deutsch": "Ein großer Teil des Buches ist der Einrichtung eines modernen Entwicklungsworkflows gewidmet, der die Verwendung von Docker für die Containerisierung, Git für die Versionskontrolle und PostgreSQL als robuste Datenbanklösung umfasst. Der Autor führt die Leser durch die Schritte der Bereitstellung von Django-Anwendungen auf Cloud-Plattformen wie Heroku und DigitalOcean und stellt sicher, dass Projekte problemlos live geschaltet werden können. Wichtige Funktionen wie automatisiertes Testen, kontinuierliche Integration und bewährte Sicherheitsmethoden werden ausführlich erläutert und helfen Entwicklern dabei, Anwendungen zu erstellen, die nicht nur funktional, sondern auch robust und sicher sind.",
            // Chinese
            "中国人": "本书的很大一部分内容致力于建立现代开发工作流程，包括使用 Docker 进行容器化、使用 Git 进行版本控制以及使用 PostgreSQL 作为强大的数据库解决方案。作者引导读者完成将 Django 应用程序部署到 Heroku 和 DigitalOcean 等云平台的步骤，确保项目可以轻松上线。本书深入讨论了自动化测试、持续集成和安全最佳实践等关键功能，帮助开发人员创建不仅功能齐全而且具有弹性和安全的应用程序。",
            // Russian
            "Русский": "Значительная часть книги посвящена настройке современного рабочего процесса разработки, который включает использование Docker для контейнеризации, Git для контроля версий и PostgreSQL в качестве надежного решения для баз данных. Автор проводит читателей по этапам развертывания приложений Django на облачных платформах, таких как Heroku и DigitalOcean, гарантируя, что проекты могут быть запущены в эксплуатацию с легкостью. Ключевые функции, такие как автоматизированное тестирование, непрерывная интеграция и лучшие практики безопасности, подробно обсуждаются, помогая разработчикам создавать приложения, которые не только функциональны, но также устойчивы и безопасны.",
            // French
            "Français": "Une partie importante du livre est consacrée à la mise en place d'un flux de travail de développement moderne, qui comprend l'utilisation de Docker pour la conteneurisation, de Git pour le contrôle des versions et de PostgreSQL comme solution de base de données robuste. L'auteur guide les lecteurs à travers les étapes de déploiement d'applications Django sur des plateformes cloud comme Heroku et DigitalOcean, garantissant ainsi que les projets peuvent être mis en ligne en toute simplicité. Des fonctionnalités clés telles que les tests automatisés, l'intégration continue et les meilleures pratiques de sécurité sont abordées en profondeur, aidant les développeurs à créer des applications qui sont non seulement fonctionnelles, mais également résilientes et sécurisées.",
            // Japanese
            "日本語": "本書の大部分は、コンテナ化のための Docker、バージョン管理のための Git、堅牢なデータベース ソリューションとしての PostgreSQL の使用を含む、最新の開発ワークフローの設定に充てられています。著者は、Django アプリケーションを Heroku や DigitalOcean などのクラウド プラットフォームにデプロイする手順を読者に説明し、プロジェクトを簡単に稼働できるようにします。自動テスト、継続的インテグレーション、セキュリティのベスト プラクティスなどの主要な機能について詳細に説明されており、開発者が機能的であるだけでなく、回復力とセキュリティも備えたアプリケーションを作成するのに役立ちます。",
            // Korean
            "한국인": "책의 상당 부분은 컨테이너화를 위한 Docker, 버전 제어를 위한 Git, 강력한 데이터베이스 솔루션으로서의 PostgreSQL을 포함한 최신 개발 워크플로를 설정하는 데 할애되어 있습니다. 저자는 독자들에게 Heroku 및 DigitalOcean과 같은 클라우드 플랫폼에 Django 애플리케이션을 배포하는 단계를 안내하여 프로젝트가 쉽게 라이브로 전환될 수 있도록 합니다. 자동화된 테스트, 지속적인 통합, 보안 모범 사례와 같은 주요 기능에 대해 자세히 설명하여 개발자가 기능적일 뿐만 아니라 복원력과 보안성이 뛰어난 애플리케이션을 만드는 데 도움이 됩니다.",
            // Spanish
            "Español": "Una parte importante del libro está dedicada a configurar un flujo de trabajo de desarrollo moderno, que incluye el uso de Docker para la contenedorización, Git para el control de versiones y PostgreSQL como una solución de base de datos robusta. El autor guía a los lectores a través de los pasos para implementar aplicaciones Django en plataformas en la nube como Heroku y DigitalOcean, lo que garantiza que los proyectos puedan ponerse en marcha con facilidad. Se analizan en profundidad las características clave, como las pruebas automatizadas, la integración continua y las mejores prácticas de seguridad, lo que ayuda a los desarrolladores a crear aplicaciones que no solo sean funcionales, sino también resistentes y seguras.",
            // Hindi
            "हिंदी": "पुस्तक का एक महत्वपूर्ण हिस्सा आधुनिक विकास कार्यप्रवाह स्थापित करने के लिए समर्पित है, जिसमें कंटेनरीकरण के लिए डॉकर, संस्करण नियंत्रण के लिए गिट और एक मजबूत डेटाबेस समाधान के रूप में PostgreSQL का उपयोग शामिल है। लेखक पाठकों को Heroku और DigitalOcean जैसे क्लाउड प्लेटफ़ॉर्म पर Django एप्लिकेशन को तैनात करने के चरणों के माध्यम से मार्गदर्शन करता है, यह सुनिश्चित करता है कि प्रोजेक्ट आसानी से लाइव हो सकें। स्वचालित परीक्षण, निरंतर एकीकरण और सुरक्षा सर्वोत्तम प्रथाओं जैसी प्रमुख विशेषताओं पर गहराई से चर्चा की गई है, जिससे डेवलपर्स को ऐसे एप्लिकेशन बनाने में मदद मिलती है जो न केवल कार्यात्मक हैं बल्कि लचीले और सुरक्षित भी हैं।",
            // Portuguese
            "Português": "Uma parte significativa do livro é dedicada à configuração de um fluxo de trabalho de desenvolvimento moderno, que inclui a utilização do Docker para contentorização, do Git para o controlo de versões e do PostgreSQL como solução robusta de base de dados. O autor orienta os leitores nas etapas de implementação de aplicações Django em plataformas de cloud como Heroku e DigitalOcean, garantindo que os projetos podem entrar em funcionamento com facilidade. Características importantes como testes automatizados, integração contínua e práticas recomendadas de segurança são discutidas em profundidade, ajudando os programadores a criar aplicações que não são apenas funcionais, mas também resilientes e seguras.",
            // Bengali
            "বাংলা": "বইটির একটি উল্লেখযোগ্য অংশ একটি আধুনিক ডেভেলপমেন্ট ওয়ার্কফ্লো সেট আপ করার জন্য নিবেদিত, যার মধ্যে রয়েছে কনটেইনারাইজেশনের জন্য ডকার ব্যবহার, সংস্করণ নিয়ন্ত্রণের জন্য গিট এবং একটি শক্তিশালী ডাটাবেস সমাধান হিসাবে PostgreSQL। লেখক পাঠকদের হেরোকু এবং ডিজিটাল ওশেনের মতো ক্লাউড প্ল্যাটফর্মে জ্যাঙ্গো অ্যাপ্লিকেশনগুলি স্থাপনের ধাপগুলির মধ্য দিয়ে নিয়ে যান, প্রকল্পগুলি সহজে লাইভ হতে পারে তা নিশ্চিত করে৷ স্বয়ংক্রিয় পরীক্ষা, ক্রমাগত একীকরণ এবং নিরাপত্তার সর্বোত্তম অনুশীলনের মতো মূল বৈশিষ্ট্যগুলি গভীরভাবে আলোচনা করা হয়েছে, যা বিকাশকারীদের এমন অ্যাপ্লিকেশন তৈরি করতে সহায়তা করে যা কেবল কার্যকরী নয় বরং স্থিতিস্থাপক এবং সুরক্ষিতও।",
            // Arabic
            "عَرَبِيّ": "يخصص جزء كبير من الكتاب لإعداد سير عمل تطوير حديث، والذي يتضمن استخدام Docker للحاويات، و Git للتحكم في الإصدارات، و PostgreSQL كحل قوي لقاعدة البيانات. يوجه المؤلف القراء خلال خطوات نشر تطبيقات Django على منصات سحابية مثل Heroku وDigitalOcean، مما يضمن إمكانية تشغيل المشاريع بسهولة. تتم مناقشة الميزات الرئيسية مثل الاختبار الآلي والتكامل المستمر وأفضل ممارسات الأمان بعمق، مما يساعد المطورين على إنشاء تطبيقات ليست وظيفية فحسب، بل مرنة وآمنة أيضًا.",
            // Persian
            "فارسی": "بخش قابل توجهی از کتاب به راه‌اندازی یک گردش کار توسعه مدرن اختصاص یافته است که شامل استفاده از Docker برای کانتینری‌سازی، Git برای کنترل نسخه و PostgreSQL به‌عنوان یک راه‌حل پایگاه داده قوی است. نویسنده، خوانندگان را در مراحل استقرار برنامه‌های جنگو در پلتفرم‌های ابری مانند Heroku و DigitalOcean راهنمایی می‌کند و اطمینان می‌دهد که پروژه‌ها می‌توانند به راحتی اجرا شوند. ویژگی‌های کلیدی مانند تست خودکار، یکپارچه‌سازی مداوم، و بهترین شیوه‌های امنیتی به طور عمیق مورد بحث قرار می‌گیرند و به توسعه‌دهندگان کمک می‌کنند تا برنامه‌هایی ایجاد کنند که نه تنها کاربردی هستند، بلکه انعطاف‌پذیر و امن نیز هستند.",
        },
        // Paragraph 3
        {
            // English
            "English": "In addition to its technical content, Django for Professionals places a strong emphasis on modern web development practices. Readers will learn how to use third-party tools like Bootstrap for front-end styling, integrate APIs, and handle user authentication efficiently. With clear, structured explanations and hands-on examples, the book bridges the gap between intermediate Django development and the skills needed to build professional-grade projects. It’s an ideal resource for developers who want to refine their skills and build web applications that are ready for production and capable of scaling to meet real-world demands.",
            // German
            "Deutsch": "Neben den technischen Inhalten legt „Django for Professionals“ großen Wert auf moderne Webentwicklungspraktiken. Die Leser lernen, wie sie Tools von Drittanbietern wie Bootstrap für das Frontend-Styling verwenden, APIs integrieren und die Benutzerauthentifizierung effizient handhaben. Mit klaren, strukturierten Erklärungen und praktischen Beispielen schließt das Buch die Lücke zwischen fortgeschrittener Django-Entwicklung und den Fähigkeiten, die zum Erstellen professioneller Projekte erforderlich sind. Es ist eine ideale Ressource für Entwickler, die ihre Fähigkeiten verfeinern und Webanwendungen erstellen möchten, die produktionsbereit und skalierbar sind, um den Anforderungen der realen Welt gerecht zu werden.",
            // Chinese
            "中国人": "除了技术内容外，《Django for Professionals》还非常重视现代 Web 开发实践。读者将学习如何使用 Bootstrap 等第三方工具进行前端样式设置、集成 API 以及高效处理用户身份验证。本书通过清晰、结构化的解释和实际示例，弥补了中级 Django 开发与构建专业级项目所需技能之间的差距。对于想要提高技能并构建可用于生产且能够扩展以满足实际需求的 Web 应用程序的开发人员来说，它是理想的资源。",
            // Russian
            "Русский": "В дополнение к своему техническому содержанию, Django for Professionals уделяет большое внимание современным практикам веб-разработки. Читатели узнают, как использовать сторонние инструменты, такие как Bootstrap, для стилизации интерфейса, интегрировать API и эффективно обрабатывать аутентификацию пользователей. С помощью четких, структурированных объяснений и практических примеров книга устраняет разрыв между промежуточной разработкой Django и навыками, необходимыми для создания профессиональных проектов. Это идеальный ресурс для разработчиков, которые хотят отточить свои навыки и создавать веб-приложения, готовые к производству и способные масштабироваться для удовлетворения реальных потребностей.",
            // French
            "Français": "Outre son contenu technique, Django for Professionals met l’accent sur les pratiques modernes de développement Web. Les lecteurs apprendront à utiliser des outils tiers comme Bootstrap pour le style front-end, à intégrer des API et à gérer efficacement l’authentification des utilisateurs. Avec des explications claires et structurées et des exemples pratiques, le livre comble le fossé entre le développement Django intermédiaire et les compétences nécessaires pour créer des projets de niveau professionnel. C’est une ressource idéale pour les développeurs qui souhaitent affiner leurs compétences et créer des applications Web prêtes pour la production et capables d’évoluer pour répondre aux exigences du monde réel.",
            // Japanese
            "日本語": "Django for Professionals では、技術的な内容に加えて、最新の Web 開発手法にも重点を置いています。読者は、Bootstrap などのサードパーティ ツールを使用してフロントエンドのスタイルを設定し、API を統合し、ユーザー認証を効率的に処理する方法を学習します。明確で構造化された説明と実践的な例を備えたこの本は、中級レベルの Django 開発とプロフェッショナル レベルのプロジェクトを構築するために必要なスキルとの間のギャップを埋めます。スキルを磨き、実稼働に対応し、実際の需要に合わせて拡張できる Web アプリケーションを構築したい開発者にとって理想的なリソースです。",
            // Korean
            "한국인": "Django for Professionals는 기술적 내용 외에도 최신 웹 개발 관행에 중점을 둡니다. 독자는 프런트엔드 스타일링을 위한 Bootstrap과 같은 타사 도구를 사용하는 방법, API를 통합하는 방법, 사용자 인증을 효율적으로 처리하는 방법을 배웁니다. 명확하고 체계적인 설명과 실습 예제를 통해 이 책은 중급 Django 개발과 전문가 수준의 프로젝트를 구축하는 데 필요한 기술 간의 격차를 메웁니다. 기술을 다듬고 프로덕션에 사용할 준비가 되어 있고 실제 요구 사항을 충족하도록 확장할 수 있는 웹 애플리케이션을 구축하려는 개발자에게 이상적인 리소스입니다.",
            // Spanish
            "Español": "Además de su contenido técnico, Django for Professionals hace especial hincapié en las prácticas de desarrollo web modernas. Los lectores aprenderán a utilizar herramientas de terceros como Bootstrap para diseñar el front-end, integrar API y gestionar la autenticación de usuarios de forma eficiente. Con explicaciones claras y estructuradas y ejemplos prácticos, el libro cierra la brecha entre el desarrollo intermedio de Django y las habilidades necesarias para crear proyectos de nivel profesional. Es un recurso ideal para los desarrolladores que desean perfeccionar sus habilidades y crear aplicaciones web que estén listas para la producción y sean capaces de escalar para satisfacer las demandas del mundo real.",
            // Hindi
            "हिंदी": "अपनी तकनीकी सामग्री के अलावा, Django for Professionals आधुनिक वेब विकास प्रथाओं पर ज़ोर देता है। पाठक सीखेंगे कि फ्रंट-एंड स्टाइलिंग के लिए बूटस्ट्रैप जैसे थर्ड-पार्टी टूल का उपयोग कैसे करें, API को एकीकृत करें और उपयोगकर्ता प्रमाणीकरण को कुशलतापूर्वक संभालें। स्पष्ट, संरचित स्पष्टीकरण और व्यावहारिक उदाहरणों के साथ, पुस्तक मध्यवर्ती Django विकास और पेशेवर-ग्रेड परियोजनाओं के निर्माण के लिए आवश्यक कौशल के बीच की खाई को पाटती है। यह उन डेवलपर्स के लिए एक आदर्श संसाधन है जो अपने कौशल को निखारना चाहते हैं और ऐसे वेब एप्लिकेशन बनाना चाहते हैं जो उत्पादन के लिए तैयार हों और वास्तविक दुनिया की मांगों को पूरा करने में सक्षम हों।",
            // Portuguese
            "Português": "Para além do seu conteúdo técnico, o Django for Professionals dá uma forte ênfase às práticas modernas de desenvolvimento web. Os leitores aprenderão como utilizar ferramentas de terceiros, como o Bootstrap, para estilização de front-end, integrar APIs e lidar com a autenticação do utilizador de forma eficiente. Com explicações claras e estruturadas e exemplos práticos, o livro preenche a lacuna entre o desenvolvimento intermédio do Django e as competências necessárias para construir projetos de nível profissional. É um recurso ideal para programadores que desejam melhorar as suas competências e criar aplicações Web prontas para produção e capazes de serem escalonadas para satisfazer as exigências do mundo real.",
            // Bengali
            "বাংলা": "এর প্রযুক্তিগত বিষয়বস্তু ছাড়াও, পেশাদারদের জন্য জ্যাঙ্গো আধুনিক ওয়েব ডেভেলপমেন্ট অনুশীলনের উপর জোর দেয়। ফ্রন্ট-এন্ড স্টাইলিং এর জন্য বুটস্ট্র্যাপের মত তৃতীয় পক্ষের টুলগুলি কীভাবে ব্যবহার করতে হয়, এপিআইগুলিকে সংহত করতে হয় এবং ব্যবহারকারীর প্রমাণীকরণকে দক্ষতার সাথে পরিচালনা করতে হয় তা পাঠকরা শিখবেন। স্পষ্ট, কাঠামোগত ব্যাখ্যা এবং হাতে-কলমে উদাহরণ সহ, বইটি মধ্যবর্তী জ্যাঙ্গো বিকাশ এবং পেশাদার-গ্রেডের প্রকল্পগুলি তৈরি করার জন্য প্রয়োজনীয় দক্ষতার মধ্যে ব্যবধান পূরণ করে। এটি বিকাশকারীদের জন্য একটি আদর্শ সংস্থান যারা তাদের দক্ষতা পরিমার্জন করতে চান এবং এমন ওয়েব অ্যাপ্লিকেশন তৈরি করতে চান যা উত্পাদনের জন্য প্রস্তুত এবং বাস্তব-বিশ্বের চাহিদা মেটাতে স্কেলিং করতে সক্ষম।",
            // Arabic
            "عَرَبِيّ": "بالإضافة إلى محتواه الفني، يركز كتاب Django for Professionals بشكل كبير على ممارسات تطوير الويب الحديثة. سيتعلم القراء كيفية استخدام أدوات الطرف الثالث مثل Bootstrap لتصميم الواجهة الأمامية، ودمج واجهات برمجة التطبيقات، والتعامل مع مصادقة المستخدم بكفاءة. من خلال التفسيرات الواضحة والمنظمة والأمثلة العملية، يسد الكتاب الفجوة بين تطوير Django المتوسط ​​والمهارات اللازمة لبناء مشاريع احترافية. إنه مورد مثالي للمطورين الذين يرغبون في صقل مهاراتهم وبناء تطبيقات ويب جاهزة للإنتاج وقادرة على التوسع لتلبية متطلبات العالم الحقيقي.",
            // Persian
            "فارسی": "Django for Professionals علاوه بر محتوای فنی خود، تأکید زیادی بر رویه‌های توسعه وب مدرن دارد. خوانندگان یاد خواهند گرفت که چگونه از ابزارهای شخص ثالث مانند Bootstrap برای استایل جلویی استفاده کنند، API ها را ادغام کنند، و احراز هویت کاربر را به طور موثر مدیریت کنند. این کتاب با توضیحات واضح و ساختاریافته و مثال‌های عملی، شکاف بین توسعه جنگو متوسط ​​و مهارت‌های مورد نیاز برای ساخت پروژه‌های حرفه‌ای را پر می‌کند. این یک منبع ایده‌آل برای توسعه‌دهندگانی است که می‌خواهند مهارت‌های خود را اصلاح کنند و برنامه‌های کاربردی وب بسازند که آماده تولید هستند و قادر به مقیاس‌بندی برای برآورده کردن خواسته‌های دنیای واقعی هستند.",
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
        document.title = "MHA - " + django_for_professionals["BookName"];

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = django_for_professionals["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = django_for_professionals["TotalDescriptionAboutTheBook"][index][newLanguage];
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