cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        
        this.touchingNumber = 0;
    },
    
    onCollisionEnter: function (other, self) {
        // this.node.color = cc.Color.RED;
        // this.touchingNumber ++;
        // cc.director.getPhysicsManager().gravity = cc.v2(0, 300);
        cc.log(self.node.getComponent(cc.RigidBody).linearVelocity);
        var curSpeed = self.node.getComponent(cc.RigidBody).linearVelocity
        curSpeed.y = 0 - curSpeed.y * 0.9;
        self.node.getComponent(cc.RigidBody).linearVelocity = curSpeed;

    },
    
    onCollisionStay: function (other) {
        // console.log('on collision stay');
    },
    
    onCollisionExit: function (ot) {
        // this.touchingNumber --;
        // if (this.touchingNumber === 0) {
        //     this.node.color = cc.Color.WHITE;
        // }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
