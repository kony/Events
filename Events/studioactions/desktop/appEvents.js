define({
    AS_AppEvents_e38834025b794d44b1debb08918c3e47: function AS_AppEvents_e38834025b794d44b1debb08918c3e47(eventobject) {
        var self = this;
        if (eventobject.launchparams.formId == "frmAllEvents") {
            return "frmAllEvents";
        } else if (eventobject.launchparams.formId == "frmCreateEvent") {
            return "frmCreateEvent";
        }
    }
});