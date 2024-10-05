// const student = {
//     name: 'John Doe',
//     age: 20,
//     grades: [90, 85, 95],
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         zip: '12345'

//     },
//     "phone number": "123-456-7890",
//     "phone number 2": "987-654-3210",
//     "phone number 3": "555-555-5555",
//     "phone number 4": "123-456-7890",

// }
// console.log(student);

//for loop
// for (let i = 1; i <= 10; i++) {
//     console.log('hello world');
// }
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i
// }
// console.log(sum);

//while loop


// let i = 1
// while (i <= 5) {
//     console.log(i);
//     i++

// }

// let i = 20

// do {

//     console.log('Helo World');
//     i++

// } while (i <= 10)


//for of loop

// let srt = 'Anaintay'
// let size = 0
// for (let i of srt) {
//     console.log('i =', i)
//     size++
// }
// console.log(size);

// for in loop

// const student = {
//     name: 'John Doe',
//     age: 20,
//     grades: [90, 85, 95],
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         zip: '12345'

//     },
//     "phone number": "123-456-7890",
//     "phone number 2": "987-654-3210",
//     "phone number 3": "555-555-5555",
//     "phone number 4": "123-456-7890",

// }

// for (let key in student) {
//     console.log(key, student[key]);
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 !== 0) {
//         console.log(i);
//     }
// }


// let gameNumber = 25
// let userNumber = prompt('guess the game num')
// while (gameNumber != userNumber) {
//     userNumber = prompt('you entered wrong number guess the game num again')

// }
// console.log('Congratess you done');


// let gameNumber = 25;
// let userNumber = prompt('Guess the game number');

// if (userNumber != gameNumber) {
//     userNumber = prompt('Wrong guess! Try again:');

//     if (userNumber != gameNumber) {
//         userNumber = prompt('Wrong again! Try one last time:');

//         if (userNumber != gameNumber) {
//             console.log('Sorry, you did not guess the correct number.');
//         } else {
//             console.log('Congratulations, you guessed it right!');
//         }
//     } else {
//         console.log('Congratulations, you guessed it right!');
//     }
// } else {
//     console.log('Congratulations, you guessed it right!');
// }

// console.log(userNumber.length
// );


// let fullName = prompt("Enter your name without spaces")
// let userName = '@' + fullName.toLowerCase() + fullName.length
// console.log(userName);


// array in js

// let marks = [253, 34, 45, 57, 78, 434]
// // console.log(typeof marks);

// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

// let marks = [253, 34, 45, 57, 78, 434]

// let sum = 0

// for (let val of marks) {
//     sum += val
// }
// let avg = sum / marks.length
// console.log(avg);

// let items = [250, 300, 450, 500, 700, 900]
// let index = 0

// for (let val of items) {
//     console.log(`index of  ${index} = ${val} `);
//     let ofer = val / 10
//     items[index] = items[index] - ofer
//     console.log(`value after offer = ${items[index]} `);
//     index++

// }
// console.log(items);


// function 


// function myFunction(msg) {
//     console.log('wellcome', msg);

// }
// myFunction('Hasnain')
function myFunction(x, y) {
    sum = x + y
    return sum
    // console.log('wellcome', msg);

}
let result = myFunction(5, 7)
console.log(result);
