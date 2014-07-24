//Singleton Object
var WeatherService = (function () {
  var instance;
  var BASE_ICON_URL = "http://openweathermap.org/img/w/";
 
  function createObject() {
      return {
          getWeatherForecast: function (locationText, successCallback, errorCallback) {
              if (!location || locationText.trim().length == 0) {
                  errorCallback("You have to specify a location!"); 
              }
              
              $.ajax({
                 url: "http://api.openweathermap.org/data/2.5/weather",
                  data: {
                      q: locationText
                  },
                  success: function(response) {
                     console.log(response);
                     
                     // If response code is not 200 for this request then there is an error ...
                     if (response.cod != 200) {
                        errorCallback(response.message);
                        return;
                     }
                     
                     successCallback({
                                     'temperature': (response.main.temp - 273.15) + " °C",
                                     'pressure': response.main.pressure,
                                     'humidity': response.main.humidity + "%",
                                     'icon': (response.weather[0]) ? BASE_ICON_URL+ (response.weather[0].icon) : ""
                                     });
                  }
              });
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