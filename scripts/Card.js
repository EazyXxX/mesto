export class Card {
  constructor(moniker, link) {
    this._name = moniker;
    this._link = link;
    this._template = document.querySelector(".template").content;
  }
  createCard() {
    this._card = this._template
      .querySelector(".elements__card")
      .cloneNode(true);

    this._image = this._card.querySelector(".elements__image");
    this._placeName = this._card.querySelector(".elements__name");

    this._likeBtn = this._card.querySelector(".elements__like");
    this._deleteBtn = this._card.querySelector(".elements__delete-button");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._placeName.textContent = this._name;

    this._deleteBtn.addEventListener("click", () => this._card.remove());
    this._likeBtn.addEventListener("click", () =>
      this._likeBtn.classList.toggle("elements__like_active")
    );
    const popup = document.querySelector(".popup_type_picture");
    const popupBigPicture = document.querySelector(".popup__picture");
    const closeByEscape = (evt) => {
      if (evt.key === "Escape") {
        const popupOpened = document.querySelector(".popup_opened");
        popupOpened.classList.remove("popup_opened");
      }
    };
    this._image.addEventListener("click", () => {
      popup.classList.add("popup_opened");
      document.addEventListener("keydown", closeByEscape);
    });

    this._image.addEventListener("click", () => {
      const popupPicMoniker = document.querySelector(".popup__pic-moniker");
      popupBigPicture.src = `${this._link}`;
      popupBigPicture.alt = `${this._name}`;
      popupPicMoniker.textContent = `${this._name}`;
    });

    return this._card;
  }
}
