$(document).ready(function () {
    $("#pass").focus(function () {
        $(".login-card").css("margin-top", "-45px");
    });
    $("input").blur(function () {
        $(".login-card").css("margin-top", "0px");
    });
});     