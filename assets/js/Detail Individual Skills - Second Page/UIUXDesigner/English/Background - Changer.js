// Function to change the background color of an element based on viewport width
function changeBackgroundOnResize() {
  const specialElement = document.getElementById('detail-introduction-first-screen-ui-ux-eng'); // Replace with your actual element ID
  const breakpoint = 1000; // Replace with your desired viewport width

  if (window.innerWidth < breakpoint) {
    specialElement.style.background = 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgb(0,0,0) 35%, #000000 57%, rgba(255,255,255,0)), url("/assets/img/Detail Skills Page - Second Page/Perfect Shape Triangles.svg") -20vh -20vw / contain no-repeat'; // Replace with your desired color
  } else {
    specialElement.style.background = 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgb(0,0,0) 35%, #000000 57%, rgba(255,255,255,0)), url("/assets/img/Detail Skills Page - Second Page/Perfect Shape Triangles.svg") -30vh -28vh / contain no-repeat, url("/assets/img/Detail Skills Page - Second Page/UI - UX Designer.jpg") right / contain no-repeat'; // Resets to default background
  }
}

// Add event listener for the window resize event
window.addEventListener('resize', changeBackgroundOnResize);

// Call the function on initial load
changeBackgroundOnResize();
