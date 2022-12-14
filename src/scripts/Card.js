const blackImage  = new URL('../images/black.png', import.meta.url);

export class Card {
  constructor(data, handleCardClick, deleteCardApi, likeCardApi, deleteLikeApi) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._ownerId = 'f174efe7217c0ba06c05738f';
    this._itemOwnerId = data.itemOwnerId;
    this._deleteCardApi = deleteCardApi;
    this._handleCardClick = handleCardClick;
    this._likeCardApi = likeCardApi;
    this._deleteLikeApi = deleteLikeApi;
    this._template = document.querySelector(".template").content;
    this._card = this._template.querySelector(".elements__card").cloneNode(true);
    this.deleteBtn = this._card.querySelector(".elements__delete-button");
    this._likeBtn = this._card.querySelector(".elements__like");
    this._likeCounter = this._card.querySelector(".elements__like-counter");

    this.deleteCard = (submitForm) => {
      submitForm.addEventListener("submit", () => this.removeCard());
      submitForm.addEventListener("submit", () => this._deleteCardApi(this._id));
    }
  }
  createCard() {
    this._image = this._card.querySelector(".elements__image");
    this._placeName = this._card.querySelector(".elements__name");
    this._image.oneload = () => {
      this._image.src = blackImage
    }
    this._image.onerror = () => {
      this._image.src = blackImage
    }

    this._image.src = this._link;
    this._image.alt = this._name;
    this._likeCounter.textContent = this._likes;

    this._placeName.textContent = this._name;

    this._setEventListeners();

    return this._card;
  }
  
  removeCard () {
    this._card.remove();
    this._card = null;
  }

    setLike() {
      if (this._likeBtn.classList.contains("elements__like_active")) {
        this._likeBtn.classList.remove("elements__like_active");
        this._likeCounter.textContent = (Number(this._likeCounter.textContent) - 1)
        this._deleteLikeApi(this._id);
      } else {
        this._likeBtn.classList.add("elements__like_active");
        this._likeCounter.textContent = (Number(this._likeCounter.textContent) + 1);
        this._likeCardApi(this._id);
      }
    }

  _setEventListeners() {
    if (this._itemOwnerId === this._ownerId) {
      this.deleteBtn.classList.add("elements__delete-button_type_active");
    }
    //this.deleteBtn.addEventListener("click", () => this.removeCard());
    //this.deleteBtn.addEventListener("click", () => this._deleteCardApi(this._id));
    this._likeBtn.addEventListener("click", () => this.setLike());
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}