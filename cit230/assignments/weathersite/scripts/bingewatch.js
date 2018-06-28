var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var towndata = request.response;
    populateHeader(towndata);
    showData(towndata);
}

function populateHeader(jsonObj) {
    var myH3 = document.createElement('h3');
    myH3.textContent = jsonObj['name'];
    header.appendChild(myH3);
