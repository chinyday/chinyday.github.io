$(document).ready(function(){
    $(window).scroll(function(){
        if( $(window).height() <= $(this).scrollTop() ){
            $(".gnb").css('z-index',20);
        }else{
            $(".gnb").css('z-index',0);
        }
    });

});