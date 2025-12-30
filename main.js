const inputOne = document.getElementById("num1");
const inputTwo = document.getElementById("num2");
const calculator = document.getElementById("calculation");
const result = document.getElementById("sum");

console.log(num1);
console.log(num2);
console.log(calculator);
console.log(result, "sum");
calculator.addEventListener("click", () => {
  const getValueInputOne = Number(inputOne.value);
  const getValueInputTwo = Number(inputTwo.value);
  // const totalvalue= getValueInputOne*(1+getValueInputTwo/100);
  result.textContent = getValueInputOne * (1 + getValueInputTwo / 100);
});
