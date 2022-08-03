seleksiNilai = (nilaiAwal, nilaiAkhir, params) => {
  let data = params.concat(nilaiAwal, nilaiAkhir)
  // console.log(data)
  if (typeof (nilaiAwal) === 'number' && typeof (nilaiAkhir) === 'number' && typeof (params) === 'object') {
    if (nilaiAwal < nilaiAkhir) {
      params.sort(function (a, b) {
        return a - b
      })
      for (let i = 0; i < params.length; i++) {
        let row = params[i]
        if (row > nilaiAwal && row < nilaiAkhir) {
          console.log(row)
        }
      }
    } else if (nilaiAwal > nilaiAkhir) {
      console.log('nilai akhir harus lebih besar')
    } else {
      console.log('nilai akhir terlalu kecil')
    }

    if (data.length <= 5) {
      console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    } else {
      for (const row of params) {
        if (nilaiAwal > row && nilaiAkhir < row) {
          console.log('Nilai Ditemukan')

        } else {

          return console.log('Nilai Tidak Ditemukan')
        }
      }
    }


  } else {
    console.log('Data Bukan Number')

  }
}
//console.log(seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]))
//console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
//console.log(seleksiNilai(4, 17, [2, 25, 4]))
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))