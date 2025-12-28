const title = document.querySelector('.plan-title');
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

title.innerHTML = `${currentUser.name}'s Workout Plan`