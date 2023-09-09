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
let numset = "";
let numA = "";
let numB = "";
// Add event listeners for each number button
num0.addEventListener("click", function () {
  flextopcontainer.textContent += "0";
  numset = flextopcontainer.textContent;
  console.log(numset);
});


num1.addEventListener("click", function () {
  flextopcontainer.textContent += "1";
  numset = flextopcontainer.textContent;
  console.log(numset);
});

num2.addEventListener("click", function () {
    flextopcontainer.textContent += "2";
    numset = flextopcontainer.textContent;
    console.log(numset);
  });

num3.addEventListener("click", function () {
    flextopcontainer.textContent += "3";
    numset = flextopcontainer.textContent;
    console.log(numset);
  });

num4.addEventListener("click", function () {
    flextopcontainer.textContent += "4";
    numset = flextopcontainer.textContent;
    console.log(numset);
  });

num5.addEventListener("click", function () {
    flextopcontainer.textContent += "5";
    numset = flextopcontainer.textContent;
    console.log(numset);
  });

num6.addEventListener("click", function () {
    flextopcontainer.textContent += "6";
    numset = flextopcontainer.textContent;
    console.log(numset);
  });

num7.addEventListener("click", function () {
    flextopcontainer.textContent += "7";
    numset = flextopcontainer.textContent;
    console.log(numset);
  });

num8.addEventListener("click", function () {
    flextopcontainer.textContent += "8";
    numset = flextopcontainer.textContent;
    console.log(numset);
  });

num9.addEventListener("click", function () {
    flextopcontainer.textContent += "9";
    numset = flextopcontainer.textContent;
    console.log(numset);
  });
  
numadd.addEventListener("click", function () {
    numset = flextopcontainer.textContent;
    numA = flextopcontainer.textContent;
    flextopcontainer.textContent += "";
   
  });