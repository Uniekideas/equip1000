// JS redirection code for login form
document.getElementById("confirmRedirect").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Redirect to the next page
    window.location.href = "dashboard.html";
    });