const fs = require('fs');
const arquivo_caminho = process.argv;
const link = arquivo_caminho[2];

function verificaDuplicadas(texto) {
    const listaPalavras = texto.split;

}

fs.readFile(link, 'utf-8', (err, text) => {
    verificaDuplicadas(texto);
    console.log(text);
});
