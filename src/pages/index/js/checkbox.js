// import { block } from "./block-tape";

export let f = 0.92;

document
  .getElementById("toggle-checkbox")
  .addEventListener("change", function () {
    if (this.checked) {
      f = 0.95;
    } else {
      f = 0.92;
    }
  });

// Чекбокс пленка
export let format = 2;

export function tapeCheckbox() {
  const formatTapeBlock = document.createElement("div");
  formatTapeBlock.classList.add('block__tape');

  const formatTape = document.createElement("p");
  formatTape.classList.add("block__name", 'block__name-format');
  formatTape.textContent = "Рукав";

  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add('block__input')

  const labelSwitch = document.createElement("label");
  labelSwitch.classList.add("switch");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.id = "format-checkbox";
  inputCheckbox.type = "checkbox";

  const spanSlider = document.createElement("span");
  spanSlider.classList.add("slider");

  labelSwitch.append(inputCheckbox, spanSlider);
  checkboxContainer.append(labelSwitch);
  formatTapeBlock.append(formatTape, checkboxContainer)

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