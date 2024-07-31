const dragItem = document.querySelector('.calculator');
let active = false;
let currentX, currentY, initialX, initialY;
let xOffset = 0,
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
  el.style.transform = `translate(${xPos}px, ${yPos}px)`;
}

// При загрузке страницы устанавливаем позицию из localStorage
window.onload = function () {
  const savedPosition = JSON.parse(localStorage.getItem('position'));
  if (savedPosition) {
    dragItem.style.transform = `translate(${savedPosition.x}px, ${savedPosition.y}px)`;
    xOffset = savedPosition.x;
    yOffset = savedPosition.y;
  }
};

function dragEnd() {
  initialX = currentX;
  initialY = currentY;

  active = false;

  // Сохраняем текущие координаты в localStorage
  localStorage.setItem('position', JSON.stringify({ x: xOffset, y: yOffset }));
}