define("frmSchedular", function() {
    return function(controller) {
        function addWidgetsfrmSchedular() {
            this.setDefaultUnit(kony.flex.DP);
            var frmScheduleMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "frmScheduleMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            frmScheduleMain.setDefaultUnit(kony.flex.DP);
            var timeline = new Reusable.timeline({
                "clipBounds": true,
                "height": "96%",
                "id": "timeline",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0eb028f0218384c",
                "top": "4%",
                "width": "100%"
            }, {}, {});
            timeline.masterdata = {
                "data": [],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "title",
                    "columnHeaderType": "text",
                    "columnID": "name",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "ga3ccb3556494d80a8f559671fbdc788"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "date",
                    "columnHeaderType": "text",
                    "columnID": "date",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "b1e4d536e52f4899a56d5ba242da44b7"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "subtitle1",
                    "columnHeaderType": "text",
                    "columnID": "sub1",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "fe47873110fe411ea478c2ddbbe56cff"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "subtitle1icon",
                    "columnHeaderType": "text",
                    "columnID": "sub1icon",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "image",
                    "kuid": "i197789285694c3ca0552a0cdda0b7d7"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "sub2",
                    "columnHeaderType": "text",
                    "columnID": "sub2",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "bed96f68826d4904a85b686e935af2cb"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "subtitle2icon",
                    "columnHeaderType": "text",
                    "columnID": "sub2icon",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "image",
                    "kuid": "ja1e321c5f84430caf84d246a14ed7e9"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "shortDesc.",
                    "columnHeaderType": "text",
                    "columnID": "desc",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "ae425b8f6c81486aa0a0f9641180e3e5"
                }]
            };
            timeline.eventTitle = "";
            var flexEventHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flexEventHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderGredient",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexEventHeader.setDefaultUnit(kony.flex.DP);
            var lblHeaderTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblHeaderTitle",
                "isVisible": true,
                "left": "154dp",
                "skin": "sknHeader00a0dd",
                "text": "EVENT SCHEDULE",
                "textStyle": {},
                "top": "15dp",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flexCloseIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexCloseIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "82.97%",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "17%",
                "zIndex": 1
            }, {}, {});
            flexCloseIcon.setDefaultUnit(kony.flex.DP);
            var btnSearchIcon = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "btnSearchIcon",
                "isVisible": true,
                "left": "14dp",
                "onClick": controller.AS_Button_cce77e8bb0724086908c85450fd24b42,
                "skin": "sknbtnClose",
                "top": "12dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flexCloseIcon.add(btnSearchIcon);
            flexEventHeader.add(lblHeaderTitle, flexCloseIcon);
            frmScheduleMain.add(timeline, flexEventHeader);
            this.add(frmScheduleMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSchedular,
            "enabledForIdleTimeout": false,
            "id": "frmSchedular",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a7a55be7a12a4084b81764c751cfe7da,
            "skin": "sknFrmBGGradient"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "inTransitionConfig": {
                "transitionDirection": "fromBottom",
                "transitionDuration": 0.3,
                "transitionEffect": "transitionMoveIn"
            },
            "needsIndicatorDuringPostShow": false,
            "outTransitionConfig": {
                "transitionDirection": "fromTop",
                "transitionDuration": 0.3,
                "transitionEffect": "transitionMoveIn"
            },
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});