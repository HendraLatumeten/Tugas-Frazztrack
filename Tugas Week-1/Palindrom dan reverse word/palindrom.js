function checkPalindrome(str) {
    let strArray = str.toLowerCase().split('');
    let newArr = strArray.join('');
    let revArr =  [...newArr].reverse().join('')

    if ( newArr === revArr) {
        return 'Palindrom';
    } else {
        return 'bukan palindrom';
    }
}

let a = "Malam"
let b = "Katak"
let c = "Hari"

console.log(checkPalindrome(a))
console.log(checkPalindrome(b))
console.log(checkPalindrome(c))

/*
1. mulai
2. input nilai String
3. mengecilkan huruf bedasarkan index
3. menampung dalam sebuah variabel array
4. mengabungkan string array yang awalnya per kata
5. membalikan kata dengan reverse
6. membuat kondisi, jika newArr sama nilai dengan revArr. maka output(polindrom)
8. dan jika newArr tidak sama dengan revArr maka output (bukan Palindrom)
7. selesai
*/