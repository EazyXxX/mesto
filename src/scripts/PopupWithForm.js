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
    this._inputList = Array.from(this._popupSelector.querySelectorAll(".popup__input"));
    this._inputValues = {};
  }

  _getInputValues() {
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
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
      this._handleFormSubmit(this._getInputValues().name, this._getInputValues().subname);
      this.close();
    }); 
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", super.handleEscClose);
    this._popupForm.reset()
  }
}
