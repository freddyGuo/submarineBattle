var SkyManager = function(){

}


var SubmarinesMgr = function(){

}

var gameManager = {
    init : function(){
        this.sky        = new SkyManager();
        this.submarines = new SubmarinesMgr();
    },
};


module.exports = gameManager;