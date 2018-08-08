$(document).ready(function(){
    $(".footer__figure--greenicon").hover(function(){
        $(this).css("background-color", "#f3f6f3");
        $(this).css("opacity", ".5");

        }, function(){
        $(this).css("background-color", "#3c4a3b");

    });
    $(".footer__figure--pinkicon").hover(function(){
        $(this).css("background-color", "#f3f6f3");
            $(this).css("opacity", ".5");

        }, function(){
        $(this).css("background-color", "#dbb1b5");
    });
});
