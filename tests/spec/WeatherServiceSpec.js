describe("WeatherService", function() {
    const weatherSuccessResponse = {
        'cod': 200, 
        'main': {
            'temp': 10,
            'pressure': 123,
            'humidity': 22,
        },
        'weather': [{
            'description': 'weather description'
        }]
    };

    const weatherErrorResponse = {
        'cod': 500, 
        'message': 'Internal Server Error'
    };

    const callback = {
        success: function(result) {
        },
        error: function() {
        }
    };

    var weatherService;

    beforeEach(function() {
        weatherService = WeatherService.getInstance();
    });

    afterEach(function() {
        weatherService = null;
    });

    it("should be able to get weather information for a valid place", function() {
        // GIVEN
        spyOn(callback, 'success');
        spyOn(callback, 'error');
        spyOn($, "ajax").and.callFake(function(params) {
            params.success(weatherSuccessResponse);
        });

        // WHEN
        weatherService.getWeatherInfo("Paris, France", callback.success, callback.error);

        // THEN
        expect(callback.success).toHaveBeenCalledWith(jasmine.objectContaining({
            'temperature': (weatherSuccessResponse.main.temp - 273.15).toFixed(1) + " °C"
        }));
        expect(callback.error).not.toHaveBeenCalled();
    });

    it("should NOT be able to get weather information for an invalid place", function() {
        // GIVEN
        spyOn(callback, 'success');
        spyOn(callback, 'error');
        spyOn($, "ajax").and.callFake(function(params) {
            params.error(weatherErrorResponse);
        });

        // WHEN
        weatherService.getWeatherInfo("INVALID_PLACE", callback.success, callback.error);

        // THEN
        expect(callback.error).toHaveBeenCalledWith(weatherErrorResponse);
        expect(callback.success).not.toHaveBeenCalled();
    });    
});