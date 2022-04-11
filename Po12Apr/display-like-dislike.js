//--------แสดงผลจาก server---------//
//ค่าจากserverลองใส่เล่นดู
let votes = ["like"]
votes.forEach((vote) => {
    if(vote === "like"){
        document.getElementById("votelike").checked = true;
    } else if(vote === "dislike"){
        document.getElementById("votedislike").checked = true;
    }
});


//--------submit auto---------//
function likedislikesubmit() {
    document.getElementById("likedislikeform").submit();
  } 
