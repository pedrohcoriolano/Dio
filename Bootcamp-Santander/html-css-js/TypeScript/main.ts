
interface pessoa {
    nome: string,
    idade: number,
    nacionalidade: string,
}

interface Brasileiro extends Omit<pessoa, 'nacionalidade'> {

}

const br:Brasileiro = {
    nome: 'pedro',
    idade: 10
}