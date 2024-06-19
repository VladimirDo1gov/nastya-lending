class SwiperControll {
    constructor(name, settings) {
        this.name = name;
        this.settings = { ...settings };
    }
    swiper;
    init() {
        this.swiper = new Swiper(`.${this.name}`, this.settings);
        this.displayElements("true");
        return this.swiper;
    }
    destroy() {
        this.displayElements("false");
        this.swiper.destroy();
    }
    update() {
        this.swiper.update();
    }
    /**
     *
     * @param {string} true
     * элементы свайпера отображаются
     * @param {string} false
     * элементы свайпера скрываются
     */
    displayElements(value) {
        let next = document.querySelector(`.${this.name} > ${this.swiper.params.navigation.nextEl}`);
        let prev = document.querySelector(`.${this.name} > ${this.swiper.params.navigation.prevEl}`);
        let scroll = document.querySelector(`.${this.name} > ${this.swiper.params.scrollbar.el}`);
        let pagination = document.querySelector(`.${this.name} > ${this.swiper.params.pagination.el}`);
        if (value === "false") {
            pagination.dataset.display = "none";
            scroll.dataset.display = "none";
            prev.dataset.display = "none";
            next.dataset.display = "none";
        }
        if (value === "true") {
            pagination.dataset.display = "initial";
            scroll.dataset.display = "initial";
            prev.dataset.display = "initial";
            next.dataset.display = "initial";
        }
    }
    get params() {
        console.log(this.swiper.params);
    }
    /**
     * @param {number} value
     * Количество отоброжаемых слайдов
     */
    set slidesPerView(value) {
        this.swiper.params.slidesPerView = value;
    }
    /**
     * @param {number} value
     * Количество переключаемых слайдов за один свайп
     */
    set slidesPerGroup(value) {
        this.swiper.params.slidesPerGroup = value;
    }
    /**
     * @param {number} value
     * Расстояние между слайдами
     */
    set spaceBetween(value) {
        this.swiper.params.spaceBetween = value;
    }
    /**
     *
     * @param {string} value
     * Направление свайпера
     * vertical / horizontal
     */
    set direction(value) {
        this.swiper.params.direction = value;
    }
}

const swiperPricelist = new SwiperControll("swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        1150: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
    },
});
const swiperArticles = new SwiperControll("swiper-articles", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
    },
});
// const swiperCaces = new SwiperControll("swiper-caces", {
//     direction: "horizontal",
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
//     breakpoints: {
//         1280: {
//             slidesPerView: 3,
//         },
//         700: {
//             slidesPerView: 2,
//         },
//     },
// });
// swiperCaces.init();

swiperPricelist.init();
