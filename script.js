// //JS ideas 
// // each number pressed will add on to the end of the number on the screen 
// // when making the calculations - I believe the screen value will be a string - might need to change it to a number to perform the calculation?
// // need to create a function to clear the text from the screen when 
// // need to create a variable that logs the number in the screen when an operator button is clicked. 
// // const firstNumber = 
// // how do I log the second number after the operator button pressed?

// //could create displayValue function that we can invoke to ensure that the screen is always updated. 

// //VARIABLES
// const onButton = document.getElementById("on-button");
// const screen = document.getElementById("screen");
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");
// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const divide = document.getElementById("divide");
// const times = document.getElementById("times");
// const point = document.getElementById("point");
// const equals = document.getElementById("equals");








// //FUNCTIONS
// // need to include an if statement here to clear any value if there is something there and set to zero. 

// const handleOnButton = () => {
//     screen.innerText = "0";
// }

// //NUMBER FUNCTIONS
// // maybe change these so they just add to whatever numbers are already on the screen. 

// const handleZero = () => {
//     screen.innerText = "0";
// }

// const handleOne = () => {
//     // screen.innerText = String(screen.value) + "1";
//     screen.innerText = "1";
// }

// const handleTwo = () => {
//     screen.innerText = "2";
// }

// const handleThree = () => {
//     screen.innerText = "3";
// }

// const handleFour = () => {
//     screen.innerText = "4";
// }

// const handleFive = () => {
//     screen.innerText = "5";
// }

// const handleSix = () => {
//     screen.innerText = "6";
// }

// const handleSeven = () => {
//     screen.innerText = "7";
// }

// const handleEight = () => {
//     screen.innerText = "8";
// }

// const handleNine = () => {
//     screen.innerText = "9";
// }

// // CALCULATION FUNCTIONS
// // const handlePlus = () => {
// //     //turn screen value into number then plus it then return back as a string?
// //     // screen.value 
// // }

// // console.log(screen.value)


// //entering a number on the screen.  
// //get the value from the screen so that I can add to the value to display number we're entering




// // CHANGES - perhaps instead of having lots of functions I just have one update display function
// //potential update display function

// // const updateDisplay = () => {
// //     const screen.value = 

//     // I want to set the value in the screen to the value inside the string on the screen when clicking an operator button. 
// // }


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
