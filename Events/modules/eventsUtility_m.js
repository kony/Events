var glbDeviceWidth;
var glbDayString = {
	"0": "Sunday",
	"1": "Monday",
	"2": "Tuesday",
	"3": "Wednesday",
	"4": "Thursday",
	"5": "Friday",
	"6": "Saturday"
};
var glbMonthString = {
	"0": "Jan",
	"1": "Feb",
	"2": "Mar",
	"3": "Apr",
	"4": "May",
	"5": "Jun",
	"6": "Jul",
	"7": "Aug",
	"8": "Sept",
	"9": "Oct",
	"10": "Nov",
	"11": "Dec"
};
/**
 * @function checkJSON
 * @description - This function will do validation of the key in JSON
 * @param {Object - data} - JSON data
 * @param {String - key}
 */
function checkJSON(data, key) {
	try {
		if (data[key] !== undefined && data[key] !== null && data[key] !== "")
			return true;
		else
			return false;
	} catch (err) {
		kony.print("eventsutility Module" + err);
	}
}
/**
 * @function showLoading
 * @description - This function will show loading screen
 */
function showLoading() {
	try {
		kony.application.showLoadingScreen("",
			"",
			constants.LOADING_SCREEN_POSITION_ONLY_CENTER,
			true,
			true, {});
	} catch (err) {
		kony.print("events utility" + JSON.stringify(err));
	}
}

/**
 * @function loadDeviceConfig
 * @description - This function will get the device width
 */
function loadDeviceConfig() {
	try {
		glbDeviceWidth = "" + kony.os.deviceInfo().screenWidth;
	} catch (err) {
		kony.print("Session And Presenter Operation" + JSON.stringify(err));
	}
}