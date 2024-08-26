// Questão 8: Escreva uma função chamada compressString que recebe uma string e 
// retorna  uma versão comprimida da string onde cada sequência de caracteres
// iguais é substituída  pelo caractere seguido pelo número de ocorrências. 
// Se a versão comprimida não for menor  que a string original, retorne a string original. Por exemplo: 
// compressString("aaabbcccc"); // retorna "a3b2c4" 
// compressString("abc"); // retorna "abc" 

const compressString = (string) => {
    let cont = 0
    let novoarray = []
    for(let i = 0; i<string.length; i++){
        if(!novoarray.includes(string[i]))
            novoarray.push(string[i])
        }
    return novoarray;
}

console.log(compressString("aaabbcccc"));