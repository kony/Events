define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLinkedInLogin **/
    AS_Button_a80651fce1e64f739c85ba5d18a05842: function AS_Button_a80651fce1e64f739c85ba5d18a05842(eventobject) {
        var self = this;
        Events.consumerLogin.doLinkedInLogin(EVENT_CONSTANS.MODE.LOGIN);
    },
    /** onDone defined for txtPassWord **/
    AS_TextField_e9a76156f7f1447e9dc2972f0c5aee44: function AS_TextField_e9a76156f7f1447e9dc2972f0c5aee44(eventobject, changedtext) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    },
    /** onClick defined for flexShowHidePass **/
    AS_FlexContainer_b1960b9eb1c24435ab192c6a8fc70925: function AS_FlexContainer_b1960b9eb1c24435ab192c6a8fc70925(eventobject) {
        var self = this;
        this.showPassword();
    },
    /** onClick defined for btnSubmit **/
    AS_Button_gac375ae9f3f437da23efcb0f25b67c4: function AS_Button_gac375ae9f3f437da23efcb0f25b67c4(eventobject) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    },
    /** onClick defined for btnCancel **/
    AS_Button_c7383094e1434f0e9b8fe1d38e25d41f: function AS_Button_c7383094e1434f0e9b8fe1d38e25d41f(eventobject) {
        var self = this;
        var nav = new kony.mvc.Navigation("frmAllEvents");
        nav.navigate();
    }
});