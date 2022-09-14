const validationConfigEdit = {
  formSelector: ".popup__form_type_edit",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_invalid",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_type_visible",
};

const validationConfigCard = {
  formSelector: ".popup__form_type_card",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_invalid",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_type_visible",
};

function validateInput(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  const saveButton = form.querySelector(config.submitButtonSelector);
  if (!input.validity.valid && input.value !== "") {
    input.classList.add(config.inputErrorClass);
    saveButton.classList.add(config.inactiveButtonClass);
    error.classList.add(config.errorClass);
    error.textContent = input.validationMessage;
  } else {
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
    saveButton.classList.remove(config.inactiveButtonClass);
    error.textContent = "";
  }
}

function setHandlers(form, config) {
  const cardInputs = Array.from(form.querySelectorAll(config.inputSelector));

  cardInputs.forEach((input) => {
    input.addEventListener("input", () => {
      validateInput(form, input, config);
    });
  });
}

function enableValidation(config) {
  const cardForm = document.querySelector(config.formSelector);

  cardForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  setHandlers(cardForm, config);
}

enableValidation(validationConfigEdit);
enableValidation(validationConfigCard);
