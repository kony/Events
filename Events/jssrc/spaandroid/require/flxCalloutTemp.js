define("flxCalloutTemp", function() {
    return function(controller) {
        var flxCalloutTemp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCalloutTemp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxDeepBlue",
            "top": "0dp",
            "width": "70%"
        }, {}, {});
        flxCalloutTemp.setDefaultUnit(kony.flex.DP);
        var lblAdd = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblAdd",
            "isVisible": true,
            "minHeight": "40dp",
            "skin": "sknLblCalloutAdd",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 2, 0, 2],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxCalloutTemp.add(lblAdd);
        return flxCalloutTemp;
    }
})