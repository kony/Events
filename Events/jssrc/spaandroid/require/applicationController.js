define({
    AS_AppEvents_fa5813076af84c45af9009238c9e57c5: function AS_AppEvents_fa5813076af84c45af9009238c9e57c5(eventobject) {
        var self = this;
        return loadDeviceConfig.call(this);
    },
    AS_AppEvents_idf0829f55594ed2be1b3d9985ec14a4: function AS_AppEvents_idf0829f55594ed2be1b3d9985ec14a4(eventobject) {
        var self = this;
        setAllCallbacks();
    },
    AS_AppEvents_c34a87f4b8e9423a8e2a398f086dac42: function AS_AppEvents_c34a87f4b8e9423a8e2a398f086dac42(eventobject) {
        var self = this;
        if (kony.store.getItem("isSplashNeeded") === undefined || kony.store.getItem("isSplashNeeded") === null || kony.store.getItem("isSplashNeeded") === "true") {
            return "frmSplash";
        } else {
            return "frmEventsLanding";
        }
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konyenb.EventsHeader", "EventsHeader", "EventsHeaderController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "EventsHeader",
            "name": "com.konyenb.EventsHeader"
        });
        kony.mvc.registry.add("com.konyenb.ImageGallery", "ImageGallery", "ImageGalleryController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "ImageGallery",
            "name": "com.konyenb.ImageGallery"
        });
        kony.mvc.registry.add("com.konyenb.SessionFooter", "SessionFooter", "SessionFooterController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "SessionFooter",
            "name": "com.konyenb.SessionFooter"
        });
        kony.mvc.registry.add("com.konyenb.TimePicker", "TimePicker", "TimePickerController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "TimePicker",
            "name": "com.konyenb.TimePicker"
        });
        kony.mvc.registry.add("com.konyenb.boxfileupload", "boxfileupload", "boxfileuploadController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "boxfileupload",
            "name": "com.konyenb.boxfileupload"
        });
        kony.mvc.registry.add("com.konyenb.createnewevent", "createnewevent", "createneweventController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "createnewevent",
            "name": "com.konyenb.createnewevent"
        });
        kony.mvc.registry.add("com.konyenb.dashboard", "dashboard", "dashboardController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "dashboard",
            "name": "com.konyenb.dashboard"
        });
        kony.mvc.registry.add("com.konyenb.event", "event", "eventController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "event",
            "name": "com.konyenb.event"
        });
        kony.mvc.registry.add("com.konyenb.eventpreview", "eventpreview", "eventpreviewController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "eventpreview",
            "name": "com.konyenb.eventpreview"
        });
        kony.mvc.registry.add("com.konyenb.menuItem", "menuItem", "menuItemController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "menuItem",
            "name": "com.konyenb.menuItem"
        });
        kony.mvc.registry.add("com.konyenb.menuItem2", "menuItem2", "menuItem2Controller");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "menuItem2",
            "name": "com.konyenb.menuItem2"
        });
        kony.mvc.registry.add("com.konyenb.sessionTemp", "sessionTemp", "sessionTempController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "sessionTemp",
            "name": "com.konyenb.sessionTemp"
        });
        kony.mvc.registry.add("com.konyenb.sessionpreview", "sessionpreview", "sessionpreviewController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "sessionpreview",
            "name": "com.konyenb.sessionpreview"
        });
        kony.mvc.registry.add("com.konyenb.slidingmenu", "slidingmenu", "slidingmenuController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "slidingmenu",
            "name": "com.konyenb.slidingmenu"
        });
        kony.mvc.registry.add("com.konyenb.socialSharing", "socialSharing", "socialSharingController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "socialSharing",
            "name": "com.konyenb.socialSharing"
        });
        kony.mvc.registry.add("com.konyenb.timeline", "timeline", "timelineController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "timeline",
            "name": "com.konyenb.timeline"
        });
        kony.mvc.registry.add("flexImageSet", "flexImageSet", "flexImageSetController");
        kony.mvc.registry.add("flexMainSearchTemp", "flexMainSearchTemp", "flexMainSearchTempController");
        kony.mvc.registry.add("flexSegSpeakerRoot", "flexSegSpeakerRoot", "flexSegSpeakerRootController");
        kony.mvc.registry.add("flxCalloutTemp", "flxCalloutTemp", "flxCalloutTempController");
        kony.mvc.registry.add("flxFullSplashScreen", "flxFullSplashScreen", "flxFullSplashScreenController");
        kony.mvc.registry.add("flxMainSchedular", "flxMainSchedular", "flxMainSchedularController");
        kony.mvc.registry.add("flxSegSpeakerRoot", "flxSegSpeakerRoot", "flxSegSpeakerRootController");
        kony.mvc.registry.add("tempMainFlexEventList", "tempMainFlexEventList", "tempMainFlexEventListController");
        kony.mvc.registry.add("frmEventDetails", "frmEventDetails", "frmEventDetailsController");
        kony.mvc.registry.add("frmEventsLanding", "frmEventsLanding", "frmEventsLandingController");
        kony.mvc.registry.add("frmImageGallery", "frmImageGallery", "frmImageGalleryController");
        kony.mvc.registry.add("frmLocation", "frmLocation", "frmLocationController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmPresenter", "frmPresenter", "frmPresenterController");
        kony.mvc.registry.add("frmProfile", "frmProfile", "frmProfileController");
        kony.mvc.registry.add("frmSchedular", "frmSchedular", "frmSchedularController");
        kony.mvc.registry.add("frmSearch", "frmSearch", "frmSearchController");
        kony.mvc.registry.add("frmSplash", "frmSplash", "frmSplashController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {
        return applicationController.AS_AppEvents_fa5813076af84c45af9009238c9e57c5(eventObj);
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("frmEventsLanding").navigate();
    }
});