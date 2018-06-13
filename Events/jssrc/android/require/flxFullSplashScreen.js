define("flxFullSplashScreen", function() {
    return function(controller) {
        var flxFullSplashScreen = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFullSplashScreen",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknSplash",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxFullSplashScreen.setDefaultUnit(kony.flex.DP);
        var imgGetStart = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "35%",
            "height": "200dp",
            "id": "imgGetStart",
            "isVisible": true,
            "skin": "slImage",
            "src": "splashconcept01.png",
            "top": "20%",
            "width": "200dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSplashDesc = new kony.ui.RichText({
            "centerX": "50.03%",
            "height": "11.98%",
            "id": "lblSplashDesc",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslRichText0jdb8aff0f4954b",
            "text": "Explore events and Place holder content",
            "top": "5.00%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnSkip = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "CopysknbtnSkipFocus0bf55323483724b",
            "height": "7%",
            "id": "btnSkip",
            "isVisible": true,
            "left": "60dp",
            "onClick": controller.AS_Button_j7b99cd8021441259c1025ed996a2c91,
            "skin": "sknbtnSkipFocus",
            "text": "SKIP",
            "top": "15%",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFullSplashScreen.add(imgGetStart, lblSplashDesc, btnSkip);
        return flxFullSplashScreen;
    }
})