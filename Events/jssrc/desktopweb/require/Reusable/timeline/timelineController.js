define(function() {
    var controller = require("Reusable/timeline/usertimelineController");
    var actions = require("Reusable/timeline/timelineControllerActions");
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