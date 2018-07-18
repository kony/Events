//#ifdef desktopweb
/**
  * @function parseEventRegistration
  * @description - This function will parse the event response for manage user UI
  */
 function parseEventRegistration(record) {
 	try {
 		var registerTable = parseRegistration(record.event_registration);
 		var finalResult;
 		if (registerTable === null) {
 			alert("No user registered!");
 		} else {
 			registerTable = mapLocationToEvent(registerTable, record.location);
 			registerTable = mapBannerToEvent(registerTable, record.event_banners);
 			finalResult = getEventWithRegisteredUser(record.event, registerTable);
 		}
 		return finalResult;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }

 /**
  * @function mapBannerToEvent
  * @description - This function will map the banner to the respective event
  */
 function mapBannerToEvent(evenList, bannerList) {
 	try {
 		var bannerListLength = bannerList.length;
 		var eventId;
 		var eventBanner;
 		for (var i = 0; i < bannerListLength; i++) {
 			eventId = bannerList[i]["event_id"];
 			eventBanner = evenList[eventId]["bannerURL"];
 			if (eventBanner === undefined) {
 				eventBanner = [];
 				eventBanner.push(bannerList[i]);
 				evenList[eventId]["bannerURL"] = eventBanner;
 			} else {
 				eventBanner.push(bannerList[i]);
 			}
 		}
 		return evenList;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }

 /**
  * @function mapLocationToEvent
  * @description - This function will map the location to the respective event
  */
 function mapLocationToEvent(evenList, locationList) {
 	try {
 		var locationLength = locationList.length;
 		var eventId;
 		var eventLocations;
 		for (var i = 0; i < locationLength; i++) {
 			eventId = locationList[i]["event_id"];
 			eventLocations = evenList[eventId]["locations"];
 			if (eventLocations === undefined) {
 				eventLocations = [];
 				eventLocations.push(locationList[i]);
 				evenList[eventId]["locations"] = eventLocations;
 			} else {
 				eventLocations.push(locationList[i]);
 			}
 		}
 		return evenList;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }

 /**
  * @function getEventWithRegisteredUser
  * @description - This function will map the registered users to the event
  */
 function getEventWithRegisteredUser(eventList, registerTable) {
 	try {
 		if (eventList === null || eventList === undefined || registerTable === null || registerTable === undefined) {
 			return null;
 		}
 		var eventLenth = eventList.length;
 		var eventId;
 		var mapData;
 		var subscribers,
 		locations,
 		bannerURLS;
 		for (var i = 0; i < eventLenth; i++) {
 			eventId = eventList[i]["event_id"];
 			mapData = registerTable[eventId];
 			if (mapData === undefined) {
 				eventList[i]["subscribers"] = [];
 				eventList[i]["locations"] = [];
 				eventList[i]["bannerURL"] = [];
 				continue;
 			}
 			subscribers = mapData["subscribers"];
 			if (subscribers !== null && subscribers !== undefined) {
 				eventList[i]["subscribers"] = subscribers;
 			} else {
 				eventList[i]["subscribers"] = [];
 			}

 			locations = mapData["locations"];
 			if (locations !== null && locations !== undefined) {
 				eventList[i]["locations"] = locations;
 			} else {
 				eventList[i]["locations"] = [];
 			}

 			bannerURLS = mapData["bannerURL"];
 			if (bannerURLS !== null && bannerURLS !== undefined) {
 				eventList[i]["bannerURL"] = bannerURLS;
 			} else {
 				eventList[i]["bannerURL"] = [];
 			}
 		}
 		return eventList;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
 function parseRegistration(registration) {
 	try {
 		var result = null;
 		if (registration !== null || registration !== undefined) {
 			var eventId,
 			subscriberList,
 			user;
 			var registrationRecordLength = registration.length;
 			result = {};
 			for (var i = 0; i < registrationRecordLength; i++) {
 				eventId = registration[i]["event_id"];
 				subscriberList = result[eventId];
 				if (subscriberList === undefined) {
 					subscriberList = {
 						"subscribers": []
 					};
 					user = getUser(registration[i]["user_id"], record.users);
 					if (user !== null) {
 						user["registration_id"] = registration[i]["registration_id"];
 						subscriberList["subscribers"].push(user);
 						result[eventId] = subscriberList;

 					}
 				} else {
 					user = getUser(registration[i]["user_id"], record.users);
 					if (user !== null) {
 						user["registration_id"] = registration[i]["registration_id"];
 						subscriberList["subscribers"].push(user);
 					}
 				}
 			}
 		}
 		return result;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
 function getUser(userId, userList) {
 	try {
 		var user = null;
 		if (userList !== undefined && userList !== null && !isNaN(userId)) {
 			var recordLength = userList.length;
 			for (var i = 0; i < recordLength; i++) {
 				if (userId === userList[i]["user_id"]) {
 					user = {};
 					user["email"] = checkValue(userList[i]["mail"]);
 					user["user_id"] = checkValue(userList[i]["user_id"]);
 					user["profile"] = checkValue(userList[i]["profile"]);
 					user["last_name"] = checkValue(userList[i]["last_name"]);
 					user["login_mode"] = checkValue(userList[i]["login_mode"]);
 					user["first_name"] = checkValue(userList[i]["first_name"]);
 					break;
 				}
 			}
 		}
 		return user;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
 /**
  * @function getDateRange
  * @description - This function will get the start and end date in range
  */
 function getDateRange(startDateString, endDateString) {
 	try {
 		var dateText;
 		if (startDateString === null || startDateString === undefined || startDateString.trim() === "") {
 			dateText = "Dates not available."
 				return dateText;
 		}
 		if (endDateString === null || endDateString === undefined || endDateString.trim() === "") {
 			dateText = "Dates not available."
 				return dateText;
 		}
 		dateFromServer = new Date(startDateString);
 		var startDate = new Date(dateFromServer.getTime() - dateFromServer.getTimezoneOffset() * 60 * 1000);
 		dateFromServer = new Date(endDateString);
 		var endDate = new Date(dateFromServer.getTime() - dateFromServer.getTimezoneOffset() * 60 * 1000);
 		if ((startDate instanceof Date) && (endDate instanceof Date)) {
 			var sDate = startDate.getDate();
 			var sMonth = getMonthString(startDate.getMonth());
 			var sYear = startDate.getFullYear();
 			var eDate = endDate.getDate();
 			var eMonth = getMonthString(endDate.getMonth());
 			var eYear = endDate.getFullYear();
 			dateText = sDate + " " + sMonth + " - " + eDate + " " + eMonth + ", " + eYear;
 		} else {
 			dateText = "Dates not available."
 				return dateText;
 		}
 		return dateText;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
 /**
  * @function getMonthString
  * @description - This function will get month Name based on Number
  */
 function getMonthString(monthIndex) {
 	try {
 		var month = "";
 		switch (monthIndex) {
 		case 0:
 			month = "Jan";
 			break;
 		case 1:
 			month = "Feb";
 			break;
 		case 2:
 			month = "Mar";
 			break;
 		case 3:
 			month = "Apr";
 			break;
 		case 4:
 			month = "May";
 			break;
 		case 5:
 			month = "Jun";
 			break;
 		case 6:
 			month = "Jul";
 			break;
 		case 7:
 			month = "Aug";
 			break;
 		case 8:
 			month = "Sep";
 			break;
 		case 9:
 			month = "Oct";
 			break;
 		case 10:
 			month = "Nov";
 			break;
 		case 11:
 			month = "Dec";
 			break;
 		default:
 			month = monthIndex;
 		}
 		return month;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
 /**
  * @function checkValue
  * @description - This function will check for null and undefined
  */
 function checkValue(value) {
 	try {
 		if (value === null || value === undefined)
 			return "";
 		return value;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
 /**
  * @function getEventType
  * @description - This function give the event type name based on the event type id
  */
 function getEventType(eventTypeCode) {
 	try {
 		var eventType;
 		switch (eventTypeCode) {
 		case "1":
 			eventType = "online";
 			break;
 		case "2":
 			eventType = "offline";
 			break;
 		default:
 			eventType = "";
 		}
 		return eventType
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
 /**
  * @function getEventCategory
  * @description - This function give the category name based on the category id
  */
 function getEventCategory(eventCategoryCode) {
 	try {
 		var eventCategory;
 		switch (eventCategoryCode) {
 		case "1":
 			eventCategory = "Training";
 			break;
 		case "2":
 			eventCategory = "Workshops";
 			break;
 		case "3":
 			eventCategory = "Hackathon";
 			break;
 		case "4":
 			eventCategory = "Speaker Series";
 			break;
 		case "5":
 			eventCategory = "Conference";
 			break;
 		case "6":
 			eventCategory = "Special Events";
 			break;
 		default:
 			eventCategory = "";
 		}
 		return eventCategory;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
 function getRemoveAnimation() {
 	try {
 		var transformProp1 = kony.ui.makeAffineTransform();
 		transformProp1.scale(1, 0);
 		var transformProp3 = kony.ui.makeAffineTransform();
 		transformProp3.scale(1, 1);
 		var animDefinitionOne = {
 			0: {
 				"transform": transformProp3
 			},
 			100: {
 				"transform": transformProp1
 			}
 		};
 		var animDefinition = kony.ui.createAnimation(animDefinitionOne);
 		var animConfig = {
 			"duration": 0.3,
 			"iterationCount": 1,
 			"delay": 0,
 			"fillMode": kony.anim.FORWARDS
 		};
 		var finalAnimation = {
 			definition: animDefinition,
 			config: animConfig
 		};
 		return finalAnimation;
 	} catch (err) {
 		kony.print("frmManageUserOperations" + JSON.stringify(err));
 	}
 }
//#endif