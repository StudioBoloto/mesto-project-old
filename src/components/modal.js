import {myConfiguration, addCard} from "./index.js";
import {handleEscape} from "./utils.js";

export {openPopup, closePopup}

const profileInfo = document.querySelector('.profile__info');
const profileAuthor = profileInfo.querySelector('.profile__author');
const profileAbout = profileInfo.querySelector('.profile__about');
const inputCardName = document.querySelector('#add-card-title');
const inputCardLink = document.querySelector('#add-card-link');
const modalAddCardForm = document.forms["add-card-form"];
const inputUserName = document.querySelector('#edit-profile-name');
const inputUserTitle = document.querySelector('#edit-profile-title');
const modalEditProfileForm = document.forms["profile-edit-form"];
const modalAddCard = document.querySelector('#myPopupAdd');
const btnOpenAddCardModal = document.querySelector('#btnOpenAdd');
const modalEditProfile = document.querySelector('#myPopupEdit');
const btnOpenEditProfileModal = document.querySelector('#btn-open-edit');

function openPopup(popup, myConfiguration) {
    popup.classList.add(myConfiguration.openedPopupClass);
    document.addEventListener('keydown', handleEscape);

}

function closePopup(popup, myConfiguration) {
    popup.classList.remove(myConfiguration.openedPopupClass);
    document.removeEventListener('keydown', handleEscape);

}

const popups = Array.from(document.querySelectorAll('.popup'));

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains(myConfiguration.openedPopupClass)) {
            closePopup(popup, myConfiguration)
        }
        if (evt.target.classList.contains(myConfiguration.closeButtonClass)) {
            closePopup(popup, myConfiguration)
        }
    })
})

function editProfile(profileName, profileTitle) {
    profileAuthor.textContent = profileName;
    profileAbout.textContent = profileTitle;
}

modalAddCardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addCard(inputCardName.value, inputCardLink.value, myConfiguration);
    modalAddCardForm.reset();
    const buttonElement = modalAddCardForm.querySelector(myConfiguration.addCardButtonSelector);
    buttonElement.classList.add(myConfiguration.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
    closePopup(modalAddCard, myConfiguration);
});

modalEditProfileForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    editProfile(inputUserName.value, inputUserTitle.value);
    closePopup(modalEditProfile, myConfiguration);
});

btnOpenAddCardModal.addEventListener('click', function () {
    openPopup(modalAddCard, myConfiguration);
});

btnOpenEditProfileModal.addEventListener('click', function () {
    inputUserName.value = profileAuthor.textContent;
    inputUserTitle.value = profileAbout.textContent;
    openPopup(modalEditProfile, myConfiguration);
});
