define(function() {
    return function(controller) {
        var sessionpreview = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "sessionpreview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_da8b622bc77544e6868db44d5528a8c2,
            "skin": "sknFlexBorderDesk00a0dd",
            "top": "0dp",
            "width": "50%"
        }, {}, {});
        sessionpreview.setDefaultUnit(kony.flex.DP);
        sessionpreview.add();
        return sessionpreview;
    }
})