import {hasInvalidInput} from "./validate.js";

export {toggleButtonState }

function toggleButtonState(inputList, buttonElements, myConfiguration) {
    buttonElements.forEach((buttonElement) => {
        if (hasInvalidInput(inputList)) {
            buttonElement.classList.add(myConfiguration.inactiveButtonClass);
            buttonElement.setAttribute('disabled', 'disabled');
        } else {
            buttonElement.classList.remove(myConfiguration.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    });
}
