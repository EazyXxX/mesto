import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupSelector = document.querySelector(popupSelector);
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._profileName = document.querySelector(".profile__name");
    this._profileSubname = document.querySelector(".profile__description");
    this._cardMoniker = this._popupSelector.querySelector(".popup__input_type_card-name");
    this._cardLink = this._popupSelector.querySelector(".popup__input_type_link");
  }

  _getInputValues() {
    const nameInput = document.querySelector(".popup__input_type_name").value;
    const subnameInput = document.querySelector(".popup__input_type_subname").value;
    const inputData = {
      name: nameInput,
      subname: subnameInput
    }
    return inputData
  }
  
  setEventListeners() {
    //обработчик клика для иконки закрытия
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
      if (evt.target.classList.contains("popup__cross-button")) {
        this.close();
      }
    });

    //обработчик сабмита формы
    this._popupForm.addEventListener("submit", (evt) => { 
      evt.preventDefault();
      if (this._popupSelector === document.querySelector(".popup_type_edit")) {
        this._handleFormSubmit(this._getInputValues());
      } else {
        this._handleFormSubmit(this._cardMoniker.value, this._cardLink.value);
      }
      this.close();
    }); 
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", super.handleEscClose);
    this._popupForm.reset()
  }
}
