const sidebar = document.querySelector(".sidebar");
const btnShow = document.querySelector(".menu-burger");
const backgroundOpacity = document.querySelector(".background-opacity");
const btnClose = document.querySelector(".sidebar__menu-close");

btnShow.addEventListener("click", (event) => {
    sidebar.dataset.sidebarAnim = "sidebarShow";
    backgroundOpacity.dataset.background = "opacity";
    document.body.dataset.overflow = "hidden";
});

btnClose.addEventListener();
