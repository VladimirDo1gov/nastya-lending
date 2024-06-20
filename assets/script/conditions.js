const conditionsEl = {
    conditions: document.querySelector(".conditions"),
    steps: document.querySelectorAll(".conditions__process-step"),
    icons: document.querySelectorAll(".conditions__process-arrow-wrapper"),
    offsetY: 2732,
    /**
     * @description Возвращает значение data-атрибута элемента ".conditions"
     */
    get getDataConditions() {
        return this.conditions.dataset.conditionsLoad;
    },
    /**
     * @param {string} value
     * @argument false - по-умолчанию
     * @argument true - анимация завершилась
     * @description Задать значение для data-атрибута элемента ".conditions"
     */
    set setDataConditions(data) {
        this.conditions.dataset.conditionsLoad = data;
    },
};

/**
 * @param {number} value
 * @argument - количество милисекунд для setTimeout
 * @description Функция рекурсия, последовательно отображает блоки
 */
function showConditionBlocks(ms) {
    for (let elem of conditionsEl.steps) {
        if (elem.dataset.conditionsShow === "true") continue;
        if (elem.dataset.conditionsShow === "false") {
            setTimeout(() => {
                elem.dataset.conditionsShow = "true";
                return showConditionBlocks(ms);
            }, ms);
        }
        if (!elem.dataset.conditionsShow === false) {
            return null;
        }
    }
}

/**
 * @param {number} value
 * @argument - количество милисекунд для setTimeout
 * @description Функция рекурсия, последовательно отображает иконки
 */
function showConditionIcons(ms) {
    for (let elem of conditionsEl.icons) {
        if (elem.dataset.conditionsArrowMove === "true") continue;
        if (elem.dataset.conditionsArrowMove === "false") {
            setTimeout(() => {
                elem.dataset.conditionsArrowMove = "true";
                return showConditionIcons(ms);
            }, ms);
        }
        if (!elem.dataset.conditionsArrowMove === false) {
            return null;
        }
    }
}
/**
 * @function showConditionBlocks
 * @function showConditionIcons
 * @constant conditionsEl.conditions
 */
function showConditions() {
    if (window.pageYOffset > conditionsEl.offsetY && conditionsEl.getDataConditions === "false") {
        showConditionBlocks(500);
        showConditionIcons(400);
        conditionsEl.setDataConditions = "true";
    }
}

//
let firstArrow = document.querySelector(".conditions__process-arrow-wrapper > img");

window.addEventListener("scroll", showConditions);
