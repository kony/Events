define(function () {

	return {
		constructor: function (baseConfig, layoutConfig, pspConfig) {},
		initGettersSetters: function () {},
        
        /**
		 * @function checkLayoutAndChange - do layout call back for segment
		 * @description - This function is used to set height of theflexDateandStrip based on the segment height
		 */
		checkLayoutAndChange: function () {
          try{
			var segHeight = this.view.segSessionandSpeaker.frame["height"];
			this.view.flexDateandStrip.height = segHeight + "dp";
          }catch(err){
            kony.print("Session Preview Controller"+JSON.stringify(err));
          }
		},
		/**
		 * @function setData
		 * @description - This function sets the dolayout for segment to get the height of the segment after set data
		 */
		setData: function (data) {
          try{
			this.view.segSessionandSpeaker.doLayout = this.checkLayoutAndChange;
			var processedDataForComponent = this.getProcessedDataForComponent(data);
			this.setDataToSegment(processedDataForComponent.segmentData);
            this.setCurrentDay(processedDataForComponent.currentDay);
          }catch(err){
            kony.print("Session Preview Controller"+JSON.stringify(err));
          }
		},
		
        /**
		 * @function getProcessedDataForComponent
		 * @description - This function will process the data for the segment
		 */
		getProcessedDataForComponent: function (data) {
          try{
			var sessionandSpeakerDataForSeg = [];
            for (var i = 0; i < data.length; i++) {
                var sessionDataForHeader = {};
                var speakerDataForSection = [];
                if (i !== 0) {
                    sessionDataForHeader.horizontalLine = "dummy";
                }
                sessionDataForHeader.session_name = data[i].session_name;
                sessionDataForHeader.dateRange = data[i].Day + "," + data[i].start_time + "-" + data[i].end_time;
                if (data[i].speakerDet !== undefined && data[i].speakerDet.length) {
                    for (var j = 0; j < data[i].speakerDet.length; j++) {
                        data[i].speakerDet[j].profile = "profile.png";
                        if (data[i].speakerDet[j].linkedin_link !== "") {
                            data[i].speakerDet[j].linkedin_link = {
                                "isVisible": true,
                                "text": data[i].speakerDet[j].linkedin_link
                            };
                        } else {
                            data[i].speakerDet[j].linkedin_link = {
                                "isVisible": false,
                                "text": data[i].speakerDet[j].linkedin_link
                            };
                        }
                        speakerDataForSection.push(data[i].speakerDet[j]);
                    }
                } else {
                    speakerDataForSection = [];
                }
                sessionandSpeakerDataForSeg.push([sessionDataForHeader, speakerDataForSection]);
            }
            var processedDataForComp = {};
            var date = data[0].date > 10 ? data[0].date : "0" + data[0].date;
            processedDataForComp.currentDay = date + " " + data[0].month;
            processedDataForComp.segmentData = sessionandSpeakerDataForSeg;
            return processedDataForComp;
          }catch(err){
            kony.print("Session Preview Controller"+JSON.stringify(err));
          }
		},
		
    	/**
		 * @function setDataToSegment
		 * @description - This function is used to set data to segment
		 */
		setDataToSegment: function (data) {
          try{
			this.view.segSessionandSpeaker.removeAll();
			this.view.segSessionandSpeaker.widgetDataMap = {
				"lblEventAddress": "session_name",
				"lblEventDateTime": "dateRange",
				"lblHorizontalLine": "horizontalLine",
				"lblDesignation": "designation",
				"lblLinkedIn": "linkedin_link",
				"imgSpeaker": "profile",
				"lblSpeakerName": "name"
			};
			this.view.segSessionandSpeaker.setData(data);
          }catch(err){
            kony.print("Session Preview Controller"+JSON.stringify(err));
          }
		},
      	
        /**
		 * @function setTitle
		 * @description - This function will set the date and month to the label- lblDateMonth
		 */
        setCurrentDay : function(date){
          try{
          this.view.lblDateMonth.text = date;
          }catch(err){
            kony.print("Session Preview Controller"+JSON.stringify(err));
          }
        }
	};
});