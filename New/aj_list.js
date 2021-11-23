//ลิสชื่ออาจารย์ในเเต่ละวิชา
let aj_in_subjects = ['ปณิธิ นาทวงศ์', 'อาทิมา ศรีวงศ์จรรยา', 'ภาวิดา มาป้อง','อนพัทย์ พิทยายน'];

//ระบุที่ที่จะเอาไปใส่
let boxofaj = document.getElementById('aj_in_sub');

//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้)
aj_in_subjects.forEach((ajin) => {
    let divHTML = '<p>';
    divHTML += ajin;
    divHTML += '</p>';
    boxofaj.innerHTML += divHTML;
})