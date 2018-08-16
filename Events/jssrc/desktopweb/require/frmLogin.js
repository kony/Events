define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flexLoginMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "85%",
                "id": "flexLoginMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0e7dc5e59e16347",
                "top": "195dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flexLoginMain.setDefaultUnit(kony.flex.DP);
            var flexLoginEventLogo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "14%",
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
            var flexLoginLinkedIn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22%",
                "id": "flexLoginLinkedIn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "14%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flexLoginLinkedIn.setDefaultUnit(kony.flex.DP);
            var Label0i4961a177e6340 = new kony.ui.Label({
                "height": "20%",
                "id": "Label0i4961a177e6340",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0ca4ec58bd8fa41",
                "text": "Consumer Login",
                "top": "25dp",
                "width": "100%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Button0iea9656067e447 = new kony.ui.Button({
                "bottom": "6%",
                "centerX": "50.79%",
                "focusSkin": "sknlbl3f51b522desk",
                "height": "35%",
                "id": "Button0iea9656067e447",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_a80651fce1e64f739c85ba5d18a05842,
                "skin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "text": "Login with LinkedIn",
                "width": "38%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLoginLinkedIn.add(Label0i4961a177e6340, Button0iea9656067e447);
            var FlexContainer0b412427d56964f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "FlexContainer0b412427d56964f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "36%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlexContainer0b412427d56964f.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b8f907baa32248 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "1px",
                "id": "CopyLabel0b8f907baa32248",
                "isVisible": true,
                "left": "20%",
                "skin": "CopydefLabel0a09424ad28a94f",
                "text": "Label",
                "top": "24%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0c400f0b8457a49 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Label0c400f0b8457a49",
                "isVisible": true,
                "skin": "CopydefLabel0fa479c35aa3940",
                "text": "OR",
                "width": "10%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0b412427d56964f.add(CopyLabel0b8f907baa32248, Label0c400f0b8457a49);
            var flexLoginCredAdmin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "54%",
                "id": "flexLoginCredAdmin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0.00%",
                "skin": "slFbox",
                "top": "46%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexLoginCredAdmin.setDefaultUnit(kony.flex.DP);
            var lbklSignInTitle = new kony.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lbklSignInTitle",
                "isVisible": true,
                "left": "77dp",
                "skin": "CopydefLabel0ca4ec58bd8fa41",
                "text": "Admin Login",
                "top": "2%",
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
                "height": "15%",
                "id": "txtUser",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "placeholder": "Enter your email ID",
                "secureTextEntry": false,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "7%",
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
                "height": "15%",
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
            var FlexContainer0bc72c113df624d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "FlexContainer0bc72c113df624d",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "skin": "slFbox",
                "top": "8%",
                "width": "90%",
                "zIndex": 2
            }, {}, {});
            FlexContainer0bc72c113df624d.setDefaultUnit(kony.flex.DP);
            var btnSubmit = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "height": "100%",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "15%",
                "onClick": controller.AS_Button_gac375ae9f3f437da23efcb0f25b67c4,
                "skin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "text": "SUBMIT",
                "top": "0%",
                "width": "30%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopybtnSubmit0c9d6fc6fd9c449 = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "height": "100%",
                "id": "CopybtnSubmit0c9d6fc6fd9c449",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_c7383094e1434f0e9b8fe1d38e25d41f,
                "skin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "text": "CANCEL",
                "top": "0%",
                "width": "30%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0bc72c113df624d.add(btnSubmit, CopybtnSubmit0c9d6fc6fd9c449);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
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
            flexLoginCredAdmin.add(lbklSignInTitle, txtUser, flexPass, FlexContainer0bc72c113df624d, lblError);
            flexLoginMain.add(flexLoginEventLogo, flexLoginLinkedIn, FlexContainer0b412427d56964f, flexLoginCredAdmin);
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