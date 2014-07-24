(function() {
    
    $(document).on("pageinit", "#login", function(e) {
        e.preventDefault();
        
        $("#loginUser").on("tap", function(e) {
            e.preventDefault();
            
            if (! $("#loginForm").valid()) {
                return;
            }
            
            // Here save user information ...
                       
            $.mobile.changePage("#weather");
        });
    });
 
    $(document).on("pageshow", "#login", function(e) {
        e.preventDefault();
                
        $("#loginForm").validate({
            errorLabelContainer: "#loginFormMessages",
            wrapper: "li",
            rules: {
                userName: "required",
                userEmail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                userName: "Please specify user name",
                userEmail: {
                    required: "Please specify email",
                    email: "Please enter valid email"
                }
            }
        });
    });
 
})();