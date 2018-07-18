function createOperation(data, seviceName, objectName) {
    try {
        var objSvc = kony.sdk.getCurrentInstance().getObjectService(seviceName, {
            "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject(objectName);
        dataObject.setRecord(data);
        var options = {
            "dataObject": dataObject
        };
        objSvc.create(options, function(response) {}, function(error) {
            kony.print("create failure");
        });
    } catch (err) {
        kony.application.dismissLoadingScreen();
        alert("Something went wrong. Please try later.");
    }
}

function getOperation(queryData, seviceName, objectName, callback) {
    try {
        var objSvc = kony.sdk.getCurrentInstance().getObjectService(seviceName, {
            "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject(objectName);
        var options = {
            "dataObject": dataObject,
            "headers": {},
            "queryParams": queryData
        };
        objSvc.fetch(options, function(response) {
            if (callback !== undefined) {
                callback(response);
            }
        }, function(error) {
            kony.application.dismissLoadingScreen();
            alert("something went wrong..");
        });
    } catch (err) {
        kony.application.dismissLoadingScreen();
        kony.print(err);
    }
}

function sendMetric(event_id, action) {
    var payload = {
        event_id: event_id,
        action: action
    };
    createOperation(payload, "EventsSOS", "event_metrics")
}