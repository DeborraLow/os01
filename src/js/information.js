document.addEventListener("DOMContentLoaded", function() {

    var informationSection = document.querySelector('.js-information');
    var informationOpener = document.querySelector('.js-open-information');
    var informationCloser = document.querySelector('.js-close-information');
    var menu = document.querySelector('.js-menu');
    var toggleMenu = document.querySelector('.js-toggle-menu');

    toggleMenu.addEventListener('click', function() {
        menu.classList.toggle('open');
        toggleMenu.classList.toggle('open');
    })


    informationOpener.addEventListener('click', function(e) {
        e.preventDefault();
        informationSection.style.display = 'block';
        setTimeout(function() {
            informationSection.classList.add('open');
        }, 1);
        informationOpener.classList.add('active');
        informationCloser.classList.remove('active');

        menu.classList.remove('open');
        toggleMenu.classList.remove('open');
    })


    informationCloser.addEventListener('click', function(e) {
        e.preventDefault();
        informationSection.classList.remove('open');
        setTimeout(function() {
            informationSection.style.display = 'none';
        }, 300);
        informationOpener.classList.remove('active');
        informationCloser.classList.add('active');

        menu.classList.remove('open');
        toggleMenu.classList.remove('open');
    })

})
