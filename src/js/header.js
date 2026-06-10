document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('[data-header-menu-open]');
  const closeBtn = document.querySelector('[data-header-menu-close]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const categoryLinks = document.querySelectorAll('[data-category-link]');

  if (!burgerBtn || !closeBtn || !mobileMenu) {
    console.error('❌ Не знайдено один із елементів меню');
    return;
  }

  burgerBtn.addEventListener('click', () => {
    mobileMenu.dataset.open = 'true';
  });

  closeBtn.addEventListener('click', () => {
    delete mobileMenu.dataset.open;
  });

  categoryLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href')?.replace('#', '');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        mobileMenu.classList.remove('js-open');

        targetSection.setAttribute('tabindex', '-1');
        targetSection.focus();
      }
    });
  });
});
