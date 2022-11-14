import { Card } from "./Card.js";
import { boys } from "./boys.js";
import { FormValidator } from "./FormValidator.js";

const popupEdit = document.querySelector(".popup_type_edit");
const popupCard = document.querySelector(".popup_type_card");
const popupPicture = document.querySelector(".popup_type_picture");
const popupFormEdit = document.querySelector(".popup__form_type_edit");
const cardPopupForm = document.querySelector(".popup__form_type_card");
const buttonEditOpen = document.querySelector(".profile__edit-button");
const buttonCardOpen = document.querySelector(".profile__plus-button");
const buttonSaveCard = popupCard.querySelector(".popup__save-button");
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__description");
const linkInput = document.querySelector(".popup__input_type_link");
const cardInput = document.querySelector(".popup__input_type_card-name");
const popups = document.querySelectorAll(".popup");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_subname");
const elementsList = document.querySelector("#list");
const editSettings = {
  formSelector: ".popup__form_type_edit",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_type_visible",
};
const cardSettings = {
  formSelector: ".popup__form_type_card",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_type_visible",
};

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubname.textContent;
  cardPopupForm.reset();
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__cross-button")) {
      closePopup(popup);
    }
  });
});

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubname.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleCardClick(name, link) {
  linkInput.value = link;
  nameInput.value = name;
  openPopup(popupPicture);
}

//creating new card
function newCardCreation(evt) {
  evt.preventDefault();
  const moniker = cardInput.value;
  const link = linkInput.value;
  const card = new Card(moniker, link, handleCardClick);
  elementsList.prepend(card.createCard());
  linkInput.value = "";
  cardInput.value = "";
  buttonSaveCard.classList.add("popup__save-button_type_invalid");
  closePopup(popupCard);
}

const createBoys = function () {
  boys.forEach((el) => {
    const card = new Card(el.name, el.link, handleCardClick);
    elementsList.prepend(card.createCard());
  });
};
createBoys();

cardPopupForm.addEventListener("submit", newCardCreation);
buttonEditOpen.addEventListener("click", () => openPopup(popupEdit));
buttonCardOpen.addEventListener("click", () => openPopup(popupCard));
popupFormEdit.addEventListener("submit", editFormSubmitHandler);

const editValidate = new FormValidator(editSettings);
const cardValidate = new FormValidator(cardSettings);

editValidate.enableValidation(editSettings);
cardValidate.enableValidation(cardSettings);
