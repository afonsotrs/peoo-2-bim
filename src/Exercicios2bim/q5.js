// Questão 5: Escreva uma função chamada findDuplicate que recebe um array de números
// inteiros e retorna o primeiro elemento que aparece mais de uma vez. Se não houver
// elementos duplicados, a função deve retornar null. Por exemplo: 
// findDuplicate([1, 2, 3, 4, 2]); // retorna 2 
// findDuplicate([1, 2, 3, 4, 5]); // retorna null 

const findDuplicate = (array) => {
    let novoarray = [];
    for(let i = 0; i<array.length; i++){
        if(novoarray.includes(array[i])){
            return array[i];
        }
        novoarray.push(array[i]);
    }
    return null;
}

let array = [1,2,2,3,4]
console.log(findDuplicate(array))