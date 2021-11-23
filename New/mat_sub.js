
//ลิส Material
let materials = ['Optical fiber', 'Intro to telecom trans'];
//ระบุที่ที่จะเอาไปใส่
let boxofsubject = document.getElementById('mat_sub_card');
//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้) 

//
materials.forEach((material) => {
    let divHTML = '<div class="col">';
    divHTML += '<div class="card" style="border-radius: 20px;>';
    divHTML += '<div class="card-body text-danger">';
    divHTML += material;
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '</div>';
    boxofsubject.innerHTML += divHTML;
})