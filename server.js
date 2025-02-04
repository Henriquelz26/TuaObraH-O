const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware para permitir JSON e requisições CORS
app.use(express.json());
app.use(cors());

// Caminho do arquivo onde os dados serão salvos
const filePath = "./TuaObraH-O/json/users.json";

// Rota para salvar os dados enviados pelo frontend
app.post("/salvar", (req, res) => {
    const novoUsuario = req.body;

    // Le o arquivo existente (se não existir, inicia com um array vazio)
    let usuarios = [];
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        usuarios = JSON.parse(data);
    }

    // Adiciona o usuario ao array
    usuarios.push(novoUsuario);

    // Salva o array atualizado 
    fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));

    res.status(200).json({ mensagem: "Dados salvos com sucesso!" });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
