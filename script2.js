// second script - works with double digits but needs to be able to do multiple sums
//VARIABLES
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const screen = document.querySelector("#screen");
const equals = document.querySelector("#equals");
const onButton = document.querySelector("#on-button");
let firstNumber = "";
let oper = "";
let secondNumber = "";
let storedNumberArr = [];
let numberArr = [];


onButton.addEventListener('click', () => {
    screen.innerText = ("0");
    numberArr = [];
    // storedNumberArr = [];
})

//adds numbers to an array every time button is pressed
numberButtons.forEach(number => {
    number.addEventListener("click", (e) => {
        numberArr.push(e.target.innerText) // need to add the number to an array
        console.log(numberArr);
        screen.innerText = numberArr.join(""); // removing commas and displaying on screen
        // console.log(typeof numberArr)
        // console.log("this should show what's on the screen: " + screen.innerText);
        firstNumber = screen.innerText;
        // console.log(typeof storedNumberArr)
        // console.log(`storedNumberArr is: ${storedNumberArr}`);
        console.log("first number is: " + firstNumber + " and second number is: " + secondNumber)  // firstNumber variable now set
    })
})


// when I press an operator, save the number on the screen to a variable



operatorButtons.forEach(operator => {          // when every operator button is clicked, updating 'oper' variable to the operation e.g. times
    operator.addEventListener('click', (e) => {
        numberArr = [];         // when clicking on oper, array clears
        oper = e.target.innerText;    
        // storedNumberArr.push(firstNumber);         
        // console.log(`storedNumberArr is: ${storedNumberArr}`); 
        // console.log("operator is " + oper);//checking it works
        secondNumber = firstNumber;             // second number equal to first number
        storedNumberArr.push(secondNumber);
        console.log(storedNumberArr);
        firstNumber = "";                       // first number set to empty string
        console.log("second number is: " + secondNumber + " and first number is: " + firstNumber)
        // screen.innerText = oper;
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


// //CALCULATION
const calculate = () => {
    if (oper === "+") {
        const sum = plusOperator(secondNumber, firstNumber) //put second number as first parameter as secondNumber has actually become the first number we entered and moved
        console.log(typeof sum);
        const sumStr = sum.toString();
        console.log(typeof sumStr);
        screen.innerText = sumStr;
        numberArr = [];
        return sumStr;                                      // WORKING
    } 
    else if (oper === "-") {
        const minus = minusOperator(secondNumber, firstNumber)
        console.log(minus);
        const minusStr = minus.toString();
        console.log(typeof minusStr);
        screen.innerText = minusStr;
        numberArr = [];
        return minusStr;                                    // WORKING
    } 
    else if (oper === "x") {
        const times = timesOperator(secondNumber, firstNumber)
        console.log(times);  
        const timesStr = times.toString();
        console.log(typeof timesStr);
        screen.innerText = timesStr;
        numberArr = [];
        return timesStr;                                    // WORKING
    } 
    else {
        const divide = divideOperator(secondNumber, firstNumber)
        console.log(divide);
        const divideStr = divide.toString();
        console.log(typeof divideStr);
        screen.innerText = divideStr;
        numberArr = [];
        return divideStr;                                    // WORKING
    }
};

    // REMAINING ACTIONS
    // make additions of multiple numbers work e.g. 5 + 9 + 10 = 24
    // for the above - could we add the typed numbers into an array and we can fetch the items when needed?
    // for the above - for the calculation, we could loop through the array to do this?


    // d
    // make screen responsive to size when number gets too large e.g. lots of decimal places (use 'auto' size for this?)
    // change the name of the first and second number variables to make them make more sense
    // make the calculator only use the last operand entered. E.g. currently it won't work if clicking + then changing mind and hitting -
    // need to be able to perform operation on screen value after calculation



    // const createNumberVariables = () => {
    //     const storedNumberArr = [];   maybe don't need this part if declaring globally

    //     for (let i = 0; i < storedNumberArr.length; i++) {

    //     }
    // }


// store all of the numbers into an array and loop them to perform the calculation. for the subtotal, use a for loop but only start it on index 1 (second number)
    //simpler?? the result of the calculation gets subtotalled in a variable and that gets added when equals is pressed

    // if it is the second time that a number is entered, perform the calculation function and save the answer of that in a variable