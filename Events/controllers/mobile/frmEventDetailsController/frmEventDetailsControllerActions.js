define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxClose **/
    AS_FlexContainer_h19bae8ee8c5441697b4ceed80101951: function AS_FlexContainer_h19bae8ee8c5441697b4ceed80101951(eventobject) {
        var self = this;
        var params = {};
        if (this.fromPush !== undefined && this.fromPush) params.origin = "push";
        else params.origin = "details";
        var navObj = new kony.mvc.Navigation("frmEventsLanding");
        navObj.navigate(params);
    },
    /** onClick defined for flxShare **/
    AS_FlexContainer_c4fa74d19c8641f38c3de6c068262dba: function AS_FlexContainer_c4fa74d19c8641f38c3de6c068262dba(eventobject) {
        var self = this;
        this.shareEvent();
    },
    /** onClick defined for flxInfoItem0 **/
    AS_FlexContainer_de6b2f25b99640fe94ac9af2a5e48576: function AS_FlexContainer_de6b2f25b99640fe94ac9af2a5e48576(eventobject) {
        var self = this;
        this.navigateToFormSchedular();
    },
    /** onClick defined for flxInfoItem1 **/
    AS_FlexContainer_g8066e514fe2457883b0f980152d1046: function AS_FlexContainer_g8066e514fe2457883b0f980152d1046(eventobject) {
        var self = this;
        return self.ShowLocationOnMap.call(this);
    },
    /** onClick defined for flxInfoItem2 **/
    AS_FlexContainer_d860aa3040fb489da5970c4cf78490bc: function AS_FlexContainer_d860aa3040fb489da5970c4cf78490bc(eventobject) {
        var self = this;
        return self.showSpeakersProfile.call(this);
    },
    /** onClick defined for flxGalleryCompConatiner **/
    AS_FlexContainer_f48d65d8fa15469ab2781b47b1bffe6e: function AS_FlexContainer_f48d65d8fa15469ab2781b47b1bffe6e(eventobject) {
        var self = this;
        this.navigateToEventGallery();
    },
    /** onClick defined for btnRegister **/
    AS_Button_h3a6cfeb91544d68b12dd2e90eebd469: function AS_Button_h3a6cfeb91544d68b12dd2e90eebd469(eventobject) {
        var self = this;
        return self.login.call(this);
    },
    /** onDownloadComplete defined for imageBannerSS **/
    AS_Image_e7df0d8001944b98b3f1f479014c10b8: function AS_Image_e7df0d8001944b98b3f1f479014c10b8(eventobject, imagesrc, issuccess) {
        var self = this;
        this.sendSnapshot();
    },
    /** postShow defined for frmEventDetails **/
    AS_Form_g3e541c7a3fa403592d6d2969f0ced88: function AS_Form_g3e541c7a3fa403592d6d2969f0ced88(eventobject) {
        var self = this;
        if (this.event !== undefined && this.event.event_id !== undefined) {
            sendMetric(this.event.event_id, "view");
        }
    }
});