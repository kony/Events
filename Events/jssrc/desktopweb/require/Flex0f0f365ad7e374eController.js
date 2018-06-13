define(function(){
	var controller = require("userFlex0f0f365ad7e374eController");
	var controllerActions = ["Flex0f0f365ad7e374eControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})