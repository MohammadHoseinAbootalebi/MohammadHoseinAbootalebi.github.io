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
var dont_make_me_think = {
    "TableOfContents": [
        // 1
        {
            "ChapterName": "Don't make me think!",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter emphasizes the criticality of intuitive web design, advocating for self-evident and self-explanatory pages to minimize cognitive strain. It underscores how confusing webpage elements can frustrate users and diminish their engagement. Central to this is Krug’s First Law of Usability, “Don’t make me think,” which champions user-friendly design as essential for improving user experience and ensuring they remain on the site. This principle serves as a guiding philosophy for creating straightforward and navigable web interfaces.",
                // German
                "Deutsch": "Das Kapitel betont die Bedeutung intuitiven Webdesigns und plädiert für selbstverständliche und selbsterklärende Seiten, um die kognitive Belastung zu minimieren. Es unterstreicht, wie verwirrende Webseitenelemente Benutzer frustrieren und ihr Engagement mindern können. Im Mittelpunkt steht dabei Krugs erstes Gesetz der Benutzerfreundlichkeit: „Lass mich nicht nachdenken“, das benutzerfreundliches Design als wesentlich für die Verbesserung der Benutzererfahrung und das Verweilen auf der Website anerkennt. Dieses Prinzip dient als Leitphilosophie für die Erstellung unkomplizierter und navigierbarer Weboberflächen.",
                // Chinese
                "中国人": "本章强调了直观的网页设计的重要性，提倡使用不言自明和不言自明的页面来最大限度地减少认知压力。它强调了令人困惑的网页元素如何让用户感到沮丧并降低他们的参与度。其中的核心是克鲁格的可用性第一定律“不要让我思考”，它主张用户友好的设计对于改善用户体验和确保他们留在网站上至关重要。这一原则是创建简单易用的网页界面的指导理念。",
                // Russian
                "Русский": "В главе подчеркивается важность интуитивно понятного веб-дизайна, пропагандируется использование самоочевидных и понятных страниц для минимизации когнитивного напряжения. Это подчеркивает, как запутанные элементы веб-страницы могут расстраивать пользователей и снижать их вовлеченность. Центральное место в этом занимает Первый закон юзабилити Круга «Не заставляйте меня думать», который утверждает, что удобный дизайн необходим для улучшения пользовательского опыта и обеспечения того, чтобы они оставались на сайте. Этот принцип служит руководящей философией для создания простых и удобных для навигации веб-интерфейсов.",
                // French
                "Français": "Le chapitre met l'accent sur l'importance d'une conception Web intuitive, en préconisant des pages évidentes et explicites pour minimiser la tension cognitive. Cela souligne à quel point les éléments confus des pages Web peuvent frustrer les utilisateurs et diminuer leur engagement. Au cœur de cette démarche se trouve la première loi de convivialité de Krug, « Ne me faites pas réfléchir », qui considère la conception conviviale comme essentielle pour améliorer l'expérience utilisateur et garantir qu'il reste sur le site. Ce principe sert de philosophie directrice pour créer des interfaces Web simples et navigables.",
                // Japanese
                "日本語": "この章では、直感的な Web デザインの重要性を強調し、認知的負担を最小限に抑えるために、自明で説明のいらないページを推奨しています。また、わかりにくい Web ページの要素がユーザーを苛立たせ、エンゲージメントを低下させる可能性があることを強調しています。その中心にあるのは、Krug のユーザビリティの第一法則「考えさせない」です。これは、ユーザー エクスペリエンスを向上させ、ユーザーがサイトに留まるようにするためには、ユーザー フレンドリーなデザインが不可欠であると主張しています。この原則は、わかりやすくナビゲートしやすい Web インターフェイスを作成するための指針となる哲学です。",
                // Korean
                "한국인": "이 장에서는 인지적 부담을 최소화하기 위해 자명하고 자명한 페이지를 옹호하면서 직관적인 웹 디자인의 중요성을 강조합니다. 이는 혼란스러운 웹페이지 요소가 사용자를 좌절시키고 참여를 감소시킬 수 있음을 강조합니다. 이것의 핵심은 Krug의 사용성 제1법칙인 “생각하게 만들지 마세요”입니다. 이는 사용자 경험을 개선하고 사이트에 머물도록 보장하는 데 필수적인 사용자 친화적인 디자인을 옹호합니다. 이 원칙은 간단하고 탐색 가능한 웹 인터페이스를 만들기 위한 지침 철학으로 사용됩니다.",
                // Spanish
                "Español": "El capítulo enfatiza la importancia del diseño web intuitivo, abogando por páginas evidentes y autoexplicativas para minimizar la tensión cognitiva. Subraya cómo los elementos confusos de una página web pueden frustrar a los usuarios y disminuir su participación. Para esto es fundamental la Primera Ley de Usabilidad de Krug, “No me hagas pensar”, que defiende el diseño fácil de usar como esencial para mejorar la experiencia del usuario y garantizar que permanezca en el sitio. Este principio sirve como filosofía rectora para crear interfaces web sencillas y navegables.",
                // Hindi
                "हिंदी": "यह अध्याय सहज ज्ञान युक्त वेब डिज़ाइन की महत्ता पर ज़ोर देता है, संज्ञानात्मक तनाव को कम करने के लिए स्व-स्पष्ट और स्व-व्याख्यात्मक पृष्ठों की वकालत करता है। यह रेखांकित करता है कि कैसे भ्रमित करने वाले वेबपेज तत्व उपयोगकर्ताओं को निराश कर सकते हैं और उनकी सहभागिता को कम कर सकते हैं। इसके केंद्र में क्रुग का प्रयोज्यता का पहला नियम है, “मुझे सोचने पर मजबूर न करें”, जो उपयोगकर्ता के अनुकूल डिज़ाइन को उपयोगकर्ता अनुभव को बेहतर बनाने और यह सुनिश्चित करने के लिए आवश्यक मानता है कि वे साइट पर बने रहें। यह सिद्धांत सीधे और नेविगेट करने योग्य वेब इंटरफेस बनाने के लिए एक मार्गदर्शक दर्शन के रूप में कार्य करता है।",
                // Portuguese
                "Português": "O capítulo enfatiza a importância do web design intuitivo, defendendo páginas evidentes e autoexplicativas para minimizar a tensão cognitiva. Isso ressalta como elementos confusos de páginas da web podem frustrar os usuários e diminuir seu envolvimento. No centro disso está a Primeira Lei de Usabilidade de Krug, “Não me faça pensar”, que defende o design amigável como essencial para melhorar a experiência do usuário e garantir que ele permaneça no site. Este princípio serve como filosofia orientadora para a criação de interfaces web simples e navegáveis.",
                // Bengali
                "বাংলা": "অধ্যায়টি স্বজ্ঞাত ওয়েব ডিজাইনের সমালোচনার উপর জোর দেয়, জ্ঞানীয় চাপ কমাতে স্ব-স্পষ্ট এবং স্ব-ব্যাখ্যামূলক পৃষ্ঠাগুলির পক্ষে সমর্থন করে। এটি আন্ডারস্কোর করে কিভাবে বিভ্রান্তিকর ওয়েবপৃষ্ঠা উপাদান ব্যবহারকারীদের হতাশ করতে পারে এবং তাদের ব্যস্ততা হ্রাস করতে পারে। এর কেন্দ্রবিন্দু হল ক্রুগের ব্যবহারযোগ্যতার প্রথম আইন, “আমাকে ভাবতে বাধ্য করবেন না”, যা ব্যবহারকারীর অভিজ্ঞতার উন্নতির জন্য এবং তারা সাইটে থাকা নিশ্চিত করার জন্য ব্যবহারকারী-বান্ধব ডিজাইনকে অপরিহার্য হিসাবে চ্যাম্পিয়ন করে। এই নীতিটি সহজবোধ্য এবং নেভিগেবল ওয়েব ইন্টারফেস তৈরির জন্য একটি পথনির্দেশক দর্শন হিসাবে কাজ করে।",
                // Arabic
                "عَرَبِيّ": "يؤكد هذا الفصل على أهمية تصميم الويب البديهي، ويدعو إلى صفحات واضحة وواضحة بذاتها لتقليل الضغط المعرفي. إنه يسلط الضوء على كيف يمكن لعناصر صفحة الويب المربكة أن تحبط المستخدمين وتقلل من تفاعلهم. ومن الأمور المركزية في ذلك قانون كروج الأول لسهولة الاستخدام، ”لا تجعلني أفكر“، والذي يدعم التصميم سهل الاستخدام باعتباره ضروريًا لتحسين تجربة المستخدم وضمان بقائه على الموقع. يعد هذا المبدأ بمثابة فلسفة إرشادية لإنشاء واجهات ويب واضحة وقابلة للتنقل.",
                // Persian
                "فارسی": "این فصل بر اهمیت طراحی وب بصری تأکید می کند و از صفحات بدیهی و خود توضیحی برای به حداقل رساندن فشارهای شناختی حمایت می کند. این نشان می دهد که چگونه عناصر گیج کننده صفحه وب می توانند کاربران را ناامید کرده و تعامل آنها را کاهش دهند. محور اصلی این قانون اولین قانون کاربردی Krug است، ”مرا مجبور نکنید فکر کنم“، که از طراحی کاربرپسند به عنوان ضروری برای بهبود تجربه کاربر و اطمینان از ماندن آنها در سایت حمایت می کند. این اصل به عنوان یک فلسفه راهنما برای ایجاد رابط های وب ساده و قابل پیمایش عمل می کند.",
            },
        },
        // 2
        {
            "ChapterName": "How we really use the Web",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter outlines the typical behaviors of users on the web, noting that they tend to scan rather than read in detail, click on links that immediately grab their attention, and navigate through technology with a limited understanding of its workings. Consequently, it advises designers to craft web pages that are scannable, contain engaging content to quickly capture interest, and feature intuitive interfaces that accommodate the common user practice of muddling through without full comprehension, thus enhancing the overall user experience.",
                // German
                "Deutsch": "Das Kapitel beschreibt das typische Verhalten von Benutzern im Internet und stellt fest, dass sie dazu neigen, den Inhalt zu überfliegen, anstatt ihn im Detail zu lesen, auf Links zu klicken, die sofort ihre Aufmerksamkeit erregen, und sich durch die Technologie zu bewegen, ohne deren Funktionsweise zu verstehen. Daher wird Designern empfohlen, Webseiten zu erstellen, die überfliegbar sind, ansprechende Inhalte enthalten, um schnell das Interesse zu wecken, und intuitive Benutzeroberflächen zu bieten, die dem üblichen Benutzerverhalten entgegenkommen, sich ohne vollständiges Verständnis durchzuwursteln, und so das allgemeine Benutzererlebnis zu verbessern.",
                // Chinese
                "中国人": "本章概述了网络用户的典型行为，指出他们倾向于浏览而不是详细阅读，点击立即引起他们注意的链接，并在对其工作原理了解有限的情况下浏览技术。因此，它建议设计师制作易于浏览的网页，包含引人入胜的内容以快速吸引兴趣，并具有直观的界面，以适应用户在没有完全理解的情况下摸索的常见做法，从而增强整体用户体验。",
                // Russian
                "Русский": "В главе описывается типичное поведение пользователей в сети, отмечая, что они склонны скорее просматривать, чем читать подробно, нажимать на ссылки, которые сразу привлекают их внимание, и перемещаться по технологиям с ограниченным пониманием того, как они работают. Следовательно, он советует дизайнерам создавать веб-страницы, которые можно сканировать, содержать привлекательный контент, чтобы быстро привлечь интерес, и иметь интуитивно понятные интерфейсы, которые учитывают обычную пользовательскую практику, связанную с путаницей без полного понимания, тем самым улучшая общий пользовательский опыт.",
                // French
                "Français": "Le chapitre décrit les comportements typiques des utilisateurs sur le Web, notant qu'ils ont tendance à scanner plutôt qu'à lire en détail, à cliquer sur des liens qui attirent immédiatement leur attention et à naviguer dans la technologie avec une compréhension limitée de son fonctionnement. Par conséquent, il conseille aux concepteurs de créer des pages Web numérisables, contenant un contenu attrayant pour capter rapidement l'intérêt et présentant des interfaces intuitives qui s'adaptent à la pratique courante des utilisateurs consistant à se débrouiller sans compréhension complète, améliorant ainsi l'expérience utilisateur globale.",
                // Japanese
                "日本語": "この章では、Web 上のユーザーの典型的な行動について概説し、ユーザーは詳細を読むよりもざっと目を通す傾向があり、すぐに注意を引くリンクをクリックし、その仕組みをあまり理解せずにテクノロジーをナビゲートする傾向があることを指摘しています。したがって、デザイナーは、ざっと目を通すことができ、すぐに興味を引く魅力的なコンテンツを含み、完全に理解せずに混乱しながら読み進めるという一般的なユーザーの習慣に対応する直感的なインターフェイスを備えた Web ページを作成し、全体的なユーザー エクスペリエンスを向上させることを推奨しています。",
                // Korean
                "한국인": "이 장에서는 웹 사용자의 일반적인 행동을 간략히 설명합니다. 사용자는 자세히 읽기보다는 훑어보고, 즉시 관심을 끄는 링크를 클릭하고, 작동 방식에 대한 제한된 이해만으로 기술을 탐색하는 경향이 있다는 점을 지적합니다. 결과적으로, 이는 디자이너에게 스캔 가능하고, 빠르게 관심을 끌 수 있는 매력적인 콘텐츠를 포함하며, 완전한 이해 없이 혼란스러워하는 일반적인 사용자 관행을 수용하는 직관적인 인터페이스를 특징으로 하는 웹 페이지를 제작하여 전반적인 사용자 경험을 향상하도록 조언합니다.",
                // Spanish
                "Español": "El capítulo describe los comportamientos típicos de los usuarios en la web, señalando que tienden a escanear en lugar de leer en detalle, hacer clic en enlaces que captan inmediatamente su atención y navegar a través de la tecnología con una comprensión limitada de su funcionamiento. En consecuencia, aconseja a los diseñadores crear páginas web que se puedan escanear, que contengan contenido atractivo para captar rápidamente el interés y que presenten interfaces intuitivas que se adapten a la práctica común del usuario de salir del paso sin una comprensión completa, mejorando así la experiencia general del usuario.",
                // Hindi
                "हिंदी": "अध्याय वेब पर उपयोगकर्ताओं के विशिष्ट व्यवहारों को रेखांकित करता है, जिसमें बताया गया है कि वे विस्तार से पढ़ने के बजाय स्कैन करते हैं, उन लिंक पर क्लिक करते हैं जो तुरंत उनका ध्यान आकर्षित करते हैं, और प्रौद्योगिकी के कामकाज की सीमित समझ के साथ नेविगेट करते हैं। नतीजतन, यह डिजाइनरों को ऐसे वेब पेज बनाने की सलाह देता है जो स्कैन करने योग्य हों, जिनमें रुचि को तुरंत आकर्षित करने के लिए आकर्षक सामग्री हो, और सहज ज्ञान युक्त इंटरफेस हों जो बिना पूरी समझ के उलझे रहने के सामान्य उपयोगकर्ता अभ्यास को समायोजित करते हों, इस प्रकार समग्र उपयोगकर्ता अनुभव को बढ़ाते हैं।",
                // Portuguese
                "Português": "O capítulo descreve os comportamentos típicos dos usuários na web, observando que eles tendem a escanear em vez de ler em detalhes, clicar em links que imediatamente chamam sua atenção e navegar pela tecnologia com uma compreensão limitada de seu funcionamento. Conseqüentemente, ele aconselha os designers a criarem páginas da web que sejam digitalizáveis, contenham conteúdo envolvente para capturar rapidamente o interesse e apresentem interfaces intuitivas que acomodem a prática comum do usuário de navegar sem compreensão total, melhorando assim a experiência geral do usuário.",
                // Bengali
                "বাংলা": "অধ্যায়টি ওয়েবে ব্যবহারকারীদের সাধারণ আচরণের রূপরেখা দেয়, উল্লেখ করে যে তারা বিশদভাবে পড়ার পরিবর্তে স্ক্যান করার প্রবণতা দেখায়, লিঙ্কগুলিতে ক্লিক করুন যা অবিলম্বে তাদের মনোযোগ আকর্ষণ করে এবং প্রযুক্তির কাজের সীমিত বোঝার সাথে নেভিগেট করে। ফলস্বরূপ, এটি ডিজাইনারদের এমন ওয়েব পৃষ্ঠাগুলি তৈরি করার পরামর্শ দেয় যা স্ক্যানযোগ্য, দ্রুত আগ্রহ ক্যাপচার করার জন্য আকর্ষক বিষয়বস্তু ধারণ করে, এবং স্বজ্ঞাত ইন্টারফেসগুলি বৈশিষ্ট্যযুক্ত করে যা সম্পূর্ণ উপলব্ধি ছাড়াই সাধারণ ব্যবহারকারীর অভ্যাসকে মিটমাট করে, এইভাবে সামগ্রিক ব্যবহারকারীর অভিজ্ঞতা বৃদ্ধি করে৷",
                // Arabic
                "عَرَبِيّ": "يوضح الفصل السلوكيات النموذجية للمستخدمين على الويب، مع الإشارة إلى أنهم يميلون إلى المسح بدلاً من القراءة بالتفصيل، والنقر على الروابط التي تجذب انتباههم على الفور، والتنقل عبر التكنولوجيا بفهم محدود لطريقة عملها. وبالتالي، تنصح المصممين بصياغة صفحات ويب قابلة للمسح الضوئي، وتحتوي على محتوى جذاب لجذب الاهتمام بسرعة، وتتميز بواجهات بديهية تستوعب ممارسة المستخدم الشائعة المتمثلة في التشويش دون الفهم الكامل، وبالتالي تعزيز تجربة المستخدم الشاملة.",
                // Persian
                "فارسی": "این فصل به تشریح رفتارهای معمول کاربران در وب می‌پردازد، و خاطرنشان می‌کند که آنها تمایل دارند به جای خواندن جزئیات، اسکن کنند، روی پیوندهایی کلیک کنند که فوراً توجه آنها را جلب می‌کند، و با درک محدودی از عملکرد فناوری در میان آنها حرکت می‌کنند. در نتیجه، به طراحان توصیه می‌کند تا صفحات وب را بسازند که قابل اسکن هستند، حاوی محتوای جذاب برای جلب سریع علاقه‌مندی‌ها هستند، و دارای رابط‌های بصری هستند که با روش معمول کاربر در آشفتگی بدون درک کامل سازگار است، بنابراین تجربه کلی کاربر را بهبود می‌بخشد.",
            },
        },
        // 3
        {
            "ChapterName": "Billboard Design 101",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter provides a comprehensive guide to effective web design, underscoring the balance between usability and creativity. It emphasizes the need for clear, rather than consistent, design choices and the creation of visual hierarchies to aid user comprehension. Tips on enhancing visual prominence, establishing logical relationships, and proper content nesting are highlighted to structure content clearly. Additionally, it advocates for adhering to established web design conventions to maintain user familiarity, while also encouraging innovation that contributes substantial value or clarity, thereby benefiting the overall user experience.",
                // German
                "Deutsch": "Das Kapitel bietet eine umfassende Anleitung für effektives Webdesign und betont die Balance zwischen Benutzerfreundlichkeit und Kreativität. Es betont die Notwendigkeit klarer, nicht einheitlicher Designentscheidungen und der Schaffung visueller Hierarchien, um das Verständnis des Benutzers zu unterstützen. Es werden Tipps zur Verbesserung der visuellen Hervorhebung, zum Aufbau logischer Beziehungen und zur richtigen Verschachtelung von Inhalten hervorgehoben, um Inhalte klar zu strukturieren. Darüber hinaus wird empfohlen, etablierte Webdesignkonventionen einzuhalten, um die Vertrautheit des Benutzers aufrechtzuerhalten, und gleichzeitig Innovationen zu fördern, die einen wesentlichen Mehrwert oder eine erhebliche Klarheit bieten und so das allgemeine Benutzererlebnis verbessern.",
                // Chinese
                "中国人": "本章提供了有效网页设计的全面指南，强调了可用性和创造力之间的平衡。它强调需要清晰而非一致的设计选择，并创建视觉层次结构以帮助用户理解。重点介绍了增强视觉突出性、建立逻辑关系和正确内容嵌套的技巧，以使内容结构清晰。此外，它提倡遵守既定的网页设计惯例以保持用户熟悉度，同时也鼓励提供实质性价值或清晰度的创新，从而有利于整体用户体验。",
                // Russian
                "Русский": "В этой главе представлено подробное руководство по эффективному веб-дизайну, подчеркивающее баланс между удобством использования и креативностью. Он подчеркивает необходимость четкого, а не последовательного выбора дизайна и создания визуальных иерархий для облегчения понимания пользователем. Советы по повышению визуальной заметности, установлению логических связей и правильному вложению контента выделены для четкой структуризации контента. Кроме того, он выступает за соблюдение установленных конвенций веб-дизайна для поддержания знакомства пользователей, а также поощряет инновации, которые приносят существенную ценность или ясность, тем самым улучшая общий пользовательский опыт.",
                // French
                "Français": "Le chapitre fournit un guide complet pour une conception Web efficace, soulignant l'équilibre entre convivialité et créativité. Il souligne la nécessité de choix de conception clairs plutôt que cohérents et de création de hiérarchies visuelles pour faciliter la compréhension de l'utilisateur. Des conseils pour améliorer la proéminence visuelle, établir des relations logiques et imbriquer correctement le contenu sont mis en évidence pour structurer clairement le contenu. En outre, il préconise le respect des conventions de conception Web établies pour maintenir la familiarité des utilisateurs, tout en encourageant l'innovation qui apporte une valeur ou une clarté substantielle, bénéficiant ainsi à l'expérience utilisateur globale.",
                // Japanese
                "日本語": "この章では、効果的な Web デザインに関する包括的なガイドを提供し、使いやすさと創造性のバランスを強調しています。一貫性よりも明確なデザイン選択と、ユーザーの理解を助ける視覚的な階層の作成の必要性を強調しています。視覚的な目立ち度を高める、論理的な関係を確立する、適切なコンテンツのネストに関するヒントを強調して、コンテンツを明確に構造化します。さらに、確立された Web デザインの慣例を順守してユーザーの親しみやすさを維持すると同時に、大きな価値や明確さをもたらす革新を奨励し、それによって全体的なユーザー エクスペリエンスを向上させることを提唱しています。",
                // Korean
                "한국인": "이 장에서는 유용성과 창의성 사이의 균형을 강조하면서 효과적인 웹 디자인에 대한 포괄적인 가이드를 제공합니다. 일관성보다는 명확한 디자인 선택과 사용자 이해를 돕기 위한 시각적 계층 구조 생성의 필요성을 강조합니다. 시각적 중요성 강화, 논리적 관계 설정, 적절한 콘텐츠 중첩에 대한 팁을 강조하여 콘텐츠를 명확하게 구성합니다. 또한 이는 사용자 친숙성을 유지하기 위해 확립된 웹 디자인 규칙을 준수하는 동시에 실질적인 가치나 명확성에 기여하여 전반적인 사용자 경험에 도움이 되는 혁신을 장려하는 것을 옹호합니다.",
                // Spanish
                "Español": "El capítulo proporciona una guía completa para un diseño web eficaz, subrayando el equilibrio entre usabilidad y creatividad. Enfatiza la necesidad de opciones de diseño claras, en lugar de consistentes, y la creación de jerarquías visuales para ayudar a la comprensión del usuario. Se destacan consejos para mejorar la prominencia visual, establecer relaciones lógicas y anidar el contenido de forma adecuada para estructurar el contenido con claridad. Además, aboga por adherirse a las convenciones de diseño web establecidas para mantener la familiaridad del usuario, al mismo tiempo que fomenta la innovación que aporta valor o claridad sustancial, beneficiando así la experiencia general del usuario.",
                // Hindi
                "हिंदी": "यह अध्याय प्रभावी वेब डिज़ाइन के लिए एक व्यापक मार्गदर्शिका प्रदान करता है, जो प्रयोज्यता और रचनात्मकता के बीच संतुलन को रेखांकित करता है। यह उपयोगकर्ता की समझ में सहायता करने के लिए सुसंगत, डिज़ाइन विकल्पों के बजाय स्पष्ट, और दृश्य पदानुक्रमों के निर्माण की आवश्यकता पर जोर देता है। दृश्य प्रमुखता बढ़ाने, तार्किक संबंध स्थापित करने और उचित सामग्री नेस्टिंग पर सुझाव स्पष्ट रूप से सामग्री को संरचित करने के लिए हाइलाइट किए गए हैं। इसके अतिरिक्त, यह उपयोगकर्ता की परिचितता बनाए रखने के लिए स्थापित वेब डिज़ाइन सम्मेलनों का पालन करने की वकालत करता है, साथ ही ऐसे नवाचार को प्रोत्साहित करता है जो पर्याप्त मूल्य या स्पष्टता में योगदान देता है, जिससे समग्र उपयोगकर्ता अनुभव को लाभ होता है।",
                // Portuguese
                "Português": "O capítulo fornece um guia completo para web design eficaz, ressaltando o equilíbrio entre usabilidade e criatividade. Ele enfatiza a necessidade de escolhas de design claras, em vez de consistentes, e a criação de hierarquias visuais para ajudar na compreensão do usuário. Dicas sobre como melhorar o destaque visual, estabelecer relações lógicas e aninhar adequadamente o conteúdo são destacadas para estruturar o conteúdo com clareza. Além disso, defende a adesão às convenções de web design estabelecidas para manter a familiaridade do utilizador, ao mesmo tempo que incentiva a inovação que contribui com valor ou clareza substancial, beneficiando assim a experiência geral do utilizador.",
                // Bengali
                "বাংলা": "অধ্যায়টি কার্যকর ওয়েব ডিজাইনের জন্য একটি ব্যাপক নির্দেশিকা প্রদান করে, ব্যবহারযোগ্যতা এবং সৃজনশীলতার মধ্যে ভারসাম্যকে আন্ডারস্কোর করে। এটি ব্যবহারকারীর বোধগম্যতাকে সহায়তা করার জন্য সুসংগত, নকশা পছন্দের পরিবর্তে পরিষ্কারের প্রয়োজনীয়তার উপর জোর দেয় এবং ভিজ্যুয়াল শ্রেণিবিন্যাস তৈরি করে। চাক্ষুষ বিশিষ্টতা বাড়ানো, যৌক্তিক সম্পর্ক স্থাপন এবং সঠিক বিষয়বস্তু নেস্টিং বিষয়বস্তুকে পরিষ্কারভাবে গঠন করার জন্য টিপস হাইলাইট করা হয়েছে। উপরন্তু, এটি ব্যবহারকারীর পরিচিতি বজায় রাখার জন্য প্রতিষ্ঠিত ওয়েব ডিজাইন কনভেনশনগুলি মেনে চলার পক্ষে সমর্থন করে, পাশাপাশি উদ্ভাবনকে উত্সাহিত করে যা যথেষ্ট মূল্য বা স্পষ্টতা অবদান রাখে, যার ফলে সামগ্রিক ব্যবহারকারীর অভিজ্ঞতা লাভবান হয়।",
                // Arabic
                "عَرَبِيّ": "يقدم هذا الفصل دليلاً شاملاً لتصميم الويب الفعال، مع التركيز على التوازن بين سهولة الاستخدام والإبداع. إنه يؤكد على الحاجة إلى خيارات تصميم واضحة، وليست متسقة، وإنشاء تسلسلات هرمية مرئية لمساعدة المستخدم على الفهم. يتم تسليط الضوء على النصائح حول تعزيز البروز البصري، وإقامة علاقات منطقية، وتداخل المحتوى المناسب لتنظيم المحتوى بشكل واضح. بالإضافة إلى ذلك، فهو يدعو إلى الالتزام باتفاقيات تصميم الويب المعمول بها للحفاظ على معرفة المستخدم، مع تشجيع الابتكار الذي يساهم بقيمة كبيرة أو وضوح، وبالتالي يفيد تجربة المستخدم الشاملة.",
                // Persian
                "فارسی": "این فصل راهنمای جامعی برای طراحی موثر وب ارائه می دهد که بر تعادل بین قابلیت استفاده و خلاقیت تأکید می کند. بر نیاز به انتخاب‌های طراحی واضح و نه ثابت و ایجاد سلسله مراتب بصری برای کمک به درک کاربر تأکید می‌کند. نکاتی در مورد افزایش برجستگی بصری، ایجاد روابط منطقی، و تودرتوی مناسب محتوا برای ساختاربندی واضح محتوا برجسته شده است. علاوه بر این، از پایبندی به قراردادهای طراحی وب سایت برای حفظ آشنایی کاربر حمایت می کند، در حالی که همچنین نوآوری را تشویق می کند که ارزش یا وضوح قابل توجهی را ایجاد می کند، در نتیجه از تجربه کلی کاربر سود می برد.",
            },
        },
        // 4
        {
            "ChapterName": "Animal, Vegetable, or Mineral ?",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter delves into the concept of user-friendly website navigation, emphasizing that users favor effortless decision-making, preferring the simplicity of clicking to the quantity of clicks. It advocates for clear, informative links that guide users intuitively, akin to the straightforward choices in the game Twenty Questions. The text also suggests providing timely guidance for complex decisions, drawing parallels to the effectiveness of London’s street signs, underscoring the importance of making choices on websites as mindless as possible to ensure optimal usability.",
                // German
                "Deutsch": "Das Kapitel befasst sich eingehend mit dem Konzept der benutzerfreundlichen Website-Navigation und betont, dass Benutzer mühelose Entscheidungsfindung bevorzugen und die Einfachheit des Klickens der Anzahl der Klicks vorziehen. Es plädiert für klare, informative Links, die Benutzer intuitiv leiten, ähnlich den unkomplizierten Entscheidungen im Spiel „Zwanzig Fragen“. Der Text schlägt auch vor, zeitnahe Anleitungen für komplexe Entscheidungen bereitzustellen, zieht Parallelen zur Wirksamkeit der Londoner Straßenschilder und unterstreicht, wie wichtig es ist, Entscheidungen auf Websites so gedankenlos wie möglich zu treffen, um eine optimale Benutzerfreundlichkeit zu gewährleisten.",
                // Chinese
                "中国人": "本章深入探讨了用户友好型网站导航的概念，强调用户喜欢轻松的决策，他们更喜欢点击的简单性而不是点击的数量。它提倡清晰、信息丰富的链接，以直观的方式引导用户，类似于游戏“二十个问题”中的直接选择。文本还建议为复杂的决策提供及时的指导，与伦敦街道标志的有效性相提并论，强调在网站上做出选择尽可能轻松以确保最佳可用性的重要性。",
                // Russian
                "Русский": "В главе подробно рассматривается концепция удобной навигации по веб-сайту, подчеркивая, что пользователи предпочитают легкость принятия решений, предпочитая простоту нажатия количеству кликов. Он выступает за четкие, информативные ссылки, которые интуитивно ведут пользователей, подобно простому выбору в игре «Двадцать вопросов». В тексте также предлагается предоставить своевременное руководство для принятия сложных решений, провести параллели с эффективностью уличных знаков Лондона и подчеркнуть важность того, чтобы выбор на веб-сайтах был как можно более бездумным, чтобы обеспечить оптимальное удобство использования.",
                // French
                "Français": "Le chapitre approfondit le concept de navigation conviviale sur un site Web, en soulignant que les utilisateurs privilégient une prise de décision sans effort, préférant la simplicité du clic à la quantité de clics. Il préconise des liens clairs et informatifs qui guident les utilisateurs de manière intuitive, à l’instar des choix simples du jeu Twenty Questions. Le texte suggère également de fournir des conseils opportuns pour les décisions complexes, en établissant des parallèles avec l’efficacité des panneaux de signalisation de Londres, en soulignant l’importance de faire des choix sur les sites Web aussi inconsidérés que possible pour garantir une convivialité optimale.",
                // Japanese
                "日本語": "この章では、ユーザーフレンドリーなウェブサイトナビゲーションの概念を掘り下げ、ユーザーはクリック回数よりもクリックのシンプルさを重視し、楽な意思決定を好むことを強調しています。また、ゲーム「20の質問」の簡単な選択に似た、ユーザーを直感的に導く明確で情報豊富なリンクを推奨しています。また、複雑な決定に対してタイムリーなガイダンスを提供することを提案し、ロンドンの道路標識の有効性に例え、ウェブサイトでの選択をできるだけ無意識に行うことが最適なユーザビリティを確保する上で重要であることを強調しています。",
                // Korean
                "한국인": "이 장에서는 사용자 친화적인 웹 사이트 탐색 개념을 자세히 살펴보며 사용자는 클릭 수보다 클릭의 단순성을 선호하고 손쉬운 의사 결정을 선호한다는 점을 강조합니다. 이는 20가지 질문 게임의 간단한 선택과 유사하게 사용자를 직관적으로 안내하는 명확하고 유익한 링크를 옹호합니다. 또한 이 텍스트는 복잡한 결정을 위한 시기적절한 지침을 제공하고 런던의 거리 표지판의 효율성과 유사하며 최적의 사용성을 보장하기 위해 웹사이트에서 가능한 한 아무 생각 없이 선택하는 것이 중요하다는 점을 강조합니다.",
                // Spanish
                "Español": "El capítulo profundiza en el concepto de navegación web fácil de usar, enfatizando que los usuarios prefieren la toma de decisiones sin esfuerzo, prefiriendo la simplicidad de hacer clic a la cantidad de clics. Aboga por enlaces claros e informativos que guíen a los usuarios de forma intuitiva, similares a las opciones sencillas del juego Twenty questions. El texto también sugiere proporcionar orientación oportuna para decisiones complejas, estableciendo paralelismos con la efectividad de las señales de tráfico de Londres, subrayando la importancia de tomar decisiones en los sitios web lo más inconscientes posible para garantizar una usabilidad óptima.",
                // Hindi
                "हिंदी": "यह अध्याय उपयोगकर्ता-अनुकूल वेबसाइट नेविगेशन की अवधारणा पर गहराई से चर्चा करता है, इस बात पर जोर देता है कि उपयोगकर्ता सहज निर्णय लेने के पक्ष में हैं, वे क्लिक की मात्रा के बजाय क्लिक करने की सरलता को प्राथमिकता देते हैं। यह स्पष्ट, सूचनात्मक लिंक की वकालत करता है जो उपयोगकर्ताओं को सहज रूप से मार्गदर्शन करते हैं, खेल ट्वेंटी क्वेश्चन में सीधे विकल्पों के समान। पाठ जटिल निर्णयों के लिए समय पर मार्गदर्शन प्रदान करने का भी सुझाव देता है, लंदन के सड़क संकेतों की प्रभावशीलता के समानांतर, इष्टतम उपयोगिता सुनिश्चित करने के लिए वेबसाइटों पर यथासंभव बिना सोचे-समझे चुनाव करने के महत्व को रेखांकित करता है।",
                // Portuguese
                "Português": "O capítulo aprofunda o conceito de navegação amigável no site, enfatizando que os usuários favorecem a tomada de decisões sem esforço, preferindo a simplicidade de clicar à quantidade de cliques. Ele defende links claros e informativos que guiam os usuários de forma intuitiva, semelhante às escolhas diretas do jogo Twenty Questions. O texto também sugere fornecer orientação oportuna para decisões complexas, traçando paralelos com a eficácia dos sinais de trânsito de Londres, sublinhando a importância de fazer escolhas em websites da forma mais estúpida possível para garantir uma usabilidade ideal.",
                // Bengali
                "বাংলা": "অধ্যায়টি ব্যবহারকারী-বান্ধব ওয়েবসাইট নেভিগেশনের ধারণার উপর আলোকপাত করে, জোর দেয় যে ব্যবহারকারীরা ক্লিকের পরিমাণে ক্লিক করার সরলতাকে পছন্দ করে অনায়াসে সিদ্ধান্ত নেওয়ার পক্ষে। এটি স্পষ্ট, তথ্যপূর্ণ লিঙ্কগুলির পক্ষে সমর্থন করে যা ব্যবহারকারীদের স্বজ্ঞাতভাবে গাইড করে, গেম টোয়েন্টি প্রশ্নে সহজবোধ্য পছন্দগুলির মতো। পাঠ্যটি জটিল সিদ্ধান্তের জন্য সময়োপযোগী নির্দেশনা প্রদানের পরামর্শ দেয়, লন্ডনের রাস্তার চিহ্নগুলির কার্যকারিতার সমান্তরাল অঙ্কন করে, সর্বোত্তম ব্যবহারযোগ্যতা নিশ্চিত করার জন্য যতটা সম্ভব নির্বোধ ওয়েবসাইটগুলিতে পছন্দ করার গুরুত্বের উপর জোর দেয়।",
                // Arabic
                "عَرَبِيّ": "يتعمق الفصل في مفهوم التنقل السهل في موقع الويب، مع التركيز على أن المستخدمين يفضلون اتخاذ القرار دون عناء، ويفضلون بساطة النقر على كمية النقرات. فهو يدعو إلى وجود روابط واضحة وغنية بالمعلومات ترشد المستخدمين بشكل بديهي، على غرار الاختيارات المباشرة في لعبة Twenty Questions. يقترح النص أيضًا توفير التوجيه في الوقت المناسب لاتخاذ القرارات المعقدة، ورسم أوجه التشابه مع فعالية لافتات الشوارع في لندن، والتأكيد على أهمية اتخاذ الاختيارات على مواقع الويب بشكل طائش قدر الإمكان لضمان سهولة الاستخدام الأمثل.",
                // Persian
                "فارسی": "این فصل به مفهوم ناوبری وب سایت کاربر پسند می پردازد و تأکید می کند که کاربران تصمیم گیری بدون زحمت را ترجیح می دهند و سادگی کلیک را به تعداد کلیک ها ترجیح می دهند. این از پیوندهای روشن و آموزنده ای حمایت می کند که به طور مستقیم کاربران را راهنمایی می کند، شبیه به انتخاب های ساده در بازی بیست سؤال. این متن همچنین ارائه راهنمایی به موقع برای تصمیم گیری های پیچیده، ترسیم موازی با اثربخشی علائم خیابان های لندن، تاکید بر اهمیت انتخاب در وب سایت ها تا حد امکان بدون فکر برای اطمینان از قابلیت استفاده بهینه را پیشنهاد می کند.",
            },
        },
        // 5
        {
            "ChapterName": "Omit needless words",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter advocates for the reduction of ‘happy talk’ and superfluous instructions on websites to streamline user experience, drawing on E. B. White’s principle of omitting needless words for succinctness and clarity. It argues that removing extraneous content can decrease distractions, accentuate vital information, and increase user-friendliness. A practical example demonstrates that concise instructions, such as those in a questionnaire, can be made clearer by eliminating unnecessary verbiage. Looking ahead, the book promises to explore web design challenges, with a particular emphasis on navigation and the design of the Home page, to further enhance website usability and user engagement.",
                // German
                "Deutsch": "Das Kapitel plädiert für die Reduzierung von „Schöntext“ und überflüssigen Anweisungen auf Websites, um die Benutzererfahrung zu optimieren. Dabei stützt es sich auf E. B. Whites Prinzip, unnötige Wörter wegzulassen, um Prägnanz und Klarheit zu erreichen. Es argumentiert, dass das Entfernen irrelevanter Inhalte Ablenkungen verringern, wichtige Informationen hervorheben und die Benutzerfreundlichkeit erhöhen kann. Ein praktisches Beispiel zeigt, dass prägnante Anweisungen, wie sie in einem Fragebogen vorkommen, durch das Weglassen unnötiger Formulierungen klarer gemacht werden können. Mit Blick auf die Zukunft verspricht das Buch, Herausforderungen des Webdesigns zu untersuchen, mit besonderem Schwerpunkt auf der Navigation und dem Design der Homepage, um die Benutzerfreundlichkeit der Website und die Benutzereinbindung weiter zu verbessern.",
                // Chinese
                "中国人": "本章提倡减少网站上的“花言巧语”和多余的说明，以简化用户体验，借鉴 E. B. White 的原则，即为了简洁和清晰而省略不必要的单词。它认为删除无关紧要的内容可以减少干扰，突出重要信息并提高用户友好度。一个实际的例子表明，通过消除不必要的冗长文字，可以使简明的说明（例如问卷中的说明）更加清晰。展望未来，本书承诺探索网页设计挑战，特别强调导航和主页设计，以进一步提高网站的可用性和用户参与度。",
                // Russian
                "Русский": "В этой главе содержится призыв сократить количество «веселых разговоров» и лишних инструкций на веб-сайтах для оптимизации пользовательского опыта, опираясь на принцип Э. Б. Уайта о пропуске ненужных слов для краткости и ясности. В нем утверждается, что удаление постороннего контента может уменьшить отвлекающие факторы, подчеркнуть важную информацию и повысить удобство использования. Практический пример показывает, что краткие инструкции, например, в вопроснике, можно сделать более понятными, исключив ненужное словоблудие. Заглядывая в будущее, книга обещает изучить проблемы веб-дизайна с особым упором на навигацию и дизайн домашней страницы, чтобы еще больше повысить удобство использования веб-сайта и повысить вовлеченность пользователей.",
                // French
                "Français": "Le chapitre préconise la réduction des « paroles joyeuses » et des instructions superflues sur les sites Web afin de rationaliser l’expérience utilisateur, en s’appuyant sur le principe d’E. B. White consistant à omettre les mots inutiles par souci de concision et de clarté. Il soutient que la suppression du contenu superflu peut réduire les distractions, accentuer les informations vitales et accroître la convivialité. Un exemple pratique démontre que des instructions concises, telles que celles d’un questionnaire, peuvent être rendues plus claires en éliminant le verbiage inutile. Pour l’avenir, le livre promet d’explorer les défis de la conception Web, avec un accent particulier sur la navigation et la conception de la page d’accueil, afin d’améliorer encore la convivialité du site Web et l’engagement des utilisateurs.",
                // Japanese
                "日本語": "この章では、E. B. ホワイトの「簡潔で明瞭な表現のために不要な言葉を省く」という原則に倣い、ウェブサイト上の「ハッピートーク」や余分な説明を減らしてユーザーエクスペリエンスを合理化することを提唱しています。また、無関係なコンテンツを削除すると、気が散る要素が減り、重要な情報が強調され、ユーザーフレンドリーさが増すと主張しています。実例で、アンケートなどの簡潔な説明は、不要な言葉を排除することでより明確にできることを示しています。今後、この本では、ナビゲーションとホームページのデザインに特に重点を置き、ウェブサイトの使いやすさとユーザーエンゲージメントをさらに向上させるウェブデザインの課題を探究する予定です。",
                // Korean
                "한국인": "이 장에서는 간결함과 명확성을 위해 불필요한 단어를 생략하는 E. B. White의 원칙을 바탕으로 사용자 경험을 간소화하기 위해 웹사이트에서 '행복한 대화'와 불필요한 지침을 줄일 것을 옹호합니다. 관련 없는 콘텐츠를 제거하면 주의가 산만해지는 것을 줄이고, 중요한 정보를 강조하며, 사용자 친화성을 높일 수 있다고 주장합니다. 실제 사례에서는 설문지와 같은 간결한 지침이 불필요한 장황한 말을 제거함으로써 더욱 명확해질 수 있음을 보여줍니다. 앞으로 이 책에서는 탐색과 홈 페이지 디자인에 특히 중점을 두고 웹 디자인 과제를 탐구하여 웹 사이트 유용성과 사용자 참여를 더욱 향상시킬 것을 약속합니다.",
                // Spanish
                "Español": "El capítulo aboga por la reducción de las “charlas alegres” y las instrucciones superfluas en los sitios web para optimizar la experiencia del usuario, basándose en el principio de E. B. White de omitir palabras innecesarias para mayor concisión y claridad. Sostiene que eliminar contenido superfluo puede disminuir las distracciones, acentuar la información vital y aumentar la facilidad de uso. Un ejemplo práctico demuestra que instrucciones concisas, como las de un cuestionario, pueden aclararse eliminando palabrería innecesaria. De cara al futuro, el libro promete explorar los desafíos del diseño web, con especial énfasis en la navegación y el diseño de la página de inicio, para mejorar aún más la usabilidad del sitio web y la participación del usuario.",
                // Hindi
                "हिंदी": "यह अध्याय उपयोगकर्ता अनुभव को सुव्यवस्थित करने के लिए वेबसाइटों पर ‘खुशहाल बातचीत’ और अनावश्यक निर्देशों को कम करने की वकालत करता है, जो संक्षिप्तता और स्पष्टता के लिए अनावश्यक शब्दों को छोड़ने के ई.बी. व्हाइट के सिद्धांत पर आधारित है। यह तर्क देता है कि बाहरी सामग्री को हटाने से विकर्षण कम हो सकता है, महत्वपूर्ण जानकारी को उभारा जा सकता है और उपयोगकर्ता-मित्रता को बढ़ाया जा सकता है। एक व्यावहारिक उदाहरण दर्शाता है कि संक्षिप्त निर्देश, जैसे कि प्रश्नावली में, अनावश्यक शब्दाडंबर को हटाकर स्पष्ट किया जा सकता है। आगे देखते हुए, पुस्तक वेबसाइट की उपयोगिता और उपयोगकर्ता जुड़ाव को और बढ़ाने के लिए नेविगेशन और होम पेज के डिजाइन पर विशेष जोर देते हुए वेब डिज़ाइन चुनौतियों का पता लगाने का वादा करती है।",
                // Portuguese
                "Português": "O capítulo defende a redução de “conversas felizes” e instruções supérfluas em sites para simplificar a experiência do usuário, baseando-se no princípio de E. B. White de omitir palavras desnecessárias para obter sucinta e clareza. Argumenta que a remoção de conteúdo estranho pode diminuir as distrações, acentuar informações vitais e aumentar a facilidade de uso. Um exemplo prático demonstra que instruções concisas, como as de um questionário, podem ser tornadas mais claras eliminando palavreado desnecessário. Olhando para o futuro, o livro promete explorar os desafios do web design, com especial ênfase na navegação e no design da página inicial, para melhorar ainda mais a usabilidade do website e o envolvimento do utilizador.",
                // Bengali
                "বাংলা": "অধ্যায়টি ব্যবহারকারীর অভিজ্ঞতাকে স্ট্রীমলাইন করার জন্য ওয়েবসাইটগুলিতে 'হ্যাপি টক' এবং অতিরিক্ত নির্দেশাবলী হ্রাস করার পক্ষে সমর্থন করে, সংক্ষিপ্ততা এবং স্বচ্ছতার জন্য অপ্রয়োজনীয় শব্দগুলি বাদ দেওয়ার ই.বি. হোয়াইটের নীতির উপর আঁকে। এটি যুক্তি দেয় যে বহিরাগত বিষয়বস্তু অপসারণ বিভ্রান্তি হ্রাস করতে পারে, গুরুত্বপূর্ণ তথ্যকে উচ্চারণ করতে পারে এবং ব্যবহারকারী-বন্ধুত্ব বাড়াতে পারে। একটি ব্যবহারিক উদাহরণ দেখায় যে সংক্ষিপ্ত নির্দেশাবলী, যেমন একটি প্রশ্নাবলীর মতো, অপ্রয়োজনীয় শব্দচয়ন দূর করে আরও স্পষ্ট করা যেতে পারে। সামনের দিকে তাকিয়ে, বইটি ওয়েবসাইট ব্যবহারযোগ্যতা এবং ব্যবহারকারীর ব্যস্ততাকে আরও উন্নত করতে, নেভিগেশন এবং হোম পেজের ডিজাইনের উপর বিশেষ জোর দিয়ে ওয়েব ডিজাইন চ্যালেঞ্জগুলি অন্বেষণ করার প্রতিশ্রুতি দেয়।",
                // Arabic
                "عَرَبِيّ": "يدعو هذا الفصل إلى الحد من 'الحديث السعيد' والتعليمات غير الضرورية على مواقع الويب لتبسيط تجربة المستخدم، بالاعتماد على مبدأ إي بي وايت المتمثل في حذف الكلمات التي لا داعي لها من أجل الإيجاز والوضوح. ويجادل بأن إزالة المحتوى الدخيل يمكن أن يقلل من عوامل التشتيت، ويبرز المعلومات الحيوية، ويزيد من سهولة الاستخدام. يوضح المثال العملي أن التعليمات الموجزة، مثل تلك الموجودة في الاستبيان، يمكن أن تكون أكثر وضوحًا من خلال التخلص من الإسهاب غير الضروري. وبالنظر إلى المستقبل، يعد الكتاب باستكشاف تحديات تصميم الويب، مع التركيز بشكل خاص على التنقل وتصميم الصفحة الرئيسية، لزيادة تعزيز سهولة استخدام موقع الويب ومشاركة المستخدم.",
                // Persian
                "فارسی": "این فصل از کاهش «حرف‌های شاد» و دستورالعمل‌های اضافی در وب‌سایت‌ها برای ساده‌سازی تجربه کاربر، با تکیه بر اصل E.B. White مبنی بر حذف کلمات بی‌ضرور برای موجز و وضوح حمایت می‌کند. این استدلال می کند که حذف محتوای اضافی می تواند حواس پرتی را کاهش دهد، اطلاعات حیاتی را برجسته کند و کاربر پسندی را افزایش دهد. یک مثال عملی نشان می‌دهد که دستورالعمل‌های مختصر، مانند دستورالعمل‌های موجود در پرسش‌نامه، می‌توانند با حذف حرف‌های غیرضروری واضح‌تر شوند. با نگاهی به آینده، این کتاب وعده می دهد که چالش های طراحی وب را با تأکید ویژه بر ناوبری و طراحی صفحه اصلی بررسی کند تا قابلیت استفاده وب سایت و تعامل کاربر را بیشتر افزایش دهد.",
            },
        },
        // 6
        {
            "ChapterName": "Street signs and Breadcrumbs",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter discusses the essentials of web navigation, likening it to navigating physical spaces and emphasizing the need for clear markers like street signs, breadcrumbs, and consistent page names. It highlights common issues such as the neglect of third-level navigation and the lack of scale perception on websites, stressing the importance of structured navigation for a positive user experience. Additionally, it points out the utility of tab dividers in providing straightforward access to different sections, advocating for simplicity and clarity in design to facilitate ease of use and intuitive exploration of web content.",
                // German
                "Deutsch": "Das Kapitel befasst sich mit den Grundlagen der Webnavigation, vergleicht sie mit der Navigation in physischen Räumen und betont die Notwendigkeit klarer Markierungen wie Straßenschilder, Brotkrümelnavigation und konsistenter Seitennamen. Es hebt häufige Probleme hervor, wie die Vernachlässigung der Navigation auf dritter Ebene und die fehlende Maßstabswahrnehmung auf Websites, und betont die Bedeutung einer strukturierten Navigation für ein positives Benutzererlebnis. Darüber hinaus wird auf die Nützlichkeit von Tab-Trennern hingewiesen, die einen direkten Zugriff auf verschiedene Abschnitte ermöglichen, und für Einfachheit und Klarheit im Design plädiert, um die Benutzerfreundlichkeit und intuitive Erkundung von Webinhalten zu erleichtern.",
                // Chinese
                "中国人": "本章讨论了网络导航的基本要素，将其比作在物理空间中导航，并强调需要清晰的标记，如路牌、面包屑和一致的页面名称。它强调了常见问题，例如忽视第三级导航和网站缺乏规模感知，强调结构化导航对于获得积极的用户体验的重要性。此外，它还指出了标签分隔符在提供对不同部分的直接访问方面的实用性，提倡设计简单明了，以方便使用和直观地探索网络内容。",
                // Russian
                "Русский": "В главе обсуждаются основы веб-навигации, сравнивая ее с навигацией по физическому пространству и подчеркивая необходимость в четких маркерах, таких как уличные знаки, хлебные крошки и последовательные названия страниц. В нем освещаются общие проблемы, такие как пренебрежение навигацией третьего уровня и отсутствие восприятия масштаба на веб-сайтах, подчеркивая важность структурированной навигации для положительного пользовательского опыта. Кроме того, он указывает на полезность разделителей вкладок в обеспечении прямого доступа к различным разделам, выступает за простоту и ясность дизайна, чтобы облегчить использование и интуитивное исследование веб-контента.",
                // French
                "Français": "Le chapitre aborde les éléments essentiels de la navigation Web, en la comparant à la navigation dans des espaces physiques et en soulignant la nécessité de marqueurs clairs tels que des panneaux de signalisation, un fil d'Ariane et des noms de page cohérents. Il met en évidence des problèmes courants tels que la négligence de la navigation de troisième niveau et le manque de perception de l'échelle sur les sites Web, soulignant l'importance d'une navigation structurée pour une expérience utilisateur positive. De plus, il souligne l'utilité des séparateurs d'onglets pour fournir un accès simple aux différentes sections, plaidant pour la simplicité et la clarté de la conception afin de faciliter l'utilisation et l'exploration intuitive du contenu Web.",
                // Japanese
                "日本語": "この章では、Web ナビゲーションの基本について説明し、それを物理的な空間のナビゲーションに例え、道路標識、パンくずリスト、一貫したページ名などの明確なマーカーの必要性を強調しています。また、第 3 レベルのナビゲーションの軽視や Web サイトでのスケール認識の欠如などの一般的な問題に焦点を当て、ポジティブなユーザー エクスペリエンスを実現するには構造化されたナビゲーションが重要であることを強調しています。さらに、さまざまなセクションに簡単にアクセスできるタブ区切りの有用性を指摘し、Web コンテンツの使いやすさと直感的な探索を促進するために、デザインのシンプルさと明瞭さを推奨しています。",
                // Korean
                "한국인": "이 장에서는 웹 탐색의 필수 사항을 논의하고 이를 물리적 공간 탐색에 비유하고 거리 표지판, 이동 경로 및 일관된 페이지 이름과 같은 명확한 표시의 필요성을 강조합니다. 이는 3단계 탐색 무시, 웹 사이트의 규모 인식 부족과 같은 일반적인 문제를 강조하고 긍정적인 사용자 경험을 위한 구조화된 탐색의 중요성을 강조합니다. 또한 다양한 섹션에 대한 직접적인 액세스를 제공하는 탭 구분선의 유용성을 지적하고 웹 콘텐츠의 사용 편의성과 직관적인 탐색을 촉진하기 위해 디자인의 단순성과 명확성을 옹호합니다.",
                // Spanish
                "Español": "El capítulo analiza los aspectos esenciales de la navegación web, comparándola con la navegación en espacios físicos y enfatizando la necesidad de marcadores claros como señales de tráfico, rutas de navegación y nombres de páginas consistentes. Destaca problemas comunes como el descuido de la navegación de tercer nivel y la falta de percepción de escala en los sitios web, destacando la importancia de la navegación estructurada para una experiencia de usuario positiva. Además, señala la utilidad de los divisores de pestañas para proporcionar un acceso directo a diferentes secciones, abogando por la simplicidad y claridad en el diseño para facilitar el uso y la exploración intuitiva del contenido web.",
                // Hindi
                "हिंदी": "अध्याय में वेब नेविगेशन की अनिवार्यताओं पर चर्चा की गई है, इसे भौतिक स्थानों पर नेविगेट करने के समान बताया गया है और सड़क के संकेतों, ब्रेडक्रंब और सुसंगत पृष्ठ नामों जैसे स्पष्ट मार्करों की आवश्यकता पर जोर दिया गया है। यह तीसरे स्तर के नेविगेशन की उपेक्षा और वेबसाइटों पर पैमाने की धारणा की कमी जैसे सामान्य मुद्दों पर प्रकाश डालता है, सकारात्मक उपयोगकर्ता अनुभव के लिए संरचित नेविगेशन के महत्व पर जोर देता है। इसके अतिरिक्त, यह विभिन्न अनुभागों तक सीधी पहुँच प्रदान करने में टैब डिवाइडर की उपयोगिता को इंगित करता है, उपयोग में आसानी और वेब सामग्री की सहज खोज को सुविधाजनक बनाने के लिए डिज़ाइन में सरलता और स्पष्टता की वकालत करता है।",
                // Portuguese
                "Português": "O capítulo discute os fundamentos da navegação na web, comparando-a à navegação em espaços físicos e enfatizando a necessidade de marcadores claros, como placas de rua, trilhas de navegação e nomes de páginas consistentes. Destaca questões comuns como a negligência da navegação de terceiro nível e a falta de percepção de escala nos websites, sublinhando a importância da navegação estruturada para uma experiência positiva do utilizador. Além disso, destaca a utilidade dos divisores de abas no fornecimento de acesso direto a diferentes seções, defendendo a simplicidade e clareza no design para facilitar a facilidade de uso e a exploração intuitiva do conteúdo da web.",
                // Bengali
                "বাংলা": "অধ্যায়টি ওয়েব নেভিগেশনের প্রয়োজনীয়তা নিয়ে আলোচনা করে, এটিকে ভৌত স্পেস নেভিগেট করার সাথে তুলনা করে এবং রাস্তার চিহ্ন, ব্রেডক্রাম্ব এবং সামঞ্জস্যপূর্ণ পৃষ্ঠার নামগুলির মতো স্পষ্ট মার্কারগুলির প্রয়োজনীয়তার উপর জোর দেয়। এটি তৃতীয়-স্তরের নেভিগেশনের অবহেলা এবং ওয়েবসাইটগুলিতে স্কেল উপলব্ধির অভাবের মতো সাধারণ সমস্যাগুলিকে হাইলাইট করে, একটি ইতিবাচক ব্যবহারকারীর অভিজ্ঞতার জন্য কাঠামোগত নেভিগেশনের গুরুত্বের উপর জোর দেয়। উপরন্তু, এটি বিভিন্ন বিভাগে সহজবোধ্য অ্যাক্সেস প্রদানের ক্ষেত্রে ট্যাব ডিভাইডারগুলির উপযোগিতা নির্দেশ করে, ব্যবহারের সহজতা এবং ওয়েব সামগ্রীর স্বজ্ঞাত অন্বেষণের সুবিধার্থে ডিজাইনে সরলতা এবং স্বচ্ছতার পক্ষে সমর্থন করে।",
                // Arabic
                "عَرَبِيّ": "يناقش الفصل أساسيات التنقل عبر الويب، ويشبهه بالتنقل في المساحات المادية ويؤكد على الحاجة إلى علامات واضحة مثل لافتات الشوارع وفتات الخبز وأسماء الصفحات المتسقة. وهو يسلط الضوء على المشكلات الشائعة مثل إهمال التنقل من المستوى الثالث ونقص إدراك الحجم على مواقع الويب، مع التركيز على أهمية التنقل المنظم للحصول على تجربة مستخدم إيجابية. بالإضافة إلى ذلك، يشير إلى فائدة مقسمات علامات التبويب في توفير الوصول المباشر إلى أقسام مختلفة، والدعوة إلى البساطة والوضوح في التصميم لتسهيل الاستخدام والاستكشاف البديهي لمحتوى الويب.",
                // Persian
                "فارسی": "در این فصل اصول ناوبری وب مورد بحث قرار می گیرد، آن را به پیمایش فضاهای فیزیکی تشبیه می کند و بر نیاز به نشانگرهای واضح مانند علائم خیابان، خرده نان، و نام صفحات ثابت تاکید می کند. این موضوع موضوعات رایجی مانند نادیده گرفتن ناوبری سطح سوم و عدم درک مقیاس در وب سایت ها را برجسته می کند و بر اهمیت ناوبری ساختاریافته برای تجربه کاربری مثبت تأکید می کند. علاوه بر این، به کاربرد تقسیم‌کننده‌های برگه در ارائه دسترسی مستقیم به بخش‌های مختلف، حمایت از سادگی و وضوح در طراحی برای تسهیل سهولت استفاده و کاوش بصری محتوای وب اشاره می‌کند.",
            },
        },
        // 7
        {
            "ChapterName": "The Big Bang Theory of Web Design",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter highlights the pivotal role of home pages in shaping user perceptions and guiding behavior, stressing the importance of addressing both concrete needs—such as displaying essential content and providing registration links—and abstract goals like directing users to desired content and building credibility. It underscores the necessity for taglines to articulate the site’s value propositions succinctly and for the home page to communicate the site’s purpose efficiently within a confined space. The text also cautions that compromises in home page design may result in the omission of significant elements, potentially leading to user confusion and a diminished user experience.",
                // German
                "Deutsch": "Das Kapitel hebt die zentrale Rolle von Homepages bei der Gestaltung der Benutzerwahrnehmung und der Verhaltenssteuerung hervor und betont, wie wichtig es ist, sowohl konkrete Bedürfnisse – wie die Anzeige wichtiger Inhalte und die Bereitstellung von Registrierungslinks – als auch abstrakte Ziele wie die Weiterleitung von Benutzern zu gewünschten Inhalten und den Aufbau von Glaubwürdigkeit zu erfüllen. Es unterstreicht die Notwendigkeit von Slogans, die die Wertversprechen der Site prägnant zum Ausdruck bringen, und von Homepages, die den Zweck der Site auf begrenztem Raum effizient kommunizieren. Der Text warnt auch davor, dass Kompromisse beim Design von Homepages zum Weglassen wichtiger Elemente führen können, was möglicherweise zu Verwirrung bei den Benutzern und einer beeinträchtigten Benutzererfahrung führt.",
                // Chinese
                "中国人": "本章强调了主页在塑造用户认知和引导行为方面的关键作用，强调了满足具体需求（例如显示基本内容和提供注册链接）和抽象目标（例如引导用户找到所需内容和建立信誉）的重要性。它强调了标语必须简洁地表达网站的价值主张，主页必须在有限的空间内有效地传达网站的目的。本文还警告说，主页设计中的妥协可能会导致重要元素的遗漏，从而可能导致用户困惑和用户体验下降。",
                // Russian
                "Русский": "В главе подчеркивается ключевая роль домашних страниц в формировании восприятия пользователей и управлении поведением, подчеркивая важность удовлетворения как конкретных потребностей, таких как отображение необходимого контента и предоставление ссылок для регистрации, так и абстрактных целей, таких как направление пользователей к желаемому контенту и создание доверия. Это подчеркивает необходимость того, чтобы слоганы лаконично формулировали ценностные предложения сайта, а главная страница эффективно сообщала о цели сайта в ограниченном пространстве. В тексте также предупреждается, что компромиссы в дизайне домашней страницы могут привести к пропуску важных элементов, что потенциально может привести к путанице пользователей и ухудшению пользовательского опыта.",
                // French
                "Français": "Le chapitre met en évidence le rôle central des pages d'accueil dans la formation des perceptions des utilisateurs et l'orientation de leur comportement, en soulignant l'importance de répondre à la fois aux besoins concrets (tels que l'affichage du contenu essentiel et la fourniture de liens d'inscription) et aux objectifs abstraits tels que diriger les utilisateurs vers le contenu souhaité et renforcer la crédibilité. Cela souligne la nécessité que les slogans articulent succinctement les propositions de valeur du site et que la page d’accueil communique efficacement l’objectif du site dans un espace confiné. Le texte met également en garde contre le fait que des compromis dans la conception de la page d'accueil peuvent entraîner l'omission d'éléments importants, ce qui pourrait entraîner une confusion chez l'utilisateur et une expérience utilisateur réduite.",
                // Japanese
                "日本語": "この章では、ホームページがユーザーの認識を形成し、行動を導く上で極めて重要な役割を果たしていることを強調し、重要なコンテンツの表示や登録リンクの提供などの具体的なニーズと、ユーザーを希望のコンテンツに誘導したり信頼性を構築したりするなどの抽象的な目標の両方に対応することの重要性を強調しています。また、タグラインでサイトの価値提案を簡潔に表現し、ホームページで限られたスペース内でサイトの目的を効率的に伝えることの必要性を強調しています。また、ホームページのデザインを妥協すると重要な要素が省略され、ユーザーの混乱やユーザー エクスペリエンスの低下につながる可能性があると警告しています。",
                // Korean
                "한국인": "이 장에서는 사용자 인식을 형성하고 행동을 안내하는 데 있어 홈 페이지의 중추적인 역할을 강조하고, 필수 콘텐츠 표시 및 등록 링크 제공과 같은 구체적인 요구 사항과 사용자를 원하는 콘텐츠로 안내하고 신뢰도 구축과 같은 추상적인 목표를 모두 해결하는 것의 중요성을 강조합니다. 이는 사이트의 가치 제안을 간결하게 표현하는 태그라인과 제한된 공간 내에서 사이트의 목적을 효율적으로 전달하는 홈 페이지의 필요성을 강조합니다. 또한 이 텍스트는 홈 페이지 디자인의 타협으로 인해 중요한 요소가 누락되어 잠재적으로 사용자 혼란과 사용자 경험 저하를 초래할 수 있다고 경고합니다.",
                // Spanish
                "Español": "El capítulo destaca el papel fundamental de las páginas de inicio a la hora de moldear las percepciones de los usuarios y guiar el comportamiento, destacando la importancia de abordar tanto necesidades concretas (como mostrar contenido esencial y proporcionar enlaces de registro) como objetivos abstractos como dirigir a los usuarios al contenido deseado y generar credibilidad. Subraya la necesidad de que los lemas articulen las propuestas de valor del sitio de manera sucinta y que la página de inicio comunique el propósito del sitio de manera eficiente dentro de un espacio reducido. El texto también advierte que los compromisos en el diseño de la página de inicio pueden resultar en la omisión de elementos importantes, lo que podría generar confusión en el usuario y una experiencia de usuario disminuida.",
                // Hindi
                "हिंदी": "अध्याय उपयोगकर्ता की धारणाओं को आकार देने और व्यवहार को निर्देशित करने में होम पेजों की महत्वपूर्ण भूमिका पर प्रकाश डालता है, जिसमें ठोस ज़रूरतों - जैसे कि आवश्यक सामग्री प्रदर्शित करना और पंजीकरण लिंक प्रदान करना - और उपयोगकर्ताओं को वांछित सामग्री पर निर्देशित करने और विश्वसनीयता बनाने जैसे अमूर्त लक्ष्यों को संबोधित करने के महत्व पर बल दिया गया है। यह टैगलाइन के लिए साइट के मूल्य प्रस्तावों को संक्षेप में व्यक्त करने और होम पेज के लिए सीमित स्थान के भीतर साइट के उद्देश्य को कुशलतापूर्वक संप्रेषित करने की आवश्यकता को रेखांकित करता है। पाठ यह भी चेतावनी देता है कि होम पेज डिज़ाइन में समझौता करने से महत्वपूर्ण तत्वों की कमी हो सकती है, जिससे संभावित रूप से उपयोगकर्ता भ्रम और कम उपयोगकर्ता अनुभव हो सकता है।",
                // Portuguese
                "Português": "O capítulo destaca o papel fundamental das páginas iniciais na formação das percepções dos utilizadores e na orientação do comportamento, sublinhando a importância de abordar tanto as necessidades concretas – como a exibição de conteúdos essenciais e o fornecimento de links de registo – como os objectivos abstratos, como direcionar os utilizadores para o conteúdo desejado e construir credibilidade. Ele ressalta a necessidade de que os slogans articulem as propostas de valor do site de forma sucinta e que a página inicial comunique o propósito do site de forma eficiente dentro de um espaço confinado. O texto também alerta que compromissos no design da página inicial podem resultar na omissão de elementos significativos, potencialmente levando à confusão do usuário e à diminuição da experiência do usuário.",
                // Bengali
                "বাংলা": "অধ্যায়টি ব্যবহারকারীর উপলব্ধি গঠনে এবং নির্দেশিকা আচরণের ক্ষেত্রে হোম পৃষ্ঠাগুলির প্রধান ভূমিকাকে হাইলাইট করে, উভয় কংক্রিট চাহিদাগুলিকে মোকাবেলার গুরুত্বের উপর জোর দেয়—যেমন অপরিহার্য বিষয়বস্তু প্রদর্শন করা এবং নিবন্ধন লিঙ্ক প্রদান করা—এবং ব্যবহারকারীদের পছন্দসই বিষয়বস্তুর দিকে পরিচালিত করা এবং বিশ্বাসযোগ্যতা তৈরি করার মতো বিমূর্ত লক্ষ্যগুলি। এটি সাইটের মান প্রস্তাবগুলিকে সংক্ষিপ্তভাবে প্রকাশ করার জন্য ট্যাগলাইনগুলির প্রয়োজনীয়তা এবং হোম পেজের জন্য একটি সীমিত স্থানের মধ্যে দক্ষতার সাথে সাইটের উদ্দেশ্য যোগাযোগের জন্য প্রয়োজনীয়তার উপর আন্ডারস্কোর করে৷ পাঠ্যটি আরও সতর্ক করে যে হোম পেজ ডিজাইনে আপস করার ফলে উল্লেখযোগ্য উপাদানগুলি বাদ পড়তে পারে, সম্ভাব্যভাবে ব্যবহারকারীর বিভ্রান্তি এবং ব্যবহারকারীর অভিজ্ঞতা হ্রাস পেতে পারে।",
                // Arabic
                "عَرَبِيّ": "يسلط الفصل الضوء على الدور المحوري للصفحات الرئيسية في تشكيل تصورات المستخدم وتوجيه السلوك، مع التركيز على أهمية تلبية الاحتياجات الملموسة - مثل عرض المحتوى الأساسي وتوفير روابط التسجيل - والأهداف المجردة مثل توجيه المستخدمين إلى المحتوى المطلوب وبناء المصداقية. إنه يؤكد على ضرورة أن توضح الخطوط الوصفية مقترحات القيمة الخاصة بالموقع بإيجاز وأن تقوم الصفحة الرئيسية بتوصيل غرض الموقع بكفاءة داخل مساحة محدودة. يحذر النص أيضًا من أن التنازلات في تصميم الصفحة الرئيسية قد تؤدي إلى إغفال عناصر مهمة، مما قد يؤدي إلى ارتباك المستخدم وتقليل تجربة المستخدم.",
                // Persian
                "فارسی": "این فصل نقش محوری صفحات اصلی را در شکل دادن به ادراکات کاربر و هدایت رفتار برجسته می‌کند و بر اهمیت پرداختن به نیازهای ملموس - مانند نمایش محتوای ضروری و ارائه پیوندهای ثبت نام - و اهداف انتزاعی مانند هدایت کاربران به محتوای مورد نظر و ایجاد اعتبار تأکید می‌کند. این امر بر ضرورت تشریح شعارهای پیشنهادی ارزش سایت به طور خلاصه و برای صفحه اصلی برای انتقال موثر هدف سایت در یک فضای محدود تاکید می کند. متن همچنین هشدار می دهد که سازش در طراحی صفحه اصلی ممکن است منجر به حذف عناصر مهم شود که به طور بالقوه منجر به سردرگمی کاربر و کاهش تجربه کاربر می شود.",
            },
        },
        // 8
        {
            "ChapterName": "'The Farmer and the Cowman Should Be Friends'",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter discusses the diversity of user reactions to web design elements, debunking the myth of the ‘Average User’ and highlighting the importance of usability testing to identify effective design strategies. It explores the challenges web teams face in making usability decisions, often influenced by personal and professional biases. The text emphasizes that usability testing is essential for resolving design debates, advocating for a focus on creating a positive user experience over individual preferences.",
                // German
                "Deutsch": "Das Kapitel befasst sich mit der Vielfalt der Benutzerreaktionen auf Webdesignelemente, entlarvt den Mythos des „durchschnittlichen Benutzers“ und unterstreicht die Bedeutung von Usability-Tests zur Ermittlung wirksamer Designstrategien. Es untersucht die Herausforderungen, denen sich Webteams bei der Entscheidungsfindung zur Benutzerfreundlichkeit gegenübersehen, die oft von persönlichen und beruflichen Vorurteilen beeinflusst werden. Der Text betont, dass Usability-Tests für die Lösung von Designdebatten von wesentlicher Bedeutung sind, und plädiert dafür, den Schwerpunkt auf die Schaffung einer positiven Benutzererfahrung statt auf individuelle Vorlieben zu legen.",
                // Chinese
                "中国人": "本章讨论了用户对网页设计元素的多种反应，揭穿了“普通用户”的神话，并强调了可用性测试对于确定有效设计策略的重要性。它探讨了网络团队在做出可用性决策时面临的挑战，这些挑战通常受到个人和专业偏见的影响。本文强调可用性测试对于解决设计争论至关重要，主张将重点放在创造积极的用户体验上，而不是个人偏好上。",
                // Russian
                "Русский": "В главе обсуждается разнообразие реакций пользователей на элементы веб-дизайна, развенчивается миф о «среднем пользователе» и подчеркивается важность тестирования юзабилити для определения эффективных стратегий дизайна. В нем исследуются проблемы, с которыми сталкиваются веб-команды при принятии решений об удобстве использования, на которые часто влияют личные и профессиональные предубеждения. В тексте подчеркивается, что тестирование юзабилити имеет важное значение для разрешения споров о дизайне, и пропагандируется акцент на создании положительного пользовательского опыта, а не на индивидуальных предпочтениях.",
                // French
                "Français": "Le chapitre aborde la diversité des réactions des utilisateurs aux éléments de conception Web, démystifiant le mythe de « l'utilisateur moyen » et soulignant l'importance des tests d'utilisabilité pour identifier des stratégies de conception efficaces. Il explore les défis auxquels les équipes Web sont confrontées pour prendre des décisions en matière d'utilisabilité, souvent influencées par des préjugés personnels et professionnels. Le texte souligne que les tests d'utilisabilité sont essentiels pour résoudre les débats sur la conception, plaidant pour une concentration sur la création d'une expérience utilisateur positive plutôt que sur les préférences individuelles.",
                // Japanese
                "日本語": "この章では、Web デザインの要素に対するユーザーの反応の多様性について説明し、「平均的なユーザー」という神話を覆し、効果的なデザイン戦略を特定するためのユーザビリティ テストの重要性を強調しています。また、個人的および職業的な偏見に左右されることが多い、ユーザビリティの決定を行う際に Web チームが直面する課題についても取り上げています。テキストでは、ユーザビリティ テストがデザインに関する議論を解決するために不可欠であることを強調し、個人の好みよりも肯定的なユーザー エクスペリエンスを作成することに重点を置くことを提唱しています。",
                // Korean
                "한국인": "이 장에서는 웹 디자인 요소에 대한 사용자 반응의 다양성을 논의하고 '평균 사용자'에 대한 통념을 폭로하며 효과적인 디자인 전략을 식별하기 위한 사용성 테스트의 중요성을 강조합니다. 이는 웹 팀이 사용성 결정을 내릴 때 직면하는 어려움을 탐구하며, 종종 개인적 및 직업적 편견의 영향을 받습니다. 이 텍스트는 사용성 테스트가 디자인 논쟁을 해결하는 데 필수적이라는 점을 강조하고 개인 선호도보다 긍정적인 사용자 경험을 만드는 데 중점을 둘 것을 옹호합니다.",
                // Spanish
                "Español": "El capítulo analiza la diversidad de reacciones de los usuarios a los elementos de diseño web, desacreditando el mito del 'usuario promedio' y destacando la importancia de las pruebas de usabilidad para identificar estrategias de diseño efectivas. Explora los desafíos que enfrentan los equipos web al tomar decisiones de usabilidad, a menudo influenciados por prejuicios personales y profesionales. El texto enfatiza que las pruebas de usabilidad son esenciales para resolver los debates sobre el diseño, abogando por centrarse en crear una experiencia de usuario positiva por encima de las preferencias individuales.",
                // Hindi
                "हिंदी": "अध्याय में वेब डिज़ाइन तत्वों के प्रति उपयोगकर्ता प्रतिक्रियाओं की विविधता पर चर्चा की गई है, ‘औसत उपयोगकर्ता’ के मिथक को खारिज किया गया है और प्रभावी डिज़ाइन रणनीतियों की पहचान करने के लिए प्रयोज्यता परीक्षण के महत्व पर प्रकाश डाला गया है। यह प्रयोज्यता निर्णय लेने में वेब टीमों के सामने आने वाली चुनौतियों का पता लगाता है, जो अक्सर व्यक्तिगत और व्यावसायिक पूर्वाग्रहों से प्रभावित होते हैं। पाठ इस बात पर जोर देता है कि डिज़ाइन बहस को हल करने के लिए प्रयोज्यता परीक्षण आवश्यक है, व्यक्तिगत प्राथमिकताओं पर सकारात्मक उपयोगकर्ता अनुभव बनाने पर ध्यान केंद्रित करने की वकालत करता है।",
                // Portuguese
                "Português": "O capítulo discute a diversidade de reações dos usuários aos elementos de web design, desmascarando o mito do “usuário médio” e destacando a importância dos testes de usabilidade para identificar estratégias de design eficazes. Ele explora os desafios que as equipes web enfrentam na tomada de decisões sobre usabilidade, muitas vezes influenciadas por preconceitos pessoais e profissionais. O texto enfatiza que os testes de usabilidade são essenciais para resolver debates sobre design, defendendo o foco na criação de uma experiência de usuário positiva em detrimento das preferências individuais.",
                // Bengali
                "বাংলা": "অধ্যায়টি ওয়েব ডিজাইনের উপাদানগুলির প্রতি ব্যবহারকারীর প্রতিক্রিয়ার বৈচিত্র্য নিয়ে আলোচনা করে, 'গড় ব্যবহারকারী'-এর মিথকে ডিবাঙ্ক করে এবং কার্যকর ডিজাইনের কৌশলগুলি সনাক্ত করতে ব্যবহারযোগ্যতা পরীক্ষার গুরুত্ব তুলে ধরে। এটি ব্যবহারযোগ্যতার সিদ্ধান্ত নেওয়ার ক্ষেত্রে ওয়েব দলগুলি যে চ্যালেঞ্জগুলির মুখোমুখি হয় তা অন্বেষণ করে, প্রায়শই ব্যক্তিগত এবং পেশাদার পক্ষপাত দ্বারা প্রভাবিত হয়। পাঠ্যটি জোর দেয় যে ডিজাইন বিতর্কগুলি সমাধানের জন্য ব্যবহারযোগ্যতা পরীক্ষা অপরিহার্য, ব্যক্তিগত পছন্দগুলির উপর একটি ইতিবাচক ব্যবহারকারীর অভিজ্ঞতা তৈরিতে ফোকাস করার পক্ষে সমর্থন করে৷",
                // Arabic
                "عَرَبِيّ": "يناقش الفصل تنوع ردود فعل المستخدم تجاه عناصر تصميم الويب، ويكشف زيف أسطورة 'المستخدم العادي' ويسلط الضوء على أهمية اختبار قابلية الاستخدام لتحديد استراتيجيات التصميم الفعالة. وهو يستكشف التحديات التي تواجهها فرق الويب في اتخاذ قرارات قابلية الاستخدام، والتي غالبًا ما تتأثر بالتحيزات الشخصية والمهنية. يؤكد النص على أن اختبار قابلية الاستخدام ضروري لحل مناقشات التصميم، ويدعو إلى التركيز على خلق تجربة مستخدم إيجابية على التفضيلات الفردية.",
                // Persian
                "فارسی": "این فصل تنوع واکنش های کاربر به عناصر طراحی وب را مورد بحث قرار می دهد، افسانه «کاربر متوسط» را از بین می برد و اهمیت تست قابلیت استفاده برای شناسایی استراتژی های طراحی موثر را برجسته می کند. این چالش‌ها را بررسی می‌کند که تیم‌های وب در تصمیم‌گیری در مورد قابلیت استفاده با آن‌ها مواجه هستند، که اغلب تحت تأثیر تعصبات شخصی و حرفه‌ای قرار دارند. متن تاکید می کند که تست قابلیت استفاده برای حل و فصل بحث های طراحی ضروری است و از تمرکز بر ایجاد یک تجربه کاربری مثبت بر ترجیحات فردی حمایت می کند.",
            },
        },
        // 9
        {
            "ChapterName": "Usability testing on 10 cents a day",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter conveys that effective usability testing does not require participants with a specific profile, making it accessible and practical for identifying issues on websites with usability flaws. It advocates for the cost-effectiveness and simplicity of DIY usability testing, as detailed in the recommended book 'Rocket Surgery Made Easy'. For optimal results, it suggests a regular testing schedule with three users each month to consistently identify and resolve problems, emphasizing the approachability and efficiency of this method in improving website usability.",
                // German
                "Deutsch": "Das Kapitel vermittelt, dass effektive Usability-Tests keine Teilnehmer mit einem bestimmten Profil erfordern, was sie zugänglich und praktisch macht, um Probleme auf Websites mit Usability-Mängeln zu identifizieren. Es plädiert für die Kosteneffizienz und Einfachheit von DIY-Usability-Tests, wie sie im empfohlenen Buch „Rocket Surgery Made Easy“ ausführlich beschrieben werden. Für optimale Ergebnisse wird ein regelmäßiger Testplan mit drei Benutzern pro Monat vorgeschlagen, um Probleme konsequent zu identifizieren und zu lösen, und betont die Zugänglichkeit und Effizienz dieser Methode bei der Verbesserung der Website-Usability.",
                // Chinese
                "中国人": "本章表明，有效的可用性测试不需要具有特定个人资料的参与者，因此它对于识别存在可用性缺陷的网站上的问题来说既方便又实用。它提倡 DIY 可用性测试的成本效益和简单性，正如推荐书《火箭手术变得简单》中详细介绍的那样。为了获得最佳效果，它建议每月与三个用户进行定期测试，以持续识别和解决问题，强调这种方法在提高网站可用性方面的可行性和效率。",
                // Russian
                "Русский": "В главе говорится, что эффективное тестирование юзабилити не требует участия участников с определенным профилем, что делает его доступным и практичным для выявления проблем на веб-сайтах с недостатками юзабилити. Он выступает за экономичность и простоту тестирования удобства использования своими руками, как подробно описано в рекомендуемой книге «Ракетная хирургия стала проще». Для достижения оптимальных результатов предлагается проводить регулярное тестирование с тремя пользователями каждый месяц для последовательного выявления и решения проблем, подчеркивая доступность и эффективность этого метода для улучшения удобства использования веб-сайта.",
                // French
                "Français": "Le chapitre indique qu'un test d'utilisabilité efficace ne nécessite pas de participants ayant un profil spécifique, ce qui le rend accessible et pratique pour identifier les problèmes sur les sites Web présentant des défauts d'utilisabilité. Il plaide en faveur de la rentabilité et de la simplicité des tests d'utilisabilité DIY, comme détaillé dans le livre recommandé « Rocket Surgery Made Easy ». Pour des résultats optimaux, il suggère un programme de tests réguliers avec trois utilisateurs chaque mois pour identifier et résoudre systématiquement les problèmes, en mettant l'accent sur l'accessibilité et l'efficacité de cette méthode pour améliorer la convivialité du site Web.",
                // Japanese
                "日本語": "この章では、効果的なユーザビリティ テストには特定のプロファイルを持つ参加者は必要なく、ユーザビリティに欠陥のある Web サイトの問題を特定するためにアクセスしやすく実用的であるということを伝えています。推奨書籍「Rocket Surgery Made Easy」で詳しく説明されているように、DIY ユーザビリティ テストのコスト効率とシンプルさを推奨しています。最適な結果を得るには、毎月 3 人のユーザーによる定期的なテスト スケジュールを提案し、一貫して問題を特定して解決することを提案し、Web サイトのユーザビリティを向上させるこの方法のアプローチしやすさと効率性を強調しています。",
                // Korean
                "한국인": "이 장에서는 효과적인 사용성 테스트에는 참가자에게 특정 프로필이 필요하지 않으므로 사용성 결함이 있는 웹 사이트의 문제를 식별하는 데 접근 가능하고 실용적이라는 점을 전달합니다. 추천 도서 'Rocket Surgery Made Easy'에 자세히 설명된 대로 DIY 유용성 테스트의 비용 효율성과 단순성을 옹호합니다. 최적의 결과를 얻으려면 매월 3명의 사용자를 대상으로 정기적인 테스트 일정을 제안하여 지속적으로 문제를 식별하고 해결하며, 웹 사이트 사용성을 향상시키는 데 있어 이 방법의 접근성과 효율성을 강조합니다.",
                // Spanish
                "Español": "El capítulo transmite que las pruebas de usabilidad efectivas no requieren participantes con un perfil específico, lo que las hace accesibles y prácticas para identificar problemas en sitios web con fallas de usabilidad. Aboga por la rentabilidad y la simplicidad de las pruebas de usabilidad hechas por usted mismo, como se detalla en el libro recomendado 'Rocket Surgery Made Easy'. Para obtener resultados óptimos, sugiere un programa de pruebas regular con tres usuarios cada mes para identificar y resolver problemas de manera consistente, enfatizando la accesibilidad y eficiencia de este método para mejorar la usabilidad del sitio web.",
                // Hindi
                "हिंदी": "अध्याय बताता है कि प्रभावी प्रयोज्यता परीक्षण के लिए किसी विशिष्ट प्रोफ़ाइल वाले प्रतिभागियों की आवश्यकता नहीं होती है, जिससे प्रयोज्यता दोषों वाली वेबसाइटों पर समस्याओं की पहचान करने के लिए यह सुलभ और व्यावहारिक हो जाता है। यह DIY प्रयोज्यता परीक्षण की लागत-प्रभावशीलता और सरलता की वकालत करता है, जैसा कि अनुशंसित पुस्तक 'रॉकेट सर्जरी मेड ईज़ी' में विस्तृत है। इष्टतम परिणामों के लिए, यह समस्याओं की लगातार पहचान करने और उन्हें हल करने के लिए हर महीने तीन उपयोगकर्ताओं के साथ एक नियमित परीक्षण कार्यक्रम का सुझाव देता है, वेबसाइट प्रयोज्यता में सुधार करने में इस पद्धति की पहुंच और दक्षता पर जोर देता है।",
                // Portuguese
                "Português": "O capítulo transmite que testes de usabilidade eficazes não requerem participantes com perfil específico, tornando-os acessíveis e práticos para identificar problemas em sites com falhas de usabilidade. Ele defende a relação custo-benefício e a simplicidade dos testes de usabilidade DIY, conforme detalhado no livro recomendado 'Rocket Surgery Made Easy'. Para obter os melhores resultados, sugere um cronograma regular de testes com três usuários por mês para identificar e resolver problemas de forma consistente, enfatizando a acessibilidade e eficiência deste método na melhoria da usabilidade do site.",
                // Bengali
                "বাংলা": "অধ্যায়টি বোঝায় যে কার্যকর ব্যবহারযোগ্যতা পরীক্ষার জন্য একটি নির্দিষ্ট প্রোফাইল সহ অংশগ্রহণকারীদের প্রয়োজন হয় না, এটি ব্যবহারযোগ্যতা ত্রুটিযুক্ত ওয়েবসাইটগুলিতে সমস্যাগুলি সনাক্ত করার জন্য এটি অ্যাক্সেসযোগ্য এবং ব্যবহারিক করে তোলে। এটি DIY ব্যবহারযোগ্যতা পরীক্ষার ব্যয়-কার্যকারিতা এবং সরলতার পক্ষে সমর্থন করে, যেমনটি প্রস্তাবিত বই 'রকেট সার্জারি মেড ইজি'-তে বিশদ বিবরণ দেওয়া হয়েছে। সর্বোত্তম ফলাফলের জন্য, এটি প্রতি মাসে তিনজন ব্যবহারকারীর সাথে নিয়মিত পরীক্ষার সময়সূচী প্রস্তাব করে যাতে সমস্যাগুলি চিহ্নিত করা যায় এবং সমাধান করা যায়, ওয়েবসাইটের ব্যবহারযোগ্যতা উন্নত করার ক্ষেত্রে এই পদ্ধতির ব্যবহারযোগ্যতা এবং দক্ষতার উপর জোর দেওয়া হয়।",
                // Arabic
                "عَرَبِيّ": "يشير الفصل إلى أن اختبار قابلية الاستخدام الفعال لا يتطلب من المشاركين ملف تعريف محدد، مما يجعله سهل الوصول إليه وعمليًا لتحديد المشكلات على مواقع الويب التي بها عيوب في قابلية الاستخدام. وهو يدعو إلى فعالية التكلفة وبساطة اختبار سهولة الاستخدام الذي يتم تنفيذه بنفسك، كما هو مفصل في الكتاب الموصى به 'جراحة الصواريخ أصبحت سهلة'. للحصول على أفضل النتائج، يقترح جدول اختبار منتظم مع ثلاثة مستخدمين كل شهر لتحديد المشكلات وحلها باستمرار، مع التركيز على سهولة الوصول إلى هذه الطريقة وكفاءتها في تحسين سهولة استخدام موقع الويب.",
                // Persian
                "فارسی": "این فصل بیان می‌کند که آزمایش قابلیت استفاده مؤثر به شرکت‌کنندگانی با مشخصات خاصی نیاز ندارد، و آن را برای شناسایی مشکلات در وب‌سایت‌های دارای نقص قابلیت استفاده در دسترس و کاربردی می‌سازد. این از مقرون به صرفه بودن و سادگی تست قابلیت استفاده DIY حمایت می کند، همانطور که در کتاب توصیه شده 'راکت جراحی آسان شده' توضیح داده شده است. برای نتایج بهینه، یک برنامه آزمایشی منظم با سه کاربر در هر ماه برای شناسایی و حل مشکلات به طور مداوم پیشنهاد می‌کند و بر قابلیت دسترسی و کارایی این روش در بهبود قابلیت استفاده وب‌سایت تأکید می‌کند.",
            },
        },
        // 10
        {
            "ChapterName": "Mobile: It's not just a city in Alabama anymore",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter discusses the unique challenges and opportunities in mobile usability, emphasizing the need for thoughtful design decisions due to limited screen size and the potential pitfalls of flat design on user affordance perception. It highlights the importance of balancing feature-rich apps with learnability, advocating for clear instructions to aid user comprehension. The complexity of setting up usability tests for mobile devices is acknowledged, with a call to consider the nuances of participant device usage and observer requirements. Looking forward, the chapter underscores the immense potential for enhancing user experience through mobile devices, while reinforcing the critical role of usability testing in achieving successful app design.",
                // German
                "Deutsch": "Das Kapitel erörtert die einzigartigen Herausforderungen und Chancen der mobilen Benutzerfreundlichkeit und betont die Notwendigkeit durchdachter Designentscheidungen aufgrund der begrenzten Bildschirmgröße und der potenziellen Fallstricke des flachen Designs hinsichtlich der Wahrnehmung der Benutzerfreundlichkeit. Es hebt die Bedeutung der Balance zwischen funktionsreichen Apps und Lernbarkeit hervor und plädiert für klare Anweisungen, um das Verständnis des Benutzers zu unterstützen. Die Komplexität der Einrichtung von Usability-Tests für mobile Geräte wird anerkannt und dazu aufgerufen, die Nuancen der Gerätenutzung der Teilnehmer und der Anforderungen der Beobachter zu berücksichtigen. Mit Blick auf die Zukunft unterstreicht das Kapitel das immense Potenzial zur Verbesserung der Benutzererfahrung durch mobile Geräte und bekräftigt gleichzeitig die entscheidende Rolle von Usability-Tests für ein erfolgreiches App-Design.",
                // Chinese
                "中国人": "本章讨论了移动可用性方面的独特挑战和机遇，强调由于屏幕尺寸有限以及扁平设计对用户感知的潜在缺陷，需要深思熟虑的设计决策。它强调了平衡功能丰富的应用程序与易学性的重要性，提倡使用清晰的说明来帮助用户理解。承认为移动设备设置可用性测试的复杂性，并呼吁考虑参与者设备使用和观察者要求的细微差别。展望未来，本章强调了通过移动设备增强用户体验的巨大潜力，同时强调了可用性测试在实现成功的应用程序设计中的关键作用。",
                // Russian
                "Русский": "В главе обсуждаются уникальные проблемы и возможности мобильного юзабилити, подчеркивается необходимость продуманных дизайнерских решений из-за ограниченного размера экрана и потенциальных ошибок плоского дизайна для восприятия возможностей пользователя. Он подчеркивает важность баланса между многофункциональными приложениями и обучаемостью, а также призывает к четким инструкциям, которые облегчат понимание пользователем. Признается сложность настройки юзабилити-тестов для мобильных устройств с призывом учитывать нюансы использования устройств участников и требования к наблюдателям. Заглядывая в будущее, в этой главе подчеркивается огромный потенциал улучшения пользовательского опыта с помощью мобильных устройств, а также подчеркивается решающая роль юзабилити-тестирования в достижении успешного дизайна приложений.",
                // French
                "Français": "Le chapitre aborde les défis et opportunités uniques en matière d'utilisabilité mobile, en soulignant la nécessité de décisions de conception réfléchies en raison de la taille limitée de l'écran et des pièges potentiels du design plat sur la perception des moyens par l'utilisateur. Il souligne l’importance d’équilibrer les applications riches en fonctionnalités avec la facilité d’apprentissage, en préconisant des instructions claires pour faciliter la compréhension de l’utilisateur. La complexité de la mise en place de tests d'utilisabilité pour les appareils mobiles est reconnue, avec un appel à prendre en compte les nuances d'utilisation des appareils des participants et les exigences des observateurs. Pour l’avenir, le chapitre souligne l’immense potentiel d’amélioration de l’expérience utilisateur via les appareils mobiles, tout en renforçant le rôle essentiel des tests d’utilisabilité dans la réussite de la conception d’applications.",
                // Japanese
                "日本語": "この章では、モバイル ユーザビリティの特有の課題と機会について説明し、画面サイズが限られているため、設計上の決定を慎重に行う必要があること、およびフラット デザインがユーザーのアフォーダンス認識に与える潜在的な落とし穴について強調しています。また、機能豊富なアプリと学習しやすさのバランスをとることの重要性を強調し、ユーザーの理解を助ける明確な指示を推奨しています。モバイル デバイスのユーザビリティ テストの設定の複雑さが認識されており、参加者のデバイス使用状況と観察者の要件の微妙な違いを考慮するよう呼びかけています。将来を見据えて、この章では、モバイル デバイスによるユーザー エクスペリエンスの向上の大きな可能性を強調するとともに、アプリ設計を成功させる上でのユーザビリティ テストの重要な役割を強調しています。",
                // Korean
                "한국인": "이 장에서는 제한된 화면 크기로 인한 사려 깊은 디자인 결정의 필요성과 사용자 어포던스 인식에 대한 플랫 디자인의 잠재적 함정을 강조하면서 모바일 사용성에 대한 고유한 과제와 기회에 대해 논의합니다. 이는 기능이 풍부한 앱과 학습 가능성의 균형을 맞추는 것의 중요성을 강조하고 사용자 이해를 돕기 위한 명확한 지침을 옹호합니다. 모바일 장치에 대한 유용성 테스트 설정의 복잡성은 참가자 장치 사용 및 관찰자 요구 사항의 미묘한 차이를 고려하라는 요청과 함께 인정됩니다. 앞으로 이 장에서는 성공적인 앱 디자인을 달성하는 데 있어 사용성 테스트의 중요한 역할을 강화하는 동시에 모바일 장치를 통해 사용자 경험을 향상시킬 수 있는 엄청난 잠재력을 강조합니다.",
                // Spanish
                "Español": "El capítulo analiza los desafíos y oportunidades únicos en la usabilidad móvil, enfatizando la necesidad de tomar decisiones de diseño bien pensadas debido al tamaño limitado de la pantalla y los peligros potenciales del diseño plano en la percepción de asequibilidad del usuario. Destaca la importancia de equilibrar las aplicaciones ricas en funciones con la capacidad de aprendizaje, abogando por instrucciones claras para ayudar a la comprensión del usuario. Se reconoce la complejidad de configurar pruebas de usabilidad para dispositivos móviles, con un llamado a considerar los matices del uso de los dispositivos de los participantes y los requisitos de los observadores. De cara al futuro, el capítulo subraya el inmenso potencial para mejorar la experiencia del usuario a través de dispositivos móviles, al tiempo que refuerza el papel fundamental de las pruebas de usabilidad para lograr un diseño exitoso de aplicaciones.",
                // Hindi
                "हिंदी": "अध्याय मोबाइल प्रयोज्यता में अद्वितीय चुनौतियों और अवसरों पर चर्चा करता है, सीमित स्क्रीन आकार के कारण विचारशील डिजाइन निर्णयों की आवश्यकता और उपयोगकर्ता की सामर्थ्य धारणा पर फ्लैट डिजाइन के संभावित नुकसान पर जोर देता है। यह उपयोगकर्ता की समझ में सहायता करने के लिए स्पष्ट निर्देशों की वकालत करते हुए, सीखने की क्षमता के साथ सुविधा संपन्न ऐप्स को संतुलित करने के महत्व पर प्रकाश डालता है। मोबाइल उपकरणों के लिए प्रयोज्यता परीक्षण स्थापित करने की जटिलता को स्वीकार किया जाता है, जिसमें प्रतिभागी डिवाइस उपयोग और पर्यवेक्षक आवश्यकताओं की बारीकियों पर विचार करने का आह्वान किया जाता है। आगे देखते हुए, अध्याय मोबाइल उपकरणों के माध्यम से उपयोगकर्ता अनुभव को बढ़ाने की अपार संभावनाओं को रेखांकित करता है, जबकि सफल ऐप डिज़ाइन प्राप्त करने में प्रयोज्यता परीक्षण की महत्वपूर्ण भूमिका को सुदृढ़ करता है।",
                // Portuguese
                "Português": "O capítulo discute os desafios e oportunidades únicos na usabilidade móvel, enfatizando a necessidade de decisões de design bem pensadas devido ao tamanho limitado da tela e às possíveis armadilhas do design plano na percepção de recursos do usuário. Ele destaca a importância de equilibrar aplicativos ricos em recursos com capacidade de aprendizagem, defendendo instruções claras para ajudar na compreensão do usuário. A complexidade da configuração de testes de usabilidade para dispositivos móveis é reconhecida, com um apelo para considerar as nuances do uso dos dispositivos dos participantes e os requisitos do observador. Olhando para o futuro, o capítulo sublinha o imenso potencial para melhorar a experiência do utilizador através de dispositivos móveis, ao mesmo tempo que reforça o papel crítico dos testes de usabilidade na obtenção de um design de aplicações bem-sucedido.",
                // Bengali
                "বাংলা": "অধ্যায়টি মোবাইল ব্যবহারযোগ্যতার অনন্য চ্যালেঞ্জ এবং সুযোগগুলি নিয়ে আলোচনা করে, সীমিত স্ক্রীনের আকারের কারণে এবং ব্যবহারকারীর সামর্থ্য উপলব্ধিতে ফ্ল্যাট ডিজাইনের সম্ভাব্য ত্রুটিগুলির কারণে চিন্তাশীল ডিজাইনের সিদ্ধান্তের প্রয়োজনীয়তার উপর জোর দেয়। এটি শেখার যোগ্যতার সাথে বৈশিষ্ট্য-সমৃদ্ধ অ্যাপগুলির ভারসাম্য বজায় রাখার গুরুত্ব তুলে ধরে, ব্যবহারকারীর বোঝার জন্য সাহায্য করার জন্য স্পষ্ট নির্দেশাবলীর পক্ষে কথা বলে। অংশগ্রহণকারী ডিভাইসের ব্যবহার এবং পর্যবেক্ষকের প্রয়োজনীয়তার সূক্ষ্মতা বিবেচনা করার জন্য একটি কল সহ মোবাইল ডিভাইসের জন্য ব্যবহারযোগ্যতা পরীক্ষা সেট আপ করার জটিলতা স্বীকার করা হয়। সামনের দিকে তাকিয়ে, অধ্যায়টি মোবাইল ডিভাইসের মাধ্যমে ব্যবহারকারীর অভিজ্ঞতা বাড়ানোর অপার সম্ভাবনাকে আন্ডারস্কোর করে, পাশাপাশি সফল অ্যাপ ডিজাইন অর্জনে ব্যবহারযোগ্যতা পরীক্ষার গুরুত্বপূর্ণ ভূমিকাকে শক্তিশালী করে।",
                // Arabic
                "عَرَبِيّ": "يناقش الفصل التحديات والفرص الفريدة في سهولة الاستخدام على الأجهزة المحمولة، مع التركيز على الحاجة إلى قرارات تصميم مدروسة نظرًا لحجم الشاشة المحدود والمزالق المحتملة للتصميم المسطح على تصور المستخدم للقدرة على تحمل التكاليف. وهو يسلط الضوء على أهمية الموازنة بين التطبيقات الغنية بالميزات وقابلية التعلم، ويدعو إلى تعليمات واضحة لمساعدة المستخدم على الفهم. تم الاعتراف بتعقيد إعداد اختبارات قابلية الاستخدام للأجهزة المحمولة، مع دعوة للنظر في الفروق الدقيقة في استخدام جهاز المشارك ومتطلبات المراقب. وبالنظر إلى المستقبل، يؤكد الفصل على الإمكانات الهائلة لتعزيز تجربة المستخدم من خلال الأجهزة المحمولة، مع تعزيز الدور الحاسم لاختبار قابلية الاستخدام في تحقيق تصميم ناجح للتطبيق.",
                // Persian
                "فارسی": "این فصل چالش‌ها و فرصت‌های منحصربه‌فرد در قابلیت استفاده از تلفن همراه را مورد بحث قرار می‌دهد، و بر نیاز به تصمیم‌گیری‌های طراحی متفکرانه به دلیل اندازه محدود صفحه نمایش و مشکلات بالقوه طراحی مسطح بر درک استطاعت کاربر تأکید می‌کند. اهمیت تعادل برنامه های غنی از ویژگی با قابلیت یادگیری را برجسته می کند و از دستورالعمل های واضح برای کمک به درک کاربر حمایت می کند. پیچیدگی راه‌اندازی تست‌های قابلیت استفاده برای دستگاه‌های تلفن همراه با فراخوانی برای در نظر گرفتن تفاوت‌های ظریف استفاده از دستگاه شرکت‌کننده و الزامات ناظر تأیید شده است. با نگاه به آینده، این فصل بر پتانسیل بسیار زیاد برای افزایش تجربه کاربر از طریق دستگاه های تلفن همراه تاکید می کند، در حالی که نقش مهم تست قابلیت استفاده در دستیابی به طراحی موفق برنامه را تقویت می کند.",
            },
        },
        // 11
        {
            "ChapterName": "Usability as common courtesy",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter underscores the concept of a ‘Reservoir of Goodwill’ that users have towards websites, which can diminish with negative experiences. It posits that usability equates to courtesy, suggesting that websites should anticipate and answer frequently asked questions, offer comfort features, and streamline processes to improve the user experience. The essence of considerate design is highlighted, emphasizing the importance of providing clear information, minimizing user effort, and investing in a thoughtful user experience as key factors in the success of a website.",
                // German
                "Deutsch": "Das Kapitel unterstreicht das Konzept eines „Reservoirs an Wohlwollen“, das Benutzer gegenüber Websites haben und das durch negative Erfahrungen schwinden kann. Es geht davon aus, dass Benutzerfreundlichkeit gleichbedeutend mit Höflichkeit ist, und schlägt vor, dass Websites häufig gestellte Fragen vorwegnehmen und beantworten, Komfortfunktionen bieten und Prozesse optimieren sollten, um das Benutzererlebnis zu verbessern. Das Wesentliche eines durchdachten Designs wird hervorgehoben und die Bedeutung der Bereitstellung klarer Informationen, der Minimierung des Benutzeraufwands und der Investition in ein durchdachtes Benutzererlebnis als Schlüsselfaktoren für den Erfolg einer Website hervorgehoben.",
                // Chinese
                "中国人": "本章强调了用户对网站“善意储备”的概念，这种善意会因负面体验而减少。它认为可用性等同于礼貌，建议网站应预测和回答常见问题、提供舒适功能并简化流程以改善用户体验。本章强调了体贴设计的本质，强调提供清晰信息、最大限度地减少用户工作量以及投资周到的用户体验是网站成功的关键因素。",
                // Russian
                "Русский": "В этой главе подчеркивается концепция «резервуара доброй воли» пользователей по отношению к веб-сайтам, который может уменьшаться в результате негативного опыта. Он утверждает, что удобство использования приравнивается к вежливости, предполагая, что веб-сайты должны предвидеть и отвечать на часто задаваемые вопросы, предлагать функции комфорта и оптимизировать процессы для улучшения пользовательского опыта. Выделена суть продуманного дизайна, подчеркивая важность предоставления четкой информации, минимизации усилий пользователя и инвестирования в продуманный пользовательский опыт как ключевые факторы успеха веб-сайта.",
                // French
                "Français": "Le chapitre souligne le concept de « réservoir de bonne volonté » dont disposent les utilisateurs envers les sites Web, et qui peut diminuer avec les expériences négatives. Il postule que la convivialité équivaut à la courtoisie, suggérant que les sites Web doivent anticiper et répondre aux questions fréquemment posées, offrir des fonctionnalités de confort et rationaliser les processus pour améliorer l'expérience utilisateur. L'essence d'une conception réfléchie est mise en évidence, en soulignant l'importance de fournir des informations claires, de minimiser les efforts de l'utilisateur et d'investir dans une expérience utilisateur réfléchie en tant que facteurs clés du succès d'un site Web.",
                // Japanese
                "日本語": "この章では、ユーザーがウェブサイトに対して抱く「善意の蓄積」という概念を強調しています。この善意は、ネガティブな体験によって減少する可能性があります。この章では、使いやすさは礼儀正しさに等しいと仮定し、ウェブサイトはよくある質問を予測して回答し、快適な機能を提供し、プロセスを合理化してユーザー エクスペリエンスを向上させる必要があると示唆しています。思慮深いデザインの本質が強調され、明確な情報を提供すること、ユーザーの労力を最小限に抑えること、思慮深いユーザー エクスペリエンスに投資することが、ウェブサイトの成功の鍵となる要素であることを強調しています。",
                // Korean
                "한국인": "이 장에서는 사용자가 웹사이트에 대해 가지고 있는 '선의의 저장소'라는 개념을 강조하며, 이는 부정적인 경험으로 인해 줄어들 수 있습니다. 이는 유용성이 예의와 동일하다고 가정하여 웹사이트가 자주 묻는 질문을 예측하고 답변하며, 편안한 기능을 제공하고, 프로세스를 간소화하여 사용자 경험을 개선해야 한다고 제안합니다. 웹 사이트 성공의 핵심 요소로서 명확한 정보 제공, 사용자 노력 최소화, 사려 깊은 사용자 경험에 대한 투자의 중요성을 강조하면서 사려 깊은 디자인의 본질을 강조합니다.",
                // Spanish
                "Español": "El capítulo subraya el concepto de una “reserva de buena voluntad” que los usuarios tienen hacia los sitios web, que puede disminuir con experiencias negativas. Plantea que la usabilidad equivale a cortesía, lo que sugiere que los sitios web deben anticipar y responder las preguntas frecuentes, ofrecer funciones cómodas y agilizar los procesos para mejorar la experiencia del usuario. Se destaca la esencia del diseño considerado, enfatizando la importancia de proporcionar información clara, minimizar el esfuerzo del usuario e invertir en una experiencia de usuario reflexiva como factores clave para el éxito de un sitio web.",
                // Hindi
                "हिंदी": "यह अध्याय वेबसाइटों के प्रति उपयोगकर्ताओं की ‘सद्भावना के भंडार’ की अवधारणा को रेखांकित करता है, जो नकारात्मक अनुभवों के साथ कम हो सकता है। यह मानता है कि प्रयोज्यता शिष्टाचार के बराबर है, यह सुझाव देते हुए कि वेबसाइटों को अक्सर पूछे जाने वाले प्रश्नों का अनुमान लगाना चाहिए और उनका उत्तर देना चाहिए, आरामदायक सुविधाएँ प्रदान करनी चाहिए, और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए प्रक्रियाओं को सुव्यवस्थित करना चाहिए। विचारशील डिज़ाइन का सार उजागर किया गया है, स्पष्ट जानकारी प्रदान करने, उपयोगकर्ता के प्रयास को कम करने और एक वेबसाइट की सफलता में महत्वपूर्ण कारकों के रूप में एक विचारशील उपयोगकर्ता अनुभव में निवेश करने के महत्व पर जोर दिया गया है।",
                // Portuguese
                "Português": "O capítulo sublinha o conceito de “reservatório de boa vontade” que os utilizadores têm em relação aos websites, que pode diminuir com experiências negativas. Ele postula que usabilidade equivale a cortesia, sugerindo que os sites devem antecipar e responder às perguntas mais frequentes, oferecer recursos de conforto e agilizar processos para melhorar a experiência do usuário. A essência do design atencioso é destacada, enfatizando a importância de fornecer informações claras, minimizar o esforço do usuário e investir em uma experiência de usuário criteriosa como fatores-chave para o sucesso de um site.",
                // Bengali
                "বাংলা": "অধ্যায়টি একটি 'গুডউইলের জলাধার' এর ধারণাকে আন্ডারস্কোর করে যা ব্যবহারকারীদের ওয়েবসাইটগুলির প্রতি রয়েছে, যা নেতিবাচক অভিজ্ঞতার সাথে হ্রাস পেতে পারে। এটি বিশ্বাস করে যে ব্যবহারযোগ্যতা সৌজন্যের সমান, পরামর্শ দেয় যে ওয়েবসাইটগুলিকে প্রায়শই জিজ্ঞাসিত প্রশ্নের উত্তর দেওয়া উচিত, আরামের বৈশিষ্ট্যগুলি অফার করা উচিত এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করার জন্য প্রক্রিয়াগুলিকে স্ট্রিমলাইন করা উচিত৷ বিবেচ্য ডিজাইনের সারমর্ম হাইলাইট করা হয়েছে, স্পষ্ট তথ্য প্রদানের গুরুত্বের উপর জোর দেওয়া, ব্যবহারকারীর প্রচেষ্টাকে ন্যূনতম করা, এবং একটি ওয়েবসাইটের সাফল্যের মূল কারণ হিসেবে চিন্তাশীল ব্যবহারকারীর অভিজ্ঞতায় বিনিয়োগ করা।",
                // Arabic
                "عَرَبِيّ": "ويؤكد هذا الفصل على مفهوم 'خزان النوايا الحسنة' لدى المستخدمين تجاه مواقع الويب، والذي يمكن أن يتضاءل مع التجارب السلبية. ويفترض أن سهولة الاستخدام تعادل المجاملة، مما يشير إلى أن مواقع الويب يجب أن تتوقع الأسئلة المتداولة وتجيب عليها، وتوفر ميزات الراحة، وتبسيط العمليات لتحسين تجربة المستخدم. يتم تسليط الضوء على جوهر التصميم المراعي، مع التأكيد على أهمية توفير معلومات واضحة، وتقليل جهد المستخدم، والاستثمار في تجربة مستخدم مدروسة كعوامل رئيسية في نجاح موقع الويب.",
                // Persian
                "فارسی": "این فصل بر مفهوم «مخزن حسن نیت» که کاربران نسبت به وب‌سایت‌ها دارند، تأکید می‌کند که می‌تواند با تجارب منفی کاهش یابد. این فرض می‌کند که قابلیت استفاده برابر با حسن نیت است، و نشان می‌دهد که وب‌سایت‌ها باید سؤالات متداول را پیش‌بینی کرده و به آنها پاسخ دهند، ویژگی‌های راحتی ارائه دهند و فرآیندها را برای بهبود تجربه کاربر ساده‌تر کنند. ماهیت طراحی دقیق برجسته شده است، با تاکید بر اهمیت ارائه اطلاعات واضح، به حداقل رساندن تلاش کاربر، و سرمایه گذاری در تجربه کاربری متفکرانه به عنوان عوامل کلیدی در موفقیت یک وب سایت.",
            },
        },
        // 12
        {
            "ChapterName": "Accessibility and you",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter emphasizes the significance of website accessibility, acknowledging the apprehensions of designers and developers about the additional effort and complexity it entails. It discusses the daunting nature of accessibility validation, often hindered by unclear warnings and extensive checklists. Insights reveal that screen-reader users engage with content by scanning swiftly and listening selectively, highlighting the need for practical measures such as adding alternative text to images, using headings appropriately, and selecting accessible templates. Despite these challenges, the chapter conveys a hopeful message, asserting that the advantages of accessibility extend to all users and advocating for its prioritization in web design.",
                // German
                "Deutsch": "Das Kapitel unterstreicht das Konzept eines „Reservoirs an Wohlwollen“, das Benutzer gegenüber Websites haben und das durch negative Erfahrungen schwinden kann. Es geht davon aus, dass Benutzerfreundlichkeit gleichbedeutend mit Höflichkeit ist, und schlägt vor, dass Websites häufig gestellte Fragen vorwegnehmen und beantworten, Komfortfunktionen bieten und Prozesse optimieren sollten, um das Benutzererlebnis zu verbessern. Das Wesentliche eines durchdachten Designs wird hervorgehoben und die Bedeutung der Bereitstellung klarer Informationen, der Minimierung des Benutzeraufwands und der Investition in ein durchdachtes Benutzererlebnis als Schlüsselfaktoren für den Erfolg einer Website hervorgehoben.",
                // Chinese
                "中国人": "本章强调了网站可访问性的重要性，承认设计师和开发人员对其需要付出的额外努力和复杂性的担忧。它讨论了可访问性验证的艰巨性，这种验证通常受到不明确的警告和冗长的检查表的阻碍。洞察表明，屏幕阅读器用户通过快速扫描和有选择地收听来与内容互动，这突出了采取实际措施的必要性，例如为图像添加替代文本、适当使用标题和选择可访问的模板。尽管存在这些挑战，但本章传达了一个充满希望的信息，声称可访问性的优势扩展到所有用户，并主张在网页设计中优先考虑可访问性。",
                // Russian
                "Русский": "В главе подчеркивается важность доступности веб-сайтов, признавая опасения дизайнеров и разработчиков по поводу дополнительных усилий и сложностей, которые это влечет за собой. В нем обсуждается сложная природа проверки доступности, которой часто мешают неясные предупреждения и обширные контрольные списки. Исследования показывают, что пользователи программ чтения с экрана взаимодействуют с контентом, быстро просматривая и выборочно прослушивая, что подчеркивает необходимость практических мер, таких как добавление альтернативного текста к изображениям, правильное использование заголовков и выбор доступных шаблонов. Несмотря на эти проблемы, глава несет обнадеживающий посыл, утверждая, что преимущества доступности распространяются на всех пользователей, и пропагандируя ее приоритетность в веб-дизайне.",
                // French
                "Français": "Le chapitre met l'accent sur l'importance de l'accessibilité des sites Web, reconnaissant les appréhensions des concepteurs et des développeurs quant aux efforts supplémentaires et à la complexité que cela implique. Il aborde la nature intimidante de la validation de l'accessibilité, souvent entravée par des avertissements peu clairs et des listes de contrôle détaillées. Les analyses révèlent que les utilisateurs de lecteurs d'écran interagissent avec le contenu en numérisant rapidement et en écoutant de manière sélective, soulignant la nécessité de mesures pratiques telles que l'ajout de texte alternatif aux images, l'utilisation appropriée des titres et la sélection de modèles accessibles. Malgré ces défis, le chapitre transmet un message d’espoir, affirmant que les avantages de l’accessibilité s’étendent à tous les utilisateurs et plaidant pour qu’elle soit prioritaire dans la conception Web.",
                // Japanese
                "日本語": "この章では、Web サイトのアクセシビリティの重要性を強調し、それに伴う追加の労力と複雑さに対するデザイナーや開発者の懸念を認めています。また、不明瞭な警告や膨大なチェックリストによって妨げられることが多いアクセシビリティ検証の困難な性質についても説明しています。洞察により、スクリーン リーダーのユーザーは、コンテンツをすばやくスキャンして選択的に聞くことで操作していることが明らかになり、画像に代替テキストを追加する、見出しを適切に使用する、アクセス可能なテンプレートを選択するなどの実用的な対策の必要性が強調されています。これらの課題にもかかわらず、この章では希望に満ちたメッセージを伝え、アクセシビリティの利点はすべてのユーザーに及ぶと主張し、Web デザインでアクセシビリティを優先することを提唱しています。",
                // Korean
                "한국인": "이 장에서는 웹 사이트 접근성의 중요성을 강조하고 디자이너와 개발자가 수반하는 추가 노력과 복잡성에 대해 우려하고 있음을 인정합니다. 불분명한 경고와 광범위한 체크리스트로 인해 종종 방해가 되는 접근성 검증의 어려운 성격에 대해 논의합니다. 통찰력에 따르면 화면 판독기 사용자는 신속하게 스캔하고 선택적으로 청취함으로써 콘텐츠에 참여하며, 이미지에 대체 텍스트 추가, 적절한 제목 사용, 액세스 가능한 템플릿 선택과 같은 실용적인 조치의 필요성이 강조됩니다. 이러한 어려움에도 불구하고 이 장은 접근성의 이점이 모든 사용자에게 확장된다는 점을 주장하고 웹 디자인에서 접근성의 우선순위를 옹호하면서 희망적인 메시지를 전달합니다.",
                // Spanish
                "Español": "El capítulo enfatiza la importancia de la accesibilidad del sitio web, reconociendo las aprensiones de los diseñadores y desarrolladores sobre el esfuerzo adicional y la complejidad que implica. Se analiza la naturaleza desalentadora de la validación de la accesibilidad, a menudo obstaculizada por advertencias poco claras y listas de verificación extensas. Los conocimientos revelan que los usuarios de lectores de pantalla interactúan con el contenido escaneando rápidamente y escuchando selectivamente, lo que destaca la necesidad de medidas prácticas como agregar texto alternativo a las imágenes, usar encabezados apropiadamente y seleccionar plantillas accesibles. A pesar de estos desafíos, el capítulo transmite un mensaje esperanzador, afirmando que las ventajas de la accesibilidad se extienden a todos los usuarios y abogando por su priorización en el diseño web.",
                // Hindi
                "हिंदी": "यह अध्याय वेबसाइट एक्सेसिबिलिटी के महत्व पर जोर देता है, डिजाइनरों और डेवलपर्स की अतिरिक्त मेहनत और जटिलता के बारे में आशंकाओं को स्वीकार करता है। यह एक्सेसिबिलिटी वैलिडेशन की भयावह प्रकृति पर चर्चा करता है, जो अक्सर अस्पष्ट चेतावनियों और व्यापक चेकलिस्ट द्वारा बाधित होती है। अंतर्दृष्टि से पता चलता है कि स्क्रीन-रीडर उपयोगकर्ता तेजी से स्कैन करके और चुनिंदा रूप से सुनकर सामग्री से जुड़ते हैं, जो छवियों में वैकल्पिक पाठ जोड़ने, शीर्षकों का उचित उपयोग करने और सुलभ टेम्पलेट्स का चयन करने जैसे व्यावहारिक उपायों की आवश्यकता पर प्रकाश डालता है। इन चुनौतियों के बावजूद, अध्याय एक आशावादी संदेश देता है, जिसमें जोर दिया गया है कि एक्सेसिबिलिटी के लाभ सभी उपयोगकर्ताओं तक फैले हुए हैं और वेब डिज़ाइन में इसे प्राथमिकता देने की वकालत की गई है।",
                // Portuguese
                "Português": "O capítulo enfatiza a importância da acessibilidade dos websites, reconhecendo as apreensões dos designers e desenvolvedores sobre o esforço adicional e a complexidade que isso acarreta. Discute a natureza assustadora da validação de acessibilidade, muitas vezes dificultada por avisos pouco claros e extensas listas de verificação. Os insights revelam que os usuários de leitores de tela se envolvem com o conteúdo escaneando rapidamente e ouvindo seletivamente, destacando a necessidade de medidas práticas, como adicionar texto alternativo às imagens, usar títulos adequadamente e selecionar modelos acessíveis. Apesar destes desafios, o capítulo transmite uma mensagem de esperança, afirmando que as vantagens da acessibilidade se estendem a todos os utilizadores e defendendo a sua priorização no web design.",
                // Bengali
                "বাংলা": "অধ্যায়টি ওয়েবসাইট অ্যাক্সেসিবিলিটির তাত্পর্যের উপর জোর দেয়, ডিজাইনার এবং ডেভেলপারদের অতিরিক্ত প্রচেষ্টা এবং জটিলতা সম্পর্কে আশংকা স্বীকার করে। এটি অ্যাক্সেসযোগ্যতা যাচাইকরণের ভয়ঙ্কর প্রকৃতি নিয়ে আলোচনা করে, প্রায়শই অস্পষ্ট সতর্কতা এবং বিস্তৃত চেকলিস্ট দ্বারা বাধাপ্রাপ্ত হয়। অন্তর্দৃষ্টি প্রকাশ করে যে স্ক্রিন-রিডার ব্যবহারকারীরা দ্রুত স্ক্যান করে এবং বেছে বেছে শুনে, চিত্রগুলিতে বিকল্প পাঠ্য যোগ করা, শিরোনামগুলি যথাযথভাবে ব্যবহার করা এবং অ্যাক্সেসযোগ্য টেমপ্লেটগুলি নির্বাচন করার মতো ব্যবহারিক ব্যবস্থাগুলির প্রয়োজনীয়তা তুলে ধরে বিষয়বস্তুর সাথে জড়িত হন৷ এই চ্যালেঞ্জগুলি সত্ত্বেও, অধ্যায়টি একটি আশাব্যঞ্জক বার্তা প্রদান করে, জোর দিয়ে যে অ্যাক্সেসযোগ্যতার সুবিধাগুলি সমস্ত ব্যবহারকারীর জন্য প্রসারিত এবং ওয়েব ডিজাইনে এর অগ্রাধিকারের পক্ষে সমর্থন করে।",
                // Arabic
                "عَرَبِيّ": "يؤكد هذا الفصل على أهمية إمكانية الوصول إلى موقع الويب، مع الاعتراف بمخاوف المصممين والمطورين بشأن الجهد الإضافي والتعقيد الذي ينطوي عليه ذلك. ويناقش الطبيعة الشاقة للتحقق من إمكانية الوصول، والتي غالبًا ما تعوقها التحذيرات غير الواضحة وقوائم المراجعة الشاملة. تكشف الرؤى أن مستخدمي قارئ الشاشة يتفاعلون مع المحتوى عن طريق المسح السريع والاستماع بشكل انتقائي، مما يسلط الضوء على الحاجة إلى اتخاذ تدابير عملية مثل إضافة نص بديل للصور، واستخدام العناوين بشكل مناسب، واختيار قوالب يمكن الوصول إليها. وعلى الرغم من هذه التحديات، ينقل الفصل رسالة مفعمة بالأمل، مؤكدا أن مزايا إمكانية الوصول تمتد إلى جميع المستخدمين ويدعو إلى إعطاء الأولوية لها في تصميم الويب.",
                // Persian
                "فارسی": "این فصل بر اهمیت دسترسی به وب‌سایت تأکید می‌کند و نگرانی طراحان و توسعه‌دهندگان را در مورد تلاش و پیچیدگی اضافی که مستلزم آن است، تأیید می‌کند. این ماهیت دلهره آور اعتبار سنجی دسترسی را مورد بحث قرار می دهد که اغلب با هشدارهای نامشخص و چک لیست های گسترده مانع می شود. بینش‌ها نشان می‌دهد که کاربران صفحه‌خوان با اسکن سریع و گوش دادن انتخابی، با تأکید بر نیاز به اقدامات عملی مانند افزودن متن جایگزین به تصاویر، استفاده مناسب از سرفصل‌ها و انتخاب الگوهای قابل دسترس، با محتوا درگیر می‌شوند. علی‌رغم این چالش‌ها، این فصل پیام امیدوارکننده‌ای را منتقل می‌کند و ادعا می‌کند که مزایای دسترسی به همه کاربران گسترش می‌یابد و از اولویت‌بندی آن در طراحی وب حمایت می‌کند.",
            },
        },
        // 13
        {
            "ChapterName": "Guide for the perplexed",
            "ShortDescriptionAboutChapter": {
                // English
                "English": "The chapter underscores the vital role of live usability testing in providing impactful insights, advocating for direct involvement to grasp user experiences genuinely. It emphasizes a hands-on approach to usability work, prioritizing learning, testing, and iterative improvements over mere job titles. To gain management support, it suggests demonstrating the return on investment through data and encouraging executives to witness usability tests firsthand. The narrative also highlights the importance of empathy towards decision-makers to enhance communication and collaboration, framing usability as a field where attitude and practical skills are paramount for success.",
                // German
                "Deutsch": "Das Kapitel unterstreicht die entscheidende Rolle von Live-Usability-Tests für die Bereitstellung aussagekräftiger Erkenntnisse und plädiert für eine direkte Beteiligung, um die Benutzererfahrungen wirklich zu erfassen. Es betont einen praktischen Ansatz für die Usability-Arbeit und priorisiert Lernen, Testen und iterative Verbesserungen gegenüber bloßen Berufsbezeichnungen. Um die Unterstützung des Managements zu gewinnen, schlägt es vor, den Return on Investment anhand von Daten nachzuweisen und Führungskräfte zu ermutigen, Usability-Tests aus erster Hand mitzuerleben. Der Bericht unterstreicht auch die Bedeutung von Empathie gegenüber Entscheidungsträgern, um Kommunikation und Zusammenarbeit zu verbessern, und stellt Usability als ein Feld dar, in dem Einstellung und praktische Fähigkeiten für den Erfolg von größter Bedeutung sind.",
                // Chinese
                "中国人": "本章强调了实时可用性测试在提供有影响力的见解方面的重要作用，提倡直接参与以真正掌握用户体验。它强调以亲身实践的方式进行可用性工作，优先考虑学习、测试和迭代改进，而不是单纯的职位头衔。为了获得管理层的支持，它建议通过数据展示投资回报，并鼓励高管亲眼见证可用性测试。叙述还强调了对决策者的同理心对加强沟通和协作的重要性，将可用性定义为一个态度和实践技能对成功至关重要的领域。",
                // Russian
                "Русский": "В этой главе подчеркивается жизненно важная роль живого юзабилити-тестирования в предоставлении действенной информации, а также пропагандируется прямое участие для подлинного понимания пользовательского опыта. Он подчеркивает практический подход к работе над удобством использования, отдавая приоритет обучению, тестированию и итеративным улучшениям, а не простым названиям должностей. Чтобы заручиться поддержкой руководства, он предлагает продемонстрировать окупаемость инвестиций с помощью данных и побудить руководителей лично стать свидетелями тестов юзабилити. В повествовании также подчеркивается важность сочувствия к лицам, принимающим решения, для улучшения общения и сотрудничества, рассматривая удобство использования как область, в которой отношение и практические навыки имеют первостепенное значение для успеха.",
                // French
                "Français": "Le chapitre souligne le rôle essentiel des tests d'utilisabilité en direct dans la fourniture d'informations percutantes, en plaidant pour une implication directe pour appréhender véritablement les expériences des utilisateurs. Il met l'accent sur une approche pratique du travail d'utilisabilité, en donnant la priorité à l'apprentissage, aux tests et aux améliorations itératives par rapport aux simples titres de poste. Pour obtenir le soutien de la direction, il suggère de démontrer le retour sur investissement grâce aux données et d'encourager les dirigeants à assister directement aux tests d'utilisabilité. Le récit souligne également l'importance de l'empathie envers les décideurs pour améliorer la communication et la collaboration, en présentant la convivialité comme un domaine où l'attitude et les compétences pratiques sont primordiales pour réussir.",
                // Japanese
                "日本語": "この章では、ライブ ユーザビリティ テストが、影響力のある洞察を提供する上で果たす重要な役割を強調し、ユーザー エクスペリエンスを真に理解するために直接関与することを推奨しています。また、ユーザビリティ作業への実践的なアプローチを強調し、単なる役職名よりも学習、テスト、反復的な改善を優先しています。経営陣の支持を得るには、データを通じて投資収益率を実証し、幹部にユーザビリティ テストを直接目撃するよう奨励することを提案しています。また、コミュニケーションとコラボレーションを強化するために意思決定者への共感の重要性を強調し、ユーザビリティを、成功のために姿勢と実践的なスキルが最も重要である分野として位置付けています。",
                // Korean
                "한국인": "이 장에서는 영향력 있는 통찰력을 제공하고 사용자 경험을 진정으로 파악하기 위한 직접적인 참여를 옹호하는 실시간 사용성 테스트의 중요한 역할을 강조합니다. 단순한 직위보다 학습, 테스트 및 반복적 개선에 우선순위를 두고 유용성 작업에 대한 실무적인 접근 방식을 강조합니다. 경영진의 지원을 얻으려면 데이터를 통해 투자 수익을 입증하고 경영진이 사용성 테스트를 직접 목격하도록 권장합니다. 내러티브는 또한 의사소통과 협업을 강화하기 위해 의사결정자에 대한 공감의 중요성을 강조하고, 유용성을 성공을 위해 태도와 실무 기술이 가장 중요한 분야로 규정합니다.",
                // Spanish
                "Español": "El capítulo subraya el papel vital de las pruebas de usabilidad en vivo a la hora de proporcionar conocimientos impactantes, abogando por la participación directa para captar genuinamente las experiencias de los usuarios. Enfatiza un enfoque práctico para el trabajo de usabilidad, priorizando el aprendizaje, las pruebas y las mejoras iterativas sobre los meros títulos de trabajo. Para obtener el apoyo de la dirección, sugiere demostrar el retorno de la inversión a través de datos y alentar a los ejecutivos a presenciar de primera mano las pruebas de usabilidad. La narrativa también destaca la importancia de la empatía hacia los tomadores de decisiones para mejorar la comunicación y la colaboración, enmarcando la usabilidad como un campo donde la actitud y las habilidades prácticas son primordiales para el éxito.",
                // Hindi
                "हिंदी": "अध्याय प्रभावशाली अंतर्दृष्टि प्रदान करने में लाइव प्रयोज्यता परीक्षण की महत्वपूर्ण भूमिका को रेखांकित करता है, उपयोगकर्ता के अनुभवों को वास्तव में समझने के लिए प्रत्यक्ष भागीदारी की वकालत करता है। यह प्रयोज्यता कार्य के लिए व्यावहारिक दृष्टिकोण पर जोर देता है, केवल नौकरी के शीर्षकों पर सीखने, परीक्षण और पुनरावृत्त सुधारों को प्राथमिकता देता है। प्रबंधन का समर्थन प्राप्त करने के लिए, यह डेटा के माध्यम से निवेश पर वापसी का प्रदर्शन करने और अधिकारियों को प्रयोज्यता परीक्षणों को प्रत्यक्ष रूप से देखने के लिए प्रोत्साहित करने का सुझाव देता है। कथा संचार और सहयोग को बढ़ाने के लिए निर्णय लेने वालों के प्रति सहानुभूति के महत्व पर भी प्रकाश डालती है, प्रयोज्यता को एक ऐसे क्षेत्र के रूप में प्रस्तुत करती है जहाँ सफलता के लिए दृष्टिकोण और व्यावहारिक कौशल सर्वोपरि हैं।",
                // Portuguese
                "Português": "O capítulo destaca o papel vital dos testes de usabilidade ao vivo no fornecimento de insights impactantes, defendendo o envolvimento direto para compreender genuinamente as experiências do usuário. Ele enfatiza uma abordagem prática para o trabalho de usabilidade, priorizando aprendizado, testes e melhorias iterativas em vez de meros cargos. Para obter apoio da gestão, sugere demonstrar o retorno do investimento através de dados e incentivar os executivos a testemunhar testes de usabilidade em primeira mão. A narrativa também destaca a importância da empatia para com os decisores para melhorar a comunicação e a colaboração, enquadrando a usabilidade como um campo onde a atitude e as competências práticas são fundamentais para o sucesso.",
                // Bengali
                "বাংলা": "অধ্যায়টি প্রভাবশালী অন্তর্দৃষ্টি প্রদানে লাইভ ব্যবহারযোগ্যতা পরীক্ষার গুরুত্বপূর্ণ ভূমিকার ওপর জোর দেয়, ব্যবহারকারীর অভিজ্ঞতাকে প্রকৃতভাবে উপলব্ধি করার জন্য সরাসরি সম্পৃক্ততার পক্ষে কথা বলে। এটি শুধুমাত্র কাজের শিরোনামের চেয়ে শিক্ষা, পরীক্ষা এবং পুনরাবৃত্তিমূলক উন্নতিকে অগ্রাধিকার দিয়ে ব্যবহারযোগ্য কাজের জন্য একটি হাত-অনুষ্ঠানের উপর জোর দেয়। ম্যানেজমেন্ট সাপোর্ট পাওয়ার জন্য, এটি ডেটার মাধ্যমে বিনিয়োগের উপর রিটার্ন প্রদর্শনের পরামর্শ দেয় এবং এক্সিকিউটিভদের সরাসরি ব্যবহারযোগ্যতা পরীক্ষাগুলি দেখতে উৎসাহিত করে। আখ্যানটি যোগাযোগ এবং সহযোগিতা বাড়ানোর জন্য সিদ্ধান্ত গ্রহণকারীদের প্রতি সহানুভূতির গুরুত্বকেও তুলে ধরে, ব্যবহারযোগ্যতাকে এমন একটি ক্ষেত্র হিসাবে তৈরি করে যেখানে মনোভাব এবং ব্যবহারিক দক্ষতা সাফল্যের জন্য সর্বাগ্রে।",
                // Arabic
                "عَرَبِيّ": "يؤكد الفصل على الدور الحيوي لاختبار قابلية الاستخدام المباشر في توفير رؤى مؤثرة، والدعوة إلى المشاركة المباشرة لفهم تجارب المستخدم بشكل حقيقي. وهو يؤكد على النهج العملي في العمل المتعلق بقابلية الاستخدام، وتحديد أولويات التعلم والاختبار والتحسينات التكرارية على مجرد المسميات الوظيفية. للحصول على دعم الإدارة، يقترح إظهار العائد على الاستثمار من خلال البيانات وتشجيع المديرين التنفيذيين على مشاهدة اختبارات قابلية الاستخدام بشكل مباشر. يسلط السرد أيضًا الضوء على أهمية التعاطف مع صناع القرار لتعزيز التواصل والتعاون، وتأطير قابلية الاستخدام كمجال تكون فيه المواقف والمهارات العملية ذات أهمية قصوى لتحقيق النجاح.",
                // Persian
                "فارسی": "این فصل بر نقش حیاتی تست قابلیت استفاده زنده در ارائه بینش تاثیرگذار تاکید می کند و از مشارکت مستقیم برای درک واقعی تجربیات کاربر حمایت می کند. این بر رویکرد عملی به کار با قابلیت استفاده، اولویت دادن به یادگیری، آزمایش و بهبودهای تکراری نسبت به عناوین شغلی صرف تأکید دارد. برای به دست آوردن پشتیبانی مدیریت، نشان دادن بازگشت سرمایه از طریق داده‌ها و تشویق مدیران برای مشاهده آزمایش‌های قابلیت استفاده از نزدیک را پیشنهاد می‌کند. این روایت همچنین بر اهمیت همدلی با تصمیم‌گیرندگان برای افزایش ارتباطات و همکاری تاکید می‌کند و قابلیت استفاده را به عنوان زمینه‌ای که در آن نگرش و مهارت‌های عملی برای موفقیت مهم هستند، قاب‌بندی می‌کند.",
            },
        },
    ],
    "TotalDescriptionAboutTheBook": [
        // Paragraph 1
        {
            // English
            "English": "Don't Make Me Think by Steve Krug is a book that teaches web designers and developers how to create websites that are easy to use and understand. The book is based on the principle that users should not have to think too much when they interact with a website, but rather be able to accomplish their goals quickly and intuitively. The book is full of practical tips, examples, and humor that make it a fun and informative read.",
            // German
            "Deutsch": "„Don't Make Me Think“ von Steve Krug ist ein Buch, das Webdesignern und Entwicklern beibringt, wie sie Websites erstellen, die einfach zu verwenden und zu verstehen sind. Das Buch basiert auf dem Prinzip, dass Benutzer bei der Interaktion mit einer Website nicht zu viel nachdenken müssen, sondern ihre Ziele schnell und intuitiv erreichen können. Das Buch ist voller praktischer Tipps, Beispiele und Humor, die es zu einer unterhaltsamen und informativen Lektüre machen.",
            // Chinese
            "中国人": "Steve Krug 的《别让我思考》是一本教网页设计师和开发人员如何创建易于使用和理解的网站的书。这本书基于这样的原则：用户在与网站互动时不必想太多，而是能够快速直观地实现他们的目标。这本书充满了实用的技巧、例子和幽默，使它成为一本有趣且内容丰富的读物。",
            // Russian
            "Русский": "«Не заставляйте меня думать» Стива Круга — это книга, которая учит веб-дизайнеров и разработчиков создавать веб-сайты, простые в использовании и понимании. Книга основана на принципе, согласно которому пользователям не нужно слишком много думать, когда они взаимодействуют с веб-сайтом, а скорее иметь возможность быстро и интуитивно достигать своих целей. Книга полна практических советов, примеров и юмора, которые делают ее увлекательным и познавательным чтением.",
            // French
            "Français": "Don't Make Me Think de Steve Krug est un livre qui enseigne aux concepteurs et aux développeurs Web comment créer des sites Web faciles à utiliser et à comprendre. Le livre est basé sur le principe selon lequel les utilisateurs ne devraient pas avoir à trop réfléchir lorsqu'ils interagissent avec un site Web, mais plutôt être capables d'atteindre leurs objectifs de manière rapide et intuitive. Le livre regorge de conseils pratiques, d’exemples et d’humour qui en font une lecture amusante et informative.",
            // Japanese
            "日本語": "Steve Krug 著の Don't Make Me Think は、Web デザイナーや開発者に、使いやすく理解しやすい Web サイトの作成方法を教える本です。この本は、ユーザーが Web サイトを操作するときにあまり考えすぎず、すばやく直感的に目的を達成できるようにするという原則に基づいています。この本には実用的なヒント、例、ユーモアが満載で、楽しく有益な読み物となっています。",
            // Korean
            "한국인": "Steve Krug의 Don't Make Me Think는 웹 디자이너와 개발자에게 사용하기 쉽고 이해하기 쉬운 웹 사이트를 만드는 방법을 가르치는 책입니다. 이 책은 사용자가 웹 사이트와 상호 작용할 때 너무 많이 생각할 필요가 없고 오히려 빠르고 직관적으로 목표를 달성할 수 있어야 한다는 원칙에 기초하고 있습니다. 이 책은 재미있고 유익한 읽기를 가능하게 하는 실용적인 팁, 예, 유머로 가득 차 있습니다.",
            // Spanish
            "Español": "Don't Make Me Think de Steve Krug es un libro que enseña a diseñadores y desarrolladores web cómo crear sitios web que sean fáciles de usar y comprender. El libro se basa en el principio de que los usuarios no deberían tener que pensar demasiado cuando interactúan con un sitio web, sino que deberían poder lograr sus objetivos de forma rápida e intuitiva. El libro está lleno de consejos prácticos, ejemplos y humor que lo convierten en una lectura divertida e informativa.",
            // Hindi
            "हिंदी": "स्टीव क्रुग द्वारा लिखी गई डोंट मेक मी थिंक एक ऐसी किताब है जो वेब डिज़ाइनरों और डेवलपर्स को सिखाती है कि ऐसी वेबसाइट कैसे बनाई जाए जो इस्तेमाल करने और समझने में आसान हो। यह किताब इस सिद्धांत पर आधारित है कि उपयोगकर्ताओं को वेबसाइट से इंटरैक्ट करते समय बहुत ज़्यादा सोचना नहीं चाहिए, बल्कि उन्हें अपने लक्ष्यों को जल्दी और सहजता से पूरा करने में सक्षम होना चाहिए। यह किताब व्यावहारिक सुझावों, उदाहरणों और हास्य से भरी हुई है जो इसे एक मज़ेदार और जानकारीपूर्ण किताब बनाती है।",
            // Portuguese
            "Português": "Don't Make Me Think, de Steve Krug, é um livro que ensina web designers e desenvolvedores como criar sites fáceis de usar e entender. O livro baseia-se no princípio de que os usuários não devem pensar muito ao interagir com um site, mas sim ser capazes de atingir seus objetivos de forma rápida e intuitiva. O livro está repleto de dicas práticas, exemplos e humor que o tornam uma leitura divertida e informativa.",
            // Bengali
            "বাংলা": "স্টিভ ক্রুগের লেখা ডোন্ট মেক মি থিঙ্ক এমন একটি বই যা ওয়েব ডিজাইনার এবং ডেভেলপারদের শেখায় যে কীভাবে ওয়েবসাইট তৈরি করতে হয় যা ব্যবহার করা সহজ এবং বোঝা যায়৷ বইটি এই নীতির উপর ভিত্তি করে তৈরি করা হয়েছে যে ব্যবহারকারীরা যখন কোনও ওয়েবসাইটের সাথে ইন্টারঅ্যাক্ট করে তখন খুব বেশি চিন্তা করতে হবে না, বরং তাদের লক্ষ্যগুলি দ্রুত এবং স্বজ্ঞাতভাবে সম্পন্ন করতে সক্ষম হবে। বইটি ব্যবহারিক টিপস, উদাহরণ এবং হাস্যরসে পূর্ণ যা এটিকে একটি মজাদার এবং তথ্যপূর্ণ করে তোলে।",
            // Arabic
            "عَرَبِيّ": "لا تجعلني أفكر بقلم ستيف كروج هو كتاب يعلم مصممي ومطوري الويب كيفية إنشاء مواقع ويب سهلة الاستخدام والفهم. يعتمد الكتاب على مبدأ مفاده أنه لا ينبغي للمستخدمين التفكير كثيرًا عندما يتفاعلون مع موقع الويب، بل يجب أن يكونوا قادرين على تحقيق أهدافهم بسرعة وبشكل حدسي. الكتاب مليء بالنصائح العملية والأمثلة والفكاهة التي تجعل قراءته ممتعة وغنية بالمعلومات.",
            // Persian
            "فارسی": "مرا به فکر نکن اثر استیو کروگ کتابی است که به طراحان و توسعه دهندگان وب می آموزد که چگونه وب سایت هایی ایجاد کنند که استفاده و درک آن آسان باشد. این کتاب بر این اصل استوار است که کاربران نباید هنگام تعامل با یک وب سایت زیاد فکر کنند، بلکه باید بتوانند به سرعت و به طور مستقیم به اهداف خود دست یابند. کتاب مملو از نکات کاربردی، مثال‌ها و طنز است که آن را به خواندنی سرگرم‌کننده و آموزنده تبدیل می‌کند.",
        },
        // Paragraph 2
        {
            // English
            "English": "One of the advantages of reading this book is that it helps web designers and developers to improve their skills and knowledge of web usability. The book covers topics such as how to design clear and effective navigation, how to write useful and concise content, how to conduct simple and cheap usability tests, and how to design for mobile devices. The book also explains the common mistakes and misconceptions that web designers and developers often make, and how to avoid them.",
            // German
            "Deutsch": "Einer der Vorteile dieses Buches besteht darin, dass es Webdesignern und -entwicklern hilft, ihre Fähigkeiten und Kenntnisse in Sachen Web-Usability zu verbessern. Das Buch behandelt Themen wie die Gestaltung einer klaren und effektiven Navigation, das Schreiben nützlicher und prägnanter Inhalte, die Durchführung einfacher und kostengünstiger Usability-Tests und das Design für mobile Geräte. Das Buch erklärt auch die häufigsten Fehler und Missverständnisse, die Webdesigner und -entwickler oft machen, und wie man sie vermeidet.",
            // Chinese
            "中国人": "阅读本书的优点之一是它可以帮助网页设计师和开发人员提高他们的网页可用性技能和知识。本书涵盖的主题包括如何设计清晰有效的导航、如何编写有用而简洁的内容、如何进行简单而廉价的可用性测试以及如何为移动设备进行设计。本书还解释了网页设计师和开发人员经常犯的常见错误和误解，以及如何避免它们。",
            // Russian
            "Русский": "Одним из преимуществ чтения этой книги является то, что она помогает веб-дизайнерам и разработчикам улучшить свои навыки и знания в области удобства использования веб-страниц. В книге рассматриваются такие темы, как создание четкой и эффективной навигации, как писать полезный и краткий контент, как проводить простые и дешевые юзабилити-тесты и как разрабатывать дизайн для мобильных устройств. В книге также объясняются распространенные ошибки и заблуждения, которые часто допускают веб-дизайнеры и разработчики, и как их избежать.",
            // French
            "Français": "L'un des avantages de la lecture de ce livre est qu'il aide les concepteurs et les développeurs Web à améliorer leurs compétences et leurs connaissances en matière d'utilisabilité du Web. Le livre couvre des sujets tels que comment concevoir une navigation claire et efficace, comment rédiger un contenu utile et concis, comment effectuer des tests d'utilisabilité simples et bon marché et comment concevoir pour les appareils mobiles. Le livre explique également les erreurs et les idées fausses courantes que font souvent les concepteurs et les développeurs Web, et comment les éviter.",
            // Japanese
            "日本語": "この本を読むことの利点の 1 つは、Web デザイナーや開発者が Web ユーザビリティに関するスキルと知識を向上させるのに役立つことです。この本では、明確で効果的なナビゲーションの設計方法、有用で簡潔なコンテンツの書き方、シンプルで安価なユーザビリティ テストの実施方法、モバイル デバイス向けの設計方法などのトピックを取り上げています。また、Web デザイナーや開発者が犯しがちな一般的な間違いや誤解、およびそれらを回避する方法についても説明しています。",
            // Korean
            "한국인": "이 책을 읽는 장점 중 하나는 웹 디자이너와 개발자가 웹 사용성에 대한 기술과 지식을 향상시키는 데 도움이 된다는 것입니다. 이 책은 명확하고 효과적인 내비게이션을 디자인하는 방법, 유용하고 간결한 콘텐츠를 작성하는 방법, 간단하고 저렴한 사용성 테스트를 수행하는 방법, 모바일 장치에 맞게 디자인하는 방법 등의 주제를 다루고 있습니다. 이 책은 또한 웹 디자이너와 개발자가 자주 저지르는 일반적인 실수와 오해, 그리고 이를 방지하는 방법에 대해서도 설명합니다.",
            // Spanish
            "Español": "Una de las ventajas de leer este libro es que ayuda a los diseñadores y desarrolladores web a mejorar sus habilidades y conocimientos sobre usabilidad web. El libro cubre temas como cómo diseñar una navegación clara y efectiva, cómo escribir contenido útil y conciso, cómo realizar pruebas de usabilidad simples y económicas y cómo diseñar para dispositivos móviles. El libro también explica los errores y conceptos erróneos comunes que suelen cometer los diseñadores y desarrolladores web y cómo evitarlos.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़ने का एक लाभ यह है कि यह वेब डिज़ाइनरों और डेवलपर्स को वेब उपयोगिता के बारे में अपने कौशल और ज्ञान को बेहतर बनाने में मदद करती है। पुस्तक में स्पष्ट और प्रभावी नेविगेशन कैसे डिज़ाइन करें, उपयोगी और संक्षिप्त सामग्री कैसे लिखें, सरल और सस्ते प्रयोज्य परीक्षण कैसे करें और मोबाइल उपकरणों के लिए कैसे डिज़ाइन करें जैसे विषयों को शामिल किया गया है। पुस्तक में वेब डिज़ाइनर और डेवलपर्स द्वारा अक्सर की जाने वाली सामान्य गलतियों और गलतफहमियों के बारे में भी बताया गया है और उनसे कैसे बचा जाए।",
            // Portuguese
            "Português": "Uma das vantagens de ler este livro é que ele ajuda web designers e desenvolvedores a melhorar suas habilidades e conhecimentos de usabilidade web. O livro cobre tópicos como como projetar uma navegação clara e eficaz, como escrever conteúdo útil e conciso, como realizar testes de usabilidade simples e baratos e como projetar para dispositivos móveis. O livro também explica os erros e equívocos comuns que web designers e desenvolvedores costumam cometer e como evitá-los.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার একটি সুবিধা হল এটি ওয়েব ডিজাইনার এবং ডেভেলপারদের তাদের দক্ষতা এবং ওয়েব ব্যবহারযোগ্যতার জ্ঞান উন্নত করতে সাহায্য করে। বইটি কীভাবে পরিষ্কার এবং কার্যকর নেভিগেশন ডিজাইন করতে হয়, কীভাবে দরকারী এবং সংক্ষিপ্ত বিষয়বস্তু লিখতে হয়, কীভাবে সহজ এবং সস্তা ব্যবহারযোগ্যতা পরীক্ষা পরিচালনা করতে হয় এবং কীভাবে মোবাইল ডিভাইসের জন্য ডিজাইন করতে হয় তার মতো বিষয়গুলি কভার করে। বইটি ওয়েব ডিজাইনার এবং বিকাশকারীরা প্রায়শই যে সাধারণ ভুল এবং ভ্রান্ত ধারণাগুলি করে এবং কীভাবে সেগুলি এড়াতে হয় তা ব্যাখ্যা করে৷",
            // Arabic
            "عَرَبِيّ": "إحدى مزايا قراءة هذا الكتاب هو أنه يساعد مصممي ومطوري الويب على تحسين مهاراتهم ومعرفتهم بسهولة استخدام الويب. يغطي الكتاب موضوعات مثل كيفية تصميم تنقل واضح وفعال، وكيفية كتابة محتوى مفيد وموجز، وكيفية إجراء اختبارات سهولة الاستخدام البسيطة والرخيصة، وكيفية التصميم للأجهزة المحمولة. يشرح الكتاب أيضًا الأخطاء الشائعة والمفاهيم الخاطئة التي غالبًا ما يقع فيها مصممو ومطورو الويب، وكيفية تجنبها.",
            // Persian
            "فارسی": "یکی از مزایای خواندن این کتاب این است که به طراحان و توسعه دهندگان وب کمک می کند تا مهارت ها و دانش خود را در مورد قابلیت استفاده از وب ارتقا دهند. این کتاب موضوعاتی مانند نحوه طراحی ناوبری واضح و موثر، نحوه نوشتن محتوای مفید و مختصر، نحوه انجام تست های ساده و ارزان قابلیت استفاده، و نحوه طراحی برای دستگاه های تلفن همراه را پوشش می دهد. این کتاب همچنین اشتباهات رایج و باورهای غلطی را که طراحان و توسعه دهندگان وب اغلب مرتکب می شوند و نحوه اجتناب از آنها توضیح می دهد.",
        },
        // Paragraph 3
        {
            // English
            "English": "Another advantage of reading this book is that it benefits the users of the websites that are designed and developed according to the book’s guidelines. Users will have a better experience when they visit a website that is easy to use and understand, and they will be more likely to return, recommend, or trust the website. Users will also save time and effort when they use a website that is designed to meet their needs and expectations, and they will be more satisfied and happy with the website.",
            // German
            "Deutsch": "Ein weiterer Vorteil der Lektüre dieses Buches besteht darin, dass es den Benutzern von Websites zugute kommt, die gemäß den Richtlinien des Buches entworfen und entwickelt wurden. Benutzer haben ein besseres Erlebnis, wenn sie eine Website besuchen, die einfach zu verwenden und zu verstehen ist, und sie werden eher wiederkommen, die Website weiterempfehlen oder ihr vertrauen. Benutzer sparen auch Zeit und Mühe, wenn sie eine Website verwenden, die auf ihre Bedürfnisse und Erwartungen zugeschnitten ist, und sie werden mit der Website zufriedener und glücklicher sein.",
            // Chinese
            "中国人": "阅读本书的另一个好处是，它使按照本书的指导方针设计和开发的网站的用户受益。当用户访问一个易于使用和理解的网站时，他们将获得更好的体验，他们更有可能返回、推荐或信任该网站。当用户使用一个旨在满足他们的需求和期望的网站时，他们也会节省时间和精力，他们会对网站更加满意和高兴。",
            // Russian
            "Русский": "Еще одним преимуществом чтения этой книги является то, что она принесет пользу пользователям веб-сайтов, спроектированных и разработанных в соответствии с рекомендациями книги. Пользователи получат больше удовольствия от посещения веб-сайта, который прост в использовании и понимании, и они с большей вероятностью вернутся, порекомендуют веб-сайт или доверят ему. Пользователи также сэкономят время и усилия, используя веб-сайт, разработанный с учетом их потребностей и ожиданий, и будут более удовлетворены и довольны веб-сайтом.",
            // French
            "Français": "Un autre avantage de la lecture de ce livre est qu’il profite aux utilisateurs des sites Web conçus et développés selon les directives du livre. Les utilisateurs bénéficieront d’une meilleure expérience lorsqu’ils visiteront un site Web facile à utiliser et à comprendre, et ils seront plus susceptibles de revenir, de recommander ou de faire confiance au site Web. Les utilisateurs économiseront également du temps et des efforts lorsqu’ils utiliseront un site Web conçu pour répondre à leurs besoins et à leurs attentes, et ils seront plus satisfaits du site Web.",
            // Japanese
            "日本語": "この本を読むことのもう 1 つの利点は、本のガイドラインに従って設計および開発された Web サイトのユーザーにもメリットがあるということです。ユーザーは、使いやすく理解しやすい Web サイトにアクセスしたときに優れたエクスペリエンスを得ることができ、その Web サイトを再訪したり、推奨したり、信頼したりする可能性が高くなります。また、ユーザーは、自分のニーズと期待を満たすように設計された Web サイトを使用すると、時間と労力を節約でき、その Web サイトに満足して幸せになります。",
            // Korean
            "한국인": "이 책을 읽는 또 다른 이점은 책의 지침에 따라 설계되고 개발된 웹 사이트의 사용자에게 도움이 된다는 것입니다. 사용자는 사용하기 쉽고 이해하기 쉬운 웹사이트를 방문할 때 더 나은 경험을 하게 될 것이며, 해당 웹사이트를 재방문하거나 추천하거나 신뢰하게 될 가능성이 높아질 것입니다. 또한 사용자는 자신의 필요와 기대에 맞게 설계된 웹사이트를 사용할 때 시간과 노력을 절약할 수 있으며 웹사이트에 대한 만족도와 만족도가 더욱 높아질 것입니다.",
            // Spanish
            "Español": "Otra ventaja de leer este libro es que beneficia a los usuarios de los sitios web diseñados y desarrollados de acuerdo con las pautas del libro. Los usuarios tendrán una mejor experiencia cuando visiten un sitio web que sea fácil de usar y comprender, y será más probable que regresen, recomienden o confíen en el sitio web. Los usuarios también ahorrarán tiempo y esfuerzo cuando utilicen un sitio web diseñado para satisfacer sus necesidades y expectativas, y estarán más satisfechos y contentos con el sitio web.",
            // Hindi
            "हिंदी": "इस पुस्तक को पढ़ने का एक और लाभ यह है कि यह उन वेबसाइटों के उपयोगकर्ताओं को लाभ पहुँचाता है जो पुस्तक के दिशा-निर्देशों के अनुसार डिज़ाइन और विकसित की गई हैं। उपयोगकर्ताओं को एक बेहतर अनुभव होगा जब वे एक ऐसी वेबसाइट पर जाएँगे जो उपयोग करने और समझने में आसान है, और वे वेबसाइट पर वापस लौटने, अनुशंसा करने या उस पर भरोसा करने की अधिक संभावना रखेंगे। उपयोगकर्ता अपनी ज़रूरतों और अपेक्षाओं को पूरा करने के लिए डिज़ाइन की गई वेबसाइट का उपयोग करने पर समय और प्रयास भी बचाएँगे, और वे वेबसाइट से अधिक संतुष्ट और खुश होंगे।",
            // Portuguese
            "Português": "Outra vantagem da leitura deste livro é que ele beneficia os usuários dos sites que são desenhados e desenvolvidos de acordo com as diretrizes do livro. Os usuários terão uma experiência melhor ao visitar um site fácil de usar e entender, e terão maior probabilidade de retornar, recomendar ou confiar no site. Os usuários também economizarão tempo e esforço ao usar um site projetado para atender às suas necessidades e expectativas, e ficarão mais satisfeitos e felizes com o site.",
            // Bengali
            "বাংলা": "এই বইটি পড়ার আরেকটি সুবিধা হল এটি ওয়েবসাইটগুলির ব্যবহারকারীদের উপকৃত করে যেগুলি বইটির নির্দেশিকা অনুসারে ডিজাইন এবং বিকাশ করা হয়েছে। ব্যবহারকারীদের একটি ভাল অভিজ্ঞতা হবে যখন তারা এমন একটি ওয়েবসাইট পরিদর্শন করবে যা ব্যবহার করা সহজ এবং বোঝা যায় এবং তারা ওয়েবসাইটটিতে ফিরে আসার, সুপারিশ করার বা বিশ্বাস করার সম্ভাবনা বেশি থাকে। ব্যবহারকারীরা যখন তাদের চাহিদা এবং প্রত্যাশা পূরণের জন্য ডিজাইন করা একটি ওয়েবসাইট ব্যবহার করেন তখন তাদের সময় এবং শ্রমও বাঁচবে এবং তারা ওয়েবসাইটটি নিয়ে আরও সন্তুষ্ট এবং খুশি হবে।",
            // Arabic
            "عَرَبِيّ": "ومن المزايا الأخرى لقراءة هذا الكتاب أنه يفيد مستخدمي المواقع التي تم تصميمها وتطويرها وفقًا لإرشادات الكتاب. سيحصل المستخدمون على تجربة أفضل عند زيارتهم لموقع ويب سهل الاستخدام والفهم، وسيكونون أكثر عرضة للعودة إلى موقع الويب أو التوصية به أو الوثوق به. كما سيوفر المستخدمون الوقت والجهد عند استخدامهم لموقع ويب مصمم لتلبية احتياجاتهم وتوقعاتهم، وسيكونون أكثر رضا وسعادة بالموقع.",
            // Persian
            "فارسی": "یکی دیگر از مزیت های مطالعه این کتاب این است که برای کاربران وب سایت هایی که بر اساس دستورالعمل های کتاب طراحی و توسعه یافته اند، مفید است. کاربران با بازدید از وب سایتی که استفاده و درک آن آسان است، تجربه بهتری خواهند داشت و احتمال بازگشت، توصیه یا اعتماد به وب سایت بیشتر خواهد بود. کاربران همچنین با استفاده از وب سایتی که مطابق با نیازها و انتظارات آنها طراحی شده است در زمان و تلاش خود صرفه جویی می کنند و از وب سایت رضایت و رضایت بیشتری خواهند داشت.",
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
        document.title = "MHA - " + "Don't Make Me Think";

        // - > Changing the translations
        document.querySelectorAll("#Chapter-information-short-description-paragraph").forEach((item, index) => {

            item.textContent = dont_make_me_think["TableOfContents"][index]["ShortDescriptionAboutChapter"][newLanguage];
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

            item.textContent = dont_make_me_think["TotalDescriptionAboutTheBook"][index][newLanguage];
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
        item.href = "../../../../DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURIComponent(neededProperties.Currrent_Language_Selected);
    });
});

// Documentation
// This section is for when the page is resized
window.addEventListener('resize', function () {
    // Calling the Responsive Function
    BaseResponsiveAdaptiveFunctionality();
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