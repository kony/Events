define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onAllEventClick defined for menuItem0 **/
    AS_UWI_ac1751fe9c6546df9407d49e802d7e33: function AS_UWI_ac1751fe9c6546df9407d49e802d7e33() {
        var self = this;
        this.onMenuItemClick();
    },
    /** onCreateEventClick defined for menuItem0 **/
    AS_UWI_e717d50a84e04347896e78d480753327: function AS_UWI_e717d50a84e04347896e78d480753327() {
        var self = this;
        var nav = new kony.mvc.Navigation("frmCreateEvent");
        nav.navigate();
    },
    /** onManageUserClick defined for menuItem0 **/
    AS_UWI_cdcd79bb413e4c3e9e80b00fbec8a067: function AS_UWI_cdcd79bb413e4c3e9e80b00fbec8a067() {
        var self = this;
        this.navigateToManageUser();
    },
    /** onCreateEventClick defined for menuItem **/
    AS_UWI_adeed8e1d39b4373a27b49bf6b80f3ac: function AS_UWI_adeed8e1d39b4373a27b49bf6b80f3ac() {
        var self = this;
        this.navigateToFormCreateNewEvent();
    },
    /** onManageUserClick defined for menuItem **/
    AS_UWI_e40b934c488e4b548933e1a493e4506d: function AS_UWI_e40b934c488e4b548933e1a493e4506d() {
        var self = this;
        this.navigateToManageUser();
    },
    /** postShow defined for frmAllEvents **/
    AS_Form_hbe07b3ca4164101b2660362c4fc8c23: function AS_Form_hbe07b3ca4164101b2660362c4fc8c23(eventobject) {
        var self = this;
        this.getEventsData();
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