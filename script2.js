const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll(".operator-button");
const screen = document.querySelector("#screen");
const equals = document.querySelector('#equals');

console.log(numberButtons);

// const getNumberPressed = () => {

// }

let firstNumber = "";
let oper = "";
let secondNumber = "";

// const updateDisplay = (number) => {
//     screen.innerText = number;
// }


// added for 
//creating a for each to loop through the node list 
numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
        // console.log(e.target.innerText);
        firstNumber = e.target.innerText;   // updating the variable to what is clicked
        console.log(firstNumber);  //checking it works
        screen.innerText = firstNumber;      
        // updateDisplay(initialNumber);
    })
})

operatorButtons.forEach(operator => {          // when every operator button is clicked, updating 'oper' variable to the operation e.g. times
    operator.addEventListener("click", (e) => {
        oper = e.target.innerText;              //checking it works
        console.log(oper);
        // number.removeEventListener()
    })
})

// equals.addEventListener("click", (e) => {
//     e.target.innerText = secondNumber; 
//     console.log(secondNumber)
//     });


// when pressing equals - set second variable and perform calculation??



// if oper has a value then run second Number forEach (save forEaches as variable method?)
// if oper has a value then stop the first event listener?
// if (oper != "") {

//     numberButtons.forEach(number => {
//     number.addEventListener('click', (e) => {
//         secondNumber = e.target.innerText;   // updating the variable to what is clicked
//         console.log(secondNumber);  //checking it works
//         screen.innerText = secondNumber;      
//     })
// })
// }



// then could do if secondNumber has a value


// forEach for storing second number variable. 
// numberButtons.forEach(number => {
//     number.addEventListener('click', (e) => {
//         secondNumber = e.target.innerText;   // updating the variable to what is clicked
//         console.log(secondNumber);  //checking it works
//         screen.innerText = secondNumber;      
//     })
// })


// //calculation function
// const calculate = (num1, num2, operator) => {
//     console.log(num1);
// }


// equals.addEventListener('click', () => {
//     calculate(firstNumber)
// });
