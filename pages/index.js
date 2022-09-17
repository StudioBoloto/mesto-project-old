const addButton = document.querySelector('#btn-submit-add');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;
const modalImageClose = document.querySelector('#btn-close-image');
const modalImage = document.querySelector('#my-popup-image');
const inputCardName = document.querySelector('#add-card-title');
const inputCardLink = document.querySelector('#add-card-link');
const modalImageName = modalImage.querySelector('.popup__title-image');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}


function closePopup(popup) {
    popup.classList.remove('popup_opened');
}


modalImageClose.addEventListener('click', function () {
    closePopup(modalImage);
});

function createCard(cardName, cardLink) {
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
    const modalImageOpen = cardElement.querySelector('#element-image');
    const cardElementImage = cardElement.querySelector('.elements__image');
    cardElement.querySelector('.elements__title').textContent = cardName;
    cardElementImage.src = cardLink;
    cardElementImage.alt = 'Изображение ' + cardName;

    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });

    modalImageOpen.addEventListener('click', function () {
        modalImage.classList.add('popup_opened');

        const modalImageLink = modalImage.querySelector('.popup__image');
        modalImageLink.src = cardLink;
        modalImageLink.alt = 'Изображение ' + cardName;
        modalImageName.textContent = cardName;
    });

    cardElement.querySelector('#delete-button').addEventListener('click', function () {
        cardElement.remove();
    });
    return cardElement;
}

function addCard(cardName, cardLink) {
    let cardElement = createCard(cardName, cardLink);
    cardsContainer.insertBefore(cardElement, cardsContainer.firstChild);
}

addButton.addEventListener('click', function () {

    addCard(inputCardName.value, inputCardLink.value);

    inputCardName.value.reset();
    inputCardLink.value.reset();
});

for (let i = 0; i < initialCards.length; i++) {
    let cardElement = createCard(initialCards[i].name, initialCards[i].link);
    cardsContainer.append(cardElement);
}


const editButton = document.querySelector('#btn-submit-edit');
const profileInfo = document.querySelector('.profile__info');
const inputUserName = document.querySelector('#edit-profile-name');
const inputUserTitle = document.querySelector('#edit-profile-title');
const profileAuthor = profileInfo.querySelector('.profile__author');
const profileAbout = profileInfo.querySelector('.profile__about');


function editProfile(profileName, profileTitle) {
    profileAuthor.textContent = profileName;
    profileAbout.textContent = profileTitle;
}

editButton.addEventListener('click', function () {
    editProfile(inputUserName.value, inputUserTitle.value);
});


const modalAddCard = document.querySelector('#myPopupAdd');
const btnOpenAddCardModal = document.querySelector('#btnOpenAdd');
const btnCloseAddCardModal = document.querySelector('#btnCloseAdd');
const btnSubmitAddCardModal = document.querySelector('#btn-submit-add');


btnSubmitAddCardModal.addEventListener('click', function () {
    closePopup(modalAddCard);
});

btnOpenAddCardModal.addEventListener('click', function () {
    openPopup(modalAddCard);
});

btnCloseAddCardModal.addEventListener('click', function () {
    closePopup(modalAddCard);
});


const modalEditProfile = document.querySelector('#myPopupEdit');
const btnOpenEditProfileModal = document.querySelector('#btn-open-edit');
const btnCloseEditProfileModal = document.querySelector('#btnCloseEdit');
const btnSubmitEditProfileModal = document.querySelector('#btn-submit-edit');

btnOpenEditProfileModal.addEventListener('click', function () {
    openPopup(modalEditProfile);
});

btnCloseEditProfileModal.addEventListener('click', function () {
    closePopup(modalEditProfile);
});

btnSubmitEditProfileModal.addEventListener('click', function () {
    closePopup(modalEditProfile);
});

