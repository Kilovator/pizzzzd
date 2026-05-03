
document.addEventListener("DOMContentLoaded", () => {
  createMobileMenu()
  initMobileEventListeners()

  adjustCartForMobile()
})

function createMobileMenu() {
  const header = document.querySelector("header")
  if (!header) return

  const menuToggle = document.createElement("button")
  menuToggle.className = "mobile-menu-toggle"
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
  menuToggle.setAttribute("aria-label", "Открыть меню")

  header.insertBefore(menuToggle, header.firstChild)

  const mobileMenuHTML = `
    <div class="mobile-menu-overlay"></div>
    <div class="mobile-menu">
      <div class="mobile-menu-header">
        <h3>Меню</h3>
        <button class="close-mobile-menu" aria-label="Закрыть меню">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="mobile-menu-items">
        <a href="index.html" class="mobile-menu-item">
          <i class="fas fa-home"></i> Главная
        </a>
        <a href="#" class="mobile-menu-item" data-tab="pizza">
          <i class="fas fa-pizza-slice"></i> Пицца
        </a>
        <a href="#" class="mobile-menu-item" data-tab="drinks">
          <i class="fas fa-glass-cheers"></i> Напитки
        </a>
        <a href="#" class="mobile-menu-item" data-tab="appetizers">
          <i class="fas fa-cheese"></i> Закуски
        </a>
        <a href="login.html" class="mobile-menu-item">
          <i class="fas fa-sign-in-alt"></i> Вход
        </a>
        <a href="register.html" class="mobile-menu-item">
          <i class="fas fa-user-plus"></i> Регистрация
        </a>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML("beforeend", mobileMenuHTML)
}

function initMobileEventListeners() {
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const closeMenu = document.querySelector(".close-mobile-menu")
  const mobileMenu = document.querySelector(".mobile-menu")
  const overlay = document.querySelector(".mobile-menu-overlay")
  const menuItems = document.querySelectorAll(".mobile-menu-item[data-tab]")

  if (!menuToggle || !closeMenu || !mobileMenu || !overlay) return

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    overlay.classList.add("active")
    document.body.style.overflow = "hidden" 
  })

  closeMenu.addEventListener("click", closeMobileMenu)
  overlay.addEventListener("click", closeMobileMenu)

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const tabId = item.getAttribute("data-tab")

      const tabElement = document.querySelector(`.tab[data-tab="${tabId}"]`)
      if (tabElement) {
        tabElement.click()
      }

      closeMobileMenu()
    })
  })

  function closeMobileMenu() {
    mobileMenu.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = "" 
  }
}

function adjustCartForMobile() {
  const cartContainer = document.getElementById("cart-container")
  const closeCart = document.getElementById("close-cart")

  if (!cartContainer || !closeCart) return

  let startY = 0
  const minSwipeDistance = 60

  cartContainer.addEventListener(
    "touchstart",
    (e) => {
      startY = e.touches[0].clientY
    },
    { passive: true },
  )

  cartContainer.addEventListener(
    "touchend",
    (e) => {
      const endY = e.changedTouches[0].clientY
      const yDiff = endY - startY

      // Swipe down to close (bottom sheet behavior)
      if (yDiff > minSwipeDistance) {
        cartContainer.classList.remove("active")
        const overlay = document.getElementById("cart-overlay")
        if (overlay) overlay.classList.remove("active")
      }
    },
    { passive: true },
  )

  document.addEventListener("click", (e) => {
    // If the target is no longer in the document, it means it was removed
    // (e.g., clicking a button that re-renders the cart), so we shouldn't close the cart.
    if (!document.contains(e.target)) return;

    if (
      cartContainer.classList.contains("active") &&
      !cartContainer.contains(e.target) &&
      !e.target.closest("#cart-icon") &&
      !e.target.closest(".add-to-cart") &&
      !e.target.closest(".add-sauce-btn")
    ) {
      cartContainer.classList.remove("active")
      const overlay = document.getElementById("cart-overlay")
      if (overlay) overlay.classList.remove("active")
    }
  })
}

function adjustOrderFormForMobile() {
  const inputs = document.querySelectorAll("input, select, textarea")

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      setTimeout(() => {
        input.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 300)
    })
  })
}

if (window.location.href.includes("formularz_zamowienia_pizza.html")) {
  document.addEventListener("DOMContentLoaded", adjustOrderFormForMobile)
}
