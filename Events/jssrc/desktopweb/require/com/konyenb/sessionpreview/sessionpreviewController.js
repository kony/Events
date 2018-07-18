define(function() {
    var controller = require("com/konyenb/sessionpreview/usersessionpreviewController");
    var actions = require("com/konyenb/sessionpreview/sessionpreviewControllerActions");
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