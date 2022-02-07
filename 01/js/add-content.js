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

var question = prompt("Введите строку", ''); // переменная для ввода строки

function countVowels(question) {   // Создаем функцию для показа количества гласных
	question = question.toLowerCase();  //переводим в нижний регистр введенную информацию

	var vowels = "ауоыиэяюёе"; // строка с гласными для перебора с введенными данными
	var	count = 0; // переменная для записи введенных гласных

	for (var i = 0; i < question.length; i++) { // цикл для перебора букв введенной информации

		if (vowels.indexOf(question[i]) !== -1) {  // условие перебора 
			count++;
		}			
	}
return count;  // Возвращаем результат колличества глассных
}
var a = countVowels(question); // присваивание переменной значения функции
alert('Колличество гласных в слове:' + ' ' + a);




// window.onload = function() {
//     new_user();
//   };

//   function  new_user() {
//     var fio="";
//     var vozrast;
//     var pol;
//     var pens;
//     var pens_confirm;
//     var vozrast_days;
//     var vozrast_future;

//     enter_fio();
//     enter_vozrast();
//     enter_pol();


//       function enter_fio() {
//         function enter_fio(question) {
//           var answer=prompt(question);
//           if (!answer || isFinite(parseInt(answer))){
//             enter_fio(question);
//           } else{
//             fio+= answer+" ";
//           }
//         }
//         enter_fio("Введите вашу фамилию: ");
//         enter_fio("Введите вашу имя: ");
//         enter_fio("Введите вашу отчество: ");

//       }



//     function enter_vozrast() {

//       vozrast=parseInt(prompt("Введите возраст"));
//       if (isFinite(vozrast)){
//         vozrast_days=vozrast*365;
//         vozrast_future=vozrast+5;
//       } else {
//         enter_vozrast();
//       }
//     }

//     function enter_pol() {
//       pol=confirm("Ваш пол - мужской?");
//       pol?pens=65:pens=60;
//       if(pens==65&&vozrast>=pens || pens==60&&vozrast>=pens) {
//         pens_confirm="да";
//       } else{
//         pens_confirm="нет"
//       }
//       if(pol){
//         pol="мужской";
//       } else{
//         pol="женский";
//       }
//     }



//     if (vozrast!=0&&fio.length!=0){
//       alert("ваше ФИО: "+fio+"\nваш возраст в годах: " + vozrast +"\nваш возраст в днях: "+vozrast_days+"\nчерез 5 лет вам будет: "+vozrast_future + "\nваш пол: " + pol +"\nвы на пенсии: " + pens_confirm );
//     } else {
//       alert("Введите данные снова в корректной форме");
//     }


//   }
