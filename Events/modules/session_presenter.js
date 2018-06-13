//#ifdef desktopweb
	/**
	 * @function processSessionAndPresenters
	 * @description - this function will process the reponse from the backend and formats the date to 
	 * the required date format
	 * @param {response} - response from the backend
	 * @return{Array of JSON Objects} - returns the processed response
	 **/
function processSessionAndPresenters(response){
    var sessionListWithPresenters = [];
    for(var i=0; i<response.records[0].event_sessions.length; i++){
    var session = response.records[0].event_sessions[i];
    session.session_start_date = session.session_start_date.replace(" ", 'T');
    session.session_end_date = session.session_end_date.replace(" ", 'T');
    //session.session_start_date = session.start_date.split("T")[0]+"T"+dateFormatting.getTimeinAMPMformat(session.start_date);
    //session.session_end_date = session.end_date.split("T")[0]+"T"+dateFormatting.getTimeinAMPMformat(session.end_date);
    if(response.records[0].presenter!==undefined && response.records[0].presenter.length>0){
      var presenter_list = getPresentersForSelectedSession(response.records[0].presenter,session.event_session_id);
      if(presenter_list.length>0){
         for(var j=0; j<presenter_list.length; j++){
        var presenter = presenter_list[j];
        for(var key in session){
          presenter[key] = session[key];
        }
        sessionListWithPresenters.push(presenter);
       }
      }else{
        sessionListWithPresenters.push(session);
      }
    }else{
      sessionListWithPresenters.push(session);
    }
  }
  sortResponseByDate(sessionListWithPresenters);
  return sessionListWithPresenters;
}
   /**
	 * @function getPresentersForSelectedSession
	 * @description - this function will fetch the presenters for the given session
	 * @param {Array of JSON} - array of presenter list
     * @param {String} - session_id
	 * @return{Array of JSON Objects} - returns presenter list
	 **/
    function getPresentersForSelectedSession(presenterList,session_id){
      var selectedPresenterList = [];
      for(var i=0; i<presenterList.length; i++){
        if(presenterList[i].session_id === session_id){
          selectedPresenterList.push(presenterList[i]);
        }
      }
      return selectedPresenterList;
    }
   /**
	 * @Object dateFormatting
	 * @description - this object will process the date and format accrodingly
	 **/
var dateFormatting = {
    /**
	 * @function getMonth
	 * @description - this function will get the month from the given date in words
     * @param {String} - date
     * @return {String} - Month name in words
	 **/
  getMonth : function(date){
    var monthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var d = new Date(date);
    return monthArray[d.getMonth()];
  },
  
  
   /**
	 * @function getDate
	 * @description - this function will get the date from the given date object
     * @param {String} - date
     * @return {String} - date of the month
	 **/
  getDate : function(date){
    var d = new Date(date);
    return d.getDate();
  },
    
    /**
	 * @function getYear
	 * @description - this function will get the year from the given date object
     * @param {String} - date
     * @return {String} - year 
	 **/
  getYear : function(date){
    var d = new Date(date);
    return d.getFullYear();
  },
  
  /**
	 * @member of  frmEventsLandingController.js
	 * @function getTimeInAMPMFormat
	 * @description - util function to convert the time to AM PM Format
	 * @param {String } - valid Date
	 * @return {String} - return a T<time>AM|PM String
	 **/
  getTimeinAMPMformat : function(ufdate){
    var date = new Date(ufdate);
    var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ampm;
	return strTime;
  },
 
  
   /**
	 * @function getDifferenceBetweenTwoDatesinDays
	 * @description - this function will get no of days between the given two dates
     * @param {String} - date
     * @return {String} - no of days 
	 **/
  getDifferenceBetweenTwoDatesinDays : function(end_date,start_date){
     var firstDate = new Date(end_date);
	 var secondDate = new Date(start_date);
     var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
 	 return (Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay))))+1;
  }
};

   /**
	 * @function sortResponseByDate
	 * @description - this function will call the sort method of an array to sort the reponseby date
     * @param {Array Oj JSON} - response
	 **/
function sortResponseByDate(response){
 response.sort(sort_by_date);
}
   /**
	 * @function sort_by_date
	 * @description - custom sort function
	 **/
function sort_by_date(a, b) {
    return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
}
//#endif