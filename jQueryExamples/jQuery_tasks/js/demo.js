$(document).ready(function () {
    // Toggle the rainbow image's visibility using a slide effect
    $(".toggle-btn").on("click", function () {
        $(".header-topleft img").slideToggle();  // Toggles the rainbow image's visibility by sliding it up/down
    });

    // Toggle the butterfly image's visibility using a fade effect
    $(".toggle-btn-fly").on("click", function () {
        $(".header-topright img").fadeToggle();  // Toggles the butterfly image's visibility by fading it in/out
    });

    // Toggle the background colour and font styles of the middle section back and forth
    let isStyled = false;  // Track whether the styles are applied or not

    $(".change-styles-btn").on("click", function () {
        if (isStyled) {
            // Revert to original styles
            $(".header-middle").css({
                "background-color": "#54a5ea",  // Original background colour
                "color": "#000000",  // Original text colour
                "font-family": "Tahoma, sans-serif",  // Original font
                "font-size": "1rem"  // Original font size
            });
        } else {
            // Apply new styles
            $(".header-middle").css({
                "background-color": "#54a8e8",  // New background colour
                "color": "#ffffff",  // New text colour
                "font-family": "'Poppins', sans-serif",  // New font
                "font-size": "1.5rem"  // New font size
            });
        }
        isStyled = !isStyled;  // Toggle the style state
    });

    // Slide up (hide) the spooky house image
    $(".btnslideout").on("click", function () {
        $(".maincontent-midleft img").slideUp();  // Hides the spooky house image
    });

    // Slide down (show) the spooky house image
    $(".btnslidein").on("click", function () {
        $(".maincontent-midleft img").slideDown();  // Shows the spooky house image
    });

    // Hide the bulb image
    $(".btnon-bulb").on("click", function () {
        $(".maincontent-middle img").hide();  // Hides the bulb image
    });

    // Show the bulb image
    $(".btnoff-bulb").on("click", function () {
        $(".maincontent-middle img").show();  // Shows the bulb image
    });

    // Fade out the ghost image over 1 second
    $(".btnfadeoutghost").on("click", function () {
        $(".maincontent-midright img").fadeOut(1000);  // Fades out the ghost image in 1 second
    });

    // Fade in the ghost image over 1 second
    $(".btnfadeinghost").on("click", function () {
        $(".maincontent-midright img").fadeIn(1000);  // Fades in the ghost image in 1 second
    });

    // Toggle visibility of the entire header when the button is clicked
    $(".toggle-header-btn").on("click", function () {
        $("#header-container").slideToggle();  // Toggles visibility of the entire header
    });

    // Change the description of the ghost when the button is clicked
    $(".change-text-btn").on("click", function () {
        $(".ghost-description").text("The ghost has disappeared!");  // Changes the text content
    });
});
