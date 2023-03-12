const calcButton = document.getElementById('calcButton')
const logText = document.getElementById('logText')
let operation

function calc() {
   let result

   let firstNum = Number(document.getElementById('firstNum').value)
   let secondNum = Number(document.getElementById('secondNum').value)

   switch (operation) {
      case '+':
         result = firstNum + secondNum;
         break;
      case '-':
         result = firstNum - secondNum;
         break;
      case '*':
         result = firstNum * secondNum;
         break;
      case '/':
         result = firstNum / secondNum;
         break;
      case '>':
         result = firstNum > secondNum;
         break;
      case '<':
         result = firstNum < secondNum;
         break;
      case '==':
         result = firstNum == secondNum;
         break;
      case '>=':
         result = firstNum >= secondNum;
         break;
      case '<=':
         result = firstNum <= secondNum;
         break;
   }
   console.log(result)
   logText.innerHTML = result;
}



calcButton.addEventListener("click", () => calc())