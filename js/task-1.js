//task1
const numCategori = document.querySelectorAll(".item");
// let num = 0;
// numCategori.forEach(() => num++)
console.log(numCategori.length);

//task2
const categories = document.querySelectorAll("#categories .item");


categories.forEach((mus) =>{
    const title = mus.querySelector("h2")
    console.log(title.textContent)
    const items = mus.querySelectorAll("li")
    console.log(items.length);
    
});


