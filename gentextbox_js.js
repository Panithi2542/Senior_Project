// เก็บค่าเป็นตัวแปรหลัง const ..... 
const Title = document.querySelector('.textbox-title');
const Detail = document.querySelector('.textbox-detail');
const addButton = document.querySelector('.add-textbox');
const textboxList = document.querySelector('.textbox-list');

// function removetextbox 
function removeTextbox(event) {
  event.target.parentNode.remove();
}


function addTextbox() {
  // สร้าง <div class="textbox"></div>
  const textbox = document.createElement('div');
  textbox.classList.add('textbox');

  // สร้าง <h3>Title</h3>
  const text = document.createElement('h3');
  text.innerHTML = Title.value;

  // สร้าง <button type="button" class="like-textbox"><i class="bi bi-hand-thumbs-up"></i></button>
  const buttonlike = document.createElement('button');
  buttonlike.type = 'button';
  buttonlike.classList.add('like-textbox');
  buttonlike.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>' ;
  //ทำงานโดยคลิ๊กปุ่ม class button โดยทำงานตาม function removeTextbox
  //func like ยัง
  buttonlike.addEventListener('click', removeTextbox);

  // สร้าง <button type="button" class="dislike-textbox"><i class="bi bi-hand-thumbs-down"></i></button>
  const buttondislike = document.createElement('button');
  buttondislike.type = 'button';
  buttondislike.classList.add('like-textbox');
  buttondislike.innerHTML = '<i class="bi bi-hand-thumbs-down"></i>' ;
  //ทำงานโดยคลิ๊กปุ่ม class button โดยทำงานตาม function removeTextbox
  //func dislike ยัง
  buttondislike.addEventListener('click', removeTextbox);


  // สร้าง <button type="button" class="remove-textbox">ลบ</button>
  const buttonremove = document.createElement('button');
  buttonremove.type = 'button';
  buttonremove.classList.add('remove-textbox');
  buttonremove.innerHTML = 'ลบ';
  //ทำงานโดยคลิ๊กปุ่ม class button โดยทำงานตาม function removeTextbox
  buttonremove.addEventListener('click', removeTextbox);

  // text, buttonlike, buttondislike, buttonremove => textbox
  textbox.append(text, buttonlike, buttondislike, buttonremove);

  // textbox => textbox list
  textboxList.prepend(textbox);
}

addButton.addEventListener('click', addTextbox);