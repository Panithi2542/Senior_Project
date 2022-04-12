//caseI = ['แบบสอบถาม.pdf'],['Screen Shot 2565-04-07 at 17.40.00.png'] caseII =[]
let files = ['129639.png'];
//ระบุที่ที่จะเอาไปใส่
let addfile = document.getElementById('gen-iframe');

//ลิสที่จะดึงมาที่ละตัว.forEach(ดึงมาไว้ในตัวแปรช่องนี้)

files.forEach((file) =>{
    //<iframe src="" width="100%" height="500px"></iframe> 
    const divcol =document.createElement('iframe');
    divcol.setAttribute("src",file)
    divcol.setAttribute("width","100%")
    if (files.length == 1){
        divcol.setAttribute("height","500px")
    } else {
        divcol.setAttribute("height","0px")  
    }
    //เอาไปใส่ช่องในhtml
    addfile.append(divcol);
})

