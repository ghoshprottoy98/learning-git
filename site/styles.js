// What is this funny syntax? the "$" is a short way of saying "jQuery", you're about to do something.  It's your selector tool. You select an HTML element inside of it. then you can perform functions. 

//Below, this is aying. "When you click #myButton, make the button description text my new description.

$("#myButton").click(function() {
  
    //here, declare a variable that stores your new description.
    var newDescription = "Button clicked! Oh boy!";
    
    //".html" is a premade jQuery function that changes the html of the given element.  
    $("#buttonDescription").html(newDescription);
  });