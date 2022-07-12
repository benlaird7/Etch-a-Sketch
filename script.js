// The container for the Divs
const container = document.getElementById("container");

// Function to create square block

sqaureBlock = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).id = "grid-item";
  };
};

sqaureBlock(16, 16);
