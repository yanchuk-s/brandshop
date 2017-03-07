// JavaScript Document

jQuery(document).ready(function ($) {
    "use strict";
    $(function () {
        //Keep track of last scroll
        var lastScroll = 0;
        var header = $("#header");
        var headerfixed = $("#header-main-fixed");
        var headerfixedbg = $(".header-bg");
        var headerfixedtopbg = $(".top-header-bg");
        $(window).scroll(function () {
            //Sets the current scroll position
            var st = $(this).scrollTop();
            //Determines up-or-down scrolling
            if (st > lastScroll) {

                //Replace this with your function call for downward-scrolling
                if (st > 50) {
                    header.addClass("header-top-fixed");
                    header.find(".header-top-row").addClass("dis-n");
                    headerfixedbg.addClass("header-bg-fixed");
                    headerfixed.addClass("header-main-fixed");
                    headerfixedtopbg.addClass("top-header-bg-fix");
                }
            }
            else {
                //Replace this with your function call for upward-scrolling
                if (st < 50) {
                    header.removeClass("header-top-fixed");
                    header.find(".header-top-row").removeClass("dis-n");
                    headerfixed.removeClass("header-main-fixed");
                    headerfixedbg.removeClass("header-bg-fixed");
                    headerfixedtopbg.removeClass("top-header-bg-fix");
                    //headerfixed.addClass("header-main-fixed")
                }
            }
            //Updates scroll position
            lastScroll = st;
        });
    });
    // Header search open functions
    $("#header-search").click(function () {
        var $obj = $("#header-top-search");
        if ($obj.hasClass("expanded")) {
            $obj.removeClass("expanded");
            $obj.slideUp({
                duration: 300,
                easing: "easeInQuad"
            });
        }
        else {
            $obj.addClass("expanded");
            $obj.slideDown({
                duration: 300,
                easing: "easeInQuad"
            });
        }
    });
    $("#header-search-close").click(function () {
        var $obj = $("#header-top-search");
        if ($obj.hasClass("expanded")) {
            $obj.removeClass("expanded");
            $obj.slideUp({
                duration: 300,
                easing: "easeInQuad"
            });
        }
        else {
            $obj.addClass("expanded");
            $obj.slideDown({
                duration: 300,
                easing: "easeInQuad"
            });
        }
    });
    // Facts show functions
    $(function () {
        var dataperc;
        $(".fact").appear(function () {
            $('.fact').each(function () {
                dataperc = $(this).attr('data-perc');
                $(this).find('.factor').delay(6000).countTo({
                    from: 0,
                    to: dataperc,
                    speed: 3000,
                    refreshInterval: 50
                });
            });
        });
    });
    // Bestseller owl slider script
    $("#nav-bestseller .next").click(function () {
        $("#owl-bestseller").trigger('owl.next');
    });
    $("#nav-bestseller .prev").click(function () {
        $("#owl-bestseller").trigger('owl.prev');
    });
    $("#owl-bestseller").owlCarousel({
// Most important owl features
        items: 4,
        itemsCustom: [[0, 1], [320, 1], [580, 2], [768, 2], [992, 3], [1200, 4]],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });

    // Column 2 owl slider script
    $("#nav-col-2 .next").click(function () {
        $("#owl-col-2").trigger('owl.next');
    });
    $("#nav-col-2 .prev").click(function () {
        $("#owl-col-2").trigger('owl.prev');
    });
    $("#owl-col-2").owlCarousel({
// Most important owl features
        items: 1,
        itemsCustom: [[0, 1], [320, 1], [580, 2], [768, 2], [972, 1], [1200, 2]],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    // Column 2 owl slider script
    $("#nav-col-22 .next").click(function () {
        $("#owl-col-22").trigger('owl.next');
    });
    $("#nav-col-22 .prev").click(function () {
        $("#owl-col-22").trigger('owl.prev');
    });
    $("#owl-col-22").owlCarousel({
// Most important owl features
        items: 1,
        itemsCustom: [[0, 1], [320, 1], [580, 2], [768, 2], [972, 1], [1200, 2]],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    // Hot products owl slider script
    $("#nav-hot .next").click(function () {
        $("#owl-hot").trigger('owl.next');
    });
    $("#nav-hot .prev").click(function () {
        $("#owl-hot").trigger('owl.prev');
    });
    $("#owl-hot").owlCarousel({
// Most important owl features
        items: 5,
        lazyLoad: true,
        itemsCustom: [[0, 1], [320, 1], [480, 2], [768, 3], [992, 4], [1200, 5]],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });

    // jewellery owl slider script
    $("#nav-jew .next").click(function () {
        $("#owl-jew").trigger('owl.next');
    });
    $("#nav-jew .prev").click(function () {
        $("#owl-jew").trigger('owl.prev');
    });
    $("#owl-jew").owlCarousel({
// Most important owl features
        items: 4,
        lazyLoad: true,
        itemsCustom: [[0, 1], [320, 1], [480, 2], [768, 2], [992, 3], [1200, 3]],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    $("#owl-client-say").owlCarousel({
// Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: true,
        pagination: true,
        paginationSpeed: 300,
        stopOnHover: false,
        transitionStyle: "fade",
        navigation: false
    });
    // Summer sale owl slider script
    $("#nav-summer-sale .next").click(function () {
        $("#owl-summer-sale").trigger('owl.next');
    });
    $("#nav-summer-sale .prev").click(function () {
        $("#owl-summer-sale").trigger('owl.prev');
    });
    $("#owl-summer-sale").owlCarousel({
// Most important owl features
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    // iphone(ios) owl slider script
    $("#nav-child .next").click(function () {
        $("#owl-child").trigger('owl.next');
    });
    $("#nav-child .prev").click(function () {
        $("#owl-child").trigger('owl.prev');
    });
    $("#owl-child").owlCarousel({
// Most important owl features
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    // owl slider script
    $("#nav-tabs .next").click(function () {
        $("#owl-new").trigger('owl.next');
        $("#owl-featured").trigger('owl.next');
    });
    $("#nav-tabs .prev").click(function () {
        $("#owl-new").trigger('owl.prev');
        $("#owl-featured").trigger('owl.prev');
    });
    $("#owl-new").owlCarousel({
// Most important owl features
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    $("#owl-featured").owlCarousel({
// Most important owl features
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    // owl slider script
    $("#nav-tabs2 .next").click(function () {
        $("#owl-new2").trigger('owl.next');
        $("#owl-featured2").trigger('owl.next');
    });
    $("#nav-tabs2 .prev").click(function () {
        $("#owl-new2").trigger('owl.prev');
        $("#owl-featured2").trigger('owl.prev');
    });
    $("#owl-new2").owlCarousel({
// Most important owl features
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    $("#owl-featured2").owlCarousel({
// Most important owl features
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: false,
        stopOnHover: false,
        navigation: false
    });
    $("#owl-partners").owlCarousel({
// Most important owl features
        items: 5,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [630, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: true,
        stopOnHover: false,
        navigation: false
    });
    $("#owl-home-slider").owlCarousel({
// Most important owl features
        lazyLoad: true,
        singleItem: true,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        autoPlay: true,
        stopOnHover: false,
        transitionStyle: "fade"
    });
    $("#owl-block-slider").owlCarousel({
// Most important owl features
        lazyLoad: true,
        singleItem: true,
        itemsScaleUp: false,
        responsive: true,
        responsiveRefreshRate: 100,
        responsiveBaseWidth: window,
        autoPlay: true,
        stopOnHover: false
    });
    $(function () {
        $('.dropdown').hover(function () {
            $(this).addClass('open');
        }, function () {
            $(this).removeClass('open');
        });
    });
    jQuery('.tp-banner').show().revolution(
            {
                dottedOverlay: "none",
                delay: 16000,
                startwidth: 1300,
                startheight: 750,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview1",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
                keyboardNavigation: "off",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                forceFullWidth: "on",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideTimerBar: "on",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ""
            });

    $('.revolution').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 500,
        hideThumbs: 10,
        fullWidth: "on",
        fullScreen: "on",
        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "round",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 30,
        navigationVOffset: 30,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        touchenabled: "on"

    });
    $('.tool_tip').tooltip();
    // Color Filter
    $(".colors li a").each(function () {
        $(this).css("background-color", "#" + $(this).attr("data-rel")).attr("href", "#" + $(this).attr("data-rel"));
    });
    // Product zoom
    $('#product-zoom').elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });
    var gallery = $('#gal1');
    gallery.find('a').hover(function () {

        var smallImage = $(this).attr("data-image");
        var largeImage = $(this).attr("data-zoom-image");
        var ez = $('#product-zoom').data('elevateZoom');
        ez.swaptheimage(smallImage, largeImage);
    });
    // Daily Deal CountDown Clock Settings
    var date = new Date().getTime(); // This example is just to show how this function works.
    var new_date = new Date(date + 86400000); // You can set your own time whenever you want.
//    var n = new_date.toUTCString();				// 'date' value is given in milliseconds.
    //alert(new_date)
    $(".time").countdown({
        date: new_date,
        yearsAndMonths: true,
        leadingZero: true
    });
    // Categories Menu Manipulations
    $(".ul-side-category li a").click(function () {

        var sm = $(this).next();
        if (sm.hasClass("sub-category")) {
            if (sm.css("display") === "none") {
                $(this).next().slideDown();
            }
            else {

                $(this).next().slideUp();
                $(this).next().find(".sub-category").slideUp();
                /*$(this).next().find(".categories-submenu").slideUp("normal", function() {
                 $(this).parent().find(".icon-angle-down").removeClass("icon-angle-down").addClass("icon-angle-right");
                 });*/
            }

            return false;
        }
        else {
            return true;
        }
    });
});
(function ($) {
    $.fn.countTo = function (options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
                increment = (options.to - options.from) / loops;
        return $(this).each(function () {
            var _this = this,
                    loopCount = 0,
                    value = options.from,
                    interval = setInterval(updateTimer, options.refreshInterval);
            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));
                if (typeof (options.onUpdate) === 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;
                    if (typeof (options.onComplete) === 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };
    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 100, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        onUpdate: null, // callback method for every time the element is updated,
        onComplete: null // callback method for when the element finishes updating
    };
})(jQuery);
new WOW().init();

