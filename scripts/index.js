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
  editValidate.resetValidation();
  cardValidate.resetValidation();
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
  linkInput.value = "";
  cardInput.value = "";
  closePopup(popupCard);
}

boys.forEach((el) => {
  const boyCards = createCard(el.name, el.link, handleCardClick);
  elementsList.prepend(boyCards);
});

cardPopupForm.addEventListener("submit", addNewCard);
buttonEditOpen.addEventListener("click", () => openPopup(popupEdit));
buttonCardOpen.addEventListener("click", () => openPopup(popupCard));
popupFormEdit.addEventListener("submit", editFormSubmitHandler);

const cardValidate = new FormValidator(settings);
const editValidate = new FormValidator(settings);

editValidate.enableValidation();
cardValidate.enableValidation();
