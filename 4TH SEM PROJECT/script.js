function validateForm() {
         var username = document.getElementById("username").value;
         var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var confirmPassword = document.getElementById("confirm-password").value;

    if (username === "") {
        alert("Username must be filled out");
        return false;
            }
            
    if (email === "") {
        alert("Email must be filled out");
        return false;
            }

    if (password === "") {
        alert("Password must be filled out");
        return false;
            }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
            }

         // If validation passes, redirect to the Thank You page
    window.location.href = "thankyou.html"; // Make sure this path is correct
    return false; // Prevent the form from submitting traditionally
}

