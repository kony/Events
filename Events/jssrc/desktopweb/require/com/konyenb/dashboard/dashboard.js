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
        var flexProfilePhotoANdTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flexProfilePhotoANdTitle",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "210px",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flexProfilePhotoANdTitle.setDefaultUnit(kony.flex.DP);
        var imgProfile = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "35dp",
            "id": "imgProfile",
            "isVisible": true,
            "left": "5px",
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
        var lblUserName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblUserName",
            "isVisible": true,
            "left": "10px",
            "skin": "lblUserName",
            "text": "John Mathew",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexProfilePhotoANdTitle.add(imgProfile, lblUserName);
        flexProfile.add(flexProfilePhotoANdTitle);
        dashboard.add(flxMenuIcon, lblDashboard, flxNotificationIcon, flexProfile);
        return dashboard;
    }
})