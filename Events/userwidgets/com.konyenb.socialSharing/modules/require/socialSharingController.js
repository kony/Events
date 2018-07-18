define(function() {

  var konyLoggerModule = require('com/konyenb/socialSharing/konyLogger');
  var konysa =konysa || {};
  konysa.logger = new konyLoggerModule("Social Sharing") || function(){};

  return {
    /**
     * @function constructor
     * @private
     * @param {Object} baseConfig
     * @param {Object} layoutConfig
     * @param {Object} pspConfig
     */
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      konysa.logger.trace("***************Entering into constructor****************");
      this._sharingIcon = "";
      this._mimetype = "";
      this._contentType = "";
      this._intentContentType = "";
      this._base64Type = "";
      this._base64String  = "";
      this._subject = "";
      this._count = 0;
      this._flag = 0;
      this._fileName =  "";
      this._deviceInfo = "";
      konysa.logger.trace("********************Exiting Constructor*****************");
    },
    /**
     * @function initGettersSetters
     * @description contains getters/setters for custom properties
     */
    initGettersSetters: function() {

      defineSetter (this,"sharingIcon",function(value)
                    {
        try{
        konysa.logger.trace("************Entering into sharingIcon Setter***********");
        if(value.search("png") != -1)
        {
          this._sharingIcon = value;

        }
        else
        {
          this._sharingIcon = value + "png";
        }
        konysa.logger.trace("********************Exiting sharingIcon setter**********");
        }catch(error){
             kony.print("Social Sharing Controller"+JSON.stringify(error));
      }
      });

      defineGetter (this, "sharingIcon",function(){
        konysa.logger.trace("************Entering into sharingIcon getter************");
        return this._sharingIcon;
        //konysa.logger.trace("************Exiting from sharingIcon getter**************");
      });

      defineSetter(this,"MimeType",function(value){
        konysa.logger.trace("************************Entering setter of mime type ****************");
        try
        {
          if(value===null)
          {
            alert("Mime Type can't be null");
          }
          else
          {
            this._mimetype = value; 
            if(this._mimetype == "Image/PNG")
            {
              this._contentType = "png";

            }
            else if(this._mimetype == "Image/JPG")
            {
              this._contentType = "jpg";

            }
            else if(this._mimetype == "PDF")
            {
              this._contentType = "pdf";

            }
            else if(this._mimetype == "Plain-Text")
            {
              this._contentType = "text/plain";
            }
          }
        }catch(exception)
        {
          kony.print("Exception occured"+exception);

        }
        konysa.logger.trace("****************Exiting setter of MimeType *******************");

      });

      defineGetter (this, "MimeType",function(){
        konysa.logger.trace("************Entering into sharingIcon getter************");
        return this._contentType;
        //konysa.logger.trace("************Exiting from sharingIcon getter**************");
      });

      defineSetter(this,"Subject",function(value){
        konysa.logger.trace("*******************Entering into Subject setter****************");
        this._subject = value;
        konysa.logger.trace("*******************Exiting from subject setter*****************");
      });

      defineGetter(this,"Subject",function(){
        konysa.logger.trace("*******************Entering into Subject getter****************");
        return this._subject;

      });

      defineSetter(this,"FileName",function(value){

        konysa.logger.trace("*********************Entering into fleName setter method ************");
        this._fileName = value;
        konysa.logger.trace("**********************Exiting from fileName setter method************");

      });
    },
    /**
     * @function checkDeviceInfo
     * @description This function is used to get the device information
     * @private
     */
    checkDeviceInfo : function(){
      try{
      konysa.logger.trace("*******************************Entering into checkDeviceInfo Function*******************************");
      var deviceName = kony.os.deviceInfo().name;
      if (deviceName === "android")
      {
        this._deviceInfo = "android";
        this.createMyFile();
      }
      else if(deviceName === "iPhone")
      {
        this._deviceInfo = "iPhone";
        this.createMyFile();
      }
      else
      {
        kony.print("Unsupported device type");
        konysa.logger.trace("Device Type is not supported");
      }
      konysa.logger.trace("****************************Exiting from checkDeviceInfo Function**********************************");
      }catch(error){
             kony.print("Social Sharing Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function setContent
     * @description This function is used to set the mime type and base64 information
     * @private
     */
    setContent : function(base64){
      try{
      konysa.logger.trace("*******************************Entering into setContent Function**********************************");
      if(base64.length > 0)
      {
        this._base64String = base64;
        var mimeTypeString = base64.substring(0,5);
        if(mimeTypeString === "iVBOR")
        {
          this._base64Type = "png";
          if(this._base64Type === this._contentType )
          {
            this._intentContentType = "image/png";
            this._flag = 1;
          }
          else
          {
            konysa.logger.trace("****************Content-Type mismatch*******************");
            this._flag = 0;

          }
        }

        else if(mimeTypeString === "JVBERi")
        {
          this._base64Type = "pdf";
          if(this._base64Type === this._contentType )
          {
            this._intentContentType = "application/pdf";
            this._flag = 1;
          }
          else
          {
            konysa.logger.trace("****************Content-Type mismatch*******************");
            this._flag = 0;
          }
        }
        else if(mimeTypeString.substring(0,3) === "/9j")
        {
          this._base64Type = "jpg";
          if(this._base64Type === this._contentType)
          {
            this._intentContentType = "image/jpg";
            this._flag = 1;
          }
          else
          {
            konysa.logger.trace("****************Content-Type mismatch*******************");
            this._flag = 0;
          }

        }
        else
        {
          konysa.logger.trace("*********************Unsuppoerted file*********************");
        }

      }
      else
      {
        this._base64String = null;
        konysa.logger.trace("Content can't be null");
        alert("Content can't be null");
      }
      if(this._flag === 0)
      {
        return false;
      }
      else
      {
        return true;
      }
      konysa.logger.trace("********************************Exiting from shareContent Function***************************");
      }catch(error){
             kony.print("Social Sharing Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function createMyFile
     * @description This function is used to create file on the basis of mime type and base64 data
     * @private
     */
    createMyFile : function()
    {
      try{
      konysa.logger.trace("*************************Entering into createFile Function *******************************");
      var rawbytes;
      var fileExtension;
      var destDirPath;
      if(this._flag === 1)
      {
        this._count = this._count + 1;
        if(this._base64String !== null)
        {
          rawbytes = kony.convertToRawBytes(this._base64String);
        }
        else{
          konysa.logger.trace("Content is empty");
          return;
        }

        if (this._intentContentType === "image/png")
        {
          fileExtension = ".png";
        }
        else if(this._intentContentType === "image/jpg")
        {
          fileExtension = ".jpg";
        }
        else if(this._intentContentType === "application/pdf")
        {
          fileExtension = ".pdf";
        }
        else
        {
          fileExtension = ".txt";
        }

        if(this._deviceInfo === "android")
        {
          destDirPath = kony.io.FileSystem.getExternalStorageDirectoryPath()+"/Sharing";
        }
        else if(this._deviceInfo === "iPhone")
        {
          destDirPath = kony.io.FileSystem.getDataDirectoryPath()+"/Sharing";
        }

        var destFilePath = destDirPath + this._fileName+fileExtension;
        var directory = new kony.io.File(destDirPath);
        if((!directory.exists()))
        {
          directory.createDirectory();
        }
        else {
          directory.remove(true);
          directory.createDirectory();
        }

        var fileObj = new kony.io.File(destFilePath);
        if(!(fileObj.exists()))
        {
          fileObj.createFile();
        }
        else
        {
          fileObj.remove();
          fileObj.createFile();
        }
        var writeObj = new kony.io.File(destFilePath).write(rawbytes);
        if(writeObj)
        {
          konysa.logger.trace("**********************Writing succcesful*********************************");
          if(this._deviceInfo === "android")
          {
            this.shareUsingAndroid(destFilePath);
          }
          else if(this._deviceInfo === "iPhone")
          {
            this.shareUsingiPhone(destFilePath);
          }
          else
          {
            kony.print("-------------Unsupported device type-----------------------------------------");
            konysa.logger.trace("*********************Unsupported device type************************");
          }

        }
        this.count = this.count + 1;
      }
      else
      {
        konysa.logger.trace("**************************Content -Type mismatch********************************");
        return;
      }
      konysa.logger.trace("********************Exiting From createFile Function ******************************");
      }catch(error){
             kony.print("Social Sharing Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function shareUsingAndroid
     * @description This function is used to share the file existing in the provided path for android
     * @private
     * @param {string} path
     */
    shareUsingAndroid : function(path)
    { try{
      konysa.logger.trace("***************Entering shareUsingAndroid Function***************");
      var konyPackage = java.import("com.konylabs.android.KonyMain");
      var Intent   = java.import("android.content.Intent");
      var String = java.import("java.lang.String");
      var uriObj = java.import("android.net.Uri");
      var fileObj = java.import("java.io.File");
      var intentObj = new Intent(Intent.ACTION_SEND);
      intentObj.setType(this._intentContentType);
      intentObj.putExtra(Intent.EXTRA_SUBJECT,this._subject);
      var uri = uriObj.fromFile(new fileObj(path));
      intentObj.putExtra(Intent.EXTRA_STREAM,uri);
      var contextObj = konyPackage.getActContext();
      contextObj.startActivity(Intent.createChooser(intentObj,"Choose App"));
      konysa.logger.trace("***************Exiting shareUsingAndroid Function***************");
    }catch(error){
             kony.print("Social Sharing Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function shareUsingiPhone
     * @description This function is used to share the file existing in the provided path for iphone
     * @private
     * @param {string} path
     */
    shareUsingiPhone : function(path)
    { 
      try{
      konysa.logger.trace("******************Entering into shareUsingIphone Function***********************");
      var textToShare = "Sharing Content";
      var NSURL = objc.import("NSURL");
      var NSURLObjectLink=NSURL.fileURLWithPath(path);
      var shareItems = [textToShare, NSURLObjectLink];
      var UIActivityViewController = objc.import("UIActivityViewController");
      var avcObject=UIActivityViewController.alloc().initWithActivityItemsApplicationActivities(shareItems, undefined);
      var UIApplication = objc.import("UIApplication");
      UIApplication.sharedApplication().keyWindow.rootViewController.presentViewControllerAnimatedCompletion(avcObject, true, undefined);
      konysa.logger.trace("****************Exiting from shareUsingIphone Function***************************");
      }catch(error){
            kony.print("Social Sharing Controller"+JSON.stringify(error));
      }
    }
  };
});