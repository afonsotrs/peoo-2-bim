// Questão 7: Escreva uma função chamada groupByFirstLetter que recebe um 
// array de strings e retorna um objeto onde cada chave é uma letra,
// e o valor é um array de strings que  começam com aquela letra. Por exemplo: 
// groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]);  /* retorna
// { 
//  a: ["apple", "avocado"], 
//  b: ["banana", "blueberry"], 
//  c: ["cherry"] 
// } 
// */ 

const groupByFirstLetter = (array) => {
    let objeto = {}
    for(let i=0 ; i < array.length ; i++){
        let primeiraletra = array[i][0];
        if(!objeto[primeiraletra]){
            objeto[primeiraletra] = [];
        }
        objeto[primeiraletra].push(array[i])
    }
    return objeto;
}

console.log(groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]));