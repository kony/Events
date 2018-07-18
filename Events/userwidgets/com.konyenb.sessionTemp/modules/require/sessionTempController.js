define(function () {

	return {
		constructor: function (baseConfig, layoutConfig, pspConfig) {
			this.sessionData = "";
			this.speakers = "";
			this.sessionFullData = {};
			this.sessionAndSpeakerData = "";
		},
		//Logic for getters/setters of custom properties

		initGettersSetters: function () {},

		/**
		 * @function onClickAdd
		 * @description - this function be called on click of the add button speaker segment
		 * this function will add a row below to clicked row
		 * @param {JSON - context} - JSON of row index nd section index from the add button onclik
		 **/
		onClickAdd: function (context) {
          try{
			this.view.btnCreateNewSpeaker.isVisible = false;
			var dataObj = {
				"ImgDel": "removespeaker.png",
				"imgAdd": "addspeaker.png",
				"lblStripSessionSpeaker": "test",
				"txtSpeakerDesg": {
					"placeholder": "Designation",
					"text": ""
				},
				"txtSpeakerLkProfile": {
					"placeholder": "Linked Public Profile Link",
					"text": ""
				},
				"txtSpeakerName": {
					"placeholder": "Name",
					"text": ""
				},

			};

			var index = context.rowIndex + 1;
			this.view.segSessionSpeakerDetails.addDataAt(dataObj, index);
			this.view.flexSessionSpeakerDetails.forceLayout();
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		/**
		 * @function onClickDel
		 * @description - this function be called on click of the delete button speaker segment
		 * this function will delete asclicked row
		 * @param {JSON - context} - JSON of row index nd section index from the add button onclik
		 **/
		onClickDel: function (context) {
          try{
			this.view.segSessionSpeakerDetails.removeAt(context.rowIndex);
			if (context.rowIndex === 0) {
				this.view.btnCreateNewSpeaker.isVisible = true;
				this.view.forceLayout();
			}
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		/**
		 * @function getSessionData
		 * @description - this function will validate and fetch the session
		 * return {JSON} - session  data
		 **/
		getSessionData: function () {
          try{
			this.sessionData = {};
			this.sessionData.session_name = (this.view.txtSessionName.text).replace('&','and');
			this.sessionData.session_desc = (this.view.txtSessionSDesc.text).replace('&','and');
			if (this.sessionAndSpeakerData !== "" && this.sessionAndSpeakerData.session_id !== undefined && this.sessionAndSpeakerData.session_id !== "")
				this.sessionData.session_id = this.sessionAndSpeakerData.session_id;
			var longesc = this.view.txtSesionLDesc.text;
			var date = this.view.calSessionStartDate.formattedDate;
			var sTime = this.view.txtSessionStartTime.text;
			var eTime = this.view.txtSessionEndTime.text;

			//validation
			if (this.sessionData.session_name !== null && this.sessionData.session_name.trim() !== "") {
				if (date !== null && date !== "") {
					if (this.validateStartTime(sTime)) {
						if (this.validateEndTime(eTime)) {
							this.sessionData.session_start_date = this.formatDate(date, sTime);
							this.sessionData.session_end_date = this.formatDate(date, eTime);
							this.sessionFullData.session = this.sessionData;
							if (this.getSpeakerData() === undefined) {
								return;
							} else {
								return this.sessionFullData;
							}
						} else {
							return;
						}
					} else {
						return;
					}
				} else {
					alert("Date should not be empty");
					return;
				}
			} else {
				alert("Session name should not be empty");
				return;
			}
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		/**
		 * @function getSpeakerData
		 * @description - this function will validate and fetch the speaker
		 * return {JSON} - added speakers
		 **/
		getSpeakerData: function () {
          try{
			this.speakers = [];
			var speakerData = this.view.segSessionSpeakerDetails.data;
			for (var i = 0; i < speakerData.length; i++) {
				var speaker = {};
				speaker.name = speakerData[i].txtSpeakerName.text;
				speaker.designation = (speakerData[i].txtSpeakerDesg.text).replace('&','and');
				speaker.linkedin_link = (speakerData[i].txtSpeakerLkProfile.text).replace('&','and');
				if (speakerData[i].presenter_id !== undefined && speakerData[i].presenter_id !== null) {
					speaker.presenter_id = speakerData[i].presenter_id;
				}
				if (speaker.name.trim() === "" || speaker.designation.trim() === "") {
					alert("Speaker name or Desg should not be empty");
					this.view.segSessionSpeakerDetails.selectedRowIndex = [0, i];
					return;
				} else {
					this.speakers.push(speaker);
				}
			}
			this.sessionFullData.speakers = [];
			if (this.speakers.length > 0)
				this.sessionFullData.speakers = this.speakers;
			return this.sessionFullData;
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		getData: function () {
          try{
			if (this.getSessionData() === undefined)
				return;
			return this.sessionFullData;
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		/**
		 * @function setSessionData
		 * @description - this function will set the session data to the UI
		 * param {JSON} - session data
		 **/
      setSessionData: function (session) {
        try{
        this.sessionAndSpeakerData = session;
        this.view.txtSessionName.text = session.session_name;
        this.view.txtSessionSDesc.text = session.session_desc;
        var date_com = ((session.session_start_date).split("T")[0]).split("-");
        var time = ((session.session_start_date).split("T")[1]);
        this.view.calSessionStartDate.dateComponents = [date_com[2], date_com[1], date_com[0]];
        this.view.txtSessionStartTime.text = time.slice(0, 5);
        time = ((session.session_end_date).split("T")[1]);
        this.view.txtSessionEndTime.text = time.slice(0, 5);
        if (session.speakerDet !== undefined && session.speakerDet.length > 0) {
          this.setSpeakerData(session.speakerDet);
        } else {
          this.view.btnCreateNewSpeaker.isVisible = true;
          this.view.segSessionSpeakerDetails.removeAll();
          this.view.forceLayout();
        }
        }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
      },

		/**
		 * @function setSpeakerData
		 * @description - this function will set the speaker data to the UI
		 * param {array of JSON} - speaker array
		 **/
		setSpeakerData: function (speakersFromBackEnd) {
          try{
			var speakers = JSON.parse(JSON.stringify(speakersFromBackEnd));
			if (speakers.length) {
				for (var i = 0; i < speakers.length; i++) {
					speakers[i].ImgDel = "removespeaker.png";
					speakers[i].imgAdd = "addspeaker.png";
					speakers[i].lblStripSessionSpeaker = "test";
					speakers[i].txtSpeakerLkProfile = {
						"placeholder": "Linked Public Profile Link",
						"text": speakers[i].linkedin_link
					};
					speakers[i].txtSpeakerName = {
						"placeholder": "Name",
						"text": speakers[i].name
					};
					speakers[i].txtSpeakerDesg = {
						"placeholder": "Designation",
						"text": speakers[i].designation
					};
				}
			} else {
				this.view.btnCreateNewSpeaker.isVisible = true;
			}
			this.view.segSessionSpeakerDetails.removeAll();
			this.view.segSessionSpeakerDetails.setData(speakers);
			this.view.forceLayout();
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		/**
		 * @function setDateRange
		 * @description - this function will set the valid start date and end date to caledar widget
		 * this function also set valid start time and end time for time validation
		 * param {String - startDate} - valid start date
		 * param {String - endDate} - valid end date
		 * param {String - validStartTime} - valid start time
		 * param {String - validEndTime} - valid End time
		 **/
      setDateRange: function (startDate, endDate, validStartTime, validEndTime) {
        try{
        this.validStartTime = this.validEndtime = "";
        var date = startDate.split("/");
        if (this.view.calSessionStartDate.formattedDate === null || this.view.calSessionStartDate.formattedDate === "" || this.view.calSessionStartDate.formattedDate < startDate) {
          this.view.calSessionStartDate.dateComponents = [date[2], date[1], date[0]];
        }
        this.view.calSessionStartDate.validStartDate = [date[2], date[1], date[0]];
        if (this.view.calSessionStartDate.formattedDate === null)
          this.view.calSessionStartDate.dateComponents = date;
        date = endDate.split("/");
        var prevDate = this.view.calSessionStartDate.formattedDate;
        this.view.calSessionStartDate.validEndDate = [date[2], date[1], date[0]];
        if (this.view.calSessionStartDate.formattedDate === null)
          this.view.calSessionStartDate.dateComponents = [date[2], date[1], date[0]];
        if (prevDate !== null && prevDate !== "" && prevDate <= endDate && prevDate >=startDate) {
          this.view.calSessionStartDate.dateComponents = [prevDate.split("/")[2], prevDate.split("/")[1], prevDate.split("/")[0]];
        }
        this.validStartTime = validStartTime;
        this.validEndtime = validEndTime;
        var contextDate = {
          "widget": this.view.calSessionStartDate,
          "anchor": "bottom",
        };
        this.view.calSessionStartDate.setContext(contextDate);
        this.view.calSessionStartDate.dateEditable = false;
        }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
      },

		/**
		 * @function validateTimePattern
		 * @description - this function will validate the time format (HH:MM)
		 * param {String - time} - entered time in UI
		 * return {Boolean} - vlidation result
		 **/
		validateTimePattern: function (time) {
          try{
			if (!time.match(/^(00|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g)) {
				alert("Please enter the valid Time");
				return false;
			}
			return true;
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		/**
		 * @function validateStartTime
		 * @description - this function will validate start
		 * this function check for the validate start time and throw error on validation fails
		 * param {String - startTime} - time in UI
		 **/
		validateStartTime: function (startTime) {
          try{
			if (!this.validateTimePattern(startTime)) {
				this.view.txtSessionStartTime.text = "";
				this.view.txtSessionStartTime.setFocus(true);
				return;
			}
			var date = this.view.calSessionStartDate.formattedDate;
			var stDateuf = this.view.calSessionStartDate.validStartDate;
			var stDate = stDateuf[2] + "/" + stDateuf[1] + "/" + stDateuf[0];
			var edDateuf = this.view.calSessionStartDate.validEndDate;
			var edDate = edDateuf[2] + "/" + edDateuf[1] + "/" + edDateuf[0];
			if (date !== "" && date !== null) {
				if (date == stDate) {
					if (startTime < this.validStartTime) {
						this.view.txtSessionStartTime.setFocus(true);
						this.view.txtSessionStartTime.skin = "skntxterror";
						alert("Start time should be greater than the event start time");
						return;
					} else {
						this.view.txtSessionStartTime.skin = "skntxtnormal";
					}
				}
				if (date == edDate) {
					if (startTime > this.validEndtime) {
						this.view.txtSessionStartTime.setFocus(true);
						this.view.txtSessionStartTime.skin = "skntxterror";
						alert("Start time should be less than the event End time");
						return;
					} else {
						this.view.txtSessionStartTime.skin = "skntxtnormal";
					}
				}
				var ssEdTime = this.view.txtSessionEndTime.text;
				if (ssEdTime !== null && ssEdTime !== "") {
					if (startTime > ssEdTime) {
						this.view.txtSessionStartTime.setFocus(true);
						this.view.txtSessionStartTime.skin = "skntxterror";
						alert("Start time should be less than the  End time");
						return;
					} else {
						this.view.txtSessionStartTime.skin = "skntxtnormal";
					}
				}
				return true;
			} else {
				this.view.calSessionStartDate.skin = "skncalNormal"
					this.view.txtSessionStartTime = "";
				this.view.calSessionStartDate.setFocus(true);
				alert("Please select the valid date");
				return;
			}
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		/**
		 * @function validateEndTime
		 * @description - this function will validate end time
		 * this function check for the validate end time and throw error on validation fails
		 * param {String - endTime} - time in UI
		 **/
		validateEndTime: function (endTime) {
          try{
			if (!this.validateTimePattern(endTime)) {
				this.view.txtSessionEndTime.text = "";
				this.view.txtSessionEndTime.setFocus(true);
				return;
			}
			var date = this.view.calSessionStartDate.formattedDate;
			var stDateuf = this.view.calSessionStartDate.validStartDate;
			var stDate = stDateuf[2] + "/" + stDateuf[1] + "/" + stDateuf[0];
			var edDateuf = this.view.calSessionStartDate.validEndDate;
			var edDate = edDateuf[2] + "/" + edDateuf[1] + "/" + edDateuf[0];
			if (date !== "" && date !== null) {
				this.view.calSessionStartDate.skin = "skncalNormal";
				if (date == stDate) {
					if (endTime < this.validStartTime) {
						this.view.txtSessionEndTime.setFocus(true);
						this.view.txtSessionEndTime.skin = "skntxterror";
						alert("End Time  should be greater than the event start time");
						return;
					} else {
						this.view.txtSessionEndTime.skin = "skntxtnormal";
					}
				}
				if (date == edDate) {
					if (endTime > this.validEndtime) {
						this.view.txtSessionEndTime.setFocus(true);
						this.view.txtSessionEndTime.skin = "skntxterror";
						alert("End time should be less than the event End time");
						return;
					} else {
						this.view.txtSessionEndTime.skin = "skntxtnormal";
					}
				}
				var ssStTime = this.view.txtSessionStartTime.text;
				if (ssStTime !== null && ssStTime !== "") {
					if (endTime < ssStTime) {
						this.view.txtSessionEndTime.setFocus(true);
						this.view.txtSessionEndTime.skin = "skntxterror";
						alert("End time should be greater than the start time");
						return;
					} else {
						this.view.txtSessionEndTime.skin = "skntxtnormal";
					}
				}
				return true;
			} else {
				this.view.calSessionStartDate.skin = "skncalError";
				this.view.calSessionStartDate.setFocus(true);
				this.view.txtSessionEndTime = "";
				alert("Please select the valid date");
				return;
			}
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

		/**
		 * @function formatDate
		 * @description - this function will format the date to required format
		 * param {String - date} - date in UI
		 * param {String - time} - time in UI
		 * return {String} -formatted date (yyyy-mm-ddTHH:MM:SS)
		 **/
		formatDate: function (date, time) {
          try{
            date = date.replace(/\//g, "-") + "T" + time + ":00.0";
            date = new Date(date).toISOString();
            date = date.split('.')[0];
			return date;
          }catch(error){
            kony.print("session template controller"+JSON.stringify(error));
          }
		},

	};
});