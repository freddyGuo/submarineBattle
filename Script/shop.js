// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        bullet : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.biubiuTag = setInterval(function(){
            this.biubiu();
        }.bind(this), 200);
        this.speedSystem = require("SpeedSys").new();
        this.speedSystem.init(this);
        this.speedSystem.setSpeed(cc.p(100, 0));
    },

    start () {

    },

    update(dt){
        this.speedSystem.update(dt)
    }, 

    onDestroy(){
        clearInterval(this.biubiuTag);
    },

    biubiu(){
        let bulletN = cc.instantiate(this.bullet);
        this.node.addChild(bulletN);
        bulletN.setPosition(0, -50);
        bulletN.getComponent("bullet").setSpeed(cc.p(0, -100));

    }, 

    onCollisionEnter(other, self){
        self.node.destroy();
    },
});
