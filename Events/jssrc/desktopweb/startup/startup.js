//startup.js file
var appConfig = {
    appId: "Events",
    appName: "Events",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.0.75.1",
    serverPort: "80",
    secureServerPort: "443",
    isturlbase: "http://sawin1.konylabs.net:9090/services",
    isMFApp: true,
    appKey: "fb951cb7bed9bcc851248e08804f8268",
    appSecret: "c07a4cb503f46a2707bffe9f19d6d5e9",
    serviceUrl: "http://sawin1.konylabs.net:9090/authService/100000002/appconfig",
    svcDoc: {
        "selflink": "http://sawin1.konylabs.net:9090/authService/100000002/appconfig",
        "identity_meta": {
            "linkedIdentityLogin": {
                "success_url": "allow_any"
            }
        },
        "integsvc": {
            "EventsOrchService": "http://sawin1.konylabs.net:9090/services/EventsOrchService",
            "getLatLang": "http://sawin1.konylabs.net:9090/services/getLatLang",
            "BoxService": "http://sawin1.konylabs.net:9090/services/BoxService"
        },
        "appId": "a76ee372-dac2-4871-b8e6-6edfdf831f43",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "EventSOS",
        "reportingsvc": {
            "session": "http://sawin1.konylabs.net:9090/services/IST",
            "custom": "http://sawin1.konylabs.net:9090/services/CMS"
        },
        "baseId": "8507599f-1e77-4ee1-a628-03453a0e132d",
        "login": [{
            "alias": "linkedIdentityLogin",
            "type": "oauth2",
            "prov": "linkedIdentityLogin",
            "url": "http://sawin1.konylabs.net:9090/authService/100000002"
        }, {
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "http://sawin1.konylabs.net:9090/authService/100000002"
        }],
        "services_meta": {
            "EventsSOS": {
                "offline": false,
                "metadata_url": "http://sawin1.konylabs.net:9090/services/metadata/v1/EventsSOS",
                "type": "objectsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:9090/services/data/v1/EventsSOS"
            },
            "EventOrchSDO": {
                "offline": false,
                "metadata_url": "http://sawin1.konylabs.net:9090/services/metadata/v1/EventOrchSDO",
                "type": "objectsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:9090/services/data/v1/EventOrchSDO"
            },
            "EventsOrchService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:9090/services/EventsOrchService"
            },
            "getLatLang": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:9090/services/getLatLang"
            },
            "BoxService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:9090/services/BoxService"
            }
        }
    },
    runtimeAppVersion: "Default",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "http://sawin1.konylabs.net:9090/authService/100000002/appconfig",
    secureurl: "http://sawin1.konylabs.net:9090/authService/100000002/appconfig",
    middlewareContext: "Events"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        isMVC: true,
        retainSpaceOnHide: true,
        APILevel: 81120
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + "desktopweb/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        applicationController = require("applicationController");
        callAppMenu();
        kony.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            showstartupform: function() {
                var startForm = new kony.mvc.Navigation("frmLogin");
                startForm.navigate();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default", "Theme0ha3194ff0cff4f"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "serviceUrl": appConfig.serviceUrl,
        eventTypes: ["FormEntry", "Error", "Crash"]
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								