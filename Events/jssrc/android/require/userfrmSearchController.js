define({
    /**
     * @function searchByEventName
     * @description function to search the event by name.
     * @private
     * @param {string} srchText
     */
    searchByEventName: function(srchText) {
        var suggestions = [];
        if (srchText !== "") {
            suggestions = typeAhead(srchText.toLowerCase());
        }
        var dataToSet = [];
        if (suggestions.length > 0) {
            for (var i = 0; i < suggestions.length; i++) {
                var data = {};
                if (suggestions.length == 1 || i == suggestions.length - 1) {
                    data.dummy = {
                        "isVisible": true,
                        "text": "Dummy",
                        "skin": "lblskndummytransparent"
                    };
                } else {
                    data.dummy = {
                        "isVisible": true,
                        "text": "Dummy",
                        "skin": "sknlblDivf2f2f1"
                    };
                }
                data.text = suggestions[i];
                dataToSet.push(data);
            }
            this.setSuggestedData(dataToSet);
        } else {
            this.view.segSearchResult.isVisible = false;
        }
    },
    /**
     * @function setSuggestedData
     * @description function to populate the search result to the segment.
     * @private
     * @param {string} srchText
     */
    setSuggestedData: function(data) {
        this.view.segSearchResult.removeAll();
        this.view.segSearchResult.widgetDataMap = {
            "lblResult": "text",
            "lblHorDivider": "dummy"
        };
        this.view.segSearchResult.setData(data);
        this.view.segSearchResult.isVisible = true;
    },
    selectedCatagories: ["training", "workshops", "hackathon", "speaker series", "conference"],
    /**
     * @function getSelectedCatagories
     * @description function to populate the selected category to the form widget.
     * @private
     * @param {string} skin
     * @param {string} text
     * @param {string} id
     */
    getSelectedCatagories: function(skin, text, id) {
        if (skin === "sknCategorySel") {
            this.view[id].skin = "btnSknCategoryNor";
            this.view[id].focusSkin = "btnSknCategoryNor";
            this.selectedCatagories = this.selectedCatagories.filter(function(e) {
                return e !== text.toLowerCase();
            });
        } else if (skin === "btnSknCategoryNor") {
            this.view[id].skin = "sknCategorySel";
            this.view[id].focusSkin = "sknCategorySel";
            this.selectedCatagories.push(text.toLowerCase());
        }
        if (this.selectedCatagories.length < 5) {
            this.view.btnSelectAll.isVisible = true;
        } else {
            this.view.btnSelectAll.isVisible = false;
        }
    },
    /**
     * @function onClickSelectAll
     * @description function to select all event category.
     * @private
     */
    onClickSelectAll: function() {
        var catagories = ["training", "workshops", "hackathon", "speaker series", "conference"];
        for (var i = 0; i < catagories.length; i++) {
            this.view["btnCat" + (i + 1)].skin = "sknCategorySel";
            this.view["btnCat" + (i + 1)].focusSkin = "sknCategorySel";
        }
        this.selectedCatagories = catagories;
        this.view.btnSelectAll.isVisible = false;
    },
    /**
     * @function navigateAndSearch
     * @description function to navigate to frmEventsLanding with the searched data
     * @private
     */
    navigateAndSearch: function() {
        var searchData = {};
        searchData.searchText = this.view.txtSearch.text;
        searchData.selectedCat = this.selectedCatagories;
        searchData.origin = "search";
        var navToEventLanding = new kony.mvc.Navigation("frmEventsLanding");
        navToEventLanding.navigate(searchData);
    },
    /**
     * @function onSuggestionRowClick
     * @description function to select the suggested item
     * @private
     */
    onSuggestionRowClick: function() {
        var suggestedItem = this.view.segSearchResult.selectedRowItems[0];
        this.view.txtSearch.text = suggestedItem.text;
        this.view.segSearchResult.isVisible = false;
    }
});