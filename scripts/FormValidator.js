export class FormValidator {
  constructor(settings) {
    this._settings = settings;
    this._formList = Array.from(document.querySelectorAll(settings.formSelector));
    this._formElement = document.querySelector(settings.formSelector);
    this._inputList = Array.from(
      this._formElement.querySelectorAll(settings.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(settings.submitButtonSelector);
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(`${this._settings.inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${this._settings.errorClass}`);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(`${this._settings.inputErrorClass}`);
    errorElement.classList.remove(`${this._settings.errorClass}`);
    errorElement.textContent = "";
  }
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  resetValidation() {
    this._formList.forEach((formElement) => {
      const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
      this._toggleButtonState(formElement, inputList);
      inputList.forEach((inputElement) => {
        this._hideInputError(formElement, inputElement);
      });
    });
  }

  _toggleButtonState(formElement, inputList) {
    const buttonElement = formElement.querySelector(this._settings.submitButtonSelector);
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${this._settings.inactiveButtonClass}`);
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove(`${this._settings.inactiveButtonClass}`);
      buttonElement.removeAttribute("disabled");
    }
  }
  _setEventListeners() {
    this._formList.forEach((formElement) => {
      const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
      this._toggleButtonState(formElement, inputList);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(formElement, inputElement);
          this._toggleButtonState(formElement, inputList);
        });
      });
    }); 
  }

  enableValidation() {
    this._setEventListeners();
  }
}
