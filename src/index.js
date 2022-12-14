import "./pages/index.css";
import { Card } from "./scripts/Card.js";
import { boys } from "./scripts/boys.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { Section } from "./scripts/Section.js";
import { Popup } from "./scripts/Popup.js";
import { UserInfo } from "./scripts/UserInfo.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { PopupDelete } from "./scripts/PopupDelete.js";
import { PopupAvatar } from "./scripts/PopupAvatar.js";
import { Api } from "./scripts/Api.js";

const popupFormEdit = document.querySelector(".popup__form_type_edit");
const popupFormCard = document.querySelector(".popup__form_type_card");
const popupFormDelete = document.querySelector(".popup__form_type_delete");
const buttonEditOpen = document.querySelector(".profile__edit-button");
const buttonCardOpen = document.querySelector(".profile__plus-button");
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__description");
const nameInput = popupFormEdit.querySelector(".popup__input_type_name");
const jobInput = popupFormEdit.querySelector(".popup__input_type_subname");
const elementsList = document.querySelector("#list");
const profileAvatar = document.querySelector(".profile__avatar");
const profileAvatarButton = document.querySelector(".profile__avatar-button");
const popupAvatarSubmitButton = document.querySelector("#submitAvatar");

const popupSelector = {
  popupEdit: ".popup_type_edit",
  popupCard: ".popup_type_card",
  popupPicture: ".popup_type_picture",
  popupDelete: ".popup_type_delete",
  popupAvatar: ".popup_type_avatar",
};

//получение изначальных карточек с сервера
const api = new Api();
const initialCards = api.getInitialCards();
const userInfo = api.getUserInfo();

//это нужно для добавления всех изначальных карточек
function addNewCard(data) {
  const newCard = new Card(
    data,
    popupPictureClass.open,
    api.deleteCard,
    api.likeCard,
    api.deleteLike
  );
  const popupDeleteClassCard = new PopupDelete(
    popupSelector.popupDelete,
    newCard.deleteCard
  );
  newCard.deleteBtn.addEventListener("click", () =>
    popupDeleteClassCard.open()
  );
  cardContainer.addItem(newCard.createCard());
}

function handleProfileData(name, subname, avatar) {
  profileName.textContent = name;
  profileSubname.textContent = subname;
  profileAvatar.src = avatar;
}

//замена аватарки
const popupAvatarClass = new PopupAvatar(
  popupSelector.popupAvatar,
  api.patchAvatar,
  renderLoading
);
popupAvatarClass.setEventListeners();
profileAvatarButton.addEventListener("click", popupAvatarClass.open);

function renderLoading(isLoading, submitButton) {
  if (isLoading) {
    submitButton.textContent = "Сохранение...";
  } else {
    submitButton.textContent = "Сохранить";
  }
}

const popupPictureClass = new PopupWithImage(popupSelector.popupPicture);
popupPictureClass.setEventListeners();
const cardContainer = new Section(initialCards, addNewCard, elementsList);
const newUser = new UserInfo(
  profileName,
  profileSubname,
  userInfo,
  handleProfileData
);
const popupEditClass = new PopupWithForm(
  popupSelector.popupEdit,
  newUser.setUserInfo,
  api.patchUserInfo,
  renderLoading
);
const popupCardClass = new PopupWithForm(
  popupSelector.popupCard,
  addNewCard,
  api.addCard,
  renderLoading
);
popupEditClass.setEventListeners();
popupCardClass.setEventListeners();
//добавление изначальных карточек
cardContainer.renderAllItems();

newUser.getUserInfo();
handleProfileData();

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
