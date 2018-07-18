define({
    /**
     * @function onNavigate
     * @description - This function will call disable error function to disable the error label visibility
     **/
    onNavigate: function() {
        try {
            this.disableError();
        } catch (error) {
            kony.print("FormLogin Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function doUserStoreLogin
     * @description - This function will make userstore identity service call with user name and password
     * @param {String - username} - username entered in username text box
     * @param {String - password} - password entered in password text box
     **/
    doUserStoreLogin: function(username, password) {
        if (username === null || username === "" || password === null || password === "") {
            this.enableError("Username or Password should not be Empty");
            return;
        }
        showLoading(this);
        var sdkInstance = new kony.sdk.getCurrentInstance();
        try {
            this.userStoreAuth = sdkInstance.getIdentityService("userstore");
            var userCred = {
                "userid": username,
                "password": password
            };
            this.userStoreAuth.login(userCred, this.userStoreLoginSuccss.bind(this), this.userStoreLoginFailure.bind(this));
        } catch (error) {
            this.enableError("something went wrong please try later");
        }
    },
    /**
     * @function userStoreLoginSuccss
     * @description - This function will get the user attributes after successfull login
     * @param {JSON - response} - success response from the back end
     **/
    userStoreLoginSuccss: function(response) {
        try {
            this.disableError();
            this.userStoreAuth.getProfile(false, function(result) {
                kony.application.dismissLoadingScreen();
                glbUserAttributes = result.profile_attributes;
                var navToCreateEvent = new kony.mvc.Navigation("frmAllEvents");
                navToCreateEvent.navigate();
            }, function(error) {
                this.enableError("something went wrong please try later");
            });
        } catch (error) {
            kony.print("FormLogin Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function userStoreLoginFailure
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
     **/
    userStoreLoginFailure: function(error) {
        try {
            this.enableError("The email and password combination you entered is not valid. Please tyr again.");
        } catch (err) {
            kony.print("FormLogin Controller" + JSON.stringify(err));
        }
    },
    /**
     * @function enableError
     * @description - This function will enable error label in the UI with given message
     * @param {String - msg} - Message to be displayed
     **/
    enableError: function(msg) {
        try {
            kony.application.dismissLoadingScreen();
            this.view.lblError.text = msg;
            this.view.lblError.isVisible = true;
            this.view.forceLayout();
        } catch (error) {
            kony.print("FormLogin Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function disableError
     * @description - This function will make the error label invisible
     **/
    disableError: function() {
        try {
            this.view.lblError.isVisible = false;
            this.view.forceLayout();
        } catch (error) {
            kony.print("FormLogin Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function showPassword
     */
    showPassword: function() {
        try {
            if (this.view.imageShowPassword.src === "eyeiconvisible.png") {
                this.view.imageShowPassword.src = "eyeicon.png";
                this.view.txtPassWord.isVisible = true;
                this.view.txtPasswordShow.isVisible = false;
            } else {
                this.view.imageShowPassword.src = "eyeiconvisible.png";
                this.view.txtPasswordShow.text = this.view.txtPassWord.text;
                this.view.txtPassWord.isVisible = false;
                this.view.txtPasswordShow.isVisible = true;
            }
        } catch (err) {
            kony.print("frmLogin Controller" + JSON.stringify(err));
        }
    }
});