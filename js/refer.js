// Get the modal
var modal = document.getElementById("referModal");

// Get the button that opens the modal
var btn = document.getElementById("referBnt");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function referFriend() {
    var referrerEmail = document.getElementById('referrerEmail').value;
    var referredEmail = document.getElementById('referredEmail').value;

    if (referrerEmail === '' || referredEmail === '') {
        document.getElementById("warning").innerHTML = "Please enter both your email and your friend\'s email.";
        // alert('Please enter both your email and your friend\'s email.');
        return;
    }

    if (referrerEmail === referredEmail) {
        document.getElementById("error").innerHTML = "You cannot refer yourself!";
        return;
    }

    // You can add AJAX request here to send referral data to server
    // For simplicity, just displaying result on the page
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Referral successful! Your friend ' + referredEmail + ' has been referred.';
    }
