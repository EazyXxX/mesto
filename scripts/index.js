let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form')
let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__cross-button');
let saveButton = popup.querySelector('.popup__save-button');
let profileName = document.querySelector('.profile__name');
let profileSubname = document.querySelector('.profile__description');

const openPopup = function (event) {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileSubname.textContent;
}

const closePopup = function (event) {
    popup.classList.remove('popup_opened');
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let nameInput = popup.querySelector('.popup__input_name');
let jobInput = popup.querySelector('.popup__input_subname');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler);