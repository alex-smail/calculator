const allBlock = document.querySelector('.section');

export const blockInfo = document.createElement('div');
blockInfo.classList = 'block block-info hidden';
allBlock.append(blockInfo);

const infoTitle = document.createElement('h2');
infoTitle.classList = 'block-info__title';
infoTitle.textContent = 'Диапозон продажной цены';

const infoDsc = document.createElement('p');
infoDsc.classList = 'block-info__dsc';

const radioInputShirt = document.createElement('input');
radioInputShirt.type = 'radio';
radioInputShirt.name = 'format';
radioInputShirt.id = 'shirt';

const labelShirt = document.createElement('label');
labelShirt.setAttribute('for', 'shirt');
labelShirt.textContent = 'Майка';

const radioInputTape = document.createElement('input');
radioInputTape.type = 'radio';
radioInputTape.name = 'format';
radioInputTape.id = 'tapeInput';

const labelTape = document.createElement('label');
labelTape.setAttribute('for', 'tapeInput');
labelTape.textContent = 'Пленка';

infoDsc.append(radioInputShirt, labelShirt, radioInputTape, labelTape);

const infoInput = document.createElement('div');
infoInput.classList = 'block-info__input';

const infoInputNum = document.createElement('input');
infoInputNum.classList = 'block-info__input_num';
infoInputNum.type = 'number';
infoInputNum.id = 'rangeValue';
infoInputNum.min = '0';
infoInputNum.max = '100000';
infoInputNum.step = '5000';
infoInputNum.value = '0';

const rangeInput = document.createElement('input');
rangeInput.type = 'range';
rangeInput.id = 'rangeInput';
rangeInput.min = '0';
rangeInput.max = '100000';
rangeInput.step = '5000';

infoInput.append(infoInputNum, rangeInput);

const trafficPrice = document.createElement('div');
trafficPrice.classList = 'block-info__traffic-price';

const trafficPriceGreen = document.createElement('div');
trafficPriceGreen.classList = 'block-info__traffic-price_green';

trafficPrice.append(trafficPriceGreen);
blockInfo.append(infoTitle, infoDsc, infoInput, trafficPrice);

// цены
let priceShirt = 290;
let priceTape = 195;

// Обновление значений
rangeInput.addEventListener('input', () => {
  infoInputNum.value = rangeInput.value;
  updatePrices();
});

infoInputNum.addEventListener('input', () => {
  const min = Number(infoInputNum.min);
  const max = Number(infoInputNum.max);
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
  const selectedRadio = document.querySelector('input[name="format"]:checked');
  if (!selectedRadio) return;
  const selectedValue = selectedRadio.id;

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
  const selectedValue = event.target.id;
  if (selectedValue === 'shirt') {
    updateRangeAttributes(0, 100000, 5000);
  } else if (selectedValue === 'tapeInput') {
    updateRangeAttributes(0, 5000, 100);
  }
}

radioInputShirt.addEventListener('change', handleRadioChange);
radioInputTape.addEventListener('change', handleRadioChange);

document.addEventListener('DOMContentLoaded', () => {
  updatePrices();
});

// блок с информацией по майке и фасовке

let pricePackage = 260;
export const blockPVD = document.createElement('div');
blockPVD.classList = 'block block__PVD hidden';

const pvdDsr = document.createElement('h2');
pvdDsr.classList = 'block__PVD_dsc';
pvdDsr.textContent = 'Фасовка';

const dsrFooter = document.createElement('p');
dsrFooter.classList = 'block__PVD_dsc_footer';
dsrFooter.innerHTML = `На пакеты от 400 мм 
<br>
<br> ПНД от 20 мкм 
<br> ПВД от 50 мкм
<hr>
ПНД 
 <br/>150кг - ${pricePackage} 
 <br/>300кг - ${pricePackage - 10} 
 <br/>500кг - ${pricePackage - 20}
<hr>
ПВД
<br/>150кг - ${pricePackage - 10}  
<br/>300кг - ${pricePackage - 15}  
<br/>500кг - ${pricePackage - 25} `;
blockPVD.append(pvdDsr, dsrFooter);

export const blockPND = document.createElement('div');
blockPND.classList = 'block block__PND hidden';

const pndDsr = document.createElement('h2');
pndDsr.classList = 'block__PND_dsc';
pndDsr.textContent = 'Майка';

const dsrFooterPND = document.createElement('p');
dsrFooterPND.classList = 'block__PND_dsc_footer';
dsrFooterPND.innerHTML = `
24х40
<br> - мин партия 20тыс
<hr>
28х50
<br> - мин партия 15тыс
<hr>
40х60 и 40х70
<br> - мин партия 5тыс
<hr>
<br>
начальная ценна по таблице от 10тыс!
<br>
<br>
<br>
<br>`;
blockPND.append(pndDsr, dsrFooterPND);

allBlock.append(blockPVD, blockPND);
