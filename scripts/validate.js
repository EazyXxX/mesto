const popupSelectorEdit = {
  formSelector: ".popup__form_type_edit",
  inputSelectorName: ".popup__input_type_name",
  inputSelectorSubname: ".popup__input_type_subname",
  submitSelector: "#submitEdit",
};

const popupSelectorCard = {
  formSelector: ".popup__form_type_card",
  inputSelectorName: ".popup__input_type_card-name",
  inputSelectorSubname: ".popup__input_type_link",
  submitSelector: "#submitCard",
};

//formEdit
const validateInput = (inputElement, config) => {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  const popupSelect = document.querySelector(`${config.formSelector}`);
  const submitButton = document.querySelector(`${config.submitSelector}`);
  if (popupSelect.checkValidity()) {
    errorElement.textContent = "";
    submitButton.classList.remove("popup__save-button_type_invalid");
  } else {
    errorElement.textContent = inputElement.validationMessage;
    submitButton.classList.add("popup__save-button_type_invalid");
  }
};

const validateForm = (config) => {
  const inputName = document.querySelector(`${config.inputSelectorName}`);
  const inputSubname = document.querySelector(`${config.inputSelectorSubname}`);

  validateInput(inputName, config);
  validateInput(inputSubname, config);
};

const enableValidation = (config) => {
  const popupSelect = document.querySelector(`${config.formSelector}`);
  popupSelect.addEventListener("submit", validateForm(config));
  popupSelect.addEventListener("input", (e) => {
    validateInput(e.target, config);
  });
  popupSelect.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  if (popupSelect.checkValidity()) {
    popupSelect.reset();
  } else {
  }
};

enableValidation(popupSelectorEdit);
enableValidation(popupSelectorCard);