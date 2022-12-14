import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this._popupBigPicture = document.querySelector(".popup__picture");
    this._popupPicMoniker = document.querySelector(".popup__pic-moniker");
    this.open = (moniker, link) => {
      this._popupBigPicture.src = link;
      this._popupBigPicture.alt = moniker;
      this._popupPicMoniker.textContent = moniker;
      this._popupSelector.classList.add("popup_opened");
      document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
          this.close();
        }
      });
    }
  }
}
