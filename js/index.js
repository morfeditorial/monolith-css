import { initAccordion } from './accordion.js';
import { closeModal, initModal, openModal } from './modal.js';
import { initNav } from './nav.js';
import { getTheme, initTheme, setTheme } from './theme.js';

const Monolith = {
  init(root = document) {
    initNav(root);
    initAccordion(root);
    initModal(root);
    initTheme(root);
  },
  openModal,
  closeModal,
  getTheme,
  setTheme
};

if (typeof window !== 'undefined') {
  const start = () => Monolith.init();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
  window.Monolith = Monolith;
}

export default Monolith;
