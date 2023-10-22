var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 300,)
});

// reclam *********************************
$(".reclam-slider").on("init reInit afterChange", function (event, slick) {
    var sCurr = slick.slickCurrentSlide() <= 8 ? '0' + (slick.slickCurrentSlide() + 1) : slick.slickCurrentSlide() + 1;
    var sCount = slick.slideCount <= 8 ? '0' + slick.slideCount : slick.slideCount;
    $(".reclam__counter").html('<span>' + sCurr + '</span>' + "/" + sCount);
});
$('.reclam-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    appendArrows: $(".reclam-controls"),
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
});

// reviews **************************
$(".reviews-slider").on("init reInit afterChange", function (event, slick) {
    var sCurr = slick.slickCurrentSlide() <= 8 ? '0' + (slick.slickCurrentSlide() + 1) : slick.slickCurrentSlide() + 1;
    var sCount = slick.slideCount <= 8 ? '0' + slick.slideCount : slick.slideCount;
    $(".reviews__counter").html('<span>' + sCurr + '</span>' + "/" + sCount);
});

$('.reviews-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    appendArrows: $(".reviews-controls"),
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
});


// clients *****************

$('.clients-slider').slick({
    dots: false,
    infinite: true,
    swipeToSlide: true,
    centerPadding: '',
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                centerMode: true,
            }
        },
        {
            breakpoint: 920,
            settings: {
                centerPadding: '20px',
                slidesToShow: 2,
                variableWidth: true,
                arrows: false,
                centerMode: false,
            }
        },
    ]
});

var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2, {
    relativeInput: true
});


$('[data-tab-btn]').click(function () {
    var tabBtnValue = $(this).attr('data-tab-btn');
    $('[data-tab-btn]').removeClass('active');
    $(this).addClass('active');
    $('[data-tab-content="' + tabBtnValue + '"]').addClass('active');
    $('[data-tab-content]').not('[data-tab-content="' + tabBtnValue + '"]').removeClass('active');
})

$('[data-togler-btn]').click(function () {
    $(this).toggleClass('active');
    $(this).hasClass('active') ? $(this).text('Свернуть') : $(this).text('Развернуть');
    var toglerBtnValue = $(this).attr('data-togler-btn');
    $('[data-togler-content="' + toglerBtnValue + '"]').slideToggle();
})


$('.dropdown-btn').on('click', function (e) {
    if ($(this).hasClass('active')) { $('.dropdown-btn').removeClass('active').next().slideUp(); }
    else {
        $('.dropdown-btn').removeClass('active').next().slideUp();
        $(this).toggleClass('active').next().slideToggle();
    }
});