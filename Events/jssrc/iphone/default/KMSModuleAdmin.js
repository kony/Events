var pushConfig = {};
/**
 * @function doCustomLogin
 * @description - this function will call the customAccountLogin to get the claims token
 **/
function doCustomLogin(pushPayload) {
    try {
        pushConfig = pushPayload;
        var customAuth = KNYMobileFabric.getIdentityService("customAccountLogin");
        customAuth.login({}, getSubscribers, function(error) {
            kony.print("Something went wrong in cusom login" + JSON.stringify(error));
        });
    } catch (error) {
        alert("something went wrong please try later");
    }
}
/**
 * @function getSubscribers
 * @description - this function will get all the subcribers for the events app
 **/
function getSubscribers() {
    var intObj = kony.sdk.getCurrentInstance().getIntegrationService("KMSService");
    intObj.invokeOperation("getAllSubscribers", {}, {
        "appid": pushConfig.appId
    }, function(response) {
        kony.print(JSON.stringify(response.subscribers));
        pushConfig.ksid = response.subscribers;
        sendPushNotification(pushConfig);
    }, function(error) {
        kony.print("Something Went Wrong " + JSON.stringify(error));
    });
}
/**
 * @function sendPushNotification
 * @description - this function will send the push notofication
 **/
function sendPushNotification() {
    var intObj = kony.sdk.getCurrentInstance().getIntegrationService("KMSService");
    intObj.invokeOperation("sendPushNotification", {}, pushConfig, function(response) {
        kony.print(JSON.stringify(response));
    }, function(error) {
        alert("Something Went Wrong " + JSON.stringify(error));
    });
}