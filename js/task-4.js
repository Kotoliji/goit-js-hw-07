const formElem = document.querySelector(".login-form");


formElem.addEventListener("submit",header_submit_write)

function header_submit_write(e){
    e.preventDefault();
    const user_email = formElem.elements.email.value;
    const user_pass = formElem.elements.password.value;
    if (/^\s+$/.test(user_email)||/^\s+$/.test(user_pass)|user_email ==""||user_pass==""){
        alert("All form fields must be filled in");
    }else{
    const obj ={
        user_email,
        user_pass
    };
    console.log(obj);
    }
    formElem.reset();
}