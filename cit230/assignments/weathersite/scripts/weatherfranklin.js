var weatherObj = new XMLHttpRequest();

weatherObj.open('GET','//api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=80bae3c6d159f5eaae15505eaf3b3d55&units=imperial', true)
weatherObj.responseType = 'json';
weatherObj.send();

weatherObj.onload = function() {
    var weatherInfo = JSON.parse(weatherObj.responseText);

    console.log(weatherInfo);

    document.getElementById('highTemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowTemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('Current').innerHTML = weatherInfo.main.temp;
    var weatherIconCode = weatherInfo.weather["0"].icon;
    var iconPath = "//openweathermap.org/img/w/" + weatherIconCode + ".png";
    document.getElementById('weatherIcon').src = iconPath;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

}



