define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segTimingList **/
    AS_Segment_h12975ebb8e04648afd904a7ab1af93e: function AS_Segment_h12975ebb8e04648afd904a7ab1af93e(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSelectionOfTimeSlot();
    },
    /** onClick defined for flexTimePicker **/
    AS_FlexContainer_f77703059019443c9b2ba841b14ce64f: function AS_FlexContainer_f77703059019443c9b2ba841b14ce64f(eventobject) {
        var self = this;
        this.setTimeListUI();
    },
    /** postShow defined for TimePicker **/
    AS_FlexContainer_ebdfac7a238d4155960ebea12303ebf9: function AS_FlexContainer_ebdfac7a238d4155960ebea12303ebf9(eventobject) {
        var self = this;
        this.setTimePicker();
    }
});