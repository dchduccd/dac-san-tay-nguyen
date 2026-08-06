# Tài liệu yêu cầu chức năng — Đặc Sản Tây Nguyên

## 1. Mục tiêu dự án

Xây dựng một trang web giới thiệu và kinh doanh các sản phẩm đặc sản vùng
Tây Nguyên (cà phê, mật ong, hồ tiêu, bơ, mắc ca, rượu cần...), giúp người
dùng dễ dàng tìm hiểu, lựa chọn và đặt mua sản phẩm.

Phiên bản hiện tại (v1.0.0) là bản khởi tạo (starter project) chỉ bao gồm
giao diện tĩnh, dữ liệu mẫu và cấu trúc thư mục nền tảng để phát triển tiếp.

## 2. Chức năng đã có trong bản khởi tạo

- [x] Trang chủ giới thiệu tổng quan về đặc sản Tây Nguyên.
- [x] Hiển thị danh sách sản phẩm mẫu (tải động từ `data/products.json`).
- [x] Bố cục responsive cơ bản (desktop, tablet, mobile).
- [x] Khu vực thông tin liên hệ.

## 3. Chức năng dự kiến phát triển tiếp

### 3.1. Xem danh sách & chi tiết sản phẩm
- Hiển thị danh sách sản phẩm dạng lưới (grid) với hình ảnh, tên, giá.
- Trang/khung chi tiết sản phẩm: mô tả đầy đủ, nguồn gốc xuất xứ, hình ảnh
  lớn, đánh giá của khách hàng.

### 3.2. Lọc & tìm kiếm sản phẩm
- Lọc theo danh mục (cà phê, mật ong, gia vị, nông sản khô, đồ uống...).
- Lọc theo khoảng giá.
- Tìm kiếm sản phẩm theo tên (thanh tìm kiếm).
- Sắp xếp theo giá tăng/giảm, mới nhất, bán chạy.

### 3.3. Giỏ hàng & đặt hàng
- Thêm/xoá sản phẩm khỏi giỏ hàng, cập nhật số lượng.
- Tính tổng tiền tự động, hiển thị biểu tượng giỏ hàng trên header.
- Form thông tin giao hàng (họ tên, số điện thoại, địa chỉ).
- Xác nhận đơn hàng (có thể tích hợp thanh toán online ở giai đoạn sau).

### 3.4. Trang liên hệ
- Form liên hệ (họ tên, email, nội dung) gửi yêu cầu tư vấn/hợp tác.
- Bản đồ vị trí cửa hàng/kho hàng (Google Maps embed).
- Thông tin liên hệ: email, số điện thoại, mạng xã hội.

### 3.5. Quản trị nội dung (giai đoạn sau)
- Trang quản trị (admin) để thêm/sửa/xoá sản phẩm.
- Quản lý đơn hàng, trạng thái xử lý đơn hàng.
- Thống kê doanh thu, sản phẩm bán chạy.

### 3.6. Tài khoản người dùng (giai đoạn sau)
- Đăng ký/đăng nhập tài khoản khách hàng.
- Lịch sử đơn hàng, lưu địa chỉ giao hàng.
- Sản phẩm yêu thích (wishlist).

## 4. Yêu cầu phi chức năng

- Giao diện thân thiện, dễ sử dụng trên cả desktop lẫn di động.
- Thời gian tải trang nhanh, tối ưu hình ảnh.
- Mã nguồn rõ ràng, có chú thích, dễ mở rộng và bảo trì.
- Tuân thủ chuẩn HTML/CSS/JS hiện đại, hỗ trợ trình duyệt phổ biến.
- Đảm bảo khả năng truy cập cơ bản (accessibility): độ tương phản màu sắc,
  focus state rõ ràng, thẻ `alt` cho hình ảnh.

## 5. Công nghệ dự kiến

- **Giai đoạn hiện tại:** HTML/CSS/JavaScript thuần (vanilla), không phụ
  thuộc framework, dữ liệu mẫu lưu trong file JSON tĩnh.
- **Giai đoạn mở rộng:** có thể tích hợp framework front-end (React, Vue)
  và backend/API (Node.js, database) để quản lý dữ liệu sản phẩm, đơn hàng
  và tài khoản người dùng thực tế.
