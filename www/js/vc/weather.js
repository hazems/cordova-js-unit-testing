(function() {
    var weatherService = WeatherService.getInstance();
    var userService = UserService.getInstance();
 
    $(document).on("pageinit", "#weather", function(e) {
        e.preventDefault();
        
        $("#getWeatherForecast").on("tap", function(e) {
            e.preventDefault();
            
            $("#location").blur(); //Hide keyboard
            
            $.mobile.loading('show');
            
            var successCallback = function(result) {
                $.mobile.loading('hide');
                $("#weatherResult").removeClass("error");
                
                var result = "<img class='center' src='" + result.icon + "'><br/>"
                           + "Temperature: " + result.temperature + "<br/>"
                           + "Humidity: " + result.humidity + "<br/>"
                           + "Description: " + result.description + "<br/>";
                
                $("#weatherResult").html(result);
            };
                                    
            var errorCallback = function(errorMessage) {
                $.mobile.loading('hide');
                $("#weatherResult").addClass("error");
                $("#weatherResult").html(errorMessage);
            };
                                    
            weatherService.getWeatherForecast($("#location").val(), successCallback, errorCallback);
        });
    });
 
    $(document).on("pageshow", "#weather", function(e) {
        $("#user").html(userService.getUser().name || "");
    });
 
})();