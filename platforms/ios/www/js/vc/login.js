(function() {
    
    $(document).on("pageinit", "#login", function(e) {
        e.preventDefault();
        
        $("#loginUser").on("tap", function(e) {
            e.preventDefault();
            
            // Here save user information ...
                       
            $.mobile.changePage("#weather");
        });
    });
})();