import {
  creatUlElement,
  createCostElement,
  packageInfo,
  scrollNumber,
  setValues,
  priceInfo,
} from "./function.js";
// Блок Фасовка 
const section = document.querySelector("section");

export const block = document.createElement("div");
block.classList.add("block", 'package');
block.id = 'package';

section.prepend(block);

const blockTitle = document.createElement("h2");
blockTitle.classList.add("block__title");
blockTitle.textContent = "Фасовка";

block.append(blockTitle);

creatUlElement("Ширина", "см.", "width", 'package');
creatUlElement("Высота", "см.", "height", 'package');
creatUlElement("Толщина", "мкм.", "thickness", 'package');
creatUlElement("Количество", "шт.", "circulation", 'package');
creatUlElement("Вес", "кг.", "weight", 'package');

export const priceMaterials = document.createElement("div");
priceMaterials.classList.add("block__price-materials");
priceMaterials.id = 'package-price';

block.append(priceMaterials);

createCostElement("cost-materials", 'cost', "Себест...", 'package-price');
createCostElement("selling-price", 'sell', "Продажа", 'package-price');

packageInfo("Вес пакета", "г.", 'one', 'ulOne', 'package');
packageInfo("Вес партии", "кг.", 'all', 'ulAll', 'package');
packageInfo("Кол-во пакетов", "шт.", 'total', 'ulTotal', 'package');

priceInfo('package', 'package');
scrollNumber();
setValues();

// Блок Пленка
