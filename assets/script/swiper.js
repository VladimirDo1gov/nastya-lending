class SwiperSetting {
    init(name) {
        return new Swiper(`.${name}`, {
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
    }
}
const swiperPricelist = new SwiperSetting();
const swiperCaces = new SwiperSetting();
swiperCaces.init("swiper-caces");
swiperPricelist.init("swiper");
