//ลิส Topic
let topics_req_report = ['โจทย์การบ้านที่อาจารย์สั่งไว้ให้รายละเอียดข้อกำหนดไม่ครบหรือเปล่าคะ หาคำตอบไม่ได้ค่ะ', 'อาจารย์ลงเฉลยข้อสอบให้หน่อยครับ', 'ขอเฉลยการบ้านข้อนี้ครับ'];
//ระบุที่ที่จะเอาไปใส่
let req_report = document.getElementById('requestment_report');
//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้)
topics_req_report.forEach((topic) => {
    let divHTML = '<div class="col">';
    divHTML += '<div class="card" style="border-radius: 20px;">';
    divHTML += '<div class="card-body">';
    divHTML += '<div class="container">';
    divHTML += '<div class="row">';
    divHTML += '<div class="col-sm-11">'
    divHTML += '<h4 class="card-title text-danger">';
    // *** หัวข้อrequestment
    divHTML += topic;
    divHTML += '</h4>';
    divHTML += '<p class="text-muted">';
    // *** time
    divHTML += '2 March 2022 at 20.30 pm';
    divHTML += '</p>'
    divHTML += '</div>';
    divHTML += '<div class="col-sm-1">';
    // *** ลิ้งค์ไปที่หน้ารายละเอียด ใส่ตรง #
    divHTML += '<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></a>';
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '</div>';
    // รวม
    req_report.innerHTML += divHTML;
})