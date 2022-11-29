import "./pages/index.css";
import { Card } from "./scripts/Card.js";
import { boys } from "./scripts/boys.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { Section } from "./scripts/Section.js";
import { Popup } from "./scripts/Popup.js";
import { UserInfo } from "./scripts/UserInfo.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";

const popupFormEdit = document.querySelector(".popup__form_type_edit");
const popupFormCard = document.querySelector(".popup__form_type_card");
const buttonEditOpen = document.querySelector(".profile__edit-button");
const buttonCardOpen = document.querySelector(".profile__plus-button");
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__description");
const nameInput = popupFormEdit.querySelector(".popup__input_type_name");
const jobInput = popupFormEdit.querySelector(".popup__input_type_subname");
const elementsList = document.querySelector("#list");

const popupSelector = {
  popupEdit: ".popup_type_edit",
  popupCard: ".popup_type_card",
  popupPicture: ".popup_type_picture"
};

const popupPictureClass = new PopupWithImage(popupSelector.popupPicture);

function addNewCard(moniker, link) {
  const newCard = new Card(moniker, link, popupPictureClass.open);
  section.addItem(newCard.createCard());
}
const data = {boys, addNewCard}

const section = new Section(data, elementsList);
const newUser = new UserInfo();
const popupEditClass = new PopupWithForm(popupSelector.popupEdit, newUser.setUserInfo);
const popupCardClass = new PopupWithForm(popupSelector.popupCard, addNewCard);
popupEditClass.setEventListeners();
popupCardClass.setEventListeners();
//добавление карточек пацанов
section.renderAllItems()

// слушатели
buttonEditOpen.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubname.textContent;
  popupEditClass.open();
  formValidators[popupFormEdit.getAttribute("name")].resetValidation();
});
buttonCardOpen.addEventListener("click", () => {
  popupCardClass.open();
  formValidators[popupFormCard.getAttribute("name")].resetValidation();
});

// Включение валидации
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_type_visible",
};

const formValidators = {};

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
