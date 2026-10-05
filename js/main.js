// ==========================================================================
// Đặc Sản Tây Nguyên — main.js
// ==========================================================================

console.log("Dự án Đặc Sản Tây Nguyên đã khởi tạo thành công!");

/**
 * Định dạng số thành chuỗi tiền tệ VNĐ.
 * @param {number} value
 * @returns {string}
 */
function formatCurrency(value) {
  return value.toLocaleString("vi-VN") + " đ";
}

/**
 * Tạo phần tử HTML cho một thẻ sản phẩm.
 * @param {{id:number,name:string,price:number,description:string,image:string}} product
 * @returns {HTMLElement}
 */
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const img = document.createElement("img");
  img.className = "product-card__image";
  img.src = product.image;
  img.alt = product.name;
  img.loading = "lazy";
  // Ảnh dự phòng nếu đường dẫn ảnh gốc không tồn tại
  img.onerror = function () {
    img.onerror = null;
    img.src =
      "https://placehold.co/400x300/2a211b/f2e8dc?text=" +
      encodeURIComponent(product.name);
  };

  const body = document.createElement("div");
  body.className = "product-card__body";

  const name = document.createElement("h3");
  name.className = "product-card__name";
  name.textContent = product.name;

  const desc = document.createElement("p");
  desc.className = "product-card__desc";
  desc.textContent = product.description;

  const price = document.createElement("p");
  price.className = "product-card__price";
  price.textContent = formatCurrency(product.price);

  body.appendChild(name);
  body.appendChild(desc);
  body.appendChild(price);

  card.appendChild(img);
  card.appendChild(body);

  return card;
}

/**
 * Tải dữ liệu sản phẩm từ data/products.json và hiển thị lên trang.
 */
function loadProducts() {
  const listEl = document.getElementById("product-list");
  if (!listEl) return;

  // Dữ liệu trực tiếp không qua fetch
  const products = [
    { id: 1, name: "Cà phê Ban Mê", price: 150000, description: "Cà phê nguyên chất Đắk Lắk đậm vị", image: "assets/images/caphe.jpg" },
    { id: 2, name: "Tiêu Chư Sê", price: 120000, description: "Hạt tiêu thơm nồng cay đặc trưng", image: "assets/images/tieu.jpg" },
    { id: 3, name: "Bơ Sáp", price: 80000, description: "Bơ sáp béo ngậy đặc sản", image: "assets/images/bo.jpg" },
    { id: 4, name: "Rượu Cần", price: 250000, description: "Rượu truyền thống mang hương vị núi rừng", image: "assets/images/ruoucan.jpg" },
    { id: 5, name: "Măng Khô Rừng", price: 200000, description: "Măng rừng tự nhiên phơi khô", image: "assets/images/mangkho.jpg" }
  ];

  listEl.innerHTML = "";

  const fragment = document.createDocumentFragment();
  products.forEach((product) => {
    fragment.appendChild(createProductCard(product));
  });

  listEl.appendChild(fragment);
}

/**
 * Gửi form đăng ký tới Express bằng POST/fetch().
 */
function setupRegisterForm() {
  const form = document.getElementById("register-form");
  const message = document.getElementById("register-message");
  if (!form || !message) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    message.textContent = "";
    message.className = "register-message";

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Client kiểm tra dữ liệu cơ bản.
    if (fullName.length < 3) {
      message.textContent = "Họ tên phải có ít nhất 3 ký tự.";
      message.classList.add("error");
      return;
    }

    if (!email || !email.includes("@")) {
      message.textContent = "Email không hợp lệ.";
      message.classList.add("error");
      return;
    }

    if (password.length < 6) {
      message.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
      message.classList.add("error");
      return;
    }

    try {
      const response = await fetch("/api/account/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fullName, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        message.textContent = data.message;
        message.classList.add("success");
        form.reset();
      } else {
        message.textContent = data.message || "Đăng ký không thành công.";
        message.classList.add("error");
      }
    } catch (error) {
      message.textContent = "Không thể kết nối đến server.";
      message.classList.add("error");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  setupRegisterForm();
});
