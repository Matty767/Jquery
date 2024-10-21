$(document).ready(function () {
    // Change CSS when the first button is clicked
    $(".btn1").on("click", function () {
      $("#demo").css({
        "background-color": "#905590",  // Set background color to purple
        "font-size": "3rem",            // Set font size to 3rem
        "color": "#ffffff",             // Change font color to white
        "font-family": "'Poppins', sans-serif", // Change font family
        "padding": "20px",              // Add padding
        "border-radius": "10px"         // Add border radius to round corners
      }); //END CSS
    }); //END BUTTON CLICK
      //CHANGE GOES HERE
  
    // Reset CSS to the original state when the second button is clicked
    $(".btn2").on("click", function () {
      $("#demo").css({
        "background-color": "rgb77, 85, 193", // Reset background color to blue
        "font-size": "1rem",               // Reset font size to 1rem
        "color": "black",                  // Reset font color to black
        "font-family": "inherit",          // Reset font family to the default
        "padding": "0",                    // Reset padding to 0
        "border-radius": "0"               // Remove border radius (reset to default)
      }); //END CSS
    }); //END BUTTON CLICK
    //CHANGE GOES HERE
  }); // END READY
  