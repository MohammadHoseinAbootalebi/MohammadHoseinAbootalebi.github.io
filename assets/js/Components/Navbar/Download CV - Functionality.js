// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©© All Rights are Reserved by Muhammad Husain Abootalebi ©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //

// ----------------------------- ↓ Global Variables ↓ ------------------------------ //

/// --- >>> Selected Language
var lanauge_show = getQueryParam('language');

/// --- >>> Selected Skill
var skill_show = getQueryParam('direction');

/// --- >>> Call CV Link setter
cv_link_setter(lanauge_show, skill_show);

// ----------------------------- ↑ Global Variables ↑ ------------------------------ //

// ◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒●◒ //

// -------------------------------- ↓ Functions ↓ --------------------------------- //

/// --- >>> Getting the Passed Parameters from the URL
function getQueryParam(param) {
        var searchParams = new URLSearchParams(window.location.search);
        return searchParams.get(param);
}

/// --- >>> Download CV Link Setter
function cv_link_setter(lanauge_show = "", skill_show = "") {
        /// --- >>> Download *General* Resume
        if (skill_show == "") {

                //// ---- >>>> Check for Selected Language
                if (lanauge_show == "") {

                        ///// ----- >>>>> Read System Default Language
                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                        ///// ----- >>>>> Switch on System Language
                        switch (systemLanguage) {
                                // English
                                case ('en-US') || ('en') || ('en-GB'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/refs/heads/main/Resume%20General/English/MHA%20-%20CV.pdf';
                                        break;
                                // German
                                case ('de') || ('de-DE'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/German/MHA%20-%20CV.pdf';
                                        break;
                                // Chinese
                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Chinese/MHA%20-%20CV.pdf';
                                        break;
                                // Russian
                                case ('ru') || ('ru-RU'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Russian/MHA%20-%20CV.pdf';
                                        break;
                                // French
                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/French/MHA%20-%20CV.pdf';
                                        break;
                                // Japanese
                                case ('ja') || ('ja-JP'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Japanese/MHA%20-%20CV.pdf';
                                        break;
                                // Korean
                                case ('ko') || ('ko-KR'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Korean/MHA%20-%20CV.pdf';
                                        break;
                                // Español
                                case ('es') || ('es-ES') || ('es-MX'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Spanish/MHA%20-%20CV.pdf';
                                        break;
                                // Hindi
                                case ('hi') || ('hi-IN'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Hindi/MHA%20-%20CV.pdf';
                                        break;
                                // Portuguese
                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Portuguese/MHA%20-%20CV.pdf';
                                        break;
                                // Bangali
                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Bengali/MHA%20-%20CV.pdf';
                                        break;
                                // Arabic
                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Arabic/MHA%20-%20CV.pdf';
                                        break;
                                // Persian
                                case ('fa') || ('fa-IR'):
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Persian/MHA%20-%20CV.pdf';
                                        break;
                                // Default is English
                                default:
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/refs/heads/main/Resume%20General/English/MHA%20-%20CV.pdf';
                                        break;
                        }
                }
                //// ---- >>>> Could Read Selected Language
                else {
                        ///// ----- >>>>> Switch on System Language
                        switch (lanauge_show) {
                                // English
                                case "English":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/refs/heads/main/Resume%20General/English/MHA%20-%20CV.pdf';
                                        break;
                                // German
                                case "Deutsch":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/German/MHA%20-%20CV.pdf';
                                        break;
                                // Chinese
                                case "中国人":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Chinese/MHA%20-%20CV.pdf';
                                        break;
                                // Russian
                                case "Русский":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Russian/MHA%20-%20CV.pdf';
                                        break;
                                // French
                                case "Français":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/French/MHA%20-%20CV.pdf';
                                        break;
                                // Japanese
                                case "日本語":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Japanese/MHA%20-%20CV.pdf';
                                        break;
                                // Korean
                                case "한국인":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Korean/MHA%20-%20CV.pdf';
                                        break;
                                // Español
                                case "Español":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Spanish/MHA%20-%20CV.pdf';
                                        break;
                                // Hindi
                                case "हिंदी":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Hindi/MHA%20-%20CV.pdf';
                                        break;
                                // Portuguese
                                case "Português":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Portuguese/MHA%20-%20CV.pdf';
                                        break;
                                // Bangali
                                case "বাংলা":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Bengali/MHA%20-%20CV.pdf';
                                        break;
                                // Arabic
                                case "عَرَبِيّ":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Arabic/MHA%20-%20CV.pdf';
                                        break;
                                // Persian
                                case "فارسی":
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/d93e3cc3d0a9a9f365242e8a93326963499532c8/Resume%20General/Persian/MHA%20-%20CV.pdf';
                                        break;
                                // Default is English
                                default:
                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/refs/heads/main/Resume%20General/English/MHA%20-%20CV.pdf';
                                        break;
                        }
                }

        }
        /// --- >>> Read *Skill Based* Resume
        else {

                //// ---- >>>> Check for Selected Language
                if (lanauge_show == "") {

                        ///// ----- >>>>> Switch on Selected Skill
                        switch (skill_show) {
                                case "UI & UX Designer":
                                        ///// ----- >>>>> Read System Default Language
                                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                                        ///// ----- >>>>> Switch on System Language
                                        switch (systemLanguage) {
                                                // English
                                                case ('en-US') || ('en') || ('en-GB'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/English/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case ('de') || ('de-DE'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/German/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Chinese/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case ('ru') || ('ru-RU'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Russian/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/French/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case ('ja') || ('ja-JP'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Japanese/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case ('ko') || ('ko-KR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Korean/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case ('es') || ('es-ES') || ('es-MX'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Spanish/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case ('hi') || ('hi-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Hindi/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Portuguese/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Bengali/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Arabic/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case ('fa') || ('fa-IR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Persian/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/English/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Flutter Developer":
                                        ///// ----- >>>>> Read System Default Language
                                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                                        ///// ----- >>>>> Switch on System Language
                                        switch (systemLanguage) {
                                                // English
                                                case ('en-US') || ('en') || ('en-GB'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/English/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case ('de') || ('de-DE'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/German/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Chinese/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case ('ru') || ('ru-RU'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Russian/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/French/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case ('ja') || ('ja-JP'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Japanese/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case ('ko') || ('ko-KR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Korean/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case ('es') || ('es-ES') || ('es-MX'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Spanish/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case ('hi') || ('hi-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Hindi/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Portuguese/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Bengali/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Arabic/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case ('fa') || ('fa-IR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Persian/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/English/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Full Stack Developer":
                                        ///// ----- >>>>> Read System Default Language
                                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                                        ///// ----- >>>>> Switch on System Language
                                        switch (systemLanguage) {
                                                // English
                                                case ('en-US') || ('en') || ('en-GB'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/English/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case ('de') || ('de-DE'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/German/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Chinese/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case ('ru') || ('ru-RU'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Russian/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/French/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case ('ja') || ('ja-JP'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Japanese/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case ('ko') || ('ko-KR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Korean/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case ('es') || ('es-ES') || ('es-MX'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Spanish/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case ('hi') || ('hi-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Hindi/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Portuguese/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Bengali/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Arabic/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case ('fa') || ('fa-IR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Persian/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/English/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Android Developer":
                                        ///// ----- >>>>> Read System Default Language
                                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                                        ///// ----- >>>>> Switch on System Language
                                        switch (systemLanguage) {
                                                // English
                                                case ('en-US') || ('en') || ('en-GB'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/English/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case ('de') || ('de-DE'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/German/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Chinese/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case ('ru') || ('ru-RU'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Russian/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/French/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case ('ja') || ('ja-JP'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Japanese/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case ('ko') || ('ko-KR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Korean/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case ('es') || ('es-ES') || ('es-MX'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Spanish/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case ('hi') || ('hi-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Hindi/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Portuguese/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Bengali/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Arabic/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case ('fa') || ('fa-IR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Persian/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/English/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "AI Engineer":
                                        ///// ----- >>>>> Read System Default Language
                                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                                        ///// ----- >>>>> Switch on System Language
                                        switch (systemLanguage) {
                                                // English
                                                case ('en-US') || ('en') || ('en-GB'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/English/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case ('de') || ('de-DE'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/German/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Chinese/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case ('ru') || ('ru-RU'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Russian/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/French/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case ('ja') || ('ja-JP'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Japanese/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case ('ko') || ('ko-KR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Korean/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case ('es') || ('es-ES') || ('es-MX'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Spanish/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case ('hi') || ('hi-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Hindi/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Portuguese/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Bengali/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Arabic/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case ('fa') || ('fa-IR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Persian/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/English/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Industrial Designer":
                                        ///// ----- >>>>> Read System Default Language
                                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                                        ///// ----- >>>>> Switch on System Language
                                        switch (systemLanguage) {
                                                // English
                                                case ('en-US') || ('en') || ('en-GB'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/English/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case ('de') || ('de-DE'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/German/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Chinese/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case ('ru') || ('ru-RU'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Russian/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/French/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case ('ja') || ('ja-JP'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Japanese/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case ('ko') || ('ko-KR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Korean/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case ('es') || ('es-ES') || ('es-MX'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Spanish/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case ('hi') || ('hi-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Hindi/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Portuguese/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Bengali/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Arabic/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case ('fa') || ('fa-IR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Persian/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/English/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Self-Driving Automobile Engineer":
                                        ///// ----- >>>>> Read System Default Language
                                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                                        ///// ----- >>>>> Switch on System Language
                                        switch (systemLanguage) {
                                                // English
                                                case ('en-US') || ('en') || ('en-GB'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/English/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case ('de') || ('de-DE'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/German/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Chinese/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case ('ru') || ('ru-RU'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Russian/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/French/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case ('ja') || ('ja-JP'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Japanese/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case ('ko') || ('ko-KR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Korean/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case ('es') || ('es-ES') || ('es-MX'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Spanish/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case ('hi') || ('hi-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Hindi/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Portuguese/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Bengali/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Arabic/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case ('fa') || ('fa-IR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Persian/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/English/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Mechanical Engineer":
                                        ///// ----- >>>>> Read System Default Language
                                        var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

                                        ///// ----- >>>>> Switch on System Language
                                        switch (systemLanguage) {
                                                // English
                                                case ('en-US') || ('en') || ('en-GB'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/English/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case ('de') || ('de-DE'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/German/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case ('zh') || ('zh-CN') || ('zh-TW'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Chinese/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case ('ru') || ('ru-RU'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Russian/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case ('fr') || ('fr-FR') || ('fr-CA'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/French/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case ('ja') || ('ja-JP'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Japanese/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case ('ko') || ('ko-KR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Korean/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case ('es') || ('es-ES') || ('es-MX'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Spanish/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case ('hi') || ('hi-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Hindi/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case ('pt') || ('pt-PT') || ('pt-BR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Portuguese/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case ('bn') || ('bn-BD') || ('bn-IN'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Bengali/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Arabic/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case ('fa') || ('fa-IR'):
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Persian/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/English/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;

                                default:
                                        break;
                        }

                }
                //// ---- >>>> Could Read Selected Language
                else {

                        ///// ----- >>>>> Switch on Selected Skill
                        switch (skill_show) {
                                case "UI & UX Designer":
                                        ///// ----- >>>>> Switch on Selected Language
                                        switch (lanauge_show) {
                                                // English
                                                case "English":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/English/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case "Deutsch":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/German/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case "中国人":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Chinese/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case "Русский":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Russian/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case "Français":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/French/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case "日本語":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Japanese/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case "한국인":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Korean/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case "Español":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Spanish/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case "हिंदी":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Hindi/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case "Português":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Portuguese/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case "বাংলা":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Bengali/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case "عَرَبِيّ":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Arabic/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case "فارسی":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/Persian/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/UI%20%26%20UX%20Designer/English/MHA%20-%20UIXD%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Flutter Developer":
                                        ///// ----- >>>>> Switch on Selected Language
                                        switch (lanauge_show) {
                                                // English
                                                case "English":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/English/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case "Deutsch":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/German/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case "中国人":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Chinese/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case "Русский":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Russian/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case "Français":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/French/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case "日本語":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Japanese/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case "한국인":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Korean/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case "Español":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Spanish/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case "हिंदी":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Hindi/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case "Português":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Portuguese/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case "বাংলা":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Bengali/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case "عَرَبِيّ":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Arabic/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case "فارسی":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/Persian/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Flutter%20Developer/English/MHA%20-%20FD%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Full Stack Developer":
                                        ///// ----- >>>>> Switch on Selected Language
                                        switch (systemLanguage) {
                                                // English
                                                case "English":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/English/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case "Deutsch":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/German/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case "中国人":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Chinese/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case "Русский":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Russian/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case "Français":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/French/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case "日本語":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Japanese/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case "한국인":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Korean/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case "Español":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Spanish/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case "हिंदी":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Hindi/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case "Português":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Portuguese/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case "বাংলা":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Bengali/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case "عَرَبِيّ":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Arabic/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case "فارسی":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/Persian/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Full%20Stack%20Developer/English/MHA%20-%20FSD%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Android Developer":
                                        ///// ----- >>>>> Switch on Selected Language
                                        switch (lanauge_show) {
                                                // English
                                                case "English":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/English/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case "Deutsch":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/German/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case "中国人":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Chinese/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case "Русский":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Russian/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case "Français":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/French/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case "日本語":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Japanese/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case "한국인":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Korean/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case "Español":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Spanish/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case "हिंदी":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Hindi/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case "Português":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Portuguese/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case "বাংলা":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Bengali/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case "عَرَبِيّ":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Arabic/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case "فارسی":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/Persian/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Android%20Developer/English/MHA%20-%20AD%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "AI Engineer":
                                        ///// ----- >>>>> Switch on Selected Language
                                        switch (lanauge_show) {
                                                // English
                                                case "English":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/English/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case "Deutsch":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/German/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case "中国人":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Chinese/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case "Русский":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Russian/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case "Français":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/French/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case "日本語":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Japanese/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case "한국인":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Korean/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case "Español":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Spanish/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case "हिंदी":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Hindi/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case "Português":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Portuguese/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case "বাংলা":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Bengali/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case "عَرَبِيّ":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Arabic/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case "فارسی":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/Persian/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/AI%20Engineer/English/MHA%20-%20AE%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Industrial Designer":
                                        ///// ----- >>>>> Switch on Selected Language
                                        switch (lanauge_show) {
                                                // English
                                                case "English":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/English/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case "Deutsch":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/German/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case "中国人":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Chinese/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case "Русский":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Russian/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case "Français":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/French/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case "日本語":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Japanese/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case "한국인":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Korean/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case "Español":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Spanish/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case "हिंदी":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Hindi/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case "Português":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Portuguese/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case "বাংলা":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Bengali/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case "عَرَبِيّ":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Arabic/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case "فارسی":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/Persian/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Industrial%20Designer/English/MHA%20-%20ID%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Self-Driving Automobile Engineer":
                                        ///// ----- >>>>> Switch on Selected Language
                                        switch (lanauge_show) {
                                                // English
                                                case "English":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/English/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case "Deutsch":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/German/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case "中国人":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Chinese/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case "Русский":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Russian/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case "Français":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/French/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case "日本語":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Japanese/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case "한국인":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Korean/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case "Español":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Spanish/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case "हिंदी":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Hindi/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case "Português":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Portuguese/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case "বাংলা":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Bengali/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case "عَرَبِيّ":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Arabic/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case "فارسی":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/Persian/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Self-Driving%20Automobile%20Engineer/English/MHA%20-%20SDAE%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;
                                case "Mechanical Engineer":
                                        ///// ----- >>>>> Switch on Selected Language
                                        switch (lanauge_show) {
                                                // English
                                                case "English":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/English/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // German
                                                case "Deutsch":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/German/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Chinese
                                                case "中国人":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Chinese/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Russian
                                                case "Русский":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Russian/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // French
                                                case "Français":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/French/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Japanese
                                                case "日本語":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Japanese/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Korean
                                                case "한국인":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Korean/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Español
                                                case "Español":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Spanish/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Hindi
                                                case "हिंदी":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Hindi/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Portuguese
                                                case "Português":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Portuguese/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Bangali
                                                case "বাংলা":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Bengali/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Arabic
                                                case "عَرَبِيّ":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Arabic/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Persian
                                                case "فارسی":
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/Persian/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                                // Default is English
                                                default:
                                                        document.getElementById("MuhammadHusainAbootalebi-Download-My-Resume").href = 'https://raw.githubusercontent.com/MohammadHoseinAbootalebi/Resume/476d350b457e073f2b67a381328af17a0625215b/Skill%20Based%20Resumes/Mechanical%20Engineer/English/MHA%20-%20ME%20-%20CV.pdf';
                                                        break;
                                        }
                                        break;

                                default:
                                        break;
                        }

                }

        }
}

// -------------------------------- ↑ Functions ↑ --------------------------------- //

// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©© All Rights are Reserved by Muhammad Husain Abootalebi ©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //