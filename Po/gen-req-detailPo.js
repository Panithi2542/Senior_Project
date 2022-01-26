//ลิส Topic
let topicsDetail_requestment = ['โจทย์การบ้านที่อาจารย์สั่งไว้ให้รายละเอียดข้อกำหนดไม่ครบหรือเปล่าคะ หาคำตอบไม่ได้ค่ะ'];
//ระบุที่ที่จะเอาไปใส่
let boxofdetailrequestment = document.getElementById('requestmentDe_card');
//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้)
topicsDetail_requestment.forEach((topicde) => {
    let divHTML = '<div class="col">';
    divHTML += '<div class="card" style="border-radius: 20px;">';
    divHTML += '<div class="card-body">';
    divHTML += '<div class="container">';
    
    divHTML += '<h4 class="card-title text-danger">';
    // *** หัวข้อrequestment
    divHTML += topicde;
    divHTML += '</h4>';

    divHTML += '<p class="card-title">';
    // *** Detail
    divHTML += 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt hic quasi eveniet quidem error odit nihil nesciunt mollitia, blanditiis enim nam tempore eaque voluptate possimus ratione accusamus assumenda neque!';
    divHTML += '</p>'

    divHTML += '<p class="text-muted">';
    // *** time
    divHTML += '2 March 2022 at 20.30 pm';
    divHTML += '</p>'
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '</div>';
    // รวม
    boxofdetailrequestment.innerHTML += divHTML;
})

