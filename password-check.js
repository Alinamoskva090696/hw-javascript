function checkPasswordStrength(password) {
    if (password.length < 8) {
      return "Weak";
    }
  
    const containsDigit = /\d/.test(password);
    if (!containsDigit) {
      return "Weak";
    }
  
    const containsUpperCase = /[A-Z]/.test(password);
    const containsLowerCase = /[a-z]/.test(password);
  
    if (!(containsUpperCase && containsLowerCase)) {
      return "Weak";
    }
  
    return "Strong";
  }
  
  console.log(checkPasswordStrength("password"));
  console.log(checkPasswordStrength("Password123"));
  console.log(checkPasswordStrength("12345678"));
  console.log(checkPasswordStrength("P@ssw0rd"));