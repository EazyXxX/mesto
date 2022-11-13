export class FormValidator {
  constructor(settings) {
    this.settings = settings;

  
  }
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(`${this.settings.inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${this.settings.errorClass}`);
  };

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(`${this.settings.inputErrorClass}`);
    errorElement.classList.remove(`${this.settings.errorClass}`);
    errorElement.textContent = "";
  };
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
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
  };
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${this.settings.inactiveButtonClass}`);
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove(`${this.settings.inactiveButtonClass}`);
      buttonElement.removeAttribute("disabled");
    }
  };
  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(`${this.settings.inputSelector}`)
    );
    const buttonElement = formElement.querySelector(
      `${this.settings.submitButtonSelector}`
    );
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation(config) {
    const formList = Array.from(
      document.querySelectorAll(`${config.formSelector}`)
    );
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();

        if (formElement.checkValidity()) {
          formElement.reset();
        }
      });

      formList.forEach((fieldSet) => {
        this._setEventListeners(fieldSet);
      });
    });
    }
}
