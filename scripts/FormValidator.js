export class FormValidator {
  constructor(formElement, settings) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    this._buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(`${this._settings.inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${this._settings.errorClass}`);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(`${this._settings.inputErrorClass}`);
    errorElement.classList.remove(`${this._settings.errorClass}`);
    errorElement.textContent = "";
  }
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(inputElement);
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(
        `${this._settings.inactiveButtonClass}`
      );
      this._buttonElement.setAttribute("disabled", "true");
    } else {
      this._buttonElement.classList.remove(
        `${this._settings.inactiveButtonClass}`
      );
      this._buttonElement.removeAttribute("disabled");
    }
  }
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._setEventListeners();
  }
}
