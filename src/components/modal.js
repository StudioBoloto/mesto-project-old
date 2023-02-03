import {myConfiguration} from "./constants.js";


export class Popup {
    constructor(selector) {
        this._element = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._element.classList.add(myConfiguration.openedPopupClass);
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._element.classList.remove(myConfiguration.openedPopupClass);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._element.addEventListener("mousedown", evt => {
            if (evt.target.classList.contains(myConfiguration.openedPopupClass)) {
                this.close();
            }
            if (evt.target.classList.contains(myConfiguration.closeButtonClass)) {
                this.close();
            }
        });
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _renderLoading(buttonLabel) {
        this._element.querySelector(myConfiguration.submitButtonSelector).textContent = buttonLabel;
    }
}

export class PopupWithImage extends Popup {
    constructor(selector, imageLink, imageName) {
        super(selector);
        this._imageLink = imageLink;
        this._imageName = imageName;
    }

    open() {
        super.open();
        this._element.querySelector('.popup__image').src = this._imageLink;
        this._element.querySelector('.popup__image').alt = this._imageName;
        this._element.querySelector('.popup__title-image').textContent = this._imageName;
    }
}

export class PopupWithForm extends Popup {
    constructor(selector, submitFormCallback) {
        super(selector);
        this._submitFormCallback = submitFormCallback;
        this._form = this._element.querySelector(myConfiguration.formSelector);
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll(myConfiguration.inputSelector);
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", evt => {
            evt.preventDefault();
            this._submitFormCallback(this._getInputValues());
            this._renderLoading(myConfiguration.progressButtonLabel);
            this.close();
        });
    }

    open() {
        super._renderLoading(myConfiguration.createButtonLabel);
        super.open();
    }

    close() {
        this._form.reset();
        super.close();
    }
}
