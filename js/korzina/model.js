export default class Model {
  constructor() {
    this.cart = [];
    this.loadCartFromToLocalStorage();
  }

  loadCartFromToLocalStorage() {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      this.cart = data;
    }
  }

  saveCartToLocalSorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
  getTotalCartPrice() {
    let totalPrice = 0;
    this.cart.forEach(function (item) {
      totalPrice = totalPrice + item.price * item.counter;
    });
    return totalPrice;
  }
  updateCounterInCart(id, action) {
    let productInCart;
    productInCart = this.cart.find(function (product) {
      return id === product.id;
    });

    if (action === "plus") {
      ++productInCart.counter;
    }
    if (action === "minus" && productInCart.counter > 0) {
      --productInCart.counter;
    }

    if (productInCart.counter === 0) {
      const index = this.cart.findIndex((item) => {
        return item.id === productInCart.id;
      });
      this.cart.splice(index, 1);
    }
    this.saveCartToLocalSorage();
    return productInCart;
  }
}
