define(function() {
    return function(controller) {
        var createnewevent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "340px",
            "id": "createnewevent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "50dp",
            "onClick": controller.AS_FlexContainer_fa7c1077ef1149eca8587345b94c706d,
            "onTouchEnd": controller.AS_FlexContainer_g33b3b940cff4a7cafccfcbc8fce5868,
            "skin": "CopysknFlxEventRoot1",
            "top": "0dp",
            "width": "320px"
        }, {}, {});
        createnewevent.setDefaultUnit(kony.flex.DP);
        var imgCreateNewEvent = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "40%",
            "height": "80%",
            "id": "imgCreateNewEvent",
            "isVisible": true,
            "skin": "slImage",
            "src": "create_new_event_icon_1.png",
            "width": "80%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCreateNewEvent = new kony.ui.Label({
            "bottom": "100px",
            "centerX": "50%",
            "id": "lblCreateNewEvent",
            "isVisible": true,
            "skin": "CopysknLblCreateEventTitle",
            "text": "CREATE NEW EVENT",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        createnewevent.add(imgCreateNewEvent, lblCreateNewEvent);
        return createnewevent;
    }
})