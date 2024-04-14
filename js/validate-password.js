function validateloginPassword() {
    var password = document.getElementById("loginPassword").value;
    var message = document.getElementById("loginMessage");
    // var password = document.getElementById("regPassword").value;
    // var message = document.getElementById("signupMessage");
  
    // Regular expressions for different criteria
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    // Checking each criterion
    var isLengthValid = lengthRegex.test(password);
    var hasUppercase = uppercaseRegex.test(password);
    var hasLowercase = lowercaseRegex.test(password);
    var hasDigit = digitRegex.test(password);
    var hasSpecialChar = specialCharRegex.test(password);
  
    if (!isLengthValid) {
      message.innerHTML = "Password must be at least 8 characters long.";
    } else if (!hasUppercase) {
      message.innerHTML = "Password must contain at least one uppercase letter.";
    } else if (!hasLowercase) {
      message.innerHTML = "Password must contain at least one lowercase letter.";
    } else if (!hasDigit) {
      message.innerHTML = "Password must contain at least one digit.";
    } else if (!hasSpecialChar) {
      message.innerHTML = "Password must contain at least one special character (!@#$%^&*(),.?\":{}|<>).";
    } else {
      message.innerHTML = "Password is strong!";
    }
  }


  function validatesignupPassword() {
    // var password = document.getElementById("loginPassword").value;
    // var message = document.getElementById("loginMessage");
    var password = document.getElementById("regPassword").value;
    var message = document.getElementById("signupMessage");
  
    // Regular expressions for different criteria
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    // Checking each criterion
    var isLengthValid = lengthRegex.test(password);
    var hasUppercase = uppercaseRegex.test(password);
    var hasLowercase = lowercaseRegex.test(password);
    var hasDigit = digitRegex.test(password);
    var hasSpecialChar = specialCharRegex.test(password);
  
    if (!isLengthValid) {
      message.innerHTML = "Password must be at least 8 characters long.";
    } else if (!hasUppercase) {
      message.innerHTML = "Password must contain at least one uppercase letter.";
    } else if (!hasLowercase) {
      message.innerHTML = "Password must contain at least one lowercase letter.";
    } else if (!hasDigit) {
      message.innerHTML = "Password must contain at least one digit.";
    } else if (!hasSpecialChar) {
      message.innerHTML = "Password must contain at least one special character (!@#$%^&*(),.?\":{}|<>).";
    } else {
      message.innerHTML = "Password is strong!";
    }
  }