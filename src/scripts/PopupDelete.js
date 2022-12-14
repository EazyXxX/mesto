import { Popup } from "./Popup.js";

export class PopupDelete extends Popup {
  constructor(popupSelector, deleteCard) {
    super(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._deleteCard = deleteCard;
    
    this.open = () => {
      this._popupSelector.classList.add("popup_opened");
      document.addEventListener("keydown", this.handleEscClose);
      this.setEventListeners()
      this._deleteCard(this._popupForm)
    }
  }

  setEventListeners() {
    //обработчик клика для иконки закрытия
 this._popupSelector.addEventListener("mousedown", (evt) => {
   if (evt.target.classList.contains("popup_opened")) {
     super.close();
   }
   if (evt.target.classList.contains("popup__cross-button")) {
     super.close();
   }
 });
 this._popupForm.addEventListener("submit", (e) => {
   e.preventDefault();
   super.close();
 });
 }
}
