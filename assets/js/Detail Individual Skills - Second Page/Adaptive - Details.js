function updateHeaderText() {
    var selectedValue = document.getElementById('Skills-Drop-Down').value;
    var header = document.getElementById('myHeader');
    header.textContent = selectedValue; // Change the header text to the selected dropdown value
}

// --------------------- ↓ Changing the Value of Skills Drop Down ↓ ---------------------
// Assuming you have a dropdown with an id of 'myDropdown' and links inside the dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown element
    var dropdown = document.getElementById('Skills-Drop-Down');

    // Get all the links within the dropdown
    var dropdownLinks = dropdown.querySelectorAll('.nav-link a');

    // Add click event listeners to each link
    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Set the dropdown button's display text to the text of the clicked link
            dropdown.querySelector('DropDownValueShowing').textContent = this.textContent;

            // If you also want to change the value of the dropdown, you can set it here
            // dropdown.value = this.getAttribute('data-value');
        });
    });
});
// --------------------- ↑ Changing the Value of Skills Drop Down ↑ ---------------------