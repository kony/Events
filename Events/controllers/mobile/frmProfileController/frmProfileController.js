define({ 
  /**
  * @function onNavigate
  * @description This function is used to populate the data to the widget while navigating to this form.
  * @private
  */
  onNavigate : function(){
    try{
    var profileData = JSON.parse(kony.store.getItem("profile"));
    this.view.lblFName.text = profileData.first_name;
    this.view.lblLName.text  = profileData.last_name;
    this.view.lblEmail.text  = profileData.mail;
    this.view.lblName.text  = profileData.first_name +" "+profileData.last_name;
    if(profileData.profile!==undefined){
      this.view.imgProfile.src = profileData.profile;
    }else{
      this.view.imgProfile.src = "profile.png";
    }
    }catch(err){
      kony.print("Frm Profile Controller"+JSON.stringify(err));
    }
  }

});