const modalAdd = document.querySelector('#myPopupAdd');
const btnOpenAdd = document.querySelector('#btnOpenAdd');
const btnCloseAdd = document.querySelector('#btnCloseAdd');
const btnSubmitAdd = document.querySelector('#btn-submit-add');


btnSubmitAdd.addEventListener('click', function (evt) {
    modalAdd.classList.add('popup_closed');
    modalAdd.classList.remove('popup_opened');
});

btnOpenAdd.addEventListener('click', function (evt) {
    modalAdd.classList.remove('popup_closed');
    modalAdd.classList.add('popup_opened');
});

btnCloseAdd.addEventListener('click', function (evt) {
    modalAdd.classList.add('popup_closed');
    modalAdd.classList.remove('popup_opened');
});


const modalEdit = document.querySelector('#myPopupEdit');
const btnOpenEdit = document.querySelector('#btn-open-edit');
const btnCloseEdit = document.querySelector('#btnCloseEdit');
const btnSubmitEdit = document.querySelector('#btn-submit-edit');
const name = document.querySelector('#edit-profile-name');
const title = document.querySelector('#edit-profile-title');

btnOpenEdit.addEventListener('click', function () {
    name.value = name.value ? name.value : 'Жак-Ив Кусто';
    title.value = title.value ? title.value : 'Исследователь океана';
    modalEdit.classList.remove('popup_closed');
    modalEdit.classList.add('popup_opened');
});

btnCloseEdit.addEventListener('click', function () {
    modalEdit.classList.add('popup_closed');
    modalEdit.classList.remove('popup_opened');
});

btnSubmitEdit.addEventListener('click', function () {
    modalEdit.classList.add('popup_closed');
    modalEdit.classList.remove('popup_opened');
});
