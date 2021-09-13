const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const Nextvals = next.getAttribute('data-val')
// divs
const log1 = document.querySelector('.log-1')
const log2 = document.querySelector('.log-2')
const log3 = document.querySelector('.log-3')
// btns events
next.addEventListener('click', slideRight, false);
prev.addEventListener('click', slideLeft, false);
dotColor()
function slideRight(e) {
    e.preventDefault();
    var val = e.target.getAttribute('data-val')
    console.log(val)
    if (val == 1) {
        val++
        log1.style.left = "-150%"
        log2.style.left = "50%"
        log1.style.zIndex = "-1"
        log2.style.zIndex = "100"
        log3.style.zIndex = "-1"
        e.target.setAttribute('data-val', val)
        prev.setAttribute('data-val', val)
    } else if (val == 2) {
        val++
        // log1.style.left = "150%"
        log2.style.left = "-150%"
        log3.style.left = "50%"
        log1.style.zIndex = "-1"
        log2.style.zIndex = "-1"
        log3.style.zIndex = "100"
        e.target.setAttribute('data-val', val)
        prev.setAttribute('data-val', val)
        next.innerText = "Log In"
    }
    prev.style.display = "flex"
    ref()
    dotColor()
}
function slideLeft(e) {
    var val = e.target.getAttribute('data-val')
    console.log(val)
    if (val == 2) {
        log1.style.left = "50%"
        log1.style.zIndex = "100"
        log2.style.zIndex = "-1"
        log3.style.zIndex = "-1"
        log1.style.zIndex = "100"
        log2.style.left = "150%"
        e.target.setAttribute('data-val', "1")
        next.setAttribute('data-val', "1")
        prev.style.display = "none"
    } else if (val == 3) {
        // log1.style.left = "150%"
        log2.style.left = "50%"
        log1.style.zIndex = "-1"
        log2.style.zIndex = "100"
        log3.style.zIndex = "-1"
        log3.style.left = "150%"
        e.target.setAttribute('data-val', "2")
        next.setAttribute('data-val', "2")
        next.innerText = "Log In"
    }
    ref()
    dotColor()
}
function ref() {
    if (next.getAttribute('data-val') > 0 && next.getAttribute('data-val') < 3) {
        next.innerText = "Next"
    }
}
// bar active
function dotColor() {
    const dots = document.getElementsByClassName('circle');
    for (let i = 1; i <= dots.length; i++) {
        if (next.getAttribute('data-val') == i) {
            dots[i - 1].classList.add('active')
        } else {
            dots[i - 1].classList.remove('active')
        }
    };
}