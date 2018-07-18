function parseEventData(response) {
    var eventImageMap = processEventItem(response.event_images, "event_id");
    var eventSessionsMap = processEventItem(response.event_sessions, "event_id");
    var eventPresenterMap = processEventItem(response.presenter, "event_id");
    var eventRegistrationMap = processEventItem(response.event_registration, "event_id");
    var eventLocationMap = processEventItem(response.location, "event_id");
    var eventBannersMap = processEventItem(response.event_banners, "event_id");
    var eventLength = response.event.length;
    var eventId;
    var eventList = response.event;
    for (var i = 0; i < eventLength; i++) {
        eventId = eventList[i]["event_id"];
        eventList[i]["event_images"] = eventImageMap[eventId];
        eventList[i]["event_sessions"] = eventSessionsMap[eventId];
        eventList[i]["presenter"] = eventPresenterMap[eventId];
        eventList[i]["event_registration"] = eventRegistrationMap[eventId];
        eventList[i]["location"] = eventLocationMap[eventId];
        eventList[i]["event_banners"] = eventBannersMap[eventId];
    }
    return eventList;
}

function processEventItem(dataList, key) {
    if (dataList === null || dataList === undefined || key === undefined || key === null) return null;
    var listLength = dataList.length;
    var result = {};
    var id, data;
    for (var i = 0; i < listLength; i++) {
        id = dataList[i][key];
        data = result[id];
        if (data === undefined) {
            data = [];
            data.push(dataList[i]);
            result[id] = data;
        } else {
            data.push(dataList[i]);
        }
    }
    return result;
}