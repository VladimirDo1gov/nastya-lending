const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", (event) => {
    const link = document.querySelector("[data-theme-toggle]");
    if (link.dataset.theme === "light") {
        link.dataset.theme = "dark";
        link.href = "./assets/style/theme/dark-theme.css";
        event.target.src = "./assets/icons/free-icon-moon-phases-178351.png";
    } else {
        link.dataset.theme = "light";
        link.href = "./assets/style/theme/light-theme.css";
        event.target.src = "./assets/icons/free-icon-sun-859463.png";
    }
});
