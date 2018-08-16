define("flxSegSpeakerRoot", function() {
    return function(controller) {
        var flxSegSpeakerRoot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxSegSpeakerRoot",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknFlexDeskTransparant",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSegSpeakerRoot.setDefaultUnit(kony.flex.DP);
        var lblHorizontalLine = new kony.ui.Label({
            "centerX": "50%",
            "height": "1px",
            "id": "lblHorizontalLine",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblBGWhieDesk",
            "textStyle": {},
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSegSpeakerRootContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxSegSpeakerRootContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSegSpeakerRootContainer.setDefaultUnit(kony.flex.DP);
        var flxEventAddress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxEventAddress",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "52dp",
            "width": "79%",
            "zIndex": 1
        }, {}, {});
        flxEventAddress.setDefaultUnit(kony.flex.DP);
        var lblEventAddress = new kony.ui.Label({
            "id": "lblEventAddress",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLblEventAddressDesk",
            "text": "Convention Center, Hyderabad",
            "textStyle": {},
            "top": "20%",
            "width": "97%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEventDateTime = new kony.ui.Label({
            "id": "lblEventDateTime",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLblEventDayTimeDesk",
            "text": "Monday, 10 AM-5 PM",
            "textStyle": {},
            "top": "4%",
            "width": "97%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEventAddress.add(lblEventAddress, lblEventDateTime);
        flxSegSpeakerRootContainer.add(flxEventAddress);
        flxSegSpeakerRoot.add(lblHorizontalLine, flxSegSpeakerRootContainer);
        return flxSegSpeakerRoot;
    }
})