$(function() {
    function s() {
        var s = $("body").width();
        768 <= s & s <= 992 ? ($(".moshaver").css("right", "unset"), $(".moshaver").css("left", "25px"), $(".moshaver").css("display", "block"), $(".ill").hide(), $(".blog-default").show()) : s <= 768 ? ($(".moshaver").hide(), $(".ill").show(), $(".blog-default").show()) : ($(".moshaver").css("right", "25px"), $(".moshaver").css("left", "unset"), $(".moshaver").css("display", "block"), $(".ill").hide(), $(".blog-default").hide()), s <= 970 ? $("#img-none").hide() : 970 < s && $("#img-none").show()
    }

    function e() {
        var s = $(".rtr").height() - 94;
        $(".top-trans").animate({
            top: s
        })
    }

    function a() {
        var s = $(".rtr2").height() - 67;
        $(".top-trans2").animate({
            top: s,
            left: 0,
            right: 0
        })
    }

    function t() {
        $(window).width() < 992 ? $(".hidein").hide() : $(".hidein").show()
    }

    function i() {
        $(".yyyyy").css("height", "100%"), $(".yyyyy").css("margin-top", "0");
        var s = $(document).height();
        $(".yyyyy").css("height", s - 56), $(".yyyyy").css("margin-top", "56px")
    }
    $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover(), $(".popover-dismiss").popover({
        trigger: "focus"
    }), $(".btn-toggle").click(function() {
        var s = $(this).find("span").attr("class");
        "fa-bars" == (s = s.split(" "))[1] && $(this).find("span").removeClass("fa-bars text-dark fa-2x").addClass("fa-times text-dark fa-2x"), $(".sm-device-menu").addClass("test"), $(".heder-shab").addClass("heder-shab-show")
    }), $(".heder-shab").click(function() {
        $(".btn-toggle").find("span").removeClass("fa-times text-dark fa-2x").addClass("fa-bars text-dark fa-2x"), $(".sm-device-menu").removeClass("test"), $(".heder-shab").removeClass("heder-shab-show")
    }), $(window).resize(function() {
        $(".heder-shab").removeClass("heder-shab-show"), $(".sm-device-menu").removeClass("test"), $(".btn-toggle2").find("span").removeClass("fa-times text-white fa-2x").addClass("fa-bars text-white fa-2x"), $(".btn-toggle").find("span").removeClass("fa-times text-dark fa-2x").addClass("fa-bars text-dark fa-2x"), i(), t(), e(), a(), s()
    }), s(), $(".top-js").hover(function() {
        $(this).find("div.top-trans").animate({
            top: "0px"
        }, 0, function() {
            $(".rpp").delay(200).fadeIn(500)
        })
    }, function() {
        e(), $(".rpp").fadeOut()
    }), $(".top-js2").hover(function() {
        $(this).find("div.top-trans2").animate({
            top: "0px"
        }, 0, function() {
            $(".rpp").delay(200).fadeIn(500), $(this).find("span.am").delay(200).fadeIn(500)
        })
    }, function() {
        a(), $(".rpp").fadeOut(), $(".am").fadeOut()
    }), $(window).scroll(function() {
        $(".heder-shab").removeClass("heder-shab-show"), $(".sm-device-menu").removeClass("test"), $(".btn-toggle").find("span").removeClass("fa-times text-dark fa-2x").addClass("fa-bars text-dark fa-2x")
    }), $(".btn-toggle2").click(function() {
        var s = $(this).find("span").attr("class");
        "fa-bars" == (s = s.split(" "))[1] ? $(this).find("span").removeClass("fa-bars text-white fa-2x").addClass("fa-times text-white fa-2x"): $(this).find("span").removeClass("fa-times text-white fa-2x").addClass("fa-bars text-white fa-2x"), $(".sm-device-menu").toggleClass("test")
    }), t(), i()
});