// Select all elements in the DOM that we will be working with

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnHideModal = document.querySelector('.hide-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal);
}


btnHideModal.addEventListener('click',closeModal );

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if((e.key === 'Escape') && (!modal.classList.contains('hidden'))) {
        closeModal();
    }
})