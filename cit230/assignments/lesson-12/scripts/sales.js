$(document).ready(function(){
    $(".description").hide();
    $("#slrace").click(function(){
        $("#descript2on, #descript3on").hide("slow");
        $("#descript1on").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#fueldex").click(function(){
        $("#descript1on, #descript3on").hide("slow");
        $("#descript2on").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#sessiondh").click(function(){
        $("#descript1on, #descript2on").hide("slow");
        $("#descript3on").slideToggle("slow");
    });
});


