//ลองคอมเม้นเล่นดู


//เก็บค่าไปโชว์ที่ ID results
let results = document.getElementById("results");
 document.querySelector("div.box").addEventListener("click", function(evt){
     if(evt.target.type === "radio"){
         //เอาตัวแปรเก็บ like dislike มาใส่ตรงนี้
         //ตอนนี้เป็นโชว์ผลปุ่มที่คลิ๊ก
       results.textContent = evt.target.value;
     }
});


//ทำให้แสดงผลจาก server
let votes = ["dislike"]
votes.forEach((vote) => {
    if(vote === "like"){
        document.getElementById("votelike").checked = true;
    } else {
        document.getElementById("votedislike").checked = true;
    }
});

