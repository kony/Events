//Type your code here
var deviceWidth;
var dayString = {
    "0": "SUNDAY",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Satuerday"
};
var monthString = {
    "0": "Jan",
    "1": "Feb",
    "2": "Mar",
    "3": "Apr",
    "4": "May",
    "5": "Jun",
    "6": "Jul",
    "7": "Aug",
    "8": "Sept",
    "9": "Oct",
    "10": "Nov",
    "11": "Dec"
};

function loadDeviceConfig() {
    deviceWidth = "" + kony.os.deviceInfo().screenWidth;
    //alert(JSON.stringify((kony.os.deviceInfo())));
}

function setDeepLink(params) {
    kony.print("Sk:: Deeplink start. params = " + params);
    if (params && params.launchmode == 3) {
        alert("in test deeplink");
        handleDeeplinkCallback(params);
    }
    //var currentForm = kony.application.getCurrentForm();
    //kony.print("Sk:: Deeplink end");
    // return currentForm;
}

function groupRecord(records) {
    var recordLength = records.length;
    var currentIndex = 0;
    var map = {};
    var sessionId;
    var currentElement;
    var itemIndex;
    var result = [];
    for (var i = 0; i < recordLength; i++) {
        sessionId = records[i].session_id;
        itemIndex = map[sessionId];
        if (itemIndex === null || itemIndex === undefined) {
            currentElement = [];
            currentElement.push(records[i]);
            result.push(currentElement);
            map[sessionId] = currentIndex;
            currentIndex++;
        } else {
            currentElement = result[itemIndex];
            currentElement.push(records[i]);
        }
    }
    return result;
}
var flexEventSS2 = null;

function getFlexSnapshot() {
    var flexEventSS = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "300dp",
        "id": "flexEventSSContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknflexPlainWhite",
        "top": "0.00%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEventSS.setDefaultUnit(kony.flex.DP);
    var flexEventBannerRoundedSS = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "59%",
        "id": "flexEventBannerRoundedSS",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknflexEventBannerRounded",
        "top": "6%",
        "width": "92%",
        "zIndex": 1
    }, {}, {});
    flexEventBannerRoundedSS.setDefaultUnit(kony.flex.DP);
    var imageBannerSS = new kony.ui.Image2({
        "height": "100%",
        "id": "imageBannerSS",
        "isVisible": true,
        "left": "0%",
        "src": "event01.jpg",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexEventBannerRoundedSS.add(imageBannerSS);
    var flexEventShortDetailsSS = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "37%",
        "id": "flexEventShortDetailsSS",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0.01%",
        "skin": "slFbox",
        "top": "63.00%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEventShortDetailsSS.setDefaultUnit(kony.flex.DP);
    var flexDateAndTimeSS = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexDateAndTimeSS",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "0%",
        "width": "23.11%",
        "zIndex": 1
    }, {}, {});
    flexDateAndTimeSS.setDefaultUnit(kony.flex.DP);
    var rchTextDateSS = new kony.ui.RichText({
        "centerX": "50%",
        "height": "26.00%",
        "id": "rchTextDateSS",
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
    var rchtxtMonthSS = new kony.ui.RichText({
        "centerX": "50%",
        "height": "26.00%",
        "id": "rchtxtMonthSS",
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
    var lblTimeSS = new kony.ui.Label({
        "centerX": "49.83%",
        "height": "30%",
        "id": "lblTimeSS",
        "isVisible": true,
        "left": "4dp",
        "skin": "sknlbl96969690",
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
    flexDateAndTimeSS.add(rchTextDateSS, rchtxtMonthSS, lblTimeSS);
    var btnVerticalStripSS = new kony.ui.Button({
        "centerY": "50%",
        "height": "80%",
        "id": "btnVerticalStripSS",
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
    var flexEventshortdetailMainSS = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flexEventshortdetailMainSS",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0.00%",
        "skin": "slFbox",
        "top": "0.24%",
        "width": "59.93%",
        "zIndex": 1
    }, {}, {});
    flexEventshortdetailMainSS.setDefaultUnit(kony.flex.DP);
    var lblEventTitleSS = new kony.ui.Label({
        "id": "lblEventTitleSS",
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
    var flexEventCategorySS = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flexEventCategorySS",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEventCategorySS.setDefaultUnit(kony.flex.DP);
    var lblEventCategoryTitleSS = new kony.ui.Label({
        "centerY": "50.00%",
        "id": "lblEventCategoryTitleSS",
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
    var lblCategorySS = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblCategorySS",
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
    flexEventCategorySS.add(lblEventCategoryTitleSS, lblCategorySS);
    var flexEventTypeSS = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "23%",
        "id": "flexEventTypeSS",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "2.00%",
        "skin": "slFbox",
        "top": "5.00%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexEventTypeSS.setDefaultUnit(kony.flex.DP);
    var imageTypeIconSS = new kony.ui.Image2({
        "centerY": "50.00%",
        "height": "18dp",
        "id": "imageTypeIconSS",
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
    var lblEventTypeSS = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblEventTypeSS",
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
    flexEventTypeSS.add(imageTypeIconSS, lblEventTypeSS);
    flexEventshortdetailMainSS.add(lblEventTitleSS, flexEventCategorySS, flexEventTypeSS);
    flexEventShortDetailsSS.add(flexDateAndTimeSS, btnVerticalStripSS, flexEventshortdetailMainSS);
    var lblShadowSS = new kony.ui.Label({
        "bottom": "0%",
        "height": "4px",
        "id": "lblShadowSS",
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
    flexEventSS.add(flexEventBannerRoundedSS, flexEventShortDetailsSS, lblShadowSS);
    return flexEventSS;
}

function EventBanner() {
    this.flexEventSS = null;
}
var evb = new EventBanner();
EventBanner.prototype.initBanner = function() {
    this.flexEventSS = getFlexSnapshot();
};
EventBanner.prototype.setBannerURL = function(src) {
    if (this.flexEventSS !== null) {
        this.flexEventSS.imageBannerSS.src = src;
    } else {
        alert("please initialize the flexEvent");
    }
};
EventBanner.prototype.setDate = function(evDate) {
    if (this.flexEventSS !== null) {
        this.flexEventSS.rchTextDateSS.text = evDate;
    } else {
        alert("please initialize the flexEvent");
    }
};
EventBanner.prototype.setMonth = function(evMonth) {
    if (this.flexEventSS !== null) {
        this.flexEventSS.rchtxtMonthSS.text = evMonth;
    } else {
        alert("please initialize the flexEvent");
    }
};
EventBanner.prototype.setDuration = function(evDuration) {
    if (this.flexEventSS !== null) {
        this.flexEventSS.lblTimeSS.text = evDuration;
    } else {
        alert("please initialize the flexEvent");
    }
};
EventBanner.prototype.setEventTitle = function(evTitle) {
    if (this.flexEventSS !== null) {
        this.flexEventSS.lblEventTitleSS.text = evTitle;
    } else {
        alert("please initialize the flexEvent");
    }
};
EventBanner.prototype.setCategory = function(evCategory) {
    if (this.flexEventSS !== null) {
        this.flexEventSS.lblCategorySS.text = evCategory;
    } else {
        alert("please initialize the flexEvent");
    }
};
EventBanner.prototype.setEventIcon = function(evIcon) {
    if (this.flexEventSS !== null) {
        this.flexEventSS.imageTypeIconSS.src = evIcon;
    } else {
        alert("please initialize the flexEvent");
    }
};
EventBanner.prototype.setEventType = function(evType) {
    if (this.flexEventSS !== null) {
        this.flexEventSS.lblEventTypeSS.text = evType;
    } else {
        alert("please initialize the flexEvent");
    }
};