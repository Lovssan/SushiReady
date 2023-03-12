export const elements = {
  rollsContainer: document.querySelector("#rolls"),
  pizzasContainer: document.querySelector("#pizzas"),
  woksContainer: document.querySelector("#woks"),
  naborsContainer: document.querySelector("#nabors"),
  dobavkyContainer: document.querySelector("#dobavkis"),
  containers: document.querySelectorAll(".container-cards"),

  numbers: document.querySelectorAll(".numbers"),
};

export function renderProducts(productsArray) {
  productsArray.forEach((item) => {
    if (item.type === "roll") {
      const rollHTML = `<div class="card">
                            <div class="container" data-id="${item.id}">
                            <div class="images-container">
                                <img
                                src="./Photos/roll/${item.imgSrc}"
                                alt="филадельфия"
                                class="pictures"
                                />
                            </div>
                            <div class="card-description">
                                <div class="card-text main-h2">
                                <p>${item.title}</p>
                                </div>
                                <div class="card-text">
                                <p>${item.itemsInBox}</p>
                                </div>
                                <div class="card-text-price">
                                <p>${item.price} ₽</p>
                                <button  class="butInBag">
                                    <img data-action = "add-to-cart" class="inbag" src="./Photos/logo/корзина.png" alt="" />
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>`;
      elements.rollsContainer.insertAdjacentHTML("beforeend", rollHTML);
    }

    if (
      item.type === "pizza" &&
      item.title !== "Пицца ассорти из 4 половинок" &&
      item.title !== "Пицца ассорти из 2 половинок"
    ) {
      const pizzaHTML = `<div class="card">
                                <div class="container" data-id="${item.id}">
                                <div class="images-container">
                                    <img
                                    src="./Photos/pizza/${item.imgSrc}"
                                    alt="филадельфия"
                                    class="pictures"
                                    />
                                </div>
                                <div class="card-description">
                                    <div class="card-text main-h2">
                                    <p>${item.title}</p>
                                    </div>
                                    <div class="card-text">
                                    <p>${item.itemsInBox}</p>
                                    </div>
                                    <div class="card-text-info diametrs">
                                    <button  data-action = "diametr 25" class="diametr current-diametr">25см</button>
                                    <button data-action = "diametr 31" class="diametr">31см</button>
                                    <button data-action = "diametr 36" class="diametr">36см</button>
                                    </div>
                                    <div class="card-text-price">
                                    <p class="thisprice">${item.price} ₽</p>
                                    <button  class="butInBag">
                                        <img data-action = "add-to-cart" class="inbag" src="./Photos/logo/корзина.png" alt="" />
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>`;
      elements.pizzasContainer.insertAdjacentHTML("beforeend", pizzaHTML);
    }
    if (item.title === "Пицца ассорти из 4 половинок") {
      const pizzaHTML = `<div class="card">
                                  <div class="container" data-id="${item.id}">
                                  <div class="images-container">
                                      <img
                                      src="./Photos/pizza/${item.imgSrc}"
                                      alt="филадельфия"
                                      class="pictures"
                                      />
                                  </div>
                                  <div class="card-description">
                                      <div class="card-text main-h2">
                                      <p>${item.title}</p>
                                      </div>
                                      <div class="card-text">
                                      <p><!--//--></p>
                                      </div>
                                      <div class="forms">
                  <select  class = "selectPizza" name="pieceOfPizza" data-action="pieceOfPizza1">
                  <option value = "Пеперонни">Пеперонни</option>
                  <option value = "Чикен ранч">Чикен ранч</option>
                  <option value = "Фирменная">Фирменная</option>
                  <option value = "Острая">Острая</option>
                  <option value = "Классическая">Классическая</option>
                  <option value = "Гавайская">Гавайская</option>
                  <option value = "Барбекю">Барбекю</option>
              </select>
              <select class = "selectPizza" name="pieceOfPizza" data-action="pieceOfPizza2">
                  <option value = "Пеперонни">Пеперонни</option>
                  <option value = "Чикен ранч">Чикен ранч</option>
                  <option value = "Фирменная">Фирменная</option>
                  <option value = "Острая">Острая</option>
                  <option value = "Классическая">Классическая</option>
                  <option value = "Гавайская">Гавайская</option>
                  <option value = "Барбекю">Барбекю</option>
              </select>
              <select  class = "selectPizza" name="pieceOfPizza" data-action="pieceOfPizza3">
                                              <option value = "Пеперонни">Пеперонни</option>
                                              <option value = "Чикен ранч">Чикен ранч</option>
                                              <option value = "Фирменная">Фирменная</option>
                                              <option value = "Острая">Острая</option>
                                              <option value = "Классическая">Классическая</option>
                                              <option value = "Гавайская">Гавайская</option>
                                              <option value = "Барбекю">Барбекю</option>
                                          </select>
                                          <select class = "selectPizza" name="pieceOfPizza" data-action="pieceOfPizza4">
                                              <option value = "Пеперонни">Пеперонни</option>
                                              <option value = "Чикен ранч">Чикен ранч</option>
                                              <option value = "Фирменная">Фирменная</option>
                                              <option value = "Острая">Острая</option>
                                              <option value = "Классическая">Классическая</option>
                                              <option value = "Гавайская">Гавайская</option>
                                              <option value = "Барбекю">Барбекю</option>
                                          </select>
                </div>
                                      <div class="card-text-info diametrs">
                                      <button data-action = "diametr 25" class="diametr current-diametr">25см</button>
                                      <button data-action = "diametr 31" class="diametr">31см</button>
                                      <button data-action = "diametr 36" class="diametr">36см</button>
                                      </div>
                                      <div class="card-text-price">
                                      <p class="thisprice">${item.price} ₽</p>
                                      <button  class="butInBag">
                                          <img data-action = "add-to-cart" class="inbag" src="./Photos/logo/корзина.png" alt="" />
                                      </button>
                                      </div>
                                  </div>
                                  </div>
                              </div>`;
      elements.pizzasContainer.insertAdjacentHTML("beforeend", pizzaHTML);
    }
    if (item.title === "Пицца ассорти из 2 половинок") {
      const pizzaHTML = `<div class="card">
                                    <div class="container" data-id="${item.id}">
                                    <div class="images-container">
                                        <img
                                        src="./Photos/pizza/${item.imgSrc}"
                                        alt="филадельфия"
                                        class="pictures"
                                        />
                                    </div>
                                    <div class="card-description">
                                        <div class="card-text main-h2">
                                        <p>${item.title}</p>
                                        </div>
                                        <div class="card-text">
                                        <p><!--//--></p>
                                        </div>
                                        <div class="forms">
                                          <select  class = "selectPizza" name="pieceOfPizza" data-action="pieceOfPizza1">
                                              <option value = "Пеперонни">Пеперонни</option>
                                              <option value = "Чикен ранч">Чикен ранч</option>
                                              <option value = "Фирменная">Фирменная</option>
                                              <option value = "Острая">Острая</option>
                                              <option value = "Классическая">Классическая</option>
                                              <option value = "Гавайская">Гавайская</option>
                                              <option value = "Барбекю">Барбекю</option>
                                          </select>
                                          <select class = "selectPizza" name="pieceOfPizza" data-action="pieceOfPizza2">
                                              <option value = "Пеперонни">Пеперонни</option>
                                              <option value = "Чикен ранч">Чикен ранч</option>
                                              <option value = "Фирменная">Фирменная</option>
                                              <option value = "Острая">Острая</option>
                                              <option value = "Классическая">Классическая</option>
                                              <option value = "Гавайская">Гавайская</option>
                                              <option value = "Барбекю">Барбекю</option>
                                          </select>
                    
                    
                                        </div>
                                        <div class="card-text-info diametrs">
                                        <button data-action = "diametr 25" class="diametr current-diametr">25см</button>
                                        <button data-action = "diametr 31" class="diametr">31см</button>
                                        <button data-action = "diametr 36" class="diametr">36см</button>
                                        </div>
                                        <div class="card-text-price">
                                        <p class="thisprice">${item.price} ₽</p>
                                        <button  class="butInBag">
                                            <img data-action = "add-to-cart" class="inbag" src="./Photos/logo/корзина.png" alt="" />
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>`;
      elements.pizzasContainer.insertAdjacentHTML("beforeend", pizzaHTML);
    }
    if (item.type === "wok") {
      const wokHTML = `<div class="card">
                            <div class="container" data-id="${item.id}">
                            <div class="images-container">
                                <img
                                src="./Photos/вок/${item.imgSrc}"
                                alt="филадельфия"
                                class="pictures"
                                />
                            </div>
                            <div class="card-description">
                                <div class="card-text main-h2">
                                <p>${item.title}</p>
                                </div>
                                <div class="card-text">
                                <p>${item.itemsInBox}</p>
                                </div>
                                <div class="card-text-price">
                                <p>${item.price} ₽</p>
                                <button  class="butInBag">
                                    <img data-action = "add-to-cart" class="inbag" src="./Photos/logo/корзина.png" alt="" />
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>`;
      elements.woksContainer.insertAdjacentHTML("beforeend", wokHTML);
    }
    if (item.type === "nabor") {
      const naborHTML = `<div class="card">
                              <div class="container" data-id="${item.id}">
                              <div class="images-container">
                                  <img
                                  src="./Photos/Наборы/${item.imgSrc}"
                                  alt="филадельфия"
                                  class="pictures"
                                  />
                              </div>
                              <div class="card-description">
                                  <div class="card-text main-h2">
                                  <p>${item.title}</p>
                                  </div>
                                  <div class="card-text">
                                  <p>${item.itemsInBox}</p>
                                  </div>
                                  <div class="card-text-price">
                                  <p>${item.price} ₽</p>
                                  <button  class="butInBag">
                                      <img data-action = "add-to-cart" class="inbag" src="./Photos/logo/корзина.png" alt="" />
                                  </button>
                                  </div>
                              </div>
                              </div>
                          </div>`;
      elements.naborsContainer.insertAdjacentHTML("beforeend", naborHTML);
    }
    if (item.type === "dobavka") {
      const dobavkaHTML = `<div class="card">
                                <div class="container" data-id="${item.id}">
                                <div class="images-container">
                                    <img
                                    src="./Photos/закуски соусы/${item.imgSrc}"
                                    alt="филадельфия"
                                    class="pictures"
                                    />
                                </div>
                                <div class="card-description">
                                    <div class="card-text main-h2">
                                    <p>${item.title}</p>
                                    </div>
                                    <div class="card-text">
                                    <p>${item.itemsInBox}</p>
                                    </div>
                                    <div class="card-text-price">
                                    <p>${item.price} ₽</p>
                                    <button  class="butInBag">
                                        <img data-action = "add-to-cart" class="inbag" src="./Photos/logo/корзина.png" alt="" />
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>`;
      elements.dobavkyContainer.insertAdjacentHTML("beforeend", dobavkaHTML);
    }
  });
}

export function addToCartAnimation(item) {
  item.src = "./Photos/logo/корзина добавление.png";

  setTimeout(() => {
    item.src = "./Photos/logo/корзина.png";
  }, 900);
}

export function changePrice(product) {
  const priceWrapper = document.querySelector(`[data-id="${product.id}"]`);
  const priceElement = priceWrapper.querySelector(".thisprice");

  priceElement.innerText = `${product.price}  ₽`;
}

export function numbersProductInCart(array) {
  elements.numbers[0].innerText = array.length;
  elements.numbers[1].innerText = array.length;
}
