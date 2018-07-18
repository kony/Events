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
    }
});