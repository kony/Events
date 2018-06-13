define(function() {
    return function(controller) {
        var TimePicker = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "30%",
            "id": "TimePicker",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_ebdfac7a238d4155960ebea12303ebf9,
            "skin": "CopyslFbox0ad3fd5034e684a",
            "top": "0dp",
            "width": "10%"
        }, {}, {});
        TimePicker.setDefaultUnit(kony.flex.DP);
        var segTimingList = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "80%",
            "id": "segTimingList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_h12975ebb8e04648afd904a7ab1af93e,
            "pageOffDotImage": "pageoffdot_2.png",
            "pageOnDotImage": "pageondot_2.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg0d4469cccfafb41",
            "rowSkin": "Copyseg0f2b467f51d5141",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "16.50%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "Flex0f0f365ad7e374e": "Flex0f0f365ad7e374e",
                "lblTime": "lblTime"
            },
            "widgetSkin": "Copyseg0i6fc36d047bc40",
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_ROW_SELECT,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        });
        var flexTimePicker = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "16.50%",
            "id": "flexTimePicker",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_f77703059019443c9b2ba841b14ce64f,
            "skin": "CopyslFbox0bee0a5a4002e45",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexTimePicker.setDefaultUnit(kony.flex.DP);
        var lblTime = new kony.ui.Label({
            "height": "100%",
            "id": "lblTime",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0d1ec1647fcf24d",
            "text": "00:00",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [11, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDownArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "lblDownArrow",
            "isVisible": true,
            "right": "5%",
            "skin": "slImage",
            "src": "chevrondown.png",
            "top": "14dp",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexTimePicker.add(lblTime, lblDownArrow);
        TimePicker.add(segTimingList, flexTimePicker);
        return TimePicker;
    }
})