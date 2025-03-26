// 在本小节，你将会学习如何使用 JavaScript 和 DOM API 特性交替显示两张图片。当用户点击图片时进行切换。
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src"); /*获取这张图片的 src 属性值。*/
  /* 用一个if语句来判断 src 的值是否等于原始图片的路径 */
  if (mySrc === "images/img1.jpg") {
    myImage.setAttribute("src", "images/img2.jpg");
  } else {
    myImage.setAttribute("src", "images/img1.jpg");
  }
};

// 下面添加欢迎信息，在用户第一次访问站点时弹出
// 打开 index.html，在 <script> 元素前添加下列代码：
// <button>Change user</button>
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  // prompt()函数弹出一个对话框，让用户输入信息
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    // 代码调用 localStorage API，它允许我们将数据存储在浏览器中并供后续获取
    // 我们使用 localStorage 的 setItem() 函数创建并存储一个'name' 的数据项，将它的值设置为 myName 变量
    myHeading.textContent = "Welcome, " + myName;
    // 最后将标题的 textContent 属性设置为带有用户新设置的名字的字符串
  }
}

// 在函数声明的后面添加下列条件语句块。我们称之为初始化代码，因为它在初次加载时开始工作。
if (!localStorage.getItem("name")) {
  //检测 name 数据是否存在
  //若不存在，调用 setUserName() 创建 name 数据
  setUserName();
} else {
  //若存在，调用getItem()获取用户名，然后设置网页标题
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome, " + storedName;
}

//设置按钮的 onclick 事件处理器。按钮点击时，运行 setUserName() 函数。这样用户就可以通过点击按钮设置新名字了。
myButton.onclick = function () {
  setUserName();
};
