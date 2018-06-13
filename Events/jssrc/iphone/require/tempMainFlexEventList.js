define("tempMainFlexEventList", function() {
    return function(controller) {
        var tempMainFlexEventList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "tempMainFlexEventList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknflexf21f1",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        tempMainFlexEventList.setDefaultUnit(kony.flex.DP);
        var flexEvent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "93%",
            "id": "flexEvent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.04%",
            "skin": "sknflexPlainWhite",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexEvent.setDefaultUnit(kony.flex.DP);
        var flexEventBannerRounded = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "59%",
            "id": "flexEventBannerRounded",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknflexEventBannerRounded",
            "top": "6%",
            "width": "92%",
            "zIndex": 1
        }, {}, {});
        flexEventBannerRounded.setDefaultUnit(kony.flex.DP);
        var imageBanner = new kony.ui.Image2({
            "height": "100%",
            "id": "imageBanner",
            "imageWhenFailed": "eventsdef.png",
            "imageWhileDownloading": "eventsdef.png",
            "isVisible": true,
            "left": "0%",
            "src": "eventsdef.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imageRegister = new kony.ui.Image2({
            "height": "15%",
            "id": "imageRegister",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "register.png",
            "top": "87%",
            "width": "20%",
            "zIndex": 4
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexEventBannerRounded.add(imageBanner, imageRegister);
        var flexEventShortDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "37%",
            "id": "flexEventShortDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0.01%",
            "skin": "slFbox",
            "top": "63.00%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexEventShortDetails.setDefaultUnit(kony.flex.DP);
        var flexDateAndTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexDateAndTime",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "5%",
            "skin": "slFbox",
            "top": "0%",
            "width": "23.11%",
            "zIndex": 1
        }, {}, {});
        flexDateAndTime.setDefaultUnit(kony.flex.DP);
        var rchTextDate = new kony.ui.RichText({
            "centerX": "50%",
            "height": "26.00%",
            "id": "rchTextDate",
            "isVisible": true,
            "linkSkin": "defRichTextLink",
            "skin": "sknrchtext00a0dd140",
            "text": "10\n",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
        });
        var rchtxtMonth = new kony.ui.RichText({
            "centerX": "50%",
            "height": "26.00%",
            "id": "rchtxtMonth",
            "isVisible": true,
            "linkSkin": "defRichTextLink",
            "skin": "sknrchtext00a0dd140",
            "text": "MAR",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
        });
        var lblTime = new kony.ui.Label({
            "centerX": "49.83%",
            "height": "30%",
            "id": "lblTime",
            "isVisible": true,
            "left": "4dp",
            "skin": "sknlbl96969680",
            "text": "10AM - 12PM",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flexDateAndTime.add(rchTextDate, rchtxtMonth, lblTime);
        var btnVerticalStrip = new kony.ui.Button({
            "centerY": "50%",
            "height": "80%",
            "id": "btnVerticalStrip",
            "isVisible": true,
            "left": "2%",
            "skin": "sknbtnStrinverticalf2f1f1",
            "text": "Button",
            "top": "0%",
            "width": "2px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        var flexEventshortdetailMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexEventshortdetailMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0.00%",
            "skin": "slFbox",
            "top": "0.24%",
            "width": "59.93%",
            "zIndex": 1
        }, {}, {});
        flexEventshortdetailMain.setDefaultUnit(kony.flex.DP);
        var lblEventTitle = new kony.ui.Label({
            "id": "lblEventTitle",
            "isVisible": true,
            "left": "3.95%",
            "skin": "sknlbl3f51b5120",
            "text": "Webinar Event Upgrade",
            "textStyle": {},
            "top": "12.00%",
            "width": "96%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flexEventCategory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flexEventCategory",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexEventCategory.setDefaultUnit(kony.flex.DP);
        var lblEventCategoryTitle = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblEventCategoryTitle",
            "isVisible": true,
            "left": "4.00%",
            "skin": "sknlbl969696100",
            "text": "Category -",
            "textStyle": {},
            "top": "0dp",
            "width": "32.00%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblCategory = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCategory",
            "isVisible": true,
            "left": "0.00%",
            "skin": "sknlbl96969690",
            "text": "Hackathon Categories",
            "textStyle": {},
            "top": "2dp",
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
        flexEventCategory.add(lblEventCategoryTitle, lblCategory);
        var flexEventType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23%",
            "id": "flexEventType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "2.00%",
            "skin": "slFbox",
            "top": "5.00%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexEventType.setDefaultUnit(kony.flex.DP);
        var imageTypeIcon = new kony.ui.Image2({
            "centerY": "50.00%",
            "height": "18dp",
            "id": "imageTypeIcon",
            "isVisible": true,
            "left": "4.00%",
            "src": "onlineicon.png",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEventType = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventType",
            "isVisible": true,
            "left": "3%",
            "skin": "sknlbl3f51b5100",
            "text": "Online",
            "textStyle": {},
            "top": "0%",
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
        flexEventType.add(imageTypeIcon, lblEventType);
        flexEventshortdetailMain.add(lblEventTitle, flexEventCategory, flexEventType);
        flexEventShortDetails.add(flexDateAndTime, btnVerticalStrip, flexEventshortdetailMain);
        var flexShare = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flexShare",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "86%",
            "skin": "slFbox",
            "top": "65%",
            "width": "40dp",
            "zIndex": 6
        }, {}, {});
        flexShare.setDefaultUnit(kony.flex.DP);
        var btnShare = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "height": "80%",
            "id": "btnShare",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_f62d301f917e4a19985ea1fced722ff3,
            "skin": "sknbtnShareIcon",
            "text": "butt",
            "top": "0%",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        flexShare.add(btnShare);
        var lblShadow = new kony.ui.Label({
            "bottom": "0%",
            "height": "4px",
            "id": "lblShadow",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblshadow949494OP10",
            "text": "Label",
            "textStyle": {},
            "width": "100%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flexEvent.add(flexEventBannerRounded, flexEventShortDetails, flexShare, lblShadow);
        tempMainFlexEventList.add(flexEvent);
        return tempMainFlexEventList;
    }
})