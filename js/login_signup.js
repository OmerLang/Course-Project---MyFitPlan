document.addEventListener('DOMContentLoaded', () => {
    
    // Console log to confirm connection
    console.log("Script Loaded Successfully"); 

    // Get the form elements
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    // --- Helper Functions (Error display) ---
    
    function showError(inputElement, message) {
        const parent = inputElement.parentElement;
        const errorMsg = parent.querySelector('.error-msg');
        if (errorMsg) {
            errorMsg.innerText = message;
            errorMsg.classList.add('visible');
            inputElement.classList.add('error');
        }
    }

    function clearError(inputElement) {
        const parent = inputElement.parentElement;
        const errorMsg = parent.querySelector('.error-msg');
        if (errorMsg) {
            errorMsg.classList.remove('visible');
            inputElement.classList.remove('error');
        }
    }

    // --- Validation Functions ---

    // 1. Name Validation (Letters and spaces only, no numbers/symbols)
    function validateName() {
        const nameInput = document.getElementById('fullName');
        if (!nameInput) return false;

        // Regex: Only letters (A-Z, a-z) and spaces
        const nameRegex = /^[A-Za-z\s]+$/;

        if (!nameRegex.test(nameInput.value)) {
            showError(nameInput, "Name can only contain letters (no numbers/symbols)");
            return false;
        }
        clearError(nameInput);
        return true;
    }

    // 2. Email Validation (Format check)
    function validateEmail() {
        const emailInput = document.getElementById('email');
        if(!emailInput) return false;

        // Regex for standard email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address");
            return false;
        }
        clearError(emailInput);
        return true;
    }

    // 3. Phone Validation
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        if(!phoneInput) return false;
        
        // Starts with 0, 10 digits
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            showError(phoneInput, "Must be 10 digits starting with 0");
            return false;
        }
        clearError(phoneInput);
        return true;
    }

    // 4. Password Validation
    function validatePassword() {
        const passwordInput = document.getElementById('password');
        if(!passwordInput) return false;
        
        // Min 6 chars, letters + numbers
        const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        if (!strongPasswordRegex.test(passwordInput.value)) {
            showError(passwordInput, "Weak: Need 6+ chars, letters & numbers");
            return false;
        }
        clearError(passwordInput);
        return true;
    }

    // 5. Confirm Password
    function validateConfirmPassword() {
        const passwordInput = document.getElementById('password');
        const confirmInput = document.getElementById('confirmPassword');
        if(!confirmInput) return false;
        
        if (confirmInput.value !== passwordInput.value) {
            showError(confirmInput, "Passwords do not match");
            return false;
        }
        clearError(confirmInput);
        return true;
    }

    // 6. Age Validation
    function validateAge() {
        const ageInput = document.getElementById('age');
        if(!ageInput) return false;

        if (ageInput.value < 14 || ageInput.value > 120) {
            showError(ageInput, "Age must be 14-120");
            return false;
        }
        clearError(ageInput);
        return true;
    }

    // 7. General Required Fields
    function validateRequired(inputElement) {
        if (!inputElement) return false;
        if (inputElement.value.trim() === "") {
            showError(inputElement, "Required field");
            return false;
        }
        clearError(inputElement);
        return true;
    }

    // --- Sign Up Page Logic ---
    if (signupForm) {
        
        // Listen for user input (Real-time validation)
        const nameInput = document.getElementById('fullName');
        if(nameInput) nameInput.addEventListener('blur', validateName);

        const emailInput = document.getElementById('email');
        if(emailInput) emailInput.addEventListener('blur', validateEmail);

        const phone = document.getElementById('phone');
        if(phone) phone.addEventListener('blur', validatePhone);
        
        const age = document.getElementById('age');
        if(age) age.addEventListener('blur', validateAge);

        const pass = document.getElementById('password');
        if(pass) pass.addEventListener('input', validatePassword);

        const confirmPass = document.getElementById('confirmPassword');
        if(confirmPass) confirmPass.addEventListener('input', validateConfirmPassword);
        
        // Check standard required fields
        ['country', 'fitnessGoal', 'gender'].forEach(id => {
            const el = document.getElementById(id);
            if(el) {
                el.addEventListener('blur', () => validateRequired(el));
            }
        });

        // Handle Submit
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Run all validations
            const isNameValid = validateName(); 
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isPassValid = validatePassword();
            const isConfirmValid = validateConfirmPassword();
            const isAgeValid = validateAge();
            
            let areRequiredValid = true;
            ['country', 'fitnessGoal', 'gender'].forEach(id => {
                const el = document.getElementById(id);
                if (el && !validateRequired(el)) areRequiredValid = false;
            });

            // Stop if any error exists
            if (!isNameValid || !isEmailValid || !isPhoneValid || !isPassValid || !isConfirmValid || !isAgeValid || !areRequiredValid) {
                return;
            }

            // Check if email exists in database
            const email = document.getElementById('email').value;
            
            if (localStorage.getItem(email)) {
                showError(document.getElementById('email'), "Email already exists");
                alert("Error: This email is already registered.");
                return;
            }

            // Create user object
            const user = {
                name: document.getElementById('fullName').value,
                email: email,
                phone: document.getElementById('phone').value,
                age: document.getElementById('age').value,
                gender: document.getElementById('gender').value,
                country: document.getElementById('country').value,
                goal: document.getElementById('fitnessGoal').value,
                password: document.getElementById('password').value
            };

            // Save to LocalStorage
            localStorage.setItem(email, JSON.stringify(user));
            alert("Registration successful! You can now log in.");
            window.location.href = "./login.html";
        });
    }

    // --- Login Page Logic ---
    if (loginForm) {
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            // Get user from storage
            const storedUser = localStorage.getItem(email);

            if (storedUser) {
                const userData = JSON.parse(storedUser);
                if (userData.password === password) {
                    alert(`Welcome back, ${userData.name}!`);
                    window.location.href = "./details.html";
                    // Redirect logic here if needed
                } else {
                    alert("Error: Incorrect password.");
                }
            } else {
                alert("Error: User not found. Please sign up.");
            }
        });
    }

    // --- Forgot Password Logic ---
    if (forgotPasswordLink) {
        
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();

            const email = prompt("Enter email to reset password:");
            if (!email) return;

            const storedUser = localStorage.getItem(email);
            if (storedUser) {
                // Generate code
                const resetCode = Math.floor(1000 + Math.random() * 9000);
                alert(`Reset code: ${resetCode}`);
                const userCode = prompt("Enter code:");

                if (userCode == resetCode) {
                    let newPassword = prompt("Enter new password:");
                    
                    // FIXED: This line was incomplete in your code
                    const strongRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
                    
                    if (newPassword && strongRegex.test(newPassword)) {
                        const userData = JSON.parse(storedUser);
                        userData.password = newPassword;
                        localStorage.setItem(email, JSON.stringify(userData)); // Update password
                        alert("Password changed successfully!");
                    } else {
                        alert("Invalid password format (Must be 6+ chars with letters & numbers).");
                    }
                } else {
                    alert("Invalid code.");
                }
            } else {
                alert("Email not found.");
            }
        });
    }
});