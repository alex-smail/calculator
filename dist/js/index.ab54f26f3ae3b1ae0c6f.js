/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
var calc = document.querySelector('.calculator');
checkboxCalc.addEventListener('click', function () {
  _calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.classList.toggle('visible');
  _calculator__WEBPACK_IMPORTED_MODULE_0__.calculator.classList.toggle('hidden');
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






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vLy4vcGFnZXMvaW5kZXgvanMvYmxvY2stdGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9jYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2RyYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvc3F1YXJlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L3Nhc3MvaW5kZXguc2Nzcz8zZWRhIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdFVsRWxlbWVudCxcbiAgY3JlYXRlQ29zdEVsZW1lbnQsXG4gIHBhY2thZ2VJbmZvLFxuICBzY3JvbGxOdW1iZXIsXG4gIHNldFZhbHVlcyxcbiAgcHJpY2VJbmZvLFxufSBmcm9tICcuL2Z1bmN0aW9uLmpzJztcbi8vINCR0LvQvtC6INCk0LDRgdC+0LLQutCwXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJywgJ3BhY2thZ2UnKTtcbmJsb2NrLmlkID0gJ3BhY2thZ2UnO1xuXG5zZWN0aW9uLnByZXBlbmQoYmxvY2spO1xuXG5jb25zdCBibG9ja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RpdGxlJyk7XG5ibG9ja1RpdGxlLnRleHRDb250ZW50ID0gJ9Ck0LDRgdC+0LLQutCwJztcblxuYmxvY2suYXBwZW5kKGJsb2NrVGl0bGUpO1xuXG5jcmVhdFVsRWxlbWVudCgn0KjQuNGA0LjQvdCwJywgJ9GB0LwuJywgJ3dpZHRoJywgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KCfQktGL0YHQvtGC0LAnLCAn0YHQvC4nLCAnaGVpZ2h0JywgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KCfQotC+0LvRidC40L3QsCcsICfQvNC60LwuJywgJ3RoaWNrbmVzcycsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JrQvtC70LjRh9C10YHRgtCy0L4nLCAn0YjRgi4nLCAnY2lyY3VsYXRpb24nLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9CS0LXRgScsICfQutCzLicsICd3ZWlnaHQnLCAncGFja2FnZScpO1xuXG5leHBvcnQgY29uc3QgcHJpY2VNYXRlcmlhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaWNlTWF0ZXJpYWxzLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19wcmljZS1tYXRlcmlhbHMnKTtcbnByaWNlTWF0ZXJpYWxzLmlkID0gJ3BhY2thZ2UtcHJpY2UnO1xuXG5ibG9jay5hcHBlbmQocHJpY2VNYXRlcmlhbHMpO1xuXG5jcmVhdGVDb3N0RWxlbWVudCgnY29zdC1tYXRlcmlhbHMnLCAnY29zdCcsICfQodC10LHQtdGB0YIuLi4nLCAncGFja2FnZS1wcmljZScpO1xuY3JlYXRlQ29zdEVsZW1lbnQoJ3NlbGxpbmctcHJpY2UnLCAnc2VsbCcsICfQn9GA0L7QtNCw0LbQsCcsICdwYWNrYWdlLXByaWNlJyk7XG5cbnBhY2thZ2VJbmZvKCfQktC10YEg0L/QsNC60LXRgtCwJywgJ9CzLicsICdvbmUnLCAndWxPbmUnLCAncGFja2FnZScpO1xucGFja2FnZUluZm8oJ9CS0LXRgSDQv9Cw0YDRgtC40LgnLCAn0LrQsy4nLCAnYWxsJywgJ3VsQWxsJywgJ3BhY2thZ2UnKTtcbnBhY2thZ2VJbmZvKCfQmtC+0Lst0LLQviDQv9Cw0LrQtdGC0L7QsicsICfRiNGCLicsICd0b3RhbCcsICd1bFRvdGFsJywgJ3BhY2thZ2UnKTtcblxucHJpY2VJbmZvKCdwYWNrYWdlJywgJ3BhY2thZ2UnKTtcbnNjcm9sbE51bWJlcigpO1xuc2V0VmFsdWVzKCk7XG5cbi8vINCR0LvQvtC6INCf0LvQtdC90LrQsFxuIiwiaW1wb3J0IHtcbiAgY3JlYXRVbEVsZW1lbnQsXG4gIGNyZWF0ZUNvc3RFbGVtZW50LFxuICBwYWNrYWdlSW5mbyxcbiAgc2Nyb2xsTnVtYmVyLFxuICBzZXRWYWx1ZXMsXG4gIHByaWNlSW5mbyxcbn0gZnJvbSAnLi9mdW5jdGlvbi5qcyc7XG5pbXBvcnQgeyB0YXBlQ2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94LmpzJztcbi8vINCR0LvQvtC6INCf0LvQtdC90LrQsFxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycsICd0YXBlJyk7IC8vLCAndGFwZSdcbmJsb2NrLmlkID0gJ3RhcGUnO1xuXG5zZWN0aW9uLmFwcGVuZChibG9jayk7XG5cbmNvbnN0IGJsb2NrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuYmxvY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fdGl0bGUnKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSAn0J/Qu9C10L3QutCwJztcblxuYmxvY2suYXBwZW5kKGJsb2NrVGl0bGUsIHRhcGVDaGVja2JveCgpKTtcblxuY3JlYXRVbEVsZW1lbnQoJ9Co0LjRgNC40L3QsCcsICfRgdC8LicsICd3aWR0aFRhcGUnLCAndGFwZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9Ci0L7Qu9GJ0LjQvdCwJywgJ9C80LrQvC4nLCAndGhpY2tuZXNzVGFwZScsICd0YXBlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JrQvtC70LjRh9C10YHRgtCy0L4nLCAn0LwuJywgJ2NpcmN1bGF0aW9uVGFwZScsICd0YXBlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JLQtdGBJywgJ9C60LMuJywgJ3dlaWdodFRhcGUnLCAndGFwZScpO1xuXG5jb25zdCBwcmljZU1hdGVyaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJpY2VNYXRlcmlhbHMuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3ByaWNlLW1hdGVyaWFscycpO1xucHJpY2VNYXRlcmlhbHMuaWQgPSAndGFwZS1wcmljZSc7XG5cbmJsb2NrLmFwcGVuZChwcmljZU1hdGVyaWFscyk7XG5cbmNyZWF0ZUNvc3RFbGVtZW50KCdjb3N0LW1hdGVyaWFscycsICdjb3N0VGFwZScsICfQodC10LHQtdGB0YIuLi4nLCAndGFwZS1wcmljZScpO1xuY3JlYXRlQ29zdEVsZW1lbnQoJ3NlbGxpbmctcHJpY2UnLCAnc2VsbFRhcGUnLCAn0J/RgNC+0LTQsNC20LAnLCAndGFwZS1wcmljZScpO1xuXG5wYWNrYWdlSW5mbygn0JLQtdGBINC80LXRgtGA0LAnLCAn0LMuJywgJ29uZS10YXBlJywgJ3VsT25lLXRhcGUnLCAndGFwZScpO1xucGFja2FnZUluZm8oJ9CS0LXRgSDQv9Cw0YDRgtC40LgnLCAn0LrQsy4nLCAnYWxsLXRhcGUnLCAndWxBbGwtdGFwZScsICd0YXBlJyk7XG5wYWNrYWdlSW5mbygn0JrQvtC7LdCy0L4g0LzQtdGC0YDQvtCyJywgJ9C8LicsICd0b3RhbC10YXBlJywgJ3VsVG90YWwtdGFwZScsICd0YXBlJyk7XG5cbnByaWNlSW5mbygndGFwZScsICd0YXBlJyk7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuIiwiY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZCgnY2FsY3VsYXRvcicpO1xuY2FsY3VsYXRvci5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTsgLy8g0J/QvtC30LLQvtC70Y/QtdGCINCx0LvQvtC60YMg0L/QvtC70YPRh9C40YLRjCDRhNC+0LrRg9GBXG5cbnNlY3Rpb24uYXBwZW5kKGNhbGN1bGF0b3IpO1xuXG5jb25zdCBjYWxjdWxhdG9ySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FsY3VsYXRvckluZm8uY2xhc3NMaXN0LmFkZCgnY2FsY3VsYXRvcl9faW5mbycpO1xuY2FsY3VsYXRvckluZm8udGV4dENvbnRlbnQgPSAwO1xuY2FsY3VsYXRvci5hcHBlbmQoY2FsY3VsYXRvckluZm8pO1xuXG5mdW5jdGlvbiBzZXRWYWx1ZShpZCwgbmFtZUVsZW1lbnQpIHtcbiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFsdWUuY2xhc3NMaXN0LmFkZCgnY2FsY3VsYXRvcl9fZWxlbWVudCcpO1xuICB2YWx1ZS5pZCA9IGlkO1xuICB2YWx1ZS50ZXh0Q29udGVudCA9IG5hbWVFbGVtZW50O1xuXG4gIGNhbGN1bGF0b3IuYXBwZW5kKHZhbHVlKTtcbn1cblxuc2V0VmFsdWUoJ2NsZWFuJywgJ0FDJyk7XG5zZXRWYWx1ZSgnbGFzdC1zeW1ib2wnLCAnQ0UnKTtcbnNldFZhbHVlKCdwZXJjZW50JywgJyUnKTtcbnNldFZhbHVlKCdkaXZpc2lvbicsICcvJyk7XG5zZXRWYWx1ZSgnc2V2ZW4nLCAnNycpO1xuc2V0VmFsdWUoJ2VpZ2h0JywgJzgnKTtcbnNldFZhbHVlKCduaW5lJywgJzknKTtcbnNldFZhbHVlKCdtdWx0aXBseScsICd4Jyk7XG5zZXRWYWx1ZSgnZm91cicsICc0Jyk7XG5zZXRWYWx1ZSgnZml2ZScsICc1Jyk7XG5zZXRWYWx1ZSgnc2l4JywgJzYnKTtcbnNldFZhbHVlKCdtaW51cycsICctJyk7XG5zZXRWYWx1ZSgnb25lJywgJzEnKTtcbnNldFZhbHVlKCd0d28nLCAnMicpO1xuc2V0VmFsdWUoJ3RocmVlJywgJzMnKTtcbnNldFZhbHVlKCdwbHVzJywgJysnKTtcbnNldFZhbHVlKCdudWxsJywgJzAnKTtcbnNldFZhbHVlKCdjb21tYScsICcsJyk7XG5zZXRWYWx1ZSgnZXZlbmx5JywgJz0nKTtcblxubGV0IGN1cnJlbnRJbnB1dCA9ICcwJztcbmxldCBvcGVyYXRvciA9IG51bGw7XG5sZXQgcHJldmlvdXNJbnB1dCA9IG51bGw7XG5sZXQgaXNDYWxjdWxhdG9yRm9jdXNlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KHZhbHVlKSB7XG4gIGNhbGN1bGF0b3JJbmZvLnRleHRDb250ZW50ID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICBjdXJyZW50SW5wdXQgPSAnMCc7XG4gIG9wZXJhdG9yID0gbnVsbDtcbiAgcHJldmlvdXNJbnB1dCA9IG51bGw7XG4gIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGFzdFN5bWJvbCgpIHtcbiAgaWYgKGN1cnJlbnRJbnB1dC5sZW5ndGggPiAxKSB7XG4gICAgY3VycmVudElucHV0ID0gY3VycmVudElucHV0LnNsaWNlKDAsIC0xKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SW5wdXQgPSAnMCc7XG4gIH1cbiAgdXBkYXRlRGlzcGxheShjdXJyZW50SW5wdXQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOdW1iZXIobnVtYmVyKSB7XG4gIGlmIChjdXJyZW50SW5wdXQgPT09ICcwJykge1xuICAgIGN1cnJlbnRJbnB1dCA9IG51bWJlcjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SW5wdXQgKz0gbnVtYmVyO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3BlcmF0b3Iob3ApIHtcbiAgaWYgKHByZXZpb3VzSW5wdXQgPT09IG51bGwpIHtcbiAgICBwcmV2aW91c0lucHV0ID0gY3VycmVudElucHV0O1xuICB9IGVsc2UgaWYgKG9wZXJhdG9yKSB7XG4gICAgcHJldmlvdXNJbnB1dCA9IFN0cmluZyhjYWxjdWxhdGUoTnVtYmVyKHByZXZpb3VzSW5wdXQpLCBOdW1iZXIoY3VycmVudElucHV0KSwgb3BlcmF0b3IpKTtcbiAgfVxuICBjdXJyZW50SW5wdXQgPSAnMCc7XG4gIG9wZXJhdG9yID0gb3A7XG4gIHVwZGF0ZURpc3BsYXkocHJldmlvdXNJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShhLCBiLCBvcCkge1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgY2FzZSAnLSc6XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgY2FzZSAneCc6XG4gICAgICByZXR1cm4gYSAqIGI7XG4gICAgY2FzZSAnLyc6XG4gICAgICByZXR1cm4gYSAvIGI7XG4gICAgY2FzZSAnJSc6XG4gICAgICByZXR1cm4gYSAlIGI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVxdWFsKCkge1xuICBpZiAob3BlcmF0b3IgJiYgcHJldmlvdXNJbnB1dCAhPT0gbnVsbCkge1xuICAgIGN1cnJlbnRJbnB1dCA9IFN0cmluZyhjYWxjdWxhdGUoTnVtYmVyKHByZXZpb3VzSW5wdXQpLCBOdW1iZXIoY3VycmVudElucHV0KSwgb3BlcmF0b3IpKTtcbiAgICBvcGVyYXRvciA9IG51bGw7XG4gICAgcHJldmlvdXNJbnB1dCA9IG51bGw7XG4gICAgdXBkYXRlRGlzcGxheShjdXJyZW50SW5wdXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlRWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgY29uc3QgdmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbGN1bGF0b3JfX2VsZW1lbnQnKSkge1xuICAgIGFjdGl2YXRlRWxlbWVudCh0YXJnZXQpO1xuXG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnQUMnOlxuICAgICAgICBjbGVhckFsbCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NFJzpcbiAgICAgICAgZGVsZXRlTGFzdFN5bWJvbCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJysnOlxuICAgICAgY2FzZSAnLSc6XG4gICAgICBjYXNlICd4JzpcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgY2FzZSAnJSc6XG4gICAgICAgIGhhbmRsZU9wZXJhdG9yKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc9JzpcbiAgICAgICAgaGFuZGxlRXF1YWwoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcsJzpcbiAgICAgICAgaGFuZGxlTnVtYmVyKCcuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICBoYW5kbGVOdW1iZXIodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV2ZW50KTtcblxuZnVuY3Rpb24gaGFuZGxlS2V5ZG93bihldmVudCkge1xuICBpZiAoIWlzQ2FsY3VsYXRvckZvY3VzZWQpIHJldHVybjtcblxuICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ0JhY2tzcGFjZSc6XG4gICAgICBkZWxldGVMYXN0U3ltYm9sKCk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3Qtc3ltYm9sJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgY2xlYXJBbGwoKTtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYW4nKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJysnOlxuICAgIGNhc2UgJy0nOlxuICAgIGNhc2UgJyonOlxuICAgIGNhc2UgJy8nOlxuICAgIGNhc2UgJyUnOlxuICAgICAgbGV0IG9wZXJhdG9yS2V5ID0ga2V5O1xuICAgICAgaWYgKGtleSA9PT0gJyonKSBvcGVyYXRvcktleSA9ICd4JzsgLy8gUmVwbGFjZSAnKicgd2l0aCAneCdcbiAgICAgIGhhbmRsZU9wZXJhdG9yKG9wZXJhdG9yS2V5KTtcbiAgICAgIGVsZW1lbnQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdG9yX19lbGVtZW50JykpLmZpbmQoZWwgPT4gZWwudGV4dENvbnRlbnQgPT09IG9wZXJhdG9yS2V5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VudGVyJzpcbiAgICBjYXNlICc9JzpcbiAgICAgIGhhbmRsZUVxdWFsKCk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW5seScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLic6XG4gICAgICBoYW5kbGVOdW1iZXIoJy4nKTtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWEnKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoIWlzTmFOKGtleSkpIHtcbiAgICAgICAgaGFuZGxlTnVtYmVyKGtleSk7XG4gICAgICAgIGVsZW1lbnQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdG9yX19lbGVtZW50JykpLmZpbmQoZWwgPT4gZWwudGV4dENvbnRlbnQgPT09IGtleSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmIChlbGVtZW50KSB7XG4gICAgYWN0aXZhdGVFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59XG5cbmNhbGN1bGF0b3IuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gIGlzQ2FsY3VsYXRvckZvY3VzZWQgPSB0cnVlO1xufSk7XG5cbmNhbGN1bGF0b3IuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgaXNDYWxjdWxhdG9yRm9jdXNlZCA9IGZhbHNlO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlkb3duKTtcbmNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7IiwiaW1wb3J0IHsgY2FsY3VsYXRvciB9IGZyb20gXCIuL2NhbGN1bGF0b3JcIjtcbmV4cG9ydCBsZXQgZiA9IDAuOTI7XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWNoZWNrYm94JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBmID0gMC45NTtcbiAgICB9IGVsc2Uge1xuICAgICAgZiA9IDAuOTI7XG4gICAgfVxuICB9KTtcblxuLy8g0KfQtdC60LHQvtC60YEg0L/Qu9C10L3QutCwXG5leHBvcnQgbGV0IGZvcm1hdCA9IDI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXBlQ2hlY2tib3goKSB7XG4gIGNvbnN0IGZvcm1hdFRhcGVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RhcGUnKTtcblxuICBjb25zdCBmb3JtYXRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb3JtYXRUYXBlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19uYW1lJywgJ2Jsb2NrX19uYW1lLWZvcm1hdCcpO1xuICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gJ9Cg0YPQutCw0LInO1xuXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pbnB1dCcpO1xuXG4gIGNvbnN0IGxhYmVsU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG5cbiAgY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0Q2hlY2tib3guaWQgPSAnZm9ybWF0LWNoZWNrYm94JztcbiAgaW5wdXRDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcblxuICBjb25zdCBzcGFuU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuXG4gIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbiAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcik7XG5cbiAgaW5wdXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9ICfQn9C+0LvQvtGC0L3Qvic7XG4gICAgICBmb3JtYXQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gJ9Cg0YPQutCw0LInO1xuICAgICAgZm9ybWF0ID0gMjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmb3JtYXRUYXBlQmxvY2s7XG59XG5cbmNvbnN0IGNoZWNrYm94Q2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1ibG9ja19fY2FsYycpO1xuY29uc3QgY2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yJyk7XG5cbmNoZWNrYm94Q2FsYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2FsY3VsYXRvci5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuLypcbmNoZWNrYm94Q2FsYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2FsY3VsYXRvci5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxuY2hlY2tib3hDYWxjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoY2FsY3VsYXRvci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgY2FsY3VsYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nLCAnYW5pbWF0ZWRfX3JldmVyc2UnKTtcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XG59IGVsc2Uge1xuICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkX19yZXZlcnNlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWRfX3JldmVyc2UnKTtcbiAgICB9LCAxMDAwKTsgLy8g0LLRgNC10LzRjyDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDQtNC70LjRgtC10LvRjNC90L7RgdGC0Lgg0LDQvdC40LzQsNGG0LjQuFxufVxufSk7Ki8iLCJjb25zdCBkcmFnSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yJyk7XG5sZXQgYWN0aXZlID0gZmFsc2U7XG5sZXQgY3VycmVudFgsIGN1cnJlbnRZLCBpbml0aWFsWCwgaW5pdGlhbFk7XG5sZXQgeE9mZnNldCA9IDAsXG4gIHlPZmZzZXQgPSAwO1xuXG5kcmFnSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnU3RhcnQpO1xuZHJhZ0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyYWdFbmQpO1xuZHJhZ0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZyk7XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gIGluaXRpYWxYID0gZS5jbGllbnRYIC0geE9mZnNldDtcbiAgaW5pdGlhbFkgPSBlLmNsaWVudFkgLSB5T2Zmc2V0O1xuXG4gIGlmIChlLnRhcmdldCA9PT0gZHJhZ0l0ZW0pIHtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGRyYWdFbmQoKSB7XG4vLyAgIGluaXRpYWxYID0gY3VycmVudFg7XG4vLyAgIGluaXRpYWxZID0gY3VycmVudFk7XG5cbi8vICAgYWN0aXZlID0gZmFsc2U7XG4vLyB9XG5cbmZ1bmN0aW9uIGRyYWcoZSkge1xuICBpZiAoYWN0aXZlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY3VycmVudFggPSBlLmNsaWVudFggLSBpbml0aWFsWDtcbiAgICBjdXJyZW50WSA9IGUuY2xpZW50WSAtIGluaXRpYWxZO1xuXG4gICAgeE9mZnNldCA9IGN1cnJlbnRYO1xuICAgIHlPZmZzZXQgPSBjdXJyZW50WTtcblxuICAgIHNldFRyYW5zbGF0ZShjdXJyZW50WCwgY3VycmVudFksIGRyYWdJdGVtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGUoeFBvcywgeVBvcywgZWwpIHtcbiAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3hQb3N9cHgsICR7eVBvc31weClgO1xufVxuXG4vLyDQn9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0L7Qt9C40YbQuNGOINC40LcgbG9jYWxTdG9yYWdlXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzYXZlZFBvc2l0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zaXRpb24nKSk7XG4gIGlmIChzYXZlZFBvc2l0aW9uKSB7XG4gICAgZHJhZ0l0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3NhdmVkUG9zaXRpb24ueH1weCwgJHtzYXZlZFBvc2l0aW9uLnl9cHgpYDtcbiAgICB4T2Zmc2V0ID0gc2F2ZWRQb3NpdGlvbi54O1xuICAgIHlPZmZzZXQgPSBzYXZlZFBvc2l0aW9uLnk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRyYWdFbmQoKSB7XG4gIGluaXRpYWxYID0gY3VycmVudFg7XG4gIGluaXRpYWxZID0gY3VycmVudFk7XG5cbiAgYWN0aXZlID0gZmFsc2U7XG5cbiAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INGC0LXQutGD0YnQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINCyIGxvY2FsU3RvcmFnZVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zaXRpb24nLCBKU09OLnN0cmluZ2lmeSh7IHg6IHhPZmZzZXQsIHk6IHlPZmZzZXQgfSkpO1xufSIsImltcG9ydCB7IGYsIGZvcm1hdCB9IGZyb20gJy4vY2hlY2tib3guanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRVbEVsZW1lbnQobmFtZSwgZHNjLCBpZCwgZm9ybWF0KSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2l0ZW0nKTtcblxuICBjb25zdCBsaURzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpRHNjLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19jb250YWluZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19uYW1lJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19kc2MnKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBkc2M7XG5cbiAgbGlEc2MuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cbiAgY29uc3QgbGlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gJ251bWJlcic7XG4gIGlucHV0Lm1pbiA9IDE7XG4gIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2lucHV0Jyk7XG5cbiAgbGlWYWx1ZS5hcHBlbmQoaW5wdXQpO1xuICB1bC5hcHBlbmQobGlEc2MsIGxpVmFsdWUpO1xuXG4gIGZvcm1hdCA9PT0gJ3BhY2thZ2UnXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3N0RWxlbWVudChuYW1lLCBpZCwgcGxhY2Vob2xkZXIsIGZvcm1hdCkge1xuICBjb25zdCBpbnB1dENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dENvc3QudHlwZSA9ICdudW1iZXInO1xuICBpbnB1dENvc3QubWluID0gMTtcbiAgaW5wdXRDb3N0LmlkID0gaWQ7XG4gIGlucHV0Q29zdC5yZXF1aXJlZCA9IHRydWU7XG4gIGlucHV0Q29zdC5jbGFzc0xpc3QuYWRkKGBibG9ja19fJHtuYW1lfWApO1xuICBpbnB1dENvc3QucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcblxuICBmb3JtYXQgPT09ICdwYWNrYWdlLXByaWNlJ1xuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChpbnB1dENvc3QpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGlucHV0Q29zdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWNrYWdlSW5mbyhuYW1lLCBkc2MsIGlkLCB1bElkLCBmb3JtYXQpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB1bC5jbGFzc0xpc3QuYWRkKCdibG9ja19faXRlbScsICdibG9ja19faXRlbS1mb290ZXInLCAnaGlkZGVuJyk7XG4gIHVsLmlkID0gdWxJZDtcblxuICBjb25zdCBsaURzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpRHNjLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19jb250YWluZXInKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19uYW1lJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19kc2MnKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBkc2M7XG5cbiAgbGlEc2MuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cbiAgY29uc3QgaW5mb1BhY2thZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZm9QYWNrYWdlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pbmZvJyk7XG4gIGluZm9QYWNrYWdlLmlkID0gaWQ7XG5cbiAgdWwuYXBwZW5kKGxpRHNjLCBpbmZvUGFja2FnZSk7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaWNlSW5mbyhmb3JtYXQsIHR5cGUpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyJyk7XG5cbiAgY29uc3QgY29zdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXJfY29zdCcsICdoaWRkZW4nKTtcbiAgY29zdEVsZW1lbnQuaWQgPSBgZm9vdGVyLWNvc3QtJHt0eXBlfWA7XG5cbiAgY29uc3Qgc2VsbGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNlbGxpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXJfc2VsbGluZycsICdoaWRkZW4nKTtcbiAgc2VsbGluZ0VsZW1lbnQuaWQgPSBgZm9vdGVyLXNlbGxpbmctJHt0eXBlfWA7XG5cbiAgZm9vdGVyLmFwcGVuZChjb3N0RWxlbWVudCwgc2VsbGluZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9maXRFbGVtZW50VGFwZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX3Byb2ZpdCcsICdoaWRkZW4nKTtcbiAgcHJvZml0RWxlbWVudFRhcGUuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9LW1gO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2ZpdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3Rlcl9wcm9maXQnLCAnaGlkZGVuJyk7XG4gIHByb2ZpdEVsZW1lbnQuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9YDtcblxuICBmb3JtYXQgPT09ICdwYWNrYWdlJ1xuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChmb290ZXIsIHByb2ZpdEVsZW1lbnQpXG4gICAgOiBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApXG4gICAgICAgIC5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50VGFwZSwgcHJvZml0RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICB2YWx1ZSxcbiAgdGV4dFNlbGVjdG9yLFxuICB1bFNlbGVjdG9yLFxuICBtdWx0aXBsaWVyID0gMSxcbiAgZGVjaW1hbFBsYWNlcyA9IDIsXG4pIHtcbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRleHRTZWxlY3Rvcik7XG4gIGNvbnN0IHVsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWxTZWxlY3Rvcik7XG5cbiAgaWYgKHZhbHVlID4gMCkge1xuICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gKHZhbHVlICogbXVsdGlwbGllcikudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcbiAgICB1bEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgdWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFsbEluZm9QYWNrYWdlKCkge1xuICBsZXQgb25lUGFja2FnZSA9XG4gICAgKHZhbHVlcy53aWR0aCAqIGYgKiAyICogdmFsdWVzLmhlaWdodCAqICh2YWx1ZXMudGhpY2tuZXNzIC8gMTAwMDApKSAvIDEwMDA7XG4gIGxldCBhbGxQYWNrYWdlID0gb25lUGFja2FnZSAqIHZhbHVlcy5jaXJjdWxhdGlvbjtcbiAgbGV0IHRvdGFsUGFja2FnZSA9IHZhbHVlcy53ZWlnaHQgLyBvbmVQYWNrYWdlO1xuICBsZXQgcHJpbWVQcmljZSA9IHZhbHVlcy5jb3N0ICogb25lUGFja2FnZTtcbiAgbGV0IGJ1eVByaWNlID0gdmFsdWVzLnNlbGwgKiBvbmVQYWNrYWdlO1xuICBsZXQgcHJvZml0ID0gKGJ1eVByaWNlIC0gcHJpbWVQcmljZSkgKiB2YWx1ZXMuY2lyY3VsYXRpb247XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKG9uZVBhY2thZ2UsICcjb25lJywgJyN1bE9uZScsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxQYWNrYWdlLCAnI2FsbCcsICcjdWxBbGwnKTtcbiAgdXBkYXRlUGFja2FnZUluZm8odG90YWxQYWNrYWdlLCAnI3RvdGFsJywgJyN1bFRvdGFsJywgMSwgMCk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByaW1lUHJpY2UsICcjZm9vdGVyLWNvc3QtcGFja2FnZScsICcjZm9vdGVyLWNvc3QtcGFja2FnZScpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZSxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXBhY2thZ2UnLFxuICAgICcjZm9vdGVyLXNlbGxpbmctcGFja2FnZScsXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByb2ZpdCwgJyNmb290ZXItcHJvZml0LXBhY2thZ2UnLCAnI2Zvb3Rlci1wcm9maXQtcGFja2FnZScpO1xufVxuXG5mdW5jdGlvbiBhbGxJbmZvVGFwZSgpIHtcbiAgbGV0IG9uZVRhcGUgPVxuICAgICh2YWx1ZXMud2lkdGhUYXBlICogZiAqIGZvcm1hdCAqIDEwMCAqICh2YWx1ZXMudGhpY2tuZXNzVGFwZSAvIDEwMDAwKSkgL1xuICAgIDEwMDA7XG4gIGxldCBhbGxUYXBlID0gb25lVGFwZSAqIHZhbHVlcy5jaXJjdWxhdGlvblRhcGU7XG4gIGxldCB0b3RhbFRhcGUgPSB2YWx1ZXMud2VpZ2h0VGFwZSAvIG9uZVRhcGU7XG4gIGxldCBwcmltZVByaWNlVGFwZSA9IHZhbHVlcy5jb3N0VGFwZSAqIG9uZVRhcGU7XG4gIGxldCBidXlQcmljZVRhcGUgPSB2YWx1ZXMuc2VsbFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgcHJvZml0VGFwZSA9IChidXlQcmljZVRhcGUgLSBwcmltZVByaWNlVGFwZSkgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlOyAvL3x8XG4gIC8vTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtdGFwZVwiKS50ZXh0Q29udGVudCk7XG4gIGxldCBwcm9maXRUYXBlS2cgPSAodmFsdWVzLnNlbGxUYXBlIC0gdmFsdWVzLmNvc3RUYXBlKSAqIHZhbHVlcy53ZWlnaHRUYXBlO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVUYXBlLCAnI29uZS10YXBlJywgJyN1bE9uZS10YXBlJywgMTAwMCk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKGFsbFRhcGUsICcjYWxsLXRhcGUnLCAnI3VsQWxsLXRhcGUnKTtcbiAgdXBkYXRlUGFja2FnZUluZm8odG90YWxUYXBlLCAnI3RvdGFsLXRhcGUnLCAnI3VsVG90YWwtdGFwZScsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlVGFwZSwgJyNmb290ZXItY29zdC10YXBlJywgJyNmb290ZXItY29zdC10YXBlJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICAgIGJ1eVByaWNlVGFwZSxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXRhcGUnLFxuICAgICcjZm9vdGVyLXNlbGxpbmctdGFwZScsXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICAgIHByb2ZpdFRhcGUsXG4gICAgJyNmb290ZXItcHJvZml0LXRhcGUtbScsXG4gICAgJyNmb290ZXItcHJvZml0LXRhcGUtbScsXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByb2ZpdFRhcGVLZywgJyNmb290ZXItcHJvZml0LXRhcGUnLCAnI2Zvb3Rlci1wcm9maXQtdGFwZScpO1xufVxuXG5sZXQgdmFsdWVzID0ge307XG5leHBvcnQgZnVuY3Rpb24gc2V0VmFsdWVzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IE51bWJlcihpbnB1dC52YWx1ZSkgfHwgMDtcbiAgICAgIGFsbEluZm9QYWNrYWdlKCk7XG4gICAgICBhbGxJbmZvVGFwZSgpO1xuICAgIH0pO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5jb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsTnVtYmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vINCf0YDQtdC00L7RgtCy0YDQsNGJ0LDQtdC8INC/0YDQvtC60YDRg9GC0LrRgyDRgdGC0YDQsNC90LjRhtGLXG5cbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZSgnc3RlcCcpKSB8fCAxOyAvLyDQn9C+0LvRg9GH0LDQtdC8INGI0LDQsyDQuNC30LzQtdC90LXQvdC40Y8gKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDEpXG4gICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZSgnbWluJykpIHx8IDA7IC8vINCf0L7Qu9GD0YfQsNC10Lwg0LzQuNC90LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1ICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAwKVxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgICAgIC8vINCf0YDQvtC60YDRg9GC0LrQsCDQstCy0LXRgNGFLCDRg9Cy0LXQu9C40YfQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgICB0aGlzLnZhbHVlID0gTnVtYmVyKHRoaXMudmFsdWUpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyDQn9GA0L7QutGA0YPRgtC60LAg0LLQvdC40LcsINGD0LzQtdC90YzRiNCw0LXQvCDQt9C90LDRh9C10L3QuNC1ICjQtdGB0LvQuCDQsdC+0LvRjNGI0LUg0LjQu9C4INGA0LDQstC90L4g0LzQuNC90LjQvNCw0LvRjNC90L7QvNGDINC30L3QsNGH0LXQvdC40Y4pXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IE1hdGgubWF4KG1pbiwgTnVtYmVyKHRoaXMudmFsdWUpIC0gc3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZXNbaW5wdXQuaWRdID0gTnVtYmVyKGlucHV0LnZhbHVlKSB8fCAwO1xuICAgICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgICBhbGxJbmZvVGFwZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZCcpO1xubGV0IHNxdWFyZXMgPSAzODg2O1xubGV0IGNvbG9ycyA9IFsneWVsbG93JywgJ2RhcmtibHVlJywgJ3B1cnBsZScsICdsaW1lJywgJ3doaXRlJywgJ2dyYXknLCAnZ29sZCcsICdwaW5rJywgJ1NhbG1vbicsICdEZWVwU2t5Qmx1ZScsICdUZWFsJ107XG5mb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXM7IGkrKykge1xuICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNldENvbG9yKTtcbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVDb2xvcik7XG4gIGJvYXJkLmFwcGVuZChzcXVhcmUpO1xufVxuZnVuY3Rpb24gc2V0Q29sb3IoZXZ0KSB7XG4gIGxldCBlbGVtID0gZXZ0LnRhcmdldDtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByYW5kb21Db2xvcigpO1xuICBlbGVtLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMnB4ICcuY29uY2F0KHJhbmRvbUNvbG9yKCksICcsIDAgMCAxMHB4ICcpLmNvbmNhdChyYW5kb21Db2xvcigpKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUNvbG9yKGV2dCkge1xuICBsZXQgZWxlbSA9IGV2dC50YXJnZXQ7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxZDFkMWQxZCc7XG4gIGVsZW0uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggIzAwMCc7XG59XG5sZXQgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Fzcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL2pzL2Jsb2NrLXBhY2thZ2VcIjtcbmltcG9ydCBcIi4vanMvc3F1YXJlXCI7XG5pbXBvcnQgXCIuL2pzL2Jsb2NrLXRhcGVcIjtcbmltcG9ydCBcIi4vanMvY2FsY3VsYXRvclwiO1xuaW1wb3J0IFwiLi9qcy9kcmFnXCI7XG4iXSwibmFtZXMiOlsiY3JlYXRVbEVsZW1lbnQiLCJjcmVhdGVDb3N0RWxlbWVudCIsInBhY2thZ2VJbmZvIiwic2Nyb2xsTnVtYmVyIiwic2V0VmFsdWVzIiwicHJpY2VJbmZvIiwic2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJsb2NrIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwicHJlcGVuZCIsImJsb2NrVGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsInByaWNlTWF0ZXJpYWxzIiwidGFwZUNoZWNrYm94IiwiY2FsY3VsYXRvciIsInNldEF0dHJpYnV0ZSIsImNhbGN1bGF0b3JJbmZvIiwic2V0VmFsdWUiLCJuYW1lRWxlbWVudCIsInZhbHVlIiwiY3VycmVudElucHV0Iiwib3BlcmF0b3IiLCJwcmV2aW91c0lucHV0IiwiaXNDYWxjdWxhdG9yRm9jdXNlZCIsInVwZGF0ZURpc3BsYXkiLCJjbGVhckFsbCIsImRlbGV0ZUxhc3RTeW1ib2wiLCJsZW5ndGgiLCJzbGljZSIsImhhbmRsZU51bWJlciIsIm51bWJlciIsImhhbmRsZU9wZXJhdG9yIiwib3AiLCJTdHJpbmciLCJjYWxjdWxhdGUiLCJOdW1iZXIiLCJhIiwiYiIsImhhbmRsZUVxdWFsIiwiYWN0aXZhdGVFbGVtZW50IiwiZWxlbWVudCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJoYW5kbGVFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJpc05hTiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlkb3duIiwia2V5IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcGVyYXRvcktleSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaW5kIiwiZWwiLCJmIiwiY2hlY2tlZCIsImZvcm1hdCIsImZvcm1hdFRhcGVCbG9jayIsImZvcm1hdFRhcGUiLCJjaGVja2JveENvbnRhaW5lciIsImxhYmVsU3dpdGNoIiwiaW5wdXRDaGVja2JveCIsInR5cGUiLCJzcGFuU2xpZGVyIiwiY2hlY2tib3hDYWxjIiwiY2FsYyIsInRvZ2dsZSIsImRyYWdJdGVtIiwiYWN0aXZlIiwiY3VycmVudFgiLCJjdXJyZW50WSIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJ4T2Zmc2V0IiwieU9mZnNldCIsImRyYWdTdGFydCIsImRyYWdFbmQiLCJkcmFnIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwicHJldmVudERlZmF1bHQiLCJzZXRUcmFuc2xhdGUiLCJ4UG9zIiwieVBvcyIsInN0eWxlIiwidHJhbnNmb3JtIiwiY29uY2F0Iiwid2luZG93Iiwib25sb2FkIiwic2F2ZWRQb3NpdGlvbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ4IiwieSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJuYW1lIiwiZHNjIiwidWwiLCJsaURzYyIsInRpdGxlIiwic3VidGl0bGUiLCJsaVZhbHVlIiwiaW5wdXQiLCJtaW4iLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDb3N0IiwidWxJZCIsImluZm9QYWNrYWdlIiwiZm9vdGVyIiwiY29zdEVsZW1lbnQiLCJzZWxsaW5nRWxlbWVudCIsInByb2ZpdEVsZW1lbnRUYXBlIiwicHJvZml0RWxlbWVudCIsInVwZGF0ZVBhY2thZ2VJbmZvIiwidGV4dFNlbGVjdG9yIiwidWxTZWxlY3RvciIsIm11bHRpcGxpZXIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJkZWNpbWFsUGxhY2VzIiwidGV4dEVsZW1lbnQiLCJ1bEVsZW1lbnQiLCJ0b0ZpeGVkIiwiYWxsSW5mb1BhY2thZ2UiLCJvbmVQYWNrYWdlIiwidmFsdWVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0aGlja25lc3MiLCJhbGxQYWNrYWdlIiwiY2lyY3VsYXRpb24iLCJ0b3RhbFBhY2thZ2UiLCJ3ZWlnaHQiLCJwcmltZVByaWNlIiwiY29zdCIsImJ1eVByaWNlIiwic2VsbCIsInByb2ZpdCIsImFsbEluZm9UYXBlIiwib25lVGFwZSIsIndpZHRoVGFwZSIsInRoaWNrbmVzc1RhcGUiLCJhbGxUYXBlIiwiY2lyY3VsYXRpb25UYXBlIiwidG90YWxUYXBlIiwid2VpZ2h0VGFwZSIsInByaW1lUHJpY2VUYXBlIiwiY29zdFRhcGUiLCJidXlQcmljZVRhcGUiLCJzZWxsVGFwZSIsInByb2ZpdFRhcGUiLCJwcm9maXRUYXBlS2ciLCJmb3JFYWNoIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsImFjdGl2ZUVsZW1lbnQiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiZGVsdGFZIiwiTWF0aCIsIm1heCIsImJvYXJkIiwic3F1YXJlcyIsImNvbG9ycyIsImkiLCJzcXVhcmUiLCJzZXRDb2xvciIsInJlbW92ZUNvbG9yIiwiZXZ0IiwiZWxlbSIsImJhY2tncm91bmRDb2xvciIsInJhbmRvbUNvbG9yIiwiYm94U2hhZG93IiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9