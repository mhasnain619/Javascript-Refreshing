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
// function myFunction(x, y) {
//     sum = x + y
//     return sum
//     // console.log('wellcome', msg);

// }
// let result = myFunction(5, 7)
// console.log(result);


// arrow function

// const sum = (a, b) => {
//     s = a + b
//     return s
// }
// let val = sum(5, 7)
// console.log(val);

// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     console.log(count);

// }
// countVowels('hasnain')

// const countVowels = (str) => {
//     let count = 0;
//     for (let char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     console.log(count);

// }
// countVowels('aeiou')


// const arr = [1, 2, 3, 4, 5]

// const outputarray = arr.reduce((res, cur) => {
//     return res + cur
// })
// console.log(outputarray);


// const arr = [1, 2, 3, 4, 5]

// const outputarray = arr.reduce((res, cur) => {
//     return res > cur ? res : cur
// })
// console.log(outputarray);


// const marks = [90, 20, 95, 40, 80]

// const outputarray = marks.filter((val) => {
//     return val >= 90
// })
// console.log(outputarray);


// let userNum = prompt('Inter a number')
// let arr = []
// for (let i = 1; i <= userNum; i++) {
//     arr[i - 1] = i
// }
// let newArray = arr.reduce((prev, curr) => {
//     return prev * curr
// })
// console.log(newArray);
// document.write(newArray)

// console.log(window);

// let mydiv = document.querySelector('div')
// console.dir(mydiv)

// let heading = document.querySelector('h1')
// button.addEventListener('click', function () {
//     heading.textContent = 'Hello World'
// })

// console.dir(button);

// let heading = document.querySelector('h1')
// let button = document.querySelector('button')
// button.addEventListener('click', function () {
//     heading.append = 'Hello World'
// })

// console.dir(button);

// let heading = document.querySelector('h1')
// console.log(heading.innerText);

// heading.innerText = heading.innerText + ' From anaintay'

// let boxes = document.querySelectorAll('.box')
// let ind = 0
// for (let box of boxes) {
//     box.style.background = 'red'
//     box.innerText = `new text from this ${ind}`
//     ind++
//     // console.log(box.innerText);

// }
// // boxes[0].innerText = 'hello world from div 1'
// // boxes[1].innerText = 'hello world from div 2'
// // boxes[2].innerText = 'hello world from div 3'
// console.dir(boxes);

// let boxes = document.querySelector('p')
// console.log(boxes.getAttribute('class'));

// let button = document.querySelector('button')

// let boxes = document.querySelector('.box')
// button.addEventListener('click', function () {
//     boxes.style.backgroundColor = 'pink'
// })

const content = document.getElementById('content');
const loader = document.getElementById('loader');

let counter = 1

function loaadMore() {
    setTimeout(() => {
        for (let index = 0; index < 10; index++) {
            const newItem = document.createElement('div')
            newItem.classList.add('item')
            newItem.innerText = `item ${counter++}`
            content.appendChild(newItem)
        }
        loader.style.display = 'none'
    }, 1000)
}


loaadMore()

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 10) {
        loader.style.display = 'block';
        loaadMore()

    }
})



// Function to simulate fetching data
// let counter = 1;
// function loadMoreItems() {
//     // Simulate an API call
//     setTimeout(() => {
//         for (let i = 0; i < 10; i++) {
//             const newItem = document.createElement('div');
//             newItem.classList.add('item');
//             newItem.textContent = `Item ${counter++}`;
//             content.appendChild(newItem);
//         }
//         loader.style.display = 'none';
//     }, 1000);
// }

// // Initial loading of items
// loadMoreItems();

// // Infinite Scroll functionality
// window.addEventListener('scroll', () => {
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//     if (scrollTop + clientHeight >= scrollHeight - 5) {
//         // Show the loader
//         loader.style.display = 'block';

//         // Load more items
//         loadMoreItems();
//     }
// });

