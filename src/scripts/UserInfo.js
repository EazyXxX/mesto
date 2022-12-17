export class UserInfo {
  constructor(profileName, profileSubname, profileAvatar, userId) {
    this._userName = profileName;
    this._userJob = profileSubname;
    this._userAvatar = profileAvatar;
    this._userId = userId;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userJob.textContent,
      avatar: this._userAvatar.src,
      _id: this._userId,
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._userAvatar.src = data.avatar;
  }
}
