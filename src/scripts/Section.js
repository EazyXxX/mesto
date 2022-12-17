export class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  //вставка инстанса Card в контейнер
	addItem(element) {
		this._container.prepend(this._renderer(element));
	}

  //отрендерить все карточки и вставить их в контейнер
	renderAllItems(data) {
		data.forEach((item) => {
			this.addItem(item);
		});
	}
}