// Questão 4: Escreva uma função chamada replaceWord que recebe três argumentos: uma
// string original, uma palavra a ser substituída e uma palavra substituta. A função deve
// retornar a string original com todas as ocorrências da palavra a ser substituída trocadas
// pela palavra substituta. Por exemplo:
// replaceWord("The quick brown fox jumps over the lazy dog", "fox", "cat");
// // retorna "The quick brown cat jumps over the lazy dog"

const replaceWord = (string_original, string_substitida, string_substituta) => {
    return string_original.replace(string_substitida, string_substituta);
}

console.log(replaceWord('afonso torres', 'torres', 'silva'))