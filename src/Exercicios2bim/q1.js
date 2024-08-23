// Questão 1: Escreva uma função chamada intercalateStrings que recebe 
// duas strings de
// mesmo tamanho como argumentos e retorna uma nova string onde os
// caracteres das duas
// strings de entrada são intercalados. Por exemplo:
// intercalateStrings("abc", "123"); // retorna "a1b2c3"

const intercalateStrings = (string1, string2) => {
    // let oi = ''  
    // oi.         para mostrar as funções que podemos usar com strings
    if (string1.length !== string2.length){
        return null;
    }
    let novastring = '';
    for(let i = 0; i < string1.length; i++){
        novastring = novastring + string1[i];
        novastring = novastring + string2[i];
    }
    return novastring;
}

console.log(intercalateStrings('abc', '123'));