/**
 * @function getEventDescCompgetEventDescComp
 * @description - This function dynamically create the event component dynamically
 */
function getEventDescComp(id, left, top, eventObj, context) {
    try {
        var event = new com.konyenb.event({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "340dp",
            "id": "event" + id,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": left + "dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "sknFlxEventRoot",
            "top": top + "dp",
            "width": "322dp"
        }, {}, {});
        event.setEvent(eventObj);
        event.onRemove = context.onEventRemove;
        event.onEdit = context.onEventEdit;
        event.onView = context.onViewEvent;
        return event;
    } catch (err) {
        kony.print("frmAllEventsOperations" + JSON.stringify(err));
    }
}
/**
 * @function getCreateNewEventComp
 * @description - This function dynamically create new event card
 */
function getCreateNewEventComp(left, top, context) {
    try {
        var createnewevent = new com.konyenb.createnewevent({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "340px",
            "id": "createnewevent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": left + "dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "sknFlxEventRoot",
            "top": top + "dp",
            "width": "322px"
        }, {}, {});
        createnewevent.onCreateEventClick = context.navigateToFormCreateNewEvent;
        return createnewevent;
    } catch (err) {
        kony.print("frmAllEventsOperations" + JSON.stringify(err));
    }
}
/**
 * @function getFooter
 * @description - This function dynamically create the footer
 */
function getFooter(left, top) {
    try {
        var flxFooter = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "top": top + "dp",
            "clipBounds": true,
            "height": "10%",
            "id": "flxFooter1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "17.5%",
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 20
        }, {}, {});
        flxFooter.setDefaultUnit(kony.flex.DP);
        var lblFooter = new kony.ui.Label({
            "centerX": "35%",
            "centerY": "50%",
            "height": "80%",
            "id": "lblFooter1",
            "isVisible": true,
            "skin": "sknLblFooter",
            "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFooter.add(lblFooter);
        return flxFooter;
    } catch (err) {
        kony.print("frmAllEventsOperations" + JSON.stringify(err));
    }
}

function parseEventData(response) {
    try {
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
    } catch (err) {
        kony.print("Storage Service Module" + JSON.stringify(err));
    }
}

function processEventItem(dataList, key) {
    try {
        if (dataList === null || dataList === undefined || key === undefined || key === null) {
            return;
        }
        var listLength = dataList.length;
        var result = {};
        var id,
            data;
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
    } catch (err) {
        kony.print("Storage Service Module" + JSON.stringify(err));
    }
}