//Type your code here//Type your code here
function parseEventRegistration(record) {
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
}

function mapBannerToEvent(evenList, bannerList) {
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
}

function mapLocationToEvent(evenList, locationList) {
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
}

function getEventWithRegisteredUser(eventList, registerTable) {
    if (eventList === null || eventList === undefined || registerTable === null || registerTable === undefined) {
        return null;
    }
    var eventLenth = eventList.length;
    var eventId;
    var mapData;
    var subscribers, locations, bannerURLS;
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
}

function parseRegistration(registration) {
    var result = null;
    if (registration !== null || registration !== undefined) {
        var eventId, subscriberList, user;
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
}

function getUser(userId, userList) {
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
}

function getDateRange(startDateString, endDateString) {
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
    dateFromServer = new Date(startDateString);
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
}

function getMonthString(monthIndex) {
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
}

function checkValue(value) {
    if (value === null || value === undefined) return "";
    return value;
}

function getEventType(eventTypeCode) {
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
    return eventType;
}

function getEventCategory(eventCategoryCode) {
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
}

function getRemoveAnimation() {
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
}
var record = {
    "opstatus_queryeventregistration8141": 0,
    "opstatus_queryevent8579": 0,
    "opstatus_queryusers2939": 0,
    "opstatus": 0,
    "event_banners": [{
        "event_id": 82,
        "img_name": "servlet.png",
        "event_banner_id": 73,
        "banner_url": "https://app.box.com/shared/static/tjisrb265ey8i8g2mfx4h6jhwnmlwdop.png"
    }],
    "location": [{
        "event_id": 82,
        "latitude": "17.4478531",
        "cityname": "Hyderabad",
        "addressLine1": "Phoneix avnace",
        "location": "Kony india pvt LTD",
        "location_id": 76,
        "longitude": "78.37137229999999"
    }, {
        "event_id": 82,
        "latitude": "17.4478531",
        "cityname": "Hyderabad",
        "addressLine1": "Phoneix avnace",
        "location": "Kony india pvt LTD",
        "location_id": 74,
        "longitude": "78.37137229999999"
    }],
    "event": [{
        "end_date": "2018-05-13 23:59:00.0",
        "event_id": 1,
        "event_type": 2,
        "isdisabled": 0,
        "name": "Women's Day Celebration",
        "short_desc": "A woman is an epitome of beauty, wisdom and care",
        "event_category": 1,
        "long_desc": "She has climbed the mountains and dived into the ocean; she has matched the steps with every man in the world.",
        "start_date": "2018-05-08 00:00:00.0"
    }, {
        "end_date": "2018-05-15 19:00:00.0",
        "event_id": 82,
        "event_type": 2,
        "isdisabled": 0,
        "name": "Offline Sync",
        "short_desc": "Test Sync Event",
        "event_category": 1,
        "long_desc": "Test Sync Event",
        "start_date": "2018-05-11 01:00:00.0"
    }, {
        "end_date": "2018-05-06 01:00:00.0",
        "event_id": 2,
        "event_type": 1,
        "isdisabled": 0,
        "name": "Git for Visualizer Projects",
        "short_desc": "The cross-platform nature of Visualizer makes for a very complex project anatomy",
        "event_category": 1,
        "long_desc": "During this webinar, we\u2019ll try to address some of these questions and help you get started with \u2014or get better at\u2014 using Git as a versioning tool for Visualizer projects.",
        "start_date": "2018-05-05 09:00:00.0"
    }, {
        "end_date": "2018-06-13 01:00:00.0",
        "event_id": 3,
        "event_type": 2,
        "isdisabled": 0,
        "name": "Kony Developer Bootcamp",
        "short_desc": "Learn how to effectively use Kony Visualizer (formally Kony Studio) to develop multi-channel applications for smartphones, tablets, and the desktop.",
        "event_category": 2,
        "long_desc": "This 2 week course covers everything from using widgets, services, and the Kony API to develop the mobile application to server-side development to extending the application through Kony's Foreign Function Interface.",
        "start_date": "2018-06-13 09:00:00.0"
    }, {
        "end_date": "2018-05-20 23:59:00.0",
        "event_id": 4,
        "event_type": 2,
        "isdisabled": 0,
        "name": "Kony Knowledge Week",
        "short_desc": "Kony Knowledge Week is a quarterly technical article drive whereby Kony experts, both internally and externally, are invited to write technical articles for publication on Kony Base Camp. ",
        "event_category": 3,
        "long_desc": "The articles cover a wide range of topics, including security, components, integrations and more",
        "start_date": "2018-05-16 00:00:00.0"
    }, {
        "end_date": "2018-05-30 17:00:00.0",
        "event_id": 36,
        "event_type": 2,
        "isdisabled": 0,
        "name": "Kony Developer Bootcamp",
        "event_category": 1,
        "long_desc": "This week focuses on Kony Visualizer to define and design the user interface, and on the fundamental skills for creating, configuring, managing, and maintaining mobile apps using Kony Visualizer and Kony Fabric.",
        "start_date": "2018-05-29 08:00:00.0"
    }, {
        "end_date": "2018-07-26 16:00:00.0",
        "event_id": 39,
        "event_type": 2,
        "isdisabled": 0,
        "name": "Containers and Docker",
        "event_category": 1,
        "long_desc": "Hands-on exercise with Docker on the container format that is now a de facto standard used by all major cloud   providers",
        "start_date": "2018-07-26 16:00:00.0"
    }, {
        "end_date": "2018-04-25 02:00:00.0",
        "event_id": 59,
        "event_type": 2,
        "isdisabled": 1,
        "name": "Test Event",
        "short_desc": "Test Short Description",
        "event_category": 1,
        "long_desc": "Test Long Description",
        "start_date": "2018-04-24 02:00:00.0"
    }, {
        "end_date": "2018-04-11 00:00:00.0",
        "event_id": 60,
        "event_type": 1,
        "isdisabled": 1,
        "name": "test sample",
        "short_desc": "sampel",
        "event_category": 1,
        "long_desc": "sample",
        "start_date": "2018-04-10 00:30:00.0"
    }],
    "users": [{
        "mail": "test@gmail.com",
        "user_id": 1,
        "login_mode": 1,
        "first_name": "test"
    }, {
        "mail": "kony.sampleapps@gmail.com",
        "user_id": 7,
        "last_name": "student",
        "login_mode": 1,
        "first_name": "kony"
    }, {
        "mail": "farzana.jana@yahoo.co.in",
        "user_id": 8,
        "last_name": "Shaik",
        "login_mode": 1,
        "first_name": "Farzana"
    }, {
        "mail": "inboxofvignesh94@gmail.com",
        "user_id": 9,
        "profile": "https://media.licdn.com/dms/image/C5103AQGJAijuGQ6UDg/profile-displayphoto-shrink_100_100/0?e=1528023600&v=alpha&t=tq6SRbZsKXUyC-TyhWVcOVkYZP5YTrBzrSsJ4dHvSJc",
        "last_name": "karunanithi",
        "login_mode": 1,
        "first_name": "vigneshwaran"
    }],
    "httpStatusCode": 0,
    "event_registration": [{
        "event_id": 1,
        "user_id": 1,
        "registration_id": 01
    }, {
        "event_id": 82,
        "user_id": 1,
        "registration_id": 11
    }, {
        "event_id": 82,
        "user_id": 7,
        "registration_id": 12
    }, {
        "event_id": 82,
        "user_id": 9,
        "registration_id": 13
    }, {
        "event_id": 82,
        "user_id": 8,
        "registration_id": 14
    }, {
        "event_id": 4,
        "user_id": 7,
        "registration_id": 21
    }, {
        "event_id": 3,
        "user_id": 7,
        "registration_id": 22
    }, {
        "event_id": 1,
        "user_id": 7,
        "registration_id": 23
    }, {
        "event_id": 2,
        "user_id": 9,
        "registration_id": 25
    }, {
        "event_id": 4,
        "user_id": 9,
        "registration_id": 28
    }]
};