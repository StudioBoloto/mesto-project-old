import '../pages/index.css';
import {addCard, createCard, cardsContainer} from "./card.js";
import {initialCards, myConfiguration} from "./constants.js";
import {enableValidation} from "./validate.js"

export {myConfiguration, addCard};

initialCards.forEach((initialCard) => {
    const cardElement = createCard(initialCard.name, initialCard.link, myConfiguration);
    cardsContainer.append(cardElement);
})

enableValidation(myConfiguration);