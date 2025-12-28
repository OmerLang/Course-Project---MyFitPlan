const logout = document.querySelector(".js-logout");

logout.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "./login.html";
})