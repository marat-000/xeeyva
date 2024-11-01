// Показать кнопку при прокрутке страницы вниз
window.onscroll = function () {
  let backToTopButton = document.getElementById("backToTop");
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Плавный скролл наверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Показать/скрыть меню
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");
  navMenu.classList.toggle("open");
  overlay.classList.toggle("show");
}

// Закрыть меню при клике по ссылке или за пределами меню
function closeMenu() {
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");
  navMenu.classList.remove("open");
  overlay.classList.remove("show");
}

function goBack() {
  window.history.back();
}
