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
    
    $("#stop").click(function() {
        $("h3").stop();
        console.log("stop!");
    });
    
    //there are two h3 functions, so click on the button twice to stop the second one.
    
    //$("#go").click(function() {
        //$("#block").animate({
            //opacity:.5,
            //marginLeft: "+=50",
            //height: "400px"
        //}, 3000, function(){
            //$(this).after("<div>The animation is complete.</div>");
        //});
    //});
    
    $("#go").click(function() {
        $("#block")
        .animate({ width: "90%" }, 1000)
        .animate({ fontSize: "40px" }, 1000)
        .animate({ borderLeftWidth: "30px" }, 1000)
    });
    
});