document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    const mainContent = document.querySelector("main");

    menuToggle.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
            nav.classList.toggle("menu-active");
            mainContent.classList.toggle("push-down"); // محتوا رو کمی پایین ببره
        }
    });
});
