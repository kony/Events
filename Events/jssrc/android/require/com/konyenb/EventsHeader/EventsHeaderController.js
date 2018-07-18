define(function() {
    var controller = require("com/konyenb/EventsHeader/userEventsHeaderController");
    var actions = require("com/konyenb/EventsHeader/EventsHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});