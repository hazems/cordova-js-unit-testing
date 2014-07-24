//Singleton Object
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
                  throw "You need to specify both user name and email!";
              }
                   
              if (! isValidEmail(user.email)) {
                  console.log("Email is invalid!");
                  throw "Email is invalid!";
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