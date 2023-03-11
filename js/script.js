const firstNum = document.getElementById('firstNum')
const secondNum = document.getElementById('secondNum')
const mathButton = document.getElementById('mathButton')
const calcButton = document.getElementById('calcButton')
const logText = document.getElementById('logText')
let operation

function plus(a,b) {
   return a + b
}

function minus(a,b) {
   return a - b
}

function multiply(a,b) {
   return a * b
}

function divide(a,b) {
   return a / b
}

function more(a,b) {
   return a > b
}

function less(a,b) {
   return a < b
}

function equals(a,b) {
   return a == b
}

function moreEquals(a,b) {
   return a >= b
}

function lessEquals(a,b) {
   return a <= b
}

function switcher(firstNum, secondNum) {
   if (operation == '+') {
      return firstNum+secondNum
   }
   if (operation == '-') {
      return firstNum-secondNum
   }
   if (operation == '*') {
      return firstNum*secondNum
   }
   if (operation == '/') {
      return firstNum/secondNum
   }
   if (operation == '>') {
      return firstNum>secondNum
   }
   if (operation == '<') {
      return firstNum<secondNum
   }
   if (operation == '==') {
      return firstNum==secondNum
   }
   if (operation == '>=') {
      return firstNum>=secondNum
   }
   if (operation == '<=') {
      return firstNum<=secondNum
   }
}

let result = calcButton.addEventListener('click', switcher(firstNum, secondNum))

