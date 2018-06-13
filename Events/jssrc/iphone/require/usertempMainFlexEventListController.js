define({
    //Type your controller code here 
    shareEvent: function(widget, context) {
        //alert("eventObject: "+JSON.stringify(widget));
        //alert("context: "+JSON.stringify(context.widgetInfo.contentOffsetMeasured));
        var test = this.view.lblEventType.text;
        var data = context.widgetInfo.selectedRowItems[0];
        this.executeOnParent("shareEvent", data);
    }
});