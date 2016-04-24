describe("WeatherService", function() {
    var weatherService;
    var originalTimeout;

    beforeEach(function() {
        weatherService = WeatherService.getInstance();
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 8000;
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

        weatherService.getWeatherInfo("Paris, France", successCallback, errorCallback);
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

        weatherService.getWeatherInfo("%%", successCallback, errorCallback);
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});
