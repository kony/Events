define("frmEventsLanding", function() {
    return function(controller) {
        function addWidgetsfrmEventsLanding() {
            this.setDefaultUnit(kony.flex.DP);
            var flexEventMainLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexEventMainLanding",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flexEventMainLanding.setDefaultUnit(kony.flex.DP);
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
                "centerX": "49.97%",
                "centerY": "50.00%",
                "height": "100%",
                "id": "lblHeaderTitle",
                "isVisible": true,
                "left": "154dp",
                "skin": "sknHeader00a0dd",
                "text": "Upcoming Events",
                "textStyle": {},
                "top": "15dp",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flexSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "83%",
                "onClick": controller.AS_FlexContainer_b6a574086b094fc4a29f2b590c94e174,
                "skin": "CopyslFbox0gf63403b06304f",
                "top": "0%",
                "width": "17%",
                "zIndex": 1
            }, {}, {});
            flexSearch.setDefaultUnit(kony.flex.DP);
            var btnSearchIcon = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "btnSearchIcon",
                "isVisible": true,
                "left": "14dp",
                "onClick": controller.AS_Button_ec074ba44ec945cda2e3614eb70be807,
                "skin": "sknbtnSearchIconLanding",
                "top": "12dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexSearch.add(btnSearchIcon);
            var flexHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexHamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "onClick": controller.AS_FlexContainer_i287c93385dc4ed89ebd0efef9e5bc92,
                "skin": "CopyslFbox0gf63403b06304f",
                "top": "0.25%",
                "width": "17%",
                "zIndex": 1
            }, {}, {});
            flexHamburger.setDefaultUnit(kony.flex.DP);
            var btnHamburger = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "btnHamburger",
                "isVisible": true,
                "left": "14dp",
                "onClick": controller.AS_Button_b39de52ebe92497694847007cb32fb7c,
                "skin": "sknbtnHamLanding",
                "top": "12dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHamburger.add(btnHamburger);
            flexEventHeader.add(lblHeaderTitle, flexSearch, flexHamburger);
            var segEventList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnShare": "",
                    "btnVerticalStrip": "",
                    "imageBanner": "",
                    "imageRegister": "",
                    "imageTypeIcon": "",
                    "lblCategory": "",
                    "lblEventCategoryTitle": "",
                    "lblEventTitle": "",
                    "lblEventType": "",
                    "lblShadow": "",
                    "lblTime": "",
                    "rchTextDate": "",
                    "rchtxtMonth": ""
                }],
                "groupCells": false,
                "height": "92%",
                "id": "segEventList",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_e830efe839f74c9da915e9007dfe130e,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0fa341cd8845647",
                "rowTemplate": "tempMainFlexEventList",
                "scrollingEvents": {
                    "onPull": controller.AS_Segment_ab181210353b42aa8c165aeb158ed0ec
                },
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f2f1f100",
                "separatorRequired": true,
                "separatorThickness": 10,
                "showScrollbars": false,
                "top": "8%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnShare": "btnShare",
                    "btnVerticalStrip": "btnVerticalStrip",
                    "flexDateAndTime": "flexDateAndTime",
                    "flexEvent": "flexEvent",
                    "flexEventBannerRounded": "flexEventBannerRounded",
                    "flexEventCategory": "flexEventCategory",
                    "flexEventShortDetails": "flexEventShortDetails",
                    "flexEventType": "flexEventType",
                    "flexEventshortdetailMain": "flexEventshortdetailMain",
                    "flexShare": "flexShare",
                    "imageBanner": "imageBanner",
                    "imageRegister": "imageRegister",
                    "imageTypeIcon": "imageTypeIcon",
                    "lblCategory": "lblCategory",
                    "lblEventCategoryTitle": "lblEventCategoryTitle",
                    "lblEventTitle": "lblEventTitle",
                    "lblEventType": "lblEventType",
                    "lblShadow": "lblShadow",
                    "lblTime": "lblTime",
                    "rchTextDate": "rchTextDate",
                    "rchtxtMonth": "rchtxtMonth",
                    "tempMainFlexEventList": "tempMainFlexEventList"
                },
                "widgetSkin": "Copyseg0fb1fcc10dc6248",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flexEventRegConformation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexEventRegConformation",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknflexfffOP70",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexEventRegConformation.setDefaultUnit(kony.flex.DP);
            var flexEventConfSub = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.01%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "40%",
                "id": "flexEventConfSub",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "70dp",
                "skin": "sknflexeventconffff",
                "top": "195dp",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flexEventConfSub.setDefaultUnit(kony.flex.DP);
            var imgEventLogo = new kony.ui.Image2({
                "centerX": "50.35%",
                "height": "13%",
                "id": "imgEventLogo",
                "isVisible": true,
                "skin": "slImage",
                "src": "eventslogohorizontal.png",
                "top": "10%",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDone = new kony.ui.Label({
                "id": "lblDone",
                "isVisible": true,
                "left": "0.45%",
                "skin": "sknlbl7e7e7e160",
                "text": "Done!",
                "textStyle": {},
                "top": "39dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDesc = new kony.ui.Label({
                "height": "15%",
                "id": "lblDesc",
                "isVisible": true,
                "left": "0%",
                "skin": "sknlbl7e7e7e110",
                "text": "Your registration has been received, thanks!",
                "textStyle": {},
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var btnExpMore = new kony.ui.Button({
                "centerX": "50.35%",
                "focusSkin": "sknbtnexploremoreevents",
                "height": "14%",
                "id": "btnExpMore",
                "isVisible": true,
                "left": "46dp",
                "onClick": controller.AS_Button_j7106d7987854dba8a0d5d50a73eb7c0,
                "skin": "sknbtnexploremoreevents",
                "text": "EXPLORE MORE EVENTS",
                "top": "12%",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexEventConfSub.add(imgEventLogo, lblDone, lblDesc, btnExpMore);
            flexEventRegConformation.add(flexEventConfSub);
            var flexSkeMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flexSkeMain",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "CopyslFbox0c0bb43b1478442",
                "top": "8%",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flexSkeMain.setDefaultUnit(kony.flex.DP);
            var flexSk1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flexSk1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexSk1.setDefaultUnit(kony.flex.DP);
            var flex1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.04%",
                "clipBounds": true,
                "height": "50%",
                "id": "flex1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknflexEventBannerRounded",
                "top": "4%",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flex1.setDefaultUnit(kony.flex.DP);
            var imageBanner1 = new kony.ui.Image2({
                "centerX": "50.00%",
                "centerY": "49.91%",
                "height": "80dp",
                "id": "imageBanner1",
                "imageWhenFailed": "eventsdef.png",
                "imageWhileDownloading": "eventsdef.png",
                "isVisible": true,
                "left": "32.85%",
                "src": "eventske1.png",
                "top": "26.00%",
                "width": "80dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flex1.add(imageBanner1);
            var flxSkeleton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxSkeleton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onTouchStart": controller.AS_FlexContainer_cdb729793086435a98f028a71be9562b,
                "skin": "CopyslFbox1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSkeleton.setDefaultUnit(kony.flex.DP);
            var flxImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "83dp",
                "id": "flxImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6.22%",
                "skin": "CopyCopysknFlxf",
                "top": "15%",
                "width": "80dp",
                "zIndex": 1
            }, {}, {});
            flxImage.setDefaultUnit(kony.flex.DP);
            flxImage.add();
            var flxHeading = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30%",
                "skin": "CopyCopysknFlxf",
                "top": "17%",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxHeading.setDefaultUnit(kony.flex.DP);
            flxHeading.add();
            var flxContent1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "54%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxContent1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30%",
                "skin": "CopyCopysknFlxf",
                "top": "49%",
                "width": "150dp",
                "zIndex": 1
            }, {}, {});
            flxContent1.setDefaultUnit(kony.flex.DP);
            flxContent1.add();
            var flxContent2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxContent2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30%",
                "skin": "CopyCopysknFlxf",
                "top": "70%",
                "width": "190dp",
                "zIndex": 1
            }, {}, {});
            flxContent2.setDefaultUnit(kony.flex.DP);
            flxContent2.add();
            flxSkeleton.add(flxImage, flxHeading, flxContent1, flxContent2);
            flexSk1.add(flex1, flxSkeleton);
            var flexSk2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flexSk2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexSk2.setDefaultUnit(kony.flex.DP);
            var flex2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.04%",
                "clipBounds": true,
                "height": "50%",
                "id": "flex2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknflexEventBannerRounded",
                "top": "0%",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flex2.setDefaultUnit(kony.flex.DP);
            var CopyimageBanner0jf95282f44754c = new kony.ui.Image2({
                "centerX": "50.00%",
                "centerY": "50.09%",
                "height": "80dp",
                "id": "CopyimageBanner0jf95282f44754c",
                "imageWhenFailed": "eventsdef.png",
                "imageWhileDownloading": "eventsdef.png",
                "isVisible": true,
                "left": "32.85%",
                "src": "eventske1.png",
                "top": "26.00%",
                "width": "80dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flex2.add(CopyimageBanner0jf95282f44754c);
            var flxSkeleton2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxSkeleton2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onTouchStart": controller.AS_FlexContainer_ad344af442d74a9ea8404b7d240f7a0c,
                "skin": "CopyslFbox1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSkeleton2.setDefaultUnit(kony.flex.DP);
            var flxImage1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "83dp",
                "id": "flxImage1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6.22%",
                "skin": "CopyCopysknFlxf",
                "top": "15%",
                "width": "80dp",
                "zIndex": 1
            }, {}, {});
            flxImage1.setDefaultUnit(kony.flex.DP);
            flxImage1.add();
            var flxHeading1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxHeading1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30%",
                "skin": "CopyCopysknFlxf",
                "top": "17%",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxHeading1.setDefaultUnit(kony.flex.DP);
            flxHeading1.add();
            var flxContent3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "54%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxContent3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30%",
                "skin": "CopyCopysknFlxf",
                "top": "49%",
                "width": "150dp",
                "zIndex": 1
            }, {}, {});
            flxContent3.setDefaultUnit(kony.flex.DP);
            flxContent3.add();
            var flxContent4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxContent4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30%",
                "skin": "CopyCopysknFlxf",
                "top": "70%",
                "width": "190dp",
                "zIndex": 1
            }, {}, {});
            flxContent4.setDefaultUnit(kony.flex.DP);
            flxContent4.add();
            flxSkeleton2.add(flxImage1, flxHeading1, flxContent3, flxContent4);
            flexSk2.add(flex2, flxSkeleton2);
            flexSkeMain.add(flexSk1, flexSk2);
            flexEventMainLanding.add(flexEventHeader, segEventList, lblNoEvents, flexEventRegConformation, flexSkeMain);
            var hamburger = new com.konyenb.slidingmenu({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            hamburger.btnClickHeight = "25%";
            hamburger.btnClickLeft = "7%";
            hamburger.btnClickTop = "20%";
            hamburger.btnClickWidth = "25%";
            hamburger.btnLogoutVisibility = false;
            hamburger.headingLeft = "30%";
            hamburger.headingText = "Vigneshwaran Karunanithi";
            hamburger.headingTextIsVisible = false;
            hamburger.headingTop = "22%";
            hamburger.menuControlFlexTop = "20%";
            hamburger.profileImageHeight = "55dp";
            hamburger.profileImageLeft = "7%";
            hamburger.profileImageTop = "15%";
            hamburger.profileImageWidth = "55dp";
            hamburger.subHeadingLeft = "30%";
            hamburger.subHeadingText = "hajimalung.babai@kony.com";
            hamburger.subHeadingTextIsVisible = false;
            hamburger.subHeadingTop = "38%";
            hamburger.slidingMenuDirection = "\"Left\"";
            hamburger.headerAnimation = "\"Slide In\"";
            hamburger.profileImageType = "\"Circle\"";
            hamburger.footerStyle = "\"No Footer\"";
            hamburger.slidingMenuSkin = "";
            hamburger.headingSkin = "sknlblfff120";
            hamburger.subHeadingSkin = "sknlblsubheading";
            hamburger.menuItemTextSkin = "sknlblfff120";
            hamburger.footerTextSkin = "sknlblnunito";
            hamburger.menuItemHeaderTextSkin = "slFLabel";
            hamburger.btnClickSkin = "sknbtnLogin";
            hamburger.callbackMode = false;
            hamburger.onApplyButtonClick = controller.AS_UWI_a6c0992d6f9a40e2b6ec471e63bff4b3;
            hamburger.onLogoutClick = controller.AS_UWI_g7ed6ffcd58b4a23a46e9ff739847f89;
            var flxCover = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCover",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_g3cf32200e0e4f7f8df42fafbff6cef0,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCover.setDefaultUnit(kony.flex.DP);
            flxCover.add();
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_c8a1b6f1e3b24ef3980f79806729f9a2,
                "skin": "CopyslFbox0f74fe512df6546",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flexEventSS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "260dp",
                "id": "flexEventSS",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "100%",
                "skin": "sknflexPlainWhite",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 10
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
                "onDownloadComplete": controller.AS_Image_bb62642c99cc4e90b241d694efaece22,
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
            }, {});
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
            }, {});
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
                "renderAsAnchor": false,
                "textCopyable": false
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
            }, {});
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
                "renderAsAnchor": false,
                "textCopyable": false
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
                "renderAsAnchor": false,
                "textCopyable": false
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
                "renderAsAnchor": false,
                "textCopyable": false
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
                "renderAsAnchor": false,
                "textCopyable": false
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
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flexEventSS.add(flexEventBannerRoundedSS, flexEventShortDetailsSS, lblShadowSS);
            var flxTemp = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxTemp",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "skin": "CopyslFbox0g82426dbf91b4c",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxTemp.setDefaultUnit(kony.flex.DP);
            var img2 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "img2",
                "isVisible": true,
                "left": "43dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "90dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTemp.add(img2);
            var flxSharing = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxSharing",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "skin": "CopyslFbox0b7d83c8b126a43",
                "top": "100%",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxSharing.setDefaultUnit(kony.flex.DP);
            var socialSharing = new com.konyenb.socialSharing({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "50dp",
                "id": "socialSharing",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": 0,
                "skin": "CopyslFbox0bc28f0666f0c46",
                "width": "50dp"
            }, {}, {});
            socialSharing.imgVisibility = true;
            socialSharing.MimeType = "Image/PNG";
            socialSharing.Subject = "Event";
            socialSharing.FileName = "EventCard";
            flxSharing.add(socialSharing);
            this.add(flexEventMainLanding, hamburger, flxCover, flxShadow, flexEventSS, flxTemp, flxSharing);
        };
        return [{
            "addWidgets": addWidgetsfrmEventsLanding,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmEventsLanding",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_jb7bf8cc66fe417e98b1afc97f19676f,
            "skin": "sknFrmBGGradient"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});