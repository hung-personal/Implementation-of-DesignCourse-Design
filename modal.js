'use strict';

const unimplementedLinkList = document.getElementsByClassName('not-implemented-link');
const modalOverlayEl = document.querySelector('.modal-overlay');
const modalEl = document.querySelector('.modal');
const closeModalBtnEl = document.querySelector('.btn-close-modal');

const showModal = function () {
  modalOverlayEl.classList.remove('hidden');
  modalEl.classList.remove('hidden');
}

const closeModal = function () {
  modalOverlayEl.classList.add('hidden');
  modalEl.classList.add('hidden');
}

for (const unimplementedLink of unimplementedLinkList) {
  unimplementedLink.addEventListener('click', showModal);
}

closeModalBtnEl.addEventListener('click', closeModal);