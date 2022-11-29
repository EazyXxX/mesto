export class Section {
  constructor(data, containerSelector) {
    this._renderedItems = data.boys;
    this._renderer = data.addNewCard;
    this._container = containerSelector;
  }

  // для карточек пацанов
  renderAllItems() {
    this._renderedItems.forEach((item) => this._renderer(item.name, item.link));
  }

  // вставка инстанса Card в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}
