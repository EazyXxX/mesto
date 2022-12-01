export class UserInfo {
  constructor() {
    this._profileName = document.querySelector(".profile__name");
    this._profileSubname = document.querySelector(".profile__description");
  }

  getUserInfo() {
    const name = this._profileName;
    const subname = this._profileSubname; 
    const userInfo = {name, subname};
    return userInfo
  }
  
  setUserInfo(name,subname) {
    this._profileName.textContent = name;
    this._profileSubname.textContent = subname;
  }
}