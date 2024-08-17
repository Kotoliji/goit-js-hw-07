


const write_name = document.querySelector("#name-input");
const new_name = document.querySelector("#name-output");




write_name.addEventListener("keyup",hendle_inpute_write);
function hendle_inpute_write(){
    const name = write_name.value;
    if (/^\s+$/.test(name) || name ==""){
        new_name.textContent ="Anonymous"
    }else{
        new_name.textContent=write_name.value;
    }
}

// write_name.addEventListener("input", event =>
//     {
//         new_name.innerHTML = event.data;
// });        ПОКАЗУЕ ТІЛЬКИ ОСТАННЮ ВЕДЕНУ БУКВУ

// write_name.addEventListener("input",hendle_inpute_text);
// function hendle_inpute_text(){
//     const name =write_name.value
//     new_name.textContent = name;
// }