# Đặc Sản Tây Nguyên

Dự án web khởi tạo (starter project) giới thiệu và trưng bày các sản phẩm
đặc sản vùng Tây Nguyên: cà phê, mật ong rừng, hồ tiêu, bơ sáp, hạt mắc ca,
rượu cần...

Đây là bản HTML/CSS/JavaScript thuần (vanilla), không phụ thuộc framework,
phù hợp làm nền tảng để phát triển tiếp thành một website thương mại điện tử
hoàn chỉnh.

## Cấu trúc thư mục

```
dac-san-tay-nguyen/
├── assets/
│   └── images/           # Hình ảnh sản phẩm, hình minh hoạ
├── css/
│   └── style.css         # Toàn bộ style của trang
├── js/
│   └── main.js            # Logic hiển thị sản phẩm, khởi tạo dự án
├── data/
│   └── products.json     # Dữ liệu sản phẩm mẫu
├── docs/
│   └── requirements.md   # Tài liệu mô tả chức năng dự kiến
├── index.html             # Trang chính
├── README.md
├── .gitignore
└── package.json
```

## Yêu cầu môi trường

- Trình duyệt hiện đại (Chrome, Edge, Firefox, Safari...).
- (Tuỳ chọn) [Node.js](https://nodejs.org/) nếu muốn dùng lệnh `npm start`
  để chạy local server.

## Cách chạy dự án

Vì `main.js` tải dữ liệu sản phẩm bằng `fetch("data/products.json")`, một số
trình duyệt sẽ chặn request này nếu bạn mở file `index.html` trực tiếp theo
kiểu `file://` (do chính sách CORS). Vì vậy nên chạy dự án thông qua một
local server bằng một trong các cách sau:

### Cách 1: Dùng npm script có sẵn (khuyến nghị)

```bash
# Di chuyển vào thư mục dự án
cd dac-san-tay-nguyen

# Chạy local server (sử dụng gói http-server thông qua npx, không cần cài đặt thủ công)
npm start
```

Sau đó mở trình duyệt và truy cập địa chỉ được hiển thị trong terminal
(thường là `http://localhost:8080`).

### Cách 2: Dùng tiện ích Live Server của VS Code

1. Mở thư mục `dac-san-tay-nguyen` bằng VS Code.
2. Cài extension **Live Server**.
3. Nhấp chuột phải vào `index.html` → **Open with Live Server**.

### Cách 3: Dùng Python (nếu đã cài Python)

```bash
cd dac-san-tay-nguyen
python3 -m http.server 8080
```

Sau đó truy cập `http://localhost:8080` trên trình duyệt.

## Kiểm tra nhanh

Sau khi mở trang, hãy mở **Console** của trình duyệt (F12 → tab Console),
bạn sẽ thấy thông báo:

```
Dự án Đặc Sản Tây Nguyên đã khởi tạo thành công!
```

Danh sách sản phẩm mẫu sẽ được tải và hiển thị ở khu vực "Sản phẩm đặc sản"
trên trang chủ.

## Tài liệu liên quan

Xem chi tiết các chức năng dự kiến phát triển tại
[`docs/requirements.md`](./docs/requirements.md).

## Giấy phép

Dự án phục vụ mục đích học tập / demo, có thể tự do sử dụng và chỉnh sửa.
