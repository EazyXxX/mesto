export class Api {
  constructor() {}

  getInitialCards() {
    //получить список всех карточек в виде массива GET
    return fetch("https://mesto.nomoreparties.co/v1/cohort-55/cards", {
      headers: {
        authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
      },
    })

      .then((res) => {
         if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((initialCards) => {
        return initialCards;
      })
      .catch((err) => {
        console.log(err)
      });
  }

  addCard(data, renderLoading, submitButton) {
    //добавить карточку (POST)
    fetch("https://mesto.nomoreparties.co/v1/cohort-55/cards", {
      method: "POST",
      headers: {
        authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
    .catch((err) => {console.log(`Ошибка: ${err}`)})
    .finally(() => {renderLoading(false, submitButton)})
  }

  deleteCard(cardId) {
    //удалить карточку (DELETE)
    fetch(`https://mesto.nomoreparties.co/v1/cohort-55/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
        "Content-Type": "application/json",
      },
    });
  }

  getUserInfo() {
    //получить данные пользователя (GET)
    return fetch("https://mesto.nomoreparties.co/v1/cohort-55/users/me", {
      headers: {
        authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((myData) => {
        return myData;
      })
      .catch((err) => {
        console.log(err)
      });
  }

  patchUserInfo(data, renderLoading, submitButton) {
    //заменить данные пользователя (PATCH)

    fetch("https://mesto.nomoreparties.co/v1/cohort-55/users/me", {
      method: "PATCH",
      headers: {
        authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${data.name}`,
        about: `${data.link}`,
      }),
    })
    .catch((err) => {console.log(`Ошибка: ${err}`)})
    .finally(() => {renderLoading(false, submitButton)})
  }

  likeCard(cardId) {
    //лайкнуть карточку (PUT)
    fetch(`https://mesto.nomoreparties.co/v1/cohort-55/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
        "Content-Type": "application/json",
      },
    });
  }

  deleteLike(cardId) {
    //удалить лайк карточки (DELETE)
    fetch(`https://mesto.nomoreparties.co/v1/cohort-55/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
        "Content-Type": "application/json",
      },
    });
  }

  patchAvatar(avatar, renderLoading, submitButton) {
    //заменить аватар (PATCH)
    fetch("https://mesto.nomoreparties.co/v1/cohort-55/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: "853d6c1d-e77b-4d27-90f9-bed9b171c7fd",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: `${avatar}`
      }),
    })
    .catch((err) => {console.log(`Ошибка: ${err}`)})
    .finally(() => {renderLoading(false, submitButton)})
  }

  //это минимальый список методов - нужны вспомогательные

  //например, метод, который отдаст промис, ожидающий исполнение нескольких методов класса
}
