const container = document.querySelector(".container");
const gridResize = document.querySelector(".grid-resize");

function createGrid(squarePerAxis) {
  const totalSquares = squarePerAxis ** 2;
  const squareSize = 512 / squarePerAxis;

  container.textContent = "";

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  }
}
createGrid(16);

gridResize.addEventListener("click", () => {
  const userInput = prompt(
    "Enter the number of squares per axis(Maximum: 100)",
  );
  if (userInput === null) return;
  const input = parseInt(userInput);
  if (input >= 1 && input <= 100) {
    createGrid(userInput);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
