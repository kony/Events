define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSearchIcon **/
    AS_Button_de524194f00c4fc9ab3275b7e77c1cd4: function AS_Button_de524194f00c4fc9ab3275b7e77c1cd4(eventobject) {
        var self = this;
        this.navigateAndSearch();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_fd26169aa27a4ee4a8aae7a4d9b1800b: function AS_FlexContainer_fd26169aa27a4ee4a8aae7a4d9b1800b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEventsLanding");
        ntf.navigate({
            "origin": "searchback"
        });
    },
    /** onTextChange defined for txtSearch **/
    AS_TextField_f32a139024244acabf5ab1bcd58134d5: function AS_TextField_f32a139024244acabf5ab1bcd58134d5(eventobject, changedtext) {
        var self = this;
        this.searchByEventName(this.view.txtSearch.text);
    },
    /** onClick defined for btnCross **/
    AS_Button_dd3f28cf76c144eebe912d9b12af17a7: function AS_Button_dd3f28cf76c144eebe912d9b12af17a7(eventobject) {
        var self = this;
        this.clearTextBox();
    },
    /** onRowClick defined for segSearchResult **/
    AS_Segment_f95f8e10bc5b4b9ba646159507c5da98: function AS_Segment_f95f8e10bc5b4b9ba646159507c5da98(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSuggestionRowClick();
    },
    /** onClick defined for btnSelectAll **/
    AS_Button_e2feddb2a7a34c22adf7de57fdd45847: function AS_Button_e2feddb2a7a34c22adf7de57fdd45847(eventobject) {
        var self = this;
        this.onClickSelectAll();
    },
    /** onClick defined for btnCat1 **/
    AS_Button_b5b57559c795471dbb24ae4dd3d91e8f: function AS_Button_b5b57559c795471dbb24ae4dd3d91e8f(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    },
    /** onClick defined for btnCat2 **/
    AS_Button_e7dc413536d94fe4bc7d93be9a5ac2f1: function AS_Button_e7dc413536d94fe4bc7d93be9a5ac2f1(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    },
    /** onClick defined for btnCat3 **/
    AS_Button_aaf4f68b9c604677b1b53086b17ba2e0: function AS_Button_aaf4f68b9c604677b1b53086b17ba2e0(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    },
    /** onClick defined for btnCat4 **/
    AS_Button_jb6ce2013ee94d2592a91811dda72fbb: function AS_Button_jb6ce2013ee94d2592a91811dda72fbb(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    },
    /** onClick defined for btnCat5 **/
    AS_Button_aab5812f1d794254bc93391b2366e9a3: function AS_Button_aab5812f1d794254bc93391b2366e9a3(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    }
});