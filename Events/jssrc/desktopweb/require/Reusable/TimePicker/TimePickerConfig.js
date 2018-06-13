define(function() {
    return {
        "properties": [{
            "name": "TimeValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "timeInterval",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["getSelectedTime", "getNextSlot", "setTimePicker", "setStartTime", "setTimeListUI"],
        "events": ["onSelection", "onTimeListShow", "onTimeListHide"]
    }
});