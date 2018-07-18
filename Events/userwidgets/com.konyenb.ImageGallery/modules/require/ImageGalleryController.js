define(function() {
  var konyLoggerModule = require('com/konyenb/ImageGallery/konyLogger');
  var konysa =konysa || {};
  konysa.logger = new konyLoggerModule("ImageGallery") || function(){};

  return {
    /**
     * @function constructor
     * @private
     * @param {Object} baseConfig
     * @param {Object} layoutConfig
     * @param {Object} pspConfig
     */
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      // 
      /** Global variables for custom properties */
      this._appUserID=null;
      this._rootFolderID="0";
    },
    /**
     * @function initGettersSetters
     * @description contains getters/setters for custom properties
     */
    initGettersSetters: function() {
      //  
      defineGetter(this,"appUserID",function(){
        return this._appUserID;});
      defineGetter(this,"rootFolderID",function(){
        return this._rootFolderID;});
      defineSetter(this,"appUserID",function(appUserID){
        this._appUserID=appUserID;
      });
      defineSetter(this,"rootFolderID",function(rootFolderID){
        this._rootFolderID=rootFolderID;
      });
    },
    /**
     * @function getImages
     * @description This function is used to invoke integration service for fetching image from Box.
     * @private
     * @param {string} folderID
     * @param {string} top
     */
    getImages:function(folderID){
      var imageList=[];
      var self=this;
      if(folderID===null||folderID===undefined){
        folderID=this._rootFolderID;
      }
      var appUserID=this._appUserID;
      if(appUserID===""||appUserID===null||appUserID===undefined){
        alert("please provide the app user ID");
        return;
      }
      try{
        var client = kony.sdk.getCurrentInstance();
        var intgService = client.getIntegrationService("BoxService");
        kony.model.ApplicationContext.showLoadingScreen("please wait..");
        intgService.invokeOperation("getFilesInFolder",{},{
          "appUserID":appUserID,
          "folderID":folderID
        },function(successResponse){
          kony.model.ApplicationContext.dismissLoadingScreen();
          imageList=successResponse.results;
          imageList=JSON.parse(imageList);
          self.setImage(imageList.result);
        },function(error){
          kony.model.ApplicationContext.dismissLoadingScreen();
          alert(error);
        });
      }catch(e){
        kony.model.ApplicationContext.dismissLoadingScreen();
        alert(e.message);
      }
     
    },
    /**
     * @function setImage
     * @description This function is used to display the image in the UI 
     * @private
     * @param {string} response
     */
    setImage:function(response){
      try{
      var flxItem;
      var id=0;
      var fileName;
      this.view.flxScThumbImage.removeAll();
      this.view.imgEvent.src = response[0].image_url;
      for(var i=0;i<response.length;i++){
        if(response[i].image_url!==undefined){
          flxItem=this.getFlexItem.bind(this)(id,response[i].image_url);
          this.view.flxScThumbImage.add(flxItem);
          this.view.forceLayout();
          id++;
        }
      }
      }catch(error){
             kony.print("Image Gallery Controller"+JSON.stringify(error));
      }
    },
    /**
     * @function getFlexItem
     * @description This function is used to create flex container with image dynamically. 
     * @private
     * @param {string} id
     * @param {string} imageUrl
     */
    getFlexItem:function(id,imageUrl){
      try{
      var self=this;
      function test(eventobject){
        var flexId=eventobject.id;
        var id=flexId.split("flxItem");
        var imageSrc=self.view["imgThumb"+id[1]].src;
        self.view.imgEvent.src=imageSrc;
      }
      var left;
      left=(id===0)?0:5;
      var flxItem = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "flxItem"+id,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": left+"dp",
        "onClick": test,
        "skin": "sknFlxThumbBG",
        "top": "dp",
        "width": "80dp",
        "zIndex": 1
      }, {}, {});
      var imgThumb = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "imgThumb"+id,
        "isVisible": true,
        "skin": "slImage",
        "src": imageUrl,
        "width": "100%",
        "zIndex": 1
      }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      flxItem.add(imgThumb);
      return flxItem;
    }catch(error){
             kony.print("Image Gallery Controller"+JSON.stringify(error));
      }
    }
  };
});