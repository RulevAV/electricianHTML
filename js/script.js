$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        tClose:'Закрыть',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            tPrev: 'Назад', // title for left button
            tNext: 'Дальше', // title for right button
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        },
        image: {
            tError: 'Изображение удалено.',
            titleSrc: function (item) {
                return item.el.attr('title') + '';
            }
        }
    });
});