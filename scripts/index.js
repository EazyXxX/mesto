const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_type_edit");
const popupCard = document.querySelector(".popup_type_card");
const popupPicture = document.querySelector(".popup_type_picture");
const popupForm = document.querySelector('.popup__form');
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



function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", function (evt) {
    if(evt.key === 'Escape') {
      popup.classList.remove("popup_opened");
    }
  });
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonEditOpen.addEventListener("click", () => openPopup(popupEdit));
buttonEditClose.addEventListener("click", () => closePopup(popupEdit));
buttonCardOpen.addEventListener("click", () => openPopup(popupCard));
buttonCardClose.addEventListener("click", () => closePopup(popupCard));
buttonPictureClose.addEventListener("click", () => closePopup(popupPicture));
popupCard.addEventListener("mousedown", function(e) {
  if(e.target === popupCard && e.target !== popupWindow && popupCard.classList.contains('popup_opened')) {
    closePopup(popupCard);
  }
});
popupPicture.addEventListener("mousedown", function(e) {
  if(e.target === popupPicture && e.target !== popupWindow && popupPicture.classList.contains('popup_opened')) {
    closePopup(popupPicture);
  }
});
popupEdit.addEventListener("mousedown", function(e) {
  if(e.target === popupEdit && e.target !== popupWindow && popupEdit.classList.contains('popup_opened')) {
    closePopup(popupEdit);
  }
});



const nameInput = popupEdit.querySelector(".popup__input_type_name");
const jobInput = popupEdit.querySelector(".popup__input_type_subname");

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubname.textContent = jobInput.value;
  closePopup(popupEdit);
}

popupFormEdit.addEventListener("submit", editFormSubmitHandler);

const elementsList = document.querySelector("#list");

const templateElement = document.querySelector(".template");

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

const boys = [
  {
    name: "Мишган",
    link: "./images/Misha.png",
  },
  {
    name: "Паша",
    link: "./images/Pasha.png",
  },
  {
    name: "Юрец",
    link: "./images/Jurez.png",
  },
  {
    name: "Герман",
    link: "./images/German.png",
  },
  {
    name: "Илья",
    link: "./images/Ilya.png",
  },
  {
    name: "Глеб",
    link: "./images/Gleb.png",
  },
];

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
