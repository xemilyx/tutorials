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
    })
    
    $("input").on("change blur focus", function() {
        console.log("You did something to the input field!")
    })