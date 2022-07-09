// In this document I am going to be creating an etch a sketch! To do this I will need to create a 16 x 16 sqaure of divs
// Which can change colors when you hover over them


// The container for the Divs
const container = document.getElementById("container");

// Divs
    let verticalDiv = document.createElement('div');
    verticalDiv.className = 'vertical';

    let horizontalDiv = document.createElement('div')
    horizontalDiv.className = 'horizontal';

// Functions to create square block

  sqaureBlock = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

sqaureBlock(16, 16);