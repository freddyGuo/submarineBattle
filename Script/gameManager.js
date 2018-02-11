var SkyManager = function(){
	this.init = function(gameUI, gameMgr){
		this.shipPrefab = gameUI.shopP;
		this.skyN       = gameUI.skyN;
	}

	this.start = function(){
		this.createShipTag = setInterval(function(){
            this.createShip();
        }.bind(this), 1000);
	}

	this.clean = function(){
		if(this.createShipTag){
			cleanInterval(this.createShipTag);
			this.createShipTag = undefined;
		}
		this.totalCount  = 0;
	}


	this.createShip = function(){
		var shipNode = cc.instantiate(this.shipPrefab);
		this.skyN.addChild(shipNode);
		var cfgData     = {};
		var dir         = Math.random() > 0.5 ? -1 : 1;
		cfgData.pos     =  cc.p(800 * dir, 0);
		cfgData.speed   = cc.p(0 - (Math.random() * 50 + 50) * dir, 0);
		cfgData.scale   = Math.random() * 0.5 + 0.5;
		cfgData.direction = dir;
		shipNode.getComponent("ship").initCfg(cfgData);
		this.totalCount += 1;
	}


}


var SubmarinesMgr = function(){

}

var gameManager = {
    init : function(gameUI){
        this.gameUI     = gameUI;
        this.submarines = new SubmarinesMgr();
        this.sky        = new SkyManager();
        this.sky.init(gameUI, this);
        this.newRound();
    },

    newRound : function(){
    	this.cleanRoundData();
    	this.initSunmarines();
    	this.initShip();
    },

    cleanRoundData : function(){
    },

    initSunmarines(){
    	
    },

    initShip(){
    	this.sky.start();

    },

    update : function(dt){

    },



    creataShip : function(createData){
        var shipN = cc.instantiate(this.shopP);
        this.skyN.addChild(shipN);
        shipN.getComponent("ship").initCfg(createData);
    },

};


module.exports = gameManager;