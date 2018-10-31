"use strict";

// var age = prompt ("age", "");

// if(!(age >= 14 && age <= 90)){
// 	alert ("Age is correct");
// }else{
// 	alert("Age is incorrect");
// }

// var b = "776";
// alert(Number(b)  + 5);

// nextPrime: for (var index = 2; index < 20; index++) {
//   for (var j = 2; j < index; j++) {
//     console.log(index);
//     if (index % j == 0) continue nextPrime;
//   }
//   alert(index);
// }

// var a = +prompt('a?', '');

// switch (a){
// 	case 0:
// 		alert(0);
// 		break
// 	case 1:
// 		alert(1);
// 		break
// 	case 2:
// 	case 3:
// 		alert(2,3);
// 		break;
// }

// function showMessage() {
//   alert( 'Привет всем присутствующим!' );
// }

// showMessage();
// showMessage();

// function checkAge(age) {
// 	var res = (age > 18) ? true: confirm('Родители разрешили?');
// 	return res
// }

// function checkAge(age) {
// 	var res = (age > 18) || confirm('Родители разрешили?');
// 	return res
// }

function findMin(a, b){
	
	var res;

	if(a>b){

		res = a;
	}else if (a<b){
		
		res = b 
	}else{
		res = a	
	}

	alert(res);
	return res;
}

function pow(a, b){
	var res = a;
	for(var i = 1; i < b; i++ ){
		res *= a;
	}
	alert(res);
	return res;	
}

// var firstNumber = prompt("Введите первое число", "");
// var secondNumber = prompt("Введите второе число", "");

// findMin(firstNumber,secondNumber);
// pow(firstNumber,secondNumber);


function sumCycle(n){
	var res = 0;
	for(var i = 0 ; i <= n ; i++){
		res += i
	}
	return res;
}

// alert(sumCycle(100));

function sumReq(n){
	var res = 0;
	if (n  >  1 ) {
	 	return	res = n + sumReq( n - 1);
	}else{
		return 1;
	}
} 

// alert(sumReq(100));

function sumForm(n){
	var res = n * ( n + 1 ) / 2;
	return res;
}

// alert(sumForm(100));

function factorial(n){
	var res = 0;
	if ( n == 0) {
		return res =  1;
	}else{
		res = n * factorial(n - 1);
		return res;
	}	
}

// alert(factorial(5));

function fib(n){
	return (n > 1) ? fib( n - 1 ) + fib ( n -2 ): n 
}

// alert(fib (7));

var str = "sasdasdasd";
console.log( "String have: ", str.length + " symbols" );

var n = 255;
console.log("Converted :", n.toString(16));

var m = 254.33;
console.log("Round :", Math.round(m));

// var n = 12.3421312;
// alert( n.toFixed(3) );

// var firstNumber = +prompt("Введите первое число", "");
// var secondNumber = +prompt("Введите второе число", "");

function sumTwo(a, b) {
    if( !(isNaN(a) && isNaN(b)) ){
        return alert( (a + b) );
    }
    return alert("Please enter numbers!");
}

// sumTwo(firstNumber, secondNumber);

function sumTwoRound(a, b) {
    if( !(isNaN(a) && isNaN(b)) ){
        return alert( (a + b).toFixed(2) );
    }
    return alert("Please enter numbers!");
}

// sumTwoRound(firstNumber, secondNumber);

function round(a) {

    if( !(isNaN( a ) ) ){
        var res = a - (~~a);
        return alert( Math.round(res * 100) / 100 );
    }
    return alert("Please enter numbers!");
}

// round(firstNumber);

function  ucFirst(a){

    var tmp = a.slice(0 , 1);
    var tmp3 = tmp.toUpperCase();
    var tmp2 = a.slice(1);
    var res = tmp3 + tmp2;
    return alert(res);
}

// ucFirst("вася");

function checkSpam(str){
    var tempString = str.toLowerCase();
    var targetWord = "viagra";
    var targetWord2 = "xxxxx";

    for(var i = 0 ; i < tempString.length; i++){
        var foundPos = tempString.indexOf(targetWord, i);
        var foundPosWordTwo = tempString.indexOf(targetWord2, i);
        if (foundPos > -1 || foundPosWordTwo > -1 ) {
            // alert("Spam!");
            return true;
        }else {
            return false;
        }
    }
}

alert( checkSpam("buy ViAgRA now") );
alert( checkSpam("innocent rabbit") );
alert( checkSpam('free xxxxx') );