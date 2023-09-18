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
const numsubtract = document.getElementById("numsubtract");
const nummultiply = document.getElementById("nummultiply");
const numdivide = document.getElementById("numdivide");
const numequals = document.getElementById("numequals");
const clear = document.getElementById("clear");
const flextopcontainer = document.getElementById("flextopcontainer");
const backspace = document.getElementById("backspace");

let numA = "";
let numB = "";
let operator = "";
let operatorApplied = false;

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
          if (operand2 === 0) { // Corrected the syntax here
            return "Are you trying to break the universe?";
          } else {
            return operand1 / operand2;
          }
        default:
          return NaN; // Invalid operator
      }
  }
// update display //

function appendNumberToDisplay(number) {
  if (flextopcontainer.textContent === "0" || operatorApplied) {
      flextopcontainer.textContent = number;
      operatorApplied = false; // Reset operatorApplied flag
  } else {
      flextopcontainer.textContent += number;
  }
  numB += number;
}

// Add event listeners for each number button
num0.addEventListener("click", function () {
  appendNumberToDisplay("0");
 
});

num1.addEventListener("click", function () {
  appendNumberToDisplay("1");
  
});

num2.addEventListener("click", function () {
    appendNumberToDisplay("2");

   
  });

num3.addEventListener("click", function () {
    appendNumberToDisplay("3");
  });

num4.addEventListener("click", function () {
    appendNumberToDisplay("4");
  });

num5.addEventListener("click", function () {
    appendNumberToDisplay("5");
  });

num6.addEventListener("click", function () {
    appendNumberToDisplay("6");
  });

num7.addEventListener("click", function () {
    appendNumberToDisplay("7");
  });

num8.addEventListener("click", function () {
    appendNumberToDisplay("8");
  });

num9.addEventListener("click", function () {
    appendNumberToDisplay("9");
  });
  
  // add //

  numadd.addEventListener("click", function () {
    if (numA !== "" && numB !== "") {
        numA = calculate(); // Perform previous calculation
        operatorApplied = true; // Operator has been applied
    
      } else {
        numB = "";
        numA = flextopcontainer.textContent; // Store the first number
        operatorApplied = true; // Operator has been applied
    }

    operator = "+";

    
});

// subtract //

numsubtract.addEventListener("click", function () {
  if (numA !== "" && numB !== "") {
    numA = calculate(); // Perform previous calculation
    operatorApplied = true; // Operator has been applied

  } else {
    numB = "";
    numA = flextopcontainer.textContent; // Store the first number
    operatorApplied = true; // Operator has been applied
}
      
    operator = "-";
    
    flextopcontainer.textContent = numA;
});
// multiply //
nummultiply.addEventListener("click", function () {
  if (numA !== "" && numB !== "") {
    numA = calculate(); // Perform previous calculation
    operatorApplied = true; // Operator has been applied

  } else {
    numB = "";
    numA = flextopcontainer.textContent; // Store the first number
    operatorApplied = true; // Operator has been applied
}
          
    operator = "*";
            
    flextopcontainer.textContent = numA;
});  

// division //
numdivide.addEventListener("click", function () {
  if (numA !== "" && numB !== "") {
    numA = calculate(); // Perform previous calculation
    operatorApplied = true; // Operator has been applied

  } else {
    numB = "";
    numA = flextopcontainer.textContent; // Store the first number
    operatorApplied = true; // Operator has been applied
}
              
    operator = "/";
            
    flextopcontainer.textContent = numA;
});  


// equals //

numequals.addEventListener("click", function () {
        // Check if numA, numB, and the operator are all valid
    if (numA !== "" && numB !== "" && operator !== "") {
        numA = calculate(); // Perform the calculation
        numB = "";
        
        operator = "";
        
        flextopcontainer.textContent = numA; // Display the result
    }
    });

clear.addEventListener("click", function(){
        flextopcontainer.textContent = "";
        numA = "";
        numB = "";
    });

backspace.addEventListener("click", function(){
        numB = numB.toString().split("").slice(0, -1).join("");
        flextopcontainer.textContent = numB;
        console.log(numB);
        
});