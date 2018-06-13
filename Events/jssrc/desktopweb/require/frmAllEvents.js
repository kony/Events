define("frmAllEvents", function() {
    return function(controller) {
        function addWidgetsfrmAllEvents() {
            this.setDefaultUnit(kony.flex.DP);
            var menuItem0 = new com.konysa.menuItem({
                "clipBounds": true,
                "height": "100%",
                "id": "menuItem0",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "17.50%"
            }, {}, {});
            menuItem0.onAllEventClick = controller.AS_UWI_ac1751fe9c6546df9407d49e802d7e33;
            menuItem0.onCreateEventClick = controller.AS_UWI_e717d50a84e04347896e78d480753327;
            menuItem0.onManageUserClick = controller.AS_UWI_cdcd79bb413e4c3e9e80b00fbec8a067;
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
                "zIndex": 20
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var dashboard = new com.konysa.dashboard({
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
                "width": "82.50%"
            }, {}, {});
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
            var menuItem = new com.konysa.menuItem2({
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
            menuItem.onCreateEventClick = controller.AS_UWI_adeed8e1d39b4373a27b49bf6b80f3ac;
            menuItem.onManageUserClick = controller.AS_UWI_e40b934c488e4b548933e1a493e4506d;
            flxRoot.add(dashboard, flexHeader, flxEventLIstContainer, menuItem);
            this.add(menuItem0, flxRoot);
        };
        return [{
            "addWidgets": addWidgetsfrmAllEvents,
            "enabledForIdleTimeout": false,
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
            "retainScrollPosition": false
        }]
    }
});