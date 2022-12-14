export class Section {
  constructor(initialCards, addNewCard, containerSelector) {
    this._renderedItems = initialCards;
    this._renderer = addNewCard;
    this._container = containerSelector;
  }

  // для карточек пацанов
  renderAllItems() {
    this._renderedItems.then((res) => {return res.json});
    this._renderedItems.then((res) => {
      res.forEach((item) => {
        const name = item.name;
        const link = item.link;
        const likes = item.likes.length
        const id = item._id;
        const itemOwnerId = item.owner._id
        this._renderer({name, link, likes, id, itemOwnerId});
      })
    })
  }

  // вставка инстанса Card в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}
