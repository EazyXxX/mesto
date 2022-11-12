export class FormValidator {
  constructor(settings, formSelector) {
    this.settings = settings;
    this.formSelector = formSelector;
  }
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
        setEventListeners(fieldSet);
      });
    });
    const setEventListeners = (formElement) => {
      const inputList = Array.from(formElement.querySelectorAll(`${settings.inputSelector}`));
      const buttonElement = formElement.querySelector(`${settings.submitButtonSelector}`);
      _toggleButtonState(inputList, buttonElement);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
          _checkInputValidity(formElement, inputElement);
          _toggleButtonState(inputList, buttonElement);
        });
      });
    };
    const _toggleButtonState = (inputList, buttonElement) => {
      if (_hasInvalidInput(inputList)) {
        buttonElement.classList.add(`${settings.inactiveButtonClass}`);
        buttonElement.setAttribute("disabled", "true");
      } else {
        buttonElement.classList.remove(`${settings.inactiveButtonClass}`);
        buttonElement.removeAttribute("disabled");
      }
    }

    const _checkInputValidity = (formElement, inputElement) => {
      if (!inputElement.validity.valid) {
        _showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        _hideInputError(formElement, inputElement);
      }
    };
    const _hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }

    const _showInputError = (formElement, inputElement, errorMessage) => {
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(`${settings.inputErrorClass}`);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(`${settings.errorClass}`);
    };
    
    const _hideInputError = (formElement, inputElement) => {
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(`${settings.inputErrorClass}`);
      errorElement.classList.remove(`${settings.errorClass}`);
      errorElement.textContent = "";
    };
  }
}
