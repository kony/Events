define(function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        checkLayoutAndChange: function() {
            glbHeight = this.view.seg1.frame["height"];
            alert(glbHeight);
        },
        createSegment: function() {
            var seg1 = new kony.ui.SegmentedUI2({
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
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "seg1",
                "isVisible": true,
                "left": "15%",
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
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "9dp",
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
                "width": "82.50%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            seg1.doLayout = this.checkLayoutAndChange;
            this.view.add(seg1);
        }
    };
});