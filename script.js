let popMenu = document.querySelector(".hamburger");
popMenu.addEventListener("click",() =>{
    let myHeader = document.querySelector(".main-header");
    myHeader.classList.add("active");
    let myNavbar = document.querySelector(".main-nav");
    myNavbar.classList.add("active");
    let myLogo = document.querySelector(".my-logo")
    myLogo.classList.add("active");
})

/*let navText = document.querySelector("hamburger");
navText.addEventListener("click",()=>{
    let myTextStyle = document.querySelectorAll(".link-1", "#main-nav");
    myTextStyle.classList.add("active");
})*/