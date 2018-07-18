define(function() {
    var controller = require("com/konyenb/timeline/usertimelineController");
    var actions = require("com/konyenb/timeline/timelineControllerActions");
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