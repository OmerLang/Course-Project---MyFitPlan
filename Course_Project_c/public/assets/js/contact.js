const loginBtn = document.querySelector(".js-login");
const logoutBtn = document.querySelector(".js-logout");
const signupBtn = document.querySelector(".js-signup");
const planBtn = document.querySelector(".js-plan");
const generatePlanBtn = document.querySelector(".js-generate-plan");


function buttonsState(loggedIn, hasPlan) {
  [loginBtn, logoutBtn, signupBtn, planBtn, generatePlanBtn].forEach((button) => {
      button.classList.remove("hideButton", "showButton");
    });  
  if (!loggedIn) {
    [logoutBtn, planBtn, generatePlanBtn].forEach((button) => {
      button.classList.add("hideButton");
    });

    [loginBtn, signupBtn].forEach((button) => {
      button.classList.add("showButton");
    });
    return;
  }
  if (!hasPlan) {
    [loginBtn, signupBtn, planBtn].forEach((button) => {
      button.classList.add("hideButton");
    });
      [logoutBtn, generatePlanBtn].forEach((button) => {
      button.classList.add("showButton");
    });
    return;
  }
  [loginBtn, signupBtn].forEach((button) => {
    button.classList.add("hideButton");
  });
  [logoutBtn, planBtn, generatePlanBtn].forEach((button) => {
    button.classList.add("showButton");
  });
  return;
}

document.addEventListener("DOMContentLoaded", async () => {
  const user = await fetch("/api/me", {
    method: "GET",
  });
  const userData = await user.json();
  const { loggedIn, hasPlan } = userData;
  console.log(loggedIn, hasPlan);
  return buttonsState(loggedIn, hasPlan);
});
