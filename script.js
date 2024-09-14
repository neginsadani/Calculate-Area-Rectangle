function accountArea() {
  const length = parseFloat(prompt("Please enter the length:"));
  const width = parseFloat(prompt("Please enter the width:"));
  const area = length * width;
  return area;
}
const area = accountArea();
console.log("The area of the rectangle is: " + area);

function calakeArea(length, width) {
  const area = length * width;
  return area;
}
console.log("The area of the rectangle is:" + calakeArea(5, 10));
