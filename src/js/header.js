(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-hed]'),
    closeModalBtn: document.querySelector('[data-modal-close-hed]'),
    modal: document.querySelector('[data-modal-fran]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
