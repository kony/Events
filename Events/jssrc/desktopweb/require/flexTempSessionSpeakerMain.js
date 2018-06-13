define("flexTempSessionSpeakerMain", function() {
    return function(controller) {
        var flexTempSessionSpeakerMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "220dp",
            "id": "flexTempSessionSpeakerMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexTempSessionSpeakerMain.setDefaultUnit(kony.flex.DP);
        var flexTempSpeakerDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexTempSpeakerDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "sknflxfff",
            "top": "0%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flexTempSpeakerDetails.setDefaultUnit(kony.flex.DP);
        var txtSpeakerName = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "skntxtnormal",
            "height": "20%",
            "id": "txtSpeakerName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "102dp",
            "placeholder": "Speaker Name",
            "secureTextEntry": false,
            "skin": "skntxtnormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "10%",
            "width": "85%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false
        });
        var txtSpeakerDesg = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "skntxtnormal",
            "height": "20%",
            "id": "txtSpeakerDesg",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "102dp",
            "placeholder": "Speaker Name",
            "secureTextEntry": false,
            "skin": "skntxtnormal",
            "text": "Designation",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "10%",
            "width": "85%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false
        });
        var txtSpeakerLkProfile = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "defTextBoxFocus",
            "height": "20%",
            "id": "txtSpeakerLkProfile",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "102dp",
            "placeholder": "Speaker Name",
            "secureTextEntry": false,
            "skin": "skntxtnormal",
            "text": "Linked Public Profile Link",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "10%",
            "width": "85%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false
        });
        flexTempSpeakerDetails.add(txtSpeakerName, txtSpeakerDesg, txtSpeakerLkProfile);
        var lblStripSessionSpeaker = new kony.ui.Label({
            "height": "100%",
            "id": "lblStripSessionSpeaker",
            "isVisible": true,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "top": "0dp",
            "width": "3px",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexAddAndDel = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flexAddAndDel",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0.00%",
            "skin": "slFbox",
            "top": "0.00%",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flexAddAndDel.setDefaultUnit(kony.flex.DP);
        var flexDel = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flexDel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "onClick": controller.AS_FlexContainer_gbc0a1a83c6f457498c362d7ecb36483,
            "skin": "slFbox",
            "top": "35%",
            "width": "20dp",
            "zIndex": 1
        }, {}, {});
        flexDel.setDefaultUnit(kony.flex.DP);
        var ImgDel = new kony.ui.Image2({
            "height": "100%",
            "id": "ImgDel",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "removespeaker.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexDel.add(ImgDel);
        var flexAdd = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flexAdd",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "onClick": controller.AS_FlexContainer_caa9d31600934b5ea70d407e3069dc3e,
            "skin": "slFbox",
            "top": "1%",
            "width": "20dp",
            "zIndex": 1
        }, {}, {});
        flexAdd.setDefaultUnit(kony.flex.DP);
        var imgAdd = new kony.ui.Image2({
            "height": "100%",
            "id": "imgAdd",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "addspeaker.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexAdd.add(imgAdd);
        flexAddAndDel.add(flexDel, flexAdd);
        flexTempSessionSpeakerMain.add(flexTempSpeakerDetails, lblStripSessionSpeaker, flexAddAndDel);
        return flexTempSessionSpeakerMain;
    }
})