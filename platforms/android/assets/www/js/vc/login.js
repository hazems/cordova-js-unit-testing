(function() {
    var userService = UserService.getInstance();
 
    $(document).on("pageinit", "#login", function(e) {
        e.preventDefault();
        
        $("#loginUser").on("tap", function(e) {
            e.preventDefault();
            
            try {
                userService.saveUser({
                    'name': $("#userName").val(),
                    'email': $("#userEmail").val(),
                });
                       
                $.mobile.changePage("#weather");
            } catch (exception) {
                $("#loginFormMessages").html(exception.message);
            }
        });
    });
 
 
})();