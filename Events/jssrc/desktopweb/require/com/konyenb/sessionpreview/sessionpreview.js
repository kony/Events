define(function() {
    return function(controller) {
        var sessionpreview = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "sessionpreview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlexBorderDesk00a0dd",
            "top": "0dp",
            "width": "50%"
        }, {}, {});
        sessionpreview.setDefaultUnit(kony.flex.DP);
        var flexDateandStrip = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "200dp",
            "id": "flexDateandStrip",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0bfefff3a169d4b",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flexDateandStrip.setDefaultUnit(kony.flex.DP);
        var lblVertStrip = new kony.ui.Label({
            "centerY": "50%",
            "height": "95%",
            "id": "lblVertStrip",
            "isVisible": true,
            "left": "95%",
            "skin": "CopydefLabel0e560cf677d9047",
            "width": "1px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDateMonth = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblDateMonth",
            "isVisible": true,
            "left": "32dp",
            "skin": "CopydefLabel0baed6bcf608249",
            "text": "13 MAY",
            "top": "68dp",
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexDateandStrip.add(lblVertStrip, lblDateMonth);
        var segSessionandSpeaker = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [
                [{
                        "lblEventAddress": "Convention Center, Hyderabad",
                        "lblEventDateTime": "Monday, 10 AM-5 PM",
                        "lblHorizontalLine": ""
                    },
                    [{
                        "imgSpeaker": "userthumbnail03.jpg",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "LinkedIn Profile",
                        "lblSpeakerName": "Speaker Name"
                    }, {
                        "imgSpeaker": "userthumbnail03.jpg",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "LinkedIn Profile",
                        "lblSpeakerName": "Speaker Name"
                    }, {
                        "imgSpeaker": "userthumbnail03.jpg",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "LinkedIn Profile",
                        "lblSpeakerName": "Speaker Name"
                    }]
                ],
                [{
                        "lblEventAddress": "Convention Center, Hyderabad",
                        "lblEventDateTime": "Monday, 10 AM-5 PM",
                        "lblHorizontalLine": ""
                    },
                    [{
                        "imgSpeaker": "userthumbnail03.jpg",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "LinkedIn Profile",
                        "lblSpeakerName": "Speaker Name"
                    }, {
                        "imgSpeaker": "userthumbnail03.jpg",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "LinkedIn Profile",
                        "lblSpeakerName": "Speaker Name"
                    }, {
                        "imgSpeaker": "userthumbnail03.jpg",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "LinkedIn Profile",
                        "lblSpeakerName": "Speaker Name"
                    }]
                ]
            ],
            "groupCells": false,
            "id": "segSessionandSpeaker",
            "isVisible": true,
            "left": "20%",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flexSegSpeakerRoot",
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "sectionHeaderTemplate": "flxSegSpeakerRoot",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flexSegSpeakerRoot": "flexSegSpeakerRoot",
                "flxEventAddress": "flxEventAddress",
                "flxImageContainer": "flxImageContainer",
                "flxSegSpeakerRoot": "flxSegSpeakerRoot",
                "flxSegSpeakerRootContainer": "flxSegSpeakerRootContainer",
                "flxSpeakerDetail": "flxSpeakerDetail",
                "imgSpeaker": "imgSpeaker",
                "lblDesignation": "lblDesignation",
                "lblEventAddress": "lblEventAddress",
                "lblEventDateTime": "lblEventDateTime",
                "lblHorizontalLine": "lblHorizontalLine",
                "lblLinkedIn": "lblLinkedIn",
                "lblSpeakerName": "lblSpeakerName"
            },
            "width": "80%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        sessionpreview.add(flexDateandStrip, segSessionandSpeaker);
        return sessionpreview;
    }
})