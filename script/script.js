const burgButton = document.getElementById('burger-menu');
const navBurg = document.querySelector('.burger_navigation');
const overlay = document.querySelector('.overlay');

if (burgButton) {
  burgButton.addEventListener('click', (e) => {
    burgerClick();
  });
}

if (overlay) {
    overlay.addEventListener('click', (e) => {
      burgerClick();
    });
}

if (navBurg) {
    navBurg.addEventListener('click', (e) => {
      burgerClick();
    });
}

function burgerClick () {
    navBurg.classList.toggle('action');
    overlay.classList.toggle('show');
}

// Service Buttons

const btnGarden = document.getElementById('gardenBtn');
const btnLawn = document.getElementById('lawnBtn');
const btnPlant = document.getElementById('plantBtn');

const cardGarden = document.querySelectorAll('.garden');
const cardLawn = document.querySelectorAll('.lawn');
const cardPlant = document.querySelectorAll('.plant');

if (btnGarden) {
  btnGarden.addEventListener('click', (e) => {
    btnPress(btnGarden, cardGarden);
    allBlur();
    });
}

if (btnLawn) {
  btnLawn.addEventListener('click', (e) => {
    btnPress(btnLawn, cardLawn);
    allBlur();
    });
}

if (btnPlant) {
  btnPlant.addEventListener('click', (e) => {
    btnPress(btnPlant, cardPlant);
    allBlur()
    });
}

const setVault = new Set();   /*  коллекция Set для хранения состояния кнопок, почему именно он а не массив?
 Set позволяет хранить уникальные значения, защищая от добавления одинаковых значений через функцию */             
function btnPress(btn, cls) {                 // наверняка эту функцию можно упростить, но сделал как мог
  if(setVault.has(btn) == true) {            // эта итерация для ОТжатия кнопки
    setVault.delete(btn);
    btn.classList.toggle('activeBtn');
    cls.forEach((el) => el.classList.toggle('blur'));
  } else if(setVault.size == 2) {          // если в коллекции более двух элементов, то:
    if (setVault.has(btn) == true) {      //  проверяем есть ли тот, который мы вызваем, если да, то отключаем
      cls.forEach((el) => el.classList.toggle('blur'));
      btn.classList.toggle('activeBtn');
      setVault.delete(btn);
    } else {                            // если нет (два есть и хотят нажать третью) пишем "Нельзя нажать больше двух кнопок"
      alert('Нельзя нажать больше двух кнопок');
    }                          // возможно отжатие с нажатием надо поменять местами проверки на размер колекции
  } else {
    setVault.add(btn);
    btn.classList.toggle('activeBtn');
    cls.forEach((el) => el.classList.toggle('blur'));     // эта итерация для НАжатия кнопки
  }
}

let isVirgin = true; // девственница ли функция(первый ли это её вызов)

function allBlur() {  // сново громоздко, надо найти способ упростить блюр до одной строки(массив карточек не сработал)
  if( isVirgin == true ) {                                       // если да, то идем на хитрость
    cardGarden.forEach((el) => el.classList.toggle('blur'));    //  и пока никто не видит блюрим ВСЕ карточки
    cardLawn.forEach((el) => el.classList.toggle('blur'));     //  а функция выше снимет с нужных
    cardPlant.forEach((el) => el.classList.toggle('blur'));
    console.log('she is virgin')
    return isVirgin = false
  };
  if( isVirgin == false) {                 // если уже вызывалась, то забиваем на неё, 
    console.log('Not virgin enymore')     //  потому как блюрить все болье не нужно
  }
  if( setVault.size == 0 && isVirgin == false) {                // если отжали все кнопки(освободили хранилище)
    cardGarden.forEach((el) => el.classList.toggle('blur'));   // снова идем на хитрость и снимаем блюр со всех карточек
    cardLawn.forEach((el) => el.classList.toggle('blur'));    //  и делаем её девственной(возврат в первоначальное состояние)
    cardPlant.forEach((el) => el.classList.toggle('blur'));
    console.log('Time to become a virgin');
    return isVirgin = true
  }
}

// Prices Unique selection

