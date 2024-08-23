// Questão 2: Escreva uma função chamada countWords que recebe uma string como
// argumento e retorna o número de palavras contidas na string. Considere que as palavras
// são separadas por espaços em branco. Por exemplo:
// countWords("A quick brown fox"); // retorna 4

const countWords = (string) => {
    let stringSemEspacosInuteis = string.trim();
    let cont = 1;
    for(let i = 0; i < stringSemEspacosInuteis.length; i++){
        if(stringSemEspacosInuteis[i] === ' '){
            cont += 1
        }
    }
    return cont;
}

console.log(countWords('A quick brown fox'));