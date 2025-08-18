

const container = document.querySelector(".background");

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.width = bubble.style.height = Math.random() * 30 + 10 + "px";
  bubble.style.animationDuration = Math.random() * 5 + 5 + "s";
  container.appendChild(bubble);
}

document.getElementById('search-box').addEventListener('input', function(e) {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.desc.toLowerCase().includes(keyword) ||
    p.detail.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('detail-btn')) {
    const product = products.find(p => p.name === e.target.dataset.name);
    if (product) showPopup(product.name, product.detail);
  }
  if (e.target.classList.contains('close-btn')) {
    closePopup();
  }
});

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

function showPopup(title, content) {
  const popup = document.getElementById("popup");
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-text").innerHTML = content;
  popup.classList.add("show");
  popup.style.display = "block";
}

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 1000);
  }
});

const products = [
  {
    name: "PROBIOTIC",
    img: "image/probiotic.png",
    desc: "MEN TIÊU HÓA CAO CẤP",
    category: "ruot",
    detail: `<b>Công dụng:</b><br>- Tăng sức kháng bệnh, giảm hàm lượng đạm thừa trong phân, không gây ô nhiễm môi trường nước.<br>- Ngăn ngừa xuất huyết đường ruột, trống ruột, sưng mủ ở đốt cuối đường ruột.<br><b>HDSD:</b><br>- Sử dụng định kỳ, bổ sung 3-4g/kg thức ăn trong suốt vụ nuôi.`
  },
  {
    name: "LIVER GANIC",
    img: "image/LIVER GANIC.png",
    desc: "BỔ GAN CAO CẤP",
    category: "gan",
    detail: `<b>Công dụng:</b><br>- Xử lý teo gan.<br>- Hỗ trợ chức năng gan, giúp gan bài tiết tốt.<br>- Xử lý các vấn đề tôm tiêu hóa kém, ruột nhỏ, ruột lỏng, đứt khúc, phân trắng, trống ruột.<br><b>HDSD:</b><br>- Ngày dùng 1 lần với liều lượng 2-5ml/1kg thức ăn, dùng liên tục trong quá trình nuôi.`
  },
  {
    name: "HEPAGREEN",
    img: "image/HEPAGREEN.png",
    desc: "BỔ GAN THẢO DƯỢC",
    category: "gan",
    detail: `<b>Công dụng:</b><br>- Giải độc gan, tăng cường chức năng gan tụy.
<br>- Kích thích tôm ăn mạnh, chống còi.
<br>- Khống chế các loại vi khuẩn, virus như vi bào tử, ký sinh trùng...
<br>- Bổ sung các Vitamin, Acid amin vào khẩu phần ăn cho tôm giúp tăng khả năng hấp thụ thức ăn, giúp tôm tăng trọng nhanh.
<br>- Ngăn ngừa hiện tượng hoại tử gan trên tôm.<br><b>HDSD:</b><br>- Sử dụng định kỳ, bổ sung 3-4g/kg thức ăn trong suốt vụ nuôi.`
  },
  {
    name: "ACMIN",
    img: "image/acmin.png",
    desc: "TĂNG SỨC ĐỀ KHÁNG",
    category: "khoang",
    detail: `<b>Công dụng:</b><br>- Là chất bổ sung sinh học được ly trích từ vách tế bào nấm men giúp tăng cường miễn dịch tự nhiên của tôm, ngăn ngừa sự xâm nhập các mầm bệnh từ bên ngoài như phân trắng, đỏ thân, đốm trắng đầu vàng, hoại tử cơ, mòn râu, cụt đuôi… do vi khuẩn, virus gây ra.<br>- Giúp tăng cường quá trình hấp thụ thức ăn và kích thích tiêu hóa, làm giảm hệ số chuyển đổi thức ăn.<br><b>HDSD:</b><br>- Dùng 2-5g/kg thức ăn ngày 1 lần trong suốt vụ nuôi.<br>- Dùng 5-7g/kg thức ăn khi trong vùng nuôi có dịch bệnh.`
  },
  {
    name: "BACLIVER",
    img: "image/bacliver.png",
    desc: "DIỆT KHUẨN",
    category: "dietkhuan",
    detail: `<b>Công dụng:</b><br>- BACLIVER giúp ngăn ngừa hội chứng chết sớm ở tôm giai đoạn 14 đến 60 ngày tuổi.<br>- Hiệu quả cao với hiện tượng hoại tử gan tụy, sưng gan, vàng gan, bộng nước ở gan, teo gan.<br><b>HDSD:</b><br>- Dùng định kỳ: 1lít  cho 2.000-3.000m³ nước, 7 ngày một lần.<br>- Trong ao xuất hiện khuẩn gan: 1lít cho 1.000-1.500m³ nước, liên tục trong 2 ngày.<br>Chú ý:<br>- Pha loãng với nước ao nuôi và tạt đều khắp ao.<br>- Chạy quạt khi sử dụng thuốc.<br>- Thời gian sử dụng: Sáng sớm hoặc chiều mát.<br>- Sản phẩm có tác dụng trong 36h - 48h, sau thời gian này mới sử dụng sản phẩm men vi sinh.`
  },
  {
    name: "BIO CLEAR",
    img: "image/BIOCLEAR.png",
    desc: "XỬ LÝ TẢO CAO CẤP",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- Xử lý các loại tảo độc trong ao nuôi, giảm bọt, sạch nhớt tăng cường oxy cho ao nuôi.<br>- Chống ô nhiễm nguồn nước trong ao nuôi, làm sạch và phục hồi nhanh nước đã ô nhiễm.<br>- Khống chế các mầm bệnh gây ra cho tôm, kích thích tôm lột xác, ổn định môi trường ao.<br>- Cắt tảo theo cơ chế sinh học không làm tôm bị sốc.<br><b>HDSD:</b><br>- Sử dụng: 500g/3.000m3 nước trước khi thả tôm 1 ngày.<br>- Tháng thứ 1-2, sử dụng 500g/1.500-2.000m3 nước, định kỳ 3-5 ngày một lần.<br>- Tháng thứ 3 trở đi sử dụng 500g/1.000-1.500m3, định kỳ 3-5 ngày một lần.<br>Chú ý: Tránh sử dụng thuốc và hóa chất diệt khuẩn trước và sau thời gian sử dụng <b>BIOCLEAR</b> 1 ngày.`
  },
  {
    name: "BIO ZYME",
    img: "image/BIOZYME.png",
    desc: "MEN ĐƯỜNG RUỘT",
    category: "ruot",
    detail: `<b>Công dụng:</b><br>- Bổ sung men tiêu hóa trong bữa ăn cho tôm, cá hàng ngày, giúp tăng cường sức đề kháng  và cung cấp một lượng vi sinh vật có lợi gây ức chế vi sinh vật gây ra các loại bệnh đường ruột như Vibrio Parahaemolyticus và Vibrio vunificus, từ đó có khả năng ngăn ngừa các biểu hiện về đường ruột như: phân lỏng, đứt khúc, trống đường ruột, phân trắng.<br>- Nâng cao khả năng tiêu hóa, hấp thụ dưỡng chất, tái tạo nhanh thành đường ruột.<br>- Cải thiện tăng trọng, giảm tiêu tốn thức ăn.<br><b>HDSD:</b><br>- Sử dụng 3-5ml trộn vào 1kg thức ăn thường xuyên trong quá trình nuôi để ổn định đường ruột.<br>- Trường hợp tôm, cá vừa kết thúc giai đoạn điều trị về đường ruột, bổ sung 10-15ml <b>BIOZYME</b> trên 1kg thức ăn để bổ sung vi sinh vật có lợi vào hệ tiêu hóa.`
  },
  {
    name: "BZT BACTER",
    img: "image/BZT BACTER.png",
    desc: "VI SINH SẠCH AO BẠT",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- Chuyên gia xử lý đáy ao, làm giảm ngay nồng độ khí độc NH3, NO2, H2S... khử mùi hôi trong ao nuôi.<br>- Làm sạch bùn đen ở đáy ao, sạch nhớt ao bạt, ổn định môi trường.<br>- Chủng vi sinh mới chọn lọc sẽ phân hủy nhanh thức ăn dư thừa, mùn bã hữu cơ, màng chất béo, làm môi trường ao luôn sạch.<br>- Ức chế vi sinh vật gây bệnh, tạo điều kiện để vi sinh vật có lợi phát triển, từ đó giảm thiểu rủi ro dịch bệnh có thể xảy ra.<br><b>HDSD:</b><br>- Sử dụng: 300g/3.000m3 nước trước khi thả tôm 1 ngày.<br>- Sử dụng: 300g/2.000-3.000m3 nước, định kỳ 3-5 ngày một lần.<br>- Trong trường hợp ao nuôi quá dơ, sử dụng 300g/1.000-1.500m3.<br>+ Ủ vi sinh với 2kg mật rỉ đường, 30l nước vào thùng chạy sục khí ít nhất 2 giờ đồng hồ, sau đó tạt đều khắp ao. Sử dụng vào buổi sáng sớm.<br>*Chú ý: Tránh sử dụng thuốc và hóa chất diệt khuẩn trước và sau thời gian sử dụng BZT Bacter 1 ngày.`
  },
  {
    name: "BZT PLUS",
    img: "image/BZT PLUS.png",
    desc: "VI SINH SẠCH NƯỚC",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- Chủng vi sinh đậm đặc sẽ phân hủy nhanh thức ăn dư thừa, mùn bã hữu cơ, màng chất béo, làm môi trường ao nuôi luôn sạch.<br>- Dòng nitro đặc hiệu làm giảm ngay nồng độ khí độc NH3, NO2... giảm mùi hôi trong ao nuôi.<br>- Bổ sung định kỳ giúp pH trong môi trường ao nuôi luôn ổn định, tạo màu nước đẹp. <br>- Ức chế vi sinh vật gây bệnh, tạo điều kiện cho vi sinh vật có lợi phát triển, từ đó giảm thiểu rủi ro dịch bệnh xảy ra.<br><b>HDSD:</b><br>- Sử dụng trước khi thả giống ba ngày: 270g/1.500-3.000m3 nước.<br>- Sử dụng ở tháng thứ 1 và 2: 270g/3.000m3 nước, định kỳ 5-7 ngày một lần.<br>- Sử dụng ở tháng thứ 3 và 4: 270g/2.500m3 nước, định kỳ 5-7 ngày một lần.<br>*Chú ý: Tránh sử dụng thuốc và hóa chất diệt khuẩn trong thời gian 2 ngày trước và sau ngày sử dụng BZT plus.`
  },
  {
    name: "CANPHOS",
    img: "image/canphos.png",
    desc: "KHOÁNG ĂN TỔNG HỢP",
    category: "khoang",
    detail: `<b>Công dụng:</b><br>- Cung cấp khoáng chất và các acid amin thiết yếu cho tôm, cá phát triển tốt, bổ gan bổ máu, chống còi.<br>- Giúp tôm cá ăn mạnh, tăng tỷ lệ sống, thúc đẩy tôm lột xác đồng loạt, nhanh cứng vỏ.<br>- Tránh hiện tượng cong thân, đục cơ, co giật...<br>- Hỗ trợ và ngăn ngừa hoại tử cơ do vi khuẩn, virus gây ra.<br><b>HDSD:</b><br>- Bổ sung đầy đủ khoáng chất và các chất dinh dưỡng: cho ăn 3-5ml/kg thức ăn, ngày 1 lần.<br>- Giúp tôm cứng vỏ, chắc thịt, tránh hiện tượng cong thân đục cơ: cho ăn 5-10ml/kg thức ăn.<br>- Tạt trực tiếp xuống ao 1lít/1.000-2.000m³ .`
  },
  {
    name: "FLOBES",
    img: "image/flobes.png",
    desc: "DIỆT NGOẠI KÝ SINH",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- Xử lý tận gốc các loại vi khuẩn, ký sinh trùng trong ao nuôi tôm, cá (Vibrio, zoothamnium, vorticella..)<br>- Tôm có hiện tượng trống ruột, ốp thân, vỏ lột nổi mặt ao do nhiễm vorticella, zoothamnium.<br><b>HDSD:</b><br>- Dùng định kỳ 7 ngày một lần 1 lít cho 1.000m3- 1.500m3. Sau 24 giờ sử dụng thêm một liều nhắc lại.<br>- Khi trong ao xuất hiện khuẩn cao dùng 1 lít cho 1.000m3. Sau 24 giờ sử dụng thêm một liều nhắc lại.`
  },
  {
    name: "GARINTOP",
    img: "image/garintop.png",
    desc: "XỔ NỘI KÝ SINH",
    category: "dietkhuan",
    detail: `<b>Công dụng:</b><br>Ngăn ngừa và xử lý các bệnh do virus gây ra.<br>- Đặc biệt chuyên xổ nội ký sinh trùng, chống viêm nhiễm, tái tạo các tế bào bị tổn thương.<br>- Khắc phục tình trạng phân lỏng, phân đứt khúc, sưng mủ đuôi. <br><b>HDSD:</b><br>Khi bị nhiễm ký sinh, cho ăn 5ml/kg thức ăn, ăn 2 cữ vào buổi sáng, cho ăn 2 ngày liên tiếp kết hợp với tạt 1 chai cho 2000m³ nước.<br>- Cho ăn phòng 2-3ml/kg thức ăn, một tuần một lần.<br>- Dùng tạt trực tiếp 2.000m³ khi tôm bị nhiễm ký sinh (trộn một lượng nước vừa đủ tạt đều khắp ao, mở quạt trong quá trình sử dụng)`
  },
  {
    name: "HEPA",
    img: "image/HEPA.png",
    desc: "GAN THẢO MỘC",
    category: "gan",
    detail: `<b>Công dụng:</b><br>- Thảo dược bổ gan, tụy cho tôm. Tái tạo nhanh chức năng gan, tụy.<br>- Giải độc gan, các chất độc hại, kháng sinh tồn lưu trong gan, tụy. <br>- Đặc biệt phục hồi sức khỏe sau khi điều trị bằng kháng sinh.<br><b>HDSD:</b><br>- Dùng tạt:<br>+ Tạt 1 lít cho 1000m3, định kỳ 3 ngày 1 lần từ lúc mới thả tôm đến giai đoạn 20 ngày tuổi để ngăn bệnh mờ đục gan, trắng gan (TPD).<br>- Dùng cho ăn:<br>+ Cho ăn định kỳ, phòng bệnh: Trộn 5ml/1Kg thức ăn, sử dụng 1-2 lần/ngày.<br>- Kết hợp trị bệnh: Trộn 7-10ml/1Kg thức ăn, cho ăn liên tục trong ngày cho tới khi hết bệnh.`
  },
  {
    name: "INDIN",
    img: "image/INDIN.png",
    desc: "DIỆT KHUẨN AN TOÀN",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- <b>INDIN</b> có tác dụng sát trùng phổ rộng diệt khuẩn cực mạnh, tiêu diệt vi khuẩn gây hại, nấm nguyên sinh động vật, thường xuất hiện trong nước ao nuôi gây hại cho tôm-cá, đặc biệt không gây biến động môi trường.<br><b>HDSD:</b><br>- Dùng diệt khuẩn ban đầu, xử lý ao lắng cấp nước trong quá trình nuôi 1lít/2.000-3.000m3 nước.
<br>- Dùng diệt khuẩn ao nuôi: 1lít/3.000-5.000m³ định kỳ 7-10 ngày/lần.              
<br>- Trong trường hợp ao nuôi nằm trong vùng dịch, dùng 1 lít/2.000-3.000 m³ nước.
<br>- Hòa <b>INDIN</b> với 20lít nước rồi tạt đều trong ao, mở hết quạt trong lúc sử dụng. 
<br>- Hiệu quả nhất khi sử dụng vào lúc chiều mát.  `
  },
  {
    name: "MIXSODA",
    img: "image/MIXSODA.png",
    desc: "KHOÁNG TẠT TĂNG KIỀM",
    category: "khoang",
    detail: `<b>Công dụng:</b><br>- <b>MIXSODA</b> tăng kiềm nhanh, giúp tôm nhanh cứng vỏ, kháng bệnh tốt. Ổn định môi trường vào mùa mưa, cân bằng hệ sinh thái trong ao nuôi, thuận lợi cho vi sinh vật có lợi phát triển.<br><b>HDSD:</b><br>- Sử dụng MIXSODA 5kg cho 3.000- 5.000 m³. Định kỳ 5-7 ngày một lần.
<br>- Sử dụng MIXSODA 5kg cho 2.000- 4.000 m³. Giúp tôm cứng vỏ và kích thích lột xác, ổn định độ kiềm.
<br>- Sử dụng MIXSODA 5kg cho 1.000 m³ khi hàm lượng kiềm trong ao thấp.
<br><b>CHÚ Ý:</b> Trộn MIXSODA với 30lít nước, tạt đều khắp ao, mở quạt nước khi dùng.`
  },
  {
    name: "NEOBES",
    img: "image/neobes.png",
    desc: "XỬ LÝ NẤM ĐỘC TRONG AO NUÔI",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- Hiệu quả đối với nấm và vi khuẩn trên động vật thủy sản. Là sản phẩm được dùng thay thế Malachile Green.
<br>- Loại bỏ đóng rong, đóng nhớt, đen mang trên tôm, cá (thay thế Trifluralin). Đặc biệt xử lý nấm đồng tiền, nấm chân chó trong ao nuôi.
<br>- Xử lý nấm thủy mi, nấm ngang, loét mình trên cá nước ngọt và nước lợ.<br><b>HDSD:</b><br>- Dùng định kỳ: 1lít cho 1.500-2.00m³ nước.
<br>- Dùng khi có biểu hiện bệnh: 1lít cho 1.000-1.200m³ nước.
<br>- Dùng trong trường hợp ao nuôi có nấm 1lít cho 1.000m³ nước.
<br>- Hòa tan với nước sạch, tạt đều khắp ao (1lít sản phẩm pha với 20 lít nước).
<br>- Dùng vào lúc 10h sáng đến 2h chiều để đạt hiệu quả cao nhất.`
  },
  {
    name: "PAMES",
    img: "image/pames.png",
    desc: "SIÊU HẠ PHÈN",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- Khử các kim loại nặng tồn lưu trong ao nuôi giúp tôm lột xác đều đặn.
<br>- Giảm độ nhờn, váng bọt trong ao nuôi, tiêu hủy các độc tố của ao.
<br>- Phân giải độc tố do sử dụng hóa chất, chống sốc khi môi trường thay đổi.
<br>- Khử phèn sắt, phèn nhôm, giải độc, ổn định pH trong ao nuôi, tăng kiềm, làm pH đáy ao ổn định.
<br>- Tăng cường chất lượng nước, phục hồi và ổn định lại hệ động thực vật, tránh hiện tượng tôm chạy quanh ao.<br><b>HDSD:</b><br>- Xử lý định kỳ 5-7 ngày một lần: 1kg/3.500-4.000m3 nước.
<br>- Ao bị nhiễm phèn nặng dùng: 1kg/2.500-3.500m3 nước.
<br>- Trường hợp khử độc và phục hồi ao nhiễm thuốc sâu, thuốc diệt giáp xác, chlorin  dùng: 1kg/1.000m3 nước.`
  },
  {
    name: "VITAMIN",
    img: "image/VITAMIN.png",
    desc: "VITAMIN TỔNG HỢP",
    category: "khoang",
    detail: `<b>Công dụng:</b><br>- Tăng cường quá trình trao đổi chất, hỗ trợ quá trình tăng cường và phát triển của tôm - cá.
<br>- Bồi bổ nhanh sức khỏe, làm tăng khả năng miễn dịch, ngăn ngừa các loại bệnh.
<br>- Giúp cân bằng Acid amin thiết yếu, tăng sự chuyển hóa thức ăn, giảm FCR.
<br>- Tăng sức đề kháng khi thay đổi thờ tiết hoặc khi sang tôm, thu tỉa, vận chuyển tôm giống.
<br>- Cứng vỏ, chắc thịt, tránh hiện tượng cong thân đục cơ.<br><b>HDSD:</b><br>- Tôm giống:
<br>+ Zoea: 3ml/kg thức ăn           
<br>+ PL: 7ml/kg thức ăn
<br>+ Mysis: 5ml/kg thức ăn          
<br>+ PL 8-15: 15ml/kg thức ăn
<br>- Tôm bố mẹ: 2ml/kg thức ăn
<br>- Tôm thịt: 3ml/kg thức ăn, sử dụng trong suốt quá trình nuôi.
<br>* Khi tôm bị sốc, yếu do môi trường thay đổi đột ngột: tạt trực tiếp xuống ao nuôi 1l/2.000m3 nước khi tôm yếu do thời tiết thay đổi đột ngột.
<br>* Khi sang tôm, thu tỉa, thả giống: tạt trực tiếp xuống ao nuôi 1l/1.500m3 nước (tạt nước 2 giờ) `
  },
  {
    name: "YUCCA C",
    img: "image/yucca c.png",
    desc: "TĂNG SỨC ĐỀ KHÁNG - ỔN ĐỊNH MÔI TRƯỜNG",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- Cấp cứu tôm nổi đầu, chống sốc khi môi trường biến động.
<br>- Hấp thụ khí độc, tăng cường oxy cho ao nuôi.
<br>- Giúp tăng sức đề kháng, tăng tỉ lệ sống sót, giảm thiểu dịch bệnh, phục hồi sức khỏe nhanh sau khi lột xác.
<br><b>HDSD:</b><br>- Trước khi thả giống sử dụng: 3kg cho 5.000m3 nước
<br>- Sử dụng khi hàm lượng khí độc cao: 3kg cho 3.000m3 nước
<br>- Cấp cứu tôm nổi đầu: 3kg cho 2.000m3 nước
<br>- Sử dụng định kỳ 7 ngày 01 lần:  1kg cho 3.000m3 nước`
  },
  {
    name: "YUCCA YEO",
    img: "image/yucca yeo.png",
    desc: "SẠCH NƯỚC - ỔN ĐỊNH MÔI TRƯỜNG",
    category: "xuly",
    detail: `<b>Công dụng:</b><br>- Tăng kiềm nhanh, giúp tôm nhanh cứng vỏ, kháng bệnh tốt. Ổn định môi trường vào mùa mưa, cân bằng hệ sinh thái trong ao nuôi, thuận lợi cho vi sinh vật có lợi phát triển.<br><b>HDSD:</b><br>- Sử dụng 10kg cho 3.000- 5.000 m³. Định kỳ 5-7 ngày một lần.
<br>- Sử dụng 10kg cho 2.000- 4.000 m³. Giúp tôm cứng vỏ và kích thích lột xác, ổn định độ kiềm.
<br>- Sử dụng 0kg cho 1.000 m³ khi độ kiềm thấp.
<br>Chú ý: Trộn với 30lít nước, tạt đều khắp ao, mở quạt nước khi dùng.`
  }
];

// 🔹 Hàm render (giữ style .map() của bạn + có filter category)
function renderProducts(category = "all") {
  const container = document.getElementById('product-list');
  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="product-image">
      <img src="${p.img}" alt="Sản phẩm ${p.name}" loading="lazy">
      <h2 class="product-name">${p.name}</h2>
      <p>${p.desc}</p>
      <button class="detail-btn" data-name="${p.name}" data-desc="${p.desc}">Xem chi tiết</button>
    </div>
  `).join('');

  // Gắn event cho nút chi tiết sau khi render
  document.querySelectorAll(".detail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openPopup(btn.dataset.name, btn.dataset.desc);
    });
  });
}

// 🔹 Popup
function openPopup(title, text) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup").style.display = "block";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// 🔹 Khởi động: render tất cả
document.addEventListener("DOMContentLoaded", () => renderProducts());