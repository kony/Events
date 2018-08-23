define({
	profile: {},
	naviData: "",
	/**
	 * @function onNavigate
	 * @description This function is used to populate the data to the widget while navigating to this form.
	 * @private
	 * @param {JSON} params
	 */
	onNavigate: function (params) {
		try {
			this.naviData = params;
			if (kony.store.getItem("isLoggedIn") == "true") {
				this.checkOriginAndProceed();
			} else {
				this.view.btnLinkedIn.isVisible = true;
				this.view.btnPleaseWait.isVisible = false;
			}
		} catch (error) {
			kony.print("frm Event Landing Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function linkedLogin
	 * @description This function is used to make the user to login through linkedIn in to the app.
	 * @private
	 */
	linkedLogin: function () {
		var controllerScope = this;
		this.animateBrowserFlex(0);
		try {
			var client = kony.sdk.getCurrentInstance();
			var auth_client = client.getIdentityService("linkedIdentityLogin");
			auth_client.login({
				"browserWidget": controllerScope.view.browser
			}, function (response) {
				this.animateBrowserFlex(100);
				this.view.btnLinkedIn.isVisible = false;
				this.view.btnPleaseWait.isVisible = true;
				auth_client.getUserAttributes(function (result) {
					this.view.browser.enableCache = false;
					this.profile.mail = result.emailAddress;
					this.profile.first_name = result.firstName;
					this.profile.last_name = result.lastName;
					this.profile.login_mode = 1;
					if (result.pictureUrl !== undefined && result.pictureUrl !== null && result.pictureUrl !== null) {
						this.profile.profile = result.pictureUrl;
					}
					kony.net.clearCookies(
						"https://www.linkedin.com");
					this.checkAndCreateUser();

				}.bind(this),
			    function (error) {
					kony.application.dismissLoadingScreen();
					alert("Error occured while fetching the profile details");
				});
			}.bind(this),
		    function (error) {
				kony.model.ApplicationContext.dismissLoadingScreen();
				alert("login failure" + error.message);
			});
		} catch (exception) {
			kony.model.ApplicationContext.dismissLoadingScreen();
			alert(exception.message);
		}
	},
	/**
	 * @function animateBrowserFlex
	 * @description Function to animate the flex container having browser widget.
	 * @private
	 */
	animateBrowserFlex: function (top) {
		try {
			this.view.flxBrowserContainer.animate(
				kony.ui.createAnimation({
					100: {
						top: top + "%",
						"stepConfig": {}
					}
				}), {
				delay: 0,
				fillMode: kony.anim.FILL_MODE_FORWARDS,
				duration: 0.1
			}, {
				animationEnd: function () {}
			});
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function checkAndCreateUser
	 * @description Function to create the user if its not signed up already.
	 * @private
	 */
	checkAndCreateUser: function () {
		try {
			var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
					"access": "online"
				});
			var dataObject = new kony.sdk.dto.DataObject("users");
			var odataUrl = "$filter=mail eq '" + this.profile.mail + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))";
			dataObject.odataUrl = odataUrl;
			var options = {
				"dataObject": dataObject
			};

			objSvc.fetch(options,
				this.checkUserSuccessCallback.bind(this),
				this.checkUserFailureCallback.bind(this));
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function checkUserSuccessCallback
	 * @description success callback of the checkAndCreateUser.
	 * @private
	 * @param {JSON} response
	 */
	checkUserSuccessCallback: function (response) {
		try {
			if (response.records !== undefined && response.records.length >= 1) {
				kony.print("user Already exists.. skipped storing in DB");
				kony.store.setItem("profile", JSON.stringify(this.profile));
				kony.store.setItem("userId", response.records[0].user_id);
				this.checkOriginAndProceed();
			} else {
				this.createUser();
			}
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function checkUserFailureCallback
	 * @description failure callback of the checkAndCreateUser.
	 * @private
	 * @param {JSON} error
	 */
	checkUserFailureCallback: function (error) {
		alert("Something Went Wrong while checking" + JSON.stringify(error));
	},
	/**
	 * @function createUser
	 * @description Function ot create user.
	 * @private
	 */
	createUser: function () {
		try {
			var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
					"access": "online"
				});
			var dataObject = new kony.sdk.dto.DataObject("users");
			dataObject.setRecord(this.profile);
			var options = {
				"dataObject": dataObject
			};
			objSvc.create(options,
				this.createUserSuccessCallback.bind(this),
				this.createUserFailureCallback.bind(this));
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},

	/**
	 * @function createUserSuccessCallback
	 * @description success callback of the createUser.
	 * @private
	 * @param {JSON} response
	 */
	createUserSuccessCallback: function (response) {
		try {
			kony.store.setItem("profile", JSON.stringify(this.profile));
			kony.store.setItem("userId", response.user_id);
			kony.store.setItem("isLoggedIn", "true");
			this.checkOriginAndProceed();
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function createUserFailureCallback
	 * @description failure callback of the createUser.
	 * @private
	 * @param {JSON} error
	 */
	createUserFailureCallback: function (error) {
		alert("Something Went Wrong while creating user" + JSON.stringify(error));
	},
	/**
	 * @function checkOriginAndProceed
	 * @description function to perform operation on the basis of last previous form
	 * @private
	 */
	checkOriginAndProceed: function () {
		try {
			var paramData = {};
			switch (this.naviData.origin) {
			case "register":
				this.view.btnPleaseWait.isVisible = true;
				this.view.btnLinkedIn.isVisible = false;
				this.registerEvent();
				break;
			case "login":
				paramData = {};
				kony.store.setItem("isLoggedIn", "true");
				paramData.origin = "login";
				this.navigateToLandingForm(paramData);
				break;
			case "myevents":
				kony.store.setItem("isLoggedIn", "true");
				paramData = {};
				paramData.origin = "myevents";
				this.navigateToLandingForm(paramData);
				break;
			case "profile":
				kony.store.setItem("isLoggedIn", "true");
				this.navToProfile();
				break;
			default:
				kony.print("Invalid Case Value");
			}
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function navToProfile
	 * @description function to navigate to frmProfile
	 * @private
	 */
	navToProfile: function () {
		try {
			var navObj = new kony.mvc.Navigation("frmProfile");
			navObj.navigate();
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function navigateToLandingForm
	 * @description function to navigate to frmEventsLanding with the event data
	 * @private
	 * @param {JSON} param
	 */
	navigateToLandingForm: function (param) {
		try {
			var navToEventLanding = new kony.mvc.Navigation("frmEventsLanding");
			navToEventLanding.navigate(param);
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function registerEvent
	 * @description function to check for registration and register if not already.
	 * @private
	 */
	registerEvent: function () {
		try {
			if (kony.store.getItem("isLoggedIn") === undefined || kony.store.getItem("isLoggedIn") === "false" || kony.store.getItem("isLoggedIn") === null || kony.store.getItem("isLoggedIn") === "") {
				this.isUserAlreadyRegistered();
			} else {
				this.createRegistration();
			}
			kony.store.setItem("isLoggedIn", "true");
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function createRegistration
	 * @description function to check for registration and register if not already.
	 * @private
	 */
	createRegistration: function () {
		try {
			var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
					"access": "online"
				});
			var dataObject = new kony.sdk.dto.DataObject("event_registration");
			dataObject.addField("event_id", this.naviData.event_id);
			dataObject.addField("user_id", kony.store.getItem("userId"));
			var options = {
				"dataObject": dataObject
			};
			objSvc.create(options,
				this.createRegistrationSuccessCallback.bind(this),
				this.createRegistrationFailureCallback.bind(this));
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function createRegistrationSuccessCallback
	 * @description Success callback for createRegistration
	 * @private
	 * @param {JSON} response
	 */
	createRegistrationSuccessCallback: function (response) {
		try {
			var paramData = {};
			paramData.origin = "register";
			this.navigateToLandingForm(paramData);
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},
	/**
	 * @function createRegistrationFailureCallback
	 * @description Failure callback for createRegistration
	 * @private
	 * @param {JSON} error
	 */
	createRegistrationFailureCallback: function (error) {
		alert("Something Went Wrong" + JSON.stringify(error));
	},
	/**
	 * @function isUserAlreadyRegistered
	 * @description Function to check if user already registered.
	 * @private
	 */
	isUserAlreadyRegistered: function () {
		try {
			var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
					"access": "online"
				});
			var dataObject = new kony.sdk.dto.DataObject("event_registration");
			var odataUrl = "$filter=event_id eq '" + this.naviData.event_id + "' and user_id eq '" + kony.store.getItem("userId") + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))";
			dataObject.odataUrl = odataUrl;
			var options = {
				"dataObject": dataObject
			};
			objSvc.fetch(options,
				this.isUserRegSuccessCallback.bind(this),
				this.isUserRegFailureCallback.bind(this));
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},

	/**
	 * @function isUserRegSuccessCallback
	 * @description success callback for isUserAlreadyRegistered
	 * @private
	 * @param {JSON} response
	 */
	isUserRegSuccessCallback: function (response) {
		try {
			if (response.records !== undefined && response.records.length > 0) {
				var paramData = {};
				paramData.origin = "alreadyregistered";
				this.navigateToLandingForm(paramData);
			} else {
				this.createRegistration();
			}
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},

	/**
	 * @function isUserRegFailureCallback
	 * @description failure callback for isUserAlreadyRegistered
	 * @private
	 * @param {JSON} error
	 */
	isUserRegFailureCallback: function (error) {
		alert("Something Went Wrong" + JSON.stringify(error));
	},

	/**
	 * @function navigateBack
	 * @description function to navigate to the previous form
	 * @private
	 */
	navigateBack: function () {
		try {
			var previousForm = this.getPreviousForm();
			var navigationObject = new kony.mvc.Navigation(previousForm);
			navigationObject.navigate({
				"origin": EVENT_CONSTANS.MODE.LOGINBACK
			});
		} catch (e) {
			alert(e.message);
			kony.print(e.message);
		}
	}
});