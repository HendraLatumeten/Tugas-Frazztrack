let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"

}

//Soal A Spread Operator
let updateData = 
    {
    id: 1,
    name: "Hendra",
    username: "hendra",
    hobby : ['making music', 'play football', 'wacthing movie'],
    email: "latumetenhendra@gmail.com",
    address: {
        street: "Kranngan Kulon",
        suite: "Rmh. No.42",
        city: "Kota Bekasi",
        zipcode: "92998-3874"
    },
    phone: "0822-6117-29xx",
    website: "hendralatumeten.github.io"
}

let newName = [...data.name] = [...updateData.name].join('')
let newEmail = [...data.name] = [...updateData.email].join('')
let newHoby = [...data.name] = [...updateData.hobby].join('')
let dataBaru = newName + '\n' + newEmail + '\n'  + newHoby
console.log(dataBaru)


//Soal B  destructuring
let {street, city} = updateData.address;
console.log(street +'\n'+city)
 
    