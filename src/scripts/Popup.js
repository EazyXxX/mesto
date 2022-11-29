export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._buttonEditOpen = document.querySelector(".profile__edit-button");

    this.handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this.handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.handleEscClose);
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
      if (evt.target.classList.contains("popup__cross-button")) {
        this.close();
      }
    });
  }
}
