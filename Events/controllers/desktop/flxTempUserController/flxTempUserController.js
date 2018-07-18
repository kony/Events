define({ 
 //Type your controller code here 
  editUser:function(widget,context){
    alert("Edit user!");
  },
  removeUser:function(widget,context){
    var selectedItem=context.widgetInfo.selecteditems[0];
    selectedItem["rowIndex"]=context.rowIndex;
    this.askForConfirmation("Do you want to remove user "+selectedItem.lblUserName+" ?","Are you Sure?",selectedItem);
    //this.executeOnParent("deRegisterUser",selectedItem);
  },
  onEditDone:function(widget,context){
    alert("Edit done!");
  },
  askForConfirmation : function(message,title,selectedItem){
     
    var pspConfig = {
			"iconPosition": constants.ALERT_CONTENT_ALIGN_CENTER,
			"contentAlignment": constants.ALERT_ICON_POSITION_LEFT
		};
		var alert = kony.ui.Alert({
				"message": message,
				"alertType": constants.ALERT_TYPE_CONFIRMATION,
				"alertTitle": title,
				"yesLabel": "Yes",
				"noLabel": "No",
				"alertIcon": "",
				"alertHandler": handleAlert.bind(this)
			},
				pspConfig);
		function handleAlert(response) {
			if (response){
              //this.onEditDone(null, null);
              this.executeOnParent("deRegisterUser",selectedItem);
            }
		}
  },

 });