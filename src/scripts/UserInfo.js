export class UserInfo {
  constructor(profileName, profileSubname, getUserInfo, handleProfileData) {
    this._profileName = profileName;
    this._profileSubname = profileSubname;
    this._getUserInfo = getUserInfo;
    this._handleProfileData = handleProfileData;
  }

  getUserInfo() {
    this._getUserInfo.then((res) => {return res.json});
    this._getUserInfo.then((res) => {
      const name = res.name;
      const subname = res.about;
      const avatar = res.avatar;
      this._handleProfileData(name, subname, avatar)
    });
  }
  
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileSubname.textContent = data.link;
  }
}