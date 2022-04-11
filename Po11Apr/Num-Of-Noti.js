//ตัวรับค่าจำนวนแจ้งเตือนที่ยังไม่อ่าน
let a = 5
let NumOfNoti = document.getElementById('Noti');
//ถ้ามีแจ้งเตือนที่ยังไม่ได้อ่านสั่งเปลี่ยนสีเป็นสีแดง
if (a >= 1){
    NumOfNoti.setAttribute("class","position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger")
    NumOfNoti.innerHTML = a;

}

