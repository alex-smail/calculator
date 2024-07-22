const section = document.querySelector('section');

const calculator = document.createElement('div');
calculator.classList.add('calculator');
calculator.setAttribute('tabindex', '0'); // Позволяет блоку получить фокус

section.append(calculator);

const calculatorInfo = document.createElement('div');
calculatorInfo.classList.add('calculator__info');
calculatorInfo.textContent = 0;
calculator.append(calculatorInfo);

function setValue(id, nameElement) {
  const value = document.createElement('div');
  value.classList.add('calculator__element');
  value.id = id;
  value.textContent = nameElement;

  calculator.append(value);
}

setValue('clean', 'AC');
setValue('last-symbol', 'CE');
setValue('percent', '%');
setValue('division', '/');
setValue('seven', '7');
setValue('eight', '8');
setValue('nine', '9');
setValue('multiply', 'x');
setValue('four', '4');
setValue('five', '5');
setValue('six', '6');
setValue('minus', '-');
setValue('one', '1');
setValue('two', '2');
setValue('three', '3');
setValue('plus', '+');
setValue('null', '0');
setValue('comma', ',');
setValue('evenly', '=');

let currentInput = '0';
let operator = null;
let previousInput = null;
let isCalculatorFocused = false;

function updateDisplay(value) {
  calculatorInfo.textContent = value;
}

function clearAll() {
  currentInput = '0';
  operator = null;
  previousInput = null;
  updateDisplay(currentInput);
}

function deleteLastSymbol() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  updateDisplay(currentInput);
}

function handleNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay(currentInput);
}

function handleOperator(op) {
  if (previousInput === null) {
    previousInput = currentInput;
  } else if (operator) {
    previousInput = String(calculate(Number(previousInput), Number(currentInput), operator));
  }
  currentInput = '0';
  operator = op;
  updateDisplay(previousInput);
}

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      return b;
  }
}

function handleEqual() {
  if (operator && previousInput !== null) {
    currentInput = String(calculate(Number(previousInput), Number(currentInput), operator));
    operator = null;
    previousInput = null;
    updateDisplay(currentInput);
  }
}

function activateElement(element) {
  element.classList.add('active');
  setTimeout(() => {
    element.classList.remove('active');
  }, 500);
}

function handleEvent(event) {
  const { target } = event;
  const value = target.textContent;

  if (target.classList.contains('calculator__element')) {
    activateElement(target);

    switch (value) {
      case 'AC':
        clearAll();
        break;
      case 'CE':
        deleteLastSymbol();
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
      case '%':
        handleOperator(value);
        break;
      case '=':
        handleEqual();
        break;
      case ',':
        handleNumber('.');
        break;
      default:
        if (!isNaN(value)) {
          handleNumber(value);
        }
        break;
    }
  }
}

document.addEventListener('click', handleEvent);

function handleKeydown(event) {
  if (!isCalculatorFocused) return;

  const key = event.key;

  let element = null;
  switch (key) {
    case 'Backspace':
      deleteLastSymbol();
      element = document.getElementById('last-symbol');
      break;
    case 'Escape':
      clearAll();
      element = document.getElementById('clean');
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      let operatorKey = key;
      if (key === '*') operatorKey = 'x'; // Replace '*' with 'x'
      handleOperator(operatorKey);
      element = Array.from(document.querySelectorAll('.calculator__element')).find(el => el.textContent === operatorKey);
      break;
    case 'Enter':
    case '=':
      handleEqual();
      element = document.getElementById('evenly');
      break;
    case '.':
      handleNumber('.');
      element = document.getElementById('comma');
      break;
    default:
      if (!isNaN(key)) {
        handleNumber(key);
        element = Array.from(document.querySelectorAll('.calculator__element')).find(el => el.textContent === key);
      }
      break;
  }

  if (element) {
    activateElement(element);
  }
}

calculator.addEventListener('focus', () => {
  isCalculatorFocused = true;
});

calculator.addEventListener('blur', () => {
  isCalculatorFocused = false;
});

document.addEventListener('keydown', handleKeydown);
