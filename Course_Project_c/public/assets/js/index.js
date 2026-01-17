const loginBtn = document.querySelector(".js-login");
const logoutBtn = document.querySelector(".js-logout");
const signupBtn = document.querySelector(".js-signup");
const planBtn = document.querySelector(".js-plan");
const generatePlanBtn = document.querySelector(".js-generate-plan");
const startnowBtn = document.querySelector(".js-startnow-button");


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
    startnowBtn.href = "/pages/login.html";
    return;
  }
  if (!hasPlan) {
    console.log("here");
    [loginBtn, signupBtn, planBtn].forEach((button) => {
      button.classList.add("hideButton");
    });
      [logoutBtn, generatePlanBtn].forEach((button) => {
      button.classList.add("showButton");
    });
    startnowBtn.textContent = "Create My Plan"
    startnowBtn.href = "/pages/details.html";
    return;
  }
  [loginBtn, signupBtn].forEach((button) => {
    button.classList.add("hideButton");
  });
  [logoutBtn, planBtn, generatePlanBtn].forEach((button) => {
    button.classList.add("showButton");
  });
  startnowBtn.textContent = "My Plan"
  startnowBtn.href = "/pages/workout_plan.html";
  return;
}

document.addEventListener("DOMContentLoaded", async () => {
  const user = await fetch("/api/me");
  const userData = await user.json();
  const { loggedIn, hasPlan } = userData;
  return buttonsState(loggedIn, hasPlan);
});
