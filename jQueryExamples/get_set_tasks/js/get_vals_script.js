$(document).ready(function() {
    // SET VALUES 

    // When the button with ID #btn1 is clicked, it changes the text inside the <p> element 
    // with the class "text" to the string "Set Text Value Button Inserted This Text Here".
    $("#btn1").on("click", function() {
        $(".text").text("Set Text Value Button Inserted This Text Here");
    });

    // When the button with ID #btn2 is clicked, it changes the HTML inside the <p> element 
    // with the class "html" to the string "Set Html Button Inserted This HTML Here". 
    $("#btn2").on("click", function() {
        $(".html").html("<strong>Set Html Button Inserted This HTML Here</strong>");
    });

    // When the button with ID #btn3 is clicked, it sets the value of the input field 
    // with the ID "username" to the string "Set Input Button Inserted This Value Here".
    $("#btn3").on("click", function() {
        $("#username").val("Set Input Button Inserted This Value Here");
    });

    // Reload page when 'Reload Page' button is clicked
    $("#reloadPage").on("click", function() {
        location.reload(); // Reloads the page
    });

    // GET VALUES

    // When the button with ID #btn4 is clicked, it gets the text inside the <p> element 
    // with the class "text" and places it inside the <p> element with the class "output-text".
    $("#btn4").on("click", function() {
        $("p.output-text").text($("p.text").text());
    });

    // When the button with ID #btn5 is clicked, it gets the HTML content inside the <p> element 
    // with the class "html" and places it inside the <p> element with the class "output-html".
    $("#btn5").on("click", function() {
        $("p.output-html").html($("p.html").html());
    });

    // When the button with ID #btn6 is clicked, it gets the value of the input field 
    // with the ID "username" and sets it as the value for the input field with the ID "username-output".
    $("#btn6").on("click", function() {
        $("#username-output").val($("#username").val());
    });
});
