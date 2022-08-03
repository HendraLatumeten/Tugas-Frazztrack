const biodata = {
    name: "Hendra Latumeten",
    age: 25,
    hobbies: ['making music', 'play football', 'wacthing movie'],
    isMarried: false,
    schoolList: [{
            name: 'SDN 74 AMBON',
            yearIn: 2003,
            yearOut: 2003,
            major: null
        },
        {
            name: 'SMPN 10 AMBON',
            yearIn: 2009,
            yearOut: 2012,
            major: null
        },
        {
            name: 'SMKN 7 AMBON',
            yearIn: 2012,
            yearOut: 2015,
            major: 'Teknik Komputer dan Jaringan'
        },
        {
            name: 'Universitas Pamulang',
            yearIn: 2015,
            yearOut: 2021,
            major: 'Teknik Informatika'
        }
    ],
    skills: [{
        skillName: 'Programmer',
        level: 'advanced',
    },
    {
        skillName: 'making music',
        level: 'advanced'
    }
],
    interestInCoding: true
}
console.log(biodata);