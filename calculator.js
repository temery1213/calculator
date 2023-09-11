// initial sum, product, quotient values //

let sum = 0;
let difference = 0;
let product = 0;
let quotient = 0;

// addition //

function addition(num1, num2){
    sum = (num1 + num2);
    return sum;
};

// subtraction //

function subtraction(num1, num2){
    difference = (num1 - num2);
    return difference;
};

// multiplication //

function multiplication(num1, num2){
    product = (num1 * num2);
    return product;
};

// division //

function division(num1, num2){
    quotient = (num1 / num2);
    return quotient;
};

// Get references to the number buttons and the container
const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const numadd = document.getElementById("numadd");

const flextopcontainer = document.getElementById("flextopcontainer");
let numA = "";
let numB = "";
let operator = "";

// calculate // 

function calculate() {
    const operand1 = parseFloat(numA);
    const operand2 = parseFloat(numB);
  
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        return operand1 / operand2;
      default:
        return NaN; // Invalid operator
    }
  }

// Add event listeners for each number button
num0.addEventListener("click", function () {
  flextopcontainer.textContent += "0";
  numB += "0";
  console.log(numB);
});


num1.addEventListener("click", function () {
    flextopcontainer.textContent += "1";
    numB += "1";
    console.log(numB);
  });

num2.addEventListener("click", function () {
    flextopcontainer.textContent += "2";
    numB += "2";
    console.log(numB);
  });

num3.addEventListener("click", function () {
    flextopcontainer.textContent += "3";
    numB += "3";
    console.log(numB);
  });

num4.addEventListener("click", function () {
    flextopcontainer.textContent += "4";
    numB += "4";
    console.log(numB);
  });

num5.addEventListener("click", function () {
    flextopcontainer.textContent += "5";
    numB += "5";
    console.log(numB);
  });

num6.addEventListener("click", function () {
    flextopcontainer.textContent += "6";
    numB += "6";
    console.log(numB);
  });

num7.addEventListener("click", function () {
    flextopcontainer.textContent += "7";
    numB += "7";
    console.log(numB);
  });

num8.addEventListener("click", function () {
    flextopcontainer.textContent += "8";
    numB += "8";
    console.log(numB);
  });

num9.addEventListener("click", function () {
    flextopcontainer.textContent += "9";
    numB += "9";
    console.log("numb", numB);
    console.log("numa", numA);
  });
  
numadd.addEventListener("click", function () {
    if (numA !== "" && numB !== "") {
        numA = calculate(); // Perform previous calculation
        numB = "";
      } else {
        numA = flextopcontainer.textContent; // Store the first number
      }
      
      operator = "+";
      flextopcontainer.textContent = "";
    });




    numequals.addEventListener("click", function () {
        // Check if numA, numB, and the operator are all valid
        if (numA !== "" && numB !== "" && operator !== "") {
            numA = calculate(); // Perform the calculation
            numB = "";
            operator = "";
            flextopcontainer.textContent = numA.toString(); // Display the result
        }
    });

    clear.addEventListener("click", function(){
        flextopcontainer.textContent = "";
        numA = "";
        numB = "";
    });