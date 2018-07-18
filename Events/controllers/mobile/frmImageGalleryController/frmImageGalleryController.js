define({
	/**
	 * @function onNavigate
	 * @description This function is used to populate the data to the widget while navigating to this form.
	 * @private
	 * @param {JSON} data
	 */
	onNavigate: function (data) {
		this.imagedata = data;
	},
	/**
	 * @function navigateToFormEventDetail
	 * @description This function is used to navigate to frmEventDetails.
	 * @private
	 */
	navigateToFormEventDetail: function () {
		try {
			var navigationObject = new kony.mvc.Navigation("frmEventDetails");
			navigationObject.navigate();
		} catch (e) {
			kony.print(e.message);
			alert(e.message);
		}
	}

});