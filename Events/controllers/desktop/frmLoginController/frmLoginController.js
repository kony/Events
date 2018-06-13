define({ 
  /**
	 * @function onNavigate
	 * @description - This function will call disable error function to disable the error label visibility
	 **/
  onNavigate : function(){
    this.disableError();
  },
  
  /**
	 * @function doUserStoreLogin
	 * @description - This function will make userstore identity service call with user name and password
     * @param {String - username} - username entered in username text box
     * @param {String - password} - password entered in password text box
	 **/
  doUserStoreLogin : function(username,password){
      if(username === null || username === "" || password === null || password === ""){
        this.enableError("Username or Password should not be Empty");
        return;
      }
      this.showLoading();
  	  var sdkInstance = new kony.sdk.getCurrentInstance();
     try{
       userStoreAuth = sdkInstance.getIdentityService("userstore");
       var userCred = {
         "userid" : username,
         "password" : password
       };
       userStoreAuth.login(userCred,
                           this.userStoreLoginSuccss.bind(this),
                           this.userStoreLoginFailure.bind(this)
                          );
     }catch(error){
       this.enableError("something went wrong please try later");
     }
   },
  
    /**
	 * @function userStoreLoginSuccss
	 * @description - This function will get the user attributes after successfull login
     * @param {JSON - response} - success response from the back end
	 **/
  userStoreLoginSuccss : function(response){
    this.disableError();
     userStoreAuth.getProfile(false,function(result) {
       kony.application.dismissLoadingScreen();
      userAttributes = result.profile_attributes;
      var navToCreateEvent = new kony.mvc.Navigation("frmAllEvents");
    navToCreateEvent.navigate();
     }, function(error){
       this.enableError("something went wrong please try later");});
  },
  
   /**
	 * @function userStoreLoginFailure
	 * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
	 **/
  userStoreLoginFailure : function(error){
   this.enableError("The email and password combination you entered is not valid. Please tyr again.");
  },
  
   /**
	 * @function enableError
	 * @description - This function will enable error label in the UI with given message
     * @param {String - msg} - Message to be displayed
	 **/
  enableError : function(msg){
     kony.application.dismissLoadingScreen();
      this.view.lblError.text = msg;
      this.view.lblError.isVisible = true;
      this.view.forceLayout();
  },
  
     /**
	 * @function disableError
	 * @description - This function will make the error label invisible
	 **/
  disableError : function(){
  this.view.lblError.isVisible = false;
  this.view.forceLayout();
  },
   
    /**
	 * @function showLoading
	 * @description - This function will show loading screen
	 **/
   showLoading : function(){
    kony.application.showLoadingScreen("sknloading",
                                       "",
                                       constants.LOADING_SCREEN_POSITION_FULL_SCREEN, 
                                       true,
                                       false,
                                       {
      enableMenuKey: false,
      enableBackKey: false,
      progressIndicatorColor: "000000"
    });
    this.view.forceLayout();
  },
 });