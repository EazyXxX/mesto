const buttonEditOpen = document.querySelector(".profile__edit-button");
const buttonCardOpen = document.querySelector(".profile__plus-button");
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__avatar");
const elementsList = document.querySelector("#list");
const profileAvatarButton = document.querySelector(".profile__avatar-button");
const popupAvatarSubmitButton = document.querySelector("#submitAvatar");
const popupEditInputName = document.querySelector(".popup__input_type_name");
const popupEditInputSubname = document.querySelector(".popup__input_type_subname");
const myId = "f174efe7217c0ba06c05738f";
const baseUrl = "https://mesto.nomoreparties.co/v1/cohort-55";
const headers = {
  authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
  "Content-Type": "application/json",
};

const popupSelector = {
  popupEdit: ".popup_type_edit",
  popupCard: ".popup_type_card",
  popupPicture: ".popup_type_picture",
  popupDelete: ".popup_type_delete",
  popupAvatar: ".popup_type_avatar",
};

export {
  buttonEditOpen,
  buttonCardOpen,
  profileName,
  profileSubname,
  profileAvatar,
  elementsList,
  profileAvatarButton,
  popupAvatarSubmitButton,
  myId,
  baseUrl,
  headers,
  popupSelector,
  popupEditInputName,
  popupEditInputSubname
};
