
function salvarDados() {
    const nome = document.getElementById("inputnome").value;
    const senha = document.getElementById("inputsenha").value;
    const email = document.getElementById("inputemail").value;
    const cpf = document.getElementById("inputcpf").value;
    const cidade = document.getElementById("inputcidade").value;
    const endereco = document.getElementById("inputendereco").value;

    const usuario = {
        nome,
        senha,
        email,
        cpf,
        cidade,
        endereco
    };

    // Envia os dados para o backend usando fetch
    fetch("http://localhost:3000/salvar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensagem); // Exibe mensagem de sucesso
        document.getElementById("userForm").reset(); // Limpa o formulário
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao salvar os dados.");
    });
}
