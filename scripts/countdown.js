document.addEventListener('DOMContentLoaded', function () {
    var weddingDay = new Date("2025-08-30T17:00:00-08:00");
    var now = new Date();

    var distance = weddingDay.getTime() - now.getTime();
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var countdownElement = document.getElementById("countdown");

    // Event Reminders
    var dayAfterWedding = new Date(weddingDay);
    dayAfterWedding.setDate(weddingDay.getDate() + 1);

    var afterWeddingCutoff = new Date(dayAfterWedding);
    afterWeddingCutoff.setHours(13, 0, 0, 0); // 1 PM on the day after the wedding

    if (now.toDateString() === dayAfterWedding.toDateString()) {
        // If it's the day after the wedding but before 1 PM, show the brunch reminder
        if (now < afterWeddingCutoff) {
            countdownElement.innerHTML = "Thanks for coming out last night. See you at brunch (pajamas welcome)!";
        } else {
            countdownElement.innerHTML = "Thanks for coming to our big day! 😁";
        }
    }
    else if (days > 30) {
        // More than a month: Show months + weeks OR months + days
        var months = Math.floor(days / 30);
        var remainingDays = days % 30;

        if (remainingDays === 0) {
            countdownElement.innerHTML = `${months} month${months > 1 ? 's' : ''} to go!`;
        } else if (remainingDays % 7 === 0) {
            var weeks = remainingDays / 7;
            countdownElement.innerHTML = `${months} month${months > 1 ? 's' : ''} and ${weeks} week${weeks > 1 ? 's' : ''} to go!`;
        } else {
            countdownElement.innerHTML = `${months} month${months > 1 ? 's' : ''} and ${remainingDays} day${remainingDays !== 1 ? 's' : ''} to go!`;
        }
    }
    else if (days >= 7) {
        // Less than a month: Show weeks + days
        var weeks = Math.floor(days / 7);
        var remainingDays = days % 7;

        if (remainingDays === 0) {
            countdownElement.innerHTML = `${weeks} week${weeks > 1 ? 's' : ''} to go!`;
        } else {
            countdownElement.zinnerHTML = `${weeks} week${weeks > 1 ? 's' : ''}, ${remainingDays} day${remainingDays !== 1 ? 's' : ''} to go!`;
        }
    }
    else if (days > 1) {
        // Less than a week: Show per-day countdown
        countdownElement.innerHTML = `${days} days to go!`;
    }
    else if (days === 1) {
        countdownElement.innerHTML = "See you at Stoup tonight! 🍻";
    }
    else if (days === 0) {
        countdownElement.innerHTML = "Today's the day! 🤵🏻💍👰🏽‍♀️";
    }
    else {
        countdownElement.innerHTML = "Thanks for coming to our big day! 😁";
    }
});