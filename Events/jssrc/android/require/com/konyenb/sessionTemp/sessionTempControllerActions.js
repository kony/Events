define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSelection defined for calSessionStartDate **/
    AS_Calendar_fb57ad91230144619dda879dd81dd82b: function AS_Calendar_fb57ad91230144619dda879dd81dd82b(eventobject, isValidDateSelected) {
        var self = this;
        this.view.calSessionStartDate.skin = "skncalNormal";
    },
    /** onTextChange defined for txtSessionStartTime **/
    AS_TextField_c7dde1660bab4412aa2e3da97b8cf4e5: function AS_TextField_c7dde1660bab4412aa2e3da97b8cf4e5(eventobject, changedtext) {
        var self = this;
        this.validateStartTime(this.view.txtSessionStartTime.text);
    },
    /** onTextChange defined for txtSessionEndTime **/
    AS_TextField_f37f83e3ec68420086885d7aaf301dc9: function AS_TextField_f37f83e3ec68420086885d7aaf301dc9(eventobject, changedtext) {
        var self = this;
        this.validateEndTime(this.view.txtSessionEndTime.text);
    },
    /** onClick defined for btnCreateNewSpeaker **/
    AS_FlexContainer_eb09808c6760487f8a96f25b1a582ec5: function AS_FlexContainer_eb09808c6760487f8a96f25b1a582ec5(eventobject) {
        var self = this;
        this.onClickAdd({
            "rowIndex": 1
        });
    }
});