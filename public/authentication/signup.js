var app = angular.module('myApp.auth');

app.controller('SignupController', [
'AuthService',
function(AuthService){
	var me = this;
	me.onSubmitSignup = function()
	{
		AuthService.signup({
			username: me.id,
			password: me.password
		});
	}
}]);