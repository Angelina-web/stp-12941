const scrollBtn = document.querySelector('[data-scroll-top]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.dataset.visible = 'true';
  } else {
    delete scrollBtn.dataset.visible;
  }
});

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });