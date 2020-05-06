$(document).ready(function () {
    $.fn.clickLink = function (source) {
        var destination = '#' + source + '-destination';
        $(source).addClass('school-active');
        $(".school").removeClass('school-active');
        $(".school-tab").hide();
        $(destination).show();
        $('html,body').animate({
            scrollTop: $("" + destination + "").offset().top-100
        },
            500);
    }
    $("a.school").click(function (e) {
        e.preventDefault();
        var source = $(this).attr('id');
        $.fn.clickLink(source);
        // $('html,body').animate({
        //         scrollTop: $(".second").offset().top
        //     },
        //     500);
    });

})