var app = angular.module('myApp.auth');

app.controller('LoginController', [
'AuthService',
function(AuthService){
	var me = this;
	me.onSubmitLogin = function()
	{
		AuthService.login({
			username: me.id,
			password: me.password
		});
	}
	var init = function()
	{
		AuthService.getUserData();
	}
	init();
}]);