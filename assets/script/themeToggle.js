const themeToggle = document.querySelectorAll(".theme-toggle");
const themeToggleIcon = document.querySelectorAll(".theme-toggle > img");
for (let elem of themeToggle) {
    elem.addEventListener("click", (event) => {
        const link = document.querySelector("[data-theme-toggle]");
        if (link.dataset.theme === "light") {
            link.dataset.theme = "dark";
            link.href = "./assets/style/theme/dark-theme.css";
            for (let icon of themeToggleIcon) {
                icon.src = "./assets/icons/free-icon-moon-phases-178351.png";
            }
        } else {
            link.dataset.theme = "light";
            link.href = "./assets/style/theme/light-theme.css";
            for (let icon of themeToggleIcon) {
                icon.src = "./assets/icons/free-icon-sun-859463.png";
            }
        }
    });
}
