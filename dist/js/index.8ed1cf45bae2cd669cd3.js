/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/index/js/block-info.js":
/*!**************************************!*\
  !*** ./pages/index/js/block-info.js ***!
  \**************************************/
/***/ (() => {

var allBlock = document.querySelector('.section');
var blockInfo = document.createElement('div');
blockInfo.classList = 'block block-info';
allBlock.append(blockInfo);
var infoTitle = document.createElement('h2');
infoTitle.classList = 'block-info__title';
infoTitle.textContent = 'Диапозон продажной цены';
var infoDsc = document.createElement('p');
infoDsc.classList = 'block-info__dsc';
var radioInputShirt = document.createElement('input');
radioInputShirt.type = 'radio';
radioInputShirt.name = 'format';
radioInputShirt.id = 'shirt';
var labelShirt = document.createElement('label');
labelShirt.setAttribute('for', 'shirt');
labelShirt.textContent = 'Майка';
var radioInputTape = document.createElement('input');
radioInputTape.type = 'radio';
radioInputTape.name = 'format';
radioInputTape.id = 'tapeInput';
var labelTape = document.createElement('label');
labelTape.setAttribute('for', 'tapeInput');
labelTape.textContent = 'Пленка';
infoDsc.append(radioInputShirt, labelShirt, radioInputTape, labelTape);
var infoInput = document.createElement('div');
infoInput.classList = 'block-info__input';
var infoInputNum = document.createElement('input');
infoInputNum.classList = 'block-info__input_num';
infoInputNum.type = 'number';
infoInputNum.id = 'rangeValue';
infoInputNum.min = '0';
infoInputNum.max = '100000';
infoInputNum.step = '5000';
infoInputNum.value = '0';
var rangeInput = document.createElement('input');
rangeInput.type = 'range';
rangeInput.id = 'rangeInput';
rangeInput.min = '0';
rangeInput.max = '100000';
rangeInput.step = '5000';
infoInput.append(infoInputNum, rangeInput);
var trafficPrice = document.createElement('div');
trafficPrice.classList = 'block-info__traffic-price';
var trafficPriceGreen = document.createElement('div');
trafficPriceGreen.classList = 'block-info__traffic-price_green';
trafficPrice.append(trafficPriceGreen);
blockInfo.append(infoTitle, infoDsc, infoInput, trafficPrice);

// цены
var priceShirt = 290;
var priceTape = 195;

// Обновление значений
rangeInput.addEventListener('input', function () {
  infoInputNum.value = rangeInput.value;
  updatePrices();
});
infoInputNum.addEventListener('input', function () {
  var min = Number(infoInputNum.min);
  var max = Number(infoInputNum.max);
  if (infoInputNum.value < min) infoInputNum.value = min;
  if (infoInputNum.value > max) infoInputNum.value = max;
  rangeInput.value = infoInputNum.value;
  updatePrices();
});
function updateRangeAttributes(min, max, step) {
  rangeInput.min = min;
  rangeInput.max = max;
  rangeInput.step = step;
  rangeInput.value = min;
  infoInputNum.min = min;
  infoInputNum.max = max;
  infoInputNum.step = step;
  infoInputNum.value = min;
}
function updatePrices() {
  var selectedRadio = document.querySelector('input[name="format"]:checked');
  if (!selectedRadio) return;
  var selectedValue = selectedRadio.id;
  if (selectedValue === 'shirt') {
    switch (Number(infoInputNum.value)) {
      case 5000:
        setPriceValue(priceShirt + 10);
        break;
      case 10000:
        setPriceValue(priceShirt);
        break;
      case 15000:
        setPriceValue(priceShirt - 10);
        break;
      case 20000:
        setPriceValue(priceShirt - 15);
        break;
      case 25000:
        setPriceValue(priceShirt - 20);
        break;
      case 30000:
        setPriceValue(priceShirt - 23);
        break;
      case 35000:
        setPriceValue(priceShirt - 26);
        break;
      case 40000:
        setPriceValue(priceShirt - 28);
        break;
      case 50000:
        setPriceValue(priceShirt - 30);
        break;
      default:
        break;
    }
  } else if (selectedValue === 'tapeInput') {
    switch (Number(infoInputNum.value)) {
      case 100:
        setPriceValue(priceTape + 35);
        break;
      case 300:
        setPriceValue(priceTape);
        break;
      case 500:
        setPriceValue(priceTape - 5);
        break;
      case 1000:
        setPriceValue(priceTape - 10);
        break;
      case 1500:
        setPriceValue(priceTape - 12);
        break;
      case 2000:
        setPriceValue(priceTape - 13);
        break;
      case 3000:
        setPriceValue(priceTape - 15);
        break;
      default:
        break;
    }
  }
}
function setPriceValue(green) {
  trafficPriceGreen.textContent = green;
}
function handleRadioChange(event) {
  var selectedValue = event.target.id;
  if (selectedValue === 'shirt') {
    updateRangeAttributes(0, 100000, 5000);
  } else if (selectedValue === 'tapeInput') {
    updateRangeAttributes(0, 5000, 100);
  }
}
radioInputShirt.addEventListener('change', handleRadioChange);
radioInputTape.addEventListener('change', handleRadioChange);
document.addEventListener('DOMContentLoaded', function () {
  updatePrices();
});

// блок с информацией по майке и фасовке
var blockPVD = document.createElement('div');
blockPVD.classList = 'block block__PVD';
var pvdDsr = document.createElement('h2');
pvdDsr.classList = 'block__PVD_dsc';
pvdDsr.textContent = 'Фасовка';
var dsrFooter = document.createElement('p');
dsrFooter.classList = 'block__PVD_dsc_footer';
dsrFooter.innerHTML = "\u041D\u0430 \u043F\u0430\u043A\u0435\u0442\u044B \u043E\u0442 400 \u043C\u043C \n<br>\n<br> \u041F\u041D\u0414 \u043E\u0442 20 \u043C\u043A\u043C \n<br> \u041F\u0412\u0414 \u043E\u0442 50 \u043C\u043A\u043C\n<hr>\n\u041F\u041D\u0414 \n <br/>150\u043A\u0433 - 240 \n <br/>300\u043A\u0433 - 230 \n <br/>500\u043A\u0433 - 215\n<hr>\n\u041F\u0412\u0414\n<br/>150\u043A\u0433 - 230 \n<br/>300\u043A\u0433 - 220 \n<br/>500\u043A\u0433 - 210";
blockPVD.append(pvdDsr, dsrFooter);
var blockPND = document.createElement('div');
blockPND.classList = 'block block__PND';
var pndDsr = document.createElement('h2');
pndDsr.classList = 'block__PND_dsc';
pndDsr.textContent = 'Майка';
var dsrFooterPND = document.createElement('p');
dsrFooterPND.classList = 'block__PND_dsc_footer';
dsrFooterPND.innerHTML = "\u0414\u043B\u044F \u043C\u0430\u0439\u043A\u0438 \n<br>\n<hr>\n24\u044540\n<br> - \u043C\u0438\u043D \u043F\u0430\u0440\u0442\u0438\u044F 20\u0442\u044B\u0441\n<hr>\n28\u044550\n<br> - \u043C\u0438\u043D \u043F\u0430\u0440\u0442\u0438\u044F 15\u0442\u044B\u0441\n<hr>\n40\u044560 \u0438 40\u044570\n<br> - \u043C\u0438\u043D \u043F\u0430\u0440\u0442\u0438\u044F 5\u0442\u044B\u0441\n<hr>\n<br>\n\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u043D\u0430 \u043F\u043E \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u043E\u0442 10\u0442\u044B\u0441!";
blockPND.append(pndDsr, dsrFooterPND);
allBlock.append(blockPVD, blockPND);

/***/ }),

/***/ "./pages/index/js/block-package.js":
/*!*****************************************!*\
  !*** ./pages/index/js/block-package.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   block: () => (/* binding */ block),
/* harmony export */   priceMaterials: () => (/* binding */ priceMaterials)
/* harmony export */ });
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function.js */ "./pages/index/js/function.js");

// Блок Фасовка
var section = document.querySelector('section');
var block = document.createElement('div');
block.classList.add('block', 'package');
block.id = 'package';
section.prepend(block);
var blockTitle = document.createElement('h2');
blockTitle.classList.add('block__title');
blockTitle.textContent = 'Фасовка';
block.append(blockTitle);
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Ширина', 'см.', 'width', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Высота', 'см.', 'height', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Толщина', 'мкм.', 'thickness', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Количество', 'шт.', 'circulation', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Вес', 'кг.', 'weight', 'package');
var priceMaterials = document.createElement('div');
priceMaterials.classList.add('block__price-materials');
priceMaterials.id = 'package-price';
block.append(priceMaterials);
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.createCostElement)('cost-materials', 'cost', 'Себест...', 'package-price');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.createCostElement)('selling-price', 'sell', 'Продажа', 'package-price');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)('Вес пакета', 'г.', 'one', 'ulOne', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)('Вес партии', 'кг.', 'all', 'ulAll', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)('Кол-во пакетов', 'шт.', 'total', 'ulTotal', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.priceInfo)('package', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.scrollNumber)();
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.setValues)();

// Блок Пленка

/***/ }),

/***/ "./pages/index/js/block-tape.js":
/*!**************************************!*\
  !*** ./pages/index/js/block-tape.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   block: () => (/* binding */ block)
/* harmony export */ });
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function.js */ "./pages/index/js/function.js");
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.js */ "./pages/index/js/checkbox.js");


// Блок Пленка
var section = document.querySelector('section');
var block = document.createElement('div');
block.classList.add('block', 'tape'); //, 'tape'
block.id = 'tape';
section.append(block);
var blockTitle = document.createElement('h2');
blockTitle.classList.add('block__title');
blockTitle.textContent = 'Пленка';
block.append(blockTitle, (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_1__.tapeCheckbox)());
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Ширина', 'см.', 'widthTape', 'tape');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Толщина', 'мкм.', 'thicknessTape', 'tape');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Количество', 'м.', 'circulationTape', 'tape');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)('Вес', 'кг.', 'weightTape', 'tape');
var priceMaterials = document.createElement('div');
priceMaterials.classList.add('block__price-materials');
priceMaterials.id = 'tape-price';
block.append(priceMaterials);
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.createCostElement)('cost-materials', 'costTape', 'Себест...', 'tape-price');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.createCostElement)('selling-price', 'sellTape', 'Продажа', 'tape-price');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)('Вес метра', 'г.', 'one-tape', 'ulOne-tape', 'tape');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)('Вес партии', 'кг.', 'all-tape', 'ulAll-tape', 'tape');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)('Кол-во метров', 'м.', 'total-tape', 'ulTotal-tape', 'tape');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.priceInfo)('tape', 'tape');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.scrollNumber)();
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.setValues)();

/***/ }),

/***/ "./pages/index/js/calculator.js":
/*!**************************************!*\
  !*** ./pages/index/js/calculator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculator: () => (/* binding */ calculator)
/* harmony export */ });
var section = document.querySelector('section');
var calculator = document.createElement('div');
calculator.classList.add('calculator');
calculator.setAttribute('tabindex', '0'); // Позволяет блоку получить фокус

section.append(calculator);
var calculatorInfo = document.createElement('div');
calculatorInfo.classList.add('calculator__info');
calculatorInfo.textContent = 0;
calculator.append(calculatorInfo);
function setValue(id, nameElement) {
  var value = document.createElement('div');
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
var currentInput = '0';
var operator = null;
var previousInput = null;
var isCalculatorFocused = false;
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
  setTimeout(function () {
    element.classList.remove('active');
  }, 500);
}
function handleEvent(event) {
  var target = event.target;
  var value = target.textContent;
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
  var key = event.key;
  var element = null;
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
      var operatorKey = key;
      if (key === '*') operatorKey = 'x'; // Replace '*' with 'x'
      handleOperator(operatorKey);
      element = Array.from(document.querySelectorAll('.calculator__element')).find(function (el) {
        return el.textContent === operatorKey;
      });
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
        element = Array.from(document.querySelectorAll('.calculator__element')).find(function (el) {
          return el.textContent === key;
        });
      }
      break;
  }
  if (element) {
    activateElement(element);
  }
}
calculator.addEventListener('focus', function () {
  isCalculatorFocused = true;
});
calculator.addEventListener('blur', function () {
  isCalculatorFocused = false;
});
document.addEventListener('keydown', handleKeydown);
calculator.classList.add('hidden');

/***/ }),

/***/ "./pages/index/js/checkbox.js":
/*!************************************!*\
  !*** ./pages/index/js/checkbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ f),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   tapeCheckbox: () => (/* binding */ tapeCheckbox)
/* harmony export */ });
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ "./pages/index/js/calculator.js");

var f = 0.92;
document.getElementById('toggle-checkbox').addEventListener('change', function () {
  if (this.checked) {
    f = 0.95;
  } else {
    f = 0.92;
  }
});

// Чекбокс пленка
var format = 2;
function tapeCheckbox() {
  var formatTapeBlock = document.createElement('div');
  formatTapeBlock.classList.add('block__tape');
  var formatTape = document.createElement('p');
  formatTape.classList.add('block__name', 'block__name-format');
  formatTape.textContent = 'Рукав';
  var checkboxContainer = document.createElement('div');
  checkboxContainer.classList.add('block__input');
  var labelSwitch = document.createElement('label');
  labelSwitch.classList.add('switch');
  var inputCheckbox = document.createElement('input');
  inputCheckbox.id = 'format-checkbox';
  inputCheckbox.type = 'checkbox';
  var spanSlider = document.createElement('span');
  spanSlider.classList.add('slider');
  labelSwitch.append(inputCheckbox, spanSlider);
  checkboxContainer.append(labelSwitch);
  formatTapeBlock.append(formatTape, checkboxContainer);
  inputCheckbox.addEventListener('change', function () {
    if (this.checked) {
      formatTape.textContent = 'Полотно';
      format = 1;
    } else {
      formatTape.textContent = 'Рукав';
      format = 2;
    }
  });
  return formatTapeBlock;
}
var checkboxCalc = document.querySelector('.checkbox-block__calc');
var checkboxInfo = document.querySelector('.checkbox-block__info');
// const calc = document.querySelector('.calculator');
var blockInfo = document.querySelector('.block-info');
checkboxCalc.addEventListener('click', function () {
  _calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.classList.toggle('visible');
  _calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.classList.toggle('hidden');
});
checkboxInfo.addEventListener('click', function () {
  blockInfo.classList.toggle('visible');
  blockInfo.classList.toggle('hidden');
});

/*
checkboxCalc.addEventListener('click', () => {
  calculator.classList.toggle('visible');
  calculator.classList.toggle('hidden');
});

checkboxCalc.addEventListener('click', () => {
  if (calculator.classList.contains('hidden')) {
    calculator.classList.remove('hidden', 'animated__reverse');
    calculator.classList.add('animated');
} else {
    calculator.classList.remove('animated');
    calculator.classList.add('animated__reverse');
    setTimeout(() => {
        calculator.classList.add('hidden');
        calculator.classList.remove('animated__reverse');
    }, 1000); // время соответствует длительности анимации
}
});*/

/***/ }),

/***/ "./pages/index/js/drag.js":
/*!********************************!*\
  !*** ./pages/index/js/drag.js ***!
  \********************************/
/***/ (() => {

var dragItem = document.querySelector('.calculator');
var active = false;
var currentX, currentY, initialX, initialY;
var xOffset = 0,
  yOffset = 0;
dragItem.addEventListener('mousedown', dragStart);
dragItem.addEventListener('mouseup', dragEnd);
dragItem.addEventListener('mousemove', drag);
function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
  if (e.target === dragItem) {
    active = true;
  }
}

// function dragEnd() {
//   initialX = currentX;
//   initialY = currentY;

//   active = false;
// }

function drag(e) {
  if (active) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;
    setTranslate(currentX, currentY, dragItem);
  }
}
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate(".concat(xPos, "px, ").concat(yPos, "px)");
}

// При загрузке страницы устанавливаем позицию из localStorage
window.onload = function () {
  var savedPosition = JSON.parse(localStorage.getItem('position'));
  if (savedPosition) {
    dragItem.style.transform = "translate(".concat(savedPosition.x, "px, ").concat(savedPosition.y, "px)");
    xOffset = savedPosition.x;
    yOffset = savedPosition.y;
  }
};
function dragEnd() {
  initialX = currentX;
  initialY = currentY;
  active = false;

  // Сохраняем текущие координаты в localStorage
  localStorage.setItem('position', JSON.stringify({
    x: xOffset,
    y: yOffset
  }));
}

/***/ }),

/***/ "./pages/index/js/function.js":
/*!************************************!*\
  !*** ./pages/index/js/function.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   creatUlElement: () => (/* binding */ creatUlElement),
/* harmony export */   createCostElement: () => (/* binding */ createCostElement),
/* harmony export */   packageInfo: () => (/* binding */ packageInfo),
/* harmony export */   priceInfo: () => (/* binding */ priceInfo),
/* harmony export */   scrollNumber: () => (/* binding */ scrollNumber),
/* harmony export */   setValues: () => (/* binding */ setValues)
/* harmony export */ });
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.js */ "./pages/index/js/checkbox.js");

function creatUlElement(name, dsc, id, format) {
  var ul = document.createElement('ul');
  ul.classList.add('block__item');
  var liDsc = document.createElement('li');
  liDsc.classList.add('block__container');
  var title = document.createElement('li');
  title.classList.add('block__name');
  title.textContent = name;
  var subtitle = document.createElement('li');
  subtitle.classList.add('block__dsc');
  subtitle.textContent = dsc;
  liDsc.append(title, subtitle);
  var liValue = document.createElement('li');
  var input = document.createElement('input');
  input.type = 'number';
  input.min = 1;
  input.id = id;
  input.required = true;
  input.classList.add('block__input');
  liValue.append(input);
  ul.append(liDsc, liValue);
  format === 'package' ? document.querySelector("#".concat(format)).append(ul) : document.querySelector("#".concat(format)).append(ul);
}
function createCostElement(name, id, placeholder, format) {
  var inputCost = document.createElement('input');
  inputCost.type = 'number';
  inputCost.min = 1;
  inputCost.id = id;
  inputCost.required = true;
  inputCost.classList.add("block__".concat(name));
  inputCost.placeholder = placeholder;
  format === 'package-price' ? document.querySelector("#".concat(format)).append(inputCost) : document.querySelector("#".concat(format)).append(inputCost);
}
function packageInfo(name, dsc, id, ulId, format) {
  var ul = document.createElement('ul');
  ul.classList.add('block__item', 'block__item-footer', 'hidden');
  ul.id = ulId;
  var liDsc = document.createElement('li');
  liDsc.classList.add('block__container');
  var title = document.createElement('li');
  title.classList.add('block__name');
  title.textContent = name;
  var subtitle = document.createElement('li');
  subtitle.classList.add('block__dsc');
  subtitle.textContent = dsc;
  liDsc.append(title, subtitle);
  var infoPackage = document.createElement('p');
  infoPackage.classList.add('block__info');
  infoPackage.id = id;
  ul.append(liDsc, infoPackage);
  format === 'package' ? document.querySelector("#".concat(format)).append(ul) : document.querySelector("#".concat(format)).append(ul);
}
function priceInfo(format, type) {
  var footer = document.createElement('div');
  footer.classList.add('block__footer');
  var costElement = document.createElement('p');
  costElement.classList.add('block__footer_cost', 'hidden');
  costElement.id = "footer-cost-".concat(type);
  var sellingElement = document.createElement('p');
  sellingElement.classList.add('block__footer_selling', 'hidden');
  sellingElement.id = "footer-selling-".concat(type);
  footer.append(costElement, sellingElement);
  var profitElementTape = document.createElement('p');
  profitElementTape.classList.add('block__footer_profit', 'hidden');
  profitElementTape.id = "footer-profit-".concat(type, "-m");
  var profitElement = document.createElement('p');
  profitElement.classList.add('block__footer_profit', 'hidden');
  profitElement.id = "footer-profit-".concat(type);
  format === 'package' ? document.querySelector("#".concat(format)).append(footer, profitElement) : document.querySelector("#".concat(format)).append(footer, profitElementTape, profitElement);
}
function updatePackageInfo(value, textSelector, ulSelector) {
  var multiplier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var decimalPlaces = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
  var textElement = document.querySelector(textSelector);
  var ulElement = document.querySelector(ulSelector);
  if (value > 0) {
    textElement.textContent = (value * multiplier).toFixed(decimalPlaces);
    ulElement.classList.remove('hidden');
  } else {
    ulElement.classList.add('hidden');
  }
}
function allInfoPackage() {
  var onePackage = values.width * _checkbox_js__WEBPACK_IMPORTED_MODULE_0__.f * 2 * values.height * (values.thickness / 10000) / 1000;
  var allPackage = onePackage * values.circulation;
  var totalPackage = values.weight / onePackage;
  var primePrice = values.cost * onePackage;
  var buyPrice = values.sell * onePackage;
  var profit = (buyPrice - primePrice) * values.circulation;
  updatePackageInfo(onePackage, '#one', '#ulOne', 1000);
  updatePackageInfo(allPackage, '#all', '#ulAll');
  updatePackageInfo(totalPackage, '#total', '#ulTotal', 1, 0);
  updatePackageInfo(primePrice, '#footer-cost-package', '#footer-cost-package');
  updatePackageInfo(buyPrice, '#footer-selling-package', '#footer-selling-package');
  updatePackageInfo(profit, '#footer-profit-package', '#footer-profit-package');
}
function allInfoTape() {
  var oneTape = values.widthTape * _checkbox_js__WEBPACK_IMPORTED_MODULE_0__.f * _checkbox_js__WEBPACK_IMPORTED_MODULE_0__.format * 100 * (values.thicknessTape / 10000) / 1000;
  var allTape = oneTape * values.circulationTape;
  var totalTape = values.weightTape / oneTape;
  var primePriceTape = values.costTape * oneTape;
  var buyPriceTape = values.sellTape * oneTape;
  var profitTape = (buyPriceTape - primePriceTape) * values.circulationTape; //||
  //Number(document.querySelector("#total-tape").textContent);
  var profitTapeKg = (values.sellTape - values.costTape) * values.weightTape;
  updatePackageInfo(oneTape, '#one-tape', '#ulOne-tape', 1000);
  updatePackageInfo(allTape, '#all-tape', '#ulAll-tape');
  updatePackageInfo(totalTape, '#total-tape', '#ulTotal-tape', 1, 0);
  updatePackageInfo(primePriceTape, '#footer-cost-tape', '#footer-cost-tape');
  updatePackageInfo(buyPriceTape, '#footer-selling-tape', '#footer-selling-tape');
  updatePackageInfo(profitTape, '#footer-profit-tape-m', '#footer-profit-tape-m');
  updatePackageInfo(profitTapeKg, '#footer-profit-tape', '#footer-profit-tape');
}
var values = {};
function setValues() {
  document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('change', function () {
      values[input.id] = Number(input.value) || 0;
      allInfoPackage();
      allInfoTape();
    });
    input.addEventListener('focus', function () {
      this.select();
    });
  });
}
console.log(values);
function scrollNumber() {
  document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('wheel', function (event) {
      if (this === document.activeElement) {
        event.preventDefault(); // Предотвращаем прокрутку страницы

        var step = Number(this.getAttribute('step')) || 1; // Получаем шаг изменения (по умолчанию 1)
        var min = Number(this.getAttribute('min')) || 0; // Получаем минимальное значение (по умолчанию 0)
        if (event.deltaY < 0) {
          // Прокрутка вверх, увеличиваем значение
          this.value = Number(this.value) + step;
        } else {
          // Прокрутка вниз, уменьшаем значение (если больше или равно минимальному значению)
          this.value = Math.max(min, Number(this.value) - step);
        }
        values[input.id] = Number(input.value) || 0;
        allInfoPackage();
        allInfoTape();
      }
    });
  });
}

/***/ }),

/***/ "./pages/index/js/square.js":
/*!**********************************!*\
  !*** ./pages/index/js/square.js ***!
  \**********************************/
/***/ (() => {

var board = document.querySelector('#board');
var squares = 3886;
var colors = ['yellow', 'darkblue', 'purple', 'lime', 'white', 'gray', 'gold', 'pink', 'Salmon', 'DeepSkyBlue', 'Teal'];
for (var i = 0; i < squares; i++) {
  var square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);
  board.append(square);
}
function setColor(evt) {
  var elem = evt.target;
  elem.style.backgroundColor = randomColor();
  elem.style.boxShadow = '0 0 2px '.concat(randomColor(), ', 0 0 10px ').concat(randomColor());
}
function removeColor(evt) {
  var elem = evt.target;
  elem.style.backgroundColor = '#1d1d1d1d';
  elem.style.boxShadow = '0 0 2px #000';
}
var randomColor = function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
};

/***/ }),

/***/ "./pages/index/sass/index.scss":
/*!*************************************!*\
  !*** ./pages/index/sass/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ "./pages/index/sass/index.scss");
/* harmony import */ var _js_block_package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/block-package */ "./pages/index/js/block-package.js");
/* harmony import */ var _js_square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/square */ "./pages/index/js/square.js");
/* harmony import */ var _js_square__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_square__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_block_tape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/block-tape */ "./pages/index/js/block-tape.js");
/* harmony import */ var _js_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/calculator */ "./pages/index/js/calculator.js");
/* harmony import */ var _js_drag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/drag */ "./pages/index/js/drag.js");
/* harmony import */ var _js_drag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_drag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_block_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/block-info */ "./pages/index/js/block-info.js");
/* harmony import */ var _js_block_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_block_info__WEBPACK_IMPORTED_MODULE_6__);







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0gsSUFBSSxDQUFDYSxLQUFLLENBQUNiLElBQUksQ0FBQ2MsTUFBTSxDQUFDLENBQUMsR0FBR1gsTUFBTSxDQUFDekksTUFBTSxDQUFDLENBQUM7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdEJEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDQztBQUNQO0FBQ0k7QUFDQTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvYmxvY2staW5mby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9ibG9jay1wYWNrYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2Jsb2NrLXRhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvY2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9kcmFnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9zYXNzL2luZGV4LnNjc3M/M2VkYSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWxsQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbicpO1xuXG5jb25zdCBibG9ja0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrSW5mby5jbGFzc0xpc3QgPSAnYmxvY2sgYmxvY2staW5mbyc7XG5hbGxCbG9jay5hcHBlbmQoYmxvY2tJbmZvKTtcblxuY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmluZm9UaXRsZS5jbGFzc0xpc3QgPSAnYmxvY2staW5mb19fdGl0bGUnO1xuaW5mb1RpdGxlLnRleHRDb250ZW50ID0gJ9CU0LjQsNC/0L7Qt9C+0L0g0L/RgNC+0LTQsNC20L3QvtC5INGG0LXQvdGLJztcblxuY29uc3QgaW5mb0RzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmluZm9Ec2MuY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX2RzYyc7XG5cbmNvbnN0IHJhZGlvSW5wdXRTaGlydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5yYWRpb0lucHV0U2hpcnQudHlwZSA9ICdyYWRpbyc7XG5yYWRpb0lucHV0U2hpcnQubmFtZSA9ICdmb3JtYXQnO1xucmFkaW9JbnB1dFNoaXJ0LmlkID0gJ3NoaXJ0JztcblxuY29uc3QgbGFiZWxTaGlydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sYWJlbFNoaXJ0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NoaXJ0Jyk7XG5sYWJlbFNoaXJ0LnRleHRDb250ZW50ID0gJ9Cc0LDQudC60LAnO1xuXG5jb25zdCByYWRpb0lucHV0VGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5yYWRpb0lucHV0VGFwZS50eXBlID0gJ3JhZGlvJztcbnJhZGlvSW5wdXRUYXBlLm5hbWUgPSAnZm9ybWF0JztcbnJhZGlvSW5wdXRUYXBlLmlkID0gJ3RhcGVJbnB1dCc7XG5cbmNvbnN0IGxhYmVsVGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sYWJlbFRhcGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGFwZUlucHV0Jyk7XG5sYWJlbFRhcGUudGV4dENvbnRlbnQgPSAn0J/Qu9C10L3QutCwJztcblxuaW5mb0RzYy5hcHBlbmQocmFkaW9JbnB1dFNoaXJ0LCBsYWJlbFNoaXJ0LCByYWRpb0lucHV0VGFwZSwgbGFiZWxUYXBlKTtcblxuY29uc3QgaW5mb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbmZvSW5wdXQuY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX2lucHV0JztcblxuY29uc3QgaW5mb0lucHV0TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmluZm9JbnB1dE51bS5jbGFzc0xpc3QgPSAnYmxvY2staW5mb19faW5wdXRfbnVtJztcbmluZm9JbnB1dE51bS50eXBlID0gJ251bWJlcic7XG5pbmZvSW5wdXROdW0uaWQgPSAncmFuZ2VWYWx1ZSc7XG5pbmZvSW5wdXROdW0ubWluID0gJzAnO1xuaW5mb0lucHV0TnVtLm1heCA9ICcxMDAwMDAnO1xuaW5mb0lucHV0TnVtLnN0ZXAgPSAnNTAwMCc7XG5pbmZvSW5wdXROdW0udmFsdWUgPSAnMCc7XG5cbmNvbnN0IHJhbmdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucmFuZ2VJbnB1dC50eXBlID0gJ3JhbmdlJztcbnJhbmdlSW5wdXQuaWQgPSAncmFuZ2VJbnB1dCc7XG5yYW5nZUlucHV0Lm1pbiA9ICcwJztcbnJhbmdlSW5wdXQubWF4ID0gJzEwMDAwMCc7XG5yYW5nZUlucHV0LnN0ZXAgPSAnNTAwMCc7XG5cbmluZm9JbnB1dC5hcHBlbmQoaW5mb0lucHV0TnVtLCByYW5nZUlucHV0KTtcblxuY29uc3QgdHJhZmZpY1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50cmFmZmljUHJpY2UuY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX3RyYWZmaWMtcHJpY2UnO1xuXG5jb25zdCB0cmFmZmljUHJpY2VHcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudHJhZmZpY1ByaWNlR3JlZW4uY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX3RyYWZmaWMtcHJpY2VfZ3JlZW4nO1xuXG50cmFmZmljUHJpY2UuYXBwZW5kKHRyYWZmaWNQcmljZUdyZWVuKTtcbmJsb2NrSW5mby5hcHBlbmQoaW5mb1RpdGxlLCBpbmZvRHNjLCBpbmZvSW5wdXQsIHRyYWZmaWNQcmljZSk7XG5cbi8vINGG0LXQvdGLXG5sZXQgcHJpY2VTaGlydCA9IDI5MDtcbmxldCBwcmljZVRhcGUgPSAxOTU7XG5cbi8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC30L3QsNGH0LXQvdC40LlcbnJhbmdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gIGluZm9JbnB1dE51bS52YWx1ZSA9IHJhbmdlSW5wdXQudmFsdWU7XG4gIHVwZGF0ZVByaWNlcygpO1xufSk7XG5cbmluZm9JbnB1dE51bS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgY29uc3QgbWluID0gTnVtYmVyKGluZm9JbnB1dE51bS5taW4pO1xuICBjb25zdCBtYXggPSBOdW1iZXIoaW5mb0lucHV0TnVtLm1heCk7XG4gIGlmIChpbmZvSW5wdXROdW0udmFsdWUgPCBtaW4pIGluZm9JbnB1dE51bS52YWx1ZSA9IG1pbjtcbiAgaWYgKGluZm9JbnB1dE51bS52YWx1ZSA+IG1heCkgaW5mb0lucHV0TnVtLnZhbHVlID0gbWF4O1xuICByYW5nZUlucHV0LnZhbHVlID0gaW5mb0lucHV0TnVtLnZhbHVlO1xuICB1cGRhdGVQcmljZXMoKTtcbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVSYW5nZUF0dHJpYnV0ZXMobWluLCBtYXgsIHN0ZXApIHtcbiAgcmFuZ2VJbnB1dC5taW4gPSBtaW47XG4gIHJhbmdlSW5wdXQubWF4ID0gbWF4O1xuICByYW5nZUlucHV0LnN0ZXAgPSBzdGVwO1xuICByYW5nZUlucHV0LnZhbHVlID0gbWluO1xuICBpbmZvSW5wdXROdW0ubWluID0gbWluO1xuICBpbmZvSW5wdXROdW0ubWF4ID0gbWF4O1xuICBpbmZvSW5wdXROdW0uc3RlcCA9IHN0ZXA7XG4gIGluZm9JbnB1dE51bS52YWx1ZSA9IG1pbjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJpY2VzKCkge1xuICBjb25zdCBzZWxlY3RlZFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImZvcm1hdFwiXTpjaGVja2VkJyk7XG4gIGlmICghc2VsZWN0ZWRSYWRpbykgcmV0dXJuO1xuICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRSYWRpby5pZDtcblxuICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ3NoaXJ0Jykge1xuICAgIHN3aXRjaCAoTnVtYmVyKGluZm9JbnB1dE51bS52YWx1ZSkpIHtcbiAgICAgIGNhc2UgNTAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0ICsgMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTAwMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VTaGlydCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE1MDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAxMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDIwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAxNSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI1MDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAyMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAyMyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM1MDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAyNik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAyOCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDUwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAzMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ3RhcGVJbnB1dCcpIHtcbiAgICBzd2l0Y2ggKE51bWJlcihpbmZvSW5wdXROdW0udmFsdWUpKSB7XG4gICAgICBjYXNlIDEwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVRhcGUgKyAzNSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDUwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVRhcGUgLSA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlIC0gMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTUwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVRhcGUgLSAxMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlVGFwZSAtIDEzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMwMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlIC0gMTUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFByaWNlVmFsdWUoZ3JlZW4pIHtcbiAgdHJhZmZpY1ByaWNlR3JlZW4udGV4dENvbnRlbnQgPSBncmVlbjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmFkaW9DaGFuZ2UoZXZlbnQpIHtcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50LnRhcmdldC5pZDtcbiAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdzaGlydCcpIHtcbiAgICB1cGRhdGVSYW5nZUF0dHJpYnV0ZXMoMCwgMTAwMDAwLCA1MDAwKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlID09PSAndGFwZUlucHV0Jykge1xuICAgIHVwZGF0ZVJhbmdlQXR0cmlidXRlcygwLCA1MDAwLCAxMDApO1xuICB9XG59XG5cbnJhZGlvSW5wdXRTaGlydC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVSYWRpb0NoYW5nZSk7XG5yYWRpb0lucHV0VGFwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVSYWRpb0NoYW5nZSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHVwZGF0ZVByaWNlcygpO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyDQsdC70L7QuiDRgSDQuNC90YTQvtGA0LzQsNGG0LjQtdC5INC/0L4g0LzQsNC50LrQtSDQuCDRhNCw0YHQvtCy0LrQtVxuY29uc3QgYmxvY2tQVkQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrUFZELmNsYXNzTGlzdCA9ICdibG9jayBibG9ja19fUFZEJztcblxuY29uc3QgcHZkRHNyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnB2ZERzci5jbGFzc0xpc3QgPSAnYmxvY2tfX1BWRF9kc2MnO1xucHZkRHNyLnRleHRDb250ZW50ID0gJ9Ck0LDRgdC+0LLQutCwJztcblxuY29uc3QgZHNyRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuZHNyRm9vdGVyLmNsYXNzTGlzdCA9ICdibG9ja19fUFZEX2RzY19mb290ZXInO1xuZHNyRm9vdGVyLmlubmVySFRNTCA9IGDQndCwINC/0LDQutC10YLRiyDQvtGCIDQwMCDQvNC8IFxuPGJyPlxuPGJyPiDQn9Cd0JQg0L7RgiAyMCDQvNC60LwgXG48YnI+INCf0JLQlCDQvtGCIDUwINC80LrQvFxuPGhyPlxu0J/QndCUIFxuIDxici8+MTUw0LrQsyAtIDI0MCBcbiA8YnIvPjMwMNC60LMgLSAyMzAgXG4gPGJyLz41MDDQutCzIC0gMjE1XG48aHI+XG7Qn9CS0JRcbjxici8+MTUw0LrQsyAtIDIzMCBcbjxici8+MzAw0LrQsyAtIDIyMCBcbjxici8+NTAw0LrQsyAtIDIxMGA7XG5ibG9ja1BWRC5hcHBlbmQocHZkRHNyLCBkc3JGb290ZXIpO1xuXG5jb25zdCBibG9ja1BORCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxvY2tQTkQuY2xhc3NMaXN0ID0gJ2Jsb2NrIGJsb2NrX19QTkQnO1xuXG5jb25zdCBwbmREc3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucG5kRHNyLmNsYXNzTGlzdCA9ICdibG9ja19fUE5EX2RzYyc7XG5wbmREc3IudGV4dENvbnRlbnQgPSAn0JzQsNC50LrQsCc7XG5cbmNvbnN0IGRzckZvb3RlclBORCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmRzckZvb3RlclBORC5jbGFzc0xpc3QgPSAnYmxvY2tfX1BORF9kc2NfZm9vdGVyJztcbmRzckZvb3RlclBORC5pbm5lckhUTUwgPSBg0JTQu9GPINC80LDQudC60LggXG48YnI+XG48aHI+XG4yNNGFNDBcbjxicj4gLSDQvNC40L0g0L/QsNGA0YLQuNGPIDIw0YLRi9GBXG48aHI+XG4yONGFNTBcbjxicj4gLSDQvNC40L0g0L/QsNGA0YLQuNGPIDE10YLRi9GBXG48aHI+XG40MNGFNjAg0LggNDDRhTcwXG48YnI+IC0g0LzQuNC9INC/0LDRgNGC0LjRjyA10YLRi9GBXG48aHI+XG48YnI+XG7QvdCw0YfQsNC70YzQvdCw0Y8g0YbQtdC90L3QsCDQv9C+INGC0LDQsdC70LjRhtC1INC+0YIgMTDRgtGL0YEhYDtcbmJsb2NrUE5ELmFwcGVuZChwbmREc3IsIGRzckZvb3RlclBORCk7XG5cbmFsbEJsb2NrLmFwcGVuZChibG9ja1BWRCwgYmxvY2tQTkQpO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRVbEVsZW1lbnQsXG4gIGNyZWF0ZUNvc3RFbGVtZW50LFxuICBwYWNrYWdlSW5mbyxcbiAgc2Nyb2xsTnVtYmVyLFxuICBzZXRWYWx1ZXMsXG4gIHByaWNlSW5mbyxcbn0gZnJvbSAnLi9mdW5jdGlvbi5qcyc7XG4vLyDQkdC70L7QuiDQpNCw0YHQvtCy0LrQsFxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycsICdwYWNrYWdlJyk7XG5ibG9jay5pZCA9ICdwYWNrYWdlJztcblxuc2VjdGlvbi5wcmVwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5ibG9ja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX190aXRsZScpO1xuYmxvY2tUaXRsZS50ZXh0Q29udGVudCA9ICfQpNCw0YHQvtCy0LrQsCc7XG5cbmJsb2NrLmFwcGVuZChibG9ja1RpdGxlKTtcblxuY3JlYXRVbEVsZW1lbnQoJ9Co0LjRgNC40L3QsCcsICfRgdC8LicsICd3aWR0aCcsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JLRi9GB0L7RgtCwJywgJ9GB0LwuJywgJ2hlaWdodCcsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudCgn0KLQvtC70YnQuNC90LAnLCAn0LzQutC8LicsICd0aGlja25lc3MnLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JywgJ9GI0YIuJywgJ2NpcmN1bGF0aW9uJywgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KCfQktC10YEnLCAn0LrQsy4nLCAnd2VpZ2h0JywgJ3BhY2thZ2UnKTtcblxuZXhwb3J0IGNvbnN0IHByaWNlTWF0ZXJpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcmljZU1hdGVyaWFscy5jbGFzc0xpc3QuYWRkKCdibG9ja19fcHJpY2UtbWF0ZXJpYWxzJyk7XG5wcmljZU1hdGVyaWFscy5pZCA9ICdwYWNrYWdlLXByaWNlJztcblxuYmxvY2suYXBwZW5kKHByaWNlTWF0ZXJpYWxzKTtcblxuY3JlYXRlQ29zdEVsZW1lbnQoJ2Nvc3QtbWF0ZXJpYWxzJywgJ2Nvc3QnLCAn0KHQtdCx0LXRgdGCLi4uJywgJ3BhY2thZ2UtcHJpY2UnKTtcbmNyZWF0ZUNvc3RFbGVtZW50KCdzZWxsaW5nLXByaWNlJywgJ3NlbGwnLCAn0J/RgNC+0LTQsNC20LAnLCAncGFja2FnZS1wcmljZScpO1xuXG5wYWNrYWdlSW5mbygn0JLQtdGBINC/0LDQutC10YLQsCcsICfQsy4nLCAnb25lJywgJ3VsT25lJywgJ3BhY2thZ2UnKTtcbnBhY2thZ2VJbmZvKCfQktC10YEg0L/QsNGA0YLQuNC4JywgJ9C60LMuJywgJ2FsbCcsICd1bEFsbCcsICdwYWNrYWdlJyk7XG5wYWNrYWdlSW5mbygn0JrQvtC7LdCy0L4g0L/QsNC60LXRgtC+0LInLCAn0YjRgi4nLCAndG90YWwnLCAndWxUb3RhbCcsICdwYWNrYWdlJyk7XG5cbnByaWNlSW5mbygncGFja2FnZScsICdwYWNrYWdlJyk7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuXG4vLyDQkdC70L7QuiDQn9C70LXQvdC60LBcbiIsImltcG9ydCB7XG4gIGNyZWF0VWxFbGVtZW50LFxuICBjcmVhdGVDb3N0RWxlbWVudCxcbiAgcGFja2FnZUluZm8sXG4gIHNjcm9sbE51bWJlcixcbiAgc2V0VmFsdWVzLFxuICBwcmljZUluZm8sXG59IGZyb20gJy4vZnVuY3Rpb24uanMnO1xuaW1wb3J0IHsgdGFwZUNoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveC5qcyc7XG4vLyDQkdC70L7QuiDQn9C70LXQvdC60LBcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snLCAndGFwZScpOyAvLywgJ3RhcGUnXG5ibG9jay5pZCA9ICd0YXBlJztcblxuc2VjdGlvbi5hcHBlbmQoYmxvY2spO1xuXG5jb25zdCBibG9ja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RpdGxlJyk7XG5ibG9ja1RpdGxlLnRleHRDb250ZW50ID0gJ9Cf0LvQtdC90LrQsCc7XG5cbmJsb2NrLmFwcGVuZChibG9ja1RpdGxlLCB0YXBlQ2hlY2tib3goKSk7XG5cbmNyZWF0VWxFbGVtZW50KCfQqNC40YDQuNC90LAnLCAn0YHQvC4nLCAnd2lkdGhUYXBlJywgJ3RhcGUnKTtcbmNyZWF0VWxFbGVtZW50KCfQotC+0LvRidC40L3QsCcsICfQvNC60LwuJywgJ3RoaWNrbmVzc1RhcGUnLCAndGFwZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JywgJ9C8LicsICdjaXJjdWxhdGlvblRhcGUnLCAndGFwZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9CS0LXRgScsICfQutCzLicsICd3ZWlnaHRUYXBlJywgJ3RhcGUnKTtcblxuY29uc3QgcHJpY2VNYXRlcmlhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaWNlTWF0ZXJpYWxzLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19wcmljZS1tYXRlcmlhbHMnKTtcbnByaWNlTWF0ZXJpYWxzLmlkID0gJ3RhcGUtcHJpY2UnO1xuXG5ibG9jay5hcHBlbmQocHJpY2VNYXRlcmlhbHMpO1xuXG5jcmVhdGVDb3N0RWxlbWVudCgnY29zdC1tYXRlcmlhbHMnLCAnY29zdFRhcGUnLCAn0KHQtdCx0LXRgdGCLi4uJywgJ3RhcGUtcHJpY2UnKTtcbmNyZWF0ZUNvc3RFbGVtZW50KCdzZWxsaW5nLXByaWNlJywgJ3NlbGxUYXBlJywgJ9Cf0YDQvtC00LDQttCwJywgJ3RhcGUtcHJpY2UnKTtcblxucGFja2FnZUluZm8oJ9CS0LXRgSDQvNC10YLRgNCwJywgJ9CzLicsICdvbmUtdGFwZScsICd1bE9uZS10YXBlJywgJ3RhcGUnKTtcbnBhY2thZ2VJbmZvKCfQktC10YEg0L/QsNGA0YLQuNC4JywgJ9C60LMuJywgJ2FsbC10YXBlJywgJ3VsQWxsLXRhcGUnLCAndGFwZScpO1xucGFja2FnZUluZm8oJ9Ca0L7Quy3QstC+INC80LXRgtGA0L7QsicsICfQvC4nLCAndG90YWwtdGFwZScsICd1bFRvdGFsLXRhcGUnLCAndGFwZScpO1xuXG5wcmljZUluZm8oJ3RhcGUnLCAndGFwZScpO1xuc2Nyb2xsTnVtYmVyKCk7XG5zZXRWYWx1ZXMoKTtcbiIsImNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3InKTtcbmNhbGN1bGF0b3Iuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7IC8vINCf0L7Qt9Cy0L7Qu9GP0LXRgiDQsdC70L7QutGDINC/0L7Qu9GD0YfQuNGC0Ywg0YTQvtC60YPRgVxuXG5zZWN0aW9uLmFwcGVuZChjYWxjdWxhdG9yKTtcblxuY29uc3QgY2FsY3VsYXRvckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbGN1bGF0b3JJbmZvLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3JfX2luZm8nKTtcbmNhbGN1bGF0b3JJbmZvLnRleHRDb250ZW50ID0gMDtcbmNhbGN1bGF0b3IuYXBwZW5kKGNhbGN1bGF0b3JJbmZvKTtcblxuZnVuY3Rpb24gc2V0VmFsdWUoaWQsIG5hbWVFbGVtZW50KSB7XG4gIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhbHVlLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3JfX2VsZW1lbnQnKTtcbiAgdmFsdWUuaWQgPSBpZDtcbiAgdmFsdWUudGV4dENvbnRlbnQgPSBuYW1lRWxlbWVudDtcblxuICBjYWxjdWxhdG9yLmFwcGVuZCh2YWx1ZSk7XG59XG5cbnNldFZhbHVlKCdjbGVhbicsICdBQycpO1xuc2V0VmFsdWUoJ2xhc3Qtc3ltYm9sJywgJ0NFJyk7XG5zZXRWYWx1ZSgncGVyY2VudCcsICclJyk7XG5zZXRWYWx1ZSgnZGl2aXNpb24nLCAnLycpO1xuc2V0VmFsdWUoJ3NldmVuJywgJzcnKTtcbnNldFZhbHVlKCdlaWdodCcsICc4Jyk7XG5zZXRWYWx1ZSgnbmluZScsICc5Jyk7XG5zZXRWYWx1ZSgnbXVsdGlwbHknLCAneCcpO1xuc2V0VmFsdWUoJ2ZvdXInLCAnNCcpO1xuc2V0VmFsdWUoJ2ZpdmUnLCAnNScpO1xuc2V0VmFsdWUoJ3NpeCcsICc2Jyk7XG5zZXRWYWx1ZSgnbWludXMnLCAnLScpO1xuc2V0VmFsdWUoJ29uZScsICcxJyk7XG5zZXRWYWx1ZSgndHdvJywgJzInKTtcbnNldFZhbHVlKCd0aHJlZScsICczJyk7XG5zZXRWYWx1ZSgncGx1cycsICcrJyk7XG5zZXRWYWx1ZSgnbnVsbCcsICcwJyk7XG5zZXRWYWx1ZSgnY29tbWEnLCAnLCcpO1xuc2V0VmFsdWUoJ2V2ZW5seScsICc9Jyk7XG5cbmxldCBjdXJyZW50SW5wdXQgPSAnMCc7XG5sZXQgb3BlcmF0b3IgPSBudWxsO1xubGV0IHByZXZpb3VzSW5wdXQgPSBudWxsO1xubGV0IGlzQ2FsY3VsYXRvckZvY3VzZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSh2YWx1ZSkge1xuICBjYWxjdWxhdG9ySW5mby50ZXh0Q29udGVudCA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhckFsbCgpIHtcbiAgY3VycmVudElucHV0ID0gJzAnO1xuICBvcGVyYXRvciA9IG51bGw7XG4gIHByZXZpb3VzSW5wdXQgPSBudWxsO1xuICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxhc3RTeW1ib2woKSB7XG4gIGlmIChjdXJyZW50SW5wdXQubGVuZ3RoID4gMSkge1xuICAgIGN1cnJlbnRJbnB1dCA9IGN1cnJlbnRJbnB1dC5zbGljZSgwLCAtMSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudElucHV0ID0gJzAnO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTnVtYmVyKG51bWJlcikge1xuICBpZiAoY3VycmVudElucHV0ID09PSAnMCcpIHtcbiAgICBjdXJyZW50SW5wdXQgPSBudW1iZXI7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudElucHV0ICs9IG51bWJlcjtcbiAgfVxuICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU9wZXJhdG9yKG9wKSB7XG4gIGlmIChwcmV2aW91c0lucHV0ID09PSBudWxsKSB7XG4gICAgcHJldmlvdXNJbnB1dCA9IGN1cnJlbnRJbnB1dDtcbiAgfSBlbHNlIGlmIChvcGVyYXRvcikge1xuICAgIHByZXZpb3VzSW5wdXQgPSBTdHJpbmcoY2FsY3VsYXRlKE51bWJlcihwcmV2aW91c0lucHV0KSwgTnVtYmVyKGN1cnJlbnRJbnB1dCksIG9wZXJhdG9yKSk7XG4gIH1cbiAgY3VycmVudElucHV0ID0gJzAnO1xuICBvcGVyYXRvciA9IG9wO1xuICB1cGRhdGVEaXNwbGF5KHByZXZpb3VzSW5wdXQpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoYSwgYiwgb3ApIHtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJysnOlxuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIGNhc2UgJy0nOlxuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIGNhc2UgJ3gnOlxuICAgICAgcmV0dXJuIGEgKiBiO1xuICAgIGNhc2UgJy8nOlxuICAgICAgcmV0dXJuIGEgLyBiO1xuICAgIGNhc2UgJyUnOlxuICAgICAgcmV0dXJuIGEgJSBiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYjtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcXVhbCgpIHtcbiAgaWYgKG9wZXJhdG9yICYmIHByZXZpb3VzSW5wdXQgIT09IG51bGwpIHtcbiAgICBjdXJyZW50SW5wdXQgPSBTdHJpbmcoY2FsY3VsYXRlKE51bWJlcihwcmV2aW91c0lucHV0KSwgTnVtYmVyKGN1cnJlbnRJbnB1dCksIG9wZXJhdG9yKSk7XG4gICAgb3BlcmF0b3IgPSBudWxsO1xuICAgIHByZXZpb3VzSW5wdXQgPSBudWxsO1xuICAgIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUVsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYWxjdWxhdG9yX19lbGVtZW50JykpIHtcbiAgICBhY3RpdmF0ZUVsZW1lbnQodGFyZ2V0KTtcblxuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ0FDJzpcbiAgICAgICAgY2xlYXJBbGwoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDRSc6XG4gICAgICAgIGRlbGV0ZUxhc3RTeW1ib2woKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcrJzpcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgY2FzZSAneCc6XG4gICAgICBjYXNlICcvJzpcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgICBoYW5kbGVPcGVyYXRvcih2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnPSc6XG4gICAgICAgIGhhbmRsZUVxdWFsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLCc6XG4gICAgICAgIGhhbmRsZU51bWJlcignLicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgaGFuZGxlTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFdmVudCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgaWYgKCFpc0NhbGN1bGF0b3JGb2N1c2VkKSByZXR1cm47XG5cbiAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgZGVsZXRlTGFzdFN5bWJvbCgpO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0LXN5bWJvbCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIGNsZWFyQWxsKCk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFuJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcrJzpcbiAgICBjYXNlICctJzpcbiAgICBjYXNlICcqJzpcbiAgICBjYXNlICcvJzpcbiAgICBjYXNlICclJzpcbiAgICAgIGxldCBvcGVyYXRvcktleSA9IGtleTtcbiAgICAgIGlmIChrZXkgPT09ICcqJykgb3BlcmF0b3JLZXkgPSAneCc7IC8vIFJlcGxhY2UgJyonIHdpdGggJ3gnXG4gICAgICBoYW5kbGVPcGVyYXRvcihvcGVyYXRvcktleSk7XG4gICAgICBlbGVtZW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRvcl9fZWxlbWVudCcpKS5maW5kKGVsID0+IGVsLnRleHRDb250ZW50ID09PSBvcGVyYXRvcktleSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFbnRlcic6XG4gICAgY2FzZSAnPSc6XG4gICAgICBoYW5kbGVFcXVhbCgpO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVubHknKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy4nOlxuICAgICAgaGFuZGxlTnVtYmVyKCcuJyk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1hJyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKCFpc05hTihrZXkpKSB7XG4gICAgICAgIGhhbmRsZU51bWJlcihrZXkpO1xuICAgICAgICBlbGVtZW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRvcl9fZWxlbWVudCcpKS5maW5kKGVsID0+IGVsLnRleHRDb250ZW50ID09PSBrZXkpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAoZWxlbWVudCkge1xuICAgIGFjdGl2YXRlRWxlbWVudChlbGVtZW50KTtcbiAgfVxufVxuXG5jYWxjdWxhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBpc0NhbGN1bGF0b3JGb2N1c2VkID0gdHJ1ZTtcbn0pO1xuXG5jYWxjdWxhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gIGlzQ2FsY3VsYXRvckZvY3VzZWQgPSBmYWxzZTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5ZG93bik7XG5jYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyIsImltcG9ydCB7IGNhbGN1bGF0b3IgfSBmcm9tIFwiLi9jYWxjdWxhdG9yXCI7XG5leHBvcnQgbGV0IGYgPSAwLjkyO1xuXG5kb2N1bWVudFxuICAuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1jaGVja2JveCcpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZiA9IDAuOTU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGYgPSAwLjkyO1xuICAgIH1cbiAgfSk7XG5cbi8vINCn0LXQutCx0L7QutGBINC/0LvQtdC90LrQsFxuZXhwb3J0IGxldCBmb3JtYXQgPSAyO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFwZUNoZWNrYm94KCkge1xuICBjb25zdCBmb3JtYXRUYXBlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybWF0VGFwZUJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX190YXBlJyk7XG5cbiAgY29uc3QgZm9ybWF0VGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9ybWF0VGFwZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fbmFtZScsICdibG9ja19fbmFtZS1mb3JtYXQnKTtcbiAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9ICfQoNGD0LrQsNCyJztcblxuICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibG9ja19faW5wdXQnKTtcblxuICBjb25zdCBsYWJlbFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsU3dpdGNoLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuXG4gIGNvbnN0IGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dENoZWNrYm94LmlkID0gJ2Zvcm1hdC1jaGVja2JveCc7XG4gIGlucHV0Q2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cbiAgY29uc3Qgc3BhblNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3BhblNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcblxuICBsYWJlbFN3aXRjaC5hcHBlbmQoaW5wdXRDaGVja2JveCwgc3BhblNsaWRlcik7XG4gIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZChsYWJlbFN3aXRjaCk7XG4gIGZvcm1hdFRhcGVCbG9jay5hcHBlbmQoZm9ybWF0VGFwZSwgY2hlY2tib3hDb250YWluZXIpO1xuXG4gIGlucHV0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSAn0J/QvtC70L7RgtC90L4nO1xuICAgICAgZm9ybWF0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9ICfQoNGD0LrQsNCyJztcbiAgICAgIGZvcm1hdCA9IDI7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZm9ybWF0VGFwZUJsb2NrO1xufVxuXG5jb25zdCBjaGVja2JveENhbGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtYmxvY2tfX2NhbGMnKTtcbmNvbnN0IGNoZWNrYm94SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1ibG9ja19faW5mbycpO1xuLy8gY29uc3QgY2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yJyk7XG5jb25zdCBibG9ja0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2staW5mbycpO1xuXG5jaGVja2JveENhbGMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICBjYWxjdWxhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmNoZWNrYm94SW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYmxvY2tJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgYmxvY2tJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbi8qXG5jaGVja2JveENhbGMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICBjYWxjdWxhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7XG5cbmNoZWNrYm94Q2FsYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGNhbGN1bGF0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJywgJ2FuaW1hdGVkX19yZXZlcnNlJyk7XG4gICAgY2FsY3VsYXRvci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpO1xufSBlbHNlIHtcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkJyk7XG4gICAgY2FsY3VsYXRvci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZF9fcmV2ZXJzZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkX19yZXZlcnNlJyk7XG4gICAgfSwgMTAwMCk7IC8vINCy0YDQtdC80Y8g0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INCw0L3QuNC80LDRhtC40Lhcbn1cbn0pOyovIiwiY29uc3QgZHJhZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcicpO1xubGV0IGFjdGl2ZSA9IGZhbHNlO1xubGV0IGN1cnJlbnRYLCBjdXJyZW50WSwgaW5pdGlhbFgsIGluaXRpYWxZO1xubGV0IHhPZmZzZXQgPSAwLFxuICB5T2Zmc2V0ID0gMDtcblxuZHJhZ0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ1N0YXJ0KTtcbmRyYWdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkcmFnRW5kKTtcbmRyYWdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWcpO1xuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICBpbml0aWFsWCA9IGUuY2xpZW50WCAtIHhPZmZzZXQ7XG4gIGluaXRpYWxZID0gZS5jbGllbnRZIC0geU9mZnNldDtcblxuICBpZiAoZS50YXJnZXQgPT09IGRyYWdJdGVtKSB7XG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBkcmFnRW5kKCkge1xuLy8gICBpbml0aWFsWCA9IGN1cnJlbnRYO1xuLy8gICBpbml0aWFsWSA9IGN1cnJlbnRZO1xuXG4vLyAgIGFjdGl2ZSA9IGZhbHNlO1xuLy8gfVxuXG5mdW5jdGlvbiBkcmFnKGUpIHtcbiAgaWYgKGFjdGl2ZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGN1cnJlbnRYID0gZS5jbGllbnRYIC0gaW5pdGlhbFg7XG4gICAgY3VycmVudFkgPSBlLmNsaWVudFkgLSBpbml0aWFsWTtcblxuICAgIHhPZmZzZXQgPSBjdXJyZW50WDtcbiAgICB5T2Zmc2V0ID0gY3VycmVudFk7XG5cbiAgICBzZXRUcmFuc2xhdGUoY3VycmVudFgsIGN1cnJlbnRZLCBkcmFnSXRlbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHhQb3MsIHlQb3MsIGVsKSB7XG4gIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4UG9zfXB4LCAke3lQb3N9cHgpYDtcbn1cblxuLy8g0J/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRiyDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9C+0LfQuNGG0LjRjiDQuNC3IGxvY2FsU3RvcmFnZVxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2F2ZWRQb3NpdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc2l0aW9uJykpO1xuICBpZiAoc2F2ZWRQb3NpdGlvbikge1xuICAgIGRyYWdJdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtzYXZlZFBvc2l0aW9uLnh9cHgsICR7c2F2ZWRQb3NpdGlvbi55fXB4KWA7XG4gICAgeE9mZnNldCA9IHNhdmVkUG9zaXRpb24ueDtcbiAgICB5T2Zmc2V0ID0gc2F2ZWRQb3NpdGlvbi55O1xuICB9XG59O1xuXG5mdW5jdGlvbiBkcmFnRW5kKCkge1xuICBpbml0aWFsWCA9IGN1cnJlbnRYO1xuICBpbml0aWFsWSA9IGN1cnJlbnRZO1xuXG4gIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIC8vINCh0L7RhdGA0LDQvdGP0LXQvCDRgtC10LrRg9GJ0LjQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQsiBsb2NhbFN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc2l0aW9uJywgSlNPTi5zdHJpbmdpZnkoeyB4OiB4T2Zmc2V0LCB5OiB5T2Zmc2V0IH0pKTtcbn0iLCJpbXBvcnQgeyBmLCBmb3JtYXQgfSBmcm9tICcuL2NoZWNrYm94LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0VWxFbGVtZW50KG5hbWUsIGRzYywgaWQsIGZvcm1hdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pdGVtJyk7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaURzYy5jbGFzc0xpc3QuYWRkKCdibG9ja19fY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fbmFtZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fZHNjJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGxpVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICdudW1iZXInO1xuICBpbnB1dC5taW4gPSAxO1xuICBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pbnB1dCcpO1xuXG4gIGxpVmFsdWUuYXBwZW5kKGlucHV0KTtcbiAgdWwuYXBwZW5kKGxpRHNjLCBsaVZhbHVlKTtcblxuICBmb3JtYXQgPT09ICdwYWNrYWdlJ1xuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29zdEVsZW1lbnQobmFtZSwgaWQsIHBsYWNlaG9sZGVyLCBmb3JtYXQpIHtcbiAgY29uc3QgaW5wdXRDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRDb3N0LnR5cGUgPSAnbnVtYmVyJztcbiAgaW5wdXRDb3N0Lm1pbiA9IDE7XG4gIGlucHV0Q29zdC5pZCA9IGlkO1xuICBpbnB1dENvc3QucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dENvc3QuY2xhc3NMaXN0LmFkZChgYmxvY2tfXyR7bmFtZX1gKTtcbiAgaW5wdXRDb3N0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZS1wcmljZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoaW5wdXRDb3N0KVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChpbnB1dENvc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFja2FnZUluZm8obmFtZSwgZHNjLCBpZCwgdWxJZCwgZm9ybWF0KSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2l0ZW0nLCAnYmxvY2tfX2l0ZW0tZm9vdGVyJywgJ2hpZGRlbicpO1xuICB1bC5pZCA9IHVsSWQ7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaURzYy5jbGFzc0xpc3QuYWRkKCdibG9ja19fY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fbmFtZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fZHNjJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGluZm9QYWNrYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvUGFja2FnZS5jbGFzc0xpc3QuYWRkKCdibG9ja19faW5mbycpO1xuICBpbmZvUGFja2FnZS5pZCA9IGlkO1xuXG4gIHVsLmFwcGVuZChsaURzYywgaW5mb1BhY2thZ2UpO1xuXG4gIGZvcm1hdCA9PT0gJ3BhY2thZ2UnXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmljZUluZm8oZm9ybWF0LCB0eXBlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb3N0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX2Nvc3QnLCAnaGlkZGVuJyk7XG4gIGNvc3RFbGVtZW50LmlkID0gYGZvb3Rlci1jb3N0LSR7dHlwZX1gO1xuXG4gIGNvbnN0IHNlbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzZWxsaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX3NlbGxpbmcnLCAnaGlkZGVuJyk7XG4gIHNlbGxpbmdFbGVtZW50LmlkID0gYGZvb3Rlci1zZWxsaW5nLSR7dHlwZX1gO1xuXG4gIGZvb3Rlci5hcHBlbmQoY29zdEVsZW1lbnQsIHNlbGxpbmdFbGVtZW50KTtcblxuICBjb25zdCBwcm9maXRFbGVtZW50VGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvZml0RWxlbWVudFRhcGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3Rlcl9wcm9maXQnLCAnaGlkZGVuJyk7XG4gIHByb2ZpdEVsZW1lbnRUYXBlLmlkID0gYGZvb3Rlci1wcm9maXQtJHt0eXBlfS1tYDtcblxuICBjb25zdCBwcm9maXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9maXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXJfcHJvZml0JywgJ2hpZGRlbicpO1xuICBwcm9maXRFbGVtZW50LmlkID0gYGZvb3Rlci1wcm9maXQtJHt0eXBlfWA7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50KVxuICAgIDogZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKVxuICAgICAgICAuYXBwZW5kKGZvb3RlciwgcHJvZml0RWxlbWVudFRhcGUsIHByb2ZpdEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgdmFsdWUsXG4gIHRleHRTZWxlY3RvcixcbiAgdWxTZWxlY3RvcixcbiAgbXVsdGlwbGllciA9IDEsXG4gIGRlY2ltYWxQbGFjZXMgPSAyLFxuKSB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0ZXh0U2VsZWN0b3IpO1xuICBjb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVsU2VsZWN0b3IpO1xuXG4gIGlmICh2YWx1ZSA+IDApIHtcbiAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9ICh2YWx1ZSAqIG11bHRpcGxpZXIpLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XG4gICAgdWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxJbmZvUGFja2FnZSgpIHtcbiAgbGV0IG9uZVBhY2thZ2UgPVxuICAgICh2YWx1ZXMud2lkdGggKiBmICogMiAqIHZhbHVlcy5oZWlnaHQgKiAodmFsdWVzLnRoaWNrbmVzcyAvIDEwMDAwKSkgLyAxMDAwO1xuICBsZXQgYWxsUGFja2FnZSA9IG9uZVBhY2thZ2UgKiB2YWx1ZXMuY2lyY3VsYXRpb247XG4gIGxldCB0b3RhbFBhY2thZ2UgPSB2YWx1ZXMud2VpZ2h0IC8gb25lUGFja2FnZTtcbiAgbGV0IHByaW1lUHJpY2UgPSB2YWx1ZXMuY29zdCAqIG9uZVBhY2thZ2U7XG4gIGxldCBidXlQcmljZSA9IHZhbHVlcy5zZWxsICogb25lUGFja2FnZTtcbiAgbGV0IHByb2ZpdCA9IChidXlQcmljZSAtIHByaW1lUHJpY2UpICogdmFsdWVzLmNpcmN1bGF0aW9uO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVQYWNrYWdlLCAnI29uZScsICcjdWxPbmUnLCAxMDAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oYWxsUGFja2FnZSwgJyNhbGwnLCAnI3VsQWxsJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsUGFja2FnZSwgJyN0b3RhbCcsICcjdWxUb3RhbCcsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlLCAnI2Zvb3Rlci1jb3N0LXBhY2thZ2UnLCAnI2Zvb3Rlci1jb3N0LXBhY2thZ2UnKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oXG4gICAgYnV5UHJpY2UsXG4gICAgJyNmb290ZXItc2VsbGluZy1wYWNrYWdlJyxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXBhY2thZ2UnLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXQsICcjZm9vdGVyLXByb2ZpdC1wYWNrYWdlJywgJyNmb290ZXItcHJvZml0LXBhY2thZ2UnKTtcbn1cblxuZnVuY3Rpb24gYWxsSW5mb1RhcGUoKSB7XG4gIGxldCBvbmVUYXBlID1cbiAgICAodmFsdWVzLndpZHRoVGFwZSAqIGYgKiBmb3JtYXQgKiAxMDAgKiAodmFsdWVzLnRoaWNrbmVzc1RhcGUgLyAxMDAwMCkpIC9cbiAgICAxMDAwO1xuICBsZXQgYWxsVGFwZSA9IG9uZVRhcGUgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlO1xuICBsZXQgdG90YWxUYXBlID0gdmFsdWVzLndlaWdodFRhcGUgLyBvbmVUYXBlO1xuICBsZXQgcHJpbWVQcmljZVRhcGUgPSB2YWx1ZXMuY29zdFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgYnV5UHJpY2VUYXBlID0gdmFsdWVzLnNlbGxUYXBlICogb25lVGFwZTtcbiAgbGV0IHByb2ZpdFRhcGUgPSAoYnV5UHJpY2VUYXBlIC0gcHJpbWVQcmljZVRhcGUpICogdmFsdWVzLmNpcmN1bGF0aW9uVGFwZTsgLy98fFxuICAvL051bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsLXRhcGVcIikudGV4dENvbnRlbnQpO1xuICBsZXQgcHJvZml0VGFwZUtnID0gKHZhbHVlcy5zZWxsVGFwZSAtIHZhbHVlcy5jb3N0VGFwZSkgKiB2YWx1ZXMud2VpZ2h0VGFwZTtcbiAgdXBkYXRlUGFja2FnZUluZm8ob25lVGFwZSwgJyNvbmUtdGFwZScsICcjdWxPbmUtdGFwZScsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxUYXBlLCAnI2FsbC10YXBlJywgJyN1bEFsbC10YXBlJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsVGFwZSwgJyN0b3RhbC10YXBlJywgJyN1bFRvdGFsLXRhcGUnLCAxLCAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJpbWVQcmljZVRhcGUsICcjZm9vdGVyLWNvc3QtdGFwZScsICcjZm9vdGVyLWNvc3QtdGFwZScpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZVRhcGUsXG4gICAgJyNmb290ZXItc2VsbGluZy10YXBlJyxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXRhcGUnLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBwcm9maXRUYXBlLFxuICAgICcjZm9vdGVyLXByb2ZpdC10YXBlLW0nLFxuICAgICcjZm9vdGVyLXByb2ZpdC10YXBlLW0nLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXRUYXBlS2csICcjZm9vdGVyLXByb2ZpdC10YXBlJywgJyNmb290ZXItcHJvZml0LXRhcGUnKTtcbn1cblxubGV0IHZhbHVlcyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuY29uc29sZS5sb2codmFsdWVzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbE51bWJlcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQv9GA0L7QutGA0YPRgtC60YMg0YHRgtGA0LDQvdC40YbRi1xuXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKSkgfHwgMTsgLy8g0J/QvtC70YPRh9Cw0LXQvCDRiNCw0LMg0LjQt9C80LXQvdC10L3QuNGPICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAxKVxuICAgICAgICBjb25zdCBtaW4gPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ21pbicpKSB8fCAwOyAvLyDQn9C+0LvRg9GH0LDQtdC8INC80LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gMClcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAvLyDQn9GA0L7QutGA0YPRgtC60LAg0LLQstC10YDRhSwg0YPQstC10LvQuNGH0LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IE51bWJlcih0aGlzLnZhbHVlKSArIHN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YLQutCwINCy0L3QuNC3LCDRg9C80LXQvdGM0YjQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSAo0LXRgdC70Lgg0LHQvtC70YzRiNC1INC40LvQuCDRgNCw0LLQvdC+INC80LjQvdC40LzQsNC70YzQvdC+0LzRgyDQt9C90LDRh9C10L3QuNGOKVxuICAgICAgICAgIHRoaXMudmFsdWUgPSBNYXRoLm1heChtaW4sIE51bWJlcih0aGlzLnZhbHVlKSAtIHN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IE51bWJlcihpbnB1dC52YWx1ZSkgfHwgMDtcbiAgICAgICAgYWxsSW5mb1BhY2thZ2UoKTtcbiAgICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmQnKTtcbmxldCBzcXVhcmVzID0gMzg4NjtcbmxldCBjb2xvcnMgPSBbJ3llbGxvdycsICdkYXJrYmx1ZScsICdwdXJwbGUnLCAnbGltZScsICd3aGl0ZScsICdncmF5JywgJ2dvbGQnLCAncGluaycsICdTYWxtb24nLCAnRGVlcFNreUJsdWUnLCAnVGVhbCddO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzOyBpKyspIHtcbiAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzZXRDb2xvcik7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVtb3ZlQ29sb3IpO1xuICBib2FyZC5hcHBlbmQoc3F1YXJlKTtcbn1cbmZ1bmN0aW9uIHNldENvbG9yKGV2dCkge1xuICBsZXQgZWxlbSA9IGV2dC50YXJnZXQ7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFuZG9tQ29sb3IoKTtcbiAgZWxlbS5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAnLmNvbmNhdChyYW5kb21Db2xvcigpLCAnLCAwIDAgMTBweCAnKS5jb25jYXQocmFuZG9tQ29sb3IoKSk7XG59XG5mdW5jdGlvbiByZW1vdmVDb2xvcihldnQpIHtcbiAgbGV0IGVsZW0gPSBldnQudGFyZ2V0O1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMWQxZDFkMWQnO1xuICBlbGVtLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMnB4ICMwMDAnO1xufVxubGV0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3Nhc3MvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay1wYWNrYWdlXCI7XG5pbXBvcnQgXCIuL2pzL3NxdWFyZVwiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay10YXBlXCI7XG5pbXBvcnQgXCIuL2pzL2NhbGN1bGF0b3JcIjtcbmltcG9ydCBcIi4vanMvZHJhZ1wiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay1pbmZvXCI7XG4iXSwibmFtZXMiOlsiYWxsQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJibG9ja0luZm8iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYXBwZW5kIiwiaW5mb1RpdGxlIiwidGV4dENvbnRlbnQiLCJpbmZvRHNjIiwicmFkaW9JbnB1dFNoaXJ0IiwidHlwZSIsIm5hbWUiLCJpZCIsImxhYmVsU2hpcnQiLCJzZXRBdHRyaWJ1dGUiLCJyYWRpb0lucHV0VGFwZSIsImxhYmVsVGFwZSIsImluZm9JbnB1dCIsImluZm9JbnB1dE51bSIsIm1pbiIsIm1heCIsInN0ZXAiLCJ2YWx1ZSIsInJhbmdlSW5wdXQiLCJ0cmFmZmljUHJpY2UiLCJ0cmFmZmljUHJpY2VHcmVlbiIsInByaWNlU2hpcnQiLCJwcmljZVRhcGUiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlUHJpY2VzIiwiTnVtYmVyIiwidXBkYXRlUmFuZ2VBdHRyaWJ1dGVzIiwic2VsZWN0ZWRSYWRpbyIsInNlbGVjdGVkVmFsdWUiLCJzZXRQcmljZVZhbHVlIiwiZ3JlZW4iLCJoYW5kbGVSYWRpb0NoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiYmxvY2tQVkQiLCJwdmREc3IiLCJkc3JGb290ZXIiLCJpbm5lckhUTUwiLCJibG9ja1BORCIsInBuZERzciIsImRzckZvb3RlclBORCIsImNyZWF0VWxFbGVtZW50IiwiY3JlYXRlQ29zdEVsZW1lbnQiLCJwYWNrYWdlSW5mbyIsInNjcm9sbE51bWJlciIsInNldFZhbHVlcyIsInByaWNlSW5mbyIsInNlY3Rpb24iLCJibG9jayIsImFkZCIsInByZXBlbmQiLCJibG9ja1RpdGxlIiwicHJpY2VNYXRlcmlhbHMiLCJ0YXBlQ2hlY2tib3giLCJjYWxjdWxhdG9yIiwiY2FsY3VsYXRvckluZm8iLCJzZXRWYWx1ZSIsIm5hbWVFbGVtZW50IiwiY3VycmVudElucHV0Iiwib3BlcmF0b3IiLCJwcmV2aW91c0lucHV0IiwiaXNDYWxjdWxhdG9yRm9jdXNlZCIsInVwZGF0ZURpc3BsYXkiLCJjbGVhckFsbCIsImRlbGV0ZUxhc3RTeW1ib2wiLCJsZW5ndGgiLCJzbGljZSIsImhhbmRsZU51bWJlciIsIm51bWJlciIsImhhbmRsZU9wZXJhdG9yIiwib3AiLCJTdHJpbmciLCJjYWxjdWxhdGUiLCJhIiwiYiIsImhhbmRsZUVxdWFsIiwiYWN0aXZhdGVFbGVtZW50IiwiZWxlbWVudCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJoYW5kbGVFdmVudCIsImNvbnRhaW5zIiwiaXNOYU4iLCJoYW5kbGVLZXlkb3duIiwia2V5IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcGVyYXRvcktleSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaW5kIiwiZWwiLCJmIiwiY2hlY2tlZCIsImZvcm1hdCIsImZvcm1hdFRhcGVCbG9jayIsImZvcm1hdFRhcGUiLCJjaGVja2JveENvbnRhaW5lciIsImxhYmVsU3dpdGNoIiwiaW5wdXRDaGVja2JveCIsInNwYW5TbGlkZXIiLCJjaGVja2JveENhbGMiLCJjaGVja2JveEluZm8iLCJ0b2dnbGUiLCJkcmFnSXRlbSIsImFjdGl2ZSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJpbml0aWFsWCIsImluaXRpYWxZIiwieE9mZnNldCIsInlPZmZzZXQiLCJkcmFnU3RhcnQiLCJkcmFnRW5kIiwiZHJhZyIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsInByZXZlbnREZWZhdWx0Iiwic2V0VHJhbnNsYXRlIiwieFBvcyIsInlQb3MiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNvbmNhdCIsIndpbmRvdyIsIm9ubG9hZCIsInNhdmVkUG9zaXRpb24iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwieCIsInkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZHNjIiwidWwiLCJsaURzYyIsInRpdGxlIiwic3VidGl0bGUiLCJsaVZhbHVlIiwiaW5wdXQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDb3N0IiwidWxJZCIsImluZm9QYWNrYWdlIiwiZm9vdGVyIiwiY29zdEVsZW1lbnQiLCJzZWxsaW5nRWxlbWVudCIsInByb2ZpdEVsZW1lbnRUYXBlIiwicHJvZml0RWxlbWVudCIsInVwZGF0ZVBhY2thZ2VJbmZvIiwidGV4dFNlbGVjdG9yIiwidWxTZWxlY3RvciIsIm11bHRpcGxpZXIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJkZWNpbWFsUGxhY2VzIiwidGV4dEVsZW1lbnQiLCJ1bEVsZW1lbnQiLCJ0b0ZpeGVkIiwiYWxsSW5mb1BhY2thZ2UiLCJvbmVQYWNrYWdlIiwidmFsdWVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0aGlja25lc3MiLCJhbGxQYWNrYWdlIiwiY2lyY3VsYXRpb24iLCJ0b3RhbFBhY2thZ2UiLCJ3ZWlnaHQiLCJwcmltZVByaWNlIiwiY29zdCIsImJ1eVByaWNlIiwic2VsbCIsInByb2ZpdCIsImFsbEluZm9UYXBlIiwib25lVGFwZSIsIndpZHRoVGFwZSIsInRoaWNrbmVzc1RhcGUiLCJhbGxUYXBlIiwiY2lyY3VsYXRpb25UYXBlIiwidG90YWxUYXBlIiwid2VpZ2h0VGFwZSIsInByaW1lUHJpY2VUYXBlIiwiY29zdFRhcGUiLCJidXlQcmljZVRhcGUiLCJzZWxsVGFwZSIsInByb2ZpdFRhcGUiLCJwcm9maXRUYXBlS2ciLCJmb3JFYWNoIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsImFjdGl2ZUVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJkZWx0YVkiLCJNYXRoIiwiYm9hcmQiLCJzcXVhcmVzIiwiY29sb3JzIiwiaSIsInNxdWFyZSIsInNldENvbG9yIiwicmVtb3ZlQ29sb3IiLCJldnQiLCJlbGVtIiwiYmFja2dyb3VuZENvbG9yIiwicmFuZG9tQ29sb3IiLCJib3hTaGFkb3ciLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=