# Web_HireDev
HTML,CSS,Javascript,React.js,Ant Design

1.1. Giới thiệu bài toán.

Đề bài: Làm trang web tuyển dụng ngành lập trình.
Mô tả: Website tuyển dụng ngành lập trình là nơi để đăng những bài viết tuyển dụng liên quan đến các công việc lập trình, cho phép các công ty đăng các công việc (job) lên trên đó và người dùng có thể truy cập lên trang chủ để tìm kiếm công việc phù hợp.

1.2. Trang admin cho nhà tuyển dụng.

- Trang cấu hình thông tin công ty: Tên công ty, email, số điện thoại, địa chỉ, số lượng nhân sự, thời gian làm việc, link website, mô tả ngắn, mô tả chi tiết.
- Trang quản lý job
- Tạo job mới: Tên job, tags (html, css, js,... lấy từ api), thành phố, mức lương, mô tả job, trạng thái (bật/tắt), thời gian đăng bài (tự động lấy thời gian hiện tại), idCompany (tự động lấy trong cookie).
- Danh sách job:
  + Một bảng gồm các cột: Tên job, tags, mức lương, thời gian đăng bài, thời gian cập nhật, trạng     thái, hành động.
  + Cột hành động: Nút xem chi tiết, nút chỉnh sửa job (khi chỉnh sửa job gửi lên thời gian hiện      tại), nút xóa job.
- Trang quản lý job
    + Trang chi tiết job: Tên job, trạng thái (bật/tắt), tags (html, css, js), mức lương, thời       gian đăng bài (tự động lấy thời gian hiện tại), thời gian cập nhật bài, thành phố, mô tả job.
    Trang quản lý CV
- Danh sách CV: Tên job, họ tên, số điện thoại, email, ngày gửi, trạng thái (đã xem/chưa xem), hành động (nút xóa, nút xem chi tiết – click vào chuyển trạng thái từ chưa đọc thành đã đọc).
- Chi tiết CV:
    + Thông tin ứng viên: Họ tên, ngày gửi, số điện thoại, email, giới thiệu bản thân, thành phố     ứng tuyển, danh sách link project đã làm.
    + Thông tin job mà ứng viên đã ứng tuyển: Tên job, tags, mức lương, mô tả!
    + 
  1.3. Trang web cho người dùng vào tìm việc.
      
-  Trang chủ:
    + Nút đăng ký làm nhà tuyển dụng.
    + Hiển thị dropdown chọn thành phố + thanh search để người dùng tìm kiếm việc. Ví dụ: Hà         Nội, TP. Hồ Chí Minh, Đà Nẵng, …
    + Hiển thị danh sách các kỹ năng (khi click vào sẽ hiển thị danh sách các job liên quan đến       kỹ năng đó). Ví dụ: HTML, CSS, Javascript, ReactJS, NodeJS, Java, PHP,...
    + Hiển thị danh sách một số công ty (khi click sẽ vào trang chi tiết công ty đó). Ví dụ:         ACB, Samsung, Sun*, …
- Trang kết quả tìm kiếm: (Sau khi người dùng tìm kiếm sẽ chuyển đến trang này).
    + Danh sách các job liên quan đến: khu vực (nếu có) + từ khóa tìm kiếm (nếu có).
    + Mỗi job show ra một số thông tin cơ bản: tiêu đề, lương, tags, thành phố, thời gian đăng       bài, tên công ty. Khi click vào 1 job sẽ sang trang chi tiết job đó.
- Trang chi tiết 1 job: (Một số thông tin cơ bản).
    + Tên job
    + Nút ứng tuyển (Khi click vào link xuống form ứng tuyển).
    + Tags (html, css, js)
    + Thành phố
    + Mức lương
    + Địa chỉ công ty
    + Thời gian đăng bài
    + Mô tả job
    + Giới thiệu công ty
    + Form ứng tuyển: idJob, idCompany, họ tên, số điện thoại, email, giới thiệu bản thân, danh       sách link project đã làm, thời gian gửi (tự động lấy thời gian hiện tại).
- Trang danh sách công ty.
    + Tên công ty
    + Số điện thoại
    + Số nhân sự
    + Link website
    + Địa chỉ
- Trang chi tiết công ty.
    + Tên công ty
    + Địa chỉ
    + Số lượng nhân sự
    + Thời gian làm việc
    + Link website
    + Mô tả ngắn
    + Mô tả chi tiết
    + Danh sách các job

1.4. API Mẫu

- company (API danh sách các công ty)
    id: Id từng công ty
    companyName: Tên công ty
    phone: Số điện thoại
    email: Email
    password: Mật khẩu
    token: Token cho từng tài khoản
    address: Địa chỉ công ty
    workingTime: Thời gian làm việc
    website: Website của công ty
    quantityPeople: Số lượng nhân sự của công ty
    description: Mô tả ngắn về công ty
    detail: Mô tả chi tiết về công ty
- city (Danh sách một số thành phố có nhiều việc làm IT)
    key: tương tự như Id, key là duy nhất.
    value: Tên thành phố
- tags (Danh sách một số ngôn ngữ phổ biến hay tuyển dụng)
    key: tương tự như Id, key là duy nhất.
    value: Tên ngôn ngữ, ví dụ Javascript, Java, Python,...
- jobs (Danh sách các công việc tuyển dụng)
    id: Id từng công việc
    idCompany: Id công ty tạo ra công việc này
    name: Tên công việc
    tags: Danh sách các ngôn ngữ yêu cầu (Dạng array).
    salary: Mức lương
    description: Mô tả
    status: Trạng thái (Đang bật/Đang tắt - true/false)
    city: Danh sách các thành phố đang tuyển (Dạng array).
    createAt: Ngày tạo (Ví dụ: 29-04-2023 21:22:17)
    updateAt: Ngày cập nhật (Ví dụ: 30-04-2023 14:12:25)
- cv (Danh sách CV mà người dùng ứng tuyển)
    id: Id từng CV
    idCompany: Id công ty đang ứng tuyển
    idJob: Id job đang ứng tuyển
    name: Tên người ứng tuyển
    phone: Số điện thoại
    email: Email
    description: Giới thiệu bản thân
    linkProject: Link project
    city: Ứng tuyển tại thành phố nào
    statusRead: Trạng thái đã vào đọc CV hay chưa (true/false)
    createAt: Ngày gửi (Ví dụ: 29-04-2023 21:22:17)



