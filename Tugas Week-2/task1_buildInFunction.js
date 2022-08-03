/*
build in function

1 map() Array Methods
    membuat array baru sambil mengecek/melakukan operasi terhadap setiap elemen array.
*/
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mapArray = angka.map(e => e % 2 === 0)
console.log(mapArray)


/*
2 forEach() Array Methods
   membuat fungsi perulangan pada element di dalam array
*/
const buah = ['mangga', 'apel', 'durian']
let namabuah = ''
buah.forEach(row => {
    namabuah += `${row}`
    //   console.log(namabuah)
});


/*
3 getDate()  Date Methods
    mengambil tangal sekarang menurut waktu setempat
*/
let date = new Date()
let dateNow = date.getDate()
console.log('hari ini tanggal ' + `${dateNow}`)
//

/*
4 toString() number Methods
    mengubah nilai tipe data number menjadi string

*/
let number = 29;
let newString = number.toString()
//console.log(typeof(newString))

/*
5 toFixed() number Methods
    Memformat angka dengan jumlah digit tertentu di sebelah kanan desimal.
*/
let num = 177.1234;
console.log("num.toFixed() is : " + num.toFixed())



/*
6 valueOf() boolean Methods
    Mengembalikan nilai primitif(sederhana) dari objek Boolean.
*/
let flag = new Boolean(false)
//console.log( "flag. : " + flag.valueOf() )

/*
7 max() Math Methods 
    Mengembalikan nilai tertinggi.
*/
let value = Math.max(10, 20, -1, 100);
//console.log("value : " + value )

/*
8 random() Math Methods 
  
Mengembalikan angka pseudo-acak antara 0 dan 1.
*/
let angkaAcak = Math.random( )
//console.log("Angka Acak : " + angkaAcak)

/*
9 concat() String Methods
 mengabungkan 2 string menjadi 1
*/
let str1 = 'Hendra'
let str2 = 'latumeten'
let str3 = str1.concat(str2)
//console.log("nama  :" + str3)

/*
10 length() String Methods
 menghitung panjang string/array
*/
let nama = 'Hendra Latumeten'
let names = nama.length
console.log(names)