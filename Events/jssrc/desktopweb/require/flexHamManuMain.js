define("flexHamManuMain", function() {
    return function(controller) {
        var flexHamManuMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flexHamManuMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexHamManuMain.setDefaultUnit(kony.flex.DP);
        var flexHamMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexHamMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flexHamMenu.setDefaultUnit(kony.flex.DP);
        var flexHamImgLable = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "75%",
            "id": "flexHamImgLable",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "3dp",
            "skin": "slFbox",
            "top": "5%",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flexHamImgLable.setDefaultUnit(kony.flex.DP);
        var imgIcon = new kony.ui.Image2({
            "centerY": "50%",
            "height": "38dp",
            "id": "imgIcon",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "neweventicon.png",
            "top": "0%",
            "width": "38dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblText = new kony.ui.Label({
            "centerY": "49%",
            "height": "50%",
            "id": "lblText",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblHAm",
            "text": "Create New Events",
            "top": "1dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexHamImgLable.add(imgIcon, lblText);
        var lblUnderLineHam = new kony.ui.Label({
            "bottom": "0%",
            "centerX": "50%",
            "height": "1px",
            "id": "lblUnderLineHam",
            "isVisible": true,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "width": "100%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexHamMenu.add(flexHamImgLable, lblUnderLineHam);
        flexHamManuMain.add(flexHamMenu);
        return flexHamManuMain;
    }
})