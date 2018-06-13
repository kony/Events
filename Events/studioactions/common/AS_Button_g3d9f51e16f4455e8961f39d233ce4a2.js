function AS_Button_g3d9f51e16f4455e8961f39d233ce4a2(eventobject) {
    var self = this;
    var client = kony.sdk.getCurrentInstance();
    var auth_client = client.getIdentityService("likedInIdentityService");
    auth_client.logout(function(res) {
        alert("success" + JSON.stringify(res));
    }, function(err) {
        alert("failure" + JSON.stringify(err));
    })
}