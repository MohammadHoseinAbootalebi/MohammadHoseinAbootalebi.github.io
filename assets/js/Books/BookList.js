// --------------------- ↓ Static Informations for Individual Skills Page ↓ ---------------------

var BoldFirstHeireachyFont = {
    // English
    'English': {
        'DownloadMyResumeButtonTopNavigationBar': 'Download My Resume',
        'HomeButtonLinkTopNavigationBar': 'Home',
        'fontFamily': "'Lilita One', serif",
    },
    // German
    'Deutsch': {
        'DownloadMyResumeButtonTopNavigationBar': 'Laden Sie meinen Lebenslauf herunter',
        'HomeButtonLinkTopNavigationBar': 'Heim',
        'fontFamily': "'Lilita One', serif",
    },
    // Chinese
    '中国人': {
        'DownloadMyResumeButtonTopNavigationBar': '下载我的简历',
        'HomeButtonLinkTopNavigationBar': '家',
        'fontFamily': "'Ma Shan Zheng', serif",
    },
    // Russian
    'Русский': {
        'DownloadMyResumeButtonTopNavigationBar': 'Скачать мое резюме',
        'HomeButtonLinkTopNavigationBar': 'Дом',
        'fontFamily': "'Lilita One', serif",
    },
    // French
    'Français': {
        'DownloadMyResumeButtonTopNavigationBar': 'Télécharger mon CV',
        'HomeButtonLinkTopNavigationBar': 'Maison',
        'fontFamily': "'Lilita One', serif",
    },
    // Japanese
    '日本語': {
        'DownloadMyResumeButtonTopNavigationBar': '履歴書をダウンロード',
        'HomeButtonLinkTopNavigationBar': '家',
        'fontFamily': "'Dela Gothic One', serif",
    },
    // Korean
    '한국인': {
        'DownloadMyResumeButtonTopNavigationBar': '내 이력서 다운로드',
        'HomeButtonLinkTopNavigationBar': '집',
        'fontFamily': "'Black Han Sans'",
    },
    // Spanish
    'Español': {
        'DownloadMyResumeButtonTopNavigationBar': 'Descargar mi currículum',
        'HomeButtonLinkTopNavigationBar': 'Hogar',
        'fontFamily': "'Lilita One', serif",
    },
    // Hindi
    'हिंदी': {
        'DownloadMyResumeButtonTopNavigationBar': 'मेरा बायोडाटा डाउनलोड करें',
        'HomeButtonLinkTopNavigationBar': 'घर',
        'fontFamily': "'Lilita One', serif",
    },
    // Portuguese
    'Português': {
        'DownloadMyResumeButtonTopNavigationBar': 'Baixe meu currículo',
        'HomeButtonLinkTopNavigationBar': 'Lar',
        'fontFamily': "'Lilita One', serif",
    },
    // Bengali
    'বাংলা': {
        'DownloadMyResumeButtonTopNavigationBar': 'আমার জীবনবৃত্তান্ত ডাউনলোড করুন',
        'HomeButtonLinkTopNavigationBar': 'বাড়ি',
        'fontFamily': "'Galada', serif",
    },
    // Arabic
    'عَرَبِيّ': {
        'DownloadMyResumeButtonTopNavigationBar': 'تحميل سيرتي الذاتية',
        'HomeButtonLinkTopNavigationBar': 'بيت',
        'fontFamily': "'Lalezar', serif",
    },
    // Persian
    'فارسی': {
        'DownloadMyResumeButtonTopNavigationBar': 'دانلود رزومه من',
        'HomeButtonLinkTopNavigationBar': 'صفحه اصلی',
        'fontFamily': "'Lalezar', serif",
    },
};

// --------------------- ↑ Static Informations for Individual Skills Page ↑ ---------------------

// ---------------------------------------- ↓ Functions ↓ ----------------------------------------

// Documentation
// This function will be used to make the page responsive
function ResponsiveAdaptive() {
    if (window.innerWidth >= 1300) {

    } else if ((window.innerWidth < 1300) && (window.innerWidth >= 1200)) {

    } else if ((window.innerWidth < 1200) && (window.innerWidth >= 1100)) {

    } else if ((window.innerWidth < 1100) && (window.innerWidth >= 1000)) {

    } else if ((window.innerWidth < 1000) && (window.innerWidth >= 900)) {

    } else if ((window.innerWidth < 900) && (window.innerWidth >= 800)) {

    } else if ((window.innerWidth < 800) && (window.innerWidth >= 700)) {

    } else if ((window.innerWidth < 700) && (window.innerWidth >= 600)) {

    } else if ((window.innerWidth < 600) && (window.innerWidth >= 500)) {

    } else if ((window.innerWidth < 500) && (window.innerWidth >= 400)) {

    } else if ((window.innerWidth < 400) && (window.innerWidth >= 300)) {

    } else if ((window.innerWidth < 300) && (window.innerWidth >= 200)) {

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
// This Function is used to stylize the current selected drop down
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

        // ---------------------------------------- ↓ Changing the Properties Based on the Language ↓ ----------------------------------------

        // Top Nav Bar
        // - > Home Link
        document.getElementById('Home-button-link-to-go-to-the-first-pagea').textContent = BoldFirstHeireachyFont[newLanguage]['HomeButtonLinkTopNavigationBar'];
        document.getElementById('Home-button-link-to-go-to-the-first-pagea').style.fontFamily = BoldFirstHeireachyFont[newLanguage]['fontFamily'];
        // - > Download My Resume Link
        document.getElementById('download-my-resume-pdf-id-tag-button-link').textContent = BoldFirstHeireachyFont[newLanguage]['DownloadMyResumeButtonTopNavigationBar'];
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.fontFamily = BoldFirstHeireachyFont[newLanguage]['fontFamily'];

        // ------- ↓ Changing the current drop down value ↓ -------
        // changing the current selected language
        // Listen to changing the language of the page
        var dropdownToggle = document.getElementById('ForToggling'); // Get the dropdown toggle button by its ID
        dropdownToggle.innerHTML = '';
        var languageIcon = document.createElement('i');
        languageIcon.className = "material-icons d-xxl-flex justify-content-xxl-center align-items-xxl-center";
        languageIcon.textContent = 'language';
        document.getElementById("ForToggling").appendChild(languageIcon);
        var wrapper = document.createElement('span');
        wrapper.className = "d-flex d-xxl-flex align-items-center align-items-xxl-center";
        wrapper.appendChild(languageIcon);
        var textContent = document.createTextNode(newLanguage);
        wrapper.appendChild(textContent);
        dropdownToggle.innerHTML = '';
        dropdownToggle.appendChild(wrapper);
        dropdownToggle.style.fontFamily = BoldFirstHeireachyFont[newLanguage]['fontFamily'];
        // ------- ↑ Changing the current drop down value ↑ -------

        // ---------------------------------------- ↓ Changing the Properties Based on the Language ↓ ----------------------------------------

    },

    // ---------------------------------------- ↑ Language Set and Get ↑ ----------------------------------------


    // ---------------------------------------- ↓ Skill Set and Get ↓ ----------------------------------------
    
    get CurrentSkillSelectedMethod() {
        return this.Currrent_Skill_Selected;
    },

    set CurrentSkillSelectedMethod(newSkill) {
        
        // Saving the current Skill
        this.Currrent_Skill_Selected = newSkill;

        // ---------------------------------------- ↓ Changing the Properties Based on the Skill ↓ ----------------------------------------

        // Webpage title
        document.title = "MHA - " + newSkill;

        // ------- ↓ Changing the current drop down value ↓ -------
        var dropdownToggle = document.getElementById('DropDownValueShowingSkills'); // Get the dropdown toggle link by its ID

        // Setting the current style of option of skill
        stylingCurrentSelectedOptionInDropDown('skillssss-drop-down-opened-to-style', neededProperties.Currrent_Skill_Selected);
        stylingCurrentSelectedOptionInDropDown('languagesssss-drop-down-menu-items', neededProperties.Currrent_Language_Selected);

        dropdownToggle.textContent = newSkill; // Set the new value as the dropdown toggle text
        // ------- ↑ Changing the current drop down value ↑ -------

        // ---------------------------------------- ↓ Changing the Properties Based on the Skill ↓ ----------------------------------------

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

document.addEventListener("DOMContentLoaded", function () {
    // Loading The Nav Bar
    if (window.innerWidth < 768) {
        // Navigation Bar
        // - > Opacity of Toggle
        // document.getElementById('navcol-1').style.opacity = "1";
        // - > Making the Nab Bar Sticky
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md bg-body shadow-lg py-3";
    } else {
        // Navigation Bar
        // - > Opacity of Toggle
        document.getElementById('navcol-1').style.opacity = "1";
        // - > Making the Nab Bar Sticky
        document.getElementById('top-navigation-bar-individual-bar').className = "navbar navbar-expand-md fixed-top bg-body shadow-lg py-3";
    }

    // Calling the Responsive Function
    ResponsiveAdaptive();
});

// ---------------------------------------- ↑ DOM Content Loading ↑ ----------------------------------------

// --------------------- ↓ Togging the Drop Down to Being Smooth ↓ ---------------------
function toggleDropdown(nameOfEleemnt) {
    var content = document.getElementById(nameOfEleemnt);
    content.classList.toggle("show");
}

function closeDropdownOnClickOutside(event, elementNamedropDown, DropDownToggleName) {
    var dropdown = document.getElementById(elementNamedropDown);
    var dropdownToggle = document.getElementById(DropDownToggleName);

    // If the clicked target is not the dropdown or its children
    if (!dropdown.contains(event.target) && event.target !== dropdownToggle) {
        dropdown.classList.remove('show');
    }
}

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
