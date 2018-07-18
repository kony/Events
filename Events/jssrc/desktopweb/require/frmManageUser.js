define("frmManageUser", function() {
    return function(controller) {
        function addWidgetsfrmManageUser() {
            this.setDefaultUnit(kony.flex.PERCENTAGE);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "CopysknFlxLightGrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var flxMenuItem = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1100px",
                "id": "flxMenuItem",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "minWidth": "260px",
                "skin": "CopyslFbox0ad3c362d4f8148",
                "top": "0px",
                "width": "19.03%",
                "zIndex": 1
            }, {}, {});
            flxMenuItem.setDefaultUnit(kony.flex.DP);
            var menuItem = new com.konyenb.menuItem2({
                "clipBounds": true,
                "height": "1100%",
                "id": "menuItem",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            menuItem.onAllEventClick = controller.AS_UWI_b0c8b85e54dc4140a8c21f9c13996d65;
            menuItem.onCreateEventClick = controller.AS_UWI_dbc3178387a84ff48af713145d5d9851;
            flxMenuItem.add(menuItem);
            var flxInfoItem = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1100px",
                "id": "flxInfoItem",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "minWidth": "1106px",
                "skin": "CopysknFlxLightGrey",
                "top": "0dp",
                "width": "80.97%",
                "zIndex": 1
            }, {}, {});
            flxInfoItem.setDefaultUnit(kony.flex.DP);
            var dashboard = new com.konyenb.dashboard({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75px",
                "id": "dashboard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopysknFlxEventWhite0caa649ffd3e440",
                "top": "0px",
                "width": "100%"
            }, {}, {});
            dashboard.iconVisibility = false;
            var flxInfoItemContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "84.85%",
                "id": "flxInfoItemContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "30px",
                "skin": "CopysknFlxTransparent",
                "top": "0dp",
                "width": "95%",
                "zIndex": 20
            }, {}, {});
            flxInfoItemContainer.setDefaultUnit(kony.flex.DP);
            var flexHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "66px",
                "id": "flexHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flexHeader.setDefaultUnit(kony.flex.DP);
            var LblTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "50%",
                "id": "LblTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblHeader",
                "text": "Manage Users",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUnderLineEventMain = new kony.ui.Label({
                "bottom": "0px",
                "height": "1px",
                "id": "lblUnderLineEventMain",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblheaderlblLineLightGrey",
                "width": "100%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHeader.add(LblTitle, lblUnderLineEventMain);
            var flxEventDropdownContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45px",
                "id": "flxEventDropdownContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "25px",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxEventDropdownContainer.setDefaultUnit(kony.flex.DP);
            var listBoxEvent = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "sknListBoxInfo",
                "height": "100%",
                "id": "listBoxEvent",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"],
                    ["keyInfo", "Select Event"]
                ],
                "selectedKey": "keyInfo",
                "selectedKeyValue": ["keyInfo", "Select Event"],
                "skin": "sknListBoxInfo",
                "top": "0dp",
                "width": "474px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "sknLblGreyBG",
                "multiSelect": false
            });
            var btnProceed = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnGredient",
                "height": "100%",
                "id": "btnProceed",
                "isVisible": true,
                "left": "10px",
                "onClick": controller.AS_Button_afc005346af041ea99edbfd77be06a8e,
                "skin": "sknBtnGredient",
                "text": "Proceed",
                "width": "120px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventDropdownContainer.add(listBoxEvent, btnProceed);
            var lblSelectorInfo = new kony.ui.Label({
                "bottom": "2px",
                "height": "35px",
                "id": "lblSelectorInfo",
                "isVisible": true,
                "left": "0px",
                "skin": "sknLblInfo",
                "text": "Select events from the dropdown menu to view the user details.",
                "top": "10dp",
                "width": "95%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventDetailContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "730px",
                "id": "flxEventDetailContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxWhiteBGRoundedCorner",
                "top": "15dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxEventDetailContainer.setDefaultUnit(kony.flex.DP);
            var lblEventTitle = new kony.ui.Label({
                "centerX": "50%",
                "height": "35dp",
                "id": "lblEventTitle",
                "isVisible": true,
                "skin": "sknLblVioletBlue",
                "text": "Webinar Event Upgrade",
                "top": "15dp",
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLine1 = new kony.ui.Label({
                "bottom": "2px",
                "centerX": "50%",
                "height": "1px",
                "id": "lblLine1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknheaderlblLineDarkGrey",
                "top": "5dp",
                "width": "97%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventInfoRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "96px",
                "id": "flxEventInfoRoot",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "sknFlxWhiteBG",
                "top": "10px",
                "width": "97%",
                "zIndex": 1
            }, {}, {});
            flxEventInfoRoot.setDefaultUnit(kony.flex.DP);
            var flxRootEventTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRootEventTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "CopysknFlxTransparent",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxRootEventTitle.setDefaultUnit(kony.flex.DP);
            var flxEventBanner = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "96px",
                "id": "flxEventBanner",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxRounderCorner",
                "width": "96px",
                "zIndex": 1
            }, {}, {});
            flxEventBanner.setDefaultUnit(kony.flex.DP);
            var imgEventBanner = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgEventBanner",
                "isVisible": true,
                "skin": "slImage",
                "src": "event01_1.jpg",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventBanner.add(imgEventBanner);
            var flxEventInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "75dp",
                "id": "flxEventInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "42px",
                "skin": "CopysknFlxTransparent",
                "top": "0dp",
                "width": "330dp",
                "zIndex": 1
            }, {}, {});
            flxEventInfo.setDefaultUnit(kony.flex.DP);
            var flxCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxCategory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCategory.setDefaultUnit(kony.flex.DP);
            var lblCategoryTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblCategoryTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblEventDescItem1",
                "text": "Category",
                "width": "21%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHyphen = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblHyphen",
                "isVisible": true,
                "skin": "CopysknLblCharcolGrey1",
                "text": " - ",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventDescCategoryText = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescCategoryText",
                "isVisible": true,
                "left": "4dp",
                "skin": "CopysknLblEventDesc",
                "text": "Conference",
                "width": "73%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCategory.add(lblCategoryTitle, lblHyphen, lblEventDescCategoryText);
            var flxEventDescDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxEventDescDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventDescDate.setDefaultUnit(kony.flex.DP);
            var lblEventDescDateTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescDateTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblEventDescItem1",
                "text": "Date",
                "width": "21%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHyphen2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHyphen2",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblCharcolGrey1",
                "text": " - ",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventDescDateText = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescDateText",
                "isVisible": true,
                "left": "4dp",
                "skin": "CopysknLblEventDesc",
                "text": "14 Mar - 15 Mar, 2018",
                "top": "0dp",
                "width": "73%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventDescDate.add(lblEventDescDateTitle, lblHyphen2, lblEventDescDateText);
            var flxEventDescLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxEventDescLocation",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventDescLocation.setDefaultUnit(kony.flex.DP);
            var lblEventDescLocation = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescLocation",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblEventDescItem1",
                "text": "Location",
                "width": "21%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHyphen3 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHyphen3",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblCharcolGrey1",
                "text": " - ",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventDescLocationText = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescLocationText",
                "isVisible": true,
                "left": "4dp",
                "skin": "CopysknLblEventDesc",
                "text": "Convocation Center, Hyderabad",
                "top": "0dp",
                "width": "73%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventDescLocation.add(lblEventDescLocation, lblHyphen3, lblEventDescLocationText);
            flxEventInfo.add(flxCategory, flxEventDescDate, flxEventDescLocation);
            flxRootEventTitle.add(flxEventBanner, flxEventInfo);
            var lblLine0 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblLine0",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblLineUltraLightGrey",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxRegisteredUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRegisteredUser",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopysknFlxTransparent",
                "top": "0dp",
                "width": "16.50%",
                "zIndex": 1
            }, {}, {});
            flxRegisteredUser.setDefaultUnit(kony.flex.DP);
            var lblRegisteredUserCount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisteredUserCount",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "30",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRegisteredUser = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisteredUser",
                "isVisible": true,
                "skin": "CopysknLblEventDesc",
                "text": "Registered Users",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRegisteredUser.add(lblRegisteredUserCount, lblRegisteredUser);
            var lblLine2 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblLineUltraLightGrey",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventShared = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEventShared",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopysknFlxTransparent",
                "top": "0dp",
                "width": "16.55%",
                "zIndex": 1
            }, {}, {});
            flxEventShared.setDefaultUnit(kony.flex.DP);
            var lblSharedEventCount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSharedEventCount",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "55",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSharedEvent = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSharedEvent",
                "isVisible": true,
                "skin": "CopysknLblEventDesc",
                "text": "Events Share",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [25, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventShared.add(lblSharedEventCount, lblSharedEvent);
            var lblLine3 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblLine3",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblLine",
                "top": "24dp",
                "width": "1dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEventView",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopysknFlxTransparent",
                "top": "0dp",
                "width": "14.55%",
                "zIndex": 1
            }, {}, {});
            flxEventView.setDefaultUnit(kony.flex.DP);
            var lblViewedEventCount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblViewedEventCount",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "55",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblSharedEvent0i77bbd31420541 = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopylblSharedEvent0i77bbd31420541",
                "isVisible": true,
                "skin": "CopysknLblEventDesc",
                "text": "Events View",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [25, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventView.add(lblViewedEventCount, CopylblSharedEvent0i77bbd31420541);
            var flxMenuIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuIcon",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxDarkGrey",
                "top": "0dp",
                "width": "75dp",
                "zIndex": 1
            }, {}, {});
            flxMenuIcon.setDefaultUnit(kony.flex.DP);
            flxMenuIcon.add();
            flxEventInfoRoot.add(flxRootEventTitle, lblLine0, flxRegisteredUser, lblLine2, flxEventShared, lblLine3, flxEventView, flxMenuIcon);
            var flxRegisteredUserContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "440px",
                "id": "flxRegisteredUserContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "10px",
                "width": "98%",
                "zIndex": 10
            }, {}, {});
            flxRegisteredUserContainer.setDefaultUnit(kony.flex.DP);
            var flxUserContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "440px",
                "id": "flxUserContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserContainer.setDefaultUnit(kony.flex.DP);
            var flxUserHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxUserHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "sknFlxBlueBG",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserHeader.setDefaultUnit(kony.flex.DP);
            var flxIndex = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxIndex",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {}, {});
            flxIndex.setDefaultUnit(kony.flex.DP);
            var lblSerialNo = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblSerialNo",
                "isVisible": true,
                "skin": "sknLblWhite",
                "text": "SI",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxIndex.add(lblSerialNo);
            var lblVerticalLine1 = new kony.ui.Label({
                "centerY": "50%",
                "height": "85%",
                "id": "lblVerticalLine1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblLine",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUserName = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblUserName",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblWhite",
                "text": "User Name",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblVerticalLine2 = new kony.ui.Label({
                "centerY": "50%",
                "height": "85%",
                "id": "lblVerticalLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblLine",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEmailId = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmailId",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblWhite",
                "text": "Email ID",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblVerticalLine3 = new kony.ui.Label({
                "centerY": "50%",
                "height": "85%",
                "id": "lblVerticalLine3",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblLine",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblActions = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblActions",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblWhite",
                "text": "Actions",
                "width": "32.60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserHeader.add(flxIndex, lblVerticalLine1, lblUserName, lblVerticalLine2, lblEmailId, lblVerticalLine3, lblActions);
            var flxRegisteredUserList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "400px",
                "id": "flxRegisteredUserList",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100.00%",
                "zIndex": 1
            }, {}, {});
            flxRegisteredUserList.setDefaultUnit(kony.flex.DP);
            var segUserList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "btnDone": "Done",
                    "btnEdit": "Edit",
                    "imgRemoveIcon": "delete_icon.png",
                    "lblEmail": "Email ID",
                    "lblIndex": "1",
                    "lblUserId": "Label",
                    "lblUserName": "User Name",
                    "lblVerticalLine0": "",
                    "lblVerticalLine1": "",
                    "lblVerticalLine2": "",
                    "lblVerticalLine3": ""
                }, {
                    "btnDone": "Done",
                    "btnEdit": "Edit",
                    "imgRemoveIcon": "delete_icon.png",
                    "lblEmail": "Email ID",
                    "lblIndex": "1",
                    "lblUserId": "Label",
                    "lblUserName": "User Name",
                    "lblVerticalLine0": "",
                    "lblVerticalLine1": "",
                    "lblVerticalLine2": "",
                    "lblVerticalLine3": ""
                }, {
                    "btnDone": "Done",
                    "btnEdit": "Edit",
                    "imgRemoveIcon": "delete_icon.png",
                    "lblEmail": "Email ID",
                    "lblIndex": "1",
                    "lblUserId": "Label",
                    "lblUserName": "User Name",
                    "lblVerticalLine0": "",
                    "lblVerticalLine1": "",
                    "lblVerticalLine2": "",
                    "lblVerticalLine3": ""
                }],
                "groupCells": false,
                "height": "400px",
                "id": "segUserList",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot_1.png",
                "pageOnDotImage": "pageondot_1.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTempUser",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnDone": "btnDone",
                    "btnEdit": "btnEdit",
                    "flxEditNDone": "flxEditNDone",
                    "flxEmailI": "flxEmailI",
                    "flxRegisteredUser": "flxRegisteredUser",
                    "flxRemove": "flxRemove",
                    "flxTempUser": "flxTempUser",
                    "flxUserName": "flxUserName",
                    "imgRemoveIcon": "imgRemoveIcon",
                    "lblEmail": "lblEmail",
                    "lblIndex": "lblIndex",
                    "lblUserId": "lblUserId",
                    "lblUserName": "lblUserName",
                    "lblVerticalLine0": "lblVerticalLine0",
                    "lblVerticalLine1": "lblVerticalLine1",
                    "lblVerticalLine2": "lblVerticalLine2",
                    "lblVerticalLine3": "lblVerticalLine3"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxPageNavigation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxPageNavigation",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "CopysknFlxTransparent",
                "top": "25px",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPageNavigation.setDefaultUnit(kony.flex.DP);
            var btnPage1 = new kony.ui.Button({
                "focusSkin": "sknBtnPageNavigationActive",
                "height": "30dp",
                "id": "btnPage1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnPageNavigationActive",
                "text": "1",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnPage2 = new kony.ui.Button({
                "focusSkin": "sknBtnPageNavigationNormal",
                "height": "30dp",
                "id": "btnPage2",
                "isVisible": true,
                "left": "7px",
                "skin": "sknBtnPageNavigationNormal",
                "text": "2",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnPage3 = new kony.ui.Button({
                "focusSkin": "sknBtnPageNavigationNormal",
                "height": "30dp",
                "id": "btnPage3",
                "isVisible": true,
                "left": "7px",
                "skin": "sknBtnPageNavigationNormal",
                "text": "3",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnPage4 = new kony.ui.Button({
                "focusSkin": "sknBtnPageNavigationNormal",
                "height": "30dp",
                "id": "btnPage4",
                "isVisible": true,
                "left": "7px",
                "skin": "sknBtnPageNavigationNormal",
                "text": "4",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPageNavigation.add(btnPage1, btnPage2, btnPage3, btnPage4);
            flxRegisteredUserList.add(segUserList, flxPageNavigation);
            flxUserContainer.add(flxUserHeader, flxRegisteredUserList);
            var flxLoading = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxLoading",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxWhiteBG",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxLoading.setDefaultUnit(kony.flex.DP);
            var imgLoading = new kony.ui.Image2({
                "centerX": "33%",
                "centerY": "50%",
                "height": "150dp",
                "id": "imgLoading",
                "isVisible": true,
                "skin": "slImage",
                "src": "ajax_loader.gif",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgLoading2 = new kony.ui.Image2({
                "centerX": "66%",
                "centerY": "50%",
                "height": "150dp",
                "id": "imgLoading2",
                "isVisible": true,
                "skin": "slImage",
                "src": "ajax_loader.gif",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoading.add(imgLoading, imgLoading2);
            var flxNoUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "flxNoUser",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxWhiteBG",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxNoUser.setDefaultUnit(kony.flex.DP);
            var lblLine4 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblLine4",
                "isVisible": true,
                "skin": "sknheaderlblLineDarkGrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNoUser = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoUser",
                "isVisible": true,
                "left": "315dp",
                "skin": "sknLblLightBlueFont",
                "text": "No users have currently registered for this event.",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNoUser.add(lblLine4, lblNoUser);
            flxRegisteredUserContainer.add(flxUserContainer, flxLoading, flxNoUser);
            flxEventDetailContainer.add(lblEventTitle, lblLine1, flxEventInfoRoot, flxRegisteredUserContainer);
            flxInfoItemContainer.add(flexHeader, flxEventDropdownContainer, lblSelectorInfo, flxEventDetailContainer);
            var lblFooter = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblFooter",
                "isVisible": true,
                "skin": "CopysknLblFooter",
                "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
                "top": "40dp",
                "width": "40%",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            flxInfoItem.add(dashboard, flxInfoItemContainer, lblFooter);
            flxRoot.add(flxMenuItem, flxInfoItem);
            this.add(flxRoot);
        };
        return [{
            "addWidgets": addWidgetsfrmManageUser,
            "enabledForIdleTimeout": false,
            "id": "frmManageUser",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e5ee2744321a4665a1dfc6cfd31bcbd9,
            "skin": "CopyslForm0d3a40eed30a641"
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