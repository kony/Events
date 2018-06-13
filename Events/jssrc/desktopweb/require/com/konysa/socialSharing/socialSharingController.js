define(function() {
    var controller = require("com/konysa/socialSharing/usersocialSharingController");
    var actions = require("com/konysa/socialSharing/socialSharingControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "shareSrc", function(val) {
            this.view.imgShare.src = val;
        });
        defineGetter(this, "shareSrc", function() {
            return this.view.imgShare.src;
        });
        defineSetter(this, "imgHeight", function(val) {
            this.view.imgShare.height = val;
        });
        defineGetter(this, "imgHeight", function() {
            return this.view.imgShare.height;
        });
        defineSetter(this, "imgWidth", function(val) {
            this.view.imgShare.width = val;
        });
        defineGetter(this, "imgWidth", function() {
            return this.view.imgShare.width;
        });
        defineSetter(this, "imgVisibility", function(val) {
            this.view.imgShare.isVisible = val;
        });
        defineGetter(this, "imgVisibility", function() {
            return this.view.imgShare.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});