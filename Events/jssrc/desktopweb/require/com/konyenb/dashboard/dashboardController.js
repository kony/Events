define(function() {
    var controller = require("com/konyenb/dashboard/userdashboardController");
    var actions = require("com/konyenb/dashboard/dashboardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "username", function(val) {
            this.view.lblUserName.text = val;
        });
        defineGetter(this, "username", function() {
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
        defineSetter(this, "isUsernameVisible", function(val) {
            this.view.lblUserName.isVisible = val;
        });
        defineGetter(this, "isUsernameVisible", function() {
            return this.view.lblUserName.isVisible;
        });
        defineSetter(this, "isProfileVisible", function(val) {
            this.view.imgProfile.isVisible = val;
        });
        defineGetter(this, "isProfileVisible", function() {
            return this.view.imgProfile.isVisible;
        });
        defineSetter(this, "profileSrc", function(val) {
            this.view.imgProfile.src = val;
        });
        defineGetter(this, "profileSrc", function() {
            return this.view.imgProfile.src;
        });
        defineSetter(this, "isLoginVisible", function(val) {
            this.view.btnUser.isVisible = val;
        });
        defineGetter(this, "isLoginVisible", function() {
            return this.view.btnUser.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_btnLoginClick_e7025cff34c0420b9769292fe0f3792d = function() {
        if (this.btnLoginClick) {
            this.btnLoginClick.apply(this, arguments);
        }
    }
    return controller;
});