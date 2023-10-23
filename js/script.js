$(document).ready(function () {

    $('.slider').slick({
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        swipeToSlide: true,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: false,
    });


    var listCounter = 1;

    $("ol.styled li").each(function () {
        if (!$(this).hasClass("headline")) {
            $(this).attr("value", listCounter++);
        }
    });

    $('.btnPlay').on('click', function (e) {
        $(this).fadeOut();
        $(this).next('video')[0].play();
        $(this).next('video').attr('controls', true);
    })
});

