define(function() {
    var controller = require("com/konyenb/createnewevent/usercreateneweventController");
    var actions = require("com/konyenb/createnewevent/createneweventControllerActions");
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