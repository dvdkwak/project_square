function startGame() {
    keysDown = {};
    myGameArea.start();
    player = new component(30, 30, "black", 20, 100, 10, 20);
    floor = new Array();
    floor[0] = new component(500, 30, "black", 0, (window.innerHeight-30), 0, 0);
    floor[1] = new component(500, 30, "black", 500, 500, 0, 0);
    floor[2] = new component(500, 30, "black", 200, 100, 0, 0);
    player.create();
    floor[0].create();
    floor[1].create();
    floor[2].create();
    console.log(floor);
    player.keys(37, 39, 38);
    document.addEventListener('keydown', function(e){
        pressedKey = e.keyCode;
        keysDown[e.keyCode] = true;
    }, false);
    document.addEventListener('keyup', function(e){
        pressedKey = '0';
        delete keysDown[e.keyCode];
    }, false);
    setInterval(update, 20);
}

function update(){
    myGameArea.clear();
    player.update(floor);
    floor[0].update("");
    floor[1].update("");
    floor[2].update("");
}