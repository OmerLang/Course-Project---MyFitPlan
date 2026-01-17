const form = document.getElementById("resetPasswordForm");


window.addEventListener("DOMContentLoaded", async () => {
  try {
    const isLoggedIn = await fetch("/api/me", {
      method: "GET"
    })
    if (!isLoggedIn.ok){
      alert("Server error, please try again");
      return;
    }
    const isLoggedInData = await isLoggedIn.json();
    if (isLoggedInData.loggedIn){
      window.location.href = "/";
    }
  } catch(err) {
    alert("Server error, please try again");
  }
})

function validateFields(email, phone, newPassword, confirmNewPassword) {
  if (!email || !phone || !newPassword || !confirmNewPassword) {
    return { message: "Missing fields"};
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { message: "Please enter a valid email address" };
  }
  const phoneRegex = /^0\d{9}$/;
  if (!phoneRegex.test(phone)) {
    return { message: "Phone number Must be 10 digits starting with 0" };
  }
  if (newPassword !== confirmNewPassword){
    return { message: "Passwords don't match" };
  }
  const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
  if (!strongPasswordRegex.test(newPassword)) {
    return { message: "Weak password: Need 6+ chars, letters & numbers" };
  }
  return;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const phone = formData.get("phone");
  const newpassword = formData.get("newpassword");
  const confirmNewPassword = formData.get("confirmpassword");
  const valid = validateFields(email, phone, newpassword, confirmNewPassword);
  if (valid){
    return alert(valid.message);
  }
  try {
    const changed = await fetch("/api/reset-password",{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email: email, phone: phone, newpassword: newpassword })
    }); 
    const changedData = await changed.json();
    if (!changed.ok) {
      return alert(changedData.message);
    }
    alert(changedData.message);
    window.location.href = "/pages/login.html";
  } catch(err) {
    alert("Server error, please try again");
  }
})