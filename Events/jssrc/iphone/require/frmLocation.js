define("frmLocation", function() {
    return function(controller) {
        function addWidgetsfrmLocation() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "104dp",
                "skin": "sknFlxWhite",
                "top": "126dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "9%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxHeaderGredient",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_ff3e76b3ac474fd88e3f30dde40054e5,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgClose",
                "isVisible": true,
                "left": "19dp",
                "skin": "slImage",
                "src": "closeicon.png",
                "top": "15dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose.add(imgClose);
            flxHeader.add(flxClose);
            var flxImageContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "25%",
                "id": "flxImageContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxCharcolGrey",
                "top": "9%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxImageContainer.setDefaultUnit(kony.flex.DP);
            var imgLoc = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgLoc",
                "isVisible": true,
                "skin": "slImage",
                "src": "event02.jpg",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLocationInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxLocationInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "CopyslFbox0ja90ae9b90f347",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxLocationInfo.setDefaultUnit(kony.flex.DP);
            var imgLocIcon = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "imgLocIcon",
                "isVisible": true,
                "skin": "slImage",
                "src": "maplocationicon.png",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLoc = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblLoc",
                "isVisible": true,
                "skin": "sknLblLocAddress",
                "text": "Anchorage Convention Centers Anchorage,Alaska",
                "textStyle": {},
                "top": "0dp",
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
            flxLocationInfo.add(imgLocIcon, lblLoc);
            flxImageContainer.add(imgLoc, flxLocationInfo);
            var mapEventLoc = new kony.ui.Map({
                "calloutTemplate": "flxCalloutTemp",
                "calloutWidth": 80,
                "centerX": "50%",
                "defaultPinImage": "pinb.png",
                "height": "66%",
                "id": "mapEventLoc",
                "isVisible": true,
                "provider": constants.MAP_PROVIDER_GOOGLE,
                "top": "34%",
                "widgetDataMapForCallout": {
                    "flxCalloutTemp": "flxCalloutTemp",
                    "lblAdd": "lblAdd"
                },
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "mode": constants.MAP_VIEW_MODE_NORMAL,
                "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
                "zoomLevel": 10
            });
            flxRoot.add(flxHeader, flxImageContainer, mapEventLoc);
            this.add(flxRoot);
        };
        return [{
            "addWidgets": addWidgetsfrmLocation,
            "enabledForIdleTimeout": false,
            "id": "frmLocation",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
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
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "none"
            },
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});