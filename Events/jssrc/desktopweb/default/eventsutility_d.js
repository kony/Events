var glbHeight = "";
var glbUserAttributes = {};
/**
 * @function postshow
 * @description - This function will remove the outline border and change the
 * mouse to pointer in button
 */
function postshow() {
    try {
        var elems = document.querySelectorAll("input[kwidgettype='Button']");
        for (var i = 0, iMax = elems.length; i < iMax; i++) {
            elems[i].style.outline = 'none';
            elems[i].style.cursor = 'pointer';
        }
    } catch (err) {
        kony.print("events utility" + JSON.stringify(err));
    }
}
/**
 * @function showLoading
 * @description - This function call the kony loading API with custom skin to show loading indicator
 */
function showLoading(currentScope) {
    kony.application.showLoadingScreen("sknloading", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, {
        enableMenuKey: false,
        enableBackKey: false,
        progressIndicatorColor: "000000"
    });
    currentScope.view.forceLayout();
}