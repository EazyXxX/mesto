const blackImage  = new URL('../images/black.png', import.meta.url);

export class Card {
  constructor(moniker, link, handleCardClick) {
    this._name = moniker;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._template = document.querySelector(".template").content;
  }
  createCard() {
    this._card = this._template
      .querySelector(".elements__card")
      .cloneNode(true);

    this._image = this._card.querySelector(".elements__image");
    this._placeName = this._card.querySelector(".elements__name");
    this._image.oneload = () => {
      this._image.src = blackImage
    }
    this._image.onerror = () => {
      this._image.src = blackImage
    }

    this._likeBtn = this._card.querySelector(".elements__like");
    this._deleteBtn = this._card.querySelector(".elements__delete-button");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._placeName.textContent = this._name;
    
    this._setEventListeners();
    this.setDeleteButton();
    this.setLikeButton()

    return this._card;
  }
  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  setDeleteButton() {
    this._deleteBtn.addEventListener("click", () => this._card.remove());
  }
  
  setLikeButton() {
    this._likeBtn.addEventListener("click", () =>
        this._likeBtn.classList.toggle("elements__like_active")
      );
  }
}