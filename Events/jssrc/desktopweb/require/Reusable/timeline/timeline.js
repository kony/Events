define(function() {
    return function(controller) {
        var timeline = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "timeline",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_jf56ff5781bf453cb8be381e324df6db,
            "skin": "CopyslFbox0eb028f0218384c",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        timeline.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "height": "6%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "5.00%",
            "skin": "CopydefLabel0g4b55e2f4db441",
            "textStyle": {},
            "top": "7.02%",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnClose = new kony.ui.Button({
            "height": "18dp",
            "id": "btnClose",
            "isVisible": false,
            "left": "5.33%",
            "onClick": controller.AS_Button_e8511783358d433ea6e7134d952de286,
            "skin": "CopydefBtnNormal0eddbb8be139449",
            "top": "3%",
            "width": "17dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexUpDown = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5%",
            "id": "flexUpDown",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "right": "0%",
            "skin": "slFbox",
            "top": "2%",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flexUpDown.setDefaultUnit(kony.flex.DP);
        var flxUp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onTouchStart": controller.AS_FlexContainer_fada2523119d4d58afc350b2b6806b09,
            "skin": "slFbox",
            "top": "0%",
            "width": "50%",
            "zIndex": 6
        }, {}, {});
        flxUp.setDefaultUnit(kony.flex.DP);
        var btnUp = new kony.ui.Button({
            "centerX": "70%",
            "centerY": "50.32%",
            "height": "13dp",
            "id": "btnUp",
            "isVisible": true,
            "left": "0.00%",
            "right": "0%",
            "skin": "btnupactive",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxUp.add(btnUp);
        var flxDown = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDown",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onTouchStart": controller.AS_FlexContainer_h200f6358f0b4a24b3527f2591da77fb,
            "skin": "slFbox",
            "top": "0%",
            "width": "50%",
            "zIndex": 6
        }, {}, {});
        flxDown.setDefaultUnit(kony.flex.DP);
        var btnDown = new kony.ui.Button({
            "centerX": "30%",
            "centerY": "50%",
            "height": "13dp",
            "id": "btnDown",
            "isVisible": true,
            "left": "0.00%",
            "right": "0%",
            "skin": "btndowninactive",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDown.add(btnDown);
        flexUpDown.add(flxUp, flxDown);
        var flexSegTimeLineMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "87%",
            "id": "flexSegTimeLineMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyslFbox0df718a7b99074e",
            "top": "13%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flexSegTimeLineMain.setDefaultUnit(kony.flex.DP);
        var lblVertcalLine = new kony.ui.Label({
            "height": "98%",
            "id": "lblVertcalLine",
            "isVisible": true,
            "left": "31%",
            "skin": "CopydefLabel0d61d072bde9646",
            "text": "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
            "textStyle": {},
            "top": "7%",
            "width": "5px",
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var segTimeLine = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "95%",
            "id": "segTimeLine",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_bfd0b9cccb994624beae1bf610275e73,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg0b633f6fe61764e",
            "rowSkin": "Copyseg0b633f6fe61764e",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "5%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "btnDummy": "btnDummy",
                "flexContents": "flexContents",
                "flexImage1": "flexImage1",
                "flexImage2": "flexImage2",
                "flexMainThumbs": "flexMainThumbs",
                "flexRoundCorner": "flexRoundCorner",
                "flexTime": "flexTime",
                "flxMainSchedular": "flxMainSchedular",
                "flxSub1": "flxSub1",
                "flxSub2": "flxSub2",
                "imgSub1": "imgSub1",
                "imgSub2": "imgSub2",
                "imgthumb1": "imgthumb1",
                "imgthumb2": "imgthumb2",
                "lblDate": "lblDate",
                "lblDesc": "lblDesc",
                "lblDummy": "lblDummy",
                "lblName": "lblName",
                "lblNum": "lblNum",
                "lblRem": "lblRem",
                "lblSub1": "lblSub1",
                "lblSub2": "lblSub2",
                "lblhorStr": "lblhorStr"
            },
            "width": "100%",
            "zIndex": 6
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexSegTimeLineMain.add(lblVertcalLine, segTimeLine);
        var FlexMainImageSet = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexMainImageSet",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.00%",
            "onClick": controller.AS_FlexContainer_caed9c9f6e1d43409b7073edd5fa9c90,
            "skin": "CopyslFbox0ef40004bc6fa40",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexMainImageSet.setDefaultUnit(kony.flex.DP);
        var segImageSet = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "groupCells": false,
            "height": "50%",
            "id": "segImageSet",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": false,
            "onSwipe": controller.AS_Segment_f68ae74da9f04189acaaff18e285b19f,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "flexImageGesture": "flexImageGesture",
                "flexImageSet": "flexImageSet",
                "imageStatus": "imageStatus"
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblNameDetail = new kony.ui.Label({
            "height": "4.54%",
            "id": "lblNameDetail",
            "isVisible": true,
            "left": "4.03%",
            "skin": "CopydefLabel0i08c9283e5554f",
            "text": "- Vigneshwaran Karunanithi",
            "textStyle": {},
            "top": "76.02%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var txtComments = new kony.ui.RichText({
            "height": "18%",
            "id": "txtComments",
            "isVisible": true,
            "left": "2.46%",
            "linkSkin": "defRichTextLink",
            "skin": "CopydefRichTextNormal0h662d9cee1004a",
            "text": "GoodExperiance",
            "top": "81.01%",
            "width": "95.29%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var CopybtnClose0d8585f7b8db84b = new kony.ui.Button({
            "height": "18dp",
            "id": "CopybtnClose0d8585f7b8db84b",
            "isVisible": true,
            "left": "90.97%",
            "onClick": controller.AS_Button_jd849cc0c27f429486a5152ba4bb2d0e,
            "skin": "CopydefBtnNormal0eddbb8be139449",
            "top": "2.44%",
            "width": "17dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexMainImageSet.add(segImageSet, lblNameDetail, txtComments, CopybtnClose0d8585f7b8db84b);
        var lblNoSessions = new kony.ui.Label({
            "centerX": "51%",
            "centerY": "50%",
            "id": "lblNoSessions",
            "isVisible": false,
            "left": "65dp",
            "skin": "sknlblNoevents",
            "text": "No Sessions Scheduled..",
            "textStyle": {},
            "top": "40dp",
            "width": "80%",
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        timeline.add(lblTitle, btnClose, flexUpDown, flexSegTimeLineMain, FlexMainImageSet, lblNoSessions);
        return timeline;
    }
})