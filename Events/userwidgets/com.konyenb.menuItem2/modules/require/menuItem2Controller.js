define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._selectedFlex=this.view.flexAllNewEvent;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    
    setSelectedFlex : function(selectedId){
      try{
      switch(selectedId){
        case 1:
          this._selectedFlex.skin = "slFbox";
          this.view.flexAllNewEvent.skin = "sknFlxMenuClick";
          this._selectedFlex = this.view.flexAllNewEvent;
          break;
        case 2:
          this._selectedFlex.skin = "slFbox";
          this.view.flxCreateNewEvent.skin = "sknFlxMenuClick";
          this._selectedFlex = this.view.flxCreateNewEvent;
          break;
        case 3:
          this._selectedFlex.skin = "slFbox";
          this.view.flxManageUser.skin = "sknFlxMenuClick";
          this._selectedFlex = this.view.flxManageUser;
          break;
        default :
          kony.print("Not Valid");
      }
      }catch(error){
             kony.print("Menu Item Controller"+JSON.stringify(error));
      }
    },
    onMenuClick:function(){
      try{
      var selectedRowIndex=this.view.SegOptions.selectedRowIndex;
      alert(selectedRowIndex);
      }catch(error){
             kony.print("Menu Item Controller"+JSON.stringify(error));
      }
    },
    getEvents:function(){
      this._selectedFlex.skin="slFbox";
      this.view.flexAllNewEvent.skin="sknFlxMenuClick";
      this._selectedFlex=this.view.flexAllNewEvent;
      try{
        if(this.onAllEventClick!==null&&this.onAllEventClick!==undefined){
          this.onAllEventClick();
        }
      }catch(excp){
        kony.print("excp: "+excp.message);
      }
    },
    createEvent:function(){
      this._selectedFlex.skin="slFbox";
      this.view.flxCreateNewEvent.skin="sknFlxMenuClick";
      this._selectedFlex=this.view.flxCreateNewEvent;
      try{
        if(this.onCreateEventClick!==null&&this.onCreateEventClick!==undefined){
          this.onCreateEventClick();
        }
      }catch(excp){
        kony.print("excp: "+excp.message);
      }
    },
    manageUser:function(){
      this._selectedFlex.skin="slFbox";
      this.view.flxManageUser.skin="sknFlxMenuClick";
      this._selectedFlex=this.view.flxManageUser;
      try{
        if(this.onManageUserClick!==null&&this.onManageUserClick!==undefined){
          this.onManageUserClick();
        }
      }catch(excp){
        kony.print("excp: "+excp.message);
      }
    },
    getNotification:function(){
      this._selectedFlex.skin="slFbox";
      this.view.flxNotification.skin="sknFlxMenuClick";
      this._selectedFlex=this.view.flxNotification;
      try{
        if(this.onGetNotificationClick!==null&&this.onGetNotificationClick!==undefined){
          this.onGetNotificationClick();
        }
      }catch(excp){
        kony.print("excp: "+excp.message);
      }
    },
    getMyCalendar:function(){
      this._selectedFlex.skin="slFbox";
      this.view.flxMyCalendar.skin="sknFlxMenuClick";
      this._selectedFlex=this.view.flxMyCalendar;
      try{
        if(this.onGetMyCalendar!==null&&this.onGetMyCalendar!==undefined){
          this.onGetMyCalendar();
        }
      }catch(excp){
        kony.print("excp: "+excp.message);
      }
    },
    getSettings:function(){
      this._selectedFlex.skin="slFbox";
      this.view.flxSetting.skin="sknFlxMenuClick";
      this._selectedFlex=this.view.flxSetting;
      try{
        if(this.onGetSetting!==null&&this.onGetSetting!==undefined){
          this.onGetSetting();
        }
      }catch(excp){
        kony.print("excp: "+excp.message);
      }
      
      
      
    }
  };
});