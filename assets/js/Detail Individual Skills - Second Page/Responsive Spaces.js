// Function to change the background color of an element based on viewport width
function changeBackgroundOnResize() {
  const specialElement = document.getElementById('contact-me-nav-bar'); // Replace with your actual element ID
  const breakpoint = 768; // Replace with your desired viewport width
  // In Bootstrap Studio, the navbar will toggle to be closed based on the breakpoint classes you apply to the navbar. By default, Bootstrap uses the following breakpoints for its responsive navbar:
  // - Extra small devices (portrait phones, less than 576px): .navbar-expand-xs
  // - Small devices (landscape phones, 576px and up): .navbar-expand-sm
  // - Medium devices (tablets, 768px and up): .navbar-expand-md
  // - Large devices (desktops, 992px and up): .navbar-expand-lg
  // - Extra large devices (large desktops, 1200px and up): .navbar-expand-xl
  // For example, if you use .navbar-expand-md, the navbar will be expanded on medium devices or wider (768px and up), and it will toggle to be closed on smaller viewports. If you need a custom breakpoint, you can use media queries to adjust the behavior according to your requirements.

  if (window.innerWidth < breakpoint) {
    specialElement.style.margin = '2vw 0px 0px 0px'; // Replace with your desired color
  } else {
    specialElement.style.margin = '0px 0px 0px 0px'; // Resets to default background
  }
}

// Add event listener for the window resize event
window.addEventListener('resize', changeBackgroundOnResize);

// Call the function on initial load
changeBackgroundOnResize();