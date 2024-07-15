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
var section = document.querySelector("section");
var block = document.createElement("div");
block.classList.add("block", 'package');
block.id = 'package';
section.prepend(block);
var blockTitle = document.createElement("h2");
blockTitle.classList.add("block__title");
blockTitle.textContent = "Фасовка";
block.append(blockTitle);
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Ширина", "см.", "width", 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Высота", "см.", "height", 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Толщина", "мкм.", "thickness", 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Количество", "шт.", "circulation", 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Вес", "кг.", "weight", 'package');
var priceMaterials = document.createElement("div");
priceMaterials.classList.add("block__price-materials");
priceMaterials.id = 'package-price';
block.append(priceMaterials);
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.createCostElement)("cost-materials", 'cost', "Себест...", 'package-price');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.createCostElement)("selling-price", 'sell', "Продажа", 'package-price');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)("Вес пакета", "г.", 'one', 'ulOne', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)("Вес партии", "кг.", 'all', 'ulAll', 'package');
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)("Кол-во пакетов", "шт.", 'total', 'ulTotal', 'package');
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
var section = document.querySelector("section");
var block = document.createElement("div");
block.classList.add("block"); //, 'tape'
block.id = "tape";
section.append(block);
var blockTitle = document.createElement("h2");
blockTitle.classList.add("block__title");
blockTitle.textContent = "Пленка";
block.append(blockTitle, (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_1__.tapeCheckbox)());
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Ширина", "см.", "widthTape", "tape");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Толщина", "мкм.", "thicknessTape", "tape");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Количество", "м.", "circulationTape", "tape");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.creatUlElement)("Вес", "кг.", "weightTape", "tape");
var priceMaterials = document.createElement("div");
priceMaterials.classList.add("block__price-materials");
priceMaterials.id = "tape-price";
block.append(priceMaterials);
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.createCostElement)("cost-materials", "costTape", "Себест...", "tape-price");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.createCostElement)("selling-price", "sellTape", "Продажа", "tape-price");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)("Вес метра", "г.", "one-tape", "ulOne-tape", "tape");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)("Вес партии", "кг.", "all-tape", "ulAll-tape", "tape");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)("Кол-во метров", "м.", "total-tape", "ulTotal-tape", "tape");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.priceInfo)("tape", "tape");
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.scrollNumber)();
(0,_function_js__WEBPACK_IMPORTED_MODULE_0__.setValues)();

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
document.getElementById("toggle-checkbox").addEventListener("change", function () {
  if (this.checked) {
    f = 0.95;
  } else {
    f = 0.92;
  }
});

// Чекбокс пленка
var format = 2;
function tapeCheckbox() {
  var formatTapeBlock = document.createElement("div");
  formatTapeBlock.classList.add('block__tape');
  var formatTape = document.createElement("p");
  formatTape.classList.add("block__name", 'block__name-format');
  formatTape.textContent = "Рукав";
  var checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add('block__input');
  var labelSwitch = document.createElement("label");
  labelSwitch.classList.add("switch");
  var inputCheckbox = document.createElement("input");
  inputCheckbox.id = "format-checkbox";
  inputCheckbox.type = "checkbox";
  var spanSlider = document.createElement("span");
  spanSlider.classList.add("slider");
  labelSwitch.append(inputCheckbox, spanSlider);
  checkboxContainer.append(labelSwitch);
  formatTapeBlock.append(formatTape, checkboxContainer);
  inputCheckbox.addEventListener("change", function () {
    if (this.checked) {
      formatTape.textContent = "Полотно";
      format = 1;
    } else {
      formatTape.textContent = "Рукав";
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
// import { block, priceMaterials } from "./block-package.js";

function creatUlElement(name, dsc, id, format) {
  var ul = document.createElement("ul");
  ul.classList.add("block__item");
  var liDsc = document.createElement("li");
  liDsc.classList.add("block__container");
  var title = document.createElement("li");
  title.classList.add("block__name");
  title.textContent = name;
  var subtitle = document.createElement("li");
  subtitle.classList.add("block__dsc");
  subtitle.textContent = dsc;
  liDsc.append(title, subtitle);
  var liValue = document.createElement("li");
  var input = document.createElement("input");
  input.type = "number";
  input.min = 1;
  input.id = id;
  input.required = true;
  input.classList.add("block__input");
  liValue.append(input);
  ul.append(liDsc, liValue);
  format === "package" ? document.querySelector("#".concat(format)).append(ul) : document.querySelector("#".concat(format)).append(ul);
}
function createCostElement(name, id, placeholder, format) {
  var inputCost = document.createElement("input");
  inputCost.type = "number";
  inputCost.min = 1;
  inputCost.id = id;
  inputCost.required = true;
  inputCost.classList.add("block__".concat(name));
  inputCost.placeholder = placeholder;

  // priceMaterials.append(inputCost);
  format === "package-price" ? document.querySelector("#".concat(format)).append(inputCost) : document.querySelector("#".concat(format)).append(inputCost);
}
function packageInfo(name, dsc, id, ulId, format) {
  var ul = document.createElement("ul");
  ul.classList.add("block__item", "block__item-footer", "hidden");
  ul.id = ulId;
  var liDsc = document.createElement("li");
  liDsc.classList.add("block__container");
  var title = document.createElement("li");
  title.classList.add("block__name");
  title.textContent = name;
  var subtitle = document.createElement("li");
  subtitle.classList.add("block__dsc");
  subtitle.textContent = dsc;
  liDsc.append(title, subtitle);
  var infoPackage = document.createElement("p");
  infoPackage.classList.add("block__info");
  infoPackage.id = id;
  ul.append(liDsc, infoPackage);
  format === "package" ? document.querySelector("#".concat(format)).append(ul) : document.querySelector("#".concat(format)).append(ul);
}
function priceInfo(format, type) {
  var footer = document.createElement("div");
  footer.classList.add("block__footer");
  var costElement = document.createElement("p");
  costElement.classList.add("block__footer_cost", "hidden");
  // costElement.textContent = '20';
  costElement.id = "footer-cost-".concat(type);
  var sellingElement = document.createElement("p");
  sellingElement.classList.add("block__footer_selling", "hidden");
  // sellingElement.textContent = '20';
  sellingElement.id = "footer-selling-".concat(type);
  footer.append(costElement, sellingElement);
  var profitElementTape = document.createElement("p");
  profitElementTape.classList.add("block__footer_profit", "hidden");
  // profitElementTape.textContent = '20';
  profitElementTape.id = "footer-profit-".concat(type, "-m");
  var profitElement = document.createElement("p");
  profitElement.classList.add("block__footer_profit", "hidden");
  // profitElement.textContent = '20';
  profitElement.id = "footer-profit-".concat(type);

  // block.append(footer, profitElement);
  format === "package" ? document.querySelector("#".concat(format)).append(footer, profitElement) : document.querySelector("#".concat(format)).append(footer, profitElementTape, profitElement);
}
function updatePackageInfo(value, textSelector, ulSelector) {
  var multiplier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var decimalPlaces = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
  var textElement = document.querySelector(textSelector);
  var ulElement = document.querySelector(ulSelector);
  if (value > 0) {
    textElement.textContent = (value * multiplier).toFixed(decimalPlaces);
    ulElement.classList.remove("hidden");
  } else {
    ulElement.classList.add("hidden");
  }
}
function allInfoPackage() {
  var onePackage = values.width * _checkbox_js__WEBPACK_IMPORTED_MODULE_0__.f * 2 * values.height * (values.thickness / 10000) / 1000;
  var allPackage = onePackage * values.circulation;
  var totalPackage = values.weight / onePackage;
  var primePrice = values.cost * onePackage;
  var buyPrice = values.sell * onePackage;
  var profit = (buyPrice - primePrice) * values.circulation || Number(document.querySelector("#total").textContent);
  updatePackageInfo(onePackage, "#one", "#ulOne", 1000);
  updatePackageInfo(allPackage, "#all", "#ulAll");
  updatePackageInfo(totalPackage, "#total", "#ulTotal", 1, 0);
  updatePackageInfo(primePrice, "#footer-cost-package", "#footer-cost-package");
  updatePackageInfo(buyPrice, "#footer-selling-package", "#footer-selling-package");
  updatePackageInfo(profit, "#footer-profit-package", "#footer-profit-package");
}
function allInfoTape() {
  var oneTape = values.widthTape * _checkbox_js__WEBPACK_IMPORTED_MODULE_0__.f * _checkbox_js__WEBPACK_IMPORTED_MODULE_0__.format * 100 * (values.thicknessTape / 10000) / 1000;
  var allTape = oneTape * values.circulationTape;
  var totalTape = values.weightTape / oneTape;
  var primePriceTape = values.costTape * oneTape;
  var buyPriceTape = values.sellTape * oneTape;
  var profitTape = (buyPriceTape - primePriceTape) * values.circulationTape || Number(document.querySelector("#total-tape").textContent);
  var profitTapeKg = (values.sellTape - values.costTape) * values.weightTape;
  updatePackageInfo(oneTape, "#one-tape", "#ulOne-tape", 1000);
  updatePackageInfo(allTape, "#all-tape", "#ulAll-tape");
  updatePackageInfo(totalTape, "#total-tape", "#ulTotal-tape", 1, 0);
  updatePackageInfo(primePriceTape, "#footer-cost-tape", "#footer-cost-tape");
  updatePackageInfo(buyPriceTape, "#footer-selling-tape", "#footer-selling-tape");
  updatePackageInfo(profitTape, "#footer-profit-tape-m", "#footer-profit-tape-m");
  updatePackageInfo(profitTapeKg, "#footer-profit-tape", "#footer-profit-tape");
}

// let b2 ={
//   width : $('#width2').val(),              ширина см 
//   metr : $('#shtuk2').val(),               количество метров 
//   thickness : $('#thickness2').val(),      толщина мкм
//   heft : $('#ves2').val(),                 вес кг
//   self : $('#primePrice_block2').val(),     себестоимость
//   buy : $('#buyPrice_block2').val()                  продажная 
// };

// let Sebe = b2.self * calcVesOne;
// let Out = b2.buy * calcVesOne;
// let PlusM = (Out-Sebe) * b2.metr;
// let PlusKg = (b2.buy - b2.self)*b2.heft;
// $('.block2_out_param-1').text((calcVesOne*1000).toFixed(2));
//             $('.block2_out_param-2').text(calcVesAll.toFixed(2));
//             $('.block2_out_param-3').text(calcPart.toFixed(0));

//             $('.block2_money_out_box-1').text(Sebe.toFixed(2));
//             $('.block2_money_out_box-2').text(Out.toFixed(2));
//             $('.block2_money_cash_box-1').text(PlusM.toFixed(2));
//             $('.block2_money_cash_box-2').text(PlusKg.toFixed(2));

var values = {};
function setValues() {
  document.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("change", function () {
      values[input.id] = Number(input.value) || 0;
      allInfoPackage();
      allInfoTape();
    });
    input.addEventListener("focus", function () {
      this.select();
    });
  });
}
console.log(values);
function scrollNumber() {
  document.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("wheel", function (event) {
      if (this === document.activeElement) {
        event.preventDefault(); // Предотвращаем прокрутку страницы

        var step = Number(this.getAttribute("step")) || 1; // Получаем шаг изменения (по умолчанию 1)
        var min = Number(this.getAttribute("min")) || 0; // Получаем минимальное значение (по умолчанию 0)
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




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDQztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvYmxvY2stcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9ibG9jay10YXBlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9zYXNzL2luZGV4LnNjc3M/M2VkYSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRVbEVsZW1lbnQsXG4gIGNyZWF0ZUNvc3RFbGVtZW50LFxuICBwYWNrYWdlSW5mbyxcbiAgc2Nyb2xsTnVtYmVyLFxuICBzZXRWYWx1ZXMsXG4gIHByaWNlSW5mbyxcbn0gZnJvbSBcIi4vZnVuY3Rpb24uanNcIjtcbi8vINCR0LvQvtC6INCk0LDRgdC+0LLQutCwIFxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsICdwYWNrYWdlJyk7XG5ibG9jay5pZCA9ICdwYWNrYWdlJztcblxuc2VjdGlvbi5wcmVwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX190aXRsZVwiKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSBcItCk0LDRgdC+0LLQutCwXCI7XG5cbmJsb2NrLmFwcGVuZChibG9ja1RpdGxlKTtcblxuY3JlYXRVbEVsZW1lbnQoXCLQqNC40YDQuNC90LBcIiwgXCLRgdC8LlwiLCBcIndpZHRoXCIsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudChcItCS0YvRgdC+0YLQsFwiLCBcItGB0LwuXCIsIFwiaGVpZ2h0XCIsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudChcItCi0L7Qu9GJ0LjQvdCwXCIsIFwi0LzQutC8LlwiLCBcInRoaWNrbmVzc1wiLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoXCLQmtC+0LvQuNGH0LXRgdGC0LLQvlwiLCBcItGI0YIuXCIsIFwiY2lyY3VsYXRpb25cIiwgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KFwi0JLQtdGBXCIsIFwi0LrQsy5cIiwgXCJ3ZWlnaHRcIiwgJ3BhY2thZ2UnKTtcblxuZXhwb3J0IGNvbnN0IHByaWNlTWF0ZXJpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByaWNlTWF0ZXJpYWxzLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fcHJpY2UtbWF0ZXJpYWxzXCIpO1xucHJpY2VNYXRlcmlhbHMuaWQgPSAncGFja2FnZS1wcmljZSc7XG5cbmJsb2NrLmFwcGVuZChwcmljZU1hdGVyaWFscyk7XG5cbmNyZWF0ZUNvc3RFbGVtZW50KFwiY29zdC1tYXRlcmlhbHNcIiwgJ2Nvc3QnLCBcItCh0LXQsdC10YHRgi4uLlwiLCAncGFja2FnZS1wcmljZScpO1xuY3JlYXRlQ29zdEVsZW1lbnQoXCJzZWxsaW5nLXByaWNlXCIsICdzZWxsJywgXCLQn9GA0L7QtNCw0LbQsFwiLCAncGFja2FnZS1wcmljZScpO1xuXG5wYWNrYWdlSW5mbyhcItCS0LXRgSDQv9Cw0LrQtdGC0LBcIiwgXCLQsy5cIiwgJ29uZScsICd1bE9uZScsICdwYWNrYWdlJyk7XG5wYWNrYWdlSW5mbyhcItCS0LXRgSDQv9Cw0YDRgtC40LhcIiwgXCLQutCzLlwiLCAnYWxsJywgJ3VsQWxsJywgJ3BhY2thZ2UnKTtcbnBhY2thZ2VJbmZvKFwi0JrQvtC7LdCy0L4g0L/QsNC60LXRgtC+0LJcIiwgXCLRiNGCLlwiLCAndG90YWwnLCAndWxUb3RhbCcsICdwYWNrYWdlJyk7XG5cbnByaWNlSW5mbygncGFja2FnZScsICdwYWNrYWdlJyk7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuXG4vLyDQkdC70L7QuiDQn9C70LXQvdC60LBcbiIsImltcG9ydCB7XG4gIGNyZWF0VWxFbGVtZW50LFxuICBjcmVhdGVDb3N0RWxlbWVudCxcbiAgcGFja2FnZUluZm8sXG4gIHNjcm9sbE51bWJlcixcbiAgc2V0VmFsdWVzLFxuICBwcmljZUluZm8sXG59IGZyb20gXCIuL2Z1bmN0aW9uLmpzXCI7XG5pbXBvcnQgeyB0YXBlQ2hlY2tib3ggfSBmcm9tIFwiLi9jaGVja2JveC5qc1wiO1xuLy8g0JHQu9C+0Log0J/Qu9C10L3QutCwXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG5cbmV4cG9ydCBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7IC8vLCAndGFwZSdcbmJsb2NrLmlkID0gXCJ0YXBlXCI7XG5cbnNlY3Rpb24uYXBwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX190aXRsZVwiKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSBcItCf0LvQtdC90LrQsFwiO1xuXG5ibG9jay5hcHBlbmQoYmxvY2tUaXRsZSwgdGFwZUNoZWNrYm94KCkpO1xuXG5jcmVhdFVsRWxlbWVudChcItCo0LjRgNC40L3QsFwiLCBcItGB0LwuXCIsIFwid2lkdGhUYXBlXCIsIFwidGFwZVwiKTtcbmNyZWF0VWxFbGVtZW50KFwi0KLQvtC70YnQuNC90LBcIiwgXCLQvNC60LwuXCIsIFwidGhpY2tuZXNzVGFwZVwiLCBcInRhcGVcIik7XG5jcmVhdFVsRWxlbWVudChcItCa0L7Qu9C40YfQtdGB0YLQstC+XCIsIFwi0LwuXCIsIFwiY2lyY3VsYXRpb25UYXBlXCIsIFwidGFwZVwiKTtcbmNyZWF0VWxFbGVtZW50KFwi0JLQtdGBXCIsIFwi0LrQsy5cIiwgXCJ3ZWlnaHRUYXBlXCIsIFwidGFwZVwiKTtcblxuY29uc3QgcHJpY2VNYXRlcmlhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJpY2VNYXRlcmlhbHMuY2xhc3NMaXN0LmFkZChcImJsb2NrX19wcmljZS1tYXRlcmlhbHNcIik7XG5wcmljZU1hdGVyaWFscy5pZCA9IFwidGFwZS1wcmljZVwiO1xuXG5ibG9jay5hcHBlbmQocHJpY2VNYXRlcmlhbHMpO1xuXG5jcmVhdGVDb3N0RWxlbWVudChcImNvc3QtbWF0ZXJpYWxzXCIsIFwiY29zdFRhcGVcIiwgXCLQodC10LHQtdGB0YIuLi5cIiwgXCJ0YXBlLXByaWNlXCIpO1xuY3JlYXRlQ29zdEVsZW1lbnQoXCJzZWxsaW5nLXByaWNlXCIsIFwic2VsbFRhcGVcIiwgXCLQn9GA0L7QtNCw0LbQsFwiLCBcInRhcGUtcHJpY2VcIik7XG5cbnBhY2thZ2VJbmZvKFwi0JLQtdGBINC80LXRgtGA0LBcIiwgXCLQsy5cIiwgXCJvbmUtdGFwZVwiLCBcInVsT25lLXRhcGVcIiwgXCJ0YXBlXCIpO1xucGFja2FnZUluZm8oXCLQktC10YEg0L/QsNGA0YLQuNC4XCIsIFwi0LrQsy5cIiwgXCJhbGwtdGFwZVwiLCBcInVsQWxsLXRhcGVcIiwgXCJ0YXBlXCIpO1xucGFja2FnZUluZm8oXCLQmtC+0Lst0LLQviDQvNC10YLRgNC+0LJcIiwgXCLQvC5cIiwgXCJ0b3RhbC10YXBlXCIsIFwidWxUb3RhbC10YXBlXCIsIFwidGFwZVwiKTtcblxucHJpY2VJbmZvKFwidGFwZVwiLCBcInRhcGVcIik7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuIiwiLy8gaW1wb3J0IHsgYmxvY2sgfSBmcm9tIFwiLi9ibG9jay10YXBlXCI7XG5cbmV4cG9ydCBsZXQgZiA9IDAuOTI7XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1jaGVja2JveFwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZiA9IDAuOTU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGYgPSAwLjkyO1xuICAgIH1cbiAgfSk7XG5cbi8vINCn0LXQutCx0L7QutGBINC/0LvQtdC90LrQsFxuZXhwb3J0IGxldCBmb3JtYXQgPSAyO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFwZUNoZWNrYm94KCkge1xuICBjb25zdCBmb3JtYXRUYXBlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RhcGUnKTtcblxuICBjb25zdCBmb3JtYXRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1hdFRhcGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX19uYW1lXCIsICdibG9ja19fbmFtZS1mb3JtYXQnKTtcbiAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2lucHV0JylcblxuICBjb25zdCBsYWJlbFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcblxuICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dENoZWNrYm94LmlkID0gXCJmb3JtYXQtY2hlY2tib3hcIjtcbiAgaW5wdXRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gIGNvbnN0IHNwYW5TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3BhblNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuXG4gIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbiAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcilcblxuICBpbnB1dENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbiAgICAgICAgICBmb3JtYXQgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbiAgICAgICAgICBmb3JtYXQgPSAyO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICByZXR1cm4gZm9ybWF0VGFwZUJsb2NrO1xufVxuXG4vLyBsZXQgZm9ybWF0ID0gXCLQoNGD0LrQsNCyXCJcblxuLy8gZG9jdW1lbnRcbi8vICAgLmdldEVsZW1lbnRCeUlkKFwiZm9ybWF0LWNoZWNrYm94XCIpXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygn0KDRg9C60LDQsicpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygncG9sb3RubycpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyBkb2N1bWVudFxuLy8gICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtYXQtY2hlY2tib3hcIilcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmxvY2tfX25hbWUtZm9ybWF0JykudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdibG9ja19fbmFtZS1mb3JtYXQnKS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gdGFwZUNoZWNrYm94KCkge1xuLy8gICBjb25zdCBmb3JtYXRUYXBlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrX190YXBlXCIpO1xuXG4vLyAgIGNvbnN0IGZvcm1hdFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgZm9ybWF0VGFwZS5jbGFzc0xpc3QuYWRkKFwiYmxvY1wiKTtcbi8vICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuXG4vLyAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICBjb25zdCBsYWJlbFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbi8vICAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcblxuLy8gICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICBpbnB1dENoZWNrYm94LmlkID0gXCJmb3JtYXQtY2hlY2tib3hcIjtcbi8vICAgaW5wdXRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4vLyAgIGNvbnN0IHNwYW5TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgc3BhblNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuXG4vLyAgIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbi8vICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbi8vICAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcilcblxuLy8gICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQsdC70L7QutCwINCyINC90YPQttC90L7QtSDQvNC10YHRgtC+XG4vLyAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcGUnKTtcbi8vICAgYmxvY2sucHJlcGVuZChmb3JtYXRUYXBlQmxvY2spO1xuICBcblxuLy8gICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNC5INC00LvRjyDRh9C10LrQsdC+0LrRgdCwXG4vLyAgIGlucHV0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgaWYgKGlucHV0Q2hlY2tib3guY2hlY2tlZCkge1xuLy8gICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbi8vICAgICAgIGZvcm1hdCA9IDE7ICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbi8vICAgICAgIGZvcm1hdCA9IDI7ICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPXG4vLyAgICAgfVxuICAgIFxuLy8gICB9KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhmb3JtYXQpO1xuLy8gICByZXR1cm4gZm9ybWF0VGFwZUJsb2NrO1xuLy8gfSIsIi8vIGltcG9ydCB7IGJsb2NrLCBwcmljZU1hdGVyaWFscyB9IGZyb20gXCIuL2Jsb2NrLXBhY2thZ2UuanNcIjtcbmltcG9ydCB7IGYsIGZvcm1hdCB9IGZyb20gXCIuL2NoZWNrYm94LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdFVsRWxlbWVudChuYW1lLCBkc2MsIGlkLCBmb3JtYXQpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJibG9ja19faXRlbVwiKTtcblxuICBjb25zdCBsaURzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlEc2MuY2xhc3NMaXN0LmFkZChcImJsb2NrX19jb250YWluZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fbmFtZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2RzY1wiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBkc2M7XG5cbiAgbGlEc2MuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cbiAgY29uc3QgbGlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gIGlucHV0Lm1pbiA9IDE7XG4gIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImJsb2NrX19pbnB1dFwiKTtcblxuICBsaVZhbHVlLmFwcGVuZChpbnB1dCk7XG4gIHVsLmFwcGVuZChsaURzYywgbGlWYWx1ZSk7XG5cbiAgZm9ybWF0ID09PSBcInBhY2thZ2VcIlxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29zdEVsZW1lbnQobmFtZSwgaWQsIHBsYWNlaG9sZGVyLCBmb3JtYXQpIHtcbiAgY29uc3QgaW5wdXRDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dENvc3QudHlwZSA9IFwibnVtYmVyXCI7XG4gIGlucHV0Q29zdC5taW4gPSAxO1xuICBpbnB1dENvc3QuaWQgPSBpZDtcbiAgaW5wdXRDb3N0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXRDb3N0LmNsYXNzTGlzdC5hZGQoYGJsb2NrX18ke25hbWV9YCk7XG4gIGlucHV0Q29zdC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXG4gIC8vIHByaWNlTWF0ZXJpYWxzLmFwcGVuZChpbnB1dENvc3QpO1xuICBmb3JtYXQgPT09IFwicGFja2FnZS1wcmljZVwiXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGlucHV0Q29zdClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoaW5wdXRDb3N0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhY2thZ2VJbmZvKG5hbWUsIGRzYywgaWQsIHVsSWQsIGZvcm1hdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdWwuY2xhc3NMaXN0LmFkZChcImJsb2NrX19pdGVtXCIsIFwiYmxvY2tfX2l0ZW0tZm9vdGVyXCIsIFwiaGlkZGVuXCIpO1xuICB1bC5pZCA9IHVsSWQ7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpRHNjLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX25hbWVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX19kc2NcIik7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGluZm9QYWNrYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm9QYWNrYWdlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19faW5mb1wiKTtcbiAgaW5mb1BhY2thZ2UuaWQgPSBpZDtcblxuICB1bC5hcHBlbmQobGlEc2MsIGluZm9QYWNrYWdlKTtcblxuICBmb3JtYXQgPT09IFwicGFja2FnZVwiXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmljZUluZm8oZm9ybWF0LCB0eXBlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2Zvb3RlclwiKTtcblxuICBjb25zdCBjb3N0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3N0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2Zvb3Rlcl9jb3N0XCIsIFwiaGlkZGVuXCIpO1xuICAvLyBjb3N0RWxlbWVudC50ZXh0Q29udGVudCA9ICcyMCc7XG4gIGNvc3RFbGVtZW50LmlkID0gYGZvb3Rlci1jb3N0LSR7dHlwZX1gO1xuXG4gIGNvbnN0IHNlbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNlbGxpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3NlbGxpbmdcIiwgXCJoaWRkZW5cIik7XG4gIC8vIHNlbGxpbmdFbGVtZW50LnRleHRDb250ZW50ID0gJzIwJztcbiAgc2VsbGluZ0VsZW1lbnQuaWQgPSBgZm9vdGVyLXNlbGxpbmctJHt0eXBlfWA7XG5cbiAgZm9vdGVyLmFwcGVuZChjb3N0RWxlbWVudCwgc2VsbGluZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2ZpdEVsZW1lbnRUYXBlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3Byb2ZpdFwiLCBcImhpZGRlblwiKTtcbiAgLy8gcHJvZml0RWxlbWVudFRhcGUudGV4dENvbnRlbnQgPSAnMjAnO1xuICBwcm9maXRFbGVtZW50VGFwZS5pZCA9IGBmb290ZXItcHJvZml0LSR7dHlwZX0tbWA7XG5cbiAgY29uc3QgcHJvZml0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9maXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3Byb2ZpdFwiLCBcImhpZGRlblwiKTtcbiAgLy8gcHJvZml0RWxlbWVudC50ZXh0Q29udGVudCA9ICcyMCc7XG4gIHByb2ZpdEVsZW1lbnQuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9YDtcblxuICAvLyBibG9jay5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50KTtcbiAgZm9ybWF0ID09PSBcInBhY2thZ2VcIlxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChmb290ZXIsIHByb2ZpdEVsZW1lbnQpXG4gICAgOiBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApXG4gICAgICAgIC5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50VGFwZSwgcHJvZml0RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICB2YWx1ZSxcbiAgdGV4dFNlbGVjdG9yLFxuICB1bFNlbGVjdG9yLFxuICBtdWx0aXBsaWVyID0gMSxcbiAgZGVjaW1hbFBsYWNlcyA9IDJcbikge1xuICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGV4dFNlbGVjdG9yKTtcbiAgY29uc3QgdWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1bFNlbGVjdG9yKTtcblxuICBpZiAodmFsdWUgPiAwKSB7XG4gICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSAodmFsdWUgKiBtdWx0aXBsaWVyKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFsbEluZm9QYWNrYWdlKCkge1xuICBsZXQgb25lUGFja2FnZSA9XG4gICAgKHZhbHVlcy53aWR0aCAqIGYgKiAyICogdmFsdWVzLmhlaWdodCAqICh2YWx1ZXMudGhpY2tuZXNzIC8gMTAwMDApKSAvIDEwMDA7XG4gIGxldCBhbGxQYWNrYWdlID0gb25lUGFja2FnZSAqIHZhbHVlcy5jaXJjdWxhdGlvbjtcbiAgbGV0IHRvdGFsUGFja2FnZSA9IHZhbHVlcy53ZWlnaHQgLyBvbmVQYWNrYWdlO1xuICBsZXQgcHJpbWVQcmljZSA9IHZhbHVlcy5jb3N0ICogb25lUGFja2FnZTtcbiAgbGV0IGJ1eVByaWNlID0gdmFsdWVzLnNlbGwgKiBvbmVQYWNrYWdlO1xuICBsZXQgcHJvZml0ID1cbiAgICAoYnV5UHJpY2UgLSBwcmltZVByaWNlKSAqIHZhbHVlcy5jaXJjdWxhdGlvbiB8fFxuICAgIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsXCIpLnRleHRDb250ZW50KTtcbiAgdXBkYXRlUGFja2FnZUluZm8ob25lUGFja2FnZSwgXCIjb25lXCIsIFwiI3VsT25lXCIsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxQYWNrYWdlLCBcIiNhbGxcIiwgXCIjdWxBbGxcIik7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsUGFja2FnZSwgXCIjdG90YWxcIiwgXCIjdWxUb3RhbFwiLCAxLCAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJpbWVQcmljZSwgXCIjZm9vdGVyLWNvc3QtcGFja2FnZVwiLCBcIiNmb290ZXItY29zdC1wYWNrYWdlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZSxcbiAgICBcIiNmb290ZXItc2VsbGluZy1wYWNrYWdlXCIsXG4gICAgXCIjZm9vdGVyLXNlbGxpbmctcGFja2FnZVwiXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByb2ZpdCwgXCIjZm9vdGVyLXByb2ZpdC1wYWNrYWdlXCIsIFwiI2Zvb3Rlci1wcm9maXQtcGFja2FnZVwiKTtcbn1cblxuZnVuY3Rpb24gYWxsSW5mb1RhcGUoKSB7XG4gIGxldCBvbmVUYXBlID1cbiAgICAodmFsdWVzLndpZHRoVGFwZSAqIGYgKiBmb3JtYXQgKiAxMDAgKiAodmFsdWVzLnRoaWNrbmVzc1RhcGUgLyAxMDAwMCkpIC9cbiAgICAxMDAwO1xuICBsZXQgYWxsVGFwZSA9IG9uZVRhcGUgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlO1xuICBsZXQgdG90YWxUYXBlID0gdmFsdWVzLndlaWdodFRhcGUgLyBvbmVUYXBlO1xuICBsZXQgcHJpbWVQcmljZVRhcGUgPSB2YWx1ZXMuY29zdFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgYnV5UHJpY2VUYXBlID0gdmFsdWVzLnNlbGxUYXBlICogb25lVGFwZTtcbiAgbGV0IHByb2ZpdFRhcGUgPVxuICAgIChidXlQcmljZVRhcGUgLSBwcmltZVByaWNlVGFwZSkgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlIHx8XG4gICAgTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtdGFwZVwiKS50ZXh0Q29udGVudCk7XG4gIGxldCBwcm9maXRUYXBlS2cgPSAodmFsdWVzLnNlbGxUYXBlIC0gdmFsdWVzLmNvc3RUYXBlKSAqIHZhbHVlcy53ZWlnaHRUYXBlO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVUYXBlLCBcIiNvbmUtdGFwZVwiLCBcIiN1bE9uZS10YXBlXCIsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxUYXBlLCBcIiNhbGwtdGFwZVwiLCBcIiN1bEFsbC10YXBlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyh0b3RhbFRhcGUsIFwiI3RvdGFsLXRhcGVcIiwgXCIjdWxUb3RhbC10YXBlXCIsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlVGFwZSwgXCIjZm9vdGVyLWNvc3QtdGFwZVwiLCBcIiNmb290ZXItY29zdC10YXBlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZVRhcGUsXG4gICAgXCIjZm9vdGVyLXNlbGxpbmctdGFwZVwiLFxuICAgIFwiI2Zvb3Rlci1zZWxsaW5nLXRhcGVcIlxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXRUYXBlLCBcIiNmb290ZXItcHJvZml0LXRhcGUtbVwiLCBcIiNmb290ZXItcHJvZml0LXRhcGUtbVwiKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJvZml0VGFwZUtnLCBcIiNmb290ZXItcHJvZml0LXRhcGVcIiwgXCIjZm9vdGVyLXByb2ZpdC10YXBlXCIpO1xufVxuXG4vLyBsZXQgYjIgPXtcbi8vICAgd2lkdGggOiAkKCcjd2lkdGgyJykudmFsKCksICAgICAgICAgICAgICDRiNC40YDQuNC90LAg0YHQvCBcbi8vICAgbWV0ciA6ICQoJyNzaHR1azInKS52YWwoKSwgICAgICAgICAgICAgICDQutC+0LvQuNGH0LXRgdGC0LLQviDQvNC10YLRgNC+0LIgXG4vLyAgIHRoaWNrbmVzcyA6ICQoJyN0aGlja25lc3MyJykudmFsKCksICAgICAg0YLQvtC70YnQuNC90LAg0LzQutC8XG4vLyAgIGhlZnQgOiAkKCcjdmVzMicpLnZhbCgpLCAgICAgICAgICAgICAgICAg0LLQtdGBINC60LNcbi8vICAgc2VsZiA6ICQoJyNwcmltZVByaWNlX2Jsb2NrMicpLnZhbCgpLCAgICAg0YHQtdCx0LXRgdGC0L7QuNC80L7RgdGC0Yxcbi8vICAgYnV5IDogJCgnI2J1eVByaWNlX2Jsb2NrMicpLnZhbCgpICAgICAgICAgICAgICAgICAg0L/RgNC+0LTQsNC20L3QsNGPIFxuLy8gfTtcblxuXG5cbi8vIGxldCBTZWJlID0gYjIuc2VsZiAqIGNhbGNWZXNPbmU7XG4vLyBsZXQgT3V0ID0gYjIuYnV5ICogY2FsY1Zlc09uZTtcbi8vIGxldCBQbHVzTSA9IChPdXQtU2ViZSkgKiBiMi5tZXRyO1xuLy8gbGV0IFBsdXNLZyA9IChiMi5idXkgLSBiMi5zZWxmKSpiMi5oZWZ0O1xuLy8gJCgnLmJsb2NrMl9vdXRfcGFyYW0tMScpLnRleHQoKGNhbGNWZXNPbmUqMTAwMCkudG9GaXhlZCgyKSk7XG4vLyAgICAgICAgICAgICAkKCcuYmxvY2syX291dF9wYXJhbS0yJykudGV4dChjYWxjVmVzQWxsLnRvRml4ZWQoMikpO1xuLy8gICAgICAgICAgICAgJCgnLmJsb2NrMl9vdXRfcGFyYW0tMycpLnRleHQoY2FsY1BhcnQudG9GaXhlZCgwKSk7XG5cbi8vICAgICAgICAgICAgICQoJy5ibG9jazJfbW9uZXlfb3V0X2JveC0xJykudGV4dChTZWJlLnRvRml4ZWQoMikpO1xuLy8gICAgICAgICAgICAgJCgnLmJsb2NrMl9tb25leV9vdXRfYm94LTInKS50ZXh0KE91dC50b0ZpeGVkKDIpKTtcbi8vICAgICAgICAgICAgICQoJy5ibG9jazJfbW9uZXlfY2FzaF9ib3gtMScpLnRleHQoUGx1c00udG9GaXhlZCgyKSk7XG4vLyAgICAgICAgICAgICAkKCcuYmxvY2syX21vbmV5X2Nhc2hfYm94LTInKS50ZXh0KFBsdXNLZy50b0ZpeGVkKDIpKTtcblxubGV0IHZhbHVlcyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YWx1ZXNbaW5wdXQuaWRdID0gTnVtYmVyKGlucHV0LnZhbHVlKSB8fCAwO1xuICAgICAgYWxsSW5mb1BhY2thZ2UoKTtcbiAgICAgIGFsbEluZm9UYXBlKCk7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuY29uc29sZS5sb2codmFsdWVzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbE51bWJlcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHRoaXMgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8g0J/RgNC10LTQvtGC0LLRgNCw0YnQsNC10Lwg0L/RgNC+0LrRgNGD0YLQutGDINGB0YLRgNCw0L3QuNGG0YtcblxuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSkgfHwgMTsgLy8g0J/QvtC70YPRh9Cw0LXQvCDRiNCw0LMg0LjQt9C80LXQvdC10L3QuNGPICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAxKVxuICAgICAgICBjb25zdCBtaW4gPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpIHx8IDA7IC8vINCf0L7Qu9GD0YfQsNC10Lwg0LzQuNC90LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1ICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAwKVxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgICAgIC8vINCf0YDQvtC60YDRg9GC0LrQsCDQstCy0LXRgNGFLCDRg9Cy0LXQu9C40YfQuNCy0LDQtdC8INC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgICB0aGlzLnZhbHVlID0gTnVtYmVyKHRoaXMudmFsdWUpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyDQn9GA0L7QutGA0YPRgtC60LAg0LLQvdC40LcsINGD0LzQtdC90YzRiNCw0LXQvCDQt9C90LDRh9C10L3QuNC1ICjQtdGB0LvQuCDQsdC+0LvRjNGI0LUg0LjQu9C4INGA0LDQstC90L4g0LzQuNC90LjQvNCw0LvRjNC90L7QvNGDINC30L3QsNGH0LXQvdC40Y4pXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IE1hdGgubWF4KG1pbiwgTnVtYmVyKHRoaXMudmFsdWUpIC0gc3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZXNbaW5wdXQuaWRdID0gTnVtYmVyKGlucHV0LnZhbHVlKSB8fCAwO1xuICAgICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgICBhbGxJbmZvVGFwZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZCcpO1xubGV0IHNxdWFyZXMgPSAyODg2O1xubGV0IGNvbG9ycyA9IFsneWVsbG93JywgJ2RhcmtibHVlJywgJ3B1cnBsZScsICdsaW1lJywgJ3doaXRlJywgJ2dyYXknLCAnZ29sZCcsICdwaW5rJywgJ1NhbG1vbicsICdEZWVwU2t5Qmx1ZScsICdUZWFsJ107XG5mb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXM7IGkrKykge1xuICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNldENvbG9yKTtcbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVDb2xvcik7XG4gIGJvYXJkLmFwcGVuZChzcXVhcmUpO1xufVxuZnVuY3Rpb24gc2V0Q29sb3IoZXZ0KSB7XG4gIGxldCBlbGVtID0gZXZ0LnRhcmdldDtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByYW5kb21Db2xvcigpO1xuICBlbGVtLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMnB4ICcuY29uY2F0KHJhbmRvbUNvbG9yKCksICcsIDAgMCAxMHB4ICcpLmNvbmNhdChyYW5kb21Db2xvcigpKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUNvbG9yKGV2dCkge1xuICBsZXQgZWxlbSA9IGV2dC50YXJnZXQ7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxZDFkMWQxZCc7XG4gIGVsZW0uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggIzAwMCc7XG59XG5sZXQgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Fzcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL2pzL2Jsb2NrLXBhY2thZ2VcIjtcbmltcG9ydCBcIi4vanMvc3F1YXJlXCI7XG5pbXBvcnQgXCIuL2pzL2Jsb2NrLXRhcGVcIjtcbiJdLCJuYW1lcyI6WyJjcmVhdFVsRWxlbWVudCIsImNyZWF0ZUNvc3RFbGVtZW50IiwicGFja2FnZUluZm8iLCJzY3JvbGxOdW1iZXIiLCJzZXRWYWx1ZXMiLCJwcmljZUluZm8iLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmxvY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJwcmVwZW5kIiwiYmxvY2tUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kIiwicHJpY2VNYXRlcmlhbHMiLCJ0YXBlQ2hlY2tib3giLCJmIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tlZCIsImZvcm1hdCIsImZvcm1hdFRhcGVCbG9jayIsImZvcm1hdFRhcGUiLCJjaGVja2JveENvbnRhaW5lciIsImxhYmVsU3dpdGNoIiwiaW5wdXRDaGVja2JveCIsInR5cGUiLCJzcGFuU2xpZGVyIiwibmFtZSIsImRzYyIsInVsIiwibGlEc2MiLCJ0aXRsZSIsInN1YnRpdGxlIiwibGlWYWx1ZSIsImlucHV0IiwibWluIiwicmVxdWlyZWQiLCJjb25jYXQiLCJwbGFjZWhvbGRlciIsImlucHV0Q29zdCIsInVsSWQiLCJpbmZvUGFja2FnZSIsImZvb3RlciIsImNvc3RFbGVtZW50Iiwic2VsbGluZ0VsZW1lbnQiLCJwcm9maXRFbGVtZW50VGFwZSIsInByb2ZpdEVsZW1lbnQiLCJ1cGRhdGVQYWNrYWdlSW5mbyIsInZhbHVlIiwidGV4dFNlbGVjdG9yIiwidWxTZWxlY3RvciIsIm11bHRpcGxpZXIiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWNpbWFsUGxhY2VzIiwidGV4dEVsZW1lbnQiLCJ1bEVsZW1lbnQiLCJ0b0ZpeGVkIiwicmVtb3ZlIiwiYWxsSW5mb1BhY2thZ2UiLCJvbmVQYWNrYWdlIiwidmFsdWVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0aGlja25lc3MiLCJhbGxQYWNrYWdlIiwiY2lyY3VsYXRpb24iLCJ0b3RhbFBhY2thZ2UiLCJ3ZWlnaHQiLCJwcmltZVByaWNlIiwiY29zdCIsImJ1eVByaWNlIiwic2VsbCIsInByb2ZpdCIsIk51bWJlciIsImFsbEluZm9UYXBlIiwib25lVGFwZSIsIndpZHRoVGFwZSIsInRoaWNrbmVzc1RhcGUiLCJhbGxUYXBlIiwiY2lyY3VsYXRpb25UYXBlIiwidG90YWxUYXBlIiwid2VpZ2h0VGFwZSIsInByaW1lUHJpY2VUYXBlIiwiY29zdFRhcGUiLCJidXlQcmljZVRhcGUiLCJzZWxsVGFwZSIsInByb2ZpdFRhcGUiLCJwcm9maXRUYXBlS2ciLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0ZXAiLCJnZXRBdHRyaWJ1dGUiLCJkZWx0YVkiLCJNYXRoIiwibWF4IiwiYm9hcmQiLCJzcXVhcmVzIiwiY29sb3JzIiwiaSIsInNxdWFyZSIsInNldENvbG9yIiwicmVtb3ZlQ29sb3IiLCJldnQiLCJlbGVtIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyYW5kb21Db2xvciIsImJveFNoYWRvdyIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==