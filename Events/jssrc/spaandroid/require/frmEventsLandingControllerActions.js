define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSearchIcon **/
    AS_Button_ec074ba44ec945cda2e3614eb70be807: function AS_Button_ec074ba44ec945cda2e3614eb70be807(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSearch");
        ntf.navigate();
    },
    /** onClick defined for flexSearch **/
    AS_FlexContainer_b6a574086b094fc4a29f2b590c94e174: function AS_FlexContainer_b6a574086b094fc4a29f2b590c94e174(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSearch");
        ntf.navigate();
    },
    /** onClick defined for btnHamburger **/
    AS_Button_b39de52ebe92497694847007cb32fb7c: function AS_Button_b39de52ebe92497694847007cb32fb7c(eventobject) {
        var self = this;
        this.listMenuClick();
    },
    /** onClick defined for flexHamburger **/
    AS_FlexContainer_i287c93385dc4ed89ebd0efef9e5bc92: function AS_FlexContainer_i287c93385dc4ed89ebd0efef9e5bc92(eventobject) {
        var self = this;
        this.listMenuClick();
    },
    /** onRowClick defined for segEventList **/
    AS_Segment_e830efe839f74c9da915e9007dfe130e: function AS_Segment_e830efe839f74c9da915e9007dfe130e(eventobject, sectionNumber, rowNumber) {
        var self = this;
        // this.onSegRowClick();
        var event_id = this.view.segEventList.selectedItems[0].event_id;
        this.getEventImages(this.onSegRowClick, event_id);
    },
    /** onPull defined for segEventList **/
    AS_Segment_ab181210353b42aa8c165aeb158ed0ec: function AS_Segment_ab181210353b42aa8c165aeb158ed0ec(eventobject) {
        var self = this;
        this.reloadFromServer();
    },
    /** onClick defined for btnExpMore **/
    AS_Button_j7106d7987854dba8a0d5d50a73eb7c0: function AS_Button_j7106d7987854dba8a0d5d50a73eb7c0(eventobject) {
        var self = this;
        self.getUserAndEventData.call(this);
        this.view.flexEventRegConformation.isVisible = false;
    },
    /** onTouchStart defined for flxSkeleton **/
    AS_FlexContainer_cdb729793086435a98f028a71be9562b: function AS_FlexContainer_cdb729793086435a98f028a71be9562b(eventobject, x, y) {
        var self = this;
    },
    /** onTouchStart defined for flxSkeleton2 **/
    AS_FlexContainer_ad344af442d74a9ea8404b7d240f7a0c: function AS_FlexContainer_ad344af442d74a9ea8404b7d240f7a0c(eventobject, x, y) {
        var self = this;
    },
    /** onApplyButtonClick defined for hamburger **/
    AS_UWI_a6c0992d6f9a40e2b6ec471e63bff4b3: function AS_UWI_a6c0992d6f9a40e2b6ec471e63bff4b3(eventobject) {
        var self = this;
        //this.logIn();
        this.onClickLogin();
    },
    /** onLogoutClick defined for hamburger **/
    AS_UWI_g7ed6ffcd58b4a23a46e9ff739847f89: function AS_UWI_g7ed6ffcd58b4a23a46e9ff739847f89(eventobject) {
        var self = this;
        this.onLogout();
    },
    /** onClick defined for flxCover **/
    AS_FlexContainer_g3cf32200e0e4f7f8df42fafbff6cef0: function AS_FlexContainer_g3cf32200e0e4f7f8df42fafbff6cef0(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    /** onClick defined for flxShadow **/
    AS_FlexContainer_c8a1b6f1e3b24ef3980f79806729f9a2: function AS_FlexContainer_c8a1b6f1e3b24ef3980f79806729f9a2(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    /** onDownloadComplete defined for imageBannerSS **/
    AS_Image_bb62642c99cc4e90b241d694efaece22: function AS_Image_bb62642c99cc4e90b241d694efaece22(eventobject, imagesrc, issuccess) {
        var self = this;
        this.sendSnapshot();
    },
    /** postShow defined for frmEventsLanding **/
    AS_Form_jb7bf8cc66fe417e98b1afc97f19676f: function AS_Form_jb7bf8cc66fe417e98b1afc97f19676f(eventobject) {
        var self = this;
        //this.flxCoverOnClick();
        this.skeletonScreenAnimation();
        this.logoutVisiblity();
        registerKMS();
        //createLocalNotification();
    }
});