let eventIndex = 2;
showEvents(eventIndex);

// Next/previous controls
function plusEvents(n) {
    showEvents(eventIndex += n);
}

// Thumbnail image controls
function currentEvent(n) {
    showEvents(eventIndex = n);
}

function showEvents(n) {
    let i;
    let events = document.getElementsByClassName("events");
    let dots = document.getElementsByClassName("dot");
    if (n > events.length) { eventIndex = 1 }
    if (n < 1) { eventIndex = events.length }
    for (i = 0; i < events.length; i++) {
        events[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    events[eventIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[eventIndex - 1].className += " dot-active";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    const swipeThreshold = 60; // Minimum distance to count as a swipe
    const verticalThreshold = 50; // Ignore swipes if too vertical
    const carousel = document.getElementById("events"); // Target the whole section

    carousel.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY; // Capture Y position to detect vertical motion
    });

    carousel.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;

        handleSwipe();
    });

    function handleSwipe() {
        let deltaX = endX - startX;
        let deltaY = Math.abs(endY - startY); // Absolute value to check vertical movement

        // Ignore swipes that are too vertical
        if (deltaY > verticalThreshold) {
            console.debug("Ignored: Too much vertical movement");
            return;
        }

        // Only trigger swipe if horizontal movement is significant
        if (deltaX > swipeThreshold) {
            plusEvents(-1); // Go to previous slide
        } else if (deltaX < -swipeThreshold) {
            plusEvents(1); // Go to next slide
        } else {
            console.debug("Ignored: Swipe too short");
        }
    }
});