export const elements = {
  chexboxNow: document.querySelector("#now"),
  chexboxNeNow: document.querySelector("#nenow"),
  inputDate: document.querySelector(".date"),
  forms: document.querySelector("#forms"),
  cartContainer: document.querySelector(".pruducts"),
  zeroKorzina: document.querySelector(".zero-korzina"),
  totalPrice: document.querySelector(".total-price"),

  deliveryСost: document.querySelector(".delivery-cost"),
  deliveryСostTitle: document.querySelector(".small"),
};

export function timeZakaz() {
  if (elements.chexboxNeNow.checked) {
    elements.inputDate.classList.remove("none");
  } else {
    elements.inputDate.classList.add("none");
  }
}
export function renderCart(productsArray) {
  productsArray.forEach((item) => {
    if (item.type === "roll") {
      const rollHTML = `<div class="product" data-id="${item.id}">
      <div class= "cart-item__details1">
                            <div class="cart-img">
                                <img src="../Photos/roll/${item.imgSrc}" alt="${item.title}" srcset="" />
                            </div>
                            <div class="product-title">
                                <p class="product-name">${item.title}</p>
                                <p class="product-info1"></p>
                                <p class="product-info2"></p>
                            </div>
                            </div>
                            <div class="cart-item__details">
                                <div class="items">
                                    <div class="items__control" data-action="minus">-</div>
                                    <div class="items__current montesratt" data-counter="">${item.counter}</div>
                                    <div class="items__control" data-action="plus">+</div>
                                </div>

                                <div class="price">
                                    <div class="price__currency montesratt">${item.price} ₽</div>
                                </div>
                            </div>
                        </div>`;
      elements.cartContainer.insertAdjacentHTML("beforeend", rollHTML);
    }

    if (
      item.type === "pizza" &&
      item.title !== "Пицца ассорти из 4 половинок" &&
      item.title !== "Пицца ассорти из 2 половинок"
    ) {
      const pizzaHTML = `<div class="product" data-id="${item.id}">
      <div class= "cart-item__details1">
        <div class="cart-img">
            <img src="../Photos/pizza/${item.imgSrc}" alt="${item.title}" srcset="" />
        </div>
        <div class="product-title">
            <p class="product-name">${item.title} <span class="product-info1">${item.diametr} см<span></p>
    
            <p class="product-info2">

            </p>
        </div>
        </div>
        <div class="cart-item__details">
            <div class="items">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current montesratt" data-counter="">${item.counter}</div>
            <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
            <div class="price__currency montesratt">${item.price} ₽</div>
            </div>
        </div>
        </div>`;
      elements.cartContainer.insertAdjacentHTML("beforeend", pizzaHTML);
    }
    if (item.title === "Пицца ассорти из 4 половинок") {
      const pizzaHTML = `<div class="product" data-id="${item.id}">
        <div class= "cart-item__details1">
        <div class="cart-img">
            <img src="../Photos/pizza/${item.imgSrc}" alt="${item.title}" srcset="" />
        </div>
        <div class="product-title">
            <p class="product-name">${item.title} <span class="product-info1">${item.diametr} см<span></p>
    
           
        </div>
        <p class="product-info2">${item.Select1}, ${item.Select2},${item.Select3}, ${item.Select4}</p>
        </div>
        <div class="cart-item__details">
            <div class="items">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current montesratt" data-counter="">${item.counter}</div>
            <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
            <div class="price__currency montesratt">${item.price} ₽</div>
            </div>
        </div>
        </div>`;
      elements.cartContainer.insertAdjacentHTML("beforeend", pizzaHTML);
    }
    if (item.title === "Пицца ассорти из 2 половинок") {
      const pizzaHTML = `<div class="product" data-id="${item.id}">
      <div class= "cart-item__details1">
        <div class="cart-img">
            <img src="../Photos/pizza/${item.imgSrc}" alt="${item.title}" srcset="" />
        </div>
        <div class="product-title">
            <p class="product-name">${item.title} <span class="product-info1">${item.diametr} см<span></p>
            
            
        </div>
        <p class="product-info2">${item.Select1}, ${item.Select2}</p>
        </div>
        <div class="cart-item__details">
            <div class="items">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current montesratt" data-counter="">${item.counter}</div>
            <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
            <div class="price__currency montesratt">${item.price} ₽</div>
            </div>
        </div>
        </div>`;
      elements.cartContainer.insertAdjacentHTML("beforeend", pizzaHTML);
    }
    if (item.type === "wok") {
      const rollHTML = `<div class="product" data-id="${item.id}">
      <div class= "cart-item__details1">
        <div class="cart-img">
            <img src="../Photos/вок/${item.imgSrc}" alt="${item.title}" srcset="" />
        </div>
        <div class="product-title">
            <p class="product-name">${item.title}</p>
            <p class="product-info1"></p>
            <p class="product-info2">

            </p>
        </div>
        </div>
        <div class="cart-item__details">
            <div class="items">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current montesratt" data-counter="">${item.counter}</div>
            <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
            <div class="price__currency montesratt">${item.price} ₽</div>
            </div>
        </div>
        </div>`;
      elements.cartContainer.insertAdjacentHTML("beforeend", rollHTML);
    }
    if (item.type === "nabor") {
      const rollHTML = `<div class="product" data-id="${item.id}">
      <div class= "cart-item__details1">
        <div class="cart-img">
            <img src="../Photos/Наборы/${item.imgSrc}" alt="${item.title}" srcset="" />
        </div>
        <div class="product-title">
            <p class="product-name">${item.title}</p>
            <p class="product-info1"></p>
            <p class="product-info2">

            </p>
        </div>
        </div>
        <div class="cart-item__details">
            <div class="items">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current montesratt" data-counter="">${item.counter}</div>
            <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
            <div class="price__currency montesratt">${item.price} ₽</div>
            </div>
        </div>
        </div>`;
      elements.cartContainer.insertAdjacentHTML("beforeend", rollHTML);
    }
    if (item.type === "dobavka") {
      const rollHTML = `<div class="product" data-id="${item.id}">
      <div class= "cart-item__details1">
        <div class="cart-img">
            <img src="../Photos/закуски соусы/${item.imgSrc}" alt="${item.title}" srcset="" />
        </div>
        <div class="product-title">
            <p class="product-name">${item.title}</p>
            <p class="product-info1"></p>
            <p class="product-info2">

            </p>
        </div>
        </div>
        <div class="cart-item__details">
            <div class="items">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current montesratt" data-counter="">${item.counter}</div>
            <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
            <div class="price__currency montesratt">${item.price} ₽</div>
            </div>
        </div>
        </div>`;
      elements.cartContainer.insertAdjacentHTML("beforeend", rollHTML);
    }
    toogleCart();
  });
}
function toogleCart() {
  if (elements.cartContainer.children.length > 0) {
    elements.zeroKorzina.classList.add("none");
    elements.forms.classList.remove("none");
  } else {
    elements.zeroKorzina.classList.remove("none");
    elements.forms.classList.add("none");
  }
}

export function updateTotalPrice(price) {
  elements.totalPrice.innerText = new Intl.NumberFormat().format(price);
}

export function updateCounter(product) {
  const productContainer = elements.cartContainer.querySelector(
    `[data-id="${product.id}"`
  );

  const counterElement = productContainer.querySelector("[data-counter]");
  counterElement.innerText = product.counter;
}

export function removeItemFromCart(product) {
  const productContainer = elements.cartContainer.querySelector(
    `[data-id="${product.id}"`
  );
  productContainer.remove();

  toogleCart();
}

export function deliveryCost() {
  if (elements.totalPrice.innerText < 1000) {
    elements.deliveryСost.innerText = "150 ₽";
    elements.deliveryСost.classList.remove("zeroDelivery");
    elements.deliveryСostTitle.classList.remove("none");
  } else {
    elements.deliveryСost.innerText = "0 ₽";
    elements.deliveryСost.classList.add("zeroDelivery");

    elements.deliveryСostTitle.classList.add("none");
  }
}
