// window.onload =  function() {
//
//     var topElementList = document.querySelectorAll('.flickity-prev-next-button');
//     var topElementListLength = topElementList.length;
//
//
//     for(var i = 0; i < topElementListLength; i++) {
//         topElementList[i].addEventListener('mousemove', function(e) {
//             handleMousemove(e.target, e);
//         })
//
//         topElementList[i].addEventListener('mouseleave', function(e) {
//             var previous = document.querySelector('.js-carousel-cell.hover');
//             previous ? previous.classList.remove('hover') : false;
//         })
//     }
//
// }
//
//
// function handleMousemove(element, event) {
//
//     if (document.elementFromPoint) {
//
//         // hide top element
//         element.style.visibility = 'hidden';
//
//         // get the element underneath, if any
//         var under = document.elementFromPoint(event.clientX, event.clientY).parentNode;
//
//         // show again top element
//         element.style.visibility = 'visible';
//
//         if(under.classList.contains('is-selected')) {
//             var previous = document.querySelector('.js-carousel-cell.hover');
//             previous ? previous.classList.remove('hover') : false;
//         } else {
//             under.classList.add('hover');
//         }
//
//         under = undefined;
//     }
//
// }
