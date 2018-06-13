define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onAllEventClick defined for menuItem **/
    AS_UWI_b0c8b85e54dc4140a8c21f9c13996d65: function AS_UWI_b0c8b85e54dc4140a8c21f9c13996d65() {
        var self = this;
        this.navigateToAllEvents();
    },
    /** onCreateEventClick defined for menuItem **/
    AS_UWI_dbc3178387a84ff48af713145d5d9851: function AS_UWI_dbc3178387a84ff48af713145d5d9851() {
        var self = this;
        this.navigateToCreateEvent();
    },
    /** onClick defined for btnProceed **/
    AS_Button_afc005346af041ea99edbfd77be06a8e: function AS_Button_afc005346af041ea99edbfd77be06a8e(eventobject) {
        var self = this;
        this.populateEvent();
        //this.setEvent();
    },
    /** postShow defined for frmManageUser **/
    AS_Form_e5ee2744321a4665a1dfc6cfd31bcbd9: function AS_Form_e5ee2744321a4665a1dfc6cfd31bcbd9(eventobject) {
        var self = this;
        //this.onPostShow();
        this.getAllEvent();
        try {
            kony.application.destroyForm("frmCreateEvent");
        } catch (err) {
            kony.print(err);
        }
    }
});