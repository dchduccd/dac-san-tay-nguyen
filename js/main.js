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

document.addEventListener("DOMContentLoaded", loadProducts);
