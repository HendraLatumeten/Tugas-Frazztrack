let printSegitiga = 5
let hasil = ''
if (typeof (printSegitiga) === 'number') {

    for (let i = 1; i <= printSegitiga ; i++) {

        for (let j = 1;  printSegitiga >= j + i - 1; j++) {
            hasil += j + ' '
            
        }
        hasil += '\n';


    }
    return console.log(hasil);

} else {
    console.log('Data Harus Number')

}
  
