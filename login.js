function validateLogin() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    
    if (phone.length === 10 && !isNaN(phone)) {
        alert("Login Successful!");
    } else {
        alert("Please enter a valid 10-digit phone number.");
    }
}
