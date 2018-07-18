define("frmPreview", function() {
    return function(controller) {
        function addWidgetsfrmPreview() {
            this.setDefaultUnit(kony.flex.DP);
            var eventpreview = new com.konyenb.eventpreview({
                "clipBounds": true,
                "height": "90%",
                "id": "eventpreview",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17.50%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopysknFlxScroll",
                "top": "10%",
                "width": "82.50%"
            }, {}, {});
            this.add(eventpreview);
        };
        return [{
            "addWidgets": addWidgetsfrmPreview,
            "enabledForIdleTimeout": false,
            "id": "frmPreview",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
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