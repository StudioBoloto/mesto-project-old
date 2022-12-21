export {checkInputValidity, hasInvalidInput};

const showInputError = (formElement, inputElement, errorMessage, myConfiguration) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(myConfiguration.inputInvalidSelector);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(myConfiguration.inputErrorSelector);
};

const hideInputError = (formElement, inputElement, myConfiguration) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(myConfiguration.inputInvalidSelector);
    errorElement.classList.remove(myConfiguration.inputErrorSelector);
    errorElement.textContent = '';
};


function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

function isValidString(string) {
    let re = new RegExp(/^[\p{Script=Latin}\p{Script=Cyrl}\s\-]*$/u);
    return re.test(string);
}

const checkInputValidity = (formElement, inputElement, myConfiguration) => {
    if (inputElement.id === "add-card-link" && !isValidHttpUrl(inputElement.value)) {
        inputElement.setCustomValidity(inputElement.dataset.urlError);
        showInputError(formElement, inputElement, inputElement.validationMessage, myConfiguration);
    } else if (inputElement.validity.valueMissing) {
        inputElement.setCustomValidity(inputElement.dataset.emptyError);
        showInputError(formElement, inputElement, inputElement.validationMessage, myConfiguration);
    } else if (inputElement.id !== "add-card-link" && !isValidString(inputElement.value)) {
        inputElement.setCustomValidity(inputElement.dataset.symbolsError);
        showInputError(formElement, inputElement, inputElement.validationMessage, myConfiguration);
    } else if (inputElement.validity.tooShort) {
        inputElement.setCustomValidity(inputElement.dataset.lengthError);
        showInputError(formElement, inputElement, inputElement.validationMessage, myConfiguration);
    } else {
        inputElement.setCustomValidity("");
        hideInputError(formElement, inputElement, myConfiguration);
    }
};


function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
