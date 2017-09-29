function component(){
    this.create = function(width, height, color, x, y, speed){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
        this.ctx = myGameArea.context;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.update = function(){
        this.mapControl();
        this.ctx = myGameArea.context;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        if (this.left in keysDown && !(this.up in keysDown) && !(this.down in keysDown)){this.x -= this.speed;}
        if (this.right in keysDown && !(this.up in keysDown) && !(this.down in keysDown)){this.x += this.speed;}
        if (this.up in keysDown){this.y -= this.speed;}
        if (this.down in keysDown){this.y += this.speed;}

        // alternative movement
        // if(pressedKey == this.left){
        //     this.x -= this.speed;
        // }
        // if(pressedKey == this.right){
        //     this.x += this.speed;
        // }
        // if(pressedKey == this.down){
        //     this.y += this.speed;
        // }
        // if(pressedKey == this.up){
        //     this.y -= this.speed;
        // }
    };
    this.keys = function(up, down, left, right){
        this.up = up;
        this.down = down;
        this.right = right;
        this.left = left;
    };
    this.mapControl = function(){
        if(this.x >= (myGameArea.canvas.width - this.width/2)){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = myGameArea.canvas.width - this.width;
        }
        if(this.y < 0){
            this.y = myGameArea.canvas.height - this.height;
        }
        if(this.y >= (myGameArea.canvas.height - this.height/2)){
            this.y = 0;
        }
    };
    this.collision = function(x, y, ox, oy){

    };
}