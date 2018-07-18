//actions.js file 
function AS_Button_e8511783358d433ea6e7134d952de286(eventobject) {
    this.disableTimeLine();
}

function AS_Button_g3d9f51e16f4455e8961f39d233ce4a2(eventobject) {
    var self = this;
    var client = kony.sdk.getCurrentInstance();
    var auth_client = client.getIdentityService("likedInIdentityService");
    auth_client.logout(function(res) {
        alert("success" + JSON.stringify(res));
    }, function(err) {
        alert("failure" + JSON.stringify(err));
    })
}

function AS_Button_jd849cc0c27f429486a5152ba4bb2d0e(eventobject) {
    this.onDeviceClickFormForm();
}

function AS_FlexContainer_6e618c481f6b4ebfa0baef71fae7c499(eventobject) {
    //this.hideSlidingMenu();
}

function AS_FlexContainer_7d4d911ce6f64e1f934158f6da3fc2df(eventobject) {
    if (this._hamburgerDirection == "Left") {
        this.view.flxMainSlidingMenu.isVisible = true;
        this.view.flxMainSlidingMenu.left = "-20%";
        this.view.flxHamParent.left = "67.5%";
        this.view.imgHamIcon.setVisibility(false);
        this.view.flxCover.isVisible = true;
        this.view.forceLayout();
    } else {
        this.view.flxMainSlidingMenu.isVisible = true;
        this.view.flxMainSlidingMenu.left = "0%";
        this.view.flxHamParent.left = "20%";
        this.view.imgHamIcon.setVisibility(false);
        this.view.flxCover.isVisible = true;
        this.view.forceLayout();
    }
}

function AS_FlexContainer_9a3fece2bafd4a439c3fd58edc1c7a13(eventobject) {
    this.showSlidingMenu();
}

function AS_FlexContainer_a3996bf43d7a425f93a843c8033ed54d(eventobject) {
    var self = this;
    return self.getImages.call(this, null);
}

function AS_FlexContainer_a4789d0f1afd4db3b78ca5700f95f4aa(eventobject, x, y) {
    var self = this;
}

function AS_FlexContainer_b3cec970c40b4c9ca1ebe3173cf80490(eventobject) {
    var self = this;
    this.onViewHandler();
}

function AS_FlexContainer_bb11ab78a646477da8e50ddc9bd5c520(eventobject) {
    var self = this;
}

function AS_FlexContainer_c051a9d2c48e4ca28722835199deec66(eventobject) {
    var t = '';
}

function AS_FlexContainer_caed9c9f6e1d43409b7073edd5fa9c90(eventobject) {
    //this.view.FlexMainImageSet.isVisible = false;
    this.onClickChange();
}

function AS_FlexContainer_da8b622bc77544e6868db44d5528a8c2(eventobject) {
    var self = this;
    this.createSegment();
}

function AS_FlexContainer_da9694a4fc4140489bc01ce66b63d941(eventobject, x, y) {
    var self = this;
}

function AS_FlexContainer_fada2523119d4d58afc350b2b6806b09(eventobject, x, y) {
    this.onClickOfUp();
}

function AS_FlexContainer_gcc56184a8e64b6db39e4d165184c87c(eventobject) {
    var self = this;
    this.view.Segment0h79ffc45921049.doLayout = function() {
        alert(this.view.Segment0h79ffc45921049.frame["height"]);
    }.bind(this)
}

function AS_FlexContainer_h200f6358f0b4a24b3527f2591da77fb(eventobject, x, y) {
    this.onClickOfDown();
}

function AS_FlexContainer_ibbcc442aaa54ccab12d0a2fbba26387(eventobject) {
    var self = this;
}

function AS_FlexContainer_j3afb4a96be34388abbb05a4015dcfe8(eventobject) {
    var self = this;
    this.view.Segment0h79ffc45921049.doLayout = this.checkLayoutAndChange;
}

function AS_FlexContainer_jf56ff5781bf453cb8be381e324df6db(eventobject) {
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

function AS_Segment_bfd0b9cccb994624beae1bf610275e73(eventobject, sectionNumber, rowNumber) {
    this.onClickOfTimeline();
}

function AS_Segment_f68ae74da9f04189acaaff18e285b19f(seguiWidget, sectionIndex, rowIndex) {
    this.currentRowIndex = rowIndex;
}