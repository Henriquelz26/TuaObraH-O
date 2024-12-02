//função para alternar o botão menu entre visivel e invisivel

function Menu(){

var menu = document.getElementByid("menuList");

    if(menu.style.display === "none"){
        menu.style.display = "block";

    }else{
        menu.style.display = "none";
    }
}