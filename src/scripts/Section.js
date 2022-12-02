export class Section {
  constructor(boys, addNewCard, containerSelector) {
    this._renderedItems = boys;
    this._renderer = addNewCard;
    console.log(this._renderer)
    this._container = containerSelector;
  }

  // для карточек пацанов
  renderAllItems() {
    this._renderedItems.forEach((item) => {
      const name = item.name
      const subname = item.subname
      this._renderer({name, subname});
    })
  }

  // вставка инстанса Card в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}
