define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** btnLoginClick defined for dashboard **/
    AS_UWI_e62a0a2b80e441cea46a5884a162f139: function AS_UWI_e62a0a2b80e441cea46a5884a162f139(eventobject) {
        var self = this;
        var navToLogin = new kony.mvc.Navigation("frmLogin");
        navToLogin.navigate();
    },
    /** onAllEventClick defined for menuItem **/
    AS_UWI_dfbc5c7080a94156b2be7c6820751c6d: function AS_UWI_dfbc5c7080a94156b2be7c6820751c6d() {
        var self = this;
        if (EVENT_CONSTANS.MODE.USERROLE == EVENT_CONSTANS.USERROLE.ADMIN) {
            this.view.menuItem.setSelectedFlex(1);
            this.getEventsData();
        } else {
            this.currentMode = EVENT_CONSTANS.MODE.ALLEVENTS;
            this.getEventsData();
        }
    },
    /** onCreateEventClick defined for menuItem **/
    AS_UWI_adeed8e1d39b4373a27b49bf6b80f3ac: function AS_UWI_adeed8e1d39b4373a27b49bf6b80f3ac() {
        var self = this;
        if (EVENT_CONSTANS.MODE.USERROLE == EVENT_CONSTANS.USERROLE.ADMIN) {
            this.navigateToFormCreateNewEvent();
        } else {
            if (glbIsLoggedIn) {
                this.currentMode = EVENT_CONSTANS.MODE.MYEVENTS;
                this.getEventsData();
            } else {
                Events.consumerLogin.doLinkedInLogin(EVENT_CONSTANS.MODE.MYEVENTS)
            }
        }
    },
    /** onManageUserClick defined for menuItem **/
    AS_UWI_e40b934c488e4b548933e1a493e4506d: function AS_UWI_e40b934c488e4b548933e1a493e4506d() {
        var self = this;
        if (EVENT_CONSTANS.MODE.USERROLE == EVENT_CONSTANS.USERROLE.ADMIN) {
            this.navigateToManageUser();
        } else {
            this.currentMode = EVENT_CONSTANS.MODE.UPCOMMINGEVENTS;
            this.getEventsData();
        }
    },
    /** onPrevBack defined for eventpreview **/
    AS_UWI_d7309e7096ef4c69b257a8cb0b5fb023: function AS_UWI_d7309e7096ef4c69b257a8cb0b5fb023(eventobject) {
        var self = this;
        this.animateDetailsPage(100);
    },
    /** onTopRegisterClick defined for eventpreview **/
    AS_UWI_c956fc0d99d5499590cf7ce2fed4ad18: function AS_UWI_c956fc0d99d5499590cf7ce2fed4ad18(eventobject) {
        var self = this;
        this.registerToEvent();
    },
    /** onBottomRegisterClick defined for eventpreview **/
    AS_UWI_d9b367ff0aba4a24b1c475adcafd588b: function AS_UWI_d9b367ff0aba4a24b1c475adcafd588b(eventobject) {
        var self = this;
        this.registerToEvent();
    },
    /** postShow defined for frmAllEvents **/
    AS_Form_hbe07b3ca4164101b2660362c4fc8c23: function AS_Form_hbe07b3ca4164101b2660362c4fc8c23(eventobject) {
        var self = this;
        postshow();
        try {
            kony.application.destroyForm("frmCreateEvent");
        } catch (err) {
            kony.print(err);
        }
    },
    /** onDeviceBack defined for frmAllEvents **/
    AS_Form_f4846a2d4d6342d5b65a424619ff391d: function AS_Form_f4846a2d4d6342d5b65a424619ff391d(eventobject) {
        var self = this;
        kony.print("device back clicked");
    }
});