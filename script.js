const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}


// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      fadeObserver.unobserve(entry.target); // 한번 나타나면 다시 안 숨김
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

fadeElements.forEach((el) => {
  fadeObserver.observe(el);
});
