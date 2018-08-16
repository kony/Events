define(function() {
    var controller = require("com/konyenb/eventpreview/usereventpreviewController");
    var actions = require("com/konyenb/eventpreview/eventpreviewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "isTopRegisterVisible", function(val) {
            this.view.btnRegister.isVisible = val;
        });
        defineGetter(this, "isTopRegisterVisible", function() {
            return this.view.btnRegister.isVisible;
        });
        defineSetter(this, "isBottomRegisterVisible", function(val) {
            this.view.btnRegisterBottom.isVisible = val;
        });
        defineGetter(this, "isBottomRegisterVisible", function() {
            return this.view.btnRegisterBottom.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onPrevBack_c30194728dc24fd0b83c3685661b3346 = function() {
        if (this.onPrevBack) {
            this.onPrevBack.apply(this, arguments);
        }
    }
    controller.AS_onBottomRegisterClick_e2c365202c834bb4ab655dd92829e638 = function() {
        if (this.onBottomRegisterClick) {
            this.onBottomRegisterClick.apply(this, arguments);
        }
    }
    controller.AS_onTopRegisterClick_db3e186ec15241deb6b920cea620ed02 = function() {
        if (this.onTopRegisterClick) {
            this.onTopRegisterClick.apply(this, arguments);
        }
    }
    return controller;
});