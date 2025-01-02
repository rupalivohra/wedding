document.addEventListener('DOMContentLoaded', function () {
    // Get the hamburger button, navbar links, and all navbar items
    var hamburgerButton = document.getElementById('hamburger-btn');
    var navbarLinks = document.getElementById('navbar-links');
    var navItems = document.querySelectorAll('.topnav .nav-item a'); // Select all navbar links
    // Check if both elements exist before adding event listeners
    if (hamburgerButton && navbarLinks) {
        // Toggle menu visibility when hamburger button is clicked
        hamburgerButton.addEventListener('click', function () {
            navbarLinks.classList.toggle('active');
        });
    }
    // Add event listeners to each link inside the navbar
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Close the menu when a link is clicked
            if (navbarLinks) {
                navbarLinks.classList.remove('active');
            }
        });
    });
});