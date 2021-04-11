function openBar()
{
    document.getElementById('nav').style.height='50vh'
    document.getElementById('open-btn').style.display='none'
    document.getElementById('close-btn').style.display='inline'
    document.getElementById("header").style.backgroundColor='black';
}
function closeBar()
{
    document.getElementById('nav').style.height='0vh'
    document.getElementById('open-btn').style.display='inline'
    document.getElementById('close-btn').style.display='none'
    document.getElementById("header").style.backgroundColor='rgba(0, 0, 0, 0.500)';
}

var countDownDate = new Date("Nov 22, 2022 12:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("clock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "LAUNCHED";
    }
}, 1000);

