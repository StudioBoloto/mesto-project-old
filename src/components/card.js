import {openPopup} from "./modal.js";

export {addCard, createCard, cardsContainer}

const modalImage = document.querySelector('#my-popup-image');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;
const modalImageName = document.querySelector('.popup__title-image');
const modalImageLink = document.querySelector('.popup__image');


function createCard(cardName, cardLink, myConfiguration) {
    const cardElement = cardTemplate.querySelector(myConfiguration.elementsCardSelector).cloneNode(true);
    const modalImageOpen = cardElement.querySelector(myConfiguration.elementImageSelector);
    const cardElementImage = cardElement.querySelector(myConfiguration.elementsImageSelector);
    cardElement.querySelector(myConfiguration.elementsTitleSelector).textContent = cardName;
    cardElementImage.src = cardLink;
    cardElementImage.alt = 'Изображение ' + cardName;
    cardElement.querySelector(myConfiguration.elementsLikeSelector).addEventListener('click', function (evt) {
        evt.target.classList.toggle(myConfiguration.elementsLikeActiveClass);
    });
    modalImageOpen.addEventListener('click', function () {
        openPopup(modalImage, myConfiguration);

        modalImageLink.src = cardLink;
        modalImageLink.alt = 'Изображение ' + cardName;
        modalImageName.textContent = cardName;
    });
    cardElement.querySelector(myConfiguration.deleteButtonSelector).addEventListener('click', function () {
        cardElement.remove();
    });
    return cardElement;
}

function addCard(cardName, cardLink, myConfiguration) {
    const cardElement = createCard(cardName, cardLink, myConfiguration);
    cardsContainer.prepend(cardElement);
}
