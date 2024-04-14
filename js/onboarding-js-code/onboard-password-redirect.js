// JS redirection code for login form
document.getElementById("equipregForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Redirect to the next page
    window.location.href = "finish-register.html";
    });