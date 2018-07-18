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
    appKey: "e8d9b55f376dac46aed193668da7765f",
    appSecret: "5881335e142f488cec08ba2319a56ee8",
    serviceUrl: "http://sawin1.konylabs.net:9090/authService/100000002/appconfig",
    svcDoc: {
        "selflink": "http://sawin1.konylabs.net:9090/authService/100000002/appconfig",
        "identity_meta": {
            "linkedIdentityLogin": {
                "success_url": "allow_any"
            }
        },
        "messagingsvc": {
            "appId": "a92d5080-735c-42c8-8587-9af024074296",
            "url": "http://sawin1.konylabs.net:9090/kpns/api/v1"
        },
        "integsvc": {
            "KMSService": "http://sawin1.konylabs.net:9090/services/KMSService",
            "EventsOrchService": "http://sawin1.konylabs.net:9090/services/EventsOrchService",
            "getLatLang": "http://sawin1.konylabs.net:9090/services/getLatLang",
            "BoxService": "http://sawin1.konylabs.net:9090/services/BoxService",
            "accountlogin": "http://sawin1.konylabs.net:9090/services/accountlogin"
        },
        "appId": "a92d5080-735c-42c8-8587-9af024074296",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "EventSOS",
        "reportingsvc": {
            "session": "http://sawin1.konylabs.net:9090/services/IST",
            "custom": "http://sawin1.konylabs.net:9090/services/CMS"
        },
        "baseId": "81ec5886-f0e5-47f5-9ce2-58a939a5d1f6",
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
        }, {
            "alias": "testProvider",
            "type": "basic",
            "prov": "testProvider",
            "url": "http://sawin1.konylabs.net:9090/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "customAccountLogin",
            "type": "basic",
            "prov": "customAccountLogin",
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
            "KMSService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:9090/services/KMSService"
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
            },
            "accountlogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:9090/services/accountlogin"
            }
        },
        "Webapp": {
            "url": "http://sawin1.konylabs.net:9090/Events"
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
        baseUrl: kony.appinit.getStaticContentPath() + "spaandroid/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        applicationController = require("applicationController");
        callAppMenu();
        kony.application.setApplicationInitializationEvents({
            preappinit: applicationController.AS_AppEvents_idf0829f55594ed2be1b3d9985ec14a4,
            init: applicationController.appInit,
            postappinit: applicationController.AS_AppEvents_fa5813076af84c45af9009238c9e57c5,
            appservice: applicationController.AS_AppEvents_c34a87f4b8e9423a8e2a398f086dac42,
            showstartupform: function() {
                var startForm = new kony.mvc.Navigation("frmEventsLanding");
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
								