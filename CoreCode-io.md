# BOOTCAMP - CORE CODE

## 1. Week 08 | Challenges

### Monday
#### 1. Training JS #7: if..else and ternary operator
```
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
```
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
```
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
