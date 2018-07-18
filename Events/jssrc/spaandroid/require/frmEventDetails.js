define("frmEventDetails", function() {
    return function(controller) {
        function addWidgetsfrmEventDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "125dp",
                "skin": "slFbox",
                "top": "286dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var flxSCContainter = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxSCContainter",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScRootWhite",
                "top": "0dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSCContainter.setDefaultUnit(kony.flex.DP);
            var flxDummyBox1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "9%",
                "id": "flxDummyBox1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxHeaderGredient",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDummyBox1.setDefaultUnit(kony.flex.DP);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_h19bae8ee8c5441697b4ceed80101951,
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgClose",
                "isVisible": true,
                "left": "19dp",
                "skin": "slImage",
                "src": "arrowpreviousscreen.png",
                "top": "15dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose.add(imgClose);
            var flxShare = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxShare",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_c4fa74d19c8641f38c3de6c068262dba,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxShare.setDefaultUnit(kony.flex.DP);
            var imgShare = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgShare",
                "isVisible": true,
                "left": "19dp",
                "skin": "slImage",
                "src": "sharesmallicon.png",
                "top": "15dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var socialSharing = new com.konyenb.socialSharing({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "socialSharing",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": 0,
                "skin": "CopyslFbox0bc28f0666f0c46",
                "width": "30dp"
            }, {}, {});
            socialSharing.shareSrc = "sharesmallicon.png";
            socialSharing.MimeType = "Image/PNG";
            socialSharing.Subject = "Event";
            socialSharing.FileName = "eventSharing";
            flxShare.add(imgShare, socialSharing);
            flxDummyBox1.add(flxClose, flxShare);
            var flxEventImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxEventImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxCharcolGrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventImage.setDefaultUnit(kony.flex.DP);
            var imgMain = new kony.ui.Image2({
                "centerX": "49.97%",
                "height": "100%",
                "id": "imgMain",
                "imageWhenFailed": "eventsdef.png",
                "imageWhileDownloading": "eventsdef.png",
                "isVisible": true,
                "skin": "slImage",
                "src": "https://app.box.com/shared/static/dlckxc9fxe2nit9e7iuv46oog8xblh6o.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTitleContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxTitleContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxEventWhite",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTitleContainer.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "centerX": "50%",
                "height": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "skin": "CopysknLblEventTitle0e42827a8addc45",
                "text": "TITLE OF THE EVENT",
                "textStyle": {},
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblSubTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSubTitle",
                "isVisible": true,
                "skin": "CopysknLblSubTitle0h119490964124f",
                "text": "Conference",
                "textStyle": {},
                "top": "40%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblLine = new kony.ui.Label({
                "bottom": "2dp",
                "centerX": "50%",
                "height": "1dp",
                "id": "lblLine",
                "isVisible": true,
                "skin": "CopydefLabel0b11e96b5e25842",
                "text": " ",
                "textStyle": {},
                "width": "95%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxTitleContainer.add(lblTitle, lblSubTitle, lblLine);
            flxEventImage.add(imgMain, flxTitleContainer);
            var flxInfo = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "140dp",
                "horizontalScrollIndicator": false,
                "id": "flxInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "1dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInfo.setDefaultUnit(kony.flex.DP);
            var flxInfoItem0 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "16.50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxInfoItem0",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_de6b2f25b99640fe94ac9af2a5e48576,
                "skin": "sknFlxLightGrey",
                "width": "120dp",
                "zIndex": 1
            }, {}, {});
            flxInfoItem0.setDefaultUnit(kony.flex.DP);
            var flxImageContainer0 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxImageContainer0",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxImageContainer0.setDefaultUnit(kony.flex.DP);
            var imgIcon0 = new kony.ui.Image2({
                "bottom": "0dp",
                "centerX": "50%",
                "height": "30dp",
                "id": "imgIcon0",
                "isVisible": true,
                "skin": "slImage",
                "src": "calendarscheduleicon.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImageContainer0.add(imgIcon0);
            var lblInfoItemTitle01 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfoItemTitle01",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblInfoItemTitle",
                "text": "14 Mar-15 Mar,2018",
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblInfoItemTitle02 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfoItemTitle02",
                "isVisible": true,
                "skin": "sknLblEventInfo",
                "text": "2 Days Event",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInfoItem0.add(flxImageContainer0, lblInfoItemTitle01, lblInfoItemTitle02);
            var lblVerticalLine0 = new kony.ui.Label({
                "centerX": "33.30%",
                "centerY": "50%",
                "height": "80%",
                "id": "lblVerticalLine0",
                "isVisible": true,
                "skin": "CopydefLabel0g5058f6ada1b43",
                "textStyle": {},
                "width": "1dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxInfoItem1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxInfoItem1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5dp",
                "onClick": controller.AS_FlexContainer_g8066e514fe2457883b0f980152d1046,
                "skin": "sknFlxLightGrey",
                "width": "120dp",
                "zIndex": 1
            }, {}, {});
            flxInfoItem1.setDefaultUnit(kony.flex.DP);
            var flxImageContainer1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxImageContainer1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxImageContainer1.setDefaultUnit(kony.flex.DP);
            var imgIcon1 = new kony.ui.Image2({
                "bottom": "0dp",
                "centerX": "50%",
                "height": "30dp",
                "id": "imgIcon1",
                "isVisible": true,
                "skin": "slImage",
                "src": "maplocationicon.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImageContainer1.add(imgIcon1);
            var lblInfoItemTitle11 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfoItemTitle11",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblInfoItemTitle",
                "text": "Hyderabad",
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblInfoItemTitle12 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfoItemTitle12",
                "isVisible": true,
                "skin": "sknLblEventInfo",
                "text": "Convention Center",
                "textStyle": {},
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInfoItem1.add(flxImageContainer1, lblInfoItemTitle11, lblInfoItemTitle12);
            var lblVerticalLine1 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblVerticalLine1",
                "isVisible": true,
                "left": "240dp",
                "skin": "CopydefLabel0g5058f6ada1b43",
                "textStyle": {},
                "width": "1dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxInfoItem2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "83.50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxInfoItem2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5dp",
                "onClick": controller.AS_FlexContainer_d860aa3040fb489da5970c4cf78490bc,
                "skin": "sknFlxLightGrey",
                "width": "120dp",
                "zIndex": 1
            }, {}, {});
            flxInfoItem2.setDefaultUnit(kony.flex.DP);
            var flxImageContainer2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxImageContainer2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "12dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxImageContainer2.setDefaultUnit(kony.flex.DP);
            var flxImageContainerLeft = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "30%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxImageContainerLeft",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxImageContainerCircular",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxImageContainerLeft.setDefaultUnit(kony.flex.DP);
            var imgIcon2Left = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgIcon2Left",
                "isVisible": true,
                "skin": "slImage",
                "src": "userthumbnail01.jpg",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImageContainerLeft.add(imgIcon2Left);
            var flxImageContainerCenter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxImageContainerCenter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxImageContainerCircular",
                "width": "40dp",
                "zIndex": 10
            }, {}, {});
            flxImageContainerCenter.setDefaultUnit(kony.flex.DP);
            var imgIcon2center = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "40dp",
                "id": "imgIcon2center",
                "isVisible": true,
                "skin": "slImage",
                "src": "multiplepresentersicon.png",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImageContainerCenter.add(imgIcon2center);
            var flxImageContainerRight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "70%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxImageContainerRight",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxImageContainerCircular",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxImageContainerRight.setDefaultUnit(kony.flex.DP);
            var imgIcon2Right = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgIcon2Right",
                "isVisible": true,
                "skin": "slImage",
                "src": "userthumbnail02.jpg",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImageContainerRight.add(imgIcon2Right);
            flxImageContainer2.add(flxImageContainerLeft, flxImageContainerCenter, flxImageContainerRight);
            var lblInfoItemTitle21 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfoItemTitle21",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblInfoItemTitle",
                "text": "Multiple Presenters",
                "textStyle": {},
                "top": "13dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblInfoItemTitle22 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInfoItemTitle22",
                "isVisible": true,
                "skin": "sknLblEventInfo",
                "text": "2 Days Event",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInfoItem2.add(flxImageContainer2, lblInfoItemTitle21, lblInfoItemTitle22);
            flxInfo.add(flxInfoItem0, lblVerticalLine0, flxInfoItem1, lblVerticalLine1, flxInfoItem2);
            var lblHorizontalLine1 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblHorizontalLine1",
                "isVisible": true,
                "skin": "sknLblLine",
                "textStyle": {},
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxEventDesc = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxEventDesc",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "slFbox",
                "top": "0dp",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxEventDesc.setDefaultUnit(kony.flex.DP);
            var lblDescTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDescTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblDescTitle",
                "text": "About the Event",
                "textStyle": {},
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblEventDesc1 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEventDesc1",
                "isVisible": true,
                "skin": "sknLblEventDesc",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ante a est scelerisque, pharetra euismod metus interdum. Phasellus mollis elementum purus sit amet viverra. Nulla maximus in sem at eleifend. Aenean leo ipsum, auctor quis tempus a, dapibus eu risus. ",
                "textStyle": {},
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxGalleryCompConatiner = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxGalleryCompConatiner",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "onClick": controller.AS_FlexContainer_f48d65d8fa15469ab2781b47b1bffe6e,
                "skin": "slFbox",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGalleryCompConatiner.setDefaultUnit(kony.flex.DP);
            var flexItem0 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexItem0",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxEventRoundedCorner",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flexItem0.setDefaultUnit(kony.flex.DP);
            var imgItem0 = new kony.ui.Image2({
                "centerX": "50.00%",
                "centerY": "50.19%",
                "height": "100%",
                "id": "imgItem0",
                "imageWhenFailed": "eventske.png",
                "imageWhileDownloading": "eventske.png",
                "isVisible": true,
                "skin": "slImage",
                "src": "eventske.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexItem0.add(imgItem0);
            var flexItem1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexItem1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknFlxEventRoundedCorner",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flexItem1.setDefaultUnit(kony.flex.DP);
            var imgItem1 = new kony.ui.Image2({
                "centerX": "49.81%",
                "centerY": "50.00%",
                "height": "100%",
                "id": "imgItem1",
                "imageWhenFailed": "eventske.png",
                "imageWhileDownloading": "eventske.png",
                "isVisible": true,
                "skin": "slImage",
                "src": "event01.jpg",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexItem1.add(imgItem1);
            var flexItem2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexItem2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknFlxEventRoundedCorner",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flexItem2.setDefaultUnit(kony.flex.DP);
            var imgItem2 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgItem2",
                "imageWhenFailed": "eventske.png",
                "imageWhileDownloading": "eventske.png",
                "isVisible": true,
                "skin": "slImage",
                "src": "event02.jpg",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexItem2.add(imgItem2);
            var flexItem3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexItem3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknFlxEventRoundedCorner",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flexItem3.setDefaultUnit(kony.flex.DP);
            var imgItem3 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgItem3",
                "imageWhenFailed": "eventske.png",
                "imageWhileDownloading": "eventske.png",
                "isVisible": true,
                "skin": "slImage",
                "src": "event03.jpg",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexItem3.add(imgItem3);
            var flexItem4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flexItem4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknFlxEventRoundedCorner",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flexItem4.setDefaultUnit(kony.flex.DP);
            var imgItem4 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgItem4",
                "imageWhenFailed": "eventske.png",
                "imageWhileDownloading": "eventske.png",
                "isVisible": true,
                "skin": "slImage",
                "src": "event04.jpeg",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexRemainingImageCount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexRemainingImageCount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "CopyslFbox0fc77a92784cb45",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexRemainingImageCount.setDefaultUnit(kony.flex.DP);
            var lblRemaingImageCount = new kony.ui.Label({
                "height": "100%",
                "id": "lblRemaingImageCount",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0bafe983d9b5c4f",
                "text": "1",
                "textStyle": {},
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flexRemainingImageCount.add(lblRemaingImageCount);
            flexItem4.add(imgItem4, flexRemainingImageCount);
            flxGalleryCompConatiner.add(flexItem0, flexItem1, flexItem2, flexItem3, flexItem4);
            var lblEventDesc2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEventDesc2",
                "isVisible": true,
                "left": "36dp",
                "skin": "sknLblEventDesc",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ante a est scelerisque, pharetra euismod metus interdum. Phasellus mollis elementum purus sit amet viverra. Nulla maximus in sem at eleifend. Aenean leo ipsum, auctor quis tempus a, dapibus eu risus. ",
                "textStyle": {},
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxEventDesc.add(lblDescTitle, lblEventDesc1, flxGalleryCompConatiner, lblEventDesc2);
            var flxDummyBox2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "flxDummyBox2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDummyBox2.setDefaultUnit(kony.flex.DP);
            flxDummyBox2.add();
            flxSCContainter.add(flxDummyBox1, flxEventImage, flxInfo, lblHorizontalLine1, flxEventDesc, flxDummyBox2);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxHeaderGredient",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var btnRegister = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtnTransparent",
                "height": "100%",
                "id": "btnRegister",
                "isVisible": true,
                "left": "64dp",
                "onClick": controller.AS_Button_h3a6cfeb91544d68b12dd2e90eebd469,
                "skin": "sknBtnTransparent",
                "text": "REGISTER",
                "top": "27dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooter.add(btnRegister);
            flxRoot.add(flxSCContainter, flxFooter);
            var flexEventSS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "260dp",
                "id": "flexEventSS",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "100%",
                "skin": "sknflexPlainWhite",
                "top": "20%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flexEventSS.setDefaultUnit(kony.flex.DP);
            var flexEventBannerRoundedSS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "59%",
                "id": "flexEventBannerRoundedSS",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknflexEventBannerRounded",
                "top": "6%",
                "width": "92%",
                "zIndex": 1
            }, {}, {});
            flexEventBannerRoundedSS.setDefaultUnit(kony.flex.DP);
            var imageBannerSS = new kony.ui.Image2({
                "height": "100%",
                "id": "imageBannerSS",
                "isVisible": true,
                "left": "0%",
                "onDownloadComplete": controller.AS_Image_e7df0d8001944b98b3f1f479014c10b8,
                "src": "event01.jpg",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexEventBannerRoundedSS.add(imageBannerSS);
            var flexEventShortDetailsSS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "37%",
                "id": "flexEventShortDetailsSS",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0.01%",
                "skin": "slFbox",
                "top": "63.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexEventShortDetailsSS.setDefaultUnit(kony.flex.DP);
            var flexDateAndTimeSS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexDateAndTimeSS",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "skin": "slFbox",
                "top": "0%",
                "width": "23.11%",
                "zIndex": 1
            }, {}, {});
            flexDateAndTimeSS.setDefaultUnit(kony.flex.DP);
            var rchTextDateSS = new kony.ui.RichText({
                "centerX": "50%",
                "height": "26.00%",
                "id": "rchTextDateSS",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknrchtext00a0dd140",
                "text": "10\n",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rchtxtMonthSS = new kony.ui.RichText({
                "centerX": "50%",
                "height": "26.00%",
                "id": "rchtxtMonthSS",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknrchtext00a0dd140",
                "text": "MAR",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTimeSS = new kony.ui.Label({
                "centerX": "49.83%",
                "height": "30%",
                "id": "lblTimeSS",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknlbl96969690",
                "text": "10AM - 12PM",
                "textStyle": {},
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flexDateAndTimeSS.add(rchTextDateSS, rchtxtMonthSS, lblTimeSS);
            var btnVerticalStripSS = new kony.ui.Button({
                "centerY": "50%",
                "height": "80%",
                "id": "btnVerticalStripSS",
                "isVisible": true,
                "left": "2%",
                "skin": "sknbtnStrinverticalf2f1f1",
                "text": "Button",
                "top": "0%",
                "width": "2px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexEventshortdetailMainSS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexEventshortdetailMainSS",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0.00%",
                "skin": "slFbox",
                "top": "0.24%",
                "width": "59.93%",
                "zIndex": 1
            }, {}, {});
            flexEventshortdetailMainSS.setDefaultUnit(kony.flex.DP);
            var lblEventTitleSS = new kony.ui.Label({
                "id": "lblEventTitleSS",
                "isVisible": true,
                "left": "3.95%",
                "skin": "sknlbl3f51b5120",
                "text": "Webinar Event Upgrade",
                "textStyle": {},
                "top": "12.00%",
                "width": "96%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flexEventCategorySS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flexEventCategorySS",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexEventCategorySS.setDefaultUnit(kony.flex.DP);
            var lblEventCategoryTitleSS = new kony.ui.Label({
                "centerY": "50.00%",
                "id": "lblEventCategoryTitleSS",
                "isVisible": true,
                "left": "4.00%",
                "skin": "sknlbl969696100",
                "text": "Category -",
                "textStyle": {},
                "top": "0dp",
                "width": "32.00%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblCategorySS = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCategorySS",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknlbl96969690",
                "text": "Hackathon Categories",
                "textStyle": {},
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flexEventCategorySS.add(lblEventCategoryTitleSS, lblCategorySS);
            var flexEventTypeSS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23%",
                "id": "flexEventTypeSS",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2.00%",
                "skin": "slFbox",
                "top": "5.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexEventTypeSS.setDefaultUnit(kony.flex.DP);
            var imageTypeIconSS = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "18dp",
                "id": "imageTypeIconSS",
                "isVisible": true,
                "left": "4.00%",
                "src": "onlineicon.png",
                "top": "0%",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventTypeSS = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventTypeSS",
                "isVisible": true,
                "left": "3%",
                "skin": "sknlbl3f51b5100",
                "text": "Online",
                "textStyle": {},
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flexEventTypeSS.add(imageTypeIconSS, lblEventTypeSS);
            flexEventshortdetailMainSS.add(lblEventTitleSS, flexEventCategorySS, flexEventTypeSS);
            flexEventShortDetailsSS.add(flexDateAndTimeSS, btnVerticalStripSS, flexEventshortdetailMainSS);
            var lblShadowSS = new kony.ui.Label({
                "bottom": "0%",
                "height": "4px",
                "id": "lblShadowSS",
                "isVisible": true,
                "left": "0%",
                "skin": "sknlblshadow949494OP10",
                "text": "Label",
                "textStyle": {},
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flexEventSS.add(flexEventBannerRoundedSS, flexEventShortDetailsSS, lblShadowSS);
            this.add(flxRoot, flexEventSS);
        };
        return [{
            "addWidgets": addWidgetsfrmEventDetails,
            "enableScrolling": true,
            "enabledForIdleTimeout": false,
            "id": "frmEventDetails",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_g3e541c7a3fa403592d6d2969f0ced88,
            "skin": "sknFrmBGGradient"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "inTransitionConfig": {
                "formTransition": "none"
            },
            "retainScrollPosition": false
        }]
    }
});