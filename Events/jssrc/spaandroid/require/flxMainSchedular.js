define("flxMainSchedular", function() {
    return function(controller) {
        var flxMainSchedular = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMainSchedular",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMainSchedular.setDefaultUnit(kony.flex.DP);
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "left": "5%",
            "skin": "sknlblDate",
            "text": "28 FEB",
            "textStyle": {},
            "top": "7dp",
            "width": "13.33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flexTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flexTime",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "21%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flexTime.setDefaultUnit(kony.flex.DP);
        var flexRoundCorner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "focusSkin": "CopyslFbox0b68e6cc1944d43",
            "height": "60dp",
            "id": "flexRoundCorner",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyslFbox0b68e6cc1944d43",
            "top": "0%",
            "width": "60dp",
            "zIndex": 1
        }, {}, {});
        flexRoundCorner.setDefaultUnit(kony.flex.DP);
        var lblNum = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblNum",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0a8e7de80940947",
            "text": "11:30AM",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flexRoundCorner.add(lblNum);
        var lblhorStr = new kony.ui.Label({
            "height": "10px",
            "id": "lblhorStr",
            "isVisible": false,
            "left": "52%",
            "skin": "CopydefLabel0h754be040c1948",
            "text": "Label",
            "textStyle": {},
            "top": "6%",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flexTime.add(flexRoundCorner, lblhorStr);
        var flexContents = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexContents",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "44%",
            "skin": "slFbox",
            "top": "21dp",
            "width": "54%",
            "zIndex": 1
        }, {}, {});
        flexContents.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblTitle",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
            "width": "94%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxSub1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSub1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "2%",
            "skin": "slFbox",
            "top": "5dp",
            "width": "94%",
            "zIndex": 1
        }, {}, {});
        flxSub1.setDefaultUnit(kony.flex.DP);
        var imgSub1 = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgSub1",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "speaker.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSub1 = new kony.ui.Label({
            "id": "lblSub1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "sknlblSubTitle1",
            "text": "Label",
            "textStyle": {},
            "top": "2dp",
            "width": "87.41%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxSub1.add(imgSub1, lblSub1);
        var flxSub2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSub2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "2.00%",
            "skin": "slFbox",
            "top": "5dp",
            "width": "94%",
            "zIndex": 1
        }, {}, {});
        flxSub2.setDefaultUnit(kony.flex.DP);
        var imgSub2 = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgSub2",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "room.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSub2 = new kony.ui.Label({
            "id": "lblSub2",
            "isVisible": true,
            "left": "0.00%",
            "skin": "sknlblSubTitle1",
            "text": "Label",
            "textStyle": {},
            "top": "2dp",
            "width": "86.96%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxSub2.add(imgSub2, lblSub2);
        var lblDesc = new kony.ui.Label({
            "id": "lblDesc",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblDesc",
            "text": "Label",
            "textStyle": {},
            "top": "2dp",
            "width": "94%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flexMainThumbs = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flexMainThumbs",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "2dp",
            "skin": "slFbox",
            "top": "6dp",
            "width": "75.66%",
            "zIndex": 1
        }, {}, {});
        flexMainThumbs.setDefaultUnit(kony.flex.DP);
        var flexImage1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flexImage1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyslFbox0a59e854ad02947",
            "top": "0%",
            "width": "45%",
            "zIndex": 1
        }, {}, {});
        flexImage1.setDefaultUnit(kony.flex.DP);
        var imgthumb1 = new kony.ui.Image2({
            "height": "100%",
            "id": "imgthumb1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "slImage",
            "src": "thumb1.png",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexImage1.add(imgthumb1);
        var flexImage2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flexImage2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10%",
            "skin": "CopyslFbox0a59e854ad02947",
            "top": "0%",
            "width": "45%",
            "zIndex": 1
        }, {}, {});
        flexImage2.setDefaultUnit(kony.flex.DP);
        var imgthumb2 = new kony.ui.Image2({
            "height": "100%",
            "id": "imgthumb2",
            "isVisible": true,
            "left": "0.00%",
            "skin": "slImage",
            "src": "thumb1.png",
            "top": "0.00%",
            "width": "105.26%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRem = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblRem",
            "isVisible": false,
            "left": "13dp",
            "skin": "CopydefLabel0afde2e8d2d3b47",
            "text": "+4",
            "textStyle": {},
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flexImage2.add(imgthumb2, lblRem);
        flexMainThumbs.add(flexImage1, flexImage2);
        var btnDummy = new kony.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "20dp",
            "id": "btnDummy",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknbuttonDummy",
            "text": "Button",
            "top": "0dp",
            "width": "190dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDummy = new kony.ui.Label({
            "height": "2px",
            "id": "lblDummy",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblDivf2f2f1",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flexContents.add(lblName, flxSub1, flxSub2, lblDesc, flexMainThumbs, btnDummy, lblDummy);
        flxMainSchedular.add(lblDate, flexTime, flexContents);
        return flxMainSchedular;
    }
})