//ลิสวิชาที่เเต่ละคนลง
let ajs = ['ผศ. ดร. อภิวัฒน์ เล็กอุทัย', 'อ.ดร. สุวิทย์ กิระวิทยา', 'ศ. ดร. ทรงพล กาญจนชูชัย'];
//ระบุที่ที่จะเอาไปใส่
let boxofajlist = document.getElementById('aj_in_sub');
//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้)
ajs.forEach((aj) => {
    let divHTML = '<dt class="col-sm-2">';
    divHTML += '<img src= ' ;
    //ใส่ไฟล์รูป
    divHTML += '"https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png"'
    //ตัวปรับขนาด
    divHTML += 'width="32" height="32" class="rounded-circle me-2">'
    divHTML += '</dt>';
    divHTML += '<dt class="col-sm-7">';
    //ชื่ออาจารย์
    divHTML += aj;
    divHTML += '</dt>';
    divHTML += '<dd class="col-sm-3">';
    //ใส่ sec
    divHTML += 'sec2'
    divHTML += '</dd>';
    boxofajlist.innerHTML += divHTML;
})

