var app = angular.module('myApp.signup', []);

app.controller('SignupController', [
'SignupService',
function(SignupService){
	var me = this;
	me.onSubmitSignup = function()
	{
		SignupService.signup({
			username: me.id,
			password: me.password
		});
		console.log(me.id);
		console.log(me.password)
	}
}]);