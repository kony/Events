define(function() {
    var konyLoggerModule = require('com/konysa/event1/konyLogger');
    var konysa = {};
    konysa.logger = new konyLoggerModule("Event detail Component");
    return {
        /**
         * @function constructor
         * @private
         * @param {Object} baseConfig
         * @param {Object} layoutConfig
         * @param {Object} pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._event = null;
        },
        //Logic for getters/setters of custom properties
        /**
         * @function initGettersSetters
         * @description function to initialize the init getter setter of the component.
         * @private
         */
        initGettersSetters: function() {
            konysa.logger.trace("----------Entering initGettersSetters Function---------", konysa.logger.FUNCTION_ENTRY);
            /*defineGetter(this,"activeStars",function(){
              konysa.logger.trace("----------Entering isSearchVisible Setter---------", konysa.logger.FUNCTION_ENTRY);
              konysa.logger.trace("----------Exiting isSearchVisible Setter---------", konysa.logger.FUNCTION_ENTRY);
              return _activeStars;
            });
            defineSetter(this, "isSearchVisible", function(value) {
              konysa.logger.trace("----------Entering isSearchVisible Setter---------", konysa.logger.FUNCTION_ENTRY);
              konysa.logger.trace("----------Exiting isSearchVisible Setter---------", konysa.logger.FUNCTION_ENTRY);
            });*/
        },
        /**
         * @function setEvent
         * @description function to initialize the init component with the provided event data.
         * @private
         * @param{JSON} event
         */
        setEvent: function(event) {
            konysa.logger.trace("----------Entering setEvent function---------", konysa.logger.FUNCTION_ENTRY);
            if (event === null || event === undefined) {
                alert("please provide event detail!");
                return;
            }
            //var event=this.parseEvent(eventParam);
            //if(event===null)return;
            this._event = event;
            this.view.imgEventLogo.src = event["event_banners"][0]["banner_url"];
            this.view.lblEventTitle.text = event["name"];
            this.view.lblEventDescCategoryText.text = event["event_category"];
            this.view.lblEventDescDateText.text = event["event_date"];
            var location = "Online";
            if (event["location"][0]["addressLine1"] !== undefined && (event["location"][0]["addressLine1"]).trim() !== "") {
                location = event["location"][0]["addressLine1"];
                if (event["location"][0]["cityname"] !== undefined && ((event["location"][0]["cityname"]).trim() !== "")) {
                    location = location + ", " + event["location"][0]["cityname"];
                }
            } else {
                if (event["location"][0]["cityname"] !== undefined && ((event["location"][0]["cityname"]).trim() !== "")) {
                    location = event["location"][0]["cityname"];
                }
            }
            this.view.lblEventDescLocationText.text = location;
            this.setImages(event["event_images"]);
            konysa.logger.trace("----------Exiting setEvent function---------", konysa.logger.FUNCTION_ENTRY);
        },
        /**
         * @function setImages
         * @description function to add images to the event.
         * @private
         * @param{JSONArray} imageList
         */
        setImages: function(imageList) {
            this.view.flxScImageGallery.removeAll();
            if (imageList === null || imageList === undefined) {
                return;
            }
            var imageListLength = imageList.length;
            var flxItem, img;
            for (var i = 0; i < imageListLength; i++) {
                if (i > 5) {
                    return;
                }
                flxItem = new kony.ui.FlexContainer({
                    "autogrowMode": kony.flex.AUTOGROW_NONE,
                    "centerY": "50%",
                    "clipBounds": true,
                    "height": "40dp",
                    "id": "flxItem" + i,
                    "isVisible": true,
                    "layoutType": kony.flex.FREE_FORM,
                    "left": i === 0 ? "0dp" : "5dp",
                    "skin": "sknFlxEventRoot",
                    "top": "0dp",
                    "width": "40dp",
                    "zIndex": 1
                }, {}, {});
                flxItem.setDefaultUnit(kony.flex.DP);
                var img = new kony.ui.Image2({
                    "centerX": "50%",
                    "centerY": "50%",
                    "height": "40dp",
                    "id": "img" + i,
                    "isVisible": true,
                    "skin": "slImage",
                    "src": imageList[i]["image_url"],
                    "width": "40dp",
                    "zIndex": 1
                }, {
                    "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                    "padding": [0, 0, 0, 0],
                    "paddingInPixel": false
                }, {});
                flxItem.add(img);
                this.view.flxScImageGallery.add(flxItem);
            }
        },
        /**
         * @function onRemoveHandler
         * @description function to trigger the onRemove event.
         * @private
         */
        onRemoveHandler: function() {
            if (this.onRemove !== null && this.onRemove !== undefined) {
                this.onRemove(this._event);
            }
        },
        /**
         * @function onEditHandler
         * @description function to trigger the onEdit event.
         * @private
         */
        onEditHandler: function() {
            if (this.onEdit !== null && this.onEdit !== undefined) {
                this.onEdit(this._event);
            }
        },
        /*parseEvent:function(event){
          konysa.logger.trace("----------Entering parseEvent function---------", konysa.logger.FUNCTION_ENTRY);
          var eventObj={};
          try{
            eventObj["event_banner"]=event["event_banners"][0]["banner_url"];
            eventObj["event_title"]=event["name"];
            eventObj["event_category"]=event["event_category"]
            eventObj["event_date"]=event["event_date"];
            eventObj["event_location"]=event["location"][0]["addressLine1"];
            eventObj["event_images"]=event["event_images"];
          }catch(excp){
            alert(excp.message);
            konysa.logger.trace("----------Exception occured while parsing event---------", konysa.logger.FUNCTION_ENTRY);
            return null;
          }
          konysa.logger.trace("----------Exiting parseEvent function---------", konysa.logger.FUNCTION_ENTRY);
          //return eventObj;
          return event;
        }*/
    };
});