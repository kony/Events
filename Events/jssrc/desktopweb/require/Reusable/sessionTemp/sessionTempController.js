define(function() {
    var controller = require("Reusable/sessionTemp/usersessionTempController");
    var actions = require("Reusable/sessionTemp/sessionTempControllerActions");
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