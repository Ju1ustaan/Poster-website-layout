const loadComponent = async (id, file) => {
  try {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(`Ошибка загрузки компонента ${file}:`, error);
  }
}

loadComponent("header", "../components/header.html");

loadComponent("banner", "../components/banner.html");

loadComponent("article", "../components/article.html");

loadComponent("content", "../components/content.html");

loadComponent("calendar", "../components/calendar.html");

loadComponent("footer", "../components/footer.html");