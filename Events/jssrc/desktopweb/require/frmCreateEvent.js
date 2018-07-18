define("frmCreateEvent", function() {
    return function(controller) {
        function addWidgetsfrmCreateEvent() {
            this.setDefaultUnit(kony.flex.DP);
            var flexScrollEvent = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "77%",
                "horizontalScrollIndicator": true,
                "id": "flexScrollEvent",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17.50%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "23%",
                "verticalScrollIndicator": true,
                "width": "82.50%",
                "zIndex": 1
            }, {}, {});
            flexScrollEvent.setDefaultUnit(kony.flex.DP);
            var flexEventLeftSide = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "170%",
                "id": "flexEventLeftSide",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "1%",
                "width": "48%",
                "zIndex": 1
            }, {}, {});
            flexEventLeftSide.setDefaultUnit(kony.flex.DP);
            var flexBasicInfoTitl = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "4%",
                "id": "flexBasicInfoTitl",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "slFbox",
                "top": "1%",
                "width": "90%",
                "zIndex": 2
            }, {}, {});
            flexBasicInfoTitl.setDefaultUnit(kony.flex.DP);
            var lblBasicInfo = new kony.ui.Label({
                "height": "90%",
                "id": "lblBasicInfo",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0b372d409de4b4d",
                "text": "Basic Information about the event",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUnderLinw = new kony.ui.Label({
                "centerX": "50%",
                "height": "3%",
                "id": "lblUnderLinw",
                "isVisible": true,
                "skin": "sknheaderlblLine",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexBasicInfoTitl.add(lblBasicInfo, lblUnderLinw);
            var txtEventName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "skntxtnormal",
                "height": "5%",
                "id": "txtEventName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "onTextChange": controller.AS_TextField_g2660a93a12c4cec88fd22d34bb3ff91,
                "placeholder": "Enter Your Event Name",
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
            var listCategory = new kony.ui.ListBox({
                "centerX": "50%",
                "focusSkin": "CopydefListBoxNormal0d92e6379d94e43",
                "height": "5%",
                "id": "listCategory",
                "isVisible": true,
                "left": "0%",
                "masterData": [
                    ["1", "Training"],
                    ["2", "Workshops"],
                    ["3", "Hackathon"],
                    ["4", "Speaker Series"],
                    ["5", "Conference"]
                ],
                "skin": "CopydefListBoxNormal0d92e6379d94e43",
                "top": "14%",
                "width": "90%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var txtShort = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "CopydefTextAreaNormal0a37ae04b1e1246",
                "height": "6%",
                "id": "txtShort",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "8dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Short Description about the Event",
                "skin": "CopydefTextAreaNormal0a37ae04b1e1246",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "22%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [3, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var txtEventLDesc = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "CopydefTextAreaNormal0a37ae04b1e1246",
                "height": "11%",
                "id": "txtEventLDesc",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "8dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Long Description about the Event",
                "skin": "CopydefTextAreaNormal0a37ae04b1e1246",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "31%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [3, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var flexDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flexDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "skin": "slFbox",
                "top": "45%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexDate.setDefaultUnit(kony.flex.DP);
            var flexEventStartDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexEventStartDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flexEventStartDate.setDefaultUnit(kony.flex.DP);
            var lblStartDate = new kony.ui.Label({
                "height": "35%",
                "id": "lblStartDate",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0haee3806c4cd44",
                "text": "Start Date",
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexEventSelectDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flexEventSelectDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexEventSelectDate.setDefaultUnit(kony.flex.DP);
            var calEventStartDate = new kony.ui.Calendar({
                "calendarIcon": "calender.png",
                "centerY": "50%",
                "dateFormat": "yyyy/MM/dd",
                "height": "100%",
                "id": "calEventStartDate",
                "isVisible": true,
                "left": "0%",
                "onSelection": controller.AS_Calendar_b912a1a0a27a49858faf11595caa1fbe,
                "placeholder": "Select Date",
                "skin": "skncalNormal",
                "top": "0%",
                "viewConfig": {
                    "gridConfig": {
                        "gridCellInactiveDaysSkin": "calskininactive",
                        "gridCellSkin": "calskincell"
                    }
                },
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "98%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "noOfMonths": 1
            });
            flexEventSelectDate.add(calEventStartDate);
            flexEventStartDate.add(lblStartDate, flexEventSelectDate);
            var flexEventStartTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexEventStartTime",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flexEventStartTime.setDefaultUnit(kony.flex.DP);
            var lblEventStartTime = new kony.ui.Label({
                "height": "35%",
                "id": "lblEventStartTime",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0haee3806c4cd44",
                "text": "Start Time",
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexEventSelectStartTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flexEventSelectStartTime",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexEventSelectStartTime.setDefaultUnit(kony.flex.DP);
            var txtEventStartTime = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtEventStartTime",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "placeholder": "Start Time",
                "secureTextEntry": false,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0%",
                "width": "98%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flexEventSelectStartTime.add(txtEventStartTime);
            flexEventStartTime.add(lblEventStartTime, flexEventSelectStartTime);
            flexDate.add(flexEventStartDate, flexEventStartTime);
            var CopyflexDate0f477e9bc156043 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "CopyflexDate0f477e9bc156043",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "skin": "slFbox",
                "top": "55%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            CopyflexDate0f477e9bc156043.setDefaultUnit(kony.flex.DP);
            var flexEventEndDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexEventEndDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flexEventEndDate.setDefaultUnit(kony.flex.DP);
            var lblEventDate = new kony.ui.Label({
                "height": "35%",
                "id": "lblEventDate",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0haee3806c4cd44",
                "text": "End Date",
                "top": "10.00%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexEventSelectEndDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flexEventSelectEndDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexEventSelectEndDate.setDefaultUnit(kony.flex.DP);
            var calEventEndDate = new kony.ui.Calendar({
                "calendarIcon": "calender.png",
                "centerY": "50%",
                "dateFormat": "yyyy/MM/dd",
                "height": "100%",
                "id": "calEventEndDate",
                "isVisible": true,
                "left": "0%",
                "onSelection": controller.AS_Calendar_b88938f706094e028817c3de538eb873,
                "placeholder": "Select Date",
                "skin": "skncalNormal",
                "top": "0%",
                "viewConfig": {
                    "gridConfig": {
                        "gridCellInactiveDaysSkin": "calskininactive"
                    }
                },
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "98%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "noOfMonths": 1
            });
            flexEventSelectEndDate.add(calEventEndDate);
            flexEventEndDate.add(lblEventDate, flexEventSelectEndDate);
            var flexEventEndTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexEventEndTime",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flexEventEndTime.setDefaultUnit(kony.flex.DP);
            var lblEventEndTime = new kony.ui.Label({
                "height": "35%",
                "id": "lblEventEndTime",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0haee3806c4cd44",
                "text": "End Time",
                "top": "10.00%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexEventSelectEndTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flexEventSelectEndTime",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexEventSelectEndTime.setDefaultUnit(kony.flex.DP);
            var txtEventEndTime = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtEventEndTime",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "placeholder": "End Time",
                "secureTextEntry": false,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0%",
                "width": "98%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flexEventSelectEndTime.add(txtEventEndTime);
            flexEventEndTime.add(lblEventEndTime, flexEventSelectEndTime);
            CopyflexDate0f477e9bc156043.add(flexEventEndDate, flexEventEndTime);
            var flexBannerUploadTitl = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "4%",
                "id": "flexBannerUploadTitl",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "slFbox",
                "top": "67%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexBannerUploadTitl.setDefaultUnit(kony.flex.DP);
            var lblUploadBannerImage = new kony.ui.Label({
                "height": "90%",
                "id": "lblUploadBannerImage",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0b372d409de4b4d",
                "text": "Upload Banner Image",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUnderLine2 = new kony.ui.Label({
                "centerX": "50%",
                "height": "3%",
                "id": "lblUnderLine2",
                "isVisible": true,
                "left": "78dp",
                "skin": "sknheaderlblLine",
                "top": "4%",
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexBannerUploadTitl.add(lblUploadBannerImage, lblUnderLine2);
            var flexUploadBannerImageValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flexUploadBannerImageValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "skin": "slFbox",
                "top": "72%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexUploadBannerImageValue.setDefaultUnit(kony.flex.DP);
            var flexUploadBannerImageMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "35%",
                "id": "flexUploadBannerImageMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "CopyslFbox0bee0a5a4002e45",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexUploadBannerImageMain.setDefaultUnit(kony.flex.DP);
            var lblBrowseFiles = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblBrowseFiles",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0cceaebdc7e4741",
                "text": "Browse your files",
                "top": "0dp",
                "width": "72%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblVerticalStrip = new kony.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblVerticalStrip",
                "isVisible": true,
                "left": "0%",
                "skin": "sknheaderlblLine",
                "top": "0%",
                "width": "0.20%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var BtnBrowseBanner = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0ee3a1bccc2cb4e",
                "height": "100%",
                "id": "BtnBrowseBanner",
                "isVisible": true,
                "left": "0.00%",
                "onClick": controller.AS_Button_ee855eb1bfac40bb89630fc2e862aca4,
                "skin": "CopydefBtnNormal0ee3a1bccc2cb4e",
                "text": "Browse",
                "top": "0.00%",
                "width": "27.67%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexUploadBannerImageMain.add(lblBrowseFiles, lblVerticalStrip, BtnBrowseBanner);
            var lblImageTypes = new kony.ui.Label({
                "height": "30%",
                "id": "lblImageTypes",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0e5745cea196845",
                "text": "(SVG,JPG,PNG)",
                "top": "43%",
                "width": "36.09%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUploadSuccess = new kony.ui.Label({
                "height": "0%",
                "id": "lblUploadSuccess",
                "isVisible": true,
                "left": "63.46%",
                "skin": "CopydefLabel0ac074c88061f4a",
                "text": "Upload Successful",
                "top": "44.96%",
                "width": "36.09%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
                "padding": [2, 2, 0, 0],
                "paddingInPixel": false
            }, {});
            flexUploadBannerImageValue.add(flexUploadBannerImageMain, lblImageTypes, lblUploadSuccess);
            var startTime = new com.konyenb.TimePicker({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "startTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0ad3fd5034e684a",
                "top": "49.50%",
                "width": "30%",
                "zIndex": 5
            }, {}, {});
            startTime.timeInterval = "30 Minutes";
            startTime.onSelection = controller.AS_UWI_bd773e53e62d41508bbab68423560c48;
            var EndTime = new com.konyenb.TimePicker({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "EndTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0ad3fd5034e684a",
                "top": "59.50%",
                "width": "30%",
                "zIndex": 2
            }, {}, {});
            EndTime.timeInterval = "30 Minutes";
            EndTime.onSelection = controller.AS_UWI_b9a9cf35793a4e5d804af982997541a0;
            flexEventLeftSide.add(flexBasicInfoTitl, txtEventName, listCategory, txtShort, txtEventLDesc, flexDate, CopyflexDate0f477e9bc156043, flexBannerUploadTitl, flexUploadBannerImageValue, startTime, EndTime);
            var lblEventVerticalStrip = new kony.ui.Label({
                "height": "155%",
                "id": "lblEventVerticalStrip",
                "isVisible": true,
                "left": "48%",
                "skin": "sknheaderlblLine",
                "top": "10%",
                "width": "0.20%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexEventRight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "170%",
                "id": "flexEventRight",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "48.20%",
                "skin": "slFbox",
                "top": "1%",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flexEventRight.setDefaultUnit(kony.flex.DP);
            var flexUploadGallerTit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4%",
                "id": "flexUploadGallerTit",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "skin": "slFbox",
                "top": "1%",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flexUploadGallerTit.setDefaultUnit(kony.flex.DP);
            var lblUploadGalleryTitle = new kony.ui.Label({
                "height": "90%",
                "id": "lblUploadGalleryTitle",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0b372d409de4b4d",
                "text": "Upload Gallery Images",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUnderlineUGallery = new kony.ui.Label({
                "centerX": "50%",
                "height": "3%",
                "id": "lblUnderlineUGallery",
                "isVisible": true,
                "left": "78dp",
                "skin": "sknheaderlblLine",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexUploadGallerTit.add(lblUploadGalleryTitle, lblUnderlineUGallery);
            var flexUploadGalleryVAlue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11%",
                "id": "flexUploadGalleryVAlue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "skin": "slFbox",
                "top": "2%",
                "width": "95%",
                "zIndex": 2
            }, {}, {});
            flexUploadGalleryVAlue.setDefaultUnit(kony.flex.DP);
            var flexGalleryBrowseMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45%",
                "id": "flexGalleryBrowseMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "skin": "CopyslFbox0bee0a5a4002e45",
                "top": "0%",
                "width": "99%",
                "zIndex": 1
            }, {}, {});
            flexGalleryBrowseMain.setDefaultUnit(kony.flex.DP);
            var lblGalleryBrowse = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblGalleryBrowse",
                "isVisible": true,
                "left": "2%",
                "skin": "CopydefLabel0cceaebdc7e4741",
                "text": "Browse your files",
                "top": "0dp",
                "width": "70%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblGalleryVert = new kony.ui.Label({
                "centerY": "50%",
                "height": "90%",
                "id": "lblGalleryVert",
                "isVisible": true,
                "left": "1%",
                "skin": "sknheaderlblLine",
                "top": "0%",
                "width": "0.20%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnGalleryBrowse = new kony.ui.Button({
                "height": "100%",
                "id": "btnGalleryBrowse",
                "isVisible": true,
                "left": "1%",
                "onClick": controller.AS_Button_ja47e977765147fb9ad3b67d62c6fd6e,
                "skin": "CopydefBtnNormal0ee3a1bccc2cb4e",
                "text": "Browse",
                "top": "0%",
                "width": "25%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexGalleryBrowseMain.add(lblGalleryBrowse, lblGalleryVert, btnGalleryBrowse);
            var lblGalleryFileTypes = new kony.ui.Label({
                "height": "30%",
                "id": "lblGalleryFileTypes",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0e5745cea196845",
                "text": "(SVG,JPG,PNG)",
                "top": "45%",
                "width": "36.09%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblGallerySuccess = new kony.ui.Label({
                "height": "0%",
                "id": "lblGallerySuccess",
                "isVisible": true,
                "left": "63.46%",
                "skin": "CopydefLabel0ac074c88061f4a",
                "text": "Upload Successful",
                "top": "46%",
                "width": "36.09%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
                "padding": [2, 2, 0, 0],
                "paddingInPixel": false
            }, {});
            flexUploadGalleryVAlue.add(flexGalleryBrowseMain, lblGalleryFileTypes, lblGallerySuccess);
            var segGallery = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "ImgDelBImage1": "",
                    "lblBImage1": ""
                }],
                "groupCells": false,
                "height": "12%",
                "id": "segGallery",
                "isVisible": true,
                "left": "5.50%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot_2.png",
                "pageOnDotImage": "pageondot_2.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0ffe7b737e8d547",
                "rowTemplate": "Flex0fc1bf48b31084b",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f2f1f100",
                "separatorRequired": true,
                "separatorThickness": 9,
                "showScrollbars": false,
                "top": "-2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Flex0fc1bf48b31084b": "Flex0fc1bf48b31084b",
                    "ImgDelBImage1": "ImgDelBImage1",
                    "flexBImage1": "flexBImage1",
                    "flexDelBImage1": "flexDelBImage1",
                    "lblBImage1": "lblBImage1"
                },
                "width": "95%",
                "zIndex": 2
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexLocationAndVenuTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4.99%",
                "id": "flexLocationAndVenuTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "skin": "slFbox",
                "top": "0%",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flexLocationAndVenuTitle.setDefaultUnit(kony.flex.DP);
            var lblLocationAndVenueTitle = new kony.ui.Label({
                "height": "90%",
                "id": "lblLocationAndVenueTitle",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0b372d409de4b4d",
                "text": "Location and Venue",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUnderLineLocAndVanue = new kony.ui.Label({
                "centerX": "50%",
                "height": "3%",
                "id": "lblUnderLineLocAndVanue",
                "isVisible": true,
                "left": "78dp",
                "skin": "sknheaderlblLine",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLocationAndVenuTitle.add(lblLocationAndVenueTitle, lblUnderLineLocAndVanue);
            var radioLocation = new kony.ui.RadioButtonGroup({
                "height": "4.73%",
                "id": "radioLocation",
                "isVisible": true,
                "left": "5%",
                "masterData": [
                    ["1", "Online"],
                    ["2", "Event Location / Place"]
                ],
                "onSelection": controller.AS_RadioButtonGroup_d6fd537ea76247909e69c82c1b8b55a5,
                "selectedKey": "2",
                "selectedKeyValue": ["2", "Event Location / Place"],
                "skin": "CopyslRadioButtonGroup0ifcdb599fe5a47",
                "top": "3dp",
                "width": "86.94%",
                "zIndex": 2
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 2, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexEventAddressInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56.20%",
                "id": "flexEventAddressInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "skin": "slFbox",
                "top": "20dp",
                "width": "95%",
                "zIndex": 2
            }, {}, {});
            flexEventAddressInfo.setDefaultUnit(kony.flex.DP);
            var txtAddressLine1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntxtnormal",
                "height": "10%",
                "id": "txtAddressLine1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "onTextChange": controller.AS_TextField_b1849fabce504a169c32fd4f6fce4b94,
                "placeholder": "AddressLine 1",
                "secureTextEntry": false,
                "skin": "skntxtnormal",
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
            var txtAddressLine2 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntxtnormal",
                "height": "10%",
                "id": "txtAddressLine2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "onTextChange": controller.AS_TextField_c2b36ba348ad4c758835e85a9efae61d,
                "placeholder": "Address Line 2",
                "secureTextEntry": false,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "3%",
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
            var txtCity = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "skntxtnormal",
                "height": "10%",
                "id": "txtCity",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "onDone": controller.AS_TextField_g24adfb38c3b4206b61e623185ae6ca1,
                "placeholder": "City",
                "secureTextEntry": false,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "3%",
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
            var lblGoogleMapPreview = new kony.ui.Label({
                "height": "8%",
                "id": "lblGoogleMapPreview",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0cceaebdc7e4741",
                "text": "Google Map Preview",
                "top": "1%",
                "width": "70%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainer0e2eaae99897443 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "57%",
                "id": "FlexContainer0e2eaae99897443",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0af461fdac55b40",
                "top": "0dp",
                "width": "95.10%",
                "zIndex": 2
            }, {}, {});
            FlexContainer0e2eaae99897443.setDefaultUnit(kony.flex.DP);
            var mapGoogleMap = new kony.ui.Map({
                "calloutWidth": 80,
                "defaultPinImage": "pinb_1.png",
                "height": "100%",
                "id": "mapGoogleMap",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Map_dc29fc7eec7d4303adf9fbc8adfe586d,
                "provider": constants.MAP_PROVIDER_GOOGLE,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            var flexHover = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexHover",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_d5bbb647492d4bc6a5468f85eccfbc1f,
                "skin": "CopyslFbox0a1b3c60c4f9e40",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexHover.setDefaultUnit(kony.flex.DP);
            var Label0eebf4c4230814f = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20%",
                "id": "Label0eebf4c4230814f",
                "isVisible": true,
                "left": "169dp",
                "skin": "CopydefLabel0fe7ae5a34b8048",
                "text": "Click here to Preview",
                "top": "168dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHover.add(Label0eebf4c4230814f);
            FlexContainer0e2eaae99897443.add(mapGoogleMap, flexHover);
            flexEventAddressInfo.add(txtAddressLine1, txtAddressLine2, txtCity, lblGoogleMapPreview, FlexContainer0e2eaae99897443);
            var txtWebexDetails = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextAreaFocus",
                "height": "30%",
                "id": "txtWebexDetails",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "5%",
                "numberOfVisibleLines": 3,
                "placeholder": "Webex details",
                "skin": "CopydefTextAreaNormal0a37ae04b1e1246",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "2%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            flexEventRight.add(flexUploadGallerTit, flexUploadGalleryVAlue, segGallery, flexLocationAndVenuTitle, radioLocation, flexEventAddressInfo, txtWebexDetails);
            var flexActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flexActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "skin": "slFbox",
                "top": "164%",
                "width": "44%",
                "zIndex": 2
            }, {}, {});
            flexActions.setDefaultUnit(kony.flex.DP);
            var btnProceedToSession = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "height": "100%",
                "id": "btnProceedToSession",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_a77c9e4b46584c6a8031b138ae67ca28,
                "skin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "text": "PROCEED TO SESSION",
                "top": "0.00%",
                "width": "44%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexActions.add(btnProceedToSession);
            var flexCopyRight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flexCopyRight",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "172%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flexCopyRight.setDefaultUnit(kony.flex.DP);
            var Label0i622b0ec21994c = new kony.ui.Label({
                "centerX": "50%",
                "height": "100%",
                "id": "Label0i622b0ec21994c",
                "isVisible": true,
                "left": "315dp",
                "skin": "CopydefLabel0b65169b227aa40",
                "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
                "top": "24%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexCopyRight.add(Label0i622b0ec21994c);
            flexScrollEvent.add(flexEventLeftSide, lblEventVerticalStrip, flexEventRight, flexActions, flexCopyRight);
            var FlexScrollSession = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "79%",
                "horizontalScrollIndicator": true,
                "id": "FlexScrollSession",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17.50%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "21%",
                "verticalScrollIndicator": true,
                "width": "82.50%",
                "zIndex": 1
            }, {}, {});
            FlexScrollSession.setDefaultUnit(kony.flex.DP);
            var session1 = new com.konyenb.sessionTemp({
                "clipBounds": true,
                "height": "100%",
                "id": "session1",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            var Copysession0e89e7350f7224b = new com.konyenb.sessionTemp({
                "clipBounds": true,
                "height": "100%",
                "id": "Copysession0e89e7350f7224b",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "100%",
                "width": "100%"
            }, {}, {});
            var sessionFooter1 = new com.konyenb.SessionFooter({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "sessionFooter1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "100%",
                "width": "100%"
            }, {}, {});
            sessionFooter1.isDelVisible = true;
            sessionFooter1.btnAddOnclick = controller.AS_UWI_j1f3ad09834e4c508d7e2cf124c1fb8b;
            sessionFooter1.btnDelOnclick = controller.AS_UWI_db7f053bc18742f8bae85367f35e975f;
            var flexPublishEvent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flexPublishEvent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexPublishEvent.setDefaultUnit(kony.flex.DP);
            var btnPublish = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "height": "50%",
                "id": "btnPublish",
                "isVisible": true,
                "left": "2.50%",
                "onClick": controller.AS_Button_i7c4eab0efef4fb59e8ed052a20a797e,
                "skin": "CopydefBtnNormal0ed0a68b2c3ae44",
                "text": "PUBLISH EVENT",
                "top": "0.00%",
                "width": "20%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexPublishEvent.add(btnPublish);
            var btnAddNewSessionDefault = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0gafb081126cd49",
                "height": "5%",
                "id": "btnAddNewSessionDefault",
                "isVisible": true,
                "left": "2.50%",
                "skin": "CopydefBtnNormal0gafb081126cd49",
                "text": "Add New Session",
                "top": "2%",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexScrollSession.add(session1, Copysession0e89e7350f7224b, sessionFooter1, flexPublishEvent, btnAddNewSessionDefault);
            var boxfileupload = new com.konyenb.boxfileupload({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0%",
                "id": "boxfileupload",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "sknFlxFileUpload",
                "top": "0dp",
                "width": "0%"
            }, {}, {});
            boxfileupload.appUserID = "3424236194";
            boxfileupload.folderID = "47419362009";
            boxfileupload.onUploadSuccess = controller.AS_UWI_b2e48b82de6542e9a993c35d16740932;
            boxfileupload.onUploadFailure = controller.AS_UWI_b698b758da5246cca68a1611f293c6d7;
            boxfileupload.onImageSelection = controller.AS_UWI_i739fc8ec8a64b7da8fbb577507689c3;
            var boxUploadGallery = new com.konyenb.boxfileupload({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0%",
                "id": "boxUploadGallery",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "sknFlxFileUpload",
                "top": "10dp",
                "width": "0%"
            }, {}, {});
            boxUploadGallery.appUserID = "3424236194";
            boxUploadGallery.folderID = "47419362009";
            boxUploadGallery.onUploadSuccess = controller.AS_UWI_f9d79019ba8b4613a3aee9c0be3d2dae;
            boxUploadGallery.onUploadFailure = controller.AS_UWI_f44ee808c39341bd9d75d78f8530eab1;
            boxUploadGallery.onImageSelection = controller.AS_UWI_e238938f2b3649b9a073eff9bfac31c5;
            var menuItem = new com.konyenb.menuItem({
                "clipBounds": true,
                "height": "100%",
                "id": "menuItem",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "17.50%"
            }, {}, {});
            menuItem.onAllEventClick = controller.AS_UWI_f469ac9b9a024db796e076520c5a25cb;
            menuItem.onManageUserClick = controller.AS_UWI_j20ebb89b6e14c99b335e65b22dbc12f;
            var dashboard = new com.konyenb.dashboard({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "dashboard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17.50%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopysknFlxEventWhite0caa649ffd3e440",
                "top": "0dp",
                "width": "82.50%"
            }, {}, {});
            dashboard.iconVisibility = false;
            var EventsHeader = new com.konyenb.EventsHeader({
                "clipBounds": true,
                "height": "11.10%",
                "id": "EventsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17.50%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "10%",
                "width": "82.50%"
            }, {}, {});
            EventsHeader.FlexContainer0b6eb885d5c014c.right = "-2.10%";
            EventsHeader.LblTitle.left = "2.50%";
            EventsHeader.btnSessions.onClick = controller.AS_Button_ab525dabde4e4a9f84f28a47cfaa9de4;
            EventsHeader.flexBasic.top = "0%";
            EventsHeader.flexHeader.width = "98%";
            EventsHeader.flxSessions.top = "0%";
            EventsHeader.flxSessions.width = "35%";
            EventsHeader.lblUnderLineEventMain.top = "85%";
            EventsHeader.lblUnderLineEventMain.width = "95%";
            this.add(flexScrollEvent, FlexScrollSession, boxfileupload, boxUploadGallery, menuItem, dashboard, EventsHeader);
        };
        return [{
            "addWidgets": addWidgetsfrmCreateEvent,
            "enabledForIdleTimeout": true,
            "id": "frmCreateEvent",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ca376d275d4044acb27f9df6b4bc063b,
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