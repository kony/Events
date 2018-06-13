define(function() {
    var controller = require("Reusable/TimePicker/userTimePickerController");
    var actions = require("Reusable/TimePicker/TimePickerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "TimeValue", function(val) {
            this.view.lblTime.text = val;
        });
        defineGetter(this, "TimeValue", function() {
            return this.view.lblTime.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});