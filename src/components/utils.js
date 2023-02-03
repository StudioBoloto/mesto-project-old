export class UserInfo {
    constructor(selectors, api) {
        this._nameSelector = selectors.profileAuthorSelector;
        this._aboutSelector = selectors.profileAboutSelector;
        this._avatarSelector = selectors.profileAvatarSelector;
        this._api = api;
    }

    _updateUserInfo(data) {
        document.querySelector(this._nameSelector).textContent = data.author;
        document.querySelector(this._aboutSelector).textContent = data.about;
    }

    getUserInfo() {
        return this._api.getUserInfo()
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    setUserInfo(data) {
        return this._api.patchProfile(data)
            .then(() => this._updateUserInfo(data))
            .catch((err) => {
                console.log(err);
            });
    }

    setUserAvatar(data) {
        return this._api.patchAvatar(data)
            .then(() => document.querySelector(this._avatarSelector).src = data.link)
            .catch((err) => {
                console.log(err);
            });
    }
}

export class Section {
    constructor({data, renderer}, containerSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element, isFirst=false) {
        isFirst? this._container.prepend(element) : this._container.append(element);
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }
}