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
  block.classList.add("block", 'tape'); //, 'tape'
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
    costElement.id = "footer-cost-".concat(type);
    var sellingElement = document.createElement("p");
    sellingElement.classList.add("block__footer_selling", "hidden");
    sellingElement.id = "footer-selling-".concat(type);
    footer.append(costElement, sellingElement);
    var profitElementTape = document.createElement("p");
    profitElementTape.classList.add("block__footer_profit", "hidden");
    profitElementTape.id = "footer-profit-".concat(type, "-m");
    var profitElement = document.createElement("p");
    profitElement.classList.add("block__footer_profit", "hidden");
    profitElement.id = "footer-profit-".concat(type);
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
    var profit = (buyPrice - primePrice) * values.circulation;
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
    var profitTape = (buyPriceTape - primePriceTape) * values.circulationTape; //||
    //Number(document.querySelector("#total-tape").textContent);
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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDQztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvYmxvY2stcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9ibG9jay10YXBlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9zYXNzL2luZGV4LnNjc3M/M2VkYSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRVbEVsZW1lbnQsXG4gIGNyZWF0ZUNvc3RFbGVtZW50LFxuICBwYWNrYWdlSW5mbyxcbiAgc2Nyb2xsTnVtYmVyLFxuICBzZXRWYWx1ZXMsXG4gIHByaWNlSW5mbyxcbn0gZnJvbSBcIi4vZnVuY3Rpb24uanNcIjtcbi8vINCR0LvQvtC6INCk0LDRgdC+0LLQutCwIFxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsICdwYWNrYWdlJyk7XG5ibG9jay5pZCA9ICdwYWNrYWdlJztcblxuc2VjdGlvbi5wcmVwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX190aXRsZVwiKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSBcItCk0LDRgdC+0LLQutCwXCI7XG5cbmJsb2NrLmFwcGVuZChibG9ja1RpdGxlKTtcblxuY3JlYXRVbEVsZW1lbnQoXCLQqNC40YDQuNC90LBcIiwgXCLRgdC8LlwiLCBcIndpZHRoXCIsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudChcItCS0YvRgdC+0YLQsFwiLCBcItGB0LwuXCIsIFwiaGVpZ2h0XCIsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudChcItCi0L7Qu9GJ0LjQvdCwXCIsIFwi0LzQutC8LlwiLCBcInRoaWNrbmVzc1wiLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoXCLQmtC+0LvQuNGH0LXRgdGC0LLQvlwiLCBcItGI0YIuXCIsIFwiY2lyY3VsYXRpb25cIiwgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KFwi0JLQtdGBXCIsIFwi0LrQsy5cIiwgXCJ3ZWlnaHRcIiwgJ3BhY2thZ2UnKTtcblxuZXhwb3J0IGNvbnN0IHByaWNlTWF0ZXJpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByaWNlTWF0ZXJpYWxzLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fcHJpY2UtbWF0ZXJpYWxzXCIpO1xucHJpY2VNYXRlcmlhbHMuaWQgPSAncGFja2FnZS1wcmljZSc7XG5cbmJsb2NrLmFwcGVuZChwcmljZU1hdGVyaWFscyk7XG5cbmNyZWF0ZUNvc3RFbGVtZW50KFwiY29zdC1tYXRlcmlhbHNcIiwgJ2Nvc3QnLCBcItCh0LXQsdC10YHRgi4uLlwiLCAncGFja2FnZS1wcmljZScpO1xuY3JlYXRlQ29zdEVsZW1lbnQoXCJzZWxsaW5nLXByaWNlXCIsICdzZWxsJywgXCLQn9GA0L7QtNCw0LbQsFwiLCAncGFja2FnZS1wcmljZScpO1xuXG5wYWNrYWdlSW5mbyhcItCS0LXRgSDQv9Cw0LrQtdGC0LBcIiwgXCLQsy5cIiwgJ29uZScsICd1bE9uZScsICdwYWNrYWdlJyk7XG5wYWNrYWdlSW5mbyhcItCS0LXRgSDQv9Cw0YDRgtC40LhcIiwgXCLQutCzLlwiLCAnYWxsJywgJ3VsQWxsJywgJ3BhY2thZ2UnKTtcbnBhY2thZ2VJbmZvKFwi0JrQvtC7LdCy0L4g0L/QsNC60LXRgtC+0LJcIiwgXCLRiNGCLlwiLCAndG90YWwnLCAndWxUb3RhbCcsICdwYWNrYWdlJyk7XG5cbnByaWNlSW5mbygncGFja2FnZScsICdwYWNrYWdlJyk7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuXG4vLyDQkdC70L7QuiDQn9C70LXQvdC60LBcbiIsImltcG9ydCB7XG4gIGNyZWF0VWxFbGVtZW50LFxuICBjcmVhdGVDb3N0RWxlbWVudCxcbiAgcGFja2FnZUluZm8sXG4gIHNjcm9sbE51bWJlcixcbiAgc2V0VmFsdWVzLFxuICBwcmljZUluZm8sXG59IGZyb20gXCIuL2Z1bmN0aW9uLmpzXCI7XG5pbXBvcnQgeyB0YXBlQ2hlY2tib3ggfSBmcm9tIFwiLi9jaGVja2JveC5qc1wiO1xuLy8g0JHQu9C+0Log0J/Qu9C10L3QutCwXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG5cbmV4cG9ydCBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ibG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tcIiwgJ3RhcGUnKTsgLy8sICd0YXBlJ1xuYmxvY2suaWQgPSBcInRhcGVcIjtcblxuc2VjdGlvbi5hcHBlbmQoYmxvY2spO1xuXG5jb25zdCBibG9ja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuYmxvY2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX3RpdGxlXCIpO1xuYmxvY2tUaXRsZS50ZXh0Q29udGVudCA9IFwi0J/Qu9C10L3QutCwXCI7XG5cbmJsb2NrLmFwcGVuZChibG9ja1RpdGxlLCB0YXBlQ2hlY2tib3goKSk7XG5cbmNyZWF0VWxFbGVtZW50KFwi0KjQuNGA0LjQvdCwXCIsIFwi0YHQvC5cIiwgXCJ3aWR0aFRhcGVcIiwgXCJ0YXBlXCIpO1xuY3JlYXRVbEVsZW1lbnQoXCLQotC+0LvRidC40L3QsFwiLCBcItC80LrQvC5cIiwgXCJ0aGlja25lc3NUYXBlXCIsIFwidGFwZVwiKTtcbmNyZWF0VWxFbGVtZW50KFwi0JrQvtC70LjRh9C10YHRgtCy0L5cIiwgXCLQvC5cIiwgXCJjaXJjdWxhdGlvblRhcGVcIiwgXCJ0YXBlXCIpO1xuY3JlYXRVbEVsZW1lbnQoXCLQktC10YFcIiwgXCLQutCzLlwiLCBcIndlaWdodFRhcGVcIiwgXCJ0YXBlXCIpO1xuXG5jb25zdCBwcmljZU1hdGVyaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcmljZU1hdGVyaWFscy5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX3ByaWNlLW1hdGVyaWFsc1wiKTtcbnByaWNlTWF0ZXJpYWxzLmlkID0gXCJ0YXBlLXByaWNlXCI7XG5cbmJsb2NrLmFwcGVuZChwcmljZU1hdGVyaWFscyk7XG5cbmNyZWF0ZUNvc3RFbGVtZW50KFwiY29zdC1tYXRlcmlhbHNcIiwgXCJjb3N0VGFwZVwiLCBcItCh0LXQsdC10YHRgi4uLlwiLCBcInRhcGUtcHJpY2VcIik7XG5jcmVhdGVDb3N0RWxlbWVudChcInNlbGxpbmctcHJpY2VcIiwgXCJzZWxsVGFwZVwiLCBcItCf0YDQvtC00LDQttCwXCIsIFwidGFwZS1wcmljZVwiKTtcblxucGFja2FnZUluZm8oXCLQktC10YEg0LzQtdGC0YDQsFwiLCBcItCzLlwiLCBcIm9uZS10YXBlXCIsIFwidWxPbmUtdGFwZVwiLCBcInRhcGVcIik7XG5wYWNrYWdlSW5mbyhcItCS0LXRgSDQv9Cw0YDRgtC40LhcIiwgXCLQutCzLlwiLCBcImFsbC10YXBlXCIsIFwidWxBbGwtdGFwZVwiLCBcInRhcGVcIik7XG5wYWNrYWdlSW5mbyhcItCa0L7Quy3QstC+INC80LXRgtGA0L7QslwiLCBcItC8LlwiLCBcInRvdGFsLXRhcGVcIiwgXCJ1bFRvdGFsLXRhcGVcIiwgXCJ0YXBlXCIpO1xuXG5wcmljZUluZm8oXCJ0YXBlXCIsIFwidGFwZVwiKTtcbnNjcm9sbE51bWJlcigpO1xuc2V0VmFsdWVzKCk7XG4iLCIvLyBpbXBvcnQgeyBibG9jayB9IGZyb20gXCIuL2Jsb2NrLXRhcGVcIjtcblxuZXhwb3J0IGxldCBmID0gMC45MjtcblxuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLWNoZWNrYm94XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBmID0gMC45NTtcbiAgICB9IGVsc2Uge1xuICAgICAgZiA9IDAuOTI7XG4gICAgfVxuICB9KTtcblxuLy8g0KfQtdC60LHQvtC60YEg0L/Qu9C10L3QutCwXG5leHBvcnQgbGV0IGZvcm1hdCA9IDI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXBlQ2hlY2tib3goKSB7XG4gIGNvbnN0IGZvcm1hdFRhcGVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1hdFRhcGVCbG9jay5jbGFzc0xpc3QuYWRkKCdibG9ja19fdGFwZScpO1xuXG4gIGNvbnN0IGZvcm1hdFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9ybWF0VGFwZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX25hbWVcIiwgJ2Jsb2NrX19uYW1lLWZvcm1hdCcpO1xuICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gXCLQoNGD0LrQsNCyXCI7XG5cbiAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibG9ja19faW5wdXQnKVxuXG4gIGNvbnN0IGxhYmVsU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFN3aXRjaC5jbGFzc0xpc3QuYWRkKFwic3dpdGNoXCIpO1xuXG4gIGNvbnN0IGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0Q2hlY2tib3guaWQgPSBcImZvcm1hdC1jaGVja2JveFwiO1xuICBpbnB1dENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgY29uc3Qgc3BhblNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuU2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG5cbiAgbGFiZWxTd2l0Y2guYXBwZW5kKGlucHV0Q2hlY2tib3gsIHNwYW5TbGlkZXIpO1xuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQobGFiZWxTd2l0Y2gpO1xuICBmb3JtYXRUYXBlQmxvY2suYXBwZW5kKGZvcm1hdFRhcGUsIGNoZWNrYm94Q29udGFpbmVyKVxuXG4gIGlucHV0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gXCLQn9C+0LvQvtGC0L3QvlwiO1xuICAgICAgICAgIGZvcm1hdCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuICAgICAgICAgIGZvcm1hdCA9IDI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIHJldHVybiBmb3JtYXRUYXBlQmxvY2s7XG59XG5cbi8vIGxldCBmb3JtYXQgPSBcItCg0YPQutCw0LJcIlxuXG4vLyBkb2N1bWVudFxuLy8gICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtYXQtY2hlY2tib3hcIilcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCfQoNGD0LrQsNCyJyk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdwb2xvdG5vJyk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIGRvY3VtZW50XG4vLyAgIC5nZXRFbGVtZW50QnlJZChcImZvcm1hdC1jaGVja2JveFwiKVxuLy8gICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdibG9ja19fbmFtZS1mb3JtYXQnKS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jsb2NrX19uYW1lLWZvcm1hdCcpLnRleHRDb250ZW50ID0gXCLQn9C+0LvQvtGC0L3QvlwiO1xuLy8gICAgIH1cbi8vICAgfSk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB0YXBlQ2hlY2tib3goKSB7XG4vLyAgIGNvbnN0IGZvcm1hdFRhcGVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGZvcm1hdFRhcGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX3RhcGVcIik7XG5cbi8vICAgY29uc3QgZm9ybWF0VGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gICBmb3JtYXRUYXBlLmNsYXNzTGlzdC5hZGQoXCJibG9jXCIpO1xuLy8gICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gXCLQoNGD0LrQsNCyXCI7XG5cbi8vICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgIGNvbnN0IGxhYmVsU3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuLy8gICBsYWJlbFN3aXRjaC5jbGFzc0xpc3QuYWRkKFwic3dpdGNoXCIpO1xuXG4vLyAgIGNvbnN0IGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4vLyAgIGlucHV0Q2hlY2tib3guaWQgPSBcImZvcm1hdC1jaGVja2JveFwiO1xuLy8gICBpbnB1dENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbi8vICAgY29uc3Qgc3BhblNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuLy8gICBzcGFuU2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG5cbi8vICAgbGFiZWxTd2l0Y2guYXBwZW5kKGlucHV0Q2hlY2tib3gsIHNwYW5TbGlkZXIpO1xuLy8gICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQobGFiZWxTd2l0Y2gpO1xuLy8gICBmb3JtYXRUYXBlQmxvY2suYXBwZW5kKGZvcm1hdFRhcGUsIGNoZWNrYm94Q29udGFpbmVyKVxuXG4vLyAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCx0LvQvtC60LAg0LIg0L3Rg9C20L3QvtC1INC80LXRgdGC0L5cbi8vICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFwZScpO1xuLy8gICBibG9jay5wcmVwZW5kKGZvcm1hdFRhcGVCbG9jayk7XG4gIFxuXG4vLyAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0LHQvtGC0YfQuNC60LAg0YHQvtCx0YvRgtC40Lkg0LTQu9GPINGH0LXQutCx0L7QutGB0LBcbi8vICAgaW5wdXRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbi8vICAgICBpZiAoaW5wdXRDaGVja2JveC5jaGVja2VkKSB7XG4vLyAgICAgICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gXCLQn9C+0LvQvtGC0L3QvlwiO1xuLy8gICAgICAgZm9ybWF0ID0gMTsgIC8vINCf0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyDRhdGA0LDQvdC10L3QuNGPINC30L3QsNGH0LXQvdC40Y9cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuLy8gICAgICAgZm9ybWF0ID0gMjsgIC8vINCf0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyDRhdGA0LDQvdC10L3QuNGPINC30L3QsNGH0LXQvdC40Y9cbi8vICAgICB9XG4gICAgXG4vLyAgIH0pO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKGZvcm1hdCk7XG4vLyAgIHJldHVybiBmb3JtYXRUYXBlQmxvY2s7XG4vLyB9IiwiaW1wb3J0IHsgZiwgZm9ybWF0IH0gZnJvbSBcIi4vY2hlY2tib3guanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0VWxFbGVtZW50KG5hbWUsIGRzYywgaWQsIGZvcm1hdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdWwuY2xhc3NMaXN0LmFkZChcImJsb2NrX19pdGVtXCIpO1xuXG4gIGNvbnN0IGxpRHNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaURzYy5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2NvbnRhaW5lclwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX19uYW1lXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZHNjXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IGRzYztcblxuICBsaURzYy5hcHBlbmQodGl0bGUsIHN1YnRpdGxlKTtcblxuICBjb25zdCBsaVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgaW5wdXQubWluID0gMTtcbiAgaW5wdXQuaWQgPSBpZDtcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2lucHV0XCIpO1xuXG4gIGxpVmFsdWUuYXBwZW5kKGlucHV0KTtcbiAgdWwuYXBwZW5kKGxpRHNjLCBsaVZhbHVlKTtcblxuICBmb3JtYXQgPT09IFwicGFja2FnZVwiXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3N0RWxlbWVudChuYW1lLCBpZCwgcGxhY2Vob2xkZXIsIGZvcm1hdCkge1xuICBjb25zdCBpbnB1dENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0Q29zdC50eXBlID0gXCJudW1iZXJcIjtcbiAgaW5wdXRDb3N0Lm1pbiA9IDE7XG4gIGlucHV0Q29zdC5pZCA9IGlkO1xuICBpbnB1dENvc3QucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dENvc3QuY2xhc3NMaXN0LmFkZChgYmxvY2tfXyR7bmFtZX1gKTtcbiAgaW5wdXRDb3N0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cbiAgZm9ybWF0ID09PSBcInBhY2thZ2UtcHJpY2VcIlxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChpbnB1dENvc3QpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGlucHV0Q29zdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWNrYWdlSW5mbyhuYW1lLCBkc2MsIGlkLCB1bElkLCBmb3JtYXQpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJibG9ja19faXRlbVwiLCBcImJsb2NrX19pdGVtLWZvb3RlclwiLCBcImhpZGRlblwiKTtcbiAgdWwuaWQgPSB1bElkO1xuXG4gIGNvbnN0IGxpRHNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaURzYy5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2NvbnRhaW5lclwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX19uYW1lXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZHNjXCIpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IGRzYztcblxuICBsaURzYy5hcHBlbmQodGl0bGUsIHN1YnRpdGxlKTtcblxuICBjb25zdCBpbmZvUGFja2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvUGFja2FnZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2luZm9cIik7XG4gIGluZm9QYWNrYWdlLmlkID0gaWQ7XG5cbiAgdWwuYXBwZW5kKGxpRHNjLCBpbmZvUGFja2FnZSk7XG5cbiAgZm9ybWF0ID09PSBcInBhY2thZ2VcIlxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpY2VJbmZvKGZvcm1hdCwgdHlwZSkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImJsb2NrX19mb290ZXJcIik7XG5cbiAgY29uc3QgY29zdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29zdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJsb2NrX19mb290ZXJfY29zdFwiLCBcImhpZGRlblwiKTtcbiAgY29zdEVsZW1lbnQuaWQgPSBgZm9vdGVyLWNvc3QtJHt0eXBlfWA7XG5cbiAgY29uc3Qgc2VsbGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc2VsbGluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJsb2NrX19mb290ZXJfc2VsbGluZ1wiLCBcImhpZGRlblwiKTtcbiAgc2VsbGluZ0VsZW1lbnQuaWQgPSBgZm9vdGVyLXNlbGxpbmctJHt0eXBlfWA7XG5cbiAgZm9vdGVyLmFwcGVuZChjb3N0RWxlbWVudCwgc2VsbGluZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2ZpdEVsZW1lbnRUYXBlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3Byb2ZpdFwiLCBcImhpZGRlblwiKTtcbiAgcHJvZml0RWxlbWVudFRhcGUuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9LW1gO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvZml0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2Zvb3Rlcl9wcm9maXRcIiwgXCJoaWRkZW5cIik7XG4gIHByb2ZpdEVsZW1lbnQuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9YDtcblxuICBmb3JtYXQgPT09IFwicGFja2FnZVwiXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGZvb3RlciwgcHJvZml0RWxlbWVudClcbiAgICA6IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YClcbiAgICAgICAgLmFwcGVuZChmb290ZXIsIHByb2ZpdEVsZW1lbnRUYXBlLCBwcm9maXRFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFja2FnZUluZm8oXG4gIHZhbHVlLFxuICB0ZXh0U2VsZWN0b3IsXG4gIHVsU2VsZWN0b3IsXG4gIG11bHRpcGxpZXIgPSAxLFxuICBkZWNpbWFsUGxhY2VzID0gMlxuKSB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0ZXh0U2VsZWN0b3IpO1xuICBjb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVsU2VsZWN0b3IpO1xuXG4gIGlmICh2YWx1ZSA+IDApIHtcbiAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9ICh2YWx1ZSAqIG11bHRpcGxpZXIpLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XG4gICAgdWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgdWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsSW5mb1BhY2thZ2UoKSB7XG4gIGxldCBvbmVQYWNrYWdlID1cbiAgICAodmFsdWVzLndpZHRoICogZiAqIDIgKiB2YWx1ZXMuaGVpZ2h0ICogKHZhbHVlcy50aGlja25lc3MgLyAxMDAwMCkpIC8gMTAwMDtcbiAgbGV0IGFsbFBhY2thZ2UgPSBvbmVQYWNrYWdlICogdmFsdWVzLmNpcmN1bGF0aW9uO1xuICBsZXQgdG90YWxQYWNrYWdlID0gdmFsdWVzLndlaWdodCAvIG9uZVBhY2thZ2U7XG4gIGxldCBwcmltZVByaWNlID0gdmFsdWVzLmNvc3QgKiBvbmVQYWNrYWdlO1xuICBsZXQgYnV5UHJpY2UgPSB2YWx1ZXMuc2VsbCAqIG9uZVBhY2thZ2U7XG4gIGxldCBwcm9maXQgPVxuICAgIChidXlQcmljZSAtIHByaW1lUHJpY2UpICogdmFsdWVzLmNpcmN1bGF0aW9uO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVQYWNrYWdlLCBcIiNvbmVcIiwgXCIjdWxPbmVcIiwgMTAwMCk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKGFsbFBhY2thZ2UsIFwiI2FsbFwiLCBcIiN1bEFsbFwiKTtcbiAgdXBkYXRlUGFja2FnZUluZm8odG90YWxQYWNrYWdlLCBcIiN0b3RhbFwiLCBcIiN1bFRvdGFsXCIsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlLCBcIiNmb290ZXItY29zdC1wYWNrYWdlXCIsIFwiI2Zvb3Rlci1jb3N0LXBhY2thZ2VcIik7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICAgIGJ1eVByaWNlLFxuICAgIFwiI2Zvb3Rlci1zZWxsaW5nLXBhY2thZ2VcIixcbiAgICBcIiNmb290ZXItc2VsbGluZy1wYWNrYWdlXCJcbiAgKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJvZml0LCBcIiNmb290ZXItcHJvZml0LXBhY2thZ2VcIiwgXCIjZm9vdGVyLXByb2ZpdC1wYWNrYWdlXCIpO1xufVxuXG5mdW5jdGlvbiBhbGxJbmZvVGFwZSgpIHtcbiAgbGV0IG9uZVRhcGUgPVxuICAgICh2YWx1ZXMud2lkdGhUYXBlICogZiAqIGZvcm1hdCAqIDEwMCAqICh2YWx1ZXMudGhpY2tuZXNzVGFwZSAvIDEwMDAwKSkgL1xuICAgIDEwMDA7XG4gIGxldCBhbGxUYXBlID0gb25lVGFwZSAqIHZhbHVlcy5jaXJjdWxhdGlvblRhcGU7XG4gIGxldCB0b3RhbFRhcGUgPSB2YWx1ZXMud2VpZ2h0VGFwZSAvIG9uZVRhcGU7XG4gIGxldCBwcmltZVByaWNlVGFwZSA9IHZhbHVlcy5jb3N0VGFwZSAqIG9uZVRhcGU7XG4gIGxldCBidXlQcmljZVRhcGUgPSB2YWx1ZXMuc2VsbFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgcHJvZml0VGFwZSA9XG4gICAgKGJ1eVByaWNlVGFwZSAtIHByaW1lUHJpY2VUYXBlKSAqIHZhbHVlcy5jaXJjdWxhdGlvblRhcGU7Ly98fFxuICAgIC8vTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtdGFwZVwiKS50ZXh0Q29udGVudCk7XG4gIGxldCBwcm9maXRUYXBlS2cgPSAodmFsdWVzLnNlbGxUYXBlIC0gdmFsdWVzLmNvc3RUYXBlKSAqIHZhbHVlcy53ZWlnaHRUYXBlO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVUYXBlLCBcIiNvbmUtdGFwZVwiLCBcIiN1bE9uZS10YXBlXCIsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxUYXBlLCBcIiNhbGwtdGFwZVwiLCBcIiN1bEFsbC10YXBlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyh0b3RhbFRhcGUsIFwiI3RvdGFsLXRhcGVcIiwgXCIjdWxUb3RhbC10YXBlXCIsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlVGFwZSwgXCIjZm9vdGVyLWNvc3QtdGFwZVwiLCBcIiNmb290ZXItY29zdC10YXBlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZVRhcGUsXG4gICAgXCIjZm9vdGVyLXNlbGxpbmctdGFwZVwiLFxuICAgIFwiI2Zvb3Rlci1zZWxsaW5nLXRhcGVcIlxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXRUYXBlLCBcIiNmb290ZXItcHJvZml0LXRhcGUtbVwiLCBcIiNmb290ZXItcHJvZml0LXRhcGUtbVwiKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJvZml0VGFwZUtnLCBcIiNmb290ZXItcHJvZml0LXRhcGVcIiwgXCIjZm9vdGVyLXByb2ZpdC10YXBlXCIpO1xufVxuXG5sZXQgdmFsdWVzID0ge307XG5leHBvcnQgZnVuY3Rpb24gc2V0VmFsdWVzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5jb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsTnVtYmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQv9GA0L7QutGA0YPRgtC60YMg0YHRgtGA0LDQvdC40YbRi1xuXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSB8fCAxOyAvLyDQn9C+0LvRg9GH0LDQtdC8INGI0LDQsyDQuNC30LzQtdC90LXQvdC40Y8gKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDEpXG4gICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcIm1pblwiKSkgfHwgMDsgLy8g0J/QvtC70YPRh9Cw0LXQvCDQvNC40L3QuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDApXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YLQutCwINCy0LLQtdGA0YUsINGD0LLQtdC70LjRh9C40LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtVxuICAgICAgICAgIHRoaXMudmFsdWUgPSBOdW1iZXIodGhpcy52YWx1ZSkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vINCf0YDQvtC60YDRg9GC0LrQsCDQstC90LjQtywg0YPQvNC10L3RjNGI0LDQtdC8INC30L3QsNGH0LXQvdC40LUgKNC10YHQu9C4INCx0L7Qu9GM0YjQtSDQuNC70Lgg0YDQsNCy0L3QviDQvNC40L3QuNC80LDQu9GM0L3QvtC80YMg0LfQvdCw0YfQtdC90LjRjilcbiAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0aC5tYXgobWluLCBOdW1iZXIodGhpcy52YWx1ZSkgLSBzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICAgIGFsbEluZm9QYWNrYWdlKCk7XG4gICAgICAgIGFsbEluZm9UYXBlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwibGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkJyk7XG5sZXQgc3F1YXJlcyA9IDI4ODY7XG5sZXQgY29sb3JzID0gWyd5ZWxsb3cnLCAnZGFya2JsdWUnLCAncHVycGxlJywgJ2xpbWUnLCAnd2hpdGUnLCAnZ3JheScsICdnb2xkJywgJ3BpbmsnLCAnU2FsbW9uJywgJ0RlZXBTa3lCbHVlJywgJ1RlYWwnXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlczsgaSsrKSB7XG4gIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2V0Q29sb3IpO1xuICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlbW92ZUNvbG9yKTtcbiAgYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG59XG5mdW5jdGlvbiBzZXRDb2xvcihldnQpIHtcbiAgbGV0IGVsZW0gPSBldnQudGFyZ2V0O1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhbmRvbUNvbG9yKCk7XG4gIGVsZW0uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggJy5jb25jYXQocmFuZG9tQ29sb3IoKSwgJywgMCAwIDEwcHggJykuY29uY2F0KHJhbmRvbUNvbG9yKCkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ29sb3IoZXZ0KSB7XG4gIGxldCBlbGVtID0gZXZ0LnRhcmdldDtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzFkMWQxZDFkJztcbiAgZWxlbS5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAjMDAwJztcbn1cbmxldCByYW5kb21Db2xvciA9IGZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zYXNzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vanMvYmxvY2stcGFja2FnZVwiO1xuaW1wb3J0IFwiLi9qcy9zcXVhcmVcIjtcbmltcG9ydCBcIi4vanMvYmxvY2stdGFwZVwiO1xuIl0sIm5hbWVzIjpbImNyZWF0VWxFbGVtZW50IiwiY3JlYXRlQ29zdEVsZW1lbnQiLCJwYWNrYWdlSW5mbyIsInNjcm9sbE51bWJlciIsInNldFZhbHVlcyIsInByaWNlSW5mbyIsInNlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJibG9jayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsInByZXBlbmQiLCJibG9ja1RpdGxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJwcmljZU1hdGVyaWFscyIsInRhcGVDaGVja2JveCIsImYiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja2VkIiwiZm9ybWF0IiwiZm9ybWF0VGFwZUJsb2NrIiwiZm9ybWF0VGFwZSIsImNoZWNrYm94Q29udGFpbmVyIiwibGFiZWxTd2l0Y2giLCJpbnB1dENoZWNrYm94IiwidHlwZSIsInNwYW5TbGlkZXIiLCJuYW1lIiwiZHNjIiwidWwiLCJsaURzYyIsInRpdGxlIiwic3VidGl0bGUiLCJsaVZhbHVlIiwiaW5wdXQiLCJtaW4iLCJyZXF1aXJlZCIsImNvbmNhdCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDb3N0IiwidWxJZCIsImluZm9QYWNrYWdlIiwiZm9vdGVyIiwiY29zdEVsZW1lbnQiLCJzZWxsaW5nRWxlbWVudCIsInByb2ZpdEVsZW1lbnRUYXBlIiwicHJvZml0RWxlbWVudCIsInVwZGF0ZVBhY2thZ2VJbmZvIiwidmFsdWUiLCJ0ZXh0U2VsZWN0b3IiLCJ1bFNlbGVjdG9yIiwibXVsdGlwbGllciIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlY2ltYWxQbGFjZXMiLCJ0ZXh0RWxlbWVudCIsInVsRWxlbWVudCIsInRvRml4ZWQiLCJyZW1vdmUiLCJhbGxJbmZvUGFja2FnZSIsIm9uZVBhY2thZ2UiLCJ2YWx1ZXMiLCJ3aWR0aCIsImhlaWdodCIsInRoaWNrbmVzcyIsImFsbFBhY2thZ2UiLCJjaXJjdWxhdGlvbiIsInRvdGFsUGFja2FnZSIsIndlaWdodCIsInByaW1lUHJpY2UiLCJjb3N0IiwiYnV5UHJpY2UiLCJzZWxsIiwicHJvZml0IiwiYWxsSW5mb1RhcGUiLCJvbmVUYXBlIiwid2lkdGhUYXBlIiwidGhpY2tuZXNzVGFwZSIsImFsbFRhcGUiLCJjaXJjdWxhdGlvblRhcGUiLCJ0b3RhbFRhcGUiLCJ3ZWlnaHRUYXBlIiwicHJpbWVQcmljZVRhcGUiLCJjb3N0VGFwZSIsImJ1eVByaWNlVGFwZSIsInNlbGxUYXBlIiwicHJvZml0VGFwZSIsInByb2ZpdFRhcGVLZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiTnVtYmVyIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiYWN0aXZlRWxlbWVudCIsInByZXZlbnREZWZhdWx0Iiwic3RlcCIsImdldEF0dHJpYnV0ZSIsImRlbHRhWSIsIk1hdGgiLCJtYXgiLCJib2FyZCIsInNxdWFyZXMiLCJjb2xvcnMiLCJpIiwic3F1YXJlIiwic2V0Q29sb3IiLCJyZW1vdmVDb2xvciIsImV2dCIsImVsZW0iLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInJhbmRvbUNvbG9yIiwiYm94U2hhZG93IiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9