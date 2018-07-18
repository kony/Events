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
            "skin": "sknFlexDeskTransparant",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexSegSpeakerRoot.setDefaultUnit(kony.flex.DP);
        var flxImageContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80dp",
            "id": "flxImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "skin": "sknflexContainerCircularDesk",
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
        var flxSpeakerDetail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxSpeakerDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "3%",
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
            "top": "20%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
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
        }, {});
        var lblLinkedIn = new kony.ui.Label({
            "id": "lblLinkedIn",
            "isVisible": true,
            "left": "0dp",
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
        }, {});
        flxSpeakerDetail.add(lblSpeakerName, lblDesignation, lblLinkedIn);
        flexSegSpeakerRoot.add(flxImageContainer, flxSpeakerDetail);
        return flexSegSpeakerRoot;
    }
})