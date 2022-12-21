import {myConfiguration, addCard, editProfile} from "./index.js";

export {openPopup, modalImage, profileAuthor, profileAbout}

const modalImage = document.querySelector('#my-popup-image');
const profileInfo = document.querySelector('.profile__info');
const profileAuthor = profileInfo.querySelector('.profile__author');
const profileAbout = profileInfo.querySelector('.profile__about');

const modalImageClose = document.querySelector('#btn-close-image');
const inputCardName = document.querySelector('#add-card-title');
const inputCardLink = document.querySelector('#add-card-link');
const modalAddCardForm = document.querySelector("#popupAddCard");
const inputUserName = document.querySelector('#edit-profile-name');
const inputUserTitle = document.querySelector('#edit-profile-title');
const modalEditProfileForm = document.querySelector("#popupEditProfile");
const modalAddCard = document.querySelector('#myPopupAdd');
const btnOpenAddCardModal = document.querySelector('#btnOpenAdd');
const btnCloseAddCardModal = document.querySelector('#btnCloseAdd');
const btnSubmitAddCardModal = document.querySelector('#btn-submit-add');
const modalEditProfile = document.querySelector('#myPopupEdit');
const btnOpenEditProfileModal = document.querySelector('#btn-open-edit');
const btnCloseEditProfileModal = document.querySelector('#btnCloseEdit');
const btnSubmitEditProfileModal = document.querySelector('#btn-submit-edit');

function openPopup(popup, myConfiguration) {
    popup.classList.add(myConfiguration.openedPopupClass);
    const buttonElements = Array.from(popup.querySelectorAll(myConfiguration.addCardButtonSelector));
    buttonElements.forEach((buttonElement) => {
        const submitButtonList = Array.from(buttonElement.querySelectorAll(myConfiguration.submitButtonSelector));
        submitButtonList.forEach((submitButtonElement) => {
            submitButtonElement.classList.add(myConfiguration.inactiveButtonClass);
            submitButtonElement.setAttribute('disabled', 'disabled');
        });
    });
}

function closePopup(popup, myConfiguration) {
    popup.classList.remove(myConfiguration.openedPopupClass);
    const formList = Array.from(popup.querySelectorAll(myConfiguration.formSelector));
    formList.forEach((formElement) => {
        const buttonElement = formElement.querySelector(myConfiguration.submitButtonSelector);
        buttonElement.classList.remove(myConfiguration.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
        const fieldsetList = Array.from(formElement.querySelectorAll(myConfiguration.labelSelector));
        fieldsetList.forEach((fieldSet) => {
            const inputListInvalid = Array.from(fieldSet.querySelectorAll(myConfiguration.inputInvalidSelector));
            inputListInvalid.forEach((errorElement) => {
                errorElement.classList.remove(myConfiguration.inputInvalidSelector);
            });
            const inputList = Array.from(fieldSet.querySelectorAll(myConfiguration.inputErrorSelector));
            inputList.forEach((errorElement) => {
                errorElement.classList.remove(myConfiguration.inputErrorSelector);
                errorElement.textContent = '';
            });
        });
    });
}


modalImageClose.addEventListener('click', function () {
    closePopup(modalImage, myConfiguration);
});

modalAddCardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addCard(inputCardName.value, inputCardLink.value, myConfiguration);
    modalAddCardForm.reset();
});

modalEditProfileForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    editProfile(inputUserName.value, inputUserTitle.value);
});

btnSubmitAddCardModal.addEventListener('click', function () {
    closePopup(modalAddCard, myConfiguration);
});

btnOpenAddCardModal.addEventListener('click', function () {
    openPopup(modalAddCard, myConfiguration);
});

btnCloseAddCardModal.addEventListener('click', function () {
    closePopup(modalAddCard, myConfiguration);
});

btnOpenEditProfileModal.addEventListener('click', function () {
    inputUserName.value = profileAuthor.textContent;
    inputUserTitle.value = profileAbout.textContent;
    openPopup(modalEditProfile, myConfiguration);
});

btnCloseEditProfileModal.addEventListener('click', function () {
    closePopup(modalEditProfile, myConfiguration);
});

window.onclick = function (event) {
    if (event.target === modalEditProfile) {
        closePopup(modalEditProfile, myConfiguration);
    }
    if (event.target === modalAddCard) {
        closePopup(modalAddCard, myConfiguration);
    }
    if (event.target === modalImage) {
        closePopup(modalImage, myConfiguration);
    }
}

function keyHandler(evt) {
    if (evt.key === 'Escape') {
        closePopup(modalEditProfile, myConfiguration);
        closePopup(modalAddCard, myConfiguration);
        closePopup(modalImage, myConfiguration);
    }
}

window.addEventListener('keydown', keyHandler);

btnSubmitEditProfileModal.addEventListener('click', function () {
    closePopup(modalEditProfile, myConfiguration);
});

const editNameFormElement = document.querySelector('#edit-profile-name');
const editTitleFormElement = document.querySelector('#edit-profile-title');


editNameFormElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

editTitleFormElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});