$(document).ready(function(){
    $("button").click(function(){
        //Extract values from input fields
        var first = $("#first").val();
        var last = $("#last").val();
        var desc = $("textarea").val();
        //Append dynamically created div to DOM
        $("#right").append("<div id = 'card'><p>" + first + " " + last+"</p><p id = 'back'> " + desc +"</p></div>"); //this is the dynamic content to be created (the cards).
        //Clear form fields by setting their value to empty
        $("#first").val("");
        $("#last").val("");
        $("#desc").val("");
        return false;
    });
    
    $(document).on('click', '#card', function(){
        //Toggle the #cards' childrens' display property
        $(this).children().toggle(); //toggles through the values entered in the form, displaying each value in the card box by themselves, cycling through them.
    });
});