let member = [
    { name: `bo`, age: 50 },
    { name: 'me', age: 48 },
    { name: `truong`, age: 19 },
    { name: `my`, age: 19 },
    { name: `loc`, age: 24 },
    { name: `an`, age: 23 }
]
let filter = member.filter((item, index) => {

    return item.age > 18
})
console.log(filter)