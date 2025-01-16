/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/index/js/block-info.js":
/*!**************************************!*\
  !*** ./pages/index/js/block-info.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockInfo: () => (/* binding */ blockInfo),
/* harmony export */   blockPND: () => (/* binding */ blockPND),
/* harmony export */   blockPVD: () => (/* binding */ blockPVD)
/* harmony export */ });
var allBlock = document.querySelector('.section');
var blockInfo = document.createElement('div');
blockInfo.classList = 'block block-info hidden';
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

var pricePackage = 260;
var blockPVD = document.createElement('div');
blockPVD.classList = 'block block__PVD hidden';
var pvdDsr = document.createElement('h2');
pvdDsr.classList = 'block__PVD_dsc';
pvdDsr.textContent = 'Фасовка';
var dsrFooter = document.createElement('p');
dsrFooter.classList = 'block__PVD_dsc_footer';
dsrFooter.innerHTML = "\u041D\u0430 \u043F\u0430\u043A\u0435\u0442\u044B \u043E\u0442 400 \u043C\u043C \n<br>\n<br> \u041F\u041D\u0414 \u043E\u0442 20 \u043C\u043A\u043C \n<br> \u041F\u0412\u0414 \u043E\u0442 50 \u043C\u043A\u043C\n<hr>\n\u041F\u041D\u0414 \n <br/>150\u043A\u0433 - ".concat(pricePackage, " \n <br/>300\u043A\u0433 - ").concat(pricePackage - 10, " \n <br/>500\u043A\u0433 - ").concat(pricePackage - 20, "\n<hr>\n\u041F\u0412\u0414\n<br/>150\u043A\u0433 - ").concat(pricePackage - 10, "  \n<br/>300\u043A\u0433 - ").concat(pricePackage - 15, "  \n<br/>500\u043A\u0433 - ").concat(pricePackage - 25, " ");
blockPVD.append(pvdDsr, dsrFooter);
var blockPND = document.createElement('div');
blockPND.classList = 'block block__PND hidden';
var pndDsr = document.createElement('h2');
pndDsr.classList = 'block__PND_dsc';
pndDsr.textContent = 'Майка';
var dsrFooterPND = document.createElement('p');
dsrFooterPND.classList = 'block__PND_dsc_footer';
dsrFooterPND.innerHTML = "\n24\u044540\n<br> - \u043C\u0438\u043D \u043F\u0430\u0440\u0442\u0438\u044F 20\u0442\u044B\u0441\n<hr>\n28\u044550\n<br> - \u043C\u0438\u043D \u043F\u0430\u0440\u0442\u0438\u044F 15\u0442\u044B\u0441\n<hr>\n40\u044560 \u0438 40\u044570\n<br> - \u043C\u0438\u043D \u043F\u0430\u0440\u0442\u0438\u044F 5\u0442\u044B\u0441\n<hr>\n<br>\n\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u043D\u0430 \u043F\u043E \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u043E\u0442 10\u0442\u044B\u0441!\n<br>\n<br>\n<br>\n<br>";
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
/* harmony import */ var _block_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-info */ "./pages/index/js/block-info.js");


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
// const blockInfo = document.querySelector('.block-info');

checkboxCalc.addEventListener('click', function () {
  _calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.classList.toggle('visible');
  _calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.classList.toggle('hidden');
});
checkboxInfo.addEventListener('click', function () {
  _block_info__WEBPACK_IMPORTED_MODULE_1__.blockInfo.classList.toggle('visible');
  _block_info__WEBPACK_IMPORTED_MODULE_1__.blockInfo.classList.toggle('hidden');
  _block_info__WEBPACK_IMPORTED_MODULE_1__.blockPND.classList.toggle('visible');
  _block_info__WEBPACK_IMPORTED_MODULE_1__.blockPND.classList.toggle('hidden');
  _block_info__WEBPACK_IMPORTED_MODULE_1__.blockPVD.classList.toggle('visible');
  _block_info__WEBPACK_IMPORTED_MODULE_1__.blockPVD.classList.toggle('hidden');
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







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2luZGV4L2pzL2Jsb2NrLWluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvYmxvY2stcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9ibG9jay10YXBlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvZHJhZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvc2Fzcy9pbmRleC5zY3NzPzNlZGEiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFsbEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxvY2tJbmZvLmNsYXNzTGlzdCA9ICdibG9jayBibG9jay1pbmZvIGhpZGRlbic7XG5hbGxCbG9jay5hcHBlbmQoYmxvY2tJbmZvKTtcblxuY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmluZm9UaXRsZS5jbGFzc0xpc3QgPSAnYmxvY2staW5mb19fdGl0bGUnO1xuaW5mb1RpdGxlLnRleHRDb250ZW50ID0gJ9CU0LjQsNC/0L7Qt9C+0L0g0L/RgNC+0LTQsNC20L3QvtC5INGG0LXQvdGLJztcblxuY29uc3QgaW5mb0RzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmluZm9Ec2MuY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX2RzYyc7XG5cbmNvbnN0IHJhZGlvSW5wdXRTaGlydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5yYWRpb0lucHV0U2hpcnQudHlwZSA9ICdyYWRpbyc7XG5yYWRpb0lucHV0U2hpcnQubmFtZSA9ICdmb3JtYXQnO1xucmFkaW9JbnB1dFNoaXJ0LmlkID0gJ3NoaXJ0JztcblxuY29uc3QgbGFiZWxTaGlydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sYWJlbFNoaXJ0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NoaXJ0Jyk7XG5sYWJlbFNoaXJ0LnRleHRDb250ZW50ID0gJ9Cc0LDQudC60LAnO1xuXG5jb25zdCByYWRpb0lucHV0VGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5yYWRpb0lucHV0VGFwZS50eXBlID0gJ3JhZGlvJztcbnJhZGlvSW5wdXRUYXBlLm5hbWUgPSAnZm9ybWF0JztcbnJhZGlvSW5wdXRUYXBlLmlkID0gJ3RhcGVJbnB1dCc7XG5cbmNvbnN0IGxhYmVsVGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5sYWJlbFRhcGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGFwZUlucHV0Jyk7XG5sYWJlbFRhcGUudGV4dENvbnRlbnQgPSAn0J/Qu9C10L3QutCwJztcblxuaW5mb0RzYy5hcHBlbmQocmFkaW9JbnB1dFNoaXJ0LCBsYWJlbFNoaXJ0LCByYWRpb0lucHV0VGFwZSwgbGFiZWxUYXBlKTtcblxuY29uc3QgaW5mb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbmZvSW5wdXQuY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX2lucHV0JztcblxuY29uc3QgaW5mb0lucHV0TnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmluZm9JbnB1dE51bS5jbGFzc0xpc3QgPSAnYmxvY2staW5mb19faW5wdXRfbnVtJztcbmluZm9JbnB1dE51bS50eXBlID0gJ251bWJlcic7XG5pbmZvSW5wdXROdW0uaWQgPSAncmFuZ2VWYWx1ZSc7XG5pbmZvSW5wdXROdW0ubWluID0gJzAnO1xuaW5mb0lucHV0TnVtLm1heCA9ICcxMDAwMDAnO1xuaW5mb0lucHV0TnVtLnN0ZXAgPSAnNTAwMCc7XG5pbmZvSW5wdXROdW0udmFsdWUgPSAnMCc7XG5cbmNvbnN0IHJhbmdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucmFuZ2VJbnB1dC50eXBlID0gJ3JhbmdlJztcbnJhbmdlSW5wdXQuaWQgPSAncmFuZ2VJbnB1dCc7XG5yYW5nZUlucHV0Lm1pbiA9ICcwJztcbnJhbmdlSW5wdXQubWF4ID0gJzEwMDAwMCc7XG5yYW5nZUlucHV0LnN0ZXAgPSAnNTAwMCc7XG5cbmluZm9JbnB1dC5hcHBlbmQoaW5mb0lucHV0TnVtLCByYW5nZUlucHV0KTtcblxuY29uc3QgdHJhZmZpY1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50cmFmZmljUHJpY2UuY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX3RyYWZmaWMtcHJpY2UnO1xuXG5jb25zdCB0cmFmZmljUHJpY2VHcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudHJhZmZpY1ByaWNlR3JlZW4uY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX3RyYWZmaWMtcHJpY2VfZ3JlZW4nO1xuXG50cmFmZmljUHJpY2UuYXBwZW5kKHRyYWZmaWNQcmljZUdyZWVuKTtcbmJsb2NrSW5mby5hcHBlbmQoaW5mb1RpdGxlLCBpbmZvRHNjLCBpbmZvSW5wdXQsIHRyYWZmaWNQcmljZSk7XG5cbi8vINGG0LXQvdGLXG5sZXQgcHJpY2VTaGlydCA9IDI5MDtcbmxldCBwcmljZVRhcGUgPSAxOTU7XG5cbi8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC30L3QsNGH0LXQvdC40LlcbnJhbmdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gIGluZm9JbnB1dE51bS52YWx1ZSA9IHJhbmdlSW5wdXQudmFsdWU7XG4gIHVwZGF0ZVByaWNlcygpO1xufSk7XG5cbmluZm9JbnB1dE51bS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgY29uc3QgbWluID0gTnVtYmVyKGluZm9JbnB1dE51bS5taW4pO1xuICBjb25zdCBtYXggPSBOdW1iZXIoaW5mb0lucHV0TnVtLm1heCk7XG4gIGlmIChpbmZvSW5wdXROdW0udmFsdWUgPCBtaW4pIGluZm9JbnB1dE51bS52YWx1ZSA9IG1pbjtcbiAgaWYgKGluZm9JbnB1dE51bS52YWx1ZSA+IG1heCkgaW5mb0lucHV0TnVtLnZhbHVlID0gbWF4O1xuICByYW5nZUlucHV0LnZhbHVlID0gaW5mb0lucHV0TnVtLnZhbHVlO1xuICB1cGRhdGVQcmljZXMoKTtcbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVSYW5nZUF0dHJpYnV0ZXMobWluLCBtYXgsIHN0ZXApIHtcbiAgcmFuZ2VJbnB1dC5taW4gPSBtaW47XG4gIHJhbmdlSW5wdXQubWF4ID0gbWF4O1xuICByYW5nZUlucHV0LnN0ZXAgPSBzdGVwO1xuICByYW5nZUlucHV0LnZhbHVlID0gbWluO1xuICBpbmZvSW5wdXROdW0ubWluID0gbWluO1xuICBpbmZvSW5wdXROdW0ubWF4ID0gbWF4O1xuICBpbmZvSW5wdXROdW0uc3RlcCA9IHN0ZXA7XG4gIGluZm9JbnB1dE51bS52YWx1ZSA9IG1pbjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJpY2VzKCkge1xuICBjb25zdCBzZWxlY3RlZFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImZvcm1hdFwiXTpjaGVja2VkJyk7XG4gIGlmICghc2VsZWN0ZWRSYWRpbykgcmV0dXJuO1xuICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRSYWRpby5pZDtcblxuICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ3NoaXJ0Jykge1xuICAgIHN3aXRjaCAoTnVtYmVyKGluZm9JbnB1dE51bS52YWx1ZSkpIHtcbiAgICAgIGNhc2UgNTAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0ICsgMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTAwMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VTaGlydCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE1MDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAxMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDIwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAxNSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI1MDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAyMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDMwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAyMyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM1MDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAyNik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAyOCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDUwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQgLSAzMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ3RhcGVJbnB1dCcpIHtcbiAgICBzd2l0Y2ggKE51bWJlcihpbmZvSW5wdXROdW0udmFsdWUpKSB7XG4gICAgICBjYXNlIDEwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVRhcGUgKyAzNSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDUwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVRhcGUgLSA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlIC0gMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTUwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVRhcGUgLSAxMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlVGFwZSAtIDEzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMwMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlIC0gMTUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFByaWNlVmFsdWUoZ3JlZW4pIHtcbiAgdHJhZmZpY1ByaWNlR3JlZW4udGV4dENvbnRlbnQgPSBncmVlbjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmFkaW9DaGFuZ2UoZXZlbnQpIHtcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50LnRhcmdldC5pZDtcbiAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdzaGlydCcpIHtcbiAgICB1cGRhdGVSYW5nZUF0dHJpYnV0ZXMoMCwgMTAwMDAwLCA1MDAwKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlID09PSAndGFwZUlucHV0Jykge1xuICAgIHVwZGF0ZVJhbmdlQXR0cmlidXRlcygwLCA1MDAwLCAxMDApO1xuICB9XG59XG5cbnJhZGlvSW5wdXRTaGlydC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVSYWRpb0NoYW5nZSk7XG5yYWRpb0lucHV0VGFwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVSYWRpb0NoYW5nZSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHVwZGF0ZVByaWNlcygpO1xufSk7XG5cbi8vINCx0LvQvtC6INGBINC40L3RhNC+0YDQvNCw0YbQuNC10Lkg0L/QviDQvNCw0LnQutC1INC4INGE0LDRgdC+0LLQutC1XG5cbmxldCBwcmljZVBhY2thZ2UgPSAyNjA7XG5leHBvcnQgY29uc3QgYmxvY2tQVkQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrUFZELmNsYXNzTGlzdCA9ICdibG9jayBibG9ja19fUFZEIGhpZGRlbic7XG5cbmNvbnN0IHB2ZERzciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5wdmREc3IuY2xhc3NMaXN0ID0gJ2Jsb2NrX19QVkRfZHNjJztcbnB2ZERzci50ZXh0Q29udGVudCA9ICfQpNCw0YHQvtCy0LrQsCc7XG5cbmNvbnN0IGRzckZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmRzckZvb3Rlci5jbGFzc0xpc3QgPSAnYmxvY2tfX1BWRF9kc2NfZm9vdGVyJztcbmRzckZvb3Rlci5pbm5lckhUTUwgPSBg0J3QsCDQv9Cw0LrQtdGC0Ysg0L7RgiA0MDAg0LzQvCBcbjxicj5cbjxicj4g0J/QndCUINC+0YIgMjAg0LzQutC8IFxuPGJyPiDQn9CS0JQg0L7RgiA1MCDQvNC60Lxcbjxocj5cbtCf0J3QlCBcbiA8YnIvPjE1MNC60LMgLSAke3ByaWNlUGFja2FnZX0gXG4gPGJyLz4zMDDQutCzIC0gJHtwcmljZVBhY2thZ2UgLSAxMH0gXG4gPGJyLz41MDDQutCzIC0gJHtwcmljZVBhY2thZ2UgLSAyMH1cbjxocj5cbtCf0JLQlFxuPGJyLz4xNTDQutCzIC0gJHtwcmljZVBhY2thZ2UgLSAxMH0gIFxuPGJyLz4zMDDQutCzIC0gJHtwcmljZVBhY2thZ2UgLSAxNX0gIFxuPGJyLz41MDDQutCzIC0gJHtwcmljZVBhY2thZ2UgLSAyNX0gYDtcbmJsb2NrUFZELmFwcGVuZChwdmREc3IsIGRzckZvb3Rlcik7XG5cbmV4cG9ydCBjb25zdCBibG9ja1BORCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxvY2tQTkQuY2xhc3NMaXN0ID0gJ2Jsb2NrIGJsb2NrX19QTkQgaGlkZGVuJztcblxuY29uc3QgcG5kRHNyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnBuZERzci5jbGFzc0xpc3QgPSAnYmxvY2tfX1BORF9kc2MnO1xucG5kRHNyLnRleHRDb250ZW50ID0gJ9Cc0LDQudC60LAnO1xuXG5jb25zdCBkc3JGb290ZXJQTkQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5kc3JGb290ZXJQTkQuY2xhc3NMaXN0ID0gJ2Jsb2NrX19QTkRfZHNjX2Zvb3Rlcic7XG5kc3JGb290ZXJQTkQuaW5uZXJIVE1MID0gYFxuMjTRhTQwXG48YnI+IC0g0LzQuNC9INC/0LDRgNGC0LjRjyAyMNGC0YvRgVxuPGhyPlxuMjjRhTUwXG48YnI+IC0g0LzQuNC9INC/0LDRgNGC0LjRjyAxNdGC0YvRgVxuPGhyPlxuNDDRhTYwINC4IDQw0YU3MFxuPGJyPiAtINC80LjQvSDQv9Cw0YDRgtC40Y8gNdGC0YvRgVxuPGhyPlxuPGJyPlxu0L3QsNGH0LDQu9GM0L3QsNGPINGG0LXQvdC90LAg0L/QviDRgtCw0LHQu9C40YbQtSDQvtGCIDEw0YLRi9GBIVxuPGJyPlxuPGJyPlxuPGJyPlxuPGJyPmA7XG5ibG9ja1BORC5hcHBlbmQocG5kRHNyLCBkc3JGb290ZXJQTkQpO1xuXG5hbGxCbG9jay5hcHBlbmQoYmxvY2tQVkQsIGJsb2NrUE5EKTtcbiIsImltcG9ydCB7XG4gIGNyZWF0VWxFbGVtZW50LFxuICBjcmVhdGVDb3N0RWxlbWVudCxcbiAgcGFja2FnZUluZm8sXG4gIHNjcm9sbE51bWJlcixcbiAgc2V0VmFsdWVzLFxuICBwcmljZUluZm8sXG59IGZyb20gJy4vZnVuY3Rpb24uanMnO1xuLy8g0JHQu9C+0Log0KTQsNGB0L7QstC60LBcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snLCAncGFja2FnZScpO1xuYmxvY2suaWQgPSAncGFja2FnZSc7XG5cbnNlY3Rpb24ucHJlcGVuZChibG9jayk7XG5cbmNvbnN0IGJsb2NrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuYmxvY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fdGl0bGUnKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSAn0KTQsNGB0L7QstC60LAnO1xuXG5ibG9jay5hcHBlbmQoYmxvY2tUaXRsZSk7XG5cbmNyZWF0VWxFbGVtZW50KCfQqNC40YDQuNC90LAnLCAn0YHQvC4nLCAnd2lkdGgnLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9CS0YvRgdC+0YLQsCcsICfRgdC8LicsICdoZWlnaHQnLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9Ci0L7Qu9GJ0LjQvdCwJywgJ9C80LrQvC4nLCAndGhpY2tuZXNzJywgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KCfQmtC+0LvQuNGH0LXRgdGC0LLQvicsICfRiNGCLicsICdjaXJjdWxhdGlvbicsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JLQtdGBJywgJ9C60LMuJywgJ3dlaWdodCcsICdwYWNrYWdlJyk7XG5cbmV4cG9ydCBjb25zdCBwcmljZU1hdGVyaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJpY2VNYXRlcmlhbHMuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3ByaWNlLW1hdGVyaWFscycpO1xucHJpY2VNYXRlcmlhbHMuaWQgPSAncGFja2FnZS1wcmljZSc7XG5cbmJsb2NrLmFwcGVuZChwcmljZU1hdGVyaWFscyk7XG5cbmNyZWF0ZUNvc3RFbGVtZW50KCdjb3N0LW1hdGVyaWFscycsICdjb3N0JywgJ9Ch0LXQsdC10YHRgi4uLicsICdwYWNrYWdlLXByaWNlJyk7XG5jcmVhdGVDb3N0RWxlbWVudCgnc2VsbGluZy1wcmljZScsICdzZWxsJywgJ9Cf0YDQvtC00LDQttCwJywgJ3BhY2thZ2UtcHJpY2UnKTtcblxucGFja2FnZUluZm8oJ9CS0LXRgSDQv9Cw0LrQtdGC0LAnLCAn0LMuJywgJ29uZScsICd1bE9uZScsICdwYWNrYWdlJyk7XG5wYWNrYWdlSW5mbygn0JLQtdGBINC/0LDRgNGC0LjQuCcsICfQutCzLicsICdhbGwnLCAndWxBbGwnLCAncGFja2FnZScpO1xucGFja2FnZUluZm8oJ9Ca0L7Quy3QstC+INC/0LDQutC10YLQvtCyJywgJ9GI0YIuJywgJ3RvdGFsJywgJ3VsVG90YWwnLCAncGFja2FnZScpO1xuXG5wcmljZUluZm8oJ3BhY2thZ2UnLCAncGFja2FnZScpO1xuc2Nyb2xsTnVtYmVyKCk7XG5zZXRWYWx1ZXMoKTtcblxuLy8g0JHQu9C+0Log0J/Qu9C10L3QutCwXG4iLCJpbXBvcnQge1xuICBjcmVhdFVsRWxlbWVudCxcbiAgY3JlYXRlQ29zdEVsZW1lbnQsXG4gIHBhY2thZ2VJbmZvLFxuICBzY3JvbGxOdW1iZXIsXG4gIHNldFZhbHVlcyxcbiAgcHJpY2VJbmZvLFxufSBmcm9tICcuL2Z1bmN0aW9uLmpzJztcbmltcG9ydCB7IHRhcGVDaGVja2JveCB9IGZyb20gJy4vY2hlY2tib3guanMnO1xuLy8g0JHQu9C+0Log0J/Qu9C10L3QutCwXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJywgJ3RhcGUnKTsgLy8sICd0YXBlJ1xuYmxvY2suaWQgPSAndGFwZSc7XG5cbnNlY3Rpb24uYXBwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5ibG9ja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX190aXRsZScpO1xuYmxvY2tUaXRsZS50ZXh0Q29udGVudCA9ICfQn9C70LXQvdC60LAnO1xuXG5ibG9jay5hcHBlbmQoYmxvY2tUaXRsZSwgdGFwZUNoZWNrYm94KCkpO1xuXG5jcmVhdFVsRWxlbWVudCgn0KjQuNGA0LjQvdCwJywgJ9GB0LwuJywgJ3dpZHRoVGFwZScsICd0YXBlJyk7XG5jcmVhdFVsRWxlbWVudCgn0KLQvtC70YnQuNC90LAnLCAn0LzQutC8LicsICd0aGlja25lc3NUYXBlJywgJ3RhcGUnKTtcbmNyZWF0VWxFbGVtZW50KCfQmtC+0LvQuNGH0LXRgdGC0LLQvicsICfQvC4nLCAnY2lyY3VsYXRpb25UYXBlJywgJ3RhcGUnKTtcbmNyZWF0VWxFbGVtZW50KCfQktC10YEnLCAn0LrQsy4nLCAnd2VpZ2h0VGFwZScsICd0YXBlJyk7XG5cbmNvbnN0IHByaWNlTWF0ZXJpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcmljZU1hdGVyaWFscy5jbGFzc0xpc3QuYWRkKCdibG9ja19fcHJpY2UtbWF0ZXJpYWxzJyk7XG5wcmljZU1hdGVyaWFscy5pZCA9ICd0YXBlLXByaWNlJztcblxuYmxvY2suYXBwZW5kKHByaWNlTWF0ZXJpYWxzKTtcblxuY3JlYXRlQ29zdEVsZW1lbnQoJ2Nvc3QtbWF0ZXJpYWxzJywgJ2Nvc3RUYXBlJywgJ9Ch0LXQsdC10YHRgi4uLicsICd0YXBlLXByaWNlJyk7XG5jcmVhdGVDb3N0RWxlbWVudCgnc2VsbGluZy1wcmljZScsICdzZWxsVGFwZScsICfQn9GA0L7QtNCw0LbQsCcsICd0YXBlLXByaWNlJyk7XG5cbnBhY2thZ2VJbmZvKCfQktC10YEg0LzQtdGC0YDQsCcsICfQsy4nLCAnb25lLXRhcGUnLCAndWxPbmUtdGFwZScsICd0YXBlJyk7XG5wYWNrYWdlSW5mbygn0JLQtdGBINC/0LDRgNGC0LjQuCcsICfQutCzLicsICdhbGwtdGFwZScsICd1bEFsbC10YXBlJywgJ3RhcGUnKTtcbnBhY2thZ2VJbmZvKCfQmtC+0Lst0LLQviDQvNC10YLRgNC+0LInLCAn0LwuJywgJ3RvdGFsLXRhcGUnLCAndWxUb3RhbC10YXBlJywgJ3RhcGUnKTtcblxucHJpY2VJbmZvKCd0YXBlJywgJ3RhcGUnKTtcbnNjcm9sbE51bWJlcigpO1xuc2V0VmFsdWVzKCk7XG4iLCJjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FsY3VsYXRvci5jbGFzc0xpc3QuYWRkKCdjYWxjdWxhdG9yJyk7XG5jYWxjdWxhdG9yLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpOyAvLyDQn9C+0LfQstC+0LvRj9C10YIg0LHQu9C+0LrRgyDQv9C+0LvRg9GH0LjRgtGMINGE0L7QutGD0YFcblxuc2VjdGlvbi5hcHBlbmQoY2FsY3VsYXRvcik7XG5cbmNvbnN0IGNhbGN1bGF0b3JJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYWxjdWxhdG9ySW5mby5jbGFzc0xpc3QuYWRkKCdjYWxjdWxhdG9yX19pbmZvJyk7XG5jYWxjdWxhdG9ySW5mby50ZXh0Q29udGVudCA9IDA7XG5jYWxjdWxhdG9yLmFwcGVuZChjYWxjdWxhdG9ySW5mbyk7XG5cbmZ1bmN0aW9uIHNldFZhbHVlKGlkLCBuYW1lRWxlbWVudCkge1xuICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCdjYWxjdWxhdG9yX19lbGVtZW50Jyk7XG4gIHZhbHVlLmlkID0gaWQ7XG4gIHZhbHVlLnRleHRDb250ZW50ID0gbmFtZUVsZW1lbnQ7XG5cbiAgY2FsY3VsYXRvci5hcHBlbmQodmFsdWUpO1xufVxuXG5zZXRWYWx1ZSgnY2xlYW4nLCAnQUMnKTtcbnNldFZhbHVlKCdsYXN0LXN5bWJvbCcsICdDRScpO1xuc2V0VmFsdWUoJ3BlcmNlbnQnLCAnJScpO1xuc2V0VmFsdWUoJ2RpdmlzaW9uJywgJy8nKTtcbnNldFZhbHVlKCdzZXZlbicsICc3Jyk7XG5zZXRWYWx1ZSgnZWlnaHQnLCAnOCcpO1xuc2V0VmFsdWUoJ25pbmUnLCAnOScpO1xuc2V0VmFsdWUoJ211bHRpcGx5JywgJ3gnKTtcbnNldFZhbHVlKCdmb3VyJywgJzQnKTtcbnNldFZhbHVlKCdmaXZlJywgJzUnKTtcbnNldFZhbHVlKCdzaXgnLCAnNicpO1xuc2V0VmFsdWUoJ21pbnVzJywgJy0nKTtcbnNldFZhbHVlKCdvbmUnLCAnMScpO1xuc2V0VmFsdWUoJ3R3bycsICcyJyk7XG5zZXRWYWx1ZSgndGhyZWUnLCAnMycpO1xuc2V0VmFsdWUoJ3BsdXMnLCAnKycpO1xuc2V0VmFsdWUoJ251bGwnLCAnMCcpO1xuc2V0VmFsdWUoJ2NvbW1hJywgJywnKTtcbnNldFZhbHVlKCdldmVubHknLCAnPScpO1xuXG5sZXQgY3VycmVudElucHV0ID0gJzAnO1xubGV0IG9wZXJhdG9yID0gbnVsbDtcbmxldCBwcmV2aW91c0lucHV0ID0gbnVsbDtcbmxldCBpc0NhbGN1bGF0b3JGb2N1c2VkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkodmFsdWUpIHtcbiAgY2FsY3VsYXRvckluZm8udGV4dENvbnRlbnQgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBbGwoKSB7XG4gIGN1cnJlbnRJbnB1dCA9ICcwJztcbiAgb3BlcmF0b3IgPSBudWxsO1xuICBwcmV2aW91c0lucHV0ID0gbnVsbDtcbiAgdXBkYXRlRGlzcGxheShjdXJyZW50SW5wdXQpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMYXN0U3ltYm9sKCkge1xuICBpZiAoY3VycmVudElucHV0Lmxlbmd0aCA+IDEpIHtcbiAgICBjdXJyZW50SW5wdXQgPSBjdXJyZW50SW5wdXQuc2xpY2UoMCwgLTEpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRJbnB1dCA9ICcwJztcbiAgfVxuICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU51bWJlcihudW1iZXIpIHtcbiAgaWYgKGN1cnJlbnRJbnB1dCA9PT0gJzAnKSB7XG4gICAgY3VycmVudElucHV0ID0gbnVtYmVyO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRJbnB1dCArPSBudW1iZXI7XG4gIH1cbiAgdXBkYXRlRGlzcGxheShjdXJyZW50SW5wdXQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVPcGVyYXRvcihvcCkge1xuICBpZiAocHJldmlvdXNJbnB1dCA9PT0gbnVsbCkge1xuICAgIHByZXZpb3VzSW5wdXQgPSBjdXJyZW50SW5wdXQ7XG4gIH0gZWxzZSBpZiAob3BlcmF0b3IpIHtcbiAgICBwcmV2aW91c0lucHV0ID0gU3RyaW5nKGNhbGN1bGF0ZShOdW1iZXIocHJldmlvdXNJbnB1dCksIE51bWJlcihjdXJyZW50SW5wdXQpLCBvcGVyYXRvcikpO1xuICB9XG4gIGN1cnJlbnRJbnB1dCA9ICcwJztcbiAgb3BlcmF0b3IgPSBvcDtcbiAgdXBkYXRlRGlzcGxheShwcmV2aW91c0lucHV0KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlKGEsIGIsIG9wKSB7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICcrJzpcbiAgICAgIHJldHVybiBhICsgYjtcbiAgICBjYXNlICctJzpcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICBjYXNlICd4JzpcbiAgICAgIHJldHVybiBhICogYjtcbiAgICBjYXNlICcvJzpcbiAgICAgIHJldHVybiBhIC8gYjtcbiAgICBjYXNlICclJzpcbiAgICAgIHJldHVybiBhICUgYjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGI7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXF1YWwoKSB7XG4gIGlmIChvcGVyYXRvciAmJiBwcmV2aW91c0lucHV0ICE9PSBudWxsKSB7XG4gICAgY3VycmVudElucHV0ID0gU3RyaW5nKGNhbGN1bGF0ZShOdW1iZXIocHJldmlvdXNJbnB1dCksIE51bWJlcihjdXJyZW50SW5wdXQpLCBvcGVyYXRvcikpO1xuICAgIG9wZXJhdG9yID0gbnVsbDtcbiAgICBwcmV2aW91c0lucHV0ID0gbnVsbDtcbiAgICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRJbnB1dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBjb25zdCB2YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcblxuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FsY3VsYXRvcl9fZWxlbWVudCcpKSB7XG4gICAgYWN0aXZhdGVFbGVtZW50KHRhcmdldCk7XG5cbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdBQyc6XG4gICAgICAgIGNsZWFyQWxsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ0UnOlxuICAgICAgICBkZWxldGVMYXN0U3ltYm9sKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnKyc6XG4gICAgICBjYXNlICctJzpcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgY2FzZSAnLyc6XG4gICAgICBjYXNlICclJzpcbiAgICAgICAgaGFuZGxlT3BlcmF0b3IodmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz0nOlxuICAgICAgICBoYW5kbGVFcXVhbCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJywnOlxuICAgICAgICBoYW5kbGVOdW1iZXIoJy4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgIGhhbmRsZU51bWJlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRXZlbnQpO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gIGlmICghaXNDYWxjdWxhdG9yRm9jdXNlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcblxuICBsZXQgZWxlbWVudCA9IG51bGw7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgIGRlbGV0ZUxhc3RTeW1ib2woKTtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdC1zeW1ib2wnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICBjbGVhckFsbCgpO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhbicpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnKyc6XG4gICAgY2FzZSAnLSc6XG4gICAgY2FzZSAnKic6XG4gICAgY2FzZSAnLyc6XG4gICAgY2FzZSAnJSc6XG4gICAgICBsZXQgb3BlcmF0b3JLZXkgPSBrZXk7XG4gICAgICBpZiAoa2V5ID09PSAnKicpIG9wZXJhdG9yS2V5ID0gJ3gnOyAvLyBSZXBsYWNlICcqJyB3aXRoICd4J1xuICAgICAgaGFuZGxlT3BlcmF0b3Iob3BlcmF0b3JLZXkpO1xuICAgICAgZWxlbWVudCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0b3JfX2VsZW1lbnQnKSkuZmluZChlbCA9PiBlbC50ZXh0Q29udGVudCA9PT0gb3BlcmF0b3JLZXkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRW50ZXInOlxuICAgIGNhc2UgJz0nOlxuICAgICAgaGFuZGxlRXF1YWwoKTtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbmx5Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcuJzpcbiAgICAgIGhhbmRsZU51bWJlcignLicpO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tYScpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICghaXNOYU4oa2V5KSkge1xuICAgICAgICBoYW5kbGVOdW1iZXIoa2V5KTtcbiAgICAgICAgZWxlbWVudCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0b3JfX2VsZW1lbnQnKSkuZmluZChlbCA9PiBlbC50ZXh0Q29udGVudCA9PT0ga2V5KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBhY3RpdmF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn1cblxuY2FsY3VsYXRvci5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgaXNDYWxjdWxhdG9yRm9jdXNlZCA9IHRydWU7XG59KTtcblxuY2FsY3VsYXRvci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICBpc0NhbGN1bGF0b3JGb2N1c2VkID0gZmFsc2U7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleWRvd24pO1xuY2FsY3VsYXRvci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsiLCJpbXBvcnQgeyBjYWxjdWxhdG9yfSBmcm9tIFwiLi9jYWxjdWxhdG9yXCI7XG5pbXBvcnQgeyBibG9ja0luZm8sIGJsb2NrUE5ELCBibG9ja1BWRCB9IGZyb20gXCIuL2Jsb2NrLWluZm9cIjtcbmV4cG9ydCBsZXQgZiA9IDAuOTI7XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWNoZWNrYm94JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBmID0gMC45NTtcbiAgICB9IGVsc2Uge1xuICAgICAgZiA9IDAuOTI7XG4gICAgfVxuICB9KTtcblxuLy8g0KfQtdC60LHQvtC60YEg0L/Qu9C10L3QutCwXG5leHBvcnQgbGV0IGZvcm1hdCA9IDI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXBlQ2hlY2tib3goKSB7XG4gIGNvbnN0IGZvcm1hdFRhcGVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RhcGUnKTtcblxuICBjb25zdCBmb3JtYXRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb3JtYXRUYXBlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19uYW1lJywgJ2Jsb2NrX19uYW1lLWZvcm1hdCcpO1xuICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gJ9Cg0YPQutCw0LInO1xuXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pbnB1dCcpO1xuXG4gIGNvbnN0IGxhYmVsU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG5cbiAgY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0Q2hlY2tib3guaWQgPSAnZm9ybWF0LWNoZWNrYm94JztcbiAgaW5wdXRDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcblxuICBjb25zdCBzcGFuU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuXG4gIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbiAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcik7XG5cbiAgaW5wdXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9ICfQn9C+0LvQvtGC0L3Qvic7XG4gICAgICBmb3JtYXQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gJ9Cg0YPQutCw0LInO1xuICAgICAgZm9ybWF0ID0gMjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmb3JtYXRUYXBlQmxvY2s7XG59XG5cbmNvbnN0IGNoZWNrYm94Q2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1ibG9ja19fY2FsYycpO1xuY29uc3QgY2hlY2tib3hJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWJsb2NrX19pbmZvJyk7XG4vLyBjb25zdCBjYWxjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3InKTtcbi8vIGNvbnN0IGJsb2NrSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1pbmZvJyk7XG5cbmNoZWNrYm94Q2FsYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2FsY3VsYXRvci5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuY2hlY2tib3hJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBibG9ja0luZm8uY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICBibG9ja0luZm8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGJsb2NrUE5ELmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgYmxvY2tQTkQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGJsb2NrUFZELmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgYmxvY2tQVkQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuLypcbmNoZWNrYm94Q2FsYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2FsY3VsYXRvci5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuY2hlY2tib3hDYWxjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoY2FsY3VsYXRvci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgY2FsY3VsYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nLCAnYW5pbWF0ZWRfX3JldmVyc2UnKTtcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XG59IGVsc2Uge1xuICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkX19yZXZlcnNlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWRfX3JldmVyc2UnKTtcbiAgICB9LCAxMDAwKTsgLy8g0LLRgNC10LzRjyDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDQtNC70LjRgtC10LvRjNC90L7RgdGC0Lgg0LDQvdC40LzQsNGG0LjQuFxufVxufSk7Ki8iLCJjb25zdCBkcmFnSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yJyk7XG5sZXQgYWN0aXZlID0gZmFsc2U7XG5sZXQgY3VycmVudFgsIGN1cnJlbnRZLCBpbml0aWFsWCwgaW5pdGlhbFk7XG5sZXQgeE9mZnNldCA9IDAsXG4gIHlPZmZzZXQgPSAwO1xuXG5kcmFnSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnU3RhcnQpO1xuZHJhZ0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdFbmQpO1xuZHJhZ0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZyk7XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gIGluaXRpYWxYID0gZS5jbGllbnRYIC0geE9mZnNldDtcbiAgaW5pdGlhbFkgPSBlLmNsaWVudFkgLSB5T2Zmc2V0O1xuXG4gIGlmIChlLnRhcmdldCA9PT0gZHJhZ0l0ZW0pIHtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGRyYWdFbmQoKSB7XG4vLyAgIGluaXRpYWxYID0gY3VycmVudFg7XG4vLyAgIGluaXRpYWxZID0gY3VycmVudFk7XG5cbi8vICAgYWN0aXZlID0gZmFsc2U7XG4vLyB9XG5cbmZ1bmN0aW9uIGRyYWcoZSkge1xuICBpZiAoYWN0aXZlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY3VycmVudFggPSBlLmNsaWVudFggLSBpbml0aWFsWDtcbiAgICBjdXJyZW50WSA9IGUuY2xpZW50WSAtIGluaXRpYWxZO1xuXG4gICAgeE9mZnNldCA9IGN1cnJlbnRYO1xuICAgIHlPZmZzZXQgPSBjdXJyZW50WTtcblxuICAgIHNldFRyYW5zbGF0ZShjdXJyZW50WCwgY3VycmVudFksIGRyYWdJdGVtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGUoeFBvcywgeVBvcywgZWwpIHtcbiAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3hQb3N9cHgsICR7eVBvc31weClgO1xufVxuXG4vLyDQn9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0L7Qt9C40YbQuNGOINC40LcgbG9jYWxTdG9yYWdlXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzYXZlZFBvc2l0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zaXRpb24nKSk7XG4gIGlmIChzYXZlZFBvc2l0aW9uKSB7XG4gICAgZHJhZ0l0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3NhdmVkUG9zaXRpb24ueH1weCwgJHtzYXZlZFBvc2l0aW9uLnl9cHgpYDtcbiAgICB4T2Zmc2V0ID0gc2F2ZWRQb3NpdGlvbi54O1xuICAgIHlPZmZzZXQgPSBzYXZlZFBvc2l0aW9uLnk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRyYWdFbmQoKSB7XG4gIGluaXRpYWxYID0gY3VycmVudFg7XG4gIGluaXRpYWxZID0gY3VycmVudFk7XG5cbiAgYWN0aXZlID0gZmFsc2U7XG5cbiAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INGC0LXQutGD0YnQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINCyIGxvY2FsU3RvcmFnZVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zaXRpb24nLCBKU09OLnN0cmluZ2lmeSh7IHg6IHhPZmZzZXQsIHk6IHlPZmZzZXQgfSkpO1xufSIsImltcG9ydCB7IGYsIGZvcm1hdCB9IGZyb20gJy4vY2hlY2tib3guanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRVbEVsZW1lbnQobmFtZSwgZHNjLCBpZCwgZm9ybWF0KSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2l0ZW0nKTtcblxuICBjb25zdCBsaURzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpRHNjLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19jb250YWluZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19uYW1lJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19kc2MnKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBkc2M7XG5cbiAgbGlEc2MuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cbiAgY29uc3QgbGlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ251bWJlcic7XG4gIGlucHV0Lm1pbiA9IDE7XG4gIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2lucHV0Jyk7XG5cbiAgbGlWYWx1ZS5hcHBlbmQoaW5wdXQpO1xuICB1bC5hcHBlbmQobGlEc2MsIGxpVmFsdWUpO1xuXG4gIGZvcm1hdCA9PT0gJ3BhY2thZ2UnXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3N0RWxlbWVudChuYW1lLCBpZCwgcGxhY2Vob2xkZXIsIGZvcm1hdCkge1xuICBjb25zdCBpbnB1dENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dENvc3QudHlwZSA9ICdudW1iZXInO1xuICBpbnB1dENvc3QubWluID0gMTtcbiAgaW5wdXRDb3N0LmlkID0gaWQ7XG4gIGlucHV0Q29zdC5yZXF1aXJlZCA9IHRydWU7XG4gIGlucHV0Q29zdC5jbGFzc0xpc3QuYWRkKGBibG9ja19fJHtuYW1lfWApO1xuICBpbnB1dENvc3QucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcblxuICBmb3JtYXQgPT09ICdwYWNrYWdlLXByaWNlJ1xuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChpbnB1dENvc3QpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGlucHV0Q29zdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWNrYWdlSW5mbyhuYW1lLCBkc2MsIGlkLCB1bElkLCBmb3JtYXQpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB1bC5jbGFzc0xpc3QuYWRkKCdibG9ja19faXRlbScsICdibG9ja19faXRlbS1mb290ZXInLCAnaGlkZGVuJyk7XG4gIHVsLmlkID0gdWxJZDtcblxuICBjb25zdCBsaURzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpRHNjLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19jb250YWluZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19uYW1lJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19kc2MnKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBkc2M7XG5cbiAgbGlEc2MuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cbiAgY29uc3QgaW5mb1BhY2thZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZm9QYWNrYWdlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pbmZvJyk7XG4gIGluZm9QYWNrYWdlLmlkID0gaWQ7XG5cbiAgdWwuYXBwZW5kKGxpRHNjLCBpbmZvUGFja2FnZSk7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaWNlSW5mbyhmb3JtYXQsIHR5cGUpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyJyk7XG5cbiAgY29uc3QgY29zdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXJfY29zdCcsICdoaWRkZW4nKTtcbiAgY29zdEVsZW1lbnQuaWQgPSBgZm9vdGVyLWNvc3QtJHt0eXBlfWA7XG5cbiAgY29uc3Qgc2VsbGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNlbGxpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXJfc2VsbGluZycsICdoaWRkZW4nKTtcbiAgc2VsbGluZ0VsZW1lbnQuaWQgPSBgZm9vdGVyLXNlbGxpbmctJHt0eXBlfWA7XG5cbiAgZm9vdGVyLmFwcGVuZChjb3N0RWxlbWVudCwgc2VsbGluZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9maXRFbGVtZW50VGFwZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX3Byb2ZpdCcsICdoaWRkZW4nKTtcbiAgcHJvZml0RWxlbWVudFRhcGUuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9LW1gO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2ZpdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3Rlcl9wcm9maXQnLCAnaGlkZGVuJyk7XG4gIHByb2ZpdEVsZW1lbnQuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9YDtcblxuICBmb3JtYXQgPT09ICdwYWNrYWdlJ1xuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChmb290ZXIsIHByb2ZpdEVsZW1lbnQpXG4gICAgOiBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApXG4gICAgICAgIC5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50VGFwZSwgcHJvZml0RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICB2YWx1ZSxcbiAgdGV4dFNlbGVjdG9yLFxuICB1bFNlbGVjdG9yLFxuICBtdWx0aXBsaWVyID0gMSxcbiAgZGVjaW1hbFBsYWNlcyA9IDIsXG4pIHtcbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRleHRTZWxlY3Rvcik7XG4gIGNvbnN0IHVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWxTZWxlY3Rvcik7XG5cbiAgaWYgKHZhbHVlID4gMCkge1xuICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gKHZhbHVlICogbXVsdGlwbGllcikudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcbiAgICB1bEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgdWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFsbEluZm9QYWNrYWdlKCkge1xuICBsZXQgb25lUGFja2FnZSA9XG4gICAgKHZhbHVlcy53aWR0aCAqIGYgKiAyICogdmFsdWVzLmhlaWdodCAqICh2YWx1ZXMudGhpY2tuZXNzIC8gMTAwMDApKSAvIDEwMDA7XG4gIGxldCBhbGxQYWNrYWdlID0gb25lUGFja2FnZSAqIHZhbHVlcy5jaXJjdWxhdGlvbjtcbiAgbGV0IHRvdGFsUGFja2FnZSA9IHZhbHVlcy53ZWlnaHQgLyBvbmVQYWNrYWdlO1xuICBsZXQgcHJpbWVQcmljZSA9IHZhbHVlcy5jb3N0ICogb25lUGFja2FnZTtcbiAgbGV0IGJ1eVByaWNlID0gdmFsdWVzLnNlbGwgKiBvbmVQYWNrYWdlO1xuICBsZXQgcHJvZml0ID0gKGJ1eVByaWNlIC0gcHJpbWVQcmljZSkgKiB2YWx1ZXMuY2lyY3VsYXRpb247XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKG9uZVBhY2thZ2UsICcjb25lJywgJyN1bE9uZScsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxQYWNrYWdlLCAnI2FsbCcsICcjdWxBbGwnKTtcbiAgdXBkYXRlUGFja2FnZUluZm8odG90YWxQYWNrYWdlLCAnI3RvdGFsJywgJyN1bFRvdGFsJywgMSwgMCk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByaW1lUHJpY2UsICcjZm9vdGVyLWNvc3QtcGFja2FnZScsICcjZm9vdGVyLWNvc3QtcGFja2FnZScpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZSxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXBhY2thZ2UnLFxuICAgICcjZm9vdGVyLXNlbGxpbmctcGFja2FnZScsXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByb2ZpdCwgJyNmb290ZXItcHJvZml0LXBhY2thZ2UnLCAnI2Zvb3Rlci1wcm9maXQtcGFja2FnZScpO1xufVxuXG5mdW5jdGlvbiBhbGxJbmZvVGFwZSgpIHtcbiAgbGV0IG9uZVRhcGUgPVxuICAgICh2YWx1ZXMud2lkdGhUYXBlICogZiAqIGZvcm1hdCAqIDEwMCAqICh2YWx1ZXMudGhpY2tuZXNzVGFwZSAvIDEwMDAwKSkgL1xuICAgIDEwMDA7XG4gIGxldCBhbGxUYXBlID0gb25lVGFwZSAqIHZhbHVlcy5jaXJjdWxhdGlvblRhcGU7XG4gIGxldCB0b3RhbFRhcGUgPSB2YWx1ZXMud2VpZ2h0VGFwZSAvIG9uZVRhcGU7XG4gIGxldCBwcmltZVByaWNlVGFwZSA9IHZhbHVlcy5jb3N0VGFwZSAqIG9uZVRhcGU7XG4gIGxldCBidXlQcmljZVRhcGUgPSB2YWx1ZXMuc2VsbFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgcHJvZml0VGFwZSA9IChidXlQcmljZVRhcGUgLSBwcmltZVByaWNlVGFwZSkgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlOyAvL3x8XG4gIC8vTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtdGFwZVwiKS50ZXh0Q29udGVudCk7XG4gIGxldCBwcm9maXRUYXBlS2cgPSAodmFsdWVzLnNlbGxUYXBlIC0gdmFsdWVzLmNvc3RUYXBlKSAqIHZhbHVlcy53ZWlnaHRUYXBlO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVUYXBlLCAnI29uZS10YXBlJywgJyN1bE9uZS10YXBlJywgMTAwMCk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKGFsbFRhcGUsICcjYWxsLXRhcGUnLCAnI3VsQWxsLXRhcGUnKTtcbiAgdXBkYXRlUGFja2FnZUluZm8odG90YWxUYXBlLCAnI3RvdGFsLXRhcGUnLCAnI3VsVG90YWwtdGFwZScsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlVGFwZSwgJyNmb290ZXItY29zdC10YXBlJywgJyNmb290ZXItY29zdC10YXBlJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICAgIGJ1eVByaWNlVGFwZSxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXRhcGUnLFxuICAgICcjZm9vdGVyLXNlbGxpbmctdGFwZScsXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICAgIHByb2ZpdFRhcGUsXG4gICAgJyNmb290ZXItcHJvZml0LXRhcGUtbScsXG4gICAgJyNmb290ZXItcHJvZml0LXRhcGUtbScsXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByb2ZpdFRhcGVLZywgJyNmb290ZXItcHJvZml0LXRhcGUnLCAnI2Zvb3Rlci1wcm9maXQtdGFwZScpO1xufVxuXG5sZXQgdmFsdWVzID0ge307XG5leHBvcnQgZnVuY3Rpb24gc2V0VmFsdWVzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IE51bWJlcihpbnB1dC52YWx1ZSkgfHwgMDtcbiAgICAgIGFsbEluZm9QYWNrYWdlKCk7XG4gICAgICBhbGxJbmZvVGFwZSgpO1xuICAgIH0pO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5jb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsTnVtYmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vINCf0YDQtdC00L7RgtCy0YDQsNGJ0LDQtdC8INC/0YDQvtC60YDRg9GC0LrRgyDRgdGC0YDQsNC90LjRhtGLXG5cbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZSgnc3RlcCcpKSB8fCAxOyAvLyDQn9C+0LvRg9GH0LDQtdC8INGI0LDQsyDQuNC30LzQtdC90LXQvdC40Y8gKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDEpXG4gICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZSgnbWluJykpIHx8IDA7IC8vINCf0L7Qu9GD0YfQsNC10Lwg0LzQuNC90LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1ICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAwKVxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgICAgIC8vINCf0YDQvtC60YDRg9GC0LrQsCDQstCy0LXRgNGFLCDRg9Cy0LXQu9C40YfQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgICB0aGlzLnZhbHVlID0gTnVtYmVyKHRoaXMudmFsdWUpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyDQn9GA0L7QutGA0YPRgtC60LAg0LLQvdC40LcsINGD0LzQtdC90YzRiNCw0LXQvCDQt9C90LDRh9C10L3QuNC1ICjQtdGB0LvQuCDQsdC+0LvRjNGI0LUg0LjQu9C4INGA0LDQstC90L4g0LzQuNC90LjQvNCw0LvRjNC90L7QvNGDINC30L3QsNGH0LXQvdC40Y4pXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IE1hdGgubWF4KG1pbiwgTnVtYmVyKHRoaXMudmFsdWUpIC0gc3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZXNbaW5wdXQuaWRdID0gTnVtYmVyKGlucHV0LnZhbHVlKSB8fCAwO1xuICAgICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgICBhbGxJbmZvVGFwZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZCcpO1xubGV0IHNxdWFyZXMgPSAzODg2O1xubGV0IGNvbG9ycyA9IFsneWVsbG93JywgJ2RhcmtibHVlJywgJ3B1cnBsZScsICdsaW1lJywgJ3doaXRlJywgJ2dyYXknLCAnZ29sZCcsICdwaW5rJywgJ1NhbG1vbicsICdEZWVwU2t5Qmx1ZScsICdUZWFsJ107XG5mb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXM7IGkrKykge1xuICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNldENvbG9yKTtcbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVDb2xvcik7XG4gIGJvYXJkLmFwcGVuZChzcXVhcmUpO1xufVxuZnVuY3Rpb24gc2V0Q29sb3IoZXZ0KSB7XG4gIGxldCBlbGVtID0gZXZ0LnRhcmdldDtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByYW5kb21Db2xvcigpO1xuICBlbGVtLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMnB4ICcuY29uY2F0KHJhbmRvbUNvbG9yKCksICcsIDAgMCAxMHB4ICcpLmNvbmNhdChyYW5kb21Db2xvcigpKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUNvbG9yKGV2dCkge1xuICBsZXQgZWxlbSA9IGV2dC50YXJnZXQ7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxZDFkMWQxZCc7XG4gIGVsZW0uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggIzAwMCc7XG59XG5sZXQgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Fzcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL2pzL2Jsb2NrLXBhY2thZ2VcIjtcbmltcG9ydCBcIi4vanMvc3F1YXJlXCI7XG5pbXBvcnQgXCIuL2pzL2Jsb2NrLXRhcGVcIjtcbmltcG9ydCBcIi4vanMvY2FsY3VsYXRvclwiO1xuaW1wb3J0IFwiLi9qcy9kcmFnXCI7XG5pbXBvcnQgXCIuL2pzL2Jsb2NrLWluZm9cIjtcbiJdLCJuYW1lcyI6WyJhbGxCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJsb2NrSW5mbyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhcHBlbmQiLCJpbmZvVGl0bGUiLCJ0ZXh0Q29udGVudCIsImluZm9Ec2MiLCJyYWRpb0lucHV0U2hpcnQiLCJ0eXBlIiwibmFtZSIsImlkIiwibGFiZWxTaGlydCIsInNldEF0dHJpYnV0ZSIsInJhZGlvSW5wdXRUYXBlIiwibGFiZWxUYXBlIiwiaW5mb0lucHV0IiwiaW5mb0lucHV0TnVtIiwibWluIiwibWF4Iiwic3RlcCIsInZhbHVlIiwicmFuZ2VJbnB1dCIsInRyYWZmaWNQcmljZSIsInRyYWZmaWNQcmljZUdyZWVuIiwicHJpY2VTaGlydCIsInByaWNlVGFwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVQcmljZXMiLCJOdW1iZXIiLCJ1cGRhdGVSYW5nZUF0dHJpYnV0ZXMiLCJzZWxlY3RlZFJhZGlvIiwic2VsZWN0ZWRWYWx1ZSIsInNldFByaWNlVmFsdWUiLCJncmVlbiIsImhhbmRsZVJhZGlvQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJwcmljZVBhY2thZ2UiLCJibG9ja1BWRCIsInB2ZERzciIsImRzckZvb3RlciIsImlubmVySFRNTCIsImNvbmNhdCIsImJsb2NrUE5EIiwicG5kRHNyIiwiZHNyRm9vdGVyUE5EIiwiY3JlYXRVbEVsZW1lbnQiLCJjcmVhdGVDb3N0RWxlbWVudCIsInBhY2thZ2VJbmZvIiwic2Nyb2xsTnVtYmVyIiwic2V0VmFsdWVzIiwicHJpY2VJbmZvIiwic2VjdGlvbiIsImJsb2NrIiwiYWRkIiwicHJlcGVuZCIsImJsb2NrVGl0bGUiLCJwcmljZU1hdGVyaWFscyIsInRhcGVDaGVja2JveCIsImNhbGN1bGF0b3IiLCJjYWxjdWxhdG9ySW5mbyIsInNldFZhbHVlIiwibmFtZUVsZW1lbnQiLCJjdXJyZW50SW5wdXQiLCJvcGVyYXRvciIsInByZXZpb3VzSW5wdXQiLCJpc0NhbGN1bGF0b3JGb2N1c2VkIiwidXBkYXRlRGlzcGxheSIsImNsZWFyQWxsIiwiZGVsZXRlTGFzdFN5bWJvbCIsImxlbmd0aCIsInNsaWNlIiwiaGFuZGxlTnVtYmVyIiwibnVtYmVyIiwiaGFuZGxlT3BlcmF0b3IiLCJvcCIsIlN0cmluZyIsImNhbGN1bGF0ZSIsImEiLCJiIiwiaGFuZGxlRXF1YWwiLCJhY3RpdmF0ZUVsZW1lbnQiLCJlbGVtZW50Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImhhbmRsZUV2ZW50IiwiY29udGFpbnMiLCJpc05hTiIsImhhbmRsZUtleWRvd24iLCJrZXkiLCJnZXRFbGVtZW50QnlJZCIsIm9wZXJhdG9yS2V5IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbmQiLCJlbCIsImYiLCJjaGVja2VkIiwiZm9ybWF0IiwiZm9ybWF0VGFwZUJsb2NrIiwiZm9ybWF0VGFwZSIsImNoZWNrYm94Q29udGFpbmVyIiwibGFiZWxTd2l0Y2giLCJpbnB1dENoZWNrYm94Iiwic3BhblNsaWRlciIsImNoZWNrYm94Q2FsYyIsImNoZWNrYm94SW5mbyIsInRvZ2dsZSIsImRyYWdJdGVtIiwiYWN0aXZlIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJ4T2Zmc2V0IiwieU9mZnNldCIsImRyYWdTdGFydCIsImRyYWdFbmQiLCJkcmFnIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwicHJldmVudERlZmF1bHQiLCJzZXRUcmFuc2xhdGUiLCJ4UG9zIiwieVBvcyIsInN0eWxlIiwidHJhbnNmb3JtIiwid2luZG93Iiwib25sb2FkIiwic2F2ZWRQb3NpdGlvbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ4IiwieSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkc2MiLCJ1bCIsImxpRHNjIiwidGl0bGUiLCJzdWJ0aXRsZSIsImxpVmFsdWUiLCJpbnB1dCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJpbnB1dENvc3QiLCJ1bElkIiwiaW5mb1BhY2thZ2UiLCJmb290ZXIiLCJjb3N0RWxlbWVudCIsInNlbGxpbmdFbGVtZW50IiwicHJvZml0RWxlbWVudFRhcGUiLCJwcm9maXRFbGVtZW50IiwidXBkYXRlUGFja2FnZUluZm8iLCJ0ZXh0U2VsZWN0b3IiLCJ1bFNlbGVjdG9yIiwibXVsdGlwbGllciIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImRlY2ltYWxQbGFjZXMiLCJ0ZXh0RWxlbWVudCIsInVsRWxlbWVudCIsInRvRml4ZWQiLCJhbGxJbmZvUGFja2FnZSIsIm9uZVBhY2thZ2UiLCJ2YWx1ZXMiLCJ3aWR0aCIsImhlaWdodCIsInRoaWNrbmVzcyIsImFsbFBhY2thZ2UiLCJjaXJjdWxhdGlvbiIsInRvdGFsUGFja2FnZSIsIndlaWdodCIsInByaW1lUHJpY2UiLCJjb3N0IiwiYnV5UHJpY2UiLCJzZWxsIiwicHJvZml0IiwiYWxsSW5mb1RhcGUiLCJvbmVUYXBlIiwid2lkdGhUYXBlIiwidGhpY2tuZXNzVGFwZSIsImFsbFRhcGUiLCJjaXJjdWxhdGlvblRhcGUiLCJ0b3RhbFRhcGUiLCJ3ZWlnaHRUYXBlIiwicHJpbWVQcmljZVRhcGUiLCJjb3N0VGFwZSIsImJ1eVByaWNlVGFwZSIsInNlbGxUYXBlIiwicHJvZml0VGFwZSIsInByb2ZpdFRhcGVLZyIsImZvckVhY2giLCJzZWxlY3QiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImRlbHRhWSIsIk1hdGgiLCJib2FyZCIsInNxdWFyZXMiLCJjb2xvcnMiLCJpIiwic3F1YXJlIiwic2V0Q29sb3IiLCJyZW1vdmVDb2xvciIsImV2dCIsImVsZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJyYW5kb21Db2xvciIsImJveFNoYWRvdyIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==