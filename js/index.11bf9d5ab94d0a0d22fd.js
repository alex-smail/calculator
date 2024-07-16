/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/index/js/block-package.js":
/*!*****************************************!*\
  !*** ./pages/index/js/block-package.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./pages/index/sass/index.scss":
/*!*************************************!*\
  !*** ./pages/index/sass/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ "./pages/index/sass/index.scss");
/* harmony import */ var _js_block_package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/block-package */ "./pages/index/js/block-package.js");
/* harmony import */ var _js_block_tape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/block-tape */ "./pages/index/js/block-tape.js");


// import "./js/square";

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUN3QixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJSixLQUFLLENBQUNLLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDcEI7VUFDQSxJQUFJLENBQUNwRCxLQUFLLEdBQUcyQixNQUFNLENBQUMsSUFBSSxDQUFDM0IsS0FBSyxDQUFDLEdBQUdrRCxJQUFJO1FBQ3hDLENBQUMsTUFBTTtVQUNMO1VBQ0EsSUFBSSxDQUFDbEQsS0FBSyxHQUFHcUQsSUFBSSxDQUFDQyxHQUFHLENBQUNuRSxHQUFHLEVBQUV3QyxNQUFNLENBQUMsSUFBSSxDQUFDM0IsS0FBSyxDQUFDLEdBQUdrRCxJQUFJLENBQUM7UUFDdkQ7UUFFQXBDLE1BQU0sQ0FBQzVCLEtBQUssQ0FBQzFCLEVBQUUsQ0FBQyxHQUFHbUUsTUFBTSxDQUFDekMsS0FBSyxDQUFDYyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzNDWSxjQUFjLENBQUMsQ0FBQztRQUNoQmdCLFdBQVcsQ0FBQyxDQUFDO01BQ2Y7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSjs7Ozs7Ozs7Ozs7QUN6TkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQ0M7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9ibG9jay1wYWNrYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2Jsb2NrLXRhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvc2Fzcy9pbmRleC5zY3NzPzNlZGEiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRVbEVsZW1lbnQsXG4gIGNyZWF0ZUNvc3RFbGVtZW50LFxuICBwYWNrYWdlSW5mbyxcbiAgc2Nyb2xsTnVtYmVyLFxuICBzZXRWYWx1ZXMsXG4gIHByaWNlSW5mbyxcbn0gZnJvbSBcIi4vZnVuY3Rpb24uanNcIjtcbi8vINCR0LvQvtC6INCk0LDRgdC+0LLQutCwIFxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsICdwYWNrYWdlJyk7XG5ibG9jay5pZCA9ICdwYWNrYWdlJztcblxuc2VjdGlvbi5wcmVwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX190aXRsZVwiKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSBcItCk0LDRgdC+0LLQutCwXCI7XG5cbmJsb2NrLmFwcGVuZChibG9ja1RpdGxlKTtcblxuY3JlYXRVbEVsZW1lbnQoXCLQqNC40YDQuNC90LBcIiwgXCLRgdC8LlwiLCBcIndpZHRoXCIsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudChcItCS0YvRgdC+0YLQsFwiLCBcItGB0LwuXCIsIFwiaGVpZ2h0XCIsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudChcItCi0L7Qu9GJ0LjQvdCwXCIsIFwi0LzQutC8LlwiLCBcInRoaWNrbmVzc1wiLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoXCLQmtC+0LvQuNGH0LXRgdGC0LLQvlwiLCBcItGI0YIuXCIsIFwiY2lyY3VsYXRpb25cIiwgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KFwi0JLQtdGBXCIsIFwi0LrQsy5cIiwgXCJ3ZWlnaHRcIiwgJ3BhY2thZ2UnKTtcblxuZXhwb3J0IGNvbnN0IHByaWNlTWF0ZXJpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByaWNlTWF0ZXJpYWxzLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fcHJpY2UtbWF0ZXJpYWxzXCIpO1xucHJpY2VNYXRlcmlhbHMuaWQgPSAncGFja2FnZS1wcmljZSc7XG5cbmJsb2NrLmFwcGVuZChwcmljZU1hdGVyaWFscyk7XG5cbmNyZWF0ZUNvc3RFbGVtZW50KFwiY29zdC1tYXRlcmlhbHNcIiwgJ2Nvc3QnLCBcItCh0LXQsdC10YHRgi4uLlwiLCAncGFja2FnZS1wcmljZScpO1xuY3JlYXRlQ29zdEVsZW1lbnQoXCJzZWxsaW5nLXByaWNlXCIsICdzZWxsJywgXCLQn9GA0L7QtNCw0LbQsFwiLCAncGFja2FnZS1wcmljZScpO1xuXG5wYWNrYWdlSW5mbyhcItCS0LXRgSDQv9Cw0LrQtdGC0LBcIiwgXCLQsy5cIiwgJ29uZScsICd1bE9uZScsICdwYWNrYWdlJyk7XG5wYWNrYWdlSW5mbyhcItCS0LXRgSDQv9Cw0YDRgtC40LhcIiwgXCLQutCzLlwiLCAnYWxsJywgJ3VsQWxsJywgJ3BhY2thZ2UnKTtcbnBhY2thZ2VJbmZvKFwi0JrQvtC7LdCy0L4g0L/QsNC60LXRgtC+0LJcIiwgXCLRiNGCLlwiLCAndG90YWwnLCAndWxUb3RhbCcsICdwYWNrYWdlJyk7XG5cbnByaWNlSW5mbygncGFja2FnZScsICdwYWNrYWdlJyk7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuXG4vLyDQkdC70L7QuiDQn9C70LXQvdC60LBcbiIsImltcG9ydCB7XG4gIGNyZWF0VWxFbGVtZW50LFxuICBjcmVhdGVDb3N0RWxlbWVudCxcbiAgcGFja2FnZUluZm8sXG4gIHNjcm9sbE51bWJlcixcbiAgc2V0VmFsdWVzLFxuICBwcmljZUluZm8sXG59IGZyb20gXCIuL2Z1bmN0aW9uLmpzXCI7XG5pbXBvcnQgeyB0YXBlQ2hlY2tib3ggfSBmcm9tIFwiLi9jaGVja2JveC5qc1wiO1xuLy8g0JHQu9C+0Log0J/Qu9C10L3QutCwXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG5cbmV4cG9ydCBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIik7IC8vLCAndGFwZSdcbmJsb2NrLmlkID0gXCJ0YXBlXCI7XG5cbnNlY3Rpb24uYXBwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX190aXRsZVwiKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSBcItCf0LvQtdC90LrQsFwiO1xuXG5ibG9jay5hcHBlbmQoYmxvY2tUaXRsZSwgdGFwZUNoZWNrYm94KCkpO1xuXG5jcmVhdFVsRWxlbWVudChcItCo0LjRgNC40L3QsFwiLCBcItGB0LwuXCIsIFwid2lkdGhUYXBlXCIsIFwidGFwZVwiKTtcbmNyZWF0VWxFbGVtZW50KFwi0KLQvtC70YnQuNC90LBcIiwgXCLQvNC60LwuXCIsIFwidGhpY2tuZXNzVGFwZVwiLCBcInRhcGVcIik7XG5jcmVhdFVsRWxlbWVudChcItCa0L7Qu9C40YfQtdGB0YLQstC+XCIsIFwi0LwuXCIsIFwiY2lyY3VsYXRpb25UYXBlXCIsIFwidGFwZVwiKTtcbmNyZWF0VWxFbGVtZW50KFwi0JLQtdGBXCIsIFwi0LrQsy5cIiwgXCJ3ZWlnaHRUYXBlXCIsIFwidGFwZVwiKTtcblxuY29uc3QgcHJpY2VNYXRlcmlhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJpY2VNYXRlcmlhbHMuY2xhc3NMaXN0LmFkZChcImJsb2NrX19wcmljZS1tYXRlcmlhbHNcIik7XG5wcmljZU1hdGVyaWFscy5pZCA9IFwidGFwZS1wcmljZVwiO1xuXG5ibG9jay5hcHBlbmQocHJpY2VNYXRlcmlhbHMpO1xuXG5jcmVhdGVDb3N0RWxlbWVudChcImNvc3QtbWF0ZXJpYWxzXCIsIFwiY29zdFRhcGVcIiwgXCLQodC10LHQtdGB0YIuLi5cIiwgXCJ0YXBlLXByaWNlXCIpO1xuY3JlYXRlQ29zdEVsZW1lbnQoXCJzZWxsaW5nLXByaWNlXCIsIFwic2VsbFRhcGVcIiwgXCLQn9GA0L7QtNCw0LbQsFwiLCBcInRhcGUtcHJpY2VcIik7XG5cbnBhY2thZ2VJbmZvKFwi0JLQtdGBINC80LXRgtGA0LBcIiwgXCLQsy5cIiwgXCJvbmUtdGFwZVwiLCBcInVsT25lLXRhcGVcIiwgXCJ0YXBlXCIpO1xucGFja2FnZUluZm8oXCLQktC10YEg0L/QsNGA0YLQuNC4XCIsIFwi0LrQsy5cIiwgXCJhbGwtdGFwZVwiLCBcInVsQWxsLXRhcGVcIiwgXCJ0YXBlXCIpO1xucGFja2FnZUluZm8oXCLQmtC+0Lst0LLQviDQvNC10YLRgNC+0LJcIiwgXCLQvC5cIiwgXCJ0b3RhbC10YXBlXCIsIFwidWxUb3RhbC10YXBlXCIsIFwidGFwZVwiKTtcblxucHJpY2VJbmZvKFwidGFwZVwiLCBcInRhcGVcIik7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuIiwiLy8gaW1wb3J0IHsgYmxvY2sgfSBmcm9tIFwiLi9ibG9jay10YXBlXCI7XG5cbmV4cG9ydCBsZXQgZiA9IDAuOTI7XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1jaGVja2JveFwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZiA9IDAuOTU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGYgPSAwLjkyO1xuICAgIH1cbiAgfSk7XG5cbi8vINCn0LXQutCx0L7QutGBINC/0LvQtdC90LrQsFxuZXhwb3J0IGxldCBmb3JtYXQgPSAyO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFwZUNoZWNrYm94KCkge1xuICBjb25zdCBmb3JtYXRUYXBlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RhcGUnKTtcblxuICBjb25zdCBmb3JtYXRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1hdFRhcGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX19uYW1lXCIsICdibG9ja19fbmFtZS1mb3JtYXQnKTtcbiAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2lucHV0JylcblxuICBjb25zdCBsYWJlbFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcblxuICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dENoZWNrYm94LmlkID0gXCJmb3JtYXQtY2hlY2tib3hcIjtcbiAgaW5wdXRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gIGNvbnN0IHNwYW5TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3BhblNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuXG4gIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbiAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcilcblxuICBpbnB1dENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbiAgICAgICAgICBmb3JtYXQgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbiAgICAgICAgICBmb3JtYXQgPSAyO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICByZXR1cm4gZm9ybWF0VGFwZUJsb2NrO1xufVxuXG4vLyBsZXQgZm9ybWF0ID0gXCLQoNGD0LrQsNCyXCJcblxuLy8gZG9jdW1lbnRcbi8vICAgLmdldEVsZW1lbnRCeUlkKFwiZm9ybWF0LWNoZWNrYm94XCIpXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygn0KDRg9C60LDQsicpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygncG9sb3RubycpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyBkb2N1bWVudFxuLy8gICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtYXQtY2hlY2tib3hcIilcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmxvY2tfX25hbWUtZm9ybWF0JykudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdibG9ja19fbmFtZS1mb3JtYXQnKS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gdGFwZUNoZWNrYm94KCkge1xuLy8gICBjb25zdCBmb3JtYXRUYXBlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrX190YXBlXCIpO1xuXG4vLyAgIGNvbnN0IGZvcm1hdFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgZm9ybWF0VGFwZS5jbGFzc0xpc3QuYWRkKFwiYmxvY1wiKTtcbi8vICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuXG4vLyAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICBjb25zdCBsYWJlbFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbi8vICAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcblxuLy8gICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICBpbnB1dENoZWNrYm94LmlkID0gXCJmb3JtYXQtY2hlY2tib3hcIjtcbi8vICAgaW5wdXRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4vLyAgIGNvbnN0IHNwYW5TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgc3BhblNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuXG4vLyAgIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbi8vICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbi8vICAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcilcblxuLy8gICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQsdC70L7QutCwINCyINC90YPQttC90L7QtSDQvNC10YHRgtC+XG4vLyAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcGUnKTtcbi8vICAgYmxvY2sucHJlcGVuZChmb3JtYXRUYXBlQmxvY2spO1xuICBcblxuLy8gICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNC5INC00LvRjyDRh9C10LrQsdC+0LrRgdCwXG4vLyAgIGlucHV0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgaWYgKGlucHV0Q2hlY2tib3guY2hlY2tlZCkge1xuLy8gICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbi8vICAgICAgIGZvcm1hdCA9IDE7ICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbi8vICAgICAgIGZvcm1hdCA9IDI7ICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPXG4vLyAgICAgfVxuICAgIFxuLy8gICB9KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhmb3JtYXQpO1xuLy8gICByZXR1cm4gZm9ybWF0VGFwZUJsb2NrO1xuLy8gfSIsIi8vIGltcG9ydCB7IGJsb2NrLCBwcmljZU1hdGVyaWFscyB9IGZyb20gXCIuL2Jsb2NrLXBhY2thZ2UuanNcIjtcbmltcG9ydCB7IGYsIGZvcm1hdCB9IGZyb20gXCIuL2NoZWNrYm94LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdFVsRWxlbWVudChuYW1lLCBkc2MsIGlkLCBmb3JtYXQpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJibG9ja19faXRlbVwiKTtcblxuICBjb25zdCBsaURzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlEc2MuY2xhc3NMaXN0LmFkZChcImJsb2NrX19jb250YWluZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fbmFtZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2RzY1wiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBkc2M7XG5cbiAgbGlEc2MuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cbiAgY29uc3QgbGlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gIGlucHV0Lm1pbiA9IDE7XG4gIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImJsb2NrX19pbnB1dFwiKTtcblxuICBsaVZhbHVlLmFwcGVuZChpbnB1dCk7XG4gIHVsLmFwcGVuZChsaURzYywgbGlWYWx1ZSk7XG5cbiAgZm9ybWF0ID09PSBcInBhY2thZ2VcIlxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29zdEVsZW1lbnQobmFtZSwgaWQsIHBsYWNlaG9sZGVyLCBmb3JtYXQpIHtcbiAgY29uc3QgaW5wdXRDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dENvc3QudHlwZSA9IFwibnVtYmVyXCI7XG4gIGlucHV0Q29zdC5taW4gPSAxO1xuICBpbnB1dENvc3QuaWQgPSBpZDtcbiAgaW5wdXRDb3N0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXRDb3N0LmNsYXNzTGlzdC5hZGQoYGJsb2NrX18ke25hbWV9YCk7XG4gIGlucHV0Q29zdC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXG4gIC8vIHByaWNlTWF0ZXJpYWxzLmFwcGVuZChpbnB1dENvc3QpO1xuICBmb3JtYXQgPT09IFwicGFja2FnZS1wcmljZVwiXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGlucHV0Q29zdClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoaW5wdXRDb3N0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhY2thZ2VJbmZvKG5hbWUsIGRzYywgaWQsIHVsSWQsIGZvcm1hdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdWwuY2xhc3NMaXN0LmFkZChcImJsb2NrX19pdGVtXCIsIFwiYmxvY2tfX2l0ZW0tZm9vdGVyXCIsIFwiaGlkZGVuXCIpO1xuICB1bC5pZCA9IHVsSWQ7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpRHNjLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX25hbWVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX19kc2NcIik7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGluZm9QYWNrYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm9QYWNrYWdlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19faW5mb1wiKTtcbiAgaW5mb1BhY2thZ2UuaWQgPSBpZDtcblxuICB1bC5hcHBlbmQobGlEc2MsIGluZm9QYWNrYWdlKTtcblxuICBmb3JtYXQgPT09IFwicGFja2FnZVwiXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmljZUluZm8oZm9ybWF0LCB0eXBlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2Zvb3RlclwiKTtcblxuICBjb25zdCBjb3N0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3N0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2Zvb3Rlcl9jb3N0XCIsIFwiaGlkZGVuXCIpO1xuICAvLyBjb3N0RWxlbWVudC50ZXh0Q29udGVudCA9ICcyMCc7XG4gIGNvc3RFbGVtZW50LmlkID0gYGZvb3Rlci1jb3N0LSR7dHlwZX1gO1xuXG4gIGNvbnN0IHNlbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNlbGxpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3NlbGxpbmdcIiwgXCJoaWRkZW5cIik7XG4gIC8vIHNlbGxpbmdFbGVtZW50LnRleHRDb250ZW50ID0gJzIwJztcbiAgc2VsbGluZ0VsZW1lbnQuaWQgPSBgZm9vdGVyLXNlbGxpbmctJHt0eXBlfWA7XG5cbiAgZm9vdGVyLmFwcGVuZChjb3N0RWxlbWVudCwgc2VsbGluZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2ZpdEVsZW1lbnRUYXBlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3Byb2ZpdFwiLCBcImhpZGRlblwiKTtcbiAgLy8gcHJvZml0RWxlbWVudFRhcGUudGV4dENvbnRlbnQgPSAnMjAnO1xuICBwcm9maXRFbGVtZW50VGFwZS5pZCA9IGBmb290ZXItcHJvZml0LSR7dHlwZX0tbWA7XG5cbiAgY29uc3QgcHJvZml0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9maXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3Byb2ZpdFwiLCBcImhpZGRlblwiKTtcbiAgLy8gcHJvZml0RWxlbWVudC50ZXh0Q29udGVudCA9ICcyMCc7XG4gIHByb2ZpdEVsZW1lbnQuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9YDtcblxuICAvLyBibG9jay5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50KTtcbiAgZm9ybWF0ID09PSBcInBhY2thZ2VcIlxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChmb290ZXIsIHByb2ZpdEVsZW1lbnQpXG4gICAgOiBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApXG4gICAgICAgIC5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50VGFwZSwgcHJvZml0RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICB2YWx1ZSxcbiAgdGV4dFNlbGVjdG9yLFxuICB1bFNlbGVjdG9yLFxuICBtdWx0aXBsaWVyID0gMSxcbiAgZGVjaW1hbFBsYWNlcyA9IDJcbikge1xuICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGV4dFNlbGVjdG9yKTtcbiAgY29uc3QgdWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1bFNlbGVjdG9yKTtcblxuICBpZiAodmFsdWUgPiAwKSB7XG4gICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSAodmFsdWUgKiBtdWx0aXBsaWVyKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFsbEluZm9QYWNrYWdlKCkge1xuICBsZXQgb25lUGFja2FnZSA9XG4gICAgKHZhbHVlcy53aWR0aCAqIGYgKiAyICogdmFsdWVzLmhlaWdodCAqICh2YWx1ZXMudGhpY2tuZXNzIC8gMTAwMDApKSAvIDEwMDA7XG4gIGxldCBhbGxQYWNrYWdlID0gb25lUGFja2FnZSAqIHZhbHVlcy5jaXJjdWxhdGlvbjtcbiAgbGV0IHRvdGFsUGFja2FnZSA9IHZhbHVlcy53ZWlnaHQgLyBvbmVQYWNrYWdlO1xuICBsZXQgcHJpbWVQcmljZSA9IHZhbHVlcy5jb3N0ICogb25lUGFja2FnZTtcbiAgbGV0IGJ1eVByaWNlID0gdmFsdWVzLnNlbGwgKiBvbmVQYWNrYWdlO1xuICBsZXQgcHJvZml0ID1cbiAgICAoYnV5UHJpY2UgLSBwcmltZVByaWNlKSAqIHZhbHVlcy5jaXJjdWxhdGlvbiB8fFxuICAgIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsXCIpLnRleHRDb250ZW50KTtcbiAgdXBkYXRlUGFja2FnZUluZm8ob25lUGFja2FnZSwgXCIjb25lXCIsIFwiI3VsT25lXCIsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxQYWNrYWdlLCBcIiNhbGxcIiwgXCIjdWxBbGxcIik7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsUGFja2FnZSwgXCIjdG90YWxcIiwgXCIjdWxUb3RhbFwiLCAxLCAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJpbWVQcmljZSwgXCIjZm9vdGVyLWNvc3QtcGFja2FnZVwiLCBcIiNmb290ZXItY29zdC1wYWNrYWdlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZSxcbiAgICBcIiNmb290ZXItc2VsbGluZy1wYWNrYWdlXCIsXG4gICAgXCIjZm9vdGVyLXNlbGxpbmctcGFja2FnZVwiXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByb2ZpdCwgXCIjZm9vdGVyLXByb2ZpdC1wYWNrYWdlXCIsIFwiI2Zvb3Rlci1wcm9maXQtcGFja2FnZVwiKTtcbn1cblxuZnVuY3Rpb24gYWxsSW5mb1RhcGUoKSB7XG4gIGxldCBvbmVUYXBlID1cbiAgICAodmFsdWVzLndpZHRoVGFwZSAqIGYgKiBmb3JtYXQgKiAxMDAgKiAodmFsdWVzLnRoaWNrbmVzc1RhcGUgLyAxMDAwMCkpIC9cbiAgICAxMDAwO1xuICBsZXQgYWxsVGFwZSA9IG9uZVRhcGUgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlO1xuICBsZXQgdG90YWxUYXBlID0gdmFsdWVzLndlaWdodFRhcGUgLyBvbmVUYXBlO1xuICBsZXQgcHJpbWVQcmljZVRhcGUgPSB2YWx1ZXMuY29zdFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgYnV5UHJpY2VUYXBlID0gdmFsdWVzLnNlbGxUYXBlICogb25lVGFwZTtcbiAgbGV0IHByb2ZpdFRhcGUgPVxuICAgIChidXlQcmljZVRhcGUgLSBwcmltZVByaWNlVGFwZSkgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlIHx8XG4gICAgTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtdGFwZVwiKS50ZXh0Q29udGVudCk7XG4gIGxldCBwcm9maXRUYXBlS2cgPSAodmFsdWVzLnNlbGxUYXBlIC0gdmFsdWVzLmNvc3RUYXBlKSAqIHZhbHVlcy53ZWlnaHRUYXBlO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVUYXBlLCBcIiNvbmUtdGFwZVwiLCBcIiN1bE9uZS10YXBlXCIsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxUYXBlLCBcIiNhbGwtdGFwZVwiLCBcIiN1bEFsbC10YXBlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyh0b3RhbFRhcGUsIFwiI3RvdGFsLXRhcGVcIiwgXCIjdWxUb3RhbC10YXBlXCIsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlVGFwZSwgXCIjZm9vdGVyLWNvc3QtdGFwZVwiLCBcIiNmb290ZXItY29zdC10YXBlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZVRhcGUsXG4gICAgXCIjZm9vdGVyLXNlbGxpbmctdGFwZVwiLFxuICAgIFwiI2Zvb3Rlci1zZWxsaW5nLXRhcGVcIlxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXRUYXBlLCBcIiNmb290ZXItcHJvZml0LXRhcGUtbVwiLCBcIiNmb290ZXItcHJvZml0LXRhcGUtbVwiKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJvZml0VGFwZUtnLCBcIiNmb290ZXItcHJvZml0LXRhcGVcIiwgXCIjZm9vdGVyLXByb2ZpdC10YXBlXCIpO1xufVxuXG5sZXQgdmFsdWVzID0ge307XG5leHBvcnQgZnVuY3Rpb24gc2V0VmFsdWVzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5jb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsTnVtYmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQv9GA0L7QutGA0YPRgtC60YMg0YHRgtGA0LDQvdC40YbRi1xuXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSB8fCAxOyAvLyDQn9C+0LvRg9GH0LDQtdC8INGI0LDQsyDQuNC30LzQtdC90LXQvdC40Y8gKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDEpXG4gICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcIm1pblwiKSkgfHwgMDsgLy8g0J/QvtC70YPRh9Cw0LXQvCDQvNC40L3QuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDApXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YLQutCwINCy0LLQtdGA0YUsINGD0LLQtdC70LjRh9C40LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtVxuICAgICAgICAgIHRoaXMudmFsdWUgPSBOdW1iZXIodGhpcy52YWx1ZSkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vINCf0YDQvtC60YDRg9GC0LrQsCDQstC90LjQtywg0YPQvNC10L3RjNGI0LDQtdC8INC30L3QsNGH0LXQvdC40LUgKNC10YHQu9C4INCx0L7Qu9GM0YjQtSDQuNC70Lgg0YDQsNCy0L3QviDQvNC40L3QuNC80LDQu9GM0L3QvtC80YMg0LfQvdCw0YfQtdC90LjRjilcbiAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0aC5tYXgobWluLCBOdW1iZXIodGhpcy52YWx1ZSkgLSBzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICAgIGFsbEluZm9QYWNrYWdlKCk7XG4gICAgICAgIGFsbEluZm9UYXBlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3Nhc3MvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay1wYWNrYWdlXCI7XG4vLyBpbXBvcnQgXCIuL2pzL3NxdWFyZVwiO1xuaW1wb3J0IFwiLi9qcy9ibG9jay10YXBlXCI7XG4iXSwibmFtZXMiOlsiY3JlYXRVbEVsZW1lbnQiLCJjcmVhdGVDb3N0RWxlbWVudCIsInBhY2thZ2VJbmZvIiwic2Nyb2xsTnVtYmVyIiwic2V0VmFsdWVzIiwicHJpY2VJbmZvIiwic2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJsb2NrIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwicHJlcGVuZCIsImJsb2NrVGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsInByaWNlTWF0ZXJpYWxzIiwidGFwZUNoZWNrYm94IiwiZiIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrZWQiLCJmb3JtYXQiLCJmb3JtYXRUYXBlQmxvY2siLCJmb3JtYXRUYXBlIiwiY2hlY2tib3hDb250YWluZXIiLCJsYWJlbFN3aXRjaCIsImlucHV0Q2hlY2tib3giLCJ0eXBlIiwic3BhblNsaWRlciIsIm5hbWUiLCJkc2MiLCJ1bCIsImxpRHNjIiwidGl0bGUiLCJzdWJ0aXRsZSIsImxpVmFsdWUiLCJpbnB1dCIsIm1pbiIsInJlcXVpcmVkIiwiY29uY2F0IiwicGxhY2Vob2xkZXIiLCJpbnB1dENvc3QiLCJ1bElkIiwiaW5mb1BhY2thZ2UiLCJmb290ZXIiLCJjb3N0RWxlbWVudCIsInNlbGxpbmdFbGVtZW50IiwicHJvZml0RWxlbWVudFRhcGUiLCJwcm9maXRFbGVtZW50IiwidXBkYXRlUGFja2FnZUluZm8iLCJ2YWx1ZSIsInRleHRTZWxlY3RvciIsInVsU2VsZWN0b3IiLCJtdWx0aXBsaWVyIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVjaW1hbFBsYWNlcyIsInRleHRFbGVtZW50IiwidWxFbGVtZW50IiwidG9GaXhlZCIsInJlbW92ZSIsImFsbEluZm9QYWNrYWdlIiwib25lUGFja2FnZSIsInZhbHVlcyIsIndpZHRoIiwiaGVpZ2h0IiwidGhpY2tuZXNzIiwiYWxsUGFja2FnZSIsImNpcmN1bGF0aW9uIiwidG90YWxQYWNrYWdlIiwid2VpZ2h0IiwicHJpbWVQcmljZSIsImNvc3QiLCJidXlQcmljZSIsInNlbGwiLCJwcm9maXQiLCJOdW1iZXIiLCJhbGxJbmZvVGFwZSIsIm9uZVRhcGUiLCJ3aWR0aFRhcGUiLCJ0aGlja25lc3NUYXBlIiwiYWxsVGFwZSIsImNpcmN1bGF0aW9uVGFwZSIsInRvdGFsVGFwZSIsIndlaWdodFRhcGUiLCJwcmltZVByaWNlVGFwZSIsImNvc3RUYXBlIiwiYnV5UHJpY2VUYXBlIiwic2VsbFRhcGUiLCJwcm9maXRUYXBlIiwicHJvZml0VGFwZUtnIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzZWxlY3QiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJhY3RpdmVFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiZGVsdGFZIiwiTWF0aCIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=