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
            "skin": "sknFlexGrey",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSegSpeakerRoot.setDefaultUnit(kony.flex.DP);
        var lblHorizontalLine = new kony.ui.Label({
            "height": "1dp",
            "id": "lblHorizontalLine",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblBGWhie",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
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
        var flxDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxDate.setDefaultUnit(kony.flex.DP);
        var lblDate = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblDate",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLblEventDate",
            "text": "14",
            "textStyle": {},
            "top": "15%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblMonth = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblMonth",
            "isVisible": true,
            "skin": "sknLblEventMonth",
            "text": "MAR",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxDate.add(lblDate, lblMonth);
        var lblVerticalLine = new kony.ui.Label({
            "centerY": "50%",
            "height": "75%",
            "id": "lblVerticalLine",
            "isVisible": true,
            "left": "5dp",
            "skin": "CopydefLabel0d6babf11138d40",
            "text": " ",
            "textStyle": {},
            "width": "1dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
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
            "skin": "sknLblEventAddress",
            "text": "Convention Center, Hyderabad",
            "textStyle": {},
            "top": "20%",
            "width": "97%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblEventDateTime = new kony.ui.Label({
            "id": "lblEventDateTime",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLblEventDayTime",
            "text": "Monday, 10 AM-5 PM",
            "textStyle": {},
            "top": "4%",
            "width": "97%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxEventAddress.add(lblEventAddress, lblEventDateTime);
        flxSegSpeakerRootContainer.add(flxDate, lblVerticalLine, flxEventAddress);
        flxSegSpeakerRoot.add(lblHorizontalLine, flxSegSpeakerRootContainer);
        return flxSegSpeakerRoot;
    }
})