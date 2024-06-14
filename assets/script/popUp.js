const popupIcon = document.querySelector(".popup-fixed");
const popupLinkIcon = document.querySelector(".fixed-link-icon");
const popupWindow = document.querySelector(".popup-window");
const popupWrapper = document.querySelector(".popup-wrapper");
const popup = document.querySelector(".popup");

popup.addEventListener("mouseup", (event) => {
    if (event.target.closest(".popup-fixed")) {
        if (popupIcon.dataset.popupShow === "false") {
            event.target.addEventListener("click", (event) => {
                popupIcon.dataset.popupShow = "true";
                popupWrapper.style.overflow = "visible";
                popupWindow.style.top = "-510px";
                popupIcon.dataset.anim = "rotateRight";
                popupLinkIcon.src = event.target.src = "./assets/icons/cross.png";
            });
        }
        if (popupIcon.dataset.popupShow === "true") {
            event.target.addEventListener("click", (event) => {
                popupIcon.dataset.popupShow = "false";
                popupWindow.style.top = "1000px";
                popupIcon.dataset.anim = "rotateLeft";
                event.target.src = "./assets/icons/whatsup.png";
            });
        }
    }
});
