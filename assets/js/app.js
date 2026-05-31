/* -------------------------------------------- */
/* Begining DEFAULT THEME AND LANGUAGE ON LOAD  */
/* -------------------------------------------- */
let currentLanguage = "";
document.addEventListener("DOMContentLoaded", () => {
    // 1. Detect System Theme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';

    // Set the theme attributes on the <html> tag (matches your current setup)
    document.documentElement.setAttribute('data-theme', defaultTheme);
    document.documentElement.setAttribute('data-bs-theme', defaultTheme);

    // 2. Detect System Language
    const systemLangFull = navigator.language || navigator.userLanguage;
    const systemLang = systemLangFull.toLowerCase().substring(0, 2); // Gets 'en', 'fa', 'de', etc.

    let targetLang = 'en'; // Default for the rest of the world

    if (systemLang === 'fa') {
        targetLang = 'fa'; // Persian
    } else if (systemLang === 'de') {
        targetLang = 'de'; // German
    }

    // Programmatically click the hidden language button to reuse your existing translation/font logic
    const langButton = document.querySelector(`.lang-btn[data-lang="${targetLang}"]`);
    if (langButton) {
        langButton.click();
    }

    currentLanguage = targetLang;
});

/* -------------------------------------------- */
/* Ending DEFAULT THEME AND LANGUAGE ON LOAD    */
/* -------------------------------------------- */

/* ============================================ */

/* -------------------------------------------- */
/* Begining PAGE LOADER                         */
/* -------------------------------------------- */

const languageConfig = {
    en: {
        dir: 'ltr',
        primary: '"Dodger", sans-serif',      // English Headings
        secondary: '"Roboto", sans-serif'      // English Text
    },
    fa: {
        dir: 'rtl',
        primary: '"Lalezar", cursive',         // Persian Headings
        secondary: '"Vazirmatn", sans-serif'   // Persian Text
    },
    de: {
        dir: 'ltr',
        primary: '"Dodger", sans-serif',      // English Headings
        secondary: '"Roboto", sans-serif'      // English Text
    }
};

/* Set default fonts on page load */
document.documentElement.style.setProperty('--font-primary', languageConfig['en'].primary);
document.documentElement.style.setProperty('--font-secondary', languageConfig['en'].secondary);

/* -------------------------------------------- */
/* Ending PAGE LOADER                           */
/* -------------------------------------------- */

/* -------------------------------------------- */
/* PAGE LOADER                                  */
/* -------------------------------------------- */
document.querySelector('.loader-wrapper').classList.add("show");
window.addEventListener('load', () => {

    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hidden');
    loader.classList.remove('show');

});

/* -------------------------------------------- */
/* Overlay CSS configurations                   */
/* -------------------------------------------- */
document.getElementById("overlay").style.inset = 0;
document.getElementById("overlay").style.zIndex = 0;

/* -------------------------------------------- */
/* MOBILE SIDEBAR                               */
/* -------------------------------------------- */
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.onclick = () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
};

const closeMenu = () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
};

closeSidebar.onclick = closeMenu;
overlay.onclick = closeMenu;

/* -------------------------------------------- */
/* THEME TOGGLING — NEW VIEW TRANSITION API     */
/* -------------------------------------------- */
const docElement = document.documentElement;

// This single function handles the theme toggle logic
const handleThemeToggle = (e) => {
    const isDark = docElement.dataset.theme === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    // 1. Check for View Transitions browser support
    if (!document.startViewTransition) {
        // Fallback for unsupported browsers
        docElement.dataset.theme = newTheme;
        return;
    }

    // 2. Get the click coordinates
    const x = e.clientX;
    const y = e.clientY;

    // 3. Start a View Transition
    const transition = document.startViewTransition(() => {
        docElement.dataset.theme = newTheme;
    });

    // 4. Pass the click coordinates to CSS
    transition.ready.then(() => {
        docElement.style.setProperty('--x', x + 'px');
        docElement.style.setProperty('--y', y + 'px');
    });
};

// Attach the event listener to BOTH buttons
document.getElementById("theme-toggle").addEventListener("click", handleThemeToggle);
document.getElementById("theme-toggle-mobile").addEventListener("click", handleThemeToggle);


/* -------------------------------------------- */
/* TYPING EFFECT                                */
/* -------------------------------------------- */

/*
Full-Stack Software Engineer (Covers Python, Django, C#, .NET, Next.js, HTML/CSS/JS, C++, Java)
Mobile App Developer (Covers Flutter, Kotlin, React Native, Android Studio)
AI & Machine Learning Engineer (Covers Deep Learning, Computer Vision, Transformers, CNNs, Prompt Engineering)
UI/UX & Visual Designer (Covers Figma, Adobe XD, Illustrator, Photoshop, Wireframing, User Research)
Mechanical & Control Engineer (Covers Solidworks, Catia, Abaqus, Ansys, MATLAB, Control Engineering)
DevOps & Cloud Architect (Covers Docker, Kubernetes, Azure, Git)
3D & Motion Designer (Covers Blender, Cinema4D, Unreal Engine, After Effects)
R&D Specialist (Covers Research and Development, Problem Solving, Creative Thinking)
*/

const professions = [
    "Full-Stack Software Engineer",
    "Mobile App Developer",
    "AI & Machine Learning Engineer",
    "UI/UX & Visual Designer",
    "Mechanical & Control Engineer",
    "DevOps & Cloud Architect",
    "3D & Motion Designer",
    "R&D Specialist",
];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingField = document.getElementById("typing");

function typeEffect() {
    const current = professions[typingIndex];
    const typeSpeed = isDeleting ? 60 : 110;

    if (!isDeleting) {
        typingField.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            setTimeout(() => isDeleting = true, 1000);
        }
    } else {
        typingField.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % professions.length;
        }
    }
    setTimeout(typeEffect, typeSpeed);
}
typeEffect();

/* -------------------------------------------- */
/* SMOOTH SCROLL                                */
/* -------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.onclick = function (e) {
        const targetId = this.getAttribute("href");
        // Skip non-anchor links and close sidebar if it's open
        if (targetId === '#' || !targetId.startsWith('#')) return;

        closeMenu(); // Close sidebar on navigation

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            // 60px offset for the fixed navbar
            const top = target.getBoundingClientRect().top + window.scrollY - 60;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };
});

/* -------------------------------------------- */
/* MULTI-LANGUAGE TRANSLATION                   */
/* -------------------------------------------- */

const translations = {
    en: {
        nav_projects: "Projects",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        nav_resume: "Resume",
        first_view_muhammad_title: "Muhammad",
        first_view_husain_title: "Husain",
        first_view_aboutalebi_title: "Aboutalebi",
        hero_desc: "I create thoughtful, high-quality solutions by combining creativity, technical skill, and a deep understanding of problem-solving. My work focuses on turning ideas into polished, effective results—whether through design, development, or engineering.",
        btn_projects: "My Projects",
        btn_contact: "Contact Me",
        loading_text: "Just a moment ",

        // Testimonial Section
        testimonial_trust_left_trust_and_skillset_title: "Trust & soft Skills",
        testimonial_trust_left_sub_title: "Based on true client reviews",
        testimonial_trust_left_clear_communication: "Clear Communication",
        testimonial_trust_left_problem_solving: "Problem Solving & Critical Thinking",
        testimonial_trust_left_reliability: "Reliability & Ownership",
        testimonial_trust_left_adaptability: "Adaptability",
        testimonial_trust_left_collaboration: "Collaboration",

        //     - Reviews
        review_1_text: "Mr. Abutalebi is an intelligent, hardworking, and honest individual in the workplace. With an educational background in Mechanical Engineering, combined with great talent and a keen interest in programming, he holds the potential to bring significant value to any software or knowledge-based organization. He is proficient in development across multiple software frameworks.",
        review_1_author: "Masoud Batini",
        review_1_role: "MaxC CEO",
        review_1_avatar: "MB",

        review_2_text: "He was very committed and punctual, and also professional in his work; I was completely satisfied.",
        review_2_author: "Sanaz.M",
        review_2_role: "Freelance Client",
        review_2_avatar: "SM",

        review_3_text: "He is very intelligent, creative, organized, responsible, patient, and precise. It was a very pleasant experience; he completed the order (design of two product labels) in the best and most complete way. I hope to have the opportunity to work with him again on future projects.",
        review_3_author: "Zahra.D",
        review_3_role: "Datis Noavaran Sabz Toos Co.",
        review_3_avatar: "ZD",

        review_4_text: "In our second collaboration with him, we received excellent and satisfactory results; he is very patient and precise.",
        review_4_author: "Zahra.D",
        review_4_role: "Datis Noavaran Sabz Toos Co.",
        review_4_avatar: "ZD",

        // Work Samples Section
        work_samples_title_work: "WORK",
        work_samples_title_samples: "SAMPLES",
        work_samples_sub_title: "Explore How I Bring Concepts To Life.",
        work_samples_search_input_placeholder: "Search in my projects…",
        work_samples_skillset_filter_not_selected: "Not Selected",

        //       - Skillset Filter Drop Down
        work_samples_skillset_filter_dropdown_full_stack_software_engineer: "Full-Stack Software Engineer",
        work_samples_skillset_filter_dropdown_mobile_app_developer: "Mobile App Developer",
        work_samples_skillset_filter_dropdown_ai_engineer: "AI & Machine Learning Engineer",
        work_samples_skillset_filter_dropdown_ui_ux_designer: "UI/UX & Visual Designer",
        work_samples_skillset_filter_dropdown_mechanical_engineer: "Mechanical & Control Engineer",
        work_samples_skillset_filter_dropdown_devops_engineer: "DevOps & Cloud Architect",
        work_samples_skillset_filter_dropdown_motion_designer: "3D & Motion Designer",
        work_samples_skillset_filter_dropdown_r_and_d_specialist: "R&D Specialist",
    },
    fa: {
        nav_projects: "پروژه‌ها",
        nav_reviews: "نظرات",
        nav_contact: "تماس",
        nav_resume: "رزومه",
        first_view_muhammad_title: "محمد",
        first_view_husain_title: "حسین",
        first_view_aboutalebi_title: "ابوطالبی",
        hero_desc: "من با ترکیب خلاقیت، مهارت فنی و درک عمیق از حل مسئله، راه‌حل‌های متفکرانه و با کیفیت بالا ایجاد می‌کنم. تمرکز کار من بر تبدیل ایده‌ها به نتایج صیقل‌خورده و مؤثر است.",
        btn_projects: "پروژه‌های من",
        btn_contact: "تماس با من",
        loading_text: "لطفاً چند لحظه صبر کنید ",

        // Testimonial Section
        testimonial_trust_left_trust_and_skillset_title: "اعتماد و مهارت‌های نرم",
        testimonial_trust_left_sub_title: "بر اساس نظرات واقعی مشتریان",
        testimonial_trust_left_clear_communication: "ارتباط شفاف",
        testimonial_trust_left_problem_solving: "حل مسئله و تفکر انتقادی",
        testimonial_trust_left_reliability: "قابلیت اطمینان و مسئولیت‌پذیری",
        testimonial_trust_left_adaptability: "انعطاف‌پذیری",
        testimonial_trust_left_collaboration: "همکاری",

        //     - Reviews
        review_1_text: "جناب آقای ابوطالبی، فردی باهوش، پرتلاش و صادق در محیط کار هستند. ایشان با داشتن زمینه تحصیلی در مهندسی مکانیک، به همراه استعداد و علاقه فراوان به مباحث برنامه‌نویسی، ظرفیت بسیار بالایی برای هر مجموعه نرم‌افزاری و دانش‌بنیان ایجاد می‌کنند. ایشان توانایی توسعه‌گری در چندین چارچوب نرم‌افزاری را دارا می‌باشند.",
        review_1_author: "مسعود باطنی",
        review_1_role: "مدیر اجرایی مکسی",
        review_1_avatar: "MB",

        review_2_text: "بسیار متعهد و وقت شناس بودند، در کارشون هم حرفه ای بودند رضایت کامل داشتم",
        review_2_author: "Sanaz.M",
        review_2_role: "کارفرمای آزاد",
        review_2_avatar: "SM",

        review_3_text: "بسیار باهوش، خلاق، منظم، مسیولیت پذیر، با حوصله و دقیق هستند تجربه خیلی خوشایندی بود، به بهترین و کاملترین شکل سفارش (طراحی دو عدد لیبل محصولات) رو انجام دادن، امیدوارم در پروژه های آینده فرصت مجدد همکاری با ایشون رو داشته باشیم.",
        review_3_author: "Zahra.D",
        review_3_role: "شرکت داتیس نوآوران سبز توس",
        review_3_avatar: "ZD",

        review_4_text: "در دومین همکاری با ایشون نتایج عالی و رضایت بخش دریافت کردیم، بسیار با حوصله و دقیق هستند.",
        review_4_author: "Zahra.D",
        review_4_role: "شرکت داتیس نوآوران سبز توس",
        review_4_avatar: "ZD",

        // Work Samples Section
        work_samples_title_work: "نمونه",
        work_samples_title_samples: "کارها",
        work_samples_sub_title: "کشف کنید که چگونه ایده‌ها را به واقعیت تبدیل می‌کنم.",
        work_samples_search_input_placeholder: "در پروژه‌های من جستجو کنید…",
        work_samples_skillset_filter_not_selected: "انتخاب نشده",

        //       - Skillset Filter Drop Down
        work_samples_skillset_filter_dropdown_full_stack_software_engineer: "مهندس نرم‌افزار فول‌استک",
        work_samples_skillset_filter_dropdown_mobile_app_developer: "توسعه‌دهنده اپلیکیشن موبایل",
        work_samples_skillset_filter_dropdown_ai_engineer: "مهندس هوش مصنوعی و یادگیری ماشین",
        work_samples_skillset_filter_dropdown_ui_ux_designer: "طراح رابط و تجربه کاربری",
        work_samples_skillset_filter_dropdown_mechanical_engineer: "مهندس مکانیک و کنترل",
        work_samples_skillset_filter_dropdown_devops_engineer: "معمار ابری و دواپس",
        work_samples_skillset_filter_dropdown_motion_designer: "طراح سه‌بعدی و موشن",
        work_samples_skillset_filter_dropdown_r_and_d_specialist: "متخصص تحقیق و توسعه",
    },
    de: {
        nav_projects: "Projekte",
        nav_reviews: "Bewertungen",
        nav_contact: "Kontakt",
        nav_resume: "Lebenslauf",
        first_view_muhammad_title: "Muhammad",
        first_view_husain_title: "Husain",
        first_view_aboutalebi_title: "Aboutalebi",
        hero_desc: "Ich erstelle durchdachte, hochwertige Lösungen durch die Kombination von Kreativität, technischem Geschick und einem tiefen Verständnis für Problemlösungen.",
        btn_projects: "Meine Projekte",
        btn_contact: "Kontaktieren Sie mich",
        loading_text: "Einen Moment bitte ",

        // Testimonial Section
        testimonial_trust_left_trust_and_skillset_title: "Vertrauen & Soft Skills",
        testimonial_trust_left_sub_title: "Basierend auf echten Kundenbewertungen",
        testimonial_trust_left_clear_communication: "Klare Kommunikation",
        testimonial_trust_left_problem_solving: "Problemlösung & Kritisches Denken",
        testimonial_trust_left_reliability: "Zuverlässigkeit & Eigenverantwortung",
        testimonial_trust_left_adaptability: "Anpassungsfähigkeit",
        testimonial_trust_left_collaboration: "Zusammenarbeit",

        //     - Reviews
        review_1_text: "Herr Abutalebi ist ein intelligenter, fleißiger und ehrlicher Mitarbeiter. Mit seinem akademischen Hintergrund im Maschinenbau sowie seinem ausgeprägten Talent und Interesse an der Programmierung bietet er ein enormes Potenzial für jedes Software- oder wissensbasierte Unternehmen. Er verfügt über die Fähigkeiten zur Entwicklung in mehreren Software-Frameworks.",
        review_1_author: "Masoud Batini",
        review_1_role: "CEO, MaxC",
        review_1_avatar: "MB",

        review_2_text: "Er war sehr engagiert und pünktlich und arbeitete zudem professionell; ich war rundum zufrieden.",
        review_2_author: "Sanaz.M",
        review_2_role: "Freelance-Kunde",
        review_2_avatar: "SM",

        review_3_text: "Er ist sehr intelligent, kreativ, organisiert, verantwortungsbewusst, geduldig und präzise. Es war eine sehr angenehme Erfahrung; er hat den Auftrag (Design von zwei Produktetiketten) auf die beste und vollständigste Weise ausgeführt. Ich hoffe, bei zukünftigen Projekten erneut die Gelegenheit zu haben, mit ihm zusammenzuarbeiten.",
        review_3_author: "Zahra.D",
        review_3_role: "Datis Noavaran Sabz Toos Co.",
        review_3_avatar: "ZD",

        review_4_text: "In unserer zweiten Zusammenarbeit mit ihm haben wir exzellente und zufriedenstellende Ergebnisse erhalten; er ist sehr geduldig und präzise.",
        review_4_author: "Zahra.D",
        review_4_role: "Datis Noavaran Sabz Toos Co.",
        review_4_avatar: "ZD",

        // Work Samples Section
        work_samples_title_work: "Arbeit",
        work_samples_title_samples: "sproben",
        work_samples_sub_title: "Entdecken Sie, wie ich Konzepte zum Leben erwecke.",
        work_samples_search_input_placeholder: "In meinen Projekten suchen…",
        work_samples_skillset_filter_not_selected: "Nicht ausgewählt",

        //       - Skillset Filter Drop Down
        work_samples_skillset_filter_dropdown_full_stack_software_engineer: "Full-Stack-Softwareentwickler",
        work_samples_skillset_filter_dropdown_mobile_app_developer: "Mobile-App-Entwickler",
        work_samples_skillset_filter_dropdown_ai_engineer: "KI- und Machine-Learning-Ingenieur",
        work_samples_skillset_filter_dropdown_ui_ux_designer: "UI/UX- und Visual-Designer",
        work_samples_skillset_filter_dropdown_mechanical_engineer: "Maschinenbau- und Regelungstechnikingenieur",
        work_samples_skillset_filter_dropdown_devops_engineer: "DevOps- und Cloud-Architekt",
        work_samples_skillset_filter_dropdown_motion_designer: "3D- und Motion-Designer",
        work_samples_skillset_filter_dropdown_r_and_d_specialist: "R&D Spezialist",
    }
};

// Toggle dropdowns
document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = e.currentTarget.nextElementSibling;
        document.querySelectorAll('.glass-dropdown').forEach(dd => {
            if (dd !== dropdown) dd.classList.remove('show');
        });
        dropdown.classList.toggle('show');
    });
});

// Close dropdown on outside click
document.addEventListener('click', () => {
    document.querySelectorAll('.glass-dropdown').forEach(dd => dd.classList.remove('show'));
});

// Handle translation selection
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');

        // Update active class
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add('active'));

        // Update Toggle Text (EN, FA, DE)
        document.querySelectorAll('.current-lang-text').forEach(el => {
            el.textContent = lang.toUpperCase();
        });


        // ============================================================ //
        // ============================================================ //
        //             Language and View Size Based Changes             //
        // ============================================================ //
        // ============================================================ //

        // Update sepecific elements based on the viewport
        if (window.innerWidth > 768 && (lang === 'fa' || lang === 'persian')) {
            // Check if the paragraph exists to avoid errors
            if (document.getElementById('muhammad-husain-aboutalebi-first-view-description-paragraph')) {
                // Set text-align to right with !important priority
                document.getElementById('muhammad-husain-aboutalebi-first-view-description-paragraph').style.setProperty('text-align', 'right', 'important');
            }

        } else if (window.innerWidth > 768 && (lang === 'de' || lang === 'deutch')) {
            // Check if the paragraph exists to avoid errors
            if (document.getElementById('muhammad-husain-aboutalebi-first-view-description-paragraph')) {
                // Set text-align to right with !important priority
                document.getElementById('muhammad-husain-aboutalebi-first-view-description-paragraph').style.setProperty('text-align', 'left', 'important');
            }

        }

        // ============================================================ //
        // ============================================================ //
        //                         Language                             //
        // ============================================================ //
        // ============================================================ //

        if ((lang === 'fa' || lang === 'persian')) {

            //Testimonial Section

            // Change the testimonial title and sub title divider
            if (document.getElementsByClassName("ts-divider-line")[0]) {
                document.getElementsByClassName("ts-divider-line")[0].style.setProperty('width', '222px', 'important');
            }

            // Time line location
            if (document.getElementsByClassName("timeline-line")[0]) {
                document.getElementsByClassName("timeline-line")[0].style.removeProperty('left');
                document.getElementsByClassName("timeline-line")[0].style.setProperty('right', '50px', 'important');

                document.querySelectorAll(".timeline-item").forEach(
                    (el, index) => {
                        el.style.setProperty('margin-right', '30px', 'important');
                    }
                );

                document.querySelectorAll(".ts-header").forEach(
                    (el, index) => {
                        el.style.setProperty('margin-right', '20px', 'important');
                    }
                );
            }

            // Swap the place of the left and right buttons for the review change buttons
            // Select the container and the buttons
            const controlsContainer = document.querySelector('.carousel-controls');
            const prevBtn = document.getElementById('btn-prev');
            const nextBtn = document.getElementById('btn-next');

            // Move the 'next' button to the very beginning
            controlsContainer.prepend(nextBtn);

            // Move the 'prev' button to the very end
            controlsContainer.append(prevBtn);

        } else if ((lang === 'de' || lang === 'deutch')) {

            //Testimonial Section

            // Change the testimonial title and sub title divider
            if (document.getElementsByClassName("ts-divider-line")[0]) {
                document.getElementsByClassName("ts-divider-line")[0].style.setProperty('width', '250px', 'important');
            }

            // Time line location
            if (document.getElementsByClassName("timeline-line")[0]) {
                document.getElementsByClassName("timeline-line")[0].style.removeProperty('right');
                document.getElementsByClassName("timeline-line")[0].style.setProperty('left', '50px', 'important');

                document.querySelectorAll(".timeline-item").forEach(
                    (el, index) => {
                        el.style.removeProperty('margin-right');
                    }
                );

                document.querySelectorAll(".ts-header").forEach(
                    (el, index) => {
                        el.style.setProperty('margin-left', '5px', 'important');
                    }
                );
            }

            // Swap the place of the left and right buttons for the review change buttons
            // Select the container and the buttons
            const controlsContainer = document.querySelector('.carousel-controls');
            const prevBtn = document.getElementById('btn-prev');
            const nextBtn = document.getElementById('btn-next');

            // Move the 'next' button to the very beginning
            controlsContainer.prepend(prevBtn);

            // Move the 'prev' button to the very end
            controlsContainer.append(nextBtn);

            // Work Samples Section

        } else if ((lang === 'en' || lang === 'english')) {

            //Testimonial Section

            // Change the testimonial title and sub title divider
            if (document.getElementsByClassName("ts-divider-line")[0]) {
                document.getElementsByClassName("ts-divider-line")[0].style.setProperty('width', '190px', 'important');
            }

            // Time line location
            if (document.getElementsByClassName("timeline-line")[0]) {
                document.getElementsByClassName("timeline-line")[0].style.removeProperty('right');
                document.getElementsByClassName("timeline-line")[0].style.setProperty('left', '50px', 'important');

                document.querySelectorAll(".timeline-item").forEach(
                    (el, index) => {
                        el.style.removeProperty('margin-right');
                    }
                );

                document.querySelectorAll(".ts-header").forEach(
                    (el, index) => {
                        el.style.setProperty('margin-left', '5px', 'important');
                    }
                );
            }

            // Swap the place of the left and right buttons for the review change buttons
            // Select the container and the buttons
            const controlsContainer = document.querySelector('.carousel-controls');
            const prevBtn = document.getElementById('btn-prev');
            const nextBtn = document.getElementById('btn-next');

            // Move the 'next' button to the very beginning
            controlsContainer.prepend(prevBtn);

            // Move the 'prev' button to the very end
            controlsContainer.append(nextBtn);

            // Work Samples Section
        }

        if (document.getElementById("ws-search-input")) {
            document.getElementById("ws-search-input").placeholder = translations[lang]["work_samples_search_input_placeholder"];
        }

        // ############################################################### //
        // ############################################################### //
        // ############################################################### //
        // ############################################################### //
        // ############################################################### //
        // ############################################################### //
        // ############################################################### //

        // Translate elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // To keep inner icons intact, only replace text nodes if needed, or wrap text in a span.
                // Assuming text is wrapped or safe to replace:
                if (el.childNodes.length > 1) {
                    // Update the last child node which usually contains the text next to SVG
                    el.lastChild.nodeValue = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Handle Right-to-Left for Persian
        // --- NEW FONT AND DIRECTION LOGIC ---
        // Get the config for the selected language, fallback to 'en' if not found
        const config = languageConfig[lang] || languageConfig['en'];

        document.documentElement.setAttribute('dir', config.dir);
        document.documentElement.setAttribute('lang', lang);

        // Update the CSS variables globally
        document.documentElement.style.setProperty('--font-primary', config.primary);
        document.documentElement.style.setProperty('--font-secondary', config.secondary);
        // ------------------------------------

        // Update the carousel
        setTimeout(() => {
            if (typeof window.updateCarousel === 'function') {
                window.updateCarousel();
            }
        }, 200);
    });
});

/* -------------------------------------------- */
/* Begining BACKGROUND PARTICKE MOVEMENT        */
/* -------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hero-plexus-wrapper-id").style.display = "block";
    const canvas = document.getElementById("plexus-canvas");
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];

    // Configuration
    const particleCount = 80; // Adjust for performance
    const connectionDistance = 150;
    const mouseInfluenceRadius = 200;
    const mouseForce = 0.05;

    let mouse = { x: null, y: null };

    // Track mouse over the wrapper
    const wrapper = document.querySelector('.hero-plexus-wrapper');
    wrapper.addEventListener("mousemove", (e) => {
        const rect = wrapper.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    wrapper.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    function resizeCanvas() {
        width = canvas.width = wrapper.offsetWidth;
        height = canvas.height = wrapper.offsetHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Helper to get RGB from CSS variables (e.g., --color-text) to handle theme switching
    function getThemeColor() {
        const root = document.documentElement;
        const colorText = getComputedStyle(root).getPropertyValue('--color-text').trim() || '#0F1523';
        // Convert hex to rgb for opacity manipulation
        let hex = colorText.replace('#', '');
        if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
        const r = parseInt(hex.substring(0, 2), 16) || 15;
        const g = parseInt(hex.substring(2, 4), 16) || 21;
        const b = parseInt(hex.substring(4, 6), 16) || 35;
        return `${r}, ${g}, ${b}`;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.baseRadius = Math.random() * 1.5 + 1; // 1px to 2.5px
        }

        update() {
            // Apply Mouse Magnetism
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseInfluenceRadius) {
                    const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
                    this.vx += dx * force * mouseForce * 0.01;
                    this.vy += dy * force * mouseForce * 0.01;
                }
            }

            // Move
            this.x += this.vx;
            this.y += this.vy;

            // Friction to stop infinite acceleration from mouse
            this.vx *= 0.99;
            this.vy *= 0.99;

            // Maintain base speed if too slow
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed < 0.5) {
                this.vx *= 1.05;
                this.vy *= 1.05;
            }

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw(colorRgb) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.baseRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${colorRgb}, 0.5)`;
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const colorRgb = getThemeColor();

        // Update and draw particles
        particles.forEach(p => {
            p.update();
            p.draw(colorRgb);
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    // Opacity inverse to distance
                    const opacity = 1 - (distance / connectionDistance);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${colorRgb}, ${opacity * 0.4})`; // Max line opacity 0.4
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    init();
    animate();
});

/* -------------------------------------------- */
/* Ending BACKGROUND PARTICKE MOVEMENT        */
/* -------------------------------------------- */

// =============================================- //
// =============================================- //
// =============================================- //
// =============================================- //
// =============================================- //
// =============================================- //

/* ==========================================
     START: Trust & Soft Skills Section JS 
=========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Dictionary/Array of client reviews
    const testimonialData = [
        {
            textKey: "review_4_text",
            authorKey: "review_4_author",
            roleKey: "review_4_role",
            avatar: "review_4_avatar" // You can keep non-translated data as is
        },
        {
            textKey: "review_3_text",
            authorKey: "review_3_author",
            roleKey: "review_3_role",
            avatar: "review_3_avatar" // You can keep non-translated data as is
        },
        {
            textKey: "review_2_text",
            authorKey: "review_2_author",
            roleKey: "review_2_role",
            avatar: "review_2_avatar" // You can keep non-translated data as is
        },
        {
            textKey: "review_1_text",
            authorKey: "review_1_author",
            roleKey: "review_1_role",
            avatar: "review_1_avatar" // You can keep non-translated data as is
        },
    ];

    const track = document.getElementById('testimonial-track');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    let currentIndex = 0;

    // 1. Generate Carousel HTML
    function initCarousel() {
        testimonialData.forEach((review, index) => {
            const wrapper = document.createElement('div');
            // Replaced inline styles with a class we will style in CSS
            wrapper.className = 'testimonial-wrapper';

            wrapper.innerHTML = `
                <!-- Background Icon (Behind the glass) -->
                <div class="card-quote-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="b" data-name="Layer 2" viewBox="0 0 502 349.6">
                      <defs><clipPath id="e"><rect width="502" height="349.6" fill="none"/></clipPath></defs>
                      <g id="c" data-name="Layer 1"><g id="d" data-name="Group 64"><g clip-path="url(#e)"><g id="f" data-name="Group 63">
                        <path id="g" data-name="Path 43" d="M123.31,225.13H35.51c-14.11,0-32.29-15.89-34.07-30.28,2.86-51.74-4.2-108.26-.17-159.45C2.68,17.61,12.37,4.92,30.15,1.26c50.12,2.94,104.63-3.9,154.22-.05,33.38,2.58,27.64,31.51,28.71,55.75,2.16,49.16,5.36,108.02,2.79,156.84-3.12,59.15-37.23,110.46-94.51,129.35-12.94,4.27-49.62,14.63-52.92-6.15-1.33-8.36-1.31-60.41.55-67.66,1.36-3.4,3.02-6.69,4.94-9.81,4.65-6.45,7.75-3.51,13.23-5.53,15.25-5.61,31.49-11.57,36.16-28.85" fill="currentColor"/>
                        <path id="h" data-name="Path 44" d="M410.18,227.81h-87.8c-2.1,0-13.81-3.89-16.33-5.12-12.1-5.91-18.22-18.76-19.25-31.69-4.03-51.17,1.99-109.19,1.5-160.79,3.49-14.06,11.05-22.51,25.97-23.63,51-3.82,106.73,2.98,158.24.05,12.79,1.29,21.76,12.65,23.34,24.92,3.46,26.85,3.22,55.9,4.08,83.05,2.88,90.94,15.59,184.89-86.17,226.06-15.23,6.17-56.84,19.41-59.92-6.24-1.52-12.65-1.37-46.21.02-59.02,2.62-24.15,16.38-18.61,32.9-24.75,11.72-4.35,17.93-11.97,23.41-22.84" fill="currentColor"/>
                      </g></g></g></g>
                    </svg>
                </div>
                
                <!-- The Premium Glass Card -->
                <div class="testimonial-card ${index === 0 ? 'active' : ''}">
                    <div class="card-text-container">
                        <p data-i18n="${review.textKey}">${translations[currentLanguage][review.textKey]}</p>
                    </div>
                    <div class="card-divider"></div>
                    <div class="card-author">
                        <div class="author-avatar">
                            <svg class="bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style="font-size: 24px;">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                            </svg>
                        </div>
                        <div class="author-info">
                            <h4 data-i18n="${review.authorKey}">${translations[currentLanguage][review.authorKey]}</h4>
                            <span data-i18n="${review.roleKey}">${translations[currentLanguage][review.roleKey]}</span>
                        </div>
                    </div>
                </div>
            `;
            track.appendChild(wrapper);

            const dot = document.createElement('div');
            dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(dot);
        });

        // Ensure images/fonts load before initial calculation
        setTimeout(() => {
            if (typeof window.updateCarousel === 'function') {
                window.updateCarousel();
            }
        }, 100);

        document.getElementById('btn-prev').addEventListener('click', () => {
            const isRTL = document.documentElement.dir === 'rtl';
            if (isRTL) {
                // In RTL, the Left button (prev) should go to the NEXT item
                currentIndex = (currentIndex + 1) % testimonialData.length;
            } else {
                currentIndex = (currentIndex - 1 + testimonialData.length) % testimonialData.length;
            }
            if (typeof window.updateCarousel === 'function') {
                window.updateCarousel();
            }
            resetInterval();
        });

        document.getElementById('btn-next').addEventListener('click', () => {
            const isRTL = document.documentElement.dir === 'rtl';
            if (isRTL) {
                // In RTL, the Right button (next) should go to the PREVIOUS item
                currentIndex = (currentIndex - 1 + testimonialData.length) % testimonialData.length;
            } else {
                currentIndex = (currentIndex + 1) % testimonialData.length;
            }
            if (typeof window.updateCarousel === 'function') {
                window.updateCarousel();
            }
            resetInterval();
        });
    }

    // 2. Carousel Movement Logic
    function goToSlide(index) {
        currentIndex = index;
        if (typeof window.updateCarousel === 'function') {
            window.updateCarousel();
        }
    }

    window.updateCarousel = function () {
        const dots = document.querySelectorAll('.indicator-dot');
        const wrappers = document.querySelectorAll('.testimonial-wrapper');
        const cards = document.querySelectorAll('.testimonial-card');
        const container = document.querySelector('.carousel-container');

        if (!wrappers.length || !track || !container) return;

        // Calculate new transform
        const containerWidth = container.clientWidth;
        const wrapperWidth = wrappers[0].getBoundingClientRect().width;

        // --- ADD RTL LOGIC HERE ---
        const isRTL = document.documentElement.dir === 'rtl';
        const centerOffset = (containerWidth / 2) - (wrapperWidth / 2);

        let offset;
        if (isRTL) {
            // In RTL: The first slide is on the right edge. 
            // We move the track left (negative) to center it, and right (positive) for next slides.
            offset = -centerOffset + (currentIndex * wrapperWidth);
        } else {
            // In LTR (Original Logic)
            offset = centerOffset - (currentIndex * wrapperWidth);
        }

        track.style.transform = `translateX(${offset}px)`;

        cards.forEach((card, i) => {
            if (i === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Update indicators with sliding window effect
        dots.forEach((dot, index) => {
            // Reset classes
            dot.className = 'indicator-dot cursor-pointer transition-all duration-300';

            const distance = Math.abs(currentIndex - index);

            if (distance === 0) {
                dot.classList.add('active'); // Current dot
            } else if (distance === 1 || distance === 2) {
                dot.classList.add('small'); // Immediate neighbors
            } else if (distance === 3) {
                dot.classList.add('tiny'); // Outer neighbors
            } else {
                dot.classList.add('hidden-dot'); // Hide the rest
            }
        });
    }

    // 3. Scroll Intersection Observer for Fade-ins
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // If it's the left column, trigger the timeline items in order
                if (entry.target.classList.contains('ts-left-column')) {
                    const timelineItems = entry.target.querySelectorAll('.timeline-item');
                    timelineItems.forEach((item, i) => {
                        setTimeout(() => {
                            item.classList.add('animate-in');
                        }, i * 150); // Staggered fade in (150ms delay per item)
                    });
                }
                sectionObserver.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    // Initialize
    initCarousel();

    // Attach observer to main wrapper columns
    document.querySelectorAll('.fade-in-section').forEach(el => {
        sectionObserver.observe(el);
    });

    // Handle window resize for carousel alignment
    window.addEventListener('resize', () => {
        if (typeof window.updateCarousel === 'function') {
            window.updateCarousel();
        }
    });
});
/* ==========================================
     END: Trust & Soft Skills Section JS 
=========================================== */

/*
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
*/

// ==========================================
// WORK SAMPLES - LOGIC & DATA
// ==========================================

const projectsData = {
    en: {
        'Full-Stack Software Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'Mobile App Developer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'AI & Machine Learning Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'UI/UX & Visual Designer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'Mechanical & Control Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'DevOps & Cloud Architect': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        '3D & Motion Designer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'R&D Specialist': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
    },
    de: {
        'Full-Stack Software Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'Mobile App Developer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'AI & Machine Learning Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'UI/UX & Visual Designer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'Mechanical & Control Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'DevOps & Cloud Architect': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        '3D & Motion Designer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'R&D Specialist': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
    },
    fa: {
        'Full-Stack Software Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'Mobile App Developer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'AI & Machine Learning Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'UI/UX & Visual Designer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'Mechanical & Control Engineer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'DevOps & Cloud Architect': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        '3D & Motion Designer': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
        'R&D Specialist': [
            {
                id: 'p1',
                title: 'E-Commerce UI Design',
                subtitle: 'Professional & Creative Solutions',
                category: "Full-Stack Software Engineer",
                cover: 'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                images: [
                    'Projects/UI_UX_Designing/Horvex/Image_1.webp',
                    'Projects/UI_UX_Designing/Horvex/Image_2.webp',
                ],
                media: [
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_1.webp' },
                    { type: 'image', src: 'Projects/UI_UX_Designing/Horvex/Image_2.webp' },
                ],
                keywords: ['#ui', '#ux', '#ecommerce'],
                tags: ['#design', '#ui', '#ux', '#designing', '#developing'],
                description: '## E-Commerce App\nA detailed markdown description goes here...',
                markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
            },
        ],
    },
};

const skillIcons = {
    'Full-Stack Software Engineer': `<svg
              class="icon icon-tabler icon-tabler-device-laptop ws-project-post-top-left-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 19l18 0"></path>
              <path
                d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"
              ></path>
            </svg>`, // or replace with '<svg>...</svg>'
    'Mobile App Developer': `<svg
              class="icon icon-tabler icon-tabler-device-mobile ws-project-post-top-left-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"
              ></path>
              <path d="M11 4h2"></path>
              <path d="M12 17v.01"></path>
            </svg>`,
    'AI & Machine Learning Engineer': `<svg
              class="icon icon-tabler icon-tabler-robot-face ws-project-post-top-left-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z"
              ></path>
              <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1"></path>
              <path d="M9 7l-1 -4"></path>
              <path d="M15 7l1 -4"></path>
              <path d="M9 12v-1"></path>
              <path d="M15 12v-1"></path>
            </svg>`,
    'UI/UX & Visual Designer': `<svg
              class="icon icon-tabler icon-tabler-palette ws-project-post-top-left-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"
              ></path>
              <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>`,
    'Mechanical & Control Engineer': `<svg
              class="icon icon-tabler icon-tabler-settings-heart ws-project-post-top-left-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11.231 20.828a1.668 1.668 0 0 1 -.906 -1.145a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.509 .123 .87 .421 1.084 .792"
              ></path>
              <path d="M14.882 11.165a3.001 3.001 0 1 0 -4.31 3.474"></path>
              <path
                d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"
              ></path>
            </svg>`,
    'DevOps & Cloud Architect': `<svg
              class="icon icon-tabler icon-tabler-cloud ws-project-post-top-left-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"
              ></path>
            </svg>`,
    '3D & Motion Designer': `<svg
              class="icon icon-tabler icon-tabler-brand-cinema-4d ws-project-post-top-left-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9.65 6.956a5.39 5.39 0 0 0 7.494 7.495"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M17.7 12.137a5.738 5.738 0 1 1 -5.737 -5.737"></path>
              <path
                d="M17.7 12.338v-1.175c0 -.47 .171 -.92 .476 -1.253a1.56 1.56 0 0 1 1.149 -.52c.827 0 1.523 .676 1.62 1.573c.037 .344 .055 .69 .055 1.037"
              ></path>
              <path
                d="M11.662 6.4h1.175c.47 0 .92 -.176 1.253 -.49c.333 -.314 .52 -.74 .52 -1.184c0 -.852 -.676 -1.57 -1.573 -1.67a9.496 9.496 0 0 0 -1.037 -.056"
              ></path>
            </svg>`,
    'R&D Specialist': `<svg
              class="icon icon-tabler icon-tabler-books ws-project-post-top-left-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
              ></path>
              <path
                d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
              ></path>
              <path d="M5 8h4"></path>
              <path d="M9 16h4"></path>
              <path
                d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"
              ></path>
              <path d="M14 9l4 -1"></path>
              <path d="M16 16l3.923 -.98"></path>
            </svg>`,
    'default': `<svg class="icon icon-tabler icon-tabler-heart-star ws-project-post-top-left-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9.73 17.753l-5.23 -5.181a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.563 5.041"></path>
    <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
</svg>` // Fallback icon
};

let currentProjectsList = [];
let loadedProjectsCount = 0;
const PROJECTS_PER_PAGE = 5;
let currentSelectedSkill = "Full-Stack Software Engineer";

// Scroll Animation Observer
const wsFadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.addEventListener('DOMContentLoaded', () => {
    initWorkSamples();
    startHeaderIconLoop();

    // Observe static elements for scroll fade
    document.querySelectorAll('.ws-scroll-fade').forEach(el => wsFadeObserver.observe(el));
});

let currentSearchQuery = "";
let searchTimeout = null;

function initWorkSamples() {
    // Safely check for language
    const initialLang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
    updateProjectsData(initialLang, null);

    const filterBtn = document.getElementById('ws-filter-btn');
    const dropdownList = document.getElementById('ws-dropdown-list');
    const filterText = document.getElementById('ws-filter-text');

    // Assumes your search input has the ID 'ws-search-input'
    const searchInput = document.getElementById('ws-search-input');

    // 1. Search Input Listener with Debounce
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            // Show Skeleton Loader immediately
            showSkeletonLoader();
            
            // Clear previous timeout
            clearTimeout(searchTimeout);
            
            // Wait 500ms after user stops typing to perform search
            searchTimeout = setTimeout(() => {
                currentSearchQuery = query;
                const activeLang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
                updateProjectsData(activeLang, currentSelectedSkill);
            }, 500); 
        });
    }

    // Toggle Dropdown
    filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownList.classList.toggle('active');
    });

    // Close Dropdown when clicking outside
    document.addEventListener('click', () => {
        dropdownList.classList.remove('active');
    });

    // Inside initWorkSamples:
    dropdownList.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            // Use currentTarget to always get the <li> element
            const selectedValue = e.currentTarget.getAttribute('data-value');
            currentSelectedSkill = selectedValue; // Use selectedValue instead of textContent 

            // Update the filter text UI (removing inner icons/spaces)
            filterText.textContent = e.currentTarget.querySelector('span').textContent;
            dropdownList.classList.remove('active');

            const activeLang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'en';
            updateProjectsData(activeLang, selectedValue);
        });
    });

    // See More Button
    document.getElementById('ws-see-more-btn').addEventListener('click', () => {
        renderProjects(true);
    });
}

// Helper to render skeleton loaders
function showSkeletonLoader() {
    const grid = document.getElementById('ws-projects-grid');
    grid.innerHTML = `
        <div class="ws-skeleton-card"></div>
        <div class="ws-skeleton-card"></div>
        <div class="ws-skeleton-card"></div>
    `;
    const seeMoreBtn = document.getElementById('ws-see-more-btn');
    if(seeMoreBtn) seeMoreBtn.closest('.ws-see-more-container').style.display = 'none';
}

function updateProjectsData(lang, skillsetFilter) {
    currentProjectsList = [];
    const langData = projectsData[lang] || projectsData['en'];
    let baseList = [];

    // Filter by skill first
    if (skillsetFilter && skillsetFilter !== "Not Selected" && langData[skillsetFilter]) {
        baseList = langData[skillsetFilter].map(proj => ({ ...proj, skillCategory: skillsetFilter }));
    } else {
        Object.entries(langData).forEach(([skill, skillProjects]) => {
            const projectsWithCategory = skillProjects.map(proj => ({ ...proj, skillCategory: skill }));
            baseList = baseList.concat(projectsWithCategory);
        });
    }

    // Filter by search query across multiple properties
    if (currentSearchQuery) {
        currentProjectsList = baseList.filter(proj => {
            // Combine all text-based fields into one searchable string
            const searchableText = [
                proj.title, 
                proj.subtitle, 
                proj.description, 
                proj.markdown,
                ...(proj.keywords || []), 
                ...(proj.tags || [])
            ].join(' ').toLowerCase();
            
            return searchableText.includes(currentSearchQuery);
        });
    } else {
        currentProjectsList = baseList;
    }

    loadedProjectsCount = 0;
    document.getElementById('ws-projects-grid').innerHTML = '';
    renderProjects();
}

function renderProjects(append = false) {
    const grid = document.getElementById('ws-projects-grid');
    const seeMoreBtn = document.getElementById('ws-see-more-btn');

    // Handle Empty State
    if (currentProjectsList.length === 0) {
        grid.innerHTML = `
            <div class="ws-empty-state is-visible">
                <div class="ws-empty-card">
                    <img src="Work Samples/Search - Transparent.webp" alt="No results" class="ws-empty-icon giggle-premium"/>
                    <h3 class="ws-empty-title">No Projects Found</h3>
                    <p class="ws-empty-subtitle">I couldn't find any projects matching "${currentSearchQuery}". Try adjusting your keywords.</p>
                </div>
            </div>
        `;
        if(seeMoreBtn) seeMoreBtn.closest('.ws-see-more-container').style.display = 'none';
        return;
    }

    // If append is false (meaning fresh search/filter), clear the grid (which might have skeletons)
    if (!append) {
        grid.innerHTML = '';
    }

    const nextProjects = currentProjectsList.slice(loadedProjectsCount, loadedProjectsCount + PROJECTS_PER_PAGE);

    nextProjects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'ws-project-card ws-scroll-fade';

        // Find the icon based on the project's category
        const projectIcon = skillIcons[proj.skillCategory] || skillIcons['default'];

        card.innerHTML = `
            <div class="ws-project-cover">
              <img src="${proj.cover}" alt="${proj.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
              
              <!-- DYNAMIC ICON ADDED HERE -->
              <button class="ws-card-glass-btn ws-skill-badge" title="${proj.skillCategory}">
                  ${projectIcon}
              </button>
              
              ${proj.images.length > 1 ? `
                <button class="ws-card-glass-btn ws-card-nav ws-nav-left">❮</button>
                <button class="ws-card-glass-btn ws-card-nav ws-nav-right">❯</button>
              ` : ''}
            </div>
            <div class="ws-project-info" style="--bg-img: url('${proj.cover}');">
              <h3 class="ws-project-title fs-4">${proj.title}</h3>
              ${proj.subtitle ? `<p class="ws-project-subtitle fs-6">${proj.subtitle}</p>` : ''}
              <button class="ws-card-glass-btn ws-open-details" onclick="openProjectDetails('${proj.id}', '${proj.skillCategory}')">
                <svg class="ws-project-post-open-project-detail-pop-up-view" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.12 35.24" width="1em" height="1em" fill="currentColor">
                  <path transform="translate(0 -27.946)" d="M4.735,30.282c2.757-.311,6.017.176,8.825,0a2.193,2.193,0,0,1-.5,4.343c-2.438.182-5.307-.269-7.685,0a1.1,1.1,0,0,0-1,1.142l.053,22.111a1.267,1.267,0,0,0,1.24.829H27.1a1.224,1.224,0,0,0,1.364-1.074c.272-2.43-.215-5.356,0-7.832a2.188,2.188,0,0,1,4.353-.137c-.125,2.7.194,5.59.011,8.268a5.564,5.564,0,0,1-5.577,5.134c-7.124-.3-14.561.389-21.648,0A5.56,5.56,0,0,1,.117,58.569C-.028,50.6-.055,42.578.131,34.615a5.587,5.587,0,0,1,4.6-4.333" />
                  <path transform="translate(-164.951 0)" d="M195.629,7.559l-13.852,13.81a2.192,2.192,0,0,1-2.987-3.209l13.663-13.7h-5.946a2.834,2.834,0,0,1-1.292-.7A2.217,2.217,0,0,1,186.726.1c3.606.237,7.6-.307,11.159,0a2.259,2.259,0,0,1,2.105,2.326c.253,3.46-.2,7.223,0,10.716a2.222,2.222,0,0,1-3.806,1.585,3,3,0,0,1-.555-1.07Z" />
                </svg>
              </button>
            </div>
        `;
        grid.appendChild(card);
        wsFadeObserver.observe(card);
    });

    loadedProjectsCount += nextProjects.length;

    if (loadedProjectsCount >= currentProjectsList.length) {
        seeMoreBtn.closest('.ws-see-more-container').style.display = 'none';
    } else {
        seeMoreBtn.closest('.ws-see-more-container').style.display = 'flex';
    }
}

window.translateWorkSamples = function (newLang) {
    updateProjectsData(newLang, null);
    document.getElementById('ws-filter-text').textContent = 'Not Selected';
};

function startHeaderIconLoop() {
    document.querySelectorAll(".ws-loop-3D-icons").forEach(
        (el, index) => {
            const icons = [
                '3D Icons/Artificailintelligence Icon - Transparent.webp',
                '3D Icons/Engineering Icon - Transparent.webp',
                '3D Icons/Designing Icon - Transparent.webp',
                '3D Icons/Coding Icon - Transparent.webp'
            ];
            let currentIndex = 0;

            setInterval(() => {
                el.classList.add('fade-out');
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % icons.length;
                    el.src = icons[currentIndex];
                    el.classList.remove('fade-out');
                }, 800);
            }, 4000);
        }
    );
}


/*
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
*/

// ==========================================
// POPPED UP PROJECT DETAILS WINDOW
// ==========================================

/**
 * Project Details Modal Engine
 * Handles 3D Slideshow, Thumbnails, and Markdown Parsing
 */

// Global state for the modal
let currentMedia = [];
let currentIndex = 0;

// --- DOM Elements ---
const modalOverlay = document.getElementById('ws-project-modal');
const trackEl = document.getElementById('ws-slider-track');
const indicatorsEl = document.getElementById('ws-slider-indicators');
const thumbnailsEl = document.getElementById('ws-thumbnails-wrapper');
const markdownContentEl = document.getElementById('ws-markdown-content');
const tagsEl = document.getElementById('ws-project-tags');

// --- Mock Data (Replace this with fetching your actual project data) ---
const mockProjectsDatabase = {
    'project-1': {
        title: "E-Commerce UI Design",
        category: "UI and UX Design",
        media: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80' }
        ],
        // Sample Markdown demonstrating requested features
        markdown: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Core Features
* Seamless checkout process
* Dynamic product loading
* User dashboard

Here is an example of the backend code processing the cart:
\`\`\`python
squares = [x**2 for x in range(10)]
for num in squares:
    if num % 2 == 0:
        print(num)
\`\`\`

You can read more about the UI guidelines [here in our docs](#).
        `,
        tags: ['#design', '#ui', '#ux', '#designing', '#developing']
    }
};

// --- Modal Open/Close Logic ---
function getProjectById(projectsData, lang, skill, id) {
  const list = projectsData?.[lang]?.[skill];
  if (!Array.isArray(list)) return null;
  return list.find(p => p.id === id) ?? null;
}

function openProjectDetails(projectId, skillName) {
    // 1. Fetch project data (using mock database here)
    const project = getProjectById(projectsData, currentLanguage, skillName, projectId);
    if (!project) return;

    // 2. Populate Header
    document.getElementById('ws-modal-title').innerText = project.title;
    document.getElementById('ws-modal-subtitle').innerText = project.category;

    // 3. Setup Media
    currentMedia = project.media;
    currentIndex = 0;
    renderSlides();

    // 4. Render Markdown Content
    renderMarkdownContent(project.markdown);

    // 5. Render Tags
    tagsEl.innerHTML = project.tags.map(tag => `<a href="#" class="ws-tag">${tag}</a>`).join('');

    // 6. Open Modal
    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectModal() {
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    // Stop any playing videos when closed
    trackEl.innerHTML = '';
}

// Close modal if user clicks outside the container
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeProjectModal();
});


// --- Slider Engine ---

function renderSlides() {
    trackEl.innerHTML = '';
    indicatorsEl.innerHTML = '';
    thumbnailsEl.innerHTML = '';

    currentMedia.forEach((media, index) => {
        // 1. Build Main Slide
        const slide = document.createElement('div');
        slide.className = 'ws-slide';
        slide.onclick = () => goToSlide(index); // Click left/right slide to make it active

        let mediaTag = media.type === 'video'
            ? `<video src="${media.src}" muted loop playsinline></video>`
            : `<img src="${media.src}" alt="Project Media ${index + 1}">`;

        // Maximize button (SVGs used for icon)
        const maximizeBtn = `
            <button class="ws-maximize-btn" onclick="window.open('${media.src}', '_blank'); event.stopPropagation();" title="Open in new tab">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
            </button>`;

        slide.innerHTML = mediaTag + maximizeBtn;
        trackEl.appendChild(slide);

        // 2. Build Indicator
        const indicator = document.createElement('div');
        indicator.className = 'ws-indicator';
        indicator.onclick = () => goToSlide(index);
        indicatorsEl.appendChild(indicator);

        // 3. Build Thumbnail
        const thumb = document.createElement('div');
        thumb.className = 'ws-thumb';
        thumb.onclick = () => goToSlide(index);
        thumb.innerHTML = mediaTag; // Reusing media tag for thumbnail
        thumbnailsEl.appendChild(thumb);
    });

    updateSliderClasses();
}

function moveSlide(direction) {
    currentIndex = currentIndex + direction;
    // Loop around
    if (currentIndex < 0) currentIndex = currentMedia.length - 1;
    if (currentIndex >= currentMedia.length) currentIndex = 0;
    updateSliderClasses();
}

function goToSlide(index) {
    if (currentIndex === index) return;
    currentIndex = index;
    updateSliderClasses();
}

function updateSliderClasses() {
    const slides = document.querySelectorAll('.ws-slide');
    const indicators = document.querySelectorAll('.ws-indicator');
    const thumbs = document.querySelectorAll('.ws-thumb');

    const total = slides.length;

    slides.forEach((slide, i) => {
        // Reset classes
        slide.className = 'ws-slide ws-hidden';
        indicators[i].classList.remove('is-active');
        thumbs[i].classList.remove('is-active');

        // Calculate Next and Prev indices including loop around
        let prevIndex = (currentIndex - 1 + total) % total;
        let nextIndex = (currentIndex + 1) % total;

        // Assign 3D classes
        if (i === currentIndex) {
            slide.className = 'ws-slide is-active';
            indicators[i].classList.add('is-active');
            thumbs[i].classList.add('is-active');
        } else if (i === prevIndex) {
            slide.className = 'ws-slide is-prev';
        } else if (i === nextIndex) {
            slide.className = 'ws-slide is-next';
        }

        // Play/Pause video logic
        const video = slide.querySelector('video');
        if (video) {
            if (i === currentIndex) video.play();
            else video.pause();
        }
    });

    // Scroll Thumbnails container to center the active thumbnail
    if (thumbs[currentIndex]) {
        const thumbEl = thumbs[currentIndex];
        const scrollLeft = thumbEl.offsetLeft - (thumbnailsEl.clientWidth / 2) + (thumbEl.clientWidth / 2);
        thumbnailsEl.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
}


// --- Markdown Rendering Engine ---

function renderMarkdownContent(markdownText) {
    // 1. Ensure marked.js is loaded
    if (typeof marked === 'undefined') {
        markdownContentEl.innerHTML = '<p>Error: Markdown parser not loaded.</p>';
        return;
    }

    // 2. Parse Markdown to HTML
    const html = marked.parse(markdownText);
    markdownContentEl.innerHTML = html;

    // 3. Post-process to style Code Blocks as requested
    // Marked.js generates <pre><code class="language-python">...</code></pre>
    const codeBlocks = markdownContentEl.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        const pre = codeBlock.parentElement;

        // Extract language name from class (e.g., 'language-python' -> 'python')
        let language = "Code";
        codeBlock.classList.forEach(cls => {
            if (cls.startsWith('language-')) {
                language = cls.replace('language-', '');
            }
        });

        // Set the data-lang attribute which CSS uses for the header pseudo-element
        pre.setAttribute('data-lang', language);
    });
}

// ==========================================
// POPPED UP PROJECT DETAILS WINDOW
// ==========================================

/*
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
################################################
*/

// ========================================== //
// START: CONTACT ME JS - WATER DROP EFFECT   //
// ========================================== //

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("water-drop-canvas");
    if (!canvas) return;

    // Array of CSS variables to pull random border colors from
    const colors = [
        "var(--color-primary)",
        "var(--color-secondary)",
        "var(--color-accent)",
        "var(--color-gray-light)"
    ];

    function createDrop() {
        const drop = document.createElement("div");
        drop.classList.add("water-drop");

        // Randomly pick a color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        drop.style.borderColor = randomColor;

        // Position primarily in the top area (around 20% down, but randomized horizontally and vertically)
        // Adjusting vertical bounds to mostly fall in upper-mid section to simulate the request
        const randomLeft = Math.floor(Math.random() * 100);
        const randomTop = Math.floor(Math.random() * 60) + 10; // Between 10% and 70% height
        
        // Randomize initial size slightly for organic feel
        const sizeBase = Math.floor(Math.random() * 150) + 100; // 100px to 250px
        drop.style.width = `${sizeBase}px`;
        drop.style.height = `${sizeBase}px`;

        drop.style.left = `${randomLeft}%`;
        drop.style.top = `${randomTop}%`;

        canvas.appendChild(drop);

        // Remove element from DOM after animation completes (4s)
        setTimeout(() => {
            if (drop.parentNode) {
                drop.parentNode.removeChild(drop);
            }
        }, 4000);
    }

    // Generate a drop periodically
    setInterval(createDrop, 1200); // Generates a new drop every 1.2 seconds
});

// ========================================== //
// END: CONTACT ME JS                         //
// ========================================== //