//Type your code here
function getFlexEventContainer(flexId) {
    var flxEventContainerRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "360dp",
        "id": "flxEventContainerRow" + flexId,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxEventLightGrey",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEventContainerRow.setDefaultUnit(kony.flex.DP);
    return flxEventContainerRow;
}

function getEventDescComp(id, left, top, eventObj, context) {
    var event = new com.konysa.event1({
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
    return event;
}

function getCreateNewEventComp(left, top, context) {
    var createnewevent = new com.konysa.createnewevent({
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
}

function getAddEventFlex(left, top) {
    var flxAddEvent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "340dp",
        "id": "flxAddEvent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": left + "dp",
        "skin": "sknFlxCreateEvent",
        "top": top + "dp",
        "width": "325dp",
        "zIndex": 20
    }, {}, {});
    flxAddEvent.setDefaultUnit(kony.flex.DP);
    var imgAddEvent = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "80%",
        "id": "imgAddEvent",
        "isVisible": true,
        "skin": "slImage",
        "src": "create_new_event_icon.png",
        "width": "80%",
        "onTouchEnd": function() {
            var navObj = new kony.mvc.Navigation("frmCreateEvent");
            navObj.navigate();
        },
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCreateNewEvent = new kony.ui.Label({
        "bottom": "100dp",
        "centerX": "50%",
        "id": "lblCreateNewEvent",
        "isVisible": true,
        "skin": "sknLblCreateEventTitle",
        "text": "CREATE NEW EVENT",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAddEvent.add(imgAddEvent, lblCreateNewEvent);
    return flxAddEvent;
}

function getFooter(left, top) {
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
}