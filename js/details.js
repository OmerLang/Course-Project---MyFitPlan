const currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
    window.location.href = "./login.html";
}

const userData = JSON.parse(currentUser);

document.querySelector('.js-user-name').innerHTML = `Let us know you better, ${userData.name}`;

const form = document.querySelector("form");
form.addEventListener("submit", (e) =>{
    const details = {
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
    }
    userData.details = details;
    localStorage.setItem("currentUser", JSON.stringify(userData));
    localStorage.setItem(userData.email, JSON.stringify(userData));
})
