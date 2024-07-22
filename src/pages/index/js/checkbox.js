import { calculator } from "./calculator";
export let f = 0.92;

document
  .getElementById('toggle-checkbox')
  .addEventListener('change', function () {
    if (this.checked) {
      f = 0.95;
    } else {
      f = 0.92;
    }
  });

// Чекбокс пленка
export let format = 2;

export function tapeCheckbox() {
  const formatTapeBlock = document.createElement('div');
  formatTapeBlock.classList.add('block__tape');

  const formatTape = document.createElement('p');
  formatTape.classList.add('block__name', 'block__name-format');
  formatTape.textContent = 'Рукав';

  const checkboxContainer = document.createElement('div');
  checkboxContainer.classList.add('block__input');

  const labelSwitch = document.createElement('label');
  labelSwitch.classList.add('switch');

  const inputCheckbox = document.createElement('input');
  inputCheckbox.id = 'format-checkbox';
  inputCheckbox.type = 'checkbox';

  const spanSlider = document.createElement('span');
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

const checkboxCalc = document.querySelector('.checkbox-block__calc');
const calc = document.querySelector('.calculator');

checkboxCalc.addEventListener('click', () => {
  calculator.classList.toggle('visible');
  calculator.classList.toggle('hidden');
});