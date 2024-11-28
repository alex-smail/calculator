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
  var blockPVD = document.createElement('div');
  blockPVD.classList = 'block block__PVD hidden';
  var pvdDsr = document.createElement('h2');
  pvdDsr.classList = 'block__PVD_dsc';
  pvdDsr.textContent = 'Фасовка';
  var dsrFooter = document.createElement('p');
  dsrFooter.classList = 'block__PVD_dsc_footer';
  dsrFooter.innerHTML = "\u041D\u0430 \u043F\u0430\u043A\u0435\u0442\u044B \u043E\u0442 400 \u043C\u043C \n<br>\n<br> \u041F\u041D\u0414 \u043E\u0442 20 \u043C\u043A\u043C \n<br> \u041F\u0412\u0414 \u043E\u0442 50 \u043C\u043A\u043C\n<hr>\n\u041F\u041D\u0414 \n <br/>150\u043A\u0433 - 240 \n <br/>300\u043A\u0433 - 230 \n <br/>500\u043A\u0433 - 215\n<hr>\n\u041F\u0412\u0414\n<br/>150\u043A\u0433 - 230 \n<br/>300\u043A\u0433 - 220 \n<br/>500\u043A\u0433 - 210";
  blockPVD.append(pvdDsr, dsrFooter);
  var blockPND = document.createElement('div');
  blockPND.classList = 'block block__PND hidden';
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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQzlLLE1BQU07RUFDckIrSyxJQUFJLENBQUN0RixLQUFLLENBQUN1RixlQUFlLEdBQUcsV0FBVztFQUN4Q0QsSUFBSSxDQUFDdEYsS0FBSyxDQUFDeUYsU0FBUyxHQUFHLGNBQWM7QUFDdkM7QUFDQSxJQUFJRCxXQUFXLEdBQUcsU0FBU0EsV0FBV0EsQ0FBQSxFQUFHO0VBQ3ZDLE9BQU9SLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDYSxLQUFLLENBQUNiLElBQUksQ0FBQ2MsTUFBTSxDQUFDLENBQUMsR0FBR1gsTUFBTSxDQUFDekksTUFBTSxDQUFDLENBQUM7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdEJEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUNDO0FBQ1A7QUFDSTtBQUNBO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9ibG9jay1pbmZvLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2Jsb2NrLXBhY2thZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvYmxvY2stdGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9qcy9jYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L2pzL2RyYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgvanMvc3F1YXJlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4L3Nhc3MvaW5kZXguc2Nzcz8zZWRhIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbGxCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBibG9ja0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrSW5mby5jbGFzc0xpc3QgPSAnYmxvY2sgYmxvY2staW5mbyBoaWRkZW4nO1xuYWxsQmxvY2suYXBwZW5kKGJsb2NrSW5mbyk7XG5cbmNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5pbmZvVGl0bGUuY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX3RpdGxlJztcbmluZm9UaXRsZS50ZXh0Q29udGVudCA9ICfQlNC40LDQv9C+0LfQvtC9INC/0YDQvtC00LDQttC90L7QuSDRhtC10L3Riyc7XG5cbmNvbnN0IGluZm9Ec2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5pbmZvRHNjLmNsYXNzTGlzdCA9ICdibG9jay1pbmZvX19kc2MnO1xuXG5jb25zdCByYWRpb0lucHV0U2hpcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucmFkaW9JbnB1dFNoaXJ0LnR5cGUgPSAncmFkaW8nO1xucmFkaW9JbnB1dFNoaXJ0Lm5hbWUgPSAnZm9ybWF0JztcbnJhZGlvSW5wdXRTaGlydC5pZCA9ICdzaGlydCc7XG5cbmNvbnN0IGxhYmVsU2hpcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGFiZWxTaGlydC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzaGlydCcpO1xubGFiZWxTaGlydC50ZXh0Q29udGVudCA9ICfQnNCw0LnQutCwJztcblxuY29uc3QgcmFkaW9JbnB1dFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucmFkaW9JbnB1dFRhcGUudHlwZSA9ICdyYWRpbyc7XG5yYWRpb0lucHV0VGFwZS5uYW1lID0gJ2Zvcm1hdCc7XG5yYWRpb0lucHV0VGFwZS5pZCA9ICd0YXBlSW5wdXQnO1xuXG5jb25zdCBsYWJlbFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGFiZWxUYXBlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RhcGVJbnB1dCcpO1xubGFiZWxUYXBlLnRleHRDb250ZW50ID0gJ9Cf0LvQtdC90LrQsCc7XG5cbmluZm9Ec2MuYXBwZW5kKHJhZGlvSW5wdXRTaGlydCwgbGFiZWxTaGlydCwgcmFkaW9JbnB1dFRhcGUsIGxhYmVsVGFwZSk7XG5cbmNvbnN0IGluZm9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW5mb0lucHV0LmNsYXNzTGlzdCA9ICdibG9jay1pbmZvX19pbnB1dCc7XG5cbmNvbnN0IGluZm9JbnB1dE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbmZvSW5wdXROdW0uY2xhc3NMaXN0ID0gJ2Jsb2NrLWluZm9fX2lucHV0X251bSc7XG5pbmZvSW5wdXROdW0udHlwZSA9ICdudW1iZXInO1xuaW5mb0lucHV0TnVtLmlkID0gJ3JhbmdlVmFsdWUnO1xuaW5mb0lucHV0TnVtLm1pbiA9ICcwJztcbmluZm9JbnB1dE51bS5tYXggPSAnMTAwMDAwJztcbmluZm9JbnB1dE51bS5zdGVwID0gJzUwMDAnO1xuaW5mb0lucHV0TnVtLnZhbHVlID0gJzAnO1xuXG5jb25zdCByYW5nZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnJhbmdlSW5wdXQudHlwZSA9ICdyYW5nZSc7XG5yYW5nZUlucHV0LmlkID0gJ3JhbmdlSW5wdXQnO1xucmFuZ2VJbnB1dC5taW4gPSAnMCc7XG5yYW5nZUlucHV0Lm1heCA9ICcxMDAwMDAnO1xucmFuZ2VJbnB1dC5zdGVwID0gJzUwMDAnO1xuXG5pbmZvSW5wdXQuYXBwZW5kKGluZm9JbnB1dE51bSwgcmFuZ2VJbnB1dCk7XG5cbmNvbnN0IHRyYWZmaWNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudHJhZmZpY1ByaWNlLmNsYXNzTGlzdCA9ICdibG9jay1pbmZvX190cmFmZmljLXByaWNlJztcblxuY29uc3QgdHJhZmZpY1ByaWNlR3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRyYWZmaWNQcmljZUdyZWVuLmNsYXNzTGlzdCA9ICdibG9jay1pbmZvX190cmFmZmljLXByaWNlX2dyZWVuJztcblxudHJhZmZpY1ByaWNlLmFwcGVuZCh0cmFmZmljUHJpY2VHcmVlbik7XG5ibG9ja0luZm8uYXBwZW5kKGluZm9UaXRsZSwgaW5mb0RzYywgaW5mb0lucHV0LCB0cmFmZmljUHJpY2UpO1xuXG4vLyDRhtC10L3Ri1xubGV0IHByaWNlU2hpcnQgPSAyOTA7XG5sZXQgcHJpY2VUYXBlID0gMTk1O1xuXG4vLyDQntCx0L3QvtCy0LvQtdC90LjQtSDQt9C90LDRh9C10L3QuNC5XG5yYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBpbmZvSW5wdXROdW0udmFsdWUgPSByYW5nZUlucHV0LnZhbHVlO1xuICB1cGRhdGVQcmljZXMoKTtcbn0pO1xuXG5pbmZvSW5wdXROdW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gIGNvbnN0IG1pbiA9IE51bWJlcihpbmZvSW5wdXROdW0ubWluKTtcbiAgY29uc3QgbWF4ID0gTnVtYmVyKGluZm9JbnB1dE51bS5tYXgpO1xuICBpZiAoaW5mb0lucHV0TnVtLnZhbHVlIDwgbWluKSBpbmZvSW5wdXROdW0udmFsdWUgPSBtaW47XG4gIGlmIChpbmZvSW5wdXROdW0udmFsdWUgPiBtYXgpIGluZm9JbnB1dE51bS52YWx1ZSA9IG1heDtcbiAgcmFuZ2VJbnB1dC52YWx1ZSA9IGluZm9JbnB1dE51bS52YWx1ZTtcbiAgdXBkYXRlUHJpY2VzKCk7XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlUmFuZ2VBdHRyaWJ1dGVzKG1pbiwgbWF4LCBzdGVwKSB7XG4gIHJhbmdlSW5wdXQubWluID0gbWluO1xuICByYW5nZUlucHV0Lm1heCA9IG1heDtcbiAgcmFuZ2VJbnB1dC5zdGVwID0gc3RlcDtcbiAgcmFuZ2VJbnB1dC52YWx1ZSA9IG1pbjtcbiAgaW5mb0lucHV0TnVtLm1pbiA9IG1pbjtcbiAgaW5mb0lucHV0TnVtLm1heCA9IG1heDtcbiAgaW5mb0lucHV0TnVtLnN0ZXAgPSBzdGVwO1xuICBpbmZvSW5wdXROdW0udmFsdWUgPSBtaW47XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByaWNlcygpIHtcbiAgY29uc3Qgc2VsZWN0ZWRSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJmb3JtYXRcIl06Y2hlY2tlZCcpO1xuICBpZiAoIXNlbGVjdGVkUmFkaW8pIHJldHVybjtcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkUmFkaW8uaWQ7XG5cbiAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdzaGlydCcpIHtcbiAgICBzd2l0Y2ggKE51bWJlcihpbmZvSW5wdXROdW0udmFsdWUpKSB7XG4gICAgICBjYXNlIDUwMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VTaGlydCArIDEwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlU2hpcnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxNTAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0IC0gMTApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyMDAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0IC0gMTUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyNTAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0IC0gMjApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzMDAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0IC0gMjMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzNTAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0IC0gMjYpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0MDAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0IC0gMjgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA1MDAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVNoaXJ0IC0gMzApO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICd0YXBlSW5wdXQnKSB7XG4gICAgc3dpdGNoIChOdW1iZXIoaW5mb0lucHV0TnVtLnZhbHVlKSkge1xuICAgICAgY2FzZSAxMDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlICsgMzUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlVGFwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1MDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlIC0gNSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlVGFwZSAtIDEwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE1MDA6XG4gICAgICAgIHNldFByaWNlVmFsdWUocHJpY2VUYXBlIC0gMTIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjAwMDpcbiAgICAgICAgc2V0UHJpY2VWYWx1ZShwcmljZVRhcGUgLSAxMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMDAwOlxuICAgICAgICBzZXRQcmljZVZhbHVlKHByaWNlVGFwZSAtIDE1KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRQcmljZVZhbHVlKGdyZWVuKSB7XG4gIHRyYWZmaWNQcmljZUdyZWVuLnRleHRDb250ZW50ID0gZ3JlZW47XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJhZGlvQ2hhbmdlKGV2ZW50KSB7XG4gIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBldmVudC50YXJnZXQuaWQ7XG4gIGlmIChzZWxlY3RlZFZhbHVlID09PSAnc2hpcnQnKSB7XG4gICAgdXBkYXRlUmFuZ2VBdHRyaWJ1dGVzKDAsIDEwMDAwMCwgNTAwMCk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ3RhcGVJbnB1dCcpIHtcbiAgICB1cGRhdGVSYW5nZUF0dHJpYnV0ZXMoMCwgNTAwMCwgMTAwKTtcbiAgfVxufVxuXG5yYWRpb0lucHV0U2hpcnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlUmFkaW9DaGFuZ2UpO1xucmFkaW9JbnB1dFRhcGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlUmFkaW9DaGFuZ2UpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICB1cGRhdGVQcmljZXMoKTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8g0LHQu9C+0Log0YEg0LjQvdGE0L7RgNC80LDRhtC40LXQuSDQv9C+INC80LDQudC60LUg0Lgg0YTQsNGB0L7QstC60LVcbmV4cG9ydCBjb25zdCBibG9ja1BWRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxvY2tQVkQuY2xhc3NMaXN0ID0gJ2Jsb2NrIGJsb2NrX19QVkQgaGlkZGVuJztcblxuY29uc3QgcHZkRHNyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnB2ZERzci5jbGFzc0xpc3QgPSAnYmxvY2tfX1BWRF9kc2MnO1xucHZkRHNyLnRleHRDb250ZW50ID0gJ9Ck0LDRgdC+0LLQutCwJztcblxuY29uc3QgZHNyRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuZHNyRm9vdGVyLmNsYXNzTGlzdCA9ICdibG9ja19fUFZEX2RzY19mb290ZXInO1xuZHNyRm9vdGVyLmlubmVySFRNTCA9IGDQndCwINC/0LDQutC10YLRiyDQvtGCIDQwMCDQvNC8IFxuPGJyPlxuPGJyPiDQn9Cd0JQg0L7RgiAyMCDQvNC60LwgXG48YnI+INCf0JLQlCDQvtGCIDUwINC80LrQvFxuPGhyPlxu0J/QndCUIFxuIDxici8+MTUw0LrQsyAtIDI0MCBcbiA8YnIvPjMwMNC60LMgLSAyMzAgXG4gPGJyLz41MDDQutCzIC0gMjE1XG48aHI+XG7Qn9CS0JRcbjxici8+MTUw0LrQsyAtIDIzMCBcbjxici8+MzAw0LrQsyAtIDIyMCBcbjxici8+NTAw0LrQsyAtIDIxMGA7XG5ibG9ja1BWRC5hcHBlbmQocHZkRHNyLCBkc3JGb290ZXIpO1xuXG5leHBvcnQgY29uc3QgYmxvY2tQTkQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsb2NrUE5ELmNsYXNzTGlzdCA9ICdibG9jayBibG9ja19fUE5EIGhpZGRlbic7XG5cbiBjb25zdCBwbmREc3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucG5kRHNyLmNsYXNzTGlzdCA9ICdibG9ja19fUE5EX2RzYyc7XG5wbmREc3IudGV4dENvbnRlbnQgPSAn0JzQsNC50LrQsCc7XG5cbmNvbnN0IGRzckZvb3RlclBORCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmRzckZvb3RlclBORC5jbGFzc0xpc3QgPSAnYmxvY2tfX1BORF9kc2NfZm9vdGVyJztcbmRzckZvb3RlclBORC5pbm5lckhUTUwgPSBg0JTQu9GPINC80LDQudC60LggXG48YnI+XG48aHI+XG4yNNGFNDBcbjxicj4gLSDQvNC40L0g0L/QsNGA0YLQuNGPIDIw0YLRi9GBXG48aHI+XG4yONGFNTBcbjxicj4gLSDQvNC40L0g0L/QsNGA0YLQuNGPIDE10YLRi9GBXG48aHI+XG40MNGFNjAg0LggNDDRhTcwXG48YnI+IC0g0LzQuNC9INC/0LDRgNGC0LjRjyA10YLRi9GBXG48aHI+XG48YnI+XG7QvdCw0YfQsNC70YzQvdCw0Y8g0YbQtdC90L3QsCDQv9C+INGC0LDQsdC70LjRhtC1INC+0YIgMTDRgtGL0YEhYDtcbmJsb2NrUE5ELmFwcGVuZChwbmREc3IsIGRzckZvb3RlclBORCk7XG5cbmFsbEJsb2NrLmFwcGVuZChibG9ja1BWRCwgYmxvY2tQTkQpO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRVbEVsZW1lbnQsXG4gIGNyZWF0ZUNvc3RFbGVtZW50LFxuICBwYWNrYWdlSW5mbyxcbiAgc2Nyb2xsTnVtYmVyLFxuICBzZXRWYWx1ZXMsXG4gIHByaWNlSW5mbyxcbn0gZnJvbSAnLi9mdW5jdGlvbi5qcyc7XG4vLyDQkdC70L7QuiDQpNCw0YHQvtCy0LrQsFxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycsICdwYWNrYWdlJyk7XG5ibG9jay5pZCA9ICdwYWNrYWdlJztcblxuc2VjdGlvbi5wcmVwZW5kKGJsb2NrKTtcblxuY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5ibG9ja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX190aXRsZScpO1xuYmxvY2tUaXRsZS50ZXh0Q29udGVudCA9ICfQpNCw0YHQvtCy0LrQsCc7XG5cbmJsb2NrLmFwcGVuZChibG9ja1RpdGxlKTtcblxuY3JlYXRVbEVsZW1lbnQoJ9Co0LjRgNC40L3QsCcsICfRgdC8LicsICd3aWR0aCcsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudCgn0JLRi9GB0L7RgtCwJywgJ9GB0LwuJywgJ2hlaWdodCcsICdwYWNrYWdlJyk7XG5jcmVhdFVsRWxlbWVudCgn0KLQvtC70YnQuNC90LAnLCAn0LzQutC8LicsICd0aGlja25lc3MnLCAncGFja2FnZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JywgJ9GI0YIuJywgJ2NpcmN1bGF0aW9uJywgJ3BhY2thZ2UnKTtcbmNyZWF0VWxFbGVtZW50KCfQktC10YEnLCAn0LrQsy4nLCAnd2VpZ2h0JywgJ3BhY2thZ2UnKTtcblxuZXhwb3J0IGNvbnN0IHByaWNlTWF0ZXJpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcmljZU1hdGVyaWFscy5jbGFzc0xpc3QuYWRkKCdibG9ja19fcHJpY2UtbWF0ZXJpYWxzJyk7XG5wcmljZU1hdGVyaWFscy5pZCA9ICdwYWNrYWdlLXByaWNlJztcblxuYmxvY2suYXBwZW5kKHByaWNlTWF0ZXJpYWxzKTtcblxuY3JlYXRlQ29zdEVsZW1lbnQoJ2Nvc3QtbWF0ZXJpYWxzJywgJ2Nvc3QnLCAn0KHQtdCx0LXRgdGCLi4uJywgJ3BhY2thZ2UtcHJpY2UnKTtcbmNyZWF0ZUNvc3RFbGVtZW50KCdzZWxsaW5nLXByaWNlJywgJ3NlbGwnLCAn0J/RgNC+0LTQsNC20LAnLCAncGFja2FnZS1wcmljZScpO1xuXG5wYWNrYWdlSW5mbygn0JLQtdGBINC/0LDQutC10YLQsCcsICfQsy4nLCAnb25lJywgJ3VsT25lJywgJ3BhY2thZ2UnKTtcbnBhY2thZ2VJbmZvKCfQktC10YEg0L/QsNGA0YLQuNC4JywgJ9C60LMuJywgJ2FsbCcsICd1bEFsbCcsICdwYWNrYWdlJyk7XG5wYWNrYWdlSW5mbygn0JrQvtC7LdCy0L4g0L/QsNC60LXRgtC+0LInLCAn0YjRgi4nLCAndG90YWwnLCAndWxUb3RhbCcsICdwYWNrYWdlJyk7XG5cbnByaWNlSW5mbygncGFja2FnZScsICdwYWNrYWdlJyk7XG5zY3JvbGxOdW1iZXIoKTtcbnNldFZhbHVlcygpO1xuXG4vLyDQkdC70L7QuiDQn9C70LXQvdC60LBcbiIsImltcG9ydCB7XG4gIGNyZWF0VWxFbGVtZW50LFxuICBjcmVhdGVDb3N0RWxlbWVudCxcbiAgcGFja2FnZUluZm8sXG4gIHNjcm9sbE51bWJlcixcbiAgc2V0VmFsdWVzLFxuICBwcmljZUluZm8sXG59IGZyb20gJy4vZnVuY3Rpb24uanMnO1xuaW1wb3J0IHsgdGFwZUNoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveC5qcyc7XG4vLyDQkdC70L7QuiDQn9C70LXQvdC60LBcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snLCAndGFwZScpOyAvLywgJ3RhcGUnXG5ibG9jay5pZCA9ICd0YXBlJztcblxuc2VjdGlvbi5hcHBlbmQoYmxvY2spO1xuXG5jb25zdCBibG9ja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX3RpdGxlJyk7XG5ibG9ja1RpdGxlLnRleHRDb250ZW50ID0gJ9Cf0LvQtdC90LrQsCc7XG5cbmJsb2NrLmFwcGVuZChibG9ja1RpdGxlLCB0YXBlQ2hlY2tib3goKSk7XG5cbmNyZWF0VWxFbGVtZW50KCfQqNC40YDQuNC90LAnLCAn0YHQvC4nLCAnd2lkdGhUYXBlJywgJ3RhcGUnKTtcbmNyZWF0VWxFbGVtZW50KCfQotC+0LvRidC40L3QsCcsICfQvNC60LwuJywgJ3RoaWNrbmVzc1RhcGUnLCAndGFwZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JywgJ9C8LicsICdjaXJjdWxhdGlvblRhcGUnLCAndGFwZScpO1xuY3JlYXRVbEVsZW1lbnQoJ9CS0LXRgScsICfQutCzLicsICd3ZWlnaHRUYXBlJywgJ3RhcGUnKTtcblxuY29uc3QgcHJpY2VNYXRlcmlhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaWNlTWF0ZXJpYWxzLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19wcmljZS1tYXRlcmlhbHMnKTtcbnByaWNlTWF0ZXJpYWxzLmlkID0gJ3RhcGUtcHJpY2UnO1xuXG5ibG9jay5hcHBlbmQocHJpY2VNYXRlcmlhbHMpO1xuXG5jcmVhdGVDb3N0RWxlbWVudCgnY29zdC1tYXRlcmlhbHMnLCAnY29zdFRhcGUnLCAn0KHQtdCx0LXRgdGCLi4uJywgJ3RhcGUtcHJpY2UnKTtcbmNyZWF0ZUNvc3RFbGVtZW50KCdzZWxsaW5nLXByaWNlJywgJ3NlbGxUYXBlJywgJ9Cf0YDQvtC00LDQttCwJywgJ3RhcGUtcHJpY2UnKTtcblxucGFja2FnZUluZm8oJ9CS0LXRgSDQvNC10YLRgNCwJywgJ9CzLicsICdvbmUtdGFwZScsICd1bE9uZS10YXBlJywgJ3RhcGUnKTtcbnBhY2thZ2VJbmZvKCfQktC10YEg0L/QsNGA0YLQuNC4JywgJ9C60LMuJywgJ2FsbC10YXBlJywgJ3VsQWxsLXRhcGUnLCAndGFwZScpO1xucGFja2FnZUluZm8oJ9Ca0L7Quy3QstC+INC80LXRgtGA0L7QsicsICfQvC4nLCAndG90YWwtdGFwZScsICd1bFRvdGFsLXRhcGUnLCAndGFwZScpO1xuXG5wcmljZUluZm8oJ3RhcGUnLCAndGFwZScpO1xuc2Nyb2xsTnVtYmVyKCk7XG5zZXRWYWx1ZXMoKTtcbiIsImNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3InKTtcbmNhbGN1bGF0b3Iuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7IC8vINCf0L7Qt9Cy0L7Qu9GP0LXRgiDQsdC70L7QutGDINC/0L7Qu9GD0YfQuNGC0Ywg0YTQvtC60YPRgVxuXG5zZWN0aW9uLmFwcGVuZChjYWxjdWxhdG9yKTtcblxuY29uc3QgY2FsY3VsYXRvckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbGN1bGF0b3JJbmZvLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3JfX2luZm8nKTtcbmNhbGN1bGF0b3JJbmZvLnRleHRDb250ZW50ID0gMDtcbmNhbGN1bGF0b3IuYXBwZW5kKGNhbGN1bGF0b3JJbmZvKTtcblxuZnVuY3Rpb24gc2V0VmFsdWUoaWQsIG5hbWVFbGVtZW50KSB7XG4gIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhbHVlLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3JfX2VsZW1lbnQnKTtcbiAgdmFsdWUuaWQgPSBpZDtcbiAgdmFsdWUudGV4dENvbnRlbnQgPSBuYW1lRWxlbWVudDtcblxuICBjYWxjdWxhdG9yLmFwcGVuZCh2YWx1ZSk7XG59XG5cbnNldFZhbHVlKCdjbGVhbicsICdBQycpO1xuc2V0VmFsdWUoJ2xhc3Qtc3ltYm9sJywgJ0NFJyk7XG5zZXRWYWx1ZSgncGVyY2VudCcsICclJyk7XG5zZXRWYWx1ZSgnZGl2aXNpb24nLCAnLycpO1xuc2V0VmFsdWUoJ3NldmVuJywgJzcnKTtcbnNldFZhbHVlKCdlaWdodCcsICc4Jyk7XG5zZXRWYWx1ZSgnbmluZScsICc5Jyk7XG5zZXRWYWx1ZSgnbXVsdGlwbHknLCAneCcpO1xuc2V0VmFsdWUoJ2ZvdXInLCAnNCcpO1xuc2V0VmFsdWUoJ2ZpdmUnLCAnNScpO1xuc2V0VmFsdWUoJ3NpeCcsICc2Jyk7XG5zZXRWYWx1ZSgnbWludXMnLCAnLScpO1xuc2V0VmFsdWUoJ29uZScsICcxJyk7XG5zZXRWYWx1ZSgndHdvJywgJzInKTtcbnNldFZhbHVlKCd0aHJlZScsICczJyk7XG5zZXRWYWx1ZSgncGx1cycsICcrJyk7XG5zZXRWYWx1ZSgnbnVsbCcsICcwJyk7XG5zZXRWYWx1ZSgnY29tbWEnLCAnLCcpO1xuc2V0VmFsdWUoJ2V2ZW5seScsICc9Jyk7XG5cbmxldCBjdXJyZW50SW5wdXQgPSAnMCc7XG5sZXQgb3BlcmF0b3IgPSBudWxsO1xubGV0IHByZXZpb3VzSW5wdXQgPSBudWxsO1xubGV0IGlzQ2FsY3VsYXRvckZvY3VzZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSh2YWx1ZSkge1xuICBjYWxjdWxhdG9ySW5mby50ZXh0Q29udGVudCA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhckFsbCgpIHtcbiAgY3VycmVudElucHV0ID0gJzAnO1xuICBvcGVyYXRvciA9IG51bGw7XG4gIHByZXZpb3VzSW5wdXQgPSBudWxsO1xuICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxhc3RTeW1ib2woKSB7XG4gIGlmIChjdXJyZW50SW5wdXQubGVuZ3RoID4gMSkge1xuICAgIGN1cnJlbnRJbnB1dCA9IGN1cnJlbnRJbnB1dC5zbGljZSgwLCAtMSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudElucHV0ID0gJzAnO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTnVtYmVyKG51bWJlcikge1xuICBpZiAoY3VycmVudElucHV0ID09PSAnMCcpIHtcbiAgICBjdXJyZW50SW5wdXQgPSBudW1iZXI7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudElucHV0ICs9IG51bWJlcjtcbiAgfVxuICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU9wZXJhdG9yKG9wKSB7XG4gIGlmIChwcmV2aW91c0lucHV0ID09PSBudWxsKSB7XG4gICAgcHJldmlvdXNJbnB1dCA9IGN1cnJlbnRJbnB1dDtcbiAgfSBlbHNlIGlmIChvcGVyYXRvcikge1xuICAgIHByZXZpb3VzSW5wdXQgPSBTdHJpbmcoY2FsY3VsYXRlKE51bWJlcihwcmV2aW91c0lucHV0KSwgTnVtYmVyKGN1cnJlbnRJbnB1dCksIG9wZXJhdG9yKSk7XG4gIH1cbiAgY3VycmVudElucHV0ID0gJzAnO1xuICBvcGVyYXRvciA9IG9wO1xuICB1cGRhdGVEaXNwbGF5KHByZXZpb3VzSW5wdXQpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoYSwgYiwgb3ApIHtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJysnOlxuICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIGNhc2UgJy0nOlxuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIGNhc2UgJ3gnOlxuICAgICAgcmV0dXJuIGEgKiBiO1xuICAgIGNhc2UgJy8nOlxuICAgICAgcmV0dXJuIGEgLyBiO1xuICAgIGNhc2UgJyUnOlxuICAgICAgcmV0dXJuIGEgJSBiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYjtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcXVhbCgpIHtcbiAgaWYgKG9wZXJhdG9yICYmIHByZXZpb3VzSW5wdXQgIT09IG51bGwpIHtcbiAgICBjdXJyZW50SW5wdXQgPSBTdHJpbmcoY2FsY3VsYXRlKE51bWJlcihwcmV2aW91c0lucHV0KSwgTnVtYmVyKGN1cnJlbnRJbnB1dCksIG9wZXJhdG9yKSk7XG4gICAgb3BlcmF0b3IgPSBudWxsO1xuICAgIHByZXZpb3VzSW5wdXQgPSBudWxsO1xuICAgIHVwZGF0ZURpc3BsYXkoY3VycmVudElucHV0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUVsZW1lbnQoZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYWxjdWxhdG9yX19lbGVtZW50JykpIHtcbiAgICBhY3RpdmF0ZUVsZW1lbnQodGFyZ2V0KTtcblxuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ0FDJzpcbiAgICAgICAgY2xlYXJBbGwoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDRSc6XG4gICAgICAgIGRlbGV0ZUxhc3RTeW1ib2woKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcrJzpcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgY2FzZSAneCc6XG4gICAgICBjYXNlICcvJzpcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgICBoYW5kbGVPcGVyYXRvcih2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnPSc6XG4gICAgICAgIGhhbmRsZUVxdWFsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLCc6XG4gICAgICAgIGhhbmRsZU51bWJlcignLicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgaGFuZGxlTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFdmVudCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgaWYgKCFpc0NhbGN1bGF0b3JGb2N1c2VkKSByZXR1cm47XG5cbiAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgZGVsZXRlTGFzdFN5bWJvbCgpO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0LXN5bWJvbCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIGNsZWFyQWxsKCk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFuJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcrJzpcbiAgICBjYXNlICctJzpcbiAgICBjYXNlICcqJzpcbiAgICBjYXNlICcvJzpcbiAgICBjYXNlICclJzpcbiAgICAgIGxldCBvcGVyYXRvcktleSA9IGtleTtcbiAgICAgIGlmIChrZXkgPT09ICcqJykgb3BlcmF0b3JLZXkgPSAneCc7IC8vIFJlcGxhY2UgJyonIHdpdGggJ3gnXG4gICAgICBoYW5kbGVPcGVyYXRvcihvcGVyYXRvcktleSk7XG4gICAgICBlbGVtZW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRvcl9fZWxlbWVudCcpKS5maW5kKGVsID0+IGVsLnRleHRDb250ZW50ID09PSBvcGVyYXRvcktleSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFbnRlcic6XG4gICAgY2FzZSAnPSc6XG4gICAgICBoYW5kbGVFcXVhbCgpO1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVubHknKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy4nOlxuICAgICAgaGFuZGxlTnVtYmVyKCcuJyk7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1hJyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKCFpc05hTihrZXkpKSB7XG4gICAgICAgIGhhbmRsZU51bWJlcihrZXkpO1xuICAgICAgICBlbGVtZW50ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRvcl9fZWxlbWVudCcpKS5maW5kKGVsID0+IGVsLnRleHRDb250ZW50ID09PSBrZXkpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAoZWxlbWVudCkge1xuICAgIGFjdGl2YXRlRWxlbWVudChlbGVtZW50KTtcbiAgfVxufVxuXG5jYWxjdWxhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBpc0NhbGN1bGF0b3JGb2N1c2VkID0gdHJ1ZTtcbn0pO1xuXG5jYWxjdWxhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gIGlzQ2FsY3VsYXRvckZvY3VzZWQgPSBmYWxzZTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5ZG93bik7XG5jYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyIsImltcG9ydCB7IGNhbGN1bGF0b3J9IGZyb20gXCIuL2NhbGN1bGF0b3JcIjtcbmltcG9ydCB7IGJsb2NrSW5mbywgYmxvY2tQTkQsIGJsb2NrUFZEIH0gZnJvbSBcIi4vYmxvY2staW5mb1wiO1xuZXhwb3J0IGxldCBmID0gMC45MjtcblxuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtY2hlY2tib3gnKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIGYgPSAwLjk1O1xuICAgIH0gZWxzZSB7XG4gICAgICBmID0gMC45MjtcbiAgICB9XG4gIH0pO1xuXG4vLyDQp9C10LrQsdC+0LrRgSDQv9C70LXQvdC60LBcbmV4cG9ydCBsZXQgZm9ybWF0ID0gMjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhcGVDaGVja2JveCgpIHtcbiAgY29uc3QgZm9ybWF0VGFwZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1hdFRhcGVCbG9jay5jbGFzc0xpc3QuYWRkKCdibG9ja19fdGFwZScpO1xuXG4gIGNvbnN0IGZvcm1hdFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvcm1hdFRhcGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX25hbWUnLCAnYmxvY2tfX25hbWUtZm9ybWF0Jyk7XG4gIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSAn0KDRg9C60LDQsic7XG5cbiAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2lucHV0Jyk7XG5cbiAgY29uc3QgbGFiZWxTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbFN3aXRjaC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcblxuICBjb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRDaGVja2JveC5pZCA9ICdmb3JtYXQtY2hlY2tib3gnO1xuICBpbnB1dENoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gIGNvbnN0IHNwYW5TbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5TbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG5cbiAgbGFiZWxTd2l0Y2guYXBwZW5kKGlucHV0Q2hlY2tib3gsIHNwYW5TbGlkZXIpO1xuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmQobGFiZWxTd2l0Y2gpO1xuICBmb3JtYXRUYXBlQmxvY2suYXBwZW5kKGZvcm1hdFRhcGUsIGNoZWNrYm94Q29udGFpbmVyKTtcblxuICBpbnB1dENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICBmb3JtYXRUYXBlLnRleHRDb250ZW50ID0gJ9Cf0L7Qu9C+0YLQvdC+JztcbiAgICAgIGZvcm1hdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdFRhcGUudGV4dENvbnRlbnQgPSAn0KDRg9C60LDQsic7XG4gICAgICBmb3JtYXQgPSAyO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZvcm1hdFRhcGVCbG9jaztcbn1cblxuY29uc3QgY2hlY2tib3hDYWxjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWJsb2NrX19jYWxjJyk7XG5jb25zdCBjaGVja2JveEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtYmxvY2tfX2luZm8nKTtcbi8vIGNvbnN0IGNhbGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcicpO1xuLy8gY29uc3QgYmxvY2tJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLWluZm8nKTtcblxuY2hlY2tib3hDYWxjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjYWxjdWxhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgY2FsY3VsYXRvci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG5jaGVja2JveEluZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJsb2NrSW5mby5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gIGJsb2NrSW5mby5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgYmxvY2tQTkQuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICBibG9ja1BORC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgYmxvY2tQVkQuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICBibG9ja1BWRC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG4vKlxuY2hlY2tib3hDYWxjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjYWxjdWxhdG9yLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgY2FsY3VsYXRvci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn0pO1xuXG5jaGVja2JveENhbGMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChjYWxjdWxhdG9yLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicsICdhbmltYXRlZF9fcmV2ZXJzZScpO1xuICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKTtcbn0gZWxzZSB7XG4gICAgY2FsY3VsYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZCcpO1xuICAgIGNhbGN1bGF0b3IuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWRfX3JldmVyc2UnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsY3VsYXRvci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgY2FsY3VsYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZF9fcmV2ZXJzZScpO1xuICAgIH0sIDEwMDApOyAvLyDQstGA0LXQvNGPINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQsNC90LjQvNCw0YbQuNC4XG59XG59KTsqLyIsImNvbnN0IGRyYWdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3InKTtcbmxldCBhY3RpdmUgPSBmYWxzZTtcbmxldCBjdXJyZW50WCwgY3VycmVudFksIGluaXRpYWxYLCBpbml0aWFsWTtcbmxldCB4T2Zmc2V0ID0gMCxcbiAgeU9mZnNldCA9IDA7XG5cbmRyYWdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRyYWdTdGFydCk7XG5kcmFnSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJhZ0VuZCk7XG5kcmFnSXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnKTtcblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgaW5pdGlhbFggPSBlLmNsaWVudFggLSB4T2Zmc2V0O1xuICBpbml0aWFsWSA9IGUuY2xpZW50WSAtIHlPZmZzZXQ7XG5cbiAgaWYgKGUudGFyZ2V0ID09PSBkcmFnSXRlbSkge1xuICAgIGFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gZHJhZ0VuZCgpIHtcbi8vICAgaW5pdGlhbFggPSBjdXJyZW50WDtcbi8vICAgaW5pdGlhbFkgPSBjdXJyZW50WTtcblxuLy8gICBhY3RpdmUgPSBmYWxzZTtcbi8vIH1cblxuZnVuY3Rpb24gZHJhZyhlKSB7XG4gIGlmIChhY3RpdmUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjdXJyZW50WCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xuICAgIGN1cnJlbnRZID0gZS5jbGllbnRZIC0gaW5pdGlhbFk7XG5cbiAgICB4T2Zmc2V0ID0gY3VycmVudFg7XG4gICAgeU9mZnNldCA9IGN1cnJlbnRZO1xuXG4gICAgc2V0VHJhbnNsYXRlKGN1cnJlbnRYLCBjdXJyZW50WSwgZHJhZ0l0ZW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zbGF0ZSh4UG9zLCB5UG9zLCBlbCkge1xuICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eFBvc31weCwgJHt5UG9zfXB4KWA7XG59XG5cbi8vINCf0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0Ysg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L/QvtC30LjRhtC40Y4g0LjQtyBsb2NhbFN0b3JhZ2VcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNhdmVkUG9zaXRpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3NpdGlvbicpKTtcbiAgaWYgKHNhdmVkUG9zaXRpb24pIHtcbiAgICBkcmFnSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7c2F2ZWRQb3NpdGlvbi54fXB4LCAke3NhdmVkUG9zaXRpb24ueX1weClgO1xuICAgIHhPZmZzZXQgPSBzYXZlZFBvc2l0aW9uLng7XG4gICAgeU9mZnNldCA9IHNhdmVkUG9zaXRpb24ueTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZHJhZ0VuZCgpIHtcbiAgaW5pdGlhbFggPSBjdXJyZW50WDtcbiAgaW5pdGlhbFkgPSBjdXJyZW50WTtcblxuICBhY3RpdmUgPSBmYWxzZTtcblxuICAvLyDQodC+0YXRgNCw0L3Rj9C10Lwg0YLQtdC60YPRidC40LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LIgbG9jYWxTdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbicsIEpTT04uc3RyaW5naWZ5KHsgeDogeE9mZnNldCwgeTogeU9mZnNldCB9KSk7XG59IiwiaW1wb3J0IHsgZiwgZm9ybWF0IH0gZnJvbSAnLi9jaGVja2JveC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdFVsRWxlbWVudChuYW1lLCBkc2MsIGlkLCBmb3JtYXQpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB1bC5jbGFzc0xpc3QuYWRkKCdibG9ja19faXRlbScpO1xuXG4gIGNvbnN0IGxpRHNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlEc2MuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX25hbWUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2RzYycpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IGRzYztcblxuICBsaURzYy5hcHBlbmQodGl0bGUsIHN1YnRpdGxlKTtcblxuICBjb25zdCBsaVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgaW5wdXQubWluID0gMTtcbiAgaW5wdXQuaWQgPSBpZDtcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdibG9ja19faW5wdXQnKTtcblxuICBsaVZhbHVlLmFwcGVuZChpbnB1dCk7XG4gIHVsLmFwcGVuZChsaURzYywgbGlWYWx1ZSk7XG5cbiAgZm9ybWF0ID09PSAncGFja2FnZSdcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpXG4gICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKHVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvc3RFbGVtZW50KG5hbWUsIGlkLCBwbGFjZWhvbGRlciwgZm9ybWF0KSB7XG4gIGNvbnN0IGlucHV0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0Q29zdC50eXBlID0gJ251bWJlcic7XG4gIGlucHV0Q29zdC5taW4gPSAxO1xuICBpbnB1dENvc3QuaWQgPSBpZDtcbiAgaW5wdXRDb3N0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXRDb3N0LmNsYXNzTGlzdC5hZGQoYGJsb2NrX18ke25hbWV9YCk7XG4gIGlucHV0Q29zdC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXG4gIGZvcm1hdCA9PT0gJ3BhY2thZ2UtcHJpY2UnXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGlucHV0Q29zdClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQoaW5wdXRDb3N0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhY2thZ2VJbmZvKG5hbWUsIGRzYywgaWQsIHVsSWQsIGZvcm1hdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19pdGVtJywgJ2Jsb2NrX19pdGVtLWZvb3RlcicsICdoaWRkZW4nKTtcbiAgdWwuaWQgPSB1bElkO1xuXG4gIGNvbnN0IGxpRHNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlEc2MuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX25hbWUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2RzYycpO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IGRzYztcblxuICBsaURzYy5hcHBlbmQodGl0bGUsIHN1YnRpdGxlKTtcblxuICBjb25zdCBpbmZvUGFja2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaW5mb1BhY2thZ2UuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2luZm8nKTtcbiAgaW5mb1BhY2thZ2UuaWQgPSBpZDtcblxuICB1bC5hcHBlbmQobGlEc2MsIGluZm9QYWNrYWdlKTtcblxuICBmb3JtYXQgPT09ICdwYWNrYWdlJ1xuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9ybWF0fWApLmFwcGVuZCh1bClcbiAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Zvcm1hdH1gKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpY2VJbmZvKGZvcm1hdCwgdHlwZSkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXInKTtcblxuICBjb25zdCBjb3N0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29zdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3Rlcl9jb3N0JywgJ2hpZGRlbicpO1xuICBjb3N0RWxlbWVudC5pZCA9IGBmb290ZXItY29zdC0ke3R5cGV9YDtcblxuICBjb25zdCBzZWxsaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2VsbGluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2tfX2Zvb3Rlcl9zZWxsaW5nJywgJ2hpZGRlbicpO1xuICBzZWxsaW5nRWxlbWVudC5pZCA9IGBmb290ZXItc2VsbGluZy0ke3R5cGV9YDtcblxuICBmb290ZXIuYXBwZW5kKGNvc3RFbGVtZW50LCBzZWxsaW5nRWxlbWVudCk7XG5cbiAgY29uc3QgcHJvZml0RWxlbWVudFRhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2ZpdEVsZW1lbnRUYXBlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrX19mb290ZXJfcHJvZml0JywgJ2hpZGRlbicpO1xuICBwcm9maXRFbGVtZW50VGFwZS5pZCA9IGBmb290ZXItcHJvZml0LSR7dHlwZX0tbWA7XG5cbiAgY29uc3QgcHJvZml0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvZml0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9ja19fZm9vdGVyX3Byb2ZpdCcsICdoaWRkZW4nKTtcbiAgcHJvZml0RWxlbWVudC5pZCA9IGBmb290ZXItcHJvZml0LSR7dHlwZX1gO1xuXG4gIGZvcm1hdCA9PT0gJ3BhY2thZ2UnXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YCkuYXBwZW5kKGZvb3RlciwgcHJvZml0RWxlbWVudClcbiAgICA6IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHtmb3JtYXR9YClcbiAgICAgICAgLmFwcGVuZChmb290ZXIsIHByb2ZpdEVsZW1lbnRUYXBlLCBwcm9maXRFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFja2FnZUluZm8oXG4gIHZhbHVlLFxuICB0ZXh0U2VsZWN0b3IsXG4gIHVsU2VsZWN0b3IsXG4gIG11bHRpcGxpZXIgPSAxLFxuICBkZWNpbWFsUGxhY2VzID0gMixcbikge1xuICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGV4dFNlbGVjdG9yKTtcbiAgY29uc3QgdWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1bFNlbGVjdG9yKTtcblxuICBpZiAodmFsdWUgPiAwKSB7XG4gICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSAodmFsdWUgKiBtdWx0aXBsaWVyKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xuICAgIHVsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSBlbHNlIHtcbiAgICB1bEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsSW5mb1BhY2thZ2UoKSB7XG4gIGxldCBvbmVQYWNrYWdlID1cbiAgICAodmFsdWVzLndpZHRoICogZiAqIDIgKiB2YWx1ZXMuaGVpZ2h0ICogKHZhbHVlcy50aGlja25lc3MgLyAxMDAwMCkpIC8gMTAwMDtcbiAgbGV0IGFsbFBhY2thZ2UgPSBvbmVQYWNrYWdlICogdmFsdWVzLmNpcmN1bGF0aW9uO1xuICBsZXQgdG90YWxQYWNrYWdlID0gdmFsdWVzLndlaWdodCAvIG9uZVBhY2thZ2U7XG4gIGxldCBwcmltZVByaWNlID0gdmFsdWVzLmNvc3QgKiBvbmVQYWNrYWdlO1xuICBsZXQgYnV5UHJpY2UgPSB2YWx1ZXMuc2VsbCAqIG9uZVBhY2thZ2U7XG4gIGxldCBwcm9maXQgPSAoYnV5UHJpY2UgLSBwcmltZVByaWNlKSAqIHZhbHVlcy5jaXJjdWxhdGlvbjtcbiAgdXBkYXRlUGFja2FnZUluZm8ob25lUGFja2FnZSwgJyNvbmUnLCAnI3VsT25lJywgMTAwMCk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKGFsbFBhY2thZ2UsICcjYWxsJywgJyN1bEFsbCcpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyh0b3RhbFBhY2thZ2UsICcjdG90YWwnLCAnI3VsVG90YWwnLCAxLCAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJpbWVQcmljZSwgJyNmb290ZXItY29zdC1wYWNrYWdlJywgJyNmb290ZXItY29zdC1wYWNrYWdlJyk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKFxuICAgIGJ1eVByaWNlLFxuICAgICcjZm9vdGVyLXNlbGxpbmctcGFja2FnZScsXG4gICAgJyNmb290ZXItc2VsbGluZy1wYWNrYWdlJyxcbiAgKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJvZml0LCAnI2Zvb3Rlci1wcm9maXQtcGFja2FnZScsICcjZm9vdGVyLXByb2ZpdC1wYWNrYWdlJyk7XG59XG5cbmZ1bmN0aW9uIGFsbEluZm9UYXBlKCkge1xuICBsZXQgb25lVGFwZSA9XG4gICAgKHZhbHVlcy53aWR0aFRhcGUgKiBmICogZm9ybWF0ICogMTAwICogKHZhbHVlcy50aGlja25lc3NUYXBlIC8gMTAwMDApKSAvXG4gICAgMTAwMDtcbiAgbGV0IGFsbFRhcGUgPSBvbmVUYXBlICogdmFsdWVzLmNpcmN1bGF0aW9uVGFwZTtcbiAgbGV0IHRvdGFsVGFwZSA9IHZhbHVlcy53ZWlnaHRUYXBlIC8gb25lVGFwZTtcbiAgbGV0IHByaW1lUHJpY2VUYXBlID0gdmFsdWVzLmNvc3RUYXBlICogb25lVGFwZTtcbiAgbGV0IGJ1eVByaWNlVGFwZSA9IHZhbHVlcy5zZWxsVGFwZSAqIG9uZVRhcGU7XG4gIGxldCBwcm9maXRUYXBlID0gKGJ1eVByaWNlVGFwZSAtIHByaW1lUHJpY2VUYXBlKSAqIHZhbHVlcy5jaXJjdWxhdGlvblRhcGU7IC8vfHxcbiAgLy9OdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RhbC10YXBlXCIpLnRleHRDb250ZW50KTtcbiAgbGV0IHByb2ZpdFRhcGVLZyA9ICh2YWx1ZXMuc2VsbFRhcGUgLSB2YWx1ZXMuY29zdFRhcGUpICogdmFsdWVzLndlaWdodFRhcGU7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKG9uZVRhcGUsICcjb25lLXRhcGUnLCAnI3VsT25lLXRhcGUnLCAxMDAwKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oYWxsVGFwZSwgJyNhbGwtdGFwZScsICcjdWxBbGwtdGFwZScpO1xuICB1cGRhdGVQYWNrYWdlSW5mbyh0b3RhbFRhcGUsICcjdG90YWwtdGFwZScsICcjdWxUb3RhbC10YXBlJywgMSwgMCk7XG4gIHVwZGF0ZVBhY2thZ2VJbmZvKHByaW1lUHJpY2VUYXBlLCAnI2Zvb3Rlci1jb3N0LXRhcGUnLCAnI2Zvb3Rlci1jb3N0LXRhcGUnKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oXG4gICAgYnV5UHJpY2VUYXBlLFxuICAgICcjZm9vdGVyLXNlbGxpbmctdGFwZScsXG4gICAgJyNmb290ZXItc2VsbGluZy10YXBlJyxcbiAgKTtcbiAgdXBkYXRlUGFja2FnZUluZm8oXG4gICAgcHJvZml0VGFwZSxcbiAgICAnI2Zvb3Rlci1wcm9maXQtdGFwZS1tJyxcbiAgICAnI2Zvb3Rlci1wcm9maXQtdGFwZS1tJyxcbiAgKTtcbiAgdXBkYXRlUGFja2FnZUluZm8ocHJvZml0VGFwZUtnLCAnI2Zvb3Rlci1wcm9maXQtdGFwZScsICcjZm9vdGVyLXByb2ZpdC10YXBlJyk7XG59XG5cbmxldCB2YWx1ZXMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRWYWx1ZXMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YWx1ZXNbaW5wdXQuaWRdID0gTnVtYmVyKGlucHV0LnZhbHVlKSB8fCAwO1xuICAgICAgYWxsSW5mb1BhY2thZ2UoKTtcbiAgICAgIGFsbEluZm9UYXBlKCk7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNlbGVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cbmNvbnNvbGUubG9nKHZhbHVlcyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxOdW1iZXIoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHRoaXMgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8g0J/RgNC10LTQvtGC0LLRgNCw0YnQsNC10Lwg0L/RgNC+0LrRgNGD0YLQutGDINGB0YLRgNCw0L3QuNGG0YtcblxuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKCdzdGVwJykpIHx8IDE7IC8vINCf0L7Qu9GD0YfQsNC10Lwg0YjQsNCzINC40LfQvNC10L3QtdC90LjRjyAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gMSlcbiAgICAgICAgY29uc3QgbWluID0gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKCdtaW4nKSkgfHwgMDsgLy8g0J/QvtC70YPRh9Cw0LXQvCDQvNC40L3QuNC80LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDApXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YLQutCwINCy0LLQtdGA0YUsINGD0LLQtdC70LjRh9C40LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtVxuICAgICAgICAgIHRoaXMudmFsdWUgPSBOdW1iZXIodGhpcy52YWx1ZSkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vINCf0YDQvtC60YDRg9GC0LrQsCDQstC90LjQtywg0YPQvNC10L3RjNGI0LDQtdC8INC30L3QsNGH0LXQvdC40LUgKNC10YHQu9C4INCx0L7Qu9GM0YjQtSDQuNC70Lgg0YDQsNCy0L3QviDQvNC40L3QuNC80LDQu9GM0L3QvtC80YMg0LfQvdCw0YfQtdC90LjRjilcbiAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0aC5tYXgobWluLCBOdW1iZXIodGhpcy52YWx1ZSkgLSBzdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlc1tpbnB1dC5pZF0gPSBOdW1iZXIoaW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICAgIGFsbEluZm9QYWNrYWdlKCk7XG4gICAgICAgIGFsbEluZm9UYXBlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwibGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkJyk7XG5sZXQgc3F1YXJlcyA9IDM4ODY7XG5sZXQgY29sb3JzID0gWyd5ZWxsb3cnLCAnZGFya2JsdWUnLCAncHVycGxlJywgJ2xpbWUnLCAnd2hpdGUnLCAnZ3JheScsICdnb2xkJywgJ3BpbmsnLCAnU2FsbW9uJywgJ0RlZXBTa3lCbHVlJywgJ1RlYWwnXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlczsgaSsrKSB7XG4gIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2V0Q29sb3IpO1xuICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlbW92ZUNvbG9yKTtcbiAgYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG59XG5mdW5jdGlvbiBzZXRDb2xvcihldnQpIHtcbiAgbGV0IGVsZW0gPSBldnQudGFyZ2V0O1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhbmRvbUNvbG9yKCk7XG4gIGVsZW0uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggJy5jb25jYXQocmFuZG9tQ29sb3IoKSwgJywgMCAwIDEwcHggJykuY29uY2F0KHJhbmRvbUNvbG9yKCkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ29sb3IoZXZ0KSB7XG4gIGxldCBlbGVtID0gZXZ0LnRhcmdldDtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzFkMWQxZDFkJztcbiAgZWxlbS5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAjMDAwJztcbn1cbmxldCByYW5kb21Db2xvciA9IGZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zYXNzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vanMvYmxvY2stcGFja2FnZVwiO1xuaW1wb3J0IFwiLi9qcy9zcXVhcmVcIjtcbmltcG9ydCBcIi4vanMvYmxvY2stdGFwZVwiO1xuaW1wb3J0IFwiLi9qcy9jYWxjdWxhdG9yXCI7XG5pbXBvcnQgXCIuL2pzL2RyYWdcIjtcbmltcG9ydCBcIi4vanMvYmxvY2staW5mb1wiO1xuIl0sIm5hbWVzIjpbImFsbEJsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmxvY2tJbmZvIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFwcGVuZCIsImluZm9UaXRsZSIsInRleHRDb250ZW50IiwiaW5mb0RzYyIsInJhZGlvSW5wdXRTaGlydCIsInR5cGUiLCJuYW1lIiwiaWQiLCJsYWJlbFNoaXJ0Iiwic2V0QXR0cmlidXRlIiwicmFkaW9JbnB1dFRhcGUiLCJsYWJlbFRhcGUiLCJpbmZvSW5wdXQiLCJpbmZvSW5wdXROdW0iLCJtaW4iLCJtYXgiLCJzdGVwIiwidmFsdWUiLCJyYW5nZUlucHV0IiwidHJhZmZpY1ByaWNlIiwidHJhZmZpY1ByaWNlR3JlZW4iLCJwcmljZVNoaXJ0IiwicHJpY2VUYXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVByaWNlcyIsIk51bWJlciIsInVwZGF0ZVJhbmdlQXR0cmlidXRlcyIsInNlbGVjdGVkUmFkaW8iLCJzZWxlY3RlZFZhbHVlIiwic2V0UHJpY2VWYWx1ZSIsImdyZWVuIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImJsb2NrUFZEIiwicHZkRHNyIiwiZHNyRm9vdGVyIiwiaW5uZXJIVE1MIiwiYmxvY2tQTkQiLCJwbmREc3IiLCJkc3JGb290ZXJQTkQiLCJjcmVhdFVsRWxlbWVudCIsImNyZWF0ZUNvc3RFbGVtZW50IiwicGFja2FnZUluZm8iLCJzY3JvbGxOdW1iZXIiLCJzZXRWYWx1ZXMiLCJwcmljZUluZm8iLCJzZWN0aW9uIiwiYmxvY2siLCJhZGQiLCJwcmVwZW5kIiwiYmxvY2tUaXRsZSIsInByaWNlTWF0ZXJpYWxzIiwidGFwZUNoZWNrYm94IiwiY2FsY3VsYXRvciIsImNhbGN1bGF0b3JJbmZvIiwic2V0VmFsdWUiLCJuYW1lRWxlbWVudCIsImN1cnJlbnRJbnB1dCIsIm9wZXJhdG9yIiwicHJldmlvdXNJbnB1dCIsImlzQ2FsY3VsYXRvckZvY3VzZWQiLCJ1cGRhdGVEaXNwbGF5IiwiY2xlYXJBbGwiLCJkZWxldGVMYXN0U3ltYm9sIiwibGVuZ3RoIiwic2xpY2UiLCJoYW5kbGVOdW1iZXIiLCJudW1iZXIiLCJoYW5kbGVPcGVyYXRvciIsIm9wIiwiU3RyaW5nIiwiY2FsY3VsYXRlIiwiYSIsImIiLCJoYW5kbGVFcXVhbCIsImFjdGl2YXRlRWxlbWVudCIsImVsZW1lbnQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiaGFuZGxlRXZlbnQiLCJjb250YWlucyIsImlzTmFOIiwiaGFuZGxlS2V5ZG93biIsImtleSIsImdldEVsZW1lbnRCeUlkIiwib3BlcmF0b3JLZXkiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmluZCIsImVsIiwiZiIsImNoZWNrZWQiLCJmb3JtYXQiLCJmb3JtYXRUYXBlQmxvY2siLCJmb3JtYXRUYXBlIiwiY2hlY2tib3hDb250YWluZXIiLCJsYWJlbFN3aXRjaCIsImlucHV0Q2hlY2tib3giLCJzcGFuU2xpZGVyIiwiY2hlY2tib3hDYWxjIiwiY2hlY2tib3hJbmZvIiwidG9nZ2xlIiwiZHJhZ0l0ZW0iLCJhY3RpdmUiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsInhPZmZzZXQiLCJ5T2Zmc2V0IiwiZHJhZ1N0YXJ0IiwiZHJhZ0VuZCIsImRyYWciLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRyYW5zbGF0ZSIsInhQb3MiLCJ5UG9zIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjb25jYXQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzYXZlZFBvc2l0aW9uIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIngiLCJ5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRzYyIsInVsIiwibGlEc2MiLCJ0aXRsZSIsInN1YnRpdGxlIiwibGlWYWx1ZSIsImlucHV0IiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImlucHV0Q29zdCIsInVsSWQiLCJpbmZvUGFja2FnZSIsImZvb3RlciIsImNvc3RFbGVtZW50Iiwic2VsbGluZ0VsZW1lbnQiLCJwcm9maXRFbGVtZW50VGFwZSIsInByb2ZpdEVsZW1lbnQiLCJ1cGRhdGVQYWNrYWdlSW5mbyIsInRleHRTZWxlY3RvciIsInVsU2VsZWN0b3IiLCJtdWx0aXBsaWVyIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZGVjaW1hbFBsYWNlcyIsInRleHRFbGVtZW50IiwidWxFbGVtZW50IiwidG9GaXhlZCIsImFsbEluZm9QYWNrYWdlIiwib25lUGFja2FnZSIsInZhbHVlcyIsIndpZHRoIiwiaGVpZ2h0IiwidGhpY2tuZXNzIiwiYWxsUGFja2FnZSIsImNpcmN1bGF0aW9uIiwidG90YWxQYWNrYWdlIiwid2VpZ2h0IiwicHJpbWVQcmljZSIsImNvc3QiLCJidXlQcmljZSIsInNlbGwiLCJwcm9maXQiLCJhbGxJbmZvVGFwZSIsIm9uZVRhcGUiLCJ3aWR0aFRhcGUiLCJ0aGlja25lc3NUYXBlIiwiYWxsVGFwZSIsImNpcmN1bGF0aW9uVGFwZSIsInRvdGFsVGFwZSIsIndlaWdodFRhcGUiLCJwcmltZVByaWNlVGFwZSIsImNvc3RUYXBlIiwiYnV5UHJpY2VUYXBlIiwic2VsbFRhcGUiLCJwcm9maXRUYXBlIiwicHJvZml0VGFwZUtnIiwiZm9yRWFjaCIsInNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiZGVsdGFZIiwiTWF0aCIsImJvYXJkIiwic3F1YXJlcyIsImNvbG9ycyIsImkiLCJzcXVhcmUiLCJzZXRDb2xvciIsInJlbW92ZUNvbG9yIiwiZXZ0IiwiZWxlbSIsImJhY2tncm91bmRDb2xvciIsInJhbmRvbUNvbG9yIiwiYm94U2hhZG93IiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9