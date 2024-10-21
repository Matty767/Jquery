// Event listener for the 'colours' dropdown menu
$("#colours").on("change", function () {
    // STORES USER'S SELECTED VALUE FROM THE MENU WITH THE ID 'colours'
    let pnlcol = $(this).val();

    // PASSES 'pnlcol' VALUE TO THE BACKGROUND COLOUR OF THE ELEMENTS WITH ID 'image-holder' AND 'h2'
    $("#image-holder, h2").css({ backgroundColor: pnlcol }); // Fixed backgroundColor and removed unnecessary commas
}); // END FUNCTION

// Event listener for the 'images' dropdown menu
$("#images").on("change", function () {
    // Array of image filenames
    const imgArray = ["meadow.jpg", "whiteroom.jpg", "coffee.jpg", "ronaldo.png"];

    // Get the selected image value
    let selectedImage = $(this).val();

    // TEST TO SEE IF USER SELECTION IS EMPTY 
    if (selectedImage === "") {
        // SET 'src' ATTRIBUTE TO AN EMPTY STRING OR DEFAULT IMAGE
        $("#image-holder > img").attr("src", ""); 
        // Alternatively, SET TO DEFAULT IMAGE
        // $("#image-holder > img").attr("src", "images/default.jpg");
    } else {
        // IF SELECTION IS NOT EMPTY, LOOP THROUGH ARRAY & DISPLAY SELECTED IMAGE
        for (let i = 0; i < imgArray.length; i++) {
            if (selectedImage === imgArray[i]) { 
                $("#image-holder > img").attr("src", "images/" + selectedImage); // Correct comparison and string concatenation
            }
        }
    }
}); // END FUNCTION
