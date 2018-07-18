var KMSPROP = {};
var eventDataFromPush = {};
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
/*
 * @function setAllCallbacks
 * this function will set the call backs for push notification and local notification
 */
function setAllCallbacks() {
    try {
        kony.push.setCallbacks(pushCallbacks);
        kony.localnotifications.setCallbacks(localNotificationCallbacks);
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function registerKMS
 * this function will register the divice for GMS console and APS console using
 * register API
 */
function registerKMS() {
    try {
        KMSPROP.osType = "androidgcm";
        var configRegister = {
            senderid: "150665757263"
        };
        //this will check whether the device is al
        if (kony.store.getItem("isRegisteredForKMS") === undefined || kony.store.getItem("isRegisteredForKMS") === "" || kony.store.getItem("isRegisteredForKMS") === null) {
            kony.push.register(configRegister);
        }
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function localOfflineNotificationCallback
 * local notification callback  - offline
 */
function localOfflineNotificationCallback(notiObj, actionId) {
    try {
        kony.print("local noti offline callback notiObj " + JSON.stringify(notiObj) + "actionId" + actionId);
        alert("local noti offline callback notiObj " + JSON.stringify(notiObj) + "actionId" + actionId);
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function localOnlineNotificationCallback
 * local notification callback  - online
 */
function localOnlineNotificationCallback(notiObj, actionId) {
    try {
        kony.print("local noti online callback notiObj " + JSON.stringify(notiObj) + "actionId" + actionId);
        alert("local noti online callback notiObj " + JSON.stringify(notiObj) + "actionId" + actionId);
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function regSuccessCallback
 * This function is registration success callback on successful registration of APS or GCM
 */
function regSuccessCallback(regId) {
    try {
        kony.store.setItem("isRegisteredForKMS", "true");
        KMSPROP.deviceId = kony.os.deviceInfo().deviceid;
        KMSPROP.device_rec = kony.os.deviceInfo().deviceid;
        var messagingSvc = KNYMobileFabric.getMessagingService();
        messagingSvc.register(KMSPROP.osType, KMSPROP.deviceId, regId, KMSPROP.device_rec, successCallbackForSubscribe, failureCallbackForSubscribe);

        function successCallbackForSubscribe(res) {
            kony.application.dismissLoadingScreen();
            kony.print(JSON.stringify(res));
        }

        function failureCallbackForSubscribe(err) {
            kony.store.removeItem("isRegisteredForKMS");
            kony.application.dismissLoadingScreen();
            kony.print(JSON.stringify(err));
            kony.print("Subscription Failed.");
        }
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function regFailureCallback
 * This function is registration failure callback on failure registration of APS or GCM
 */
function regFailureCallback(errormsg) {
    kony.print(errormsg);
    kony.print("Registration Failed ");
}
/*
 * @function onlinePushNotificationCallback
 * This function is the callback for online push notification
 */
function onlinePushNotificationCallback(msg) {
    try {
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
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function offlinePushNotificationCallback
 * This function is the callback for offline push notification
 */
function offlinePushNotificationCallback(msg) {
    try {
        kony.print(JSON.stringify(msg));
        kony.print("offline Message: " + msg["content"]);
        dispatchNotifiaction(msg.event_id);
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function dispatchNotifiaction
 * This function will get the event details by the event_id
 */
function dispatchNotifiaction(id) {
    try {
        showLoading();
        event_id = id;
        var filter = {
            "$filter": "event_id eq " + "'" + event_id + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
        };
        getOperation(filter, "EventOrchSDO", "events_view", getEventDataSuccess);
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}

function unregSuccessCallback() {
    kony.print("Unregisterd Succesfully!!");
}

function unregFailureCallback(errormsg) {
    kony.print(" Unregistration Failed!!" + errormsg);
}
/*
 * @function getEventDataSuccess
 * This function is the success call back of the event_details service call
 * this function will call event registration table by user_id and event_id
 */
function getEventDataSuccess(response) {
    try {
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
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function getRegisteredUserSuccess
 * This function is the success call back of the event_registration service call
 * this function will call the image data service call
 */
function getRegisteredUserSuccess(response) {
    try {
        if (response.records.length === 1) {
            eventDataFromPush.event_data.isRegister = true;
        } else {
            eventDataFromPush.event_data.isRegister = false;
        }
        getImageData();
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function getImageData
 * This function will call the service call to get the images
 */
function getImageData() {
    try {
        filter = {
            "$filter": "event_id eq " + "'" + event_id + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
        };
        getOperation(filter, "EventsSOS", "event_images", getEventImagesSuccess);
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function getEventImagesSuccess
 * This function is the success call back of get image data
 */
function getEventImagesSuccess(response) {
    try {
        eventDataFromPush.imageData = [];
        if (response.records.length > 0) {
            eventDataFromPush.imageData = response.records;
        }
        navigateToEventDetails();
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}
/*
 * @function navigateToEventDetails
 * This function will call navigate function to frmEventDetails
 */
function navigateToEventDetails() {
    try {
        kony.application.dismissLoadingScreen();
        var navigationObj = new kony.mvc.Navigation("frmEventDetails");
        eventDataFromPush.origin = EVENT_CONSTANS.MODE.PUSH;
        navigationObj.navigate(eventDataFromPush);
    } catch (err) {
        kony.print("KMS Module" + JSON.stringify(err));
    }
}