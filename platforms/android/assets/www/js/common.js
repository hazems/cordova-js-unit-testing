/**
 * This file contains common routines across all the pages.
 */

$.mobile.defaultPageTransition   = 'none';
$.mobile.defaultDialogTransition = 'none';
$.mobile.buttonMarkup.hoverDelay = 0;

(function() {
 
    //Handle back buttons decently for Android and Windows Phone 8 ...
    function onDeviceReady() {
        document.addEventListener("backbutton", function(e){
            
            //Always exit app on close as it has only one active page ...
            e.preventDefault();
            navigator.app.exitApp();
        }, false);
    }
 
    $(document).ready(function() {
        document.addEventListener("deviceready", onDeviceReady, false);
    });
 
 })();