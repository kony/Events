define(function () {

  return {
    /**
     * @function constructor
     * @param {Object} baseConfig
     * @param {Object} layoutConfig
     * @param {Object} pspConfig
     */
    constructor: function (baseConfig, layoutConfig, pspConfig) {},
    /** Global variables for custom properties */
    currentRowIndex: 0,
    _masterData: "",
    _eventTitle:"",
    /**
     * @function initGettersSetters
     * @description contains getters/setters for custom properties
     */
    initGettersSetters: function () {
      defineSetter(this, "masterdata", function (x) {
        this._masterData = x;
        kony.print("_masterData is" + JSON.stringify(this._masterData));
      });
      defineSetter(this, "eventTitle", function (x) {
        this._eventTitle = x;
        kony.print("_eventTitle is" + JSON.stringify(this._eventTitle));
      });
    },
    /**
     * @function setData
     * @description This function is used to set the time line data to the segment.
     * @private
     * @param {JSONArray} segData
     */
    setData: function (segData) {
      try{
      var tempData = JSON.stringify(segData);
      var data = JSON.parse(tempData);
      if (data.title === undefined && data.title === null) {
        kony.print("Inside setData TimeLineController Title Not Set" + JSON.stringify(data));
        data.title = "";
      }
      kony.print("Inside setData TimeLineController Calling SetTitle" + JSON.stringify(data));
      this.setTitle(data.title);

      if (data.timeLineList === undefined && data.timeLineList === null) {
        kony.print("Inside setData TimeLineController timeLineList Not Set");
        return;
      }
      kony.print("Inside setData TimeLineController Calling setTimeLineList");
      this.setTimeLineList(data.timeLineList);
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function processTimeLineData
     * @description This function is used to parse the time line data to populate it to segment.
     * @private
     * @param {JSONArray} data
     */
    processTimeLineData: function (data) {
      try{
      kony.print("Inside processTimeLineData TimeLineController" + JSON.stringify(data));
      if (data.length > 0) {
        var prevDate = data[0].date;
        for (var i = 1; i < data.length; i++) {
          if (data[i].date == prevDate) {
            data[i].date = "";
          } else {
            prevDate = data[i].date;
          }
        }
      }
      kony.print("End processTimeLineData TimeLineController" + JSON.stringify(data));
      return data;
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function setTitle
     * @description This function is used to set the title to the component
     * @private
     * @param {string} title
     */
    setTitle: function (title) {
      try{
      kony.print("Inside setTitle TimeLineController");
      this.view.lblTitle.text = title;
      kony.print("End setTitle TimeLineController");
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    prevTime: "",
    prevDate: "",

    /**
     * @function setTimeLineList
     * @description This function is used to preprocess timeline data and set it to the segment.
     * @private
     * @param {JSONArray} timeLineList
     */
    setTimeLineList(timeLineList) {
      try{
      this.view.lblNoSessions.isVisible = false;
      this.view.segTimeLine.removeAll();
      kony.print("Inside setTimeLineList TimeLineController" + JSON.stringify(timeLineList));
      var formattedDate;
      if (timeLineList.length === 0) {
        this.view.lblNoSessions.isVisible = true;
        return;
      }
      this.prevDate = this.getMonth(this.getFormattedDate(timeLineList[0].date));
      this.prevTime = this.getDay(this.getFormattedDate(timeLineList[0].date));
      for (var i = 0; i < timeLineList.length; i++) {
        timeLineList[i].defautValue = "default";
        if (timeLineList[i].date !== undefined && timeLineList[i].date !== null && timeLineList[i].date !== "") {
          formattedDate = this.getFormattedDate(timeLineList[i].date);
          if (this.getMonth(formattedDate) == this.prevDate && i !== 0) {
            timeLineList[i].formattedMonth = "";
            timeLineList = this.getTime(timeLineList, formattedDate, i);
          } else {
            timeLineList = this.getTime(timeLineList, formattedDate, i);
            this.prevDate = this.getMonth(formattedDate);
            timeLineList[i].formattedMonth = this.getMonth(formattedDate)
          }

        } else {
          timeLineList[i].fomattedday = "";
          timeLineList[i].formattedMonth = "";
        }
        if (timeLineList[i].name === undefined || timeLineList[i].name === null) {
          timeLineList[i].name = "";
        }
        if (timeLineList[i].desc === undefined || timeLineList[i].desc === null) {
          timeLineList[i].desc = {
            "isVisible": false
          };
        } else {
          if (timeLineList[i].desc.length > 121)
            timeLineList[i].desc = ((timeLineList[i].desc).slice(0, 120)) + "...";
          timeLineList[i].desc = {
            "isVisible": true,
            "text": timeLineList[i].desc
          };
        }
        if (timeLineList[i].sub1 === undefined || timeLineList[i].sub1 === null){
          timeLineList[i].flxSub1 = {
            "isVisible": false
          };
        }
        else{
          timeLineList[i].flxSub1 = {
            "isVisible": true
          };
          timeLineList[i].sub1 = {
            "text": timeLineList[i].sub1
          };
          if(timeLineList[i].sub1icon!==undefined && timeLineList[i].sub1icon!==null && timeLineList[i].sub1icon!=="")
            timeLineList[i].imgSub1 = {"src":timeLineList[i].sub1icon,
                                       "isVisible" : true};
          else
            timeLineList[i].imgSub1 = {
              "isVisible" : false};
        }
        if (timeLineList[i].sub2 === undefined || timeLineList[i].sub2 === null){
          timeLineList[i].flxSub2 = {
            "isVisible": false
          };
        }
        else{
          timeLineList[i].flxSub2 = {
            "isVisible": true
          };
          timeLineList[i].sub2 = {
            "text": timeLineList[i].sub2
          };
          if(timeLineList[i].sub2icon!==undefined && timeLineList[i].sub2icon!==null && timeLineList[i].sub2icon!=="")
            timeLineList[i].imgSub2 = {"src":timeLineList[i].sub2icon,
                                       "isVisible" : true};
          else
            timeLineList[i].imgSub2 = {
              "isVisible" : false};
        }

        if (timeLineList[i].thums !== undefined && timeLineList[i].thums !== null && timeLineList[i].thums.length > 0) {
          for (var j = 0; j < timeLineList[i].thums.length; j++) {
            var imageSource;
            if (timeLineList[i].thums[j] !== undefined && timeLineList[i].thums[j] !== null && timeLineList[i].thums[j] !== "") {
              for (var key in timeLineList[i].thums[j]) {
                imageSource = key;
              }
              switch (imageSource) {
                case "base64":
                  if (j < 2) {
                    timeLineList[i]["thumb" + (j + 1)] = {
                      "base64": timeLineList[i].thums[j].base64
                    };
                    timeLineList[i]["flex" + (j + 1)] = {
                      "isVisible": true
                    };
                  } else {
                    timeLineList[i]["ExtraImageCountlbl"] = {
                      "isVisible": true,
                      "text": "+" + ((timeLineList[i].thums.length) - j)
                    };
                    break;
                  }
                  break;
                case "rawbytes":
                  if (j < 2) {
                    timeLineList[i]["thumb" + (j + 1)] = {
                      "rawBytes": timeLineList[i].thums[j].rawbytes
                    };
                    timeLineList[i]["flex" + (j + 1)] = {
                      "isVisible": true
                    };
                  } else {
                    timeLineList[i]["ExtraImageCountlbl"] = {
                      "isVisible": true,
                      "text": "+" + ((timeLineList[i].thums.length) - j)
                    };
                    break;
                  }
                  break;
                default:
                  if (j < 2) {
                    timeLineList[i]["thumb" + (j + 1)] = {
                      "src": timeLineList[i].thums[j].src
                    };
                    timeLineList[i]["flex" + (j + 1)] = {
                      "isVisible": true
                    };
                  } else {
                    timeLineList[i]["ExtraImageCountlbl"] = {
                      "isVisible": true,
                      "text": "+" + ((timeLineList[i].thums.length) - j)
                    };
                    break;
                  }

              }

            }
          }
          kony.print("Inside setTimeLineList TimeLineController Thumb Images are" + JSON.stringify(timeLineList));
        } else {
          timeLineList[i].isThumbsImagePresent = {
            "isVisible": false
          }
          kony.print("Inside setTimeLineList TimeLineController thumnail image not set");
        }
      }
      this.setDataToSegment(timeLineList);
      kony.print("End setTimeLineList TimeLineController");
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function getTime
     * @description This function is used to get the time from the timeline list and formatted date.
     * @private
     * @param {JSONArray} timeLineList
     * @param {string} formattedDate
     * @param {string} i
     */
    getTime: function (timeLineList, formattedDate, i) {
      try{
      if (this.getDay(formattedDate) == this.prevTime && i !== 0) {
        if (this.getMonth(formattedDate) == this.prevDate) {
          timeLineList[i].flexRoundCorner = {
            "isVisible": false
          };
          timeLineList[i].lblhorStr = {
            "isVisible": true,
            "text": "dummy"
          };

        } else {
          timeLineList[i].fomattedday = this.getDay(formattedDate);
          this.prevTime = timeLineList[i].fomattedday;
        }
      } else {
        timeLineList[i].fomattedday = this.getDay(formattedDate);
        this.prevTime = timeLineList[i].fomattedday;
      }
      return timeLineList;
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function setDataToSegment
     * @description This function is used to set data to the segment.
     * @private
     * @param {JSONArray} data
     */
    setDataToSegment: function (data) {
      try{
      kony.print("Start setDataToSegment TimeLineController");
      this.view.segTimeLine.removeAll();
      this.view.segTimeLine.widgetDataMap = {
        "lblVerticalstrip": "defautValue",
        "lblNum": "fomattedday",
        "lblStriphor": "defautValue",
        "lblDate": "formattedMonth",
        "lblName": "name",
        "lblDesc": "desc",
        "imgthumb1": "thumb1",
        "imgthumb2": "thumb2",
        "flexImage1": "flex1",
        "flexImage2": "flex2",
        "lblRem": "ExtraImageCountlbl",
        "flexRoundCorner": "flexRoundCorner",
        "lblhorStr": "lblhorStr",
        "flexMainThumbs": "isThumbsImagePresent",
        "lblSub1": "sub1",
        "lblSub2": "sub2",
        "imgSub1" : "imgSub1",
        "imgSub2" : "imgSub2",
        "flxSub1" : "flxSub1",
        "flxSub2" : "flxSub2"
      };
      this.view.segTimeLine.setData(data);
      this.view.flexSegTimeLineMain.isVisible = true;
      this.view.forceLayout();
      kony.print("End setDataToSegment TimeLineController");
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function getFormattedDate
     * @description This function is used to get the formatted date from the provided date string
     * @private
     * @param {string} unFormattedDate
     */
    getFormattedDate: function (unFormattedDate) {
      try{
      var months = ["", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      var dateArray = unFormattedDate.split("-");
      var formattedDate =  (dateArray[2]).split("T")[0]+" "+months[Number(dateArray[1]) * 1]; //+ " " + (dateArray[2]).split("T")[0] + "," + dateArray[0];
      var time = unFormattedDate.split("T")[1];
      formattedDate = formattedDate + "T" + time;
      return formattedDate;
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function getDay
     * @description This function is used to get the day from the provided date string
     * @private
     * @param {string} formattedDate
     */
    getDay: function (formattedDate) {
      try{
      return formattedDate.split("T")[1];
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function getMonth
     * @description This function is used to get the month from the provided date string
     * @private
     * @param {string} formattedDate
     */
    getMonth: function (formattedDate) {
      try{
      return formattedDate.split("T")[0];
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function onClickOfDown
     * @description This function is used to scroll down the segment
     * @private
     */
    onClickOfDown: function () {
      try{
      this.view.btnDown.skin = "btndownactive";
      this.view.btnUp.skin = "btnupinactive";
      var lastRow = (this.view.segTimeLine.data.length) - 1;
      this.view.segTimeLine.selectedRowIndex = [0, lastRow];
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function onClickOfUp
     * @description This function is used to scroll up the segment
     * @private
     */
    onClickOfUp: function () {
      try{
      this.view.btnDown.skin = "btndowninactive";
      this.view.btnUp.skin = "btnupactive";
      this.view.segTimeLine.selectedRowIndex = [0, 0];
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function disableTimeLine
     * @description This function is used to hide the timeline
     * @private
     */
    disableTimeLine: function () {
      try{
      this.view.animate(kony.ui.createAnimation({
        0: {
          top: "10%"
        },
        100: {
          top: "100%"
        }
      }), {
        "duration": 0.25,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
      }, {});
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function onClickOfTimeline
     * @description This function is used to display the user data on click of timeline 
     * @private
     */
    onClickOfTimeline: function () {
      try{
      var data = this.view.segTimeLine.selectedRowItems;
      var finalImageArray = [];
      if (data[0].largeImage !== undefined && data[0].largeImage !== null && data[0].largeImage !== "" && data[0].largeImage.length > 0) {
        for (var i = 0; i < data[0].largeImage.length; i++) {
          var imageSource = "";
          var imageData = {};
          for (var key in data[0].largeImage[i]) {
            imageSource = key;
          }
          switch (imageSource) {
            case "base64":
              imageData.imageSource = {
                "base64": data[0].largeImage[i].base64
              };
              finalImageArray.push(imageData);
              break;
            case "rawbytes":
              imageData.imageSource = {
                "rawBytes": data[0].largeImage[i].rawbytes
              };
              finalImageArray.push(imageData);
              break;
            default:
              imageData.imageSource = {
                "src": data[0].largeImage[i].src
              };
              finalImageArray.push(imageData);
          }

        }

        kony.print("The Large Images are" + JSON.stringify(finalImageArray));
        this.view.segImageSet.widgetDataMap = {
          "imageStatus": "imageSource"
        };
        kony.print("The Large Images afetr widget data map" + JSON.stringify(finalImageArray));
        try{
          this.view.segImageSet.setData(finalImageArray);
          kony.print("The Large Images after set data" + JSON.stringify(data));
          this.view.lblNameDetail.text = data[0].name;
          this.view.txtComments.text = data[0].desc.text;
          this.view.FlexMainImageSet.isVisible = true;
        }catch(err){
          alert("error"+err);
        }

      }
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }        
    },
    /**
     * @function swipeCallback
     * @description callback for swipe on the timeline component.
     * @private
     */
    swipeCallback: function (widgetRef, gestureInfo, context) {
      try{
      if (gestureInfo.swipeDirection == 3 || gestureInfo.swipeDirection == 4) {
        this.view.FlexMainImageSet.isVisible = false;
      }
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function onClickChange
     * @description callback for segment row click.
     * @private
     */
    onClickChange: function () {
      try{
      if (this.currentRowIndex < (this.view.segImageSet.data.length) - 1) {
        this.currentRowIndex++;
        this.view.segImageSet.selectedRowIndex = [0, this.currentRowIndex];

      } else {
        this.currentRowIndex = 0;
        this.view.FlexMainImageSet.isVisible = false;
      }
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function onDeviceClickFormForm
     * @description callback for the form back button click
     * @private
     */
    onDeviceClickFormForm: function () {
      try{
      this.view.FlexMainImageSet.isVisible = false;
      this.currentRowIndex = 0;
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function setDefault
     * @description function to set defult data to the component.
     * @private
     */
    setDefault : function(){
      try{
      this.view.segTimeLine.removeAll();
      this.view.lblNoSessions.isVisible = false;
      this.view.flexSegTimeLineMain.isVisible = false;
      }catch(error){
            kony.print("Time Line Controller"+JSON.stringify(error));
      }
    },

  };
});