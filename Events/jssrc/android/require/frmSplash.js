define("frmSplash", function() {
    return function(controller) {
        function addWidgetsfrmSplash() {
            this.setDefaultUnit(kony.flex.DP);
            var segSplashEvents = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnSkip": "SKIP",
                    "imgGetStart": "splashconcept01.png",
                    "lblSplashDesc": "Explore events"
                }, {
                    "btnSkip": "SKIP",
                    "imgGetStart": "splashconcept02.png",
                    "lblSplashDesc": "Browse event details"
                }, {
                    "btnSkip": "SKIP",
                    "imgGetStart": "splashconcept03.png",
                    "lblSplashDesc": "Login and register for events"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segSplashEvents",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0d1a4b732031e44",
                "rowTemplate": "flxFullSplashScreen",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-10.00%",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "btnSkip": "btnSkip",
                    "flxFullSplashScreen": "flxFullSplashScreen",
                    "imgGetStart": "imgGetStart",
                    "lblSplashDesc": "lblSplashDesc"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(segSplashEvents);
        };
        return [{
            "addWidgets": addWidgetsfrmSplash,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmSplash",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_da855ce7b4ee45148f5a96b18518259e,
            "skin": "CopysknFrmBGGradient0dfea14db87db45"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});