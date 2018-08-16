define(function() {
    return {
        "properties": [{
            "name": "isRemoveVisible",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "isEditVisible",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "isRegisteredVisible",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["setEvent"],
        "events": ["onRemove", "onEdit", "onView"]
    }
});