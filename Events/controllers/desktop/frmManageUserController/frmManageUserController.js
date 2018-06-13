define({ 

  //Type your controller code here 
  eventList:null,
  record:null,
  selectedEvent:null,
  eventSubscriber:null,
  selectedUserIdToDelete:null,
  selectedRowIndexToDelete:null,
  /**
   * @function onNavigate
   * @description This function is used to populate data on the form while navigating to it.
   * @private
   */
  onNavigate:function(){
    this.view.menuItem.setSelectedFlex(3);
    this.view.flxEventDetailContainer.setVisibility(false);
  },
  /**
   * @function getAllEvent
   * @description This function is used to fetch all events and set it to dropdown list.
   * @private
   */
  getAllEvent:function(){
    this.setProfile();
    this.showLoading();
    try{
      var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject("event");
      //var odataUrl = "$filter=isdisabled eq '0'";
      var odataUrl = "$select=event_id,name";
      dataObject.odataUrl = odataUrl;
      var options = {
        "dataObject": dataObject
      };
      objSvc.fetch(options,
                   this.eventFetchSuccessCallback.bind(this),
                   this.eventFetchFailureCallback.bind(this));
    }catch(excp){
      this.dismissLoading();
      alert(excp.message);
    }
  },
  /**
   * @function eventFetchSuccessCallback
   * @description Success callback for the getAllEvent method
   * @private
   * @param{JSON} response
   */
  eventFetchSuccessCallback:function(response){
    this.dismissLoading();
    this.eventList=response.records;
    //alert(JSON.stringify(response.records));
    this.mapEventToListBox(response.records);
  },
  /**
   * @function eventFetchFailureCallback
   * @description failure callback for the getAllEvent method
   * @private
   * @param{JSON} error
   */
  eventFetchFailureCallback:function(error){
    kony.print("Error while fetching the event list: "+JSON.stringify(error));
    this.dismissLoading();
  },
  /**
   * @function mapEventToListBox
   * @description This function is used to populate the event list to the drop down list.
   * @private
   * @param{JSONArray} eventList
   */
  mapEventToListBox:function(eventList){
    var masterDataList=[];
    masterDataList.push(["-1", "Select Event"]);
    if(eventList===undefined||eventList===null||eventList.length===0){
      masterDataList=[];
    }else{
      var masterDataObj=[];
      for(var i=0;i<eventList.length;i++){
        masterDataObj=[];
        masterDataObj.push(eventList[i].event_id);
        masterDataObj.push(eventList[i].event_id+" - "+eventList[i].name);
        masterDataList.push(masterDataObj);
      }
    }
    this.view.listBoxEvent.masterData=masterDataList;
    this.view.listBoxEvent.selectedKey="-1";
  },
  /**
   * @function populateEvent
   * @description This function is used to display the selected event from the dropdown list.
   * @private
   */
  populateEvent:function(){
    if(this.eventList===null)return;
    var slectedKey=this.view.listBoxEvent.selectedKey;
    if(slectedKey==="-1"){
      alert("select event first!");
      return;
    }
    this.fetchEventDetailsWithID(slectedKey);
  },
  /**
   * @function fetchEventDetailsWithID
   * @description This function is used to fetch the event wiht its ID
   * @private
   * @param{string} eventID
   */
  fetchEventDetailsWithID:function(eventID){
    try{
      this.view.flxLoading.setVisibility(true);
      var controllerScope=this;
      var client = kony.sdk.getCurrentInstance();
      var intgService;
      this.showLoading();
      intgService = client.getIntegrationService("EventsOrchService");
      intgService.invokeOperation("getEventWithRegisteredUser",{},{"$filter":"event_id eq "+eventID+" and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"},
                                  this.fetchEventDetailsWithIDSuccessCallBack.bind(this),
                                  this.fetchEventDetailsWithIDFailureCallBack.bind(this));
    }catch(excp){
      this.dismissLoading();
      kony.print(JSON.stringify(excp));
    }
  },
  /**
   * @function fetchEventDetailsWithID
   * @description This function is the success callback of the fetchEventDetailsWithID
   * @private
   * @param{JSON} response
   */
  fetchEventDetailsWithIDSuccessCallBack:function(response){
    this.dismissLoading();
    this.selectedEvent=response;
    this.setEvent(response);
  },
  /**
   * @function fetchEventDetailsWithIDFailureCallBack
   * @description This function is the failure callback of the fetchEventDetailsWithID
   * @private
   * @param{JSON} error
   */
  fetchEventDetailsWithIDFailureCallBack:function(error){
    this.dismissLoading();
    kony.print(JSON.stringify(error));
  },
  /*fetchEventAndUser:function(){
    try{
      var self=this;
      var client = kony.sdk.getCurrentInstance();
      var intgService;
      this.showLoading();
      intgService = client.getIntegrationService("EventStorageObjectService");
      intgService.invokeOperation("getEventWithRegisteredUser",{},{},
                                  function(response){
        var result=parseEventRegistration(response);
        self.eventList=result;
        var masterDataList=[];
        var masterDataObj=[];
        masterDataList.push(["-1", "Select Event"]);
        for(var i=0;i<result.length;i++){
          masterDataObj=[];
          masterDataObj.push(i);
          masterDataObj.push(result[i].event_id+" - "+result[i].name);
          masterDataList.push(masterDataObj);
        }
        self.view.listBoxEvent.masterData=masterDataList;
        self.view.listBoxEvent.selectedKey="-1";
        self.dismissLoading();
      },function(error){
        self.dismissLoading();
        kony.print("Error while invokig orchestration service: "+JSON.stringify(error));
      });
    }catch(excp){
      self.dismissLoading();
      kony.print(JSON.stringify(excp));
    }
  },*/
  /**
   * @function setEvent
   * @description function to display the selected event in the form.
   * @private
   * @param{JSON} record
   */
  setEvent:function(record){
    if(this.eventList===null)return;
    this.view.lblEventTitle.text=checkValue(record.event[0].name);
    var registeredUser=record.event_registration;
    var bannerURL=record.event_banners;//[0].banner_url;
    if(bannerURL.length>0){
      this.view.imgEventBanner.src=bannerURL[0]["banner_url"];
    }else{
      this.view.imgEventBanner.src="event01.jpg";
    }
    this.view.lblRegisteredUserCount.text=checkValue(registeredUser.length);
   /* if(checkValue(registeredUser.length)===0){
      this.view.flxUserContainer.setVisibility(false);
      this.view.flxLoading.setVisibility(false);
      this.view.flxNoUser.setVisibility(true);
    }*/
    this.view.lblEventDescCategoryText.text=getEventCategory(record.event[0].event_category);
    if(record.event[0].event_type==="1"){
      this.view.lblEventDescLocationText.text="online";
    }else if(record.event[0].event_type==="2"){
      var locations=record.location ;
      if(locations.length>0){
        this.view.lblEventDescLocationText.text=locations[0].addressLine1+" "+locations[0].cityname ;
      }else{
        this.view.lblEventDescLocationText.text="Location not available";
      }
    }else{
      this.view.lblEventDescLocationText.text="Info not available";
    }
    //this.view.lblEventDescLocationText.text=getEventType(selectedEvent.event_type);
    var dateRange=getDateRange(record.event[0].start_date, record.event[0].end_date);
    this.view.lblEventDescDateText.text=dateRange;
    this.view.flxEventDetailContainer.setVisibility(true);
    this.view.forceLayout();
    this.getUsers(record.event_registration);
  },
  /**
   * @function getUsers
   * @description function to get the registerd users detail for the selected event.
   * @private
   * @param{JSON} subscribers
   */
  getUsers:function(subscribers){
    if(subscribers===null||subscribers===undefined||subscribers.length===0){
      this.view.flxLoading.setVisibility(false);
      this.view.segUserList.removeAll();
      this.view.flxUserContainer.setVisibility(false);
      this.view.flxLoading.setVisibility(false);
      this.view.flxNoUser.setVisibility(true);
      return;
    }
    this.view.flxUserContainer.setVisibility(true);
    this.view.flxNoUser.setVisibility(false);
    var filterParam="user_id eq "+subscribers[0].user_id;
    for(var i=1;i<subscribers.length;i++){
      filterParam=filterParam+" or user_id eq "+subscribers[i].user_id;
    }
    try{
      var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject("users");
      //var odataUrl = "$filter=isdisabled eq '0'";
      var odataUrl = "$filter="+filterParam+" ";
      dataObject.odataUrl = odataUrl;
      var options = {
        "dataObject": dataObject
      };
      this.showLoading();
      objSvc.fetch(options,
                   this.userFetchSuccessCallBack.bind(this),
                   this.userFetchFailureCallBack.bind(this));
    }catch(excp){
      this.dismissLoading();
      alert(excp.message);
    }
  },
  /**
   * @function userFetchSuccessCallBack
   * @description success callback for the function getUsers
   * @private
   * @param{JSON} response
   */
  userFetchSuccessCallBack:function(response){
    this.dismissLoading();
    //alert(response.records);
    this.eventSubscriber=response.records;
    this.setSubscriber();
  },
  /**
   * @function userFetchFailureCallBack
   * @description fialure callback for the function userFetchFailureCallBack
   * @private
   * @param{JSON} error
   */
  userFetchFailureCallBack:function(error){
    kony.print("Error occured while ");
    this.dismissLoading();
  },
  /**
   * @function setSubscriber
   * @description function to set the subscribers for the event
   * @private
   */
  setSubscriber:function(){
    var subscribers=this.eventSubscriber;
    if(subscribers===null||subscribers===undefined)return;
    if(subscribers.length===0){
      this.view.segUserList.removeAll();
      this.view.flxUserContainer.setVisibility(false);
      this.view.flxLoading.setVisibility(false);
      this.view.flxNoUser.setVisibility(true);
      return;
    }
    this.view.flxUserContainer.setVisibility(true);
    this.view.flxNoUser.setVisibility(false);
    var segObj={};
    var segDataList=[];
    for(var i=0,count=1;i<subscribers.length;i++){
      if(subscribers[i]["isDeleted"]===true)
        continue;
      segObj={};
      segObj["lblIndex"]=count;
      segObj["lblUserName"]=checkValue(subscribers[i].first_name)+" "+checkValue(subscribers[i].last_name);//"Brite Sreedharan";
      segObj["lblEmail"]=checkValue(subscribers[i].mail)+" ";//"brite.sreedharan@kony.com";
      if(i%2===0){
        segObj["flxTempUser"]={"skin":"sknFlxWhiteBG"};
      }else{
        segObj["flxTempUser"]={"skin":"sknFlxLightBlueBG"};
      }
      segObj["lblVerticalLine0"]=" ";
      segObj["lblVerticalLine1"]=" ";
      segObj["lblVerticalLine2"]=" ";
      segObj["lblVerticalLine3"]=" ";
      segObj["btnEdit"]={"text":"Edit"};
      segObj["btnDone"]={"text":"Done"};
      segObj["lblUserId"]=subscribers[i].user_id;
      segObj["imgRemoveIcon"]={"src":"delete_icon.png"};
      segDataList.push(segObj);
      count++;
    }
    this.view.segUserList.removeAll();
    this.view.segUserList.addAll(segDataList);
    this.view.flxLoading.setVisibility(false);
  },
  
  getConfirmation:function(){
    var isConfirmed=false;
    return isConfirmed;
  },
  /**
   * @function deRegisterUser
   * @description function to get the registration id of the selected user.
   * @private
   * @param{string} selecteditems
   */
  deRegisterUser:function(selecteditems){
    debugger;
    var userId=selecteditems.lblUserId;
    this.selectedUserIdToDelete=userId;
    var rowIndex=selecteditems["rowIndex"];
    this.selectedRowIndexToDelete=rowIndex;
    var registrationId=null;
    if(this.selectedEvent!==null&&this.selectedEvent!==undefined){
      var registrationList=this.selectedEvent.event_registration;
      for(var i=0;i<registrationList.length;i++){
        if(registrationList[i].user_id==userId){
          registrationId=registrationList[i].registration_id;
          break;
        }
      }
      this.deleteUserRegistration(registrationId);
      //alert("registrationId for the userId "+userId+" is "+registrationId);
    }
  },
  /**
   * @function deleteUserRegistration
   * @description function to remove the registration of the selected user.
   * @private
   * @param{number} registrationId
   */
  deleteUserRegistration:function(registrationId){
    if(registrationId===null||registrationId===undefined|| isNaN(registrationId) )return;
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("event_registration");
    dataObject.setRecord({"registration_id":registrationId});
    var options = {
      "dataObject": dataObject
    };
    try{
      objSvc.deleteRecord(options,this.deleteUserRegistrationSuccessCallBack.bind(this),this.deleteUserRegistrationFailureCallBack.bind(this)); 
    }catch(excp){
      kony.print("Exception occured while deregistering user:"+excp(excp));
    }
  },
  /**
   * @function deleteUserRegistrationSuccessCallBack
   * @description success callback for the deleteUserRegistration method
   * @private
   * @param{json} response
   */
  deleteUserRegistrationSuccessCallBack:function(response){
    var eventSubscribers=this.eventSubscriber;
      if(eventSubscribers!==null&&eventSubscribers!==undefined){
        for(var i=0;i<eventSubscribers.length;i++){
          if(eventSubscribers[i].user_id==this.selectedUserIdToDelete){
            eventSubscribers[i].isDeleted=true;
          }
        }
      }
    var animationObject=getRemoveAnimation();
    this.view.segUserList.removeAt(this.selectedRowIndexToDelete, 0, animationObject);
    var count=this.view.lblRegisteredUserCount.text;
    count=parseInt(count);
    this.view.lblRegisteredUserCount.text=count-1;
    this.setSubscriber();
  },
  /**
   * @function deleteUserRegistrationFailureCallBack
   * @description failure callback for the deleteUserRegistration method
   * @private
   * @param{json} error
   */
  deleteUserRegistrationFailureCallBack:function(error){
    alert("Unable to unsubscribe!");
  },
  
  /*onPostShow:function(){
    //  this.view.forceLayout();
    alert("in post show");
    var elems = document.querySelectorAll("input[kwidgettype='Button']");
    for (var i = 0, iMax = elems.length; i < iMax; i++) {
      elems[i].style.cursor = 'pointer';
      elems[i].style.outline = "none";

    } 
    this.fetchEventAndUser();
    return;
    var segObj={};
    var segDataList=[];
    for(var i=0;i<10;i++){
      segObj={};
      segObj["lblIndex"]=i+1;
      segObj["lblUserName"]="Brite Sreedharan";
      segObj["lblEmail"]="brite.sreedharan@kony.com";
      if(i%2===0){
        segObj["flxTempUser"]={"skin":"sknFlxWhiteBG"};
      }else{
        segObj["flxTempUser"]={"skin":"sknFlxLightBlueBG"};
      }
      segObj["lblVerticalLine0"]=" ";
      segObj["lblVerticalLine1"]=" ";
      segObj["lblVerticalLine2"]=" ";
      segObj["lblVerticalLine3"]=" ";
      segObj["btnEdit"]={"text":"Edit"};
      segObj["btnDone"]={"text":"Done"};
      segObj["imgRemoveIcon"]={"src":"delete_icon.png"};
      segDataList.push(segObj);
    }
    this.view.segUserList.removeAll();
    this.view.segUserList.addAll(segDataList);
    debugger;
    var result=parseEventRegistration(record);
    this.eventList=result;
    var masterDataList=[];
    var masterDataObj=[];
    masterDataList.push(["-1", "Select Event"]);
    for(var i=0;i<result.length;i++){
      masterDataObj=[];
      masterDataObj.push(i);
      masterDataObj.push(result[i].event_id+" - "+result[i].name);
      masterDataList.push(masterDataObj);
    }
    this.view.listBoxEvent.masterData=masterDataList;
    this.view.listBoxEvent.selectedKey="-1";
  },*/
  
  /**
   * @function showLoading
   * @description function to show the loading screen.
   * @private
   */
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
  /**
   * @function dismissLoading
   * @description function to dismiss the loading screen.
   * @private
   */
  dismissLoading: function(){
    kony.application.dismissLoadingScreen();
    this.view.forceLayout();
  },
  /*deRegisterUser2:function(registrationId){
    alert("in deRegisterUser2 ");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("event_registration");
    dataObject.setRecord(registrationId);
    var options = {
      "dataObject": dataObject
    };
    try{
      objSvc.deleteRecord(options,
                          this.deleteSuccessCallBack.bind(this),
                          this.deleteFailureCallBack.bind(this)); 
    }catch(excp){
      kony.print("Exception occured while deregistering user:"+excp(excp));
    }

  },
  deleteSuccessCallBack:function(response){
    alert("in deRegisterUser2 ");
  },
  deleteFailureCallBack:function(response){
    alert("in deRegisterUser2 ");
  },*/
  /**
   * @function navigateToAllEvents
   * @description function to navigate to AllEvents form.
   * @private
   */
  navigateToAllEvents : function(){
    var nav = new kony.mvc.Navigation("frmAllEvents");
    nav.navigate();
  },
  /**
   * @function setProfile
   * @description function to set the login user info in the form.
   * @private
   */
   setProfile : function(){
    if(userAttributes!==undefined && userAttributes !==null && userAttributes !== {}){
      this.view.dashboard.text = userAttributes.firstname;
      this.view.dashboard.Title = "";
    }
   },
  /**
   * @function navigateToAllEvents
   * @description function to navigate to AllEvents form.
   * @private
   */
  navigateToCreateEvent : function(){
    var nav = new kony.mvc.Navigation("frmCreateEvent");
    nav.navigate();
  }

});