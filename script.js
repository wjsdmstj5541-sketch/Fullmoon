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

// Location Tabs
const locTabs = document.querySelectorAll('.loc-tab');
const locContents = document.querySelectorAll('.loc-content');

locTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    locTabs.forEach(t => t.classList.remove('active'));
    locContents.forEach(c => c.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Show corresponding content
    const targetId = tab.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});
