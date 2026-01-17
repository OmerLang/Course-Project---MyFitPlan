const workoutPlanDiv = document.querySelector(".workout-plan-inner");



function renderPlan(name, plan) {
  const buttonsHTML = generateButtons(name, plan); //put inside the folder-titles div
  const planInfoHTML = generatePlanInfo(plan); //put inside the plan-info div
  const titlesHTML = insertIntoTitleDiv(buttonsHTML);
  const finalPlanInfoHTML = insertIntoInfoDiv(planInfoHTML);
  const daysHTML = generateDays(plan);
  const HTML = titlesHTML+finalPlanInfoHTML+daysHTML;
  workoutPlanDiv.innerHTML=HTML;
  hideDays();
  hideGifs();
}


function generateButtons (name, plan) {
  let totalButtonsHTML=
  `<div class ="title user-title js-user-title">
    <button class="button user-title-button">${name}'s Plan</button>         
  </div>`;
  plan.schedule.forEach((object, index, array) => {
    const isLast = index === array.length - 1;
    const day = object.day;
    const dayclass = day.toLowerCase().replace(/\s+/g, "-");
    if (isLast){
      totalButtonsHTML+= 
      `<div class="title-last day-title js-${dayclass}-title" data-day="${dayclass}">
      <button class="button day-button" data-day="${dayclass}">${day}</button>
      </div>`;
      return;
    }
    totalButtonsHTML+=
    `<div class="title day-title js-${dayclass}-title" data-day="${dayclass}">
      <button class="button day-button" data-day="${dayclass}">${day}</button>
    </div>`;
  })
  return totalButtonsHTML;
}

function generatePlanInfo (plan) {
  const totalPlanInfoHTML = 
  `<h2 class="workout-title js-workout-title display">${plan.title}</h2>
  <h2 class="workout-summary js-workout-summary">${plan.summary}</h2>`
  return totalPlanInfoHTML;
}

function generateDays(plan) {
  let dayHTML = ``;
  plan.schedule.forEach((object) => {
    const day = object.day;
    const dayclass = day.toLowerCase().replace(/\s+/g, "-");
    
    dayHTML += `
      <div class ="inner-content day js-day display ${dayclass}">
        <div class="day-workout-info">
          <div class="focus"><p>Focus: ${object.focus}</p></div>
          <div class="warmup"><p>${object.warmup}</p></div>
        </div>`;

    object.workout.forEach((workout) => {
      //only create the button and img-div if workout.gif is available
      const gifSection = workout.gif 
        ? `<button class="imgButton" id="imgButton" data-gif="${workout.gif}">Click to open Demo</button>
           <div class="img-div">
             <img src="${workout.gif}" alt="${workout.exercise} demonstration" />
           </div>` 
        : ""; // If no gif it remains an empty string

      dayHTML += `
          <div class="workout js-workout">
            <div class="exercise js-exercise">
              <p class="exercise-name js-exercise-name">${workout.exercise}</p>
              <p class="sets js-sets">${workout.sets} Sets</p>
              <p class="reps js-reps">${workout.reps} reps</p> 
              <p class="rest js-rest">Rest ${workout.restSec} seconds between reps</p>
              ${gifSection} 
            </div>
            <div class="border"></div>
          </div>`;
    });

    dayHTML += `
        <div class ="day-workout-end">
          <p class="notes js-notes">Notes: ${object.notes[0]}</p>
        </div>
      </div>`;
  });
  return dayHTML;
}

function insertIntoTitleDiv (buttonsHTML){
  const finalTitlesHTML = 
  `<div class="folder-titles js-folder-titles">
  ${buttonsHTML}
  </div>`
  return finalTitlesHTML;
}

function insertIntoInfoDiv (planInfoHTML){
  const finalPlanInfoHTML = 
  `<div class="inner-content plan-info js-plan-info">
  ${planInfoHTML}
  </div>`
  return finalPlanInfoHTML;
}

function hideGifs() {
  const gifs = document.querySelectorAll(".img-div");
  gifs.forEach((gif) => {
    gif.classList.add("hide-gif");
  })
}

function hideDays(){
  const planInfo = document.querySelector(".plan-info");
  const days = document.querySelectorAll(".js-day");
  document.querySelectorAll(".day-title").forEach((t) => {
    t.classList.remove("change-background");
  });
  days.forEach((day) => {
    day.classList.remove("show-inner-content");
    day.classList.add("hide-inner-content");
  })
  document.querySelector(".user-title").classList.add("change-background");
  planInfo.classList.remove("hide-inner-content");
  planInfo.classList.add("show-inner-content");
}

function showDay(day, dayData) {
  const planInfo = document.querySelector(".plan-info");
  const days = document.querySelectorAll(".js-day");
  document.querySelector(".user-title").classList.remove("change-background");
  planInfo.classList.remove("show-inner-content");
  planInfo.classList.add("hide-inner-content");
  document.querySelectorAll(".day-title").forEach((t) => {
    t.classList.remove("change-background");
  });
  days.forEach((day) => {
    day.classList.remove("show-inner-content");  
    day.classList.add("hide-inner-content");  
  })
  document.querySelector(`.js-${dayData}-title`).classList.add("change-background");
  day.classList.toggle("hide-inner-content");
  day.classList.toggle("show-inner-content");
}

window.addEventListener('DOMContentLoaded', async () => {
  const userState = await fetch("/api/me");
  const userStateData = await userState.json();
  if (!userStateData.loggedIn){
     window.location.replace("/");
     return;
  }
  if (!userStateData.hasPlan){
    window.location.replace("/pages/details.html");
    return;
  }
  const name = userStateData.name;
  const plan = userStateData.plan;
  renderPlan(name, plan);
});

document.addEventListener("click", (e) => {
  const gifButton = e.target.closest(".imgButton");
  if (gifButton){
    const gifDiv = gifButton.nextElementSibling;
    const isOpen = gifDiv.classList.toggle("show-gif");
    gifDiv.classList.toggle("hide-gif", !isOpen);
    gifButton.textContent = isOpen ? "Click to close Demo" : "Click to open Demo";
    return;
  }
  const dayButton = e.target.closest(".day-button");
  if (dayButton){
    const dayButtonData = dayButton.dataset.day;
    const day = document.querySelector(`.${dayButtonData}`);
    showDay(day, dayButtonData);
    return;
  }
  const planInfoButton = e.target.closest(".user-title-button");
  if (planInfoButton) {
    hideDays();
  }
})

