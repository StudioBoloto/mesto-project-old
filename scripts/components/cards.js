const addButton = document.querySelector('#btn-submit-add');
const cardsContainer = document.querySelector('.elements');


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


function addCard(cardName, cardLink, newCard = false) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
    const modalImageOpen = cardElement.querySelector('#element-image');
    const modalImageClose = document.querySelector('#btn-close-image');
    const modalImage = document.querySelector('#my-popup-image');

    cardElement.querySelector('.elements__title').textContent = cardName;
    cardElement.querySelector('.elements__image').src = cardLink;
    cardElement.querySelector('.elements__image').alt = 'Изображение ' + cardName;

    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });

    modalImageOpen.addEventListener('click', function () {
        modalImage.classList.remove('popup_closed');
        modalImage.classList.add('popup_opened');
        modalImage.querySelector('.popup__image').src = cardLink;
        modalImage.querySelector('.popup__image').alt = 'Изображение ' + cardName;
        modalImage.querySelector('.popup__title-image').textContent = cardName;
    });

    modalImageClose.addEventListener('click', function () {
        modalImage.classList.add('popup_closed');
        modalImage.classList.remove('popup_opened');
    });


    cardElement.querySelector('#delete-button').addEventListener('click', function () {
        cardElement.remove();
    });

    if (newCard) {
        cardsContainer.insertBefore(cardElement, cardsContainer.firstChild);
    } else {
        cardsContainer.append(cardElement);
    }
}


addButton.addEventListener('click', function () {
    const name = document.querySelector('#add-card-title');
    const link = document.querySelector('#add-card-link');

    addCard(name.value, link.value, true);

    name.value = '';
    link.value = '';
});

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].name, initialCards[i].link);
}

