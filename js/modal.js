// Modals: [data-modal-open="#id"], [data-modal-close], backdrop click, Escape.
export function openModal(modal) {
  modal.classList.add('is-open');
  modal.dispatchEvent(new CustomEvent('monolith:modal-open', { bubbles: true }));
}

export function closeModal(modal) {
  modal.classList.remove('is-open');
  modal.dispatchEvent(new CustomEvent('monolith:modal-close', { bubbles: true }));
}

export function initModal(root = document) {
  root.addEventListener('click', (event) => {
    const opener = event.target.closest('[data-modal-open]');
    if (opener) {
      const modal = document.querySelector(opener.dataset.modalOpen);
      if (modal) openModal(modal);
      return;
    }

    if (event.target.closest('[data-modal-close]')) {
      const modal = event.target.closest('.modal');
      if (modal) closeModal(modal);
      return;
    }

    // Click on the backdrop itself
    if (event.target.classList?.contains('modal')) closeModal(event.target);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.modal.is-open').forEach(closeModal);
  });
}
