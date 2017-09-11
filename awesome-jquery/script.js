$(function() {
    
    $("#btn").click(function() {
        console.log($("#unicorns").attr("href"));
        //console.log("unicorns");
    });
    $("#btn2").click(function() {
        $("#test").html("Unicorns are <b>awesome</b>!")
    });
    $("#btn3").click(function() {
        $("#name").val("Emily Suon")
    });
    
    $('.target')
        .append('<div class="child">Append</div>')
        .prepend('<div class="child">Prepend</div>')
        .before('<div class="sibling">Before</div>')
        .after('<div class="sibling">After</div>');
    
    //$('.target').remove();)
    //$('.target').empty();
    $('li').remove('.filter');
    
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