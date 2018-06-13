define(function() {
    var controller = require("Reusable/EventsHeader/userEventsHeaderController");
    var actions = require("Reusable/EventsHeader/EventsHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});