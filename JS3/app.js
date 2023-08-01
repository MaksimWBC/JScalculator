const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
const umnogBtn = document.getElementById('umnogBtn')
const delitBtn = document.getElementById('delitBtn')
const submitBtn = document.getElementById('submitBtn')
const resultText = document.getElementById('result')
let action = '+'

 plusBtn.onclick = function () {
    action = '+'
 }

 minusBtn.onclick = function () {
    action = '-'
 }

 umnogBtn.onclick = function () {
    action = '*'
 }

 delitBtn.onclick = function () {
    action = '/'
 }

 function printResult(result) {
    if (result < 0) {
        resultText.style.color = 'red'
    } else {
        resultText.style.color = 'green'
    }
    resultText.textContent = result
 }

 function operationWhitNum (input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)

    if (actionSymbol == '+') {
        return num1 + num2
    }

    if (actionSymbol == '-') {
        return num1 - num2
    }

    if (actionSymbol == '*') {
        return num1 * num2
    }

    if (actionSymbol == '/') {
        return num1 / num2
    }
 }

 submitBtn.onclick = function () {
    const result = operationWhitNum (input1, input2, action)
    printResult(result)
}