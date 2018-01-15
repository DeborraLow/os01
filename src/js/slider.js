document.addEventListener("DOMContentLoaded", function() {

    var slider = document.querySelector('.main-carousel');

    var flkty = new Flickity( slider, {
        contain: true,
        pageDots: false,
        //prevNextButtons: false,
        wrapAround: true
    });
})
