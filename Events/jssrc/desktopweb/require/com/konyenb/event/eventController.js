define(function() {
    var controller = require("com/konyenb/event/usereventController");
    var actions = require("com/konyenb/event/eventControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "isRemoveVisible", function(val) {
            this.view.btnRemove.isVisible = val;
        });
        defineGetter(this, "isRemoveVisible", function() {
            return this.view.btnRemove.isVisible;
        });
        defineSetter(this, "isEditVisible", function(val) {
            this.view.btnEdit.isVisible = val;
        });
        defineGetter(this, "isEditVisible", function() {
            return this.view.btnEdit.isVisible;
        });
        defineSetter(this, "isRegisteredVisible", function(val) {
            this.view.imageRegister.isVisible = val;
        });
        defineGetter(this, "isRegisteredVisible", function() {
            return this.view.imageRegister.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});