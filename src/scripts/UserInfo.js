export class UserInfo {
  constructor() {
    this._profileName = document.querySelector(".profile__name");
    this._profileSubname = document.querySelector(".profile__description");
    this._form = document.querySelector(".popup__form_type_edit");
    this._nameInput = this._form.querySelector('.popup__input_type_name').value;
    this._subnameInput = this._form.querySelector('.popup__input_type_subname').value;
  }

  getUserInfo() {
    const name = this._nameInput;
    const subname = this._subnameInput; 
    const userInfo = {name, subname};
    return userInfo
  }
  
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileSubname.textContent = data.subname;
  }
}