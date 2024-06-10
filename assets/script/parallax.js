const parallaxElements = {
    h2: document.querySelectorAll(".parallax__block-header > h2"),
    p: document.querySelector(".parallax__block-header > p"),
    btn: document.querySelector(".parallax__block-button button"),
    form: document.querySelector(".parallax-form"),
    close: document.querySelector(".parallax-form-close"),
};

const animParallaxElements = {
    // Появление хедера
    showHeader() {
        for (let elem of parallaxElements.h2) {
            elem.dataset.anim = "fromLeft";
        }
        parallaxElements.p.dataset.anim = "fromRight";
        parallaxElements.btn.dataset.anim = "fromBottomBtn";
    },
    // Скрытие хедера
    hideHeader() {
        if (parallaxElements.form.querySelector(".submit-form")) {
            parallaxElements.form.querySelector(".submit-form").remove();
        }
        parallaxElements.btn.dataset.anim = "toBottomBtn";
        parallaxElements.p.dataset.anim = "toRight";
        for (let elem of parallaxElements.h2) {
            elem.dataset.anim = "toLeft";
        }
        parallaxElements.form.dataset.anim = "fromBottom";
    },
    // Скрытие формы
    hideForm() {
        parallaxElements.form.dataset.anim = "toBottomForm";
        for (let elem of parallaxElements.h2) {
            elem.dataset.anim = "fromLeft";
        }
        parallaxElements.p.dataset.anim = "fromRight";
        parallaxElements.btn.dataset.anim = "fromBottomBtn";
    },
};

window.addEventListener("load", animParallaxElements.showHeader, { once: true });

parallaxElements.btn.addEventListener("click", animParallaxElements.hideHeader);

parallaxElements.close.addEventListener("click", animParallaxElements.hideForm);

parallaxElements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    let div = document.createElement("div");
    div.className = "submit-form";
    div.textContent = "Успешно";
    event.target.append(div);
    setTimeout(() => {
        animParallaxElements.hideForm();
    }, 1500);
});
