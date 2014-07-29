describe("WeatherService", function() {
    var weatherService;
    var originalTimeout;
         
    beforeEach(function() {
        weatherService = WeatherService.getInstance();
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    });

    it("should be able to get weather information for a valid place", function(done) {
        var successCallback = function(result) {
            expect(result.temperature).not.toBeNull();
            done();
        };
     
        var errorCallback = function() {
            expect(true).toBe(false); // force failing test manually
            done();
        };
     
        weatherService.getWeatherForecast("Paris, France", successCallback, errorCallback);
    });
         
    it("should NOT be able to get weather information for an invalid place", function(done) {
        var successCallback = function(result) {
            expect(true).toBe(false); // force failing test manually
            done();
        };
            
        var errorCallback = function(message) {
            expect(message).not.toBeNull();
            done();
        };
            
        weatherService.getWeatherForecast("Invalid Place", successCallback, errorCallback);
    });
         
    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});