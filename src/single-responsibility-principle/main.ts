import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

console.log(order.orderStatus);

shoppingCart.addItem(new Product("camiseta", 10.2));
shoppingCart.addItem(new Product("caderno", 5));
shoppingCart.addItem(new Product("lapis", 3));

order.checkout();

console.log(order.orderStatus);
