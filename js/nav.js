// .nav-toggle toggles the sibling .nav; outside click closes it.
export function initNav(root = document) {
  root.addEventListener('click', (event) => {
    const toggle = event.target.closest('.nav-toggle');

    if (toggle) {
      const nav = toggle.parentElement.querySelector('.nav');
      if (nav) {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
      }
      return;
    }

    root.querySelectorAll('.nav.is-open').forEach((nav) => {
      if (nav.contains(event.target)) return;
      nav.classList.remove('is-open');
      nav.parentElement
        .querySelector('.nav-toggle')
        ?.setAttribute('aria-expanded', 'false');
    });
  });
}
