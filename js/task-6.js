// function getRandomHexColor() { 
//   return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }

// const input = document.querySelector("input");
// const button_create = document.querySelector("button[data-create]");
// const button_destroy =document.querySelector("button[data-destroy]");
// const box = document.querySelector("#boxes");

// button_create.addEventListener("click",() => {createBoxes(input.value)});

// button_destroy.addEventListener("click", destroy)

// const childrenBox = box.children;

// function createBoxes(amount){
//   const criate = `<div id="boxes"></div>`;
//   if(amount>100){

//     alert("All form fields must be filled in");

//   }else{
//     if(box.children.length>0) {
//       box.innerHTML = '';
      
//       for(let i = 0; i<amount;i++){
//         box.insertAdjacentHTML("beforeend",criate);
//         }
//         for (let i = 0; i < childrenBox.length; i++) {
//           childrenBox[i].style.width = `${30+(i * 10)}px`;
//           childrenBox[i].style.height  = `${30+(i * 10)}px`;
//           childrenBox[i].style.backgroundColor = getRandomHexColor();
//         }
      
//     }else{
//       for(let i = 0; i<amount;i++){
//         box.insertAdjacentHTML("beforeend",criate);
//         }
//         for (let i = 0; i < childrenBox.length; i++) {
//           childrenBox[i].style.width = `${30+(i * 10)}px`;
//           childrenBox[i].style.height  = `${30+(i * 10)}px`;
//           childrenBox[i].style.backgroundColor = getRandomHexColor();
//         }
//     }
   
//   }
// }
// function destroy(){
//   box.innerHTML = '';
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const input = document.querySelector("input");   

const createButton = document.querySelector("button[data-create]");
const destroyButton   
 = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");

createButton.addEventListener("click", () => createBoxes(input.value));   

destroyButton.addEventListener("click", destroy);   


function createBoxes(amount) {
  if (amount > 100) {
    alert("All form fields must be filled in");
    return;
  }

  box.innerHTML = ''; // Очищаем контейнер

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width   
 = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor   
 = getRandomHexColor();
    fragment.appendChild(div);
  }
  box.appendChild(fragment);
}

function destroy() {
  box.innerHTML = '';
}