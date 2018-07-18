define(function() {
    return function(controller) {
        var ImageGallery = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ImageGallery",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_ibbcc442aaa54ccab12d0a2fbba26387,
            "skin": "sknFlxImageGalleryComponentRoot",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        ImageGallery.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerX": "50%",
            "height": "4%",
            "id": "lblTitle",
            "isVisible": false,
            "skin": "CopysknLblCmpGreen",
            "text": "PROGRAM IMAGE GALLERY",
            "textStyle": {},
            "top": "13%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxImage = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "centerX": "50%",
            "centerY": "45%",
            "clipBounds": true,
            "enableScrolling": true,
            "height": "85%",
            "horizontalScrollIndicator": false,
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_BOTH,
            "skin": "slFSbox",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgEvent = new kony.ui.Image2({
            "centerY": "50%",
            "id": "imgEvent",
            "imageWhenFailed": "eventske_1.png",
            "imageWhileDownloading": "eventske_1.png",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "eventske_1.png",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgEvent);
        var flxScThumbImage = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "8dp",
            "bounces": true,
            "centerX": "50%",
            "clipBounds": true,
            "enableScrolling": true,
            "height": "80dp",
            "horizontalScrollIndicator": true,
            "id": "flxScThumbImage",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "maxWidth": "100%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
            "skin": "CopysknFlxSCThumb",
            "verticalScrollIndicator": false,
            "width": "98%",
            "zIndex": 10
        }, {}, {});
        flxScThumbImage.setDefaultUnit(kony.flex.DP);
        var flxItemTest = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80dp",
            "id": "flxItemTest",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "skin": "sknFlxThumbBG",
            "width": "80dp",
            "zIndex": 1
        }, {}, {});
        flxItemTest.setDefaultUnit(kony.flex.DP);
        var imgThumbTest = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgThumbTest",
            "imageWhenFailed": "eventske_1.png",
            "imageWhileDownloading": "eventske_1.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "philantrophy_1.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxItemTest.add(imgThumbTest);
        flxScThumbImage.add(flxItemTest);
        ImageGallery.add(lblTitle, flxImage, flxScThumbImage);
        return ImageGallery;
    }
})