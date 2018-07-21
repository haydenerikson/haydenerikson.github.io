var table = document.querySelector('table');
var requestURL = '//haydenerikson.github.io/cit230/assignments/lesson-12/data/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var serviceInfo = request.response;
    showServices(serviceInfo);
}

function showServices(jsonObj) {
    var services = jsonObj['services'];

    for (var i = 0; i < services.length; i++) {

        var row = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        if(i == 0){
            row.className = "r2"
        }
        else if(i == 1){
            row.className = "r3"
        }
        else if(i == 2){
            row.className = "r4"
        }
        td1.className = "t1";
        td2.className = "t2";

        td1.textContent = services[i].name;
        td2.textContent = services[i].price;



        row.appendChild(td1);
        row.appendChild(td2);


        table.appendChild(row);

    }
}
