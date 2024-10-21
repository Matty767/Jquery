// Toggle the drop container on clicking the login button
$("#login").on("click", () => {
    $("#drop-container").slideToggle("slow");
});

// FUNCTIONS START HERE
let displayVals = () => {
    // COLLECT THE USERNAME & PASSWORD

    let inputValueUsername = $("#username").val(); // Correct selector for username
    let inputValuePwd = $("#pwd").val(); // Corrected selector for password, should target '#pwd'
    
    // CREATE AN HTML BLOCK - REMEMBER TO USE BACKTICKS
    let htmlBlock = `
    <section>
        <div id="card">
            <h2><b>You are logged in as:</b></h2>
            <span>${inputValueUsername}</span>
        </div>
    </section>
    `;
    
    // PASS THE BLOCK INTO THE HTML METHOD
    $("#login-msg-html").html(htmlBlock); // Ensure htmlBlock is passed correctly
    
    // CREATE A TEXT BLOCK - REMEMBER TO USE BACKTICKS
    let textMessage = `Your password is: ${inputValuePwd}`; // Corrected variable name and backticks
    
    // PASS THE TEXT BLOCK INTO THE TEXT METHOD
    $("#login-msg-text").text(textMessage); // Corrected selector (it should be '#login-msg-text')

    // SLIDE THE LOGIN CONTAINER OUT OF VIEW
    $("#drop-container").slideUp("fast");
};

// ATTACH ON CLICK AND CALL THE FUNCTION displayVals
$("#btn").on("click", displayVals); // Correctly attach the click event and call the function
