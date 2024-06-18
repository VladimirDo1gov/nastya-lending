const formElements = {
    firstname: document.forms.application.elements.firstname,
    secondname: document.forms.application.elements.secondname,
    parentname: document.forms.application.elements.parentname,
    telephone: document.forms.application.elements.telephone,
    date: document.forms.application.elements.date,
    /**
     * @param {} boolean
     * Проверяет формат номера телефона 89019402680
     */
    telReg() {
        if (this.telephone.value.match(/^8\d{10}$/gi)) {
            return true;
        }
        this.telephone.classList.add("border-red");
        setTimeout(() => {
            this.telephone.classList.remove("border-red");
        }, 500);
        return false;
    },
    /**
     * @param {} boolean
     * Проверяет введен ли хотя бы один символ в поле Имя
     */
    firstnameReg() {
        if (this.firstname.value.length > 0) {
            return true;
        }
        this.firstname.classList.add("border-red");
        setTimeout(() => {
            this.firstname.classList.remove("border-red");
        }, 500);
        return false;
    },
    /**
     * @param {} boolean
     * Проверяет введен ли хотя бы один символ в поле Фамилия
     */
    secondnameReg() {
        if (this.secondname.value.length > 0) {
            return true;
        }
        this.secondname.classList.add("border-red");
        setTimeout(() => {
            this.secondname.classList.remove("border-red");
        }, 500);
        return false;
    },
    /**
     * @param {} void
     * Обнуляет value всех элементов формы
     */
    reset() {
        this.firstname.value = "";
        this.secondname.value = "";
        this.parentname.value = "";
        this.telephone.value = "";
        this.date.value = "";
    },
    /**
     * @param {} void
     * Получает текущую дату (мусец-день-год)
     * Задает для инпута value и min
     *
     */
    getDate() {
        let date = new Date();
        let day = date.toLocaleDateString().match(/^(?<day>\d{2})/i).groups.day;
        let month = date.toLocaleDateString().match(/.(?<month>\d{2})./i).groups.month;
        let year = date.getFullYear();
        this.date.min = `${year}-${month}-${Number(day) + 7}`;
        this.date.value = `${year}-${month}-${Number(day) + 7}`;
    },
};
const parallaxElements = {
    h1: document.querySelector(".parallax__block-header > h1"),
    h2: document.querySelector(".parallax__block-header > h2"),
    p: document.querySelector(".parallax__block-header > p"),
    btn: document.querySelector(".parallax__block-button button"),
    form: document.querySelector(".parallax-form"),
    close: document.querySelector(".parallax-form-close"),
    hide: document.querySelector(".hide-block"),
    show() {
        this.hide.dataset.anim = "showHideBlock";
        setTimeout(() => {
            animParallaxElements.hideForm();
            setTimeout(() => {
                this.hide.dataset.anim = "";
                formElements.reset();
            }, 750);
        }, 750);
    },
};
const animParallaxElements = {
    /**
     * @param {} void
     * Запускает анимации появления хедера
     */
    showHeader() {
        parallaxElements.h1.dataset.anim = "fromLeft";
        parallaxElements.h2.dataset.anim = "fromLeft";
        parallaxElements.p.dataset.anim = "fromRight";
        parallaxElements.btn.dataset.anim = "fromBottomBtn";
    },
    /**
     * @param {} void
     * Запускает анимации скрытия хедера и появления формы
     */
    showForm() {
        parallaxElements.btn.dataset.anim = "toBottomBtn";
        parallaxElements.p.dataset.anim = "toRight";
        parallaxElements.h1.dataset.anim = "toLeft";
        parallaxElements.h2.dataset.anim = "toLeft";
        parallaxElements.form.dataset.anim = "fromBottomForm";
        formElements.getDate();
    },
    /**
     * @param {} void
     * Запускает анимации скрытия формы и появления хедера
     */
    hideForm() {
        parallaxElements.form.dataset.anim = "toBottomForm";
        parallaxElements.h1.dataset.anim = "fromLeft";
        parallaxElements.h2.dataset.anim = "fromLeft";
        parallaxElements.p.dataset.anim = "fromRight";
        parallaxElements.btn.dataset.anim = "fromBottomBtn";
    },
};

window.addEventListener("load", animParallaxElements.showHeader, { once: true });
parallaxElements.btn.addEventListener("click", () => {
    animParallaxElements.showForm();
    // при открытии формы, окно скроллится в начало
    if (window.scrollY > 100) {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
            left: 0,
        });
    }
});
parallaxElements.close.addEventListener("click", animParallaxElements.hideForm);

// Скрывает форму заявки
parallaxElements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    let tel = formElements.telReg();
    let firstname = formElements.firstnameReg();
    let secondname = formElements.secondnameReg();
    if (tel && firstname && secondname) {
        parallaxElements.show();
    }
    if (!tel) {
        formElements.telReg();
    }
    if (!firstname) {
        formElements.firstnameReg();
    }
    if (!secondname) {
        formElements.secondnameReg();
    }
});
