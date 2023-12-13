import * as fs from 'fs';

const lerArquivo = (caminho:string): unknown => {
    const conteudoArquivo = fs.readFileSync(caminho, {
        encoding:'utf-8'
    });

    return conteudoArquivo
};

const escreverArquivo = (caminho:string, dados: {}): void => {
    fs.writeFileSync(caminho, JSON.stringify(dados))
};

escreverArquivo('../bd.json', {teste:2, nome:"ruan", primeiraVez: false})

console.log(lerArquivo('../bd.json'));
