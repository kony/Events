define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flexLoginMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flexLoginMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0e7dc5e59e16347",
                "top": "195dp",
                "width": "38%",
                "zIndex": 1
            }, {}, {});
            flexLoginMain.setDefaultUnit(kony.flex.DP);
            var flexLoginEventLogo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flexLoginEventLogo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "FlexsknGradient",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexLoginEventLogo.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "bottom": "15%",
                "centerY": "50%",
                "height": "44.12%",
                "id": "imgLogo",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "eventstitlw.png",
                "width": "21.00%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLoginEventLogo.add(imgLogo);
            var flexLoginCred = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85%",
                "id": "flexLoginCred",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "15%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexLoginCred.setDefaultUnit(kony.flex.DP);
            var lbklSignInTitle = new kony.ui.Label({
                "centerX": "50%",
                "height": "8%",
                "id": "lbklSignInTitle",
                "isVisible": true,
                "left": "77dp",
                "skin": "CopydefLabel0fb1437cf1d194b",
                "text": "Sign in to your account",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtUser = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "txtFocusLogin",
                "height": "13%",
                "id": "txtUser",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "placeholder": "Enter your email ID",
                "secureTextEntry": false,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "6%",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var flexPass = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flexPass",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "29dp",
                "skin": "slFbox",
                "top": "6%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexPass.setDefaultUnit(kony.flex.DP);
            var txtPassWord = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "txtFocusLogin",
                "height": "100%",
                "id": "txtPassWord",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "onDone": controller.AS_TextField_e9a76156f7f1447e9dc2972f0c5aee44,
                "placeholder": "Password",
                "secureTextEntry": true,
                "skin": "CopysknTexBoxCommonSpeaker0b7b7824af0b848",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var txtPasswordShow = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "txtFocusLogin",
                "height": "100%",
                "id": "txtPasswordShow",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "CopysknTexBoxCommonSpeaker0b7b7824af0b848",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var FlexContainer0hd0cb1df7f1b45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "20dp",
                "id": "FlexContainer0hd0cb1df7f1b45",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_b1960b9eb1c24435ab192c6a8fc70925,
                "right": "2.50%",
                "skin": "slFbox",
                "top": "8dp",
                "width": "30dp",
                "zIndex": 10
            }, {}, {});
            FlexContainer0hd0cb1df7f1b45.setDefaultUnit(kony.flex.DP);
            var imageShowPassword = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imageShowPassword",
                "isVisible": true,
                "right": "2.50%",
                "skin": "slImage",
                "src": "eyeicon.png",
                "top": "19dp",
                "width": "100%",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0hd0cb1df7f1b45.add(imageShowPassword);
            flexPass.add(txtPassWord, txtPasswordShow, FlexContainer0hd0cb1df7f1b45);
            var btnSubmit = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "height": "12%",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "5%",
                "onClick": controller.AS_Button_gd61d69e5d5942138d6f15e55f2ce490,
                "skin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "text": "SUBMIT",
                "top": "12%",
                "width": "25%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lblError",
                "isVisible": true,
                "left": "172dp",
                "skin": "CopydefLabel0fa927ef7fd0b4e",
                "text": "The email and password combination you entered is not valid. Please tyr again.",
                "top": "5%",
                "width": "70%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLoginCred.add(lbklSignInTitle, txtUser, flexPass, btnSubmit, lblError);
            flexLoginMain.add(flexLoginEventLogo, flexLoginCred);
            this.add(flexLoginMain);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmf2f1f1"
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