define({
	event: null,
	/**
	 * @function onNavigate
	 * @description This function is used to populate the data to the widget while navigating to this form.
	 * @private
	 * @param {JSON} event
	 */
	onNavigate: function (event) {
		try {
			this.event = event;
			var segSectionObject = {};
			var segRowObject = {};
			var segRowObjList = [];
			var segMainList = [];
			var finalSegDataList = [];
			this.view.lblTitleOfTheEvent.text = event.name;
			this.view.segSpeaker.removeAll();
			this.getPresenter(event.event_id);
		} catch (err) {
			kony.print("Frm Presenter Controller" + JSON.stringify(err));
		}
	},
	/**
	 * @function getPresenter
	 * @description Function to get the presenters for the provided eventID
	 * @private
	 * @param {JSON} eventID
	 */
	getPresenter: function (eventID) {
		try {
			var sdkClient = new kony.sdk.getCurrentInstance();
			var objectInstance = sdkClient.getObjectService("EventOrchSDO", {
					"access": "online"
				});
			if (objectInstance === null || objectInstance === undefined) {
				alert("Please connect app to MF");
				return;
			}
			var dataObject = new kony.sdk.dto.DataObject("event_session_presenter");
			var options = {
				"dataObject": dataObject,
				"headers": {},
				"queryParams": {
					"$filter": "event_id eq " + "'" + eventID + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
				}
			};
			showLoading();
			if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
				objectInstance.fetch(options, this.presenterFetchSuccess.bind(this), this.presenterFetchFailure.bind(this));
			} else {
				kony.application.dismissLoadingScreen();
				alert("No Network connected");
			}
		} catch (e) {
			kony.application.dismissLoadingScreen();
			kony.print("Exception occured while getting events: " + e.message);
			alert("Exception occured while getting events: " + e.message);
		}
	},
	/**
	 * @function presenterFetchSuccess
	 * @description Success callback for the getPresenter and populate the response to the form widget
	 * @private
	 * @param {JSON} response
	 */
	presenterFetchSuccess: function (response) {
		try {
			kony.application.dismissLoadingScreen();
			kony.print("Presnters: " + JSON.stringify(response));
			//alert("Presnters: "+JSON.stringify(response.records));
			if ((response.records[0].event_sessions).length === 0) {
				this.setNoSessionLabel(false);
				return;
			}
			var procesedRecords = groupRecord(processSessionAndPresenters(response));
			var listLength = procesedRecords.length;
			var sessions,
			session;
			var segSectionObject = {};
			var segMainList = [];
			var segRowObject = {};
			var segRowObjList = [];
			var finalSegDataList = [];
			var dateMonth = (this.event.start_date_mon).split(" ");
			var mDate,
			mDay;
			var sessionStartDayString,
			sessionEndDayString;
			for (var i = 0; i < listLength; i++) {
				segMainList = [];
				segRowObjList = [];
				sessions = procesedRecords[i];
				sessionStartDayString = (sessions[0].session_start_date).split("T");
				sessionEndDayString = (sessions[0].session_end_date).split("T");
				mDate = new Date(sessionStartDayString[0]);
				mDay = mDate.getDay();
				//alert("mDay"+mDay);

				var location = "";
				if (this.event.addressLine1 !== undefined && this.event.addressLine1 !== null && this.event.addressLine1 !== "") {
					location = this.event.addressLine1;
				} else {
					location = "Online Event"
				}
				segSectionObject = {
					"lblHorizontalLine": "",
					"lblDate": (mDate.getDate() + "") < 10 ? ("0" + mDate.getDate()) : mDate.getDate() + "",
					"lblMonth": glbMonthString[mDate.getMonth()],
					"lblVerticalLine": " ",
					"lblEventAddress": location,
					"lblEventDateTime": glbDayString[mDay] + ", " + sessionStartDayString[1] + " - " + sessionEndDayString[1]
				};
				segMainList.push(segSectionObject);
				for (var j = 0; j < sessions.length; j++) {
					session = sessions[j];
					if (session.name === null || session.name === undefined) {
						continue;
					}
					segRowObject = {
						"imgSpeaker": "profile.png",
						"lblLinkedIn": "LinkedIn Profile",
						"lblSpeakerName": session.name,
						"lblDesignation": session.designation
					}
					segRowObjList.push(segRowObject);
				}
				segMainList.push(segRowObjList);
				finalSegDataList.push(segMainList);
			}
			this.view.segSpeaker.removeAll();
			this.view.segSpeaker.setData(finalSegDataList);
		} catch (err) {
			kony.print("Frm Presenter Controller" + JSON.stringify(err));
		}
	},
	/**
	 * @function presenterFetchFailure
	 * @description failure callback for the getPresenter.
	 * @private
	 * @param {JSON} response
	 */
	presenterFetchFailure: function (response) {
		kony.application.dismissLoadingScreen();
		kony.print("Error occured while fetching the presenters: " + JSON.stringify(response));
	},
	/**
	 * @function navigateBack
	 * @description function to navigate to frmEventDetails
	 * @private
	 */
	navigateBack: function () {
		try {
			var navigationObject = new kony.mvc.Navigation("frmEventDetails");
			navigationObject.navigate();
		} catch (e) {
			alert(e.message);
			kony.print(e.message);
		}
	},
    /**
	 * @function setNoSessionLabel
	 * @description function to set the lblNoEvents based on the flag 
	 * @private
	 */
	setNoSessionLabel: function (isSessionAvailable) {
		try {
			if (isSessionAvailable) {
				this.view.lblNoEvents.isVisible = false;
			} else {
				this.view.lblNoEvents.text = "There are no presenter(s) available for this Event..";
				this.view.lblNoEvents.isVisible = true;
			}
		} catch (err) {
			kony.print("Frm Presenter Controller" + JSON.stringify(err));
		}
	}
});