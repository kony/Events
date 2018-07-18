define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for txtEventName **/
    AS_TextField_g2660a93a12c4cec88fd22d34bb3ff91: function AS_TextField_g2660a93a12c4cec88fd22d34bb3ff91(eventobject, changedtext) {
        var self = this;
        this.view.EventsHeader.LblTitle.text = this.view.txtEventName.text;
    },
    /** onSelection defined for calEventStartDate **/
    AS_Calendar_b912a1a0a27a49858faf11595caa1fbe: function AS_Calendar_b912a1a0a27a49858faf11595caa1fbe(eventobject, isValidDateSelected) {
        var self = this;
        this.view.calEventEndDate.validStartDate = this.view.calEventStartDate.dateComponents;
        this.validateStartDate(this.view.calEventStartDate.formattedDate, this.view.calEventEndDate.formattedDate);
    },
    /** onSelection defined for calEventEndDate **/
    AS_Calendar_b88938f706094e028817c3de538eb873: function AS_Calendar_b88938f706094e028817c3de538eb873(eventobject, isValidDateSelected) {
        var self = this;
        this.validateEndDate(this.view.calEventStartDate.formattedDate, this.view.calEventEndDate.formattedDate);
    },
    /** onClick defined for BtnBrowseBanner **/
    AS_Button_ee855eb1bfac40bb89630fc2e862aca4: function AS_Button_ee855eb1bfac40bb89630fc2e862aca4(eventobject) {
        var self = this;
        this.view.boxfileupload.selectFile();
    },
    /** onSelection defined for startTime **/
    AS_UWI_bd773e53e62d41508bbab68423560c48: function AS_UWI_bd773e53e62d41508bbab68423560c48(currentTime, nextSlot) {
        var self = this;
        this.startTimeOnSelection();
    },
    /** onSelection defined for EndTime **/
    AS_UWI_b9a9cf35793a4e5d804af982997541a0: function AS_UWI_b9a9cf35793a4e5d804af982997541a0(currentTime, nextSlot) {
        var self = this;
        this.endTimeOnSelection();
    },
    /** onClick defined for btnGalleryBrowse **/
    AS_Button_ja47e977765147fb9ad3b67d62c6fd6e: function AS_Button_ja47e977765147fb9ad3b67d62c6fd6e(eventobject) {
        var self = this;
        this.view.boxUploadGallery.selectFile();
    },
    /** onSelection defined for radioLocation **/
    AS_RadioButtonGroup_d6fd537ea76247909e69c82c1b8b55a5: function AS_RadioButtonGroup_d6fd537ea76247909e69c82c1b8b55a5(eventobject) {
        var self = this;
        this.onSelectOfLocationType();
    },
    /** onTextChange defined for txtAddressLine1 **/
    AS_TextField_b1849fabce504a169c32fd4f6fce4b94: function AS_TextField_b1849fabce504a169c32fd4f6fce4b94(eventobject, changedtext) {
        var self = this;
        this.view.flexHover.isVisible = true;
    },
    /** onTextChange defined for txtAddressLine2 **/
    AS_TextField_c2b36ba348ad4c758835e85a9efae61d: function AS_TextField_c2b36ba348ad4c758835e85a9efae61d(eventobject, changedtext) {
        var self = this;
        this.view.flexHover.isVisible = true;
    },
    /** onDone defined for txtCity **/
    AS_TextField_g24adfb38c3b4206b61e623185ae6ca1: function AS_TextField_g24adfb38c3b4206b61e623185ae6ca1(eventobject, changedtext) {
        var self = this;
        this.view.flexHover.isVisible = true;
    },
    /** onClick defined for mapGoogleMap **/
    AS_Map_dc29fc7eec7d4303adf9fbc8adfe586d: function AS_Map_dc29fc7eec7d4303adf9fbc8adfe586d(eventobject, location) {
        var self = this;
        //this.setLocationOnMap();
    },
    /** onClick defined for flexHover **/
    AS_FlexContainer_d5bbb647492d4bc6a5468f85eccfbc1f: function AS_FlexContainer_d5bbb647492d4bc6a5468f85eccfbc1f(eventobject) {
        var self = this;
        this.setLocationOnMap(this.setLocationDataOnMap);
    },
    /** onClick defined for btnProceedToSession **/
    AS_Button_a77c9e4b46584c6a8031b138ae67ca28: function AS_Button_a77c9e4b46584c6a8031b138ae67ca28(eventobject) {
        var self = this;
        this.doTabActions("btnSessions");
        //this.onClickProceed();
    },
    /** btnAddOnclick defined for sessionFooter1 **/
    AS_UWI_j1f3ad09834e4c508d7e2cf124c1fb8b: function AS_UWI_j1f3ad09834e4c508d7e2cf124c1fb8b(eventobject) {
        var self = this;
        this.createUI();
    },
    /** btnDelOnclick defined for sessionFooter1 **/
    AS_UWI_db7f053bc18742f8bae85367f35e975f: function AS_UWI_db7f053bc18742f8bae85367f35e975f(eventobject) {
        var self = this;
        this.removeSession(eventobject);
    },
    /** onClick defined for btnPublish **/
    AS_Button_i7c4eab0efef4fb59e8ed052a20a797e: function AS_Button_i7c4eab0efef4fb59e8ed052a20a797e(eventobject) {
        var self = this;
        this.getSessionData();
    },
    /** onUploadSuccess defined for boxfileupload **/
    AS_UWI_b2e48b82de6542e9a993c35d16740932: function AS_UWI_b2e48b82de6542e9a993c35d16740932(result) {
        var self = this;
        kony.application.dismissLoadingScreen();
        this.boxUploadSuccess(JSON.parse(result), 1);
    },
    /** onUploadFailure defined for boxfileupload **/
    AS_UWI_b698b758da5246cca68a1611f293c6d7: function AS_UWI_b698b758da5246cca68a1611f293c6d7(result) {
        var self = this;
        kony.application.dismissLoadingScreen();
        this.view.lblUploadSuccess.height = "30%";
        this.view.lblUploadSuccess.text = "Upload Failure";
        this.view.forceLayout()
    },
    /** onImageSelection defined for boxfileupload **/
    AS_UWI_i739fc8ec8a64b7da8fbb577507689c3: function AS_UWI_i739fc8ec8a64b7da8fbb577507689c3(images) {
        var self = this;
        kony.application.showLoadingScreen("sknloading", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, {
            enableMenuKey: false,
            enableBackKey: false,
            progressIndicatorColor: "000000"
        });
        this.view.boxfileupload.uploadFile();
    },
    /** onUploadSuccess defined for boxUploadGallery **/
    AS_UWI_f9d79019ba8b4613a3aee9c0be3d2dae: function AS_UWI_f9d79019ba8b4613a3aee9c0be3d2dae(result) {
        var self = this;
        kony.application.dismissLoadingScreen();
        this.boxUploadSuccess(JSON.parse(result), 2);
    },
    /** onUploadFailure defined for boxUploadGallery **/
    AS_UWI_f44ee808c39341bd9d75d78f8530eab1: function AS_UWI_f44ee808c39341bd9d75d78f8530eab1(result) {
        var self = this;
        kony.application.dismissLoadingScreen();
        this.view.lblGallerySuccess.height = "30%";
        this.view.lblGallerySuccess.text = "Upload Failure";
        this.view.forceLayout();
    },
    /** onImageSelection defined for boxUploadGallery **/
    AS_UWI_e238938f2b3649b9a073eff9bfac31c5: function AS_UWI_e238938f2b3649b9a073eff9bfac31c5(images) {
        var self = this;
        kony.application.showLoadingScreen("sknloading", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, {
            enableMenuKey: false,
            enableBackKey: false,
            progressIndicatorColor: "000000"
        });
        this.view.boxUploadGallery.uploadFile();
    },
    /** onAllEventClick defined for menuItem **/
    AS_UWI_f469ac9b9a024db796e076520c5a25cb: function AS_UWI_f469ac9b9a024db796e076520c5a25cb() {
        var self = this;
        this.askForConfirmation("Your changes will be lost. Do you want to proceed?", "Are you Sure?", this.navigateToAllEventsPage);
    },
    /** onManageUserClick defined for menuItem **/
    AS_UWI_j20ebb89b6e14c99b335e65b22dbc12f: function AS_UWI_j20ebb89b6e14c99b335e65b22dbc12f() {
        var self = this;
        this.navigateToManageUser();
    },
    /** postShow defined for frmCreateEvent **/
    AS_Form_ca376d275d4044acb27f9df6b4bc063b: function AS_Form_ca376d275d4044acb27f9df6b4bc063b(eventobject) {
        var self = this;
        this.view.startTime.setTimeListUI();
        this.view.startTime.height = "5%";
        this.view.EndTime.setTimeListUI();
        this.view.EndTime.height = "5%";
        this.view.forceLayout();
        this.view.calEventStartDate.dateEditable = false;
        this.view.calEventEndDate.dateEditable = false;
        postshow();
    }
});