define("flxTempUser", function() {
    return function(controller) {
        var flxTempUser = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40px",
            "id": "flxTempUser",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxLightBlueBG",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTempUser.setDefaultUnit(kony.flex.DP);
        var flxRegisteredUser = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxRegisteredUser",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "skin": "CopysknFlxTransparent",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRegisteredUser.setDefaultUnit(kony.flex.DP);
        var lblIndex = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblIndex",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblIndexDarkGreyFont",
            "text": "1",
            "width": "4%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblVerticalLine0 = new kony.ui.Label({
            "centerY": "50%",
            "height": "85%",
            "id": "lblVerticalLine0",
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
        var flxUserName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxUserName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "width": "33.10%",
            "zIndex": 10
        }, {}, {});
        flxUserName.setDefaultUnit(kony.flex.DP);
        var lblUserName = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblUserName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblUserInfoDarkGreyFont",
            "text": "User Name",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxUserName.add(lblUserName);
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
        var flxEmailI = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxEmailI",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "width": "30.10%",
            "zIndex": 10
        }, {}, {});
        flxEmailI.setDefaultUnit(kony.flex.DP);
        var lblEmail = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEmail",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblUserInfoDarkGreyFont",
            "text": "Email ID",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEmailI.add(lblEmail);
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
        var flxEditNDone = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxEditNDone",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "16.50%",
            "zIndex": 1
        }, {}, {});
        flxEditNDone.setDefaultUnit(kony.flex.DP);
        var btnEdit = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnSdit2",
            "height": "100%",
            "id": "btnEdit",
            "isVisible": true,
            "onClick": controller.AS_Button_f0fc76de33c84e839ed74b08ca97a9a7,
            "skin": "sknBtnSdit2",
            "text": "Edit",
            "width": "100%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnDone = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnSdit2",
            "height": "100%",
            "id": "btnDone",
            "isVisible": false,
            "onClick": controller.AS_Button_ca94ea74b3b34aa3b6319520a23bfc8a,
            "skin": "sknBtnSdit2",
            "text": "Done",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEditNDone.add(btnEdit, btnDone);
        var lblVerticalLine3 = new kony.ui.Label({
            "centerY": "50%",
            "height": "85%",
            "id": "lblVerticalLine3",
            "isVisible": false,
            "left": "0dp",
            "skin": "CopysknLblLine",
            "width": "1px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxRemove = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxRemove",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_aceac85945784738a5b9088c1897439b,
            "skin": "slFbox",
            "width": "32%",
            "zIndex": 1
        }, {}, {});
        flxRemove.setDefaultUnit(kony.flex.DP);
        var imgRemoveIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgRemoveIcon",
            "isVisible": true,
            "skin": "slImage",
            "src": "delete_icon.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRemove.add(imgRemoveIcon);
        var lblUserId = new kony.ui.Label({
            "height": "0px",
            "id": "lblUserId",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "10",
            "top": "0dp",
            "width": "0px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRegisteredUser.add(lblIndex, lblVerticalLine0, flxUserName, lblVerticalLine1, flxEmailI, lblVerticalLine2, flxEditNDone, lblVerticalLine3, flxRemove, lblUserId);
        flxTempUser.add(flxRegisteredUser);
        return flxTempUser;
    }
})