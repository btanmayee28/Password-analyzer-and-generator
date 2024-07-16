function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthBadge = document.getElementById("password-strength");
    var criteriaBadge = document.getElementById("password-criteria");

    // Check length
    if (password.length >= 8) {
        strengthBadge.className = "good";
        strengthBadge.textContent = "Strong";
    } else if (password.length >= 4) {
        strengthBadge.className = "moderate";
        strengthBadge.textContent = "Moderate";
    } else {
        strengthBadge.className = "weak";
        strengthBadge.textContent = "Weak";
    }

    // Check criteria
    var criteriaMet = password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/);
    criteriaBadge.textContent = criteriaMet ? "Meets criteria" : "Doesn't meet criteria";
    criteriaBadge.className = criteriaMet ? "good" : "weak";
}