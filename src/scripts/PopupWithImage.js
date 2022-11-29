import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this.open = (moniker, link) => {
      this._popupBigPicture = document.querySelector(".popup__picture");
      this._popupPicMoniker = document.querySelector(".popup__pic-moniker");
      this._popupBigPicture.src = link;
      this._popupBigPicture.alt = moniker;
      this._popupPicMoniker.textContent = moniker;
      super.open()
      this._popupSelector.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("popup_opened")) {
          this._popupSelector.classList.remove("popup_opened");
        }
        if (evt.target.classList.contains("popup__cross-button")) {
          this._popupSelector.classList.remove("popup_opened");
        }
      })
    }
  }
}
