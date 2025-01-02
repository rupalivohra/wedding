document.addEventListener('DOMContentLoaded', function () {
    var weddingDay = new Date("2025-08-30T17:00:00-07:00").getTime();
    var now = new Date().getTime(); // ms
    var distance = weddingDay - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Display the result in the element with id="demo"
    if (days > 0) {
        document.getElementById("countdown").innerHTML = days + " Days to go!";
    }
    else if (days === 0) {
        document.getElementById("countdown").innerHTML = "Today's the day! 🤵🏻💍👰🏽‍♀️";
    } else {
        document.getElementById("countdown").innerHTML = "Thanks for coming to our big day &#128513;";
    }
});