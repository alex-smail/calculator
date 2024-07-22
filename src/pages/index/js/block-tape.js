import {
  creatUlElement,
  createCostElement,
  packageInfo,
  scrollNumber,
  setValues,
  priceInfo,
} from './function.js';
import { tapeCheckbox } from './checkbox.js';
// Блок Пленка
const section = document.querySelector('section');

export const block = document.createElement('div');
block.classList.add('block', 'tape'); //, 'tape'
block.id = 'tape';

section.append(block);

const blockTitle = document.createElement('h2');
blockTitle.classList.add('block__title');
blockTitle.textContent = 'Пленка';

block.append(blockTitle, tapeCheckbox());

creatUlElement('Ширина', 'см.', 'widthTape', 'tape');
creatUlElement('Толщина', 'мкм.', 'thicknessTape', 'tape');
creatUlElement('Количество', 'м.', 'circulationTape', 'tape');
creatUlElement('Вес', 'кг.', 'weightTape', 'tape');

const priceMaterials = document.createElement('div');
priceMaterials.classList.add('block__price-materials');
priceMaterials.id = 'tape-price';

block.append(priceMaterials);

createCostElement('cost-materials', 'costTape', 'Себест...', 'tape-price');
createCostElement('selling-price', 'sellTape', 'Продажа', 'tape-price');

packageInfo('Вес метра', 'г.', 'one-tape', 'ulOne-tape', 'tape');
packageInfo('Вес партии', 'кг.', 'all-tape', 'ulAll-tape', 'tape');
packageInfo('Кол-во метров', 'м.', 'total-tape', 'ulTotal-tape', 'tape');

priceInfo('tape', 'tape');
scrollNumber();
setValues();
