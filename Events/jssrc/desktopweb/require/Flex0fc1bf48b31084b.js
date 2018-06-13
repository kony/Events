define("Flex0fc1bf48b31084b", function() {
    return function(controller) {
        var Flex0fc1bf48b31084b = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30%",
            "id": "Flex0fc1bf48b31084b",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        Flex0fc1bf48b31084b.setDefaultUnit(kony.flex.DP);
        var flexBImage1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flexBImage1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "CopyslFbox0c292973a94484b",
            "top": "13dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flexBImage1.setDefaultUnit(kony.flex.DP);
        var lblBImage1 = new kony.ui.Label({
            "height": "100%",
            "id": "lblBImage1",
            "isVisible": true,
            "left": "8%",
            "skin": "CopydefLabel0ia3ba48c17bb46",
            "text": "event1.png",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexBImage1.add(lblBImage1);
        var flexDelBImage1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flexDelBImage1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "onClick": controller.AS_FlexContainer_h9d84228cbcc4122906dcba6c077a2e5,
            "skin": "slFbox",
            "top": "35%",
            "width": "20dp",
            "zIndex": 1
        }, {}, {});
        flexDelBImage1.setDefaultUnit(kony.flex.DP);
        var ImgDelBImage1 = new kony.ui.Image2({
            "height": "100%",
            "id": "ImgDelBImage1",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "removespeaker.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexDelBImage1.add(ImgDelBImage1);
        Flex0fc1bf48b31084b.add(flexBImage1, flexDelBImage1);
        return Flex0fc1bf48b31084b;
    }
})