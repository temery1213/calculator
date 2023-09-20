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
let decimalAdded = false;

// calculate // 

function calculate() {
  const operand1 = parseFloat(numA);
  const operand2 = parseFloat(numB);

  let result;

  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      if (operand2 === 0) {
        return "Are you trying to break the universe?";
      } else {
        result = operand1 / operand2;
      }
      break;
    default:
      return NaN; // Invalid operator
  }

  // Convert the result to a string and limit it to 15 characters
  const resultString = result.toString().slice(0, 15);

  return resultString;
}
// update display //
function appendNumberToDisplay(number) {
  // Check if a decimal point has been added
  if (number === "." && decimalAdded) {
    return; // Don't add another decimal point
  }
  if (flextopcontainer.textContent === "0" || operatorApplied) {
    flextopcontainer.textContent = number;
    operatorApplied = false; 
  } else {
    // Check if the displayed content will exceed 15 characters
    if (flextopcontainer.textContent.length >= 15) {
      return; // Don't add more characters
    }

    if (number === "." && decimalAdded) {
      return; 
    }
    
    flextopcontainer.textContent += number;
    
   
    if (number === ".") {
      decimalAdded = true;
    }
  }

  numB += number;
}


function resetDecimalFlag() {
  decimalAdded = false;
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

  // numbers key press //
  document.addEventListener("keyup", function (event) {
    const key = event.key;
  
    if (/[0-9]/.test(key)) {
      // If the pressed key is a number (0-9), append it to the display
      appendNumberToDisplay(key);
    } else if (key === "+") {
      event.preventDefault();
      numadd.click();
    } else if (key === "-") {
      numsubtract.click();
    } else if (key === "*") {
      nummultiply.click();
    } else if (key === "/") {
      numdivide.click();
    } else if (key === "Backspace") {
      backspace.click();
    } else if (key === "Delete") {
      clear.click();
    } else if (key === ".") {
      decimal.click();
    } else if (event.keyCode === 13) {
      // Check for "Enter" key using key code (13)
      event.preventDefault();
      numequals.click();
    }
  });
 
  // add //

  numadd.addEventListener("click", function () {
    if (numA !== "" && numB !== "") {
      numA = calculate();
      numB = "";
      flextopcontainer.textContent = numA;
    } else {
      numB = "";
      numA = flextopcontainer.textContent;
    }
    resetDecimalFlag();
    operator = "+";
    operatorApplied = true;
  });
// subtract //

numsubtract.addEventListener("click", function () {
  if (numA !== "" && numB !== "") {
    numA = calculate();
    numB = "";
    flextopcontainer.textContent = numA;
  } else {
    numB = "";
    numA = flextopcontainer.textContent;
  }
  resetDecimalFlag();
  operator = "-";
  operatorApplied = true;
});

// multiply //
nummultiply.addEventListener("click", function () {
  if (numA !== "" && numB !== "") {
    numA = calculate();
    numB = "";
    flextopcontainer.textContent = numA;
  } else {
    numB = "";
    numA = flextopcontainer.textContent;
  }
  resetDecimalFlag();
  operator = "*";
  operatorApplied = true;
});

// division //
numdivide.addEventListener("click", function () {
  if (numA !== "" && numB !== "") {
    numA = calculate();
    numB = "";
    flextopcontainer.textContent = numA;
  } else {
    numB = "";
    numA = flextopcontainer.textContent;
  }
  resetDecimalFlag();
  operator = "/";
  operatorApplied = true;
});



// equals //

numequals.addEventListener("click", function () {
        // Check if numA, numB, and the operator are all valid
    if (numA !== "" && numB !== "" && operator !== "") {
        numA = calculate(); 
        numB = "";

        resetDecimalFlag();
        operator = "";
        
        flextopcontainer.textContent = numA; 
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

decimal.addEventListener("click", function(){
        appendNumberToDisplay(".");
});