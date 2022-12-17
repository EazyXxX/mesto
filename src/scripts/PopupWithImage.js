import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupBigPicture = this.popup.querySelector('.popup__picture');
		this._popupPicMoniker = this.popup.querySelector('.popup__pic-moniker');
  }

  open(moniker, link) {
    this._popupBigPicture.src = link;
    this._popupBigPicture.alt = moniker;
    this._popupPicMoniker.textContent = moniker;
		super.open();
	}
}
