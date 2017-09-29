function component(){

    //Object creation function
    this.create = function(width, height, color, x, y, speed, gravity){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.velocitiy_y = gravity;
        this.ctx = myGameArea.context;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    };

    //the update function to keep the object 'alive'
    this.update = function(obj){
        this.mapControl();
        this.ctx = myGameArea.context;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        if(this.collisionCheck(obj)){
            this.velocitiy_y = 0;
        }
        if(this.hasKeys){
            if (this.left in keysDown){this.x -= this.speed;}
            if (this.right in keysDown){this.x += this.speed;}
        }
        this.y += this.velocitiy_y;
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

    //setting preferred keys
    this.keys = function(up, down, left, right){
        this.up = up;
        this.down = down;
        this.right = right;
        this.left = left;
        this.hasKeys = true;
    };

    //mpControl function to prevent going off the map
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

    //ground collision event
    this.collisionCheck = function(obj){
        if (this.x > obj.x + obj.width){return false;}
        if (this.x + obj.width < obj.x){return false;}
        if (this.y > obj.y + obj.height){return false;}
        if (this.y + obj.height < obj.y){return false;}
        return true;
    };
}