define({
    appInit: function(params) {
        skinsInit();
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
        kony.mvc.registry.add("com.konyenb.SessionFooter", "SessionFooter", "SessionFooterController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "SessionFooter",
            "name": "com.konyenb.SessionFooter"
        });
        kony.mvc.registry.add("com.konyenb.sessionpreview", "sessionpreview", "sessionpreviewController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "sessionpreview",
            "name": "com.konyenb.sessionpreview"
        });
        kony.mvc.registry.add("com.konyenb.sessionTemp", "sessionTemp", "sessionTempController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "sessionTemp",
            "name": "com.konyenb.sessionTemp"
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
        kony.mvc.registry.add("com.konyenb.TimePicker", "TimePicker", "TimePickerController");
        kony.application.registerMaster({
            "namespace": "com.konyenb",
            "classname": "TimePicker",
            "name": "com.konyenb.TimePicker"
        });
        kony.mvc.registry.add("flexHamManuMain", "flexHamManuMain", "flexHamManuMainController");
        kony.mvc.registry.add("flxTempUser", "flxTempUser", "flxTempUserController");
        kony.mvc.registry.add("Flex0f0f365ad7e374e", "Flex0f0f365ad7e374e", "Flex0f0f365ad7e374eController");
        kony.mvc.registry.add("Flex0fc1bf48b31084b", "Flex0fc1bf48b31084b", "Flex0fc1bf48b31084bController");
        kony.mvc.registry.add("flxSegSpeakerRoot", "flxSegSpeakerRoot", "flxSegSpeakerRootController");
        kony.mvc.registry.add("flexTempSessionSpeakerMain", "flexTempSessionSpeakerMain", "flexTempSessionSpeakerMainController");
        kony.mvc.registry.add("flexSegSpeakerRoot", "flexSegSpeakerRoot", "flexSegSpeakerRootController");
        kony.mvc.registry.add("frmAllEvents", "frmAllEvents", "frmAllEventsController");
        kony.mvc.registry.add("frmCreateEvent", "frmCreateEvent", "frmCreateEventController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmManageUser", "frmManageUser", "frmManageUserController");
        kony.mvc.registry.add("frmPreview", "frmPreview", "frmPreviewController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLogin").navigate();
    }
});