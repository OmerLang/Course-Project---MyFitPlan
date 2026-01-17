const logoutBTN = document.querySelector('.js-logout');


logoutBTN.addEventListener('click', async (e) => {
  e.preventDefault();
  const res = await fetch("/api/logout",{
    method: "POST",
  });
  const resData = await res.json();
  if (!resData.ok) {
    console.log("Failed logging out");
  }
  console.log("Logged out successfuly");
  window.location.href = "/";
})

