document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const filtersContainer = document.getElementById("filters")

        const categories = [
            {
                title: "Учреждения",
                category: ["Детский сад", "Школа", "Поликлиника", "Больница"]
            },
            {
                title: "Категории",
                category: ["Спорт", "Культура", "Образование", "Здравоохранение", "Торговля", "Транспорт", "Жилищно-коммунальное хозяйство", "Энергетика", "Экология"]
            }
        ]

        categories.forEach(cat => {
            filtersContainer.innerHTML += `<p class="article__title">${cat.title}</p>`

            const wrapper = document.createElement("div");
            filtersContainer.appendChild(wrapper);
            wrapper.classList.add("categories");

            cat.category.forEach((item, index) => {
                const hidden = index >= 6 ? " style='display:none' class='categories__checkbox-label extra'" : " class='categories__checkbox-label'"

                wrapper.innerHTML += `
                    <label for="${item}" ${hidden}>
                        <input type="checkbox" class="categories__checkbox-input" name="${item}" id="${item}">
                        ${item}
                    </label>`
            })

            if (cat.category.length > 6) {
                const btn = document.createElement("button")
                btn.classList.add("categories__toggle")
                btn.textContent = "Eщё"

                btn.addEventListener("click", () => {
                    const hiddenItems = wrapper.querySelectorAll(".extra")
                    const isHidden = hiddenItems[0].style.display === "none"

                    hiddenItems.forEach(el => {
                        el.style.display = isHidden ? "flex" : "none"
                    })

                    btn.textContent = isHidden ? "Скрыть" : "Eщё"
                })

                wrapper.appendChild(btn)
            }
        })
    }, 300)
})