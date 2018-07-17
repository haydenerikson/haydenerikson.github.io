var requestURL = new 'data/services.json';

var request = new XMLHttpRequest();

weatherObj.open('GET',requestURL)
weatherObj.responseType = 'json';
weatherObj.send();
request.onload = function () {
    var response = request.response

    //TEMP
    console.log(response.services)

    $.each(response.services,function(i,item) {
        var tr = $('<tr>');
        var tdName = $('<tr>');
        var tdPrice = $('<tr>');

    }
          )
}
