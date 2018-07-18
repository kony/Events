define(function() {
    var controller = require("com/konyenb/sessionTemp/usersessionTempController");
    var actions = require("com/konyenb/sessionTemp/sessionTempControllerActions");
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