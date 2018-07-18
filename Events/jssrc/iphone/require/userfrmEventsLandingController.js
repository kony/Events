define({
    /*************************************************************************
     *	Name	:	Events Landing Form
     *	Author	:	kony
     *	Purpose	:	To fetch events from the backend
     *************************************************************************/
    //Controller variables
    activityName: null,
    segmentData: [],
    user_event_data: [],
    /**
     * @member of  frmEventsLandingController.js
     * @function onNavigate
     * @param params - The params from navigate Object
     * @description - This is the overridden function of the controller
     * This method checks the origin and loads the event list accordingly
     **/
    onNavigate: function(params) {
        currentController = "frmEventsLandingController";
        if (params !== undefined) {
            switch (params.origin) {
                case "search":
                    this.search(params);
                    this.view.flexEventRegConformation.isVisible = false;
                    break;
                case "searchback":
                    break;
                case "login":
                    this.getUserAndEventData();
                    this.view.flexEventRegConformation.isVisible = false;
                    break;
                case "register":
                    this.view.flexEventRegConformation.isVisible = true;
                    break;
                case "alreadyregistered":
                    this.getUserAndEventData();
                    break;
                case "details":
                    break;
                case "myevents":
                    this.getMyEvents();
                    break;
                case "pastevents":
                    this.getMyPastEvents();
                    break;
                case "profile":
                    break;
                case "loginBack":
                    this.currentMode = "allevents";
                    break;
                default:
                    this.view.flexEventRegConformation.isVisible = false;
                    this.checkIsLogin();
            }
        } else {
            this.view.flexEventRegConformation.isVisible = false;
            this.checkIsLogin();
        }
        this.setProfileData();
        this.activityName = null;
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function setProfileData
     * @description - This function will check the login status and
     * set the profile data
     **/
    setProfileData: function() {
        if (kony.store.getItem("isLoggedIn") === "true") {
            this.view.hamburger.btnClickIsVisible = false;
            var profileData = JSON.parse(kony.store.getItem("profile"));
            this.view.hamburger.headingText = profileData.first_name;
            this.view.hamburger.headingTextIsVisible = true;
            this.view.hamburger.subHeadingText = profileData.mail;
            this.view.hamburger.subHeadingTextIsVisible = true;
            if (profileData.profile !== undefined) {
                this.view.hamburger.profileImageSrc = profileData.profile;
            } else {
                this.view.hamburger.profileImageSrc = "profile.png";
            }
            this.view.hamburger.profileImageIsVisible = true;
        } else {
            this.view.hamburger.btnClickIsVisible = true;
            this.view.hamburger.headingTextIsVisible = false;
            this.view.hamburger.subHeadingTextIsVisible = false;
            this.view.hamburger.profileImageIsVisible = false;
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function logoutVisiblity
     * @description - This function will check the login status and
     * set the logout button visibility
     **/
    logoutVisiblity: function() {
        try {
            if (kony.store.getItem("isLoggedIn") === "true") {
                this.view.hamburger.btnLogoutVisibility = true;
            } else {
                this.view.hamburger.btnLogoutVisibility = false;
            }
        } catch (e) {
            alert(e.message);
            this.stopLoadingScreen();
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function checkIsLogin
     * @description - This function will check the login status and
     * fetch the event list accordingly
     **/
    checkIsLogin: function() {
        this.currentMode = "allevents";
        if (kony.store.getItem("isLoggedIn") === "true") {
            this.getUserAndEventData();
        } else {
            this.getEventsData();
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function getMyPastEvents
     * @description - This function will check the login status and
     * fetch the past events by user_id
     **/
    getMyPastEvents: function() {
        this.view.lblNoEvents.isVisible = false;
        this.currentMode = "pastevents";
        if (kony.store.getItem("isLoggedIn") === "true") {
            this.view.lblHeaderTitle.text = "My Past Events";
            this.getUserAndEventData();
        } else {
            this.navigateToLoginWithParams("pastevents"); // navigate the login
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function getAllEvents
     * @description - This function will check the login status and
     * fetch the all events
     **/
    getAllEvents: function() {
        this.view.lblNoEvents.isVisible = false;
        this.currentMode = "allevents";
        if (kony.store.getItem("isLoggedIn") === "true") {
            this.view.lblHeaderTitle.text = "Upcoming Events";
            this.getUserAndEventData(); // call the service to fetch the user register status and eventsList
        } else {
            this.getEventsData(); // fetches the event list
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function getMyEvents
     * @description - This function will check the login status and
     * fetch the  events  registered by user_id
     **/
    getMyEvents: function() {
        this.view.lblNoEvents.isVisible = false;
        this.currentMode = "myevents";
        if (kony.store.getItem("isLoggedIn") === "true") {
            this.view.lblHeaderTitle.text = "My Events";
            this.getUserAndEventData();
        } else {
            this.navigateToLoginWithParams("myevents"); // navigate the login
        }
    },
    /******Start Service Calls********/
    /**
     * @member of  frmEventsLandingController.js
     * @function getUserAndEventData
     * @description - This function will make service call to backend to fetch the registered
     * user of all events
     **/
    getUserAndEventData: function() {
        this.startLoadingScreen();
        try {
            var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
                "access": "online"
            });
            var dataObject = new kony.sdk.dto.DataObject("event_registration");
            var odataUrl = "$filter=user_id eq '" + kony.store.getItem("userId") + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))";
            dataObject.odataUrl = odataUrl;
            var options = {
                "dataObject": dataObject
            };
            objSvc.fetch(options, this.eventUserSuccessCallback.bind(this), this.eventUserFailureCallback.bind(this));
        } catch (err) {
            this.stopLoadingScreen();
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function eventUserSuccessCallback
     * @description - This function is the successcallback for fetch registered user
     * this function will assign the response to controller variable and calls getEventdata()
     **/
    eventUserSuccessCallback: function(response) {
        this.user_event_data = response.records;
        this.getEventsData(); //Fetches all event data
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function eventUserFailureCallback
     * @description - This function is the failure for fetch registered user
     **/
    eventUserFailureCallback: function(error) {
        this.stopLoadingScreen();
        alert(JSON.stringify(error));
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function getEventsData
     * @description - This function fetches the events between today and six months from today
     **/
    getEventsData: function() {
        this.view.lblNoEvents.isVisible = false;
        this.startLoadingScreen();
        var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventOrchSDO", {
            "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject("events_view");
        var options = {
            "dataObject": dataObject
        };
        objSvc.fetch(options, this.eventFetchSuccessCallback.bind(this), this.eventFetchFailureCallback.bind(this));
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function eventFetchSuccessCallback
     * @description - success call back of getEventdata.
     **/
    eventFetchSuccessCallback: function(response) {
        this.stopLoadingScreen();
        if (response.records[0].event.length > 0) {
            var eventList = processEventsOrchResponse(response);
            //Checks the login status and merge the registered events
            if (kony.store.getItem("isLoggedIn") === "true") {
                switch (this.currentMode) {
                    case "myevents":
                        eventList = this.getEventsBetweenTwoDates(eventList, this.getDate(0), this.getDate(6));
                        break;
                    case "allevents":
                        eventList = this.getEventsBetweenTwoDates(eventList, this.getDate(0), this.getDate(6));
                        break;
                    case "pastevents":
                        eventList = this.getEventsLessThanToday(eventList, this.getDate(0));
                        break;
                    default:
                        kony.print("Invalid Case");
                }
                this.mergeUserEvents(eventList);
            } else {
                eventList = this.getEventsBetweenTwoDates(eventList, this.getDate(0), this.getDate(6));
                this.ProcessData(eventList);
            }
        } else {
            this.setEmptySegment();
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function eventFetchFailureCallback
     * @description - failure call back of getEventdata.
     **/
    eventFetchFailureCallback: function(error) {
        this.stopAnimation();
        alert("something went wrong.Please try later" + JSON.stringify(error));
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function getEventImages
     * @description - This call the bakend service to fetch the gallery images of the selected event.
     **/
    getEventImages: function(callback, event_id) {
        this.event_images = [];
        showLaoding();
        try {
            var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
                "access": "online"
            });
            var dataObject = new kony.sdk.dto.DataObject("event_images");
            var odataUrl = "$filter=event_id eq '" + event_id + "'";
            dataObject.odataUrl = odataUrl;
            var options = {
                "dataObject": dataObject
            };
            objSvc.fetch(options, function(response) {
                dismissLoading();
                if (response.records.length > 0) {
                    this.event_images = response.records;
                }
                if (callback !== undefined) {
                    callback();
                }
            }.bind(this), function(error) {
                dismissLoading();
                alert("something went wrong");
            }.bind(this));
        } catch (excp) {
            dismissLoading();
            alert(excp.message);
        }
    },
    /******End Service Calls********/
    mergeUserEvents: function(eventList) {
        var tempEventList = [];
        if (eventList.length > 0) {
            for (var i = 0; i < eventList.length; i++) {
                if (this.currentMode == "myevents" || this.currentMode == "pastevents") {
                    if (this.isEventPresent(eventList[i].event_id)) {
                        eventList[i].isRegister = this.isEventPresent(eventList[i].event_id);
                        tempEventList.push(eventList[i]);
                    }
                } else {
                    eventList[i].isRegister = this.isEventPresent(eventList[i].event_id);
                    tempEventList.push(eventList[i]);
                }
            }
            this.ProcessData(tempEventList);
        } else {
            this.setEmptySegment();
        }
    },
    isEventPresent: function(eventid) {
        if (this.user_event_data.length > 0) {
            for (var i = 0; i < this.user_event_data.length; i++) {
                if (eventid === this.user_event_data[i].event_id) {
                    return true;
                }
            }
            return false;
        } else {
            return false;
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function filterEventsBetweenTwoDates
     * @description - This wil return the event list between two given dates
     * @param {array of JSON} - eventList
     **/
    getEventsBetweenTwoDates: function(eventlist, startDate, endData) {
        var eventsBetweenTwoDates = [];
        for (var i = 0; i < eventlist.length; i++) {
            if (eventlist[i].start_date >= startDate && eventlist[i].start_date <= endData) {
                eventsBetweenTwoDates.push(eventlist[i]);
            }
        }
        return eventsBetweenTwoDates;
    },
    /* * @member of  frmEventsLandingController.js
     * @function getEventsLessThanToday
     * @description - This wil return the event list less than today
     * @param {array of JSON} - eventList 
     **/
    getEventsLessThanToday: function(eventlist, today) {
        var eventsBetweenTwoDates = [];
        for (var i = 0; i < eventlist.length; i++) {
            if (eventlist[i].start_date < today) {
                eventsBetweenTwoDates.push(eventlist[i]);
            }
        }
        return eventsBetweenTwoDates;
    },
    ProcessData: function(eventData) {
        var eventList = this.ProcessEventData(eventData);
        setUp(eventList);
        this.segmentData = eventList;
        this.setDataToEvent(eventList);
    },
    /******Start Data Processing********/
    /**
     * @member of  frmEventsLandingController.js
     * @function ProcessEventData
     * @description - This wil process the event list from the backend and set to the form
     * @param {array of JSON} - eventList response from the backend
     **/
    ProcessEventData: function(eventList) {
        var tag = "ProcessEventData";
        for (var i = 0; i < eventList.length; i++) {
            //Procesing Banner URL
            if (!checkJSON(eventList[i], "banner_url")) {
                eventList[i].banner_url = "eventsdef.png";
            } else {
                eventList[i].banner_url = eventList[i].banner_url;
            }
            //Procesing Location based on Event Type
            printLog(tag, "Processing Location Details");
            if (checkJSON(eventList[i], "typename")) {
                if (eventList[i].typename == "offline") {
                    if (checkJSON(eventList[i], "cityname")) {
                        printLog(tag, "Location Found");
                        eventList[i].flexEventType = {
                            "isVisible": true
                        };
                        eventList[i].eventType = eventList[i].cityname;
                        eventList[i].imageTypeIcon = "mapsmallicon.png";
                    } else {
                        printLog(tag, "Location is null");
                        eventList[i].flexEventType = {
                            "isVisible": false
                        };
                    }
                } else {
                    eventList[i].flexEventType = {
                        "isVisible": true
                    };
                    eventList[i].imageTypeIcon = "onlineicon.png";
                    eventList[i].eventType = "Online";
                }
            }
            //Processing Date
            printLog(tag, "Processing Date");
            if (checkJSON(eventList[i], "noofdays")) {
                if (eventList[i].noofdays > 1) {
                    eventList[i].time = eventList[i].noofdays + " Days";
                    eventList[i].date = checkJSON(eventList[i], "start_date_mon") && checkJSON(eventList[i], "end_date_mon") ? eventList[i].start_date_mon.split(" ")[0] + " - " + eventList[i].end_date_mon.split(" ")[0] : "";
                } else {
                    eventList[i].date = checkJSON(eventList[i], "start_date_mon") ? eventList[i].start_date_mon.split(" ")[0] : "";
                    eventList[i].time = checkJSON(eventList[i], "start_time") && checkJSON(eventList[i], "end_time") ? eventList[i].start_time + "-" + eventList[i].end_time : "";
                }
            } else {
                printLog(tag, "No of days not foud");
            }
            eventList[i].month = checkJSON(eventList[i], "start_date_mon") ? eventList[i].start_date_mon.split(" ")[1] : "";
            //setting isregisterLabel
            if (checkJSON(eventList[i], "isRegister")) {
                if (eventList[i].isRegister) {
                    eventList[i].imageRegister = {
                        "isVisible": true,
                    };
                } else {
                    eventList[i].imageRegister = {
                        "isVisible": false,
                    };
                }
            } else {
                eventList[i].imageRegister = {
                    "isVisible": false,
                };
            }
        }
        return eventList;
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function setDataToEvent
     * @description - This will set the date to segment
     * @param {array of JSON} - eventList response from the backend
     **/
    setDataToEvent: function(eventList) {
        if (eventList.length) {
            this.view.segEventList.removeAll();
            this.view.segEventList.widgetDataMap = {
                "imageBanner": "banner_url",
                "rchTextDate": "date",
                "rchtxtMonth": "month",
                "lblTime": "time",
                "lblEventTitle": "name",
                "lblCategory": "categoryname",
                "lblEventType": "eventType",
                "flexEventType": "flexEventType",
                "imageTypeIcon": "imageTypeIcon",
                "imageRegister": "imageRegister"
            };
            this.view.segEventList.setData(eventList);
        } else {
            this.setEmptySegment();
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function setEmptySegment
     * @description - This will remove all the date from the segment and sets
    the visibility of lblNoEvents;
     * @param {array of JSON} - eventList response from the backend
     **/
    setEmptySegment: function() {
        this.view.segEventList.removeAll();
        var lblValue = "";
        switch (this.view.lblHeaderTitle.text) {
            case "My Events":
                lblValue = "You Don't have any Events Registered..";
                break;
            case "Upcoming Events":
                lblValue = "There are no Upcoming Events. Please Try Later..";
                break;
            case "My Past Events":
                lblValue = "You Don't have any Past Events Registered..";
                break;
            default:
                kony.print("Invalid Case Value");
        }
        this.view.lblNoEvents.isVisible = true;
        this.view.lblNoEvents.text = lblValue;
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function startLoadingScreen
     * @description - This will start animating the skeleton screen and set visibility true to flexSkeMain
     **/
    startLoadingScreen: function() {
        this.view.flexSkeMain.isVisible = true;
        this.skeletonScreenAnimation();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function stopLoadingScreen
     * @description - This will stops animating the skeleton screen and set visibility false to flexSkeMain
     **/
    stopLoadingScreen: function() {
        this.view.flexSkeMain.isVisible = false;
        this.stopAnimation();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function skeletonScreenAnimation
     * @description - This will animate all the flexes present in flexSkeMain one by one
     **/
    skeletonScreenAnimation: function() {
        this.animateSkeleton(this.view.flex1);
        this.animateSkeleton(this.view.flex2);
        this.animateSkeleton(this.view.flxImage);
        this.animateSkeleton(this.view.flxImage1);
        this.animateSkeleton(this.view.flxHeading);
        this.animateSkeleton(this.view.flxHeading1);
        this.animateSkeleton(this.view.flxContent1);
        this.animateSkeleton(this.view.flxContent2);
        this.animateSkeleton(this.view.flxContent3);
        this.animateSkeleton(this.view.flxContent4);
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function stopAnimation
     * @description - This will stop animation all the flexes present in flexSkeMain one by one
     **/
    stopAnimation: function() {
        this.animateSkeletonStop(this.view.flex1);
        this.animateSkeletonStop(this.view.flex2);
        this.animateSkeletonStop(this.view.flxImage);
        this.animateSkeletonStop(this.view.flxImage1);
        this.animateSkeletonStop(this.view.flxHeading);
        this.animateSkeletonStop(this.view.flxHeading1);
        this.animateSkeletonStop(this.view.flxContent1);
        this.animateSkeletonStop(this.view.flxContent2);
        this.animateSkeletonStop(this.view.flxContent3);
        this.animateSkeletonStop(this.view.flxContent4);
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function animateSkeleton
     * @description - This will animate backgroundColor opacity of the given flex step by step
     * @param {Object} - The Widget reference to animate
     **/
    animateSkeleton: function(widget) {
        var animDefinition = {
            "0": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "backgroundColor": "f0f1f3",
                "opacity": 0.4
            },
            "50": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "backgroundColor": "f0f1f3",
                "opacity": 0.5
            },
            "75": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "backgroundColor": "f0f1f3",
                "opacity": 0.9
            },
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "backgroundColor": "f0f1f3",
                "opacity": 1.0
            }
        };
        var timingConfig = {
            "delay": 0,
            "iterationCount": 0,
            "fillMode": kony.anim.FILL_MODE_NONE,
            "duration": 1.0,
            "direction": kony.anim.DIRECTION_ALTERNATE
        };
        widget.animate(kony.ui.createAnimation(animDefinition), timingConfig);
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function animateSkeletonStop
     * @description - This will stop animate backgroundColor opacity of the given flex
     * @param {Object} - The Widget reference to animate
     **/
    animateSkeletonStop: function(widget) {
        var animDefinition = {
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "backgroundColor": "f0f1f3",
                "opacity": 1.0
            }
        };
        var timingConfig = {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_NONE,
            "duration": 1.0,
            "direction": kony.anim.DIRECTION_NONE
        };
        widget.animate(kony.ui.createAnimation(animDefinition), timingConfig);
    },
    //Hamburger opertations starts
    /**
     * @member of  frmEventsLandingController.js
     * @function animation
     * @description - This will scale and animate the given object according to input params
     * @param {Object} - The Widget reference to animate
     * @param {Number} - scaleX - Value to scale horizontally
     * @param {Number} - scaleY - value to scale vertically
     * @param {String} - left - value to animate left
     * @param {function} - callback - callback function to be executed at animation end
     **/
    animation: function(object, scaleX, scaleY, left, flag, callback) {
        var defaultImage = kony.ui.makeAffineTransform();
        defaultImage.scale(scaleX, scaleY);
        var duration = 0.5;
        object.animate(kony.ui.createAnimation({
            100: {
                "left": left,
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": defaultImage
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: duration
        }, {
            animationEnd: function() {
                if (callback !== undefined) {
                    callback();
                }
            }.bind(this)
        });
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function inAnimationEnd
     * @description - This will call the navigation function of respective menu clicks after animation
     **/
    inAnimationEnd: function() {
        switch (this.activityName) {
            case "login":
                this.logIn();
                break;
            case "profile":
                this.goToProfile();
                break;
            case "myevents":
                this.getMyEvents();
                break;
            case "pastevents":
                this.getMyPastEvents();
                break;
            case "allevents":
                this.getAllEvents();
                break;
            default:
                kony.print("Invalid Case");
        }
        this.activityName = null;
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function menuClick
     * @description - This will call the animation function to show the hamburger component
     **/
    menuClick: function() {
        this.animation(this.view.flexEventMainLanding, 0.7, 0.7, "60%", true);
        this.animation(this.view.flxShadow, 0.7, 0.7, "60%", true);
        this.view.hamburger.left = "0%";
        this.view.forceLayout();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function menuClick
     * @description - This will set the menu items to hamburger on click of hamburger icon and
    shows the hamburger menu
     **/
    listMenuClick: function() {
        this.view.flxCover.zIndex = 10;
        this.view.flxCover.isVisible = true;
        this.view.flxCover.left = "70%";
        this.view.flxCover.width = "30%";
        this.view.flxCover.height = "100%";
        this.view.flxShadow.isVisible = true;
        this.view.forceLayout();
        var loginMenuData = [{
            text: "Profile",
            callback: this.profileOnClick
        }, {
            text: "My Events",
            callback: this.myEventsOnClick
        }, {
            text: "My Past Events",
            callback: this.pastEventsOnclick
        }, {
            text: "All Events",
            callback: this.allEventsOnClick
        }];
        this.view.hamburger.addMenuItems(loginMenuData);
        this.menuClick();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function profileOnClick
     * @description - This function will call the flxCoverOnClick function to make the hamburger original
    position on click of profile menu
     * this function will set the activity name to profile
     **/
    profileOnClick: function() {
        this.activityName = "profile";
        this.flxCoverOnClick();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function myEventsOnClick
     * @description - This function will call the flxCoverOnClick function to make the hamburger original
    position on click of MyEvents menu
     * this function will set the activity name to myevents
     **/
    myEventsOnClick: function() {
        this.activityName = "myevents";
        this.flxCoverOnClick();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function pastEventsOnclick
     * @description - This function will call the flxCoverOnClick function to make the hamburger original
    position on click of My Past Events menu
     * this function will set the activity name to pastevents
     **/
    pastEventsOnclick: function() {
        this.activityName = "pastevents";
        this.flxCoverOnClick();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function allEventsOnClick
     * @description - This function will call the flxCoverOnClick function to make the hamburger original
    position on click of All Events menu
     * this function will set the activity name to Allevents
     **/
    allEventsOnClick: function() {
        this.activityName = "allevents";
        this.flxCoverOnClick();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function onClickLogin
     * @description - This function will call the flxCoverOnClick function to make the hamburger original
    position on click of login menu
     * this function will set the activity name to login
     **/
    onClickLogin: function() {
        this.activityName = "login";
        this.flxCoverOnClick();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function flxCoverOnClick
     * @description - This function will call the animation function to make the hamburger original
    position on click of any menu item
     **/
    flxCoverOnClick: function() {
        this.view.flxShadow.isVisible = false;
        this.view.hamburger.left = "-100%";
        this.animation(this.view.flxShadow, 1, 1, "0%", true);
        this.animation(this.view.flexEventMainLanding, 1, 1, "0%", true, this.inAnimationEnd);
        this.view.forceLayout();
        this.view.flxCover.isVisible = false;
        this.view.flxShadow.isVisible = false;
        this.view.forceLayout();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function goToProfile
     * @description - This function will check the login status and navigate to profile or login
     **/
    goToProfile: function() {
        if (kony.store.getItem("isLoggedIn") === "true") {
            this.navToProfile();
        } else {
            this.navigateToLoginWithParams("profile");
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function navToProfile
     * @description - navigation function profile
     **/
    navToProfile: function() {
        var navObj = new kony.mvc.Navigation("frmProfile");
        navObj.navigate();
    },
    /**** search operation starts********/
    /**
     * @member of  frmEventsLandingController.js
     * @function search
     * @description - this function will search from the segment data based on the input text in event name and event category
     * @param - {object} - params - {
     *								searchText : <text>,
     *							    selectedCat : [<array of Categories selected>]
     *							    }
     **/
    search: function(params) {
        this.view.lblNoEvents.isVisible = false;
        var searchResult = [];
        for (var i = 0; i < this.segmentData.length; i++) {
            if (params.searchText !== "" && params.searchText !== null) {
                if (this.isSearchTextPresent(this.segmentData[i].name.toLowerCase(), params.searchText.toLowerCase())) {
                    if (params.selectedCat.length > 0 && this.isSelectedCatPresent(this.segmentData[i].categoryname.toLowerCase(), params.selectedCat)) {
                        searchResult.push(this.segmentData[i]);
                    }
                }
            } else {
                if (params.selectedCat.length > 0 && this.isSelectedCatPresent(this.segmentData[i].categoryname.toLowerCase(), params.selectedCat)) {
                    searchResult.push(this.segmentData[i]);
                }
            }
        }
        if (searchResult.length > 0) {
            this.setDataToEvent(searchResult);
        } else {
            this.view.segEventList.removeAll();
            this.view.lblNoEvents.isVisible = true;
            this.view.lblNoEvents.text = "No Event Found For your Search..";
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function isSearchTextPresent
     * @description - this function will check the given search text is present in the given string
     * @param - {value} - given text
     * @param - {searchText} - given search text
     **/
    isSearchTextPresent: function(value, searchText) {
        var result = value.indexOf(searchText, 0);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function isSearchTextPresent
     * @description - this function will check the given selected category is present in the given category list
     * @param - {value} - given selected category
     * @param - {categoryList} - given category list
     **/
    isSelectedCatPresent: function(value, categoryList) {
        var isCategory = false;
        for (var i = 0; i < categoryList.length; i++) {
            if (value === categoryList[i]) {
                isCategory = true;
                break;
            }
        }
        return isCategory;
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function onSegRowClick
     * @description - this function will navigate to event details with selected event_images and event_data
     **/
    onSegRowClick: function() {
        var params = {};
        var navToEventDetail = new kony.mvc.Navigation("frmEventDetails");
        params["sharingData"] = this.view.segEventList.selectedRowItems;
        params["event_data"] = this.view.segEventList.selectedItems[0];
        params["imageData"] = this.event_images;
        navToEventDetail.navigate(params);
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function navigateToLoginWithParams
     * @description - this function will navigate to login with origin data,
     * @param {String} - the origin indicates from where the login is initiated,
     * the possible values are "myevents","pastevents","profile"
     **/
    navigateToLoginWithParams: function(data) {
        var paramData = {};
        paramData.origin = data;
        var navToEventDetail = new kony.mvc.Navigation("frmLogin");
        navToEventDetail.navigate(paramData);
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function logIn
     * @description - this function will navigate to login onClick of login button on hamburger
     **/
    logIn: function() {
        var paramData = {};
        paramData.origin = "login";
        var navToEventDetail = new kony.mvc.Navigation("frmLogin");
        navToEventDetail.navigate(paramData);
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function onLogout
     * @description - this function will remove the store items stored post login,
     * set the profile data to pre-login, get the all events data
     **/
    onLogout: function() {
        this.flxCoverOnClick();
        kony.store.removeItem("profile");
        kony.store.removeItem("isLoggedIn");
        kony.store.removeItem("userId");
        this.setProfileData();
        this.getEventsData();
        this.logoutVisiblity();
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function getDate
     * @description - util function to get the data aftet noOfmonths
     * @param {Number} - period in months from today
     * @return {String} - return a <date>T<time> String after specfied months
     **/
    getDate: function(noOfMonths) {
        var month = {
            "jan": "01",
            "feb": "02",
            "mar": "03",
            "apr": "04",
            "may": "05",
            "jun": "06",
            "jul": "07",
            "aug": "08",
            "sep": "09",
            "oct": "10",
            "nov": "11",
            "dec": "12",
        };
        var d = new Date();
        d.setMonth(d.getMonth() + noOfMonths);
        var dateString = d.toDateString().split(" ");
        var formattedDateString = dateString[3] + "-";
        formattedDateString = formattedDateString + month[dateString[1].toLowerCase()] + "-";
        formattedDateString = formattedDateString + dateString[2] + "T";
        formattedDateString = formattedDateString + this.getTimeInAMPMFormat(d);
        return formattedDateString;
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function getTimeInAMPMFormat
     * @description - util function to convert the time to AM PM Format
     * @param {date Object} - a date object
     * @return {String} - return a T<time>AM|PM String
     **/
    getTimeInAMPMFormat: function(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var strTime = hours + ':' + minutes + ":00";
        return strTime;
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function shareEvent
     * @description - this functionwill take screen shot of the selected event list flex and
     * calls sharing component to share the event
     * @param {Object} - widget - Widget reference
     * @param {selectedItem} - slected Event data
     **/
    shareEvent: function(widget, selectedItem) {
        this.view.rchTextDateSS.text = selectedItem.date;
        this.view.rchtxtMonthSS.text = selectedItem.month;
        this.view.lblTimeSS.text = selectedItem.time;
        this.view.lblEventTitleSS.text = selectedItem.name;
        this.view.lblCategorySS.text = selectedItem.categoryname;
        this.view.imageTypeIconSS.src = selectedItem.imageTypeIcon;
        this.view.lblEventTypeSS.text = selectedItem.addressLine1;
        this.view.imageBannerSS.src = selectedItem.banner_url
        this.view.flexEventSS.forceLayout();
        var img = kony.image.createImageFromSnapShot(this.view.flexEventSS);
        var imageRawBytes = img.getImageAsRawBytes();
        var base64 = kony.convertToBase64(imageRawBytes);
        this.view.socialSharing.setContent(base64);
        this.view.socialSharing.checkDeviceInfo();
        sendMetric(selectedItem.event_id, "share");
    },
    /**
     * @member of  frmEventsLandingController.js
     * @function reloadFromServer
     * @description - this function will be called on pull of the segment,
     * This will refresh the segment date based the current mode
     **/
    reloadFromServer: function() {
        switch (this.currentMode) {
            case "myevents":
                this.getMyEvents();
                break;
            case "allevents":
                this.checkIsLogin();
                break;
            case "pastevents":
                this.getMyPastEvents();
                break;
            default:
                kony.print("Invalid Case");
        }
    }
});