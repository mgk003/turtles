angular.module('myApp.auth',[]).factory('AuthService',['$http',function($http){
	var authObj = {};
	authObj.login = function(account){
		return $http.post("/login",account).success(function(data){
			console.log(data);
		});
	};
	authObj.getUserData = function(){
		return $http.get("/userdata").success(function(data){
			console.log(data);
			return data;
		}).error(function(data){
			console.log(data);
		});
	}
	authObj.getUserStatus = function() {
		return user;
	};
	authObj.signup = function(account){
		return $http.post("/register",account).success(function(data){
			console.log(data);
		});
	};

	authObj.logout = function() {
  		// create a new instance of deferred
    	var deferred = $q.defer();

		// send a get request to the server
		$http.get('/user/logout')
		  // handle success
		  .success(function (data) {
		    user = false;
		    deferred.resolve();
		  })
		  // handle error
		  .error(function (data) {
		    user = false;
		    deferred.reject();
		  });

		// return promise object
		return deferred.promise;
    };


	return authObj;
}]);