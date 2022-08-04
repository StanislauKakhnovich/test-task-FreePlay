function move(from, to, duration, speed) {
    var rectMove = document.querySelector('.move');
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
            rectMove.style.transform = 'matrix(' + 1 + ',' + 0 + ',' + 0 + ',' + 1 + ',' + posPx + ',' + posPy + ')';
        }
    }
}

document.querySelector('#move').addEventListener('click', move.bind(null, [0,0], [900,300], 1000, 10));