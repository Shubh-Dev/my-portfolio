let popMenu = document.querySelector(".hamburger");
popMenu.addEventListener("click",() =>{
    let myHeader = document.querySelector(".main-header", "main-nav");
    myHeader.classList.add("active");
})