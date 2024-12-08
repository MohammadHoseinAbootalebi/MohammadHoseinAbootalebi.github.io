// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©© All Rights are Reserved by Muhammad Husain Abootalebi ©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //

// -------------------------------- ↓ Variables ↓ -------------------------------- //

// -- >> First Font Heirachy : Heading Fonts
var heading_Fonts_Translations = {
        'English': {
                'Navbar_Home_Link': 'Home',
                'Navbar_Skills_DropDown_Link': 'Skills',
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI & UX Designer',
                'Download_My_Resume': 'Download My Resume',
                'Navbar_MY_Contact_Information': 'Contact Me',
                'UI & UX Designer': "UI & UX Designer",
                'Flutter Developer': "Flutter Developer",
                'Full Stack Developer': "Full Stack Developer",
                'Android Developer': "Android Developer",
                'AI Engineer': "AI Engineer",
                'Industrial Designer': "Industrial Designer",
                'Self-Driving Automobile Engineer': "Self-Driving Automobile Engineer",
                'Mechanical Engineer': "Mechanical Engineer",
                'Landing_Page_Buttons_My_Done_Projects': "Projects",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "Software Skills",
                'Projects_Courses_Books_Done_Projects_Title': "Done Projects",
                'Projects_Courses_Books_Done_Projects_Button': "See More",
                'Projects_Courses_Books_Reed_Books_Title': "Books",
                'Projects_Courses_Books_Passed_Courses_Title': "Passed Courses",
                'Contact_Section_Lets_Talk': "Let's Talk!",
                'Contact_Section_Email_Button': '&nbsp; Email&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; Telegram<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lilita One', serif",
        },
        'Deutsch': {
                'Navbar_Home_Link': 'Heim',
                'Navbar_Skills_DropDown_Link': 'Fähigkeiten',
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI & UX Designer',
                'Download_My_Resume': 'Laden Sie meinen Lebenslauf herunter',
                'Navbar_MY_Contact_Information': 'Kontaktiere mich',
                'UI & UX Designer': "UI & UX Designer",
                'Flutter Developer': "Flutter-Entwickler",
                'Full Stack Developer': "Full Stack Entwickler",
                'Android Developer': "Android-Entwickler",
                'AI Engineer': "Ingenieur für künstliche Intelligenz",
                'Industrial Designer': "Industriedesigner",
                'Self-Driving Automobile Engineer': "Ingenieur für selbstfahrende Automobile",
                'Mechanical Engineer': "Maschinenbauingenieur",
                'Landing_Page_Buttons_My_Done_Projects': "Projekte",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "Softwarekenntnisse",
                'Projects_Courses_Books_Done_Projects_Title': "Abgeschlossene Projekte",
                'Projects_Courses_Books_Done_Projects_Button': "Mehr anzeigen",
                'Projects_Courses_Books_Reed_Books_Title': "Bücher",
                'Projects_Courses_Books_Passed_Courses_Title': "Abgeschlossene Kurse",
                'Contact_Section_Lets_Talk': "Lass uns reden!",
                'Contact_Section_Email_Button': '&nbsp; E-Mail&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; Telegramm<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lilita One', serif",
        },
        '中国人': {
                'Navbar_Home_Link': '家',
                'Navbar_Skills_DropDown_Link': '技能',
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI 和 UX 设计师',
                'Download_My_Resume': '下载我的简历',
                'Navbar_MY_Contact_Information': '联系我',
                'UI & UX Designer': "UI 和 UX 设计师",
                'Flutter Developer': "Flutter 开发人员",
                'Full Stack Developer': "全栈开发人员",
                'Android Developer': "Android 开发者",
                'AI Engineer': "人工智能工程师",
                'Industrial Designer': "工业设计师",
                'Self-Driving Automobile Engineer': "自动驾驶汽车工程师",
                'Mechanical Engineer': "机械工程师",
                'Landing_Page_Buttons_My_Done_Projects': "项目",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "软件技能",
                'Projects_Courses_Books_Done_Projects_Title': "已完成的项目",
                'Projects_Courses_Books_Done_Projects_Button': "查看更多",
                'Projects_Courses_Books_Reed_Books_Title': "图书",
                'Projects_Courses_Books_Passed_Courses_Title': "已通过课程",
                'Contact_Section_Lets_Talk': "让我们谈谈吧！",
                'Contact_Section_Email_Button': '&nbsp; 电子邮件&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; 电报<i class="bi bi-telegram"></i>',
                'fontFamily': "'Ma Shan Zheng', serif",
        },
        'Русский': {
                'Navbar_Home_Link': 'Дом',
                'Navbar_Skills_DropDown_Link': 'Навыки',
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI UX Дизайнер',
                'Download_My_Resume': 'Скачать мое резюме',
                'Navbar_MY_Contact_Information': 'Свяжитесь со мной',
                'UI & UX Designer': "Дизайнер пользовательского интерфейса и опыта взаимодействия",
                'Flutter Developer': "Разработчик Flutter",
                'Full Stack Developer': "Разработчик полного цикла",
                'Android Developer': "Android-разработчик",
                'AI Engineer': "Инженер по искусственному интеллекту",
                'Industrial Designer': "Промышленный дизайнер",
                'Self-Driving Automobile Engineer': "Инженер по беспилотным автомобилям",
                'Mechanical Engineer': "Инженер-механик",
                'Landing_Page_Buttons_My_Done_Projects': "Проекты",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "Навыки работы с программным обеспечением",
                'Projects_Courses_Books_Done_Projects_Title': "Выполненные проекты",
                'Projects_Courses_Books_Done_Projects_Button': "Смотреть больше",
                'Projects_Courses_Books_Reed_Books_Title': "Книги",
                'Projects_Courses_Books_Passed_Courses_Title': "Пройденные курсы",
                'Contact_Section_Lets_Talk': "Давайте поговорим!",
                'Contact_Section_Email_Button': '&nbsp; Электронная почта&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; Телеграмма<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lilita One', serif",
        },
        'Français': {
                'Navbar_Home_Link': 'Maison',
                'Navbar_Skills_DropDown_Link': 'Compétences',
                'Navbar_Skills_DropDown_UIUX_Designer': 'Concepteur UI et UX',
                'Download_My_Resume': 'Télécharger mon CV',
                'Navbar_MY_Contact_Information': 'Contactez-moi',
                'UI & UX Designer': "Concepteur UI et UX",
                'Flutter Developer': "Développeur Flutter",
                'Full Stack Developer': "Développeur Full Stack",
                'Android Developer': "Développeur Android",
                'AI Engineer': "Ingénieur en intelligence artificielle",
                'Industrial Designer': "Designer industriel",
                'Self-Driving Automobile Engineer': "Ingénieur en automobile autonome",
                'Mechanical Engineer': "Ingénieur mécanique",
                'Landing_Page_Buttons_My_Done_Projects': "Projets",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "Compétences logicielles",
                'Projects_Courses_Books_Done_Projects_Title': "Projets terminés",
                'Projects_Courses_Books_Done_Projects_Button': "Voir plus",
                'Projects_Courses_Books_Reed_Books_Title': "Livres",
                'Projects_Courses_Books_Passed_Courses_Title': "Cours réussis",
                'Contact_Section_Lets_Talk': "Parlons-en!",
                'Contact_Section_Email_Button': '&nbsp; E-mail&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; Télégramme<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lilita One', serif",
        },
        '日本語': {
                'Navbar_Home_Link': '家',
                'Navbar_Skills_DropDown_Link': 'スキル',
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI および UX デザイナー',
                'Download_My_Resume': '履歴書をダウンロード',
                'Navbar_MY_Contact_Information': 'お問い合わせ',
                'UI & UX Designer': "UI & UX デザイナー",
                'Flutter Developer': "フラッター開発者",
                'Full Stack Developer': "フルスタック開発者",
                'Android Developer': "Android 開発者",
                'AI Engineer': "人工知能エンジニア",
                'Industrial Designer': "工業デザイナー",
                'Self-Driving Automobile Engineer': "自動運転自動車エンジニア",
                'Mechanical Engineer': "機械エンジニア",
                'Landing_Page_Buttons_My_Done_Projects': "プロジェクト",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "ソフトウェアスキル",
                'Projects_Courses_Books_Done_Projects_Title': "完了したプロジェクト",
                'Projects_Courses_Books_Done_Projects_Button': "もっと見る",
                'Projects_Courses_Books_Reed_Books_Title': "書籍",
                'Projects_Courses_Books_Passed_Courses_Title': "合格したコース",
                'Contact_Section_Lets_Talk': "話しましょう！",
                'Contact_Section_Email_Button': '&nbsp; メール&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; 電報<i class="bi bi-telegram"></i>',
                'fontFamily': "'Dela Gothic One', serif",
        },
        '한국인': {
                'Navbar_Home_Link': '집',
                'Navbar_Skills_DropDown_Link': '기술',
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI 및 UX 디자이너',
                'Download_My_Resume': '내 이력서 다운로드',
                'Navbar_MY_Contact_Information': '나에게 연락하세요',
                'UI & UX Designer': "UI & UX 디자이너",
                'Flutter Developer': "플러터 개발자",
                'Full Stack Developer': "풀 스택 개발자",
                'Android Developer': "안드로이드 개발자",
                'AI Engineer': "인공지능 엔지니어",
                'Industrial Designer': "산업 디자이너",
                'Self-Driving Automobile Engineer': "자율 주행 자동차 엔지니어",
                'Mechanical Engineer': "기계 엔지니어",
                'Landing_Page_Buttons_My_Done_Projects': "프로젝트",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "소프트웨어 기술",
                'Projects_Courses_Books_Done_Projects_Title': "완료된 프로젝트",
                'Projects_Courses_Books_Done_Projects_Button': "더 보기",
                'Projects_Courses_Books_Reed_Books_Title': "서적",
                'Projects_Courses_Books_Passed_Courses_Title': "통과 과목",
                'Contact_Section_Lets_Talk': "이야기해요!",
                'Contact_Section_Email_Button': '&nbsp; 이메일&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; 전보<i class="bi bi-telegram"></i>',
                'fontFamily': "'Black Han Sans'",
        },
        'Español': {
                'Navbar_Home_Link': 'Hogar',
                'Navbar_Skills_DropDown_Link': 'Habilidades',
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI UX Diseñador',
                'Download_My_Resume': 'Descargar mi currículum',
                'Navbar_MY_Contact_Information': 'Contáctame',
                'UI & UX Designer': "Diseñador de interfaz de usuario y UX",
                'Flutter Developer': "Desarrollador Flutter",
                'Full Stack Developer': "Desarrollador de pila completa",
                'Android Developer': "Desarrollador de Android",
                'AI Engineer': "Ingeniero de inteligencia artificial",
                'Industrial Designer': "Diseñador industrial",
                'Self-Driving Automobile Engineer': "Ingeniero de automóviles autónomos",
                'Mechanical Engineer': "Ingeniero mecánico",
                'Landing_Page_Buttons_My_Done_Projects': "Proyectos",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "Habilidades de software",
                'Projects_Courses_Books_Done_Projects_Title': "Proyectos realizados",
                'Projects_Courses_Books_Done_Projects_Button': "Ver más",
                'Projects_Courses_Books_Reed_Books_Title': "Libros",
                'Projects_Courses_Books_Passed_Courses_Title': "Cursos Aprobados",
                'Contact_Section_Lets_Talk': "¡Hablemos!",
                'Contact_Section_Email_Button': '&nbsp; Correo electrónico&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; Telegrama<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lilita One', serif",
        },
        'हिंदी': {
                'Navbar_Home_Link': 'घर',
                'Navbar_Skills_DropDown_Link': 'कौशल',
                'Navbar_Skills_DropDown_UIUX_Designer': 'यूआई और यूएक्स डिजाइनर',
                'Download_My_Resume': 'मेरा बायोडाटा डाउनलोड करें',
                'Navbar_MY_Contact_Information': 'मुझसे संपर्क करें',
                'UI & UX Designer': "यूआई और यूएक्स डिजाइनर",
                'Flutter Developer': "फ़्लटर डेवलपर",
                'Full Stack Developer': "पूर्ण स्टैक डेवलपर",
                'Android Developer': "एंड्रॉइड डेवलपर",
                'AI Engineer': "कृत्रिम बुद्धि इंजीनियर",
                'Industrial Designer': "औद्योगिक डिजाइनर",
                'Self-Driving Automobile Engineer': "स्व-चालित ऑटोमोबाइल इंजीनियर",
                'Mechanical Engineer': "यांत्रिक इंजीनियर",
                'Landing_Page_Buttons_My_Done_Projects': "परियोजनाओं",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "सॉफ्टवेयर कौशल",
                'Projects_Courses_Books_Done_Projects_Title': "पूर्ण परियोजनाएं",
                'Projects_Courses_Books_Done_Projects_Button': "और देखें",
                'Projects_Courses_Books_Reed_Books_Title': "पुस्तकें",
                'Projects_Courses_Books_Passed_Courses_Title': "उत्तीर्ण पाठ्यक्रम",
                'Contact_Section_Lets_Talk': "चलो बात करते हैं!",
                'Contact_Section_Email_Button': '&nbsp; ईमेल&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; टेलीग्राम<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lilita One', serif",
        },
        'Português': {
                'Navbar_Home_Link': 'Casa',
                'Navbar_Skills_DropDown_Link': 'Competências',
                'Navbar_Skills_DropDown_UIUX_Designer': 'Designer de UI e UX',
                'Download_My_Resume': 'Baixe meu currículo',
                'Navbar_MY_Contact_Information': 'Entre em contacto comigo',
                'UI & UX Designer': "Designer de UI e UX",
                'Flutter Developer': "Flutter Desenvolvedor",
                'Full Stack Developer': "Full Stack Developer",
                'Android Developer': "Desenvolvedor Android",
                'AI Engineer': "Engenheiro de Inteligência Artificial",
                'Industrial Designer': "Desenhador Industrial",
                'Self-Driving Automobile Engineer': "Engenheiro de automóveis por conta própria",
                'Mechanical Engineer': "Engenheiro Mecânico",
                'Landing_Page_Buttons_My_Done_Projects': "Projetos",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "Competências de software",
                'Projects_Courses_Books_Done_Projects_Title': "Projetos concluídos",
                'Projects_Courses_Books_Done_Projects_Button': "Ver mais",
                'Projects_Courses_Books_Reed_Books_Title': "Livros",
                'Projects_Courses_Books_Passed_Courses_Title': "Cursos aprovados",
                'Contact_Section_Lets_Talk': "Vamos conversar!",
                'Contact_Section_Email_Button': '&nbsp; E-mail&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; Telegrama<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lilita One', serif",
        },
        'বাংলা': {
                'Navbar_Home_Link': 'বাড়ি',
                'Navbar_Skills_DropDown_Link': 'দক্ষতা',
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI এবং UX ডিজাইনার',
                'Download_My_Resume': 'আমার জীবনবৃত্তান্ত ডাউনলোড করুন',
                'Navbar_MY_Contact_Information': 'আমার সাথে যোগাযোগ করুন',
                'UI & UX Designer': "UI এবং UX ডিজাইনার",
                'Flutter Developer': "ফ্লটার ডেভেলপার",
                'Full Stack Developer': "সম্পূর্ণ স্ট্যাক ডেভেলপার",
                'Android Developer': "অ্যান্ড্রয়েড ডেভেলপার",
                'AI Engineer': "কৃত্রিম বুদ্ধিমত্তা প্রকৌশলী",
                'Industrial Designer': "ইন্ডাস্ট্রিয়াল ডিজাইনার",
                'Self-Driving Automobile Engineer': "স্ব-ড্রাইভিং অটোমোবাইল ইঞ্জিনিয়ার",
                'Mechanical Engineer': "মেকানিক্যাল ইঞ্জিনিয়ার",
                'Landing_Page_Buttons_My_Done_Projects': "প্রকল্প",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "সফটওয়্যার দক্ষতা",
                'Projects_Courses_Books_Done_Projects_Title': "সম্পন্ন প্রকল্প",
                'Projects_Courses_Books_Done_Projects_Button': "আরও দেখুন",
                'Projects_Courses_Books_Reed_Books_Title': "বই",
                'Projects_Courses_Books_Passed_Courses_Title': "পাস করা কোর্স",
                'Contact_Section_Lets_Talk': "আসুন কথা বলি!",
                'Contact_Section_Email_Button': '&nbsp; ইমেইল&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; টেলিগ্রাম<i class="bi bi-telegram"></i>',
                'fontFamily': "'Galada', serif",
        },
        'عَرَبِيّ': {
                'Navbar_Home_Link': 'بيت',
                'Navbar_Skills_DropDown_Link': 'مهارات',
                'Navbar_Skills_DropDown_UIUX_Designer': 'مصمم واجهة المستخدم وتجربة المستخدم',
                'Download_My_Resume': 'تحميل سيرتي الذاتية',
                'Navbar_MY_Contact_Information': 'اتصل بي',
                'UI & UX Designer': "مصمم واجهة المستخدم وتجربة المستخدم",
                'Flutter Developer': "مطور فلاتر",
                'Full Stack Developer': "مطور كامل الحزمة",
                'Android Developer': "مطور أندرويد",
                'AI Engineer': "مهندس الذكاء الاصطناعي",
                'Industrial Designer': "مصمم صناعي",
                'Self-Driving Automobile Engineer': "مهندس سيارات ذاتية القيادة",
                'Mechanical Engineer': "مهندس ميكانيكي",
                'Landing_Page_Buttons_My_Done_Projects': "المشاريع",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "مهارات البرمجيات",
                'Projects_Courses_Books_Done_Projects_Title': "المشاريع المنجزة",
                'Projects_Courses_Books_Done_Projects_Button': "شاهد المزيد",
                'Projects_Courses_Books_Reed_Books_Title': "كتب",
                'Projects_Courses_Books_Passed_Courses_Title': "الدورات التي اجتازتها",
                'Contact_Section_Lets_Talk': "دعونا نتحدث!",
                'Contact_Section_Email_Button': '&nbsp; بريد إلكتروني&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; برقية<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lalezar', serif",
        },
        'فارسی': {
                'Navbar_Home_Link': 'صفحه اصلی',
                'Navbar_Skills_DropDown_Link': 'مهارت ها',
                'Navbar_Skills_DropDown_UIUX_Designer': 'طراح UI و UX',
                'Download_My_Resume': 'دانلود رزومه من',
                'Navbar_MY_Contact_Information': 'با من تماس بگیرید',
                'UI & UX Designer': "طراح رابط و تجربه ی کاربری",
                'Flutter Developer': "توسعه دهنده فلاتر",
                'Full Stack Developer': "توسعه دهنده فول استک",
                'Android Developer': "توسعه دهنده اندروید",
                'AI Engineer': "مهندس هوش مصنوعی",
                'Industrial Designer': "طراح صنعتی",
                'Self-Driving Automobile Engineer': "مهندس خودروی خودران",
                'Mechanical Engineer': "مهندس مکانیک",
                'Landing_Page_Buttons_My_Done_Projects': "پروژه ها",
                'Landing_Page_Buttons_Software_Skills_Button_Text': "مهارت های نرم افزاری",
                'Projects_Courses_Books_Done_Projects_Title': "پروژه های انجام شده",
                'Projects_Courses_Books_Done_Projects_Button': "بیشتر ببینید",
                'Projects_Courses_Books_Reed_Books_Title': "کتاب ها",
                'Projects_Courses_Books_Passed_Courses_Title': "دوره های گذرانده شده",
                'Contact_Section_Lets_Talk': "بیایید صحبت کنیم!",
                'Contact_Section_Email_Button': '&nbsp; ایمیل&nbsp;&nbsp;<i class="bi bi-envelope-at-fill"></i>',
                'Contact_Section_Telegram_Button': '&nbsp; تلگرام<i class="bi bi-telegram"></i>',
                'fontFamily': "'Lalezar', serif",
        },
};

// -- >> Second Font Heirachy : Body Fonts
var body_Fonts_Translations = {
        'English': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI & UX Designer',
                'Navbar_Skills_DropDown_Flutter_Developer': 'Flutter Developer',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'Full Stack Developer',
                'Navbar_Skills_DropDown_Android_Developer': 'Android Developer',
                'Navbar_Skills_DropDown_AI_Developer': 'AI Engineer',
                'Navbar_Skills_DropDown_Industrial_Designer': 'Industrial Designer',
                'Navbar_Skills_DropDown_SDA_Engineer': 'Self-Driving Automobile Engineer',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'Mechanical Engineer',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "I am a Senior UI/UX Designer with years of experience crafting intuitive, user-centered digital experiences. My expertise lies in creating seamless designs that balance aesthetic appeal with functionality, ensuring exceptional user satisfaction. I specialize in tools like Figma, Adobe XD, and Sketch, and have successfully led cross-functional teams to deliver impactful projects across various industries. Let’s collaborate to bring your ideas to life and create designs that truly resonate with your audience!",
                        "Flutter Developer": "I am a Senior Flutter Developer with years of experience building high-performance, cross-platform mobile applications. My expertise includes creating visually stunning, feature-rich apps that deliver seamless user experiences on both Android and iOS platforms. Proficient in integrating APIs, state management solutions, and optimizing app performance, I thrive on turning complex ideas into functional, scalable solutions. Let’s work together to bring your vision to life with beautiful, responsive, and reliable Flutter apps!",
                        "Full Stack Developer": "I am a Senior Full Stack Developer with years of experience designing and building robust, scalable web applications. Skilled in both front-end and back-end development, I specialize in crafting intuitive user interfaces and efficient server-side architectures using modern frameworks and technologies. My expertise spans database management, API integrations, and cloud deployment to deliver end-to-end solutions. Let’s collaborate to transform your ideas into dynamic, high-performing applications that drive success!",
                        "Android Developer": "As a Senior Android Developer with years of experience, I specialize in designing and building high-performance, user-centric mobile applications. Proficient in Kotlin, Java, and Jetpack Compose, I create scalable solutions that deliver seamless user experiences. My expertise extends to API integrations, cloud services, and ensuring app optimization for performance and security. Dedicated to innovation, I transform ideas into feature-rich Android applications that stand out in today’s digital landscape.",
                        "AI Engineer": "As a Senior AI Engineer with years of experience, I specialize in designing and implementing cutting-edge machine learning models and AI systems. My expertise spans natural language processing, computer vision, and predictive analytics, delivering innovative solutions to complex problems. Skilled in frameworks like TensorFlow and PyTorch, I ensure robust deployment and optimization of AI solutions at scale. Passionate about advancing technology, I transform data into actionable insights, driving impactful results for businesses and users alike.",
                        "Industrial Designer": "As a Senior Industrial Designer with years of experience, I bring concepts to life through innovative and user-focused designs. My expertise lies in blending aesthetics, functionality, and sustainability to create products that stand out in form and utility. Skilled in advanced CAD software, prototyping, and material selection, I excel at transforming ideas into market-ready solutions. Passionate about design, I strive to craft products that enhance everyday life while pushing the boundaries of creativity.",
                        "Self-Driving Automobile Engineer": "As a Senior Self-Driving Automobile Engineer, I specialize in developing cutting-edge autonomous vehicle systems that prioritize safety, efficiency, and innovation. With deep expertise in sensor fusion, computer vision, and machine learning, I design and optimize algorithms that enable vehicles to navigate complex environments seamlessly. My experience spans integrating advanced hardware with robust software architectures to create reliable self-driving solutions. Passionate about shaping the future of mobility, I am committed to delivering autonomous technologies that redefine transportation.",
                        "Mechanical Engineer": "As a Senior Mechanical Engineer, I excel in designing and optimizing innovative mechanical systems that drive efficiency and performance. With a strong foundation in thermodynamics, materials science, and advanced manufacturing techniques, I have led projects across industries, delivering impactful solutions. My expertise includes developing prototypes, conducting rigorous analysis, and implementing sustainable engineering practices. Passionate about pushing the boundaries of design and technology, I am dedicated to creating mechanical systems that meet the challenges of tomorrow.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "See this skill in action by seeing my done projects.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "See which books helps me in learning journey of this skill.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "See the courses that help me to build this skill.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Muhammad Husain Aboutalebi. All rights reserved.",
                'fontFamily': "'Roboto Condensed', sans-serif",
        },
        'Deutsch': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI & UX Designer',
                'Navbar_Skills_DropDown_Flutter_Developer': 'Flutter-Entwickler',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'Full-Stack-Entwickler',
                'Navbar_Skills_DropDown_Android_Developer': 'Android-Entwickler',
                'Navbar_Skills_DropDown_AI_Developer': 'AI-Ingenieur',
                'Navbar_Skills_DropDown_Industrial_Designer': 'Industriedesigner',
                'Navbar_Skills_DropDown_SDA_Engineer': 'Ingenieur für selbstfahrende Automobile',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'Maschinenbauingenieur',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "Ich bin ein Senior UI/UX Designer mit jahrelanger Erfahrung in der Gestaltung intuitiver, benutzerzentrierter digitaler Erlebnisse. Meine Expertise liegt in der Erstellung nahtloser Designs, die Ästhetik und Funktionalität in Einklang bringen und so eine außergewöhnliche Benutzerzufriedenheit gewährleisten. Ich bin auf Tools wie Figma, Adobe XD und Sketch spezialisiert und habe erfolgreich funktionsübergreifende Teams geleitet, um wirkungsvolle Projekte in verschiedenen Branchen umzusetzen. Lassen Sie uns zusammenarbeiten, um Ihre Ideen zum Leben zu erwecken und Designs zu erstellen, die bei Ihrem Publikum wirklich Anklang finden!",
                        "Flutter Developer": "Ich bin ein Senior Flutter Developer mit jahrelanger Erfahrung in der Entwicklung leistungsstarker, plattformübergreifender mobiler Anwendungen. Zu meinen Kompetenzen gehört die Entwicklung visuell beeindruckender, funktionsreicher Apps, die ein nahtloses Benutzererlebnis auf Android- und iOS-Plattformen bieten. Ich bin erfahren in der Integration von APIs, Zustandsverwaltungslösungen und der Optimierung der App-Leistung und wandle komplexe Ideen in funktionale, skalierbare Lösungen um. Lassen Sie uns gemeinsam daran arbeiten, Ihre Vision mit schönen, reaktionsschnellen und zuverlässigen Flutter-Apps zum Leben zu erwecken!",
                        "Full Stack Developer": "Ich bin ein erfahrener Full-Stack-Entwickler mit jahrelanger Erfahrung im Entwerfen und Erstellen robuster, skalierbarer Webanwendungen. Ich bin sowohl in der Frontend- als auch in der Backend-Entwicklung versiert und habe mich auf die Erstellung intuitiver Benutzeroberflächen und effizienter Serverarchitekturen unter Verwendung moderner Frameworks und Technologien spezialisiert. Meine Expertise umfasst Datenbankverwaltung, API-Integrationen und Cloud-Bereitstellung, um End-to-End-Lösungen bereitzustellen. Lassen Sie uns zusammenarbeiten, um Ihre Ideen in dynamische, leistungsstarke Anwendungen umzuwandeln, die Erfolg bringen!",
                        "Android Developer": "Als Senior Android Developer mit langjähriger Erfahrung bin ich auf das Entwerfen und Erstellen leistungsstarker, benutzerzentrierter mobiler Anwendungen spezialisiert. Mit meinen Kenntnissen in Kotlin, Java und Jetpack Compose erstelle ich skalierbare Lösungen, die nahtlose Benutzererlebnisse bieten. Meine Expertise erstreckt sich auf API-Integrationen, Cloud-Dienste und die Gewährleistung der App-Optimierung hinsichtlich Leistung und Sicherheit. Mit meinem Engagement für Innovation verwandle ich Ideen in funktionsreiche Android-Anwendungen, die in der heutigen digitalen Landschaft hervorstechen.",
                        "AI Engineer": "Als Senior AI Engineer mit langjähriger Erfahrung bin ich auf die Entwicklung und Implementierung hochmoderner Modelle für maschinelles Lernen und KI-Systeme spezialisiert. Meine Expertise umfasst die Verarbeitung natürlicher Sprache, Computer Vision und Predictive Analytics und bietet innovative Lösungen für komplexe Probleme. Mit meinen Kenntnissen in Frameworks wie TensorFlow und PyTorch sorge ich für eine robuste Bereitstellung und Optimierung von KI-Lösungen im großen Maßstab. Mit meiner Leidenschaft für die Weiterentwicklung von Technologien verwandle ich Daten in umsetzbare Erkenntnisse und erziele so wirkungsvolle Ergebnisse für Unternehmen und Benutzer gleichermaßen.",
                        "Industrial Designer": "Als Senior Industrial Designer mit langjähriger Erfahrung erwecke ich Konzepte durch innovative und benutzerorientierte Designs zum Leben. Meine Expertise liegt darin, Ästhetik, Funktionalität und Nachhaltigkeit zu verbinden, um Produkte zu schaffen, die sich durch Form und Nutzen auszeichnen. Mit meinen Kenntnissen in fortgeschrittener CAD-Software, Prototyping und Materialauswahl bin ich hervorragend darin, Ideen in marktreife Lösungen umzusetzen. Mit meiner Leidenschaft für Design strebe ich danach, Produkte zu schaffen, die das tägliche Leben bereichern und gleichzeitig die Grenzen der Kreativität erweitern.",
                        "Self-Driving Automobile Engineer": "Als Senior Engineer für autonomes Fahren bin ich auf die Entwicklung hochmoderner autonomer Fahrzeugsysteme spezialisiert, bei denen Sicherheit, Effizienz und Innovation im Vordergrund stehen. Mit meiner umfassenden Expertise in Sensorfusion, Computervision und maschinellem Lernen entwerfe und optimiere ich Algorithmen, mit denen Fahrzeuge problemlos durch komplexe Umgebungen navigieren können. Meine Erfahrung umfasst die Integration fortschrittlicher Hardware mit robusten Softwarearchitekturen, um zuverlässige Lösungen für autonomes Fahren zu schaffen. Mit Leidenschaft für die Gestaltung der Zukunft der Mobilität setze ich mich dafür ein, autonome Technologien bereitzustellen, die den Transport neu definieren.",
                        "Mechanical Engineer": "Als leitender Maschinenbauingenieur bin ich hervorragend darin, innovative mechanische Systeme zu entwerfen und zu optimieren, die Effizienz und Leistung steigern. Mit einem soliden Fundament in Thermodynamik, Materialwissenschaft und fortschrittlichen Fertigungstechniken habe ich branchenübergreifend Projekte geleitet und wirkungsvolle Lösungen geliefert. Zu meinen Fachkenntnissen gehören die Entwicklung von Prototypen, die Durchführung strenger Analysen und die Implementierung nachhaltiger technischer Verfahren. Ich bin leidenschaftlich daran interessiert, die Grenzen von Design und Technologie zu erweitern, und widme mich der Entwicklung mechanischer Systeme, die den Herausforderungen von morgen gerecht werden.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "Sehen Sie sich diese Fähigkeit in Aktion an, indem Sie sich meine abgeschlossenen Projekte ansehen.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "Sehen Sie, welche Bücher mir beim Erlernen dieser Fähigkeit helfen.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "Sehen Sie sich die Kurse an, die mir beim Aufbau dieser Fähigkeit geholfen haben.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Muhammad Husain Aboutalebi. Alle Rechte vorbehalten.",
                'fontFamily': "'Roboto Condensed', sans-serif",
        },
        '中国人': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI 和 UX 设计师',
                'Navbar_Skills_DropDown_Flutter_Developer': 'Flutter 开发人员',
                'Navbar_Skills_DropDown_Full_Stack_Developer': '全栈开发人员',
                'Navbar_Skills_DropDown_Android_Developer': 'Android 开发者',
                'Navbar_Skills_DropDown_AI_Developer': '人工智能工程师',
                'Navbar_Skills_DropDown_Industrial_Designer': '工业设计师',
                'Navbar_Skills_DropDown_SDA_Engineer': '自动驾驶汽车工程师',
                'Navbar_Skills_DropDown_Mechanical_Engineer': '机械工程师',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "我是一名高级 UI/UX 设计师，拥有多年打造直观、以用户为中心的数字体验的经验。我擅长创建无缝设计，在美观性和功能性之间取得平衡，确保出色的用户满意度。我擅长使用 Figma、Adobe XD 和 Sketch 等工具，并成功领导跨职能团队在各个行业交付了有影响力的项目。让我们合作，将您的想法变为现实，并创建真正引起观众共鸣的设计！",
                        "Flutter Developer": "我是一名高级 Flutter 开发者，拥有多年构建高性能、跨平台移动应用的经验。我擅长创建视觉效果出色、功能丰富的应用，在 Android 和 iOS 平台上提供无缝的用户体验。我擅长集成 API、状态管理解决方案和优化应用性能，擅长将复杂的想法转化为实用、可扩展的解决方案。让我们一起努力，通过美观、响应迅速且可靠的 Flutter 应用将您的愿景变为现实！",
                        "Full Stack Developer": "我是一名高级全栈开发人员，拥有多年设计和构建强大、可扩展的 Web 应用程序的经验。我精通前端和后端开发，擅长使用现代框架和技术设计直观的用户界面和高效的服务器端架构。我的专业知识涵盖数据库管理、API 集成和云部署，以提供端到端解决方案。让我们合作将您的想法转化为动态、高性能的应用程序，从而推动成功！",
                        "Android Developer": "作为一名拥有多年经验的高级 Android 开发者，我专注于设计和构建以用户为中心的高性能移动应用。我精通 Kotlin、Java 和 Jetpack Compose，能够创建可扩展的解决方案，提供无缝的用户体验。我的专业知识涵盖 API 集成、云服务以及确保应用优化以提高性能和安全性。我致力于创新，将创意转化为功能丰富的 Android 应用，在当今的数字环境中脱颖而出。",
                        "AI Engineer": "作为一名拥有多年经验的高级 AI 工程师，我专注于设计和实施尖端的机器学习模型和 AI 系统。我的专业知识涵盖自然语言处理、计算机视觉和预测分析，为复杂问题提供创新解决方案。我精通 TensorFlow 和 PyTorch 等框架，确保大规模部署和优化 AI 解决方案。我热衷于推动技术进步，将数据转化为切实可行的见解，为企业和用户带来有影响力的结果。",
                        "Industrial Designer": "作为一名拥有多年经验的高级工业设计师，我通过创新且以用户为中心的设计将概念变为现实。我擅长将美学、功能和可持续性融合在一起，创造出外形和实用性均出众的产品。我精通高级 CAD 软件、原型设计和材料选择，擅长将创意转化为市场解决方案。我对设计充满热情，致力于打造能够改善日常生活的产品，同时突破创造力的界限。",
                        "Self-Driving Automobile Engineer": "作为一名高级自动驾驶汽车工程师，我专注于开发以安全、效率和创新为优先的尖端自动驾驶汽车系统。凭借在传感器融合、计算机视觉和机器学习方面的深厚专业知识，我设计和优化算法，使车辆能够无缝导航复杂的环境。我的经验包括将先进的硬件与强大的软件架构集成以创建可靠的自动驾驶解决方案。我热衷于塑造移动出行的未来，致力于提供重新定义交通的自动驾驶技术。",
                        "Mechanical Engineer": "作为一名高级机械工程师，我擅长设计和优化创新的机械系统，以提高效率和性能。凭借在热力学、材料科学和先进制造技术方面的扎实基础，我曾领导过跨行业的项目，提供过有影响力的解决方案。我的专长包括开发原型、进行严格分析和实施可持续的工程实践。我热衷于突破设计和技术的界限，致力于创造能够应对未来挑战的机械系统。",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "通过查看我已完成的项目，了解这项技能的实际应用。",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "看看哪些书籍能帮助我学习这项技能。",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "查看帮助我培养此项技能的课程。",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Muhammad Husain Aboutalebi。保留所有权利。",
                'fontFamily': "'Ma Shan Zheng', serif",
        },
        'Русский': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI UX Дизайнер',
                'Navbar_Skills_DropDown_Flutter_Developer': 'Разработчик Flutter',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'Разработчик полного цикла',
                'Navbar_Skills_DropDown_Android_Developer': 'Android-разработчик',
                'Navbar_Skills_DropDown_AI_Developer': 'Инженер ИИ',
                'Navbar_Skills_DropDown_Industrial_Designer': 'Промышленный дизайнер',
                'Navbar_Skills_DropDown_SDA_Engineer': 'Инженер по беспилотным автомобилям',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'Инженер-механик',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "Я старший UI/UX-дизайнер с многолетним опытом создания интуитивно понятных, ориентированных на пользователя цифровых впечатлений. Мой опыт заключается в создании бесшовных дизайнов, которые сочетают эстетическую привлекательность с функциональностью, обеспечивая исключительную удовлетворенность пользователей. Я специализируюсь на таких инструментах, как Figma, Adobe XD и Sketch, и успешно руководил кросс-функциональными командами, реализуя эффективные проекты в различных отраслях. Давайте сотрудничать, чтобы воплотить ваши идеи в жизнь и создать дизайн, который действительно найдет отклик у вашей аудитории!",
                        "Flutter Developer": "Я старший разработчик Flutter с многолетним опытом создания высокопроизводительных кроссплатформенных мобильных приложений. Мой опыт включает создание визуально ошеломляющих, многофункциональных приложений, которые обеспечивают бесперебойный пользовательский опыт на платформах Android и iOS. Опытный в интеграции API, решений по управлению состоянием и оптимизации производительности приложений, я преуспеваю в превращении сложных идей в функциональные, масштабируемые решения. Давайте работать вместе, чтобы воплотить ваше видение в жизнь с помощью красивых, отзывчивых и надежных приложений Flutter!",
                        "Full Stack Developer": "Я старший Full Stack-разработчик с многолетним опытом проектирования и создания надежных масштабируемых веб-приложений. Имея навыки как в front-end, так и в back-end разработке, я специализируюсь на создании интуитивно понятных пользовательских интерфейсов и эффективных серверных архитектур с использованием современных фреймворков и технологий. Мои знания охватывают управление базами данных, интеграцию API и развертывание в облаке для предоставления комплексных решений. Давайте сотрудничать, чтобы превратить ваши идеи в динамичные, высокопроизводительные приложения, которые приведут к успеху!",
                        "Android Developer": "Как старший разработчик Android с многолетним опытом, я специализируюсь на проектировании и создании высокопроизводительных мобильных приложений, ориентированных на пользователя. Владея Kotlin, Java и Jetpack Compose, я создаю масштабируемые решения, которые обеспечивают бесперебойный пользовательский опыт. Мой опыт распространяется на интеграции API, облачные сервисы и обеспечение оптимизации приложений для производительности и безопасности. Преданный инновациям, я преобразую идеи в многофункциональные приложения Android, которые выделяются в современном цифровом ландшафте.",
                        "AI Engineer": "Как старший инженер ИИ с многолетним опытом, я специализируюсь на разработке и внедрении передовых моделей машинного обучения и систем ИИ. Мои знания охватывают обработку естественного языка, компьютерное зрение и предиктивную аналитику, предлагая инновационные решения для сложных проблем. Имея навыки работы с такими фреймворками, как TensorFlow и PyTorch, я обеспечиваю надежное развертывание и оптимизацию решений ИИ в масштабе. Увлеченный развитием технологий, я преобразую данные в действенные идеи, добиваясь впечатляющих результатов как для бизнеса, так и для пользователей.",
                        "Industrial Designer": "Как старший промышленный дизайнер с многолетним опытом, я воплощаю концепции в жизнь с помощью инновационных и ориентированных на пользователя дизайнов. Мой опыт заключается в сочетании эстетики, функциональности и устойчивости для создания продуктов, которые выделяются формой и полезностью. Имея навыки в передовом программном обеспечении CAD, прототипировании и выборе материалов, я преуспеваю в преобразовании идей в готовые к выходу на рынок решения. Увлеченный дизайном, я стремлюсь создавать продукты, которые улучшают повседневную жизнь, одновременно расширяя границы креативности.",
                        "Self-Driving Automobile Engineer": "Как старший инженер по беспилотным автомобилям, я специализируюсь на разработке передовых автономных транспортных систем, которые ставят безопасность, эффективность и инновации на первое место. Обладая глубокими знаниями в области слияния датчиков, компьютерного зрения и машинного обучения, я разрабатываю и оптимизирую алгоритмы, которые позволяют транспортным средствам беспрепятственно перемещаться в сложных условиях. Мой опыт охватывает интеграцию передового оборудования с надежной программной архитектурой для создания надежных решений для беспилотного вождения. Увлеченный формированием будущего мобильности, я стремлюсь предоставлять автономные технологии, которые меняют транспорт.",
                        "Mechanical Engineer": "Как старший инженер-механик, я преуспеваю в проектировании и оптимизации инновационных механических систем, которые повышают эффективность и производительность. Имея прочную основу в термодинамике, материаловедении и передовых производственных технологиях, я руководил проектами в различных отраслях промышленности, предоставляя эффективные решения. Мой опыт включает разработку прототипов, проведение строгого анализа и внедрение устойчивых инженерных практик. Страстно стремясь расширить границы дизайна и технологий, я стремлюсь создавать механические системы, которые отвечают вызовам завтрашнего дня.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "Оцените этот навык в действии, посмотрев мои реализованные проекты.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "Посмотрите, какие книги помогли мне в освоении этого навыка.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "Ознакомьтесь с курсами, которые помогают мне развить этот навык.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Мухаммад Хусейн Абуталеби. Все права защищены.",
                'fontFamily': "'Roboto Condensed', sans-serif",
        },
        'Français': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'Concepteur UI et UX',
                'Navbar_Skills_DropDown_Flutter_Developer': 'Développeur Flutter',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'Développeur Full Stack',
                'Navbar_Skills_DropDown_Android_Developer': 'Développeur Android',
                'Navbar_Skills_DropDown_AI_Developer': 'Ingénieur en IA',
                'Navbar_Skills_DropDown_Industrial_Designer': 'Designer industriel',
                'Navbar_Skills_DropDown_SDA_Engineer': 'Ingénieur en automobile autonome',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'Ingénieur mécanique',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "Je suis un concepteur UI/UX senior avec des années d'expérience dans la création d'expériences numériques intuitives et centrées sur l'utilisateur. Mon expertise réside dans la création de conceptions homogènes qui équilibrent l'attrait esthétique et la fonctionnalité, garantissant une satisfaction utilisateur exceptionnelle. Je me spécialise dans des outils comme Figma, Adobe XD et Sketch, et j'ai dirigé avec succès des équipes interfonctionnelles pour réaliser des projets percutants dans divers secteurs. Collaborons pour donner vie à vos idées et créer des designs qui trouvent un véritable écho auprès de votre public !",
                        "Flutter Developer": "Je suis un développeur Flutter senior avec des années d'expérience dans la création d'applications mobiles multiplateformes hautes performances. Mon expertise comprend la création d'applications visuellement époustouflantes et riches en fonctionnalités qui offrent des expériences utilisateur transparentes sur les plates-formes Android et iOS. Compétent dans l'intégration d'API, de solutions de gestion d'état et d'optimisation des performances des applications, je m'efforce de transformer des idées complexes en solutions fonctionnelles et évolutives. Travaillons ensemble pour donner vie à votre vision avec des applications Flutter belles, réactives et fiables !",
                        "Full Stack Developer": "Je suis un développeur Full Stack senior avec des années d'expérience dans la conception et la création d'applications Web robustes et évolutives. Compétent en développement front-end et back-end, je me spécialise dans la création d'interfaces utilisateur intuitives et d'architectures côté serveur efficaces à l'aide de cadres et de technologies modernes. Mon expertise couvre la gestion de bases de données, les intégrations d'API et le déploiement cloud pour fournir des solutions de bout en bout. Collaborons pour transformer vos idées en applications dynamiques et performantes qui génèrent du succès !",
                        "Android Developer": "En tant que développeur Android senior avec des années d'expérience, je me spécialise dans la conception et la création d'applications mobiles hautes performances et centrées sur l'utilisateur. Maîtrisant Kotlin, Java et Jetpack Compose, je crée des solutions évolutives qui offrent des expériences utilisateur fluides. Mon expertise s'étend aux intégrations d'API, aux services cloud et à l'optimisation des applications pour les performances et la sécurité. Dévoué à l'innovation, je transforme les idées en applications Android riches en fonctionnalités qui se démarquent dans le paysage numérique d'aujourd'hui.",
                        "AI Engineer": "En tant qu'ingénieur IA senior avec des années d'expérience, je me spécialise dans la conception et la mise en œuvre de modèles d'apprentissage automatique et de systèmes d'IA de pointe. Mon expertise couvre le traitement du langage naturel, la vision par ordinateur et l'analyse prédictive, offrant des solutions innovantes à des problèmes complexes. Compétent dans des cadres tels que TensorFlow et PyTorch, j'assure un déploiement et une optimisation robustes des solutions d'IA à grande échelle. Passionné par l'avancement de la technologie, je transforme les données en informations exploitables, générant des résultats percutants pour les entreprises et les utilisateurs.",
                        "Industrial Designer": "En tant que designer industriel senior avec des années d'expérience, je donne vie à des concepts grâce à des conceptions innovantes et axées sur l'utilisateur. Mon expertise réside dans le mélange d'esthétique, de fonctionnalité et de durabilité pour créer des produits qui se distinguent par leur forme et leur utilité. Compétent en logiciels de CAO avancés, en prototypage et en sélection de matériaux, j'excelle dans la transformation d'idées en solutions prêtes à être commercialisées. Passionné par le design, je m'efforce de créer des produits qui améliorent la vie quotidienne tout en repoussant les limites de la créativité.",
                        "Self-Driving Automobile Engineer": "En tant qu'ingénieur automobile senior en conduite autonome, je me spécialise dans le développement de systèmes de véhicules autonomes de pointe qui privilégient la sécurité, l'efficacité et l'innovation. Grâce à une expertise approfondie en fusion de capteurs, en vision par ordinateur et en apprentissage automatique, je conçois et optimise des algorithmes qui permettent aux véhicules de naviguer de manière transparente dans des environnements complexes. Mon expérience s'étend de l'intégration de matériel avancé à des architectures logicielles robustes pour créer des solutions de conduite autonome fiables. Passionné par l'idée de façonner l'avenir de la mobilité, je m'engage à fournir des technologies autonomes qui redéfinissent le transport.",
                        "Mechanical Engineer": "En tant qu'ingénieur mécanique senior, j'excelle dans la conception et l'optimisation de systèmes mécaniques innovants qui améliorent l'efficacité et la performance. Avec une solide base en thermodynamique, en science des matériaux et en techniques de fabrication avancées, j'ai dirigé des projets dans plusieurs secteurs, fournissant des solutions efficaces. Mon expertise comprend le développement de prototypes, la réalisation d'analyses rigoureuses et la mise en œuvre de pratiques d'ingénierie durables. Passionné par le fait de repousser les limites du design et de la technologie, je me consacre à la création de systèmes mécaniques qui répondent aux défis de demain.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "Découvrez cette compétence en action en voyant mes projets réalisés.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "Découvrez quels livres m'aident à apprendre le parcours de cette compétence.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "Découvrez les cours qui m'aident à développer cette compétence.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Muhammad Husain Aboutalebi. Tous droits réservés.",
                'fontFamily': "'Roboto Condensed', sans-serif",
        },
        '日本語': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI および UX デザイナー',
                'Navbar_Skills_DropDown_Flutter_Developer': 'フラッター開発者',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'フルスタック開発者',
                'Navbar_Skills_DropDown_Android_Developer': 'Android 開発者',
                'Navbar_Skills_DropDown_AI_Developer': 'AIエンジニア',
                'Navbar_Skills_DropDown_Industrial_Designer': '工業デザイナー',
                'Navbar_Skills_DropDown_SDA_Engineer': '自動運転自動車エンジニア',
                'Navbar_Skills_DropDown_Mechanical_Engineer': '機械エンジニア',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "私は、直感的でユーザー中心のデジタル体験を作り上げてきた長年の経験を持つシニア UI/UX デザイナーです。私の専門は、美観と機能性のバランスを取り、優れたユーザー満足度を保証するシームレスなデザインを作成することです。私は Figma、Adobe XD、Sketch などのツールを専門としており、さまざまな業界で影響力のあるプロジェクトを実現するために、部門横断的なチームを率いてきました。あなたのアイデアを実現し、オーディエンスの心に響くデザインを共同で作りましょう。",
                        "Flutter Developer": "私は、高性能なクロスプラットフォーム モバイル アプリケーションの構築に長年携わってきたシニア Flutter 開発者です。Android と iOS の両方のプラットフォームでシームレスなユーザー エクスペリエンスを提供する、視覚的に美しく機能豊富なアプリの作成が専門です。API の統合、状態管理ソリューション、アプリ パフォーマンスの最適化に精通しており、複雑なアイデアを機能的でスケーラブルなソリューションに変えることに専念しています。美しく、応答性に優れ、信頼性の高い Flutter アプリで、あなたのビジョンを実現するために一緒に取り組みましょう。",
                        "Full Stack Developer": "私は、堅牢でスケーラブルな Web アプリケーションの設計と構築に長年の経験を持つシニア フルスタック デベロッパーです。フロントエンドとバックエンドの両方の開発に熟練しており、最新のフレームワークとテクノロジーを使用して、直感的なユーザー インターフェイスと効率的なサーバー側アーキテクチャを作成することを専門としています。私の専門知識は、データベース管理、API 統合、クラウド展開に及び、エンドツーエンドのソリューションを提供します。あなたのアイデアを、成功につながるダイナミックで高性能なアプリケーションに変換するために協力しましょう。",
                        "Android Developer": "長年の経験を持つシニア Android 開発者として、私は高性能でユーザー中心のモバイル アプリケーションの設計と構築を専門としています。Kotlin、Java、Jetpack Compose に精通しており、シームレスなユーザー エクスペリエンスを提供するスケーラブルなソリューションを作成しています。私の専門知識は、API 統合、クラウド サービス、パフォーマンスとセキュリティのためのアプリの最適化の確保にまで及びます。イノベーションに専念し、アイデアを今日のデジタル環境で際立つ機能豊富な Android アプリケーションに変換します。",
                        "AI Engineer": "長年の経験を持つシニア AI エンジニアとして、最先端の機械学習モデルと AI システムの設計と実装を専門としています。私の専門知識は、自然言語処理、コンピューター ビジョン、予測分析に及び、複雑な問題に革新的なソリューションを提供しています。TensorFlow や PyTorch などのフレームワークに精通しており、大規模な AI ソリューションの堅牢な展開と最適化を実現しています。テクノロジーの進歩に情熱を傾け、データを実用的な洞察に変換し、企業とユーザーの両方に影響力のある結果をもたらします。",
                        "Industrial Designer": "長年の経験を持つシニア工業デザイナーとして、革新的でユーザー重視のデザインを通じてコン​​セプトを具現化します。私の専門は、美学、機能性、持続可能性を融合し、形状と実用性で際立つ製品を作ることです。高度な CAD ソフトウェア、プロトタイピング、材料選択のスキルを持ち、アイデアを市場対応のソリューションに変換することに長けています。デザインに情熱を注ぎ、創造性の限界を押し広げながら、日常生活を向上させる製品を作るよう努めています。",
                        "Self-Driving Automobile Engineer": "シニア自動運転自動車エンジニアとして、私は安全性、効率性、革新性を優先する最先端の自動運転車システムの開発を専門としています。センサー フュージョン、コンピューター ビジョン、機械学習に関する深い専門知識を活かして、複雑な環境をシームレスに走行できる車両を実現するアルゴリズムを設計し、最適化しています。高度なハードウェアと堅牢なソフトウェア アーキテクチャを統合して信頼性の高い自動運転ソリューションを作成する経験があります。モビリティの未来を形作ることに情熱を傾け、交通を再定義する自動運転技術の提供に取り組んでいます。",
                        "Mechanical Engineer": "シニア機械エンジニアとして、私は効率とパフォーマンスを向上させる革新的な機械システムの設計と最適化に優れています。熱力学、材料科学、高度な製造技術の強固な基盤を活かして、さまざまな業界のプロジェクトを主導し、影響力のあるソリューションを提供してきました。私の専門分野には、プロトタイプの開発、厳密な分析の実施、持続可能なエンジニアリング手法の実装などがあります。デザインとテクノロジーの限界を押し広げることに情熱を傾け、将来の課題に対応する機械システムの作成に取り組んでいます。",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "私の完了したプロジェクトを見て、このスキルが実際にどのように機能するかを確認してください。",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "このスキルの学習の過程でどの本が役立つかを確認します。",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "このスキルを身に付けるのに役立つコースをご覧ください。",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Muhammad Husain Aboutalebi。無断転載を禁じます。",
                'fontFamily': "'Hina Mincho', serif",
        },
        '한국인': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI 및 UX 디자이너',
                'Navbar_Skills_DropDown_Flutter_Developer': '플러터 개발자',
                'Navbar_Skills_DropDown_Full_Stack_Developer': '풀스택 개발자',
                'Navbar_Skills_DropDown_Android_Developer': '안드로이드 개발자',
                'Navbar_Skills_DropDown_AI_Developer': 'AI 엔지니어',
                'Navbar_Skills_DropDown_Industrial_Designer': '산업 디자이너',
                'Navbar_Skills_DropDown_SDA_Engineer': '자율 주행 자동차 엔지니어',
                'Navbar_Skills_DropDown_Mechanical_Engineer': '기계 엔지니어',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "저는 직관적이고 사용자 중심적인 디지털 경험을 만들어 온 수년간의 경험을 가진 상임 UI/UX 디자이너입니다. 저의 전문성은 미적 매력과 기능성의 균형을 이루는 매끄러운 디자인을 만드는 데 있으며, 뛰어난 사용자 만족을 보장합니다. 저는 Figma, Adobe XD, Sketch와 같은 도구를 전문으로 하며, 다양한 산업 분야에서 영향력 있는 프로젝트를 제공하기 위해 교차 기능 팀을 성공적으로 이끌었습니다. 여러분의 아이디어를 실현하고 청중에게 진정으로 공감되는 디자인을 만들기 위해 협력합시다!",
                        "Flutter Developer": "저는 수년간 고성능 크로스 플랫폼 모바일 애플리케이션을 구축한 경험이 있는 Senior Flutter Developer입니다. 저의 전문 분야에는 Android와 iOS 플랫폼 모두에서 원활한 사용자 경험을 제공하는 시각적으로 멋지고 기능이 풍부한 앱을 만드는 것이 포함됩니다. API, 상태 관리 솔루션을 통합하고 앱 성능을 최적화하는 데 능숙하며 복잡한 아이디어를 기능적이고 확장 가능한 솔루션으로 전환하는 데 열정적입니다. 아름답고 반응성이 뛰어나며 신뢰할 수 있는 Flutter 앱으로 여러분의 비전을 실현하기 위해 함께 노력합시다!",
                        "Full Stack Developer": "저는 견고하고 확장 가능한 웹 애플리케이션을 설계하고 구축한 수년간의 경험을 가진 Senior Full Stack Developer입니다. 프런트엔드와 백엔드 개발에 능숙하며, 최신 프레임워크와 기술을 사용하여 직관적인 사용자 인터페이스와 효율적인 서버 측 아키텍처를 만드는 데 특화되어 있습니다. 저의 전문성은 데이터베이스 관리, API 통합, 클라우드 배포에 걸쳐 엔드투엔드 솔루션을 제공합니다. 귀하의 아이디어를 성공을 이끄는 동적이고 고성능 애플리케이션으로 변환하기 위해 협력합시다!",
                        "Android Developer": "수년간의 경험을 가진 Senior Android Developer로서, 저는 고성능, 사용자 중심 모바일 애플리케이션을 설계하고 구축하는 데 특화되어 있습니다. Kotlin, Java, Jetpack Compose에 능숙하며, 원활한 사용자 경험을 제공하는 확장 가능한 솔루션을 만듭니다. 저의 전문성은 API 통합, 클라우드 서비스, 성능 및 보안을 위한 앱 최적화 보장으로 확장됩니다. 혁신에 전념하며, 아이디어를 오늘날의 디지털 환경에서 돋보이는 기능이 풍부한 Android 애플리케이션으로 전환합니다.",
                        "AI Engineer": "수년간의 경험을 가진 선임 AI 엔지니어로서, 저는 최첨단 머신 러닝 모델과 AI 시스템을 설계하고 구현하는 데 특화되어 있습니다. 저의 전문 분야는 자연어 처리, 컴퓨터 비전, 예측 분석에 걸쳐 있으며, 복잡한 문제에 대한 혁신적인 솔루션을 제공합니다. TensorFlow 및 PyTorch와 같은 프레임워크에 능숙하여 대규모로 AI 솔루션을 강력하게 배포하고 최적화합니다. 기술 발전에 열정을 가지고 데이터를 실행 가능한 통찰력으로 변환하여 기업과 사용자 모두에게 영향력 있는 결과를 이끌어냅니다.",
                        "Industrial Designer": "수년간의 경험을 가진 선임 산업 디자이너로서, 저는 혁신적이고 사용자 중심적인 디자인을 통해 컨셉을 현실로 구현합니다. 저의 전문성은 미학, 기능성, 지속 가능성을 혼합하여 형태와 유용성에서 돋보이는 제품을 만드는 데 있습니다. 고급 CAD 소프트웨어, 프로토타입 제작, 소재 선택에 능숙하며, 아이디어를 시장에 출시할 수 있는 솔루션으로 전환하는 데 능숙합니다. 디자인에 대한 열정을 가지고, 창의성의 경계를 넓히면서 일상 생활을 향상시키는 제품을 만들기 위해 노력합니다.",
                        "Self-Driving Automobile Engineer": "선임 자율주행 자동차 엔지니어로서, 저는 안전, 효율성, 혁신을 우선시하는 최첨단 자율주행차 시스템 개발을 전문으로 합니다. 센서 융합, 컴퓨터 비전, 머신 러닝에 대한 심층적인 전문 지식을 바탕으로, 차량이 복잡한 환경을 원활하게 탐색할 수 있는 알고리즘을 설계하고 최적화합니다. 저의 경험은 고급 하드웨어를 견고한 소프트웨어 아키텍처와 통합하여 신뢰할 수 있는 자율주행 솔루션을 만드는 데 있습니다. 모빌리티의 미래를 형성하는 데 열정을 가지고, 저는 교통을 재정의하는 자율 주행 기술을 제공하는 데 전념합니다.",
                        "Mechanical Engineer": "선임 기계 엔지니어로서 저는 효율성과 성능을 이끌어내는 혁신적인 기계 시스템을 설계하고 최적화하는 데 능숙합니다. 열역학, 재료 과학 및 고급 제조 기술에 대한 강력한 기초를 바탕으로 저는 산업 전반에 걸쳐 프로젝트를 이끌고 영향력 있는 솔루션을 제공했습니다. 저의 전문 분야에는 프로토타입 개발, 엄격한 분석 수행 및 지속 가능한 엔지니어링 관행 구현이 포함됩니다. 설계와 기술의 경계를 넓히는 데 열정적이며, 미래의 과제를 충족하는 기계 시스템을 만드는 데 전념합니다.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "내가 완료한 프로젝트를 보고 이 기술이 실제로 어떻게 활용되는지 확인해 보세요.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "이 기술을 배우는 데 어떤 책이 도움이 되는지 확인해 보세요.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "이 기술을 키우는 데 도움이 되는 과정을 확인해 보세요.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Muhammad Husain Aboutalebi. 모든 권리 보유.",
                'fontFamily': "'Gowun Batang', serif",
        },
        'Español': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI UX Diseñador',
                'Navbar_Skills_DropDown_Flutter_Developer': 'Desarrollador Flutter',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'Desarrollador de pila completa',
                'Navbar_Skills_DropDown_Android_Developer': 'Desarrollador de Android',
                'Navbar_Skills_DropDown_AI_Developer': 'Ingeniero de inteligencia artificial',
                'Navbar_Skills_DropDown_Industrial_Designer': 'Diseñador industrial',
                'Navbar_Skills_DropDown_SDA_Engineer': 'Ingeniero de automóviles autónomos',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'Ingeniero mecánico',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "Soy diseñador senior de UI/UX con años de experiencia en la creación de experiencias digitales intuitivas y centradas en el usuario. Mi experiencia radica en crear diseños impecables que equilibren el atractivo estético con la funcionalidad, garantizando una satisfacción excepcional del usuario. Me especializo en herramientas como Figma, Adobe XD y Sketch, y he liderado con éxito equipos multifuncionales para entregar proyectos impactantes en varias industrias. ¡Colaboremos para darle vida a tus ideas y crear diseños que realmente resuenen con tu audiencia!",
                        "Flutter Developer": "Soy un desarrollador sénior de Flutter con años de experiencia en la creación de aplicaciones móviles multiplataforma de alto rendimiento. Mi experiencia incluye la creación de aplicaciones visualmente impactantes y ricas en funciones que brindan experiencias de usuario perfectas tanto en plataformas Android como iOS. Soy experto en la integración de API, soluciones de gestión de estados y optimización del rendimiento de las aplicaciones. Me encanta convertir ideas complejas en soluciones funcionales y escalables. ¡Trabajemos juntos para darle vida a tu visión con aplicaciones Flutter hermosas, responsivas y confiables!",
                        "Full Stack Developer": "Soy un desarrollador senior full stack con años de experiencia en el diseño y la creación de aplicaciones web robustas y escalables. Soy experto en desarrollo front-end y back-end y me especializo en la creación de interfaces de usuario intuitivas y arquitecturas eficientes del lado del servidor utilizando tecnologías y marcos modernos. Mi experiencia abarca la gestión de bases de datos, integraciones de API e implementación en la nube para ofrecer soluciones integrales. ¡Colaboremos para transformar sus ideas en aplicaciones dinámicas y de alto rendimiento que impulsen el éxito!",
                        "Android Developer": "Como desarrollador sénior de Android con años de experiencia, me especializo en el diseño y la creación de aplicaciones móviles de alto rendimiento centradas en el usuario. Soy experto en Kotlin, Java y Jetpack Compose y creo soluciones escalables que ofrecen experiencias de usuario perfectas. Mi experiencia se extiende a las integraciones de API, los servicios en la nube y la optimización de aplicaciones para el rendimiento y la seguridad. Dedicado a la innovación, transformo ideas en aplicaciones Android ricas en funciones que se destacan en el panorama digital actual.",
                        "AI Engineer": "Como ingeniero sénior de inteligencia artificial con años de experiencia, me especializo en el diseño e implementación de modelos de aprendizaje automático y sistemas de inteligencia artificial de vanguardia. Mi experiencia abarca el procesamiento del lenguaje natural, la visión artificial y el análisis predictivo, y ofrezco soluciones innovadoras a problemas complejos. Con experiencia en marcos como TensorFlow y PyTorch, garantizo la implementación y optimización sólidas de soluciones de inteligencia artificial a escala. Apasionado por el avance de la tecnología, transformo los datos en información procesable, generando resultados impactantes tanto para las empresas como para los usuarios.",
                        "Industrial Designer": "Como diseñador industrial sénior con años de experiencia, doy vida a los conceptos a través de diseños innovadores y centrados en el usuario. Mi experiencia radica en combinar la estética, la funcionalidad y la sostenibilidad para crear productos que se destaquen por su forma y utilidad. Soy experto en software CAD avanzado, creación de prototipos y selección de materiales, y me destaco por transformar ideas en soluciones listas para el mercado. Apasionado por el diseño, me esfuerzo por crear productos que mejoren la vida cotidiana y, al mismo tiempo, superen los límites de la creatividad.",
                        "Self-Driving Automobile Engineer": "Como ingeniero sénior en vehículos autónomos, me especializo en el desarrollo de sistemas de vehículos autónomos de vanguardia que priorizan la seguridad, la eficiencia y la innovación. Con una gran experiencia en fusión de sensores, visión artificial y aprendizaje automático, diseño y optimizo algoritmos que permiten a los vehículos navegar por entornos complejos sin problemas. Mi experiencia abarca la integración de hardware avanzado con arquitecturas de software robustas para crear soluciones de conducción autónoma confiables. Apasionado por dar forma al futuro de la movilidad, estoy comprometido a ofrecer tecnologías autónomas que redefinan el transporte.",
                        "Mechanical Engineer": "Como ingeniero mecánico sénior, me destaco por diseñar y optimizar sistemas mecánicos innovadores que impulsan la eficiencia y el rendimiento. Con una sólida base en termodinámica, ciencia de los materiales y técnicas de fabricación avanzadas, he liderado proyectos en distintas industrias y he brindado soluciones de gran impacto. Mi experiencia incluye el desarrollo de prototipos, la realización de análisis rigurosos y la implementación de prácticas de ingeniería sostenibles. Me apasiona superar los límites del diseño y la tecnología y me dedico a crear sistemas mecánicos que afronten los desafíos del mañana.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "Vea esta habilidad en acción al ver mis proyectos realizados.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "Vea qué libros me ayudan en el proceso de aprendizaje de esta habilidad.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "Vea los cursos que me ayudan a desarrollar esta habilidad.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Muhammad Husain Aboutalebi. Todos los derechos reservados.",
                'fontFamily': "'Roboto Condensed', sans-serif",
        },
        'हिंदी': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'यूआई और यूएक्स डिजाइनर',
                'Navbar_Skills_DropDown_Flutter_Developer': 'फ़्लटर डेवलपर',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'पूर्ण स्टैक डेवलपर',
                'Navbar_Skills_DropDown_Android_Developer': 'एंड्रॉइड डेवलपर',
                'Navbar_Skills_DropDown_AI_Developer': 'एआई इंजीनियर',
                'Navbar_Skills_DropDown_Industrial_Designer': 'औद्योगिक डिजाइनर',
                'Navbar_Skills_DropDown_SDA_Engineer': 'स्व-चालित ऑटोमोबाइल इंजीनियर',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'यांत्रिक इंजीनियर',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "मैं एक वरिष्ठ UI/UX डिज़ाइनर हूँ, जिसके पास सहज, उपयोगकर्ता-केंद्रित डिजिटल अनुभव तैयार करने का वर्षों का अनुभव है। मेरी विशेषज्ञता ऐसे सहज डिज़ाइन बनाने में है जो सौंदर्य अपील को कार्यक्षमता के साथ संतुलित करते हैं, जिससे असाधारण उपयोगकर्ता संतुष्टि सुनिश्चित होती है। मैं फिग्मा, एडोब एक्सडी और स्केच जैसे उपकरणों में विशेषज्ञ हूँ, और मैंने विभिन्न उद्योगों में प्रभावशाली प्रोजेक्ट देने के लिए सफलतापूर्वक क्रॉस-फ़ंक्शनल टीमों का नेतृत्व किया है। आइए अपने विचारों को जीवन में लाने और ऐसे डिज़ाइन बनाने के लिए सहयोग करें जो वास्तव में आपके दर्शकों के साथ प्रतिध्वनित हों!",
                        "Flutter Developer": "मैं एक वरिष्ठ फ़्लटर डेवलपर हूँ, जिसके पास उच्च-प्रदर्शन, क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने का वर्षों का अनुभव है। मेरी विशेषज्ञता में नेत्रहीन आश्चर्यजनक, सुविधा संपन्न ऐप बनाना शामिल है जो एंड्रॉइड और आईओएस दोनों प्लेटफ़ॉर्म पर सहज उपयोगकर्ता अनुभव प्रदान करते हैं। API, स्टेट मैनेजमेंट सॉल्यूशंस को एकीकृत करने और ऐप के प्रदर्शन को अनुकूलित करने में कुशल, मैं जटिल विचारों को कार्यात्मक, स्केलेबल समाधानों में बदलने में कामयाब होता हूँ। आइए सुंदर, उत्तरदायी और विश्वसनीय फ़्लटर ऐप के साथ आपके विज़न को जीवंत करने के लिए मिलकर काम करें!",
                        "Full Stack Developer": "मैं एक वरिष्ठ पूर्ण स्टैक डेवलपर हूँ, जिसके पास मज़बूत, स्केलेबल वेब एप्लिकेशन डिज़ाइन करने और बनाने का वर्षों का अनुभव है। फ्रंट-एंड और बैक-एंड डेवलपमेंट दोनों में कुशल, मैं आधुनिक फ्रेमवर्क और तकनीकों का उपयोग करके सहज उपयोगकर्ता इंटरफ़ेस और कुशल सर्वर-साइड आर्किटेक्चर तैयार करने में माहिर हूँ। मेरी विशेषज्ञता डेटाबेस प्रबंधन, API एकीकरण और क्लाउड परिनियोजन में एंड-टू-एंड समाधान देने के लिए फैली हुई है। आइए अपने विचारों को गतिशील, उच्च प्रदर्शन वाले अनुप्रयोगों में बदलने के लिए सहयोग करें जो सफलता को बढ़ावा देते हैं!",
                        "Android Developer": "वर्षों के अनुभव वाले एक वरिष्ठ Android डेवलपर के रूप में, मैं उच्च-प्रदर्शन, उपयोगकर्ता-केंद्रित मोबाइल एप्लिकेशन डिज़ाइन करने और बनाने में माहिर हूँ। कोटलिन, जावा और जेटपैक कंपोज में कुशल, मैं ऐसे स्केलेबल समाधान बनाता हूँ जो सहज उपयोगकर्ता अनुभव प्रदान करते हैं। मेरी विशेषज्ञता API एकीकरण, क्लाउड सेवाओं और प्रदर्शन और सुरक्षा के लिए ऐप अनुकूलन सुनिश्चित करने तक फैली हुई है। नवाचार के लिए समर्पित, मैं विचारों को फीचर-समृद्ध Android एप्लिकेशन में बदलता हूँ जो आज के डिजिटल परिदृश्य में अलग दिखते हैं।",
                        "AI Engineer": "वर्षों के अनुभव वाले एक वरिष्ठ AI इंजीनियर के रूप में, मैं अत्याधुनिक मशीन लर्निंग मॉडल और AI सिस्टम को डिजाइन करने और लागू करने में माहिर हूं। मेरी विशेषज्ञता प्राकृतिक भाषा प्रसंस्करण, कंप्यूटर विज़न और भविष्य कहनेवाला विश्लेषण तक फैली हुई है, जो जटिल समस्याओं के लिए अभिनव समाधान प्रदान करती है। TensorFlow और PyTorch जैसे फ्रेमवर्क में कुशल, मैं बड़े पैमाने पर AI समाधानों की मजबूत तैनाती और अनुकूलन सुनिश्चित करता हूं। प्रौद्योगिकी को आगे बढ़ाने के बारे में भावुक, मैं डेटा को कार्रवाई योग्य अंतर्दृष्टि में बदलता हूं, व्यवसायों और उपयोगकर्ताओं दोनों के लिए प्रभावशाली परिणाम देता हूं।",
                        "Industrial Designer": "वर्षों के अनुभव वाले एक वरिष्ठ औद्योगिक डिजाइनर के रूप में, मैं अभिनव और उपयोगकर्ता-केंद्रित डिज़ाइनों के माध्यम से अवधारणाओं को जीवंत करता हूँ। मेरी विशेषज्ञता सौंदर्यशास्त्र, कार्यक्षमता और स्थिरता को मिलाकर ऐसे उत्पाद बनाने में निहित है जो रूप और उपयोगिता में सबसे अलग हों। उन्नत CAD सॉफ़्टवेयर, प्रोटोटाइपिंग और सामग्री चयन में कुशल, मैं विचारों को बाज़ार-तैयार समाधानों में बदलने में माहिर हूँ। डिज़ाइन के प्रति जुनूनी, मैं ऐसे उत्पाद बनाने का प्रयास करता हूँ जो रचनात्मकता की सीमाओं को आगे बढ़ाते हुए रोज़मर्रा की ज़िंदगी को बेहतर बनाते हैं।",
                        "Self-Driving Automobile Engineer": "एक वरिष्ठ स्व-चालित ऑटोमोबाइल इंजीनियर के रूप में, मैं अत्याधुनिक स्वायत्त वाहन प्रणालियों को विकसित करने में माहिर हूं जो सुरक्षा, दक्षता और नवाचार को प्राथमिकता देते हैं। सेंसर फ्यूजन, कंप्यूटर विज़न और मशीन लर्निंग में गहन विशेषज्ञता के साथ, मैं ऐसे एल्गोरिदम डिज़ाइन और ऑप्टिमाइज़ करता हूँ जो वाहनों को जटिल वातावरण में सहजता से नेविगेट करने में सक्षम बनाते हैं। मेरा अनुभव विश्वसनीय स्व-चालित समाधान बनाने के लिए उन्नत हार्डवेयर को मजबूत सॉफ़्टवेयर आर्किटेक्चर के साथ एकीकृत करने तक फैला हुआ है। गतिशीलता के भविष्य को आकार देने के बारे में भावुक, मैं परिवहन को फिर से परिभाषित करने वाली स्वायत्त तकनीकों को वितरित करने के लिए प्रतिबद्ध हूं।",
                        "Mechanical Engineer": "एक वरिष्ठ मैकेनिकल इंजीनियर के रूप में, मैं उन अभिनव मैकेनिकल सिस्टम को डिजाइन करने और अनुकूलित करने में उत्कृष्टता प्राप्त करता हूं जो दक्षता और प्रदर्शन को बढ़ाते हैं। थर्मोडायनामिक्स, मैटेरियल साइंस और उन्नत विनिर्माण तकनीकों में एक मजबूत आधार के साथ, मैंने उद्योगों में परियोजनाओं का नेतृत्व किया है, और प्रभावशाली समाधान प्रदान किए हैं। मेरी विशेषज्ञता में प्रोटोटाइप विकसित करना, कठोर विश्लेषण करना और संधारणीय इंजीनियरिंग प्रथाओं को लागू करना शामिल है। डिजाइन और प्रौद्योगिकी की सीमाओं को आगे बढ़ाने के लिए जुनूनी, मैं भविष्य की चुनौतियों का सामना करने वाले मैकेनिकल सिस्टम बनाने के लिए समर्पित हूं।",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "मेरे पूर्ण किए गए प्रोजेक्ट्स को देखकर इस कौशल को क्रियान्वित होते हुए देखें।",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "देखें कि कौन सी किताबें मुझे इस कौशल को सीखने में मदद करती हैं।",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "उन पाठ्यक्रमों को देखें जो मुझे यह कौशल विकसित करने में मदद करते हैं।",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 मुहम्मद हुसैन अबुतालेबी। सभी अधिकार सुरक्षित।",
                'fontFamily': "'Roboto Condensed', sans-serif",
        },
        'Português': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'Designer de UI e UX',
                'Navbar_Skills_DropDown_Flutter_Developer': 'Flutter Desenvolvedor',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'Full Stack Developer',
                'Navbar_Skills_DropDown_Android_Developer': 'Desenvolvedor Android',
                'Navbar_Skills_DropDown_AI_Developer': 'Engenheiro de IA',
                'Navbar_Skills_DropDown_Industrial_Designer': 'Desenhador Industrial',
                'Navbar_Skills_DropDown_SDA_Engineer': 'Engenheiro de automóveis por conta própria',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'Engenheiro Mecânico',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "Sou um UI/UX Designer Sénior com anos de experiência na criação de experiências digitais intuitivas e centradas no utilizador. A minha experiência reside na criação de designs perfeitos que equilibram o apelo estético com a funcionalidade, garantindo uma satisfação excecional do utilizador. Sou especializado em ferramentas como Figma, Adobe XD e Sketch, e liderei com sucesso equipas multifuncionais para entregar projetos impactantes em vários setores. Vamos colaborar para dar vida às suas ideias e criar designs que realmente tenham impacto no seu público!",
                        "Flutter Developer": "Sou um Senior Flutter Developer com anos de experiência na construção de aplicações móveis multiplataforma e de alto desempenho. A minha experiência inclui a criação de aplicações visualmente impressionantes e ricas em funcionalidades que proporcionam experiências de utilizador perfeitas nas plataformas Android e iOS. Proficiente na integração de APIs, soluções de gestão de estado e otimização do desempenho das aplicações, tenho sucesso na transformação de ideias complexas em soluções funcionais e escaláveis. Vamos trabalhar juntos para dar vida à sua visão com aplicações Flutter bonitas, responsivas e fiáveis!",
                        "Full Stack Developer": "Sou um Full Stack Developer sénior com anos de experiência na conceção e construção de aplicações web robustas e escaláveis. Hábil no desenvolvimento front-end e back-end, sou especializado na criação de interfaces de utilizador intuitivas e arquiteturas eficientes no lado do servidor, utilizando estruturas e tecnologias modernas. A minha experiência abrange a gestão de bases de dados, integrações de API e implementação na nuvem para fornecer soluções ponta a ponta. Vamos colaborar para transformar as suas ideias em aplicações dinâmicas e de alto desempenho que impulsionam o sucesso!",
                        "Android Developer": "Como Android developer sénior com anos de experiência, especializo-me em projetar e construir aplicações móveis de alto desempenho centradas no utilizador. Proficiente em Kotlin, Java e Jetpack Compose, crio soluções escaláveis ​​que proporcionam experiências de utilizador perfeitas. A minha experiência estende-se a integrações de API, serviços na nuvem e garantia de otimização de aplicações para desempenho e segurança. Dedicado à inovação, transformo ideias em aplicações Android ricas em funcionalidades que se destacam no panorama digital atual.",
                        "AI Engineer": "Como engenheiro sénior de IA com anos de experiência, especializo-me em conceber e implementar modelos de aprendizagem automática e sistemas de IA de última geração. A minha experiência abrange o processamento de linguagem natural, a visão computacional e a análise preditiva, oferecendo soluções inovadoras para problemas complexos. Hábil em frameworks como TensorFlow e PyTorch, garanto uma implementação robusta e otimização de soluções de IA à escala. Apaixonado pelo avanço da tecnologia, transformo dados em insights acionáveis, gerando resultados impactantes para empresas e utilizadores.",
                        "Industrial Designer": "Como Designer Industrial Sénior com anos de experiência, dou vida a conceitos através de designs inovadores e focados no utilizador. A minha experiência reside em combinar estética, funcionalidade e sustentabilidade para criar produtos que se destaquem na forma e utilidade. Hábil em software CAD avançado, prototipagem e seleção de materiais, sou excelente a transformar ideias em soluções prontas para o mercado. Apaixonado pelo design, esforço-me por criar produtos que melhorem a vida quotidiana e, ao mesmo tempo, ultrapassem os limites da criatividade.",
                        "Self-Driving Automobile Engineer": "Como engenheiro sénior de automóveis autónomos, especializo-me no desenvolvimento de sistemas de veículos autónomos de última geração que priorizam a segurança, a eficiência e a inovação. Com um profundo conhecimento em fusão de sensores, visão computacional e aprendizagem automática, projeto e otimizo algoritmos que permitem aos veículos navegar perfeitamente em ambientes complexos. A minha experiência abrange a integração de hardware avançado com arquiteturas de software robustas para criar soluções autónomas fiáveis. Apaixonado por moldar o futuro da mobilidade, estou empenhado em fornecer tecnologias autónomas que redefinam os transportes.",
                        "Mechanical Engineer": "Como Engenheiro Mecânico Sénior, destaquei-me no design e otimização de sistemas mecânicos inovadores que impulsionam a eficiência e o desempenho. Com uma sólida base em termodinâmica, ciência dos materiais e técnicas de fabrico avançadas, liderei projetos em todos os setores, entregando soluções impactantes. A minha experiência inclui o desenvolvimento de protótipos, a realização de análises rigorosas e a implementação de práticas de engenharia sustentáveis. Apaixonado por ultrapassar os limites do design e da tecnologia, dedico-me a criar sistemas mecânicos que vão ao encontro dos desafios do futuro.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "Veja esta competência em ação vendo os meus projetos concluídos.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "Veja que livros me ajudam na jornada de aprendizagem desta competência.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "Veja os cursos que me ajudam a desenvolver esta competência.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 Muhammad Husain Aboutalebi. Todos os direitos reservados.",
                'fontFamily': "'Roboto Condensed', sans-serif",
        },
        'বাংলা': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'UI এবং UX ডিজাইনার',
                'Navbar_Skills_DropDown_Flutter_Developer': 'ফ্লটার ডেভেলপার',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'সম্পূর্ণ স্ট্যাক ডেভেলপার',
                'Navbar_Skills_DropDown_Android_Developer': 'অ্যান্ড্রয়েড ডেভেলপার',
                'Navbar_Skills_DropDown_AI_Developer': 'এআই ইঞ্জিনিয়ার',
                'Navbar_Skills_DropDown_Industrial_Designer': 'ইন্ডাস্ট্রিয়াল ডিজাইনার',
                'Navbar_Skills_DropDown_SDA_Engineer': 'স্ব-ড্রাইভিং অটোমোবাইল ইঞ্জিনিয়ার',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'মেকানিক্যাল ইঞ্জিনিয়ার',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "আমি একজন সিনিয়র UI/UX ডিজাইনার যার বছরের অভিজ্ঞতার সাথে স্বজ্ঞাত, ব্যবহারকারী-কেন্দ্রিক ডিজিটাল অভিজ্ঞতা তৈরি করা। আমার দক্ষতা বিজোড় ডিজাইন তৈরিতে নিহিত যা কার্যকারিতার সাথে নান্দনিক আবেদনের ভারসাম্য বজায় রাখে, ব্যতিক্রমী ব্যবহারকারীর সন্তুষ্টি নিশ্চিত করে। আমি Figma, Adobe XD, এবং Sketch-এর মতো টুলগুলিতে বিশেষজ্ঞ, এবং বিভিন্ন শিল্প জুড়ে কার্যকরী প্রকল্পগুলি সরবরাহ করতে সফলভাবে ক্রস-ফাংশনাল টিমের নেতৃত্ব দিয়েছি। আসুন আপনার ধারনাগুলিকে জীবন্ত করতে এবং এমন ডিজাইন তৈরি করতে সহযোগিতা করি যা সত্যিই আপনার দর্শকদের সাথে অনুরণিত হয়!",
                        "Flutter Developer": "আমি একজন সিনিয়র ফ্লাটার ডেভেলপার যার বছরের পর বছর উচ্চ-পারফরম্যান্স, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরির অভিজ্ঞতা রয়েছে। আমার দক্ষতার মধ্যে রয়েছে দৃশ্যত অত্যাশ্চর্য, বৈশিষ্ট্য-সমৃদ্ধ অ্যাপ তৈরি করা যা অ্যান্ড্রয়েড এবং iOS উভয় প্ল্যাটফর্মেই ব্যবহারকারীদের বিরামহীন অভিজ্ঞতা প্রদান করে। এপিআই, স্টেট ম্যানেজমেন্ট সলিউশন এবং অ্যাপ পারফরম্যান্সকে অপ্টিমাইজ করার ক্ষেত্রে দক্ষ, আমি জটিল ধারণাগুলোকে কার্যকরী, মাপযোগ্য সমাধানে পরিণত করতে পেরেছি। আসুন সুন্দর, প্রতিক্রিয়াশীল এবং নির্ভরযোগ্য ফ্লাটার অ্যাপের মাধ্যমে আপনার দৃষ্টিকে প্রাণবন্ত করতে একসাথে কাজ করি!",
                        "Full Stack Developer": "আমি একজন সিনিয়র ফুল স্ট্যাক ডেভেলপার যার কয়েক বছর ধরে শক্তিশালী, মাপযোগ্য ওয়েব অ্যাপ্লিকেশন ডিজাইন এবং তৈরি করার অভিজ্ঞতা রয়েছে। ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড উভয় বিকাশে দক্ষ, আমি আধুনিক ফ্রেমওয়ার্ক এবং প্রযুক্তি ব্যবহার করে স্বজ্ঞাত ব্যবহারকারী ইন্টারফেস এবং দক্ষ সার্ভার-সাইড আর্কিটেকচার তৈরিতে বিশেষজ্ঞ। আমার দক্ষতা ডাটাবেস ম্যানেজমেন্ট, এপিআই ইন্টিগ্রেশন এবং ক্লাউড ডিপ্লোয়মেন্টকে এন্ড-টু-এন্ড সমাধান প্রদান করে। আসুন আপনার ধারনাগুলিকে গতিশীল, উচ্চ-পারফরমিং অ্যাপ্লিকেশনগুলিতে রূপান্তর করতে সহযোগিতা করি যা সাফল্যকে চালিত করে!",
                        "Android Developer": "বছরের অভিজ্ঞতার সাথে একজন সিনিয়র অ্যান্ড্রয়েড ডেভেলপার হিসেবে, আমি উচ্চ-কার্যকারিতা, ব্যবহারকারী-কেন্দ্রিক মোবাইল অ্যাপ্লিকেশন ডিজাইন এবং নির্মাণে বিশেষজ্ঞ। কোটলিন, জাভা এবং জেটপ্যাক কম্পোজে দক্ষ, আমি পরিমাপযোগ্য সমাধান তৈরি করি যা ব্যবহারকারীর বিরামহীন অভিজ্ঞতা প্রদান করে। আমার দক্ষতা API ইন্টিগ্রেশন, ক্লাউড পরিষেবা এবং কর্মক্ষমতা এবং নিরাপত্তার জন্য অ্যাপ অপ্টিমাইজেশান নিশ্চিত করা পর্যন্ত প্রসারিত। উদ্ভাবনের প্রতি নিবেদিত, আমি ধারণাগুলিকে বৈশিষ্ট্য সমৃদ্ধ অ্যান্ড্রয়েড অ্যাপ্লিকেশনগুলিতে রূপান্তরিত করি যা আজকের ডিজিটাল ল্যান্ডস্কেপে আলাদা।",
                        "AI Engineer": "বছরের অভিজ্ঞতার সাথে একজন সিনিয়র এআই ইঞ্জিনিয়ার হিসাবে, আমি অত্যাধুনিক মেশিন লার্নিং মডেল এবং এআই সিস্টেম ডিজাইন এবং বাস্তবায়নে বিশেষজ্ঞ। আমার দক্ষতা প্রাকৃতিক ভাষা প্রক্রিয়াকরণ, কম্পিউটার দৃষ্টি, এবং ভবিষ্যদ্বাণীমূলক বিশ্লেষণ, জটিল সমস্যার উদ্ভাবনী সমাধান প্রদান করে। TensorFlow এবং PyTorch-এর মতো ফ্রেমওয়ার্কগুলিতে দক্ষ, আমি স্কেলে AI সমাধানগুলির শক্তিশালী স্থাপনা এবং অপ্টিমাইজেশন নিশ্চিত করি। প্রযুক্তির অগ্রগতি সম্পর্কে উত্সাহী, আমি ডেটাকে কার্যযোগ্য অন্তর্দৃষ্টিতে রূপান্তরিত করি, ব্যবসা এবং ব্যবহারকারীদের জন্য একইভাবে প্রভাবশালী ফলাফল চালাই।",
                        "Industrial Designer": "বছরের অভিজ্ঞতা সহ একজন সিনিয়র ইন্ডাস্ট্রিয়াল ডিজাইনার হিসাবে, আমি উদ্ভাবনী এবং ব্যবহারকারী-কেন্দ্রিক ডিজাইনের মাধ্যমে ধারণাগুলিকে প্রাণবন্ত করি। আমার দক্ষতা নান্দনিকতা, কার্যকারিতা এবং স্থায়িত্বের মিশ্রণে নিহিত পণ্যগুলি তৈরি করতে যা ফর্ম এবং উপযোগে আলাদা। উন্নত CAD সফ্টওয়্যার, প্রোটোটাইপিং এবং উপাদান নির্বাচনে দক্ষ, আমি ধারণাগুলিকে বাজার-প্রস্তুত সমাধানগুলিতে রূপান্তর করতে পারদর্শী। ডিজাইন সম্পর্কে উত্সাহী, আমি সৃজনশীলতার সীমানা ঠেলে দৈনন্দিন জীবনকে উন্নত করে এমন পণ্য তৈরি করার চেষ্টা করি।",
                        "Self-Driving Automobile Engineer": "একজন সিনিয়র সেলফ-ড্রাইভিং অটোমোবাইল ইঞ্জিনিয়ার হিসাবে, আমি অত্যাধুনিক স্বায়ত্তশাসিত যানবাহন সিস্টেমগুলি বিকাশে বিশেষজ্ঞ যা নিরাপত্তা, দক্ষতা এবং উদ্ভাবনকে অগ্রাধিকার দেয়। সেন্সর ফিউশন, কম্পিউটার ভিশন এবং মেশিন লার্নিং-এ গভীর দক্ষতার সাথে, আমি অ্যালগরিদম ডিজাইন এবং অপ্টিমাইজ করি যা যানবাহনকে জটিল পরিবেশে নির্বিঘ্নে নেভিগেট করতে সক্ষম করে। আমার অভিজ্ঞতা নির্ভরযোগ্য স্ব-ড্রাইভিং সমাধান তৈরি করতে শক্তিশালী সফ্টওয়্যার আর্কিটেকচারের সাথে উন্নত হার্ডওয়্যারকে একীভূত করার জন্য বিস্তৃত। গতিশীলতার ভবিষ্যত গঠনের বিষয়ে উত্সাহী, আমি স্বায়ত্তশাসিত প্রযুক্তি সরবরাহ করতে প্রতিশ্রুতিবদ্ধ যা পরিবহনকে পুনরায় সংজ্ঞায়িত করে।",
                        "Mechanical Engineer": "একজন সিনিয়র মেকানিক্যাল ইঞ্জিনিয়ার হিসাবে, আমি দক্ষতা এবং কর্মক্ষমতা চালনাকারী উদ্ভাবনী যান্ত্রিক সিস্টেম ডিজাইন এবং অপ্টিমাইজ করতে পারদর্শী। তাপগতিবিদ্যা, পদার্থ বিজ্ঞান এবং উন্নত উত্পাদন কৌশলগুলির একটি শক্তিশালী ভিত্তির সাথে, আমি সমস্ত শিল্প জুড়ে প্রকল্পগুলির নেতৃত্ব দিয়েছি, কার্যকর সমাধান প্রদান করেছি। আমার দক্ষতার মধ্যে রয়েছে প্রোটোটাইপ তৈরি করা, কঠোর বিশ্লেষণ করা এবং টেকসই ইঞ্জিনিয়ারিং অনুশীলনগুলি বাস্তবায়ন করা। ডিজাইন এবং প্রযুক্তির সীমানা ঠেলে দেওয়ার বিষয়ে উত্সাহী, আমি এমন যান্ত্রিক সিস্টেম তৈরি করতে নিবেদিত যা আগামীকালের চ্যালেঞ্জগুলি পূরণ করে।",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "আমার সম্পন্ন প্রকল্প দেখে কর্ম এই দক্ষতা দেখুন.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "এই দক্ষতা শেখার যাত্রায় কোন বই আমাকে সাহায্য করে দেখুন।",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "এই দক্ষতা তৈরি করতে আমাকে সাহায্য করে এমন কোর্সগুলি দেখুন।",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 মুহাম্মদ হুসাইন আবুতালেবী। সর্বস্বত্ব সংরক্ষিত",
                'fontFamily': "'Noto Serif Bengali', serif",
        },
        'عَرَبِيّ': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'مصمم واجهة المستخدم وتجربة المستخدم',
                'Navbar_Skills_DropDown_Flutter_Developer': 'مطور فلاتر',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'مطور كامل الحزمة',
                'Navbar_Skills_DropDown_Android_Developer': 'مطور أندرويد',
                'Navbar_Skills_DropDown_AI_Developer': 'مهندس الذكاء الاصطناعي',
                'Navbar_Skills_DropDown_Industrial_Designer': 'مصمم صناعي',
                'Navbar_Skills_DropDown_SDA_Engineer': 'مهندس سيارات ذاتية القيادة',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'مهندس ميكانيكي',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "أنا مصمم واجهة مستخدم/تجربة مستخدم كبير ولدي سنوات من الخبرة في تصميم تجارب رقمية بديهية تركز على المستخدم. تكمن خبرتي في إنشاء تصميمات سلسة توازن بين الجاذبية الجمالية والوظائف، مما يضمن رضا المستخدم الاستثنائي. أنا متخصص في أدوات مثل Figma وAdobe XD وSketch، وقد قمت بنجاح بقيادة فرق متعددة الوظائف لتقديم مشاريع مؤثرة عبر مختلف الصناعات. دعنا نتعاون لإضفاء الحيوية على أفكارك وإنشاء تصميمات تلقى صدى حقيقيًا لدى جمهورك!",
                        "Flutter Developer": "أنا مطور Flutter كبير ولدي سنوات من الخبرة في بناء تطبيقات جوال عالية الأداء ومتعددة الأنظمة. تشمل خبرتي إنشاء تطبيقات مذهلة بصريًا وغنية بالميزات توفر تجارب مستخدم سلسة على كل من أنظمة Android وiOS. أتقن دمج واجهات برمجة التطبيقات وحلول إدارة الحالة وتحسين أداء التطبيق، وأزدهر في تحويل الأفكار المعقدة إلى حلول وظيفية وقابلة للتطوير. دعنا نعمل معًا لإضفاء الحياة على رؤيتك من خلال تطبيقات Flutter الجميلة والمتجاوبة والموثوقة!",
                        "Full Stack Developer": "أنا مطور كبير في مجال البرمجيات الكاملة ولدي سنوات من الخبرة في تصميم وبناء تطبيقات ويب قوية وقابلة للتطوير. أتمتع بخبرة في تطوير الواجهة الأمامية والخلفية، وأتخصص في صياغة واجهات مستخدم بديهية وهندسة فعّالة على جانب الخادم باستخدام الأطر والتقنيات الحديثة. وتمتد خبرتي إلى إدارة قواعد البيانات وتكاملات واجهة برمجة التطبيقات والنشر السحابي لتقديم حلول شاملة. دعنا نتعاون لتحويل أفكارك إلى تطبيقات ديناميكية عالية الأداء تحقق النجاح!",
                        "Android Developer": "بصفتي مطورًا أول لنظام Android يتمتع بخبرة لسنوات، فأنا متخصص في تصميم وبناء تطبيقات جوال عالية الأداء تركز على المستخدم. وبكفاءتي في Kotlin وJava وJetpack Compose، أقوم بإنشاء حلول قابلة للتطوير توفر تجارب مستخدم سلسة. وتمتد خبرتي إلى تكاملات واجهة برمجة التطبيقات والخدمات السحابية وضمان تحسين التطبيقات للأداء والأمان. وأنا مكرس للإبداع، وأحول الأفكار إلى تطبيقات Android غنية بالميزات تبرز في المشهد الرقمي اليوم.",
                        "AI Engineer": "بصفتي مهندس ذكاء اصطناعي كبير يتمتع بخبرة تمتد لسنوات، فأنا متخصص في تصميم وتنفيذ نماذج التعلم الآلي وأنظمة الذكاء الاصطناعي المتطورة. وتمتد خبرتي إلى معالجة اللغة الطبيعية والرؤية الحاسوبية والتحليلات التنبؤية، وتقديم حلول مبتكرة للمشاكل المعقدة. وباعتباري ماهرًا في أطر عمل مثل TensorFlow وPyTorch، فأنا أضمن النشر القوي وتحسين حلول الذكاء الاصطناعي على نطاق واسع. وباعتباري شغوفًا بتطوير التكنولوجيا، فأنا أقوم بتحويل البيانات إلى رؤى قابلة للتنفيذ، مما يؤدي إلى نتائج مؤثرة للشركات والمستخدمين على حد سواء.",
                        "Industrial Designer": "بصفتي مصممًا صناعيًا كبيرًا يتمتع بخبرة لسنوات، فإنني أجسد المفاهيم من خلال تصميمات مبتكرة تركز على المستخدم. تكمن خبرتي في المزج بين الجماليات والوظائف والاستدامة لإنشاء منتجات تتميز بالشكل والفائدة. بخبرتي في برامج التصميم بمساعدة الكمبيوتر المتقدمة والنماذج الأولية واختيار المواد، أتفوق في تحويل الأفكار إلى حلول جاهزة للسوق. بشغفي بالتصميم، أسعى جاهدًا لصياغة منتجات تعزز الحياة اليومية مع دفع حدود الإبداع.",
                        "Self-Driving Automobile Engineer": "بصفتي مهندسًا أول للسيارات ذاتية القيادة، فأنا متخصص في تطوير أنظمة المركبات ذاتية القيادة المتطورة التي تعطي الأولوية للسلامة والكفاءة والابتكار. وبفضل خبرتي العميقة في دمج أجهزة الاستشعار والرؤية الحاسوبية والتعلم الآلي، أقوم بتصميم وتحسين الخوارزميات التي تمكن المركبات من التنقل في بيئات معقدة بسلاسة. وتمتد خبرتي إلى دمج الأجهزة المتقدمة مع هياكل البرامج القوية لإنشاء حلول موثوقة للقيادة الذاتية. وباعتباري شغوفًا بتشكيل مستقبل التنقل، فأنا ملتزم بتقديم تقنيات القيادة الذاتية التي تعيد تعريف النقل.",
                        "Mechanical Engineer": "بصفتي مهندسًا ميكانيكيًا كبيرًا، أتفوق في تصميم وتحسين الأنظمة الميكانيكية المبتكرة التي تعمل على تعزيز الكفاءة والأداء. وبفضل الأساس القوي في الديناميكا الحرارية وعلوم المواد وتقنيات التصنيع المتقدمة، قمت بقيادة مشاريع عبر الصناعات المختلفة، وتقديم حلول مؤثرة. تشمل خبرتي تطوير النماذج الأولية وإجراء تحليلات دقيقة وتنفيذ ممارسات الهندسة المستدامة. بشغفي بتجاوز حدود التصميم والتكنولوجيا، فأنا مكرس لإنشاء أنظمة ميكانيكية تلبي تحديات الغد.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "شاهد هذه المهارة في العمل من خلال رؤية مشاريعي المنجزة.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "انظر ما هي الكتب التي تساعدني في رحلة تعلم هذه المهارة.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "انظر الدورات التي تساعدني على بناء هذه المهارة.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 محمد حسين أبو طالبي. جميع الحقوق محفوظة.",
                'fontFamily': "Amiri, serif",
        },
        'فارسی': {
                'Navbar_Skills_DropDown_UIUX_Designer': 'طراح رابط و تجربه کاربری',
                'Navbar_Skills_DropDown_Flutter_Developer': 'توسعه دهنده فلاتر',
                'Navbar_Skills_DropDown_Full_Stack_Developer': 'توسعه دهنده فول استک',
                'Navbar_Skills_DropDown_Android_Developer': 'توسعه دهنده اندروید',
                'Navbar_Skills_DropDown_AI_Developer': 'مهندس هوش مصنوعی',
                'Navbar_Skills_DropDown_Industrial_Designer': 'طراح صنعتی',
                'Navbar_Skills_DropDown_SDA_Engineer': 'مهندس خودروی خودران',
                'Navbar_Skills_DropDown_Mechanical_Engineer': 'مهندس مکانیک',
                'Landing_Page_Skill_Description': {
                        "UI & UX Designer": "من یک طراح ارشد UI/UX با سالها تجربه در ایجاد تجربیات دیجیتالی بصری و کاربر محور هستم. تخصص من در ایجاد طرح های بدون درز است که جذابیت زیبایی شناختی را با عملکرد متعادل می کند و رضایت استثنایی کاربر را تضمین می کند. من در ابزارهایی مانند Figma، Adobe XD و Sketch تخصص دارم و با موفقیت تیم های چندکاره ای را برای ارائه پروژه های تاثیرگذار در صنایع مختلف هدایت کرده ام. بیایید برای زنده کردن ایده های شما و ایجاد طرح هایی که واقعاً با مخاطبان شما طنین انداز شود، همکاری کنیم!",
                        "Flutter Developer": "من یک توسعه دهنده ارشد Flutter با سال ها تجربه در ساخت اپلیکیشن های موبایلی با کارایی بالا و چند پلتفرمی هستم. تخصص من شامل ایجاد برنامه‌های بصری خیره‌کننده و با ویژگی‌های غنی است که تجربیات کاربر را در هر دو پلتفرم اندروید و iOS ارائه می‌کند. من در یکپارچه سازی API ها، راه حل های مدیریت وضعیت و بهینه سازی عملکرد برنامه مهارت دارم، در تبدیل ایده های پیچیده به راه حل های کاربردی و مقیاس پذیر پیشرفت می کنم. بیایید با هم کار کنیم تا با برنامه های Flutter زیبا، پاسخگو و قابل اعتماد، دید شما را زنده کنیم!",
                        "Full Stack Developer": "من یک توسعه دهنده ارشد Full Stack با سال ها تجربه در طراحی و ساخت برنامه های وب قوی و مقیاس پذیر هستم. من با مهارت در توسعه front-end و back-end، در ایجاد رابط های کاربری بصری و معماری های کارآمد سمت سرور با استفاده از چارچوب ها و فناوری های مدرن تخصص دارم. تخصص من شامل مدیریت پایگاه داده، ادغام های API و استقرار ابری برای ارائه راه حل های سرتاسری است. بیایید برای تبدیل ایده های شما به برنامه های کاربردی پویا و با کارایی بالا که باعث موفقیت می شوند، همکاری کنیم!",
                        "Android Developer": "من به عنوان یک برنامه نویس ارشد اندروید با سال ها تجربه، در طراحی و ساخت اپلیکیشن های موبایل با کارایی بالا و کاربر محور تخصص دارم. مسلط به Kotlin، Java و Jetpack Compose، راه حل های مقیاس پذیری ایجاد می کنم که تجربیات یکپارچه کاربر را ارائه می دهد. تخصص من به ادغام های API، خدمات ابری و اطمینان از بهینه سازی برنامه برای عملکرد و امنیت گسترش می یابد. من که به نوآوری اختصاص دارد، ایده‌ها را به برنامه‌های اندرویدی غنی از ویژگی تبدیل می‌کنم که در چشم‌انداز دیجیتال امروزی برجسته هستند.",
                        "AI Engineer": "من به عنوان یک مهندس ارشد هوش مصنوعی با سال ها تجربه، در طراحی و پیاده سازی مدل های پیشرفته یادگیری ماشین و سیستم های هوش مصنوعی تخصص دارم. تخصص من شامل پردازش زبان طبیعی، بینایی کامپیوتری، و تجزیه و تحلیل پیش بینی، ارائه راه حل های نوآورانه برای مشکلات پیچیده است. من که در چارچوب هایی مانند TensorFlow و PyTorch مهارت دارم، از استقرار قوی و بهینه سازی راه حل های هوش مصنوعی در مقیاس اطمینان دارم. من که علاقه زیادی به پیشرفت فناوری دارم، داده‌ها را به بینش‌های عملی تبدیل می‌کنم و نتایج تاثیرگذاری را برای کسب‌وکارها و کاربران به طور یکسان به ارمغان می‌آورم.",
                        "Industrial Designer": "من به عنوان یک طراح ارشد صنعتی با سال ها تجربه، مفاهیم را از طریق طرح های نوآورانه و متمرکز بر کاربر زنده می کنم. تخصص من در ترکیب زیبایی شناسی، عملکرد و پایداری برای ایجاد محصولاتی است که از نظر شکل و کاربرد برجسته باشند. من که در نرم افزار پیشرفته CAD، نمونه سازی و انتخاب مواد مهارت دارم، در تبدیل ایده ها به راه حل های آماده بازار مهارت دارم. من که علاقه زیادی به طراحی دارم، تلاش می‌کنم محصولاتی تولید کنم که زندگی روزمره را بهبود بخشد و در عین حال مرزهای خلاقیت را پیش ببرد.",
                        "Self-Driving Automobile Engineer": "من به عنوان یک مهندس ارشد خودروی خودران، در توسعه سیستم های خودروی خودمختار پیشرفته که ایمنی، کارایی و نوآوری را در اولویت قرار می دهند، تخصص دارم. با تخصص عمیق در ترکیب حسگرها، بینایی کامپیوتر، و یادگیری ماشین، الگوریتم‌هایی را طراحی و بهینه‌سازی می‌کنم که وسایل نقلیه را قادر می‌سازد تا در محیط‌های پیچیده به طور یکپارچه حرکت کنند. تجربه من شامل ادغام سخت افزار پیشرفته با معماری های نرم افزاری قوی برای ایجاد راه حل های خودران قابل اعتماد است. مشتاق شکل دادن به آینده تحرک، من متعهد به ارائه فناوری های خودمختار هستم که حمل و نقل را دوباره تعریف می کند.",
                        "Mechanical Engineer": "من به عنوان یک مهندس مکانیک ارشد، در طراحی و بهینه سازی سیستم های مکانیکی نوآورانه که کارایی و عملکرد را افزایش می دهند، سرآمد هستم. با پایه ای قوی در ترمودینامیک، علم مواد و تکنیک های ساخت پیشرفته، پروژه هایی را در سراسر صنایع رهبری کرده ام و راه حل های تاثیرگذاری ارائه می کنم. تخصص من شامل توسعه نمونه های اولیه، انجام تجزیه و تحلیل دقیق، و اجرای شیوه های مهندسی پایدار است. من که مشتاق به پیش بردن مرزهای طراحی و فناوری هستم، وقف ایجاد سیستم های مکانیکی هستم که چالش های آینده را برآورده می کند.",
                },
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description': "با دیدن پروژه های انجام شده من، این مهارت را در عمل ببینید.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description': "ببینید کدام کتاب به من در یادگیری این مهارت کمک کرده است.",
                'MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description': "دوره هایی را ببینید که به من در ایجاد این مهارت کمک می کنند.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 محمد حسین ابوطالبی. تمامی حقوق محفوظ است.",
                'fontFamily': "'B Nazanin'",
        },
};

// -- >> Needed Properties : Skill and Language
var neededPropertiesNavbarTranslation = {

        // -- >> Selected or Loaded Language
        _current_selected_language: '',

        // -- >> Language Getter (For Getting Current Language)
        get currentSelectedLanguage() {

                // -- >> Return current selected language        
                return this._current_selected_language;

        },

        // -- >> Language Setter (For Set or Assigning Language)
        set currentSelectedLanguage(newLanguage) {

                // -- >> Translate Contents on language change
                this.call_translate_Navbar_Caller(newLanguage, neededPropertiesNavbarTranslation._current_selected_skill);

                // -- >> Assign new language to the current language
                return this._current_selected_language = newLanguage;

        },

        // -- >> Selected or Loaded Skill
        _current_selected_skill: '',

        // -- >> Skill Getter (For Getting Current Skill)
        get currentSelectedSkill() {

                // -- >> Return current selected skill        
                return this._current_selected_skill;

        },

        // -- >> Skill Setter (For Set or Assigning Skill)
        set currentSelectedSkill(newSkill) {

                // -- >> Translate Contents on skill change
                this.call_translate_Navbar_Caller(neededPropertiesNavbarTranslation._current_selected_language, newSkill);

                // -- >> Assign new skill to the current skill
                return this._current_selected_skill = newSkill;
        },

        // -- >> Translate Caller
        call_translate_Navbar_Caller(language = "", skill = "") {

                // -- >> Call translate function
                this.translate(language, skill);

        },

        // -- >> Translations
        translate(language = "English", Skill = "") {

                /*
                        This function will be used for translating page contents.
                */

                // -------------------- ↓ Translation Content ↓ -------------------- //

                // -- >> Navbar > Home Button
                document.getElementById("MuhammadHusainAbootalebi-Navbar_Home_Link").textContent = heading_Fonts_Translations[language]["Navbar_Home_Link"];
                document.getElementById("MuhammadHusainAbootalebi-Navbar_Home_Link").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                // -- >> Navbar > Skills DropDown Link
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_Link").textContent = heading_Fonts_Translations[language]["Navbar_Skills_DropDown_Link"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_Link").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                
                // -- >> Navbar > Skills Drop Dwon > Skills
                /// --- >>> UI and UX Designer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_UIUXDESIGNER").textContent = body_Fonts_Translations[language]["Navbar_Skills_DropDown_UIUX_Designer"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_UIUXDESIGNER").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                /// --- >>> Flutter Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FLUTTER_DEVELOPER").textContent = body_Fonts_Translations[language]["Navbar_Skills_DropDown_Flutter_Developer"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FLUTTER_DEVELOPER").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                /// --- >>> Full Stack Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FULL_STACK_DEVELOPER").textContent = body_Fonts_Translations[language]["Navbar_Skills_DropDown_Full_Stack_Developer"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FULL_STACK_DEVELOPER").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                /// --- >>> Android Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_ANDROID_DEVELOPER").textContent = body_Fonts_Translations[language]["Navbar_Skills_DropDown_Android_Developer"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_ANDROID_DEVELOPER").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                /// --- >>> AI Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_AI_ENGINEER").textContent = body_Fonts_Translations[language]["Navbar_Skills_DropDown_AI_Developer"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_AI_ENGINEER").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                /// --- >>> Industrial Designer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_INDUSTRIAL_DESIGNER").textContent = body_Fonts_Translations[language]["Navbar_Skills_DropDown_Industrial_Designer"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_INDUSTRIAL_DESIGNER").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                /// --- >>> Self-Driving Automobile Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_SELF_DRIVING_ENGINEER").textContent = body_Fonts_Translations[language]["Navbar_Skills_DropDown_SDA_Engineer"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_SELF_DRIVING_ENGINEER").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                /// --- >>> Mechanical Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_MECHANICAL_ENGINEER").textContent = body_Fonts_Translations[language]["Navbar_Skills_DropDown_Mechanical_Engineer"];
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_MECHANICAL_ENGINEER").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];

                /// --- >>> Skill Drop Down Links

                //// ----- >>>> UI and UX Designer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_UIUXDESIGNER").href = "Skill Silo [ Details ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_UIUXDESIGNER").dataset.info) + "&language=" + encodeURI(language);
                //// ----- >>>> Flutter Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FLUTTER_DEVELOPER").href = "Skill Silo [ Details ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FLUTTER_DEVELOPER").dataset.info) + "&language=" + encodeURI(language);
                //// ----- >>>> Full Stack Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FULL_STACK_DEVELOPER").href = "Skill Silo [ Details ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FULL_STACK_DEVELOPER").dataset.info) + "&language=" + encodeURI(language);
                //// ----- >>>> Android Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_ANDROID_DEVELOPER").href = "Skill Silo [ Details ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_ANDROID_DEVELOPER").dataset.info) + "&language=" + encodeURI(language);
                //// ----- >>>> AI Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_AI_ENGINEER").href = "Skill Silo [ Details ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_AI_ENGINEER").dataset.info) + "&language=" + encodeURI(language);
                //// ----- >>>> Industrial Designer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_INDUSTRIAL_DESIGNER").href = "Skill Silo [ Details ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_INDUSTRIAL_DESIGNER").dataset.info) + "&language=" + encodeURI(language);
                //// ----- >>>> SDA Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_SELF_DRIVING_ENGINEER").href = "Skill Silo [ Details ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_SELF_DRIVING_ENGINEER").dataset.info) + "&language=" + encodeURI(language);
                //// ----- >>>> Mechanical Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_MECHANICAL_ENGINEER").href = "Skill Silo [ Details ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_MECHANICAL_ENGINEER").dataset.info) + "&language=" + encodeURI(language);

                /// --- >>> Selected Skill Indicator
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_Link").textContent = heading_Fonts_Translations[language][Skill];

                /// --- >>> Selected Language Indicator
                document.getElementById("MuhammadHusainAbootalebi-Navbar-selected-language_link_indicator").textContent = language;
                document.getElementById("MuhammadHusainAbootalebi-Navbar-selected-language_link_indicator").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                // -- >> Download My Resume Button
                document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").textContent = heading_Fonts_Translations[language]["Download_My_Resume"];
                document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                cv_link_setter(language, Skill); /// --- >>> Set the appropriate link to the download CV
                
                // -- >> Navbar > Contact Me Button
                document.getElementById("MuhammadHusainAbootalebi-Navbar_Contact_Me").textContent = heading_Fonts_Translations[language]["Navbar_MY_Contact_Information"];
                document.getElementById("MuhammadHusainAbootalebi-Navbar_Contact_Me").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                // -- >> Landing Page
                
                /// --- >>> Skill Name
                document.getElementById("MuhammadHusainAbootalebi-Skills-Silo-Page-Landing-Page_Skill_Name").textContent = heading_Fonts_Translations[language][Skill];
                document.getElementById("MuhammadHusainAbootalebi-Skills-Silo-Page-Landing-Page_Skill_Name").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Skills-Silo-Page-Landing-Page_Skill_Name").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Skills-Silo-Page-Landing-Page_Skill_Name").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Skills-Silo-Page-Landing-Page_Skill_Name").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Skills-Silo-Page-Landing-Page_Skill_Name").dir = "ltr";
                }

                /// --- >>> Skill Short Description
                document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Landing-Page_Skill_Description").textContent = body_Fonts_Translations[language]["Landing_Page_Skill_Description"][Skill];
                document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Landing-Page_Skill_Description").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Landing-Page_Skill_Description").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Landing-Page_Skill_Description").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Landing-Page_Skill_Description").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Landing-Page_Skill_Description").dir = "ltr";
                }

                /// --- >>> Projects Button
                document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Page_Projects_Button").textContent = heading_Fonts_Translations[language]["Landing_Page_Buttons_My_Done_Projects"];
                document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Page_Projects_Button").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                /// --- >>> Software Skills Button
                document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Page_Software_Skills_Button").textContent = heading_Fonts_Translations[language]["Landing_Page_Buttons_Software_Skills_Button_Text"];
                document.getElementById("MuhammadHusainAbootalebi-Skill-Silo-Page_Software_Skills_Button").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                // -- >> Projects | Courses | Books

                /// --- >>> Done Projects Title
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Title").textContent = heading_Fonts_Translations[language]["Projects_Courses_Books_Done_Projects_Title"];
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Title").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Title").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Title").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Title").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Title").dir = "ltr";
                }
                /// --- >>> Done Projects Descripiton
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description").textContent = body_Fonts_Translations[language]["MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description"];
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description").dir = "ltr";
                }

                /// --- >>> Books Title
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Title").textContent = heading_Fonts_Translations[language]["Projects_Courses_Books_Reed_Books_Title"];
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Title").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Title").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Title").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Title").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Title").dir = "ltr";
                }
                /// --- >>> Books Descripiton
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description").textContent = body_Fonts_Translations[language]["MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description"];
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description").dir = "ltr";
                }

                /// --- >>> Passed Courses Title
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Title").textContent = heading_Fonts_Translations[language]["Projects_Courses_Books_Passed_Courses_Title"];
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Title").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Title").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Title").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Title").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Title").dir = "ltr";
                }
                /// --- >>> Passed Courses Descripiton
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description").textContent = body_Fonts_Translations[language]["MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description"];
                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description").dir = "ltr";
                }

                /// --- >>> See More Button
                document.querySelectorAll(".MuhammadHusainAbootalebi-Projects-Courses-Books_See_MORE_Button").forEach(
                        (item, index) => {
                                item.textContent = heading_Fonts_Translations[language]["Projects_Courses_Books_Done_Projects_Button"];
                                item.style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                                /// --- >>> Links to the Projects | Books | Courses Details
                                item.href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(neededPropertiesNavbarTranslation._current_selected_skill) + "&language=" + encodeURIComponent(neededPropertiesNavbarTranslation._current_selected_language) + "&section=" + item.dataset.info;
                        }
                );

                // -- >> Contact Section

                /// --- >>> Let's Talk
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Lets_Talk").textContent = heading_Fonts_Translations[language]["Contact_Section_Lets_Talk"];
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Lets_Talk").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Lets_Talk").style.color = "rgb(255,255,255)";
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Lets_Talk").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Lets_Talk").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Lets_Talk").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Lets_Talk").dir = "ltr";
                }

                /// --- >>> Email Button
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Email-Button").innerHTML = heading_Fonts_Translations[language]["Contact_Section_Email_Button"];
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Email-Button").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                /// --- >>> Telegram Button
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Telegram-Button").innerHTML = heading_Fonts_Translations[language]["Contact_Section_Telegram_Button"];
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-Telegram-Button").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                /// --- >>> All Rights Are Reserved By Muhammad Husain Abootalebi
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-All-Rights-Are-Reserved").textContent = body_Fonts_Translations[language]["Contact_Me_All_Rights_Are_Reserved"];
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-All-Rights-Are-Reserved").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                document.getElementById("MuhammadHusainAbootalebi-Contact-Me-All-Rights-Are-Reserved").style.color = "rgba(255,255,255,0.5)";
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-Contact-Me-All-Rights-Are-Reserved").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-Contact-Me-All-Rights-Are-Reserved").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-Contact-Me-All-Rights-Are-Reserved").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-Contact-Me-All-Rights-Are-Reserved").dir = "ltr";
                }

                // -------------------- ↑ Translation Content ↑ -------------------- //
                
                
                // -------------------- ↓ Styling ↓ -------------------- //
                
                // -- >> Styling the current selected drop down
                styling_current_selected_drop_down("MuhammadHusainAbootalebi-Navbar_Language_DropDown_Menu", language);
                
                // -------------------- ↑ Styling ↑ -------------------- //
        },
};

// -------------------------------- ↑ Variables ↑ -------------------------------- //


// --------------------- ↓ Initialization [On Load Page] ↓ ------------------------ //

// -- >> Try to get the passed skill argument
var passed_skill = get_URL_Parameters('skill');

// -- >> Try to get the passed language
var passed_language = get_URL_Parameters('language');

// -- >> Check for gotten skill and language parameters
if ((!passed_skill) && (!passed_language)) {

        /// --- >>> Both skill and language are EMPTY or NULL

        /// --- >>> If not any language set, user system language
        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

        /// --- >>> Set the language of docuemnt based on system language
        switch (systemLanguage) {
                // English
                case ('en-US') || ('en') || ('en-GB'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'English';
                        break;
                // German
                case ('de') || ('de-DE'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'Deutsch';
                        break;
                // Chinese
                case ('zh') || ('zh-CN') || ('zh-TW'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = '中国人';
                        break;
                // Russian
                case ('ru') || ('ru-RU'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'Русский';
                        break;
                // French
                case ('fr') || ('fr-FR') || ('fr-CA'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'Français';
                        break;
                // Japanese
                case ('ja') || ('ja-JP'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = '日本語';
                        break;
                // Korean
                case ('ko') || ('ko-KR'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = '한국인';
                        break;
                // Español
                case ('es') || ('es-ES') || ('es-MX'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'Español';
                        break;
                // Hindi
                case ('hi') || ('hi-IN'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'हिंदी';
                        break;
                // Portuguese
                case ('pt') || ('pt-PT') || ('pt-BR'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'Português';
                        break;
                // Bangali
                case ('bn') || ('bn-BD') || ('bn-IN'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'বাংলা';
                        break;
                // Arabic
                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'عَرَبِيّ';
                        break;
                // Persian
                case ('fa') || ('fa-IR'):
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = 'فارسی';
                        break;
                // Default is English
                default:
                        neededPropertiesNavbarTranslation.currentSelectedLanguage('English');
                        break;
        }

        // -- >> Call Translate
        neededPropertiesNavbarTranslation.call_translate_Navbar_Caller(
                neededPropertiesNavbarTranslation.currentSelectedLanguage,
                neededPropertiesNavbarTranslation.currentSelectedSkill,
        );
}
// -- >> In case the skill and language are passed
else {
        /// --- >>> Whether the skill or language are PASSED

        /// --- >>> Set the passed skill and language
        neededPropertiesNavbarTranslation.currentSelectedLanguage = passed_language;
        neededPropertiesNavbarTranslation.currentSelectedSkill = passed_skill;

        /// --- >>> Call Translate
        neededPropertiesNavbarTranslation.call_translate_Navbar_Caller(
                neededPropertiesNavbarTranslation.currentSelectedLanguage,
                neededPropertiesNavbarTranslation.currentSelectedSkill,
        );
}

//-- >> DOM Contents Loading to be in the language of the browser
document.addEventListener("DOMContentLoaded", function () {

        /// --- >>> Get the dropdown toggle button by its ID
        var dropdownToggle = document.getElementById('MuhammadHusainAbootalebi-Language-DropDown_Link');

        /// --- >>> Get the dropdown menu container
        var dropdownMenu = dropdownToggle.nextElementSibling;

        /// --- >>> Get all the dropdown items within the dropdown menu
        var dropdownItems = dropdownMenu.getElementsByClassName('dropdown-item');

        /// --- >>> Convert HTMLCollection to an array to use forEach
        Array.from(dropdownItems).forEach(function (item) {
                
                //// ---- >>>> Add click event listener to each dropdown item
                item.addEventListener('click', function (event) {
                        
                        ///// ----- >>>>> Prevent the default anchor click behavior
                        event.preventDefault();

                        ///// ----- >>>>> Close the dropdown menu by removing 'show' class from the 'dropdown-menu' and 'dropdown'
                        var dropdownElement = this.closest('.dropdown');
                        
                        ///// ----- >>>>> Check whether the dropdown element is not emtpy
                        if (dropdownElement) {

                                ////// ------ >>>>>> Till this part ...
                                var dropdownMenu = dropdownElement.querySelector('.dropdown-menu');
                                
                                if (dropdownMenu.classList.contains('show')) {
                                        dropdownMenu.classList.remove('show');
                                        dropdownElement.classList.remove('show');
                                }
                        }

                        // Update the dropdown toggle button text with the clicked item's text
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-selected-language_link_indicator").textContent = this.textContent;
                        dropdownToggle.style.fontFamily = heading_Fonts_Translations[this.textContent]['fontFamily'];
                        neededPropertiesNavbarTranslation.currentSelectedLanguage = this.textContent;
                        /// --- >>> Call Translate
                        neededPropertiesNavbarTranslation.call_translate_Navbar_Caller(
                                this.textContent,
                                neededPropertiesNavbarTranslation.currentSelectedSkill,
                        );
                });
        });
});

// --------------------- ↑ Initialization [On Load Page] ↑ ------------------------ //


// -------------------------------- ↓ Functions ↓ -------------------------------- //

// -- >> URL Passed Parameter Getter
function get_URL_Parameters(param) {

        /*
                This function will search the url of this page and find passed `param` in that to find the passed parameters from url.
        */

        /// --- >>> Create this page URL
        var searchParams = new URLSearchParams(window.location.search);

        /// --- >>> Find passed parameter in this URL 
        return searchParams.get(param);
}

// -- >> Styling Current Selected drop down value
function styling_current_selected_drop_down(dropDownNameID, toCompareArugument) {
    var dropdownItems = document.querySelectorAll('#' + dropDownNameID + ' .dropdown-item');

    dropdownItems.forEach(function (item) {
        if (item.textContent == toCompareArugument) {
            item.style = "font-family: Roboto, sans-serif;font-size: 80%;font-weight: bold;color: rgb(252,163,17);";
        } else {
            item.style = "font-family: Roboto, sans-serif;font-size: 80%;";
        }
    });
}

// -------------------------------- ↑ Functions ↑ -------------------------------- //

// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©© All Rights are Reserved by Muhammad Husain Abootalebi ©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //