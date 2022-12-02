export class UserInfo {
  constructor(profileName, profileSubname) {
    this._profileName = profileName;
    this._profileSubname = profileSubname;
  }

  getUserInfo() {
    const name = this._profileName;
    const subname = this._profileSubname; 
    const userInfo = {name, subname};
    return userInfo
  }
  
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileSubname.textContent = data.subname;
  }
}