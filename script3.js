//script 3 - attempting to do multiple sums e.g. 3 + 4 + 5 .... ensure to add solution to script2
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
// const createNumberVariables 
let numberArr = [];


onButton.addEventListener('click', () => {
    screen.innerText = ("0");
    numberArr = [];
    storedNumberArr = [];
})

//adds numbers to an array every time button is pressed
numberButtons.forEach(number => {
    number.addEventListener("click", (e) => {
        numberArr.push(e.target.innerText) // need to add the number to an array
        console.log(numberArr);
        screen.innerText = numberArr.join(""); // removing commas and displaying on screen
        // console.log(typeof numberArr)
        // console.log("this should show what's on the screen: " + screen.innerText);
        firstNumber = parseFloat(screen.innerText); 
        // console.log(typeof storedNumberArr)
        console.log(`storedNumberArr is: ${storedNumberArr}`);
        console.log("first number is: " + firstNumber + " type: " + typeof firstNumber + " and second number is: " + secondNumber + " type: " + typeof secondNumber)  // firstNumber variable now set
        // if (storedNumberArr > ) if statement here? If stored number array has more than 2 items, perform the calculation function? Then could display on screen?
    })
})


// when I press an operator, save the number on the screen to a variable


//OPERATOR EVENT LISTENER + / X -
operatorButtons.forEach(operator => {          // when every operator button is clicked, updating 'oper' variable to the operation e.g. times
    operator.addEventListener('click', (e) => {
        ///TURN THIS INTO A FOR LOOP? every time button clicked (starting second time), calculation occurs and number displayed on screen. Create it separately as a variable and add in here?
        numberArr = [];         // when clicking on oper, array clears
        oper = e.target.innerText; // oper variable gets set to either +, - , x, or /   
        console.log(`storedNumberArr is: ${storedNumberArr}`); 
        // console.log("operator is " + oper);//checking it works
        secondNumber = firstNumber;             // second number becomes equal to first number
        storedNumberArr.push(secondNumber);  // secondNumber gets added to storedNumberArr
        firstNumber = "";                       // first number is set to empty string
        console.log("first number is: " + firstNumber + " type: " + typeof firstNumber + " second number is: " + secondNumber + " type: " + typeof secondNumber)
        // screen.innerText = oper;
        // numberVariablesForLoop();
        return oper;                            // returning the clicked operator
    })
})

//FUNCTIONS
//OPERATOR FUNCTIONS
const plusOperator = (a, b) => parseFloat(a) + parseFloat(b); // turning the string parameters into numbers - shorthand everything after arrow is assumed to be returned - can do this was was previously just one line return
//for loop here +=

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
    storedNumberArr.push(firstNumber);
    console.log(storedNumberArr);
    console.log(oper)
    if (oper === "+") {
            let addition = 0;
            for (let i = 0; i < storedNumberArr.length; i++) {
                addition += storedNumberArr[i];
        }
        console.log("sum of these values is: " + addition)
        screen.innerText = addition;
        return addition
    }
        
        // const sum = plusOperator(secondNumber, firstNumber) //put second number as first parameter as secondNumber has actually become the first number we entered and moved
        // console.log(typeof sum);
        // const sumStr = sum.toString();
        // console.log(typeof sumStr);
        // screen.innerText = sumStr;
        // numberArr = [];
        // return sumStr; // return sum instead so can be used in new calculation?                                     // WORKING
    // else if (oper === "-") {
    //     let subtraction = storedNumberArr[0];
    //     // console.log(`subtraction value is currently: ${subtraction}`)
    //     for (let i = 0; i < storedNumberArr.length; i++) {
    //         subtraction = subtraction - storedNumberArr[i];
    //     }
    //     console.log("subtraction of these values is: " + subtraction)
    //     screen.innerText = subtraction;
    // }
    
    else if (oper === "-") {
        let subtraction = storedNumberArr.reduce((numberPlaceHolder1, numberPlaceHolder2) => numberPlaceHolder1 - numberPlaceHolder2);
            console.log(`subtraction value is currently: ${subtraction}}`)
            screen.innerText = subtraction;
            return subtraction    ;                        // WORKING
    } 



    else if (oper === "x") {
        let multiplication = storedNumberArr.reduce((numberPlaceHolder1, numberPlaceHolder2) => numberPlaceHolder1 * numberPlaceHolder2);

        console.log(`multiplication value is currently: ${multiplication}}`);
        screen.innerText = multiplication;
        return multiplication;                      // WORKING
    } 

    // else {
        let division = storedNumberArr.reduce((numberPlaceHolder1, numberPlaceHolder2) => numberPlaceHolder1 / numberPlaceHolder2);
        console.log(`division value is currently: ${division}}`);
        screen.innerText = division;
                                                    // WORKING
};

        // REMAINING ACTIONS
    // make additions of multiple numbers work e.g. 5 + 9 + 10 = 24
    // for the above - could we add the typed numbers into an array and we can fetch the items when needed?
    // for the above - for the calculation, we could loop through the array to do this?


    // make decimal point work - don't let it be possible to type in two. 
    // make screen responsive to size when number gets too large e.g. lots of decimal places (use 'auto' size for this?)
    // change the name of the first and second number variables to make them make more sense
    // make the calculator only use the last operand entered. E.g. currently it won't work if clicking + then changing mind and hitting -
    // need to be able to perform operation on screen value after calculation
    // if equals is pressed and nothing on screen - don't do anything


    
    //  const numberVariablesForLoop = () => {

    //     for (let i = 1; i < storedNumberArr.length; i++) {
    //         console.log(`for loop stored number Array ${storedNumberArr[i]}`);
    //     }
    // }


// store all of the numbers into an array and loop them to perform the calculation. for the subtotal, use a for loop but only start it on index 1 (second number)
//FOR LOOP - for each click of the operator button, starting on the second click, of the array, add 
    //simpler?? the result of the calculation gets subtotalled in a variable and that gets added when equals is pressed

    // if it is the second time that a number is entered, perform the calculation function and save the answer of that in a variable