define(function() {
    return function(controller) {
        var event = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "340dp",
            "id": "event",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknFlxEventRoot",
            "top": "0dp",
            "width": "310dp"
        }, {}, {});
        event.setDefaultUnit(kony.flex.DP);
        var flxBannerContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "120dp",
            "id": "flxBannerContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBannerContainer.setDefaultUnit(kony.flex.DP);
        var imgEventLogo = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgEventLogo",
            "isVisible": true,
            "skin": "slImage",
            "src": "event01_2.jpg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBannerContainer.add(imgEventLogo);
        var flxEventDesc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "220dp",
            "id": "flxEventDesc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "skin": "slFbox",
            "top": "0dp",
            "width": "94%",
            "zIndex": 1
        }, {}, {});
        flxEventDesc.setDefaultUnit(kony.flex.DP);
        var lblEventTitle = new kony.ui.Label({
            "height": "30dp",
            "id": "lblEventTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknLblEventDescTitle",
            "text": "Webinar Event Upgrade",
            "top": "9dp",
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
        var lblSeparator1 = new kony.ui.Label({
            "height": "1px",
            "id": "lblSeparator1",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknLblEventDescSeparator",
            "top": "2dp",
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
        var flxCategory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "28dp",
            "id": "flxCategory",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCategory.setDefaultUnit(kony.flex.DP);
        var lblCategoryTitle = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCategoryTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblEventDescItem",
            "text": "Category",
            "width": "21%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblHyphen = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblHyphen",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCharcolGrey",
            "text": " - ",
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
        var lblEventDescCategoryText = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescCategoryText",
            "isVisible": true,
            "left": "4dp",
            "skin": "CopysknLblEventDescCategoryText",
            "text": "Conference",
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxCategory.add(lblCategoryTitle, lblHyphen, lblEventDescCategoryText);
        var flxEventDescDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "28dp",
            "id": "flxEventDescDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxEventDescDate.setDefaultUnit(kony.flex.DP);
        var lblEventDescDateTitle = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescDateTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblEventDescItem",
            "text": "Date",
            "width": "21%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblHyphen2 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHyphen2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCharcolGrey",
            "text": " - ",
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
        var lblEventDescDateText = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescDateText",
            "isVisible": true,
            "left": "4dp",
            "skin": "CopysknLblEventDescCategoryText",
            "text": "14 Mar - 15 Mar, 2018",
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxEventDescDate.add(lblEventDescDateTitle, lblHyphen2, lblEventDescDateText);
        var flxEventDescLocation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "28dp",
            "id": "flxEventDescLocation",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxEventDescLocation.setDefaultUnit(kony.flex.DP);
        var lblEventDescLocation = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescLocation",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblEventDescItem",
            "text": "Location",
            "width": "21%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblHyphen3 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHyphen3",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCharcolGrey",
            "text": " - ",
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
        var lblEventDescLocationText = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescLocationText",
            "isVisible": true,
            "left": "4dp",
            "skin": "CopysknLblEventDescCategoryText",
            "text": "Convocation Center, Hyderabad",
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxEventDescLocation.add(lblEventDescLocation, lblHyphen3, lblEventDescLocationText);
        var flxScImageGallery = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "50dp",
            "horizontalScrollIndicator": true,
            "id": "flxScImageGallery",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
            "skin": "slFSbox",
            "top": "2dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxScImageGallery.setDefaultUnit(kony.flex.DP);
        var flxItem0 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxItem0",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopysknFlxEventRoot",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, {}, {});
        flxItem0.setDefaultUnit(kony.flex.DP);
        var img0 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img0",
            "isVisible": true,
            "skin": "slImage",
            "src": "event01_2.jpg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxItem0.add(img0);
        var flxItem1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxItem1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "skin": "CopysknFlxEventRoot",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, {}, {});
        flxItem1.setDefaultUnit(kony.flex.DP);
        var img1 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img1",
            "isVisible": true,
            "skin": "slImage",
            "src": "event01_2.jpg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxItem1.add(img1);
        flxScImageGallery.add(flxItem0, flxItem1);
        var lblSeparator2 = new kony.ui.Label({
            "height": "1px",
            "id": "lblSeparator2",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknLblEventDescSeparator",
            "top": "2dp",
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
        var flxEventEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "32dp",
            "id": "flxEventEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxEventEdit.setDefaultUnit(kony.flex.DP);
        var btnRemove = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "CopysknBtnEventDescRemove",
            "height": "100%",
            "id": "btnRemove",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_e873b0b9e6ee4f2e95d34b1fd1d69980,
            "skin": "CopysknBtnEventDescRemove",
            "text": "Remove",
            "width": "70dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnEdit = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "CopysknBtnEdit",
            "height": "100%",
            "id": "btnEdit",
            "isVisible": true,
            "onClick": controller.AS_Button_ae1ced44a04e45db98e67a006c9c9c2e,
            "right": "3dp",
            "skin": "CopysknBtnEdit",
            "text": "Edit",
            "top": "4dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEventEdit.add(btnRemove, btnEdit);
        flxEventDesc.add(lblEventTitle, lblSeparator1, flxCategory, flxEventDescDate, flxEventDescLocation, flxScImageGallery, lblSeparator2, flxEventEdit);
        event.add(flxBannerContainer, flxEventDesc);
        return event;
    }
})