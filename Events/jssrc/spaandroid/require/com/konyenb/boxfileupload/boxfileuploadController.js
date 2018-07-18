define(function() {
    var controller = require("com/konyenb/boxfileupload/userboxfileuploadController");
    var actions = require("com/konyenb/boxfileupload/boxfileuploadControllerActions");
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