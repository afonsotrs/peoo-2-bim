// Questão 3: Crie uma função chamada isPalindrome que verifica se uma string é um
// palíndromo (uma palavra ou frase que é a mesma ao contrário, ignorando espaços,
// pontuação e diferença entre maiúsculas e minúsculas). Por exemplo:
// isPalindrome("A man a plan a canal Panama"); // retorna true
// isPalindrome("Hello"); // retorna false


const isPalindrome = (string) => {
    // .split('')  Divide a string em um array de caracteres.
    // .reverse('')  Reverte a ordem dos caracteres no array.
    // .join('')  Junta os caracteres de volta em uma string.
    if(string.toUpperCase() === string.toUpperCase().split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome('kayak'));