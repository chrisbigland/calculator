//VARIABLES
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const screen = document.querySelector("#screen");
const equals = document.querySelector("#equals");
const onButton = document.querySelector("#on-button");
const errorWarning = document.querySelector("#char-error");

let firstNumber = "";
let oper = "";
let secondNumber = "";
let storedNumberArr = [];
let numberArr = [];

onButton.addEventListener("click", () => {
  screen.innerText = "0";
  numberArr = [];
  storedNumberArr = [];
  errorWarning.hidden = true;
});

numberButtons.forEach((number) => {
  number.addEventListener("click", (e) => {
    numberArr.push(e.target.innerText);
    if (numberArr.length > 7) {
      screen.style.fontSize = "2em";
    }
    if (numberArr.length > 14) {
      screen.style.fontSize = "1em";
    }
    if (numberArr.length <= 7) {
      screen.style.fontSize = "4em";
    }
    console.log(numberArr);
    if (numberArr.length <= 28) {
      screen.innerText = numberArr.join("");
    } else {
      errorWarning.hidden = false;
    }
    firstNumber = parseFloat(screen.innerText);
    console.log(`entering new number storedNumberArr is: ${storedNumberArr}`);
    console.log(
      "first number is: " +
        firstNumber +
        " type: " +
        typeof firstNumber +
        " and second number is: " +
        secondNumber +
        " type: " +
        typeof secondNumber
    );
  });
});

//OPERATOR EVENT LISTENER + / X -
operatorButtons.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    numberArr = [];
    oper = e.target.innerText;
    secondNumber = firstNumber;
    if (storedNumberArr.length === 0) {
      storedNumberArr.push(secondNumber);
    }
    console.log(`clicking operator storedNumberArr is: ${storedNumberArr}`);
    firstNumber = "";
    console.log(
      "first number is: " +
        firstNumber +
        " type: " +
        typeof firstNumber +
        " second number is: " +
        secondNumber +
        " type: " +
        typeof secondNumber
    );
    return oper;
  });
});

//FUNCTIONS
//OPERATOR FUNCTIONS
// const plusOperator = (a, b) => parseFloat(a) + parseFloat(b);

// const minusOperator = (a, b) => parseFloat(a) - parseFloat(b);

// const timesOperator = (a, b) => parseFloat(a) * parseFloat(b);

// const divideOperator = (a, b) => parseFloat(a) / parseFloat(b);

//EQUALS CLICK EVENT LISTENER
equals.addEventListener("click", (e) => {

  if (storedNumberArr.length >= 1) {
    calculate();
  }
});

// //CALCULATION
const calculate = () => {
  storedNumberArr.push(firstNumber);
  console.log(`pressing equals storedNumberArr is: ${storedNumberArr}`);
  console.log(oper);
  if (oper === "+") {
    let addition = 0;
    for (let i = 0; i < storedNumberArr.length; i++) {
      addition += storedNumberArr[i];
    }
    console.log("sum of these values is: " + addition);
    screen.innerText = addition;
    storedNumberArr = [];
    firstNumber = 0;
    secondNumber = 0;
    storedNumberArr.push(addition);
    return storedNumberArr;
  } else if (oper === "-") {
    let subtraction = storedNumberArr.reduce(
      (numberPlaceHolder1, numberPlaceHolder2) =>
        numberPlaceHolder1 - numberPlaceHolder2
    );
    console.log(`subtraction value is currently: ${subtraction}}`);
    screen.innerText = subtraction;
    storedNumberArr = [];
    firstNumber = 0;
    secondNumber = 0;
    storedNumberArr.push(subtraction);
    return storedNumberArr; 
  } else if (oper === "x") {
    let multiplication = storedNumberArr.reduce(
      (numberPlaceHolder1, numberPlaceHolder2) =>
        numberPlaceHolder1 * numberPlaceHolder2
    );

    console.log(`multiplication value is currently: ${multiplication}`);
    screen.innerText = multiplication;
    storedNumberArr = [];
    console.log(
      `clearing array storedNumberArr is currently ${storedNumberArr}`
    );
    storedNumberArr.push(multiplication);
    console.log(
      `after .push to add multiplication result, storedNumberArr is currently ${storedNumberArr}`
    );

    return storedNumberArr; 
  } else {
    let division = storedNumberArr.reduce(
      (numberPlaceHolder1, numberPlaceHolder2) =>
        numberPlaceHolder1 / numberPlaceHolder2
    );
    console.log(`division value is currently: ${division}`);
    {
      screen.innerText = division;
      storedNumberArr = [];
      firstNumber = 0;
      secondNumber = 0;
      storedNumberArr.push(division);
      return storedNumberArr;
    }
  }
};

// REMAINING ACTIONS
// make the calculator only use the last operand entered. E.g. currently it won't work if clicking + then changing mind and hitting -
// 63 + 1 = 64 press equals again and then 3 and it says '13' on screen - fix this. 

//  const numberVariablesForLoop = () => {

//     for (let i = 1; i < storedNumberArr.length; i++) {
//         console.log(`for loop stored number Array ${storedNumberArr[i]}`);
//     }
// }

// store all of the numbers into an array and loop them to perform the calculation. for the subtotal, use a for loop but only start it on index 1 (second number)
//FOR LOOP - for each click of the operator button, starting on the second click, of the array, add
//simpler?? the result of the calculation gets subtotalled in a variable and that gets added when equals is pressed

// if it is the second time that a number is entered, perform the calculation function and save the answer of that in a vari
