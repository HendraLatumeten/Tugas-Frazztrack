function num(angka) {
    let hasil = '';
    for (let i = 1; i <= angka; i++) {
        for (let j = angka ; j >= angka; j++) {
            hasil += j + " ";

        }
        hasil += '\n';
    }
    return hasil

}


console.log(num(5));