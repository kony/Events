define(function() {
    var controller = require("com/konyenb/menuItem/usermenuItemController");
    var actions = require("com/konyenb/menuItem/menuItemControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "option1ImageVisibility", function(val) {
            this.view.imgAllNewEvent.isVisible = val;
        });
        defineGetter(this, "option1ImageVisibility", function() {
            return this.view.imgAllNewEvent.isVisible;
        });
        defineSetter(this, "option1Text", function(val) {
            this.view.lblAllEvent.text = val;
        });
        defineGetter(this, "option1Text", function() {
            return this.view.lblAllEvent.text;
        });
        defineSetter(this, "option2ImageVisibility", function(val) {
            this.view.imgCreateNewEvent.isVisible = val;
        });
        defineGetter(this, "option2ImageVisibility", function() {
            return this.view.imgCreateNewEvent.isVisible;
        });
        defineSetter(this, "option2Text", function(val) {
            this.view.lblCreateNewEvent.text = val;
        });
        defineGetter(this, "option2Text", function() {
            return this.view.lblCreateNewEvent.text;
        });
        defineSetter(this, "option3ImageVisibility", function(val) {
            this.view.imgManageUser.isVisible = val;
        });
        defineGetter(this, "option3ImageVisibility", function() {
            return this.view.imgManageUser.isVisible;
        });
        defineSetter(this, "option3Text", function(val) {
            this.view.lblManageUser.text = val;
        });
        defineGetter(this, "option3Text", function() {
            return this.view.lblManageUser.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});