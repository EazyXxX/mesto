const blackImage = new URL("../images/black.png", import.meta.url);

export class Card {
  constructor(
    data,
    templateSelector,
    userId,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId; //это мой id
    this._ownerId = data.owner._id;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._card = ".elements__card";
    this._cardImg = ".elements__image";
    this._likeBtnSelector = ".elements__like";
    this._deleteBtn = ".elements__delete-button";
    this._cardTitle = ".elements__name";
  }

  // достать разметку
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector(this._card)
      .cloneNode(true);
    return cardElement;
  }

  //повесить слушатели
  _setEventListeners() {
    this._cardLike = this._element.querySelector(this._likeBtnSelector);
    this._cardLike.addEventListener("click", () => this._handleLikeClick(this._id));
    this._del.addEventListener("click", () => this._handleDeleteClick(this._id));
    this._cardImage.addEventListener("click", () => this._handleCardClick(this._name, this._image));
  }

  // проверка на наличие лайкнутых карточек
  findMyLikes() {
    return this._likes.find(user => user._id === this._userId);
  }

  //посчитать лайки
  setLikes(newLikes) {
    this._likes = newLikes;
    this._likesCount.textContent = this._likes.length;
    this.handleLikeCard();
  }

  handleLikeCard() {
    if (this.findMyLikes()) {
      this._cardLike.classList.add("elements__like_active");
    } else {
      this._cardLike.classList.remove("elements__like_active");
    }
  }

  //удалить карту
  removeCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(this._cardImg);
    this._del = this._element.querySelector(this._deleteBtn);
    this._cardImage.onerror = () => {
      this._cardImage.src = blackImage;
    };
    this._setEventListeners();
    this._cardImage.src = this._image;
    this._element.querySelector(this._cardTitle).textContent = this._name;
    this._cardImage.alt = this._name;
    this._likesCount = this._element.querySelector(".elements__like-counter");
    if (this._ownerId !== this._userId) {
      this._del.remove();
    }

    this.setLikes(this._likes);

    return this._element;
  }
}
