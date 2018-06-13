define(function() {
    var controller = require("com/konysa/dashboard/userdashboardController");
    var actions = require("com/konysa/dashboard/dashboardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "text", function(val) {
            this.view.lblUserName.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.lblUserName.text;
        });
        defineSetter(this, "iconVisibility", function(val) {
            this.view.flxMenuIcon.isVisible = val;
        });
        defineGetter(this, "iconVisibility", function() {
            return this.view.flxMenuIcon.isVisible;
        });
        defineSetter(this, "Title", function(val) {
            this.view.lblDashboard.text = val;
        });
        defineGetter(this, "Title", function() {
            return this.view.lblDashboard.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});