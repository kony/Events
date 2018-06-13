define(function(){
	var controller = require("userFlex0fc1bf48b31084bController");
	var controllerActions = ["Flex0fc1bf48b31084bControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})