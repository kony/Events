define({ 

 //Type your controller code here 
  shareEvent:function(widget,context){
    var data=context.widgetInfo.selectedRowItems[0];
    this.executeOnParent("shareEvent",data);
  }
 });