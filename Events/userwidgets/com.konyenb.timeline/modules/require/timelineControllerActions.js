define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnClose **/
    AS_Button_e8511783358d433ea6e7134d952de286: function AS_Button_e8511783358d433ea6e7134d952de286(eventobject) {
        var self = this;
        this.disableTimeLine();
    },
    /** onTouchStart defined for flxUp **/
    AS_FlexContainer_fada2523119d4d58afc350b2b6806b09: function AS_FlexContainer_fada2523119d4d58afc350b2b6806b09(eventobject, x, y) {
        var self = this;
        this.onClickOfUp();
    },
    /** onTouchStart defined for flxDown **/
    AS_FlexContainer_h200f6358f0b4a24b3527f2591da77fb: function AS_FlexContainer_h200f6358f0b4a24b3527f2591da77fb(eventobject, x, y) {
        var self = this;
        this.onClickOfDown();
    },
    /** onRowClick defined for segTimeLine **/
    AS_Segment_bfd0b9cccb994624beae1bf610275e73: function AS_Segment_bfd0b9cccb994624beae1bf610275e73(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onClickOfTimeline();
    },
    /** onSwipe defined for segImageSet **/
    AS_Segment_f68ae74da9f04189acaaff18e285b19f: function AS_Segment_f68ae74da9f04189acaaff18e285b19f(seguiWidget, sectionIndex, rowIndex) {
        var self = this;
        this.currentRowIndex = rowIndex;
    },
    /** onClick defined for btnClose2 **/
    AS_Button_jd849cc0c27f429486a5152ba4bb2d0e: function AS_Button_jd849cc0c27f429486a5152ba4bb2d0e(eventobject) {
        var self = this;
        this.onDeviceClickFormForm();
    },
    /** onClick defined for FlexMainImageSet **/
    AS_FlexContainer_caed9c9f6e1d43409b7073edd5fa9c90: function AS_FlexContainer_caed9c9f6e1d43409b7073edd5fa9c90(eventobject) {
        var self = this;
        //this.view.FlexMainImageSet.isVisible = false;
        this.onClickChange();
    },
    /** postShow defined for timeline **/
    AS_FlexContainer_jf56ff5781bf453cb8be381e324df6db: function AS_FlexContainer_jf56ff5781bf453cb8be381e324df6db(eventobject) {
        var self = this;
        // this.view.FlexMainImageSet.addGestureRecognizer(2, {
        //             "fingers": 1
        //         }, this.swipeCallback); 
        // var data = {};
        // data.title = this._eventTitle;
        // data.timeLineList = this._masterData.data;
        // kony.print("in component postshow"+JSON.stringify(data));
        // this.setData(data);
        this.setDefault();
    }
});