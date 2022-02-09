//ลิส Comments
let comments_requestment = ['เดี๋ยวผมลงให้ครับ'];
//ระบุที่ที่จะเอาไปใส่
let boxofcomments = document.getElementById('comment_card');
//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้)
comments_requestment.forEach((comment) => {
    let divHTML = '<div class="post">';
    divHTML += '<div class="post_top">';
    // *** รูป
    divHTML += '<img class="user_avatar post_avatar" src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" alt="">';
    divHTML += '<div class="post_topInfo">';
    divHTML += '<h3>';
    // *** ชื่อ
    divHTML += 'Mr.Anop Surname';
    divHTML += '</h3>';
    divHTML += '<p>';
    // *** เวลา
    divHTML += '2 March 2022 at 20.30 pm';
    divHTML += '</p>';
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '<div class="post_bottom">';
    divHTML += '<p>';
    divHTML += 'โจทย์การบ้านที่อาจารย์สั่งไว้ให้รายละเอียดข้อกำหนดไม่ครบหรือเปล่าคะ หาคำตอบไม่ได้ค่ะ';
    divHTML += '</p>';
    divHTML += '</div>';
    divHTML += '</div>';

    // รวม
    boxofcomments.innerHTML += divHTML;
})



                            
                      
                    