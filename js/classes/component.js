function component(width, height, color, x, y, speed, gravity){

    //Object creation function
    this.create = function(){
        this.width = width;
        this.height = height;
        this.status = "idle";
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.gravity = gravity;
        this.velocitiy_y = gravity;
        this.collided = Array();
        this.ctx = myGameArea.context;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    };

    //the update function to keep the object 'alive'
    this.update = function(arr){
        this.mapControl();
        this.ctx = myGameArea.context;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.setStatus(arr);
    };

    //setting preferred keys
    this.keys = function(left, right, jump){
        this.right = right;
        this.left = left;
        this.jump = jump;
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
        if (this.x + this.width < obj.x){return false;}
        if (this.y > obj.y + obj.height){return false;}
        if (this.y + this.height < obj.y){return false;}
        return true;
    };

    this.setStatus = function(arr){
        if(arr != ""){
            for(i = 0; i < arr.length; i++) {
                if (this.collisionCheck(arr[i])) {
                    this.collided[i] = true;
                }else{
                    this.collided[i] = false;
                }
            }
            if(this.collided.includes(true)){
                this.velocitiy_y = 0;
            }else{
                this.velocitiy_y = this.gravity;
            }
            if(this.hasKeys){
                if (this.left in keysDown){this.status = "left";}
                if (this.right in keysDown){this.status = "right";}
                if (this.jump in keysDown){this.status = "jump"}
            }
            this.move(this.status);
            this.y += this.velocitiy_y;
        }
    };

    this.move = function(status){
        switch(status){
            case "left":
                this.x -= this.speed;
                this.status = "idle";
                break;
            case "right":
                this.x += this.speed;
                this.status = "idle";
                break;
            case "jump":
                while(i < 50){
                    this.velocitiy_y = -this.gravity;
                    i++;
                }
                this.status = "idle";
                break;
            case "idle":

                break;
        }
    };
}