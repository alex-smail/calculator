import { f, format } from './checkbox.js';

export function creatUlElement(name, dsc, id, format) {
  const ul = document.createElement('ul');
  ul.classList.add('block__item');

  const liDsc = document.createElement('li');
  liDsc.classList.add('block__container');

  const title = document.createElement('li');
  title.classList.add('block__name');
  title.textContent = name;

  const subtitle = document.createElement('li');
  subtitle.classList.add('block__dsc');
  subtitle.textContent = dsc;

  liDsc.append(title, subtitle);

  const liValue = document.createElement('li');

  const input = document.createElement('input');
  input.type = 'number';
  input.min = 1;
  input.id = id;
  input.required = true;
  input.classList.add('block__input');

  liValue.append(input);
  ul.append(liDsc, liValue);

  format === 'package'
    ? document.querySelector(`#${format}`).append(ul)
    : document.querySelector(`#${format}`).append(ul);
}

export function createCostElement(name, id, placeholder, format) {
  const inputCost = document.createElement('input');
  inputCost.type = 'number';
  inputCost.min = 1;
  inputCost.id = id;
  inputCost.required = true;
  inputCost.classList.add(`block__${name}`);
  inputCost.placeholder = placeholder;

  format === 'package-price'
    ? document.querySelector(`#${format}`).append(inputCost)
    : document.querySelector(`#${format}`).append(inputCost);
}

export function packageInfo(name, dsc, id, ulId, format) {
  const ul = document.createElement('ul');
  ul.classList.add('block__item', 'block__item-footer', 'hidden');
  ul.id = ulId;

  const liDsc = document.createElement('li');
  liDsc.classList.add('block__container');

  const title = document.createElement('li');
  title.classList.add('block__name');
  title.textContent = name;

  const subtitle = document.createElement('li');
  subtitle.classList.add('block__dsc');
  subtitle.textContent = dsc;

  liDsc.append(title, subtitle);

  const infoPackage = document.createElement('p');
  infoPackage.classList.add('block__info');
  infoPackage.id = id;

  ul.append(liDsc, infoPackage);

  format === 'package'
    ? document.querySelector(`#${format}`).append(ul)
    : document.querySelector(`#${format}`).append(ul);
}

export function priceInfo(format, type) {
  const footer = document.createElement('div');
  footer.classList.add('block__footer');

  const costElement = document.createElement('p');
  costElement.classList.add('block__footer_cost', 'hidden');
  costElement.id = `footer-cost-${type}`;

  const sellingElement = document.createElement('p');
  sellingElement.classList.add('block__footer_selling', 'hidden');
  sellingElement.id = `footer-selling-${type}`;

  footer.append(costElement, sellingElement);

  const profitElementTape = document.createElement('p');
  profitElementTape.classList.add('block__footer_profit', 'hidden');
  profitElementTape.id = `footer-profit-${type}-m`;

  const profitElement = document.createElement('p');
  profitElement.classList.add('block__footer_profit', 'hidden');
  profitElement.id = `footer-profit-${type}`;

  format === 'package'
    ? document.querySelector(`#${format}`).append(footer, profitElement)
    : document
        .querySelector(`#${format}`)
        .append(footer, profitElementTape, profitElement);
}

function updatePackageInfo(
  value,
  textSelector,
  ulSelector,
  multiplier = 1,
  decimalPlaces = 2,
) {
  const textElement = document.querySelector(textSelector);
  const ulElement = document.querySelector(ulSelector);

  if (value > 0) {
    textElement.textContent = (value * multiplier).toFixed(decimalPlaces);
    ulElement.classList.remove('hidden');
  } else {
    ulElement.classList.add('hidden');
  }
}

function allInfoPackage() {
  let onePackage =
    (values.width * f * 2 * values.height * (values.thickness / 10000)) / 1000;
  let allPackage = onePackage * values.circulation;
  let totalPackage = values.weight / onePackage;
  let primePrice = values.cost * onePackage;
  let buyPrice = values.sell * onePackage;
  let profit = (buyPrice - primePrice) * values.circulation;
  updatePackageInfo(onePackage, '#one', '#ulOne', 1000);
  updatePackageInfo(allPackage, '#all', '#ulAll');
  updatePackageInfo(totalPackage, '#total', '#ulTotal', 1, 0);
  updatePackageInfo(primePrice, '#footer-cost-package', '#footer-cost-package');
  updatePackageInfo(
    buyPrice,
    '#footer-selling-package',
    '#footer-selling-package',
  );
  updatePackageInfo(profit, '#footer-profit-package', '#footer-profit-package');
}

function allInfoTape() {
  let oneTape =
    (values.widthTape * f * format * 100 * (values.thicknessTape / 10000)) /
    1000;
  let allTape = oneTape * values.circulationTape;
  let totalTape = values.weightTape / oneTape;
  let primePriceTape = values.costTape * oneTape;
  let buyPriceTape = values.sellTape * oneTape;
  let profitTape = (buyPriceTape - primePriceTape) * values.circulationTape; //||
  //Number(document.querySelector("#total-tape").textContent);
  let profitTapeKg = (values.sellTape - values.costTape) * values.weightTape;
  updatePackageInfo(oneTape, '#one-tape', '#ulOne-tape', 1000);
  updatePackageInfo(allTape, '#all-tape', '#ulAll-tape');
  updatePackageInfo(totalTape, '#total-tape', '#ulTotal-tape', 1, 0);
  updatePackageInfo(primePriceTape, '#footer-cost-tape', '#footer-cost-tape');
  updatePackageInfo(
    buyPriceTape,
    '#footer-selling-tape',
    '#footer-selling-tape',
  );
  updatePackageInfo(
    profitTape,
    '#footer-profit-tape-m',
    '#footer-profit-tape-m',
  );
  updatePackageInfo(profitTapeKg, '#footer-profit-tape', '#footer-profit-tape');
}

let values = {};
export function setValues() {
  document.querySelectorAll('input').forEach((input) => {
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

export function scrollNumber() {
  document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('wheel', function (event) {
      if (this === document.activeElement) {
        event.preventDefault(); // Предотвращаем прокрутку страницы

        const step = Number(this.getAttribute('step')) || 1; // Получаем шаг изменения (по умолчанию 1)
        const min = Number(this.getAttribute('min')) || 0; // Получаем минимальное значение (по умолчанию 0)
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
