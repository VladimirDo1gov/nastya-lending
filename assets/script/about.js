function animTextAbout() {}
document.addEventListener("scroll", (event) => {
    if (pageYOffset > 300) {
        document.querySelector(".about__text > h2").dataset.anim = "fromLeft";
        setTimeout(() => {
            document.querySelector(".about__text > p").dataset.anim = "fromLeft";
        }, 200);
    }
});
