let popup = document.querySelector('.popup');
let popupForm = document.querySelector('#form')
let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__cross-button');
let saveButton = popup.querySelector('.popup__save-button');
let popupOpened = popup.querySelector('.popup_opened');

const openPopup = function (event) {
    popup.classList.add('popup_opened');
    If(popupOpened = true)
    {
        nameInput.value = profileName.textContent;
        jobInput.value = profileSubname.textContent;
    }

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

    const profileName = document.querySelector('.profile__name');
    const profileSubname = document.querySelector('.profile__description');

    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler);