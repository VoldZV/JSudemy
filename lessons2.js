// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options.name);

// delete options.name;

// console.log(options)

// for (let key in options) {
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
// }


// const arr = [1,2,3,6,8]

// arr.pop()

// console.log(arr)

// arr.push(15)

// console.log(arr)

// for (let key of arr) {
//     console.log(key)
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// })

const str = prompt ('','');
const products = str.split(', ')
console.log(products)
console.log(products.join(' РАЗДЕЛИТЕЛЬ '))

// Мутации объекта. 

//Избегание мутаций: можно использовать цикл для копирования
//Избегание мутаций. Object.assign

const person = {
    name: 'Vladimir',
    age: 'Zvyagin'
};

const person2 = Object.assign({},person)

const person3 = person

person3.name = 'Nikolay' // изменен объект

console.log(person) // объект мутировался из-за изменения person3.name
console.log(person2) // объект не мутировался
console.log(person3)

//Избегание мутаций. Оператор "..." - spread (разделение объекта на свойства)

const person = {
    name: 'Vladimir',
    age: 'Zvyagin'
};

const person2 = {...person}

const person3 = person

person3.name = 'Nikolay' // изменен объект

console.log(person) // объект мутировался из-за изменения person3.name
console.log(person2) // объект не мутировался
console.log(person3)

//Избегание мутаций. JSON.parse и JSON.stringify

const person = {
    name: 'Vladimir',
    age: 'Zvyagin',
    residence: {
        country: 'Russia',
        town: 'Ramenskoye'
    }
};

const person2 = JSON.parse(JSON.stringify(person)) // позволяет избежать мутации вложенного объекта при копировании

person2.residence.town = 'Moscow'

console.log(person.residence.town) // мутация вложенного объекта не произошла
console.log(person2.residence.town)




