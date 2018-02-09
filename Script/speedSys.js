var speedSys = function(){
    this.init = function(target){
        this.speed = cc.p(0, 0);
        this.target = target;
        this.defalPos = target.node.getPosition();
    }

    this.setSpeed = function(speed){
        this.speed = speed;
    }

    this.update= function(dt){
        this.target.node.x += this.speed.x * dt;
        this.target.node.y += this.speed.y * dt;
        this.distance = cc.pDistance(this.defalPos, this.target.node.getPosition());
    }

    this.destroy = function(){

    }
}

module.exports = {
    new : function(){
        return new speedSys();
    }
}