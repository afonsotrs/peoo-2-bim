// Questão 6: Crie uma função chamada concatenateArrays que recebe dois arrays
// de strings  e retorna um novo array onde cada elemento é a concatenação das
// strings que estão nas  mesmas posições nos arrays de entrada. Se os arrays
// tiverem tamanhos diferentes, o  restante das strings deve ser adicionado
// ao final do array resultante. Por exemplo: 
// concatenateArrays(["a", "b", "c"], ["1", "2", "3", "4"]);  
// // retorna ["a1", "b2", "c3", "4"] 

const concatenateArrays = (array1, array2) => {
    let novoarray = [];
    for(let i = 0; i<array1.length;i++){
        let conc = array1[i] + array2[i]
        novoarray.push(conc);
    }
    return novoarray;
}
console.log(concatenateArrays(["a", "b", "c"], ["1", "2", "3", "4"]));
