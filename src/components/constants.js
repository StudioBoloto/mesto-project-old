export {myConfiguration}

const myConfiguration = {
    popupSelector: '.popup',
    popupAddSelector: "#myPopupAdd",
    popupEditSelector: "#myPopupEdit",
    popupAvatarSelector: "#myPopupAvatar",
    popupImageSelector: '#my-popup-image',
    formSelector: '.popup__form',
    labelSelector: '.popup__label',
    inputSelector: '.popup__input',
    addButtonSelector: '#btnOpenAdd',
    editButtonSelector: '#btn-open-edit',
    submitButtonSelector: '.popup__save-button',
    closeButtonClass: 'popup__close-button',
    openedPopupClass: 'popup_opened',
    inactiveButtonClass: 'popup__save-button_inactive',
    inactiveTrashClass: 'elements__trash_inactive',
    addCardButtonSelector: '.popup__save-button-add-card',
    inputInvalidSelector: 'popup__input_invalid',
    inputErrorSelector: 'popup__input_error_active',
    cardsContainerSelector: '.elements',
    cardTemplateSelector: '#card-template',
    elementsCardSelector: '.elements__card',
    elementImageSelector: '#element-image',
    elementsImageSelector: '.elements__image',
    elementsTitleSelector: '.elements__title',
    elementsLikeSelector: '.elements__like',
    elementsLikeActiveClass: 'elements__like_active',
    elementsLikeCountClass: '.elements__like-counter',
    deleteButtonSelector: '#delete-button',
    avatarSelector: '#avatar-image',
    profileInfoSelector: '.profile__info',
    profileAuthorSelector: '.profile__author',
    profileAboutSelector: '.profile__about',
    profileAvatarSelector: '.profile__avatar',
    editProfileAuthorSelector: '#edit-profile-name',
    editProfileAboutSelector: '#edit-profile-title',
    createButtonLabel: 'Создать',
    progressButtonLabel: 'Сохранение...',
    saveButtonLabel: 'Сохранить',
    apiConfig: {
        baseUrl: 'https://nomoreparties.co/v1/plus-cohort-18',
        headers: {
            authorization: '63492307-542e-4f00-8b8a-a7276b6e840e',
            'Content-Type': 'application/json'
        }
    },
    id: undefined,
}

