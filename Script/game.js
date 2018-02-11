cc.Class({
    extends: cc.Component,

    properties: {
        skyN : cc.Node,
        oceanN : cc.Node,
        submarinesP : cc.Prefab,
        shopP : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;

        this.gameManager = require("gameManager");
        this.gameManager.init(this);

        this.oceanN.on("touchmove", this.oceanMove, this)
        this.submarines = cc.instantiate(this.submarinesP);
        this.submarines.setPosition(400, -50);        
    },

    start () {

    },
    oceanMove(){

    },

    // update (dt) {},
});
