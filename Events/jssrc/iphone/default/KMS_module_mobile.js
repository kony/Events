//Type your code here
finalCallback = null;
var USER_MAIL_ID; //default id if user logged in user mail will be replaced
var KMSPROP = {};
var eventDataFromPush = {};
var messagingSvc;
var pushCallbacks = {
    onsuccessfulregistration: regSuccessCallback,
    onfailureregistration: regFailureCallback,
    onlinenotification: onlinePushNotificationCallback,
    offlinenotification: offlinePushNotificationCallback,
    onsuccessfulderegistration: unregSuccessCallback,
    onfailurederegistration: unregFailureCallback
};
var localNotificationCallbacks = {
    "offlinenotification": localOfflineNotificationCallback,
    "onlinenotification": localOnlineNotificationCallback
};

function setAllCallbacks() {
    kony.push.setCallbacks(pushCallbacks);
    kony.localnotifications.setCallbacks(localNotificationCallbacks);
}

function registerKMS() {
    //setAllCallbacks();
    KMSPROP.osType = "iphone";
    var configRegister = [0, 1, 2];
    kony.print(JSON.stringify(configRegister));
    if (kony.store.getItem("isRegisteredForKMS") === undefined || kony.store.getItem("isRegisteredForKMS") === "" || kony.store.getItem("isRegisteredForKMS") === null) {
        kony.push.register(configRegister);
    }
}

function localOfflineNotificationCallback(notiObj, actionId) {
    kony.print("local noti offline callback notiObj " + JSON.stringify(notiObj) + "actionId" + actionId);
    alert("local noti offline callback notiObj " + JSON.stringify(notiObj) + "actionId" + actionId);
}

function localOnlineNotificationCallback(notiObj, actionId) {
    kony.print("local noti online callback notiObj " + JSON.stringify(notiObj) + "actionId" + actionId);
    alert("local noti online callback notiObj " + JSON.stringify(notiObj) + "actionId" + actionId);
}

function regSuccessCallback(regId) {
    kony.store.setItem("isRegisteredForKMS", "true");
    KMSPROP.deviceId = kony.os.deviceInfo().deviceid;
    KMSPROP.device_rec = kony.os.deviceInfo().deviceid;
    messagingSvc = KNYMobileFabric.getMessagingService();
    messagingSvc.register(KMSPROP.osType, KMSPROP.deviceId, regId, KMSPROP.device_rec, successCallbackForSubscribe, failureCallbackForSubscribe);

    function successCallbackForSubscribe(res) {
        kony.application.dismissLoadingScreen();
        kony.print(JSON.stringify(res));
        //S alert("Subscription Successful.");
    }

    function failureCallbackForSubscribe(err) {
        kony.application.dismissLoadingScreen();
        kony.print(JSON.stringify(err));
        kony.print("Subscription Failed.");
        // alert(JSON.stringify(err));
    }
}

function regFailureCallback(errormsg) {
    // kony.application.dismissLoadingScreen();
    // alert("registration failed!!!: "+errormsg);
    kony.print(errormsg);
    kony.print("Registration Failed ");
}

function onlinePushNotificationCallback(msg) {
    kony.print("Message " + JSON.stringify(msg));
    kony.print("online Message: " + msg["content"]);
    var message = msg["content"];
    var title = msg["title"]
    var pspConfig = {};
    var alert = kony.ui.Alert({
        "message": message.split('.')[0],
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": title.split(':')[0],
        "yesLabel": "View",
        "noLabel": "Cancel",
        "alertIcon": "icon.png",
        "alertHandler": function(response) {
            if (response) dispatchNotifiaction(msg.event_id);
        }
    }, pspConfig);
}

function offlinePushNotificationCallback(msg) {
    kony.print(JSON.stringify(msg));
    kony.print("offline Message: " + msg["content"]);
    dispatchNotifiaction(msg.event_id);
}

function dispatchNotifiaction(id) {
    kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
    event_id = id;
    var filter = {
        "$filter": "event_id eq " + "'" + event_id + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
    };
    getOperation(filter, "EventOrchSDO", "events_view", getEventDataSuccess);
}

function unregSuccessCallback() {
    kony.print("Unregisterd Succesfully!!");
}

function unregFailureCallback(errormsg) {
    kony.print(" Unregistration Failed!!" + errormsg);
}

function getEventDataSuccess(response) {
    var filter;
    if (response.records[0].event.length > 0) {
        var eventList = processEventsOrchResponse(response);
        eventDataFromPush.event_data = eventList[0];
        if (kony.store.getItem("isLoggedIn") === "true") {
            filter = {
                "$filter": "event_id eq " + "'" + event_id + "' and user_id eq '" + kony.store.getItem("userId") + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
            };
            getOperation(filter, "EventsSOS", "event_registration", getRegisteredUserSuccess);
        } else {
            getImageData();
        }
    }
}

function getRegisteredUserSuccess(response) {
    if (response.records.length === 1) {
        eventDataFromPush.event_data.isRegister = true;
    } else {
        eventDataFromPush.event_data.isRegister = false;
    }
    getImageData();
}

function getImageData() {
    filter = {
        "$filter": "event_id eq " + "'" + event_id + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
    };
    getOperation(filter, "EventsSOS", "event_images", getEventImagesSuccess);
}

function getEventImagesSuccess(response) {
    eventDataFromPush.imageData = [];
    if (response.records.length > 0) {
        eventDataFromPush.imageData = response.records;
    }
    navigateToEventDetails();
}

function navigateToEventDetails() {
    kony.application.dismissLoadingScreen();
    var navigationObj = new kony.mvc.Navigation("frmEventDetails");
    eventDataFromPush.origin = "push";
    navigationObj.navigate(eventDataFromPush);
}
notificationid = 1;

function createLocalNotification(eventDetails) {
    notificationid++;
    var notificationId = notificationid.toString();
    var date = "25 jun 2018 01:01:00 +0530";
    var format = "dd MMM yyyy HH:mm:ss Z";
    var message = "Local notification Received";
    var title = "Title";
    var categoryId = "calendar";
    kony.localnotifications.create({
        "id": notificationId,
        "dateTime": {
            "date": date,
            "format": format
        },
        "message": message,
        "title": title,
        "categoryId": categoryId,
        "pspConfig": {
            "badge": 1,
            "sound": kony.localnotifications.DEFAULT_SOUND
        }
    });
}