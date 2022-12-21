export {initialCards, myConfiguration}

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const myConfiguration = {
    formSelector: '.popup__form',
    labelSelector: '.popup__label',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    openedPopupClass: 'popup_opened',
    inactiveButtonClass: 'popup__save-button_inactive',
    addCardButtonSelector: '.popup__save-button-add-card',
    inputInvalidSelector: 'popup__input_invalid',
    inputErrorSelector: 'popup__input_error_active',
    elementsCardSelector: '.elements__card',
    elementImageSelector: '#element-image',
    elementsImageSelector: '.elements__image',
    elementsTitleSelector: '.elements__title',
    elementsLikeSelector: '.elements__like',
    elementsLikeActiveClass: 'elements__like_active',
    deleteButtonSelector: '#delete-button'
}