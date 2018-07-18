define(function() {
    var controller = require("com/konyenb/eventpreview/usereventpreviewController");
    var actions = require("com/konyenb/eventpreview/eventpreviewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});