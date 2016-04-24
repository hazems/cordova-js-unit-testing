var UserValidationException = function(code, message) {
    this.code = code;
    this.message = message;
}

var UserService = (function () {
  var instance;
  var USER_KEY = "WEATHER_USER";
                   
  function isValidEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
      return regex.test(email);
  }
 
  function createObject() {
      return {
          saveUser: function (user) {
              if (!user.name || !user.email || user.name.trim().length == 0 || user.email.trim().length == 0) {
                  console.log("You need to specify both user name and email!");
                   
                  throw new UserValidationException("EMPTY_FIELDS", "You need to specify both user name and email!");
              }
                   
              if (user.name.trim().length > 6) {
                    console.log("User name must not exceed 6 characters!");
                   
                    throw new UserValidationException("MAX_LENGTH_EXCEEDED", "User name must not exceed 6 characters!");
              }
                   
              if (! isValidEmail(user.email)) {
                  console.log("Email is invalid!");
                  
                  throw new UserValidationException("INVALID_FORMAT", "Email is invalid!");
              }
              
              window.localStorage.setItem(USER_KEY, JSON.stringify(user));
          },
          getUser:function() {
             var user = window.localStorage.getItem(USER_KEY);
            
             if (user) {
                 user = JSON.parse(user);
             }
            
             return user;
          }
      };
  };
 
  return {
    getInstance: function () {
      if (!instance) {
          instance = createObject();
      }
 
      return instance;
    }
  }; 
})();