const mtk = null
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

if (mtk === null || bahasaIndonesia === null || bahasaInggris === null || ipa === null) {  
    console.log('Nilai Harap Diisi')
}else{
   
    let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa ) / 4
  
    
    if (rataRata >= 90 && rataRata <= 100) {
        console.log('Rata-rata = ' + rataRata + '\n' + 'Grade = A')
    }else if(rataRata >= 80 && rataRata <= 89){
        console.log('Rata-rata = ' + rataRata + '\n' + 'Grade = B')
    }else if(rataRata >= 70 && rataRata <= 79){
        console.log('Rata-rata = ' + rataRata + '\n' + 'Grade = C')
    }else if(rataRata >= 60 && rataRata <= 69){
        console.log('Rata-rata = ' + rataRata + '\n' + 'Grade = D')
    }else if(rataRata >= 0 && rataRata <= 59){
        console.log('Rata-rata = ' + rataRata + '\n' + 'Grade = E')
    }
}