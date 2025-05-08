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
        if (item.id === 'events_link') return;

        item.addEventListener('click', function () {
            // Close the menu when a link is clicked
            if (navbarLinks) {
                navbarLinks.classList.remove('active');
            }
        });
    });
});

function onClickNavBarEventsSubMenu() {
    const popup = document.getElementById('event-submenu');
    const navbarLinks = document.getElementById('navbar-links');

    const shouldShow = popup.style.display !== 'flex';

    popup.style.display = shouldShow ? 'flex' : 'none';

    // Close hamburger menu if we're hiding the submenu
    if (!shouldShow && navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
    }
}

// Handle specific event selection
function handleEventSelection(eventIndex) {
    currentEvent(eventIndex); // go to correct carousel slide
    document.getElementById('event-submenu').style.display = 'none';

    document.getElementById('events').scrollIntoView({ behavior: 'instant' });
    // Update the URL hash to #events
    location.hash = '#events';

    // Close navbar if on mobile
    document.getElementById('navbar-links').classList.remove('active');
}

// Hide the popup if clicking outside of it
document.addEventListener('click', function (event) {
    const popup = document.getElementById('event-submenu');
    const navItem = document.getElementById('nav_events');
    if (!popup.contains(event.target) && !navItem.contains(event.target)) {
        popup.style.display = 'none';
    }
});