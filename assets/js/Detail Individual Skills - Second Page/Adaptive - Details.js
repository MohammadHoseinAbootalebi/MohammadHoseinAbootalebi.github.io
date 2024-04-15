var current_skill_selected = "";
var current_show_language = "";

// --------------------- ↓ Global Functions ↓ ---------------------

// Function to change the background color of an element based on viewport width
function changeBackgroundOnResizeIndividualSkillPage(PassedImageIndividualImageFirstView) {
    // Defining the elements to be changed based on the resize
    const ImageOfBackgroundFirstViewIndividualSkillView = document.getElementById('detail-introduction-first-screen'); // Replace with your actual element ID

    // 
    const breakpoint = 1000; // Replace with your desired viewport width

    if (window.innerWidth < breakpoint) {
        ImageOfBackgroundFirstViewIndividualSkillView.style.background = 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgb(0,0,0) 35%, #000000 57%, rgba(255,255,255,0)), url("/assets/img/Detail Skills Page - Second Page/Perfect Shape Triangles.svg") -20vh -20vw / contain no-repeat'; // Replace with your desired color
    } else {
        ImageOfBackgroundFirstViewIndividualSkillView.style.background = 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgb(0,0,0) 35%, #000000 57%, rgba(255,255,255,0)), url("/assets/img/Detail Skills Page - Second Page/Perfect Shape Triangles.svg") -30vh -28vh / contain no-repeat' + PassedImageIndividualImageFirstView; // Resets to default background
    }
}

// Function for margin settings for elements
function marginSettingsForPassedElementsBasedOnViewPortSize(element, marginSettingsForSmallScreen, marginSettingsForLargeScreen) {

    const threshold = 768; // the maximum threshold for making adaptive settings for small screens

    // Notes:
    // In Bootstrap Studio, the navbar will toggle to be closed based on the breakpoint classes you apply to the navbar. By default, Bootstrap uses the following breakpoints for its responsive navbar:
    // - Extra small devices (portrait phones, less than 576px): .navbar-expand-xs
    // - Small devices (landscape phones, 576px and up): .navbar-expand-sm
    // - Medium devices (tablets, 768px and up): .navbar-expand-md
    // - Large devices (desktops, 992px and up): .navbar-expand-lg
    // - Extra large devices (large desktops, 1200px and up): .navbar-expand-xl
    // For example, if you use .navbar-expand-md, the navbar will be expanded on medium devices or wider (768px and up), and it will toggle to be closed on smaller viewports. If you need a custom breakpoint, you can use media queries to adjust the behavior according to your requirements.

    if (window.innerWidth < threshold) {
        element.style.margin = marginSettingsForSmallScreen; // Replace with your desired color
    } else {
        element.style.margin = marginSettingsForLargeScreen; // Resets to default background
    }
}

// function for setting the opacity based on the viewport size
function settingOpacityForPassedElementsBasedOnViewPortSize(element, opacityForSmallScreen, opacityForLargeScreen) {

    const threshold = 970; // the maximum threshold for making adaptive settings for small screens

    // Notes:
    // In Bootstrap Studio, the navbar will toggle to be closed based on the breakpoint classes you apply to the navbar. By default, Bootstrap uses the following breakpoints for its responsive navbar:
    // - Extra small devices (portrait phones, less than 576px): .navbar-expand-xs
    // - Small devices (landscape phones, 576px and up): .navbar-expand-sm
    // - Medium devices (tablets, 768px and up): .navbar-expand-md
    // - Large devices (desktops, 992px and up): .navbar-expand-lg
    // - Extra large devices (large desktops, 1200px and up): .navbar-expand-xl
    // For example, if you use .navbar-expand-md, the navbar will be expanded on medium devices or wider (768px and up), and it will toggle to be closed on smaller viewports. If you need a custom breakpoint, you can use media queries to adjust the behavior according to your requirements.

    // Mouse Scroll Animation - Introdction
    if (window.innerWidth < threshold) {
        element.style.opacity = opacityForSmallScreen; // Replace with your desired color
    } else {
        element.style.opacity = opacityForLargeScreen; // Resets to default background
    }
}

// Function to get URL parameters
function getQueryParam(param) {
    var searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
}

// --------------------- ↑ Global Functions ↑ ---------------------

// --------------------- ↓ Getting the current or passed lanauge ↓ ---------------------

// Get the 'language' parameter from the URL
var lanauge_show = getQueryParam('language');

// If the lanauge_show is not null, update the header element
if (lanauge_show) {
    current_show_language = decodeURIComponent(lanauge_show);
}
// --------------------- ↑ Getting the current or passed lanauge ↑ ---------------------

// --------------------- ↓ Getting Previous Clicked Skill ↓ ---------------------

// Get the 'header' parameter from the URL
var headerText = getQueryParam('direction');

// If the headerText is not null, update the header element
if (headerText) {
    document.getElementById('first-view-header-introduction-skill-individual-skill-name').textContent = decodeURIComponent(headerText);
    current_skill_selected = decodeURIComponent(headerText);
}
// --------------------- ↑ Getting Previous Clicked Skill ↑ ---------------------

// --------------------- ↓ Changing the Value of Skills Drop Down ↓ ---------------------
document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown toggle button by its ID
    var dropdownToggle = document.getElementById('DropDownValueShowing');

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

            // Update the dropdown toggle button text with the clicked item's text
            dropdownToggle.textContent = this.textContent;
            current_skill_selected = this.textContent;

            // Close the dropdown menu by removing 'show' class from the 'dropdown-menu' and 'dropdown'
            var dropdownElement = this.closest('.dropdown');
            if (dropdownElement) {
                var dropdownMenu = dropdownElement.querySelector('.dropdown-menu');
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                    dropdownElement.classList.remove('show');
                }
            }
        });
    });
});
// --------------------- ↑ Changing the Value of Skills Drop Down ↑ ---------------------

// --------------------- ↓ Customizing the whole individual skill introduction based on previous link passed ↓ ---------------------
// ------------- ↓ Skill Name : UI & UX Designer | Language : English ↓ -------------
if ((current_skill_selected == "UI & UX Designer") && (current_show_language == "English")) {

    // ------- ↓ Changing the current drop down value ↓ -------
    var dropdownToggle = document.getElementById('DropDownValueShowing'); // Get the dropdown toggle link by its ID

    dropdownToggle.textContent = current_skill_selected; // Set the new value as the dropdown toggle text
    // ------- ↑ Changing the current drop down value ↑ -------

    // ------- ↓ Changing the main text of individual skill table of content ↓ -------

    var mainIndividualSkillparagraph = document.getElementById('MainTextIndividualSkillParagraphIntroduction'); // Get the dropdown toggle link by its ID

    mainIndividualSkillparagraph.textContent = "As a Senior UI/UX Designer, I specialize in creating intuitive and engaging user interfaces that enhance user satisfaction. My approach integrates user research, design psychology, and the latest design trends to produce innovative and accessible designs. With a strong portfolio of successful projects, I have a proven ability to deliver designs that are not only aesthetically pleasing but also functionality seamless, resulting in improved user experiences and business outcomes."; // Set the new value as the dropdown toggle text

    window.addEventListener('resize', function () {

        if (this.window.innerWidth < 972) {
            this.document.getElementById('main-detail-paragraph-individual-skill-page').style.width = '50%';
            mainIndividualSkillparagraph.style.fontSize = '2vmin';
        } else if (this.window.innerWidth < 768) {
            this.document.getElementById('main-detail-paragraph-individual-skill-page').style.width = '60%';
            mainIndividualSkillparagraph.style.fontSize = '3vmin';
        }
        else {
            this.document.getElementById('main-detail-paragraph-individual-skill-page').style.width = '50vw';
            mainIndividualSkillparagraph.style.fontSize = '3vmin';
        }
    });

    // ------- ↑ Changing the main text of individual skill table of content ↑ -------

    // ------- ↓ Changing the first view individual skiil table of content ↓ -------
    var passedImage_local = ', url("/assets/img/Detail Skills Page - Second Page/UI - UX Designer.jpg") right / contain no-repeat'; // UI & UX Designer Image

    console.log(passedImage_local);

    window.addEventListener('resize', function () {
        changeBackgroundOnResizeIndividualSkillPage(passedImage_local); // Add event listener for the window resize event
    });

    changeBackgroundOnResizeIndividualSkillPage(passedImage_local); // Call the function on initial load
    // ------- ↑ Changing the first view individual skiil table of content ↑ -------

    // ------- ↓ Showing or not showing the mouse scroll animation in Individual Skill Page ↓ -------

    // variables
    var button_contact_me_id = document.getElementById('contact-me-nav-bar');
    var button_contact_me_margin_small_screen = '2vw 0px 0px 0px';
    var button_contact_me_margin_large_screen = '0px 0px 0px 0px';

    var mouse_animation_opacity_id = document.getElementById('scroll-mouse-direction-down-animation-detail-skill-view');
    var mouse_animation_opacity_small_screens = '0';
    var mouse_animation_opacity_large_screens = '1';

    // Add event listener for the window resize event
    window.addEventListener('resize', function () {
        marginSettingsForPassedElementsBasedOnViewPortSize(button_contact_me_id, button_contact_me_margin_small_screen, button_contact_me_margin_large_screen); // calling margin settings for contact me
        settingOpacityForPassedElementsBasedOnViewPortSize(mouse_animation_opacity_id, mouse_animation_opacity_small_screens, mouse_animation_opacity_large_screens); // Changing the opacity of the animation widget
    });

    // Call the function on initial load
    marginSettingsForPassedElementsBasedOnViewPortSize(button_contact_me_id, button_contact_me_margin_small_screen, button_contact_me_margin_large_screen); // calling margin settings for contact me
    settingOpacityForPassedElementsBasedOnViewPortSize(mouse_animation_opacity_id, mouse_animation_opacity_small_screens, mouse_animation_opacity_large_screens); // Changing the opacity of the animation widget

    // ------- ↑ Showing or not showing the mouse scroll animation in Individual Skill Page ↑ -------
}
// ------------- ↑ Skill Name : UI & UX Designer | Language : English ↑ -------------

// ------------- ↓ Skill Name : UI & UX Designer | Language : Deutsch ↓ -------------

// ------------- ↑ Skill Name : UI & UX Designer | Language : Deutsch ↑ -------------

// --------------------- ↑ Customizing the whole individual skill introduction based on previous link passed ↑ ---------------------


