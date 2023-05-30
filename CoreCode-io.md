# BOOTCAMP - CORE CODE

# INDEX
[1. Week 08](https://github.com/EveCS/Bootcamps_Eve/blob/main/CoreCode-io.md#1-week-08--challenges)

[2. Week 09]([https://github.com/EveCS/Bootcamps_Eve/blob/main/CoreCode-io.md#1-week-09--challenges](https://github.com/EveCS/Bootcamps_Eve/blob/main/CoreCode-io.md#2-week-09--challenges))
_________________________________________________

## 1. Week 08 | Challenges

### Monday
#### 1. Training JS #7: if..else and ternary operator
```js
function saleHotdogs(n){
  let totalPrice;
  if(n < 5) {
    return n*100;
  } else if( n < 10) {
    return n*95;
  } else if( n >= 10){
    return n*90;
  }
}
```
#### 2. Training JS #8: Conditional statement--switch
```js
function howManydays(month){
  var days;
  switch (month){
    case 1:
      days=31;
      break;
    case 2:
      days=28;
      break;
    case 3:
      days=31;
      break;
    case 4:
      days=30;
      break;
    case 5:
      days=31;
      break;
    case 6:
      days=30;
      break;
    case 7:
      days=31;
      break;
    case 8:
      days=31;
      break;
    case 9:
      days=30;
      break;
    case 10:
      days=31;
      break;
    case 11:
      days=30;
      break;
    case 12:
      days=31;
      break;
  }
  return days;
}
```
#### 3. Basic Calculator
```js
function calculate(num1, operation, num2) {
 //TODO: make a basic calculator. 
  var result;
  if(num2 === 0 && operation === "/"){
    //"Invalid operation, cannot divide by 0";
    return null;
  }
  switch(operation){
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          result = num1 / num2;
          break;
      default:
          result = null;
          break;
  }
  return result;
}
```
### Tuesday
#### 1. Even or odd
```js
function evenOrOdd(number) {
  if( number%2 === 0 ) {
    return "Even"
  } else { 
    return "Odd"
  }
}
```
#### 2. A wolf in sheep's clothing
```js
function warnTheSheep(queue) {
  let posWolf = queue.indexOf('wolf');
  if( posWolf == queue.length-1) {
    return "Pls go away and stop eating my sheep"
  } else {
    let posSheep = queue.length - (posWolf +1);
    return "Oi! Sheep number " + posSheep + "! You are about to be eaten by a wolf!"
  }
}
```
#### 3. Decode the morse code
```js
decodeMorse = function(morseCode){

  let frase = [];
  let palabras = morseCode.trim().split('   ');
  let letrasMorse = [];
  for (let i = 0; i < palabras.length; i++) {
    letrasMorse = palabras[i].split(' ');
    for (let j = 0; j < letrasMorse.length; j++) {
      letrasMorse[j] = MORSE_CODE[letrasMorse[j]];
    }
    frase.push(letrasMorse.join(''));
  }
  return frase.join(' ').trim();
}
```
### Wednesday
#### 1. Who likes it?
```js
function likes(names) {
  if(names.length === 0) {
    return "no one likes this";
  } if(names.length === 1) {
      return names[0] + " likes this";
    } if(names.length <= 2) {
      return names[0] + " and " + names[1] + " like this";
    }if (names.length <= 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      return (names[0] +", "+ names[1] +" and "+ (names.length - 2) +" others like this");
    }
}
```
#### 2. Bit counting
```js
var countBits = function(n) {
  // Program Me
  bits = n.toString(2);
  let counter=0;
  for(let i=0; i < bits.length; i++) {
    if(bits[i] === "1") counter++;
  }
  return counter;
};
```
#### 3. Your order, please
```js
function order(words){
  let phrase = words.split(' ');
  let orderPhrase=[];
  
  for(let i=0; i <= phrase.length; i++) {
     for (let j = 0; j < phrase.length; j++) {
       if (phrase[j].indexOf(i) > -1) {
        orderPhrase.push(phrase[j]);
       }
     }
  }
  return orderPhrase.join(' ');
}
```
### Thursday
#### 1. Counting duplicates
```js
function duplicateCount(text) {
  let counter = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
      counter++;
      text = text.replace(new RegExp(text[i], 'g'), '');
      i = i - 1;
    }
  }
  return counter;
}
```
#### 2. Valid parentheses
```js
function validParentheses(parens) {
  let counter1 = 0, counter2 = 0;
  for(let i = 0; i < parens.length; i++) {
    if(parens[i] === "(" ) counter1++;
    else counter2 ++;
  }
  if(counter1 === counter2) return true;
  else return false;
}
```
#### 3. Convert string to camel case
```js
function toCamelCase(str) {
  let phrase = '';
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && (str[i - 1] === '_' || str[i - 1] === '-')) {
      phrase += str[i].toUpperCase();
    } else if (str[i] != '-' && str[i] != '_') {
      phrase += str[i];
    }
  }
  return phrase;
}
```
## 2. Week 09 | Challenges

### Monday
#### 1. "this" is a problem
```js
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}
```
#### 2. "Thinkful - List and Loop Drills: Lists of lists"
```js
function processData(data){
  let reduce = [];
  let total=1;
  for(let i=0; i<data.length; i++) {
    reduce.push(data[i][0]-data[i][1]);
  }
  for(let i = 0; i < reduce.length; i++) {
    total = total * reduce[i];
  }
  return total;
}
```
#### 3. Stop gninnipS My sdroW!
```js
function spinWords(string){
  string = string.split(' ');
  for(let i = 0; i < string.length; i++) {
    if(string[i].length >= 5) {
      let word = string[i].split('');
      let wordRev = word.reverse();
      string[i] = wordRev.join('');
    }
  }
  return string.join(' ');
}
```
### Tuesday

#### 2. Who likes it?
```js
function likes(names) {
  if(names.length < 1) return "no one likes this"
  if(names.length < 2) return names[0] + " likes this"
  if(names.length < 3) return names[0]+ " and " + names[1] + " like this"
  if(names.length < 4) return names[0]+ ", " + names[1] +  " and " + names[2] + " like this"
  else return names[0]+ ", " + names[1] +  " and " + (names.length-2) + " others like this"
}
```
### Wednesday

#### Moving Zeros To The End
```js
function moveZeros(arr) {
  let zeros , array;
  zeros = arr.filter(element => element === 0);  
  array = arr.filter(element => element !== 0);
  return array.concat(zeros);
}
```
#### Valid Parentheses
```js
function validParentheses(parens) {
  parens=parens.split('');
  let initP = parens.filter(element => element === ('(')); ;
  let closeP = parens.filter(element => element === ')');
   
  if(initP.length === closeP.length) return true;
  else return false;
}
```
### Thursday

#### 1. The Hashtag Generator
```js
function generateHashtag (str) {
  if(str.length === 0) return false;
  if(str.length > 140 ) return false + " Too long";
  
  str = str.split(' ');
  str = str.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  str = "#" + str.join('');
  return str;
}
```
#### 2. String incrementer
```js
function incrementString (str) {
  let num = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(parseInt(str[i]))) {
      break;
    }
    num = str[i] + num;
  }
  if (num === "") {
    return str + "1";
  }
  let newNum = (parseInt(num) + 1).toString();
  while (newNum.length < num.length) {
    newNum = "0" + newNum;
  }
  return str.slice(0, str.length - num.length) + newNum;
}
```

```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
```
