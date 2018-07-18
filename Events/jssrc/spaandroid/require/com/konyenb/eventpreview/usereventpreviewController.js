define(function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        /**
         * @function setTitle
         * @description - This function is used to set title of the event
         * @param {String - title}
         */
        setTitle: function(title) {
            try {
                this.view.lblEventTitlePrev.text = title;
            } catch (err) {
                kony.print("eventsPreview Controller" + JSON.stringify(err));
            }
        },
        /**
         * @function setSubTitle
         * @description - This function is used to set sub  of the event
         */
        setSubTitle: function(subTitle) {
            try {
                this.view.lblEventCategoryPrev.text = subTitle;
            } catch (err) {
                kony.print("eventsPreview Controller" + JSON.stringify(err));
            }
        },
        /**
         * @function setBannerImage
         * @description - This function is used to set banner image  of the event
         */
        setBannerImage: function(bannerImage) {
            try {
                this.view.imageBanner.src = bannerImage
            } catch (err) {
                kony.print("eventsPreview Controller" + JSON.stringify(err));
            }
        },
        /**
         * @function setGalleryImage
         * @description - This function is used to set gallery image  of the event
         */
        setGalleryImage: function(data) {
            try {
                this.eventImages = [];
                this.eventImages = data;
                if (!data.length) {
                    this.view.flxGalleryCompConatiner.isVisible = false;
                    return;
                }
                this.view.flxGalleryCompConatiner.isVisible = true;
                for (var i = 0; i < data.length; i++) {
                    if (i <= 5) {
                        this.view["flexItem" + i].isVisible = true;
                        this.view["imgItem" + i].src = data[i].image_url;
                    } else {
                        this.view["flexRemainingImageCount"].isVisible = true;
                        this.view.lblRemaingImageCount.text = "+" + ((data.length) - 6).toFixed();
                        break;
                    }
                }
            } catch (error) {
                kony.print("Events Preview Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function setDescription
         * @description - This function is used to set description  for the event
         */
        setDescription: function(desc) {
            try {
                if (desc !== undefined) {
                    this.view.rchtxtDescriptionPrev.isVisible = true;
                    this.view.rchtxtDescriptionPrev.text = desc;
                } else {
                    this.view.rchtxtDescriptionPrev.isVisible = false;
                }
            } catch (err) {
                kony.print("Events Preview Controller" + JSON.stringify(err));
            }
        },
        /**
         * @function setDateRangeOnBanner
         * @description - This function is used to set dateRange in banner
         */
        setDateRangeOnBanner: function(dateRange) {
            try {
                this.view.lblDateRange.text = dateRange;
            } catch (err) {
                kony.print("Events Preview Controller" + JSON.stringify(err));
            }
        },
        /**
         * @function setDateRangeOnBanner
         * @description - This function is used to set dateRange  in details
         */
        setDateRangeOnDetails: function(dateRange) {
            try {
                this.view.lblDateValuePrev.text = dateRange;
            } catch (err) {
                kony.print("Events Preview Controller" + JSON.stringify(err));
            }
        },
        /**
         * @function setLocation
         * @description - This function is used to set location
         */
        setLocation: function(location) {
            try {
                this.view.lblLocationValuePrev.text = location;
            } catch (err) {
                kony.print("Events Preview Controller" + JSON.stringify(err));
            }
        },
        setShowMore: function(text, isVisible) {
            try {
                this.view.btnShowMore.text = text;
                this.view.btnShowMore.isVisible = isVisible;
            } catch (err) {
                kony.print("Events Preview Controller" + JSON.stringify(err));
            }
        },
        showMoreOnClick: function(text) {
            try {
                switch (text) {
                    case "Show more":
                        this.setDescription(desc);
                        this.setShowMore("Show Less", true);
                        break;
                    case "Show less":
                        this.setDescription(desc);
                        this.setShowMore("Show More", true);
                        break;
                }
            } catch (err) {
                kony.print("Events Preview Controller" + JSON.stringify(err));
            }
        },
        /**
         * @function setLocationOnMap
         * @description - This function is used to set location on Map
         */
        setLocationOnMap: function() {},
        /**
         * @function setEventDetails
         * @description - This function is used to set Eventdetails
         */
        setEventDetails: function(eventDetails) {
            this.eventData = eventDetails;
            this.eventImages = eventDetails.event_images;
        }
    };
});