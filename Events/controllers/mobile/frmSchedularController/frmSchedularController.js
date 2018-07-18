define({
	event: "",
	/**
	 * @function onNavigate
	 * @description This function is used to invoke getSchedule method by passing eventData
	 * @private
	 * @param {string} eventData
	 */
	onNavigate: function (eventData) {
		try {
			this.event = eventData;
			this.getSchedule(eventData.event_id);
		} catch (err) {
			kony.print("Frm Schedular Controller" + JSON.stringify(err));
		}
	},

	/**
	 * @function getSchedule
	 * @description function to get event schedule for the provided event id
	 * @private
	 * @param {string} eventID
	 */
	getSchedule: function (eventID) {
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
				objectInstance.fetch(options, this.scheduleSuccess.bind(this), this.scheduleFailure.bind(this));
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
	 * @function scheduleSuccess
	 * @description Success callback for the getSchedule method
	 * @private
	 * @param {JSON} response
	 */
	scheduleSuccess: function (response) {
		try {
			kony.application.dismissLoadingScreen();
			var data = [];
			var procesedRecords = [];
			var timelineData = {};
			if (response.records[0].event_sessions.length > 0)
				procesedRecords = groupRecord(processSessionAndPresenters(response));
			if (procesedRecords.length > 0) {
				for (var i = 0; i < procesedRecords.length; i++) {
					var session = {};
					session.name = procesedRecords[i][0].session_name;
					session.date = procesedRecords[i][0].session_start_date;
					session.desc = procesedRecords[i][0].session_desc;
					if (procesedRecords[i][0].name !== undefined) {
						session.sub1 = procesedRecords[i][0].name;
						for (var j = 1; j < procesedRecords[i].length; j++) {
							session.sub1 = session.sub1 + ", " + procesedRecords[i][j].name;
						}
					}
					data.push(session);
					timelineData = {};
					timelineData.title = this.event.name;
					timelineData.timeLineList = data;
					this.view.timeline.setData(timelineData);
				}
			} else {
				timelineData = {};
				timelineData.title = this.event.name;
				timelineData.timeLineList = [];
				this.view.timeline.setData(timelineData);
			}
		} catch (err) {
			kony.print("Frm Schedular Controller" + JSON.stringify(err));
		}
	},
	/**
	 * @function scheduleSuccess
	 * @description Failure callback for the getSchedule method
	 * @private
	 * @param {JSON} error
	 */
	scheduleFailure: function (error) {
		alert("Error in scedular" + JSON.stringify(error));
	}

});