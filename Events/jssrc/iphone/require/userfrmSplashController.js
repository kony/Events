define({
    /**
     * @function onNavigate
     * @description function to populate data to segment while navigating to the form
     * @private
     */
    onNavigate: function() {
        var data = [{
            "splashImage": "splashconcept01.png",
            "desc": "Explore events",
            "skipSkin": {
                "text": "SKIP",
                "skin": "sknbtnSkipNormal"
            }
        }, {
            "splashImage": "splashconcept02.png",
            "desc": "Browse event details",
            "skipSkin": {
                "text": "SKIP",
                "skin": "sknbtnSkipNormal"
            }
        }, {
            "splashImage": "splashconcept03.png",
            "desc": "Login and register for events",
            "skipSkin": {
                "text": "SKIP",
                "skin": "sknbtnSkipFocus"
            }
        }];
        this.setData(data);
    },
    /**
     * @function setData
     * @description function to set data to segment.
     * @private
     */
    setData: function(data) {
        this.view.segSplashEvents.removeAll();
        this.view.segSplashEvents.widgetDataMap = {
            "imgGetStart": "splashImage",
            "lblSplashDesc": "desc",
            "btnSkip": "skipSkin"
        };
        this.view.segSplashEvents.setData(data);
    }
});