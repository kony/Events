define(function() {
    var controller = require("com/konysa/event1/userevent1Controller");
    var actions = require("com/konysa/event1/event1ControllerActions");
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