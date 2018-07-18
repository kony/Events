define({
	event: null,
	/**
	 * @function onNavigate
	 * @description This function is used to populate the data to the widget while navigating to this form.
	 * @private
	 * @param {JSON} data
	 */
	onNavigate: function (data) {
		try {
			if (data === undefined || (data.origin !== undefined && data.origin === EVENT_CONSTANS.MODE.LOGINBACK)) {
				return;
			}
			if (data.origin !== undefined && data.origin == EVENT_CONSTANS.MODE.PUSH) {
				this.fromPush = true;
			} else {
				this.fromPush = false;
			}
			this.resetImageData();
			this.event = data.event_data;
			this.sharingData = data.event_data;
			this.setImageData(data.imageData);
			this.setTitle();
			this.setSubTitle();
			this.setBanner();
			this.setInfoFlexPropertiesBasedOnglbDeviceWidth();
			this.setLocation();
			this.setShortDescription();
			this.setLongDescription();
			this.setSpeakerAndSchedule();
			this.setRegisterButton(this.event.isRegister, this.event.isPast);
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
	shareEvent: function () {
		try {
			this.view.imageBannerSS.src = "";
			var selectedItem = this.sharingData;
			this.view.imageBannerSS.src = selectedItem.banner_url;
			this.view.rchTextDateSS.text = selectedItem.date;
			this.view.rchtxtMonthSS.text = selectedItem.month;
			this.view.lblTimeSS.text = selectedItem.time;
			this.view.lblEventTitleSS.text = selectedItem.name;
			this.view.lblCategorySS.text = selectedItem.categoryname;
			this.view.imageTypeIconSS.src = selectedItem.imageTypeIcon;
			this.view.lblEventTypeSS.text = selectedItem.addressLine1;
			if (selectedItem.banner_url == EVENT_CONSTANS.IMAGES.EVENTPLACEHOLDERIMAGE) {
				this.sendSnapshot();
			}
			sendMetric(this.event.event_id, "share");
		} catch (e) {
			kony.print("Exception occured while sharing event: " + JSON.stringify(e));
		}
	},
	/**
	 * @function sendSnapshot
	 * @description - this function will take snap shot of the selected event list flex and
	 * call the setContent function of socil sharing component on image download
	 **/
	sendSnapshot: function () {
		try {
			var img = kony.image.createImageFromSnapShot(this.view.flexEventSS);
			var imageRawBytes = img.getImageAsRawBytes();
			var base64 = kony.convertToBase64(imageRawBytes);
			this.view.socialSharing.setContent(base64);
			this.view.socialSharing.checkDeviceInfo();
			this.view.imageBannerSS.src = "";
		} catch (err) {
			kony.print("frm Event Landing Controller" + JSON.stringify(err));
		}
	},

	/**
	 * @function ShowLocationOnMap
	 * @description This function is used to navigate to the frmLocation with event address location coordinate.
	 * @private
	 */
	ShowLocationOnMap: function () {
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
	showSpeakersProfile: function () {
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
	login: function () {
		try {
			var param = {};
			param.origin = EVENT_CONSTANS.MODE.REGISTER;
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
	navigateToFormGallery: function () {
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
	navigateToFormSchedular: function () {
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
	setImageData: function (data) {
		try {
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
		} catch (error) {
			kony.print("frm Event Details Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function resetImageData
	 * @description Function to set the visibility of image widget to false.
	 * @private
	 */
	resetImageData: function () {
		try {
			this.view["flexRemainingImageCount"].isVisible = false;
			for (var i = 0; i < 5; i++) {
				this.view["flexItem" + i].isVisible = false;
			}
		} catch (error) {
			kony.print("frm Event Details Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function navigateToEventGallery
	 * @description Function to navigate to frmImageGallery with the images data.
	 * @private
	 */
	navigateToEventGallery: function () {
		try {
			var navObj = new kony.mvc.Navigation("frmImageGallery");
			navObj.navigate(this.eventImages);
		} catch (error) {
			kony.print("frm Event Details Controller" + JSON.stringify(error));
		}
	},

	/**
	 * @function setRegisterButton
	 * @description Function to set the register button based on the registered and past flag
	 * @param {Boolean - isRegister}
	 * @param {Boolean - isPast}
	 */
	setRegisterButton: function (isRegister, isPast) {
		if (isRegister || isPast) {
			this.view.flxFooter.isVisible = false;
		} else {
			this.view.flxFooter.isVisible = true;
		}
	},

	/**
	 * @function setInfoFlexPropertiesBasedOnglbDeviceWidth
	 * sets Info flex properties based on device width;
	 */
	setInfoFlexPropertiesBasedOnglbDeviceWidth: function () {
		this.view.flxInfoItem0.height = ("" + (glbDeviceWidth / 3) - 10) + "dp";
		this.view.flxInfoItem1.width = ("" + (glbDeviceWidth / 3) - 10) + "dp";
		this.view.flxInfoItem1.height = ("" + (glbDeviceWidth / 3) - 10) + "dp";
		this.view.flxInfoItem2.width = ("" + (glbDeviceWidth / 3) - 10) + "dp";
		this.view.flxInfoItem2.height = ("" + (glbDeviceWidth / 3) - 10) + "dp";
		this.view.lblVerticalLine0.left = ("" + glbDeviceWidth / 3) + "dp";
		this.view.lblVerticalLine1.left = ("" + 2 * glbDeviceWidth / 3) + "dp";
		this.view.flxInfoItem0.centerX = (glbDeviceWidth / 6) + "dp";
		this.view.flxInfoItem1.centerX = (glbDeviceWidth / 2) + "dp";
		this.view.flxInfoItem2.centerX = (5 * glbDeviceWidth / 6) + "dp";
	},

	/**
	 * @function setSpeakerAndSchedule
	 * sets speaker and schedule details
	 */
	setSpeakerAndSchedule: function () {
		try {
			this.view.lblInfoItemTitle01.text = this.event["start_date_mon"] + "-" + this.event["end_date_mon"] + "," + this.event["end_year"];
			var daySuffix = this.event.noofdays < 2 ? this.event["noofdays"] + " Day Event" : this.event["noofdays"] + " Days Event";
			this.view.lblInfoItemTitle02.text = daySuffix;
			this.view.lblInfoItemTitle22.text = daySuffix;
		} catch (err) {
			kony.print("Frm Event Details Controller" + JSON.stringify(err));
		}
	},

	/**
	 * @function setLocation
	 * sets location details
	 */
	setLocation: function () {
		try {
			if (this.event["typename"] === "offline") {
				this.view.imgIcon1.src = EVENT_CONSTANS.IMAGES.OFFLINEIMAGE;
				this.view.lblInfoItemTitle11.text = this.event.cityname;
				this.view.lblInfoItemTitle12.text = this.event.addressLine1;
				this.view.flxInfoItem1.onClick = this.ShowLocationOnMap;
			} else {
				this.view.imgIcon1.src = EVENT_CONSTANS.IMAGES.ONLINEIMAGE;
				this.view.lblInfoItemTitle11.text = EVENT_CONSTANS.TITLE.ONLINE;
				this.view.lblInfoItemTitle12.text = "";
				this.view.flxInfoItem1.onClick = null;
			}
		} catch (err) {
			kony.print("Frm Event Details Controller" + JSON.stringify(err));
		}
	},

	/**
	 * @function setShortDescription
	 * sets short description
	 */
	setShortDescription: function () {
		try {
			this.view.lblEventDesc1.text = this.event.short_desc;
		} catch (err) {
			kony.print("Frm Event Details Controller" + JSON.stringify(err));
		}
	},

	/**
	 * @function setLongDescription
	 * sets long description
	 */
	setLongDescription: function () {
		try {
			this.view.lblEventDesc2.text = this.event.long_desc;
		} catch (err) {
			kony.print("Frm Event Details Controller" + JSON.stringify(err));
		}
	},
	/**
	 * @function setBanner
	 * sets banner image
	 */
	setBanner: function () {
		try {
			if (this.event.banner_url !== undefined && this.event.banner_url !== null) {
				this.view.imgMain.src = this.event.banner_url;
			} else {
				this.view.imgMain.src = EVENT_CONSTANS.IMAGES.EVENTPLACEHOLDERIMAGE;
			}
		} catch (err) {
			kony.print("Frm Event Details Controller" + JSON.stringify(err));
		}
	},

	/**
	 * @function setTitle
	 * sets Title of the event
	 */
	setTitle: function () {
		try {
			this.view.lblTitle.text = this.event.name;
		} catch (err) {
			kony.print("Frm Event Details Controller" + JSON.stringify(err));
		}

	},

	/**
	 * @function setSubTitle
	 * sets sub Title of the event
	 */
	setSubTitle: function () {
		try {
			this.view.lblSubTitle.text = this.event.categoryname;
		} catch (err) {
			kony.print("Frm Event Details Controller" + JSON.stringify(err));
		}
	}
});