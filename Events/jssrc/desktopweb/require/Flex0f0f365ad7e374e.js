define("Flex0f0f365ad7e374e", function() {
    return function(controller) {
        var Flex0f0f365ad7e374e = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40px",
            "id": "Flex0f0f365ad7e374e",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {
            "hoverSkin": "CopyslFbox0cbb3b1ed380146"
        });
        Flex0f0f365ad7e374e.setDefaultUnit(kony.flex.DP);
        var lblTime = new kony.ui.Label({
            "height": "100%",
            "id": "lblTime",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0d5dfb20308e648",
            "text": "Label",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [11, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        Flex0f0f365ad7e374e.add(lblTime);
        return Flex0f0f365ad7e374e;
    }
})