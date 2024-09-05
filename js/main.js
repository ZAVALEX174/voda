$('.main-banner-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
})

$('.main-sell-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true,
    arrows: true,
});

$('.main-like-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    centerMode: true,
});
//
// $('.main-like-inner-category').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     variableWidth: true,
//     centerMode: true,
// });
