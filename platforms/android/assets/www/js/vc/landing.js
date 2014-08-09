(function() {
    var userService = UserService.getInstance();
 
    $(document).on("pageinit", "#landing", function(e) {
        e.preventDefault();
        
        var home = '#login';
        
        if (userService.getUser()) {
            home = '#weather';
        }
        
        $.mobile.changePage(home);
    });
})();