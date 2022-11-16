import { Card } from "./Card.js";
import { boys } from "./boys.js";
import { FormValidator } from "./FormValidator.js";

const popupEdit = document.querySelector(".popup_type_edit");
const popupCard = document.querySelector(".popup_type_card");
const popupPicture = document.querySelector(".popup_type_picture");
const popupFormEdit = document.querySelector(".popup__form_type_edit");
const popupFormCard = document.querySelector(".popup__form_type_card");
const buttonEditOpen = document.querySelector(".profile__edit-button");
const buttonCardOpen = document.querySelector(".profile__plus-button");
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__description");
const linkInput = document.querySelector(".popup__input_type_link");
const cardInput = document.querySelector(".popup__input_type_card-name");
const popups = document.querySelectorAll(".popup");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_subname");
const elementsList = document.querySelector("#list");
const popupPicMoniker = document.querySelector(".popup__pic-moniker");
const popupBigPicture = document.querySelector(".popup__picture");

const settings = {
  formSelector: ".popup__form",
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
  popupBigPicture.src = link;
  popupBigPicture.alt = name;
  popupPicMoniker.textContent = name;
  openPopup(popupPicture);
}

//creating new card
function createCard(moniker, link, handleCardClick) {
  const card = new Card(moniker, link, handleCardClick);
  const newCard = card.createCard();
  return newCard;
}

function addNewCard(evt) {
  evt.preventDefault();
  elementsList.prepend(
    createCard(cardInput.value, linkInput.value, handleCardClick)
  );
  evt.target.reset();
  formValidators[popupFormCard.getAttribute("name")].resetValidation();
  closePopup(popupCard);
}

boys.forEach((el) => {
  const boyCards = createCard(el.name, el.link, handleCardClick);
  elementsList.prepend(boyCards);
});

popupFormCard.addEventListener("submit", addNewCard);
buttonEditOpen.addEventListener("click", () => {
  formValidators[popupFormEdit.getAttribute("name")].resetValidation();
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubname.textContent;
  openPopup(popupEdit);
});
buttonCardOpen.addEventListener("click", () => openPopup(popupCard));
popupFormEdit.addEventListener("submit", editFormSubmitHandler);

const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(settings);