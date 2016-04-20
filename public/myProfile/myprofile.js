var app = angular.module('myApp.myprofile',[]);
app.controller('myProfileController', [
'AuthService',
function(AuthService){
	var me = this;
	me.introduction = "";
	me.getIntroduction = function()
	{
		AuthService.getUserData().success(function(data){
			me.introduction = "I am "+ data.username;
		});
	}
	me.getIntroduction();
}]);