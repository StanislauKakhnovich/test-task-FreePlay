// Основное:
// 1. Нужно написать набор функций для управления объектом в 2D пространстве:
// Перемещение, поворот, перемещение с динамической скоростью(разбег-торможение).
// Функции должны выдавать массивы значений, для промежутка времени. Например:
// moveTo (from, to, duration, speed) и т.д.

var rectAnimation = document.querySelector('.move');

function move(from, to, duration, speed) {
    
    var posPx = from[0];
    var posPy = from[1];
    var id = setInterval(frame, 10);
    let start = Date.now();
    function frame() {
        let timePassed = Date.now() - start;
        if (timePassed >= duration) {
            clearInterval(id);
        } else { 
            if(posPx<=to[0]) {
                if(Math.abs(from[0]-to[0]) >= Math.abs(from[1]-to[1])) {
                    posPx += speed;
                    
                } 
                else posPx += (Math.abs(from[0]-to[0]))/(Math.abs(from[1]-to[1]))*speed;
            } 
            if(posPy<=to[1]) {
                if(Math.abs(from[0]-to[0]) >= Math.abs(from[1]-to[1])) {
                    posPy += ((Math.abs(from[1]-to[1]))/(Math.abs(from[0]-to[0])))*speed;
                    
                }  
                else posPy += speed;
            } 
            rectAnimation.style.transform = 'matrix(' + 1 + ',' + 0 + ',' + 0 + ',' + 1 + ',' + posPx + ',' + posPy + ')';
        }
    }
}
document.querySelector('#move').addEventListener('click', move.bind(null, [10,10], [800,10], 1000, 10));

function rotate(position, duration, speed) {
    var posPx = position[0];
    var posPy = position[1];
    var id = setInterval(frame, speed);
    let  angle = 0, currentAngle;
    let start = Date.now();
    function frame() {
        let timePassed = Date.now() - start;
        if (timePassed >= duration) {
            clearInterval(id);
        } else {
            currentAngle = angle++ * Math.PI / 180;
            rectAnimation.style.transform = 'matrix(' + Math.cos(currentAngle) + ',' + Math.sin(currentAngle) + ',' + -Math.sin(currentAngle) + ',' + Math.cos(currentAngle) + ','  + posPx + ',' + posPy + ')';
        }
    }
}

document.querySelector('#rotate').addEventListener('click', rotate.bind(null, [10,10], 1000, 5));

function dynamic(from, to, duration, speed) {
    
    var posPx = from[0];
    var posPy = from[1];
    var id = setInterval(frame, 10);
    let counter = 1;
    let start = Date.now();
    function frame() {
        let timePassed = Date.now() - start;
        if (timePassed >= duration) {
            clearInterval(id);
        } else { 
            if(posPx<=to[0]) {
                if(posPx<Math.abs(from[0]-to[0])/2) counter = counter*1.2;
                else if (posPx>Math.abs(from[0]-to[0])/2) counter = counter/1.2;
                if(Math.abs(from[0]-to[0]) >= Math.abs(from[1]-to[1]) && counter >= 0) {
                    posPx += speed*counter;
                } 
                else posPx += (Math.abs(from[0]-to[0]))/(Math.abs(from[1]-to[1]))*speed*counter;
            } 
            if(posPy<=to[1]) {
                if(Math.abs(from[0]-to[0]) >= Math.abs(from[1]-to[1])) {
                    posPy += ((Math.abs(from[1]-to[1]))/(Math.abs(from[0]-to[0])))*speed*counter;
                    
                }  
                else posPy += speed*counter;
            } 
            rectAnimation.style.transform = 'matrix(' + 1 + ',' + 0 + ',' + 0 + ',' + 1 + ',' + posPx + ',' + posPy + ')';
        }
    }
}
document.querySelector('#dynamic').addEventListener('click', dynamic.bind(null, [10,10], [800,10], 2000, 2));