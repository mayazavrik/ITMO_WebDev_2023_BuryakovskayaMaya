let BODY = document.querySelector('body');
function addBlock(width, height, row) {
 
  let changeColor = document.createElement('div');
  changeColor.style.width = `${width}px`;
  changeColor.style.height = `${height}px`;
  
  let randomBackground = Math.floor(Math.random() * 2);
  
  if (randomBackground == 1) {
    changeColor.style.background = `#000`;
    
  } else {
    changeColor.style.background = `#eee`;
  }

  row.appendChild(changeColor);
}

function cubes(width, height, column, counterBlocks) {
  let row = document.createElement('div');
  
  row.style.width = `${width}px`;
  row.style.height = `${height}px`;
  row.style.display = 'flex';
  

  let i = 0;
  while(i < counterBlocks ) {
    i++;
    let width = 20;
    let height = 20;
    addBlock(width, height, row);
    
  }
  let rowMirror = row.cloneNode(true);
  rowMirror.style.flexDirection = 'row-reverse';
  column.appendChild(row);
  column.appendChild(rowMirror);
}

function smallRows (width, height, counterBlocks, block) {

  let column = document.createElement('div');
 
  column.style.width = `${width}px`;
  column.style.height = `${height}px`;
  
  column.style.display = 'flex';
  block.appendChild(column);
  
  cubes(60, 20, column, counterBlocks);
}

function mainBlock(countersmallRows , counterBlocks) {
  let block = document.createElement('div');
  BODY.appendChild(block);
  let i = 0;
  while(i < countersmallRows ) {
    i++;
    let width = 120;
    let height = 20;
    smallRows (width, height, counterBlocks, block);
  } 
}

function AllCartoons(count) {
  let width = 6;
  let height= 3;
  let i = 0;
  while(i < count) {
    i++;
    mainBlock(width, height);
  } 
}
AllCartoons(8);
