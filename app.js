//1. What is Es6 & why we should use it?

//2. let
//  -- Redeclare kora jabena.
//  -- Declare korar age define kora jabena
//  -- Block scope feature

// let x = 10

// {
//   let x = 2
//   console.log('Inside block', x)
// }
// console.log('Outside block', x)

//3. const
// -- cannot reassign
// -- has other features of let
// const age = 45
// age = 56
// console.log(age)

//4. Template Literal
// let name = 'Nazrul'
// let message = 'How are you?'
// Old way
// let fullMessage = 'Hello ' + name + ', ' + message
// let fullMessage = `Hi, ${9 + 9}, ${message}`

// console.log(fullMessage)
//5. Arrow Function
// function sum(a, b) {
//   let result = a + b
//   return result
// }
// const result = sum(10, 15)
// console.log(result)

// const sum = (a, b, c) => {
//   let sum1 = a + b
//   let sum2 = a + c

//   return sum2
// }
// const result = sum(10, 21, 34)
// console.log(result)

//6. Array Destructuring
// let myVehicles = ['Toyota', 'Yamaha bike']

// const [bike, car] = myVehicles

// console.log(bike)

//7. Spread Operator

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// console.log(...arr1, ...arr2)

//8. The For/Of Loop
// const numbers = [1, 2, 3, 4, 5, 6, 7]
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// for (let number of numbers) {
//   console.log(number)
// }

//9. Default Parameter Values
// function welcomeMessage(name = 'Hero') {
//   let message = `Hi ${name}, welcome to this session!`
//   console.log(message)
// }
// welcomeMessage('Khalil')

//10. Map, filter, find
// const myArr = ['Naymur', 'Alamin', 'Niloy']
// let myNewArr = []
// for (let number of myArr) {
//   let tripled = number * 3
//   myNewArr.push(tripled)
// }

// console.log(myNewArr)

// const tripledArr = myArr.map(name => `Hello ${name}, How are you?`)
// console.log(tripledArr)

// const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 82, 63, 98]
// let filteredArr = []

// for (number of newArr) {
//   if (number % 2 == 0) {
//     filteredArr.push(number)
//   }
// }
// console.log(filteredArr)

// const filteredArr = newArr.filter(number => number % 2 != 0)

// console.log(filteredArr)

// const newArr = ['Faysal', 'Arfan', 'Meraj', 'Tanim']

// const found = newArr.filter(name => name.length % 2 != 0)
// console.log(...found)

// Spread operator with objects

// const phone = {
//   brand: 'Walton',
//   color: 'Red',
// }

// const phoneExtra = {
//   Camera: '500 mp',
//   battery: '20000mah',
// }

// const fullPhoneDetails = { ...phone, ...phoneExtra }
// console.log(fullPhoneDetails)
// let x = 20
// {
//   // Area 51
//   let x = 5
//   console.log(x)
// }

// const numbers = {}

// console.log(numbers.second.new)

//5. Arrow Function
// function sum(a, b) {
//   let result = a + b
//   return result
// }
// const result = sum(10, 15)
// console.log(result)

// const myArrowFunc = (a, b) => a + b
// const newResult = myArrowFunc(34, 90)
// console.log(newResult)
