define(function() {
    return function(controller) {
        var dashboard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "dashboard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopysknFlxEventWhite0caa649ffd3e440",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        dashboard.setDefaultUnit(kony.flex.DP);
        var flxMenuIcon = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMenuIcon",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 1
        }, {}, {});
        flxMenuIcon.setDefaultUnit(kony.flex.DP);
        var imgDashBoard = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgDashBoard",
            "isVisible": true,
            "skin": "slImage",
            "src": "menucollapse.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMenuIcon.add(imgDashBoard);
        var lblDashboard = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDashboard",
            "isVisible": true,
            "left": "75dp",
            "skin": "CopydefLabel0ab889153854343",
            "text": "Dashboard",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxNotificationIcon = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNotificationIcon",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "right": "4%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 1
        }, {}, {});
        flxNotificationIcon.setDefaultUnit(kony.flex.DP);
        var imgNotification = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgNotification",
            "isVisible": true,
            "left": "13dp",
            "skin": "slImage",
            "src": "notificationicon.png",
            "top": "17dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxNotificationIcon.add(imgNotification);
        var flexProfile = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexProfile",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "70.71%",
            "skin": "slFbox",
            "top": "0%",
            "width": "26.43%",
            "zIndex": 5
        }, {}, {});
        flexProfile.setDefaultUnit(kony.flex.DP);
        flexProfile.add();
        var flexProfilePhotoANdTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "100%",
            "id": "flexProfilePhotoANdTitle",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "right": "2%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 5
        }, {}, {});
        flexProfilePhotoANdTitle.setDefaultUnit(kony.flex.DP);
        var btnUser = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "sknBtn333110AL",
            "height": "100%",
            "id": "btnUser",
            "isVisible": true,
            "left": "50%",
            "onClick": controller.AS_btnLoginClick_e7025cff34c0420b9769292fe0f3792d,
            "skin": "sknBtn333110AL",
            "text": "Login",
            "top": "29dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblUserName = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblUserName",
            "isVisible": false,
            "left": "0%",
            "skin": "lblUserName",
            "text": "Vigneshewaran",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgProfile = new kony.ui.Image2({
            "centerY": "50%",
            "height": "35dp",
            "id": "imgProfile",
            "isVisible": false,
            "left": "5%",
            "skin": "slImage",
            "src": "profile_1.png",
            "top": "0%",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexProfilePhotoANdTitle.add(btnUser, lblUserName, imgProfile);
        dashboard.add(flxMenuIcon, lblDashboard, flxNotificationIcon, flexProfile, flexProfilePhotoANdTitle);
        return dashboard;
    }
})