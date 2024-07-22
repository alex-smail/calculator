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
/***/ (() => {

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
// import { block } from "./block-tape";

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

// let format = "Рукав"

// document
//   .getElementById("format-checkbox")
//   .addEventListener("change", function () {
//     if (this.checked) {
//       console.log('Рукав');
//     } else {
//       console.log('polotno');
//     }
//   });
// document
//   .getElementById("format-checkbox")
//   .addEventListener("change", function () {
//     if (this.checked) {
//         document.querySelector('block__name-format').textContent = "Рукав";
//     } else {
//         document.querySelector('block__name-format').textContent = "Полотно";
//     }
//   });

// export function tapeCheckbox() {
//   const formatTapeBlock = document.createElement("div");
//   formatTapeBlock.classList.add("block__tape");

//   const formatTape = document.createElement("p");
//   formatTape.classList.add("bloc");
//   formatTape.textContent = "Рукав";

//   const checkboxContainer = document.createElement("div");

//   const labelSwitch = document.createElement("label");
//   labelSwitch.classList.add("switch");

//   const inputCheckbox = document.createElement("input");
//   inputCheckbox.id = "format-checkbox";
//   inputCheckbox.type = "checkbox";

//   const spanSlider = document.createElement("span");
//   spanSlider.classList.add("slider");

//   labelSwitch.append(inputCheckbox, spanSlider);
//   checkboxContainer.append(labelSwitch);
//   formatTapeBlock.append(formatTape, checkboxContainer)

//   // Добавление блока в нужное место
//   const block = document.querySelector('#tape');
//   block.prepend(formatTapeBlock);

//   // Добавление обработчика событий для чекбокса
//   inputCheckbox.addEventListener('change', function() {
//     if (inputCheckbox.checked) {
//       formatTape.textContent = "Полотно";
//       format = 1;  // Переменная для хранения значения
//     } else {
//       formatTape.textContent = "Рукав";
//       format = 2;  // Переменная для хранения значения
//     }

//   });

//   // console.log(format);
//   return formatTapeBlock;
// }

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
var squares = 2886;
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
/* harmony import */ var _js_calculator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_calculator__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9pbmRleC9qcy9ibG9jay1wYWNrYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2Jsb2NrLXRhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvY2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvc2Fzcy9pbmRleC5zY3NzPzNlZGEiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0VWxFbGVtZW50LFxuICBjcmVhdGVDb3N0RWxlbWVudCxcbiAgcGFja2FnZUluZm8sXG4gIHNjcm9sbE51bWJlcixcbiAgc2V0VmFsdWVzLFxuICBwcmljZUluZm8sXG59IGZyb20gJy4vZnVuY3Rpb24uanMnO1xuLy8g0JHQu9C+0Log0KTQsNGB0L7QstC60LBcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snLCAncGFja2FnZScpO1xuYmxvY2suaWQgPSAncGFja2FnZSc7XG5cbnNlY3Rpb24ucHJlcGVuZChibG9jayk7XG5cbmNvbnN0IGJsb2NrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuYmxvY2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fdGl0bGUnKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSAn0KTQsNGB0L7QstC60LAnO1xuXG5ibG9jay5hcHBlbmQoYmxvY2tUaXRsZSk7XG5cbmNyZWF0VWxFbGVtZW50KCfQqNC40YDQuNC90LAnLCAn0YHQvC4nLCAnd2lkdGgnLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9CS0YvRgdC+0YLQsCcsICfRgdC8LicsICdoZWlnaHQnLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9Ci0L7Qu9GJ0LjQvdCwJywgJ9C80LrQvC4nLCAndGhpY2tuZXNzJywgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KCfQmtC+0LvQuNGH0LXRgdGC0LLQvicsICfRiNGCLicsICdjaXJjdWxhdGlvbicsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JLQtdGBJywgJ9C60LMuJywgJ3dlaWdodCcsICdwYWNrYWdlJyk7XG5cbmV4cG9ydCBjb25zdCBwcmljZU1hdGVyaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJpY2VNYXRlcmlhbHMuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3ByaWNlLW1hdGVyaWFscycpO1xucHJpY2VNYXRlcmlhbHMuaWQgPSAncGFja2FnZS1wcmljZSc7XG5cbmJsb2NrLmFwcGVuZChwcmljZU1hdGVyaWFscyk7XG5cbmNyZWF0ZUNvc3RFbGVtZW50KCdjb3N0LW1hdGVyaWFscycsICdjb3N0JywgJ9Ch0LXQsdC10YHRgi4uLicsICdwYWNrYWdlLXByaWNlJyk7XG5jcmVhdGVDb3N0RWxlbWVudCgnc2VsbGluZy1wcmljZScsICdzZWxsJywgJ9Cf0YDQvtC00LDQttCwJywgJ3BhY2thZ2UtcHJpY2UnKTtcblxucGFja2FnZUluZm8oJ9CS0LXRgSDQv9Cw0LrQtdGC0LAnLCAn0LMuJywgJ29uZScsICd1bE9uZScsICdwYWNrYWdlJyk7XG5wYWNrYWdlSW5mbygn0JLQtdGBINC/0LDRgNGC0LjQuCcsICfQutCzLicsICdhbGwnLCAndWxBbGwnLCAncGFja2FnZScpO1xucGFja2FnZUluZm8oJ9Ca0L7Quy3QstC+INC/0LDQutC10YLQvtCyJywgJ9GI0YIuJywgJ3RvdGFsJywgJ3VsVG90YWwnLCAncGFja2FnZScpO1xuXG5wcmljZUluZm8oJ3BhY2thZ2UnLCAncGFja2FnZScpO1xuc2Nyb2xsTnVtYmVyKCk7XG5zZXRWYWx1ZXMoKTtcblxuLy8g0JHQu9C+0Log0J/Qu9C10L3QutCwXG4iLCJpbXBvcnQge1xuICBjcmVhdFVsRWxlbWVudCxcbiAgY3JlYXRlQ29zdEVsZW1lbnQsXG4gIHBhY2thZ2VJbmZvLFxuICBzY3JvbGxOdW1iZXIsXG4gIHNldFZhbHVlcyxcbiAgcHJpY2VJbmZvLFxufSBmcm9tICcuL2Z1bmN0aW9uLmpzJztcbmltcG9ydCB7IHRhcGVDaGVja2JveCB9IGZyb20gJy4vY2hlY2tib3guanMnO1xuLy8g0JHQu9C+0Log0J/Qu9C10L3QutCwXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJywgJ3RhcGUnKTsgLy8sICd0YXBlJ1xuYmxvY2suaWQgPSAndGFwZSc7XG5cbnNlY3Rpb24uYXBwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5ibG9ja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX190aXRsZScpO1xuYmxvY2tUaXRsZS50ZXh0Q29udGVudCA9ICfQn9C70LXQvdC60LAnO1xuXG5ibG9jay5hcHBlbmQoYmxvY2tUaXRsZSwgdGFwZUNoZWNrYm94KCkpO1xuXG5jcmVhdFVsRWxlbWVudCgn0KjQuNGA0LjQvdCwJywgJ9GB0LwuJywgJ3dpZHRoVGFwZScsICd0YXBlJyk7XG5jcmVhdFVsRWxlbWVudCgn0KLQvtC70YnQuNC90LAnLCAn0LzQutC8LicsICd0aGlja25lc3NUYXBlJywgJ3RhcGUnKTtcbmNyZWF0VWxFbGVtZW50KCfQmtC+0LvQuNGH0LXRgdGC0LLQvicsICfQvC4nLCAnY2lyY3VsYXRpb25UYXBlJywgJ3RhcGUnKTtcbmNyZWF0VWxFbGVtZW50KCfQktC10YEnLCAn0LrQsy4nLCAnd2VpZ2h0VGFwZScsICd0YXBlJyk7XG5cbmNvbnN0IHByaWNlTWF0ZXJpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcmljZU1hdGVyaWFscy5jbGFzc0xpc3QuYWRkKCdibG9ja19fcHJpY2UtbWF0ZXJpYWxzJyk7XG5wcmljZU1hdGVyaWFscy5pZCA9ICd0YXBlLXByaWNlJztcblxuYmxvY2suYXBwZW5kKHByaWNlTWF0ZXJpYWxzKTtcblxuY3JlYXRlQ29zdEVsZW1lbnQoJ2Nvc3QtbWF0ZXJpYWxzJywgJ2Nvc3RUYXBlJywgJ9Ch0LXQsdC10YHRgi4uLicsICd0YXBlLXByaWNlJyk7XG5jcmVhdGVDb3N0RWxlbWVudCgnc2VsbGluZy1wcmljZScsICdzZWxsVGFwZScsICfQn9GA0L7QtNCw0LbQsCcsICd0YXBlLXByaWNlJyk7XG5cbnBhY2thZ2VJbmZvKCfQktC10YEg0LzQtdGC0YDQsCcsICfQsy4nLCAnb25lLXRhcGUnLCAndWxPbmUtdGFwZScsICd0YXBlJyk7XG5wYWNrYWdlSW5mbygn0JLQtdGBINC/0LDRgNGC0LjQuCcsICfQutCzLicsICdhbGwtdGFwZScsICd1bEFsbC10YXBlJywgJ3RhcGUnKTtcbnBhY2thZ2VJbmZvKCfQmtC+0Lst0LLQviDQvNC10YLRgNC+0LInLCAn0LwuJywgJ3RvdGFsLXRhcGUnLCAndWxUb3RhbC10YXBlJywgJ3RhcGUnKTtcblxucHJpY2VJbmZvKCd0YXBlJywgJ3RhcGUnKTtcbnNjcm9sbE51bWJlcigpO1xuc2V0VmFsdWVzKCk7XG4iLCJjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG5jb25zdCBjYWxjdWxhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3InKTtcbmNhbGN1bGF0b3Iuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7IC8vINCf0L7Qt9Cy0L7Qu9GP0LXRgiDQsdC70L7QutGDINC/0L7Qu9GD0YfQuNGC0Ywg0YTQvtC60YPRgVxuXG5zZWN0aW9uLmFwcGVuZChjYWxjdWxhdG9yKTtcblxuY29uc3QgY2FsY3VsYXRvckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbGN1bGF0b3JJbmZvLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3JfX2luZm8nKTtcbmNhbGN1bGF0b3JJbmZvLnRleHRDb250ZW50ID0gMDtcbmNhbGN1bGF0b3IuYXBwZW5kKGNhbGN1bGF0b3JJbmZvKTtcblxuZnVuY3Rpb24gc2V0VmFsdWUoaWQsIG5hbWVFbGVtZW50KSB7XG4gIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhbHVlLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3JfX2VsZW1lbnQnKTtcbiAgdmFsdWUuaWQgPSBpZDtcbiAgdmFsdWUudGV4dENvbnRlbnQgPSBuYW1lRWxlbWVudDtcblxuICBjYWxjdWxhdG9yLmFwcGVuZCh2YWx1ZSk7XG59XG5cbnNldFZhbHVlKCdjbGVhbicsICdBQycpO1xuc2V0VmFsdWUoJ2xhc3Qtc3ltYm9sJywgJ0NFJyk7XG5zZXRWYWx1ZSgncGVyY2VudCcsICclJyk7XG5zZXRWYWx1ZSgnZGl2aXNpb24nLCAnLycpO1xuc2V0VmFsdWUoJ3NldmVuJywgJzcnKTtcbnNldFZhbHVlKCdlaWdodCcsICc4Jyk7XG5zZXRWYWx1ZSgnbmluZScsICc5Jyk7XG5zZXRWYWx1ZSgnbXVsdGlwbHknLCAneCcpO1xuc2V0VmFsdWUoJ2ZvdXInLCAnNCcpO1xuc2V0VmFsdWUoJ2ZpdmUnLCAnNScpO1xuc2V0VmFsdWUoJ3NpeCcsICc2Jyk7XG5zZXRWYWx1ZSgnbWludXMnLCAnLScpO1xuc2V0VmFsdWUoJ29uZScsICcxJyk7XG5zZXRWYWx1ZSgndHdvJywgJzInKTtcbnNldFZhbHVlKCd0aHJlZScsICczJyk7XG5zZXRWYWx1ZSgncGx1cycsICcrJyk7XG5zZXRWYWx1ZSgnbnVsbCcsICcwJyk7XG5zZXRWYWx1ZSgnY29tbWEnLCAnLCcpO1xuc2V0VmFsdWUoJ2V2ZW5seScsICc9Jyk7XG5cbmxldCBjdXJyZW50SW5wdXQgPSAnMCc7XG5sZXQgb3BlcmF0b3IgPSBudWxsO1xubGV0IHByZXZpb3VzSW5wdXQgPSBudWxsO1xubGV0IGlzQ2FsY3VsYXRvckZvY3VzZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSh2YWx1ZSkge1xuICBjYWxjdWxhdG9ySW5mby50ZXh0Q29udGVudCA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhckFsbCgpIHtcbiAgY3VycmVudElucHV0ID0gJzAnO1xuICBvcGVyYXRvciA9IG51bGw7XG4gIHByZXZpb3VzSW5wdXQgPSBudWxsO1xuICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxhc3RTeW1ib2woKSB7XG4gIGlmIChjdXJyZW50SW5wdXQubGVuZ3RoID4gMSkge1xuICAgIGN1cnJlbnRJbnB1dCA9IGN1cnJlbnRJbnB1dC5zbGljZSgwLCAtMSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudElucHV0ID0gJzAnO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTnVtYmVyKG51bWJlcikge1xuICBpZiAoY3VycmVudElucHV0ID09PSAnMCcpIHtcbiAgICBjdXJyZW50SW5wdXQgPSBudW1iZXI7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudElucHV0ICs9IG51bWJlcjtcbiAgfVxuICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU9wZXJhdG9yKG9wKSB7XG4gIGlmIChwcmV2aW91c0lucHV0ID09PSBudWxsKSB7XG4gICAgcHJldmlvdXNJbnB1dCA9IGN1cnJlbnRJbnB1dDtcbiAgfSBlbHNlIGlmIChvcGVyYXRvcikge1xuICAgIHByZXZpb3VzSW5wdXQgPSBTdHJpbmcoY2FsY3VsYXRlKE51bWJlcihwcmV2aW91c0lucHV0KSwgTnVtYmVyKGN1cnJlbnRJbnB1dCksIG9wZXJhdG9yKSk7XG4gIH1cbiAgY3VycmVudElucHV0ID0gJzAnO1xuICBvcGVyYXRvciA9IG9wO1xuICB1cGRhdGVEaXNwbGF5KHByZXZpb3VzSW5wdXQpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoYSwgYiwgb3ApIHtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJysnOlxuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIGNhc2UgJy0nOlxuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIGNhc2UgJ3gnOlxuICAgICAgcmV0dXJuIGEgKiBiO1xuICAgIGNhc2UgJy8nOlxuICAgICAgcmV0dXJuIGEgLyBiO1xuICAgIGNhc2UgJyUnOlxuICAgICAgcmV0dXJuIGEgJSBiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYjtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcXVhbCgpIHtcbiAgaWYgKG9wZXJhdG9yICYmIHByZXZpb3VzSW5wdXQgIT09IG51bGwpIHtcbiAgICBjdXJyZW50SW5wdXQgPSBTdHJpbmcoY2FsY3VsYXRlKE51bWJlcihwcmV2aW91c0lucHV0KSwgTnVtYmVyKGN1cnJlbnRJbnB1dCksIG9wZXJhdG9yKSk7XG4gICAgb3BlcmF0b3IgPSBudWxsO1xuICAgIHByZXZpb3VzSW5wdXQgPSBudWxsO1xuICAgIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUVsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYWxjdWxhdG9yX19lbGVtZW50JykpIHtcbiAgICBhY3RpdmF0ZUVsZW1lbnQodGFyZ2V0KTtcblxuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ0FDJzpcbiAgICAgICAgY2xlYXJBbGwoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDRSc6XG4gICAgICAgIGRlbGV0ZUxhc3RTeW1ib2woKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcrJzpcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgY2FzZSAneCc6XG4gICAgICBjYXNlICcvJzpcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgICBoYW5kbGVPcGVyYXRvcih2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnPSc6XG4gICAgICAgIGhhbmRsZUVxdWFsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLCc6XG4gICAgICAgIGhhbmRsZU51bWJlcignLicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgaGFuZGxlTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFdmVudCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgaWYgKCFpc0NhbGN1bGF0b3JGb2N1c2VkKSByZXR1cm47XG5cbiAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgZGVsZXRlTGFzdFN5bWJvbCgpO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0LXN5bWJvbCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIGNsZWFyQWxsKCk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFuJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcrJzpcbiAgICBjYXNlICctJzpcbiAgICBjYXNlICcqJzpcbiAgICBjYXNlICcvJzpcbiAgICBjYXNlICclJzpcbiAgICAgIGxldCBvcGVyYXRvcktleSA9IGtleTtcbiAgICAgIGlmIChrZXkgPT09ICcqJykgb3BlcmF0b3JLZXkgPSAneCc7IC8vIFJlcGxhY2UgJyonIHdpdGggJ3gnXG4gICAgICBoYW5kbGVPcGVyYXRvcihvcGVyYXRvcktleSk7XG4gICAgICBlbGVtZW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRvcl9fZWxlbWVudCcpKS5maW5kKGVsID0+IGVsLnRleHRDb250ZW50ID09PSBvcGVyYXRvcktleSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFbnRlcic6XG4gICAgY2FzZSAnPSc6XG4gICAgICBoYW5kbGVFcXVhbCgpO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVubHknKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy4nOlxuICAgICAgaGFuZGxlTnVtYmVyKCcuJyk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1hJyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKCFpc05hTihrZXkpKSB7XG4gICAgICAgIGhhbmRsZU51bWJlcihrZXkpO1xuICAgICAgICBlbGVtZW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRvcl9fZWxlbWVudCcpKS5maW5kKGVsID0+IGVsLnRleHRDb250ZW50ID09PSBrZXkpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAoZWxlbWVudCkge1xuICAgIGFjdGl2YXRlRWxlbWVudChlbGVtZW50KTtcbiAgfVxufVxuXG5jYWxjdWxhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBpc0NhbGN1bGF0b3JGb2N1c2VkID0gdHJ1ZTtcbn0pO1xuXG5jYWxjdWxhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gIGlzQ2FsY3VsYXRvckZvY3VzZWQgPSBmYWxzZTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5ZG93bik7XG4iLCIvLyBpbXBvcnQgeyBibG9jayB9IGZyb20gXCIuL2Jsb2NrLXRhcGVcIjtcblxuZXhwb3J0IGxldCBmID0gMC45MjtcblxuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtY2hlY2tib3gnKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIGYgPSAwLjk1O1xuICAgIH0gZWxzZSB7XG4gICAgICBmID0gMC45MjtcbiAgICB9XG4gIH0pO1xuXG4vLyDQp9C10LrQsdC+0LrRgSDQv9C70LXQvdC60LBcbmV4cG9ydCBsZXQgZm9ybWF0ID0gMjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhcGVDaGVja2JveCgpIHtcbiAgY29uc3QgZm9ybWF0VGFwZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1hdFRhcGVCbG9jay5jbGFzc0xpc3QuYWRkKCdibG9ja19fdGFwZScpO1xuXG4gIGNvbnN0IGZvcm1hdFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvcm1hdFRhcGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX25hbWUnLCAnYmxvY2tfX25hbWUtZm9ybWF0Jyk7XG4gIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSAn0KDRg9C60LDQsic7XG5cbiAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2lucHV0Jyk7XG5cbiAgY29uc3QgbGFiZWxTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbFN3aXRjaC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcblxuICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRDaGVja2JveC5pZCA9ICdmb3JtYXQtY2hlY2tib3gnO1xuICBpbnB1dENoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gIGNvbnN0IHNwYW5TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5TbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG5cbiAgbGFiZWxTd2l0Y2guYXBwZW5kKGlucHV0Q2hlY2tib3gsIHNwYW5TbGlkZXIpO1xuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQobGFiZWxTd2l0Y2gpO1xuICBmb3JtYXRUYXBlQmxvY2suYXBwZW5kKGZvcm1hdFRhcGUsIGNoZWNrYm94Q29udGFpbmVyKTtcblxuICBpbnB1dENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gJ9Cf0L7Qu9C+0YLQvdC+JztcbiAgICAgIGZvcm1hdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSAn0KDRg9C60LDQsic7XG4gICAgICBmb3JtYXQgPSAyO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZvcm1hdFRhcGVCbG9jaztcbn1cblxuLy8gbGV0IGZvcm1hdCA9IFwi0KDRg9C60LDQslwiXG5cbi8vIGRvY3VtZW50XG4vLyAgIC5nZXRFbGVtZW50QnlJZChcImZvcm1hdC1jaGVja2JveFwiKVxuLy8gICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuLy8gICAgICAgY29uc29sZS5sb2coJ9Cg0YPQutCw0LInKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgY29uc29sZS5sb2coJ3BvbG90bm8nKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gZG9jdW1lbnRcbi8vICAgLmdldEVsZW1lbnRCeUlkKFwiZm9ybWF0LWNoZWNrYm94XCIpXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jsb2NrX19uYW1lLWZvcm1hdCcpLnRleHRDb250ZW50ID0gXCLQoNGD0LrQsNCyXCI7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmxvY2tfX25hbWUtZm9ybWF0JykudGV4dENvbnRlbnQgPSBcItCf0L7Qu9C+0YLQvdC+XCI7XG4vLyAgICAgfVxuLy8gICB9KTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHRhcGVDaGVja2JveCgpIHtcbi8vICAgY29uc3QgZm9ybWF0VGFwZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgZm9ybWF0VGFwZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fdGFwZVwiKTtcblxuLy8gICBjb25zdCBmb3JtYXRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyAgIGZvcm1hdFRhcGUuY2xhc3NMaXN0LmFkZChcImJsb2NcIik7XG4vLyAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcblxuLy8gICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgY29uc3QgbGFiZWxTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4vLyAgIGxhYmVsU3dpdGNoLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hcIik7XG5cbi8vICAgY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbi8vICAgaW5wdXRDaGVja2JveC5pZCA9IFwiZm9ybWF0LWNoZWNrYm94XCI7XG4vLyAgIGlucHV0Q2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuLy8gICBjb25zdCBzcGFuU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4vLyAgIHNwYW5TbGlkZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlclwiKTtcblxuLy8gICBsYWJlbFN3aXRjaC5hcHBlbmQoaW5wdXRDaGVja2JveCwgc3BhblNsaWRlcik7XG4vLyAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZChsYWJlbFN3aXRjaCk7XG4vLyAgIGZvcm1hdFRhcGVCbG9jay5hcHBlbmQoZm9ybWF0VGFwZSwgY2hlY2tib3hDb250YWluZXIpXG5cbi8vICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LHQu9C+0LrQsCDQsiDQvdGD0LbQvdC+0LUg0LzQtdGB0YLQvlxuLy8gICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXBlJyk7XG4vLyAgIGJsb2NrLnByZXBlbmQoZm9ybWF0VGFwZUJsb2NrKTtcblxuLy8gICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNC5INC00LvRjyDRh9C10LrQsdC+0LrRgdCwXG4vLyAgIGlucHV0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgaWYgKGlucHV0Q2hlY2tib3guY2hlY2tlZCkge1xuLy8gICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbi8vICAgICAgIGZvcm1hdCA9IDE7ICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbi8vICAgICAgIGZvcm1hdCA9IDI7ICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPXG4vLyAgICAgfVxuXG4vLyAgIH0pO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKGZvcm1hdCk7XG4vLyAgIHJldHVybiBmb3JtYXRUYXBlQmxvY2s7XG4vLyB9XG4iLCJpbXBvcnQgeyBmLCBmb3JtYXQgfSBmcm9tICcuL2NoZWNrYm94LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0VWxFbGVtZW50KG5hbWUsIGRzYywgaWQsIGZvcm1hdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pdGVtJyk7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaURzYy5jbGFzc0xpc3QuYWRkKCdibG9ja19fY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fbmFtZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fZHNjJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGxpVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9ICdudW1iZXInO1xuICBpbnB1dC5taW4gPSAxO1xuICBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pbnB1dCcpO1xuXG4gIGxpVmFsdWUuYXBwZW5kKGlucHV0KTtcbiAgdWwuYXBwZW5kKGxpRHNjLCBsaVZhbHVlKTtcblxuICBmb3JtYXQgPT09ICdwYWNrYWdlJ1xuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29zdEVsZW1lbnQobmFtZSwgaWQsIHBsYWNlaG9sZGVyLCBmb3JtYXQpIHtcbiAgY29uc3QgaW5wdXRDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRDb3N0LnR5cGUgPSAnbnVtYmVyJztcbiAgaW5wdXRDb3N0Lm1pbiA9IDE7XG4gIGlucHV0Q29zdC5pZCA9IGlkO1xuICBpbnB1dENvc3QucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dENvc3QuY2xhc3NMaXN0LmFkZChgYmxvY2tfXyR7bmFtZX1gKTtcbiAgaW5wdXRDb3N0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZS1wcmljZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoaW5wdXRDb3N0KVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChpbnB1dENvc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFja2FnZUluZm8obmFtZSwgZHNjLCBpZCwgdWxJZCwgZm9ybWF0KSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2l0ZW0nLCAnYmxvY2tfX2l0ZW0tZm9vdGVyJywgJ2hpZGRlbicpO1xuICB1bC5pZCA9IHVsSWQ7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaURzYy5jbGFzc0xpc3QuYWRkKCdibG9ja19fY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fbmFtZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdibG9ja19fZHNjJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGluZm9QYWNrYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvUGFja2FnZS5jbGFzc0xpc3QuYWRkKCdibG9ja19faW5mbycpO1xuICBpbmZvUGFja2FnZS5pZCA9IGlkO1xuXG4gIHVsLmFwcGVuZChsaURzYywgaW5mb1BhY2thZ2UpO1xuXG4gIGZvcm1hdCA9PT0gJ3BhY2thZ2UnXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmljZUluZm8oZm9ybWF0LCB0eXBlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb3N0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX2Nvc3QnLCAnaGlkZGVuJyk7XG4gIGNvc3RFbGVtZW50LmlkID0gYGZvb3Rlci1jb3N0LSR7dHlwZX1gO1xuXG4gIGNvbnN0IHNlbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzZWxsaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX3NlbGxpbmcnLCAnaGlkZGVuJyk7XG4gIHNlbGxpbmdFbGVtZW50LmlkID0gYGZvb3Rlci1zZWxsaW5nLSR7dHlwZX1gO1xuXG4gIGZvb3Rlci5hcHBlbmQoY29zdEVsZW1lbnQsIHNlbGxpbmdFbGVtZW50KTtcblxuICBjb25zdCBwcm9maXRFbGVtZW50VGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvZml0RWxlbWVudFRhcGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3Rlcl9wcm9maXQnLCAnaGlkZGVuJyk7XG4gIHByb2ZpdEVsZW1lbnRUYXBlLmlkID0gYGZvb3Rlci1wcm9maXQtJHt0eXBlfS1tYDtcblxuICBjb25zdCBwcm9maXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9maXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXJfcHJvZml0JywgJ2hpZGRlbicpO1xuICBwcm9maXRFbGVtZW50LmlkID0gYGZvb3Rlci1wcm9maXQtJHt0eXBlfWA7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50KVxuICAgIDogZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKVxuICAgICAgICAuYXBwZW5kKGZvb3RlciwgcHJvZml0RWxlbWVudFRhcGUsIHByb2ZpdEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgdmFsdWUsXG4gIHRleHRTZWxlY3RvcixcbiAgdWxTZWxlY3RvcixcbiAgbXVsdGlwbGllciA9IDEsXG4gIGRlY2ltYWxQbGFjZXMgPSAyLFxuKSB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0ZXh0U2VsZWN0b3IpO1xuICBjb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVsU2VsZWN0b3IpO1xuXG4gIGlmICh2YWx1ZSA+IDApIHtcbiAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9ICh2YWx1ZSAqIG11bHRpcGxpZXIpLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XG4gICAgdWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxJbmZvUGFja2FnZSgpIHtcbiAgbGV0IG9uZVBhY2thZ2UgPVxuICAgICh2YWx1ZXMud2lkdGggKiBmICogMiAqIHZhbHVlcy5oZWlnaHQgKiAodmFsdWVzLnRoaWNrbmVzcyAvIDEwMDAwKSkgLyAxMDAwO1xuICBsZXQgYWxsUGFja2FnZSA9IG9uZVBhY2thZ2UgKiB2YWx1ZXMuY2lyY3VsYXRpb247XG4gIGxldCB0b3RhbFBhY2thZ2UgPSB2YWx1ZXMud2VpZ2h0IC8gb25lUGFja2FnZTtcbiAgbGV0IHByaW1lUHJpY2UgPSB2YWx1ZXMuY29zdCAqIG9uZVBhY2thZ2U7XG4gIGxldCBidXlQcmljZSA9IHZhbHVlcy5zZWxsICogb25lUGFja2FnZTtcbiAgbGV0IHByb2ZpdCA9IChidXlQcmljZSAtIHByaW1lUHJpY2UpICogdmFsdWVzLmNpcmN1bGF0aW9uO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVQYWNrYWdlLCAnI29uZScsICcjdWxPbmUnLCAxMDAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oYWxsUGFja2FnZSwgJyNhbGwnLCAnI3VsQWxsJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsUGFja2FnZSwgJyN0b3RhbCcsICcjdWxUb3RhbCcsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlLCAnI2Zvb3Rlci1jb3N0LXBhY2thZ2UnLCAnI2Zvb3Rlci1jb3N0LXBhY2thZ2UnKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oXG4gICAgYnV5UHJpY2UsXG4gICAgJyNmb290ZXItc2VsbGluZy1wYWNrYWdlJyxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXBhY2thZ2UnLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXQsICcjZm9vdGVyLXByb2ZpdC1wYWNrYWdlJywgJyNmb290ZXItcHJvZml0LXBhY2thZ2UnKTtcbn1cblxuZnVuY3Rpb24gYWxsSW5mb1RhcGUoKSB7XG4gIGxldCBvbmVUYXBlID1cbiAgICAodmFsdWVzLndpZHRoVGFwZSAqIGYgKiBmb3JtYXQgKiAxMDAgKiAodmFsdWVzLnRoaWNrbmVzc1RhcGUgLyAxMDAwMCkpIC9cbiAgICAxMDAwO1xuICBsZXQgYWxsVGFwZSA9IG9uZVRhcGUgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlO1xuICBsZXQgdG90YWxUYXBlID0gdmFsdWVzLndlaWdodFRhcGUgLyBvbmVUYXBlO1xuICBsZXQgcHJpbWVQcmljZVRhcGUgPSB2YWx1ZXMuY29zdFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgYnV5UHJpY2VUYXBlID0gdmFsdWVzLnNlbGxUYXBlICogb25lVGFwZTtcbiAgbGV0IHByb2ZpdFRhcGUgPSAoYnV5UHJpY2VUYXBlIC0gcHJpbWVQcmljZVRhcGUpICogdmFsdWVzLmNpcmN1bGF0aW9uVGFwZTsgLy98fFxuICAvL051bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsLXRhcGVcIikudGV4dENvbnRlbnQpO1xuICBsZXQgcHJvZml0VGFwZUtnID0gKHZhbHVlcy5zZWxsVGFwZSAtIHZhbHVlcy5jb3N0VGFwZSkgKiB2YWx1ZXMud2VpZ2h0VGFwZTtcbiAgdXBkYXRlUGFja2FnZUluZm8ob25lVGFwZSwgJyNvbmUtdGFwZScsICcjdWxPbmUtdGFwZScsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxUYXBlLCAnI2FsbC10YXBlJywgJyN1bEFsbC10YXBlJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsVGFwZSwgJyN0b3RhbC10YXBlJywgJyN1bFRvdGFsLXRhcGUnLCAxLCAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJpbWVQcmljZVRhcGUsICcjZm9vdGVyLWNvc3QtdGFwZScsICcjZm9vdGVyLWNvc3QtdGFwZScpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZVRhcGUsXG4gICAgJyNmb290ZXItc2VsbGluZy10YXBlJyxcbiAgICAnI2Zvb3Rlci1zZWxsaW5nLXRhcGUnLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBwcm9maXRUYXBlLFxuICAgICcjZm9vdGVyLXByb2ZpdC10YXBlLW0nLFxuICAgICcjZm9vdGVyLXByb2ZpdC10YXBlLW0nLFxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXRUYXBlS2csICcjZm9vdGVyLXByb2ZpdC10YXBlJywgJyNmb290ZXItcHJvZml0LXRhcGUnKTtcbn1cblxubGV0IHZhbHVlcyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuY29uc29sZS5sb2codmFsdWVzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbE51bWJlcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQv9GA0L7QutGA0YPRgtC60YMg0YHRgtGA0LDQvdC40YbRi1xuXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKSkgfHwgMTsgLy8g0J/QvtC70YPRh9Cw0LXQvCDRiNCw0LMg0LjQt9C80LXQvdC10L3QuNGPICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAxKVxuICAgICAgICBjb25zdCBtaW4gPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ21pbicpKSB8fCAwOyAvLyDQn9C+0LvRg9GH0LDQtdC8INC80LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gMClcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAvLyDQn9GA0L7QutGA0YPRgtC60LAg0LLQstC10YDRhSwg0YPQstC10LvQuNGH0LjQstCw0LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IE51bWJlcih0aGlzLnZhbHVlKSArIHN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YLQutCwINCy0L3QuNC3LCDRg9C80LXQvdGM0YjQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSAo0LXRgdC70Lgg0LHQvtC70YzRiNC1INC40LvQuCDRgNCw0LLQvdC+INC80LjQvdC40LzQsNC70YzQvdC+0LzRgyDQt9C90LDRh9C10L3QuNGOKVxuICAgICAgICAgIHRoaXMudmFsdWUgPSBNYXRoLm1heChtaW4sIE51bWJlcih0aGlzLnZhbHVlKSAtIHN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IE51bWJlcihpbnB1dC52YWx1ZSkgfHwgMDtcbiAgICAgICAgYWxsSW5mb1BhY2thZ2UoKTtcbiAgICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmQnKTtcbmxldCBzcXVhcmVzID0gMjg4NjtcbmxldCBjb2xvcnMgPSBbJ3llbGxvdycsICdkYXJrYmx1ZScsICdwdXJwbGUnLCAnbGltZScsICd3aGl0ZScsICdncmF5JywgJ2dvbGQnLCAncGluaycsICdTYWxtb24nLCAnRGVlcFNreUJsdWUnLCAnVGVhbCddO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzOyBpKyspIHtcbiAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzZXRDb2xvcik7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVtb3ZlQ29sb3IpO1xuICBib2FyZC5hcHBlbmQoc3F1YXJlKTtcbn1cbmZ1bmN0aW9uIHNldENvbG9yKGV2dCkge1xuICBsZXQgZWxlbSA9IGV2dC50YXJnZXQ7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFuZG9tQ29sb3IoKTtcbiAgZWxlbS5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAnLmNvbmNhdChyYW5kb21Db2xvcigpLCAnLCAwIDAgMTBweCAnKS5jb25jYXQocmFuZG9tQ29sb3IoKSk7XG59XG5mdW5jdGlvbiByZW1vdmVDb2xvcihldnQpIHtcbiAgbGV0IGVsZW0gPSBldnQudGFyZ2V0O1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMWQxZDFkMWQnO1xuICBlbGVtLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMnB4ICMwMDAnO1xufVxubGV0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3Nhc3MvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay1wYWNrYWdlXCI7XG5pbXBvcnQgXCIuL2pzL3NxdWFyZVwiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay10YXBlXCI7XG5pbXBvcnQgXCIuL2pzL2NhbGN1bGF0b3JcIjtcbiJdLCJuYW1lcyI6WyJjcmVhdFVsRWxlbWVudCIsImNyZWF0ZUNvc3RFbGVtZW50IiwicGFja2FnZUluZm8iLCJzY3JvbGxOdW1iZXIiLCJzZXRWYWx1ZXMiLCJwcmljZUluZm8iLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmxvY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJwcmVwZW5kIiwiYmxvY2tUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kIiwicHJpY2VNYXRlcmlhbHMiLCJ0YXBlQ2hlY2tib3giLCJjYWxjdWxhdG9yIiwic2V0QXR0cmlidXRlIiwiY2FsY3VsYXRvckluZm8iLCJzZXRWYWx1ZSIsIm5hbWVFbGVtZW50IiwidmFsdWUiLCJjdXJyZW50SW5wdXQiLCJvcGVyYXRvciIsInByZXZpb3VzSW5wdXQiLCJpc0NhbGN1bGF0b3JGb2N1c2VkIiwidXBkYXRlRGlzcGxheSIsImNsZWFyQWxsIiwiZGVsZXRlTGFzdFN5bWJvbCIsImxlbmd0aCIsInNsaWNlIiwiaGFuZGxlTnVtYmVyIiwibnVtYmVyIiwiaGFuZGxlT3BlcmF0b3IiLCJvcCIsIlN0cmluZyIsImNhbGN1bGF0ZSIsIk51bWJlciIsImEiLCJiIiwiaGFuZGxlRXF1YWwiLCJhY3RpdmF0ZUVsZW1lbnQiLCJlbGVtZW50Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImhhbmRsZUV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImlzTmFOIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleWRvd24iLCJrZXkiLCJnZXRFbGVtZW50QnlJZCIsIm9wZXJhdG9yS2V5IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbmQiLCJlbCIsImYiLCJjaGVja2VkIiwiZm9ybWF0IiwiZm9ybWF0VGFwZUJsb2NrIiwiZm9ybWF0VGFwZSIsImNoZWNrYm94Q29udGFpbmVyIiwibGFiZWxTd2l0Y2giLCJpbnB1dENoZWNrYm94IiwidHlwZSIsInNwYW5TbGlkZXIiLCJuYW1lIiwiZHNjIiwidWwiLCJsaURzYyIsInRpdGxlIiwic3VidGl0bGUiLCJsaVZhbHVlIiwiaW5wdXQiLCJtaW4iLCJyZXF1aXJlZCIsImNvbmNhdCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDb3N0IiwidWxJZCIsImluZm9QYWNrYWdlIiwiZm9vdGVyIiwiY29zdEVsZW1lbnQiLCJzZWxsaW5nRWxlbWVudCIsInByb2ZpdEVsZW1lbnRUYXBlIiwicHJvZml0RWxlbWVudCIsInVwZGF0ZVBhY2thZ2VJbmZvIiwidGV4dFNlbGVjdG9yIiwidWxTZWxlY3RvciIsIm11bHRpcGxpZXIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJkZWNpbWFsUGxhY2VzIiwidGV4dEVsZW1lbnQiLCJ1bEVsZW1lbnQiLCJ0b0ZpeGVkIiwiYWxsSW5mb1BhY2thZ2UiLCJvbmVQYWNrYWdlIiwidmFsdWVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0aGlja25lc3MiLCJhbGxQYWNrYWdlIiwiY2lyY3VsYXRpb24iLCJ0b3RhbFBhY2thZ2UiLCJ3ZWlnaHQiLCJwcmltZVByaWNlIiwiY29zdCIsImJ1eVByaWNlIiwic2VsbCIsInByb2ZpdCIsImFsbEluZm9UYXBlIiwib25lVGFwZSIsIndpZHRoVGFwZSIsInRoaWNrbmVzc1RhcGUiLCJhbGxUYXBlIiwiY2lyY3VsYXRpb25UYXBlIiwidG90YWxUYXBlIiwid2VpZ2h0VGFwZSIsInByaW1lUHJpY2VUYXBlIiwiY29zdFRhcGUiLCJidXlQcmljZVRhcGUiLCJzZWxsVGFwZSIsInByb2ZpdFRhcGUiLCJwcm9maXRUYXBlS2ciLCJmb3JFYWNoIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0ZXAiLCJnZXRBdHRyaWJ1dGUiLCJkZWx0YVkiLCJNYXRoIiwibWF4IiwiYm9hcmQiLCJzcXVhcmVzIiwiY29sb3JzIiwiaSIsInNxdWFyZSIsInNldENvbG9yIiwicmVtb3ZlQ29sb3IiLCJldnQiLCJlbGVtIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyYW5kb21Db2xvciIsImJveFNoYWRvdyIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==