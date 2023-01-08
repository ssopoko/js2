


// დავალება:
// 1. შექმენით 5 ელემენტიანი რიცვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;

// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.
// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):

// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა

// address - სტრინგების მასივი
// age - რიცხვითი მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი
// 4. console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)", 
// My age is (#3 დავალების age-ის მნიშვნელობა)", "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"

let myArr = [ 5, 7, 8, 9 ,1];
let sum = myArr[0] + myArr [2] + myArr [3] + myArr [4];
let average = sum / myArr.length;
console.log(average);

let array2 = [
    {
        name: 'lasha',
        age: 22
    },
    {
        name: "papuna",
        age: 14
    },
    {
        name: "luka",
        age: 5
    },
    {
        name: "maka",
        age: 16
    },
    {
        name: "gela",
        age: 7
    }
]

let aboutMe =  {
firstName: "sopiko",
lastName: "saralidze",

address: [ 'rustavi', 'georgia'],
age: 22,
phoneNumbers: [579898977, 675426736]
}

console.log(`My name is ${aboutMe.firstName}. My age is ${aboutMe.age}. My adress is ${aboutMe.address[0]}`);





