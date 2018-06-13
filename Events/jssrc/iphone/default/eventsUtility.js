function checkJSON(data, key) {
    if (data[key] !== undefined && data[key] !== null && data[key] !== "") return true;
    else return false;
}
var currentController = "";

function printLog(tag, message) {
    if (tag === undefined || tag === null) tag = "";
    kony.print("Events Logger" + currentController + ":" + tag + ":" + message);
}

function showLaoding() {
    kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
}

function dismissLoading() {
    kony.application.dismissLoadingScreen();
}