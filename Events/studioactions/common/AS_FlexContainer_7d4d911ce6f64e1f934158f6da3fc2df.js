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