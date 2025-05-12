const productList = document.getElementById("product-list");
const cartItems   = document.getElementById("cart-items");
const totalSpan   = document.getElementById("total");

let products = [];  // 存后端拿回来的商品
let cart = [];      // 存已加入购物车的商品

// 启动时拉取后端接口
fetch("/api/products")
    .then(res => res.json())
    .then(data => {
        products = data;
        renderProducts();  // 渲染到页面
    });

function renderProducts() {
    productList.innerHTML = "";
    products.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
  <img src="${p.image}" alt="${p.name}" />
  <h3>${p.name}</h3>
  <p>${p.price} 金币</p >
  <button onclick="addToCart(${p.id})">加入购物车</button>
`;
        productList.appendChild(div);
    });
}

function addToCart(id) {
    const prod = products.find(p => p.id === id);
    cart.push(prod);
    renderCart();
}

function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} 金币`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalSpan.textContent = total;
}