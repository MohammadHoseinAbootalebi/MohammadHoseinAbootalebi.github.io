var downloadMyResumeTranslations = {
    'English': {
        'text': 'Download My Resume',
        'fontFamily': "'Lilita One', serif",
    },
    'Deutsch': {
        'text': 'Laden Sie meinen Lebenslauf herunter',
        'fontFamily': "'Lilita One', serif",
    },
    '中国人': {
        'text': '下载我的简历',
        'fontFamily': "'Ma Shan Zheng', serif",
    },
    'Русский': {
        'text': 'Скачать мое резюме',
        'fontFamily': "'Lilita One', serif",
    },
    'Français': {
        'text': 'Télécharger mon CV',
        'fontFamily': "'Lilita One', serif",
    },
    '日本語': {
        'text': '履歴書をダウンロード',
        'fontFamily': "'Dela Gothic One', serif",
    },
    '한국인': {
        'text': '내 이력서 다운로드',
        'fontFamily': "'Black Han Sans', serif",
    },
    'Español': {
        'text': 'Descargar mi currículum',
        'fontFamily': "'Lilita One', serif",
    },
    'हिंदी': {
        'text': 'मेरा बायोडाटा डाउनलोड करें',
        'fontFamily': "'Lilita One', serif",
    },
    'Português': {
        'text': 'Baixe meu currículo',
        'fontFamily': "'Lilita One', serif",
    },
    'বাংলা': {
        'text': 'আমার জীবনবৃত্তান্ত ডাউনলোড করুন',
        'fontFamily': "'Galada', serif",
    },
    'عَرَبِيّ': {
        'text': 'تحميل سيرتي الذاتية',
        'fontFamily': "'Lalezar', serif",
    },
    'فارسی': {
        'text': 'دانلود رزومه من',
        'fontFamily': "'A Titraj 1'",
    },
};

// Needed Properties that help the main functionality based on them
var neededProperties = {
    // Needed Properties
    _current_selected_language: '',

    get currentSelectedLanguage() {
        return this._current_selected_language;
    },

    set currentSelectedLanguage(newLanguage) {

        // ---------------------------- ↓ Translations ↓ ----------------------------
        // Download My Resume button
        document.getElementById('download-my-resume-pdf-id-tag-button-link').textContent = downloadMyResumeTranslations[newLanguage]['text'];
        document.getElementById('download-my-resume-pdf-id-tag-button-link').style.fontFamily = downloadMyResumeTranslations[newLanguage]['fontFamily'];
        // ----------------------------↑ Translations ↑ ----------------------------

        // ---------------------------- ↓ Customization ↓ ----------------------------
        // Currently selected language for drop down styling
        stylingCurrentSelectedOptionInDropDown('languagesssss-drop-down-menu-items', newLanguage);

        // ----------------------------↑ Customization ↑ ----------------------------

        // ---------------------------- ↓ Customization ↓ ----------------------------
        // Skills Drop Down Routings
        var skilDropDownElm = document.querySelectorAll('#' + 'skillssss-drop-down-opened-to-style' + ' .dropdown-item');

        skilDropDownElm.forEach(function (item) {
            item.href = "DetailScreen/DetailSkillsIndividuals.html?direction=" + encodeURIComponent(item.textContent) + "&language=" + encodeURI(newLanguage);
        });
        // ----------------------------↑ Customization ↑ ----------------------------

        return this._current_selected_language = newLanguage;
    }
};

// DOM Contents Loading to be in the language of the browser
document.addEventListener("DOMContentLoaded", function () {
    // Download My Resume button
    document.getElementById('download-my-resume-pdf-id-tag-button-link').textContent = downloadMyResumeTranslations[neededProperties._current_selected_language]['text'];

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
            dropdownToggle.style.fontFamily = downloadMyResumeTranslations[this.textContent]['fontFamily'];
            // document.getElementById("ForToggling").textContent = this.textContent;
            neededProperties.currentSelectedLanguage = this.textContent;
        });
    });
});

// --------------------- ↓ Selecting the Browser language as the based selected language ↓ ---------------------
var systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

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
// --------------------- ↑ Selecting the Browser language as the based selected language ↑ ---------------------

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
    toggleDropdown("Main-Intro-Skills-Drop-Down-top-nav-bar");
});
document.addEventListener('click', function () {
    closeDropdownOnClickOutside(event, 'Main-Intro-Skills-Drop-Down-top-nav-bar', 'DropDownValueShowingSkills');
});

// --------------------- ↑ Togging the Drop Down to Being Smooth ↑ ---------------------

// ----------------------- ↓ Functions ↓ --------------------------------
function stylingCurrentSelectedOptionInDropDown(dropDownNameID, toCompareArugument) {
    var dropdownItems = document.querySelectorAll('#' + dropDownNameID + ' .dropdown-item');

    dropdownItems.forEach(function(item) {
        if (item.textContent == toCompareArugument) {
            item.style = "font-family: Roboto, sans-serif;font-size: 80%;font-weight: bold;color: rgb(252,163,17);";
        } else {
            item.style = "font-family: Roboto, sans-serif;font-size: 80%;";
        }
    });
}
// ----------------------- ↑ Functions ↑ --------------------------------