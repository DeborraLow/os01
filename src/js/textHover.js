document.addEventListener("DOMContentLoaded", function() {

    var hoverTriggerList = document.querySelectorAll('.js-hover-trigger');
    var hoverTriggerListLength = hoverTriggerList.length;
    var hoverElement = document.querySelector('.js-text-hover');
    var bigTextW;
    var bigTextOverflow;
    var smallTextW;

    for(var i = 0; i < hoverTriggerListLength; i++) {

        hoverTriggerList[i].addEventListener('mouseover', function(e) {
            if(!document.body.classList.contains('touch')) {
                hoverElement.classList.add('active');
                hoverElement.innerHTML = e.target.innerHTML;
                bigTextW = hoverElement.getBoundingClientRect().width;
                bigTextOverflow = Math.max(0, bigTextW - window.innerWidth);
                smallTextW = e.target.getBoundingClientRect().width;
            }
        })


        hoverTriggerList[i].addEventListener('mouseout', function(e) {
            if(!document.body.classList.contains('touch')) {
                hoverElement.classList.remove('active');
                hoverElement.innerHTML = '';
            }

        })


        hoverTriggerList[i].addEventListener('mousemove', function(e) {
            if(!document.body.classList.contains('touch')) {
                var rect = e.target.getBoundingClientRect();
                //var w = rect.width;
                var pos = e.x - rect.left;

                var move = -1 * pos * bigTextOverflow / smallTextW;
                //hoverElement.style.transform = 'translate(calc(50vw + ' + (-1 * pos / w * 100) + '%), -50%)';
                hoverElement.style.transform = 'translate(' + move + 'px, -50%)';
            }
        })
    }


})
