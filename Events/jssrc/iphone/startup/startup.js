//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Events",
    appName: "Events",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.0.75.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "Events",
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
        "messagingsvc": {
            "appId": "a76ee372-dac2-4871-b8e6-6edfdf831f43",
            "url": "http://sawin1.konylabs.net:9090/kpns/api/v1"
        },
        "integsvc": {
            "KMSService": "http://sawin1.konylabs.net:9090/services/KMSService",
            "EventsOrchService": "http://sawin1.konylabs.net:9090/services/EventsOrchService",
            "getLatLang": "http://sawin1.konylabs.net:9090/services/getLatLang",
            "BoxService": "http://sawin1.konylabs.net:9090/services/BoxService",
            "accountlogin": "http://sawin1.konylabs.net:9090/services/accountlogin"
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
            "alias": "OauthProviderEvent",
            "type": "basic",
            "prov": "OauthProviderEvent",
            "url": "http://sawin1.konylabs.net:9090/authService/100000002"
        }, {
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "http://sawin1.konylabs.net:9090/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "customAccountLogin",
            "type": "basic",
            "prov": "customAccountLogin",
            "url": "http://sawin1.konylabs.net:9090/authService/100000002"
        }, {
            "alias": "linkedIdentityLogin",
            "type": "oauth2",
            "prov": "linkedIdentityLogin",
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
        }
    },
    runtimeAppVersion: "Default",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "http://sawin1.konylabs.net:9090/authService/100000002/appconfig",
    secureurl: "http://sawin1.konylabs.net:9090/authService/100000002/appconfig"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 81120
    })
};

function themeCallBack() {
    initializeGlobalVariables();
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
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;