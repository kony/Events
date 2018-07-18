define({

	/**
	 * @frmCreateEventController
	 * this module deals with all the CRUD operations for event creation
	 * this module also deals with the UI operations during CRUD
	 */

	//controller variables
	locationData: {},
	event_id: "",
	eventType: 2,
	currentEventImage: 0,
	bannerImage: {},
	eventImages: [],
	/**
	 * @function onNavigate
	 * @description - This function will initiate the controller level variables
	 * This function will set Current Location, Set Profile, set event's default data, set tabs
	 * @param {Object} - param - a JSON which has the selected event data
	 * if edit button is clicked from event list
	 **/
	onNavigate: function (param) {
        try{
          this.event_id = "";
		this.eventImages = [];
		this.bannerImage = {};
		this.view.segGallery.removeAll();
		this.view.segGallery.isVisible = false;
		this.view.menuItem.setSelectedFlex(2); //set the selection to the createEvent menu in hamburger
		this.getLocation(); //set the location to the current location
		this.setProfile(); //set the profile data
		this.setScrollContainers(); //set the scroll flexes to default
		this.doTabActions("btnBasic"); //set the tabs to highlight basic info
        this.view.EventsHeader.btnBasic.onClick = function(eventobject){
          this.doTabActions(eventobject.id);
        }.bind(this);
		if (param !== undefined && param.editMode !== undefined && param.editMode === true) {
			this.isEditMode = true;
			this.isLoadedFromServer = false;
			this.view.EventsHeader.LblTitle.text = param.eventData.name;
			this.eventImagesFromBk = [];
			this.setDefaultForEvent(); // set the default data for event
			this.setEventForEdit(param.eventData); // set the data for edit
			this.event_id = param.eventData.event_id;
            if(param.eventData.event_images!==undefined)
			this.setGalleryDataForEdit(param.eventData.event_images); // set the gallery data for edit
		} else {
			this.isEditMode = false;
			this.view.EventsHeader.LblTitle.text = EVENT_CONSTANS.TITLE.CREATENEWEVENT;
			this.setDefaultForEvent();
			this.setDefaultForSession();
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
		
	},
	/**
	 * @function setScrollContainers
	 * @description - This function will set the scroll flexes to default
	 **/
	setScrollContainers: function () {
        try{
          this.view.flexScrollEvent.isVisible = true;
		this.view.FlexScrollSession.isVisible = false;
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
		
	},

	/**
	 * @function setDefaultForEvent
	 * @description - This function will reset the event data to default values
	 **/
	setDefaultForEvent: function () {
        try{
		this.view.txtAddressLine1.text = "";
		this.view.txtAddressLine2.text = "";
		this.view.txtCity.text = "";
		this.view.txtEventEndTime.text = "";
		this.view.txtEventLDesc.text = "";
		this.view.txtEventName.text = "";
		this.view.txtShort.text = "";
		this.view.txtEventStartTime.text = "";
		this.view.txtWebexDetails.text = "";
		this.view.calEventStartDate.dateComponents = [];
		this.view.calEventEndDate.dateComponents = [];
		this.view.lblBrowseFiles.text = EVENT_CONSTANS.TITLE.BROWSEBANNERIMAGE;
		this.view.lblUploadSuccess.text = "";
		this.view.lblGallerySuccess.text = "";
		this.view.startTime.TimeValue = "00:00";
		this.view.EndTime.TimeValue = "23:30";
		var contextStDate = {
			"widget": this.view.calEventStartDate,
			"anchor": "bottom",
		};
		this.view.calEventStartDate.setContext(contextStDate);
		var contextEtDate = {
			"widget": this.view.calEventEndDate,
			"anchor": "bottom",
		};
		this.view.calEventEndDate.setContext(contextEtDate);
		if (!this.isEditMode) {
			this.view.btnProceedToSession.onClick = this.doTabActions;
			this.view.EventsHeader.btnSessions.onClick = this.doTabActions;
		} else {
			this.view.btnProceedToSession.onClick = this.getImageToCreate;
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }

	},

	/**
	 * @function setDefaultForSession
	 * @description - This function will reset the session data to default values
	 **/
	setDefaultForSession: function () {
        try{
		this.view.FlexScrollSession.removeAll();
		this.sessionCount = 0;
		this.speakerCount = 0;
		this.uniqueId = 1;
		this.lastTop = 110;
		this.createFirstSession();
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setDefaultForSession
	 * @description - This function will create the default session
	 **/
	createFirstSession: function () {
       try{
		var session = new com.konyenb.sessionTemp({
				"clipBounds": true,
				"height": "100%",
				"id": "session1",
				"isVisible": true,
				"layoutType": kony.flex.FLOW_HORIZONTAL,
				"left": "0dp",
				"masterType": constants.MASTER_TYPE_USERWIDGET,
				"skin": "slFbox",
				"top": "0%",
				"width": "100%"
			}, {}, {});
		this.view.FlexScrollSession.add(session);

		var sessionFooter = new com.konyenb.SessionFooter({
				"autogrowMode": kony.flex.AUTOGROW_NONE,
				"clipBounds": true,
				"height": "10%",
				"id": "sessionFooter1",
				"isVisible": true,
				"layoutType": kony.flex.FREE_FORM,
				"left": "0dp",
				"masterType": constants.MASTER_TYPE_USERWIDGET,
				"skin": "slFbox",
				"top": "100%",
				"width": "100%"
			}, {}, {});
		this.view.FlexScrollSession.add(sessionFooter);
		this.view["sessionFooter1"].btnAddOnclick = this.createUI;
		this.view["sessionFooter1"].btnDelOnclick = this.removeSession;
		this.view["sessionFooter1"].isAddVisible = true;
		this.view["sessionFooter1"].isDelVisible = true;
		this.view["sessionFooter1"].isEditVisible = false;
		this.createPublisHButtonOnSessionScreen(110);
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createPublisHButtonOnSessionScreen
	 * @description - This function will create the publish button dynamically in session page
	 * @oaram {Number} - top - top of the publish button
	 **/
	createPublisHButtonOnSessionScreen: function (top) {
       try{
		var flexPublishEvent = new kony.ui.FlexContainer({
				"autogrowMode": kony.flex.AUTOGROW_NONE,
				"clipBounds": true,
				"height": "15%",
				"id": "flexPublishEvent",
				"isVisible": true,
				"layoutType": kony.flex.FREE_FORM,
				"left": "0%",
				"skin": "slFbox",
				"top": top + "%",
				"width": "100%",
				"zIndex": 1
			}, {}, {});
		flexPublishEvent.setDefaultUnit(kony.flex.DP);
		var btnPublish = new kony.ui.Button({
				"focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
				"height": "50%",
				"id": "btnPublish",
				"isVisible": true,
				"left": "4.00%",
				"onClick": this.publishEventAndSessions,
				"skin": "CopydefBtnNormal0ed0a68b2c3ae44",
				"text": "PUBLISH EVENT",
				"top": "0.00%",
				"width": "20%",
				"zIndex": 2
			}, {
				"contentAlignment": constants.CONTENT_ALIGN_CENTER,
				"displayText": true,
				"padding": [0, 0, 0, 0],
				"paddingInPixel": false
			}, {});
		flexPublishEvent.add(btnPublish);
		this.view.FlexScrollSession.add(flexPublishEvent);
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setProfile
	 * @description - This function will set the profile data
	 **/
	setProfile: function () {
      try{
		if (glbUserAttributes !== undefined && glbUserAttributes !== null && glbUserAttributes !== {}) {
			this.view.dashboard.text = glbUserAttributes.firstname;
			this.view.dashboard.Title = "";
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
	/**
	 * @function getLocation
	 * @description - This function will get the current location using kony.location.getCurrentPosition
	 * This function will set the fetched location to map
	 **/
	getLocation: function () {
      try{
		kony.location.getCurrentPosition(function (position) {
			var geoPosition = "Latitude: " + position.coords.latitude;
			geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
			this.view.mapGoogleMap.locationData = [{
					"lat": position.coords.latitude,
					"lon": position.coords.longitude
				}
			];
		}
			.bind(this), function (error) {
			kony.print("Error in getting Location" + JSON.stringify(error));
		});
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	//getters for event

	/**
	 * @function getEventTitle
	 * @description - This function will get the event title
	 **/
	getEventTitle: function () {
      try{
		var title = this.view.txtEventName.text.replace('&','and');
		if (title !== null && title !== "") {
			return title;
		}
		alert("Please Fill EventTitle");
		return;
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getEventCatagory
	 * @description - This function will get the event category
	 **/
	getEventCatagory: function () {
        try{
		var category = this.view.listCategory.selectedKey;
		if (category !== undefined && category !== null && category !== "") {
			return Number(category);
		} else {
			alert("Please Fill Event Category");
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getEventType
	 * @description - This function will get the event type
	 **/
	getEventType: function (){
        try{
		return this.eventType;
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getLongDesc
	 * @description - This function will get the eventLong Desc
	 **/
	getLongDesc: function () {
        try{
		return this.view.txtEventLDesc.text.replace('&','and');
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getShortDesc
	 * @description - This function will get the event Short Desc
	 **/
	getShortDesc: function () {
        try{
		return (this.view.txtShort.text).replace('&','and');
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getStartDate
	 * @description - This function will get the selected startdate with time
	 **/
	getStartDate: function () {
        try{
		var startDate = this.view.calEventStartDate.formattedDate;
		var startTime = this.view.startTime.getSelectedTime();
		if (this.startTimeOnSelection === undefined)
			return;
		if (startDate !== undefined && startDate !== null && startDate !== "") {
			if (this.validateStartDate(startDate, this.view.calEventEndDate.formattedDate)){
                startDate = startDate.replace(/\//g, "-") + "T" + startTime + ":00";
                startDate = new Date(startDate).toISOString();
                startDate = startDate.split('.')[0];
				return startDate;
            }
			else{
				return;              
            }
		} else {
			alert("Please Select Start Date");
			return;
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getEndDate
	 * @description - This function will get the selected endDate with time
	 **/
	getEndDate: function () {
        try{
		var endDate = this.view.calEventEndDate.formattedDate;
		var endTime = this.view.EndTime.getSelectedTime();
		if (this.endTimeOnSelection === undefined)
			return;
		if (endDate !== undefined && endDate !== null && endDate !== "") {
			if (this.validateEndDate(this.view.calEventEndDate.formattedDate, endDate)){
              endDate = endDate.replace(/\//g, "-") + "T" + endTime + ":00";
              endDate = new Date(endDate).toISOString();
              endDate = endDate.split('.')[0];
              return endDate
            }
			else{
              return;
            }
		} else {
			alert("Please Select Start Date");
			return;
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function startTimeOnSelection
	 * @description - This function will validate start time
	 **/
	startTimeOnSelection: function () {
        try{
		var startDate = this.view.calEventStartDate.formattedDate;
		var endDate = this.view.calEventEndDate.formattedDate;
		var startTime = this.view.startTime.getSelectedTime();
		var endTime = this.view.EndTime.getSelectedTime();
		if (startDate == endDate) {
			if (startTime > endTime) {
				alert("Start time should be less than the End time");
				return false;
			}
		}
		return true;
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function endTimeOnSelection
	 * @description - This function will validate end time
	 **/
	endTimeOnSelection: function () {
        try{
		var startDate = this.view.calEventStartDate.formattedDate;
		var endDate = this.view.calEventEndDate.formattedDate;
		var startTime = this.view.startTime.getSelectedTime();
		var endTime = this.view.EndTime.getSelectedTime();
		if (startDate == endDate) {
			if (endTime < startTime) {
				alert("End time should be greater than the Start time");
				return false;
			}
		}
		return true;
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function validateStartDate
	 * @description - This function will validate start date
	 **/
	validateStartDate: function (startDate, endDate) {
        try{
		if (endDate !== undefined && endDate !== null && endDate !== "") {
			if (startDate > endDate) {
				this.view.calEventStartDate.skin = "skncalError";
				this.view.calEventStartDate.setFocus(false);
				alert("Start Date Should Not be Greater then end Date");
				return;
			} else {
				this.view.calEventStartDate.skin = "skncalNormal";
				return true;
			}
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function validateEndDate
	 * @description - This function will validate end date
	 **/
	validateEndDate: function (startDate, endDate) {
        try{
		if (endDate !== undefined && endDate !== null && endDate !== "") {
			if (endDate < startDate) {
				this.view.calEventEndDate.skin = "skncalError";
				this.view.calEventEndDate.setFocus(false);
				alert("End Date should not be less then Start Date");
				return;
			} else {
				this.view.calEventEndDate.skin = "skncalNormal";
				return true;
			}
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }

	},
	/**
	 * @function getSelectedLocationType
	 * @description - This function will get the selected Location type based on selection of radio button on UI
	 * @return {Number} - selected key, the type of location either online or offline
	 **/
	getSelectedLocationType: function () {
       try{
		return Number(this.view.radioLocation.selectedKey);
       }
      catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
	/**
	 * @function getAddressData
	 * @description - This function will get the location data from the UI
	 * @return {Object} - Address Data fetched from UI as JSON
	 **/
	getAddressData: function () {
        try{
		var addressData = {};
		addressData.location = this.view.txtAddressLine1.text;
		addressData.addressLine1 = this.view.txtAddressLine2.text;
		addressData.cityname = this.view.txtCity.text;
		if ((addressData.addressline1 !== null && addressData.addressline1 !== "") || (addressData.addressLine2 !== null && addressData.addressLine2 !== "")) {
			if (addressData.cityname !== null && addressData.cityname !== "") {
				this.locationData = {};
				this.locationData = addressData;
				return addressData;
			} else {
				alert("City Name Should not be empty");
				this.doTabActions("btnBasic");
				return;
			}
		} else {
			alert("Please fill AddressLine1 or AddressLine2");
			this.doTabActions("btnBasic");
			return;
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getWebexDetails
	 * @description - This function will get the webex details if entered
	 **/
	getWebexDetails: function () {
      try{
		var webexDetails = this.view.txtWebexDetails.text;
		if (webexDetails !== null && webexDetails !== "") {
			this.locationData = {};
			this.locationData.location = webexDetails;
			return this.locationData;
		} else {
			alert("Webex Details should not be empty");
			this.doTabActions("btnBasic");
			return;
        }
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setEventCategory
	 * @description - This function will set the event category
	 **/
	setEventCategory: function (type) {
        try{
		var key = 2;
		if (type !== undefined && type !== null) {
			switch (type) {
			case "Training":
				key = 1;
				break;
			case "Workshops":
				key = 2;
				break;
			case "Hackathon":
				key = 3;
				break;
			case "Speaker Series":
				key = 4;
				break;
			case "Confrence":
				key = 5;
				break;
			default:
				kony.print("Not a validkey");
			}
			this.view.listCategory.selectedKey = key;
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setEventType
	 * @description - This function will set the event type
	 **/
	setEventType: function (type) {
      try{
		var key = 2;
		if (type !== undefined) {
			switch (type) {
			case "1":
				key = 1;
				break;
			case "2":
				key = 2;
				break;
			default:
				kony.print("Not a validkey");
			}
		}
		this.view.radioLocation.selectedKey = key;
		this.onSelectOfLocationType();
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setLocationOnMap
	 * @description - This function will get the location data from UI
	 * this function will call the service to fetch lat lon
	 * @param {function} - callback function to be executed after fetching the location
	 **/
	setLocationOnMap: function (callback) {
       try{
		var addData = this.getAddressData();
		var addressData = {};
		if (addData !== undefined) {
			addressData.address = addData.location + addData.addressLine1 + addData.cityname;
			this.addressToLatLon(addressData, callback);
		} else {}
       }
      catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setLocationDataOnMap
	 * @description - This function will map the lat lon on map in UI
	 * @param {Object} - lat lon reponse based on the location data
	 **/
	setLocationDataOnMap: function (response) {
       try{
		this.view.mapGoogleMap.locationData = [{
				"lat": response.loc_lat,
				"lon": response.loc_lng,
				"name": response.address,
				"desc": ""
			}
		];
		this.view.flexHover.isVisible = false;
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setMapDataForInsert
	 * @description - This function will map the lat lon from response for insertion to backend
	 * @param {Object} - lat lon reponse based on the location data
	 **/
	setMapDataForInsert: function (response) {
       try{
		this.locationData.latitude = response.loc_lat;
		this.locationData.longitude = response.loc_lng;
		this.getEventDataForCreateEvent();
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function onSelectOfLocationType
	 * @description - This function will be called on selection of location radio buttons
	 * this function will set the event type(online(2) or offline(1)) based the slected key
	 **/
	onSelectOfLocationType: function () {
       try{
		var selectedKey = Number(this.view.radioLocation.selectedKey);
		if (selectedKey == 2) {
			this.eventType = 2;
			this.view.flexEventAddressInfo.isVisible = true;
			this.view.txtWebexDetails.isVisible = false;
		} else {
			this.eventType = 1;
			this.view.flexEventAddressInfo.isVisible = false;
			this.view.txtWebexDetails.isVisible = true;
		}
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
	/**
	 * @function getEventData
	 * @description - This function will get the event data
	 * @return {Object} - returns a JSON object with event data
	 **/
	getEventData: function () {
        try{
		var eventData = {};
		eventData.name = this.getEventTitle();
		if (eventData.name !== undefined) {
			eventData.event_category = this.getEventCatagory();
			if (eventData.event_category !== undefined) {
				eventData.start_date = this.getStartDate();
				if (eventData.start_date !== undefined) {
					eventData.end_date = this.getEndDate();
					if (eventData.end_date !== undefined) {
						eventData.event_type = this.getEventType();
						eventData.long_desc = this.getLongDesc();
						eventData.short_desc = this.getShortDesc();
						return eventData;
					}
				}
			}
		}
		this.doTabActions("btnBasic");
		return;
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getEventDataForCreateEvent
	 * @description - This function will call the createevent function
	to create the event on back end
	 **/
	getEventDataForCreateEvent: function () {
        try{
		this.createEvent(this.getEventData());
        }
        catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
	/**
	 * @function addressToLatLon
	 * @description - This function will fetch the lat lon based on the location text
	 * @param {Object} -
	 **/
	addressToLatLon: function (addressData, successCallback) {
        try{
		var intObj = kony.sdk.getCurrentInstance().getIntegrationService("getLatLang");
		intObj.invokeOperation("getBounds", {},
			addressData,
			successCallback,
			function (error) {
			kony.print("Something Went Wrong " + JSON.stringify(error));
		});
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function onClickProceed
	 * @description - This function will call getEventDataForCreateEvent on click of publish button
	 * This functiojn will check the location type,
	 * if location type is online calls getEventDataForCreateEvent
	 * if location type is offline calls setLocationOnMap to fetch the lat lon for the location
	 **/
	onClickProceed: function () {
        try{
		if (this.getSelectedLocationType() === 2) {
			this.setLocationOnMap(this.setMapDataForInsert);
		} else {
			if (this.getWebexDetails !== undefined) {
				this.getEventDataForCreateEvent();
			}
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/*** Start Service calls For Creating Event ****/

	/**
	 * @function createEvent
	 * @description - This function will make the service call to the backend and create an event in back end
	 * @params {Object JSON } - eventData required to create an event
	 **/
	createEvent: function (eventData) {
        try{
		showLoading(this);
		var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
				"access": "online"
			});
		var dataObject = new kony.sdk.dto.DataObject("event");
		dataObject.setRecord(eventData);
		var options = {
			"dataObject": dataObject
		};
		objSvc.create(options,
			this.createEventSuccessCallback.bind(this),
			this.createEventFailureCallback.bind(this));
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createEventSuccessCallback
	 * @description - This function is the success call back for create event
	 * this function will call createEventLocation to create the location in the back end for the event
	 * @params {Object JSON } -success response from the back end
	 **/
	createEventSuccessCallback: function (response) {
        try{
		this.event_id = response.event_id;
		this.locationData.event_id = this.event_id;
		this.createEventLocation();
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createEventFailureCallback
	 * @description - This function is the Failure call back for create event
	 * @params {Object JSON } -Error response from the back end
	 **/
	createEventFailureCallback: function (error) {
        try{
		kony.application.dismissLoadingScreen();
		alert("Something went wrong. Please try later.");
        }catch(err){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createEventLocation
	 * @description - This function will make the service call to the backend and create an Location in back end for the event
	 **/
	createEventLocation: function () {
        try{
		var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
				"access": "online"
			});
		var dataObject = new kony.sdk.dto.DataObject("location");
		dataObject.setRecord(this.locationData);
		var options = {
			"dataObject": dataObject
		};
		objSvc.create(options,
			this.createEventLocationSuccessCallback.bind(this),
			this.createEventLocationFailureCallback.bind(this));
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createEventLocationSuccessCallback
	 * @description - This function is the success call back for create event
	 * this function will check if the bannerImage is selected or not
	 * if banner selected calls createBannerImage To banner image in the back end
	 * if banner not selected calls createGallery to create gallery image(s) in the back end
	 * @params {Object JSON } -success response from the back end
	 **/
	createEventLocationSuccessCallback: function (response) {
        try{
		if (this.bannerImage !== {}) {
			this.createBannerImage();
		} else {
			this.createGalleryImage();
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createEventLocationFailureCallback
	 * @description - This function is the Failure call back for create Location
	 * @params {Object JSON } -Error response from the back end
	 **/
	createEventLocationFailureCallback: function (error) {
        try{
		kony.application.dismissLoadingScreen();
		alert("Something went wrong. Please try later.");
        }catch(err){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createBannerImage
	 * @description - This function will make the service call to the backend and create an banner in back end for the event
	 **/
	createBannerImage: function () {
        try{
		if (this.bannerImage !== null && this.bannerImage !== {} && this.bannerImage !== "") {
			var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
					"access": "online"
				});
			var dataObject = new kony.sdk.dto.DataObject("event_banners");
			this.bannerImage.event_id = this.event_id;
			dataObject.setRecord(this.bannerImage);
			var options = {
				"dataObject": dataObject
			};
			objSvc.create(options,
				this.createBannerImageSuccessCallback.bind(this),
				this.createBannerImageFailureCallback.bind(this));
		} else {
			kony.print("Banner Image Not DEfined");
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createBannerImageSuccessCallback
	 * @description - This function is the success call back for create Banner Images
	 * calls createGallery to create gallery image(s) in the back end
	 * @params {Object JSON } -success response from the back end
	 **/
	createBannerImageSuccessCallback: function (response) {
        try{
		this.createGalleryImage();
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createBannerImageFailureCallback
	 * @description - This function is the Failure call back for create banner image
	 * @params {Object JSON } -Error response from the back end
	 **/
	createBannerImageFailureCallback: function (error) {
		alert("Something went wrong while uploading images");
		kony.application.dismissLoadingScreen();
	},

	/**
	 * @function createGalleryImage
	 * @description - This function will make the service call to the backend and create an gallery image(s) in back end for the event
	 * this function will check the gallery images length and create all the images one by one
	 * this.eventImages - the controller variable used to store the selected images
	 * this.currentEventImage - the controller variable user to store the current iterator and initialized to 0
	 * if the gallery images length is 0, calls getsessiondata to get the created sessions from UI
	 **/
	createGalleryImage: function () {
        try{
		if (this.eventImages.length > 0) {
			var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
					"access": "online"
				});
			var dataObject = new kony.sdk.dto.DataObject("event_images");
			this.eventImages[this.currentEventImage].event_id = this.event_id;
			dataObject.setRecord(this.eventImages[this.currentEventImage]);
			var options = {
				"dataObject": dataObject
			};
			objSvc.create(options,
				this.createGalleryImageSuccessCallback.bind(this),
				this.createGalleryImageFailureCallback.bind(this));
		} else {
			this.getSessionData();
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createGalleryImageSuccessCallback
	 * @description - This function is the success call back for create Gallery Image
	 * calls createGallery to create gallery image(s) , <this.eventImages.length> times
	 * if all the images are created successfully in the backend, calls the getsessiondate to fetch session data from the UI
	 * @params {Object JSON } -success response from the back end
	 **/
	createGalleryImageSuccessCallback: function (reponse) {
       try{
		this.currentEventImage++;
		if (this.eventImages.length > this.currentEventImage) {
			this.createGalleryImage();
		} else {
			this.currentEventImage = 0;
			this.getSessionData();
		}
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createBannerImageFailureCallback
	 * @description - This function is the Failure call back for create gallery image
	 * @params {Object JSON } -Error response from the back end
	 **/
	createGalleryImageFailureCallback: function () {
        try{
		kony.application.dismissLoadingScreen();
		alert("Something went wrong while uploading images");
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
      
	},

	/**
	 * @function showSession
	 * @description - This function will call the setDateRangeForSessions to set the valid start date and end date for sessions
	 * this function will navigate to sessions page
	 **/
	showSession: function () {
        try{
		this.setDateRangeForSessions();
		this.view.flexScrollEvent.isVisible = false;
		this.view.FlexScrollSession.isVisible = true;
		kony.application.dismissLoadingScreen();
		this.view.forceLayout();
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setDateRangeForSessions
	 * @description - This function will set the valid start date and end date for sessions created dynamically
	 **/
	setDateRangeForSessions: function () {
        try{
		var widgets = this.view.FlexScrollSession.widgets();
		for (var i = 0; i < widgets.length; i++) {
			if (this.isSearchTextPresent(widgets[i].id, "session") && !this.isSearchTextPresent(widgets[i].id, "sessionFooter")) {
				//calling Exposed API for session component to set the date range
				this.view[widgets[i].id].setDateRange(this.view.calEventStartDate.formattedDate,
					this.view.calEventEndDate.formattedDate,
					this.view.startTime.getSelectedTime(),
					this.view.EndTime.getSelectedTime());
			}
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function showEvent
	 * @description -  this function will navigate to Events basic info page
	 **/
	showEvent: function () {
        try{
		this.view.flexScrollEvent.isVisible = true;
		this.view.FlexScrollSession.isVisible = false;
		kony.application.dismissLoadingScreen();
		this.view.forceLayout();
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * session operations start
	 * The following part will deals with session operations.
	 * the sessiontemp is the component which is created statically under component section
	 * As the sessions have to be created dynamically, the sessiontemp component is created
	 * when ever the user click on new session instead of creating all the widgets dynamically,
	 * only the sessiontemp component which includes all the widgets will be added dynamically using the unique ID.
	 **/

	uniqueId: 1, // maintains the ID of the component created dynamically
	lastTop: 110, // maintains the Top of the component created dynamically

	/**
	 * @function createUI
	 * @description -  this function will call create session, footer, and set publish button top
	 **/
	createUI: function () {
        try{
		this.uniqueId++;
		this.createSession(); // add sessiontemp component with unique id
		this.createFooter(); // add  footer component with unique id
		this.setPublish(); // set the publish button's top according to the created session height
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createSession
	 * @description -  this function will dynamically add the sessiontemp component dynamically in the form
	 **/
	createSession: function () {
        try{
		var session = new com.konyenb.sessionTemp({
				"clipBounds": true,
				"height": "100%",
				"id": "session" + (this.uniqueId),
				"isVisible": true,
				"layoutType": kony.flex.FLOW_HORIZONTAL,
				"left": "0dp",
				"masterType": constants.MASTER_TYPE_USERWIDGET,
				"skin": "slFbox",
				"top": this.lastTop + "%",
				"width": "100%"
			}, {}, {});
		this.lastTop = this.lastTop + 100;
		this.view.FlexScrollSession.add(session);
		this.view["session" + (this.uniqueId)].setEditData = "";
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createFooter
	 * @description -  this function will dynamically add the sessionfooter component dynamically in the form
	 **/
	createFooter: function () {
       	try{
		var sessionFooter = new com.konyenb.SessionFooter({
				"autogrowMode": kony.flex.AUTOGROW_NONE,
				"clipBounds": true,
				"height": "10%",
				"id": "sessionFooter" + (this.uniqueId),
				"isVisible": true,
				"layoutType": kony.flex.FREE_FORM,
				"left": "0dp",
				"masterType": constants.MASTER_TYPE_USERWIDGET,
				"skin": "slFbox",
				"top": this.lastTop + "%",
				"width": "100%"
			}, {}, {});
		this.lastTop = this.lastTop + 10;
		this.view.FlexScrollSession.add(sessionFooter);
		this.view["sessionFooter" + this.uniqueId].btnAddOnclick = this.createUI;
		this.view["sessionFooter" + this.uniqueId].btnDelOnclick = this.removeSession;
		this.view["sessionFooter" + this.uniqueId].isAddVisible = true;
		this.view["sessionFooter" + this.uniqueId].isDelVisible = true;
		this.view["sessionFooter" + this.uniqueId].isEditVisible = false;
		this.view["session" + this.uniqueId].setDateRange(this.view.calEventStartDate.formattedDate,
			this.view.calEventEndDate.formattedDate,
			this.view.startTime.getSelectedTime(),
			this.view.EndTime.getSelectedTime());
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setPublish
	 * @description -  this function will set the publish button top
	 **/
	setPublish: function () {
        try{
		this.view.flexPublishEvent.top = this.lastTop + "%";
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function removeSession
	 * @description -  this function will delete the sessioncompent and footer component from the
	 * form when the delete button is clicked
	 **/
	removeSession: function (eventObject) {
        try{
		var id = eventObject.parent.kmasterid; // get the footercomp id
		var widgets = this.view.FlexScrollSession.widgets(); // get all the widgets list
		var i;
		var wLength = widgets.length;
		if (widgets.length === 0) {
			return;
		}
		// iterate through all the widgets and find the matched widget with the selected id
		for (i = 0; i < widgets.length; i++) {
			if (widgets[i].id === id) {
				break;
			}
		}

		// Start iterating after the selected id and change the top of the other widgets since the slected widgets will be deleted
		for (var j = (i + 1); j < widgets.length; j++) {
			//change the top only for sessiontemplate and sessionfooter
			if (this.isSearchTextPresent(widgets[j].id, "session") || this.isSearchTextPresent(widgets[j].id, "sessionFooter")) {
				this.view[widgets[j].id].top = (Number((this.view[widgets[j].id].top).split("%")[0]) - 110) + "%";
			}
		}
		//As the selected widget is footertemp, removing the selected footertemp component and sessiontemp component
		this.view.FlexScrollSession.remove(this.view[widgets[i - 1].id]);
		this.view.FlexScrollSession.remove(this.view[widgets[i - 1].id]);

		//if the Widget length is three and if the deletion happened then it means no sessions are present in the screen
		// so create the default add session button and set the publish button to the top 10%
		if (wLength === 3) {
			this.createDefaultAddSessionButton();
			this.view.flexPublishEvent.top = "10%";
		} else {
			// this will set the top of the publish button accordingly
			this.view.flexPublishEvent.top = (Number((this.view.flexPublishEvent.top).split("%")[0]) - 110) + "%";
		}
		this.lastTop = this.lastTop - 110; // update the last top value
		this.view.forceLayout();
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function isSearchTextPresent
	 * @description -  this function will search for the search text in the value
	 * @param {String} - value - The original String
	 * @param {searchText} - search text
	 * @return {Boolean} - returns search result as boolean
	 **/
	isSearchTextPresent: function (value, searchText){
        try{
		var result = value.indexOf(searchText, 0);
		if (result !== -1) {
			return true;
		} else {
			return false;
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
	overAllSessionData: [],

	/**
	 * @function getSessionDataFromUI
	 * @description -  this function will fetch the data for sessions added
	 * @return {Array} - returns overall session data as an array
	 **/
	getSessionDataFromUI: function () {
        try{
		this.overAllSessionData = [];
		var widgets = this.view.FlexScrollSession.widgets(); // get all the widgets
		for (var i = 0; i < widgets.length; i++) {
			// Gets data from sessiontemp component only not from the session footer temp
			if (this.isSearchTextPresent(widgets[i].id, "session") && !this.isSearchTextPresent(widgets[i].id, "sessionFooter")) {
				if (this.view[widgets[i].id].getData() !== undefined) { // get data() is the exposed method in the component to get the sesion data
					this.overAllSessionData.push(JSON.parse(JSON.stringify(this.view[widgets[i].id].getData())));
				} else {
					return;
				}
			}
		}
		return this.overAllSessionData;
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getSessionData
	 * @description -  this function will get session date from UI and
	 * calls the service call accordingly
	 **/
	getSessionData: function () {
        try{
		if (this.getSessionDataFromUI() !== undefined) {
			if (this.overAllSessionData.length > 0) {
				if (this.isEditMode) { // if the session in edit mode calls getDataForUpdate to get the updated data
					this.getDataForUpdate(this.overAllSessionData);
				} else {
					this.createSessiononBk(); // if the session is not in edit mode, calls service call to create the sessions
				}
			} else {
				//if the over all session data is empty
				if (this.isEditMode) { // if the session inedit mode, calls the getDataForUpdate to get the deleted sessions
					this.getDataForUpdate(this.overAllSessionData);
				} else {
					this.publishEvent(); // if the session not in edit mode, it means there are no sessions so calls publish event
				}
			}
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function boxUploadSuccess
	 * @description - This function is teh success callback for box upload success
	 * this function will parse the response of uploaded images
	 **/
	boxUploadSuccess: function (result, type) {
        try{
		var imagesSelected = [];
		if (type === 1) {
			this.view.lblUploadSuccess.height = "30%";
			this.view.lblUploadSuccess.text = result.results.length + " Image(s) Uploaded";
			this.view.forceLayout();
			this.bannerImage = {};
			for (var i = 0; i < result.results.length; i++) {
				var banner = {};
				banner.banner_url = result.results[i].download_url;
				banner.img_name = result.results[i].file_name;
				imagesSelected.push(banner);
				this.bannerImage = banner; // controller variable which stores the banner image
			}
			this.view.lblBrowseFiles.text = imagesSelected[0].img_name;
		} else {
			this.view.lblGallerySuccess.height = "30%";
			this.view.lblGallerySuccess.text = result.results.length + " Image(s) Uploaded";
			this.view.forceLayout();
			for (var j = 0; j < result.results.length; j++) {
				var isImagePresent = false;
				var event_image = {};
				event_image.image_url = result.results[j].download_url;
				event_image.img_name = result.results[j].file_name;
				event_image.del_Image = EVENT_CONSTANS.IMAGES.REMOVESPEAKER;
				var data = this.view.segGallery.data;
				if (data.length > 0) {
					for (var k = 0; k < data.length; k++) {
						if (result.results[j].download_url === data[k].image_url) {
							isImagePresent = true;
							k = data.length;
						}
					}
					if (!isImagePresent) {
						this.eventImages.push(event_image); // controller variable which stores the gallery images
					}
				} else {
					this.eventImages.push(event_image);
				}
			}
			this.setGalleryData(this.eventImages);
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function removeGalleryImage
	 * @description - This function remove the image from the segment if deleted button is clicked for particular image
	 * @context - {JSON} - JSON object from template controller which give seleted row index on click of del button of any row
	 **/
	removeGalleryImage: function (context) {
       try{
		this.view.segGallery.removeAt(context.rowIndex);
		if (this.view.segGallery.data.length === 0) {
			this.view.segGallery.isVisible = false;
			this.view.forceLayout();
		}
		this.eventImages = this.view.segGallery.data; // re setting the data after deletion
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setGalleryData
	 * @description - This function set the data to segement
	 * @data - {Array of JSONs} - array of images to be set
	 **/
	setGalleryData: function (data) {
        try{
		this.view.segGallery.isVisible = true;
		this.view.segGallery.widgetDataMap = {
			"lblBImage1": "img_name",
			"ImgDelBImage1": "del_Image"
		};
		this.view.segGallery.setData(data);
		this.view.forceLayout();
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/*** session Back End operations Start***/

	sessionCount: 0, // iterator varible to maintain the session count created
	speakerCount: 0, // iterator variable to maintain the speaker count created
	sessionId: "", // controller variable to store the session_id

	/**
	 * @function createSessiononBk
	 * @description - This function will make the service call to the backend and create an session(s) in back end for the event
	 * this function will check the overall session data length and create all the sessions one by one
	 * this.overAllSessionData - the controller variable used to store the added sessions and speakers
	 * this.sessionCount - the controller variable user to store the current iterator and initialized to 0
	 * if the overall session data  length is 0, calls publish event
	 **/
	createSessiononBk: function () {
		try {
			if (this.overAllSessionData.length) {
				showLoading(this);
				var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
						"access": "online"
					});
				var dataObject = new kony.sdk.dto.DataObject("event_sessions");
				var session = this.overAllSessionData[this.sessionCount].session;
				session.event_id = this.event_id;
				dataObject.setRecord(session);
				var options = {
					"dataObject": dataObject
				};
				objSvc.create(options,
					this.createSessiononBkSuccessCallback.bind(this),
					this.createSessiononBkFailureCallback.bind(this));
			} else {
				this.publishEvent();
			}
		} catch (err) {
			kony.application.dismissLoadingScreen();
		}
	},

	/**
	 * @function createSessiononBkSuccessCallback
	 * @description - This function is the successcall back create session
	 * this function will check the overall session data length and calls the create speakers on back end
	 * this function will check for the speakers associated to the created session in overallsessiondata
	 * if the session speakers are present, calls createSpeakerOnBk
	 * if the session speakers are not present, increase the iterator and checks for the sessions in overallsessiondata length with iterator value
	 * if the session data length is greater than iterator, it means no session, so calls publish event
	 * else calls createSessiononBk to create session
	 * @param {Object} - response from the backend
	 **/
	createSessiononBkSuccessCallback: function (response) {
        try{
		this.sessionId = response.event_session_id;
		if (this.overAllSessionData[this.sessionCount].speakers.length > 0) {
			this.speakerCount = 0;
			this.createSpeakerOnBk();
		} else {
			this.sessionCount++;
			if (this.overAllSessionData.length > this.sessionCount) {
				this.createSessiononBk();
			} else {
				this.publishEvent();
			}
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	// failure call back for create session
	createSessiononBkFailureCallback: function (error) {
		kony.application.dismissLoadingScreen();
		alert("Something went wrong. Please try later.");
	},

	/**
	 * @function createSpeakerOnBk
	 * @description - This function will create speakers on back end
	 **/
	createSpeakerOnBk: function () {
		try {
			var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
					"access": "online"
				});
			var dataObject = new kony.sdk.dto.DataObject("presenter");
			var speaker = this.overAllSessionData[this.sessionCount].speakers[this.speakerCount];
			speaker.session_id = this.sessionId;
			speaker.event_id = this.event_id;
			dataObject.setRecord(speaker);
			var options = {
				"dataObject": dataObject
			};
			objSvc.create(options,
				this.createSpeakerOnBkSuccessCallback.bind(this),
				this.createSpeakerOnBkFailureCallback.bind(this));
		} catch (err) {
			kony.application.dismissLoadingScreen();
			alert("Something went wrong. Please try later.");
		}

	},

	/**
	 * @function createSpeakerOnBkSuccessCallback
	 * @description - This function is the success call back create speakers
	 * this function will check the overall session data length and calls the create speakers on back end
	 * @param {Object} - response from the backend
	 **/
	createSpeakerOnBkSuccessCallback: function (reponse) {
        try{
		this.speakerCount++;
		if (this.overAllSessionData[this.sessionCount].speakers.length > this.speakerCount) {
			// calling create speaker if the speaker present for the session
			this.createSpeakerOnBk();
		} else {
			// increasing the iterator for session and move to next session
			this.sessionCount++;
			if (this.overAllSessionData.length > this.sessionCount) {
				this.createSessiononBk();
			} else {
				// calling publish event if both speakers and session are created completely
				this.publishEvent();
			}
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }          
	},

	// failure call back for create speakers
	createSpeakerOnBkFailureCallback: function (error) {
		kony.application.dismissLoadingScreen();
		alert("Something went wrong. Please try later.");
	},

	/**
	 * @function publishEvent
	 * @description - This function will update the event's isdisabled property to 0 marking event as published
	 **/
	publishEvent: function () {
      try{
		var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
				"access": "online"
			});
		var dataObject = new kony.sdk.dto.DataObject("event");
		var data = {
			event_id: this.event_id,
			isdisabled: "0"
		};
		dataObject.setRecord(data);
		var options = {
			"dataObject": dataObject
		};
		objSvc.update(options,
			this.publishEventSuccessCallback.bind(this),
			this.publishEventFailureCallback.bind(this));
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function publishEventSuccessCallback
	 * @description - This function is the success callback for publish event
	 * this function will make navigation to frmAllEvents to list the created event
	 **/
	publishEventSuccessCallback: function (response) {
      try{
		this.overAllSessionData = [];
		this.sendPushNotification();
		var nav = new kony.mvc.Navigation("frmAllEvents");
		nav.navigate();
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
  
	// Failure call back of publish event
	publishEventFailureCallback: function (error) {
		kony.application.dismissLoadingScreen();
		alert("Something went wrong. Please try later.");
	},

	/******** Edit operation start*****/

	eventBkendData: {}, // controller variable to store the backend data when the event is open in edit mode

	/**
	 * @function setEventForEdit
	 * @description - This function will set the selected event data to event's page for edit
	 * @param {JSON object} - selected event detail
	 **/
	setEventForEdit: function (response) {
        try{
		this.eventBkendData = {};
		this.event_id = response.event_id; //storing selected event_id
		this.location_id = response.location[0].location_id; //storing selected location id

		//assigning actions to buttonProcceedtpsession button on the header tab
		this.view.EventsHeader.btnSessions.onClick = this.openSessionInEditMode;
		this.view.btnProceedToSession.onClick = this.openSessionInEditMode;

		//setting event Name
		this.view.txtEventName.text = response.name;

		//setting Short Description
		if (response.short_desc !== undefined) {
			this.view.txtShort.text = response.short_desc;
		} else {
			this.view.txtShort.text = "";
		}

		//Setting Long Description
		if (response.long_desc !== undefined)
			this.view.txtEventLDesc.text = response.long_desc;
		else {
			this.view.txtEventLDesc.text = "";
		}
        var dateFromServer = new Date(response.start_date);
        var localDate =  new Date(dateFromServer.getTime()-dateFromServer.getTimezoneOffset()*60*1000);
		var date_com = (localDate.toLocaleDateString()).split("/");
        var time = (localDate.toTimeString()).split(" ")[0];
		//Setting Start Date
		this.view.calEventStartDate.dateComponents = [date_com[1], date_com[0], date_com[2]];
		this.view.startTime.TimeValue = time.slice(0, 5);
         
        dateFromServer = new Date(response.end_date);
        localDate =  new Date(dateFromServer.getTime()-dateFromServer.getTimezoneOffset()*60*1000);
        date_com = (localDate.toLocaleDateString()).split("/");
        time = (localDate.toTimeString()).split(" ")[0];
          
		//Setting End Date
		this.view.calEventEndDate.dateComponents = [date_com[1], date_com[0], date_com[2]];
		this.view.calEventEndDate.validStartDate = this.view.calEventStartDate.dateComponents;
		this.view.EndTime.TimeValue = time.slice(0, 5);

		if (response.event_type == "2") {
			//Setting Address
			if (response.location[0].location !== undefined)
				this.view.txtAddressLine1.text = response.location[0].location;
			else
				this.view.txtAddressLine1.text = "";

			if (response.location[0].addressLine1 !== undefined)
				this.view.txtAddressLine2.text = response.location[0].addressLine1;
			else
				this.view.txtAddressLine2.text = "";

			this.view.txtCity.text = response.location[0].cityname;

			//Storing backend address data to controller
			this.eventBkendData.location = JSON.parse(JSON.stringify(this.getAddressData()));
		} else {
			this.view.txtWebexDetails.text = response.location[0].location;
			this.eventBkendData.location = JSON.parse(JSON.stringify(this.getWebexDetails()));
		}
		// setting banner image
        if(response.event_banners.length)
			this.setBannerImage(response.event_banners[0]);

		//setting event type
		this.setEventType(response.event_type);

		//setting event category
		this.setEventCategory(response.event_category);

		//setting flex visibility to show events
		this.view.flexScrollEvent.isVisible = true;
		this.view.FlexScrollSession.isVisible = false;

		//setting controller variable to store event data;
		this.eventBkendData.eventData = JSON.parse(JSON.stringify(this.getEventData()));
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setBannerImage
	 * @description - This function will set the banner image from the back end data
	 * @param {JSON object} - selected event detail
	 **/
	setBannerImage: function (response) {
        try{
		this.bannerImageBk = {};
		this.bannerImage = {};
		if (response.event_banner_id !== undefined) {
			if (response.img_name !== undefined) {
				this.view.lblBrowseFiles.text = response.img_name;
			}
			this.bannerImageBk.event_banner_id = response.event_banner_id;
			this.bannerImageBk.img_name = response.img_name;
			this.bannerImageBk.banner_url = response.banner_url;
			this.bannerImage = JSON.parse(JSON.stringify(this.bannerImageBk));
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function setGalleryDataForEdit
	 * @description - This function will set the gallery images from the back end data
	 * @param {Array JSON object} - selected event images
	 **/
	setGalleryDataForEdit: function (eventImages) {
      try{
		for (var i = 0; i < eventImages.length; i++) {
			eventImages[i].del_Image = EVENT_CONSTANS.IMAGES.REMOVESPEAKER;
		}
		this.eventImagesFromBk = eventImages;
		this.eventImages = JSON.parse(JSON.stringify(this.eventImagesFromBk));
		this.setGalleryData(this.eventImages);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	//Fetching updated event data
	/**
	 * @function getImageToCreate
	 * @description - This function will fetch updated gallery images and banner image
	 **/
	getImageToCreate: function () {
        try{
		var i;
		this.imagesToCreate = [];
		this.imagesToDel = [];
		//checking backend images length
		if (this.eventImagesFromBk.length > 0) {
			if (this.eventImages.length > 0) {
				for (i = 0; i < this.eventImages.length; i++) {
					//getting images to create
					if (this.eventImages[i].event_image_id === undefined) { //if the event_image_id is not defined then the image will be added newly
						var imageToCreate = this.eventImages[i];
						imageToCreate.event_id = this.event_id;
						this.imagesToCreate.push(imageToCreate); // storing newly created images
					}
				}
				this.create("event_images", this.getDeletedImages, this.imagesToCreate); // calling create service call
			} else {
				//getting images to delete
				// if the eventImages length is 0 and eventImagesFromBackend length is greater then zero
				// it means all the images are deleted
				for (i = 0; i < this.eventImagesFromBk.length; i++) {
					var imageToDelete = {
						"event_image_id": this.eventImagesFromBk[i].event_image_id
					};
					this.imagesToDel.push(imageToDelete);
				}
				this.delete ("event_images", this.getUpdatedBannerImage, this.imagesToDel); // calling delete service
			}
		} else {
			// if the event images greater than zero and backend images is zero it means all are newly added images
			if (this.eventImages.length > 0) {
				for (i = 0; i < this.eventImages.length; i++) {
					this.eventImages[i].event_id = this.event_id;
					this.imagesToCreate.push(this.eventImages[i]);
				}
				this.create("event_images", this.getUpdatedBannerImage, this.imagesToCreate); //calling create service
			} else {
				this.getUpdatedBannerImage(); //fetch banner image if there is no change in the gallery image
			}
		}
        }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getImageToCreate
	 * @description - This function will fetch deleted gallery images
	 **/
	getDeletedImages: function () {
      try{
		for (var key in this.eventImagesFromBk) {
			var isDeleted = this.isImageIdPresent("event_image_id", this.eventImagesFromBk[key].event_image_id, this.eventImages);
			if (isDeleted === undefined) {
				this.imagesToDel.push({
					"event_image_id": this.eventImagesFromBk[key].event_image_id
				});
			}
		}
		this.delete ("event_images", this.getUpdatedBannerImage, this.imagesToDel);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function isImageIdPresent
	 * @description - This function will check whether the value is present in edited data
	 **/
	isImageIdPresent: function (key, value, editedData) {
      try{
		for (var i = 0; i < editedData.length; i++) {
			if (editedData[i][key] === undefined) {
				continue;
			}
			if (editedData[i][key] === value) {
				return editedData[i];
			}
		}
		return;
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function isImageIdPresent
	 * @description - This function will fetch the updated banner image
	 **/
	getUpdatedBannerImage: function () {
      try{
		if (this.bannerImageBk.banner_url !== this.bannerImage.banner_url) {
			this.bannerImageBk.img_name = this.bannerImage.img_name;
			this.bannerImageBk.banner_url = this.bannerImage.banner_url;
			this.update("event_banners", this.eventImagesSuccessCommon, [this.bannerImageBk]); //calls update service call
		} else {
			this.getEditedEvent();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	//success callback for images
	eventImagesSuccessCommon: function () {
      try{
		this.getEditedEvent(); // calling editedevent function to fetch the updated event
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getEditedEvent
	 * @description - This function will fetch the edited event details
	 **/
	getEditedEvent: function () {
      try{
		this.finalUpdatedEventData = [];
		var editedEventData = this.getEventData();
		if (editedEventData !== undefined) {
			var updatedEventData = this.checkEventAndGetUpdateList(this.eventBkendData.eventData, editedEventData);
			if (updatedEventData !== undefined) {
				this.finalUpdatedEventData.push(updatedEventData);
				this.update("event", this.getupdatedLocation, this.finalUpdatedEventData); //calls update service call
			} else {
				this.getupdatedLocation(); //calls getupdatedLocation to get the updated location details
			}
		} else {
			this.getupdatedLocation(); //calls getupdatedLocation to get the updated location details
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function checkEventAndGetUpdateList
	 * @description - This function will compare bakend data and data from UI to get the updated feilds
	 * @param {JSON} - eventBk - event backend data
	 * @param {JSON} - eventEt - event data from UI
	 **/
	checkEventAndGetUpdateList: function (eventBk, eventEt) {
      try{
		var event = {};
		var isChange = false;
		for (var key in eventBk) {
			if (eventBk[key] !== eventEt[key]) {
				isChange = true;
				event[key] = eventEt[key];
			}
		}
		if (isChange) {
			event.event_id = this.event_id;
			return event;
		} else {
			return;
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getupdatedLocation
	 * @description - This function will fetch the edited location details
	 * if there is any change in the location data , calls setLocationOnMap to fetch the lat long details
	 **/
	getupdatedLocation: function () {
      try{
		this.finalUpdatedLocationData = [];
		var editedLocationData = "";
		if (this.getEventType() === 2) {
			editedLocationData = this.getAddressData();
		} else {
			editedLocationData = this.getWebexDetails();
		}
		if (editedLocationData !== undefined) {
			var updatedLocationData = this.checkLocationAndGetUpdatedData(this.eventBkendData.location, editedLocationData);
			if (updatedLocationData !== undefined) {
				this.finalUpdatedLocationData.push(updatedLocationData);
				if (this.getEventType() === 2) {
					this.setLocationOnMap(this.updatedLocCallback);
				} else {
					this.update("location", this.updateLocationSuccessDataCallback, this.finalUpdatedLocationData);
				}
			} else {
				this.updateLocationSuccessDataCallback();
			}
		} else {
			this.updateLocationSuccessDataCallback();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
	/**
	 * @function checkLocationAndGetUpdatedData
	 * @description - This function will compare bakend data and data from UI to get the updated feilds
	 * @param {JSON} - eventBk - event backend data
	 * @param {JSON} - eventEt - event data from UI
	 **/
	checkLocationAndGetUpdatedData: function (eventBk, eventEt) {
      try{
		var location = {};
		var isChange = false;
		var key;
		if (Object.keys(eventBk).keys.length < Object.keys(eventEt).length) {
			for (key in eventEt) {
				if (eventBk[key] === undefined || eventBk[key] !== eventEt[key]) {
					isChange = true;
					location[key] = eventEt[key];
				}
			}
		} else {
			for (key in eventBk) {
				if (eventBk[key] !== eventEt[key]) {
					isChange = true;
					location[key] = eventEt[key];
				}
			}
		}

		if (isChange) {
			location.location_id = this.location_id;
			location.event_id = this.event_id;
			return location;
		} else {
			return;
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	//updated location's lat long call back
	updatedLocCallback: function (response) {
      try{
		this.finalUpdatedLocationData[0].latitude = response.loc_lat;
		this.finalUpdatedLocationData[0].longitude = response.loc_lng;
		this.update("location", this.updateLocationSuccessDataCallback, this.finalUpdatedLocationData);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	//update success callback for location
	updateLocationSuccessDataCallback: function () {
      try{
		this.getSessionData(); // calls getsessiondata to fetch the updated session details
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**Session Edit Operations Start***/

	/**
	 * @function openSessionInEditMode
	 * @description - This function will check the isLoadedFromServer flag
	 * isLoadedFromServer = true means already the sessions are loaded from the backend , user is editing
	 * isLoadFromServer = false means this is firsttime the user is navigating to session page
	 **/
	openSessionInEditMode: function () {
      try{
		if (this.isLoadedFromServer) {
			this.doTabActions("btnsessions"); // set the tab button to be highlighted to session
		} else {
			this.getSchedule(); // get the sessions scheduled for the session
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getSchedule
	 * @description - This function will fetch the event_sessions and presenter from the backend
	 **/
	getSchedule: function () {
		try {
			var sdkClient = new kony.sdk.getCurrentInstance();
			var objectInstance = sdkClient.getObjectService("EventOrchSDO", {
					"access": "online"
				});
			if (objectInstance === null || objectInstance === undefined) {
				alert("Something went wrong. Please try later.");
				return;
			}
			var dataObject = new kony.sdk.dto.DataObject("event_session_presenter");
			var options = {
				"dataObject": dataObject,
				"headers": {},
				"queryParams": {
					"$filter": "event_id eq " + "'" + this.event_id + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
				}
			};
			showLoading(this);
			if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
				objectInstance.fetch(options, this.scheduleSuccess.bind(this), this.scheduleFailure.bind(this));
			} else {
				kony.application.dismissLoadingScreen();
				alert("No Network access. Please connect to network and try again.");
			}
		} catch (e) {
			kony.application.dismissLoadingScreen();
			kony.print("Exception occured while getting events: " + e.message);
			alert("Something went wrong. Please try later.");
		}
	},

	/**
	 * @function scheduleSuccess
	 * @description - success call back for getSchedule
	 * this function will call group session and speaker to group session and speaker
	 * @param {JSON} - response from the backend
	 **/
	scheduleSuccess: function (response) {
      try{
		kony.application.dismissLoadingScreen();
		this.groupSessionAndSpeker(processSessionAndPresenters(response));
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function scheduleFailure
	 * @description - failure call back for getSchedule
	 **/
	scheduleFailure: function (error) {
		alert("Something went wrong. Please try later.");
	},

	sesssionDataFromBK: [], // controller variable to store the session data from backend

	/**
	 * @function groupSessionAndSpeker
	 * @description -this function will group session and related speakers and store in sesssionDataFromBK
	 * @param {array JSON} - response from the backend
	 **/
	groupSessionAndSpeker: function (response) {
      try{
		var currentSessionId = null;
		var sessionSpeaker = [];
		var i = 0;
		var isSpeakerPresent = false;
		while (i < response.length) {
			var session = {};
			currentSessionId = response[i].event_session_id;
			session.session_name = response[i].session_name;
            if(response[i].session_end_date.indexOf("+")!==-1){
              	session.session_end_date = response[i].session_end_date.split("+")[0];
			    session.session_start_date = response[i].session_start_date.split("+")[0];
            }else{
               	session.session_end_date = response[i].session_end_date
			    session.session_start_date = response[i].session_start_date
            }
			session.session_desc = response[i].session_desc;
			session.session_id = response[i].event_session_id;
			var j = i;
			session.speakerDet = [];
			while (response[j] !== undefined && response[j].presenter_id !== undefined && response[j].session_id == currentSessionId) {
				var speaker = {};
				isSpeakerPresent = true;
				speaker.name = response[j].name;
				speaker.designation = response[j].designation;
				if (response[j].linkedin_link !== undefined)
					speaker.linkedin_link = response[j].linkedin_link;
				else
					speaker.linkedin_link = "";
				speaker.presenter_id = response[j].presenter_id;
				session.speakerDet.push(speaker);
				j++;
			}
			if (isSpeakerPresent) {
				i = j - 1;
				isSpeakerPresent = false;
			} else {
				i = j;
			}
			i++;
			sessionSpeaker.push(session);
		}
		this.sesssionDataFromBK = sessionSpeaker;
		this.createSessionForEdit(sessionSpeaker);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createSessionForEdit
	 * @description - this function will create sessiontemp component dynamically and add data from the backend
	 * @param {array JSON} - sessions and associated speakers
	 **/
	createSessionForEdit: function (sessionSpeaker) {
      try{
		this.view.FlexScrollSession.removeAll();
		this.lastTop = 0;
		if (sessionSpeaker.length) {
			for (var i = 0; i < sessionSpeaker.length; i++) {
				this.uniqueId = sessionSpeaker[i].session_id;
				this.createSession(); // add sessiontemp component dynamically
				this.createFooter(); //add footer componet dynamically

				//setting properties for footer component
				this.view["sessionFooter" + this.uniqueId].isAddVisible = true;
				this.view["sessionFooter" + this.uniqueId].isDelVisible = true;
				this.view["sessionFooter" + this.uniqueId].isEditVisible = false;
				this.view["sessionFooter" + this.uniqueId].btnAddOnclick = this.createUI;
				this.view["sessionFooter" + this.uniqueId].btnDelOnclick = this.removeSession;

				// call setsessionData method of component
				this.view["session" + this.uniqueId].setSessionData(sessionSpeaker[i]);
			}
			this.createPublisHButtonOnSessionScreen(this.lastTop);
		} else {
			// call createDefaultAddSessionButton if there are no sessions from the back end
			this.createDefaultAddSessionButton();

			// call createPublisHButtonOnSessionScreen with top 10
			this.createPublisHButtonOnSessionScreen(10);
		}
		this.isLoadedFromServer = true; //setting the loadfromserver true, since for the first time it is loaded
		this.doTabActions("btnSession"); // highlight the session tab and navigate to session page
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createDefaultAddSessionButton
	 * @description - this function will dynamically create a add new session button
	 **/
	createDefaultAddSessionButton: function () {
      try{
		var btnAddNewSessionDefault = new kony.ui.Button({
				"focusSkin": "CopydefBtnNormal0gafb081126cd49",
				"height": "5%",
				"id": "btnAddNewSessionDefault",
				"isVisible": true,
				"left": "2.50%",
				"skin": "CopydefBtnNormal0gafb081126cd49",
				"text": "Add New Session",
				"top": "2%",
				"width": "10%",
				"zIndex": 1,
				"onClick": this.createDefaultSession
			}, {
				"contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
				"displayText": true,
				"padding": [0, 0, 0, 0],
				"paddingInPixel": false
			}, {});
		this.view.FlexScrollSession.add(btnAddNewSessionDefault);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createDefaultSession
	 * @description - this function will remove default add button and publish button
	 * this function will add first sessiontemp component to the form
	 **/
	createDefaultSession: function () {
      try{
		this.view.FlexScrollSession.remove(this.view.btnAddNewSessionDefault);
		this.view.FlexScrollSession.remove(this.view.flexPublishEvent);
		this.uniqueId = 1;
		this.lastTop = 110;
		this.createFirstSession();
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
	newSpeakers: [], // controller varible to store new speakers
	updateSpeakers: [], // controller variable to store updates speakers
	delSpeakers: [], // controller variable to store deleted speakers

	/**
	 * @function getDataForUpdate
	 * @description - this function will compare the data from UI and backend to get the updated session details
	 * @param {sessionDataEt} - edited session data
	 **/
	getDataForUpdate: function (sessionDataEt) {
      try{
		var updateArray = [];
		var delArray = [];
		var newArray = [];
		this.newSpeakers = [];
		this.updateSpeakers = [];
		this.delSpeakers = [];
		var finalArrayAfterEdit = [];
		this.editFinalResults = {};
		if (this.sesssionDataFromBK.length) {
			for (var i = 0; i < this.sesssionDataFromBK.length; i++) {
				var sessionReturned = this.isSessionIdPresent(sessionDataEt, this.sesssionDataFromBK[i].session_id);
				if (sessionReturned !== undefined) {
					var editedValues = this.checkAndAddSessionToUpdateList(this.sesssionDataFromBK[i], sessionReturned.session);
					if (editedValues !== undefined) {
						updateArray.push(editedValues);
					}
					this.session_id = this.sesssionDataFromBK[i].session_id;
					this.getNewSpeakersForSession(sessionReturned.speakers);
					this.getUpdatedSpeakers(this.sesssionDataFromBK[i].speakerDet, sessionReturned.speakers);
				} else {
					delArray.push({
						"event_session_id": this.sesssionDataFromBK[i].session_id
					});
				}
			}
			newArray = this.getNewSessions(sessionDataEt);
			this.editFinalResults.sessions_updated = updateArray;
			this.editFinalResults.sessions_del = delArray;
			this.editFinalResults.sessions_created = newArray;
			this.delete ("event_sessions", this.deleteSessionsCallback, this.editFinalResults.sessions_del);
		} else {
			this.editFinalResults.sessions_created = sessionDataEt;
			this.createSpeakersOnlyCallback();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function isSessionIdPresent
	 * @description - this function will check if the session is present in the edited session data or not
	 * @param {sessionDataEt} - edited session data
	 * @param {session_id} - the session id
	 **/
	isSessionIdPresent: function (sessionDataEt, session_id) {
      try{
		for (var i = 0; i < sessionDataEt.length; i++) {
			if (sessionDataEt[i].session.session_id === undefined) {
				continue;
			}
			if (sessionDataEt[i].session.session_id === session_id) {
				return sessionDataEt[i];
			}
		}
		return
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getNewSessions
	 * @description - this function will check the session_id in edited sessions and
	 * find the new sessions added during edit
	 * @param {sessionDataEt} - edited session data
	 **/
	getNewSessions: function (sessionDataEt) {
      try{
		var newArray = [];
		for (var i = 0; i < sessionDataEt.length; i++) {
			if (sessionDataEt[i].session.session_id === undefined) {
				newArray.push(sessionDataEt[i]);
			}
		}
		return newArray;
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getNewSpeakersForSession
	 * @description - this function will check the edited session details and find the new speakers if any
	 * @param {sessionDataEt} - edited session data
	 **/
	getNewSpeakersForSession: function (speakersEt) {
      try{
		for (var i = 0; i < speakersEt.length; i++) {
			if (speakersEt[i].presenter_id === undefined) {
				speakersEt[i].session_id = this.session_id;
				speakersEt[i].event_id = this.event_id;
				this.newSpeakers.push(speakersEt[i]);
			}
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function getUpdatedSpeakers
	 * @description - this function will compare the edited session details and backend session details
	 * this function will find the updation of existing speakers
	 * @param {sessionDataEt} - edited session data
	 **/
	getUpdatedSpeakers: function (speakersFromBk, speakersEt) {
	  try{
		if (speakersFromBk.length > 0) {
			if (speakersEt.length === 0) {
				for (var speaker of speakersFromBk) {
					this.delSpeakers.push({
						"presenter_id": speaker.presenter_id
					});
				}
			} else {
				for (var speaker1 of speakersFromBk) {
					var speakerToUpdate = this.isSpeakerIdPresent(speaker1.presenter_id, speakersEt);
					if (speakerToUpdate !== undefined) {
						var speakersEdited = this.checkAndAddSpeakerToUpdateList(speaker1, speakerToUpdate);
						if (speakersEdited !== undefined) {
							this.updateSpeakers.push(speakersEdited);
						}
					} else {
						this.delSpeakers.push({
							"presenter_id": speaker1.presenter_id
						});
					}
				}
			}
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function isSpeakerIdPresent
	 * @description - this function will check if the presenter from the backend is present in the edited session data or not
	 * @param {sessionDataEt} - edited session data
	 * @param {presenter_id} - the presenter id
	 **/
	isSpeakerIdPresent: function (presenter_id, speakersEt) {
      try{
		for (var i = 0; i < speakersEt.length; i++) {
			if (speakersEt[i].presenter_id === undefined) {
				continue;
			}
			if (speakersEt[i].presenter_id === presenter_id) {
				return speakersEt[i];
			}
		}
		return;
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function checkAndAddSpeakerToUpdateList
	 * @description - this function will compare the edited session details and backend session details
	 * this function will find the updated records in existing sessions
	 * @param {sessionDataEt} - Presenter list from UI
	 * @param {sessionFromBk} - presenterList From Backend
	 **/
	checkAndAddSessionToUpdateList: function (sessionFromBk, sessionDataEt) {
      try{
		var session = {};
		var isChange = false;
		for (var key in sessionFromBk) {
			if (sessionFromBk[key] !== sessionDataEt[key] && key !== "speakerDet") {
				isChange = true;
				session[key] = sessionDataEt[key];
			}
		}
		if (isChange) {
			session.event_session_id = sessionFromBk.session_id;
			return session;
		} else {
			return;
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }

	},

	/**
	 * @function checkAndAddSpeakerToUpdateList
	 * @description - this function will compare the edited session details and backend session details
	 * this function will find the updated records in existing presenters
	 * @param {speakerEt} - Presenter list from UI
	 * @param {speakerBk} - presenterList From Backend
	 **/
	checkAndAddSpeakerToUpdateList: function (speakerBk, speakerEt) {
      try{
		var speaker = {};
		var isChange = false;
		for (var key in speakerBk) {
			if (speakerBk[key] !== speakerEt[key]) {
				isChange = true;
				speaker[key] = speakerEt[key];
			}
		}
		if (isChange) {
			speaker.presenter_id = speakerBk.presenter_id;
			return speaker;
		} else {
			return;
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	///Recursive operations for update delete create


	//Variables for RecurciveOperations
	delCount: 0,
	delObjectName: "",
	delCallBack: "",
	dataToDelete: [],
	updateCount: 0,
	updateObjName: "",
	updateCallback: "",
	dataToUpdate: [],
	createCount: 0,
	createObjName: "",
	createCallback: "",
	dataToCreate: [],

	/**
	 * @function deleteRecursiveCommon
	 * @description - this function will call delete service call for the given delObject name
	 * @param {dataToDelete} - Controller variable stores array of JSON to delete
	 * @param {delCount} - controller variable stores the current iteration
	 * @param {delObjectName} - object name
	 **/
	deleteRecursiveCommon: function () {
		try {
			if (this.dataToDelete.length) {
				var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
						"access": "online"
					});
				var dataObject = new kony.sdk.dto.DataObject(this.delObjectName);
				dataObject.setRecord(this.dataToDelete[this.delCount]);
				var options = {
					"dataObject": dataObject
				};
				objSvc.deleteRecord(options,
					this.deleteRecursiveCommonSuccessCallback.bind(this),
					this.deleteRecursiveCommonFailureCallback.bind(this));
			} else {
				this.delCallBack();
			}
		} catch (err) {
			kony.application.dismissLoadingScreen();
			alert("Something went wrong. Please try later.");
		}

	},

	/**
	 * @function deleteRecursiveCommonSuccessCallbacks
	 * @description - success call back of delete operation
	 * this function will compare the list length with iterator count
	 * if all the list elements got deleted successfully then calls the callback
	 * @param {success} - success response
	 * @delCallBack - controller variable stores the callback function for delete
	 **/
	deleteRecursiveCommonSuccessCallback: function (success) {
      try{
		this.delCount++;
		if (this.delCount < this.dataToDelete.length) {
			this.deleteRecursiveCommon();
		} else {
			this.delCallBack();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function deleteRecursiveCommonFailureCallback
	 * @description - failiure call back of delete operation
	 * @param {error} - failure response
	 **/
	deleteRecursiveCommonFailureCallback: function (error) {
		kony.application.dismissLoadingScreen();
		alert("Something went wrong. Please try later.");
	},

	/**
	 * @function updateRecursiveCommon
	 * @description - this function will perform update service call for the given updateObject name
	 * @param {dataToUpdate} - Controller variable stores array of JSON to update
	 * @param {updateCount} - controller variable stores the current iteration
	 * @param {updateObjName} - object name
	 **/
	updateRecursiveCommon: function () {
        try{
          if (this.dataToUpdate.length) {
			var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
					"access": "online"
				});
			var dataObject = new kony.sdk.dto.DataObject(this.updateObjName);
			dataObject.setRecord(this.dataToUpdate[this.updateCount]);
			var options = {
				"dataObject": dataObject
			};
			objSvc.update(options,
				this.updateRecursiveCommonSuccessCallback.bind(this),
				this.updateRecursiveCommonFailureCallback.bind(this));
		} else {
			this.updateCallback();
		}
        }catch(err){
          alert("Something went wrong. Please try later")
        }
		
	},

	/**
	 * @function updateRecursiveCommonSuccessCallback
	 * @description - success call back of delete operation
	 * this function will compare the list length with iterator count
	 * if all the array elements got updateed successfully then calls the callback
	 * @updateCallback - controller variable stores the callback function for delete
	 **/
	updateRecursiveCommonSuccessCallback: function () {
      try{
		this.updateCount++;
		if (this.updateCount < this.dataToUpdate.length) {
			this.updateRecursiveCommon();
		} else {
			this.updateCallback();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function updateRecursiveCommonFailureCallback
	 * @description - failiure call back of update operation
	 **/
	updateRecursiveCommonFailureCallback: function (error) {
		kony.application.dismissLoadingScreen();
		alert("Something went wrong. Please try later.");
	},

	//Create Recursive function
	createRecursiveCommon: function () {
		try {
			if (this.dataToCreate.length) {
				var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
						"access": "online"
					});
				var dataObject = new kony.sdk.dto.DataObject(this.createObjName);
				dataObject.setRecord(this.dataToCreate[this.createCount]);
				var options = {
					"dataObject": dataObject
				};
				objSvc.create(options,
					this.createRecursiveCommonSuccessCallback.bind(this),
					this.createRecursiveCommonFailureCallback.bind(this));
			} else {
				this.createCallback();
			}
		} catch (err) {
			kony.application.dismissLoadingScreen();
			alert("Something went wrong. Please try later.");
		}

	},

	/**
	 * @function createRecursiveCommonSuccessCallback
	 * @description - success call back of delete operation
	 * this function will compare the list length with iterator count
	 * if all the array elements got created successfully then calls the callback
	 * @updateCallback - controller variable stores the callback function for delete
	 **/
	createRecursiveCommonSuccessCallback: function (reponse) {
      try{
		this.createCount++;
		if (this.dataToCreate.length > this.createCount) {
			this.createRecursiveCommon();
		} else {
			this.createCallback();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createRecursiveCommonFailureCallback
	 * @description - failiure call back of create operation
	 **/
	createRecursiveCommonFailureCallback: function (error) {
		kony.application.dismissLoadingScreen();
		alert("Something went wrong. Please try later.");
	},

	/**
	 * @function delete
	 * @description - this function will call the delete recursive common function after assigning the required parameters
	 * @param {String - object} - object name to delete
	 * @param {function - callback} - callback function on successfull deletion
	 * @param {Array of JSON - data} - data to delete
	 **/
	delete : function (object, callback, data) {
      try{
		showLoading(this);
		this.delCount = 0;
		this.delObjectName = object;
		this.delCallBack = callback;
		this.dataToDelete = data;
		this.deleteRecursiveCommon();
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function update
	 * @description - this function will call the update recursive common function after assigning the required parameters
	 * @param {String - object} - object name to update
	 * @param {function - callback} - callback function on successfull updation
	 * @param {Array of JSON - data} - data to update
	 **/
	update: function (object, callback, data) {
      try{
		showLoading(this);
		this.updateCount = 0;
		this.updateObjName = object;
		this.updateCallback = callback;
		this.dataToUpdate = data;
		this.updateRecursiveCommon();
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function create
	 * @description - this function will call the create recursive common function after assigning the required parameters
	 * @param {String - object} - object name to create
	 * @param {function - callback} - callback function on successfull creation
	 * @param {Array of JSON - data} - data to create
	 **/
	create: function (object, callback, data) {
      try{
		showLoading(this);
		this.createCount = 0;
		this.createObjName = object;
		this.createCallback = callback;
		this.dataToCreate = data;
		this.createRecursiveCommon();
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function deleteSessionsCallback
	 * @description - this functionis the  call back function for delete sessions in edit mode
	 * This function will call delete operation for presenter
	 **/
	deleteSessionsCallback: function () {
      try{
		this.delete ("presenter", this.deleteSpeakersCallback, this.delSpeakers);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function deleteSpeakersCallback
	 * @description - this functionis the  call back function for delete speakers in edit mode
	 * This function will call update operation for sessions in edit mode
	 **/
	deleteSpeakersCallback: function () {
      try{
		this.update("event_sessions", this.updateSessionsCallback, this.editFinalResults.sessions_updated);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function updateSessionsCallback
	 * @description - this functionis the  call back function for update sessions in edit mode
	 * This function will call update operation for speakers in edit mode
	 **/
	updateSessionsCallback: function () {
      try{
		this.update("presenter", this.updateSpeakersCallback, this.updateSpeakers);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function updateSpeakersCallback
	 * @description - this functionis the  call back function for update speeakers in edit mode
	 * This function will call create operation for speakers in edit mode
	 **/
	updateSpeakersCallback: function () {
      try{
		this.create("presenter", this.createSpeakersOnlyCallback, this.newSpeakers);
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function createSpeakersOnlyCallback
	 * @description - this functionis the  call back function for create speeakers in edit mode
	 * This function will call createSessioninbk operation for sessions in edit mode
	 **/
	createSpeakersOnlyCallback: function () {
       try{
		this.sessionCount = 0;
		this.speakerCount = 0;
		this.overAllSessionData = this.editFinalResults.sessions_created;
		this.createSessiononBk();
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function doTabActions
	 * @description - this function will validate event data and navigate to session page
	 * @param {String} - id - button Id
	 **/
	doTabActions: function (id) {
      try{
		if (id == "btnBasic") {
			this.view.EventsHeader.lblundSes.skin = "sknheaderlblLineNormal";
			this.view.EventsHeader.btnSessions.skin = "sknbtnheadernormal";
			this.view.EventsHeader.lblstep2.skin = "sknlblstepnor";
			this.showEvent();
		} else {
			this.view.EventsHeader.lblundSes.skin = "sknheaderlblLineSel";
			this.view.EventsHeader.btnSessions.skin = "sknbtnheadersel";
			this.view.EventsHeader.lblstep2.skin = "sknlblstepsel";
			this.validateAndShowSession();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function validateAndShowSession
	 * @description - this function will validate event data and navigate to session page
	 **/
	validateAndShowSession: function () {
      try{
		if (this.getEventData() !== undefined) {
			if (this.getSelectedLocationType() === 2) {
				if (this.getAddressData() !== undefined) {
					this.showSession();
				}
			} else {
				if (this.getWebexDetails() !== undefined) {
					this.showSession();
				}
			}
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function publishEventAndSessions
	 * @description - this function will first validate the sessions created
	 * this function check for the edit mode and
	 * if it is in edit mode, then calls getImageToCreate
	 * if it is in create mode, then calls onClickProceed
	 **/
	publishEventAndSessions: function () {
      try{
		if (this.getSessionDataFromUI() !== undefined) {
			if (!this.isEditMode)
				this.onClickProceed();
			else
				this.getImageToCreate();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function askForConfirmation
	 * @description - this function will shows the confirmation alert
	 * @param {String} -message - message to be displayed
	 * @param {String} -title - the title of the alert
	 * @param {function} - call back function
	 **/
	askForConfirmation: function (message, title, callback) {
      try{
		var pspConfig = {
			"iconPosition": constants.ALERT_CONTENT_ALIGN_CENTER,
			"contentAlignment": constants.ALERT_ICON_POSITION_LEFT
		};
		var alert = kony.ui.Alert({
				"message": message,
				"alertType": constants.ALERT_TYPE_CONFIRMATION,
				"alertTitle": title,
				"yesLabel": "Yes",
				"noLabel": "No",
				"alertIcon": "",
				"alertHandler": handleAlert.bind(this)
			},
				pspConfig);
		function handleAlert(response) {
			if (response)
				callback();
		}
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function navigateToManageUser
	 * @description - this function will navigate to frmManageUser
	 **/
	navigateToManageUser: function () {
      try{
		var nav = new kony.mvc.Navigation("frmManageUser");
		nav.navigate();
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},

	/**
	 * @function navigateToAllEventsPage
	 * @description - this function will navigate to frmAllEvents
	 **/
	navigateToAllEventsPage: function () {
      try{
		var navObj = new kony.mvc.Navigation("frmAllEvents");
		navObj.navigate();
      }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	},
  	
    /**
	 * @function sendPushNotification
	 * @description - this function will prepare the payload for pushnotification and calls custom login functio 
     * to get the calims token
	 **/
    sendPushNotification : function(){
       try{
        var pushConfig = {};
        var eventName = this.view.txtEventName.text;
		pushConfig.event_id = this.event_id;
        pushConfig.appId = KNYMobileFabric.messagingsvc.appId;
  		if(this.isEditMode){
          pushConfig.title = "Event Update: "+eventName;
          pushConfig.msg = eventName+" has been updated. Tap to view";
          pushConfig.ksid = [];
        }else{
          pushConfig.title = "New Event: "+eventName;
          pushConfig.msg = eventName+" has been Created. Tap to view";
          pushConfig.ksid = [];
        }
      doCustomLogin(pushConfig);
       }catch(error){
          kony.print("Create EventController"+JSON.stringify(error));
        }
	}

});