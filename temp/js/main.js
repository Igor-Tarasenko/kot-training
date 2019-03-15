$(document).ready(function () {
    $(".blue-text").click(function () {
        $(this).next().slideToggle();
    });
    $(".yellow-btn").click(function () {
        $('.yellow-btn').removeClass('active');
        $(this).addClass('active');
    })
});