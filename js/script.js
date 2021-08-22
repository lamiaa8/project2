//section2

$(document).ready(function(){
    $('#bars').click(function(){
        $('nav').toggleClass('open');
        $('.opacity').fadeToggle(700);
        $('html').css("overflow", "hidden");
    });
    $('.opacity').click(function(){
        $('nav').removeClass('open');
        $('.opacity').fadeOut(700);
        $('html').css("overflow-y", "auto");
    });
});
//end section2
