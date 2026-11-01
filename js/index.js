import { closeModal, initModal, openModal } from './modal.js';
import { getTheme, initTheme, setTheme } from './theme.js';

const Monolith = {
  init(root = document) {
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
