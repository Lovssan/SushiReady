import ProductsModel from "./model.js";
import * as productsView from "./view.js";

const productsModel = new ProductsModel();

//Асинхронная ф-я сначала получает товары из JSON
//потом дальнейшие действия
async function getAndRenderProducts() {
  await productsModel.loadProduct();
  productsView.renderProducts(productsModel.product);
  productsView.numbersProductInCart(productsModel.cart);
}
getAndRenderProducts();

productsView.elements.containers.forEach((container) => {
  container.addEventListener("click", function (event) {
    let action = event.target.dataset.action;
    //Выбор диаметра пиццы и обновление его  стоиммости
    if (
      action === "diametr 25" ||
      action === "diametr 31" ||
      action === "diametr 36"
    ) {
      const productId = +event.target.closest(".container").dataset.id;
      const product = event.target.closest(".container");
      const diametrs = product.querySelectorAll(".diametr");
      for (let i = 0; i < diametrs.length; i++) {
        diametrs[i].classList.remove("current-diametr");
      }
      event.target.classList.add("current-diametr");
      const thisproduct = productsModel.diametrPizza(productId, action);
      productsView.changePrice(thisproduct);
    }
    //Выбор частей для пицц 2 и 4 половинки
    if (
      action === "pieceOfPizza1" ||
      action === "pieceOfPizza2" ||
      action === "pieceOfPizza3" ||
      action === "pieceOfPizza4"
    ) {
      const productId = +event.target.closest(".container").dataset.id;
      const product = productsModel.pieceOfPizza(
        productId,
        event.target.value,
        action
      );
    }

    //Добавление товара в корзину
    if (action === "add-to-cart") {
      //находим ID продукта
      const productId = +event.target.closest(".container").dataset.id;

      //анимация иконки добавления в корзину
      productsView.addToCartAnimation(event.target);
      // получаем товар из productModel по ID
      const product = productsModel.getProduct(productId);
      //Добавляем продукт в массив для корзины
      productsModel.addToCart(product);
      //Выводим и смотрим что по чем
      console.log(productsModel.cart);
      productsView.numbersProductInCart(productsModel.cart);
    }
  });
});
