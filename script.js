const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "Pizza z sosem pomidorowym, mozzarellą i świeżą bazyliąith",
    price: 35.99,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
    sizes: [
      { name: "Mała (25cm)", priceMultiplier: 0.8 },
      { name: "Średnia (32cm)", priceMultiplier: 1 },
      { name: "Duża (42cm)", priceMultiplier: 1.3 },
    ],
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Sos pomidorowy, mozzarella i pikantne plasterki pepperoni",
    price: 37.99,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
    sizes: [
      { name: "Mała (25cm)", priceMultiplier: 0.8 },
      { name: "Średnia (32cm)", priceMultiplier: 1 },
      { name: "Duża (42cm)", priceMultiplier: 1.3 },
    ],
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "Sos pomidorowy, mozzarella, papryka, pieczarki i oliwki",
    price: 38.99,
    image:
      "https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
    sizes: [
      { name: "Mała (25cm)", priceMultiplier: 0.8 },
      { name: "Średnia (32cm)", priceMultiplier: 1 },
      { name: "Duża (42cm)", priceMultiplier: 1.3 },
    ],
  },
  {
    id: 4,
    name: "Hawaiian",
    description: "Sos pomidorowy, mozzarella, szynka i ananas",
    price: 36.99,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
    sizes: [
      { name: "Mała (25cm)", priceMultiplier: 0.8 },
      { name: "Średnia (32cm)", priceMultiplier: 1 },
      { name: "Duża (42cm)", priceMultiplier: 1.3 },
    ],
  },
  {
    id: 5,
    name: "Meat Lovers",
    description: "Sos pomidorowy, mozzarella, pepperoni, kiełbasa, boczek i mielona wołowina",
    price: 38.99,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
    sizes: [
      { name: "Mała (25cm)", priceMultiplier: 0.8 },
      { name: "Średnia (32cm)", priceMultiplier: 1 },
      { name: "Duża (42cm)", priceMultiplier: 1.3 },
    ],
  },
  {
    id: 6,
    name: "BBQ Chicken",
    description: "Sos BBQ, sos śmietanowy, mozzarella, grillowany kurczak, czerwona cebula, świeżą bazyliąith",
    price: 37.99,
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
    sizes: [
      { name: "Mała (25cm)", priceMultiplier: 0.8 },
      { name: "Średnia (32cm)", priceMultiplier: 1 },
      { name: "Duża (42cm)", priceMultiplier: 1.3 },
    ],
  },
  {
    id: 7,
    name: "Carbonara",
    description: "Sos śmietanowy, boczek, mozzarella, jajko, mozzarella, oregano",
    price: 37.99,
    image: "https://www.pizzatales.it/wp50/wp-content/uploads/2021/10/la-pizza-alla-carbonara.jpg",
    type: "pizza",
    sizes: [
      { name: "Mała (25cm)", priceMultiplier: 0.8 },
      { name: "Średnia (32cm)", priceMultiplier: 1 },
      { name: "Duża (42cm)", priceMultiplier: 1.3 },
    ],
  },

  {
    id: 9,
    name: "4 cheeze",
    description: "Sos pomidorowy, mozzarella, ser feta, ser pleśniawy ",
    price: 36.99,
    image: "https://xn----8sbtijjjbaolrt0e.com/image/cache/catalog/photo_2020-09-08_09-28-24-637x637.jpg",
    type: "pizza",
    sizes: [
      { name: "Mała (25cm)", priceMultiplier: 0.8 },
      { name: "Średnia (32cm)", priceMultiplier: 1 },
      { name: "Duża (42cm)", priceMultiplier: 1.3 },
    ],
  },
]

const drinks = [
  {
    id: 1,
    name: "Cola",
    description: "Klasyczna cola, orzeźwiający napój gazowany",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 2,
    name: "Sprite",
    description: "Orzeźwiający napój cytrynowo-limonkowy",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 3,
    name: "Woda mineralna",
    description: "Naturalna woda mineralna, gazowana lub niegazowana",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 4,
    name: "Sok pomarańczowy",
    description: "Świeżo wyciskany sok z pomarańczy",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 5,
    name: "Piwo rzemieślnicze",
    description: "Lokalne piwo rzemieślnicze, różne rodzaje",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 6,
    name: "Kawa",
    description: "Świeżo parzona kawa, espresso lub americano",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
]

const appetizers = [
  {
    id: 1,
    name: "Bruschetta",
    description: "Grzanki z pomidorami, czosnkiem, bazylią i oliwą z oliwek",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 2,
    name: "Krążki cebulowe",
    description: "Chrupiące krążki cebulowe podawane z sosem",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 3,
    name: "Frytki",
    description: "Złociste frytki z ziemniaków, podawane z ketchupem",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 4,
    name: "Skrzydełka kurczaka",
    description: "Pikantne skrzydełka kurczaka z sosem BBQ lub Buffalo",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 5,
    name: "Paluszki serowe",
    description: "Chrupiące paluszki z mozzarelli, podawane z sosem marinara",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 6,
    name: "Sałatka Caprese",
    description: "Świeża mozzarella, pomidory i bazylia z oliwą z oliwek",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
]

const sauces = [
  { id: 201, name: "Słodki chili", price: 3.99, type: "sauce", image: "./imag/sos_sweetchili_1000x1000.jpg" },
  { id: 202, name: "Ranch", price: 3.99, type: "sauce", image: "" },
  { id: 203, name: "Pomidorowy", price: 3.99, type: "sauce", image: "" },
  { id: 204, name: "Masełko czosnkowe", price: 3.99, type: "sauce", image: "./imag/5.jpg" },
  { id: 205, name: "BBQ", price: 3.99, type: "sauce", image: "" },
  { id: 206, name: "Miodowo-musztardowy", price: 3.99, type: "sauce", image: "./imag/sos_miodowo-musztardowy_1000x1000.jpg" },
]
const pizzaMenu = document.getElementById("pizza-menu")
const drinksMenu = document.getElementById("drinks-menu")
const appetizersMenu = document.getElementById("appetizers-menu")
const cartIcon = document.getElementById("cart-icon")
const cartContainer = document.getElementById("cart-container")
const cartOverlay = document.getElementById("cart-overlay")
const closeCart = document.getElementById("close-cart")
const cartItems = document.getElementById("cart-items")
const cartCount = document.getElementById("cart-count")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const tabs = document.querySelectorAll(".tab")
const tabContents = document.querySelectorAll(".tab-content")

let cart = []

function displayItems(items, container, itemType) {
  container.innerHTML = ""

  items.forEach((item) => {
    const itemElement = document.createElement("div")
    itemElement.classList.add(`${itemType}-item`)

    // Create the basic item HTML
    let itemHTML = `
      <img src="${item.image}" alt="${item.name}" class="${itemType}-img">
      <div class="${itemType}-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
    `

    // Add size selector for pizzas
    if (itemType === "pizza" && item.sizes) {
      const defaultSizeIndex = 1;
      const defaultSizePrice = (item.price * item.sizes[defaultSizeIndex].priceMultiplier).toFixed(2);

      itemHTML += `
        <div class="size-selector">
          <div class="size-label">Rozmiar:</div>
          <div class="shadcn-select" data-id="${item.id}" data-value="${defaultSizeIndex}">
            <button type="button" class="shadcn-select-trigger" aria-haspopup="listbox" aria-expanded="false">
              <span class="shadcn-select-value">${item.sizes[defaultSizeIndex].name} - ${defaultSizePrice} zł</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shadcn-select-icon"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="shadcn-select-content" role="listbox" hidden>
      `

      item.sizes.forEach((size, index) => {
        const sizePrice = (item.price * size.priceMultiplier).toFixed(2)
        itemHTML += `
              <div class="shadcn-select-item" role="option" aria-selected="${index === defaultSizeIndex}" data-value="${index}">
                <span class="shadcn-select-item-text">${size.name} - ${sizePrice} zł</span>
                <span class="shadcn-select-item-indicator" ${index !== defaultSizeIndex ? 'style="display: none;"' : ''}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
              </div>
        `
      })

      itemHTML += `
            </div>
          </div>
        </div>
        <div class="${itemType}-price-container">
          <div class="${itemType}-price">${defaultSizePrice} zł</div>
        </div>
      `
    } else {
      itemHTML += `<div class="${itemType}-price-container">
                    <div class="${itemType}-price">${item.price.toFixed(2)} zł</div>
                   </div>`
    }

    // Add the add to cart button
    itemHTML += `<button class="add-to-cart" data-id="${item.id}" data-type="${item.type}">
                   <i class="fas fa-shopping-cart"></i> Dodać do koszyka
                 </button>`
    itemHTML += `</div>`

    itemElement.innerHTML = itemHTML
    container.appendChild(itemElement)

    // Add event listeners for shadcn size selectors
    if (itemType === "pizza") {
      const selectWrapper = itemElement.querySelector(`.shadcn-select`)
      if (selectWrapper) {
        initShadcnSelect(selectWrapper)
      }
    }
  })
}

function initShadcnSelect(wrapper) {
  const trigger = wrapper.querySelector('.shadcn-select-trigger');
  const content = wrapper.querySelector('.shadcn-select-content');
  const valueDisplay = wrapper.querySelector('.shadcn-select-value');
  const items = wrapper.querySelectorAll('.shadcn-select-item');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    // Close all other open selects
    document.querySelectorAll('.shadcn-select-trigger[aria-expanded="true"]').forEach(t => {
      if (t !== trigger) {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.hidden = true;
      }
    });

    trigger.setAttribute('aria-expanded', !isExpanded);
    content.hidden = isExpanded;
  });

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const value = item.dataset.value;
      const text = item.querySelector('.shadcn-select-item-text').textContent;

      wrapper.dataset.value = value;
      valueDisplay.textContent = text;

      // Update selected states
      items.forEach(i => {
        i.setAttribute('aria-selected', 'false');
        i.querySelector('.shadcn-select-item-indicator').style.display = 'none';
      });
      item.setAttribute('aria-selected', 'true');
      item.querySelector('.shadcn-select-item-indicator').style.display = 'block';

      // Close dropdown
      trigger.setAttribute('aria-expanded', 'false');
      content.hidden = true;

      // Update pizza price
      updatePizzaPrice(wrapper, value);
    });
  });
}

// Global click to close selects
document.addEventListener('click', () => {
  document.querySelectorAll('.shadcn-select-trigger[aria-expanded="true"]').forEach(t => {
    t.setAttribute('aria-expanded', 'false');
    t.nextElementSibling.hidden = true;
  });
});

function updatePizzaPrice(wrapper, sizeIndexStr) {
  const itemId = Number.parseInt(wrapper.dataset.id)
  const sizeIndex = Number.parseInt(sizeIndexStr)
  const pizza = pizzas.find((p) => p.id === itemId)

  if (pizza && pizza.sizes && pizza.sizes[sizeIndex]) {
    const newPrice = (pizza.price * pizza.sizes[sizeIndex].priceMultiplier).toFixed(2)
    const priceElement = wrapper.closest(".pizza-item").querySelector(".pizza-price")
    if (priceElement) {
      // Add animation class
      priceElement.classList.add("price-update")
      priceElement.textContent = `${newPrice} zł`

      // Remove animation class after animation completes
      setTimeout(() => {
        priceElement.classList.remove("price-update")
      }, 500)
    }
  }
}

// Исправляем функцию добавления в корзину
function addToCart(event) {
  const itemId = Number.parseInt(event.target.dataset.id)
  const itemType = event.target.dataset.type

  let itemsArray
  if (itemType === "pizza") {
    itemsArray = pizzas
  } else if (itemType === "drink") {
    itemsArray = drinks
  } else if (itemType === "appetizer") {
    itemsArray = appetizers
  }

  const item = itemsArray.find((i) => i.id === itemId)
  if (!item) return

  // Handle pizza sizes
  let selectedSize = null
  let finalPrice = item.price
  let sizeName = ""

  if (itemType === "pizza" && item.sizes) {
    const sizeSelect = event.target.closest(".pizza-item").querySelector(".shadcn-select")
    if (sizeSelect) {
      const sizeIndex = Number.parseInt(sizeSelect.dataset.value)
      selectedSize = sizeIndex
      finalPrice = item.price * item.sizes[sizeIndex].priceMultiplier
      sizeName = item.sizes[sizeIndex].name
    }
  }

  // Check if the same item with the same size is already in the cart
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === itemId && cartItem.type === itemType && cartItem.selectedSize === selectedSize,
  )

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity++
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: finalPrice,
      image: item.image,
      type: item.type,
      quantity: 1,
      selectedSize: selectedSize,
      sizeName: sizeName,
    })
  }

  updateCart()
  cartContainer.classList.add("active")
  if (cartOverlay) cartOverlay.classList.add("active")
}

function updateCart() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  cartCount.textContent = totalItems

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Twój koszyk jest pusty</div>'
  } else {
    cartItems.innerHTML = ""

    cart.forEach((item, index) => {
      const cartItemElement = document.createElement("div")
      cartItemElement.classList.add("cart-item")

      let itemName = item.name
      if (item.type === "pizza" && item.sizeName) {
        itemName = `${item.name} - ${item.sizeName}`
      }

      cartItemElement.innerHTML = `
        <img src="${item.image}" alt="${itemName}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-name">${itemName}</div>
          <div class="cart-item-price">${item.price.toFixed(2)} zł</div>
          <div class="cart-item-controls">
            <button class="quantity-btn decrease" data-index="${index}">-</button>
            <span class="cart-item-quantity">${item.quantity}</span>
            <button class="quantity-btn increase" data-index="${index}">+</button>
          </div>
        </div>
        <button class="remove-item" data-index="${index}">
          <i class="fas fa-trash"></i>
        </button>
      `

      cartItems.appendChild(cartItemElement)
    })
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = `${total.toFixed(2)} zł`

  const decreaseButtons = document.querySelectorAll(".decrease")
  const increaseButtons = document.querySelectorAll(".increase")
  const removeButtons = document.querySelectorAll(".remove-item")

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", decreaseQuantity)
  })

  increaseButtons.forEach((button) => {
    button.addEventListener("click", increaseQuantity)
  })

  removeButtons.forEach((button) => {
    button.addEventListener("click", removeItem)
  })
}

function decreaseQuantity(event) {
  const index = Number.parseInt(event.target.dataset.index)

  if (cart[index].quantity > 1) {
    cart[index].quantity--
  } else {
    cart.splice(index, 1)
  }

  updateCart()
}

function increaseQuantity(event) {
  const index = Number.parseInt(event.target.dataset.index)
  cart[index].quantity++
  updateCart()
}

function removeItem(event) {
  const index = Number.parseInt(event.target.closest(".remove-item").dataset.index)
  cart.splice(index, 1)
  updateCart()
}

// Исправляем обработчики событий для вкладок
function switchTab() {
  const tabId = this.getAttribute("data-tab")

  // Удаляем активный класс со всех вкладок и контента
  tabs.forEach((tab) => tab.classList.remove("active"))
  tabContents.forEach((content) => content.classList.remove("active"))

  // Добавляем активный класс выбранной вкладке и соответствующему контенту
  this.classList.add("active")
  document.getElementById(`${tabId}-menu`).classList.add("active")
}

cartIcon.addEventListener("click", () => {
  cartContainer.classList.add("active")
  if (cartOverlay) cartOverlay.classList.add("active")
})

closeCart.addEventListener("click", () => {
  cartContainer.classList.remove("active")
  if (cartOverlay) cartOverlay.classList.remove("active")
})

if (cartOverlay) {
  cartOverlay.addEventListener("click", () => {
    cartContainer.classList.remove("active")
    cartOverlay.classList.remove("active")
  })
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length > 0) {
    window.location.href = "formularz_zamowienia_pizza.html"
    cart = []
    updateCart()
    cartContainer.classList.remove("active")
    if (cartOverlay) cartOverlay.classList.remove("active")
  } else {
    alert("Twój koszyk jest pusty. Proszę dodać produkty przed przejściem do kasy.")
  }
})

// Исправляем функцию инициализации
function init() {
  displayItems(pizzas, pizzaMenu, "pizza")
  displayItems(drinks, drinksMenu, "drink")
  displayItems(appetizers, appetizersMenu, "appetizer")

  // Generate sauces
  const saucesList = document.getElementById("sauces-list")
  if (saucesList) {
    saucesList.innerHTML = ""
    sauces.forEach(sauce => {
      const sauceItem = document.createElement("div")
      sauceItem.className = "sauce-upsell-item"
      sauceItem.innerHTML = `
        <img src="${sauce.image}" alt="${sauce.name}" class="sauce-upsell-img">
        <span>${sauce.name}</span>
        <button class="add-sauce-btn" data-id="${sauce.id}">Dodaj</button>
      `
      saucesList.appendChild(sauceItem)
    })
  }

  // Добавляем обработчики событий для вкладок
  tabs.forEach((tab) => {
    tab.addEventListener("click", switchTab)
  })

  // Добавляем обработчики для кнопок "Добавить в корзину"
  document.addEventListener("click", (event) => {
    const target = event.target

    // Обработка кликов по навигационным ссылкам (табам)
    const navLink = target.closest(".nav-link[data-tab]")
    if (navLink) {
      event.preventDefault()
      const tabId = navLink.getAttribute("data-tab")
      const tabElement = document.querySelector(`.tab[data-tab="${tabId}"]`)
      if (tabElement) {
        tabElement.click()
        tabElement.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }

    // Проверяем, является ли элемент или его родитель кнопкой добавления в корзину
    const addToCartButton = target.closest(".add-to-cart")
    if (addToCartButton) {
      addToCart({ target: addToCartButton })
    }
    // Обработка покупки предложенного соуса
    const addSauceBtn = target.closest(".add-sauce-btn")
    if (addSauceBtn) {
      const sauceId = Number.parseInt(addSauceBtn.dataset.id)
      const sauce = sauces.find(s => s.id === sauceId)
      if (sauce) {
        const existingItem = cart.find(c => c.id === sauceId && c.type === "sauce")
        if (existingItem) {
          existingItem.quantity++
        } else {
          cart.push({
            id: sauce.id,
            name: sauce.name,
            price: sauce.price,
            image: sauce.image,
            type: "sauce",
            quantity: 1,
          })
        }
        updateCart()
      }
    }
  })

  updateCart()
}

document.addEventListener("DOMContentLoaded", init)
