$(function () {
    $('a').on('click', function (event) {
        event.preventDefault();
    });

    // Filter
    let filter = $("[data-filter]");
    filter.on('click', function (event) {
        event.preventDefault();
        let cat = $(this).data('filter');

        $("[data-cat]").each(function () {
            let workCat = $(this).data('cat');

            if (cat == 'All') {
                $('[data-cat]').removeClass('hide');
            } else {
                if (workCat !== cat) {
                    $(this).addClass('hide')
                } else {
                    $(this).removeClass('hide')
                }
            }
        });
    })


    // Modals 
    let modalCall = $('[data-modal]');
    let modalClose = $('[data-close]');

    modalCall.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data("modal");
        $(".modal").removeClass('show');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        if (window.matchMedia("(max-width: 830px)").matches) {
            $('[data-slider="slick"]').slick('setPosition').slick();
        }

    })

    modalClose.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");
        console.log(modalParent);
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    })

    $(".modal").on("click", function (event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    })

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    })

    // @media Modals 



    // Slider: 
    // https://kenwheeler.github.io/slick/

    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    $('.slickPrev').on('click', function (event) {
        event.preventDefault();
        let currentSlider = $(this).parents('.modal');
        let first = $('.modalWorks').find('.modal').first().attr('id');

        currentSlider.removeClass('show');
        currentSlider.prev().addClass('show');
        if (first == currentSlider.attr('id')) {
            $("body").removeClass('no-scroll')
        };

        if (window.matchMedia("(max-width: 830px)").matches) {
            $('[data-slider="slick"]').slick('setPosition').slick();
        }
    })

    $('.slickNext').on('click', function (event) {
        event.preventDefault();
        let currentSlider = $(this).parents('.modal');
        let last = $('.modalWorks').find('.modal').last().attr('id');

        currentSlider.removeClass('show');
        currentSlider.next().addClass("show");
        if (last == currentSlider.attr('id')) {
            $("body").removeClass('no-scroll')
        }
        if ($(".works__wrapper").hasClass('show')) {
            $(".works__wrapper").removeClass('show');
            $("body").removeClass('no-scroll')
        }

        if (window.matchMedia("(max-width: 830px)").matches) {
            $('[data-slider="slick"]').slick('setPosition').slick();
        }
    })

    $('.loader').on("click", function () {
        $('.portfolio__col').show();
        $('.works__wrapper').find('.modal').unwrap();
        let $this = $(this);
        $this.hide();
    })

    // Scroll 

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        console.log(elementId)
        let elementOffset = $(elementId).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset
        }, 700);
    });

    // NavToggle

    let navToggle = $("#navToggle");
    let nav = $("#nav");

    navToggle.on("click", event => {
        event.preventDefault();

        nav.toggleClass("show");
    })

    // Burger menu
    let burger = $(".burger");
    burger.on('click', () => {
        burger.toggleClass('open');
    })

    $('a.nav__link').on('click', () => {
        nav.toggleClass('show');
        burger.toggleClass('open');
    })

});

