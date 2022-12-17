import "./pages/index.css";
import {buttonEditOpen,
  buttonCardOpen,
  profileName,
  profileSubname,
  profileAvatar,
  elementsList,
  profileAvatarButton,
  baseUrl,
  headers,
  popupSelector} from "./utils/constants.js";
import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import { Section } from "./scripts/Section.js";
import { Popup } from "./scripts/Popup.js";
import { UserInfo } from "./scripts/UserInfo.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { Api } from "./scripts/Api.js";
import { data } from "autoprefixer";

let userId;

const popupPictureClass = new PopupWithImage(popupSelector.popupPicture);
const popupCardClass = new PopupWithForm(popupSelector.popupCard, submitCard);
const popupEditClass = new PopupWithForm(popupSelector.popupEdit, editProfile);
const popupFormAvatar = new PopupWithForm(popupSelector.popupAvatar, editAvatar);
const popupDeleteClass = new PopupWithForm(popupSelector.popupDelete);
const userInfo = new UserInfo(profileName, profileSubname, profileAvatar);
const api = new Api(baseUrl, headers);

//добавить карты на стр
const cardContainer = new Section({renderer: createCard}, elementsList);

Promise.all([api.getUserInfo(), api.getInitialCards()])
	.then(([userData, cardsData]) => {
		userInfo.setUserInfo(userData);
		userId = userData._id;
		cardContainer.renderAllItems(cardsData.reverse());
	})
	.catch(console.log)

  function createCard(data) {

    const newCard = new Card(data, '.template', userId, handleCardClick,
    // обработчик удаления карточки
      (id) => {
        popupDeleteClass.open();
        popupDeleteClass.changeSubmitHandler(() => {
          api.deleteCard(id)
            .then(() => {
              popupDeleteClass.close();
              newCard.removeCard();
            })
            .catch(console.log);
        });
      },
    // обработчик лайков
      (id) => {
        if (newCard.findMyLikes()) {
          api.deleteLike(id)
            .then((res) => {
              console.log(res)
              newCard.setLikes(res.likes);
            })
            .catch(console.log);
        } 
        else {
          api.likeCard(id)
            .then((res) => {
              console.log(res)
              newCard.setLikes(res.likes);
            })
            .catch(console.log);
        }
      });
    return newCard.generateCard();
  }

//обработчик нажатия на картинку 
function handleCardClick(name, link) {
  popupPictureClass.open(name, link);
}

//сабмит карточки
function submitCard(data) {
	popupCardClass.renderLoading(true);
	api.addCard(data.name, data.link)
		.then(res => {
			cardContainer.addItem(res);
			popupCardClass.close();
		})
		.catch(console.log)
		.finally(() => {
			popupCardClass.renderLoading(false);
		});
}

//самбит редактирования профиля
function editProfile(data) {
	popupEditClass.renderLoading(true);
	api.patchUserInfo(data.name, data.link)
		.then(res => {
			userInfo.setUserInfo(res);
			popupEditClass.close();
		})
		.catch(console.log)
		.finally(() => {
			popupEditClass.renderLoading(false);
		});
}

//самбит редактирования аватара
function editAvatar(data) {
	popupFormAvatar.renderLoading(true);
	api.patchAvatar(data.avatar)
		.then(res => {
			userInfo.setUserInfo(res);
			popupFormAvatar.close();
		})
		.catch(console.log)
		.finally(() => {
			popupFormAvatar.renderLoading(false);
		});
}

buttonEditOpen.addEventListener('click', () => {
  formValidators[popupFormEdit.getAttribute("name")].resetValidation();
	popupEditClass.open();
});

buttonCardOpen.addEventListener('click', function () {
	popupCardClass.open();
  formValidators[popupFormCard.getAttribute("name")].resetValidation();
});

profileAvatarButton.addEventListener('click', function () {
	popupFormAvatar.open();
});

// Включение валидации
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_type_visible",
};

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(settings);
