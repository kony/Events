define({
    event: null,
    /**
     * @function onNavigate
     * @description This function is used to populate the data to the widget while navigating to this form.
     * @private
     * @param {JSON} data
     */
    onNavigate: function(data) {
        try {
            if (data === undefined || (data.origin !== undefined && data.origin === "loginBack")) return;
            if (data.origin !== undefined && data.origin == "push") {
                this.fromPush = true;
            } else {
                this.fromPush = false;
            }
            this.resetImageData();
            this.event = data.event_data;
            this.sharingData = "";
            this.sharingData = data.event_data;
            this.setImageData(data.imageData);
            if (this.event.isRegister !== undefined && (this.event.isRegister === true || this.event.isRegister === "1")) {
                this.view.flxFooter.isVisible = false;
            } else {
                this.view.flxFooter.isVisible = true;
            }
            var width = kony.os.deviceInfo().screenWidth;
            this.view.flxInfoItem0.height = ("" + (deviceWidth / 3) - 10) + "dp";
            this.view.flxInfoItem1.width = ("" + (deviceWidth / 3) - 10) + "dp";
            this.view.flxInfoItem1.height = ("" + (deviceWidth / 3) - 10) + "dp";
            this.view.flxInfoItem2.width = ("" + (deviceWidth / 3) - 10) + "dp";
            this.view.flxInfoItem2.height = ("" + (deviceWidth / 3) - 10) + "dp";
            this.view.lblVerticalLine0.left = ("" + deviceWidth / 3) + "dp";
            this.view.lblVerticalLine1.left = ("" + 2 * deviceWidth / 3) + "dp";
            this.view.flxInfoItem0.centerX = (deviceWidth / 6) + "dp";
            this.view.flxInfoItem1.centerX = (deviceWidth / 2) + "dp";
            this.view.flxInfoItem2.centerX = (5 * deviceWidth / 6) + "dp";
            this.view.lblInfoItemTitle01.text = this.event["start_date_mon"] + "-" + this.event["end_date_mon"] + "," + this.event["end_year"];
            if (this.event["noofdays"] < 2) {
                this.view.lblInfoItemTitle02.text = this.event["noofdays"] + " Day Event";
                this.view.lblInfoItemTitle22.text = this.event["noofdays"] + " Day Event";
            } else {
                this.view.lblInfoItemTitle02.text = this.event["noofdays"] + " Days Event";
                this.view.lblInfoItemTitle22.text = this.event["noofdays"] + " Day Event";
            }
            if (this.event["typename"] === "offline") {
                this.view.imgIcon1.src = "maplocationicon.png";
                this.view.lblInfoItemTitle11.text = this.event.cityname;
                this.view.lblInfoItemTitle12.text = this.event.addressLine1;
                this.view.flxInfoItem1.onClick = this.ShowLocationOnMap;
            } else {
                this.view.imgIcon1.src = "onlineicon.png";
                this.view.lblInfoItemTitle11.text = "Online";
                this.view.lblInfoItemTitle12.text = "";
                this.view.flxInfoItem1.onClick = null;
            }
            if (this.event.banner_url !== undefined && this.event.banner_url !== null) {
                this.view.imgMain.src = this.event.banner_url;
            } else {
                this.view.imgMain.src = "event01.jpg";
            }
            this.view.lblTitle.text = this.event.name;
            this.view.lblSubTitle.text = this.event.categoryname;
            this.view.lblEventDesc1.text = this.event.short_desc;
            this.view.lblEventDesc2.text = this.event.long_desc;
        } catch (e) {
            kony.print("exception: " + e.message);
            alert(e.message);
        }
    },
    /**
     * @function shareEvent
     * @description This function is used to share the selected Event.
     * @private
     */
    shareEvent: function() {
        var selectedItem = this.sharingData;
        this.view.imageBannerSS.src = selectedItem.banner_url;
        this.view.rchTextDateSS.text = selectedItem.date;
        this.view.rchtxtMonthSS.text = selectedItem.month;
        this.view.lblTimeSS.text = selectedItem.time;
        this.view.lblEventTitleSS.text = selectedItem.name;
        this.view.lblCategorySS.text = selectedItem.categoryname;
        this.view.imageTypeIconSS.src = selectedItem.imageTypeIcon;
        this.view.lblEventTypeSS.text = selectedItem.addressLine1;
        try {
            var img = kony.image.createImageFromSnapShot(this.view.flexEventSS);
            var imageRawBytes = img.getImageAsRawBytes();
            var base64 = kony.convertToBase64(imageRawBytes);
            //this.view.socialSharing.setContent("iVBOR");
            this.view.socialSharing.setContent(base64);
            this.view.socialSharing.checkDeviceInfo();
            sendMetric(this.event.event_id, "share");
        } catch (e) {
            kony.print("Exception occured while sharing event: " + JSON.stringify(e));
        }
    },
    /**
     * @function ShowLocationOnMap
     * @description This function is used to navigate to the frmLocation with event address location coordinate.
     * @private
     */
    ShowLocationOnMap: function() {
        try {
            var navigationObj = new kony.mvc.Navigation("frmLocation");
            var eventLoc = {};
            eventLoc["lat"] = this.event.latitude;
            eventLoc["lon"] = this.event.longitude;
            eventLoc["address"] = this.event.location;
            eventLoc["name"] = this.event.addressLine1;
            if (eventLoc["lat"] === null || eventLoc["lat"] === undefined || eventLoc["lon"] === null || eventLoc["lon"] === undefined) {
                return;
            }
            navigationObj.navigate(eventLoc);
        } catch (e) {
            kony.print(e.message);
            alert(e.message);
        }
    },
    /**
     * @function showSpeakersProfile
     * @description This function is used to navigate to the frmPresenter with event data.
     * @private
     */
    showSpeakersProfile: function() {
        try {
            var navigationObject = new kony.mvc.Navigation("frmPresenter");
            navigationObject.navigate(this.event);
        } catch (e) {
            alert(e.message);
            kony.print(e.message);
        }
    },
    /**
     * @function showSpeakersProfile
     * @description Function to navigate to the frmLogin with event id.
     * @private
     */
    login: function() {
        try {
            var param = {};
            param.origin = "register";
            param.event_id = this.event.event_id;
            var navigationObject = new kony.mvc.Navigation("frmLogin");
            navigationObject.navigate(param);
        } catch (e) {
            alert(e.message);
            kony.print(e.message);
        }
    },
    /**
     * @function navigateToFormGallery
     * @description Function to navigate to the frmImageGallery.
     * @private
     */
    navigateToFormGallery: function() {
        try {
            var navigationObject = new kony.mvc.Navigation("frmImageGallery");
            navigationObject.navigate();
        } catch (e) {
            kony.print(e.message);
            alert(e.message);
        }
    },
    /**
     * @function navigateToFormSchedular
     * @description Function to navigate to the frmSchedular with selected event data.
     * @private
     */
    navigateToFormSchedular: function() {
        try {
            var navigationObject = new kony.mvc.Navigation("frmSchedular");
            navigationObject.navigate(this.event);
        } catch (e) {
            kony.print(e.message);
            alert(e.message);
        }
    },
    /**
     * @function setImageData
     * @description Function to assign the event image urls to the image widget.
     * @private
     * @param {Array} value
     */
    setImageData: function(data) {
        this.eventImages = [];
        this.eventImages = data;
        if (!data.length) {
            this.view.flxGalleryCompConatiner.isVisible = false;
            return;
        }
        this.view.flxGalleryCompConatiner.isVisible = true;
        for (var i = 0; i < data.length; i++) {
            if (i <= 4) {
                this.view["flexItem" + i].isVisible = true;
                this.view["imgItem" + i].src = data[i].image_url;
            } else {
                this.view["flexRemainingImageCount"].isVisible = true;
                this.view.lblRemaingImageCount.text = "+" + ((data.length) - 5).toFixed();
                break;
            }
        }
    },
    /**
     * @function resetImageData
     * @description Function to set the visibility of image widget to false.
     * @private
     */
    resetImageData: function() {
        this.view["flexRemainingImageCount"].isVisible = false;
        for (var i = 0; i < 5; i++) {
            this.view["flexItem" + i].isVisible = false;
        }
    },
    /**
     * @function navigateToEventGallery
     * @description Function to navigate to frmImageGallery with the images data.
     * @private
     */
    navigateToEventGallery: function() {
        var navObj = new kony.mvc.Navigation("frmImageGallery");
        navObj.navigate(this.eventImages);
    }
});