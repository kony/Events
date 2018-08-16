define("flexSegSpeakerRoot", function() {
    return function(controller) {
        var flexSegSpeakerRoot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxBorderBlue",
            "height": "85dp",
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
            "height": "60dp",
            "id": "flxImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "skin": "sknflexContainerCircularDesk",
            "top": "7%",
            "width": "60dp",
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
            "src": "profile.png",
            "width": "80dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
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
            "skin": "sknLblSpeakerNameDsk",
            "text": "Speaker Name",
            "textStyle": {},
            "top": "5%",
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
            "skin": "sknLblDesignationDesk",
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
            "skin": "sknLblLinkedInDesk",
            "text": "LinkedIn Profile",
            "textStyle": {},
            "top": "5%",
            "width": "100%",
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