const productsData = [{
        name: "Nike Air Force 1",
        brand: "NIKE",
        sub: "NAM",
        price: 2200000,
        size: 40,
        src: "/img/ar1.webp",
        tags: ["NEW", "HOT"],
        desc: "Mô tả Nike Air Force 1...",
    },
    {
        name: "Nike Jordan 1",
        brand: "JORDAN",
        sub: "NAM",
        price: 3500000,
        size: 42,
        src: "/img/jodan1.webp",
        tags: ["LIMITED", "HOT"],
        desc: "Mô tả Jordan 1...",
    },
    {
        name: "Adidas Superstar",
        brand: "ADIDAS",
        sub: "NU",
        price: 2000000,
        size: 38,
        src: "/img/adidas superstar.webp",
        tags: ["SALE", "NEW"],
        desc: "Mô tả Adidas Superstar...",
    },
    {
        name: "Yeezy Boost 350",
        brand: "YEEZY",
        sub: "NAM",
        price: 5000000,
        size: 40,
        src: "/img/Yeezy 350 V2.jpg",
        tags: ["HOT"],
        desc: "Mô tả Yeezy Boost 350...",
    },
    {
        name: "Nike Zoom",
        brand: "NIKE",
        sub: "NAM",
        price: 2800000,
        size: 39,
        src: "/img/NIKE+AIR+ZOOM+PEGASUS+40+(GS).png",
        tags: [],
        desc: "Mô tả Nike Zoom...",
    },
    {
        name: "Tennis Court Pro",
        brand: "GIÀY TENNIS/PICKLEBALL",
        sub: "TENNIS",
        price: 1800000,
        size: 37,
        src: "/img/Tennis Court Pro.png",
        tags: ["NEW"],
        desc: "Mô tả Tennis Court Pro...",
    },
    {
        name: "Pickleball X1",
        brand: "GIÀY TENNIS/PICKLEBALL",
        sub: "PICKLEBALL",
        price: 2100000,
        size: 36,
        src: "/img/pickleball shoes.webp",
        tags: ["SALE"],
        desc: "Mô tả Pickleball X1...",
    },
    {
        name: "Vans Old Skool",
        brand: "OTHER BRAND",
        sub: "NAM",
        price: 1700000,
        size: 41,
        src: "/img/Vans Old Skool.jpg",
        tags: ["HOT"],
        desc: "Mô tả Vans Old Skool...",
    },
    {
        name: "Converse 70s",
        brand: "OTHER BRAND",
        sub: "NU",
        price: 1600000,
        size: 39,
        src: "/img/Converse 70s.webp",
        tags: [],
        desc: "Mô tả Converse 70s...",
    },
    {
        name: "Nike Sale 50%",
        brand: "SALE",
        sub: "NAM",
        price: 999000,
        size: 38,
        src: "/img/Nike Sale 50%.png",
        tags: ["SALE"],
        desc: "Mô tả Nike Sale 50%...",
    },
    {
        name: "Adidas Sale 30%",
        brand: "SALE",
        sub: "NU",
        price: 1399000,
        size: 40,
        src: "/img/Adidas Sale 30%.jpg",
        tags: ["SALE"],
        desc: "Mô tả Adidas Sale 30%...",
    },
    {
        name: "Nike Air Max 90",
        brand: "NIKE",
        sub: "NAM",
        price: 2500000,
        size: 41,
        src: "/img/Nike Air Max 90.jpg",
        tags: ["NEW"],
        desc: "Mô tả Nike Air Max 90...",
    },
    {
        name: "Nike React Infinity Run",
        brand: "NIKE",
        sub: "NAM",
        price: 3000000,
        size: 42,
        src: "/img/Nike React Infinity Run.jpg",
        tags: ["NEW"],
        desc: "Mô tả Nike React Infinity Run...",
    },
    {
        name: "Adidas Ultraboost 22",
        brand: "ADIDAS",
        sub: "NAM",
        price: 3500000,
        size: 42,
        src: "/img/Adidas Ultraboost 22.jpg",
        tags: ["NEW"],
        desc: "Mô tả Adidas Ultraboost 22...",
    },
    {
        name: "Adidas NMD R1",
        brand: "ADIDAS",
        sub: "NU",
        price: 2500000,
        size: 38,
        src: "/img/Adidas NMD R1.jpg",
        tags: ["SALE"],
        desc: "Mô tả Adidas NMD R1...",
    },
    {
        name: "Jordan Air Jordan XXX",
        brand: "JORDAN",
        sub: "NAM",
        price: 4000000,
        size: 43,
        src: "/img/Jordan Air Jordan XXX.jpg",
        tags: ["LIMITED"],
        desc: "Mô tả Jordan Air Jordan XXX...",
    },
    {
        name: "Yeezy 350 V2",
        brand: "YEEZY",
        sub: "NAM",
        price: 5500000,
        size: 41,
        src: "/img/Yeezy 350 V2.jpg",
        tags: ["HOT"],
        desc: "Mô tả Yeezy 350 V2...",
    },
    {
        name: "Puma RS-X",
        brand: "OTHER BRAND",
        sub: "NAM",
        price: 1800000,
        size: 40,
        src: "/img/Puma RS-X.jpg",
        tags: ["NEW"],
        desc: "Mô tả Puma RS-X...",
    },
    {
        name: "Reebok Classic",
        brand: "OTHER BRAND",
        sub: "NU",
        price: 1500000,
        size: 38,
        src: "/img/Reebok Classic.jpg",
        tags: ["SALE"],
        desc: "Mô tả Reebok Classic...",
    },
]

// Replace the cart variable declaration with this to ensure cart data persists between pages
let cart = JSON.parse(localStorage.getItem("cart")) || []
const paymentSource = ""
let currentBuyNowProduct = null
let lastSearchResults = []

// Function to check if user is logged in
function isLoggedIn() {
    return !!(sessionStorage.getItem("username") || localStorage.getItem("username"))
}

// Add this function after the isLoggedIn function
function validatePhoneNumber(phone) {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, "")
        // Check if the phone number has 10-11 digits (standard for Vietnamese phone numbers)
    return cleanPhone.length >= 10 && cleanPhone.length <= 11
}

// Function to redirect to login page
function redirectToLogin(returnUrl) {
    const redirectUrl = returnUrl || window.location.pathname
    window.location.href = `login.html?redirect=${encodeURIComponent(redirectUrl)}`
}

// Replace the updateCartCount function with this
function updateCartCount() {
    const cartCount = document.getElementById("cartCount")
    if (cartCount) {
        cartCount.textContent = cart.length
    }
    // Save cart to localStorage whenever it's updated
    localStorage.setItem("cart", JSON.stringify(cart))
}

function clearActiveNav() {
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active")
    })
}

function calculateCartTotal() {
    let total = 0
    cart.forEach((itemName) => {
        const p = productsData.find((p) => p.name === itemName)
        if (p) total += p.price
    })
    return total
}

// Replace the renderCart function with this improved version
function renderCart() {
    clearActiveNav()
    const cartItemsEl = document.getElementById("cartItems")
    if (!cartItemsEl) return

    // Get cart from localStorage to ensure we have the latest data
    cart = JSON.parse(localStorage.getItem("cart")) || []

    cartItemsEl.innerHTML = ""
    if (cart.length === 0) {
        cartItemsEl.innerHTML = "<li class='list-group-item'>Giỏ hàng trống</li>"
    } else {
        // Group items by name for better display
        const groupedCart = {}
        cart.forEach((itemName) => {
            groupedCart[itemName] = (groupedCart[itemName] || 0) + 1
        })

        // Create list items for each product
        Object.keys(groupedCart).forEach((itemName) => {
            const product = productsData.find((p) => p.name === itemName)
            if (product) {
                const quantity = groupedCart[itemName]
                const li = document.createElement("li")
                li.className = "list-group-item d-flex justify-content-between align-items-center"
                li.innerHTML = `
            <div>
              <span class="fw-bold">${itemName}</span>
              <span class="ms-2 badge bg-secondary">${quantity}x</span>
              <div class="text-muted">${product.price.toLocaleString("vi-VN")}₫ / sản phẩm</div>
            </div>
            <button class="btn btn-sm btn-danger remove-btn" data-name="${itemName}">Xóa</button>`
                cartItemsEl.appendChild(li)
            }
        })
    }

    const cartTotal = document.getElementById("cartTotal")
    if (cartTotal) {
        const total = calculateCartTotal()
        cartTotal.textContent = total.toLocaleString("vi-VN") + "₫"
    }

    document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation()
            const name = this.getAttribute("data-name")
            removeAllFromCart(name)
        })
    })
}

function removeAllFromCart(name) {
    cart = cart.filter((item) => item !== name)
    updateCartCount()
    renderCart()
}

function removeFromCart(index) {
    cart.splice(index, 1)
    updateCartCount()
    renderCart()
}

function createProductCard(product) {
    let tagsHtml = ""
    if (product.tags && product.tags.length > 0) {
        tagsHtml = product.tags.map((tag) => `<span class="badge bg-warning text-dark me-1">${tag}</span>`).join("")
    }
    return `
              <div class="col-md-3 product-card" data-product="${product.name}">
                  <div class="card mb-4">
                      <img src="${product.src}" class="card-img-top" alt="${product.name}">
                      <div class="card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <div class="mb-2">${tagsHtml}</div>
                          <p class="card-text text-danger fw-bold">
                              ${product.price.toLocaleString("vi-VN")}₫
                          </p>
                      </div>
                  </div>
              </div>
          `
}

function attachDetailEvents(containerId) {
    const container = document.getElementById(containerId)
    if (!container) return

    container.querySelectorAll(".product-card").forEach((card) => {
        card.addEventListener("click", function() {
            const productName = this.getAttribute("data-product")
            localStorage.setItem("selectedProduct", productName)
            window.location.href = "product-detail.html"
        })
    })
}

function renderProductsByBrand(brand = null) {
    const productContainer = document.getElementById("productContainer")
    if (!productContainer) return

    productContainer.innerHTML = ""
    const filtered = brand ? productsData.filter((p) => p.brand === brand) : productsData
    const html = filtered.map((p) => createProductCard(p)).join("")
    productContainer.innerHTML = html
    attachDetailEvents("productContainer")
}

function searchProducts(keyword) {
    clearActiveNav()
    const productContainer = document.getElementById("productContainer")
    if (!productContainer) return

    const filtered = productsData.filter((p) => p.name.toLowerCase().includes(keyword.toLowerCase()))
    lastSearchResults = filtered
    productContainer.innerHTML = ""
    if (filtered.length === 0) {
        productContainer.innerHTML = "<p>Không tìm thấy sản phẩm phù hợp.</p>"
        return
    }
    const html = filtered.map((p) => createProductCard(p)).join("")
    productContainer.innerHTML = html
    attachDetailEvents("productContainer")
}

function renderExtraSections() {
    const highlightContainer = document.getElementById("highlightContainer")
    const saleContainer = document.getElementById("saleContainer")
    const accessoryContainer = document.getElementById("accessoryContainer")

    if (highlightContainer) {
        const highlightData = productsData.filter((p) => p.tags && (p.tags.includes("HOT") || p.tags.includes("NEW")))
        highlightContainer.innerHTML = highlightData.map((p) => createProductCard(p)).join("")
        attachDetailEvents("highlightContainer")
    }

    if (saleContainer) {
        const saleData = productsData.filter((p) => p.tags && p.tags.includes("SALE"))
        saleContainer.innerHTML = saleData.map((p) => createProductCard(p)).join("")
        attachDetailEvents("saleContainer")
    }

    if (accessoryContainer) {
        const accessoryData = productsData.filter((p) => p.brand === "OTHER BRAND")
        accessoryContainer.innerHTML = accessoryData.map((p) => createProductCard(p)).join("")
        attachDetailEvents("accessoryContainer")
    }
}

function applyAdvancedFilterOnSearchResults() {
    const productContainer = document.getElementById("productContainer")
    if (!productContainer) return

    productContainer.innerHTML = ""
    const sizeValue = document.getElementById("sizeFilter").value
    const priceValue = document.getElementById("priceFilter").value
    const sortValue = document.getElementById("sortFilter").value
    let filtered = [...lastSearchResults]

    if (sizeValue) {
        const sizeNum = Number.parseInt(sizeValue, 10)
        filtered = filtered.filter((p) => p.size === sizeNum)
    }

    if (priceValue === "under1m") {
        filtered = filtered.filter((p) => p.price < 1000000)
    } else if (priceValue === "1to2m") {
        filtered = filtered.filter((p) => p.price >= 1000000 && p.price <= 2000000)
    } else if (priceValue === "over2m") {
        filtered = filtered.filter((p) => p.price > 2000000)
    }

    if (sortValue === "asc") {
        filtered.sort((a, b) => a.price - b.price)
    } else if (sortValue === "desc") {
        filtered.sort((a, b) => b.price - a.price)
    }

    if (filtered.length === 0) {
        productContainer.innerHTML = "<p>Không tìm thấy sản phẩm phù hợp.</p>"
        return
    }

    const html = filtered.map((p) => createProductCard(p)).join("")
    productContainer.innerHTML = html
    attachDetailEvents("productContainer")
}

function filterProducts(brand, sub) {
    const brandLower = brand ? brand.toLowerCase() : ""
    const subLower = sub ? sub.toLowerCase() : ""

    // Set active state on the navigation link
    clearActiveNav()
    const clickedLink = document.querySelector(`.category-link[data-brand="${brand}"]${sub ? `[data-sub="${sub}"]` : ""}`)
    if (clickedLink) {
      clickedLink.classList.add("active")
    }
  
    // Filter products
    let filtered = productsData.filter((p) => {
      return p.brand.toLowerCase() === brandLower
    })
    if (subLower) {
      filtered = filtered.filter((p) => {
        return p.sub && p.sub.toLowerCase() === subLower
      })
    }
  
    // Save filtered products to localStorage
    localStorage.setItem("selectedBrand", brand)
    localStorage.setItem("selectedSub", sub || "")
    localStorage.setItem("filteredProducts", JSON.stringify(filtered))
  
    // Navigate to index page with filter parameter
    window.location.href = "index.html?filter=true"
  }
  
  function setActiveNavLink(brand, sub) {
    clearActiveNav()
  
    // First try to find the exact match with brand and sub
    if (brand && sub) {
      const exactLink = document.querySelector(`.category-link[data-brand="${brand}"][data-sub="${sub}"]`)
      if (exactLink) {
        exactLink.classList.add("active")
        return
      }
    }
  
    // If no exact match or only brand provided, highlight the brand link
    if (brand) {
      const brandLinks = document.querySelectorAll(`.category-link[data-brand="${brand}"]`)
      if (brandLinks.length > 0) {
        // Find the main category link (the one without a sub attribute)
        const mainBrandLink = Array.from(brandLinks).find((link) => !link.getAttribute("data-sub"))
        if (mainBrandLink) {
          mainBrandLink.classList.add("active")
        }
      }
    }
  }
  
  // Add this function to ensure cart data is properly saved when adding items
  function addToCart(productName, quantity = 1) {
    // Check if user is logged in
    if (!isLoggedIn()) {
      // Redirect to login page
      redirectToLogin(window.location.pathname)
      return false
    }
  
    // Get the latest cart data
    cart = JSON.parse(localStorage.getItem("cart")) || []
  
    // Add the product to cart
    for (let i = 0; i < quantity; i++) {
      cart.push(productName)
    }
  
    // Update cart count and save to localStorage
    updateCartCount()
    return true
  }
  
  // Update the showProductDetail function to use the new addToCart function
  function showProductDetail(product) {
    const detailProductImage = document.getElementById("detailProductImage")
    const detailProductName = document.getElementById("detailProductName")
    const detailProductPrice = document.getElementById("detailProductPrice")
    const detailProductSizeSelect = document.getElementById("detailProductSizeSelect")
    const detailProductQty = document.getElementById("detailProductQty")
    const detailProductDesc = document.getElementById("detailProductDesc")
    const detailAddToCartBtn = document.getElementById("detailAddToCartBtn")
    const detailBuyNowBtn = document.getElementById("detailBuyNowBtn")
  
    if (
      !detailProductImage ||
      !detailProductName ||
      !detailProductPrice ||
      !detailProductSizeSelect ||
      !detailProductQty ||
      !detailProductDesc ||
      !detailAddToCartBtn ||
      !detailBuyNowBtn
    )
      return
  
    detailProductImage.src = product.src
    detailProductName.textContent = product.name
    detailProductPrice.textContent = product.price.toLocaleString("vi-VN") + "₫"
  
    detailProductSizeSelect.innerHTML = ""
    const possibleSizes = [product.size, product.size + 1, product.size - 1].filter((s) => s > 0)
    possibleSizes.forEach((sz) => {
      const opt = document.createElement("option")
      opt.value = sz
      opt.textContent = sz
      detailProductSizeSelect.appendChild(opt)
    })
  
    detailProductQty.value = 1
    const desc = product.desc ? product.desc : "Không có mô tả..."
    detailProductDesc.textContent = desc
  
    detailAddToCartBtn.onclick = () => {
      const qty = Number.parseInt(detailProductQty.value, 10) || 1
  
      // Check if user is logged in before adding to cart
      if (!isLoggedIn()) {
        redirectToLogin("product-detail.html")
        return
      }
  
      if (addToCart(product.name, qty)) {
        alert(product.name + " (x" + qty + ") đã được thêm vào giỏ hàng!")
      }
    }
  
    detailBuyNowBtn.onclick = () => {
      const qty = Number.parseInt(detailProductQty.value, 10) || 1
  
      // Check if user is logged in before buying
      if (!isLoggedIn()) {
        redirectToLogin("product-detail.html")
        return
      }
  
      currentBuyNowProduct = { ...product, quantity: qty }
      localStorage.setItem("currentBuyNowProduct", JSON.stringify(currentBuyNowProduct))
      window.location.href = "checkout.html?source=buyNow"
    }
  }
  
  function toggleQRCode() {
    const paymentMethod = document.getElementById("paymentMethod")
    const qrCodeSection = document.getElementById("qrCodeSection")
  
    if (paymentMethod && qrCodeSection) {
      qrCodeSection.style.display = paymentMethod.value === "transfer" ? "block" : "none"
    }
  }
  
  // Modify the hienHoaDon function to validate phone number
  function hienHoaDon() {
    const customerName = document.getElementById("customerName")
    const customerPhone = document.getElementById("customerPhone")
    const paymentMethod = document.getElementById("paymentMethod")
    const invoiceContent = document.getElementById("invoiceContent")
  
    if (!customerName || !customerPhone || !paymentMethod || !invoiceContent) return
  
    const name = customerName.value.trim()
    const phone = customerPhone.value.trim()
    const method = paymentMethod.value
  
    // Validate phone number
    if (!validatePhoneNumber(phone)) {
      alert("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại có 10-11 chữ số.")
      customerPhone.focus()
      return
    }
  
    let invoiceHTML = `
          <h5>🧾 HÓA ĐƠN MUA HÀNG</h5>
          <h6 class="mt-3"> Cửa hàng: <strong>TYNISSHOES.VN</strong></h6>
          <p> Địa chỉ: 12 nguyenvanbao - P5 - Gò Vấp - TPHCM</p>
          <p> Hotline: 0908 408 828
  </p>
          <p> Website: tynisshoes.vn</p>
          <p><strong> Khách hàng:</strong> ${name}</p>
          <p><strong> SĐT:</strong> ${phone}</p>
          <p><strong>Thanh toán:</strong> ${method === "cash" ? "Tiền mặt" : "Chuyển khoản"}</p>
          <hr>
          <h6> Sản phẩm đã mua:</h6>
      `
  
    const urlParams = new URLSearchParams(window.location.search)
    const source = urlParams.get("source")
  
    if (source === "cart") {
      const groupedCart = {}
      cart.forEach((item) => {
        groupedCart[item] = (groupedCart[item] || 0) + 1
      })
  
      for (const name in groupedCart) {
        const quantity = groupedCart[name]
        const product = productsData.find((p) => p.name === name)
        if (product) {
          invoiceHTML += `
                      <div class="mb-2">
                          <p class="mb-0"><strong>${product.name}</strong></p>
                          <p class="mb-0">Số lượng: ${quantity}</p>
                          <p class="mb-0">Đơn giá: ${product.price.toLocaleString("vi-VN")}₫</p>
                          <p class="mb-1">Tổng: ${(product.price * quantity).toLocaleString("vi-VN")}₫</p>
                      </div>
                      <hr>
                  `
        }
      }
    } else {
      // Trường hợp "Mua Ngay"
      const product = JSON.parse(localStorage.getItem("currentBuyNowProduct"))
      if (product) {
        invoiceHTML += `
                  <div class="mb-2">
                      <p class="mb-0"><strong>${product.name}</strong></p>
                      <p class="mb-0">Số lượng: ${product.quantity}</p>
                      <p class="mb-0">Đơn giá: ${product.price.toLocaleString("vi-VN")}₫</p>
                      <p class="mb-1">Tổng: ${(product.price * product.quantity).toLocaleString("vi-VN")}₫</p>
                  </div>
                  <hr>
              `
      }
    }
  
    invoiceContent.innerHTML = invoiceHTML
  
    // Show the invoice modal
    const invoiceModalElement = document.getElementById("invoiceModal")
    // Declare bootstrap here
    const bootstrap = window.bootstrap
    const invoiceModal = new bootstrap.Modal(invoiceModalElement)
    invoiceModal.show()
  
    // Xóa giỏ hàng nếu thanh toán từ cart
    if (source === "cart") {
      cart = [] // Xóa toàn bộ giỏ hàng
      updateCartCount() // Cập nhật số lượng giỏ hàng
    } else {
      // Trường hợp "Mua Ngay"
      localStorage.removeItem("currentBuyNowProduct")
    }
  }
  
  // Add function to handle user registration
  function handleRegister() {
    const username = document.getElementById("registerUsername").value
    const password = document.getElementById("registerPassword").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const errorMessage = document.getElementById("registerErrorMessage")
  
    if (!username || !password || !confirmPassword) {
      if (errorMessage) {
        errorMessage.textContent = "Vui lòng nhập đầy đủ thông tin đăng ký."
        errorMessage.style.display = "block"
      }
      return
    }
  
    // Username validation: at least 3 characters, no special characters
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/
    if (!usernameRegex.test(username)) {
      if (errorMessage) {
        errorMessage.textContent = "Tên đăng nhập phải có ít nhất 3 ký tự và không chứa ký tự đặc biệt."
        errorMessage.style.display = "block"
      }
      return
    }
  
    // Password validation: must be 6 digits
    const passwordRegex = /^\d{6}$/
    if (!passwordRegex.test(password)) {
      if (errorMessage) {
        errorMessage.textContent = "Mật khẩu phải có đúng 6 chữ số."
        errorMessage.style.display = "block"
      }
      return
    }
  
    // Confirm password validation
    if (password !== confirmPassword) {
      if (errorMessage) {
        errorMessage.textContent = "Mật khẩu nhập lại không khớp."
        errorMessage.style.display = "block"
      }
      return
    }
  
    // Check if username already exists
    const users = JSON.parse(localStorage.getItem("users")) || {}
    if (users[username]) {
      if (errorMessage) {
        errorMessage.textContent = "Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác."
        errorMessage.style.display = "block"
      }
      return
    }
  
    // Save user to localStorage
    users[username] = password
    localStorage.setItem("users", JSON.stringify(users))
  
    // Registration successful
    alert("Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.")
    window.location.href = "login.html"
  }
  
  function handleLogin() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const rememberMe = document.getElementById("rememberMe").checked
    const errorMessage = document.getElementById("errorMessage")
  
    if (!username || !password) {
      if (errorMessage) {
        errorMessage.textContent = "Vui lòng nhập đầy đủ thông tin đăng nhập."
        errorMessage.style.display = "block"
      }
      return
    }
  
    // Username validation: at least 3 characters, no special characters
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/
    if (!usernameRegex.test(username)) {
      if (errorMessage) {
        errorMessage.textContent = "Tên đăng nhập phải có ít nhất 3 ký tự và không chứa ký tự đặc biệt."
        errorMessage.style.display = "block"
      }
      return
    }
  
    // Get registered users
    const users = JSON.parse(localStorage.getItem("users")) || {}
  
    // Check if user exists and password matches
    if (!users[username] || users[username] !== password) {
      if (errorMessage) {
        errorMessage.textContent = "Tên đăng nhập hoặc mật khẩu không đúng."
        errorMessage.style.display = "block"
      }
      return
    }
  
    // Login successful
    sessionStorage.setItem("username", username)
    if (rememberMe) {
      localStorage.setItem("username", username)
    }
  
    const loginModal = document.getElementById("loginModal")
    if (loginModal) {
      // Get the Bootstrap modal instance
      const bootstrap = window.bootstrap
  
      const modalInstance = bootstrap.Modal.getInstance(loginModal)
  
      // Check if the modal instance exists before hiding it
      if (modalInstance) {
        modalInstance.hide()
      }
    }
  
    updateLoginStatus()
  
    // Check if there's a redirect parameter
    const urlParams = new URLSearchParams(window.location.search)
    const redirect = urlParams.get("redirect")
    if (redirect) {
      window.location.href = redirect
    } else {
      window.location.href = "index.html"
    }
  }
  
  function updateLoginStatus() {
    const loginLink = document.getElementById("loginLink")
    if (!loginLink) return
  
    const username = sessionStorage.getItem("username") || localStorage.getItem("username")
  
    if (username) {
      loginLink.textContent = username
      loginLink.href = "#"
      loginLink.classList.add("user-container")
  
      // Add logout button if not exists
      let logoutBtn = document.getElementById("logoutBtn")
      if (!logoutBtn) {
        logoutBtn = document.createElement("button")
        logoutBtn.id = "logoutBtn"
        logoutBtn.className = "logout-btn"
        logoutBtn.textContent = "Đăng xuất"
        loginLink.appendChild(logoutBtn)
      }
  
      logoutBtn.onclick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        sessionStorage.removeItem("username")
        localStorage.removeItem("username")
        window.location.href = "index.html"
      }
    } else {
      loginLink.textContent = "ĐĂNG NHẬP"
      loginLink.href = "login.html"
      loginLink.classList.remove("user-container")
  
      const logoutBtn = document.getElementById("logoutBtn")
      if (logoutBtn) {
        logoutBtn.remove()
      }
    }
  }
  
  function goToHome() {
    localStorage.removeItem("selectedBrand")
    localStorage.removeItem("selectedSub")
    localStorage.removeItem("filteredProducts")
    window.location.href = "index.html"
  }
  // Initialize on DOM load
  document.addEventListener("DOMContentLoaded", () => {
    updateLoginStatus()
    updateCartCount()
    // Auto-fill customer name in checkout page if logged in
    const customerNameField = document.getElementById("customerName")
    if (customerNameField && isLoggedIn()) {
      const username = sessionStorage.getItem("username") || localStorage.getItem("username")
      customerNameField.value = username
    }
  
    // Check if we're on the cart page and user is not logged in
    if (window.location.pathname.includes("cart.html") && !isLoggedIn()) {
      redirectToLogin("cart.html")
    }
  
    // Check if we're on the checkout page and user is not logged in
    if (window.location.pathname.includes("checkout.html") && !isLoggedIn()) {
      redirectToLogin("checkout.html")
    }
  
    document.querySelectorAll(".category-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const brand = this.getAttribute("data-brand")
        const sub = this.getAttribute("data-sub")
        if (brand) {
          filterProducts(brand, sub)
        }
      })
    })
  })
  function goToForgotPassword() {
    window.location.href = "forgot-password.html"
  }