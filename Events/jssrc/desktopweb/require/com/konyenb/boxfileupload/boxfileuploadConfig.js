define(function() {
    return {
        "properties": [{
            "name": "appUserID",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "folderID",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["selectFile", "uploadFile"],
        "events": ["onUploadSuccess", "onUploadFailure", "onImageSelection"]
    }
});