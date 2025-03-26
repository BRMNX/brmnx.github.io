const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
// 要声明变量，先输入 let 关键字，然后输入变量名：
let myVariable = "ZQ";
myVariable = "YQ";

function multiply(num1, num2) {
  let result = num1 * num2;
  if (result >= 0) {
    return result;
  } else {
    alert("The result is less than zero.");
    return null;
  }
}

document.querySelector("h1").addEventListener("click", function () {
  alert("你拍了拍标题！");
});
// 这里传入给addEventListener()的function称为匿名函数
// 也可以写为addEventListener("click", ()=>{ alert("你拍了拍标题!");})
