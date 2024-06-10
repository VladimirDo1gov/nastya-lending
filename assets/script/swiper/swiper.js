class SwiperSetting {
    constructor(name) {
        this.name = name;
    }

    swiperDomElements = {
        swiper: document.querySelector(".swiper"),
        wrapper: document.querySelector("#swiperWrapper"),
        scrollBar: document.querySelector(".swiper-scrollbar"),
        pagination: document.querySelector(".swiper-pagination"),
        btnNext: document.querySelector(".swiper-button-next"),
        btnPrev: document.querySelector(".swiper-button-prev"),
    };

    settings = null;
    mobileQuerySize = null;

    selectMobileSize(value) {
        this.mobileQuerySize = value;
    }

    init() {
        this.settings = new Swiper(this.name, {
            direction: "horizontal",
            loop: true,
            speed: 900,
            spaceBetween: 50,
            slidesPerView: 1,
            mousewheel: true,
            navigation: {
                nextEl: this.swiperDomElements.btnNext,
                prevEl: this.swiperDomElements.btnPrev,
            },
            scrollbar: {
                el: this.swiperDomElements.scrollBar,
                hide: true,
            },
            pagination: {
                el: this.swiperDomElements.pagination,
                clickable: true,
            },
        });
        return this.settings;
    }

    addClassSwiperWrapper() {
        if (!this.swiperDomElements.wrapper.classList.contains("swiper-wrapper")) {
            this.swiperDomElements.wrapper.classList.add("swiper-wrapper");
        }
        this.swiperDomElements.wrapper.classList.remove("swiper-wrapper-grid");
        this.swiperDomElements.pagination.style.display = "initial";
        this.swiperDomElements.scrollBar.style.display = "initial";
    }

    addClassSwiperWrapperGrid() {
        if (!this.swiperDomElements.wrapper.classList.contains("swiper-wrapper-grid")) {
            this.swiperDomElements.wrapper.classList.add("swiper-wrapper-grid");
        }
        this.swiperDomElements.wrapper.classList.remove("swiper-wrapper");
        this.swiperDomElements.pagination.style.display = "none";
        this.swiperDomElements.scrollBar.style.display = "none";
    }

    destroy() {
        if (this.settings !== null) {
            this.settings.destroy();
            this.settings = null;
        }
    }
}

const swiper = new SwiperSetting(".swiper");
swiper.selectMobileSize(500);

const swiperEventInterface = {
    classChange() {
        window.addEventListener("DOMContentLoaded", () => {
            if (window.innerWidth <= swiper.mobileQuerySize) {
                swiper.addClassSwiperWrapper();
            } else {
                swiper.addClassSwiperWrapperGrid();
            }
        });
    },
    loadInit() {
        window.addEventListener("load", () => {
            if (window.innerWidth <= swiper.mobileQuerySize) swiper.init();
        });
    },
    resize() {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= swiper.mobileQuerySize && !swiper.settings) {
                swiper.addClassSwiperWrapper();
                swiper.init();
            }
            if (window.innerWidth > swiper.mobileQuerySize && swiper.settings) {
                swiper.destroy();
                swiper.addClassSwiperWrapperGrid();
            }
        });
    },
};

swiperEventInterface.classChange();
swiperEventInterface.loadInit();
swiperEventInterface.resize();
