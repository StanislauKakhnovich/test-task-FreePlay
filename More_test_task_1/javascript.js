// Дополнительное:
// 1. Как и в основном задании (1), только для 3D



function removeClasses(el, prefix) {
    let classes = el.className.split(" ").filter(function(elem) {
        return elem.lastIndexOf(prefix, 0) !== 0;
    });
    el.className = classes.join(" ").trim();
}
 
let aSides = ["front", "back", "right", "left", "top", "bottom"]

function rotate(duration, speed) {

    var id = setInterval(frame, speed);
    let start = Date.now();
    function frame() {
        let timePassed = Date.now() - start;
        if (timePassed >= duration) {
            clearInterval(id);
        } else {
            const prefix = "show-";
            removeClasses(cube, prefix);
            counter++
            const rand = Math.floor(Math.random() * aSides.length);
            cube.classList.add(prefix + aSides[rand]);
        }
    }
}

document.querySelector('#rotate').addEventListener('click', rotate.bind(null, 4000, 500));
