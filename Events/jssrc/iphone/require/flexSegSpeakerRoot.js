define("flexSegSpeakerRoot", function() {
    return function(controller) {
        var flexSegSpeakerRoot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxBorderBlue",
            "height": "120dp",
            "id": "flexSegSpeakerRoot",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "sknFlxBorderBlue",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexSegSpeakerRoot.setDefaultUnit(kony.flex.DP);
        var flxSpeakerImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxSpeakerImage",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "width": "35%",
            "zIndex": 1
        }, {}, {});
        flxSpeakerImage.setDefaultUnit(kony.flex.DP);
        var flxImageContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "80dp",
            "id": "flxImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlxImageContainerCircular",
            "top": "7%",
            "width": "80dp",
            "zIndex": 1
        }, {}, {});
        flxImageContainer.setDefaultUnit(kony.flex.DP);
        var imgSpeaker = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "80dp",
            "id": "imgSpeaker",
            "isVisible": true,
            "skin": "slImage",
            "src": "userthumbnail03.jpg",
            "width": "80dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImageContainer.add(imgSpeaker);
        var lblLinkedIn = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblLinkedIn",
            "isVisible": true,
            "left": "14dp",
            "skin": "sknLblLinkedIn",
            "text": "LinkedIn Profile",
            "textStyle": {},
            "top": "2%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSpeakerImage.add(flxImageContainer, lblLinkedIn);
        var flxSpeakerDetail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxSpeakerDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "width": "65%",
            "zIndex": 1
        }, {}, {});
        flxSpeakerDetail.setDefaultUnit(kony.flex.DP);
        var lblSpeakerName = new kony.ui.Label({
            "id": "lblSpeakerName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblSpeakerName",
            "text": "Speaker Name",
            "textStyle": {},
            "top": "30%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDesignation = new kony.ui.Label({
            "id": "lblDesignation",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblDesignation",
            "text": "Cheif Creative Officer, Google",
            "textStyle": {},
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSpeakerDetail.add(lblSpeakerName, lblDesignation);
        flexSegSpeakerRoot.add(flxSpeakerImage, flxSpeakerDetail);
        return flexSegSpeakerRoot;
    }
})