define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_j2df2bb65fde4c37940993b4efab5748: function AS_FlexContainer_j2df2bb65fde4c37940993b4efab5748(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEventDetails");
        ntf.navigate();
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_c5fd64bf578c471b9670d3fc67fc8031: function AS_FlexContainer_c5fd64bf578c471b9670d3fc67fc8031(eventobject) {
        var self = this;
        return self.navigateToFormEventDetail.call(this);
    },
    /** postShow defined for frmImageGallery **/
    AS_Form_eb8cdf5a728b40e98f102252bf598ec6: function AS_Form_eb8cdf5a728b40e98f102252bf598ec6(eventobject) {
        var self = this;
        this.view.ImageGallery.setImage(this.imagedata);
    }
});