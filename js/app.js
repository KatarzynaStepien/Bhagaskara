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


    function setMenu() {
        $(window).on('resize', function() {
            if ($(window).width() < 735) {
                $('.nav').hide();
                $('.menuBtn').show();
            } else {
                $('.nav').show();
                $('.menuBtn').hide();
                $('.mobileMenu').hide();
            }
        });
    }

    function setClick() {
        $('.menuBtn').on('click', function() {
            $('.mobileMenu').toggle();
        });
    }

    //setMenu();
    setClick();



    function checkValidate() {

        var imie = $('.formularz1').find("input#imie");
        var email = $('.formularz1').find("input#email");
        var text = $('.formularz1').find("input#message");
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        var imieSpan = $('.formularz1').find("span.formName");
        var emailSpan = $('.formularz1').find("span.formEmail");
        var textSpan = $('.formularz1').find("span.formText");


        $(".contactButton").click(function (event) {
            event.preventDefault();
            //sprawdzenie poprawnosci imienia

            if ((imie.val().length >= 3) && (imie.val().length <= 10)) {
                console.log('ok')
            }
            else {
                console.log("b�ad");
                imieSpan.show();
            }

            // sprawdzenie poprawnosci e-mail
            if (re.test(email.val())) {
                console.log('ok')
            }
            else {
                console.log("b�ad");
                emailSpan.show();
            }

            // sprawdzenie poprawnosci wiadomosci
            if ((text.val().length > 0) && (text.val().length <= 100)) {
                console.log('ok')
            }
            else {
                console.log("b�ad");
                textSpan.show();
            }
        })
    }
    checkValidate();

    $('.main_slider').slick({
        //slidesToShow: 3,
        //slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 2000,
        dots: true
    });


    function scrollDown() {
        $('a').click(function () {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1500);
            return false;
        });
    }
    scrollDown();






//Pierwsza pr�ba ze zdj�ciami w galerii
    //$('.resizableImage').mouseenter(function() {
    //    $(this).css({height: '+=80%', width: '+=80%'});
    //});
    //$('.resizableImage').mouseleave(function() {
    //    $(this).css({height: "", width: ""});
    //});







});