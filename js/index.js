window.addEventListener("DOMContentLoaded", () => {
    const logbutton = document.querySelector('.login');
    const buttonsContainer = document.querySelector('.navbar-buttons-container');
    const contactButton = document.querySelector('.js-contact-us');
    const myPlanbtn = document.createElement("a");
    if (!localStorage.getItem('currentUser')){
        logbutton.classList.remove("js-logout");
        logbutton.href = "/pages/login.html";
        logbutton.textContent = "Login";
        if (myPlanbtn) {
            myPlanbtn.remove();
        }
    }

    else {
        logbutton.classList.add("js-logout");
        logbutton.removeAttribute("href");
        logbutton.textContent = "Logout";
        logbutton.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.href = "";
        })
        myPlanbtn.classList.add("button", "js-my-plan");
        myPlanbtn.textContent = "My Plan";
        myPlanbtn.href = "/pages/workout_plan.html";
        buttonsContainer.insertBefore(myPlanbtn, contactButton);
    };

    const startNowtbn = document.querySelector(".hero-get-plan");
    if (localStorage.getItem('currentUser')) {
        startNowtbn.textContent = "My Plan";
        startNowtbn.href = "/pages/workout_plan.html"
    }
    else {
        startNowtbn.textContent = "Start Now";
        startNowtbn.href = "/pages/login.html";
    }
    

});