let alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

let alphabetUp = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
]

let alphabetContainer = document.getElementById('alphabet');
let alphabetStr = '<h2>Строчный алфавит</h2><br><p>';
for (let i = 0; i < alphabet.length; i++) {
    alphabetStr += alphabet[i] + ' ';
}
alphabetStr += '</p><br><h2>Заглавный алфавит</h2><br><p>';
for (let i = 0; i < alphabetUp.length; i++) {
    alphabetStr += alphabetUp[i] + ' ';
}
alphabetStr += '</p>'
alphabetContainer.innerHTML = alphabetStr;

function findIndex(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) return i;
    }
    return -1;
}

function rot13(text) {
    let result = '';
    let operationCh = [];
    let changedCh = [];

    for (let i = 0; i < text.length; i++) {
        let ch = text[i];
        operationCh.push(ch);

        let chL = findIndex(alphabet, ch);
        if (chL !== -1) {
            let shifted = alphabet[(chL + 13) % 26];
            result += shifted;
            changedCh.push(shifted);
        } else {
            let chU = findIndex(alphabetUp, ch);
            if (chU !== -1) {
                let shifted = alphabetUp[(chU + 13) % 26];
                result += shifted;
                changedCh.push(shifted);
            } else {
                result += ch;
                changedCh.push(ch);
            }
        }
    }

    let operations = '<h3>Операции:</h3>';
    for (let i = 0; i < operationCh.length; i++) {
        operations += `${operationCh[i]} → ${changedCh[i]}<br>`;
    }

    const operationsContainer = document.getElementById('operations');
    operationsContainer.innerHTML = operations;

    return result;
}

let input  = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input', () => {
output.value = rot13(input.value);
});
