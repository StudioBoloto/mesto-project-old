const editButton = document.querySelector('#btn-submit-edit');


function editProfile(profileName, profileTitle) {
    const profileInfo = document.querySelector('.profile__info');

    profileInfo.querySelector('.profile__author').textContent = profileName;
    profileInfo.querySelector('.profile__about').textContent = profileTitle;
}

editButton.addEventListener('click', function () {
    const name = document.querySelector('#edit-profile-name');
    const title = document.querySelector('#edit-profile-title');
    editProfile(name.value, title.value);
});
