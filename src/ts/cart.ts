import IBuyable from "./interface/buyable";

class Cart {
  private _items: IBuyable[] = [];
  id: any;

  add(item: IBuyable): void {
    this._items.push(item);
  }

  get items(): IBuyable[] {
    return [...this._items]
  }

  calcPrice(): number {
    return this._items.reduce((acc, item): number => {
      return item.singleСopy
        ? acc + item.price
        : acc + item.price * item.count
    }, 0)
  }

  calcPriceOfDiscount(): number {
    return this._items.reduce((acc, item): number => {
      return item.singleСopy
        ? acc + item.price  * (1 - item.discount)
        : acc + item.price  * item.count * (1 - item.discount);
    }, 0)
  }

  removeItem(id: number): void {
    this._items = this._items.filter(item => item.id !== id)
  }

  decrement(id: number): void {
    this._items.forEach(item => {
      item.id === id && item.count > 0 && item.count--
    })
  }
}

export default Cart;
