/**
 * Created by Kasia on 2015-11-20.
 */
$(document).ready(function(){

    var menu = $(".menu");
    var menuStartPosition = menu.offset().top;
    var spacer = $("#menuSpacer");

    $(window).on("scroll", function(event){

        if($(window).scrollTop() > menuStartPosition){
            menu.addClass("sticky");
            spacer.height(menu.height());
        }else {
            menu.removeClass("sticky");
            spacer.height(0);
        }
    });







});