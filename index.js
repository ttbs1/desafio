// Set the date we're counting down to 
var aux = new Date();
var countDownDate = new Date();
//countDownDate.setMinutes(aux.getMinutes() + totalTime);
var totalTime = parseInt(sessionStorage.getItem("timeRemaining"));
if (isNaN(totalTime)) totalTime = 6600;

totalTime = 6600; //REMOVER DEPOIS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
countDownDate.setSeconds(aux.getSeconds() + totalTime);
countDownDate = countDownDate.getTime();
//var countDownDate = new Date("April 25, 2023 12:00:00").getTime();
// Update the count down every 1 second 
var x = setInterval(function () { // Get todays date and time 
    var now = new Date().getTime();
    // Find the distance between now an the count down date 
    var distance = countDownDate - now;
    totalTime--;
    if (totalTime <= 6600) { //5700 o correto - 6600 pra liberar insta
        var hide = document.getElementsByClassName("hide");
        for (let i = 0; i < hide.length; i++) {
            hide[i].classList.remove("hide");
        }
    }

    sessionStorage.setItem("timeRemaining", totalTime);
    // Time calculations for days, hours, minutes and seconds 
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) hours = "0" + hours;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) minutes = "0" + minutes;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) seconds = "0" + seconds;
    // Display the result in the element with id="demo" 
    document.getElementById("dday").innerHTML = "<div><span>O valor promocional encerra automaticamente em:</span></div>" + hours + ":" + minutes + ":" + seconds;
    // If the count down is finished, write some text 
    if (distance < 0) { clearInterval(x); document.getElementById("dday").innerHTML = "<div><span>Tempo esgotado! Ao fechar a página, a oferta promocional termina.</span></div>00:00:00"; }
}, 1000);

$(document).ready(function () {
    $('.play-video').click(function () {
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });

    $('.pause-video').click(function () {
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
});

const exampleEl = document.getElementById('popover')
const popover = new bootstrap.Popover(exampleEl, options)

function play () {
    document.getElementById("play-video").click()
}