let elBtnLeft = document.querySelector('.btn:nth-child(1)');
let elBtnRight = document.querySelector('.btn:nth-child(2)');
let elList = document.querySelector('.list');
let elItem = document.querySelectorAll('.item');
let elImg = document.querySelector('.img');
let a = 1;
let count = 0;
let value = 0;

elBtnRight.addEventListener('click', () => {
  count++;
  value += 100;
  elList.style.transform = `translateX(${-value}%)`;

  if (count == 4) {
    elList.style.transform = `translateX(0px)`;
    count = 0;
    value = 0;
  }
})

elBtnLeft.addEventListener('click', () => {
  if (value == 0) {
    elList.style.transform = `translateX(400%)`;
    count = 4;
    value = 400;
  }

  count--;
  value -= 100;
  elList.style.transform = `translateX(${-value}%)`;
})