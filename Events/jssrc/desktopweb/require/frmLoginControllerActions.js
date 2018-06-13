define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for txtPassWord **/
    AS_TextField_f38a41c004c54a74a9ab7cbda138505c: function AS_TextField_f38a41c004c54a74a9ab7cbda138505c(eventobject, changedtext) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    },
    /** onClick defined for FlexContainer0hd0cb1df7f1b45 **/
    AS_FlexContainer_f242b9953b724996baa03da20fbb176e: function AS_FlexContainer_f242b9953b724996baa03da20fbb176e(eventobject) {
        var self = this;
        if (this.view.imageShowPassword.src === "eyeiconvisible.png") {
            this.view.imageShowPassword.src = "eyeicon.png"
            this.view.txtPassWord.isVisible = true;
            this.view.txtPasswordShow.isVisible = false;
        } else {
            this.view.imageShowPassword.src = "eyeiconvisible.png";
            this.view.txtPasswordShow.text = this.view.txtPassWord.text;
            this.view.txtPassWord.isVisible = false;
            this.view.txtPasswordShow.isVisible = true;
        }
    },
    /** onClick defined for btnSubmit **/
    AS_Button_h6db9ecbd776435ea976fd9cc7c0e167: function AS_Button_h6db9ecbd776435ea976fd9cc7c0e167(eventobject) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    }
});