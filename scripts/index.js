const popupEdit = document.querySelector(".popup_type_edit");
const popupCard = document.querySelector(".popup_type_card");
const popupPicture = document.querySelector(".popup_type_picture");
const popupForm = document.querySelector(".popup__form");
const popupFormEdit = document.querySelector(".popup__form_type_edit");
const cardPopupForm = document.querySelector(".popup__form_type_card");
const buttonEditOpen = document.querySelector(".profile__edit-button");
const buttonCardOpen = document.querySelector(".profile__plus-button");
const buttonEditClose = document.querySelector(
  ".popup__cross-button_type_edit"
);
const buttonCardClose = document.querySelector(
  ".popup__cross-button_type_card"
);
const buttonPictureClose = document.querySelector(
  ".popup__cross-button_type_picture"
);
const popupBigPicture = document.querySelector(".popup__picture");
const popupPicMoniker = document.querySelector(".popup__pic-moniker");
const buttonSave = popupEdit.querySelector(".popup__save-button");
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__description");
const linkInput = document.querySelector(".popup__input_type_link");
const cardInput = document.querySelector(".popup__input_type_card-name");
const popupWindow = document.querySelector(".popup__window");
const popups = document.querySelectorAll(".popup");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_subname");
const elementsList = document.querySelector("#list");
const templateElement = document.querySelector(".template");

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

function addCard(moniker, link) {
  const newCardElement = templateElement.content.cloneNode(true);
  const cardWhole = newCardElement.querySelector(".elements__card");
  const cardImage = newCardElement.querySelector(".elements__image");
  const newLike = newCardElement.querySelector(".elements__like");
  newLike.addEventListener("click", () => {
    newLike.classList.toggle("elements__like_active");
  });
  const elementName = newCardElement.querySelector(".elements__name");

  elementName.textContent = moniker;
  cardImage.alt = moniker;
  cardImage.src = link;

  //deletion
  newCardElement
    .querySelector(".elements__delete-button")
    .addEventListener("click", () => {
      cardWhole.remove();
    });

  //big picture
  cardImage.addEventListener("click", () => openPopup(popupPicture));
  const newPhoto = function () {
    popupBigPicture.src = `${link}`;
    popupBigPicture.alt = `${moniker}`;
    popupPicMoniker.textContent = `${moniker}`;
  };
  cardImage.addEventListener("click", newPhoto);

  return newCardElement;
}

//creating boys
boys.forEach((el) => {
  const boyCards = addCard(el.name, el.link);
  elementsList.prepend(boyCards);
});

//creating new card
function newCardCreation(evt) {
  evt.preventDefault();
  const linkInputValue = linkInput.value;
  const cardInputValue = cardInput.value;
  elementsList.prepend(addCard(cardInputValue, linkInputValue));
  closePopup(popupCard);
  const cardImage = document.querySelector(".elements__image");
}

cardPopupForm.addEventListener("submit", newCardCreation);
buttonEditOpen.addEventListener("click", () => openPopup(popupEdit));
buttonCardOpen.addEventListener("click", () => openPopup(popupCard));
popupFormEdit.addEventListener("submit", editFormSubmitHandler);