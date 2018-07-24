$(document).ready(function(){
    $(".description").hide();
    $("#slrace").click(function(){
        $("#descript2on, #descript3on").hide("fast");
        $("#descript1on").slideToggle("fast");
    });
});

$(document).ready(function(){
    $("#fueldex").click(function(){
        $("#descript1on, #descript3on").hide("fast");
        $("#descript2on").slideToggle("fast");
    });
});

$(document).ready(function(){
    $("#sessiondh").click(function(){
        $("#descript1on, #descript2on").hide("fast");
        $("#descript3on").slideToggle("fast");
    });
});


