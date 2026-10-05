# Dự Án Đặc Sản Tây Nguyên

Trang web giới thiệu các sản phẩm đặc sản vùng đất Tây Nguyên như cà phê, mật ong rừng, bơ sáp, hạt mắc ca.

## Người Thực Hiện
- **Họ và tên:** Đỗ Chính Hải Đức
- **Lớp:** CNTT K24

## Công Nghệ Sử Dụng
- HTML5
- CSS3
- JavaScript / JSON Data

## Hướng Dẫn Chạy Dự Án
1. Tải repository này về máy.
2. Mở file `index.html` trên trình duyệt web để xem giao diện.

## Chức năng giữa kỳ: Đăng ký tài khoản

Phiên bản 2.0 bổ sung chức năng đăng ký tài khoản theo đề kiểm tra giữa kỳ:
- Form client gồm họ tên, email, mật khẩu.
- Client kiểm tra dữ liệu cơ bản.
- Client gửi POST bằng `fetch()` tới `/api/account/register`.
- Express kiểm tra lại dữ liệu.
- MongoDB collection `accounts` được kiểm tra email trùng.
- Email trùng trả HTTP 409.
- Đăng ký thành công trả HTTP 201.
- Lỗi dữ liệu trả HTTP 400.
- Lỗi server trả HTTP 500.

### Cách chạy

1. Cài Node.js.
2. Cài MongoDB và tạo database hoặc dùng MongoDB Atlas.
3. Tạo file `.env` từ `.env.example`.
4. Điền `MONGODB_URI`.
5. Chạy:
   `npm install`
   `npm start`
6. Mở `http://localhost:3000`.

> Lưu ý: `.env` không được đưa lên GitHub. File `.env.example` chỉ là mẫu cấu hình.
