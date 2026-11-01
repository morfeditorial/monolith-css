// <div class="accordion" data-accordion-mode="single|multiple"> items toggle .is-open.
// Native <details class="accordion"> needs no js; "single" mode is supported for it too.
export function initAccordion(root = document) {
  root.addEventListener('click', (event) => {
    const trigger = event.target.closest('button.accordion__trigger');
    if (!trigger) return;

    const item = trigger.closest('.accordion');
    if (!item) return;

    const group = item.parentElement;
    if (group?.dataset.accordionMode === 'single') {
      group
        .querySelectorAll(':scope > .accordion.is-open')
        .forEach((other) => other !== item && other.classList.remove('is-open'));
    }

    const open = item.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(open));
  });

  root.addEventListener(
    'toggle',
    (event) => {
      const details = event.target;
      if (!(details instanceof HTMLDetailsElement) || !details.open) return;

      const group = details.parentElement;
      if (group?.dataset.accordionMode === 'single') {
        group
          .querySelectorAll(':scope > details.accordion[open]')
          .forEach((other) => other !== details && other.removeAttribute('open'));
      }
    },
    true
  );
}
