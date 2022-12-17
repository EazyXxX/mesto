import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this.popup.querySelector(".popup__form");
    this._submitFormHandler = this._submitFormHandler.bind(this);
    this._inputList = Array.from(this.popup.querySelectorAll(".popup__input"));
    this._saveButton = this.popup.querySelector(".popup__save-button");
    this._saveButtonText = this._saveButton.textContent;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._saveButton.textContent = "Сохранение...";
    } else {
      this._saveButton.textContent = this._saveButtonText;
    }
  }

  //получаем значения инпутов
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  //вставляем данные в значения инпутов
  _setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  _submitFormHandler(evt) {
    evt.preventDefault();
    const data = this._getInputValues();
    this._handleFormSubmit(data);
  }

  //обработчики клика для иконки закрытия
  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", this._submitFormHandler);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this.popup.removeEventListener("submit", this._submitFormHandler);
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler;
  }
}
