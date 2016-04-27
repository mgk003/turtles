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
    formValidation();
	}
}]);

function formValidation() {
  var pass = document.reg.password.value;
  var confirmPass = document.reg.confirmPassword.value;
  if(confirmPass_validation(pass,confirmPass)) {
    alert("Sign up success!");
  }
}

function confirmPass_validation(password, confirmPassword) {
  if(password !== confirmPassword) {
    alert("Password and Confirm Password do not match!");
    console.log(`${password} !== ${confirmPassword}`);
    return false;
  }
  return true;
}