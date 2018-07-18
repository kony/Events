define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for txtPassWord **/
    AS_TextField_e9a76156f7f1447e9dc2972f0c5aee44: function AS_TextField_e9a76156f7f1447e9dc2972f0c5aee44(eventobject, changedtext) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    },
    /** onClick defined for FlexContainer0hd0cb1df7f1b45 **/
    AS_FlexContainer_b1960b9eb1c24435ab192c6a8fc70925: function AS_FlexContainer_b1960b9eb1c24435ab192c6a8fc70925(eventobject) {
        var self = this;
        this.showPassword();
    },
    /** onClick defined for btnSubmit **/
    AS_Button_gd61d69e5d5942138d6f15e55f2ce490: function AS_Button_gd61d69e5d5942138d6f15e55f2ce490(eventobject) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    }
});