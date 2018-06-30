var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj){
    var towns = jsonObj['towns'];

    for (var i = 0; i < towns.length; i++){
        if (i == 2) {
            continue;
        }

        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myP1 = document.createElement('p');
        var myP2 = document.createElement('p');
        var myP3 = document.createElement('p');
        var myP4 = document.createElement('p');
        var myP5 = document.createElement('p');
        var myList = document.createElement('ul');
        var myImg = document.createElement('img')

        myH2.textContent = towns[i].name;
        myP1.textContent = 'Motto: ' + towns[i].motto;
        myP2.textContent = 'Founded: ' + towns[i].yearFounded;
        myP3.textContent = 'Population: ' + towns[i].currentPopulation;
        myP4.textContent = 'Rainfall: ' + towns[i].averageRainfall;
        myP5.textContent = 'Event: ';

        var events = towns[i].events;
        for (var j = 0; j < events.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = events[j];
            myList.appendChild(listItem);
        }

        if (towns[i].name == 'Franklin') {
            myImg.src = 'images/franklin.jpg';
        }
        else if (towns[i].name == 'Greenville') {
            myImg.src = 'images/greenville.jpg';
        }
        else {
            myImg.src = 'images/other.jpg';
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myP1);
        myArticle.appendChild(myP2);
        myArticle.appendChild(myP3);
        myArticle.appendChild(myP4);
        myArticle.appendChild(myP5);
        myArticle.appendChild(myList);
        myArticle.appendChild(myImg);

        section.appendChild(myArticle);
    }
}
