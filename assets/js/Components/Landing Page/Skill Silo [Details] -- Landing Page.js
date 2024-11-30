// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©© All Rights are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //

// -------------------------------- ↓ Variables ↓ -------------------------------- //

// -- >> Skill Based Styles
var skill_based_styles = {
    "UI & UX Designer": {
        "Skill_Silo_Page_Landing_Page_Skill_Image": "Skills Images/UI - UX Designer.webp",
    },
    "Flutter Developer": {
        "Skill_Silo_Page_Landing_Page_Skill_Image": "Skills Images/Flutter Card.webp",
    },
    "Full Stack Developer": {
        "Skill_Silo_Page_Landing_Page_Skill_Image": "Skills Images/Full Stack Developer.webp",
    },
    "Android Developer": {
        "Skill_Silo_Page_Landing_Page_Skill_Image": "Skills Images/Android Developer.webp",
    },
    "AI Engineer": {
        "Skill_Silo_Page_Landing_Page_Skill_Image": "Skills Images/AI Engineer.webp",
    },
    "Industrial Designer": {
        "Skill_Silo_Page_Landing_Page_Skill_Image": "Skills Images/Industrial Designer.webp",
    },
    "Self-Driving Automobile Engineer": {
        "Skill_Silo_Page_Landing_Page_Skill_Image": "Skills Images/SDC Engineer.webp",
    },
    "Mechanical Engineer": {
        "Skill_Silo_Page_Landing_Page_Skill_Image": "Skills Images/Mechanical Engineer Simulation.webp",
    },
}


// -- >> Needed Properties : Skill and Language
var neededProperties = {

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
            if ((newLanguage != '') && (neededProperties._current_selected_skill != '')) {
                this.call_translate(newLanguage, neededProperties._current_selected_skill);
            }

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
            this.call_translate(neededProperties._current_selected_language, newSkill);

            // -- >> Assign new skill to the current skill
            return this._current_selected_skill = newSkill;
    },

    // -- >> Translate Caller
    call_translate(language = "", skill = "") {

            // -- >> Call translate function
            this.translate(language, skill);

    },

    // -- >> Translations
    translate(language = "English", Skill = "UI & UX Designer") {

            /*
                    This function will be used for translating page contents.
            */

            // -------------------- ↓ Styles ↓ -------------------- //

            document.getElementById("MuhammadHusainAbootalebi-Landing-Page_Background_Skill_Image").src = "assets/img/" + encodeURI(skill_based_styles[Skill]["Skill_Silo_Page_Landing_Page_Skill_Image"]);

            // -------------------- ↑ Styles ↑ -------------------- //
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
                    neededProperties.currentSelectedLanguage = 'English';
                    break;
            // German
            case ('de') || ('de-DE'):
                    neededProperties.currentSelectedLanguage = 'Deutsch';
                    break;
            // Chinese
            case ('zh') || ('zh-CN') || ('zh-TW'):
                    neededProperties.currentSelectedLanguage = '中国人';
                    break;
            // Russian
            case ('ru') || ('ru-RU'):
                    neededProperties.currentSelectedLanguage = 'Русский';
                    break;
            // French
            case ('fr') || ('fr-FR') || ('fr-CA'):
                    neededProperties.currentSelectedLanguage = 'Français';
                    break;
            // Japanese
            case ('ja') || ('ja-JP'):
                    neededProperties.currentSelectedLanguage = '日本語';
                    break;
            // Korean
            case ('ko') || ('ko-KR'):
                    neededProperties.currentSelectedLanguage = '한국인';
                    break;
            // Español
            case ('es') || ('es-ES') || ('es-MX'):
                    neededProperties.currentSelectedLanguage = 'Español';
                    break;
            // Hindi
            case ('hi') || ('hi-IN'):
                    neededProperties.currentSelectedLanguage = 'हिंदी';
                    break;
            // Portuguese
            case ('pt') || ('pt-PT') || ('pt-BR'):
                    neededProperties.currentSelectedLanguage = 'Português';
                    break;
            // Bangali
            case ('bn') || ('bn-BD') || ('bn-IN'):
                    neededProperties.currentSelectedLanguage = 'বাংলা';
                    break;
            // Arabic
            case ('ar') || ('ar-SA') || ('bn-IN') || ('ar-EG'):
                    neededProperties.currentSelectedLanguage = 'عَرَبِيّ';
                    break;
            // Persian
            case ('fa') || ('fa-IR'):
                    neededProperties.currentSelectedLanguage = 'فارسی';
                    break;
            // Default is English
            default:
                    neededProperties.currentSelectedLanguage('English');
                    break;
    }

    // -- >> Call Translate
    neededProperties.call_translate(
            neededProperties.currentSelectedLanguage,
            neededProperties.currentSelectedSkill,
    );
}
// -- >> In case the skill and language are passed
else {
    /// --- >>> Whether the skill or language are PASSED

    /// --- >>> Set the passed skill and language
    neededProperties.currentSelectedLanguage = passed_language;
    neededProperties.currentSelectedSkill = passed_skill;

    /// --- >>> Call Translate
    neededProperties.call_translate(
            neededProperties.currentSelectedLanguage,
            neededProperties.currentSelectedSkill,
    );
}

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

// -------------------------------- ↑ Functions ↑ -------------------------------- //

// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©© All Rights are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //