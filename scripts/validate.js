const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_type_visible",
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(`${settings.inputErrorClass}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${settings.errorClass}`);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(`${settings.inputErrorClass}`);
  errorElement.classList.remove(`${settings.errorClass}`);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(`${settings.inputSelector}`));
  const buttonElement = formElement.querySelector(`${settings.submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(
    document.querySelectorAll(`${config.formSelector}`)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    formList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
};

enableValidation(settings);

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${settings.inactiveButtonClass}`);
    buttonElement.setAttribute("disabled", "true");
  } else {
    buttonElement.classList.remove(`${settings.inactiveButtonClass}`);
    buttonElement.removeAttribute("disabled");
  }
}
