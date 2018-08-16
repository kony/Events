define("frmAllEvents", function() {
    return function(controller) {
        function addWidgetsfrmAllEvents() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var dashboard = new com.konyenb.dashboard({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75px",
                "id": "dashboard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "19.03%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopysknFlxEventWhite0caa649ffd3e440",
                "top": "0dp",
                "width": "81%"
            }, {}, {});
            dashboard.isProfileVisible = true;
            dashboard.isUsernameVisible = false;
            dashboard.username = "Login";
            dashboard.btnLoginClick = controller.AS_UWI_e62a0a2b80e441cea46a5884a162f139;
            var flexHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "68px",
                "id": "flexHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "19.03%",
                "skin": "slFbox",
                "top": "75px",
                "width": "80%",
                "zIndex": 10
            }, {}, {});
            flexHeader.setDefaultUnit(kony.flex.DP);
            var LblTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "50%",
                "id": "LblTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "CopysknLblHeader1",
                "text": "All Events",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUnderLineEventMain = new kony.ui.Label({
                "bottom": "2px",
                "height": "1px",
                "id": "lblUnderLineEventMain",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLblLineUltraLightGrey",
                "width": "95%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHeader.add(LblTitle, lblUnderLineEventMain);
            var flxEventLIstContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxEventLIstContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "19.03%",
                "skin": "slFbox",
                "top": "140px",
                "width": "81%",
                "zIndex": 20
            }, {}, {});
            flxEventLIstContainer.setDefaultUnit(kony.flex.DP);
            var flxScEventList = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScEventList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScEventList",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "97%",
                "zIndex": 10
            }, {}, {});
            flxScEventList.setDefaultUnit(kony.flex.DP);
            flxScEventList.add();
            flxEventLIstContainer.add(flxScEventList);
            var menuItem = new com.konyenb.menuItem2({
                "clipBounds": true,
                "height": "100%",
                "id": "menuItem",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "19.03%"
            }, {}, {});
            menuItem.option1Image = false;
            menuItem.option2Image = false;
            menuItem.option2Text = "My Events";
            menuItem.option3Image = false;
            menuItem.option3Text = "Upcoming Events";
            menuItem.onAllEventClick = controller.AS_UWI_dfbc5c7080a94156b2be7c6820751c6d;
            menuItem.onCreateEventClick = controller.AS_UWI_adeed8e1d39b4373a27b49bf6b80f3ac;
            menuItem.onManageUserClick = controller.AS_UWI_e40b934c488e4b548933e1a493e4506d;
            flxRoot.add(dashboard, flexHeader, flxEventLIstContainer, menuItem);
            var eventpreview = new com.konyenb.eventpreview({
                "clipBounds": true,
                "height": "90%",
                "id": "eventpreview",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "100%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopysknFlxScroll",
                "top": "10%",
                "width": "81%"
            }, {}, {});
            eventpreview.onBottomRegisterClick = controller.AS_UWI_d9b367ff0aba4a24b1c475adcafd588b;
            eventpreview.onPrevBack = controller.AS_UWI_d7309e7096ef4c69b257a8cb0b5fb023;
            eventpreview.onTopRegisterClick = controller.AS_UWI_c956fc0d99d5499590cf7ce2fed4ad18;
            this.add(flxRoot, eventpreview);
        };
        return [{
            "addWidgets": addWidgetsfrmAllEvents,
            "enabledForIdleTimeout": true,
            "id": "frmAllEvents",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_hbe07b3ca4164101b2660362c4fc8c23,
            "skin": "sknFrmLightGrey"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "onDeviceBack": controller.AS_Form_f4846a2d4d6342d5b65a424619ff391d,
            "retainScrollPosition": false
        }]
    }
});