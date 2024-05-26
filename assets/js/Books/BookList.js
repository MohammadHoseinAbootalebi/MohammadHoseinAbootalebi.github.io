

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

// ---------------------------------------- ↑ Functions ↑ ----------------------------------------

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
