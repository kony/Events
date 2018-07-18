define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    createNewEvent:function(){
      try{
        if(this.onCreateEventClick!==null&&this.onCreateEventClick!==undefined){
          this.onCreateEventClick();
        }
      }catch(excp){
        kony.print("excp: "+excp.message);
      }
    },
  };
});