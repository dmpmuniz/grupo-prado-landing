const header = document.getElementById("header");
const mainEl = document.querySelector("main");
const footerEl = document.querySelector("footer");
const onScrollHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
};
window.addEventListener("scroll", onScrollHeader, { passive: true });
onScrollHeader();

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

const closeMenu = () => {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menu");
  mainEl.inert = false;
  footerEl.inert = false;
};

const openMenu = () => {
  navMenu.classList.add("is-open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Fechar menu");
  mainEl.inert = true;
  footerEl.inert = true;
};

navToggle.addEventListener("click", () => {
  if (navMenu.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("click", (e) => {
  if (navMenu.classList.contains("is-open") && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    closeMenu();
  }
});

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    portfolioItems.forEach((item) => {
      const show = filter === "todos" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !show);
    });
  });
});

document.getElementById("ano").textContent = new Date().getFullYear();
