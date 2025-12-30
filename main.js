const inputOne= document.getElementById("num1");
const inputTwo = document.getElementById("num2");
const calculator = document.getElementById("calculation");
const result = document.getElementById("sum");

calculator.addEventListener("click",()=> {
   const getValueInputOne=inputOne.value;
    const getValueInputTwo = inputTwo.value;
    // const totalvalue= getValueInputOne*(1+getValueInputTwo/100);
    console.log (result,"sum")
    result.textContent = getValueInputOne * (1 + getValueInputTwo / 100);
})