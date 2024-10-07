(function ($) {
    "use strict";
    var windowOn = $(window);


    /*-----------------------------------------------------------------------------------

        Template Name: WETA - SaaS Landing HTML5 Template
        Author: RRDevs
        Support: https://support.rrdevs.net
        Description: WETA - SaaS Landing HTML5 Template.
        Version: 1.0
        Developer: Sabbir Ahmmed (https://github.com/ahmmedsabbirbd)

    -----------------------------------------------------------------------------------
 /*======================================
   Data Css js
   ========================================*/
    $("[data-background]").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    class GSAPAnimation {
        static Init() {
            this.banner2Animation()
            /*play-video-animation*/
            $('.play-video-animation').length && this.imageAnimation('.play-video-animation')
            /*play-video-animation*/
            $('.brand-image-animation').length && this.imageAnimation('.brand-image-animation')
            /*case-studies-image-animation*/
            $('.case-studies-image-animation').length && this.imageAnimation('.case-studies-image-animation')
            /*what-we-do-image-animation*/
            $('.what-we-do-image-animation').length && this.imageAnimation('.what-we-do-image-animation')
            /*feedback__item-customer-animation*/
            $('.contact-us__media-animation').length && this.imageAnimation('.contact-us__media-animation')
            /*feedback__item-customer-animation*/
            $('.cta__media-animation').length && this.imageAnimation('.cta__media-animation')
            /*specialists-image-animation*/
            $('.specialists-image-animation').length && this.imageAnimation('.specialists-image-animation')
            /*popup-video-button_animation*/
            $('.popup-video-button_animation').length && this.buttonRotateAnimation('.popup-video-button_animation')
            /*section-title-2-animation*/
            $('.section-title-2-animation').length && this.sectionTitleAnimation('.section-title-2-animation');
            /*section-title-2-animation*/
            $('.section-subTile-2-animation').length && this.sectionSubTitleAnimation('.section-subTile-2-animation');
            /*section-title-2-animation*/
            $('.section-button-animation').length && this.sectionbuttonAnimation('.section-button-animation');
            /*section-title-2-animation*/
            $('.section-input-animation').length && this.sectionInputAnimation('.section-input-animation');
        }

        static banner2Animation() {
            const banner2 = gsap.timeline();

            const banner2Title = document.querySelector(".banner-2__title");
            const banner2Title2 = document.querySelector(".banner-2__title-2");
            const banner2Title3 = document.querySelector(".banner-2__title-3");
            const banner2Title4 = document.querySelector(".banner-2__title-4");
            const banner2Image = document.querySelector(".banner-2__image img");
            const banner2Image1 = document.querySelector(".banner-2__image-1");
            const banner2Image2 = document.querySelector(".banner-2__image-2");
            const banner2Image3 = document.querySelector(".banner-2__image-3");
            const banner2Image4 = document.querySelector(".banner-2__image-4");

            if (banner2Title) {
                gsap.set(banner2Image, { opacity: 0, scale: 0, y: 1 });
                gsap.set(banner2Image1, { opacity: 0, scale: 0, y: 1 });
                gsap.set(banner2Image2, { opacity: 0, scale: 0, y: 1 });
                gsap.set(banner2Image3, { opacity: 0, scale: 0, y: 1 });
                gsap.set(banner2Image4, { opacity: 0, scale: 0, y: 1 });

                const split_banner2Title = new SplitText(banner2Title, { type: "chars" });
                const split_banner2Title2 = new SplitText(banner2Title2, { type: "chars" });
                const split_banner2Title3 = new SplitText(banner2Title3, { type: "chars" });
                const split_banner2Title4 = new SplitText(banner2Title4, { type: "chars" });

                banner2.from(split_banner2Title.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
                banner2.to(banner2Image, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.8");
                banner2.from(split_banner2Title2.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 }, "-=1.5");
                banner2.to(banner2Image1, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.8");
                banner2.to(banner2Image2, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.8");
                banner2.to(banner2Image3, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.8");
                banner2.to(banner2Image4, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.8");
                banner2.from(split_banner2Title4.chars, { duration: 0.7, x: 70, autoAlpha: 0, stagger: 0.1 }, "-=1.8");
                banner2.from(split_banner2Title3.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 }, "-=1");
                return banner2;
            }
        }
        static imageAnimation(activeClass) {
            const imageGsap = gsap.timeline({
                scrollTrigger: {
                    trigger: activeClass,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });
            imageGsap.from(activeClass, {
                opacity: 0,
                y: 20,
                scale: 0.8,
                duration: 0.8
            });
            return imageGsap;
        }
        static buttonRotateAnimation(activeClass) {
            const buttonGsap = gsap.timeline({
                scrollTrigger: {
                    trigger: activeClass,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });
            buttonGsap.from(activeClass, {
                opacity: 0,
                y: 20,
                scale: 0.8,
                rotate: -360,
                duration: 0.8
            });
            return buttonGsap;
        }
        static sectionTitleAnimation(activeClass) {
            let sectionTitleLines = gsap.utils.toArray(activeClass);

            sectionTitleLines.forEach(sectionTextLine => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionTextLine,
                        start: 'top 90%',
                        end: 'bottom 60%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none'
                    }
                });

                const itemSplitted = new SplitText(sectionTextLine, { type: "words, lines" });
                gsap.set(sectionTextLine, { perspective: 400 });
                itemSplitted.split({ type: "lines" })
                tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
            });
        }
        static sectionSubTitleAnimation(activeClass) {
            let sectionTitleLines = gsap.utils.toArray(activeClass);

            sectionTitleLines.forEach(sectionTextLine => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionTextLine,
                        start: 'top 90%',
                        end: 'bottom 60%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none'
                    }
                });
                tl.set(sectionTextLine, { opacity: 0, y: 20 });
                tl.to(sectionTextLine, { duration: 1, delay: 0.3, y: 0, opacity: 1 });
            });
        }
        static sectionbuttonAnimation(activeClass) {
            let sectionButtonLines = gsap.utils.toArray(activeClass);

            sectionButtonLines.forEach(sectionButtonLine => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionButtonLine,
                        start: 'top 90%',
                        end: 'bottom 60%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none'
                    }
                });
                tl.set(sectionButtonLine, { opacity: 0, y: 20 });
                tl.to(sectionButtonLine, { duration: 1, delay: 0.3, y: 0, opacity: 1 });
            });
        }
        static sectionInputAnimation(activeClass) {
            let sectionInputLines = gsap.utils.toArray(activeClass);

            sectionInputLines.forEach(sectionInputLine => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionInputLine,
                        start: 'top 90%',
                        end: 'bottom 60%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none'
                    }
                });
                tl.set(sectionInputLine, { opacity: 0, y: 20 });
                tl.to(sectionInputLine, { duration: 1, delay: 0.3, y: 0, opacity: 1 });
            });
        }
    }

    class RRDEVS {
        static LoadedAfter() {
            $('#preloader').delay(1).fadeOut(500);

            /*Counter Js*/
            $(".counter").counterUp({
                delay: 10,
                time: 1000,
            });

            $(".odometer").waypoint(
                function () {
                    var odo = $(".odometer");
                    odo.each(function () {
                        var countNumber = $(this).attr("data-count");
                        var element = $(this);
                        setTimeout(function () {
                            element.html(countNumber);
                        }, 1000); // 1000 milliseconds delay (1 second)
                    });
                },
                {
                    offset: "80%",
                    triggerOnce: true,
                }
            );

            /*Wow Js*/
            if ($('.wow').length) {
                var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: false,
                    live: true
                });
                wow.init();
            }

            /*GSAPAnimation*/
            GSAPAnimation.Init();
        }
    }


    /*======================================
      Preloader activation
      ========================================*/
    $(window).on('load', RRDEVS.LoadedAfter);
    $(".preloader-close").on("click", RRDEVS.LoadedAfter)

    window.addEventListener('resize', function () {
        gsap.globalTimeline.clear();
    });


    if ($('.rr-portfolio-load-more').length > 0) {
        $('.grid').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item',
                }
            });


            // filter items on button click
            $('.masonary-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.masonary-menu button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            var show_item = $('.rr-portfolio-load-more').attr('data-show');
            var count_item = show_item;
            var isotop_call = $grid.data('isotope');

            loadMore(show_item);

            function loadMore(showing) {
            }

            $("#rr-load-more").on('click', function () {
                if ($('.masonary-menu').data('clicked')) {

                    count_item = show_item;
                    $('.masonary-menu').data('clicked', false);
                } else {
                    count_item = count_item;
                };

                count_item = count_item + show_item;

                loadMore(count_item);
            });

            $(".masonary-menu").on('click', function () {
                $(this).data('clicked', true);

                loadMore(show_item);
            });

        });
    } else {
        $('.grid').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item',
                }
            });


            // filter items on button click
            $('.masonary-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.masonary-menu button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

        });

        var show_item_2 = $('.rr-load-item-count').attr('data-show');
        $(".rr-load-item").hide();
        $(".rr-load-item").slice(0, show_item_2).show();
        $("body").on('click touchstart', '.load-more', function (e) {
            e.preventDefault();
            $(".rr-load-item:hidden").slice(0, show_item_2).slideDown();
            if ($(".rr-load-item:hidden").length == 0) {
                $(".load-more").css('display', 'none');
            }

        });
    }

    /*======================================
      Mobile Menu Js
      ========================================*/
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
    });

    /*======================================
      Sidebar Toggle
      ========================================*/
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    });
    // Scroll to bottom then close navbar
    $(window).scroll(function () {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".offcanvas__area").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        }
    });
    $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__area").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
    });

    /*======================================
      Body overlay Js
      ========================================*/
    $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    /*======================================
      Sticky Header Js
      ========================================*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#header-sticky").addClass("rr-sticky");
        } else {
            $("#header-sticky").removeClass("rr-sticky");
        }
    });

    /*======================================
      MagnificPopup image view
      ========================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    /*======================================
      MagnificPopup video view
      ========================================*/
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /*======================================
      Button scroll up js
      ========================================*/
    var progressPath = document.querySelector(".backtotop-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".backtotop-wrap").addClass("active-backtotop");
        } else {
            jQuery(".backtotop-wrap").removeClass("active-backtotop");
        }
    });
    jQuery(".backtotop-wrap").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, duration);
        return false;
    });

    /*======================================
    One Page Scroll Js
    ========================================*/
    /*** Scroll Nav */
    var link = $('.onepagenav #mobile-menu ul li a, .onepagenav .mean-nav ul li a');

    link.on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 600);
        $(this).parent().addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function () {
        scrNav();
    });

    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function () {
            var id = $(this).attr('id'),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                link.parent().removeClass('active');
                $('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    scrNav();

    /*======================================
    Smoth animatio Js
    ========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });

    ////////////////////////////////////////////////////
    // 21. Counter Js
    if (document.querySelector('.knob')) {
        new PureCounter();
    }

    // Jquery Appear raidal
    if (typeof ($.fn.knob) != 'undefined') {
        $('.knob').each(function () {
            var $this = $(this),
                knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function () {
                    $(this.i).val(this.cv + '%')
                }
            });

            $this.appear(function () {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, {
                accX: 0,
                accY: -150
            });
        });
    }

    /*brand__active***/
    let brand = new Swiper(".brand__active", {
        slidesPerView: 1,
        spaceBetween: 156,
        loop: true,
        roundLengths: true,
        clickable: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1601: {
                slidesPerView: 6,
            },
            1401: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            481: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*header-3_top-slider***/
    let header3TopSlider = new Swiper(".header-3_top-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            prevEl: ".header-3_top-slider__arrow-prev",
            nextEl: ".header-3_top-slider__arrow-next",
        },
        roundLengths: true,
        clickable: true,
        autoplay: {
            delay: 3000,
        }
    });

    /*case-studies__active***/
    let caseStudies = new Swiper(".case-studies__active", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: false,
        roundLengths: true,
        clickable: true,
        scrollbar: {
            el: ".case-studies__scrollbar",
            hide: true,
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            501: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*recent-works__active***/
    let recentWorksActive = new Swiper(".recent-works__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        roundLengths: true,
        clickable: true,
        scrollbar: {
            el: ".recent-works__scrollbar",
            hide: true,
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            611: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*specialists__active***/
    let specialistsActive = new Swiper(".specialists__active", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: false,
        roundLengths: true,
        clickable: true,
        navigation: {
            prevEl: ".specialists__slider-arrow-prev",
            nextEl: ".specialists__slider-arrow-next",
        },
        scrollbar: {
            el: ".specialists__scrollbar",
            hide: true,
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            481: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*what-we-do__active***/
    let whatWeDoActive = new Swiper(".what-we-do__active", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: false,
        roundLengths: true,
        clickable: true,
        navigation: {
            prevEl: ".what-we-do__slider-arrow-prev",
            nextEl: ".what-we-do__slider-arrow-next",
        },
        scrollbar: {
            el: ".what-we-do__scrollbar",
            hide: true,
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*cool-amazing__slider***/
    var coolAmazing__slider = new Swiper(".cool-amazing__slider", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".cool-amazing__slider-dot",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 2,
            },
        },
    });

    /*client-testimonial__slider-thubnail***/
    $('.client-testimonial__slider-thubnail').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        spaceBetween: 30,
        centerPadding: "0px",
        centerMode: true,
        arrows: false,
        fade: false,
        asNavFor: '.client-testimonial__slider-nav, .client-testimonial__slider-content',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "200px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "100px",
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px",
                }
            },
            {
                breakpoint: 381,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0",
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*client-testimonial__slider-content***/
    $('.client-testimonial__slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        spaceBetween: 30,
        arrows: false,
        fade: false,
        dots: false,
        asNavFor: '.client-testimonial__slider-nav, .client-testimonial__slider-thubnail',
    });

    /*client-testimonial__slider-nav***/
    $('.client-testimonial__slider-nav').slick({
        slidesToShow: 3,
        vertical: true,
        slidesToScroll: 1,
        asNavFor: '.client-testimonial__slider-content, .client-testimonial__slider-thubnail',
        focusOnSelect: true,
        verticalSwiping: true,
        centerPadding: "0px",
        centerMode: true,
        arrows: false,
        spaceBetween: 30,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    vertical: false,
                    focusOnSelect: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 381,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    focusOnSelect: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    focusOnSelect: false,
                    verticalSwiping: false,
                }
            }
        ]
    });

    /*feedback__active***/
    let feedback__active = new Swiper(".feedback__active", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            prevEl: ".feedback__item__button-prev",
            nextEl: ".feedback__item__button-next",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*decision-making__active***/
    let decisionMakingActive = new Swiper(".decision-making__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            prevEl: ".decision-making__slider-prev",
            nextEl: ".decision-making__slider-next",
        },
    });

    /*customer-feedback__active***/
    let customerFeedback__active = new Swiper(".customer-feedback__active", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".customer-feedback__dot",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*blog-2__active***/
    let blog2 = new Swiper(".blog-2__active", {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".blog-2__dot",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            901: {
                slidesPerView: 3,
            },
            701: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*** lastNobullet */
    function lastNobullet() {
        var lastElement = false;
        $(".footer__copyright-menu ul li, .last_item_not_horizental_bar .col-lg-4").each(function () {
            if (lastElement && lastElement.offset().top != $(this).offset().top) {
                $(lastElement).addClass("no_bullet");
            } else {
                $(lastElement).removeClass("no_bullet");
            }
            lastElement = $(this);
        }).last().addClass("no_bullet");
    };
    lastNobullet();

    $(window).resize(function () {
        lastNobullet();
    });
    let $scene = $('.parallax-element').parallax({
        scalarX: 100,
        scalarY: 100,
    });
    let $scene1 = $('.parallax-element-1').parallax({
        scalarX: 50,
        scalarY: 50,
    });

    function page_ah_cursor() {
        document.body.append(...["cursor-outer", "cursor-inner"].map(className => Object.assign(document.createElement("div"), { className: `mouse-cursor ${className}` })));

        const myCursor = jQuery(".mouse-cursor");

        if (myCursor.length) {
            const cursorInner = document.querySelector(".cursor-inner");
            const cursorOuter = document.querySelector(".cursor-outer");
            let mouseY, mouseX = 0;
            let isHovering = false;

            window.onmousemove = function (event) {
                if (!isHovering) {
                    cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
                    cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
                    mouseY = event.clientY;
                    mouseX = event.clientX;
                }
            };

            $("body").on(
                "mouseenter",
                "a, button, .cursor-pointer",
                function () {
                    cursorInner.classList.add("cursor-hover");
                    cursorOuter.classList.add("cursor-hover");
                }
            );

            $("body").on(
                "mouseleave",
                "a, button, .cursor-pointer",
                function () {
                    if ($(this).is("a") || $(this).is("button") && $(this).closest(".cursor-pointer").length === 0) {
                        cursorInner.classList.remove("cursor-hover");
                        cursorOuter.classList.remove("cursor-hover");
                    }
                }
            );

            cursorInner.style.visibility = "visible";
            cursorOuter.style.visibility = "visible";
        }
    }
    if ($('.body-2').length > 0) {
        page_ah_cursor();
    }

    $('#contact-us__form').submit(function (event) {
        event.preventDefault();
        var form = $(this);
        $('.loading-form').show();

        setTimeout(function () {
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize()
            }).done(function (data) {
                $('.loading-form').hide();
                $('.contact-us__form').append('<p class="success-message mt-3 mb-0">Your message has been sent successfully.</p>');
            }).fail(function (data) {
                $('.loading-form').hide();
                $('.contact-us__form').append('<p class="error-message mt-3 mb-0">Something went wrong. Please try again later.</p>');

            });
        }, 1000);
    });

    $('.contact-us-1__select select').niceSelect();

    let swiper1 = new Swiper(".banner__slider-1", {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 7e3,
        loop: !0,
        autoplay: {
            delay: 0.5,
            disableOnInteraction: !1
        }
    }),
        swiper2 = new Swiper(".banner__slider-2", {
            direction: "vertical",
            spaceBetween: 20,
            speed: 8e3,
            loop: !0,
            slidesPerView: "auto",
            autoplay: {
                delay: 0.5,
                disableOnInteraction: !1
            }
        }),
        swiper3 = new Swiper(".banner__slider-3", {
            direction: "vertical",
            spaceBetween: 20,
            speed: 13e3,
            loop: !0,
            slidesPerView: "auto",
            autoplay: {
                delay: 0.5,
                disableOnInteraction: !1
            }
        });


    $(".multipage-page").show();
    $(".onepage-page").hide();

    function togglePages(showClass, hideClass, activeBtn, inactiveBtn) {
        $(showClass).show();
        $(hideClass).hide();
        $(activeBtn).addClass("active");
        $(inactiveBtn).removeClass("active");
    }

    // Handle click on MULTI PAGE button
    $("#multipage-btn").click(function () {
        togglePages(".multipage-page", ".onepage-page", "#multipage-btn", "#onepage-btn");
    });
    $("#onepage-btn").click(function () {
        togglePages(".onepage-page", ".multipage-page", "#onepage-btn", "#multipage-btn");
    });


    // ------------------------------------------------------------------------------------------------------------------------------------------------

    if ($('.rr_title_anim').length > 0) {
        let splitTitleLines = gsap.utils.toArray(".rr_title_anim");
        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "words, lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.3,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
    }

    if ($('.rr-char-animation').length > 0) {
        // 25. Title Animation
        let char_come = gsap.utils.toArray(".rr-char-animation");
        char_come.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "chars, words"
            });
            gsap.set(splitTextLine, {
                perspective: 300
            });
            itemSplitted.split({
                type: "chars, words"
            })
            tl.from(itemSplitted.chars, {
                duration: 1,
                delay: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
        });
    }

    var tp_feature_slide = new Swiper(".rr-feature-slide-top", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 4000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    var tp_feature_slide = new Swiper(".rr-feature-slide-middle", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 4000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    // zoom in
    $(".anim-zoomin").each(function () {

        // Add wrap <div>.
        $(this).wrap('<div class="anim-zoomin-wrap"></div>');

        // Add overflow hidden.
        $(".anim-zoomin-wrap").css({
            "overflow": "hidden"
        })

        var $this = $(this);
        var $asiWrap = $this.parents(".anim-zoomin-wrap");

        let tp_ZoomIn = gsap.timeline({
            scrollTrigger: {
                trigger: $asiWrap,
                start: "top 100%",
                markers: false,
            }
        });
        tp_ZoomIn.from($this, {
            duration: 1.5,
            autoAlpha: 0,
            scale: 1.2,
            ease: Power2.easeOut,
            clearProps: "all"
        });

    });

    ////showcase-slider
    var showcase = new Swiper('.rr-showcase-active', {
        slidesPerView: 2,
        loop: true,
        autoplay: true,
        arrow: false,
        spaceBetween: 300,
        speed: 1000,
        centeredSlides: true,
        breakpoints: {
            '1600': {
                slidesPerView: 2,
                spaceBetween: 200,
            },
            '1400': {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            '1200': {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            '992': {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            '768': {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            '576': {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            '0': {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
        a11y: false,

    });

    ////showcase-slider
    var showcase = new Swiper('.rr-sb-slider-active', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        arrow: false,
        spaceBetween: 0,
        speed: 1000,
        centeredSlides: true,
        a11y: false,

    });

    ////showcase-slider
    var showcase = new Swiper('.rr-sb-slider-active-2', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        arrow: false,
        spaceBetween: 0,
        speed: 1500,
        centeredSlides: true,
        a11y: false,

    });

    var rr_feature_slide = new Swiper(".rr-feature-slide-top", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 4000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    var rr_feature_slide = new Swiper(".rr-feature-slide-middle", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 4000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    if ($('.rr-inner-img-wrap').length > 0) {
        // inner-page-animation
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".rr-inner-img-wrap",
                start: "top 100%",
            }
        })
        t1.from(".img8", {
            y: 100,
            opacity: 0,
            duration: 1
        })
        t1.from(".img7", {
            x: 100,
            opacity: 0,
            duration: 1
        }, "-=0.5")

        t1.from(".img9", {
            x: -100,
            opacity: 0,
            duration: 1
        }, "-=1")
        t1.from(".img6", {
            x: 100,
            opacity: 0,
            duration: 1
        }, "-=0.6")

        t1.from(".img10", {
            x: -100,
            opacity: 0,
            duration: 1
        }, "-=1")
    }

    if ($('.rr-hero-img-wrap').length > 0) {
        // inner-page-animation
        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".rr-hero-img-wrap",
                start: "top 100%",
            }
        })
        t2.from(".img3", {
            y: 100,
            opacity: 1,
            duration: 1,
        })
        t2.from(".img2", {
            x: 100,
            opacity: 1,
            duration: 1,
        }, "-=0.9")

        t2.from(".img5", {
            x: -100,
            opacity: 1,
            duration: 1,
        }, "-=0.9")
        // t1.from(".img1", {
        //     x: 100,
        //     opacity: 0,
        //     duration: 1,
        // }, "-=0.6")

        // t1.from(".img5", {
        //     x: -100,
        //     opacity: 0,
        //     duration: 1,
        // }, "-=1")
    }



})(jQuery);