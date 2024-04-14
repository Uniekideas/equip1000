// JS redirection code for signup form
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Redirect to the dashboard page
    window.location.href = "lms-dashboard.html";
  });

// JS redirection code for login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent the form from submitting normally
// Redirect to the dashboard page
window.location.href = "lms-dashboard.html";
});
