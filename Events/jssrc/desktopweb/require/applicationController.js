define({
    appInit: function(params) {
        skinsInit();
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
        kony.mvc.registry.add("Reusable.TimePicker", "TimePicker", "TimePickerController");
        kony.application.registerMaster({
            "namespace": "Reusable",
            "classname": "TimePicker",
            "name": "Reusable.TimePicker"
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
        kony.mvc.registry.add("com.konymp.slidingmenu", "slidingmenu", "slidingmenuController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "slidingmenu",
            "name": "com.konymp.slidingmenu"
        });
        kony.mvc.registry.add("com.konysa.ImageGallery", "ImageGallery", "ImageGalleryController");
        kony.application.registerMaster({
            "namespace": "com.konysa",
            "classname": "ImageGallery",
            "name": "com.konysa.ImageGallery"
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
        kony.mvc.registry.add("flexImageSet", "flexImageSet", "flexImageSetController");
        kony.mvc.registry.add("flexMainSearchTemp", "flexMainSearchTemp", "flexMainSearchTempController");
        kony.mvc.registry.add("flexSegSpeakerRoot", "flexSegSpeakerRoot", "flexSegSpeakerRootController");
        kony.mvc.registry.add("flxCalloutTemp", "flxCalloutTemp", "flxCalloutTempController");
        kony.mvc.registry.add("flxFullSplashScreen", "flxFullSplashScreen", "flxFullSplashScreenController");
        kony.mvc.registry.add("flxMainSchedular", "flxMainSchedular", "flxMainSchedularController");
        kony.mvc.registry.add("flxSegSpeakerRoot", "flxSegSpeakerRoot", "flxSegSpeakerRootController");
        kony.mvc.registry.add("tempMainFlexEventList", "tempMainFlexEventList", "tempMainFlexEventListController");
        kony.mvc.registry.add("flexHamManuMain", "flexHamManuMain", "flexHamManuMainController");
        kony.mvc.registry.add("flxTempUser", "flxTempUser", "flxTempUserController");
        kony.mvc.registry.add("Flex0f0f365ad7e374e", "Flex0f0f365ad7e374e", "Flex0f0f365ad7e374eController");
        kony.mvc.registry.add("Flex0fc1bf48b31084b", "Flex0fc1bf48b31084b", "Flex0fc1bf48b31084bController");
        kony.mvc.registry.add("flexTempSessionSpeakerMain", "flexTempSessionSpeakerMain", "flexTempSessionSpeakerMainController");
        kony.mvc.registry.add("frmAllEvents", "frmAllEvents", "frmAllEventsController");
        kony.mvc.registry.add("frmCreateEvent", "frmCreateEvent", "frmCreateEventController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmManageUser", "frmManageUser", "frmManageUserController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLogin").navigate();
    }
});