var app = angular.module('myApp.signup');
app.factory('SignupService',['$http',function($http){
	var signupObj = {};
	signupObj.signup = function(account){
		return $http.post("/register",account).success(function(data){
			console.log(data);
		});
	};
	return signupObj;
}]);