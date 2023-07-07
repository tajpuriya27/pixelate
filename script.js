let choosenColor;
let myTable = document.getElementsByTagName("table")[0];
let boxMatrix = document.getElementsByTagName("td");

document.getElementById("add-row").addEventListener("click", addRow);
function addRow() {
  const newRow = document.createElement("tr");
  for (let i = 0; i < 10; i++) {
    const newBox = document.createElement("td");
    newRow.appendChild(newBox);
  }
  myTable.appendChild(newRow);
  for (let i = 0; i < boxMatrix.length; i++) {
    boxMatrix[i].addEventListener("click", clickFun);
  }
}

// Adding colors
let myOption = document.getElementsByTagName("select")[0];
myOption.addEventListener("change", optFun);

function optFun(e) {
  choosenColor = e.target.value;
}

function clickFun(e) {
  if (e.target.classList.contains(choosenColor)) {
    e.target.classList.remove(choosenColor);
  } else {
    e.target.removeAttribute("class");
    e.target.classList.add(choosenColor);
  }
}
