document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve email and password values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Here, you can add validation logic and authentication
    
    // For demonstration purposes, simply log the email and password
    console.log("Email:", email);
    console.log("Password:", password);
    
    // Redirect to dashboard or desired page after successful login
    window.location.href = "learnezee.html";
  });
  