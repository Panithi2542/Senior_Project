
//ลิสชื่ออาจารย์ในเเต่ละวิชา
let aj_in_subjects = ['ปณิธิ นาทวงศ์', 'อาทิมา ศรีวงศ์จรรยา', 'ภาวิดา มาป้อง','อนพัทย์ พิทยายน'];

//ระบุที่ที่จะเอาไปใส่
let boxofsubject = document.getElementById('aj_sub_card');

//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้)
aj_in_subjects.forEach((aj) => {
    let divHTML = '<div class="col">';
    divHTML += '<div class="card" style="border-radius: 20px;">';
    divHTML += '<div class="card-body">';
    divHTML += '<h5 class="card-title text-danger">';
    divHTML += aj;
    divHTML += '</h5>';
    //คะเเนนสอนเข้าใจ
    divHTML += '<dl class="row">'
    divHTML += '<dt class="col-sm-6">สอนเข้าใจ</dt>';
    divHTML += '<dd class="col-sm-6">&nbsp;&nbsp;<span>'
    //ดึงคะแนนจากประเมินมาใส่ a
    divHTML += 'a'
    divHTML += '</span></dd>'
    
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '</div>';
    boxofsubject.innerHTML += divHTML;
})