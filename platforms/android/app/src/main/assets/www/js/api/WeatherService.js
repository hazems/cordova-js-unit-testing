//Singleton Object
var WeatherService = (function () {
  var instance;
  var BASE_ICON_URL = "http://openweathermap.org/img/w/";
  var APP_ID = "a227d5975e0701b5ef847bdc12654ee2";

  function createObject() {
      return {
          getWeatherInfo: function (locationText, successCallback, errorCallback) {
              if (!location || locationText.trim().length == 0) {
                  errorCallback("You have to specify a location!");
              }

              $.ajax({
                  url: "http://api.openweathermap.org/data/2.5/weather?q=" + escape(locationText) + "&APPID=" + APP_ID,
                  success: function(response) {
                      console.log(response);

                      // If response code is not 200 for this request then there is an error ...
                      if (response.cod != 200) {
                          errorCallback(response.message);
                          return;
                      }

                      successCallback({
                                     'temperature': (response.main.temp - 273.15).toFixed(1) + " °C",
                                     'pressure': response.main.pressure,
                                     'humidity': response.main.humidity + "%",
                                     'description': (response.weather[0]) ? (response.weather[0].description) : "NA",
                                     'icon': (response.weather[0]) ? BASE_ICON_URL+ (response.weather[0].icon) + ".png" : ""
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
