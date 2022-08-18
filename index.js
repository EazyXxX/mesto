let popup = document.querySelector('.popup');
let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__cross-button');
let saveButton = popup.querySelector('.popup__save-button');

const openPopup = function (event) {
  console.log(event)
  popup.classList.add('popup_opened');
}

const closePopup = function (event) {
  console.log(event)
  popup.classList.remove('popup_opened');
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__subname');

function formSubmitHandler(evt) {
  evt.preventDefault();

  const profileName = document.querySelector('.profile__name');
  const profileSubname = document.querySelector('.profile__description');
  
  profileName.textContent = nameInput.value;
  profileSubname.textContent = jobInput.value;
}

popup.addEventListener('submit', formSubmitHandler); 