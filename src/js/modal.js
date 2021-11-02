// Modal
$(function () {
    $('[data-modal="consultation"').on('click', function () {
        $('.overlay, #consultation').fadeIn('fast');
    });
    $('.modal__close, .overlay').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
    });
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        });
    });
});