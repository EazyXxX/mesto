const validationConfig = {
  formSelector: ".popup__form_type_card",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: ".popup__save-button_type_invalid",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_type_visible",
};

function validateInput(form, input, config) {
  const error = form.querySelector(".input-error");
  if (!input.validity.valid) {
    input.classList.add(config.inputErrorClass);
    error.classList.add(config.errorClass);
    error.textContent = input.validationMessage;
  } else {
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
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

enableValidation(validationConfig);
