define("frmSearch", function() {
    return function(controller) {
        function addWidgetsfrmSearch() {
            this.setDefaultUnit(kony.flex.DP);
            var flexEventHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flexEventHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderGredient",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexEventHeader.setDefaultUnit(kony.flex.DP);
            var lblHeaderTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblHeaderTitle",
                "isVisible": true,
                "left": "154dp",
                "skin": "sknHeader00a0dd",
                "text": "SEARCH",
                "textStyle": {},
                "top": "15dp",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flexCloseIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexCloseIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "82.97%",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "17%",
                "zIndex": 1
            }, {}, {});
            flexCloseIcon.setDefaultUnit(kony.flex.DP);
            var btnSearchIcon = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknbtndone",
                "height": "100%",
                "id": "btnSearchIcon",
                "isVisible": true,
                "left": "14dp",
                "onClick": controller.AS_Button_de524194f00c4fc9ab3275b7e77c1cd4,
                "skin": "sknbtndone",
                "text": "Done",
                "top": "12dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexCloseIcon.add(btnSearchIcon);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_fd26169aa27a4ee4a8aae7a4d9b1800b,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgBack",
                "isVisible": true,
                "skin": "slImage",
                "src": "arrowpreviousscreen.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            flexEventHeader.add(lblHeaderTitle, flexCloseIcon, flxBack);
            var flexScrollSearchMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flexScrollSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "-0.03%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0hb6d056472c44f",
                "top": "8.00%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexScrollSearchMain.setDefaultUnit(kony.flex.DP);
            var flexSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "9%",
                "id": "flexSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "23dp",
                "skin": "CopyslFbox0f19e39ce35304c",
                "top": "5%",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flexSearch.setDefaultUnit(kony.flex.DP);
            var imgSearchIconActcive = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgSearchIconActcive",
                "isVisible": true,
                "left": "5%",
                "src": "search_blue.png",
                "top": "6dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblStrip = new kony.ui.Label({
                "centerY": "50%",
                "height": "40%",
                "id": "lblStrip",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0f734bc0caec042",
                "textStyle": {},
                "top": "20dp",
                "width": "2px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var txtSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.00%",
                "focusSkin": "CopydefTextBoxFocus0ed91cb18e37d4c",
                "height": "100%",
                "id": "txtSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "3.00%",
                "onTextChange": controller.AS_TextField_f32a139024244acabf5ab1bcd58134d5,
                "placeholder": "Event name..",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d904edf9311143",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "76.93%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            flexSearch.add(imgSearchIconActcive, lblStrip, txtSearch);
            var segSearchResult = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "lblHorDivider": "Label",
                    "lblResult": "Mobile "
                }],
                "groupCells": false,
                "id": "segSearchResult",
                "isVisible": false,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_f95f8e10bc5b4b9ba646159507c5da98,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0g95b203d0e4a44",
                "rowTemplate": "flexMainSearchTemp",
                "scrollingEvents": {},
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flexMainSearchTemp": "flexMainSearchTemp",
                    "lblHorDivider": "lblHorDivider",
                    "lblResult": "lblResult"
                },
                "widgetSkin": "Copyseg0cf8e2c2c0bf543",
                "width": "90%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexSearchCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "28.70%",
                "id": "flexSearchCategory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknflexPlainWhite",
                "top": "3.00%",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flexSearchCategory.setDefaultUnit(kony.flex.DP);
            var flexSearchCategoryHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "flexSearchCategoryHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexSearchCategoryHeader.setDefaultUnit(kony.flex.DP);
            var lblCategoryTitle = new kony.ui.Label({
                "id": "lblCategoryTitle",
                "isVisible": true,
                "left": "0.04%",
                "skin": "sknlblCategoryTitle",
                "text": "CATEGORIES",
                "textStyle": {},
                "top": "0.00%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var btnSelectAll = new kony.ui.Button({
                "focusSkin": "sknlblSelectAll",
                "height": "100%",
                "id": "btnSelectAll",
                "isVisible": false,
                "onClick": controller.AS_Button_e2feddb2a7a34c22adf7de57fdd45847,
                "right": "5%",
                "skin": "sknlblSelectAll",
                "text": "Select All",
                "top": "0%",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexSearchCategoryHeader.add(lblCategoryTitle, btnSelectAll);
            var flexCategories = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60.80%",
                "id": "flexCategories",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexCategories.setDefaultUnit(kony.flex.DP);
            var btnCat1 = new kony.ui.Button({
                "focusSkin": "sknCategorySel",
                "height": "33%",
                "id": "btnCat1",
                "isVisible": true,
                "left": "3.97%",
                "onClick": controller.AS_Button_b5b57559c795471dbb24ae4dd3d91e8f,
                "skin": "sknCategorySel",
                "text": "Training",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [6, 0, 6, 0],
                "paddingInPixel": false
            }, {});
            var btnCat2 = new kony.ui.Button({
                "focusSkin": "sknCategorySel",
                "height": "33%",
                "id": "btnCat2",
                "isVisible": true,
                "left": "32.83%",
                "onClick": controller.AS_Button_e7dc413536d94fe4bc7d93be9a5ac2f1,
                "skin": "sknCategorySel",
                "text": "Workshops",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [6, 0, 6, 0],
                "paddingInPixel": false
            }, {});
            var btnCat3 = new kony.ui.Button({
                "focusSkin": "sknCategorySel",
                "height": "33%",
                "id": "btnCat3",
                "isVisible": true,
                "left": "66.47%",
                "onClick": controller.AS_Button_aaf4f68b9c604677b1b53086b17ba2e0,
                "skin": "sknCategorySel",
                "text": "Hackathon",
                "top": "0.01%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [6, 0, 6, 0],
                "paddingInPixel": false
            }, {});
            var btnCat4 = new kony.ui.Button({
                "focusSkin": "sknCategorySel",
                "height": "33%",
                "id": "btnCat4",
                "isVisible": true,
                "left": "5.28%",
                "onClick": controller.AS_Button_jb6ce2013ee94d2592a91811dda72fbb,
                "skin": "sknCategorySel",
                "text": "Speaker Series",
                "top": "47.68%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [6, 0, 6, 0],
                "paddingInPixel": false
            }, {});
            var btnCat5 = new kony.ui.Button({
                "focusSkin": "sknCategorySel",
                "height": "33%",
                "id": "btnCat5",
                "isVisible": true,
                "left": "45.54%",
                "onClick": controller.AS_Button_aab5812f1d794254bc93391b2366e9a3,
                "skin": "sknCategorySel",
                "text": "Conference",
                "top": "47.60%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [6, 0, 6, 0],
                "paddingInPixel": false
            }, {});
            flexCategories.add(btnCat1, btnCat2, btnCat3, btnCat4, btnCat5);
            flexSearchCategory.add(flexSearchCategoryHeader, flexCategories);
            flexScrollSearchMain.add(flexSearch, segSearchResult, flexSearchCategory);
            this.add(flexEventHeader, flexScrollSearchMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSearch,
            "enabledForIdleTimeout": false,
            "id": "frmSearch",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBGGradient"
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