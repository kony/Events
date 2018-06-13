define("flexMainSearchTemp", function() {
    return function(controller) {
        var flexMainSearchTemp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexMainSearchTemp",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexMainSearchTemp.setDefaultUnit(kony.flex.DP);
        var lblResult = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblResult",
            "isVisible": true,
            "skin": "sknlbl969696",
            "text": "Label",
            "textStyle": {},
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblHorDivider = new kony.ui.Label({
            "centerX": "50%",
            "height": "2dp",
            "id": "lblHorDivider",
            "isVisible": true,
            "skin": "sknlblDivf2f2f1",
            "text": "Label",
            "textStyle": {},
            "top": "15dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flexMainSearchTemp.add(lblResult, lblHorDivider);
        return flexMainSearchTemp;
    }
})