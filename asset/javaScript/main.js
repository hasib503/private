
window.addEventListener("scroll", ()=>{
    const navBar = document.querySelector("header");
    navBar.classList.toggle("sticky", window.scrollY > 0 );  
})

