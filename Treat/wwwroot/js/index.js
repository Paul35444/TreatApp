$(document).ready(function() {

    var itemForm = $("#itemForm")
    itemForm.hide();

    var button = $("#itemFormButton");
    button.on("click",
        function() {
            console.log("Submitting Form");
        });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $("#.popup-form");

    $loginToggle.on("click",
        function() {
            $popupForm.fadeToggle(1000);
        });

});