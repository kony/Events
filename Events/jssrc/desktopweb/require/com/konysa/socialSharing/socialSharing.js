define(function() {
    return function(controller) {
        var socialSharing = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "isMaster": true,
            "height": "50dp",
            "id": "socialSharing",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": 0,
            "skin": "CopyslFbox0bc28f0666f0c46",
            "width": "50dp"
        }, {}, {});
        socialSharing.setDefaultUnit(kony.flex.DP);
        var imgShare = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgShare",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_f234df138ac14cf8832b2b4b4358ec0e,
            "skin": "CopyslImage044c551bb9d8742",
            "src": "shareicon.png",
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        socialSharing.add(imgShare);
        return socialSharing;
    }
})