document.addEventListener("DOMContentLoaded", function() {

    var slider = document.querySelector('.main-carousel');
    var current = document.querySelector('.js-carousel-current');

    //BREAKPOINT MAX HEIGHTS
    var bp_xs = 350;
    var bp_s = 600;
    var bp_m = 1050;
    var bp_l = 1500;
    var bp_xl = 2200;

    var bpList = [bp_xs, bp_s, bp_m, bp_l];
    var bpListLength = bpList.length;
    var currentBpIndex = 0;

    var window_h = window.innerHeight;
    var sliderHToWindowHRatio = 0.92; //from sizes.scss
    var firstIteration = true;

    var cellList = document.querySelectorAll('.js-carousel-cell');
    var cellListLength = cellList.length;


    checkIfBreakpointHasChanged();

    function loadImages(imgList) {

        var listLength = imgList.length;
        for(var i = 0; i < listLength; i++) {
            setImgSrc(imgList[i].querySelector('img'));
        }

        initFlickity();

    }


    function initFlickity() {

        var lazyLoadNr = 2;
        if(window_h > window.innerWidth) { lazyLoadNr = 1; }
        var flkty = new Flickity( slider, {
            contain: true,
            pageDots: false,
            draggable: true,
            wrapAround: true,
            lazyLoad: true,
            lazyLoad: lazyLoadNr,
            setGallerySize: false
        });

        //COUNTER
        flkty.on( 'select', function() {
            flkty.selectedElement.classList.remove('hover');
            current.innerHTML = flkty.selectedIndex + 1;

            //setTimeout(function(){ handleMousemove(undefined, undefined); }, 580 );
        });
    }


    function setImgSrc(img) {

        var src;

        switch (currentBpIndex) {
            case 0:
                //BP_S
                src = img.dataset.srcXs;
                break;
            case 1:
                //BP_M
                src = img.dataset.srcS;
                break;
            case 2:
                //BP_L
                src = img.dataset.srcM;
                break;
            case 3:
                //BP_XL
                src = img.dataset.srcL;
                break;
            case 4:
                //BP_XXL
                src = img.dataset.srcXl;
                break;
            default:
                break;
        }


        img.dataset.flickityLazyload = src;
    }


    function checkIfBreakpointHasChanged() {

        if(window_h * sliderHToWindowHRatio > bpList[currentBpIndex]) {

            if(currentBpIndex === bpListLength - 1) {
                window.removeEventListener('resize', handleResize);

                currentBpIndex = bpListLength;

                //resize all images
                loadImages(cellList);

            } else {
                for(var i = currentBpIndex + 1; i < bpListLength; i++) {
                   if(window_h * sliderHToWindowHRatio <= bpList[i]) {
                       currentBpIndex = i;

                       //resize all images!!!!!!!!!
                       loadImages(cellList);

                       break;
                   }
                }

                if(i === bpListLength) {

                    currentBpIndex = bpListLength;

                    //resize all images
                    loadImages(cellList);

                    window.removeEventListener('resize', handleResize);
                }
            }
        } else if (firstIteration) {
            firstIteration = false;
            loadImages(cellList);
        }
    }


    function handleResize() {
        window_h = window.innerHeight;
        checkIfBreakpointHasChanged();
    }

     window.addEventListener('resize', handleResize);

})


window.onload =  function() {

    var topElementList = document.querySelectorAll('.flickity-prev-next-button');
    var topElementListLength = topElementList.length;


    for(var i = 0; i < topElementListLength; i++) {
        topElementList[i].addEventListener('mousemove', function(e) {
            handleMousemove(e.target, e);
        })

        topElementList[i].addEventListener('mouseleave', function(e) {
            var previous = document.querySelector('.js-carousel-cell.hover');
            previous ? previous.classList.remove('hover') : false;
        })
    }

}

// var lastHoveredELement;
// var lastEvent;


function handleMousemove(element, event) {

    // if(element) {
    //     lastHoveredELement = element;
    //     lastEvent = event;
    // } else if (lastHoveredELement) {
    //     element = lastHoveredELement;
    //     event = lastEvent;
    // }


    if (element && document.elementFromPoint) {

        // hide top element
        element.style.visibility = 'hidden';

        // get the element underneath, if any
        var under = document.elementFromPoint(event.clientX, event.clientY).parentNode;


        // show again top element
        element.style.visibility = 'visible';

        if(under.classList.contains('is-selected')) {
            var previous = document.querySelector('.js-carousel-cell.hover');
            previous ? previous.classList.remove('hover') : false;
        } else {
            under.classList.add('hover');
        }


    }

}
