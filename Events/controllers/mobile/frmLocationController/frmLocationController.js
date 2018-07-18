define({
	/**
	 * @function onNavigate
	 * @description This function is used to populate the data to the widget while navigating to this form.
	 * @private
	 * @param {JSON} data
	 */
	onNavigate: function (data) {
		try {
			var locationList = [];
			var location = {
				"lat": data.lat,
				"lon": data.lon,
				"image": "mapsmallicon.png",
				"name": "current position",
				"desc": " ",
				"showcallout": true
			};
			location["calloutData"] = {
				"lblAdd": data.address
			}
			this.view.lblLoc.text = data.name;
			locationList.push(location);
			this.view.mapEventLoc.locationData = locationList;
		} catch (error) {
			kony.print("frm Event Location Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function navigateBack
	 * @description This function is used to navigate to frmEventDetails.
	 * @private
	 */
	navigateBack: function () {
		try {
			var navigationObject = new kony.mvc.Navigation("frmEventDetails");
			navigationObject.navigate();
		} catch (e) {
			alert(e.message);
			kony.print(e.message);
		}
	}

});