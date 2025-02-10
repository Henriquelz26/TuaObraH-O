

let users = document.querySelector("#infoUser")


fetch("../json/users.json").then((response) => {
    response.json().then((users) => {
        users.usuarios.map((user) =>{
            infoUser.innerHTML +=`<ul><li>Nome: ${user.nome}</li><li>E-mail: ${user.email}</li><li>Cidade: ${user.cidade}</li><li>Descrição: ${user.descricao}</li></ul>` 

        })
    })

})
