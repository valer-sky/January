"use strict";
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Добрый вечер!';
} else if (hourNow > 12) {
    greeting = 'Добрый день!';
} else if (hourNow > 0) {
    greeting = 'Доброе утро!';
} else {
    greeting = 'Приветствуем!';
}

document.write('<h3>' + greeting + '</h3>');

let item = document.getElementsByTagName('h1');
console.log(item);
item[0].style= 'display: none';

let isDragging = false;

document.addEventListener('mousedown', function(event) {

  let dragElement = event.target.closest('.draggable');

  if (!dragElement) return;

  event.preventDefault();

  dragElement.ondragstart = function() {
      return false;
  };

  let coords, shiftX, shiftY;

  startDrag(dragElement, event.clientX, event.clientY);

  function onMouseUp(event) {
    finishDrag();
  };

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  // в начале перемещения элемента:
  //   запоминаем место клика по элементу (shiftX, shiftY),
  //   переключаем позиционирование элемента (position:fixed) и двигаем элемент
  function startDrag(element, clientX, clientY) {
    if(isDragging) {
      return;
    }

    isDragging = true;

    document.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseup', onMouseUp);

    shiftX = clientX - element.getBoundingClientRect().left;
    shiftY = clientY - element.getBoundingClientRect().top;

    element.style.position = 'fixed';

    moveAt(clientX, clientY);
  };

  // переключаемся обратно на абсолютные координаты
  // чтобы закрепить элемент относительно документа
  function finishDrag() {
    if(!isDragging) {
      return;
    }

    isDragging = false;

    dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
    dragElement.style.position = 'absolute';

    document.removeEventListener('mousemove', onMouseMove);
    dragElement.removeEventListener('mouseup', onMouseUp);
  }

  function moveAt(clientX, clientY) {
    // вычисляем новые координаты (относительно окна)
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;

    // проверяем, не переходят ли новые координаты за нижний край окна:
    // сначала вычисляем гипотетический новый нижний край окна
    let newBottom = newY + dragElement.offsetHeight;

    // затем, если новый край окна выходит за пределы документа, прокручиваем страницу
    if (newBottom > document.documentElement.clientHeight) {
      // координата нижнего края документа относительно окна
      let docBottom = document.documentElement.getBoundingClientRect().bottom;

      // простой скролл документа на 10px вниз имеет проблему -
      // он может прокручивать документ за его пределы,
      // поэтому используем Math.min(расстояние до конца, 10)
      let scrollY = Math.min(docBottom - newBottom, 10);

      // вычисления могут быть не совсем точны - случаются ошибки при округлении,
      // которые приводят к отрицательному значению прокрутки. отфильтруем их:
      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, scrollY);

      // быстрое перемещение мыши может поместить курсор за пределы документа вниз
      // если это произошло -
      // ограничиваем новое значение Y максимально возможным исходя из размера документа:
      newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
    }

    // проверяем, не переходят ли новые координаты за верхний край окна (по схожему алгоритму)
    if (newY < 0) {
      // прокручиваем окно вверх
      let scrollY = Math.min(-newY, 10);
      if (scrollY < 0) scrollY = 0; // проверяем ошибки точности

      window.scrollBy(0, -scrollY);
      // быстрое перемещение мыши может поместить курсор за пределы документа вверх
      newY = Math.max(newY, 0); // newY не может быть меньше нуля
    }


    // ограничим newX размерами окна
    // согласно условию, горизонтальная прокрутка отсутствует, поэтому это не сложно:
    if (newX < 0) newX = 0;
    if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
      newX = document.documentElement.clientWidth - dragElement.offsetWidth;
    }

    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
  }

});

// Домашка

// let firstName = prompt('Ваше имя?', '');

// // for(let i = 0; i < 2; i++) {
// //     let firstName = prompt('Ваше имя?', '');


// //     if (firstName != null && firstName != '' && firstName != typeof Number) {

// // } else {
// //     prompt('Введите правильное значение', '');
// // } 

// // }



    

// let secondName = prompt('Ваша фамилия?', '');
// let anoterName = prompt('Ваше отчество?', '');

// let age = +prompt('Ваш возраст в годах', '');
// let userSex = confirm('Ваш пол мужской?');
// let oldYear = confirm('Вы на пенсии?');



// let anketa = {

// };
// let fio = `Ваше ФИО : ${firstName} ${secondName} ${anoterName}`;
// let ageYears = `Ваш возвраст в годах: ${age}`;
// let year = 365;
// let ageDays = year * age;
// let fiveYearsLater = age + 5;


// let sex;
//  if (userSex === true) {
//  sex = 'мужской';
//  } else {
//       sex = 'женский';
//  }

//  let t = (oldYear === true) ? 'да' : 'нет';

// // let ageDays = function calc(year, age) {
// //     return(year * age);
// // };

// anketa = fio + ' ' + 
//  ageYears + ' ' + 
//  'Ваш возраст в днях' + ' ' + ageDays + ' ' +
//   'Через 5 лет вам будет: ' + ' ' + fiveYearsLater + ' ' +
//   'ваш пол:' + ' ' + sex + ' ' + 
//   'вы на пенсии? : ' + ' ' + t;


// alert(anketa);


// Домашка 2

// let question = prompt("Введите строку");// переменная для ввода строки

// function showVowels (question) {  // Создаем функцию для показа количества гласных
//    var arr = question.toLowerCase().split(''); // превращаем  введенную  пользователем строку в массив из символов и переводим в нижний регистр
//    var vowels = "аеёиоуыэюя";// строка с гласными для перебора с введенными данными
   
//     var res = arr.reduce( (sum, val) => {   // при помощи метода reduce перебираем массив arr
//       if (vowels.indexOf (val) !==-1) { 
//          sum++; // добавляем в кол-во найденных гласных +1
//       }
//       return sum; // Возвращаем новую сумму (или старую, если гласных нет).
//    }, 0); // Запускаем reduce с нулевой суммой
//    return res;
// }
// var result = showVowels(question);// присваивание переменной значения функции
// alert ("Количество гласных: "+ result);

// "use strict";

// var question = prompt("Введите строку", ''); // переменная для ввода строки

// function countVowels(question) {   // Создаем функцию для показа количества гласных
// 	question = question.toLowerCase();  //переводим в нижний регистр введенную информацию

// 	var vowels = "ауоыиэяюёе"; // строка с гласными для перебора с введенными данными
// 	var	count = 0; // переменная для записи введенных гласных

// 	for (var i = 0; i < question.length; i++) { // цикл для перебора букв введенной информации

// 		if (vowels.indexOf(question[i]) !== -1) {  // условие перебора 
// 			count++;
// 		}			
// 	}
// return count;  // Возвращаем результат колличества глассных
// }
// var a = countVowels(question); // присваивание переменной значения функции
// alert('Колличество гласных в слове:' + ' ' + a);

// Калькулятор
// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );
  

// выводит четные числа от 2 до 10
// for (var i = 2; i < 11; i += 2) {
// 	alert(i);

//   }

//выводит не четные числа от 1 до 10
// for (var i = 1; i < 10; i += 2) {
// 	 	alert(i);
	
// 	 }
// let i = 0;
// while (i < 3) {
//   alert(i);
// 	i++;
//   }

// for (let i = 0; i < 3; i++) {
// 	alert('number'+ i);

//   }
// var num;
// do {
// 	num = +prompt('Введите число больше 100', '');
// 	if(num < 100) {
// 		break;
// 	}
// }
// while(true) {}


// let value = 0;
// while (value <= 100 || value === '') {

//    value = +prompt('Введите число больше 100', '');

//   if (value < 100 || value === '') {
// 	  value = +prompt('Введите правильно');
// 	  value++;
//   }

  

// }

// switch (browser) {
// 	case 'Edge':
// 	  alert( "You've got the Edge!" );
// 	  break;
  
// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 	  alert( 'Okay we support these browsers too' );
// 	  break;
  
// 	default:
// 	  alert( 'We hope that this page looks ok!' );
//   }
// let brow = prompt('какой у вас браузер?');
// // brow = brow.toLowerCase();

//   if( brow == 'Edge') {
// 	  alert("You've got the Edge!");
//   } else if (brow === 'Chrome'|| brow === 'Firefox' || brow === 'Safari' || brow === 'Opera' ) {
// alert('Okay we support these browsers too');
//   } else {
// 	  alert('We hope that this page looks ok!');
//   }

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
// 	case 0:
//    alert('Вы ввели число 0');
//    break;
//    case 1: 
//    alert('Вы ввели число 1');
//    break;
//    case 2:
//    case 3:
// 	alert('Вы ввели число 2, а может и 3');
// 	break;
// }

// function checkAge(age) {
// 	return (age > 18) ? true : confirm('Родители разрешили?');
	
//   } 
//   checkAge();
//   alert(checkAge(34));

//  function min(a,b) {
//  if (a < b) {
// 	 return a;

//  } else if (a > b) {
// 	 return b;
//  } else if (a == b) {
// 	 return a;
//  }
//  } 
//  min();
//  alert(min(2,5));
//  alert(min(3,-1));
//  alert(min(1, 1));
// function min(a,b) {
// 	return (a < b) ? a : b;
// }
// min();
// alert(min(2,5));
//  alert(min(3,-1));
//  alert(min(1, 1));
// let x;
// let n;
// let rez;
// function pow(x,n) {
	
// 	x = +prompt('Введите число x', '');
// 	n = +prompt('Введите число n', '');
	 
// if (n < 1) {
//   alert('Ноль не поддерживается');
// } else {
// 	return x ** n;
//  }
// }	
	
// alert(pow(x,n));
  
//   function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );

// let user = {};
// user.name = 'Jhon';
// user.surname = 'Smith';
// console.log(user);
// user.name = 'Pete';
// console.log(user);
// delete user.name;
// console.log(user);
// let schedule = {};
// function isEmpty(obj) {
//     for ( let key in schedule) {
//         return false;
//     } 
//     return true;
    

// }
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
// //   let a = Object.values(salaries);
// //   console.log(a);
  
   
//    let sum = Math.max(Object.values(salaries));

// console.log(sum);



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   alert(sum); // 390

// let obj = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

// function calculator = {
//     sum() {
//       return this.a + this.b;
//     },

    
//     read() {
//         this.a = +prompt('a?', 0);
//      this.b = +prompt('b?', 0);
//     },
//     mul(){
//         return this.a * this.b;
//     }
//   };
//    calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
// let a;
// let b;
// function calc(a, b) {
//     a = +prompt('введите число', 'a');
//     b = +prompt('введите число', 'b');
//    return (a * b);
// }
// alert(calc());
// var lowerStr;
// function checkSpam(str) {
//     lowerStr = str.toLowerCase();
//     if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
//         alert("Совпадение есть");
// } else {
//     alert('false');
// }
// }
// checkSpam("xxxxXXXXXXXXXXxxxxxxxxxxxxx");

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
//   }
    
    

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 10);
// console.log(truncate());
// var price = "$120";
// function extractCurrencyValue(str) {
    
// }
// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }
//   extractCurrencyValue();
//   console.log(extractCurrencyValue("$120"));

// var styles = ['Джаз', 'Блюз'];
// styles.push = 'Рок-н-Ролл';
// styles.splice(1, 2,'Классика');
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// var lowerStr;
// function checkSpam(str) {
//     lowerStr = str.toLowerCase();
//     if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
//         alert("Совпадение есть");
// } else {
//     alert('false');
// }
// }
// checkSpam("xxxxXXXXXXXXXXxxxxxxxxxxxxx");
// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// for (let name of arr) {
//   alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }
// var a;
// var b;
// var c;
// function camelize(str) {
//     a = str.split('-');
//   b = a.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
//    console.log(b);
//    c = b.join('');
// }
// camelize("-webkit-transition");
// console.log(c);
// var num = 123;
// num.split('');
// console.log(num);
// var arr;
//    arr.split('');
 
//   console.log(arr);
// var str;
// function showArr (num) {
//     str = num;
//     str = String(str);
//    return str.split('');

// } 
// showArr();

// console.log(showArr(8675309)); 
// var filterList = [1,'a','b',0,15,'fr', 34253543,'t','7'];

// filterList = filterList.filter(i => typeof i === "number");
// console.log(filterList); 
// var str;
// var vowels = "eyuioa";
// function disemvowel(str) {

//      str = str.replace(/a/gi,'').replace(/e/gi,'').replace(/i/gi,'').replace(/o/gi,'').replace(/u/gi,'');
  
//     return str;
  
//   }
// console.log(disemvowel("hbfhgfdcghthfjgerytkgp;ip;.,fggfsgtmfyumtjykfyuk!"));

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);

// console.log(arr); // 8, 5, 2, 1, -10
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted;
// function copySorted(arr) {
//     return arr.slice().sort();
//   }

// sorted = copySorted(arr);
// console.log(arr);
// console.log(sorted);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// console.log(names);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];
// function getAverageAge(users) {
//     let names = arr.map(item => item.age);
//     let ss = names.reduce((sum, curr) => sum + curr) / 3;
// }
// getAverageAge();

// console.log(getAverageAge(users)); // (25 + 30 + 29) / 3 = 28;

// let arr = [1, 2, 3];
// function shuffle(arr) {
//  arr.map(item => item.sort())
// }
// shuffle(arr);

// function Calculator() {
    
//     this.read = function() {
//         this.a = +prompt('Введите значение', '');
//         this.b = +prompt('Введите значение', '');
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         this.value += +prompt('Введите значение', '');
           
//         };
// }
// let accumulator = new Accumulator(100); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению

// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value);

