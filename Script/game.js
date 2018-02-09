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
        this.oceanN.on("touchmove", this.oceanMove, this)
        this.submarines = cc.instantiate(this.submarinesP);
        this.submarines.setPosition(400, -50);
        this.oceanN.addChild(this.submarines);
        this.skyN.addChild(cc.instantiate(this.shopP));
    },

    start () {

    },

    oceanMove(){

    },

    // update (dt) {},
});
