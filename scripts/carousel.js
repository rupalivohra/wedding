let eventIndex = 1;
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
        dots[i].className = dots[i].className.replace(" active", "");
    }
    events[eventIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[eventIndex - 1].className += " active";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let eventIndex = 1;
    showEvents(eventIndex);
});