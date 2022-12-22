import '../pages/index.css';
import {addCard, editProfile, createCard, cardsContainer} from "./card.js";
import {toggleButtonState} from "./utils.js";
import {checkInputValidity} from "./validate.js";
import {initialCards, myConfiguration} from "./constants.js";

export {myConfiguration, addCard, editProfile};

for (let i = 0; i < initialCards.length; i++) {
    const cardElement = createCard(initialCards[i].name, initialCards[i].link, myConfiguration);
    cardsContainer.append(cardElement);
}

const setEventListeners = (formElement, myConfiguration) => {
    const inputList = Array.from(formElement.querySelectorAll(myConfiguration.inputSelector));
    const buttonElements = Array.from(formElement.querySelectorAll(myConfiguration.submitButtonSelector));

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, myConfiguration);
            toggleButtonState(inputList, buttonElements, myConfiguration);
        });
    });
};

const enableValidation = (myConfiguration) => {
    const formList = Array.from(document.querySelectorAll(myConfiguration.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, myConfiguration)

        const fieldSetList = Array.from(formElement.querySelectorAll(myConfiguration.labelSelector));

        fieldSetList.forEach((fieldSet) => {
            setEventListeners(fieldSet, myConfiguration);
        });

    });
};

enableValidation(myConfiguration);
