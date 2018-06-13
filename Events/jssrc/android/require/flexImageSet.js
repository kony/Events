define("flexImageSet", function() {
    return function(controller) {
        var flexImageSet = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexImageSet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0fc0e4734319348",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexImageSet.setDefaultUnit(kony.flex.DP);
        var flexImageGesture = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexImageGesture",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexImageGesture.setDefaultUnit(kony.flex.DP);
        var imageStatus = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imageStatus",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexImageGesture.add(imageStatus);
        flexImageSet.add(flexImageGesture);
        return flexImageSet;
    }
})