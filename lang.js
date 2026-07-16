(function() {
    // ============================================================================
    // BỘ TỪ ĐIỂN ĐA NGÔN NGỮ (VIE / ENG / JPN)
    // ============================================================================
    const TRANSLATIONS = {
        vi: {
            // Header Links
            "nav_compare": "So Sánh",
            "nav_roadmap": "Hiện tại & Tương lai",
            "nav_story": "Hành Trình",
            "nav_home": "Trang Chủ",

            // --- TRANG STORY.HTML ---
            "story_main_title": "HÀNH TRÌNH SỐ HOÁ 2026",
            "story_main_sub": "Lịch sử phát triển nền tảng quản lý và tối ưu vận hành từ con số 0<br>Tại Trạm Biến Áp 110kV Deep C2.",
            "story_sec_tech": "Tiêu chí kỹ thuật",
            "story_sec_sol": "Phương án giải pháp",
            "story_sec_slides": "Slides phân tích",
            "story_hint": "Nhấn phím mũi tên hoặc click dots để di chuyển | Bật Trình Chiếu tự động phía dưới",
            "story_btn_compare": "So sánh giải pháp",
            "story_btn_back": "Quay lại Trang chủ",
            "story_slideshow_label": "Trình chiếu",
            "story_slideshow_duration": "⏱ Thời gian mỗi slide",
            "story_slideshow_custom": "Tuỳ chỉnh:",
            "story_slideshow_hint": "Phím ← → | 1-6 để nhảy slide | Space: Chạy/Tạm dừng | ESC: Thoát",

            // Timeline details (Story.html)
            "st0_date": "Khởi điểm • Cuối Năm 2025",
            "st0_title": "Vấn Đề Phát Sinh & Ý Tưởng",
            "st0_desc": "Trong quá trình trực ca vận hành tại Trạm Biến Áp 110kV - Khu công nghiệp Deep C2, mình nhận thấy việc ghi chép các thông số sản lượng bằng sổ sách giấy và tổng hợp thủ công phát sinh nhiều bất cập: tốn thời gian và lãng phí văn phòng phẩm, dễ nhầm lẫn số liệu và khó khăn khi tra cứu lịch sử cũng như lập biểu đồ đánh giá. <br>Ý tưởng xây dựng một công cụ số hóa trạm điện bắt đầu nhen nhóm, và thúc đẩy chúng mình bước tay vào thực hiện.",
            
            "st1_date": "Đầu Năm 2026",
            "st1_title": "Lên Kế Hoạch & Thiết Kế",
            "st1_desc": "Quyết định bắt tay vào thực hiện dự án. Nhóm phát triển - Mr Quang và mình - lên kế hoạch triển khai, chọn phương án thích hợp là sử dụng các ngôn ngữ trên nền tảng web. Từ đây, việc xây dựng chi tiết cho các module cốt lõi được phác hoạ dần: <br>Từ giao diện đăng nhập, tính năng nhập thông số trực quan, khả năng tạo các Lệnh Công Tác đã dần thành hình.",

            "st2_date": "Tháng 05/2026",
            "st2_title": "Phiên Bản Thử Nghiệm 0.1.0",
            "st2_desc": "Sau quá trình thiết kế và xây dựng ban đầu, nền tảng website đã khởi chạy với phiên bản 0.1.0dev, nhóm mình đã thực hiện thử nghiệm nội bộ, sửa các lỗi logic và tăng thêm một số tính năng cần thiết.",

            "st3_date": "Tháng 06/2026",
            "st3_title": "Vận hành thực tế phiên bản 0.2.0",
            "st3_desc": "Sau quá trình thử nghiệm nội bộ, nhóm đã xin cấp phép, chính thức triển khai với server thực tế. Với điều kiện ưu đãi khi có 01 máy chủ không sử dụng, có thể dùng ngay, nhóm mình thực hiện kết nối, chạy với tên miền tạm và chính thức<br>VẬN HÀNH BẢN THỰC NGHIỆM",

            "st4_date": "Tháng 07/2026",
            "st4_title": "Quá trình thực nghiệm",
            "st4_desc": "Nhận được rất nhiều ý kiến đóng góp trong quá trình thực nghiệm, nhóm đã thực hiện nâng cấp, cập nhật và sửa chữa các lỗi tồn tại, nhóm hi vọng nhận được thêm nhiều đóng góp hơn nữa để phát triển.<br>Song hành với đó, với nền tảng và kinh nghiệm đúc kết được từ các phiên bản trước,nhóm thực hiện kế hoạch thiết kế phiên bản 1.0.0 để tối ưu lại toàn bộ, mang lại trải nghiệm tốt hơn cho người dùng, cũng như thêm nhiều tính năng hữu ích khác.",

            "st5_date": "Hiện Tại",
            "st5_title": "Tối ưu hệ thống",
            "st5_desc": "Phiên bản 1.0 đang được hoàn thiện dần với giao diện bắt mắt hơn, tính năng ổn định và cơ sở dữ liệu được đồng bộ hơn. Cùng với đó, nhóm đã thực hiện tích hợp các biện pháp bảo mật cơ bản cần thiết để tránh các rủi ro ngoài ý muốn, cũng như bảo toàn dữ liệu vận hành. Trong thời gian tới, nhóm sẽ thực hiện lên phương án triển khai scaling server trong trường hợp cần thiết.",

            // Thumbs
            "thumb0_lbl": "Khởi điểm", "thumb0_desc": "Phát sinh",
            "thumb1_lbl": "Kế hoạch", "thumb1_desc": "Thiết kế",
            "thumb2_lbl": "v0.1.0",    "thumb2_desc": "Thử nghiệm",
            "thumb3_lbl": "v0.2.0",    "thumb3_desc": "Vận hành",
            "thumb4_lbl": "07/2026",   "thumb4_desc": "Thực tế",
            "thumb5_lbl": "v1.0",      "thumb5_desc": "Tối ưu",

            // --- TRANG COMPARE.HTML ---
            "cmp_slide1_tag": "// Giới thiệu mục tiêu",
            "cmp_slide1_title": "Cùng Nhau So Sánh & Lựa Chọn",
            "cmp_slide1_sub": "Chúng ta sẽ cùng nhau thực hiện so sánh các ứng dụng hiện được sử dụng với phương án triển khai web platform, nhằm đưa ra giải pháp vận hành tối ưu nhất cho Trạm biến áp 110kV.",
            "cmp_opt1_title": "Công cụ rời rạc",
            "cmp_opt1_desc": "Excel, sổ tay, file Word/PDF — phương pháp vận hành thủ công truyền thống đang dùng tại nhiều trạm điện hiện nay.",
            "cmp_opt2_title": "Microsoft Power Platform",
            "cmp_opt2_desc": "Đã được tích hợp sẵn với hệ thống mail/Teams của công ty. Có lợi thế kết nối nhanh nhưng phụ thuộc cloud và chi phí duy trì cao.",
            "cmp_opt3_title": "Web Platform tự phát triển",
            "cmp_opt3_desc": "Hệ thống web tuỳ biến 100% theo nghiệp vụ trạm, lưu trữ dữ liệu tại chỗ, toàn quyền kiểm soát tính năng và mở rộng.",
            "cmp_hint_nav": "Phím ← → | 1-8 để nhảy slide | Space: Chạy/Tạm dừng | ESC: Thoát",

            // Slide 2: Công cụ rời rạc detail
            "cmp_s2_tag": "📋 Phương án 01",
            "cmp_s2_title": "Công Cụ Rời Rạc",
            "cmp_s2_sub": "Excel, sổ tay trực, file Word/PDF riêng lẻ — đây là phương thức thủ công truyền thống đang được áp dụng tại các trạm vận hành hiện tại.",
            "cmp_s2_pro_h": "Ưu điểm",
            "cmp_s2_pro1": "Không tốn chi phí đầu tư ban đầu, phần mềm Microsoft Office có sẵn.",
            "cmp_s2_pro2": "Nhân viên vận hành đã quen thuộc, hầu như không cần đào tạo lại.",
            "cmp_s2_pro3": "Hoạt động offline hoàn toàn, không phụ thuộc vào kết nối mạng.",
            "cmp_s2_pro4": "Dễ dàng chỉnh sửa cấu trúc bảng biểu theo nhu cầu phát sinh tức thời.",
            "cmp_s2_pro5": "Dữ liệu lưu cục bộ tại máy trạm trực, không chuyển ra internet.",
            "cmp_s2_con_h": "Nhược điểm",
            "cmp_s2_con1": "Dữ liệu bị phân tán, cực kỳ khó tổng hợp báo cáo liên ca hoặc liên tháng.",
            "cmp_s2_con2": "Dễ nhầm lẫn công thức, dễ mất mát hoặc hỏng file dữ liệu.",
            "cmp_s2_con3": "Báo cáo thủ công tốn từ 2-3 giờ mỗi tuần của kỹ sư trực ca.",
            "cmp_s2_con4": "Không có cảnh báo logic — sai lệch số liệu nhập vào không bị phát hiện.",
            "cmp_s2_con5": "Không thể tra cứu nhanh lịch sử phụ tải hoặc vẽ biểu đồ xu hướng tự động.",
            "cmp_s2_con6": "Không có cơ chế phân quyền, rủi ro sửa đè dữ liệu lịch sử.",
            "cmp_s2_eval": "💡 <strong>Đánh giá nhanh:</strong> Chỉ phù hợp khi quy mô vận hành rất nhỏ, ít ca trực trực tiếp và không có nhu cầu khai thác dữ liệu dài hạn hoặc phân tích tự động.",

            // Slide 3: Power Platform detail
            "cmp_s3_tag": "🔷 Phương án 02",
            "cmp_s3_title": "Microsoft Power Platform",
            "cmp_s3_sub": "Bộ công cụ low-code (Power Apps, Power BI, Power Automate) chạy trên hệ sinh thái Microsoft Cloud của doanh nghiệp.",
            "cmp_s3_pro_h": "Ưu điểm lớn",
            "cmp_s3_pro1": "Tích hợp sẵn sâu với hệ sinh thái Microsoft 365, Teams có sẵn của công ty.",
            "cmp_s3_pro2": "Power Apps giúp tạo giao diện nhập liệu di động và máy tính khá nhanh.",
            "cmp_s3_pro3": "Power BI hỗ trợ tạo báo cáo dashboard trực quan rất mạnh mẽ.",
            "cmp_s3_pro4": "Độ bảo mật doanh nghiệp cao đạt chuẩn ISO/SOC do Microsoft vận hành.",
            "cmp_s3_pro5": "Low-code giúp giảm thời gian viết code thuần, kéo thả tiện lợi.",
            "cmp_s3_pro6": "Có sự hỗ trợ kỹ thuật chính thức từ đại lý Microsoft.",
            "cmp_s3_con_h": "Nhược điểm lớn",
            "cmp_s3_con1": "Chi phí bản quyền license hàng tháng rất cao tính theo đầu người (User).",
            "cmp_s3_con2": "Dữ liệu bắt buộc lưu trên Cloud Microsoft, không kiểm soát vật lý tại trạm.",
            "cmp_s3_con3": "Yêu cầu kết nối Internet liên tục 24/7, mạng chập chờn sẽ bị gián đoạn.",
            "cmp_s3_con4": "Tùy biến giao diện (UI) và logic nghiệp vụ phức tạp bị giới hạn bởi framework.",
            "cmp_s3_con5": "Cần quản trị viên IT cấu hình phân quyền và quản lý environment phức tạp.",
            "cmp_s3_con6": "Quy trình phê duyệt mua license mất nhiều thời gian trong khối nhà nước.",
            "cmp_s3_eval": "💡 <strong>Đánh giá nhanh:</strong> Phù hợp cho khối văn phòng tổng công ty đã mua sẵn Microsoft 365 doanh nghiệp, ngân sách dồi dào, cần tích hợp báo cáo nhiều phòng ban và kết nối Internet tốt.",

            // Slide 4: Web Platform detail
            "cmp_s4_tag": "🌐 Phương án chọn",
            "cmp_s4_title": "Web Platform Tự Phát Triển",
            "cmp_s4_sub": "Hệ thống web tùy biến 100% được xây dựng đúng theo quy trình vận hành thực tế của trạm điện.",
            "cmp_s4_pro_h": "Ưu điểm cốt lõi",
            "cmp_s4_pro1": "Tùy biến 100% giao diện và logic nhập liệu theo nghiệp vụ đặc thù của trạm.",
            "cmp_s4_pro2": "Chi phí vận hành lâu dài cực thấp — chạy trực tiếp trên phần cứng máy chủ sẵn có.",
            "cmp_s4_pro3": "Toàn quyền kiểm soát và sở hữu dữ liệu tại trạm (On-premises), bảo mật nội bộ.",
            "cmp_s4_pro4": "Thiết kế tối ưu hóa riêng cho màn hình giám sát rộng tại phòng điều khiển.",
            "cmp_s4_pro5": "Tự động xuất báo cáo Excel/PDF theo đúng biểu mẫu pháp lý quy chuẩn điện lực.",
            "cmp_s4_pro6": "Hệ thống chạy mượt mà trong mạng LAN nội bộ, không cần mạng internet ngoại vi.",
            "cmp_s4_pro7": "Phân quyền chi tiết, bảo vệ lịch sử ghi nhận thông số chống sửa xóa ca trực.",
            "cmp_s4_con_h": "Nhược điểm",
            "cmp_s4_con1": "Cần thời gian phát triển và kiểm thử ban đầu (khoảng từ 3 đến 6 tháng).",
            "cmp_s4_con2": "Đòi hỏi năng lực chuyên môn của lập trình viên nội bộ để phát triển hệ thống.",
            "cmp_s4_con3": "Nhóm vận hành phải tự duy trì và khắc phục các lỗi phát sinh trong thực tế.",
            "cmp_s4_con4": "Không có tổng đài hỗ trợ kỹ thuật 24/7 từ nhà phân phối lớn bên ngoài.",
            "cmp_s4_eval": "💡 <strong>Đánh giá nhanh:</strong> Là phương án tối ưu nhất cho trạm biến áp vận hành độc lập, đòi hỏi tính bảo mật dữ liệu cao, tùy biến quy trình sâu và tối ưu hóa ngân sách vận hành.",

            // Slide 5: Radar
            "radar_axis_data": "Kiểm soát DL",
            "radar_axis_custom": "Tuỳ biến",
            "radar_axis_dev": "Phát triển DL",
            "radar_axis_cost": "Hiệu quả CP",
            "radar_axis_offline": "Offline",
            "radar_axis_security": "Bảo mật NB",
            "cmp_radar_title": "Biểu Đồ So Sánh Kỹ Thuật",
            "cmp_radar_sub": "BẢNG ĐIỂM SO SÁNH (Thang điểm 10)",
            "cmp_radar_axis_title": "Tiêu chí so sánh",
            "cmp_radar_score_discrete": "Rời rạc",
            "cmp_radar_score_power": "Power",
            "cmp_radar_score_web": "Web",
            "cmp_radar_desc": "💡 Biểu đồ thể hiện ưu thế vượt trội của <strong>Web Platform</strong> ở các mặt cốt lỗi: kiểm soát dữ liệu, khả năng tuỳ biến nghiệp vụ sâu và tính bảo mật tuyệt đối khi chạy trong LAN của trạm điện.",

            // Slide 6: Tech improvement process
            "cmp_s6_tag": "📈 Quy trình & Hiệu quả",
            "cmp_s6_title": "Hiệu Quả Cải Tiến Công Nghệ",
            "cmp_s6_sub": "So sánh định lượng thời gian xử lý công việc và tỷ lệ sai sót giữa phương pháp cũ và mới:",
            "cmp_s6_bar_title": "Thời gian hoàn thành tác vụ (Phút) &amp; Tỷ lệ sai số (%)",
            "cmp_s6_desc": "📊 Biểu đồ thể hiện thời gian lập báo cáo giảm từ <strong>120 phút xuống còn 5 phút</strong> (giảm 95.8%), tỷ lệ nhập liệu sai lệch logic giảm từ <strong>15% về mức 0%</strong> nhờ bộ cảnh báo logic tự động chặn số liệu vô lý.",

            // Slide 7: Compare Table
            "tbl_hdr_criteria": "Tiêu chí kỹ thuật",
            "tbl_hdr_discrete": "📋 Công cụ rời rạc",
            "tbl_hdr_power": "🔷 Power Platform",
            "tbl_hdr_web": "🌐 Web Platform",
            "tbl_c1": "Chi phí ban đầu", "tbl_c1_d": "Rất thấp", "tbl_c1_p": "Cao (license)", "tbl_c1_w": "Trung bình",
            "tbl_c2": "Chi phí vận hành / năm", "tbl_c2_d": "Gần như 0", "tbl_c2_p": "Cao (per user)", "tbl_c2_w": "Thấp",
            "tbl_c3": "Tuỳ biến nghiệp vụ", "tbl_c3_d": "Hạn chế", "tbl_c3_p": "Có giới hạn", "tbl_c3_w": "100%",
            "tbl_c4": "Dữ liệu lưu tại chỗ", "tbl_c4_d": "Có", "tbl_c4_p": "Cloud MS", "tbl_c4_w": "Server nội bộ",
            "tbl_c5": "Báo cáo tự động", "tbl_c5_d": "Thủ công", "tbl_c5_p": "Power Automate", "tbl_c5_w": "Excel/PDF tự động",
            "tbl_c6": "Hoạt động offline", "tbl_c6_d": "Hoàn toàn", "tbl_c6_p": "Cần internet", "tbl_c6_w": "LAN nội bộ",
            "tbl_c7": "Thời gian triển khai", "tbl_c7_d": "Ngay lập tức", "tbl_c7_p": "1–3 tháng", "tbl_c7_w": "3–6 tháng",
            "tbl_c8": "Phân quyền ca trực", "tbl_c8_d": "Không có", "tbl_c8_p": "Có sẵn", "tbl_c8_w": "Chi tiết (Role)",

            // Slide 8: Conclusion
            "cmp_s8_tag": "🏆 Kết luận",
            "cmp_s8_title": "Lý Do Chọn Web Platform",
            "cmp_s8_sub": "Tối ưu hóa quy trình ca trực và đảm bảo an toàn thông tin là ưu tiên hàng đầu tại trạm biến áp:",
            "tbl_c5": "Xuất báo cáo form mẫu", "tbl_c5_d": "Thủ công hoàn toàn", "tbl_c5_p": "Power BI (khác form mẫu)", "tbl_c5_w": "Tự động Excel/PDF 100%",
            "tbl_c6": "Tích hợp mail/Teams công ty", "tbl_c6_d": "Không có", "tbl_c6_p": "Sẵn có (Điểm mạnh lớn)", "tbl_c6_w": "Lập trình bổ sung được",
            "tbl_c7": "Hoạt động khi mất Internet", "tbl_c7_d": "Bình thường", "tbl_c7_p": "Không thể hoạt động", "tbl_c7_w": "Bình thường (LAN)",
            "tbl_c8": "Chi phí vận hành dài hạn", "tbl_c8_d": "Gần như bằng 0", "tbl_c8_p": "Cao (theo đầu user)", "tbl_c8_w": "Chỉ chi phí server",
            "tbl_c9": "Độ phù hợp nghiệp vụ trạm", "tbl_c9_d": "Thấp", "tbl_c9_p": "Trung bình", "tbl_c9_w": "Cao nhất ★★★",
            "compare_tbl_note_power": "ℹ️ <strong style=\"color:var(--neon-purple);\">Đặc biệt:</strong> Ghi nhận Power Platform đã liên kết sẵn với mail và Teams của tổng công ty (đây là điểm mạnh sẵn có rất tiện dụng).",
            "compare_tbl_note_web": "💡 <strong style=\"color:var(--neon-blue);\">Lộ trình:</strong> Web Platform sau khi chạy ổn định hoàn toàn có thể kết nối với SMTP hoặc API Webhook để tự động gửi thông báo qua mail/Teams của trạm.",

            // Slide 8: Conclusion
            "cmp_s8_tag": "🏆 Kết luận",
            "cmp_s8_title": "Lý Do Chọn Web Platform",
            "cmp_s8_sub": "Tối ưu hóa quy trình ca trực và đảm bảo an toàn thông tin là ưu tiên hàng đầu tại trạm biến áp:",
            "cmp_s8_cp1_title": "Làm chủ công nghệ và an toàn thông tin tại chỗ (On-premises):",
            "cmp_s8_cp1_desc": "Dữ liệu sản lượng điện, sơ đồ phương thức vận hành và Lệnh Công Tác được lưu trực tiếp trên ổ cứng máy chủ đặt tại trạm. Hoàn toàn không chuyển dữ liệu ra ngoài Internet, triệt tiêu rủi ro rò rỉ dữ liệu hoặc mất quyền kiểm soát do sự cố đường truyền mạng quốc tế.",
            "cmp_s8_cp2_title": "Tùy biến nghiệp vụ sâu và bám sát thực tế ca trực:",
            "cmp_s8_cp2_desc": "Giao diện và các cảnh báo logic được thiết kế riêng theo quy trình đặc thù của Trạm 110kV Deep C2, điều mà các công cụ đóng gói sẵn hay low-code rất khó tùy biến sâu nếu không mua các gói tích hợp đắt đỏ.",
            "cmp_s8_cp3_title": "Hiệu quả tài chính vượt trội cho vòng đời sản phẩm lâu dài:",
            "cmp_s8_cp3_desc": "Không phát sinh chi phí mua bản quyền hàng tháng trên đầu người như Power Platform. Hệ thống chạy ổn định lâu dài trên hạ tầng máy chủ Dell R260 sẵn có giúp giảm chi phí vận hành lâu dài về mức tối thiểu.",


            // --- TRANG ROADMAP.HTML ---
            // Road map bullets
            "rm_b1_title": "Tận dụng 01 máy chủ server vật lý cũ có sẵn:",
            "rm_b1_desc": "Trạm hiện đang có dư thừa 01 thiết bị máy chủ server không còn sử dụng nhưng cấu hình vẫn hoạt động ổn định và bền bỉ. Nhóm phát triển đã tận dụng ngay máy chủ này để cài đặt cơ sở dữ liệu và vận hành ứng dụng trực tiếp (On-premises). Việc này giúp hệ thống được vận hành thực tế ngay lập tức mà không cần tốn thời gian chờ đợi phê duyệt mua sắm phần cứng mới, đồng thời giảm thiểu chi phí đầu tư ban đầu về mức 0 đồng.",
            
            "rm_b2_title": "Hạ tầng cáp LAN nội bộ kết nối sẵn mượt mà:",
            "rm_b2_desc": "Máy chủ thử nghiệm được đặt trực tiếp và kết nối an toàn vào tủ mạng switch trung tâm của trạm biến áp. Nhờ vậy, tất cả các máy tính của kỹ sư trực ca và máy tính trưởng trạm đều dễ dàng truy cập cổng thông tin với tốc độ truyền tải cực cao (Gigabit LAN), ổn định tuyệt đối và hoàn toàn không phụ thuộc vào kết nối Internet ra bên ngoài.",
            
            "rm_b3_title": "Môi trường thực nghiệm và tương tác ca trực trực tiếp:",
            "rm_b3_desc": "Lợi thế lớn nhất là hệ thống đặt ngay tại phòng điều khiển trung tâm trạm. Nhóm phát triển (sự phối hợp chặt chẽ giữa Mr Quang và đội ngũ phát triển) có cơ hội làm việc và lấy phản hồi trực tiếp từ các kỹ sư vận hành trong suốt các ca trực 24/7. Điều này giúp nhanh chóng tinh chỉnh các form nhập liệu, logic tính hao hụt điện năng và cơ chế cảnh báo logic để bám sát 100% quy trình vận hành thực tế của trạm.",

            // Slide 2: Equipment details (Roadmap)
            "rm_s2_tag": "// Nhu cầu vật tư hiện tại",
            "rm_s2_title": "Vật Tư Đề Xuất Mua Bổ Sung",
            "rm_s2_sub": "<strong style=\"color:var(--neon-pink);\">Tương tác trực quan:</strong> Nhấn vào từng vật tư bên dưới để xem lý do kỹ thuật bắt buộc và mô phỏng 3D đối tượng:",
            "rm_s2_i1_title": "SSD Enterprise 1TB (x2 ổ đĩa)",
            "rm_s2_i1_desc": "Thiết lập cấu hình RAID 1 chạy song song (Mirroring) đảm bảo an toàn dữ liệu 100% khi có sự cố vật lý.",
            "rm_s2_i2_title": "Switch mạng chuyên dụng",
            "rm_s2_i2_desc": "Thiết lập phân đoạn mạng LAN riêng biệt, nâng cao độ bảo mật và độ trễ truyền dữ liệu vận hành.",
            "rm_s2_i3_title": "E-mail riêng cho nhóm phát triển",
            "rm_s2_i3_desc": "Tự động hóa thông báo lỗi, gửi báo cáo và phê duyệt từ xa Lệnh Công Tác qua e-mail.",
            "rm_s2_i4_title": "Địa chỉ Domain riêng chuyên nghiệp",
            "rm_s2_i4_desc": "Tên miền chính thức dự kiến <strong>dcgeportal.vn</strong> để định danh và chuyên nghiệp hóa hệ thống.",
            "rm_s2_slide_hdr": "VẬT TƯ ĐỀ XUẤT MUA SẮM",
            "rm_s2_slide_hint": "Click các vật tư bên trái để xem lý do kỹ thuật chi tiết",

            // Slide 3: scaling Server (Roadmap)
            "rm_scale_tag": "// Định hướng tương lai · Hệ thống mở rộng",
            "rm_scale_title": "Mở Rộng Mô Hình & Scaling Server/UPS",
            "rm_scale_sub": "Thiết kế nâng cao sử dụng máy chủ chuyên dụng Dell R260 kết hợp cùng bộ lưu điện an toàn Santak C3K:",
            "rm_s2_i3_desc": "Tự động hóa thông báo lỗi, gửi báo cáo và phê duyệt từ xa Lệnh Công Tác qua e-mail.",
            "rm_s2_i4_title": "Địa chỉ Domain riêng chuyên nghiệp",
            "rm_s2_i4_desc": "Tên miền chính thức dự kiến <strong>dcgeportal.vn</strong> để định danh và chuyên nghiệp hóa hệ thống.",
            "rm_s2_slide_hdr": "VẬT TƯ ĐỀ XUẤT MUA SẮM",
            "rm_s2_slide_hint": "Click các vật tư bên trái để xem lý do kỹ thuật chi tiết",

            // Slide 3: scaling Server (Roadmap)
            "rm_scale_tag": "// Định hướng tương lai · Hệ thống mở rộng",
            "rm_scale_title": "Mở Rộng Mô Hình & Scaling Server/UPS",
            "rm_scale_sub": "Thiết kế nâng cao sử dụng máy chủ chuyên dụng Dell R260 kết hợp cùng bộ lưu điện an toàn Santak C3K:",
            "rm_scale_i1_title": "Hỗ trợ phân mảng dữ liệu (Data Partitioning)",
            "rm_scale_i1_desc": "Sức mạnh xử lý của <strong>CPU Xeon E-2468 (8 nhân / 16 luồng)</strong> và <strong>64GB RAM DDR5 ECC</strong> hỗ trợ phân mảng cơ sở dữ liệu lớn (SCADA, lịch sử phụ tải trạm) theo thời gian trực ca, giúp tối ưu hóa bộ nhớ đệm cache và tăng tốc độ truy xuất báo cáo tức thì.",
            "rm_scale_i2_title": "Hỗ trợ phân tách các Module vận hành độc lập",
            "rm_scale_i2_desc": "Sẵn sàng chạy ảo hóa/Docker cô lập các module nghiệp vụ chuyên biệt: module SCADA quét cổng dữ liệu tự động, module giám sát IoT cảm biến nhiệt độ đầu cáp, và module số hóa Lệnh Công Tác. Hỗ trợ nâng cấp từng mảng mà không gây downtime toàn trạm.",
            "rm_scale_i3_title": "Tối ưu hiệu năng Web & Băng thông LAN",
            "rm_scale_i3_desc": "Sự kết hợp giữa <strong>2 × 1TB Enterprise NVMe SSD (chạy RAID 1 cứng qua card PERC H355/H755)</strong> và <strong>băng thông Dual 1GbE LOM</strong> đảm bảo loại bỏ hoàn toàn hiện tượng nghẽn cổ chai đọc/ghi I/O, phản hồi giao diện web tức thì kể cả khi có hàng trăm yêu cầu cùng lúc.",
            "rm_scale_i4_title": "Đảm bảo nguồn điện sạch liên tục (UPS Santak C3K)",
            "rm_scale_i4_desc": "Tích hợp bộ lưu điện <strong>Online 3000VA</strong> có ắc quy khô kín khí trong thân máy bảo vệ server Dell R260 khỏi các sự cố sốc điện, sụt áp hoặc mất điện tự dùng đột ngột của trạm 110kV. Công nghệ chuyển đổi kép tạo ra dòng điện hình sin chuẩn sạch, kéo dài tuổi thọ phần cứng máy chủ.",
            "rm_scale_tbl_title": "CẤU HÌNH GÓI THIẾT BỊ MỞ RỘNG",
            "rm_scale_tbl_col1": "Thiết bị mở rộng",
            "rm_scale_tbl_col2": "Thông số kỹ thuật khuyến nghị",
            "rm_scale_tbl_server": "1. Máy chủ chuyên dụng",
            "rm_scale_tbl_server_spec": "Dell PowerEdge R260 (CPU Xeon E-2468, 64GB DDR5 ECC, 2x1TB SSD Enterprise, card RAID PERC H355/H755, Dual 1GbE)",
            "rm_scale_tbl_ups": "2. Bộ lưu điện UPS",
            "rm_scale_tbl_ups_spec": "Santak Castle C3K (3000VA / 2700W, Pin khô kín khí tích hợp sẵn trong máy)",
            "rm_scale_tbl_server_price": "Giá tham khảo máy chủ",
            "rm_scale_tbl_ups_price": "Giá tham khảo UPS",
            "rm_scale_tbl_total": "Tổng gói (Server + UPS)",

            // Slide 4: replication (Roadmap)
            "rm_rep_tag": "// Triển khai diện rộng",
            "rm_rep_title": "Nhân Rộng Mô Hình Cho Trạm Khác",
            "rm_rep_sub": "Click vào các dòng thiết bị trong bảng dưới đây để xem lý do kỹ thuật chi tiết và hình ảnh solo trong suốt:",
            "rm_rep_tbl_col1": "Thiết bị phần cứng chuyên dụng / Trạm",
            "rm_rep_tbl_col2": "Chi tiết kỹ thuật & Phân kỳ giai đoạn triển khai",
            "rm_rep_tbl_col3": "Chi phí tham khảo",
            "rm_rep_tbl_server_gd1": "⚡ Máy chủ Dell PowerEdge R260 (GĐ 1)",
            "rm_rep_tbl_server_gd1_spec": "GĐ 1: Trang bị 01 máy chủ độc lập chạy lõi hệ thống, 64GB RAM DDR5 ECC, 2x1TB SSD Enterprise (RAID 1)",
            "rm_rep_tbl_server_gd2": "⚡ Máy chủ Dell PowerEdge R260 (GĐ 2)",
            "rm_rep_tbl_server_gd2_spec": "GĐ 2: Bổ sung 1 hoặc nhiều server tùy nhu cầu để nâng cấp lên dự phòng nóng Active/Standby HA",
            "rm_rep_tbl_switch": "⚡ 01 Switch mạng Gigabit",
            "rm_rep_tbl_switch_spec": "Switch 16 cổng chuyên dụng lắp tủ rack máy chủ của trạm",
            "rm_rep_tbl_ups": "⚡ 01 Bộ UPS Santak C3K (Pin trong)",
            "rm_rep_tbl_ups_spec": "UPS Online 3000VA / 2700W với hệ thống ắc quy khô tích hợp sẵn",
            "rm_rep_tbl_cables": "⚡ Vật tư cáp mạng, thi công",
            "rm_rep_tbl_cables_spec": "Cáp mạng CAT6 bọc chống nhiễu, đầu bấm RJ45, gen luồn bảo vệ",
            "rm_rep_tbl_total_gd1": "TỔNG DỰ TOÁN GIAI ĐOẠN 1",
            "rm_rep_tbl_total_gd2": "DỰ KIẾN NÂNG CẤP GIAI ĐOẠN 2",
            "rm_rep_tbl_desc": "* Ghi chú: Việc chia nhỏ lộ trình đầu tư máy chủ chuyên dụng Dell PowerEdge R260 làm 2 giai đoạn giúp tối ưu hóa ngân sách đầu tư ban đầu của trạm biến áp mới, đồng thời sẵn sàng mở rộng năng lực xử lý (High Availability hoặc phân tải dữ liệu) bất cứ lúc nào.",
            "rm_rep_slide_hdr": "HẠ TẦNG TRẠM BIẾN ÁP MỚI",
            "rm_rep_slide_hint": "Click các dòng thiết bị bên trái để xem lý do kỹ thuật chi tiết"
        },
        en: {
            // Header Links
            "nav_compare": "Compare",
            "nav_roadmap": "Present & Future",
            "nav_story": "Journey",
            "nav_home": "Home",

            // --- TRANG STORY.HTML ---
            "story_main_title": "DIGITALIZATION JOURNEY 2026",
            "st0_date": "Beginning • Late 2025",
            "st0_title": "Issues & Ideas",
            "st0_desc": "During shifts at Deep C2 110kV Substation, I noticed that manual records and Excel sheets caused issues: time-consuming, prone to errors, and difficult to query history. The idea of a digitalization portal emerged.",
            
            "st1_date": "Early 2026",
            "st1_title": "Planning & Design",
            "st1_desc": "Decided to build the project. The dev team - Mr. Quang and me - planned the layout, choosing web technologies. Core modules (login, load logs, Work Orders) began taking shape.",
            
            "st2_date": "May 2026",
            "st2_title": "Beta Version 0.1.0",
            "st2_desc": "The website was launched in version 0.1.0dev. We tested it internally, fixed calculation bugs, and added basic features.",
            
            "st3_date": "June 2026",
            "st3_title": "Go Live Version 0.2.0",
            "st3_desc": "After internal testing, we got approval to deploy on a physical server at the station. We set up local LAN access and began real shifts operations.",
            
            "st4_date": "July 2026",
            "st4_title": "Trial and Optimization",
            "st4_desc": "Receiving valuable feedback from shifts, the team upgraded, resolved database bugs, and optimized layouts. We look forward to more suggestions to continue improvement.<br>Simultaneously, leveraging lessons from early runs, we planned the major 1.0.0 release to optimize UX/UI and include advanced calculations.",
            "st4_date": "July 2026",
            "st4_title": "Trial and Optimization",
            "st4_desc": "Receiving valuable feedback from shifts, the team upgraded, resolved database bugs, and optimized layouts. We look forward to more suggestions to continue improvement.<br>Simultaneously, leveraging lessons from early runs, we planned the major 1.0.0 release to optimize UX/UI and include advanced calculations.",

            "st5_date": "Present",
            "st5_title": "System Stabilization",
            "st5_desc": "Version 1.0 is currently being polished with a sleek dashboard, stable network connections, and database sync. We implemented baseline cybersecurity policies to prevent data loss. The next step is drafting server scaling plans for expansion.",

            // Thumbs
            "thumb0_lbl": "Start",       "thumb0_desc": "Ideation",
            "thumb1_lbl": "Planning",    "thumb1_desc": "Design",
            "thumb2_lbl": "v0.1.0",      "thumb2_desc": "Beta Run",
            "thumb3_lbl": "v0.2.0",      "thumb3_desc": "Go Live",
            "thumb4_lbl": "07/2026",     "thumb4_desc": "Production",
            "thumb5_lbl": "v1.0",        "thumb5_desc": "Optimize",

            // --- TRANG COMPARE.HTML ---
            "cmp_slide1_tag": "// Objective Overview",
            "cmp_slide1_title": "Compare & Select Together",
            "cmp_slide1_sub": "We will compare currently used manual tools with the proposed web platform to find the optimal operations solution for the 110kV Substation.",
            "cmp_opt1_title": "Isolated Tools",
            "cmp_opt1_desc": "Excel, notebooks, individual Word/PDF files - the traditional manual method currently in use.",
            "cmp_opt2_title": "Microsoft Power Platform",
            "cmp_opt2_desc": "Pre-integrated with corporate email/Teams. Rapid configuration but relies on cloud storage and recurring license fees.",
            "cmp_opt3_title": "Self-developed Web Platform",
            "cmp_opt3_desc": "100% customized web app built around real substation shifts, utilizing local servers for data control and flexibility.",
            "cmp_hint_nav": "Arrow keys | 1-8 quick navigation | Space: Play/Pause | ESC: Close Presentation",

            // Slide 2: Công cụ rời rạc detail
            "cmp_s2_tag": "📋 Option 01",
            "cmp_s2_title": "Isolated Tools",
            "cmp_s2_sub": "Excel sheets, paper shift logs, fragmented Word/PDF files - the traditional manual methods used at most operations stations.",
            "cmp_s2_pro_h": "Pros",
            "cmp_s2_pro1": "No initial capital investment required; Microsoft Office is widely available.",
            "cmp_s2_pro2": "Staff is already familiar with Excel, requiring zero re-training time.",
            "cmp_s2_pro3": "Operates 100% offline; completely immune to network dropouts.",
            "cmp_s2_pro4": "Flexible and easy to modify structures on the fly without developers.",
            "cmp_s2_pro5": "Data is saved locally on shift computers; no cloud compliance worries.",
            "cmp_s2_con_h": "Cons",
            "cmp_s2_con1": "Fragmented data; very hard to generate cross-shift or monthly summary reports.",
            "cmp_s2_con2": "Prone to manual formula errors, file corruption, or accidental deletions.",
            "cmp_s2_con3": "Manual report aggregation wastes 2-3 hours per week for shift engineers.",
            "cmp_s2_con4": "Lack of logical validation; incorrect or impossible values go unnoticed.",
            "cmp_s2_con5": "Cannot easily query historical trends or generate automatic load graphs.",
            "cmp_s2_con6": "No user access control; risk of historical records being modified.",
            "cmp_s2_eval": "💡 <strong>Quick Evaluation:</strong> Only viable for very small scale operations with few shifts, where historical data mining is not needed.",

            // Slide 3: Power Platform detail
            "cmp_s3_tag": "🔷 Option 02",
            "cmp_s3_title": "Microsoft Power Platform",
            "cmp_s3_sub": "Low-code application suite (Power Apps, Power BI, Power Automate) hosted on the corporate Microsoft cloud environment.",
            "cmp_s3_pro_h": "Major Pros",
            "cmp_s3_pro1": "Deep native integration with corporate Microsoft 365, Teams, and Sharepoint.",
            "cmp_s3_pro2": "Power Apps enables relatively fast mobile/desktop data entry layout creation.",
            "cmp_s3_pro3": "Power BI provides highly advanced, interactive reporting dashboards.",
            "cmp_s3_pro4": "Enterprise-grade cybersecurity certified by Microsoft global standards.",
            "cmp_s3_pro5": "Drag-and-drop components reduce pure custom coding timelines.",
            "cmp_s3_pro6": "Official technical support via local authorized Microsoft vendors.",
            "cmp_s3_con_h": "Major Cons",
            "cmp_s3_con1": "High monthly recurring license cost per user (adds up significantly).",
            "cmp_s3_con2": "Data must reside on Microsoft Cloud servers; no physical local control at the station.",
            "cmp_s3_con3": "Requires persistent 24/7 internet connection; dropouts freeze operations.",
            "cmp_s3_con4": "Advanced user interface tweaks and complex math logic are constrained by the framework.",
            "cmp_s3_con5": "Needs designated IT admins to manage environments, access rights, and connectors.",
            "cmp_s3_con6": "Procurement and licensing approvals take substantial time in state-owned enterprises.",
            "cmp_s3_eval": "💡 <strong>Quick Evaluation:</strong> Best suited for corporate headquarters with pre-purchased M365 suites, large IT budgets, and stable internet, focusing on multi-department reports.",

            // Slide 4: Web Platform detail
            "cmp_s4_tag": "🌐 Chosen Option",
            "cmp_s4_title": "Self-developed Web Platform",
            "cmp_s4_sub": "A 100% customized web application engineered strictly around real shift operations of the substation.",
            "cmp_s4_pro_h": "Core Pros",
            "cmp_s4_pro1": "100% custom UI layout and validation logic tailored precisely to shift workflows.",
            "cmp_s4_pro2": "Near-zero long term operating cost - runs directly on existing server hardware.",
            "cmp_s4_pro3": "Absolute local data ownership (On-premises), isolated from the public web.",
            "cmp_s4_pro4": "Optimized specifically for wide monitors in the main control room.",
            "cmp_s4_pro5": "Generates standardized Excel/PDF reports compliant with utility regulations.",
            "cmp_s4_pro6": "Runs flawlessly inside the local LAN; does not require external internet.",
            "cmp_s4_pro7": "Detailed role-based access control, locking past shift logs from modification.",
            "cmp_s4_con_h": "Cons",
            "cmp_s4_con1": "Requires upfront development and testing phase (typically 3 to 6 months).",
            "cmp_s4_con2": "Relies on internal developers' coding capability to construct and scale.",
            "cmp_s4_con3": "The internal team must maintain the host, database, and handle bug fixes.",
            "cmp_s4_con4": "No third-party 24/7 technical hotline from global software vendors.",
            "cmp_s4_eval": "💡 <strong>Quick Evaluation:</strong> The optimal choice for standalone substations requiring high data confidentiality, deep workflow integration, and minimized operating budgets.",

            // Slide 5: Radar axis & details
            "radar_axis_data": "Data Control",
            "radar_axis_custom": "Customization",
            "radar_axis_dev": "Independent Dev",
            "radar_axis_cost": "Cost Efficiency",
            "radar_axis_offline": "Offline Mode",
            "radar_axis_security": "Local Security",
            "cmp_radar_title": "Technical Comparison Diagram",
            "cmp_radar_sub": "COMPARATIVE SCORE (Scale of 10)",
            "cmp_radar_axis_title": "Comparison Metric",
            "cmp_radar_score_discrete": "Manual",
            "cmp_radar_score_power": "Power",
            "cmp_radar_score_web": "Web App",
            "cmp_radar_desc": "💡 The chart highlights the superior advantages of the <strong>Web Platform</strong>: complete data control, deep workflow customization, and absolute local security in the substation LAN.",

            // Slide 6: Tech improvement process
            "cmp_s6_tag": "📈 Workflow & Efficiency",
            "cmp_s6_title": "Technology Improvement Impact",
            "cmp_s6_sub": "Quantitative comparison of task execution time and error rates between old and new methods:",
            "cmp_s6_bar_title": "Task Completion Time (Min) &amp; Error Rate (%)",
            "cmp_s6_desc": "📊 The chart illustrates that report preparation time dropped from <strong>120 mins to 5 mins</strong> (a 95.8% reduction), while logical data entry errors fell from <strong>15% to 0%</strong> due to automated validation rules.",

            // Slide 7: Compare Table
            "tbl_hdr_criteria": "Technical Criteria",
            "tbl_hdr_discrete": "📋 Isolated Tools",
            "tbl_hdr_power": "🔷 Power Platform",
            "tbl_hdr_web": "🌐 Web Platform",
            "tbl_c1": "Initial Cost", "tbl_c1_d": "Very Low", "tbl_c1_p": "High (licensing)", "tbl_c1_w": "Medium",
            "tbl_c2": "Operating Cost / Year", "tbl_c2_d": "Near 0", "tbl_c2_p": "High (per user)", "tbl_c2_w": "Low",
            "tbl_c3": "Workflow Customization", "tbl_c3_d": "Restricted", "tbl_c3_p": "Limited", "tbl_c3_w": "100%",
            "tbl_c4": "On-premises Storage", "tbl_c4_d": "Yes", "tbl_c4_p": "Cloud MS", "tbl_c4_w": "Local Server",
            "tbl_c5": "Automated Reports", "tbl_c5_d": "Manual", "tbl_c5_p": "Power Automate", "tbl_c5_w": "Auto Excel/PDF",
            "tbl_c6": "Offline Capability", "tbl_c6_d": "Fully Offline", "tbl_c6_p": "Needs Internet", "tbl_c6_w": "Local LAN",
            "tbl_c7": "Deployment Time", "tbl_c7_d": "Instant", "tbl_c7_p": "1-3 Months", "tbl_c7_w": "3-6 Months",
            "tbl_c8": "Shift Access Rights", "tbl_c8_d": "None", "tbl_c8_p": "Standard", "tbl_c8_w": "Granular Roles",

            // Slide 8: Conclusion
            "cmp_s8_tag": "🏆 Conclusion",
            "cmp_s8_title": "Why Choose Web Platform?",
            "tbl_hdr_power": "🔷 Power Platform",
            "tbl_hdr_web": "🌐 Web Platform",
            "tbl_c1": "Data Control &amp; Ownership", "tbl_c1_d": "Local client machine", "tbl_c1_p": "MS Cloud (Overseas)", "tbl_c1_w": "Direct local server",
            "tbl_c2": "Internal Data Security", "tbl_c2_d": "Depends on client PC", "tbl_c2_p": "Microsoft Cloud", "tbl_c2_w": "Fully within LAN",
            "tbl_c3": "UI &amp; Logic Customization", "tbl_c3_d": "Very restricted", "tbl_c3_p": "Power Apps template", "tbl_c3_w": "100% customized",
            "tbl_c4": "Independent Extension", "tbl_c4_d": "Not possible", "tbl_c4_p": "Requires MS license", "tbl_c4_w": "Free upgrades",
            "tbl_c5": "Report Formatting", "tbl_c5_d": "Fully manual", "tbl_c5_p": "Power BI (generic format)", "tbl_c5_w": "100% auto Excel/PDF",
            "tbl_c6": "Mail/Teams Integration", "tbl_c6_d": "None", "tbl_c6_p": "Out of box (Major pro)", "tbl_c6_w": "Integrable via API",
            "tbl_c7": "Offline Operation", "tbl_c7_d": "Normal", "tbl_c7_p": "Fails without internet", "tbl_c7_w": "Normal (LAN)",
            "tbl_c8": "Long-term Operation Cost", "tbl_c8_d": "Near zero", "tbl_c8_p": "High (per user)", "tbl_c8_w": "Only server maintenance",
            "tbl_c9": "Substation Suitability", "tbl_c9_d": "Low", "tbl_c9_p": "Medium", "tbl_c9_w": "Highest ★★★",
            "compare_tbl_note_power": "ℹ️ <strong style=\"color:var(--neon-purple);\">Note:</strong> Power Platform is pre-integrated with company mail and Teams (a highly convenient native feature).",
            "compare_tbl_note_web": "💡 <strong style=\"color:var(--neon-blue);\">Roadmap:</strong> Once stable, Web Platform can easily integrate SMTP or Webhook APIs to automate mail/Teams alerts.",

            // Slide 8: Conclusion
            "cmp_s8_tag": "🏆 Conclusion",
            "cmp_s8_title": "Why Choose Web Platform?",
            "cmp_s8_sub": "Optimizing shift workflows and ensuring information security are paramount at substations:",
            "cmp_s8_cp1_title": "Local control and data security (On-premises):",
            "cmp_s8_cp1_desc": "Electric production parameters, operational layout schemes, and Work Orders are stored directly on-site. Data is never exposed to the public web, eliminating risks of data leaks or connectivity dependency.",
            "cmp_s8_cp2_title": "Deep customization matching shift realities:",
            "cmp_s8_cp2_desc": "The application interface and data checks are specifically built for Deep C2 110kV Substation shift guidelines, avoiding generic layouts that block efficient work.",
            "cmp_s8_cp3_title": "High financial return over product lifecycle:",
            "cmp_s8_cp3_desc": "No recurring monthly license fees per engineer. The system operates stably on existing server infrastructure, keeping operational overhead to an absolute minimum.",


            // --- TRANG ROADMAP.HTML ---
            "rm_main_title": "Infrastructure Advantages",
            "rm_main_sub": "Initial deployment succeeded by leveraging and optimizing existing resources at the 110kV Substation.",
            "rm_panel_title": "Detailed Analysis of Existing Infrastructure",
            "rm_panel_intro": "The deployment of the <strong>Web Platform</strong> at Deep C2 110kV Substation benefits from key on-site hardware advantages:",
            "rm_s2_i2_title": "Gigabit LAN Switch",
            "rm_s2_i2_desc": "Establishes a dedicated, secure subnet for operations data traffic, minimizing network lag.",
            "rm_s2_i3_title": "Dev Team Dedicated E-mail",
            "rm_s2_i3_desc": "Automates SMTP alarms for out-of-bound logs and facilitates remote digital Work Order OTP approval.",
            "rm_s2_i4_title": "Substation Dedicated Domain",
            "rm_s2_i4_desc": "Formal domain registration of <strong>dcgeportal.vn</strong> simplifies access for operators.",
            "rm_s2_slide_hdr": "PROPOSED EQUIPMENT SPECIFICATION",
            "rm_s2_slide_hint": "Click hardware items on the left to read detailed technical reasons",

            // Slide 3: scaling Server (Roadmap)
            "rm_scale_tag": "// Future Direction · Expansion System",
            "rm_scale_title": "Model Expansion & Server/UPS Scaling",
            "rm_scale_sub": "Advanced design using Dell PowerEdge R260 server and Santak Castle C3K online UPS:",
            "rm_scale_i1_title": "Support for Data Partitioning",
            "rm_scale_i1_desc": "The computational capacity of <strong>CPU Xeon E-2468 (8 Cores / 16 Threads)</strong> and <strong>64GB DDR5 ECC RAM</strong> allows partitioning large databases (SCADA, load logs) by shift schedules, speeding up queries.",
            "rm_scale_i2_title": "Separation of Independent Modules",
            "rm_scale_i2_desc": "Enables virtualization/Docker containerization of specialized services: SCADA automated polling modules, IoT terminal sensors, and digital Work Order workflows, allowing separate software upgrades.",
            "rm_scale_i3_title": "Optimizing Web Performance & LAN Bandwidth",
            "rm_scale_i3_desc": "The combination of <strong>2 × 1TB NVMe Enterprise SSDs (RAID 1 via PERC H355/H755)</strong> and <strong>Dual 1GbE network interface cards</strong> eliminates disk I/O bottlenecks and supports concurrent queries.",
            "rm_scale_i4_title": "Continuous Clean Power Feed (UPS Santak C3K)",
            "rm_scale_i4_desc": "Integrating a <strong>3000VA Online UPS</strong> with built-in sealed VRLA batteries shields the Dell R260 server from spikes, brownouts, or substation power outages, outputting pure sine wave current.",
            "rm_scale_tbl_title": "EXPANDED EQUIPMENT PACKAGE CONFIGURATION",
            "rm_scale_tbl_col1": "Equipment",
            "rm_scale_tbl_col2": "Recommended Specifications",
            "rm_scale_tbl_server": "1. Dedicated Server",
            "rm_scale_tbl_server_spec": "Dell PowerEdge R260 (Xeon E-2468, 64GB DDR5 ECC, 2x1TB SSD Enterprise, card RAID PERC H355/H755, Dual 1GbE)",
            "rm_scale_tbl_ups": "2. Uninterruptible Power Supply (UPS)",
            "rm_scale_tbl_ups_spec": "Santak Castle C3K (3000VA / 2700W, Sealed maintenance-free VRLA AGM dry batteries)",
            "rm_scale_tbl_server_price": "Server Estimated Price",
            "rm_scale_tbl_ups_price": "UPS Estimated Price",
            "rm_scale_tbl_total": "Total Package (Server + UPS)",

            // Slide 4: replication (Roadmap)
            "rm_rep_tag": "// Substation Scaling",
            "rm_rep_title": "Replicating Model to Other Substations",
            "rm_rep_sub": "Click each equipment row below to view technical rationale and transparent 3D renders:",
            "rm_rep_tbl_col1": "Dedicated Hardware Item / Substation",
            "rm_rep_tbl_col2": "Technical Specs & Deployment Phasing",
            "rm_rep_tbl_col3": "Estimated Cost",
            "rm_rep_tbl_server_gd1": "⚡ Dell PowerEdge R260 Server (Phase 1)",
            "rm_rep_tbl_server_gd1_spec": "Phase 1: Deploy 01 dedicated physical server running the core app and RAID 1 database.",
            "rm_rep_tbl_server_gd2": "⚡ Dell PowerEdge R260 Server (Phase 2)",
            "rm_rep_tbl_server_gd2_spec": "Phase 2: Add 1 or more servers to construct High Availability (HA, Active/Standby).",
            "rm_rep_tbl_switch": "⚡ 01 Gigabit Switch",
            "rm_rep_tbl_switch_spec": "Dedicated 16-Port rack-mounted Gigabit switch for local server cabinet communication.",
            "rm_rep_tbl_ups": "⚡ 01 UPS Santak C3K (Dry Battery)",
            "rm_rep_tbl_ups_spec": "3000VA / 2700W Online UPS with internal maintenance-free AGM battery modules.",
            "rm_rep_tbl_cables": "⚡ Network Cabling & Installation",
            "rm_rep_tbl_cables_spec": "Shielded CAT6 cabling, RJ45 connectors, protective conduits to prevent EMI.",
            "rm_rep_tbl_total_gd1": "PHASE 1 TOTAL ESTIMATE",
            "rm_rep_tbl_total_gd2": "PHASE 2 UPGRADE ESTIMATE",
            "rm_rep_tbl_desc": "* Note: Splitting the Dell PowerEdge R260 server procurement into two phases optimizes initial capital budgets for new substations, while remaining fully ready for High Availability clustering.",
            "rm_rep_slide_hdr": "NEW SUBSTATION INFRASTRUCTURE",
            "rm_rep_slide_hint": "Click equipment items on the left to read detailed technical reasons"
        },
        ja: {
            // Header Links
            "nav_compare": "比較分析",
            "nav_roadmap": "現在と未来",
            "nav_story": "ストーリー",
            "nav_home": "ホーム",

            // --- TRANG STORY.HTML ---
            "story_main_title": "2026年デジタル化への道のり",
            "story_main_sub": "ゼロからの運用管理および最適化プラットフォームの開発進化<br>Deep C2 110kV変電所にて。",
            "story_sec_tech": "技術基準",
            "story_sec_sol": "解決策の比較",
            "story_sec_slides": "分析スライド",
            "story_hint": "矢印キーまたはドットをクリックして移動 | 自動スライドショーの再生",
            "rm_rep_tbl_server_gd2_spec": "Phase 2: Add 1 or more servers to construct High Availability (HA, Active/Standby).",
            "rm_rep_tbl_switch": "⚡ 01 Gigabit Switch",
            "rm_rep_tbl_switch_spec": "Dedicated 16-Port rack-mounted Gigabit switch for local server cabinet communication.",
            "rm_rep_tbl_ups": "⚡ 01 UPS Santak C3K (Dry Battery)",
            "rm_rep_tbl_ups_spec": "3000VA / 2700W Online UPS with internal maintenance-free AGM battery modules.",
            "rm_rep_tbl_cables": "⚡ Network Cabling & Installation",
            "rm_rep_tbl_cables_spec": "Shielded CAT6 cabling, RJ45 connectors, protective conduits to prevent EMI.",
            "rm_rep_tbl_total_gd1": "PHASE 1 TOTAL ESTIMATE",
            "rm_rep_tbl_total_gd2": "PHASE 2 UPGRADE ESTIMATE",
            "rm_rep_tbl_desc": "* Note: Splitting the Dell PowerEdge R260 server procurement into two phases optimizes initial capital budgets for new substations, while remaining fully ready for High Availability clustering.",
            "rm_rep_slide_hdr": "NEW SUBSTATION INFRASTRUCTURE",
            "rm_rep_slide_hint": "Click equipment items on the left to read detailed technical reasons"
        },
        ja: {
            // Header Links
            "nav_compare": "比較分析",
            "nav_roadmap": "現在と未来",
            "nav_story": "ストーリー",
            "nav_home": "ホーム",

            // --- TRANG STORY.HTML ---
            "story_main_title": "2026年デジタル化への道のり",
            "story_main_sub": "ゼロからの運用管理および最適化プラットフォームの開発進化<br>Deep C2 110kV変電所にて。",
            "story_sec_tech": "技術基準",
            "story_sec_sol": "解決策の比較",
            "story_sec_slides": "分析スライド",

            "st3_date": "2026年6ch",
            "st3_title": "現場実証 - バージョン 0.2.0",
            "st3_desc": "社内テスト の成功後、変電所内の物理サーバーへの配置許可を得ました。休止中のサーバーマシンを利用してローカルネットワークを構築し、現場実証運用を正式に開始しました。",

            "st4_date": "2026年7ch",
            "st4_title": "実証と最適化プロセス",
            "st4_desc": "各現場シフトからのフィードバックを基に、計算ロジックの最適化やデータベースバグ của 修正を行いました。<br>同時に、この実証結果を活かして、大幅なUX/UI改善と高度な計算機能を備えた「1.0.0」メジャーリリースの計画を策定しました。",

            "st5_date": "現在",
            "st5_title": "システム最適化と安定化",
            "st5_desc": "バージョン1.0は現在、洗練されたダッシュボード、安定したネットワーク接続、データベースの同期機能の磨き上げを行っています。情報セキュリティ対策も適用し、データの安全を確保しています。次は、将来のサーバー増設計画を策定します。",

            // Thumbs
            "thumb0_lbl": "起点",       "thumb0_desc": "課題抽出",
            "thumb1_lbl": "計画",       "thumb1_desc": "システム設計",
            "thumb2_lbl": "v0.1.0",      "thumb2_desc": "開発テスト",
            "thumb3_lbl": "v0.2.0",      "thumb3_desc": "実証開始",
            "thumb4_lbl": "07/2026",     "thumb4_desc": "現場評価",
            "thumb5_lbl": "v1.0",        "thumb5_desc": "システム最適化",

            // --- TRANG COMPARE.HTML ---
            "cmp_slide1_tag": "// 比較目的",
            "cmp_slide1_title": "共同比較と解決策の選定",
            "cmp_slide1_sub": "現在の現場業務で使用されている個別ツールと、提案するウェブプラットフォームを多角的に比較し、110kV変電所にとって最適な運用ソリューションを選定します。",
            "cmp_opt1_title": "個別ツール",
            "cmp_opt1_desc": "Excel、ノート、個別のWord/PDFファイル。多くの変電所で採用されている従来の手作業による運用方法。",
            "cmp_opt2_title": "Microsoft Power Platform",
            "cmp_opt2_desc": "社内のメールやTeamsと標準で統合。迅速に構築できますが、クラウド依存と継続的なライセンス費用が発生します。",
            "cmp_opt3_title": "自社開発Web Platform",
            "cmp_opt3_desc": "変電所の実際のシフト業務に合わせて100%カスタマイズされたWebアプリ。オンプレミスサーバーによるデータ管理で柔軟な拡張が可能。",
            "cmp_hint_nav": "矢印キー | 1-8キーでジャンプ | Space: 再生/一時停止 | ESC: 終了",

            // Slide 2: Công cụ rời rạc detail
            "cmp_s2_tag": "📋 選択肢 01",
            "cmp_s2_title": "個別ツール",
            "cmp_s2_sub": "Excel、手書きログ、Word/PDFファイル - 変電所で広く使われている従来の手動管理方法。",
            "cmp_s2_pro_h": "長所",
            "cmp_s2_pro1": "初期の設備投資が不要。Microsoft Office製品がすぐに利用可能。",
            "cmp_s2_pro2": "Excelの操作に慣れているため、追加の教育時間がほぼ不要。",
            "cmp_s2_pro3": "完全なオフライン稼働。ネットワーク回線の切断に影響されない。",
            "cmp_s2_pro4": "現場の要件に応じて、シート構成を柔軟に自己修正可能。",
            "cmp_s2_pro5": "データはローカルPCに保存され、クラウド移行の懸念がない。",
            "cmp_s2_con_h": "短所",
            "cmp_s2_con1": "データが分散し、複数シフトや月次集計レポートの作成が極めて困難。",
            "cmp_s2_con2": "計算式の破損やファイルの誤削除など、人的ミスのリスクが高い。",
            "cmp_s2_con3": "手動のデータ集計作業に、毎シフト2〜3時間の無駄な時間がかかる。",
            "cmp_s2_con4": "入力値の検証ルールがなく、不合理なデータ誤入力が発見できない。",
            "cmp_s2_con5": "過去データのトレンド検索や、電力負荷推移グラフの自動描画が不可能。",
            "cmp_s2_con6": "権限管理がないため、過去の運転履歴が上書きされるリスクがある。",
            "cmp_s2_eval": "💡 <strong>簡易評価:</strong> 規模が非常に小さく、データ分析や長期保存を必要としない変電所にのみ適しています。",

            // Slide 3: Power Platform detail
            "cmp_s3_tag": "🔷 選択肢 02",
            "cmp_s3_title": "Microsoft Power Platform",
            "cmp_s3_sub": "企業のMicrosoftクラウド上で動作するローコードアプリ群（Power Apps, Power BI, Power Automate）。",
            "cmp_s3_pro_h": "主な長所",
            "cmp_s3_pro1": "社内のMicrosoft 365やTeamsとの高い標準連携力。",
            "cmp_s3_pro2": "Power Appsによるモバイル・PC向け入力画面の迅速なモック開発。",
            "cmp_s3_pro3": "Power BIによる視覚的で高度な分析ダッシュボード構築能力。",
            "cmp_s3_pro4": "Microsoftの管理によるエンタープライズレベルのセキュリティ標準の準拠。",
            "cmp_s3_pro5": "パーツのドラッグ＆ドロップで記述コード数を大幅に削減可能。",
            "cmp_s3_pro6": "国内の公認代理店パートナーによる公式サポート体制。",
            "cmp_s3_con_h": "主な短所",
            "cmp_s3_con1": "ユーザー（アカウント数）ごとに発生する高額な月額ライセンス費用。",
            "cmp_s3_con2": "データはMicrosoftクラウドに保存され、変電所内での物理的なデータ管理は不可。",
            "cmp_s3_con3": "常時インターネット接続が必須。通信切断時は業務が完全に停止。",
            "cmp_s3_con4": "詳細なUIのカスタマイズや特殊な数学処理ロジックの追加に制限がある。",
            "cmp_s3_con5": "管理者（IT部門）によるアクセス権限や環境構成の厳格な管理が必要。",
            "cmp_s3_con6": "ライセンス調達における社内承認や契約処理に長い時間が必要。",
            "cmp_s3_eval": "💡 <strong>簡易評価:</strong> すでにM365ライセンスが社内配布されており、十分なIT予算と安定した通信網を持つ本社レベルのレポート集計に向いています。",

            // Slide 4: Web Platform detail
            "cmp_s4_tag": "🌐 推奨案",
            "cmp_s4_title": "自社開発Web Platform",
            "cmp_s4_sub": "変電所の実際のシフト業務フローに完全に基づき、100%カスタマイズしたオンプレミスWebアプリ。",
            "cmp_s4_pro_h": "主要な長所",
            "cmp_s4_pro1": "現場業務に100%最適化した専用インターフェースと入力検証ロジック。",
            "cmp_s4_pro2": "長期的コストの最小化 - 現有の空きサーバー筐体にホ스트するため設備費0円。",
            "cmp_s4_pro3": "変電所内（オンプレミス）での完全なデータ制御。外部漏洩リスクを遮断。",
            "cmp_s4_pro4": "監視室のワイドモニターで見やすさを極限まで高めた独自設計レイアウト。",
            "cmp_s4_pro5": "電力業界の規定に完全準拠したExcelおよびPDF帳票のワンクリック自動作成。",
            "cmp_s4_pro6": "構内LAN内だけで安定稼働。外部のインターネット回線障害の影響を受けない。",
            "cmp_s4_pro7": "厳格なロール別アクセス制限。過去の運転履歴の不正変更を防止。",
            "cmp_s4_con_h": "短所",
            "cmp_s4_con1": "初期開発と稼働テストに数ヶ月（通常3〜6ヶ月）の期間が必要。",
            "cmp_s4_con2": "社内の開発エンジニアのプログラミング能力に依存する。",
            "cmp_s4_con3": "不具合発生時やOSアップデートなどの保守作業を自主管理する必要がある。",
            "cmp_s4_con4": "大手ソフトベンダーのような外部の24時間サポート窓口は存在しない。",
            "cmp_s4_eval": "💡 <strong>簡易評価:</strong> データの重要性が高く、業務プロセスのカスタマイズ要求が強い独立した変電所において、最も効果的なソリューションです。",

            // Slide 5: Radar axis & details
            "radar_axis_data": "データ制御力",
            "radar_axis_custom": "カスタマイズ性",
            "radar_axis_dev": "独立開発性",
            "radar_axis_cost": "長期コスト効率",
            "radar_axis_offline": "オフライン稼働",
            "radar_axis_security": "ローカルセキュリティ",
            "cmp_radar_title": "技術比較レーダーチャート",
            "cmp_radar_sub": "比較評価点（10点満点）",
            "cmp_radar_axis_title": "比較項目",
            "cmp_radar_score_discrete": "手作業",
            "cmp_radar_score_power": "Powerプラットフォーム",
            "cmp_radar_score_web": "Webアプリ",
            "cmp_radar_desc": "💡 自社開発ウェブプラットフォームは、変電所LAN内での完全なデータ制御、業務に応じた柔軟なロジック追加、ローカルセキュリティの観点で他ソリューションを圧倒しています。",

            // Slide 6: Tech improvement process
            "cmp_s6_tag": "📈 プロセスと効率",
            "cmp_s6_title": "技術導入による改善効果",
            "cmp_s6_sub": "従来方式と新プラットフォームでの業務処理時間およびエラー発生率の量的比較：",
            "cmp_s6_bar_title": "タスク処理時間（分） ＆ エラー発生率（％）",
            "cmp_s6_desc": "📊 グラフが示すように、レポート作成時間は<strong>120分から5分</strong>に短縮され（95.8%削減）、自動入力チェックによりデータの誤入力率は<strong>15%から0%</strong>へ低下しました。",

            // Slide 7: Compare Table
            "tbl_hdr_criteria": "技術評価項目",
            "tbl_hdr_discrete": "📋 個別ツール",
            "tbl_hdr_power": "🔷 Power Platform",
            "tbl_hdr_web": "🌐 Web Platform",
            "tbl_c1": "初期コスト", "tbl_c1_d": "極めて低い", "tbl_c1_p": "高額", "tbl_c1_w": "中程度",
            "tbl_c2": "年間維持費", "tbl_c2_d": "ほぼ0", "tbl_c2_p": "高額 (アカウント毎)", "tbl_c2_w": "少額",
            "tbl_c3": "業務最適化度", "tbl_c3_d": "制限あり", "tbl_c3_p": "制限あり", "tbl_c3_w": "100%",
            "tbl_c4": "構内データ蓄積", "tbl_c4_d": "可", "tbl_c4_p": "MSクラウド", "tbl_c4_w": "構内物理サーバー",
            "tbl_c5": "自動帳票出力", "tbl_c5_d": "手動のみ", "tbl_c5_p": "Power Automate", "tbl_c5_w": "自動PDF/Excel出力",
            "tbl_c6": "通信障害耐性", "tbl_c6_d": "完全動作", "tbl_c6_p": "要接続", "tbl_c6_w": "構内LAN動作",
            "tbl_c7": "導入準備期間", "tbl_c7_d": "即時", "tbl_c7_p": "1〜3ヶ月", "tbl_c7_w": "3〜6ヶ月",
            "tbl_c8": "ロール別権限管理", "tbl_c8_d": "なし", "tbl_c8_p": "標準機能", "tbl_c8_w": "詳細権限設定",

            // Slide 8: Conclusion
            "cmp_s8_tag": "🏆 結論のまとめ",
            "cmp_s6_bar3": "3. 独立した機能開発 ＆ 将来の拡張性",
            "cmp_s6_bar4": "4. 長期的な運用コスト効率 (点数が高いほど省コスト)",

            // Slide 7: Compare Table
            "tbl_hdr_criteria": "技術評価項目",
            "tbl_hdr_discrete": "📋 個別ツール",
            "tbl_hdr_power": "🔷 Power Platform",
            "tbl_hdr_web": "🌐 Web Platform",
            "tbl_c1": "データの制御と所有", "tbl_c1_d": "個別クライアントPC", "tbl_c1_p": "MSクラウド（海外）", "tbl_c1_w": "構内物理サーバー",
            "tbl_c2": "構内データセキュリティ", "tbl_c2_d": "個別PC環境に依存", "tbl_c2_p": "Microsoftクラウド", "tbl_c2_w": "構内LAN内で完結",
            "tbl_c3": "UI・ロジックのカスタム性", "tbl_c3_d": "厳しく制限", "tbl_c3_p": "Power Apps標準枠内", "tbl_c3_w": "100%業務に特化",
            "tbl_c4": "独立した拡張・開発性", "tbl_c4_d": "不可能", "tbl_c4_p": "MSライセンスに依存", "tbl_c4_w": "無制限にアップグレード",
            "tbl_c5": "所定形式での帳票出力", "tbl_c5_d": "完全手作業", "tbl_c5_p": "Power BI（別形式）", "tbl_c5_w": "Excel/PDF自動出力100%",
            "tbl_c6": "社内メール/Teams連携", "tbl_c6_d": "なし", "tbl_c6_p": "標準装備（強力な長所）", "tbl_c6_w": "API経由で追加開発可能",
            "tbl_c7": "通信障害（オフライン）時", "tbl_c7_d": "正常動作", "tbl_c7_p": "稼働停止", "tbl_c7_w": "正常動作（LAN内）",
            "tbl_c8": "長期的なシステム運用費", "tbl_c8_d": "ほぼゼロ", "tbl_c8_p": "高額（ユーザー課金）", "tbl_c8_w": "サーバー電気代・保守のみ",
            "tbl_c9": "変電所業務への適正度", "tbl_c9_d": "低い", "tbl_c9_p": "中程度", "tbl_c9_w": "最高 ★★★",
            "compare_tbl_note_power": "ℹ️ <strong style=\"color:var(--neon-purple);\">特記:</strong> Power Platformは、全社共通のOutlookメールやTeamsと最初から連携している点が非常に実用的です。",
            "compare_tbl_note_web": "💡 <strong style=\"color:var(--neon-blue);\">ロードマップ:</strong> 自社開発Web Platformも、稼働安定後にSMTPサーバーやWebhook APIと連携し、メールやTeamsへの通知自動化が可能です。",

            // Slide 8: Conclusion
            "cmp_s8_tag": "🏆 結論のまとめ",
            "cmp_s8_title": "自社開発プラットフォーム選定の理由",
            "cmp_s8_sub": "変電所運用における業務フローの最適化と情報セキュリティの確保が最優先事項です：",
            "cmp_s8_cp1_title": "技術の自主管理と構内データ安全の確保 (On-premises):",
            "cmp_s8_cp1_desc": "送受電データ、運用記録、作業安全指示書などの機密データは、すべて変電所内のサーバーで一元管理されます。インターネットを経由しないため、国際接続障害やデータ漏洩の危険はありません。",
            "cmp_s8_cp2_title": "現場のシフト実態に即したカスタマイズ設計:",
            "cmp_s8_cp2_desc": "Deep C2 110kV変電所の特殊な運用手順に合わせて入力ロジックを最適化。汎用パッケージで発生する「使いにくさ」を完全に排除しました。",
            "cmp_s8_cp3_title": "長期運用時における圧倒的な財務的メリット:",
            "cmp_s8_cp3_desc": "Power Platformのような恒久的な月額サブスクリプション費用が不要です。既設のDell R260サーバー上で長期間安定稼働させることで、運用コストを大幅に削減できます。",


            // --- TRANG ROADMAP.HTML ---
            "rm_main_title": "既存インフラと開発の利点",
            "rm_main_sub": "110kV変電所の既存ハードウェア資源を最大限活用し、円滑な初期導入を実現しました。",
            "rm_panel_title": "既存インフラの活用状況詳細",
            "rm_panel_intro": "Deep C2 110kV変電所のオンプレミスWeb Platform導入において、以下の現地ハードウェアの強みを活かしています：",
            
            // Road map bullets
            "rm_b1_title": "余剰の物理ラックサーバー1台の再利用:",
            "rm_b1_desc": "変電所内に未使用のサーバーが1台ありました。開発チームはこの筐体にデータベースとWebホストを構築（オンプレミス）しました。これにより、新たなハードウェア調達の承認を待つことなく即座にテスト運用が開始でき、初期設備投資を0円に抑えることができました。",
            
            "rm_b2_title": "構築済みのLAN配線環境:",
            "rm_b2_desc": "検証サーバーは中央ネットワークラックに直接マウントされています。各シフトエンジニアの端末からは、高品質なギガビットLAN経byでアクセスでき、外部インターネット回線の切断リスクに影響されずに運用可能です。",
            
            "rm_b3_title": "現場直結のフィードバックループ:",
            "rm_b3_desc": "中央制御室内にサーバーがあるため、開発チーム（Quang氏およびプログラマー）は24時間体制で稼働するシフト員から対面で意見を吸い上げることができました。",

            // Slide 2: Equipment details (Roadmap)
            "rm_s2_tag": "// 現状の必要資材",
            "rm_s2_title": "追加提案機器",
            "rm_s2_sub": "<strong style=\"color:var(--neon-pink);\">インタラクティブ表示:</strong> 左側の機器をクリックすると、詳細な技術的理由と透過3D画像が表示されます：",
            "rm_s2_i1_title": "エンタープライズSSD 1TB (2基)",
            "rm_s2_i1_desc": "ミラーリング（RAID 1）構成により、物理ドライブ故障時のデータ消失リスクを完全に防ぎます。",
            "rm_s2_i2_title": "ギガビットLANスイッチ",
            "rm_s2_i2_desc": "業務データ通信用にセキュアなサブネットを物理的に分離し、通信遅延を最小限に抑えます。",
            "rm_s2_i3_title": "開発者専用Eメールアカウント",
            "rm_s2_i3_desc": "値の逸脱警告アラートの自動送信や、作業安全指示書のOTP承認通知処理の自動化。",
            "rm_s2_i4_title": "変電所専用ドメイン名",
            "rm_s2_i4_desc": "ドメイン <strong>dcgeportal.vn</strong> の導入により、シフト員のシステムへのアクセス性を向上します。",
            "rm_s2_slide_hdr": "提案資材仕様スペック",
            "rm_s2_slide_hint": "左側の項目をクリックして、導入理由の詳細をお読みください",

            // Slide 3: scaling Server (Roadmap)
            "rm_scale_tag": "// 将来像 · サーバーの拡張",
            "rm_scale_title": "モデル拡張とサーバー・UPSのスケーリング",
            "rm_scale_sub": "Dell PowerEdge R260専用サーバーとSantak C3KオンラインUPSを組み合わせた高度なオンプレミス設計：",
            "rm_scale_i1_title": "データベース分割構成（パーティショニング）",
            "rm_scale_i1_desc": "<strong>CPU Xeon E-2468 (8コア/16スレッド)</strong> と <strong>64GB DDR5 ECCメモリ</strong> の能力を活かし、SCADAデータや電力量データをシフト日程ごとに細分化管理し、検索処理を高速化します。",
            "rm_scale_i2_title": "独立サービス（モジュール）のコンテナ分離",
            "rm_scale_i2_desc": "SCADA自動収集、IoTセンサ中継、デジタル作業指示書の各機能をDocker等で分離独立させ、他機能の無停止アップデートを可能にします。",
            "rm_rep_tbl_server_gd1": "⚡ 専用サーバー Dell R260 (第1段階)",
            "rm_rep_tbl_server_gd1_spec": "第1段階：システムコアとRAID 1データベースをホストする専用物理サーバー1台を構築。",
            "rm_rep_tbl_server_gd2": "⚡ 専用サーバー Dell R260 (第2段階)",
            "rm_rep_tbl_server_gd2_spec": "第2段階：高可用性（HA冗長化、Active/Standby）構成のため、もう1台の筐体を増設。",
            "rm_rep_tbl_switch": "⚡ 01 ギガビットスイッチ",
            "rm_rep_tbl_switch_spec": "専用ラックキャビネット内に搭載する16ポートの業務接続用スイッチ。",
            "rm_rep_tbl_ups": "⚡ 01 オンラインUPS (バッテリー内蔵)",
            "rm_rep_tbl_ups_spec": "メンテナンスフリーの鉛密閉バッテリー（AGM）を内蔵した3000VAオンラインUPS。",
            "rm_rep_tbl_cables": "⚡ 配線用資材および工事費",
            "rm_rep_tbl_cables_spec": "電磁シールド付CAT6ケーブル、RJ45コネクタ、保護用配管による耐ノイズ配線敷設。",
            "rm_b3_title": "現場直結のフィードバックループ:",
            "rm_b3_desc": "最大の利点は、システムが変電所の制御室に直接設置されていることです。開発チーム（Quang氏と私）は、24時間365日のシフト勤務中にエンジニアから直接フィードバックを受け取り、入力フォームや電力量計算ロジックを現場の運用手順に100%合わせることができました。",
            
            "rm_s2_tag": "// 現状の必要資材",
            "rm_s2_title": "追加提案機器",
            "rm_s2_sub": "<strong style=\"color:var(--neon-pink);\">インタラクティブ表示:</strong> 左側の機器をクリックすると、詳細な技術的理由 và 透過3D画像が表示されます：",
            "rm_s2_i1_title": "エンタープライズSSD 1TB (2基)",
            "rm_s2_i1_desc": "ミラーリング（RAID 1）構成により、物理ドライブ故障時のデータ消失リスクを完全に防ぎます。",
            "rm_s2_i2_title": "ギガビットLANスイッチ",
            "rm_s2_i2_desc": "業務データ通信用にセキュアなサブネットを物理的に分離し、通信遅延を最小限に抑えます。",
            "rm_s2_i3_title": "開発者専用Eメールアカウント",
            "rm_s2_i3_desc": "値の逸脱警告アラートの自動送信や、作業安全指示書のOTP承認通知処理の自動化。",
            "rm_s2_i4_title": "変電所専用ドメイン名",
            "rm_s2_i4_desc": "ドメイン <strong>dcgeportal.vn</strong> の導入により、シフト員のシステムへのアクセス性を向上します。",
            "rm_s2_slide_hdr": "提案資材仕様スペック",
            "rm_s2_slide_hint": "左側の項目をクリックして、導入理由の詳細をお読みください",
            
            "rm_scale_tag": "// 将来像 · サーバーの拡張",
            "rm_scale_title": "モデル拡張とサーバー・UPSのスケーリング",
            "rm_scale_sub": "Dell PowerEdge R260専用サーバーとSantak C3KオンラインUPSを組み合わせた高度なオンプレミス設計：",
            "rm_scale_i1_title": "データベース分割構成（パーティショニング）",
            "rm_scale_i1_desc": "<strong>CPU Xeon E-2468 (8コア/16スレッド)</strong> と <strong>64GB DDR5 ECCメモリ</strong> の能力を活かし、SCADAデータや電力量データをシフト日程ごとに細分化管理し、検索処理を高速化します。",
            "rm_scale_i2_title": "独立サービス（モジュール）のコンテナ分離",
            "rm_scale_i2_desc": "SCADA自動収集、IoTセンサ中継、デジタル作業指示書の各機能をDocker等で分離独立させ、他機能の無停止アップデートを可能にします。",
            "rm_scale_i3_title": "Tối ưu hiệu năng Web & Băng thông LAN",
            "rm_scale_i3_desc": "Sự kết hợp giữa 2 × 1TB Enterprise NVMe SSD (chạy RAID 1 cứng qua card PERC H355/H755) và băng thông Dual 1GbE LOM đảm bảo loại bỏ hoàn toàn hiện tượng nghẽn cổ chai đọc/ghi I/O, phản hồi giao diện web tức thì kể cả khi có hàng trăm yêu cầu cùng lúc.",
            "rm_scale_i4_title": "Đảm bảo nguồn điện sạch liên tục (UPS Santak C3K)",
            "rm_scale_i4_desc": "Tích hợp bộ lưu điện Online 3000VA có ắc quy khô kín khí trong thân máy bảo vệ server Dell R260 khỏi các sự cố sốc điện, sụt áp hoặc mất điện tự dùng đột ngột của trạm 110kV. Công nghệ chuyển đổi kép tạo ra dòng điện hình sin chuẩn sạch, kéo dài tuổi thọ phần cứng máy chủ.",
            "rm_scale_tbl_title": "CẤU HÌNH GÓI THIẾT BỊ MỞ RỘNG",
            "rm_rep_tbl_server_gd2": "⚡ 専用サーバー Dell R260 (第2段階)",
            "rm_rep_tbl_server_gd2_spec": "第2段階：高可用性（HA冗長化、Active/Standby）構成のため、もう1台の筐体を増設。",
            "rm_rep_tbl_switch": "⚡ 01 ギガビットスイッチ",
            "rm_rep_tbl_switch_spec": "専用ラックキャビネット内に搭載する16ポートの業務接続用スイッチ。",
            "rm_rep_tbl_ups": "⚡ 01 オンラインUPS (バッテリー内蔵)",
            "rm_rep_tbl_ups_spec": "メンテナンスフリーの鉛密閉バッテリー（AGM）を内蔵した3000VAオンラインUPS。",
            "rm_rep_tbl_cables": "⚡ 配線用資材および工事費",
            "rm_rep_tbl_cables_spec": "電磁シールド付CAT6ケーブル、RJ45コネクタ、保護用配管による耐ノイズ配線敷設。",
            "rm_rep_tbl_total_gd1": "第1段階 合計参考予算",
            "rm_rep_tbl_total_gd2": "第2段階 アップグレード参考予算",
            "rm_rep_tbl_desc": "* 注記：Dell PowerEdge R260サーバーの導入を2つのフェーズに分けることで、新規変電所における初期設備投資の負担を抑えつつ、将来的な高可用性（Active/Standby）やデータベース冗長化への拡張性を完全に確保できます。",
            "rm_rep_slide_hdr": "新規変電所設備インフラ",
            "rm_rep_slide_hint": "左側の項目をクリックして、導入理由の詳細をお読みください"
        }
    };

    // ============================================================================
    // CORE LOGIC i18n
    // ============================================================================
    // ============================================================================
    // CORE LOGIC i18n
    // ============================================================================
    let currentLang = localStorage.getItem('selected_lang') || 'vi';

    function setLanguage(lang) {
        if (!TRANSLATIONS[lang]) lang = 'vi';
        currentLang = lang;
        localStorage.setItem('selected_lang', lang);

        // 1. Cập nhật các element có data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
                el.innerHTML = TRANSLATIONS[currentLang][key];
            }
        });

        // 2. Đồng bộ các nút chọn ngôn ngữ trên giao diện
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 3. Tùy biến dịch cho các trang cụ thể
        
        // --- TRANG SO SÁNH (compare.html) ---
        if (window.drawRadar && document.getElementById('radarSvg')) {
            window.drawRadar();
        }

        // --- POPUP TRONG ROADMAP.HTML ---
        if (typeof window.translateModalData === 'function') {
            window.translateModalData(currentLang);
        }
    }

    // Định nghĩa hàm dịch modalData toàn cục để bất cứ file nào (bao gồm roadmap.html) đều có thể gọi khi sẵn sàng
    window.translateModalData = function(lang) {
        if (!window.modalData) return;
        if (lang === 'en') {
            window.modalData.ssd.tag = 'Current Material · Storage';
            window.modalData.ssd.title = 'SSD Enterprise 1TB (x2 Drives)';
            window.modalData.ssd.desc = '<strong>Why buy?</strong><br>We propose 02 SSD Enterprise 1TB drives configured in <strong>RAID 1 (Mirroring)</strong>.<br><br>Operational parameters at a substation are highly critical and must be written continuously in real-time. Using a single standard drive poses a high risk of hardware failure, leading to total data loss.<br><br>RAID 1 writes data simultaneously to both drives; if one drive fails, the other immediately takes over with 100% data preservation.';
            window.modalData.ssd.label = 'Quantity:';
            window.modalData.ssd.val = '02 drives (RAID 1)';

            window.modalData.switch.tag = 'Current Material · Network LAN';
            window.modalData.switch.title = 'Gigabit Switch';
            window.modalData.switch.desc = '<strong>Why buy?</strong><br>To isolate operations data traffic from administrative traffic, enhancing cybersecurity and lowering LAN latency for direct shift workstation access.';
            window.modalData.switch.label = 'Quantity:';
            window.modalData.switch.val = '01 unit (Gigabit)';

            window.modalData.email.tag = 'Current Material · Notifications';
            window.modalData.email.title = 'Dedicated Dev Team E-mail';
            window.modalData.email.desc = '<strong>Why buy?</strong><br>Necessary for SMTP alerts when values exceed thresholds and for sending OTP / approval links for digital Work Orders.';
            window.modalData.email.label = 'Feature:';
            window.modalData.email.val = 'SMTP Alert & OTP';

            window.modalData.domain.tag = 'Current Material · Identity';
            window.modalData.domain.title = 'Dedicated Domain Name';
            window.modalData.domain.desc = '<strong>Why buy?</strong><br>Domain <strong>dcgeportal.vn</strong> guarantees formal system identification and replaces raw, hard-to-remember IP addresses for operators.';
            window.modalData.domain.label = 'Registered Domain:';
            window.modalData.domain.val = 'dcgeportal.vn';

            window.modalData.server_phase1.tag = 'Substation Replication · Phase 1';
            window.modalData.server_phase1.title = '01 Server Dell PowerEdge R260 (Single)';
            window.modalData.server_phase1.desc = '<strong>Why buy in Phase 1?</strong><br>For new substations, we start with 01 dedicated physical Dell R260 server hosting the core app & database.<br><br>Equipped with Xeon E-2468, 64GB DDR5 ECC RAM, and 2x1TB SSD Enterprise RAID 1. This minimizes the initial capital expenditure (~$2,500) while ensuring high reliability and on-premises security.';
            window.modalData.server_phase1.label = 'Phase 1 Investment:';
            window.modalData.server_phase1.val = '01 Dell R260 Server | ~$2,500';

            window.modalData.server_phase2.tag = 'Substation Replication · Phase 2';
            window.modalData.server_phase2.title = 'Upgrade Server Dell PowerEdge R260 (HA)';
            window.modalData.server_phase2.desc = '<strong>Why buy in Phase 2?</strong><br>Depending on operational requirements and funding, Phase 2 adds another Dell R260 server to establish <strong>High Availability (HA, Active/Standby)</strong>.<br><br>If the primary server fails, the secondary server takes over within seconds. It also supports distributing heavy operational modules (SCADA, IoT logs) onto separate machines.';
            window.modalData.server_phase2.label = 'Phase 2 Investment:';
            window.modalData.server_phase2.val = 'Additional server(s) | ~$2,500/unit';

            window.modalData.ups_other.tag = 'Other Substation · Power Reserve';
            window.modalData.ups_other.title = 'UPS Santak Castle C3K (Dry Battery)';
            window.modalData.ups_other.desc = '<strong>Why buy?</strong><br>Protects servers from voltage spikes and power outages common at high-voltage substations. Equipped with safe dry batteries, running dual-server load for 30-45 minutes to shut down safely.';
            window.modalData.ups_other.label = 'Estimated Cost:';
            window.modalData.ups_other.val = '~$680';

            window.modalData.cables_other.tag = 'Other Substation · Installation';
            window.modalData.cables_other.title = 'CAT6 Shielded Network Cables';
            window.modalData.cables_other.desc = '<strong>Why buy?</strong><br>CAT6 shielded cabling prevents magnetic interference from high-voltage devices, ensuring reliable gigabit LAN communication.';
            window.modalData.cables_other.label = 'Estimated Cost:';
            window.modalData.cables_other.val = '~$50';

            window.modalData.switch_other.tag = 'Other Substation · Network Switch';
            window.modalData.switch_other.title = 'Gigabit 16-Port Network Switch';
            window.modalData.switch_other.desc = 'Serves as the central LAN connection for the new station, linking physical Web/Database servers with shift computers, smart meters, and temperature sensors. High durability, runs 24/7 in high-voltage room electromagnetic environments without signal degradation.';
            window.modalData.switch_other.label = 'Estimated Cost:';
            window.modalData.switch_other.val = '~$100';
        } 
        else if (lang === 'ja') {
            window.modalData.ssd.tag = '現場資材 · ストレージ';
            window.modalData.ssd.title = 'エンタープライズSSD 1TB (2基)';
            window.modalData.ssd.desc = '<strong>なぜ必要か？</strong><br>データ保全のため、<strong>RAID 1 (ミラーリング)</strong>構成として02台のエンタープライズSSDを導入します。<br><br>変電所の数値データは極めて重要であり、リアルタイムでの書込が求められます。単一HDD運用は故障時のデータ全損リスクが高いため、RAID 1で同時に2基に書込み、1基が故障しても無停止で稼働しデータを守ります。';
            window.modalData.ssd.label = '数量:';
            window.modalData.ssd.val = '02基 (RAID 1)';

            window.modalData.switch.tag = '現場資材 · ネットワークLAN';
            window.modalData.switch.title = 'ギガビットスイッチ';
            window.modalData.switch.desc = '<strong>なぜ必要か？</strong><br>変電所内の業務通信を一般の事務通信から物理的に分離し、サイバーセキュリティを高め、シフトエンジニア端末との低レイテンシ通信を保証します。';
            window.modalData.switch.label = '数量:';
            window.modalData.switch.val = '01台 (ギガビット)';

            window.modalData.email.tag = '現場資材 · 通知サービス';
            window.modalData.email.title = '開発チーム専用Eメール';
            window.modalData.email.desc = '<strong>なぜ必要か？</strong><br>警報閾値超過時の自動メール送信や、デジタル作業命令書の承認・OTP認証リンク の送信用に使用します。';
            window.modalData.email.label = '機能:';
            window.modalData.email.val = 'SMTPアラート & OTP';

            window.modalData.domain.tag = '現場資材 · ドメイン';
            window.modalData.domain.title = '専用ドメイン';
            window.modalData.domain.desc = '<strong>なぜ必要か？</strong><br>ドメイン <strong>dcgeportal.vn</strong> により、システムを識別し、覚えにくいIPアドレス入力を排除して操作性を高めます。';
            window.modalData.domain.label = '登録ドメイン:';
            window.modalData.domain.val = 'dcgeportal.vn';

            window.modalData.server_phase1.tag = '他変電所展開 · 第1段階';
            window.modalData.server_phase1.title = '01 専用サーバー Dell PowerEdge R260 (シングル)';
            window.modalData.server_phase1.desc = '<strong>第1段階での導入意義</strong><br>新しい変電所向けに、まずはシステムコア と データベースをホストする01台 の 物理サーバーを設置します。<br><br>Xeon E-2468、64GB DDR5 ECCメモリ、2x1TB SSD (RAID 1)で構成され、オンプレミスの安全性と高い信頼性を保ちながら、初期投資予算を抑えます。';
            window.modalData.server_phase1.label = '第1段階設備投資:';
            window.modalData.server_phase1.val = 'Dell R260サーバー01台 | 約38万円';

            window.modalData.server_phase2.tag = '他変電所展開 · 第2段階';
            window.modalData.server_phase2.title = '専用サーバー Dell PowerEdge R260 増設 (HA)';
            window.modalData.server_phase2.desc = '<strong>第2段階での増設意義</strong><br>要件や予算に応じて、もう1台のDell R260サーバーを増設し、<strong>高可用性（HA, Active/Standby）</strong>構成にします。<br><br>プライマリ機が故障しても、セカンダリ機が数秒で処理を引き継ぎます。また、SCADA ya IoTなどの負荷の高い処理を別筐体に分散できます。';
            window.modalData.server_phase2.label = '第2段階設備投資:';
            window.modalData.server_phase2.val = 'サーバーの追加 | 約38万円/台';

            window.modalData.ups_other.tag = '他変電所展開 · 非常用電源';
            window.modalData.ups_other.title = 'UPS Santak Castle C3K (ドライバッテリー)';
            window.modalData.ups_other.desc = '<strong>なぜ必要か？</strong><br>落雷や系統トラブルによる変電所内の瞬時電圧低下や停電から、サーバーを保護します。密閉型ドライバッテリーを内蔵し、約30〜45分間の無停電給電を行ってサーバーを安全にシャットダウンさせます。';
            window.modalData.ups_other.label = '参考価格:';
            window.modalData.ups_other.val = '約10万円';

            window.modalData.cables_other.tag = '他変電所展開 · 配線工事';
            window.modalData.cables_other.title = 'CAT6 シールド付LANケーブル';
            window.modalData.cables_other.desc = '<strong>なぜ必要か？</strong><br>変電所の強磁界環境下でも外部ノイズを遮断し、安定したギガビットLAN通信品質を維持します。';
            window.modalData.cables_other.label = '参考価格:';
            window.modalData.cables_other.val = '約7,500円';

            window.modalData.switch_other.tag = '他変電所展開 · ネットワークスイッチ';
            window.modalData.switch_other.title = 'ギガビット 16ポート スイッチングハブ';
            window.modalData.switch_other.desc = '新設変電所の構内LAN接続の中核として、物理Web/DBサーバー、シフト端末、スマートメーター、温度センサーを接続します。高電磁界環境でもノイズに強く、24時間安定稼働します。';
            window.modalData.switch_other.label = '参考価格:';
            window.modalData.switch_other.val = '約15,000円';
        }
        else {
            // Tiếng Việt (mặc định)
            window.modalData.ssd.tag = 'Vật tư hiện tại · Ổ cứng lưu trữ';
            window.modalData.ssd.title = 'SSD Enterprise 1TB (x2 ổ đĩa)';
            window.modalData.ssd.desc = '<strong>Tại sao cần mua?</strong><br>Nhóm đề xuất trang bị 02 ổ đĩa SSD Enterprise 1TB để cấu hình chạy <strong>RAID 1 (Gương dữ liệu)</strong>.<br><br>Khi vận hành thực tế tại trạm, dữ liệu ca trực và chỉ số thiết bị phụ tải cực kỳ nhạy cảm và cần được ghi chép liên tục theo thời gian thực. Nếu chỉ sử dụng 1 ổ đĩa thông thường, rủi ro hỏng hóc phần cứng đột xuất dẫn đến mất sạch dữ liệu ca trực là rất lớn.<br><br>Cấu hình RAID 1 sẽ ghi dữ liệu song song đồng thời lên cả 2 ổ; nếu 1 ổ gặp sự cố hỏng hóc vật lý đột xuất, ổ đĩa còn lại lập tức gánh tải và bảo toàn nguyên vẹn 100% dữ liệu vận hành.';
            window.modalData.ssd.label = 'Số lượng mua:';
            window.modalData.ssd.val = '02 ổ đĩa (Chạy RAID 1)';

            window.modalData.switch.tag = 'Vật tư hiện tại · Switch mạng LAN';
            window.modalData.switch.title = 'Switch mạng Gigabit chuyên dụng';
            window.modalData.switch.desc = '<strong>Tại sao cần mua?</strong><br>Để đảm bảo hệ thống Web Platform hoạt động với băng thông ổn định và có tính bảo mật thông tin nội bộ tốt nhất, hệ thống cần được thiết lập trên một phân đoạn mạng LAN cô lập riêng biệt tại trạm biến áp.<br><br>Switch mạng Gigabit chuyên dụng giúp kết nối trực tiếp các máy tính vận hành ca trực của kỹ sư với máy chủ đặt tại tủ rack trung tâm, loại bỏ rủi ro xung đột IP và nhiễu mạng từ các thiết bị văn phòng/hành chính khác của trạm.';
            window.modalData.switch.label = 'Số lượng mua:';
            window.modalData.switch.val = '01 bộ (Gigabit Switch)';

            window.modalData.email.tag = 'Vật tư hiện tại · Dịch vụ thông báo';
            window.modalData.email.title = 'E-mail riêng cho nhóm phát triển';
            window.modalData.email.desc = '<strong>Tại sao cần mua?</strong><br>Đăng ký gói e-mail nội bộ chuyên dụng giúp nhóm cấu hình các tính năng tự động hóa nâng cao của Web Platform:<br><br>1. <strong>Gửi cảnh báo tự động:</strong> Gửi thông báo tức thời qua mail khi các chỉ số phụ tải, hao hụt điện năng vượt ngưỡng an toàn.<br>2. <strong>Phê duyệt trực tuyến:</strong> Kỹ sư có thể tạo Lệnh Công Tác và hệ thống sẽ tự động gửi email đính kèm mã OTP hoặc link xác nhận nhanh cho trưởng trạm duyệt trực tiếp qua mail.<br>3. <strong>Bảo mật thông tin:</strong> Tách biệt hòm thư kỹ thuật với hòm thư cá nhân để bảo mật tuyệt đối các báo cáo điện lực.';
            window.modalData.email.label = 'Tính năng:';
            window.modalData.email.val = 'SMTP Alert &amp; OTP Authentication';

            window.modalData.domain.tag = 'Vật tư hiện tại · Định danh hệ thống';
            window.modalData.domain.title = 'Địa chỉ Domain riêng chuyên nghiệp';
            window.modalData.domain.desc = '<strong>Tại sao cần mua?</strong><br>Tên miền chính thức dự kiến mua là: <strong style="color:var(--neon-pink);font-size:1rem;font-family:var(--font-mono);">dcgeportal.vn</strong><br><br>Việc đăng ký tên miền riêng mang lại giá trị thực tiễn rất cao:<br><br>1. <strong>Chuyên nghiệp hóa:</strong> Giúp định danh hệ thống cổng thông tin vận hành (DCGE Portal) chính thống của đơn vị.<br>2. <strong>UX mượt mà:</strong> Giúp các kỹ sư trực ca dễ dàng ghi nhớ và truy cập nhanh chóng từ bất kỳ máy tính nào trong trạm, thay vị phải ghi nhớ và gõ các dãy số địa chỉ IP thô sơ (ví dụ: http://192.168.1.150:8080).';
            window.modalData.domain.label = 'Tên miền đăng ký:';
            window.modalData.domain.val = 'dcgeportal.vn';

            window.modalData.server_phase1.tag = 'Thiết bị nhân rộng · Giai đoạn 1';
            window.modalData.server_phase1.title = '01 Máy chủ Dell PowerEdge R260 (Single)';
            window.modalData.server_phase1.desc = '<strong>Tại sao cần mua ở Giai đoạn 1?</strong><br>Ở giai đoạn khởi chạy ban đầu cho trạm mới, đề xuất đầu tư trước <strong>01 Máy chủ vật lý chuyên dụng Dell PowerEdge R260</strong> để chạy độc lập toàn bộ lõi ứng dụng và cơ sở dữ liệu của trạm.<br><br>Cấu hình máy chủ Dell R260 bao gồm chip CPU Intel Xeon E-2468, 64GB RAM DDR5 ECC chống sửa lỗi và <strong>2x1TB SSD Enterprise</strong> cấu hình chạy RAID 1 vật lý qua card PERC.<br><br>Giải pháp này giúp trạm mới có một máy chủ hiệu năng cực cao, lưu dữ liệu tại chỗ, đảm bảo an toàn phần cứng ở mức tối đa mà vẫn giữ mức ngân sách đầu tư thiết bị ban đầu rất hợp lý (~62tr / ~2.500 USD).';
            window.modalData.server_phase1.label = 'Định mức đầu tư GĐ 1:';
            window.modalData.server_phase1.val = '01 Máy chủ Dell R260 | ~ 62.000.000đ / ~ 2.500 USD';

            window.modalData.server_phase2.tag = 'Thiết bị nhân rộng · Giai đoạn 2';
            window.modalData.server_phase2.title = 'Bổ sung máy chủ Dell PowerEdge R260 (HA)';
            window.modalData.server_phase2.desc = '<strong>Tại sao cần mua ở Giai đoạn 2?</strong><br>Dựa vào yêu cầu thực tế và định hướng phát triển của <strong>Chủ đầu tư</strong>, Giai đoạn 2 sẽ tiến hành mua bổ sung thêm <strong>01 máy chủ Dell PowerEdge R260 chuyên dụng</strong> hoặc nhiều hơn.<br><br>Việc bổ sung thêm server này giúp nâng cấp hệ thống trạm biến áp lên mô hình <strong>High Availability (Dự phòng nóng Active/Standby)</strong>:<br><br>1. <strong>Chuyển mạch tự động:</strong> Khi một máy chủ chính gặp sự cố vật lý hoặc lỗi hệ thống, máy chủ phụ sẽ ngay lập tiếp quản vận hành trong vài giây, đảm bảo ca trực không bao giờ bị gián đoạn.<br>2. <strong>Phân tải cơ sở dữ liệu:</strong> Hỗ trợ phân tách các module vận hành nặng (như SCADA log, IoT thu thập số liệu liên tục) sang các máy chủ khác nhau nhằm bảo toàn tài nguyên xử lý tối ưu.';
            window.modalData.server_phase2.label = 'Định mức đầu tư GĐ 2:';
            window.modalData.server_phase2.val = 'Bổ sung thêm 01 hoặc nhiều server | ~ 62.000.000đ / ~ 2.500 USD/máy';

            window.modalData.ups_other.tag = 'Thiết bị trạm khác · Nguồn dự phòng';
            window.modalData.ups_other.title = 'Bộ lưu điện UPS Santak C3K (Tích hợp pin khô)';
            window.modalData.ups_other.desc = '<strong>Tại sao cần mua?</strong><br>Để bảo vệ hệ thống server và switch mạng khỏi các sự cố mất điện AC tự dùng đột ngột tại trạm biến áp 110kV mới, đề xuất trang bị <strong>01 Bộ lưu điện UPS Santak Castle C3K (3000VA / 2700W)</strong>.<br><br><strong>Đặc điểm kỹ thuật:</strong><br>1. <strong>Pin khô tích hợp an toàn:</strong> Sử dụng hệ thống 6 bình ắc quy khô kín khí (VRLA AGM) tích hợp hoàn toàn bên trong thân máy. Đảm bảo an toàn phòng máy chủ, không rò rỉ hóa chất, không sinh khí ăn mòn và hoàn toàn không cần bảo trì định kỳ.<br>2. <strong>Công nghệ Online chuyển đổi kép:</strong> Lọc sạch nhiễu điện lưới, sụt áp hoặc quá áp đột ngột của trạm điện, cung cấp dòng điện sin chuẩn 220V ổn định cho server.<br>3. <strong>Thời gian lưu điện dự phòng:</strong> Đạt từ <strong>30 đến 45 phút</strong> khi mất điện hoàn toàn đối với tải Server + Switch. Đảm bảo thời gian an toàn tối đa để các tiến trình lưu dữ liệu hoàn tất và kỹ sư trực ca tắt máy chủ an toàn hoặc vận hành máy phát điện dự phòng.';
            window.modalData.ups_other.label = 'Chi phí tham khảo:';
            window.modalData.ups_other.val = '~ 17.000.000đ / ~ 680 USD <span style="font-size:0.55rem;color:var(--text-muted);font-weight:400;display:block;">* Giá tham khảo trên mạng, có thể thay đổi</span>';

            window.modalData.cables_other.tag = 'Thiết bị trạm khác · Vật tư thi công';
            window.modalData.cables_other.title = 'Vật tư cáp mạng CAT6 &amp; Thi công';
            window.modalData.cables_other.desc = '<strong>Tại sao cần mua?</strong><br>Hạ tầng cáp mạng chuẩn CAT6 chất lượng cao cùng các đầu bấm hạt mạng RJ45, ống gen luồn bảo vệ cơ học.<br><br>Đặc biệt cáp CAT6 có vỏ bọc chống nhiễu từ trường cao tại phòng điều khiển trung tâm trạm biến áp, đảm bảo tín hiệu truyền dẫn đạt tốc độ gigabit (1Gbps) ổn định lâu dài, không bị nhiễu sóng xung quanh thiết bị điện cao áp.';
            window.modalData.cables_other.label = 'Dự toán chi phí:';
            window.modalData.cables_other.val = '~ 1.200.000đ / ~ 50 USD';

            window.modalData.switch_other.tag = 'Thiết bị trạm khác · Switch mạng';
            window.modalData.switch_other.title = 'Switch mạng Gigabit 16-Port';
            window.modalData.switch_other.desc = 'Đóng vai trò là trung tâm kết nối LAN nội bộ của trạm mới, liên kết máy chủ Web/Database vật lý với các máy tính trực ca, các thiết bị đo lường phụ tải thông minh và hệ thống cảm biến nhiệt độ.<br><br>Độ bền cao, chạy ổn định 24/24 trong môi trường phòng máy biến áp có từ trường cao mà không bị suy hao tín hiệu.';
            window.modalData.switch_other.label = 'Dự toán chi phí:';
            window.modalData.switch_other.val = '~ 2.500.000đ / ~ 100 USD';
        }
    };

    function initLanguageSwitcher() {
        const switchers = document.querySelectorAll('.lang-switcher');
        switchers.forEach(sw => {
            sw.innerHTML = `
                <button class="lang-btn" data-lang="vi">VI</button>
                <button class="lang-btn" data-lang="en">EN</button>
                <button class="lang-btn" data-lang="ja">JA</button>
            `;
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initLanguageSwitcher();
            setLanguage(currentLang);
        });
    } else {
        initLanguageSwitcher();
        setLanguage(currentLang);
    }
})();
