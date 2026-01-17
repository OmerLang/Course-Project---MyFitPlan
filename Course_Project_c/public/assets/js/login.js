const loginForm = document.getElementById("loginForm");


window.addEventListener('DOMContentLoaded', async () => {
  const isLoggedIn = await fetch("/api/me", {
    method: "GET"
  })
  const isLoggedInData = await isLoggedIn.json();
  if (isLoggedInData.loggedIn){
    return window.location.replace("/");
  }
  return;
});



function validEmail(email) {
  if (!email) {
    alert("Email required");
    return false;
  }
  return true;
}

function validPassword(password) {
  if (!password) {
    alert("Password required");
    return false;
  }
  return true;
}

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginEmail = document.getElementById("loginEmail").value.trim();
  const loginPassword = document.getElementById("loginPassword").value;
  const emailValid = validEmail(loginEmail);
  const passwordValid = validPassword(loginPassword);

  if (!emailValid || !passwordValid) {
    return;
  }

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    });
    const resData = await res.json();
    if (!res.ok) {
      alert(resData.message);
      return;
    }
    window.location.href=`${resData.next}`;
  } catch (err) {
    alert("Server error, Please try again");
    return;
  }
});
