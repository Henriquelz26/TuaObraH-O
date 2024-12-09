const nav = document.querySelector(".nav")
const botaoMenu = document.querySelector(".botao-menu")
const listaMenu = document.querySelector(".lista-menu")

function handleButtonClick(event){
    
    if  (event.type === "touchstart") event.preventDefault()
    nav.classList.toggle("active")
    handleClickOutside(listaMenu, () => {
        nav.classList.remove("active")
    });
}

botaoMenu.addEventListener("click", handleButtonClick);
botaoMenu.addEventListener("touchstart", handleButtonClick);