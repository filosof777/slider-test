let elBtnLeft = document.querySelector('.btn:nth-child(1)');
let elBtnRight = document.querySelector('.btn:nth-child(2)');
let elList = document.getElementsByClassName('list');
let elItem = document.getElementsByClassName('item');
let a = 0;

function slideLeft() {
  for (let i = 0; i < elItem.length; i++) {
    if (elItem[i].style.left == 0) {
      elItem[i].style.left = "0%";
      break;
    }
  }
}

function slideRight() {
  for (let i = 0; i < elItem.length; i++) {
    if (elItem[i].style.left == 0) {
      elItem[i].style.left = "0%";
      break;
    }
  }
}