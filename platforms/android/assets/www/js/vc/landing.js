(function() {
    var userService = UserService.getInstance();
 
    $(document).on("pageinit", "#landing", function(e) {
        e.preventDefault();
        
        function onDeviceReady () {
            console.log("Apache Cordova is loaded");
                   
            var home = '#login';
        
            if (userService.getUser()) {
                home = '#weather';
            }
        
            $.mobile.changePage(home);
        }
                   
        document.addEventListener("deviceready", onDeviceReady, false);
    });
})();