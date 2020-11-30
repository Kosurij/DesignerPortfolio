$(function () {

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
        $(".modal").hide();
        $(modalId).show();
        $("body").addClass('no-scroll');
    })

    modalClose.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");
        console.log(modalParent);
        modalParent.hide();
        $("body").removeClass('no-scroll');
    })

    $(".modal").on("click", function (event) {
        $(this).hide();
        $("body").removeClass('no-scroll');
    })

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    })


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

        currentSlider.hide();
        currentSlider.prev().show();
        if (first == currentSlider.attr('id')) {
            $("body").removeClass('no-scroll')
        };
    })

    $('.slickNext').on('click', function (event) {
        event.preventDefault();
        let currentSlider = $(this).parents('.modal');
        let last = $('.modalWorks').find('.modal').last().attr('id');

        currentSlider.hide();
        currentSlider.next().show();
        if (last == currentSlider.attr('id')) {
            $("body").removeClass('no-scroll')
        }
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

});