import Accordion from 'accordion-js';

const accordionEl = document.querySelector('[data-accordion]');

if (accordionEl) {
  new Accordion(accordionEl, {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
  });
}
