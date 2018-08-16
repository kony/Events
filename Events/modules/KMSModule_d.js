//#ifdef desktopweb
var pushConfig = {};
/**
 * @function doCustomLogin
 * @description - this function will call the customAccountLogin to get the claims token
 **/
function doCustomLogin(pushPayload) {
	try {
		pushConfig = pushPayload;
		var customAuth = KNYMobileFabric.getIdentityService("customAccountLogin");
		customAuth.login({},
			getSubscribers,
			function (error) {
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
	try {
		var intObj = kony.sdk.getCurrentInstance().getIntegrationService("KMSService");
		intObj.invokeOperation("getAllSubscribers", {}, {
			"appid": pushConfig.appId
		},
			function (response) {
			if(response.subscribers!==undefined){
              pushConfig.ksid = response.subscribers;
			  sendPushNotification(pushConfig);
            }else{
              kony.print("No Subscribers found");
            }
			
		},
			function (error) {
			kony.print("Something Went Wrong " + JSON.stringify(error));
		});
	} catch (err) {
		kony.print("KMSModule Desktop" + JSON.stringify(err));
	}
}
/**
 * @function sendPushNotification
 * @description - this function will send the push notofication
 **/
function sendPushNotification() {
	try {
		var intObj = kony.sdk.getCurrentInstance().getIntegrationService("KMSService");
		intObj.invokeOperation("sendPushNotification", {},
			pushConfig,
			function (response) {
			kony.print(JSON.stringify(response));
		},
			function (error) {
			alert("Something Went Wrong " + JSON.stringify(error));
		});
	} catch (err) {
		kony.print("KMSModule Desktop" + JSON.stringify(err));
	}
}
//#endif