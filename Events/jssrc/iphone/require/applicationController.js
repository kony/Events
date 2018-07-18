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
        kony.mvc.registry.add("com.konymp.slidingmenu", "slidingmenu", "slidingmenuController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "slidingmenu",
            "name": "com.konymp.slidingmenu"
        });
        kony.mvc.registry.add("com.konysa.boxfileupload", "boxfileupload", "boxfileuploadController");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "boxfileupload",
            "name": "com.konysa.boxfileupload"
        });
        kony.mvc.registry.add("com.konysa.createnewevent", "createnewevent", "createneweventController");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "createnewevent",
            "name": "com.konysa.createnewevent"
        });
        kony.mvc.registry.add("com.konysa.dashboard", "dashboard", "dashboardController");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "dashboard",
            "name": "com.konysa.dashboard"
        });
        kony.mvc.registry.add("com.konysa.event1", "event1", "event1Controller");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "event1",
            "name": "com.konysa.event1"
        });
        kony.mvc.registry.add("com.konysa.ImageGallery", "ImageGallery", "ImageGalleryController");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "ImageGallery",
            "name": "com.konysa.ImageGallery"
        });
        kony.mvc.registry.add("com.konysa.menuItem", "menuItem", "menuItemController");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "menuItem",
            "name": "com.konysa.menuItem"
        });
        kony.mvc.registry.add("com.konysa.menuItem2", "menuItem2", "menuItem2Controller");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "menuItem2",
            "name": "com.konysa.menuItem2"
        });
        kony.mvc.registry.add("com.konysa.socialSharing", "socialSharing", "socialSharingController");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "socialSharing",
            "name": "com.konysa.socialSharing"
        });
        kony.mvc.registry.add("Reusable.EventsHeader", "EventsHeader", "EventsHeaderController");
        kony.application.registerMaster({
            "namespace": "Reusable",
            "classname": "EventsHeader",
            "name": "Reusable.EventsHeader"
        });
        kony.mvc.registry.add("Reusable.SessionFooter", "SessionFooter", "SessionFooterController");
        kony.application.registerMaster({
            "namespace": "Reusable",
            "classname": "SessionFooter",
            "name": "Reusable.SessionFooter"
        });
        kony.mvc.registry.add("Reusable.sessionTemp", "sessionTemp", "sessionTempController");
        kony.application.registerMaster({
            "namespace": "Reusable",
            "classname": "sessionTemp",
            "name": "Reusable.sessionTemp"
        });
        kony.mvc.registry.add("Reusable.timeline", "timeline", "timelineController");
        kony.application.registerMaster({
            "namespace": "Reusable",
            "classname": "timeline",
            "name": "Reusable.timeline"
        });
        kony.mvc.registry.add("Reusable.TimePicker", "TimePicker", "TimePickerController");
        kony.application.registerMaster({
            "namespace": "Reusable",
            "classname": "TimePicker",
            "name": "Reusable.TimePicker"
        });
        kony.mvc.registry.add("flxFullSplashScreen", "flxFullSplashScreen", "flxFullSplashScreenController");
        kony.mvc.registry.add("tempMainFlexEventList", "tempMainFlexEventList", "tempMainFlexEventListController");
        kony.mvc.registry.add("flexMainSearchTemp", "flexMainSearchTemp", "flexMainSearchTempController");
        kony.mvc.registry.add("flxSegSpeakerRoot", "flxSegSpeakerRoot", "flxSegSpeakerRootController");
        kony.mvc.registry.add("flexSegSpeakerRoot", "flexSegSpeakerRoot", "flexSegSpeakerRootController");
        kony.mvc.registry.add("flexImageSet", "flexImageSet", "flexImageSetController");
        kony.mvc.registry.add("flxMainSchedular", "flxMainSchedular", "flxMainSchedularController");
        kony.mvc.registry.add("flxCalloutTemp", "flxCalloutTemp", "flxCalloutTempController");
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
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {
        return applicationController.AS_AppEvents_fa5813076af84c45af9009238c9e57c5(eventObj);
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("frmEventsLanding").navigate();
    }
});