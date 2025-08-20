document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");
    const daysContainer = document.getElementById("days");

    const months = [
      "Январь","Февраль","Март","Апрель","Май","Июнь",
      "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"
    ];

    // Заполняем select месяцами
    months.forEach((m, i) => {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = m;
      monthSelect.appendChild(option);
    });

    // Заполняем годами (2020–2030)
    for (let y = 2020; y <= 2030; y++) {
      const option = document.createElement("option");
      option.value = y;
      option.textContent = y;
      yearSelect.appendChild(option);
    }

    // Функция генерации календаря
    function generateCalendar(year, month) {
      daysContainer.innerHTML = ""; // очистка

      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      let startDay = firstDay.getDay(); // день недели (0=вс)
      if (startDay === 0) startDay = 7; // сдвигаем воскресенье в конец

      // Пустые клетки до начала месяца
      for (let i = 1; i < startDay; i++) {
        const empty = document.createElement("div");
        daysContainer.appendChild(empty);
      }

      // Дни месяца
      for (let d = 1; d <= lastDay.getDate(); d++) {
        const dayEl = document.createElement("div");
        dayEl.classList.add("day");
        dayEl.textContent = d;
        daysContainer.appendChild(dayEl);
      }
    }

    // События при изменении месяца/года
    monthSelect.addEventListener("change", () => {
      generateCalendar(+yearSelect.value, +monthSelect.value);
    });
    yearSelect.addEventListener("change", () => {
      generateCalendar(+yearSelect.value, +monthSelect.value);
    });

    // Установка сегодняшней даты
    const today = new Date();
    monthSelect.value = today.getMonth();
    yearSelect.value = today.getFullYear();
    generateCalendar(today.getFullYear(), today.getMonth());

  }, 500); // задержка 2 секунды
});