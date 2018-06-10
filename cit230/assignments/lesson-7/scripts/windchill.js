var t = 24;
var s = 20;
var f = 35.74 + .6215 * t - 35.75 * Math.pow(s,0.16) + .5275 * t * Math.pow(s,0.16);
document.getElementById("windSpeed").innerHTML = s;
document.getElementById("temp").innerHTML = t;
document.getElementById("windChill").innerHTML = f.toFixed(2);

