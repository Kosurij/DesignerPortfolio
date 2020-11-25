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
    let modal = $('[data-modal]');
    let modalClose = $('[data-close]');

    modal.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data("modal");
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
    })

    modalClose.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");
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


})