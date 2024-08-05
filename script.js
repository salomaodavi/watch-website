var countDownDate = new Date("Oct 01, 2024 00:00:00").getTime();
var x = sentInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var Seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
    document.getElementById("Hours").innerHTML = Hours
    document.getElementById("Minutes").innerHTML = Minutes
    document.getElementById("Seconds").innerHTML = Seconds


},1000);