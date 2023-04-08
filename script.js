let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.2266182, lng: 17.6602899 },
    zoom: 18,
  });
}

window.initMap = initMap;




        
var countDownDate = new Date("Jan 01, 2035 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24)/365);
var hours = Math.floor(timeleft / (1000 * 60 * 60 * 24)/365*24);
var minutes = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var seconds = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var sekunde = Math.floor((timeleft % (1000 * 60)) / 1000);
// Result is output to the specific element
document.getElementById("days").innerHTML = days + " Godina&nbsp;"
document.getElementById("hours").innerHTML = hours + " Dana&nbsp;"
document.getElementById("mins").innerHTML = minutes + " Sati&nbsp;" 
document.getElementById("secs").innerHTML = seconds + " Minuta&nbsp;" 
document.getElementById("sekunde").innerHTML = sekunde + " Sekundi&nbsp;" 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);


