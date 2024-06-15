const parallaxElements = {
    h1: document.querySelector(".parallax__block-header > h1"),
    h2: document.querySelector(".parallax__block-header > h2"),
    p: document.querySelector(".parallax__block-header > p"),
    btn: document.querySelector(".parallax__block-button button"),
    form: document.querySelector(".parallax-form"),
    close: document.querySelector(".parallax-form-close"),
    hide: document.querySelector(".hide-block"),
};

const animParallaxElements = {
    // Появление хедера
    showHeader() {
        parallaxElements.h1.dataset.anim = "fromLeft";
        parallaxElements.h2.dataset.anim = "fromLeft";
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
        parallaxElements.h1.dataset.anim = "toLeft";
        parallaxElements.h2.dataset.anim = "toLeft";
        parallaxElements.form.dataset.anim = "fromBottomForm";
    },
    // Скрытие формы
    hideForm() {
        parallaxElements.form.dataset.anim = "toBottomForm";
        parallaxElements.h1.dataset.anim = "fromLeft";
        parallaxElements.h2.dataset.anim = "fromLeft";
        parallaxElements.p.dataset.anim = "fromRight";
        parallaxElements.btn.dataset.anim = "fromBottomBtn";
    },
};

window.addEventListener("load", animParallaxElements.showHeader, { once: true });

parallaxElements.btn.addEventListener("click", animParallaxElements.hideHeader);

parallaxElements.close.addEventListener("click", animParallaxElements.hideForm);

// Скрывает форму заявки
parallaxElements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    parallaxElements.hide.dataset.anim = "showHideBlock";
    setTimeout(() => {
        animParallaxElements.hideForm();
        setTimeout(() => {
            parallaxElements.hide.dataset.anim = "";
        }, 750);
    }, 750);
});

// Проверка алидности заполненных данных
const formElements = {
    firstname: document.forms.application.elements.firstname.value,
    secondname: document.forms.application.elements.secondname.value,
    parentname: document.forms.application.elements.parentname.value,
    telephone: document.forms.application.elements.telephone.value,
};
