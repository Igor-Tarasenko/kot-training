$(document).ready(function () {
    $(".blue-text").click(function () {
        $(this).next().slideToggle();
    });
    $(".yellow-btn").click(function () {
        $('.yellow-btn').removeClass('active');
        $(this).addClass('active');
    });
    $(".show-btn").click(function () {
        $(".hidden-review").slideToggle();
    });
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});