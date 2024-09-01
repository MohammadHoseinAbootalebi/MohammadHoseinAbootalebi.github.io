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
var matlab_simulink_onramp = {
    "CourseName": "Simulink Onramp",
    "ThreeShortDescriptions": {
        // First Paragraph
        "Paragraph-1": {
            // English
            "English": "MathWorks' Simulink courses offer a comprehensive and interactive learning experience for individuals seeking to master the powerful simulation software. These courses, designed by experts in the field, provide a solid foundation in Simulink's graphical environment, enabling users to model and simulate dynamic systems efficiently.",
            // German
            "Deutsch": "Die Simulink-Kurse von MathWorks bieten eine umfassende und interaktive Lernerfahrung für Personen, die die leistungsstarke Simulationssoftware beherrschen möchten. Diese von Experten auf diesem Gebiet entwickelten Kurse bieten eine solide Grundlage für die grafische Umgebung von Simulink und ermöglichen Benutzern die effiziente Modellierung und Simulation dynamischer Systeme.",
            // Chinese
            "中国人": "MathWorks 的 Simulink 课程为希望掌握功能强大的仿真软件的个人提供全面而互动的学习体验。这些课程由该领域的专家设计，为 Simulink 的图形环境提供了坚实的基础，使用户能够高效地建模和仿真动态系统。",
            // Russian
            "Русский": "Курсы MathWorks Simulink предлагают комплексный и интерактивный опыт обучения для тех, кто стремится освоить мощное программное обеспечение для моделирования. Эти курсы, разработанные экспертами в этой области, обеспечивают прочную основу в графической среде Simulink, позволяя пользователям эффективно моделировать и имитировать динамические системы.",
            // French
            "Français": "Les cours Simulink de MathWorks offrent une expérience d'apprentissage complète et interactive aux personnes souhaitant maîtriser ce puissant logiciel de simulation. Ces cours, conçus par des experts du domaine, offrent une base solide dans l'environnement graphique de Simulink, permettant aux utilisateurs de modéliser et de simuler efficacement des systèmes dynamiques.",
            // Japanese
            "日本語": "MathWorks の Simulink コースは、強力なシミュレーション ソフトウェアを習得したい方のために、包括的でインタラクティブな学習体験を提供します。この分野の専門家によって設計されたこれらのコースは、Simulink のグラフィカル環境の強固な基礎を提供し、ユーザーが動的システムを効率的にモデル化およびシミュレーションできるようにします。",
            // Korean
            "한국인": "MathWorks의 Simulink 과정은 강력한 시뮬레이션 소프트웨어를 마스터하려는 개인에게 포괄적이고 대화형 학습 경험을 제공합니다. 이 분야의 전문가가 설계한 이 과정은 Simulink의 그래픽 환경에 대한 견고한 기초를 제공하여 사용자가 동적 시스템을 효율적으로 모델링하고 시뮬레이션할 수 있도록 합니다.",
            // Spanish
            "Español": "Los cursos de Simulink de MathWorks ofrecen una experiencia de aprendizaje completa e interactiva para aquellas personas que deseen dominar el potente software de simulación. Estos cursos, diseñados por expertos en el campo, proporcionan una base sólida en el entorno gráfico de Simulink, lo que permite a los usuarios modelar y simular sistemas dinámicos de manera eficiente.",
            // Hindi
            "हिंदी": "मैथवर्क्स के सिमुलिंक पाठ्यक्रम शक्तिशाली सिमुलेशन सॉफ़्टवेयर में महारत हासिल करने के इच्छुक व्यक्तियों के लिए एक व्यापक और इंटरैक्टिव सीखने का अनुभव प्रदान करते हैं। क्षेत्र के विशेषज्ञों द्वारा डिज़ाइन किए गए ये पाठ्यक्रम सिमुलिंक के ग्राफ़िकल वातावरण में एक ठोस आधार प्रदान करते हैं, जिससे उपयोगकर्ता गतिशील प्रणालियों को कुशलतापूर्वक मॉडल और सिम्युलेट कर सकते हैं।",
            // Portuguese
            "Português": "Os cursos Simulink da MathWorks oferecem uma experiência de aprendizagem abrangente e interativa para indivíduos que procuram dominar o poderoso software de simulação. Estes cursos, elaborados por especialistas na área, fornecem uma base sólida no ambiente gráfico do Simulink, permitindo aos utilizadores modelar e simular sistemas dinâmicos de forma eficiente.",
            // Bengali
            "বাংলা": "ম্যাথওয়ার্কসের সিমুলিঙ্ক কোর্সগুলি শক্তিশালী সিমুলেশন সফ্টওয়্যার আয়ত্ত করতে চাওয়া ব্যক্তিদের জন্য একটি ব্যাপক এবং ইন্টারেক্টিভ শেখার অভিজ্ঞতা প্রদান করে। এই ক্ষেত্রের বিশেষজ্ঞদের দ্বারা ডিজাইন করা এই কোর্সগুলি, সিমুলিংকের গ্রাফিকাল পরিবেশে একটি দৃঢ় ভিত্তি প্রদান করে, যা ব্যবহারকারীদের দক্ষতার সাথে গতিশীল সিস্টেমের মডেল এবং অনুকরণ করতে সক্ষম করে।",
            // Arabic
            "عَرَبِيّ": "توفر دورات Simulink من MathWorks تجربة تعليمية شاملة وتفاعلية للأفراد الذين يسعون إلى إتقان برنامج المحاكاة القوي. توفر هذه الدورات، التي صممها خبراء في هذا المجال، أساسًا قويًا في البيئة الرسومية لبرنامج Simulink، مما يتيح للمستخدمين نمذجة ومحاكاة الأنظمة الديناميكية بكفاءة.",
            // Persian
            "فارسی": "دوره های Simulink MathWorks یک تجربه یادگیری جامع و تعاملی را برای افرادی که به دنبال تسلط بر نرم افزار قدرتمند شبیه سازی هستند ارائه می دهد. این دوره‌ها که توسط متخصصان این حوزه طراحی شده‌اند، پایه‌ای محکم در محیط گرافیکی Simulink فراهم می‌کنند و کاربران را قادر می‌سازند تا سیستم‌های پویا را به‌طور کارآمد مدل‌سازی و شبیه‌سازی کنند.",
        },
        // Second Paragraph
        "Paragraph-2": {
            // English
            "English": "One of the standout features of these courses is their hands-on approach. Participants are encouraged to experiment with various Simulink blocks and components, building and testing their own models. This practical experience not only reinforces theoretical concepts but also fosters creativity and problem-solving skills. Additionally, the courses cover a wide range of applications, from control systems engineering to signal processing, ensuring that learners can apply their knowledge to real-world scenarios.",
            // German
            "Deutsch": "Eines der herausragenden Merkmale dieser Kurse ist ihr praktischer Ansatz. Die Teilnehmer werden ermutigt, mit verschiedenen Simulink-Blöcken und -Komponenten zu experimentieren und ihre eigenen Modelle zu erstellen und zu testen. Diese praktische Erfahrung stärkt nicht nur theoretische Konzepte, sondern fördert auch Kreativität und Problemlösungsfähigkeiten. Darüber hinaus decken die Kurse ein breites Anwendungsspektrum ab, von der Steuerungs- und Regelungstechnik bis zur Signalverarbeitung, sodass die Lernenden ihr Wissen auf reale Szenarien anwenden können.",
            // Chinese
            "中国人": "这些课程的一大特色是实践教学。我们鼓励学员尝试各种 Simulink 模块和组件，构建和测试自己的模型。这种实践经验不仅可以巩固理论概念，还可以培养创造力和解决问题的能力。此外，这些课程涵盖了从控制系统工程到信号处理的广泛应用，确保学员能够将所学知识应用于实际场景。",
            // Russian
            "Русский": "Одной из отличительных особенностей этих курсов является их практический подход. Участникам предлагается экспериментировать с различными блоками и компонентами Simulink, создавая и тестируя собственные модели. Этот практический опыт не только закрепляет теоретические концепции, но и способствует развитию творческих способностей и навыков решения проблем. Кроме того, курсы охватывают широкий спектр приложений, от проектирования систем управления до обработки сигналов, гарантируя, что учащиеся смогут применять свои знания в реальных сценариях.",
            // French
            "Français": "L'une des caractéristiques les plus remarquables de ces cours est leur approche pratique. Les participants sont encouragés à expérimenter différents blocs et composants Simulink, en construisant et en testant leurs propres modèles. Cette expérience pratique renforce non seulement les concepts théoriques, mais favorise également la créativité et les compétences en résolution de problèmes. De plus, les cours couvrent un large éventail d'applications, de l'ingénierie des systèmes de contrôle au traitement du signal, garantissant ainsi que les apprenants peuvent appliquer leurs connaissances à des scénarios réels.",
            // Japanese
            "日本語": "これらのコースの際立った特徴の 1 つは、実践的なアプローチです。参加者は、さまざまな Simulink ブロックとコンポーネントを試し、独自のモデルを構築してテストすることが推奨されます。この実践的な経験は、理論的な概念を強化するだけでなく、創造性と問題解決スキルを養います。さらに、コースでは、制御システム エンジニアリングから信号処理まで、幅広いアプリケーションをカバーしているため、学習者は知識を実際のシナリオに適用できます。",
            // Korean
            "한국인": "이러한 과정의 두드러진 특징 중 하나는 실습적 접근 방식입니다. 참가자는 다양한 Simulink 블록과 구성 요소를 실험하고, 자신의 모델을 구축하고 테스트하도록 권장됩니다. 이러한 실무 경험은 이론적 개념을 강화할 뿐만 아니라 창의성과 문제 해결 기술을 육성합니다. 또한, 이 과정은 제어 시스템 엔지니어링에서 신호 처리에 이르기까지 광범위한 응용 프로그램을 다루므로 학습자는 지식을 실제 상황에 적용할 수 있습니다.",
            // Spanish
            "Español": "Una de las características más destacadas de estos cursos es su enfoque práctico. Se anima a los participantes a experimentar con diversos bloques y componentes de Simulink, construyendo y probando sus propios modelos. Esta experiencia práctica no solo refuerza los conceptos teóricos, sino que también fomenta la creatividad y las habilidades para la resolución de problemas. Además, los cursos cubren una amplia gama de aplicaciones, desde la ingeniería de sistemas de control hasta el procesamiento de señales, lo que garantiza que los alumnos puedan aplicar sus conocimientos a situaciones del mundo real.",
            // Hindi
            "हिंदी": "इन पाठ्यक्रमों की एक खास विशेषता उनका व्यावहारिक दृष्टिकोण है। प्रतिभागियों को विभिन्न सिमुलिंक ब्लॉक और घटकों के साथ प्रयोग करने, अपने स्वयं के मॉडल बनाने और उनका परीक्षण करने के लिए प्रोत्साहित किया जाता है। यह व्यावहारिक अनुभव न केवल सैद्धांतिक अवधारणाओं को पुष्ट करता है बल्कि रचनात्मकता और समस्या-समाधान कौशल को भी बढ़ावा देता है। इसके अतिरिक्त, पाठ्यक्रम नियंत्रण प्रणाली इंजीनियरिंग से लेकर सिग्नल प्रोसेसिंग तक अनुप्रयोगों की एक विस्तृत श्रृंखला को कवर करते हैं, यह सुनिश्चित करते हुए कि शिक्षार्थी अपने ज्ञान को वास्तविक दुनिया के परिदृश्यों में लागू कर सकते हैं।",
            // Portuguese
            "Português": "Uma das características de destaque destes cursos é a sua abordagem prática. Os participantes são encorajados a experimentar vários blocos e componentes do Simulink, construindo e testando os seus próprios modelos. Esta experiência prática não só reforça conceitos teóricos, como também estimula a criatividade e a capacidade de resolução de problemas. Além disso, os cursos abrangem uma vasta gama de aplicações, desde a engenharia de sistemas de controlo ao processamento de sinais, garantindo que os alunos podem aplicar os seus conhecimentos em cenários do mundo real.",
            // Bengali
            "বাংলা": "এই কোর্সগুলির স্ট্যান্ডআউট বৈশিষ্ট্যগুলির মধ্যে একটি হল তাদের হাতে-কলমে পদ্ধতি। অংশগ্রহণকারীদের বিভিন্ন সিমুলিঙ্ক ব্লক এবং উপাদানগুলির সাথে পরীক্ষা করার জন্য, তাদের নিজস্ব মডেল তৈরি এবং পরীক্ষা করার জন্য উত্সাহিত করা হয়। এই ব্যবহারিক অভিজ্ঞতা শুধুমাত্র তাত্ত্বিক ধারণাকে শক্তিশালী করে না বরং সৃজনশীলতা এবং সমস্যা সমাধানের দক্ষতাও বৃদ্ধি করে। উপরন্তু, কোর্সগুলি কন্ট্রোল সিস্টেম ইঞ্জিনিয়ারিং থেকে শুরু করে সিগন্যাল প্রসেসিং পর্যন্ত বিস্তৃত অ্যাপ্লিকেশানগুলিকে কভার করে, যা নিশ্চিত করে যে শিক্ষার্থীরা তাদের জ্ঞান বাস্তব-বিশ্বের পরিস্থিতিতে প্রয়োগ করতে পারে।",
            // Arabic
            "عَرَبِيّ": "من بين السمات البارزة لهذه الدورات التدريبية هو نهجها العملي. يتم تشجيع المشاركين على تجربة العديد من كتل ومكونات Simulink، وبناء واختبار نماذجهم الخاصة. لا تعمل هذه التجربة العملية على تعزيز المفاهيم النظرية فحسب، بل تعزز أيضًا الإبداع ومهارات حل المشكلات. بالإضافة إلى ذلك، تغطي الدورات التدريبية مجموعة واسعة من التطبيقات، من هندسة أنظمة التحكم إلى معالجة الإشارات، مما يضمن قدرة المتعلمين على تطبيق معرفتهم على سيناريوهات العالم الحقيقي.",
            // Persian
            "فارسی": "یکی از ویژگی های برجسته این دوره ها رویکرد عملی آنهاست. شرکت کنندگان تشویق می شوند تا با بلوک ها و اجزای مختلف Simulink آزمایش کنند و مدل های خود را بسازند و آزمایش کنند. این تجربه عملی نه تنها مفاهیم نظری را تقویت می کند، بلکه خلاقیت و مهارت های حل مسئله را نیز تقویت می کند. علاوه بر این، دوره‌ها طیف گسترده‌ای از برنامه‌ها، از مهندسی سیستم‌های کنترل گرفته تا پردازش سیگنال را پوشش می‌دهند و تضمین می‌کنند که فراگیران می‌توانند دانش خود را در سناریوهای دنیای واقعی به کار ببرند.",
        },
        // Third Paragraph
        "Paragraph-3": {
            // English
            "English": "Beyond the core curriculum, MathWorks offers supplementary resources, such as online forums and documentation, to support learners in their journey. These additional materials provide valuable insights, troubleshooting tips, and opportunities to connect with a community of fellow Simulink users. By combining expert instruction, practical exercises, and comprehensive support, MathWorks' Simulink courses empower individuals to become proficient in this essential tool for engineers and scientists.",
            // German
            "Deutsch": "Über den Kernlehrplan hinaus bietet MathWorks ergänzende Ressourcen wie Online-Foren und Dokumentationen, um Lernende auf ihrem Weg zu unterstützen. Diese zusätzlichen Materialien bieten wertvolle Einblicke, Tipps zur Fehlerbehebung und Möglichkeiten, sich mit einer Community anderer Simulink-Benutzer zu vernetzen. Durch die Kombination von fachkundiger Anleitung, praktischen Übungen und umfassender Unterstützung versetzen die Simulink-Kurse von MathWorks Lernende in die Lage, sich dieses für Ingenieure und Wissenschaftler unverzichtbare Werkzeug zu eigen zu machen.",
            // Chinese
            "中国人": "除了核心课程外，MathWorks 还提供补充资源，例如在线论坛和文档，以支持学习者的学习。这些附加材料提供了宝贵的见解、故障排除技巧以及与其他 Simulink 用户社区建立联系的机会。通过结合专家指导、实践练习和全面支持，MathWorks 的 Simulink 课程使个人能够熟练掌握工程师和科学家的这一必备工具。",
            // Russian
            "Русский": "Помимо основной учебной программы, MathWorks предлагает дополнительные ресурсы, такие как онлайн-форумы и документация, чтобы поддержать учащихся в их путешествии. Эти дополнительные материалы предоставляют ценные идеи, советы по устранению неполадок и возможности для общения с сообществом других пользователей Simulink. Объединяя экспертные инструкции, практические упражнения и всестороннюю поддержку, курсы Simulink от MathWorks позволяют людям стать профессионалами в этом важном инструменте для инженеров и ученых.",
            // French
            "Français": "Au-delà du programme de base, MathWorks propose des ressources supplémentaires, telles que des forums en ligne et de la documentation, pour accompagner les apprenants dans leur parcours. Ces supports complémentaires fournissent des informations précieuses, des conseils de dépannage et des opportunités de connexion avec une communauté d'autres utilisateurs de Simulink. En combinant des instructions d'experts, des exercices pratiques et une assistance complète, les cours Simulink de MathWorks permettent aux individus de devenir compétents dans cet outil essentiel pour les ingénieurs et les scientifiques.",
            // Japanese
            "日本語": "MathWorks は、コアカリキュラム以外にも、オンライン フォーラムやドキュメントなどの補足リソースを提供して、学習者の学習をサポートします。これらの追加資料は、貴重な洞察、トラブルシューティングのヒント、Simulink ユーザーのコミュニティとつながる機会を提供します。専門家による指導、実践的な演習、包括的なサポートを組み合わせることで、MathWorks の Simulink コースは、エンジニアや科学者にとって不可欠なこのツールを個人が習得できるようにします。",
            // Korean
            "한국인": "핵심 커리큘럼을 넘어 MathWorks는 온라인 포럼 및 설명서와 같은 보충 리소스를 제공하여 학습자의 여정을 지원합니다. 이러한 추가 자료는 귀중한 통찰력, 문제 해결 팁 및 Simulink 사용자 커뮤니티와 연결할 수 있는 기회를 제공합니다. MathWorks의 Simulink 과정은 전문가 교육, 실습 및 포괄적인 지원을 결합하여 개인이 엔지니어와 과학자를 위한 이 필수 도구를 능숙하게 사용할 수 있도록 지원합니다.",
            // Spanish
            "Español": "Además del plan de estudios básico, MathWorks ofrece recursos complementarios, como foros en línea y documentación, para ayudar a los estudiantes en su recorrido. Estos materiales adicionales brindan información valiosa, sugerencias para la resolución de problemas y oportunidades para conectarse con una comunidad de usuarios de Simulink. Al combinar instrucción experta, ejercicios prácticos y soporte integral, los cursos de Simulink de MathWorks permiten a las personas dominar esta herramienta esencial para ingenieros y científicos.",
            // Hindi
            "हिंदी": "मुख्य पाठ्यक्रम से परे, मैथवर्क्स पूरक संसाधन प्रदान करता है, जैसे ऑनलाइन फ़ोरम और दस्तावेज़ीकरण, जो शिक्षार्थियों को उनकी यात्रा में सहायता करते हैं। ये अतिरिक्त सामग्रियाँ मूल्यवान अंतर्दृष्टि, समस्या निवारण युक्तियाँ और साथी सिमुलिंक उपयोगकर्ताओं के समुदाय से जुड़ने के अवसर प्रदान करती हैं। विशेषज्ञ निर्देश, व्यावहारिक अभ्यास और व्यापक सहायता को मिलाकर, मैथवर्क्स के सिमुलिंक पाठ्यक्रम व्यक्तियों को इंजीनियरों और वैज्ञानिकों के लिए इस आवश्यक उपकरण में कुशल बनने के लिए सशक्त बनाते हैं।",
            // Portuguese
            "Português": "Além do currículo básico, o MathWorks oferece recursos complementares, como fóruns online e documentação, para apoiar os alunos na sua jornada. Estes materiais adicionais fornecem informações valiosas, dicas para a resolução de problemas e oportunidades para se ligar a uma comunidade de outros utilizadores do Simulink. Ao combinar instrução especializada, exercícios práticos e apoio abrangente, os cursos Simulink da MathWorks capacitam os indivíduos para se tornarem proficientes nesta ferramenta essencial para engenheiros e cientistas.",
            // Bengali
            "বাংলা": "মূল পাঠ্যক্রমের বাইরে, MathWorks তাদের যাত্রায় শিক্ষার্থীদের সহায়তা করার জন্য অনলাইন ফোরাম এবং ডকুমেন্টেশনের মতো সম্পূরক সংস্থান সরবরাহ করে। এই অতিরিক্ত উপকরণগুলি মূল্যবান অন্তর্দৃষ্টি, সমস্যা সমাধানের টিপস এবং সহকর্মী Simulink ব্যবহারকারীদের সম্প্রদায়ের সাথে সংযোগ করার সুযোগ প্রদান করে। বিশেষজ্ঞের নির্দেশনা, ব্যবহারিক অনুশীলন এবং ব্যাপক সহায়তার সমন্বয়ের মাধ্যমে, ম্যাথওয়ার্কসের সিমুলিঙ্ক কোর্স ব্যক্তিদের প্রকৌশলী এবং বিজ্ঞানীদের জন্য এই অপরিহার্য সরঞ্জামটিতে দক্ষ হয়ে উঠতে সক্ষম করে।",
            // Arabic
            "عَرَبِيّ": "بالإضافة إلى المنهج الأساسي، تقدم MathWorks موارد تكميلية، مثل المنتديات والوثائق عبر الإنترنت، لدعم المتعلمين في رحلتهم. توفر هذه المواد الإضافية رؤى قيمة ونصائح لاستكشاف الأخطاء وإصلاحها وفرصًا للتواصل مع مجتمع من مستخدمي Simulink. من خلال الجمع بين التعليمات المتخصصة والتمارين العملية والدعم الشامل، تعمل دورات Simulink من MathWorks على تمكين الأفراد من إتقان هذه الأداة الأساسية للمهندسين والعلماء.",
            // Persian
            "فارسی": "فراتر از برنامه درسی اصلی، MathWorks منابع تکمیلی، مانند انجمن‌های آنلاین و مستندات را برای حمایت از زبان‌آموزان در سفرشان ارائه می‌دهد. این مطالب اضافی، بینش‌های ارزشمند، نکات عیب‌یابی و فرصت‌هایی را برای ارتباط با جامعه‌ای از کاربران دیگر سیمولینک ارائه می‌کنند. دوره‌های Simulink MathWorks با ترکیب آموزش‌های تخصصی، تمرین‌های عملی و پشتیبانی جامع، افراد را قادر می‌سازد تا در این ابزار ضروری برای مهندسان و دانشمندان مهارت پیدا کنند.",
        },
    },
    "InstructorDescriptions": {
        // Paragraph 1
        "Paragraph-1": {
            // English
            "English": "Alisha Schor is an online course developer at MathWorks. She creates learning content related to physical modeling (dynamic systems) and controls. She holds a Ph.D. in Mechanical Engineering from MIT. Her research focused on bioinstrumentation using microfluidics, with the primary goal of using the electrical properties of cells to select candidates for biodiesel production. Outside of an enthusiasm for engineering and STEM outreach, Alisha enjoys rock climbing, skiing/snowboarding, and dabbling in woodworking.",
            // German
            "Deutsch": "Alisha Schor ist Online-Kursentwicklerin bei MathWorks. Sie erstellt Lerninhalte zu physikalischer Modellierung (dynamische Systeme) und Steuerungen. Sie hat einen Doktortitel in Maschinenbau vom MIT. Ihr Forschungsschwerpunkt liegt auf Bioinstrumentierung mittels Mikrofluidik, mit dem Hauptziel, die elektrischen Eigenschaften von Zellen zu nutzen, um Kandidaten für die Biodieselproduktion auszuwählen. Neben ihrer Begeisterung für Ingenieurwesen und MINT-Fächer liebt Alisha Klettern, Skifahren/Snowboarden und die Holzbearbeitung.",
            // Chinese
            "中国人": "Alisha Schor 是 MathWorks 的在线课程开发人员。她创建与物理建模（动态系统）和控制相关的学习内容。她拥有麻省理工学院机械工程博士学位。她的研究重点是使用微流体的生物仪器，主要目标是利用细胞的电特性来选择生物柴油生产的候选者。除了对工程和 STEM 推广的热情之外，Alisha 还喜欢攀岩、滑雪/单板滑雪和木工。",
            // Russian
            "Русский": "Алиша Шор — разработчик онлайн-курсов в MathWorks. Она создает обучающий контент, связанный с физическим моделированием (динамическими системами) и элементами управления. Имеет докторскую степень по машиностроению от Массачусетского технологического института. Ее исследования сосредоточены на биоинструментации с использованием микрофлюидики, с основной целью использования электрических свойств клеток для отбора кандидатов на производство биодизеля. Помимо увлечения инженерией и STEM-пропагандой, Алиша увлекается скалолазанием, катанием на лыжах/сноуборде и увлекается деревообработкой.",
            // French
            "Français": "Alisha Schor est développeuse de cours en ligne chez MathWorks. Elle crée du contenu pédagogique lié à la modélisation physique (systèmes dynamiques) et aux contrôles. Elle est titulaire d'un doctorat en génie mécanique du MIT. Ses recherches ont porté sur la bioinstrumentation utilisant la microfluidique, avec pour objectif principal d'utiliser les propriétés électriques des cellules pour sélectionner des candidats à la production de biodiesel. En dehors de son enthousiasme pour l'ingénierie et la vulgarisation des STEM, Alisha aime l'escalade, le ski/snowboard et s'essayer au travail du bois.",
            // Japanese
            "日本語": "Alisha Schor は MathWorks のオンライン コース開発者です。物理モデリング (動的システム) と制御に関する学習コンテンツを作成しています。MIT で機械工学の博士号を取得しています。彼女の研究は、マイクロ流体工学を使用した生体計測に重点を置き、主な目標は細胞の電気的特性を利用してバイオディーゼル生産の候補を選択することです。エンジニアリングと STEM アウトリーチへの熱意のほかに、Alisha はロック クライミング、スキー/スノーボード、木工を楽しんでいます。",
            // Korean
            "한국인": "Alisha Schor는 MathWorks의 온라인 과정 개발자입니다. 그녀는 물리적 모델링(동적 시스템) 및 제어와 관련된 학습 콘텐츠를 만듭니다. 그녀는 MIT에서 기계 공학 박사 학위를 받았습니다. 그녀의 연구는 마이크로유체학을 사용한 생물 계측에 집중되었으며, 주요 목표는 세포의 전기적 특성을 사용하여 바이오디젤 생산 후보를 선택하는 것입니다. Alisha는 엔지니어링과 STEM 아웃리치에 대한 열정 외에도 암벽 등반, 스키/스노보딩, 목공 작업을 즐깁니다.",
            // Spanish
            "Español": "Alisha Schor es desarrolladora de cursos en línea en MathWorks. Crea contenido de aprendizaje relacionado con el modelado físico (sistemas dinámicos) y los controles. Tiene un doctorado en Ingeniería mecánica del MIT. Su investigación se centró en la bioinstrumentación mediante microfluidos, con el objetivo principal de utilizar las propiedades eléctricas de las células para seleccionar candidatos para la producción de biodiésel. Además de su entusiasmo por la ingeniería y la divulgación de STEM, a Alisha le gusta escalar rocas, esquiar y hacer snowboard, y trabajar la madera.",
            // Hindi
            "हिंदी": "अलीशा शोर मैथवर्क्स में एक ऑनलाइन कोर्स डेवलपर हैं। वह भौतिक मॉडलिंग (गतिशील सिस्टम) और नियंत्रण से संबंधित शिक्षण सामग्री बनाती हैं। उन्होंने MIT से मैकेनिकल इंजीनियरिंग में पीएचडी की है। उनका शोध माइक्रोफ्लुइडिक्स का उपयोग करके बायोइंस्ट्रूमेंटेशन पर केंद्रित था, जिसका प्राथमिक लक्ष्य बायोडीजल उत्पादन के लिए उम्मीदवारों का चयन करने के लिए कोशिकाओं के विद्युत गुणों का उपयोग करना था। इंजीनियरिंग और STEM आउटरीच के प्रति उत्साह के अलावा, अलीशा को रॉक क्लाइम्बिंग, स्कीइंग/स्नोबोर्डिंग और वुडवर्किंग में हाथ आजमाना पसंद है।",
            // Portuguese
            "Português": "Alisha Schor é desenvolvedora de cursos online na MathWorks. Cria conteúdos de aprendizagem relacionados com a modelação física (sistemas dinâmicos) e com os controlos. Ela possui um Ph. em Engenharia Mecânica pelo MIT. A sua investigação centrou-se na bioinstrumentação utilizando microfluídica, com o principal objetivo de utilizar as propriedades elétricas das células para selecionar candidatos à produção de biodiesel. Fora do entusiasmo pela engenharia e divulgação STEM, Alisha gosta de escalar, esquiar/snowboard e aventurar-se na marcenaria.",
            // Bengali
            "বাংলা": "Alisha Schor MathWorks-এর একজন অনলাইন কোর্স ডেভেলপার। তিনি শারীরিক মডেলিং (গতিশীল সিস্টেম) এবং নিয়ন্ত্রণ সম্পর্কিত শিক্ষার বিষয়বস্তু তৈরি করেন। তিনি পিএইচডি করেছেন। এমআইটি থেকে মেকানিক্যাল ইঞ্জিনিয়ারিংয়ে। তার গবেষণা বায়োডিজেল উৎপাদনের জন্য প্রার্থীদের নির্বাচন করার জন্য কোষের বৈদ্যুতিক বৈশিষ্ট্য ব্যবহার করার প্রাথমিক লক্ষ্য নিয়ে মাইক্রোফ্লুইডিক্স ব্যবহার করে বায়োইনস্ট্রুমেন্টেশনের উপর দৃষ্টি নিবদ্ধ করে। ইঞ্জিনিয়ারিং এবং STEM আউটরিচের জন্য উত্সাহের বাইরে, আলিশা রক ক্লাইম্বিং, স্কিইং/স্নোবোর্ডিং এবং কাঠের কাজে হাত দেওয়া উপভোগ করেন।",
            // Arabic
            "عَرَبِيّ": "أليشا شور هي مطورة دورات تدريبية عبر الإنترنت في MathWorks. وهي تنشئ محتوى تعليميًا يتعلق بالنمذجة الفيزيائية (الأنظمة الديناميكية) والضوابط. وهي حاصلة على درجة الدكتوراه في الهندسة الميكانيكية من معهد ماساتشوستس للتكنولوجيا. ركزت أبحاثها على الأجهزة الحيوية باستخدام الموائع الدقيقة، والهدف الأساسي هو استخدام الخصائص الكهربائية للخلايا لاختيار المرشحين لإنتاج الديزل الحيوي. وبصرف النظر عن حماسها للهندسة والتواصل مع العلوم والتكنولوجيا والهندسة والرياضيات، تستمتع أليشا بتسلق الصخور والتزلج على الجليد والانخراط في النجارة.",
            // Persian
            "فارسی": "Alisha Schor یک توسعه دهنده دوره آنلاین در MathWorks است. او محتوای آموزشی مربوط به مدل سازی فیزیکی (سیستم های پویا) و کنترل ها را ایجاد می کند. او دارای مدرک Ph.D. در مهندسی مکانیک از MIT. تحقیقات او بر روی ابزارهای زیستی با استفاده از میکروسیال‌ها، با هدف اصلی استفاده از خواص الکتریکی سلول‌ها برای انتخاب نامزدهای تولید بیودیزل متمرکز بود. علیشا خارج از اشتیاق به مهندسی و توسعه STEM، از صخره نوردی، اسکی/اسنوبورد و سرگرمی در نجاری لذت می برد.",
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
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].textContent = matlab_simulink_onramp["ThreeShortDescriptions"]["Paragraph-" + index.toString()][language];
        document.getElementsByClassName("Chapter-information-short-description-paragraph-end-discription-paragraph-" + (index).toString())[0].style.fontFamily = secondFontFamilyHeirachy[language];
    }

    // Instructor Descriptions
    for (var index = 1; index <= 1; ++index) {
        document.getElementsByClassName("short-description-and-some-numbers-text-content-" + (index).toString())[0].innerHTML = matlab_simulink_onramp["InstructorDescriptions"]["Paragraph-" + index.toString()][language];
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
        document.title = "MHA - " + matlab_simulink_onramp["CourseName"];

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