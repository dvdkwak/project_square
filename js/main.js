function startGame() {
    keysDown = {};
    myGameArea.start();
    bot1 = new component();
    floor = new component();
    bot1.create(30, 30, "black", 20, 100, 10, 20);
    floor.create(3000, 30, "black", 0, (window.innerHeight-30), 0, 0);
    bot1.keys(38, 40, 37, 39);
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
    bot1.update(floor);
    floor.update(bot1);
}