import {myConfiguration} from "./constants";
import {closePopup} from "./modal.js";

export {handleEscape}

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup, myConfiguration);
    }
}