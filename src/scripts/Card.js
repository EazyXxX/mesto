const blackImage  = new URL('../images/black.png', import.meta.url);

export class Card {
  constructor(data, handleCardClick) {
    this._name = data.name;
    this._link = data.subname;
    this._handleCardClick = handleCardClick;
    this._template = document.querySelector(".template").content;
    this._card = this._template.querySelector(".elements__card").cloneNode(true);
    this._deleteBtn = this._card.querySelector(".elements__delete-button");
    this._likeBtn = this._card.querySelector(".elements__like");
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
    this._placeName.textContent = this._name;
    
    this._setEventListeners();

    return this._card;
  }
  
  removeCard() {
    this._card.remove();
    this._card = null;
    } 
    setLike() {
      this._likeBtn.classList.toggle("elements__like_active")
    }
  _setEventListeners() {
    this._deleteBtn.addEventListener("click", () => this.removeCard());
    this._likeBtn.addEventListener("click", () => this.setLike());
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}