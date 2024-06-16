const articles = document.querySelector("[data-articles]");
const articleBlocks = document.querySelectorAll(".article-block ");
const artieclesArea = document.querySelector(".articles-area");

window.onload = () => {
    if (document.documentElement.clientWidth < 700 && artieclesArea.dataset.swiperArticles === "false") {
        artieclesArea.dataset.swiperArticles = "true";
        swiperArticles.init("swiper-articles");
        articles.classList.remove("articles");
        for (let elem of articleBlocks) {
            elem.dataset.articles = "block-size";
        }
    }
};
window.addEventListener("resize", (event) => {
    if (document.documentElement.clientWidth < 700 && artieclesArea.dataset.swiperArticles === "false") {
        artieclesArea.dataset.swiperArticles = "true";
        swiperArticles.init();
        articles.classList.remove("articles");
        for (let elem of articleBlocks) {
            elem.dataset.articles = "block-size";
        }
    }
    if (document.documentElement.clientWidth > 700 && artieclesArea.dataset.swiperArticles === "true") {
        artieclesArea.dataset.swiperArticles = "false";
        articles.classList.add("articles");
        swiperArticles.destroy();
        for (let elem of articleBlocks) {
            elem.dataset.articles = "";
        }
    }
});
