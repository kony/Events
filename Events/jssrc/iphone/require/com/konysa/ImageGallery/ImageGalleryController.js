define(function() {
    var controller = require("com/konysa/ImageGallery/userImageGalleryController");
    var actions = require("com/konysa/ImageGallery/ImageGalleryControllerActions");
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