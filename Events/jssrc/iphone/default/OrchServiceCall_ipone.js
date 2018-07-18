	/**
	 * @function processEventsViewResponse
	 * @description - this function will process the reponse from the backend and formats the date to 
	 * the required date format
	 * @param {response} - response from the backend
	 * @return{Array of JSON Objects} - returns the processed response
	 **/
	function processEventsOrchResponse(response) {
	    if (response.records[0].event !== undefined && response.records[0].event.length > 0) {
	        response.records[0].event.forEach(function(event) {
	            event.start_date = event.start_date.replace(" ", 'T');
	            event.end_date = event.end_date.replace(" ", 'T');
	            event.noofdays = dateFormatting.getDifferenceBetweenTwoDatesinDays(event.end_date, event.start_date);
	            event.start_date_mon = dateFormatting.getDate(event.start_date) + " " + dateFormatting.getMonth(event.start_date);
	            event.start_time = dateFormatting.getTimeinAMPMformat(event.start_date);
	            event.end_date_mon = dateFormatting.getDate(event.end_date) + " " + dateFormatting.getMonth(event.end_date);
	            event.end_time = dateFormatting.getTimeinAMPMformat(event.end_date);
	            event.start_year = dateFormatting.getYear(event.start_date);
	            event.end_year = dateFormatting.getYear(event.end_date);
	            event.categoryname = getEventCategory(event.event_category);
	            event.typename = getEventType(event.event_type);
	            if (response.records[0].location !== undefined && response.records[0].location.length > 0) {
	                var location = getObjectByEventId(response.records[0].location, event.event_id);
	                if (location !== undefined) {
	                    for (var location_key in location) {
	                        event[location_key] = location[location_key];
	                    }
	                }
	            }
	            if (response.records[0].event_banners !== undefined && response.records[0].event_banners.length > 0) {
	                var banner = getObjectByEventId(response.records[0].event_banners, event.event_id);
	                if (banner !== undefined) {
	                    for (var banner_key in banner) {
	                        event[banner_key] = banner[banner_key];
	                    }
	                }
	            }
	        });
	        sortResponseByDate(response.records[0].event);
	        return response.records[0].event;
	    }
	}
	/**
	 * @function getObjectByEventId
	 * @description - this function will return the Object which matches with given event_id in the given array
	 * @param {Array Of JSON} - response
	 * @param {String} - event_id
	 * @return {JSON} - Object which matched with the event id
	 **/
	function getObjectByEventId(response, event_id) {
	    for (var i = 0; i < response.length; i++) {
	        if (response[i].event_id == event_id) {
	            return response[i];
	        }
	    }
	    return;
	}
	/**
	 * @function processSessionAndPresenters
	 * @description - this function will process the reponse from the backend and formats the date to 
	 * the required date format
	 * @param {response} - response from the backend
	 * @return{Array of JSON Objects} - returns the processed response
	 **/
	function processSessionAndPresenters(response) {
	    var sessionListWithPresenters = [];
	    for (var i = 0; i < response.records[0].event_sessions.length; i++) {
	        var session = response.records[0].event_sessions[i];
	        session.start_date = session.session_start_date.replace(" ", 'T');
	        session.end_date = session.session_end_date.replace(" ", 'T');
	        session.session_start_date = session.start_date.split("T")[0] + "T" + dateFormatting.getTimeinAMPMformat(session.start_date);
	        session.session_end_date = session.end_date.split("T")[0] + "T" + dateFormatting.getTimeinAMPMformat(session.end_date);
	        if (response.records[0].presenter !== undefined && response.records[0].presenter.length > 0) {
	            var presenter_list = getPresentersForSelectedSession(response.records[0].presenter, session.event_session_id);
	            if (presenter_list.length > 0) {
	                for (var j = 0; j < presenter_list.length; j++) {
	                    var presenter = presenter_list[j];
	                    for (var key in session) {
	                        presenter[key] = session[key];
	                    }
	                    sessionListWithPresenters.push(presenter);
	                }
	            } else {
	                sessionListWithPresenters.push(session);
	            }
	        } else {
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
	function getPresentersForSelectedSession(presenterList, session_id) {
	    var selectedPresenterList = [];
	    for (var i = 0; i < presenterList.length; i++) {
	        if (presenterList[i].session_id === session_id) {
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
	    getMonth: function(date) {
	        var localDate;
	        var d;
	        var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	        d = localDate = new Date(date);
	        return monthArray[localDate.getMonth()];
	    },
	    /**
	     * @function getDate
	     * @description - this function will get the date from the given date object
	     * @param {String} - date
	     * @return {String} - date of the month
	     **/
	    getDate: function(date) {
	        var localDate;
	        var d;
	        d = localDate = new Date(date);
	        return localDate.getDate();
	    },
	    /**
	     * @function getYear
	     * @description - this function will get the year from the given date object
	     * @param {String} - date
	     * @return {String} - year 
	     **/
	    getYear: function(date) {
	        var localDate;
	        var d;
	        d = localDate = new Date(date);
	        return localDate.getFullYear();
	    },
	    /**
	     * @member of  frmEventsLandingController.js
	     * @function getTimeInAMPMFormat
	     * @description - util function to convert the time to AM PM Format
	     * @param {String } - valid Date
	     * @return {String} - return a T<time>AM|PM String
	     **/
	    getTimeinAMPMformat: function(ufdate) {
	        var localDate;
	        var date;
	        date = localDate = new Date(ufdate)
	        var hours = localDate.getHours();
	        var minutes = localDate.getMinutes();
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
	    getDifferenceBetweenTwoDatesinDays: function(end_date, start_date) {
	        var firstDate, secondDate, localFirstDate, localSecondDate;
	        firstDate = localFirstDate = new Date(end_date);
	        secondDate = localSecondDate = new Date(start_date);
	        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	        return (Math.round(Math.abs((localFirstDate.getTime() - localSecondDate.getTime()) / (oneDay)))) + 1;
	    }
	};
	/**
	 * @function sortResponseByDate
	 * @description - this function will call the sort method of an array to sort the reponseby date
	 * @param {Array Oj JSON} - response
	 **/
	function sortResponseByDate(response) {
	    response.sort(sort_by_date);
	}
	/**
	 * @function sort_by_date
	 * @description - custom sort function
	 **/
	function sort_by_date(a, b) {
	    return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
	}
	/**
	 * @function setEventCategory
	 * @description - This function will get the event category
	 **/
	function getEventCategory(type) {
	    switch (type) {
	        case "1":
	            return "Training";
	        case "2":
	            return "Workshops";
	        case "3":
	            return "Hackathon";
	        case "4":
	            return "Speaker Series";
	        case "5":
	            return "Confrence";
	        default:
	            kony.print("Not a validkey");
	    }
	}
	/**
	 * @function getEventType
	 * @description - This function will get the eventType
	 **/
	function getEventType(id) {
	    switch (id) {
	        case "1":
	            return "online";
	        case "2":
	            return "offline";
	        default:
	            kony.print("Not a validkey");
	    }
	}