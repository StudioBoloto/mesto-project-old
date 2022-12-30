import {addCard} from "./card.js";
import {myConfiguration} from "./constants.js";
import {handleEscape} from "./utils.js";
import {patchAvatar, patchProfile} from "./api.js"

export {openPopup, closePopup, editProfile, editAvatar}

const profileInfo = document.querySelector('.profile__info');
const profileAuthor = profileInfo.querySelector('.profile__author');
const profileAbout = profileInfo.querySelector('.profile__about');
const profileAvatar = document.querySelector('.profile__avatar');
const modalAvatarOpen = document.querySelector(myConfiguration.avatarSelector);
const inputCardName = document.querySelector('#add-card-title');
const inputCardLink = document.querySelector('#add-card-link');
const inputAvatarLink = document.querySelector('#avatar-link');
const modalAddCardForm = document.forms["add-card-form"];
const modalEditAvatar = document.forms["edit-avatar-form"];
const inputUserName = document.querySelector('#edit-profile-name');
const inputUserTitle = document.querySelector('#edit-profile-title');
const modalEditProfileForm = document.forms["profile-edit-form"];
const modalAddCard = document.querySelector('#myPopupAdd');
const modalAvatar = document.querySelector('#myPopupAvatar');
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
    patchProfile(profileName, profileTitle)
        .then((result) => {
            profileAuthor.textContent = result.name;
            profileAbout.textContent = result.about;
        })
        .catch((err) => {
            console.log(err);
        });
}

function editAvatar(avatarLink) {
    patchAvatar(avatarLink)
        .then((result) => {
            profileAvatar.src = result.avatar;
        })
        .catch((err) => {
            console.log(err);
        });
}

modalEditAvatar.addEventListener('submit', function (evt) {
    evt.preventDefault();
    editAvatar(inputAvatarLink.value);
    modalEditAvatar.reset();
    closePopup(modalAvatar, myConfiguration);
});

modalAvatarOpen.addEventListener('click', function () {
    modalAvatar.querySelector(myConfiguration.submitButtonSelector).textContent = "Создать";
    openPopup(modalAvatar, myConfiguration);
});

modalAddCardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addCard(inputCardName.value, inputCardLink.value, myConfiguration);
    modalAddCardForm.reset();
    closePopup(modalAddCard, myConfiguration);
});

modalEditProfileForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    modalEditProfileForm.querySelector(myConfiguration.submitButtonSelector).textContent = "Сохранение...";
    editProfile(inputUserName.value, inputUserTitle.value);
    closePopup(modalEditProfile, myConfiguration);
});

btnOpenAddCardModal.addEventListener('click', function () {
    modalAddCard.querySelector(myConfiguration.submitButtonSelector).textContent = "Создать";
    openPopup(modalAddCard, myConfiguration);
});

btnOpenEditProfileModal.addEventListener('click', function () {
    inputUserName.value = profileAuthor.textContent;
    inputUserTitle.value = profileAbout.textContent;
    modalEditProfile.querySelector(myConfiguration.submitButtonSelector).textContent = "Сохранить";
    openPopup(modalEditProfile, myConfiguration);
});
