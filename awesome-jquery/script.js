$(function() {
    
    //$('span').children("h2").css({"color":"chocolate", "border":"2px solid chocolate"});
    
    //$("ul").find("p").css({"color":"chocolate", "border":"2px solid chocolate"});
    
    $("span.child").nextUntil("p").css({"color":"chocolate", "border":"2px solid chocolate"});
    
    $("span.child").prev().css({"color":"chocolate", "border":"2px solid chocolate"});
    
});