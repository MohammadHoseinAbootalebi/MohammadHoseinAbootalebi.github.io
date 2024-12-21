// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©© All Rights are Reserved by Muhammad Husain Abootalebi ©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //

// -------------------------------- ↓ Variables ↓ -------------------------------- //

// -- >> Number of records per page
var number_of_records_per_page = 3;

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// ■■■■■■■■■■■■■■■■■■■ ↓ Projects Books Courses Database ↓ ■■■■■■■■■■■■■■■■■■■■■■■ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //

// -- >> Projects | Books | Courses Database 
var muhammad_husain_abootalebi_projects_books_courses_records = {
        // -- >> Projects
        "projects": {
                // -- >> UI & UX Designer
                "UI & UX Designer": [
                        // -- > 3
                        {
                                "title": "Project Test 3",
                                "description": "This is a test project :)",
                                "intro_image_link": "assets/img/img.png",
                                "detail_markdown_link": "assets/markdown/readme.md",
                        },
                        // -- > 2
                        {
                                "title": "Project Test 2",
                                "description": "This is a test project :)",
                                "intro_image_link": "assets/img/img.png",
                                "detail_markdown_link": "assets/markdown/readme.md",
                        },
                        // -- > 1
                        {
                                "title": "Project Test 1",
                                "description": "This is a test project :)",
                                "intro_image_link": "assets/img/img.png",
                                "detail_markdown_link": "assets/markdown/readme.md",
                        },
                ],
                // -- >> Flutter Developer
                "Flutter Developer": [],
                // -- >> Full Stack Developer
                "Full Stack Developer": [],
                // -- >> Android Developer
                "Android Developer": [],
                // -- >> AI Engineer
                "AI Engineer": [],
                // -- >> Industrial Designer
                "Industrial Designer": [],
                // -- >> Self-Driving Automobile Engineer
                "Self-Driving Automobile Engineer": [],
                // -- >> Mechanical Engineer
                "Mechanical Engineer": [],
        },
        // -- >> Books
        "books": {
                // -- >> UI & UX Designer
                "UI & UX Designer": [
                        // -- > NLP - 2 : Mastering NLP from Foundations to LLMs
                        {
                                "title": {
                                        'English': "Mastering NLP from Foundations to LLMs",
                                        'Deutsch': "Mastering NLP from Foundations to LLMs",
                                        '中国人': "Mastering NLP from Foundations to LLMs",
                                        'Русский': "Mastering NLP from Foundations to LLMs",
                                        'Français': "Mastering NLP from Foundations to LLMs",
                                        '日本語': "Mastering NLP from Foundations to LLMs",
                                        '한국인': "Mastering NLP from Foundations to LLMs",
                                        'Español': "Mastering NLP from Foundations to LLMs",
                                        'हिंदी': "Mastering NLP from Foundations to LLMs",
                                        'Português': "Mastering NLP from Foundations to LLMs",
                                        'বাংলা': "Mastering NLP from Foundations to LLMs",
                                        'عَرَبِيّ': "Mastering NLP from Foundations to LLMs",
                                        'فارسی': "Mastering NLP from Foundations to LLMs",
                                },
                                "description": {
                                        'English': "Mastering NLP from Foundations to LLMs is a comprehensive guide authored by Lior Gazit and Meysam Ghaffari, published on April 26, 2024. This book offers an in-depth introduction to Natural Language Processing (NLP) techniques, beginning with the mathematical foundations of machine learning and progressing to advanced applications involving Large Language Models (LLMs). It covers essential topics such as text preprocessing, traditional machine learning methods for text classification, and deep learning language models. Additionally, the authors explore the theory, design, and implementation of LLMs, providing practical Python code samples throughout. The book also discusses future trends in NLP and includes expert insights, making it a valuable resource for both beginners and experienced practitioners aiming to solve real-world business problems using Python. ",
                                        'Deutsch': "„Mastering NLP from Foundations to LLMs“ ist ein umfassender Leitfaden von Lior Gazit und Meysam Ghaffari, der am 26. April 2024 veröffentlicht wurde. Dieses Buch bietet eine ausführliche Einführung in Techniken der natürlichen Sprachverarbeitung (Natural Language Processing, NLP), beginnend mit den mathematischen Grundlagen des maschinellen Lernens und fortschreitend bis hin zu fortgeschrittenen Anwendungen mit Large Language Models (LLMs). Es behandelt wichtige Themen wie Textvorverarbeitung, traditionelle Methoden des maschinellen Lernens zur Textklassifizierung und Deep-Learning-Sprachmodelle. Darüber hinaus untersuchen die Autoren die Theorie, das Design und die Implementierung von LLMs und liefern durchgehend praktische Python-Codebeispiele. Das Buch diskutiert auch zukünftige Trends in der NLP und enthält Experteneinblicke, was es zu einer wertvollen Ressource sowohl für Anfänger als auch für erfahrene Praktiker macht, die reale Geschäftsprobleme mit Python lösen möchten.",
                                        '中国人': "《从基础到 LLM 精通 NLP》是一本综合指南，由 Lior Gazit 和 Meysam Ghaffari 撰写，出版于 2024 年 4 月 26 日。本书深入介绍了自然语言处理 (NLP) 技术，从机器学习的数学基础开始，逐步介绍涉及大型语言模型 (LLM) 的高级应用。它涵盖了文本预处理、用于文本分类的传统机器学习方法和深度学习语言模型等重要主题。此外，作者还探讨了 LLM 的理论、设计和实现，并提供了实用的 Python 代码示例。本书还讨论了 NLP 的未来趋势，并包含专家见解，使其成为初学者和经验丰富的从业者使用 Python 解决实际业务问题的宝贵资源。",
                                        'Русский': "Mastering NLP from Foundations to LLMs — это всеобъемлющее руководство, написанное Лиором Газитом и Мейсамом Гаффари, опубликованное 26 апреля 2024 года. Эта книга предлагает углубленное введение в методы обработки естественного языка (NLP), начиная с математических основ машинного обучения и заканчивая продвинутыми приложениями, включающими большие языковые модели (LLM). Она охватывает такие важные темы, как предварительная обработка текста, традиционные методы машинного обучения для классификации текста и модели языка глубокого обучения. Кроме того, авторы изучают теорию, проектирование и реализацию LLM, предоставляя практические примеры кода Python. В книге также обсуждаются будущие тенденции в области NLP и содержатся экспертные идеи, что делает ее ценным ресурсом как для новичков, так и для опытных практиков, стремящихся решать реальные бизнес-задачи с помощью Python.",
                                        'Français': "Mastering NLP from Foundations to LLMs est un guide complet rédigé par Lior Gazit et Meysam Ghaffari, publié le 26 avril 2024. Ce livre propose une introduction approfondie aux techniques de traitement du langage naturel (NLP), en commençant par les fondements mathématiques de l'apprentissage automatique et en progressant vers des applications avancées impliquant de grands modèles linguistiques (LLM). Il couvre des sujets essentiels tels que le prétraitement de texte, les méthodes traditionnelles d'apprentissage automatique pour la classification de texte et les modèles de langage d'apprentissage profond. De plus, les auteurs explorent la théorie, la conception et la mise en œuvre des LLM, en fournissant des exemples de code Python pratiques tout au long du livre. Le livre aborde également les tendances futures du NLP et comprend des points de vue d'experts, ce qui en fait une ressource précieuse pour les débutants et les praticiens expérimentés qui souhaitent résoudre des problèmes commerciaux réels à l'aide de Python.",
                                        '日本語': "『Mastering NLP from Foundations to LLMs』は、Lior Gazit と Meysam Ghaffari が執筆し、2024 年 4 月 26 日に出版された総合ガイドです。この本は、機械学習の数学的基礎から始まり、大規模言語モデル (LLM) を含む高度なアプリケーションまで、自然言語処理 (NLP) 技術の詳細な入門書です。テキスト前処理、テキスト分類のための従来の機械学習手法、ディープラーニング言語モデルなどの重要なトピックを取り上げています。さらに、著者は LLM の理論、設計、実装を探求し、全体を通して実用的な Python コードサンプルを提供しています。この本では、NLP の将来の動向についても説明されており、専門家の洞察も含まれているため、Python を使用して実際のビジネス問題を解決しようとしている初心者と経験豊富な実務家の両方にとって貴重なリソースとなっています。",
                                        '한국인': "Mastering NLP from Foundations to LLMs는 Lior Gazit과 Meysam Ghaffari가 저술하고 2024년 4월 26일에 출판한 포괄적인 가이드입니다. 이 책은 기계 학습의 수학적 기초에서 시작하여 대규모 언어 모델(LLM)을 포함하는 고급 애플리케이션으로 진행되는 자연어 처리(NLP) 기술에 대한 심층적인 소개를 제공합니다. 텍스트 전처리, 텍스트 분류를 위한 기존 기계 학습 방법, 딥 러닝 언어 모델과 같은 필수 주제를 다룹니다. 또한 저자는 LLM의 이론, 설계 및 구현을 탐구하고 전반적으로 실용적인 Python 코드 샘플을 제공합니다. 이 책은 또한 NLP의 미래 동향에 대해 논의하고 전문가의 통찰력을 포함하여 Python을 사용하여 실제 비즈니스 문제를 해결하려는 초보자와 숙련된 실무자 모두에게 귀중한 리소스가 됩니다.",
                                        'Español': "Mastering NLP from Foundations to LLMs es una guía completa escrita por Lior Gazit y Meysam Ghaffari, publicada el 26 de abril de 2024. Este libro ofrece una introducción detallada a las técnicas de procesamiento del lenguaje natural (PLN), comenzando con los fundamentos matemáticos del aprendizaje automático y avanzando hacia aplicaciones avanzadas que involucran modelos de lenguaje grandes (LLM). Abarca temas esenciales como el preprocesamiento de texto, los métodos tradicionales de aprendizaje automático para la clasificación de texto y los modelos de lenguaje de aprendizaje profundo. Además, los autores exploran la teoría, el diseño y la implementación de los LLM, proporcionando ejemplos prácticos de código Python en todo momento. El libro también analiza las tendencias futuras en PNL e incluye perspectivas de expertos, lo que lo convierte en un recurso valioso tanto para principiantes como para profesionales experimentados que buscan resolver problemas comerciales del mundo real utilizando Python.",
                                        'हिंदी': "मास्टरिंग एनएलपी फ्रॉम फाउंडेशन्स टू एलएलएम लियोर गज़िट और मेसम गफ़री द्वारा लिखित एक व्यापक गाइड है, जिसे 26 अप्रैल, 2024 को प्रकाशित किया गया था। यह पुस्तक नेचुरल लैंग्वेज प्रोसेसिंग (एनएलपी) तकनीकों का गहन परिचय प्रदान करती है, जो मशीन लर्निंग के गणितीय आधारों से शुरू होकर लार्ज लैंग्वेज मॉडल्स (एलएलएम) से जुड़े उन्नत अनुप्रयोगों तक आगे बढ़ती है। इसमें टेक्स्ट प्रीप्रोसेसिंग, टेक्स्ट वर्गीकरण के लिए पारंपरिक मशीन लर्निंग विधियाँ और डीप लर्निंग लैंग्वेज मॉडल जैसे आवश्यक विषय शामिल हैं। इसके अतिरिक्त, लेखक एलएलएम के सिद्धांत, डिज़ाइन और कार्यान्वयन का पता लगाते हैं, जो पूरे समय व्यावहारिक पायथन कोड नमूने प्रदान करते हैं। पुस्तक एनएलपी में भविष्य के रुझानों पर भी चर्चा करती है और इसमें विशेषज्ञ अंतर्दृष्टि शामिल है, जो इसे पायथन का उपयोग करके वास्तविक दुनिया की व्यावसायिक समस्याओं को हल करने का लक्ष्य रखने वाले शुरुआती और अनुभवी चिकित्सकों दोनों के लिए एक मूल्यवान संसाधन बनाती है।",
                                        'Português': "Mastering NLP from Foundations to LLMs é um guia completo da autoria de Lior Gazit e Meysam Ghaffari, publicado a 26 de abril de 2024. Este livro oferece uma introdução detalhada às técnicas de Processamento de Linguagem Natural (PLN), começando pelos fundamentos matemáticos da aprendizagem automática. e progredindo para aplicações avançadas envolvendo Large Language Models (LLMs). Abrange tópicos essenciais como o pré-processamento de texto, os métodos tradicionais de aprendizagem automática para classificação de texto e os modelos de linguagem de aprendizagem profunda. Além disso, os autores exploram a teoria, o design e a implementação de LLMs, fornecendo exemplos práticos de código Python. O livro também discute as tendências futuras em PNL e inclui insights de especialistas, tornando-o um recurso valioso tanto para principiantes como para profissionais experientes que desejam resolver problemas de negócios do mundo real utilizando Python.",
                                        'বাংলা': "ফাউন্ডেশন থেকে এলএলএম পর্যন্ত এনএলপি মাস্টারিং হল লিওর গাজিট এবং মেসাম গাফফারি দ্বারা রচিত একটি বিস্তৃত নির্দেশিকা, যা 26 এপ্রিল, 2024-এ প্রকাশিত হয়েছে। এই বইটি মেশিন লার্নিংয়ের গাণিতিক ভিত্তি দিয়ে শুরু করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (এনএলপি) কৌশলগুলির একটি গভীরভাবে পরিচিতি প্রদান করে। এবং বৃহৎ ভাষার মডেল জড়িত উন্নত অ্যাপ্লিকেশনে অগ্রগতি (এলএলএম)। এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন পাঠ্য প্রিপ্রসেসিং, পাঠ্য শ্রেণিবিন্যাসের জন্য প্রথাগত মেশিন লার্নিং পদ্ধতি এবং গভীর শিক্ষার ভাষা মডেল। অতিরিক্তভাবে, লেখকরা LLM-এর তত্ত্ব, নকশা এবং বাস্তবায়ন অন্বেষণ করেন, সর্বত্র ব্যবহারিক পাইথন কোড নমুনা প্রদান করেন। বইটি NLP-এর ভবিষ্যৎ প্রবণতা নিয়েও আলোচনা করে এবং এতে বিশেষজ্ঞের অন্তর্দৃষ্টি অন্তর্ভুক্ত রয়েছে, যা পাইথন ব্যবহার করে বাস্তব-বিশ্বের ব্যবসায়িক সমস্যা সমাধানের লক্ষ্যে নতুন এবং অভিজ্ঞ অনুশীলনকারীদের উভয়ের জন্যই এটিকে একটি মূল্যবান সম্পদ করে তুলেছে।",
                                        'عَرَبِيّ': "يعد كتاب Mastering NLP from Foundations to LLMs دليلاً شاملاً من تأليف ليور جازيت وميسام غفاري، ونُشر في 26 أبريل 2024. يقدم هذا الكتاب مقدمة متعمقة لتقنيات معالجة اللغة الطبيعية (NLP)، بدءًا من الأسس الرياضية للتعلم الآلي والتقدم إلى التطبيقات المتقدمة التي تتضمن نماذج اللغة الكبيرة (LLMs). ويغطي موضوعات أساسية مثل معالجة النصوص مسبقًا، وطرق التعلم الآلي التقليدية لتصنيف النصوص، ونماذج اللغة للتعلم العميق. بالإضافة إلى ذلك، يستكشف المؤلفون نظرية وتصميم وتنفيذ نماذج اللغة الكبيرة، مما يوفر عينات عملية من أكواد بايثون في جميع أنحاء الكتاب. يناقش الكتاب أيضًا الاتجاهات المستقبلية في معالجة اللغة الطبيعية ويتضمن رؤى الخبراء، مما يجعله موردًا قيمًا للمبتدئين والممارسين ذوي الخبرة الذين يهدفون إلى حل مشاكل الأعمال في العالم الحقيقي باستخدام بايثون.",
                                        'فارسی': "تسلط بر NLP از مبانی تا LLM یک راهنمای جامع است که توسط لیور گازیت و میثم غفاری منتشر شده است که در 26 آوریل 2024 منتشر شده است. این کتاب مقدمه ای عمیق بر تکنیک های پردازش زبان طبیعی (NLP) ارائه می دهد که با مبانی ریاضی یادگیری ماشین شروع می شود. و پیشرفت به سمت برنامه های کاربردی پیشرفته شامل مدل های زبان بزرگ (LLM). موضوعات ضروری مانند پیش پردازش متن، روش های سنتی یادگیری ماشینی برای طبقه بندی متن و مدل های زبان یادگیری عمیق را پوشش می دهد. علاوه بر این، نویسندگان نظریه، طراحی و پیاده سازی LLM ها را بررسی می کنند و نمونه های عملی کد پایتون را در سراسر آن ارائه می کنند. این کتاب همچنین روندهای آینده در NLP را مورد بحث قرار می‌دهد و شامل بینش‌های متخصص می‌شود، که آن را به منبعی ارزشمند برای مبتدیان و متخصصان با تجربه تبدیل می‌کند که هدفشان حل مشکلات تجاری دنیای واقعی با استفاده از پایتون است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/4 - Mastering NLP from Foundations to LLMs.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/English/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/German/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Chinese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Russian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/French/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Japanese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Korean/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Spanish/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Hindi/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Portugues/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Bengali/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Arabic/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Persian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                },
                        },
                        // -- > Flutter - 1 : Flutter Complete Reference Book
                        {
                                "title": {
                                        'English': "Flutter Complete Reference",
                                        'Deutsch': "Flutter Complete Reference",
                                        '中国人': "Flutter Complete Reference",
                                        'Русский': "Flutter Complete Reference",
                                        'Français': "Flutter Complete Reference",
                                        '日本語': "Flutter Complete Reference",
                                        '한국인': "Flutter Complete Reference",
                                        'Español': "Flutter Complete Reference",
                                        'हिंदी': "Flutter Complete Reference",
                                        'Português': "Flutter Complete Reference",
                                        'বাংলা': "Flutter Complete Reference",
                                        'عَرَبِيّ': "Flutter Complete Reference",
                                        'فارسی': "Flutter Complete Reference",
                                },
                                "description": {
                                        'English': "Flutter Complete Reference by Alberto Miola is a comprehensive guide for developers seeking to master Flutter, Google's open-source UI toolkit for crafting natively compiled applications. The book provides a deep dive into the fundamentals of Flutter, covering essential topics like widget architecture, state management, animations, and advanced techniques for creating responsive and high-performance apps. With practical examples and detailed explanations, it serves as both a beginner-friendly introduction and a valuable resource for experienced developers looking to refine their skills. Alberto Miola combines clarity with hands-on approaches, making it an indispensable reference for Flutter enthusiasts.",
                                        'Deutsch': "Flutter Complete Reference von Alberto Miola ist ein umfassender Leitfaden für Entwickler, die Flutter beherrschen möchten, Googles Open-Source-UI-Toolkit zum Erstellen nativ kompilierter Anwendungen. Das Buch bietet einen tiefen Einblick in die Grundlagen von Flutter und behandelt wichtige Themen wie Widget-Architektur, Statusverwaltung, Animationen und fortgeschrittene Techniken zum Erstellen reaktionsfähiger und leistungsstarker Apps. Mit praktischen Beispielen und detaillierten Erklärungen dient es sowohl als anfängerfreundliche Einführung als auch als wertvolle Ressource für erfahrene Entwickler, die ihre Fähigkeiten verfeinern möchten. Alberto Miola kombiniert Klarheit mit praktischen Ansätzen und macht es zu einem unverzichtbaren Nachschlagewerk für Flutter-Enthusiasten.",
                                        '中国人': "Alberto Miola 编写的《Flutter 完整参考》是一本全面的指南，适合希望掌握 Flutter 的开发人员，Flutter 是 Google 的开源 UI 工具包，用于制作原生编译的应用程序。本书深入探讨了 Flutter 的基础知识，涵盖了小部件架构、状态管理、动画和创建响应式高性能应用程序的高级技术等基本主题。通过实际示例和详细解释，它既是初学者友好的入门书，也是希望提高技能的经验丰富的开发人员的宝贵资源。Alberto Miola 将清晰度与实践方法相结合，使其成为 Flutter 爱好者不可或缺的参考资料。",
                                        'Русский': "Flutter Complete Reference Альберто Миолы — это всеобъемлющее руководство для разработчиков, стремящихся освоить Flutter, набор инструментов пользовательского интерфейса с открытым исходным кодом от Google для создания скомпилированных приложений. Книга предлагает глубокое погружение в основы Flutter, охватывая такие важные темы, как архитектура виджетов, управление состоянием, анимация и передовые методы создания адаптивных и высокопроизводительных приложений. С практическими примерами и подробными объяснениями она служит как введением для новичков, так и ценным ресурсом для опытных разработчиков, желающих усовершенствовать свои навыки. Альберто Миола сочетает ясность с практическими подходами, что делает ее незаменимым справочником для энтузиастов Flutter.",
                                        'Français': "Flutter Complete Reference d'Alberto Miola est un guide complet pour les développeurs qui cherchent à maîtriser Flutter, la boîte à outils d'interface utilisateur open source de Google pour la création d'applications compilées en mode natif. Le livre propose une plongée en profondeur dans les fondamentaux de Flutter, couvrant des sujets essentiels comme l'architecture des widgets, la gestion des états, les animations et les techniques avancées pour créer des applications réactives et performantes. Avec des exemples pratiques et des explications détaillées, il sert à la fois d'introduction conviviale pour les débutants et de ressource précieuse pour les développeurs expérimentés qui cherchent à perfectionner leurs compétences. Alberto Miola allie clarté et approches pratiques, ce qui en fait une référence indispensable pour les passionnés de Flutter.",
                                        '日本語': "Alberto Miola 著の『Flutter Complete Reference』は、ネイティブ コンパイル アプリケーションを作成するための Google のオープンソース UI ツールキットである Flutter を習得したい開発者向けの総合ガイドです。本書では、ウィジェット アーキテクチャ、状態管理、アニメーション、レスポンシブで高性能なアプリケーションを作成するための高度なテクニックなど、Flutter の基礎を深く掘り下げて解説しています。実用的な例と詳細な説明が盛り込まれており、初心者向けの入門書としてだけでなく、スキルを磨きたい経験豊富な開発者にとって貴重なリソースとしても役立ちます。Alberto Miola は、明快さと実践的なアプローチを組み合わせており、Flutter 愛好家にとって欠かせないリファレンスとなっています。",
                                        '한국인': "Alberto Miola의 Flutter Complete Reference는 네이티브 컴파일 애플리케이션을 제작하기 위한 Google의 오픈소스 UI 툴킷인 Flutter를 마스터하려는 개발자를 위한 포괄적인 가이드입니다. 이 책은 위젯 아키텍처, 상태 관리, 애니메이션 및 반응형 고성능 앱을 만드는 고급 기술과 같은 필수 주제를 다루는 Flutter의 기본에 대한 심층적인 분석을 제공합니다. 실용적인 예제와 자세한 설명이 포함되어 있어 초보자에게 친숙한 소개서이자 기술을 다듬고자 하는 숙련된 개발자에게 귀중한 리소스 역할을 합니다. Alberto Miola는 명확성과 실무적 접근 방식을 결합하여 Flutter 애호가에게 없어서는 안 될 참고 자료가 되었습니다.",
                                        'Español': "Flutter Complete Reference de Alberto Miola es una guía completa para desarrolladores que buscan dominar Flutter, el kit de herramientas de interfaz de usuario de código abierto de Google para crear aplicaciones compiladas de forma nativa. El libro ofrece una inmersión profunda en los fundamentos de Flutter y cubre temas esenciales como la arquitectura de widgets, la gestión de estados, las animaciones y las técnicas avanzadas para crear aplicaciones responsivas y de alto rendimiento. Con ejemplos prácticos y explicaciones detalladas, sirve como una introducción para principiantes y un recurso valioso para desarrolladores experimentados que buscan perfeccionar sus habilidades. Alberto Miola combina claridad con enfoques prácticos, lo que lo convierte en una referencia indispensable para los entusiastas de Flutter.",
                                        'हिंदी': "अल्बर्टो मिओला द्वारा लिखित फ़्लटर कम्प्लीट रेफरेंस उन डेवलपर्स के लिए एक व्यापक गाइड है जो फ़्लटर में महारत हासिल करना चाहते हैं, यह नेटिवली कम्पाइल किए गए एप्लिकेशन तैयार करने के लिए Google का ओपन-सोर्स UI टूलकिट है। यह पुस्तक फ़्लटर के मूल सिद्धांतों में गहराई से गोता लगाती है, जिसमें विजेट आर्किटेक्चर, स्टेट मैनेजमेंट, एनिमेशन और रिस्पॉन्सिव और हाई-परफ़ॉर्मेंस ऐप बनाने के लिए उन्नत तकनीकों जैसे आवश्यक विषयों को शामिल किया गया है। व्यावहारिक उदाहरणों और विस्तृत व्याख्याओं के साथ, यह शुरुआती लोगों के लिए एक अनुकूल परिचय और अपने कौशल को निखारने के इच्छुक अनुभवी डेवलपर्स के लिए एक मूल्यवान संसाधन दोनों के रूप में कार्य करता है। अल्बर्टो मिओला स्पष्टता को व्यावहारिक दृष्टिकोणों के साथ जोड़ता है, जो इसे फ़्लटर उत्साही लोगों के लिए एक अपरिहार्य संदर्भ बनाता है।",
                                        'Português': "Flutter Complete Reference de Alberto Miola é um guia completo para programadores que procuram dominar o Flutter, o kit de ferramentas de UI de código aberto da Google para criar aplicações compiladas nativamente. O livro proporciona um mergulho profundo nos fundamentos do Flutter, abordando tópicos essenciais como a arquitetura de widgets, a gestão de estado, as animações e as técnicas avançadas para criar aplicações responsivas e de alto desempenho. Com exemplos práticos e explicações detalhadas, serve tanto como uma introdução para principiantes como um recurso valioso para programadores experientes que procuram melhorar as suas capacidades. Alberto Miola combina clareza com abordagens práticas, tornando-o uma referência indispensável para os entusiastas do Flutter.",
                                        'বাংলা': "অ্যালবার্তো মিওলার ফ্লাটার কমপ্লিট রেফারেন্স হল ফ্লাটারে দক্ষতা অর্জন করতে চাওয়া ডেভেলপারদের জন্য একটি বিস্তৃত নির্দেশিকা, নেটিভলি কম্পাইল করা অ্যাপ্লিকেশন তৈরির জন্য Google-এর ওপেন-সোর্স UI টুলকিট। বইটি ফ্লটারের মৌলিক বিষয়গুলির মধ্যে গভীর ডুব দেয়, উইজেট আর্কিটেকচার, রাষ্ট্র পরিচালনা, অ্যানিমেশন এবং প্রতিক্রিয়াশীল এবং উচ্চ-পারফরম্যান্স অ্যাপ তৈরির জন্য উন্নত কৌশলগুলির মতো প্রয়োজনীয় বিষয়গুলিকে কভার করে৷ ব্যবহারিক উদাহরণ এবং বিশদ ব্যাখ্যা সহ, এটি একটি শিক্ষানবিস-বন্ধুত্বপূর্ণ ভূমিকা এবং তাদের দক্ষতা পরিমার্জিত করার জন্য অভিজ্ঞ বিকাশকারীদের জন্য একটি মূল্যবান সংস্থান উভয়ই কাজ করে৷ আলবার্তো মিওলা হ্যান্ডস-অন পন্থাগুলির সাথে স্পষ্টতাকে একত্রিত করে, এটিকে ফ্লটার উত্সাহীদের জন্য একটি অপরিহার্য রেফারেন্স করে তোলে৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Complete Reference من تأليف Alberto Miola دليلاً شاملاً للمطورين الذين يسعون إلى إتقان Flutter، وهي مجموعة أدوات واجهة المستخدم مفتوحة المصدر من Google لإنشاء تطبيقات مجمعة محليًا. يوفر الكتاب نظرة متعمقة في أساسيات Flutter، ويغطي موضوعات أساسية مثل بنية الأداة، وإدارة الحالة، والرسوم المتحركة، والتقنيات المتقدمة لإنشاء تطبيقات سريعة الاستجابة وعالية الأداء. مع أمثلة عملية وشروحات مفصلة، ​​فهو بمثابة مقدمة سهلة للمبتدئين ومورد قيم للمطورين ذوي الخبرة الذين يتطلعون إلى صقل مهاراتهم. يجمع Alberto Miola بين الوضوح والأساليب العملية، مما يجعله مرجعًا لا غنى عنه لعشاق Flutter.",
                                        'فارسی': "مرجع کامل Flutter توسط Alberto Miola یک راهنمای جامع برای توسعه دهندگانی است که به دنبال تسلط بر Flutter، جعبه ابزار UI منبع باز Google برای ایجاد برنامه های کاربردی کامپایل شده بومی هستند. این کتاب به بررسی اصول فلاتر می پردازد و موضوعات ضروری مانند معماری ویجت، مدیریت حالت، انیمیشن ها و تکنیک های پیشرفته برای ایجاد اپلیکیشن های پاسخگو و با کارایی بالا را پوشش می دهد. با مثال‌های عملی و توضیحات مفصل، هم به‌عنوان مقدمه‌ای مناسب برای مبتدیان و هم منبعی ارزشمند برای توسعه‌دهندگان با تجربه ای است که به دنبال اصلاح مهارت‌های خود هستند. آلبرتو میولا وضوح را با رویکردهای عملی ترکیب می کند و آن را به مرجعی ضروری برای علاقه مندان به فلاتر تبدیل می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/2 - Flutter Complete Reference.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/2%20-%20Flutter%20Complete%20Reference.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/2%20-%20Flutter%20Complete%20Reference.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/2%20-%20Flutter%20Complete%20Reference.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/2%20-%20Flutter%20Complete%20Reference.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/2%20-%20Flutter%20Complete%20Reference.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/2%20-%20Flutter%20Complete%20Reference.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/2%20-%20Flutter%20Complete%20Reference.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/2%20-%20Flutter%20Complete%20Reference.md",
                                },
                        },
                        // -- > Flutter - 2 : Flutter Apprentice
                        {
                                "title": {
                                        'English': "Flutter Apprentice",
                                        'Deutsch': "Flutter Apprentice",
                                        '中国人': "Flutter Apprentice",
                                        'Русский': "Flutter Apprentice",
                                        'Français': "Flutter Apprentice",
                                        '日本語': "Flutter Apprentice",
                                        '한국인': "Flutter Apprentice",
                                        'Español': "Flutter Apprentice",
                                        'हिंदी': "Flutter Apprentice",
                                        'Português': "Flutter Apprentice",
                                        'বাংলা': "Flutter Apprentice",
                                        'عَرَبِيّ': "Flutter Apprentice",
                                        'فارسی': "Flutter Apprentice",
                                },
                                "description": {
                                        'English': "Flutter Apprentice is a comprehensive guide for beginners to learn Flutter, a popular open-source framework for building cross-platform mobile applications. Authored by a team of experienced developers, the book provides a hands-on, project-based approach to mastering Flutter. It covers the fundamentals of Dart programming, state management, UI design, and integrating features like animations and APIs. Each chapter builds on practical projects, enabling readers to develop real-world apps while gaining confidence in their skills. With clear explanations, step-by-step instructions, and tips to avoid common pitfalls, Flutter Apprentice is an excellent resource for aspiring app developers who want to bring their ideas to life on Android and iOS platforms.",
                                        'Deutsch': "Flutter Apprentice ist ein umfassender Leitfaden für Anfänger zum Erlernen von Flutter, einem beliebten Open-Source-Framework zum Erstellen plattformübergreifender mobiler Anwendungen. Das von einem Team erfahrener Entwickler verfasste Buch bietet einen praktischen, projektbasierten Ansatz zum Erlernen von Flutter. Es behandelt die Grundlagen der Dart-Programmierung, der Zustandsverwaltung, des UI-Designs und der Integration von Funktionen wie Animationen und APIs. Jedes Kapitel basiert auf praktischen Projekten, sodass die Leser reale Apps entwickeln und gleichzeitig Vertrauen in ihre Fähigkeiten gewinnen können. Mit klaren Erklärungen, Schritt-für-Schritt-Anleitungen und Tipps zum Vermeiden häufiger Fehler ist Flutter Apprentice eine hervorragende Ressource für angehende App-Entwickler, die ihre Ideen auf Android- und iOS-Plattformen zum Leben erwecken möchten.",
                                        '中国人': "Flutter Apprentice 是一本全面的指南，帮助初学者学习 Flutter，Flutter 是一种用于构建跨平台移动应用程序的流行开源框架。本书由一支经验丰富的开发人员团队撰写，提供了一种基于项目的动手实践方法来掌握 Flutter。它涵盖了 Dart 编程、状态管理、UI 设计和集成动画和 API 等功能的基础知识。每一章都以实际项目为基础，使读者能够开发真实的应用程序，同时增强对自己技能的信心。Flutter Apprentice 具有清晰的解释、分步说明和避免常见陷阱的技巧，是希望在 Android 和 iOS 平台上实现自己想法的有抱负的应用程序开发人员的绝佳资源。",
                                        'Русский': "Flutter Apprentice — это полное руководство для начинающих по изучению Flutter, популярного фреймворка с открытым исходным кодом для создания кроссплатформенных мобильных приложений. Книга, написанная командой опытных разработчиков, предлагает практический подход к освоению Flutter на основе проектов. Она охватывает основы программирования Dart, управления состоянием, проектирования пользовательского интерфейса и интеграции таких функций, как анимация и API. Каждая глава основана на практических проектах, что позволяет читателям разрабатывать реальные приложения, обретая уверенность в своих навыках. Благодаря понятным объяснениям, пошаговым инструкциям и советам по избежанию распространенных ошибок Flutter Apprentice является отличным ресурсом для начинающих разработчиков приложений, которые хотят воплотить свои идеи в жизнь на платформах Android и iOS.",
                                        'Français': "Flutter Apprentice est un guide complet destiné aux débutants pour apprendre Flutter, un framework open source populaire pour la création d'applications mobiles multiplateformes. Rédigé par une équipe de développeurs expérimentés, le livre propose une approche pratique et basée sur des projets pour maîtriser Flutter. Il couvre les fondamentaux de la programmation Dart, la gestion des états, la conception d'interface utilisateur et l'intégration de fonctionnalités telles que les animations et les API. Chaque chapitre s'appuie sur des projets pratiques, permettant aux lecteurs de développer des applications concrètes tout en gagnant en confiance dans leurs compétences. Avec des explications claires, des instructions étape par étape et des conseils pour éviter les pièges courants, Flutter Apprentice est une excellente ressource pour les développeurs d'applications en herbe qui souhaitent donner vie à leurs idées sur les plateformes Android et iOS.",
                                        '日本語': "Flutter Apprentice は、クロスプラットフォーム モバイル アプリケーションを構築するための人気のオープン ソース フレームワークである Flutter を初心者が学習するための総合ガイドです。経験豊富な開発者チームが執筆したこの本は、Flutter を習得するための実践的なプロジェクト ベースのアプローチを提供します。Dart プログラミング、状態管理、UI デザイン、アニメーションや API などの機能の統合の基礎をカバーしています。各章は実践的なプロジェクトに基づいているため、読者はスキルに自信を持ちながら、実際のアプリを開発できます。わかりやすい説明、ステップ バイ ステップの手順、よくある落とし穴を避けるためのヒントが満載の Flutter Apprentice は、Android および iOS プラットフォームでアイデアを実現したい意欲的なアプリ開発者にとって優れたリソースです。",
                                        '한국인': "Flutter Apprentice는 크로스 플랫폼 모바일 애플리케이션을 구축하기 위한 인기 있는 오픈소스 프레임워크인 Flutter를 초보자가 배우기 위한 포괄적인 가이드입니다. 숙련된 개발자 팀이 저술한 이 책은 Flutter를 마스터하기 위한 실무적이고 프로젝트 기반의 접근 방식을 제공합니다. Dart 프로그래밍, 상태 관리, UI 디자인, 애니메이션 및 API와 같은 기능 통합의 기본 사항을 다룹니다. 각 장은 실용적인 프로젝트를 기반으로 하여 독자가 기술에 대한 자신감을 얻는 동시에 실제 앱을 개발할 수 있도록 합니다. 명확한 설명, 단계별 지침, 일반적인 함정을 피하기 위한 팁이 포함된 Flutter Apprentice는 Android 및 iOS 플랫폼에서 아이디어를 실현하고자 하는 야심 찬 앱 개발자에게 훌륭한 리소스입니다.",
                                        'Español': "Flutter Apprentice es una guía completa para principiantes que desean aprender Flutter, un popular marco de código abierto para crear aplicaciones móviles multiplataforma. Escrito por un equipo de desarrolladores experimentados, el libro ofrece un enfoque práctico basado en proyectos para dominar Flutter. Abarca los fundamentos de la programación Dart, la gestión de estados, el diseño de la interfaz de usuario y la integración de funciones como animaciones y API. Cada capítulo se basa en proyectos prácticos, lo que permite a los lectores desarrollar aplicaciones del mundo real mientras ganan confianza en sus habilidades. Con explicaciones claras, instrucciones paso a paso y consejos para evitar errores comunes, Flutter Apprentice es un excelente recurso para los aspirantes a desarrolladores de aplicaciones que desean dar vida a sus ideas en las plataformas Android e iOS.",
                                        'हिंदी': "फ़्लटर अप्रेंटिस शुरुआती लोगों के लिए फ़्लटर सीखने के लिए एक व्यापक मार्गदर्शिका है, जो क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने के लिए एक लोकप्रिय ओपन-सोर्स फ़्रेमवर्क है। अनुभवी डेवलपर्स की एक टीम द्वारा लिखित, यह पुस्तक फ़्लटर में महारत हासिल करने के लिए एक व्यावहारिक, प्रोजेक्ट-आधारित दृष्टिकोण प्रदान करती है। इसमें डार्ट प्रोग्रामिंग, स्टेट मैनेजमेंट, UI डिज़ाइन और एनिमेशन और API जैसी सुविधाओं को एकीकृत करने की बुनियादी बातों को शामिल किया गया है। प्रत्येक अध्याय व्यावहारिक परियोजनाओं पर आधारित है, जिससे पाठकों को अपने कौशल में आत्मविश्वास प्राप्त करते हुए वास्तविक दुनिया के ऐप विकसित करने में सक्षम बनाया जा सके। स्पष्ट स्पष्टीकरण, चरण-दर-चरण निर्देश और सामान्य नुकसानों से बचने के सुझावों के साथ, फ़्लटर अप्रेंटिस महत्वाकांक्षी ऐप डेवलपर्स के लिए एक उत्कृष्ट संसाधन है जो अपने विचारों को Android और iOS प्लेटफ़ॉर्म पर जीवंत करना चाहते हैं।",
                                        'Português': "Flutter Apprentice é um guia completo para principiantes aprenderem Flutter, uma estrutura popular de código aberto para a construção de aplicações móveis multiplataforma. Da autoria de uma equipa de programadores experientes, o livro oferece uma abordagem prática e baseada em projetos para dominar o Flutter. Abrange os fundamentos da programação Dart, gestão de estado, design de UI e integração de recursos como animações e APIs. Cada capítulo baseia-se em projetos práticos, permitindo aos leitores desenvolver aplicações do mundo real enquanto ganham confiança nas suas capacidades. Com explicações claras, instruções passo a passo e dicas para evitar armadilhas comuns, Flutter Apprentice é um excelente recurso para aspirantes a programadores de aplicações que desejam dar vida às suas ideias nas plataformas Android e iOS.",
                                        'বাংলা': "ফ্লটার অ্যাপ্রেন্টিস হল নতুনদের জন্য ফ্লটার শেখার জন্য একটি ব্যাপক নির্দেশিকা, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরির জন্য একটি জনপ্রিয় ওপেন-সোর্স ফ্রেমওয়ার্ক। অভিজ্ঞ ডেভেলপারদের একটি দল দ্বারা রচিত, বইটি ফ্লটারকে আয়ত্ত করার জন্য একটি হ্যান্ডস-অন, প্রকল্প-ভিত্তিক পদ্ধতি প্রদান করে। এটি ডার্ট প্রোগ্রামিং, স্টেট ম্যানেজমেন্ট, UI ডিজাইন এবং অ্যানিমেশন এবং API-এর মতো বৈশিষ্ট্যগুলিকে একীভূত করার মৌলিক বিষয়গুলি কভার করে৷ প্রতিটি অধ্যায় ব্যবহারিক প্রকল্পের উপর ভিত্তি করে তৈরি করে, পাঠকদের তাদের দক্ষতার প্রতি আস্থা অর্জনের সাথে সাথে বাস্তব-বিশ্বের অ্যাপ বিকাশ করতে সক্ষম করে। স্পষ্ট ব্যাখ্যা, ধাপে ধাপে নির্দেশাবলী এবং সাধারণ সমস্যাগুলি এড়াতে টিপস সহ, Flutter Apprentice উচ্চাকাঙ্ক্ষী অ্যাপ বিকাশকারীদের জন্য একটি চমৎকার সংস্থান যারা Android এবং iOS প্ল্যাটফর্মে তাদের ধারণাগুলিকে জীবন্ত করতে চান৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Apprentice دليلاً شاملاً للمبتدئين لتعلم Flutter، وهو إطار عمل مفتوح المصدر شائع لبناء تطبيقات جوال متعددة الأنظمة. يقدم الكتاب، الذي ألفه فريق من المطورين ذوي الخبرة، نهجًا عمليًا قائمًا على المشروع لإتقان Flutter. ويغطي أساسيات برمجة Dart وإدارة الحالة وتصميم واجهة المستخدم ودمج ميزات مثل الرسوم المتحركة وواجهات برمجة التطبيقات. يعتمد كل فصل على مشاريع عملية، مما يتيح للقراء تطوير تطبيقات واقعية مع اكتساب الثقة في مهاراتهم. مع التفسيرات الواضحة والتعليمات خطوة بخطوة والنصائح لتجنب الأخطاء الشائعة، يعد Flutter Apprentice موردًا ممتازًا لمطوري التطبيقات الطموحين الذين يرغبون في إحياء أفكارهم على منصات Android وiOS.",
                                        'فارسی': "Flutter Apprentice یک راهنمای جامع برای مبتدیان برای یادگیری Flutter است، یک فریم ورک منبع باز محبوب برای ساخت اپلیکیشن های موبایلی چند پلتفرمی. این کتاب که توسط تیمی از توسعه دهندگان با تجربه نوشته شده است، رویکردی عملی و مبتنی بر پروژه برای تسلط بر فلاتر ارائه می دهد. این مبانی برنامه نویسی Dart، مدیریت حالت، طراحی UI، و یکپارچه سازی ویژگی هایی مانند انیمیشن ها و API ها را پوشش می دهد. هر فصل بر اساس پروژه های عملی ساخته شده است و خوانندگان را قادر می سازد تا برنامه های دنیای واقعی را توسعه دهند و در عین حال به مهارت های خود اعتماد کنند. Flutter Apprentice با توضیحات واضح، دستورالعمل‌های گام به گام و نکاتی برای جلوگیری از مشکلات رایج، منبعی عالی برای توسعه‌دهندگان برنامه‌های مشتاقی است که می‌خواهند ایده‌های خود را در پلتفرم‌های اندروید و iOS زنده کنند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/1 - Flutter Apprentice.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/1%20-%20Flutter%20Apprentice.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/1%20-%20Flutter%20Apprentice.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/1%20-%20Flutter%20Apprentice.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/1%20-%20Flutter%20Apprentice.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/1%20-%20Flutter%20Apprentice.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/1%20-%20Flutter%20Apprentice.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/1%20-%20Flutter%20Apprentice.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/1%20-%20Flutter%20Apprentice.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/1%20-%20Flutter%20Apprentice.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/1%20-%20Flutter%20Apprentice.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/1%20-%20Flutter%20Apprentice.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/1%20-%20Flutter%20Apprentice.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/1%20-%20Flutter%20Apprentice.md",
                                },
                        },
                ],
                // -- >> Flutter Developer
                "Flutter Developer": [
                        // -- > NLP - 2 : Mastering NLP from Foundations to LLMs
                        {
                                "title": {
                                        'English': "Mastering NLP from Foundations to LLMs",
                                        'Deutsch': "Mastering NLP from Foundations to LLMs",
                                        '中国人': "Mastering NLP from Foundations to LLMs",
                                        'Русский': "Mastering NLP from Foundations to LLMs",
                                        'Français': "Mastering NLP from Foundations to LLMs",
                                        '日本語': "Mastering NLP from Foundations to LLMs",
                                        '한국인': "Mastering NLP from Foundations to LLMs",
                                        'Español': "Mastering NLP from Foundations to LLMs",
                                        'हिंदी': "Mastering NLP from Foundations to LLMs",
                                        'Português': "Mastering NLP from Foundations to LLMs",
                                        'বাংলা': "Mastering NLP from Foundations to LLMs",
                                        'عَرَبِيّ': "Mastering NLP from Foundations to LLMs",
                                        'فارسی': "Mastering NLP from Foundations to LLMs",
                                },
                                "description": {
                                        'English': "Mastering NLP from Foundations to LLMs is a comprehensive guide authored by Lior Gazit and Meysam Ghaffari, published on April 26, 2024. This book offers an in-depth introduction to Natural Language Processing (NLP) techniques, beginning with the mathematical foundations of machine learning and progressing to advanced applications involving Large Language Models (LLMs). It covers essential topics such as text preprocessing, traditional machine learning methods for text classification, and deep learning language models. Additionally, the authors explore the theory, design, and implementation of LLMs, providing practical Python code samples throughout. The book also discusses future trends in NLP and includes expert insights, making it a valuable resource for both beginners and experienced practitioners aiming to solve real-world business problems using Python. ",
                                        'Deutsch': "„Mastering NLP from Foundations to LLMs“ ist ein umfassender Leitfaden von Lior Gazit und Meysam Ghaffari, der am 26. April 2024 veröffentlicht wurde. Dieses Buch bietet eine ausführliche Einführung in Techniken der natürlichen Sprachverarbeitung (Natural Language Processing, NLP), beginnend mit den mathematischen Grundlagen des maschinellen Lernens und fortschreitend bis hin zu fortgeschrittenen Anwendungen mit Large Language Models (LLMs). Es behandelt wichtige Themen wie Textvorverarbeitung, traditionelle Methoden des maschinellen Lernens zur Textklassifizierung und Deep-Learning-Sprachmodelle. Darüber hinaus untersuchen die Autoren die Theorie, das Design und die Implementierung von LLMs und liefern durchgehend praktische Python-Codebeispiele. Das Buch diskutiert auch zukünftige Trends in der NLP und enthält Experteneinblicke, was es zu einer wertvollen Ressource sowohl für Anfänger als auch für erfahrene Praktiker macht, die reale Geschäftsprobleme mit Python lösen möchten.",
                                        '中国人': "《从基础到 LLM 精通 NLP》是一本综合指南，由 Lior Gazit 和 Meysam Ghaffari 撰写，出版于 2024 年 4 月 26 日。本书深入介绍了自然语言处理 (NLP) 技术，从机器学习的数学基础开始，逐步介绍涉及大型语言模型 (LLM) 的高级应用。它涵盖了文本预处理、用于文本分类的传统机器学习方法和深度学习语言模型等重要主题。此外，作者还探讨了 LLM 的理论、设计和实现，并提供了实用的 Python 代码示例。本书还讨论了 NLP 的未来趋势，并包含专家见解，使其成为初学者和经验丰富的从业者使用 Python 解决实际业务问题的宝贵资源。",
                                        'Русский': "Mastering NLP from Foundations to LLMs — это всеобъемлющее руководство, написанное Лиором Газитом и Мейсамом Гаффари, опубликованное 26 апреля 2024 года. Эта книга предлагает углубленное введение в методы обработки естественного языка (NLP), начиная с математических основ машинного обучения и заканчивая продвинутыми приложениями, включающими большие языковые модели (LLM). Она охватывает такие важные темы, как предварительная обработка текста, традиционные методы машинного обучения для классификации текста и модели языка глубокого обучения. Кроме того, авторы изучают теорию, проектирование и реализацию LLM, предоставляя практические примеры кода Python. В книге также обсуждаются будущие тенденции в области NLP и содержатся экспертные идеи, что делает ее ценным ресурсом как для новичков, так и для опытных практиков, стремящихся решать реальные бизнес-задачи с помощью Python.",
                                        'Français': "Mastering NLP from Foundations to LLMs est un guide complet rédigé par Lior Gazit et Meysam Ghaffari, publié le 26 avril 2024. Ce livre propose une introduction approfondie aux techniques de traitement du langage naturel (NLP), en commençant par les fondements mathématiques de l'apprentissage automatique et en progressant vers des applications avancées impliquant de grands modèles linguistiques (LLM). Il couvre des sujets essentiels tels que le prétraitement de texte, les méthodes traditionnelles d'apprentissage automatique pour la classification de texte et les modèles de langage d'apprentissage profond. De plus, les auteurs explorent la théorie, la conception et la mise en œuvre des LLM, en fournissant des exemples de code Python pratiques tout au long du livre. Le livre aborde également les tendances futures du NLP et comprend des points de vue d'experts, ce qui en fait une ressource précieuse pour les débutants et les praticiens expérimentés qui souhaitent résoudre des problèmes commerciaux réels à l'aide de Python.",
                                        '日本語': "『Mastering NLP from Foundations to LLMs』は、Lior Gazit と Meysam Ghaffari が執筆し、2024 年 4 月 26 日に出版された総合ガイドです。この本は、機械学習の数学的基礎から始まり、大規模言語モデル (LLM) を含む高度なアプリケーションまで、自然言語処理 (NLP) 技術の詳細な入門書です。テキスト前処理、テキスト分類のための従来の機械学習手法、ディープラーニング言語モデルなどの重要なトピックを取り上げています。さらに、著者は LLM の理論、設計、実装を探求し、全体を通して実用的な Python コードサンプルを提供しています。この本では、NLP の将来の動向についても説明されており、専門家の洞察も含まれているため、Python を使用して実際のビジネス問題を解決しようとしている初心者と経験豊富な実務家の両方にとって貴重なリソースとなっています。",
                                        '한국인': "Mastering NLP from Foundations to LLMs는 Lior Gazit과 Meysam Ghaffari가 저술하고 2024년 4월 26일에 출판한 포괄적인 가이드입니다. 이 책은 기계 학습의 수학적 기초에서 시작하여 대규모 언어 모델(LLM)을 포함하는 고급 애플리케이션으로 진행되는 자연어 처리(NLP) 기술에 대한 심층적인 소개를 제공합니다. 텍스트 전처리, 텍스트 분류를 위한 기존 기계 학습 방법, 딥 러닝 언어 모델과 같은 필수 주제를 다룹니다. 또한 저자는 LLM의 이론, 설계 및 구현을 탐구하고 전반적으로 실용적인 Python 코드 샘플을 제공합니다. 이 책은 또한 NLP의 미래 동향에 대해 논의하고 전문가의 통찰력을 포함하여 Python을 사용하여 실제 비즈니스 문제를 해결하려는 초보자와 숙련된 실무자 모두에게 귀중한 리소스가 됩니다.",
                                        'Español': "Mastering NLP from Foundations to LLMs es una guía completa escrita por Lior Gazit y Meysam Ghaffari, publicada el 26 de abril de 2024. Este libro ofrece una introducción detallada a las técnicas de procesamiento del lenguaje natural (PLN), comenzando con los fundamentos matemáticos del aprendizaje automático y avanzando hacia aplicaciones avanzadas que involucran modelos de lenguaje grandes (LLM). Abarca temas esenciales como el preprocesamiento de texto, los métodos tradicionales de aprendizaje automático para la clasificación de texto y los modelos de lenguaje de aprendizaje profundo. Además, los autores exploran la teoría, el diseño y la implementación de los LLM, proporcionando ejemplos prácticos de código Python en todo momento. El libro también analiza las tendencias futuras en PNL e incluye perspectivas de expertos, lo que lo convierte en un recurso valioso tanto para principiantes como para profesionales experimentados que buscan resolver problemas comerciales del mundo real utilizando Python.",
                                        'हिंदी': "मास्टरिंग एनएलपी फ्रॉम फाउंडेशन्स टू एलएलएम लियोर गज़िट और मेसम गफ़री द्वारा लिखित एक व्यापक गाइड है, जिसे 26 अप्रैल, 2024 को प्रकाशित किया गया था। यह पुस्तक नेचुरल लैंग्वेज प्रोसेसिंग (एनएलपी) तकनीकों का गहन परिचय प्रदान करती है, जो मशीन लर्निंग के गणितीय आधारों से शुरू होकर लार्ज लैंग्वेज मॉडल्स (एलएलएम) से जुड़े उन्नत अनुप्रयोगों तक आगे बढ़ती है। इसमें टेक्स्ट प्रीप्रोसेसिंग, टेक्स्ट वर्गीकरण के लिए पारंपरिक मशीन लर्निंग विधियाँ और डीप लर्निंग लैंग्वेज मॉडल जैसे आवश्यक विषय शामिल हैं। इसके अतिरिक्त, लेखक एलएलएम के सिद्धांत, डिज़ाइन और कार्यान्वयन का पता लगाते हैं, जो पूरे समय व्यावहारिक पायथन कोड नमूने प्रदान करते हैं। पुस्तक एनएलपी में भविष्य के रुझानों पर भी चर्चा करती है और इसमें विशेषज्ञ अंतर्दृष्टि शामिल है, जो इसे पायथन का उपयोग करके वास्तविक दुनिया की व्यावसायिक समस्याओं को हल करने का लक्ष्य रखने वाले शुरुआती और अनुभवी चिकित्सकों दोनों के लिए एक मूल्यवान संसाधन बनाती है।",
                                        'Português': "Mastering NLP from Foundations to LLMs é um guia completo da autoria de Lior Gazit e Meysam Ghaffari, publicado a 26 de abril de 2024. Este livro oferece uma introdução detalhada às técnicas de Processamento de Linguagem Natural (PLN), começando pelos fundamentos matemáticos da aprendizagem automática. e progredindo para aplicações avançadas envolvendo Large Language Models (LLMs). Abrange tópicos essenciais como o pré-processamento de texto, os métodos tradicionais de aprendizagem automática para classificação de texto e os modelos de linguagem de aprendizagem profunda. Além disso, os autores exploram a teoria, o design e a implementação de LLMs, fornecendo exemplos práticos de código Python. O livro também discute as tendências futuras em PNL e inclui insights de especialistas, tornando-o um recurso valioso tanto para principiantes como para profissionais experientes que desejam resolver problemas de negócios do mundo real utilizando Python.",
                                        'বাংলা': "ফাউন্ডেশন থেকে এলএলএম পর্যন্ত এনএলপি মাস্টারিং হল লিওর গাজিট এবং মেসাম গাফফারি দ্বারা রচিত একটি বিস্তৃত নির্দেশিকা, যা 26 এপ্রিল, 2024-এ প্রকাশিত হয়েছে। এই বইটি মেশিন লার্নিংয়ের গাণিতিক ভিত্তি দিয়ে শুরু করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (এনএলপি) কৌশলগুলির একটি গভীরভাবে পরিচিতি প্রদান করে। এবং বৃহৎ ভাষার মডেল জড়িত উন্নত অ্যাপ্লিকেশনে অগ্রগতি (এলএলএম)। এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন পাঠ্য প্রিপ্রসেসিং, পাঠ্য শ্রেণিবিন্যাসের জন্য প্রথাগত মেশিন লার্নিং পদ্ধতি এবং গভীর শিক্ষার ভাষা মডেল। অতিরিক্তভাবে, লেখকরা LLM-এর তত্ত্ব, নকশা এবং বাস্তবায়ন অন্বেষণ করেন, সর্বত্র ব্যবহারিক পাইথন কোড নমুনা প্রদান করেন। বইটি NLP-এর ভবিষ্যৎ প্রবণতা নিয়েও আলোচনা করে এবং এতে বিশেষজ্ঞের অন্তর্দৃষ্টি অন্তর্ভুক্ত রয়েছে, যা পাইথন ব্যবহার করে বাস্তব-বিশ্বের ব্যবসায়িক সমস্যা সমাধানের লক্ষ্যে নতুন এবং অভিজ্ঞ অনুশীলনকারীদের উভয়ের জন্যই এটিকে একটি মূল্যবান সম্পদ করে তুলেছে।",
                                        'عَرَبِيّ': "يعد كتاب Mastering NLP from Foundations to LLMs دليلاً شاملاً من تأليف ليور جازيت وميسام غفاري، ونُشر في 26 أبريل 2024. يقدم هذا الكتاب مقدمة متعمقة لتقنيات معالجة اللغة الطبيعية (NLP)، بدءًا من الأسس الرياضية للتعلم الآلي والتقدم إلى التطبيقات المتقدمة التي تتضمن نماذج اللغة الكبيرة (LLMs). ويغطي موضوعات أساسية مثل معالجة النصوص مسبقًا، وطرق التعلم الآلي التقليدية لتصنيف النصوص، ونماذج اللغة للتعلم العميق. بالإضافة إلى ذلك، يستكشف المؤلفون نظرية وتصميم وتنفيذ نماذج اللغة الكبيرة، مما يوفر عينات عملية من أكواد بايثون في جميع أنحاء الكتاب. يناقش الكتاب أيضًا الاتجاهات المستقبلية في معالجة اللغة الطبيعية ويتضمن رؤى الخبراء، مما يجعله موردًا قيمًا للمبتدئين والممارسين ذوي الخبرة الذين يهدفون إلى حل مشاكل الأعمال في العالم الحقيقي باستخدام بايثون.",
                                        'فارسی': "تسلط بر NLP از مبانی تا LLM یک راهنمای جامع است که توسط لیور گازیت و میثم غفاری منتشر شده است که در 26 آوریل 2024 منتشر شده است. این کتاب مقدمه ای عمیق بر تکنیک های پردازش زبان طبیعی (NLP) ارائه می دهد که با مبانی ریاضی یادگیری ماشین شروع می شود. و پیشرفت به سمت برنامه های کاربردی پیشرفته شامل مدل های زبان بزرگ (LLM). موضوعات ضروری مانند پیش پردازش متن، روش های سنتی یادگیری ماشینی برای طبقه بندی متن و مدل های زبان یادگیری عمیق را پوشش می دهد. علاوه بر این، نویسندگان نظریه، طراحی و پیاده سازی LLM ها را بررسی می کنند و نمونه های عملی کد پایتون را در سراسر آن ارائه می کنند. این کتاب همچنین روندهای آینده در NLP را مورد بحث قرار می‌دهد و شامل بینش‌های متخصص می‌شود، که آن را به منبعی ارزشمند برای مبتدیان و متخصصان با تجربه تبدیل می‌کند که هدفشان حل مشکلات تجاری دنیای واقعی با استفاده از پایتون است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/4 - Mastering NLP from Foundations to LLMs.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/English/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/German/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Chinese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Russian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/French/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Japanese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Korean/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Spanish/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Hindi/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Portugues/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Bengali/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Arabic/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Persian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                },
                        },
                        // -- > Flutter - 1 : Flutter Complete Reference Book
                        {
                                "title": {
                                        'English': "Flutter Complete Reference",
                                        'Deutsch': "Flutter Complete Reference",
                                        '中国人': "Flutter Complete Reference",
                                        'Русский': "Flutter Complete Reference",
                                        'Français': "Flutter Complete Reference",
                                        '日本語': "Flutter Complete Reference",
                                        '한국인': "Flutter Complete Reference",
                                        'Español': "Flutter Complete Reference",
                                        'हिंदी': "Flutter Complete Reference",
                                        'Português': "Flutter Complete Reference",
                                        'বাংলা': "Flutter Complete Reference",
                                        'عَرَبِيّ': "Flutter Complete Reference",
                                        'فارسی': "Flutter Complete Reference",
                                },
                                "description": {
                                        'English': "Flutter Complete Reference by Alberto Miola is a comprehensive guide for developers seeking to master Flutter, Google's open-source UI toolkit for crafting natively compiled applications. The book provides a deep dive into the fundamentals of Flutter, covering essential topics like widget architecture, state management, animations, and advanced techniques for creating responsive and high-performance apps. With practical examples and detailed explanations, it serves as both a beginner-friendly introduction and a valuable resource for experienced developers looking to refine their skills. Alberto Miola combines clarity with hands-on approaches, making it an indispensable reference for Flutter enthusiasts.",
                                        'Deutsch': "Flutter Complete Reference von Alberto Miola ist ein umfassender Leitfaden für Entwickler, die Flutter beherrschen möchten, Googles Open-Source-UI-Toolkit zum Erstellen nativ kompilierter Anwendungen. Das Buch bietet einen tiefen Einblick in die Grundlagen von Flutter und behandelt wichtige Themen wie Widget-Architektur, Statusverwaltung, Animationen und fortgeschrittene Techniken zum Erstellen reaktionsfähiger und leistungsstarker Apps. Mit praktischen Beispielen und detaillierten Erklärungen dient es sowohl als anfängerfreundliche Einführung als auch als wertvolle Ressource für erfahrene Entwickler, die ihre Fähigkeiten verfeinern möchten. Alberto Miola kombiniert Klarheit mit praktischen Ansätzen und macht es zu einem unverzichtbaren Nachschlagewerk für Flutter-Enthusiasten.",
                                        '中国人': "Alberto Miola 编写的《Flutter 完整参考》是一本全面的指南，适合希望掌握 Flutter 的开发人员，Flutter 是 Google 的开源 UI 工具包，用于制作原生编译的应用程序。本书深入探讨了 Flutter 的基础知识，涵盖了小部件架构、状态管理、动画和创建响应式高性能应用程序的高级技术等基本主题。通过实际示例和详细解释，它既是初学者友好的入门书，也是希望提高技能的经验丰富的开发人员的宝贵资源。Alberto Miola 将清晰度与实践方法相结合，使其成为 Flutter 爱好者不可或缺的参考资料。",
                                        'Русский': "Flutter Complete Reference Альберто Миолы — это всеобъемлющее руководство для разработчиков, стремящихся освоить Flutter, набор инструментов пользовательского интерфейса с открытым исходным кодом от Google для создания скомпилированных приложений. Книга предлагает глубокое погружение в основы Flutter, охватывая такие важные темы, как архитектура виджетов, управление состоянием, анимация и передовые методы создания адаптивных и высокопроизводительных приложений. С практическими примерами и подробными объяснениями она служит как введением для новичков, так и ценным ресурсом для опытных разработчиков, желающих усовершенствовать свои навыки. Альберто Миола сочетает ясность с практическими подходами, что делает ее незаменимым справочником для энтузиастов Flutter.",
                                        'Français': "Flutter Complete Reference d'Alberto Miola est un guide complet pour les développeurs qui cherchent à maîtriser Flutter, la boîte à outils d'interface utilisateur open source de Google pour la création d'applications compilées en mode natif. Le livre propose une plongée en profondeur dans les fondamentaux de Flutter, couvrant des sujets essentiels comme l'architecture des widgets, la gestion des états, les animations et les techniques avancées pour créer des applications réactives et performantes. Avec des exemples pratiques et des explications détaillées, il sert à la fois d'introduction conviviale pour les débutants et de ressource précieuse pour les développeurs expérimentés qui cherchent à perfectionner leurs compétences. Alberto Miola allie clarté et approches pratiques, ce qui en fait une référence indispensable pour les passionnés de Flutter.",
                                        '日本語': "Alberto Miola 著の『Flutter Complete Reference』は、ネイティブ コンパイル アプリケーションを作成するための Google のオープンソース UI ツールキットである Flutter を習得したい開発者向けの総合ガイドです。本書では、ウィジェット アーキテクチャ、状態管理、アニメーション、レスポンシブで高性能なアプリケーションを作成するための高度なテクニックなど、Flutter の基礎を深く掘り下げて解説しています。実用的な例と詳細な説明が盛り込まれており、初心者向けの入門書としてだけでなく、スキルを磨きたい経験豊富な開発者にとって貴重なリソースとしても役立ちます。Alberto Miola は、明快さと実践的なアプローチを組み合わせており、Flutter 愛好家にとって欠かせないリファレンスとなっています。",
                                        '한국인': "Alberto Miola의 Flutter Complete Reference는 네이티브 컴파일 애플리케이션을 제작하기 위한 Google의 오픈소스 UI 툴킷인 Flutter를 마스터하려는 개발자를 위한 포괄적인 가이드입니다. 이 책은 위젯 아키텍처, 상태 관리, 애니메이션 및 반응형 고성능 앱을 만드는 고급 기술과 같은 필수 주제를 다루는 Flutter의 기본에 대한 심층적인 분석을 제공합니다. 실용적인 예제와 자세한 설명이 포함되어 있어 초보자에게 친숙한 소개서이자 기술을 다듬고자 하는 숙련된 개발자에게 귀중한 리소스 역할을 합니다. Alberto Miola는 명확성과 실무적 접근 방식을 결합하여 Flutter 애호가에게 없어서는 안 될 참고 자료가 되었습니다.",
                                        'Español': "Flutter Complete Reference de Alberto Miola es una guía completa para desarrolladores que buscan dominar Flutter, el kit de herramientas de interfaz de usuario de código abierto de Google para crear aplicaciones compiladas de forma nativa. El libro ofrece una inmersión profunda en los fundamentos de Flutter y cubre temas esenciales como la arquitectura de widgets, la gestión de estados, las animaciones y las técnicas avanzadas para crear aplicaciones responsivas y de alto rendimiento. Con ejemplos prácticos y explicaciones detalladas, sirve como una introducción para principiantes y un recurso valioso para desarrolladores experimentados que buscan perfeccionar sus habilidades. Alberto Miola combina claridad con enfoques prácticos, lo que lo convierte en una referencia indispensable para los entusiastas de Flutter.",
                                        'हिंदी': "अल्बर्टो मिओला द्वारा लिखित फ़्लटर कम्प्लीट रेफरेंस उन डेवलपर्स के लिए एक व्यापक गाइड है जो फ़्लटर में महारत हासिल करना चाहते हैं, यह नेटिवली कम्पाइल किए गए एप्लिकेशन तैयार करने के लिए Google का ओपन-सोर्स UI टूलकिट है। यह पुस्तक फ़्लटर के मूल सिद्धांतों में गहराई से गोता लगाती है, जिसमें विजेट आर्किटेक्चर, स्टेट मैनेजमेंट, एनिमेशन और रिस्पॉन्सिव और हाई-परफ़ॉर्मेंस ऐप बनाने के लिए उन्नत तकनीकों जैसे आवश्यक विषयों को शामिल किया गया है। व्यावहारिक उदाहरणों और विस्तृत व्याख्याओं के साथ, यह शुरुआती लोगों के लिए एक अनुकूल परिचय और अपने कौशल को निखारने के इच्छुक अनुभवी डेवलपर्स के लिए एक मूल्यवान संसाधन दोनों के रूप में कार्य करता है। अल्बर्टो मिओला स्पष्टता को व्यावहारिक दृष्टिकोणों के साथ जोड़ता है, जो इसे फ़्लटर उत्साही लोगों के लिए एक अपरिहार्य संदर्भ बनाता है।",
                                        'Português': "Flutter Complete Reference de Alberto Miola é um guia completo para programadores que procuram dominar o Flutter, o kit de ferramentas de UI de código aberto da Google para criar aplicações compiladas nativamente. O livro proporciona um mergulho profundo nos fundamentos do Flutter, abordando tópicos essenciais como a arquitetura de widgets, a gestão de estado, as animações e as técnicas avançadas para criar aplicações responsivas e de alto desempenho. Com exemplos práticos e explicações detalhadas, serve tanto como uma introdução para principiantes como um recurso valioso para programadores experientes que procuram melhorar as suas capacidades. Alberto Miola combina clareza com abordagens práticas, tornando-o uma referência indispensável para os entusiastas do Flutter.",
                                        'বাংলা': "অ্যালবার্তো মিওলার ফ্লাটার কমপ্লিট রেফারেন্স হল ফ্লাটারে দক্ষতা অর্জন করতে চাওয়া ডেভেলপারদের জন্য একটি বিস্তৃত নির্দেশিকা, নেটিভলি কম্পাইল করা অ্যাপ্লিকেশন তৈরির জন্য Google-এর ওপেন-সোর্স UI টুলকিট। বইটি ফ্লটারের মৌলিক বিষয়গুলির মধ্যে গভীর ডুব দেয়, উইজেট আর্কিটেকচার, রাষ্ট্র পরিচালনা, অ্যানিমেশন এবং প্রতিক্রিয়াশীল এবং উচ্চ-পারফরম্যান্স অ্যাপ তৈরির জন্য উন্নত কৌশলগুলির মতো প্রয়োজনীয় বিষয়গুলিকে কভার করে৷ ব্যবহারিক উদাহরণ এবং বিশদ ব্যাখ্যা সহ, এটি একটি শিক্ষানবিস-বন্ধুত্বপূর্ণ ভূমিকা এবং তাদের দক্ষতা পরিমার্জিত করার জন্য অভিজ্ঞ বিকাশকারীদের জন্য একটি মূল্যবান সংস্থান উভয়ই কাজ করে৷ আলবার্তো মিওলা হ্যান্ডস-অন পন্থাগুলির সাথে স্পষ্টতাকে একত্রিত করে, এটিকে ফ্লটার উত্সাহীদের জন্য একটি অপরিহার্য রেফারেন্স করে তোলে৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Complete Reference من تأليف Alberto Miola دليلاً شاملاً للمطورين الذين يسعون إلى إتقان Flutter، وهي مجموعة أدوات واجهة المستخدم مفتوحة المصدر من Google لإنشاء تطبيقات مجمعة محليًا. يوفر الكتاب نظرة متعمقة في أساسيات Flutter، ويغطي موضوعات أساسية مثل بنية الأداة، وإدارة الحالة، والرسوم المتحركة، والتقنيات المتقدمة لإنشاء تطبيقات سريعة الاستجابة وعالية الأداء. مع أمثلة عملية وشروحات مفصلة، ​​فهو بمثابة مقدمة سهلة للمبتدئين ومورد قيم للمطورين ذوي الخبرة الذين يتطلعون إلى صقل مهاراتهم. يجمع Alberto Miola بين الوضوح والأساليب العملية، مما يجعله مرجعًا لا غنى عنه لعشاق Flutter.",
                                        'فارسی': "مرجع کامل Flutter توسط Alberto Miola یک راهنمای جامع برای توسعه دهندگانی است که به دنبال تسلط بر Flutter، جعبه ابزار UI منبع باز Google برای ایجاد برنامه های کاربردی کامپایل شده بومی هستند. این کتاب به بررسی اصول فلاتر می پردازد و موضوعات ضروری مانند معماری ویجت، مدیریت حالت، انیمیشن ها و تکنیک های پیشرفته برای ایجاد اپلیکیشن های پاسخگو و با کارایی بالا را پوشش می دهد. با مثال‌های عملی و توضیحات مفصل، هم به‌عنوان مقدمه‌ای مناسب برای مبتدیان و هم منبعی ارزشمند برای توسعه‌دهندگان با تجربه ای است که به دنبال اصلاح مهارت‌های خود هستند. آلبرتو میولا وضوح را با رویکردهای عملی ترکیب می کند و آن را به مرجعی ضروری برای علاقه مندان به فلاتر تبدیل می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/2 - Flutter Complete Reference.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/2%20-%20Flutter%20Complete%20Reference.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/2%20-%20Flutter%20Complete%20Reference.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/2%20-%20Flutter%20Complete%20Reference.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/2%20-%20Flutter%20Complete%20Reference.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/2%20-%20Flutter%20Complete%20Reference.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/2%20-%20Flutter%20Complete%20Reference.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/2%20-%20Flutter%20Complete%20Reference.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/2%20-%20Flutter%20Complete%20Reference.md",
                                },
                        },
                        // -- > Flutter - 2 : Flutter Apprentice
                        {
                                "title": {
                                        'English': "Flutter Apprentice",
                                        'Deutsch': "Flutter Apprentice",
                                        '中国人': "Flutter Apprentice",
                                        'Русский': "Flutter Apprentice",
                                        'Français': "Flutter Apprentice",
                                        '日本語': "Flutter Apprentice",
                                        '한국인': "Flutter Apprentice",
                                        'Español': "Flutter Apprentice",
                                        'हिंदी': "Flutter Apprentice",
                                        'Português': "Flutter Apprentice",
                                        'বাংলা': "Flutter Apprentice",
                                        'عَرَبِيّ': "Flutter Apprentice",
                                        'فارسی': "Flutter Apprentice",
                                },
                                "description": {
                                        'English': "Flutter Apprentice is a comprehensive guide for beginners to learn Flutter, a popular open-source framework for building cross-platform mobile applications. Authored by a team of experienced developers, the book provides a hands-on, project-based approach to mastering Flutter. It covers the fundamentals of Dart programming, state management, UI design, and integrating features like animations and APIs. Each chapter builds on practical projects, enabling readers to develop real-world apps while gaining confidence in their skills. With clear explanations, step-by-step instructions, and tips to avoid common pitfalls, Flutter Apprentice is an excellent resource for aspiring app developers who want to bring their ideas to life on Android and iOS platforms.",
                                        'Deutsch': "Flutter Apprentice ist ein umfassender Leitfaden für Anfänger zum Erlernen von Flutter, einem beliebten Open-Source-Framework zum Erstellen plattformübergreifender mobiler Anwendungen. Das von einem Team erfahrener Entwickler verfasste Buch bietet einen praktischen, projektbasierten Ansatz zum Erlernen von Flutter. Es behandelt die Grundlagen der Dart-Programmierung, der Zustandsverwaltung, des UI-Designs und der Integration von Funktionen wie Animationen und APIs. Jedes Kapitel basiert auf praktischen Projekten, sodass die Leser reale Apps entwickeln und gleichzeitig Vertrauen in ihre Fähigkeiten gewinnen können. Mit klaren Erklärungen, Schritt-für-Schritt-Anleitungen und Tipps zum Vermeiden häufiger Fehler ist Flutter Apprentice eine hervorragende Ressource für angehende App-Entwickler, die ihre Ideen auf Android- und iOS-Plattformen zum Leben erwecken möchten.",
                                        '中国人': "Flutter Apprentice 是一本全面的指南，帮助初学者学习 Flutter，Flutter 是一种用于构建跨平台移动应用程序的流行开源框架。本书由一支经验丰富的开发人员团队撰写，提供了一种基于项目的动手实践方法来掌握 Flutter。它涵盖了 Dart 编程、状态管理、UI 设计和集成动画和 API 等功能的基础知识。每一章都以实际项目为基础，使读者能够开发真实的应用程序，同时增强对自己技能的信心。Flutter Apprentice 具有清晰的解释、分步说明和避免常见陷阱的技巧，是希望在 Android 和 iOS 平台上实现自己想法的有抱负的应用程序开发人员的绝佳资源。",
                                        'Русский': "Flutter Apprentice — это полное руководство для начинающих по изучению Flutter, популярного фреймворка с открытым исходным кодом для создания кроссплатформенных мобильных приложений. Книга, написанная командой опытных разработчиков, предлагает практический подход к освоению Flutter на основе проектов. Она охватывает основы программирования Dart, управления состоянием, проектирования пользовательского интерфейса и интеграции таких функций, как анимация и API. Каждая глава основана на практических проектах, что позволяет читателям разрабатывать реальные приложения, обретая уверенность в своих навыках. Благодаря понятным объяснениям, пошаговым инструкциям и советам по избежанию распространенных ошибок Flutter Apprentice является отличным ресурсом для начинающих разработчиков приложений, которые хотят воплотить свои идеи в жизнь на платформах Android и iOS.",
                                        'Français': "Flutter Apprentice est un guide complet destiné aux débutants pour apprendre Flutter, un framework open source populaire pour la création d'applications mobiles multiplateformes. Rédigé par une équipe de développeurs expérimentés, le livre propose une approche pratique et basée sur des projets pour maîtriser Flutter. Il couvre les fondamentaux de la programmation Dart, la gestion des états, la conception d'interface utilisateur et l'intégration de fonctionnalités telles que les animations et les API. Chaque chapitre s'appuie sur des projets pratiques, permettant aux lecteurs de développer des applications concrètes tout en gagnant en confiance dans leurs compétences. Avec des explications claires, des instructions étape par étape et des conseils pour éviter les pièges courants, Flutter Apprentice est une excellente ressource pour les développeurs d'applications en herbe qui souhaitent donner vie à leurs idées sur les plateformes Android et iOS.",
                                        '日本語': "Flutter Apprentice は、クロスプラットフォーム モバイル アプリケーションを構築するための人気のオープン ソース フレームワークである Flutter を初心者が学習するための総合ガイドです。経験豊富な開発者チームが執筆したこの本は、Flutter を習得するための実践的なプロジェクト ベースのアプローチを提供します。Dart プログラミング、状態管理、UI デザイン、アニメーションや API などの機能の統合の基礎をカバーしています。各章は実践的なプロジェクトに基づいているため、読者はスキルに自信を持ちながら、実際のアプリを開発できます。わかりやすい説明、ステップ バイ ステップの手順、よくある落とし穴を避けるためのヒントが満載の Flutter Apprentice は、Android および iOS プラットフォームでアイデアを実現したい意欲的なアプリ開発者にとって優れたリソースです。",
                                        '한국인': "Flutter Apprentice는 크로스 플랫폼 모바일 애플리케이션을 구축하기 위한 인기 있는 오픈소스 프레임워크인 Flutter를 초보자가 배우기 위한 포괄적인 가이드입니다. 숙련된 개발자 팀이 저술한 이 책은 Flutter를 마스터하기 위한 실무적이고 프로젝트 기반의 접근 방식을 제공합니다. Dart 프로그래밍, 상태 관리, UI 디자인, 애니메이션 및 API와 같은 기능 통합의 기본 사항을 다룹니다. 각 장은 실용적인 프로젝트를 기반으로 하여 독자가 기술에 대한 자신감을 얻는 동시에 실제 앱을 개발할 수 있도록 합니다. 명확한 설명, 단계별 지침, 일반적인 함정을 피하기 위한 팁이 포함된 Flutter Apprentice는 Android 및 iOS 플랫폼에서 아이디어를 실현하고자 하는 야심 찬 앱 개발자에게 훌륭한 리소스입니다.",
                                        'Español': "Flutter Apprentice es una guía completa para principiantes que desean aprender Flutter, un popular marco de código abierto para crear aplicaciones móviles multiplataforma. Escrito por un equipo de desarrolladores experimentados, el libro ofrece un enfoque práctico basado en proyectos para dominar Flutter. Abarca los fundamentos de la programación Dart, la gestión de estados, el diseño de la interfaz de usuario y la integración de funciones como animaciones y API. Cada capítulo se basa en proyectos prácticos, lo que permite a los lectores desarrollar aplicaciones del mundo real mientras ganan confianza en sus habilidades. Con explicaciones claras, instrucciones paso a paso y consejos para evitar errores comunes, Flutter Apprentice es un excelente recurso para los aspirantes a desarrolladores de aplicaciones que desean dar vida a sus ideas en las plataformas Android e iOS.",
                                        'हिंदी': "फ़्लटर अप्रेंटिस शुरुआती लोगों के लिए फ़्लटर सीखने के लिए एक व्यापक मार्गदर्शिका है, जो क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने के लिए एक लोकप्रिय ओपन-सोर्स फ़्रेमवर्क है। अनुभवी डेवलपर्स की एक टीम द्वारा लिखित, यह पुस्तक फ़्लटर में महारत हासिल करने के लिए एक व्यावहारिक, प्रोजेक्ट-आधारित दृष्टिकोण प्रदान करती है। इसमें डार्ट प्रोग्रामिंग, स्टेट मैनेजमेंट, UI डिज़ाइन और एनिमेशन और API जैसी सुविधाओं को एकीकृत करने की बुनियादी बातों को शामिल किया गया है। प्रत्येक अध्याय व्यावहारिक परियोजनाओं पर आधारित है, जिससे पाठकों को अपने कौशल में आत्मविश्वास प्राप्त करते हुए वास्तविक दुनिया के ऐप विकसित करने में सक्षम बनाया जा सके। स्पष्ट स्पष्टीकरण, चरण-दर-चरण निर्देश और सामान्य नुकसानों से बचने के सुझावों के साथ, फ़्लटर अप्रेंटिस महत्वाकांक्षी ऐप डेवलपर्स के लिए एक उत्कृष्ट संसाधन है जो अपने विचारों को Android और iOS प्लेटफ़ॉर्म पर जीवंत करना चाहते हैं।",
                                        'Português': "Flutter Apprentice é um guia completo para principiantes aprenderem Flutter, uma estrutura popular de código aberto para a construção de aplicações móveis multiplataforma. Da autoria de uma equipa de programadores experientes, o livro oferece uma abordagem prática e baseada em projetos para dominar o Flutter. Abrange os fundamentos da programação Dart, gestão de estado, design de UI e integração de recursos como animações e APIs. Cada capítulo baseia-se em projetos práticos, permitindo aos leitores desenvolver aplicações do mundo real enquanto ganham confiança nas suas capacidades. Com explicações claras, instruções passo a passo e dicas para evitar armadilhas comuns, Flutter Apprentice é um excelente recurso para aspirantes a programadores de aplicações que desejam dar vida às suas ideias nas plataformas Android e iOS.",
                                        'বাংলা': "ফ্লটার অ্যাপ্রেন্টিস হল নতুনদের জন্য ফ্লটার শেখার জন্য একটি ব্যাপক নির্দেশিকা, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরির জন্য একটি জনপ্রিয় ওপেন-সোর্স ফ্রেমওয়ার্ক। অভিজ্ঞ ডেভেলপারদের একটি দল দ্বারা রচিত, বইটি ফ্লটারকে আয়ত্ত করার জন্য একটি হ্যান্ডস-অন, প্রকল্প-ভিত্তিক পদ্ধতি প্রদান করে। এটি ডার্ট প্রোগ্রামিং, স্টেট ম্যানেজমেন্ট, UI ডিজাইন এবং অ্যানিমেশন এবং API-এর মতো বৈশিষ্ট্যগুলিকে একীভূত করার মৌলিক বিষয়গুলি কভার করে৷ প্রতিটি অধ্যায় ব্যবহারিক প্রকল্পের উপর ভিত্তি করে তৈরি করে, পাঠকদের তাদের দক্ষতার প্রতি আস্থা অর্জনের সাথে সাথে বাস্তব-বিশ্বের অ্যাপ বিকাশ করতে সক্ষম করে। স্পষ্ট ব্যাখ্যা, ধাপে ধাপে নির্দেশাবলী এবং সাধারণ সমস্যাগুলি এড়াতে টিপস সহ, Flutter Apprentice উচ্চাকাঙ্ক্ষী অ্যাপ বিকাশকারীদের জন্য একটি চমৎকার সংস্থান যারা Android এবং iOS প্ল্যাটফর্মে তাদের ধারণাগুলিকে জীবন্ত করতে চান৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Apprentice دليلاً شاملاً للمبتدئين لتعلم Flutter، وهو إطار عمل مفتوح المصدر شائع لبناء تطبيقات جوال متعددة الأنظمة. يقدم الكتاب، الذي ألفه فريق من المطورين ذوي الخبرة، نهجًا عمليًا قائمًا على المشروع لإتقان Flutter. ويغطي أساسيات برمجة Dart وإدارة الحالة وتصميم واجهة المستخدم ودمج ميزات مثل الرسوم المتحركة وواجهات برمجة التطبيقات. يعتمد كل فصل على مشاريع عملية، مما يتيح للقراء تطوير تطبيقات واقعية مع اكتساب الثقة في مهاراتهم. مع التفسيرات الواضحة والتعليمات خطوة بخطوة والنصائح لتجنب الأخطاء الشائعة، يعد Flutter Apprentice موردًا ممتازًا لمطوري التطبيقات الطموحين الذين يرغبون في إحياء أفكارهم على منصات Android وiOS.",
                                        'فارسی': "Flutter Apprentice یک راهنمای جامع برای مبتدیان برای یادگیری Flutter است، یک فریم ورک منبع باز محبوب برای ساخت اپلیکیشن های موبایلی چند پلتفرمی. این کتاب که توسط تیمی از توسعه دهندگان با تجربه نوشته شده است، رویکردی عملی و مبتنی بر پروژه برای تسلط بر فلاتر ارائه می دهد. این مبانی برنامه نویسی Dart، مدیریت حالت، طراحی UI، و یکپارچه سازی ویژگی هایی مانند انیمیشن ها و API ها را پوشش می دهد. هر فصل بر اساس پروژه های عملی ساخته شده است و خوانندگان را قادر می سازد تا برنامه های دنیای واقعی را توسعه دهند و در عین حال به مهارت های خود اعتماد کنند. Flutter Apprentice با توضیحات واضح، دستورالعمل‌های گام به گام و نکاتی برای جلوگیری از مشکلات رایج، منبعی عالی برای توسعه‌دهندگان برنامه‌های مشتاقی است که می‌خواهند ایده‌های خود را در پلتفرم‌های اندروید و iOS زنده کنند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/1 - Flutter Apprentice.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/1%20-%20Flutter%20Apprentice.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/1%20-%20Flutter%20Apprentice.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/1%20-%20Flutter%20Apprentice.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/1%20-%20Flutter%20Apprentice.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/1%20-%20Flutter%20Apprentice.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/1%20-%20Flutter%20Apprentice.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/1%20-%20Flutter%20Apprentice.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/1%20-%20Flutter%20Apprentice.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/1%20-%20Flutter%20Apprentice.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/1%20-%20Flutter%20Apprentice.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/1%20-%20Flutter%20Apprentice.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/1%20-%20Flutter%20Apprentice.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/1%20-%20Flutter%20Apprentice.md",
                                },
                        },
                ],
                // -- >> Full Stack Developer
                "Full Stack Developer": [
                        // -- > NLP - 2 : Mastering NLP from Foundations to LLMs
                        {
                                "title": {
                                        'English': "Mastering NLP from Foundations to LLMs",
                                        'Deutsch': "Mastering NLP from Foundations to LLMs",
                                        '中国人': "Mastering NLP from Foundations to LLMs",
                                        'Русский': "Mastering NLP from Foundations to LLMs",
                                        'Français': "Mastering NLP from Foundations to LLMs",
                                        '日本語': "Mastering NLP from Foundations to LLMs",
                                        '한국인': "Mastering NLP from Foundations to LLMs",
                                        'Español': "Mastering NLP from Foundations to LLMs",
                                        'हिंदी': "Mastering NLP from Foundations to LLMs",
                                        'Português': "Mastering NLP from Foundations to LLMs",
                                        'বাংলা': "Mastering NLP from Foundations to LLMs",
                                        'عَرَبِيّ': "Mastering NLP from Foundations to LLMs",
                                        'فارسی': "Mastering NLP from Foundations to LLMs",
                                },
                                "description": {
                                        'English': "Mastering NLP from Foundations to LLMs is a comprehensive guide authored by Lior Gazit and Meysam Ghaffari, published on April 26, 2024. This book offers an in-depth introduction to Natural Language Processing (NLP) techniques, beginning with the mathematical foundations of machine learning and progressing to advanced applications involving Large Language Models (LLMs). It covers essential topics such as text preprocessing, traditional machine learning methods for text classification, and deep learning language models. Additionally, the authors explore the theory, design, and implementation of LLMs, providing practical Python code samples throughout. The book also discusses future trends in NLP and includes expert insights, making it a valuable resource for both beginners and experienced practitioners aiming to solve real-world business problems using Python. ",
                                        'Deutsch': "„Mastering NLP from Foundations to LLMs“ ist ein umfassender Leitfaden von Lior Gazit und Meysam Ghaffari, der am 26. April 2024 veröffentlicht wurde. Dieses Buch bietet eine ausführliche Einführung in Techniken der natürlichen Sprachverarbeitung (Natural Language Processing, NLP), beginnend mit den mathematischen Grundlagen des maschinellen Lernens und fortschreitend bis hin zu fortgeschrittenen Anwendungen mit Large Language Models (LLMs). Es behandelt wichtige Themen wie Textvorverarbeitung, traditionelle Methoden des maschinellen Lernens zur Textklassifizierung und Deep-Learning-Sprachmodelle. Darüber hinaus untersuchen die Autoren die Theorie, das Design und die Implementierung von LLMs und liefern durchgehend praktische Python-Codebeispiele. Das Buch diskutiert auch zukünftige Trends in der NLP und enthält Experteneinblicke, was es zu einer wertvollen Ressource sowohl für Anfänger als auch für erfahrene Praktiker macht, die reale Geschäftsprobleme mit Python lösen möchten.",
                                        '中国人': "《从基础到 LLM 精通 NLP》是一本综合指南，由 Lior Gazit 和 Meysam Ghaffari 撰写，出版于 2024 年 4 月 26 日。本书深入介绍了自然语言处理 (NLP) 技术，从机器学习的数学基础开始，逐步介绍涉及大型语言模型 (LLM) 的高级应用。它涵盖了文本预处理、用于文本分类的传统机器学习方法和深度学习语言模型等重要主题。此外，作者还探讨了 LLM 的理论、设计和实现，并提供了实用的 Python 代码示例。本书还讨论了 NLP 的未来趋势，并包含专家见解，使其成为初学者和经验丰富的从业者使用 Python 解决实际业务问题的宝贵资源。",
                                        'Русский': "Mastering NLP from Foundations to LLMs — это всеобъемлющее руководство, написанное Лиором Газитом и Мейсамом Гаффари, опубликованное 26 апреля 2024 года. Эта книга предлагает углубленное введение в методы обработки естественного языка (NLP), начиная с математических основ машинного обучения и заканчивая продвинутыми приложениями, включающими большие языковые модели (LLM). Она охватывает такие важные темы, как предварительная обработка текста, традиционные методы машинного обучения для классификации текста и модели языка глубокого обучения. Кроме того, авторы изучают теорию, проектирование и реализацию LLM, предоставляя практические примеры кода Python. В книге также обсуждаются будущие тенденции в области NLP и содержатся экспертные идеи, что делает ее ценным ресурсом как для новичков, так и для опытных практиков, стремящихся решать реальные бизнес-задачи с помощью Python.",
                                        'Français': "Mastering NLP from Foundations to LLMs est un guide complet rédigé par Lior Gazit et Meysam Ghaffari, publié le 26 avril 2024. Ce livre propose une introduction approfondie aux techniques de traitement du langage naturel (NLP), en commençant par les fondements mathématiques de l'apprentissage automatique et en progressant vers des applications avancées impliquant de grands modèles linguistiques (LLM). Il couvre des sujets essentiels tels que le prétraitement de texte, les méthodes traditionnelles d'apprentissage automatique pour la classification de texte et les modèles de langage d'apprentissage profond. De plus, les auteurs explorent la théorie, la conception et la mise en œuvre des LLM, en fournissant des exemples de code Python pratiques tout au long du livre. Le livre aborde également les tendances futures du NLP et comprend des points de vue d'experts, ce qui en fait une ressource précieuse pour les débutants et les praticiens expérimentés qui souhaitent résoudre des problèmes commerciaux réels à l'aide de Python.",
                                        '日本語': "『Mastering NLP from Foundations to LLMs』は、Lior Gazit と Meysam Ghaffari が執筆し、2024 年 4 月 26 日に出版された総合ガイドです。この本は、機械学習の数学的基礎から始まり、大規模言語モデル (LLM) を含む高度なアプリケーションまで、自然言語処理 (NLP) 技術の詳細な入門書です。テキスト前処理、テキスト分類のための従来の機械学習手法、ディープラーニング言語モデルなどの重要なトピックを取り上げています。さらに、著者は LLM の理論、設計、実装を探求し、全体を通して実用的な Python コードサンプルを提供しています。この本では、NLP の将来の動向についても説明されており、専門家の洞察も含まれているため、Python を使用して実際のビジネス問題を解決しようとしている初心者と経験豊富な実務家の両方にとって貴重なリソースとなっています。",
                                        '한국인': "Mastering NLP from Foundations to LLMs는 Lior Gazit과 Meysam Ghaffari가 저술하고 2024년 4월 26일에 출판한 포괄적인 가이드입니다. 이 책은 기계 학습의 수학적 기초에서 시작하여 대규모 언어 모델(LLM)을 포함하는 고급 애플리케이션으로 진행되는 자연어 처리(NLP) 기술에 대한 심층적인 소개를 제공합니다. 텍스트 전처리, 텍스트 분류를 위한 기존 기계 학습 방법, 딥 러닝 언어 모델과 같은 필수 주제를 다룹니다. 또한 저자는 LLM의 이론, 설계 및 구현을 탐구하고 전반적으로 실용적인 Python 코드 샘플을 제공합니다. 이 책은 또한 NLP의 미래 동향에 대해 논의하고 전문가의 통찰력을 포함하여 Python을 사용하여 실제 비즈니스 문제를 해결하려는 초보자와 숙련된 실무자 모두에게 귀중한 리소스가 됩니다.",
                                        'Español': "Mastering NLP from Foundations to LLMs es una guía completa escrita por Lior Gazit y Meysam Ghaffari, publicada el 26 de abril de 2024. Este libro ofrece una introducción detallada a las técnicas de procesamiento del lenguaje natural (PLN), comenzando con los fundamentos matemáticos del aprendizaje automático y avanzando hacia aplicaciones avanzadas que involucran modelos de lenguaje grandes (LLM). Abarca temas esenciales como el preprocesamiento de texto, los métodos tradicionales de aprendizaje automático para la clasificación de texto y los modelos de lenguaje de aprendizaje profundo. Además, los autores exploran la teoría, el diseño y la implementación de los LLM, proporcionando ejemplos prácticos de código Python en todo momento. El libro también analiza las tendencias futuras en PNL e incluye perspectivas de expertos, lo que lo convierte en un recurso valioso tanto para principiantes como para profesionales experimentados que buscan resolver problemas comerciales del mundo real utilizando Python.",
                                        'हिंदी': "मास्टरिंग एनएलपी फ्रॉम फाउंडेशन्स टू एलएलएम लियोर गज़िट और मेसम गफ़री द्वारा लिखित एक व्यापक गाइड है, जिसे 26 अप्रैल, 2024 को प्रकाशित किया गया था। यह पुस्तक नेचुरल लैंग्वेज प्रोसेसिंग (एनएलपी) तकनीकों का गहन परिचय प्रदान करती है, जो मशीन लर्निंग के गणितीय आधारों से शुरू होकर लार्ज लैंग्वेज मॉडल्स (एलएलएम) से जुड़े उन्नत अनुप्रयोगों तक आगे बढ़ती है। इसमें टेक्स्ट प्रीप्रोसेसिंग, टेक्स्ट वर्गीकरण के लिए पारंपरिक मशीन लर्निंग विधियाँ और डीप लर्निंग लैंग्वेज मॉडल जैसे आवश्यक विषय शामिल हैं। इसके अतिरिक्त, लेखक एलएलएम के सिद्धांत, डिज़ाइन और कार्यान्वयन का पता लगाते हैं, जो पूरे समय व्यावहारिक पायथन कोड नमूने प्रदान करते हैं। पुस्तक एनएलपी में भविष्य के रुझानों पर भी चर्चा करती है और इसमें विशेषज्ञ अंतर्दृष्टि शामिल है, जो इसे पायथन का उपयोग करके वास्तविक दुनिया की व्यावसायिक समस्याओं को हल करने का लक्ष्य रखने वाले शुरुआती और अनुभवी चिकित्सकों दोनों के लिए एक मूल्यवान संसाधन बनाती है।",
                                        'Português': "Mastering NLP from Foundations to LLMs é um guia completo da autoria de Lior Gazit e Meysam Ghaffari, publicado a 26 de abril de 2024. Este livro oferece uma introdução detalhada às técnicas de Processamento de Linguagem Natural (PLN), começando pelos fundamentos matemáticos da aprendizagem automática. e progredindo para aplicações avançadas envolvendo Large Language Models (LLMs). Abrange tópicos essenciais como o pré-processamento de texto, os métodos tradicionais de aprendizagem automática para classificação de texto e os modelos de linguagem de aprendizagem profunda. Além disso, os autores exploram a teoria, o design e a implementação de LLMs, fornecendo exemplos práticos de código Python. O livro também discute as tendências futuras em PNL e inclui insights de especialistas, tornando-o um recurso valioso tanto para principiantes como para profissionais experientes que desejam resolver problemas de negócios do mundo real utilizando Python.",
                                        'বাংলা': "ফাউন্ডেশন থেকে এলএলএম পর্যন্ত এনএলপি মাস্টারিং হল লিওর গাজিট এবং মেসাম গাফফারি দ্বারা রচিত একটি বিস্তৃত নির্দেশিকা, যা 26 এপ্রিল, 2024-এ প্রকাশিত হয়েছে। এই বইটি মেশিন লার্নিংয়ের গাণিতিক ভিত্তি দিয়ে শুরু করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (এনএলপি) কৌশলগুলির একটি গভীরভাবে পরিচিতি প্রদান করে। এবং বৃহৎ ভাষার মডেল জড়িত উন্নত অ্যাপ্লিকেশনে অগ্রগতি (এলএলএম)। এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন পাঠ্য প্রিপ্রসেসিং, পাঠ্য শ্রেণিবিন্যাসের জন্য প্রথাগত মেশিন লার্নিং পদ্ধতি এবং গভীর শিক্ষার ভাষা মডেল। অতিরিক্তভাবে, লেখকরা LLM-এর তত্ত্ব, নকশা এবং বাস্তবায়ন অন্বেষণ করেন, সর্বত্র ব্যবহারিক পাইথন কোড নমুনা প্রদান করেন। বইটি NLP-এর ভবিষ্যৎ প্রবণতা নিয়েও আলোচনা করে এবং এতে বিশেষজ্ঞের অন্তর্দৃষ্টি অন্তর্ভুক্ত রয়েছে, যা পাইথন ব্যবহার করে বাস্তব-বিশ্বের ব্যবসায়িক সমস্যা সমাধানের লক্ষ্যে নতুন এবং অভিজ্ঞ অনুশীলনকারীদের উভয়ের জন্যই এটিকে একটি মূল্যবান সম্পদ করে তুলেছে।",
                                        'عَرَبِيّ': "يعد كتاب Mastering NLP from Foundations to LLMs دليلاً شاملاً من تأليف ليور جازيت وميسام غفاري، ونُشر في 26 أبريل 2024. يقدم هذا الكتاب مقدمة متعمقة لتقنيات معالجة اللغة الطبيعية (NLP)، بدءًا من الأسس الرياضية للتعلم الآلي والتقدم إلى التطبيقات المتقدمة التي تتضمن نماذج اللغة الكبيرة (LLMs). ويغطي موضوعات أساسية مثل معالجة النصوص مسبقًا، وطرق التعلم الآلي التقليدية لتصنيف النصوص، ونماذج اللغة للتعلم العميق. بالإضافة إلى ذلك، يستكشف المؤلفون نظرية وتصميم وتنفيذ نماذج اللغة الكبيرة، مما يوفر عينات عملية من أكواد بايثون في جميع أنحاء الكتاب. يناقش الكتاب أيضًا الاتجاهات المستقبلية في معالجة اللغة الطبيعية ويتضمن رؤى الخبراء، مما يجعله موردًا قيمًا للمبتدئين والممارسين ذوي الخبرة الذين يهدفون إلى حل مشاكل الأعمال في العالم الحقيقي باستخدام بايثون.",
                                        'فارسی': "تسلط بر NLP از مبانی تا LLM یک راهنمای جامع است که توسط لیور گازیت و میثم غفاری منتشر شده است که در 26 آوریل 2024 منتشر شده است. این کتاب مقدمه ای عمیق بر تکنیک های پردازش زبان طبیعی (NLP) ارائه می دهد که با مبانی ریاضی یادگیری ماشین شروع می شود. و پیشرفت به سمت برنامه های کاربردی پیشرفته شامل مدل های زبان بزرگ (LLM). موضوعات ضروری مانند پیش پردازش متن، روش های سنتی یادگیری ماشینی برای طبقه بندی متن و مدل های زبان یادگیری عمیق را پوشش می دهد. علاوه بر این، نویسندگان نظریه، طراحی و پیاده سازی LLM ها را بررسی می کنند و نمونه های عملی کد پایتون را در سراسر آن ارائه می کنند. این کتاب همچنین روندهای آینده در NLP را مورد بحث قرار می‌دهد و شامل بینش‌های متخصص می‌شود، که آن را به منبعی ارزشمند برای مبتدیان و متخصصان با تجربه تبدیل می‌کند که هدفشان حل مشکلات تجاری دنیای واقعی با استفاده از پایتون است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/4 - Mastering NLP from Foundations to LLMs.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/English/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/German/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Chinese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Russian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/French/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Japanese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Korean/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Spanish/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Hindi/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Portugues/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Bengali/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Arabic/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Persian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                },
                        },
                        // -- > DJANGO + 1 : Django 5 By Example
                        {
                                "title": {
                                        'English': "Django 5 By Example",
                                        'Deutsch': "Django 5 By Example",
                                        '中国人': "Django 5 By Example",
                                        'Русский': "Django 5 By Example",
                                        'Français': "Django 5 By Example",
                                        '日本語': "Django 5 By Example",
                                        '한국인': "Django 5 By Example",
                                        'Español': "Django 5 By Example",
                                        'हिंदी': "Django 5 By Example",
                                        'Português': "Django 5 By Example",
                                        'বাংলা': "Django 5 By Example",
                                        'عَرَبِيّ': "Django 5 By Example",
                                        'فارسی': "Django 5 By Example",
                                },
                                "description": {
                                        'English': "Django 5 By Example by Antonio Mele, with a foreword by Django contributor Paolo Melchiorre, is an essential resource for developers seeking to master the Django framework. This book provides a hands-on approach, guiding readers through the creation of real-world web applications using Django 5. Covering key concepts such as database modeling, forms, authentication, and deployment, it bridges the gap between theory and practice. Antonio Mele's clear explanations and step-by-step instructions are complemented by Paolo Melchiorre's foreword, which offers insights from his extensive experience as a Django contributor. Whether you're a beginner or an experienced developer, this book equips you with the tools to build scalable and robust web applications.",
                                        'Deutsch': "„Django 5 By Example“ von Antonio Mele, mit einem Vorwort des Django-Mitarbeiters Paolo Melchiorre, ist eine unverzichtbare Ressource für Entwickler, die das Django-Framework beherrschen möchten. Dieses Buch bietet einen praktischen Ansatz und führt die Leser durch die Erstellung realer Webanwendungen mit Django 5. Es behandelt wichtige Konzepte wie Datenbankmodellierung, Formulare, Authentifizierung und Bereitstellung und schließt so die Lücke zwischen Theorie und Praxis. Antonio Meles klare Erklärungen und Schritt-für-Schritt-Anleitungen werden durch das Vorwort von Paolo Melchiorre ergänzt, das Einblicke aus seiner umfassenden Erfahrung als Django-Mitarbeiter bietet. Egal, ob Sie Anfänger oder erfahrener Entwickler sind, dieses Buch stattet Sie mit den Werkzeugen aus, um skalierbare und robuste Webanwendungen zu erstellen.",
                                        '中国人': "Antonio Mele 编写的《Django 5 By Example》由 Django 贡献者 Paolo Melchiorre 作序，是希望掌握 Django 框架的开发人员的必备资源。本书采用实践方法，指导读者使用 Django 5 创建真实的 Web 应用程序。本书涵盖了数据库建模、表单、身份验证和部署等关键概念，弥合了理论与实践之间的差距。Antonio Mele 的清晰解释和分步说明与 Paolo Melchiorre 的序言相得益彰，序言提供了他作为 Django 贡献者的丰富经验的见解。无论您是初学者还是经验丰富的开发人员，本书都为您提供了构建可扩展且强大的 Web 应用程序的工具。",
                                        'Русский': "Django 5 By Example Антонио Меле с предисловием участника Django Паоло Мелькиорре — это важный ресурс для разработчиков, стремящихся освоить фреймворк Django. Эта книга предлагает практический подход, направляя читателей по созданию реальных веб-приложений с использованием Django 5. Охватывая ключевые концепции, такие как моделирование базы данных, формы, аутентификация и развертывание, она устраняет разрыв между теорией и практикой. Четкие объяснения и пошаговые инструкции Антонио Меле дополняются предисловием Паоло Мелькиорре, которое предлагает идеи из его обширного опыта в качестве участника Django. Независимо от того, новичок вы или опытный разработчик, эта книга снабдит вас инструментами для создания масштабируемых и надежных веб-приложений.",
                                        'Français': "Django 5 By Example d'Antonio Mele, préfacé par Paolo Melchiorre, contributeur de Django, est une ressource essentielle pour les développeurs qui cherchent à maîtriser le framework Django. Ce livre propose une approche pratique, guidant les lecteurs dans la création d'applications Web réelles à l'aide de Django 5. Couvrant des concepts clés tels que la modélisation de base de données, les formulaires, l'authentification et le déploiement, il comble le fossé entre la théorie et la pratique. Les explications claires et les instructions étape par étape d'Antonio Mele sont complétées par l'avant-propos de Paolo Melchiorre, qui offre des informations tirées de sa vaste expérience en tant que contributeur de Django. Que vous soyez un développeur débutant ou expérimenté, ce livre vous fournit les outils nécessaires pour créer des applications Web évolutives et robustes.",
                                        '日本語': "Django 5 By Example (Antonio Mele 著、Django 貢献者 Paolo Melchiorre による序文付き) は、Django フレームワークを習得したい開発者にとって不可欠なリソースです。この本は実践的なアプローチを提供し、読者が Django 5 を使用して実際の Web アプリケーションを作成する方法をガイドします。データベース モデリング、フォーム、認証、展開などの主要概念を取り上げ、理論と実践のギャップを埋めます。Antonio Mele の明確な説明とステップ バイ ステップの指示は、Django 貢献者としての豊富な経験から得た洞察を提供する Paolo Melchiorre の序文によって補完されます。初心者でも経験豊富な開発者でも、この本はスケーラブルで堅牢な Web アプリケーションを構築するためのツールを提供します。",
                                        '한국인': "Django 기여자 Paolo Melchiorre가 서문을 쓴 Antonio Mele의 Django 5 By Example은 Django 프레임워크를 마스터하려는 개발자에게 필수적인 리소스입니다. 이 책은 Django 5를 사용하여 실제 웹 애플리케이션을 만드는 방법을 안내하는 실습적 접근 방식을 제공합니다. 데이터베이스 모델링, 양식, 인증 및 배포와 같은 핵심 개념을 다루며 이론과 실제 간의 격차를 메웁니다. Antonio Mele의 명확한 설명과 단계별 지침은 Django 기여자로서의 광범위한 경험을 바탕으로 통찰력을 제공하는 Paolo Melchiorre의 서문으로 보완됩니다. 초보자이든 숙련된 개발자이든 이 책은 확장 가능하고 견고한 웹 애플리케이션을 구축하는 데 필요한 도구를 제공합니다.",
                                        'Español': "Django 5 By Example de Antonio Mele, con un prólogo del colaborador de Django Paolo Melchiorre, es un recurso esencial para los desarrolladores que buscan dominar el marco de trabajo de Django. Este libro ofrece un enfoque práctico, guiando a los lectores a través de la creación de aplicaciones web del mundo real utilizando Django 5. Cubriendo conceptos clave como el modelado de bases de datos, formularios, autenticación e implementación, cierra la brecha entre la teoría y la práctica. Las explicaciones claras de Antonio Mele y las instrucciones paso a paso se complementan con el prólogo de Paolo Melchiorre, que ofrece información de su amplia experiencia como colaborador de Django. Ya sea que sea un principiante o un desarrollador experimentado, este libro lo equipa con las herramientas para crear aplicaciones web escalables y sólidas.",
                                        'हिंदी': "एंटोनियो मेले द्वारा लिखित Django 5 By Example, Django योगदानकर्ता पाओलो मेल्चियोरे द्वारा लिखित प्रस्तावना के साथ, Django फ्रेमवर्क में महारत हासिल करने के इच्छुक डेवलपर्स के लिए एक आवश्यक संसाधन है। यह पुस्तक एक व्यावहारिक दृष्टिकोण प्रदान करती है, जो पाठकों को Django 5 का उपयोग करके वास्तविक दुनिया के वेब एप्लिकेशन बनाने के माध्यम से मार्गदर्शन करती है। डेटाबेस मॉडलिंग, फ़ॉर्म, प्रमाणीकरण और परिनियोजन जैसी प्रमुख अवधारणाओं को शामिल करते हुए, यह सिद्धांत और व्यवहार के बीच की खाई को पाटता है। एंटोनियो मेले की स्पष्ट व्याख्याएँ और चरण-दर-चरण निर्देश पाओलो मेल्चियोरे के प्रस्तावना द्वारा पूरक हैं, जो Django योगदानकर्ता के रूप में उनके व्यापक अनुभव से अंतर्दृष्टि प्रदान करता है। चाहे आप शुरुआती हों या अनुभवी डेवलपर, यह पुस्तक आपको स्केलेबल और मज़बूत वेब एप्लिकेशन बनाने के लिए टूल से लैस करती है।",
                                        'Português': "Django 5 By Example de Antonio Mele, com prefácio do colaborador do Django, Paolo Melchiorre, é um recurso essencial para os programadores que procuram dominar a framework Django. Este livro fornece uma abordagem prática, orientando os leitores na criação de aplicações web do mundo real utilizando Django 5. Abrangendo conceitos-chave como a modelação de bases de dados, formulários, autenticação e implementação, preenche a lacuna entre a teoria e a prática. As explicações claras e as instruções passo a passo de Antonio Mele são complementadas pelo prefácio de Paolo Melchiorre, que oferece insights da sua vasta experiência como contribuidor para Django. Quer seja um programador principiante ou experiente, este livro fornece as ferramentas para criar aplicações Web escaláveis ​​e robustas.",
                                        'বাংলা': "জ্যাঙ্গো অবদানকারী পাওলো মেলচিওরের একটি মুখবন্ধ সহ আন্তোনিও মেলের উদাহরণ দ্বারা জ্যাঙ্গো 5, জ্যাঙ্গো ফ্রেমওয়ার্ক আয়ত্ত করতে চাওয়া বিকাশকারীদের জন্য একটি অপরিহার্য সম্পদ। এই বইটি একটি হ্যান্ডস-অন পদ্ধতি প্রদান করে, Django 5 ব্যবহার করে বাস্তব-বিশ্বের ওয়েব অ্যাপ্লিকেশন তৈরির মাধ্যমে পাঠকদের গাইড করে। ডাটাবেস মডেলিং, ফর্ম, প্রমাণীকরণ এবং স্থাপনার মতো মূল ধারণাগুলি কভার করে, এটি তত্ত্ব এবং অনুশীলনের মধ্যে ব্যবধান পূরণ করে। আন্তোনিও মেলের স্পষ্ট ব্যাখ্যা এবং ধাপে ধাপে নির্দেশাবলী পাওলো মেলচিওরের মুখবন্ধ দ্বারা পরিপূরক, যা জ্যাঙ্গো অবদানকারী হিসেবে তার ব্যাপক অভিজ্ঞতা থেকে অন্তর্দৃষ্টি প্রদান করে। আপনি একজন শিক্ষানবিস বা অভিজ্ঞ ডেভেলপার হোন না কেন, এই বইটি আপনাকে পরিমাপযোগ্য এবং শক্তিশালী ওয়েব অ্যাপ্লিকেশন তৈরি করার সরঞ্জাম দিয়ে সজ্জিত করে।",
                                        'عَرَبِيّ': "يعد كتاب Django 5 By Example للمؤلف أنطونيو ميلي، والذي كتب مقدمة له باولو ميلكيوري، أحد المساهمين في Django، موردًا أساسيًا للمطورين الذين يسعون إلى إتقان إطار عمل Django. يقدم هذا الكتاب نهجًا عمليًا، ويرشد القراء خلال إنشاء تطبيقات ويب في العالم الحقيقي باستخدام Django 5. ويغطي الكتاب المفاهيم الأساسية مثل نمذجة قاعدة البيانات والنماذج والمصادقة والنشر، ويسد الفجوة بين النظرية والتطبيق. وتكتمل تفسيرات أنطونيو ميلي الواضحة وتعليماته خطوة بخطوة بمقدمة باولو ميلكيوري، التي تقدم رؤى من خبرته الواسعة كمساهم في Django. سواء كنت مبتدئًا أو مطورًا متمرسًا، فإن هذا الكتاب يزودك بالأدوات اللازمة لبناء تطبيقات ويب قابلة للتطوير وقوية.",
                                        'فارسی': "Django 5 By Example توسط آنتونیو مله، با پیشگفتاری توسط Paolo Melchiorre، همکار جنگو، یک منبع ضروری برای توسعه دهندگانی است که به دنبال تسلط بر چارچوب جنگو هستند. این کتاب یک رویکرد عملی ارائه می‌کند و خوانندگان را از طریق ایجاد برنامه‌های کاربردی وب در دنیای واقعی با استفاده از جنگو 5 راهنمایی می‌کند. با پوشش مفاهیم کلیدی مانند مدل‌سازی پایگاه داده، فرم‌ها، احراز هویت، و استقرار، شکاف بین تئوری و عمل را پر می‌کند. توضیحات واضح و دستورالعمل‌های گام به گام آنتونیو مله با پیش‌گفتار پائولو ملکیوره تکمیل می‌شود، که بینش‌هایی از تجربه گسترده او به‌عنوان مشارکت‌کننده جنگو ارائه می‌دهد. چه یک مبتدی یا یک توسعه دهنده با تجربه باشید، این کتاب شما را با ابزارهایی برای ساخت برنامه های کاربردی وب مقیاس پذیر و قوی مجهز می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/6 - Django 5 By Example.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/0%20-%204%20-%20Django%205%20By%20Example.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/0%20-%204%20-%20Django%205%20By%20Example.md",
                                },
                        },
                        // -- > DJANGO : Django for APIs
                        {
                                "title": {
                                        'English': "Django for APIs",
                                        'Deutsch': "Django for APIs",
                                        '中国人': "Django for APIs",
                                        'Русский': "Django for APIs",
                                        'Français': "Django for APIs",
                                        '日本語': "Django for APIs",
                                        '한국인': "Django for APIs",
                                        'Español': "Django for APIs",
                                        'हिंदी': "Django for APIs",
                                        'Português': "Django for APIs",
                                        'বাংলা': "Django for APIs",
                                        'عَرَبِيّ': "Django for APIs",
                                        'فارسی': "Django for APIs",
                                },
                                "description": {
                                        'English': "Django for APIs by William S. Vincent is a comprehensive guide to building robust, modern APIs using Django and Django REST Framework (DRF). Tailored for developers of all levels, this book provides a hands-on approach to creating APIs, covering everything from the basics of RESTful architecture to advanced techniques like token-based authentication and deploying APIs to production. The author skillfully breaks down complex concepts, making it easy to understand how to build and scale APIs that are secure and maintainable. With practical examples and a focus on best practices, Django for APIs is an invaluable resource for anyone looking to harness the power of Django to create cutting-edge web and mobile applications.",
                                        'Deutsch': "„Django für APIs“ von William S. Vincent ist ein umfassender Leitfaden zum Erstellen robuster, moderner APIs mit Django und Django REST Framework (DRF). Dieses Buch ist auf Entwickler aller Erfahrungsstufen zugeschnitten und bietet einen praktischen Ansatz zum Erstellen von APIs. Es deckt alles ab, von den Grundlagen der RESTful-Architektur bis hin zu fortgeschrittenen Techniken wie tokenbasierter Authentifizierung und dem Bereitstellen von APIs in der Produktion. Der Autor zerlegt komplexe Konzepte gekonnt und macht es leicht verständlich, wie man sichere und wartungsfreundliche APIs erstellt und skaliert. Mit praktischen Beispielen und einem Schwerpunkt auf Best Practices ist „Django für APIs“ eine unschätzbare Ressource für alle, die die Leistungsfähigkeit von Django nutzen möchten, um hochmoderne Web- und Mobilanwendungen zu erstellen.",
                                        '中国人': "William S. Vincent 撰写的《Django for APIs》是一本全面的指南，介绍如何使用 Django 和 Django REST Framework (DRF) 构建强大的现代 API。本书适合各个级别的开发人员，提供了一种创建 API 的实践方法，涵盖了从 RESTful 架构的基础知识到高级技术（如基于令牌的身份验证和将 API 部署到生产环境）的所有内容。作者巧妙地分解了复杂的概念，使人们很容易理解如何构建和扩展安全且可维护的 API。通过实际示例并专注于最佳实践，《Django for APIs》对于任何希望利用 Django 的强大功能来创建尖端 Web 和移动应用程序的人来说都是宝贵的资源。",
                                        'Русский': "Django for APIs Уильяма С. Винсента — это всеобъемлющее руководство по созданию надежных современных API с использованием Django и Django REST Framework (DRF). Эта книга, рассчитанная на разработчиков всех уровней, предлагает практический подход к созданию API, охватывая все: от основ архитектуры RESTful до продвинутых методов, таких как аутентификация на основе токенов и развертывание API в производстве. Автор умело разбирает сложные концепции, упрощая понимание того, как создавать и масштабировать API, которые являются безопасными и удобными для обслуживания. Благодаря практическим примерам и акценту на передовых методах, Django for APIs является бесценным ресурсом для тех, кто хочет использовать мощь Django для создания передовых веб- и мобильных приложений.",
                                        'Français': "Django for APIs de William S. Vincent est un guide complet pour la création d'API robustes et modernes à l'aide de Django et de Django REST Framework (DRF). Conçu pour les développeurs de tous niveaux, ce livre propose une approche pratique de la création d'API, couvrant tout, des bases de l'architecture RESTful aux techniques avancées telles que l'authentification basée sur des jetons et le déploiement d'API en production. L'auteur décompose habilement des concepts complexes, ce qui permet de comprendre facilement comment créer et faire évoluer des API sécurisées et maintenables. Avec des exemples pratiques et une attention particulière portée aux meilleures pratiques, Django for APIs est une ressource inestimable pour quiconque cherche à exploiter la puissance de Django pour créer des applications Web et mobiles de pointe.",
                                        '日本語': "William S. Vincent 著の Django for APIs は、Django と Django REST Framework (DRF) を使用して堅牢で最新の API を構築するための総合的なガイドです。あらゆるレベルの開発者向けに作られたこの本は、API を作成するための実践的なアプローチを提供し、RESTful アーキテクチャの基礎から、トークンベースの認証や API の運用環境への導入などの高度なテクニックまですべてを網羅しています。著者は複雑な概念を巧みに分解し、安全で保守可能な API を構築および拡張する方法を簡単に理解できるようにしています。実用的な例とベスト プラクティスに重点を置いた Django for APIs は、Django のパワーを活用して最先端の Web アプリケーションやモバイル アプリケーションを作成したい人にとって貴重なリソースです。",
                                        '한국인': "William S. Vincent의 Django for APIs는 Django와 Django REST Framework(DRF)를 사용하여 견고하고 현대적인 API를 구축하는 포괄적인 가이드입니다. 모든 레벨의 개발자를 위해 맞춤 제작된 이 책은 RESTful 아키텍처의 기본부터 토큰 기반 인증 및 프로덕션에 API를 배포하는 것과 같은 고급 기술에 이르기까지 모든 것을 포괄하는 API를 만드는 데 대한 실무적 접근 방식을 제공합니다. 저자는 복잡한 개념을 능숙하게 분석하여 안전하고 유지 관리 가능한 API를 구축하고 확장하는 방법을 쉽게 이해할 수 있도록 합니다. 실용적인 예와 모범 사례에 중점을 둔 Django for APIs는 최첨단 웹 및 모바일 애플리케이션을 만들기 위해 Django의 힘을 활용하려는 모든 사람에게 귀중한 리소스입니다.",
                                        'Español': "Django for APIs de William S. Vincent es una guía completa para crear APIs modernas y robustas utilizando Django y Django REST Framework (DRF). Diseñado para desarrolladores de todos los niveles, este libro ofrece un enfoque práctico para crear APIs, que abarca desde los conceptos básicos de la arquitectura RESTful hasta técnicas avanzadas como la autenticación basada en tokens y la implementación de APIs en producción. El autor desglosa hábilmente conceptos complejos, lo que facilita la comprensión de cómo crear y escalar APIs que sean seguras y fáciles de mantener. Con ejemplos prácticos y un enfoque en las mejores prácticas, Django for APIs es un recurso invaluable para cualquiera que busque aprovechar el poder de Django para crear aplicaciones web y móviles de vanguardia.",
                                        'हिंदी': "विलियम एस. विंसेंट द्वारा लिखित Django for APIs, Django और Django REST Framework (DRF) का उपयोग करके मज़बूत, आधुनिक API बनाने के लिए एक व्यापक मार्गदर्शिका है। सभी स्तरों के डेवलपर्स के लिए तैयार की गई यह पुस्तक API बनाने के लिए एक व्यावहारिक दृष्टिकोण प्रदान करती है, जिसमें RESTful आर्किटेक्चर की मूल बातों से लेकर टोकन-आधारित प्रमाणीकरण और API को उत्पादन में तैनात करने जैसी उन्नत तकनीकों तक सब कुछ शामिल है। लेखक ने जटिल अवधारणाओं को कुशलता से तोड़ा है, जिससे यह समझना आसान हो जाता है कि सुरक्षित और रखरखाव योग्य API कैसे बनाएं और कैसे स्केल करें। व्यावहारिक उदाहरणों और सर्वोत्तम प्रथाओं पर ध्यान देने के साथ, Django for APIs उन सभी के लिए एक अमूल्य संसाधन है जो अत्याधुनिक वेब और मोबाइल एप्लिकेशन बनाने के लिए Django की शक्ति का उपयोग करना चाहते हैं।",
                                        'Português': "Django para APIs de William S. Vincent é um guia abrangente para a construção de APIs modernas e robustas utilizando Django e Django REST Framework (DRF). Feito à medida para programadores de todos os níveis, este livro oferece uma abordagem prática à criação de APIs, abrangendo desde os conceitos básicos da arquitetura RESTful até técnicas avançadas, como a autenticação baseada em tokens e a implementação de APIs na produção. O autor divide habilmente conceitos complexos, facilitando a compreensão de como construir e escalar APIs que sejam seguras e fáceis de manter. Com exemplos práticos e foco nas melhores práticas, o Django para APIs é um recurso inestimável para quem pretende aproveitar o poder do Django para criar aplicações web e móveis de última geração.",
                                        'বাংলা': "উইলিয়াম এস ভিনসেন্টের API-এর জন্য জ্যাঙ্গো হল জ্যাঙ্গো এবং জ্যাঙ্গো REST ফ্রেমওয়ার্ক (DRF) ব্যবহার করে শক্তিশালী, আধুনিক API তৈরির জন্য একটি ব্যাপক নির্দেশিকা। সমস্ত স্তরের বিকাশকারীদের জন্য তৈরি, এই বইটি API তৈরির জন্য একটি হ্যান্ডস-অন পদ্ধতি প্রদান করে, RESTful আর্কিটেকচারের মূল বিষয়গুলি থেকে শুরু করে টোকেন-ভিত্তিক প্রমাণীকরণ এবং উত্পাদনে API গুলি স্থাপনের মতো উন্নত কৌশলগুলিকে কভার করে৷ লেখক দক্ষতার সাথে জটিল ধারণাগুলি ভেঙে ফেলেন, যাতে নিরাপদ এবং রক্ষণাবেক্ষণযোগ্য APIগুলি কীভাবে তৈরি এবং স্কেল করা যায় তা বোঝা সহজ করে তোলে। ব্যবহারিক উদাহরণ এবং সর্বোত্তম অনুশীলনের উপর ফোকাস সহ, API-এর জন্য জ্যাঙ্গো অত্যাধুনিক ওয়েব এবং মোবাইল অ্যাপ্লিকেশন তৈরি করতে জ্যাঙ্গোর শক্তিকে কাজে লাগাতে চায় এমন যেকোন ব্যক্তির জন্য একটি অমূল্য সম্পদ।",
                                        'عَرَبِيّ': "Django for APIs من تأليف William S. Vincent هو دليل شامل لبناء واجهات برمجة تطبيقات قوية وحديثة باستخدام Django وإطار عمل Django REST (DRF). تم تصميم هذا الكتاب خصيصًا للمطورين من جميع المستويات، حيث يوفر نهجًا عمليًا لإنشاء واجهات برمجة التطبيقات، ويغطي كل شيء من أساسيات بنية RESTful إلى التقنيات المتقدمة مثل المصادقة القائمة على الرمز ونشر واجهات برمجة التطبيقات في الإنتاج. يحلل المؤلف بمهارة المفاهيم المعقدة، مما يجعل من السهل فهم كيفية بناء وتوسيع واجهات برمجة التطبيقات الآمنة والقابلة للصيانة. مع الأمثلة العملية والتركيز على أفضل الممارسات، يعد Django for APIs موردًا لا يقدر بثمن لأي شخص يتطلع إلى الاستفادة من قوة Django لإنشاء تطبيقات ويب وجوال متطورة.",
                                        'فارسی': "Django for APIs توسط William S. Vincent یک راهنمای جامع برای ساختن APIهای قوی و مدرن با استفاده از Django و Django REST Framework (DRF) است. این کتاب که برای توسعه دهندگان همه سطوح طراحی شده است، یک رویکرد عملی برای ایجاد API ارائه می دهد، که همه چیز را از اصول معماری RESTful گرفته تا تکنیک های پیشرفته مانند احراز هویت مبتنی بر توکن و استقرار API ها تا تولید را پوشش می دهد. نویسنده به طرز ماهرانه ای مفاهیم پیچیده را تجزیه می کند و درک نحوه ساخت و مقیاس بندی API هایی که ایمن و قابل نگهداری هستند را آسان می کند. با مثال‌های عملی و تمرکز بر بهترین شیوه‌ها، Django for APIها یک منبع ارزشمند برای هر کسی است که به دنبال استفاده از قدرت جنگو برای ایجاد برنامه‌های کاربردی وب و موبایل پیشرفته است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/5 - Django for APIs.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/0%20-%203%20-%20Django%20for%20APIs.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/0%20-%203%20-%20Django%20for%20APIs.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/0%20-%203%20-%20Django%20for%20APIs.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/0%20-%203%20-%20Django%20for%20APIs.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/0%20-%203%20-%20Django%20for%20APIs.md",
                                },
                        },
                        // -- > DJANGO - 1 : Django for Professionals
                        {
                                "title": {
                                        'English': "Django for Professionals",
                                        'Deutsch': "Django for Professionals",
                                        '中国人': "Django for Professionals",
                                        'Русский': "Django for Professionals",
                                        'Français': "Django for Professionals",
                                        '日本語': "Django for Professionals",
                                        '한국인': "Django for Professionals",
                                        'Español': "Django for Professionals",
                                        'हिंदी': "Django for Professionals",
                                        'Português': "Django for Professionals",
                                        'বাংলা': "Django for Professionals",
                                        'عَرَبِيّ': "Django for Professionals",
                                        'فارسی': "Django for Professionals",
                                },
                                "description": {
                                        'English': "Django for Professionals by William S. Vincent is an advanced guide tailored for developers who want to build modern, secure, and scalable web applications using Django, the high-level Python web framework. This book delves deep into best practices for deploying production-ready applications, covering critical topics such as custom user models, advanced user authentication, Docker for containerization, and continuous integration. It also explores setting up robust testing strategies and configuring third-party integrations like PostgreSQL and cloud services. With a practical, hands-on approach, Django for Professionals equips readers with the knowledge to craft real-world web applications, making it an essential resource for anyone seeking to elevate their Django skills to a professional level.",
                                        'Deutsch': "„Django für Profis“ von William S. Vincent ist ein fortgeschrittener Leitfaden für Entwickler, die moderne, sichere und skalierbare Webanwendungen mit Django, dem hochrangigen Python-Webframework, erstellen möchten. Dieses Buch befasst sich eingehend mit Best Practices für die Bereitstellung produktionsreifer Anwendungen und behandelt wichtige Themen wie benutzerdefinierte Benutzermodelle, erweiterte Benutzerauthentifizierung, Docker für die Containerisierung und kontinuierliche Integration. Außerdem wird das Einrichten robuster Teststrategien und das Konfigurieren von Integrationen von Drittanbietern wie PostgreSQL und Cloud-Diensten behandelt. Mit einem praktischen, praxisnahen Ansatz vermittelt „Django für Profis“ den Lesern das Wissen, um reale Webanwendungen zu erstellen, und ist damit eine unverzichtbare Ressource für alle, die ihre Django-Kenntnisse auf ein professionelles Niveau heben möchten.",
                                        '中国人': "William S. Vincent 撰写的《Django for Professionals》是一本高级指南，专门为想要使用高级 Python Web 框架 Django 构建现代、安全且可扩展的 Web 应用程序的开发人员量身定制。本书深入探讨了部署生产就绪应用程序的最佳实践，涵盖了自定义用户模型、高级用户身份验证、用于容器化的 Docker 和持续集成等关键主题。它还探讨了如何设置强大的测试策略以及配置第三方集成，如 PostgreSQL 和云服务。《Django for Professionals》采用实用的动手方法，为读者提供制作真实 Web 应用程序的知识，使其成为任何希望将 Django 技能提升到专业水平的人的必备资源。",
                                        'Русский': "Django for Professionals Уильяма С. Винсента — это расширенное руководство, предназначенное для разработчиков, которые хотят создавать современные, безопасные и масштабируемые веб-приложения с использованием Django, высокоуровневого веб-фреймворка Python. Эта книга глубоко разбирает лучшие практики развертывания готовых к производству приложений, охватывая такие важные темы, как пользовательские модели пользователей, расширенная аутентификация пользователей, Docker для контейнеризации и непрерывная интеграция. В ней также рассматриваются настройка надежных стратегий тестирования и настройка сторонних интеграций, таких как PostgreSQL и облачные сервисы. Благодаря практическому подходу Django for Professionals снабжает читателей знаниями для создания реальных веб-приложений, что делает ее важным ресурсом для тех, кто стремится повысить свои навыки работы с Django до профессионального уровня.",
                                        'Français': "Django for Professionals de William S. Vincent est un guide avancé conçu pour les développeurs qui souhaitent créer des applications Web modernes, sécurisées et évolutives à l'aide de Django, le framework Web Python de haut niveau. Ce livre explore en profondeur les meilleures pratiques pour le déploiement d'applications prêtes pour la production, couvrant des sujets critiques tels que les modèles utilisateur personnalisés, l'authentification avancée des utilisateurs, Docker pour la conteneurisation et l'intégration continue. Il explore également la mise en place de stratégies de test robustes et la configuration d'intégrations tierces telles que PostgreSQL et les services cloud. Avec une approche pratique et concrète, Django for Professionals fournit aux lecteurs les connaissances nécessaires pour créer des applications Web réelles, ce qui en fait une ressource essentielle pour quiconque cherche à élever ses compétences Django à un niveau professionnel.",
                                        '日本語': "William S. Vincent 著の Django for Professionals は、高水準の Python Web フレームワークである Django を使用して、最新かつ安全でスケーラブルな Web アプリケーションを構築したい開発者向けの高度なガイドです。この書籍では、カスタム ユーザー モデル、高度なユーザー認証、コンテナー化のための Docker、継続的インテグレーションなどの重要なトピックを取り上げ、本番環境対応のアプリケーションをデプロイするためのベスト プラクティスを詳細に説明します。また、堅牢なテスト戦略の設定や、PostgreSQL やクラウド サービスなどのサードパーティ統合の構成についても説明します。実践的で実践的なアプローチを採用した Django for Professionals は、読者に実際の Web アプリケーションを作成するための知識を身につけさせ、Django スキルをプロフェッショナル レベルに引き上げたいと考えているすべての人にとって不可欠なリソースとなります。",
                                        '한국인': "Django for Professionals는 William S. Vincent가 쓴 고급 가이드로, 고급 Python 웹 프레임워크인 Django를 사용하여 현대적이고 안전하며 확장 가능한 웹 애플리케이션을 빌드하려는 개발자를 위해 만들어졌습니다. 이 책은 프로덕션에 적합한 애플리케이션을 배포하기 위한 모범 사례를 자세히 다루며, 사용자 정의 사용자 모델, 고급 사용자 인증, 컨테이너화를 위한 Docker, 지속적인 통합과 같은 중요한 주제를 다룹니다. 또한 강력한 테스트 전략을 설정하고 PostgreSQL 및 클라우드 서비스와 같은 타사 통합을 구성하는 방법도 살펴봅니다. 실용적이고 실무적인 접근 방식을 통해 Django for Professionals는 독자에게 실제 웹 애플리케이션을 만드는 지식을 제공하여 Django 기술을 전문가 수준으로 끌어올리려는 모든 사람에게 필수적인 리소스입니다.",
                                        'Español': "Django for Professionals de William S. Vincent es una guía avanzada diseñada para desarrolladores que desean crear aplicaciones web modernas, seguras y escalables utilizando Django, el marco web de alto nivel de Python. Este libro profundiza en las mejores prácticas para implementar aplicaciones listas para producción y cubre temas críticos como modelos de usuario personalizados, autenticación avanzada de usuarios, Docker para contenerización e integración continua. También explora la configuración de estrategias de prueba sólidas y la configuración de integraciones de terceros como PostgreSQL y servicios en la nube. Con un enfoque práctico y directo, Django for Professionals proporciona a los lectores los conocimientos necesarios para crear aplicaciones web del mundo real, lo que lo convierte en un recurso esencial para cualquiera que busque elevar sus habilidades con Django a un nivel profesional.",
                                        'हिंदी': "विलियम एस. विंसेंट द्वारा लिखित Django for Professionals उन डेवलपर्स के लिए तैयार की गई एक उन्नत मार्गदर्शिका है जो Django, उच्च-स्तरीय पायथन वेब फ्रेमवर्क का उपयोग करके आधुनिक, सुरक्षित और स्केलेबल वेब एप्लिकेशन बनाना चाहते हैं। यह पुस्तक उत्पादन-तैयार अनुप्रयोगों को तैनात करने के लिए सर्वोत्तम प्रथाओं पर गहराई से चर्चा करती है, जिसमें कस्टम उपयोगकर्ता मॉडल, उन्नत उपयोगकर्ता प्रमाणीकरण, कंटेनरीकरण के लिए डॉकर और निरंतर एकीकरण जैसे महत्वपूर्ण विषय शामिल हैं। यह मजबूत परीक्षण रणनीतियों की स्थापना और PostgreSQL और क्लाउड सेवाओं जैसे तृतीय-पक्ष एकीकरण को कॉन्फ़िगर करने का भी पता लगाता है। व्यावहारिक, हाथों-हाथ दृष्टिकोण के साथ, Django for Professionals पाठकों को वास्तविक दुनिया के वेब एप्लिकेशन तैयार करने के ज्ञान से लैस करता है, जो इसे किसी भी व्यक्ति के लिए एक आवश्यक संसाधन बनाता है जो अपने Django कौशल को पेशेवर स्तर तक बढ़ाना चाहता है।",
                                        'Português': "Django for Professionals de William S. Vincent é um guia avançado feito à medida para programadores que desejam construir aplicações web modernas, seguras e escaláveis ​​utilizando o Django, a estrutura web Python de alto nível. Este livro aprofunda as melhores práticas para a implementação de aplicações prontas para produção, abordando tópicos críticos como modelos de utilizador personalizados, autenticação avançada de utilizador, Docker para contentorização e integração contínua. Explora também a configuração de estratégias de teste robustas e a configuração de integrações de terceiros, como o PostgreSQL e os serviços de cloud. Com uma abordagem prática e prática, o Django for Professionals equipa os leitores com o conhecimento necessário para criar aplicações web do mundo real, tornando-o um recurso essencial para qualquer pessoa que queira elevar as suas competências em Django a um nível profissional.",
                                        'বাংলা': "উইলিয়াম এস ভিনসেন্ট দ্বারা পেশাদারদের জন্য জ্যাঙ্গো হল একটি উন্নত নির্দেশিকা যা ডেভেলপারদের জন্য তৈরি করা হয়েছে যারা উচ্চ-স্তরের পাইথন ওয়েব ফ্রেমওয়ার্ক জ্যাঙ্গো ব্যবহার করে আধুনিক, সুরক্ষিত এবং মাপযোগ্য ওয়েব অ্যাপ্লিকেশন তৈরি করতে চান। এই বইটি উত্পাদন-প্রস্তুত অ্যাপ্লিকেশন স্থাপনের জন্য সর্বোত্তম অনুশীলনের গভীরে গভীরভাবে বর্ণনা করে, কাস্টম ব্যবহারকারী মডেল, উন্নত ব্যবহারকারীর প্রমাণীকরণ, কন্টেইনারাইজেশনের জন্য ডকার এবং ক্রমাগত একীকরণের মতো গুরুত্বপূর্ণ বিষয়গুলিকে কভার করে। এটি শক্তিশালী পরীক্ষার কৌশলগুলি সেট আপ করা এবং PostgreSQL এবং ক্লাউড পরিষেবাগুলির মতো তৃতীয় পক্ষের ইন্টিগ্রেশনগুলি কনফিগার করে। একটি ব্যবহারিক, হ্যান্ডস-অন পদ্ধতির সাথে, পেশাদারদের জন্য জ্যাঙ্গো পাঠকদের বাস্তব-বিশ্বের ওয়েব অ্যাপ্লিকেশনগুলি তৈরি করার জ্ঞান দিয়ে সজ্জিত করে, এটি তাদের জ্যাঙ্গো দক্ষতাকে পেশাদার স্তরে উন্নীত করতে চাওয়া যে কেউ তাদের জন্য একটি অপরিহার্য সংস্থান করে তোলে।",
                                        'عَرَبِيّ': "يعد كتاب Django for Professionals من تأليف ويليام إس فينسينت دليلاً متقدمًا مصممًا خصيصًا للمطورين الذين يرغبون في إنشاء تطبيقات ويب حديثة وآمنة وقابلة للتطوير باستخدام Django، إطار عمل الويب عالي المستوى بلغة Python. يتعمق هذا الكتاب في أفضل الممارسات لنشر التطبيقات الجاهزة للإنتاج، ويغطي مواضيع بالغة الأهمية مثل نماذج المستخدم المخصصة، ومصادقة المستخدم المتقدمة، وDocker للحاويات، والتكامل المستمر. كما يستكشف إعداد استراتيجيات اختبار قوية وتكوين تكاملات الجهات الخارجية مثل PostgreSQL والخدمات السحابية. من خلال نهج عملي عملي، يزود كتاب Django for Professionals القراء بالمعرفة اللازمة لصياغة تطبيقات ويب في العالم الحقيقي، مما يجعله موردًا أساسيًا لأي شخص يسعى إلى رفع مهاراته في Django إلى مستوى احترافي.",
                                        'فارسی': "Django for Professionals by William S. Vincent یک راهنمای پیشرفته است که برای توسعه دهندگانی که می خواهند برنامه های وب مدرن، ایمن و مقیاس پذیر را با استفاده از جنگو، چارچوب وب سطح بالا پایتون بسازند، طراحی شده است. این کتاب عمیقاً به بهترین شیوه‌ها برای استقرار برنامه‌های کاربردی آماده تولید می‌پردازد، موضوعات مهمی مانند مدل‌های کاربر سفارشی، احراز هویت پیشرفته کاربر، Docker برای کانتینری‌سازی و یکپارچه‌سازی مداوم را پوشش می‌دهد. همچنین راه‌اندازی استراتژی‌های تست قوی و پیکربندی ادغام‌های شخص ثالث مانند PostgreSQL و سرویس‌های ابری را بررسی می‌کند. با یک رویکرد عملی و عملی، جنگو برای حرفه ای ها خوانندگان را با دانش ساخت برنامه های کاربردی وب در دنیای واقعی مجهز می کند و آن را به منبعی ضروری برای هر کسی که به دنبال ارتقای مهارت های جنگو خود به سطح حرفه ای است تبدیل می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/4 - Django for Professionals.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/0%20-%202%20-%20Django%20for%20Professionals.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/0%20-%202%20-%20Django%20for%20Professionals.md",
                                },
                        },
                        // -- > DJANGO - 2 : Django for beginners
                        {
                                "title": {
                                        'English': "Django for Beginners",
                                        'Deutsch': "Django for Beginners",
                                        '中国人': "Django for Beginners",
                                        'Русский': "Django for Beginners",
                                        'Français': "Django for Beginners",
                                        '日本語': "Django for Beginners",
                                        '한국인': "Django for Beginners",
                                        'Español': "Django for Beginners",
                                        'हिंदी': "Django for Beginners",
                                        'Português': "Django for Beginners",
                                        'বাংলা': "Django for Beginners",
                                        'عَرَبِيّ': "Django for Beginners",
                                        'فارسی': "Django for Beginners",
                                },
                                "description": {
                                        'English': "Django for Beginners is a book that teaches you how to build websites using the Python web framework Django. It is written for beginners, so it starts with the basics and gradually introduces more complex concepts. The book is full of examples and exercises, so you can learn by doing.",
                                        'Deutsch': "„Django für Anfänger“ ist ein Buch, das Ihnen beibringt, wie Sie Websites mit dem Python-Webframework Django erstellen. Es ist für Anfänger geschrieben, beginnt also mit den Grundlagen und führt nach und nach komplexere Konzepte ein. Das Buch ist voller Beispiele und Übungen, sodass Sie durch praktisches Lernen lernen können.",
                                        '中国人': "《Django for Beginners》是一本教你如何使用 Python Web 框架 Django 构建网站的书。它是为初学者编写的，因此从基础知识开始，逐渐介绍更复杂的概念。这本书充满了示例和练习，因此你可以边做边学。",
                                        'Русский': "Django for Beginners — это книга, которая научит вас создавать веб-сайты с использованием веб-фреймворка Python Django. Она написана для новичков, поэтому начинается с основ и постепенно вводит более сложные концепции. Книга полна примеров и упражнений, поэтому вы можете учиться на практике.",
                                        'Français': "Django pour les débutants est un livre qui vous apprend à créer des sites Web à l'aide du framework Web Python Django. Il est écrit pour les débutants, il commence donc par les bases et introduit progressivement des concepts plus complexes. Le livre regorge d'exemples et d'exercices, vous pouvez donc apprendre en faisant.",
                                        '日本語': "Django for Beginners は、Python ウェブ フレームワーク Django を使用して Web サイトを構築する方法を教える本です。初心者向けに書かれているため、基礎から始まり、徐々に複雑な概念が紹介されます。この本には例や演習が満載で、実践しながら学ぶことができます。",
                                        '한국인': "Django for Beginners는 Python 웹 프레임워크 Django를 사용하여 웹사이트를 만드는 방법을 알려주는 책입니다. 초보자를 위해 쓰여졌으므로 기본부터 시작하여 점차 더 복잡한 개념을 소개합니다. 이 책은 예제와 연습으로 가득 차 있으므로 직접 해보면서 배울 수 있습니다.",
                                        'Español': "Django para principiantes es un libro que te enseña a crear sitios web utilizando el framework web de Python, Django. Está escrito para principiantes, por lo que comienza con los conceptos básicos y presenta gradualmente conceptos más complejos. El libro está lleno de ejemplos y ejercicios, por lo que puedes aprender haciendo.",
                                        'हिंदी': "Django for Beginners एक किताब है जो आपको Python वेब फ्रेमवर्क Django का उपयोग करके वेबसाइट बनाने का तरीका सिखाती है। यह शुरुआती लोगों के लिए लिखी गई है, इसलिए यह मूल बातों से शुरू होती है और धीरे-धीरे अधिक जटिल अवधारणाओं का परिचय देती है। यह किताब उदाहरणों और अभ्यासों से भरी हुई है, इसलिए आप करके सीख सकते हैं।",
                                        'Português': "Django para iniciantes é um livro que ensina a construir sites utilizando a framework web Python Django. Foi escrito para principiantes, por isso começa com o básico e introduz gradualmente conceitos mais complexos. O livro está cheio de exemplos e exercícios, para que possa aprender fazendo.",
                                        'বাংলা': "Django for Beginners হল একটি বই যা আপনাকে শেখায় কিভাবে Python ওয়েব ফ্রেমওয়ার্ক Django ব্যবহার করে ওয়েবসাইট তৈরি করতে হয়। এটি নতুনদের জন্য লেখা হয়েছে, তাই এটি প্রাথমিক বিষয়গুলি দিয়ে শুরু হয় এবং ধীরে ধীরে আরও জটিল ধারণাগুলি প্রবর্তন করে৷ বইটি উদাহরণ এবং অনুশীলনে পূর্ণ, তাই আপনি করে শিখতে পারেন।",
                                        'عَرَبِيّ': "Django for Beginners هو كتاب يعلمك كيفية إنشاء مواقع الويب باستخدام إطار عمل الويب Python Django. وهو مكتوب للمبتدئين، لذا فهو يبدأ بالأساسيات ويدخل تدريجيًا مفاهيم أكثر تعقيدًا. الكتاب مليء بالأمثلة والتمارين، لذا يمكنك التعلم من خلال الممارسة.",
                                        'فارسی': "جنگو برای مبتدیان کتابی است که به شما یاد می دهد چگونه با استفاده از چارچوب وب پایتون جنگو وب سایت بسازید. این برای مبتدیان نوشته شده است، بنابراین با اصول اولیه شروع می شود و به تدریج مفاهیم پیچیده تری را معرفی می کند. کتاب مملو از مثال ها و تمرین است، بنابراین می توانید با انجام کار یاد بگیرید.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/3 - Django for Beginners.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/0%20-%201%20-%20Django%20for%20Beginners.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/0%20-%201%20-%20Django%20for%20Beginners.md",
                                },
                        },
                        // -- > DJANGO - 3 : Learn Django in 24 hours
                        {
                                "title": {
                                        'English': "Learn Django in 24 hours",
                                        'Deutsch': "Lernen Sie Django in 24 Stunden",
                                        '中国人': "24 小时内学会 Django",
                                        'Русский': "Изучите Django за 24 часа",
                                        'Français': "Apprenez Django en 24 heures",
                                        '日本語': "24時間でDjangoを学ぶ",
                                        '한국인': "24시간 안에 Django를 배우세요",
                                        'Español': "Aprende Django en 24 horas",
                                        'हिंदी': "24 घंटे में Django सीखें",
                                        'Português': "Aprenda Django em 24 horas",
                                        'বাংলা': "24 ঘন্টার মধ্যে জ্যাঙ্গো শিখুন",
                                        'عَرَبِيّ': "تعلم دجانجو في 24 ساعة",
                                        'فارسی': "یادگیری جنگو در بیست و چهار ساعت",
                                },
                                "description": {
                                        'English': "Learn Django in 24 Hours for Beginners by S. Basu is an essential guide for aspiring web developers looking to master Django, a powerful Python-based web framework, in record time. This comprehensive book is tailored for beginners, breaking down complex concepts into easy-to-follow lessons. With practical examples, hands-on exercises, and a structured 24-hour plan, it covers everything from setting up your environment to deploying a full-fledged web application. Readers will explore Django's core features, including models, views, templates, and URL routing, while gaining confidence in building dynamic and scalable web applications. Whether you're new to programming or transitioning from another framework, this book equips you with the foundational knowledge and skills to kickstart your Django development journey.",
                                        'Deutsch': "„Lernen Sie Django in 24 Stunden für Anfänger“ von S. Basu ist ein unverzichtbarer Leitfaden für angehende Webentwickler, die Django, ein leistungsstarkes Python-basiertes Web-Framework, in Rekordzeit meistern möchten. Dieses umfassende Buch ist auf Anfänger zugeschnitten und unterteilt komplexe Konzepte in leicht verständliche Lektionen. Mit praktischen Beispielen, praktischen Übungen und einem strukturierten 24-Stunden-Plan deckt es alles ab, vom Einrichten Ihrer Umgebung bis zum Bereitstellen einer vollwertigen Webanwendung. Die Leser erkunden die Kernfunktionen von Django, einschließlich Modelle, Ansichten, Vorlagen und URL-Routing, und gewinnen gleichzeitig Vertrauen in die Erstellung dynamischer und skalierbarer Webanwendungen. Egal, ob Sie neu in der Programmierung sind oder von einem anderen Framework umsteigen, dieses Buch vermittelt Ihnen das grundlegende Wissen und die Fähigkeiten, um Ihre Django-Entwicklungsreise zu starten.",
                                        '中国人': "S. Basu 的《初学者 24 小时学会 Django》是一本必备指南，适合有抱负的 Web 开发人员，帮助他们在创纪录的时间内掌握基于 Python 的强大 Web 框架 Django。这本内容全面的书是为初学者量身定制的，将复杂的概念分解为易于理解的课程。通过实际示例、动手练习和结构化的 24 小时计划，它涵盖了从设置环境到部署成熟 Web 应用程序的所有内容。读者将探索 Django 的核心功能，包括模型、视图、模板和 URL 路由，同时获得构建动态和可扩展 Web 应用程序的信心。无论您是编程新手还是从其他框架过渡，这本书都将为您提供基础知识和技能，以开启您的 Django 开发之旅。",
                                        'Русский': "Learn Django in 24 Hours for Beginners, автор S. Basu, — это необходимое руководство для начинающих веб-разработчиков, желающих освоить Django, мощный веб-фреймворк на основе Python, в рекордно короткие сроки. Эта всеобъемлющая книга предназначена для новичков, разбивая сложные концепции на простые для понимания уроки. С практическими примерами, практическими упражнениями и структурированным 24-часовым планом она охватывает все: от настройки среды до развертывания полноценного веб-приложения. Читатели изучат основные функции Django, включая модели, представления, шаблоны и маршрутизацию URL, одновременно обретая уверенность в создании динамических и масштабируемых веб-приложений. Независимо от того, новичок ли вы в программировании или переходите с другого фреймворка, эта книга снабдит вас базовыми знаниями и навыками, которые помогут вам начать свой путь разработки Django.",
                                        'Français': "Apprendre Django en 24 heures pour les débutants de S. Basu est un guide essentiel pour les développeurs Web en herbe qui cherchent à maîtriser Django, un puissant framework Web basé sur Python, en un temps record. Ce livre complet est conçu pour les débutants, décomposant des concepts complexes en leçons faciles à suivre. Avec des exemples pratiques, des exercices pratiques et un plan structuré de 24 heures, il couvre tout, de la configuration de votre environnement au déploiement d'une application Web à part entière. Les lecteurs exploreront les principales fonctionnalités de Django, notamment les modèles, les vues, les modèles et le routage d'URL, tout en gagnant en confiance dans la création d'applications Web dynamiques et évolutives. Que vous soyez novice en programmation ou que vous veniez d'un autre framework, ce livre vous fournit les connaissances et les compétences de base pour démarrer votre parcours de développement Django.",
                                        '日本語': "S. Basu 著の「初心者向け 24 時間で学ぶ Django」は​​、強力な Python ベースの Web フレームワークである Django を記録的な速さで習得したい意欲的な Web 開発者にとって必須のガイドです。この包括的な書籍は初心者向けに作られており、複雑な概念をわかりやすいレッスンに分解しています。実用的な例、実践的な演習、構造化された 24 時間プランを使用して、環境の設定から本格的な Web アプリケーションの展開まですべてをカバーしています。読者は、モデル、ビュー、テンプレート、URL ルーティングなどの Django のコア機能を調べながら、動的でスケーラブルな Web アプリケーションを構築する自信を得ます。プログラミングの初心者でも、別のフレームワークから移行する場合でも、この本は Django 開発の旅を開始するための基礎知識とスキルを身に付けることができます。",
                                        '한국인': "초보자를 위한 24시간 Django 학습은 S. Basu가 쓴 책으로, 강력한 Python 기반 웹 프레임워크인 Django를 기록적인 시간 안에 마스터하려는 열망하는 웹 개발자를 위한 필수 가이드입니다. 이 포괄적인 책은 초보자를 위해 만들어졌으며, 복잡한 개념을 따라하기 쉬운 레슨으로 나눕니다. 실용적인 예제, 실습 연습, 체계적인 24시간 계획을 통해 환경 설정에서 본격적인 웹 애플리케이션 배포까지 모든 것을 다룹니다. 독자는 모델, 뷰, 템플릿, URL 라우팅을 포함한 Django의 핵심 기능을 탐색하면서 동적이고 확장 가능한 웹 애플리케이션을 구축하는 데 자신감을 얻습니다. 프로그래밍을 처음 접하든 다른 프레임워크에서 전환하든, 이 책은 Django 개발 여정을 시작하는 데 필요한 기본 지식과 기술을 제공합니다.",
                                        'Español': "Aprende Django en 24 horas para principiantes de S. Basu es una guía esencial para los desarrolladores web que aspiran a dominar Django, un potente marco de trabajo web basado en Python, en un tiempo récord. Este libro completo está diseñado para principiantes y desglosa conceptos complejos en lecciones fáciles de seguir. Con ejemplos prácticos, ejercicios prácticos y un plan estructurado de 24 horas, cubre todo, desde la configuración de su entorno hasta la implementación de una aplicación web completa. Los lectores explorarán las características principales de Django, incluidos los modelos, las vistas, las plantillas y el enrutamiento de URL, mientras ganan confianza en la creación de aplicaciones web dinámicas y escalables. Ya sea que sea nuevo en programación o esté haciendo la transición desde otro marco de trabajo, este libro lo equipa con los conocimientos y las habilidades fundamentales para comenzar su viaje de desarrollo con Django.",
                                        'हिंदी': "एस. बसु द्वारा लिखित शुरुआती लोगों के लिए 24 घंटे में Django सीखें, महत्वाकांक्षी वेब डेवलपर्स के लिए एक आवश्यक मार्गदर्शिका है, जो रिकॉर्ड समय में Django, एक शक्तिशाली पायथन-आधारित वेब फ्रेमवर्क में महारत हासिल करना चाहते हैं। यह व्यापक पुस्तक शुरुआती लोगों के लिए तैयार की गई है, जो जटिल अवधारणाओं को आसानी से समझने योग्य पाठों में विभाजित करती है। व्यावहारिक उदाहरणों, हाथों-हाथ अभ्यास और एक संरचित 24-घंटे की योजना के साथ, यह आपके पर्यावरण को सेट करने से लेकर एक पूर्ण-विकसित वेब एप्लिकेशन को तैनात करने तक सब कुछ कवर करता है। पाठक गतिशील और स्केलेबल वेब एप्लिकेशन बनाने में आत्मविश्वास हासिल करते हुए मॉडल, दृश्य, टेम्पलेट और URL रूटिंग सहित Django की मुख्य विशेषताओं का पता लगाएंगे। चाहे आप प्रोग्रामिंग में नए हों या किसी अन्य फ्रेमवर्क से संक्रमण कर रहे हों, यह पुस्तक आपको अपने Django विकास की यात्रा को किकस्टार्ट करने के लिए मूलभूत ज्ञान और कौशल से लैस करती है।",
                                        'Português': "Aprenda Django em 24 horas para principiantes, de S. Basu, é um guia essencial para aspirantes a web developers que desejam dominar o Django, uma poderosa framework web baseada em Python, em tempo recorde. Este livro abrangente é feito à medida para principiantes, dividindo conceitos complexos em lições fáceis de seguir. Com exemplos práticos, exercícios práticos e um plano estruturado de 24 horas, abrange tudo, desde a configuração do seu ambiente até à implementação de uma aplicação Web completa. Os leitores irão explorar as principais características do Django, incluindo modelos, visualizações, modelos e encaminhamento de URL, enquanto ganham confiança na construção de aplicações web dinâmicas e escaláveis. Quer seja novo na programação ou esteja em transição de outra framework, este livro fornece o conhecimento e as competências fundamentais para iniciar a sua jornada de desenvolvimento Django.",
                                        'বাংলা': "S. বসুর দ্বারা নতুনদের জন্য 24 ঘন্টার মধ্যে জ্যাঙ্গো শিখুন উচ্চাকাঙ্ক্ষী ওয়েব ডেভেলপারদের জন্য জ্যাঙ্গো, একটি শক্তিশালী পাইথন-ভিত্তিক ওয়েব ফ্রেমওয়ার্ক, রেকর্ড সময়ে আয়ত্ত করতে চাওয়া একটি অপরিহার্য নির্দেশিকা। এই বিস্তৃত বইটি নতুনদের জন্য তৈরি করা হয়েছে, জটিল ধারণাগুলিকে সহজে অনুসরণযোগ্য পাঠে ভেঙ্গে। ব্যবহারিক উদাহরণ, হ্যান্ড-অন ব্যায়াম, এবং একটি কাঠামোগত 24-ঘন্টা পরিকল্পনা সহ, এটি আপনার পরিবেশ স্থাপন থেকে শুরু করে একটি পূর্ণাঙ্গ ওয়েব অ্যাপ্লিকেশন স্থাপন পর্যন্ত সমস্ত কিছুকে কভার করে। পাঠকরা ডাইনামিক এবং স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরিতে আত্মবিশ্বাস অর্জনের সাথে সাথে মডেল, ভিউ, টেমপ্লেট এবং URL রাউটিং সহ জ্যাঙ্গোর মূল বৈশিষ্ট্যগুলি অন্বেষণ করবে। আপনি প্রোগ্রামিংয়ে নতুন হোন বা অন্য ফ্রেমওয়ার্ক থেকে ট্রানজিশন করুন না কেন, এই বইটি আপনাকে আপনার জ্যাঙ্গো বিকাশের যাত্রা শুরু করার জন্য মৌলিক জ্ঞান এবং দক্ষতা দিয়ে সজ্জিত করে।",
                                        'عَرَبِيّ': "يعد كتاب Learn Django in 24 Hours for Beginners من تأليف S. Basu دليلاً أساسيًا لمطوري الويب الطموحين الذين يتطلعون إلى إتقان Django، وهو إطار عمل قوي للويب قائم على Python، في وقت قياسي. تم تصميم هذا الكتاب الشامل للمبتدئين، حيث يقسم المفاهيم المعقدة إلى دروس سهلة المتابعة. من خلال الأمثلة العملية والتمارين العملية وخطة منظمة مدتها 24 ساعة، يغطي كل شيء من إعداد بيئتك إلى نشر تطبيق ويب كامل. سيستكشف القراء الميزات الأساسية لـ Django، بما في ذلك النماذج والعروض والقوالب وتوجيه عناوين URL، مع اكتساب الثقة في بناء تطبيقات ويب ديناميكية وقابلة للتطوير. سواء كنت جديدًا في البرمجة أو تنتقل من إطار عمل آخر، فإن هذا الكتاب يزودك بالمعرفة والمهارات الأساسية لبدء رحلة تطوير Django.",
                                        'فارسی': "آموزش جنگو در 24 ساعت برای مبتدیان توسط S. Basu یک راهنمای ضروری برای توسعه دهندگان وب مشتاقی است که به دنبال تسلط بر جنگو، یک چارچوب وب قدرتمند مبتنی بر پایتون، در زمان بی سابقه هستند. این کتاب جامع برای مبتدیان طراحی شده است و مفاهیم پیچیده را به درس های آسان برای دنبال کردن تقسیم می کند. با مثال‌های عملی، تمرین‌های عملی، و یک برنامه 24 ساعته ساختاریافته، همه چیز را از راه‌اندازی محیط شما تا استقرار یک برنامه وب کامل را پوشش می‌دهد. خوانندگان ویژگی‌های اصلی جنگو، از جمله مدل‌ها، نماها، قالب‌ها و مسیریابی URL را بررسی می‌کنند، در حالی که در ساخت برنامه‌های وب پویا و مقیاس‌پذیر اعتماد به نفس پیدا می‌کنند. چه در برنامه نویسی تازه کار باشید و چه در حال انتقال از چارچوب دیگری باشید، این کتاب شما را با دانش و مهارت های اساسی برای شروع سفر توسعه جنگو خود مجهز می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/1 - Learn Django in 24 hours for beginners.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/1%20-%20Learn%20Django%20in%2024%20hours%20for%20beginners.md",
                                },
                        },
                        // -- > C# + 1 : Modern Cross-Platform Development Fundamentals
                        {
                                "title": {
                                        'English': "C# 12 and .NET 8",
                                        'Deutsch': "C# 12 and .NET 8",
                                        '中国人': "C# 12 and .NET 8",
                                        'Русский': "C# 12 and .NET 8",
                                        'Français': "C# 12 and .NET 8",
                                        '日本語': "C# 12 and .NET 8",
                                        '한국인': "C# 12 and .NET 8",
                                        'Español': "C# 12 and .NET 8",
                                        'हिंदी': "C# 12 and .NET 8",
                                        'Português': "C# 12 and .NET 8",
                                        'বাংলা': "C# 12 and .NET 8",
                                        'عَرَبِيّ': "C# 12 and .NET 8",
                                        'فارسی': "C# 12 and .NET 8",
                                },
                                "description": {
                                        'English': "C# 12 and .NET 8: Modern Cross-Platform Development Fundamentals by Mark J. Price is a comprehensive guide to the latest features and capabilities of C# and .NET, aimed at developers looking to master modern, cross-platform development. The book covers a wide range of topics, from the basics of C# programming to advanced concepts in .NET 8, providing readers with practical knowledge for building high-performance, scalable applications. Price emphasizes real-world examples and hands-on projects, helping developers understand how to leverage C# 12 and .NET 8 for developing applications across different platforms, including Windows, macOS, and Linux. With clear explanations and practical advice, this book is an excellent resource for developers eager to stay up-to-date with the latest advancements in the .NET ecosystem.",
                                        'Deutsch': "C# 12 und .NET 8: Moderne plattformübergreifende Grundlagen von Mark J. Price ist ein umfassender Leitfaden für die neuesten Funktionen und Funktionen von C# und .NET, die sich an Entwickler abzielen, die die moderne plattformübergreifende Entwicklung beherrschen möchten. Das Buch deckt eine breite Palette von Themen ab, von den Grundlagen der C# -Programmierung bis hin zu fortgeschrittenen Konzepten in .NET 8, die den Lesern praktische Kenntnisse für den Aufbau leistungsstarker und skalierbarer Anwendungen vermitteln. Price betont Beispiele in realer Welt und praktische Projekte und hilft Entwicklern, zu verstehen, wie sie C# 12 und .NET 8 für die Entwicklung von Anwendungen auf verschiedenen Plattformen, einschließlich Windows, MacOS und Linux, nutzen können. Mit klaren Erklärungen und praktischen Ratschlägen ist dieses Buch eine hervorragende Ressource für Entwickler, die mit den neuesten Fortschritten im .NET-Ökosystem auf dem Laufenden bleiben möchten.",
                                        '中国人': "C＃12和.NET 8：Mark J. Price的现代跨平台开发基础知识是C＃和.NET的最新功能的综合指南，旨在寻求掌握现代，跨平台开发的开发人员。该书涵盖了广泛的主题，从C＃编程的基础到.NET 8中的高级概念，为读者提供了用于构建高性能，可扩展应用程序的实用知识。普莱斯强调了现实世界的示例和动手项目，帮助开发人员了解如何利用C＃12和.NET 8用于开发跨不同平台的应用程序，包括Windows，MacOS和Linux。有了明确的解释和实用建议，这本书是开发人员渴望与.NET生态系统中最新进步保持最新进展的绝佳资源。",
                                        'Русский': "C# 12 и .NET 8: Современные кроссплатформенные основы развития Марка Дж. Прайс-это всеобъемлющее руководство по последним функциям и возможностям C# и .NET, направленного на то, что разработчики стремятся освоить современное кроссплатформенное развитие. Книга охватывает широкий спектр тем, от оснований программирования C# до расширенных концепций в .net 8, предоставляя читателям практические знания для создания высокопроизводительных, масштабируемых приложений. Прайс подчеркивает реальные примеры и практические проекты, помогая разработчикам понять, как использовать C# 12 и .net 8 для разработки приложений на разных платформах, включая Windows, MacOS и Linux. С четкими объяснениями и практическими советами эта книга является отличным ресурсом для разработчиков, стремящихся быть в курсе последних достижений в экосистеме .NET.",
                                        'Français': "C # 12 et .NET 8: Fondamentaux modernes de développement multiplateforme par Mark J. Price est un guide complet des dernières fonctionnalités et capacités de C # et .NET, destinées aux développeurs qui cherchent à maîtriser le développement moderne et multiplateforme. Le livre couvre un large éventail de sujets, des bases de la programmation C # aux concepts avancés dans .NET 8, offrant aux lecteurs des connaissances pratiques pour construire des applications évolutives et évolutives. Le prix met l'accent sur des exemples réels et des projets pratiques, aidant les développeurs à comprendre comment exploiter C # 12 et .NET 8 pour développer des applications sur différentes plates-formes, notamment Windows, MacOS et Linux. Avec des explications claires et des conseils pratiques, ce livre est une excellente ressource pour les développeurs désireux de rester à jour avec les dernières avancées de l'écosystème .NET.",
                                        '日本語': "C＃12および.NET 8：Mark J.の近代的なクロスプラットフォーム開発の基礎は、C＃と.NETの最新の機能と機能に関する包括的なガイドであり、現代のクロスプラットフォーム開発を習得しようとする開発者を目的としています。この本は、C＃プログラミングの基本から.NET 8の高度な概念まで、幅広いトピックをカバーしており、読者に高性能のスケーラブルなアプリケーションを構築するための実用的な知識を提供します。 Priceは、現実世界の例と実践的なプロジェクトを強調し、開発者がWindows、MacOS、Linuxなどのさまざまなプラットフォームでアプリケーションを開発するためにC＃12と.NET 8を活用する方法を理解するのに役立ちます。明確な説明と実践的なアドバイスを備えたこの本は、.NETエコシステムの最新の進歩を最新の状態に保ちたい開発者にとって優れたリソースです。",
                                        '한국인': "C# 12 및 .NET 8 : Mark J. Price의 Modern Cross-Platform Development Fundentals는 C# 및 .NET의 최신 기능과 기능에 대한 포괄적 인 가이드로, 현대적인 크로스 플랫폼 개발을 마스터하려는 개발자를 목표로합니다. 이 책은 C# 프로그래밍의 기본 사항부터 .NET 8의 고급 개념에 이르기까지 광범위한 주제를 다루며 독자들에게 고성능, 확장 가능한 응용 프로그램을 구축하기위한 실용적인 지식을 제공합니다. Price는 실제 예제 및 실습 프로젝트를 강조하여 개발자가 Windows, MacOS 및 Linux를 포함한 다양한 플랫폼에서 응용 프로그램을 개발하기 위해 C# 12 및 .NET 8을 활용하는 방법을 이해하도록 돕습니다. 명확한 설명과 실용적인 조언을 통해이 책은 개발자가 .NET 생태계의 최신 발전을 최신 상태로 유지하기를 열망하는 훌륭한 자료입니다.",
                                        'Español': "C# 12 y .NET 8: Fundamentos modernos de desarrollo multiplataforma por Mark J. Price es una guía completa de las últimas características y capacidades de C# y .NET, dirigidos a desarrolladores que buscan dominar el desarrollo moderno y multiplataforma. El libro cubre una amplia gama de temas, desde los conceptos básicos de la programación de C# hasta los conceptos avanzados en .NET 8, proporcionando a los lectores conocimiento práctico para construir aplicaciones escalables de alto rendimiento. Price enfatiza los ejemplos del mundo real y los proyectos prácticos, lo que ayuda a los desarrolladores a comprender cómo aprovechar C# 12 y .NET 8 para desarrollar aplicaciones en diferentes plataformas, incluidas Windows, MacOS y Linux. Con explicaciones claras y consejos prácticos, este libro es un excelente recurso para los desarrolladores ansiosos por mantenerse al día con los últimos avances en el ecosistema .NET.",
                                        'हिंदी': "C# 12 और .NET 8: Mark J. Price द्वारा आधुनिक क्रॉस-प्लेटफॉर्म डेवलपमेंट फंडामेंटल C# और .NET की नवीनतम विशेषताओं और क्षमताओं के लिए एक व्यापक मार्गदर्शिका है, जिसका उद्देश्य डेवलपर्स को आधुनिक, क्रॉस-प्लेटफॉर्म विकास में मास्टर करना है। पुस्तक में विषयों की एक विस्तृत श्रृंखला शामिल है, सी# प्रोग्रामिंग की मूल बातों से लेकर .NET 8 में उन्नत अवधारणाओं तक, पाठकों को उच्च प्रदर्शन, स्केलेबल अनुप्रयोगों के निर्माण के लिए व्यावहारिक ज्ञान प्रदान करता है। मूल्य वास्तविक दुनिया के उदाहरणों और हाथों पर परियोजनाओं पर जोर देता है, जिससे डेवलपर्स को यह समझने में मदद मिलती है कि विंडोज, मैकओएस और लिनक्स सहित विभिन्न प्लेटफार्मों में अनुप्रयोगों को विकसित करने के लिए सी# 12 और .NET 8 का लाभ कैसे उठाया जाए। स्पष्ट स्पष्टीकरण और व्यावहारिक सलाह के साथ, यह पुस्तक .NET इकोसिस्टम में नवीनतम प्रगति के साथ अप-टू-डेट रहने के लिए उत्सुक डेवलपर्स के लिए एक उत्कृष्ट संसाधन है।",
                                        'Português': "C# 12 e .NET 8: Fundamentos modernos de desenvolvimento de plataformas cruzadas de Mark J. Price é um guia abrangente para os recursos e capacidades mais recentes de C# e .NET, destinados a desenvolvedores que desejam dominar o desenvolvimento moderno e entre plataformas. O livro aborda uma ampla gama de tópicos, desde o básico da programação C# até os conceitos avançados no .NET 8, fornecendo aos leitores conhecimentos práticos para a construção de aplicações escaláveis ​​e de alto desempenho. Price enfatiza exemplos do mundo real e projetos práticos, ajudando os desenvolvedores a entender como aproveitar C# 12 e .NET 8 para desenvolver aplicativos em diferentes plataformas, incluindo Windows, MacOS e Linux. Com explicações claras e conselhos práticos, este livro é um excelente recurso para os desenvolvedores ansiosos para se manter atualizado com os últimos avanços no ecossistema .NET.",
                                        'বাংলা': "সি# 12 এবং। নেট 8: মার্ক জে প্রাইস দ্বারা মডার্ন ক্রস-প্ল্যাটফর্ম বিকাশের মূলসূত্রগুলি সি# এবং। নেট এর সর্বশেষ বৈশিষ্ট্য এবং দক্ষতার জন্য একটি বিস্তৃত গাইড, যা আধুনিক, ক্রস-প্ল্যাটফর্ম বিকাশের জন্য দক্ষ বিকাশকারীদের লক্ষ্য করে। বইটিতে সি# প্রোগ্রামিংয়ের মূল বিষয়গুলি থেকে শুরু করে। নেট 8-এ উন্নত ধারণাগুলি পর্যন্ত বিস্তৃত বিষয় রয়েছে, পাঠকদের উচ্চ-পারফরম্যান্স, স্কেলযোগ্য অ্যাপ্লিকেশনগুলি তৈরির জন্য ব্যবহারিক জ্ঞান সরবরাহ করে। মূল্য বাস্তব-বিশ্বের উদাহরণ এবং হ্যান্ড-অন প্রকল্পগুলিতে জোর দেয়, বিকাশকারীদের কীভাবে উইন্ডোজ, ম্যাকোস এবং লিনাক্স সহ বিভিন্ন প্ল্যাটফর্ম জুড়ে অ্যাপ্লিকেশন বিকাশের জন্য সি# 12 এবং .NET 8 লাভ করতে পারে তা বুঝতে সহায়তা করে। স্পষ্ট ব্যাখ্যা এবং ব্যবহারিক পরামর্শ সহ, এই বইটি। নেট ইকোসিস্টেমের সর্বশেষ অগ্রগতির সাথে আপ-টু-ডেট থাকার জন্য আগ্রহী বিকাশকারীদের জন্য একটি দুর্দান্ত উত্স।",
                                        'عَرَبِيّ': "C# 12 و .NET 8: تعتبر أساسيات تطوير المنصة الحديثة من Mark J. Price دليلًا شاملاً لأحدث الميزات والقدرات لـ C# و .NET ، التي تهدف إلى المطورين الذين يتطلعون إلى إتقان تطوير المنصات الحديثة. يغطي الكتاب مجموعة واسعة من الموضوعات ، من أساسيات البرمجة C# إلى المفاهيم المتقدمة في .NET 8 ، مما يوفر للقراء معرفة عملية لبناء تطبيقات عالية الأداء وقابلة للتطوير. يؤكد Price على الأمثلة في العالم الحقيقي والمشاريع العملية ، مما يساعد المطورين على فهم كيفية الاستفادة من C# 12 و .NET 8 لتطوير التطبيقات عبر منصات مختلفة ، بما في ذلك Windows و MacOS و Linux. من خلال تفسيرات واضحة ونصائح عملية ، يعد هذا الكتاب موردًا ممتازًا للمطورين الذين يتوقون إلى البقاء على اطلاع مع أحدث التطورات في النظام البيئي .NET.",
                                        'فارسی': "C# 12 و .NET 8: اصول توسعه مدرن متقاطع متقاطع توسط Mark J. Price یک راهنمای جامع برای آخرین ویژگی ها و قابلیت های C# و .NET است که با هدف توسعه دهندگان به دنبال تسلط بر توسعه مدرن و متقاطع است. این کتاب طیف گسترده ای از مباحث را شامل می شود ، از مبانی برنامه نویسی C# گرفته تا مفاهیم پیشرفته در .NET 8 ، و دانش عملی را برای ایجاد برنامه های با کارایی بالا و مقیاس پذیر در اختیار خوانندگان قرار می دهد. قیمت بر نمونه های دنیای واقعی و پروژه های دستی تأکید می کند و به توسعه دهندگان کمک می کند تا نحوه استفاده از C# 12 و .NET 8 را برای توسعه برنامه ها در سیستم عامل های مختلف از جمله ویندوز ، MacOS و Linux کمک کنند. این کتاب با توضیحات واضح و مشاوره عملی ، یک منبع عالی برای توسعه دهندگان است که مشتاق به روز ماندن با آخرین پیشرفت های موجود در اکوسیستم دات نت هستند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/1 - 2 - CSharp 12 and DotNet 8.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/1%20-%202%20-%20CSharp%2012%20and%20DotNet%208.md",
                                },
                        },
                        // -- > C# : Visual C# How to Program
                        {
                                "title": {
                                        'English': "Visual C# How to Program",
                                        'Deutsch': "Visual C# How to Program",
                                        '中国人': "Visual C# How to Program",
                                        'Русский': "Visual C# How to Program",
                                        'Français': "Visual C# How to Program",
                                        '日本語': "Visual C# How to Program",
                                        '한국인': "Visual C# How to Program",
                                        'Español': "Visual C# How to Program",
                                        'हिंदी': "Visual C# How to Program",
                                        'Português': "Visual C# How to Program",
                                        'বাংলা': "Visual C# How to Program",
                                        'عَرَبِيّ': "Visual C# How to Program",
                                        'فارسی': "Visual C# How to Program",
                                },
                                "description": {
                                        'English': "Visual C# How to Program by Paul Deitel and Harvey Deitel is a comprehensive guide to learning and mastering C# programming within the context of the .NET framework. Written by renowned educators and authors, the book combines detailed explanations with practical examples, making it an excellent resource for beginners and experienced programmers alike. It covers a wide range of topics, from the fundamentals of C# syntax and object-oriented programming to advanced concepts like LINQ, asynchronous programming, and Windows Forms. With its emphasis on real-world applications and problem-solving, the book equips readers with the skills needed to build robust and efficient software solutions. The Deitels' signature live-code approach, featuring clear annotations and step-by-step coding demonstrations, ensures a thorough understanding of each concept.",
                                        'Deutsch': "„Visual C# How to Program“ von Paul Deitel und Harvey Deitel ist ein umfassender Leitfaden zum Erlernen und Meistern der C#-Programmierung im Kontext des .NET-Frameworks. Das von renommierten Pädagogen und Autoren verfasste Buch kombiniert detaillierte Erklärungen mit praktischen Beispielen und ist damit eine hervorragende Ressource für Anfänger und erfahrene Programmierer gleichermaßen. Es deckt ein breites Themenspektrum ab, von den Grundlagen der C#-Syntax und objektorientierten Programmierung bis hin zu fortgeschrittenen Konzepten wie LINQ, asynchroner Programmierung und Windows Forms. Mit seinem Schwerpunkt auf realen Anwendungen und Problemlösungen vermittelt das Buch den Lesern die Fähigkeiten, die zum Erstellen robuster und effizienter Softwarelösungen erforderlich sind. Der für die Deitels typische Live-Code-Ansatz mit klaren Anmerkungen und schrittweisen Codierdemonstrationen gewährleistet ein gründliches Verständnis jedes Konzepts.",
                                        '中国人': "Paul Deitel 和 Harvey Deitel 合著的《Visual C# How to Program》是一本全面的指南，帮助您在 .NET 框架环境下学习和掌握 C# 编程。本书由知名教育家和作家撰写，将详细的解释与实际示例相结合，是初学者和经验丰富的程序员的绝佳资源。它涵盖了广泛的主题，从 C# 语法和面向对象编程的基础知识到 LINQ、异步编程和 Windows 窗体等高级概念。本书侧重于实际应用和问题解决，为读者提供构建强大而高效的软件解决方案所需的技能。Deitels 的标志性实时代码方法具有清晰的注释和分步编码演示，可确保读者彻底理解每个概念。",
                                        'Русский': "Visual C# How to Program Пола Дейтеля и Харви Дейтеля — это всеобъемлющее руководство по изучению и освоению программирования на C# в контексте .NET Framework. Написанная известными преподавателями и авторами, книга сочетает в себе подробные объяснения с практическими примерами, что делает ее прекрасным ресурсом как для начинающих, так и для опытных программистов. Она охватывает широкий спектр тем: от основ синтаксиса C# и объектно-ориентированного программирования до продвинутых концепций, таких как LINQ, асинхронное программирование и Windows Forms. С акцентом на реальных приложениях и решении проблем книга вооружает читателей навыками, необходимыми для создания надежных и эффективных программных решений. Фирменный подход Дейтеля к живому коду, включающий понятные аннотации и пошаговые демонстрации кодирования, обеспечивает полное понимание каждой концепции.",
                                        'Français': "Visual C# How to Program de Paul Deitel et Harvey Deitel est un guide complet pour apprendre et maîtriser la programmation C# dans le contexte du framework .NET. Écrit par des éducateurs et des auteurs renommés, le livre combine des explications détaillées avec des exemples pratiques, ce qui en fait une excellente ressource pour les débutants comme pour les programmeurs expérimentés. Il couvre un large éventail de sujets, des fondamentaux de la syntaxe C# et de la programmation orientée objet aux concepts avancés comme LINQ, la programmation asynchrone et Windows Forms. En mettant l'accent sur les applications du monde réel et la résolution de problèmes, le livre fournit aux lecteurs les compétences nécessaires pour créer des solutions logicielles robustes et efficaces. L'approche de code en direct caractéristique des Deitel, avec des annotations claires et des démonstrations de codage étape par étape, garantit une compréhension approfondie de chaque concept.",
                                        '日本語': "Paul Deitel と Harvey Deitel による Visual C# How to Program は、.NET フレームワークのコンテキスト内で C# プログラミングを学習し、習得するための総合的なガイドです。著名な教育者と著者によって書かれたこの本は、詳細な説明と実用的な例を組み合わせており、初心者にも経験豊富なプログラマーにも優れたリソースとなっています。C# 構文とオブジェクト指向プログラミングの基礎から、LINQ、非同期プログラミング、Windows フォームなどの高度な概念まで、幅広いトピックをカバーしています。実際のアプリケーションと問題解決に重点を置いているこの本は、堅牢で効率的なソフトウェア ソリューションを構築するために必要なスキルを読者に提供します。Deitel 夫妻の特色であるライブ コード アプローチは、明確な注釈と段階的なコーディング デモンストレーションを特徴としており、各概念を完全に理解できます。",
                                        '한국인': "Paul Deitel과 Harvey Deitel이 쓴 Visual C# How to Program은 .NET 프레임워크 내에서 C# 프로그래밍을 배우고 익히는 데 대한 포괄적인 가이드입니다. 유명한 교육자와 저자가 쓴 이 책은 자세한 설명과 실제적인 예를 결합하여 초보자와 숙련된 프로그래머 모두에게 훌륭한 자료가 됩니다. C# 구문과 객체 지향 프로그래밍의 기본부터 LINQ, 비동기 프로그래밍, Windows Forms와 같은 고급 개념에 이르기까지 광범위한 주제를 다룹니다. 실제 애플리케이션과 문제 해결에 중점을 둔 이 책은 독자에게 견고하고 효율적인 소프트웨어 솔루션을 구축하는 데 필요한 기술을 제공합니다. 명확한 주석과 단계별 코딩 데모를 특징으로 하는 Deitels의 고유한 라이브 코드 접근 방식은 각 개념에 대한 철저한 이해를 보장합니다.",
                                        'Español': "Visual C# How to Program de Paul Deitel y Harvey Deitel es una guía completa para aprender y dominar la programación en C# dentro del contexto del marco .NET. Escrito por reconocidos educadores y autores, el libro combina explicaciones detalladas con ejemplos prácticos, lo que lo convierte en un excelente recurso tanto para principiantes como para programadores experimentados. Abarca una amplia gama de temas, desde los fundamentos de la sintaxis de C# y la programación orientada a objetos hasta conceptos avanzados como LINQ, programación asincrónica y Windows Forms. Con su énfasis en las aplicaciones del mundo real y la resolución de problemas, el libro proporciona a los lectores las habilidades necesarias para crear soluciones de software robustas y eficientes. El enfoque de código en vivo característico de los Deitel, que incluye anotaciones claras y demostraciones de codificación paso a paso, garantiza una comprensión completa de cada concepto.",
                                        'हिंदी': "पॉल डीटेल और हार्वे डीटेल द्वारा लिखित विजुअल C# हाउ टू प्रोग्राम .NET फ्रेमवर्क के संदर्भ में C# प्रोग्रामिंग सीखने और उसमें महारत हासिल करने के लिए एक व्यापक मार्गदर्शिका है। प्रसिद्ध शिक्षकों और लेखकों द्वारा लिखित, पुस्तक व्यावहारिक उदाहरणों के साथ विस्तृत व्याख्याओं को जोड़ती है, जो इसे शुरुआती और अनुभवी प्रोग्रामर दोनों के लिए एक उत्कृष्ट संसाधन बनाती है। यह C# सिंटैक्स और ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग के मूल सिद्धांतों से लेकर LINQ, एसिंक्रोनस प्रोग्रामिंग और विंडोज फॉर्म जैसी उन्नत अवधारणाओं तक कई विषयों को कवर करता है। वास्तविक दुनिया के अनुप्रयोगों और समस्या-समाधान पर अपने जोर के साथ, पुस्तक पाठकों को मजबूत और कुशल सॉफ़्टवेयर समाधान बनाने के लिए आवश्यक कौशल से लैस करती है। डीटेल्स का सिग्नेचर लाइव-कोड दृष्टिकोण, जिसमें स्पष्ट एनोटेशन और चरण-दर-चरण कोडिंग प्रदर्शन शामिल हैं, प्रत्येक अवधारणा की पूरी समझ सुनिश्चित करता है।",
                                        'Português': "Visual C# How to Program, de Paul Deitel e Harvey Deitel, é um guia abrangente para aprender e dominar a programação C# no contexto da estrutura .NET. Escrito por educadores e autores de renome, o livro combina explicações detalhadas com exemplos práticos, sendo um excelente recurso tanto para principiantes como para programadores experientes. Abrange uma grande variedade de tópicos, desde os fundamentos da sintaxe C# e da programação orientada a objetos até conceitos avançados como LINQ, programação assíncrona e Windows Forms. Com ênfase nas aplicações do mundo real e na resolução de problemas, o livro equipa os leitores com as competências necessárias para construir soluções de software robustas e eficientes. A abordagem de código ao vivo exclusiva da Deitels, com anotações claras e demonstrações de codificação passo a passo, garante uma compreensão completa de cada conceito.",
                                        'বাংলা': "পল ডিটেল এবং হার্ভে ডিটেল দ্বারা ভিজ্যুয়াল C# কীভাবে প্রোগ্রাম করবেন .NET ফ্রেমওয়ার্কের প্রেক্ষাপটে সি# প্রোগ্রামিং শেখার এবং আয়ত্ত করার জন্য একটি ব্যাপক নির্দেশিকা। বিখ্যাত শিক্ষাবিদ এবং লেখকদের দ্বারা লিখিত, বইটি ব্যবহারিক উদাহরণের সাথে বিশদ ব্যাখ্যাগুলিকে একত্রিত করে, এটিকে নতুনদের এবং অভিজ্ঞ প্রোগ্রামারদের জন্য একইভাবে একটি চমৎকার সম্পদ করে তোলে। এটি C# সিনট্যাক্স এবং অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং এর মৌলিক বিষয় থেকে শুরু করে LINQ, অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং এবং উইন্ডোজ ফর্মের মত উন্নত ধারণা পর্যন্ত বিস্তৃত বিষয় কভার করে। বাস্তব-বিশ্বের অ্যাপ্লিকেশন এবং সমস্যা সমাধানের উপর জোর দিয়ে, বইটি পাঠকদেরকে শক্তিশালী এবং দক্ষ সফ্টওয়্যার সমাধান তৈরি করার জন্য প্রয়োজনীয় দক্ষতার সাথে সজ্জিত করে। Deitels এর স্বাক্ষর লাইভ-কোড পদ্ধতি, স্পষ্ট টীকা এবং ধাপে ধাপে কোডিং প্রদর্শন সমন্বিত, প্রতিটি ধারণার একটি পুঙ্খানুপুঙ্খ বোঝা নিশ্চিত করে।",
                                        'عَرَبِيّ': "يعد كتاب Visual C# How to Programming من تأليف بول ديتل وهارفي ديتل دليلاً شاملاً لتعلم وإتقان برمجة C# في سياق إطار عمل .NET. يجمع الكتاب، الذي كتبه مدرسون ومؤلفون مشهورون، بين التفسيرات التفصيلية والأمثلة العملية، مما يجعله موردًا ممتازًا للمبتدئين والمبرمجين ذوي الخبرة على حد سواء. ويغطي الكتاب مجموعة واسعة من المواضيع، من أساسيات بناء جملة C# والبرمجة الموجهة للكائنات إلى المفاهيم المتقدمة مثل LINQ والبرمجة غير المتزامنة ونماذج Windows. مع التركيز على التطبيقات الواقعية وحل المشكلات، يزود الكتاب القراء بالمهارات اللازمة لبناء حلول برمجية قوية وفعالة. يضمن نهج Deitels المميز في البرمجة المباشرة، والذي يتميز بتعليقات توضيحية واضحة وعروض توضيحية للترميز خطوة بخطوة، فهمًا شاملاً لكل مفهوم.",
                                        'فارسی': "Visual C# How to Program by Paul Deitel و Harvey Deitel یک راهنمای جامع برای یادگیری و تسلط بر برنامه نویسی C# در چارچوب دات نت است. این کتاب که توسط مربیان و نویسندگان مشهور نوشته شده است، توضیحات مفصل را با مثال های عملی ترکیب می کند و آن را به یک منبع عالی برای مبتدیان و برنامه نویسان با تجربه تبدیل می کند. این گستره وسیعی از موضوعات را پوشش می‌دهد، از اصول سی شارپ و برنامه‌نویسی شی‌گرا گرفته تا مفاهیم پیشرفته‌ای مانند LINQ، برنامه‌نویسی ناهمزمان، و فرم‌های ویندوز. این کتاب با تاکید بر برنامه های کاربردی در دنیای واقعی و حل مسئله، خوانندگان را با مهارت های مورد نیاز برای ساخت راه حل های نرم افزاری قوی و کارآمد مجهز می کند. رویکرد کد زنده امضای Deitels، دارای حاشیه نویسی واضح و نمایش کدگذاری گام به گام، درک کامل هر مفهوم را تضمین می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/1 - 1 - Visual C Sharp How to Program.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/1%20-%201%20-%20Visual%20C%20Sharp%20How%20to%20Program.md",
                                },
                        },
                        // -- > C# - 1 : Heat First C#
                        {
                                "title": {
                                        'English': "Head First C#",
                                        'Deutsch': "Head First C#",
                                        '中国人': "Head First C#",
                                        'Русский': "Head First C#",
                                        'Français': "Head First C#",
                                        '日本語': "Head First C#",
                                        '한국인': "Head First C#",
                                        'Español': "Head First C#",
                                        'हिंदी': "Head First C#",
                                        'Português': "Head First C#",
                                        'বাংলা': "Head First C#",
                                        'عَرَبِيّ': "Head First C#",
                                        'فارسی': "Head First C#",
                                },
                                "description": {
                                        'English': "Head First C# by Andrew Stellman and Jennifer Greene is an engaging and interactive guide designed to teach C# programming to beginners and intermediate developers. Using the unique Head First approach, the book presents concepts in a visually rich and highly engaging manner, incorporating puzzles, quizzes, and real-world examples to reinforce learning. The authors cover the fundamentals of C#, including object-oriented programming, the .NET framework, and creating graphical user interfaces, all while emphasizing hands-on projects that encourage practical application. With its conversational tone and focus on making learning fun and accessible, Head First C# is a great choice for anyone looking to build a solid foundation in C# programming in an easy-to-understand, yet comprehensive way.",
                                        'Deutsch': "Head First C# von Andrew Stellman und Jennifer Greene ist ein ansprechendes und interaktives Leitfaden, um Anfängern und Zwischenentwicklern C# -Programme beizubringen. Mit dem einzigartigen Head First-Ansatz präsentiert das Buch Konzepte visuell reichhaltig und sehr ansprechend und enthält Rätsel, Test- und reale Beispiele, um das Lernen zu verstärken. Die Autoren behandeln die Grundlagen von C#, einschließlich objektorientierter Programmierung, dem .NET-Framework, und erstellen grafische Benutzeroberflächen und betonen gleichzeitig praktische Projekte, die die praktische Anwendung fördern. Head First C# ist mit seinem Gesprächston und dem Fokus auf das Lernen unterhaltsam und zugänglich. Es ist eine gute Wahl für alle, die eine solide Grundlage für C# -Programme auf leicht verständliche und dennoch umfassende Weise aufbauen möchten.",
                                        '中国人': "首先是安德鲁·斯特尔曼（Andrew Stellman）和詹妮弗·格林（Jennifer Greene）的首位C＃，是一项引人入胜且互动的指南，旨在向初学者和中级开发人员教授C＃编程。本书使用独特的首先方法，以视觉上丰富且高度吸引人的方式介绍了概念，并结合了难题，测验和现实世界中的例子，以加强学习。作者涵盖了C＃的基础知识，包括面向对象的编程，.NET框架和创建图形用户界面，同时强调鼓励实际应用的动手项目。 Head First C＃凭借其对话的语气并专注于使学习变得有趣和易于访问，对于希望以一种易于理解但全面的方式在C＃编程中建立坚实基础的人来说，这是一个不错的选择。",
                                        'Русский': "Head First C# Эндрю Стеллман и Дженнифер Грин - это привлекательное и интерактивное руководство, предназначенное для обучения программированию C# начинающим и промежуточным разработчикам. Используя уникальный подход «Первый голов», книга представляет концепции визуально богатым и очень увлекательным образом, включая головоломки, викторины и реальные примеры для усиления обучения. Авторы охватывают основы C#, включая объектно-ориентированное программирование, фреймворк .NET и создание графических пользовательских интерфейсов, при этом подчеркивая практические проекты, которые поощряют практическое применение. Благодаря своему разговорному тону и сосредоточенности на том, чтобы сделать обучение веселым и доступным, Head First C#-отличный выбор для тех, кто хочет создать прочную основу в программировании C# в простом для понимании, но все же всестороннее.",
                                        'Français': "Head First C # par Andrew Stellman et Jennifer Greene est un guide engageant et interactif conçu pour enseigner la programmation C # aux débutants et aux développeurs intermédiaires. En utilisant l'approche unique de tête de tête, le livre présente des concepts d'une manière visuellement riche et très engageante, incorporant des puzzles, des quiz et des exemples du monde réel pour renforcer l'apprentissage. Les auteurs couvrent les principes fondamentaux de C #, y compris la programmation orientée objet, le .NET Framework et la création d'interfaces utilisateur graphiques, tout en mettant l'accent sur des projets pratiques qui encouragent l'application pratique. Avec son ton conversationnel et son accent sur la création d'apprentissage amusante et accessible, Head First C # est un excellent choix pour tous ceux qui cherchent à construire une base solide en programmation C # d'une manière facile à comprendre mais complète.",
                                        '日本語': "Andrew StellmanとJennifer GreeneによるHead First C＃は、初心者や中級開発者にC＃プログラミングを教えるために設計された魅力的でインタラクティブなガイドです。ユニークなヘッドファーストアプローチを使用して、この本は視覚的に豊かで非常に魅力的な方法で概念を提示し、学習を強化するためのパズル、クイズ、実世界の例を取り入れています。著者は、オブジェクト指向のプログラミング、.NETフレームワーク、グラフィカルユーザーインターフェイスの作成を含むC＃の基本をカバーし、すべて実用的なアプリケーションを促進する実践的なプロジェクトを強調します。会話のトーンと、学習を楽しくアクセスしやすくすることに焦点を当てているHead First C＃は、C＃プログラミングの堅実な基盤を理解しやすく、しかし包括的な方法で構築しようとする人に最適です。",
                                        '한국인': "Andrew Stellman과 Jennifer Greene의 첫 번째 C# Head C#은 초보자 및 중급 개발자에게 C# 프로그래밍을 가르치기 위해 설계된 매력적이고 대화식 가이드입니다. 독특한 헤드 첫 번째 접근 방식을 사용 하여이 책은 수술, 퀴즈 및 실제 예제를 통합하여 학습을 강화하기 위해 시각적으로 풍부하고 매우 매력적인 방식으로 개념을 제공합니다. 저자는 객체 지향 프로그래밍, .NET 프레임 워크, 그래픽 사용자 인터페이스 작성을 포함하여 C#의 기본 사항을 다루면서 실용적인 응용 프로그램을 장려하는 실습 프로젝트를 강조합니다. 대화의 톤과 학습을 재미 있고 접근하기 쉽게 만드는 데 중점을 둔 Head First C#은 C# 프로그래밍에서 견고한 기초를 구축하려는 사람에게는 이해하기 쉽지만 포괄적 인 방식으로 훌륭한 선택입니다.",
                                        'Español': "La primera C# de Andrew Stellman y Jennifer Greene es una guía atractiva e interactiva diseñada para enseñar la programación de C# a principiantes y desarrolladores intermedios. Utilizando el enfoque único de Head First, el libro presenta conceptos de una manera visualmente rica y muy atractiva, incorporando rompecabezas, cuestionarios y ejemplos del mundo real para reforzar el aprendizaje. Los autores cubren los fundamentos de C#, incluida la programación orientada a objetos, el marco .NET y la creación de interfaces gráficas de usuarios, todo al tiempo que enfatiza proyectos prácticos que fomentan la aplicación práctica. Con su tono de conversación y su enfoque en hacer que el aprendizaje sea divertido y accesible, Head First C# es una excelente opción para cualquiera que busque construir una base sólida en la programación de C# de una manera fácil de entender pero completa.",
                                        'हिंदी': "एंड्रयू स्टेलमैन और जेनिफर ग्रीन द्वारा हेड फर्स्ट सी# एक आकर्षक और इंटरैक्टिव गाइड है जो शुरुआती और इंटरमीडिएट डेवलपर्स को सी# प्रोग्रामिंग सिखाने के लिए डिज़ाइन किया गया है। अद्वितीय सिर पहले दृष्टिकोण का उपयोग करते हुए, पुस्तक एक नेत्रहीन समृद्ध और अत्यधिक आकर्षक तरीके से अवधारणाओं को प्रस्तुत करती है, जिसमें पहेली, क्विज़ और वास्तविक दुनिया के उदाहरण शामिल हैं जो सीखने को सुदृढ़ करते हैं। लेखक C#के मूल सिद्धांतों को कवर करते हैं, जिसमें ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग, .NET फ्रेमवर्क, और ग्राफिकल यूजर इंटरफेस का निर्माण शामिल है, जो कि व्यावहारिक अनुप्रयोग को प्रोत्साहित करने वाली हैंड्स-ऑन प्रोजेक्ट्स पर जोर देते हैं। अपने संवादात्मक स्वर के साथ और सीखने को मज़ेदार और सुलभ बनाने पर ध्यान केंद्रित करें, हेड फर्स्ट सी# किसी के लिए एक शानदार विकल्प है जो सी# प्रोग्रामिंग में एक आसान-से-समझदार, अभी तक व्यापक तरीके से एक ठोस नींव का निर्माण करना चाहता है।",
                                        'Português': "Chefe primeiro C# de Andrew Stellman e Jennifer Greene é um guia envolvente e interativo projetado para ensinar a programação de C# para iniciantes e desenvolvedores intermediários. Usando a primeira abordagem de cabeça única, o livro apresenta conceitos de uma maneira visualmente rica e altamente envolvente, incorporando quebra-cabeças, testes e exemplos do mundo real para reforçar o aprendizado. Os autores cobrem os fundamentos do C#, incluindo programação orientada a objetos, a estrutura .NET e criação de interfaces gráficas de usuários, enquanto enfatiza projetos práticos que incentivam a aplicação prática. Com seu tom de conversação e foco em tornar o aprendizado divertido e acessível, o Head First C# é uma ótima opção para quem deseja construir uma base sólida na programação C# de uma maneira fácil de entender, mas abrangente.",
                                        'বাংলা': "অ্যান্ড্রু স্টেলম্যান এবং জেনিফার গ্রিনের প্রথম সি# হেড প্রথম সি# প্রোগ্রামিং শেখানোর জন্য ডিজাইন করা একটি আকর্ষক এবং ইন্টারেক্টিভ গাইড যা নতুন এবং মধ্যবর্তী বিকাশকারীদের। অনন্য হেড ফার্স্ট পদ্ধতির ব্যবহার করে, বইটি দৃশ্যত সমৃদ্ধ এবং অত্যন্ত আকর্ষক পদ্ধতিতে ধারণাগুলি উপস্থাপন করে, শিক্ষাকে শক্তিশালী করার জন্য ধাঁধা, কুইজ এবং বাস্তব-বিশ্বের উদাহরণগুলিকে অন্তর্ভুক্ত করে। লেখকরা অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং, .NET ফ্রেমওয়ার্ক এবং গ্রাফিকাল ইউজার ইন্টারফেস তৈরি সহ সি#এর মৌলিক বিষয়গুলি কভার করে, সমস্ত কিছু হ্যান্ড-অন প্রকল্পগুলি যা ব্যবহারিক প্রয়োগকে উত্সাহিত করে তা জোর দিয়ে। এর কথোপকথনের সুর এবং শেখার মজাদার এবং অ্যাক্সেসযোগ্য করার দিকে মনোনিবেশ করার সাথে, হেড ফার্স্ট সি# যে কেউ সি# প্রোগ্রামিংয়ে একটি সহজ ভিত্তি তৈরি করার জন্য একটি দৃ foundation ় ভিত্তি তৈরি করতে চাইছেন, তবুও বিস্তৃত উপায়ে।",
                                        'عَرَبِيّ': "رئيس أول C# من قبل Andrew Stellman و Jennifer Greene هو دليل جذاب وتفاعلي مصمم لتعليم البرمجة C# للمبتدئين والمطورين المتوسطين. باستخدام نهج الرأس الأول الفريد ، يقدم الكتاب مفاهيم بطريقة غنية وجذابة بصريًا ، ودمج الألغاز ، والمسابقات ، والأمثلة في العالم الحقيقي لتعزيز التعلم. يغطي المؤلفون أساسيات C#، بما في ذلك البرمجة الموجهة للكائنات ، وإطار .NET ، وإنشاء واجهات مستخدم رسومية ، مع التأكيد على المشاريع العملية التي تشجع التطبيق العملي. بفضل نغمة المحادثة والتركيز على جعل التعلم ممتعًا ويمكن الوصول إليه ، يعد Head First C# اختيارًا رائعًا لأي شخص يتطلع إلى بناء أساس متين في برمجة C# بطريقة سهلة الفهم ، ولكنها شاملة.",
                                        'فارسی': "Head First C# توسط اندرو استلمن و جنیفر گرین یک راهنمای جذاب و تعاملی است که برای آموزش برنامه نویسی C# برای مبتدیان و توسعه دهندگان متوسط ​​طراحی شده است. این کتاب با استفاده از رویکرد منحصر به فرد سر اول ، مفاهیم را به روشی بصری غنی و بسیار جذاب ارائه می دهد ، و شامل معماها ، آزمونها و نمونه های دنیای واقعی برای تقویت یادگیری است. نویسندگان اصول C#را پوشش می دهند ، از جمله برنامه نویسی شی گرا ، چارچوب .NET و ایجاد رابط های کاربر گرافیکی ، همه در حالی که بر پروژه های دستی تأکید می کنند که کاربرد عملی را تشویق می کنند. با لحن مکالمه و تمرکز خود در یادگیری سرگرم کننده و در دسترس ، Head First C# یک انتخاب عالی برای هر کسی است که به دنبال ساختن یک بنیاد محکم در برنامه نویسی C# به روشی آسان برای درک و در عین حال جامع است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/1 - 3 - Head First CSharp.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/1%20-%203%20-%20Head%20First%20CSharp.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/1%20-%203%20-%20Head%20First%20CSharp.md",
                                },
                        },
                        // -- > FLUTTER - 1 : Flutter Complete Reference Book
                        {
                                "title": {
                                        'English': "Flutter Complete Reference",
                                        'Deutsch': "Flutter Complete Reference",
                                        '中国人': "Flutter Complete Reference",
                                        'Русский': "Flutter Complete Reference",
                                        'Français': "Flutter Complete Reference",
                                        '日本語': "Flutter Complete Reference",
                                        '한국인': "Flutter Complete Reference",
                                        'Español': "Flutter Complete Reference",
                                        'हिंदी': "Flutter Complete Reference",
                                        'Português': "Flutter Complete Reference",
                                        'বাংলা': "Flutter Complete Reference",
                                        'عَرَبِيّ': "Flutter Complete Reference",
                                        'فارسی': "Flutter Complete Reference",
                                },
                                "description": {
                                        'English': "Flutter Complete Reference by Alberto Miola is a comprehensive guide for developers seeking to master Flutter, Google's open-source UI toolkit for crafting natively compiled applications. The book provides a deep dive into the fundamentals of Flutter, covering essential topics like widget architecture, state management, animations, and advanced techniques for creating responsive and high-performance apps. With practical examples and detailed explanations, it serves as both a beginner-friendly introduction and a valuable resource for experienced developers looking to refine their skills. Alberto Miola combines clarity with hands-on approaches, making it an indispensable reference for Flutter enthusiasts.",
                                        'Deutsch': "Flutter Complete Reference von Alberto Miola ist ein umfassender Leitfaden für Entwickler, die Flutter beherrschen möchten, Googles Open-Source-UI-Toolkit zum Erstellen nativ kompilierter Anwendungen. Das Buch bietet einen tiefen Einblick in die Grundlagen von Flutter und behandelt wichtige Themen wie Widget-Architektur, Statusverwaltung, Animationen und fortgeschrittene Techniken zum Erstellen reaktionsfähiger und leistungsstarker Apps. Mit praktischen Beispielen und detaillierten Erklärungen dient es sowohl als anfängerfreundliche Einführung als auch als wertvolle Ressource für erfahrene Entwickler, die ihre Fähigkeiten verfeinern möchten. Alberto Miola kombiniert Klarheit mit praktischen Ansätzen und macht es zu einem unverzichtbaren Nachschlagewerk für Flutter-Enthusiasten.",
                                        '中国人': "Alberto Miola 编写的《Flutter 完整参考》是一本全面的指南，适合希望掌握 Flutter 的开发人员，Flutter 是 Google 的开源 UI 工具包，用于制作原生编译的应用程序。本书深入探讨了 Flutter 的基础知识，涵盖了小部件架构、状态管理、动画和创建响应式高性能应用程序的高级技术等基本主题。通过实际示例和详细解释，它既是初学者友好的入门书，也是希望提高技能的经验丰富的开发人员的宝贵资源。Alberto Miola 将清晰度与实践方法相结合，使其成为 Flutter 爱好者不可或缺的参考资料。",
                                        'Русский': "Flutter Complete Reference Альберто Миолы — это всеобъемлющее руководство для разработчиков, стремящихся освоить Flutter, набор инструментов пользовательского интерфейса с открытым исходным кодом от Google для создания скомпилированных приложений. Книга предлагает глубокое погружение в основы Flutter, охватывая такие важные темы, как архитектура виджетов, управление состоянием, анимация и передовые методы создания адаптивных и высокопроизводительных приложений. С практическими примерами и подробными объяснениями она служит как введением для новичков, так и ценным ресурсом для опытных разработчиков, желающих усовершенствовать свои навыки. Альберто Миола сочетает ясность с практическими подходами, что делает ее незаменимым справочником для энтузиастов Flutter.",
                                        'Français': "Flutter Complete Reference d'Alberto Miola est un guide complet pour les développeurs qui cherchent à maîtriser Flutter, la boîte à outils d'interface utilisateur open source de Google pour la création d'applications compilées en mode natif. Le livre propose une plongée en profondeur dans les fondamentaux de Flutter, couvrant des sujets essentiels comme l'architecture des widgets, la gestion des états, les animations et les techniques avancées pour créer des applications réactives et performantes. Avec des exemples pratiques et des explications détaillées, il sert à la fois d'introduction conviviale pour les débutants et de ressource précieuse pour les développeurs expérimentés qui cherchent à perfectionner leurs compétences. Alberto Miola allie clarté et approches pratiques, ce qui en fait une référence indispensable pour les passionnés de Flutter.",
                                        '日本語': "Alberto Miola 著の『Flutter Complete Reference』は、ネイティブ コンパイル アプリケーションを作成するための Google のオープンソース UI ツールキットである Flutter を習得したい開発者向けの総合ガイドです。本書では、ウィジェット アーキテクチャ、状態管理、アニメーション、レスポンシブで高性能なアプリケーションを作成するための高度なテクニックなど、Flutter の基礎を深く掘り下げて解説しています。実用的な例と詳細な説明が盛り込まれており、初心者向けの入門書としてだけでなく、スキルを磨きたい経験豊富な開発者にとって貴重なリソースとしても役立ちます。Alberto Miola は、明快さと実践的なアプローチを組み合わせており、Flutter 愛好家にとって欠かせないリファレンスとなっています。",
                                        '한국인': "Alberto Miola의 Flutter Complete Reference는 네이티브 컴파일 애플리케이션을 제작하기 위한 Google의 오픈소스 UI 툴킷인 Flutter를 마스터하려는 개발자를 위한 포괄적인 가이드입니다. 이 책은 위젯 아키텍처, 상태 관리, 애니메이션 및 반응형 고성능 앱을 만드는 고급 기술과 같은 필수 주제를 다루는 Flutter의 기본에 대한 심층적인 분석을 제공합니다. 실용적인 예제와 자세한 설명이 포함되어 있어 초보자에게 친숙한 소개서이자 기술을 다듬고자 하는 숙련된 개발자에게 귀중한 리소스 역할을 합니다. Alberto Miola는 명확성과 실무적 접근 방식을 결합하여 Flutter 애호가에게 없어서는 안 될 참고 자료가 되었습니다.",
                                        'Español': "Flutter Complete Reference de Alberto Miola es una guía completa para desarrolladores que buscan dominar Flutter, el kit de herramientas de interfaz de usuario de código abierto de Google para crear aplicaciones compiladas de forma nativa. El libro ofrece una inmersión profunda en los fundamentos de Flutter y cubre temas esenciales como la arquitectura de widgets, la gestión de estados, las animaciones y las técnicas avanzadas para crear aplicaciones responsivas y de alto rendimiento. Con ejemplos prácticos y explicaciones detalladas, sirve como una introducción para principiantes y un recurso valioso para desarrolladores experimentados que buscan perfeccionar sus habilidades. Alberto Miola combina claridad con enfoques prácticos, lo que lo convierte en una referencia indispensable para los entusiastas de Flutter.",
                                        'हिंदी': "अल्बर्टो मिओला द्वारा लिखित फ़्लटर कम्प्लीट रेफरेंस उन डेवलपर्स के लिए एक व्यापक गाइड है जो फ़्लटर में महारत हासिल करना चाहते हैं, यह नेटिवली कम्पाइल किए गए एप्लिकेशन तैयार करने के लिए Google का ओपन-सोर्स UI टूलकिट है। यह पुस्तक फ़्लटर के मूल सिद्धांतों में गहराई से गोता लगाती है, जिसमें विजेट आर्किटेक्चर, स्टेट मैनेजमेंट, एनिमेशन और रिस्पॉन्सिव और हाई-परफ़ॉर्मेंस ऐप बनाने के लिए उन्नत तकनीकों जैसे आवश्यक विषयों को शामिल किया गया है। व्यावहारिक उदाहरणों और विस्तृत व्याख्याओं के साथ, यह शुरुआती लोगों के लिए एक अनुकूल परिचय और अपने कौशल को निखारने के इच्छुक अनुभवी डेवलपर्स के लिए एक मूल्यवान संसाधन दोनों के रूप में कार्य करता है। अल्बर्टो मिओला स्पष्टता को व्यावहारिक दृष्टिकोणों के साथ जोड़ता है, जो इसे फ़्लटर उत्साही लोगों के लिए एक अपरिहार्य संदर्भ बनाता है।",
                                        'Português': "Flutter Complete Reference de Alberto Miola é um guia completo para programadores que procuram dominar o Flutter, o kit de ferramentas de UI de código aberto da Google para criar aplicações compiladas nativamente. O livro proporciona um mergulho profundo nos fundamentos do Flutter, abordando tópicos essenciais como a arquitetura de widgets, a gestão de estado, as animações e as técnicas avançadas para criar aplicações responsivas e de alto desempenho. Com exemplos práticos e explicações detalhadas, serve tanto como uma introdução para principiantes como um recurso valioso para programadores experientes que procuram melhorar as suas capacidades. Alberto Miola combina clareza com abordagens práticas, tornando-o uma referência indispensável para os entusiastas do Flutter.",
                                        'বাংলা': "অ্যালবার্তো মিওলার ফ্লাটার কমপ্লিট রেফারেন্স হল ফ্লাটারে দক্ষতা অর্জন করতে চাওয়া ডেভেলপারদের জন্য একটি বিস্তৃত নির্দেশিকা, নেটিভলি কম্পাইল করা অ্যাপ্লিকেশন তৈরির জন্য Google-এর ওপেন-সোর্স UI টুলকিট। বইটি ফ্লটারের মৌলিক বিষয়গুলির মধ্যে গভীর ডুব দেয়, উইজেট আর্কিটেকচার, রাষ্ট্র পরিচালনা, অ্যানিমেশন এবং প্রতিক্রিয়াশীল এবং উচ্চ-পারফরম্যান্স অ্যাপ তৈরির জন্য উন্নত কৌশলগুলির মতো প্রয়োজনীয় বিষয়গুলিকে কভার করে৷ ব্যবহারিক উদাহরণ এবং বিশদ ব্যাখ্যা সহ, এটি একটি শিক্ষানবিস-বন্ধুত্বপূর্ণ ভূমিকা এবং তাদের দক্ষতা পরিমার্জিত করার জন্য অভিজ্ঞ বিকাশকারীদের জন্য একটি মূল্যবান সংস্থান উভয়ই কাজ করে৷ আলবার্তো মিওলা হ্যান্ডস-অন পন্থাগুলির সাথে স্পষ্টতাকে একত্রিত করে, এটিকে ফ্লটার উত্সাহীদের জন্য একটি অপরিহার্য রেফারেন্স করে তোলে৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Complete Reference من تأليف Alberto Miola دليلاً شاملاً للمطورين الذين يسعون إلى إتقان Flutter، وهي مجموعة أدوات واجهة المستخدم مفتوحة المصدر من Google لإنشاء تطبيقات مجمعة محليًا. يوفر الكتاب نظرة متعمقة في أساسيات Flutter، ويغطي موضوعات أساسية مثل بنية الأداة، وإدارة الحالة، والرسوم المتحركة، والتقنيات المتقدمة لإنشاء تطبيقات سريعة الاستجابة وعالية الأداء. مع أمثلة عملية وشروحات مفصلة، ​​فهو بمثابة مقدمة سهلة للمبتدئين ومورد قيم للمطورين ذوي الخبرة الذين يتطلعون إلى صقل مهاراتهم. يجمع Alberto Miola بين الوضوح والأساليب العملية، مما يجعله مرجعًا لا غنى عنه لعشاق Flutter.",
                                        'فارسی': "مرجع کامل Flutter توسط Alberto Miola یک راهنمای جامع برای توسعه دهندگانی است که به دنبال تسلط بر Flutter، جعبه ابزار UI منبع باز Google برای ایجاد برنامه های کاربردی کامپایل شده بومی هستند. این کتاب به بررسی اصول فلاتر می پردازد و موضوعات ضروری مانند معماری ویجت، مدیریت حالت، انیمیشن ها و تکنیک های پیشرفته برای ایجاد اپلیکیشن های پاسخگو و با کارایی بالا را پوشش می دهد. با مثال‌های عملی و توضیحات مفصل، هم به‌عنوان مقدمه‌ای مناسب برای مبتدیان و هم منبعی ارزشمند برای توسعه‌دهندگان با تجربه ای است که به دنبال اصلاح مهارت‌های خود هستند. آلبرتو میولا وضوح را با رویکردهای عملی ترکیب می کند و آن را به مرجعی ضروری برای علاقه مندان به فلاتر تبدیل می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/2 - Flutter Complete Reference.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/2%20-%20Flutter%20Complete%20Reference.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/2%20-%20Flutter%20Complete%20Reference.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/2%20-%20Flutter%20Complete%20Reference.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/2%20-%20Flutter%20Complete%20Reference.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/2%20-%20Flutter%20Complete%20Reference.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/2%20-%20Flutter%20Complete%20Reference.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/2%20-%20Flutter%20Complete%20Reference.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/2%20-%20Flutter%20Complete%20Reference.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter Apprentice
                        {
                                "title": {
                                        'English': "Flutter Apprentice",
                                        'Deutsch': "Flutter Apprentice",
                                        '中国人': "Flutter Apprentice",
                                        'Русский': "Flutter Apprentice",
                                        'Français': "Flutter Apprentice",
                                        '日本語': "Flutter Apprentice",
                                        '한국인': "Flutter Apprentice",
                                        'Español': "Flutter Apprentice",
                                        'हिंदी': "Flutter Apprentice",
                                        'Português': "Flutter Apprentice",
                                        'বাংলা': "Flutter Apprentice",
                                        'عَرَبِيّ': "Flutter Apprentice",
                                        'فارسی': "Flutter Apprentice",
                                },
                                "description": {
                                        'English': "Flutter Apprentice is a comprehensive guide for beginners to learn Flutter, a popular open-source framework for building cross-platform mobile applications. Authored by a team of experienced developers, the book provides a hands-on, project-based approach to mastering Flutter. It covers the fundamentals of Dart programming, state management, UI design, and integrating features like animations and APIs. Each chapter builds on practical projects, enabling readers to develop real-world apps while gaining confidence in their skills. With clear explanations, step-by-step instructions, and tips to avoid common pitfalls, Flutter Apprentice is an excellent resource for aspiring app developers who want to bring their ideas to life on Android and iOS platforms.",
                                        'Deutsch': "Flutter Apprentice ist ein umfassender Leitfaden für Anfänger zum Erlernen von Flutter, einem beliebten Open-Source-Framework zum Erstellen plattformübergreifender mobiler Anwendungen. Das von einem Team erfahrener Entwickler verfasste Buch bietet einen praktischen, projektbasierten Ansatz zum Erlernen von Flutter. Es behandelt die Grundlagen der Dart-Programmierung, der Zustandsverwaltung, des UI-Designs und der Integration von Funktionen wie Animationen und APIs. Jedes Kapitel basiert auf praktischen Projekten, sodass die Leser reale Apps entwickeln und gleichzeitig Vertrauen in ihre Fähigkeiten gewinnen können. Mit klaren Erklärungen, Schritt-für-Schritt-Anleitungen und Tipps zum Vermeiden häufiger Fehler ist Flutter Apprentice eine hervorragende Ressource für angehende App-Entwickler, die ihre Ideen auf Android- und iOS-Plattformen zum Leben erwecken möchten.",
                                        '中国人': "Flutter Apprentice 是一本全面的指南，帮助初学者学习 Flutter，Flutter 是一种用于构建跨平台移动应用程序的流行开源框架。本书由一支经验丰富的开发人员团队撰写，提供了一种基于项目的动手实践方法来掌握 Flutter。它涵盖了 Dart 编程、状态管理、UI 设计和集成动画和 API 等功能的基础知识。每一章都以实际项目为基础，使读者能够开发真实的应用程序，同时增强对自己技能的信心。Flutter Apprentice 具有清晰的解释、分步说明和避免常见陷阱的技巧，是希望在 Android 和 iOS 平台上实现自己想法的有抱负的应用程序开发人员的绝佳资源。",
                                        'Русский': "Flutter Apprentice — это полное руководство для начинающих по изучению Flutter, популярного фреймворка с открытым исходным кодом для создания кроссплатформенных мобильных приложений. Книга, написанная командой опытных разработчиков, предлагает практический подход к освоению Flutter на основе проектов. Она охватывает основы программирования Dart, управления состоянием, проектирования пользовательского интерфейса и интеграции таких функций, как анимация и API. Каждая глава основана на практических проектах, что позволяет читателям разрабатывать реальные приложения, обретая уверенность в своих навыках. Благодаря понятным объяснениям, пошаговым инструкциям и советам по избежанию распространенных ошибок Flutter Apprentice является отличным ресурсом для начинающих разработчиков приложений, которые хотят воплотить свои идеи в жизнь на платформах Android и iOS.",
                                        'Français': "Flutter Apprentice est un guide complet destiné aux débutants pour apprendre Flutter, un framework open source populaire pour la création d'applications mobiles multiplateformes. Rédigé par une équipe de développeurs expérimentés, le livre propose une approche pratique et basée sur des projets pour maîtriser Flutter. Il couvre les fondamentaux de la programmation Dart, la gestion des états, la conception d'interface utilisateur et l'intégration de fonctionnalités telles que les animations et les API. Chaque chapitre s'appuie sur des projets pratiques, permettant aux lecteurs de développer des applications concrètes tout en gagnant en confiance dans leurs compétences. Avec des explications claires, des instructions étape par étape et des conseils pour éviter les pièges courants, Flutter Apprentice est une excellente ressource pour les développeurs d'applications en herbe qui souhaitent donner vie à leurs idées sur les plateformes Android et iOS.",
                                        '日本語': "Flutter Apprentice は、クロスプラットフォーム モバイル アプリケーションを構築するための人気のオープン ソース フレームワークである Flutter を初心者が学習するための総合ガイドです。経験豊富な開発者チームが執筆したこの本は、Flutter を習得するための実践的なプロジェクト ベースのアプローチを提供します。Dart プログラミング、状態管理、UI デザイン、アニメーションや API などの機能の統合の基礎をカバーしています。各章は実践的なプロジェクトに基づいているため、読者はスキルに自信を持ちながら、実際のアプリを開発できます。わかりやすい説明、ステップ バイ ステップの手順、よくある落とし穴を避けるためのヒントが満載の Flutter Apprentice は、Android および iOS プラットフォームでアイデアを実現したい意欲的なアプリ開発者にとって優れたリソースです。",
                                        '한국인': "Flutter Apprentice는 크로스 플랫폼 모바일 애플리케이션을 구축하기 위한 인기 있는 오픈소스 프레임워크인 Flutter를 초보자가 배우기 위한 포괄적인 가이드입니다. 숙련된 개발자 팀이 저술한 이 책은 Flutter를 마스터하기 위한 실무적이고 프로젝트 기반의 접근 방식을 제공합니다. Dart 프로그래밍, 상태 관리, UI 디자인, 애니메이션 및 API와 같은 기능 통합의 기본 사항을 다룹니다. 각 장은 실용적인 프로젝트를 기반으로 하여 독자가 기술에 대한 자신감을 얻는 동시에 실제 앱을 개발할 수 있도록 합니다. 명확한 설명, 단계별 지침, 일반적인 함정을 피하기 위한 팁이 포함된 Flutter Apprentice는 Android 및 iOS 플랫폼에서 아이디어를 실현하고자 하는 야심 찬 앱 개발자에게 훌륭한 리소스입니다.",
                                        'Español': "Flutter Apprentice es una guía completa para principiantes que desean aprender Flutter, un popular marco de código abierto para crear aplicaciones móviles multiplataforma. Escrito por un equipo de desarrolladores experimentados, el libro ofrece un enfoque práctico basado en proyectos para dominar Flutter. Abarca los fundamentos de la programación Dart, la gestión de estados, el diseño de la interfaz de usuario y la integración de funciones como animaciones y API. Cada capítulo se basa en proyectos prácticos, lo que permite a los lectores desarrollar aplicaciones del mundo real mientras ganan confianza en sus habilidades. Con explicaciones claras, instrucciones paso a paso y consejos para evitar errores comunes, Flutter Apprentice es un excelente recurso para los aspirantes a desarrolladores de aplicaciones que desean dar vida a sus ideas en las plataformas Android e iOS.",
                                        'हिंदी': "फ़्लटर अप्रेंटिस शुरुआती लोगों के लिए फ़्लटर सीखने के लिए एक व्यापक मार्गदर्शिका है, जो क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने के लिए एक लोकप्रिय ओपन-सोर्स फ़्रेमवर्क है। अनुभवी डेवलपर्स की एक टीम द्वारा लिखित, यह पुस्तक फ़्लटर में महारत हासिल करने के लिए एक व्यावहारिक, प्रोजेक्ट-आधारित दृष्टिकोण प्रदान करती है। इसमें डार्ट प्रोग्रामिंग, स्टेट मैनेजमेंट, UI डिज़ाइन और एनिमेशन और API जैसी सुविधाओं को एकीकृत करने की बुनियादी बातों को शामिल किया गया है। प्रत्येक अध्याय व्यावहारिक परियोजनाओं पर आधारित है, जिससे पाठकों को अपने कौशल में आत्मविश्वास प्राप्त करते हुए वास्तविक दुनिया के ऐप विकसित करने में सक्षम बनाया जा सके। स्पष्ट स्पष्टीकरण, चरण-दर-चरण निर्देश और सामान्य नुकसानों से बचने के सुझावों के साथ, फ़्लटर अप्रेंटिस महत्वाकांक्षी ऐप डेवलपर्स के लिए एक उत्कृष्ट संसाधन है जो अपने विचारों को Android और iOS प्लेटफ़ॉर्म पर जीवंत करना चाहते हैं।",
                                        'Português': "Flutter Apprentice é um guia completo para principiantes aprenderem Flutter, uma estrutura popular de código aberto para a construção de aplicações móveis multiplataforma. Da autoria de uma equipa de programadores experientes, o livro oferece uma abordagem prática e baseada em projetos para dominar o Flutter. Abrange os fundamentos da programação Dart, gestão de estado, design de UI e integração de recursos como animações e APIs. Cada capítulo baseia-se em projetos práticos, permitindo aos leitores desenvolver aplicações do mundo real enquanto ganham confiança nas suas capacidades. Com explicações claras, instruções passo a passo e dicas para evitar armadilhas comuns, Flutter Apprentice é um excelente recurso para aspirantes a programadores de aplicações que desejam dar vida às suas ideias nas plataformas Android e iOS.",
                                        'বাংলা': "ফ্লটার অ্যাপ্রেন্টিস হল নতুনদের জন্য ফ্লটার শেখার জন্য একটি ব্যাপক নির্দেশিকা, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরির জন্য একটি জনপ্রিয় ওপেন-সোর্স ফ্রেমওয়ার্ক। অভিজ্ঞ ডেভেলপারদের একটি দল দ্বারা রচিত, বইটি ফ্লটারকে আয়ত্ত করার জন্য একটি হ্যান্ডস-অন, প্রকল্প-ভিত্তিক পদ্ধতি প্রদান করে। এটি ডার্ট প্রোগ্রামিং, স্টেট ম্যানেজমেন্ট, UI ডিজাইন এবং অ্যানিমেশন এবং API-এর মতো বৈশিষ্ট্যগুলিকে একীভূত করার মৌলিক বিষয়গুলি কভার করে৷ প্রতিটি অধ্যায় ব্যবহারিক প্রকল্পের উপর ভিত্তি করে তৈরি করে, পাঠকদের তাদের দক্ষতার প্রতি আস্থা অর্জনের সাথে সাথে বাস্তব-বিশ্বের অ্যাপ বিকাশ করতে সক্ষম করে। স্পষ্ট ব্যাখ্যা, ধাপে ধাপে নির্দেশাবলী এবং সাধারণ সমস্যাগুলি এড়াতে টিপস সহ, Flutter Apprentice উচ্চাকাঙ্ক্ষী অ্যাপ বিকাশকারীদের জন্য একটি চমৎকার সংস্থান যারা Android এবং iOS প্ল্যাটফর্মে তাদের ধারণাগুলিকে জীবন্ত করতে চান৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Apprentice دليلاً شاملاً للمبتدئين لتعلم Flutter، وهو إطار عمل مفتوح المصدر شائع لبناء تطبيقات جوال متعددة الأنظمة. يقدم الكتاب، الذي ألفه فريق من المطورين ذوي الخبرة، نهجًا عمليًا قائمًا على المشروع لإتقان Flutter. ويغطي أساسيات برمجة Dart وإدارة الحالة وتصميم واجهة المستخدم ودمج ميزات مثل الرسوم المتحركة وواجهات برمجة التطبيقات. يعتمد كل فصل على مشاريع عملية، مما يتيح للقراء تطوير تطبيقات واقعية مع اكتساب الثقة في مهاراتهم. مع التفسيرات الواضحة والتعليمات خطوة بخطوة والنصائح لتجنب الأخطاء الشائعة، يعد Flutter Apprentice موردًا ممتازًا لمطوري التطبيقات الطموحين الذين يرغبون في إحياء أفكارهم على منصات Android وiOS.",
                                        'فارسی': "Flutter Apprentice یک راهنمای جامع برای مبتدیان برای یادگیری Flutter است، یک فریم ورک منبع باز محبوب برای ساخت اپلیکیشن های موبایلی چند پلتفرمی. این کتاب که توسط تیمی از توسعه دهندگان با تجربه نوشته شده است، رویکردی عملی و مبتنی بر پروژه برای تسلط بر فلاتر ارائه می دهد. این مبانی برنامه نویسی Dart، مدیریت حالت، طراحی UI، و یکپارچه سازی ویژگی هایی مانند انیمیشن ها و API ها را پوشش می دهد. هر فصل بر اساس پروژه های عملی ساخته شده است و خوانندگان را قادر می سازد تا برنامه های دنیای واقعی را توسعه دهند و در عین حال به مهارت های خود اعتماد کنند. Flutter Apprentice با توضیحات واضح، دستورالعمل‌های گام به گام و نکاتی برای جلوگیری از مشکلات رایج، منبعی عالی برای توسعه‌دهندگان برنامه‌های مشتاقی است که می‌خواهند ایده‌های خود را در پلتفرم‌های اندروید و iOS زنده کنند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/1 - Flutter Apprentice.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/1%20-%20Flutter%20Apprentice.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/1%20-%20Flutter%20Apprentice.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/1%20-%20Flutter%20Apprentice.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/1%20-%20Flutter%20Apprentice.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/1%20-%20Flutter%20Apprentice.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/1%20-%20Flutter%20Apprentice.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/1%20-%20Flutter%20Apprentice.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/1%20-%20Flutter%20Apprentice.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/1%20-%20Flutter%20Apprentice.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/1%20-%20Flutter%20Apprentice.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/1%20-%20Flutter%20Apprentice.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/1%20-%20Flutter%20Apprentice.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/1%20-%20Flutter%20Apprentice.md",
                                },
                        },
                        // -- > 2 : Head First Git
                        {
                                "title": {
                                        'English': "Head First Git",
                                        'Deutsch': "Head First Git",
                                        '中国人': "Head First Git",
                                        'Русский': "Head First Git",
                                        'Français': "Head First Git",
                                        '日本語': "Head First Git",
                                        '한국인': "Head First Git",
                                        'Español': "Head First Git",
                                        'हिंदी': "Head First Git",
                                        'Português': "Head First Git",
                                        'বাংলা': "Head First Git",
                                        'عَرَبِيّ': "Head First Git",
                                        'فارسی': "Head First Git",
                                },
                                "description": {
                                        'English': "Head First Git by Raju Gandhi is an engaging and visually rich guide to mastering Git, the popular version control system. The book takes a hands-on, beginner-friendly approach, using the unique Head First style to make learning both effective and fun. It covers fundamental Git concepts, branching and merging, collaboration workflows, and advanced features like rebasing and resolving conflicts. With plenty of exercises, examples, and illustrations, this book helps readers not just understand Git but also gain the confidence to use it efficiently in real-world projects. Perfect for developers of all levels!",
                                        'Deutsch': "Head First Git von Raju Gandhi ist ein ansprechender und visuell ansprechender Leitfaden zur Beherrschung von Git, dem beliebten Versionskontrollsystem. Das Buch verfolgt einen praxisorientierten, anfängerfreundlichen Ansatz und nutzt den einzigartigen Head-First-Stil, um das Lernen sowohl effektiv als auch unterhaltsam zu gestalten. Es behandelt grundlegende Git-Konzepte, Verzweigungen und Zusammenführungen, Kollaborationsworkflows und erweiterte Funktionen wie Rebasing und Konfliktlösung. Mit zahlreichen Übungen, Beispielen und Illustrationen hilft dieses Buch den Lesern nicht nur, Git zu verstehen, sondern auch das Selbstvertrauen zu gewinnen, es in realen Projekten effizient einzusetzen. Perfekt für Entwickler aller Niveaus!",
                                        '中国人': "Raju Gandhi 的《Head First Git》是一本引人入胜、视觉效果丰富的指南，帮助您掌握流行的版本控制系统 Git。本书采用适合初学者的实践方法，采用独特的 Head First 风格，使学习既有效又有趣。它涵盖了基本的 Git 概念、分支和合并、协作工作流程以及变基和解决冲突等高级功能。本书通过大量的练习、示例和插图，不仅帮助读者理解 Git，还帮助他们获得在实际项目中有效使用它的信心。非常适合各个级别的开发人员！",
                                        'Русский': "Head First Git Раджу Ганди — это увлекательное и наглядное руководство по освоению Git, популярной системы контроля версий. В книге использован практический и удобный для новичков подход, а уникальный стиль Head First делает обучение одновременно эффективным и увлекательным. В ней рассматриваются фундаментальные концепции Git, ветвления и слияния, рабочие процессы совместной работы, а также расширенные функции, такие как перебазирование и разрешение конфликтов. Эта книга с множеством упражнений, примеров и иллюстраций помогает читателям не только понять Git, но и обрести уверенность в том, что можно эффективно его использовать. реальный мир Идеально подходит для разработчиков всех уровней!",
                                        'Français': "Head First Git de Raju Gandhi est un guide engageant et visuellement riche pour maîtriser Git, le système de contrôle de version populaire. Le livre adopte une approche pratique et conviviale pour les débutants, en utilisant le style unique Head First pour rendre l'apprentissage à la fois efficace et amusant. Il couvre les concepts fondamentaux de Git, les branchements et la fusion, les flux de travail de collaboration et les fonctionnalités avancées telles que le rebasage et la résolution des conflits. Avec de nombreux exercices, exemples et illustrations, ce livre aide les lecteurs non seulement à comprendre Git, mais également à acquérir la confiance nécessaire pour l'utiliser efficacement. monde réel projets. Parfait pour les développeurs de tous niveaux !",
                                        '日本語': "Raju Gandhi 著『Head First Git』は、人気のバージョン管理システムである Git をマスターするための魅力的で視覚的に豊富なガイドであり、実践的で初心者に優しいアプローチをとり、効果的で楽しい学習を可能にする独自の Head First スタイルを採用しています。この本では、Git の基本的な概念、分岐とマージ、コラボレーション ワークフロー、およびリベースや競合の解決などの高度な機能について説明し、豊富な演習、例、図を使用して、読者が Git を理解するだけでなく、Git を効果的に使用するための自信を得るのにも役立ちます。現実世界あらゆるレベルの開発者に最適です。",
                                        '한국인': "Raju Gandhi가 쓴 Head First Git은 인기 있는 버전 제어 시스템인 Git을 마스터하기 위한 매력적이고 시각적으로 풍부한 가이드입니다. 이 책은 학습을 효과적이고 재미있게 만들기 위해 독특한 Head First 스타일을 사용하여 실습적이고 초보자에게 친숙한 접근 방식을 취합니다. 이 책은 기본적인 Git 개념, 분기 및 병합, 협업 워크플로, 리베이스 및 충돌 해결과 같은 고급 기능을 다루고 있습니다. 풍부한 연습, 예제, 일러스트레이션을 통해 이 책은 독자가 Git을 이해하는 데 도움이 될 뿐만 아니라 Git을 효율적으로 사용할 수 있는 자신감을 얻습니다. 실제 세계 모든 수준의 개발자에게 적합합니다!",
                                        'Español': "Head First Git de Raju Gandhi es una guía atractiva y visualmente rica para dominar Git, el popular sistema de control de versiones. El libro adopta un enfoque práctico y amigable para principiantes, utilizando el estilo único Head First para que el aprendizaje sea efectivo y divertido. Cubre conceptos fundamentales de Git, ramificación y fusión, flujos de trabajo de colaboración y funciones avanzadas como rebase y resolución de conflictos. Con muchos ejercicios, ejemplos e ilustraciones, este libro ayuda a los lectores no solo a comprender Git sino también a ganar confianza para usarlo de manera eficiente. mundo real ¡Perfecto para desarrolladores de todos los niveles!",
                                        'हिंदी': "राजू गांधी द्वारा लिखित हेड फर्स्ट गिट, लोकप्रिय संस्करण नियंत्रण प्रणाली, गिट में महारत हासिल करने के लिए एक आकर्षक और दृष्टि से समृद्ध मार्गदर्शिका है। यह पुस्तक सीखने को प्रभावी और मजेदार बनाने के लिए अद्वितीय हेड फर्स्ट शैली का उपयोग करते हुए एक व्यावहारिक, शुरुआती-अनुकूल दृष्टिकोण अपनाती है। इसमें मौलिक Git अवधारणाओं, शाखाकरण और विलय, सहयोग कार्यप्रवाह, और संघर्षों को फिर से बनाने और हल करने जैसी उन्नत सुविधाएँ शामिल हैं, बहुत सारे अभ्यासों, उदाहरणों और चित्रों के साथ, यह पुस्तक पाठकों को न केवल Git को समझने में मदद करती है बल्कि इसे कुशलतापूर्वक उपयोग करने का आत्मविश्वास भी प्राप्त करती है। असली दुनिया परियोजनाएं। सभी स्तरों के डेवलपर्स के लिए बिल्कुल सही!",
                                        'Português': "Head First Git, de Raju Gandhi, é um guia envolvente e visualmente rico para dominar o Git, o popular sistema de controlo de versões O livro adota uma abordagem prática e amigável para principiantes, utilizando o estilo único Head First para tornar a aprendizagem eficaz. e divertido. Aborda conceitos fundamentais do Git, ramificação e fusão, fluxos de trabalho de colaboração e funcionalidades avançadas como rebase e resolução de conflitos. também a ganhar confiança para o utilizar com eficiência. projetos Perfeito para programadores de todos os níveis!",
                                        'বাংলা': "রাজু গান্ধীর দ্বারা হেড ফার্স্ট গিট হল গিটকে আয়ত্ত করার জন্য একটি আকর্ষক এবং দৃষ্টিনন্দন দিকনির্দেশনা, জনপ্রিয় সংস্করণ নিয়ন্ত্রণ ব্যবস্থা বইটি একটি হ্যান্ডস-অন, শিক্ষানবিস-বন্ধুত্বপূর্ণ পদ্ধতির ব্যবহার করে, শিখনকে কার্যকরী এবং মজাদার করতে। এটি মৌলিক গিট ধারণা, শাখা এবং একত্রীকরণ, সহযোগিতার কর্মপ্রবাহ, এবং প্রচুর অনুশীলন, উদাহরণ এবং চিত্র সহ দ্বন্দ্বের পুনর্বাসন এবং সমাধানের মতো উন্নত বৈশিষ্ট্যগুলিকে কভার করে, এই বইটি পাঠকদের কেবল গিটকে বুঝতেই সাহায্য করে না বরং এটিকে দক্ষতার সাথে ব্যবহার করার জন্য আত্মবিশ্বাস অর্জন করতেও সহায়তা করে৷ বাস্তব-জগত সমস্ত স্তরের বিকাশকারীদের জন্য উপযুক্ত!",
                                        'عَرَبِيّ': "يعد Head First Git من تأليف Raju Gandhi دليلاً جذابًا وغنيًا بصريًا لإتقان Git، وهو نظام التحكم في الإصدار الشائع، ويتبع الكتاب منهجًا عمليًا وصديقًا للمبتدئين، باستخدام أسلوب Head First الفريد لجعل التعلم فعالاً وممتعًا. وهو يغطي مفاهيم Git الأساسية، والتفرع والدمج، وسير عمل التعاون، والميزات المتقدمة مثل إعادة التأسيس وحل التعارضات، مع الكثير من التمارين والأمثلة والرسوم التوضيحية، يساعد هذا الكتاب القراء ليس فقط على فهم Git ولكن أيضًا اكتساب الثقة لاستخدامه بكفاءة. العالم الحقيقي مثالية للمطورين من جميع المستويات!",
                                        'فارسی': "Head First Git نوشته راجو گاندی یک راهنمای جذاب و بصری غنی برای تسلط بر سیستم کنترل نسخه محبوب است. این کتاب مفاهیم اساسی Git، شاخه‌بندی و ادغام، جریان‌های کاری همکاری، و ویژگی‌های پیشرفته مانند تغییر و حل تعارض‌ها را پوشش می‌دهد، با تمرین‌ها، مثال‌ها و تصاویر فراوان، این کتاب به خوانندگان کمک می‌کند نه‌تنها Git را درک کنند، بلکه اعتماد به نفس را برای استفاده مؤثر از آن به دست آورند. دنیای واقعی پروژه های ایده آل برای توسعه دهندگان در تمام سطوح!",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Full Stack Developer/2 - Head First Git.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/English/2%20-%20Head%20First%20Git.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/German/2%20-%20Head%20First%20Git.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Chinese/2%20-%20Head%20First%20Git.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Russian/2%20-%20Head%20First%20Git.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/French/2%20-%20Head%20First%20Git.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Japanese/2%20-%20Head%20First%20Git.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Korean/2%20-%20Head%20First%20Git.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Spanish/2%20-%20Head%20First%20Git.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Hindi/2%20-%20Head%20First%20Git.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Portugues/2%20-%20Head%20First%20Git.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Bengali/2%20-%20Head%20First%20Git.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Arabic/2%20-%20Head%20First%20Git.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Books/Persian/2%20-%20Head%20First%20Git.md",
                                },
                        },
                ],
                // -- >> Android Developer
                "Android Developer": [
                        // -- > NLP - 2 : Mastering NLP from Foundations to LLMs
                        {
                                "title": {
                                        'English': "Mastering NLP from Foundations to LLMs",
                                        'Deutsch': "Mastering NLP from Foundations to LLMs",
                                        '中国人': "Mastering NLP from Foundations to LLMs",
                                        'Русский': "Mastering NLP from Foundations to LLMs",
                                        'Français': "Mastering NLP from Foundations to LLMs",
                                        '日本語': "Mastering NLP from Foundations to LLMs",
                                        '한국인': "Mastering NLP from Foundations to LLMs",
                                        'Español': "Mastering NLP from Foundations to LLMs",
                                        'हिंदी': "Mastering NLP from Foundations to LLMs",
                                        'Português': "Mastering NLP from Foundations to LLMs",
                                        'বাংলা': "Mastering NLP from Foundations to LLMs",
                                        'عَرَبِيّ': "Mastering NLP from Foundations to LLMs",
                                        'فارسی': "Mastering NLP from Foundations to LLMs",
                                },
                                "description": {
                                        'English': "Mastering NLP from Foundations to LLMs is a comprehensive guide authored by Lior Gazit and Meysam Ghaffari, published on April 26, 2024. This book offers an in-depth introduction to Natural Language Processing (NLP) techniques, beginning with the mathematical foundations of machine learning and progressing to advanced applications involving Large Language Models (LLMs). It covers essential topics such as text preprocessing, traditional machine learning methods for text classification, and deep learning language models. Additionally, the authors explore the theory, design, and implementation of LLMs, providing practical Python code samples throughout. The book also discusses future trends in NLP and includes expert insights, making it a valuable resource for both beginners and experienced practitioners aiming to solve real-world business problems using Python. ",
                                        'Deutsch': "„Mastering NLP from Foundations to LLMs“ ist ein umfassender Leitfaden von Lior Gazit und Meysam Ghaffari, der am 26. April 2024 veröffentlicht wurde. Dieses Buch bietet eine ausführliche Einführung in Techniken der natürlichen Sprachverarbeitung (Natural Language Processing, NLP), beginnend mit den mathematischen Grundlagen des maschinellen Lernens und fortschreitend bis hin zu fortgeschrittenen Anwendungen mit Large Language Models (LLMs). Es behandelt wichtige Themen wie Textvorverarbeitung, traditionelle Methoden des maschinellen Lernens zur Textklassifizierung und Deep-Learning-Sprachmodelle. Darüber hinaus untersuchen die Autoren die Theorie, das Design und die Implementierung von LLMs und liefern durchgehend praktische Python-Codebeispiele. Das Buch diskutiert auch zukünftige Trends in der NLP und enthält Experteneinblicke, was es zu einer wertvollen Ressource sowohl für Anfänger als auch für erfahrene Praktiker macht, die reale Geschäftsprobleme mit Python lösen möchten.",
                                        '中国人': "《从基础到 LLM 精通 NLP》是一本综合指南，由 Lior Gazit 和 Meysam Ghaffari 撰写，出版于 2024 年 4 月 26 日。本书深入介绍了自然语言处理 (NLP) 技术，从机器学习的数学基础开始，逐步介绍涉及大型语言模型 (LLM) 的高级应用。它涵盖了文本预处理、用于文本分类的传统机器学习方法和深度学习语言模型等重要主题。此外，作者还探讨了 LLM 的理论、设计和实现，并提供了实用的 Python 代码示例。本书还讨论了 NLP 的未来趋势，并包含专家见解，使其成为初学者和经验丰富的从业者使用 Python 解决实际业务问题的宝贵资源。",
                                        'Русский': "Mastering NLP from Foundations to LLMs — это всеобъемлющее руководство, написанное Лиором Газитом и Мейсамом Гаффари, опубликованное 26 апреля 2024 года. Эта книга предлагает углубленное введение в методы обработки естественного языка (NLP), начиная с математических основ машинного обучения и заканчивая продвинутыми приложениями, включающими большие языковые модели (LLM). Она охватывает такие важные темы, как предварительная обработка текста, традиционные методы машинного обучения для классификации текста и модели языка глубокого обучения. Кроме того, авторы изучают теорию, проектирование и реализацию LLM, предоставляя практические примеры кода Python. В книге также обсуждаются будущие тенденции в области NLP и содержатся экспертные идеи, что делает ее ценным ресурсом как для новичков, так и для опытных практиков, стремящихся решать реальные бизнес-задачи с помощью Python.",
                                        'Français': "Mastering NLP from Foundations to LLMs est un guide complet rédigé par Lior Gazit et Meysam Ghaffari, publié le 26 avril 2024. Ce livre propose une introduction approfondie aux techniques de traitement du langage naturel (NLP), en commençant par les fondements mathématiques de l'apprentissage automatique et en progressant vers des applications avancées impliquant de grands modèles linguistiques (LLM). Il couvre des sujets essentiels tels que le prétraitement de texte, les méthodes traditionnelles d'apprentissage automatique pour la classification de texte et les modèles de langage d'apprentissage profond. De plus, les auteurs explorent la théorie, la conception et la mise en œuvre des LLM, en fournissant des exemples de code Python pratiques tout au long du livre. Le livre aborde également les tendances futures du NLP et comprend des points de vue d'experts, ce qui en fait une ressource précieuse pour les débutants et les praticiens expérimentés qui souhaitent résoudre des problèmes commerciaux réels à l'aide de Python.",
                                        '日本語': "『Mastering NLP from Foundations to LLMs』は、Lior Gazit と Meysam Ghaffari が執筆し、2024 年 4 月 26 日に出版された総合ガイドです。この本は、機械学習の数学的基礎から始まり、大規模言語モデル (LLM) を含む高度なアプリケーションまで、自然言語処理 (NLP) 技術の詳細な入門書です。テキスト前処理、テキスト分類のための従来の機械学習手法、ディープラーニング言語モデルなどの重要なトピックを取り上げています。さらに、著者は LLM の理論、設計、実装を探求し、全体を通して実用的な Python コードサンプルを提供しています。この本では、NLP の将来の動向についても説明されており、専門家の洞察も含まれているため、Python を使用して実際のビジネス問題を解決しようとしている初心者と経験豊富な実務家の両方にとって貴重なリソースとなっています。",
                                        '한국인': "Mastering NLP from Foundations to LLMs는 Lior Gazit과 Meysam Ghaffari가 저술하고 2024년 4월 26일에 출판한 포괄적인 가이드입니다. 이 책은 기계 학습의 수학적 기초에서 시작하여 대규모 언어 모델(LLM)을 포함하는 고급 애플리케이션으로 진행되는 자연어 처리(NLP) 기술에 대한 심층적인 소개를 제공합니다. 텍스트 전처리, 텍스트 분류를 위한 기존 기계 학습 방법, 딥 러닝 언어 모델과 같은 필수 주제를 다룹니다. 또한 저자는 LLM의 이론, 설계 및 구현을 탐구하고 전반적으로 실용적인 Python 코드 샘플을 제공합니다. 이 책은 또한 NLP의 미래 동향에 대해 논의하고 전문가의 통찰력을 포함하여 Python을 사용하여 실제 비즈니스 문제를 해결하려는 초보자와 숙련된 실무자 모두에게 귀중한 리소스가 됩니다.",
                                        'Español': "Mastering NLP from Foundations to LLMs es una guía completa escrita por Lior Gazit y Meysam Ghaffari, publicada el 26 de abril de 2024. Este libro ofrece una introducción detallada a las técnicas de procesamiento del lenguaje natural (PLN), comenzando con los fundamentos matemáticos del aprendizaje automático y avanzando hacia aplicaciones avanzadas que involucran modelos de lenguaje grandes (LLM). Abarca temas esenciales como el preprocesamiento de texto, los métodos tradicionales de aprendizaje automático para la clasificación de texto y los modelos de lenguaje de aprendizaje profundo. Además, los autores exploran la teoría, el diseño y la implementación de los LLM, proporcionando ejemplos prácticos de código Python en todo momento. El libro también analiza las tendencias futuras en PNL e incluye perspectivas de expertos, lo que lo convierte en un recurso valioso tanto para principiantes como para profesionales experimentados que buscan resolver problemas comerciales del mundo real utilizando Python.",
                                        'हिंदी': "मास्टरिंग एनएलपी फ्रॉम फाउंडेशन्स टू एलएलएम लियोर गज़िट और मेसम गफ़री द्वारा लिखित एक व्यापक गाइड है, जिसे 26 अप्रैल, 2024 को प्रकाशित किया गया था। यह पुस्तक नेचुरल लैंग्वेज प्रोसेसिंग (एनएलपी) तकनीकों का गहन परिचय प्रदान करती है, जो मशीन लर्निंग के गणितीय आधारों से शुरू होकर लार्ज लैंग्वेज मॉडल्स (एलएलएम) से जुड़े उन्नत अनुप्रयोगों तक आगे बढ़ती है। इसमें टेक्स्ट प्रीप्रोसेसिंग, टेक्स्ट वर्गीकरण के लिए पारंपरिक मशीन लर्निंग विधियाँ और डीप लर्निंग लैंग्वेज मॉडल जैसे आवश्यक विषय शामिल हैं। इसके अतिरिक्त, लेखक एलएलएम के सिद्धांत, डिज़ाइन और कार्यान्वयन का पता लगाते हैं, जो पूरे समय व्यावहारिक पायथन कोड नमूने प्रदान करते हैं। पुस्तक एनएलपी में भविष्य के रुझानों पर भी चर्चा करती है और इसमें विशेषज्ञ अंतर्दृष्टि शामिल है, जो इसे पायथन का उपयोग करके वास्तविक दुनिया की व्यावसायिक समस्याओं को हल करने का लक्ष्य रखने वाले शुरुआती और अनुभवी चिकित्सकों दोनों के लिए एक मूल्यवान संसाधन बनाती है।",
                                        'Português': "Mastering NLP from Foundations to LLMs é um guia completo da autoria de Lior Gazit e Meysam Ghaffari, publicado a 26 de abril de 2024. Este livro oferece uma introdução detalhada às técnicas de Processamento de Linguagem Natural (PLN), começando pelos fundamentos matemáticos da aprendizagem automática. e progredindo para aplicações avançadas envolvendo Large Language Models (LLMs). Abrange tópicos essenciais como o pré-processamento de texto, os métodos tradicionais de aprendizagem automática para classificação de texto e os modelos de linguagem de aprendizagem profunda. Além disso, os autores exploram a teoria, o design e a implementação de LLMs, fornecendo exemplos práticos de código Python. O livro também discute as tendências futuras em PNL e inclui insights de especialistas, tornando-o um recurso valioso tanto para principiantes como para profissionais experientes que desejam resolver problemas de negócios do mundo real utilizando Python.",
                                        'বাংলা': "ফাউন্ডেশন থেকে এলএলএম পর্যন্ত এনএলপি মাস্টারিং হল লিওর গাজিট এবং মেসাম গাফফারি দ্বারা রচিত একটি বিস্তৃত নির্দেশিকা, যা 26 এপ্রিল, 2024-এ প্রকাশিত হয়েছে। এই বইটি মেশিন লার্নিংয়ের গাণিতিক ভিত্তি দিয়ে শুরু করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (এনএলপি) কৌশলগুলির একটি গভীরভাবে পরিচিতি প্রদান করে। এবং বৃহৎ ভাষার মডেল জড়িত উন্নত অ্যাপ্লিকেশনে অগ্রগতি (এলএলএম)। এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন পাঠ্য প্রিপ্রসেসিং, পাঠ্য শ্রেণিবিন্যাসের জন্য প্রথাগত মেশিন লার্নিং পদ্ধতি এবং গভীর শিক্ষার ভাষা মডেল। অতিরিক্তভাবে, লেখকরা LLM-এর তত্ত্ব, নকশা এবং বাস্তবায়ন অন্বেষণ করেন, সর্বত্র ব্যবহারিক পাইথন কোড নমুনা প্রদান করেন। বইটি NLP-এর ভবিষ্যৎ প্রবণতা নিয়েও আলোচনা করে এবং এতে বিশেষজ্ঞের অন্তর্দৃষ্টি অন্তর্ভুক্ত রয়েছে, যা পাইথন ব্যবহার করে বাস্তব-বিশ্বের ব্যবসায়িক সমস্যা সমাধানের লক্ষ্যে নতুন এবং অভিজ্ঞ অনুশীলনকারীদের উভয়ের জন্যই এটিকে একটি মূল্যবান সম্পদ করে তুলেছে।",
                                        'عَرَبِيّ': "يعد كتاب Mastering NLP from Foundations to LLMs دليلاً شاملاً من تأليف ليور جازيت وميسام غفاري، ونُشر في 26 أبريل 2024. يقدم هذا الكتاب مقدمة متعمقة لتقنيات معالجة اللغة الطبيعية (NLP)، بدءًا من الأسس الرياضية للتعلم الآلي والتقدم إلى التطبيقات المتقدمة التي تتضمن نماذج اللغة الكبيرة (LLMs). ويغطي موضوعات أساسية مثل معالجة النصوص مسبقًا، وطرق التعلم الآلي التقليدية لتصنيف النصوص، ونماذج اللغة للتعلم العميق. بالإضافة إلى ذلك، يستكشف المؤلفون نظرية وتصميم وتنفيذ نماذج اللغة الكبيرة، مما يوفر عينات عملية من أكواد بايثون في جميع أنحاء الكتاب. يناقش الكتاب أيضًا الاتجاهات المستقبلية في معالجة اللغة الطبيعية ويتضمن رؤى الخبراء، مما يجعله موردًا قيمًا للمبتدئين والممارسين ذوي الخبرة الذين يهدفون إلى حل مشاكل الأعمال في العالم الحقيقي باستخدام بايثون.",
                                        'فارسی': "تسلط بر NLP از مبانی تا LLM یک راهنمای جامع است که توسط لیور گازیت و میثم غفاری منتشر شده است که در 26 آوریل 2024 منتشر شده است. این کتاب مقدمه ای عمیق بر تکنیک های پردازش زبان طبیعی (NLP) ارائه می دهد که با مبانی ریاضی یادگیری ماشین شروع می شود. و پیشرفت به سمت برنامه های کاربردی پیشرفته شامل مدل های زبان بزرگ (LLM). موضوعات ضروری مانند پیش پردازش متن، روش های سنتی یادگیری ماشینی برای طبقه بندی متن و مدل های زبان یادگیری عمیق را پوشش می دهد. علاوه بر این، نویسندگان نظریه، طراحی و پیاده سازی LLM ها را بررسی می کنند و نمونه های عملی کد پایتون را در سراسر آن ارائه می کنند. این کتاب همچنین روندهای آینده در NLP را مورد بحث قرار می‌دهد و شامل بینش‌های متخصص می‌شود، که آن را به منبعی ارزشمند برای مبتدیان و متخصصان با تجربه تبدیل می‌کند که هدفشان حل مشکلات تجاری دنیای واقعی با استفاده از پایتون است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/4 - Mastering NLP from Foundations to LLMs.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/English/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/German/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Chinese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Russian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/French/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Japanese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Korean/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Spanish/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Hindi/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Portugues/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Bengali/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Arabic/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Persian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                },
                        },
                        // -- > Flutter - 1 : Flutter Complete Reference Book
                        {
                                "title": {
                                        'English': "Flutter Complete Reference",
                                        'Deutsch': "Flutter Complete Reference",
                                        '中国人': "Flutter Complete Reference",
                                        'Русский': "Flutter Complete Reference",
                                        'Français': "Flutter Complete Reference",
                                        '日本語': "Flutter Complete Reference",
                                        '한국인': "Flutter Complete Reference",
                                        'Español': "Flutter Complete Reference",
                                        'हिंदी': "Flutter Complete Reference",
                                        'Português': "Flutter Complete Reference",
                                        'বাংলা': "Flutter Complete Reference",
                                        'عَرَبِيّ': "Flutter Complete Reference",
                                        'فارسی': "Flutter Complete Reference",
                                },
                                "description": {
                                        'English': "Flutter Complete Reference by Alberto Miola is a comprehensive guide for developers seeking to master Flutter, Google's open-source UI toolkit for crafting natively compiled applications. The book provides a deep dive into the fundamentals of Flutter, covering essential topics like widget architecture, state management, animations, and advanced techniques for creating responsive and high-performance apps. With practical examples and detailed explanations, it serves as both a beginner-friendly introduction and a valuable resource for experienced developers looking to refine their skills. Alberto Miola combines clarity with hands-on approaches, making it an indispensable reference for Flutter enthusiasts.",
                                        'Deutsch': "Flutter Complete Reference von Alberto Miola ist ein umfassender Leitfaden für Entwickler, die Flutter beherrschen möchten, Googles Open-Source-UI-Toolkit zum Erstellen nativ kompilierter Anwendungen. Das Buch bietet einen tiefen Einblick in die Grundlagen von Flutter und behandelt wichtige Themen wie Widget-Architektur, Statusverwaltung, Animationen und fortgeschrittene Techniken zum Erstellen reaktionsfähiger und leistungsstarker Apps. Mit praktischen Beispielen und detaillierten Erklärungen dient es sowohl als anfängerfreundliche Einführung als auch als wertvolle Ressource für erfahrene Entwickler, die ihre Fähigkeiten verfeinern möchten. Alberto Miola kombiniert Klarheit mit praktischen Ansätzen und macht es zu einem unverzichtbaren Nachschlagewerk für Flutter-Enthusiasten.",
                                        '中国人': "Alberto Miola 编写的《Flutter 完整参考》是一本全面的指南，适合希望掌握 Flutter 的开发人员，Flutter 是 Google 的开源 UI 工具包，用于制作原生编译的应用程序。本书深入探讨了 Flutter 的基础知识，涵盖了小部件架构、状态管理、动画和创建响应式高性能应用程序的高级技术等基本主题。通过实际示例和详细解释，它既是初学者友好的入门书，也是希望提高技能的经验丰富的开发人员的宝贵资源。Alberto Miola 将清晰度与实践方法相结合，使其成为 Flutter 爱好者不可或缺的参考资料。",
                                        'Русский': "Flutter Complete Reference Альберто Миолы — это всеобъемлющее руководство для разработчиков, стремящихся освоить Flutter, набор инструментов пользовательского интерфейса с открытым исходным кодом от Google для создания скомпилированных приложений. Книга предлагает глубокое погружение в основы Flutter, охватывая такие важные темы, как архитектура виджетов, управление состоянием, анимация и передовые методы создания адаптивных и высокопроизводительных приложений. С практическими примерами и подробными объяснениями она служит как введением для новичков, так и ценным ресурсом для опытных разработчиков, желающих усовершенствовать свои навыки. Альберто Миола сочетает ясность с практическими подходами, что делает ее незаменимым справочником для энтузиастов Flutter.",
                                        'Français': "Flutter Complete Reference d'Alberto Miola est un guide complet pour les développeurs qui cherchent à maîtriser Flutter, la boîte à outils d'interface utilisateur open source de Google pour la création d'applications compilées en mode natif. Le livre propose une plongée en profondeur dans les fondamentaux de Flutter, couvrant des sujets essentiels comme l'architecture des widgets, la gestion des états, les animations et les techniques avancées pour créer des applications réactives et performantes. Avec des exemples pratiques et des explications détaillées, il sert à la fois d'introduction conviviale pour les débutants et de ressource précieuse pour les développeurs expérimentés qui cherchent à perfectionner leurs compétences. Alberto Miola allie clarté et approches pratiques, ce qui en fait une référence indispensable pour les passionnés de Flutter.",
                                        '日本語': "Alberto Miola 著の『Flutter Complete Reference』は、ネイティブ コンパイル アプリケーションを作成するための Google のオープンソース UI ツールキットである Flutter を習得したい開発者向けの総合ガイドです。本書では、ウィジェット アーキテクチャ、状態管理、アニメーション、レスポンシブで高性能なアプリケーションを作成するための高度なテクニックなど、Flutter の基礎を深く掘り下げて解説しています。実用的な例と詳細な説明が盛り込まれており、初心者向けの入門書としてだけでなく、スキルを磨きたい経験豊富な開発者にとって貴重なリソースとしても役立ちます。Alberto Miola は、明快さと実践的なアプローチを組み合わせており、Flutter 愛好家にとって欠かせないリファレンスとなっています。",
                                        '한국인': "Alberto Miola의 Flutter Complete Reference는 네이티브 컴파일 애플리케이션을 제작하기 위한 Google의 오픈소스 UI 툴킷인 Flutter를 마스터하려는 개발자를 위한 포괄적인 가이드입니다. 이 책은 위젯 아키텍처, 상태 관리, 애니메이션 및 반응형 고성능 앱을 만드는 고급 기술과 같은 필수 주제를 다루는 Flutter의 기본에 대한 심층적인 분석을 제공합니다. 실용적인 예제와 자세한 설명이 포함되어 있어 초보자에게 친숙한 소개서이자 기술을 다듬고자 하는 숙련된 개발자에게 귀중한 리소스 역할을 합니다. Alberto Miola는 명확성과 실무적 접근 방식을 결합하여 Flutter 애호가에게 없어서는 안 될 참고 자료가 되었습니다.",
                                        'Español': "Flutter Complete Reference de Alberto Miola es una guía completa para desarrolladores que buscan dominar Flutter, el kit de herramientas de interfaz de usuario de código abierto de Google para crear aplicaciones compiladas de forma nativa. El libro ofrece una inmersión profunda en los fundamentos de Flutter y cubre temas esenciales como la arquitectura de widgets, la gestión de estados, las animaciones y las técnicas avanzadas para crear aplicaciones responsivas y de alto rendimiento. Con ejemplos prácticos y explicaciones detalladas, sirve como una introducción para principiantes y un recurso valioso para desarrolladores experimentados que buscan perfeccionar sus habilidades. Alberto Miola combina claridad con enfoques prácticos, lo que lo convierte en una referencia indispensable para los entusiastas de Flutter.",
                                        'हिंदी': "अल्बर्टो मिओला द्वारा लिखित फ़्लटर कम्प्लीट रेफरेंस उन डेवलपर्स के लिए एक व्यापक गाइड है जो फ़्लटर में महारत हासिल करना चाहते हैं, यह नेटिवली कम्पाइल किए गए एप्लिकेशन तैयार करने के लिए Google का ओपन-सोर्स UI टूलकिट है। यह पुस्तक फ़्लटर के मूल सिद्धांतों में गहराई से गोता लगाती है, जिसमें विजेट आर्किटेक्चर, स्टेट मैनेजमेंट, एनिमेशन और रिस्पॉन्सिव और हाई-परफ़ॉर्मेंस ऐप बनाने के लिए उन्नत तकनीकों जैसे आवश्यक विषयों को शामिल किया गया है। व्यावहारिक उदाहरणों और विस्तृत व्याख्याओं के साथ, यह शुरुआती लोगों के लिए एक अनुकूल परिचय और अपने कौशल को निखारने के इच्छुक अनुभवी डेवलपर्स के लिए एक मूल्यवान संसाधन दोनों के रूप में कार्य करता है। अल्बर्टो मिओला स्पष्टता को व्यावहारिक दृष्टिकोणों के साथ जोड़ता है, जो इसे फ़्लटर उत्साही लोगों के लिए एक अपरिहार्य संदर्भ बनाता है।",
                                        'Português': "Flutter Complete Reference de Alberto Miola é um guia completo para programadores que procuram dominar o Flutter, o kit de ferramentas de UI de código aberto da Google para criar aplicações compiladas nativamente. O livro proporciona um mergulho profundo nos fundamentos do Flutter, abordando tópicos essenciais como a arquitetura de widgets, a gestão de estado, as animações e as técnicas avançadas para criar aplicações responsivas e de alto desempenho. Com exemplos práticos e explicações detalhadas, serve tanto como uma introdução para principiantes como um recurso valioso para programadores experientes que procuram melhorar as suas capacidades. Alberto Miola combina clareza com abordagens práticas, tornando-o uma referência indispensável para os entusiastas do Flutter.",
                                        'বাংলা': "অ্যালবার্তো মিওলার ফ্লাটার কমপ্লিট রেফারেন্স হল ফ্লাটারে দক্ষতা অর্জন করতে চাওয়া ডেভেলপারদের জন্য একটি বিস্তৃত নির্দেশিকা, নেটিভলি কম্পাইল করা অ্যাপ্লিকেশন তৈরির জন্য Google-এর ওপেন-সোর্স UI টুলকিট। বইটি ফ্লটারের মৌলিক বিষয়গুলির মধ্যে গভীর ডুব দেয়, উইজেট আর্কিটেকচার, রাষ্ট্র পরিচালনা, অ্যানিমেশন এবং প্রতিক্রিয়াশীল এবং উচ্চ-পারফরম্যান্স অ্যাপ তৈরির জন্য উন্নত কৌশলগুলির মতো প্রয়োজনীয় বিষয়গুলিকে কভার করে৷ ব্যবহারিক উদাহরণ এবং বিশদ ব্যাখ্যা সহ, এটি একটি শিক্ষানবিস-বন্ধুত্বপূর্ণ ভূমিকা এবং তাদের দক্ষতা পরিমার্জিত করার জন্য অভিজ্ঞ বিকাশকারীদের জন্য একটি মূল্যবান সংস্থান উভয়ই কাজ করে৷ আলবার্তো মিওলা হ্যান্ডস-অন পন্থাগুলির সাথে স্পষ্টতাকে একত্রিত করে, এটিকে ফ্লটার উত্সাহীদের জন্য একটি অপরিহার্য রেফারেন্স করে তোলে৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Complete Reference من تأليف Alberto Miola دليلاً شاملاً للمطورين الذين يسعون إلى إتقان Flutter، وهي مجموعة أدوات واجهة المستخدم مفتوحة المصدر من Google لإنشاء تطبيقات مجمعة محليًا. يوفر الكتاب نظرة متعمقة في أساسيات Flutter، ويغطي موضوعات أساسية مثل بنية الأداة، وإدارة الحالة، والرسوم المتحركة، والتقنيات المتقدمة لإنشاء تطبيقات سريعة الاستجابة وعالية الأداء. مع أمثلة عملية وشروحات مفصلة، ​​فهو بمثابة مقدمة سهلة للمبتدئين ومورد قيم للمطورين ذوي الخبرة الذين يتطلعون إلى صقل مهاراتهم. يجمع Alberto Miola بين الوضوح والأساليب العملية، مما يجعله مرجعًا لا غنى عنه لعشاق Flutter.",
                                        'فارسی': "مرجع کامل Flutter توسط Alberto Miola یک راهنمای جامع برای توسعه دهندگانی است که به دنبال تسلط بر Flutter، جعبه ابزار UI منبع باز Google برای ایجاد برنامه های کاربردی کامپایل شده بومی هستند. این کتاب به بررسی اصول فلاتر می پردازد و موضوعات ضروری مانند معماری ویجت، مدیریت حالت، انیمیشن ها و تکنیک های پیشرفته برای ایجاد اپلیکیشن های پاسخگو و با کارایی بالا را پوشش می دهد. با مثال‌های عملی و توضیحات مفصل، هم به‌عنوان مقدمه‌ای مناسب برای مبتدیان و هم منبعی ارزشمند برای توسعه‌دهندگان با تجربه ای است که به دنبال اصلاح مهارت‌های خود هستند. آلبرتو میولا وضوح را با رویکردهای عملی ترکیب می کند و آن را به مرجعی ضروری برای علاقه مندان به فلاتر تبدیل می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/2 - Flutter Complete Reference.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/2%20-%20Flutter%20Complete%20Reference.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/2%20-%20Flutter%20Complete%20Reference.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/2%20-%20Flutter%20Complete%20Reference.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/2%20-%20Flutter%20Complete%20Reference.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/2%20-%20Flutter%20Complete%20Reference.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/2%20-%20Flutter%20Complete%20Reference.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/2%20-%20Flutter%20Complete%20Reference.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/2%20-%20Flutter%20Complete%20Reference.md",
                                },
                        },
                        // -- > Flutter - 2 : Flutter Apprentice
                        {
                                "title": {
                                        'English': "Flutter Apprentice",
                                        'Deutsch': "Flutter Apprentice",
                                        '中国人': "Flutter Apprentice",
                                        'Русский': "Flutter Apprentice",
                                        'Français': "Flutter Apprentice",
                                        '日本語': "Flutter Apprentice",
                                        '한국인': "Flutter Apprentice",
                                        'Español': "Flutter Apprentice",
                                        'हिंदी': "Flutter Apprentice",
                                        'Português': "Flutter Apprentice",
                                        'বাংলা': "Flutter Apprentice",
                                        'عَرَبِيّ': "Flutter Apprentice",
                                        'فارسی': "Flutter Apprentice",
                                },
                                "description": {
                                        'English': "Flutter Apprentice is a comprehensive guide for beginners to learn Flutter, a popular open-source framework for building cross-platform mobile applications. Authored by a team of experienced developers, the book provides a hands-on, project-based approach to mastering Flutter. It covers the fundamentals of Dart programming, state management, UI design, and integrating features like animations and APIs. Each chapter builds on practical projects, enabling readers to develop real-world apps while gaining confidence in their skills. With clear explanations, step-by-step instructions, and tips to avoid common pitfalls, Flutter Apprentice is an excellent resource for aspiring app developers who want to bring their ideas to life on Android and iOS platforms.",
                                        'Deutsch': "Flutter Apprentice ist ein umfassender Leitfaden für Anfänger zum Erlernen von Flutter, einem beliebten Open-Source-Framework zum Erstellen plattformübergreifender mobiler Anwendungen. Das von einem Team erfahrener Entwickler verfasste Buch bietet einen praktischen, projektbasierten Ansatz zum Erlernen von Flutter. Es behandelt die Grundlagen der Dart-Programmierung, der Zustandsverwaltung, des UI-Designs und der Integration von Funktionen wie Animationen und APIs. Jedes Kapitel basiert auf praktischen Projekten, sodass die Leser reale Apps entwickeln und gleichzeitig Vertrauen in ihre Fähigkeiten gewinnen können. Mit klaren Erklärungen, Schritt-für-Schritt-Anleitungen und Tipps zum Vermeiden häufiger Fehler ist Flutter Apprentice eine hervorragende Ressource für angehende App-Entwickler, die ihre Ideen auf Android- und iOS-Plattformen zum Leben erwecken möchten.",
                                        '中国人': "Flutter Apprentice 是一本全面的指南，帮助初学者学习 Flutter，Flutter 是一种用于构建跨平台移动应用程序的流行开源框架。本书由一支经验丰富的开发人员团队撰写，提供了一种基于项目的动手实践方法来掌握 Flutter。它涵盖了 Dart 编程、状态管理、UI 设计和集成动画和 API 等功能的基础知识。每一章都以实际项目为基础，使读者能够开发真实的应用程序，同时增强对自己技能的信心。Flutter Apprentice 具有清晰的解释、分步说明和避免常见陷阱的技巧，是希望在 Android 和 iOS 平台上实现自己想法的有抱负的应用程序开发人员的绝佳资源。",
                                        'Русский': "Flutter Apprentice — это полное руководство для начинающих по изучению Flutter, популярного фреймворка с открытым исходным кодом для создания кроссплатформенных мобильных приложений. Книга, написанная командой опытных разработчиков, предлагает практический подход к освоению Flutter на основе проектов. Она охватывает основы программирования Dart, управления состоянием, проектирования пользовательского интерфейса и интеграции таких функций, как анимация и API. Каждая глава основана на практических проектах, что позволяет читателям разрабатывать реальные приложения, обретая уверенность в своих навыках. Благодаря понятным объяснениям, пошаговым инструкциям и советам по избежанию распространенных ошибок Flutter Apprentice является отличным ресурсом для начинающих разработчиков приложений, которые хотят воплотить свои идеи в жизнь на платформах Android и iOS.",
                                        'Français': "Flutter Apprentice est un guide complet destiné aux débutants pour apprendre Flutter, un framework open source populaire pour la création d'applications mobiles multiplateformes. Rédigé par une équipe de développeurs expérimentés, le livre propose une approche pratique et basée sur des projets pour maîtriser Flutter. Il couvre les fondamentaux de la programmation Dart, la gestion des états, la conception d'interface utilisateur et l'intégration de fonctionnalités telles que les animations et les API. Chaque chapitre s'appuie sur des projets pratiques, permettant aux lecteurs de développer des applications concrètes tout en gagnant en confiance dans leurs compétences. Avec des explications claires, des instructions étape par étape et des conseils pour éviter les pièges courants, Flutter Apprentice est une excellente ressource pour les développeurs d'applications en herbe qui souhaitent donner vie à leurs idées sur les plateformes Android et iOS.",
                                        '日本語': "Flutter Apprentice は、クロスプラットフォーム モバイル アプリケーションを構築するための人気のオープン ソース フレームワークである Flutter を初心者が学習するための総合ガイドです。経験豊富な開発者チームが執筆したこの本は、Flutter を習得するための実践的なプロジェクト ベースのアプローチを提供します。Dart プログラミング、状態管理、UI デザイン、アニメーションや API などの機能の統合の基礎をカバーしています。各章は実践的なプロジェクトに基づいているため、読者はスキルに自信を持ちながら、実際のアプリを開発できます。わかりやすい説明、ステップ バイ ステップの手順、よくある落とし穴を避けるためのヒントが満載の Flutter Apprentice は、Android および iOS プラットフォームでアイデアを実現したい意欲的なアプリ開発者にとって優れたリソースです。",
                                        '한국인': "Flutter Apprentice는 크로스 플랫폼 모바일 애플리케이션을 구축하기 위한 인기 있는 오픈소스 프레임워크인 Flutter를 초보자가 배우기 위한 포괄적인 가이드입니다. 숙련된 개발자 팀이 저술한 이 책은 Flutter를 마스터하기 위한 실무적이고 프로젝트 기반의 접근 방식을 제공합니다. Dart 프로그래밍, 상태 관리, UI 디자인, 애니메이션 및 API와 같은 기능 통합의 기본 사항을 다룹니다. 각 장은 실용적인 프로젝트를 기반으로 하여 독자가 기술에 대한 자신감을 얻는 동시에 실제 앱을 개발할 수 있도록 합니다. 명확한 설명, 단계별 지침, 일반적인 함정을 피하기 위한 팁이 포함된 Flutter Apprentice는 Android 및 iOS 플랫폼에서 아이디어를 실현하고자 하는 야심 찬 앱 개발자에게 훌륭한 리소스입니다.",
                                        'Español': "Flutter Apprentice es una guía completa para principiantes que desean aprender Flutter, un popular marco de código abierto para crear aplicaciones móviles multiplataforma. Escrito por un equipo de desarrolladores experimentados, el libro ofrece un enfoque práctico basado en proyectos para dominar Flutter. Abarca los fundamentos de la programación Dart, la gestión de estados, el diseño de la interfaz de usuario y la integración de funciones como animaciones y API. Cada capítulo se basa en proyectos prácticos, lo que permite a los lectores desarrollar aplicaciones del mundo real mientras ganan confianza en sus habilidades. Con explicaciones claras, instrucciones paso a paso y consejos para evitar errores comunes, Flutter Apprentice es un excelente recurso para los aspirantes a desarrolladores de aplicaciones que desean dar vida a sus ideas en las plataformas Android e iOS.",
                                        'हिंदी': "फ़्लटर अप्रेंटिस शुरुआती लोगों के लिए फ़्लटर सीखने के लिए एक व्यापक मार्गदर्शिका है, जो क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने के लिए एक लोकप्रिय ओपन-सोर्स फ़्रेमवर्क है। अनुभवी डेवलपर्स की एक टीम द्वारा लिखित, यह पुस्तक फ़्लटर में महारत हासिल करने के लिए एक व्यावहारिक, प्रोजेक्ट-आधारित दृष्टिकोण प्रदान करती है। इसमें डार्ट प्रोग्रामिंग, स्टेट मैनेजमेंट, UI डिज़ाइन और एनिमेशन और API जैसी सुविधाओं को एकीकृत करने की बुनियादी बातों को शामिल किया गया है। प्रत्येक अध्याय व्यावहारिक परियोजनाओं पर आधारित है, जिससे पाठकों को अपने कौशल में आत्मविश्वास प्राप्त करते हुए वास्तविक दुनिया के ऐप विकसित करने में सक्षम बनाया जा सके। स्पष्ट स्पष्टीकरण, चरण-दर-चरण निर्देश और सामान्य नुकसानों से बचने के सुझावों के साथ, फ़्लटर अप्रेंटिस महत्वाकांक्षी ऐप डेवलपर्स के लिए एक उत्कृष्ट संसाधन है जो अपने विचारों को Android और iOS प्लेटफ़ॉर्म पर जीवंत करना चाहते हैं।",
                                        'Português': "Flutter Apprentice é um guia completo para principiantes aprenderem Flutter, uma estrutura popular de código aberto para a construção de aplicações móveis multiplataforma. Da autoria de uma equipa de programadores experientes, o livro oferece uma abordagem prática e baseada em projetos para dominar o Flutter. Abrange os fundamentos da programação Dart, gestão de estado, design de UI e integração de recursos como animações e APIs. Cada capítulo baseia-se em projetos práticos, permitindo aos leitores desenvolver aplicações do mundo real enquanto ganham confiança nas suas capacidades. Com explicações claras, instruções passo a passo e dicas para evitar armadilhas comuns, Flutter Apprentice é um excelente recurso para aspirantes a programadores de aplicações que desejam dar vida às suas ideias nas plataformas Android e iOS.",
                                        'বাংলা': "ফ্লটার অ্যাপ্রেন্টিস হল নতুনদের জন্য ফ্লটার শেখার জন্য একটি ব্যাপক নির্দেশিকা, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরির জন্য একটি জনপ্রিয় ওপেন-সোর্স ফ্রেমওয়ার্ক। অভিজ্ঞ ডেভেলপারদের একটি দল দ্বারা রচিত, বইটি ফ্লটারকে আয়ত্ত করার জন্য একটি হ্যান্ডস-অন, প্রকল্প-ভিত্তিক পদ্ধতি প্রদান করে। এটি ডার্ট প্রোগ্রামিং, স্টেট ম্যানেজমেন্ট, UI ডিজাইন এবং অ্যানিমেশন এবং API-এর মতো বৈশিষ্ট্যগুলিকে একীভূত করার মৌলিক বিষয়গুলি কভার করে৷ প্রতিটি অধ্যায় ব্যবহারিক প্রকল্পের উপর ভিত্তি করে তৈরি করে, পাঠকদের তাদের দক্ষতার প্রতি আস্থা অর্জনের সাথে সাথে বাস্তব-বিশ্বের অ্যাপ বিকাশ করতে সক্ষম করে। স্পষ্ট ব্যাখ্যা, ধাপে ধাপে নির্দেশাবলী এবং সাধারণ সমস্যাগুলি এড়াতে টিপস সহ, Flutter Apprentice উচ্চাকাঙ্ক্ষী অ্যাপ বিকাশকারীদের জন্য একটি চমৎকার সংস্থান যারা Android এবং iOS প্ল্যাটফর্মে তাদের ধারণাগুলিকে জীবন্ত করতে চান৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Apprentice دليلاً شاملاً للمبتدئين لتعلم Flutter، وهو إطار عمل مفتوح المصدر شائع لبناء تطبيقات جوال متعددة الأنظمة. يقدم الكتاب، الذي ألفه فريق من المطورين ذوي الخبرة، نهجًا عمليًا قائمًا على المشروع لإتقان Flutter. ويغطي أساسيات برمجة Dart وإدارة الحالة وتصميم واجهة المستخدم ودمج ميزات مثل الرسوم المتحركة وواجهات برمجة التطبيقات. يعتمد كل فصل على مشاريع عملية، مما يتيح للقراء تطوير تطبيقات واقعية مع اكتساب الثقة في مهاراتهم. مع التفسيرات الواضحة والتعليمات خطوة بخطوة والنصائح لتجنب الأخطاء الشائعة، يعد Flutter Apprentice موردًا ممتازًا لمطوري التطبيقات الطموحين الذين يرغبون في إحياء أفكارهم على منصات Android وiOS.",
                                        'فارسی': "Flutter Apprentice یک راهنمای جامع برای مبتدیان برای یادگیری Flutter است، یک فریم ورک منبع باز محبوب برای ساخت اپلیکیشن های موبایلی چند پلتفرمی. این کتاب که توسط تیمی از توسعه دهندگان با تجربه نوشته شده است، رویکردی عملی و مبتنی بر پروژه برای تسلط بر فلاتر ارائه می دهد. این مبانی برنامه نویسی Dart، مدیریت حالت، طراحی UI، و یکپارچه سازی ویژگی هایی مانند انیمیشن ها و API ها را پوشش می دهد. هر فصل بر اساس پروژه های عملی ساخته شده است و خوانندگان را قادر می سازد تا برنامه های دنیای واقعی را توسعه دهند و در عین حال به مهارت های خود اعتماد کنند. Flutter Apprentice با توضیحات واضح، دستورالعمل‌های گام به گام و نکاتی برای جلوگیری از مشکلات رایج، منبعی عالی برای توسعه‌دهندگان برنامه‌های مشتاقی است که می‌خواهند ایده‌های خود را در پلتفرم‌های اندروید و iOS زنده کنند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/1 - Flutter Apprentice.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/1%20-%20Flutter%20Apprentice.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/1%20-%20Flutter%20Apprentice.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/1%20-%20Flutter%20Apprentice.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/1%20-%20Flutter%20Apprentice.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/1%20-%20Flutter%20Apprentice.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/1%20-%20Flutter%20Apprentice.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/1%20-%20Flutter%20Apprentice.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/1%20-%20Flutter%20Apprentice.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/1%20-%20Flutter%20Apprentice.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/1%20-%20Flutter%20Apprentice.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/1%20-%20Flutter%20Apprentice.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/1%20-%20Flutter%20Apprentice.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/1%20-%20Flutter%20Apprentice.md",
                                },
                        },
                ],
                // -- >> AI Engineer
                "AI Engineer": [
                        // -- > NLP - 2 : Mastering NLP from Foundations to LLMs
                        {
                                "title": {
                                        'English': "Mastering NLP from Foundations to LLMs",
                                        'Deutsch': "Mastering NLP from Foundations to LLMs",
                                        '中国人': "Mastering NLP from Foundations to LLMs",
                                        'Русский': "Mastering NLP from Foundations to LLMs",
                                        'Français': "Mastering NLP from Foundations to LLMs",
                                        '日本語': "Mastering NLP from Foundations to LLMs",
                                        '한국인': "Mastering NLP from Foundations to LLMs",
                                        'Español': "Mastering NLP from Foundations to LLMs",
                                        'हिंदी': "Mastering NLP from Foundations to LLMs",
                                        'Português': "Mastering NLP from Foundations to LLMs",
                                        'বাংলা': "Mastering NLP from Foundations to LLMs",
                                        'عَرَبِيّ': "Mastering NLP from Foundations to LLMs",
                                        'فارسی': "Mastering NLP from Foundations to LLMs",
                                },
                                "description": {
                                        'English': "Mastering NLP from Foundations to LLMs is a comprehensive guide authored by Lior Gazit and Meysam Ghaffari, published on April 26, 2024. This book offers an in-depth introduction to Natural Language Processing (NLP) techniques, beginning with the mathematical foundations of machine learning and progressing to advanced applications involving Large Language Models (LLMs). It covers essential topics such as text preprocessing, traditional machine learning methods for text classification, and deep learning language models. Additionally, the authors explore the theory, design, and implementation of LLMs, providing practical Python code samples throughout. The book also discusses future trends in NLP and includes expert insights, making it a valuable resource for both beginners and experienced practitioners aiming to solve real-world business problems using Python. ",
                                        'Deutsch': "„Mastering NLP from Foundations to LLMs“ ist ein umfassender Leitfaden von Lior Gazit und Meysam Ghaffari, der am 26. April 2024 veröffentlicht wurde. Dieses Buch bietet eine ausführliche Einführung in Techniken der natürlichen Sprachverarbeitung (Natural Language Processing, NLP), beginnend mit den mathematischen Grundlagen des maschinellen Lernens und fortschreitend bis hin zu fortgeschrittenen Anwendungen mit Large Language Models (LLMs). Es behandelt wichtige Themen wie Textvorverarbeitung, traditionelle Methoden des maschinellen Lernens zur Textklassifizierung und Deep-Learning-Sprachmodelle. Darüber hinaus untersuchen die Autoren die Theorie, das Design und die Implementierung von LLMs und liefern durchgehend praktische Python-Codebeispiele. Das Buch diskutiert auch zukünftige Trends in der NLP und enthält Experteneinblicke, was es zu einer wertvollen Ressource sowohl für Anfänger als auch für erfahrene Praktiker macht, die reale Geschäftsprobleme mit Python lösen möchten.",
                                        '中国人': "《从基础到 LLM 精通 NLP》是一本综合指南，由 Lior Gazit 和 Meysam Ghaffari 撰写，出版于 2024 年 4 月 26 日。本书深入介绍了自然语言处理 (NLP) 技术，从机器学习的数学基础开始，逐步介绍涉及大型语言模型 (LLM) 的高级应用。它涵盖了文本预处理、用于文本分类的传统机器学习方法和深度学习语言模型等重要主题。此外，作者还探讨了 LLM 的理论、设计和实现，并提供了实用的 Python 代码示例。本书还讨论了 NLP 的未来趋势，并包含专家见解，使其成为初学者和经验丰富的从业者使用 Python 解决实际业务问题的宝贵资源。",
                                        'Русский': "Mastering NLP from Foundations to LLMs — это всеобъемлющее руководство, написанное Лиором Газитом и Мейсамом Гаффари, опубликованное 26 апреля 2024 года. Эта книга предлагает углубленное введение в методы обработки естественного языка (NLP), начиная с математических основ машинного обучения и заканчивая продвинутыми приложениями, включающими большие языковые модели (LLM). Она охватывает такие важные темы, как предварительная обработка текста, традиционные методы машинного обучения для классификации текста и модели языка глубокого обучения. Кроме того, авторы изучают теорию, проектирование и реализацию LLM, предоставляя практические примеры кода Python. В книге также обсуждаются будущие тенденции в области NLP и содержатся экспертные идеи, что делает ее ценным ресурсом как для новичков, так и для опытных практиков, стремящихся решать реальные бизнес-задачи с помощью Python.",
                                        'Français': "Mastering NLP from Foundations to LLMs est un guide complet rédigé par Lior Gazit et Meysam Ghaffari, publié le 26 avril 2024. Ce livre propose une introduction approfondie aux techniques de traitement du langage naturel (NLP), en commençant par les fondements mathématiques de l'apprentissage automatique et en progressant vers des applications avancées impliquant de grands modèles linguistiques (LLM). Il couvre des sujets essentiels tels que le prétraitement de texte, les méthodes traditionnelles d'apprentissage automatique pour la classification de texte et les modèles de langage d'apprentissage profond. De plus, les auteurs explorent la théorie, la conception et la mise en œuvre des LLM, en fournissant des exemples de code Python pratiques tout au long du livre. Le livre aborde également les tendances futures du NLP et comprend des points de vue d'experts, ce qui en fait une ressource précieuse pour les débutants et les praticiens expérimentés qui souhaitent résoudre des problèmes commerciaux réels à l'aide de Python.",
                                        '日本語': "『Mastering NLP from Foundations to LLMs』は、Lior Gazit と Meysam Ghaffari が執筆し、2024 年 4 月 26 日に出版された総合ガイドです。この本は、機械学習の数学的基礎から始まり、大規模言語モデル (LLM) を含む高度なアプリケーションまで、自然言語処理 (NLP) 技術の詳細な入門書です。テキスト前処理、テキスト分類のための従来の機械学習手法、ディープラーニング言語モデルなどの重要なトピックを取り上げています。さらに、著者は LLM の理論、設計、実装を探求し、全体を通して実用的な Python コードサンプルを提供しています。この本では、NLP の将来の動向についても説明されており、専門家の洞察も含まれているため、Python を使用して実際のビジネス問題を解決しようとしている初心者と経験豊富な実務家の両方にとって貴重なリソースとなっています。",
                                        '한국인': "Mastering NLP from Foundations to LLMs는 Lior Gazit과 Meysam Ghaffari가 저술하고 2024년 4월 26일에 출판한 포괄적인 가이드입니다. 이 책은 기계 학습의 수학적 기초에서 시작하여 대규모 언어 모델(LLM)을 포함하는 고급 애플리케이션으로 진행되는 자연어 처리(NLP) 기술에 대한 심층적인 소개를 제공합니다. 텍스트 전처리, 텍스트 분류를 위한 기존 기계 학습 방법, 딥 러닝 언어 모델과 같은 필수 주제를 다룹니다. 또한 저자는 LLM의 이론, 설계 및 구현을 탐구하고 전반적으로 실용적인 Python 코드 샘플을 제공합니다. 이 책은 또한 NLP의 미래 동향에 대해 논의하고 전문가의 통찰력을 포함하여 Python을 사용하여 실제 비즈니스 문제를 해결하려는 초보자와 숙련된 실무자 모두에게 귀중한 리소스가 됩니다.",
                                        'Español': "Mastering NLP from Foundations to LLMs es una guía completa escrita por Lior Gazit y Meysam Ghaffari, publicada el 26 de abril de 2024. Este libro ofrece una introducción detallada a las técnicas de procesamiento del lenguaje natural (PLN), comenzando con los fundamentos matemáticos del aprendizaje automático y avanzando hacia aplicaciones avanzadas que involucran modelos de lenguaje grandes (LLM). Abarca temas esenciales como el preprocesamiento de texto, los métodos tradicionales de aprendizaje automático para la clasificación de texto y los modelos de lenguaje de aprendizaje profundo. Además, los autores exploran la teoría, el diseño y la implementación de los LLM, proporcionando ejemplos prácticos de código Python en todo momento. El libro también analiza las tendencias futuras en PNL e incluye perspectivas de expertos, lo que lo convierte en un recurso valioso tanto para principiantes como para profesionales experimentados que buscan resolver problemas comerciales del mundo real utilizando Python.",
                                        'हिंदी': "मास्टरिंग एनएलपी फ्रॉम फाउंडेशन्स टू एलएलएम लियोर गज़िट और मेसम गफ़री द्वारा लिखित एक व्यापक गाइड है, जिसे 26 अप्रैल, 2024 को प्रकाशित किया गया था। यह पुस्तक नेचुरल लैंग्वेज प्रोसेसिंग (एनएलपी) तकनीकों का गहन परिचय प्रदान करती है, जो मशीन लर्निंग के गणितीय आधारों से शुरू होकर लार्ज लैंग्वेज मॉडल्स (एलएलएम) से जुड़े उन्नत अनुप्रयोगों तक आगे बढ़ती है। इसमें टेक्स्ट प्रीप्रोसेसिंग, टेक्स्ट वर्गीकरण के लिए पारंपरिक मशीन लर्निंग विधियाँ और डीप लर्निंग लैंग्वेज मॉडल जैसे आवश्यक विषय शामिल हैं। इसके अतिरिक्त, लेखक एलएलएम के सिद्धांत, डिज़ाइन और कार्यान्वयन का पता लगाते हैं, जो पूरे समय व्यावहारिक पायथन कोड नमूने प्रदान करते हैं। पुस्तक एनएलपी में भविष्य के रुझानों पर भी चर्चा करती है और इसमें विशेषज्ञ अंतर्दृष्टि शामिल है, जो इसे पायथन का उपयोग करके वास्तविक दुनिया की व्यावसायिक समस्याओं को हल करने का लक्ष्य रखने वाले शुरुआती और अनुभवी चिकित्सकों दोनों के लिए एक मूल्यवान संसाधन बनाती है।",
                                        'Português': "Mastering NLP from Foundations to LLMs é um guia completo da autoria de Lior Gazit e Meysam Ghaffari, publicado a 26 de abril de 2024. Este livro oferece uma introdução detalhada às técnicas de Processamento de Linguagem Natural (PLN), começando pelos fundamentos matemáticos da aprendizagem automática. e progredindo para aplicações avançadas envolvendo Large Language Models (LLMs). Abrange tópicos essenciais como o pré-processamento de texto, os métodos tradicionais de aprendizagem automática para classificação de texto e os modelos de linguagem de aprendizagem profunda. Além disso, os autores exploram a teoria, o design e a implementação de LLMs, fornecendo exemplos práticos de código Python. O livro também discute as tendências futuras em PNL e inclui insights de especialistas, tornando-o um recurso valioso tanto para principiantes como para profissionais experientes que desejam resolver problemas de negócios do mundo real utilizando Python.",
                                        'বাংলা': "ফাউন্ডেশন থেকে এলএলএম পর্যন্ত এনএলপি মাস্টারিং হল লিওর গাজিট এবং মেসাম গাফফারি দ্বারা রচিত একটি বিস্তৃত নির্দেশিকা, যা 26 এপ্রিল, 2024-এ প্রকাশিত হয়েছে। এই বইটি মেশিন লার্নিংয়ের গাণিতিক ভিত্তি দিয়ে শুরু করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (এনএলপি) কৌশলগুলির একটি গভীরভাবে পরিচিতি প্রদান করে। এবং বৃহৎ ভাষার মডেল জড়িত উন্নত অ্যাপ্লিকেশনে অগ্রগতি (এলএলএম)। এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন পাঠ্য প্রিপ্রসেসিং, পাঠ্য শ্রেণিবিন্যাসের জন্য প্রথাগত মেশিন লার্নিং পদ্ধতি এবং গভীর শিক্ষার ভাষা মডেল। অতিরিক্তভাবে, লেখকরা LLM-এর তত্ত্ব, নকশা এবং বাস্তবায়ন অন্বেষণ করেন, সর্বত্র ব্যবহারিক পাইথন কোড নমুনা প্রদান করেন। বইটি NLP-এর ভবিষ্যৎ প্রবণতা নিয়েও আলোচনা করে এবং এতে বিশেষজ্ঞের অন্তর্দৃষ্টি অন্তর্ভুক্ত রয়েছে, যা পাইথন ব্যবহার করে বাস্তব-বিশ্বের ব্যবসায়িক সমস্যা সমাধানের লক্ষ্যে নতুন এবং অভিজ্ঞ অনুশীলনকারীদের উভয়ের জন্যই এটিকে একটি মূল্যবান সম্পদ করে তুলেছে।",
                                        'عَرَبِيّ': "يعد كتاب Mastering NLP from Foundations to LLMs دليلاً شاملاً من تأليف ليور جازيت وميسام غفاري، ونُشر في 26 أبريل 2024. يقدم هذا الكتاب مقدمة متعمقة لتقنيات معالجة اللغة الطبيعية (NLP)، بدءًا من الأسس الرياضية للتعلم الآلي والتقدم إلى التطبيقات المتقدمة التي تتضمن نماذج اللغة الكبيرة (LLMs). ويغطي موضوعات أساسية مثل معالجة النصوص مسبقًا، وطرق التعلم الآلي التقليدية لتصنيف النصوص، ونماذج اللغة للتعلم العميق. بالإضافة إلى ذلك، يستكشف المؤلفون نظرية وتصميم وتنفيذ نماذج اللغة الكبيرة، مما يوفر عينات عملية من أكواد بايثون في جميع أنحاء الكتاب. يناقش الكتاب أيضًا الاتجاهات المستقبلية في معالجة اللغة الطبيعية ويتضمن رؤى الخبراء، مما يجعله موردًا قيمًا للمبتدئين والممارسين ذوي الخبرة الذين يهدفون إلى حل مشاكل الأعمال في العالم الحقيقي باستخدام بايثون.",
                                        'فارسی': "تسلط بر NLP از مبانی تا LLM یک راهنمای جامع است که توسط لیور گازیت و میثم غفاری منتشر شده است که در 26 آوریل 2024 منتشر شده است. این کتاب مقدمه ای عمیق بر تکنیک های پردازش زبان طبیعی (NLP) ارائه می دهد که با مبانی ریاضی یادگیری ماشین شروع می شود. و پیشرفت به سمت برنامه های کاربردی پیشرفته شامل مدل های زبان بزرگ (LLM). موضوعات ضروری مانند پیش پردازش متن، روش های سنتی یادگیری ماشینی برای طبقه بندی متن و مدل های زبان یادگیری عمیق را پوشش می دهد. علاوه بر این، نویسندگان نظریه، طراحی و پیاده سازی LLM ها را بررسی می کنند و نمونه های عملی کد پایتون را در سراسر آن ارائه می کنند. این کتاب همچنین روندهای آینده در NLP را مورد بحث قرار می‌دهد و شامل بینش‌های متخصص می‌شود، که آن را به منبعی ارزشمند برای مبتدیان و متخصصان با تجربه تبدیل می‌کند که هدفشان حل مشکلات تجاری دنیای واقعی با استفاده از پایتون است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/4 - Mastering NLP from Foundations to LLMs.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/English/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/German/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Chinese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Russian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/French/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Japanese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Korean/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Spanish/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Hindi/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Portugues/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Bengali/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Arabic/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Persian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                },
                        },
                        // -- > 3 : Modern Computer Vision with PyTorch
                        {
                                "title": {
                                        'English': "Modern Computer Vision with PyTorch English",
                                        'Deutsch': "Modern Computer Vision with PyTorch Deutsch",
                                        '中国人': "Modern Computer Vision with PyTorch 中国人",
                                        'Русский': "Modern Computer Vision with PyTorch Русский",
                                        'Français': "Modern Computer Vision with PyTorch Français",
                                        '日本語': "Modern Computer Vision with PyTorch 日本語",
                                        '한국인': "Modern Computer Vision with PyTorch 한국인",
                                        'Español': "Modern Computer Vision with PyTorch Español",
                                        'हिंदी': "Modern Computer Vision with PyTorch हिंदी",
                                        'Português': "Modern Computer Vision with PyTorch Português",
                                        'বাংলা': "Modern Computer Vision with PyTorch বাংলা",
                                        'عَرَبِيّ': "Modern Computer Vision with PyTorch عَرَبِيّ",
                                        'فارسی': "Modern Computer Vision with PyTorch فارسی",
                                },
                                "description": {
                                        'English': "Natural Language Processing with Python is a practical guide that introduces readers to the world of natural language processing using the Python programming language and the Natural Language Toolkit (NLTK). The book covers key NLP concepts and techniques, such as text preprocessing, tokenization, and part-of-speech tagging, while providing hands-on examples to help readers build and analyze language-based applications. It also addresses challenges in processing human language, like ambiguity and context, equipping readers with the tools to develop their own text analysis and language understanding projects.",
                                        'Deutsch': "„Natural Language Processing with Python“ ist ein praktischer Leitfaden, der Leser in die Welt der natürlichen Sprachverarbeitung mit der Programmiersprache Python und dem Natural Language Toolkit (NLTK) einführt. Das Buch behandelt wichtige NLP-Konzepte und -Techniken wie Textvorverarbeitung, Tokenisierung und Wortartenmarkierung und bietet praktische Beispiele, die Lesern beim Erstellen und Analysieren sprachbasierter Anwendungen helfen. Es behandelt auch Herausforderungen bei der Verarbeitung menschlicher Sprache, wie Mehrdeutigkeit und Kontext, und gibt Lesern die Werkzeuge an die Hand, die sie zum Entwickeln eigener Projekte zur Textanalyse und zum Sprachverständnis benötigen.",
                                        '中国人': "《使用 Python 进行自然语言处理》是一本实用指南，它使用 Python 编程语言和自然语言工具包 (NLTK) 向读者介绍自然语言处理的世界。本书涵盖了关键的 NLP 概念和技术，例如文本预处理、标记化和词性标记，同时提供了实际示例来帮助读者构建和分析基于语言的应用程序。它还解决了处理人类语言的挑战，例如歧义和上下文，为读者提供了开发自己的文本分析和语言理解项目的工具。",
                                        'Русский': "Natural Language Processing with Python — это практическое руководство, которое знакомит читателей с миром обработки естественного языка с использованием языка программирования Python и Natural Language Toolkit (NLTK). Книга охватывает ключевые концепции и методы NLP, такие как предварительная обработка текста, токенизация и разметка частей речи, а также предоставляет практические примеры, помогающие читателям создавать и анализировать приложения на основе языка. В ней также рассматриваются проблемы обработки человеческого языка, такие как неоднозначность и контекст, снабжая читателей инструментами для разработки собственных проектов по анализу текста и пониманию языка.",
                                        'Français': "Natural Language Processing with Python est un guide pratique qui présente aux lecteurs le monde du traitement du langage naturel à l'aide du langage de programmation Python et de la boîte à outils Natural Language Toolkit (NLTK). Le livre couvre les concepts et techniques clés du traitement du langage naturel, tels que le prétraitement de texte, la tokenisation et le balisage des parties du discours, tout en fournissant des exemples pratiques pour aider les lecteurs à créer et à analyser des applications basées sur le langage. Il aborde également les défis du traitement du langage humain, comme l'ambiguïté et le contexte, en dotant les lecteurs des outils nécessaires pour développer leurs propres projets d'analyse de texte et de compréhension du langage.",
                                        '日本語': "Python による自然言語処理は、Python プログラミング言語と Natural Language Toolkit (NLTK) を使用した自然言語処理の世界を読者に紹介する実用的なガイドです。テキストの前処理、トークン化、品詞のタグ付けなど、NLP の主要な概念と手法を取り上げ、言語ベースのアプリケーションの構築と分析に役立つ実践的な例を提供します。また、あいまいさやコンテキストなど、人間の言語処理の課題にも対処し、読者が独自のテキスト分析および言語理解プロジェクトを開発するためのツールを提供します。",
                                        '한국인': "Python을 사용한 자연어 처리(Natural Language Processing with Python)는 Python 프로그래밍 언어와 Natural Language Toolkit(NLTK)을 사용하여 자연어 처리의 세계를 독자에게 소개하는 실용적인 가이드입니다. 이 책은 텍스트 전처리, 토큰화, 품사 태깅과 같은 주요 NLP 개념과 기술을 다루면서 독자가 언어 기반 애플리케이션을 구축하고 분석하는 데 도움이 되는 실습 예제를 제공합니다. 또한 모호성과 맥락과 같은 인간 언어 처리의 과제를 다루어 독자에게 자체 텍스트 분석 및 언어 이해 프로젝트를 개발할 수 있는 도구를 제공합니다.",
                                        'Español': "Natural Language Processing with Python es una guía práctica que introduce a los lectores al mundo del procesamiento del lenguaje natural utilizando el lenguaje de programación Python y el Natural Language Toolkit (NLTK). El libro cubre conceptos y técnicas clave de procesamiento del lenguaje natural, como el preprocesamiento de texto, la tokenización y el etiquetado de partes del discurso, al tiempo que proporciona ejemplos prácticos para ayudar a los lectores a crear y analizar aplicaciones basadas en el lenguaje. También aborda los desafíos en el procesamiento del lenguaje humano, como la ambigüedad y el contexto, equipando a los lectores con las herramientas para desarrollar sus propios proyectos de análisis de texto y comprensión del lenguaje.",
                                        'हिंदी': "पाइथन के साथ प्राकृतिक भाषा प्रसंस्करण एक व्यावहारिक मार्गदर्शिका है जो पाठकों को पाइथन प्रोग्रामिंग भाषा और प्राकृतिक भाषा टूलकिट (एनएलटीके) का उपयोग करके प्राकृतिक भाषा प्रसंस्करण की दुनिया से परिचित कराती है। पुस्तक में मुख्य एनएलपी अवधारणाओं और तकनीकों को शामिल किया गया है, जैसे कि टेक्स्ट प्रीप्रोसेसिंग, टोकेनाइजेशन और पार्ट-ऑफ-स्पीच टैगिंग, साथ ही पाठकों को भाषा-आधारित अनुप्रयोगों के निर्माण और विश्लेषण में मदद करने के लिए व्यावहारिक उदाहरण प्रदान किए गए हैं। यह मानव भाषा को संसाधित करने में आने वाली चुनौतियों, जैसे अस्पष्टता और संदर्भ को भी संबोधित करता है, पाठकों को अपने स्वयं के टेक्स्ट विश्लेषण और भाषा समझ परियोजनाओं को विकसित करने के लिए उपकरणों से लैस करता है।",
                                        'Português': "Natural Language Processing with Python é um guia prático que apresenta aos leitores o mundo do processamento de linguagem natural utilizando a linguagem de programação Python e o Natural Language Toolkit (NLTK). O livro cobre os principais conceitos e técnicas de PNL, como o pré-processamento de texto, a tokenização e a marcação de classes gramaticais, ao mesmo tempo que fornece exemplos práticos para ajudar os leitores a construir e analisar aplicações baseadas em linguagem. Aborda também os desafios no processamento da linguagem humana, como a ambiguidade e o contexto, equipando os leitores com as ferramentas para desenvolverem os seus próprios projetos de análise de texto e compreensão da linguagem.",
                                        'বাংলা': "পাইথনের সাথে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ একটি ব্যবহারিক নির্দেশিকা যা পাঠকদের পাইথন প্রোগ্রামিং ভাষা এবং প্রাকৃতিক ভাষা টুলকিট (NLTK) ব্যবহার করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণের জগতে পরিচিত করে। বইটি মূল NLP ধারণা এবং কৌশলগুলি কভার করে, যেমন টেক্সট প্রিপ্রসেসিং, টোকেনাইজেশন এবং আংশিক-অফ-স্পীচ ট্যাগিং, পাঠকদের ভাষা-ভিত্তিক অ্যাপ্লিকেশনগুলি তৈরি এবং বিশ্লেষণ করতে সাহায্য করার জন্য হ্যান্ড-অন উদাহরণ প্রদান করে। এটি মানব ভাষা প্রক্রিয়াকরণের চ্যালেঞ্জগুলিও মোকাবেলা করে, যেমন অস্পষ্টতা এবং প্রসঙ্গ, পাঠকদের তাদের নিজস্ব পাঠ্য বিশ্লেষণ এবং ভাষা বোঝার প্রকল্পগুলি বিকাশের জন্য সরঞ্জামগুলির সাথে সজ্জিত করা।",
                                        'عَرَبِيّ': "يُعد كتاب Natural Language Processing with Python دليلاً عمليًا يُعرِّف القراء على عالم معالجة اللغة الطبيعية باستخدام لغة برمجة Python ومجموعة أدوات اللغة الطبيعية (NLTK). يتناول الكتاب مفاهيم وتقنيات معالجة اللغة الطبيعية الأساسية، مثل معالجة النصوص مسبقًا، وتجزئة النصوص، ووضع علامات على أجزاء الكلام، مع تقديم أمثلة عملية لمساعدة القراء على بناء وتحليل التطبيقات القائمة على اللغة. كما يتناول الكتاب التحديات في معالجة اللغة البشرية، مثل الغموض والسياق، وتزويد القراء بالأدوات اللازمة لتطوير مشاريع تحليل النصوص وفهم اللغة الخاصة بهم.",
                                        'فارسی': "پردازش زبان طبیعی با پایتون راهنمای عملی است که خوانندگان را با دنیای پردازش زبان طبیعی با استفاده از زبان برنامه نویسی پایتون و جعبه ابزار زبان طبیعی (NLTK) آشنا می کند. این کتاب مفاهیم و تکنیک‌های کلیدی NLP، مانند پیش‌پردازش متن، نشانه‌گذاری، و برچسب‌گذاری بخشی از گفتار را پوشش می‌دهد، در حالی که نمونه‌های عملی را برای کمک به خوانندگان در ساخت و تجزیه و تحلیل برنامه‌های کاربردی مبتنی بر زبان ارائه می‌دهد. همچنین به چالش‌های پردازش زبان انسانی، مانند ابهام و زمینه، تجهیز خوانندگان به ابزارهایی برای توسعه تجزیه و تحلیل متن و پروژه‌های درک زبان خود می‌پردازد.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/3 - Computer Vision with PyTorch.webp",
                                "detail_markdown_link": "Exportation/Docs/AI Engineer/Books/English/3 - Computer Vision with PyTorch.md",
                        },
                        // -- > 2 : Natural Language Processing with Python
                        {
                                "title": {
                                        'English': "Natural Language Processing with Python English",
                                        'Deutsch': "Natural Language Processing with Python Deutsch",
                                        '中国人': "Natural Language Processing with Python 中国人",
                                        'Русский': "Natural Language Processing with Python Русский",
                                        'Français': "Natural Language Processing with Python Français",
                                        '日本語': "Natural Language Processing with Python 日本語",
                                        '한국인': "Natural Language Processing with Python 한국인",
                                        'Español': "Natural Language Processing with Python Español",
                                        'हिंदी': "Natural Language Processing with Python हिंदी",
                                        'Português': "Natural Language Processing with Python Português",
                                        'বাংলা': "Natural Language Processing with Python বাংলা",
                                        'عَرَبِيّ': "Natural Language Processing with Python عَرَبِيّ",
                                        'فارسی': "Natural Language Processing with Python فارسی",
                                },
                                "description": {
                                        'English': "Natural Language Processing with Python is a practical guide that introduces readers to the world of natural language processing using the Python programming language and the Natural Language Toolkit (NLTK). The book covers key NLP concepts and techniques, such as text preprocessing, tokenization, and part-of-speech tagging, while providing hands-on examples to help readers build and analyze language-based applications. It also addresses challenges in processing human language, like ambiguity and context, equipping readers with the tools to develop their own text analysis and language understanding projects.",
                                        'Deutsch': "„Natural Language Processing with Python“ ist ein praktischer Leitfaden, der Leser in die Welt der natürlichen Sprachverarbeitung mit der Programmiersprache Python und dem Natural Language Toolkit (NLTK) einführt. Das Buch behandelt wichtige NLP-Konzepte und -Techniken wie Textvorverarbeitung, Tokenisierung und Wortartenmarkierung und bietet praktische Beispiele, die Lesern beim Erstellen und Analysieren sprachbasierter Anwendungen helfen. Es behandelt auch Herausforderungen bei der Verarbeitung menschlicher Sprache, wie Mehrdeutigkeit und Kontext, und gibt Lesern die Werkzeuge an die Hand, die sie zum Entwickeln eigener Projekte zur Textanalyse und zum Sprachverständnis benötigen.",
                                        '中国人': "《使用 Python 进行自然语言处理》是一本实用指南，它使用 Python 编程语言和自然语言工具包 (NLTK) 向读者介绍自然语言处理的世界。本书涵盖了关键的 NLP 概念和技术，例如文本预处理、标记化和词性标记，同时提供了实际示例来帮助读者构建和分析基于语言的应用程序。它还解决了处理人类语言的挑战，例如歧义和上下文，为读者提供了开发自己的文本分析和语言理解项目的工具。",
                                        'Русский': "Natural Language Processing with Python — это практическое руководство, которое знакомит читателей с миром обработки естественного языка с использованием языка программирования Python и Natural Language Toolkit (NLTK). Книга охватывает ключевые концепции и методы NLP, такие как предварительная обработка текста, токенизация и разметка частей речи, а также предоставляет практические примеры, помогающие читателям создавать и анализировать приложения на основе языка. В ней также рассматриваются проблемы обработки человеческого языка, такие как неоднозначность и контекст, снабжая читателей инструментами для разработки собственных проектов по анализу текста и пониманию языка.",
                                        'Français': "Natural Language Processing with Python est un guide pratique qui présente aux lecteurs le monde du traitement du langage naturel à l'aide du langage de programmation Python et de la boîte à outils Natural Language Toolkit (NLTK). Le livre couvre les concepts et techniques clés du traitement du langage naturel, tels que le prétraitement de texte, la tokenisation et le balisage des parties du discours, tout en fournissant des exemples pratiques pour aider les lecteurs à créer et à analyser des applications basées sur le langage. Il aborde également les défis du traitement du langage humain, comme l'ambiguïté et le contexte, en dotant les lecteurs des outils nécessaires pour développer leurs propres projets d'analyse de texte et de compréhension du langage.",
                                        '日本語': "Python による自然言語処理は、Python プログラミング言語と Natural Language Toolkit (NLTK) を使用した自然言語処理の世界を読者に紹介する実用的なガイドです。テキストの前処理、トークン化、品詞のタグ付けなど、NLP の主要な概念と手法を取り上げ、言語ベースのアプリケーションの構築と分析に役立つ実践的な例を提供します。また、あいまいさやコンテキストなど、人間の言語処理の課題にも対処し、読者が独自のテキスト分析および言語理解プロジェクトを開発するためのツールを提供します。",
                                        '한국인': "Python을 사용한 자연어 처리(Natural Language Processing with Python)는 Python 프로그래밍 언어와 Natural Language Toolkit(NLTK)을 사용하여 자연어 처리의 세계를 독자에게 소개하는 실용적인 가이드입니다. 이 책은 텍스트 전처리, 토큰화, 품사 태깅과 같은 주요 NLP 개념과 기술을 다루면서 독자가 언어 기반 애플리케이션을 구축하고 분석하는 데 도움이 되는 실습 예제를 제공합니다. 또한 모호성과 맥락과 같은 인간 언어 처리의 과제를 다루어 독자에게 자체 텍스트 분석 및 언어 이해 프로젝트를 개발할 수 있는 도구를 제공합니다.",
                                        'Español': "Natural Language Processing with Python es una guía práctica que introduce a los lectores al mundo del procesamiento del lenguaje natural utilizando el lenguaje de programación Python y el Natural Language Toolkit (NLTK). El libro cubre conceptos y técnicas clave de procesamiento del lenguaje natural, como el preprocesamiento de texto, la tokenización y el etiquetado de partes del discurso, al tiempo que proporciona ejemplos prácticos para ayudar a los lectores a crear y analizar aplicaciones basadas en el lenguaje. También aborda los desafíos en el procesamiento del lenguaje humano, como la ambigüedad y el contexto, equipando a los lectores con las herramientas para desarrollar sus propios proyectos de análisis de texto y comprensión del lenguaje.",
                                        'हिंदी': "पाइथन के साथ प्राकृतिक भाषा प्रसंस्करण एक व्यावहारिक मार्गदर्शिका है जो पाठकों को पाइथन प्रोग्रामिंग भाषा और प्राकृतिक भाषा टूलकिट (एनएलटीके) का उपयोग करके प्राकृतिक भाषा प्रसंस्करण की दुनिया से परिचित कराती है। पुस्तक में मुख्य एनएलपी अवधारणाओं और तकनीकों को शामिल किया गया है, जैसे कि टेक्स्ट प्रीप्रोसेसिंग, टोकेनाइजेशन और पार्ट-ऑफ-स्पीच टैगिंग, साथ ही पाठकों को भाषा-आधारित अनुप्रयोगों के निर्माण और विश्लेषण में मदद करने के लिए व्यावहारिक उदाहरण प्रदान किए गए हैं। यह मानव भाषा को संसाधित करने में आने वाली चुनौतियों, जैसे अस्पष्टता और संदर्भ को भी संबोधित करता है, पाठकों को अपने स्वयं के टेक्स्ट विश्लेषण और भाषा समझ परियोजनाओं को विकसित करने के लिए उपकरणों से लैस करता है।",
                                        'Português': "Natural Language Processing with Python é um guia prático que apresenta aos leitores o mundo do processamento de linguagem natural utilizando a linguagem de programação Python e o Natural Language Toolkit (NLTK). O livro cobre os principais conceitos e técnicas de PNL, como o pré-processamento de texto, a tokenização e a marcação de classes gramaticais, ao mesmo tempo que fornece exemplos práticos para ajudar os leitores a construir e analisar aplicações baseadas em linguagem. Aborda também os desafios no processamento da linguagem humana, como a ambiguidade e o contexto, equipando os leitores com as ferramentas para desenvolverem os seus próprios projetos de análise de texto e compreensão da linguagem.",
                                        'বাংলা': "পাইথনের সাথে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ একটি ব্যবহারিক নির্দেশিকা যা পাঠকদের পাইথন প্রোগ্রামিং ভাষা এবং প্রাকৃতিক ভাষা টুলকিট (NLTK) ব্যবহার করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণের জগতে পরিচিত করে। বইটি মূল NLP ধারণা এবং কৌশলগুলি কভার করে, যেমন টেক্সট প্রিপ্রসেসিং, টোকেনাইজেশন এবং আংশিক-অফ-স্পীচ ট্যাগিং, পাঠকদের ভাষা-ভিত্তিক অ্যাপ্লিকেশনগুলি তৈরি এবং বিশ্লেষণ করতে সাহায্য করার জন্য হ্যান্ড-অন উদাহরণ প্রদান করে। এটি মানব ভাষা প্রক্রিয়াকরণের চ্যালেঞ্জগুলিও মোকাবেলা করে, যেমন অস্পষ্টতা এবং প্রসঙ্গ, পাঠকদের তাদের নিজস্ব পাঠ্য বিশ্লেষণ এবং ভাষা বোঝার প্রকল্পগুলি বিকাশের জন্য সরঞ্জামগুলির সাথে সজ্জিত করা।",
                                        'عَرَبِيّ': "يُعد كتاب Natural Language Processing with Python دليلاً عمليًا يُعرِّف القراء على عالم معالجة اللغة الطبيعية باستخدام لغة برمجة Python ومجموعة أدوات اللغة الطبيعية (NLTK). يتناول الكتاب مفاهيم وتقنيات معالجة اللغة الطبيعية الأساسية، مثل معالجة النصوص مسبقًا، وتجزئة النصوص، ووضع علامات على أجزاء الكلام، مع تقديم أمثلة عملية لمساعدة القراء على بناء وتحليل التطبيقات القائمة على اللغة. كما يتناول الكتاب التحديات في معالجة اللغة البشرية، مثل الغموض والسياق، وتزويد القراء بالأدوات اللازمة لتطوير مشاريع تحليل النصوص وفهم اللغة الخاصة بهم.",
                                        'فارسی': "پردازش زبان طبیعی با پایتون راهنمای عملی است که خوانندگان را با دنیای پردازش زبان طبیعی با استفاده از زبان برنامه نویسی پایتون و جعبه ابزار زبان طبیعی (NLTK) آشنا می کند. این کتاب مفاهیم و تکنیک‌های کلیدی NLP، مانند پیش‌پردازش متن، نشانه‌گذاری، و برچسب‌گذاری بخشی از گفتار را پوشش می‌دهد، در حالی که نمونه‌های عملی را برای کمک به خوانندگان در ساخت و تجزیه و تحلیل برنامه‌های کاربردی مبتنی بر زبان ارائه می‌دهد. همچنین به چالش‌های پردازش زبان انسانی، مانند ابهام و زمینه، تجهیز خوانندگان به ابزارهایی برای توسعه تجزیه و تحلیل متن و پروژه‌های درک زبان خود می‌پردازد.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/2 - NLP with Python.webp",
                                "detail_markdown_link": "Docs/AI Engineer/Books/English/2 - Natural Language Processing with Python.md",
                        },
                        // -- > 1 : Deep Learning from Scratch
                        {
                                "title": {
                                        'English': "Deep Learning from Scratch English",
                                        'Deutsch': "Deep Learning from Scratch Deutsch",
                                        '中国人': "Deep Learning from Scratch 中国人",
                                        'Русский': "Deep Learning from Scratch Русский",
                                        'Français': "Deep Learning from Scratch Français",
                                        '日本語': "Deep Learning from Scratch 日本語",
                                        '한국인': "Deep Learning from Scratch 한국인",
                                        'Español': "Deep Learning from Scratch Español",
                                        'हिंदी': "Deep Learning from Scratch हिंदी",
                                        'Português': "Deep Learning from Scratch Português",
                                        'বাংলা': "Deep Learning from Scratch বাংলা",
                                        'عَرَبِيّ': "Deep Learning from Scratch عَرَبِيّ",
                                        'فارسی': "Deep Learning from Scratch فارسی",
                                },
                                "description": {
                                        'English': "Natural Language Processing with Python is a practical guide that introduces readers to the world of natural language processing using the Python programming language and the Natural Language Toolkit (NLTK). The book covers key NLP concepts and techniques, such as text preprocessing, tokenization, and part-of-speech tagging, while providing hands-on examples to help readers build and analyze language-based applications. It also addresses challenges in processing human language, like ambiguity and context, equipping readers with the tools to develop their own text analysis and language understanding projects.",
                                        'Deutsch': "„Natural Language Processing with Python“ ist ein praktischer Leitfaden, der Leser in die Welt der natürlichen Sprachverarbeitung mit der Programmiersprache Python und dem Natural Language Toolkit (NLTK) einführt. Das Buch behandelt wichtige NLP-Konzepte und -Techniken wie Textvorverarbeitung, Tokenisierung und Wortartenmarkierung und bietet praktische Beispiele, die Lesern beim Erstellen und Analysieren sprachbasierter Anwendungen helfen. Es behandelt auch Herausforderungen bei der Verarbeitung menschlicher Sprache, wie Mehrdeutigkeit und Kontext, und gibt Lesern die Werkzeuge an die Hand, die sie zum Entwickeln eigener Projekte zur Textanalyse und zum Sprachverständnis benötigen.",
                                        '中国人': "《使用 Python 进行自然语言处理》是一本实用指南，它使用 Python 编程语言和自然语言工具包 (NLTK) 向读者介绍自然语言处理的世界。本书涵盖了关键的 NLP 概念和技术，例如文本预处理、标记化和词性标记，同时提供了实际示例来帮助读者构建和分析基于语言的应用程序。它还解决了处理人类语言的挑战，例如歧义和上下文，为读者提供了开发自己的文本分析和语言理解项目的工具。",
                                        'Русский': "Natural Language Processing with Python — это практическое руководство, которое знакомит читателей с миром обработки естественного языка с использованием языка программирования Python и Natural Language Toolkit (NLTK). Книга охватывает ключевые концепции и методы NLP, такие как предварительная обработка текста, токенизация и разметка частей речи, а также предоставляет практические примеры, помогающие читателям создавать и анализировать приложения на основе языка. В ней также рассматриваются проблемы обработки человеческого языка, такие как неоднозначность и контекст, снабжая читателей инструментами для разработки собственных проектов по анализу текста и пониманию языка.",
                                        'Français': "Natural Language Processing with Python est un guide pratique qui présente aux lecteurs le monde du traitement du langage naturel à l'aide du langage de programmation Python et de la boîte à outils Natural Language Toolkit (NLTK). Le livre couvre les concepts et techniques clés du traitement du langage naturel, tels que le prétraitement de texte, la tokenisation et le balisage des parties du discours, tout en fournissant des exemples pratiques pour aider les lecteurs à créer et à analyser des applications basées sur le langage. Il aborde également les défis du traitement du langage humain, comme l'ambiguïté et le contexte, en dotant les lecteurs des outils nécessaires pour développer leurs propres projets d'analyse de texte et de compréhension du langage.",
                                        '日本語': "Python による自然言語処理は、Python プログラミング言語と Natural Language Toolkit (NLTK) を使用した自然言語処理の世界を読者に紹介する実用的なガイドです。テキストの前処理、トークン化、品詞のタグ付けなど、NLP の主要な概念と手法を取り上げ、言語ベースのアプリケーションの構築と分析に役立つ実践的な例を提供します。また、あいまいさやコンテキストなど、人間の言語処理の課題にも対処し、読者が独自のテキスト分析および言語理解プロジェクトを開発するためのツールを提供します。",
                                        '한국인': "Python을 사용한 자연어 처리(Natural Language Processing with Python)는 Python 프로그래밍 언어와 Natural Language Toolkit(NLTK)을 사용하여 자연어 처리의 세계를 독자에게 소개하는 실용적인 가이드입니다. 이 책은 텍스트 전처리, 토큰화, 품사 태깅과 같은 주요 NLP 개념과 기술을 다루면서 독자가 언어 기반 애플리케이션을 구축하고 분석하는 데 도움이 되는 실습 예제를 제공합니다. 또한 모호성과 맥락과 같은 인간 언어 처리의 과제를 다루어 독자에게 자체 텍스트 분석 및 언어 이해 프로젝트를 개발할 수 있는 도구를 제공합니다.",
                                        'Español': "Natural Language Processing with Python es una guía práctica que introduce a los lectores al mundo del procesamiento del lenguaje natural utilizando el lenguaje de programación Python y el Natural Language Toolkit (NLTK). El libro cubre conceptos y técnicas clave de procesamiento del lenguaje natural, como el preprocesamiento de texto, la tokenización y el etiquetado de partes del discurso, al tiempo que proporciona ejemplos prácticos para ayudar a los lectores a crear y analizar aplicaciones basadas en el lenguaje. También aborda los desafíos en el procesamiento del lenguaje humano, como la ambigüedad y el contexto, equipando a los lectores con las herramientas para desarrollar sus propios proyectos de análisis de texto y comprensión del lenguaje.",
                                        'हिंदी': "पाइथन के साथ प्राकृतिक भाषा प्रसंस्करण एक व्यावहारिक मार्गदर्शिका है जो पाठकों को पाइथन प्रोग्रामिंग भाषा और प्राकृतिक भाषा टूलकिट (एनएलटीके) का उपयोग करके प्राकृतिक भाषा प्रसंस्करण की दुनिया से परिचित कराती है। पुस्तक में मुख्य एनएलपी अवधारणाओं और तकनीकों को शामिल किया गया है, जैसे कि टेक्स्ट प्रीप्रोसेसिंग, टोकेनाइजेशन और पार्ट-ऑफ-स्पीच टैगिंग, साथ ही पाठकों को भाषा-आधारित अनुप्रयोगों के निर्माण और विश्लेषण में मदद करने के लिए व्यावहारिक उदाहरण प्रदान किए गए हैं। यह मानव भाषा को संसाधित करने में आने वाली चुनौतियों, जैसे अस्पष्टता और संदर्भ को भी संबोधित करता है, पाठकों को अपने स्वयं के टेक्स्ट विश्लेषण और भाषा समझ परियोजनाओं को विकसित करने के लिए उपकरणों से लैस करता है।",
                                        'Português': "Natural Language Processing with Python é um guia prático que apresenta aos leitores o mundo do processamento de linguagem natural utilizando a linguagem de programação Python e o Natural Language Toolkit (NLTK). O livro cobre os principais conceitos e técnicas de PNL, como o pré-processamento de texto, a tokenização e a marcação de classes gramaticais, ao mesmo tempo que fornece exemplos práticos para ajudar os leitores a construir e analisar aplicações baseadas em linguagem. Aborda também os desafios no processamento da linguagem humana, como a ambiguidade e o contexto, equipando os leitores com as ferramentas para desenvolverem os seus próprios projetos de análise de texto e compreensão da linguagem.",
                                        'বাংলা': "পাইথনের সাথে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ একটি ব্যবহারিক নির্দেশিকা যা পাঠকদের পাইথন প্রোগ্রামিং ভাষা এবং প্রাকৃতিক ভাষা টুলকিট (NLTK) ব্যবহার করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণের জগতে পরিচিত করে। বইটি মূল NLP ধারণা এবং কৌশলগুলি কভার করে, যেমন টেক্সট প্রিপ্রসেসিং, টোকেনাইজেশন এবং আংশিক-অফ-স্পীচ ট্যাগিং, পাঠকদের ভাষা-ভিত্তিক অ্যাপ্লিকেশনগুলি তৈরি এবং বিশ্লেষণ করতে সাহায্য করার জন্য হ্যান্ড-অন উদাহরণ প্রদান করে। এটি মানব ভাষা প্রক্রিয়াকরণের চ্যালেঞ্জগুলিও মোকাবেলা করে, যেমন অস্পষ্টতা এবং প্রসঙ্গ, পাঠকদের তাদের নিজস্ব পাঠ্য বিশ্লেষণ এবং ভাষা বোঝার প্রকল্পগুলি বিকাশের জন্য সরঞ্জামগুলির সাথে সজ্জিত করা।",
                                        'عَرَبِيّ': "يُعد كتاب Natural Language Processing with Python دليلاً عمليًا يُعرِّف القراء على عالم معالجة اللغة الطبيعية باستخدام لغة برمجة Python ومجموعة أدوات اللغة الطبيعية (NLTK). يتناول الكتاب مفاهيم وتقنيات معالجة اللغة الطبيعية الأساسية، مثل معالجة النصوص مسبقًا، وتجزئة النصوص، ووضع علامات على أجزاء الكلام، مع تقديم أمثلة عملية لمساعدة القراء على بناء وتحليل التطبيقات القائمة على اللغة. كما يتناول الكتاب التحديات في معالجة اللغة البشرية، مثل الغموض والسياق، وتزويد القراء بالأدوات اللازمة لتطوير مشاريع تحليل النصوص وفهم اللغة الخاصة بهم.",
                                        'فارسی': "پردازش زبان طبیعی با پایتون راهنمای عملی است که خوانندگان را با دنیای پردازش زبان طبیعی با استفاده از زبان برنامه نویسی پایتون و جعبه ابزار زبان طبیعی (NLTK) آشنا می کند. این کتاب مفاهیم و تکنیک‌های کلیدی NLP، مانند پیش‌پردازش متن، نشانه‌گذاری، و برچسب‌گذاری بخشی از گفتار را پوشش می‌دهد، در حالی که نمونه‌های عملی را برای کمک به خوانندگان در ساخت و تجزیه و تحلیل برنامه‌های کاربردی مبتنی بر زبان ارائه می‌دهد. همچنین به چالش‌های پردازش زبان انسانی، مانند ابهام و زمینه، تجهیز خوانندگان به ابزارهایی برای توسعه تجزیه و تحلیل متن و پروژه‌های درک زبان خود می‌پردازد.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/1 - Deep Learning from Scratch.webp",
                                "detail_markdown_link": "Docs/AI Engineer/Books/English/1 - Deep Learning from Scratch.md",
                        },
                        // -- > FLUTTER - 1 : Flutter Complete Reference Book
                        {
                                "title": {
                                        'English': "Flutter Complete Reference",
                                        'Deutsch': "Flutter Complete Reference",
                                        '中国人': "Flutter Complete Reference",
                                        'Русский': "Flutter Complete Reference",
                                        'Français': "Flutter Complete Reference",
                                        '日本語': "Flutter Complete Reference",
                                        '한국인': "Flutter Complete Reference",
                                        'Español': "Flutter Complete Reference",
                                        'हिंदी': "Flutter Complete Reference",
                                        'Português': "Flutter Complete Reference",
                                        'বাংলা': "Flutter Complete Reference",
                                        'عَرَبِيّ': "Flutter Complete Reference",
                                        'فارسی': "Flutter Complete Reference",
                                },
                                "description": {
                                        'English': "Flutter Complete Reference by Alberto Miola is a comprehensive guide for developers seeking to master Flutter, Google's open-source UI toolkit for crafting natively compiled applications. The book provides a deep dive into the fundamentals of Flutter, covering essential topics like widget architecture, state management, animations, and advanced techniques for creating responsive and high-performance apps. With practical examples and detailed explanations, it serves as both a beginner-friendly introduction and a valuable resource for experienced developers looking to refine their skills. Alberto Miola combines clarity with hands-on approaches, making it an indispensable reference for Flutter enthusiasts.",
                                        'Deutsch': "Flutter Complete Reference von Alberto Miola ist ein umfassender Leitfaden für Entwickler, die Flutter beherrschen möchten, Googles Open-Source-UI-Toolkit zum Erstellen nativ kompilierter Anwendungen. Das Buch bietet einen tiefen Einblick in die Grundlagen von Flutter und behandelt wichtige Themen wie Widget-Architektur, Statusverwaltung, Animationen und fortgeschrittene Techniken zum Erstellen reaktionsfähiger und leistungsstarker Apps. Mit praktischen Beispielen und detaillierten Erklärungen dient es sowohl als anfängerfreundliche Einführung als auch als wertvolle Ressource für erfahrene Entwickler, die ihre Fähigkeiten verfeinern möchten. Alberto Miola kombiniert Klarheit mit praktischen Ansätzen und macht es zu einem unverzichtbaren Nachschlagewerk für Flutter-Enthusiasten.",
                                        '中国人': "Alberto Miola 编写的《Flutter 完整参考》是一本全面的指南，适合希望掌握 Flutter 的开发人员，Flutter 是 Google 的开源 UI 工具包，用于制作原生编译的应用程序。本书深入探讨了 Flutter 的基础知识，涵盖了小部件架构、状态管理、动画和创建响应式高性能应用程序的高级技术等基本主题。通过实际示例和详细解释，它既是初学者友好的入门书，也是希望提高技能的经验丰富的开发人员的宝贵资源。Alberto Miola 将清晰度与实践方法相结合，使其成为 Flutter 爱好者不可或缺的参考资料。",
                                        'Русский': "Flutter Complete Reference Альберто Миолы — это всеобъемлющее руководство для разработчиков, стремящихся освоить Flutter, набор инструментов пользовательского интерфейса с открытым исходным кодом от Google для создания скомпилированных приложений. Книга предлагает глубокое погружение в основы Flutter, охватывая такие важные темы, как архитектура виджетов, управление состоянием, анимация и передовые методы создания адаптивных и высокопроизводительных приложений. С практическими примерами и подробными объяснениями она служит как введением для новичков, так и ценным ресурсом для опытных разработчиков, желающих усовершенствовать свои навыки. Альберто Миола сочетает ясность с практическими подходами, что делает ее незаменимым справочником для энтузиастов Flutter.",
                                        'Français': "Flutter Complete Reference d'Alberto Miola est un guide complet pour les développeurs qui cherchent à maîtriser Flutter, la boîte à outils d'interface utilisateur open source de Google pour la création d'applications compilées en mode natif. Le livre propose une plongée en profondeur dans les fondamentaux de Flutter, couvrant des sujets essentiels comme l'architecture des widgets, la gestion des états, les animations et les techniques avancées pour créer des applications réactives et performantes. Avec des exemples pratiques et des explications détaillées, il sert à la fois d'introduction conviviale pour les débutants et de ressource précieuse pour les développeurs expérimentés qui cherchent à perfectionner leurs compétences. Alberto Miola allie clarté et approches pratiques, ce qui en fait une référence indispensable pour les passionnés de Flutter.",
                                        '日本語': "Alberto Miola 著の『Flutter Complete Reference』は、ネイティブ コンパイル アプリケーションを作成するための Google のオープンソース UI ツールキットである Flutter を習得したい開発者向けの総合ガイドです。本書では、ウィジェット アーキテクチャ、状態管理、アニメーション、レスポンシブで高性能なアプリケーションを作成するための高度なテクニックなど、Flutter の基礎を深く掘り下げて解説しています。実用的な例と詳細な説明が盛り込まれており、初心者向けの入門書としてだけでなく、スキルを磨きたい経験豊富な開発者にとって貴重なリソースとしても役立ちます。Alberto Miola は、明快さと実践的なアプローチを組み合わせており、Flutter 愛好家にとって欠かせないリファレンスとなっています。",
                                        '한국인': "Alberto Miola의 Flutter Complete Reference는 네이티브 컴파일 애플리케이션을 제작하기 위한 Google의 오픈소스 UI 툴킷인 Flutter를 마스터하려는 개발자를 위한 포괄적인 가이드입니다. 이 책은 위젯 아키텍처, 상태 관리, 애니메이션 및 반응형 고성능 앱을 만드는 고급 기술과 같은 필수 주제를 다루는 Flutter의 기본에 대한 심층적인 분석을 제공합니다. 실용적인 예제와 자세한 설명이 포함되어 있어 초보자에게 친숙한 소개서이자 기술을 다듬고자 하는 숙련된 개발자에게 귀중한 리소스 역할을 합니다. Alberto Miola는 명확성과 실무적 접근 방식을 결합하여 Flutter 애호가에게 없어서는 안 될 참고 자료가 되었습니다.",
                                        'Español': "Flutter Complete Reference de Alberto Miola es una guía completa para desarrolladores que buscan dominar Flutter, el kit de herramientas de interfaz de usuario de código abierto de Google para crear aplicaciones compiladas de forma nativa. El libro ofrece una inmersión profunda en los fundamentos de Flutter y cubre temas esenciales como la arquitectura de widgets, la gestión de estados, las animaciones y las técnicas avanzadas para crear aplicaciones responsivas y de alto rendimiento. Con ejemplos prácticos y explicaciones detalladas, sirve como una introducción para principiantes y un recurso valioso para desarrolladores experimentados que buscan perfeccionar sus habilidades. Alberto Miola combina claridad con enfoques prácticos, lo que lo convierte en una referencia indispensable para los entusiastas de Flutter.",
                                        'हिंदी': "अल्बर्टो मिओला द्वारा लिखित फ़्लटर कम्प्लीट रेफरेंस उन डेवलपर्स के लिए एक व्यापक गाइड है जो फ़्लटर में महारत हासिल करना चाहते हैं, यह नेटिवली कम्पाइल किए गए एप्लिकेशन तैयार करने के लिए Google का ओपन-सोर्स UI टूलकिट है। यह पुस्तक फ़्लटर के मूल सिद्धांतों में गहराई से गोता लगाती है, जिसमें विजेट आर्किटेक्चर, स्टेट मैनेजमेंट, एनिमेशन और रिस्पॉन्सिव और हाई-परफ़ॉर्मेंस ऐप बनाने के लिए उन्नत तकनीकों जैसे आवश्यक विषयों को शामिल किया गया है। व्यावहारिक उदाहरणों और विस्तृत व्याख्याओं के साथ, यह शुरुआती लोगों के लिए एक अनुकूल परिचय और अपने कौशल को निखारने के इच्छुक अनुभवी डेवलपर्स के लिए एक मूल्यवान संसाधन दोनों के रूप में कार्य करता है। अल्बर्टो मिओला स्पष्टता को व्यावहारिक दृष्टिकोणों के साथ जोड़ता है, जो इसे फ़्लटर उत्साही लोगों के लिए एक अपरिहार्य संदर्भ बनाता है।",
                                        'Português': "Flutter Complete Reference de Alberto Miola é um guia completo para programadores que procuram dominar o Flutter, o kit de ferramentas de UI de código aberto da Google para criar aplicações compiladas nativamente. O livro proporciona um mergulho profundo nos fundamentos do Flutter, abordando tópicos essenciais como a arquitetura de widgets, a gestão de estado, as animações e as técnicas avançadas para criar aplicações responsivas e de alto desempenho. Com exemplos práticos e explicações detalhadas, serve tanto como uma introdução para principiantes como um recurso valioso para programadores experientes que procuram melhorar as suas capacidades. Alberto Miola combina clareza com abordagens práticas, tornando-o uma referência indispensável para os entusiastas do Flutter.",
                                        'বাংলা': "অ্যালবার্তো মিওলার ফ্লাটার কমপ্লিট রেফারেন্স হল ফ্লাটারে দক্ষতা অর্জন করতে চাওয়া ডেভেলপারদের জন্য একটি বিস্তৃত নির্দেশিকা, নেটিভলি কম্পাইল করা অ্যাপ্লিকেশন তৈরির জন্য Google-এর ওপেন-সোর্স UI টুলকিট। বইটি ফ্লটারের মৌলিক বিষয়গুলির মধ্যে গভীর ডুব দেয়, উইজেট আর্কিটেকচার, রাষ্ট্র পরিচালনা, অ্যানিমেশন এবং প্রতিক্রিয়াশীল এবং উচ্চ-পারফরম্যান্স অ্যাপ তৈরির জন্য উন্নত কৌশলগুলির মতো প্রয়োজনীয় বিষয়গুলিকে কভার করে৷ ব্যবহারিক উদাহরণ এবং বিশদ ব্যাখ্যা সহ, এটি একটি শিক্ষানবিস-বন্ধুত্বপূর্ণ ভূমিকা এবং তাদের দক্ষতা পরিমার্জিত করার জন্য অভিজ্ঞ বিকাশকারীদের জন্য একটি মূল্যবান সংস্থান উভয়ই কাজ করে৷ আলবার্তো মিওলা হ্যান্ডস-অন পন্থাগুলির সাথে স্পষ্টতাকে একত্রিত করে, এটিকে ফ্লটার উত্সাহীদের জন্য একটি অপরিহার্য রেফারেন্স করে তোলে৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Complete Reference من تأليف Alberto Miola دليلاً شاملاً للمطورين الذين يسعون إلى إتقان Flutter، وهي مجموعة أدوات واجهة المستخدم مفتوحة المصدر من Google لإنشاء تطبيقات مجمعة محليًا. يوفر الكتاب نظرة متعمقة في أساسيات Flutter، ويغطي موضوعات أساسية مثل بنية الأداة، وإدارة الحالة، والرسوم المتحركة، والتقنيات المتقدمة لإنشاء تطبيقات سريعة الاستجابة وعالية الأداء. مع أمثلة عملية وشروحات مفصلة، ​​فهو بمثابة مقدمة سهلة للمبتدئين ومورد قيم للمطورين ذوي الخبرة الذين يتطلعون إلى صقل مهاراتهم. يجمع Alberto Miola بين الوضوح والأساليب العملية، مما يجعله مرجعًا لا غنى عنه لعشاق Flutter.",
                                        'فارسی': "مرجع کامل Flutter توسط Alberto Miola یک راهنمای جامع برای توسعه دهندگانی است که به دنبال تسلط بر Flutter، جعبه ابزار UI منبع باز Google برای ایجاد برنامه های کاربردی کامپایل شده بومی هستند. این کتاب به بررسی اصول فلاتر می پردازد و موضوعات ضروری مانند معماری ویجت، مدیریت حالت، انیمیشن ها و تکنیک های پیشرفته برای ایجاد اپلیکیشن های پاسخگو و با کارایی بالا را پوشش می دهد. با مثال‌های عملی و توضیحات مفصل، هم به‌عنوان مقدمه‌ای مناسب برای مبتدیان و هم منبعی ارزشمند برای توسعه‌دهندگان با تجربه ای است که به دنبال اصلاح مهارت‌های خود هستند. آلبرتو میولا وضوح را با رویکردهای عملی ترکیب می کند و آن را به مرجعی ضروری برای علاقه مندان به فلاتر تبدیل می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/2 - Flutter Complete Reference.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/2%20-%20Flutter%20Complete%20Reference.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/2%20-%20Flutter%20Complete%20Reference.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/2%20-%20Flutter%20Complete%20Reference.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/2%20-%20Flutter%20Complete%20Reference.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/2%20-%20Flutter%20Complete%20Reference.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/2%20-%20Flutter%20Complete%20Reference.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/2%20-%20Flutter%20Complete%20Reference.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/2%20-%20Flutter%20Complete%20Reference.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter Apprentice
                        {
                                "title": {
                                        'English': "Flutter Apprentice",
                                        'Deutsch': "Flutter Apprentice",
                                        '中国人': "Flutter Apprentice",
                                        'Русский': "Flutter Apprentice",
                                        'Français': "Flutter Apprentice",
                                        '日本語': "Flutter Apprentice",
                                        '한국인': "Flutter Apprentice",
                                        'Español': "Flutter Apprentice",
                                        'हिंदी': "Flutter Apprentice",
                                        'Português': "Flutter Apprentice",
                                        'বাংলা': "Flutter Apprentice",
                                        'عَرَبِيّ': "Flutter Apprentice",
                                        'فارسی': "Flutter Apprentice",
                                },
                                "description": {
                                        'English': "Flutter Apprentice is a comprehensive guide for beginners to learn Flutter, a popular open-source framework for building cross-platform mobile applications. Authored by a team of experienced developers, the book provides a hands-on, project-based approach to mastering Flutter. It covers the fundamentals of Dart programming, state management, UI design, and integrating features like animations and APIs. Each chapter builds on practical projects, enabling readers to develop real-world apps while gaining confidence in their skills. With clear explanations, step-by-step instructions, and tips to avoid common pitfalls, Flutter Apprentice is an excellent resource for aspiring app developers who want to bring their ideas to life on Android and iOS platforms.",
                                        'Deutsch': "Flutter Apprentice ist ein umfassender Leitfaden für Anfänger zum Erlernen von Flutter, einem beliebten Open-Source-Framework zum Erstellen plattformübergreifender mobiler Anwendungen. Das von einem Team erfahrener Entwickler verfasste Buch bietet einen praktischen, projektbasierten Ansatz zum Erlernen von Flutter. Es behandelt die Grundlagen der Dart-Programmierung, der Zustandsverwaltung, des UI-Designs und der Integration von Funktionen wie Animationen und APIs. Jedes Kapitel basiert auf praktischen Projekten, sodass die Leser reale Apps entwickeln und gleichzeitig Vertrauen in ihre Fähigkeiten gewinnen können. Mit klaren Erklärungen, Schritt-für-Schritt-Anleitungen und Tipps zum Vermeiden häufiger Fehler ist Flutter Apprentice eine hervorragende Ressource für angehende App-Entwickler, die ihre Ideen auf Android- und iOS-Plattformen zum Leben erwecken möchten.",
                                        '中国人': "Flutter Apprentice 是一本全面的指南，帮助初学者学习 Flutter，Flutter 是一种用于构建跨平台移动应用程序的流行开源框架。本书由一支经验丰富的开发人员团队撰写，提供了一种基于项目的动手实践方法来掌握 Flutter。它涵盖了 Dart 编程、状态管理、UI 设计和集成动画和 API 等功能的基础知识。每一章都以实际项目为基础，使读者能够开发真实的应用程序，同时增强对自己技能的信心。Flutter Apprentice 具有清晰的解释、分步说明和避免常见陷阱的技巧，是希望在 Android 和 iOS 平台上实现自己想法的有抱负的应用程序开发人员的绝佳资源。",
                                        'Русский': "Flutter Apprentice — это полное руководство для начинающих по изучению Flutter, популярного фреймворка с открытым исходным кодом для создания кроссплатформенных мобильных приложений. Книга, написанная командой опытных разработчиков, предлагает практический подход к освоению Flutter на основе проектов. Она охватывает основы программирования Dart, управления состоянием, проектирования пользовательского интерфейса и интеграции таких функций, как анимация и API. Каждая глава основана на практических проектах, что позволяет читателям разрабатывать реальные приложения, обретая уверенность в своих навыках. Благодаря понятным объяснениям, пошаговым инструкциям и советам по избежанию распространенных ошибок Flutter Apprentice является отличным ресурсом для начинающих разработчиков приложений, которые хотят воплотить свои идеи в жизнь на платформах Android и iOS.",
                                        'Français': "Flutter Apprentice est un guide complet destiné aux débutants pour apprendre Flutter, un framework open source populaire pour la création d'applications mobiles multiplateformes. Rédigé par une équipe de développeurs expérimentés, le livre propose une approche pratique et basée sur des projets pour maîtriser Flutter. Il couvre les fondamentaux de la programmation Dart, la gestion des états, la conception d'interface utilisateur et l'intégration de fonctionnalités telles que les animations et les API. Chaque chapitre s'appuie sur des projets pratiques, permettant aux lecteurs de développer des applications concrètes tout en gagnant en confiance dans leurs compétences. Avec des explications claires, des instructions étape par étape et des conseils pour éviter les pièges courants, Flutter Apprentice est une excellente ressource pour les développeurs d'applications en herbe qui souhaitent donner vie à leurs idées sur les plateformes Android et iOS.",
                                        '日本語': "Flutter Apprentice は、クロスプラットフォーム モバイル アプリケーションを構築するための人気のオープン ソース フレームワークである Flutter を初心者が学習するための総合ガイドです。経験豊富な開発者チームが執筆したこの本は、Flutter を習得するための実践的なプロジェクト ベースのアプローチを提供します。Dart プログラミング、状態管理、UI デザイン、アニメーションや API などの機能の統合の基礎をカバーしています。各章は実践的なプロジェクトに基づいているため、読者はスキルに自信を持ちながら、実際のアプリを開発できます。わかりやすい説明、ステップ バイ ステップの手順、よくある落とし穴を避けるためのヒントが満載の Flutter Apprentice は、Android および iOS プラットフォームでアイデアを実現したい意欲的なアプリ開発者にとって優れたリソースです。",
                                        '한국인': "Flutter Apprentice는 크로스 플랫폼 모바일 애플리케이션을 구축하기 위한 인기 있는 오픈소스 프레임워크인 Flutter를 초보자가 배우기 위한 포괄적인 가이드입니다. 숙련된 개발자 팀이 저술한 이 책은 Flutter를 마스터하기 위한 실무적이고 프로젝트 기반의 접근 방식을 제공합니다. Dart 프로그래밍, 상태 관리, UI 디자인, 애니메이션 및 API와 같은 기능 통합의 기본 사항을 다룹니다. 각 장은 실용적인 프로젝트를 기반으로 하여 독자가 기술에 대한 자신감을 얻는 동시에 실제 앱을 개발할 수 있도록 합니다. 명확한 설명, 단계별 지침, 일반적인 함정을 피하기 위한 팁이 포함된 Flutter Apprentice는 Android 및 iOS 플랫폼에서 아이디어를 실현하고자 하는 야심 찬 앱 개발자에게 훌륭한 리소스입니다.",
                                        'Español': "Flutter Apprentice es una guía completa para principiantes que desean aprender Flutter, un popular marco de código abierto para crear aplicaciones móviles multiplataforma. Escrito por un equipo de desarrolladores experimentados, el libro ofrece un enfoque práctico basado en proyectos para dominar Flutter. Abarca los fundamentos de la programación Dart, la gestión de estados, el diseño de la interfaz de usuario y la integración de funciones como animaciones y API. Cada capítulo se basa en proyectos prácticos, lo que permite a los lectores desarrollar aplicaciones del mundo real mientras ganan confianza en sus habilidades. Con explicaciones claras, instrucciones paso a paso y consejos para evitar errores comunes, Flutter Apprentice es un excelente recurso para los aspirantes a desarrolladores de aplicaciones que desean dar vida a sus ideas en las plataformas Android e iOS.",
                                        'हिंदी': "फ़्लटर अप्रेंटिस शुरुआती लोगों के लिए फ़्लटर सीखने के लिए एक व्यापक मार्गदर्शिका है, जो क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने के लिए एक लोकप्रिय ओपन-सोर्स फ़्रेमवर्क है। अनुभवी डेवलपर्स की एक टीम द्वारा लिखित, यह पुस्तक फ़्लटर में महारत हासिल करने के लिए एक व्यावहारिक, प्रोजेक्ट-आधारित दृष्टिकोण प्रदान करती है। इसमें डार्ट प्रोग्रामिंग, स्टेट मैनेजमेंट, UI डिज़ाइन और एनिमेशन और API जैसी सुविधाओं को एकीकृत करने की बुनियादी बातों को शामिल किया गया है। प्रत्येक अध्याय व्यावहारिक परियोजनाओं पर आधारित है, जिससे पाठकों को अपने कौशल में आत्मविश्वास प्राप्त करते हुए वास्तविक दुनिया के ऐप विकसित करने में सक्षम बनाया जा सके। स्पष्ट स्पष्टीकरण, चरण-दर-चरण निर्देश और सामान्य नुकसानों से बचने के सुझावों के साथ, फ़्लटर अप्रेंटिस महत्वाकांक्षी ऐप डेवलपर्स के लिए एक उत्कृष्ट संसाधन है जो अपने विचारों को Android और iOS प्लेटफ़ॉर्म पर जीवंत करना चाहते हैं।",
                                        'Português': "Flutter Apprentice é um guia completo para principiantes aprenderem Flutter, uma estrutura popular de código aberto para a construção de aplicações móveis multiplataforma. Da autoria de uma equipa de programadores experientes, o livro oferece uma abordagem prática e baseada em projetos para dominar o Flutter. Abrange os fundamentos da programação Dart, gestão de estado, design de UI e integração de recursos como animações e APIs. Cada capítulo baseia-se em projetos práticos, permitindo aos leitores desenvolver aplicações do mundo real enquanto ganham confiança nas suas capacidades. Com explicações claras, instruções passo a passo e dicas para evitar armadilhas comuns, Flutter Apprentice é um excelente recurso para aspirantes a programadores de aplicações que desejam dar vida às suas ideias nas plataformas Android e iOS.",
                                        'বাংলা': "ফ্লটার অ্যাপ্রেন্টিস হল নতুনদের জন্য ফ্লটার শেখার জন্য একটি ব্যাপক নির্দেশিকা, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরির জন্য একটি জনপ্রিয় ওপেন-সোর্স ফ্রেমওয়ার্ক। অভিজ্ঞ ডেভেলপারদের একটি দল দ্বারা রচিত, বইটি ফ্লটারকে আয়ত্ত করার জন্য একটি হ্যান্ডস-অন, প্রকল্প-ভিত্তিক পদ্ধতি প্রদান করে। এটি ডার্ট প্রোগ্রামিং, স্টেট ম্যানেজমেন্ট, UI ডিজাইন এবং অ্যানিমেশন এবং API-এর মতো বৈশিষ্ট্যগুলিকে একীভূত করার মৌলিক বিষয়গুলি কভার করে৷ প্রতিটি অধ্যায় ব্যবহারিক প্রকল্পের উপর ভিত্তি করে তৈরি করে, পাঠকদের তাদের দক্ষতার প্রতি আস্থা অর্জনের সাথে সাথে বাস্তব-বিশ্বের অ্যাপ বিকাশ করতে সক্ষম করে। স্পষ্ট ব্যাখ্যা, ধাপে ধাপে নির্দেশাবলী এবং সাধারণ সমস্যাগুলি এড়াতে টিপস সহ, Flutter Apprentice উচ্চাকাঙ্ক্ষী অ্যাপ বিকাশকারীদের জন্য একটি চমৎকার সংস্থান যারা Android এবং iOS প্ল্যাটফর্মে তাদের ধারণাগুলিকে জীবন্ত করতে চান৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Apprentice دليلاً شاملاً للمبتدئين لتعلم Flutter، وهو إطار عمل مفتوح المصدر شائع لبناء تطبيقات جوال متعددة الأنظمة. يقدم الكتاب، الذي ألفه فريق من المطورين ذوي الخبرة، نهجًا عمليًا قائمًا على المشروع لإتقان Flutter. ويغطي أساسيات برمجة Dart وإدارة الحالة وتصميم واجهة المستخدم ودمج ميزات مثل الرسوم المتحركة وواجهات برمجة التطبيقات. يعتمد كل فصل على مشاريع عملية، مما يتيح للقراء تطوير تطبيقات واقعية مع اكتساب الثقة في مهاراتهم. مع التفسيرات الواضحة والتعليمات خطوة بخطوة والنصائح لتجنب الأخطاء الشائعة، يعد Flutter Apprentice موردًا ممتازًا لمطوري التطبيقات الطموحين الذين يرغبون في إحياء أفكارهم على منصات Android وiOS.",
                                        'فارسی': "Flutter Apprentice یک راهنمای جامع برای مبتدیان برای یادگیری Flutter است، یک فریم ورک منبع باز محبوب برای ساخت اپلیکیشن های موبایلی چند پلتفرمی. این کتاب که توسط تیمی از توسعه دهندگان با تجربه نوشته شده است، رویکردی عملی و مبتنی بر پروژه برای تسلط بر فلاتر ارائه می دهد. این مبانی برنامه نویسی Dart، مدیریت حالت، طراحی UI، و یکپارچه سازی ویژگی هایی مانند انیمیشن ها و API ها را پوشش می دهد. هر فصل بر اساس پروژه های عملی ساخته شده است و خوانندگان را قادر می سازد تا برنامه های دنیای واقعی را توسعه دهند و در عین حال به مهارت های خود اعتماد کنند. Flutter Apprentice با توضیحات واضح، دستورالعمل‌های گام به گام و نکاتی برای جلوگیری از مشکلات رایج، منبعی عالی برای توسعه‌دهندگان برنامه‌های مشتاقی است که می‌خواهند ایده‌های خود را در پلتفرم‌های اندروید و iOS زنده کنند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/1 - Flutter Apprentice.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/1%20-%20Flutter%20Apprentice.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/1%20-%20Flutter%20Apprentice.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/1%20-%20Flutter%20Apprentice.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/1%20-%20Flutter%20Apprentice.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/1%20-%20Flutter%20Apprentice.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/1%20-%20Flutter%20Apprentice.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/1%20-%20Flutter%20Apprentice.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/1%20-%20Flutter%20Apprentice.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/1%20-%20Flutter%20Apprentice.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/1%20-%20Flutter%20Apprentice.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/1%20-%20Flutter%20Apprentice.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/1%20-%20Flutter%20Apprentice.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/1%20-%20Flutter%20Apprentice.md",
                                },
                        },
                ],
                // -- >> Industrial Designer
                "Industrial Designer": [],
                // -- >> Self-Driving Automobile Engineer
                "Self-Driving Automobile Engineer": [
                        // -- > NLP - 2 : Mastering NLP from Foundations to LLMs
                        {
                                "title": {
                                        'English': "Mastering NLP from Foundations to LLMs",
                                        'Deutsch': "Mastering NLP from Foundations to LLMs",
                                        '中国人': "Mastering NLP from Foundations to LLMs",
                                        'Русский': "Mastering NLP from Foundations to LLMs",
                                        'Français': "Mastering NLP from Foundations to LLMs",
                                        '日本語': "Mastering NLP from Foundations to LLMs",
                                        '한국인': "Mastering NLP from Foundations to LLMs",
                                        'Español': "Mastering NLP from Foundations to LLMs",
                                        'हिंदी': "Mastering NLP from Foundations to LLMs",
                                        'Português': "Mastering NLP from Foundations to LLMs",
                                        'বাংলা': "Mastering NLP from Foundations to LLMs",
                                        'عَرَبِيّ': "Mastering NLP from Foundations to LLMs",
                                        'فارسی': "Mastering NLP from Foundations to LLMs",
                                },
                                "description": {
                                        'English': "Mastering NLP from Foundations to LLMs is a comprehensive guide authored by Lior Gazit and Meysam Ghaffari, published on April 26, 2024. This book offers an in-depth introduction to Natural Language Processing (NLP) techniques, beginning with the mathematical foundations of machine learning and progressing to advanced applications involving Large Language Models (LLMs). It covers essential topics such as text preprocessing, traditional machine learning methods for text classification, and deep learning language models. Additionally, the authors explore the theory, design, and implementation of LLMs, providing practical Python code samples throughout. The book also discusses future trends in NLP and includes expert insights, making it a valuable resource for both beginners and experienced practitioners aiming to solve real-world business problems using Python. ",
                                        'Deutsch': "„Mastering NLP from Foundations to LLMs“ ist ein umfassender Leitfaden von Lior Gazit und Meysam Ghaffari, der am 26. April 2024 veröffentlicht wurde. Dieses Buch bietet eine ausführliche Einführung in Techniken der natürlichen Sprachverarbeitung (Natural Language Processing, NLP), beginnend mit den mathematischen Grundlagen des maschinellen Lernens und fortschreitend bis hin zu fortgeschrittenen Anwendungen mit Large Language Models (LLMs). Es behandelt wichtige Themen wie Textvorverarbeitung, traditionelle Methoden des maschinellen Lernens zur Textklassifizierung und Deep-Learning-Sprachmodelle. Darüber hinaus untersuchen die Autoren die Theorie, das Design und die Implementierung von LLMs und liefern durchgehend praktische Python-Codebeispiele. Das Buch diskutiert auch zukünftige Trends in der NLP und enthält Experteneinblicke, was es zu einer wertvollen Ressource sowohl für Anfänger als auch für erfahrene Praktiker macht, die reale Geschäftsprobleme mit Python lösen möchten.",
                                        '中国人': "《从基础到 LLM 精通 NLP》是一本综合指南，由 Lior Gazit 和 Meysam Ghaffari 撰写，出版于 2024 年 4 月 26 日。本书深入介绍了自然语言处理 (NLP) 技术，从机器学习的数学基础开始，逐步介绍涉及大型语言模型 (LLM) 的高级应用。它涵盖了文本预处理、用于文本分类的传统机器学习方法和深度学习语言模型等重要主题。此外，作者还探讨了 LLM 的理论、设计和实现，并提供了实用的 Python 代码示例。本书还讨论了 NLP 的未来趋势，并包含专家见解，使其成为初学者和经验丰富的从业者使用 Python 解决实际业务问题的宝贵资源。",
                                        'Русский': "Mastering NLP from Foundations to LLMs — это всеобъемлющее руководство, написанное Лиором Газитом и Мейсамом Гаффари, опубликованное 26 апреля 2024 года. Эта книга предлагает углубленное введение в методы обработки естественного языка (NLP), начиная с математических основ машинного обучения и заканчивая продвинутыми приложениями, включающими большие языковые модели (LLM). Она охватывает такие важные темы, как предварительная обработка текста, традиционные методы машинного обучения для классификации текста и модели языка глубокого обучения. Кроме того, авторы изучают теорию, проектирование и реализацию LLM, предоставляя практические примеры кода Python. В книге также обсуждаются будущие тенденции в области NLP и содержатся экспертные идеи, что делает ее ценным ресурсом как для новичков, так и для опытных практиков, стремящихся решать реальные бизнес-задачи с помощью Python.",
                                        'Français': "Mastering NLP from Foundations to LLMs est un guide complet rédigé par Lior Gazit et Meysam Ghaffari, publié le 26 avril 2024. Ce livre propose une introduction approfondie aux techniques de traitement du langage naturel (NLP), en commençant par les fondements mathématiques de l'apprentissage automatique et en progressant vers des applications avancées impliquant de grands modèles linguistiques (LLM). Il couvre des sujets essentiels tels que le prétraitement de texte, les méthodes traditionnelles d'apprentissage automatique pour la classification de texte et les modèles de langage d'apprentissage profond. De plus, les auteurs explorent la théorie, la conception et la mise en œuvre des LLM, en fournissant des exemples de code Python pratiques tout au long du livre. Le livre aborde également les tendances futures du NLP et comprend des points de vue d'experts, ce qui en fait une ressource précieuse pour les débutants et les praticiens expérimentés qui souhaitent résoudre des problèmes commerciaux réels à l'aide de Python.",
                                        '日本語': "『Mastering NLP from Foundations to LLMs』は、Lior Gazit と Meysam Ghaffari が執筆し、2024 年 4 月 26 日に出版された総合ガイドです。この本は、機械学習の数学的基礎から始まり、大規模言語モデル (LLM) を含む高度なアプリケーションまで、自然言語処理 (NLP) 技術の詳細な入門書です。テキスト前処理、テキスト分類のための従来の機械学習手法、ディープラーニング言語モデルなどの重要なトピックを取り上げています。さらに、著者は LLM の理論、設計、実装を探求し、全体を通して実用的な Python コードサンプルを提供しています。この本では、NLP の将来の動向についても説明されており、専門家の洞察も含まれているため、Python を使用して実際のビジネス問題を解決しようとしている初心者と経験豊富な実務家の両方にとって貴重なリソースとなっています。",
                                        '한국인': "Mastering NLP from Foundations to LLMs는 Lior Gazit과 Meysam Ghaffari가 저술하고 2024년 4월 26일에 출판한 포괄적인 가이드입니다. 이 책은 기계 학습의 수학적 기초에서 시작하여 대규모 언어 모델(LLM)을 포함하는 고급 애플리케이션으로 진행되는 자연어 처리(NLP) 기술에 대한 심층적인 소개를 제공합니다. 텍스트 전처리, 텍스트 분류를 위한 기존 기계 학습 방법, 딥 러닝 언어 모델과 같은 필수 주제를 다룹니다. 또한 저자는 LLM의 이론, 설계 및 구현을 탐구하고 전반적으로 실용적인 Python 코드 샘플을 제공합니다. 이 책은 또한 NLP의 미래 동향에 대해 논의하고 전문가의 통찰력을 포함하여 Python을 사용하여 실제 비즈니스 문제를 해결하려는 초보자와 숙련된 실무자 모두에게 귀중한 리소스가 됩니다.",
                                        'Español': "Mastering NLP from Foundations to LLMs es una guía completa escrita por Lior Gazit y Meysam Ghaffari, publicada el 26 de abril de 2024. Este libro ofrece una introducción detallada a las técnicas de procesamiento del lenguaje natural (PLN), comenzando con los fundamentos matemáticos del aprendizaje automático y avanzando hacia aplicaciones avanzadas que involucran modelos de lenguaje grandes (LLM). Abarca temas esenciales como el preprocesamiento de texto, los métodos tradicionales de aprendizaje automático para la clasificación de texto y los modelos de lenguaje de aprendizaje profundo. Además, los autores exploran la teoría, el diseño y la implementación de los LLM, proporcionando ejemplos prácticos de código Python en todo momento. El libro también analiza las tendencias futuras en PNL e incluye perspectivas de expertos, lo que lo convierte en un recurso valioso tanto para principiantes como para profesionales experimentados que buscan resolver problemas comerciales del mundo real utilizando Python.",
                                        'हिंदी': "मास्टरिंग एनएलपी फ्रॉम फाउंडेशन्स टू एलएलएम लियोर गज़िट और मेसम गफ़री द्वारा लिखित एक व्यापक गाइड है, जिसे 26 अप्रैल, 2024 को प्रकाशित किया गया था। यह पुस्तक नेचुरल लैंग्वेज प्रोसेसिंग (एनएलपी) तकनीकों का गहन परिचय प्रदान करती है, जो मशीन लर्निंग के गणितीय आधारों से शुरू होकर लार्ज लैंग्वेज मॉडल्स (एलएलएम) से जुड़े उन्नत अनुप्रयोगों तक आगे बढ़ती है। इसमें टेक्स्ट प्रीप्रोसेसिंग, टेक्स्ट वर्गीकरण के लिए पारंपरिक मशीन लर्निंग विधियाँ और डीप लर्निंग लैंग्वेज मॉडल जैसे आवश्यक विषय शामिल हैं। इसके अतिरिक्त, लेखक एलएलएम के सिद्धांत, डिज़ाइन और कार्यान्वयन का पता लगाते हैं, जो पूरे समय व्यावहारिक पायथन कोड नमूने प्रदान करते हैं। पुस्तक एनएलपी में भविष्य के रुझानों पर भी चर्चा करती है और इसमें विशेषज्ञ अंतर्दृष्टि शामिल है, जो इसे पायथन का उपयोग करके वास्तविक दुनिया की व्यावसायिक समस्याओं को हल करने का लक्ष्य रखने वाले शुरुआती और अनुभवी चिकित्सकों दोनों के लिए एक मूल्यवान संसाधन बनाती है।",
                                        'Português': "Mastering NLP from Foundations to LLMs é um guia completo da autoria de Lior Gazit e Meysam Ghaffari, publicado a 26 de abril de 2024. Este livro oferece uma introdução detalhada às técnicas de Processamento de Linguagem Natural (PLN), começando pelos fundamentos matemáticos da aprendizagem automática. e progredindo para aplicações avançadas envolvendo Large Language Models (LLMs). Abrange tópicos essenciais como o pré-processamento de texto, os métodos tradicionais de aprendizagem automática para classificação de texto e os modelos de linguagem de aprendizagem profunda. Além disso, os autores exploram a teoria, o design e a implementação de LLMs, fornecendo exemplos práticos de código Python. O livro também discute as tendências futuras em PNL e inclui insights de especialistas, tornando-o um recurso valioso tanto para principiantes como para profissionais experientes que desejam resolver problemas de negócios do mundo real utilizando Python.",
                                        'বাংলা': "ফাউন্ডেশন থেকে এলএলএম পর্যন্ত এনএলপি মাস্টারিং হল লিওর গাজিট এবং মেসাম গাফফারি দ্বারা রচিত একটি বিস্তৃত নির্দেশিকা, যা 26 এপ্রিল, 2024-এ প্রকাশিত হয়েছে। এই বইটি মেশিন লার্নিংয়ের গাণিতিক ভিত্তি দিয়ে শুরু করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (এনএলপি) কৌশলগুলির একটি গভীরভাবে পরিচিতি প্রদান করে। এবং বৃহৎ ভাষার মডেল জড়িত উন্নত অ্যাপ্লিকেশনে অগ্রগতি (এলএলএম)। এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন পাঠ্য প্রিপ্রসেসিং, পাঠ্য শ্রেণিবিন্যাসের জন্য প্রথাগত মেশিন লার্নিং পদ্ধতি এবং গভীর শিক্ষার ভাষা মডেল। অতিরিক্তভাবে, লেখকরা LLM-এর তত্ত্ব, নকশা এবং বাস্তবায়ন অন্বেষণ করেন, সর্বত্র ব্যবহারিক পাইথন কোড নমুনা প্রদান করেন। বইটি NLP-এর ভবিষ্যৎ প্রবণতা নিয়েও আলোচনা করে এবং এতে বিশেষজ্ঞের অন্তর্দৃষ্টি অন্তর্ভুক্ত রয়েছে, যা পাইথন ব্যবহার করে বাস্তব-বিশ্বের ব্যবসায়িক সমস্যা সমাধানের লক্ষ্যে নতুন এবং অভিজ্ঞ অনুশীলনকারীদের উভয়ের জন্যই এটিকে একটি মূল্যবান সম্পদ করে তুলেছে।",
                                        'عَرَبِيّ': "يعد كتاب Mastering NLP from Foundations to LLMs دليلاً شاملاً من تأليف ليور جازيت وميسام غفاري، ونُشر في 26 أبريل 2024. يقدم هذا الكتاب مقدمة متعمقة لتقنيات معالجة اللغة الطبيعية (NLP)، بدءًا من الأسس الرياضية للتعلم الآلي والتقدم إلى التطبيقات المتقدمة التي تتضمن نماذج اللغة الكبيرة (LLMs). ويغطي موضوعات أساسية مثل معالجة النصوص مسبقًا، وطرق التعلم الآلي التقليدية لتصنيف النصوص، ونماذج اللغة للتعلم العميق. بالإضافة إلى ذلك، يستكشف المؤلفون نظرية وتصميم وتنفيذ نماذج اللغة الكبيرة، مما يوفر عينات عملية من أكواد بايثون في جميع أنحاء الكتاب. يناقش الكتاب أيضًا الاتجاهات المستقبلية في معالجة اللغة الطبيعية ويتضمن رؤى الخبراء، مما يجعله موردًا قيمًا للمبتدئين والممارسين ذوي الخبرة الذين يهدفون إلى حل مشاكل الأعمال في العالم الحقيقي باستخدام بايثون.",
                                        'فارسی': "تسلط بر NLP از مبانی تا LLM یک راهنمای جامع است که توسط لیور گازیت و میثم غفاری منتشر شده است که در 26 آوریل 2024 منتشر شده است. این کتاب مقدمه ای عمیق بر تکنیک های پردازش زبان طبیعی (NLP) ارائه می دهد که با مبانی ریاضی یادگیری ماشین شروع می شود. و پیشرفت به سمت برنامه های کاربردی پیشرفته شامل مدل های زبان بزرگ (LLM). موضوعات ضروری مانند پیش پردازش متن، روش های سنتی یادگیری ماشینی برای طبقه بندی متن و مدل های زبان یادگیری عمیق را پوشش می دهد. علاوه بر این، نویسندگان نظریه، طراحی و پیاده سازی LLM ها را بررسی می کنند و نمونه های عملی کد پایتون را در سراسر آن ارائه می کنند. این کتاب همچنین روندهای آینده در NLP را مورد بحث قرار می‌دهد و شامل بینش‌های متخصص می‌شود، که آن را به منبعی ارزشمند برای مبتدیان و متخصصان با تجربه تبدیل می‌کند که هدفشان حل مشکلات تجاری دنیای واقعی با استفاده از پایتون است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/4 - Mastering NLP from Foundations to LLMs.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/English/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/German/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Chinese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Russian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/French/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Japanese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Korean/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Spanish/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Hindi/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Portugues/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Bengali/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Arabic/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Persian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                },
                        },
                        // -- > FLUTTER - 1 : Flutter Complete Reference Book
                        {
                                "title": {
                                        'English': "Flutter Complete Reference",
                                        'Deutsch': "Flutter Complete Reference",
                                        '中国人': "Flutter Complete Reference",
                                        'Русский': "Flutter Complete Reference",
                                        'Français': "Flutter Complete Reference",
                                        '日本語': "Flutter Complete Reference",
                                        '한국인': "Flutter Complete Reference",
                                        'Español': "Flutter Complete Reference",
                                        'हिंदी': "Flutter Complete Reference",
                                        'Português': "Flutter Complete Reference",
                                        'বাংলা': "Flutter Complete Reference",
                                        'عَرَبِيّ': "Flutter Complete Reference",
                                        'فارسی': "Flutter Complete Reference",
                                },
                                "description": {
                                        'English': "Flutter Complete Reference by Alberto Miola is a comprehensive guide for developers seeking to master Flutter, Google's open-source UI toolkit for crafting natively compiled applications. The book provides a deep dive into the fundamentals of Flutter, covering essential topics like widget architecture, state management, animations, and advanced techniques for creating responsive and high-performance apps. With practical examples and detailed explanations, it serves as both a beginner-friendly introduction and a valuable resource for experienced developers looking to refine their skills. Alberto Miola combines clarity with hands-on approaches, making it an indispensable reference for Flutter enthusiasts.",
                                        'Deutsch': "Flutter Complete Reference von Alberto Miola ist ein umfassender Leitfaden für Entwickler, die Flutter beherrschen möchten, Googles Open-Source-UI-Toolkit zum Erstellen nativ kompilierter Anwendungen. Das Buch bietet einen tiefen Einblick in die Grundlagen von Flutter und behandelt wichtige Themen wie Widget-Architektur, Statusverwaltung, Animationen und fortgeschrittene Techniken zum Erstellen reaktionsfähiger und leistungsstarker Apps. Mit praktischen Beispielen und detaillierten Erklärungen dient es sowohl als anfängerfreundliche Einführung als auch als wertvolle Ressource für erfahrene Entwickler, die ihre Fähigkeiten verfeinern möchten. Alberto Miola kombiniert Klarheit mit praktischen Ansätzen und macht es zu einem unverzichtbaren Nachschlagewerk für Flutter-Enthusiasten.",
                                        '中国人': "Alberto Miola 编写的《Flutter 完整参考》是一本全面的指南，适合希望掌握 Flutter 的开发人员，Flutter 是 Google 的开源 UI 工具包，用于制作原生编译的应用程序。本书深入探讨了 Flutter 的基础知识，涵盖了小部件架构、状态管理、动画和创建响应式高性能应用程序的高级技术等基本主题。通过实际示例和详细解释，它既是初学者友好的入门书，也是希望提高技能的经验丰富的开发人员的宝贵资源。Alberto Miola 将清晰度与实践方法相结合，使其成为 Flutter 爱好者不可或缺的参考资料。",
                                        'Русский': "Flutter Complete Reference Альберто Миолы — это всеобъемлющее руководство для разработчиков, стремящихся освоить Flutter, набор инструментов пользовательского интерфейса с открытым исходным кодом от Google для создания скомпилированных приложений. Книга предлагает глубокое погружение в основы Flutter, охватывая такие важные темы, как архитектура виджетов, управление состоянием, анимация и передовые методы создания адаптивных и высокопроизводительных приложений. С практическими примерами и подробными объяснениями она служит как введением для новичков, так и ценным ресурсом для опытных разработчиков, желающих усовершенствовать свои навыки. Альберто Миола сочетает ясность с практическими подходами, что делает ее незаменимым справочником для энтузиастов Flutter.",
                                        'Français': "Flutter Complete Reference d'Alberto Miola est un guide complet pour les développeurs qui cherchent à maîtriser Flutter, la boîte à outils d'interface utilisateur open source de Google pour la création d'applications compilées en mode natif. Le livre propose une plongée en profondeur dans les fondamentaux de Flutter, couvrant des sujets essentiels comme l'architecture des widgets, la gestion des états, les animations et les techniques avancées pour créer des applications réactives et performantes. Avec des exemples pratiques et des explications détaillées, il sert à la fois d'introduction conviviale pour les débutants et de ressource précieuse pour les développeurs expérimentés qui cherchent à perfectionner leurs compétences. Alberto Miola allie clarté et approches pratiques, ce qui en fait une référence indispensable pour les passionnés de Flutter.",
                                        '日本語': "Alberto Miola 著の『Flutter Complete Reference』は、ネイティブ コンパイル アプリケーションを作成するための Google のオープンソース UI ツールキットである Flutter を習得したい開発者向けの総合ガイドです。本書では、ウィジェット アーキテクチャ、状態管理、アニメーション、レスポンシブで高性能なアプリケーションを作成するための高度なテクニックなど、Flutter の基礎を深く掘り下げて解説しています。実用的な例と詳細な説明が盛り込まれており、初心者向けの入門書としてだけでなく、スキルを磨きたい経験豊富な開発者にとって貴重なリソースとしても役立ちます。Alberto Miola は、明快さと実践的なアプローチを組み合わせており、Flutter 愛好家にとって欠かせないリファレンスとなっています。",
                                        '한국인': "Alberto Miola의 Flutter Complete Reference는 네이티브 컴파일 애플리케이션을 제작하기 위한 Google의 오픈소스 UI 툴킷인 Flutter를 마스터하려는 개발자를 위한 포괄적인 가이드입니다. 이 책은 위젯 아키텍처, 상태 관리, 애니메이션 및 반응형 고성능 앱을 만드는 고급 기술과 같은 필수 주제를 다루는 Flutter의 기본에 대한 심층적인 분석을 제공합니다. 실용적인 예제와 자세한 설명이 포함되어 있어 초보자에게 친숙한 소개서이자 기술을 다듬고자 하는 숙련된 개발자에게 귀중한 리소스 역할을 합니다. Alberto Miola는 명확성과 실무적 접근 방식을 결합하여 Flutter 애호가에게 없어서는 안 될 참고 자료가 되었습니다.",
                                        'Español': "Flutter Complete Reference de Alberto Miola es una guía completa para desarrolladores que buscan dominar Flutter, el kit de herramientas de interfaz de usuario de código abierto de Google para crear aplicaciones compiladas de forma nativa. El libro ofrece una inmersión profunda en los fundamentos de Flutter y cubre temas esenciales como la arquitectura de widgets, la gestión de estados, las animaciones y las técnicas avanzadas para crear aplicaciones responsivas y de alto rendimiento. Con ejemplos prácticos y explicaciones detalladas, sirve como una introducción para principiantes y un recurso valioso para desarrolladores experimentados que buscan perfeccionar sus habilidades. Alberto Miola combina claridad con enfoques prácticos, lo que lo convierte en una referencia indispensable para los entusiastas de Flutter.",
                                        'हिंदी': "अल्बर्टो मिओला द्वारा लिखित फ़्लटर कम्प्लीट रेफरेंस उन डेवलपर्स के लिए एक व्यापक गाइड है जो फ़्लटर में महारत हासिल करना चाहते हैं, यह नेटिवली कम्पाइल किए गए एप्लिकेशन तैयार करने के लिए Google का ओपन-सोर्स UI टूलकिट है। यह पुस्तक फ़्लटर के मूल सिद्धांतों में गहराई से गोता लगाती है, जिसमें विजेट आर्किटेक्चर, स्टेट मैनेजमेंट, एनिमेशन और रिस्पॉन्सिव और हाई-परफ़ॉर्मेंस ऐप बनाने के लिए उन्नत तकनीकों जैसे आवश्यक विषयों को शामिल किया गया है। व्यावहारिक उदाहरणों और विस्तृत व्याख्याओं के साथ, यह शुरुआती लोगों के लिए एक अनुकूल परिचय और अपने कौशल को निखारने के इच्छुक अनुभवी डेवलपर्स के लिए एक मूल्यवान संसाधन दोनों के रूप में कार्य करता है। अल्बर्टो मिओला स्पष्टता को व्यावहारिक दृष्टिकोणों के साथ जोड़ता है, जो इसे फ़्लटर उत्साही लोगों के लिए एक अपरिहार्य संदर्भ बनाता है।",
                                        'Português': "Flutter Complete Reference de Alberto Miola é um guia completo para programadores que procuram dominar o Flutter, o kit de ferramentas de UI de código aberto da Google para criar aplicações compiladas nativamente. O livro proporciona um mergulho profundo nos fundamentos do Flutter, abordando tópicos essenciais como a arquitetura de widgets, a gestão de estado, as animações e as técnicas avançadas para criar aplicações responsivas e de alto desempenho. Com exemplos práticos e explicações detalhadas, serve tanto como uma introdução para principiantes como um recurso valioso para programadores experientes que procuram melhorar as suas capacidades. Alberto Miola combina clareza com abordagens práticas, tornando-o uma referência indispensável para os entusiastas do Flutter.",
                                        'বাংলা': "অ্যালবার্তো মিওলার ফ্লাটার কমপ্লিট রেফারেন্স হল ফ্লাটারে দক্ষতা অর্জন করতে চাওয়া ডেভেলপারদের জন্য একটি বিস্তৃত নির্দেশিকা, নেটিভলি কম্পাইল করা অ্যাপ্লিকেশন তৈরির জন্য Google-এর ওপেন-সোর্স UI টুলকিট। বইটি ফ্লটারের মৌলিক বিষয়গুলির মধ্যে গভীর ডুব দেয়, উইজেট আর্কিটেকচার, রাষ্ট্র পরিচালনা, অ্যানিমেশন এবং প্রতিক্রিয়াশীল এবং উচ্চ-পারফরম্যান্স অ্যাপ তৈরির জন্য উন্নত কৌশলগুলির মতো প্রয়োজনীয় বিষয়গুলিকে কভার করে৷ ব্যবহারিক উদাহরণ এবং বিশদ ব্যাখ্যা সহ, এটি একটি শিক্ষানবিস-বন্ধুত্বপূর্ণ ভূমিকা এবং তাদের দক্ষতা পরিমার্জিত করার জন্য অভিজ্ঞ বিকাশকারীদের জন্য একটি মূল্যবান সংস্থান উভয়ই কাজ করে৷ আলবার্তো মিওলা হ্যান্ডস-অন পন্থাগুলির সাথে স্পষ্টতাকে একত্রিত করে, এটিকে ফ্লটার উত্সাহীদের জন্য একটি অপরিহার্য রেফারেন্স করে তোলে৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Complete Reference من تأليف Alberto Miola دليلاً شاملاً للمطورين الذين يسعون إلى إتقان Flutter، وهي مجموعة أدوات واجهة المستخدم مفتوحة المصدر من Google لإنشاء تطبيقات مجمعة محليًا. يوفر الكتاب نظرة متعمقة في أساسيات Flutter، ويغطي موضوعات أساسية مثل بنية الأداة، وإدارة الحالة، والرسوم المتحركة، والتقنيات المتقدمة لإنشاء تطبيقات سريعة الاستجابة وعالية الأداء. مع أمثلة عملية وشروحات مفصلة، ​​فهو بمثابة مقدمة سهلة للمبتدئين ومورد قيم للمطورين ذوي الخبرة الذين يتطلعون إلى صقل مهاراتهم. يجمع Alberto Miola بين الوضوح والأساليب العملية، مما يجعله مرجعًا لا غنى عنه لعشاق Flutter.",
                                        'فارسی': "مرجع کامل Flutter توسط Alberto Miola یک راهنمای جامع برای توسعه دهندگانی است که به دنبال تسلط بر Flutter، جعبه ابزار UI منبع باز Google برای ایجاد برنامه های کاربردی کامپایل شده بومی هستند. این کتاب به بررسی اصول فلاتر می پردازد و موضوعات ضروری مانند معماری ویجت، مدیریت حالت، انیمیشن ها و تکنیک های پیشرفته برای ایجاد اپلیکیشن های پاسخگو و با کارایی بالا را پوشش می دهد. با مثال‌های عملی و توضیحات مفصل، هم به‌عنوان مقدمه‌ای مناسب برای مبتدیان و هم منبعی ارزشمند برای توسعه‌دهندگان با تجربه ای است که به دنبال اصلاح مهارت‌های خود هستند. آلبرتو میولا وضوح را با رویکردهای عملی ترکیب می کند و آن را به مرجعی ضروری برای علاقه مندان به فلاتر تبدیل می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/2 - Flutter Complete Reference.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/2%20-%20Flutter%20Complete%20Reference.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/2%20-%20Flutter%20Complete%20Reference.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/2%20-%20Flutter%20Complete%20Reference.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/2%20-%20Flutter%20Complete%20Reference.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/2%20-%20Flutter%20Complete%20Reference.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/2%20-%20Flutter%20Complete%20Reference.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/2%20-%20Flutter%20Complete%20Reference.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/2%20-%20Flutter%20Complete%20Reference.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter Apprentice
                        {
                                "title": {
                                        'English': "Flutter Apprentice",
                                        'Deutsch': "Flutter Apprentice",
                                        '中国人': "Flutter Apprentice",
                                        'Русский': "Flutter Apprentice",
                                        'Français': "Flutter Apprentice",
                                        '日本語': "Flutter Apprentice",
                                        '한국인': "Flutter Apprentice",
                                        'Español': "Flutter Apprentice",
                                        'हिंदी': "Flutter Apprentice",
                                        'Português': "Flutter Apprentice",
                                        'বাংলা': "Flutter Apprentice",
                                        'عَرَبِيّ': "Flutter Apprentice",
                                        'فارسی': "Flutter Apprentice",
                                },
                                "description": {
                                        'English': "Flutter Apprentice is a comprehensive guide for beginners to learn Flutter, a popular open-source framework for building cross-platform mobile applications. Authored by a team of experienced developers, the book provides a hands-on, project-based approach to mastering Flutter. It covers the fundamentals of Dart programming, state management, UI design, and integrating features like animations and APIs. Each chapter builds on practical projects, enabling readers to develop real-world apps while gaining confidence in their skills. With clear explanations, step-by-step instructions, and tips to avoid common pitfalls, Flutter Apprentice is an excellent resource for aspiring app developers who want to bring their ideas to life on Android and iOS platforms.",
                                        'Deutsch': "Flutter Apprentice ist ein umfassender Leitfaden für Anfänger zum Erlernen von Flutter, einem beliebten Open-Source-Framework zum Erstellen plattformübergreifender mobiler Anwendungen. Das von einem Team erfahrener Entwickler verfasste Buch bietet einen praktischen, projektbasierten Ansatz zum Erlernen von Flutter. Es behandelt die Grundlagen der Dart-Programmierung, der Zustandsverwaltung, des UI-Designs und der Integration von Funktionen wie Animationen und APIs. Jedes Kapitel basiert auf praktischen Projekten, sodass die Leser reale Apps entwickeln und gleichzeitig Vertrauen in ihre Fähigkeiten gewinnen können. Mit klaren Erklärungen, Schritt-für-Schritt-Anleitungen und Tipps zum Vermeiden häufiger Fehler ist Flutter Apprentice eine hervorragende Ressource für angehende App-Entwickler, die ihre Ideen auf Android- und iOS-Plattformen zum Leben erwecken möchten.",
                                        '中国人': "Flutter Apprentice 是一本全面的指南，帮助初学者学习 Flutter，Flutter 是一种用于构建跨平台移动应用程序的流行开源框架。本书由一支经验丰富的开发人员团队撰写，提供了一种基于项目的动手实践方法来掌握 Flutter。它涵盖了 Dart 编程、状态管理、UI 设计和集成动画和 API 等功能的基础知识。每一章都以实际项目为基础，使读者能够开发真实的应用程序，同时增强对自己技能的信心。Flutter Apprentice 具有清晰的解释、分步说明和避免常见陷阱的技巧，是希望在 Android 和 iOS 平台上实现自己想法的有抱负的应用程序开发人员的绝佳资源。",
                                        'Русский': "Flutter Apprentice — это полное руководство для начинающих по изучению Flutter, популярного фреймворка с открытым исходным кодом для создания кроссплатформенных мобильных приложений. Книга, написанная командой опытных разработчиков, предлагает практический подход к освоению Flutter на основе проектов. Она охватывает основы программирования Dart, управления состоянием, проектирования пользовательского интерфейса и интеграции таких функций, как анимация и API. Каждая глава основана на практических проектах, что позволяет читателям разрабатывать реальные приложения, обретая уверенность в своих навыках. Благодаря понятным объяснениям, пошаговым инструкциям и советам по избежанию распространенных ошибок Flutter Apprentice является отличным ресурсом для начинающих разработчиков приложений, которые хотят воплотить свои идеи в жизнь на платформах Android и iOS.",
                                        'Français': "Flutter Apprentice est un guide complet destiné aux débutants pour apprendre Flutter, un framework open source populaire pour la création d'applications mobiles multiplateformes. Rédigé par une équipe de développeurs expérimentés, le livre propose une approche pratique et basée sur des projets pour maîtriser Flutter. Il couvre les fondamentaux de la programmation Dart, la gestion des états, la conception d'interface utilisateur et l'intégration de fonctionnalités telles que les animations et les API. Chaque chapitre s'appuie sur des projets pratiques, permettant aux lecteurs de développer des applications concrètes tout en gagnant en confiance dans leurs compétences. Avec des explications claires, des instructions étape par étape et des conseils pour éviter les pièges courants, Flutter Apprentice est une excellente ressource pour les développeurs d'applications en herbe qui souhaitent donner vie à leurs idées sur les plateformes Android et iOS.",
                                        '日本語': "Flutter Apprentice は、クロスプラットフォーム モバイル アプリケーションを構築するための人気のオープン ソース フレームワークである Flutter を初心者が学習するための総合ガイドです。経験豊富な開発者チームが執筆したこの本は、Flutter を習得するための実践的なプロジェクト ベースのアプローチを提供します。Dart プログラミング、状態管理、UI デザイン、アニメーションや API などの機能の統合の基礎をカバーしています。各章は実践的なプロジェクトに基づいているため、読者はスキルに自信を持ちながら、実際のアプリを開発できます。わかりやすい説明、ステップ バイ ステップの手順、よくある落とし穴を避けるためのヒントが満載の Flutter Apprentice は、Android および iOS プラットフォームでアイデアを実現したい意欲的なアプリ開発者にとって優れたリソースです。",
                                        '한국인': "Flutter Apprentice는 크로스 플랫폼 모바일 애플리케이션을 구축하기 위한 인기 있는 오픈소스 프레임워크인 Flutter를 초보자가 배우기 위한 포괄적인 가이드입니다. 숙련된 개발자 팀이 저술한 이 책은 Flutter를 마스터하기 위한 실무적이고 프로젝트 기반의 접근 방식을 제공합니다. Dart 프로그래밍, 상태 관리, UI 디자인, 애니메이션 및 API와 같은 기능 통합의 기본 사항을 다룹니다. 각 장은 실용적인 프로젝트를 기반으로 하여 독자가 기술에 대한 자신감을 얻는 동시에 실제 앱을 개발할 수 있도록 합니다. 명확한 설명, 단계별 지침, 일반적인 함정을 피하기 위한 팁이 포함된 Flutter Apprentice는 Android 및 iOS 플랫폼에서 아이디어를 실현하고자 하는 야심 찬 앱 개발자에게 훌륭한 리소스입니다.",
                                        'Español': "Flutter Apprentice es una guía completa para principiantes que desean aprender Flutter, un popular marco de código abierto para crear aplicaciones móviles multiplataforma. Escrito por un equipo de desarrolladores experimentados, el libro ofrece un enfoque práctico basado en proyectos para dominar Flutter. Abarca los fundamentos de la programación Dart, la gestión de estados, el diseño de la interfaz de usuario y la integración de funciones como animaciones y API. Cada capítulo se basa en proyectos prácticos, lo que permite a los lectores desarrollar aplicaciones del mundo real mientras ganan confianza en sus habilidades. Con explicaciones claras, instrucciones paso a paso y consejos para evitar errores comunes, Flutter Apprentice es un excelente recurso para los aspirantes a desarrolladores de aplicaciones que desean dar vida a sus ideas en las plataformas Android e iOS.",
                                        'हिंदी': "फ़्लटर अप्रेंटिस शुरुआती लोगों के लिए फ़्लटर सीखने के लिए एक व्यापक मार्गदर्शिका है, जो क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने के लिए एक लोकप्रिय ओपन-सोर्स फ़्रेमवर्क है। अनुभवी डेवलपर्स की एक टीम द्वारा लिखित, यह पुस्तक फ़्लटर में महारत हासिल करने के लिए एक व्यावहारिक, प्रोजेक्ट-आधारित दृष्टिकोण प्रदान करती है। इसमें डार्ट प्रोग्रामिंग, स्टेट मैनेजमेंट, UI डिज़ाइन और एनिमेशन और API जैसी सुविधाओं को एकीकृत करने की बुनियादी बातों को शामिल किया गया है। प्रत्येक अध्याय व्यावहारिक परियोजनाओं पर आधारित है, जिससे पाठकों को अपने कौशल में आत्मविश्वास प्राप्त करते हुए वास्तविक दुनिया के ऐप विकसित करने में सक्षम बनाया जा सके। स्पष्ट स्पष्टीकरण, चरण-दर-चरण निर्देश और सामान्य नुकसानों से बचने के सुझावों के साथ, फ़्लटर अप्रेंटिस महत्वाकांक्षी ऐप डेवलपर्स के लिए एक उत्कृष्ट संसाधन है जो अपने विचारों को Android और iOS प्लेटफ़ॉर्म पर जीवंत करना चाहते हैं।",
                                        'Português': "Flutter Apprentice é um guia completo para principiantes aprenderem Flutter, uma estrutura popular de código aberto para a construção de aplicações móveis multiplataforma. Da autoria de uma equipa de programadores experientes, o livro oferece uma abordagem prática e baseada em projetos para dominar o Flutter. Abrange os fundamentos da programação Dart, gestão de estado, design de UI e integração de recursos como animações e APIs. Cada capítulo baseia-se em projetos práticos, permitindo aos leitores desenvolver aplicações do mundo real enquanto ganham confiança nas suas capacidades. Com explicações claras, instruções passo a passo e dicas para evitar armadilhas comuns, Flutter Apprentice é um excelente recurso para aspirantes a programadores de aplicações que desejam dar vida às suas ideias nas plataformas Android e iOS.",
                                        'বাংলা': "ফ্লটার অ্যাপ্রেন্টিস হল নতুনদের জন্য ফ্লটার শেখার জন্য একটি ব্যাপক নির্দেশিকা, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরির জন্য একটি জনপ্রিয় ওপেন-সোর্স ফ্রেমওয়ার্ক। অভিজ্ঞ ডেভেলপারদের একটি দল দ্বারা রচিত, বইটি ফ্লটারকে আয়ত্ত করার জন্য একটি হ্যান্ডস-অন, প্রকল্প-ভিত্তিক পদ্ধতি প্রদান করে। এটি ডার্ট প্রোগ্রামিং, স্টেট ম্যানেজমেন্ট, UI ডিজাইন এবং অ্যানিমেশন এবং API-এর মতো বৈশিষ্ট্যগুলিকে একীভূত করার মৌলিক বিষয়গুলি কভার করে৷ প্রতিটি অধ্যায় ব্যবহারিক প্রকল্পের উপর ভিত্তি করে তৈরি করে, পাঠকদের তাদের দক্ষতার প্রতি আস্থা অর্জনের সাথে সাথে বাস্তব-বিশ্বের অ্যাপ বিকাশ করতে সক্ষম করে। স্পষ্ট ব্যাখ্যা, ধাপে ধাপে নির্দেশাবলী এবং সাধারণ সমস্যাগুলি এড়াতে টিপস সহ, Flutter Apprentice উচ্চাকাঙ্ক্ষী অ্যাপ বিকাশকারীদের জন্য একটি চমৎকার সংস্থান যারা Android এবং iOS প্ল্যাটফর্মে তাদের ধারণাগুলিকে জীবন্ত করতে চান৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Apprentice دليلاً شاملاً للمبتدئين لتعلم Flutter، وهو إطار عمل مفتوح المصدر شائع لبناء تطبيقات جوال متعددة الأنظمة. يقدم الكتاب، الذي ألفه فريق من المطورين ذوي الخبرة، نهجًا عمليًا قائمًا على المشروع لإتقان Flutter. ويغطي أساسيات برمجة Dart وإدارة الحالة وتصميم واجهة المستخدم ودمج ميزات مثل الرسوم المتحركة وواجهات برمجة التطبيقات. يعتمد كل فصل على مشاريع عملية، مما يتيح للقراء تطوير تطبيقات واقعية مع اكتساب الثقة في مهاراتهم. مع التفسيرات الواضحة والتعليمات خطوة بخطوة والنصائح لتجنب الأخطاء الشائعة، يعد Flutter Apprentice موردًا ممتازًا لمطوري التطبيقات الطموحين الذين يرغبون في إحياء أفكارهم على منصات Android وiOS.",
                                        'فارسی': "Flutter Apprentice یک راهنمای جامع برای مبتدیان برای یادگیری Flutter است، یک فریم ورک منبع باز محبوب برای ساخت اپلیکیشن های موبایلی چند پلتفرمی. این کتاب که توسط تیمی از توسعه دهندگان با تجربه نوشته شده است، رویکردی عملی و مبتنی بر پروژه برای تسلط بر فلاتر ارائه می دهد. این مبانی برنامه نویسی Dart، مدیریت حالت، طراحی UI، و یکپارچه سازی ویژگی هایی مانند انیمیشن ها و API ها را پوشش می دهد. هر فصل بر اساس پروژه های عملی ساخته شده است و خوانندگان را قادر می سازد تا برنامه های دنیای واقعی را توسعه دهند و در عین حال به مهارت های خود اعتماد کنند. Flutter Apprentice با توضیحات واضح، دستورالعمل‌های گام به گام و نکاتی برای جلوگیری از مشکلات رایج، منبعی عالی برای توسعه‌دهندگان برنامه‌های مشتاقی است که می‌خواهند ایده‌های خود را در پلتفرم‌های اندروید و iOS زنده کنند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/1 - Flutter Apprentice.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/1%20-%20Flutter%20Apprentice.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/1%20-%20Flutter%20Apprentice.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/1%20-%20Flutter%20Apprentice.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/1%20-%20Flutter%20Apprentice.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/1%20-%20Flutter%20Apprentice.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/1%20-%20Flutter%20Apprentice.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/1%20-%20Flutter%20Apprentice.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/1%20-%20Flutter%20Apprentice.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/1%20-%20Flutter%20Apprentice.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/1%20-%20Flutter%20Apprentice.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/1%20-%20Flutter%20Apprentice.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/1%20-%20Flutter%20Apprentice.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/1%20-%20Flutter%20Apprentice.md",
                                },
                        },
                ],
                // -- >> Mechanical Engineer
                "Mechanical Engineer": [
                        // -- > NLP - 2 : Mastering NLP from Foundations to LLMs
                        {
                                "title": {
                                        'English': "Mastering NLP from Foundations to LLMs",
                                        'Deutsch': "Mastering NLP from Foundations to LLMs",
                                        '中国人': "Mastering NLP from Foundations to LLMs",
                                        'Русский': "Mastering NLP from Foundations to LLMs",
                                        'Français': "Mastering NLP from Foundations to LLMs",
                                        '日本語': "Mastering NLP from Foundations to LLMs",
                                        '한국인': "Mastering NLP from Foundations to LLMs",
                                        'Español': "Mastering NLP from Foundations to LLMs",
                                        'हिंदी': "Mastering NLP from Foundations to LLMs",
                                        'Português': "Mastering NLP from Foundations to LLMs",
                                        'বাংলা': "Mastering NLP from Foundations to LLMs",
                                        'عَرَبِيّ': "Mastering NLP from Foundations to LLMs",
                                        'فارسی': "Mastering NLP from Foundations to LLMs",
                                },
                                "description": {
                                        'English': "Mastering NLP from Foundations to LLMs is a comprehensive guide authored by Lior Gazit and Meysam Ghaffari, published on April 26, 2024. This book offers an in-depth introduction to Natural Language Processing (NLP) techniques, beginning with the mathematical foundations of machine learning and progressing to advanced applications involving Large Language Models (LLMs). It covers essential topics such as text preprocessing, traditional machine learning methods for text classification, and deep learning language models. Additionally, the authors explore the theory, design, and implementation of LLMs, providing practical Python code samples throughout. The book also discusses future trends in NLP and includes expert insights, making it a valuable resource for both beginners and experienced practitioners aiming to solve real-world business problems using Python. ",
                                        'Deutsch': "„Mastering NLP from Foundations to LLMs“ ist ein umfassender Leitfaden von Lior Gazit und Meysam Ghaffari, der am 26. April 2024 veröffentlicht wurde. Dieses Buch bietet eine ausführliche Einführung in Techniken der natürlichen Sprachverarbeitung (Natural Language Processing, NLP), beginnend mit den mathematischen Grundlagen des maschinellen Lernens und fortschreitend bis hin zu fortgeschrittenen Anwendungen mit Large Language Models (LLMs). Es behandelt wichtige Themen wie Textvorverarbeitung, traditionelle Methoden des maschinellen Lernens zur Textklassifizierung und Deep-Learning-Sprachmodelle. Darüber hinaus untersuchen die Autoren die Theorie, das Design und die Implementierung von LLMs und liefern durchgehend praktische Python-Codebeispiele. Das Buch diskutiert auch zukünftige Trends in der NLP und enthält Experteneinblicke, was es zu einer wertvollen Ressource sowohl für Anfänger als auch für erfahrene Praktiker macht, die reale Geschäftsprobleme mit Python lösen möchten.",
                                        '中国人': "《从基础到 LLM 精通 NLP》是一本综合指南，由 Lior Gazit 和 Meysam Ghaffari 撰写，出版于 2024 年 4 月 26 日。本书深入介绍了自然语言处理 (NLP) 技术，从机器学习的数学基础开始，逐步介绍涉及大型语言模型 (LLM) 的高级应用。它涵盖了文本预处理、用于文本分类的传统机器学习方法和深度学习语言模型等重要主题。此外，作者还探讨了 LLM 的理论、设计和实现，并提供了实用的 Python 代码示例。本书还讨论了 NLP 的未来趋势，并包含专家见解，使其成为初学者和经验丰富的从业者使用 Python 解决实际业务问题的宝贵资源。",
                                        'Русский': "Mastering NLP from Foundations to LLMs — это всеобъемлющее руководство, написанное Лиором Газитом и Мейсамом Гаффари, опубликованное 26 апреля 2024 года. Эта книга предлагает углубленное введение в методы обработки естественного языка (NLP), начиная с математических основ машинного обучения и заканчивая продвинутыми приложениями, включающими большие языковые модели (LLM). Она охватывает такие важные темы, как предварительная обработка текста, традиционные методы машинного обучения для классификации текста и модели языка глубокого обучения. Кроме того, авторы изучают теорию, проектирование и реализацию LLM, предоставляя практические примеры кода Python. В книге также обсуждаются будущие тенденции в области NLP и содержатся экспертные идеи, что делает ее ценным ресурсом как для новичков, так и для опытных практиков, стремящихся решать реальные бизнес-задачи с помощью Python.",
                                        'Français': "Mastering NLP from Foundations to LLMs est un guide complet rédigé par Lior Gazit et Meysam Ghaffari, publié le 26 avril 2024. Ce livre propose une introduction approfondie aux techniques de traitement du langage naturel (NLP), en commençant par les fondements mathématiques de l'apprentissage automatique et en progressant vers des applications avancées impliquant de grands modèles linguistiques (LLM). Il couvre des sujets essentiels tels que le prétraitement de texte, les méthodes traditionnelles d'apprentissage automatique pour la classification de texte et les modèles de langage d'apprentissage profond. De plus, les auteurs explorent la théorie, la conception et la mise en œuvre des LLM, en fournissant des exemples de code Python pratiques tout au long du livre. Le livre aborde également les tendances futures du NLP et comprend des points de vue d'experts, ce qui en fait une ressource précieuse pour les débutants et les praticiens expérimentés qui souhaitent résoudre des problèmes commerciaux réels à l'aide de Python.",
                                        '日本語': "『Mastering NLP from Foundations to LLMs』は、Lior Gazit と Meysam Ghaffari が執筆し、2024 年 4 月 26 日に出版された総合ガイドです。この本は、機械学習の数学的基礎から始まり、大規模言語モデル (LLM) を含む高度なアプリケーションまで、自然言語処理 (NLP) 技術の詳細な入門書です。テキスト前処理、テキスト分類のための従来の機械学習手法、ディープラーニング言語モデルなどの重要なトピックを取り上げています。さらに、著者は LLM の理論、設計、実装を探求し、全体を通して実用的な Python コードサンプルを提供しています。この本では、NLP の将来の動向についても説明されており、専門家の洞察も含まれているため、Python を使用して実際のビジネス問題を解決しようとしている初心者と経験豊富な実務家の両方にとって貴重なリソースとなっています。",
                                        '한국인': "Mastering NLP from Foundations to LLMs는 Lior Gazit과 Meysam Ghaffari가 저술하고 2024년 4월 26일에 출판한 포괄적인 가이드입니다. 이 책은 기계 학습의 수학적 기초에서 시작하여 대규모 언어 모델(LLM)을 포함하는 고급 애플리케이션으로 진행되는 자연어 처리(NLP) 기술에 대한 심층적인 소개를 제공합니다. 텍스트 전처리, 텍스트 분류를 위한 기존 기계 학습 방법, 딥 러닝 언어 모델과 같은 필수 주제를 다룹니다. 또한 저자는 LLM의 이론, 설계 및 구현을 탐구하고 전반적으로 실용적인 Python 코드 샘플을 제공합니다. 이 책은 또한 NLP의 미래 동향에 대해 논의하고 전문가의 통찰력을 포함하여 Python을 사용하여 실제 비즈니스 문제를 해결하려는 초보자와 숙련된 실무자 모두에게 귀중한 리소스가 됩니다.",
                                        'Español': "Mastering NLP from Foundations to LLMs es una guía completa escrita por Lior Gazit y Meysam Ghaffari, publicada el 26 de abril de 2024. Este libro ofrece una introducción detallada a las técnicas de procesamiento del lenguaje natural (PLN), comenzando con los fundamentos matemáticos del aprendizaje automático y avanzando hacia aplicaciones avanzadas que involucran modelos de lenguaje grandes (LLM). Abarca temas esenciales como el preprocesamiento de texto, los métodos tradicionales de aprendizaje automático para la clasificación de texto y los modelos de lenguaje de aprendizaje profundo. Además, los autores exploran la teoría, el diseño y la implementación de los LLM, proporcionando ejemplos prácticos de código Python en todo momento. El libro también analiza las tendencias futuras en PNL e incluye perspectivas de expertos, lo que lo convierte en un recurso valioso tanto para principiantes como para profesionales experimentados que buscan resolver problemas comerciales del mundo real utilizando Python.",
                                        'हिंदी': "मास्टरिंग एनएलपी फ्रॉम फाउंडेशन्स टू एलएलएम लियोर गज़िट और मेसम गफ़री द्वारा लिखित एक व्यापक गाइड है, जिसे 26 अप्रैल, 2024 को प्रकाशित किया गया था। यह पुस्तक नेचुरल लैंग्वेज प्रोसेसिंग (एनएलपी) तकनीकों का गहन परिचय प्रदान करती है, जो मशीन लर्निंग के गणितीय आधारों से शुरू होकर लार्ज लैंग्वेज मॉडल्स (एलएलएम) से जुड़े उन्नत अनुप्रयोगों तक आगे बढ़ती है। इसमें टेक्स्ट प्रीप्रोसेसिंग, टेक्स्ट वर्गीकरण के लिए पारंपरिक मशीन लर्निंग विधियाँ और डीप लर्निंग लैंग्वेज मॉडल जैसे आवश्यक विषय शामिल हैं। इसके अतिरिक्त, लेखक एलएलएम के सिद्धांत, डिज़ाइन और कार्यान्वयन का पता लगाते हैं, जो पूरे समय व्यावहारिक पायथन कोड नमूने प्रदान करते हैं। पुस्तक एनएलपी में भविष्य के रुझानों पर भी चर्चा करती है और इसमें विशेषज्ञ अंतर्दृष्टि शामिल है, जो इसे पायथन का उपयोग करके वास्तविक दुनिया की व्यावसायिक समस्याओं को हल करने का लक्ष्य रखने वाले शुरुआती और अनुभवी चिकित्सकों दोनों के लिए एक मूल्यवान संसाधन बनाती है।",
                                        'Português': "Mastering NLP from Foundations to LLMs é um guia completo da autoria de Lior Gazit e Meysam Ghaffari, publicado a 26 de abril de 2024. Este livro oferece uma introdução detalhada às técnicas de Processamento de Linguagem Natural (PLN), começando pelos fundamentos matemáticos da aprendizagem automática. e progredindo para aplicações avançadas envolvendo Large Language Models (LLMs). Abrange tópicos essenciais como o pré-processamento de texto, os métodos tradicionais de aprendizagem automática para classificação de texto e os modelos de linguagem de aprendizagem profunda. Além disso, os autores exploram a teoria, o design e a implementação de LLMs, fornecendo exemplos práticos de código Python. O livro também discute as tendências futuras em PNL e inclui insights de especialistas, tornando-o um recurso valioso tanto para principiantes como para profissionais experientes que desejam resolver problemas de negócios do mundo real utilizando Python.",
                                        'বাংলা': "ফাউন্ডেশন থেকে এলএলএম পর্যন্ত এনএলপি মাস্টারিং হল লিওর গাজিট এবং মেসাম গাফফারি দ্বারা রচিত একটি বিস্তৃত নির্দেশিকা, যা 26 এপ্রিল, 2024-এ প্রকাশিত হয়েছে। এই বইটি মেশিন লার্নিংয়ের গাণিতিক ভিত্তি দিয়ে শুরু করে প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (এনএলপি) কৌশলগুলির একটি গভীরভাবে পরিচিতি প্রদান করে। এবং বৃহৎ ভাষার মডেল জড়িত উন্নত অ্যাপ্লিকেশনে অগ্রগতি (এলএলএম)। এটি প্রয়োজনীয় বিষয়গুলি কভার করে যেমন পাঠ্য প্রিপ্রসেসিং, পাঠ্য শ্রেণিবিন্যাসের জন্য প্রথাগত মেশিন লার্নিং পদ্ধতি এবং গভীর শিক্ষার ভাষা মডেল। অতিরিক্তভাবে, লেখকরা LLM-এর তত্ত্ব, নকশা এবং বাস্তবায়ন অন্বেষণ করেন, সর্বত্র ব্যবহারিক পাইথন কোড নমুনা প্রদান করেন। বইটি NLP-এর ভবিষ্যৎ প্রবণতা নিয়েও আলোচনা করে এবং এতে বিশেষজ্ঞের অন্তর্দৃষ্টি অন্তর্ভুক্ত রয়েছে, যা পাইথন ব্যবহার করে বাস্তব-বিশ্বের ব্যবসায়িক সমস্যা সমাধানের লক্ষ্যে নতুন এবং অভিজ্ঞ অনুশীলনকারীদের উভয়ের জন্যই এটিকে একটি মূল্যবান সম্পদ করে তুলেছে।",
                                        'عَرَبِيّ': "يعد كتاب Mastering NLP from Foundations to LLMs دليلاً شاملاً من تأليف ليور جازيت وميسام غفاري، ونُشر في 26 أبريل 2024. يقدم هذا الكتاب مقدمة متعمقة لتقنيات معالجة اللغة الطبيعية (NLP)، بدءًا من الأسس الرياضية للتعلم الآلي والتقدم إلى التطبيقات المتقدمة التي تتضمن نماذج اللغة الكبيرة (LLMs). ويغطي موضوعات أساسية مثل معالجة النصوص مسبقًا، وطرق التعلم الآلي التقليدية لتصنيف النصوص، ونماذج اللغة للتعلم العميق. بالإضافة إلى ذلك، يستكشف المؤلفون نظرية وتصميم وتنفيذ نماذج اللغة الكبيرة، مما يوفر عينات عملية من أكواد بايثون في جميع أنحاء الكتاب. يناقش الكتاب أيضًا الاتجاهات المستقبلية في معالجة اللغة الطبيعية ويتضمن رؤى الخبراء، مما يجعله موردًا قيمًا للمبتدئين والممارسين ذوي الخبرة الذين يهدفون إلى حل مشاكل الأعمال في العالم الحقيقي باستخدام بايثون.",
                                        'فارسی': "تسلط بر NLP از مبانی تا LLM یک راهنمای جامع است که توسط لیور گازیت و میثم غفاری منتشر شده است که در 26 آوریل 2024 منتشر شده است. این کتاب مقدمه ای عمیق بر تکنیک های پردازش زبان طبیعی (NLP) ارائه می دهد که با مبانی ریاضی یادگیری ماشین شروع می شود. و پیشرفت به سمت برنامه های کاربردی پیشرفته شامل مدل های زبان بزرگ (LLM). موضوعات ضروری مانند پیش پردازش متن، روش های سنتی یادگیری ماشینی برای طبقه بندی متن و مدل های زبان یادگیری عمیق را پوشش می دهد. علاوه بر این، نویسندگان نظریه، طراحی و پیاده سازی LLM ها را بررسی می کنند و نمونه های عملی کد پایتون را در سراسر آن ارائه می کنند. این کتاب همچنین روندهای آینده در NLP را مورد بحث قرار می‌دهد و شامل بینش‌های متخصص می‌شود، که آن را به منبعی ارزشمند برای مبتدیان و متخصصان با تجربه تبدیل می‌کند که هدفشان حل مشکلات تجاری دنیای واقعی با استفاده از پایتون است.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/AI Engineer/4 - Mastering NLP from Foundations to LLMs.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/English/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/German/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Chinese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Russian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/French/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Japanese/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Korean/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Spanish/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Hindi/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Portugues/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Bengali/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Arabic/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/AI%20Engineer/Books/Persian/4%20-%20Mastering%20NLP%20from%20Foundations%20to%20LLMs.md",
                                },
                        },
                        // -- > FLUTTER - 1 : Flutter Complete Reference Book
                        {
                                "title": {
                                        'English': "Flutter Complete Reference",
                                        'Deutsch': "Flutter Complete Reference",
                                        '中国人': "Flutter Complete Reference",
                                        'Русский': "Flutter Complete Reference",
                                        'Français': "Flutter Complete Reference",
                                        '日本語': "Flutter Complete Reference",
                                        '한국인': "Flutter Complete Reference",
                                        'Español': "Flutter Complete Reference",
                                        'हिंदी': "Flutter Complete Reference",
                                        'Português': "Flutter Complete Reference",
                                        'বাংলা': "Flutter Complete Reference",
                                        'عَرَبِيّ': "Flutter Complete Reference",
                                        'فارسی': "Flutter Complete Reference",
                                },
                                "description": {
                                        'English': "Flutter Complete Reference by Alberto Miola is a comprehensive guide for developers seeking to master Flutter, Google's open-source UI toolkit for crafting natively compiled applications. The book provides a deep dive into the fundamentals of Flutter, covering essential topics like widget architecture, state management, animations, and advanced techniques for creating responsive and high-performance apps. With practical examples and detailed explanations, it serves as both a beginner-friendly introduction and a valuable resource for experienced developers looking to refine their skills. Alberto Miola combines clarity with hands-on approaches, making it an indispensable reference for Flutter enthusiasts.",
                                        'Deutsch': "Flutter Complete Reference von Alberto Miola ist ein umfassender Leitfaden für Entwickler, die Flutter beherrschen möchten, Googles Open-Source-UI-Toolkit zum Erstellen nativ kompilierter Anwendungen. Das Buch bietet einen tiefen Einblick in die Grundlagen von Flutter und behandelt wichtige Themen wie Widget-Architektur, Statusverwaltung, Animationen und fortgeschrittene Techniken zum Erstellen reaktionsfähiger und leistungsstarker Apps. Mit praktischen Beispielen und detaillierten Erklärungen dient es sowohl als anfängerfreundliche Einführung als auch als wertvolle Ressource für erfahrene Entwickler, die ihre Fähigkeiten verfeinern möchten. Alberto Miola kombiniert Klarheit mit praktischen Ansätzen und macht es zu einem unverzichtbaren Nachschlagewerk für Flutter-Enthusiasten.",
                                        '中国人': "Alberto Miola 编写的《Flutter 完整参考》是一本全面的指南，适合希望掌握 Flutter 的开发人员，Flutter 是 Google 的开源 UI 工具包，用于制作原生编译的应用程序。本书深入探讨了 Flutter 的基础知识，涵盖了小部件架构、状态管理、动画和创建响应式高性能应用程序的高级技术等基本主题。通过实际示例和详细解释，它既是初学者友好的入门书，也是希望提高技能的经验丰富的开发人员的宝贵资源。Alberto Miola 将清晰度与实践方法相结合，使其成为 Flutter 爱好者不可或缺的参考资料。",
                                        'Русский': "Flutter Complete Reference Альберто Миолы — это всеобъемлющее руководство для разработчиков, стремящихся освоить Flutter, набор инструментов пользовательского интерфейса с открытым исходным кодом от Google для создания скомпилированных приложений. Книга предлагает глубокое погружение в основы Flutter, охватывая такие важные темы, как архитектура виджетов, управление состоянием, анимация и передовые методы создания адаптивных и высокопроизводительных приложений. С практическими примерами и подробными объяснениями она служит как введением для новичков, так и ценным ресурсом для опытных разработчиков, желающих усовершенствовать свои навыки. Альберто Миола сочетает ясность с практическими подходами, что делает ее незаменимым справочником для энтузиастов Flutter.",
                                        'Français': "Flutter Complete Reference d'Alberto Miola est un guide complet pour les développeurs qui cherchent à maîtriser Flutter, la boîte à outils d'interface utilisateur open source de Google pour la création d'applications compilées en mode natif. Le livre propose une plongée en profondeur dans les fondamentaux de Flutter, couvrant des sujets essentiels comme l'architecture des widgets, la gestion des états, les animations et les techniques avancées pour créer des applications réactives et performantes. Avec des exemples pratiques et des explications détaillées, il sert à la fois d'introduction conviviale pour les débutants et de ressource précieuse pour les développeurs expérimentés qui cherchent à perfectionner leurs compétences. Alberto Miola allie clarté et approches pratiques, ce qui en fait une référence indispensable pour les passionnés de Flutter.",
                                        '日本語': "Alberto Miola 著の『Flutter Complete Reference』は、ネイティブ コンパイル アプリケーションを作成するための Google のオープンソース UI ツールキットである Flutter を習得したい開発者向けの総合ガイドです。本書では、ウィジェット アーキテクチャ、状態管理、アニメーション、レスポンシブで高性能なアプリケーションを作成するための高度なテクニックなど、Flutter の基礎を深く掘り下げて解説しています。実用的な例と詳細な説明が盛り込まれており、初心者向けの入門書としてだけでなく、スキルを磨きたい経験豊富な開発者にとって貴重なリソースとしても役立ちます。Alberto Miola は、明快さと実践的なアプローチを組み合わせており、Flutter 愛好家にとって欠かせないリファレンスとなっています。",
                                        '한국인': "Alberto Miola의 Flutter Complete Reference는 네이티브 컴파일 애플리케이션을 제작하기 위한 Google의 오픈소스 UI 툴킷인 Flutter를 마스터하려는 개발자를 위한 포괄적인 가이드입니다. 이 책은 위젯 아키텍처, 상태 관리, 애니메이션 및 반응형 고성능 앱을 만드는 고급 기술과 같은 필수 주제를 다루는 Flutter의 기본에 대한 심층적인 분석을 제공합니다. 실용적인 예제와 자세한 설명이 포함되어 있어 초보자에게 친숙한 소개서이자 기술을 다듬고자 하는 숙련된 개발자에게 귀중한 리소스 역할을 합니다. Alberto Miola는 명확성과 실무적 접근 방식을 결합하여 Flutter 애호가에게 없어서는 안 될 참고 자료가 되었습니다.",
                                        'Español': "Flutter Complete Reference de Alberto Miola es una guía completa para desarrolladores que buscan dominar Flutter, el kit de herramientas de interfaz de usuario de código abierto de Google para crear aplicaciones compiladas de forma nativa. El libro ofrece una inmersión profunda en los fundamentos de Flutter y cubre temas esenciales como la arquitectura de widgets, la gestión de estados, las animaciones y las técnicas avanzadas para crear aplicaciones responsivas y de alto rendimiento. Con ejemplos prácticos y explicaciones detalladas, sirve como una introducción para principiantes y un recurso valioso para desarrolladores experimentados que buscan perfeccionar sus habilidades. Alberto Miola combina claridad con enfoques prácticos, lo que lo convierte en una referencia indispensable para los entusiastas de Flutter.",
                                        'हिंदी': "अल्बर्टो मिओला द्वारा लिखित फ़्लटर कम्प्लीट रेफरेंस उन डेवलपर्स के लिए एक व्यापक गाइड है जो फ़्लटर में महारत हासिल करना चाहते हैं, यह नेटिवली कम्पाइल किए गए एप्लिकेशन तैयार करने के लिए Google का ओपन-सोर्स UI टूलकिट है। यह पुस्तक फ़्लटर के मूल सिद्धांतों में गहराई से गोता लगाती है, जिसमें विजेट आर्किटेक्चर, स्टेट मैनेजमेंट, एनिमेशन और रिस्पॉन्सिव और हाई-परफ़ॉर्मेंस ऐप बनाने के लिए उन्नत तकनीकों जैसे आवश्यक विषयों को शामिल किया गया है। व्यावहारिक उदाहरणों और विस्तृत व्याख्याओं के साथ, यह शुरुआती लोगों के लिए एक अनुकूल परिचय और अपने कौशल को निखारने के इच्छुक अनुभवी डेवलपर्स के लिए एक मूल्यवान संसाधन दोनों के रूप में कार्य करता है। अल्बर्टो मिओला स्पष्टता को व्यावहारिक दृष्टिकोणों के साथ जोड़ता है, जो इसे फ़्लटर उत्साही लोगों के लिए एक अपरिहार्य संदर्भ बनाता है।",
                                        'Português': "Flutter Complete Reference de Alberto Miola é um guia completo para programadores que procuram dominar o Flutter, o kit de ferramentas de UI de código aberto da Google para criar aplicações compiladas nativamente. O livro proporciona um mergulho profundo nos fundamentos do Flutter, abordando tópicos essenciais como a arquitetura de widgets, a gestão de estado, as animações e as técnicas avançadas para criar aplicações responsivas e de alto desempenho. Com exemplos práticos e explicações detalhadas, serve tanto como uma introdução para principiantes como um recurso valioso para programadores experientes que procuram melhorar as suas capacidades. Alberto Miola combina clareza com abordagens práticas, tornando-o uma referência indispensável para os entusiastas do Flutter.",
                                        'বাংলা': "অ্যালবার্তো মিওলার ফ্লাটার কমপ্লিট রেফারেন্স হল ফ্লাটারে দক্ষতা অর্জন করতে চাওয়া ডেভেলপারদের জন্য একটি বিস্তৃত নির্দেশিকা, নেটিভলি কম্পাইল করা অ্যাপ্লিকেশন তৈরির জন্য Google-এর ওপেন-সোর্স UI টুলকিট। বইটি ফ্লটারের মৌলিক বিষয়গুলির মধ্যে গভীর ডুব দেয়, উইজেট আর্কিটেকচার, রাষ্ট্র পরিচালনা, অ্যানিমেশন এবং প্রতিক্রিয়াশীল এবং উচ্চ-পারফরম্যান্স অ্যাপ তৈরির জন্য উন্নত কৌশলগুলির মতো প্রয়োজনীয় বিষয়গুলিকে কভার করে৷ ব্যবহারিক উদাহরণ এবং বিশদ ব্যাখ্যা সহ, এটি একটি শিক্ষানবিস-বন্ধুত্বপূর্ণ ভূমিকা এবং তাদের দক্ষতা পরিমার্জিত করার জন্য অভিজ্ঞ বিকাশকারীদের জন্য একটি মূল্যবান সংস্থান উভয়ই কাজ করে৷ আলবার্তো মিওলা হ্যান্ডস-অন পন্থাগুলির সাথে স্পষ্টতাকে একত্রিত করে, এটিকে ফ্লটার উত্সাহীদের জন্য একটি অপরিহার্য রেফারেন্স করে তোলে৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Complete Reference من تأليف Alberto Miola دليلاً شاملاً للمطورين الذين يسعون إلى إتقان Flutter، وهي مجموعة أدوات واجهة المستخدم مفتوحة المصدر من Google لإنشاء تطبيقات مجمعة محليًا. يوفر الكتاب نظرة متعمقة في أساسيات Flutter، ويغطي موضوعات أساسية مثل بنية الأداة، وإدارة الحالة، والرسوم المتحركة، والتقنيات المتقدمة لإنشاء تطبيقات سريعة الاستجابة وعالية الأداء. مع أمثلة عملية وشروحات مفصلة، ​​فهو بمثابة مقدمة سهلة للمبتدئين ومورد قيم للمطورين ذوي الخبرة الذين يتطلعون إلى صقل مهاراتهم. يجمع Alberto Miola بين الوضوح والأساليب العملية، مما يجعله مرجعًا لا غنى عنه لعشاق Flutter.",
                                        'فارسی': "مرجع کامل Flutter توسط Alberto Miola یک راهنمای جامع برای توسعه دهندگانی است که به دنبال تسلط بر Flutter، جعبه ابزار UI منبع باز Google برای ایجاد برنامه های کاربردی کامپایل شده بومی هستند. این کتاب به بررسی اصول فلاتر می پردازد و موضوعات ضروری مانند معماری ویجت، مدیریت حالت، انیمیشن ها و تکنیک های پیشرفته برای ایجاد اپلیکیشن های پاسخگو و با کارایی بالا را پوشش می دهد. با مثال‌های عملی و توضیحات مفصل، هم به‌عنوان مقدمه‌ای مناسب برای مبتدیان و هم منبعی ارزشمند برای توسعه‌دهندگان با تجربه ای است که به دنبال اصلاح مهارت‌های خود هستند. آلبرتو میولا وضوح را با رویکردهای عملی ترکیب می کند و آن را به مرجعی ضروری برای علاقه مندان به فلاتر تبدیل می کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/2 - Flutter Complete Reference.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/2%20-%20Flutter%20Complete%20Reference.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/2%20-%20Flutter%20Complete%20Reference.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/2%20-%20Flutter%20Complete%20Reference.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/2%20-%20Flutter%20Complete%20Reference.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/2%20-%20Flutter%20Complete%20Reference.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/2%20-%20Flutter%20Complete%20Reference.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/2%20-%20Flutter%20Complete%20Reference.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/2%20-%20Flutter%20Complete%20Reference.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/2%20-%20Flutter%20Complete%20Reference.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter Apprentice
                        {
                                "title": {
                                        'English': "Flutter Apprentice",
                                        'Deutsch': "Flutter Apprentice",
                                        '中国人': "Flutter Apprentice",
                                        'Русский': "Flutter Apprentice",
                                        'Français': "Flutter Apprentice",
                                        '日本語': "Flutter Apprentice",
                                        '한국인': "Flutter Apprentice",
                                        'Español': "Flutter Apprentice",
                                        'हिंदी': "Flutter Apprentice",
                                        'Português': "Flutter Apprentice",
                                        'বাংলা': "Flutter Apprentice",
                                        'عَرَبِيّ': "Flutter Apprentice",
                                        'فارسی': "Flutter Apprentice",
                                },
                                "description": {
                                        'English': "Flutter Apprentice is a comprehensive guide for beginners to learn Flutter, a popular open-source framework for building cross-platform mobile applications. Authored by a team of experienced developers, the book provides a hands-on, project-based approach to mastering Flutter. It covers the fundamentals of Dart programming, state management, UI design, and integrating features like animations and APIs. Each chapter builds on practical projects, enabling readers to develop real-world apps while gaining confidence in their skills. With clear explanations, step-by-step instructions, and tips to avoid common pitfalls, Flutter Apprentice is an excellent resource for aspiring app developers who want to bring their ideas to life on Android and iOS platforms.",
                                        'Deutsch': "Flutter Apprentice ist ein umfassender Leitfaden für Anfänger zum Erlernen von Flutter, einem beliebten Open-Source-Framework zum Erstellen plattformübergreifender mobiler Anwendungen. Das von einem Team erfahrener Entwickler verfasste Buch bietet einen praktischen, projektbasierten Ansatz zum Erlernen von Flutter. Es behandelt die Grundlagen der Dart-Programmierung, der Zustandsverwaltung, des UI-Designs und der Integration von Funktionen wie Animationen und APIs. Jedes Kapitel basiert auf praktischen Projekten, sodass die Leser reale Apps entwickeln und gleichzeitig Vertrauen in ihre Fähigkeiten gewinnen können. Mit klaren Erklärungen, Schritt-für-Schritt-Anleitungen und Tipps zum Vermeiden häufiger Fehler ist Flutter Apprentice eine hervorragende Ressource für angehende App-Entwickler, die ihre Ideen auf Android- und iOS-Plattformen zum Leben erwecken möchten.",
                                        '中国人': "Flutter Apprentice 是一本全面的指南，帮助初学者学习 Flutter，Flutter 是一种用于构建跨平台移动应用程序的流行开源框架。本书由一支经验丰富的开发人员团队撰写，提供了一种基于项目的动手实践方法来掌握 Flutter。它涵盖了 Dart 编程、状态管理、UI 设计和集成动画和 API 等功能的基础知识。每一章都以实际项目为基础，使读者能够开发真实的应用程序，同时增强对自己技能的信心。Flutter Apprentice 具有清晰的解释、分步说明和避免常见陷阱的技巧，是希望在 Android 和 iOS 平台上实现自己想法的有抱负的应用程序开发人员的绝佳资源。",
                                        'Русский': "Flutter Apprentice — это полное руководство для начинающих по изучению Flutter, популярного фреймворка с открытым исходным кодом для создания кроссплатформенных мобильных приложений. Книга, написанная командой опытных разработчиков, предлагает практический подход к освоению Flutter на основе проектов. Она охватывает основы программирования Dart, управления состоянием, проектирования пользовательского интерфейса и интеграции таких функций, как анимация и API. Каждая глава основана на практических проектах, что позволяет читателям разрабатывать реальные приложения, обретая уверенность в своих навыках. Благодаря понятным объяснениям, пошаговым инструкциям и советам по избежанию распространенных ошибок Flutter Apprentice является отличным ресурсом для начинающих разработчиков приложений, которые хотят воплотить свои идеи в жизнь на платформах Android и iOS.",
                                        'Français': "Flutter Apprentice est un guide complet destiné aux débutants pour apprendre Flutter, un framework open source populaire pour la création d'applications mobiles multiplateformes. Rédigé par une équipe de développeurs expérimentés, le livre propose une approche pratique et basée sur des projets pour maîtriser Flutter. Il couvre les fondamentaux de la programmation Dart, la gestion des états, la conception d'interface utilisateur et l'intégration de fonctionnalités telles que les animations et les API. Chaque chapitre s'appuie sur des projets pratiques, permettant aux lecteurs de développer des applications concrètes tout en gagnant en confiance dans leurs compétences. Avec des explications claires, des instructions étape par étape et des conseils pour éviter les pièges courants, Flutter Apprentice est une excellente ressource pour les développeurs d'applications en herbe qui souhaitent donner vie à leurs idées sur les plateformes Android et iOS.",
                                        '日本語': "Flutter Apprentice は、クロスプラットフォーム モバイル アプリケーションを構築するための人気のオープン ソース フレームワークである Flutter を初心者が学習するための総合ガイドです。経験豊富な開発者チームが執筆したこの本は、Flutter を習得するための実践的なプロジェクト ベースのアプローチを提供します。Dart プログラミング、状態管理、UI デザイン、アニメーションや API などの機能の統合の基礎をカバーしています。各章は実践的なプロジェクトに基づいているため、読者はスキルに自信を持ちながら、実際のアプリを開発できます。わかりやすい説明、ステップ バイ ステップの手順、よくある落とし穴を避けるためのヒントが満載の Flutter Apprentice は、Android および iOS プラットフォームでアイデアを実現したい意欲的なアプリ開発者にとって優れたリソースです。",
                                        '한국인': "Flutter Apprentice는 크로스 플랫폼 모바일 애플리케이션을 구축하기 위한 인기 있는 오픈소스 프레임워크인 Flutter를 초보자가 배우기 위한 포괄적인 가이드입니다. 숙련된 개발자 팀이 저술한 이 책은 Flutter를 마스터하기 위한 실무적이고 프로젝트 기반의 접근 방식을 제공합니다. Dart 프로그래밍, 상태 관리, UI 디자인, 애니메이션 및 API와 같은 기능 통합의 기본 사항을 다룹니다. 각 장은 실용적인 프로젝트를 기반으로 하여 독자가 기술에 대한 자신감을 얻는 동시에 실제 앱을 개발할 수 있도록 합니다. 명확한 설명, 단계별 지침, 일반적인 함정을 피하기 위한 팁이 포함된 Flutter Apprentice는 Android 및 iOS 플랫폼에서 아이디어를 실현하고자 하는 야심 찬 앱 개발자에게 훌륭한 리소스입니다.",
                                        'Español': "Flutter Apprentice es una guía completa para principiantes que desean aprender Flutter, un popular marco de código abierto para crear aplicaciones móviles multiplataforma. Escrito por un equipo de desarrolladores experimentados, el libro ofrece un enfoque práctico basado en proyectos para dominar Flutter. Abarca los fundamentos de la programación Dart, la gestión de estados, el diseño de la interfaz de usuario y la integración de funciones como animaciones y API. Cada capítulo se basa en proyectos prácticos, lo que permite a los lectores desarrollar aplicaciones del mundo real mientras ganan confianza en sus habilidades. Con explicaciones claras, instrucciones paso a paso y consejos para evitar errores comunes, Flutter Apprentice es un excelente recurso para los aspirantes a desarrolladores de aplicaciones que desean dar vida a sus ideas en las plataformas Android e iOS.",
                                        'हिंदी': "फ़्लटर अप्रेंटिस शुरुआती लोगों के लिए फ़्लटर सीखने के लिए एक व्यापक मार्गदर्शिका है, जो क्रॉस-प्लेटफ़ॉर्म मोबाइल एप्लिकेशन बनाने के लिए एक लोकप्रिय ओपन-सोर्स फ़्रेमवर्क है। अनुभवी डेवलपर्स की एक टीम द्वारा लिखित, यह पुस्तक फ़्लटर में महारत हासिल करने के लिए एक व्यावहारिक, प्रोजेक्ट-आधारित दृष्टिकोण प्रदान करती है। इसमें डार्ट प्रोग्रामिंग, स्टेट मैनेजमेंट, UI डिज़ाइन और एनिमेशन और API जैसी सुविधाओं को एकीकृत करने की बुनियादी बातों को शामिल किया गया है। प्रत्येक अध्याय व्यावहारिक परियोजनाओं पर आधारित है, जिससे पाठकों को अपने कौशल में आत्मविश्वास प्राप्त करते हुए वास्तविक दुनिया के ऐप विकसित करने में सक्षम बनाया जा सके। स्पष्ट स्पष्टीकरण, चरण-दर-चरण निर्देश और सामान्य नुकसानों से बचने के सुझावों के साथ, फ़्लटर अप्रेंटिस महत्वाकांक्षी ऐप डेवलपर्स के लिए एक उत्कृष्ट संसाधन है जो अपने विचारों को Android और iOS प्लेटफ़ॉर्म पर जीवंत करना चाहते हैं।",
                                        'Português': "Flutter Apprentice é um guia completo para principiantes aprenderem Flutter, uma estrutura popular de código aberto para a construção de aplicações móveis multiplataforma. Da autoria de uma equipa de programadores experientes, o livro oferece uma abordagem prática e baseada em projetos para dominar o Flutter. Abrange os fundamentos da programação Dart, gestão de estado, design de UI e integração de recursos como animações e APIs. Cada capítulo baseia-se em projetos práticos, permitindo aos leitores desenvolver aplicações do mundo real enquanto ganham confiança nas suas capacidades. Com explicações claras, instruções passo a passo e dicas para evitar armadilhas comuns, Flutter Apprentice é um excelente recurso para aspirantes a programadores de aplicações que desejam dar vida às suas ideias nas plataformas Android e iOS.",
                                        'বাংলা': "ফ্লটার অ্যাপ্রেন্টিস হল নতুনদের জন্য ফ্লটার শেখার জন্য একটি ব্যাপক নির্দেশিকা, ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরির জন্য একটি জনপ্রিয় ওপেন-সোর্স ফ্রেমওয়ার্ক। অভিজ্ঞ ডেভেলপারদের একটি দল দ্বারা রচিত, বইটি ফ্লটারকে আয়ত্ত করার জন্য একটি হ্যান্ডস-অন, প্রকল্প-ভিত্তিক পদ্ধতি প্রদান করে। এটি ডার্ট প্রোগ্রামিং, স্টেট ম্যানেজমেন্ট, UI ডিজাইন এবং অ্যানিমেশন এবং API-এর মতো বৈশিষ্ট্যগুলিকে একীভূত করার মৌলিক বিষয়গুলি কভার করে৷ প্রতিটি অধ্যায় ব্যবহারিক প্রকল্পের উপর ভিত্তি করে তৈরি করে, পাঠকদের তাদের দক্ষতার প্রতি আস্থা অর্জনের সাথে সাথে বাস্তব-বিশ্বের অ্যাপ বিকাশ করতে সক্ষম করে। স্পষ্ট ব্যাখ্যা, ধাপে ধাপে নির্দেশাবলী এবং সাধারণ সমস্যাগুলি এড়াতে টিপস সহ, Flutter Apprentice উচ্চাকাঙ্ক্ষী অ্যাপ বিকাশকারীদের জন্য একটি চমৎকার সংস্থান যারা Android এবং iOS প্ল্যাটফর্মে তাদের ধারণাগুলিকে জীবন্ত করতে চান৷",
                                        'عَرَبِيّ': "يعد كتاب Flutter Apprentice دليلاً شاملاً للمبتدئين لتعلم Flutter، وهو إطار عمل مفتوح المصدر شائع لبناء تطبيقات جوال متعددة الأنظمة. يقدم الكتاب، الذي ألفه فريق من المطورين ذوي الخبرة، نهجًا عمليًا قائمًا على المشروع لإتقان Flutter. ويغطي أساسيات برمجة Dart وإدارة الحالة وتصميم واجهة المستخدم ودمج ميزات مثل الرسوم المتحركة وواجهات برمجة التطبيقات. يعتمد كل فصل على مشاريع عملية، مما يتيح للقراء تطوير تطبيقات واقعية مع اكتساب الثقة في مهاراتهم. مع التفسيرات الواضحة والتعليمات خطوة بخطوة والنصائح لتجنب الأخطاء الشائعة، يعد Flutter Apprentice موردًا ممتازًا لمطوري التطبيقات الطموحين الذين يرغبون في إحياء أفكارهم على منصات Android وiOS.",
                                        'فارسی': "Flutter Apprentice یک راهنمای جامع برای مبتدیان برای یادگیری Flutter است، یک فریم ورک منبع باز محبوب برای ساخت اپلیکیشن های موبایلی چند پلتفرمی. این کتاب که توسط تیمی از توسعه دهندگان با تجربه نوشته شده است، رویکردی عملی و مبتنی بر پروژه برای تسلط بر فلاتر ارائه می دهد. این مبانی برنامه نویسی Dart، مدیریت حالت، طراحی UI، و یکپارچه سازی ویژگی هایی مانند انیمیشن ها و API ها را پوشش می دهد. هر فصل بر اساس پروژه های عملی ساخته شده است و خوانندگان را قادر می سازد تا برنامه های دنیای واقعی را توسعه دهند و در عین حال به مهارت های خود اعتماد کنند. Flutter Apprentice با توضیحات واضح، دستورالعمل‌های گام به گام و نکاتی برای جلوگیری از مشکلات رایج، منبعی عالی برای توسعه‌دهندگان برنامه‌های مشتاقی است که می‌خواهند ایده‌های خود را در پلتفرم‌های اندروید و iOS زنده کنند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Books/Flutter Developer/1 - Flutter Apprentice.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/English/1%20-%20Flutter%20Apprentice.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/German/1%20-%20Flutter%20Apprentice.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Chinese/1%20-%20Flutter%20Apprentice.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Russian/1%20-%20Flutter%20Apprentice.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/French/1%20-%20Flutter%20Apprentice.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Japanese/1%20-%20Flutter%20Apprentice.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Korean/1%20-%20Flutter%20Apprentice.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Spanish/1%20-%20Flutter%20Apprentice.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Hindi/1%20-%20Flutter%20Apprentice.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Portugues/1%20-%20Flutter%20Apprentice.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Bengali/1%20-%20Flutter%20Apprentice.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Arabic/1%20-%20Flutter%20Apprentice.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Books/Persian/1%20-%20Flutter%20Apprentice.md",
                                },
                        },
                ],
        },
        // -- >> Courses
        "courses": {
                // -- >> UI & UX Designer
                "UI & UX Designer": [
                        // -- > FLUTTER - 1 : Flutter BLoC - From Zero to Hero Complete Course
                        {
                                "title": {
                                        'English': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Deutsch': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '中国人': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Русский': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Français': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '日本語': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '한국인': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Español': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'हिंदी': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Português': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'বাংলা': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'عَرَبِيّ': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'فارسی': "Flutter BLoC - From Zero to Hero Complete Course",
                                },
                                "description": {
                                        'English': "Understand, Learn and Practice the most robust Flutter state management - BLoC Library",
                                        'Deutsch': "Verstehen, lernen und üben Sie die robusteste Flutter-Zustandsverwaltung – BLoC-Bibliothek",
                                        '中国人': "理解、学习和实践最强大的 Flutter 状态管理 - BLoC 库",
                                        'Русский': "Понять, изучить и применить на практике наиболее надежное управление состоянием Flutter - библиотека BLoC",
                                        'Français': "Comprendre, apprendre et pratiquer la gestion d'état Flutter la plus robuste - Bibliothèque BLoC",
                                        '日本語': "最も堅牢な Flutter 状態管理を理解し、学習し、実践する - BLoC ライブラリ",
                                        '한국인': "가장 강력한 Flutter 상태 관리를 이해하고, 배우고, 연습하세요 - BLoC Library",
                                        'Español': "Comprenda, aprenda y practique la gestión de estados de Flutter más sólida - Biblioteca BLoC",
                                        'हिंदी': "सबसे मजबूत फ़्लटर स्टेट मैनेजमेंट को समझें, सीखें और अभ्यास करें - BLoC लाइब्रेरी",
                                        'Português': "Entenda, aprenda e pratique a gestão de estado Flutter mais robusta - Biblioteca BLoC",
                                        'বাংলা': "সবচেয়ে শক্তিশালী ফ্লটার স্টেট ম্যানেজমেন্ট বুঝুন, শিখুন এবং অনুশীলন করুন - BLoC লাইব্রেরি",
                                        'عَرَبِيّ': "فهم وتعلم وممارسة إدارة حالة Flutter الأكثر قوة - مكتبة BLoC",
                                        'فارسی': "قوی ترین مدیریت حالت فلاتر - کتابخانه BLoC را درک کنید، یاد بگیرید و تمرین کنید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 2 - Flutter BLoC - From Zero to Hero Complete Course.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter & Dart - The Complete Guide
                        {
                                "title": {
                                        'English': "Flutter & Dart - The Complete Guide",
                                        'Deutsch': "Flutter & Dart - The Complete Guide",
                                        '中国人': "Flutter & Dart - The Complete Guide",
                                        'Русский': "Flutter & Dart - The Complete Guide",
                                        'Français': "Flutter & Dart - The Complete Guide",
                                        '日本語': "Flutter & Dart - The Complete Guide",
                                        '한국인': "Flutter & Dart - The Complete Guide",
                                        'Español': "Flutter & Dart - The Complete Guide",
                                        'हिंदी': "Flutter & Dart - The Complete Guide",
                                        'Português': "Flutter & Dart - The Complete Guide",
                                        'বাংলা': "Flutter & Dart - The Complete Guide",
                                        'عَرَبِيّ': "Flutter & Dart - The Complete Guide",
                                        'فارسی': "Flutter & Dart - The Complete Guide",
                                },
                                "description": {
                                        'English': "A Complete Guide to the Flutter SDK and Flutter Framework for building native iOS and Android apps",
                                        'Deutsch': "Eine vollständige Anleitung zum Flutter SDK und Flutter Framework zum Erstellen nativer iOS- und Android-Apps",
                                        '中国人': "用于构建原生 iOS 和 Android 应用程序的 Flutter SDK 和 Flutter 框架完整指南",
                                        'Русский': "Полное руководство по Flutter SDK и Flutter Framework для создания собственных приложений для iOS и Android",
                                        'Français': "Un guide complet sur le SDK Flutter et le framework Flutter pour créer des applications natives iOS et Android",
                                        '日本語': "ネイティブ iOS および Android アプリを構築するための Flutter SDK と Flutter フレームワークの完全ガイド",
                                        '한국인': "네이티브 iOS 및 Android 앱을 구축하기 위한 Flutter SDK 및 Flutter Framework에 대한 완전한 가이드",
                                        'Español': "Una guía completa sobre el SDK y el marco de trabajo de Flutter para crear aplicaciones nativas de iOS y Android",
                                        'हिंदी': "मूल iOS और Android ऐप्स बनाने के लिए फ़्लटर SDK और फ़्लटर फ्रेमवर्क के लिए एक संपूर्ण गाइड",
                                        'Português': "Um guia completo para o Flutter SDK e o Flutter Framework para criar aplicações nativas para iOS e Android",
                                        'বাংলা': "নেটিভ আইওএস এবং অ্যান্ড্রয়েড অ্যাপ তৈরির জন্য ফ্লটার SDK এবং ফ্লাটার ফ্রেমওয়ার্কের একটি সম্পূর্ণ নির্দেশিকা",
                                        'عَرَبِيّ': "دليل كامل لمجموعة أدوات التطوير البرمجية Flutter وإطار عمل Flutter لبناء تطبيقات iOS وAndroid الأصلية",
                                        'فارسی': "راهنمای کامل Flutter SDK و Flutter Framework برای ساخت برنامه های بومی iOS و Android",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 1 - Flutter Complete Guide.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                },
                        },
                ],
                // -- >> Flutter Developer
                "Flutter Developer": [
                        // -- > FLUTTER - 1 : Flutter BLoC - From Zero to Hero Complete Course
                        {
                                "title": {
                                        'English': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Deutsch': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '中国人': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Русский': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Français': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '日本語': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '한국인': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Español': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'हिंदी': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Português': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'বাংলা': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'عَرَبِيّ': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'فارسی': "Flutter BLoC - From Zero to Hero Complete Course",
                                },
                                "description": {
                                        'English': "Understand, Learn and Practice the most robust Flutter state management - BLoC Library",
                                        'Deutsch': "Verstehen, lernen und üben Sie die robusteste Flutter-Zustandsverwaltung – BLoC-Bibliothek",
                                        '中国人': "理解、学习和实践最强大的 Flutter 状态管理 - BLoC 库",
                                        'Русский': "Понять, изучить и применить на практике наиболее надежное управление состоянием Flutter - библиотека BLoC",
                                        'Français': "Comprendre, apprendre et pratiquer la gestion d'état Flutter la plus robuste - Bibliothèque BLoC",
                                        '日本語': "最も堅牢な Flutter 状態管理を理解し、学習し、実践する - BLoC ライブラリ",
                                        '한국인': "가장 강력한 Flutter 상태 관리를 이해하고, 배우고, 연습하세요 - BLoC Library",
                                        'Español': "Comprenda, aprenda y practique la gestión de estados de Flutter más sólida - Biblioteca BLoC",
                                        'हिंदी': "सबसे मजबूत फ़्लटर स्टेट मैनेजमेंट को समझें, सीखें और अभ्यास करें - BLoC लाइब्रेरी",
                                        'Português': "Entenda, aprenda e pratique a gestão de estado Flutter mais robusta - Biblioteca BLoC",
                                        'বাংলা': "সবচেয়ে শক্তিশালী ফ্লটার স্টেট ম্যানেজমেন্ট বুঝুন, শিখুন এবং অনুশীলন করুন - BLoC লাইব্রেরি",
                                        'عَرَبِيّ': "فهم وتعلم وممارسة إدارة حالة Flutter الأكثر قوة - مكتبة BLoC",
                                        'فارسی': "قوی ترین مدیریت حالت فلاتر - کتابخانه BLoC را درک کنید، یاد بگیرید و تمرین کنید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 2 - Flutter BLoC - From Zero to Hero Complete Course.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter & Dart - The Complete Guide
                        {
                                "title": {
                                        'English': "Flutter & Dart - The Complete Guide",
                                        'Deutsch': "Flutter & Dart - The Complete Guide",
                                        '中国人': "Flutter & Dart - The Complete Guide",
                                        'Русский': "Flutter & Dart - The Complete Guide",
                                        'Français': "Flutter & Dart - The Complete Guide",
                                        '日本語': "Flutter & Dart - The Complete Guide",
                                        '한국인': "Flutter & Dart - The Complete Guide",
                                        'Español': "Flutter & Dart - The Complete Guide",
                                        'हिंदी': "Flutter & Dart - The Complete Guide",
                                        'Português': "Flutter & Dart - The Complete Guide",
                                        'বাংলা': "Flutter & Dart - The Complete Guide",
                                        'عَرَبِيّ': "Flutter & Dart - The Complete Guide",
                                        'فارسی': "Flutter & Dart - The Complete Guide",
                                },
                                "description": {
                                        'English': "A Complete Guide to the Flutter SDK and Flutter Framework for building native iOS and Android apps",
                                        'Deutsch': "Eine vollständige Anleitung zum Flutter SDK und Flutter Framework zum Erstellen nativer iOS- und Android-Apps",
                                        '中国人': "用于构建原生 iOS 和 Android 应用程序的 Flutter SDK 和 Flutter 框架完整指南",
                                        'Русский': "Полное руководство по Flutter SDK и Flutter Framework для создания собственных приложений для iOS и Android",
                                        'Français': "Un guide complet sur le SDK Flutter et le framework Flutter pour créer des applications natives iOS et Android",
                                        '日本語': "ネイティブ iOS および Android アプリを構築するための Flutter SDK と Flutter フレームワークの完全ガイド",
                                        '한국인': "네이티브 iOS 및 Android 앱을 구축하기 위한 Flutter SDK 및 Flutter Framework에 대한 완전한 가이드",
                                        'Español': "Una guía completa sobre el SDK y el marco de trabajo de Flutter para crear aplicaciones nativas de iOS y Android",
                                        'हिंदी': "मूल iOS और Android ऐप्स बनाने के लिए फ़्लटर SDK और फ़्लटर फ्रेमवर्क के लिए एक संपूर्ण गाइड",
                                        'Português': "Um guia completo para o Flutter SDK e o Flutter Framework para criar aplicações nativas para iOS e Android",
                                        'বাংলা': "নেটিভ আইওএস এবং অ্যান্ড্রয়েড অ্যাপ তৈরির জন্য ফ্লটার SDK এবং ফ্লাটার ফ্রেমওয়ার্কের একটি সম্পূর্ণ নির্দেশিকা",
                                        'عَرَبِيّ': "دليل كامل لمجموعة أدوات التطوير البرمجية Flutter وإطار عمل Flutter لبناء تطبيقات iOS وAndroid الأصلية",
                                        'فارسی': "راهنمای کامل Flutter SDK و Flutter Framework برای ساخت برنامه های بومی iOS و Android",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 1 - Flutter Complete Guide.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                },
                        },
                ],
                // -- >> Full Stack Developer
                "Full Stack Developer": [
                        // -- > DJANGO + 1 : Django for Everybody Specialization
                        {
                                "title": {
                                        'English': "Django for Everybody Specialization",
                                        'Deutsch': "Django for Everybody Specialization",
                                        '中国人': "Django for Everybody Specialization",
                                        'Русский': "Django for Everybody Specialization",
                                        'Français': "Django for Everybody Specialization",
                                        '日本語': "Django for Everybody Specialization",
                                        '한국인': "Django for Everybody Specialization",
                                        'Español': "Django for Everybody Specialization",
                                        'हिंदी': "Django for Everybody Specialization",
                                        'Português': "Django for Everybody Specialization",
                                        'বাংলা': "Django for Everybody Specialization",
                                        'عَرَبِيّ': "Django for Everybody Specialization",
                                        'فارسی': "Django for Everybody Specialization",
                                },
                                "description": {
                                        'English': "Build & deploy rich web applications using Django. Learn the fundamentals of building a full-featured web site using Django",
                                        'Deutsch': "Erstellen und implementieren Sie umfangreiche Webanwendungen mit Django. Lernen Sie die Grundlagen zum Erstellen einer voll funktionsfähigen Website mit Django",
                                        '中国人': "使用 Django 构建和部署丰富的 Web 应用程序。了解使用 Django 构建功能齐全的网站的基础知识",
                                        'Русский': "Создавайте и развертывайте насыщенные веб-приложения с помощью Django. Изучите основы создания полнофункционального веб-сайта с помощью Django",
                                        'Français': "Créez et déployez des applications Web riches à l'aide de Django. Découvrez les principes fondamentaux de la création d'un site Web complet à l'aide de Django",
                                        '日本語': "Django を使用してリッチな Web アプリケーションを構築および展開します。Django を使用してフル機能の Web サイトを構築するための基礎を学びます。",
                                        '한국인': "Django를 사용하여 풍부한 웹 애플리케이션을 빌드하고 배포합니다. Django를 사용하여 모든 기능을 갖춘 웹 사이트를 빌드하는 기본 사항을 배웁니다.",
                                        'Español': "Cree e implemente aplicaciones web sofisticadas con Django. Aprenda los conceptos básicos para crear un sitio web completo con Django",
                                        'हिंदी': "Django का उपयोग करके समृद्ध वेब एप्लिकेशन बनाएं और तैनात करें। Django का उपयोग करके पूर्ण-विशेषताओं वाली वेब साइट बनाने की मूल बातें जानें",
                                        'Português': "Crie e implemente aplicações web avançadas usando Django. Aprenda os fundamentos da construção de um site completo utilizando Django",
                                        'বাংলা': "Django ব্যবহার করে সমৃদ্ধ ওয়েব অ্যাপ্লিকেশন তৈরি ও স্থাপন করুন। জ্যাঙ্গো ব্যবহার করে একটি পূর্ণ-বৈশিষ্ট্যযুক্ত ওয়েব সাইট তৈরির মৌলিক বিষয়গুলি জানুন",
                                        'عَرَبِيّ': "إنشاء تطبيقات ويب غنية ونشرها باستخدام Django. تعرف على أساسيات إنشاء موقع ويب كامل الميزات باستخدام Django",
                                        'فارسی': "ساخت و استقرار برنامه های کاربردی وب غنی با استفاده از جنگو. اصول ساخت یک وب سایت با امکانات کامل با استفاده از جنگو را بیاموزید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Full Stack Developer/0 - 4 - Django for Everybody Specialization.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/English/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/German/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Chinese/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Russian/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/French/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Japanese/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Korean/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Spanish/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Hindi/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Portugues/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Bengali/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Arabic/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Persian/0%20-%204%20-%20Django%20for%20Everybody%20Specialization.md",
                                },
                        },
                        // -- > DJANGO : Python Django: Build an E-commerce Store - 2025
                        {
                                "title": {
                                        'English': "Python Django: Build an E-commerce Store",
                                        'Deutsch': "Python Django: Build an E-commerce Store",
                                        '中国人': "Python Django: Build an E-commerce Store",
                                        'Русский': "Python Django: Build an E-commerce Store",
                                        'Français': "Python Django: Build an E-commerce Store",
                                        '日本語': "Python Django: Build an E-commerce Store",
                                        '한국인': "Python Django: Build an E-commerce Store",
                                        'Español': "Python Django: Build an E-commerce Store",
                                        'हिंदी': "Python Django: Build an E-commerce Store",
                                        'Português': "Python Django: Build an E-commerce Store",
                                        'বাংলা': "Python Django: Build an E-commerce Store",
                                        'عَرَبِيّ': "Python Django: Build an E-commerce Store",
                                        'فارسی': "Python Django: Build an E-commerce Store",
                                },
                                "description": {
                                        'English': "Build an E-commerce Store with Django | Hands-on demonstrations | Deploy a Django Web Application",
                                        'Deutsch': "Erstellen Sie einen E-Commerce-Shop mit Django | Praktische Demonstrationen | Stellen Sie eine Django-Webanwendung bereit",
                                        '中国人': "使用 Django 构建电子商务商店 | 动手演示 | 部署 Django Web 应用程序",
                                        'Русский': "Создание интернет-магазина с помощью Django | Практические демонстрации | Развертывание веб-приложения Django",
                                        'Français': "Créer une boutique en ligne avec Django | Démonstrations pratiques | Déployer une application Web Django",
                                        '日本語': "Django で電子商取引ストアを構築する | ハンズオン デモンストレーション | Django Web アプリケーションをデプロイする",
                                        '한국인': "Django로 전자상거래 매장 구축 | 실습 데모 | Django 웹 애플리케이션 배포",
                                        'Español': "Cree una tienda de comercio electrónico con Django | Demostraciones prácticas | Implemente una aplicación web Django",
                                        'हिंदी': "Django के साथ ई-कॉमर्स स्टोर बनाएँ | व्यावहारिक प्रदर्शन | Django वेब एप्लिकेशन को परिनियोजित करें",
                                        'Português': "Construa uma loja de comércio eletrónico com Django | Demonstrações práticas | Implantar uma aplicação Web Django",
                                        'বাংলা': "জ্যাঙ্গো দিয়ে একটি ই-কমার্স স্টোর তৈরি করুন | হাতে বিক্ষোভ | একটি জ্যাঙ্গো ওয়েব অ্যাপ্লিকেশন স্থাপন করুন",
                                        'عَرَبِيّ': "إنشاء متجر للتجارة الإلكترونية باستخدام Django | عروض توضيحية عملية | نشر تطبيق ويب Django",
                                        'فارسی': "ساخت فروشگاه تجارت الکترونیک با جنگو | تظاهرات عملی | یک برنامه وب جنگو را مستقر کنید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Full Stack Developer/0 - 3 - Python Django Build an Ecommerce Store.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/English/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/German/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Chinese/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Russian/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/French/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Japanese/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Korean/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Spanish/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Hindi/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Portugues/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Bengali/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Arabic/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Persian/0%20-%203%20-%20Python%20Django%20Build%20an%20E-commerce%20Store%202025.md",
                                },
                        },
                        // -- > DJANGO - 1 : Django with React | An Ecommerce Website
                        {
                                "title": {
                                        'English': "Django with React | An Ecommerce Website",
                                        'Deutsch': "Django with React | An Ecommerce Website",
                                        '中国人': "Django with React | An Ecommerce Website",
                                        'Русский': "Django with React | An Ecommerce Website",
                                        'Français': "Django with React | An Ecommerce Website",
                                        '日本語': "Django with React | An Ecommerce Website",
                                        '한국인': "Django with React | An Ecommerce Website",
                                        'Español': "Django with React | An Ecommerce Website",
                                        'हिंदी': "Django with React | An Ecommerce Website",
                                        'Português': "Django with React | An Ecommerce Website",
                                        'বাংলা': "Django with React | An Ecommerce Website",
                                        'عَرَبِيّ': "Django with React | An Ecommerce Website",
                                        'فارسی': "Django with React | An Ecommerce Website",
                                },
                                "description": {
                                        'English': "Build an eCommerce platform from the ground up with React, Redux, Django & Postgres",
                                        'Deutsch': "Erstellen Sie mit React, Redux, Django und Postgres eine E-Commerce-Plattform von Grund auf",
                                        '中国人': "使用 React、Redux、Django 和 Postgres 从头开始​​构建电子商务平台",
                                        'Русский': "Создайте платформу электронной коммерции с нуля с помощью React, Redux, Django и Postgres",
                                        'Français': "Créez une plateforme de commerce électronique à partir de zéro avec React, Redux, Django et Postgres",
                                        '日本語': "React、Redux、Django、Postgres を使って e コマース プラットフォームをゼロから構築します。",
                                        '한국인': "React, Redux, Django 및 Postgres를 사용하여 처음부터 전자상거래 플랫폼을 구축하세요",
                                        'Español': "Cree una plataforma de comercio electrónico desde cero con React, Redux, Django y Postgres",
                                        'हिंदी': "React, Redux, Django और Postgres के साथ शुरू से ही एक ईकॉमर्स प्लेटफ़ॉर्म बनाएं",
                                        'Português': "Construa uma plataforma de comércio eletrónico a partir do zero com React, Redux, Django e Postgres",
                                        'বাংলা': "React, Redux, Django এবং Postgres-এর সাথে গ্রাউন্ড আপ থেকে একটি ইকমার্স প্ল্যাটফর্ম তৈরি করুন",
                                        'عَرَبِيّ': "قم ببناء منصة التجارة الإلكترونية من البداية باستخدام React وRedux وDjango وPostgres",
                                        'فارسی': "با React، Redux، Django و Postgres یک پلتفرم تجارت الکترونیک از ابتدا بسازید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Full Stack Developer/0 - 2 - Django with React An Ecommerce Website.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/English/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/German/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Chinese/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Russian/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/French/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Japanese/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Korean/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Spanish/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Hindi/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Portugues/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Bengali/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Arabic/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Persian/0%20-%202%20-%20Django%20with%20React%20An%20Ecommerce%20Website.md",
                                },
                        },
                        // -- > DJANGO - 2 : Devsearch Course
                        {
                                "title": {
                                        'English': "Django Python: Build a Full Stack Website with Features",
                                        'Deutsch': "Django Python: Build a Full Stack Website with Features",
                                        '中国人': "Django Python: Build a Full Stack Website with Features",
                                        'Русский': "Django Python: Build a Full Stack Website with Features",
                                        'Français': "Django Python: Build a Full Stack Website with Features",
                                        '日本語': "Django Python: Build a Full Stack Website with Features",
                                        '한국인': "Django Python: Build a Full Stack Website with Features",
                                        'Español': "Django Python: Build a Full Stack Website with Features",
                                        'हिंदी': "Django Python: Build a Full Stack Website with Features",
                                        'Português': "Django Python: Build a Full Stack Website with Features",
                                        'বাংলা': "Django Python: Build a Full Stack Website with Features",
                                        'عَرَبِيّ': "Django Python: Build a Full Stack Website with Features",
                                        'فارسی': "Django Python: Build a Full Stack Website with Features",
                                },
                                "description": {
                                        'English': "Master Django: Full Stack Website with Email Functionality, Messaging, Commenting, API Development and More!",
                                        'Deutsch': "Master Django: Full-Stack-Website mit E-Mail-Funktionalität, Messaging, Kommentarfunktion, API-Entwicklung und mehr!",
                                        '中国人': "掌握 Django：具有电子邮件功能、消息传递、评论、API 开发等功能的全栈网站！",
                                        'Русский': "Master Django: полнофункциональный веб-сайт с функциями электронной почты, обмена сообщениями, комментирования, разработки API и многого другого!",
                                        'Français': "Maîtrisez Django : site Web Full Stack avec fonctionnalités de messagerie électronique, messagerie, commentaires, développement d'API et plus encore !",
                                        '日本語': "Django をマスター: 電子メール機能、メッセージング、コメント、API 開発などを備えたフルスタック Web サイト!",
                                        '한국인': "Django 마스터하기: 이메일 기능, 메시징, 댓글, API 개발 등을 갖춘 풀스택 웹사이트!",
                                        'Español': "Master Django: ¡Sitio web completo con funcionalidad de correo electrónico, mensajería, comentarios, desarrollo de API y más!",
                                        'हिंदी': "Django में महारत हासिल करें: ईमेल कार्यक्षमता, संदेश, टिप्पणी, API विकास और अधिक के साथ पूर्ण स्टैक वेबसाइट!",
                                        'Português': "Master Django: Site Full Stack com funcionalidade de e-mail, mensagens, comentários, desenvolvimento de API e muito mais!",
                                        'বাংলা': "মাস্টার জ্যাঙ্গো: ইমেল কার্যকারিতা, মেসেজিং, মন্তব্য, API ডেভেলপমেন্ট এবং আরও অনেক কিছু সহ সম্পূর্ণ স্ট্যাক ওয়েবসাইট!",
                                        'عَرَبِيّ': "إتقان Django: موقع ويب متكامل مع وظيفة البريد الإلكتروني والمراسلة والتعليق وتطوير واجهة برمجة التطبيقات والمزيد!",
                                        'فارسی': "Master Django: وب سایت Full Stack با قابلیت های ایمیل، پیام رسانی، اظهار نظر، توسعه API و موارد دیگر!",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Full Stack Developer/0 - 1 - Django Complete Course.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/English/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/German/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Chinese/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Russian/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/French/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Japanese/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Korean/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Spanish/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Hindi/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Portugues/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Bengali/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Arabic/0%20-%201%20-%20Django%20Complete%20Course.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Persian/0%20-%201%20-%20Django%20Complete%20Course.md",
                                },
                        },
                        // -- > AZURE - 2 : Azure DevOps for Beginners
                        {
                                "title": {
                                        'English': "Azure DevOps for Beginners",
                                        'Deutsch': "Azure DevOps for Beginners",
                                        '中国人': "Azure DevOps for Beginners",
                                        'Русский': "Azure DevOps for Beginners",
                                        'Français': "Azure DevOps for Beginners",
                                        '日本語': "Azure DevOps for Beginners",
                                        '한국인': "Azure DevOps for Beginners",
                                        'Español': "Azure DevOps for Beginners",
                                        'हिंदी': "Azure DevOps for Beginners",
                                        'Português': "Azure DevOps for Beginners",
                                        'বাংলা': "Azure DevOps for Beginners",
                                        'عَرَبِيّ': "Azure DevOps for Beginners",
                                        'فارسی': "Azure DevOps for Beginners",
                                },
                                "description": {
                                        'English': "Azure DevOps is a bundle of services to help developers ship high-quality products faster. In this course, instructor Walt Ritscher teaches you everything you need to get up and running using this DevOps solution. Walt gives you an overview of the Azure DevOps services, then explains how to create projects and add users to organizations or teams. He presents a quick tour of Azure Boards, the hub for managing software projects, then describes how to use work items, backlogs, sprints, Kanban boards, and more. Walt shows you how Azure Repos provides a place to capture every team member’s source code on the Microsoft cloud servers. He walks you through the parts of Azure Repos and how to manage what each part does. Walt explains the parts and features of Azure Pipelines, the set of services that automate your application build and deployment phases. He concludes with different extensions you can add to DevOps, including Slack, Marketplace, and Persona.",
                                        'Deutsch': "Azure DevOps ist ein Bündel von Diensten, die Entwicklern helfen, qualitativ hochwertige Produkte schneller auszuliefern. In diesem Kurs bringt Ihnen Kursleiter Walt Ritscher alles bei, was Sie brauchen, um diese DevOps-Lösung in Betrieb zu nehmen. Walt gibt Ihnen einen Überblick über die Azure DevOps-Dienste und erklärt dann, wie Sie Projekte erstellen und Benutzer zu Organisationen oder Teams hinzufügen. Er präsentiert einen kurzen Überblick über Azure Boards, den Hub zur Verwaltung von Softwareprojekten, und beschreibt dann, wie Sie Arbeitselemente, Backlogs, Sprints, Kanban-Boards und mehr verwenden. Walt zeigt Ihnen, wie Azure Repos einen Ort bietet, an dem Sie den Quellcode jedes Teammitglieds auf den Microsoft-Cloud-Servern erfassen können. Er führt Sie durch die Teile von Azure Repos und zeigt Ihnen, wie Sie die Funktion jedes Teils verwalten. Walt erklärt die Teile und Funktionen von Azure Pipelines, dem Satz von Diensten, die Ihre Anwendungserstellungs- und Bereitstellungsphasen automatisieren. Er schließt mit verschiedenen Erweiterungen ab, die Sie zu DevOps hinzufügen können, darunter Slack, Marketplace und Persona.",
                                        '中国人': "Azure DevOps 是一套服务，可帮助开发人员更快地交付高质量产品。在本课程中，讲师 Walt Ritscher 将教您使用此 DevOps 解决方案启动和运行所需的一切。Walt 为您概述了 Azure DevOps 服务，然后解释了如何创建项目并将用户添加到组织或团队。他简要介绍了用于管理软件项目的中心 Azure Boards，然后描述了如何使用工作项、积压、冲刺、看板等。Walt 向您展示了 Azure Repos 如何提供一个在 Microsoft 云服务器上捕获每个团队成员源代码的地方。他带您了解 Azure Repos 的各个部分以及如何管理每个部分的功能。Walt 解释了 Azure Pipelines 的各个部分和功能，Azure Pipelines 是一组可自动执行应用程序构建和部署阶段的服务。最后，他介绍了您可以添加到 DevOps 的不同扩展，包括 Slack、Marketplace 和 Persona。",
                                        'Русский': "Azure DevOps — это набор сервисов, помогающих разработчикам быстрее поставлять высококачественные продукты. В этом курсе инструктор Уолт Ритшер научит вас всему, что вам нужно для начала работы с этим решением DevOps. Уолт дает вам обзор сервисов Azure DevOps, затем объясняет, как создавать проекты и добавлять пользователей в организации или команды. Он представляет краткий обзор Azure Boards, центра управления программными проектами, затем описывает, как использовать рабочие элементы, бэклоги, спринты, доски Kanban и многое другое. Уолт показывает, как Azure Repos предоставляет место для записи исходного кода каждого члена команды на облачных серверах Microsoft. Он проводит вас по частям Azure Repos и тому, как управлять тем, что делает каждая часть. Уолт объясняет части и функции Azure Pipelines, набора сервисов, которые автоматизируют этапы сборки и развертывания вашего приложения. В заключение он приводит различные расширения, которые вы можете добавить в DevOps, включая Slack, Marketplace и Persona.",
                                        'Français': "Azure DevOps est un ensemble de services qui aident les développeurs à livrer plus rapidement des produits de haute qualité. Dans ce cours, l’instructeur Walt Ritscher vous apprend tout ce dont vous avez besoin pour être opérationnel avec cette solution DevOps. Walt vous donne un aperçu des services Azure DevOps, puis explique comment créer des projets et ajouter des utilisateurs à des organisations ou des équipes. Il présente une visite rapide d’Azure Boards, le hub de gestion des projets logiciels, puis décrit comment utiliser les éléments de travail, les backlogs, les sprints, les tableaux Kanban, etc. Walt vous montre comment Azure Repos fournit un endroit pour capturer le code source de chaque membre de l’équipe sur les serveurs cloud Microsoft. Il vous guide à travers les différentes parties d’Azure Repos et comment gérer ce que fait chaque partie. Walt explique les parties et les fonctionnalités d’Azure Pipelines, l’ensemble de services qui automatisent les phases de création et de déploiement de votre application. Il conclut avec différentes extensions que vous pouvez ajouter à DevOps, notamment Slack, Marketplace et Persona.",
                                        '日本語': "Azure DevOps は、開発者が高品質の製品をより早く出荷できるようにするためのサービス バンドルです。このコースでは、インストラクターの Walt Ritscher が、この DevOps ソリューションを使い始めるために必要なすべてのことを教えます。Walt は、Azure DevOps サービスの概要を説明し、プロジェクトの作成方法と組織またはチームへのユーザーの追加方法について説明します。ソフトウェア プロジェクトの管理ハブである Azure Boards の簡単なツアーを紹介し、作業項目、バックログ、スプリント、カンバン ボードなどの使用方法を説明します。Walt は、Azure Repos が Microsoft クラウド サーバー上のすべてのチーム メンバーのソース コードをキャプチャする場所を提供する方法を示します。Azure Repos の各部分と、各部分の動作を管理する方法について説明します。Walt は、アプリケーションのビルドおよび展開フェーズを自動化する一連のサービスである Azure Pipelines の各部分と機能について説明します。最後に、Slack、Marketplace、Persona など、DevOps に追加できるさまざまな拡張機能について説明します。",
                                        '한국인': "Azure DevOps는 개발자가 고품질 제품을 더 빠르게 출시할 수 있도록 돕는 서비스 번들입니다. 이 과정에서 강사 Walt Ritscher는 이 DevOps 솔루션을 사용하여 시작하고 실행하는 데 필요한 모든 것을 가르칩니다. Walt는 Azure DevOps 서비스에 대한 개요를 제공한 다음 프로젝트를 만들고 조직이나 팀에 사용자를 추가하는 방법을 설명합니다. 그는 소프트웨어 프로젝트를 관리하는 허브인 Azure Boards를 간략히 살펴본 다음 작업 항목, 백로그, 스프린트, 칸반 보드 등을 사용하는 방법을 설명합니다. Walt는 Azure Repos가 Microsoft 클라우드 서버에서 모든 팀원의 소스 코드를 캡처할 수 있는 장소를 제공하는 방법을 보여줍니다. 그는 Azure Repos의 각 부분과 각 부분의 기능을 관리하는 방법을 안내합니다. Walt는 애플리케이션 빌드 및 배포 단계를 자동화하는 서비스 세트인 Azure Pipelines의 부분과 기능을 설명합니다. 그는 Slack, Marketplace, Persona를 포함하여 DevOps에 추가할 수 있는 다양한 확장 기능으로 마무리합니다.",
                                        'Español': "Azure DevOps es un conjunto de servicios que ayudan a los desarrolladores a entregar productos de alta calidad más rápido. En este curso, el instructor Walt Ritscher le enseña todo lo que necesita para comenzar a utilizar esta solución DevOps. Walt le ofrece una descripción general de los servicios de Azure DevOps y, luego, le explica cómo crear proyectos y agregar usuarios a organizaciones o equipos. Presenta un recorrido rápido por Azure Boards, el centro para administrar proyectos de software, y luego describe cómo usar elementos de trabajo, registros pendientes, sprints, tableros Kanban y más. Walt le muestra cómo Azure Repos proporciona un lugar para capturar el código fuente de cada miembro del equipo en los servidores en la nube de Microsoft. Le guía a través de las partes de Azure Repos y cómo administrar lo que hace cada parte. Walt explica las partes y las características de Azure Pipelines, el conjunto de servicios que automatizan las fases de creación e implementación de su aplicación. Concluye con diferentes extensiones que puede agregar a DevOps, incluidas Slack, Marketplace y Persona.",
                                        'हिंदी': "Azure DevOps सेवाओं का एक बंडल है जो डेवलपर्स को उच्च-गुणवत्ता वाले उत्पादों को तेज़ी से शिप करने में मदद करता है। इस कोर्स में, प्रशिक्षक वॉल्ट रिट्चर आपको इस DevOps समाधान का उपयोग करके शुरू करने और चलाने के लिए आवश्यक सब कुछ सिखाते हैं। वॉल्ट आपको Azure DevOps सेवाओं का अवलोकन देता है, फिर बताता है कि कैसे प्रोजेक्ट बनाएं और संगठनों या टीमों में उपयोगकर्ताओं को जोड़ें। वह Azure Boards का एक त्वरित दौरा प्रस्तुत करता है, जो सॉफ़्टवेयर प्रोजेक्ट्स को प्रबंधित करने का केंद्र है, फिर बताता है कि कार्य आइटम, बैकलॉग, स्प्रिंट, कानबन बोर्ड और बहुत कुछ का उपयोग कैसे करें। वॉल्ट आपको दिखाता है कि Azure Repos Microsoft क्लाउड सर्वर पर प्रत्येक टीम सदस्य के स्रोत कोड को कैप्चर करने के लिए एक स्थान कैसे प्रदान करता है। वह आपको Azure Repos के भागों और प्रत्येक भाग द्वारा किए जाने वाले कार्यों को प्रबंधित करने के तरीके के बारे में बताता है। वॉल्ट Azure Pipelines के भागों और सुविधाओं के बारे में बताता है, सेवाओं का वह समूह जो आपके एप्लिकेशन निर्माण और परिनियोजन चरणों को स्वचालित करता है। वह विभिन्न एक्सटेंशन के साथ समाप्त होता है जिन्हें आप DevOps में जोड़ सकते हैं, जिसमें Slack, Marketplace और Persona शामिल हैं।",
                                        'Português': "O Azure DevOps é um pacote de serviços para ajudar os programadores a fornecer produtos de alta qualidade e mais rapidamente. Neste curso, o instrutor Walt Ritscher ensina-lhe tudo o que precisa para começar a utilizar esta solução DevOps. Walt oferece uma visão geral dos serviços Azure DevOps e explica como criar projetos e adicionar utilizadores a organizações ou equipas. Apresenta um rápido tour pelo Azure Boards, o centro para a gestão de projetos de software, e depois descreve como utilizar itens de trabalho, assuntos pendentes, sprints, quadros Kanban e muito mais. Walt mostra como o Azure Repos fornece um local para capturar o código-fonte de cada membro da equipa nos servidores na nuvem da Microsoft. Orienta-o pelas partes do Azure Repos e como gerir o que cada parte faz. Walt explica as partes e as funcionalidades do Azure Pipelines, o conjunto de serviços que automatizam as fases de criação e implementação da sua aplicação. Conclui com diferentes extensões que pode adicionar ao DevOps, incluindo Slack, Marketplace e Persona.",
                                        'বাংলা': "Azure DevOps হল পরিষেবার একটি বান্ডিল যা ডেভেলপারদের উচ্চ-মানের পণ্য দ্রুত শিপিং করতে সাহায্য করে। এই কোর্সে, প্রশিক্ষক ওয়াল্ট রিটচার আপনাকে এই DevOps সমাধান ব্যবহার করে উঠতে এবং চালানোর জন্য প্রয়োজনীয় সমস্ত কিছু শেখায়৷ ওয়াল্ট আপনাকে Azure DevOps পরিষেবাগুলির একটি ওভারভিউ দেয়, তারপর ব্যাখ্যা করে যে কীভাবে প্রকল্পগুলি তৈরি করা যায় এবং ব্যবহারকারীদের সংস্থা বা দলগুলিতে যুক্ত করা যায়৷ তিনি Azure বোর্ডের একটি দ্রুত সফর উপস্থাপন করেন, সফ্টওয়্যার প্রকল্পগুলি পরিচালনার কেন্দ্র, তারপর কীভাবে কাজের আইটেম, ব্যাকলগ, স্প্রিন্ট, কানবান বোর্ড এবং আরও অনেক কিছু ব্যবহার করতে হয় তা বর্ণনা করেন। ওয়াল্ট আপনাকে দেখায় কিভাবে Azure Repos Microsoft ক্লাউড সার্ভারে প্রতিটি দলের সদস্যের সোর্স কোড ক্যাপচার করার জন্য একটি জায়গা প্রদান করে। তিনি আপনাকে Azure Repos-এর অংশগুলি এবং প্রতিটি অংশ কী করে তা কীভাবে পরিচালনা করতে হয় তার মধ্যে দিয়ে যান। ওয়াল্ট Azure Pipelines-এর অংশ এবং বৈশিষ্ট্যগুলি ব্যাখ্যা করে, পরিষেবাগুলির সেট যা আপনার অ্যাপ্লিকেশন তৈরি এবং স্থাপনের পর্যায়গুলি স্বয়ংক্রিয় করে। তিনি স্ল্যাক, মার্কেটপ্লেস এবং পারসোনা সহ আপনি DevOps-এ যোগ করতে পারেন এমন বিভিন্ন এক্সটেনশন দিয়ে শেষ করেন।",
                                        'عَرَبِيّ': "Azure DevOps عبارة عن مجموعة من الخدمات لمساعدة المطورين على تقديم منتجات عالية الجودة بشكل أسرع. في هذه الدورة، يعلمك المدرب Walt Ritscher كل ما تحتاجه للبدء في العمل باستخدام حل DevOps هذا. يمنحك Walt نظرة عامة على خدمات Azure DevOps، ثم يشرح كيفية إنشاء المشاريع وإضافة المستخدمين إلى المؤسسات أو الفرق. يقدم جولة سريعة في Azure Boards، مركز إدارة مشاريع البرامج، ثم يصف كيفية استخدام عناصر العمل، والمتأخرات، والسباقات، ولوحات Kanban، والمزيد. يوضح لك Walt كيف توفر Azure Repos مكانًا لالتقاط كود المصدر لكل عضو في الفريق على خوادم Microsoft السحابية. يرشدك خلال أجزاء Azure Repos وكيفية إدارة ما يفعله كل جزء. يشرح Walt أجزاء وميزات Azure Pipelines، وهي مجموعة الخدمات التي تعمل على أتمتة مراحل بناء التطبيق ونشره. ويختتم بإضافات مختلفة يمكنك إضافتها إلى DevOps، بما في ذلك Slack وMarketplace وPersona.",
                                        'فارسی': "Azure DevOps مجموعه ای از خدمات است که به توسعه دهندگان کمک می کند محصولات با کیفیت بالا را سریعتر ارسال کنند. در این دوره، مدرس Walt Ritscher همه چیزهایی را که برای راه اندازی و اجرا با استفاده از این راه حل DevOps نیاز دارید به شما آموزش می دهد. والت به شما یک نمای کلی از خدمات Azure DevOps می دهد، سپس نحوه ایجاد پروژه ها و افزودن کاربران به سازمان ها یا تیم ها را توضیح می دهد. او یک تور سریع از Azure Boards، مرکز مدیریت پروژه‌های نرم‌افزاری را ارائه می‌کند، سپس نحوه استفاده از آیتم‌های کاری، بک لاگ‌ها، اسپرینت‌ها، تابلوهای Kanban و موارد دیگر را شرح می‌دهد. والت به شما نشان می دهد که چگونه Azure Repos مکانی را برای گرفتن کد منبع هر یک از اعضای تیم در سرورهای ابری مایکروسافت فراهم می کند. او شما را در بخش‌های Azure Repos و نحوه مدیریت کارهایی که هر قسمت انجام می‌دهد راهنمایی می‌کند. والت بخش‌ها و ویژگی‌های Azure Pipelines را توضیح می‌دهد، مجموعه‌ای از خدماتی که مراحل ساخت و استقرار برنامه شما را خودکار می‌کنند. او با افزودن‌های مختلفی که می‌توانید به DevOps اضافه کنید، از جمله Slack، Marketplace و Persona نتیجه‌گیری می‌کند.",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Full Stack Developer/2 - 1 - Azure Devops for Beginners.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/English/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/German/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Chinese/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Russian/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/French/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Japanese/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Korean/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Spanish/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Hindi/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Portugues/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Bengali/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Arabic/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Full%20Stack%20Developer/Courses/Persian/2%20-%201%20-%20Azure%20Devops%20for%20Beginners.md",
                                },
                        },
                        // -- > FLUTTER - 1 : Flutter BLoC - From Zero to Hero Complete Course
                        {
                                "title": {
                                        'English': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Deutsch': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '中国人': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Русский': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Français': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '日本語': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '한국인': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Español': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'हिंदी': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Português': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'বাংলা': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'عَرَبِيّ': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'فارسی': "Flutter BLoC - From Zero to Hero Complete Course",
                                },
                                "description": {
                                        'English': "Understand, Learn and Practice the most robust Flutter state management - BLoC Library",
                                        'Deutsch': "Verstehen, lernen und üben Sie die robusteste Flutter-Zustandsverwaltung – BLoC-Bibliothek",
                                        '中国人': "理解、学习和实践最强大的 Flutter 状态管理 - BLoC 库",
                                        'Русский': "Понять, изучить и применить на практике наиболее надежное управление состоянием Flutter - библиотека BLoC",
                                        'Français': "Comprendre, apprendre et pratiquer la gestion d'état Flutter la plus robuste - Bibliothèque BLoC",
                                        '日本語': "最も堅牢な Flutter 状態管理を理解し、学習し、実践する - BLoC ライブラリ",
                                        '한국인': "가장 강력한 Flutter 상태 관리를 이해하고, 배우고, 연습하세요 - BLoC Library",
                                        'Español': "Comprenda, aprenda y practique la gestión de estados de Flutter más sólida - Biblioteca BLoC",
                                        'हिंदी': "सबसे मजबूत फ़्लटर स्टेट मैनेजमेंट को समझें, सीखें और अभ्यास करें - BLoC लाइब्रेरी",
                                        'Português': "Entenda, aprenda e pratique a gestão de estado Flutter mais robusta - Biblioteca BLoC",
                                        'বাংলা': "সবচেয়ে শক্তিশালী ফ্লটার স্টেট ম্যানেজমেন্ট বুঝুন, শিখুন এবং অনুশীলন করুন - BLoC লাইব্রেরি",
                                        'عَرَبِيّ': "فهم وتعلم وممارسة إدارة حالة Flutter الأكثر قوة - مكتبة BLoC",
                                        'فارسی': "قوی ترین مدیریت حالت فلاتر - کتابخانه BLoC را درک کنید، یاد بگیرید و تمرین کنید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 2 - Flutter BLoC - From Zero to Hero Complete Course.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter & Dart - The Complete Guide
                        {
                                "title": {
                                        'English': "Flutter & Dart - The Complete Guide",
                                        'Deutsch': "Flutter & Dart - The Complete Guide",
                                        '中国人': "Flutter & Dart - The Complete Guide",
                                        'Русский': "Flutter & Dart - The Complete Guide",
                                        'Français': "Flutter & Dart - The Complete Guide",
                                        '日本語': "Flutter & Dart - The Complete Guide",
                                        '한국인': "Flutter & Dart - The Complete Guide",
                                        'Español': "Flutter & Dart - The Complete Guide",
                                        'हिंदी': "Flutter & Dart - The Complete Guide",
                                        'Português': "Flutter & Dart - The Complete Guide",
                                        'বাংলা': "Flutter & Dart - The Complete Guide",
                                        'عَرَبِيّ': "Flutter & Dart - The Complete Guide",
                                        'فارسی': "Flutter & Dart - The Complete Guide",
                                },
                                "description": {
                                        'English': "A Complete Guide to the Flutter SDK and Flutter Framework for building native iOS and Android apps",
                                        'Deutsch': "Eine vollständige Anleitung zum Flutter SDK und Flutter Framework zum Erstellen nativer iOS- und Android-Apps",
                                        '中国人': "用于构建原生 iOS 和 Android 应用程序的 Flutter SDK 和 Flutter 框架完整指南",
                                        'Русский': "Полное руководство по Flutter SDK и Flutter Framework для создания собственных приложений для iOS и Android",
                                        'Français': "Un guide complet sur le SDK Flutter et le framework Flutter pour créer des applications natives iOS et Android",
                                        '日本語': "ネイティブ iOS および Android アプリを構築するための Flutter SDK と Flutter フレームワークの完全ガイド",
                                        '한국인': "네이티브 iOS 및 Android 앱을 구축하기 위한 Flutter SDK 및 Flutter Framework에 대한 완전한 가이드",
                                        'Español': "Una guía completa sobre el SDK y el marco de trabajo de Flutter para crear aplicaciones nativas de iOS y Android",
                                        'हिंदी': "मूल iOS और Android ऐप्स बनाने के लिए फ़्लटर SDK और फ़्लटर फ्रेमवर्क के लिए एक संपूर्ण गाइड",
                                        'Português': "Um guia completo para o Flutter SDK e o Flutter Framework para criar aplicações nativas para iOS e Android",
                                        'বাংলা': "নেটিভ আইওএস এবং অ্যান্ড্রয়েড অ্যাপ তৈরির জন্য ফ্লটার SDK এবং ফ্লাটার ফ্রেমওয়ার্কের একটি সম্পূর্ণ নির্দেশিকা",
                                        'عَرَبِيّ': "دليل كامل لمجموعة أدوات التطوير البرمجية Flutter وإطار عمل Flutter لبناء تطبيقات iOS وAndroid الأصلية",
                                        'فارسی': "راهنمای کامل Flutter SDK و Flutter Framework برای ساخت برنامه های بومی iOS و Android",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 1 - Flutter Complete Guide.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                },
                        },
                ],
                // -- >> Android Developer
                "Android Developer": [
                        // -- > FLUTTER - 1 : Flutter BLoC - From Zero to Hero Complete Course
                        {
                                "title": {
                                        'English': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Deutsch': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '中国人': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Русский': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Français': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '日本語': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '한국인': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Español': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'हिंदी': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Português': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'বাংলা': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'عَرَبِيّ': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'فارسی': "Flutter BLoC - From Zero to Hero Complete Course",
                                },
                                "description": {
                                        'English': "Understand, Learn and Practice the most robust Flutter state management - BLoC Library",
                                        'Deutsch': "Verstehen, lernen und üben Sie die robusteste Flutter-Zustandsverwaltung – BLoC-Bibliothek",
                                        '中国人': "理解、学习和实践最强大的 Flutter 状态管理 - BLoC 库",
                                        'Русский': "Понять, изучить и применить на практике наиболее надежное управление состоянием Flutter - библиотека BLoC",
                                        'Français': "Comprendre, apprendre et pratiquer la gestion d'état Flutter la plus robuste - Bibliothèque BLoC",
                                        '日本語': "最も堅牢な Flutter 状態管理を理解し、学習し、実践する - BLoC ライブラリ",
                                        '한국인': "가장 강력한 Flutter 상태 관리를 이해하고, 배우고, 연습하세요 - BLoC Library",
                                        'Español': "Comprenda, aprenda y practique la gestión de estados de Flutter más sólida - Biblioteca BLoC",
                                        'हिंदी': "सबसे मजबूत फ़्लटर स्टेट मैनेजमेंट को समझें, सीखें और अभ्यास करें - BLoC लाइब्रेरी",
                                        'Português': "Entenda, aprenda e pratique a gestão de estado Flutter mais robusta - Biblioteca BLoC",
                                        'বাংলা': "সবচেয়ে শক্তিশালী ফ্লটার স্টেট ম্যানেজমেন্ট বুঝুন, শিখুন এবং অনুশীলন করুন - BLoC লাইব্রেরি",
                                        'عَرَبِيّ': "فهم وتعلم وممارسة إدارة حالة Flutter الأكثر قوة - مكتبة BLoC",
                                        'فارسی': "قوی ترین مدیریت حالت فلاتر - کتابخانه BLoC را درک کنید، یاد بگیرید و تمرین کنید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 2 - Flutter BLoC - From Zero to Hero Complete Course.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter & Dart - The Complete Guide
                        {
                                "title": {
                                        'English': "Flutter & Dart - The Complete Guide",
                                        'Deutsch': "Flutter & Dart - The Complete Guide",
                                        '中国人': "Flutter & Dart - The Complete Guide",
                                        'Русский': "Flutter & Dart - The Complete Guide",
                                        'Français': "Flutter & Dart - The Complete Guide",
                                        '日本語': "Flutter & Dart - The Complete Guide",
                                        '한국인': "Flutter & Dart - The Complete Guide",
                                        'Español': "Flutter & Dart - The Complete Guide",
                                        'हिंदी': "Flutter & Dart - The Complete Guide",
                                        'Português': "Flutter & Dart - The Complete Guide",
                                        'বাংলা': "Flutter & Dart - The Complete Guide",
                                        'عَرَبِيّ': "Flutter & Dart - The Complete Guide",
                                        'فارسی': "Flutter & Dart - The Complete Guide",
                                },
                                "description": {
                                        'English': "A Complete Guide to the Flutter SDK and Flutter Framework for building native iOS and Android apps",
                                        'Deutsch': "Eine vollständige Anleitung zum Flutter SDK und Flutter Framework zum Erstellen nativer iOS- und Android-Apps",
                                        '中国人': "用于构建原生 iOS 和 Android 应用程序的 Flutter SDK 和 Flutter 框架完整指南",
                                        'Русский': "Полное руководство по Flutter SDK и Flutter Framework для создания собственных приложений для iOS и Android",
                                        'Français': "Un guide complet sur le SDK Flutter et le framework Flutter pour créer des applications natives iOS et Android",
                                        '日本語': "ネイティブ iOS および Android アプリを構築するための Flutter SDK と Flutter フレームワークの完全ガイド",
                                        '한국인': "네이티브 iOS 및 Android 앱을 구축하기 위한 Flutter SDK 및 Flutter Framework에 대한 완전한 가이드",
                                        'Español': "Una guía completa sobre el SDK y el marco de trabajo de Flutter para crear aplicaciones nativas de iOS y Android",
                                        'हिंदी': "मूल iOS और Android ऐप्स बनाने के लिए फ़्लटर SDK और फ़्लटर फ्रेमवर्क के लिए एक संपूर्ण गाइड",
                                        'Português': "Um guia completo para o Flutter SDK e o Flutter Framework para criar aplicações nativas para iOS e Android",
                                        'বাংলা': "নেটিভ আইওএস এবং অ্যান্ড্রয়েড অ্যাপ তৈরির জন্য ফ্লটার SDK এবং ফ্লাটার ফ্রেমওয়ার্কের একটি সম্পূর্ণ নির্দেশিকা",
                                        'عَرَبِيّ': "دليل كامل لمجموعة أدوات التطوير البرمجية Flutter وإطار عمل Flutter لبناء تطبيقات iOS وAndroid الأصلية",
                                        'فارسی': "راهنمای کامل Flutter SDK و Flutter Framework برای ساخت برنامه های بومی iOS و Android",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 1 - Flutter Complete Guide.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                },
                        },
                ],
                // -- >> AI Engineer
                "AI Engineer": [
                        // -- > FLUTTER - 1 : Flutter BLoC - From Zero to Hero Complete Course
                        {
                                "title": {
                                        'English': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Deutsch': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '中国人': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Русский': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Français': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '日本語': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '한국인': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Español': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'हिंदी': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Português': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'বাংলা': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'عَرَبِيّ': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'فارسی': "Flutter BLoC - From Zero to Hero Complete Course",
                                },
                                "description": {
                                        'English': "Understand, Learn and Practice the most robust Flutter state management - BLoC Library",
                                        'Deutsch': "Verstehen, lernen und üben Sie die robusteste Flutter-Zustandsverwaltung – BLoC-Bibliothek",
                                        '中国人': "理解、学习和实践最强大的 Flutter 状态管理 - BLoC 库",
                                        'Русский': "Понять, изучить и применить на практике наиболее надежное управление состоянием Flutter - библиотека BLoC",
                                        'Français': "Comprendre, apprendre et pratiquer la gestion d'état Flutter la plus robuste - Bibliothèque BLoC",
                                        '日本語': "最も堅牢な Flutter 状態管理を理解し、学習し、実践する - BLoC ライブラリ",
                                        '한국인': "가장 강력한 Flutter 상태 관리를 이해하고, 배우고, 연습하세요 - BLoC Library",
                                        'Español': "Comprenda, aprenda y practique la gestión de estados de Flutter más sólida - Biblioteca BLoC",
                                        'हिंदी': "सबसे मजबूत फ़्लटर स्टेट मैनेजमेंट को समझें, सीखें और अभ्यास करें - BLoC लाइब्रेरी",
                                        'Português': "Entenda, aprenda e pratique a gestão de estado Flutter mais robusta - Biblioteca BLoC",
                                        'বাংলা': "সবচেয়ে শক্তিশালী ফ্লটার স্টেট ম্যানেজমেন্ট বুঝুন, শিখুন এবং অনুশীলন করুন - BLoC লাইব্রেরি",
                                        'عَرَبِيّ': "فهم وتعلم وممارسة إدارة حالة Flutter الأكثر قوة - مكتبة BLoC",
                                        'فارسی': "قوی ترین مدیریت حالت فلاتر - کتابخانه BLoC را درک کنید، یاد بگیرید و تمرین کنید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 2 - Flutter BLoC - From Zero to Hero Complete Course.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter & Dart - The Complete Guide
                        {
                                "title": {
                                        'English': "Flutter & Dart - The Complete Guide",
                                        'Deutsch': "Flutter & Dart - The Complete Guide",
                                        '中国人': "Flutter & Dart - The Complete Guide",
                                        'Русский': "Flutter & Dart - The Complete Guide",
                                        'Français': "Flutter & Dart - The Complete Guide",
                                        '日本語': "Flutter & Dart - The Complete Guide",
                                        '한국인': "Flutter & Dart - The Complete Guide",
                                        'Español': "Flutter & Dart - The Complete Guide",
                                        'हिंदी': "Flutter & Dart - The Complete Guide",
                                        'Português': "Flutter & Dart - The Complete Guide",
                                        'বাংলা': "Flutter & Dart - The Complete Guide",
                                        'عَرَبِيّ': "Flutter & Dart - The Complete Guide",
                                        'فارسی': "Flutter & Dart - The Complete Guide",
                                },
                                "description": {
                                        'English': "A Complete Guide to the Flutter SDK and Flutter Framework for building native iOS and Android apps",
                                        'Deutsch': "Eine vollständige Anleitung zum Flutter SDK und Flutter Framework zum Erstellen nativer iOS- und Android-Apps",
                                        '中国人': "用于构建原生 iOS 和 Android 应用程序的 Flutter SDK 和 Flutter 框架完整指南",
                                        'Русский': "Полное руководство по Flutter SDK и Flutter Framework для создания собственных приложений для iOS и Android",
                                        'Français': "Un guide complet sur le SDK Flutter et le framework Flutter pour créer des applications natives iOS et Android",
                                        '日本語': "ネイティブ iOS および Android アプリを構築するための Flutter SDK と Flutter フレームワークの完全ガイド",
                                        '한국인': "네이티브 iOS 및 Android 앱을 구축하기 위한 Flutter SDK 및 Flutter Framework에 대한 완전한 가이드",
                                        'Español': "Una guía completa sobre el SDK y el marco de trabajo de Flutter para crear aplicaciones nativas de iOS y Android",
                                        'हिंदी': "मूल iOS और Android ऐप्स बनाने के लिए फ़्लटर SDK और फ़्लटर फ्रेमवर्क के लिए एक संपूर्ण गाइड",
                                        'Português': "Um guia completo para o Flutter SDK e o Flutter Framework para criar aplicações nativas para iOS e Android",
                                        'বাংলা': "নেটিভ আইওএস এবং অ্যান্ড্রয়েড অ্যাপ তৈরির জন্য ফ্লটার SDK এবং ফ্লাটার ফ্রেমওয়ার্কের একটি সম্পূর্ণ নির্দেশিকা",
                                        'عَرَبِيّ': "دليل كامل لمجموعة أدوات التطوير البرمجية Flutter وإطار عمل Flutter لبناء تطبيقات iOS وAndroid الأصلية",
                                        'فارسی': "راهنمای کامل Flutter SDK و Flutter Framework برای ساخت برنامه های بومی iOS و Android",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 1 - Flutter Complete Guide.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                },
                        },
                ],
                // -- >> Industrial Designer
                "Industrial Designer": [

                ],
                // -- >> Self-Driving Automobile Engineer
                "Self-Driving Automobile Engineer": [
                        // -- > FLUTTER - 1 : Flutter BLoC - From Zero to Hero Complete Course
                        {
                                "title": {
                                        'English': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Deutsch': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '中国人': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Русский': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Français': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '日本語': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '한국인': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Español': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'हिंदी': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Português': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'বাংলা': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'عَرَبِيّ': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'فارسی': "Flutter BLoC - From Zero to Hero Complete Course",
                                },
                                "description": {
                                        'English': "Understand, Learn and Practice the most robust Flutter state management - BLoC Library",
                                        'Deutsch': "Verstehen, lernen und üben Sie die robusteste Flutter-Zustandsverwaltung – BLoC-Bibliothek",
                                        '中国人': "理解、学习和实践最强大的 Flutter 状态管理 - BLoC 库",
                                        'Русский': "Понять, изучить и применить на практике наиболее надежное управление состоянием Flutter - библиотека BLoC",
                                        'Français': "Comprendre, apprendre et pratiquer la gestion d'état Flutter la plus robuste - Bibliothèque BLoC",
                                        '日本語': "最も堅牢な Flutter 状態管理を理解し、学習し、実践する - BLoC ライブラリ",
                                        '한국인': "가장 강력한 Flutter 상태 관리를 이해하고, 배우고, 연습하세요 - BLoC Library",
                                        'Español': "Comprenda, aprenda y practique la gestión de estados de Flutter más sólida - Biblioteca BLoC",
                                        'हिंदी': "सबसे मजबूत फ़्लटर स्टेट मैनेजमेंट को समझें, सीखें और अभ्यास करें - BLoC लाइब्रेरी",
                                        'Português': "Entenda, aprenda e pratique a gestão de estado Flutter mais robusta - Biblioteca BLoC",
                                        'বাংলা': "সবচেয়ে শক্তিশালী ফ্লটার স্টেট ম্যানেজমেন্ট বুঝুন, শিখুন এবং অনুশীলন করুন - BLoC লাইব্রেরি",
                                        'عَرَبِيّ': "فهم وتعلم وممارسة إدارة حالة Flutter الأكثر قوة - مكتبة BLoC",
                                        'فارسی': "قوی ترین مدیریت حالت فلاتر - کتابخانه BLoC را درک کنید، یاد بگیرید و تمرین کنید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 2 - Flutter BLoC - From Zero to Hero Complete Course.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter & Dart - The Complete Guide
                        {
                                "title": {
                                        'English': "Flutter & Dart - The Complete Guide",
                                        'Deutsch': "Flutter & Dart - The Complete Guide",
                                        '中国人': "Flutter & Dart - The Complete Guide",
                                        'Русский': "Flutter & Dart - The Complete Guide",
                                        'Français': "Flutter & Dart - The Complete Guide",
                                        '日本語': "Flutter & Dart - The Complete Guide",
                                        '한국인': "Flutter & Dart - The Complete Guide",
                                        'Español': "Flutter & Dart - The Complete Guide",
                                        'हिंदी': "Flutter & Dart - The Complete Guide",
                                        'Português': "Flutter & Dart - The Complete Guide",
                                        'বাংলা': "Flutter & Dart - The Complete Guide",
                                        'عَرَبِيّ': "Flutter & Dart - The Complete Guide",
                                        'فارسی': "Flutter & Dart - The Complete Guide",
                                },
                                "description": {
                                        'English': "A Complete Guide to the Flutter SDK and Flutter Framework for building native iOS and Android apps",
                                        'Deutsch': "Eine vollständige Anleitung zum Flutter SDK und Flutter Framework zum Erstellen nativer iOS- und Android-Apps",
                                        '中国人': "用于构建原生 iOS 和 Android 应用程序的 Flutter SDK 和 Flutter 框架完整指南",
                                        'Русский': "Полное руководство по Flutter SDK и Flutter Framework для создания собственных приложений для iOS и Android",
                                        'Français': "Un guide complet sur le SDK Flutter et le framework Flutter pour créer des applications natives iOS et Android",
                                        '日本語': "ネイティブ iOS および Android アプリを構築するための Flutter SDK と Flutter フレームワークの完全ガイド",
                                        '한국인': "네이티브 iOS 및 Android 앱을 구축하기 위한 Flutter SDK 및 Flutter Framework에 대한 완전한 가이드",
                                        'Español': "Una guía completa sobre el SDK y el marco de trabajo de Flutter para crear aplicaciones nativas de iOS y Android",
                                        'हिंदी': "मूल iOS और Android ऐप्स बनाने के लिए फ़्लटर SDK और फ़्लटर फ्रेमवर्क के लिए एक संपूर्ण गाइड",
                                        'Português': "Um guia completo para o Flutter SDK e o Flutter Framework para criar aplicações nativas para iOS e Android",
                                        'বাংলা': "নেটিভ আইওএস এবং অ্যান্ড্রয়েড অ্যাপ তৈরির জন্য ফ্লটার SDK এবং ফ্লাটার ফ্রেমওয়ার্কের একটি সম্পূর্ণ নির্দেশিকা",
                                        'عَرَبِيّ': "دليل كامل لمجموعة أدوات التطوير البرمجية Flutter وإطار عمل Flutter لبناء تطبيقات iOS وAndroid الأصلية",
                                        'فارسی': "راهنمای کامل Flutter SDK و Flutter Framework برای ساخت برنامه های بومی iOS و Android",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 1 - Flutter Complete Guide.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                },
                        },
                ],
                // -- >> Mechanical Engineer
                "Mechanical Engineer": [
                        // -- > FLUTTER - 1 : Flutter BLoC - From Zero to Hero Complete Course
                        {
                                "title": {
                                        'English': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Deutsch': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '中国人': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Русский': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Français': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '日本語': "Flutter BLoC - From Zero to Hero Complete Course",
                                        '한국인': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Español': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'हिंदी': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'Português': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'বাংলা': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'عَرَبِيّ': "Flutter BLoC - From Zero to Hero Complete Course",
                                        'فارسی': "Flutter BLoC - From Zero to Hero Complete Course",
                                },
                                "description": {
                                        'English': "Understand, Learn and Practice the most robust Flutter state management - BLoC Library",
                                        'Deutsch': "Verstehen, lernen und üben Sie die robusteste Flutter-Zustandsverwaltung – BLoC-Bibliothek",
                                        '中国人': "理解、学习和实践最强大的 Flutter 状态管理 - BLoC 库",
                                        'Русский': "Понять, изучить и применить на практике наиболее надежное управление состоянием Flutter - библиотека BLoC",
                                        'Français': "Comprendre, apprendre et pratiquer la gestion d'état Flutter la plus robuste - Bibliothèque BLoC",
                                        '日本語': "最も堅牢な Flutter 状態管理を理解し、学習し、実践する - BLoC ライブラリ",
                                        '한국인': "가장 강력한 Flutter 상태 관리를 이해하고, 배우고, 연습하세요 - BLoC Library",
                                        'Español': "Comprenda, aprenda y practique la gestión de estados de Flutter más sólida - Biblioteca BLoC",
                                        'हिंदी': "सबसे मजबूत फ़्लटर स्टेट मैनेजमेंट को समझें, सीखें और अभ्यास करें - BLoC लाइब्रेरी",
                                        'Português': "Entenda, aprenda e pratique a gestão de estado Flutter mais robusta - Biblioteca BLoC",
                                        'বাংলা': "সবচেয়ে শক্তিশালী ফ্লটার স্টেট ম্যানেজমেন্ট বুঝুন, শিখুন এবং অনুশীলন করুন - BLoC লাইব্রেরি",
                                        'عَرَبِيّ': "فهم وتعلم وممارسة إدارة حالة Flutter الأكثر قوة - مكتبة BLoC",
                                        'فارسی': "قوی ترین مدیریت حالت فلاتر - کتابخانه BLoC را درک کنید، یاد بگیرید و تمرین کنید",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 2 - Flutter BLoC - From Zero to Hero Complete Course.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.md",
                                },
                        },
                        // -- > FLUTTER - 2 : Flutter & Dart - The Complete Guide
                        {
                                "title": {
                                        'English': "Flutter & Dart - The Complete Guide",
                                        'Deutsch': "Flutter & Dart - The Complete Guide",
                                        '中国人': "Flutter & Dart - The Complete Guide",
                                        'Русский': "Flutter & Dart - The Complete Guide",
                                        'Français': "Flutter & Dart - The Complete Guide",
                                        '日本語': "Flutter & Dart - The Complete Guide",
                                        '한국인': "Flutter & Dart - The Complete Guide",
                                        'Español': "Flutter & Dart - The Complete Guide",
                                        'हिंदी': "Flutter & Dart - The Complete Guide",
                                        'Português': "Flutter & Dart - The Complete Guide",
                                        'বাংলা': "Flutter & Dart - The Complete Guide",
                                        'عَرَبِيّ': "Flutter & Dart - The Complete Guide",
                                        'فارسی': "Flutter & Dart - The Complete Guide",
                                },
                                "description": {
                                        'English': "A Complete Guide to the Flutter SDK and Flutter Framework for building native iOS and Android apps",
                                        'Deutsch': "Eine vollständige Anleitung zum Flutter SDK und Flutter Framework zum Erstellen nativer iOS- und Android-Apps",
                                        '中国人': "用于构建原生 iOS 和 Android 应用程序的 Flutter SDK 和 Flutter 框架完整指南",
                                        'Русский': "Полное руководство по Flutter SDK и Flutter Framework для создания собственных приложений для iOS и Android",
                                        'Français': "Un guide complet sur le SDK Flutter et le framework Flutter pour créer des applications natives iOS et Android",
                                        '日本語': "ネイティブ iOS および Android アプリを構築するための Flutter SDK と Flutter フレームワークの完全ガイド",
                                        '한국인': "네이티브 iOS 및 Android 앱을 구축하기 위한 Flutter SDK 및 Flutter Framework에 대한 완전한 가이드",
                                        'Español': "Una guía completa sobre el SDK y el marco de trabajo de Flutter para crear aplicaciones nativas de iOS y Android",
                                        'हिंदी': "मूल iOS और Android ऐप्स बनाने के लिए फ़्लटर SDK और फ़्लटर फ्रेमवर्क के लिए एक संपूर्ण गाइड",
                                        'Português': "Um guia completo para o Flutter SDK e o Flutter Framework para criar aplicações nativas para iOS e Android",
                                        'বাংলা': "নেটিভ আইওএস এবং অ্যান্ড্রয়েড অ্যাপ তৈরির জন্য ফ্লটার SDK এবং ফ্লাটার ফ্রেমওয়ার্কের একটি সম্পূর্ণ নির্দেশিকা",
                                        'عَرَبِيّ': "دليل كامل لمجموعة أدوات التطوير البرمجية Flutter وإطار عمل Flutter لبناء تطبيقات iOS وAndroid الأصلية",
                                        'فارسی': "راهنمای کامل Flutter SDK و Flutter Framework برای ساخت برنامه های بومی iOS و Android",
                                },
                                "intro_image_link": "assets/img/Projects - Books - Courses -- Images/Courses/Flutter Developer/3 - 1 - Flutter Complete Guide.webp",
                                "detail_markdown_link": {
                                        'English': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/English/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Deutsch': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/German/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '中国人': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Chinese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Русский': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Russian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Français': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/French/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '日本語': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Japanese/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        '한국인': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Korean/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Español': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Spanish/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'हिंदी': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Hindi/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'Português': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Portugues/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'বাংলা': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Bengali/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'عَرَبِيّ': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Arabic/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                        'فارسی': "https://github.com/MohammadHoseinAbootalebi/MohammadHoseinAbootalebi.github.io/blob/main/Docs/Flutter%20Developer/Courses/Persian/3%20-%201%20-%20Flutter%20Complete%20Guide.md",
                                },
                        },
                ],
        },
};

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// ■■■■■■■■■■■■■■■■■■■ ↑ Projects Books Courses Database ↑ ■■■■■■■■■■■■■■■■■■■■■■■ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //

// -- >> First Font Heirachy : Heading Fonts
var heading_Fonts_Translations = {
        'English': {
                'Navbar_Home_Link': 'Home',
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "Projects",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "Books",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "Courses",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "Projekte",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "Bücher",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "Kurse",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "项目",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "书籍",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "课程",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "Проекты",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "Книги",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "Курсы",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "Projets",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "Livres",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "Cours",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "プロジェクト",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "書籍",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "コース",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "프로젝트",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "책",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "코스",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "Proyectos",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "Libros",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "Cursos",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "प्रोजेक्ट",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "पुस्तकें",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "पाठ्यक्रम",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "Projetos",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "Livros",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "Cursos",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "প্রকল্প",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "বই",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "কোর্স",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "المشاريع",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "الكتب",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "الدورات",
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
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects": "پروژه ها",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books": "کتاب ها",
                "MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses": "دوره ها",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "This page is under construction 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "Diese Seite befindet sich im Aufbau 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "此页面正在建设中😉。",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "Эта страница находится в разработке 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "Cette page est en construction 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "このページは現在作成中です 😉。",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "이 페이지는 현재 제작 중입니다 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "Esta página está en construcción 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "यह पृष्ठ निर्माणाधीन है 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "Esta página está em construção 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "এই পেজটি নির্মাণাধীন 😉",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "هذه الصفحة قيد الإنشاء 😉.",
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
                'MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder': "این صفحه در حال ساخت است 😉.",
                'Contact_Me_All_Rights_Are_Reserved': "© 2024 محمد حسین ابوطالبی. تمامی حقوق محفوظ است.",
                'fontFamily': "'B Nazanin'",
        },
};

// -- >> Needed Properties : Skill and Language
var neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page = {

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
                this.call_translate_Navbar_Caller(newLanguage, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill);

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
                this.call_translate_Navbar_Caller(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, newSkill);

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
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_UIUXDESIGNER").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_UIUXDESIGNER").dataset.info) + "&language=" + encodeURI(language) + "&section=" + encodeURIComponent(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                //// ----- >>>> Flutter Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FLUTTER_DEVELOPER").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FLUTTER_DEVELOPER").dataset.info) + "&language=" + encodeURI(language) + "&section=" + encodeURIComponent(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                //// ----- >>>> Full Stack Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FULL_STACK_DEVELOPER").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_FULL_STACK_DEVELOPER").dataset.info) + "&language=" + encodeURI(language) + "&section=" + encodeURIComponent(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                //// ----- >>>> Android Developer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_ANDROID_DEVELOPER").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_ANDROID_DEVELOPER").dataset.info) + "&language=" + encodeURI(language) + "&section=" + encodeURIComponent(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                //// ----- >>>> AI Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_AI_ENGINEER").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_AI_ENGINEER").dataset.info) + "&language=" + encodeURI(language) + "&section=" + encodeURIComponent(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                //// ----- >>>> Industrial Designer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_INDUSTRIAL_DESIGNER").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_INDUSTRIAL_DESIGNER").dataset.info) + "&language=" + encodeURI(language) + "&section=" + encodeURIComponent(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                //// ----- >>>> SDA Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_SELF_DRIVING_ENGINEER").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_SELF_DRIVING_ENGINEER").dataset.info) + "&language=" + encodeURI(language) + "&section=" + encodeURIComponent(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                //// ----- >>>> Mechanical Engineer
                document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_MECHANICAL_ENGINEER").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_MECHANICAL_ENGINEER").dataset.info) + "&language=" + encodeURI(language) + "&section=" + encodeURIComponent(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

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

                // Landing Page
                /// --- >>> Projects | Books | Courses Title Heading
                if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected != "") {

                        // -- >> Section title
                        var section_title = "";
                        // -- >> Section description
                        var section_description = "";
                        // -- >> Section Image
                        var section_image = "";

                        if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "projects") {

                                section_title = "Projects_Courses_Books_Done_Projects_Title";
                                section_description = "MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description";
                                section_image = "assets/img/Illustrations/Projects.svg";

                        } else if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "books") {

                                section_title = "Projects_Courses_Books_Reed_Books_Title";
                                section_description = "MuhammadHusainAbootalebi-Projects-Courses-Books_Read_Books_Description";
                                section_image = "assets/img/Illustrations/Book.svg";

                        } else if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "courses") {

                                section_title = "Projects_Courses_Books_Passed_Courses_Title";
                                section_description = "MuhammadHusainAbootalebi-Projects-Courses-Books_Passed_Courses_Description";
                                section_image = "assets/img/Illustrations/Courses.svg";

                        } else {

                                // -- >> Save default selections
                                section_title = "Projects_Courses_Books_Done_Projects_Title";
                                section_description = "MuhammadHusainAbootalebi-Projects-Courses-Books_Done_Projects_Description";
                                section_image = "assets/img/Illustrations/Projects.svg";

                        }

                        /// --- >>> Title
                        // TODO: 
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_Title_Heading").textContent = heading_Fonts_Translations[language][section_title];
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_Title_Heading").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                        if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_Title_Heading").style.textAlign = "right";
                                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_Title_Heading").dir = "rtl";
                        } else {
                                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_Title_Heading").style.textAlign = "left";
                                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_Title_Heading").dir = "ltr";
                        }

                        /// --- >>> Description
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_DESCRIPTION_PARAGRAPH").textContent = body_Fonts_Translations[language][section_description];
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_DESCRIPTION_PARAGRAPH").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];

                        if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_DESCRIPTION_PARAGRAPH").style.textAlign = "right";
                                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_DESCRIPTION_PARAGRAPH").dir = "rtl";
                        } else {
                                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_DESCRIPTION_PARAGRAPH").style.textAlign = "left";
                                document.getElementById("MuhammadHusainAbootalebi-Projects-Courses-Books-Landing-Page_DESCRIPTION_PARAGRAPH").dir = "ltr";
                        }

                        /// --- >>> Section Image
                        document.querySelectorAll(".MuhammadHusainAbootalebi-Landing-Page_Background_Skill_Image").forEach(

                                (item, index) => {

                                        item.src = section_image;

                                }

                        );

                }

                // -- >> Pagination

                /// --- >>> Call Entry Point
                pagination_functionality();

                /// --- >>> Translating the records

                var title_s = document.querySelectorAll(".MuhammadHusainAbootalebi-PCBs_Heading_Title");
                var des_s = document.querySelectorAll(".MuhammadHusainAbootalebi-PCBs_Short_Intro_Paragraph");

                for (var i = 0; i < shown_record_indeces.length; ++i) {

                        title_s[i].textContent = muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][Skill][shown_record_indeces[i]]["title"][language];
                        title_s[i].style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                        des_s[i].textContent = muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][Skill][shown_record_indeces[i]]["description"][language];
                        des_s[i].style.fontFamily = body_Fonts_Translations[language]["fontFamily"];

                }

                /// --- >>> See more buttons
                document.querySelectorAll(".MHA-RECORDS-SEE-MORE-BUTTON").forEach((item, index) => {
                        item.textContent = heading_Fonts_Translations[language]["Projects_Courses_Books_Done_Projects_Button"];
                        item.style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                });

                // -- >> Adding the href of the section dropdown
                if ((neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected != "") && (Skill != "") && (language != "")) {
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Projects").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(Skill) + "&language=" + encodeURIComponent(language) + "&section=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Projects").dataset.info);
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Books").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(Skill) + "&language=" + encodeURIComponent(language) + "&section=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Books").dataset.info);
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Courses").href = "Projects Books Courses [ Records ].html?skill=" + encodeURIComponent(Skill) + "&language=" + encodeURIComponent(language) + "&section=" + encodeURIComponent(document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Courses").dataset.info);
                }

                /// --- >>> Showing the current section
                if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected != "") {

                        var section_element;

                        // -- >> Getting the current section
                        if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "projects") {

                                section_element = document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Projects");

                        } else if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "books") {

                                section_element = document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Books");

                        } else if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "courses") {

                                section_element = document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Courses");

                        }

                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Link").textContent = section_element.textContent;
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Link").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

                        /// --- >>> Stylize the section
                        styling_current_selected_drop_down("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu", section_element.textContent);

                        /// --- >>> Section Dropdown translation
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Projects").textContent = heading_Fonts_Translations[language]["MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Projects"];
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Projects").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Books").textContent = heading_Fonts_Translations[language]["MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Books"];
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Books").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Courses").textContent = heading_Fonts_Translations[language]["MuhammadHusainAbootalebi-Navbar-Section-DropDown-Content_Courses"];
                        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Courses").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];
                }

                // -- >> No Content Available Text
                document.getElementById("MuhammadHusainAbootalebi-No-Content-Page-Available_text").textContent = body_Fonts_Translations[language]["MuhammadHusainAbootalebi-No-Content-Available-Text-Placeholder"];
                document.getElementById("MuhammadHusainAbootalebi-No-Content-Page-Available_text").style.fontFamily = body_Fonts_Translations[language]["fontFamily"];
                if ((language == "فارسی") || (language == "عَرَبِيّ")) {
                        document.getElementById("MuhammadHusainAbootalebi-No-Content-Page-Available_text").style.textAlign = "right";
                        document.getElementById("MuhammadHusainAbootalebi-No-Content-Page-Available_text").dir = "rtl";
                } else {
                        document.getElementById("MuhammadHusainAbootalebi-No-Content-Page-Available_text").style.textAlign = "left";
                        document.getElementById("MuhammadHusainAbootalebi-No-Content-Page-Available_text").dir = "ltr";
                }


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

        // -- >> Project | Books | Courses Section
        _current_projectorbooksorcourses_section_selected: "",

        // -- >> Get the current selected projects or books or courses section
        get currentSelectedSection() {

                /// --- >>> Return the current selected section
                return this._current_projectorbooksorcourses_section_selected;

        },

        // -- >> Set the current selected projects or books or courses section
        set currentSelectedSection(newSection) {

                // -- >> Translate Contents section change
                this.call_translate_Navbar_Caller(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill);

                /// --- >>> Save the new selected section to the global section
                return this._current_projectorbooksorcourses_section_selected = newSection;

        }
};

// -- >> To prevent the default behaviours
var previousButtonClicked = false;
var nextButtonClicked = false;

// -- >> Current record indeces
var shown_record_indeces = [];

// -------------------------------- ↑ Variables ↑ -------------------------------- //


// --------------------- ↓ Initialization [On Load Page] ↓ ------------------------ //

// -- >> Try to get the passed skill argument
var passed_skill = get_URL_Parameters('skill');

// -- >> Try to get the passed language
var passed_language = get_URL_Parameters('language');

// -- >> Try to get the selected section (Projects or Books or Courses)
var passed_section = get_URL_Parameters('section');

// -- >> Check for gotten skill and language parameters
if ((!passed_skill) && (!passed_language) && (!passed_section)) {

        /// --- >>> Both skill and language are EMPTY or NULL

        /// --- >>> If not any language set, user system language
        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

        /// --- >>> Set the language of docuemnt based on system language
        switch (systemLanguage) {
                // English
                case ('en-US') || ('en') || ('en-GB'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'English';
                        break;
                // German
                case ('de') || ('de-DE'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'Deutsch';
                        break;
                // Chinese
                case ('zh') || ('zh-CN') || ('zh-TW'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = '中国人';
                        break;
                // Russian
                case ('ru') || ('ru-RU'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'Русский';
                        break;
                // French
                case ('fr') || ('fr-FR') || ('fr-CA'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'Français';
                        break;
                // Japanese
                case ('ja') || ('ja-JP'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = '日本語';
                        break;
                // Korean
                case ('ko') || ('ko-KR'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = '한국인';
                        break;
                // Español
                case ('es') || ('es-ES') || ('es-MX'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'Español';
                        break;
                // Hindi
                case ('hi') || ('hi-IN'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'हिंदी';
                        break;
                // Portuguese
                case ('pt') || ('pt-PT') || ('pt-BR'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'Português';
                        break;
                // Bangali
                case ('bn') || ('bn-BD') || ('bn-IN'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'বাংলা';
                        break;
                // Arabic
                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'عَرَبِيّ';
                        break;
                // Persian
                case ('fa') || ('fa-IR'):
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = 'فارسی';
                        break;
                // Default is English
                default:
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage('English');
                        break;
        }

        // -- >> Call Translate
        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.call_translate_Navbar_Caller(
                neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage,
                neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedSkill,
        );
}
// -- >> In case the skill and language are passed
else {
        /// --- >>> Whether the skill or language are PASSED

        /// --- >>> Set the passed skill and language
        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = passed_language;
        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedSkill = passed_skill;
        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedSection = passed_section;

        /// --- >>> Call Translate
        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.call_translate_Navbar_Caller(
                neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage,
                neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedSkill,
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
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedLanguage = this.textContent;
                        /// --- >>> Call Translate
                        neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.call_translate_Navbar_Caller(
                                this.textContent,
                                neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.currentSelectedSkill,
                        );
                });
        });

        // -- >> Pagination Contents

        /// --- >>> Calculating the number of records
        var recordsTotal = muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length;

        /// --- >>> Showing or Not showing the pagination buttons based on the number of records
        if (Math.ceil(recordsTotal / number_of_records_per_page) == 1) {
                //// ---- >>>> Don't show the 2nd, 3rd, next and previous buttons
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Previous-button").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Next-button").style.display = "none";

        } else if (Math.ceil(recordsTotal / number_of_records_per_page) == 2) {

                //// ---- >>>> Show Previous, Next, One, and Two
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Previous-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Next-button").style.display = "";

        } else if (Math.ceil(recordsTotal / number_of_records_per_page) == 3) {

                //// ---- >>>> Show Previous, Next, One, and Two, and Three
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Previous-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Previous-button").setAttribute("onclick", "pagination_Previous_Button_JUST_1_2_3_BUTTONS()");

                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Next-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Next-button").setAttribute("onclick", "pagination_Next_Button_JUST_1_2_3_BUTTONS()");

        } else {

                //// ---- >>>> Show all
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Previous-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Previous-button").setAttribute("onclick", "FourButton3DotExistedPaginationPreviousButton()");

                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update").setAttribute("onclick", "pagination_3Dot_button_LoadBooksRows()");

                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Next-button").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-record-pagination-Next-button").setAttribute("onclick", "FourButton3DotExistedPagination()");

        }

        // There are two set of three rows of Book
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
        // Removing current book rows
        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
        while (BookRowSection.firstChild) {
                BookRowSection.removeChild(BookRowSection.lastChild);
        }
        // Recreating the Book Rows
        if (Math.ceil(muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length / number_of_records_per_page) >= 1) {
                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 0, 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
        } else {
                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 0, muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
        }
        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                behavior: "smooth",
        });

        // -- >> If there is no content available, then display the no content view
        if (muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length == 0) {

                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-Pagination-Section").style.display = "none";
                document.getElementById("MuhammadHusainAbootalebi-No-Content-Available--Section").classList.add("Should-Show-No-Content");
                document.getElementById("MuhammadHusainAbootalebi-No-Content-Available--Section").classList.remove("Should-NOT-Show-No-Content");

        } else {

                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-Pagination-Section").style.display = "";
                document.getElementById("MuhammadHusainAbootalebi-No-Content-Available--Section").style.display = "none !important";
                document.getElementById("MuhammadHusainAbootalebi-No-Content-Available--Section").classList.remove("Should-Show-No-Content");
                document.getElementById("MuhammadHusainAbootalebi-No-Content-Available--Section").classList.add("Should-NOT-Show-No-Content");

        }

        var section_element;

        // -- >> Getting the current section
        if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "projects") {

                section_element = document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Projects");

        } else if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "books") {

                section_element = document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Books");

        } else if (neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected == "courses") {

                section_element = document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu_Courses");

        }

        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Link").textContent = section_element.textContent;
        document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Link").style.fontFamily = heading_Fonts_Translations[language]["fontFamily"];

        /// --- >>> Stylize the section
        styling_current_selected_drop_down("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Menu", section_element.textContent);
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

// -- >> String capitalizer
function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●● //

// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //
// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //
// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ ↓ Pagination ↓ ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //
// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //
// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //

// Documentation
// This function will create the record cover row list
function Projects_Books_Courses_Record_Creator(SkillName, Language, StartIndex, EndIndex, Section) {

        // -- >> Reset the record indices
        shown_record_indeces = [];

        // Creating the records  which has more than 3 books
        // Creating the records which has one or two books
        for (var index = StartIndex; index < EndIndex; ++index) {

                if (index < muhammad_husain_abootalebi_projects_books_courses_records[Section][SkillName].length) {

                        // Row
                        var parent = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        var rowBook = document.createElement("div");
                        rowBook.id = "Book-record-for-styling";
                        rowBook.classList.add("w-100");
                        rowBook.classList.add("MuhammadHusainAbootalebi-Projects-Courses-Books-RECORDS_Outer_Div");
                        rowBook.classList.add("p-4");
                        parent.appendChild(rowBook);

                        // Image Column
                        var parent = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        var ImageColumn = document.createElement("div");
                        ImageColumn.id = "Book-image-second-view-column";
                        ImageColumn.className = "mx-4 MuhammadHusainAbootalebi-Projects-Courses-Books-RECORDS_Inner_Div_Image MHA-RECORDS-COLUMNS";
                        var Image_column = document.createElement("img");
                        Image_column.id = "Book-image-second-view";
                        Image_column.className = "w-100 h-auto MUHAMMAD-HUSAIN-ABOOTALEBI-RECORDS-IMAGE-ELEMENT";
                        Image_column.src = muhammad_husain_abootalebi_projects_books_courses_records[Section][SkillName][index]["intro_image_link"];
                        ImageColumn.appendChild(Image_column); // -- >> Adding the img element to the div
                        parent.appendChild(ImageColumn); // -- >> Adding the div to the parent section

                        // Book Short Information Row
                        var parent = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        var ShortInformationRow = document.createElement("div");
                        ShortInformationRow.id = "short-information-couloumn-all-text-staffs";
                        ShortInformationRow.className = "MuhammadHusainAbootalebi-Projects-Courses-Books-RECORDS_Inner_Div_Contents MHA-RECORDS-COLUMNS";
                        // - > - > Book Name Title
                        var BookNameTitle = document.createElement("h1");
                        BookNameTitle.id = "Book-name";
                        BookNameTitle.className = "my-3 MuhammadHusainAbootalebi-PCBs_Heading_Title";
                        BookNameTitle.textContent = muhammad_husain_abootalebi_projects_books_courses_records[Section][SkillName][index]["title"][Language];
                        BookNameTitle.style.fontFamily = heading_Fonts_Translations[Language]["fontFamily"];
                        ShortInformationRow.appendChild(BookNameTitle);

                        // -- >> Adding the index to the indices
                        shown_record_indeces.push(index);

                        // - > - > Short Description
                        var ShortDescriptionRow = document.createElement("p");
                        if ((Language == "فارسی") || (Language == "عَرَبِيّ")) {
                                ShortDescriptionRow.dir = "rtl";
                        } else {
                                ShortDescriptionRow.dir = "ltr";
                        }
                        ShortDescriptionRow.id = "text-staff-container-jsut-short-description-paragraph";
                        ShortDescriptionRow.className = "fs-5 my-3 MuhammadHusainAbootalebi-PCBs_Short_Intro_Paragraph";
                        ShortDescriptionRow.textContent = muhammad_husain_abootalebi_projects_books_courses_records[Section][SkillName][index]["description"][Language];
                        ShortDescriptionRow.style.fontFamily = body_Fonts_Translations[Language]["fontFamily"];
                        ShortInformationRow.appendChild(ShortDescriptionRow);

                        // - > - > See More Anchor Link
                        var SeeMoreRow = document.createElement("a");
                        SeeMoreRow.id = "text-staff-container-jsut";
                        SeeMoreRow.href = muhammad_husain_abootalebi_projects_books_courses_records[Section][SkillName][index]["detail_markdown_link"][Language];
                        SeeMoreRow.className = "btn btn-primary btn-lg w-25 my-3 MHA-RECORDS-SEE-MORE-BUTTON";
                        SeeMoreRow.target = "_blank";
                        SeeMoreRow.textContent = heading_Fonts_Translations[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language]["Projects_Courses_Books_Done_Projects_Button"];
                        SeeMoreRow.style.fontFamily = heading_Fonts_Translations[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language]["fontFamily"];
                        ShortInformationRow.appendChild(SeeMoreRow);
                        rowBook.appendChild(ImageColumn);
                        rowBook.appendChild(ShortInformationRow);

                }

        } // End Book Row Creator
}

// Documentation
// This function will handle the Read Book List functionlaity
function ReadBooksListCallFunctionFunctionality(SkillName, Language) {

        // Checking whether there is book in skill book store or not
        if (muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length >= 1) {
                // Next Book Slides Buttons Indicator - Paginations
                if ((SkillName === "") || (SkillName === " ") || (SkillName == null)) {
                        // Leave the page default
                } else {
                        if ((muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length <= 3) && (document.getElementById('pagination-section-to-show-other-books').childNodes.length == 0)) {

                                // Add 1 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var FirstButton = document.createElement('a');
                                FirstButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button";
                                FirstButton.className = "pagination-item active";
                                FirstButton.href = "#";
                                FirstButton.style.fontFamily = "'Lilita One', serif";
                                FirstButton.style.borderColor = "rgba(244, 130, 32, 0)";
                                FirstButton.style.background = "linear-gradient(#fca311, #fca311)";
                                FirstButton.style.color = "rgb(255, 255, 255)";
                                FirstButton.style.borderRadius = "8px";
                                FirstButton.textContent = "1";
                                parent.appendChild(FirstButton);

                        } else if ((muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length <= 6) && (muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length >= 4) && (document.getElementById('pagination-section-to-show-other-books').childNodes.length == 0)) {

                                // Add Previous Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var PreviousButton = document.createElement('a');
                                PreviousButton.className = "pagination-item";
                                PreviousButton.id = "MuhammadHusainAbootalebi-record-pagination-Previous-button";
                                PreviousButton.href = "javascript:pagination_functionality();";
                                PreviousButton.setAttribute("onclick", "pagination_functionality(event)");
                                PreviousButton.style.background = "linear-gradient(#000000, #000000)";
                                var SVGIconPreviousButton = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                                SVGIconPreviousButton.id = "previous-button-book-pagination-icon";
                                SVGIconPreviousButton.className = "bi bi-caret-left-fill";
                                SVGIconPreviousButton.setAttribute("color", "white");
                                SVGIconPreviousButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                SVGIconPreviousButton.setAttribute("width", "1em");
                                SVGIconPreviousButton.setAttribute("height", "1em");
                                SVGIconPreviousButton.setAttribute("fill", "currentColor");
                                SVGIconPreviousButton.setAttribute("viewBox", "0 0 16 16");
                                SVGIconPreviousButton.setAttribute("style", "font-size: 25px");
                                var PathSVGOfPreviousButton = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                                PathSVGOfPreviousButton.setAttribute("d", "m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z");
                                SVGIconPreviousButton.appendChild(PathSVGOfPreviousButton);
                                PreviousButton.appendChild(SVGIconPreviousButton);
                                var SpanPreviousButton = document.createElement('span');
                                SpanPreviousButton.style.fontFamily = "'Lilita One', serif";
                                SpanPreviousButton.textContent = "Previous";
                                SpanPreviousButton.style.color = "white";
                                PreviousButton.appendChild(SpanPreviousButton);
                                parent.appendChild(PreviousButton);

                                // Add 1 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var FirstButton = document.createElement('a');
                                FirstButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button";
                                FirstButton.className = "pagination-item active";
                                FirstButton.href = "javascript:pagination_functionality();";
                                FirstButton.setAttribute("onclick", "pagination_functionality(event)");
                                FirstButton.style.fontFamily = "'Lilita One', serif";
                                FirstButton.style.borderColor = "rgba(244, 130, 32, 0)";
                                FirstButton.style.background = "linear-gradient(#fca311, #fca311)";
                                FirstButton.style.color = "rgb(255, 255, 255)";
                                FirstButton.textContent = "1";
                                parent.appendChild(FirstButton);

                                // Add 2 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var SecondButton = document.createElement('a');
                                SecondButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button";
                                SecondButton.className = "pagination-item";
                                SecondButton.href = "javascript:pagination_functionality();";
                                SecondButton.setAttribute("onclick", "pagination_functionality(event)");
                                SecondButton.style.fontFamily = "'Lilita One', serif";
                                SecondButton.style.borderColor = "rgba(70, 69, 68, 0)";
                                SecondButton.style.background = "linear-gradient(#393939, #393939)";
                                SecondButton.style.color = "rgb(255, 255, 255)";
                                SecondButton.textContent = "2";
                                parent.appendChild(SecondButton);

                                // Next Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var nextAnchorLink = document.createElement('a');
                                nextAnchorLink.id = "MuhammadHusainAbootalebi-record-pagination-Next-button";
                                nextAnchorLink.className = "d-xxl-flex align-items-xxl-center pagination-item";
                                nextAnchorLink.href = "javascript:pagination_functionality();";
                                nextAnchorLink.setAttribute("onclick", "pagination_functionality(event)");
                                nextAnchorLink.style.background = "linear-gradient(#000000, #000000)";
                                var SpanNextText = document.createElement('span');
                                SpanNextText.style.fontFamily = "'Lilita One', serif";
                                SpanNextText.style.color = "white";
                                SpanNextText.textContent = "Next";
                                nextAnchorLink.appendChild(SpanNextText);
                                var svgIconNextButton = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                                svgIconNextButton.className = "bi bi-caret-right-fill";
                                svgIconNextButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                svgIconNextButton.setAttribute("color", "white");
                                svgIconNextButton.setAttribute("width", "1em");
                                svgIconNextButton.setAttribute("height", "1em");
                                svgIconNextButton.setAttribute("fill", "currentColor");
                                svgIconNextButton.setAttribute("viewBox", "0 0 16 16");
                                svgIconNextButton.setAttribute("style", "font-size: 25px;");
                                var pathOfSVGNextButton = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                                pathOfSVGNextButton.setAttribute("d", "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z");
                                // pathOfSVGNextButton.style.d = "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z";
                                svgIconNextButton.appendChild(pathOfSVGNextButton);
                                nextAnchorLink.appendChild(svgIconNextButton);
                                parent.appendChild(nextAnchorLink);

                        } else if ((muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length <= 9) && (muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length >= 7) && (document.getElementById('pagination-section-to-show-other-books').childNodes.length == 0)) {

                                // Add Previous Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var PreviousButton = document.createElement('a');
                                PreviousButton.className = "pagination-item";
                                PreviousButton.id = "MuhammadHusainAbootalebi-record-pagination-Previous-button";
                                // PreviousButton.href = "javascript:pagination_functionality();";
                                PreviousButton.setAttribute("onclick", "pagination_Previous_Button_JUST_1_2_3_BUTTONS()");
                                PreviousButton.style.background = "linear-gradient(#000000, #000000)";
                                var SVGIconPreviousButton = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                                SVGIconPreviousButton.id = "previous-button-book-pagination-icon";
                                SVGIconPreviousButton.className = "bi bi-caret-left-fill";
                                SVGIconPreviousButton.setAttribute("color", "white");
                                SVGIconPreviousButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                SVGIconPreviousButton.setAttribute("width", "1em");
                                SVGIconPreviousButton.setAttribute("height", "1em");
                                SVGIconPreviousButton.setAttribute("fill", "currentColor");
                                SVGIconPreviousButton.setAttribute("viewBox", "0 0 16 16");
                                SVGIconPreviousButton.setAttribute("style", "font-size: 25px");
                                var PathSVGOfPreviousButton = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                                PathSVGOfPreviousButton.setAttribute("d", "m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z");
                                SVGIconPreviousButton.appendChild(PathSVGOfPreviousButton);
                                PreviousButton.appendChild(SVGIconPreviousButton);
                                var SpanPreviousButton = document.createElement('span');
                                SpanPreviousButton.style.fontFamily = "'Lilita One', serif";
                                SpanPreviousButton.textContent = "Previous";
                                SpanPreviousButton.style.color = "white";
                                PreviousButton.appendChild(SpanPreviousButton);
                                parent.appendChild(PreviousButton);

                                // Add 1 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var FirstButton = document.createElement('a');
                                FirstButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button";
                                FirstButton.className = "pagination-item active";
                                FirstButton.href = "javascript:pagination_functionality();";
                                FirstButton.setAttribute("onclick", "pagination_functionality(event)");
                                FirstButton.style.fontFamily = "'Lilita One', serif";
                                FirstButton.style.borderColor = "rgba(244, 130, 32, 0)";
                                FirstButton.style.background = "linear-gradient(#fca311, #fca311)";
                                FirstButton.style.color = "rgb(255, 255, 255)";
                                FirstButton.textContent = "1";
                                parent.appendChild(FirstButton);

                                // Add 2 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var SecondButton = document.createElement('a');
                                SecondButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button";
                                SecondButton.className = "pagination-item";
                                SecondButton.href = "javascript:pagination_functionality();";
                                SecondButton.setAttribute("onclick", "pagination_functionality(event)");
                                SecondButton.style.fontFamily = "'Lilita One', serif";
                                SecondButton.style.borderColor = "rgba(70, 69, 68, 0)";
                                SecondButton.style.background = "linear-gradient(#393939, #393939)";
                                SecondButton.style.color = "rgb(255, 255, 255)";
                                SecondButton.textContent = "2";
                                parent.appendChild(SecondButton);

                                // Add 3 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var ThirdButton = document.createElement("a");
                                ThirdButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button";
                                ThirdButton.className = "pagination-item";
                                ThirdButton.href = "javascript:pagination_functionality();";
                                ThirdButton.setAttribute("onclick", "pagination_functionality(event)");
                                ThirdButton.style.fontFamily = "'Lilita One', serif";
                                ThirdButton.style.borderColor = "rgba(70, 69, 68, 0)";
                                ThirdButton.style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";
                                ThirdButton.style.color = "rgb(255, 255, 255)";
                                ThirdButton.textContent = "3";
                                parent.appendChild(ThirdButton);

                                // Next Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var nextAnchorLink = document.createElement('a');
                                nextAnchorLink.id = "MuhammadHusainAbootalebi-record-pagination-Next-button";
                                nextAnchorLink.className = "d-xxl-flex align-items-xxl-center pagination-item";
                                // nextAnchorLink.href = "javascript:pagination_functionality();";
                                nextAnchorLink.setAttribute("onclick", "pagination_Next_Button_JUST_1_2_3_BUTTONS()");
                                nextAnchorLink.style.background = "linear-gradient(#000000, #000000)";
                                var SpanNextText = document.createElement('span');
                                SpanNextText.style.fontFamily = "'Lilita One', serif";
                                SpanNextText.style.color = "white";
                                SpanNextText.textContent = "Next";
                                nextAnchorLink.appendChild(SpanNextText);
                                var svgIconNextButton = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                                svgIconNextButton.className = "bi bi-caret-right-fill";
                                svgIconNextButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                svgIconNextButton.setAttribute("color", "white");
                                svgIconNextButton.setAttribute("width", "1em");
                                svgIconNextButton.setAttribute("height", "1em");
                                svgIconNextButton.setAttribute("fill", "currentColor");
                                svgIconNextButton.setAttribute("viewBox", "0 0 16 16");
                                svgIconNextButton.setAttribute("style", "font-size: 25px;");
                                var pathOfSVGNextButton = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                                pathOfSVGNextButton.setAttribute("d", "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z");
                                svgIconNextButton.appendChild(pathOfSVGNextButton);
                                nextAnchorLink.appendChild(svgIconNextButton);
                                parent.appendChild(nextAnchorLink);

                        } else if ((muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length >= 10) && (document.getElementById('pagination-section-to-show-other-books').childNodes.length == 0)) {

                                // Add Previous Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var PreviousButton = document.createElement('a');
                                PreviousButton.className = "pagination-item";
                                PreviousButton.id = "MuhammadHusainAbootalebi-record-pagination-Previous-button";
                                // PreviousButton.href = "javascript:FourButton3DotExistedPaginationPreviousButton();";
                                PreviousButton.setAttribute("onclick", "FourButton3DotExistedPaginationPreviousButton()");
                                PreviousButton.style.background = "linear-gradient(#000000, #000000)";
                                var SVGIconPreviousButton = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                                SVGIconPreviousButton.id = "previous-button-book-pagination-icon";
                                SVGIconPreviousButton.className = "bi bi-caret-left-fill";
                                SVGIconPreviousButton.setAttribute("color", "white");
                                SVGIconPreviousButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                SVGIconPreviousButton.setAttribute("width", "1em");
                                SVGIconPreviousButton.setAttribute("height", "1em");
                                SVGIconPreviousButton.setAttribute("fill", "currentColor");
                                SVGIconPreviousButton.setAttribute("viewBox", "0 0 16 16");
                                SVGIconPreviousButton.setAttribute("style", "font-size: 25px");
                                var PathSVGOfPreviousButton = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                                PathSVGOfPreviousButton.setAttribute("d", "m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z");
                                SVGIconPreviousButton.appendChild(PathSVGOfPreviousButton);
                                PreviousButton.appendChild(SVGIconPreviousButton);
                                var SpanPreviousButton = document.createElement('span');
                                SpanPreviousButton.style.fontFamily = "'Lilita One', serif";
                                SpanPreviousButton.textContent = "Previous";
                                SpanPreviousButton.style.color = "white";
                                PreviousButton.appendChild(SpanPreviousButton);
                                parent.appendChild(PreviousButton);

                                // Add 1 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var FirstButton = document.createElement('a');
                                FirstButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button";
                                FirstButton.className = "pagination-item active";
                                FirstButton.href = "javascript:pagination_functionality();";
                                FirstButton.setAttribute("onclick", "pagination_functionality(event)");
                                FirstButton.style.fontFamily = "'Lilita One', serif";
                                FirstButton.style.borderColor = "rgba(244, 130, 32, 0)";
                                FirstButton.style.background = "linear-gradient(#fca311, #fca311)";
                                FirstButton.style.color = "rgb(255, 255, 255)";
                                FirstButton.textContent = "1";
                                parent.appendChild(FirstButton);

                                // Add 2 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var SecondButton = document.createElement('a');
                                SecondButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button";
                                SecondButton.className = "pagination-item";
                                SecondButton.href = "javascript:pagination_functionality();";
                                SecondButton.setAttribute("onclick", "pagination_functionality(event)");
                                SecondButton.style.fontFamily = "'Lilita One', serif";
                                SecondButton.style.borderColor = "rgba(70, 69, 68, 0)";
                                SecondButton.style.background = "linear-gradient(#393939, #393939)";
                                SecondButton.style.color = "rgb(255, 255, 255)";
                                SecondButton.textContent = "2";
                                parent.appendChild(SecondButton);

                                // Add 3 Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var ThirdButton = document.createElement("a");
                                ThirdButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button";
                                ThirdButton.className = "pagination-item";
                                ThirdButton.href = "javascript:pagination_functionality();";
                                ThirdButton.setAttribute("onclick", "pagination_functionality(event)");
                                ThirdButton.style.fontFamily = "'Lilita One', serif";
                                ThirdButton.style.borderColor = "rgba(70, 69, 68, 0)";
                                ThirdButton.style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";
                                ThirdButton.style.color = "rgb(255, 255, 255)";
                                ThirdButton.textContent = "3";
                                parent.appendChild(ThirdButton);

                                // Add ... Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var FourthButton = document.createElement("a");
                                FourthButton.id = "MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update";
                                FourthButton.className = "pagination-item";
                                // FourthButton.href = "javascript:pagination_functionality();";
                                FourthButton.setAttribute("onclick", "pagination_3Dot_button_LoadBooksRows()");
                                FourthButton.style.fontFamily = "'Lilita One', serif";
                                FourthButton.style.borderColor = "rgba(70, 69, 68, 0)";
                                FourthButton.textContent = "...";
                                parent.appendChild(FourthButton);

                                // Next Button
                                var parent = document.getElementById('pagination-section-to-show-other-books');
                                var nextAnchorLink = document.createElement('a');
                                nextAnchorLink.id = "MuhammadHusainAbootalebi-record-pagination-Next-button";
                                nextAnchorLink.className = "d-xxl-flex align-items-xxl-center pagination-item";
                                // nextAnchorLink.href = "javascript:FourButton3DotExistedPagination();";
                                nextAnchorLink.setAttribute("onclick", "FourButton3DotExistedPagination()");
                                nextAnchorLink.style.background = "linear-gradient(#000000, #000000)";
                                var SpanNextText = document.createElement('span');
                                SpanNextText.style.fontFamily = "'Lilita One', serif";
                                SpanNextText.style.color = "white";
                                SpanNextText.textContent = "Next";
                                nextAnchorLink.appendChild(SpanNextText);
                                var svgIconNextButton = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                                svgIconNextButton.className = "bi bi-caret-right-fill";
                                svgIconNextButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                svgIconNextButton.setAttribute("color", "white");
                                svgIconNextButton.setAttribute("width", "1em");
                                svgIconNextButton.setAttribute("height", "1em");
                                svgIconNextButton.setAttribute("fill", "currentColor");
                                svgIconNextButton.setAttribute("viewBox", "0 0 16 16");
                                svgIconNextButton.setAttribute("style", "font-size: 25px;");
                                var pathOfSVGNextButton = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                                pathOfSVGNextButton.setAttribute("d", "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z");
                                svgIconNextButton.appendChild(pathOfSVGNextButton);
                                nextAnchorLink.appendChild(svgIconNextButton);
                                parent.appendChild(nextAnchorLink);
                        }
                }

                // Creating the For loop to create the book page
                let BookExistedRecord = document.getElementById("Book-record-for-styling");

                if (BookExistedRecord == null) {

                        if (muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length < 3) {

                                // Creating the book records which has one or two books
                                Projects_Books_Courses_Record_Creator(SkillName, Language, 0, muhammad_husain_abootalebi_projects_books_courses_records[SkillName].length, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        } else {

                                // Creating the book records which has more than two books
                                Projects_Books_Courses_Record_Creator(SkillName, Language, 0, 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        }

                }
        } else {
                // If there is no book in the skill book store
        }
}

// Documentation
// This function will be Next paginatioin button to go to the next book row
function FourButton3DotExistedPagination() {
        // 4th state
        // Next Button
        if (!nextButtonClicked) {
                var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if (Pagination_3Dot_Button.style.display != "none") {

                        // Getting the number of Books
                        var BookNumbers = muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length;

                        // Calculating the number of Buttons Rows
                        var ButtonsRows = Math.floor(BookNumbers / 3);

                        if (BookNumbers % 3 == 0) {
                                // It is added in floor
                        } else {
                                ButtonsRows = ButtonsRows + 1;
                        }

                        if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {

                                if (!nextButtonClicked) {

                                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 1 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 1 > 0)) {

                                                // Chaningg the colors
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                                                // Removing current book rows
                                                var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                                                while (BookRowSection.firstChild) {
                                                        BookRowSection.removeChild(BookRowSection.lastChild);
                                                }

                                                // Recreating the Book Rows
                                                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                                                // Scroll to the top of the section
                                                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                                        behavior: "smooth",
                                                });

                                        }

                                }

                                nextButtonClicked = true;
                        }

                        if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {

                                if (!nextButtonClicked) {

                                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) != ButtonsRows)) {

                                                // Chaningg the colors
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";

                                                // Removing current book rows
                                                var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                                                while (BookRowSection.firstChild) {
                                                        BookRowSection.removeChild(BookRowSection.lastChild);
                                                }

                                                // Recreating the Book Rows
                                                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                                                // Scroll to the top of the section
                                                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                                        behavior: "smooth",
                                                });

                                        }

                                }

                                nextButtonClicked = true;

                        }

                        if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {

                                if (!nextButtonClicked) {

                                        if (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) {

                                                // Chaningg the colors
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                                                // Checking whether the next buttons possibly could be existed or not
                                                // - > 1 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3).toString();

                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "none";

                                                }
                                                // - > 2 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3).toString();

                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "none";

                                                }
                                                // - > 3 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3).toString();

                                                        // Arranging the order of buttons
                                                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) == ButtonsRows) || (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) == ButtonsRows) || (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) == ButtonsRows)) {

                                                                // Arranging the order of buttons
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                        } else {

                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                        }


                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "none";

                                                        // Arranging the order of buttons
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                }

                                                // Removing current book rows
                                                var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                                                while (BookRowSection.firstChild) {
                                                        BookRowSection.removeChild(BookRowSection.lastChild);
                                                }

                                                // Recreating the Book Rows
                                                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                                                // Scroll to the top of the section
                                                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                                        behavior: "smooth",
                                                });

                                        } else if (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) {

                                                // Chaningg the colors
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                                                // Checking whether the next buttons possibly could be existed or not
                                                // - > 1 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3).toString();

                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "none";

                                                }
                                                // - > 2 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3).toString();

                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "none";

                                                }
                                                // - > 3 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3).toString();

                                                        // Arranging the order of buttons
                                                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) == ButtonsRows) || (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) == ButtonsRows) || (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) == ButtonsRows)) {

                                                                // Arranging the order of buttons
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                        } else {

                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                        }


                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "none";

                                                        // Arranging the order of buttons
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                }

                                                // Removing current book rows
                                                var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                                                while (BookRowSection.firstChild) {
                                                        BookRowSection.removeChild(BookRowSection.lastChild);
                                                }

                                                // Recreating the Book Rows
                                                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                                                // Scroll to the top of the section
                                                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                                        behavior: "smooth",
                                                });

                                        } else if (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) {

                                                // Chaningg the colors
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                                                // Checking whether the next buttons possibly could be existed or not
                                                // - > 1 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3).toString();

                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "none";

                                                }
                                                // - > 2 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3).toString();

                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "none";

                                                }
                                                // - > 3 Button
                                                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 > 0)) {

                                                        // Display the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                                                        // Incrementing the buttons numbers
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3).toString();

                                                        // Arranging the order of buttons
                                                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) == ButtonsRows) || (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) == ButtonsRows) || (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) == ButtonsRows)) {

                                                                // Arranging the order of buttons
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                        } else {

                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                        }


                                                } else {

                                                        // Hide the first active buttton
                                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "none";

                                                        // Arranging the order of buttons
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                }

                                                // Removing current book rows
                                                var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                                                while (BookRowSection.firstChild) {
                                                        BookRowSection.removeChild(BookRowSection.lastChild);
                                                }

                                                // Recreating the Book Rows
                                                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                                                // Scroll to the top of the section
                                                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                                        behavior: "smooth",
                                                });

                                        } else {
                                        }

                                }

                                nextButtonClicked = true;

                        }

                }
        }

        pagination_next_button_pressed_bool_change_to_false();
}

// Documentation
// This function will be Previous paginatioin button to go to the next book row
function FourButton3DotExistedPaginationPreviousButton() {
        // 4th state
        // Previous Button
        if (!previousButtonClicked) {

                var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if (Pagination_3Dot_Button.style.display != "none") {

                        // Getting the number of Books
                        var BookNumbers = muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length;

                        // Calculating the number of Buttons Rows
                        var ButtonsRows = Math.floor(BookNumbers / 3);

                        if (BookNumbers % 3 == 0) {
                                // It is added in floor
                        } else {
                                ButtonsRows = ButtonsRows + 1;
                        }

                        if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {

                                if (!previousButtonClicked) {

                                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) - 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) - 3 > 0)) {

                                                // Chaningg the colors
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";

                                                // Show the buttons
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                                                // Changing the text content values
                                                var container_Number = parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent);
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent = (container_Number - 3).toString();
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent = (container_Number - 2).toString();
                                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent = (container_Number - 1).toString();

                                                // Change the ... button to the end of the w3-row
                                                if (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) == 3) {

                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                } else {

                                                        // Change the ... button to the end of the w3-row
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                                }

                                                // Removing current book rows
                                                var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                                                while (BookRowSection.firstChild) {
                                                        BookRowSection.removeChild(BookRowSection.lastChild);
                                                }

                                                // Recreating the Book Rows
                                                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                                                // Scroll to the top of the section
                                                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                                        behavior: "smooth",
                                                });

                                        } else {

                                                // Change the ... button to the end of the w3-row
                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                                        }

                                }

                                previousButtonClicked = true;

                        }

                        if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {

                                if (!previousButtonClicked) {

                                        // Chaningg the colors
                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                                        // Removing current book rows
                                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                                        while (BookRowSection.firstChild) {
                                                BookRowSection.removeChild(BookRowSection.lastChild);
                                        }

                                        // Recreating the Book Rows
                                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                                        // Scroll to the top of the section
                                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                                behavior: "smooth",
                                        });

                                }

                                previousButtonClicked = true;

                        }

                        if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {

                                if (!previousButtonClicked) {

                                        // Three buttons which are 1, 2, and 3 are existed

                                        // Chaningg the colors
                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                                        // Removing current book rows
                                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                                        while (BookRowSection.firstChild) {
                                                BookRowSection.removeChild(BookRowSection.lastChild);
                                        }

                                        // Recreating the Book Rows
                                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                                        // Scroll to the top of the section
                                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                                behavior: "smooth",
                                        });

                                }

                                previousButtonClicked = true;

                        }

                }

        }

        pagination_next_button_pressed_bool_change_to_false();
}

// Documentation
// Bool from true  to false
function pagination_next_button_pressed_bool_change_to_false() {
        previousButtonClicked = false;
        nextButtonClicked = false;
}

// Documentation
// This is the ... Button to load the more book rows
function pagination_3Dot_button_LoadBooksRows() {
        var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
        if (Pagination_3Dot_Button.style.display != "none") {

                // Getting the number of Books
                var BookNumbers = muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length;

                // Calculating the number of Buttons Rows
                var ButtonsRows = Math.floor(BookNumbers / 3);

                if (BookNumbers % 3 == 0) {
                        // It is added in floor
                } else {
                        ButtonsRows = ButtonsRows + 1;
                }

                // Chaningg the colors
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                // Increment the button numbers
                if (document.getElementById("pagination-section-to-show-other-books").children[4].id == "MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update") {

                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3 > 0)) {

                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 3).toString();

                        } else {

                                // Don't increase the buttons

                                // Change the ... button to the first of the w3-row
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                        }

                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3 > 0)) {

                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 3).toString();

                        } else {

                                // Hide the buttons
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "none";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "none";

                                // Change the ... button to the first of the w3-row
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                        }

                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3 > 0)) {

                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 3).toString();

                        } else {

                                // Hide the buttons
                                // document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                                // document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "none";

                                // Change the ... button to the first of the w3-row
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                        }


                } else if (document.getElementById("pagination-section-to-show-other-books").children[1].id == "MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update") {

                        // Chaning the numbers to correctly decrease
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                        // Show the buttons
                        var High_Number = parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent);
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent = (High_Number).toString();
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent = (High_Number + 1).toString();
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent = (High_Number + 2).toString();

                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) - 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) - 3 > 0)) {

                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) - 3).toString();

                        } else {

                                // Show the buttons
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                                // Change the ... button to the end of the w3-row
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                        }

                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) - 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) - 3 > 0)) {

                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) - 3).toString();

                        } else {

                                // Show the buttons
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                                // Change the ... button to the end of the w3-row
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                        }

                        if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) - 3 <= ButtonsRows) && (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) - 3 > 0)) {

                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent = (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) - 3).toString();

                        } else {

                                // Show the buttons
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.display = "";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.display = "";
                                document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.display = "";

                                // Change the ... button to the end of the w3-row
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                                document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                        }

                }

                // Checking to position the ... button in appropriate position
                if ((parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) + 1 > ButtonsRows) || (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) + 1 > ButtonsRows) || (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) + 1 > ButtonsRows)) {

                        // Change the ... button to the end of the w3-row
                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                } else if (parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) - 1 <= 0) {

                        // Change the ... button to the end of the w3-row
                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[1]);
                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[2]);
                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button"), document.getElementById("pagination-section-to-show-other-books").children[3]);
                        document.getElementById("pagination-section-to-show-other-books").insertBefore(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update"), document.getElementById("pagination-section-to-show-other-books").children[4]);

                }

                // Removing current book rows
                var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                while (BookRowSection.firstChild) {
                        BookRowSection.removeChild(BookRowSection.lastChild);
                }

                // Recreating the Book Rows
                Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                // Scroll to the top of the section
                document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                        behavior: "smooth",
                });

        }
}

// Documentation
// this function will be used for next button pressed
function pagination_Next_Button_JUST_1_2_3_BUTTONS() {
        // - > Next Button
        var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
        if (Pagination_3Dot_Button.style.display == "none") {

                // Checking which one of 1 or two are currently active

                // - > 1 Button is active
                if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {
                        // Changing the backgrounds
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 3, 6, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });
                }
                // - > 2 Button is active
                else if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {
                        // Changing the backgrounds
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 6, muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });
                }
                // - > 3 Button is active
                else if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {
                        // Do nothing because there is no any other next buttons which the next button navigate to
                }

        }

}

// Documentation
// this function will be used for next button pressed
function pagination_Previous_Button_JUST_1_2_3_BUTTONS() {
        // - > Previous Button

        var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
        if (Pagination_3Dot_Button.style.display == "none") {

                // Checking which one of 1 or two are currently active
                // - > 1 Button is active
                if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {
                        // Do nothing because there is no any other previous buttons which the Previous button navigate to
                }
                // - > 2 Button is active
                else if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {
                        // Changing the backgrounds
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 0, 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });
                }
                // - > 3 Button is active
                else if ((document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background == 'linear-gradient(#fca311, #fca311)') || (document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background == 'linear-gradient(rgb(252, 163, 17), rgb(252, 163, 17))')) {
                        // Changing the backgrounds
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 3, 6, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });
                }

        }

}

// Documentation
// This function will handle the pagination functionality
function pagination_functionality(event) {

        // event.preventDefault();

        // 1st State
        // If there are just one set of three book, There is no need for any functionality

        // 2nd State
        // There are two set of three rows of Book
        // - > Next Button
        document.getElementById("MuhammadHusainAbootalebi-record-pagination-Next-button").addEventListener("click", function () {
                var Pagination_3_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button");
                var Pagination_3D_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if ((Pagination_3_Button.style.display == "none") && (Pagination_3D_Button.style.display == "none")) {

                        // There are two set of three rows of Book
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }
                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 3, muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected][neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill].length, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });

                }
        });
        // 2 Button Pressed
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").addEventListener("click", function () {
                var Pagination_3_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button");
                var Pagination_3D_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if ((Pagination_3_Button == null) && (Pagination_3D_Button == null)) {

                        // There are two set of three rows of Book
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }
                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 3, muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.Currrent_Skill_Selected].length, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });
                        console.log("Next Clicked");

                }
        });
        // - > Previous Button
        document.getElementById("MuhammadHusainAbootalebi-record-pagination-Previous-button").addEventListener("click", function () {
                var Pagination_3_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button");
                var Pagination_3D_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if ((Pagination_3_Button.style.display == "none") && (Pagination_3D_Button.style.display == "none")) {

                        // There are two set of three rows of Book
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }
                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 0, 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });

                }
        });
        // 1 Button Pressed
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").addEventListener("click", function (event) {

                var Pagination_3_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button");
                var Pagination_3D_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if ((Pagination_3_Button.style.display == "none") && (Pagination_3D_Button.style.display == "none")) {

                        // There are two set of three rows of Book
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }
                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 0, 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });

                }
        });

        // 3rd State
        // When there are three set of Three records Rows, 1,2 and 3 button is exsited and ... button is not existed
        // 1 Button Pressed
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").addEventListener("click", function () {
                var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if (Pagination_3Dot_Button == null) {

                        // Checking which one of 1 or two are currently active
                        // - > 1 Button is active
                        // Changing the backgrounds
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 0, 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });
                }
        });
        // 2 Button Pressed
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").addEventListener("click", function () {
                var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if (Pagination_3Dot_Button == null) {

                        // Checking which one of 1 or two are currently active
                        // - > 2 Button is active
                        // Changing the backgrounds
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 3, 6, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });
                }
        });
        // 3 Button Pressed
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").addEventListener("click", function () {
                var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if (Pagination_3Dot_Button == null) {

                        // Checking which one of 1 or two are currently active
                        // - > 2 Button is active
                        // Changing the backgrounds
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, 6, muhammad_husain_abootalebi_projects_books_courses_records[neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page.Currrent_Skill_Selected].length, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });
                }
        });

        // 4th state
        // There is the ... Button which the books are more than 9 books
        // 1 Button
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").addEventListener("click", function () {

                var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if (Pagination_3Dot_Button != null) {

                        // Chaningg the colors
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });

                }

        });
        // 2 Button
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").addEventListener("click", function () {

                var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if (Pagination_3Dot_Button != null) {

                        // Chaningg the colors
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });

                }

        });
        // 3 Button
        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").addEventListener("click", function () {

                var Pagination_3Dot_Button = document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update");
                if (Pagination_3Dot_Button != null) {

                        // Chaningg the colors
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").style.background = "linear-gradient(#393939, #393939)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").style.background = "linear-gradient(#5e5e5e, #5e5e5e 100%)";
                        document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").style.background = "linear-gradient(#fca311, #fca311)";

                        // Removing current book rows
                        var BookRowSection = document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section");
                        while (BookRowSection.firstChild) {
                                BookRowSection.removeChild(BookRowSection.lastChild);
                        }

                        // Recreating the Book Rows
                        Projects_Books_Courses_Record_Creator(neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_skill, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_selected_language, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) * 3 - 3, parseInt(document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").textContent) * 3, neededPropertiesNavbarTranslation_Projects_or_Courses_or_Books_Page._current_projectorbooksorcourses_section_selected);

                        // Scroll to the top of the section
                        document.getElementById("MuhammadHusainAbootalebi-Projects-Books-Courses-Records-List-Section").scrollIntoView({
                                behavior: "smooth",
                        });

                }

        });

}

// -- >> Call Pagination Entry Point After Clicking on the Pagination Buttons
document.getElementById("MuhammadHusainAbootalebi-record-pagination-Previous-button").addEventListener("click", function (event) {
        pagination_functionality(event);
});
document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-active-current-paginateion-first-button").addEventListener("click", function (event) {
        pagination_functionality(event);
});
document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-second-page-current-paginateion-first-button").addEventListener("click", function (event) {
        pagination_functionality(event);
});
document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-third-page-current-paginateion-first-button").addEventListener("click", function (event) {
        pagination_functionality(event);
});
document.getElementById("MuhammadHusainAbootalebi-PBCs-Pagination-more-page-current-paginateion-first-button-to-update").addEventListener("click", function (event) {
        pagination_functionality(event);
});
document.getElementById("MuhammadHusainAbootalebi-record-pagination-Next-button").addEventListener("click", function (event) {
        pagination_functionality(event);
});

// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //
// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //
// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ ↑ Pagination ↑ ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //
// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //
// ◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉ //

// ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●● //

// -------------------------------- ↑ Functions ↑ -------------------------------- //

// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©© All Rights are Reserved by Muhammad Husain Abootalebi ©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //