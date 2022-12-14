import { Popup } from "./Popup.js";

export class PopupAvatar extends Popup {
  constructor(popupSelector, handleFormSubmit, renderLoading) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._renderLoading = renderLoading;
    this._popupSelector = document.querySelector(popupSelector);
    this._input = this._popupSelector.querySelector(".popup__input");
    this._avatar = document.querySelector('.profile__avatar');
    this._avatarSubmitButton = document.querySelector("#submitAvatar");
  }

  
  setEventListeners() {
    //обработчик клика для иконки закрытия
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        super.close();
      }
      if (evt.target.classList.contains("popup__cross-button")) {
        super.close();
      }
    });
    this._popupSelector.addEventListener("submit", (e) => {
      e.preventDefault();
      this._renderLoading(true, this._avatarSubmitButton);
      this._handleFormSubmit(this._input.value, this._renderLoading, this._avatarSubmitButton);
      this._avatar.src = this._input.value;
      super.close();
    });
  }
}
