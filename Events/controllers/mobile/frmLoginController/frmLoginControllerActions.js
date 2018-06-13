define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLinkedIn **/
    AS_Button_b0d6e32e7bcf41e4b96196c030d114dc: function AS_Button_b0d6e32e7bcf41e4b96196c030d114dc(eventobject) {
        var self = this;
        return self.linkedLogin.call(this);
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_i63f2df2498847a4af7778c31ab453a8: function AS_FlexContainer_i63f2df2498847a4af7778c31ab453a8(eventobject) {
        var self = this;
        return self.navigateBack.call(this);
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_f39f3886172f45abbc2c94b1f5b58cb7: function AS_FlexContainer_f39f3886172f45abbc2c94b1f5b58cb7(eventobject) {
        var self = this;
        this.animateBrowserFlex(100);
    },
    /** onClick defined for headerButtonLeft **/
    AS_Button_f764d4b6dd1a417e8fcee60144247940: function AS_Button_f764d4b6dd1a417e8fcee60144247940(eventobject) {
        var self = this;
        return self.navigateBack.call(this);
    }
});