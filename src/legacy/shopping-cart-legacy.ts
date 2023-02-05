type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = "open" | "closed";

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho esta vazio");
      return;
    }
    this._orderStatus = "closed";
    this.sendMessage(`Seu pedido com total de ${this.total} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`);
  }

  saveOrder(): void {
    console.log("pedido salvo com sucesso");
  }

  clear(): void {
    console.log("carrinho de compras foi limpo");
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCartLegacy();

console.log(shoppingCart.orderStatus);

shoppingCart.addItem({
  name: "camiseta",
  price: 10.2,
});

shoppingCart.addItem({
  name: "caderno",
  price: 3.2,
});

shoppingCart.addItem({
  name: "lapis",
  price: 1.2,
});
shoppingCart.checkout();

console.log(shoppingCart.orderStatus);
