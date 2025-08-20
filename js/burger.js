document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const body = document.body;
        const btn = document.querySelector(".header__burger");
        const btnClose = document.querySelector(".header__burger-close");
        const nav = document.querySelector(".header__nav");

        if (btn && nav) {
            btn.addEventListener("click", () => {
                nav.classList.toggle("header__active");
                body.classList.add("lock");
            });
        }

        if (btnClose && nav) {
            btnClose.addEventListener("click", () => {
                console.log("close click");
                body.classList.remove("lock");
                nav.classList.remove("header__active");
            });
        }
    }, 300);
});
