class SwiperControll {
    constructor(name, settings) {
        this.name = name;
        this.settings = { ...settings };
    }
    swiper;
    init() {
        this.swiper = new Swiper(`.${this.name}`, this.settings);
        return this.swiper;
    }
    destroy() {
        this.swiper.destroy();
    }
    update() {
        this.swiper.update();
    }
    hideElements() {}
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
        1280: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
    },
});
const swiperCaces = new SwiperControll("swiper-caces", {
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

swiperCaces.init();
swiperPricelist.init();
