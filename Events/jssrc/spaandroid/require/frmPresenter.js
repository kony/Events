define("frmPresenter", function() {
    return function(controller) {
        function addWidgetsfrmPresenter() {
            this.setDefaultUnit(kony.flex.DP);
            var flxPresenterRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxPresenterRoot",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "50dp",
                "skin": "sknFlxWhite",
                "top": "87dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPresenterRoot.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "9%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxHeaderGredient",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBack",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_f16f7cf21d0b470e81639f92799a52ae,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgBack",
                "isVisible": true,
                "skin": "slImage",
                "src": "arrowpreviousscreen.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_f1d7f27b411444dbbc249651f1c9ab07,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgClose",
                "isVisible": true,
                "skin": "slImage",
                "src": "closeicon.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose.add(imgClose);
            var lblHeader = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "skin": "sknLblHeader",
                "text": "SPEAKERS PROFILE",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxHeader.add(flxBack, flxClose, lblHeader);
            var flxTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
                "id": "flxTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "108dp",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTitle.setDefaultUnit(kony.flex.DP);
            var lblTitleOfTheEvent = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTitleOfTheEvent",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblEventTitleBold",
                "text": "TITLE OF THE EVENT",
                "textStyle": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblHorizontalLine1 = new kony.ui.Label({
                "bottom": "0dp",
                "centerX": "50%",
                "height": "1dp",
                "id": "lblHorizontalLine1",
                "isVisible": true,
                "skin": "sknLblLine",
                "textStyle": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxTitle.add(lblTitleOfTheEvent, lblHorizontalLine1);
            var segSpeaker = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [
                    [{
                            "lblDate": "14",
                            "lblEventAddress": "Convention Center, Hyderabad",
                            "lblEventDateTime": "Monday, 10 AM-5 PM",
                            "lblHorizontalLine": "abc",
                            "lblMonth": "MAR",
                            "lblVerticalLine": "dsc"
                        },
                        [{
                            "imgSpeaker": "userthumbnail03.jpg",
                            "lblDesignation": "Cheif Creative Officer, Google",
                            "lblLinkedIn": "LinkedIn Profile",
                            "lblSpeakerName": "Speaker Name"
                        }, {
                            "imgSpeaker": "userthumbnail02.jpg",
                            "lblDesignation": "Cheif Creative Officer, Google",
                            "lblLinkedIn": "LinkedIn Profile",
                            "lblSpeakerName": "Speaker Name"
                        }]
                    ],
                    [{
                            "lblDate": "14",
                            "lblEventAddress": "Convention Center, Hyderabad",
                            "lblEventDateTime": "Monday, 10 AM-5 PM",
                            "lblHorizontalLine": "abc",
                            "lblMonth": "MAR",
                            "lblVerticalLine": "sd"
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
                "height": "82%",
                "id": "segSpeaker",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegRow",
                "rowSkin": "sknSegRow",
                "rowTemplate": "flexSegSpeakerRoot",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sknSegHeader",
                "sectionHeaderTemplate": "flxSegSpeakerRoot",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f2f1f164",
                "separatorRequired": true,
                "separatorThickness": 10,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flexSegSpeakerRoot": "flexSegSpeakerRoot",
                    "flxDate": "flxDate",
                    "flxEventAddress": "flxEventAddress",
                    "flxImageContainer": "flxImageContainer",
                    "flxSegSpeakerRoot": "flxSegSpeakerRoot",
                    "flxSegSpeakerRootContainer": "flxSegSpeakerRootContainer",
                    "flxSpeakerDetail": "flxSpeakerDetail",
                    "flxSpeakerImage": "flxSpeakerImage",
                    "imgSpeaker": "imgSpeaker",
                    "lblDate": "lblDate",
                    "lblDesignation": "lblDesignation",
                    "lblEventAddress": "lblEventAddress",
                    "lblEventDateTime": "lblEventDateTime",
                    "lblHorizontalLine": "lblHorizontalLine",
                    "lblLinkedIn": "lblLinkedIn",
                    "lblMonth": "lblMonth",
                    "lblSpeakerName": "lblSpeakerName",
                    "lblVerticalLine": "lblVerticalLine"
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPresenterRoot.add(flxHeader, flxTitle, segSpeaker);
            var lblNoEvents = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblNoEvents",
                "isVisible": false,
                "left": "65dp",
                "skin": "sknlblNoevents",
                "text": "You Don't have any Events Registered..",
                "textStyle": {},
                "top": "40dp",
                "width": "80%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            this.add(flxPresenterRoot, lblNoEvents);
        };
        return [{
            "addWidgets": addWidgetsfrmPresenter,
            "enabledForIdleTimeout": false,
            "id": "frmPresenter",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBGGradient"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "inTransitionConfig": {
                "formTransition": "none"
            },
            "retainScrollPosition": false
        }]
    }
});