//ลิสวิชาที่เเต่ละคนลง
let subjects = ['2102387', '2102422', '2102425','2102387', '2102422', '2102425'];
//ระบุที่ที่จะเอาไปใส่
let boxofsubject = document.getElementById('subjectcard');
//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้)
subjects.forEach((subject) => {
    let divHTML = '<div class="col">';
    divHTML +='<a href="S-sub1.html" style="text-decoration:none; color: #000;">';
    divHTML += '<div class="card" style="border-radius: 20px;">';
    divHTML += '<div class="card-body">';
    //เพิ่มรูป เพิ่มชื่อวิชา
    divHTML += '<h5 class="card-title text-danger">';
    divHTML += subject;
    divHTML += '</h5>';
    //ชื่อวิชา
    divHTML += '<p class="card-text">This is a longer card with supporting text below as a naturallead-in to additional content.</p>';
    divHTML += '</div>';
    divHTML += '</div>';
    divHTML += '</a>';
    divHTML += '</div>';
    boxofsubject.innerHTML += divHTML;
})