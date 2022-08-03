let nama = [
    "Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"
];
let checkNama = ''

searchName = (keyword, params, callback) => {

    if (typeof(keyword) === 'string' && typeof(params) === 'number') {
        keyword = keyword.toLocaleLowerCase()
        let re = new RegExp(keyword + '.+$', 'i');
        nama = nama.filter(function (e) {
        return nama.pop(), e.search(re) != -1
        })
        return callback(nama)
        
    }else{
        return console.log('data yang anda masukan salah')
    }
}

// check Nama
callback = (nama) => {
    for (let i =  0; i < nama.length; i++) {
        const element = nama[i];
        if (element === false) {
            console.log('Data Yang Dicari Tidak Ada')
        }
        return nama
    }
}
console.log(searchName('AN', 3, callback))