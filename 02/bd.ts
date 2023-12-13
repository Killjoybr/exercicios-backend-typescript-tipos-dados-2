import * as fs from 'fs';

const lerUsuarios = (caminho:string): unknown => {
    const ArrayUsuarios = fs.readFileSync(caminho, {
        encoding:'utf-8'
    });

    return ArrayUsuarios
}

type Endereco = {
    cep: number,
    rua: string,
    complemento?: string | null,
    bairro: string,
    cidade: string
}

type Usuario = {
    nome: string,
    email: string,
    cpf: number,
    profissao?: string,
    endereco?:Endereco | null
}

const cadastrarUsuario = (usuario:Usuario, caminho:string): void => {
    if(!usuario.endereco){
        usuario.endereco = null
    };
    fs.writeFileSync(caminho, JSON.stringify(usuario))
}

cadastrarUsuario(
    {
        nome:"Elias",
        email:"eliasdev@cubos.com",
        cpf:5225415698,
        profissao:'Desenvolvedor FullStack',
}, '../bd.json');

console.log(lerUsuarios('../bd.json'));
