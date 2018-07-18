define(function() {
    var controller = require("com/konyenb/event/usereventController");
    var actions = require("com/konyenb/event/eventControllerActions");
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