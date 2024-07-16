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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQ0M7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2Jsb2NrLXBhY2thZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvYmxvY2stdGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvc2Fzcy9pbmRleC5zY3NzPzNlZGEiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0VWxFbGVtZW50LFxuICBjcmVhdGVDb3N0RWxlbWVudCxcbiAgcGFja2FnZUluZm8sXG4gIHNjcm9sbE51bWJlcixcbiAgc2V0VmFsdWVzLFxuICBwcmljZUluZm8sXG59IGZyb20gXCIuL2Z1bmN0aW9uLmpzXCI7XG4vLyDQkdC70L7QuiDQpNCw0YHQvtCy0LrQsCBcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiLCAncGFja2FnZScpO1xuYmxvY2suaWQgPSAncGFja2FnZSc7XG5cbnNlY3Rpb24ucHJlcGVuZChibG9jayk7XG5cbmNvbnN0IGJsb2NrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5ibG9ja1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fdGl0bGVcIik7XG5ibG9ja1RpdGxlLnRleHRDb250ZW50ID0gXCLQpNCw0YHQvtCy0LrQsFwiO1xuXG5ibG9jay5hcHBlbmQoYmxvY2tUaXRsZSk7XG5cbmNyZWF0VWxFbGVtZW50KFwi0KjQuNGA0LjQvdCwXCIsIFwi0YHQvC5cIiwgXCJ3aWR0aFwiLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoXCLQktGL0YHQvtGC0LBcIiwgXCLRgdC8LlwiLCBcImhlaWdodFwiLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoXCLQotC+0LvRidC40L3QsFwiLCBcItC80LrQvC5cIiwgXCJ0aGlja25lc3NcIiwgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KFwi0JrQvtC70LjRh9C10YHRgtCy0L5cIiwgXCLRiNGCLlwiLCBcImNpcmN1bGF0aW9uXCIsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudChcItCS0LXRgVwiLCBcItC60LMuXCIsIFwid2VpZ2h0XCIsICdwYWNrYWdlJyk7XG5cbmV4cG9ydCBjb25zdCBwcmljZU1hdGVyaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcmljZU1hdGVyaWFscy5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX3ByaWNlLW1hdGVyaWFsc1wiKTtcbnByaWNlTWF0ZXJpYWxzLmlkID0gJ3BhY2thZ2UtcHJpY2UnO1xuXG5ibG9jay5hcHBlbmQocHJpY2VNYXRlcmlhbHMpO1xuXG5jcmVhdGVDb3N0RWxlbWVudChcImNvc3QtbWF0ZXJpYWxzXCIsICdjb3N0JywgXCLQodC10LHQtdGB0YIuLi5cIiwgJ3BhY2thZ2UtcHJpY2UnKTtcbmNyZWF0ZUNvc3RFbGVtZW50KFwic2VsbGluZy1wcmljZVwiLCAnc2VsbCcsIFwi0J/RgNC+0LTQsNC20LBcIiwgJ3BhY2thZ2UtcHJpY2UnKTtcblxucGFja2FnZUluZm8oXCLQktC10YEg0L/QsNC60LXRgtCwXCIsIFwi0LMuXCIsICdvbmUnLCAndWxPbmUnLCAncGFja2FnZScpO1xucGFja2FnZUluZm8oXCLQktC10YEg0L/QsNGA0YLQuNC4XCIsIFwi0LrQsy5cIiwgJ2FsbCcsICd1bEFsbCcsICdwYWNrYWdlJyk7XG5wYWNrYWdlSW5mbyhcItCa0L7Quy3QstC+INC/0LDQutC10YLQvtCyXCIsIFwi0YjRgi5cIiwgJ3RvdGFsJywgJ3VsVG90YWwnLCAncGFja2FnZScpO1xuXG5wcmljZUluZm8oJ3BhY2thZ2UnLCAncGFja2FnZScpO1xuc2Nyb2xsTnVtYmVyKCk7XG5zZXRWYWx1ZXMoKTtcblxuLy8g0JHQu9C+0Log0J/Qu9C10L3QutCwXG4iLCJpbXBvcnQge1xuICBjcmVhdFVsRWxlbWVudCxcbiAgY3JlYXRlQ29zdEVsZW1lbnQsXG4gIHBhY2thZ2VJbmZvLFxuICBzY3JvbGxOdW1iZXIsXG4gIHNldFZhbHVlcyxcbiAgcHJpY2VJbmZvLFxufSBmcm9tIFwiLi9mdW5jdGlvbi5qc1wiO1xuaW1wb3J0IHsgdGFwZUNoZWNrYm94IH0gZnJvbSBcIi4vY2hlY2tib3guanNcIjtcbi8vINCR0LvQvtC6INCf0LvQtdC90LrQsFxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrXCIsICd0YXBlJyk7IC8vLCAndGFwZSdcbmJsb2NrLmlkID0gXCJ0YXBlXCI7XG5cbnNlY3Rpb24uYXBwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX190aXRsZVwiKTtcbmJsb2NrVGl0bGUudGV4dENvbnRlbnQgPSBcItCf0LvQtdC90LrQsFwiO1xuXG5ibG9jay5hcHBlbmQoYmxvY2tUaXRsZSwgdGFwZUNoZWNrYm94KCkpO1xuXG5jcmVhdFVsRWxlbWVudChcItCo0LjRgNC40L3QsFwiLCBcItGB0LwuXCIsIFwid2lkdGhUYXBlXCIsIFwidGFwZVwiKTtcbmNyZWF0VWxFbGVtZW50KFwi0KLQvtC70YnQuNC90LBcIiwgXCLQvNC60LwuXCIsIFwidGhpY2tuZXNzVGFwZVwiLCBcInRhcGVcIik7XG5jcmVhdFVsRWxlbWVudChcItCa0L7Qu9C40YfQtdGB0YLQstC+XCIsIFwi0LwuXCIsIFwiY2lyY3VsYXRpb25UYXBlXCIsIFwidGFwZVwiKTtcbmNyZWF0VWxFbGVtZW50KFwi0JLQtdGBXCIsIFwi0LrQsy5cIiwgXCJ3ZWlnaHRUYXBlXCIsIFwidGFwZVwiKTtcblxuY29uc3QgcHJpY2VNYXRlcmlhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJpY2VNYXRlcmlhbHMuY2xhc3NMaXN0LmFkZChcImJsb2NrX19wcmljZS1tYXRlcmlhbHNcIik7XG5wcmljZU1hdGVyaWFscy5pZCA9IFwidGFwZS1wcmljZVwiO1xuXG5ibG9jay5hcHBlbmQocHJpY2VNYXRlcmlhbHMpO1xuXG5jcmVhdGVDb3N0RWxlbWVudChcImNvc3QtbWF0ZXJpYWxzXCIsIFwiY29zdFRhcGVcIiwgXCLQodC10LHQtdGB0YIuLi5cIiwgXCJ0YXBlLXByaWNlXCIpO1xuY3JlYXRlQ29zdEVsZW1lbnQoXCJzZWxsaW5nLXByaWNlXCIsIFwic2VsbFRhcGVcIiwgXCLQn9GA0L7QtNCw0LbQsFwiLCBcInRhcGUtcHJpY2VcIik7XG5cbnBhY2thZ2VJbmZvKFwi0JLQtdGBINC80LXRgtGA0LBcIiwgXCLQsy5cIiwgXCJvbmUtdGFwZVwiLCBcInVsT25lLXRhcGVcIiwgXCJ0YXBlXCIpO1xucGFja2FnZUluZm8oXCLQktC10YEg0L/QsNGA0YLQuNC4XCIsIFwi0LrQsy5cIiwgXCJhbGwtdGFwZVwiLCBcInVsQWxsLXRhcGVcIiwgXCJ0YXBlXCIpO1xucGFja2FnZUluZm8oXCLQmtC+0Lst0LLQviDQvNC10YLRgNC+0LJcIiwgXCLQvC5cIiwgXCJ0b3RhbC10YXBlXCIsIFwidWxUb3RhbC10YXBlXCIsIFwidGFwZVwiKTtcblxucHJpY2VJbmZvKFwidGFwZVwiLCBcInRhcGVcIik7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuIiwiLy8gaW1wb3J0IHsgYmxvY2sgfSBmcm9tIFwiLi9ibG9jay10YXBlXCI7XG5cbmV4cG9ydCBsZXQgZiA9IDAuOTI7XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1jaGVja2JveFwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgZiA9IDAuOTU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGYgPSAwLjkyO1xuICAgIH1cbiAgfSk7XG5cbi8vINCn0LXQutCx0L7QutGBINC/0LvQtdC90LrQsFxuZXhwb3J0IGxldCBmb3JtYXQgPSAyO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFwZUNoZWNrYm94KCkge1xuICBjb25zdCBmb3JtYXRUYXBlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RhcGUnKTtcblxuICBjb25zdCBmb3JtYXRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1hdFRhcGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX19uYW1lXCIsICdibG9ja19fbmFtZS1mb3JtYXQnKTtcbiAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2lucHV0JylcblxuICBjb25zdCBsYWJlbFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcblxuICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dENoZWNrYm94LmlkID0gXCJmb3JtYXQtY2hlY2tib3hcIjtcbiAgaW5wdXRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gIGNvbnN0IHNwYW5TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3BhblNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuXG4gIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbiAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcilcblxuICBpbnB1dENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbiAgICAgICAgICBmb3JtYXQgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbiAgICAgICAgICBmb3JtYXQgPSAyO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICByZXR1cm4gZm9ybWF0VGFwZUJsb2NrO1xufVxuXG4vLyBsZXQgZm9ybWF0ID0gXCLQoNGD0LrQsNCyXCJcblxuLy8gZG9jdW1lbnRcbi8vICAgLmdldEVsZW1lbnRCeUlkKFwiZm9ybWF0LWNoZWNrYm94XCIpXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygn0KDRg9C60LDQsicpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygncG9sb3RubycpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyBkb2N1bWVudFxuLy8gICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtYXQtY2hlY2tib3hcIilcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmxvY2tfX25hbWUtZm9ybWF0JykudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdibG9ja19fbmFtZS1mb3JtYXQnKS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gdGFwZUNoZWNrYm94KCkge1xuLy8gICBjb25zdCBmb3JtYXRUYXBlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBmb3JtYXRUYXBlQmxvY2suY2xhc3NMaXN0LmFkZChcImJsb2NrX190YXBlXCIpO1xuXG4vLyAgIGNvbnN0IGZvcm1hdFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgZm9ybWF0VGFwZS5jbGFzc0xpc3QuYWRkKFwiYmxvY1wiKTtcbi8vICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0KDRg9C60LDQslwiO1xuXG4vLyAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICBjb25zdCBsYWJlbFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbi8vICAgbGFiZWxTd2l0Y2guY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcblxuLy8gICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICBpbnB1dENoZWNrYm94LmlkID0gXCJmb3JtYXQtY2hlY2tib3hcIjtcbi8vICAgaW5wdXRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4vLyAgIGNvbnN0IHNwYW5TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgc3BhblNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuXG4vLyAgIGxhYmVsU3dpdGNoLmFwcGVuZChpbnB1dENoZWNrYm94LCBzcGFuU2xpZGVyKTtcbi8vICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kKGxhYmVsU3dpdGNoKTtcbi8vICAgZm9ybWF0VGFwZUJsb2NrLmFwcGVuZChmb3JtYXRUYXBlLCBjaGVja2JveENvbnRhaW5lcilcblxuLy8gICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQsdC70L7QutCwINCyINC90YPQttC90L7QtSDQvNC10YHRgtC+XG4vLyAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcGUnKTtcbi8vICAgYmxvY2sucHJlcGVuZChmb3JtYXRUYXBlQmxvY2spO1xuICBcblxuLy8gICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNC5INC00LvRjyDRh9C10LrQsdC+0LrRgdCwXG4vLyAgIGlucHV0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgaWYgKGlucHV0Q2hlY2tib3guY2hlY2tlZCkge1xuLy8gICAgICAgZm9ybWF0VGFwZS50ZXh0Q29udGVudCA9IFwi0J/QvtC70L7RgtC90L5cIjtcbi8vICAgICAgIGZvcm1hdCA9IDE7ICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSBcItCg0YPQutCw0LJcIjtcbi8vICAgICAgIGZvcm1hdCA9IDI7ICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPXG4vLyAgICAgfVxuICAgIFxuLy8gICB9KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhmb3JtYXQpO1xuLy8gICByZXR1cm4gZm9ybWF0VGFwZUJsb2NrO1xuLy8gfSIsIi8vIGltcG9ydCB7IGJsb2NrLCBwcmljZU1hdGVyaWFscyB9IGZyb20gXCIuL2Jsb2NrLXBhY2thZ2UuanNcIjtcbmltcG9ydCB7IGYsIGZvcm1hdCB9IGZyb20gXCIuL2NoZWNrYm94LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdFVsRWxlbWVudChuYW1lLCBkc2MsIGlkLCBmb3JtYXQpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJibG9ja19faXRlbVwiKTtcblxuICBjb25zdCBsaURzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlEc2MuY2xhc3NMaXN0LmFkZChcImJsb2NrX19jb250YWluZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fbmFtZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2RzY1wiKTtcbiAgc3VidGl0bGUudGV4dENvbnRlbnQgPSBkc2M7XG5cbiAgbGlEc2MuYXBwZW5kKHRpdGxlLCBzdWJ0aXRsZSk7XG5cbiAgY29uc3QgbGlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gIGlucHV0Lm1pbiA9IDE7XG4gIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImJsb2NrX19pbnB1dFwiKTtcblxuICBsaVZhbHVlLmFwcGVuZChpbnB1dCk7XG4gIHVsLmFwcGVuZChsaURzYywgbGlWYWx1ZSk7XG5cbiAgZm9ybWF0ID09PSBcInBhY2thZ2VcIlxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29zdEVsZW1lbnQobmFtZSwgaWQsIHBsYWNlaG9sZGVyLCBmb3JtYXQpIHtcbiAgY29uc3QgaW5wdXRDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dENvc3QudHlwZSA9IFwibnVtYmVyXCI7XG4gIGlucHV0Q29zdC5taW4gPSAxO1xuICBpbnB1dENvc3QuaWQgPSBpZDtcbiAgaW5wdXRDb3N0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXRDb3N0LmNsYXNzTGlzdC5hZGQoYGJsb2NrX18ke25hbWV9YCk7XG4gIGlucHV0Q29zdC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXG4gIC8vIHByaWNlTWF0ZXJpYWxzLmFwcGVuZChpbnB1dENvc3QpO1xuICBmb3JtYXQgPT09IFwicGFja2FnZS1wcmljZVwiXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGlucHV0Q29zdClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoaW5wdXRDb3N0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhY2thZ2VJbmZvKG5hbWUsIGRzYywgaWQsIHVsSWQsIGZvcm1hdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdWwuY2xhc3NMaXN0LmFkZChcImJsb2NrX19pdGVtXCIsIFwiYmxvY2tfX2l0ZW0tZm9vdGVyXCIsIFwiaGlkZGVuXCIpO1xuICB1bC5pZCA9IHVsSWQ7XG5cbiAgY29uc3QgbGlEc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpRHNjLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX25hbWVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZChcImJsb2NrX19kc2NcIik7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gZHNjO1xuXG4gIGxpRHNjLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xuXG4gIGNvbnN0IGluZm9QYWNrYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm9QYWNrYWdlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19faW5mb1wiKTtcbiAgaW5mb1BhY2thZ2UuaWQgPSBpZDtcblxuICB1bC5hcHBlbmQobGlEc2MsIGluZm9QYWNrYWdlKTtcblxuICBmb3JtYXQgPT09IFwicGFja2FnZVwiXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmljZUluZm8oZm9ybWF0LCB0eXBlKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2Zvb3RlclwiKTtcblxuICBjb25zdCBjb3N0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3N0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2Zvb3Rlcl9jb3N0XCIsIFwiaGlkZGVuXCIpO1xuICAvLyBjb3N0RWxlbWVudC50ZXh0Q29udGVudCA9ICcyMCc7XG4gIGNvc3RFbGVtZW50LmlkID0gYGZvb3Rlci1jb3N0LSR7dHlwZX1gO1xuXG4gIGNvbnN0IHNlbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNlbGxpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3NlbGxpbmdcIiwgXCJoaWRkZW5cIik7XG4gIC8vIHNlbGxpbmdFbGVtZW50LnRleHRDb250ZW50ID0gJzIwJztcbiAgc2VsbGluZ0VsZW1lbnQuaWQgPSBgZm9vdGVyLXNlbGxpbmctJHt0eXBlfWA7XG5cbiAgZm9vdGVyLmFwcGVuZChjb3N0RWxlbWVudCwgc2VsbGluZ0VsZW1lbnQpO1xuXG4gIGNvbnN0IHByb2ZpdEVsZW1lbnRUYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2ZpdEVsZW1lbnRUYXBlLmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3Byb2ZpdFwiLCBcImhpZGRlblwiKTtcbiAgLy8gcHJvZml0RWxlbWVudFRhcGUudGV4dENvbnRlbnQgPSAnMjAnO1xuICBwcm9maXRFbGVtZW50VGFwZS5pZCA9IGBmb290ZXItcHJvZml0LSR7dHlwZX0tbWA7XG5cbiAgY29uc3QgcHJvZml0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9maXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9ja19fZm9vdGVyX3Byb2ZpdFwiLCBcImhpZGRlblwiKTtcbiAgLy8gcHJvZml0RWxlbWVudC50ZXh0Q29udGVudCA9ICcyMCc7XG4gIHByb2ZpdEVsZW1lbnQuaWQgPSBgZm9vdGVyLXByb2ZpdC0ke3R5cGV9YDtcblxuICAvLyBibG9jay5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50KTtcbiAgZm9ybWF0ID09PSBcInBhY2thZ2VcIlxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZChmb290ZXIsIHByb2ZpdEVsZW1lbnQpXG4gICAgOiBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApXG4gICAgICAgIC5hcHBlbmQoZm9vdGVyLCBwcm9maXRFbGVtZW50VGFwZSwgcHJvZml0RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICB2YWx1ZSxcbiAgdGV4dFNlbGVjdG9yLFxuICB1bFNlbGVjdG9yLFxuICBtdWx0aXBsaWVyID0gMSxcbiAgZGVjaW1hbFBsYWNlcyA9IDJcbikge1xuICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGV4dFNlbGVjdG9yKTtcbiAgY29uc3QgdWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1bFNlbGVjdG9yKTtcblxuICBpZiAodmFsdWUgPiAwKSB7XG4gICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSAodmFsdWUgKiBtdWx0aXBsaWVyKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFsbEluZm9QYWNrYWdlKCkge1xuICBsZXQgb25lUGFja2FnZSA9XG4gICAgKHZhbHVlcy53aWR0aCAqIGYgKiAyICogdmFsdWVzLmhlaWdodCAqICh2YWx1ZXMudGhpY2tuZXNzIC8gMTAwMDApKSAvIDEwMDA7XG4gIGxldCBhbGxQYWNrYWdlID0gb25lUGFja2FnZSAqIHZhbHVlcy5jaXJjdWxhdGlvbjtcbiAgbGV0IHRvdGFsUGFja2FnZSA9IHZhbHVlcy53ZWlnaHQgLyBvbmVQYWNrYWdlO1xuICBsZXQgcHJpbWVQcmljZSA9IHZhbHVlcy5jb3N0ICogb25lUGFja2FnZTtcbiAgbGV0IGJ1eVByaWNlID0gdmFsdWVzLnNlbGwgKiBvbmVQYWNrYWdlO1xuICBsZXQgcHJvZml0ID1cbiAgICAoYnV5UHJpY2UgLSBwcmltZVByaWNlKSAqIHZhbHVlcy5jaXJjdWxhdGlvbiB8fFxuICAgIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsXCIpLnRleHRDb250ZW50KTtcbiAgdXBkYXRlUGFja2FnZUluZm8ob25lUGFja2FnZSwgXCIjb25lXCIsIFwiI3VsT25lXCIsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxQYWNrYWdlLCBcIiNhbGxcIiwgXCIjdWxBbGxcIik7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHRvdGFsUGFja2FnZSwgXCIjdG90YWxcIiwgXCIjdWxUb3RhbFwiLCAxLCAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJpbWVQcmljZSwgXCIjZm9vdGVyLWNvc3QtcGFja2FnZVwiLCBcIiNmb290ZXItY29zdC1wYWNrYWdlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZSxcbiAgICBcIiNmb290ZXItc2VsbGluZy1wYWNrYWdlXCIsXG4gICAgXCIjZm9vdGVyLXNlbGxpbmctcGFja2FnZVwiXG4gICk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByb2ZpdCwgXCIjZm9vdGVyLXByb2ZpdC1wYWNrYWdlXCIsIFwiI2Zvb3Rlci1wcm9maXQtcGFja2FnZVwiKTtcbn1cblxuZnVuY3Rpb24gYWxsSW5mb1RhcGUoKSB7XG4gIGxldCBvbmVUYXBlID1cbiAgICAodmFsdWVzLndpZHRoVGFwZSAqIGYgKiBmb3JtYXQgKiAxMDAgKiAodmFsdWVzLnRoaWNrbmVzc1RhcGUgLyAxMDAwMCkpIC9cbiAgICAxMDAwO1xuICBsZXQgYWxsVGFwZSA9IG9uZVRhcGUgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlO1xuICBsZXQgdG90YWxUYXBlID0gdmFsdWVzLndlaWdodFRhcGUgLyBvbmVUYXBlO1xuICBsZXQgcHJpbWVQcmljZVRhcGUgPSB2YWx1ZXMuY29zdFRhcGUgKiBvbmVUYXBlO1xuICBsZXQgYnV5UHJpY2VUYXBlID0gdmFsdWVzLnNlbGxUYXBlICogb25lVGFwZTtcbiAgbGV0IHByb2ZpdFRhcGUgPVxuICAgIChidXlQcmljZVRhcGUgLSBwcmltZVByaWNlVGFwZSkgKiB2YWx1ZXMuY2lyY3VsYXRpb25UYXBlIHx8XG4gICAgTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtdGFwZVwiKS50ZXh0Q29udGVudCk7XG4gIGxldCBwcm9maXRUYXBlS2cgPSAodmFsdWVzLnNlbGxUYXBlIC0gdmFsdWVzLmNvc3RUYXBlKSAqIHZhbHVlcy53ZWlnaHRUYXBlO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhvbmVUYXBlLCBcIiNvbmUtdGFwZVwiLCBcIiN1bE9uZS10YXBlXCIsIDEwMDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhhbGxUYXBlLCBcIiNhbGwtdGFwZVwiLCBcIiN1bEFsbC10YXBlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyh0b3RhbFRhcGUsIFwiI3RvdGFsLXRhcGVcIiwgXCIjdWxUb3RhbC10YXBlXCIsIDEsIDApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcmltZVByaWNlVGFwZSwgXCIjZm9vdGVyLWNvc3QtdGFwZVwiLCBcIiNmb290ZXItY29zdC10YXBlXCIpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhcbiAgICBidXlQcmljZVRhcGUsXG4gICAgXCIjZm9vdGVyLXNlbGxpbmctdGFwZVwiLFxuICAgIFwiI2Zvb3Rlci1zZWxsaW5nLXRhcGVcIlxuICApO1xuICB1cGRhdGVQYWNrYWdlSW5mbyhwcm9maXRUYXBlLCBcIiNmb290ZXItcHJvZml0LXRhcGUtbVwiLCBcIiNmb290ZXItcHJvZml0LXRhcGUtbVwiKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJvZml0VGFwZUtnLCBcIiNmb290ZXItcHJvZml0LXRhcGVcIiwgXCIjZm9vdGVyLXByb2ZpdC10YXBlXCIpO1xufVxuXG5sZXQgdmFsdWVzID0ge307XG5leHBvcnQgZnVuY3Rpb24gc2V0VmFsdWVzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBhbGxJbmZvUGFja2FnZSgpO1xuICAgICAgYWxsSW5mb1RhcGUoKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5jb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsTnVtYmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQn9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQv9GA0L7QutGA0YPRgtC60YMg0YHRgtGA0LDQvdC40YbRi1xuXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSB8fCAxOyAvLyDQn9C+0LvRg9GH0LDQtdC8INGI0LDQsyDQuNC30LzQtdC90LXQvdC40Y8gKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDEpXG4gICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcIm1pblwiKSkgfHwgMDsgLy8g0J/QvtC70YPRh9Cw0LXQvCDQvNC40L3QuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDApXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YLQutCwINCy0LLQtdGA0YUsINGD0LLQtdC70LjRh9C40LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtVxuICAgICAgICAgIHRoaXMudmFsdWUgPSBOdW1iZXIodGhpcy52YWx1ZSkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vINCf0YDQvtC60YDRg9GC0LrQsCDQstC90LjQtywg0YPQvNC10L3RjNGI0LDQtdC8INC30L3QsNGH0LXQvdC40LUgKNC10YHQu9C4INCx0L7Qu9GM0YjQtSDQuNC70Lgg0YDQsNCy0L3QviDQvNC40L3QuNC80LDQu9GM0L3QvtC80YMg0LfQvdCw0YfQtdC90LjRjilcbiAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0aC5tYXgobWluLCBOdW1iZXIodGhpcy52YWx1ZSkgLSBzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICAgIGFsbEluZm9QYWNrYWdlKCk7XG4gICAgICAgIGFsbEluZm9UYXBlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwibGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkJyk7XG5sZXQgc3F1YXJlcyA9IDI4ODY7XG5sZXQgY29sb3JzID0gWyd5ZWxsb3cnLCAnZGFya2JsdWUnLCAncHVycGxlJywgJ2xpbWUnLCAnd2hpdGUnLCAnZ3JheScsICdnb2xkJywgJ3BpbmsnLCAnU2FsbW9uJywgJ0RlZXBTa3lCbHVlJywgJ1RlYWwnXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlczsgaSsrKSB7XG4gIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2V0Q29sb3IpO1xuICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlbW92ZUNvbG9yKTtcbiAgYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG59XG5mdW5jdGlvbiBzZXRDb2xvcihldnQpIHtcbiAgbGV0IGVsZW0gPSBldnQudGFyZ2V0O1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhbmRvbUNvbG9yKCk7XG4gIGVsZW0uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggJy5jb25jYXQocmFuZG9tQ29sb3IoKSwgJywgMCAwIDEwcHggJykuY29uY2F0KHJhbmRvbUNvbG9yKCkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ29sb3IoZXZ0KSB7XG4gIGxldCBlbGVtID0gZXZ0LnRhcmdldDtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzFkMWQxZDFkJztcbiAgZWxlbS5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAjMDAwJztcbn1cbmxldCByYW5kb21Db2xvciA9IGZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zYXNzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vanMvYmxvY2stcGFja2FnZVwiO1xuaW1wb3J0IFwiLi9qcy9zcXVhcmVcIjtcbmltcG9ydCBcIi4vanMvYmxvY2stdGFwZVwiO1xuIl0sIm5hbWVzIjpbImNyZWF0VWxFbGVtZW50IiwiY3JlYXRlQ29zdEVsZW1lbnQiLCJwYWNrYWdlSW5mbyIsInNjcm9sbE51bWJlciIsInNldFZhbHVlcyIsInByaWNlSW5mbyIsInNlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJibG9jayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsInByZXBlbmQiLCJibG9ja1RpdGxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJwcmljZU1hdGVyaWFscyIsInRhcGVDaGVja2JveCIsImYiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja2VkIiwiZm9ybWF0IiwiZm9ybWF0VGFwZUJsb2NrIiwiZm9ybWF0VGFwZSIsImNoZWNrYm94Q29udGFpbmVyIiwibGFiZWxTd2l0Y2giLCJpbnB1dENoZWNrYm94IiwidHlwZSIsInNwYW5TbGlkZXIiLCJuYW1lIiwiZHNjIiwidWwiLCJsaURzYyIsInRpdGxlIiwic3VidGl0bGUiLCJsaVZhbHVlIiwiaW5wdXQiLCJtaW4iLCJyZXF1aXJlZCIsImNvbmNhdCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDb3N0IiwidWxJZCIsImluZm9QYWNrYWdlIiwiZm9vdGVyIiwiY29zdEVsZW1lbnQiLCJzZWxsaW5nRWxlbWVudCIsInByb2ZpdEVsZW1lbnRUYXBlIiwicHJvZml0RWxlbWVudCIsInVwZGF0ZVBhY2thZ2VJbmZvIiwidmFsdWUiLCJ0ZXh0U2VsZWN0b3IiLCJ1bFNlbGVjdG9yIiwibXVsdGlwbGllciIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlY2ltYWxQbGFjZXMiLCJ0ZXh0RWxlbWVudCIsInVsRWxlbWVudCIsInRvRml4ZWQiLCJyZW1vdmUiLCJhbGxJbmZvUGFja2FnZSIsIm9uZVBhY2thZ2UiLCJ2YWx1ZXMiLCJ3aWR0aCIsImhlaWdodCIsInRoaWNrbmVzcyIsImFsbFBhY2thZ2UiLCJjaXJjdWxhdGlvbiIsInRvdGFsUGFja2FnZSIsIndlaWdodCIsInByaW1lUHJpY2UiLCJjb3N0IiwiYnV5UHJpY2UiLCJzZWxsIiwicHJvZml0IiwiTnVtYmVyIiwiYWxsSW5mb1RhcGUiLCJvbmVUYXBlIiwid2lkdGhUYXBlIiwidGhpY2tuZXNzVGFwZSIsImFsbFRhcGUiLCJjaXJjdWxhdGlvblRhcGUiLCJ0b3RhbFRhcGUiLCJ3ZWlnaHRUYXBlIiwicHJpbWVQcmljZVRhcGUiLCJjb3N0VGFwZSIsImJ1eVByaWNlVGFwZSIsInNlbGxUYXBlIiwicHJvZml0VGFwZSIsInByb2ZpdFRhcGVLZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiYWN0aXZlRWxlbWVudCIsInByZXZlbnREZWZhdWx0Iiwic3RlcCIsImdldEF0dHJpYnV0ZSIsImRlbHRhWSIsIk1hdGgiLCJtYXgiLCJib2FyZCIsInNxdWFyZXMiLCJjb2xvcnMiLCJpIiwic3F1YXJlIiwic2V0Q29sb3IiLCJyZW1vdmVDb2xvciIsImV2dCIsImVsZW0iLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInJhbmRvbUNvbG9yIiwiYm94U2hhZG93IiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9