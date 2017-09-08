$(function() {
    $("p").on(
        {
        "click": function() {
            console.log("You clicked the paragraph!")
            },
        "mouseover": function() {
            console.log("You hovered on the paragraph!")
             }
        });
    });
    
    $("h3").on("click", function() {
        console.log("You clicked on the heading!");
    });
    
    $("button").click(function() {
        console.log("You clicked on the button!")
    });
    
    $("input").on("change blur focus", function() {
        console.log("You did something to the input field!")
    });
    
    $("h3").fadeOut(500);
    $("h3").fadeIn(1500);
    
    $("p").toggle(2000);
    $("p").toggle("normal").addClass("blue");
    
    $("h3").hide();
    $("h3").fadeIn(2000, function() {
        $(this).addClass("blue");
    });
    
    $("button").click(function() {
        $("h3").stop();
        console.log("stop!");
    });
    
    //there are two h3 functions, so click on the button twice to stop the second one.