export default class Model {
  constructor() {
    this.product = [];
    this.cart = [];
    this.loadCartFromToLocalStorage();
  }

  //методы для продуктов
  async loadProduct() {
    const response = await fetch("./js/products.json");
    this.product = await response.json();

    for (const producte of this.product) {
      producte.counter = 1;
      if (producte.type === "pizza") {
        producte.diametr = 25;
      }
    }
  }

  getProduct(id) {
    return this.product.find((item) => item.id === id);
  }

  diametrPizza(id, action) {
    const priduct = this.getProduct(id);
    priduct.price = 450;
    if (
      priduct.title === "Пицца фирменная" ||
      priduct.title === "Пицца ассорти из 4 половинок"
    ) {
      priduct.price = 490;
    }
    if (priduct.title === "Пицца ассорти из 2 половинок") {
      priduct.price = 470;
    }

    if (action === "diametr 25") {
      priduct.diametr = 25;
      priduct.price = priduct.price;
    }
    if (action === "diametr 31") {
      priduct.diametr = 31;
      priduct.price = priduct.price + 100;
    }
    if (action === "diametr 36") {
      priduct.diametr = 36;
      priduct.price = priduct.price + 200;
    }

    return priduct;
  }

  pieceOfPizza(id, currentValue, action) {
    const product = this.getProduct(id);
    if (action === "pieceOfPizza1") {
      product.Select1 = currentValue;
    }
    if (action === "pieceOfPizza2") {
      product.Select2 = currentValue;
    }
    if (action === "pieceOfPizza3") {
      product.Select3 = currentValue;
    }
    if (action === "pieceOfPizza4") {
      product.Select4 = currentValue;
    }
    return product;
  }
  loadCartFromToLocalStorage() {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      this.cart = data;
    }
  }
  //методы для корзины
  saveCartToLocalSorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
  addToCart(product) {
    let productInCart;
    productInCart = this.cart.find(function (productInCart) {
      return (
        productInCart.id === product.id &&
        productInCart.Select1 === product.Select1 &&
        productInCart.Select2 === product.Select2 &&
        productInCart.Select3 === product.Select3 &&
        productInCart.Select4 === product.Select4 &&
        productInCart.diametr === product.diametr
      );
    });

    if (productInCart) {
      productInCart.counter = productInCart.counter + product.counter;
    } else {
      this.cart.push(JSON.parse(JSON.stringify(product)));
    }
    this.saveCartToLocalSorage();
  }
}
