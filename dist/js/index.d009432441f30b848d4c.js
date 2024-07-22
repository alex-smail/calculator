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





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQ0M7QUFDUDtBQUNJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvYmxvY2stcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9ibG9jay10YXBlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvc3F1YXJlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L3Nhc3MvaW5kZXguc2Nzcz8zZWRhIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdFVsRWxlbWVudCxcbiAgY3JlYXRlQ29zdEVsZW1lbnQsXG4gIHBhY2thZ2VJbmZvLFxuICBzY3JvbGxOdW1iZXIsXG4gIHNldFZhbHVlcyxcbiAgcHJpY2VJbmZvLFxufSBmcm9tICcuL2Z1bmN0aW9uLmpzJztcbi8vINCR0LvQvtC6INCk0LDRgdC+0LLQutCwXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJywgJ3BhY2thZ2UnKTtcbmJsb2NrLmlkID0gJ3BhY2thZ2UnO1xuXG5zZWN0aW9uLnByZXBlbmQoYmxvY2spO1xuXG5jb25zdCBibG9ja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RpdGxlJyk7XG5ibG9ja1RpdGxlLnRleHRDb250ZW50ID0gJ9Ck0LDRgdC+0LLQutCwJztcblxuYmxvY2suYXBwZW5kKGJsb2NrVGl0bGUpO1xuXG5jcmVhdFVsRWxlbWVudCgn0KjQuNGA0LjQvdCwJywgJ9GB0LwuJywgJ3dpZHRoJywgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KCfQktGL0YHQvtGC0LAnLCAn0YHQvC4nLCAnaGVpZ2h0JywgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KCfQotC+0LvRidC40L3QsCcsICfQvNC60LwuJywgJ3RoaWNrbmVzcycsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JrQvtC70LjRh9C10YHRgtCy0L4nLCAn0YjRgi4nLCAnY2lyY3VsYXRpb24nLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9CS0LXRgScsICfQutCzLicsICd3ZWlnaHQnLCAncGFja2FnZScpO1xuXG5leHBvcnQgY29uc3QgcHJpY2VNYXRlcmlhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaWNlTWF0ZXJpYWxzLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19wcmljZS1tYXRlcmlhbHMnKTtcbnByaWNlTWF0ZXJpYWxzLmlkID0gJ3BhY2thZ2UtcHJpY2UnO1xuXG5ibG9jay5hcHBlbmQocHJpY2VNYXRlcmlhbHMpO1xuXG5jcmVhdGVDb3N0RWxlbWVudCgnY29zdC1tYXRlcmlhbHMnLCAnY29zdCcsICfQodC10LHQtdGB0YIuLi4nLCAncGFja2FnZS1wcmljZScpO1xuY3JlYXRlQ29zdEVsZW1lbnQoJ3NlbGxpbmctcHJpY2UnLCAnc2VsbCcsICfQn9GA0L7QtNCw0LbQsCcsICdwYWNrYWdlLXByaWNlJyk7XG5cbnBhY2thZ2VJbmZvKCfQktC10YEg0L/QsNC60LXRgtCwJywgJ9CzLicsICdvbmUnLCAndWxPbmUnLCAncGFja2FnZScpO1xucGFja2FnZUluZm8oJ9CS0LXRgSDQv9Cw0YDRgtC40LgnLCAn0LrQsy4nLCAnYWxsJywgJ3VsQWxsJywgJ3BhY2thZ2UnKTtcbnBhY2thZ2VJbmZvKCfQmtC+0Lst0LLQviDQv9Cw0LrQtdGC0L7QsicsICfRiNGCLicsICd0b3RhbCcsICd1bFRvdGFsJywgJ3BhY2thZ2UnKTtcblxucHJpY2VJbmZvKCdwYWNrYWdlJywgJ3BhY2thZ2UnKTtcbnNjcm9sbE51bWJlcigpO1xuc2V0VmFsdWVzKCk7XG5cbi8vINCR0LvQvtC6INCf0LvQtdC90LrQsFxuIiwiaW1wb3J0IHtcbiAgY3JlYXRVbEVsZW1lbnQsXG4gIGNyZWF0ZUNvc3RFbGVtZW50LFxuICBwYWNrYWdlSW5mbyxcbiAgc2Nyb2xsTnVtYmVyLFxuICBzZXRWYWx1ZXMsXG4gIHByaWNlSW5mbyxcbn0gZnJvbSAnLi9mdW5jdGlvbi5qcyc7XG5pbXBvcnQgeyB0YXBlQ2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94LmpzJztcbi8vINCR0LvQvtC6INCf0LvQtdC90LrQsFxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycsICd0YXBlJyk7IC8vLCAndGFwZSdcbmJsb2NrLmlkID0gJ3RhcGUnO1xuXG5zZWN0aW9uLmFwcGVuZChibG9jayk7XG5cbmNvbnN0IGJsb2NrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuYmxvY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fdGl0bGUnKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSAn0J/Qu9C10L3QutCwJztcblxuYmxvY2suYXBwZW5kKGJsb2NrVGl0bGUsIHRhcGVDaGVja2JveCgpKTtcblxuY3JlYXRVbEVsZW1lbnQoJ9Co0LjRgNC40L3QsCcsICfRgdC8LicsICd3aWR0aFRhcGUnLCAndGFwZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9Ci0L7Qu9GJ0LjQvdCwJywgJ9C80LrQvC4nLCAndGhpY2tuZXNzVGFwZScsICd0YXBlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JrQvtC70LjRh9C10YHRgtCy0L4nLCAn0LwuJywgJ2NpcmN1bGF0aW9uVGFwZScsICd0YXBlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JLQtdGBJywgJ9C60LMuJywgJ3dlaWdodFRhcGUnLCAndGFwZScpO1xuXG5jb25zdCBwcmljZU1hdGVyaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJpY2VNYXRlcmlhbHMuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3ByaWNlLW1hdGVyaWFscycpO1xucHJpY2VNYXRlcmlhbHMuaWQgPSAndGFwZS1wcmljZSc7XG5cbmJsb2NrLmFwcGVuZChwcmljZU1hdGVyaWFscyk7XG5cbmNyZWF0ZUNvc3RFbGVtZW50KCdjb3N0LW1hdGVyaWFscycsICdjb3N0VGFwZScsICfQodC10LHQtdGB0YIuLi4nLCAndGFwZS1wcmljZScpO1xuY3JlYXRlQ29zdEVsZW1lbnQoJ3NlbGxpbmctcHJpY2UnLCAnc2VsbFRhcGUnLCAn0J/RgNC+0LTQsNC20LAnLCAndGFwZS1wcmljZScpO1xuXG5wYWNrYWdlSW5mbygn0JLQtdGBINC80LXRgtGA0LAnLCAn0LMuJywgJ29uZS10YXBlJywgJ3VsT25lLXRhcGUnLCAndGFwZScpO1xucGFja2FnZUluZm8oJ9CS0LXRgSDQv9Cw0YDRgtC40LgnLCAn0LrQsy4nLCAnYWxsLXRhcGUnLCAndWxBbGwtdGFwZScsICd0YXBlJyk7XG5wYWNrYWdlSW5mbygn0JrQvtC7LdCy0L4g0LzQtdGC0YDQvtCyJywgJ9C8LicsICd0b3RhbC10YXBlJywgJ3VsVG90YWwtdGFwZScsICd0YXBlJyk7XG5cbnByaWNlSW5mbygndGFwZScsICd0YXBlJyk7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuIiwiY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZCgnY2FsY3VsYXRvcicpO1xuY2FsY3VsYXRvci5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTsgLy8g0J/QvtC30LLQvtC70Y/QtdGCINCx0LvQvtC60YMg0L/QvtC70YPRh9C40YLRjCDRhNC+0LrRg9GBXG5cbnNlY3Rpb24uYXBwZW5kKGNhbGN1bGF0b3IpO1xuXG5jb25zdCBjYWxjdWxhdG9ySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FsY3VsYXRvckluZm8uY2xhc3NMaXN0LmFkZCgnY2FsY3VsYXRvcl9faW5mbycpO1xuY2FsY3VsYXRvckluZm8udGV4dENvbnRlbnQgPSAwO1xuY2FsY3VsYXRvci5hcHBlbmQoY2FsY3VsYXRvckluZm8pO1xuXG5mdW5jdGlvbiBzZXRWYWx1ZShpZCwgbmFtZUVsZW1lbnQpIHtcbiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFsdWUuY2xhc3NMaXN0LmFkZCgnY2FsY3VsYXRvcl9fZWxlbWVudCcpO1xuICB2YWx1ZS5pZCA9IGlkO1xuICB2YWx1ZS50ZXh0Q29udGVudCA9IG5hbWVFbGVtZW50O1xuXG4gIGNhbGN1bGF0b3IuYXBwZW5kKHZhbHVlKTtcbn1cblxuc2V0VmFsdWUoJ2NsZWFuJywgJ0FDJyk7XG5zZXRWYWx1ZSgnbGFzdC1zeW1ib2wnLCAnQ0UnKTtcbnNldFZhbHVlKCdwZXJjZW50JywgJyUnKTtcbnNldFZhbHVlKCdkaXZpc2lvbicsICcvJyk7XG5zZXRWYWx1ZSgnc2V2ZW4nLCAnNycpO1xuc2V0VmFsdWUoJ2VpZ2h0JywgJzgnKTtcbnNldFZhbHVlKCduaW5lJywgJzknKTtcbnNldFZhbHVlKCdtdWx0aXBseScsICd4Jyk7XG5zZXRWYWx1ZSgnZm91cicsICc0Jyk7XG5zZXRWYWx1ZSgnZml2ZScsICc1Jyk7XG5zZXRWYWx1ZSgnc2l4JywgJzYnKTtcbnNldFZhbHVlKCdtaW51cycsICctJyk7XG5zZXRWYWx1ZSgnb25lJywgJzEnKTtcbnNldFZhbHVlKCd0d28nLCAnMicpO1xuc2V0VmFsdWUoJ3RocmVlJywgJzMnKTtcbnNldFZhbHVlKCdwbHVzJywgJysnKTtcbnNldFZhbHVlKCdudWxsJywgJzAnKTtcbnNldFZhbHVlKCdjb21tYScsICcsJyk7XG5zZXRWYWx1ZSgnZXZlbmx5JywgJz0nKTtcblxubGV0IGN1cnJlbnRJbnB1dCA9ICcwJztcbmxldCBvcGVyYXRvciA9IG51bGw7XG5sZXQgcHJldmlvdXNJbnB1dCA9IG51bGw7XG5sZXQgaXNDYWxjdWxhdG9yRm9jdXNlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KHZhbHVlKSB7XG4gIGNhbGN1bGF0b3JJbmZvLnRleHRDb250ZW50ID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICBjdXJyZW50SW5wdXQgPSAnMCc7XG4gIG9wZXJhdG9yID0gbnVsbDtcbiAgcHJldmlvdXNJbnB1dCA9IG51bGw7XG4gIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGFzdFN5bWJvbCgpIHtcbiAgaWYgKGN1cnJlbnRJbnB1dC5sZW5ndGggPiAxKSB7XG4gICAgY3VycmVudElucHV0ID0gY3VycmVudElucHV0LnNsaWNlKDAsIC0xKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SW5wdXQgPSAnMCc7XG4gIH1cbiAgdXBkYXRlRGlzcGxheShjdXJyZW50SW5wdXQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOdW1iZXIobnVtYmVyKSB7XG4gIGlmIChjdXJyZW50SW5wdXQgPT09ICcwJykge1xuICAgIGN1cnJlbnRJbnB1dCA9IG51bWJlcjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SW5wdXQgKz0gbnVtYmVyO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3BlcmF0b3Iob3ApIHtcbiAgaWYgKHByZXZpb3VzSW5wdXQgPT09IG51bGwpIHtcbiAgICBwcmV2aW91c0lucHV0ID0gY3VycmVudElucHV0O1xuICB9IGVsc2UgaWYgKG9wZXJhdG9yKSB7XG4gICAgcHJldmlvdXNJbnB1dCA9IFN0cmluZyhjYWxjdWxhdGUoTnVtYmVyKHByZXZpb3VzSW5wdXQpLCBOdW1iZXIoY3VycmVudElucHV0KSwgb3BlcmF0b3IpKTtcbiAgfVxuICBjdXJyZW50SW5wdXQgPSAnMCc7XG4gIG9wZXJhdG9yID0gb3A7XG4gIHVwZGF0ZURpc3BsYXkocHJldmlvdXNJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShhLCBiLCBvcCkge1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgY2FzZSAnLSc6XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgY2FzZSAneCc6XG4gICAgICByZXR1cm4gYSAqIGI7XG4gICAgY2FzZSAnLyc6XG4gICAgICByZXR1cm4gYSAvIGI7XG4gICAgY2FzZSAnJSc6XG4gICAgICByZXR1cm4gYSAlIGI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVxdWFsKCkge1xuICBpZiAob3BlcmF0b3IgJiYgcHJldmlvdXNJbnB1dCAhPT0gbnVsbCkge1xuICAgIGN1cnJlbnRJbnB1dCA9IFN0cmluZyhjYWxjdWxhdGUoTnVtYmVyKHByZXZpb3VzSW5wdXQpLCBOdW1iZXIoY3VycmVudElucHV0KSwgb3BlcmF0b3IpKTtcbiAgICBvcGVyYXRvciA9IG51bGw7XG4gICAgcHJldmlvdXNJbnB1dCA9IG51bGw7XG4gICAgdXBkYXRlRGlzcGxheShjdXJyZW50SW5wdXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlRWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgY29uc3QgdmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbGN1bGF0b3JfX2VsZW1lbnQnKSkge1xuICAgIGFjdGl2YXRlRWxlbWVudCh0YXJnZXQpO1xuXG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnQUMnOlxuICAgICAgICBjbGVhckFsbCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NFJzpcbiAgICAgICAgZGVsZXRlTGFzdFN5bWJvbCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJysnOlxuICAgICAgY2FzZSAnLSc6XG4gICAgICBjYXNlICd4JzpcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgY2FzZSAnJSc6XG4gICAgICAgIGhhbmRsZU9wZXJhdG9yKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc9JzpcbiAgICAgICAgaGFuZGxlRXF1YWwoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcsJzpcbiAgICAgICAgaGFuZGxlTnVtYmVyKCcuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICBoYW5kbGVOdW1iZXIodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUV2ZW50KTtcblxuZnVuY3Rpb24gaGFuZGxlS2V5ZG93bihldmVudCkge1xuICBpZiAoIWlzQ2FsY3VsYXRvckZvY3VzZWQpIHJldHVybjtcblxuICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ0JhY2tzcGFjZSc6XG4gICAgICBkZWxldGVMYXN0U3ltYm9sKCk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3Qtc3ltYm9sJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgY2xlYXJBbGwoKTtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYW4nKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJysnOlxuICAgIGNhc2UgJy0nOlxuICAgIGNhc2UgJyonOlxuICAgIGNhc2UgJy8nOlxuICAgIGNhc2UgJyUnOlxuICAgICAgbGV0IG9wZXJhdG9yS2V5ID0ga2V5O1xuICAgICAgaWYgKGtleSA9PT0gJyonKSBvcGVyYXRvcktleSA9ICd4JzsgLy8gUmVwbGFjZSAnKicgd2l0aCAneCdcbiAgICAgIGhhbmRsZU9wZXJhdG9yKG9wZXJhdG9yS2V5KTtcbiAgICAgIGVsZW1lbnQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdG9yX19lbGVtZW50JykpLmZpbmQoZWwgPT4gZWwudGV4dENvbnRlbnQgPT09IG9wZXJhdG9yS2V5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VudGVyJzpcbiAgICBjYXNlICc9JzpcbiAgICAgIGhhbmRsZUVxdWFsKCk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW5seScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLic6XG4gICAgICBoYW5kbGVOdW1iZXIoJy4nKTtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWEnKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoIWlzTmFOKGtleSkpIHtcbiAgICAgICAgaGFuZGxlTnVtYmVyKGtleSk7XG4gICAgICAgIGVsZW1lbnQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdG9yX19lbGVtZW50JykpLmZpbmQoZWwgPT4gZWwudGV4dENvbnRlbnQgPT09IGtleSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmIChlbGVtZW50KSB7XG4gICAgYWN0aXZhdGVFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59XG5cbmNhbGN1bGF0b3IuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gIGlzQ2FsY3VsYXRvckZvY3VzZWQgPSB0cnVlO1xufSk7XG5cbmNhbGN1bGF0b3IuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgaXNDYWxjdWxhdG9yRm9jdXNlZCA9IGZhbHNlO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlkb3duKTtcbmNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7IiwiaW1wb3J0IHsgY2FsY3VsYXRvciB9IGZyb20gXCIuL2NhbGN1bGF0b3JcIjtcbmV4cG9ydCBsZXQgZiA9IDAuOTI7XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWNoZWNrYm94JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBmID0gMC45NTtcbiAgICB9IGVsc2Uge1xuICAgICAgZiA9IDAuOTI7XG4gICAgfVxuICB9KTtcblxuLy8g0KfQtdC60LHQvtC60YEg0L/Qu9C10L3QutCwXG5leHBvcnQgbGV0IGZvcm1hdCA9IDI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXBlQ2hlY2tib3goKSB7XG4gIGNvbnN0IGZvcm1hdFRhcGVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RhcGUnKTtcblxuICBjb25zdCBmb3JtYXRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb3JtYXRUYXBlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19uYW1lJywgJ2Jsb2NrX19uYW1lLWZvcm1hdCcpO1xuICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gJ9Cg0YPQutCw0LInO1xuXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pbnB1dCcpO1xuXG4gIGNvbnN0IGxhYmVsU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG5cbiAgY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0Q2hlY2tib3guaWQgPSAnZm9ybWF0LWNoZWNrYm94JztcbiAgaW5wdXRDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcblxuICBjb25zdCBzcGFuU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuXG4gIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbiAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcik7XG5cbiAgaW5wdXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9ICfQn9C+0LvQvtGC0L3Qvic7XG4gICAgICBmb3JtYXQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gJ9Cg0YPQutCw0LInO1xuICAgICAgZm9ybWF0ID0gMjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmb3JtYXRUYXBlQmxvY2s7XG59XG5cbmNvbnN0IGNoZWNrYm94Q2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1ibG9ja19fY2FsYycpO1xuY29uc3QgY2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yJyk7XG5cbmNoZWNrYm94Q2FsYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2FsY3VsYXRvci5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gIGNhbGN1bGF0b3IuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTsiLCJpbXBvcnQgeyBmLCBmb3JtYXQgfSBmcm9tICcuL2NoZWNrYm94LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0VWxFbGVtZW50KG5hbWUsIGRzYywgaWQsIGZvcm1hdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pdGVtJyk7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaURzYy5jbGFzc0xpc3QuYWRkKCdibG9ja19fY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fbmFtZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fZHNjJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGxpVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICdudW1iZXInO1xuICBpbnB1dC5taW4gPSAxO1xuICBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pbnB1dCcpO1xuXG4gIGxpVmFsdWUuYXBwZW5kKGlucHV0KTtcbiAgdWwuYXBwZW5kKGxpRHNjLCBsaVZhbHVlKTtcblxuICBmb3JtYXQgPT09ICdwYWNrYWdlJ1xuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29zdEVsZW1lbnQobmFtZSwgaWQsIHBsYWNlaG9sZGVyLCBmb3JtYXQpIHtcbiAgY29uc3QgaW5wdXRDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRDb3N0LnR5cGUgPSAnbnVtYmVyJztcbiAgaW5wdXRDb3N0Lm1pbiA9IDE7XG4gIGlucHV0Q29zdC5pZCA9IGlkO1xuICBpbnB1dENvc3QucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dENvc3QuY2xhc3NMaXN0LmFkZChgYmxvY2tfXyR7bmFtZX1gKTtcbiAgaW5wdXRDb3N0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZS1wcmljZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoaW5wdXRDb3N0KVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChpbnB1dENvc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFja2FnZUluZm8obmFtZSwgZHNjLCBpZCwgdWxJZCwgZm9ybWF0KSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2l0ZW0nLCAnYmxvY2tfX2l0ZW0tZm9vdGVyJywgJ2hpZGRlbicpO1xuICB1bC5pZCA9IHVsSWQ7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaURzYy5jbGFzc0xpc3QuYWRkKCdibG9ja19fY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fbmFtZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fZHNjJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGluZm9QYWNrYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvUGFja2FnZS5jbGFzc0xpc3QuYWRkKCdibG9ja19faW5mbycpO1xuICBpbmZvUGFja2FnZS5pZCA9IGlkO1xuXG4gIHVsLmFwcGVuZChsaURzYywgaW5mb1BhY2thZ2UpO1xuXG4gIGZvcm1hdCA9PT0gJ3BhY2thZ2UnXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmljZUluZm8oZm9ybWF0LCB0eXBlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb3N0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX2Nvc3QnLCAnaGlkZGVuJyk7XG4gIGNvc3RFbGVtZW50LmlkID0gYGZvb3Rlci1jb3N0LSR7dHlwZX1gO1xuXG4gIGNvbnN0IHNlbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzZWxsaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX3NlbGxpbmcnLCAnaGlkZGVuJyk7XG4gIHNlbGxpbmdFbGVtZW50LmlkID0gYGZvb3Rlci1zZWxsaW5nLSR7dHlwZX1gO1xuXG4gIGZvb3Rlci5hcHBlbmQoY29zdEVsZW1lbnQsIHNlbGxpbmdFbGVtZW50KTtcblxuICBjb25zdCBwcm9maXRFbGVtZW50VGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvZml0RWxlbWVudFRhcGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3Rlcl9wcm9maXQnLCAnaGlkZGVuJyk7XG4gIHByb2ZpdEVsZW1lbnRUYXBlLmlkID0gYGZvb3Rlci1wcm9maXQtJHt0eXBlfS1tYDtcblxuICBjb25zdCBwcm9maXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9maXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXJfcHJvZml0JywgJ2hpZGRlbicpO1xuICBwcm9maXRFbGVtZW50LmlkID0gYGZvb3Rlci1wcm9maXQtJHt0eXBlfWA7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50KVxuICAgIDogZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKVxuICAgICAgICAuYXBwZW5kKGZvb3RlciwgcHJvZml0RWxlbWVudFRhcGUsIHByb2ZpdEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgdmFsdWUsXG4gIHRleHRTZWxlY3RvcixcbiAgdWxTZWxlY3RvcixcbiAgbXVsdGlwbGllciA9IDEsXG4gIGRlY2ltYWxQbGFjZXMgPSAyLFxuKSB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0ZXh0U2VsZWN0b3IpO1xuICBjb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVsU2VsZWN0b3IpO1xuXG4gIGlmICh2YWx1ZSA+IDApIHtcbiAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9ICh2YWx1ZSAqIG11bHRpcGxpZXIpLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XG4gICAgdWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxJbmZvUGFja2FnZSgpIHtcbiAgbGV0IG9uZVBhY2thZ2UgPVxuICAgICh2YWx1ZXMud2lkdGggKiBmICogMiAqIHZhbHVlcy5oZWlnaHQgKiAodmFsdWVzLnRoaWNrbmVzcyAvIDEwMDAwKSkgLyAxMDAwO1xuICBsZXQgYWxsUGFja2FnZSA9IG9uZVBhY2thZ2UgKiB2YWx1ZXMuY2lyY3VsYXRpb247XG4gIGxldCB0b3RhbFBhY2thZ2UgPSB2YWx1ZXMud2VpZ2h0IC8gb25lUGFja2FnZTtcbiAgbGV0IHByaW1lUHJpY2UgPSB2YWx1ZXMuY29zdCAqIG9uZVBhY2thZ2U7XG4gIGxldCBidXlQcmljZSA9IHZhbHVlcy5zZWxsICogb25lUGFja2FnZTtcbiAgbGV0IHByb2ZpdCA9IChidXlQcmljZSAtIHByaW1lUHJpY2UpICogdmFsdWVzLmNpcmN1bGF0aW9uO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVQYWNrYWdlLCAnI29uZScsICcjdWxPbmUnLCAxMDAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oYWxsUGFja2FnZSwgJyNhbGwnLCAnI3VsQWxsJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsUGFja2FnZSwgJyN0b3RhbCcsICcjdWxUb3RhbCcsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlLCAnI2Zvb3Rlci1jb3N0LXBhY2thZ2UnLCAnI2Zvb3Rlci1jb3N0LXBhY2thZ2UnKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oXG4gICAgYnV5UHJpY2UsXG4gICAgJyNmb290ZXItc2VsbGluZy1wYWNrYWdlJyxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXBhY2thZ2UnLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXQsICcjZm9vdGVyLXByb2ZpdC1wYWNrYWdlJywgJyNmb290ZXItcHJvZml0LXBhY2thZ2UnKTtcbn1cblxuZnVuY3Rpb24gYWxsSW5mb1RhcGUoKSB7XG4gIGxldCBvbmVUYXBlID1cbiAgICAodmFsdWVzLndpZHRoVGFwZSAqIGYgKiBmb3JtYXQgKiAxMDAgKiAodmFsdWVzLnRoaWNrbmVzc1RhcGUgLyAxMDAwMCkpIC9cbiAgICAxMDAwO1xuICBsZXQgYWxsVGFwZSA9IG9uZVRhcGUgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlO1xuICBsZXQgdG90YWxUYXBlID0gdmFsdWVzLndlaWdodFRhcGUgLyBvbmVUYXBlO1xuICBsZXQgcHJpbWVQcmljZVRhcGUgPSB2YWx1ZXMuY29zdFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgYnV5UHJpY2VUYXBlID0gdmFsdWVzLnNlbGxUYXBlICogb25lVGFwZTtcbiAgbGV0IHByb2ZpdFRhcGUgPSAoYnV5UHJpY2VUYXBlIC0gcHJpbWVQcmljZVRhcGUpICogdmFsdWVzLmNpcmN1bGF0aW9uVGFwZTsgLy98fFxuICAvL051bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsLXRhcGVcIikudGV4dENvbnRlbnQpO1xuICBsZXQgcHJvZml0VGFwZUtnID0gKHZhbHVlcy5zZWxsVGFwZSAtIHZhbHVlcy5jb3N0VGFwZSkgKiB2YWx1ZXMud2VpZ2h0VGFwZTtcbiAgdXBkYXRlUGFja2FnZUluZm8ob25lVGFwZSwgJyNvbmUtdGFwZScsICcjdWxPbmUtdGFwZScsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxUYXBlLCAnI2FsbC10YXBlJywgJyN1bEFsbC10YXBlJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsVGFwZSwgJyN0b3RhbC10YXBlJywgJyN1bFRvdGFsLXRhcGUnLCAxLCAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJpbWVQcmljZVRhcGUsICcjZm9vdGVyLWNvc3QtdGFwZScsICcjZm9vdGVyLWNvc3QtdGFwZScpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZVRhcGUsXG4gICAgJyNmb290ZXItc2VsbGluZy10YXBlJyxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXRhcGUnLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBwcm9maXRUYXBlLFxuICAgICcjZm9vdGVyLXByb2ZpdC10YXBlLW0nLFxuICAgICcjZm9vdGVyLXByb2ZpdC10YXBlLW0nLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXRUYXBlS2csICcjZm9vdGVyLXByb2ZpdC10YXBlJywgJyNmb290ZXItcHJvZml0LXRhcGUnKTtcbn1cblxubGV0IHZhbHVlcyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuY29uc29sZS5sb2codmFsdWVzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbE51bWJlcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQv9GA0L7QutGA0YPRgtC60YMg0YHRgtGA0LDQvdC40YbRi1xuXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKSkgfHwgMTsgLy8g0J/QvtC70YPRh9Cw0LXQvCDRiNCw0LMg0LjQt9C80LXQvdC10L3QuNGPICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAxKVxuICAgICAgICBjb25zdCBtaW4gPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ21pbicpKSB8fCAwOyAvLyDQn9C+0LvRg9GH0LDQtdC8INC80LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gMClcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAvLyDQn9GA0L7QutGA0YPRgtC60LAg0LLQstC10YDRhSwg0YPQstC10LvQuNGH0LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IE51bWJlcih0aGlzLnZhbHVlKSArIHN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YLQutCwINCy0L3QuNC3LCDRg9C80LXQvdGM0YjQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSAo0LXRgdC70Lgg0LHQvtC70YzRiNC1INC40LvQuCDRgNCw0LLQvdC+INC80LjQvdC40LzQsNC70YzQvdC+0LzRgyDQt9C90LDRh9C10L3QuNGOKVxuICAgICAgICAgIHRoaXMudmFsdWUgPSBNYXRoLm1heChtaW4sIE51bWJlcih0aGlzLnZhbHVlKSAtIHN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IE51bWJlcihpbnB1dC52YWx1ZSkgfHwgMDtcbiAgICAgICAgYWxsSW5mb1BhY2thZ2UoKTtcbiAgICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmQnKTtcbmxldCBzcXVhcmVzID0gMzg4NjtcbmxldCBjb2xvcnMgPSBbJ3llbGxvdycsICdkYXJrYmx1ZScsICdwdXJwbGUnLCAnbGltZScsICd3aGl0ZScsICdncmF5JywgJ2dvbGQnLCAncGluaycsICdTYWxtb24nLCAnRGVlcFNreUJsdWUnLCAnVGVhbCddO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzOyBpKyspIHtcbiAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzZXRDb2xvcik7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVtb3ZlQ29sb3IpO1xuICBib2FyZC5hcHBlbmQoc3F1YXJlKTtcbn1cbmZ1bmN0aW9uIHNldENvbG9yKGV2dCkge1xuICBsZXQgZWxlbSA9IGV2dC50YXJnZXQ7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFuZG9tQ29sb3IoKTtcbiAgZWxlbS5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAnLmNvbmNhdChyYW5kb21Db2xvcigpLCAnLCAwIDAgMTBweCAnKS5jb25jYXQocmFuZG9tQ29sb3IoKSk7XG59XG5mdW5jdGlvbiByZW1vdmVDb2xvcihldnQpIHtcbiAgbGV0IGVsZW0gPSBldnQudGFyZ2V0O1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMWQxZDFkMWQnO1xuICBlbGVtLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMnB4ICMwMDAnO1xufVxubGV0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3Nhc3MvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay1wYWNrYWdlXCI7XG5pbXBvcnQgXCIuL2pzL3NxdWFyZVwiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay10YXBlXCI7XG5pbXBvcnQgXCIuL2pzL2NhbGN1bGF0b3JcIjtcbiJdLCJuYW1lcyI6WyJjcmVhdFVsRWxlbWVudCIsImNyZWF0ZUNvc3RFbGVtZW50IiwicGFja2FnZUluZm8iLCJzY3JvbGxOdW1iZXIiLCJzZXRWYWx1ZXMiLCJwcmljZUluZm8iLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmxvY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJwcmVwZW5kIiwiYmxvY2tUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kIiwicHJpY2VNYXRlcmlhbHMiLCJ0YXBlQ2hlY2tib3giLCJjYWxjdWxhdG9yIiwic2V0QXR0cmlidXRlIiwiY2FsY3VsYXRvckluZm8iLCJzZXRWYWx1ZSIsIm5hbWVFbGVtZW50IiwidmFsdWUiLCJjdXJyZW50SW5wdXQiLCJvcGVyYXRvciIsInByZXZpb3VzSW5wdXQiLCJpc0NhbGN1bGF0b3JGb2N1c2VkIiwidXBkYXRlRGlzcGxheSIsImNsZWFyQWxsIiwiZGVsZXRlTGFzdFN5bWJvbCIsImxlbmd0aCIsInNsaWNlIiwiaGFuZGxlTnVtYmVyIiwibnVtYmVyIiwiaGFuZGxlT3BlcmF0b3IiLCJvcCIsIlN0cmluZyIsImNhbGN1bGF0ZSIsIk51bWJlciIsImEiLCJiIiwiaGFuZGxlRXF1YWwiLCJhY3RpdmF0ZUVsZW1lbnQiLCJlbGVtZW50Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImhhbmRsZUV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImlzTmFOIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleWRvd24iLCJrZXkiLCJnZXRFbGVtZW50QnlJZCIsIm9wZXJhdG9yS2V5IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbmQiLCJlbCIsImYiLCJjaGVja2VkIiwiZm9ybWF0IiwiZm9ybWF0VGFwZUJsb2NrIiwiZm9ybWF0VGFwZSIsImNoZWNrYm94Q29udGFpbmVyIiwibGFiZWxTd2l0Y2giLCJpbnB1dENoZWNrYm94IiwidHlwZSIsInNwYW5TbGlkZXIiLCJjaGVja2JveENhbGMiLCJjYWxjIiwidG9nZ2xlIiwibmFtZSIsImRzYyIsInVsIiwibGlEc2MiLCJ0aXRsZSIsInN1YnRpdGxlIiwibGlWYWx1ZSIsImlucHV0IiwibWluIiwicmVxdWlyZWQiLCJjb25jYXQiLCJwbGFjZWhvbGRlciIsImlucHV0Q29zdCIsInVsSWQiLCJpbmZvUGFja2FnZSIsImZvb3RlciIsImNvc3RFbGVtZW50Iiwic2VsbGluZ0VsZW1lbnQiLCJwcm9maXRFbGVtZW50VGFwZSIsInByb2ZpdEVsZW1lbnQiLCJ1cGRhdGVQYWNrYWdlSW5mbyIsInRleHRTZWxlY3RvciIsInVsU2VsZWN0b3IiLCJtdWx0aXBsaWVyIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZGVjaW1hbFBsYWNlcyIsInRleHRFbGVtZW50IiwidWxFbGVtZW50IiwidG9GaXhlZCIsImFsbEluZm9QYWNrYWdlIiwib25lUGFja2FnZSIsInZhbHVlcyIsIndpZHRoIiwiaGVpZ2h0IiwidGhpY2tuZXNzIiwiYWxsUGFja2FnZSIsImNpcmN1bGF0aW9uIiwidG90YWxQYWNrYWdlIiwid2VpZ2h0IiwicHJpbWVQcmljZSIsImNvc3QiLCJidXlQcmljZSIsInNlbGwiLCJwcm9maXQiLCJhbGxJbmZvVGFwZSIsIm9uZVRhcGUiLCJ3aWR0aFRhcGUiLCJ0aGlja25lc3NUYXBlIiwiYWxsVGFwZSIsImNpcmN1bGF0aW9uVGFwZSIsInRvdGFsVGFwZSIsIndlaWdodFRhcGUiLCJwcmltZVByaWNlVGFwZSIsImNvc3RUYXBlIiwiYnV5UHJpY2VUYXBlIiwic2VsbFRhcGUiLCJwcm9maXRUYXBlIiwicHJvZml0VGFwZUtnIiwiZm9yRWFjaCIsInNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiZGVsdGFZIiwiTWF0aCIsIm1heCIsImJvYXJkIiwic3F1YXJlcyIsImNvbG9ycyIsImkiLCJzcXVhcmUiLCJzZXRDb2xvciIsInJlbW92ZUNvbG9yIiwiZXZ0IiwiZWxlbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicmFuZG9tQ29sb3IiLCJib3hTaGFkb3ciLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=