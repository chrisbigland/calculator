
//VARIABLES
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const screen = document.querySelector("#screen");
const equals = document.querySelector("#equals");
const onButton = document.querySelector("#on-button");

console.log(numberButtons);


let firstNumber = "";
let oper = "";
let secondNumber = "";

// const updateDisplay = (number) => {
//     screen.innerText = number;
// }

//CLEAR SCREEN
onButton.addEventListener('click', () => {
    screen.innerText = ("0");
})


// added for 
//creating a for each to loop through the node list 
numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
        // console.log(e.target.innerText);
        firstNumber = e.target.innerText;   // updating the variable to what is clicked
        console.log("first number is " + firstNumber);  //checking it works
        // if (firstNumber != "" || firstNumber > 0) {
        //     return 
        // }
        screen.innerText = firstNumber;     
        return firstNumber; 
        // updateDisplay(initialNumber);
    })
})

operatorButtons.forEach(operator => {          // when every operator button is clicked, updating 'oper' variable to the operation e.g. times
    operator.addEventListener('click', (e) => {
        oper = e.target.innerText;              //checking it works
        console.log("operator is " + oper);
        secondNumber = firstNumber;             // second number equal to first number
        firstNumber = "";                       // first number set to empty string
        console.log("second number is: " + secondNumber + " and first number is: " + firstNumber)
        return oper;                            // returning the clicked operator
    })
})

//FUNCTIONS
//OPERATOR FUNCTIONS
const plusOperator = (a, b) => parseFloat(a) + parseFloat(b); // turning the string parameters into numbers - shorthand everything after arrow is assumed to be returned - can do this was was previously just one line return

const minusOperator = (a, b) => parseFloat(a) - parseFloat(b);                    

const timesOperator = (a, b) => parseFloat(a) * parseFloat(b);

const divideOperator = (a, b) => parseFloat(a) / parseFloat(b);


//EQUALS CLICK EVENT LISTENER
equals.addEventListener('click', (e) => {
    // secondNumber = screen.innerText; // secondNumber set to what's on screen when hitting equals - why did I not need the event passed through here?
    // console.log(`firstNumber: ${firstNumber}`, `secondNumber: ${secondNumber}`)

    calculate();
    // console.log();
    });

//creating variables to store the result of the calculation
// const sum = plusOperator(firstNumber, secondNumber)
// const minus = minusOperator(firstNumber, secondNumber)
// const times = timesOperator(firstNumber, secondNumber)
// const divide = divideOperator(firstNumber, secondNumber)


// //CALCULATION
    const calculate = () => {
        if (oper === "+") {
            const sum = plusOperator(secondNumber, firstNumber) //put second number as first parameter as secondNumber has actually become the first number we entered and moved
            console.log(typeof sum);
            const sumStr = sum.toString();
            console.log(typeof sumStr);
            screen.innerText = sumStr;
            return sumStr;                                      // WORKING
        } 
        else if (oper === "-") {
            const minus = minusOperator(secondNumber, firstNumber)
            console.log(minus);
            const minusStr = minus.toString();
            console.log(typeof minusStr);
            screen.innerText = minusStr;
            return minusStr;                                    // WORKING
        } 
        else if (oper === "x") {
            const times = timesOperator(secondNumber, firstNumber)
            console.log(times);  
            const timesStr = times.toString();
            console.log(typeof timesStr);
            screen.innerText = timesStr;
            return timesStr;                                    // WORKING
        } 
        else {
            const divide = divideOperator(secondNumber, firstNumber)
            console.log(divide);
            const divideStr = divide.toString();
            console.log(typeof divideStr);
            screen.innerText = divideStr;
            return divideStr;                                    // WORKING
        }
    };


    // REMAINING ACTIONS
    // make multiple digit numbers appear and calculations work
    // make additions of multiple numbers work e.g. 5 + 9 + 10 = 24
    // make decimal point work
    // make screen responsive to size when number gets too large e.g. lots of decimal places (use 'auto' size for this?)
    // change the name of the first and second number variables to make them make more sense



    //CLEAR SCREEN
    //when someone hits 'ON/AC' - screen should clear

    // screen.EventListener("click", (e) => {
    //     screen.innerText = "0";
    // });


// when pressing equals - set second variable and perform calculation??




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
// const calculate = (firstNumber, secondNumber, operator) => {
//     console.log(firstNumber);
//     console.log(operator)
//     console.log(secondNumber);
// }

// run this in something else - calculate();

// equals.addEventListener('click', () => {
//     calculate(firstNumber)
// });




////PREVIOUS NOTES


// //JS ideas 
// // each number pressed will add on to the end of the number on the screen 
// // when making the calculations - I believe the screen value will be a string - might need to change it to a number to perform the calculation?
// // need to create a function to clear the text from the screen when 
// // need to create a variable that logs the number in the screen when an operator button is clicked. 
// // const firstNumber = 
// // how do I log the second number after the operator button pressed?

// //could create displayValue function that we can invoke to ensure that the screen is always updated. 


// //FUNCTIONS
// // need to include an if statement here to clear any value if there is something there and set to zero. 



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
