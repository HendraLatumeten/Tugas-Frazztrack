
function reverseWords(str) {
    let explode = str.split(" ");
    let hasil = ''
    for (let i = explode.length - 1; i > 0 - 1 ; i--) {
      hasil += explode[i] + ' ';
    }
    return hasil;

   
    
}
console.log(reverseWords('Saya Belajar Javascript'));


/*
1. mulai
2. input nilai String
3. memisahkan kalimat dengan split
5. membuat perulangan yang di hitung dari belakang
6. menentukan panjnag nilai dari string yang di input
7. ketika sudah mendapatkan panjang, dilakukan pengurangan 1
8. i lebih dari 0 dikurangi 1, i--
9. dan hasilnya berupa membalikan nilai sebelmnya
10. selesai
*/

