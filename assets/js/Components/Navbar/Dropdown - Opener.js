// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©© All Rights are Reserved by Muhammad Husain Abootalebi ©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //

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
/// --- >>> Language Dropdown
document.getElementById("MuhammadHusainAbootalebi-Language-DropDown_Link").addEventListener("click", function () {
    toggleDropdown("Main-Intro-language-individual-skills-drop-down-change-languages");
});
document.addEventListener('click', function () {
    closeDropdownOnClickOutside(event, 'Main-Intro-language-individual-skills-drop-down-change-languages', 'MuhammadHusainAbootalebi-Language-DropDown_Link');
});

/// --- >>> Skill Dropdown
document.getElementById("MuhammadHusainAbootalebi-Skills-DropDown_Link").addEventListener("click", function () {
    toggleDropdown("Main-Intro-Skills-Drop-Down-top-nav-bar");
});
document.addEventListener('click', function () {
    closeDropdownOnClickOutside(event, 'Main-Intro-Skills-Drop-Down-top-nav-bar', 'MuhammadHusainAbootalebi-Skills-DropDown_Link');
});

/// --- >>> Section Dropdown
document.getElementById("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Link").addEventListener("click", function () {
    toggleDropdown("MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown");
});
document.addEventListener('click', function () {
    closeDropdownOnClickOutside(event, 'MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown', 'MuhammadHusainAbootalebi-Navbar-Projects-Books-Courses_Dropdown_Link');
});

// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©© All Rights are Reserved by Muhammad Husain Abootalebi ©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //
// ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© //