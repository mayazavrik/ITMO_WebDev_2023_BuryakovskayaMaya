let BODY = document.querySelector('body');
//возвращает первый найденный элемент с тэгом body?или что это? 

function addBlock(width, height, row) {
  //создаем функцию, в которую передаем 3 параметра
  let logo = document.createElement('div');
  //создаем переменную, которая создает див
  logo.style.width = `${width}px`;
  logo.style.height = `${height}px`;
  //создаем две переменные дальше непонятно
  let randomBackground = Math.floor(Math.random() * 2);
  //создаем переменную где возвращается число с плавающей точкой от 0 до 1,
  //умноженное на 2. и округленное в меньшую сторону
  if (randomBackground == 1) {
    logo.style.background = `#000`;
    //если значение переменной 1 то создаем переменную с цветом 0
  } else {
    logo.style.background = `#eee`;
    //в другом случае с цветом е
  }

  row.appendChild(logo);
  //вставляем в конец row(где он?) значение logo
}

function rows(width, height, column, counterBlocks) {
  //создаем функцию, в которую передаем 4 параметра
  let row = document.createElement('div');
  //создаем переменную, которая создает див
  row.style.width = `${width}px`;
  row.style.height = `${height}px`;
  row.style.display = 'flex';
  while (counterBlocks--) {
    //не понимаю. вроде уменьшение на один, но где условие
    addBlock(20, 20, row);
  }
  let row2 = row.cloneNode(true);
  row2.style.flexDirection = 'row-reverse';
  column.appendChild(row);
  column.appendChild(row2);
}

function columns(width, height, counterBlocks, block) {
  let column = document.createElement('div');
  column.style.width = `${width}px`;
  column.style.height = `${height}px`;
  column.style.display = 'flex';
  block.appendChild(column);
  rows(60, 20, column, counterBlocks);
}

function mainBlock(counterColumns, counterBlocks) {
  let block = document.createElement('div');
  BODY.appendChild(block);
  while (counterColumns--) {
    columns(100, 20, counterBlocks, block);
  }
}

function AllCartoons(count) {
  while (count--) {
    mainBlock(8, 4);
  }
}
AllCartoons(9);
