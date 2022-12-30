import '../pages/index.css';
import {addCard, createCard, cardsContainer} from "./card.js";
import {myConfiguration} from "./constants.js";
import {enableValidation} from "./validate.js"
import {editProfile, editAvatar} from "./modal.js"
import {getMe, getInitialCards} from "./api.js";

export {myConfiguration, addCard};


getMe()
    .then((result) => {
        editProfile(result.name, result.about);
        editAvatar(result.avatar);
        myConfiguration.id = result._id;
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

getInitialCards()
    .then((result) => {
        result.forEach((initialCard) => {
            const cardElement = createCard(initialCard.name, initialCard.link, myConfiguration, initialCard);
            cardsContainer.append(cardElement);
        });
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });


enableValidation(myConfiguration);