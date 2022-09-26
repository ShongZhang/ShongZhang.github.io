/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

alert('hello!');

/*
这里的所有内容
都是注释。
*/

// 这是一条注释。

/*function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}

document.querySelector('html').addEventListener('click', () => {
    alert('别戳我，我怕疼。');
});*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/图片1.png') {
        myImage.setAttribute('src', 'images/图片2.png');
      } else {
        myImage.setAttribute('src', 'images/图片1.png');
      }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla Amazing!,' + storedName;
}/*初始化代码*/

myButton.onclick = function() {
    setUserName();
 }/*随意设置新名*/

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla Amazing!,' + myName;
    }
  }/*set&getItem综合代码*/

  
 
  
