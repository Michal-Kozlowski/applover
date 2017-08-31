$(document).ready(function(){
//-----------------menu collapse after click on phone
    $("nav a").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });




//-----------------show more
    $(".btn").on("click", function() {
        $(".hidden").addClass("show").removeClass("hidden");
        $(this).addClass("hidden");
    });
    //-----------------and hide again
    $(".apple p").on("click", function() {
        $(".btn").removeClass("hidden");
        $(".show").addClass("hidden").removeClass("show");
    });


});
