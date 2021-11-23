
//ลิสวิชาที่เเต่ละคนลง
let materials = ['Optical fiber', 'Intro to telecom trans'];
//ระบุที่ที่จะเอาไปใส่
let boxofsubject = document.getElementById('mat_sub');
//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้) 
materials.forEach((material) => {
    let divHTML = '<p>';
    divHTML += material;
    divHTML += '</p>';
    boxofsubject.innerHTML += divHTML;
})