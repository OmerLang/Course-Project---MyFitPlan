const detailsForm = document.getElementById("detailsForm");


window.addEventListener('DOMContentLoaded', async () => {
  const isLoggedIn = await fetch("/api/me", {
    method: "GET"
  })
  const isLoggedInData = await isLoggedIn.json();
  if (!isLoggedInData.loggedIn){
    return window.location.replace("/");
  }
  return;
});



detailsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(detailsForm);

  const data = {
    height: formData.get("height"),
    weight: formData.get("weight"),
    goal: formData.get("goal"),
    experience: formData.get("experience"),
  };
  try {
    const res = await fetch("/api/submitDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) {
      alert(result.message);
      return;
    }
    console.log("server result:", result);
    console.log("redirectTo:", result.redirectTo);
    window.location.href = result.redirectTo;
  } catch (err) {
    return alert("Server error, Please try again");
  }
});
