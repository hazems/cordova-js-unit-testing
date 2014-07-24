(function() {
    
    $(document).on("pageinit", "#weather", function(e) {
        e.preventDefault();
        
        $("#getWeatherForecast").on("tap", function(e) {
            e.preventDefault();
            
            if (! $("#weatherForm").valid()) {
                return;
            }
            
            // Call APIs here ...
        });
    });
 
    $(document).on("pageshow", "#weather", function(e) {
        e.preventDefault();
                
        $("#weatherForm").validate({
            errorLabelContainer: "#weatherFormMessages",
            wrapper: "li",
            rules: {
                location: "required"
            },
            messages: {
                location: "Please specify a location"
            }
        });
    });
 
})();